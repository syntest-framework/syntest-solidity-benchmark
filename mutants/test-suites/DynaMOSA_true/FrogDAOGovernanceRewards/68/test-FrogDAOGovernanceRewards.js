const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressqgZoMhi = accounts[0]
		const FrogDAOGovernanceRewardsjALz5n = await FrogDAOGovernanceRewards.new(addressqgZoMhi, {from: accounts[2]});
		const addressr3q7Gi = "0x0000000000000000000000000000000000000001"
		const addressdCfl3x = accounts[1]
		const uint256AWiEyA0 = await FrogDAOGovernanceRewardsjALz5n.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LGmDIuh = await FrogDAOGovernanceRewardsjALz5n.earned.call(addressr3q7Gi, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsjALz5n.renounceDevAddr.call({from: accounts[1]});
//		const addressjxphJ3l = await FrogDAOGovernanceRewardsjALz5n.updateReward.call(addressdCfl3x, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsjALz5n.getReward.call({from: accounts[4]});
//		const uint256HfsPxry = await FrogDAOGovernanceRewardsjALz5n.devFundAvailable.call({from: accounts[1]});

		assert.equal(uint256AWiEyA0, BigInt("0"))
		assert.equal(uint256LGmDIuh, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsjALz5n.renounceDevAddr.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressnMqhGX8 = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardszk12Uat = await FrogDAOGovernanceRewards.new(addressnMqhGX8, {from: accounts[1]});
		const uintHr2W4SQ = BigInt("1538")
		const addressKs8NDWR = accounts[5]
		const uintTNZJQId = BigInt("792")
//		const uint256VoOdNdI = await FrogDAOGovernanceRewardszk12Uat.notifyRewardAmount.call(uintHr2W4SQ, {from: accounts[3]});
//		const uint256W1uWwhU = await FrogDAOGovernanceRewardszk12Uat.earned.call(addressKs8NDWR, {from: accounts[5]});
//		const uint256ZcbDF1g = await FrogDAOGovernanceRewardszk12Uat.devFundAvailable.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardszk12Uat.renounceDevAddr.call({from: accounts[0]});
//		const uint256ELIBr3x = await FrogDAOGovernanceRewardszk12Uat.withdrawDevFund.call(uintTNZJQId, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardszk12Uat.notifyRewardAmount.call(uintHr2W4SQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresssNQP6Kg = accounts[2]
		const FrogDAOGovernanceRewardseKQeow7 = await FrogDAOGovernanceRewards.new(addresssNQP6Kg, {from: accounts[3]});
		const uintVtihme3 = BigInt("201")
		const uint256cJ5n3Xx = await FrogDAOGovernanceRewardseKQeow7.rewardPerToken.call({from: accounts[4]});
//		const uint256Tagz2Ml = await FrogDAOGovernanceRewardseKQeow7.withdraw.call(uintVtihme3, {from: accounts[0]});
//		await FrogDAOGovernanceRewardseKQeow7.checkhalve.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardseKQeow7.exit.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardseKQeow7.checkStart.call({from: accounts[0]});

		assert.equal(uint256cJ5n3Xx, BigInt("0"))
		await expect(FrogDAOGovernanceRewardseKQeow7.withdraw.call(uintVtihme3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQRY36ov = accounts[0]
		const FrogDAOGovernanceRewardssqv0zIA = await FrogDAOGovernanceRewards.new(addressQRY36ov, {from: accounts[4]});
		const uint256swnUlGw = await FrogDAOGovernanceRewardssqv0zIA.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iKf9qNy = await FrogDAOGovernanceRewardssqv0zIA.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardssqv0zIA.checkhalve.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardssqv0zIA.exit.call({from: accounts[4]});

		assert.equal(uint256iKf9qNy, BigInt("0"))
		assert.equal(uint256swnUlGw, BigInt("0"))
		await expect(FrogDAOGovernanceRewardssqv0zIA.checkhalve.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQv7ooy = accounts[1]
		const FrogDAOGovernanceRewardsALXNJSD = await FrogDAOGovernanceRewards.new(addressQv7ooy, {from: accounts[4]});
		const uint256baXYBqX = await FrogDAOGovernanceRewardsALXNJSD.devFundAvailable.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardsALXNJSD.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256WPHNQ6i = await FrogDAOGovernanceRewardsALXNJSD.rewardPerToken.call({from: accounts[3]});
//		const uint256AhgAA3 = await FrogDAOGovernanceRewardsALXNJSD.rewardPerToken.call({from: accounts[1]});
//		const uint256fHucsax = await FrogDAOGovernanceRewardsALXNJSD.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256baXYBqX, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsALXNJSD.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTbtSGUE = accounts[3]
		const FrogDAOGovernanceRewardsU9DR3YP = await FrogDAOGovernanceRewards.new(addressTbtSGUE, {from: accounts[2]});
		const uintNQGhiFK = BigInt("200")
		const addressYA5gUti = accounts[0]
		const addresszXJzfxc = "0x0000000000000000000000000000000000000001"
		const uintRPnHFke = BigInt("1422")
//		const uint256zpVKnmN = await FrogDAOGovernanceRewardsU9DR3YP.withdrawDevFund.call(uintNQGhiFK, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsU9DR3YP.renounceDevAddr.call({from: accounts[0]});
//		const uint256QLWnlcJ = await FrogDAOGovernanceRewardsU9DR3YP.earned.call(addressYA5gUti, {from: accounts[4]});
//		const uint256nsMM5O7 = await FrogDAOGovernanceRewardsU9DR3YP.earned.call(addresszXJzfxc, {from: accounts[1]});
//		const uint256vYwKGph = await FrogDAOGovernanceRewardsU9DR3YP.withdraw.call(uintRPnHFke, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsU9DR3YP.withdrawDevFund.call(uintNQGhiFK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgOaY5t = accounts[0]
		const FrogDAOGovernanceRewardssqv0zIA = await FrogDAOGovernanceRewards.new(addressgOaY5t, {from: accounts[4]});
		const addressLM0629C = accounts[4]
//		const address7hcHDO = await FrogDAOGovernanceRewardssqv0zIA.transferDevAddr.call(addressLM0629C, {from: accounts[2]});
//		const uint256swnUlGw = await FrogDAOGovernanceRewardssqv0zIA.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256iKf9qNy = await FrogDAOGovernanceRewardssqv0zIA.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardssqv0zIA.checkhalve.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardssqv0zIA.exit.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardssqv0zIA.transferDevAddr.call(addressLM0629C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressjUgnFBm = accounts[5]
		const FrogDAOGovernanceRewardshfFu7Pm = await FrogDAOGovernanceRewards.new(addressjUgnFBm, {from: accounts[0]});
		const addresstxLO0me = accounts[4]
//		await FrogDAOGovernanceRewardshfFu7Pm.getReward.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardshfFu7Pm.checkStart.call({from: accounts[0]});
//		const uint256qGfBvuG = await FrogDAOGovernanceRewardshfFu7Pm.devFundAvailable.call({from: accounts[0]});
//		const address9xUD5X = await FrogDAOGovernanceRewardshfFu7Pm.updateReward.call(addresstxLO0me, {from: accounts[4]});
//		await FrogDAOGovernanceRewardshfFu7Pm.exit.call({from: accounts[1]});
//		const uint256lEc69vt = await FrogDAOGovernanceRewardshfFu7Pm.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardshfFu7Pm.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQGOdw4W = accounts[3]
		const FrogDAOGovernanceRewardsU9DR3YP = await FrogDAOGovernanceRewards.new(addressQGOdw4W, {from: accounts[2]});
		const uintwHXRz39 = BigInt("363")
		const uintIKCrkOf = BigInt("200")
		const addressBekMD3M = accounts[0]
		const addressbIKufeq = accounts[3]
		const uintczrKJya = BigInt("1422")
//		const uint256MYKr1mE = await FrogDAOGovernanceRewardsU9DR3YP.notifyRewardAmount.call(uintwHXRz39, {from: accounts[2]});
//		const uint256zpVKnmN = await FrogDAOGovernanceRewardsU9DR3YP.withdrawDevFund.call(uintIKCrkOf, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsU9DR3YP.renounceDevAddr.call({from: accounts[0]});
//		const uint256QLWnlcJ = await FrogDAOGovernanceRewardsU9DR3YP.earned.call(addressBekMD3M, {from: accounts[4]});
//		const uint256nsMM5O7 = await FrogDAOGovernanceRewardsU9DR3YP.earned.call(addressbIKufeq, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsU9DR3YP.exit.call({from: accounts[3]});
//		const uint256vYwKGph = await FrogDAOGovernanceRewardsU9DR3YP.withdraw.call(uintczrKJya, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsU9DR3YP.notifyRewardAmount.call(uintwHXRz39, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressWVMIzM3 = accounts[3]
		const FrogDAOGovernanceRewardsnmykEDc = await FrogDAOGovernanceRewards.new(addressWVMIzM3, {from: "0x0000000000000000000000000000000000000001"});
		const addressF43Wxy0 = accounts[4]
		const uint256banZEGM = await FrogDAOGovernanceRewardsnmykEDc.devFundAvailable.call({from: accounts[2]});
		const uint256BIaESHM = await FrogDAOGovernanceRewardsnmykEDc.devFundAvailable.call({from: accounts[2]});
		const uint256Hiqghnq = await FrogDAOGovernanceRewardsnmykEDc.earned.call(addressF43Wxy0, {from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressWdYYOM6 = accounts[3]
		const FrogDAOGovernanceRewardsU9DR3YP = await FrogDAOGovernanceRewards.new(addressWdYYOM6, {from: accounts[2]});
		const addressOPqmNUG = accounts[4]
		const uintsk2xg8y = BigInt("197")
		const uintlj3t6Aa = BigInt("1116")
		const addresspM7I7Y8 = await FrogDAOGovernanceRewardsU9DR3YP.transferDevAddr.call(addressOPqmNUG, {from: accounts[3]});
//		const uint256zpVKnmN = await FrogDAOGovernanceRewardsU9DR3YP.withdrawDevFund.call(uintsk2xg8y, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsU9DR3YP.exit.call({from: accounts[5]});
//		const uint256X6VAiAc = await FrogDAOGovernanceRewardsU9DR3YP.devFundAvailable.call({from: accounts[2]});
//		const uint256vYwKGph = await FrogDAOGovernanceRewardsU9DR3YP.withdraw.call(uintlj3t6Aa, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsU9DR3YP.withdrawDevFund.call(uintsk2xg8y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})