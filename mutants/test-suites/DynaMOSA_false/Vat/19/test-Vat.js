const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VattmG6mql = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPi3Ewme = BigInt("1753")
		const byten0rwUoW = "0x1a18131f171f0e0c141d101d020c01111101030500181f1318131a18060e1008"
		const inte90w1CP = BigInt("1562")
		const addresszaCxPnB = accounts[2]
		const byteNQsKl7s = "0x160414170a121402031b1d191103080a18151b0c15021f02151d160e140a0906"
		const intqxAswHl = BigInt("-1671")
		const addressvFHQkAB = accounts[1]
		const byteg8DzSPt = "0x1f1e111c1f0a060e151909070919131b12201f1f001018020304190a000d110e"
		const bytes32JhhZdnt = await VattmG6mql.file.call(byten0rwUoW, uintPi3Ewme, {from: accounts[2]});
		const bytes32nQ5Hm6e = await VattmG6mql.fold.call(byteNQsKl7s, addresszaCxPnB, inte90w1CP, {from: accounts[4]});
		const bytes32uFSUESu = await VattmG6mql.slip.call(byteg8DzSPt, addressvFHQkAB, intqxAswHl, {from: accounts[3]});
	});

	it('test for Vat', async () => {
		const Vaty18Lw91 = await Vat.new({from: accounts[4]});
		const addressAjGgNZI = accounts[3]
		const intuI7GCjg = BigInt("156")
		const intzMpdm6 = BigInt("-1036")
		const addressJq6Xevr = accounts[5]
		const addresskAe5XWB = accounts[4]
		const addressRpVNsYW = accounts[3]
		const byteSXoy9tW = "0x091e191f09171219040b11031d0d110805151f0a20021711131e08081203170b"
		const addressXBoHln7 = await Vaty18Lw91.hope.call(addressAjGgNZI, {from: accounts[1]});
//		await Vaty18Lw91.cage.call({from: accounts[4]});
//		const bytes32WhIzlH4 = await Vaty18Lw91.frob.call(byteSXoy9tW, addressRpVNsYW, addresskAe5XWB, addressJq6Xevr, intzMpdm6, intuI7GCjg, {from: accounts[1]});

		await expect(Vaty18Lw91.cage.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfiZd2H2 = await Vat.new({from: accounts[0]});
		const addresskcXDSsh = accounts[3]
		const intr7BmIb = BigInt("-1323")
		const intsFwtuIE = BigInt("893")
		const addressJJhNUM = accounts[0]
		const addressR1TyABx = accounts[2]
		const addressl8wi6Zl = accounts[1]
		const bytepAdASaI = "0x1c1a131f201306031703191c1b0d1103111701061912031e0e1b1c0b01020d17"
		const intBkyUtht = BigInt("1128")
		const intM9jfgDI = BigInt("1092")
		const addressRv3ZL1 = accounts[1]
		const addressa7tuZDx = "0x0000000000000000000000000000000000000001"
		const addressHl3o2Kl = accounts[3]
		const byteSeZOXpj = "0x050a051c130804161c1a09171b1c171909161b030b0b1204091b0618131f0317"
//		const addressBSlN6Mj = await VatfiZd2H2.rely.call(addresskcXDSsh, {from: accounts[3]});
//		const bytes32t7xPM8F = await VatfiZd2H2.frob.call(bytepAdASaI, addressl8wi6Zl, addressR1TyABx, addressJJhNUM, intsFwtuIE, intr7BmIb, {from: accounts[1]});
//		const bytes32BFJeBGZ = await VatfiZd2H2.frob.call(byteSeZOXpj, addressHl3o2Kl, addressa7tuZDx, addressRv3ZL1, intM9jfgDI, intBkyUtht, {from: accounts[0]});

		await expect(VatfiZd2H2.rely.call(addresskcXDSsh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatStPq0X2 = await Vat.new({from: accounts[3]});
		const uintaXOWMI9 = BigInt("20")
		const addressjoL3Iau = "0x0000000000000000000000000000000000000001"
		const addressTMk2vyT = accounts[1]
		const byteKsd9uuD = "0x090f0b041e1a0b1a030408021e0014131e15180a1510180f201303110c0e1011"
		const uintHSN0WFu = BigInt("339")
		const addressh3yNW6p = accounts[2]
		const addressKCsHh1k = accounts[1]
		const byteRHeFRQm = "0x0a140b1715010e04140f061301120615031d1e0c020f18091c061f16030a190d"
		const intmNn8b2c = BigInt("-747")
		const inti2GvEqN = BigInt("807")
		const addresskWEI3Ol = accounts[1]
		const addresswxRSkOd = accounts[2]
		const addresseJR6qD = accounts[4]
		const byteLc7VqEZ = "0x16071e1a1b03021d1d1f121e201b131f1d09021e1a1d01161e0b0c1d04131808"
//		const bytes32tSEKSm = await VatStPq0X2.flux.call(byteKsd9uuD, addressTMk2vyT, addressjoL3Iau, uintaXOWMI9, {from: accounts[2]});
//		const bytes32zVbmRWY = await VatStPq0X2.flux.call(byteRHeFRQm, addressKCsHh1k, addressh3yNW6p, uintHSN0WFu, {from: accounts[1]});
//		const bytes32LWRWXmN = await VatStPq0X2.frob.call(byteLc7VqEZ, addresseJR6qD, addresswxRSkOd, addresskWEI3Ol, inti2GvEqN, intmNn8b2c, {from: accounts[3]});

		await expect(VatStPq0X2.flux.call(byteKsd9uuD, addressTMk2vyT, addressjoL3Iau, uintaXOWMI9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatmUFFLp0 = await Vat.new({from: accounts[0]});
		const addressbeBEQxp = accounts[4]
		const uintKt0oGS3 = BigInt("286")
//		await VatmUFFLp0.auth.call({from: accounts[0]});
//		const addressB2EMdvA = await VatmUFFLp0.hope.call(addressbeBEQxp, {from: accounts[4]});
//		const uintlIVZt3y = await VatmUFFLp0.heal.call(uintKt0oGS3, {from: accounts[4]});
//		await VatmUFFLp0.note.call({from: accounts[3]});

		await expect(VatmUFFLp0.auth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vaty18Lw91 = await Vat.new({from: accounts[4]});
		const addressYPtLaDP = accounts[4]
		const uintol85btx = BigInt("1687")
		const byteniCekVS = "0x171d14201a090f0b120f170b02161c1b1104190e03200c0c160202051a180f16"
		const intD1mnaCQ = BigInt("156")
		const intf1x7wG = BigInt("-1036")
		const addressmiLXOsD = accounts[5]
		const addresspdCie2K = accounts[4]
		const addresswwW551B = accounts[3]
		const bytec10n9sz = "0x091e191f09171219040b11031d0d110805151f0a20021711131e08081203170b"
		const addressXBoHln7 = await Vaty18Lw91.hope.call(addressYPtLaDP, {from: accounts[1]});
//		const bytes32G4dLzP = await Vaty18Lw91.file.call(byteniCekVS, uintol85btx, {from: accounts[2]});
//		const bytes32WhIzlH4 = await Vaty18Lw91.frob.call(bytec10n9sz, addresswwW551B, addresspdCie2K, addressmiLXOsD, intf1x7wG, intD1mnaCQ, {from: accounts[1]});

		await expect(Vaty18Lw91.file.call(byteniCekVS, uintol85btx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatxUN9zsR = await Vat.new({from: accounts[3]});
		const uintygI0PDl = BigInt("338")
		const addressbWQELHv = accounts[0]
		const addressPMnr9h1 = accounts[3]
		const byteDfkbUda = "0x0d1c160f1216170a1109041b0e020d031d020612060d100b07130f191a201817"
		const addressteoRArv = "0x0000000000000000000000000000000000000001"
		const uintSm1kr6k = BigInt("1773")
		const bytek0FZDb8 = "0x021e19130d1b061302101c061d13141f1d030d061611010c18011819071f020e"
//		const addresse6Gy9py = await VatxUN9zsR.move.call(addressPMnr9h1, addressbWQELHv, uintygI0PDl, {from: accounts[4]});
//		const bytes32dey3hAt = await VatxUN9zsR.init.call(byteDfkbUda, {from: "0x0000000000000000000000000000000000000001"});
//		const addressBzREED = await VatxUN9zsR.nope.call(addressteoRArv, {from: accounts[5]});
//		const bytes32zbVBdm = await VatxUN9zsR.file.call(bytek0FZDb8, uintSm1kr6k, {from: accounts[1]});

		await expect(VatxUN9zsR.move.call(addressPMnr9h1, addressbWQELHv, uintygI0PDl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vaty18Lw91 = await Vat.new({from: accounts[4]});
		const addressmBhzRoG = accounts[3]
		const intAiKXYDv = BigInt("1101")
		const addressrxA9l92 = accounts[4]
		const bytezYXuwXY = "0x1a021d1920170d061c1a20081a0308181b12021b191e1e1f1e1505140b121d1c"
		const addressbXFFGm0 = accounts[0]
		const intsz99gUe = BigInt("156")
		const intcWDzEfh = BigInt("-1036")
		const addressa5LGthR = accounts[5]
		const addressoHRuIqs = accounts[4]
		const addresskbSsGdR = accounts[4]
		const byteoA9KKJ7 = "0x091e191f09171219040b11031d0d110805151f0a20021711131e08081203170b"
		const addressXBoHln7 = await Vaty18Lw91.hope.call(addressmBhzRoG, {from: accounts[1]});
		const bytes32WSkLYca = await Vaty18Lw91.slip.call(bytezYXuwXY, addressrxA9l92, intAiKXYDv, {from: accounts[4]});
//		const addressDYpKyMo = await Vaty18Lw91.deny.call(addressbXFFGm0, {from: accounts[0]});
//		await Vaty18Lw91.cage.call({from: accounts[4]});
//		const bytes32WhIzlH4 = await Vaty18Lw91.frob.call(byteoA9KKJ7, addresskbSsGdR, addressoHRuIqs, addressa5LGthR, intcWDzEfh, intsz99gUe, {from: accounts[1]});

		await expect(Vaty18Lw91.deny.call(addressbXFFGm0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuwuXVBU = await Vat.new({from: accounts[2]});
		const addressA6wIuiY = accounts[3]
		const intvTbmjLx = BigInt("-706")
		const inta2wDr0a = BigInt("-751")
		const addressksVb0Ur = "0x0000000000000000000000000000000000000001"
		const addressJxoVMT8 = accounts[0]
		const byteqTBfqKM = "0x0e1012161d0c0d0c031f1a16041a111e1105091f011b00001b16060e12181c19"
		const addressgbVsQP = accounts[0]
		const addressi9Fes3D = await VatuwuXVBU.nope.call(addressA6wIuiY, {from: "0x0000000000000000000000000000000000000001"});
//		await VatuwuXVBU.auth.call({from: accounts[3]});
//		const bytes32SAK75Bf = await VatuwuXVBU.fork.call(byteqTBfqKM, addressJxoVMT8, addressksVb0Ur, inta2wDr0a, intvTbmjLx, {from: accounts[1]});
//		const addresszXkqY1 = await VatuwuXVBU.deny.call(addressgbVsQP, {from: accounts[1]});

		await expect(VatuwuXVBU.auth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfiZd2H2 = await Vat.new({from: accounts[0]});
		const uintIkZ90ik = BigInt("900")
		const inthU3WRxh = BigInt("-1323")
		const intALHDNUK = BigInt("893")
		const addressJ0PSra = accounts[0]
		const addressUh3K3AG = accounts[2]
		const addresseLvxNWf = accounts[1]
		const bytev5nwOCV = "0x1c1a131f201306031703191c1b0d1103111701061912031e0e1b1c0b01020d17"
		const intnrrxxJh = BigInt("1128")
		const intzBtxPYQ = BigInt("1092")
		const addressFlHQi6g = accounts[1]
		const addressLxFtMAH = "0x0000000000000000000000000000000000000001"
		const addressKyRjhWM = accounts[4]
		const bytemw4kB0 = "0x050a051c130804161c1a09171b1c171909161b030b0b1204091b0618131f0317"
//		const uintvYOWsGA = await VatfiZd2H2.heal.call(uintIkZ90ik, {from: accounts[2]});
//		const bytes32t7xPM8F = await VatfiZd2H2.frob.call(bytev5nwOCV, addresseLvxNWf, addressUh3K3AG, addressJ0PSra, intALHDNUK, inthU3WRxh, {from: accounts[1]});
//		const bytes32BFJeBGZ = await VatfiZd2H2.frob.call(bytemw4kB0, addressKyRjhWM, addressLxFtMAH, addressFlHQi6g, intzBtxPYQ, intnrrxxJh, {from: accounts[0]});

		await expect(VatfiZd2H2.heal.call(uintIkZ90ik, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatStPq0X2 = await Vat.new({from: accounts[3]});
		const intUWrWhLM = BigInt("-275")
		const intlmDkBqr = BigInt("-1199")
		const address65enXy = accounts[4]
		const addressV1txdtA = accounts[0]
		const bytegOrucem = "0x06031f1618071e131702080f051f1e06110012040210001c1b160717130b151d"
		const uintkwpYxCp = BigInt("20")
		const addressIsjuf5J = "0x0000000000000000000000000000000000000001"
		const addresspg5CCT4 = accounts[1]
		const bytez4fhfyq = "0x090f0b041e1a0b1a030408021e0014131e15180a1510180f201303110c0e1011"
		const uintVYA1vcA = BigInt("339")
		const addressEpFaZBZ = accounts[2]
		const addressvqKAB3j = accounts[1]
		const byteHT2tZ2b = "0x0a140b1715010e04140f061301120615031d1e0c020f18091c061f16030a190d"
		const intQ9MXrI0 = BigInt("-747")
		const intE31M2R = BigInt("807")
		const addressLXcjoQV = accounts[1]
		const addressg37cQx = accounts[2]
		const addressAz18UYK = accounts[4]
		const bytepXMKU2a = "0x16071e1a1b03021d1d1f121e201b131f1d09021e1a1d01161e0b0c1d04131808"
//		const bytes32wUWDkWF = await VatStPq0X2.fork.call(bytegOrucem, addressV1txdtA, address65enXy, intlmDkBqr, intUWrWhLM, {from: accounts[0]});
//		const bytes32tSEKSm = await VatStPq0X2.flux.call(bytez4fhfyq, addresspg5CCT4, addressIsjuf5J, uintkwpYxCp, {from: accounts[2]});
//		const bytes32zVbmRWY = await VatStPq0X2.flux.call(byteHT2tZ2b, addressvqKAB3j, addressEpFaZBZ, uintVYA1vcA, {from: accounts[1]});
//		const bytes32LWRWXmN = await VatStPq0X2.frob.call(bytepXMKU2a, addressAz18UYK, addressg37cQx, addressLXcjoQV, intE31M2R, intQ9MXrI0, {from: accounts[3]});

		await expect(VatStPq0X2.fork.call(bytegOrucem, addressV1txdtA, address65enXy, intlmDkBqr, intUWrWhLM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vaty18Lw91 = await Vat.new({from: accounts[4]});
		const addresslZFsgdC = accounts[2]
		const addresscUwa6A9 = accounts[3]
		const uintIwAcBxd = BigInt("364")
		const byteawXxxwf = "0x0a0420190c0406151d1d0c1102071c1f090511121813120b0818031b0a170d0f"
		const uintqyBUoXl = BigInt("1076")
		const addressAOqzhMT = accounts[0]
		const addressINdfB5y = accounts[2]
		const intuerh2Ch = BigInt("156")
		const intkII4GXJ = BigInt("-1036")
		const addressPPr1eS1 = accounts[5]
		const addresssFPFvFa = accounts[4]
		const addressC9AvySb = accounts[3]
		const bytejPEgYC = "0x091e191f09171219040b11031d0d110805151f0a20021711131e08081203170b"
		const addressKmnzOH = await Vaty18Lw91.deny.call(addresslZFsgdC, {from: accounts[4]});
		const addressXBoHln7 = await Vaty18Lw91.hope.call(addresscUwa6A9, {from: accounts[1]});
//		const bytes32UHrZVgB = await Vaty18Lw91.file.call(byteawXxxwf, uintIwAcBxd, {from: accounts[2]});
//		await Vaty18Lw91.cage.call({from: accounts[4]});
//		const addressIcACWuh = await Vaty18Lw91.suck.call(addressINdfB5y, addressAOqzhMT, uintqyBUoXl, {from: accounts[1]});
//		const bytes32WhIzlH4 = await Vaty18Lw91.frob.call(bytejPEgYC, addressC9AvySb, addresssFPFvFa, addressPPr1eS1, intkII4GXJ, intuerh2Ch, {from: accounts[1]});

		await expect(Vaty18Lw91.file.call(byteawXxxwf, uintIwAcBxd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatqytVPze = await Vat.new({from: accounts[4]});
		const byte4XCCGw = "0x191211090a0d1b0b1e151d1b08171f07051e01181a010205120601071e1b0211"
		const intV1DQs0e = BigInt("151")
		const intEGuoAjI = BigInt("1108")
		const addressHqf5F1Z = accounts[0]
		const addressoajib43 = accounts[3]
		const addressTPS7KI = "0x0000000000000000000000000000000000000001"
		const byte5VfOB5 = "0x1e1a1a06091f0f100c170b0d0c13041e1413151e1913060a070f0a020113010e"
		const uintZa4njKk = BigInt("1903")
		const addressblUgRga = accounts[1]
		const addresslQ9eRc9 = accounts[2]
		const byteuEVO8VT = "0x1718090314111a151702061c0c1509030c0c060c131b1a0a0a11100411040409"
		const uintZ21QfkV = BigInt("1057")
		const addressmxaHKBR = accounts[0]
		const addresshkfaE6T = accounts[2]
		const bytes32J71zEfH = await VatqytVPze.init.call(byte4XCCGw, {from: accounts[4]});
//		const bytes32l2TNepZ = await VatqytVPze.grab.call(byte5VfOB5, addressTPS7KI, addressoajib43, addressHqf5F1Z, intEGuoAjI, intV1DQs0e, {from: accounts[4]});
//		const bytes32V6uAKE0 = await VatqytVPze.flux.call(byteuEVO8VT, addresslQ9eRc9, addressblUgRga, uintZa4njKk, {from: "0x0000000000000000000000000000000000000001"});
//		const addressTZwOYBX = await VatqytVPze.suck.call(addresshkfaE6T, addressmxaHKBR, uintZ21QfkV, {from: accounts[5]});

		await expect(VatqytVPze.grab.call(byte5VfOB5, addressTPS7KI, addressoajib43, addressHqf5F1Z, intEGuoAjI, intV1DQs0e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vaty18Lw91 = await Vat.new({from: accounts[4]});
		const intOU3mnL5 = BigInt("-1498")
		const addressoWMo0rR = accounts[1]
		const byteZx7YEWb = "0x141a091b1408140b131d1216161b19140c09120d1f16141a1216051e0f07040a"
		const byteIFwGiT1 = "0x0e09120f0700071a0805001b1c0a000a20051e050a05051117110414031b161f"
		const uintgSHE3bc = BigInt("1009")
		const addressBxUtooY = accounts[1]
		const addressYJ73wSx = accounts[0]
		const bytefQ8g4jo = "0x161107020a0d18141a1b0b1e19151c10191e1e0a1c1d1c0b0e1e1a1e0513061d"
		const intZA1DvoU = BigInt("156")
		const intRWhfHtp = BigInt("-1036")
		const addressbGqMKqT = accounts[5]
		const addressGxt88Hu = accounts[4]
		const address2wAKOp = accounts[3]
		const byteIv2rzI3 = "0x091e191f09171219040b11031d0d110805151f0a20021711131e08081203170b"
//		await Vaty18Lw91.cage.call({from: accounts[4]});
//		const bytes32OWAwKk8 = await Vaty18Lw91.fold.call(byteZx7YEWb, addressoWMo0rR, intOU3mnL5, {from: accounts[4]});
//		const bytes32scBLbob = await Vaty18Lw91.init.call(byteIFwGiT1, {from: accounts[0]});
//		const bytes32ALxOXcv = await Vaty18Lw91.flux.call(bytefQ8g4jo, addressYJ73wSx, addressBxUtooY, uintgSHE3bc, {from: accounts[0]});
//		const bytes32WhIzlH4 = await Vaty18Lw91.frob.call(byteIv2rzI3, address2wAKOp, addressGxt88Hu, addressbGqMKqT, intRWhfHtp, intZA1DvoU, {from: accounts[1]});

		await expect(Vaty18Lw91.cage.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatcOJTVmh = await Vat.new({from: accounts[3]});
		const uintZILtyZy = BigInt("1049")
		const addresse4r0NLt = accounts[0]
		const addressQKxkksI = accounts[3]
		const intTWtacvU = BigInt("542")
		const intgbmLtSV = BigInt("114")
		const addresse9IGXpE = accounts[4]
		const addressSnp8zR3 = accounts[0]
		const addressjC3pKGS = accounts[0]
		const byteuLPQ5jC = "0x1e0b06021f0d100916080a13111f0b1302071607111b0a160f180403061c0312"
		const addresskcmOqYG = accounts[1]
		const addressslXrP7j = accounts[4]
		const intaWMrIon = BigInt("891")
		const intoBg0jg2 = BigInt("831")
		const addressS1eNnU8 = accounts[3]
		const addressEcKIVt0 = accounts[2]
		const byteunsFOoj = "0x17090d14180a1611071316071e110a0d0e131317170e0619130e1e1415201101"
		const addressbLP1CIV = await VatcOJTVmh.suck.call(addressQKxkksI, addresse4r0NLt, uintZILtyZy, {from: accounts[3]});
//		const bytes32FDWkCI = await VatcOJTVmh.grab.call(byteuLPQ5jC, addressjC3pKGS, addressSnp8zR3, addresse9IGXpE, intgbmLtSV, intTWtacvU, {from: accounts[1]});
//		const addressz8Akdd9 = await VatcOJTVmh.rely.call(addresskcmOqYG, {from: accounts[0]});
//		const addressgeNodop = await VatcOJTVmh.hope.call(addressslXrP7j, {from: "0x0000000000000000000000000000000000000001"});
//		await VatcOJTVmh.cage.call({from: accounts[3]});
//		const bytes32DnHIcEq = await VatcOJTVmh.fork.call(byteunsFOoj, addressEcKIVt0, addressS1eNnU8, intoBg0jg2, intaWMrIon, {from: accounts[1]});

		await expect(VatcOJTVmh.grab.call(byteuLPQ5jC, addressjC3pKGS, addressSnp8zR3, addresse9IGXpE, intgbmLtSV, intTWtacvU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatPc0m6IU = await Vat.new({from: accounts[3]});
		const address4hjOkU = accounts[1]
		const intjDN6fk6 = BigInt("-1678")
		const intiNv9GYO = BigInt("263")
		const addressV99lFIH = accounts[0]
		const addresscv2eCXD = accounts[1]
		const addressNkOoIYK = accounts[2]
		const byteySanRHW = "0x010401111b0405161f13061b03051312091713160c011c181b171e091e0d130a"
		const uintW7paQNc = BigInt("972")
		const byteChB7kS = "0x0f03140a09020513191b10041802151201171a1101041d00100f07021d0d0303"
		const byteATlYhib = "0x030b030f1619000316041d1508041c080f1208100608050a0b20021f0e010807"
		const uintHC8rOXV = BigInt("229")
		const addressVaiQx9v = accounts[1]
		const addressOvF8YtO = accounts[3]
		const addressmH9oWZL = await VatPc0m6IU.rely.call(address4hjOkU, {from: accounts[3]});
//		const bytes32o55ErG = await VatPc0m6IU.frob.call(byteySanRHW, addressNkOoIYK, addresscv2eCXD, addressV99lFIH, intiNv9GYO, intjDN6fk6, {from: accounts[3]});
//		const bytes32cUdNa4i = await VatPc0m6IU.file.call(byteATlYhib, byteChB7kS, uintW7paQNc, {from: accounts[0]});
//		const addressR5GiZWv = await VatPc0m6IU.move.call(addressOvF8YtO, addressVaiQx9v, uintHC8rOXV, {from: accounts[4]});

		await expect(VatPc0m6IU.frob.call(byteySanRHW, addressNkOoIYK, addresscv2eCXD, addressV99lFIH, intiNv9GYO, intjDN6fk6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfiZd2H2 = await Vat.new({from: accounts[0]});
		const uintkST8LJ = BigInt("563")
		const bytedZL6GA3 = "0x1c1f0a20031d0c19190e0d14140d1c050913090e191511030e1c01021c030900"
		const byteAXbmxGA = "0x020b1f0513060c190c0f1702180210070c1702110e0e1215201f1204150e1804"
		const address64QzOs = accounts[3]
		const addressJiG5UYq = accounts[4]
		const intbPiVQap = BigInt("-1323")
		const intRMUWiVu = BigInt("893")
		const addresswZKtJEr = accounts[0]
		const addressrdVsyYa = accounts[2]
		const addressoiS9sC0 = accounts[1]
		const byteTqVfeqK = "0x1c1a131f201306031703191c1b0d1103111701061912031e0e1b1c0b01020d17"
		const intZc2c03j = BigInt("1128")
		const intbJkRnYY = BigInt("1092")
		const addressFOVHmKZ = accounts[1]
		const addresssGKalGd = "0x0000000000000000000000000000000000000001"
		const addressJD4bnlL = accounts[3]
		const byteqL9ayDU = "0x050a051c130804161c1a09171b1c171909161b030b0b1204091b0618131f0317"
//		const bytes32anq7qDH = await VatfiZd2H2.file.call(byteAXbmxGA, bytedZL6GA3, uintkST8LJ, {from: accounts[0]});
//		await VatfiZd2H2.auth.call({from: accounts[3]});
//		const addressBSlN6Mj = await VatfiZd2H2.rely.call(address64QzOs, {from: accounts[3]});
//		const addressu9wDZQh = await VatfiZd2H2.nope.call(addressJiG5UYq, {from: accounts[1]});
//		const bytes32t7xPM8F = await VatfiZd2H2.frob.call(byteTqVfeqK, addressoiS9sC0, addressrdVsyYa, addresswZKtJEr, intRMUWiVu, intbPiVQap, {from: accounts[1]});
//		const bytes32BFJeBGZ = await VatfiZd2H2.frob.call(byteqL9ayDU, addressJD4bnlL, addresssGKalGd, addressFOVHmKZ, intbJkRnYY, intZc2c03j, {from: accounts[0]});

		await expect(VatfiZd2H2.file.call(byteAXbmxGA, bytedZL6GA3, uintkST8LJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatjMzXvau = await Vat.new({from: accounts[4]});
		const intPI3B48g = BigInt("-1507")
		const intyOJwFPB = BigInt("-156")
		const addressBnvZHRg = accounts[5]
		const addressiwKryCC = accounts[5]
		const byteaeOW1p = "0x200c13140a0a14040615050f1a1d1b171b070b150113171d1303151b0517180a"
		const intmmPobVR = BigInt("-1896")
		const addressf0DgNzn = accounts[4]
		const bytecXGs490 = "0x0b1c0d18040820160b0d1807100305080711070d0b0318030c1e06111919031a"
		const intd6TA4CD = BigInt("821")
		const intDp481e1 = BigInt("1574")
		const addressbhF5vlV = accounts[5]
		const addressRCPE1eb = accounts[5]
		const addresse0AaDL = accounts[1]
		const byteuPxwUTB = "0x010309010911200112190c01110d08060113190f100e160b1b0601021a121b15"
		const uinto38UvS8 = BigInt("704")
		const addresshUIovrt = accounts[0]
		const addresshEM02Vn = accounts[3]
		const bytes32Ba7sRA8 = await VatjMzXvau.fork.call(byteaeOW1p, addressiwKryCC, addressBnvZHRg, intyOJwFPB, intPI3B48g, {from: accounts[5]});
//		const bytes32n22UFlz = await VatjMzXvau.slip.call(bytecXGs490, addressf0DgNzn, intmmPobVR, {from: accounts[1]});
//		const bytes32Ht3i9J = await VatjMzXvau.grab.call(byteuPxwUTB, addresse0AaDL, addressRCPE1eb, addressbhF5vlV, intDp481e1, intd6TA4CD, {from: accounts[0]});
//		const addressIrBFQiM = await VatjMzXvau.suck.call(addresshEM02Vn, addresshUIovrt, uinto38UvS8, {from: accounts[3]});
//		await VatjMzXvau.auth.call({from: accounts[1]});

		await expect(VatjMzXvau.slip.call(bytecXGs490, addressf0DgNzn, intmmPobVR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfiZd2H2 = await Vat.new({from: accounts[0]});
		const uintY1JoPpv = BigInt("563")
		const byteG57qIa7 = "0x1c1f0a20031d0c19190e0d14140d1c050913090e191511030e1c06021c030900"
		const byteq2VUw0 = "0x020b1f0513060c190c0f1702180210070c17fffffffc110e0e1215201f1204150e1804"
		const uintsxiX32A = BigInt("424")
//		const bytes32anq7qDH = await VatfiZd2H2.file.call(byteq2VUw0, byteG57qIa7, uintY1JoPpv, {from: accounts[0]});
//		const uintVCTZtKm = await VatfiZd2H2.heal.call(uintsxiX32A, {from: accounts[3]});

		await expect(VatfiZd2H2.file.call(byteq2VUw0, byteG57qIa7, uintY1JoPpv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})