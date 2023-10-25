const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsZhN9W8d = await GUMARewards.new({from: accounts[3]});
		const addressbacOvWV = accounts[1]
		const uintlcfVuV = BigInt("294")
		await GUMARewardsZhN9W8d.getReward.call({from: accounts[3]});
		const uint256aWWji4P = await GUMARewardsZhN9W8d.balanceOf.call(addressbacOvWV, {from: accounts[0]});
		const uint256ZoFr16 = await GUMARewardsZhN9W8d.notifyRewardAmount.call(uintlcfVuV, {from: accounts[0]});

		await expect(GUMARewardsZhN9W8d.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsYr8VJ7Y = await GUMARewards.new({from: accounts[0]});
		const addressceuVUnb = accounts[4]
		const uintWNw9uyB = BigInt("275")
		const addressg4ZjAs9 = accounts[5]
		const addressolqIuZK = accounts[4]
		const uint256F8usBft = await GUMARewardsYr8VJ7Y.balanceOf.call(addressceuVUnb, {from: accounts[0]});
		await GUMARewardsYr8VJ7Y.getReward.call({from: accounts[2]});
		const uint256yU8mZaN = await GUMARewardsYr8VJ7Y.stake.call(uintWNw9uyB, {from: accounts[1]});
		const addresszp37dVc = await GUMARewardsYr8VJ7Y.setGUMA.call(addressolqIuZK, addressg4ZjAs9, {from: accounts[3]});

		assert.equal(uint256F8usBft, BigInt("0"))
		await expect(GUMARewardsYr8VJ7Y.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardskxkBqze = await GUMARewards.new({from: accounts[1]});
		const addressmtIkp1 = accounts[5]
		const uint256QxLf7Eq = await GUMARewardskxkBqze.rewardPerToken.call({from: accounts[4]});
		const uint256uHHLE1r = await GUMARewardskxkBqze.totalSupply.call({from: accounts[4]});
		const addressphKFXJ7 = await GUMARewardskxkBqze.setRewardDistribution.call(addressmtIkp1, {from: accounts[5]});
		await GUMARewardskxkBqze.getReward.call({from: accounts[2]});

		assert.equal(uint256QxLf7Eq, BigInt("0"))
		assert.equal(uint256uHHLE1r, BigInt("0"))
		await expect(GUMARewardskxkBqze.setRewardDistribution.call(addressmtIkp1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsF3YHZEI = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGyw6VnR = BigInt("1224")
		const addressxiLIeq0 = "0x0000000000000000000000000000000000000001"
		const addressdw2czey = accounts[0]
		const address1Y0c7Z = accounts[5]
		await GUMARewardsF3YHZEI.onlyOwner.call({from: accounts[2]});
		await GUMARewardsF3YHZEI.getReward.call({from: accounts[3]});
		const uint256BZmEMr = await GUMARewardsF3YHZEI.notifyRewardAmount.call(uintGyw6VnR, {from: accounts[1]});
		const uint256Zby82H1 = await GUMARewardsF3YHZEI.balanceOf.call(addressxiLIeq0, {from: accounts[0]});
		const addressDi0bFkL = await GUMARewardsF3YHZEI.setGUMA.call(address1Y0c7Z, addressdw2czey, {from: accounts[3]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsBXk1ywa = await GUMARewards.new({from: accounts[1]});
		const addressn8UWCHr = accounts[2]
		await GUMARewardsBXk1ywa.onlyRewardDistribution.call({from: accounts[4]});
		const uint256rp8Qewk = await GUMARewardsBXk1ywa.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressrdyql3W = await GUMARewardsBXk1ywa.owner.call({from: accounts[1]});
		const addressmjYBqU1 = await GUMARewardsBXk1ywa.updateReward.call(addressn8UWCHr, {from: accounts[1]});
		await GUMARewardsBXk1ywa.getReward.call({from: accounts[5]});

		await expect(GUMARewardsBXk1ywa.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsmy1mQ6 = await GUMARewards.new({from: accounts[2]});
		const addressIkdLUQ = accounts[0]
		const addressanIqvfR = accounts[1]
		const uint256WTNcASw = await GUMARewardsmy1mQ6.earned.call(addressIkdLUQ, {from: accounts[1]});
		const uint256zGjsqOy = await GUMARewardsmy1mQ6.earned.call(addressanIqvfR, {from: accounts[2]});
		const address2lxMT6 = await GUMARewardsmy1mQ6.owner.call({from: accounts[4]});
		const uint256dAKqoYN = await GUMARewardsmy1mQ6.rewardPerToken.call({from: accounts[3]});

		assert.equal(address2lxMT6, 0xc932dfE51B6d6892af44a00F23Dc4596a1424C17)
		assert.equal(uint256WTNcASw, BigInt("0"))
		assert.equal(uint256dAKqoYN, BigInt("0"))
		assert.equal(uint256zGjsqOy, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardshtWvr6 = await GUMARewards.new({from: accounts[2]});
		await GUMARewardshtWvr6.getReward.call({from: accounts[4]});
		await GUMARewardshtWvr6.renounceOwnership.call({from: accounts[2]});

		await expect(GUMARewardshtWvr6.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardshtWvr6 = await GUMARewards.new({from: accounts[2]});
		const addresssgqdh8 = accounts[4]
		const addresswBmPu4L = "0x0000000000000000000000000000000000000001"
		const boolfdB7VMw = await GUMARewardshtWvr6.isOwner.call({from: accounts[2]});
		const uint256WAgD0z = await GUMARewardshtWvr6.earned.call(addresssgqdh8, {from: accounts[4]});
		const addresskp0XdTm = await GUMARewardshtWvr6.transferOwnership.call(addresswBmPu4L, {from: accounts[2]});
		await GUMARewardshtWvr6.getReward.call({from: accounts[4]});

		assert.equal(boolfdB7VMw, true)
		assert.equal(uint256WAgD0z, BigInt("0"))
		await expect(GUMARewardshtWvr6.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardshtWvr6 = await GUMARewards.new({from: accounts[2]});
		const addressTATnZd = accounts[3]
		await GUMARewardshtWvr6.getReward.call({from: accounts[4]});
		const addressfktrc3m = await GUMARewardshtWvr6.setRewardDistribution.call(addressTATnZd, {from: accounts[2]});

		await expect(GUMARewardshtWvr6.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})