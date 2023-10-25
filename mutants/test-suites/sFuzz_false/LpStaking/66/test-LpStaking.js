const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingxqe7iyO = await LpStaking.new({from: accounts[0]});
		const addressrx5XgY1 = accounts[2]
		const boolbsSPz8K = true
		const address2AB9NG = accounts[1]
//		const uint256FA9EHyw = await LpStakingxqe7iyO.incomeEarned.call(addressrx5XgY1, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingxqe7iyO.nonEmergencyStop.call({from: accounts[3]});
//		const boolCLpvmmS = await LpStakingxqe7iyO.setEmergencyStop.call(boolbsSPz8K, {from: accounts[2]});
//		const addressLNY6BgJ = await LpStakingxqe7iyO.updateIncome.call(address2AB9NG, {from: accounts[0]});

		await expect(LpStakingxqe7iyO.incomeEarned.call(addressrx5XgY1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDzW49nR = await LpStaking.new({from: accounts[3]});
		const boolLO3nybP = true
		const uintdHmTYI = BigInt("2041")
//		const boolvkMtSLE = await LpStakingDzW49nR.setEmergencyStop.call(boolLO3nybP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256GNyL71 = await LpStakingDzW49nR.stake.call(uintdHmTYI, {from: accounts[0]});

		await expect(LpStakingDzW49nR.setEmergencyStop.call(boolLO3nybP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingWaE00xE = await LpStaking.new({from: accounts[3]});
		const addressHkkCB8d = accounts[2]
		const boolZiV3pHK = false
//		const addressczGPLQp = await LpStakingWaE00xE.updateReward.call(addressHkkCB8d, {from: accounts[0]});
//		await LpStakingWaE00xE.lpRewardRateChanged.call({from: accounts[4]});
//		await LpStakingWaE00xE.lpIncomeRateChanged.call({from: accounts[2]});
//		const boolIoPJs0 = await LpStakingWaE00xE.setEmergencyStop.call(boolZiV3pHK, {from: accounts[3]});
//		const uint256lNvNPU5 = await LpStakingWaE00xE.rewardPerToken.call({from: accounts[0]});

		await expect(LpStakingWaE00xE.updateReward.call(addressHkkCB8d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNUlyZp = await LpStaking.new({from: accounts[3]});
		const uintAihSNQ5 = BigInt("1128")
		const addressBzWFHQ = accounts[4]
		const addressMr7lNnY = "0x0000000000000000000000000000000000000001"
//		const uint256TaiKohp = await LpStakingNUlyZp.stake.call(uintAihSNQ5, {from: accounts[1]});
//		const uint256AlyWyJA = await LpStakingNUlyZp.rewardPerToken.call({from: accounts[3]});
//		const addresspz3F4cN = await LpStakingNUlyZp.updateReward.call(addressBzWFHQ, {from: accounts[5]});
//		const addressSoagcg6 = await LpStakingNUlyZp.updateReward.call(addressMr7lNnY, {from: accounts[1]});

		await expect(LpStakingNUlyZp.stake.call(uintAihSNQ5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingy8hHhZK = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressINAdCv8 = accounts[5]
		const addresshrZ8loV = "0x0000000000000000000000000000000000000001"
		const uint256ORnHSVO = await LpStakingy8hHhZK.getUserAccumulatedWithdrawIncome.call(addressINAdCv8, {from: "0x0000000000000000000000000000000000000001"});
		const addressNY4BgFi = await LpStakingy8hHhZK.updateReward.call(addresshrZ8loV, {from: accounts[2]});
		await LpStakingy8hHhZK.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LpStaking', async () => {
		const LpStakingjuqukT = await LpStaking.new({from: accounts[0]});
		const uintz4BeuYt = BigInt("786")
		const addressowGMbTz = "0x0000000000000000000000000000000000000001"
		const uint256rEhrOEQ = await LpStakingjuqukT.rewardPerToken.call({from: accounts[2]});
//		const uint256ipw5qN = await LpStakingjuqukT.withdraw.call(uintz4BeuYt, {from: "0x0000000000000000000000000000000000000001"});
//		const addressCc9eixF = await LpStakingjuqukT.transferOwnership.call(addressowGMbTz, {from: accounts[1]});

		assert.equal(uint256rEhrOEQ, BigInt("0"))
		await expect(LpStakingjuqukT.withdraw.call(uintz4BeuYt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDzW49nR = await LpStaking.new({from: accounts[3]});
		const boolLO3nybP = false
		const uintoSVVTzg = BigInt("2041")
//		await LpStakingDzW49nR.lpRewardRateChanged.call({from: accounts[0]});
//		const boolvkMtSLE = await LpStakingDzW49nR.setEmergencyStop.call(boolLO3nybP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256GNyL71 = await LpStakingDzW49nR.stake.call(uintoSVVTzg, {from: accounts[0]});

		await expect(LpStakingDzW49nR.lpRewardRateChanged.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingjuqukT = await LpStaking.new({from: accounts[0]});
		const uintAEnjk6 = BigInt("153")
		const addressr3ysXBt = accounts[2]
		const addressGzkvbZ = "0x0000000000000000000000000000000000000001"
		const uint256rEhrOEQ = await LpStakingjuqukT.rewardPerToken.call({from: accounts[2]});
		const uint256fXu2ERH = await LpStakingjuqukT.weiToSatoshi.call(uintAEnjk6, {from: accounts[4]});
//		const addressLK47G38 = await LpStakingjuqukT.updateReward.call(addressr3ysXBt, {from: "0x0000000000000000000000000000000000000001"});
//		const addressCc9eixF = await LpStakingjuqukT.transferOwnership.call(addressGzkvbZ, {from: accounts[1]});

		assert.equal(uint256fXu2ERH, BigInt("0"))
		assert.equal(uint256rEhrOEQ, BigInt("0"))
		await expect(LpStakingjuqukT.updateReward.call(addressr3ysXBt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingLo8STPN = await LpStaking.new({from: accounts[1]});
		const uint256tktOJd3 = await LpStakingLo8STPN.rewardPerToken.call({from: accounts[1]});
//		await LpStakingLo8STPN.exit.call({from: accounts[0]});

		assert.equal(uint256tktOJd3, BigInt("0"))
		await expect(LpStakingLo8STPN.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingjuqukT = await LpStaking.new({from: accounts[0]});
		const addressCLbmJGe = "0x0000000000000000000000000000000000000001"
		const uintWWlzFvW = BigInt("751")
		const uint256Z3bxRzx = await LpStakingjuqukT.getUserAccumulatedWithdrawIncome.call(addressCLbmJGe, {from: accounts[0]});
		const uint256rEhrOEQ = await LpStakingjuqukT.rewardPerToken.call({from: accounts[2]});
//		const uint256ipw5qN = await LpStakingjuqukT.withdraw.call(uintWWlzFvW, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingjuqukT.lpRewardRateChanged.call({from: accounts[0]});

		assert.equal(uint256Z3bxRzx, BigInt("0"))
		assert.equal(uint256rEhrOEQ, BigInt("0"))
		await expect(LpStakingjuqukT.withdraw.call(uintWWlzFvW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDzW49nR = await LpStaking.new({from: accounts[3]});
		const addressVnds3BI = accounts[1]
		const uintPc04eQc = BigInt("944")
		const boolLO3nybP = false
		const uint256iUUQdXk = await LpStakingDzW49nR.rewardEarned.call(addressVnds3BI, {from: accounts[2]});
//		const uint256UWfRMCo = await LpStakingDzW49nR.withdraw.call(uintPc04eQc, {from: accounts[1]});
//		const boolvkMtSLE = await LpStakingDzW49nR.setEmergencyStop.call(boolLO3nybP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iUUQdXk, BigInt("0"))
		await expect(LpStakingDzW49nR.withdraw.call(uintPc04eQc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDzW49nR = await LpStaking.new({from: accounts[3]});
		const addressXMnyenx = accounts[2]
		const addressy2OZcg8 = accounts[2]
		const addressB1ePobX = accounts[0]
		const addressLUmihud = accounts[2]
		const addressO5M7JfB = accounts[1]
		const uintxScXJOr = BigInt("944")
		const boolLO3nybP = true
		const addressm8e8YoP = await LpStakingDzW49nR.initialize.call(addressLUmihud, addressB1ePobX, addressy2OZcg8, addressXMnyenx, {from: accounts[3]});
		const uint256iUUQdXk = await LpStakingDzW49nR.rewardEarned.call(addressO5M7JfB, {from: accounts[2]});
//		const uint256UWfRMCo = await LpStakingDzW49nR.withdraw.call(uintxScXJOr, {from: accounts[1]});
//		const boolvkMtSLE = await LpStakingDzW49nR.setEmergencyStop.call(boolLO3nybP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iUUQdXk, BigInt("0"))
		await expect(LpStakingDzW49nR.withdraw.call(uintxScXJOr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingjuqukT = await LpStaking.new({from: accounts[0]});
		const uint256rEhrOEQ = await LpStakingjuqukT.rewardPerToken.call({from: accounts[2]});
//		const uint256xFMQglK = await LpStakingjuqukT.getCurIncomeRate.call({from: accounts[2]});
//		await LpStakingjuqukT.getReward.call({from: accounts[2]});
		const uint256ZXgw3jE = await LpStakingjuqukT.getCurIncomeRate.call({from: accounts[2]});

		assert.equal(uint256rEhrOEQ, BigInt("0"))
		await expect(LpStakingjuqukT.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})