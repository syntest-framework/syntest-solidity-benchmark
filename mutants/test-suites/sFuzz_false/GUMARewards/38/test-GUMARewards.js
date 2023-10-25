const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsqQmwz5m = await GUMARewards.new({from: accounts[2]});
		const addressXUJx392 = accounts[3]
		const uintg5Fpfya = BigInt("353")
		const uintfZRsnlX = BigInt("1447")
//		const addressQe2BxIh = await GUMARewardsqQmwz5m.transferOwnership.call(addressXUJx392, {from: accounts[5]});
//		const uint256y8DxMbb = await GUMARewardsqQmwz5m.stake.call(uintg5Fpfya, {from: accounts[1]});
//		await GUMARewardsqQmwz5m.renounceOwnership.call({from: accounts[1]});
//		const uint256P5gf4YD = await GUMARewardsqQmwz5m.stake.call(uintfZRsnlX, {from: accounts[3]});

		await expect(GUMARewardsqQmwz5m.transferOwnership.call(addressXUJx392, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsHtKZ4l = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressot8iHIj = accounts[1]
		const addressaMfNtOZ = "0x0000000000000000000000000000000000000001"
		const uintYJUjYl = BigInt("1906")
		const uint256U3vk8y = await GUMARewardsHtKZ4l.earned.call(addressot8iHIj, {from: accounts[3]});
		const addressollNgg = await GUMARewardsHtKZ4l.transferOwnership.call(addressaMfNtOZ, {from: accounts[0]});
		const uint256L20uE2I = await GUMARewardsHtKZ4l.stake.call(uintYJUjYl, {from: accounts[3]});
		await GUMARewardsHtKZ4l.onlyRewardDistribution.call({from: accounts[4]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsbeZCWi7 = await GUMARewards.new({from: accounts[2]});
		const uintx2OEHEk = BigInt("849")
		const uint256hjPvhv9 = await GUMARewardsbeZCWi7.lastTimeRewardApplicable.call({from: accounts[4]});
//		await GUMARewardsbeZCWi7.getReward.call({from: accounts[2]});
//		const uint256EHJgEEv = await GUMARewardsbeZCWi7.notifyRewardAmount.call(uintx2OEHEk, {from: accounts[2]});

		assert.equal(uint256hjPvhv9, BigInt("0"))
		await expect(GUMARewardsbeZCWi7.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsVsDv0Rf = await GUMARewards.new({from: accounts[0]});
		const addressgUq6EVu = accounts[2]
		const addressY53OQw = accounts[2]
		const addressBx3GmJv = accounts[1]
//		await GUMARewardsVsDv0Rf.onlyOwner.call({from: accounts[3]});
//		const uint256gRVATDp = await GUMARewardsVsDv0Rf.totalSupply.call({from: accounts[3]});
//		await GUMARewardsVsDv0Rf.getReward.call({from: accounts[2]});
//		const addressbqQ9oGN = await GUMARewardsVsDv0Rf.transferOwnership.call(addressgUq6EVu, {from: "0x0000000000000000000000000000000000000001"});
//		const addresspuzCbOb = await GUMARewardsVsDv0Rf.setGUMA.call(addressBx3GmJv, addressY53OQw, {from: accounts[0]});

		await expect(GUMARewardsVsDv0Rf.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsjS4dcXu = await GUMARewards.new({from: accounts[3]});
		const uintwGYsBV5 = BigInt("1296")
//		const uint256Lqod2ra = await GUMARewardsjS4dcXu.stake.call(uintwGYsBV5, {from: accounts[2]});
//		await GUMARewardsjS4dcXu.getReward.call({from: accounts[1]});
//		const addressv70Y1ia = await GUMARewardsjS4dcXu.owner.call({from: accounts[0]});

		await expect(GUMARewardsjS4dcXu.stake.call(uintwGYsBV5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsbeZCWi7 = await GUMARewards.new({from: accounts[2]});
		const address1bvNBD = accounts[4]
		const uintUo7cA6 = BigInt("849")
		const uint256hjPvhv9 = await GUMARewardsbeZCWi7.lastTimeRewardApplicable.call({from: accounts[4]});
//		await GUMARewardsbeZCWi7.getReward.call({from: accounts[2]});
//		const addressVikmYpS = await GUMARewardsbeZCWi7.transferOwnership.call(address1bvNBD, {from: accounts[2]});
//		const uint256EHJgEEv = await GUMARewardsbeZCWi7.notifyRewardAmount.call(uintUo7cA6, {from: accounts[2]});

		assert.equal(uint256hjPvhv9, BigInt("0"))
		await expect(GUMARewardsbeZCWi7.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardspzOt6cb = await GUMARewards.new({from: accounts[5]});
		const addressUTz1KRV = accounts[2]
//		await GUMARewardspzOt6cb.renounceOwnership.call({from: accounts[5]});
//		const uint256X0T2LvC = await GUMARewardspzOt6cb.lastTimeRewardApplicable.call({from: accounts[5]});
//		const addressVc7SG9 = await GUMARewardspzOt6cb.transferOwnership.call(addressUTz1KRV, {from: accounts[4]});

		await expect(GUMARewardspzOt6cb.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsbeZCWi7 = await GUMARewards.new({from: accounts[2]});
		const addressgTrDRTc = await GUMARewardsbeZCWi7.owner.call({from: accounts[0]});
//		await GUMARewardsbeZCWi7.getReward.call({from: accounts[2]});

		assert.equal(addressgTrDRTc, 0x915a4C24e130dbeB91897d3aE7Fc1C4386Ab9c95)
		await expect(GUMARewardsbeZCWi7.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsNpHzHe = await GUMARewards.new({from: accounts[1]});
		const addressmPQyCVM = accounts[3]
		const addresshGs7QOT = accounts[5]
		const uint256d9XCMSc = await GUMARewardsNpHzHe.balanceOf.call(addressmPQyCVM, {from: accounts[3]});
		const addressIhwUBTO = await GUMARewardsNpHzHe.owner.call({from: accounts[4]});
		const addressGCev1r = await GUMARewardsNpHzHe.setRewardDistribution.call(addresshGs7QOT, {from: accounts[1]});

		assert.equal(addressIhwUBTO, 0x4Acf56C77672ad0812138e474C1635aBD7e0720D)
		assert.equal(uint256d9XCMSc, BigInt("0"))
	});
})