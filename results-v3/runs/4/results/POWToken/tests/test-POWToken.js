const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenEQbvDUh = await POWToken.new({from: accounts[3]});
		const addressTLevb7 = accounts[2]
		const uintYBGdzgW = BigInt("1718")
		await POWTokenEQbvDUh.whenNotPaused.call({from: accounts[1]});
		await POWTokenEQbvDUh.updateIncomeRate.call({from: accounts[4]});
		const addressRnq30m = await POWTokenEQbvDUh.transferOwnership.call(addressTLevb7, {from: accounts[2]});
		const uint256G2xy5wk = await POWTokenEQbvDUh.remainingAmount.call({from: accounts[1]});
		const uint256It03GXN = await POWTokenEQbvDUh.setStartMiningTime.call(uintYBGdzgW, {from: accounts[1]});

		await expect(POWTokenEQbvDUh.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvUtc3EQ = await POWToken.new({from: accounts[2]});
		const uintrxaEX4D = BigInt("569")
		const addressOp09Kn5 = accounts[1]
		const uintv2svUxM = BigInt("1124")
		const uintkmSQ0Tz = BigInt("1110")
		const uintS4mfAGg = BigInt("1539")
		const uintVS6FUZi = BigInt("1326")
		const uintDzYza49 = BigInt("1164")
		const uintJLoU3H1 = BigInt("239")
		const addressXWonKn = accounts[2]
		const addressp5dH0f = "0x0000000000000000000000000000000000000001"
		const addressatFFRhM = accounts[0]
		const addressgSAasZI = accounts[1]
		const addressNVqgQCV = accounts[4]
		const addressTLBEfKc = accounts[0]
		const addressm2xEeJt = accounts[5]
		const addressY2Ecksb = accounts[1]
		const stringLJiTHIa = "fLpMhT2ucx7S3AkgEHYXrM5Z0k"
		const stringcr2INRM = "LybM7czEVZVgCMv6PqtTFKqRTXrHTHFfRKMkjGocII8eGCRlcxrldyekmqVicpw68IDnwabB5crRu2nxvp"
		const addressBqY2Agk = await POWTokenvUtc3EQ.mint.call(addressOp09Kn5, uintrxaEX4D, {from: accounts[5]});
		const uint256BRpaeYC = await POWTokenvUtc3EQ.setStakingRewardRatio.call(uintv2svUxM, {from: "0x0000000000000000000000000000000000000001"});
		const stringkCDu2t = await POWTokenvUtc3EQ.initialize.call(stringcr2INRM, stringLJiTHIa, addressY2Ecksb, addressm2xEeJt, addressTLBEfKc, addressNVqgQCV, addressgSAasZI, addressatFFRhM, addressp5dH0f, addressXWonKn, uintJLoU3H1, uintDzYza49, uintVS6FUZi, uintS4mfAGg, uintkmSQ0Tz, {from: accounts[0]});

		await expect(POWTokenvUtc3EQ.mint.call(addressOp09Kn5, uintrxaEX4D, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQExTDaT = await POWToken.new({from: accounts[3]});
		const uintV3HGul8 = BigInt("1217")
		const addressK131wkm = accounts[4]
		const uintru3Dzax = BigInt("1227")
		const addressyDVonxZ = await POWTokenQExTDaT.claimReward.call(addressK131wkm, uintV3HGul8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XzdMMGO = await POWTokenQExTDaT.setStakingRewardRatio.call(uintru3Dzax, {from: accounts[3]});

		await expect(POWTokenQExTDaT.claimReward.call(addressK131wkm, uintV3HGul8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken728YFw = await POWToken.new({from: accounts[0]});
		const uintftaO3nW = BigInt("2029")
		const addressWj8PTEZ = accounts[2]
		await POWToken728YFw.updateIncomeRate.call({from: accounts[0]});
		const uint256JJojqX6 = await POWToken728YFw.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		const boolGFhvv0n = await POWToken728YFw.transfer.call(addressWj8PTEZ, uintftaO3nW, {from: accounts[2]});
		await POWToken728YFw.pause.call({from: accounts[5]});
		const uint256h5WwEa8 = await POWToken728YFw.getCurWorkingRate.call({from: accounts[4]});

		await expect(POWToken728YFw.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokensIzQldo = await POWToken.new({from: accounts[3]});
		const uintXaheoMP = BigInt("464")
		const uintNRckjY = BigInt("1505")
		const uintwAsMiXw = BigInt("634")
		const uintfYY4Q0H = BigInt("1006")
		const uintmpPNjHY = BigInt("476")
		const uintJdZal91 = BigInt("1134")
		const addressZ4GvN57 = "0x0000000000000000000000000000000000000001"
		const addressDxuaHP9 = accounts[2]
		const addressmezg4F = accounts[4]
		const addressujy1tig = accounts[3]
		const addresstSFVWF = accounts[2]
		const addressz3DaQoC = accounts[3]
		const addresswxmDPWA = accounts[2]
		const addressM3wEM9B = accounts[2]
		const stringeOQreFa = "1Jo0zkBamY9VfKYqj32ksVzdA6YAADOLCsOx6xvoWYj3SL4g5OWj6wXZGxfMvR"
		const string0Bruxd = "jAxOXbCjGZnDHctCOgC3uCLGLL3PG9hGAEhKi8qPBvmVbwpTK47X9xyuyx7lfodkPtrdMvcoWLRlmIRtfBnsqiY"
		const uinthO44fVR = BigInt("592")
		const addressVVMj6Ab = accounts[0]
		const addressEaMoiEu = accounts[0]
		const uintPZD7u1z = BigInt("1628")
		const uint256p9RZAaD = await POWTokensIzQldo.setElectricCharge.call(uintXaheoMP, {from: accounts[3]});
		const stringZyWylw = await POWTokensIzQldo.initialize.call(string0Bruxd, stringeOQreFa, addressM3wEM9B, addresswxmDPWA, addressz3DaQoC, addresstSFVWF, addressujy1tig, addressmezg4F, addressDxuaHP9, addressZ4GvN57, uintJdZal91, uintmpPNjHY, uintfYY4Q0H, uintwAsMiXw, uintNRckjY, {from: accounts[3]});
		const boolqigupmw = await POWTokensIzQldo.transferFrom.call(addressEaMoiEu, addressVVMj6Ab, uinthO44fVR, {from: accounts[1]});
		const uint256SLad5ae = await POWTokensIzQldo.getCurWorkingRate.call({from: accounts[5]});
		const uint256YCn0yG4 = await POWTokensIzQldo.setElectricCharge.call(uintPZD7u1z, {from: accounts[4]});
		const uint256H8Z0Rn = await POWTokensIzQldo.remainingAmount.call({from: accounts[0]});

		await expect(POWTokensIzQldo.setElectricCharge.call(uintXaheoMP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokentbSYBc = await POWToken.new({from: accounts[0]});
		const uintmSpdNGL = BigInt("1122")
		const address4SLbQa = accounts[3]
		const uintzdS9JwZ = BigInt("737")
		const boolHF0TGcQ = await POWTokentbSYBc.approve.call(address4SLbQa, uintmSpdNGL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sqEb2sl = await POWTokentbSYBc.setDepreciationNumerator.call(uintzdS9JwZ, {from: accounts[2]});

		assert.equal(boolHF0TGcQ, true)
		await expect(POWTokentbSYBc.setDepreciationNumerator.call(uintzdS9JwZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenPGPm6rO = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintU6TkoHo = BigInt("1922")
		const addresstezIjsu = accounts[1]
		const uintF715GIe = BigInt("1833")
		const addresshr4felF = await POWTokenPGPm6rO.mint.call(addresstezIjsu, uintU6TkoHo, {from: accounts[1]});
		const uint256fsUZKYh = await POWTokenPGPm6rO.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		await POWTokenPGPm6rO.unpause.call({from: accounts[0]});
		const uint25610LcDH = await POWTokenPGPm6rO.setWorkingHashRate.call(uintF715GIe, {from: accounts[1]});
		const uint256nbeebu = await POWTokenPGPm6rO.getIncomeBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for POWToken', async () => {
		const POWTokenVIitgsU = await POWToken.new({from: accounts[0]});
		const uintvl752GM = BigInt("1884")
		const addressQsEa4YZ = accounts[5]
		const uintC8RXG1s = BigInt("1346")
		const addressYTFX7AX = await POWTokenVIitgsU.claimIncome.call(addressQsEa4YZ, uintvl752GM, {from: accounts[4]});
		const boolAFm06Y = await POWTokenVIitgsU.paused.call({from: accounts[0]});
		await POWTokenVIitgsU.pause.call({from: accounts[1]});
		const uint256kltpcL = await POWTokenVIitgsU.setMinerPoolFeeNumerator.call(uintC8RXG1s, {from: accounts[0]});

		await expect(POWTokenVIitgsU.claimIncome.call(addressQsEa4YZ, uintvl752GM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenc7F6rJ6 = await POWToken.new({from: accounts[3]});
		const uintfwfFZz = BigInt("159")
		const uintoDFoPyX = BigInt("1096")
		const addressgbcEdeR = accounts[1]
		const uint256DeNZeKK = await POWTokenc7F6rJ6.notifyRewardAmount.call(uintfwfFZz, {from: "0x0000000000000000000000000000000000000001"});
		const boolWXbkVkj = await POWTokenc7F6rJ6.approve.call(addressgbcEdeR, uintoDFoPyX, {from: accounts[2]});

		await expect(POWTokenc7F6rJ6.notifyRewardAmount.call(uintfwfFZz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokentbSYBc = await POWToken.new({from: accounts[0]});
		const uintYvFo4F = BigInt("737")
		const uint256yKblLO = await POWTokentbSYBc.stakingRewardRate.call({from: accounts[0]});
		const uint256sqEb2sl = await POWTokentbSYBc.setDepreciationNumerator.call(uintYvFo4F, {from: accounts[2]});

		assert.equal(uint256yKblLO, BigInt("0"))
		await expect(POWTokentbSYBc.setDepreciationNumerator.call(uintYvFo4F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvUtc3EQ = await POWToken.new({from: accounts[2]});
		const byteUY6J0Q2 = "0x10190b131618121f1a0e0d0e1f080b0f161c2008091e19061207040c030c1007"
		const byte3mwUV6 = "0x060d061b1d121d0f0918191e1d18080a1f0b0a02180d01131b15060a16180618"
		const uintmndIkfC = BigInt("199")
		const uintA8Unn62 = BigInt("1478")
		const uint9DyUHr = BigInt("917")
		const addressCY61lkT = accounts[0]
		const addressTj2qzjD = accounts[3]
		const uintTlggEtG = BigInt("569")
		const addressHOCCGcL = accounts[1]
		const uintPprvJXD = BigInt("860")
		const uintyELjZXq = BigInt("1110")
		const uintmMUkPq = BigInt("1539")
		const uintDTtatia = BigInt("1326")
		const uintYGyukx3 = BigInt("1164")
		const uintVBHNXgh = BigInt("239")
		const addressd4OyvcM = accounts[2]
		const addressSpVBJKC = "0x0000000000000000000000000000000000000001"
		const addressVQa1tYR = accounts[0]
		const addressvZVUbk2 = accounts[1]
		const addressSps8QTH = accounts[4]
		const addressCyyr9j4 = accounts[0]
		const addressvnBF6h = accounts[5]
		const addressg2eyGM4 = accounts[1]
		const stringLJiTHIa = "fLpMhT2ucx7S3AkgEHYXrM5Z0k"
		const stringcr2INRM = "LybM7czEVZVgCMv6PqtTFKqRTXrHTHFfRKMkjGocII8eGCRlcxrldyekmqVicpw68IDnwabB5crRu2nxvp"
		const addressYB4O2uw = await POWTokenvUtc3EQ.permit.call(addressTj2qzjD, addressCY61lkT, uint9DyUHr, uintA8Unn62, uintmndIkfC, byte3mwUV6, byteUY6J0Q2, {from: accounts[4]});
		const addressBqY2Agk = await POWTokenvUtc3EQ.mint.call(addressHOCCGcL, uintTlggEtG, {from: accounts[5]});
		const uint256BRpaeYC = await POWTokenvUtc3EQ.setStakingRewardRatio.call(uintPprvJXD, {from: "0x0000000000000000000000000000000000000001"});
		const stringkCDu2t = await POWTokenvUtc3EQ.initialize.call(stringcr2INRM, stringLJiTHIa, addressg2eyGM4, addressvnBF6h, addressCyyr9j4, addressSps8QTH, addressvZVUbk2, addressVQa1tYR, addressSpVBJKC, addressd4OyvcM, uintVBHNXgh, uintYGyukx3, uintDTtatia, uintmMUkPq, uintyELjZXq, {from: accounts[0]});

		await expect(POWTokenvUtc3EQ.permit.call(addressTj2qzjD, addressCY61lkT, uint9DyUHr, uintA8Unn62, uintmndIkfC, byte3mwUV6, byteUY6J0Q2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenmQgr2jW = await POWToken.new({from: accounts[1]});
		const uintTUD7l2S = BigInt("1584")
		const uint256GSQzcui = await POWTokenmQgr2jW.getCurWorkingRate.call({from: accounts[5]});
		const uint256FtSvK4a = await POWTokenmQgr2jW.setWorkingHashRate.call(uintTUD7l2S, {from: accounts[1]});
		const uint256i0avrqA = await POWTokenmQgr2jW.stakingRewardRate.call({from: accounts[3]});

		await expect(POWTokenmQgr2jW.getCurWorkingRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvUtc3EQ = await POWToken.new({from: accounts[2]});
		const uintGh3ZvR7 = BigInt("569")
		const addresso16lrO = accounts[2]
		const uintpT2qlql = BigInt("1124")
		const boolf4Cw8Ku = await POWTokenvUtc3EQ.paused.call({from: accounts[0]});
		const addressBqY2Agk = await POWTokenvUtc3EQ.mint.call(addresso16lrO, uintGh3ZvR7, {from: accounts[5]});
		const uint256BRpaeYC = await POWTokenvUtc3EQ.setStakingRewardRatio.call(uintpT2qlql, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolf4Cw8Ku, false)
		await expect(POWTokenvUtc3EQ.mint.call(addresso16lrO, uintGh3ZvR7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken728YFw = await POWToken.new({from: accounts[0]});
		const uintgm3irgF = BigInt("1786")
		const uintCfSvdqJ = BigInt("2029")
		const addresscOWYeh8 = accounts[2]
		const bytekx5XEyp = "0x041a03041b08161e1214181d0a1a110c0a170c1c13151a0210020a0c1301170f"
		const byteOEPY9jf = "0x10121c1d0609170a1815062011031d140a010d1e130a10030d191210111f010a"
		const uinteCwfb7R = BigInt("245")
		const uintfxgJHzu = BigInt("335")
		const uintwNQl7th = BigInt("1034")
		const addressxzUoRei = accounts[1]
		const addressWj66uFM = accounts[5]
		const uint2569NYxj1 = await POWToken728YFw.remainingAmount.call({from: accounts[5]});
		await POWToken728YFw.updateIncomeRate.call({from: accounts[0]});
		const uint256t1rCa3t = await POWToken728YFw.addHashRate.call(uintgm3irgF, {from: accounts[3]});
		const uint256JJojqX6 = await POWToken728YFw.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		const boolGFhvv0n = await POWToken728YFw.transfer.call(addresscOWYeh8, uintCfSvdqJ, {from: accounts[2]});
		await POWToken728YFw.pause.call({from: accounts[5]});
		const addressTHlKSgc = await POWToken728YFw.permit.call(addressWj66uFM, addressxzUoRei, uintwNQl7th, uintfxgJHzu, uinteCwfb7R, byteOEPY9jf, bytekx5XEyp, {from: accounts[4]});
		const uint256h5WwEa8 = await POWToken728YFw.getCurWorkingRate.call({from: accounts[4]});

		assert.equal(uint2569NYxj1, BigInt("0"))
		await expect(POWToken728YFw.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvUtc3EQ = await POWToken.new({from: accounts[2]});
		const uintxx24JJY = BigInt("562")
		const addressWjk80aN = accounts[1]
		const uintjyRQMPp = BigInt("1124")
		const uint256mbwWpPk = await POWTokenvUtc3EQ.getHistoryWorkingRate.call({from: accounts[4]});
		const addressBqY2Agk = await POWTokenvUtc3EQ.mint.call(addressWjk80aN, uintxx24JJY, {from: accounts[5]});
		const uint256BRpaeYC = await POWTokenvUtc3EQ.setStakingRewardRatio.call(uintjyRQMPp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenvUtc3EQ.getHistoryWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQExTDaT = await POWToken.new({from: accounts[3]});
		const uintQGAoZz = BigInt("35")
		const addressayltKt = accounts[0]
		const uintHhDRFFj = BigInt("782")
		const addressONzp8m6 = accounts[5]
		const boolB8pFtg4 = await POWTokenQExTDaT.transfer.call(addressayltKt, uintQGAoZz, {from: accounts[4]});
		const addressyDVonxZ = await POWTokenQExTDaT.claimReward.call(addressONzp8m6, uintHhDRFFj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenQExTDaT.transfer.call(addressayltKt, uintQGAoZz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQExTDaT = await POWToken.new({from: accounts[3]});
		const uintEQg5jPO = BigInt("1676")
		const addressd8l2ul = accounts[0]
		const addressEFZ9llN = accounts[4]
		const uintEBlva8E = BigInt("675")
		const addressCUYT3l1 = accounts[4]
		const uintCX39XXe = BigInt("793")
		const uintwy0VqFa = BigInt("805")
		const addressrYMLuJx = accounts[4]
		const boolTtsnwG7 = await POWTokenQExTDaT.transferFrom.call(addressEFZ9llN, addressd8l2ul, uintEQg5jPO, {from: accounts[0]});
		await POWTokenQExTDaT.updateIncomeRate.call({from: accounts[2]});
		const boolYTxOZg2 = await POWTokenQExTDaT.transfer.call(addressCUYT3l1, uintEBlva8E, {from: accounts[0]});
		const uint256I3G8Yz6 = await POWTokenQExTDaT.setStakingRewardRatio.call(uintCX39XXe, {from: accounts[2]});
		await POWTokenQExTDaT.onlyOwner.call({from: accounts[4]});
		const addressyDVonxZ = await POWTokenQExTDaT.claimReward.call(addressrYMLuJx, uintwy0VqFa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenQExTDaT.transferFrom.call(addressEFZ9llN, addressd8l2ul, uintEQg5jPO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvUtc3EQ = await POWToken.new({from: accounts[2]});
		const uintDwwfQQI = BigInt("171")
		const uintSy6iHG9 = BigInt("1391")
		const uintztHICo0 = BigInt("1968")
		const uintGFC9Ujr = BigInt("1684")
		const uintHAoSmKF = BigInt("459")
		const addressxam6Abr = "0x0000000000000000000000000000000000000001"
		const addressL4Yv28z = accounts[0]
		const addressDiZ9ZJM = accounts[1]
		const addressP2llyuQ = accounts[2]
		const addressyTEJx3i = accounts[4]
		const addresstJn08pF = accounts[1]
		const addressoqvMKqT = accounts[2]
		const addressadNglg = accounts[0]
		const stringq4VHWK = "xWdaZLbHxpwhw6DzzEHBQzzbwAqXztgLeAUHelsKZIgv5cFig3T4gkAJv7RkURuKxz1Sfoonel"
		const stringbxJag4 = "Cgl7FoWF3l"
		const uintcKaNEir = BigInt("1112")
		const stringuDBe6nW = await POWTokenvUtc3EQ.initialize.call(stringbxJag4, stringq4VHWK, addressadNglg, addressoqvMKqT, addresstJn08pF, addressyTEJx3i, addressP2llyuQ, addressDiZ9ZJM, addressL4Yv28z, addressxam6Abr, uintHAoSmKF, uintGFC9Ujr, uintztHICo0, uintSy6iHG9, uintDwwfQQI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mbwWpPk = await POWTokenvUtc3EQ.getHistoryWorkingRate.call({from: accounts[4]});
		const uint256BRpaeYC = await POWTokenvUtc3EQ.setStakingRewardRatio.call(uintcKaNEir, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenvUtc3EQ.initialize.call(stringbxJag4, stringq4VHWK, addressadNglg, addressoqvMKqT, addresstJn08pF, addressyTEJx3i, addressP2llyuQ, addressDiZ9ZJM, addressL4Yv28z, addressxam6Abr, uintHAoSmKF, uintGFC9Ujr, uintztHICo0, uintSy6iHG9, uintDwwfQQI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenwn06DeY = await POWToken.new({from: accounts[1]});
		const uintgAjmv3Z = BigInt("692")
		const uintrV0cbBw = BigInt("1400")
		const addressgiJcVJi = accounts[3]
		const uintLQsCEzd = BigInt("1524")
		const uint256fSfOeW1 = await POWTokenwn06DeY.getIncomeBTCInWeiPerSec.call({from: accounts[2]});
		const uint256IO0aiUt = await POWTokenwn06DeY.setStartMiningTime.call(uintgAjmv3Z, {from: accounts[1]});
		await POWTokenwn06DeY.pause.call({from: accounts[4]});
		const addressNEPbtAk = await POWTokenwn06DeY.mint.call(addressgiJcVJi, uintrV0cbBw, {from: accounts[1]});
		const uint256ZsCKbN = await POWTokenwn06DeY.getHistoryWorkingRate.call({from: accounts[3]});
		const uint256exzYuPu = await POWTokenwn06DeY.addHashRate.call(uintLQsCEzd, {from: accounts[2]});

		await expect(POWTokenwn06DeY.getIncomeBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})