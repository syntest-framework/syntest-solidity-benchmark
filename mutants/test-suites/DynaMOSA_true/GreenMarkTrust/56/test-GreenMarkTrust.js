const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintuqA492 = BigInt("1386")
		const stringB9JaS2G = "rRspIaJro1UhZSa7SVcUhRw2UuHWMzIWihJVRaLD6oFeKmul8dJjkk3Pc7mKTpU9jQEOeylnpEvCnAv12XDWwgwPu5xuCrO"
		const stringIE15Pl = "gxIp19RmcgfE64vgrDdDcsM4rdCasQhbwkOAYdT"
		const GreenMarkTrustVcRAFkm = await GreenMarkTrust.new(uintuqA492, stringB9JaS2G, stringIE15Pl, {from: accounts[1]});
		const uintEXhlcfH = BigInt("1505")
		const addressiSGWqgk = accounts[1]
		const uinteS98MMO = BigInt("1723")
		const uintGL0tCy4 = BigInt("307")
		const addressUHViM2Z = accounts[2]
		const uintN6YT6ih = BigInt("46")
		const addressJcOPGyd = accounts[0]
		const uintibcSNe = BigInt("731")
		const addresszrseSvq = accounts[2]
		const addressk7OrurF = accounts[2]
		const boolgA9t2fb = await GreenMarkTrustVcRAFkm.approve.call(addressiSGWqgk, uintEXhlcfH, {from: accounts[3]});
//		const boolDLxnibh = await GreenMarkTrustVcRAFkm.burn.call(uinteS98MMO, {from: accounts[0]});
//		const boolKsgXWp8 = await GreenMarkTrustVcRAFkm.burnFrom.call(addressUHViM2Z, uintGL0tCy4, {from: accounts[0]});
//		const boolZSLtcG1 = await GreenMarkTrustVcRAFkm.approve.call(addressJcOPGyd, uintN6YT6ih, {from: accounts[2]});
//		const boolX017FCH = await GreenMarkTrustVcRAFkm.transferFrom.call(addressk7OrurF, addresszrseSvq, uintibcSNe, {from: accounts[5]});

		assert.equal(boolgA9t2fb, true)
		await expect(GreenMarkTrustVcRAFkm.burn.call(uinteS98MMO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintCA7QoGZ = BigInt("551")
		const stringC0hjnT = "bAM4sAmOnutwOCl9ZWvHkTiBX"
		const stringkvopVSp = "8"
		const GreenMarkTrustG3chbO = await GreenMarkTrust.new(uintCA7QoGZ, stringC0hjnT, stringkvopVSp, {from: accounts[3]});
		const uintjZijtLw = BigInt("1813")
		const addressI725dhV = accounts[3]
		const uintQkevtm1 = BigInt("1192")
		const addressGVv5R9g = accounts[0]
//		const boolOlhihmR = await GreenMarkTrustG3chbO.burnFrom.call(addressI725dhV, uintjZijtLw, {from: accounts[3]});
//		const boolW4oow76 = await GreenMarkTrustG3chbO.burnFrom.call(addressGVv5R9g, uintQkevtm1, {from: accounts[3]});

		await expect(GreenMarkTrustG3chbO.burnFrom.call(addressI725dhV, uintjZijtLw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintrRVoXg4 = BigInt("331")
		const stringVscIYCj = "UmWnkfJy4c7eYWK9L0boyOj7SWitELk3k7msOhs"
		const string9VsMKC = "e6nQBBlgA5e4wJtrm0r8OrrxyEgYIfXgmuALsOhAtTOdnQO5xplyaiI4IfGwJ"
		const GreenMarkTrustbkWvvWM = await GreenMarkTrust.new(uintrRVoXg4, stringVscIYCj, string9VsMKC, {from: accounts[1]});
		const bytem0wuiEi = "0x1703171302010e0a1507081116200a1616171d1405"
		const uintkqLwxN = BigInt("647")
		const addresscub1Ut = accounts[2]
		const byteZ90Bdtu = "0x1508030b19"
		const uinthxQdyEp = BigInt("1160")
		const addressGRx2i0D = accounts[4]
		const uintP4I7n2F = BigInt("841")
		const addressvWYQ4H = accounts[3]
		const uintTBk4ebp = BigInt("1462")
		const addressCjLUSkM = accounts[3]
		const addressWUmikr = accounts[2]
//		const boolH6ehRln = await GreenMarkTrustbkWvvWM.approveAndCall.call(addresscub1Ut, uintkqLwxN, bytem0wuiEi, {from: accounts[2]});
//		const boolCGtx0W7 = await GreenMarkTrustbkWvvWM.approveAndCall.call(addressGRx2i0D, uinthxQdyEp, byteZ90Bdtu, {from: accounts[1]});
//		const boolkaINdav = await GreenMarkTrustbkWvvWM.burnFrom.call(addressvWYQ4H, uintP4I7n2F, {from: accounts[1]});
//		const boolKseJV6x = await GreenMarkTrustbkWvvWM.transferFrom.call(addressWUmikr, addressCjLUSkM, uintTBk4ebp, {from: accounts[4]});

		await expect(GreenMarkTrustbkWvvWM.approveAndCall.call(addresscub1Ut, uintkqLwxN, bytem0wuiEi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintgmP6W8X = BigInt("1863")
		const stringAEyKBqN = "32brkjWunnPt7DDkvAoTe5gwuSrnXbG"
		const stringLgaXrmu = "BJYB3mhsTbSdaETiBYVppAhAUnZAxfSItD9Qa7lJYBglzgjVhGLbXGqW9wUPf3c29DX"
		const GreenMarkTrustwkgxf1 = await GreenMarkTrust.new(uintgmP6W8X, stringAEyKBqN, stringLgaXrmu, {from: accounts[2]});
		const uintCHkTfUV = BigInt("667")
		const addressBCrifH2 = accounts[0]
		const addressD0Wnj41 = accounts[0]
		const byteyuUpMhV = "0x07051111010c081a201b0c17151e120a01141e151d020f080f04"
		const uint6vbCPi = BigInt("1078")
		const addressgtzx6wL = accounts[3]
		const uintlXlSHWw = BigInt("1012")
		const addressGGkzz9a = accounts[4]
//		const boolIOzBR5n = await GreenMarkTrustwkgxf1.transferFrom.call(addressD0Wnj41, addressBCrifH2, uintCHkTfUV, {from: accounts[0]});
//		const boolHmWSJ6J = await GreenMarkTrustwkgxf1.approveAndCall.call(addressgtzx6wL, uint6vbCPi, byteyuUpMhV, {from: accounts[0]});
//		const boolRiQkvT = await GreenMarkTrustwkgxf1.burnFrom.call(addressGGkzz9a, uintlXlSHWw, {from: accounts[2]});

		await expect(GreenMarkTrustwkgxf1.transferFrom.call(addressD0Wnj41, addressBCrifH2, uintCHkTfUV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintIWG2IXS = BigInt("1723")
		const stringSciOx9I = "wT54CeyZWpIyuwhet2jYTXzgfeDAf4gAAXqZRdIBHqFI"
		const stringvkxErg9 = "oDN5iyWQ8cEn4Dg5mzWbDTzC2EcbmUlpsvw1kBWPtnIpAS6J"
		const GreenMarkTrustodNu86C = await GreenMarkTrust.new(uintIWG2IXS, stringSciOx9I, stringvkxErg9, {from: "0x0000000000000000000000000000000000000001"});
		const uintsj0chFe = BigInt("1996")
		const addressDjPuwom = accounts[1]
		const uintIgdOGVu = BigInt("1643")
		const addresszCEr1C4 = "0x0000000000000000000000000000000000000001"
		const addresswh4YjT0 = accounts[4]
		const uintGpYv20h = BigInt("268")
		const addressLDImiG = accounts[3]
		const uintUinyMiV = BigInt("1473")
		const addressvBA6Pt = accounts[5]
		const uints4J0gdP = BigInt("1922")
		const addresspEgNkG = accounts[3]
		const addressjhWhEEg = accounts[0]
		const uintjvJqXcR = BigInt("231")
		const addressY9L5Jn = accounts[5]
		const boolGFzhMu7 = await GreenMarkTrustodNu86C.transfer.call(addressDjPuwom, uintsj0chFe, {from: accounts[5]});
		const boolSU1kAgc = await GreenMarkTrustodNu86C.transferFrom.call(addresswh4YjT0, addresszCEr1C4, uintIgdOGVu, {from: "0x0000000000000000000000000000000000000001"});
		const booloD8q1Q = await GreenMarkTrustodNu86C.transfer.call(addressLDImiG, uintGpYv20h, {from: accounts[4]});
		const boolVpRCS2h = await GreenMarkTrustodNu86C.approve.call(addressvBA6Pt, uintUinyMiV, {from: "0x0000000000000000000000000000000000000001"});
		const boolj5jrAlM = await GreenMarkTrustodNu86C.transferFrom.call(addressjhWhEEg, addresspEgNkG, uints4J0gdP, {from: accounts[4]});
		const boolGPHYHAd = await GreenMarkTrustodNu86C.approve.call(addressY9L5Jn, uintjvJqXcR, {from: accounts[3]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintGBwQuZ = BigInt("1675")
		const stringLnPl8B = "a"
		const stringKcBo63D = "xvr1iaQyzTryZnd4o6FVkdeLs99brMjGhfOEtN54QIeEvoDTDtwzvbGGleyuWu5AqJDBl3Jr7wchGdiY3izipP9FWyjapN"
		const GreenMarkTrustvXr5ifb = await GreenMarkTrust.new(uintGBwQuZ, stringLnPl8B, stringKcBo63D, {from: accounts[5]});
		const uintucc4BaI = BigInt("1763")
		const address0lQ2Yi = accounts[0]
		const uintfoYCfyt = BigInt("402")
		const addresstWXx9DO = accounts[2]
		const boolbZoBfZN = await GreenMarkTrustvXr5ifb.approve.call(address0lQ2Yi, uintucc4BaI, {from: accounts[2]});
//		const booll08HkrT = await GreenMarkTrustvXr5ifb.transfer.call(addresstWXx9DO, uintfoYCfyt, {from: accounts[0]});

		assert.equal(boolbZoBfZN, true)
		await expect(GreenMarkTrustvXr5ifb.transfer.call(addresstWXx9DO, uintfoYCfyt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintmkW84c = BigInt("1863")
		const stringAEyKBqN = "32brkjWunnPt7DDkvAoTe5gwuSrnXbG"
		const stringLgaXrmu = "BJYB3mhsTbSdaETiBYVppAhAUnZAxfSItD9Qa7lJYBglzgjVhGLbXGqW9wUPf3c29DX"
		const GreenMarkTrustwkgxf1 = await GreenMarkTrust.new(uintmkW84c, stringAEyKBqN, stringLgaXrmu, {from: accounts[2]});
		const uintiy5T5Q = BigInt("1045")
		const byteNNpahY8 = "0x031004011a10101a0806000a0e0f"
		const uintnkLGBxS = BigInt("1203")
		const addressCdkBlhb = accounts[4]
		const uintUrwfHZS = BigInt("667")
		const addressGoKYBpk = accounts[0]
		const addressY251aua = accounts[0]
		const byteUeOhGI = "0x07051111010c081a201b0c17151e120a01141e151d020f080f04"
		const uintunHNcZc = BigInt("1078")
		const addressHdwyM3 = accounts[3]
		const uinta7NdTQC = BigInt("1012")
		const addressBqkLHlA = accounts[5]
		const boolrlUwAKN = await GreenMarkTrustwkgxf1.burn.call(uintiy5T5Q, {from: accounts[2]});
//		const boolqJBN6xQ = await GreenMarkTrustwkgxf1.approveAndCall.call(addressCdkBlhb, uintnkLGBxS, byteNNpahY8, {from: accounts[0]});
//		const boolIOzBR5n = await GreenMarkTrustwkgxf1.transferFrom.call(addressY251aua, addressGoKYBpk, uintUrwfHZS, {from: accounts[0]});
//		const boolHmWSJ6J = await GreenMarkTrustwkgxf1.approveAndCall.call(addressHdwyM3, uintunHNcZc, byteUeOhGI, {from: accounts[0]});
//		const boolRiQkvT = await GreenMarkTrustwkgxf1.burnFrom.call(addressBqkLHlA, uinta7NdTQC, {from: accounts[2]});

		assert.equal(boolrlUwAKN, true)
		await expect(GreenMarkTrustwkgxf1.approveAndCall.call(addressCdkBlhb, uintnkLGBxS, byteNNpahY8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintghUqQtq = BigInt("1863")
		const stringAEyKBqN = "32brkjWunnPt7DDkvAoTe5gwuSrnXbG"
		const stringLgaXrmu = "BJYB3mhsTbSdaETiBYVppAhAUnZAxfSItD9Qa7lJYBglzgjVhGLbXGqW9wUPf3c29DX"
		const GreenMarkTrustwkgxf1 = await GreenMarkTrust.new(uintghUqQtq, stringAEyKBqN, stringLgaXrmu, {from: accounts[2]});
		const uintvUwk4J0 = BigInt("503")
		const addressRGkqfne = accounts[5]
		const byteZxOOBWh = "0x07051111010c081a201b0c17151e120a01141e151d020f080f04"
		const uintHXqO2zk = BigInt("1078")
		const addressuKe5cwi = accounts[3]
		const uintHhC5gCh = BigInt("1717")
		const boolAq1LAae = await GreenMarkTrustwkgxf1.transfer.call(addressRGkqfne, uintvUwk4J0, {from: accounts[2]});
//		const boolHmWSJ6J = await GreenMarkTrustwkgxf1.approveAndCall.call(addressuKe5cwi, uintHXqO2zk, byteZxOOBWh, {from: accounts[0]});
//		const boolbltfFc9 = await GreenMarkTrustwkgxf1.burn.call(uintHhC5gCh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAq1LAae, true)
		await expect(GreenMarkTrustwkgxf1.approveAndCall.call(addressuKe5cwi, uintHXqO2zk, byteZxOOBWh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})