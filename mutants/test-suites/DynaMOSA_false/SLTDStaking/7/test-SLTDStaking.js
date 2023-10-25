const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingFzfOZqg = await SLTDStaking.new({from: accounts[0]});
		const addressIrCCIh = accounts[4]
		const addressVjexQTd = accounts[4]
		const addressWR1Tm0j = accounts[0]
		const addresscRQD3dj = accounts[2]
//		await SLTDStakingFzfOZqg.exit.call({from: accounts[4]});
//		const uint256MddfNIS = await SLTDStakingFzfOZqg.balanceOf.call(addressIrCCIh, {from: accounts[4]});
//		const addressPkeJMD7 = await SLTDStakingFzfOZqg.setRewardDistribution.call(addressVjexQTd, {from: "0x0000000000000000000000000000000000000001"});
//		const addressohPq8nn = await SLTDStakingFzfOZqg.transferOwnership.call(addressWR1Tm0j, {from: accounts[3]});
//		const addressburSoUi = await SLTDStakingFzfOZqg.setRewardDistribution.call(addresscRQD3dj, {from: accounts[1]});

		await expect(SLTDStakingFzfOZqg.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingeEVLlmB = await SLTDStaking.new({from: accounts[5]});
		const addresszKELrRS = accounts[0]
		const addresseGJOoo1 = accounts[3]
		const addressKEDj56R = accounts[3]
		const addressU7yiV3F = accounts[3]
//		const addressPkarkwr = await SLTDStakingeEVLlmB.updateReward.call(addresszKELrRS, {from: accounts[2]});
//		const addressRXkvwTN = await SLTDStakingeEVLlmB.setSLTD.call(addressKEDj56R, addresseGJOoo1, {from: accounts[2]});
//		const addresszUhCIP7 = await SLTDStakingeEVLlmB.setRewardDistribution.call(addressU7yiV3F, {from: accounts[0]});

		await expect(SLTDStakingeEVLlmB.updateReward.call(addresszKELrRS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyPET7F2 = await SLTDStaking.new({from: accounts[1]});
		const uintiC2kkD = BigInt("1243")
		const addressplq7Np = accounts[0]
//		await SLTDStakingyPET7F2.renounceOwnership.call({from: accounts[1]});
//		const uint256PXPLvg = await SLTDStakingyPET7F2.withdraw.call(uintiC2kkD, {from: accounts[4]});
//		const uint256UeOirw = await SLTDStakingyPET7F2.earned.call(addressplq7Np, {from: accounts[0]});

		await expect(SLTDStakingyPET7F2.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingMWIugqt = await SLTDStaking.new({from: accounts[4]});
		const addressLuyt5Hv = accounts[0]
//		await SLTDStakingMWIugqt.getReward.call({from: accounts[2]});
//		const addressl5eAitN = await SLTDStakingMWIugqt.transferOwnership.call(addressLuyt5Hv, {from: accounts[1]});
//		await SLTDStakingMWIugqt.onlyRewardDistribution.call({from: accounts[1]});
//		await SLTDStakingMWIugqt.onlyRewardDistribution.call({from: accounts[1]});
		await SLTDStakingMWIugqt.getReward.call({from: accounts[2]});
//		await SLTDStakingMWIugqt.onlyRewardDistribution.call({from: accounts[2]});

		await expect(SLTDStakingMWIugqt.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingXyilXtn = await SLTDStaking.new({from: accounts[0]});
		const uintqBgWKrJ = BigInt("592")
		const uintCoItbkw = BigInt("487")
		const addresskCRrICE = accounts[4]
		const addressiopa0W6 = accounts[1]
//		const uint256xJXXEj = await SLTDStakingXyilXtn.notifyRewardAmount.call(uintqBgWKrJ, {from: accounts[2]});
//		const uint256fWG3m5v = await SLTDStakingXyilXtn.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256wZsdAbv = await SLTDStakingXyilXtn.stake.call(uintCoItbkw, {from: accounts[4]});
//		const addressDVEvrmF = await SLTDStakingXyilXtn.setRewardDistribution.call(addresskCRrICE, {from: accounts[5]});
//		const addressEPQG03W = await SLTDStakingXyilXtn.setRewardDistribution.call(addressiopa0W6, {from: accounts[4]});

		await expect(SLTDStakingXyilXtn.notifyRewardAmount.call(uintqBgWKrJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking8wPCnj = await SLTDStaking.new({from: accounts[2]});
		const uintHk3ZB45 = BigInt("360")
		const addressycrsMUk = accounts[1]
//		const uint256UW7klwh = await SLTDStaking8wPCnj.stake.call(uintHk3ZB45, {from: accounts[0]});
//		const boolpqb9ZuY = await SLTDStaking8wPCnj.isOwner.call({from: accounts[2]});
//		const uint256FBSJpAF = await SLTDStaking8wPCnj.balanceOf.call(addressycrsMUk, {from: accounts[4]});
//		const uint256OzVTy6M = await SLTDStaking8wPCnj.rewardPerToken.call({from: accounts[2]});
//		await SLTDStaking8wPCnj.exit.call({from: accounts[0]});

		await expect(SLTDStaking8wPCnj.stake.call(uintHk3ZB45, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingyPET7F2 = await SLTDStaking.new({from: accounts[1]});
		const addressUX5eShu = accounts[2]
		const addressEpHSglH = accounts[1]
		const uint256WCGlBYQ = await SLTDStakingyPET7F2.rewardPerToken.call({from: accounts[4]});
		const addressgxUWusX = await SLTDStakingyPET7F2.transferOwnership.call(addressUX5eShu, {from: accounts[1]});
		const uint256UeOirw = await SLTDStakingyPET7F2.earned.call(addressEpHSglH, {from: accounts[0]});

		assert.equal(uint256UeOirw, BigInt("0"))
		assert.equal(uint256WCGlBYQ, BigInt("0"))
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingv0n9pxL = await SLTDStaking.new({from: accounts[0]});
		const uintuVirzH = BigInt("261")
		const addresszTjvOZB = await SLTDStakingv0n9pxL.owner.call({from: accounts[3]});
//		const uint256BWwVRBI = await SLTDStakingv0n9pxL.withdraw.call(uintuVirzH, {from: accounts[4]});

		assert.equal(addresszTjvOZB, 0x8dF0e7628cBFDd08152b2e77122bCc8b07e8B6E7)
		await expect(SLTDStakingv0n9pxL.withdraw.call(uintuVirzH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking4UzqZy = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPPcC1s4 = BigInt("49")
		const uint256n2OuXr0 = await SLTDStaking4UzqZy.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256rqmUajq = await SLTDStaking4UzqZy.lastTimeRewardApplicable.call({from: accounts[3]});
		await SLTDStaking4UzqZy.renounceOwnership.call({from: accounts[1]});
		await SLTDStaking4UzqZy.exit.call({from: accounts[2]});
		const uint256TTEZZc = await SLTDStaking4UzqZy.rewardPerToken.call({from: accounts[1]});
		const uint256hXjOwep = await SLTDStaking4UzqZy.notifyRewardAmount.call(uintPPcC1s4, {from: accounts[1]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingMWIugqt = await SLTDStaking.new({from: accounts[4]});
		const addressrKkhKD0 = accounts[3]
		const addressYkzzfLq = await SLTDStakingMWIugqt.setRewardDistribution.call(addressrKkhKD0, {from: accounts[4]});
//		await SLTDStakingMWIugqt.getReward.call({from: accounts[2]});

		await expect(SLTDStakingMWIugqt.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})