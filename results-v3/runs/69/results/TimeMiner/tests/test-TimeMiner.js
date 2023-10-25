const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinertSZgJqT = await TimeMiner.new({from: accounts[2]});
		const uintpgqDiPr = BigInt("59")
		const addressknXc4W = accounts[5]
		const booljde6EEO = false
		const addresssdpblLS = "0x0000000000000000000000000000000000000001"
		const boolvkQiufg = await TimeMinertSZgJqT.infoStableSystem.call({from: accounts[3]});
		const boolDCEviri = await TimeMinertSZgJqT.transfer.call(addressknXc4W, uintpgqDiPr, {from: accounts[5]});
		const addressNTKHjC1 = await TimeMinertSZgJqT.whitelist.call(addresssdpblLS, booljde6EEO, {from: accounts[1]});
		await TimeMinertSZgJqT.preSaleFinished.call({from: accounts[4]});

		await expect(TimeMinertSZgJqT.transfer.call(addressknXc4W, uintpgqDiPr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinercPHSfs9 = await TimeMiner.new({from: accounts[2]});
		const boolTKON6hJ = false
		const addressd0qnraL = accounts[4]
		const uintb6hEXah = BigInt("404")
		const uintMdhI0ni = BigInt("934")
		const address3Hul2V = await TimeMinercPHSfs9.whitelist.call(addressd0qnraL, boolTKON6hJ, {from: accounts[0]});
		const uint256SWA5CfH = await TimeMinercPHSfs9.setPrizeFromNewAddress.call(uintMdhI0ni, uintb6hEXah, {from: accounts[3]});

		await expect(TimeMinercPHSfs9.whitelist.call(addressd0qnraL, boolTKON6hJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerHPEk7Rn = await TimeMiner.new({from: accounts[2]});
		const addressC444SD = accounts[4]
		const uintNr2uB3r = BigInt("559")
		const addressCFePWux = accounts[0]
		const addressH9Iv8KS = accounts[2]
		const boolTwg4l11 = await TimeMinerHPEk7Rn.infoStableSystem.call({from: accounts[3]});
		const uint256MLbXAIX = await TimeMinerHPEk7Rn.allInfoFor.call(addressC444SD, {from: accounts[5]});
		const boolDcD50cR = await TimeMinerHPEk7Rn.infoStableSystem.call({from: accounts[1]});
		const boolUGFgvaf = await TimeMinerHPEk7Rn.transferFrom.call(addressH9Iv8KS, addressCFePWux, uintNr2uB3r, {from: accounts[1]});
		const uint256b1u3aNi = await TimeMinerHPEk7Rn.totalSupply.call({from: accounts[2]});

		await expect(TimeMinerHPEk7Rn.allInfoFor.call(addressC444SD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhPpohkt = await TimeMiner.new({from: accounts[2]});
		const uintBCm3ect = BigInt("869")
		const uintknoHGl9 = BigInt("207")
		const uintaZ1COQG = BigInt("594")
		const addressjJKRb8D = accounts[3]
		const addressoXJbFeR = accounts[0]
		const uint256ZK1eX7i = await TimeMinerhPpohkt.setPrizeFromNewAddress.call(uintknoHGl9, uintBCm3ect, {from: accounts[1]});
		const boolQ58Ds5 = await TimeMinerhPpohkt.transferFrom.call(addressoXJbFeR, addressjJKRb8D, uintaZ1COQG, {from: accounts[3]});

		await expect(TimeMinerhPpohkt.setPrizeFromNewAddress.call(uintknoHGl9, uintBCm3ect, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerkUBzzaW = await TimeMiner.new({from: accounts[4]});
		const uintYnKPoM2 = BigInt("1471")
		const addressESPdJDF = accounts[1]
		const uintNvS6oC = BigInt("355")
		const addressbSJAS6j = accounts[1]
		const boolhZoW9Zc = await TimeMinerkUBzzaW.approve.call(addressESPdJDF, uintYnKPoM2, {from: accounts[1]});
		const boolvHN9Wet = await TimeMinerkUBzzaW.approve.call(addressbSJAS6j, uintNvS6oC, {from: accounts[1]});

		assert.equal(boolhZoW9Zc, true)
		assert.equal(boolvHN9Wet, true)
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlNa5HdG = await TimeMiner.new({from: accounts[3]});
		const uintjfGafMg = BigInt("1765")
		const addressy7psDWU = accounts[2]
		const uintBN6U4d3 = BigInt("678")
		const uintCVpwQAr = BigInt("1451")
		const uint2563qtjXq = await TimeMinerlNa5HdG.changePreSalePriceIfToHigh.call(uintjfGafMg, {from: accounts[4]});
		const uint256WFwljVm = await TimeMinerlNa5HdG.totalSupply.call({from: accounts[3]});
		const uint256AbOUKSj = await TimeMinerlNa5HdG.balanceOf.call(addressy7psDWU, {from: accounts[0]});
		const uint256zONXemc = await TimeMinerlNa5HdG.setPrizeFromNewAddress.call(uintCVpwQAr, uintBN6U4d3, {from: accounts[0]});

		await expect(TimeMinerlNa5HdG.changePreSalePriceIfToHigh.call(uintjfGafMg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJSnZwYd = await TimeMiner.new({from: accounts[3]});
		const addressqlW0Rn = accounts[3]
		const addressg6JREC9 = accounts[1]
		const uint256K3PTCBH = await TimeMinerJSnZwYd.tokensToClaim.call(addressqlW0Rn, {from: accounts[1]});
		await TimeMinerJSnZwYd.preSaleFinished.call({from: accounts[1]});
		const uint256lthW2JI = await TimeMinerJSnZwYd.allInfoFor.call(addressg6JREC9, {from: accounts[1]});

		assert.equal(uint256K3PTCBH, BigInt("12000000"))
		await expect(TimeMinerJSnZwYd.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhPpohkt = await TimeMiner.new({from: accounts[2]});
		const boolff6MkeF = false
		const uinttVYshAh = BigInt("869")
		const uintCBNH5s = BigInt("207")
		const boolWbuNjx = true
		const addressGsSBDUr = accounts[3]
		const uintjNajo0E = BigInt("429")
		const uintC7roqr0 = BigInt("214")
		const uintvnpWuu4 = BigInt("594")
		const addressyzkHIdA = accounts[3]
		const addresscSrfcxW = accounts[0]
		const boolWVHdo6d = await TimeMinerhPpohkt.setStableCoinSystem.call(boolff6MkeF, {from: accounts[0]});
		const uint256ZK1eX7i = await TimeMinerhPpohkt.setPrizeFromNewAddress.call(uintCBNH5s, uinttVYshAh, {from: accounts[1]});
		const addressSgdeIiU = await TimeMinerhPpohkt.whitelist.call(addressGsSBDUr, boolWbuNjx, {from: accounts[3]});
		const uint256YmJI3sm = await TimeMinerhPpohkt.setPrizeFromNewAddress.call(uintC7roqr0, uintjNajo0E, {from: accounts[0]});
		const boolQ58Ds5 = await TimeMinerhPpohkt.transferFrom.call(addresscSrfcxW, addressyzkHIdA, uintvnpWuu4, {from: accounts[3]});

		await expect(TimeMinerhPpohkt.setStableCoinSystem.call(boolff6MkeF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerfY3wEh3 = await TimeMiner.new({from: accounts[0]});
		const uintzcA2Xaw = BigInt("1872")
		const addressMLYLQdU = accounts[0]
		const uintx5a5Ftq = BigInt("1660")
		const boolcGbWQIV = false
		const addresshoyFnll = accounts[0]
		const addressGZfsYl = accounts[4]
		const uintMYmSD1k = await TimeMinerfY3wEh3.preSale.call(uintzcA2Xaw, {from: accounts[4]});
		const uint256kOmYIwt = await TimeMinerfY3wEh3.balanceOf.call(addressMLYLQdU, {from: accounts[3]});
		const uint256FuZKDJC = await TimeMinerfY3wEh3.changePreSalePriceIfToHigh.call(uintx5a5Ftq, {from: accounts[1]});
		const addressDXcK69e = await TimeMinerfY3wEh3.whitelist.call(addresshoyFnll, boolcGbWQIV, {from: accounts[4]});
		const uint256dY80b9f = await TimeMinerfY3wEh3.tokensToClaim.call(addressGZfsYl, {from: accounts[2]});

		await expect(TimeMinerfY3wEh3.preSale.call(uintzcA2Xaw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinercPHSfs9 = await TimeMiner.new({from: accounts[2]});
		const uintSB4Ax7 = BigInt("1669")
		const uintq9nCzJw = BigInt("1646")
		const uintKGQmjnW = BigInt("493")
		const addressaYcFWzU = accounts[2]
		const boolTKON6hJ = false
		const address7DYHIr = accounts[4]
		const uint256hVXo25E = await TimeMinercPHSfs9.setPrizeFromNewAddress.call(uintq9nCzJw, uintSB4Ax7, {from: accounts[2]});
		const boolMaNxAvF = await TimeMinercPHSfs9.approve.call(addressaYcFWzU, uintKGQmjnW, {from: accounts[5]});
		const address3Hul2V = await TimeMinercPHSfs9.whitelist.call(address7DYHIr, boolTKON6hJ, {from: accounts[0]});

		assert.equal(boolMaNxAvF, true)
		await expect(TimeMinercPHSfs9.whitelist.call(address7DYHIr, boolTKON6hJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerETRJ75X = await TimeMiner.new({from: accounts[2]});
		const addressi5MYiyW = accounts[1]
		const boologxO1Wl = false
		const addresshIlhnvc = accounts[0]
		const addressmZV0VE = accounts[1]
		const booldjWCoqW = false
		const boolEzodNqs = await TimeMinerETRJ75X.isWhitelisted.call(addressi5MYiyW, {from: accounts[5]});
		const boolG9063GD = await TimeMinerETRJ75X.setStableCoinSystem.call(boologxO1Wl, {from: accounts[4]});
		const boolWPPDynP = await TimeMinerETRJ75X.isWhitelisted.call(addresshIlhnvc, {from: "0x0000000000000000000000000000000000000001"});
		const boolqy3Kb2 = await TimeMinerETRJ75X.isWhitelisted.call(addressmZV0VE, {from: accounts[4]});
		const booloiVKGU3 = await TimeMinerETRJ75X.setStableCoinSystem.call(booldjWCoqW, {from: accounts[4]});

		assert.equal(boolEzodNqs, false)
		await expect(TimeMinerETRJ75X.setStableCoinSystem.call(boologxO1Wl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhPpohkt = await TimeMiner.new({from: accounts[2]});
		const addressGFNKG7X = accounts[2]
		const addresspnrsKU6 = accounts[0]
		const uintYA1BZOv = BigInt("869")
		const uintCC5D5J = BigInt("207")
		const uint256S8aN9j3 = await TimeMinerhPpohkt.allowance.call(addresspnrsKU6, addressGFNKG7X, {from: accounts[1]});
		const uint256ZK1eX7i = await TimeMinerhPpohkt.setPrizeFromNewAddress.call(uintCC5D5J, uintYA1BZOv, {from: accounts[1]});

		assert.equal(uint256S8aN9j3, BigInt("0"))
		await expect(TimeMinerhPpohkt.setPrizeFromNewAddress.call(uintCC5D5J, uintYA1BZOv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhPpohkt = await TimeMiner.new({from: accounts[2]});
		const uinteBoke0A = BigInt("509")
		const addressrhC4uxY = accounts[0]
		const addressKxRm5do = accounts[0]
		const booloW4fTZQ = false
		const addressPTG9pGQ = accounts[1]
		const boolff6MkeF = true
		const boolfsDL7fV = await TimeMinerhPpohkt.transferFrom.call(addressKxRm5do, addressrhC4uxY, uinteBoke0A, {from: accounts[5]});
		const address8pdSbW = await TimeMinerhPpohkt.whitelist.call(addressPTG9pGQ, booloW4fTZQ, {from: accounts[2]});
		const boolWVHdo6d = await TimeMinerhPpohkt.setStableCoinSystem.call(boolff6MkeF, {from: accounts[0]});

		await expect(TimeMinerhPpohkt.transferFrom.call(addressKxRm5do, addressrhC4uxY, uinteBoke0A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinercPHSfs9 = await TimeMiner.new({from: accounts[2]});
		const boolTIdy1XZ = true
		const addressdUFGtPd = accounts[3]
		const uintdQUXem2 = BigInt("404")
		const uintSh74TeS = BigInt("934")
		const addressVerSTz = await TimeMinercPHSfs9.whitelist.call(addressdUFGtPd, boolTIdy1XZ, {from: accounts[2]});
		const uint256SWA5CfH = await TimeMinercPHSfs9.setPrizeFromNewAddress.call(uintSh74TeS, uintdQUXem2, {from: accounts[3]});

		await expect(TimeMinercPHSfs9.setPrizeFromNewAddress.call(uintSh74TeS, uintdQUXem2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhPpohkt = await TimeMiner.new({from: accounts[2]});
		const boolIBb2IHD = true
		const uintW5oiFpb = BigInt("48")
		await TimeMinerhPpohkt.preSaleFinished.call({from: accounts[2]});
		const boolbe9HpOe = await TimeMinerhPpohkt.setStableCoinSystem.call(boolIBb2IHD, {from: accounts[0]});
		const uintBJ49lD0 = await TimeMinerhPpohkt.preSale.call(uintW5oiFpb, {from: accounts[2]});

		await expect(TimeMinerhPpohkt.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhPpohkt = await TimeMiner.new({from: accounts[2]});
		const uintwU0OPIv = BigInt("0")
		const addressASkBqxn = accounts[1]
		const addressfntqviG = accounts[0]
		const uintALK5Dqi = BigInt("1807")
		const uintb7G6Cr2 = BigInt("1353")
		const boolfsDL7fV = await TimeMinerhPpohkt.transferFrom.call(addressfntqviG, addressASkBqxn, uintwU0OPIv, {from: accounts[5]});
		const uint256OlpcvNa = await TimeMinerhPpohkt.setPrizeFromNewAddress.call(uintb7G6Cr2, uintALK5Dqi, {from: accounts[0]});

		await expect(TimeMinerhPpohkt.transferFrom.call(addressfntqviG, addressASkBqxn, uintwU0OPIv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhPpohkt = await TimeMiner.new({from: accounts[2]});
		const uintNMPmkXh = BigInt("1722")
		const addressk7J38x7 = accounts[1]
		const uintifwudmN = BigInt("49")
		const boolhoItKhG = await TimeMinerhPpohkt.transfer.call(addressk7J38x7, uintNMPmkXh, {from: accounts[2]});
		const uintBJ49lD0 = await TimeMinerhPpohkt.preSale.call(uintifwudmN, {from: accounts[2]});

		assert.equal(boolhoItKhG, true)
		await expect(TimeMinerhPpohkt.preSale.call(uintifwudmN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhPpohkt = await TimeMiner.new({from: accounts[2]});
		const boolSuQn3Q0 = true
		const boolff6MkeF = true
		const boolFCE2fl9 = await TimeMinerhPpohkt.setStableCoinSystem.call(boolSuQn3Q0, {from: accounts[2]});
		const boolWVHdo6d = await TimeMinerhPpohkt.setStableCoinSystem.call(boolff6MkeF, {from: accounts[0]});

		await expect(TimeMinerhPpohkt.setStableCoinSystem.call(boolff6MkeF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYCgi9yM = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiEYWXQc = accounts[2]
		const uintvy3rqFg = BigInt("635")
		const addressG11wFE2 = accounts[2]
		const uint256hHZWeN = await TimeMinerYCgi9yM.balanceOfTokenCirculation.call(addressiEYWXQc, {from: accounts[0]});
		const boolvUbgIL = await TimeMinerYCgi9yM.transfer.call(addressG11wFE2, uintvy3rqFg, {from: accounts[0]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhPpohkt = await TimeMiner.new({from: accounts[2]});
		const uintPyg4PSm = BigInt("1674")
		const uintg0otq1H = BigInt("680")
		const uintrpPE1Bt = BigInt("2013")
		const uintxAjPDep = BigInt("48")
		const uint25602XlTV = await TimeMinerhPpohkt.changePreSalePriceIfToHigh.call(uintPyg4PSm, {from: accounts[2]});
		const uint256q2O93J = await TimeMinerhPpohkt.setPrizeFromNewAddress.call(uintrpPE1Bt, uintg0otq1H, {from: accounts[0]});
		const uint256dCGb5j = await TimeMinerhPpohkt.totalSupply.call({from: accounts[4]});
		const uintBJ49lD0 = await TimeMinerhPpohkt.preSale.call(uintxAjPDep, {from: accounts[2]});

		await expect(TimeMinerhPpohkt.setPrizeFromNewAddress.call(uintrpPE1Bt, uintg0otq1H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})