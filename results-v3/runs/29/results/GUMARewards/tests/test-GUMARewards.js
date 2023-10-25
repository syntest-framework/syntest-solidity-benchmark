const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsoWPYzqu = await GUMARewards.new({from: accounts[0]});
		const addressmSbpvCI = accounts[1]
		const uintWWLp7m = BigInt("726")
		const addressefd7t2T = "0x0000000000000000000000000000000000000001"
		const addresscD0HlKI = await GUMARewardsoWPYzqu.transferOwnership.call(addressmSbpvCI, {from: accounts[2]});
		const uint256EYgq4dm = await GUMARewardsoWPYzqu.rewardPerToken.call({from: accounts[0]});
		const uint256sa7N6bl = await GUMARewardsoWPYzqu.stake.call(uintWWLp7m, {from: accounts[1]});
		const uint256eJEKwdy = await GUMARewardsoWPYzqu.earned.call(addressefd7t2T, {from: accounts[4]});
		await GUMARewardsoWPYzqu.onlyOwner.call({from: accounts[2]});

		await expect(GUMARewardsoWPYzqu.transferOwnership.call(addressmSbpvCI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardslrmFaqT = await GUMARewards.new({from: accounts[1]});
		const addressJBYLe5i = accounts[0]
		const uintk6dGWNp = BigInt("1261")
		const addressMwB6NE = await GUMARewardslrmFaqT.updateReward.call(addressJBYLe5i, {from: accounts[0]});
		const uint256W6ydvOR = await GUMARewardslrmFaqT.stake.call(uintk6dGWNp, {from: accounts[3]});
		const uint256sWnev2q = await GUMARewardslrmFaqT.rewardPerToken.call({from: accounts[2]});

		await expect(GUMARewardslrmFaqT.updateReward.call(addressJBYLe5i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsZiYgY3u = await GUMARewards.new({from: accounts[4]});
		const addressV3CuwzO = accounts[2]
		const addresslEIr7ot = accounts[5]
		const uintEgvNpQH = BigInt("763")
		await GUMARewardsZiYgY3u.getReward.call({from: accounts[3]});
		const addressl6TrT5 = await GUMARewardsZiYgY3u.setGUMA.call(addresslEIr7ot, addressV3CuwzO, {from: accounts[4]});
		await GUMARewardsZiYgY3u.onlyRewardDistribution.call({from: accounts[1]});
		const uint256yp4lzBM = await GUMARewardsZiYgY3u.stake.call(uintEgvNpQH, {from: accounts[5]});
		const boolPSWfAV = await GUMARewardsZiYgY3u.isOwner.call({from: accounts[0]});

		await expect(GUMARewardsZiYgY3u.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqSH6aFX = await GUMARewards.new({from: accounts[3]});
		const addressquFe2pN = accounts[4]
		const addresszRdmRUz = await GUMARewardsqSH6aFX.transferOwnership.call(addressquFe2pN, {from: accounts[3]});
		await GUMARewardsqSH6aFX.renounceOwnership.call({from: accounts[1]});
		const uint256bXn3Zc = await GUMARewardsqSH6aFX.rewardPerToken.call({from: accounts[3]});

		await expect(GUMARewardsqSH6aFX.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsZBKNiZo = await GUMARewards.new({from: accounts[1]});
		const uintnlbaJeS = BigInt("423")
		const uintKdvTTGy = BigInt("1258")
		const uint256ioBOf0y = await GUMARewardsZBKNiZo.stake.call(uintnlbaJeS, {from: accounts[2]});
		await GUMARewardsZBKNiZo.onlyOwner.call({from: accounts[5]});
		const uint256NS5O4Jj = await GUMARewardsZBKNiZo.rewardPerToken.call({from: accounts[3]});
		const uint256MbPKvyA = await GUMARewardsZBKNiZo.stake.call(uintKdvTTGy, {from: accounts[4]});
		await GUMARewardsZBKNiZo.onlyRewardDistribution.call({from: accounts[0]});

		await expect(GUMARewardsZBKNiZo.stake.call(uintnlbaJeS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardslrmFaqT = await GUMARewards.new({from: accounts[1]});
		const addressJ1myM9 = accounts[0]
		await GUMARewardslrmFaqT.renounceOwnership.call({from: accounts[1]});
		const addressMwB6NE = await GUMARewardslrmFaqT.updateReward.call(addressJ1myM9, {from: accounts[0]});
		const uint256sWnev2q = await GUMARewardslrmFaqT.rewardPerToken.call({from: accounts[2]});

		await expect(GUMARewardslrmFaqT.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWCPccL = await GUMARewards.new({from: accounts[2]});
		const addresssNMa1OC = accounts[0]
		await GUMARewardsWCPccL.getReward.call({from: accounts[1]});
		const addressMNfELoN = await GUMARewardsWCPccL.setRewardDistribution.call(addresssNMa1OC, {from: accounts[2]});

		await expect(GUMARewardsWCPccL.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWCPccL = await GUMARewards.new({from: accounts[2]});
		const addressMgVhQru = await GUMARewardsWCPccL.owner.call({from: accounts[1]});
		await GUMARewardsWCPccL.getReward.call({from: accounts[1]});

		assert.equal(addressMgVhQru, 0xeA6218E70072c1FC7F3455F5430750e4575C0877)
		await expect(GUMARewardsWCPccL.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsK6pW9cV = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressr2gav2W = accounts[0]
		const address0m3RrX = accounts[3]
		const addressGtbUGPZ = accounts[3]
		const addressVlOGz0 = accounts[3]
		const booljuKuP6z = await GUMARewardsK6pW9cV.isOwner.call({from: accounts[3]});
		const addressx7XmD7P = await GUMARewardsK6pW9cV.setRewardDistribution.call(addressr2gav2W, {from: accounts[4]});
		const uint256udMAAzm = await GUMARewardsK6pW9cV.rewardPerToken.call({from: accounts[4]});
		const addresskXB8OOE = await GUMARewardsK6pW9cV.updateReward.call(address0m3RrX, {from: accounts[3]});
		const addressZkq4zCH = await GUMARewardsK6pW9cV.setGUMA.call(addressVlOGz0, addressGtbUGPZ, {from: accounts[0]});
	});
})