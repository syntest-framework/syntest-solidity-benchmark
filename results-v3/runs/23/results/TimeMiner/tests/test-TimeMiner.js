const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinereCfiVue = await TimeMiner.new({from: accounts[4]});
		const uintxEZvLqx = BigInt("1756")
		const addressezyszvo = accounts[0]
		const addressW2ICUJK = accounts[3]
		const addressxhvT9oV = accounts[4]
		const boolBpW6GX = await TimeMinereCfiVue.approve.call(addressezyszvo, uintxEZvLqx, {from: accounts[0]});
		const boolWIdbhJQ = await TimeMinereCfiVue.infoStableSystem.call({from: accounts[4]});
		const uint256Nwd3pjf = await TimeMinereCfiVue.allowance.call(addressxhvT9oV, addressW2ICUJK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBpW6GX, true)
		assert.equal(uint256Nwd3pjf, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerd6YAb8g = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstM0MAYm = accounts[4]
		const addressTpYiZin = accounts[2]
		const addressWGrNCsY = accounts[1]
		const addresseSrr21E = accounts[1]
		const uintsruLOf = BigInt("846")
		const uint256jLlaSOQ = await TimeMinerd6YAb8g.balanceOf.call(addresstM0MAYm, {from: accounts[2]});
		const uint2563bSo1k = await TimeMinerd6YAb8g.balanceOf.call(addressTpYiZin, {from: accounts[3]});
		const uint256qTTAAhv = await TimeMinerd6YAb8g.balanceOfTokenCirculation.call(addressWGrNCsY, {from: accounts[2]});
		const uint256p97XGMe = await TimeMinerd6YAb8g.tokensToClaim.call(addresseSrr21E, {from: accounts[4]});
		const uintrXIv70e = await TimeMinerd6YAb8g.preSale.call(uintsruLOf, {from: accounts[5]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEFWx8gG = await TimeMiner.new({from: accounts[1]});
		const addressqxVubVG = accounts[4]
		const uint5egMsT = BigInt("2031")
		const uintoaL01YE = BigInt("570")
		const uintFF7fxG = BigInt("384")
		const uintRh62nge = BigInt("394")
		const boolFgzWiBW = await TimeMinerEFWx8gG.infoStableSystem.call({from: accounts[0]});
		const uint256M3a0El = await TimeMinerEFWx8gG.tokensToClaim.call(addressqxVubVG, {from: accounts[1]});
		const uint256J32kb3O = await TimeMinerEFWx8gG.setPrizeFromNewAddress.call(uintoaL01YE, uint5egMsT, {from: accounts[4]});
		const uint256SU6AzHl = await TimeMinerEFWx8gG.setPrizeFromNewAddress.call(uintRh62nge, uintFF7fxG, {from: accounts[1]});

		await expect(TimeMinerEFWx8gG.tokensToClaim.call(addressqxVubVG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner8B7pxA = await TimeMiner.new({from: accounts[0]});
		const uintQkf2Miy = BigInt("664")
		const boolPKd8bUq = true
		const addresszKv42Yb = accounts[2]
		const uinttPmZxGj = await TimeMiner8B7pxA.preSale.call(uintQkf2Miy, {from: accounts[3]});
		const uint256Gzmjq9f = await TimeMiner8B7pxA.totalSupply.call({from: accounts[1]});
		const addresskGxKn3i = await TimeMiner8B7pxA.whitelist.call(addresszKv42Yb, boolPKd8bUq, {from: accounts[3]});

		await expect(TimeMiner8B7pxA.preSale.call(uintQkf2Miy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineri7CMoUX = await TimeMiner.new({from: accounts[3]});
		const uintP6sTOsM = BigInt("931")
		const addressX1nxM31 = "0x0000000000000000000000000000000000000001"
		const addressao0dRxP = accounts[2]
		const uintyNFxmwV = BigInt("1785")
		const addressUICTL9D = accounts[4]
		const addressNabeLna = accounts[0]
		const boolT2YlWwI = await TimeMineri7CMoUX.transferFrom.call(addressao0dRxP, addressX1nxM31, uintP6sTOsM, {from: "0x0000000000000000000000000000000000000001"});
		const boolfGlLf1f = await TimeMineri7CMoUX.approve.call(addressUICTL9D, uintyNFxmwV, {from: accounts[2]});
		const uint256AzDk44M = await TimeMineri7CMoUX.allInfoFor.call(addressNabeLna, {from: accounts[1]});

		await expect(TimeMineri7CMoUX.transferFrom.call(addressao0dRxP, addressX1nxM31, uintP6sTOsM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerfHcgcR = await TimeMiner.new({from: accounts[0]});
		const uintihq5LHT = BigInt("910")
		const addressZsD6Uq0 = accounts[1]
		const addresszJyoxD = accounts[0]
		const uint256oe58GTD = await TimeMinerfHcgcR.totalSupply.call({from: accounts[3]});
		const boolGGZVEre = await TimeMinerfHcgcR.transfer.call(addressZsD6Uq0, uintihq5LHT, {from: accounts[0]});
		const uint256hTMzcy6 = await TimeMinerfHcgcR.balanceOfTokenCirculation.call(addresszJyoxD, {from: accounts[1]});

		assert.equal(boolGGZVEre, true)
		assert.equal(uint256hTMzcy6, BigInt("24000000"))
		assert.equal(uint256oe58GTD, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerHwRC1OV = await TimeMiner.new({from: accounts[4]});
		const uintqx6UX4 = BigInt("832")
		const uint1VZjDP = BigInt("1097")
		const uinta9iXqUc = BigInt("895")
		const uintA6453aP = BigInt("962")
		const boolHWMhCO = true
		const addressj5GrrEx = accounts[0]
		const uint256DIlMKg = await TimeMinerHwRC1OV.setPrizeFromNewAddress.call(uint1VZjDP, uintqx6UX4, {from: accounts[4]});
		const uint256a5FLMoO = await TimeMinerHwRC1OV.setPrizeFromNewAddress.call(uintA6453aP, uinta9iXqUc, {from: accounts[2]});
		const uint256z6Rd4V = await TimeMinerHwRC1OV.totalSupply.call({from: accounts[0]});
		const boollpG90nL = await TimeMinerHwRC1OV.setStableCoinSystem.call(boolHWMhCO, {from: accounts[4]});
		const uint256jBbR7F = await TimeMinerHwRC1OV.allInfoFor.call(addressj5GrrEx, {from: accounts[4]});

		await expect(TimeMinerHwRC1OV.setPrizeFromNewAddress.call(uintA6453aP, uinta9iXqUc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinergLtHCrO = await TimeMiner.new({from: accounts[0]});
		const addressPEVoq7 = accounts[4]
		const addressciPm7oY = accounts[3]
		const boolbzOtz7b = false
		const addresszEud1kr = accounts[4]
		const uint256aWb8D2O = await TimeMinergLtHCrO.totalSupply.call({from: accounts[1]});
		const uint256csjvQN = await TimeMinergLtHCrO.allowance.call(addressciPm7oY, addressPEVoq7, {from: accounts[3]});
		const booluUuglV0 = await TimeMinergLtHCrO.setStableCoinSystem.call(boolbzOtz7b, {from: accounts[0]});
		const uint256y4uvMas = await TimeMinergLtHCrO.balanceOfTokenCirculation.call(addresszEud1kr, {from: accounts[3]});

		assert.equal(uint256aWb8D2O, BigInt("24000000"))
		assert.equal(uint256csjvQN, BigInt("0"))
		assert.equal(uint256y4uvMas, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerfHcgcR = await TimeMiner.new({from: accounts[0]});
		const uintoaYGyBH = BigInt("904")
		const addressYk7PmLB = accounts[1]
		const uintyZVAyxD = BigInt("1895")
		const addresslrW0P6f = accounts[4]
		const boolrzsl4qv = true
		const addressbhl9kyE = accounts[1]
		const addressAfOKWLy = accounts[0]
		const uint256oe58GTD = await TimeMinerfHcgcR.totalSupply.call({from: accounts[3]});
		const boolGGZVEre = await TimeMinerfHcgcR.transfer.call(addressYk7PmLB, uintoaYGyBH, {from: accounts[0]});
		const booll1XwXYX = await TimeMinerfHcgcR.approve.call(addresslrW0P6f, uintyZVAyxD, {from: accounts[2]});
		const addressPiZd2bU = await TimeMinerfHcgcR.whitelist.call(addressbhl9kyE, boolrzsl4qv, {from: accounts[3]});
		const uint256hTMzcy6 = await TimeMinerfHcgcR.balanceOfTokenCirculation.call(addressAfOKWLy, {from: accounts[1]});

		assert.equal(boolGGZVEre, true)
		assert.equal(booll1XwXYX, true)
		assert.equal(uint256oe58GTD, BigInt("24000000"))
		await expect(TimeMinerfHcgcR.whitelist.call(addressbhl9kyE, boolrzsl4qv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinergLtHCrO = await TimeMiner.new({from: accounts[0]});
		const addresstg2cR0p = accounts[5]
		const addresspGCcaxB = accounts[3]
		const addressEDWENN = accounts[4]
		const boolbzOtz7b = false
		const uint256aWb8D2O = await TimeMinergLtHCrO.totalSupply.call({from: accounts[1]});
		const uint256csjvQN = await TimeMinergLtHCrO.allowance.call(addresspGCcaxB, addresstg2cR0p, {from: accounts[3]});
		const boolVW2jrVG = await TimeMinergLtHCrO.isWhitelisted.call(addressEDWENN, {from: accounts[5]});
		const booluUuglV0 = await TimeMinergLtHCrO.setStableCoinSystem.call(boolbzOtz7b, {from: accounts[0]});

		assert.equal(boolVW2jrVG, false)
		assert.equal(uint256aWb8D2O, BigInt("24000000"))
		assert.equal(uint256csjvQN, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlsOeJuu = await TimeMiner.new({from: accounts[3]});
		const boolGMQ93Cm = true
		const addressofWKtSd = accounts[2]
		const addressPRzEKSy = accounts[2]
		const boolcbD7qdq = false
		const addressO1MIgif = accounts[1]
		const uintyDz82j = BigInt("606")
		const addressg6uWtAY = await TimeMinerlsOeJuu.whitelist.call(addressofWKtSd, boolGMQ93Cm, {from: accounts[3]});
		const uint256fkDJ3pX = await TimeMinerlsOeJuu.allInfoFor.call(addressPRzEKSy, {from: accounts[1]});
		const addressclms4F = await TimeMinerlsOeJuu.whitelist.call(addressO1MIgif, boolcbD7qdq, {from: accounts[3]});
		const uint256pyISVOi = await TimeMinerlsOeJuu.changePreSalePriceIfToHigh.call(uintyDz82j, {from: accounts[3]});

		await expect(TimeMinerlsOeJuu.allInfoFor.call(addressPRzEKSy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhHOC54P = await TimeMiner.new({from: accounts[5]});
		const addressghg8Xas = accounts[2]
		const bools0KXpx9 = false
		const addressxjmuzdY = accounts[5]
		const uint4uG7M1 = BigInt("1801")
		const addressFSqfk6n = accounts[2]
		const addressB1cFRsp = accounts[4]
		await TimeMinerhHOC54P.preSaleFinished.call({from: accounts[3]});
		const uint256NjsI28 = await TimeMinerhHOC54P.tokensToClaim.call(addressghg8Xas, {from: accounts[3]});
		const addresslkrGlS8 = await TimeMinerhHOC54P.whitelist.call(addressxjmuzdY, bools0KXpx9, {from: accounts[3]});
		const boolvXKRDcK = await TimeMinerhHOC54P.approve.call(addressFSqfk6n, uint4uG7M1, {from: accounts[2]});
		const uint256ugSxZhR = await TimeMinerhHOC54P.allInfoFor.call(addressB1cFRsp, {from: accounts[4]});

		await expect(TimeMinerhHOC54P.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerfHcgcR = await TimeMiner.new({from: accounts[0]});
		const uintDWso5yg = BigInt("984")
		const uintBp4vkIJ = BigInt("910")
		const addressKJg1oRD = accounts[2]
		const addressLURQAz = accounts[0]
		const uint256oe58GTD = await TimeMinerfHcgcR.totalSupply.call({from: accounts[3]});
		const uint256QxVnzzs = await TimeMinerfHcgcR.changePreSalePriceIfToHigh.call(uintDWso5yg, {from: accounts[4]});
		const boolGGZVEre = await TimeMinerfHcgcR.transfer.call(addressKJg1oRD, uintBp4vkIJ, {from: accounts[0]});
		const uint256XrddLn7 = await TimeMinerfHcgcR.totalSupply.call({from: accounts[3]});
		const uint256hTMzcy6 = await TimeMinerfHcgcR.balanceOfTokenCirculation.call(addressLURQAz, {from: accounts[1]});

		assert.equal(uint256oe58GTD, BigInt("24000000"))
		await expect(TimeMinerfHcgcR.changePreSalePriceIfToHigh.call(uintDWso5yg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerfHcgcR = await TimeMiner.new({from: accounts[0]});
		const uintNRfDMmW = BigInt("1906")
		const addressoBCpqH = accounts[1]
		const uintPSFWrQa = BigInt("498")
		const addressrOFSHoz = accounts[0]
		const uintiShUpP0 = BigInt("1704")
		const addressVAoBbjJ = accounts[3]
		const addresshAeil1l = accounts[3]
		const uintjqxwWNU = BigInt("910")
		const addressnOZKj9x = accounts[1]
		const addressSDKkpaF = accounts[1]
		const boolTIT2ZwK = false
		const addressPmWe8yx = accounts[2]
		const uint256oe58GTD = await TimeMinerfHcgcR.totalSupply.call({from: accounts[3]});
		const boolIKPk3BZ = await TimeMinerfHcgcR.approve.call(addressoBCpqH, uintNRfDMmW, {from: accounts[0]});
		const boolkfjiVPj = await TimeMinerfHcgcR.transfer.call(addressrOFSHoz, uintPSFWrQa, {from: accounts[0]});
		const boolsONjtCv = await TimeMinerfHcgcR.transferFrom.call(addresshAeil1l, addressVAoBbjJ, uintiShUpP0, {from: "0x0000000000000000000000000000000000000001"});
		const boolGGZVEre = await TimeMinerfHcgcR.transfer.call(addressnOZKj9x, uintjqxwWNU, {from: accounts[0]});
		const uint256hTMzcy6 = await TimeMinerfHcgcR.balanceOfTokenCirculation.call(addressSDKkpaF, {from: accounts[1]});
		const addressIK8pG7B = await TimeMinerfHcgcR.whitelist.call(addressPmWe8yx, boolTIT2ZwK, {from: accounts[2]});

		assert.equal(boolIKPk3BZ, true)
		assert.equal(boolkfjiVPj, true)
		assert.equal(uint256oe58GTD, BigInt("24000000"))
		await expect(TimeMinerfHcgcR.transferFrom.call(addresshAeil1l, addressVAoBbjJ, uintiShUpP0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})