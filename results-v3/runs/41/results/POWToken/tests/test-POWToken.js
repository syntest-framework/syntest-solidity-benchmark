const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenE2Gem5u = await POWToken.new({from: accounts[4]});
		await POWTokenE2Gem5u.whenPaused.call({from: accounts[3]});
		await POWTokenE2Gem5u.whenPaused.call({from: accounts[4]});

		await expect(POWTokenE2Gem5u.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenq56YGbl = await POWToken.new({from: accounts[2]});
		const addressGQkMF3z = accounts[3]
		const uintEcDKYjq = BigInt("932")
		const addressiN4bI3P = "0x0000000000000000000000000000000000000001"
		const addressZyKBV4G = await POWTokenq56YGbl.setParamSetter.call(addressGQkMF3z, {from: accounts[4]});
		const uint256RyENG94 = await POWTokenq56YGbl.addHashRate.call(uintEcDKYjq, {from: "0x0000000000000000000000000000000000000001"});
		const booln821FTi = await POWTokenq56YGbl.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256DAxECxx = await POWTokenq56YGbl.lpStakingRewardRate.call({from: accounts[3]});
		const addressP9oOyKG = await POWTokenq56YGbl.setBtcParam.call(addressiN4bI3P, {from: accounts[1]});

		await expect(POWTokenq56YGbl.setParamSetter.call(addressGQkMF3z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken5rKZkk = await POWToken.new({from: accounts[3]});
		const uintSqnIIrU = BigInt("2013")
		const addresssEMKwK = accounts[4]
		const addressP05u9vZ = accounts[3]
		const uintoa17IJF = BigInt("1663")
		const uintwOhPP04 = BigInt("251")
		const uinttGoIVgi = BigInt("1335")
		const uintwv3teDO = BigInt("1594")
		const uintl1pdME5 = BigInt("386")
		const uint5Khi39 = BigInt("715")
		const addressqxClqKQ = accounts[0]
		const addressBfhx4gN = accounts[4]
		const addressmyVO1TQ = accounts[1]
		const addressytNUOO = accounts[4]
		const addressLjk5Gio = accounts[3]
		const addressySTvaxi = accounts[4]
		const addressvdVzDQy = accounts[5]
		const addresspGkd2L = accounts[0]
		const stringyfx1vc = "uH"
		const stringNmXpzan = "8H7RTM9KK3hTAnOwMMSIFc91J3yasnL1QK3H"
		const boolmaCSNFp = await POWToken5rKZkk.transferFrom.call(addressP05u9vZ, addresssEMKwK, uintSqnIIrU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kaXfXhm = await POWToken5rKZkk.remainingAmount.call({from: accounts[4]});
		const uint256h5eRlJc = await POWToken5rKZkk.setWorkingHashRate.call(uintoa17IJF, {from: accounts[1]});
		const stringSR0IZju = await POWToken5rKZkk.initialize.call(stringNmXpzan, stringyfx1vc, addresspGkd2L, addressvdVzDQy, addressySTvaxi, addressLjk5Gio, addressytNUOO, addressmyVO1TQ, addressBfhx4gN, addressqxClqKQ, uint5Khi39, uintl1pdME5, uintwv3teDO, uinttGoIVgi, uintwOhPP04, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWToken5rKZkk.transferFrom.call(addressP05u9vZ, addresssEMKwK, uintSqnIIrU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenTuf35aZ = await POWToken.new({from: accounts[3]});
		const uintIkdAdwe = BigInt("2016")
		const uint256ZsYmSS6 = await POWTokenTuf35aZ.setStartMiningTime.call(uintIkdAdwe, {from: accounts[4]});
		await POWTokenTuf35aZ.unpause.call({from: accounts[1]});

		await expect(POWTokenTuf35aZ.setStartMiningTime.call(uintIkdAdwe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenWZSqzQ9 = await POWToken.new({from: accounts[0]});
		await POWTokenWZSqzQ9.updateIncomeRate.call({from: accounts[2]});
		const uint256E1fP9BZ = await POWTokenWZSqzQ9.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
		const uint256LPltwd1 = await POWTokenWZSqzQ9.remainingAmount.call({from: accounts[3]});

		await expect(POWTokenWZSqzQ9.updateIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenWZSqzQ9 = await POWToken.new({from: accounts[0]});
		const uint256E1fP9BZ = await POWTokenWZSqzQ9.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
		const uint256LPltwd1 = await POWTokenWZSqzQ9.remainingAmount.call({from: accounts[3]});

		await expect(POWTokenWZSqzQ9.getIncomeBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenWZSqzQ9 = await POWToken.new({from: accounts[0]});
		const uintGxjL5Jh = BigInt("1733")
		const addressa6qaDVe = accounts[3]
		const booluxgyTQr = await POWTokenWZSqzQ9.transfer.call(addressa6qaDVe, uintGxjL5Jh, {from: accounts[4]});
		await POWTokenWZSqzQ9.updateIncomeRate.call({from: accounts[2]});
		const uint256E1fP9BZ = await POWTokenWZSqzQ9.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
		const uint256LPltwd1 = await POWTokenWZSqzQ9.remainingAmount.call({from: accounts[3]});
		const boolu5D8JDh = await POWTokenWZSqzQ9.paused.call({from: accounts[3]});

		await expect(POWTokenWZSqzQ9.transfer.call(addressa6qaDVe, uintGxjL5Jh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken8wG6i7 = await POWToken.new({from: accounts[5]});
		const uintAbyqNv3 = BigInt("1907")
		const addressxFZrpz3 = accounts[1]
		const uint256cIi19g1 = await POWToken8wG6i7.stakingRewardRate.call({from: accounts[2]});
		await POWToken8wG6i7.whenPaused.call({from: accounts[3]});
		const address5xkfzc = await POWToken8wG6i7.mint.call(addressxFZrpz3, uintAbyqNv3, {from: accounts[4]});
		await POWToken8wG6i7.updateIncomeRate.call({from: accounts[4]});
		const uint256GBj6Ab8 = await POWToken8wG6i7.getHistoryWorkingRate.call({from: accounts[5]});

		assert.equal(uint256cIi19g1, BigInt("0"))
		await expect(POWToken8wG6i7.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken5rKZkk = await POWToken.new({from: accounts[3]});
		const uintA5XMOCi = BigInt("251")
		const uintkdMeHra = BigInt("1335")
		const uintzb39LZu = BigInt("1594")
		const uint9UWUYf = BigInt("386")
		const uintAdEp4SK = BigInt("715")
		const addressl9vd3Zu = accounts[0]
		const addressmbNotze = accounts[4]
		const addressv5jT1Nt = accounts[1]
		const addressDOZhbFf = accounts[4]
		const addressTAlNEz6 = accounts[3]
		const addressi6QrCz7 = accounts[4]
		const addressOKVvRXY = accounts[5]
		const addressROv9eJC = accounts[0]
		const stringyfx1vc = "uH"
		const stringNmXpzan = "8H7RTM9KK3hTAnOwMMSIFc91J3yasnL1QK3H"
		const stringSR0IZju = await POWToken5rKZkk.initialize.call(stringNmXpzan, stringyfx1vc, addressROv9eJC, addressOKVvRXY, addressi6QrCz7, addressTAlNEz6, addressDOZhbFf, addressv5jT1Nt, addressmbNotze, addressl9vd3Zu, uintAdEp4SK, uint9UWUYf, uintzb39LZu, uintkdMeHra, uintA5XMOCi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWToken5rKZkk.initialize.call(stringNmXpzan, stringyfx1vc, addressROv9eJC, addressOKVvRXY, addressi6QrCz7, addressTAlNEz6, addressDOZhbFf, addressv5jT1Nt, addressmbNotze, addressl9vd3Zu, uintAdEp4SK, uint9UWUYf, uintzb39LZu, uintkdMeHra, uintA5XMOCi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken8wG6i7 = await POWToken.new({from: accounts[5]});
		const uintrDSBX8W = BigInt("821")
		const addressSMzSnBD = accounts[1]
		const uint256cIi19g1 = await POWToken8wG6i7.stakingRewardRate.call({from: accounts[2]});
		const booln9mr0uW = await POWToken8wG6i7.approve.call(addressSMzSnBD, uintrDSBX8W, {from: accounts[4]});
		await POWToken8wG6i7.whenPaused.call({from: accounts[3]});
		await POWToken8wG6i7.updateIncomeRate.call({from: accounts[4]});

		assert.equal(booln9mr0uW, true)
		assert.equal(uint256cIi19g1, BigInt("0"))
		await expect(POWToken8wG6i7.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken5rKZkk = await POWToken.new({from: accounts[3]});
		const uintFDA1ydk = BigInt("2005")
		const addressNoEu5H5 = accounts[7]
		const addresssZqCmyd = accounts[3]
		const uint256EYvDEMW = await POWToken5rKZkk.remainingAmount.call({from: accounts[2]});
		const boolmaCSNFp = await POWToken5rKZkk.transferFrom.call(addresssZqCmyd, addressNoEu5H5, uintFDA1ydk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256EYvDEMW, BigInt("0"))
		await expect(POWToken5rKZkk.transferFrom.call(addresssZqCmyd, addressNoEu5H5, uintFDA1ydk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken8wG6i7 = await POWToken.new({from: accounts[5]});
		const uintu9CpCLB = BigInt("1907")
		const addressF4bBLK = accounts[1]
		const uint256cIi19g1 = await POWToken8wG6i7.stakingRewardRate.call({from: accounts[2]});
		const address5xkfzc = await POWToken8wG6i7.mint.call(addressF4bBLK, uintu9CpCLB, {from: accounts[4]});
		await POWToken8wG6i7.updateIncomeRate.call({from: accounts[4]});

		assert.equal(uint256cIi19g1, BigInt("0"))
		await expect(POWToken8wG6i7.mint.call(addressF4bBLK, uintu9CpCLB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken8wG6i7 = await POWToken.new({from: accounts[5]});
		const uintzje2fyi = BigInt("1731")
		const addressKDaMvZD = accounts[2]
		const uintdemUFKg = BigInt("1907")
		const addressmelQMCW = accounts[1]
		const uint256cIi19g1 = await POWToken8wG6i7.stakingRewardRate.call({from: accounts[2]});
		const addressCVrR5z7 = await POWToken8wG6i7.claimIncome.call(addressKDaMvZD, uintzje2fyi, {from: accounts[4]});
		await POWToken8wG6i7.whenPaused.call({from: accounts[3]});
		const address5xkfzc = await POWToken8wG6i7.mint.call(addressmelQMCW, uintdemUFKg, {from: accounts[4]});
		await POWToken8wG6i7.updateIncomeRate.call({from: accounts[4]});

		assert.equal(uint256cIi19g1, BigInt("0"))
		await expect(POWToken8wG6i7.claimIncome.call(addressKDaMvZD, uintzje2fyi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenR7k1tf = await POWToken.new({from: accounts[3]});
		const uintJih3Cn5 = BigInt("1401")
		const addressdwlNPe = accounts[1]
		const uintrfNGlrW = BigInt("99")
		const boolNChiEHh = await POWTokenR7k1tf.paused.call({from: accounts[5]});
		const uint256mVteoAQ = await POWTokenR7k1tf.remainingAmount.call({from: accounts[5]});
		const uint256q9BeWYc = await POWTokenR7k1tf.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		const addressjkbO0ym = await POWTokenR7k1tf.inCaseTokensGetStuck.call(addressdwlNPe, uintJih3Cn5, {from: accounts[3]});
		const uint256cGO4Ipt = await POWTokenR7k1tf.setDepreciationNumerator.call(uintrfNGlrW, {from: accounts[4]});

		assert.equal(boolNChiEHh, false)
		assert.equal(uint256mVteoAQ, BigInt("0"))
		await expect(POWTokenR7k1tf.getIncomeBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken5rKZkk = await POWToken.new({from: accounts[3]});
		const bytere49Vkx = "0x150800161c100b010d030c1c1d101c181419120102160d05071505170401011e"
		const byteEoh1QKY = "0x011717171c03060d17150e0e050d09140d0f1319060202021f0c122002181502"
		const uintzXW0jxT = BigInt("167")
		const uintWncXuEq = BigInt("1962")
		const uintE1TjAmO = BigInt("738")
		const addressxU5GH6U = accounts[0]
		const addressUbnAFq8 = accounts[4]
		const uintg5MXHS = BigInt("841")
		const uintYCJx85X = BigInt("2005")
		const addresslFhDxRq = accounts[6]
		const addresslNlAltq = accounts[3]
		const addresstlm2iB8 = await POWToken5rKZkk.permit.call(addressUbnAFq8, addressxU5GH6U, uintE1TjAmO, uintWncXuEq, uintzXW0jxT, byteEoh1QKY, bytere49Vkx, {from: accounts[2]});
		const uint256n2lLsr = await POWToken5rKZkk.setStakingRewardRatio.call(uintg5MXHS, {from: accounts[1]});
		const boolmaCSNFp = await POWToken5rKZkk.transferFrom.call(addresslNlAltq, addresslFhDxRq, uintYCJx85X, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWToken5rKZkk.permit.call(addressUbnAFq8, addressxU5GH6U, uintE1TjAmO, uintWncXuEq, uintzXW0jxT, byteEoh1QKY, bytere49Vkx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken5rKZkk = await POWToken.new({from: accounts[3]});
		const uintkTzmkk5 = BigInt("254")
		const addressG0tSgsv = accounts[5]
		const addresso3HNtZj = accounts[1]
		const uintumECLTD = BigInt("2005")
		const addressWT802Dr = accounts[7]
		const addressQxOdsae = accounts[4]
		const uint256EYvDEMW = await POWToken5rKZkk.remainingAmount.call({from: accounts[2]});
		const uint256Q5EoyUt = await POWToken5rKZkk.getCurWorkingRate.call({from: accounts[0]});
		const boolN0UzAAI = await POWToken5rKZkk.transferFrom.call(addresso3HNtZj, addressG0tSgsv, uintkTzmkk5, {from: accounts[3]});
		const boolmaCSNFp = await POWToken5rKZkk.transferFrom.call(addressQxOdsae, addressWT802Dr, uintumECLTD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256EYvDEMW, BigInt("0"))
		await expect(POWToken5rKZkk.getCurWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenE2Gem5u = await POWToken.new({from: accounts[4]});
		const uint256zHiUFAL = await POWTokenE2Gem5u.getHistoryWorkingRate.call({from: accounts[3]});
		await POWTokenE2Gem5u.whenPaused.call({from: accounts[4]});

		await expect(POWTokenE2Gem5u.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenr7D6LJr = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uint2565XPoeZ = await POWTokenr7D6LJr.remainingAmount.call({from: accounts[1]});
		const uint256axXl4m = await POWTokenr7D6LJr.remainingAmount.call({from: accounts[3]});
		const uint256wIzftAO = await POWTokenr7D6LJr.stakingRewardRate.call({from: accounts[0]});
	});

	it('test for POWToken', async () => {
		const POWToken5rKZkk = await POWToken.new({from: accounts[3]});
		const uintsM3arWn = BigInt("2005")
		const addressqJfCVZj = accounts[6]
		const addressDrVmmbh = accounts[3]
		const uint256KgG4YmQ = await POWToken5rKZkk.lpStakingRewardRate.call({from: accounts[2]});
		const boolmaCSNFp = await POWToken5rKZkk.transferFrom.call(addressDrVmmbh, addressqJfCVZj, uintsM3arWn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KgG4YmQ, BigInt("0"))
		await expect(POWToken5rKZkk.transferFrom.call(addressDrVmmbh, addressqJfCVZj, uintsM3arWn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken5rKZkk = await POWToken.new({from: accounts[3]});
		const uintVlML4a1 = BigInt("674")
		const addressTnD0LQE = accounts[2]
		const addresseFuUkd0 = await POWToken5rKZkk.claimReward.call(addressTnD0LQE, uintVlML4a1, {from: accounts[2]});
		const uint256EYvDEMW = await POWToken5rKZkk.remainingAmount.call({from: accounts[2]});

		await expect(POWToken5rKZkk.claimReward.call(addressTnD0LQE, uintVlML4a1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})