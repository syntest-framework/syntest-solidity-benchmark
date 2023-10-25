const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsZjW8pH8 = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOMbYGKZ = accounts[2]
		const addressRIWVLO = accounts[3]
		const addressWFaRpV2 = accounts[0]
		const boolLXRCaiN = await GUMARewardsZjW8pH8.isOwner.call({from: accounts[2]});
		const addressBFcvH6H = await GUMARewardsZjW8pH8.setGUMA.call(addressRIWVLO, addressOMbYGKZ, {from: accounts[2]});
		const addresszpUbq6b = await GUMARewardsZjW8pH8.transferOwnership.call(addressWFaRpV2, {from: accounts[3]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsa7SHLQz = await GUMARewards.new({from: accounts[3]});
		const uintx4Phc0q = BigInt("1101")
		const uint256VNRD742 = await GUMARewardsa7SHLQz.stake.call(uintx4Phc0q, {from: accounts[3]});
		const uint256qx28Dp8 = await GUMARewardsa7SHLQz.rewardPerToken.call({from: accounts[5]});

		await expect(GUMARewardsa7SHLQz.stake.call(uintx4Phc0q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsce0UqPp = await GUMARewards.new({from: accounts[0]});
		const uintpsDS7aq = BigInt("1510")
		await GUMARewardsce0UqPp.getReward.call({from: accounts[1]});
		await GUMARewardsce0UqPp.onlyOwner.call({from: accounts[0]});
		const uint256eJnPBYa = await GUMARewardsce0UqPp.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256PC72LC0 = await GUMARewardsce0UqPp.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256MuNSwLy = await GUMARewardsce0UqPp.stake.call(uintpsDS7aq, {from: accounts[2]});

		await expect(GUMARewardsce0UqPp.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardszsLou70 = await GUMARewards.new({from: accounts[2]});
		const addressBEaZN8L = accounts[0]
		const addressMmNkKQv = accounts[0]
		const uintxfRBiBf = BigInt("324")
		const addressJkM0HsP = accounts[5]
		const uint2560alm6F = await GUMARewardszsLou70.totalSupply.call({from: accounts[0]});
		const uint256rrN2Jj3 = await GUMARewardszsLou70.lastTimeRewardApplicable.call({from: accounts[5]});
		const addresshmnzGt = await GUMARewardszsLou70.setGUMA.call(addressMmNkKQv, addressBEaZN8L, {from: accounts[3]});
		const uint256V2Z8by = await GUMARewardszsLou70.stake.call(uintxfRBiBf, {from: accounts[1]});
		const addressNP9mml = await GUMARewardszsLou70.setRewardDistribution.call(addressJkM0HsP, {from: accounts[0]});

		assert.equal(uint2560alm6F, BigInt("0"))
		assert.equal(uint256rrN2Jj3, BigInt("0"))
		await expect(GUMARewardszsLou70.setGUMA.call(addressMmNkKQv, addressBEaZN8L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsLxhxQB1 = await GUMARewards.new({from: accounts[1]});
		const addressf2qxUwn = accounts[0]
		const uintTRRXQ6c = BigInt("1824")
		const addressEEjBtQx = accounts[4]
		const addressSak3VZR = accounts[1]
		const addressxY0D7zd = await GUMARewardsLxhxQB1.setRewardDistribution.call(addressf2qxUwn, {from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsLxhxQB1.onlyOwner.call({from: accounts[3]});
		const uint256gyV1E7l = await GUMARewardsLxhxQB1.stake.call(uintTRRXQ6c, {from: accounts[2]});
		const addressFC6ZvAO = await GUMARewardsLxhxQB1.updateReward.call(addressEEjBtQx, {from: accounts[0]});
		const uint256scxl8H1 = await GUMARewardsLxhxQB1.earned.call(addressSak3VZR, {from: accounts[4]});
		const uint256CBsbT8S = await GUMARewardsLxhxQB1.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(GUMARewardsLxhxQB1.setRewardDistribution.call(addressf2qxUwn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsce0UqPp = await GUMARewards.new({from: accounts[0]});
		const addressIQhSfqV = accounts[4]
		const uintUjkjeDw = BigInt("1301")
		const uintL6frTBB = BigInt("22")
		const uintdPfenJB = BigInt("1535")
		const uint256zLDW7Aq = await GUMARewardsce0UqPp.earned.call(addressIQhSfqV, {from: accounts[5]});
		const uint256dEd9x2M = await GUMARewardsce0UqPp.totalSupply.call({from: accounts[2]});
		const addressPXnPxiA = await GUMARewardsce0UqPp.owner.call({from: accounts[0]});
		await GUMARewardsce0UqPp.getReward.call({from: accounts[1]});
		const addresstvWHMNx = await GUMARewardsce0UqPp.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RVzLY4F = await GUMARewardsce0UqPp.stake.call(uintUjkjeDw, {from: accounts[4]});
		await GUMARewardsce0UqPp.onlyOwner.call({from: accounts[0]});
		const uint256eJnPBYa = await GUMARewardsce0UqPp.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256PC72LC0 = await GUMARewardsce0UqPp.lastTimeRewardApplicable.call({from: accounts[4]});
		await GUMARewardsce0UqPp.onlyOwner.call({from: accounts[3]});
		const uint256ny7WDTY = await GUMARewardsce0UqPp.notifyRewardAmount.call(uintL6frTBB, {from: accounts[3]});
		const uint256MuNSwLy = await GUMARewardsce0UqPp.stake.call(uintdPfenJB, {from: accounts[2]});

		assert.equal(addressPXnPxiA, 0x13AfF78944de13a88eC969c470f887579C584172)
		assert.equal(uint256dEd9x2M, BigInt("0"))
		assert.equal(uint256zLDW7Aq, BigInt("0"))
		await expect(GUMARewardsce0UqPp.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsce0UqPp = await GUMARewards.new({from: accounts[0]});
		const addressrG46Qm3 = accounts[2]
		const uintTYHF2B4 = BigInt("1301")
		const addresseoLzZlK = accounts[1]
		const addressqeTDLFg = accounts[5]
		const uintAblr9gW = BigInt("22")
		const uintNgYpjMT = BigInt("1544")
		const uint256dEd9x2M = await GUMARewardsce0UqPp.totalSupply.call({from: accounts[2]});
		const addressGDqn6NN = await GUMARewardsce0UqPp.transferOwnership.call(addressrG46Qm3, {from: accounts[0]});
		await GUMARewardsce0UqPp.getReward.call({from: accounts[1]});
		const uint256RVzLY4F = await GUMARewardsce0UqPp.stake.call(uintTYHF2B4, {from: accounts[4]});
		await GUMARewardsce0UqPp.onlyOwner.call({from: accounts[0]});
		const uint256IBoowfS = await GUMARewardsce0UqPp.earned.call(addresseoLzZlK, {from: accounts[4]});
		const uint256eJnPBYa = await GUMARewardsce0UqPp.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256PC72LC0 = await GUMARewardsce0UqPp.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressjNTgdh = await GUMARewardsce0UqPp.updateReward.call(addressqeTDLFg, {from: accounts[2]});
		await GUMARewardsce0UqPp.onlyOwner.call({from: accounts[3]});
		const uint256ny7WDTY = await GUMARewardsce0UqPp.notifyRewardAmount.call(uintAblr9gW, {from: accounts[3]});
		const uint256MuNSwLy = await GUMARewardsce0UqPp.stake.call(uintNgYpjMT, {from: accounts[2]});

		assert.equal(uint256dEd9x2M, BigInt("0"))
		await expect(GUMARewardsce0UqPp.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsce0UqPp = await GUMARewards.new({from: accounts[0]});
		const addressnE9h6w = accounts[0]
		const uintIpMKhC9 = BigInt("1301")
		const addressvXlc5ZP = accounts[1]
		const uintsRjV29 = BigInt("22")
		const addressM2FYAFn = accounts[4]
		const uintpNU4U3W = BigInt("1544")
		const uint256dEd9x2M = await GUMARewardsce0UqPp.totalSupply.call({from: accounts[2]});
		const addressSquwkUw = await GUMARewardsce0UqPp.setRewardDistribution.call(addressnE9h6w, {from: accounts[0]});
		await GUMARewardsce0UqPp.getReward.call({from: accounts[1]});
		const uint256RVzLY4F = await GUMARewardsce0UqPp.stake.call(uintIpMKhC9, {from: accounts[4]});
		await GUMARewardsce0UqPp.onlyOwner.call({from: accounts[0]});
		const uint256IBoowfS = await GUMARewardsce0UqPp.earned.call(addressvXlc5ZP, {from: accounts[4]});
		const uint256eJnPBYa = await GUMARewardsce0UqPp.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256PC72LC0 = await GUMARewardsce0UqPp.lastTimeRewardApplicable.call({from: accounts[4]});
		await GUMARewardsce0UqPp.onlyOwner.call({from: accounts[3]});
		const uint256ny7WDTY = await GUMARewardsce0UqPp.notifyRewardAmount.call(uintsRjV29, {from: accounts[3]});
		const addressVRueip = await GUMARewardsce0UqPp.transferOwnership.call(addressM2FYAFn, {from: accounts[5]});
		const uint256MuNSwLy = await GUMARewardsce0UqPp.stake.call(uintpNU4U3W, {from: accounts[2]});

		assert.equal(uint256dEd9x2M, BigInt("0"))
		await expect(GUMARewardsce0UqPp.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsce0UqPp = await GUMARewards.new({from: accounts[0]});
		const addressgh8Unk = accounts[2]
		await GUMARewardsce0UqPp.renounceOwnership.call({from: accounts[0]});
		await GUMARewardsce0UqPp.onlyOwner.call({from: accounts[5]});
		const uint256KqGeEdq = await GUMARewardsce0UqPp.earned.call(addressgh8Unk, {from: accounts[1]});
		await GUMARewardsce0UqPp.getReward.call({from: accounts[1]});

		await expect(GUMARewardsce0UqPp.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})