const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardNNeDp4D = await SLTDETHlpReward.new({from: accounts[3]});
		const uintyDTaiQZ = BigInt("1066")
		const uintGa9ydU9 = BigInt("1257")
		const uint256poYa6Fn = await SLTDETHlpRewardNNeDp4D.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256IFyG9eN = await SLTDETHlpRewardNNeDp4D.stake.call(uintyDTaiQZ, {from: accounts[4]});
//		await SLTDETHlpRewardNNeDp4D.exit.call({from: accounts[3]});
//		const uint256HlMMbYq = await SLTDETHlpRewardNNeDp4D.remainingReward.call({from: accounts[0]});
//		const uint256veFCMtZ = await SLTDETHlpRewardNNeDp4D.stake.call(uintGa9ydU9, {from: accounts[1]});

		assert.equal(uint256poYa6Fn, BigInt("0"))
		await expect(SLTDETHlpRewardNNeDp4D.stake.call(uintyDTaiQZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtAh1gdI = await SLTDETHlpReward.new({from: accounts[0]});
		const addressTWb8j9D = accounts[1]
		const uintgthpOGK = BigInt("113")
//		const addressaId9xUq = await SLTDETHlpRewardtAh1gdI.setRewardDistribution.call(addressTWb8j9D, {from: accounts[2]});
//		const uint256e6lFoIZ = await SLTDETHlpRewardtAh1gdI.withdraw.call(uintgthpOGK, {from: accounts[2]});

		await expect(SLTDETHlpRewardtAh1gdI.setRewardDistribution.call(addressTWb8j9D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZVeipYL = await SLTDETHlpReward.new({from: accounts[0]});
		const uintXpuiprZ = BigInt("1439")
//		await SLTDETHlpRewardZVeipYL.renounceOwnership.call({from: accounts[0]});
//		const uint256EfAtRX = await SLTDETHlpRewardZVeipYL.stake.call(uintXpuiprZ, {from: accounts[2]});
//		const uint256eSwFGMh = await SLTDETHlpRewardZVeipYL.totalSupply.call({from: accounts[0]});
//		const uint256NhWgQUX = await SLTDETHlpRewardZVeipYL.remainingReward.call({from: accounts[1]});

		await expect(SLTDETHlpRewardZVeipYL.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarddRcvmh = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGuy98oE = accounts[2]
		const uintQeV4vjv = BigInt("1640")
		const uintgRcAKkC = BigInt("1764")
		const uint256OBa8GD = await SLTDETHlpRewarddRcvmh.earned.call(addressGuy98oE, {from: accounts[3]});
		const uint256WthBN5E = await SLTDETHlpRewarddRcvmh.totalSupply.call({from: accounts[4]});
		const uint256ZP5Jp3G = await SLTDETHlpRewarddRcvmh.notifyRewardAmount.call(uintQeV4vjv, {from: accounts[4]});
		const uint256RJW8Hud = await SLTDETHlpRewarddRcvmh.stake.call(uintgRcAKkC, {from: accounts[0]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardq4SX8Yv = await SLTDETHlpReward.new({from: accounts[2]});
		const uintvo0xMpc = BigInt("854")
		const uint256fD2kfwc = await SLTDETHlpRewardq4SX8Yv.rewardPerToken.call({from: accounts[3]});
//		await SLTDETHlpRewardq4SX8Yv.onlyRewardDistribution.call({from: accounts[0]});
//		const uint256R0g93d3 = await SLTDETHlpRewardq4SX8Yv.rewardPerToken.call({from: accounts[4]});
//		const uint256f1WNbIP = await SLTDETHlpRewardq4SX8Yv.withdraw.call(uintvo0xMpc, {from: accounts[0]});

		assert.equal(uint256fD2kfwc, BigInt("0"))
		await expect(SLTDETHlpRewardq4SX8Yv.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardpkU2K5 = await SLTDETHlpReward.new({from: accounts[5]});
		const uintHSD4eRT = BigInt("907")
		const uintQslK57V = BigInt("701")
		const addressn3Uze60 = accounts[0]
//		const uint256mjTORbV = await SLTDETHlpRewardpkU2K5.withdraw.call(uintHSD4eRT, {from: accounts[2]});
//		const uint256zGbeXJ = await SLTDETHlpRewardpkU2K5.withdraw.call(uintQslK57V, {from: accounts[2]});
//		const addressBDmH8al = await SLTDETHlpRewardpkU2K5.updateReward.call(addressn3Uze60, {from: accounts[3]});
//		const uint256dHfne9R = await SLTDETHlpRewardpkU2K5.rewardPerToken.call({from: accounts[2]});
//		const uint256lbj2kVS = await SLTDETHlpRewardpkU2K5.remainingReward.call({from: accounts[0]});

		await expect(SLTDETHlpRewardpkU2K5.withdraw.call(uintHSD4eRT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardmYO5Ijz = await SLTDETHlpReward.new({from: accounts[3]});
//		const uint256bMt6WjW = await SLTDETHlpRewardmYO5Ijz.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolJdsamvN = await SLTDETHlpRewardmYO5Ijz.isOwner.call({from: accounts[5]});
//		await SLTDETHlpRewardmYO5Ijz.getReward.call({from: accounts[5]});
//		await SLTDETHlpRewardmYO5Ijz.onlyOwner.call({from: accounts[4]});

		await expect(SLTDETHlpRewardmYO5Ijz.remainingReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEk1oqTa = await SLTDETHlpReward.new({from: accounts[2]});
		const uinttR1NB25 = BigInt("1345")
//		const uint256C30Ngfw = await SLTDETHlpRewardEk1oqTa.notifyRewardAmount.call(uinttR1NB25, {from: accounts[0]});
//		const uint256MQaCli4 = await SLTDETHlpRewardEk1oqTa.lastTimeRewardApplicable.call({from: accounts[3]});
//		const bool3uRnEx = await SLTDETHlpRewardEk1oqTa.isOwner.call({from: accounts[1]});

		await expect(SLTDETHlpRewardEk1oqTa.notifyRewardAmount.call(uinttR1NB25, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtRqEx1l = await SLTDETHlpReward.new({from: accounts[3]});
		const uinto5ybZe6 = BigInt("1783")
//		await SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]});
//		const uint256sMIPirA = await SLTDETHlpRewardtRqEx1l.withdraw.call(uinto5ybZe6, {from: accounts[0]});

		await expect(SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtRqEx1l = await SLTDETHlpReward.new({from: accounts[3]});
		const uintNsSQ8zm = BigInt("1569")
//		await SLTDETHlpRewardtRqEx1l.exit.call({from: accounts[5]});
//		const uint256sMIPirA = await SLTDETHlpRewardtRqEx1l.withdraw.call(uintNsSQ8zm, {from: accounts[0]});

		await expect(SLTDETHlpRewardtRqEx1l.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtRqEx1l = await SLTDETHlpReward.new({from: accounts[3]});
		const addressCaM6WT2 = accounts[4]
		const addressLUCMPUb = accounts[0]
		const uintfpECqHA = BigInt("1591")
		const addressPutpLJK = await SLTDETHlpRewardtRqEx1l.setStakeAddress.call(addressCaM6WT2, {from: accounts[3]});
//		const uint256GD3eGr8 = await SLTDETHlpRewardtRqEx1l.remainingReward.call({from: accounts[2]});
//		const addressKE3Jx5 = await SLTDETHlpRewardtRqEx1l.setStakeAddress.call(addressLUCMPUb, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256sMIPirA = await SLTDETHlpRewardtRqEx1l.withdraw.call(uintfpECqHA, {from: accounts[0]});

		await expect(SLTDETHlpRewardtRqEx1l.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtRqEx1l = await SLTDETHlpReward.new({from: accounts[3]});
		const uintmvsxDXh = BigInt("1099")
//		await SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]});
//		const uint256KgoqyS = await SLTDETHlpRewardtRqEx1l.setStartTime.call(uintmvsxDXh, {from: accounts[3]});

		await expect(SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtRqEx1l = await SLTDETHlpReward.new({from: accounts[3]});
//		await SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]});
//		const addressj9lGJ0j = await SLTDETHlpRewardtRqEx1l.owner.call({from: accounts[3]});

		await expect(SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtRqEx1l = await SLTDETHlpReward.new({from: accounts[3]});
		const addressqFwPCEA = accounts[0]
		const addresscqtMGvM = "0x0000000000000000000000000000000000000001"
		const addressi1QO9Eq = await SLTDETHlpRewardtRqEx1l.setRewardDistribution.call(addressqFwPCEA, {from: accounts[3]});
//		await SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]});
//		const uint256RptlDRa = await SLTDETHlpRewardtRqEx1l.balanceOf.call(addresscqtMGvM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtRqEx1l = await SLTDETHlpReward.new({from: accounts[3]});
		const address2ypuSa = accounts[5]
		const addressevSLUY = accounts[2]
//		await SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]});
//		const addressdcwJuRS = await SLTDETHlpRewardtRqEx1l.transferOwnership.call(address2ypuSa, {from: accounts[3]});
//		const uint256VA3NxXC = await SLTDETHlpRewardtRqEx1l.balanceOf.call(addressevSLUY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardtRqEx1l.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtRqEx1l = await SLTDETHlpReward.new({from: accounts[3]});
		const uintY7Z6VG = BigInt("1367")
		const uintwwpcp6t = BigInt("1591")
		const uint256oiJ3QwF = await SLTDETHlpRewardtRqEx1l.notifyRewardAmount.call(uintY7Z6VG, {from: accounts[3]});
//		const uint256sMIPirA = await SLTDETHlpRewardtRqEx1l.withdraw.call(uintwwpcp6t, {from: accounts[0]});

		await expect(SLTDETHlpRewardtRqEx1l.withdraw.call(uintwwpcp6t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})