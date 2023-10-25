const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressHH36LyB = accounts[4]
		const addresswW7M2nC = accounts[1]
		const addressEvq82l0 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsqqoi6H4 = await MarsStakingRewards.new(addressHH36LyB, addresswW7M2nC, addressEvq82l0, {from: accounts[2]});
		const uintE3dGdfw = BigInt("1123")
		const uint256M6SVIbj = await MarsStakingRewardsqqoi6H4.totalSupply.call({from: accounts[2]});
//		const uint256au90PAb = await MarsStakingRewardsqqoi6H4.withdraw.call(uintE3dGdfw, {from: accounts[1]});
//		await MarsStakingRewardsqqoi6H4.getReward.call({from: accounts[2]});

		assert.equal(uint256M6SVIbj, BigInt("0"))
		await expect(MarsStakingRewardsqqoi6H4.withdraw.call(uintE3dGdfw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressBgBZBrH = accounts[4]
		const addressH4MyKT8 = accounts[4]
		const addressBZeAVTo = accounts[2]
		const MarsStakingRewardsNybA2x = await MarsStakingRewards.new(addressBgBZBrH, addressH4MyKT8, addressBZeAVTo, {from: accounts[0]});
		const uintQVS04ty = BigInt("695")
		const addressnlEZsRg = accounts[3]
//		const addressXcvVUXM = await MarsStakingRewardsNybA2x.inCaseTokensGetStuck.call(addressnlEZsRg, uintQVS04ty, {from: accounts[4]});
//		const boolpvplC4g = await MarsStakingRewardsNybA2x.isOwner.call({from: accounts[0]});
//		const addressc47oiG8 = await MarsStakingRewardsNybA2x.owner.call({from: accounts[1]});

		await expect(MarsStakingRewardsNybA2x.inCaseTokensGetStuck.call(addressnlEZsRg, uintQVS04ty, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressm7a2S5r = accounts[1]
		const addressFxSd8NA = accounts[3]
		const addressixaORkg = accounts[3]
		const MarsStakingRewardsjTUkx3F = await MarsStakingRewards.new(addressm7a2S5r, addressFxSd8NA, addressixaORkg, {from: accounts[4]});
		const uintsiKjGe = BigInt("1628")
		const uintkZz6iBt = BigInt("1609")
		const addressrthOV2m = accounts[0]
//		await MarsStakingRewardsjTUkx3F.onlyRewardsDistribution.call({from: accounts[1]});
//		const uint256idmIICt = await MarsStakingRewardsjTUkx3F.notifyRewardAmount.call(uintkZz6iBt, uintsiKjGe, {from: accounts[2]});
//		const addressGqi3kB = await MarsStakingRewardsjTUkx3F.updateReward.call(addressrthOV2m, {from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsjTUkx3F.onlyOwner.call({from: accounts[1]});

		await expect(MarsStakingRewardsjTUkx3F.onlyRewardsDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressv3MGL0 = "0x0000000000000000000000000000000000000001"
		const addressEBRlUm = accounts[1]
		const addressYbBCymX = accounts[2]
		const MarsStakingRewardsXrPdOqx = await MarsStakingRewards.new(addressv3MGL0, addressEBRlUm, addressYbBCymX, {from: "0x0000000000000000000000000000000000000001"});
		const addressqe6amqa = accounts[0]
		const uintgCVoJWy = BigInt("1482")
		const uintDVA0BfY = BigInt("1228")
		const addressPVwwAsa = await MarsStakingRewardsXrPdOqx.updateReward.call(addressqe6amqa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256h6j8wIy = await MarsStakingRewardsXrPdOqx.notifyRewardAmount.call(uintDVA0BfY, uintgCVoJWy, {from: accounts[2]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressz4vyym5 = accounts[1]
		const addressnXAd0VF = accounts[1]
		const addressfW8qSgT = accounts[3]
		const MarsStakingRewardsGYXEhoH = await MarsStakingRewards.new(addressz4vyym5, addressnXAd0VF, addressfW8qSgT, {from: accounts[0]});
		const addressx33XObU = accounts[4]
		const uint256qj2JmuD = await MarsStakingRewardsGYXEhoH.rewardPerToken.call({from: accounts[1]});
//		await MarsStakingRewardsGYXEhoH.exit.call({from: accounts[2]});
//		const addressrtyL3mf = await MarsStakingRewardsGYXEhoH.updateReward.call(addressx33XObU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LvJWHaM = await MarsStakingRewardsGYXEhoH.totalSupply.call({from: accounts[4]});

		assert.equal(uint256qj2JmuD, BigInt("0"))
		await expect(MarsStakingRewardsGYXEhoH.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgG0hHgt = accounts[3]
		const addressqyIqSxp = accounts[1]
		const addressDgyA4aU = accounts[0]
		const MarsStakingRewardssnEiSgQ = await MarsStakingRewards.new(addressgG0hHgt, addressqyIqSxp, addressDgyA4aU, {from: accounts[2]});
		const uintFmYZlLN = BigInt("338")
		const addressm84gkSg = "0x0000000000000000000000000000000000000001"
		const uint2562cbzoP = await MarsStakingRewardssnEiSgQ.getRewardForDuration.call({from: accounts[1]});
//		const uint256yVHARG1 = await MarsStakingRewardssnEiSgQ.stake.call(uintFmYZlLN, {from: accounts[1]});
//		const address7fPWuI = await MarsStakingRewardssnEiSgQ.setRewardsDistribution.call(addressm84gkSg, {from: accounts[3]});

		assert.equal(uint2562cbzoP, BigInt("0"))
		await expect(MarsStakingRewardssnEiSgQ.stake.call(uintFmYZlLN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressaknjdfM = accounts[3]
		const addressvbPC6si = accounts[1]
		const addresshoa42Ye = accounts[0]
		const MarsStakingRewardssnEiSgQ = await MarsStakingRewards.new(addressaknjdfM, addressvbPC6si, addresshoa42Ye, {from: accounts[2]});
		const addressfUKxF1E = accounts[1]
		const uintkxvkSQ = BigInt("156")
		const uintCs2Kp2y = BigInt("338")
		const uint2562cbzoP = await MarsStakingRewardssnEiSgQ.getRewardForDuration.call({from: accounts[1]});
		const addressFjgTP8b = await MarsStakingRewardssnEiSgQ.transferOwnership.call(addressfUKxF1E, {from: accounts[2]});
//		const uint256MuIYT2B = await MarsStakingRewardssnEiSgQ.withdraw.call(uintkxvkSQ, {from: accounts[0]});
//		const uint256yVHARG1 = await MarsStakingRewardssnEiSgQ.stake.call(uintCs2Kp2y, {from: accounts[1]});

		assert.equal(uint2562cbzoP, BigInt("0"))
		await expect(MarsStakingRewardssnEiSgQ.withdraw.call(uintkxvkSQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLasaFYZ = accounts[1]
		const addressaajzr45 = accounts[1]
		const addressVwozzjH = accounts[3]
		const MarsStakingRewardsGYXEhoH = await MarsStakingRewards.new(addressLasaFYZ, addressaajzr45, addressVwozzjH, {from: accounts[0]});
		const addressqHpgLMW = await MarsStakingRewardsGYXEhoH.owner.call({from: accounts[2]});
		const uint256qj2JmuD = await MarsStakingRewardsGYXEhoH.rewardPerToken.call({from: accounts[1]});

		assert.equal(addressqHpgLMW, 0x67b30D781c9bA68206531f80Bd317B5ad42A779a)
		assert.equal(uint256qj2JmuD, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressli64QGA = accounts[3]
		const addressRP31b0 = accounts[2]
		const addressIEMJalh = accounts[4]
		const MarsStakingRewardsPrkfGPw = await MarsStakingRewards.new(addressli64QGA, addressRP31b0, addressIEMJalh, {from: accounts[4]});
		const addressqap4XIY = accounts[4]
		const uintYgF7kh = BigInt("1074")
		const uintZPVPtDa = BigInt("83")
		const uintDdLsmsP = BigInt("1059")
		const addresstCUxXTI = accounts[3]
		const uint256QDsQoZA = await MarsStakingRewardsPrkfGPw.balanceOf.call(addressqap4XIY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aYbfOmt = await MarsStakingRewardsPrkfGPw.withdraw.call(uintYgF7kh, {from: accounts[1]});
//		const uint256SmzLxtR = await MarsStakingRewardsPrkfGPw.stake.call(uintZPVPtDa, {from: accounts[0]});
//		const addresspK2LTZ4 = await MarsStakingRewardsPrkfGPw.inCaseTokensGetStuck.call(addresstCUxXTI, uintDdLsmsP, {from: accounts[1]});

		assert.equal(uint256QDsQoZA, BigInt("0"))
		await expect(MarsStakingRewardsPrkfGPw.withdraw.call(uintYgF7kh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressKqZTuv6 = accounts[1]
		const addressfDwGUcE = accounts[1]
		const addressUABAY6X = accounts[3]
		const MarsStakingRewardsGYXEhoH = await MarsStakingRewards.new(addressKqZTuv6, addressfDwGUcE, addressUABAY6X, {from: accounts[0]});
		const addressi7Wb5qo = accounts[4]
		const uint256U0fvVUb = await MarsStakingRewardsGYXEhoH.earned.call(addressi7Wb5qo, {from: accounts[4]});
		const uint256pixxhJ1 = await MarsStakingRewardsGYXEhoH.totalSupply.call({from: accounts[5]});
		const uint256qj2JmuD = await MarsStakingRewardsGYXEhoH.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256U0fvVUb, BigInt("0"))
		assert.equal(uint256pixxhJ1, BigInt("0"))
		assert.equal(uint256qj2JmuD, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressmJqlCgY = accounts[1]
		const addressJHmQFzO = accounts[1]
		const addresssdxr4mQ = accounts[3]
		const MarsStakingRewardsGYXEhoH = await MarsStakingRewards.new(addressmJqlCgY, addressJHmQFzO, addresssdxr4mQ, {from: accounts[0]});
		const uint256yDghqk2 = await MarsStakingRewardsGYXEhoH.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256qj2JmuD = await MarsStakingRewardsGYXEhoH.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256qj2JmuD, BigInt("0"))
		assert.equal(uint256yDghqk2, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressMKUnYnG = accounts[4]
		const addressxRfxy8C = accounts[5]
		const addressIy1JBlM = accounts[4]
		const MarsStakingRewardsYgJbI2M = await MarsStakingRewards.new(addressMKUnYnG, addressxRfxy8C, addressIy1JBlM, {from: accounts[4]});
		const uintIy0N1zi = BigInt("1590")
		const uintMmjNPw2 = BigInt("1548")
		const addressV3gidQB = accounts[5]
//		const uint256QnyYrcS = await MarsStakingRewardsYgJbI2M.notifyRewardAmount.call(uintMmjNPw2, uintIy0N1zi, {from: accounts[0]});
//		await MarsStakingRewardsYgJbI2M.renounceOwnership.call({from: accounts[1]});
//		const uint256ne9ObN = await MarsStakingRewardsYgJbI2M.rewardPerToken.call({from: accounts[2]});
//		const addresshPzbNJX = await MarsStakingRewardsYgJbI2M.transferOwnership.call(addressV3gidQB, {from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsYgJbI2M.nonReentrant.call({from: accounts[4]});

		await expect(MarsStakingRewardsYgJbI2M.notifyRewardAmount.call(uintMmjNPw2, uintIy0N1zi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressk2aITB = accounts[1]
		const addressvhDvDld = accounts[1]
		const addressAs2NzcB = accounts[3]
		const MarsStakingRewardsGYXEhoH = await MarsStakingRewards.new(addressk2aITB, addressvhDvDld, addressAs2NzcB, {from: accounts[0]});
		const uintxvWDflw = BigInt("213")
		const uintRCQvOxc = BigInt("252")
		const bytepaqiNBr = "0x201906061d0e0513201411141c14101a1b081d021b150a190205190d0d1d020d"
		const byteTHC8F0 = "0x0a0e06041c1d0e02121a0409170f0506001b0d091f1f1f0c1903151d1b1a1318"
		const uintq6ijo19 = BigInt("2")
		const uintaqp3E9j = BigInt("856")
		const uintl9QAmiP = BigInt("146")
//		const uint256zO9UOGZ = await MarsStakingRewardsGYXEhoH.notifyRewardAmount.call(uintRCQvOxc, uintxvWDflw, {from: accounts[1]});
//		const uint256KNXCbRv = await MarsStakingRewardsGYXEhoH.stakeWithPermit.call(uintl9QAmiP, uintaqp3E9j, uintq6ijo19, byteTHC8F0, bytepaqiNBr, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qj2JmuD = await MarsStakingRewardsGYXEhoH.rewardPerToken.call({from: accounts[1]});

		await expect(MarsStakingRewardsGYXEhoH.notifyRewardAmount.call(uintRCQvOxc, uintxvWDflw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressnnjceFE = accounts[3]
		const addressDQGKp0e = accounts[1]
		const addressEpT8eAe = accounts[0]
		const MarsStakingRewardssnEiSgQ = await MarsStakingRewards.new(addressnnjceFE, addressDQGKp0e, addressEpT8eAe, {from: accounts[2]});
		const addresswjzMIax = accounts[0]
		const addressctr2Ax3 = accounts[4]
		const addresskYC5D3 = await MarsStakingRewardssnEiSgQ.setRewardsDistribution.call(addresswjzMIax, {from: accounts[2]});
		const uint2562cbzoP = await MarsStakingRewardssnEiSgQ.getRewardForDuration.call({from: accounts[1]});
		const uint256Sthhpuk = await MarsStakingRewardssnEiSgQ.balanceOf.call(addressctr2Ax3, {from: accounts[4]});

		assert.equal(uint2562cbzoP, BigInt("0"))
		assert.equal(uint256Sthhpuk, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressh2nUYbu = accounts[3]
		const addressV2iAvhi = accounts[1]
		const addressSxVqvr6 = accounts[0]
		const MarsStakingRewardssnEiSgQ = await MarsStakingRewards.new(addressh2nUYbu, addressV2iAvhi, addressSxVqvr6, {from: accounts[2]});
		const uintHD9iCCe = BigInt("129")
		const addressAzXr52h = accounts[4]
		const uint2562cbzoP = await MarsStakingRewardssnEiSgQ.getRewardForDuration.call({from: accounts[1]});
//		const addressJv6aUAU = await MarsStakingRewardssnEiSgQ.inCaseTokensGetStuck.call(addressAzXr52h, uintHD9iCCe, {from: accounts[2]});
//		const uint256LcPMOby = await MarsStakingRewardssnEiSgQ.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint2562cbzoP, BigInt("0"))
		await expect(MarsStakingRewardssnEiSgQ.inCaseTokensGetStuck.call(addressAzXr52h, uintHD9iCCe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressAgZMVn = accounts[3]
		const addressXVXM0gk = accounts[1]
		const addressatd7kF2 = accounts[0]
		const MarsStakingRewardssnEiSgQ = await MarsStakingRewards.new(addressAgZMVn, addressXVXM0gk, addressatd7kF2, {from: accounts[2]});
		const uinthDH7Gz6 = BigInt("656")
		const addresse5WjfVh = accounts[0]
		const uint2562cbzoP = await MarsStakingRewardssnEiSgQ.getRewardForDuration.call({from: accounts[1]});
//		const addressNUquKXV = await MarsStakingRewardssnEiSgQ.inCaseTokensGetStuck.call(addresse5WjfVh, uinthDH7Gz6, {from: accounts[2]});

		assert.equal(uint2562cbzoP, BigInt("0"))
		await expect(MarsStakingRewardssnEiSgQ.inCaseTokensGetStuck.call(addresse5WjfVh, uinthDH7Gz6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})