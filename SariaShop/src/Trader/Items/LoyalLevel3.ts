import { References } from "../../Refs/References"
import { AssortUtils } from "../../Refs/Utils"
import { Currency } from "../../Refs/Enums"

import * as presetArray from "../../Refs/ArrayFiles/presetArray.json"
import * as baseJson from "../../../db/base.json"
import * as modConfig from "../../../config.json"

export class LL3 {
	constructor(private ref: References, private assortUtils: AssortUtils) {}

	public createAssort3() {
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
			.createSingleAssortItem("59bfe68886f7746004266202")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(3)
			.addMoneyCost(Currency.Roubles, 89999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5d00ec68d7ad1a04a067e5be")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(3)
			.addMoneyCost(Currency.Roubles, 58999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5c0126f40db834002a125382")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(3)
			.addMoneyCost(Currency.Roubles, 3299999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5c0e66e2d174af02a96252f4")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(3)
			.addMoneyCost(Currency.Roubles, 99999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("628baf0b967de16aab5a4f36")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(3)
			.addMoneyCost(Currency.Roubles, 89999)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//Ammo
		//

		this.assortUtils
			.createSingleAssortItem("5a608bf24f39f98ffc77720e")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(3)
			.addMoneyCost(Currency.Roubles, 1299)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("59e0d99486f7744a32234762")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(3)
			.addMoneyCost(Currency.Roubles, 1799)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("59e690b686f7746c9f75e848")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(3)
			.addMoneyCost(Currency.Roubles, 1199)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("6529243824cbe3c74a05e5c1")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(3)
			.addMoneyCost(Currency.Roubles, 799)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//Barters
		//

		this.assortUtils
			.createSingleAssortItem("5b6d9ce188a4501afc1b2b25")
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.addBarterCost(Currency.Dollars, 19999)
			.addBarterCost("59fb023c86f7746d0d4b423c", 1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5857a8bc2459772bad15db29")
			.addStackCount(1)
			.addLoyaltyLevel(3)
			.addBarterCost(Currency.Roubles, 1499999)
			.addBarterCost("5857a8b324597729ab0a0e7d", 1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("59db794186f77448bc595262")
			.addStackCount(1)
			.addLoyaltyLevel(3)
			.addBarterCost(Currency.Roubles, 1999999)
			.addBarterCost("5857a8bc2459772bad15db29", 1)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//WeaponPresets
		//

		this.assortUtils
			.createComplexAssortItem(presetArray["sig_mcx_spear_default"]._items)
			.addMoneyCost(Currency.Dollars, 1699)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["p90 SBRT"]._items)
			.addMoneyCost(Currency.Dollars, 1399)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["SCARH MK17 CQC"]._items)
			.addMoneyCost(Currency.Dollars, 1099)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["G28 Patrol"]._items)
			.addMoneyCost(Currency.Dollars, 1459)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["M1A 2018 new year"]._items)
			.addMoneyCost(Currency.Dollars, 999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["SCARL MK16 CW"]._items)
			.addMoneyCost(Currency.Dollars, 949)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["rpd_short"]._items)
			.addMoneyCost(Currency.Dollars, 1699)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//GearPresets
		//

		this.assortUtils
			.createComplexAssortItem(presetArray["Vest FirstSpear Strandhogg Standard"]._items)
			.addMoneyCost(Currency.Roubles, 189999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Body armor LBT 6094A Slick Plate Carrier Black Standard"]._items)
			.addMoneyCost(Currency.Roubles, 249999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Helmet Ops Core Fast MT Black Standart"]._items)
			.addMoneyCost(Currency.Roubles, 99999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Helmet Ops Core Fast MT Sand Standart"]._items)
			.addMoneyCost(Currency.Roubles, 99999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(3)
			.export(this.ref.tables.traders[baseJson._id], false)
	}
}
