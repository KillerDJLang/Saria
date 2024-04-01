import { container }        from "tsyringe";
import { DatabaseServer }   from "@spt-aki/servers/DatabaseServer";
import { RandomUtil }       from "@spt-aki/utils/RandomUtil";
import { HashUtil }         from "@spt-aki/utils/HashUtil";
import { References }       from "../../Refs/References";
import { AssortUtils }      from "../../Refs/Utils";
import { Currency }         from "../../Refs/Enums";

import * as baseJson        from "../../../db/base.json";

export class LL4
{
    constructor(private ref: References, private assortUtils: AssortUtils, private randomUtil: RandomUtil) 
    {}

    public createAssort4()
    {
        const databaseServer: DatabaseServer =  container.resolve<DatabaseServer>("DatabaseServer");
        const hashUtil: HashUtil =              container.resolve<HashUtil>("HashUtil");
        const tables =                          databaseServer.getTables();
        this.assortUtils =                      new AssortUtils(hashUtil, this.ref.logger);

        const presetArray = require("../../Refs/ArrayFiles/presetArray.json")

        this.assortUtils.createSingleAssortItem("59c1383d86f774290a37e0ca")
                        .addStackCount(this.randomUtil.randInt(0, 10))
                        .addLoyaltyLevel(4)
                        .addMoneyCost(Currency.Roubles, 47999)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createSingleAssortItem("5a1ead28fcdbcb001912fa9f")
                        .addStackCount(this.randomUtil.randInt(0, 10))
                        .addLoyaltyLevel(4)
                        .addMoneyCost(Currency.Roubles, 179999)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createSingleAssortItem("5a1eaa87fcdbcb001865f75e")
                        .addStackCount(this.randomUtil.randInt(0, 10))
                        .addLoyaltyLevel(4)
                        .addMoneyCost(Currency.Roubles, 499999)
                        .export(tables.traders[baseJson._id], false);

                        //
                        //Ammo
                        //

        this.assortUtils.createSingleAssortItem("5efb0c1bd79ff02a1f5e68d9")
                        .addStackCount(this.randomUtil.randInt(0, 300))
                        .addLoyaltyLevel(4)
                        .addMoneyCost(Currency.Roubles, 1899)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createSingleAssortItem("5fc382a9d724d907e2077dab")
                        .addStackCount(this.randomUtil.randInt(0, 300))
                        .addLoyaltyLevel(4)
                        .addMoneyCost(Currency.Roubles, 5999)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createSingleAssortItem("601949593ae8f707c4608daa")
                        .addStackCount(this.randomUtil.randInt(0, 300))
                        .addLoyaltyLevel(4)
                        .addMoneyCost(Currency.Roubles, 1799)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createSingleAssortItem("5fc23426900b1d5091531e15")
                        .addStackCount(this.randomUtil.randInt(0, 300))
                        .addLoyaltyLevel(4)
                        .addMoneyCost(Currency.Roubles, 19999)
                        .export(tables.traders[baseJson._id], false);

                        //
                        //Barters
                        //

        this.assortUtils.createSingleAssortItem("5c0a840b86f7742ffa4f2482")
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .addBarterCost(Currency.Dollars, 29999)
                        .addBarterCost("59fb042886f7746c5005a7b2", 2)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createSingleAssortItem("5c093ca986f7740a1867ab12")
                        .addStackCount(1)
                        .addLoyaltyLevel(3)
                        .addBarterCost(Currency.Roubles, 2999999)
                        .addBarterCost("59db794186f77448bc595262", 1)
                        .export(tables.traders[baseJson._id], false);

                        //
                        //WeaponPresets
                        //

        this.assortUtils.createComplexAssortItem(presetArray["mjolnir_default"]._items)
                        .addMoneyCost(Currency.Roubles, 309999)
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createComplexAssortItem(presetArray["RSASS"]._items)
                        .addMoneyCost(Currency.Roubles, 209999)
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createComplexAssortItem(presetArray["akm_kreb_thermal_silenced"]._items)
                        .addMoneyCost(Currency.Roubles, 699999)
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .export(tables.traders[baseJson._id], false);

                        //
                        //GearPresets
                        //

        this.assortUtils.createComplexAssortItem(presetArray["Helmet Maska 1 Sha Killa Standard"]._items)
                        .addMoneyCost(Currency.Roubles, 129999)
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createComplexAssortItem(presetArray["Helmet Crye Precision AirFrame Standart"]._items)
                        .addMoneyCost(Currency.Roubles, 89999)
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createComplexAssortItem(presetArray["Vest Tasmanian Tiger SK Standard"]._items)
                        .addMoneyCost(Currency.Roubles, 229999)
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createComplexAssortItem(presetArray["Body armor 6B13 M Killa Standard"]._items)
                        .addMoneyCost(Currency.Roubles, 279999)
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createComplexAssortItem(presetArray["Vest Ars Arma A18 Skanda Standard"]._items)
                        .addMoneyCost(Currency.Roubles, 229999)
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .export(tables.traders[baseJson._id], false);

        this.assortUtils.createComplexAssortItem(presetArray["Body armor BNTI Zhuk 6a Standard"]._items)
                        .addMoneyCost(Currency.Roubles, 304999)
                        .addStackCount(this.randomUtil.randInt(0, 3))
                        .addLoyaltyLevel(4)
                        .export(tables.traders[baseJson._id], false);
    }
}