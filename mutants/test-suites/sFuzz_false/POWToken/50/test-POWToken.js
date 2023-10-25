const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenyWdWfG3 = await POWToken.new({from: accounts[4]});
		const uintjrertgq = BigInt("940")
		const addressmZz21pc = accounts[2]
		const uintLXacQD = BigInt("328")
		const addresspgIN0lT = accounts[2]
		const uintKzTv9jv = BigInt("276")
//		const addressxeYzpz = await POWTokenyWdWfG3.claimReward.call(addressmZz21pc, uintjrertgq, {from: accounts[0]});
//		const boolM3LSM5y = await POWTokenyWdWfG3.approve.call(addresspgIN0lT, uintLXacQD, {from: accounts[2]});
//		const uint256wDTefgu = await POWTokenyWdWfG3.setMinerPoolFeeNumerator.call(uintKzTv9jv, {from: accounts[2]});

		await expect(POWTokenyWdWfG3.claimReward.call(addressmZz21pc, uintjrertgq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken4SuGtN = await POWToken.new({from: accounts[0]});
		const uintGL0U4Ua = BigInt("1139")
		const uintDFKV2ym = BigInt("658")
//		const uint256nMvf4DF = await POWToken4SuGtN.notifyRewardAmount.call(uintGL0U4Ua, {from: accounts[3]});
//		await POWToken4SuGtN.updateIncomeRate.call({from: accounts[5]});
//		const uint256BeO5pN4 = await POWToken4SuGtN.setDepreciationNumerator.call(uintDFKV2ym, {from: accounts[0]});
//		await POWToken4SuGtN.unpause.call({from: accounts[1]});
//		const uint256xlSHmw4 = await POWToken4SuGtN.stakingRewardRate.call({from: accounts[1]});

		await expect(POWToken4SuGtN.notifyRewardAmount.call(uintGL0U4Ua, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlCT2w5Q = await POWToken.new({from: accounts[2]});
		const addressGbVJJSe = "0x0000000000000000000000000000000000000001"
		const uint256QH0MMU8 = await POWTokenlCT2w5Q.stakingRewardRate.call({from: accounts[3]});
//		await POWTokenlCT2w5Q.whenPaused.call({from: accounts[2]});
//		const addressTczZmCF = await POWTokenlCT2w5Q.setBtcParam.call(addressGbVJJSe, {from: accounts[4]});
//		const uint256Fca2jch = await POWTokenlCT2w5Q.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256QH0MMU8, BigInt("0"))
		await expect(POWTokenlCT2w5Q.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenegbfOis = await POWToken.new({from: accounts[2]});
		const uintae27dRl = BigInt("692")
		const uintycWB319 = BigInt("485")
		const uintMi0668k = BigInt("640")
		const uintZvHT2t5 = BigInt("895")
		const uintnFLbBkS = BigInt("1403")
		const addressahAind2 = accounts[0]
		const addressL2Wvf2c = accounts[4]
		const addressnEeVZmf = accounts[3]
		const addressRJ4PmS0 = accounts[4]
		const addressE0qGNg0 = accounts[4]
		const addressguLQdwH = accounts[1]
		const addressK8NtL8U = accounts[1]
		const addressCvKPCyN = accounts[4]
		const strings747C4 = "CXQDg725WO3dyAgomAMwVdejSQfDv6orQO09sS4xBl8FtQeo"
		const stringnvNXBXs = "tYACK1"
		const uintVR6hICq = BigInt("1120")
		const addressuFcd339 = accounts[1]
		const addressbGrE0HY = "0x0000000000000000000000000000000000000001"
		const uintmQCoPA = BigInt("1045")
		const addressT7rJUhI = "0x0000000000000000000000000000000000000001"
//		const strings9fCl3Y = await POWTokenegbfOis.initialize.call(stringnvNXBXs, strings747C4, addressCvKPCyN, addressK8NtL8U, addressguLQdwH, addressE0qGNg0, addressRJ4PmS0, addressnEeVZmf, addressL2Wvf2c, addressahAind2, uintnFLbBkS, uintZvHT2t5, uintMi0668k, uintycWB319, uintae27dRl, {from: accounts[5]});
//		const uint256NPXaXWU = await POWTokenegbfOis.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
//		const boolY3EenZe = await POWTokenegbfOis.transferFrom.call(addressbGrE0HY, addressuFcd339, uintVR6hICq, {from: accounts[1]});
//		const addresshzG22V7 = await POWTokenegbfOis.inCaseTokensGetStuck.call(addressT7rJUhI, uintmQCoPA, {from: accounts[2]});

		await expect(POWTokenegbfOis.initialize.call(stringnvNXBXs, strings747C4, addressCvKPCyN, addressK8NtL8U, addressguLQdwH, addressE0qGNg0, addressRJ4PmS0, addressnEeVZmf, addressL2Wvf2c, addressahAind2, uintnFLbBkS, uintZvHT2t5, uintMi0668k, uintycWB319, uintae27dRl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken6aD1yc = await POWToken.new({from: accounts[2]});
		const uintdRZxRG9 = BigInt("1167")
		const uintVBP38wX = BigInt("1843")
		const addressq4Y85WR = accounts[3]
//		const uint256gThTLr5 = await POWToken6aD1yc.setWorkingHashRate.call(uintdRZxRG9, {from: accounts[0]});
//		await POWToken6aD1yc.whenPaused.call({from: accounts[0]});
//		const booln4ydH8E = await POWToken6aD1yc.transfer.call(addressq4Y85WR, uintVBP38wX, {from: accounts[5]});
//		const uint256YzHMXRE = await POWToken6aD1yc.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		await expect(POWToken6aD1yc.setWorkingHashRate.call(uintdRZxRG9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxIqRHC = await POWToken.new({from: accounts[5]});
		const uintrLG74en = BigInt("602")
		const addresspbBdxTj = accounts[2]
		const uintu7sdsqC = BigInt("94")
		const addressTMKgwQz = accounts[4]
		const addresswoLIBCa = accounts[2]
//		const addresssBpRRI1 = await POWTokenxIqRHC.claimIncome.call(addresspbBdxTj, uintrLG74en, {from: accounts[4]});
//		const booliZ9W0Fr = await POWTokenxIqRHC.transferFrom.call(addresswoLIBCa, addressTMKgwQz, uintu7sdsqC, {from: accounts[2]});

		await expect(POWTokenxIqRHC.claimIncome.call(addresspbBdxTj, uintrLG74en, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEN5Oj9t = await POWToken.new({from: accounts[4]});
		const bytebQ5nsgW = "0x0d0b14120e0312050b081715171510110b161903131b151e091c0a0c1902101e"
		const byteVJ6kRpy = "0x0e2007100b160e121e0d08020702111c011a051b130c050f010c030b04031e03"
		const uintPYxMKsa = BigInt("115")
		const uintjPweLT = BigInt("1031")
		const uintnQ7jjAA = BigInt("1441")
		const addressH9iklA6 = accounts[3]
		const addressKHw3n3M = accounts[3]
		const uintbi84NVY = BigInt("1726")
		const addressNltT4Y7 = accounts[2]
//		const addressE0eJBDA = await POWTokenEN5Oj9t.permit.call(addressKHw3n3M, addressH9iklA6, uintnQ7jjAA, uintjPweLT, uintPYxMKsa, byteVJ6kRpy, bytebQ5nsgW, {from: accounts[2]});
//		await POWTokenEN5Oj9t.pause.call({from: accounts[2]});
//		const uint256XgsJ9X8 = await POWTokenEN5Oj9t.stakingRewardRate.call({from: accounts[3]});
//		const addressjL1anI9 = await POWTokenEN5Oj9t.claimIncome.call(addressNltT4Y7, uintbi84NVY, {from: accounts[3]});

		await expect(POWTokenEN5Oj9t.permit.call(addressKHw3n3M, addressH9iklA6, uintnQ7jjAA, uintjPweLT, uintPYxMKsa, byteVJ6kRpy, bytebQ5nsgW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlCT2w5Q = await POWToken.new({from: accounts[2]});
		const uintwmRZDog = BigInt("360")
		const addresss8tEiDZ = accounts[2]
		const addressEYgBPCG = "0x0000000000000000000000000000000000000000"
		const uint256kHDhoho = await POWTokenlCT2w5Q.lpStakingRewardRate.call({from: accounts[0]});
		const uint256QH0MMU8 = await POWTokenlCT2w5Q.stakingRewardRate.call({from: accounts[3]});
		const boolh7g8jKJ = await POWTokenlCT2w5Q.approve.call(addresss8tEiDZ, uintwmRZDog, {from: accounts[2]});
//		const addressTczZmCF = await POWTokenlCT2w5Q.setBtcParam.call(addressEYgBPCG, {from: accounts[4]});
//		const uint256WOlcT37 = await POWTokenlCT2w5Q.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
//		const uint256Fca2jch = await POWTokenlCT2w5Q.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokenlCT2w5Q.updateIncomeRate.call({from: accounts[0]});

		assert.equal(boolh7g8jKJ, true)
		assert.equal(uint256QH0MMU8, BigInt("0"))
		assert.equal(uint256kHDhoho, BigInt("0"))
		await expect(POWTokenlCT2w5Q.setBtcParam.call(addressEYgBPCG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlCT2w5Q = await POWToken.new({from: accounts[2]});
		const uintb4lS9Ve = BigInt("539")
		const addresstU1rHyS = accounts[0]
		const addressrfVlyY = "0x0000000000000000000000000000000000000000"
		const uint256QH0MMU8 = await POWTokenlCT2w5Q.stakingRewardRate.call({from: accounts[3]});
//		const addresspaCToyj = await POWTokenlCT2w5Q.mint.call(addresstU1rHyS, uintb4lS9Ve, {from: accounts[3]});
//		const addressTczZmCF = await POWTokenlCT2w5Q.setBtcParam.call(addressrfVlyY, {from: accounts[4]});
//		const uint256Fca2jch = await POWTokenlCT2w5Q.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256QH0MMU8, BigInt("0"))
		await expect(POWTokenlCT2w5Q.mint.call(addresstU1rHyS, uintb4lS9Ve, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlCT2w5Q = await POWToken.new({from: accounts[2]});
		const uint256QH0MMU8 = await POWTokenlCT2w5Q.stakingRewardRate.call({from: accounts[3]});
//		const uint256Fca2jch = await POWTokenlCT2w5Q.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256QH0MMU8, BigInt("0"))
		await expect(POWTokenlCT2w5Q.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlCT2w5Q = await POWToken.new({from: accounts[2]});
		const addresskwwzYyc = "0x00000000000000000000000000000000000000-1"
//		const addressTczZmCF = await POWTokenlCT2w5Q.setBtcParam.call(addresskwwzYyc, {from: accounts[4]});
//		const uint256Fca2jch = await POWTokenlCT2w5Q.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenlCT2w5Q.setBtcParam.call(addresskwwzYyc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlCT2w5Q = await POWToken.new({from: accounts[2]});
		const uintPuLjz8G = BigInt("1600")
		const addressbGVJXf3 = accounts[4]
		const addressVJS9dt6 = accounts[1]
		const addressdnXXMyf = "0x0000000000000000000000000000000000000000"
		const uintWbXgdI = BigInt("891")
		const addressj7CRGbQ = accounts[1]
		const uint256QH0MMU8 = await POWTokenlCT2w5Q.stakingRewardRate.call({from: accounts[3]});
//		const boolcY3eqX = await POWTokenlCT2w5Q.transferFrom.call(addressVJS9dt6, addressbGVJXf3, uintPuLjz8G, {from: accounts[0]});
//		const addressTczZmCF = await POWTokenlCT2w5Q.setBtcParam.call(addressdnXXMyf, {from: accounts[4]});
//		const address6rmpNd = await POWTokenlCT2w5Q.claimIncome.call(addressj7CRGbQ, uintWbXgdI, {from: accounts[0]});
//		const uint256Fca2jch = await POWTokenlCT2w5Q.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256QH0MMU8, BigInt("0"))
		await expect(POWTokenlCT2w5Q.transferFrom.call(addressVJS9dt6, addressbGVJXf3, uintPuLjz8G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlCT2w5Q = await POWToken.new({from: accounts[2]});
		const uint256QH0MMU8 = await POWTokenlCT2w5Q.stakingRewardRate.call({from: accounts[3]});
//		const uint256gRmbgMi = await POWTokenlCT2w5Q.getIncomeBTCInWeiPerSec.call({from: accounts[0]});

		assert.equal(uint256QH0MMU8, BigInt("0"))
		await expect(POWTokenlCT2w5Q.getIncomeBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDxFrV4d = await POWToken.new({from: accounts[0]});
		const uintfZVxEi = BigInt("1326")
		const uintCqT5S3s = BigInt("573")
		const uintBcpaJz3 = BigInt("1201")
		const uintebfewyM = BigInt("1401")
		const uintoTv5HXu = BigInt("1549")
		const addressQpWpY9d = accounts[1]
		const addressU4tAMCt = accounts[4]
		const addressu7u205A = accounts[1]
		const addressF54Rti8 = accounts[4]
		const addressF190BcF = accounts[4]
		const addressIdSjszU = accounts[3]
		const addressiRbMjEX = accounts[0]
		const addressmZ24C7b = accounts[2]
		const stringxAbprWj = "w4T1wnyofMuEHWg53jAAksgOafHyJJhrAz92jLjF"
		const stringI2iF92 = "iQY2tXKYnMphqrpLYPcGTkd"
		const uint256dAEENNz = await POWTokenDxFrV4d.lpStakingRewardRate.call({from: accounts[2]});
//		const uint256unMvHn = await POWTokenDxFrV4d.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
//		const stringTBYUfam = await POWTokenDxFrV4d.initialize.call(stringI2iF92, stringxAbprWj, addressmZ24C7b, addressiRbMjEX, addressIdSjszU, addressF190BcF, addressF54Rti8, addressu7u205A, addressU4tAMCt, addressQpWpY9d, uintoTv5HXu, uintebfewyM, uintBcpaJz3, uintCqT5S3s, uintfZVxEi, {from: accounts[1]});

		assert.equal(uint256dAEENNz, BigInt("0"))
		await expect(POWTokenDxFrV4d.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlCT2w5Q = await POWToken.new({from: accounts[2]});
//		await POWTokenlCT2w5Q.updateIncomeRate.call({from: accounts[0]});
//		const uint256QH0MMU8 = await POWTokenlCT2w5Q.stakingRewardRate.call({from: accounts[3]});

		await expect(POWTokenlCT2w5Q.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenlCT2w5Q = await POWToken.new({from: accounts[2]});
		const uint256mE52evp = await POWTokenlCT2w5Q.remainingAmount.call({from: accounts[1]});
		const uint256QH0MMU8 = await POWTokenlCT2w5Q.stakingRewardRate.call({from: accounts[3]});

		assert.equal(uint256QH0MMU8, BigInt("0"))
		assert.equal(uint256mE52evp, BigInt("0"))
	});

	it('test for POWToken', async () => {
		const POWTokenFchUBZF = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWLUm56 = accounts[3]
		await POWTokenFchUBZF.whenNotPaused.call({from: accounts[0]});
		const uint256fIz7V6x = await POWTokenFchUBZF.stakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
		const address5jAJ5W = await POWTokenFchUBZF.setBtcParam.call(addressWLUm56, {from: accounts[0]});
		await POWTokenFchUBZF.whenPaused.call({from: accounts[5]});
	});

	it('test for POWToken', async () => {
		const POWTokenvl9apfv = await POWToken.new({from: accounts[2]});
		const uint3Kz0yA = BigInt("239")
		const addressybMZNnE = accounts[0]
		const uintBQBkNz = BigInt("1257")
		const addressMqfewUr = accounts[4]
		const uintWPoxmB7 = BigInt("172")
		const addressXjKRVe = accounts[1]
		const uinthIP2yuQ = BigInt("1032")
//		const boolxCIqvu0 = await POWTokenvl9apfv.transfer.call(addressybMZNnE, uint3Kz0yA, {from: accounts[1]});
//		const addresswNcEjmU = await POWTokenvl9apfv.claimReward.call(addressMqfewUr, uintBQBkNz, {from: accounts[3]});
//		const boolVni28zJ = await POWTokenvl9apfv.approve.call(addressXjKRVe, uintWPoxmB7, {from: accounts[4]});
//		const uint256LQFEpx9 = await POWTokenvl9apfv.setWorkingHashRate.call(uinthIP2yuQ, {from: accounts[3]});
//		await POWTokenvl9apfv.pause.call({from: accounts[1]});

		await expect(POWTokenvl9apfv.transfer.call(addressybMZNnE, uint3Kz0yA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenAVE9EVi = await POWToken.new({from: accounts[5]});
		const uintN56hys = BigInt("356")
		const addressIci1qDM = accounts[1]
		const byteyJOLgw = "0x0f0a0b0a0b010a0e02160c1805011e1503161d080f0213031a1a141d10081218"
		const byteiFA1mid = "0x1a0f0d17121b141c03040b0d100e0e0c040117121e0f1a15180916031c04151c"
		const uintvjkrkI2 = BigInt("119")
		const uintv5KYT46 = BigInt("1663")
		const uintUWPRQl4 = BigInt("114")
		const addressMdDg9wq = "0x0000000000000000000000000000000000000001"
		const addressmpYB8YM = "0x0000000000000000000000000000000000000001"
		const boolPmy3VG = await POWTokenAVE9EVi.paused.call({from: accounts[5]});
//		const addressvsS0K2F = await POWTokenAVE9EVi.mint.call(addressIci1qDM, uintN56hys, {from: accounts[4]});
//		const addressQW4bBrS = await POWTokenAVE9EVi.permit.call(addressmpYB8YM, addressMdDg9wq, uintUWPRQl4, uintv5KYT46, uintvjkrkI2, byteiFA1mid, byteyJOLgw, {from: accounts[1]});

		assert.equal(boolPmy3VG, false)
		await expect(POWTokenAVE9EVi.mint.call(addressIci1qDM, uintN56hys, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})