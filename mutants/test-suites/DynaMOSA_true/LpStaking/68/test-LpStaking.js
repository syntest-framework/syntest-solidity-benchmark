const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingmjkNsQ0 = await LpStaking.new({from: accounts[2]});
		const addressVcdN5tI = accounts[5]
		const uintri1QpT9 = BigInt("1902")
//		await LpStakingmjkNsQ0.lpIncomeRateChanged.call({from: accounts[4]});
//		const addressfRQemBa = await LpStakingmjkNsQ0.transferOwnership.call(addressVcdN5tI, {from: accounts[1]});
//		const uint256Cl3k2GC = await LpStakingmjkNsQ0.withdraw.call(uintri1QpT9, {from: accounts[5]});
//		const uint256lCIzeOW = await LpStakingmjkNsQ0.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(LpStakingmjkNsQ0.lpIncomeRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingT2SGak7 = await LpStaking.new({from: accounts[3]});
		const uintQkrNquD = BigInt("911")
		const uintkQOU5gX = BigInt("1479")
		const uint256WFkKrf7 = await LpStakingT2SGak7.weiToSatoshi.call(uintQkrNquD, {from: accounts[2]});
		const uint256wYwJA23 = await LpStakingT2SGak7.rewardPerToken.call({from: accounts[1]});
		const uint256jlCr1XZ = await LpStakingT2SGak7.rewardPerToken.call({from: accounts[4]});
//		const uint256WYn5tz = await LpStakingT2SGak7.stake.call(uintkQOU5gX, {from: accounts[5]});

		assert.equal(uint256WFkKrf7, BigInt("0"))
		assert.equal(uint256jlCr1XZ, BigInt("0"))
		assert.equal(uint256wYwJA23, BigInt("0"))
		await expect(LpStakingT2SGak7.stake.call(uintkQOU5gX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingCfdWCd2 = await LpStaking.new({from: accounts[0]});
		const addressMzmukL4 = accounts[3]
		const boolkvv07Yh = true
		const addressibmVT3 = accounts[1]
//		const addressa9W1jy = await LpStakingCfdWCd2.transferOwnership.call(addressMzmukL4, {from: accounts[0]});
//		const boolJcQb98d = await LpStakingCfdWCd2.setEmergencyStop.call(boolkvv07Yh, {from: accounts[4]});
//		await LpStakingCfdWCd2.lpIncomeRateChanged.call({from: accounts[5]});
//		const addressuZJXAvY = await LpStakingCfdWCd2.updateIncome.call(addressibmVT3, {from: accounts[4]});
//		await LpStakingCfdWCd2.onlyOwner.call({from: accounts[1]});

		await expect(LpStakingCfdWCd2.transferOwnership.call(addressMzmukL4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingqfCR8DL = await LpStaking.new({from: accounts[2]});
		const uintR5di03i = BigInt("1204")
		const addresshiIi6L = accounts[0]
		const byteggLjiMA = "0x1c1a0d0e170817090d1c0f1c030d0503110c080b0b17041f1f03140e1f180711"
		const byteITmvTYr = "0x0f100e01091c190d011f050b0f090d0e130c0d081f140d06121b1f111b0b0505"
		const uintxmGSpl2 = BigInt("150")
		const uintL35Rho = BigInt("691")
		const uintaEpXvYe = BigInt("1929")
		const boolUHhd4ZC = true
//		await LpStakingqfCR8DL.nonReentrant.call({from: accounts[0]});
//		const addressfaMA24z = await LpStakingqfCR8DL.inCaseTokensGetStuck.call(addresshiIi6L, uintR5di03i, {from: accounts[2]});
//		const uint256GQFGPpL = await LpStakingqfCR8DL.stakeWithPermit.call(uintaEpXvYe, uintL35Rho, uintxmGSpl2, byteITmvTYr, byteggLjiMA, {from: accounts[3]});
//		const boolB0Do1E = await LpStakingqfCR8DL.setEmergencyStop.call(boolUHhd4ZC, {from: accounts[3]});
//		const uint256m185SFN = await LpStakingqfCR8DL.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(LpStakingqfCR8DL.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingXZgTtbv = await LpStaking.new({from: accounts[5]});
		const uintQXghXHu = BigInt("1234")
		const uintfNari6X = BigInt("136")
//		await LpStakingXZgTtbv.lpRewardRateChanged.call({from: accounts[1]});
//		const uint256NUslIJB = await LpStakingXZgTtbv.incomePerToken.call({from: accounts[5]});
//		const uint256kZI6vup = await LpStakingXZgTtbv.weiToSatoshi.call(uintQXghXHu, {from: accounts[3]});
//		const uint256T2YmEP = await LpStakingXZgTtbv.withdraw.call(uintfNari6X, {from: accounts[0]});

		await expect(LpStakingXZgTtbv.lpRewardRateChanged.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingmn1hqxK = await LpStaking.new({from: accounts[3]});
		const byte7ESvyQ = "0x13081e1504120d140b15010910191609090f170f151c1c17000a061e0f1b1011"
		const bytenNtxL8h = "0x0508101c0d040907011413010f0e0b1806081b14091d1c191a0d1b131f121c07"
		const uintFYseOrr = BigInt("207")
		const uintkP6gKbD = BigInt("759")
		const uintCk5ckNS = BigInt("1256")
//		const uint256pjLmzX9 = await LpStakingmn1hqxK.getCurIncomeRate.call({from: accounts[2]});
//		const uint256bD9BUUp = await LpStakingmn1hqxK.stakeWithPermit.call(uintCk5ckNS, uintkP6gKbD, uintFYseOrr, bytenNtxL8h, byte7ESvyQ, {from: accounts[4]});
//		await LpStakingmn1hqxK.getIncome.call({from: accounts[1]});
//		await LpStakingmn1hqxK.lpIncomeRateChanged.call({from: accounts[3]});

		await expect(LpStakingmn1hqxK.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingO4s9nwr = await LpStaking.new({from: accounts[2]});
		const uintoXj8M4c = BigInt("367")
		const addressJiiaZPH = accounts[0]
		const addressQsN6cvv = accounts[1]
//		await LpStakingO4s9nwr.exit.call({from: accounts[0]});
//		const uint256qZ71yR = await LpStakingO4s9nwr.weiToSatoshi.call(uintoXj8M4c, {from: accounts[1]});
//		const uint256wemhgFl = await LpStakingO4s9nwr.getCurIncomeRate.call({from: accounts[3]});
//		const addresszMowJHa = await LpStakingO4s9nwr.updateIncome.call(addressJiiaZPH, {from: accounts[2]});
//		const uint256ceww68e = await LpStakingO4s9nwr.incomeEarned.call(addressQsN6cvv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingO4s9nwr.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingtm2f2J = await LpStaking.new({from: accounts[0]});
		const uintFZoiRvB = BigInt("1125")
		const uintUCSBXK3 = BigInt("1964")
		const addresse0K5Ms7 = accounts[4]
		const addressn4FDdcH = accounts[2]
		const addressEuzHIlm = accounts[1]
		const uint256iZRvdOn = await LpStakingtm2f2J.weiToSatoshi.call(uintFZoiRvB, {from: accounts[1]});
		const uint256sDQxb9F = await LpStakingtm2f2J.weiToSatoshi.call(uintUCSBXK3, {from: accounts[0]});
		const uint2561Sw9rg = await LpStakingtm2f2J.rewardEarned.call(addresse0K5Ms7, {from: accounts[5]});
//		const uint256CTFU00v = await LpStakingtm2f2J.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresseBNkxQD = await LpStakingtm2f2J.transferOwnership.call(addressn4FDdcH, {from: accounts[1]});
//		const addressmhqvP1I = await LpStakingtm2f2J.updateReward.call(addressEuzHIlm, {from: accounts[4]});

		assert.equal(uint2561Sw9rg, BigInt("0"))
		assert.equal(uint256iZRvdOn, BigInt("0"))
		assert.equal(uint256sDQxb9F, BigInt("0"))
		await expect(LpStakingtm2f2J.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingcfOD0gJ = await LpStaking.new({from: accounts[2]});
		const addressiTAMNMm = accounts[0]
		const addressn8XXylQ = accounts[3]
		const uint256ocXjRAW = await LpStakingcfOD0gJ.getUserAccumulatedWithdrawIncome.call(addressiTAMNMm, {from: accounts[2]});
		const uint256blcHgMO = await LpStakingcfOD0gJ.getUserAccumulatedWithdrawIncome.call(addressn8XXylQ, {from: accounts[2]});
//		await LpStakingcfOD0gJ.getReward.call({from: accounts[1]});

		assert.equal(uint256blcHgMO, BigInt("0"))
		assert.equal(uint256ocXjRAW, BigInt("0"))
		await expect(LpStakingcfOD0gJ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingPhfERR8 = await LpStaking.new({from: accounts[4]});
		const addressFRAjR5E = accounts[2]
		const uintFp3qtYD = BigInt("949")
		const boolEYlpB3l = false
		const addressyrqiers = accounts[0]
//		const uint256HICgVPt = await LpStakingPhfERR8.incomeEarned.call(addressFRAjR5E, {from: accounts[2]});
//		await LpStakingPhfERR8.exit.call({from: accounts[3]});
//		const uint256CJ8xORP = await LpStakingPhfERR8.weiToSatoshi.call(uintFp3qtYD, {from: accounts[3]});
//		const boolQDlsbY = await LpStakingPhfERR8.setEmergencyStop.call(boolEYlpB3l, {from: accounts[4]});
//		const addresssSAegik = await LpStakingPhfERR8.transferOwnership.call(addressyrqiers, {from: accounts[0]});

		await expect(LpStakingPhfERR8.incomeEarned.call(addressFRAjR5E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingin2DpCC = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdN5RZqX = accounts[2]
		const addressXn0DT5w = accounts[3]
		const addressaqJJ7i6 = accounts[2]
		const addressmck03e = accounts[4]
		const addressBiWDY5a = await LpStakingin2DpCC.initialize.call(addressmck03e, addressaqJJ7i6, addressXn0DT5w, addressdN5RZqX, {from: accounts[2]});
		await LpStakingin2DpCC.getIncome.call({from: accounts[2]});
	});

	it('test for LpStaking', async () => {
		const LpStakingOiqMxVa = await LpStaking.new({from: accounts[3]});
		const addressCbLwHd = accounts[0]
		const addressD53EpAD = accounts[4]
		const addresssEZDoKd = accounts[3]
		const addressSDhFNBs = accounts[0]
		const addressLEShHe = accounts[4]
		const addressR4kZ3oT = accounts[2]
		const addressKUnalNG = await LpStakingOiqMxVa.initialize.call(addressSDhFNBs, addresssEZDoKd, addressD53EpAD, addressCbLwHd, {from: accounts[4]});
//		const uint256q1oyX7T = await LpStakingOiqMxVa.incomeEarned.call(addressLEShHe, {from: accounts[2]});
//		const addressSmi4Uhz = await LpStakingOiqMxVa.updateReward.call(addressR4kZ3oT, {from: accounts[4]});

		await expect(LpStakingOiqMxVa.incomeEarned.call(addressLEShHe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})