const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsQUR5Af = await GUMARewards.new({from: accounts[4]});
		const addressUTFhLDd = accounts[1]
		const uintlJO7cBQ = BigInt("267")
		const addressyznOmhz = accounts[4]
//		const addressf5Cg9EJ = await GUMARewardsQUR5Af.updateReward.call(addressUTFhLDd, {from: accounts[5]});
//		await GUMARewardsQUR5Af.getReward.call({from: accounts[4]});
//		const uint256kOzOkLX = await GUMARewardsQUR5Af.stake.call(uintlJO7cBQ, {from: accounts[2]});
//		await GUMARewardsQUR5Af.onlyOwner.call({from: accounts[1]});
//		const uint256WkA2nfp = await GUMARewardsQUR5Af.earned.call(addressyznOmhz, {from: accounts[2]});

		await expect(GUMARewardsQUR5Af.updateReward.call(addressUTFhLDd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsIxlooRf = await GUMARewards.new({from: accounts[1]});
		const uintM4koDD = BigInt("546")
		const addressrhp4xvK = "0x0000000000000000000000000000000000000001"
//		const uint256E5p0DZy = await GUMARewardsIxlooRf.stake.call(uintM4koDD, {from: accounts[1]});
//		const addresslW0vMd3 = await GUMARewardsIxlooRf.transferOwnership.call(addressrhp4xvK, {from: accounts[1]});

		await expect(GUMARewardsIxlooRf.stake.call(uintM4koDD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsd3qgLPB = await GUMARewards.new({from: accounts[0]});
		const uint256KLvhLHY = await GUMARewardsd3qgLPB.rewardPerToken.call({from: accounts[3]});
		const uint256xub5Bze = await GUMARewardsd3qgLPB.totalSupply.call({from: accounts[4]});
		const boolSUtHcq = await GUMARewardsd3qgLPB.isOwner.call({from: accounts[1]});

		assert.equal(boolSUtHcq, false)
		assert.equal(uint256KLvhLHY, BigInt("0"))
		assert.equal(uint256xub5Bze, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsaag1jJu = await GUMARewards.new({from: accounts[4]});
		const uintQrzYVBi = BigInt("1462")
//		await GUMARewardsaag1jJu.renounceOwnership.call({from: accounts[5]});
//		const uint256Lhg0R8X = await GUMARewardsaag1jJu.stake.call(uintQrzYVBi, {from: accounts[5]});
//		await GUMARewardsaag1jJu.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(GUMARewardsaag1jJu.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsLPFBg9f = await GUMARewards.new({from: accounts[4]});
		const uintAgrBb3U = BigInt("1343")
//		await GUMARewardsLPFBg9f.getReward.call({from: accounts[1]});
//		await GUMARewardsLPFBg9f.renounceOwnership.call({from: accounts[0]});
//		const addressC3Tde4I = await GUMARewardsLPFBg9f.owner.call({from: accounts[1]});
//		const bool8dYjbR = await GUMARewardsLPFBg9f.isOwner.call({from: accounts[4]});
//		const uint256dnj701z = await GUMARewardsLPFBg9f.notifyRewardAmount.call(uintAgrBb3U, {from: accounts[5]});
//		const uint256GgFyw7C = await GUMARewardsLPFBg9f.totalSupply.call({from: accounts[1]});

		await expect(GUMARewardsLPFBg9f.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsIxlooRf = await GUMARewards.new({from: accounts[1]});
		const addressquAODa1 = "0x0000000000000000000000000000000000000002"
		const addresslW0vMd3 = await GUMARewardsIxlooRf.transferOwnership.call(addressquAODa1, {from: accounts[1]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsIxlooRf = await GUMARewards.new({from: accounts[1]});
		const uinth2uB8o5 = BigInt("556")
		const addressfGiVAOl = "0x0000000000000000000000000000000000000001"
//		await GUMARewardsIxlooRf.renounceOwnership.call({from: accounts[1]});
//		await GUMARewardsIxlooRf.getReward.call({from: accounts[5]});
//		const uint256E5p0DZy = await GUMARewardsIxlooRf.stake.call(uinth2uB8o5, {from: accounts[1]});
//		const addresslW0vMd3 = await GUMARewardsIxlooRf.transferOwnership.call(addressfGiVAOl, {from: accounts[1]});

		await expect(GUMARewardsIxlooRf.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsIxlooRf = await GUMARewards.new({from: accounts[1]});
		const uintKk8XhGi = BigInt("47")
		const uintN9TkzgZ = BigInt("546")
		const addressGFFmzQt = accounts[3]
//		const uint256qcySR3z = await GUMARewardsIxlooRf.notifyRewardAmount.call(uintKk8XhGi, {from: accounts[4]});
//		const uint256E5p0DZy = await GUMARewardsIxlooRf.stake.call(uintN9TkzgZ, {from: accounts[1]});
//		const addressUsZI1Wj = await GUMARewardsIxlooRf.updateReward.call(addressGFFmzQt, {from: accounts[0]});

		await expect(GUMARewardsIxlooRf.notifyRewardAmount.call(uintKk8XhGi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsnlfTJcr = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressaDG3fdS = accounts[0]
		const addresszVvOZRh = accounts[5]
		const addresscfMVHWY = await GUMARewardsnlfTJcr.transferOwnership.call(addressaDG3fdS, {from: accounts[5]});
		const addressBOcpTIf = await GUMARewardsnlfTJcr.transferOwnership.call(addresszVvOZRh, {from: accounts[2]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsDpoOJNy = await GUMARewards.new({from: accounts[3]});
		const addresszmfLSxz = accounts[3]
		const addresszHmlFSy = accounts[5]
		const uint256oBjxAnT = await GUMARewardsDpoOJNy.rewardPerToken.call({from: accounts[0]});
		const boolxH5lioB = await GUMARewardsDpoOJNy.isOwner.call({from: accounts[5]});
		const addressw1j4spq = await GUMARewardsDpoOJNy.setRewardDistribution.call(addresszmfLSxz, {from: accounts[3]});
//		const addressEuLNrWE = await GUMARewardsDpoOJNy.transferOwnership.call(addresszHmlFSy, {from: accounts[4]});

		assert.equal(boolxH5lioB, false)
		assert.equal(uint256oBjxAnT, BigInt("0"))
		await expect(GUMARewardsDpoOJNy.transferOwnership.call(addresszHmlFSy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsIxlooRf = await GUMARewards.new({from: accounts[1]});
		const addressM3YEY0u = "0x0000000000000000000000000000000000000003"
		const addressIgCHhoz = await GUMARewardsIxlooRf.owner.call({from: accounts[2]});
		const addresslW0vMd3 = await GUMARewardsIxlooRf.transferOwnership.call(addressM3YEY0u, {from: accounts[1]});

		assert.equal(addressIgCHhoz, 0x1ec60B011f47f7fc33A0a003488e9De493f2BD80)
	});
})