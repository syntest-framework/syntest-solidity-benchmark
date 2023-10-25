const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakinglgqqUwT = await LpStaking.new({from: accounts[2]});
		const addressOdxj6Bl = accounts[0]
		const addressmRkkumW = accounts[1]
//		await LpStakinglgqqUwT.lpRewardRateChanged.call({from: accounts[4]});
//		const uint256CynVnBP = await LpStakinglgqqUwT.incomeEarned.call(addressOdxj6Bl, {from: accounts[3]});
//		const addressgH0C0Km = await LpStakinglgqqUwT.updateIncome.call(addressmRkkumW, {from: accounts[2]});

		await expect(LpStakinglgqqUwT.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDwuanM = await LpStaking.new({from: accounts[2]});
		const uintXQXxxdD = BigInt("771")
		const addressyuRPewJ = accounts[2]
		const boolirdvP6W = true
//		const uint256djIIzB = await LpStakingDwuanM.incomePerToken.call({from: accounts[3]});
//		const addressp2Y7ikh = await LpStakingDwuanM.inCaseTokensGetStuck.call(addressyuRPewJ, uintXQXxxdD, {from: "0x0000000000000000000000000000000000000001"});
//		const boolOIRgSUv = await LpStakingDwuanM.setEmergencyStop.call(boolirdvP6W, {from: accounts[4]});
//		await LpStakingDwuanM.getReward.call({from: accounts[0]});

		await expect(LpStakingDwuanM.incomePerToken.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingqwaoc0I = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const boolJcI2Awb = false
		const addressgdj7tzy = accounts[0]
		const uintajPTgPI = BigInt("1847")
		const addressW7ifxN8 = accounts[3]
		const uintVIj5sBm = BigInt("1257")
		const addressXJTz5J0 = "0x0000000000000000000000000000000000000001"
		const addressnO0WKu0 = accounts[0]
		const addressy7c7sB = accounts[4]
		const addressVB8wqgW = accounts[4]
		const boolJmrjg5d = await LpStakingqwaoc0I.setEmergencyStop.call(boolJcI2Awb, {from: accounts[3]});
		const uint256kCaFeo9 = await LpStakingqwaoc0I.getCurIncomeRate.call({from: accounts[0]});
		const addressunuxg8C = await LpStakingqwaoc0I.updateReward.call(addressgdj7tzy, {from: accounts[0]});
		const addressJ2yxcfL = await LpStakingqwaoc0I.inCaseTokensGetStuck.call(addressW7ifxN8, uintajPTgPI, {from: accounts[0]});
		const uint256REGQZue = await LpStakingqwaoc0I.withdraw.call(uintVIj5sBm, {from: accounts[5]});
		const addressexsFGE0 = await LpStakingqwaoc0I.initialize.call(addressVB8wqgW, addressy7c7sB, addressnO0WKu0, addressXJTz5J0, {from: accounts[0]});
	});

	it('test for LpStaking', async () => {
		const LpStakingnxkV5e5 = await LpStaking.new({from: accounts[4]});
		const addresswGcSNgL = accounts[2]
//		await LpStakingnxkV5e5.getReward.call({from: accounts[1]});
//		await LpStakingnxkV5e5.onlyOwner.call({from: accounts[2]});
//		const uint256Y4tLBLN = await LpStakingnxkV5e5.rewardEarned.call(addresswGcSNgL, {from: accounts[2]});

		await expect(LpStakingnxkV5e5.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingbY6Jjal = await LpStaking.new({from: accounts[5]});
		const boolGGdhlHO = true
		const addressQFAgeJc = accounts[3]
//		const boolynJzr1T = await LpStakingbY6Jjal.setEmergencyStop.call(boolGGdhlHO, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingbY6Jjal.getIncome.call({from: accounts[1]});
//		const addressVy5aobT = await LpStakingbY6Jjal.updateIncome.call(addressQFAgeJc, {from: accounts[1]});
//		await LpStakingbY6Jjal.nonEmergencyStop.call({from: accounts[3]});
//		await LpStakingbY6Jjal.lpRewardRateChanged.call({from: accounts[2]});

		await expect(LpStakingbY6Jjal.setEmergencyStop.call(boolGGdhlHO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingijw05Xb = await LpStaking.new({from: accounts[2]});
		const addressxZKVVZ2 = accounts[0]
		const uintZnmkG8K = BigInt("220")
		const uintPFcLXfF = BigInt("2022")
		const addressf1BZWF7 = accounts[4]
		const boolu4EqXoz = false
//		const uint256rahztbf = await LpStakingijw05Xb.incomeEarned.call(addressxZKVVZ2, {from: accounts[1]});
//		const uint256neBNXZn = await LpStakingijw05Xb.withdraw.call(uintZnmkG8K, {from: accounts[4]});
//		const uint256PSrPJM = await LpStakingijw05Xb.withdraw.call(uintPFcLXfF, {from: accounts[4]});
//		await LpStakingijw05Xb.exit.call({from: accounts[3]});
//		const uint256hYBJHWM = await LpStakingijw05Xb.getUserAccumulatedWithdrawIncome.call(addressf1BZWF7, {from: accounts[0]});
//		const boolSr1ZrQ = await LpStakingijw05Xb.setEmergencyStop.call(boolu4EqXoz, {from: accounts[4]});

		await expect(LpStakingijw05Xb.incomeEarned.call(addressxZKVVZ2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinguq61cmk = await LpStaking.new({from: accounts[3]});
		const addressj0ai8fZ = accounts[4]
		const address8wZDRf = "0x0000000000000000000000000000000000000001"
		const addressucLB0L3 = accounts[1]
//		const addressmowqnmP = await LpStakinguq61cmk.updateReward.call(addressj0ai8fZ, {from: accounts[0]});
//		const addressDqTGPEV = await LpStakinguq61cmk.updateIncome.call(address8wZDRf, {from: accounts[1]});
//		await LpStakinguq61cmk.nonReentrant.call({from: accounts[3]});
//		await LpStakinguq61cmk.getReward.call({from: accounts[0]});
//		const addressF42Fl9A = await LpStakinguq61cmk.updateReward.call(addressucLB0L3, {from: accounts[0]});

		await expect(LpStakinguq61cmk.updateReward.call(addressj0ai8fZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinglgqqUwT = await LpStaking.new({from: accounts[2]});
		const uintHGrKdvg = BigInt("1050")
		const addressCYao89s = accounts[1]
		const addressCxagXHv = accounts[0]
		const addressF7NnXZW = accounts[2]
		const addressxzgetSR = accounts[1]
//		await LpStakinglgqqUwT.exit.call({from: accounts[2]});
//		const addressCXEhX8 = await LpStakinglgqqUwT.inCaseTokensGetStuck.call(addressCYao89s, uintHGrKdvg, {from: accounts[1]});
//		const uint256CynVnBP = await LpStakinglgqqUwT.incomeEarned.call(addressCxagXHv, {from: accounts[3]});
//		await LpStakinglgqqUwT.getReward.call({from: accounts[5]});
//		await LpStakinglgqqUwT.lpRewardRateChanged.call({from: accounts[0]});
//		const uint256jRdAxzg = await LpStakinglgqqUwT.incomeEarned.call(addressF7NnXZW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressgH0C0Km = await LpStakinglgqqUwT.updateIncome.call(addressxzgetSR, {from: accounts[2]});

		await expect(LpStakinglgqqUwT.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingGTxaae = await LpStaking.new({from: accounts[3]});
		const addressUX03qX = accounts[4]
		const addresskkqWab = accounts[4]
		const address6AI5X4 = accounts[2]
//		const uint256G1CqNfF = await LpStakingGTxaae.getCurIncomeRate.call({from: accounts[1]});
//		const uint256UhTdW7 = await LpStakingGTxaae.incomeEarned.call(addressUX03qX, {from: accounts[4]});
//		const uint256AH1XScx = await LpStakingGTxaae.incomeEarned.call(addresskkqWab, {from: accounts[3]});
//		const uint256Kny8f7M = await LpStakingGTxaae.getCurIncomeRate.call({from: accounts[2]});
//		const uint256io6d5K0 = await LpStakingGTxaae.getUserAccumulatedWithdrawIncome.call(address6AI5X4, {from: accounts[0]});

		await expect(LpStakingGTxaae.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDtPItKO = await LpStaking.new({from: accounts[1]});
		const addressmtiwCgD = accounts[2]
		const addressI37Oe9 = accounts[0]
		const addressjx7sjkH = accounts[4]
		const address6ebnz5 = accounts[4]
		const addressDxGw2MN = accounts[0]
		const byteAc8eHcd = "0x191810141e120119020614091a0e08121a0413091d1f161511120d160d051e1f"
		const byteo37JXbi = "0x1f1a11071e060a0a17070c14100e081815181d14100a1d0917041517031b1f08"
		const uintXRQ4DXe = BigInt("42")
		const uintqko1ZHs = BigInt("1572")
		const uintpsvcq3x = BigInt("339")
		const addressOHP6bP = await LpStakingDtPItKO.initialize.call(address6ebnz5, addressjx7sjkH, addressI37Oe9, addressmtiwCgD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hI0iVRw = await LpStakingDtPItKO.rewardEarned.call(addressDxGw2MN, {from: accounts[4]});
//		const uint256Mj9Ly9j = await LpStakingDtPItKO.stakeWithPermit.call(uintpsvcq3x, uintqko1ZHs, uintXRQ4DXe, byteo37JXbi, byteAc8eHcd, {from: accounts[0]});

		assert.equal(uint256hI0iVRw, BigInt("0"))
		await expect(LpStakingDtPItKO.stakeWithPermit.call(uintpsvcq3x, uintqko1ZHs, uintXRQ4DXe, byteo37JXbi, byteAc8eHcd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingr9HKIPE = await LpStaking.new({from: accounts[2]});
		const addressfHXPHqH = accounts[1]
		const addressMNrCHje = accounts[0]
		const addressbYCkFFI = accounts[1]
		const addresszNy8L2t = accounts[5]
		const addressr53Cja9 = "0x0000000000000000000000000000000000000001"
		const uint256cMCX7sQ = await LpStakingr9HKIPE.getUserAccumulatedWithdrawIncome.call(addressfHXPHqH, {from: accounts[2]});
		const addressNXyqPqG = await LpStakingr9HKIPE.initialize.call(addressr53Cja9, addresszNy8L2t, addressbYCkFFI, addressMNrCHje, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingr9HKIPE.getReward.call({from: accounts[3]});
//		await LpStakingr9HKIPE.exit.call({from: accounts[3]});
//		await LpStakingr9HKIPE.lpRewardRateChanged.call({from: accounts[1]});

		assert.equal(uint256cMCX7sQ, BigInt("0"))
		await expect(LpStakingr9HKIPE.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})