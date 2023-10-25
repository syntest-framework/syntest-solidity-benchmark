const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardslgqqUwT = await JGNRewards.new({from: accounts[2]});
		const uintOHiZMov = BigInt("1330")
		const addressKLTWef = accounts[1]
		const uint256KnNsVlc = await JGNRewardslgqqUwT.withdraw.call(uintOHiZMov, {from: accounts[4]});
		const uint256DYdxj6B = await JGNRewardslgqqUwT.earned.call(addressKLTWef, {from: accounts[3]});
		await JGNRewardslgqqUwT.getReward.call({from: accounts[1]});

		await expect(JGNRewardslgqqUwT.withdraw.call(uintOHiZMov, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsDwuanM = await JGNRewards.new({from: accounts[2]});
		const uintirdvP6W = BigInt("792")
		const uint256p2Y7ikh = await JGNRewardsDwuanM.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsDwuanM.getReward.call({from: accounts[0]});
		const uint256OIRgSUv = await JGNRewardsDwuanM.stake.call(uintirdvP6W, {from: accounts[4]});
		await JGNRewardsDwuanM.exit.call({from: accounts[0]});

		assert.equal(uint256p2Y7ikh, BigInt("0"))
		await expect(JGNRewardsDwuanM.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsPVCeRfI = await JGNRewards.new({from: accounts[2]});
		const addressFI3T2yx = accounts[2]
		const addresske5e9XV = accounts[1]
		const addressSfLLir7 = await JGNRewardsPVCeRfI.updateReward.call(addressFI3T2yx, {from: accounts[0]});
		const addressWC6zmg7 = await JGNRewardsPVCeRfI.updateReward.call(addresske5e9XV, {from: accounts[2]});

		await expect(JGNRewardsPVCeRfI.updateReward.call(addressFI3T2yx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsK8kzzNn = await JGNRewards.new({from: accounts[3]});
		const addresslpa1C2u = accounts[2]
		const addressf82IMO = accounts[2]
		const addressiGLjMQh = "0x0000000000000000000000000000000000000001"
		const uintxnFL9Ov = BigInt("2045")
		await JGNRewardsK8kzzNn.getReward.call({from: accounts[1]});
		const uint256b9zAanl = await JGNRewardsK8kzzNn.earned.call(addresslpa1C2u, {from: accounts[1]});
		await JGNRewardsK8kzzNn.exit.call({from: accounts[3]});
		const addressBFhdk6q = await JGNRewardsK8kzzNn.updateReward.call(addressf82IMO, {from: accounts[4]});
		const uint256yzzbcsT = await JGNRewardsK8kzzNn.balanceOf.call(addressiGLjMQh, {from: accounts[3]});
		const uint256U11Rh6 = await JGNRewardsK8kzzNn.stake.call(uintxnFL9Ov, {from: accounts[3]});

		await expect(JGNRewardsK8kzzNn.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsQ4Psjw = await JGNRewards.new({from: accounts[4]});
		const uintpkgzw9b = BigInt("83")
		const uintmNj6xwo = BigInt("660")
		const uint256PWF7rYB = await JGNRewardsQ4Psjw.totalSupply.call({from: accounts[0]});
		await JGNRewardsQ4Psjw.getReward.call({from: accounts[2]});
		const uint256Avqd9jP = await JGNRewardsQ4Psjw.notifyRewardAmount.call(uintpkgzw9b, {from: accounts[4]});
		const uint256oi8ldqa = await JGNRewardsQ4Psjw.withdraw.call(uintmNj6xwo, {from: accounts[5]});
		const uint256G2I44E = await JGNRewardsQ4Psjw.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256PWF7rYB, BigInt("0"))
		await expect(JGNRewardsQ4Psjw.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsJvULHF6 = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFgK7sL = BigInt("1320")
		await JGNRewardsJvULHF6.getReward.call({from: accounts[4]});
		await JGNRewardsJvULHF6.checkStart.call({from: accounts[2]});
		const uint256beee3PB = await JGNRewardsJvULHF6.rewardPerToken.call({from: accounts[2]});
		const uint256ucwdICX = await JGNRewardsJvULHF6.stake.call(uintFgK7sL, {from: accounts[4]});
	});
})