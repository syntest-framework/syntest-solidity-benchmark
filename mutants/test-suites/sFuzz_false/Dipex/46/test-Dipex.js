const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringIxzoX17 = "OIyEbQFqgi891A3g2nt9CfywMtHvOXufVsrTJdUaO756O6wMo9OPV6mKUQUHCmDQ6KOu94jZmDN5KfkW0v"
		const stringLSaQteC = "5Pi2Oht9BDn2wTPm36hVUrjvgDfQcq9glaPzw3MflxI3lYEVGEn1Tmdhe6tFWYtcHdD2TvsIB8qeFSU1pbWnIJNyT2zWzi"
		const uintKZXTkEZ = BigInt("1763")
		const DipexbsFSzxd = await Dipex.new(stringIxzoX17, stringLSaQteC, uintKZXTkEZ, {from: accounts[2]});
		const uints337nLp = BigInt("750")
		const address6Xb0Zh = accounts[0]
		const uintNk17oej = BigInt("303")
		const addressPbvTJn = accounts[5]
		const uinttlroUdP = BigInt("474")
		const addressXVb2p1f = accounts[2]
		const addressQe2jHzW = accounts[4]
		const uintAOfH5E8 = BigInt("1165")
		const addressBI6g08u = accounts[4]
		const boolCkbqyA3 = await DipexbsFSzxd.approve.call(address6Xb0Zh, uints337nLp, {from: accounts[1]});
		const boolPSFpxzk = await DipexbsFSzxd.approve.call(addressPbvTJn, uintNk17oej, {from: accounts[3]});
//		const boolI5lsAl = await DipexbsFSzxd.transferFrom.call(addressQe2jHzW, addressXVb2p1f, uinttlroUdP, {from: accounts[0]});
//		const boolWrjsnDN = await DipexbsFSzxd.transfer.call(addressBI6g08u, uintAOfH5E8, {from: accounts[3]});

		assert.equal(boolCkbqyA3, true)
		assert.equal(boolPSFpxzk, true)
		await expect(DipexbsFSzxd.transferFrom.call(addressQe2jHzW, addressXVb2p1f, uinttlroUdP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringnaF9TCn = "eZGG5Solyhbg1tVRA3GK7f1QJAvmU19ETRp2GdeBoGdvbxtrrfCPypthjyLJ58fhx"
		const stringo83uLll = "m3cizekugcZkMczJMc3hmNob1qjAbM6drSh9N"
		const uintdRBD3Uu = BigInt("606")
		const DipexN5IZaq = await Dipex.new(stringnaF9TCn, stringo83uLll, uintdRBD3Uu, {from: accounts[3]});
		const uintBAEoiZ = BigInt("2017")
		const address3sRsQL = accounts[0]
		const uintnU7HZqM = BigInt("1122")
		const addressLs5EA3q = accounts[2]
		const uintz3QJUQ9 = BigInt("1329")
		const addressxvCnkn9 = accounts[4]
//		const booln4srCFx = await DipexN5IZaq.transfer.call(address3sRsQL, uintBAEoiZ, {from: accounts[4]});
//		const boolJMISjl8 = await DipexN5IZaq.approve.call(addressLs5EA3q, uintnU7HZqM, {from: accounts[2]});
//		const boolt7nghif = await DipexN5IZaq.approveAndCall.call(addressxvCnkn9, uintz3QJUQ9, {from: accounts[0]});

		await expect(DipexN5IZaq.transfer.call(address3sRsQL, uintBAEoiZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringnt7LD8Q = "c4i2gnd83yxJzsNUnNVqUCsq6nOWhaiTqXoDmUWCMugL5MFLVtrkue"
		const stringuarwCLb = "tfz2JE8h0q4xsRuQcll2Vw4"
		const uintBpgXuWT = BigInt("798")
		const DipexM0FASxb = await Dipex.new(stringnt7LD8Q, stringuarwCLb, uintBpgXuWT, {from: accounts[0]});
		const uintMvC4kr8 = BigInt("904")
		const addresswKlIfse = accounts[1]
		const uintioYke4S = BigInt("441")
		const addressyKbtJme = accounts[3]
		const addressGBqUfIz = accounts[2]
		const uintQvDUL2V = BigInt("764")
		const addressOBCcyoY = accounts[2]
		const uintCxT7bK5 = BigInt("1101")
		const addressFMTBaLS = accounts[4]
		const addressbnk8yXn = accounts[3]
		const addressRiHaPq9 = accounts[0]
//		const boolh18qT2 = await DipexM0FASxb.approveAndCall.call(addresswKlIfse, uintMvC4kr8, {from: accounts[4]});
//		const boolo1hQ4nz = await DipexM0FASxb.transferFrom.call(addressGBqUfIz, addressyKbtJme, uintioYke4S, {from: accounts[1]});
//		const bool8K6Phu = await DipexM0FASxb.approveAndCall.call(addressOBCcyoY, uintQvDUL2V, {from: accounts[0]});
//		const boolbY6GyJ = await DipexM0FASxb.approve.call(addressFMTBaLS, uintCxT7bK5, {from: accounts[4]});
//		const booly8r7hy = await DipexM0FASxb.transferownership.call(addressbnk8yXn, {from: accounts[4]});
//		const booljwv1Cf4 = await DipexM0FASxb.transferownership.call(addressRiHaPq9, {from: accounts[3]});

		await expect(DipexM0FASxb.approveAndCall.call(addresswKlIfse, uintMvC4kr8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringF9qFGFM = "SSZlpNPKdiE2aYdxjrglJfx2Fyf2wAjrca1OAvqpDYfx9QuA1VwgaNVp"
		const stringGhizTOJ = "xk32f6WqiVULUGl77mG4qaDKsHVTbfpU7P2N2Uvk595F8Ed0OcTS8utDcngQGpT8SHspJy"
		const uintUQ00812 = BigInt("75")
		const DipexUGByAun = await Dipex.new(stringF9qFGFM, stringGhizTOJ, uintUQ00812, {from: accounts[3]});
		const uinttxP3O4o = BigInt("1975")
		const addressft4oloO = accounts[0]
		const uintKYwECwR = BigInt("1245")
		const addressAygEpiP = "0x0000000000000000000000000000000000000001"
		const uintbR0454U = BigInt("715")
		const addressYsNAZmp = accounts[1]
		const boolw7ynTEn = await DipexUGByAun.approveAndCall.call(addressft4oloO, uinttxP3O4o, {from: accounts[3]});
//		const booltocdzVZ = await DipexUGByAun.transfer.call(addressAygEpiP, uintKYwECwR, {from: accounts[4]});
//		const boolm7EHSEG = await DipexUGByAun.approveAndCall.call(addressYsNAZmp, uintbR0454U, {from: accounts[4]});

		assert.equal(boolw7ynTEn, true)
		await expect(DipexUGByAun.transfer.call(addressAygEpiP, uintKYwECwR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringIyf7778 = "u5qIpLP8JrRV9SGYWx9LGXabfELRQQDF6hwBg3913rUZeACqat2jdo9INiDui0HWQjVxAJQJ0s"
		const stringrn7VdkP = "AWqcaiB3NWeCKD"
		const uintXwcWVsN = BigInt("905")
		const DipexVDRrLL = await Dipex.new(stringIyf7778, stringrn7VdkP, uintXwcWVsN, {from: accounts[3]});
		const addressO9P27Nr = accounts[0]
		const uintVROtbnK = BigInt("186")
		const addressuOlFDyJ = accounts[5]
		const uintBG6NRyg = BigInt("398")
		const address9bW2Uw = accounts[5]
		const addressBmEP3SQ = accounts[1]
//		const boolbB1vSVC = await DipexVDRrLL.transferownership.call(addressO9P27Nr, {from: accounts[0]});
//		const boolcY7jPKC = await DipexVDRrLL.approve.call(addressuOlFDyJ, uintVROtbnK, {from: accounts[4]});
//		const boolnvFHYmX = await DipexVDRrLL.approveAndCall.call(address9bW2Uw, uintBG6NRyg, {from: accounts[4]});
//		const booluCvLurN = await DipexVDRrLL.transferownership.call(addressBmEP3SQ, {from: accounts[4]});

		await expect(DipexVDRrLL.transferownership.call(addressO9P27Nr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringnqvS0bW = "jdrwmOIBLFp29YfOdKPoyqQt4XWhKUgGlbOVDSDC46LUhQXKCeCLqk1"
		const stringc2C4dEZ = "g9Xw6ph1Xj1XLgRE5PVQRfi9oPmUnJMLu"
		const uintuywCBYw = BigInt("478")
		const DipexzC4gTya = await Dipex.new(stringnqvS0bW, stringc2C4dEZ, uintuywCBYw, {from: accounts[2]});
		const uintQnYWbIJ = BigInt("1571")
		const addressnceEK7 = accounts[5]
		const uintc89SJcq = BigInt("1183")
		const addressYTBAhdH = accounts[4]
		const uintQKEfztL = BigInt("1619")
		const addressIHXwcrL = accounts[1]
		const addressH23Hn3M = accounts[1]
		const uintvdte31 = BigInt("1584")
		const address3agHQ0 = "0x0000000000000000000000000000000000000001"
		const uintZ0wWTMt = BigInt("1221")
		const addressdUa0dRx = accounts[0]
		const boolgZI63RC = await DipexzC4gTya.approve.call(addressnceEK7, uintQnYWbIJ, {from: accounts[3]});
		const booltADSEvt = await DipexzC4gTya.transfer.call(addressYTBAhdH, uintc89SJcq, {from: accounts[2]});
//		const boolDCOUKxw = await DipexzC4gTya.transferFrom.call(addressH23Hn3M, addressIHXwcrL, uintQKEfztL, {from: accounts[4]});
//		const boolmMG8E9r = await DipexzC4gTya.approveAndCall.call(address3agHQ0, uintvdte31, {from: accounts[1]});
//		const boolzKrRRBl = await DipexzC4gTya.approveAndCall.call(addressdUa0dRx, uintZ0wWTMt, {from: accounts[2]});

		assert.equal(boolgZI63RC, true)
		assert.equal(booltADSEvt, true)
		await expect(DipexzC4gTya.transferFrom.call(addressH23Hn3M, addressIHXwcrL, uintQKEfztL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringF9qFGFM = "SSZlpNPKdiE2aYdxjrglJfx2Fyf2wAjrca1OAvqpDYfx9QuA1VwgaNVp"
		const stringGhizTOJ = "xk32f6WqiVULUGl77mG4qaDKsHVTbfpU7P2N2Uvk595F8Ed0OcTS8utDcngQGpT8SHspJy"
		const uintnQVelAD = BigInt("75")
		const DipexUGByAun = await Dipex.new(stringF9qFGFM, stringGhizTOJ, uintnQVelAD, {from: accounts[3]});
		const uintzuv9agJ = BigInt("1245")
		const addressORIKqcI = "0x00000000000000000000000000000000000000-1"
		const uintyX1Jku5 = BigInt("591")
		const addressiY83aSx = accounts[4]
		const addressqTZRnTi = accounts[0]
		const uintoAYYBea = BigInt("981")
		const addresskemjY6H = "0x0000000000000000000000000000000000000001"
		const addressbP8SB7A = accounts[5]
//		const booltocdzVZ = await DipexUGByAun.transfer.call(addressORIKqcI, uintzuv9agJ, {from: accounts[4]});
//		const boolWYj0q5 = await DipexUGByAun.transferFrom.call(addressqTZRnTi, addressiY83aSx, uintyX1Jku5, {from: accounts[2]});
//		const boolZUsDRIY = await DipexUGByAun.transferFrom.call(addressbP8SB7A, addresskemjY6H, uintoAYYBea, {from: accounts[4]});

		await expect(DipexUGByAun.transfer.call(addressORIKqcI, uintzuv9agJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXNd765o = "ZrChmMn2V5gErgzs6vpZnOM2p4lVUpssyXySJJTtpoxbLVT1nQvn26h13HQ3iJ4OLdzqit0IsCNFtvvsqqzlWzLVulql"
		const stringmyvtPVH = "jIDP14xqR11QhR7cNNB29CYKGrzcBk8aHiFTMUwmut3389l9W6QHJEFANBlmOhGK6b1hJLW"
		const uintUslZb3C = BigInt("154")
		const DipexzfFhmD = await Dipex.new(stringXNd765o, stringmyvtPVH, uintUslZb3C, {from: "0x0000000000000000000000000000000000000001"});
		const uintcdd3CyM = BigInt("271")
		const addressMaJfm1N = accounts[3]
		const addressgUdtmgF = accounts[5]
		const uintlCrGfTg = BigInt("1263")
		const addressRcf2wv = "0x0000000000000000000000000000000000000001"
		const uintaMfZmnh = BigInt("1970")
		const addressWd41kZM = "0x0000000000000000000000000000000000000001"
		const boolefm9gY4 = await DipexzfFhmD.approveAndCall.call(addressMaJfm1N, uintcdd3CyM, {from: accounts[5]});
		const boolWJH8pCe = await DipexzfFhmD.transferownership.call(addressgUdtmgF, {from: accounts[2]});
		const boolabmu518 = await DipexzfFhmD.approveAndCall.call(addressRcf2wv, uintlCrGfTg, {from: accounts[0]});
		const boolq9BDsLv = await DipexzfFhmD.approve.call(addressWd41kZM, uintaMfZmnh, {from: accounts[0]});
	});

	it('test for Dipex', async () => {
		const stringF9qFGFM = "SSZlpNPKdiE2aYdxjrglJfx2Fyf2wAjrca1OAvqpDYfx9QuA1VwgaNVp"
		const stringGhizTOJ = "xk32f6WqiVULUGl77mG4qaDKsHVTbfpU7P2N2Uvk595F8Ed0OcTS8utDcngQGpT8SHspJy"
		const uintXmQi4oU = BigInt("75")
		const DipexUGByAun = await Dipex.new(stringF9qFGFM, stringGhizTOJ, uintXmQi4oU, {from: accounts[3]});
		const uinto7gEXN3 = BigInt("0")
		const addressgg667jv = accounts[2]
		const addressls5CTaW = accounts[0]
		const uintXyRrsEA = BigInt("1667")
		const addressT5xyEB = accounts[4]
		const uintBPeOoDo = BigInt("616")
		const addressGr1xzDP = accounts[2]
		const boolqO3zicb = await DipexUGByAun.transferFrom.call(addressls5CTaW, addressgg667jv, uinto7gEXN3, {from: accounts[2]});
		const boolI3M57xE = await DipexUGByAun.approve.call(addressT5xyEB, uintXyRrsEA, {from: accounts[3]});
//		const booldMHrDBw = await DipexUGByAun.approveAndCall.call(addressGr1xzDP, uintBPeOoDo, {from: accounts[2]});

		assert.equal(boolI3M57xE, true)
		assert.equal(boolqO3zicb, true)
		await expect(DipexUGByAun.approveAndCall.call(addressGr1xzDP, uintBPeOoDo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringF9qFGFM = "SSZlpNPKdiE2aYdxjrglJfx2Fyf2wAjrca1OAvqpDYfx9QuA1VwgaNVp"
		const stringGhizTOJ = "xk32f6WqiVULUGl77mG4qaDKsHVTbfpU7P2N2Uvk595F8Ed0OcTS8utDcngQGpT8SHspJy"
		const uintx3BPj8U = BigInt("75")
		const DipexUGByAun = await Dipex.new(stringF9qFGFM, stringGhizTOJ, uintx3BPj8U, {from: accounts[3]});
		const uintWgUBjSd = BigInt("0")
		const addressfrwtz9n = accounts[4]
		const uintkIfJFem = BigInt("634")
		const addressjzpoX5j = accounts[1]
		const uintALSD9Zf = BigInt("1245")
		const addressBLNVZfA = "0x00000000000000000000000000000000000000-1"
		const boolDDyrOB1 = await DipexUGByAun.approveAndCall.call(addressfrwtz9n, uintWgUBjSd, {from: accounts[3]});
		const boolJQA4jIE = await DipexUGByAun.approve.call(addressjzpoX5j, uintkIfJFem, {from: accounts[3]});
//		const booltocdzVZ = await DipexUGByAun.transfer.call(addressBLNVZfA, uintALSD9Zf, {from: accounts[4]});

		assert.equal(boolDDyrOB1, true)
		assert.equal(boolJQA4jIE, true)
		await expect(DipexUGByAun.transfer.call(addressBLNVZfA, uintALSD9Zf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})