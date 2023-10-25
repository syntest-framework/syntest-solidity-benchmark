const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiUSEGg7 = await SLTDETHlpReward.new({from: accounts[2]});
		const uintvMXQv1R = BigInt("1419")
		const uintQDFFLM = BigInt("480")
		const uint256dRAnRDH = await SLTDETHlpRewardiUSEGg7.rewardPerToken.call({from: accounts[5]});
//		const uint256hHvDxMC = await SLTDETHlpRewardiUSEGg7.stake.call(uintvMXQv1R, {from: accounts[0]});
//		const uint256Kyk2a4Z = await SLTDETHlpRewardiUSEGg7.stake.call(uintQDFFLM, {from: accounts[3]});

		assert.equal(uint256dRAnRDH, BigInt("0"))
		await expect(SLTDETHlpRewardiUSEGg7.stake.call(uintvMXQv1R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardy72YCiE = await SLTDETHlpReward.new({from: accounts[4]});
		const addressgQDneh4 = accounts[2]
		const addressKREpGQ = accounts[3]
		const uintc7kOCE3 = BigInt("1754")
		const addressKToXfU0 = accounts[1]
		const uint256IiuGIFM = await SLTDETHlpRewardy72YCiE.earned.call(addressgQDneh4, {from: accounts[4]});
//		const addressYbEdUlL = await SLTDETHlpRewardy72YCiE.transferOwnership.call(addressKREpGQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolv5k6vWk = await SLTDETHlpRewardy72YCiE.isOwner.call({from: accounts[2]});
//		const uint256HvdqyFR = await SLTDETHlpRewardy72YCiE.setStartTime.call(uintc7kOCE3, {from: accounts[3]});
//		const uint256NjLOmAO = await SLTDETHlpRewardy72YCiE.balanceOf.call(addressKToXfU0, {from: accounts[1]});

		assert.equal(uint256IiuGIFM, BigInt("0"))
		await expect(SLTDETHlpRewardy72YCiE.transferOwnership.call(addressKREpGQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardyTSljVo = await SLTDETHlpReward.new({from: accounts[2]});
		const uintIA7ps4E = BigInt("723")
		const uint256MvoJ1p = await SLTDETHlpRewardyTSljVo.rewardPerToken.call({from: accounts[3]});
//		const uint256zgb7Dxr = await SLTDETHlpRewardyTSljVo.withdraw.call(uintIA7ps4E, {from: accounts[4]});
//		await SLTDETHlpRewardyTSljVo.renounceOwnership.call({from: accounts[2]});
//		await SLTDETHlpRewardyTSljVo.checkStart.call({from: accounts[5]});

		assert.equal(uint256MvoJ1p, BigInt("0"))
		await expect(SLTDETHlpRewardyTSljVo.withdraw.call(uintIA7ps4E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardnxMlgBE = await SLTDETHlpReward.new({from: accounts[4]});
		const addressJJXkXys = accounts[3]
		const addressJXBiZr9 = accounts[2]
		const addressoEgwsFp = accounts[1]
//		await SLTDETHlpRewardnxMlgBE.exit.call({from: accounts[3]});
//		const uint256v8Hbe0o = await SLTDETHlpRewardnxMlgBE.balanceOf.call(addressJJXkXys, {from: accounts[0]});
//		const uint256zIja36 = await SLTDETHlpRewardnxMlgBE.remainingReward.call({from: accounts[5]});
//		const addressJnevc4S = await SLTDETHlpRewardnxMlgBE.setRewardDistribution.call(addressJXBiZr9, {from: accounts[2]});
//		const addressKtj4770 = await SLTDETHlpRewardnxMlgBE.updateReward.call(addressoEgwsFp, {from: accounts[3]});

		await expect(SLTDETHlpRewardnxMlgBE.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFVjEtoS = await SLTDETHlpReward.new({from: accounts[2]});
		const uintGV7kjwK = BigInt("930")
		const uintOfDubKV = BigInt("1116")
//		const uint256PPJQdYI = await SLTDETHlpRewardFVjEtoS.notifyRewardAmount.call(uintGV7kjwK, {from: accounts[5]});
//		const uint256Y1A91Si = await SLTDETHlpRewardFVjEtoS.stake.call(uintOfDubKV, {from: accounts[2]});
//		await SLTDETHlpRewardFVjEtoS.checkStart.call({from: accounts[1]});
//		await SLTDETHlpRewardFVjEtoS.renounceOwnership.call({from: accounts[3]});
//		await SLTDETHlpRewardFVjEtoS.exit.call({from: accounts[3]});

		await expect(SLTDETHlpRewardFVjEtoS.notifyRewardAmount.call(uintGV7kjwK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardRb2eCp = await SLTDETHlpReward.new({from: accounts[2]});
		const addressGDNXxz1 = accounts[0]
//		await SLTDETHlpRewardRb2eCp.checkStart.call({from: accounts[1]});
//		const uint256520aRC = await SLTDETHlpRewardRb2eCp.lastTimeRewardApplicable.call({from: accounts[2]});
//		await SLTDETHlpRewardRb2eCp.getReward.call({from: accounts[0]});
//		const addressrQW7vIv = await SLTDETHlpRewardRb2eCp.setRewardDistribution.call(addressGDNXxz1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardRb2eCp.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarda2R94pm = await SLTDETHlpReward.new({from: accounts[1]});
		const addressG6tp1Zf = accounts[3]
		const addressfnXtLBK = accounts[2]
//		await SLTDETHlpRewarda2R94pm.renounceOwnership.call({from: accounts[1]});
//		const uint256YPjIGxi = await SLTDETHlpRewarda2R94pm.balanceOf.call(addressG6tp1Zf, {from: accounts[0]});
//		const addressdcujvl8 = await SLTDETHlpRewarda2R94pm.setStakeAddress.call(addressfnXtLBK, {from: accounts[2]});
//		const uint256tFNe01D = await SLTDETHlpRewarda2R94pm.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewarda2R94pm.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl55ka7L = await SLTDETHlpReward.new({from: accounts[3]});
		const uintumRO7ct = BigInt("417")
		const addressE697hD = accounts[4]
//		await SLTDETHlpRewardl55ka7L.getReward.call({from: accounts[4]});
//		const uint256hZHusw = await SLTDETHlpRewardl55ka7L.stake.call(uintumRO7ct, {from: accounts[0]});
//		const uint256whHIZXo = await SLTDETHlpRewardl55ka7L.earned.call(addressE697hD, {from: accounts[5]});

		await expect(SLTDETHlpRewardl55ka7L.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl55ka7L = await SLTDETHlpReward.new({from: accounts[3]});
		const addressNlV5NOX = accounts[4]
//		const uint256qrXUBAV = await SLTDETHlpRewardl55ka7L.remainingReward.call({from: accounts[3]});
//		await SLTDETHlpRewardl55ka7L.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256whHIZXo = await SLTDETHlpRewardl55ka7L.earned.call(addressNlV5NOX, {from: accounts[5]});

		await expect(SLTDETHlpRewardl55ka7L.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl55ka7L = await SLTDETHlpReward.new({from: accounts[3]});
		const uintoohetJ6 = BigInt("1852")
		const addressiSJWcMG = await SLTDETHlpRewardl55ka7L.owner.call({from: accounts[5]});
//		const uint256uJpDUDg = await SLTDETHlpRewardl55ka7L.notifyRewardAmount.call(uintoohetJ6, {from: accounts[2]});
//		await SLTDETHlpRewardl55ka7L.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressiSJWcMG, 0xa217d7b31685A4569480541fb0446E99aCECb334)
		await expect(SLTDETHlpRewardl55ka7L.notifyRewardAmount.call(uintoohetJ6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl55ka7L = await SLTDETHlpReward.new({from: accounts[3]});
		const addressaWjkuv = accounts[3]
		const addressP4nQbOa = await SLTDETHlpRewardl55ka7L.setRewardDistribution.call(addressaWjkuv, {from: accounts[3]});
//		const uint256ESkG8W = await SLTDETHlpRewardl55ka7L.remainingReward.call({from: accounts[1]});
//		await SLTDETHlpRewardl55ka7L.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardl55ka7L.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl55ka7L = await SLTDETHlpReward.new({from: accounts[3]});
		const addressVrh8x3a = accounts[4]
		const addresskT4wCph = accounts[4]
		const addressQACYsD = await SLTDETHlpRewardl55ka7L.setStakeAddress.call(addressVrh8x3a, {from: accounts[3]});
		const uint256whHIZXo = await SLTDETHlpRewardl55ka7L.earned.call(addresskT4wCph, {from: accounts[5]});

		assert.equal(uint256whHIZXo, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardPfKFMc1 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCrMeu2b = BigInt("1352")
		const uint256MKzSqYx = await SLTDETHlpRewardPfKFMc1.lastTimeRewardApplicable.call({from: accounts[4]});
		await SLTDETHlpRewardPfKFMc1.getReward.call({from: accounts[1]});
		const uint256bEfWNkW = await SLTDETHlpRewardPfKFMc1.totalSupply.call({from: accounts[1]});
		const uint256zpEcKeM = await SLTDETHlpRewardPfKFMc1.stake.call(uintCrMeu2b, {from: accounts[3]});
		await SLTDETHlpRewardPfKFMc1.onlyOwner.call({from: accounts[0]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl55ka7L = await SLTDETHlpReward.new({from: accounts[3]});
		const addressUCP14ZF = accounts[4]
		const uintm2S3CXI = BigInt("2022")
		const uint256whHIZXo = await SLTDETHlpRewardl55ka7L.earned.call(addressUCP14ZF, {from: accounts[5]});
		const boolWTIpi45 = await SLTDETHlpRewardl55ka7L.isOwner.call({from: accounts[0]});
		const uint256KEmD0qV = await SLTDETHlpRewardl55ka7L.setStartTime.call(uintm2S3CXI, {from: accounts[3]});

		assert.equal(boolWTIpi45, false)
		assert.equal(uint256whHIZXo, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl55ka7L = await SLTDETHlpReward.new({from: accounts[3]});
		const uintUcEj3kW = BigInt("1283")
		const uint256ax6SF1 = await SLTDETHlpRewardl55ka7L.notifyRewardAmount.call(uintUcEj3kW, {from: accounts[3]});
//		await SLTDETHlpRewardl55ka7L.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardl55ka7L.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl55ka7L = await SLTDETHlpReward.new({from: accounts[3]});
		const addressQOSd2Xj = accounts[4]
		const uint256sqItsKh = await SLTDETHlpRewardl55ka7L.lastTimeRewardApplicable.call({from: accounts[0]});
//		await SLTDETHlpRewardl55ka7L.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressKjDzAbc = await SLTDETHlpRewardl55ka7L.transferOwnership.call(addressQOSd2Xj, {from: accounts[3]});
//		const boolrOpdCNc = await SLTDETHlpRewardl55ka7L.isOwner.call({from: accounts[0]});

		assert.equal(uint256sqItsKh, BigInt("0"))
		await expect(SLTDETHlpRewardl55ka7L.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})