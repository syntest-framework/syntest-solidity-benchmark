const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeeVrfz1R = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintj8tPytY = BigInt("1130")
		const addressCYVm9OR = accounts[4]
		const addressuNa2Tf0 = accounts[0]
		const uint256bn0Mcex = await CourtFarming_RoomLPStakeeVrfz1R.incvRewardInfo.call({from: accounts[0]});
		const boolVyEsAIy = await CourtFarming_RoomLPStakeeVrfz1R.stakeIncvRewards.call(uintj8tPytY, {from: accounts[0]});
		const uint256XsFBDok = await CourtFarming_RoomLPStakeeVrfz1R.balanceOf.call(addressCYVm9OR, {from: accounts[1]});
		const addressPw9fX7 = await CourtFarming_RoomLPStakeeVrfz1R.updateReward.call(addressuNa2Tf0, {from: accounts[3]});

		assert.equal(boolVyEsAIy, false)
		assert.equal(uint256XsFBDok, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeLgZEt7 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressF5l414O = accounts[5]
		const uintma06jma = BigInt("1791")
		const uint256xGBum4l = await CourtFarming_RoomLPStakeLgZEt7.balanceOf.call(addressF5l414O, {from: accounts[0]});
		const uint256JOHTNU0 = await CourtFarming_RoomLPStakeLgZEt7.totalStaked.call({from: accounts[4]});
//		const uint256LUN8sXP = await CourtFarming_RoomLPStakeLgZEt7.stake.call(uintma06jma, {from: accounts[4]});

		assert.equal(uint256JOHTNU0, BigInt("0"))
		assert.equal(uint256xGBum4l, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeLgZEt7.stake.call(uintma06jma, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake4HwEUU = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressMJXfaa0 = accounts[3]
		const boolfnlKeNH = false
		const uintE54liGc = BigInt("1514")
		const booljDgTO6J = false
		const uintLGuMLbA = BigInt("1401")
		const addressKf9I4k = await CourtFarming_RoomLPStake4HwEUU.updateReward.call(addressMJXfaa0, {from: accounts[0]});
		const uint256xOx4cIm = await CourtFarming_RoomLPStake4HwEUU.lastUpdateBlock.call({from: accounts[2]});
//		const uint256PTBo4KJ = await CourtFarming_RoomLPStake4HwEUU.unstake.call(uintE54liGc, boolfnlKeNH, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xNWTJRo = await CourtFarming_RoomLPStake4HwEUU.getCurrentTime.call({from: accounts[2]});
//		const uint256LTSPN5t = await CourtFarming_RoomLPStake4HwEUU.unstake.call(uintLGuMLbA, booljDgTO6J, {from: accounts[5]});

		assert.equal(uint256xOx4cIm, BigInt("1579"))
		await expect(CourtFarming_RoomLPStake4HwEUU.unstake.call(uintE54liGc, boolfnlKeNH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCWY1Q0n = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintpPiNatS = BigInt("1269")
		const uintHiTZZWC = BigInt("695")
		const addressVjXQZA3 = accounts[0]
		const uintJUfLTVz = BigInt("1736")
		const uint256aglprhc = await CourtFarming_RoomLPStakeCWY1Q0n.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256OIwr2Wj = await CourtFarming_RoomLPStakeCWY1Q0n.expectedRewardsToday.call(uintpPiNatS, {from: accounts[2]});
		const uint256ifrfLaw = await CourtFarming_RoomLPStakeCWY1Q0n.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256m67QmyR = await CourtFarming_RoomLPStakeCWY1Q0n.stake.call(uintHiTZZWC, {from: accounts[1]});
//		const uint256r6JT6k2 = await CourtFarming_RoomLPStakeCWY1Q0n.rewards.call(addressVjXQZA3, {from: accounts[5]});
//		const uint256ghtYpmh = await CourtFarming_RoomLPStakeCWY1Q0n.expectedRewardsToday.call(uintJUfLTVz, {from: accounts[4]});

		assert.equal(uint256aglprhc, BigInt("1579"))
		await expect(CourtFarming_RoomLPStakeCWY1Q0n.stake.call(uintHiTZZWC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAm1u5bj = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const address8qU4rU = "0x0000000000000000000000000000000000000001"
		const uintDSVRiD = BigInt("2029")
		const addressjr28xwn = accounts[4]
		const addressqI3ilki = "0x0000000000000000000000000000000000000001"
		const boolVhdDp2e = false
		const uintYN00LEc = BigInt("44")
		const uint256FPf3Y9Q = await CourtFarming_RoomLPStakeAm1u5bj.balanceOf.call(address8qU4rU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zSwpicz = await CourtFarming_RoomLPStakeAm1u5bj.expectedRewardsToday.call(uintDSVRiD, {from: accounts[4]});
//		const addressfoZAAwP = await CourtFarming_RoomLPStakeAm1u5bj.setCourtStake.call(addressjr28xwn, {from: accounts[3]});
//		const uint256YBmNQyb = await CourtFarming_RoomLPStakeAm1u5bj.totalStaked.call({from: accounts[0]});
//		const uint256YSX8kXn = await CourtFarming_RoomLPStakeAm1u5bj.balanceOf.call(addressqI3ilki, {from: accounts[5]});
//		const uint256HCe8sRv = await CourtFarming_RoomLPStakeAm1u5bj.unstake.call(uintYN00LEc, boolVhdDp2e, {from: accounts[4]});

		assert.equal(uint256FPf3Y9Q, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeAm1u5bj.setCourtStake.call(addressjr28xwn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeo0S1caU = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressWjCLTgU = accounts[1]
		const boolVbHgUg = false
		const uintAqu8wxQ = BigInt("1497")
		const boolRVYeBXu = false
		const uintnLYq7tl = BigInt("1950")
		const uint256wYJjJtu = await CourtFarming_RoomLPStakeo0S1caU.rewards.call(addressWjCLTgU, {from: accounts[5]});
//		const uint256qggrXoG = await CourtFarming_RoomLPStakeo0S1caU.unstake.call(uintAqu8wxQ, boolVbHgUg, {from: accounts[0]});
//		const uint256hvVrjye = await CourtFarming_RoomLPStakeo0S1caU.unstake.call(uintnLYq7tl, boolRVYeBXu, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakeo0S1caU.unstake.call(uintAqu8wxQ, boolVbHgUg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelOmM9sb = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressATxq7T = accounts[3]
		const addressRZkNxZ1 = accounts[2]
		const uintgbgLAHz = BigInt("1853")
		const addressGXCPZxV = await CourtFarming_RoomLPStakelOmM9sb.updateReward.call(addressATxq7T, {from: accounts[4]});
		const uint256oj6BvWO = await CourtFarming_RoomLPStakelOmM9sb.getCurrentTime.call({from: accounts[0]});
		const uint256XDFyJTi = await CourtFarming_RoomLPStakelOmM9sb.getCurrentTime.call({from: accounts[4]});
		const uint256TXcsvhZ = await CourtFarming_RoomLPStakelOmM9sb.balanceOf.call(addressRZkNxZ1, {from: accounts[3]});
		const boolo0Lut83 = await CourtFarming_RoomLPStakelOmM9sb.stakeIncvRewards.call(uintgbgLAHz, {from: accounts[3]});
		const uint256vgd5rCB = await CourtFarming_RoomLPStakelOmM9sb.incvRewardInfo.call({from: accounts[4]});

		assert.equal(boolo0Lut83, false)
		assert.equal(uint256TXcsvhZ, BigInt("0"))
		assert.equal(uint256XDFyJTi, BigInt("1630201351"))
		assert.equal(uint256oj6BvWO, BigInt("1630201351"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIZPcVZW = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressG5Ztz4b = "0x0000000000000000000000000000000000000001"
		const uintSmquTlh = BigInt("439")
		const addressqbJbg7L = accounts[2]
		const uint256MZDaNg2 = await CourtFarming_RoomLPStakeIZPcVZW.rewards.call(addressG5Ztz4b, {from: accounts[1]});
		const uint256XAx4Bxz = await CourtFarming_RoomLPStakeIZPcVZW.stake.call(uintSmquTlh, {from: accounts[5]});
		const uint256oR371rb = await CourtFarming_RoomLPStakeIZPcVZW.rewards.call(addressqbJbg7L, {from: accounts[2]});
		const uint256YXgOlhg = await CourtFarming_RoomLPStakeIZPcVZW.incvRewardInfo.call({from: accounts[2]});
		const uint256Qxknmdj = await CourtFarming_RoomLPStakeIZPcVZW.totalStaked.call({from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelOmM9sb = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressNRGmgtZ = accounts[3]
		const addressEHvs8aa = accounts[2]
		const uintLrm6LtT = BigInt("1853")
		const addressGXCPZxV = await CourtFarming_RoomLPStakelOmM9sb.updateReward.call(addressNRGmgtZ, {from: accounts[4]});
		const uint256oj6BvWO = await CourtFarming_RoomLPStakelOmM9sb.getCurrentTime.call({from: accounts[0]});
		const uint256XDFyJTi = await CourtFarming_RoomLPStakelOmM9sb.getCurrentTime.call({from: accounts[4]});
		const uint256ZskDHtG = await CourtFarming_RoomLPStakelOmM9sb.incvRewardClaim.call({from: accounts[3]});
		const uint256wIOkWi3 = await CourtFarming_RoomLPStakelOmM9sb.getCurrentTime.call({from: accounts[4]});
		const uint256TXcsvhZ = await CourtFarming_RoomLPStakelOmM9sb.balanceOf.call(addressEHvs8aa, {from: accounts[3]});
		const boolo0Lut83 = await CourtFarming_RoomLPStakelOmM9sb.stakeIncvRewards.call(uintLrm6LtT, {from: accounts[3]});
		const uint256vgd5rCB = await CourtFarming_RoomLPStakelOmM9sb.incvRewardInfo.call({from: accounts[4]});

		assert.equal(boolo0Lut83, false)
		assert.equal(uint256TXcsvhZ, BigInt("0"))
		assert.equal(uint256XDFyJTi, BigInt("1630201356"))
		assert.equal(uint256ZskDHtG, BigInt("0"))
		assert.equal(uint256oj6BvWO, BigInt("1630201356"))
		assert.equal(uint256wIOkWi3, BigInt("1630201356"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHXwqP0D = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressMDhCcjj = "0x0000000000000000000000000000000000000001"
		const uintPNfX3we = BigInt("168")
		const uintQuIatKF = BigInt("593")
		const uintbejp9nR = BigInt("803")
		const uint256zMSA5NJ = await CourtFarming_RoomLPStakeHXwqP0D.incvRewardClaim.call({from: accounts[4]});
		const uint256LQFkqtt = await CourtFarming_RoomLPStakeHXwqP0D.blockNumber.call({from: accounts[3]});
		const uint256WBGgyxF = await CourtFarming_RoomLPStakeHXwqP0D.blockNumber.call({from: accounts[0]});
//		const addressZ9ZD4n6 = await CourtFarming_RoomLPStakeHXwqP0D.setCourtStake.call(addressMDhCcjj, {from: accounts[5]});
//		await CourtFarming_RoomLPStakeHXwqP0D.changeStakeParameters.call(uintbejp9nR, uintQuIatKF, uintPNfX3we, {from: accounts[4]});

		assert.equal(uint256LQFkqtt, BigInt("1579"))
		assert.equal(uint256WBGgyxF, BigInt("1579"))
		assert.equal(uint256zMSA5NJ, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeHXwqP0D.setCourtStake.call(addressMDhCcjj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHXwqP0D = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressPRVrhYL = accounts[1]
		const uintess3w8b = BigInt("975")
		const uintlksCVzl = BigInt("401")
		const uint2IfKqE = BigInt("985")
		const addressE53KWu = "0x0000000000000000000000000000000000000000"
		const uintjNhqh27 = BigInt("168")
		const uint08ItCi = BigInt("593")
		const uintBJbiS4L = BigInt("803")
		const uint256zMSA5NJ = await CourtFarming_RoomLPStakeHXwqP0D.incvRewardClaim.call({from: accounts[4]});
		const addressco19xAI = await CourtFarming_RoomLPStakeHXwqP0D.updateReward.call(addressPRVrhYL, {from: accounts[0]});
//		await CourtFarming_RoomLPStakeHXwqP0D.changeStakeParameters.call(uint2IfKqE, uintlksCVzl, uintess3w8b, {from: accounts[4]});
//		const uint256WBGgyxF = await CourtFarming_RoomLPStakeHXwqP0D.blockNumber.call({from: accounts[0]});
//		const addressZ9ZD4n6 = await CourtFarming_RoomLPStakeHXwqP0D.setCourtStake.call(addressE53KWu, {from: accounts[5]});
//		await CourtFarming_RoomLPStakeHXwqP0D.changeStakeParameters.call(uintBJbiS4L, uint08ItCi, uintjNhqh27, {from: accounts[4]});

		assert.equal(uint256zMSA5NJ, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeHXwqP0D.changeStakeParameters.call(uint2IfKqE, uintlksCVzl, uintess3w8b, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFdRhSCH = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressFyWxks5 = accounts[3]
		const addressiS3zZgS = accounts[5]
		const addresss6nz4Il = accounts[4]
		const addressj2glhJe = await CourtFarming_RoomLPStakeFdRhSCH.getBeneficiaryInfo.call(addressFyWxks5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SVaal0a = await CourtFarming_RoomLPStakeFdRhSCH.blockNumber.call({from: accounts[1]});
		const uint256EH4crd = await CourtFarming_RoomLPStakeFdRhSCH.incvRewardClaim.call({from: accounts[0]});
		const addressMJuCZ1d = await CourtFarming_RoomLPStakeFdRhSCH.updateReward.call(addressiS3zZgS, {from: accounts[2]});
		const uint256TsFoEP = await CourtFarming_RoomLPStakeFdRhSCH.balanceOf.call(addresss6nz4Il, {from: accounts[0]});

		assert.equal(uint256EH4crd, BigInt("0"))
		assert.equal(uint256SVaal0a, BigInt("1579"))
		assert.equal(uint256TsFoEP, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHXwqP0D = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintXnuYFOk = BigInt("2")
		const uintG1zJJMe = BigInt("1593")
		const uintouW7Xt5 = BigInt("1867")
		const uintZxHbS1 = BigInt("1773")
		const addressubp49tS = accounts[4]
		const addressYy09Km2 = accounts[2]
		const booljZQQsn2 = await CourtFarming_RoomLPStakeHXwqP0D.stakeIncvRewards.call(uintXnuYFOk, {from: accounts[3]});
//		await CourtFarming_RoomLPStakeHXwqP0D.changeStakeParameters.call(uintZxHbS1, uintouW7Xt5, uintG1zJJMe, {from: accounts[5]});
//		const addresskdNDrY = await CourtFarming_RoomLPStakeHXwqP0D.updateReward.call(addressubp49tS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Xs9kbB = await CourtFarming_RoomLPStakeHXwqP0D.lastUpdateBlock.call({from: accounts[1]});
//		const addressuiUOZVd = await CourtFarming_RoomLPStakeHXwqP0D.getBeneficiaryInfo.call(addressYy09Km2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljZQQsn2, false)
		await expect(CourtFarming_RoomLPStakeHXwqP0D.changeStakeParameters.call(uintZxHbS1, uintouW7Xt5, uintG1zJJMe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHXwqP0D = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintbtGclZ4 = BigInt("0")
		const uint256YfS3UZg = await CourtFarming_RoomLPStakeHXwqP0D.blockNumber.call({from: accounts[1]});
		const uint256cXB0fe = await CourtFarming_RoomLPStakeHXwqP0D.totalStaked.call({from: accounts[2]});
		const uint256ItSLrKp = await CourtFarming_RoomLPStakeHXwqP0D.stake.call(uintbtGclZ4, {from: accounts[2]});

		assert.equal(uint256YfS3UZg, BigInt("1579"))
		assert.equal(uint256cXB0fe, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHXwqP0D = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const booldimtXnO = true
		const uinttJjBiyE = BigInt("0")
		const addressZYooVzS = accounts[5]
		const addressuPZW1A = accounts[1]
		const uint256e62apgn = await CourtFarming_RoomLPStakeHXwqP0D.unstake.call(uinttJjBiyE, booldimtXnO, {from: accounts[0]});
		const uint256br0kGZp = await CourtFarming_RoomLPStakeHXwqP0D.balanceOf.call(addressZYooVzS, {from: accounts[2]});
		const addresslyWnHBr = await CourtFarming_RoomLPStakeHXwqP0D.updateReward.call(addressuPZW1A, {from: accounts[2]});
		const uint256WBGgyxF = await CourtFarming_RoomLPStakeHXwqP0D.blockNumber.call({from: accounts[0]});

		assert.equal(uint256WBGgyxF, BigInt("1579"))
		assert.equal(uint256br0kGZp, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHXwqP0D = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintZSqY07B = BigInt("0")
		const uintvliNePS = BigInt("1018")
		const booljZQQsn2 = await CourtFarming_RoomLPStakeHXwqP0D.stakeIncvRewards.call(uintZSqY07B, {from: accounts[3]});
		const boolSlfZS9b = await CourtFarming_RoomLPStakeHXwqP0D.stakeIncvRewards.call(uintvliNePS, {from: accounts[2]});

		assert.equal(boolSlfZS9b, false)
		assert.equal(booljZQQsn2, false)
	});
})