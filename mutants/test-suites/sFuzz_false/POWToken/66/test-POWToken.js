const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenFdwR6I = await POWToken.new({from: accounts[4]});
		const uintKtH8MJ4 = BigInt("687")
		const uint256MwFhW1Y = await POWTokenFdwR6I.lpStakingRewardRate.call({from: accounts[2]});
//		const uint256reRFT9 = await POWTokenFdwR6I.setDepreciationNumerator.call(uintKtH8MJ4, {from: accounts[3]});
//		await POWTokenFdwR6I.whenPaused.call({from: accounts[1]});
//		await POWTokenFdwR6I.pause.call({from: accounts[2]});

		assert.equal(uint256MwFhW1Y, BigInt("0"))
		await expect(POWTokenFdwR6I.setDepreciationNumerator.call(uintKtH8MJ4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlcmRSHm = await POWToken.new({from: accounts[3]});
		const uintFUvRATi = BigInt("1227")
		const addressyQlyMuS = accounts[1]
		const uintEcwFEuX = BigInt("256")
//		await POWTokenlcmRSHm.onlyOwner.call({from: accounts[4]});
//		const addressqsi5Rl2 = await POWTokenlcmRSHm.mint.call(addressyQlyMuS, uintFUvRATi, {from: accounts[0]});
//		await POWTokenlcmRSHm.onlyOwner.call({from: accounts[5]});
//		const uint256QZTIuxT = await POWTokenlcmRSHm.addHashRate.call(uintEcwFEuX, {from: accounts[1]});

		await expect(POWTokenlcmRSHm.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQfFNa4 = await POWToken.new({from: accounts[3]});
		const uintPgYZjrA = BigInt("1461")
		const boolGw3pF0f = await POWTokenQfFNa4.paused.call({from: accounts[2]});
//		const uint256XsBSrMk = await POWTokenQfFNa4.getIncomeBTCInWeiPerSec.call({from: accounts[1]});
//		const uint256R4brXyg = await POWTokenQfFNa4.setElectricCharge.call(uintPgYZjrA, {from: accounts[4]});

		assert.equal(boolGw3pF0f, false)
		await expect(POWTokenQfFNa4.getIncomeBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenYnH2ldY = await POWToken.new({from: accounts[3]});
		const uintbMlj6zF = BigInt("1917")
		const uintmC5ojoC = BigInt("1698")
		const uint256AThyTT = await POWTokenYnH2ldY.remainingAmount.call({from: accounts[0]});
//		const uint256VPY7RVN = await POWTokenYnH2ldY.notifyRewardAmount.call(uintbMlj6zF, {from: accounts[5]});
//		const uint256u6ZCB7E = await POWTokenYnH2ldY.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256gkRSQT = await POWTokenYnH2ldY.setDepreciationNumerator.call(uintmC5ojoC, {from: accounts[5]});
//		const uint2566pb6Cz = await POWTokenYnH2ldY.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		assert.equal(uint256AThyTT, BigInt("0"))
		await expect(POWTokenYnH2ldY.notifyRewardAmount.call(uintbMlj6zF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIG32wN1 = await POWToken.new({from: accounts[2]});
		const uintMT16C4D = BigInt("1897")
		const uintLWFv6cr = BigInt("1992")
		const uintN4xlCyd = BigInt("347")
		const uintC62kCrB = BigInt("1992")
		const uintUUHNEvB = BigInt("1580")
		const address89w6t6 = accounts[0]
		const addresswt1NRfK = accounts[0]
		const addressXppQVg = accounts[1]
		const addressiYDkZ6 = accounts[3]
		const addressr5SNs2d = accounts[1]
		const addressPJF7QHB = accounts[4]
		const addressMa08O7H = accounts[2]
		const addressKXdMnIy = accounts[0]
		const stringbLm6o99 = "yVTtxBCq4R89R08sXYHACsC6Qx13wqiH4Ye7ds7jbHIaMs5Yvm0Y9nu6PgxSnikOEnrsF7cJdthW"
		const stringuxn4vtU = "IMkiLab7tucRKpG6HYh8687TlBIjROi8nJHUN7EYspa"
		const uintLfujKRW = BigInt("2014")
		const addressmlktTNK = accounts[0]
//		const stringxnPy6g6 = await POWTokenIG32wN1.initialize.call(stringuxn4vtU, stringbLm6o99, addressKXdMnIy, addressMa08O7H, addressPJF7QHB, addressr5SNs2d, addressiYDkZ6, addressXppQVg, addresswt1NRfK, address89w6t6, uintUUHNEvB, uintC62kCrB, uintN4xlCyd, uintLWFv6cr, uintMT16C4D, {from: accounts[1]});
//		const boolNTSsgB8 = await POWTokenIG32wN1.transfer.call(addressmlktTNK, uintLfujKRW, {from: accounts[4]});
//		const uint256yrCftEy = await POWTokenIG32wN1.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenIG32wN1.unpause.call({from: accounts[0]});
//		const uint256cKlAMxo = await POWTokenIG32wN1.getIncomeBTCInWeiPerSec.call({from: accounts[0]});

		await expect(POWTokenIG32wN1.initialize.call(stringuxn4vtU, stringbLm6o99, addressKXdMnIy, addressMa08O7H, addressPJF7QHB, addressr5SNs2d, addressiYDkZ6, addressXppQVg, addresswt1NRfK, address89w6t6, uintUUHNEvB, uintC62kCrB, uintN4xlCyd, uintLWFv6cr, uintMT16C4D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenFdwR6I = await POWToken.new({from: accounts[4]});
		const uintAR79dPE = BigInt("695")
		const uint256MwFhW1Y = await POWTokenFdwR6I.lpStakingRewardRate.call({from: accounts[2]});
//		const uint256LHorWrK = await POWTokenFdwR6I.getHistoryWorkingRate.call({from: accounts[0]});
//		const uint256reRFT9 = await POWTokenFdwR6I.setDepreciationNumerator.call(uintAR79dPE, {from: accounts[3]});
//		await POWTokenFdwR6I.whenPaused.call({from: accounts[1]});
//		await POWTokenFdwR6I.onlyParamSetter.call({from: accounts[1]});
//		await POWTokenFdwR6I.pause.call({from: accounts[2]});

		assert.equal(uint256MwFhW1Y, BigInt("0"))
		await expect(POWTokenFdwR6I.getHistoryWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenFdwR6I = await POWToken.new({from: accounts[4]});
		const uintC0N9t0U = BigInt("453")
		const addressdiuuhWI = accounts[4]
		const uintNC9daQt = BigInt("687")
		const uintAFE5prO = BigInt("808")
		const addresskK2Yu9Y = accounts[0]
		const uint256MwFhW1Y = await POWTokenFdwR6I.lpStakingRewardRate.call({from: accounts[2]});
//		const addressD2fZXB5 = await POWTokenFdwR6I.claimIncome.call(addressdiuuhWI, uintC0N9t0U, {from: accounts[2]});
//		const uint256reRFT9 = await POWTokenFdwR6I.setDepreciationNumerator.call(uintNC9daQt, {from: accounts[3]});
//		const boolbryhcAE = await POWTokenFdwR6I.approve.call(addresskK2Yu9Y, uintAFE5prO, {from: accounts[1]});
//		await POWTokenFdwR6I.whenPaused.call({from: accounts[1]});
//		await POWTokenFdwR6I.onlyOwner.call({from: accounts[0]});
//		await POWTokenFdwR6I.pause.call({from: accounts[2]});

		assert.equal(uint256MwFhW1Y, BigInt("0"))
		await expect(POWTokenFdwR6I.claimIncome.call(addressdiuuhWI, uintC0N9t0U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokensQr040k = await POWToken.new({from: accounts[1]});
		const uintSifzlNV = BigInt("1885")
		const addressM4Klp2n = accounts[1]
		const uintDcmLMfU = BigInt("498")
//		const booleKeovQ = await POWTokensQr040k.transfer.call(addressM4Klp2n, uintSifzlNV, {from: accounts[2]});
//		const uint256SHo8Rct = await POWTokensQr040k.addHashRate.call(uintDcmLMfU, {from: accounts[2]});

		await expect(POWTokensQr040k.transfer.call(addressM4Klp2n, uintSifzlNV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenyGCqsHn = await POWToken.new({from: accounts[4]});
		const uintkc71FSs = BigInt("99")
		const addresslvULrpo = accounts[1]
		const bytefm2B3Ac = "0x0e0a1d0901131101091d1b1f130f190d0c09180a1e18150a111f0914190d1a03"
		const byteGO6gGDd = "0x0a1f20010106190120081b1c041110070d100f010303161d0a161b08130c040f"
		const uintbo5flXS = BigInt("216")
		const uintw0eZJUp = BigInt("1520")
		const uintrAa65yI = BigInt("413")
		const addressbjqoHo = accounts[2]
		const addressdAIshqL = accounts[4]
		const uintBToRUdg = BigInt("583")
		const addressHLCpo4Y = accounts[1]
		const uintFmnHmCH = BigInt("368")
		const addressTM7dFwa = accounts[3]
//		const addressMJSoQr = await POWTokenyGCqsHn.mint.call(addresslvULrpo, uintkc71FSs, {from: accounts[1]});
//		const addressmSYuDGu = await POWTokenyGCqsHn.permit.call(addressdAIshqL, addressbjqoHo, uintrAa65yI, uintw0eZJUp, uintbo5flXS, byteGO6gGDd, bytefm2B3Ac, {from: accounts[1]});
//		const addressyCoxSzR = await POWTokenyGCqsHn.claimReward.call(addressHLCpo4Y, uintBToRUdg, {from: accounts[2]});
//		const uint256pXzEKHx = await POWTokenyGCqsHn.getCurWorkingRate.call({from: accounts[0]});
//		const addressmpKWax = await POWTokenyGCqsHn.claimIncome.call(addressTM7dFwa, uintFmnHmCH, {from: accounts[1]});

		await expect(POWTokenyGCqsHn.mint.call(addresslvULrpo, uintkc71FSs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokensQr040k = await POWToken.new({from: accounts[1]});
		const uintp8QvCGR = BigInt("1821")
		const addresshcxr2sc = accounts[4]
//		const uint256InhAts = await POWTokensQr040k.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]});
//		const addressEdcV582 = await POWTokensQr040k.mint.call(addresshcxr2sc, uintp8QvCGR, {from: accounts[4]});
//		const uint256mdYScgS = await POWTokensQr040k.getHistoryWorkingRate.call({from: accounts[1]});

		await expect(POWTokensQr040k.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokensQr040k = await POWToken.new({from: accounts[1]});
		const uintayiSKd5 = BigInt("1226")
		const addressLzWlYMj = accounts[1]
		const addressBrpe8VX = accounts[1]
//		const boolk5HqYAT = await POWTokensQr040k.transferFrom.call(addressBrpe8VX, addressLzWlYMj, uintayiSKd5, {from: accounts[0]});
//		const uint256mdYScgS = await POWTokensQr040k.getHistoryWorkingRate.call({from: accounts[1]});

		await expect(POWTokensQr040k.transferFrom.call(addressBrpe8VX, addressLzWlYMj, uintayiSKd5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxk7xT5Q = await POWToken.new({from: accounts[1]});
		const byteU37TtTF = "0x141d10170e100202031e131111110b12070a09150711041d010e1e11161c1e0d"
		const byteHLZ7zX = "0x041b140b1019130e1512141a150f12141914121e170c10050d1a20070e101c0b"
		const uintyVC1zGU = BigInt("39")
		const uintcJaXEw1 = BigInt("1847")
		const uintyJkQ71I = BigInt("46")
		const addressrCVOIIj = accounts[3]
		const addressASTbqAt = accounts[3]
		const uintxlqOT6H = BigInt("90")
		const uintBBqOJul = BigInt("484")
		const addressOhWECf = "0x0000000000000000000000000000000000000001"
		const uintGSnB9Ua = BigInt("989")
//		const addressutVqnhs = await POWTokenxk7xT5Q.permit.call(addressASTbqAt, addressrCVOIIj, uintyJkQ71I, uintcJaXEw1, uintyVC1zGU, byteHLZ7zX, byteU37TtTF, {from: accounts[4]});
//		const uint256Jh9TJAx = await POWTokenxk7xT5Q.getCurWorkingRate.call({from: accounts[0]});
//		const uint256bSdD10v = await POWTokenxk7xT5Q.setElectricCharge.call(uintxlqOT6H, {from: accounts[1]});
//		const bool72vVR0 = await POWTokenxk7xT5Q.approve.call(addressOhWECf, uintBBqOJul, {from: accounts[2]});
//		const uint256ymCBvR2 = await POWTokenxk7xT5Q.setStakingRewardRatio.call(uintGSnB9Ua, {from: accounts[0]});

		await expect(POWTokenxk7xT5Q.permit.call(addressASTbqAt, addressrCVOIIj, uintyJkQ71I, uintcJaXEw1, uintyVC1zGU, byteHLZ7zX, byteU37TtTF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvJBFQeb = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCVcofDv = BigInt("1599")
		const addressdguOJBk = accounts[5]
		const uintDYDuE8i = BigInt("43")
		await POWTokenvJBFQeb.onlyOwner.call({from: accounts[4]});
		const addressuPppls4 = await POWTokenvJBFQeb.mint.call(addressdguOJBk, uintCVcofDv, {from: accounts[1]});
		const uint256DSBfdB = await POWTokenvJBFQeb.setStakingRewardRatio.call(uintDYDuE8i, {from: accounts[5]});
	});

	it('test for POWToken', async () => {
		const POWTokensQr040k = await POWToken.new({from: accounts[1]});
		const uintAvFInMF = BigInt("1972")
//		await POWTokensQr040k.updateIncomeRate.call({from: accounts[1]});
//		const uint256sheP25x = await POWTokensQr040k.notifyRewardAmount.call(uintAvFInMF, {from: accounts[2]});
//		const uint256MRWNtGr = await POWTokensQr040k.stakingRewardRate.call({from: accounts[4]});

		await expect(POWTokensQr040k.updateIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokensQr040k = await POWToken.new({from: accounts[1]});
		const uintHhZTqxM = BigInt("654")
		const addressEzE2Srf = accounts[2]
		const uinta1uOIQN = BigInt("1494")
		const addressJmg1aXl = accounts[5]
		const addressJDB8Pbj = accounts[5]
		const booljoo4QNK = await POWTokensQr040k.approve.call(addressEzE2Srf, uintHhZTqxM, {from: accounts[5]});
//		const boolRFp9uE1 = await POWTokensQr040k.transferFrom.call(addressJDB8Pbj, addressJmg1aXl, uinta1uOIQN, {from: accounts[4]});
//		const uint256MRWNtGr = await POWTokensQr040k.stakingRewardRate.call({from: accounts[4]});

		assert.equal(booljoo4QNK, true)
		await expect(POWTokensQr040k.transferFrom.call(addressJDB8Pbj, addressJmg1aXl, uinta1uOIQN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokensQr040k = await POWToken.new({from: accounts[1]});
		const uintRxcYNdB = BigInt("1467")
		const addressuRwofZ2 = accounts[4]
//		const addressKgYOyYN = await POWTokensQr040k.claimReward.call(addressuRwofZ2, uintRxcYNdB, {from: accounts[1]});
//		const uint256mdYScgS = await POWTokensQr040k.getHistoryWorkingRate.call({from: accounts[1]});

		await expect(POWTokensQr040k.claimReward.call(addressuRwofZ2, uintRxcYNdB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})