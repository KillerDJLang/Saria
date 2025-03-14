import { inject, injectable } from "tsyringe";
//Spt Classes
import type { ITraderAssort, ITraderBase } from "@spt/models/eft/common/tables/ITrader";
import type { ITraderConfig, IUpdateTime } from "@spt/models/spt/config/ITraderConfig";
import type { DatabaseService } from "@spt/services/DatabaseService";
import type { PreSptModLoader } from "@spt/loaders/PreSptModLoader";
import type { ConfigServer } from "@spt/servers/ConfigServer";
import { ConfigTypes } from "@spt/models/enums/ConfigTypes";
import type { ImageRouter } from "@spt/routers/ImageRouter";
import type { JsonUtil } from "@spt/utils/JsonUtil";
//Json Imports
import * as baseJson from "../../db/base.json";

@injectable()
export class TraderUtils {
    constructor(
        @inject("JsonUtil") protected jsonUtil: JsonUtil,
        @inject("DatabaseService") protected databaseService: DatabaseService,
        @inject("ImageRouter") protected imageRouter: ImageRouter,
        @inject("ConfigServer") protected configServer: ConfigServer,
        @inject("PreSptModLoader") protected preSptModLoader: PreSptModLoader,
    ) {}

    public addTraderToDb(traderDetailsToAdd: any): void {
        const tables = this.databaseService.getTables();

        tables.traders[traderDetailsToAdd._id] = {
            assort: this.createAssortTable(),
            base: this.jsonUtil.deserialize(this.jsonUtil.serialize(traderDetailsToAdd)) as ITraderBase,
            questassort: {
                started: {},
                success: {},
                fail: {},
            },
        };
    }

    public createAssortTable(): ITraderAssort {
        const assortTable: ITraderAssort = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {},
        };

        return assortTable;
    }

    public registerProfileImage(): void {
        const imageFilepath = `./${this.preSptModLoader.getModPath("SariaShop")}res`;

        this.imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/Saria.jpg`);
    }

    public setupTraderUpdateTime(traderIdToUse: string): void {
        const traderConfig: ITraderConfig = this.configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const traderRefreshRecord: IUpdateTime = {
            traderId: traderIdToUse,
            seconds: {
                min: 1800,
                max: 7200,
            },
        };
        traderConfig.updateTime.push(traderRefreshRecord);
    }

    public pushTrader(baseToAdd: any): void {
        this.addTraderToDb(baseToAdd);
    }

    public addTraderToLocales(firstName: string, description: string, baseJsonData: any): void {
        const tables = this.databaseService.getTables();
        const locales = Object.values(tables.locales.global) as Record<string, string>[];
        for (const locale of locales) {
            locale[`${baseJsonData._id} FullName`] = baseJsonData.name;
            locale[`${baseJsonData._id} FirstName`] = firstName;
            locale[`${baseJsonData._id} Nickname`] = baseJsonData.nickname;
            locale[`${baseJsonData._id} Location`] = baseJsonData.location;
            locale[`${baseJsonData._id} Description`] = description;
        }
    }
    //#endregion
}
