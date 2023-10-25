const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMineryBhSbXR = await TimeMiner.new({from: accounts[0]});
		const uintoPoT2cp = BigInt("1679")
		const addressyR6g4Wj = accounts[3]
		const uint2560KYZne = await TimeMineryBhSbXR.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTw5coEH = await TimeMineryBhSbXR.transfer.call(addressyR6g4Wj, uintoPoT2cp, {from: accounts[0]});
		const uint256Mz35iW8 = await TimeMineryBhSbXR.totalSupply.call({from: accounts[3]});
		await TimeMineryBhSbXR.preSaleFinished.call({from: accounts[3]});
		await TimeMineryBhSbXR.preSaleFinished.call({from: accounts[0]});

		assert.equal(boolTw5coEH, true)
		assert.equal(uint2560KYZne, BigInt("24000000"))
		assert.equal(uint256Mz35iW8, BigInt("24000000"))
		await expect(TimeMineryBhSbXR.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCFhYZ3k = await TimeMiner.new({from: accounts[5]});
		const addressPP7t6xl = accounts[2]
		const addressXbZPmTx = accounts[2]
		const uintFogtB04 = BigInt("2013")
		const addresszvGfciW = accounts[2]
		const addressq3I0d1N = accounts[0]
		const addressBgILcHD = accounts[0]
		const addressV7aXeXb = accounts[5]
		const uint256K1vhciE = await TimeMinerCFhYZ3k.allowance.call(addressXbZPmTx, addressPP7t6xl, {from: accounts[1]});
		const boolNrT6MA = await TimeMinerCFhYZ3k.transfer.call(addresszvGfciW, uintFogtB04, {from: accounts[3]});
		const uint256YRwYLpB = await TimeMinerCFhYZ3k.tokensToClaim.call(addressq3I0d1N, {from: accounts[3]});
		const uint256hDRF5fn = await TimeMinerCFhYZ3k.allowance.call(addressV7aXeXb, addressBgILcHD, {from: accounts[1]});

		assert.equal(uint256K1vhciE, BigInt("0"))
		await expect(TimeMinerCFhYZ3k.transfer.call(addresszvGfciW, uintFogtB04, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerUa3G0pP = await TimeMiner.new({from: accounts[1]});
		const addressucY1KjR = accounts[0]
		const addressxSFuaZl = accounts[3]
		const uintcxV93xs = BigInt("130")
		const uintb7OUocd = BigInt("2014")
		const boolnyU4Vs = true
		const addressDf45kO = accounts[0]
		const uint256MfWoHe1 = await TimeMinerUa3G0pP.allInfoFor.call(addressucY1KjR, {from: accounts[1]});
		const uint256jHhLFcE = await TimeMinerUa3G0pP.balanceOfTokenCirculation.call(addressxSFuaZl, {from: accounts[0]});
		const uint256FzndlYc = await TimeMinerUa3G0pP.setPrizeFromNewAddress.call(uintb7OUocd, uintcxV93xs, {from: accounts[3]});
		const addressr9IPIPr = await TimeMinerUa3G0pP.whitelist.call(addressDf45kO, boolnyU4Vs, {from: accounts[4]});

		await expect(TimeMinerUa3G0pP.allInfoFor.call(addressucY1KjR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbdCnyMS = await TimeMiner.new({from: accounts[3]});
		const addressFplMeVt = accounts[1]
		const addresszgEufKJ = accounts[1]
		const uintFqE1Gks = BigInt("1981")
		const uintyQLA7DI = BigInt("173")
		const addressLMUHsaQ = accounts[4]
		const addressFyBc4De = accounts[0]
		const uint256Gus9n5C = await TimeMinerbdCnyMS.balanceOfTokenCirculation.call(addressFplMeVt, {from: accounts[3]});
		const boolv0J72Ck = await TimeMinerbdCnyMS.isWhitelisted.call(addresszgEufKJ, {from: accounts[2]});
		const uint256di09A4L = await TimeMinerbdCnyMS.changePreSalePriceIfToHigh.call(uintFqE1Gks, {from: accounts[3]});
		const boolNKoX8K6 = await TimeMinerbdCnyMS.transferFrom.call(addressFyBc4De, addressLMUHsaQ, uintyQLA7DI, {from: accounts[1]});

		assert.equal(boolv0J72Ck, false)
		assert.equal(uint256Gus9n5C, BigInt("0"))
		await expect(TimeMinerbdCnyMS.transferFrom.call(addressFyBc4De, addressLMUHsaQ, uintyQLA7DI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhaewME = await TimeMiner.new({from: accounts[3]});
		const boolOhRVe5d = false
		const addressWloYYdP = accounts[1]
		const uintRJOYat = BigInt("1259")
		const uint4bQNzY = BigInt("1450")
		const boolLWsLlgH = false
		const addressEP17vOR = accounts[2]
		const addresszFkwWiQ = accounts[0]
		const addressxFumYlr = await TimeMinerhaewME.whitelist.call(addressWloYYdP, boolOhRVe5d, {from: accounts[1]});
		const uint256abPZYfQ = await TimeMinerhaewME.setPrizeFromNewAddress.call(uint4bQNzY, uintRJOYat, {from: accounts[0]});
		const boolZFuxuMk = await TimeMinerhaewME.setStableCoinSystem.call(boolLWsLlgH, {from: accounts[3]});
		const uint256EVgVS6K = await TimeMinerhaewME.balanceOfTokenCirculation.call(addressEP17vOR, {from: accounts[0]});
		const uint256BuRZmDB = await TimeMinerhaewME.balanceOf.call(addresszFkwWiQ, {from: accounts[2]});

		await expect(TimeMinerhaewME.whitelist.call(addressWloYYdP, boolOhRVe5d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerWq0OVa3 = await TimeMiner.new({from: accounts[2]});
		const uintSqB3nh1 = BigInt("661")
		const uintEnFXvu = BigInt("310")
		const boolicHSUcv = false
		const addressk9iC3Sj = accounts[5]
		const addressrKfjywu = accounts[2]
		const boolBGVr8A = false
		const uint256RaBMj90 = await TimeMinerWq0OVa3.setPrizeFromNewAddress.call(uintEnFXvu, uintSqB3nh1, {from: "0x0000000000000000000000000000000000000001"});
		const addresskwi5dTh = await TimeMinerWq0OVa3.whitelist.call(addressk9iC3Sj, boolicHSUcv, {from: accounts[1]});
		const uint256doSV7Ey = await TimeMinerWq0OVa3.totalSupply.call({from: accounts[1]});
		const uint256hb7cbLX = await TimeMinerWq0OVa3.balanceOfTokenCirculation.call(addressrKfjywu, {from: accounts[3]});
		const boolChr8s2 = await TimeMinerWq0OVa3.setStableCoinSystem.call(boolBGVr8A, {from: accounts[0]});

		await expect(TimeMinerWq0OVa3.setPrizeFromNewAddress.call(uintEnFXvu, uintSqB3nh1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCFhYZ3k = await TimeMiner.new({from: accounts[5]});
		const uintI0hpzvw = BigInt("1617")
		const addressoaUc5M = accounts[2]
		const addressCUIrM4z = accounts[2]
		const addressdAzCRzK = accounts[1]
		const addressIM600jT = accounts[2]
		const uintZorp5s = BigInt("2027")
		const addressoFrl0ml = accounts[2]
		const addressQtmHvo = accounts[1]
		const addressjSx7bF3 = accounts[0]
		const addressBC2UTbS = accounts[5]
		const uinti0lNgKr = await TimeMinerCFhYZ3k.preSale.call(uintI0hpzvw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K1vhciE = await TimeMinerCFhYZ3k.allowance.call(addressCUIrM4z, addressoaUc5M, {from: accounts[1]});
		const uint256xyZeXoJ = await TimeMinerCFhYZ3k.balanceOfTokenCirculation.call(addressdAzCRzK, {from: accounts[2]});
		const uint256O1ghW8c = await TimeMinerCFhYZ3k.balanceOf.call(addressIM600jT, {from: accounts[0]});
		const boolNrT6MA = await TimeMinerCFhYZ3k.transfer.call(addressoFrl0ml, uintZorp5s, {from: accounts[3]});
		const uint256YRwYLpB = await TimeMinerCFhYZ3k.tokensToClaim.call(addressQtmHvo, {from: accounts[3]});
		const uint256hDRF5fn = await TimeMinerCFhYZ3k.allowance.call(addressBC2UTbS, addressjSx7bF3, {from: accounts[1]});
		const uint256xkYQZMp = await TimeMinerCFhYZ3k.totalSupply.call({from: accounts[0]});

		await expect(TimeMinerCFhYZ3k.preSale.call(uintI0hpzvw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerX9sitVU = await TimeMiner.new({from: accounts[4]});
		const bool5CZI90 = false
		const addressPnx7CIe = accounts[3]
		const addressSy3NdVp = accounts[3]
		const boolCH11eEm = true
		const addresssKiAnd = accounts[0]
		const boolxgWFv2A = await TimeMinerX9sitVU.setStableCoinSystem.call(bool5CZI90, {from: accounts[5]});
		const uint256tSSHGwq = await TimeMinerX9sitVU.allowance.call(addressSy3NdVp, addressPnx7CIe, {from: accounts[1]});
		const boolDGnIcm = await TimeMinerX9sitVU.setStableCoinSystem.call(boolCH11eEm, {from: accounts[0]});
		const uint256kbYxAUS = await TimeMinerX9sitVU.allInfoFor.call(addresssKiAnd, {from: accounts[1]});
		const boolJk3glJg = await TimeMinerX9sitVU.infoStableSystem.call({from: accounts[1]});

		await expect(TimeMinerX9sitVU.setStableCoinSystem.call(bool5CZI90, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineryBhSbXR = await TimeMiner.new({from: accounts[0]});
		const addressHySTDnw = accounts[0]
		const uintY8R4WyP = BigInt("1453")
		const addresss06n3BB = accounts[1]
		const uintn60hvd = BigInt("1679")
		const addressOmdqVD = accounts[3]
		const uint2560KYZne = await TimeMineryBhSbXR.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YfjqcdW = await TimeMineryBhSbXR.balanceOfTokenCirculation.call(addressHySTDnw, {from: "0x0000000000000000000000000000000000000001"});
		const boolkGyl26e = await TimeMineryBhSbXR.approve.call(addresss06n3BB, uintY8R4WyP, {from: accounts[0]});
		const boolTw5coEH = await TimeMineryBhSbXR.transfer.call(addressOmdqVD, uintn60hvd, {from: accounts[0]});
		const uint256Mz35iW8 = await TimeMineryBhSbXR.totalSupply.call({from: accounts[3]});
		await TimeMineryBhSbXR.preSaleFinished.call({from: accounts[3]});
		await TimeMineryBhSbXR.preSaleFinished.call({from: accounts[0]});

		assert.equal(boolTw5coEH, true)
		assert.equal(boolkGyl26e, true)
		assert.equal(uint2560KYZne, BigInt("24000000"))
		assert.equal(uint256Mz35iW8, BigInt("24000000"))
		assert.equal(uint256YfjqcdW, BigInt("24000000"))
		await expect(TimeMineryBhSbXR.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineryBhSbXR = await TimeMiner.new({from: accounts[0]});
		const uintm4o6kmy = BigInt("1679")
		const addressyaw8wnC = accounts[3]
		const addressLArVbj = accounts[2]
		const uint2560KYZne = await TimeMineryBhSbXR.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTw5coEH = await TimeMineryBhSbXR.transfer.call(addressyaw8wnC, uintm4o6kmy, {from: accounts[0]});
		await TimeMineryBhSbXR.preSaleFinished.call({from: accounts[0]});
		const uint256TOPM15J = await TimeMineryBhSbXR.balanceOf.call(addressLArVbj, {from: accounts[2]});

		assert.equal(boolTw5coEH, true)
		assert.equal(uint2560KYZne, BigInt("24000000"))
		await expect(TimeMineryBhSbXR.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineryBhSbXR = await TimeMiner.new({from: accounts[0]});
		const uint9ohKkU = BigInt("1679")
		const addressWY6V2F6 = accounts[3]
		const uintS4RkYX9 = BigInt("1599")
		const uint2560KYZne = await TimeMineryBhSbXR.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rPOFES3 = await TimeMineryBhSbXR.totalSupply.call({from: accounts[1]});
		const boolTw5coEH = await TimeMineryBhSbXR.transfer.call(addressWY6V2F6, uint9ohKkU, {from: accounts[0]});
		const boolPjCdvMH = await TimeMineryBhSbXR.infoStableSystem.call({from: accounts[0]});
		await TimeMineryBhSbXR.preSaleFinished.call({from: accounts[3]});
		const uint256f2HrwJM = await TimeMineryBhSbXR.changePreSalePriceIfToHigh.call(uintS4RkYX9, {from: accounts[0]});
		await TimeMineryBhSbXR.preSaleFinished.call({from: accounts[0]});

		assert.equal(boolTw5coEH, true)
		assert.equal(uint2560KYZne, BigInt("24000000"))
		assert.equal(uint256rPOFES3, BigInt("24000000"))
		await expect(TimeMineryBhSbXR.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinernVFLTnF = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGH6slQ2 = BigInt("1750")
		const addressMk0xNpH = accounts[4]
		const addressN1Zf8Ui = accounts[1]
		const uintETipc7K = BigInt("1862")
		const addressTXjUbO9 = accounts[2]
		const boolskZeQ0N = false
		const addressj9Mh6C7 = accounts[3]
		const boolwmnpQgZ = await TimeMinernVFLTnF.transferFrom.call(addressN1Zf8Ui, addressMk0xNpH, uintGH6slQ2, {from: accounts[5]});
		const boolzHxcXM3 = await TimeMinernVFLTnF.approve.call(addressTXjUbO9, uintETipc7K, {from: accounts[1]});
		const boolwACFicX = await TimeMinernVFLTnF.setStableCoinSystem.call(boolskZeQ0N, {from: accounts[3]});
		const uint256jd2iHyb = await TimeMinernVFLTnF.allInfoFor.call(addressj9Mh6C7, {from: accounts[0]});
	});
})