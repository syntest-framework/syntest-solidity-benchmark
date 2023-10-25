const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingrVCLJob = await LpStaking.new({from: accounts[2]});
		const addressO7lvwCR = accounts[1]
		const addressFwamuKi = accounts[2]
		const address43AHnb = accounts[1]
		const addresskrfozGB = accounts[5]
		const addressmtGWvJT = accounts[5]
		const addressFKqanh0 = accounts[3]
		const uintSfnNuZK = BigInt("1880")
		const addressWGJBYl = await LpStakingrVCLJob.initialize.call(addresskrfozGB, address43AHnb, addressFwamuKi, addressO7lvwCR, {from: accounts[5]});
		const uint256j82Z2Hj = await LpStakingrVCLJob.getUserAccumulatedWithdrawIncome.call(addressmtGWvJT, {from: accounts[2]});
		const addressyDBE3dC = await LpStakingrVCLJob.updateIncome.call(addressFKqanh0, {from: accounts[4]});
		const uint256FwEBSL9 = await LpStakingrVCLJob.stake.call(uintSfnNuZK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256j82Z2Hj, BigInt("0"))
		await expect(LpStakingrVCLJob.updateIncome.call(addressFKqanh0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingL3Jg5VV = await LpStaking.new({from: accounts[1]});
		const addressq3LE5x = accounts[3]
		const uint256BIwQOI4 = await LpStakingL3Jg5VV.getCurIncomeRate.call({from: accounts[4]});
		const uint256y2x0sE5 = await LpStakingL3Jg5VV.rewardEarned.call(addressq3LE5x, {from: accounts[1]});
		await LpStakingL3Jg5VV.lpRewardRateChanged.call({from: accounts[1]});

		await expect(LpStakingL3Jg5VV.getCurIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingl5zFsYE = await LpStaking.new({from: accounts[5]});
		const addressPqAB7W0 = accounts[0]
		const uintTp86Ftt = BigInt("1139")
		const addresscvyD2U9 = accounts[2]
		const uint256jVvPe4k = await LpStakingl5zFsYE.rewardEarned.call(addressPqAB7W0, {from: accounts[3]});
		await LpStakingl5zFsYE.getIncome.call({from: accounts[3]});
		const uint256Mc1lcDn = await LpStakingl5zFsYE.weiToSatoshi.call(uintTp86Ftt, {from: accounts[3]});
		await LpStakingl5zFsYE.getReward.call({from: accounts[3]});
		const addressZqPALG7 = await LpStakingl5zFsYE.updateIncome.call(addresscvyD2U9, {from: accounts[4]});
		const uint256EMtWyPO = await LpStakingl5zFsYE.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256jVvPe4k, BigInt("0"))
		await expect(LpStakingl5zFsYE.getIncome.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingHkkvikY = await LpStaking.new({from: accounts[5]});
		const addressNvUwZ4K = accounts[2]
		const byteBi5Kff9 = "0x0c1d031510190d0e0a19170801030f130b181d1d130e18010f13061803020520"
		const bytevu79TLv = "0x170c0a0806121c17181a07121b0109071011030e1d0b0f1a0d130f18120c070b"
		const uintjoZoON = BigInt("125")
		const uintWtNYJnn = BigInt("1603")
		const uintJfnw7lA = BigInt("1250")
		const boolY3ypayK = false
		const addressPa9RZYb = await LpStakingHkkvikY.transferOwnership.call(addressNvUwZ4K, {from: accounts[4]});
		const uint256IYcRGTl = await LpStakingHkkvikY.stakeWithPermit.call(uintJfnw7lA, uintWtNYJnn, uintjoZoON, bytevu79TLv, byteBi5Kff9, {from: accounts[0]});
		const boolkC5m2SS = await LpStakingHkkvikY.setEmergencyStop.call(boolY3ypayK, {from: accounts[3]});

		await expect(LpStakingHkkvikY.transferOwnership.call(addressNvUwZ4K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingHkRNQzh = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const address7b9YLR = accounts[4]
		const uinthIs6oOo = BigInt("2019")
		const bytelqtKcbA = "0x0e1306101f180e0d0a13031b1e010d0d0d0714130a05010c091b191a060b0710"
		const bytej0Pd7bM = "0x0c0f11090b0113110e1e130b1717200e0b1e0d200816111112181c1c09171616"
		const uinthnW2bxt = BigInt("140")
		const uinteXRxMzh = BigInt("1354")
		const uintFIloov = BigInt("233")
		const uint256wA4tAD = await LpStakingHkRNQzh.rewardPerToken.call({from: accounts[5]});
		const uint256CrMPtan = await LpStakingHkRNQzh.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256MiSth9G = await LpStakingHkRNQzh.incomeEarned.call(address7b9YLR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IZDMAA1 = await LpStakingHkRNQzh.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256heU0848 = await LpStakingHkRNQzh.stake.call(uinthIs6oOo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wa9cnw = await LpStakingHkRNQzh.stakeWithPermit.call(uintFIloov, uinteXRxMzh, uinthnW2bxt, bytej0Pd7bM, bytelqtKcbA, {from: accounts[0]});
	});

	it('test for LpStaking', async () => {
		const LpStakingOrW1uxl = await LpStaking.new({from: accounts[2]});
		const uintyF6Rysk = BigInt("1283")
		const uint256AIVkdQ3 = await LpStakingOrW1uxl.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256eazwAzK = await LpStakingOrW1uxl.stake.call(uintyF6Rysk, {from: accounts[0]});
		const uint256uVFVBm = await LpStakingOrW1uxl.rewardPerToken.call({from: accounts[5]});

		await expect(LpStakingOrW1uxl.lastTimeRewardApplicable.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingl5zFsYE = await LpStaking.new({from: accounts[5]});
		const addressblVEceB = accounts[0]
		const addressTAPYifm = accounts[3]
		const uintl0Ke0f = BigInt("1249")
		const uinthHTrqK6 = BigInt("1887")
		const uintOOU2qC4 = BigInt("269")
		const uintWpsYaBl = BigInt("1341")
		const addressSLt79jX = accounts[0]
		const addressz1eQJ9o = accounts[2]
		const uintODss3R6 = BigInt("261")
		const addressZ3XkqpX = accounts[4]
		const uint256jVvPe4k = await LpStakingl5zFsYE.rewardEarned.call(addressblVEceB, {from: accounts[3]});
		const uint256pTimBjz = await LpStakingl5zFsYE.incomeEarned.call(addressTAPYifm, {from: accounts[1]});
		await LpStakingl5zFsYE.getIncome.call({from: accounts[3]});
		const uint256Mc1lcDn = await LpStakingl5zFsYE.weiToSatoshi.call(uintl0Ke0f, {from: accounts[3]});
		const uint2566l7P50 = await LpStakingl5zFsYE.weiToSatoshi.call(uinthHTrqK6, {from: accounts[0]});
		const uint256jIKGFt0 = await LpStakingl5zFsYE.weiToSatoshi.call(uintOOU2qC4, {from: accounts[3]});
		await LpStakingl5zFsYE.getReward.call({from: accounts[3]});
		const addressfLUpBxQ = await LpStakingl5zFsYE.inCaseTokensGetStuck.call(addressSLt79jX, uintWpsYaBl, {from: accounts[2]});
		const addressZqPALG7 = await LpStakingl5zFsYE.updateIncome.call(addressz1eQJ9o, {from: accounts[4]});
		const uint256AJZVAYC = await LpStakingl5zFsYE.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressJpSgjD = await LpStakingl5zFsYE.inCaseTokensGetStuck.call(addressZ3XkqpX, uintODss3R6, {from: accounts[1]});
		const uint256NkxFjWf = await LpStakingl5zFsYE.getCurIncomeRate.call({from: accounts[4]});
		const uint256EMtWyPO = await LpStakingl5zFsYE.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256jVvPe4k, BigInt("0"))
		await expect(LpStakingl5zFsYE.incomeEarned.call(addressTAPYifm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingQzK5jxB = await LpStaking.new({from: accounts[1]});
		const addressFjpyMZ0 = "0x0000000000000000000000000000000000000001"
		const addressGY5wjcQ = accounts[0]
		const uintQlCzl9v = BigInt("410")
		await LpStakingQzK5jxB.exit.call({from: accounts[0]});
		await LpStakingQzK5jxB.nonReentrant.call({from: accounts[0]});
		const uint256OEXaPCx = await LpStakingQzK5jxB.rewardEarned.call(addressFjpyMZ0, {from: accounts[2]});
		const addresspDMmART = await LpStakingQzK5jxB.updateIncome.call(addressGY5wjcQ, {from: accounts[3]});
		const uint256S4BRUeZ = await LpStakingQzK5jxB.weiToSatoshi.call(uintQlCzl9v, {from: accounts[4]});

		await expect(LpStakingQzK5jxB.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})