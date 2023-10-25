const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressmXABJQK = accounts[3]
		const addressYCyKwCl = accounts[2]
		const addressyLWcyuB = accounts[3]
		const addressikybZ5e = accounts[3]
		const uintuy52m0 = BigInt("1169")
		const FairStockEquityVEOWPCa = await FairStockEquity.new(addressmXABJQK, addressYCyKwCl, addressyLWcyuB, addressikybZ5e, uintuy52m0, {from: accounts[3]});
		const uintJc5MQ4a = BigInt("485")
		const uintPFuPeGY = BigInt("1231")
		const uintJtqrC5 = BigInt("265")
		const uinttRYfrfo = BigInt("453")
		const uintTme0MT = BigInt("1877")
		const uintyohiETh = BigInt("1541")
		const uintMszLFTU = BigInt("123")
//		const uint256aRvfDpy = await FairStockEquityVEOWPCa.setProfitPercentPJ.call(uintJc5MQ4a, {from: accounts[4]});
//		const uint256AtVuqK6 = await FairStockEquityVEOWPCa.setGasFeeForCallback.call(uintPFuPeGY, {from: accounts[2]});
//		const uint256KFWOuqM = await FairStockEquityVEOWPCa.setDegree.call(uintMszLFTU, uintyohiETh, uintTme0MT, uinttRYfrfo, uintJtqrC5, {from: accounts[2]});
//		await FairStockEquityVEOWPCa.withdrawBonus.call({from: accounts[5]});

		await expect(FairStockEquityVEOWPCa.setProfitPercentPJ.call(uintJc5MQ4a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBSi9i5i = accounts[4]
		const addressCz4vVDh = accounts[3]
		const addressim7EYof = accounts[1]
		const addressiaEvQ76 = accounts[4]
		const uintDhDBemE = BigInt("727")
		const FairStockEquityjzv7CHg = await FairStockEquity.new(addressBSi9i5i, addressCz4vVDh, addressim7EYof, addressiaEvQ76, uintDhDBemE, {from: accounts[4]});
		const uintojSuwY = BigInt("535")
		const uintoPlZ8SS = BigInt("523")
		const uintHlfHLiB = BigInt("1691")
		const uintQqZFoh = BigInt("950")
		const uintZxJCqEA = BigInt("1802")
		const uintIONdi0w = BigInt("873")
		const addressYM8wLMD = accounts[4]
		const uintEcSCVjx = BigInt("466")
		const uint256jSj9yZP = await FairStockEquityjzv7CHg.setProfitPercentPJ.call(uintojSuwY, {from: accounts[4]});
//		await FairStockEquityjzv7CHg.withdrawBonus.call({from: accounts[1]});
//		const uint256Ler4pQ9 = await FairStockEquityjzv7CHg.invest.call(uintoPlZ8SS, {from: accounts[0]});
//		const addressaZLrBWH = await FairStockEquityjzv7CHg.business.call(addressYM8wLMD, uintIONdi0w, uintZxJCqEA, uintQqZFoh, uintHlfHLiB, {from: accounts[0]});
//		const uint256qtg4IGB = await FairStockEquityjzv7CHg.setProfitPercentBonus.call(uintEcSCVjx, {from: accounts[0]});

		await expect(FairStockEquityjzv7CHg.withdrawBonus.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuUHOnp = accounts[5]
		const addresspjUAac7 = accounts[3]
		const addressiNYrRhW = accounts[2]
		const addressNSVFi16 = accounts[3]
		const uint62yaio = BigInt("1690")
		const FairStockEquityAikWhOV = await FairStockEquity.new(addressuUHOnp, addresspjUAac7, addressiNYrRhW, addressNSVFi16, uint62yaio, {from: accounts[0]});
		const addresstZQo9HR = "0x0000000000000000000000000000000000000001"
		const uintlAoMaBB = BigInt("1639")
		const addresslk9jt5S = accounts[0]
//		const addressrGtcbSx = await FairStockEquityAikWhOV.setDataSource.call(addresstZQo9HR, {from: accounts[4]});
//		await FairStockEquityAikWhOV.onlyDataSource.call({from: accounts[4]});
//		const addressKp7yPRj = await FairStockEquityAikWhOV.depositLPT.call(addresslk9jt5S, uintlAoMaBB, {from: accounts[1]});

		await expect(FairStockEquityAikWhOV.setDataSource.call(addresstZQo9HR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEkImTVi = accounts[4]
		const addresseEyzUlh = accounts[3]
		const addressyAVPGAu = accounts[3]
		const addressxbvZEi4 = accounts[3]
		const uintzxUTKF6 = BigInt("1837")
		const FairStockEquitytT1PjuO = await FairStockEquity.new(addressEkImTVi, addresseEyzUlh, addressyAVPGAu, addressxbvZEi4, uintzxUTKF6, {from: accounts[0]});
		const uintYeps13e = BigInt("757")
		const uintEgrkYAU = BigInt("400")
		const addressGPWzS8f = accounts[1]
		const uintG1Hq9Gd = BigInt("1868")
		const uint5qIGTd = BigInt("9")
		const addressLG0okBk = "0x0000000000000000000000000000000000000001"
//		const addressPcBBD9V = await FairStockEquitytT1PjuO.withdrawBonusCallback.call(addressGPWzS8f, uintEgrkYAU, uintYeps13e, {from: accounts[4]});
//		const addresswdfRREl = await FairStockEquitytT1PjuO.setModule.call(addressLG0okBk, uint5qIGTd, uintG1Hq9Gd, {from: accounts[1]});

		await expect(FairStockEquitytT1PjuO.withdrawBonusCallback.call(addressGPWzS8f, uintEgrkYAU, uintYeps13e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressXkVXdAp = accounts[2]
		const addresshGoA06F = accounts[3]
		const addressmgMBlFf = accounts[0]
		const addressrReGpY = "0x0000000000000000000000000000000000000001"
		const uintn629GS = BigInt("1951")
		const FairStockEquityVDczJv = await FairStockEquity.new(addressXkVXdAp, addresshGoA06F, addressmgMBlFf, addressrReGpY, uintn629GS, {from: accounts[0]});
		const uintKsZBiH = BigInt("780")
		const uintAakKSNe = BigInt("99")
		const uintei6Es9J = BigInt("119")
		const addressWjp8VQ5 = "0x0000000000000000000000000000000000000001"
//		await FairStockEquityVDczJv.onlyDataSource.call({from: accounts[5]});
//		await FairStockEquityVDczJv.checkStart.call({from: accounts[0]});
//		const uint256ug1RUC = await FairStockEquityVDczJv.invest.call(uintKsZBiH, {from: accounts[4]});
//		const uint256YmYqgCJ = await FairStockEquityVDczJv.depositBonus.call(uintAakKSNe, {from: accounts[2]});
//		const addressP2wmvmN = await FairStockEquityVDczJv.withdrawLPT.call(addressWjp8VQ5, uintei6Es9J, {from: accounts[3]});

		await expect(FairStockEquityVDczJv.onlyDataSource.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressknWwC2 = accounts[3]
		const addressYMwMshs = accounts[1]
		const addressmVitvhX = accounts[1]
		const addressyJXpS2X = "0x0000000000000000000000000000000000000001"
		const uintyzbojtS = BigInt("1266")
		const FairStockEquityFo9WFy = await FairStockEquity.new(addressknWwC2, addressYMwMshs, addressmVitvhX, addressyJXpS2X, uintyzbojtS, {from: accounts[1]});
		const uintHxpCmtV = BigInt("716")
		const uinttRNiz8m = BigInt("872")
		const uintAaWuFFg = BigInt("210")
		const uintklbIh2n = BigInt("749")
		const addresslhi8h2 = accounts[4]
		const uintETYuLr = BigInt("1673")
//		const uint256XvdsAaN = await FairStockEquityFo9WFy.invest.call(uintHxpCmtV, {from: accounts[1]});
//		const uint256LpN7nL5 = await FairStockEquityFo9WFy.invest.call(uinttRNiz8m, {from: accounts[5]});
//		const uint256ZJoaSS = await FairStockEquityFo9WFy.invest.call(uintAaWuFFg, {from: accounts[5]});
//		const addressZlCfNLN = await FairStockEquityFo9WFy.withdrawLPT.call(addresslhi8h2, uintklbIh2n, {from: accounts[1]});
//		const uint256LREF7dx = await FairStockEquityFo9WFy.setGasFeeForCallback.call(uintETYuLr, {from: accounts[3]});

		await expect(FairStockEquityFo9WFy.invest.call(uintHxpCmtV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdeZLpa = accounts[3]
		const addressr878nIk = accounts[1]
		const addressmv18Ft = accounts[1]
		const addressbJmrKb = "0x0000000000000000000000000000000000000001"
		const uintF7pzENH = BigInt("1266")
		const FairStockEquityFo9WFy = await FairStockEquity.new(addressdeZLpa, addressr878nIk, addressmv18Ft, addressbJmrKb, uintF7pzENH, {from: accounts[1]});
		const uinteqmDfOF = BigInt("639")
		const uintLAe925L = BigInt("716")
		const uint3TMoZC = BigInt("872")
		const uintE7EgOZ7 = BigInt("204")
		const uintRO1eL5 = BigInt("1673")
//		const uint256JFVg503 = await FairStockEquityFo9WFy.depositBonus.call(uinteqmDfOF, {from: accounts[0]});
//		const uint256XvdsAaN = await FairStockEquityFo9WFy.invest.call(uintLAe925L, {from: accounts[1]});
//		const uint256LpN7nL5 = await FairStockEquityFo9WFy.invest.call(uint3TMoZC, {from: accounts[5]});
//		const uint256ZJoaSS = await FairStockEquityFo9WFy.invest.call(uintE7EgOZ7, {from: accounts[5]});
//		const uint256LREF7dx = await FairStockEquityFo9WFy.setGasFeeForCallback.call(uintRO1eL5, {from: accounts[3]});

		await expect(FairStockEquityFo9WFy.depositBonus.call(uinteqmDfOF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressB3TRrOZ = accounts[3]
		const addressJscBZVK = accounts[1]
		const addressCKjSw4e = accounts[1]
		const addressdk2Hf0v = "0x0000000000000000000000000000000000000001"
		const uintPrOx5uu = BigInt("1266")
		const FairStockEquityFo9WFy = await FairStockEquity.new(addressB3TRrOZ, addressJscBZVK, addressCKjSw4e, addressdk2Hf0v, uintPrOx5uu, {from: accounts[1]});
		const uintj5NPuiD = BigInt("1013")
		const uintMKeHHu = BigInt("716")
		const uintNnzwjUa = BigInt("872")
		const uintl5zNVc5 = BigInt("906")
		const uintL4qHtpL = BigInt("1143")
		const uintLPlDXpi = BigInt("77")
		const uintwAvTPzz = BigInt("1634")
		const addressqGbr1hX = accounts[4]
		const uintRLvy8yv = BigInt("225")
		const uint2lHcww = BigInt("1611")
		const uinttZ5ZWZi = BigInt("1673")
//		const uint256BLocoiF = await FairStockEquityFo9WFy.reduceShare.call(uintj5NPuiD, {from: accounts[3]});
//		const uint256XvdsAaN = await FairStockEquityFo9WFy.invest.call(uintMKeHHu, {from: accounts[1]});
//		const uint256LpN7nL5 = await FairStockEquityFo9WFy.invest.call(uintNnzwjUa, {from: accounts[5]});
//		const addressCTKWz3v = await FairStockEquityFo9WFy.business.call(addressqGbr1hX, uintwAvTPzz, uintLPlDXpi, uintL4qHtpL, uintl5zNVc5, {from: accounts[2]});
//		const uint256ZJoaSS = await FairStockEquityFo9WFy.invest.call(uintRLvy8yv, {from: accounts[5]});
//		const uint2561x4r9f = await FairStockEquityFo9WFy.setProfitPercentPJ.call(uint2lHcww, {from: accounts[4]});
//		const uint256LREF7dx = await FairStockEquityFo9WFy.setGasFeeForCallback.call(uinttZ5ZWZi, {from: accounts[3]});

		await expect(FairStockEquityFo9WFy.reduceShare.call(uintj5NPuiD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJY10rwy = accounts[0]
		const addressrqT5DaD = accounts[2]
		const addressXFRzzKO = accounts[2]
		const addressc5tHq5 = "0x0000000000000000000000000000000000000001"
		const uintDFoDY6P = BigInt("253")
		const FairStockEquityoIhEHLA = await FairStockEquity.new(addressJY10rwy, addressrqT5DaD, addressXFRzzKO, addressc5tHq5, uintDFoDY6P, {from: accounts[5]});
		const uintQC3E6z5 = BigInt("1397")
		const uinttRSq6XC = BigInt("44")
		const uint0JBhUv = BigInt("1471")
		const uintAVaAFJ5 = BigInt("1848")
		const addressLYmCI7S = accounts[1]
		const uintObLnBRZ = BigInt("53")
		const uintY627Jcr = BigInt("1079")
		const uintB9d3Bjw = BigInt("1830")
		const uintMzSbg8z = BigInt("1314")
		const addressWon7A4w = accounts[4]
		const uintBN7Et8Q = BigInt("1803")
		const uintBBLFzi = BigInt("524")
		const addressr1qHEMd = accounts[4]
//		const addressWjtIqNT = await FairStockEquityoIhEHLA.business.call(addressLYmCI7S, uintAVaAFJ5, uint0JBhUv, uinttRSq6XC, uintQC3E6z5, {from: accounts[0]});
//		const uint256KknsPLG = await FairStockEquityoIhEHLA.setProfitPercentPJ.call(uintObLnBRZ, {from: accounts[5]});
//		const uint256yT1HB9D = await FairStockEquityoIhEHLA.setProfitPercentPJ.call(uintY627Jcr, {from: "0x0000000000000000000000000000000000000001"});
//		const addressqlgeK4 = await FairStockEquityoIhEHLA.withdrawBonusCallback.call(addressWon7A4w, uintMzSbg8z, uintB9d3Bjw, {from: accounts[3]});
//		const addressOfoZZB4 = await FairStockEquityoIhEHLA.setModule.call(addressr1qHEMd, uintBBLFzi, uintBN7Et8Q, {from: accounts[1]});

		await expect(FairStockEquityoIhEHLA.business.call(addressLYmCI7S, uintAVaAFJ5, uint0JBhUv, uinttRSq6XC, uintQC3E6z5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressLIHKxVe = "0x0000000000000000000000000000000000000001"
		const addressinW8ZGO = accounts[4]
		const addressdGLEtG = accounts[2]
		const addressIuXiyD = accounts[1]
		const uintc3uaq5a = BigInt("667")
		const FairStockEquitymMvv4Dy = await FairStockEquity.new(addressLIHKxVe, addressinW8ZGO, addressdGLEtG, addressIuXiyD, uintc3uaq5a, {from: accounts[0]});
		const uintIs3cpP = BigInt("71")
		const addressRR6tUBS = accounts[5]
		const uintl8tHL3 = BigInt("1569")
		const uintmYROIk7 = BigInt("1827")
//		const addressf9FTxY = await FairStockEquitymMvv4Dy.withdrawLPT.call(addressRR6tUBS, uintIs3cpP, {from: accounts[5]});
//		await FairStockEquitymMvv4Dy.withdrawPJ.call({from: accounts[0]});
//		await FairStockEquitymMvv4Dy.withdrawMT.call({from: accounts[1]});
//		const uint256hWQj7rR = await FairStockEquitymMvv4Dy.setProfitPercentPJ.call(uintl8tHL3, {from: accounts[4]});
//		const uint256pYyROij = await FairStockEquitymMvv4Dy.bonus.call(uintmYROIk7, {from: accounts[5]});

		await expect(FairStockEquitymMvv4Dy.withdrawLPT.call(addressRR6tUBS, uintIs3cpP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOlK4ICc = accounts[2]
		const addressrGq1zWr = accounts[2]
		const addressm7MC5vb = accounts[2]
		const addressP6R7Mrj = accounts[1]
		const uintPDM0uxK = BigInt("1663")
		const FairStockEquitysWVBQMV = await FairStockEquity.new(addressOlK4ICc, addressrGq1zWr, addressm7MC5vb, addressP6R7Mrj, uintPDM0uxK, {from: accounts[2]});
		const uintuUcbiwH = BigInt("1068")
		const uintjlVJz9E = BigInt("1563")
		const addressCMEOaf = accounts[1]
//		await FairStockEquitysWVBQMV.withdrawMT.call({from: accounts[1]});
//		const addressCbKAB6 = await FairStockEquitysWVBQMV.withdrawBonusCallback.call(addressCMEOaf, uintjlVJz9E, uintuUcbiwH, {from: accounts[0]});

		await expect(FairStockEquitysWVBQMV.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresss1d2uic = accounts[1]
		const addressKa823hg = accounts[5]
		const addresscwz2wA = accounts[1]
		const addressCZxeKL = accounts[5]
		const uinto97vL4S = BigInt("1810")
		const FairStockEquityVBNAuDb = await FairStockEquity.new(addresss1d2uic, addressKa823hg, addresscwz2wA, addressCZxeKL, uinto97vL4S, {from: accounts[0]});
		const uintS7BGmhd = BigInt("1946")
		const uintYZ7PHFO = BigInt("223")
		const uintdSBCyDt = BigInt("958")
		const uint256KP8S9F0 = await FairStockEquityVBNAuDb.setStartTime.call(uintS7BGmhd, {from: accounts[0]});
//		const uint256m7ir5yi = await FairStockEquityVBNAuDb.invest.call(uintYZ7PHFO, {from: accounts[4]});
//		await FairStockEquityVBNAuDb.onlyDataSource.call({from: accounts[0]});
//		await FairStockEquityVBNAuDb.withdrawBonus.call({from: accounts[5]});
//		const uint256GfuZ41G = await FairStockEquityVBNAuDb.invest.call(uintdSBCyDt, {from: accounts[5]});

		await expect(FairStockEquityVBNAuDb.invest.call(uintYZ7PHFO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYtEWXNI = accounts[1]
		const addressFQv0PxY = accounts[5]
		const addressPvjvaJd = accounts[0]
		const addressJBEtPuz = accounts[2]
		const uintjpdAlQ0 = BigInt("853")
		const FairStockEquityOHVqiau = await FairStockEquity.new(addressYtEWXNI, addressFQv0PxY, addressPvjvaJd, addressJBEtPuz, uintjpdAlQ0, {from: accounts[0]});
		const uintvWE4snN = BigInt("820")
		const uintRqdLDyT = BigInt("172")
		const uintBnW9aeo = BigInt("1588")
		const addressKnXrSNI = accounts[4]
		const uint256xDsoj9n = await FairStockEquityOHVqiau.setProfitPercentMT.call(uintvWE4snN, {from: accounts[0]});
//		const addressbZ3ztry = await FairStockEquityOHVqiau.withdrawBonusCallback.call(addressKnXrSNI, uintBnW9aeo, uintRqdLDyT, {from: accounts[2]});

		await expect(FairStockEquityOHVqiau.withdrawBonusCallback.call(addressKnXrSNI, uintBnW9aeo, uintRqdLDyT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnCDqSZ5 = accounts[0]
		const addressv1hKrup = accounts[3]
		const addresstRn1oKB = accounts[2]
		const addressUrEjf3b = accounts[0]
		const uintuEggFx5 = BigInt("24")
		const FairStockEquitydRXitUx = await FairStockEquity.new(addressnCDqSZ5, addressv1hKrup, addresstRn1oKB, addressUrEjf3b, uintuEggFx5, {from: accounts[1]});
		const uintBWBLEiB = BigInt("40")
		const addressaWZBott = accounts[1]
		const uintLmhBwZ6 = BigInt("1846")
		const uintRNwps8d = BigInt("225")
		const uintjJe97Gb = BigInt("1177")
		const uinttPfQMgP = BigInt("1037")
		const addressfbj5Ywn = accounts[1]
		const uintMkRfpv = BigInt("629")
		const uintSJ9Smff = BigInt("1522")
		const addressAsIvYTd = accounts[2]
		const uintTukiZq7 = BigInt("1338")
		const addressth4m1Hn = accounts[3]
//		const addressSusO1M = await FairStockEquitydRXitUx.depositLPT.call(addressaWZBott, uintBWBLEiB, {from: accounts[1]});
//		const addressASnrzhA = await FairStockEquitydRXitUx.business.call(addressfbj5Ywn, uinttPfQMgP, uintjJe97Gb, uintRNwps8d, uintLmhBwZ6, {from: accounts[4]});
//		const addressu3b28C = await FairStockEquitydRXitUx.withdrawBonusCallback.call(addressAsIvYTd, uintSJ9Smff, uintMkRfpv, {from: accounts[5]});
//		const uint256uqq0o90 = await FairStockEquitydRXitUx.depositBonus.call(uintTukiZq7, {from: accounts[4]});
//		await FairStockEquitydRXitUx.withdrawPJ.call({from: accounts[1]});
//		const addressPQS2rwl = await FairStockEquitydRXitUx.setDataSource.call(addressth4m1Hn, {from: accounts[4]});

		await expect(FairStockEquitydRXitUx.depositLPT.call(addressaWZBott, uintBWBLEiB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUjXXWCp = accounts[1]
		const addressxEkNxqu = accounts[4]
		const addressboP7FbM = accounts[2]
		const addressCVoOpBK = "0x0000000000000000000000000000000000000001"
		const uintwajpcC3 = BigInt("1005")
		const FairStockEquityo8CDQcW = await FairStockEquity.new(addressUjXXWCp, addressxEkNxqu, addressboP7FbM, addressCVoOpBK, uintwajpcC3, {from: accounts[3]});
		const uinteCw91mB = BigInt("594")
		const uintIZXrWrH = BigInt("1977")
		const addressqmHkZjK = accounts[4]
//		await FairStockEquityo8CDQcW.f.call({from: accounts[3]});
//		const addresskYOqxm = await FairStockEquityo8CDQcW.setModule.call(addressqmHkZjK, uintIZXrWrH, uinteCw91mB, {from: accounts[3]});
//		await FairStockEquityo8CDQcW.withdrawBonus.call({from: accounts[0]});
//		await FairStockEquityo8CDQcW.checkStart.call({from: accounts[2]});

		await expect(FairStockEquityo8CDQcW.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressfTwIH1t = accounts[4]
		const addressL7aaAJ0 = accounts[2]
		const address2bieyG = accounts[2]
		const addressZFtURDH = accounts[4]
		const uintAK8mEyx = BigInt("1143")
		const FairStockEquityCkA4iov = await FairStockEquity.new(addressfTwIH1t, addressL7aaAJ0, address2bieyG, addressZFtURDH, uintAK8mEyx, {from: "0x0000000000000000000000000000000000000001"});
		const uintSHFu0SP = BigInt("436")
		const addressux3vWAb = accounts[0]
		const uintzMBwKPq = BigInt("1322")
		const addresst4yo89B = accounts[3]
		const uintny5Y2uj = BigInt("16")
		const uintgF4S6Bo = BigInt("538")
		await FairStockEquityCkA4iov.withdrawMT.call({from: accounts[5]});
		const addressxHCJ7TT = await FairStockEquityCkA4iov.withdrawLPT.call(addressux3vWAb, uintSHFu0SP, {from: accounts[2]});
		const addressdqrDjY = await FairStockEquityCkA4iov.depositLPT.call(addresst4yo89B, uintzMBwKPq, {from: accounts[3]});
		const uint256WCxcUpv = await FairStockEquityCkA4iov.setProfitPercentPJ.call(uintny5Y2uj, {from: accounts[5]});
		const uint256ym6qoKn = await FairStockEquityCkA4iov.setStartTime.call(uintgF4S6Bo, {from: accounts[5]});
	});

	it('test for FairStockEquity', async () => {
		const addressLna28pB = accounts[3]
		const addresshVai4oP = accounts[1]
		const addresspOqydxZ = accounts[1]
		const addressH8h1UP3 = "0x0000000000000000000000000000000000000001"
		const uintfxG2inF = BigInt("1266")
		const FairStockEquityFo9WFy = await FairStockEquity.new(addressLna28pB, addresshVai4oP, addresspOqydxZ, addressH8h1UP3, uintfxG2inF, {from: accounts[1]});
		const boolMTyakyH = false
		const addressG2A2OG6 = accounts[4]
		const uinttWbScMQ = BigInt("264")
		const addressTLim8nQ = "0x0000000000000000000000000000000000000001"
		const addressa5Cu6wH = accounts[4]
		const uintIPem8x3 = BigInt("677")
		const addressCgAbyYy = await FairStockEquityFo9WFy.setLPT.call(addressG2A2OG6, boolMTyakyH, {from: accounts[1]});
//		const addressfqRFAC4 = await FairStockEquityFo9WFy.depositLPT.call(addressTLim8nQ, uinttWbScMQ, {from: accounts[5]});
//		await FairStockEquityFo9WFy.onlyDataSource.call({from: accounts[0]});
//		await FairStockEquityFo9WFy.withdrawPJ.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressl165DF9 = await FairStockEquityFo9WFy.setDataSource.call(addressa5Cu6wH, {from: accounts[1]});
//		const uint256XvdsAaN = await FairStockEquityFo9WFy.invest.call(uintIPem8x3, {from: accounts[1]});

		await expect(FairStockEquityFo9WFy.depositLPT.call(addressTLim8nQ, uinttWbScMQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKI8Lqkg = accounts[4]
		const addressFxGekh = accounts[1]
		const addressKGkvLrD = accounts[1]
		const addressATIJXuJ = accounts[1]
		const uintSVjfWQX = BigInt("423")
		const FairStockEquityuUMAeNU = await FairStockEquity.new(addressKI8Lqkg, addressFxGekh, addressKGkvLrD, addressATIJXuJ, uintSVjfWQX, {from: accounts[0]});
		const uintIwoaJkH = BigInt("901")
		const uints56NUr = BigInt("1261")
		const addressbDlEiNM = accounts[3]
		const uintubQ2xv8 = BigInt("1622")
		const addressQySRSPX = accounts[4]
		const uintdvHWU1 = BigInt("1696")
		const uintL6ZGtmB = BigInt("97")
//		const addressPsPyW2T = await FairStockEquityuUMAeNU.withdrawMTCallback.call(addressbDlEiNM, uints56NUr, uintIwoaJkH, {from: accounts[1]});
//		const addressxdoxQu9 = await FairStockEquityuUMAeNU.depositLPT.call(addressQySRSPX, uintubQ2xv8, {from: accounts[4]});
//		const uint256jZ8TxX8 = await FairStockEquityuUMAeNU.setProfitPercentMT.call(uintdvHWU1, {from: accounts[2]});
//		const uint256Zfcx5B9 = await FairStockEquityuUMAeNU.invest.call(uintL6ZGtmB, {from: accounts[3]});

		await expect(FairStockEquityuUMAeNU.withdrawMTCallback.call(addressbDlEiNM, uints56NUr, uintIwoaJkH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrkONWKi = accounts[0]
		const addresstcsKHXv = "0x0000000000000000000000000000000000000001"
		const addresstynJ0VU = accounts[3]
		const addressUmoPrxR = accounts[4]
		const uintPsFMaq6 = BigInt("385")
		const FairStockEquityu1CGg5d = await FairStockEquity.new(addressrkONWKi, addresstcsKHXv, addresstynJ0VU, addressUmoPrxR, uintPsFMaq6, {from: accounts[1]});
//		await FairStockEquityu1CGg5d.withdrawPJ.call({from: accounts[1]});
//		await FairStockEquityu1CGg5d.f.call({from: accounts[4]});
//		await FairStockEquityu1CGg5d.f.call({from: accounts[3]});

		await expect(FairStockEquityu1CGg5d.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressW0blDnk = accounts[0]
		const addressKelGkl8 = accounts[2]
		const addressAo52C6f = accounts[1]
		const addressayBzZ64 = accounts[3]
		const uintl1q7fWV = BigInt("1885")
		const FairStockEquityRZWcpst = await FairStockEquity.new(addressW0blDnk, addressKelGkl8, addressAo52C6f, addressayBzZ64, uintl1q7fWV, {from: accounts[4]});
		const uintiG5Oehc = BigInt("1905")
		const uintPXKaSr2 = BigInt("413")
		const addressLq18geY = accounts[2]
		const uintzkHHVv4 = BigInt("1973")
		const uintMjNbs9z = BigInt("1721")
		const uintdbCeg2n = BigInt("914")
		const uintNBm1ua = BigInt("1416")
		const uintUzyEv9V = BigInt("1070")
		const uintiCtrv1C = BigInt("343")
		const uintLtJ7Lt = BigInt("7")
		const addressMcLH9T = accounts[5]
		const uintcKvwxTn = BigInt("1663")
		const uintvju9cy = BigInt("1011")
		const addressvSM3dwc = accounts[3]
//		const uint256k0fe2j = await FairStockEquityRZWcpst.bonus.call(uintiG5Oehc, {from: accounts[3]});
//		const addressEs2XBzV = await FairStockEquityRZWcpst.depositLPT.call(addressLq18geY, uintPXKaSr2, {from: accounts[1]});
//		await FairStockEquityRZWcpst.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256zo11ZrK = await FairStockEquityRZWcpst.setDegree.call(uintUzyEv9V, uintNBm1ua, uintdbCeg2n, uintMjNbs9z, uintzkHHVv4, {from: accounts[3]});
//		const uint256rCbeqx = await FairStockEquityRZWcpst.setProfitPercentPJ.call(uintiCtrv1C, {from: "0x0000000000000000000000000000000000000001"});
//		const addressEnWy7Nu = await FairStockEquityRZWcpst.withdrawLPT.call(addressMcLH9T, uintLtJ7Lt, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityRZWcpst.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressPTKlIBD = await FairStockEquityRZWcpst.withdrawMTCallback.call(addressvSM3dwc, uintvju9cy, uintcKvwxTn, {from: accounts[5]});

		await expect(FairStockEquityRZWcpst.bonus.call(uintiG5Oehc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})