const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeE5R8Sy = await CourtFarming_HTStake.new({from: accounts[2]});
		const address058DNl = accounts[0]
		const uintfbn3du = BigInt("1894")
		const uintp2UE6vE = BigInt("457")
		const uintLNzpd2L = BigInt("1367")
		const uintc8jH9OG = BigInt("1112")
		const boolwDOXlNl = false
		const uintskb2Noa = BigInt("1243")
		const uint256s0iLfXE = await CourtFarming_HTStakeeE5R8Sy.balanceOf.call(address058DNl, {from: accounts[2]});
//		const uint256r7IsyBu = await CourtFarming_HTStakeeE5R8Sy._stakeParametrsCalculation.call(uintLNzpd2L, uintp2UE6vE, uintfbn3du, {from: accounts[3]});
//		const uint256eOAjHK5 = await CourtFarming_HTStakeeE5R8Sy.expectedRewardsToday.call(uintc8jH9OG, {from: accounts[3]});
//		const uint256mX3xBTT = await CourtFarming_HTStakeeE5R8Sy.unstake.call(uintskb2Noa, boolwDOXlNl, {from: accounts[1]});

		assert.equal(uint256s0iLfXE, BigInt("0"))
		await expect(CourtFarming_HTStakeeE5R8Sy._stakeParametrsCalculation.call(uintLNzpd2L, uintp2UE6vE, uintfbn3du, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXoGbIRW = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintcMlrlYe = BigInt("1206")
		const addressoy6c6hM = accounts[3]
		const uint256qrKpy8o = await CourtFarming_HTStakeXoGbIRW.expectedRewardsToday.call(uintcMlrlYe, {from: accounts[0]});
		const uint256LinIoVk = await CourtFarming_HTStakeXoGbIRW.incvRewardInfo.call({from: accounts[4]});
		const addressaTLIJpG = await CourtFarming_HTStakeXoGbIRW.updateReward.call(addressoy6c6hM, {from: accounts[0]});
		const uint256qCsyP0C = await CourtFarming_HTStakeXoGbIRW.incvRewardInfo.call({from: accounts[4]});
		const uint256LXIuNY6 = await CourtFarming_HTStakeXoGbIRW.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256LXIuNY6, BigInt("1630201589"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegUSwnk7 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintMAi5xUi = BigInt("1352")
		const uintDJNwV48 = BigInt("1728")
		const uintAAracgb = BigInt("1780")
		const uint256M3dIrAj = await CourtFarming_HTStakegUSwnk7.getCurrentTime.call({from: accounts[1]});
		const uint256taNqpK7 = await CourtFarming_HTStakegUSwnk7.blockNumber.call({from: accounts[2]});
//		await CourtFarming_HTStakegUSwnk7.changeStakeParameters.call(uintAAracgb, uintDJNwV48, uintMAi5xUi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256vX5Amy0 = await CourtFarming_HTStakegUSwnk7.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256M3dIrAj, BigInt("1630201586"))
		assert.equal(uint256taNqpK7, BigInt("1776"))
		await expect(CourtFarming_HTStakegUSwnk7.changeStakeParameters.call(uintAAracgb, uintDJNwV48, uintMAi5xUi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeJY6xWJc = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintx7Qt3Nr = BigInt("792")
		const uintkNdbwlP = BigInt("1884")
		const uinttZQV8v7 = BigInt("1818")
		const uintcHFRWsF = BigInt("464")
		const addresswxsIM1 = "0x0000000000000000000000000000000000000001"
		const uint256d2qqIJ9 = await CourtFarming_HTStakeJY6xWJc.incvRewardClaim.call({from: accounts[2]});
		const uint256C3BnerB = await CourtFarming_HTStakeJY6xWJc._stakeParametrsCalculation.call(uinttZQV8v7, uintkNdbwlP, uintx7Qt3Nr, {from: accounts[1]});
		const uint256WkyQh4E = await CourtFarming_HTStakeJY6xWJc.getCurrentTime.call({from: accounts[1]});
		const boolJKQoGQK = await CourtFarming_HTStakeJY6xWJc.stakeIncvRewards.call(uintcHFRWsF, {from: accounts[1]});
		const uint256gqTvps = await CourtFarming_HTStakeJY6xWJc.balanceOf.call(addresswxsIM1, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeQPdQ2lH = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintIBO5oNq = BigInt("678")
		const addressKFgJOr5 = accounts[3]
		const boolbqYTFMs = false
		const uintJXiyHnh = BigInt("1169")
		const boolYrUEBuy = await CourtFarming_HTStakeQPdQ2lH.stakeIncvRewards.call(uintIBO5oNq, {from: accounts[4]});
		const uint256UbsMUVS = await CourtFarming_HTStakeQPdQ2lH.balanceOf.call(addressKFgJOr5, {from: accounts[3]});
//		const uint256Qm1RTJ9 = await CourtFarming_HTStakeQPdQ2lH.unstake.call(uintJXiyHnh, boolbqYTFMs, {from: accounts[4]});
//		const uint256Oja882 = await CourtFarming_HTStakeQPdQ2lH.totalStaked.call({from: accounts[2]});
//		const uint256wy7AZN9 = await CourtFarming_HTStakeQPdQ2lH.incvRewardInfo.call({from: accounts[2]});

		assert.equal(boolYrUEBuy, false)
		assert.equal(uint256UbsMUVS, BigInt("0"))
		await expect(CourtFarming_HTStakeQPdQ2lH.unstake.call(uintJXiyHnh, boolbqYTFMs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedT90uON = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressh1K72yB = accounts[3]
		const addresszWHc2EM = accounts[3]
		const uintSZMuM6v = BigInt("895")
		const uint256Vgjuom = await CourtFarming_HTStakedT90uON.blockNumber.call({from: accounts[3]});
		const addressHq3IKSl = await CourtFarming_HTStakedT90uON.getBeneficiaryInfo.call(addressh1K72yB, {from: accounts[1]});
		const uint256m10XQA = await CourtFarming_HTStakedT90uON.rewards.call(addresszWHc2EM, {from: accounts[5]});
//		const uint256nJ9GEgz = await CourtFarming_HTStakedT90uON.stake.call(uintSZMuM6v, {from: accounts[1]});
//		const uint256v9vBJP2 = await CourtFarming_HTStakedT90uON.incvRewardInfo.call({from: accounts[0]});

		assert.equal(uint256Vgjuom, BigInt("1776"))
		await expect(CourtFarming_HTStakedT90uON.stake.call(uintSZMuM6v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqNtpxm = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresseyPL4Cw = accounts[1]
		const addressnN6tjAo = accounts[2]
//		const addressf0AnHaO = await CourtFarming_HTStakeqNtpxm.setCourtStake.call(addresseyPL4Cw, {from: accounts[0]});
//		const addressJAl4Xke = await CourtFarming_HTStakeqNtpxm.updateReward.call(addressnN6tjAo, {from: accounts[0]});

		await expect(CourtFarming_HTStakeqNtpxm.setCourtStake.call(addresseyPL4Cw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeQPdQ2lH = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintXtQEPMy = BigInt("678")
		const addressyrFnqFe = accounts[4]
		const boolbqYTFMs = false
		const uintj9iHoYG = BigInt("1169")
		const boolYrUEBuy = await CourtFarming_HTStakeQPdQ2lH.stakeIncvRewards.call(uintXtQEPMy, {from: accounts[4]});
		const uint256h6m3ifn = await CourtFarming_HTStakeQPdQ2lH.lastUpdateBlock.call({from: accounts[4]});
		const uint256UbsMUVS = await CourtFarming_HTStakeQPdQ2lH.balanceOf.call(addressyrFnqFe, {from: accounts[3]});
//		const uint256Qm1RTJ9 = await CourtFarming_HTStakeQPdQ2lH.unstake.call(uintj9iHoYG, boolbqYTFMs, {from: accounts[4]});
//		const uint256Oja882 = await CourtFarming_HTStakeQPdQ2lH.totalStaked.call({from: accounts[2]});
//		const uint256EIwTINl = await CourtFarming_HTStakeQPdQ2lH.incvRewardClaim.call({from: accounts[1]});
//		const uint256wy7AZN9 = await CourtFarming_HTStakeQPdQ2lH.incvRewardInfo.call({from: accounts[2]});

		assert.equal(boolYrUEBuy, false)
		assert.equal(uint256UbsMUVS, BigInt("0"))
		assert.equal(uint256h6m3ifn, BigInt("1776"))
		await expect(CourtFarming_HTStakeQPdQ2lH.unstake.call(uintj9iHoYG, boolbqYTFMs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakevnOgDJk = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintz292RPR = BigInt("874")
		const addressinFkC6C = accounts[1]
		const uint256GrOMHtZ = await CourtFarming_HTStakevnOgDJk.incvRewardClaim.call({from: accounts[1]});
//		const uint256LBL6Ykf = await CourtFarming_HTStakevnOgDJk.stake.call(uintz292RPR, {from: accounts[1]});
//		const uint256MOIupe = await CourtFarming_HTStakevnOgDJk.rewards.call(addressinFkC6C, {from: accounts[4]});
//		const uint256ZIBfeBZ = await CourtFarming_HTStakevnOgDJk.lastUpdateBlock.call({from: accounts[4]});

		assert.equal(uint256GrOMHtZ, BigInt("0"))
		await expect(CourtFarming_HTStakevnOgDJk.stake.call(uintz292RPR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedT90uON = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressoPr36Wu = accounts[3]
		const addressIqcseoI = accounts[3]
		const addressjLwsuts = accounts[3]
		const addressR3CI6Ix = accounts[3]
		const uintGyIAEZM = BigInt("871")
		const uint256Vgjuom = await CourtFarming_HTStakedT90uON.blockNumber.call({from: accounts[3]});
		const addressHq3IKSl = await CourtFarming_HTStakedT90uON.getBeneficiaryInfo.call(addressoPr36Wu, {from: accounts[1]});
//		const addressj9PMxLv = await CourtFarming_HTStakedT90uON.setCourtStake.call(addressIqcseoI, {from: accounts[1]});
//		const addressoL5DuS9 = await CourtFarming_HTStakedT90uON.setCourtStake.call(addressjLwsuts, {from: accounts[0]});
//		const uint256m10XQA = await CourtFarming_HTStakedT90uON.rewards.call(addressR3CI6Ix, {from: accounts[5]});
//		const uint256nJ9GEgz = await CourtFarming_HTStakedT90uON.stake.call(uintGyIAEZM, {from: accounts[1]});
//		const uint256v9vBJP2 = await CourtFarming_HTStakedT90uON.incvRewardInfo.call({from: accounts[0]});

		assert.equal(uint256Vgjuom, BigInt("1776"))
		await expect(CourtFarming_HTStakedT90uON.setCourtStake.call(addressIqcseoI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedT90uON = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressqDrJ7xX = accounts[3]
		const uintDH4AZQF = BigInt("851")
		const uint256C6lzlXD = await CourtFarming_HTStakedT90uON.totalStaked.call({from: accounts[3]});
		const uint256Vgjuom = await CourtFarming_HTStakedT90uON.blockNumber.call({from: accounts[3]});
		const addressHq3IKSl = await CourtFarming_HTStakedT90uON.getBeneficiaryInfo.call(addressqDrJ7xX, {from: accounts[1]});
//		const uint256nJ9GEgz = await CourtFarming_HTStakedT90uON.stake.call(uintDH4AZQF, {from: accounts[1]});
//		const uint256v9vBJP2 = await CourtFarming_HTStakedT90uON.incvRewardInfo.call({from: accounts[0]});

		assert.equal(uint256C6lzlXD, BigInt("0"))
		assert.equal(uint256Vgjuom, BigInt("1776"))
		await expect(CourtFarming_HTStakedT90uON.stake.call(uintDH4AZQF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeRQB7zWa = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintBLOhyJU = BigInt("1426")
		const uintTi8ifLM = BigInt("1887")
		const uintmyLN2Bf = BigInt("474")
		const uintAiE0Ecr = BigInt("1221")
//		await CourtFarming_HTStakeRQB7zWa.changeStakeParameters.call(uintmyLN2Bf, uintTi8ifLM, uintBLOhyJU, {from: accounts[2]});
//		const uint256osedevt = await CourtFarming_HTStakeRQB7zWa.stake.call(uintAiE0Ecr, {from: accounts[1]});
//		const uint256izEOwoS = await CourtFarming_HTStakeRQB7zWa.incvRewardInfo.call({from: accounts[1]});

		await expect(CourtFarming_HTStakeRQB7zWa.changeStakeParameters.call(uintmyLN2Bf, uintTi8ifLM, uintBLOhyJU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecUBjwvC = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintoDt3u9v = BigInt("1490")
		const uintBeERiXV = BigInt("0")
		const uintjsN8ese = BigInt("917")
		const boolwjeahAj = await CourtFarming_HTStakecUBjwvC.stakeIncvRewards.call(uintoDt3u9v, {from: "0x0000000000000000000000000000000000000001"});
		const uint256q80117p = await CourtFarming_HTStakecUBjwvC.incvRewardInfo.call({from: accounts[1]});
		const boolNrUubmv = await CourtFarming_HTStakecUBjwvC.stakeIncvRewards.call(uintBeERiXV, {from: accounts[4]});
		const boolyZp2nb = await CourtFarming_HTStakecUBjwvC.stakeIncvRewards.call(uintjsN8ese, {from: accounts[4]});

		assert.equal(boolNrUubmv, false)
		assert.equal(boolwjeahAj, false)
		assert.equal(boolyZp2nb, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeCGwHhh1 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressfaDg7GL = accounts[5]
		const uintmgAXdnm = BigInt("0")
		const addressRxOf0Wl = accounts[5]
		const uint256CmQqgTD = await CourtFarming_HTStakeCGwHhh1.rewards.call(addressfaDg7GL, {from: accounts[3]});
		const uint256UUIf7C = await CourtFarming_HTStakeCGwHhh1.stake.call(uintmgAXdnm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256H7euJfJ = await CourtFarming_HTStakeCGwHhh1.totalStaked.call({from: accounts[2]});
		const addressKli9rNe = await CourtFarming_HTStakeCGwHhh1.getBeneficiaryInfo.call(addressRxOf0Wl, {from: accounts[1]});

		assert.equal(uint256H7euJfJ, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXoGbIRW = await CourtFarming_HTStake.new({from: accounts[5]});
		const boolHX3mP37 = true
		const uintp4BPCB = BigInt("0")
		const uint256uaAVYoP = await CourtFarming_HTStakeXoGbIRW.unstake.call(uintp4BPCB, boolHX3mP37, {from: accounts[1]});
	});
})