const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakelll48sK = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const address6YBEVV = accounts[3]
		const uintkYMPUR7 = BigInt("22")
		const uintt8jLHrw = BigInt("466")
		const uint256vKtV7m6 = await CourtFarming_HTStakelll48sK.getCurrentTime.call({from: accounts[3]});
		const uint256afegUSc = await CourtFarming_HTStakelll48sK.rewards.call(address6YBEVV, {from: accounts[2]});
		const booln1vcgeS = await CourtFarming_HTStakelll48sK.stakeIncvRewards.call(uintkYMPUR7, {from: accounts[5]});
		const boolfwhWfOY = await CourtFarming_HTStakelll48sK.stakeIncvRewards.call(uintt8jLHrw, {from: accounts[0]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeC7gnpRT = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressRN3l1W7 = accounts[0]
		const addressXPiOD9P = accounts[3]
		const uint256CDTbXjq = await CourtFarming_HTStakeC7gnpRT.rewards.call(addressRN3l1W7, {from: accounts[0]});
		const uint256pSOtVkB = await CourtFarming_HTStakeC7gnpRT.getCurrentTime.call({from: accounts[5]});
		const uint256YHewHJL = await CourtFarming_HTStakeC7gnpRT.rewards.call(addressXPiOD9P, {from: accounts[0]});

		assert.equal(uint256pSOtVkB, BigInt("1630201229"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeYWbMdFn = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolYGXaSV = true
		const uinth3OkmMX = BigInt("1902")
		const uintYV6IuLQ = BigInt("84")
		const uintitJZrhu = BigInt("238")
		const uint256vwFpTGx = await CourtFarming_HTStakeYWbMdFn.lastUpdateBlock.call({from: accounts[2]});
//		const uint256mTETj9 = await CourtFarming_HTStakeYWbMdFn.unstake.call(uinth3OkmMX, boolYGXaSV, {from: accounts[4]});
//		const uint256PFPaihO = await CourtFarming_HTStakeYWbMdFn.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolbsKmcLv = await CourtFarming_HTStakeYWbMdFn.stakeIncvRewards.call(uintYV6IuLQ, {from: accounts[4]});
//		const uint256IZzmk1B = await CourtFarming_HTStakeYWbMdFn.expectedRewardsToday.call(uintitJZrhu, {from: accounts[0]});

		assert.equal(uint256vwFpTGx, BigInt("1657"))
		await expect(CourtFarming_HTStakeYWbMdFn.unstake.call(uinth3OkmMX, boolYGXaSV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakejXQlKjr = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressEIFAYnh = accounts[4]
		const uintIBZXjuq = BigInt("1430")
		const uintJsRpkoh = BigInt("1990")
		const uinthG4u7T = BigInt("306")
		const uinty5bZCqf = BigInt("348")
		const boolptctkIj = false
		const uintVUnsR9c = BigInt("43")
		const uint256RlQKzbf = await CourtFarming_HTStakejXQlKjr.rewards.call(addressEIFAYnh, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xBcMIZd = await CourtFarming_HTStakejXQlKjr.stake.call(uintIBZXjuq, {from: accounts[2]});
//		const uint256pqwiBOx = await CourtFarming_HTStakejXQlKjr.incvRewardClaim.call({from: accounts[3]});
//		await CourtFarming_HTStakejXQlKjr.changeStakeParameters.call(uinty5bZCqf, uinthG4u7T, uintJsRpkoh, {from: accounts[2]});
//		const uint256kSf4Le2 = await CourtFarming_HTStakejXQlKjr.unstake.call(uintVUnsR9c, boolptctkIj, {from: accounts[0]});

		await expect(CourtFarming_HTStakejXQlKjr.stake.call(uintIBZXjuq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakelKKDAU = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintPBkHSHm = BigInt("563")
		const uintWVI4VNF = BigInt("368")
		const uintJMBGd5v = BigInt("1530")
		const uintFjo2amu = BigInt("1549")
		const addresssZZoHSv = accounts[4]
//		await CourtFarming_HTStakelKKDAU.changeStakeParameters.call(uintJMBGd5v, uintWVI4VNF, uintPBkHSHm, {from: accounts[0]});
//		const uint256Jjz7pDJ = await CourtFarming_HTStakelKKDAU.stake.call(uintFjo2amu, {from: accounts[1]});
//		const addressIVSMmkw = await CourtFarming_HTStakelKKDAU.getBeneficiaryInfo.call(addresssZZoHSv, {from: accounts[0]});
//		const uint256NDv19vK = await CourtFarming_HTStakelKKDAU.totalStaked.call({from: accounts[2]});

		await expect(CourtFarming_HTStakelKKDAU.changeStakeParameters.call(uintJMBGd5v, uintWVI4VNF, uintPBkHSHm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakew9HuUtj = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressGkjRIpq = accounts[0]
		const addressEHY2AN2 = accounts[3]
		const addresszpmhz0K = accounts[0]
		const boolRF8paV5 = false
		const uintyn43bLC = BigInt("1636")
//		const addressKOTYAMs = await CourtFarming_HTStakew9HuUtj.setCourtStake.call(addressGkjRIpq, {from: accounts[0]});
//		const addressDzADxg = await CourtFarming_HTStakew9HuUtj.updateReward.call(addressEHY2AN2, {from: accounts[2]});
//		const addressYghqU2W = await CourtFarming_HTStakew9HuUtj.getBeneficiaryInfo.call(addresszpmhz0K, {from: accounts[3]});
//		const uint256ZsyXgyI = await CourtFarming_HTStakew9HuUtj.unstake.call(uintyn43bLC, boolRF8paV5, {from: accounts[4]});

		await expect(CourtFarming_HTStakew9HuUtj.setCourtStake.call(addressGkjRIpq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewR35NYz = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintKxV7XDB = BigInt("1685")
		const uint256cDh9xrq = await CourtFarming_HTStakewR35NYz.expectedRewardsToday.call(uintKxV7XDB, {from: accounts[1]});
		const uint256amTBQoQ = await CourtFarming_HTStakewR35NYz.incvRewardClaim.call({from: accounts[2]});
		const uint256aophduZ = await CourtFarming_HTStakewR35NYz.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zLBiHLS = await CourtFarming_HTStakewR35NYz.getCurrentTime.call({from: accounts[2]});

		assert.equal(uint256amTBQoQ, BigInt("0"))
		assert.equal(uint256aophduZ, BigInt("1630201224"))
		assert.equal(uint256zLBiHLS, BigInt("1630201224"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeC7gnpRT = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressfpPi5Jl = accounts[0]
		const addresssbF5xbl = accounts[3]
		const uint256CDTbXjq = await CourtFarming_HTStakeC7gnpRT.rewards.call(addressfpPi5Jl, {from: accounts[0]});
		const uint256VSXO9Zm = await CourtFarming_HTStakeC7gnpRT.blockNumber.call({from: accounts[1]});
		const uint256pSOtVkB = await CourtFarming_HTStakeC7gnpRT.getCurrentTime.call({from: accounts[5]});
		const uint256OBeD2ZV = await CourtFarming_HTStakeC7gnpRT.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256TN2ibTt = await CourtFarming_HTStakeC7gnpRT.lastUpdateBlock.call({from: accounts[3]});
		const uint256YHewHJL = await CourtFarming_HTStakeC7gnpRT.rewards.call(addresssbF5xbl, {from: accounts[0]});

		assert.equal(uint256TN2ibTt, BigInt("1657"))
		assert.equal(uint256VSXO9Zm, BigInt("1657"))
		assert.equal(uint256pSOtVkB, BigInt("1630201220"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeC7gnpRT = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressKOqPZrk = accounts[0]
		const uintbkVzvLm = BigInt("1075")
		const addressWq8l8vE = accounts[4]
		const uint256CDTbXjq = await CourtFarming_HTStakeC7gnpRT.rewards.call(addressKOqPZrk, {from: accounts[0]});
		const boolQoACACF = await CourtFarming_HTStakeC7gnpRT.stakeIncvRewards.call(uintbkVzvLm, {from: accounts[3]});
		const uint256pSOtVkB = await CourtFarming_HTStakeC7gnpRT.getCurrentTime.call({from: accounts[5]});
		const uint256YHewHJL = await CourtFarming_HTStakeC7gnpRT.rewards.call(addressWq8l8vE, {from: accounts[0]});

		assert.equal(boolQoACACF, false)
		assert.equal(uint256pSOtVkB, BigInt("1630201224"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewR35NYz = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintcQETUF = BigInt("1685")
		const addressMsnrFSX = accounts[0]
		const uint256cDh9xrq = await CourtFarming_HTStakewR35NYz.expectedRewardsToday.call(uintcQETUF, {from: accounts[1]});
		const uint256amTBQoQ = await CourtFarming_HTStakewR35NYz.incvRewardClaim.call({from: accounts[2]});
		const uint256VWXgyE3 = await CourtFarming_HTStakewR35NYz.balanceOf.call(addressMsnrFSX, {from: accounts[3]});
		const uint256aophduZ = await CourtFarming_HTStakewR35NYz.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zLBiHLS = await CourtFarming_HTStakewR35NYz.getCurrentTime.call({from: accounts[2]});

		assert.equal(uint256VWXgyE3, BigInt("0"))
		assert.equal(uint256amTBQoQ, BigInt("0"))
		assert.equal(uint256aophduZ, BigInt("1630201216"))
		assert.equal(uint256zLBiHLS, BigInt("1630201216"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeC7gnpRT = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressExLDVIA = accounts[3]
		const addressATboy9B = accounts[3]
		const uint256VSXO9Zm = await CourtFarming_HTStakeC7gnpRT.blockNumber.call({from: accounts[1]});
		const uint256pSOtVkB = await CourtFarming_HTStakeC7gnpRT.getCurrentTime.call({from: accounts[5]});
		const uint256xYi1nQM = await CourtFarming_HTStakeC7gnpRT.totalStaked.call({from: accounts[0]});
		const uint256OBeD2ZV = await CourtFarming_HTStakeC7gnpRT.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256TN2ibTt = await CourtFarming_HTStakeC7gnpRT.lastUpdateBlock.call({from: accounts[3]});
		const uint256WPhs68b = await CourtFarming_HTStakeC7gnpRT.rewards.call(addressExLDVIA, {from: accounts[0]});
		const uint256YHewHJL = await CourtFarming_HTStakeC7gnpRT.rewards.call(addressATboy9B, {from: accounts[0]});

		assert.equal(uint256TN2ibTt, BigInt("1657"))
		assert.equal(uint256VSXO9Zm, BigInt("1657"))
		assert.equal(uint256pSOtVkB, BigInt("1630201214"))
		assert.equal(uint256xYi1nQM, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeC7gnpRT = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressO1RVaCc = accounts[1]
		const uintJQ0FQl9 = BigInt("1237")
		const uintqAXtrEk = BigInt("403")
		const uint3IVrbo = BigInt("853")
		const uintazl4ANB = BigInt("1876")
		const addresszuqhMRA = accounts[1]
		const addressZsIGkS6 = accounts[3]
		const uint256CDTbXjq = await CourtFarming_HTStakeC7gnpRT.rewards.call(addressO1RVaCc, {from: accounts[0]});
//		const uint256YTxPHZc = await CourtFarming_HTStakeC7gnpRT._stakeParametrsCalculation.call(uint3IVrbo, uintqAXtrEk, uintJQ0FQl9, {from: accounts[2]});
//		const uint256VGS1cTP = await CourtFarming_HTStakeC7gnpRT.expectedRewardsToday.call(uintazl4ANB, {from: accounts[2]});
//		const addressiCNXXCv = await CourtFarming_HTStakeC7gnpRT.updateReward.call(addresszuqhMRA, {from: accounts[1]});
//		const uint256pSOtVkB = await CourtFarming_HTStakeC7gnpRT.getCurrentTime.call({from: accounts[5]});
//		const uint256YHewHJL = await CourtFarming_HTStakeC7gnpRT.rewards.call(addressZsIGkS6, {from: accounts[0]});

		await expect(CourtFarming_HTStakeC7gnpRT._stakeParametrsCalculation.call(uint3IVrbo, uintqAXtrEk, uintJQ0FQl9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewR35NYz = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintVydmBLo = BigInt("1685")
		const addressq9f1q04 = accounts[3]
		const addresspJswqPY = accounts[2]
		const addressa994uvC = accounts[4]
		const uint256cDh9xrq = await CourtFarming_HTStakewR35NYz.expectedRewardsToday.call(uintVydmBLo, {from: accounts[1]});
		const uint256amTBQoQ = await CourtFarming_HTStakewR35NYz.incvRewardClaim.call({from: accounts[2]});
		const uint256aophduZ = await CourtFarming_HTStakewR35NYz.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const addressmvy3Yee = await CourtFarming_HTStakewR35NYz.getBeneficiaryInfo.call(addressq9f1q04, {from: accounts[4]});
		const uint256LWV0pSq = await CourtFarming_HTStakewR35NYz.rewards.call(addresspJswqPY, {from: accounts[4]});
		const uint256sRdRh3O = await CourtFarming_HTStakewR35NYz.balanceOf.call(addressa994uvC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zLBiHLS = await CourtFarming_HTStakewR35NYz.getCurrentTime.call({from: accounts[2]});

		assert.equal(uint256amTBQoQ, BigInt("0"))
		assert.equal(uint256aophduZ, BigInt("1630201226"))
		assert.equal(uint256sRdRh3O, BigInt("0"))
		assert.equal(uint256zLBiHLS, BigInt("1630201226"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBBUHq7Y = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintDM05p1F = BigInt("641")
		const addressiBvPDwg = accounts[0]
		const booly3f2LCA = false
		const uintdMtraiS = BigInt("1931")
		const addressWHAzNri = accounts[1]
		const boolE6yZVC = await CourtFarming_HTStakeBBUHq7Y.stakeIncvRewards.call(uintDM05p1F, {from: accounts[2]});
		const uint256b3oPLpV = await CourtFarming_HTStakeBBUHq7Y.totalStaked.call({from: accounts[0]});
//		const addressgn7Qmzt = await CourtFarming_HTStakeBBUHq7Y.setCourtStake.call(addressiBvPDwg, {from: accounts[0]});
//		const uint256uirP21O = await CourtFarming_HTStakeBBUHq7Y.unstake.call(uintdMtraiS, booly3f2LCA, {from: accounts[5]});
//		const uint256ijOiIp4 = await CourtFarming_HTStakeBBUHq7Y.lastUpdateBlock.call({from: accounts[4]});
//		const uint256yyhn4Y = await CourtFarming_HTStakeBBUHq7Y.rewards.call(addressWHAzNri, {from: accounts[1]});

		assert.equal(boolE6yZVC, false)
		assert.equal(uint256b3oPLpV, BigInt("0"))
		await expect(CourtFarming_HTStakeBBUHq7Y.setCourtStake.call(addressiBvPDwg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeP5txfZ = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintN0kYL7c = BigInt("0")
		const uintWRX41SE = BigInt("1962")
		const uintFcVim9r = BigInt("1435")
		const uint256apv2d8u = await CourtFarming_HTStakeP5txfZ.stake.call(uintN0kYL7c, {from: accounts[4]});
//		const uint256CmqDtpy = await CourtFarming_HTStakeP5txfZ.stake.call(uintWRX41SE, {from: accounts[5]});
//		const uint256strEr0d = await CourtFarming_HTStakeP5txfZ.stake.call(uintFcVim9r, {from: accounts[3]});

		await expect(CourtFarming_HTStakeP5txfZ.stake.call(uintWRX41SE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeP5txfZ = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressWudfrME = accounts[5]
		const uintMvl1fim = BigInt("85")
		const uintChGbtiC = BigInt("0")
		const addressb5twbTA = await CourtFarming_HTStakeP5txfZ.updateReward.call(addressWudfrME, {from: accounts[3]});
		const uint256d4OF4fY = await CourtFarming_HTStakeP5txfZ.getCurrentTime.call({from: accounts[2]});
		const boolRzeRjxt = await CourtFarming_HTStakeP5txfZ.stakeIncvRewards.call(uintMvl1fim, {from: accounts[4]});
		const boolrm028rk = await CourtFarming_HTStakeP5txfZ.stakeIncvRewards.call(uintChGbtiC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRzeRjxt, false)
		assert.equal(boolrm028rk, false)
		assert.equal(uint256d4OF4fY, BigInt("1630201213"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakejXQlKjr = await CourtFarming_HTStake.new({from: accounts[0]});
		const boolptctkIj = true
		const uintPS65yxf = BigInt("0")
		const uintpbiTN6v = BigInt("1340")
		const uint256kSf4Le2 = await CourtFarming_HTStakejXQlKjr.unstake.call(uintPS65yxf, boolptctkIj, {from: accounts[0]});
		const uint256gr3LQi = await CourtFarming_HTStakejXQlKjr.expectedRewardsToday.call(uintpbiTN6v, {from: accounts[1]});
	});
})