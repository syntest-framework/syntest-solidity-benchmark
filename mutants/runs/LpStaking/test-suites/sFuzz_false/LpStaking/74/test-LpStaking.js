const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingIADFUh = await LpStaking.new({from: accounts[3]});
		const addressi9scJ9k = accounts[5]
		const addressk3ibiHC = await LpStakingIADFUh.updateIncome.call(addressi9scJ9k, {from: accounts[0]});
		const uint256AhPZ51r = await LpStakingIADFUh.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingIADFUh.nonEmergencyStop.call({from: accounts[4]});

		await expect(LpStakingIADFUh.updateIncome.call(addressi9scJ9k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingASElehH = await LpStaking.new({from: accounts[0]});
		const bytefmGXawr = "0x061a1c0200190e18111a021503121c0d130414061e0e0603080e14191407191b"
		const byteihWKzB9 = "0x170700100e0416081b131d20150b1a07081c100a0120081d0d120b1a0e091013"
		const uintkZXbxa = BigInt("241")
		const uintchsEUtq = BigInt("1914")
		const uintG9KrLkV = BigInt("865")
		const addressAbyyWnF = accounts[0]
		const addresspk5fN1l = accounts[0]
		const uint256za4vmGd = await LpStakingASElehH.stakeWithPermit.call(uintG9KrLkV, uintchsEUtq, uintkZXbxa, byteihWKzB9, bytefmGXawr, {from: accounts[4]});
		const uint256uButrE = await LpStakingASElehH.incomeEarned.call(addressAbyyWnF, {from: accounts[4]});
		await LpStakingASElehH.getReward.call({from: accounts[4]});
		await LpStakingASElehH.getReward.call({from: accounts[3]});
		await LpStakingASElehH.nonEmergencyStop.call({from: accounts[4]});
		const addressiFSKe9q = await LpStakingASElehH.updateIncome.call(addresspk5fN1l, {from: accounts[2]});

		await expect(LpStakingASElehH.stakeWithPermit.call(uintG9KrLkV, uintchsEUtq, uintkZXbxa, byteihWKzB9, bytefmGXawr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingJteDhi = await LpStaking.new({from: accounts[1]});
		const addressQQEYUeD = accounts[4]
		const uintH5AXqb6 = BigInt("47")
		const uintW8Y6q5n = BigInt("106")
		const uint256LRi6zt = await LpStakingJteDhi.rewardEarned.call(addressQQEYUeD, {from: accounts[1]});
		await LpStakingJteDhi.getIncome.call({from: accounts[3]});
		const uint256YpHNQlj = await LpStakingJteDhi.weiToSatoshi.call(uintH5AXqb6, {from: accounts[4]});
		const uint256WxFfcFJ = await LpStakingJteDhi.weiToSatoshi.call(uintW8Y6q5n, {from: accounts[4]});

		assert.equal(uint256LRi6zt, BigInt("0"))
		await expect(LpStakingJteDhi.getIncome.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVdyRBQj = await LpStaking.new({from: accounts[4]});
		const addressdb4uTr0 = accounts[0]
		const addressuN4y35D = accounts[5]
		const uint256kdW18dG = await LpStakingVdyRBQj.getUserAccumulatedWithdrawIncome.call(addressdb4uTr0, {from: accounts[1]});
		await LpStakingVdyRBQj.getIncome.call({from: accounts[3]});
		const uint256FYR0NA = await LpStakingVdyRBQj.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gxj2L5r = await LpStakingVdyRBQj.getUserAccumulatedWithdrawIncome.call(addressuN4y35D, {from: accounts[1]});

		assert.equal(uint256kdW18dG, BigInt("0"))
		await expect(LpStakingVdyRBQj.getIncome.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingpJFBkAL = await LpStaking.new({from: accounts[5]});
		const addressN1C3t62 = accounts[3]
		const bytet7QdYtr = "0x110d1d01010e0c0c0906160e03031a121906191e0f07081716110102030e0d17"
		const byteVQPCnXa = "0x180e0d0d1b000b1d030510040e0e06151915011e181e13090e161f040716150a"
		const uintdccIPqO = BigInt("129")
		const uintHSIcoZC = BigInt("2047")
		const uintpEip1K = BigInt("685")
		const addresswfVrIbA = accounts[2]
		const addresswFt6rXS = accounts[3]
		const addressr6ECfhL = accounts[2]
		const addresszJkpRRl = accounts[2]
		const uint256WBxdVrA = await LpStakingpJFBkAL.incomeEarned.call(addressN1C3t62, {from: accounts[2]});
		const uint256JHCPUqV = await LpStakingpJFBkAL.rewardPerToken.call({from: accounts[3]});
		await LpStakingpJFBkAL.lpRewardRateChanged.call({from: accounts[4]});
		const uint256vFiYoYz = await LpStakingpJFBkAL.stakeWithPermit.call(uintpEip1K, uintHSIcoZC, uintdccIPqO, byteVQPCnXa, bytet7QdYtr, {from: accounts[3]});
		const addressuRlfe9b = await LpStakingpJFBkAL.initialize.call(addresszJkpRRl, addressr6ECfhL, addresswFt6rXS, addresswfVrIbA, {from: accounts[1]});

		await expect(LpStakingpJFBkAL.incomeEarned.call(addressN1C3t62, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakings04utmX = await LpStaking.new({from: accounts[0]});
		const booltm7PCVi = true
		const addresshDVSbff = accounts[2]
		const booludmuZIM = await LpStakings04utmX.setEmergencyStop.call(booltm7PCVi, {from: accounts[4]});
		await LpStakings04utmX.lpRewardRateChanged.call({from: accounts[2]});
		await LpStakings04utmX.getReward.call({from: accounts[4]});
		const addressAo4jrrd = await LpStakings04utmX.updateReward.call(addresshDVSbff, {from: accounts[3]});
		await LpStakings04utmX.lpRewardRateChanged.call({from: accounts[3]});

		await expect(LpStakings04utmX.setEmergencyStop.call(booltm7PCVi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingTXEZfV9 = await LpStaking.new({from: accounts[2]});
		const addresscOoOCKB = accounts[4]
		const addressHbfmKNO = accounts[2]
		const bytevSTO3IK = "0x1909031317191c1d0b16191b1b151c121d03201201191e0318010f151506131d"
		const byteU1udAFF = "0x0c191d11170e0b1a100d0b100115181a191c1d1410120d121d031f0d0b030c02"
		const uintLjZmGUn = BigInt("156")
		const uintU75Bzjf = BigInt("1227")
		const uintgvos08U = BigInt("1272")
		const addressea1zKMt = accounts[4]
		const addressyEa6sSm = accounts[1]
		const addressFnTWlGG = accounts[1]
		const addressYMKVDpK = accounts[3]
		const uint256XxsYlm6 = await LpStakingTXEZfV9.rewardEarned.call(addresscOoOCKB, {from: accounts[3]});
		const uint256j4vJybY = await LpStakingTXEZfV9.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Thr41bh = await LpStakingTXEZfV9.getUserAccumulatedWithdrawIncome.call(addressHbfmKNO, {from: accounts[2]});
		const uint256EdhciTn = await LpStakingTXEZfV9.stakeWithPermit.call(uintgvos08U, uintU75Bzjf, uintLjZmGUn, byteU1udAFF, bytevSTO3IK, {from: accounts[4]});
		const addressVkP0iDM = await LpStakingTXEZfV9.initialize.call(addressYMKVDpK, addressFnTWlGG, addressyEa6sSm, addressea1zKMt, {from: accounts[0]});

		assert.equal(uint256XxsYlm6, BigInt("0"))
		await expect(LpStakingTXEZfV9.lastTimeRewardApplicable.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingJteDhi = await LpStaking.new({from: accounts[1]});
		const addresspzeWFiR = accounts[4]
		const uintvxRA6Aa = BigInt("47")
		const uintzncWF9 = BigInt("106")
		const uint256LRi6zt = await LpStakingJteDhi.rewardEarned.call(addresspzeWFiR, {from: accounts[1]});
		const uint256weWzhQt = await LpStakingJteDhi.getCurIncomeRate.call({from: accounts[1]});
		await LpStakingJteDhi.getIncome.call({from: accounts[3]});
		const uint256YpHNQlj = await LpStakingJteDhi.weiToSatoshi.call(uintvxRA6Aa, {from: accounts[4]});
		await LpStakingJteDhi.getIncome.call({from: accounts[2]});
		const uint256WxFfcFJ = await LpStakingJteDhi.weiToSatoshi.call(uintzncWF9, {from: accounts[4]});

		assert.equal(uint256LRi6zt, BigInt("0"))
		await expect(LpStakingJteDhi.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingTlyQZDP = await LpStaking.new({from: accounts[3]});
		const addressjVF36Zf = accounts[0]
		const addressVyTqN8D = accounts[3]
		const address9BgxFk = accounts[1]
		const addressKybHZ4Z = accounts[0]
		const boolqQywEkS = false
		const addressw6Sw5JU = await LpStakingTlyQZDP.initialize.call(addressKybHZ4Z, address9BgxFk, addressVyTqN8D, addressjVF36Zf, {from: accounts[0]});
		const boolcEpL9Aw = await LpStakingTlyQZDP.setEmergencyStop.call(boolqQywEkS, {from: accounts[0]});
		await LpStakingTlyQZDP.getReward.call({from: accounts[3]});
		await LpStakingTlyQZDP.lpIncomeRateChanged.call({from: accounts[0]});

		await expect(LpStakingTlyQZDP.setEmergencyStop.call(boolqQywEkS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingJteDhi = await LpStaking.new({from: accounts[1]});
		const addressMaL7XO4 = accounts[3]
		const addressMHIA8F0 = accounts[5]
		await LpStakingJteDhi.exit.call({from: accounts[3]});
		const uint256h8sFdez = await LpStakingJteDhi.getUserAccumulatedWithdrawIncome.call(addressMaL7XO4, {from: accounts[2]});
		const uint256LRi6zt = await LpStakingJteDhi.rewardEarned.call(addressMHIA8F0, {from: accounts[1]});

		await expect(LpStakingJteDhi.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwwwz3B = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressw8nKUSd = accounts[1]
		const addressYGNmtKl = accounts[4]
		await LpStakingwwwz3B.getIncome.call({from: accounts[1]});
		await LpStakingwwwz3B.nonEmergencyStop.call({from: accounts[4]});
		const uint256g2FZppF = await LpStakingwwwz3B.getUserAccumulatedWithdrawIncome.call(addressw8nKUSd, {from: accounts[4]});
		const uint256TMyJbD = await LpStakingwwwz3B.incomeEarned.call(addressYGNmtKl, {from: accounts[2]});
		await LpStakingwwwz3B.nonEmergencyStop.call({from: accounts[3]});
	});
})