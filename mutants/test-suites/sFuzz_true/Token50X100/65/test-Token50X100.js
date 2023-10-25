const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100c1S5tfz = await Token50X100.new({from: accounts[0]});
		const uintJ7kappv = BigInt("701")
		const uintv9hKzr = BigInt("538")
		const addressWyXxQ1F = accounts[0]
		const addressExaXbZQ = accounts[3]
		const boolnsvWe6g = true
		const addressOpFHrw6 = accounts[2]
		const boolIetjgQz = false
		const addressQHf0mu = accounts[1]
		const uintJMiOrCP = BigInt("1623")
		const addressolKeybv = accounts[5]
		const addresss7n7Fgu = accounts[2]
//		await Token50X100c1S5tfz.lock.call({from: accounts[4]});
//		const boolXFcnk5L = await Token50X100c1S5tfz._transfer.call(addressExaXbZQ, addressWyXxQ1F, uintv9hKzr, uintJ7kappv, {from: accounts[0]});
//		await Token50X100c1S5tfz.setWhiteListReceivers.call(addressOpFHrw6, boolnsvWe6g, {from: accounts[1]});
//		await Token50X100c1S5tfz.setWhiteListReceivers.call(addressQHf0mu, boolIetjgQz, {from: "0x0000000000000000000000000000000000000001"});
//		const booljmaRUQX = await Token50X100c1S5tfz.transferFrom.call(addresss7n7Fgu, addressolKeybv, uintJMiOrCP, {from: accounts[5]});

		await expect(Token50X100c1S5tfz.lock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100WEZk0B = await Token50X100.new({from: accounts[0]});
		const uintqHxgQUb = BigInt("1434")
		const uintWd01gT0 = BigInt("1708")
		const uinteIAQ86 = BigInt("17")
		const stringcdbVQKb = "JHeRG4P"
		const stringk11YVag = "PWgI41bt7ufrXFQaiMfYCQRm"
		const uintsLsU5d = BigInt("20")
		const addressAzjMGXu = accounts[4]
		const addressvJNxLsZ = "0x0000000000000000000000000000000000000001"
		const uintdYb8YKJ = BigInt("1716")
		const addressjXq2R8 = accounts[1]
		const addresspCuzkts = accounts[0]
		const uintSOtm7OR = BigInt("2024")
		const addressE6zs7BM = accounts[4]
//		const boolGbhV8vZ = await Token50X100WEZk0B.safeLock.call(uintWd01gT0, uintqHxgQUb, {from: accounts[0]});
//		const boolaotqp00 = await Token50X100WEZk0B.setSymbolNameDecimals.call(stringk11YVag, stringcdbVQKb, uinteIAQ86, {from: accounts[5]});
//		const boolrlP4qRE = await Token50X100WEZk0B.issueTokens.call(addressvJNxLsZ, addressAzjMGXu, uintsLsU5d, {from: accounts[5]});
//		const boolS2mAVeF = await Token50X100WEZk0B.transferFrom.call(addresspCuzkts, addressjXq2R8, uintdYb8YKJ, {from: accounts[4]});
//		const boolHf687wX = await Token50X100WEZk0B.transfer.call(addressE6zs7BM, uintSOtm7OR, {from: accounts[3]});

		await expect(Token50X100WEZk0B.safeLock.call(uintWd01gT0, uintqHxgQUb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100A8TbaQm = await Token50X100.new({from: accounts[0]});
		const uint0F7Acg = BigInt("1442")
		const addressH7s0bIZ = accounts[3]
		const addressbbwJJ6b = accounts[0]
		const addressL8UBHtk = accounts[2]
		const uintDl0BQ69 = BigInt("2024")
		const uint5PHTe6 = BigInt("1230")
		const boolQwNTewg = await Token50X100A8TbaQm.decreaseApproval.call(addressH7s0bIZ, uint0F7Acg, {from: accounts[5]});
//		await Token50X100A8TbaQm.setLinkingAddresses.call(addressL8UBHtk, addressbbwJJ6b, {from: accounts[0]});
//		const boolLgRzg4g = await Token50X100A8TbaQm.safeLock.call(uint5PHTe6, uintDl0BQ69, {from: accounts[2]});
//		await Token50X100A8TbaQm.lock.call({from: accounts[1]});

		assert.equal(boolQwNTewg, true)
		await expect(Token50X100A8TbaQm.setLinkingAddresses.call(addressL8UBHtk, addressbbwJJ6b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100QMM095 = await Token50X100.new({from: accounts[2]});
		const addressFix25ou = accounts[1]
		const addressFOY8Xnu = accounts[2]
		const addressscBmCXY = accounts[3]
		const uinteZtiQn8 = BigInt("141")
		const stringXC0xeg = "CI4mtSLls8MRBWHmLne3g93plKJg9hQ3rukVsWb95HjJ3y3bk0QisU2JCZHM113ksHMdS53ltySCgiljPq5Omd"
		const stringSSPLAbm = "57wmRFOXdD6qjCPvEHqUtDB8qQ0QEJCdAst7jGFQkTdUf1jLNyVn21NHd5Fm9iTg0d3nHKd5XxUYf8rHH"
		const uint2564cUOms = await Token50X100QMM095.balanceOf.call(addressFix25ou, {from: accounts[3]});
//		await Token50X100QMM095.setLinkingAddresses.call(addressscBmCXY, addressFOY8Xnu, {from: accounts[1]});
//		await Token50X100QMM095.setSymbolNameDecimals.call(stringSSPLAbm, stringXC0xeg, uinteZtiQn8, {from: accounts[1]});

		assert.equal(uint2564cUOms, BigInt("0"))
		await expect(Token50X100QMM095.setLinkingAddresses.call(addressscBmCXY, addressFOY8Xnu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100A8TbaQm = await Token50X100.new({from: accounts[0]});
		const uintBue26oo = BigInt("436")
		const addressCudojNa = accounts[0]
		const uintsWQccCP = BigInt("5")
		const addressmLRQiAR = accounts[5]
		const addressOvFn23 = accounts[3]
		const uintFyqU2ju = BigInt("1442")
		const addressqV78eG4 = accounts[3]
		const addressxazJP5 = accounts[0]
		const addressFMzgr6 = accounts[2]
		const uintYVNNVp1 = BigInt("2024")
		const uint3IhtsE = BigInt("1230")
		const uintvLfGLVJ = BigInt("231")
		const addressWBNrSiz = accounts[4]
		const addressy2dJhsg = accounts[5]
//		const boolyN2lkJs = await Token50X100A8TbaQm.transfer.call(addressCudojNa, uintBue26oo, {from: accounts[1]});
//		const booltEBAgqo = await Token50X100A8TbaQm.transferFrom.call(addressOvFn23, addressmLRQiAR, uintsWQccCP, {from: accounts[2]});
//		const boolQwNTewg = await Token50X100A8TbaQm.decreaseApproval.call(addressqV78eG4, uintFyqU2ju, {from: accounts[5]});
//		await Token50X100A8TbaQm.setLinkingAddresses.call(addressFMzgr6, addressxazJP5, {from: accounts[0]});
//		const boolLgRzg4g = await Token50X100A8TbaQm.safeLock.call(uint3IhtsE, uintYVNNVp1, {from: accounts[2]});
//		const boolHTxvaB6 = await Token50X100A8TbaQm.transferFrom.call(addressy2dJhsg, addressWBNrSiz, uintvLfGLVJ, {from: accounts[2]});
//		await Token50X100A8TbaQm.lock.call({from: accounts[1]});

		await expect(Token50X100A8TbaQm.transfer.call(addressCudojNa, uintBue26oo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ICSJtqr = await Token50X100.new({from: accounts[3]});
		const uintxYQvVm = BigInt("193")
		const uintE1aBoD5 = BigInt("15")
		const uintKYUrrse = BigInt("1670")
		const addressPeEEOe = accounts[3]
		const uintYlx0eMd = BigInt("1765")
		const addressj61Ve5u = accounts[2]
		const addresssYxUDN = accounts[1]
		const boolLR4KXkz = await Token50X100ICSJtqr.setMaxLockPeriod.call(uintxYQvVm, {from: accounts[0]});
//		const boolpgpuqXD = await Token50X100ICSJtqr.safeLock.call(uintKYUrrse, uintE1aBoD5, {from: "0x0000000000000000000000000000000000000001"});
//		const addressrTSLZOc = await Token50X100ICSJtqr.transferOwnership.call(addressPeEEOe, {from: "0x0000000000000000000000000000000000000001"});
//		const booltPtw196 = await Token50X100ICSJtqr.transferFrom.call(addresssYxUDN, addressj61Ve5u, uintYlx0eMd, {from: accounts[4]});

		assert.equal(boolLR4KXkz, false)
		await expect(Token50X100ICSJtqr.safeLock.call(uintKYUrrse, uintE1aBoD5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100A8TbaQm = await Token50X100.new({from: accounts[0]});
		const uintkW5AHii = BigInt("216")
		const addressYV7TOPg = accounts[4]
		const uintosMbj1 = BigInt("1442")
		const addresscKvlWqJ = accounts[3]
		const uint0jKybJ = BigInt("747")
		const uintMWznb2r = BigInt("1546")
		const uintvvV42CM = BigInt("1150")
		const boolZdBYmio = await Token50X100A8TbaQm.increaseApproval.call(addressYV7TOPg, uintkW5AHii, {from: accounts[2]});
		const boolQwNTewg = await Token50X100A8TbaQm.decreaseApproval.call(addresscKvlWqJ, uintosMbj1, {from: accounts[5]});
		const boolWtF9QYy = await Token50X100A8TbaQm.setMaxLockPeriod.call(uint0jKybJ, {from: accounts[1]});
//		const booljmXgNuI = await Token50X100A8TbaQm.safeLock.call(uintvvV42CM, uintMWznb2r, {from: accounts[3]});

		assert.equal(boolQwNTewg, true)
		assert.equal(boolWtF9QYy, false)
		assert.equal(boolZdBYmio, true)
		await expect(Token50X100A8TbaQm.safeLock.call(uintvvV42CM, uintMWznb2r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100A8TbaQm = await Token50X100.new({from: accounts[0]});
		const uinttLkHhWQ = BigInt("1442")
		const addressxupYVUL = accounts[3]
		const addressLWB4cDA = accounts[4]
		const uintXOePkat = BigInt("2024")
		const uintFC4s5Le = BigInt("1230")
		const boolQwNTewg = await Token50X100A8TbaQm.decreaseApproval.call(addressxupYVUL, uinttLkHhWQ, {from: accounts[5]});
//		const addressqo7DYV = await Token50X100A8TbaQm.setOriginalContract.call(addressLWB4cDA, {from: accounts[5]});
//		const boolLgRzg4g = await Token50X100A8TbaQm.safeLock.call(uintFC4s5Le, uintXOePkat, {from: accounts[2]});
//		const uint256Ss1e4di = await Token50X100A8TbaQm.totalSupply.call({from: accounts[4]});
//		await Token50X100A8TbaQm.lock.call({from: accounts[1]});

		assert.equal(boolQwNTewg, true)
		await expect(Token50X100A8TbaQm.setOriginalContract.call(addressLWB4cDA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100uRiStgV = await Token50X100.new({from: accounts[5]});
		const uintlHIwwy5 = BigInt("1369")
		const uintZNvzJw6 = BigInt("987")
		const addressyKlF7tv = accounts[1]
		const addressxQs2yeN = accounts[5]
		const uinth5wA2Rk = BigInt("1868")
		const addresslWbSEQ6 = "0x0000000000000000000000000000000000000001"
		const addressIAihtFw = accounts[3]
		const uintPiJJ7WY = BigInt("6")
		const stringvaqq8zE = "RwcKcEYRovzuxi5spircsBIODTej2lSZ10JbbP7hlajjHbtnwiJsfuf53gDjgbUe"
		const stringHk07i7f = "9iYq00qaUtWu7tdJELgjGjKP3EMU"
		const addressOfsxBQP = accounts[5]
		const addressl6VXwyE = accounts[4]
		const uintZjF6VBb = BigInt("1674")
		const addressWWHPhdr = accounts[2]
		const addressVPNf0yZ = accounts[5]
		const uintSzownXt = BigInt("1994")
		const uintbqLuaa = BigInt("125")
		const addressFItsJ0O = accounts[1]
		const addressLEU5u4f = "0x0000000000000000000000000000000000000001"
//		const booluRduvbi = await Token50X100uRiStgV._transfer.call(addressxQs2yeN, addressyKlF7tv, uintZNvzJw6, uintlHIwwy5, {from: accounts[5]});
//		const boolSew3d1 = await Token50X100uRiStgV.issueTokens.call(addressIAihtFw, addresslWbSEQ6, uinth5wA2Rk, {from: accounts[0]});
//		const boolEx0Wi85 = await Token50X100uRiStgV.setSymbolNameDecimals.call(stringHk07i7f, stringvaqq8zE, uintPiJJ7WY, {from: accounts[3]});
//		const uint256FdDeB2 = await Token50X100uRiStgV.allowance.call(addressl6VXwyE, addressOfsxBQP, {from: accounts[3]});
//		const boolbM9G4aB = await Token50X100uRiStgV.transferFrom.call(addressVPNf0yZ, addressWWHPhdr, uintZjF6VBb, {from: accounts[0]});
//		const boolLdlIbhg = await Token50X100uRiStgV._transfer.call(addressLEU5u4f, addressFItsJ0O, uintbqLuaa, uintSzownXt, {from: accounts[0]});

		await expect(Token50X100uRiStgV._transfer.call(addressxQs2yeN, addressyKlF7tv, uintZNvzJw6, uintlHIwwy5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100A8TbaQm = await Token50X100.new({from: accounts[0]});
//		await Token50X100A8TbaQm.release.call({from: accounts[0]});
//		await Token50X100A8TbaQm.lock.call({from: accounts[1]});

		await expect(Token50X100A8TbaQm.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100OrJfrCO = await Token50X100.new({from: accounts[0]});
		const addressTz72LfF = "0x0000000000000000000000000000000000000001"
		const addressndlajN = accounts[2]
		const uintiB0QnDU = BigInt("1305")
		const addressaNjvfi0 = accounts[3]
		const uintm3rxeJs = BigInt("1438")
		const addressKhIeBbz = accounts[5]
		const uinthn1Lt7 = BigInt("1664")
		const uint256bbJmksi = await Token50X100OrJfrCO.allowance.call(addressndlajN, addressTz72LfF, {from: accounts[3]});
		const boolS87pyaQ = await Token50X100OrJfrCO.increaseApproval.call(addressaNjvfi0, uintiB0QnDU, {from: accounts[5]});
		const boolwAfuep = await Token50X100OrJfrCO.decreaseApproval.call(addressKhIeBbz, uintm3rxeJs, {from: "0x0000000000000000000000000000000000000001"});
		const boolvLdG5im = await Token50X100OrJfrCO.setMaxLockPeriod.call(uinthn1Lt7, {from: accounts[5]});

		assert.equal(boolS87pyaQ, true)
		assert.equal(boolvLdG5im, false)
		assert.equal(boolwAfuep, true)
		assert.equal(uint256bbJmksi, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100OrJfrCO = await Token50X100.new({from: accounts[0]});
		const addressAf41Qa = "0x0000000000000000000000000000000000000001"
		const addressYJCZEMj = accounts[2]
		const uintEsMklq3 = BigInt("1305")
		const addressljJls1v = accounts[3]
		const uintyrgSmn5 = BigInt("420")
		const addressIvcm7Vj = accounts[2]
		const uintCcfIVK = BigInt("1438")
		const addresspjV8LvR = accounts[5]
		const uintmDSLZcw = BigInt("1664")
		const uint2gPTIX = BigInt("849")
		const addressH626gRS = accounts[0]
		const addressNDXwOl = accounts[0]
		const uint256bbJmksi = await Token50X100OrJfrCO.allowance.call(addressYJCZEMj, addressAf41Qa, {from: accounts[3]});
		const boolS87pyaQ = await Token50X100OrJfrCO.increaseApproval.call(addressljJls1v, uintEsMklq3, {from: accounts[5]});
		const boolQuwO5Qa = await Token50X100OrJfrCO.increaseApproval.call(addressIvcm7Vj, uintyrgSmn5, {from: accounts[5]});
		const boolwAfuep = await Token50X100OrJfrCO.decreaseApproval.call(addresspjV8LvR, uintCcfIVK, {from: "0x0000000000000000000000000000000000000001"});
		const boolvLdG5im = await Token50X100OrJfrCO.setMaxLockPeriod.call(uintmDSLZcw, {from: accounts[5]});
//		const boolTxjfi6V = await Token50X100OrJfrCO.transferFrom.call(addressNDXwOl, addressH626gRS, uint2gPTIX, {from: accounts[1]});

		assert.equal(boolQuwO5Qa, true)
		assert.equal(boolS87pyaQ, true)
		assert.equal(boolvLdG5im, false)
		assert.equal(boolwAfuep, true)
		assert.equal(uint256bbJmksi, BigInt("0"))
		await expect(Token50X100OrJfrCO.transferFrom.call(addressNDXwOl, addressH626gRS, uint2gPTIX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eA93XEn = await Token50X100.new({from: accounts[0]});
		const uintmTMgxpr = BigInt("63")
		const stringn5yqPAD = "BWtFscPeyS1UmfhGrtl7Ti"
		const stringrVDjeo = "GI1W45ckjB1ek8bUherOMY0fU2w1s4jx21K5qc8kSgHfEp8a56fr7abhA"
		const uintyUucAt = BigInt("817")
		const addresscMFuO0B = accounts[3]
		const uintzxPg7i = BigInt("680")
		const boolohzV1xm = false
		const addressB5UlaXd = accounts[1]
//		await Token50X100eA93XEn.setSymbolNameDecimals.call(stringrVDjeo, stringn5yqPAD, uintmTMgxpr, {from: accounts[0]});
//		const boolg1etL7g = await Token50X100eA93XEn.transfer.call(addresscMFuO0B, uintyUucAt, {from: accounts[0]});
//		const boolxQr3Z7I = await Token50X100eA93XEn.setMaxLockPeriod.call(uintzxPg7i, {from: accounts[0]});
//		await Token50X100eA93XEn.setWhiteListReceivers.call(addressB5UlaXd, boolohzV1xm, {from: accounts[4]});

		await expect(Token50X100eA93XEn.setSymbolNameDecimals.call(stringrVDjeo, stringn5yqPAD, uintmTMgxpr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eA93XEn = await Token50X100.new({from: accounts[0]});
		const uintuAnCZIn = BigInt("1719")
		const addressVZOGUpK = accounts[4]
		const uintxKkJGYv = BigInt("2021")
		const boolF5CeYm5 = await Token50X100eA93XEn.approve.call(addressVZOGUpK, uintuAnCZIn, {from: accounts[1]});
		const boolxQr3Z7I = await Token50X100eA93XEn.setMaxLockPeriod.call(uintxKkJGYv, {from: accounts[0]});

		assert.equal(boolF5CeYm5, true)
		assert.equal(boolxQr3Z7I, false)
	});

	it('test for Token50X100', async () => {
		const Token50X100lLjWVwO = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const boolSkILqZC = true
		const address4w1hb7 = "0x0000000000000000000000000000000000000001"
		const uintxPAMDL = BigInt("12")
		const stringGiV1vWe = "bAmL1mA2J7FGCbN5VECXQcvc7xzzLhfdJNpObunUFxpxCvYizNCd"
		const stringnPOmIkR = "Gd8YO"
		const uintQWY8ZBI = BigInt("1817")
		const addressAqME7eu = accounts[3]
		const uintGwrD6Gn = BigInt("1843")
		const addressgwuN0yL = accounts[1]
		const addressBSGis1u = accounts[0]
		await Token50X100lLjWVwO.setWhiteList.call(address4w1hb7, boolSkILqZC, {from: accounts[1]});
		await Token50X100lLjWVwO.setSymbolNameDecimals.call(stringnPOmIkR, stringGiV1vWe, uintxPAMDL, {from: accounts[2]});
		const boollWuEEPe = await Token50X100lLjWVwO.transfer.call(addressAqME7eu, uintQWY8ZBI, {from: accounts[3]});
		const boolRfXzWyW = await Token50X100lLjWVwO.transferFrom.call(addressBSGis1u, addressgwuN0yL, uintGwrD6Gn, {from: accounts[0]});
	});

	it('test for Token50X100', async () => {
		const Token50X100eA93XEn = await Token50X100.new({from: accounts[0]});
		const boolNeRd05k = false
		const addressYiQ7tox = accounts[4]
		const uintQiTn6el = BigInt("1451")
		const addresskGASCwI = accounts[6]
//		await Token50X100eA93XEn.setWhiteList.call(addressYiQ7tox, boolNeRd05k, {from: accounts[0]});
//		const boolg1etL7g = await Token50X100eA93XEn.transfer.call(addresskGASCwI, uintQiTn6el, {from: accounts[0]});

		await expect(Token50X100eA93XEn.setWhiteList.call(addressYiQ7tox, boolNeRd05k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sH4EF9W = await Token50X100.new({from: accounts[3]});
		const addressVg2R0Oq = accounts[5]
		const addressJftnI3 = accounts[0]
		const uintHZc8CKY = BigInt("1652")
		const addressCycD1oQ = accounts[4]
		const uintlvgs3O = BigInt("1112")
//		await Token50X100sH4EF9W.lock.call({from: accounts[3]});
//		const uint256aivvXcE = await Token50X100sH4EF9W.totalSupply.call({from: accounts[5]});
//		await Token50X100sH4EF9W.setLinkingAddresses.call(addressJftnI3, addressVg2R0Oq, {from: accounts[3]});
//		const bool2FrAC1 = await Token50X100sH4EF9W.decreaseApproval.call(addressCycD1oQ, uintHZc8CKY, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaweGHPc = await Token50X100sH4EF9W.setMaxLockPeriod.call(uintlvgs3O, {from: accounts[1]});

		await expect(Token50X100sH4EF9W.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ICSJtqr = await Token50X100.new({from: accounts[3]});
		const uintZKaj4S0 = BigInt("749")
		const addressSI1QM7S = accounts[6]
		const boolvXVJpNi = true
		const addressvjK4Glg = accounts[5]
		const boolKYo0VLE = await Token50X100ICSJtqr.decreaseApproval.call(addressSI1QM7S, uintZKaj4S0, {from: accounts[2]});
//		await Token50X100ICSJtqr.setWhiteListReceivers.call(addressvjK4Glg, boolvXVJpNi, {from: accounts[3]});

		assert.equal(boolKYo0VLE, true)
		await expect(Token50X100ICSJtqr.setWhiteListReceivers.call(addressvjK4Glg, boolvXVJpNi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eA93XEn = await Token50X100.new({from: accounts[0]});
		const uintnOfAAIF = BigInt("1207")
		const uintcTaFNEs = BigInt("1994")
		const addresslLwKfGM = accounts[3]
		const uintfqtMOww = BigInt("1479")
		const addressdOxuPx = accounts[5]
		const boolzirFC8p = await Token50X100eA93XEn.setVesting.call(addresslLwKfGM, uintcTaFNEs, uintnOfAAIF, {from: accounts[0]});
//		await Token50X100eA93XEn.release.call({from: accounts[1]});
//		const boolg1etL7g = await Token50X100eA93XEn.transfer.call(addressdOxuPx, uintfqtMOww, {from: accounts[0]});

		assert.equal(boolzirFC8p, true)
		await expect(Token50X100eA93XEn.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ICSJtqr = await Token50X100.new({from: accounts[3]});
		const uinttCZ895R = BigInt("747")
		const addressuYjXHW = accounts[0]
		const boolw8IM6Gr = await Token50X100ICSJtqr.setMaxLockPeriod.call(uinttCZ895R, {from: accounts[1]});
		const addressrTLVXa9 = await Token50X100ICSJtqr.transferOwnership.call(addressuYjXHW, {from: accounts[3]});

		assert.equal(boolw8IM6Gr, false)
	});

	it('test for Token50X100', async () => {
		const Token50X100ICSJtqr = await Token50X100.new({from: accounts[3]});
		const uintZhhoYha = BigInt("41")
		const addressxDSOFxo = accounts[0]
		const addressJ34Kd1M = accounts[2]
		const addressJvJf6lV = accounts[3]
		const uintHJ3n1X = BigInt("1276")
		const uintv59SWKg = BigInt("2006")
		const addressGwnjOsm = accounts[1]
		const uintVGePZNw = BigInt("47")
		const stringgxk0UZ1 = "ZfwD1OXwVMHq"
		const stringHTlwgjq = "LmI3kArdSYEgrbSnWsMa3IliFOzobvHkbqsoPZRCRql4MdmjYO8xgmx8"
		const booloaOJPHl = await Token50X100ICSJtqr.decreaseApproval.call(addressxDSOFxo, uintZhhoYha, {from: accounts[3]});
//		await Token50X100ICSJtqr.setTokenContract.call(addressJ34Kd1M, {from: accounts[3]});
//		await Token50X100ICSJtqr.setTokenContract.call(addressJvJf6lV, {from: accounts[5]});
//		const booltlygjhp = await Token50X100ICSJtqr.setVesting.call(addressGwnjOsm, uintv59SWKg, uintHJ3n1X, {from: accounts[2]});
//		const boolQVeS0Gs = await Token50X100ICSJtqr.setSymbolNameDecimals.call(stringHTlwgjq, stringgxk0UZ1, uintVGePZNw, {from: accounts[1]});

		assert.equal(booloaOJPHl, true)
		await expect(Token50X100ICSJtqr.setTokenContract.call(addressJ34Kd1M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ICSJtqr = await Token50X100.new({from: accounts[3]});
		const uintP6zo26Z = BigInt("0")
		const addressmBFELFf = accounts[1]
		const addressRVFlcai = accounts[1]
		const booloaOJPHl = await Token50X100ICSJtqr.decreaseApproval.call(addressmBFELFf, uintP6zo26Z, {from: accounts[3]});
//		await Token50X100ICSJtqr.setTokenContract.call(addressRVFlcai, {from: accounts[1]});

		assert.equal(booloaOJPHl, true)
		await expect(Token50X100ICSJtqr.setTokenContract.call(addressRVFlcai, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ICSJtqr = await Token50X100.new({from: accounts[3]});
		const uintxDEgrvN = BigInt("1692")
		const addressOoLYJY4 = "0x0000000000000000000000000000000000000000"
		const uintIa9EgEy = BigInt("753")
		const addressMZKXFYa = accounts[0]
//		const boolwKTxDWP = await Token50X100ICSJtqr.transfer.call(addressOoLYJY4, uintxDEgrvN, {from: accounts[5]});
//		const booloaOJPHl = await Token50X100ICSJtqr.decreaseApproval.call(addressMZKXFYa, uintIa9EgEy, {from: accounts[3]});

		await expect(Token50X100ICSJtqr.transfer.call(addressOoLYJY4, uintxDEgrvN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})