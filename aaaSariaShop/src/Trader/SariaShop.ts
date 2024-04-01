import { container }                    from "tsyringe";
import { DatabaseServer }               from "@spt-aki/servers/DatabaseServer";
import { IDatabaseTables }              from "@spt-aki/models/spt/server/IDatabaseTables";
import { ITraderConfig, UpdateTime }    from "@spt-aki/models/spt/config/ITraderConfig";
import { RandomUtil }                   from "@spt-aki/utils/RandomUtil";
import { JsonUtil }                     from "@spt-aki/utils/JsonUtil";
import { References }                   from "../Refs/References";
import { AssortUtils, TraderUtils }     from "../Refs/Utils";
import { LL1 }                          from "./Items/LoyalLevel1";
import { LL2 }                          from "./Items/LoyalLevel2";
import { LL3 }                          from "./Items/LoyalLevel3";
import { LL4 }                          from "./Items/LoyalLevel4";

import * as baseJson            from "../../db/base.json";

export class TraderData
{
    mod: string;
    logstring: string;

    constructor(private traderConfig: ITraderConfig, private ref: References, private traderHelper: TraderUtils, private assortUtils: AssortUtils, private randomUtil: RandomUtil, private jsonUtil: JsonUtil) 
    {
        this.mod = "aaaSariaShop";
        this.logstring = "Saria Shop";
    }

    public registerProfileImage()
    {
        const imageFilepath = `./${this.ref.preAkiModLoader.getModPath(this.mod)}res`;
    
        this.ref.imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/Saria.jpg`);
    }
    
    public setupTraderUpdateTime()
    {
        const traderRefreshRecord: UpdateTime = {
            traderId: baseJson._id,
            seconds: {
                min: 1800,
                max: 7200
            } 
        };
        this.traderConfig.updateTime.push(traderRefreshRecord);
    }
           
    public pushTrader()
    {
        this.traderHelper = new TraderUtils();
        const databaseServer: DatabaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables = databaseServer.getTables();

        this.traderHelper.addTraderToDb(baseJson, tables, this.jsonUtil)
    }
    
    public addTraderToLocales(tables: IDatabaseTables, fullName: string, firstName: string, nickName: string, location: string, description: string)
    {
        const locales = Object.values(tables.locales.global) as Record<string, string>[];
        for (const locale of locales) 
        {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }

    public createAssorts()
    {
        const loyalLevel1 = new LL1(this.ref, this.assortUtils, this.randomUtil);
        const loyalLevel2 = new LL2(this.ref, this.assortUtils, this.randomUtil);
        const loyalLevel3 = new LL3(this.ref, this.assortUtils, this.randomUtil);
        const loyalLevel4 = new LL4(this.ref, this.assortUtils, this.randomUtil);

        loyalLevel1.createAssort1();
        loyalLevel2.createAssort2();
        loyalLevel3.createAssort3();
        loyalLevel4.createAssort4();
    }
}