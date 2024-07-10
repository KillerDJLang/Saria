import { References } from "../../Refs/References"
import { AssortUtils } from "../../Refs/Utils"
import { Currency } from "../../Refs/Enums"

import * as presetArray from "../../Refs/ArrayFiles/presetArray.json"
import * as baseJson from "../../../db/base.json"
import * as modConfig from "../../../config.json"

export class LL2 {
	constructor(private ref: References, private assortUtils: AssortUtils) {}

	public createAssort2() {
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
			.createSingleAssortItem("5ea058e01dbce517f324b3e2")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 134999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("628bc7fb408e2b2e9c0801b1")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 229999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5c793fb92e221644f31bfb64")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 74999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("618ba27d9008e4636a67f61d")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 139999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5b3b99475acfc432ff4dcbee")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 109999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5d235bb686f77443f4331278")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 599999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("59fb042886f7746c5005a7b2")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 2999999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("59fb023c86f7746d0d4b423c")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Dollars, 19999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("619cbf7d23893217ec30b689")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 499999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5648a69d4bdc2ded0b8b457b")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 67999)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5df8a42886f77412640e2e75")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 44999)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//Ammo
		//

		this.assortUtils
			.createSingleAssortItem("5cc80f38e4a949001152b560")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Dollars, 8)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("58dd3ad986f77403051cba8f")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 449)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("54527ac44bdc2d36668b4567")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 599)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5efb0cabfb3e451d70735af5")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 599)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5efb0da7a29a85116f6ea05f")
			.addStackCount(ammoStackCount)
			.addLoyaltyLevel(2)
			.addMoneyCost(Currency.Roubles, 599)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//Barters
		//

		this.assortUtils
			.createSingleAssortItem("5c94bbff86f7747ee735c08f")
			.addStackCount(baseStackCount)
			.addLoyaltyLevel(2)
			.addBarterCost("5c0e531d86f7747fa23f4d42", 1)
			.addBarterCost("5ed51652f6c34d2cc26336a1", 1)
			.addBarterCost("5c0e530286f7747fa1419862", 1)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createSingleAssortItem("5857a8b324597729ab0a0e7d")
			.addStackCount(1)
			.addLoyaltyLevel(2)
			.addBarterCost(Currency.Roubles, 999999)
			.addBarterCost("544a11ac4bdc2d470e8b456a", 1)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//WeaponPresets
		//

		this.assortUtils
			.createComplexAssortItem(presetArray["9A91_tactical"]._items)
			.addMoneyCost(Currency.Dollars, 1099)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["VSK94_tactical"]._items)
			.addMoneyCost(Currency.Dollars, 1199)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["SA-58_OSW"]._items)
			.addMoneyCost(Currency.Dollars, 1099)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["tx-15 default"]._items)
			.addMoneyCost(Currency.Dollars, 799)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["knight_mk47"]._items)
			.addMoneyCost(Currency.Dollars, 1099)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["MP7_DEVGRU"]._items)
			.addMoneyCost(Currency.Dollars, 899)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)

		//
		//GearPresets
		//

		this.assortUtils
			.createComplexAssortItem(presetArray["Body armor Korund VM Standard"]._items)
			.addMoneyCost(Currency.Roubles, 149999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Body armor HighCom Trooper Standard"]._items)
			.addMoneyCost(Currency.Roubles, 179999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Helmet MSA Gallet TC 800 Standart"]._items)
			.addMoneyCost(Currency.Roubles, 64999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)

		this.assortUtils
			.createComplexAssortItem(presetArray["Helmet HighCom Striker ACHHC IIIA Black Standart"]._items)
			.addMoneyCost(Currency.Roubles, 78999)
			.addStackCount(presetStackCount)
			.addLoyaltyLevel(2)
			.export(this.ref.tables.traders[baseJson._id], false)
	}
}
