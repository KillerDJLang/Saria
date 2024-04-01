import { DependencyContainer }      from "tsyringe";

import { IPreAkiLoadMod }           from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod }           from "@spt-aki/models/external/IPostDBLoadMod";
import { ITraderConfig }            from "@spt-aki/models/spt/config/ITraderConfig";
import { LogTextColor }             from "@spt-aki/models/spt/logging/LogTextColor";
import { Traders }                  from "@spt-aki/models/enums/Traders";
import { ConfigTypes }              from "@spt-aki/models/enums/ConfigTypes";
import { ConfigServer }             from "@spt-aki/servers/ConfigServer";
import { DatabaseServer }           from "@spt-aki/servers/DatabaseServer";
import { RandomUtil }               from "@spt-aki/utils/RandomUtil";
import { JsonUtil }                 from "@spt-aki/utils/JsonUtil";
import { HashUtil }                 from "@spt-aki/utils/HashUtil";
import { ImageRouter }              from "@spt-aki/routers/ImageRouter";
import { References }               from "./Refs/References";
import { TraderData }               from "./Trader/SariaShop";
import * as baseJson                from "../db/base.json";
import { AssortUtils, TraderUtils } from "./Refs/Utils";

class SariaShop implements IPreAkiLoadMod, IPostDBLoadMod 
{
    mod: string;
    logstring: string;
    public imageRouter: ImageRouter;
    private ref: References = new References();
    static container: DependencyContainer;

    constructor() {
        this.mod = "aaaSariaShop";
        this.logstring = "Saria Shop";
    }

    public preAkiLoad(container: DependencyContainer): void 
    {
        this.ref.preAkiLoad(container, "SariaShop");
        this.ref.container =        container;
        const logger =              this.ref.logger;
        const jsonUtil =            container.resolve<JsonUtil>("JsonUtil");
        const randomUtil =          container.resolve<RandomUtil>("RandomUtil");
        const hashUtil =            container.resolve<HashUtil>("HashUtil");
        const configServer =        container.resolve("ConfigServer");
        const ragfair =             configServer.getConfig("aki-ragfair");
        const traderConfig:         ITraderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const assortUtils =         new AssortUtils(hashUtil, logger);
        const traderUtils =         new TraderUtils();
        const traderData =          new TraderData(traderConfig, this.ref, traderUtils, assortUtils, randomUtil, jsonUtil);

        traderData.registerProfileImage();
        traderData.setupTraderUpdateTime();
        Traders["SariaShop"] = "SariaShop";
        ragfair.traders[baseJson._id] = true;
    }
    
    public postDBLoad(container: DependencyContainer): void 
    {
        this.ref.postDBLoad(container);
        this.ref.container =    container;
        const databaseServer =  container.resolve<DatabaseServer>("DatabaseServer");
        const tables =          databaseServer.getTables();
        const configServer =    container.resolve<ConfigServer>("ConfigServer")
        const jsonUtil =        container.resolve<JsonUtil>("JsonUtil");
        const randomUtil =      container.resolve<RandomUtil>("RandomUtil");
        const hashUtil =        container.resolve<HashUtil>("HashUtil");
        const traderConfig:     ITraderConfig = configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
        const logger =          this.ref.logger;   
        const assortUtils =     new AssortUtils(hashUtil, logger);
        const traderUtils =     new TraderUtils();
        const traderData =      new TraderData(traderConfig, this.ref, traderUtils, assortUtils, randomUtil, jsonUtil);

        //Random message on server on startup
        const messageArray =    ["found some rare goods out there", "there are much less bears to worry about now", "returning to base", "that's how you clean up a battlefield", "good thing I brought extra ammo"];
        const randomMessage =   messageArray[Math.floor(Math.random() * messageArray.length)];

        //Add Saria to the game
        traderData.pushTrader();
        //Add Saria to Locales
        traderData.addTraderToLocales(tables, baseJson.name, "Saria", baseJson.nickname, baseJson.location, "A soldier with questionable motives, an unknown background, and a large supply of military goods. She's willing to trade, for a price of course.");
        //Add in Sarias assort
        traderData.createAssorts();

		logger.log(`[${this.logstring}] Mission accomplished, ${randomMessage}.`, LogTextColor.CYAN);
    }
}

module.exports = { mod: new SariaShop() }