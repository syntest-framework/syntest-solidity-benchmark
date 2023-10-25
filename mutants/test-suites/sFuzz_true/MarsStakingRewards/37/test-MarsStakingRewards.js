const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressLy7y6uS = accounts[0]
		const addressJrSCHg4 = accounts[3]
		const addressMx14wMo = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsmqviXrF = await MarsStakingRewards.new(addressLy7y6uS, addressJrSCHg4, addressMx14wMo, {from: accounts[5]});
		const boolNp95YWU = await MarsStakingRewardsmqviXrF.isOwner.call({from: accounts[3]});
//		await MarsStakingRewardsmqviXrF.nonReentrant.call({from: accounts[3]});
//		const uint256Ipywr1Y = await MarsStakingRewardsmqviXrF.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNp95YWU, false)
		await expect(MarsStakingRewardsmqviXrF.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressNwIx8Xp = accounts[4]
		const addresspGZjSAV = accounts[2]
		const addressWma4tti = accounts[2]
		const MarsStakingRewardssjup8kG = await MarsStakingRewards.new(addressNwIx8Xp, addresspGZjSAV, addressWma4tti, {from: accounts[3]});
		const uintEOVoAJB = BigInt("1097")
		const addressv8ModTG = "0x0000000000000000000000000000000000000001"
		const uint2561qS9NH = await MarsStakingRewardssjup8kG.getRewardForDuration.call({from: accounts[2]});
//		const uint256GMcc182 = await MarsStakingRewardssjup8kG.stake.call(uintEOVoAJB, {from: accounts[0]});
//		const uint256w7orPk = await MarsStakingRewardssjup8kG.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressHDq1Hq = await MarsStakingRewardssjup8kG.setRewardsDistribution.call(addressv8ModTG, {from: accounts[4]});

		assert.equal(uint2561qS9NH, BigInt("0"))
		await expect(MarsStakingRewardssjup8kG.stake.call(uintEOVoAJB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresszjXa21G = accounts[1]
		const addressKElL29u = accounts[2]
		const addressSI3Y0Qd = accounts[0]
		const MarsStakingRewardsnfYmqrW = await MarsStakingRewards.new(addresszjXa21G, addressKElL29u, addressSI3Y0Qd, {from: "0x0000000000000000000000000000000000000001"});
		const uintfMJDYmx = BigInt("587")
		const uint256v7l2Gc = await MarsStakingRewardsnfYmqrW.withdraw.call(uintfMJDYmx, {from: accounts[5]});
		const uint256GlqW2vB = await MarsStakingRewardsnfYmqrW.rewardPerToken.call({from: accounts[2]});
		await MarsStakingRewardsnfYmqrW.nonReentrant.call({from: accounts[0]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressw67Xz3J = accounts[4]
		const addressBAi3VYI = accounts[0]
		const addressY3m4wkX = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsdyHu84w = await MarsStakingRewards.new(addressw67Xz3J, addressBAi3VYI, addressY3m4wkX, {from: accounts[4]});
		const uintvxFvti9 = BigInt("1356")
		const addressC09cFRp = accounts[1]
		const addressSFon2yz = "0x0000000000000000000000000000000000000001"
//		await MarsStakingRewardsdyHu84w.exit.call({from: accounts[2]});
//		await MarsStakingRewardsdyHu84w.renounceOwnership.call({from: accounts[4]});
//		const uint256Z5IXrCZ = await MarsStakingRewardsdyHu84w.totalSupply.call({from: accounts[3]});
//		const addressIIPpYl3 = await MarsStakingRewardsdyHu84w.inCaseTokensGetStuck.call(addressC09cFRp, uintvxFvti9, {from: accounts[0]});
//		const uint256Ypt3psO = await MarsStakingRewardsdyHu84w.earned.call(addressSFon2yz, {from: accounts[1]});

		await expect(MarsStakingRewardsdyHu84w.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressC7uSxWb = accounts[3]
		const addresscGt6Xb6 = accounts[2]
		const addressecXact0 = accounts[3]
		const MarsStakingRewardsCMfouxA = await MarsStakingRewards.new(addressC7uSxWb, addresscGt6Xb6, addressecXact0, {from: accounts[0]});
		const uintpimSflC = BigInt("1913")
		const uintkjCXYj5 = BigInt("2034")
		const addressq1sRtq2 = accounts[4]
		const uint256SvUwTFu = await MarsStakingRewardsCMfouxA.getRewardForDuration.call({from: accounts[1]});
		const uint256BmlWnlx = await MarsStakingRewardsCMfouxA.totalSupply.call({from: accounts[1]});
		const addressUB2NsdN = await MarsStakingRewardsCMfouxA.owner.call({from: accounts[4]});
		const uint256LXQYBSV = await MarsStakingRewardsCMfouxA.rewardPerToken.call({from: accounts[0]});
//		const uint256StiTSXd = await MarsStakingRewardsCMfouxA.notifyRewardAmount.call(uintkjCXYj5, uintpimSflC, {from: accounts[3]});
//		const addressf6OuwBI = await MarsStakingRewardsCMfouxA.updateReward.call(addressq1sRtq2, {from: accounts[3]});

		assert.equal(addressUB2NsdN, 0x6Eb5Ed18Bea4593E2A5E832F01D219EAdff30E48)
		assert.equal(uint256BmlWnlx, BigInt("0"))
		assert.equal(uint256LXQYBSV, BigInt("0"))
		assert.equal(uint256SvUwTFu, BigInt("0"))
		await expect(MarsStakingRewardsCMfouxA.notifyRewardAmount.call(uintkjCXYj5, uintpimSflC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressGqSIHDs = accounts[2]
		const addressvjMuKoa = accounts[1]
		const addressir6UB7J = accounts[3]
		const MarsStakingRewardsIITcPrO = await MarsStakingRewards.new(addressGqSIHDs, addressvjMuKoa, addressir6UB7J, {from: accounts[3]});
		const addresssacbx0v = accounts[3]
		const uintqLho9bA = BigInt("1278")
		const addressO7Xa9p = accounts[1]
		const addressmMBrQQy = "0x0000000000000000000000000000000000000001"
//		await MarsStakingRewardsIITcPrO.renounceOwnership.call({from: accounts[2]});
//		const uint256cFZi5cX = await MarsStakingRewardsIITcPrO.earned.call(addresssacbx0v, {from: accounts[3]});
//		const uint256s5uoA2d = await MarsStakingRewardsIITcPrO.withdraw.call(uintqLho9bA, {from: accounts[1]});
//		const uint256OTiR2fz = await MarsStakingRewardsIITcPrO.earned.call(addressO7Xa9p, {from: accounts[0]});
//		const uint256e3y5mG8 = await MarsStakingRewardsIITcPrO.balanceOf.call(addressmMBrQQy, {from: accounts[3]});

		await expect(MarsStakingRewardsIITcPrO.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressb8Ypgr5 = accounts[2]
		const addressUOpM5j0 = accounts[4]
		const addresshS8PPxW = accounts[4]
		const MarsStakingRewardsLb0gQSQ = await MarsStakingRewards.new(addressb8Ypgr5, addressUOpM5j0, addresshS8PPxW, {from: accounts[2]});
		const addresssmelBax = accounts[2]
		const addresswjlfONd = accounts[1]
		const uint256Jyib4xr = await MarsStakingRewardsLb0gQSQ.balanceOf.call(addresssmelBax, {from: accounts[2]});
//		const address1lvaPg = await MarsStakingRewardsLb0gQSQ.setRewardsDistribution.call(addresswjlfONd, {from: accounts[4]});
//		const uint256lLpSVJB = await MarsStakingRewardsLb0gQSQ.getRewardForDuration.call({from: accounts[5]});
//		await MarsStakingRewardsLb0gQSQ.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256Jyib4xr, BigInt("0"))
		await expect(MarsStakingRewardsLb0gQSQ.setRewardsDistribution.call(addresswjlfONd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressAabxf8P = accounts[2]
		const addressYxTNbC = accounts[1]
		const addressIBwLRDQ = accounts[4]
		const MarsStakingRewardsSRZVxD0 = await MarsStakingRewards.new(addressAabxf8P, addressYxTNbC, addressIBwLRDQ, {from: accounts[2]});
		const uintZcHnpBX = BigInt("171")
		const uintNvGSs4S = BigInt("564")
		const byteXj7xOm7 = "0x130419141b04141017040a0e1213111a1f1716080c0514161b0602180b09040e"
		const bytedsQ4FH = "0x11031d0c0e121f131416131015151c1f0a180e1610030916010d010b131e131c"
		const uintOHcUTmF = BigInt("83")
		const uintF2st2f = BigInt("858")
		const uintguaxDQg = BigInt("1852")
		const addressC6g3H9e = "0x0000000000000000000000000000000000000000"
		const addressd4Oz0pl = accounts[0]
//		const uint256UhC3wWL = await MarsStakingRewardsSRZVxD0.notifyRewardAmount.call(uintNvGSs4S, uintZcHnpBX, {from: accounts[3]});
//		const uint256vQEZBto = await MarsStakingRewardsSRZVxD0.stakeWithPermit.call(uintguaxDQg, uintF2st2f, uintOHcUTmF, bytedsQ4FH, byteXj7xOm7, {from: accounts[2]});
//		const addressqJHEWO = await MarsStakingRewardsSRZVxD0.setRewardsDistribution.call(addressC6g3H9e, {from: accounts[1]});
//		const uint256dCAR2tj = await MarsStakingRewardsSRZVxD0.earned.call(addressd4Oz0pl, {from: accounts[4]});

		await expect(MarsStakingRewardsSRZVxD0.notifyRewardAmount.call(uintNvGSs4S, uintZcHnpBX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address0qoLYx = accounts[4]
		const addressg7mFsL0 = accounts[2]
		const addressoePDSPB = accounts[2]
		const MarsStakingRewardssjup8kG = await MarsStakingRewards.new(address0qoLYx, addressg7mFsL0, addressoePDSPB, {from: accounts[3]});
		const addressBDctoYg = accounts[5]
		const addressonCzAgD = accounts[4]
		const addressd5Gz7K = await MarsStakingRewardssjup8kG.setRewardsDistribution.call(addressBDctoYg, {from: accounts[3]});
		const uint256Wxd5FUu = await MarsStakingRewardssjup8kG.earned.call(addressonCzAgD, {from: accounts[3]});
		const uint2561qS9NH = await MarsStakingRewardssjup8kG.getRewardForDuration.call({from: accounts[2]});

		assert.equal(uint2561qS9NH, BigInt("0"))
		assert.equal(uint256Wxd5FUu, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressGqvF5bL = accounts[4]
		const addressSYRt6km = accounts[2]
		const addressRaVHeQI = accounts[2]
		const MarsStakingRewardssjup8kG = await MarsStakingRewards.new(addressGqvF5bL, addressSYRt6km, addressRaVHeQI, {from: accounts[3]});
		const byteARTLUqs = "0x11060100061d1820091e14031c1d0d180705170d0e0f14161d1e1a04061f111f"
		const byteX32pRRW = "0x1c0608111e1f1b19110e0a10021b03181d170f161e0417070f180915101e0b12"
		const uintjzX6svB = BigInt("241")
		const uintFue1JO9 = BigInt("1982")
		const uintk8Mcd1s = BigInt("1560")
		const uint2561qS9NH = await MarsStakingRewardssjup8kG.getRewardForDuration.call({from: accounts[2]});
//		await MarsStakingRewardssjup8kG.renounceOwnership.call({from: accounts[3]});
//		const uint256mb7Chi0 = await MarsStakingRewardssjup8kG.stakeWithPermit.call(uintk8Mcd1s, uintFue1JO9, uintjzX6svB, byteX32pRRW, byteARTLUqs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2561qS9NH, BigInt("0"))
		await expect(MarsStakingRewardssjup8kG.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresscezv1fX = accounts[4]
		const addressn4gd2rr = accounts[2]
		const addressjeqOffw = accounts[2]
		const MarsStakingRewardssjup8kG = await MarsStakingRewards.new(addresscezv1fX, addressn4gd2rr, addressjeqOffw, {from: accounts[3]});
		const addressa7LfqUr = accounts[3]
		const uintMI3avA = BigInt("299")
		const addressH5enTOV = accounts[3]
		const uint256Wxd5FUu = await MarsStakingRewardssjup8kG.earned.call(addressa7LfqUr, {from: accounts[3]});
//		const addressCn92cq = await MarsStakingRewardssjup8kG.inCaseTokensGetStuck.call(addressH5enTOV, uintMI3avA, {from: accounts[3]});

		assert.equal(uint256Wxd5FUu, BigInt("0"))
		await expect(MarsStakingRewardssjup8kG.inCaseTokensGetStuck.call(addressH5enTOV, uintMI3avA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjWB1Q5F = accounts[4]
		const addressjtWvqcS = accounts[2]
		const addressMeUjkX9 = accounts[2]
		const MarsStakingRewardssjup8kG = await MarsStakingRewards.new(addressjWB1Q5F, addressjtWvqcS, addressMeUjkX9, {from: accounts[3]});
		const addressNWYQNWv = accounts[3]
		const addressUEz37EK = await MarsStakingRewardssjup8kG.transferOwnership.call(addressNWYQNWv, {from: accounts[3]});
		const uint2561qS9NH = await MarsStakingRewardssjup8kG.getRewardForDuration.call({from: accounts[2]});

		assert.equal(uint2561qS9NH, BigInt("0"))
	});
})