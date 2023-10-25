const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingV3Yaixz = await LpStaking.new({from: accounts[0]});
		const addressReJTjH = accounts[1]
		const addresssz3kvMW = accounts[1]
//		const addresskCh5DV5 = await LpStakingV3Yaixz.updateIncome.call(addressReJTjH, {from: accounts[3]});
//		await LpStakingV3Yaixz.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressTaXYFhJ = await LpStakingV3Yaixz.updateIncome.call(addresssz3kvMW, {from: accounts[4]});
//		const uint256LaHkDWI = await LpStakingV3Yaixz.getCurIncomeRate.call({from: accounts[2]});
//		const uint256JMVoEVz = await LpStakingV3Yaixz.getCurIncomeRate.call({from: accounts[2]});

		await expect(LpStakingV3Yaixz.updateIncome.call(addressReJTjH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingLkx9qZ = await LpStaking.new({from: accounts[1]});
		const addressv8QrCid = accounts[2]
//		await LpStakingLkx9qZ.exit.call({from: accounts[2]});
//		const uint256s7usM9y = await LpStakingLkx9qZ.getUserAccumulatedWithdrawIncome.call(addressv8QrCid, {from: accounts[0]});
//		await LpStakingLkx9qZ.getReward.call({from: accounts[4]});
//		const uint256I0Sxw58 = await LpStakingLkx9qZ.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(LpStakingLkx9qZ.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingWRgzz3A = await LpStaking.new({from: accounts[5]});
		const addresst4L289 = accounts[3]
//		const uint256M2gUm56 = await LpStakingWRgzz3A.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingWRgzz3A.getIncome.call({from: accounts[4]});
//		const uint256Elonvoy = await LpStakingWRgzz3A.getUserAccumulatedWithdrawIncome.call(addresst4L289, {from: accounts[1]});
//		const uint256EtQdOse = await LpStakingWRgzz3A.rewardPerToken.call({from: accounts[4]});

		await expect(LpStakingWRgzz3A.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingjL3kgO1 = await LpStaking.new({from: accounts[4]});
		const addresshCTiSW = accounts[3]
		const addresszMBYAhV = accounts[4]
		const addressTM9a8AL = accounts[5]
//		const addressURw6M6P = await LpStakingjL3kgO1.transferOwnership.call(addresshCTiSW, {from: accounts[0]});
//		const uint256sUbdiNe = await LpStakingjL3kgO1.getUserAccumulatedWithdrawIncome.call(addresszMBYAhV, {from: accounts[1]});
//		const uint256CSLSHlN = await LpStakingjL3kgO1.incomePerToken.call({from: accounts[2]});
//		const addressvseBjS7 = await LpStakingjL3kgO1.updateReward.call(addressTM9a8AL, {from: accounts[2]});

		await expect(LpStakingjL3kgO1.transferOwnership.call(addresshCTiSW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingWManhf6 = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressELaQW8v = accounts[0]
		const uint256w0RjhZ = await LpStakingWManhf6.getUserAccumulatedWithdrawIncome.call(addressELaQW8v, {from: accounts[1]});
		const uint256yAXpa8e = await LpStakingWManhf6.rewardPerToken.call({from: accounts[3]});
	});

	it('test for LpStaking', async () => {
		const LpStakingIdQhxm3 = await LpStaking.new({from: accounts[4]});
		const addressevyeJl = accounts[1]
		const uintrPXWIjL = BigInt("1229")
		const addressIu1TCED = accounts[3]
		const addressLHZdQK0 = accounts[5]
		const addressZnibEJ = accounts[4]
		const addressvMEzEae = accounts[4]
		const addressP4ZBQXw = accounts[4]
		const uintuioaVsj = BigInt("1481")
		const uint256Fq8ZFQY = await LpStakingIdQhxm3.getUserAccumulatedWithdrawIncome.call(addressevyeJl, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingIdQhxm3.getIncome.call({from: accounts[3]});
//		const addressbw0BRpC = await LpStakingIdQhxm3.inCaseTokensGetStuck.call(addressIu1TCED, uintrPXWIjL, {from: accounts[3]});
//		const addressbv8oCO = await LpStakingIdQhxm3.initialize.call(addressP4ZBQXw, addressvMEzEae, addressZnibEJ, addressLHZdQK0, {from: accounts[0]});
//		const uint256mVKaMWp = await LpStakingIdQhxm3.stake.call(uintuioaVsj, {from: accounts[3]});

		assert.equal(uint256Fq8ZFQY, BigInt("0"))
		await expect(LpStakingIdQhxm3.getIncome.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingGmMtdtS = await LpStaking.new({from: accounts[0]});
		const uintp4zJ154 = BigInt("1827")
		const addressGrliqCX = accounts[0]
		const addresszeLT68 = "0x0000000000000000000000000000000000000001"
//		const uint256DmqYNJb = await LpStakingGmMtdtS.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressW2GZ9Xk = await LpStakingGmMtdtS.inCaseTokensGetStuck.call(addressGrliqCX, uintp4zJ154, {from: accounts[1]});
//		const uint256YuKjOmH = await LpStakingGmMtdtS.incomeEarned.call(addresszeLT68, {from: accounts[3]});

		await expect(LpStakingGmMtdtS.lastTimeRewardApplicable.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNw75qET = await LpStaking.new({from: accounts[2]});
		const addressOlXufU1 = accounts[5]
		const addressVpdmtlJ = accounts[0]
//		const uint256ui6g6X6 = await LpStakingNw75qET.incomePerToken.call({from: accounts[4]});
//		await LpStakingNw75qET.getReward.call({from: accounts[4]});
//		const addressPwHQHUq = await LpStakingNw75qET.updateIncome.call(addressOlXufU1, {from: "0x0000000000000000000000000000000000000001"});
//		const addressrufx0Ca = await LpStakingNw75qET.updateIncome.call(addressVpdmtlJ, {from: accounts[3]});

		await expect(LpStakingNw75qET.incomePerToken.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingMsD2G90 = await LpStaking.new({from: accounts[3]});
		const uintRJTKoXQ = BigInt("191")
//		await LpStakingMsD2G90.lpRewardRateChanged.call({from: accounts[4]});
//		const uint256FU3hefr = await LpStakingMsD2G90.withdraw.call(uintRJTKoXQ, {from: accounts[4]});
//		await LpStakingMsD2G90.nonEmergencyStop.call({from: accounts[0]});

		await expect(LpStakingMsD2G90.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingMsD2G90 = await LpStaking.new({from: accounts[3]});
		const addressC49SI4g = accounts[0]
		const uintFldAG9 = BigInt("1986")
		const addressxKsDrV = accounts[2]
		const uint256IRzOsX = await LpStakingMsD2G90.rewardEarned.call(addressC49SI4g, {from: accounts[0]});
//		await LpStakingMsD2G90.lpRewardRateChanged.call({from: accounts[4]});
//		const addressxgFfoKC = await LpStakingMsD2G90.inCaseTokensGetStuck.call(addressxKsDrV, uintFldAG9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256IRzOsX, BigInt("0"))
		await expect(LpStakingMsD2G90.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingMsD2G90 = await LpStaking.new({from: accounts[3]});
		const addressP73LWQH = accounts[2]
		const addressYTwfrar = accounts[0]
		const addressvK08wNb = accounts[0]
		const addressB9jBpuO = accounts[2]
		const addressoS80ON = accounts[1]
		const addresskU8hp3 = accounts[0]
		const addressCRHUXkO = accounts[4]
		const addressCkGKPBC = await LpStakingMsD2G90.initialize.call(addressB9jBpuO, addressvK08wNb, addressYTwfrar, addressP73LWQH, {from: accounts[1]});
//		const addressBQj5vSO = await LpStakingMsD2G90.updateIncome.call(addressoS80ON, {from: accounts[1]});
//		const addressw2EngM = await LpStakingMsD2G90.updateReward.call(addresskU8hp3, {from: accounts[2]});
//		const addressGkOonR = await LpStakingMsD2G90.updateIncome.call(addressCRHUXkO, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingMsD2G90.lpRewardRateChanged.call({from: accounts[4]});

		await expect(LpStakingMsD2G90.updateIncome.call(addressoS80ON, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingyo50OqC = await LpStaking.new({from: accounts[0]});
		const addressXFA3bi3 = accounts[3]
//		const uint256O5kxpIm = await LpStakingyo50OqC.incomeEarned.call(addressXFA3bi3, {from: accounts[3]});
//		await LpStakingyo50OqC.getReward.call({from: accounts[5]});
//		const uint256hb3ETT = await LpStakingyo50OqC.rewardPerToken.call({from: accounts[1]});
//		const uint256jVsbaZY = await LpStakingyo50OqC.getCurIncomeRate.call({from: accounts[5]});

		await expect(LpStakingyo50OqC.incomeEarned.call(addressXFA3bi3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})