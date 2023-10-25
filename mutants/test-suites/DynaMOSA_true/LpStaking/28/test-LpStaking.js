const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingyexzp5b = await LpStaking.new({from: accounts[1]});
		const uintNkcRnlo = BigInt("1179")
		const addressVhiB9Hi = accounts[2]
//		const uint256tDO6GF = await LpStakingyexzp5b.stake.call(uintNkcRnlo, {from: accounts[5]});
//		const addresstOum9CD = await LpStakingyexzp5b.transferOwnership.call(addressVhiB9Hi, {from: accounts[4]});
//		const uint256SIK73L = await LpStakingyexzp5b.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingyexzp5b.stake.call(uintNkcRnlo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingWzpK2vC = await LpStaking.new({from: accounts[0]});
		const uintS3zqrhw = BigInt("1711")
		const addresscRIaH8H = "0x0000000000000000000000000000000000000001"
		const addresslD10FKI = accounts[0]
		const addressa2eYTPt = accounts[2]
		const addressm2YciYf = accounts[0]
		const booludizuM7 = true
		const uintDKG1d2x = BigInt("431")
//		await LpStakingWzpK2vC.lpRewardRateChanged.call({from: accounts[2]});
//		const uint256IK8bBJw = await LpStakingWzpK2vC.stake.call(uintS3zqrhw, {from: accounts[4]});
//		await LpStakingWzpK2vC.lpIncomeRateChanged.call({from: accounts[4]});
//		const addressej5CJQ = await LpStakingWzpK2vC.initialize.call(addressm2YciYf, addressa2eYTPt, addresslD10FKI, addresscRIaH8H, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHqk0xZ7 = await LpStakingWzpK2vC.setEmergencyStop.call(booludizuM7, {from: accounts[2]});
//		const uint256jEW7xq9 = await LpStakingWzpK2vC.withdraw.call(uintDKG1d2x, {from: accounts[3]});

		await expect(LpStakingWzpK2vC.lpRewardRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNcZvLae = await LpStaking.new({from: accounts[0]});
		const addressVATVm4p = accounts[2]
		const uintu4mK26q = BigInt("1777")
		const addresskWvmygR = accounts[3]
//		const uint256mdSb9V1 = await LpStakingNcZvLae.incomeEarned.call(addressVATVm4p, {from: accounts[4]});
//		const addresseQMBxTf = await LpStakingNcZvLae.inCaseTokensGetStuck.call(addresskWvmygR, uintu4mK26q, {from: accounts[0]});

		await expect(LpStakingNcZvLae.incomeEarned.call(addressVATVm4p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingKwmYarO = await LpStaking.new({from: accounts[0]});
		const addressaXS1n3N = accounts[1]
		const addressn2iUY4F = accounts[2]
//		const addressuNLNYiK = await LpStakingKwmYarO.updateIncome.call(addressaXS1n3N, {from: accounts[0]});
//		const uint256fqSRNrO = await LpStakingKwmYarO.incomePerToken.call({from: accounts[3]});
//		const uint256nFXvb7X = await LpStakingKwmYarO.rewardEarned.call(addressn2iUY4F, {from: accounts[5]});
//		await LpStakingKwmYarO.lpRewardRateChanged.call({from: accounts[0]});
//		await LpStakingKwmYarO.nonReentrant.call({from: accounts[0]});

		await expect(LpStakingKwmYarO.updateIncome.call(addressaXS1n3N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingGQ2AaYR = await LpStaking.new({from: accounts[5]});
		const byteGGF4lYH = "0x0120071f1b1a1313101a1f0a04170f1b020c180a0d01061c0d081a200e18120b"
		const byteRyTMlpJ = "0x1b040f041304040e032009130d1e0605020011190e0a031a04040b07070a1407"
		const uintBEIcm1u = BigInt("132")
		const uintZSNaLog = BigInt("782")
		const uintaX1XX8r = BigInt("469")
		const addressTkT2lNo = accounts[3]
		const byteXqh0j5U = "0x1d031d1513190e041a0c200a09020f0912031a0c11020d1916201b040f150718"
		const byteDV3lOUe = "0x051703050c0d141719190f070c091d11031d14100c151702010a0f190a031501"
		const uintF19YfMD = BigInt("158")
		const uintgSAEWB = BigInt("778")
		const uintIiCZhzC = BigInt("1646")
//		const uint256ptH3NNd = await LpStakingGQ2AaYR.getCurIncomeRate.call({from: accounts[5]});
//		await LpStakingGQ2AaYR.onlyOwner.call({from: accounts[3]});
//		const uint256PLOVaap = await LpStakingGQ2AaYR.stakeWithPermit.call(uintaX1XX8r, uintZSNaLog, uintBEIcm1u, byteRyTMlpJ, byteGGF4lYH, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingGQ2AaYR.lpRewardRateChanged.call({from: accounts[3]});
//		const uint256QgKETx2 = await LpStakingGQ2AaYR.rewardEarned.call(addressTkT2lNo, {from: accounts[0]});
//		const uint256f5lguA8 = await LpStakingGQ2AaYR.stakeWithPermit.call(uintIiCZhzC, uintgSAEWB, uintF19YfMD, byteDV3lOUe, byteXqh0j5U, {from: accounts[1]});

		await expect(LpStakingGQ2AaYR.getCurIncomeRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingcopMI0p = await LpStaking.new({from: accounts[2]});
		const boolLfeVCS = true
		const address8rhkdp = "0x0000000000000000000000000000000000000001"
//		const boolVAQgjgZ = await LpStakingcopMI0p.setEmergencyStop.call(boolLfeVCS, {from: accounts[0]});
//		const uint256fhPBvSG = await LpStakingcopMI0p.getCurIncomeRate.call({from: accounts[3]});
//		const addressi1AwUoq = await LpStakingcopMI0p.transferOwnership.call(address8rhkdp, {from: accounts[4]});

		await expect(LpStakingcopMI0p.setEmergencyStop.call(boolLfeVCS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDq3gqcS = await LpStaking.new({from: accounts[4]});
		const uintn4s4aD = BigInt("157")
		const addressjCPv3bc = "0x0000000000000000000000000000000000000001"
//		await LpStakingDq3gqcS.exit.call({from: accounts[3]});
//		const uint256CxQN8B9 = await LpStakingDq3gqcS.getCurIncomeRate.call({from: accounts[2]});
//		await LpStakingDq3gqcS.nonEmergencyStop.call({from: accounts[4]});
//		const uint256MDqmSDC = await LpStakingDq3gqcS.lastTimeRewardApplicable.call({from: accounts[1]});
//		await LpStakingDq3gqcS.exit.call({from: accounts[5]});
//		const addressBslg2O = await LpStakingDq3gqcS.inCaseTokensGetStuck.call(addressjCPv3bc, uintn4s4aD, {from: accounts[2]});
//		await LpStakingDq3gqcS.lpRewardRateChanged.call({from: accounts[0]});

		await expect(LpStakingDq3gqcS.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVOjvYqn = await LpStaking.new({from: accounts[4]});
		const uinthcp2XFt = BigInt("1895")
		const uint256cktX2g1 = await LpStakingVOjvYqn.rewardPerToken.call({from: accounts[4]});
		const uint256oWlVdCb = await LpStakingVOjvYqn.weiToSatoshi.call(uinthcp2XFt, {from: accounts[2]});
//		const uint256mhqpnhV = await LpStakingVOjvYqn.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256hBEnl0s = await LpStakingVOjvYqn.incomePerToken.call({from: accounts[2]});

		assert.equal(uint256cktX2g1, BigInt("0"))
		assert.equal(uint256oWlVdCb, BigInt("0"))
		await expect(LpStakingVOjvYqn.lastTimeRewardApplicable.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingaJooIo = await LpStaking.new({from: accounts[3]});
		const addressSXzJ44K = accounts[4]
		const addressWvPgw7m = accounts[0]
		const boolHiaJCbb = false
		const uint256ZRZttdw = await LpStakingaJooIo.getUserAccumulatedWithdrawIncome.call(addressSXzJ44K, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hT3jpea = await LpStakingaJooIo.getUserAccumulatedWithdrawIncome.call(addressWvPgw7m, {from: accounts[2]});
//		const boolHKouGXB = await LpStakingaJooIo.setEmergencyStop.call(boolHiaJCbb, {from: accounts[2]});

		assert.equal(uint256ZRZttdw, BigInt("0"))
		assert.equal(uint256hT3jpea, BigInt("0"))
		await expect(LpStakingaJooIo.setEmergencyStop.call(boolHiaJCbb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDq3gqcS = await LpStaking.new({from: accounts[4]});
		const addresswCa9OK6 = accounts[5]
		const addressTNI8hHm = accounts[1]
		const addressR6Gw123 = accounts[4]
		const addressxTn78Y = accounts[2]
		const addressXqJvrN7 = await LpStakingDq3gqcS.initialize.call(addressxTn78Y, addressR6Gw123, addressTNI8hHm, addresswCa9OK6, {from: accounts[4]});
//		await LpStakingDq3gqcS.lpRewardRateChanged.call({from: accounts[0]});
//		await LpStakingDq3gqcS.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingDq3gqcS.lpRewardRateChanged.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDq3gqcS = await LpStaking.new({from: accounts[4]});
		const addresspEqa6Rj = accounts[3]
		const uint256bXnI1Qm = await LpStakingDq3gqcS.rewardEarned.call(addresspEqa6Rj, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingDq3gqcS.lpRewardRateChanged.call({from: accounts[0]});

		assert.equal(uint256bXnI1Qm, BigInt("0"))
		await expect(LpStakingDq3gqcS.lpRewardRateChanged.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNSahyDs = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const boolhyRyVsB = false
		const addressg61QZys = accounts[5]
		const addressDDdsUJW = accounts[3]
		const boolahUsu4X = false
		const boolHOcmiu = await LpStakingNSahyDs.setEmergencyStop.call(boolhyRyVsB, {from: accounts[3]});
		const uint256YoKTYe0 = await LpStakingNSahyDs.incomeEarned.call(addressg61QZys, {from: accounts[5]});
		await LpStakingNSahyDs.nonEmergencyStop.call({from: accounts[1]});
		const addressCFPel7E = await LpStakingNSahyDs.transferOwnership.call(addressDDdsUJW, {from: accounts[2]});
		const boolszKB5m = await LpStakingNSahyDs.setEmergencyStop.call(boolahUsu4X, {from: accounts[3]});
	});
})