const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardspqM4hl6 = await JGNRewards.new({from: accounts[0]});
		const uintTFypdIS = BigInt("1989")
		const uintwP4693Z = BigInt("1434")
//		const uint256zD0HTVT = await JGNRewardspqM4hl6.withdraw.call(uintTFypdIS, {from: accounts[0]});
//		const uint256anqXmwb = await JGNRewardspqM4hl6.withdraw.call(uintwP4693Z, {from: accounts[2]});
//		await JGNRewardspqM4hl6.getReward.call({from: accounts[0]});
//		await JGNRewardspqM4hl6.getReward.call({from: accounts[5]});

		await expect(JGNRewardspqM4hl6.withdraw.call(uintTFypdIS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsuGYGwhS = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjXYYImm = BigInt("1811")
		const addressLRfTt6w = "0x0000000000000000000000000000000000000001"
		const uintXu47bAm = BigInt("59")
		const addressyl6sonK = accounts[4]
		const addressFtfK0AV = accounts[3]
		const uint256dbqhule = await JGNRewardsuGYGwhS.stake.call(uintjXYYImm, {from: accounts[5]});
		const addressKUdVJvi = await JGNRewardsuGYGwhS.updateReward.call(addressLRfTt6w, {from: accounts[0]});
		const uint256I6W9Hzz = await JGNRewardsuGYGwhS.withdraw.call(uintXu47bAm, {from: "0x0000000000000000000000000000000000000001"});
		const addresstLiWuvb = await JGNRewardsuGYGwhS.updateReward.call(addressyl6sonK, {from: accounts[0]});
		const uint256Jyw4iwU = await JGNRewardsuGYGwhS.earned.call(addressFtfK0AV, {from: accounts[3]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsFPWIjWn = await JGNRewards.new({from: accounts[3]});
		const uintp9XNwpA = BigInt("1761")
		const uintizbitYv = BigInt("48")
//		const uint256hHYQyfo = await JGNRewardsFPWIjWn.stake.call(uintp9XNwpA, {from: accounts[2]});
//		const uint256BnIDGV5 = await JGNRewardsFPWIjWn.notifyRewardAmount.call(uintizbitYv, {from: accounts[2]});

		await expect(JGNRewardsFPWIjWn.stake.call(uintp9XNwpA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsSVC6Ads = await JGNRewards.new({from: accounts[1]});
		const addressydP8NGN = accounts[4]
		const uint256CsVcths = await JGNRewardsSVC6Ads.earned.call(addressydP8NGN, {from: accounts[4]});
//		await JGNRewardsSVC6Ads.exit.call({from: accounts[0]});
//		const uint256pMsrYzd = await JGNRewardsSVC6Ads.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256CsVcths, BigInt("0"))
		await expect(JGNRewardsSVC6Ads.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardszU8NQTQ = await JGNRewards.new({from: accounts[3]});
		const uintyNckpE = BigInt("347")
//		const uint256LhHZ5VB = await JGNRewardszU8NQTQ.notifyRewardAmount.call(uintyNckpE, {from: accounts[2]});
//		await JGNRewardszU8NQTQ.getReward.call({from: accounts[3]});
//		const uint256YTIVsOQ = await JGNRewardszU8NQTQ.rewardPerToken.call({from: accounts[1]});
//		await JGNRewardszU8NQTQ.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardszU8NQTQ.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardszU8NQTQ.notifyRewardAmount.call(uintyNckpE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsRTjXntI = await JGNRewards.new({from: accounts[4]});
		const uintQ1Cg8og = BigInt("1511")
		const uintlHTwzsp = BigInt("1191")
//		await JGNRewardsRTjXntI.getReward.call({from: accounts[1]});
//		await JGNRewardsRTjXntI.exit.call({from: accounts[3]});
//		await JGNRewardsRTjXntI.getReward.call({from: accounts[2]});
//		const uint256JzAZ9p2 = await JGNRewardsRTjXntI.withdraw.call(uintQ1Cg8og, {from: accounts[2]});
//		const uint256s9xUvJL = await JGNRewardsRTjXntI.stake.call(uintlHTwzsp, {from: accounts[1]});

		await expect(JGNRewardsRTjXntI.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsFPWIjWn = await JGNRewards.new({from: accounts[3]});
		const addresswRZWEUW = accounts[2]
		const uinteJCW6jn = BigInt("1876")
		const uintQbWBBxi = BigInt("1761")
//		const addressrMwtetZ = await JGNRewardsFPWIjWn.updateReward.call(addresswRZWEUW, {from: accounts[0]});
//		const uint256qLcagGw = await JGNRewardsFPWIjWn.withdraw.call(uinteJCW6jn, {from: accounts[5]});
//		const uint256hHYQyfo = await JGNRewardsFPWIjWn.stake.call(uintQbWBBxi, {from: accounts[2]});

		await expect(JGNRewardsFPWIjWn.updateReward.call(addresswRZWEUW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})