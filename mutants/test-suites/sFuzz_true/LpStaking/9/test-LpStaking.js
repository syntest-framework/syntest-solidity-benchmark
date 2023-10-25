const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingzd8QkWA = await LpStaking.new({from: accounts[3]});
		const uintszGoS9k = BigInt("1349")
//		await LpStakingzd8QkWA.getIncome.call({from: accounts[4]});
//		const uint256JAvcAjG = await LpStakingzd8QkWA.stake.call(uintszGoS9k, {from: accounts[5]});

		await expect(LpStakingzd8QkWA.getIncome.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking1zkDhY = await LpStaking.new({from: accounts[0]});
		const addresszGSiylj = accounts[3]
		const uintJs2eP8T = BigInt("401")
		const uint256ZzWFxNo = await LpStaking1zkDhY.getUserAccumulatedWithdrawIncome.call(addresszGSiylj, {from: accounts[2]});
		const uint256OhQ3kLi = await LpStaking1zkDhY.weiToSatoshi.call(uintJs2eP8T, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ILDb2h = await LpStaking1zkDhY.incomePerToken.call({from: accounts[1]});

		assert.equal(uint256OhQ3kLi, BigInt("0"))
		assert.equal(uint256ZzWFxNo, BigInt("0"))
		await expect(LpStaking1zkDhY.incomePerToken.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingLVhha8U = await LpStaking.new({from: accounts[0]});
		const uintfPNiipV = BigInt("1350")
		const addresso3TBAMd = accounts[0]
		const boolc3gNEhe = true
		const uintUtaofBX = BigInt("1726")
		const addresscO0cXQV = accounts[1]
//		const addressDgVOyZ = await LpStakingLVhha8U.inCaseTokensGetStuck.call(addresso3TBAMd, uintfPNiipV, {from: accounts[3]});
//		const uint256AdbiTWm = await LpStakingLVhha8U.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolyJdkL6X = await LpStakingLVhha8U.setEmergencyStop.call(boolc3gNEhe, {from: accounts[1]});
//		await LpStakingLVhha8U.lpIncomeRateChanged.call({from: accounts[2]});
//		const addressrQxNx3 = await LpStakingLVhha8U.inCaseTokensGetStuck.call(addresscO0cXQV, uintUtaofBX, {from: accounts[3]});

		await expect(LpStakingLVhha8U.inCaseTokensGetStuck.call(addresso3TBAMd, uintfPNiipV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingsiPO0x8 = await LpStaking.new({from: accounts[3]});
		const addresskPj6ebq = accounts[1]
		const uinteg2niUl = BigInt("440")
		const addressRoBpxoS = "0x0000000000000000000000000000000000000001"
		const addressEPktSN6 = accounts[2]
//		await LpStakingsiPO0x8.onlyOwner.call({from: accounts[0]});
//		const uint256AQEuET = await LpStakingsiPO0x8.rewardEarned.call(addresskPj6ebq, {from: accounts[2]});
//		await LpStakingsiPO0x8.nonReentrant.call({from: accounts[4]});
//		const addressGAhIgfL = await LpStakingsiPO0x8.inCaseTokensGetStuck.call(addressRoBpxoS, uinteg2niUl, {from: accounts[0]});
//		const addressSWGRggP = await LpStakingsiPO0x8.transferOwnership.call(addressEPktSN6, {from: accounts[3]});

		await expect(LpStakingsiPO0x8.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingLI2y8Bh = await LpStaking.new({from: accounts[1]});
		const addressSRGNDcH = accounts[3]
		const addressaOjwYG7 = accounts[3]
		const addressedzn7KG = accounts[4]
		const addresslcEXbb5 = accounts[5]
		const addressAC7Zlzc = "0x0000000000000000000000000000000000000001"
//		await LpStakingLI2y8Bh.lpRewardRateChanged.call({from: accounts[2]});
//		const addressrBHGYTA = await LpStakingLI2y8Bh.transferOwnership.call(addressSRGNDcH, {from: accounts[1]});
//		const addresszW36jw1 = await LpStakingLI2y8Bh.initialize.call(addressAC7Zlzc, addresslcEXbb5, addressedzn7KG, addressaOjwYG7, {from: accounts[4]});

		await expect(LpStakingLI2y8Bh.lpRewardRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingv7SWcks = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgfnKa6E = BigInt("1294")
		const addressnCm0UB6 = accounts[0]
		await LpStakingv7SWcks.lpRewardRateChanged.call({from: accounts[1]});
		const uint256eduEFex = await LpStakingv7SWcks.withdraw.call(uintgfnKa6E, {from: accounts[4]});
		await LpStakingv7SWcks.nonEmergencyStop.call({from: accounts[0]});
		await LpStakingv7SWcks.getIncome.call({from: accounts[4]});
		await LpStakingv7SWcks.lpRewardRateChanged.call({from: accounts[0]});
		const addressHGN6UeP = await LpStakingv7SWcks.updateIncome.call(addressnCm0UB6, {from: accounts[0]});
	});

	it('test for LpStaking', async () => {
		const LpStakingzd8QkWA = await LpStaking.new({from: accounts[3]});
		const addresstdaYaHf = accounts[2]
		const addressY9v7bp = accounts[1]
		const addressfeFx5X = accounts[5]
		const addressRCLs8FA = accounts[2]
		const uintZSEJdg6 = BigInt("1057")
		const addresswkeAeSo = await LpStakingzd8QkWA.initialize.call(addressRCLs8FA, addressfeFx5X, addressY9v7bp, addresstdaYaHf, {from: accounts[4]});
//		const uint256JAvcAjG = await LpStakingzd8QkWA.stake.call(uintZSEJdg6, {from: accounts[5]});

		await expect(LpStakingzd8QkWA.stake.call(uintZSEJdg6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingzd8QkWA = await LpStaking.new({from: accounts[3]});
		const uintmzmhcZJ = BigInt("1413")
//		await LpStakingzd8QkWA.exit.call({from: accounts[5]});
//		const uint256JAvcAjG = await LpStakingzd8QkWA.stake.call(uintmzmhcZJ, {from: accounts[5]});

		await expect(LpStakingzd8QkWA.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingLI2y8Bh = await LpStaking.new({from: accounts[1]});
		const addressCzjx57w = accounts[2]
		const uintiTcGPE = BigInt("172")
		const addressxhUkYz = accounts[4]
		const addressjtuynO7 = accounts[3]
		const addressIwJToVf = accounts[4]
		const addressK32kqNx = accounts[5]
		const addressFAs0hEv = "0x0000000000000000000000000000000000000001"
//		const uint256MgtvsD = await LpStakingLI2y8Bh.incomeEarned.call(addressCzjx57w, {from: accounts[3]});
//		await LpStakingLI2y8Bh.lpRewardRateChanged.call({from: accounts[2]});
//		const uint256lgC2tVX = await LpStakingLI2y8Bh.withdraw.call(uintiTcGPE, {from: accounts[2]});
//		const addressrBHGYTA = await LpStakingLI2y8Bh.transferOwnership.call(addressxhUkYz, {from: accounts[1]});
//		const addresszW36jw1 = await LpStakingLI2y8Bh.initialize.call(addressFAs0hEv, addressK32kqNx, addressIwJToVf, addressjtuynO7, {from: accounts[4]});

		await expect(LpStakingLI2y8Bh.incomeEarned.call(addressCzjx57w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinghtu83xv = await LpStaking.new({from: accounts[1]});
		const uintx8Mj6NM = BigInt("245")
//		const uint256MD4HTi = await LpStakinghtu83xv.getCurIncomeRate.call({from: accounts[5]});
//		const uint256XHiieak = await LpStakinghtu83xv.stake.call(uintx8Mj6NM, {from: accounts[3]});
//		await LpStakinghtu83xv.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakinghtu83xv.getCurIncomeRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinghtu83xv = await LpStaking.new({from: accounts[1]});
		const addresscIX54hu = accounts[2]
		const addressPhGG22k = accounts[2]
		const uintn3ljMl1 = BigInt("245")
		const uint256WpNxDlq = await LpStakinghtu83xv.rewardEarned.call(addresscIX54hu, {from: accounts[4]});
//		const addressofo0gIQ = await LpStakinghtu83xv.updateIncome.call(addressPhGG22k, {from: accounts[1]});
//		const uint256MD4HTi = await LpStakinghtu83xv.getCurIncomeRate.call({from: accounts[5]});
//		const uint256XHiieak = await LpStakinghtu83xv.stake.call(uintn3ljMl1, {from: accounts[3]});
//		await LpStakinghtu83xv.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256WpNxDlq, BigInt("0"))
		await expect(LpStakinghtu83xv.updateIncome.call(addressPhGG22k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingLI2y8Bh = await LpStaking.new({from: accounts[1]});
		const addressK8vvrBJ = accounts[3]
		const addressnkKMvlH = accounts[4]
		const addresshPX40MH = accounts[5]
		const addressovxPUE = "0x0000000000000000000000000000000000000000"
//		const addresszW36jw1 = await LpStakingLI2y8Bh.initialize.call(addressovxPUE, addresshPX40MH, addressnkKMvlH, addressK8vvrBJ, {from: accounts[4]});

		await expect(LpStakingLI2y8Bh.initialize.call(addressovxPUE, addresshPX40MH, addressnkKMvlH, addressK8vvrBJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})