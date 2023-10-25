const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2pLlC1pU = await DmmControllerV2.new({from: accounts[5]});
		const uintXwCPng5 = BigInt("543")
		const uintmWw0Jeh = BigInt("1962")
		const uintlOsN8Po = BigInt("134")
		const addressmAjgyil = "0x0000000000000000000000000000000000000001"
		const addressaQtRtus = "0x0000000000000000000000000000000000000001"
		await DmmControllerV2pLlC1pU.renounceGuardian.call({from: accounts[1]});
		const 
wriKVyS = await DmmControllerV2pLlC1pU.adminWithdrawFunds.call(uintmWw0Jeh, uintXwCPng5, {from: accounts[4]});
		const boolpxrAwQI = await DmmControllerV2pLlC1pU.isMarketEnabledByDmmTokenId.call(uintlOsN8Po, {from: accounts[1]});
		const 
KGa9Upu = await DmmControllerV2pLlC1pU.transferOwnership.call(addressmAjgyil, {from: accounts[3]});
		const uints6Xy8F1 = await DmmControllerV2pLlC1pU.getExchangeRateByUnderlying.call(addressaQtRtus, {from: accounts[1]});
		const addressGsQXmDP = await DmmControllerV2pLlC1pU.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressWPN7Qet = accounts[2]
		const addressMfe6Wee = accounts[3]
		const addressQw40UFm = accounts[1]
		const addressCzUyuaq = accounts[5]
		const addresshYGbHPl = accounts[2]
		const addressVi3eyLL = accounts[0]
		const addresscVqqw5Z = accounts[3]
		const addressY2ftjen = accounts[2]
		const addressXyujWfV = accounts[5]
		const uintMWOEIDz = BigInt("650")
		const uintJkk5AU = BigInt("1513")
		const addresspg6wlyb = accounts[0]
		const DmmControllerV2vfkHA8F = await DmmControllerV2.new(addressWPN7Qet, addressMfe6Wee, addressQw40UFm, addressCzUyuaq, addresshYGbHPl, addressVi3eyLL, addresscVqqw5Z, addressY2ftjen, addressXyujWfV, uintMWOEIDz, uintJkk5AU, addresspg6wlyb, {from: accounts[0]});
		const addressOzhjTiO = accounts[2]
		const uintPgEdMJm = BigInt("273")
		const uintqvj7jqz = BigInt("1837")
		const uintQ2KWyIP = BigInt("1259")
		const uintv3Qmhc6 = BigInt("58")
		const stringO9x6ZcT = "nDV8SdDB27l96ry2V3OKuTbryhdef32Kix8GpWEOPRyUIYz"
		const stringrybcP1 = "b4EasUArfAbFOk9Ku5TE9bAYgQJ1WP8nLMGsHVChZWwhcXXlmomDPdmYH9IPafHthz9KHY6IsfVsUiChhvp8GlsvVx89i1sDQD"
		const addressApvJpmg = accounts[4]
		const uintws3v2zY = await DmmControllerV2vfkHA8F.getExchangeRate.call(addressOzhjTiO, {from: accounts[1]});
		await DmmControllerV2vfkHA8F.onlyOwner.call({from: accounts[1]});
		await DmmControllerV2vfkHA8F.renounceGuardian.call({from: accounts[2]});
		const 
ZWdAgPQ = await DmmControllerV2vfkHA8F.addMarket.call(addressApvJpmg, stringrybcP1, stringO9x6ZcT, uintv3Qmhc6, uintQ2KWyIP, uintqvj7jqz, uintPgEdMJm, {from: accounts[3]});
		await DmmControllerV2vfkHA8F.unpause.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressm2EWUY4 = accounts[2]
		const addressFoGIaN = accounts[0]
		const addressRu0VRCc = accounts[1]
		const addressdutjxpP = accounts[0]
		const addressE3Vzuhx = accounts[2]
		const addressrr8YNmC = accounts[1]
		const addressQZCaX57 = accounts[4]
		const addressXkaQiP5 = accounts[5]
		const addressKAWLjVq = accounts[4]
		const uintbDsEB7Z = BigInt("333")
		const uintFLysQJL = BigInt("2025")
		const addressldqmFS9 = accounts[4]
		const DmmControllerV2oJxWaiK = await DmmControllerV2.new(addressm2EWUY4, addressFoGIaN, addressRu0VRCc, addressdutjxpP, addressE3Vzuhx, addressrr8YNmC, addressQZCaX57, addressXkaQiP5, addressKAWLjVq, uintbDsEB7Z, uintFLysQJL, addressldqmFS9, {from: accounts[0]});
		const addressGU9hb3Q = "0x0000000000000000000000000000000000000001"
		const addressF1j2bd = accounts[1]
		const uintPbfNPAn = await DmmControllerV2oJxWaiK.getActiveCollateralization.call({from: accounts[1]});
		await DmmControllerV2oJxWaiK.initializer.call({from: accounts[4]});
		const addressEQClIZX = await DmmControllerV2oJxWaiK.unBlacklist.call(addressGU9hb3Q, {from: accounts[0]});
		const uintDrmXoiw = await DmmControllerV2oJxWaiK.getTokenIdFromDmmTokenAddress.call(addressF1j2bd, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresskljQGbu = accounts[3]
		const addressbdYPOlF = "0x0000000000000000000000000000000000000001"
		const addressXtkzuqx = accounts[1]
		const addresshgYpq3i = accounts[3]
		const addressSYDOoLy = accounts[3]
		const addressTJepSD7 = accounts[1]
		const addressjcYCHdf = accounts[3]
		const addresslQtx0EV = "0x0000000000000000000000000000000000000001"
		const addressNsBcHYH = accounts[1]
		const uintCQIQph = BigInt("1060")
		const uintOCjeEii = BigInt("517")
		const address0s92q2 = accounts[1]
		const DmmControllerV2EgMg4Vm = await DmmControllerV2.new(addresskljQGbu, addressbdYPOlF, addressXtkzuqx, addresshgYpq3i, addressSYDOoLy, addressTJepSD7, addressjcYCHdf, addresslQtx0EV, addressNsBcHYH, uintCQIQph, uintOCjeEii, address0s92q2, {from: accounts[2]});
		const addressIfFwCfn = accounts[2]
		const addressUyLxiJr = await DmmControllerV2EgMg4Vm.owner.call({from: accounts[1]});
		const boolShvs5J3 = await DmmControllerV2EgMg4Vm.isPauser.call(addressIfFwCfn, {from: accounts[4]});
		await DmmControllerV2EgMg4Vm.whenPaused.call({from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressgNVSlGA = accounts[1]
		const addressQX3kz8t = accounts[0]
		const addressaHQkelO = accounts[1]
		const addressCr38uwH = accounts[0]
		const addressWbVSlZ8 = accounts[2]
		const addressY7LSX9d = accounts[3]
		const addressozGbtDG = accounts[1]
		const addressbvcu4vN = accounts[4]
		const addressS0DPREp = accounts[4]
		const uintsEM83N1 = BigInt("210")
		const uintlPDWweY = BigInt("885")
		const addresswXudkNU = accounts[5]
		const DmmControllerV2LuCSONz = await DmmControllerV2.new(addressgNVSlGA, addressQX3kz8t, addressaHQkelO, addressCr38uwH, addressWbVSlZ8, addressY7LSX9d, addressozGbtDG, addressbvcu4vN, addressS0DPREp, uintsEM83N1, uintlPDWweY, addresswXudkNU, {from: accounts[2]});
		const addressjAsLtyb = accounts[1]
		const addressJusnPxE = accounts[4]
		const addressia5l8Sx = accounts[0]
		const 
rLNIWl = await DmmControllerV2LuCSONz.addMarketFromExistingDmmToken.call(addressJusnPxE, addressjAsLtyb, {from: accounts[4]});
		const boolhPjS5Lr = await DmmControllerV2LuCSONz.isMarketEnabledByDmmTokenAddress.call(addressia5l8Sx, {from: accounts[3]});
		await DmmControllerV2LuCSONz.whenPaused.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addresspgXFFrZ = accounts[4]
		const addressyUHg6h = accounts[5]
		const address5MySWV = "0x0000000000000000000000000000000000000001"
		const addressiZOswa8 = accounts[1]
		const addressMmcQ0Hz = accounts[1]
		const addressLWh7tvH = accounts[5]
		const addressd8ClIz9 = accounts[3]
		const addressdBjGeBy = accounts[5]
		const addressiqw0AAM = accounts[3]
		const uintncYO2pp = BigInt("1468")
		const uintp4uj2Np = BigInt("1954")
		const addressk9IZd6Z = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2zZIH56Y = await DmmControllerV2.new(addresspgXFFrZ, addressyUHg6h, address5MySWV, addressiZOswa8, addressMmcQ0Hz, addressLWh7tvH, addressd8ClIz9, addressdBjGeBy, addressiqw0AAM, uintncYO2pp, uintp4uj2Np, addressk9IZd6Z, {from: accounts[1]});
		const addresscMLK2f = accounts[3]
		const uintVGACE3s = BigInt("1264")
		const addressH3mlaS = await DmmControllerV2zZIH56Y.setDmmEtherFactory.call(addresscMLK2f, {from: accounts[2]});
		await DmmControllerV2zZIH56Y.renounceGuardian.call({from: accounts[3]});
		const uintStRWv8C = await DmmControllerV2zZIH56Y.setMinCollateralization.call(uintVGACE3s, {from: accounts[2]});
		await DmmControllerV2zZIH56Y.onlyOwnerOrGuardian.call({from: accounts[1]});
		await DmmControllerV2zZIH56Y.requireIsStakingPurchaser.call({from: accounts[0]});
		const booleOCyw8 = await DmmControllerV2zZIH56Y.isOwner.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressCLC8Ns = accounts[4]
		const addressdWF6soI = accounts[3]
		const addressAO3xwCq = accounts[2]
		const addressRyyclgu = accounts[1]
		const addressqZOd2x5 = accounts[2]
		const addressf7tb8Pl = accounts[2]
		const addressDnB0rEi = accounts[4]
		const addressv0A8Ih6 = accounts[3]
		const addressYWc6bu = accounts[4]
		const uintYz8aeg = BigInt("1149")
		const uintOWcENtj = BigInt("691")
		const addressNsRO2Ln = accounts[4]
		const DmmControllerV2neKFKq = await DmmControllerV2.new(addressCLC8Ns, addressdWF6soI, addressAO3xwCq, addressRyyclgu, addressqZOd2x5, addressf7tb8Pl, addressDnB0rEi, addressv0A8Ih6, addressYWc6bu, uintYz8aeg, uintOWcENtj, addressNsRO2Ln, {from: accounts[4]});
		const addresshsi2gyL = accounts[0]
		const uintwK3XcsO = BigInt("2045")
		const uintvtbKkY = BigInt("1190")
		const uintoovGIdp = BigInt("768")
		const uintAfPb6oL = BigInt("416")
		const uintGGNsete = BigInt("1322")
		const uintIlam0Gv = await DmmControllerV2neKFKq.getExchangeRateByUnderlying.call(addresshsi2gyL, {from: accounts[4]});
		const 
kwJqUs = await DmmControllerV2neKFKq.decreaseTotalSupply.call(uintvtbKkY, uintwK3XcsO, {from: accounts[0]});
		const 
OIFVS1O = await DmmControllerV2neKFKq.adminDepositFunds.call(uintAfPb6oL, uintoovGIdp, {from: accounts[0]});
		const uinty93J7Ht = await DmmControllerV2neKFKq.setMinCollateralization.call(uintGGNsete, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressHh9edMi = accounts[4]
		const addressEX0ZtCg = accounts[3]
		const addressn6WnN3E = accounts[1]
		const addressQ6UT26u = accounts[4]
		const addressGGBLkQ = accounts[5]
		const addressqikEHG = accounts[3]
		const addressJMtPyUd = accounts[5]
		const addressr3BAVoR = accounts[0]
		const addressdfAZWgO = accounts[2]
		const uintJSwsei = BigInt("1842")
		const uintCG59mCo = BigInt("1178")
		const address1vAmSL = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2FYovN1 = await DmmControllerV2.new(addressHh9edMi, addressEX0ZtCg, addressn6WnN3E, addressQ6UT26u, addressGGBLkQ, addressqikEHG, addressJMtPyUd, addressr3BAVoR, addressdfAZWgO, uintJSwsei, uintCG59mCo, address1vAmSL, {from: accounts[3]});
		const addressPJXncF = await DmmControllerV2FYovN1.owner.call({from: accounts[1]});
		await DmmControllerV2FYovN1.pause.call({from: accounts[0]});
		await DmmControllerV2FYovN1.whenPaused.call({from: accounts[2]});
	});
})