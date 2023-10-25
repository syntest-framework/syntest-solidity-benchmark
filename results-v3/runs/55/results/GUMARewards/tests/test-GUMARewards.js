const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsxRYw6XM = await GUMARewards.new({from: accounts[4]});
		const addressN5lFTkW = accounts[0]
		const uint256TiU29cv = await GUMARewardsxRYw6XM.earned.call(addressN5lFTkW, {from: accounts[0]});
		await GUMARewardsxRYw6XM.renounceOwnership.call({from: accounts[3]});
		const uint256FgOvlvZ = await GUMARewardsxRYw6XM.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256TiU29cv, BigInt("0"))
		await expect(GUMARewardsxRYw6XM.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsB3rOaMU = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMuFr6U0 = await GUMARewardsB3rOaMU.owner.call({from: accounts[5]});
		const uint256tNjEweT = await GUMARewardsB3rOaMU.totalSupply.call({from: accounts[4]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsh7pPMZt = await GUMARewards.new({from: accounts[1]});
		const addressYKJN4q = accounts[4]
		const addressZN8kuYm = accounts[3]
		const addressxl5IhiS = await GUMARewardsh7pPMZt.owner.call({from: accounts[2]});
		const uint256yKcMFP9 = await GUMARewardsh7pPMZt.earned.call(addressYKJN4q, {from: accounts[4]});
		const addressmdqLFbw = await GUMARewardsh7pPMZt.setRewardDistribution.call(addressZN8kuYm, {from: accounts[5]});

		assert.equal(addressxl5IhiS, 0xAf1365b6637A886db4ca7D738587667dE95c2642)
		assert.equal(uint256yKcMFP9, BigInt("0"))
		await expect(GUMARewardsh7pPMZt.setRewardDistribution.call(addressZN8kuYm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqIPt4Ih = await GUMARewards.new({from: accounts[0]});
		const addressy04Ayup = accounts[0]
		const addressKhrcl7J = accounts[4]
		const uint256acT7SUN = await GUMARewardsqIPt4Ih.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGFo07a9 = await GUMARewardsqIPt4Ih.isOwner.call({from: accounts[3]});
		const uint256puyAN9e = await GUMARewardsqIPt4Ih.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressNIRoIE4 = await GUMARewardsqIPt4Ih.setGUMA.call(addressKhrcl7J, addressy04Ayup, {from: accounts[0]});

		assert.equal(boolGFo07a9, false)
		assert.equal(uint256acT7SUN, BigInt("0"))
		assert.equal(uint256puyAN9e, BigInt("0"))
		await expect(GUMARewardsqIPt4Ih.setGUMA.call(addressKhrcl7J, addressy04Ayup, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsSEKaAl0 = await GUMARewards.new({from: accounts[2]});
		const addressexOGMkB = accounts[3]
		const addresszzdppJV = accounts[1]
		const uint256SrV0Anc = await GUMARewardsSEKaAl0.balanceOf.call(addressexOGMkB, {from: accounts[0]});
		const uint256a9gzNDh = await GUMARewardsSEKaAl0.earned.call(addresszzdppJV, {from: accounts[0]});
		await GUMARewardsSEKaAl0.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256SrV0Anc, BigInt("0"))
		assert.equal(uint256a9gzNDh, BigInt("0"))
		await expect(GUMARewardsSEKaAl0.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsSEKaAl0 = await GUMARewards.new({from: accounts[2]});
		const addressAQrlkmI = accounts[3]
		const addressrlT06vF = accounts[0]
		const addressCk4QCjU = "0x0000000000000000000000000000000000000001"
		const addressZKEK2K7 = accounts[1]
		await GUMARewardsSEKaAl0.renounceOwnership.call({from: accounts[2]});
		const uint256SrV0Anc = await GUMARewardsSEKaAl0.balanceOf.call(addressAQrlkmI, {from: accounts[0]});
		const addressA0INLK = await GUMARewardsSEKaAl0.updateReward.call(addressrlT06vF, {from: accounts[1]});
		const addressyKJg3rG = await GUMARewardsSEKaAl0.transferOwnership.call(addressCk4QCjU, {from: accounts[4]});
		const uint256a9gzNDh = await GUMARewardsSEKaAl0.earned.call(addressZKEK2K7, {from: accounts[0]});
		await GUMARewardsSEKaAl0.onlyOwner.call({from: accounts[2]});

		await expect(GUMARewardsSEKaAl0.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsvGO67wA = await GUMARewards.new({from: accounts[0]});
		const uintnQWoiF4 = BigInt("1098")
		const addressR00BpEa = accounts[2]
		const addressLm7HrAp = accounts[3]
		const uint256kxothX = await GUMARewardsvGO67wA.totalSupply.call({from: accounts[5]});
		const uint256HtmPi3o = await GUMARewardsvGO67wA.stake.call(uintnQWoiF4, {from: accounts[0]});
		const addressZESKd9A = await GUMARewardsvGO67wA.setGUMA.call(addressLm7HrAp, addressR00BpEa, {from: accounts[5]});

		assert.equal(uint256kxothX, BigInt("0"))
		await expect(GUMARewardsvGO67wA.stake.call(uintnQWoiF4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsxRYw6XM = await GUMARewards.new({from: accounts[4]});
		const addressBX9fu4y = accounts[0]
		const addressyu6yxl6 = "0x0000000000000000000000000000000000000001"
		const uint256TiU29cv = await GUMARewardsxRYw6XM.earned.call(addressBX9fu4y, {from: accounts[0]});
		const uint256FgOvlvZ = await GUMARewardsxRYw6XM.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressVuvO56K = await GUMARewardsxRYw6XM.transferOwnership.call(addressyu6yxl6, {from: accounts[4]});

		assert.equal(uint256FgOvlvZ, BigInt("0"))
		assert.equal(uint256TiU29cv, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsvGO67wA = await GUMARewards.new({from: accounts[0]});
		const uintZemUqT9 = BigInt("1102")
		const addressoXuwEK = accounts[2]
		const addressDtkFMQR = accounts[3]
		const uint256kxothX = await GUMARewardsvGO67wA.totalSupply.call({from: accounts[5]});
		await GUMARewardsvGO67wA.getReward.call({from: accounts[0]});
		const uint256HtmPi3o = await GUMARewardsvGO67wA.stake.call(uintZemUqT9, {from: accounts[0]});
		const addressZESKd9A = await GUMARewardsvGO67wA.setGUMA.call(addressDtkFMQR, addressoXuwEK, {from: accounts[5]});

		assert.equal(uint256kxothX, BigInt("0"))
		await expect(GUMARewardsvGO67wA.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsxRYw6XM = await GUMARewards.new({from: accounts[4]});
		const addresszMjrEwM = accounts[3]
		await GUMARewardsxRYw6XM.getReward.call({from: accounts[4]});
		const addressksoWXg6 = await GUMARewardsxRYw6XM.setRewardDistribution.call(addresszMjrEwM, {from: accounts[4]});
		const uint2568TX6dc = await GUMARewardsxRYw6XM.totalSupply.call({from: accounts[0]});

		await expect(GUMARewardsxRYw6XM.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})