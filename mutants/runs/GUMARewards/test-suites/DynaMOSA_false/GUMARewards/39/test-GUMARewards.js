const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsVH5wOD = await GUMARewards.new({from: accounts[1]});
		const addresslMWzpQL = accounts[0]
		const addressjg8Aojh = "0x0000000000000000000000000000000000000001"
		const addressyJ9P6dU = accounts[3]
		const addressVsL5pDT = await GUMARewardsVH5wOD.updateReward.call(addresslMWzpQL, {from: accounts[0]});
		const addressYKd6IM6 = await GUMARewardsVH5wOD.setRewardDistribution.call(addressjg8Aojh, {from: accounts[0]});
		const addressURwhBY = await GUMARewardsVH5wOD.updateReward.call(addressyJ9P6dU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsVH5wOD.updateReward.call(addresslMWzpQL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsiZ9tdY5 = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRPAMvGo = accounts[2]
		const addresswLEgZD1 = accounts[1]
		const addressXDGjjg8 = accounts[1]
		const addressI7HK0jm = accounts[2]
		const uintu0bPSAH = BigInt("385")
		const addressCdA6Uuw = await GUMARewardsiZ9tdY5.setGUMA.call(addresswLEgZD1, addressRPAMvGo, {from: accounts[0]});
		const uint256xBV1TvT = await GUMARewardsiZ9tdY5.balanceOf.call(addressXDGjjg8, {from: accounts[2]});
		const addresskL5uVa0 = await GUMARewardsiZ9tdY5.updateReward.call(addressI7HK0jm, {from: accounts[4]});
		await GUMARewardsiZ9tdY5.onlyOwner.call({from: accounts[4]});
		const uint256bFd47Nu = await GUMARewardsiZ9tdY5.stake.call(uintu0bPSAH, {from: accounts[5]});
		const uint256UNXpXIb = await GUMARewardsiZ9tdY5.totalSupply.call({from: accounts[1]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsaV24qG = await GUMARewards.new({from: accounts[0]});
		const addressLM6EeLm = accounts[3]
		const addressk7Yoina = "0x0000000000000000000000000000000000000001"
		const addresshEuZc13 = accounts[1]
		const addressQzSIGP = await GUMARewardsaV24qG.setRewardDistribution.call(addressLM6EeLm, {from: accounts[4]});
		const addressGEQRXzB = await GUMARewardsaV24qG.setGUMA.call(addresshEuZc13, addressk7Yoina, {from: accounts[0]});
		await GUMARewardsaV24qG.onlyOwner.call({from: accounts[4]});

		await expect(GUMARewardsaV24qG.setRewardDistribution.call(addressLM6EeLm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardspRUKox = await GUMARewards.new({from: accounts[2]});
		const addressRvNd06u = accounts[0]
		const address8SwNoF = "0x0000000000000000000000000000000000000001"
		const uintEvgxGU = BigInt("521")
		const addressa03iRDb = await GUMARewardspRUKox.transferOwnership.call(addressRvNd06u, {from: accounts[2]});
		const addressSb12aWX = await GUMARewardspRUKox.setRewardDistribution.call(address8SwNoF, {from: accounts[3]});
		const uint256LCHjiz = await GUMARewardspRUKox.notifyRewardAmount.call(uintEvgxGU, {from: accounts[1]});

		await expect(GUMARewardspRUKox.setRewardDistribution.call(address8SwNoF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewards8r2fdJ = await GUMARewards.new({from: accounts[2]});
		const addressLAgQbsw = accounts[5]
		const uint256uaWFhJm = await GUMARewards8r2fdJ.earned.call(addressLAgQbsw, {from: accounts[1]});
		await GUMARewards8r2fdJ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256W7lkOA3 = await GUMARewards8r2fdJ.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256uaWFhJm, BigInt("0"))
		await expect(GUMARewards8r2fdJ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsynVud7h = await GUMARewards.new({from: accounts[5]});
		const uintm5yM3VQ = BigInt("590")
		const addressj8ZG4Bg = accounts[4]
		const addressf3wd9dG = accounts[3]
		const addressFijgTMc = "0x0000000000000000000000000000000000000001"
		const boolH9HPwRf = await GUMARewardsynVud7h.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lN6cYs = await GUMARewardsynVud7h.stake.call(uintm5yM3VQ, {from: accounts[0]});
		const addressutVucL3 = await GUMARewardsynVud7h.setGUMA.call(addressf3wd9dG, addressj8ZG4Bg, {from: accounts[0]});
		const uint256Lx5we3h = await GUMARewardsynVud7h.balanceOf.call(addressFijgTMc, {from: accounts[4]});

		assert.equal(boolH9HPwRf, false)
		await expect(GUMARewardsynVud7h.stake.call(uintm5yM3VQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsiyw6Hmn = await GUMARewards.new({from: accounts[2]});
		const addressGNiRJK8 = accounts[1]
		const addressdSarv1X = accounts[0]
		const uint256wq5PN9E = await GUMARewardsiyw6Hmn.balanceOf.call(addressGNiRJK8, {from: accounts[2]});
		const addressEaSMGlt = await GUMARewardsiyw6Hmn.owner.call({from: accounts[4]});
		const addressGjDE4m0 = await GUMARewardsiyw6Hmn.updateReward.call(addressdSarv1X, {from: accounts[4]});
		await GUMARewardsiyw6Hmn.onlyOwner.call({from: accounts[4]});

		assert.equal(addressEaSMGlt, 0xF06b56cB5294a0F716C444eC76F1fCBD1d2450f8)
		assert.equal(uint256wq5PN9E, BigInt("0"))
		await expect(GUMARewardsiyw6Hmn.updateReward.call(addressdSarv1X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsaV24qG = await GUMARewards.new({from: accounts[0]});
		const addresscxWKKV = "0x0000000000000000000000000000000000000000"
		const addressCOzV8zh = accounts[1]
		const addressGEQRXzB = await GUMARewardsaV24qG.setGUMA.call(addressCOzV8zh, addresscxWKKV, {from: accounts[0]});
		await GUMARewardsaV24qG.onlyOwner.call({from: accounts[4]});
		await GUMARewardsaV24qG.onlyOwner.call({from: accounts[4]});

		await expect(GUMARewardsaV24qG.setGUMA.call(addressCOzV8zh, addresscxWKKV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsvSfahBt = await GUMARewards.new({from: accounts[0]});
		const addressBKlT2I1 = accounts[4]
		const addressb4kf3UL = accounts[5]
		const addressxocTUYO = accounts[4]
		const uint256ESl42G9 = await GUMARewardsvSfahBt.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsvSfahBt.getReward.call({from: accounts[4]});
		const uint256lRVHt5B = await GUMARewardsvSfahBt.earned.call(addressBKlT2I1, {from: accounts[4]});
		await GUMARewardsvSfahBt.getReward.call({from: accounts[3]});
		const uint256P8wjnzi = await GUMARewardsvSfahBt.earned.call(addressb4kf3UL, {from: accounts[2]});
		const uint256lpUiCUn = await GUMARewardsvSfahBt.earned.call(addressxocTUYO, {from: accounts[2]});
		const boolD2JaUFI = await GUMARewardsvSfahBt.isOwner.call({from: accounts[3]});

		assert.equal(uint256ESl42G9, BigInt("0"))
		await expect(GUMARewardsvSfahBt.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsAup9MjK = await GUMARewards.new({from: accounts[5]});
		const addressA53qGLe = accounts[2]
		const addressKI1v3L = accounts[2]
		await GUMARewardsAup9MjK.getReward.call({from: accounts[4]});
		const uint256WviZ7IR = await GUMARewardsAup9MjK.totalSupply.call({from: accounts[4]});
		await GUMARewardsAup9MjK.renounceOwnership.call({from: accounts[5]});
		const addressmz9ql3c = await GUMARewardsAup9MjK.setGUMA.call(addressKI1v3L, addressA53qGLe, {from: accounts[2]});

		await expect(GUMARewardsAup9MjK.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsg5EZpjs = await GUMARewards.new({from: accounts[5]});
		const addressJ67G6iW = accounts[3]
		const addressehiTQjO = accounts[1]
		const addresszNDJvm1 = await GUMARewardsg5EZpjs.setRewardDistribution.call(addressJ67G6iW, {from: accounts[5]});
		const addressGdrtlEr = await GUMARewardsg5EZpjs.transferOwnership.call(addressehiTQjO, {from: accounts[2]});
		await GUMARewardsg5EZpjs.renounceOwnership.call({from: accounts[1]});

		await expect(GUMARewardsg5EZpjs.transferOwnership.call(addressehiTQjO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})