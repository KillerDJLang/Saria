import { References } from "../../Refs/References"
import { AssortUtils } from "../../Refs/Utils"
import { Currency } from "../../Refs/Enums"

import * as presetArray from "../../Refs/ArrayFiles/presetArray.json"
import * as baseJson from "../../../db/base.json"
import * as modConfig from "../../../config.json"

export class LL4 {
	constructor(private ref: References, private assortUtils: AssortUtils) {}

	public createAssort4() {
		this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger)

		let ammoStackCount = 60
		let presetStackCount = 1
		let baseStackCount = 3

		if (modConfig.UnlimitedStackCount) {
			ammoStackCount = 999999
			presetStackCount = 999999
			baseStackCount = 999999
		} else if (!modConfig.UnlimitedStackCount) {
			ammoStackCount = this.ref.randomUtil.randInt(0, 300)
			presetStackCount = this.ref.randomUtil.randInt(0, 3)
			baseStackCount = this.ref.randomUtil.randInt(0, 10)
		}

		//
		//Items
		//

		this.assortUtils
			.createSingleAssortItem("59c1383d86f774290a37e0ca")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(4)
			.addMoneyCost(Currency.Roubles, 47999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5a1ead28fcdbcb001912fa9f")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(4)
			.addMoneyCost(Currency.Roubles, 179999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5a1eaa87fcdbcb001865f75e")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(4)
			.addMoneyCost(Currency.Roubles, 499999)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//Ammo
		//

		this.assortUtils
			.createSingleAssortItem("5efb0c1bd79ff02a1f5e68d9")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(4)
			.addMoneyCost(Currency.Roubles, 1899)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5fc382a9d724d907e2077dab")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(4)
			.addMoneyCost(Currency.Roubles, 5999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("601949593ae8f707c4608daa")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(4)
			.addMoneyCost(Currency.Roubles, 1799)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5fc23426900b1d5091531e15")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(4)
			.addMoneyCost(Currency.Roubles, 19999)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//Barters
		//

		this.assortUtils
			.createSingleAssortItem("5c0a840b86f7742ffa4f2482")
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.addBarterCost(Currency.Dollars, 29999)
			.addBarterCost("59fb042886f7746c5005a7b2", 2)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5c093ca986f7740a1867ab12")
			.addStackCount(1)
			.addLoyaltyLevel(4)
			.addBarterCost(Currency.Roubles, 2999999)
			.addBarterCost("59db794186f77448bc595262", 1)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//WeaponPresets
		//

		this.assortUtils
			.createComplexAssortItem(presetArray["mjolnir_default"]._items)
			.addMoneyCost(Currency.Roubles, 309999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["RSASS"]._items)
			.addMoneyCost(Currency.Roubles, 209999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["akm_kreb_thermal_silenced"]._items)
			.addMoneyCost(Currency.Roubles, 699999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//GearPresets
		//

		this.assortUtils
			.createComplexAssortItem(presetArray["Helmet Maska 1 Sha Killa Standard"]._items)
			.addMoneyCost(Currency.Roubles, 129999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Helmet Crye Precision AirFrame Standart"]._items)
			.addMoneyCost(Currency.Roubles, 89999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Vest Tasmanian Tiger SK Standard"]._items)
			.addMoneyCost(Currency.Roubles, 229999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Body armor 6B13 M Killa Standard"]._items)
			.addMoneyCost(Currency.Roubles, 279999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Vest Ars Arma A18 Skanda Standard"]._items)
			.addMoneyCost(Currency.Roubles, 229999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Body armor BNTI Zhuk 6a Standard"]._items)
			.addMoneyCost(Currency.Roubles, 304999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(4)
			.export(this.ref.tables.traders[baseJson._id], false)
	}
}
