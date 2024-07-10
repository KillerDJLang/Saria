import { References } from "../../Refs/References"
import { AssortUtils } from "../../Refs/Utils"
import { Currency } from "../../Refs/Enums"

import * as presetArray from "../../Refs/ArrayFiles/presetArray.json"
import * as baseJson from "../../../db/base.json"
import * as modConfig from "../../../config.json"

export class LL1 {
	constructor(private ref: References, private assortUtils: AssortUtils) {}

	public createAssort1() {
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
			.createSingleAssortItem("56eabcd4d2720b66698b4574")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 29999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("584924ec24597768f12ae244")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 45999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5a3501acc4a282000d72293a")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 15999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("56eabf3bd2720b75698b4569")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 44999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("59db3a1d86f77429e05b4e92")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 34999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5a718f958dc32e00094b97e7")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 30999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("628e4e576d783146b124c64d")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 87999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5fb651dc85f90547f674b6f4")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 28999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5b057b4f5acfc4771e1bd3e9")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 34999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("58d2912286f7744e27117493")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 69999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5b2388675acfc4771e1be0be")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 37999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("618b9671d14d6d5ab879c5ea")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 9999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("618b9643526131765025ab35")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 16999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("593962ca86f774068014d9af")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 19999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5937ee6486f77408994ba448")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 19999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5aafbcd986f7745e590fff23")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 379999)
			.export(this.ref.tables.traders[baseJson._id], false)
		10999

		this.assortUtils
			.createSingleAssortItem("5c6d46132e221601da357d56")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 10999)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//Ammo
		//

		this.assortUtils
			.createSingleAssortItem("5e023e53d4353e3302577c4c")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 199)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("59e6906286f7746c9f75e847")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 449)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5c925fa22e221601da359b7b")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 399)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("6529302b8c26af6326029fb7")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(1)
			.addMoneyCost(Currency.Roubles, 549)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//Barters
		//

		this.assortUtils
			.createSingleAssortItem("544a11ac4bdc2d470e8b456a")
			.addStackCount(1)
			.addLoyaltyLevel(1)
			.addBarterCost(Currency.Roubles, 599999)
			.addBarterCost("5732ee6a24597719ae0c0281", 1)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//WeaponPresets
		//

		this.assortUtils
			.createComplexAssortItem(presetArray["sig_mcx_spear_cqb"]._items)
			.addMoneyCost(Currency.Dollars, 899)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["vector_9_default"]._items)
			.addMoneyCost(Currency.Dollars, 599)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["vector_45_default"]._items)
			.addMoneyCost(Currency.Dollars, 749)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["HK416 default"]._items)
			.addMoneyCost(Currency.Dollars, 699)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["M4A1_USASOC2"]._items)
			.addMoneyCost(Currency.Dollars, 1099)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["birdeye_sr25"]._items)
			.addMoneyCost(Currency.Dollars, 1649)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["mcx_short_default"]._items)
			.addMoneyCost(Currency.Dollars, 849)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["SR25_default"]._items)
			.addMoneyCost(Currency.Dollars, 799)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["MP5_SilentOps"]._items)
			.addMoneyCost(Currency.Dollars, 649)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//GearPresets
		//

		this.assortUtils
			.createComplexAssortItem(presetArray["Vest Eagle Industries MMAC Standard"]._items)
			.addMoneyCost(Currency.Roubles, 84999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Vest Shellback Tactical Banshee Standard"]._items)
			.addMoneyCost(Currency.Roubles, 114999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Vest ANA Tactical M1 Standard"]._items)
			.addMoneyCost(Currency.Roubles, 114999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Helmet Class Tor 2 Standart"]._items)
			.addMoneyCost(Currency.Roubles, 57999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Helmet Diamond Age Bastion Standart"]._items)
			.addMoneyCost(Currency.Roubles, 94999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Helmet LShZ Standart"]._items)
			.addMoneyCost(Currency.Roubles, 47999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(1)
			.export(this.ref.tables.traders[baseJson._id], false)
	}
}
