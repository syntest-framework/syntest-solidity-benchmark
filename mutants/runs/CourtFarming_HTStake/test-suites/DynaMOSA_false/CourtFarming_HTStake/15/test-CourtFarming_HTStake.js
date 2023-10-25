const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVjbFGLb = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressH075r8S = accounts[2]
		const addressAfwDtjQ = accounts[2]
		const uintaMnCX9 = BigInt("409")
		const uint256P52Alpn = await CourtFarming_HTStakeVjbFGLb.lastUpdateBlock.call({from: accounts[0]});
		const addressgqNMOmH = await CourtFarming_HTStakeVjbFGLb.updateReward.call(addressH075r8S, {from: accounts[0]});
		const uint256SImqhFz = await CourtFarming_HTStakeVjbFGLb.rewards.call(addressAfwDtjQ, {from: accounts[4]});
		const uint256gZnkdq5 = await CourtFarming_HTStakeVjbFGLb.stake.call(uintaMnCX9, {from: accounts[1]});
		const uint256acaws6k = await CourtFarming_HTStakeVjbFGLb.incvRewardInfo.call({from: accounts[2]});

		assert.equal(uint256P52Alpn, BigInt("1722"))
		await expect(CourtFarming_HTStakeVjbFGLb.stake.call(uintaMnCX9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeB6CMZ3 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressiNU2FSE = accounts[2]
		const uint256tiXhJp = await CourtFarming_HTStakeB6CMZ3.balanceOf.call(addressiNU2FSE, {from: accounts[3]});
		const uint256A1AsM7K = await CourtFarming_HTStakeB6CMZ3.blockNumber.call({from: accounts[1]});
		const uint256iw78KJ = await CourtFarming_HTStakeB6CMZ3.totalStaked.call({from: accounts[5]});

		assert.equal(uint256A1AsM7K, BigInt("1722"))
		assert.equal(uint256iw78KJ, BigInt("0"))
		assert.equal(uint256tiXhJp, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMtlYehQ = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressnCBXBk = accounts[1]
		const addressVN3nLJE = accounts[4]
		const uint256jZBN1n = await CourtFarming_HTStakeMtlYehQ.incvRewardClaim.call({from: accounts[3]});
		const uint256iXzd2cr = await CourtFarming_HTStakeMtlYehQ.incvRewardInfo.call({from: accounts[2]});
		const uint256IQX74Xm = await CourtFarming_HTStakeMtlYehQ.getCurrentTime.call({from: accounts[0]});
		const uint256kcZsxUT = await CourtFarming_HTStakeMtlYehQ.rewards.call(addressnCBXBk, {from: accounts[4]});
		const uint256M0quzfF = await CourtFarming_HTStakeMtlYehQ.balanceOf.call(addressVN3nLJE, {from: accounts[2]});

		assert.equal(uint256IQX74Xm, BigInt("1630201564"))
		assert.equal(uint256M0quzfF, BigInt("0"))
		assert.equal(uint256jZBN1n, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeLisEc10 = await CourtFarming_HTStake.new({from: accounts[0]});
		const boolkPbs0n = true
		const uintlmO6wmd = BigInt("716")
		const addressfcg4jZb = accounts[5]
		const uintn0Jl5L9 = BigInt("363")
		const uintxsk5Prp = BigInt("1630")
		const uintWzGTz5W = BigInt("972")
		const uintuJ94Ve = BigInt("1203")
		const uint256fh7Y1TD = await CourtFarming_HTStakeLisEc10.unstake.call(uintlmO6wmd, boolkPbs0n, {from: accounts[1]});
		const addressfIZIX8p = await CourtFarming_HTStakeLisEc10.getBeneficiaryInfo.call(addressfcg4jZb, {from: accounts[3]});
		await CourtFarming_HTStakeLisEc10.changeStakeParameters.call(uintWzGTz5W, uintxsk5Prp, uintn0Jl5L9, {from: accounts[3]});
		const uint256iTENHaF = await CourtFarming_HTStakeLisEc10.blockNumber.call({from: accounts[0]});
		const boolqSLGrq4 = await CourtFarming_HTStakeLisEc10.stakeIncvRewards.call(uintuJ94Ve, {from: accounts[1]});

		await expect(CourtFarming_HTStakeLisEc10.unstake.call(uintlmO6wmd, boolkPbs0n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeJF7vTA = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintqAdWz16 = BigInt("608")
		const addressfEP1lqB = accounts[2]
		const boolOPqLJtD = false
		const uintqAEhnHg = BigInt("565")
		const addressjnjzqC = accounts[4]
		const uint256n15EydG = await CourtFarming_HTStakeJF7vTA.blockNumber.call({from: accounts[2]});
		const uint256upQyYh9 = await CourtFarming_HTStakeJF7vTA.expectedRewardsToday.call(uintqAdWz16, {from: accounts[2]});
		const addresskjv96GU = await CourtFarming_HTStakeJF7vTA.setCourtStake.call(addressfEP1lqB, {from: accounts[4]});
		const uint256qQnjna8 = await CourtFarming_HTStakeJF7vTA.unstake.call(uintqAEhnHg, boolOPqLJtD, {from: accounts[1]});
		const uint256CBZUVq = await CourtFarming_HTStakeJF7vTA.balanceOf.call(addressjnjzqC, {from: accounts[3]});
		const uint256r5Gix9o = await CourtFarming_HTStakeJF7vTA.incvRewardClaim.call({from: accounts[1]});

		assert.equal(uint256n15EydG, BigInt("1722"))
		await expect(CourtFarming_HTStakeJF7vTA.setCourtStake.call(addressfEP1lqB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeN7oIKjA = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintE23DW2M = BigInt("718")
		const uintKcdUlvI = BigInt("227")
		const uintwdRjP8e = BigInt("1027")
		const addressLvu45Pa = accounts[0]
		const address5MHXLJ = accounts[3]
		const uintekB6Vo = BigInt("1580")
		const uint256y9hSoX = await CourtFarming_HTStakeN7oIKjA._stakeParametrsCalculation.call(uintwdRjP8e, uintKcdUlvI, uintE23DW2M, {from: accounts[3]});
		const uint256fcN1AL = await CourtFarming_HTStakeN7oIKjA.blockNumber.call({from: accounts[5]});
		const addressiHjoFJ = await CourtFarming_HTStakeN7oIKjA.getBeneficiaryInfo.call(addressLvu45Pa, {from: accounts[1]});
		const addressaSvjAEO = await CourtFarming_HTStakeN7oIKjA.updateReward.call(address5MHXLJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256z5VOC9 = await CourtFarming_HTStakeN7oIKjA.expectedRewardsToday.call(uintekB6Vo, {from: accounts[3]});

		await expect(CourtFarming_HTStakeN7oIKjA._stakeParametrsCalculation.call(uintwdRjP8e, uintKcdUlvI, uintE23DW2M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedQ6XhP9 = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressic77jMG = "0x0000000000000000000000000000000000000001"
		const uintJMI2HoC = BigInt("1006")
		const uintC8k5Kd8 = BigInt("352")
		const uintSct52uz = BigInt("1354")
		const addressTaK79pD = accounts[0]
		const uint256wqhRl6 = await CourtFarming_HTStakedQ6XhP9.blockNumber.call({from: accounts[0]});
		const addressN3sDAX = await CourtFarming_HTStakedQ6XhP9.setCourtStake.call(addressic77jMG, {from: accounts[2]});
		const uint256h998bb = await CourtFarming_HTStakedQ6XhP9.blockNumber.call({from: accounts[1]});
		const uint256DYx8UsP = await CourtFarming_HTStakedQ6XhP9._stakeParametrsCalculation.call(uintSct52uz, uintC8k5Kd8, uintJMI2HoC, {from: accounts[2]});
		const addressZWJRgmd = await CourtFarming_HTStakedQ6XhP9.setCourtStake.call(addressTaK79pD, {from: accounts[2]});
		const uint256gi4mbzg = await CourtFarming_HTStakedQ6XhP9.blockNumber.call({from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMtlYehQ = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintsAsjDdV = BigInt("860")
		const uintPDsQmMY = BigInt("579")
		const uintWrDdelV = BigInt("541")
		const addressbwzKzUK = accounts[1]
		const uint256jZBN1n = await CourtFarming_HTStakeMtlYehQ.incvRewardClaim.call({from: accounts[3]});
		const uint256iXzd2cr = await CourtFarming_HTStakeMtlYehQ.incvRewardInfo.call({from: accounts[2]});
		const uint256HbTqHFA = await CourtFarming_HTStakeMtlYehQ.incvRewardInfo.call({from: accounts[0]});
		await CourtFarming_HTStakeMtlYehQ.changeStakeParameters.call(uintWrDdelV, uintPDsQmMY, uintsAsjDdV, {from: accounts[3]});
		const uint256n2IB1MD = await CourtFarming_HTStakeMtlYehQ.incvRewardInfo.call({from: accounts[3]});
		const uint256dH5sDs6 = await CourtFarming_HTStakeMtlYehQ.blockNumber.call({from: accounts[4]});
		const uint256IQX74Xm = await CourtFarming_HTStakeMtlYehQ.getCurrentTime.call({from: accounts[0]});
		const uint256kcZsxUT = await CourtFarming_HTStakeMtlYehQ.rewards.call(addressbwzKzUK, {from: accounts[4]});

		assert.equal(uint256jZBN1n, BigInt("0"))
		await expect(CourtFarming_HTStakeMtlYehQ.changeStakeParameters.call(uintWrDdelV, uintPDsQmMY, uintsAsjDdV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeS8cu0w = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressjrsOd5h = accounts[2]
		const addressb1JXBIA = "0x0000000000000000000000000000000000000001"
		const uint256M8EMfFH = await CourtFarming_HTStakeeS8cu0w.balanceOf.call(addressjrsOd5h, {from: accounts[3]});
		const addressgmPrspE = await CourtFarming_HTStakeeS8cu0w.setCourtStake.call(addressb1JXBIA, {from: accounts[2]});
		const uint256f4nfUAX = await CourtFarming_HTStakeeS8cu0w.incvRewardClaim.call({from: accounts[4]});
		const uint256Iz7LK0X = await CourtFarming_HTStakeeS8cu0w.incvRewardInfo.call({from: accounts[1]});

		assert.equal(uint256M8EMfFH, BigInt("0"))
		await expect(CourtFarming_HTStakeeS8cu0w.setCourtStake.call(addressb1JXBIA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMtlYehQ = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressLHbRaVJ = accounts[3]
		const addressdG9ZnG = accounts[1]
		const uint4TkSYV = BigInt("108")
		const addressB7m5De = accounts[2]
		const uint256jZBN1n = await CourtFarming_HTStakeMtlYehQ.incvRewardClaim.call({from: accounts[3]});
		const uint256NVaSaEl = await CourtFarming_HTStakeMtlYehQ.balanceOf.call(addressLHbRaVJ, {from: accounts[3]});
		const addressO2cV4Xl = await CourtFarming_HTStakeMtlYehQ.getBeneficiaryInfo.call(addressdG9ZnG, {from: accounts[5]});
		const uint256iXzd2cr = await CourtFarming_HTStakeMtlYehQ.incvRewardInfo.call({from: accounts[2]});
		const uint256n2IB1MD = await CourtFarming_HTStakeMtlYehQ.incvRewardInfo.call({from: accounts[3]});
		const uint256haCnCfC = await CourtFarming_HTStakeMtlYehQ.stake.call(uint4TkSYV, {from: accounts[2]});
		const uint256PUPBueW = await CourtFarming_HTStakeMtlYehQ.totalStaked.call({from: accounts[1]});
		const uint256kcZsxUT = await CourtFarming_HTStakeMtlYehQ.rewards.call(addressB7m5De, {from: accounts[4]});

		assert.equal(uint256NVaSaEl, BigInt("0"))
		assert.equal(uint256jZBN1n, BigInt("0"))
		await expect(CourtFarming_HTStakeMtlYehQ.stake.call(uint4TkSYV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeS8cu0w = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintSOy7hS1 = BigInt("607")
		const uintIbMa8Cp = BigInt("1131")
		const uint256f4nfUAX = await CourtFarming_HTStakeeS8cu0w.incvRewardClaim.call({from: accounts[4]});
		const boolwQSbW0u = await CourtFarming_HTStakeeS8cu0w.stakeIncvRewards.call(uintSOy7hS1, {from: accounts[2]});
		const uint256Iz7LK0X = await CourtFarming_HTStakeeS8cu0w.incvRewardInfo.call({from: accounts[1]});
		const uint256CFXiW6j = await CourtFarming_HTStakeeS8cu0w.expectedRewardsToday.call(uintIbMa8Cp, {from: accounts[3]});

		assert.equal(boolwQSbW0u, false)
		assert.equal(uint256f4nfUAX, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeS8cu0w = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintM97vDLZ = BigInt("758")
		const uintYrCAGDt = BigInt("0")
		const uintiqRIxBf = BigInt("457")
		const uint256yBtyZf9 = await CourtFarming_HTStakeeS8cu0w.expectedRewardsToday.call(uintM97vDLZ, {from: accounts[3]});
		const uint256molRBhE = await CourtFarming_HTStakeeS8cu0w.stake.call(uintYrCAGDt, {from: accounts[1]});
		const uint256ztCbiaa = await CourtFarming_HTStakeeS8cu0w.stake.call(uintiqRIxBf, {from: accounts[4]});
		const uint256XMr2X0z = await CourtFarming_HTStakeeS8cu0w.blockNumber.call({from: accounts[0]});
		const uint256CAloeNe = await CourtFarming_HTStakeeS8cu0w.getCurrentTime.call({from: accounts[3]});

		await expect(CourtFarming_HTStakeeS8cu0w.stake.call(uintiqRIxBf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeS8cu0w = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolrrZzN5H = false
		const uintgRYlXPG = BigInt("0")
		const uint256kqalI97 = await CourtFarming_HTStakeeS8cu0w.unstake.call(uintgRYlXPG, boolrrZzN5H, {from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeS8cu0w = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintfVkmFro = BigInt("0")
		const addressrTt3hxg = accounts[2]
		const addresscN6DBLZ = accounts[2]
		const uintICoMJmk = BigInt("1467")
		const boolw8TBjMY = await CourtFarming_HTStakeeS8cu0w.stakeIncvRewards.call(uintfVkmFro, {from: accounts[0]});
		const uint256TXWmyTq = await CourtFarming_HTStakeeS8cu0w.balanceOf.call(addressrTt3hxg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PHkbml = await CourtFarming_HTStakeeS8cu0w.blockNumber.call({from: accounts[4]});
		const uint256EmGp4kF = await CourtFarming_HTStakeeS8cu0w.totalStaked.call({from: accounts[0]});
		const uint256KsF9u5U = await CourtFarming_HTStakeeS8cu0w.getCurrentTime.call({from: accounts[2]});
		const addressKrNhUV2 = await CourtFarming_HTStakeeS8cu0w.updateReward.call(addresscN6DBLZ, {from: accounts[3]});
		const uint256wGYtEMv = await CourtFarming_HTStakeeS8cu0w.blockNumber.call({from: accounts[1]});
		const booltGKh6rS = await CourtFarming_HTStakeeS8cu0w.stakeIncvRewards.call(uintICoMJmk, {from: accounts[1]});
		const uint256j4wjRqb = await CourtFarming_HTStakeeS8cu0w.getCurrentTime.call({from: accounts[4]});
		const uint256pNAPGTO = await CourtFarming_HTStakeeS8cu0w.getCurrentTime.call({from: accounts[2]});

		assert.equal(booltGKh6rS, false)
		assert.equal(boolw8TBjMY, false)
		assert.equal(uint256EmGp4kF, BigInt("0"))
		assert.equal(uint256KsF9u5U, BigInt("1630201560"))
		assert.equal(uint256PHkbml, BigInt("1722"))
		assert.equal(uint256TXWmyTq, BigInt("0"))
		assert.equal(uint256j4wjRqb, BigInt("1630201560"))
		assert.equal(uint256pNAPGTO, BigInt("1630201560"))
		assert.equal(uint256wGYtEMv, BigInt("1722"))
	});
})