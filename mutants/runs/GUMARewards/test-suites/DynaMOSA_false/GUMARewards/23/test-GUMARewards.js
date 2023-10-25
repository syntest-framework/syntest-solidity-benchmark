const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardstfL0t64 = await GUMARewards.new({from: accounts[4]});
		const uintwYOSlRD = BigInt("645")
		const uintw9Jg3bE = BigInt("1217")
		const addressiSnNqVQ = accounts[3]
		const uint256xEVogXk = await GUMARewardstfL0t64.stake.call(uintwYOSlRD, {from: accounts[1]});
		const uint256oJW8A5l = await GUMARewardstfL0t64.stake.call(uintw9Jg3bE, {from: accounts[0]});
		const uint256vl9zMh9 = await GUMARewardstfL0t64.totalSupply.call({from: accounts[1]});
		await GUMARewardstfL0t64.onlyRewardDistribution.call({from: accounts[2]});
		const uint256SnNC6ve = await GUMARewardstfL0t64.balanceOf.call(addressiSnNqVQ, {from: accounts[3]});
		const uint256EknNrDz = await GUMARewardstfL0t64.totalSupply.call({from: accounts[1]});

		await expect(GUMARewardstfL0t64.stake.call(uintwYOSlRD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsiKivRRt = await GUMARewards.new({from: accounts[0]});
		const addressZIqRb6l = accounts[2]
		const boolw36AYkP = await GUMARewardsiKivRRt.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsiKivRRt.onlyOwner.call({from: accounts[2]});
		await GUMARewardsiKivRRt.renounceOwnership.call({from: accounts[3]});
		const addressbGrusm7 = await GUMARewardsiKivRRt.transferOwnership.call(addressZIqRb6l, {from: accounts[4]});

		assert.equal(boolw36AYkP, false)
		await expect(GUMARewardsiKivRRt.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsTtBeIIM = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUwAhtl = "0x0000000000000000000000000000000000000001"
		const addressxjpiHRP = accounts[0]
		const addressnNTzAWU = accounts[3]
		const addressL9mu5Hx = accounts[4]
		const addressbj88Cfo = accounts[2]
		const addresszvNy4RV = await GUMARewardsTtBeIIM.setGUMA.call(addressxjpiHRP, addressUwAhtl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256x9qpGYb = await GUMARewardsTtBeIIM.balanceOf.call(addressnNTzAWU, {from: accounts[5]});
		const boolFbDz3KL = await GUMARewardsTtBeIIM.isOwner.call({from: accounts[0]});
		await GUMARewardsTtBeIIM.renounceOwnership.call({from: accounts[4]});
		const uint256IMgZfOG = await GUMARewardsTtBeIIM.totalSupply.call({from: accounts[2]});
		const addressSfcQfT = await GUMARewardsTtBeIIM.setGUMA.call(addressbj88Cfo, addressL9mu5Hx, {from: accounts[0]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsYZsOJPe = await GUMARewards.new({from: accounts[4]});
		const addressx8Wv7l = "0x0000000000000000000000000000000000000001"
		const addressnuq0qzR = accounts[2]
		const addressuMcow0I = accounts[2]
		const address8sZnLy = await GUMARewardsYZsOJPe.setRewardDistribution.call(addressx8Wv7l, {from: accounts[5]});
		const addressV1BDBi5 = await GUMARewardsYZsOJPe.updateReward.call(addressnuq0qzR, {from: accounts[0]});
		const uint256zNAlvfV = await GUMARewardsYZsOJPe.balanceOf.call(addressuMcow0I, {from: accounts[2]});
		const addresstME4T6p = await GUMARewardsYZsOJPe.owner.call({from: accounts[2]});

		await expect(GUMARewardsYZsOJPe.setRewardDistribution.call(addressx8Wv7l, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsivWlWti = await GUMARewards.new({from: accounts[5]});
		const uintv9d1dew = BigInt("902")
		const uint256Le7wR2u = await GUMARewardsivWlWti.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256DsjAJzN = await GUMARewardsivWlWti.notifyRewardAmount.call(uintv9d1dew, {from: accounts[1]});
		await GUMARewardsivWlWti.onlyOwner.call({from: accounts[4]});
		const boolyAxXQH = await GUMARewardsivWlWti.isOwner.call({from: accounts[4]});
		const uint256yW50MZ = await GUMARewardsivWlWti.totalSupply.call({from: accounts[0]});

		assert.equal(uint256Le7wR2u, BigInt("0"))
		await expect(GUMARewardsivWlWti.notifyRewardAmount.call(uintv9d1dew, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsGv1TuI0 = await GUMARewards.new({from: accounts[2]});
		const addressKzkyunO = accounts[2]
		const addressY1eXF5v = "0x0000000000000000000000000000000000000001"
		const addressJt9YjH = await GUMARewardsGv1TuI0.owner.call({from: accounts[2]});
		const addressrqGmyZO = await GUMARewardsGv1TuI0.transferOwnership.call(addressKzkyunO, {from: accounts[1]});
		const uint256j9qScE8 = await GUMARewardsGv1TuI0.rewardPerToken.call({from: accounts[2]});
		const addressz4SpfB = await GUMARewardsGv1TuI0.updateReward.call(addressY1eXF5v, {from: accounts[2]});
		await GUMARewardsGv1TuI0.onlyRewardDistribution.call({from: accounts[5]});

		assert.equal(addressJt9YjH, 0x638AfD579D8B71568eFD285cf0bd90A78869f6aa)
		await expect(GUMARewardsGv1TuI0.transferOwnership.call(addressKzkyunO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdyaAsQ = await GUMARewards.new({from: accounts[4]});
		const addressItPOLLO = accounts[0]
		const addressgQrUfeR = "0x0000000000000000000000000000000000000001"
		const addressb9skhg0 = await GUMARewardsdyaAsQ.transferOwnership.call(addressItPOLLO, {from: accounts[4]});
		const addresszWDKPo = await GUMARewardsdyaAsQ.transferOwnership.call(addressgQrUfeR, {from: accounts[5]});

		await expect(GUMARewardsdyaAsQ.transferOwnership.call(addressgQrUfeR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsIpvXQh = await GUMARewards.new({from: accounts[0]});
		const addressCSc9d2u = accounts[4]
		const addressdWJSYEo = accounts[5]
		const addressqcupaGW = await GUMARewardsIpvXQh.setRewardDistribution.call(addressCSc9d2u, {from: accounts[0]});
		const boolyFjwmcU = await GUMARewardsIpvXQh.isOwner.call({from: accounts[1]});
		await GUMARewardsIpvXQh.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsIpvXQh.onlyRewardDistribution.call({from: accounts[4]});
		const addressop2Rk2d = await GUMARewardsIpvXQh.transferOwnership.call(addressdWJSYEo, {from: accounts[1]});
		const uint256g9NyW3X = await GUMARewardsIpvXQh.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(boolyFjwmcU, false)
		await expect(GUMARewardsIpvXQh.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsGv1TuI0 = await GUMARewards.new({from: accounts[2]});
		const uintvOOyXAn = BigInt("810")
		const addressXNDeS5B = "0x0000000000000000000000000000000000000001"
		const addressqXPw6S1 = accounts[3]
		const addressjl0wWJ0 = "0x0000000000000000000000000000000000000001"
		await GUMARewardsGv1TuI0.getReward.call({from: accounts[0]});
		const uint256u4ZfEk = await GUMARewardsGv1TuI0.stake.call(uintvOOyXAn, {from: accounts[1]});
		const addressfOCAcb3 = await GUMARewardsGv1TuI0.transferOwnership.call(addressXNDeS5B, {from: accounts[3]});
		const addressrqGmyZO = await GUMARewardsGv1TuI0.transferOwnership.call(addressqXPw6S1, {from: accounts[1]});
		const addressz4SpfB = await GUMARewardsGv1TuI0.updateReward.call(addressjl0wWJ0, {from: accounts[2]});

		await expect(GUMARewardsGv1TuI0.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsDmxVLQB = await GUMARewards.new({from: accounts[5]});
		const addresswxMBW4l = accounts[1]
		const addresshAuxcGw = accounts[3]
		const uint256SUcCpJb = await GUMARewardsDmxVLQB.rewardPerToken.call({from: accounts[0]});
		await GUMARewardsDmxVLQB.renounceOwnership.call({from: accounts[5]});
		await GUMARewardsDmxVLQB.renounceOwnership.call({from: accounts[4]});
		const uint256nGpRyEi = await GUMARewardsDmxVLQB.earned.call(addresswxMBW4l, {from: "0x0000000000000000000000000000000000000001"});
		const addressB9RRsTI = await GUMARewardsDmxVLQB.transferOwnership.call(addresshAuxcGw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256SUcCpJb, BigInt("0"))
		await expect(GUMARewardsDmxVLQB.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})