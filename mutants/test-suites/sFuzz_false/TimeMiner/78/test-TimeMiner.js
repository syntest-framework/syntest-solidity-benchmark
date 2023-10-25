const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerVXs0Q4l = await TimeMiner.new({from: accounts[0]});
		const addresscn9NlAm = accounts[2]
		const boolupOrMrv = true
		const addressk2w1e3r = accounts[0]
		const uintw1ZY3Zx = BigInt("391")
		const addressftdxdjo = accounts[5]
		const boolDnarGmM = await TimeMinerVXs0Q4l.isWhitelisted.call(addresscn9NlAm, {from: "0x0000000000000000000000000000000000000001"});
//		const addressqGoiGA = await TimeMinerVXs0Q4l.whitelist.call(addressk2w1e3r, boolupOrMrv, {from: accounts[2]});
//		const boolvKGEgP0 = await TimeMinerVXs0Q4l.transfer.call(addressftdxdjo, uintw1ZY3Zx, {from: accounts[0]});

		assert.equal(boolDnarGmM, false)
		await expect(TimeMinerVXs0Q4l.whitelist.call(addressk2w1e3r, boolupOrMrv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerHfa9U4G = await TimeMiner.new({from: accounts[4]});
		const uintpRKJT2f = BigInt("1611")
		const addressLHj2uO4 = accounts[2]
		const uintBXtBUAg = BigInt("1470")
		const uintVyuCgs7 = BigInt("145")
		const boolGR1J2gr = true
		const addressU94Rhh = accounts[2]
		const boolZukg6wp = false
		const addressc7sM00 = "0x0000000000000000000000000000000000000001"
//		const uint256MToj5Tm = await TimeMinerHfa9U4G.changePreSalePriceIfToHigh.call(uintpRKJT2f, {from: accounts[0]});
//		const uint256lNZ0a1F = await TimeMinerHfa9U4G.balanceOf.call(addressLHj2uO4, {from: accounts[1]});
//		const uint256cMMxUrE = await TimeMinerHfa9U4G.setPrizeFromNewAddress.call(uintVyuCgs7, uintBXtBUAg, {from: accounts[0]});
//		const addressCQTioMT = await TimeMinerHfa9U4G.whitelist.call(addressU94Rhh, boolGR1J2gr, {from: accounts[0]});
//		const addressphDYlSc = await TimeMinerHfa9U4G.whitelist.call(addressc7sM00, boolZukg6wp, {from: accounts[3]});

		await expect(TimeMinerHfa9U4G.changePreSalePriceIfToHigh.call(uintpRKJT2f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinergJz3zAU = await TimeMiner.new({from: accounts[2]});
		const uintFjUISU = BigInt("1565")
		const addressu55vl6b = accounts[4]
		const uintobonTBQ = BigInt("2015")
		const addressFvipWJQ = "0x0000000000000000000000000000000000000001"
		const uintimGmiCV = BigInt("1367")
		const uintHd2MlXL = BigInt("1683")
		const addressHVO9YqR = accounts[3]
//		const booleppYkn9 = await TimeMinergJz3zAU.transfer.call(addressu55vl6b, uintFjUISU, {from: accounts[1]});
//		const uint256jyVUzH = await TimeMinergJz3zAU.changePreSalePriceIfToHigh.call(uintobonTBQ, {from: accounts[0]});
//		const boolv89VnrT = await TimeMinergJz3zAU.isWhitelisted.call(addressFvipWJQ, {from: accounts[2]});
//		const uint256Jo36xWK = await TimeMinergJz3zAU.setPrizeFromNewAddress.call(uintHd2MlXL, uintimGmiCV, {from: accounts[1]});
//		const boolv9tChl = await TimeMinergJz3zAU.isWhitelisted.call(addressHVO9YqR, {from: accounts[3]});

		await expect(TimeMinergJz3zAU.transfer.call(addressu55vl6b, uintFjUISU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerX1QlEl = await TimeMiner.new({from: accounts[1]});
		const uintGzm10DP = BigInt("410")
		const addressQubp5br = accounts[2]
		const addresskSEoYs4 = accounts[2]
		const boolxblCzmh = true
		const addressFkW4aXb = accounts[2]
		const uint256GmX0WqN = await TimeMinerX1QlEl.totalSupply.call({from: accounts[3]});
		const boolPt3QuUl = await TimeMinerX1QlEl.approve.call(addressQubp5br, uintGzm10DP, {from: accounts[0]});
//		const uint256OqAnRtv = await TimeMinerX1QlEl.tokensToClaim.call(addresskSEoYs4, {from: accounts[5]});
//		const addressPMd0f5A = await TimeMinerX1QlEl.whitelist.call(addressFkW4aXb, boolxblCzmh, {from: accounts[0]});
//		await TimeMinerX1QlEl.preSaleFinished.call({from: accounts[4]});

		assert.equal(boolPt3QuUl, true)
		assert.equal(uint256GmX0WqN, BigInt("24000000"))
		await expect(TimeMinerX1QlEl.tokensToClaim.call(addresskSEoYs4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineriAo9WAh = await TimeMiner.new({from: accounts[0]});
		const addressApf1Gd9 = accounts[0]
		const uintl6OAkas = BigInt("747")
		const addressKEyjqVz = accounts[0]
		const uint256dmSVfFS = await TimeMineriAo9WAh.allInfoFor.call(addressApf1Gd9, {from: accounts[1]});
//		const uintW45C1hj = await TimeMineriAo9WAh.preSale.call(uintl6OAkas, {from: accounts[1]});
//		const boolk5vk2Ny = await TimeMineriAo9WAh.isWhitelisted.call(addressKEyjqVz, {from: accounts[1]});

		await expect(TimeMineriAo9WAh.preSale.call(uintl6OAkas, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinersJ1VXJI = await TimeMiner.new({from: accounts[0]});
		const uintIMRRfOc = BigInt("968")
		const addresst10Hou = accounts[4]
		const addressC5Li0Us = accounts[4]
		const uintlZxgEI8 = BigInt("110")
		const uintmAgwrzS = BigInt("1841")
		const boolTwItAk = false
		const addresskIJkSdJ = accounts[0]
		const uinttbqdSl2 = BigInt("1862")
		const uintg1F8AEx = BigInt("1887")
		const bool3KXrUW = await TimeMinersJ1VXJI.transfer.call(addresst10Hou, uintIMRRfOc, {from: accounts[0]});
		const uint256xhprFY0 = await TimeMinersJ1VXJI.balanceOf.call(addressC5Li0Us, {from: accounts[2]});
		const uint256gI6pfPL = await TimeMinersJ1VXJI.setPrizeFromNewAddress.call(uintmAgwrzS, uintlZxgEI8, {from: accounts[0]});
//		const boolRnN0nyT = await TimeMinersJ1VXJI.setStableCoinSystem.call(boolTwItAk, {from: accounts[1]});
//		const uint256MeVo7KB = await TimeMinersJ1VXJI.balanceOf.call(addresskIJkSdJ, {from: accounts[1]});
//		const uint256jKCinJC = await TimeMinersJ1VXJI.setPrizeFromNewAddress.call(uintg1F8AEx, uinttbqdSl2, {from: accounts[4]});

		assert.equal(bool3KXrUW, true)
		assert.equal(uint256xhprFY0, BigInt("0"))
		await expect(TimeMinersJ1VXJI.setStableCoinSystem.call(boolTwItAk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDMug1eR = await TimeMiner.new({from: accounts[4]});
		const addressrQCPQm7 = accounts[1]
//		await TimeMinerDMug1eR.preSaleFinished.call({from: accounts[3]});
//		const boolPbOeYSI = await TimeMinerDMug1eR.isWhitelisted.call(addressrQCPQm7, {from: accounts[3]});
//		await TimeMinerDMug1eR.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerDMug1eR.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerKDrlh0e = await TimeMiner.new({from: accounts[4]});
		const addressrkzy2s6 = accounts[1]
		const addressYHahZQS = accounts[1]
		const addressMvkAon = accounts[4]
		const addressV62DcQW = accounts[0]
		const uint256xMf6tWk = await TimeMinerKDrlh0e.allowance.call(addressYHahZQS, addressrkzy2s6, {from: accounts[0]});
		const boolsvOpZIh = await TimeMinerKDrlh0e.isWhitelisted.call(addressMvkAon, {from: accounts[5]});
		const uint256ldY5XnM = await TimeMinerKDrlh0e.balanceOfTokenCirculation.call(addressV62DcQW, {from: accounts[3]});

		assert.equal(boolsvOpZIh, true)
		assert.equal(uint256ldY5XnM, BigInt("0"))
		assert.equal(uint256xMf6tWk, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerKDrlh0e = await TimeMiner.new({from: accounts[4]});
		const addresscq5gYV = accounts[1]
		const addressrFnWnXP = accounts[4]
		const boolfxNvuw = await TimeMinerKDrlh0e.isWhitelisted.call(addresscq5gYV, {from: accounts[4]});
		const boolj08cz2V = await TimeMinerKDrlh0e.infoStableSystem.call({from: accounts[4]});
		const boolsvOpZIh = await TimeMinerKDrlh0e.isWhitelisted.call(addressrFnWnXP, {from: accounts[5]});

		assert.equal(boolfxNvuw, false)
		assert.equal(boolsvOpZIh, true)
	});

	it('test for TimeMiner', async () => {
		const TimeMinerKDrlh0e = await TimeMiner.new({from: accounts[4]});
		const addressA66zH9X = accounts[4]
		const boolsvOpZIh = await TimeMinerKDrlh0e.isWhitelisted.call(addressA66zH9X, {from: accounts[5]});
//		await TimeMinerKDrlh0e.preSaleFinished.call({from: accounts[4]});

		assert.equal(boolsvOpZIh, true)
		await expect(TimeMinerKDrlh0e.preSaleFinished.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner0Lh5jn = await TimeMiner.new({from: accounts[3]});
		const uintT31iQve = BigInt("1502")
		const addressG81njxa = accounts[0]
		const addressIoSRtNI = accounts[0]
		const uintDRMloPr = BigInt("1025")
		const uintTrPyuPf = BigInt("1347")
		const uintrgYiwEj = BigInt("1370")
		const uintNAws4J8 = BigInt("1963")
		const addressSblZ7Qj = accounts[2]
		const uintTR5o80a = BigInt("1382")
		const addressJ0qMXk = "0x0000000000000000000000000000000000000001"
		const boolNSo7hqf = await TimeMiner0Lh5jn.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolD9bSkhq = await TimeMiner0Lh5jn.transferFrom.call(addressIoSRtNI, addressG81njxa, uintT31iQve, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256yAmhdUZ = await TimeMiner0Lh5jn.setPrizeFromNewAddress.call(uintTrPyuPf, uintDRMloPr, {from: accounts[4]});
//		const uint256flO0J3R = await TimeMiner0Lh5jn.setPrizeFromNewAddress.call(uintNAws4J8, uintrgYiwEj, {from: accounts[4]});
//		const boolW2xlYcS = await TimeMiner0Lh5jn.isWhitelisted.call(addressSblZ7Qj, {from: accounts[3]});
//		const boolFDFHVOg = await TimeMiner0Lh5jn.transfer.call(addressJ0qMXk, uintTR5o80a, {from: accounts[1]});

		await expect(TimeMiner0Lh5jn.transferFrom.call(addressIoSRtNI, addressG81njxa, uintT31iQve, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYSMzrCK = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscjFQgg4 = accounts[3]
		const addressUKIp4TG = accounts[2]
		const addresspUZ2S2F = accounts[2]
		const addressXMmNeFL = accounts[2]
		const boolWGDwB5L = await TimeMinerYSMzrCK.isWhitelisted.call(addresscjFQgg4, {from: accounts[3]});
		const uint256E3gxOZW = await TimeMinerYSMzrCK.allInfoFor.call(addressUKIp4TG, {from: "0x0000000000000000000000000000000000000001"});
		const boolpk0PDrh = await TimeMinerYSMzrCK.infoStableSystem.call({from: accounts[3]});
		const uint256kYnbb2x = await TimeMinerYSMzrCK.balanceOfTokenCirculation.call(addresspUZ2S2F, {from: accounts[3]});
		const boolgLb9yqR = await TimeMinerYSMzrCK.isWhitelisted.call(addressXMmNeFL, {from: accounts[3]});
	});
})