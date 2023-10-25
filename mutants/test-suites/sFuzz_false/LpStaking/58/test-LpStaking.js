const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingk5ikQQk = await LpStaking.new({from: accounts[4]});
		const addressSXNy7X3 = accounts[0]
		const uintfSJ2lMc = BigInt("326")
		const addressFxcGGnG = accounts[5]
		const addressHkcV0LY = accounts[2]
		const addressmE2QHbu = accounts[1]
		const addressbjaHCB = accounts[5]
//		const addressLbVaBR = await LpStakingk5ikQQk.updateReward.call(addressSXNy7X3, {from: accounts[0]});
//		const uint256A0jEXlL = await LpStakingk5ikQQk.withdraw.call(uintfSJ2lMc, {from: accounts[2]});
//		const uint256DC3TaW8 = await LpStakingk5ikQQk.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressFfq9k9i = await LpStakingk5ikQQk.initialize.call(addressbjaHCB, addressmE2QHbu, addressHkcV0LY, addressFxcGGnG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingk5ikQQk.updateReward.call(addressSXNy7X3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingFBf9Xm8 = await LpStaking.new({from: accounts[4]});
		const addressYLOhhfs = accounts[5]
		const addressve6uS8i = accounts[2]
		const uintIDdwqxX = BigInt("1261")
		const addressOly0ti = accounts[1]
		const uint256RJidIoi = await LpStakingFBf9Xm8.rewardEarned.call(addressYLOhhfs, {from: accounts[3]});
//		const addresslqePdAP = await LpStakingFBf9Xm8.updateIncome.call(addressve6uS8i, {from: accounts[0]});
//		const addressbIR8TmY = await LpStakingFBf9Xm8.inCaseTokensGetStuck.call(addressOly0ti, uintIDdwqxX, {from: accounts[3]});
//		const uint256Tsg3RU8 = await LpStakingFBf9Xm8.getCurIncomeRate.call({from: accounts[2]});

		assert.equal(uint256RJidIoi, BigInt("0"))
		await expect(LpStakingFBf9Xm8.updateIncome.call(addressve6uS8i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggryPXlQ = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressS0JQ9yj = accounts[5]
		const uintZ07KQkP = BigInt("1498")
		const uintmrL5Qzq = BigInt("357")
		const uint256OwYn59d = await LpStakinggryPXlQ.incomeEarned.call(addressS0JQ9yj, {from: accounts[5]});
		const uint256kJEPipp = await LpStakinggryPXlQ.withdraw.call(uintZ07KQkP, {from: accounts[0]});
		const uint256xPvsl8k = await LpStakinggryPXlQ.withdraw.call(uintmrL5Qzq, {from: accounts[3]});
		const uint256EVJ5ged = await LpStakinggryPXlQ.incomePerToken.call({from: accounts[0]});
	});

	it('test for LpStaking', async () => {
		const LpStakingCKVCOb4 = await LpStaking.new({from: accounts[0]});
		const uintQkg74ym = BigInt("1525")
		const addressxitWB0G = "0x0000000000000000000000000000000000000001"
//		const uint256airbOT = await LpStakingCKVCOb4.incomePerToken.call({from: accounts[3]});
//		const uint256SjqurLt = await LpStakingCKVCOb4.incomePerToken.call({from: accounts[1]});
//		const uint256IAJaBc1 = await LpStakingCKVCOb4.weiToSatoshi.call(uintQkg74ym, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JADOvz = await LpStakingCKVCOb4.rewardEarned.call(addressxitWB0G, {from: accounts[2]});

		await expect(LpStakingCKVCOb4.incomePerToken.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingTzx65f = await LpStaking.new({from: accounts[3]});
		const uintPAvupy = BigInt("1831")
		const addressEOC5E0W = accounts[4]
		const addressSLTSVXK = accounts[5]
//		await LpStakingTzx65f.exit.call({from: accounts[1]});
//		const addressItjje7p = await LpStakingTzx65f.inCaseTokensGetStuck.call(addressEOC5E0W, uintPAvupy, {from: "0x0000000000000000000000000000000000000001"});
//		const addressGSoAusS = await LpStakingTzx65f.updateIncome.call(addressSLTSVXK, {from: accounts[4]});

		await expect(LpStakingTzx65f.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingyZsS3Yy = await LpStaking.new({from: accounts[4]});
		const addressOSJqdof = accounts[3]
		const addressAz7MkOJ = accounts[4]
		const uint256liCOzAP = await LpStakingyZsS3Yy.getUserAccumulatedWithdrawIncome.call(addressOSJqdof, {from: accounts[5]});
//		const addressRQS74CZ = await LpStakingyZsS3Yy.updateReward.call(addressAz7MkOJ, {from: accounts[5]});
//		await LpStakingyZsS3Yy.nonEmergencyStop.call({from: accounts[3]});

		assert.equal(uint256liCOzAP, BigInt("0"))
		await expect(LpStakingyZsS3Yy.updateReward.call(addressAz7MkOJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingFBf9Xm8 = await LpStaking.new({from: accounts[4]});
		const addressGJeOngH = accounts[5]
		const uintFquGmf9 = BigInt("1261")
		const addressNQhwpgv = accounts[1]
		const uintD0KUiri = BigInt("2")
		const uintshjd9EL = BigInt("1815")
		const uint256RJidIoi = await LpStakingFBf9Xm8.rewardEarned.call(addressGJeOngH, {from: accounts[3]});
//		const addressbIR8TmY = await LpStakingFBf9Xm8.inCaseTokensGetStuck.call(addressNQhwpgv, uintFquGmf9, {from: accounts[3]});
//		const uint256Tsg3RU8 = await LpStakingFBf9Xm8.getCurIncomeRate.call({from: accounts[2]});
//		const uint256pjVhOH8 = await LpStakingFBf9Xm8.weiToSatoshi.call(uintD0KUiri, {from: accounts[4]});
//		const uint256ugZEev0 = await LpStakingFBf9Xm8.withdraw.call(uintshjd9EL, {from: accounts[2]});

		assert.equal(uint256RJidIoi, BigInt("0"))
		await expect(LpStakingFBf9Xm8.inCaseTokensGetStuck.call(addressNQhwpgv, uintFquGmf9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingFBf9Xm8 = await LpStaking.new({from: accounts[4]});
		const addresscf5lsWB = accounts[6]
		const addressNnQ4CVe = accounts[3]
		const addressmTLfwNF = accounts[1]
		const addressAf6m5rQ = accounts[0]
		const addressZTZkCOC = accounts[1]
		const addressJQMsbhH = accounts[2]
		const uintafNDMWo = BigInt("1261")
		const addressbx3cvEF = accounts[1]
		const uint256RJidIoi = await LpStakingFBf9Xm8.rewardEarned.call(addresscf5lsWB, {from: accounts[3]});
		const addressqKObgia = await LpStakingFBf9Xm8.initialize.call(addressZTZkCOC, addressAf6m5rQ, addressmTLfwNF, addressNnQ4CVe, {from: accounts[2]});
//		const addresslqePdAP = await LpStakingFBf9Xm8.updateIncome.call(addressJQMsbhH, {from: accounts[0]});
//		const addressbIR8TmY = await LpStakingFBf9Xm8.inCaseTokensGetStuck.call(addressbx3cvEF, uintafNDMWo, {from: accounts[3]});
//		const uint256Tsg3RU8 = await LpStakingFBf9Xm8.getCurIncomeRate.call({from: accounts[2]});

		assert.equal(uint256RJidIoi, BigInt("0"))
		await expect(LpStakingFBf9Xm8.updateIncome.call(addressJQMsbhH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingFBf9Xm8 = await LpStaking.new({from: accounts[4]});
		const addressY5zTN8t = accounts[6]
		const uint256RJidIoi = await LpStakingFBf9Xm8.rewardEarned.call(addressY5zTN8t, {from: accounts[3]});
//		const uint256Tsg3RU8 = await LpStakingFBf9Xm8.getCurIncomeRate.call({from: accounts[2]});

		assert.equal(uint256RJidIoi, BigInt("0"))
		await expect(LpStakingFBf9Xm8.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingTzx65f = await LpStaking.new({from: accounts[3]});
		const addressh6hymR = accounts[0]
//		await LpStakingTzx65f.lpRewardRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256udHIgd2 = await LpStakingTzx65f.rewardEarned.call(addressh6hymR, {from: accounts[2]});
//		await LpStakingTzx65f.getIncome.call({from: accounts[0]});
//		await LpStakingTzx65f.exit.call({from: accounts[1]});

		await expect(LpStakingTzx65f.lpRewardRateChanged.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingFBf9Xm8 = await LpStaking.new({from: accounts[4]});
		const addressKx7T0AP = accounts[6]
		const addressWXFDHAM = accounts[3]
		const boolXs8iQa = false
		const uint256RJidIoi = await LpStakingFBf9Xm8.rewardEarned.call(addressKx7T0AP, {from: accounts[3]});
//		const uint256EwRWqSS = await LpStakingFBf9Xm8.incomeEarned.call(addressWXFDHAM, {from: accounts[5]});
//		const boolvRw6c5R = await LpStakingFBf9Xm8.setEmergencyStop.call(boolXs8iQa, {from: accounts[5]});
//		const uint256Tsg3RU8 = await LpStakingFBf9Xm8.getCurIncomeRate.call({from: accounts[2]});

		assert.equal(uint256RJidIoi, BigInt("0"))
		await expect(LpStakingFBf9Xm8.incomeEarned.call(addressWXFDHAM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})