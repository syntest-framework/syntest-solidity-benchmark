const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100XSxxsIP = await Token50X100.new({from: accounts[3]});
		const uintJGRBs7e = BigInt("1016")
		const addressBiyFisL = accounts[3]
		const addressv7zquLF = accounts[0]
		const uintbFXkYFM = BigInt("302")
		const uintE8RjlVY = BigInt("1395")
		const addressYBNjkui = accounts[5]
		const addressutxCh1E = accounts[2]
//		const boolEtBymw = await Token50X100XSxxsIP.transferFrom.call(addressv7zquLF, addressBiyFisL, uintJGRBs7e, {from: accounts[2]});
//		const uint256L58T3j = await Token50X100XSxxsIP.totalSupply.call({from: accounts[5]});
//		const boolne8eaCP = await Token50X100XSxxsIP._transfer.call(addressutxCh1E, addressYBNjkui, uintE8RjlVY, uintbFXkYFM, {from: accounts[4]});
//		await Token50X100XSxxsIP.lock.call({from: accounts[0]});

		await expect(Token50X100XSxxsIP.transferFrom.call(addressv7zquLF, addressBiyFisL, uintJGRBs7e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YChrWHt = await Token50X100.new({from: accounts[1]});
		const uintkeTf5Vg = BigInt("746")
		const addressrjSsmkN = accounts[1]
		const uintZH5bNWJ = BigInt("547")
		const addresssPZUjn9 = accounts[3]
		const addressYzMw1Me = accounts[3]
		const uintaGYbtYc = BigInt("207")
		const stringyiaiISw = "hDXFTXG4xeWNicYjDuDcjJl2z25hDLAAqgU9ftTBQ9gH3uyCFyCBEVrUhRsggGTf0IPJRobyddGbIqV"
		const stringOIBp45q = "xsIQdVgRGQULd7t9wQEDpxw59bBASa9mj8tz"
		const uintvDEKs7F = BigInt("1133")
		const addressQucYmch = accounts[2]
		const boolfOi8Ph2 = await Token50X100YChrWHt.increaseApproval.call(addressrjSsmkN, uintkeTf5Vg, {from: accounts[5]});
		const boollcnQYoS = await Token50X100YChrWHt.increaseApproval.call(addresssPZUjn9, uintZH5bNWJ, {from: accounts[1]});
//		const addressmLxoMxN = await Token50X100YChrWHt.setOriginalContract.call(addressYzMw1Me, {from: accounts[4]});
//		await Token50X100YChrWHt.setSymbolNameDecimals.call(stringOIBp45q, stringyiaiISw, uintaGYbtYc, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUUUtuvY = await Token50X100YChrWHt.transfer.call(addressQucYmch, uintvDEKs7F, {from: accounts[1]});

		assert.equal(boolfOi8Ph2, true)
		assert.equal(boollcnQYoS, true)
		await expect(Token50X100YChrWHt.setOriginalContract.call(addressYzMw1Me, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yzwxqan = await Token50X100.new({from: accounts[4]});
		const uintOT8h92A = BigInt("1817")
		const uintf3hyIgA = BigInt("88")
		const addresspNWPiti = accounts[4]
		const uintBlNC72 = BigInt("47")
		const stringYUqcOIL = "DWWe"
		const stringGHPt31v = "4z2VX7iiVRs2KKBCnGEUlYCi65MIA2KMdfn3OZf9lFr15eYy4yVtChneJRjVPLACd4zq7D"
		const uintxKqGZWd = BigInt("62")
		const stringgDOGRJ4 = "a1IM6YesEsCypsYSLDgEi20j0PT7RWfT"
		const stringXxEefF8 = "SoS4Gv76X"
		const boold6mIxaJ = await Token50X100yzwxqan.setVesting.call(addresspNWPiti, uintf3hyIgA, uintOT8h92A, {from: accounts[4]});
//		await Token50X100yzwxqan.setSymbolNameDecimals.call(stringGHPt31v, stringYUqcOIL, uintBlNC72, {from: accounts[3]});
//		await Token50X100yzwxqan.release.call({from: accounts[3]});
//		await Token50X100yzwxqan.setSymbolNameDecimals.call(stringXxEefF8, stringgDOGRJ4, uintxKqGZWd, {from: accounts[1]});

		assert.equal(boold6mIxaJ, true)
		await expect(Token50X100yzwxqan.setSymbolNameDecimals.call(stringGHPt31v, stringYUqcOIL, uintBlNC72, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PVuBdzx = await Token50X100.new({from: accounts[5]});
		const uintWkD86g8 = BigInt("1053")
		const uintFvj2lHh = BigInt("302")
		const addressV65SJbL = accounts[4]
		const uintlLcQPCN = BigInt("1426")
		const addressC8nUZW0 = accounts[1]
		const uintscPZrWT = BigInt("1462")
		const uintYYrgFyq = BigInt("358")
		const addressrWVIYF = accounts[4]
		const boolC4GlJ51 = await Token50X100PVuBdzx.setMaxLockPeriod.call(uintWkD86g8, {from: accounts[2]});
//		const boolsagkJS5 = await Token50X100PVuBdzx.transfer.call(addressV65SJbL, uintFvj2lHh, {from: accounts[4]});
//		const boolPhnlXYh = await Token50X100PVuBdzx.approve.call(addressC8nUZW0, uintlLcQPCN, {from: accounts[1]});
//		const boolX7Ms4Zi = await Token50X100PVuBdzx.setVesting.call(addressrWVIYF, uintYYrgFyq, uintscPZrWT, {from: accounts[3]});

		assert.equal(boolC4GlJ51, false)
		await expect(Token50X100PVuBdzx.transfer.call(addressV65SJbL, uintFvj2lHh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100THAdzbV = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiZMUT9O = accounts[5]
		const uintd06siZT = BigInt("201")
		const uintqaXsP9t = BigInt("1879")
		const addressVNWQnl = "0x0000000000000000000000000000000000000001"
		const addressj45YkGr = accounts[0]
		const uintD2REgSr = BigInt("1013")
		const addressCfuxRto = accounts[0]
		const addressIThKipA = accounts[3]
		const addressbzyW9Bv = accounts[4]
		const uintJK1EFo7 = BigInt("1101")
		const uintznU0OdI = BigInt("1602")
		const addresscxlPFEl = accounts[5]
		const addressDjiRpLl = await Token50X100THAdzbV.setOriginalContract.call(addressiZMUT9O, {from: accounts[1]});
		const boolYrZHbXD = await Token50X100THAdzbV.setMaxLockPeriod.call(uintd06siZT, {from: accounts[0]});
		const boolXuE4tcI = await Token50X100THAdzbV.transferFrom.call(addressj45YkGr, addressVNWQnl, uintqaXsP9t, {from: accounts[2]});
		const boolPRgQgjJ = await Token50X100THAdzbV.transferFrom.call(addressIThKipA, addressCfuxRto, uintD2REgSr, {from: accounts[3]});
		const uint256d2Bw5mt = await Token50X100THAdzbV.balanceOf.call(addressbzyW9Bv, {from: accounts[4]});
		const boolSjJV4GH = await Token50X100THAdzbV.setVesting.call(addresscxlPFEl, uintznU0OdI, uintJK1EFo7, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Token50X100', async () => {
		const Token50X100rDaU6Y = await Token50X100.new({from: accounts[5]});
		const uintsJCMs6Z = BigInt("280")
		const addresssICNw5v = accounts[0]
		const booldkA5SLx = true
		const addressyIjXI69 = accounts[2]
		const boolWD91xXr = await Token50X100rDaU6Y.decreaseApproval.call(addresssICNw5v, uintsJCMs6Z, {from: accounts[1]});
//		await Token50X100rDaU6Y.setWhiteListReceivers.call(addressyIjXI69, booldkA5SLx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWD91xXr, true)
		await expect(Token50X100rDaU6Y.setWhiteListReceivers.call(addressyIjXI69, booldkA5SLx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100rDaU6Y = await Token50X100.new({from: accounts[5]});
		const addresscRamaVc = accounts[0]
		const booldkA5SLx = false
		const addresszdFnoVS = accounts[3]
		const uint256yiN90D = await Token50X100rDaU6Y.balanceOf.call(addresscRamaVc, {from: accounts[3]});
//		await Token50X100rDaU6Y.setWhiteListReceivers.call(addresszdFnoVS, booldkA5SLx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256yiN90D, BigInt("0"))
		await expect(Token50X100rDaU6Y.setWhiteListReceivers.call(addresszdFnoVS, booldkA5SLx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100IKf3v0h = await Token50X100.new({from: accounts[5]});
		const addressoXooBZ5 = accounts[0]
		const uintjM6ISF = BigInt("178")
		const uintUP91njW = BigInt("590")
		const uintnPZI1ZM = BigInt("526")
		const addressSU9jfmE = "0x0000000000000000000000000000000000000001"
		const uintaiVacNF = BigInt("44")
		const stringXdmYcl1 = "lW5NEIdmbtvwpwd71fhFyQHGHIdSa"
		const stringo3PSu1N = "tytOu27U9iA16gvJ8zIBv955yVI7bvQFl2SPLyXdG9anmEprOgEnp"
		const uintsvRkRMB = BigInt("16")
		const stringaAFhMdV = "NI39P4BEE57BDBolJNg3GVU2e3Rgemoj7yuC7ItY91CxO7zf2BKy9nlEjlAtO5HlvPhvAUvNuIaLbicJwvFXKated"
		const stringneoYh2N = "qnRdVru1cg8TBq"
		const addressFOWJJGx = accounts[1]
		const uint256wM4edWo = await Token50X100IKf3v0h.balanceOf.call(addressoXooBZ5, {from: accounts[1]});
//		const booln9rl7Ty = await Token50X100IKf3v0h.safeLock.call(uintUP91njW, uintjM6ISF, {from: accounts[2]});
//		const boolhpuQwSB = await Token50X100IKf3v0h.transfer.call(addressSU9jfmE, uintnPZI1ZM, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100IKf3v0h.release.call({from: accounts[2]});
//		await Token50X100IKf3v0h.setSymbolNameDecimals.call(stringo3PSu1N, stringXdmYcl1, uintaiVacNF, {from: accounts[3]});
//		const boolkq1DEOp = await Token50X100IKf3v0h.setSymbolNameDecimals.call(stringneoYh2N, stringaAFhMdV, uintsvRkRMB, {from: accounts[2]});
//		const uint256VmESOuv = await Token50X100IKf3v0h.balanceOf.call(addressFOWJJGx, {from: accounts[2]});

		assert.equal(uint256wM4edWo, BigInt("0"))
		await expect(Token50X100IKf3v0h.safeLock.call(uintUP91njW, uintjM6ISF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100uiGVf5A = await Token50X100.new({from: accounts[4]});
		const uintpLhmv6S = BigInt("698")
		const addressGYAXPR = accounts[2]
		const uintMTXTyVq = BigInt("1651")
		const addressgzMcW3g = accounts[3]
		const addressJAoexYF = accounts[1]
		const bool7ZvviN = await Token50X100uiGVf5A.decreaseApproval.call(addressGYAXPR, uintpLhmv6S, {from: "0x0000000000000000000000000000000000000001"});
		const boolVG5hqh = await Token50X100uiGVf5A.setMaxLockPeriod.call(uintMTXTyVq, {from: accounts[3]});
		const uint256cwwEtsr = await Token50X100uiGVf5A.allowance.call(addressJAoexYF, addressgzMcW3g, {from: accounts[4]});

		assert.equal(bool7ZvviN, true)
		assert.equal(boolVG5hqh, false)
		assert.equal(uint256cwwEtsr, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100IKf3v0h = await Token50X100.new({from: accounts[5]});
		const addresscA2dFzj = accounts[3]
		const uintRt6XGyF = BigInt("526")
		const addressYB2ogC5 = "0x0000000000000000000000000000000000000000"
//		await Token50X100IKf3v0h.setTokenContract.call(addresscA2dFzj, {from: accounts[5]});
//		const boolhpuQwSB = await Token50X100IKf3v0h.transfer.call(addressYB2ogC5, uintRt6XGyF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100IKf3v0h.setTokenContract.call(addresscA2dFzj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100IKf3v0h = await Token50X100.new({from: accounts[5]});
		const uintVnUwIei = BigInt("619")
		const addressBLXBsfu = accounts[3]
		const uintMPVBO3d = BigInt("518")
		const addressC1v8hPK = "0x0000000000000000000000000000000000000001"
//		await Token50X100IKf3v0h.lock.call({from: accounts[5]});
//		const boolGKlDis7 = await Token50X100IKf3v0h.increaseApproval.call(addressBLXBsfu, uintVnUwIei, {from: accounts[0]});
//		const boolhpuQwSB = await Token50X100IKf3v0h.transfer.call(addressC1v8hPK, uintMPVBO3d, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100IKf3v0h.lock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100DiduSwF = await Token50X100.new({from: accounts[1]});
		const uint9F139o = BigInt("785")
		const uintQe3bh09 = BigInt("382")
		const addressZMONVNC = accounts[3]
		const addresszd9o6r = accounts[2]
		const uintYzYBv7l = BigInt("1125")
		const addressBKDwZs9 = accounts[4]
		const uintEKMCXvU = BigInt("1481")
		const uintqWc5Wth = BigInt("1936")
//		const boolt9uovYD = await Token50X100DiduSwF._transfer.call(addresszd9o6r, addressZMONVNC, uintQe3bh09, uint9F139o, {from: accounts[1]});
//		await Token50X100DiduSwF.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolO8dotmJ = await Token50X100DiduSwF.transfer.call(addressBKDwZs9, uintYzYBv7l, {from: accounts[3]});
//		const boolneP9SF = await Token50X100DiduSwF.safeLock.call(uintqWc5Wth, uintEKMCXvU, {from: accounts[1]});

		await expect(Token50X100DiduSwF._transfer.call(addresszd9o6r, addressZMONVNC, uintQe3bh09, uint9F139o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100NbqbFyc = await Token50X100.new({from: accounts[0]});
		const uintGj4w4K1 = BigInt("1744")
		const addresssgdQbn0 = accounts[5]
		const boolUUKJwqJ = true
		const addressIG6YofS = accounts[0]
		const uintnGZYpOu = BigInt("33")
		const uintDT7QMnB = BigInt("542")
		const uintgN8FcWR = BigInt("1469")
		const uintcnaFIOV = BigInt("1167")
		const addressCrLYNDu = accounts[5]
		const addressgI9lnqP = accounts[3]
		const uintMlVaFW3 = BigInt("1217")
		const addresstQzJfiZ = "0x0000000000000000000000000000000000000001"
		const addresspf92xed = accounts[2]
		const bools7Vjm14 = await Token50X100NbqbFyc.approve.call(addresssgdQbn0, uintGj4w4K1, {from: accounts[3]});
//		await Token50X100NbqbFyc.setWhiteListReceivers.call(addressIG6YofS, boolUUKJwqJ, {from: accounts[2]});
//		const boola2roSj8 = await Token50X100NbqbFyc.safeLock.call(uintDT7QMnB, uintnGZYpOu, {from: accounts[2]});
//		const booluK0hsqW = await Token50X100NbqbFyc._transfer.call(addressgI9lnqP, addressCrLYNDu, uintcnaFIOV, uintgN8FcWR, {from: accounts[2]});
//		const boolisZm9HT = await Token50X100NbqbFyc.setMaxLockPeriod.call(uintMlVaFW3, {from: accounts[2]});
//		await Token50X100NbqbFyc.setLinkingAddresses.call(addresspf92xed, addresstQzJfiZ, {from: accounts[2]});

		assert.equal(bools7Vjm14, true)
		await expect(Token50X100NbqbFyc.setWhiteListReceivers.call(addressIG6YofS, boolUUKJwqJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100rDaU6Y = await Token50X100.new({from: accounts[5]});
		const uintJ4a6FE = BigInt("423")
		const addresscMtoBcu = accounts[1]
		const uintwySuoEZ = BigInt("1630")
		const uintRTdW6GO = BigInt("2035")
		const addressP14C6Rj = accounts[2]
		const uint256W1Uw41 = await Token50X100rDaU6Y.totalSupply.call({from: accounts[2]});
		const boolWD91xXr = await Token50X100rDaU6Y.decreaseApproval.call(addresscMtoBcu, uintJ4a6FE, {from: accounts[1]});
//		const boolGanV5JQ = await Token50X100rDaU6Y.setVesting.call(addressP14C6Rj, uintRTdW6GO, uintwySuoEZ, {from: accounts[3]});

		assert.equal(boolWD91xXr, true)
		assert.equal(uint256W1Uw41, BigInt("4714285714285710"))
		await expect(Token50X100rDaU6Y.setVesting.call(addressP14C6Rj, uintRTdW6GO, uintwySuoEZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100rDaU6Y = await Token50X100.new({from: accounts[5]});
		const booldkA5SLx = true
		const addresszx86BX = accounts[2]
//		await Token50X100rDaU6Y.release.call({from: accounts[5]});
//		await Token50X100rDaU6Y.setWhiteListReceivers.call(addresszx86BX, booldkA5SLx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100rDaU6Y.release.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100rDaU6Y = await Token50X100.new({from: accounts[5]});
		const uintuKoLECz = BigInt("126")
		const stringWkwd165 = "UWpMthxlWPzEDk"
		const stringXPMQOrd = "igbtOrIRB5bBbyF9XBKnhNb1dBsEgq4d61AAbCNkIRuOkCoMrW0k5263R7aCNN"
		const uintnEtFaP = BigInt("152")
		const stringVqhq22V = "BRYgBos9mcx2M6GSPXB2qXL5JWK0gr"
		const stringVMJHh3I = "6a6URisEtLMhD8DQLBwfOn0eSazNC78q3Hc4RbpiNECSlc3H8Kb84LrWtnBhNBO11NWjQaQyU8SC"
		const booldkA5SLx = false
		const addressiiXhqmZ = accounts[3]
		const boolUJ7IAT = await Token50X100rDaU6Y.setSymbolNameDecimals.call(stringXPMQOrd, stringWkwd165, uintuKoLECz, {from: accounts[5]});
//		const boolazq7xUw = await Token50X100rDaU6Y.setSymbolNameDecimals.call(stringVMJHh3I, stringVqhq22V, uintnEtFaP, {from: accounts[2]});
//		await Token50X100rDaU6Y.setWhiteListReceivers.call(addressiiXhqmZ, booldkA5SLx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100rDaU6Y.setSymbolNameDecimals.call(stringVMJHh3I, stringVqhq22V, uintnEtFaP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100rDaU6Y = await Token50X100.new({from: accounts[5]});
		const uintmvaNr1U = BigInt("0")
		const addressRxrF5Ps = accounts[1]
		const boolWD91xXr = await Token50X100rDaU6Y.decreaseApproval.call(addressRxrF5Ps, uintmvaNr1U, {from: accounts[1]});

		assert.equal(boolWD91xXr, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100ck11K7d = await Token50X100.new({from: accounts[4]});
		const boolTR35Fx = false
		const addresseU0ZKM3 = accounts[5]
		const uintb86fqrP = BigInt("625")
		const uintQsAmUvz = BigInt("859")
		const addresshqXbI8f = accounts[4]
		const addressBhtUVO = accounts[1]
		const uintoWF3DXr = BigInt("135")
		const stringAc2YDSN = "2sg2rJ2NylG6EmXuYcPj3HpFhQ1obpaDqramHB4TQyA6kgFOlOxOhlHTUQc7jwlkhXAb99wNHGGayv"
		const stringUeBWbFW = "F0Mzj83yLsmJb94wY4jrxoBm9eCeLGD"
//		await Token50X100ck11K7d.setWhiteList.call(addresseU0ZKM3, boolTR35Fx, {from: accounts[4]});
//		const booliqPHVW1 = await Token50X100ck11K7d._transfer.call(addressBhtUVO, addresshqXbI8f, uintQsAmUvz, uintb86fqrP, {from: accounts[0]});
//		await Token50X100ck11K7d.release.call({from: accounts[0]});
//		await Token50X100ck11K7d.setSymbolNameDecimals.call(stringUeBWbFW, stringAc2YDSN, uintoWF3DXr, {from: accounts[5]});

		await expect(Token50X100ck11K7d.setWhiteList.call(addresseU0ZKM3, boolTR35Fx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})