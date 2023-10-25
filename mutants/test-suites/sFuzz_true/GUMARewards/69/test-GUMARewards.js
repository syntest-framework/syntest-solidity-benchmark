const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsLkpZG2P = await GUMARewards.new({from: accounts[3]});
		const addressAs4T1C4 = accounts[0]
		const uintSHJRQ6d = BigInt("887")
		const addressd1c42Oc = accounts[4]
		const uint256GkwImFU = await GUMARewardsLkpZG2P.earned.call(addressAs4T1C4, {from: accounts[4]});
		const uint256Z8IF0S1 = await GUMARewardsLkpZG2P.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256yyNdOk = await GUMARewardsLkpZG2P.stake.call(uintSHJRQ6d, {from: accounts[2]});
//		const addressjj5AQiT = await GUMARewardsLkpZG2P.transferOwnership.call(addressd1c42Oc, {from: accounts[4]});

		assert.equal(uint256GkwImFU, BigInt("0"))
		assert.equal(uint256Z8IF0S1, BigInt("0"))
		await expect(GUMARewardsLkpZG2P.stake.call(uintSHJRQ6d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsGfyXPKp = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressM82N5rZ = accounts[1]
		const uintwuskumm = BigInt("2007")
		const addressYHGrSBs = accounts[2]
		const uint256Y1WDRJ = await GUMARewardsGfyXPKp.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressJJEDFCu = await GUMARewardsGfyXPKp.transferOwnership.call(addressM82N5rZ, {from: accounts[1]});
		const uint256KCWarqF = await GUMARewardsGfyXPKp.stake.call(uintwuskumm, {from: accounts[3]});
		const uint256Erom5iA = await GUMARewardsGfyXPKp.totalSupply.call({from: accounts[0]});
		const uint256PIH2R7o = await GUMARewardsGfyXPKp.earned.call(addressYHGrSBs, {from: accounts[1]});
		await GUMARewardsGfyXPKp.onlyRewardDistribution.call({from: accounts[4]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsSbVMjTT = await GUMARewards.new({from: accounts[5]});
		const addressGVUghg = accounts[3]
		const addresstRSTloh = accounts[2]
//		const addressjmN2MHd = await GUMARewardsSbVMjTT.updateReward.call(addressGVUghg, {from: accounts[4]});
//		const addressFj27RBw = await GUMARewardsSbVMjTT.setRewardDistribution.call(addresstRSTloh, {from: accounts[1]});
//		const uint256H2SRbU2 = await GUMARewardsSbVMjTT.totalSupply.call({from: accounts[3]});

		await expect(GUMARewardsSbVMjTT.updateReward.call(addressGVUghg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfzXdRim = await GUMARewards.new({from: accounts[2]});
		const addressKcwHHL = accounts[4]
		const addressFJU6Qbb = accounts[2]
		const uint256mItEAfT = await GUMARewardsfzXdRim.earned.call(addressKcwHHL, {from: accounts[1]});
		const boolWuUoEWS = await GUMARewardsfzXdRim.isOwner.call({from: accounts[1]});
		const uint256IY0rxzC = await GUMARewardsfzXdRim.earned.call(addressFJU6Qbb, {from: accounts[3]});

		assert.equal(boolWuUoEWS, false)
		assert.equal(uint256IY0rxzC, BigInt("0"))
		assert.equal(uint256mItEAfT, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardstqRCp3 = await GUMARewards.new({from: accounts[0]});
		const addressFkqGYuV = accounts[5]
		const addressQSLDEfj = accounts[3]
//		const addressWKCu5PJ = await GUMARewardstqRCp3.setGUMA.call(addressQSLDEfj, addressFkqGYuV, {from: accounts[3]});
//		const uint256fVTD8H4 = await GUMARewardstqRCp3.totalSupply.call({from: accounts[1]});
//		const uint256ojUK1tT = await GUMARewardstqRCp3.totalSupply.call({from: accounts[3]});

		await expect(GUMARewardstqRCp3.setGUMA.call(addressQSLDEfj, addressFkqGYuV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsbaxsxSI = await GUMARewards.new({from: accounts[4]});
		const addressNJn2tw8 = accounts[3]
		const addressFm8QQG6 = accounts[4]
		const uint256jFRbBWX = await GUMARewardsbaxsxSI.totalSupply.call({from: accounts[2]});
//		await GUMARewardsbaxsxSI.getReward.call({from: accounts[3]});
//		const addressDWKnJv0 = await GUMARewardsbaxsxSI.setGUMA.call(addressFm8QQG6, addressNJn2tw8, {from: accounts[2]});
//		const boolDdwSHEP = await GUMARewardsbaxsxSI.isOwner.call({from: accounts[1]});

		assert.equal(uint256jFRbBWX, BigInt("0"))
		await expect(GUMARewardsbaxsxSI.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsbaxsxSI = await GUMARewards.new({from: accounts[4]});
		const addressYNUWrbZ = accounts[2]
		const addressHAXABSd = accounts[3]
		const addressctp0Uyc = accounts[4]
		const uint0kRN0o = BigInt("1542")
		const uint256jFRbBWX = await GUMARewardsbaxsxSI.totalSupply.call({from: accounts[2]});
//		const addressWy2H4hF = await GUMARewardsbaxsxSI.transferOwnership.call(addressYNUWrbZ, {from: accounts[2]});
//		await GUMARewardsbaxsxSI.getReward.call({from: accounts[3]});
//		const addressDWKnJv0 = await GUMARewardsbaxsxSI.setGUMA.call(addressctp0Uyc, addressHAXABSd, {from: accounts[2]});
//		const uint256t6I16ma = await GUMARewardsbaxsxSI.stake.call(uint0kRN0o, {from: accounts[3]});
//		const boolDdwSHEP = await GUMARewardsbaxsxSI.isOwner.call({from: accounts[1]});

		assert.equal(uint256jFRbBWX, BigInt("0"))
		await expect(GUMARewardsbaxsxSI.transferOwnership.call(addressYNUWrbZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfzXdRim = await GUMARewards.new({from: accounts[2]});
		const addressBKxo58L = accounts[5]
		const addressp4utWGj = accounts[1]
		const uint256mItEAfT = await GUMARewardsfzXdRim.earned.call(addressBKxo58L, {from: accounts[1]});
		const addressVK5z251 = await GUMARewardsfzXdRim.owner.call({from: accounts[3]});
		const boolWuUoEWS = await GUMARewardsfzXdRim.isOwner.call({from: accounts[1]});
//		const addressijMxRG = await GUMARewardsfzXdRim.setRewardDistribution.call(addressp4utWGj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressVK5z251, 0x31374533Ae0030d5519975D2B01c508A5Ed63E24)
		assert.equal(boolWuUoEWS, false)
		assert.equal(uint256mItEAfT, BigInt("0"))
		await expect(GUMARewardsfzXdRim.setRewardDistribution.call(addressp4utWGj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfzXdRim = await GUMARewards.new({from: accounts[2]});
		const addressXaQWive = accounts[5]
		const addressvHSJUBq = accounts[3]
//		await GUMARewardsfzXdRim.renounceOwnership.call({from: accounts[2]});
//		await GUMARewardsfzXdRim.getReward.call({from: accounts[3]});
//		const uint256mItEAfT = await GUMARewardsfzXdRim.earned.call(addressXaQWive, {from: accounts[1]});
//		const uint256IY0rxzC = await GUMARewardsfzXdRim.earned.call(addressvHSJUBq, {from: accounts[3]});

		await expect(GUMARewardsfzXdRim.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfzXdRim = await GUMARewards.new({from: accounts[2]});
		const addresswLb8kGy = accounts[3]
		const addressyKuOmYU = accounts[4]
		const addresshDlwWee = await GUMARewardsfzXdRim.setRewardDistribution.call(addresswLb8kGy, {from: accounts[2]});
		const uint256IY0rxzC = await GUMARewardsfzXdRim.earned.call(addressyKuOmYU, {from: accounts[3]});
//		await GUMARewardsfzXdRim.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256IY0rxzC, BigInt("0"))
		await expect(GUMARewardsfzXdRim.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsbaxsxSI = await GUMARewards.new({from: accounts[4]});
		const addressYO1YNrZ = accounts[4]
		const addressQC9zFTq = await GUMARewardsbaxsxSI.transferOwnership.call(addressYO1YNrZ, {from: accounts[4]});
//		await GUMARewardsbaxsxSI.getReward.call({from: accounts[3]});

		await expect(GUMARewardsbaxsxSI.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})