const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakebcWFL72 = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressalLJlv = accounts[4]
		const boolWn22yfn = true
		const uintCILpI3t = BigInt("110")
		const addressjEXKlXB = accounts[2]
		const uint256pDCkZo3 = await CourtFarming_RoomLPStakebcWFL72.rewards.call(addressalLJlv, {from: accounts[1]});
//		const uint256EFfedTm = await CourtFarming_RoomLPStakebcWFL72.unstake.call(uintCILpI3t, boolWn22yfn, {from: accounts[3]});
//		const uint256B65NfSc = await CourtFarming_RoomLPStakebcWFL72.incvRewardClaim.call({from: accounts[2]});
//		const uint256IDH5QVH = await CourtFarming_RoomLPStakebcWFL72.getCurrentTime.call({from: accounts[3]});
//		const addressvcnRCIq = await CourtFarming_RoomLPStakebcWFL72.updateReward.call(addressjEXKlXB, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakebcWFL72.unstake.call(uintCILpI3t, boolWn22yfn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakenDpYSNs = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintZZwGQb = BigInt("969")
		const uintphjwYnQ = BigInt("355")
		const addressMXI8xTR = accounts[2]
		const uint256PxUWzA9 = await CourtFarming_RoomLPStakenDpYSNs.blockNumber.call({from: accounts[1]});
		const uint256JR9f4fg = await CourtFarming_RoomLPStakenDpYSNs.blockNumber.call({from: accounts[2]});
		const boolDBKbbvx = await CourtFarming_RoomLPStakenDpYSNs.stakeIncvRewards.call(uintZZwGQb, {from: accounts[5]});
		const uint256N7qKcWP = await CourtFarming_RoomLPStakenDpYSNs.expectedRewardsToday.call(uintphjwYnQ, {from: "0x0000000000000000000000000000000000000001"});
		const addresspQGKPdr = await CourtFarming_RoomLPStakenDpYSNs.updateReward.call(addressMXI8xTR, {from: accounts[4]});

		assert.equal(boolDBKbbvx, false)
		assert.equal(uint256JR9f4fg, BigInt("1279"))
		assert.equal(uint256PxUWzA9, BigInt("1279"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakew0niZmS = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressbkpzjLb = accounts[1]
		const addressSih3e2 = accounts[3]
		const addressJR4Ulgr = accounts[1]
		const addressytjhHki = accounts[4]
		const addressyZKaQ6 = await CourtFarming_RoomLPStakew0niZmS.getBeneficiaryInfo.call(addressbkpzjLb, {from: accounts[2]});
		const uint256x287zXX = await CourtFarming_RoomLPStakew0niZmS.blockNumber.call({from: accounts[1]});
		const uint256uSVfRTG = await CourtFarming_RoomLPStakew0niZmS.balanceOf.call(addressSih3e2, {from: accounts[1]});
		const uint256frXvN3M = await CourtFarming_RoomLPStakew0niZmS.rewards.call(addressJR4Ulgr, {from: accounts[2]});
//		const addressmSoprFj = await CourtFarming_RoomLPStakew0niZmS.setCourtStake.call(addressytjhHki, {from: accounts[4]});

		assert.equal(uint256uSVfRTG, BigInt("0"))
		assert.equal(uint256x287zXX, BigInt("1279"))
		await expect(CourtFarming_RoomLPStakew0niZmS.setCourtStake.call(addressytjhHki, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakenUGBzfs = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressEZO7fHv = accounts[4]
		const uintNG28MJ = BigInt("1483")
		const boolyFSlEh = true
		const uintj5q06r0 = BigInt("1735")
		const uintlFttfG0 = BigInt("1318")
		const uint256lqcZjhC = await CourtFarming_RoomLPStakenUGBzfs.balanceOf.call(addressEZO7fHv, {from: accounts[0]});
//		const uint256usxr4I3 = await CourtFarming_RoomLPStakenUGBzfs.stake.call(uintNG28MJ, {from: accounts[3]});
//		const uint256MKBbKBj = await CourtFarming_RoomLPStakenUGBzfs.unstake.call(uintj5q06r0, boolyFSlEh, {from: accounts[1]});
//		const uint256oxEQnDa = await CourtFarming_RoomLPStakenUGBzfs.stake.call(uintlFttfG0, {from: accounts[1]});
//		const uint256d5jcCiv = await CourtFarming_RoomLPStakenUGBzfs.totalStaked.call({from: accounts[2]});

		assert.equal(uint256lqcZjhC, BigInt("0"))
		await expect(CourtFarming_RoomLPStakenUGBzfs.stake.call(uintNG28MJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJqDqkb = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressIbWUKZT = accounts[2]
		const uintzNbq9I = BigInt("75")
		const addressda3BkDx = await CourtFarming_RoomLPStakeJqDqkb.updateReward.call(addressIbWUKZT, {from: accounts[2]});
		const uint256bYXTaf9 = await CourtFarming_RoomLPStakeJqDqkb.lastUpdateBlock.call({from: accounts[0]});
		const uint256tc6XcKA = await CourtFarming_RoomLPStakeJqDqkb.totalStaked.call({from: accounts[2]});
//		const uint256n5F69W = await CourtFarming_RoomLPStakeJqDqkb.stake.call(uintzNbq9I, {from: accounts[2]});

		assert.equal(uint256bYXTaf9, BigInt("1279"))
		assert.equal(uint256tc6XcKA, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeJqDqkb.stake.call(uintzNbq9I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeE3Qbedp = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addresscUssiNU = accounts[5]
		const uintodzAFjy = BigInt("1038")
		const uintXhwFZ0T = BigInt("1530")
		const uintSIyr8D9 = BigInt("1174")
		const uintS2CFadl = BigInt("1723")
		const uintY1KS61c = BigInt("1285")
		const uintdvlrk9k = BigInt("1381")
		const addressBpMlow1 = accounts[4]
		const boolQ5AOxNf = false
		const uintyfy7vj9 = BigInt("789")
		const uint256zS3GFDA = await CourtFarming_RoomLPStakeE3Qbedp.rewards.call(addresscUssiNU, {from: accounts[2]});
//		await CourtFarming_RoomLPStakeE3Qbedp.changeStakeParameters.call(uintSIyr8D9, uintXhwFZ0T, uintodzAFjy, {from: accounts[0]});
//		await CourtFarming_RoomLPStakeE3Qbedp.changeStakeParameters.call(uintdvlrk9k, uintY1KS61c, uintS2CFadl, {from: accounts[2]});
//		const uint256B1VOooj = await CourtFarming_RoomLPStakeE3Qbedp.rewards.call(addressBpMlow1, {from: accounts[5]});
//		const uint256nkqIKAe = await CourtFarming_RoomLPStakeE3Qbedp.unstake.call(uintyfy7vj9, boolQ5AOxNf, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakeE3Qbedp.changeStakeParameters.call(uintSIyr8D9, uintXhwFZ0T, uintodzAFjy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJqDqkb = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressUutzPMW = accounts[3]
		const uintzefrbp = BigInt("1705")
		const uintis6iU1B = BigInt("75")
		const addressda3BkDx = await CourtFarming_RoomLPStakeJqDqkb.updateReward.call(addressUutzPMW, {from: accounts[2]});
		const uint256bYXTaf9 = await CourtFarming_RoomLPStakeJqDqkb.lastUpdateBlock.call({from: accounts[0]});
		const boolWIY3B28 = await CourtFarming_RoomLPStakeJqDqkb.stakeIncvRewards.call(uintzefrbp, {from: accounts[2]});
		const uint256tc6XcKA = await CourtFarming_RoomLPStakeJqDqkb.totalStaked.call({from: accounts[2]});
		const uint256m9YtdO = await CourtFarming_RoomLPStakeJqDqkb.incvRewardClaim.call({from: accounts[3]});
//		const uint256n5F69W = await CourtFarming_RoomLPStakeJqDqkb.stake.call(uintis6iU1B, {from: accounts[2]});

		assert.equal(boolWIY3B28, false)
		assert.equal(uint256bYXTaf9, BigInt("1279"))
		assert.equal(uint256m9YtdO, BigInt("0"))
		assert.equal(uint256tc6XcKA, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeJqDqkb.stake.call(uintis6iU1B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJqDqkb = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressukjHtzq = accounts[2]
		const boolvHF3kQM = false
		const uintYKYaUZL = BigInt("384")
		const uintFp2cA9n = BigInt("75")
		const uintIYpomUg = BigInt("965")
		const uint256VtGTxqu = await CourtFarming_RoomLPStakeJqDqkb.incvRewardInfo.call({from: accounts[4]});
		const addressda3BkDx = await CourtFarming_RoomLPStakeJqDqkb.updateReward.call(addressukjHtzq, {from: accounts[2]});
//		const uint256rVJmpuJ = await CourtFarming_RoomLPStakeJqDqkb.unstake.call(uintYKYaUZL, boolvHF3kQM, {from: accounts[2]});
//		const uint256bYXTaf9 = await CourtFarming_RoomLPStakeJqDqkb.lastUpdateBlock.call({from: accounts[0]});
//		const uint256tc6XcKA = await CourtFarming_RoomLPStakeJqDqkb.totalStaked.call({from: accounts[2]});
//		const uint256n5F69W = await CourtFarming_RoomLPStakeJqDqkb.stake.call(uintFp2cA9n, {from: accounts[2]});
//		const boolXqxus8E = await CourtFarming_RoomLPStakeJqDqkb.stakeIncvRewards.call(uintIYpomUg, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeJqDqkb.unstake.call(uintYKYaUZL, boolvHF3kQM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeKeneZsx = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const boolKISukQi = false
		const uintYGB6pK8 = BigInt("1375")
		const uint256rOi0a5m = await CourtFarming_RoomLPStakeKeneZsx.getCurrentTime.call({from: accounts[5]});
		const uint256kYsXIY = await CourtFarming_RoomLPStakeKeneZsx.unstake.call(uintYGB6pK8, boolKISukQi, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOvJhJXS = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressmX8aMHw = accounts[1]
		const addressmlWCcIC = accounts[3]
		const address4HkwRX = accounts[1]
		const addressf0O9K15 = accounts[1]
		const uint256XKOEaVt = await CourtFarming_RoomLPStakeOvJhJXS.getCurrentTime.call({from: accounts[5]});
		const uint256xeYLVND = await CourtFarming_RoomLPStakeOvJhJXS.balanceOf.call(addressmX8aMHw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yjSsHsD = await CourtFarming_RoomLPStakeOvJhJXS.balanceOf.call(addressmlWCcIC, {from: accounts[1]});
//		const addressXGE7wxM = await CourtFarming_RoomLPStakeOvJhJXS.setCourtStake.call(address4HkwRX, {from: accounts[3]});
//		const addressoc319EF = await CourtFarming_RoomLPStakeOvJhJXS.updateReward.call(addressf0O9K15, {from: accounts[0]});

		assert.equal(uint256XKOEaVt, BigInt("1630200075"))
		assert.equal(uint256xeYLVND, BigInt("0"))
		assert.equal(uint256yjSsHsD, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeOvJhJXS.setCourtStake.call(address4HkwRX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakenDpYSNs = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintfSDntA = BigInt("0")
		const uintMs43Zlm = BigInt("594")
		const uinttdQaOU = BigInt("355")
		const uint256JR9f4fg = await CourtFarming_RoomLPStakenDpYSNs.blockNumber.call({from: accounts[2]});
		const uint256tqT6P9m = await CourtFarming_RoomLPStakenDpYSNs.stake.call(uintfSDntA, {from: accounts[1]});
		const uint256VM4f281 = await CourtFarming_RoomLPStakenDpYSNs.incvRewardClaim.call({from: accounts[2]});
		const boolDBKbbvx = await CourtFarming_RoomLPStakenDpYSNs.stakeIncvRewards.call(uintMs43Zlm, {from: accounts[5]});
		const uint256N7qKcWP = await CourtFarming_RoomLPStakenDpYSNs.expectedRewardsToday.call(uinttdQaOU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDBKbbvx, false)
		assert.equal(uint256JR9f4fg, BigInt("1279"))
		assert.equal(uint256VM4f281, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeefvkQkk = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintd6xCtyL = BigInt("27")
		const uintjY5yg1 = BigInt("555")
		const uintuAm9jXS = BigInt("1754")
		const uintfILtR8E = BigInt("474")
		const addressI1pHZXq = accounts[0]
		const addressj2r8nmA = accounts[0]
		const uintvsxAQk = BigInt("2040")
		const uint4aBED8 = BigInt("1334")
		const bool2cPPG1 = await CourtFarming_RoomLPStakeefvkQkk.stakeIncvRewards.call(uintd6xCtyL, {from: accounts[0]});
//		await CourtFarming_RoomLPStakeefvkQkk.changeStakeParameters.call(uintfILtR8E, uintuAm9jXS, uintjY5yg1, {from: accounts[0]});
//		const uint256OBXW3YN = await CourtFarming_RoomLPStakeefvkQkk.getCurrentTime.call({from: accounts[0]});
//		const addressqfGxYPY = await CourtFarming_RoomLPStakeefvkQkk.updateReward.call(addressI1pHZXq, {from: accounts[1]});
//		const uint256hSa2N7M = await CourtFarming_RoomLPStakeefvkQkk.balanceOf.call(addressj2r8nmA, {from: accounts[0]});
//		const uint256rEzTYb = await CourtFarming_RoomLPStakeefvkQkk.expectedRewardsToday.call(uintvsxAQk, {from: accounts[5]});
//		const booluPc0JrZ = await CourtFarming_RoomLPStakeefvkQkk.stakeIncvRewards.call(uint4aBED8, {from: accounts[1]});

		assert.equal(bool2cPPG1, false)
		await expect(CourtFarming_RoomLPStakeefvkQkk.changeStakeParameters.call(uintfILtR8E, uintuAm9jXS, uintjY5yg1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeefvkQkk = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintCVkzr5j = BigInt("0")
		const uintecTnWaJ = BigInt("1399")
		const bool2cPPG1 = await CourtFarming_RoomLPStakeefvkQkk.stakeIncvRewards.call(uintCVkzr5j, {from: accounts[0]});
		const boolY6PlEn5 = await CourtFarming_RoomLPStakeefvkQkk.stakeIncvRewards.call(uintecTnWaJ, {from: accounts[0]});
		const uint256op4THI2 = await CourtFarming_RoomLPStakeefvkQkk.incvRewardClaim.call({from: accounts[3]});

		assert.equal(bool2cPPG1, false)
		assert.equal(boolY6PlEn5, false)
		assert.equal(uint256op4THI2, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakexo9yGAR = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const boolEkcLD6h = true
		const uintb1SV3b5 = BigInt("0")
		const address8k9Xll = accounts[0]
		const uint256s46Mhbb = await CourtFarming_RoomLPStakexo9yGAR.unstake.call(uintb1SV3b5, boolEkcLD6h, {from: accounts[0]});
		const uint256eOzjAoS = await CourtFarming_RoomLPStakexo9yGAR.balanceOf.call(address8k9Xll, {from: accounts[0]});

		assert.equal(uint256eOzjAoS, BigInt("0"))
	});
})