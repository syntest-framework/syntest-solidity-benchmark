const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsAc6vjx = await GUMARewards.new({from: accounts[1]});
		const addressJb9DXez = "0x0000000000000000000000000000000000000001"
		const addressAUEdcdL = accounts[4]
		const uint256csovyfX = await GUMARewardsAc6vjx.rewardPerToken.call({from: accounts[1]});
		const uint256Nye84c = await GUMARewardsAc6vjx.earned.call(addressJb9DXez, {from: accounts[0]});
//		await GUMARewardsAc6vjx.onlyOwner.call({from: accounts[5]});
//		const uint256Uoy7DDN = await GUMARewardsAc6vjx.earned.call(addressAUEdcdL, {from: accounts[5]});

		assert.equal(uint256Nye84c, BigInt("0"))
		assert.equal(uint256csovyfX, BigInt("0"))
		await expect(GUMARewardsAc6vjx.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardslcxHubY = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressIAjGfg5 = accounts[4]
		await GUMARewardslcxHubY.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const addressa9I40Lu = await GUMARewardslcxHubY.transferOwnership.call(addressIAjGfg5, {from: accounts[0]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsSYYXK2O = await GUMARewards.new({from: accounts[1]});
		const addresslrLBS5P = accounts[3]
		const addresskCHAmtM = accounts[3]
		const uintrM7shjW = BigInt("987")
		const uint256ecALD19 = await GUMARewardsSYYXK2O.lastTimeRewardApplicable.call({from: accounts[3]});
//		const addresscNz6Jxv = await GUMARewardsSYYXK2O.setGUMA.call(addresskCHAmtM, addresslrLBS5P, {from: accounts[1]});
//		const uint256c8uH9j = await GUMARewardsSYYXK2O.stake.call(uintrM7shjW, {from: accounts[0]});

		assert.equal(uint256ecALD19, BigInt("0"))
		await expect(GUMARewardsSYYXK2O.setGUMA.call(addresskCHAmtM, addresslrLBS5P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsHOeSxgX = await GUMARewards.new({from: accounts[0]});
		const addressKCjX1pz = accounts[0]
		const uintP47FbEa = BigInt("335")
//		await GUMARewardsHOeSxgX.getReward.call({from: accounts[4]});
//		const addressDUxlm67 = await GUMARewardsHOeSxgX.setRewardDistribution.call(addressKCjX1pz, {from: accounts[1]});
//		const uint256jDte2jh = await GUMARewardsHOeSxgX.notifyRewardAmount.call(uintP47FbEa, {from: accounts[2]});

		await expect(GUMARewardsHOeSxgX.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWl7Vkkf = await GUMARewards.new({from: accounts[3]});
		const uintWD0GrQ = BigInt("1071")
		const addressVCoLQIr = await GUMARewardsWl7Vkkf.owner.call({from: accounts[0]});
//		await GUMARewardsWl7Vkkf.getReward.call({from: accounts[0]});
//		const uint256nMCFmxr = await GUMARewardsWl7Vkkf.stake.call(uintWD0GrQ, {from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardsWl7Vkkf.onlyOwner.call({from: accounts[2]});

		assert.equal(addressVCoLQIr, 0x9781D46982F9dA41f97DA5633B57d217dAF52B7c)
		await expect(GUMARewardsWl7Vkkf.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWl7Vkkf = await GUMARewards.new({from: accounts[3]});
		const addressksFN08P = accounts[0]
		const addressgg7fbj = accounts[3]
		const addressVCoLQIr = await GUMARewardsWl7Vkkf.owner.call({from: accounts[0]});
		const addressFBGQVIh = await GUMARewardsWl7Vkkf.setRewardDistribution.call(addressksFN08P, {from: accounts[3]});
//		await GUMARewardsWl7Vkkf.getReward.call({from: accounts[0]});
//		const uint256ndZzdcd = await GUMARewardsWl7Vkkf.earned.call(addressgg7fbj, {from: accounts[2]});
//		await GUMARewardsWl7Vkkf.onlyOwner.call({from: accounts[2]});

		assert.equal(addressVCoLQIr, 0x9781D46982F9dA41f97DA5633B57d217dAF52B7c)
		await expect(GUMARewardsWl7Vkkf.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWl7Vkkf = await GUMARewards.new({from: accounts[3]});
		const uintJokwCba = BigInt("782")
		const uintIFZZI7N = BigInt("168")
		const addressJ8hSu0P = accounts[5]
		const addressv57COWy = accounts[3]
//		await GUMARewardsWl7Vkkf.renounceOwnership.call({from: accounts[3]});
//		const uint256s6sY3yY = await GUMARewardsWl7Vkkf.stake.call(uintJokwCba, {from: accounts[4]});
//		const uint256vJcxVG6 = await GUMARewardsWl7Vkkf.stake.call(uintIFZZI7N, {from: accounts[1]});
//		const uint256tkGzTMA = await GUMARewardsWl7Vkkf.earned.call(addressJ8hSu0P, {from: accounts[2]});
//		const addressAvWJC1S = await GUMARewardsWl7Vkkf.updateReward.call(addressv57COWy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsWl7Vkkf.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsg7Pqcel = await GUMARewards.new({from: accounts[4]});
		const addressRe1FFCi = accounts[3]
		const addressJ8dyh3o = accounts[5]
		const addressa8La4eA = accounts[3]
		const addressM9gt7sI = accounts[3]
		const addressf01oqSz = await GUMARewardsg7Pqcel.transferOwnership.call(addressRe1FFCi, {from: accounts[4]});
//		const addressXyLfiT6 = await GUMARewardsg7Pqcel.updateReward.call(addressJ8dyh3o, {from: accounts[5]});
//		const addressas4Rvl = await GUMARewardsg7Pqcel.setRewardDistribution.call(addressa8La4eA, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qNmYyP0 = await GUMARewardsg7Pqcel.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256d3XvVH0 = await GUMARewardsg7Pqcel.balanceOf.call(addressM9gt7sI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsg7Pqcel.updateReward.call(addressJ8dyh3o, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})