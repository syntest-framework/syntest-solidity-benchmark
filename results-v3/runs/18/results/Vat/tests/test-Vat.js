const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatPswhTnN = await Vat.new({from: accounts[0]});
		const uintdtAYP1j = BigInt("785")
		const byte9scqed = "0x011a0e1905031c16171e1c1c14131b12131918041f190a17060c0702020a0505"
		const uintjQ4DnFG = BigInt("1066")
		const byteAaEcqlB = "0x02140708131b1102200f0f0104181e0b16140315191102061c01071419091407"
		const byteZQm1iIk = "0x01140c011d1204000317020b180d111b181e011a160d0c1d1a02080302151602"
		const intyet0PMh = BigInt("1423")
		const addresslN6ql7u = accounts[3]
		const byteNGUO6Z8 = "0x100f07120f020b1b1410181e16171f090c1f1f020d131f1c1c1c16191e0a0810"
		const uinttIuHLH1 = BigInt("1359")
		const addresszGS6iKu = accounts[2]
		const addressE1E4Of4 = accounts[4]
		const bytes32On7Xnx1 = await VatPswhTnN.file.call(byte9scqed, uintdtAYP1j, {from: accounts[5]});
		const bytes32s49odd = await VatPswhTnN.file.call(byteZQm1iIk, byteAaEcqlB, uintjQ4DnFG, {from: accounts[3]});
		const bytes32kgAiSPI = await VatPswhTnN.slip.call(byteNGUO6Z8, addresslN6ql7u, intyet0PMh, {from: "0x0000000000000000000000000000000000000001"});
		const addresseOceau7 = await VatPswhTnN.suck.call(addressE1E4Of4, addresszGS6iKu, uinttIuHLH1, {from: accounts[3]});

		await expect(VatPswhTnN.file.call(byte9scqed, uintdtAYP1j, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWPUej8s = await Vat.new({from: accounts[1]});
		const intthzMG1U = BigInt("264")
		const intqFbhH8r = BigInt("1027")
		const addressqfzibZy = accounts[4]
		const addressWNFBNLO = accounts[2]
		const addressLBIEehD = accounts[2]
		const byteT2EQOU3 = "0x0a180709011008001d0c030f1f0a0318061818161e20141f011f1b121e181e1d"
		const uintBwhknw0 = BigInt("1033")
		const byteiLBKPjf = "0x06061b1e04181803040e1a0c031706021f12131f0e1f051b160a1b14121f010d"
		const addressKtUINqf = accounts[4]
		const intpY9AfFN = BigInt("1137")
		const addressNZwtUK3 = accounts[0]
		const byteSk75pcg = "0x11180a151b04191f1b0a0a1819131b0e1c111f091004201008041f0c05101f1f"
		const intEINa0xd = BigInt("935")
		const intdvSXrSF = BigInt("-500")
		const addressykZSaKy = accounts[2]
		const addressVOoWeGe = accounts[5]
		const addressNYmCPwk = accounts[3]
		const byteJJltldz = "0x030d111d120e1615040e0c0311090b0c091b1e0e031f181e09070c0b160e1e1b"
		const intRV72Lv = BigInt("1413")
		const intbt8WZ9Y = BigInt("881")
		const addressCGDBYQO = accounts[3]
		const addressmBiqYF = accounts[1]
		const addressnGSIK4E = accounts[3]
		const byteRoruCHx = "0x1d1718120e0e010504021702180a130c130d1b0a070d100e1a151a1e1f0b0819"
		const bytes32BCZgX8A = await VatWPUej8s.grab.call(byteT2EQOU3, addressLBIEehD, addressWNFBNLO, addressqfzibZy, intqFbhH8r, intthzMG1U, {from: accounts[2]});
		const bytes32TkZZxZZ = await VatWPUej8s.file.call(byteiLBKPjf, uintBwhknw0, {from: accounts[4]});
		const addressbesrpab = await VatWPUej8s.deny.call(addressKtUINqf, {from: accounts[2]});
		const bytes32bGOQoF8 = await VatWPUej8s.slip.call(byteSk75pcg, addressNZwtUK3, intpY9AfFN, {from: accounts[0]});
		const bytes32OKRCmwF = await VatWPUej8s.grab.call(byteJJltldz, addressNYmCPwk, addressVOoWeGe, addressykZSaKy, intdvSXrSF, intEINa0xd, {from: accounts[0]});
		const bytes32Id6CE8N = await VatWPUej8s.grab.call(byteRoruCHx, addressnGSIK4E, addressmBiqYF, addressCGDBYQO, intbt8WZ9Y, intRV72Lv, {from: accounts[3]});

		await expect(VatWPUej8s.grab.call(byteT2EQOU3, addressLBIEehD, addressWNFBNLO, addressqfzibZy, intqFbhH8r, intthzMG1U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQ2UpZG = await Vat.new({from: accounts[2]});
		const intOdMrW9K = BigInt("-401")
		const intoS2SxOW = BigInt("1363")
		const addresszVK2saZ = accounts[1]
		const addresslPLcVSv = accounts[0]
		const addressrRSRjQ2 = accounts[3]
		const byteYHK68XP = "0x16121613100f031216041216191e20160f0c1f0f100a0917011a1b1116080a01"
		const uintzreH1LB = BigInt("240")
		const bytezFLdcNm = "0x1a03200f011d070c1c170f030d1020040809110610110409040b1f1f04000a0e"
		const byteCYGorY = "0x1101181805010912070e030e1d030a1c000c060f061e190c071d0a1e20201904"
		const uintk9w3IAT = BigInt("1630")
		const byteMppg2X = "0x091e1d1f15150f1101050f1d0d1d12070b00000a081f150f010205081b1e051f"
		const byteGMOvtzm = "0x01050211031c0015151b0809140f0a13151c050a01060c080a010b00031b090f"
		const bytes32TOTMrg = await VatQ2UpZG.frob.call(byteYHK68XP, addressrRSRjQ2, addresslPLcVSv, addresszVK2saZ, intoS2SxOW, intOdMrW9K, {from: accounts[0]});
		const bytes32TIsFbdD = await VatQ2UpZG.file.call(byteCYGorY, bytezFLdcNm, uintzreH1LB, {from: accounts[2]});
		const bytes32JzDJgTy = await VatQ2UpZG.file.call(byteGMOvtzm, byteMppg2X, uintk9w3IAT, {from: accounts[5]});

		await expect(VatQ2UpZG.frob.call(byteYHK68XP, addressrRSRjQ2, addresslPLcVSv, addresszVK2saZ, intoS2SxOW, intOdMrW9K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatL2mtSLx = await Vat.new({from: accounts[2]});
		const addressLX7GNTj = accounts[3]
		const uintDIwFxh = BigInt("619")
		const bytedMKU9Kd = "0x1510150417101a07150218030211071101081602071c13170c1b0e080b1e0606"
		await VatL2mtSLx.cage.call({from: accounts[2]});
		const addressjsrKzj = await VatL2mtSLx.hope.call(addressLX7GNTj, {from: accounts[0]});
		const bytes32wBVlZqp = await VatL2mtSLx.file.call(bytedMKU9Kd, uintDIwFxh, {from: accounts[1]});
		await VatL2mtSLx.cage.call({from: accounts[1]});

		await expect(VatL2mtSLx.cage.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uintgjrhSSi = BigInt("187")
		const addressV8dxJW = accounts[1]
		const addressRAHPghr = accounts[4]
		const uintf6zmKG = BigInt("425")
		const addressa4tPMhW = await Vat1pr64g.move.call(addressRAHPghr, addressV8dxJW, uintgjrhSSi, {from: accounts[3]});
		await Vat1pr64g.auth.call({from: accounts[4]});
		const uintzIt3jkW = await Vat1pr64g.heal.call(uintf6zmKG, {from: accounts[0]});

		await expect(Vat1pr64g.move.call(addressRAHPghr, addressV8dxJW, uintgjrhSSi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uintps7lOfQ = BigInt("1289")
		const addressFVmWh44 = accounts[1]
		const uintlTSZU2f = BigInt("1980")
		const byteuQ9DZrq = "0x111d1c0112060d1e170d16131d191804130e071a11110b17110f15121b170211"
		const uintmo6v81c = await Vat1pr64g.heal.call(uintps7lOfQ, {from: accounts[4]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressFVmWh44, {from: accounts[2]});
		const bytes32bZtQg4Z = await Vat1pr64g.file.call(byteuQ9DZrq, uintlTSZU2f, {from: accounts[3]});

		await expect(Vat1pr64g.heal.call(uintps7lOfQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuvWzIwJ = await Vat.new({from: accounts[1]});
		const intYaof2ti = BigInt("1650")
		const intKNoAtK = BigInt("1916")
		const addressPB48nMQ = accounts[4]
		const addressm0sFeyU = accounts[1]
		const addressQP4icAx = accounts[2]
		const byteD8pucfi = "0x131e1b131801131f0b061a060a10121f0f0304031d14111e201d1c1301021800"
		const uinteenOK14 = BigInt("1218")
		const byteE1KxNwk = "0x0b1b141a110b191d1d15151e1c0f0b100c11050602141b171016111e1e1a050e"
		const uintqYQGTF = BigInt("1232")
		const addressYajtkKa = accounts[5]
		const addressf5SfNIU = accounts[0]
		const uintufPphCd = BigInt("600")
		const addressX1UMc5K = accounts[3]
		const addresstvilJC1 = accounts[4]
		await VatuvWzIwJ.note.call({from: accounts[1]});
		const bytes32EjrSglO = await VatuvWzIwJ.frob.call(byteD8pucfi, addressQP4icAx, addressm0sFeyU, addressPB48nMQ, intKNoAtK, intYaof2ti, {from: accounts[3]});
		const bytes32cOIQJxl = await VatuvWzIwJ.file.call(byteE1KxNwk, uinteenOK14, {from: accounts[3]});
		const addressbcXhih1 = await VatuvWzIwJ.suck.call(addressf5SfNIU, addressYajtkKa, uintqYQGTF, {from: accounts[3]});
		const addressLA9Fr12 = await VatuvWzIwJ.move.call(addresstvilJC1, addressX1UMc5K, uintufPphCd, {from: accounts[1]});

		await expect(VatuvWzIwJ.note.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uintiH3xOoL = BigInt("694")
		const addressG9KAlIt = accounts[1]
		const addressOY09PfO = accounts[5]
		const byteXJsSn7u = "0x050a171c1c011c190c16111609111318071b16181f1e0309050e1d2015010c12"
		const addressPDlo5q = accounts[1]
		const addressNh79pom = accounts[4]
		const addressnGcrKAB = accounts[2]
		const bytes32jB77vK = await Vat1pr64g.flux.call(byteXJsSn7u, addressOY09PfO, addressG9KAlIt, uintiH3xOoL, {from: accounts[4]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressPDlo5q, {from: accounts[2]});
		const addressLxHlTcV = await Vat1pr64g.nope.call(addressNh79pom, {from: accounts[3]});
		const addressQa9Kijk = await Vat1pr64g.deny.call(addressnGcrKAB, {from: accounts[2]});

		await expect(Vat1pr64g.flux.call(byteXJsSn7u, addressOY09PfO, addressG9KAlIt, uintiH3xOoL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const addresshOimSCG = accounts[1]
		const addressMJgZzvn = accounts[2]
		const addressLRscjIM = await Vat1pr64g.rely.call(addresshOimSCG, {from: accounts[0]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressMJgZzvn, {from: accounts[2]});

		await expect(Vat1pr64g.deny.call(addressMJgZzvn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatudUHo6f = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const intn2DaPSU = BigInt("1328")
		const inthDIXWti = BigInt("1961")
		const addressMUrnTV = "0x0000000000000000000000000000000000000001"
		const addressCOO0c4Y = accounts[3]
		const addressR3M1zwQ = accounts[4]
		const bytefXViHh3 = "0x090c070d19191d09081a0813190e171c1818030c12110a030d19060304001419"
		const uintzcJAKnC = BigInt("1572")
		const addressSD04pmM = accounts[3]
		const addressVPvPCom = accounts[1]
		const bytes32qBwysNc = await VatudUHo6f.frob.call(bytefXViHh3, addressR3M1zwQ, addressCOO0c4Y, addressMUrnTV, inthDIXWti, intn2DaPSU, {from: accounts[1]});
		const addressytVbP2Z = await VatudUHo6f.suck.call(addressVPvPCom, addressSD04pmM, uintzcJAKnC, {from: accounts[0]});
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const addressOWaLYS = accounts[0]
		const addressPPh8kJQ = accounts[1]
		const addressUjT5tfb = await Vat1pr64g.nope.call(addressOWaLYS, {from: accounts[2]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressPPh8kJQ, {from: accounts[2]});

		await expect(Vat1pr64g.deny.call(addressPPh8kJQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const intIRw1OGK = BigInt("881")
		const intMVSBoM0 = BigInt("-1586")
		const addressEHckLBd = accounts[3]
		const address50rceR = accounts[0]
		const bytelrj78Da = "0x0b110711070b0d0a071c1d1f12101d0f15191c15131d10200010081b0d050d0b"
		const addressLh9Cae = accounts[2]
		const bytes32tFn1OYM = await Vat1pr64g.fork.call(bytelrj78Da, address50rceR, addressEHckLBd, intMVSBoM0, intIRw1OGK, {from: accounts[3]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressLh9Cae, {from: accounts[2]});

		await expect(Vat1pr64g.fork.call(bytelrj78Da, address50rceR, addressEHckLBd, intMVSBoM0, intIRw1OGK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatb2onPQ = await Vat.new({from: accounts[0]});
		const byte17XlOr = "0x0e11120e1b101203071d100a1018190d1b0520121e041603100f171b13041b02"
		const uintuOgzT1x = BigInt("31")
		const byteDATtmz2 = "0x040c08170115040d1f101d0e11131d180e1f191402160d061b0e1511071c0e1b"
		const address1wkFzF = accounts[3]
		const uintN28aJX8 = BigInt("1586")
		const byteipxWAp9 = "0x13161b01051c0d0f170a170010070411120f1c1a150e1c19021a1408201b0903"
		const uinttRqEMi7 = BigInt("1005")
		const bytexPOY75p = "0x17200f131f111113161e1c160a041e0805121713011608110b051117140c0d1a"
		const bytew2MXD9Q = "0x1a100d121814061012130b011b0b11141909041319090e1814060b1a01090d13"
		const bytes32MmA0l8S = await Vatb2onPQ.init.call(byte17XlOr, {from: accounts[0]});
		await Vatb2onPQ.auth.call({from: accounts[5]});
		const bytes32uNJTjqd = await Vatb2onPQ.file.call(byteDATtmz2, uintuOgzT1x, {from: accounts[1]});
		const addresslFHZiiU = await Vatb2onPQ.hope.call(address1wkFzF, {from: accounts[4]});
		const bytes32suFOZB = await Vatb2onPQ.file.call(byteipxWAp9, uintN28aJX8, {from: accounts[0]});
		const bytes32S6qt9rF = await Vatb2onPQ.file.call(bytew2MXD9Q, bytexPOY75p, uinttRqEMi7, {from: accounts[2]});

		await expect(Vatb2onPQ.auth.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const intD78psMu = BigInt("1612")
		const int3PpN5o = BigInt("-1053")
		const addressaecjpFv = accounts[3]
		const addressIGEqtLK = accounts[2]
		const addressoIveZl = accounts[1]
		const byteNcxu16v = "0x191e102014101a0b0d16131715131a1a17091b02151d1e091a1f18050413131f"
		const intbER3zvp = BigInt("-463")
		const addressaHcmX29 = accounts[0]
		const byteIt1nkHu = "0x031a00180a1612071b1308191f12190f010b1d1300161906101a0e1b121a0a04"
		const addresspX3qSP5 = accounts[2]
		const bytes32rM1LUt = await Vat1pr64g.grab.call(byteNcxu16v, addressoIveZl, addressIGEqtLK, addressaecjpFv, int3PpN5o, intD78psMu, {from: accounts[0]});
		const bytes32qVybQYR = await Vat1pr64g.slip.call(byteIt1nkHu, addressaHcmX29, intbER3zvp, {from: accounts[2]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addresspX3qSP5, {from: accounts[2]});

		await expect(Vat1pr64g.grab.call(byteNcxu16v, addressoIveZl, addressIGEqtLK, addressaecjpFv, int3PpN5o, intD78psMu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatHoT0Xp9 = await Vat.new({from: accounts[1]});
		const addressON0XhPV = accounts[3]
		const uintBsUwar0 = BigInt("760")
		const addresseTnFrH = "0x0000000000000000000000000000000000000001"
		const addresskaWYKVg = "0x0000000000000000000000000000000000000001"
		const addressNtzIS2C = await VatHoT0Xp9.nope.call(addressON0XhPV, {from: accounts[1]});
		const addresszfW7COz = await VatHoT0Xp9.suck.call(addresskaWYKVg, addresseTnFrH, uintBsUwar0, {from: accounts[1]});
		await VatHoT0Xp9.cage.call({from: accounts[1]});

		await expect(VatHoT0Xp9.cage.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const intgsjFWTM = BigInt("-1998")
		const addresspgvOxWK = accounts[3]
		const byteUnPymXs = "0x090809050f1a1e141619130c060b07011e111300071a19120b11011504130f10"
		const addressThsQt8 = accounts[2]
		const bytes32h1tz9vD = await Vat1pr64g.slip.call(byteUnPymXs, addresspgvOxWK, intgsjFWTM, {from: accounts[0]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressThsQt8, {from: accounts[2]});

		await expect(Vat1pr64g.slip.call(byteUnPymXs, addresspgvOxWK, intgsjFWTM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const intkYoENDA = BigInt("1151")
		const intvm8UboB = BigInt("239")
		const addressos0GHe = accounts[1]
		const addressHJgquqh = accounts[2]
		const addressuTAKX61 = accounts[4]
		const byteNtfzGpt = "0x1a110305021f0d190e090e0c08121b0d091b03191c1b11081e0a1d0a01201a17"
		const addressbZEiv05 = accounts[2]
		const bytes32fD2lMeE = await Vat1pr64g.grab.call(byteNtfzGpt, addressuTAKX61, addressHJgquqh, addressos0GHe, intvm8UboB, intkYoENDA, {from: accounts[0]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressbZEiv05, {from: accounts[2]});

		await expect(Vat1pr64g.grab.call(byteNtfzGpt, addressuTAKX61, addressHJgquqh, addressos0GHe, intvm8UboB, intkYoENDA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const addresstmGENd9 = accounts[3]
		const addressp18n7l = accounts[2]
		const addressMmmSsMy = accounts[2]
		const addressDpbXSle = accounts[2]
		const addresssQClgXv = await Vat1pr64g.nope.call(addresstmGENd9, {from: accounts[1]});
		const addressIkgqT8h = await Vat1pr64g.deny.call(addressp18n7l, {from: accounts[0]});
		const addressU6faB6x = await Vat1pr64g.rely.call(addressMmmSsMy, {from: accounts[3]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressDpbXSle, {from: accounts[2]});

		await expect(Vat1pr64g.rely.call(addressMmmSsMy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uinttgNGOaY = BigInt("386")
		const byteDCuyLkH = "0x1214030f18100708151a11090e050d1e10131909070a0b180a170d1020160812"
		const bytecKcWkPl = "0x041203121517020c08071c101d14090f0b0903110c1410180f19160c060c0611"
		const addressFxdfjgZ = accounts[1]
		const bytes32YMfwAMj = await Vat1pr64g.file.call(bytecKcWkPl, byteDCuyLkH, uinttgNGOaY, {from: accounts[0]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressFxdfjgZ, {from: accounts[2]});

		await expect(Vat1pr64g.file.call(bytecKcWkPl, byteDCuyLkH, uinttgNGOaY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const intIjXJjoW = BigInt("-143")
		const addressPgtyE15 = accounts[2]
		const byteQMNPsV7 = "0x051304121a0e0d0f1c1c16131412010e0907011f050f1b180608130d1f02070b"
		const byteNJkRri7 = "0x11161b10170712050d1e0b061f0f1f14060e041213171e1505131c030b06030a"
		const bytes32RkQXLj6 = await Vat1pr64g.fold.call(byteQMNPsV7, addressPgtyE15, intIjXJjoW, {from: accounts[0]});
		const bytes32VIHKgcF = await Vat1pr64g.init.call(byteNJkRri7, {from: accounts[3]});

		await expect(Vat1pr64g.fold.call(byteQMNPsV7, addressPgtyE15, intIjXJjoW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uintzeM0zUj = BigInt("386")
		const bytetwvPJor = "0x1214030f18100708151a11090e050d1e10131909070a0b180a170d1020160812"
		const byteM0qWzXE = "0x041203121517fffffffe0c08071c101d14090f0b0903110c1410180f19160c060c0611"
		const bytes32YMfwAMj = await Vat1pr64g.file.call(byteM0qWzXE, bytetwvPJor, uintzeM0zUj, {from: accounts[0]});

		await expect(Vat1pr64g.file.call(byteM0qWzXE, bytetwvPJor, uintzeM0zUj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uintOrOa109 = BigInt("386")
		const byten1yqxw = "0x1214030f18100708151a11090e050d1e10131909070a0b180a170d1020160812"
		const byteVi3BhCS = "0x041203121517020c08ffffffff1c101d14090f0b0903110c1410180f19160c060c0611"
		const uintUY6rd0 = BigInt("926")
		const addressQKFz7MQ = accounts[2]
		const addressWxcelP7 = accounts[4]
		const bytes32YMfwAMj = await Vat1pr64g.file.call(byteVi3BhCS, byten1yqxw, uintOrOa109, {from: accounts[0]});
		const addressOWAI7H = await Vat1pr64g.move.call(addressWxcelP7, addressQKFz7MQ, uintUY6rd0, {from: accounts[1]});

		await expect(Vat1pr64g.file.call(byteVi3BhCS, byten1yqxw, uintOrOa109, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uinthLtyqa = BigInt("386")
		const bytetId9Lx1 = "0x1214030f18100708151a11090e050d1e10131909070a0b180a170d1020160812"
		const bytenyjvCLT = "0x0412fffffffd121517020c08071c101d14090f0b0903110c1410180f19160c060c0611"
		const bytes32YMfwAMj = await Vat1pr64g.file.call(bytenyjvCLT, bytetId9Lx1, uinthLtyqa, {from: accounts[0]});

		await expect(Vat1pr64g.file.call(bytenyjvCLT, bytetId9Lx1, uinthLtyqa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uintNW4WnWM = BigInt("386")
		const bytecxQaj88 = "0x1214030f18100708151a11090effffffff0d1e10131909070a0b180a170d1020160812"
		const byteoETn3E7 = "0x041203121517020c08071c101d14090f0b0903110c1410180f19160c060c0611"
		const addressY4egR5S = accounts[0]
		const bytes32YMfwAMj = await Vat1pr64g.file.call(byteoETn3E7, bytecxQaj88, uintNW4WnWM, {from: accounts[0]});
		const addressfQcPYoW = await Vat1pr64g.nope.call(addressY4egR5S, {from: accounts[4]});

		await expect(Vat1pr64g.file.call(byteoETn3E7, bytecxQaj88, uintNW4WnWM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uintpMuQhvq = BigInt("1888")
		const addressi3wZqIw = accounts[4]
		const address9HbI37 = accounts[0]
		const inth72HPM3 = BigInt("-1870")
		const intkuRCF9A = BigInt("-1204")
		const addressOn848ft = accounts[2]
		const addressH3ajqb = accounts[2]
		const bytelHI5y1i = "0x15030902111619031814150818171b18180003121a11151f0e041c1102060908"
		const addressxCxXXsk = accounts[2]
		const addresscMRwlSy = await Vat1pr64g.suck.call(address9HbI37, addressi3wZqIw, uintpMuQhvq, {from: accounts[0]});
		const bytes32OpPAu6I = await Vat1pr64g.fork.call(bytelHI5y1i, addressH3ajqb, addressOn848ft, intkuRCF9A, inth72HPM3, {from: accounts[2]});
		const addressHFPPaIi = await Vat1pr64g.deny.call(addressxCxXXsk, {from: accounts[2]});

		await expect(Vat1pr64g.deny.call(addressxCxXXsk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat1pr64g = await Vat.new({from: accounts[0]});
		const uintSUV3y6E = BigInt("386")
		const byteCYJfdHw = "0x1214030f18100708151a11090e050d1e10131909070a0b180a170d1020160812"
		const byteeifLbb2 = "0xffffffff1203121517020c08071c101d14090f0b0903110c1410180f19160c060c0611"
		const bytes32YMfwAMj = await Vat1pr64g.file.call(byteeifLbb2, byteCYJfdHw, uintSUV3y6E, {from: accounts[0]});

		await expect(Vat1pr64g.file.call(byteeifLbb2, byteCYJfdHw, uintSUV3y6E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})