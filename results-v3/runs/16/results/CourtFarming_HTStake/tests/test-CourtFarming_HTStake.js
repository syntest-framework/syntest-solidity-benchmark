const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVL0t64y = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressy5Z2zTq = accounts[0]
		const booleABdfBe = false
		const uintanNrDzR = BigInt("1074")
		const uint256zJg3bEk = await CourtFarming_HTStakeVL0t64y.incvRewardClaim.call({from: accounts[4]});
		const uint256b9zMh9V = await CourtFarming_HTStakeVL0t64y.incvRewardClaim.call({from: accounts[4]});
		const addressmVnhmEi = await CourtFarming_HTStakeVL0t64y.getBeneficiaryInfo.call(addressy5Z2zTq, {from: accounts[2]});
		const uint256iSnNqVQ = await CourtFarming_HTStakeVL0t64y.unstake.call(uintanNrDzR, booleABdfBe, {from: accounts[2]});

		assert.equal(uint256b9zMh9V, BigInt("0"))
		assert.equal(uint256zJg3bEk, BigInt("0"))
		await expect(CourtFarming_HTStakeVL0t64y.unstake.call(uintanNrDzR, booleABdfBe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeNkW75c3 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addresszbYiCWS = accounts[5]
		const addressksm74bo = accounts[3]
		const uintlRRtKRe = BigInt("398")
		const addressPBze6cM = await CourtFarming_HTStakeNkW75c3.getBeneficiaryInfo.call(addresszbYiCWS, {from: accounts[2]});
		const addressIHxaAKO = await CourtFarming_HTStakeNkW75c3.updateReward.call(addressksm74bo, {from: accounts[5]});
		const uint256AE9fOh = await CourtFarming_HTStakeNkW75c3.expectedRewardsToday.call(uintlRRtKRe, {from: accounts[2]});
		const uint256tFwJtLO = await CourtFarming_HTStakeNkW75c3.getCurrentTime.call({from: accounts[2]});

		assert.equal(uint256tFwJtLO, BigInt("1630201601"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGlEpEFU = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintSx748r = BigInt("2008")
		const uintfhlj88C = BigInt("1026")
		const uintI981Hks = BigInt("1943")
		const uintTtBeIIM = BigInt("58")
		const boolXkgFgKF = true
		const uintjzLaJmU = BigInt("851")
		const addressvIJDPl7 = accounts[0]
		const boolPSMgZfO = await CourtFarming_HTStakeGlEpEFU.stakeIncvRewards.call(uintSx748r, {from: accounts[0]});
		await CourtFarming_HTStakeGlEpEFU.changeStakeParameters.call(uintTtBeIIM, uintI981Hks, uintfhlj88C, {from: accounts[0]});
		const uint256Hr3S03 = await CourtFarming_HTStakeGlEpEFU.unstake.call(uintjzLaJmU, boolXkgFgKF, {from: accounts[0]});
		const uint256HsASdJM = await CourtFarming_HTStakeGlEpEFU.getCurrentTime.call({from: accounts[5]});
		const uint256kFwBImJ = await CourtFarming_HTStakeGlEpEFU.totalStaked.call({from: accounts[4]});
		const uint256UgnRfGX = await CourtFarming_HTStakeGlEpEFU.balanceOf.call(addressvIJDPl7, {from: accounts[1]});

		assert.equal(boolPSMgZfO, false)
		await expect(CourtFarming_HTStakeGlEpEFU.changeStakeParameters.call(uintTtBeIIM, uintI981Hks, uintfhlj88C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakep3KLI4x = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressrhBYC5K = accounts[0]
		const addressRPCAUw = accounts[2]
		const uintpAWU79q = BigInt("1384")
		const uint256mocSN81 = await CourtFarming_HTStakep3KLI4x.rewards.call(addressrhBYC5K, {from: accounts[3]});
		const uint256htl9vN = await CourtFarming_HTStakep3KLI4x.balanceOf.call(addressRPCAUw, {from: accounts[4]});
		const boolYb8oNZ = await CourtFarming_HTStakep3KLI4x.stakeIncvRewards.call(uintpAWU79q, {from: accounts[5]});

		assert.equal(boolYb8oNZ, false)
		assert.equal(uint256htl9vN, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeRun943c = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintX5Y5CL5 = BigInt("794")
		const addressVnviIqN = accounts[0]
		const uint256fIfkDaY = await CourtFarming_HTStakeRun943c.blockNumber.call({from: accounts[5]});
		const booljyoTVT = await CourtFarming_HTStakeRun943c.stakeIncvRewards.call(uintX5Y5CL5, {from: accounts[2]});
		const addressKczX17s = await CourtFarming_HTStakeRun943c.updateReward.call(addressVnviIqN, {from: accounts[0]});
		const uint256NaYTSrc = await CourtFarming_HTStakeRun943c.totalStaked.call({from: accounts[4]});

		assert.equal(booljyoTVT, false)
		assert.equal(uint256NaYTSrc, BigInt("0"))
		assert.equal(uint256fIfkDaY, BigInt("1803"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedxKG6Fa = await CourtFarming_HTStake.new({from: accounts[0]});
		const uint256fansO0o = await CourtFarming_HTStakedxKG6Fa.incvRewardClaim.call({from: accounts[3]});
		const uint256m1irPSb = await CourtFarming_HTStakedxKG6Fa.incvRewardInfo.call({from: accounts[3]});
		const uint256BvI5KOJ = await CourtFarming_HTStakedxKG6Fa.totalStaked.call({from: accounts[4]});

		assert.equal(uint256BvI5KOJ, BigInt("0"))
		assert.equal(uint256fansO0o, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeNsTJ0FS = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintAbc4I2v = BigInt("169")
		const uintXMnWrNK = BigInt("834")
		const uintH2uBknJ = BigInt("12")
		const uintRCDYVe7 = BigInt("1591")
		const uint256wmrWol8 = await CourtFarming_HTStakeNsTJ0FS.stake.call(uintAbc4I2v, {from: accounts[3]});
		const uint256i2vHU8 = await CourtFarming_HTStakeNsTJ0FS.getCurrentTime.call({from: accounts[0]});
		const uint256sNef6uU = await CourtFarming_HTStakeNsTJ0FS._stakeParametrsCalculation.call(uintRCDYVe7, uintH2uBknJ, uintXMnWrNK, {from: accounts[5]});
		const uint256TewbNsj = await CourtFarming_HTStakeNsTJ0FS.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeNsTJ0FS.stake.call(uintAbc4I2v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedxKG6Fa = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressNa1yCN = accounts[3]
		const uint256fansO0o = await CourtFarming_HTStakedxKG6Fa.incvRewardClaim.call({from: accounts[3]});
		const uint256bARG6kI = await CourtFarming_HTStakedxKG6Fa.lastUpdateBlock.call({from: accounts[3]});
		const uint256m1irPSb = await CourtFarming_HTStakedxKG6Fa.incvRewardInfo.call({from: accounts[3]});
		const uint256RqZWWHT = await CourtFarming_HTStakedxKG6Fa.balanceOf.call(addressNa1yCN, {from: accounts[3]});
		const uint256BvI5KOJ = await CourtFarming_HTStakedxKG6Fa.totalStaked.call({from: accounts[4]});

		assert.equal(uint256BvI5KOJ, BigInt("0"))
		assert.equal(uint256RqZWWHT, BigInt("0"))
		assert.equal(uint256bARG6kI, BigInt("1803"))
		assert.equal(uint256fansO0o, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeCkjVvr8 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addresshMxyWt = accounts[0]
		const addressdwQaNB = accounts[5]
		const uint256qH7uzq4 = await CourtFarming_HTStakeCkjVvr8.rewards.call(addresshMxyWt, {from: accounts[0]});
		const addressBwMnM4X = await CourtFarming_HTStakeCkjVvr8.setCourtStake.call(addressdwQaNB, {from: accounts[1]});
		const uint256hCFVg9o = await CourtFarming_HTStakeCkjVvr8.incvRewardClaim.call({from: accounts[4]});

		await expect(CourtFarming_HTStakeCkjVvr8.setCourtStake.call(addressdwQaNB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebgdiuSa = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressYSjwVTO = accounts[2]
		const uintMndcNXh = BigInt("343")
		const uinth75mcWJ = BigInt("1458")
		const uintE0sHtte = BigInt("360")
		const uintp367C5w = BigInt("1533")
		const uintvNwaQqW = BigInt("1534")
		const uintGEYIbf = BigInt("1580")
		const uintwW1vQ4W = BigInt("711")
		const uint256Aw5DY3i = await CourtFarming_HTStakebgdiuSa.balanceOf.call(addressYSjwVTO, {from: accounts[0]});
		const uint256UOcWkm = await CourtFarming_HTStakebgdiuSa._stakeParametrsCalculation.call(uintE0sHtte, uinth75mcWJ, uintMndcNXh, {from: accounts[0]});
		const bool3DGAdl = await CourtFarming_HTStakebgdiuSa.stakeIncvRewards.call(uintp367C5w, {from: accounts[0]});
		await CourtFarming_HTStakebgdiuSa.changeStakeParameters.call(uintwW1vQ4W, uintGEYIbf, uintvNwaQqW, {from: accounts[1]});

		assert.equal(uint256Aw5DY3i, BigInt("0"))
		await expect(CourtFarming_HTStakebgdiuSa._stakeParametrsCalculation.call(uintE0sHtte, uinth75mcWJ, uintMndcNXh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVL0t64y = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintwcE8BLV = BigInt("119")
		const uintyhSKjMT = BigInt("1668")
		const uintlf2z4ed = BigInt("1631")
		const addressiaJOvA9 = accounts[1]
		const booleABdfBe = false
		const uintoAjXiWz = BigInt("1074")
		const uint256zJg3bEk = await CourtFarming_HTStakeVL0t64y.incvRewardClaim.call({from: accounts[4]});
		const uint256b9zMh9V = await CourtFarming_HTStakeVL0t64y.incvRewardClaim.call({from: accounts[4]});
		await CourtFarming_HTStakeVL0t64y.changeStakeParameters.call(uintlf2z4ed, uintyhSKjMT, uintwcE8BLV, {from: accounts[4]});
		const addressmVnhmEi = await CourtFarming_HTStakeVL0t64y.getBeneficiaryInfo.call(addressiaJOvA9, {from: accounts[2]});
		const uint256iSnNqVQ = await CourtFarming_HTStakeVL0t64y.unstake.call(uintoAjXiWz, booleABdfBe, {from: accounts[2]});

		assert.equal(uint256b9zMh9V, BigInt("0"))
		assert.equal(uint256zJg3bEk, BigInt("0"))
		await expect(CourtFarming_HTStakeVL0t64y.changeStakeParameters.call(uintlf2z4ed, uintyhSKjMT, uintwcE8BLV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeSjYkuox = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIvpp3Uo = BigInt("1505")
		const addressiD3D2Z1 = accounts[4]
		const uint25658btC1 = await CourtFarming_HTStakeSjYkuox.stake.call(uintIvpp3Uo, {from: accounts[4]});
		const uint256yqFx73W = await CourtFarming_HTStakeSjYkuox.incvRewardInfo.call({from: accounts[4]});
		const uint256Yl0bUbX = await CourtFarming_HTStakeSjYkuox.totalStaked.call({from: accounts[3]});
		const addressJzS2vg8 = await CourtFarming_HTStakeSjYkuox.setCourtStake.call(addressiD3D2Z1, {from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeRun943c = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintRTR8grR = BigInt("1617")
		const addresshD5E9EA = accounts[5]
		const boolCYYA7LL = await CourtFarming_HTStakeRun943c.stakeIncvRewards.call(uintRTR8grR, {from: accounts[1]});
		const addressrlFJMqi = await CourtFarming_HTStakeRun943c.setCourtStake.call(addresshD5E9EA, {from: accounts[2]});
		const uint256NaYTSrc = await CourtFarming_HTStakeRun943c.totalStaked.call({from: accounts[4]});

		assert.equal(boolCYYA7LL, false)
		await expect(CourtFarming_HTStakeRun943c.setCourtStake.call(addresshD5E9EA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeLZThMtb = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintFi3ZMqx = BigInt("358")
		const addresseniAjPG = accounts[0]
		const uintq6Ujth = BigInt("0")
		const addressS7jG5B0 = accounts[3]
		const addressiHopIwa = accounts[1]
		const uint256Sj4UtHO = await CourtFarming_HTStakeLZThMtb.expectedRewardsToday.call(uintFi3ZMqx, {from: accounts[2]});
		const addressBO0I4lP = await CourtFarming_HTStakeLZThMtb.getBeneficiaryInfo.call(addresseniAjPG, {from: accounts[3]});
		const uint256ylnF2v = await CourtFarming_HTStakeLZThMtb.stake.call(uintq6Ujth, {from: accounts[0]});
		const addressmCmvewh = await CourtFarming_HTStakeLZThMtb.setCourtStake.call(addressS7jG5B0, {from: accounts[4]});
		const uint256qFbOUvV = await CourtFarming_HTStakeLZThMtb.balanceOf.call(addressiHopIwa, {from: accounts[2]});

		await expect(CourtFarming_HTStakeLZThMtb.setCourtStake.call(addressS7jG5B0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeG7M3QWT = await CourtFarming_HTStake.new({from: accounts[4]});
		const boolbxIEdzy = true
		const uintCccpTg1 = BigInt("0")
		const uint256v1ns6JM = await CourtFarming_HTStakeG7M3QWT.unstake.call(uintCccpTg1, boolbxIEdzy, {from: accounts[4]});
		const uint256pO1owMj = await CourtFarming_HTStakeG7M3QWT.lastUpdateBlock.call({from: accounts[0]});

		assert.equal(uint256pO1owMj, BigInt("1803"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedxKG6Fa = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintrsYhDF1 = BigInt("1040")
		const uintSP2s8fq = BigInt("0")
		const boolFJZWyw0 = await CourtFarming_HTStakedxKG6Fa.stakeIncvRewards.call(uintrsYhDF1, {from: accounts[4]});
		const boolYgOSh9A = await CourtFarming_HTStakedxKG6Fa.stakeIncvRewards.call(uintSP2s8fq, {from: accounts[5]});
		const uint256tnxnj9y = await CourtFarming_HTStakedxKG6Fa.totalStaked.call({from: accounts[4]});

		assert.equal(boolFJZWyw0, false)
		assert.equal(boolYgOSh9A, false)
		assert.equal(uint256tnxnj9y, BigInt("0"))
	});
})