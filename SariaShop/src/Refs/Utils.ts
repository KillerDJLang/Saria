import type { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
import type { IItem } from "@spt/models/eft/common/tables/IItem";
import type { IBarterScheme, ITrader } from "@spt/models/eft/common/tables/ITrader";
import type { ITraderAssort, ITraderBase } from "@spt/models/eft/common/tables/ITrader";
import type { ITraderConfig, IUpdateTime } from "@spt/models/spt/config/ITraderConfig";
import type { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import type { ILogger } from "@spt/models/spt/utils/ILogger";
import type { ImageRouter } from "@spt/routers/ImageRouter";
import type { HashUtil } from "@spt/utils/HashUtil";
import type { JsonUtil } from "@spt/utils/JsonUtil";
import type { Currency } from "../Refs/Enums";

import * as fs from "node:fs";
import * as path from "node:path";

export class Utils {
    constructor() {}

    public randomCount(base: number, random: number): number {
        return base + Math.floor(Math.random() * random * 2) - random;
    }

    public loadFiles(dirPath, extName, cb) {
        if (!fs.existsSync(dirPath)) return;
        const dir = fs.readdirSync(dirPath, { withFileTypes: true });
        dir.forEach((item) => {
            const itemPath = path.normalize(`${dirPath}/${item.name}`);
            if (item.isDirectory()) this.loadFiles(itemPath, extName, cb);
            else if (extName.includes(path.extname(item.name))) cb(itemPath);
        });
    }
}

//
//
//

export interface AssortTemplate {
    items: [
        {
            _id: string;
            _tpl: string;
            parentId: string;
            slotId: string;
            upd: {
                StackObjectsCount: number;
                UnlimitedCount: boolean;
            };
        },
    ];
    barter_scheme: {
        [itemid: string]: [
            [
                {
                    _tpl: string;
                    count: number;
                },
            ],
        ];
    };
    loyal_level_items: {
        [itemid: string]: number;
    };
}

//
//
//

export class TraderUtils {
    /**
     * Add profile picture to our trader
     * @param baseJson json file for trader (db/base.json)
     * @param preSptModLoader mod loader class - used to get the mods file path
     * @param imageRouter image router class - used to register the trader image path so we see their image on trader page
     * @param traderImageName Filename of the trader icon to use
     */
    public registerProfileImage(
        baseJson: any,
        modName: string,
        preSptModLoader: PreSptModLoader,
        imageRouter: ImageRouter,
        traderImageName: string,
    ): void {
        // Reference the mod "res" folder
        const imageFilepath = `./${preSptModLoader.getModPath(modName)}res`;

        // Register a route to point to the profile picture - remember to remove the .jpg from it
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/${traderImageName}`);
    }

    /**
     * Add record to trader config to set the refresh time of trader in seconds (default is 60 minutes)
     * @param traderConfig trader config to add our trader to
     * @param baseJson json file for trader (db/base.json)
     * @param refreshTimeSeconds How many sections between trader stock refresh
     */
    public setTraderUpdateTime(
        traderConfig: ITraderConfig,
        baseJson: any,
        minSeconds: number,
        maxSeconds: number,
    ): void {
        // Add refresh time in seconds to config
        const traderRefreshRecord: IUpdateTime = {
            traderId: baseJson._id,
            seconds: {
                min: minSeconds,
                max: maxSeconds,
            },
        };
        traderConfig.updateTime.push(traderRefreshRecord);
    }

    // biome-ignore lint/suspicious/noExplicitAny: traderDetailsToAdd comes from base.json, so no type
    public addTraderToDb(traderDetailsToAdd: any, tables: IDatabaseTables, jsonUtil: JsonUtil): void {
        // Add trader to trader table, key is the traders id
        tables.traders[traderDetailsToAdd._id] = {
            assort: this.createAssortTable(), // assorts are the 'offers' trader sells, can be a single item (e.g. carton of milk) or multiple items as a collection (e.g. a gun)
            base: jsonUtil.deserialize(jsonUtil.serialize(traderDetailsToAdd)) as ITraderBase, // Deserialise/serialise creates a copy of the json and allows us to cast it as an ITraderBase
            questassort: {
                started: {},
                success: {},
                fail: {},
            }, // questassort is empty as trader has no assorts unlocked by quests
        };
    }

    /**
     * Create basic data for trader + add empty assorts table for trader
     * @param tables SPT db
     * @param jsonUtil SPT JSON utility class
     * @returns ITraderAssort
     */
    private createAssortTable(): ITraderAssort {
        // Create a blank assort object, ready to have items added
        const assortTable: ITraderAssort = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {},
        };

        return assortTable;
    }

    /**
     * Add traders name/location/description to the locale table
     * @param baseJson json file for trader (db/base.json)
     * @param tables database tables
     * @param fullName Complete name of trader
     * @param firstName First name of trader
     * @param nickName Nickname of trader
     * @param location Location of trader (e.g. "Here in the cat shop")
     * @param description Description of trader
     */
    public addTraderToLocales(
        baseJson: any,
        tables: IDatabaseTables,
        fullName: string,
        firstName: string,
        nickName: string,
        location: string,
        description: string,
    ) {
        // For each language, add locale for the new trader
        const locales = Object.values(tables.locales.global) as Record<string, string>[];
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }
}

//
//
//

export class AssortUtils {
    protected itemsToSell: IItem[] = [];
    protected barterScheme: Record<string, IBarterScheme[][]> = {};
    protected loyaltyLevel: Record<string, number> = {};
    protected hashUtil: HashUtil;
    protected logger: ILogger;

    constructor(hashutil: HashUtil, logger: ILogger) {
        this.hashUtil = hashutil;
        this.logger = logger;
    }

    /**
     * Start selling item with tpl
     * @param itemTpl Tpl id of the item you want trader to sell
     * @param itemId Optional - set your own Id, otherwise unique id will be generated
     */
    public createSingleAssortItem(itemTpl: string, itemId = undefined): AssortUtils {
        // Create item ready for insertion into assort table
        const newItemToAdd: IItem = {
            _id: !itemId ? this.hashUtil.generate() : itemId,
            _tpl: itemTpl,
            parentId: "hideout", // Should always be "hideout"
            slotId: "hideout", // Should always be "hideout"
            upd: {
                UnlimitedCount: false,
                StackObjectsCount: 100,
            },
        };

        this.itemsToSell.push(newItemToAdd);

        return this;
    }

    public createComplexAssortItem(items: IItem[]): AssortUtils {
        items[0].parentId = "hideout";
        items[0].slotId = "hideout";

        if (!items[0].upd) {
            items[0].upd = {};
        }

        items[0].upd.UnlimitedCount = false;
        items[0].upd.StackObjectsCount = 100;

        this.itemsToSell.push(...items);

        return this;
    }

    public addStackCount(stackCount: number): AssortUtils {
        this.itemsToSell[0].upd.StackObjectsCount = stackCount;

        return this;
    }

    public addUnlimitedStackCount(): AssortUtils {
        this.itemsToSell[0].upd.StackObjectsCount = 999999;
        this.itemsToSell[0].upd.UnlimitedCount = true;

        return this;
    }

    public makeStackCountUnlimited(): AssortUtils {
        this.itemsToSell[0].upd.StackObjectsCount = 999999;

        return this;
    }

    public addBuyRestriction(maxBuyLimit: number): AssortUtils {
        this.itemsToSell[0].upd.BuyRestrictionMax = maxBuyLimit;
        this.itemsToSell[0].upd.BuyRestrictionCurrent = 0;

        return this;
    }

    public addLoyaltyLevel(level: number) {
        this.loyaltyLevel[this.itemsToSell[0]._id] = level;

        return this;
    }

    public addMoneyCost(currencyType: Currency, amount: number): AssortUtils {
        this.barterScheme[this.itemsToSell[0]._id] = [
            [
                {
                    count: amount,
                    _tpl: currencyType,
                },
            ],
        ];

        return this;
    }

    public addBarterCost(itemTpl: string, count: number): AssortUtils {
        const sellableItemId = this.itemsToSell[0]._id;

        // No data at all, create
        if (Object.keys(this.barterScheme).length === 0) {
            this.barterScheme[sellableItemId] = [
                [
                    {
                        count: count,
                        _tpl: itemTpl,
                    },
                ],
            ];
        } else {
            // Item already exists, add to
            const existingData = this.barterScheme[sellableItemId][0].find((x) => x._tpl === itemTpl);
            if (existingData) {
                // itemtpl already a barter for item, add to count
                existingData.count += count;
            } else {
                // No barter for item, add it fresh
                this.barterScheme[sellableItemId][0].push({
                    count: count,
                    _tpl: itemTpl,
                });
            }
        }

        return this;
    }

    /**
     * Reset object ready for reuse
     * @returns
     */
    public export(data: ITrader, blockDupes: boolean): AssortUtils {
        const itemBeingSoldId = this.itemsToSell[0]._id;
        const itemBeingSoldTpl = this.itemsToSell[0]._tpl;
        if (blockDupes) {
            if (data.assort.items.find((x) => x._id === itemBeingSoldId)) {
                return;
            }

            if (data.assort.items.find((x) => x._tpl === itemBeingSoldTpl)) {
                return;
            }
        }

        data.assort.items.push(...this.itemsToSell);
        data.assort.barter_scheme[itemBeingSoldId] = this.barterScheme[itemBeingSoldId];
        data.assort.loyal_level_items[itemBeingSoldId] = this.loyaltyLevel[itemBeingSoldId];

        this.itemsToSell = [];
        this.barterScheme = {};
        this.loyaltyLevel = {};

        return this;
    }

    public pushFromTraderAssort(
        items: IItem[],
        itemTpl: string,
        count: number,
        stackCount: number,
        level: number,
        data: ITrader,
        blockDupes: boolean,
    ) {
        items[0].parentId = "hideout";
        items[0].slotId = "hideout";

        if (!items[0].upd) {
            items[0].upd = {};
        }

        items[0].upd.UnlimitedCount = false;
        items[0].upd.StackObjectsCount = 100;

        this.itemsToSell.push(...items);

        const sellableItemId = this.itemsToSell[0]._id;

        // No data at all, create
        if (Object.keys(this.barterScheme).length === 0) {
            this.barterScheme[sellableItemId] = [
                [
                    {
                        count: count,
                        _tpl: itemTpl,
                    },
                ],
            ];
        } else {
            // Item already exists, add to
            const existingData = this.barterScheme[sellableItemId][0].find((x) => x._tpl === itemTpl);
            if (existingData) {
                // itemtpl already a barter for item, add to count
                existingData.count += count;
            } else {
                // No barter for item, add it fresh
                this.barterScheme[sellableItemId][0].push({
                    count: count,
                    _tpl: itemTpl,
                });
            }
        }

        this.itemsToSell[0].upd.StackObjectsCount = stackCount;

        this.loyaltyLevel[this.itemsToSell[0]._id] = level;

        const itemBeingSoldId = this.itemsToSell[0]._id;
        const itemBeingSoldTpl = this.itemsToSell[0]._tpl;
        if (blockDupes) {
            if (data.assort.items.find((x) => x._id === itemBeingSoldId)) {
                return;
            }

            if (data.assort.items.find((x) => x._tpl === itemBeingSoldTpl)) {
                return;
            }
        }

        data.assort.items.push(...this.itemsToSell);
        data.assort.barter_scheme[itemBeingSoldId] = this.barterScheme[itemBeingSoldId];
        data.assort.loyal_level_items[itemBeingSoldId] = this.loyaltyLevel[itemBeingSoldId];

        this.itemsToSell = [];
        this.barterScheme = {};
        this.loyaltyLevel = {};
    }
}
