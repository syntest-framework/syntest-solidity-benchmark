const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringnvQY95u = "FmgHxII9HCNEgWTKISQnzks5buyb789Paqa6YJwokuEe8Y10n"
		const addressKBSW8jL = accounts[0]
		const addressSqctrZ = accounts[2]
		const uintk6O2mcd = BigInt("1169")
		const uintPPBvk2O = BigInt("1626")
		const Liquidity_v8UPPfBat = await Liquidity_v8.new(stringnvQY95u, addressKBSW8jL, addressSqctrZ, uintk6O2mcd, uintPPBvk2O, {from: "0x0000000000000000000000000000000000000001"});
		const addresswVT3FcY = accounts[3]
		const addressSZgTR9K = accounts[4]
		const uintFIdfGEA = BigInt("2029")
		const addressCkDM1io = await Liquidity_v8UPPfBat.transferOwnership.call(addresswVT3FcY, {from: accounts[0]});
		const 
Aj2LRcw = await Liquidity_v8UPPfBat.userDeposits.call(addressSZgTR9K, {from: accounts[2]});
		const boolab6sIcu = await Liquidity_v8UPPfBat.stake.call(uintFIdfGEA, {from: accounts[3]});
		const boolGj1BKVY = await Liquidity_v8UPPfBat.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlcrmDK = "6NO"
		const addressuafTxRg = accounts[3]
		const addressYP1OA35 = accounts[0]
		const uintdxrsF2R = BigInt("1069")
		const uintpoWBdmQ = BigInt("281")
		const Liquidity_v8sGn8AGp = await Liquidity_v8.new(stringlcrmDK, addressuafTxRg, addressYP1OA35, uintdxrsF2R, uintpoWBdmQ, {from: accounts[4]});
		const addressJqez8H0 = accounts[5]
		const boolDgzXl5 = await Liquidity_v8sGn8AGp.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8sGn8AGp.renounceOwnership.call({from: accounts[4]});
		const boolBk9Bqa = await Liquidity_v8sGn8AGp.isOwner.call({from: accounts[3]});
		const 
K69dzMs = await Liquidity_v8sGn8AGp.userDeposits.call(addressJqez8H0, {from: accounts[3]});
		const addresswPGODq = await Liquidity_v8sGn8AGp.owner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringJ33ulNc = "faI9BUdt7iSnBrzTlNRiTcDGfLywvNxkb2P5UTMif5bjLY2UTX3wBWnH2sqXKExnOkIFuFKy21Bn7sYIYdIJBV1afVSP"
		const addressNF9Okrf = accounts[3]
		const addressiqS1Ipl = accounts[3]
		const uintTUkUstW = BigInt("1143")
		const uintYLFYDAy = BigInt("860")
		const Liquidity_v8Q1PdLwA = await Liquidity_v8.new(stringJ33ulNc, addressNF9Okrf, addressiqS1Ipl, uintTUkUstW, uintYLFYDAy, {from: accounts[3]});
		const uintkNTtalY = BigInt("1104")
		const addresswcHRGfs = "0x0000000000000000000000000000000000000001"
		const uintfIioeZu = BigInt("977")
		const uint256OA7QqUd = await Liquidity_v8Q1PdLwA.changeLockDuration.call(uintkNTtalY, {from: accounts[0]});
		const 
Le0VMWZ = await Liquidity_v8Q1PdLwA.userDeposits.call(addresswcHRGfs, {from: accounts[2]});
		const boolFDqDzfu = await Liquidity_v8Q1PdLwA.addReward.call(uintfIioeZu, {from: accounts[1]});
		await Liquidity_v8Q1PdLwA.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringGTDjFf9 = "rPTOLiwPU659mnxoiHoSR6o"
		const addressqxOsJlk = accounts[0]
		const addressgyoMcyO = accounts[0]
		const uinttrR02Nt = BigInt("669")
		const uintp62isQX = BigInt("260")
		const Liquidity_v8e5iHkVs = await Liquidity_v8.new(stringGTDjFf9, addressqxOsJlk, addressgyoMcyO, uinttrR02Nt, uintp62isQX, {from: accounts[3]});
		const uintNEH9m1U = BigInt("182")
		const uintn7u5Wzj = BigInt("1995")
		const addresssqCougi = accounts[3]
		const uintY0HYxD = BigInt("1772")
		const boolxhpmauJ = await Liquidity_v8e5iHkVs.stake.call(uintNEH9m1U, {from: accounts[4]});
		await Liquidity_v8e5iHkVs.renounceOwnership.call({from: accounts[4]});
		const boolntqaVXl = await Liquidity_v8e5iHkVs.addReward.call(uintn7u5Wzj, {from: accounts[1]});
		const 
WWvOqTI = await Liquidity_v8e5iHkVs.userDeposits.call(addresssqCougi, {from: accounts[1]});
		const uint64EpSKpQg = await Liquidity_v8e5iHkVs.setRate.call(uintY0HYxD, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringdGNvd1j = "JcSHRprNtRhgThJO2K2c8Cf7bFJHxi8FcirD2kFIAerWG0pGS8E4Mu2yMed5Jy1jVce"
		const addressZ3smKKn = accounts[0]
		const addressDyGJ5rt = accounts[0]
		const uintwBlH5w = BigInt("462")
		const uintEIpo8Li = BigInt("154")
		const Liquidity_v8JVpnsfr = await Liquidity_v8.new(stringdGNvd1j, addressZ3smKKn, addressDyGJ5rt, uintwBlH5w, uintEIpo8Li, {from: accounts[2]});
		const uintwBkiaY9 = BigInt("262")
		const uintFJwGAH4 = BigInt("276")
		const boolt1zire = await Liquidity_v8JVpnsfr.withdraw.call({from: accounts[3]});
		const boolj1jHq4U = await Liquidity_v8JVpnsfr.addReward.call(uintwBkiaY9, {from: accounts[3]});
		const uint256JOrJjCi = await Liquidity_v8JVpnsfr.changeLockDuration.call(uintFJwGAH4, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringdGNvd1j = "JcSHRprNtRhgThJO2K2c8Cf7bFJHxi8FcirD2kFIAerWG0pGS8E4Mu2yMed5Jy1jVce"
		const addressNGKM5ce = accounts[0]
		const addressrfMPevg = accounts[0]
		const uintFd3kz9t = BigInt("462")
		const uintZfH55of = BigInt("154")
		const Liquidity_v8JVpnsfr = await Liquidity_v8.new(stringdGNvd1j, addressNGKM5ce, addressrfMPevg, uintFd3kz9t, uintZfH55of, {from: accounts[2]});
		const addressTb0tLz2 = accounts[3]
		const uintkWQrOg1 = BigInt("262")
		const uintn55xtuL = BigInt("276")
		await Liquidity_v8JVpnsfr.onlyOwner.call({from: accounts[0]});
		const boolt1zire = await Liquidity_v8JVpnsfr.withdraw.call({from: accounts[3]});
		const addressPbbKbFN = await Liquidity_v8JVpnsfr.transferOwnership.call(addressTb0tLz2, {from: accounts[1]});
		const boolj1jHq4U = await Liquidity_v8JVpnsfr.addReward.call(uintkWQrOg1, {from: accounts[3]});
		const uint256JOrJjCi = await Liquidity_v8JVpnsfr.changeLockDuration.call(uintn55xtuL, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlcrmDK = "6NO"
		const addressxSSnFlR = accounts[3]
		const addressj1Zc7y = accounts[0]
		const uintdO2croq = BigInt("1069")
		const uintV6nUtm6 = BigInt("281")
		const Liquidity_v8sGn8AGp = await Liquidity_v8.new(stringlcrmDK, addressxSSnFlR, addressj1Zc7y, uintdO2croq, uintV6nUtm6, {from: accounts[4]});
		const addressMp4o9mc = accounts[5]
		const addresskoenOi4 = accounts[5]
		const uint256xsdHvwl = await Liquidity_v8sGn8AGp.calculate.call(addressMp4o9mc, {from: accounts[2]});
		const boolDgzXl5 = await Liquidity_v8sGn8AGp.emergencyWithdraw.call({from: accounts[2]});
		await Liquidity_v8sGn8AGp.renounceOwnership.call({from: accounts[4]});
		const boolBk9Bqa = await Liquidity_v8sGn8AGp.isOwner.call({from: accounts[3]});
		const boolUxgFyEV = await Liquidity_v8sGn8AGp.isOwner.call({from: accounts[2]});
		const 
K69dzMs = await Liquidity_v8sGn8AGp.userDeposits.call(addresskoenOi4, {from: accounts[3]});
		const addresswPGODq = await Liquidity_v8sGn8AGp.owner.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlVosqv = "1pbc2CwT3t9ujS4dqzWSN7DxUl1p9JKoHlysEs5qqsJFBgFKKIV68Urhm3"
		const addressaxeyphe = accounts[4]
		const addresss6Ypdo = accounts[4]
		const uintN2DHtL3 = BigInt("1528")
		const uintLEawVGd = BigInt("1324")
		const Liquidity_v8GCsAmOZ = await Liquidity_v8.new(stringlVosqv, addressaxeyphe, addresss6Ypdo, uintN2DHtL3, uintLEawVGd, {from: accounts[4]});
		const addressJsKQ0XC = accounts[3]
		const uintfGZjRAn = BigInt("1365")
		const uintASaRXSP = BigInt("806")
		const 
nJb0oZ = await Liquidity_v8GCsAmOZ.userDeposits.call(addressJsKQ0XC, {from: accounts[0]});
		const boolGJJc11u = await Liquidity_v8GCsAmOZ.stake.call(uintfGZjRAn, {from: accounts[2]});
		const uint256rANCkVu = await Liquidity_v8GCsAmOZ.changeLockDuration.call(uintASaRXSP, {from: accounts[4]});
		const boolpdsrCz = await Liquidity_v8GCsAmOZ.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringULgbMtI = "Ryb2VtVV3Lku1iYJfiHdijqBYZWIVFZ4WZg9XCWX9fjdS09dgG5zofms"
		const addressKwY6JvU = "0x0000000000000000000000000000000000000001"
		const addresssj8In5Z = accounts[5]
		const uintxfVPS8 = BigInt("1153")
		const uintqB6isCw = BigInt("1089")
		const Liquidity_v8FWXlUE = await Liquidity_v8.new(stringULgbMtI, addressKwY6JvU, addresssj8In5Z, uintxfVPS8, uintqB6isCw, {from: accounts[0]});
		const addressaWYGCdz = accounts[3]
		const uintEUbD7QP = BigInt("1688")
		const addressF78BhNN = "0x0000000000000000000000000000000000000001"
		const addressUWi75Sl = await Liquidity_v8FWXlUE.owner.call({from: accounts[4]});
		await Liquidity_v8FWXlUE.onlyOwner.call({from: accounts[0]});
		const 
R3Yxude = await Liquidity_v8FWXlUE._hasAllowance.call(addressF78BhNN, uintEUbD7QP, addressaWYGCdz, {from: accounts[4]});
		await Liquidity_v8FWXlUE.onlyOwner.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringmBNJ952 = "oOgLirkAYvtZGCvCOTKcp6D2yZHLzSSiLLmO5p5KX"
		const addressTeJEps3 = accounts[2]
		const addresssuXlMjE = accounts[5]
		const uintkfWDc8x = BigInt("801")
		const uinttqn4Jxl = BigInt("1994")
		const Liquidity_v8bZq6k3l = await Liquidity_v8.new(stringmBNJ952, addressTeJEps3, addresssuXlMjE, uintkfWDc8x, uinttqn4Jxl, {from: accounts[2]});
		const addressxCe6PVP = "0x0000000000000000000000000000000000000002"
		await Liquidity_v8bZq6k3l.renounceOwnership.call({from: accounts[2]});
		const uint256WhnVdfB = await Liquidity_v8bZq6k3l.calculate.call(addressxCe6PVP, {from: accounts[1]});
		const boolGP532IM = await Liquidity_v8bZq6k3l.withdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlVosqv = "1pbc2CwT3t9ujS4dqzWSN7DxUl1p9JKoHlysEs5qqsJFBgFKKIV68Urhm3"
		const addressW1PBRVL = accounts[4]
		const addressAN0ceGc = accounts[4]
		const uintrHa1GJu = BigInt("1528")
		const uintbiKlhL4 = BigInt("1324")
		const Liquidity_v8GCsAmOZ = await Liquidity_v8.new(stringlVosqv, addressW1PBRVL, addressAN0ceGc, uintrHa1GJu, uintbiKlhL4, {from: accounts[4]});
		const addressNI66uO1 = accounts[3]
		const uintyx59nB7 = BigInt("806")
		const 
nJb0oZ = await Liquidity_v8GCsAmOZ.userDeposits.call(addressNI66uO1, {from: accounts[0]});
		const uint256rANCkVu = await Liquidity_v8GCsAmOZ.changeLockDuration.call(uintyx59nB7, {from: accounts[4]});
		const boolpdsrCz = await Liquidity_v8GCsAmOZ.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlVosqv = "1pbc2CwT3t9ujS4dqzWSN7DxUl1p9JKoHlysEs5qqsJFBgFKKIV68Urhm3"
		const addressNbjiREF = accounts[4]
		const addresshwMwJtg = accounts[4]
		const uintUkkZBO5 = BigInt("1528")
		const uintTkRAftW = BigInt("1324")
		const Liquidity_v8GCsAmOZ = await Liquidity_v8.new(stringlVosqv, addressNbjiREF, addresshwMwJtg, uintUkkZBO5, uintTkRAftW, {from: accounts[4]});
		const addressAYEJAM2 = accounts[4]
		const uintbn3GYg = BigInt("1648")
		const addressACJlPRK = accounts[5]
		const uinti7VMZ1g = BigInt("1365")
		const uintBiWwBtq = BigInt("99")
		const uintcwtIu3 = BigInt("100")
		const uintI80QHd = BigInt("1909")
		const 
nJb0oZ = await Liquidity_v8GCsAmOZ.userDeposits.call(addressAYEJAM2, {from: accounts[0]});
		const uint64ltzLdSS = await Liquidity_v8GCsAmOZ.setRate.call(uintbn3GYg, {from: accounts[4]});
		const uint256VqoVnTR = await Liquidity_v8GCsAmOZ.calculate.call(addressACJlPRK, {from: accounts[0]});
		await Liquidity_v8GCsAmOZ.renounceOwnership.call({from: accounts[1]});
		const boolGJJc11u = await Liquidity_v8GCsAmOZ.stake.call(uinti7VMZ1g, {from: accounts[2]});
		const uint256rANCkVu = await Liquidity_v8GCsAmOZ.changeLockDuration.call(uintBiWwBtq, {from: accounts[4]});
		const booljz2NC4H = await Liquidity_v8GCsAmOZ.addReward.call(uintcwtIu3, {from: accounts[5]});
		const boolqJ745Yv = await Liquidity_v8GCsAmOZ.addReward.call(uintI80QHd, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringcorA1X = "SIbauzFDwLNWmdBpkrSvxEIppljeKxMLoG8KBYjM27yEbZl"
		const addressYgDWXfd = accounts[4]
		const addressf1A11Pj = accounts[2]
		const uinttOc7BnC = BigInt("738")
		const uintpal2B23 = BigInt("1757")
		const Liquidity_v8bkJbth = await Liquidity_v8.new(stringcorA1X, addressYgDWXfd, addressf1A11Pj, uinttOc7BnC, uintpal2B23, {from: accounts[4]});
		const addressjBVKe35 = accounts[4]
		const uintfHyjqDk = BigInt("1749")
		const addressOqufKdS = await Liquidity_v8bkJbth.transferOwnership.call(addressjBVKe35, {from: accounts[4]});
		const uint256XYwWBAd = await Liquidity_v8bkJbth.changeLockDuration.call(uintfHyjqDk, {from: accounts[4]});
		await Liquidity_v8bkJbth.onlyOwner.call({from: accounts[2]});
		const boolC8bB5U8 = await Liquidity_v8bkJbth.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Liquidity_v8bkJbth.renounceOwnership.call({from: accounts[0]});
	});
})