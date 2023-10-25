const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALegTAMX = await NAL.new({from: accounts[1]});
		const uintnFRaGBI = BigInt("1947")
		const addressP78QFI = accounts[5]
		const uintSVS7QUr = BigInt("975")
		const addressblb2NW = accounts[0]
		const addressAlmv2gm = accounts[3]
		const addressUO06Qh0 = accounts[2]
		const boolPJWVGsq = await NALegTAMX.decreaseAllowance.call(addressP78QFI, uintnFRaGBI, {from: accounts[1]});
		const boolyuS7BbB = await NALegTAMX.transferFrom.call(addressAlmv2gm, addressblb2NW, uintSVS7QUr, {from: accounts[2]});
		const boolklKILNE = await NALegTAMX.freezeAccount.call(addressUO06Qh0, {from: accounts[0]});

		await expect(NALegTAMX.decreaseAllowance.call(addressP78QFI, uintnFRaGBI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const addressfRG7t6W = accounts[1]
		const addressxBnPqyI = accounts[2]
		const uintS08aoi = BigInt("584")
		const addressoxJWcy = accounts[0]
		const uint256m0Xzx7p = await NALkmmrwOt.allowance.call(addressxBnPqyI, addressfRG7t6W, {from: accounts[3]});
		const addresssvpJSVT = await NALkmmrwOt.burnFrom.call(addressoxJWcy, uintS08aoi, {from: accounts[1]});

		assert.equal(uint256m0Xzx7p, BigInt("0"))
		await expect(NALkmmrwOt.burnFrom.call(addressoxJWcy, uintS08aoi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXW4MOaH = await NAL.new({from: accounts[4]});
		const uintqOfc49 = BigInt("859")
		const uintX4Lc0SA = BigInt("1813")
		const addressuI4RcNH = accounts[1]
		const addressteVZzqV = accounts[4]
		const addressKbk26vc = accounts[3]
		const uintgRyp3sv = BigInt("666")
		const addressUoddBUi = accounts[2]
		const uintMBQ0YA4 = BigInt("1425")
		const uint256vZqJnrp = await NALXW4MOaH.burn.call(uintqOfc49, {from: accounts[3]});
		const boolcyoipb = await NALXW4MOaH.decreaseAllowance.call(addressuI4RcNH, uintX4Lc0SA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oF9CQ25 = await NALXW4MOaH.allowance.call(addressKbk26vc, addressteVZzqV, {from: accounts[1]});
		const boolBKeeKll = await NALXW4MOaH.transfer.call(addressUoddBUi, uintgRyp3sv, {from: accounts[3]});
		const uint256rMfxO24 = await NALXW4MOaH.burn.call(uintMBQ0YA4, {from: accounts[5]});
		await NALXW4MOaH.unpause.call({from: accounts[4]});

		await expect(NALXW4MOaH.burn.call(uintqOfc49, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALht03H2c = await NAL.new({from: accounts[1]});
		const addressbLF6sN8 = accounts[3]
		const addressdvWUlGr = accounts[0]
		const boolfIwv5tR = await NALht03H2c.isAdmin.call(addressbLF6sN8, {from: accounts[0]});
		const booldm4jodV = await NALht03H2c.freezeAccount.call(addressdvWUlGr, {from: accounts[4]});
		await NALht03H2c.whenPaused.call({from: accounts[3]});

		assert.equal(boolfIwv5tR, false)
		await expect(NALht03H2c.freezeAccount.call(addressdvWUlGr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringwUGEFx2 = "dyHB4eaD5sUTxgiLnxZ6iOo"
		const stringUOr5aPS = "IreDmzT6nRDqESJgElNJcLPttGhlmgNtaC4UvDMux37yqEiieusinnfUVaAJ45k2sjAlx4zCY"
		const uintF0XLHG = BigInt("208")
		const NAL0Div0E = await NAL.new(stringwUGEFx2, stringUOr5aPS, uintF0XLHG, {from: "0x0000000000000000000000000000000000000001"});
		const addressB6IDph = accounts[2]
		const uintoX9fnmy = BigInt("1397")
		const addressubJMn0A = accounts[2]
		const uintrJTYLcO = BigInt("1321")
		const addressw4FYQJD = accounts[5]
		const addressWPshTg9 = await NAL0Div0E.addAdmin.call(addressB6IDph, {from: accounts[0]});
		const addressZWNpspE = await NAL0Div0E.burnFrom.call(addressubJMn0A, uintoX9fnmy, {from: accounts[1]});
		const boolBUpnsVy = await NAL0Div0E.transfer.call(addressw4FYQJD, uintrJTYLcO, {from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const uintsLEXMg2 = BigInt("1184")
		const addressWUwx7ag = accounts[0]
		const addressIz88KjQ = accounts[0]
		const uintKUCefON = BigInt("585")
		const addresscc6Szkj = accounts[2]
		const uintIXf6s1T = BigInt("571")
		const addressXWHb15H = accounts[1]
		const booludPGXJ7 = await NALN8gpkEV.transferFrom.call(addressIz88KjQ, addressWUwx7ag, uintsLEXMg2, {from: accounts[4]});
		const boolkfjSwE0 = await NALN8gpkEV.unlock.call(addresscc6Szkj, uintKUCefON, {from: accounts[4]});
		const boolIGXXss = await NALN8gpkEV.decreaseAllowance.call(addressXWHb15H, uintIXf6s1T, {from: accounts[0]});
		const stringACHySUH = await NALN8gpkEV.name.call({from: accounts[1]});

		await expect(NALN8gpkEV.transferFrom.call(addressIz88KjQ, addressWUwx7ag, uintsLEXMg2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALht03H2c = await NAL.new({from: accounts[1]});
		const uintB5Cr8rY = BigInt("1945")
		const uintvr8aLq = BigInt("1214")
		const addressu5WfepK = accounts[4]
		const uintCGZC8X = BigInt("861")
		const addressJeMAB2q = accounts[0]
		const addressf7OZ4y = accounts[4]
		const addresszK6wdlJ = accounts[0]
		const boolgBfOHKs = await NALht03H2c.lock.call(addressu5WfepK, uintvr8aLq, uintB5Cr8rY, {from: accounts[1]});
		const booluLTrn0 = await NALht03H2c.transfer.call(addressJeMAB2q, uintCGZC8X, {from: accounts[2]});
		const boolfIwv5tR = await NALht03H2c.isAdmin.call(addressf7OZ4y, {from: accounts[0]});
		const booldm4jodV = await NALht03H2c.freezeAccount.call(addresszK6wdlJ, {from: accounts[4]});
		await NALht03H2c.whenPaused.call({from: accounts[3]});

		await expect(NALht03H2c.lock.call(addressu5WfepK, uintvr8aLq, uintB5Cr8rY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const uintxUwfIz = BigInt("1366")
		const addressRgnWyE = accounts[2]
		const addressamJRVv3 = accounts[2]
		const addressJ4Z6Ca7 = accounts[2]
		const uintAZt71bA = BigInt("1311")
		const addresslpVUg0 = accounts[1]
		const uintYhOK9TQ = BigInt("584")
		const addressn83NLo0 = accounts[0]
		const boolouxxm8m = await NALkmmrwOt.transfer.call(addressRgnWyE, uintxUwfIz, {from: accounts[4]});
		await NALkmmrwOt.pause.call({from: accounts[4]});
		const uint256m0Xzx7p = await NALkmmrwOt.allowance.call(addressJ4Z6Ca7, addressamJRVv3, {from: accounts[3]});
		const boolYnvQIxK = await NALkmmrwOt.increaseAllowance.call(addresslpVUg0, uintAZt71bA, {from: "0x0000000000000000000000000000000000000001"});
		const addresssvpJSVT = await NALkmmrwOt.burnFrom.call(addressn83NLo0, uintYhOK9TQ, {from: accounts[1]});

		await expect(NALkmmrwOt.transfer.call(addressRgnWyE, uintxUwfIz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const uintJ9jYN0 = BigInt("1187")
		const addressxifBg1z = accounts[0]
		const addresshp6HcK5 = accounts[0]
		const uintzOyutna = BigInt("585")
		const addressbbO6Jv3 = accounts[2]
		const stringqEj6ab6 = await NALN8gpkEV.symbol.call({from: accounts[3]});
		const booludPGXJ7 = await NALN8gpkEV.transferFrom.call(addresshp6HcK5, addressxifBg1z, uintJ9jYN0, {from: accounts[4]});
		const boolkfjSwE0 = await NALN8gpkEV.unlock.call(addressbbO6Jv3, uintzOyutna, {from: accounts[4]});
		await NALN8gpkEV.pause.call({from: accounts[1]});
		const stringACHySUH = await NALN8gpkEV.name.call({from: accounts[1]});

		assert.equal(stringqEj6ab6, "NAL")
		await expect(NALN8gpkEV.transferFrom.call(addresshp6HcK5, addressxifBg1z, uintJ9jYN0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const addressTnk3Ee = accounts[1]
		const uinthxUxWO = BigInt("1184")
		const addressoT8T7M = accounts[0]
		const addresszebi3Ua = accounts[0]
		const uintJIpU7OD = BigInt("585")
		const addresseWKPc4K = accounts[2]
		const addressZ3SUoPI = accounts[1]
		const addressxrNh1eg = "0x0000000000000000000000000000000000000001"
		const boolDFoxXnu = await NALN8gpkEV.isOwner.call(addressTnk3Ee, {from: accounts[1]});
		const booludPGXJ7 = await NALN8gpkEV.transferFrom.call(addresszebi3Ua, addressoT8T7M, uinthxUxWO, {from: accounts[4]});
		const boolkfjSwE0 = await NALN8gpkEV.unlock.call(addresseWKPc4K, uintJIpU7OD, {from: accounts[4]});
		const stringACHySUH = await NALN8gpkEV.name.call({from: accounts[1]});
		await NALN8gpkEV.pause.call({from: accounts[2]});
		const uint256o4Z67gI = await NALN8gpkEV.allowance.call(addressxrNh1eg, addressZ3SUoPI, {from: accounts[4]});

		assert.equal(boolDFoxXnu, true)
		await expect(NALN8gpkEV.transferFrom.call(addresszebi3Ua, addressoT8T7M, uinthxUxWO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const addressmLc8vob = accounts[2]
		const addressd1gBbmU = accounts[2]
		const addresskxrOoP3 = accounts[5]
		const uint256m0Xzx7p = await NALkmmrwOt.allowance.call(addressd1gBbmU, addressmLc8vob, {from: accounts[3]});
		const addressC7YZA1q = await NALkmmrwOt.transferOwnership.call(addresskxrOoP3, {from: accounts[0]});

		assert.equal(uint256m0Xzx7p, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const addressGlkEgN = accounts[4]
		const uinteGxp05r = BigInt("1184")
		const addressTetxei = accounts[1]
		const addressziVbeJm = accounts[0]
		const uintA3PQzmH = BigInt("585")
		const addressVGzpayG = accounts[2]
		const uintEfVrHsg = BigInt("1418")
		const addressObfSF1W = accounts[3]
		const uint256bzTOhlR = await NALN8gpkEV.balanceOf.call(addressGlkEgN, {from: accounts[2]});
		const booludPGXJ7 = await NALN8gpkEV.transferFrom.call(addressziVbeJm, addressTetxei, uinteGxp05r, {from: accounts[4]});
		const boolkfjSwE0 = await NALN8gpkEV.unlock.call(addressVGzpayG, uintA3PQzmH, {from: accounts[4]});
		const boolp4nU1Is = await NALN8gpkEV.decreaseAllowance.call(addressObfSF1W, uintEfVrHsg, {from: accounts[0]});

		assert.equal(uint256bzTOhlR, BigInt("0"))
		await expect(NALN8gpkEV.transferFrom.call(addressziVbeJm, addressTetxei, uinteGxp05r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALrmCr1eU = await NAL.new({from: accounts[5]});
		const addressi7Zu9mH = accounts[2]
		const addressEOJYX71 = accounts[4]
		await NALrmCr1eU.renounceAdmin.call({from: accounts[3]});
		const addressB9jdrQA = await NALrmCr1eU.notFrozen.call(addressi7Zu9mH, {from: accounts[1]});
		const addressZq9qiw = await NALrmCr1eU.notFrozen.call(addressEOJYX71, {from: accounts[4]});
		const uint256BFXjg0I = await NALrmCr1eU.totalSupply.call({from: accounts[3]});
		const uint8Xpe51k = await NALrmCr1eU.decimals.call({from: accounts[0]});

		await expect(NALrmCr1eU.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const addressIAlX3ge = accounts[1]
		const addressf6v0jCH = accounts[3]
		await NALkmmrwOt.whenNotPaused.call({from: accounts[5]});
		const uint256m0Xzx7p = await NALkmmrwOt.allowance.call(addressf6v0jCH, addressIAlX3ge, {from: accounts[3]});

		await expect(NALkmmrwOt.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const addressERicdp = accounts[5]
		const uintXpAzUCS = BigInt("1184")
		const addressFguD0Wf = accounts[0]
		const addressCkfg307 = accounts[0]
		const addressiaA0z9S = await NALN8gpkEV.addAdmin.call(addressERicdp, {from: accounts[1]});
		const booludPGXJ7 = await NALN8gpkEV.transferFrom.call(addressCkfg307, addressFguD0Wf, uintXpAzUCS, {from: accounts[4]});

		await expect(NALN8gpkEV.transferFrom.call(addressCkfg307, addressFguD0Wf, uintXpAzUCS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const addresszlfWQIx = accounts[1]
		const addressq3riI6 = accounts[3]
		const addressU8nHg1H = accounts[0]
		const uintfJmTOS3 = BigInt("1123")
		const addressaWaGOBF = accounts[4]
		const uint256m0Xzx7p = await NALkmmrwOt.allowance.call(addressq3riI6, addresszlfWQIx, {from: accounts[3]});
		const uint256ETP50u6 = await NALkmmrwOt.balanceOf.call(addressU8nHg1H, {from: accounts[5]});
		const boolw0TjoLW = await NALkmmrwOt.approve.call(addressaWaGOBF, uintfJmTOS3, {from: accounts[1]});

		assert.equal(boolw0TjoLW, true)
		assert.equal(uint256ETP50u6, BigInt("2000000000000000000000000000"))
		assert.equal(uint256m0Xzx7p, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const uintIzX8pkv = BigInt("1184")
		const addressJnnK6YJ = accounts[1]
		const addressMaDr90D = accounts[0]
		const stringrBOtBon = await NALN8gpkEV.name.call({from: accounts[1]});
		const booludPGXJ7 = await NALN8gpkEV.transferFrom.call(addressMaDr90D, addressJnnK6YJ, uintIzX8pkv, {from: accounts[4]});

		assert.equal(stringrBOtBon, "Personal Token")
		await expect(NALN8gpkEV.transferFrom.call(addressMaDr90D, addressJnnK6YJ, uintIzX8pkv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const addressovYqR66 = accounts[4]
		const addressVDGuIBq = accounts[0]
		const uintlEIBROY = BigInt("585")
		const addressdAkvsnC = accounts[2]
		const uint256bzTOhlR = await NALN8gpkEV.balanceOf.call(addressovYqR66, {from: accounts[2]});
		const addresspDVWeBO = await NALN8gpkEV.upgradeTo.call(addressVDGuIBq, {from: accounts[1]});
		const boolkfjSwE0 = await NALN8gpkEV.unlock.call(addressdAkvsnC, uintlEIBROY, {from: accounts[4]});
		const uint8tSqQxde = await NALN8gpkEV.decimals.call({from: accounts[1]});

		assert.equal(uint256bzTOhlR, BigInt("0"))
		await expect(NALN8gpkEV.unlock.call(addressdAkvsnC, uintlEIBROY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALuKaCvIu = await NAL.new({from: accounts[1]});
		const addresss9Oh0gD = accounts[1]
		const booliVv277H = await NALuKaCvIu.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolgPPsAtY = await NALuKaCvIu.isOwner.call(addresss9Oh0gD, {from: accounts[3]});

		assert.equal(boolgPPsAtY, true)
		assert.equal(booliVv277H, false)
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const uinteHetfIi = BigInt("110")
		const addressBUqfiXU = accounts[3]
		const uintAhTs0do = BigInt("1184")
		const addressafkFl0 = accounts[0]
		const addresseTksbR5 = accounts[1]
		const uintB7DfDo4 = BigInt("1015")
		const addressVYjSSPL = accounts[0]
		const booldtCSgxU = await NALN8gpkEV.increaseAllowance.call(addressBUqfiXU, uinteHetfIi, {from: accounts[2]});
		const booludPGXJ7 = await NALN8gpkEV.transferFrom.call(addresseTksbR5, addressafkFl0, uintAhTs0do, {from: accounts[4]});
		const boolMxeLXl = await NALN8gpkEV.transfer.call(addressVYjSSPL, uintB7DfDo4, {from: accounts[3]});

		assert.equal(booldtCSgxU, true)
		await expect(NALN8gpkEV.transferFrom.call(addresseTksbR5, addressafkFl0, uintAhTs0do, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const addressPAhpaS = accounts[1]
		const addressl4kWhwg = accounts[3]
		const addressapq2w6H = accounts[5]
		const uint256m0Xzx7p = await NALkmmrwOt.allowance.call(addressl4kWhwg, addressPAhpaS, {from: accounts[3]});
		const uint8gtStinn = await NALkmmrwOt.decimals.call({from: accounts[1]});
		const addressOM7HPXE = await NALkmmrwOt.upgradeTo.call(addressapq2w6H, {from: accounts[2]});

		assert.equal(uint256m0Xzx7p, BigInt("0"))
		assert.equal(uint8gtStinn, BigInt("18"))
		await expect(NALkmmrwOt.upgradeTo.call(addressapq2w6H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const addressIdfG2Uv = accounts[5]
		const uint9nSFle = BigInt("20")
		const addressJZ2l7Ou = accounts[3]
		const uint256BZaffjR = await NALkmmrwOt.balanceOf.call(addressIdfG2Uv, {from: accounts[0]});
		await NALkmmrwOt.pause.call({from: accounts[0]});
		const booleu1AEBo = await NALkmmrwOt.transfer.call(addressJZ2l7Ou, uint9nSFle, {from: accounts[1]});

		assert.equal(uint256BZaffjR, BigInt("0"))
		await expect(NALkmmrwOt.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const addressttmM3U7 = accounts[4]
		const uintiud2pm = BigInt("222")
		const addressPmS7duS = accounts[0]
		const uintJxwAga = BigInt("585")
		const addressCjwe6L6 = accounts[3]
		const uintfL8KyLf = BigInt("1493")
		const uintNkfR2XU = BigInt("1844")
		const addressjzMrzb = accounts[5]
		const uint256bzTOhlR = await NALN8gpkEV.balanceOf.call(addressttmM3U7, {from: accounts[2]});
		const boolr3lMERX = await NALN8gpkEV.unlock.call(addressPmS7duS, uintiud2pm, {from: accounts[1]});
		const boolkfjSwE0 = await NALN8gpkEV.unlock.call(addressCjwe6L6, uintJxwAga, {from: accounts[4]});
		await NALN8gpkEV.whenNotPaused.call({from: accounts[5]});
		const boolzjTSIiO = await NALN8gpkEV.lock.call(addressjzMrzb, uintNkfR2XU, uintfL8KyLf, {from: accounts[2]});
		await NALN8gpkEV.whenNotPaused.call({from: accounts[4]});

		assert.equal(uint256bzTOhlR, BigInt("0"))
		await expect(NALN8gpkEV.unlock.call(addressPmS7duS, uintiud2pm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnJiom6b = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseO3a0dJ = accounts[0]
		const addressRP4U9Qi = accounts[3]
		const boolvDx3TN8 = await NALnJiom6b.isOwner.call(addresseO3a0dJ, {from: accounts[4]});
		const uint256w7FIEzR = await NALnJiom6b.totalSupply.call({from: accounts[4]});
		const addresszc7exeX = await NALnJiom6b.notFrozen.call(addressRP4U9Qi, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const uintzQGotCK = BigInt("803")
		const uintXVZ3JRL = BigInt("46")
		const addressGoOyW8 = accounts[2]
		const addressoaqWlJ = accounts[1]
		const addressTjmEgfI = accounts[3]
		const boollUuUFzP = await NALkmmrwOt.transferWithLock.call(addressGoOyW8, uintXVZ3JRL, uintzQGotCK, {from: accounts[0]});
		const uint256m0Xzx7p = await NALkmmrwOt.allowance.call(addressTjmEgfI, addressoaqWlJ, {from: accounts[3]});

		assert.equal(boollUuUFzP, true)
		assert.equal(uint256m0Xzx7p, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const addressSSXrwP = accounts[1]
		const addressNSujofb = accounts[3]
		const addressXGwIncr = accounts[4]
		const addressYrCpFwP = accounts[0]
		const uint256m0Xzx7p = await NALkmmrwOt.allowance.call(addressNSujofb, addressSSXrwP, {from: accounts[3]});
		const addressQiIACab = await NALkmmrwOt.removeAdmin.call(addressXGwIncr, {from: accounts[0]});
		const addressX7jcptc = await NALkmmrwOt.addAdmin.call(addressYrCpFwP, {from: accounts[3]});

		assert.equal(uint256m0Xzx7p, BigInt("0"))
		await expect(NALkmmrwOt.removeAdmin.call(addressXGwIncr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const addressVvXt14U = accounts[2]
		const boolipsyHpJ = await NALkmmrwOt.freezeAccount.call(addressVvXt14U, {from: accounts[0]});
		await NALkmmrwOt.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolipsyHpJ, true)
		await expect(NALkmmrwOt.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALN8gpkEV = await NAL.new({from: accounts[1]});
		const addressghXVsms = accounts[5]
		const uint256KydThho = await NALN8gpkEV.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bzTOhlR = await NALN8gpkEV.balanceOf.call(addressghXVsms, {from: accounts[2]});
		const stringXZDNVf = await NALN8gpkEV.symbol.call({from: accounts[5]});

		assert.equal(stringXZDNVf, "NAL")
		assert.equal(uint256KydThho, BigInt("2000000000000000000000000000"))
		assert.equal(uint256bzTOhlR, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALkmmrwOt = await NAL.new({from: accounts[0]});
		const addressmTaWpCK = accounts[2]
		const addressWF1ICc = accounts[1]
		const uintF7q5juO = BigInt("20")
		const addressACRGrq2 = accounts[4]
		const uintWECcqr = BigInt("1356")
		const addressHIuLuK = accounts[4]
		const addressXoBgzrq = accounts[0]
		const boolnOWMC3s = await NALkmmrwOt.unfreezeAccount.call(addressmTaWpCK, {from: accounts[0]});
		const boold6y2i73 = await NALkmmrwOt.freezeAccount.call(addressWF1ICc, {from: accounts[1]});
		const booleu1AEBo = await NALkmmrwOt.transfer.call(addressACRGrq2, uintF7q5juO, {from: accounts[1]});
		const boolqEqUKAU = await NALkmmrwOt.transferFrom.call(addressXoBgzrq, addressHIuLuK, uintWECcqr, {from: accounts[3]});

		await expect(NALkmmrwOt.unfreezeAccount.call(addressmTaWpCK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})