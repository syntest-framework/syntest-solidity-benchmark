const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingqR8M1KS = await LpStaking.new({from: accounts[4]});
		const addresstaD1NIE = accounts[3]
//		await LpStakingqR8M1KS.lpRewardRateChanged.call({from: accounts[4]});
//		const uint256YolivC = await LpStakingqR8M1KS.getCurIncomeRate.call({from: accounts[0]});
//		const uint256FH1VblI = await LpStakingqR8M1KS.getCurIncomeRate.call({from: accounts[2]});
//		const uint256sQdTyoX = await LpStakingqR8M1KS.incomePerToken.call({from: accounts[3]});
//		const addressJkSYKQY = await LpStakingqR8M1KS.updateIncome.call(addresstaD1NIE, {from: accounts[3]});
//		const uint256wUq9khP = await LpStakingqR8M1KS.getCurIncomeRate.call({from: accounts[3]});

		await expect(LpStakingqR8M1KS.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggrut93 = await LpStaking.new({from: accounts[0]});
		const addresspP5rtha = accounts[3]
		const uint256e7abmL = await LpStakinggrut93.rewardEarned.call(addresspP5rtha, {from: accounts[3]});
//		await LpStakinggrut93.getIncome.call({from: accounts[3]});
//		const uint256y8cFYfl = await LpStakinggrut93.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256e7abmL, BigInt("0"))
		await expect(LpStakinggrut93.getIncome.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNL7ol3 = await LpStaking.new({from: accounts[0]});
		const addressqRriwlJ = accounts[3]
		const addressWpNfc1R = accounts[2]
		const byteM36nCD = "0x130204200903201d1a0c0d091018181b160d001f090f1c17111e1806050b1e17"
		const byteSQtlvgu = "0x1007150e100a18110a1508080b190d0a1e13080b0b15040416070c1a0100091a"
		const uintvA02Att = BigInt("107")
		const uintO0xTMHB = BigInt("182")
		const uintAOWdkqp = BigInt("1026")
//		const uint256nISRBau = await LpStakingNL7ol3.getCurIncomeRate.call({from: accounts[2]});
//		await LpStakingNL7ol3.lpRewardRateChanged.call({from: accounts[5]});
//		const uint256cdALvB7 = await LpStakingNL7ol3.getUserAccumulatedWithdrawIncome.call(addressqRriwlJ, {from: accounts[3]});
//		const addressLT8HLkH = await LpStakingNL7ol3.transferOwnership.call(addressWpNfc1R, {from: accounts[4]});
//		const uint256DBIju8L = await LpStakingNL7ol3.stakeWithPermit.call(uintAOWdkqp, uintO0xTMHB, uintvA02Att, byteSQtlvgu, byteM36nCD, {from: accounts[0]});
//		await LpStakingNL7ol3.lpRewardRateChanged.call({from: accounts[4]});

		await expect(LpStakingNL7ol3.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingTs5OF5 = await LpStaking.new({from: accounts[2]});
		const addresstR71bux = accounts[1]
		const addressVWTDOIr = accounts[4]
		const boolus8q97Y = true
//		const addresssUNLvi9 = await LpStakingTs5OF5.transferOwnership.call(addresstR71bux, {from: accounts[4]});
//		await LpStakingTs5OF5.lpIncomeRateChanged.call({from: accounts[4]});
//		const addressyLMjX5K = await LpStakingTs5OF5.transferOwnership.call(addressVWTDOIr, {from: accounts[5]});
//		const boolivAl53 = await LpStakingTs5OF5.setEmergencyStop.call(boolus8q97Y, {from: accounts[1]});

		await expect(LpStakingTs5OF5.transferOwnership.call(addresstR71bux, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingSZRcTbz = await LpStaking.new({from: accounts[4]});
		const addressI5z3pwn = accounts[0]
//		const uint256u1LdvqF = await LpStakingSZRcTbz.incomePerToken.call({from: accounts[1]});
//		const addressnQNjTI = await LpStakingSZRcTbz.updateIncome.call(addressI5z3pwn, {from: accounts[4]});
//		await LpStakingSZRcTbz.nonEmergencyStop.call({from: accounts[1]});

		await expect(LpStakingSZRcTbz.incomePerToken.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggrut93 = await LpStaking.new({from: accounts[0]});
		const address3H4kQd = accounts[4]
		const addressQtdNAMP = accounts[3]
		const uintbO5F8vc = BigInt("950")
		const uint256baHnosK = await LpStakinggrut93.getUserAccumulatedWithdrawIncome.call(address3H4kQd, {from: accounts[0]});
		const uint256e7abmL = await LpStakinggrut93.rewardEarned.call(addressQtdNAMP, {from: accounts[3]});
//		await LpStakinggrut93.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256IBH222n = await LpStakinggrut93.rewardPerToken.call({from: accounts[5]});
//		const uint256jDH6H1 = await LpStakinggrut93.withdraw.call(uintbO5F8vc, {from: accounts[4]});

		assert.equal(uint256baHnosK, BigInt("0"))
		assert.equal(uint256e7abmL, BigInt("0"))
		await expect(LpStakinggrut93.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingjHC6HIP = await LpStaking.new({from: accounts[0]});
		const addressyxzWmL = accounts[2]
		const addressm8BNtlP = accounts[0]
		const addressUNe49X5 = accounts[4]
		const addressyHGZiU = accounts[0]
		const addressVuTN35d = accounts[0]
		const addressAtrN0D = accounts[3]
		const addressv9M246g = accounts[2]
		const addressjOwICEn = accounts[2]
		const addressPNUcWbS = accounts[1]
//		const uint256vSiLob3 = await LpStakingjHC6HIP.incomeEarned.call(addressyxzWmL, {from: accounts[3]});
//		const addresswwb4mjO = await LpStakingjHC6HIP.initialize.call(addressVuTN35d, addressyHGZiU, addressUNe49X5, addressm8BNtlP, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingjHC6HIP.getReward.call({from: accounts[5]});
//		const addressHaSMkiz = await LpStakingjHC6HIP.initialize.call(addressPNUcWbS, addressjOwICEn, addressv9M246g, addressAtrN0D, {from: accounts[4]});

		await expect(LpStakingjHC6HIP.incomeEarned.call(addressyxzWmL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggrut93 = await LpStaking.new({from: accounts[0]});
		const addressbTwPqRF = accounts[3]
		const uint256e7abmL = await LpStakinggrut93.rewardEarned.call(addressbTwPqRF, {from: accounts[3]});
//		await LpStakinggrut93.nonEmergencyStop.call({from: accounts[5]});

		assert.equal(uint256e7abmL, BigInt("0"))
		await expect(LpStakinggrut93.nonEmergencyStop.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggrut93 = await LpStaking.new({from: accounts[0]});
		const addressTfYyZ2a = accounts[0]
		const addresshUfyqg5 = accounts[2]
		const addressi726zM9 = accounts[4]
		const addresspzb0Nob = accounts[1]
		const addressk2Gc5Jx = accounts[4]
		const addressj3Ai5Sq = accounts[3]
		const addressE6lSKxg = await LpStakinggrut93.initialize.call(addresspzb0Nob, addressi726zM9, addresshUfyqg5, addressTfYyZ2a, {from: accounts[0]});
		const uint256e7abmL = await LpStakinggrut93.rewardEarned.call(addressk2Gc5Jx, {from: accounts[3]});
		const uint256xFpwWGj = await LpStakinggrut93.rewardEarned.call(addressj3Ai5Sq, {from: accounts[5]});
//		await LpStakinggrut93.getIncome.call({from: accounts[3]});

		assert.equal(uint256e7abmL, BigInt("0"))
		assert.equal(uint256xFpwWGj, BigInt("0"))
		await expect(LpStakinggrut93.getIncome.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingmkyUSIS = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPtJmB6o = accounts[4]
		const uintjw97zEQ = BigInt("1534")
		const addressDKF7qCA = await LpStakingmkyUSIS.updateReward.call(addressPtJmB6o, {from: accounts[4]});
		const uint256RB21AvU = await LpStakingmkyUSIS.withdraw.call(uintjw97zEQ, {from: accounts[4]});
		const uint256eRVByN8 = await LpStakingmkyUSIS.rewardPerToken.call({from: accounts[4]});
		await LpStakingmkyUSIS.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingmkyUSIS.exit.call({from: accounts[3]});
	});

	it('test for LpStaking', async () => {
		const LpStakingWoeicKw = await LpStaking.new({from: accounts[4]});
		const addressCo1DMRG = accounts[4]
		const byteTt263Zj = "0x02081e18040b07171313021f1e020b0f16001f1b072013080c08130e151c0f09"
		const byteVROdvRA = "0x1b07131f121215051c061520061b0a1401171c000d0a04191a181f142016161d"
		const uintCaBnsIz = BigInt("159")
		const uintImUYb61 = BigInt("1029")
		const uintbnkS9BP = BigInt("1787")
		const addressw0d6C0p = "0x0000000000000000000000000000000000000001"
		const byteDSsHob3 = "0x080d170e03120d19110415051d0208041c03041c191119050118101b0f1a0a18"
		const byteJDcVIwy = "0x15050219091909181806160707011102120a081a0e09151701171a0301130d1d"
		const uintEu0BlKx = BigInt("91")
		const uintInM9818 = BigInt("1306")
		const uintuBBn92I = BigInt("627")
		const uint256QuHNuCW = await LpStakingWoeicKw.rewardEarned.call(addressCo1DMRG, {from: accounts[4]});
//		await LpStakingWoeicKw.exit.call({from: accounts[0]});
//		const uint256ZxsraOw = await LpStakingWoeicKw.incomePerToken.call({from: accounts[5]});
//		await LpStakingWoeicKw.nonEmergencyStop.call({from: accounts[0]});
//		const uint256MRRfc6l = await LpStakingWoeicKw.incomePerToken.call({from: accounts[5]});
//		const uint2565Qx8yt = await LpStakingWoeicKw.rewardPerToken.call({from: accounts[4]});
//		const uint256Ow8kUFt = await LpStakingWoeicKw.stakeWithPermit.call(uintbnkS9BP, uintImUYb61, uintCaBnsIz, byteVROdvRA, byteTt263Zj, {from: accounts[3]});
//		const uint256WD3wLB = await LpStakingWoeicKw.getUserAccumulatedWithdrawIncome.call(addressw0d6C0p, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256goD2yN5 = await LpStakingWoeicKw.stakeWithPermit.call(uintuBBn92I, uintInM9818, uintEu0BlKx, byteJDcVIwy, byteDSsHob3, {from: accounts[4]});

		assert.equal(uint256QuHNuCW, BigInt("0"))
		await expect(LpStakingWoeicKw.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})