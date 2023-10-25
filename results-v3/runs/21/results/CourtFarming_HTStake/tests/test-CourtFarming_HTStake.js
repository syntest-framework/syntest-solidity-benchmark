const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeQdXch4e = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintCyoEnzy = BigInt("484")
		const uintwI8tcCD = BigInt("1347")
		const uintUULZpGa = BigInt("674")
		const boolVYd2M4r = true
		const uintBu5xhuH = BigInt("781")
		const uint256dVjoYEC = await CourtFarming_HTStakeQdXch4e.stake.call(uintCyoEnzy, {from: accounts[2]});
		const boolZO5xo2M = await CourtFarming_HTStakeQdXch4e.stakeIncvRewards.call(uintwI8tcCD, {from: accounts[2]});
		const uint256bewOvtV = await CourtFarming_HTStakeQdXch4e.expectedRewardsToday.call(uintUULZpGa, {from: accounts[2]});
		const uint256SrUeBr = await CourtFarming_HTStakeQdXch4e.unstake.call(uintBu5xhuH, boolVYd2M4r, {from: accounts[5]});

		await expect(CourtFarming_HTStakeQdXch4e.stake.call(uintCyoEnzy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTClO38I = await CourtFarming_HTStake.new({from: accounts[4]});
		const addresss4SIKs7 = accounts[4]
		const addressk3tgDgN = accounts[0]
		const addressrf1omn = await CourtFarming_HTStakeTClO38I.updateReward.call(addresss4SIKs7, {from: accounts[0]});
		const uint256jH26ASV = await CourtFarming_HTStakeTClO38I.balanceOf.call(addressk3tgDgN, {from: accounts[3]});

		assert.equal(uint256jH26ASV, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeQkLbn6c = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressxtAst9R = accounts[5]
		const uintZoqEDuR = BigInt("1999")
		const addressHAfL2X3 = accounts[3]
		const uintld1ygbC = BigInt("1005")
		const uint256sqUogpy = await CourtFarming_HTStakeQkLbn6c.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const addressJs79Bs1 = await CourtFarming_HTStakeQkLbn6c.setCourtStake.call(addressxtAst9R, {from: accounts[1]});
		const boolKaPBcBR = await CourtFarming_HTStakeQkLbn6c.stakeIncvRewards.call(uintZoqEDuR, {from: accounts[0]});
		const addressHkzy4V = await CourtFarming_HTStakeQkLbn6c.setCourtStake.call(addressHAfL2X3, {from: accounts[1]});
		const uint256BcRHbcC = await CourtFarming_HTStakeQkLbn6c.expectedRewardsToday.call(uintld1ygbC, {from: accounts[5]});
		const uint256kO9tfPd = await CourtFarming_HTStakeQkLbn6c.lastUpdateBlock.call({from: accounts[1]});

		await expect(CourtFarming_HTStakeQkLbn6c.setCourtStake.call(addressxtAst9R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBQejbl4 = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolGD7FJDM = false
		const uintTOoGqD = BigInt("427")
		const addresshr1MYhV = accounts[0]
		const uint256ZunyfvG = await CourtFarming_HTStakeBQejbl4.unstake.call(uintTOoGqD, boolGD7FJDM, {from: accounts[4]});
		const uint256cjz3lPg = await CourtFarming_HTStakeBQejbl4.incvRewardInfo.call({from: accounts[4]});
		const addressppbMb7y = await CourtFarming_HTStakeBQejbl4.setCourtStake.call(addresshr1MYhV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeBQejbl4.unstake.call(uintTOoGqD, boolGD7FJDM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyf0AsQO = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintnvuNkLe = BigInt("43")
		const boolUElAiXR = await CourtFarming_HTStakeyf0AsQO.stakeIncvRewards.call(uintnvuNkLe, {from: accounts[3]});
		const uint256wwI9ahT = await CourtFarming_HTStakeyf0AsQO.incvRewardClaim.call({from: accounts[3]});

		assert.equal(boolUElAiXR, false)
		assert.equal(uint256wwI9ahT, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakevVkslf3 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressaJ5QziM = accounts[4]
		const addressLtDBri7 = accounts[0]
		const uintpWl8Z8Z = BigInt("1081")
		const uint256Cq1h7VV = await CourtFarming_HTStakevVkslf3.rewards.call(addressaJ5QziM, {from: accounts[1]});
		const uint256iXIdTZp = await CourtFarming_HTStakevVkslf3.rewards.call(addressLtDBri7, {from: accounts[1]});
		const uint256VNNmUE = await CourtFarming_HTStakevVkslf3.stake.call(uintpWl8Z8Z, {from: accounts[5]});
		const uint256ucTrxHa = await CourtFarming_HTStakevVkslf3.incvRewardClaim.call({from: accounts[0]});

		await expect(CourtFarming_HTStakevVkslf3.stake.call(uintpWl8Z8Z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyf0AsQO = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressuXj06WR = accounts[0]
		const uintLKutAft = BigInt("43")
		const addresseVtld5N = await CourtFarming_HTStakeyf0AsQO.getBeneficiaryInfo.call(addressuXj06WR, {from: accounts[5]});
		const boolUElAiXR = await CourtFarming_HTStakeyf0AsQO.stakeIncvRewards.call(uintLKutAft, {from: accounts[3]});
		const uint256wwI9ahT = await CourtFarming_HTStakeyf0AsQO.incvRewardClaim.call({from: accounts[3]});
		const uint256ACX1Y5n = await CourtFarming_HTStakeyf0AsQO.incvRewardClaim.call({from: accounts[3]});

		assert.equal(boolUElAiXR, false)
		assert.equal(uint256ACX1Y5n, BigInt("0"))
		assert.equal(uint256wwI9ahT, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeEQR8wIa = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressUZUr2mE = accounts[2]
		const uint256vHhYu7e = await CourtFarming_HTStakeEQR8wIa.blockNumber.call({from: accounts[0]});
		const uint256nYFqUyN = await CourtFarming_HTStakeEQR8wIa.lastUpdateBlock.call({from: accounts[2]});
		const address5tI7SE = await CourtFarming_HTStakeEQR8wIa.setCourtStake.call(addressUZUr2mE, {from: accounts[4]});

		assert.equal(uint256nYFqUyN, BigInt("1849"))
		assert.equal(uint256vHhYu7e, BigInt("1849"))
		await expect(CourtFarming_HTStakeEQR8wIa.setCourtStake.call(addressUZUr2mE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakevF2QZrA = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressMfRNIct = accounts[3]
		const uintRx7NMOq = BigInt("1025")
		const uintaTuXWf = BigInt("1181")
		const uinta4s0Z9 = BigInt("332")
		const uintovQb0Nz = BigInt("1406")
		const addressbp1hWrL = await CourtFarming_HTStakevF2QZrA.updateReward.call(addressMfRNIct, {from: accounts[1]});
		await CourtFarming_HTStakevF2QZrA.changeStakeParameters.call(uinta4s0Z9, uintaTuXWf, uintRx7NMOq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TtsvgSV = await CourtFarming_HTStakevF2QZrA.stake.call(uintovQb0Nz, {from: accounts[1]});
		const uint256FY78qqR = await CourtFarming_HTStakevF2QZrA.totalStaked.call({from: accounts[4]});

		await expect(CourtFarming_HTStakevF2QZrA.changeStakeParameters.call(uinta4s0Z9, uintaTuXWf, uintRx7NMOq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyf0AsQO = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressXtPOtNr = accounts[0]
		const uintH0NkESH = BigInt("1666")
		const addressOH8PqYk = accounts[5]
		const addresseVtld5N = await CourtFarming_HTStakeyf0AsQO.getBeneficiaryInfo.call(addressXtPOtNr, {from: accounts[5]});
		const boolUElAiXR = await CourtFarming_HTStakeyf0AsQO.stakeIncvRewards.call(uintH0NkESH, {from: accounts[3]});
		const uint256zq0vHBH = await CourtFarming_HTStakeyf0AsQO.totalStaked.call({from: accounts[1]});
		const addressLNWEQWF = await CourtFarming_HTStakeyf0AsQO.setCourtStake.call(addressOH8PqYk, {from: accounts[4]});
		const uint256wwI9ahT = await CourtFarming_HTStakeyf0AsQO.incvRewardClaim.call({from: accounts[3]});
		const uint256ACX1Y5n = await CourtFarming_HTStakeyf0AsQO.incvRewardClaim.call({from: accounts[3]});

		assert.equal(boolUElAiXR, false)
		assert.equal(uint256zq0vHBH, BigInt("0"))
		await expect(CourtFarming_HTStakeyf0AsQO.setCourtStake.call(addressOH8PqYk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGreYZ4L = await CourtFarming_HTStake.new({from: accounts[5]});
		const addresswoSgcb = accounts[1]
		const uintoupBzUA = BigInt("1384")
		const uintvkK0OWn = BigInt("1051")
		const uintrKOVbk5 = BigInt("1262")
		const addresscA3OmYy = accounts[4]
		const addressw2F4x5f = await CourtFarming_HTStakeGreYZ4L.getBeneficiaryInfo.call(addresswoSgcb, {from: accounts[4]});
		const uint256K9xGWi7 = await CourtFarming_HTStakeGreYZ4L.getCurrentTime.call({from: accounts[0]});
		const uint256TrqliYi = await CourtFarming_HTStakeGreYZ4L.incvRewardClaim.call({from: accounts[3]});
		const uint256sFvtJ1F = await CourtFarming_HTStakeGreYZ4L._stakeParametrsCalculation.call(uintrKOVbk5, uintvkK0OWn, uintoupBzUA, {from: accounts[5]});
		const uint256MqwvlL = await CourtFarming_HTStakeGreYZ4L.totalStaked.call({from: accounts[4]});
		const uint2563HYrja = await CourtFarming_HTStakeGreYZ4L.balanceOf.call(addresscA3OmYy, {from: accounts[0]});

		assert.equal(uint256K9xGWi7, BigInt("1630201540"))
		assert.equal(uint256TrqliYi, BigInt("0"))
		await expect(CourtFarming_HTStakeGreYZ4L._stakeParametrsCalculation.call(uintrKOVbk5, uintvkK0OWn, uintoupBzUA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeJoqk6z5 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressRwoVdap = accounts[1]
		const addressQexiz3B = accounts[3]
		const addressxKar1p6 = accounts[1]
		const uinteFjMGxC = BigInt("768")
		const uinthQVTW3G = BigInt("1533")
		const uint256iiOOp1A = await CourtFarming_HTStakeJoqk6z5.rewards.call(addressRwoVdap, {from: accounts[0]});
		const uint256jzjVcTM = await CourtFarming_HTStakeJoqk6z5.incvRewardClaim.call({from: accounts[5]});
		const addressOocjnw4 = await CourtFarming_HTStakeJoqk6z5.setCourtStake.call(addressQexiz3B, {from: accounts[3]});
		const uint256vY9dMzs = await CourtFarming_HTStakeJoqk6z5.rewards.call(addressxKar1p6, {from: accounts[1]});
		const uint256eX0JTME = await CourtFarming_HTStakeJoqk6z5.stake.call(uinteFjMGxC, {from: accounts[4]});
		const boolx7PV9Wc = await CourtFarming_HTStakeJoqk6z5.stakeIncvRewards.call(uinthQVTW3G, {from: accounts[4]});

		assert.equal(uint256jzjVcTM, BigInt("0"))
		await expect(CourtFarming_HTStakeJoqk6z5.setCourtStake.call(addressQexiz3B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBQejbl4 = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintjEPanB0 = BigInt("1617")
		const addressJ7vyIZ = accounts[1]
		const uint256cjz3lPg = await CourtFarming_HTStakeBQejbl4.incvRewardInfo.call({from: accounts[4]});
		const uint256Zkj3UwB = await CourtFarming_HTStakeBQejbl4.expectedRewardsToday.call(uintjEPanB0, {from: accounts[4]});
		const addressppbMb7y = await CourtFarming_HTStakeBQejbl4.setCourtStake.call(addressJ7vyIZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeBQejbl4.setCourtStake.call(addressJ7vyIZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyf0AsQO = await CourtFarming_HTStake.new({from: accounts[1]});
		const uint5vyMEE = BigInt("1689")
		const uintUPWgdXH = BigInt("169")
		const uintMcGhgE = BigInt("852")
		const addressS8UmGdA = accounts[3]
		await CourtFarming_HTStakeyf0AsQO.changeStakeParameters.call(uintMcGhgE, uintUPWgdXH, uint5vyMEE, {from: accounts[1]});
		const addresszWFJ9i = await CourtFarming_HTStakeyf0AsQO.updateReward.call(addressS8UmGdA, {from: accounts[4]});

		await expect(CourtFarming_HTStakeyf0AsQO.changeStakeParameters.call(uintMcGhgE, uintUPWgdXH, uint5vyMEE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMRsDMH = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfixQl8 = accounts[5]
		const uintydrfGGu = BigInt("375")
		const uintofnjBuV = BigInt("1")
		const uintR1DE2UR = BigInt("175")
		const uintZ2WJBob = BigInt("1506")
		const uint256mM9FVas = await CourtFarming_HTStakeMRsDMH.balanceOf.call(addressfixQl8, {from: accounts[3]});
		const uint256Eo1H5q = await CourtFarming_HTStakeMRsDMH.expectedRewardsToday.call(uintydrfGGu, {from: accounts[4]});
		const uint256SwSLVO2 = await CourtFarming_HTStakeMRsDMH._stakeParametrsCalculation.call(uintZ2WJBob, uintR1DE2UR, uintofnjBuV, {from: accounts[5]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyf0AsQO = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintpYxoIOI = BigInt("0")
		const uintPX9Qjpu = BigInt("841")
		const addressr76j2PQ = accounts[3]
		const boolUElAiXR = await CourtFarming_HTStakeyf0AsQO.stakeIncvRewards.call(uintpYxoIOI, {from: accounts[3]});
		const boolwl9Hw3 = await CourtFarming_HTStakeyf0AsQO.stakeIncvRewards.call(uintPX9Qjpu, {from: accounts[2]});
		const addresszWFJ9i = await CourtFarming_HTStakeyf0AsQO.updateReward.call(addressr76j2PQ, {from: accounts[4]});

		assert.equal(boolUElAiXR, false)
		assert.equal(boolwl9Hw3, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBQejbl4 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressA4ptzj4 = accounts[0]
		const boolIesj0rN = false
		const uintsaaDzEg = BigInt("0")
		const boolqV99G9j = false
		const uintL2SdLH = BigInt("2003")
		const uint256E8y2Ygs = await CourtFarming_HTStakeBQejbl4.rewards.call(addressA4ptzj4, {from: accounts[4]});
		const uint256cjz3lPg = await CourtFarming_HTStakeBQejbl4.incvRewardInfo.call({from: accounts[4]});
		const uint256p6zSMGx = await CourtFarming_HTStakeBQejbl4.unstake.call(uintsaaDzEg, boolIesj0rN, {from: accounts[1]});
		const uint256ICCi7Y6 = await CourtFarming_HTStakeBQejbl4.unstake.call(uintL2SdLH, boolqV99G9j, {from: accounts[4]});

		await expect(CourtFarming_HTStakeBQejbl4.unstake.call(uintL2SdLH, boolqV99G9j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyf0AsQO = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintJ2T0ScC = BigInt("1439")
		const uinttTuje5h = BigInt("0")
		const addressDCtQBS = accounts[2]
		const uint256lK3w1WF = await CourtFarming_HTStakeyf0AsQO.totalStaked.call({from: accounts[2]});
		const uint256YxrhvUK = await CourtFarming_HTStakeyf0AsQO.expectedRewardsToday.call(uintJ2T0ScC, {from: accounts[1]});
		const uint256CaRkqsP = await CourtFarming_HTStakeyf0AsQO.stake.call(uinttTuje5h, {from: accounts[3]});
		const uint256iaU9MPg = await CourtFarming_HTStakeyf0AsQO.rewards.call(addressDCtQBS, {from: accounts[0]});

		assert.equal(uint256lK3w1WF, BigInt("0"))
	});
})