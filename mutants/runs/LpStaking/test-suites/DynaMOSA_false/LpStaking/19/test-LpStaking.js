const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingSzylvTr = await LpStaking.new({from: accounts[1]});
		const boolBEumM4C = true
		const addressSAl5azI = accounts[2]
		const booleNqYowm = await LpStakingSzylvTr.setEmergencyStop.call(boolBEumM4C, {from: accounts[2]});
		await LpStakingSzylvTr.nonEmergencyStop.call({from: accounts[3]});
		const uint256uclkwH = await LpStakingSzylvTr.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256U6XzC2 = await LpStakingSzylvTr.incomeEarned.call(addressSAl5azI, {from: accounts[0]});
		const uint256Oh6vOb = await LpStakingSzylvTr.getCurIncomeRate.call({from: accounts[4]});
		await LpStakingSzylvTr.nonEmergencyStop.call({from: accounts[0]});

		await expect(LpStakingSzylvTr.setEmergencyStop.call(boolBEumM4C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingrLKE0Tl = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGjTp4Qr = accounts[1]
		const addressuKOI7hv = accounts[0]
		const uint256V2Ixp6b = await LpStakingrLKE0Tl.incomeEarned.call(addressGjTp4Qr, {from: accounts[1]});
		const uint256GxwMV3s = await LpStakingrLKE0Tl.incomeEarned.call(addressuKOI7hv, {from: accounts[0]});
		await LpStakingrLKE0Tl.getIncome.call({from: accounts[3]});
		const uint256kk2Q9TJ = await LpStakingrLKE0Tl.getCurIncomeRate.call({from: accounts[3]});
	});

	it('test for LpStaking', async () => {
		const LpStakingtCK3CqE = await LpStaking.new({from: accounts[3]});
		const addresskFoxw0 = accounts[3]
		const boolVZ3fcMR = true
		const addressORqcUmV = accounts[4]
		const uint256mCaWywH = await LpStakingtCK3CqE.incomeEarned.call(addresskFoxw0, {from: accounts[3]});
		await LpStakingtCK3CqE.getIncome.call({from: accounts[3]});
		const boolaiJPkaf = await LpStakingtCK3CqE.setEmergencyStop.call(boolVZ3fcMR, {from: accounts[5]});
		const addressENqZCLJ = await LpStakingtCK3CqE.updateReward.call(addressORqcUmV, {from: accounts[1]});
		await LpStakingtCK3CqE.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingtCK3CqE.onlyOwner.call({from: accounts[4]});

		await expect(LpStakingtCK3CqE.incomeEarned.call(addresskFoxw0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingeFrRfBn = await LpStaking.new({from: accounts[1]});
		const uintLROE4KK = BigInt("131")
		const addressHSPRxDm = accounts[3]
		const uint256J9CX36Z = await LpStakingeFrRfBn.rewardPerToken.call({from: accounts[1]});
		await LpStakingeFrRfBn.lpIncomeRateChanged.call({from: accounts[4]});
		const uint256M0JCOsH = await LpStakingeFrRfBn.withdraw.call(uintLROE4KK, {from: accounts[2]});
		await LpStakingeFrRfBn.lpIncomeRateChanged.call({from: accounts[4]});
		const addressPOZc7pS = await LpStakingeFrRfBn.updateReward.call(addressHSPRxDm, {from: accounts[1]});

		assert.equal(uint256J9CX36Z, BigInt("0"))
		await expect(LpStakingeFrRfBn.lpIncomeRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingGFmOwNS = await LpStaking.new({from: accounts[3]});
		const addresssyFurmv = accounts[3]
		const addressHueez7i = accounts[5]
		const addressiHuKU5 = accounts[1]
		const addressbKTC56 = accounts[2]
		const addresswVCXsC3 = accounts[4]
		const addressilwfTxw = await LpStakingGFmOwNS.initialize.call(addressbKTC56, addressiHuKU5, addressHueez7i, addresssyFurmv, {from: accounts[0]});
		const uint256C80dXqu = await LpStakingGFmOwNS.getUserAccumulatedWithdrawIncome.call(addresswVCXsC3, {from: accounts[5]});
		await LpStakingGFmOwNS.lpRewardRateChanged.call({from: accounts[1]});
		const uint256RybtuJP = await LpStakingGFmOwNS.incomePerToken.call({from: accounts[0]});

		assert.equal(uint256C80dXqu, BigInt("0"))
		await expect(LpStakingGFmOwNS.lpRewardRateChanged.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingCE8zSGO = await LpStaking.new({from: accounts[0]});
		const addressFp2nwFH = accounts[3]
		await LpStakingCE8zSGO.getReward.call({from: accounts[1]});
		const uint256Grczb79 = await LpStakingCE8zSGO.getCurIncomeRate.call({from: accounts[3]});
		const addressJaJcnnb = await LpStakingCE8zSGO.transferOwnership.call(addressFp2nwFH, {from: accounts[0]});
		await LpStakingCE8zSGO.getReward.call({from: accounts[1]});
		await LpStakingCE8zSGO.onlyOwner.call({from: accounts[0]});

		await expect(LpStakingCE8zSGO.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingoP2SYSg = await LpStaking.new({from: accounts[0]});
		const uint256LVHXIqP = await LpStakingoP2SYSg.getCurIncomeRate.call({from: accounts[1]});
		await LpStakingoP2SYSg.nonReentrant.call({from: accounts[2]});

		await expect(LpStakingoP2SYSg.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingeFrRfBn = await LpStaking.new({from: accounts[1]});
		const addressB5CXPK8 = accounts[0]
		const addressX4Q4deP = accounts[4]
		const uint256J9CX36Z = await LpStakingeFrRfBn.rewardPerToken.call({from: accounts[1]});
		await LpStakingeFrRfBn.exit.call({from: accounts[2]});
		const uint256Yi2CRxY = await LpStakingeFrRfBn.incomeEarned.call(addressB5CXPK8, {from: accounts[0]});
		await LpStakingeFrRfBn.lpIncomeRateChanged.call({from: accounts[4]});
		await LpStakingeFrRfBn.lpIncomeRateChanged.call({from: accounts[4]});
		const addressPOZc7pS = await LpStakingeFrRfBn.updateReward.call(addressX4Q4deP, {from: accounts[1]});

		assert.equal(uint256J9CX36Z, BigInt("0"))
		await expect(LpStakingeFrRfBn.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingmmn7cqf = await LpStaking.new({from: accounts[5]});
		const addresssPXLNLX = accounts[3]
		const uintgDgX0nl = BigInt("1411")
		const addresszvSS7G3 = accounts[2]
		const addressSP7K5FK = accounts[2]
		const addressrrepcrt = accounts[3]
		const addressAvvadmL = "0x0000000000000000000000000000000000000001"
		const addressSgqb9oC = await LpStakingmmn7cqf.updateReward.call(addresssPXLNLX, {from: accounts[1]});
		const uint256WwlPcl1 = await LpStakingmmn7cqf.withdraw.call(uintgDgX0nl, {from: "0x0000000000000000000000000000000000000001"});
		await LpStakingmmn7cqf.exit.call({from: accounts[3]});
		const uint256ev9J1VD = await LpStakingmmn7cqf.getCurIncomeRate.call({from: accounts[2]});
		const addressOUDW9ag = await LpStakingmmn7cqf.initialize.call(addressAvvadmL, addressrrepcrt, addressSP7K5FK, addresszvSS7G3, {from: accounts[5]});

		await expect(LpStakingmmn7cqf.updateReward.call(addresssPXLNLX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingtCK3CqE = await LpStaking.new({from: accounts[3]});
		const addressiaTMd8B = accounts[1]
		const addressygxegD7 = accounts[3]
		const uintXSUKtkn = BigInt("1860")
		const uint256GrtpDT9 = await LpStakingtCK3CqE.rewardEarned.call(addressiaTMd8B, {from: accounts[4]});
		const uint256mCaWywH = await LpStakingtCK3CqE.incomeEarned.call(addressygxegD7, {from: accounts[3]});
		const uint256Ioz4fjy = await LpStakingtCK3CqE.withdraw.call(uintXSUKtkn, {from: accounts[3]});
		await LpStakingtCK3CqE.getIncome.call({from: accounts[3]});

		assert.equal(uint256GrtpDT9, BigInt("0"))
		await expect(LpStakingtCK3CqE.incomeEarned.call(addressygxegD7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})