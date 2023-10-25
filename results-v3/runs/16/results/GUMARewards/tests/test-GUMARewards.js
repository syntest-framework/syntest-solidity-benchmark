const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardshjbaKIQ = await GUMARewards.new({from: accounts[3]});
		const addressM4ey8iB = accounts[2]
		const addressz7HLdsz = accounts[4]
		const addresskXnocO2 = accounts[1]
		await GUMARewardshjbaKIQ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressP7HdcXq = await GUMARewardshjbaKIQ.setRewardDistribution.call(addressM4ey8iB, {from: accounts[4]});
		const uint256KkW7tB = await GUMARewardshjbaKIQ.balanceOf.call(addressz7HLdsz, {from: accounts[4]});
		const uint256bo8Ks5Y = await GUMARewardshjbaKIQ.balanceOf.call(addresskXnocO2, {from: accounts[3]});
		await GUMARewardshjbaKIQ.renounceOwnership.call({from: accounts[2]});
		const uint256sy8txh = await GUMARewardshjbaKIQ.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(GUMARewardshjbaKIQ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsvXJKiKs = await GUMARewards.new({from: accounts[2]});
		const uintr5LrOV = BigInt("1129")
		const uint256IFQbHja = await GUMARewardsvXJKiKs.rewardPerToken.call({from: accounts[0]});
		const uint256uIPM1NM = await GUMARewardsvXJKiKs.stake.call(uintr5LrOV, {from: accounts[0]});
		await GUMARewardsvXJKiKs.onlyRewardDistribution.call({from: accounts[4]});

		assert.equal(uint256IFQbHja, BigInt("0"))
		await expect(GUMARewardsvXJKiKs.stake.call(uintr5LrOV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdz5tWmR = await GUMARewards.new({from: accounts[3]});
		const addressoFN4ilp = "0x0000000000000000000000000000000000000001"
		const addressNPo8De1 = accounts[2]
		const uint256afvW3cC = await GUMARewardsdz5tWmR.balanceOf.call(addressoFN4ilp, {from: accounts[1]});
		const addressEhePlAR = await GUMARewardsdz5tWmR.updateReward.call(addressNPo8De1, {from: accounts[3]});
		await GUMARewardsdz5tWmR.onlyRewardDistribution.call({from: accounts[0]});

		assert.equal(uint256afvW3cC, BigInt("0"))
		await expect(GUMARewardsdz5tWmR.updateReward.call(addressNPo8De1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsZSyNGH1 = await GUMARewards.new({from: accounts[4]});
		const addressMAXPSL = accounts[5]
		const addressz9gJId = accounts[2]
		const addressP0yAo2g = accounts[3]
		const addressH4XcVtN = accounts[4]
		const addressraB6il9 = accounts[3]
		const addressmlcnB5H = await GUMARewardsZSyNGH1.setGUMA.call(addressz9gJId, addressMAXPSL, {from: accounts[4]});
		const uint256yaFR5R = await GUMARewardsZSyNGH1.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTdC83OZ = await GUMARewardsZSyNGH1.isOwner.call({from: accounts[2]});
		const addressrOBAIHg = await GUMARewardsZSyNGH1.transferOwnership.call(addressP0yAo2g, {from: "0x0000000000000000000000000000000000000001"});
		const addressC598Gzp = await GUMARewardsZSyNGH1.setGUMA.call(addressraB6il9, addressH4XcVtN, {from: accounts[3]});

		await expect(GUMARewardsZSyNGH1.setGUMA.call(addressz9gJId, addressMAXPSL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsTGugbsB = await GUMARewards.new({from: accounts[4]});
		const addressCDAYVjA = accounts[4]
		await GUMARewardsTGugbsB.renounceOwnership.call({from: accounts[4]});
		const uint256izz1mCO = await GUMARewardsTGugbsB.balanceOf.call(addressCDAYVjA, {from: accounts[1]});
		await GUMARewardsTGugbsB.onlyRewardDistribution.call({from: accounts[4]});

		await expect(GUMARewardsTGugbsB.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewards9gu076 = await GUMARewards.new({from: accounts[4]});
		const addressAgWQHwe = accounts[1]
		await GUMARewards9gu076.getReward.call({from: accounts[1]});
		const addressTRLOt70 = await GUMARewards9gu076.updateReward.call(addressAgWQHwe, {from: accounts[2]});
		const addressxOMqbII = await GUMARewards9gu076.owner.call({from: accounts[0]});

		await expect(GUMARewards9gu076.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsv6wmRxy = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGPtCjwE = accounts[3]
		const uint256yGkhmR = await GUMARewardsv6wmRxy.totalSupply.call({from: accounts[0]});
		const boolo8xJrRT = await GUMARewardsv6wmRxy.isOwner.call({from: accounts[4]});
		const uint256PiBqALd = await GUMARewardsv6wmRxy.earned.call(addressGPtCjwE, {from: accounts[4]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewards9gu076 = await GUMARewards.new({from: accounts[4]});
		await GUMARewards9gu076.getReward.call({from: accounts[1]});
		const addressxOMqbII = await GUMARewards9gu076.owner.call({from: accounts[0]});

		await expect(GUMARewards9gu076.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewards9gu076 = await GUMARewards.new({from: accounts[4]});
		const addressuW4wdUB = accounts[5]
		const addressrYcuy1z = await GUMARewards9gu076.setRewardDistribution.call(addressuW4wdUB, {from: accounts[4]});
		await GUMARewards9gu076.getReward.call({from: accounts[1]});
		const addressxOMqbII = await GUMARewards9gu076.owner.call({from: accounts[0]});

		await expect(GUMARewards9gu076.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewards9gu076 = await GUMARewards.new({from: accounts[4]});
		const addressE2MqDwO = accounts[3]
		const addressn9al5uc = accounts[6]
		await GUMARewards9gu076.getReward.call({from: accounts[1]});
		const addressiuvovp7 = await GUMARewards9gu076.transferOwnership.call(addressE2MqDwO, {from: accounts[4]});
		const addressxOMqbII = await GUMARewards9gu076.owner.call({from: accounts[0]});
		const addressWq5DrVF = await GUMARewards9gu076.setRewardDistribution.call(addressn9al5uc, {from: accounts[2]});

		await expect(GUMARewards9gu076.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})