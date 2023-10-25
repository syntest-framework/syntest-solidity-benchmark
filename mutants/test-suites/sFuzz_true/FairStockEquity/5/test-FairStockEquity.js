const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressILFNHil = accounts[1]
		const addressO8aO4Qb = accounts[2]
		const addressarlHd6Z = accounts[5]
		const addressfiMnceq = accounts[1]
		const uintOea24Dp = BigInt("1321")
		const FairStockEquityarofzWp = await FairStockEquity.new(addressILFNHil, addressO8aO4Qb, addressarlHd6Z, addressfiMnceq, uintOea24Dp, {from: accounts[2]});
		const uintMpb9Q1 = BigInt("590")
		const uintV5hjeUg = BigInt("1234")
		const uintGUaUK0R = BigInt("1208")
		const uintePMBMjL = BigInt("647")
		const uintEeN7SyM = BigInt("1329")
		const addressqVRQub9 = "0x0000000000000000000000000000000000000001"
//		const uint256EUcEkym = await FairStockEquityarofzWp.setProfitPercentPJ.call(uintMpb9Q1, {from: accounts[4]});
//		const addressyDNtwsU = await FairStockEquityarofzWp.business.call(addressqVRQub9, uintEeN7SyM, uintePMBMjL, uintGUaUK0R, uintV5hjeUg, {from: accounts[5]});
//		await FairStockEquityarofzWp.withdrawBonus.call({from: accounts[5]});

		await expect(FairStockEquityarofzWp.setProfitPercentPJ.call(uintMpb9Q1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressyEqyzL = accounts[4]
		const addressCkQe4h4 = accounts[2]
		const addressJsgQ3dk = accounts[0]
		const addressBdyXBg0 = accounts[0]
		const uintQzH61VW = BigInt("1595")
		const FairStockEquityEVoIVex = await FairStockEquity.new(addressyEqyzL, addressCkQe4h4, addressJsgQ3dk, addressBdyXBg0, uintQzH61VW, {from: accounts[3]});
		const uintTGcetI = BigInt("1981")
		const uintqyNCU1B = BigInt("1328")
		const uintWoNBIWD = BigInt("308")
		const uintwYrkBCP = BigInt("1447")
		const uintPOfFo0g = BigInt("429")
		const addressrBepB4G = accounts[1]
		const addressXrALVR1 = "0x0000000000000000000000000000000000000001"
//		await FairStockEquityEVoIVex.withdrawBonus.call({from: accounts[4]});
//		await FairStockEquityEVoIVex.onlyDataSource.call({from: accounts[5]});
//		await FairStockEquityEVoIVex.f.call({from: accounts[3]});
//		const uint256czsbLs3 = await FairStockEquityEVoIVex.setGasFeeForCallback.call(uintTGcetI, {from: accounts[2]});
//		const addressaTLGLTF = await FairStockEquityEVoIVex.business.call(addressrBepB4G, uintPOfFo0g, uintwYrkBCP, uintWoNBIWD, uintqyNCU1B, {from: accounts[4]});
//		const addressMClSWlo = await FairStockEquityEVoIVex.setDataSource.call(addressXrALVR1, {from: accounts[1]});

		await expect(FairStockEquityEVoIVex.withdrawBonus.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressT1sHdnc = accounts[3]
		const addressXGErmq0 = accounts[2]
		const addressqQTatxx = accounts[5]
		const addresspTzFJS4 = accounts[5]
		const uintCCJiUMZ = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressT1sHdnc, addressXGErmq0, addressqQTatxx, addresspTzFJS4, uintCCJiUMZ, {from: accounts[4]});
		const uintmUVXkbD = BigInt("2010")
		const uintJOiyCku = BigInt("708")
		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintmUVXkbD, {from: accounts[1]});
//		const uint256Dr2mZa = await FairStockEquitysjUXdyi.setProfitPercentMT.call(uintJOiyCku, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.setProfitPercentMT.call(uintJOiyCku, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressC5RKPK4 = accounts[5]
		const addressZK3c9mn = accounts[2]
		const addressxPtWf2 = accounts[5]
		const addressLHkAPyA = accounts[2]
		const uintidqzmg = BigInt("1877")
		const FairStockEquitydA6gGe6 = await FairStockEquity.new(addressC5RKPK4, addressZK3c9mn, addressxPtWf2, addressLHkAPyA, uintidqzmg, {from: accounts[0]});
		const uintEpJYZVs = BigInt("551")
		const uintS5KQXVf = BigInt("1779")
		const addressCpMFLX = accounts[1]
		const uinthPvk68L = BigInt("890")
		const uintZsYcQMz = BigInt("2005")
		const addressBXTG91X = accounts[5]
		const uinta6di6bF = BigInt("1202")
		const addressKHEuPHw = accounts[5]
		const uintnahrepr = BigInt("1796")
		const uinty0xwmGp = BigInt("431")
		const uintQDfm8lW = BigInt("778")
		const uintxV82TN = BigInt("1840")
		const addressHP0EG8c = accounts[0]
//		const addresss0PKUyl = await FairStockEquitydA6gGe6.withdrawBonusCallback.call(addressCpMFLX, uintS5KQXVf, uintEpJYZVs, {from: accounts[4]});
//		const uint256q7g4dM7 = await FairStockEquitydA6gGe6.depositBonus.call(uinthPvk68L, {from: accounts[3]});
//		const addressXnFxO7y = await FairStockEquitydA6gGe6.depositLPT.call(addressBXTG91X, uintZsYcQMz, {from: accounts[0]});
//		await FairStockEquitydA6gGe6.withdrawBonus.call({from: accounts[0]});
//		const addressgbGFEmc = await FairStockEquitydA6gGe6.withdrawLPT.call(addressKHEuPHw, uinta6di6bF, {from: "0x0000000000000000000000000000000000000001"});
//		const addressNWj2G6E = await FairStockEquitydA6gGe6.business.call(addressHP0EG8c, uintxV82TN, uintQDfm8lW, uinty0xwmGp, uintnahrepr, {from: accounts[4]});

		await expect(FairStockEquitydA6gGe6.withdrawBonusCallback.call(addressCpMFLX, uintS5KQXVf, uintEpJYZVs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdQ9axJB = accounts[3]
		const addressNX1haot = accounts[2]
		const addressoyuqzVw = accounts[5]
		const address0SlD7B = accounts[5]
		const uintxqg35n = BigInt("1321")
		const FairStockEquitymv234Z = await FairStockEquity.new(addressdQ9axJB, addressNX1haot, addressoyuqzVw, address0SlD7B, uintxqg35n, {from: accounts[4]});
		const uintVvKYcAX = BigInt("536")
		const uintad1o9rA = BigInt("1641")
		const uintI9w3Fw8 = BigInt("951")
		const uintGySatxh = BigInt("1803")
//		const uint256wMyw0M = await FairStockEquitymv234Z.depositBonus.call(uintVvKYcAX, {from: accounts[3]});
//		const uint256iTNS6g = await FairStockEquitymv234Z.setProfitPercentBonus.call(uintad1o9rA, {from: accounts[5]});
//		const uint256Aj3odcf = await FairStockEquitymv234Z.setProfitPercentBonus.call(uintI9w3Fw8, {from: accounts[1]});
//		const uint256RnPyh6Z = await FairStockEquitymv234Z.reduceShare.call(uintGySatxh, {from: accounts[2]});

		await expect(FairStockEquitymv234Z.depositBonus.call(uintVvKYcAX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQK3zXCV = accounts[0]
		const addresszccGAKD = accounts[4]
		const addressO2IHmwH = accounts[2]
		const addresspt4x1fk = accounts[0]
		const uintx4zFspU = BigInt("189")
		const FairStockEquityvNqXDqp = await FairStockEquity.new(addressQK3zXCV, addresszccGAKD, addressO2IHmwH, addresspt4x1fk, uintx4zFspU, {from: "0x0000000000000000000000000000000000000001"});
		const uintFI7b51g = BigInt("441")
		const uintlJkvpeK = BigInt("794")
		const addressHmDandE = accounts[0]
		const uintl3isiK = BigInt("964")
		const uintnzv7SI = BigInt("1323")
		const uint256EhFq8gK = await FairStockEquityvNqXDqp.setProfitPercentMT.call(uintFI7b51g, {from: accounts[3]});
		const uint256qr3871m = await FairStockEquityvNqXDqp.setGasFeeForCallback.call(uintlJkvpeK, {from: accounts[4]});
		const addressEFFkgE = await FairStockEquityvNqXDqp.setDataSource.call(addressHmDandE, {from: accounts[4]});
		const uint256rR6wXxJ = await FairStockEquityvNqXDqp.setProfitPercentMT.call(uintl3isiK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QT0upA = await FairStockEquityvNqXDqp.setGasFeeForCallback.call(uintnzv7SI, {from: accounts[3]});
	});

	it('test for FairStockEquity', async () => {
		const addressMwelYdQ = accounts[3]
		const addressw4IUJF = accounts[2]
		const addressEbiGigw = accounts[5]
		const addresst7LH7M = accounts[5]
		const uintt4gGmGx = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressMwelYdQ, addressw4IUJF, addressEbiGigw, addresst7LH7M, uintt4gGmGx, {from: accounts[4]});
		const uintKfHRpqZ = BigInt("1167")
		const addressDt73xhu = accounts[2]
		const uintaAw2yPK = BigInt("2010")
		const uint5AHr1B = BigInt("708")
//		const addresse0Dxbn = await FairStockEquitysjUXdyi.depositLPT.call(addressDt73xhu, uintKfHRpqZ, {from: accounts[4]});
//		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintaAw2yPK, {from: accounts[1]});
//		const uint256Dr2mZa = await FairStockEquitysjUXdyi.setProfitPercentMT.call(uint5AHr1B, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.depositLPT.call(addressDt73xhu, uintKfHRpqZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTNUFfpk = accounts[3]
		const addressyyY8bBC = accounts[2]
		const addressLcn62kh = accounts[5]
		const addresspsqD8PN = accounts[5]
		const uintL8PFPI = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressTNUFfpk, addressyyY8bBC, addressLcn62kh, addresspsqD8PN, uintL8PFPI, {from: accounts[4]});
		const uintWKDb4IE = BigInt("1998")
		const uintGAXiV1Y = BigInt("999")
		const uintSOOdRN1 = BigInt("708")
		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintWKDb4IE, {from: accounts[1]});
//		await FairStockEquitysjUXdyi.checkStart.call({from: accounts[3]});
//		const uint256CCfarK0 = await FairStockEquitysjUXdyi.setProfitPercentBonus.call(uintGAXiV1Y, {from: accounts[0]});
//		const uint256Dr2mZa = await FairStockEquitysjUXdyi.setProfitPercentMT.call(uintSOOdRN1, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstMDgFFd = accounts[3]
		const addresshEw9Rt = accounts[2]
		const addresshjnWlUf = accounts[5]
		const addressEy9SSrk = accounts[5]
		const uintDSk7SZP = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addresstMDgFFd, addresshEw9Rt, addresshjnWlUf, addressEy9SSrk, uintDSk7SZP, {from: accounts[4]});
		const uintnDMjKoy = BigInt("1581")
		const addressZ4HCjuW = accounts[3]
		const uintKJAYVu = BigInt("194")
		const uinttfodn2K = BigInt("1312")
		const uintaciD5f4 = BigInt("1489")
		const uintwmdnVXG = BigInt("1650")
		const addressMllCvae = accounts[2]
		const uintt2lTUlH = BigInt("708")
		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintnDMjKoy, {from: accounts[1]});
//		const addressWwsr3uC = await FairStockEquitysjUXdyi.setDataSource.call(addressZ4HCjuW, {from: accounts[1]});
//		const addressdNbB1ru = await FairStockEquitysjUXdyi.business.call(addressMllCvae, uintwmdnVXG, uintaciD5f4, uinttfodn2K, uintKJAYVu, {from: accounts[4]});
//		const uint256Dr2mZa = await FairStockEquitysjUXdyi.setProfitPercentMT.call(uintt2lTUlH, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.setDataSource.call(addressZ4HCjuW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshEMwwVJ = accounts[3]
		const addressBNAtF29 = accounts[2]
		const addressyX5obBC = accounts[5]
		const addressWW84U96 = accounts[5]
		const uintfLM2smC = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addresshEMwwVJ, addressBNAtF29, addressyX5obBC, addressWW84U96, uintfLM2smC, {from: accounts[4]});
		const uintZZgFUV = BigInt("2010")
		const uintVL3RkhH = BigInt("2032")
		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintZZgFUV, {from: accounts[1]});
//		await FairStockEquitysjUXdyi.withdrawMT.call({from: accounts[4]});
//		const uint256Dr2mZa = await FairStockEquitysjUXdyi.setProfitPercentMT.call(uintVL3RkhH, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.withdrawMT.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjxCO9kK = accounts[3]
		const address1gKpWW = accounts[2]
		const addressaY4ZNGU = accounts[5]
		const addressaBOL9SV = accounts[5]
		const uintAsODahU = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressjxCO9kK, address1gKpWW, addressaY4ZNGU, addressaBOL9SV, uintAsODahU, {from: accounts[4]});
		const uint1XU6R6 = BigInt("2010")
		const uintexLcy4s = BigInt("1080")
		const uintCeG1k9g = BigInt("1959")
		const addressx8Uh5Pw = accounts[0]
		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uint1XU6R6, {from: accounts[1]});
//		const uint256sowebO8 = await FairStockEquitysjUXdyi.reduceShare.call(uintexLcy4s, {from: accounts[1]});
//		const addressKtMx1jf = await FairStockEquitysjUXdyi.depositLPT.call(addressx8Uh5Pw, uintCeG1k9g, {from: accounts[2]});

		await expect(FairStockEquitysjUXdyi.reduceShare.call(uintexLcy4s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressu0xWhLH = accounts[3]
		const addressa3nykr = accounts[2]
		const addressfmROsYz = accounts[5]
		const addressYOrAOU = accounts[5]
		const uintPerRINC = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressu0xWhLH, addressa3nykr, addressfmROsYz, addressYOrAOU, uintPerRINC, {from: accounts[4]});
		const uintWnpS8xR = BigInt("1637")
		const addressL4qZRa0 = accounts[0]
		const uinto1mP8bH = BigInt("1272")
		const addressOmaG2DZ = accounts[3]
		const uintARXZyXM = BigInt("2006")
//		const addressfdsgPI = await FairStockEquitysjUXdyi.withdrawLPT.call(addressL4qZRa0, uintWnpS8xR, {from: accounts[1]});
//		const addressZ9XLum = await FairStockEquitysjUXdyi.depositLPT.call(addressOmaG2DZ, uinto1mP8bH, {from: accounts[4]});
//		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintARXZyXM, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.withdrawLPT.call(addressL4qZRa0, uintWnpS8xR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBeB7Hj3 = accounts[3]
		const addressKJlIPH7 = accounts[2]
		const addressscEyIir = accounts[5]
		const addressgrXEuD = accounts[5]
		const uinttf3v2Ka = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressBeB7Hj3, addressKJlIPH7, addressscEyIir, addressgrXEuD, uinttf3v2Ka, {from: accounts[4]});
		const uintU7siTxI = BigInt("298")
		const uintmgv5yKx = BigInt("1240")
		const uintTUD6kXH = BigInt("1795")
		const uintWaondzX = BigInt("1232")
		const uintfeBu5bV = BigInt("1724")
		const addressrQD44CX = accounts[2]
		const uintc36zCEH = BigInt("814")
		const uintYfrKw5v = BigInt("1983")
//		const uint256i5Mfxml = await FairStockEquitysjUXdyi.invest.call(uintU7siTxI, {from: accounts[3]});
//		const addresszbfUm1T = await FairStockEquitysjUXdyi.business.call(addressrQD44CX, uintfeBu5bV, uintWaondzX, uintTUD6kXH, uintmgv5yKx, {from: accounts[3]});
//		const uint256DOWFU3 = await FairStockEquitysjUXdyi.invest.call(uintc36zCEH, {from: accounts[4]});
//		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintYfrKw5v, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.invest.call(uintU7siTxI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspdw0I7N = accounts[3]
		const addressSNfIFx8 = accounts[2]
		const addressTWnEnvw = accounts[5]
		const addressbtlE0MO = accounts[5]
		const uintYmQfgH = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addresspdw0I7N, addressSNfIFx8, addressTWnEnvw, addressbtlE0MO, uintYmQfgH, {from: accounts[4]});
		const uintz47PZe9 = BigInt("2024")
		const uintJTcWutm = BigInt("862")
		const uintydA7Z1 = BigInt("2025")
		const uintEoU0XjD = BigInt("647")
		const uintf7XsE9s = BigInt("1734")
		const addressXIZODbA = accounts[2]
		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintz47PZe9, {from: accounts[1]});
//		const addressJS0XV3c = await FairStockEquitysjUXdyi.business.call(addressXIZODbA, uintf7XsE9s, uintEoU0XjD, uintydA7Z1, uintJTcWutm, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.business.call(addressXIZODbA, uintf7XsE9s, uintEoU0XjD, uintydA7Z1, uintJTcWutm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresss4tOPQ3 = accounts[3]
		const addressdhuEYQU = accounts[2]
		const addressA8linb3 = accounts[5]
		const addressa70TgOw = accounts[5]
		const uintf18mng = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addresss4tOPQ3, addressdhuEYQU, addressA8linb3, addressa70TgOw, uintf18mng, {from: accounts[4]});
		const uinteMipZou = BigInt("1398")
		const uint0yQsdQ = BigInt("661")
//		const uint256eaRLV5o = await FairStockEquitysjUXdyi.bonus.call(uinteMipZou, {from: accounts[5]});
//		const uint256Dr2mZa = await FairStockEquitysjUXdyi.setProfitPercentMT.call(uint0yQsdQ, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.bonus.call(uinteMipZou, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYgUBa1A = accounts[3]
		const addressLX55pE3 = accounts[2]
		const addressZXFVxHm = accounts[5]
		const addressPAlyElW = accounts[5]
		const uintuyb3Pkl = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressYgUBa1A, addressLX55pE3, addressZXFVxHm, addressPAlyElW, uintuyb3Pkl, {from: accounts[4]});
		const uintWAXpDd = BigInt("1820")
		const uintYb0qQko = BigInt("1800")
		const uintetpssyk = BigInt("1280")
		const uintvq1ll23 = BigInt("1675")
		const addressdYilUqM = accounts[5]
		const uintQNnZfrk = BigInt("1167")
		const addressyhtrQrH = accounts[3]
		const uint256RXRiVSU = await FairStockEquitysjUXdyi.setStartTime.call(uintWAXpDd, {from: accounts[4]});
//		const uint256O59QCjj = await FairStockEquitysjUXdyi.invest.call(uintYb0qQko, {from: accounts[4]});
//		const addressmojDpJ = await FairStockEquitysjUXdyi.withdrawBonusCallback.call(addressdYilUqM, uintvq1ll23, uintetpssyk, {from: accounts[2]});
//		const addresse0Dxbn = await FairStockEquitysjUXdyi.depositLPT.call(addressyhtrQrH, uintQNnZfrk, {from: accounts[4]});

		await expect(FairStockEquitysjUXdyi.invest.call(uintYb0qQko, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZmPiigw = accounts[3]
		const addresslrcxjMf = accounts[2]
		const addressdrH9tQ6 = accounts[5]
		const addressP8qyJoz = accounts[5]
		const uintY2OtO0 = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressZmPiigw, addresslrcxjMf, addressdrH9tQ6, addressP8qyJoz, uintY2OtO0, {from: accounts[4]});
		const uintRgg7e9o = BigInt("1150")
		const uintJyPqhDY = BigInt("837")
		const uintPQQuzvw = BigInt("61")
//		await FairStockEquitysjUXdyi.withdrawPJ.call({from: accounts[4]});
//		const uint256IxWZSV = await FairStockEquitysjUXdyi.setProfitPercentMT.call(uintRgg7e9o, {from: accounts[0]});
//		const uint256rrniVQ = await FairStockEquitysjUXdyi.setProfitPercentBonus.call(uintJyPqhDY, {from: accounts[4]});
//		const uint256hNNWjPf = await FairStockEquitysjUXdyi.invest.call(uintPQQuzvw, {from: accounts[0]});

		await expect(FairStockEquitysjUXdyi.withdrawPJ.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqOdfGI = accounts[3]
		const addressoJW67aH = accounts[2]
		const addressrlHHkIF = accounts[5]
		const addressm0BKUj6 = accounts[5]
		const uintL5LS4iU = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressqOdfGI, addressoJW67aH, addressrlHHkIF, addressm0BKUj6, uintL5LS4iU, {from: accounts[4]});
		const uint1bRui1 = BigInt("1150")
		const uintDvxIp79 = BigInt("1988")
//		await FairStockEquitysjUXdyi.f.call({from: accounts[1]});
//		await FairStockEquitysjUXdyi.checkStart.call({from: accounts[0]});
//		const uint256D9Q4sK = await FairStockEquitysjUXdyi.depositBonus.call(uint1bRui1, {from: accounts[0]});
//		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintDvxIp79, {from: accounts[1]});

		await expect(FairStockEquitysjUXdyi.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslQOOUcG = accounts[3]
		const addressupZEEWZ = accounts[2]
		const addressmlGSvaE = accounts[5]
		const addressi5AYJC4 = accounts[5]
		const uintHKu6Yv = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addresslQOOUcG, addressupZEEWZ, addressmlGSvaE, addressi5AYJC4, uintHKu6Yv, {from: accounts[4]});
		const uintEZjAbyX = BigInt("2011")
		const uintkdoorF = BigInt("1832")
		const uintLYZVgAt = BigInt("888")
		const addressH3aOmil = "0x0000000000000000000000000000000000000001"
		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintEZjAbyX, {from: accounts[1]});
		const addressjf13gKK = await FairStockEquitysjUXdyi.setModule.call(addressH3aOmil, uintLYZVgAt, uintkdoorF, {from: accounts[4]});
//		await FairStockEquitysjUXdyi.checkStart.call({from: accounts[2]});

		await expect(FairStockEquitysjUXdyi.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressFhmg9Hm = accounts[3]
		const addressCsBEND = accounts[2]
		const addressN2n4aUb = accounts[5]
		const addressBAX2enP = accounts[5]
		const uintHCNj4pJ = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressFhmg9Hm, addressCsBEND, addressN2n4aUb, addressBAX2enP, uintHCNj4pJ, {from: accounts[4]});
		const boolfSB1wKl = true
		const addressWxGVY7X = accounts[1]
		const uintTaze2e = BigInt("1814")
		const uintas30E68 = BigInt("1167")
		const addressdu21zdq = accounts[3]
		const addressfjz5PHZ = await FairStockEquitysjUXdyi.setLPT.call(addressWxGVY7X, boolfSB1wKl, {from: accounts[4]});
//		const uint256PjRsfLv = await FairStockEquitysjUXdyi.depositBonus.call(uintTaze2e, {from: accounts[1]});
//		const addresse0Dxbn = await FairStockEquitysjUXdyi.depositLPT.call(addressdu21zdq, uintas30E68, {from: accounts[4]});

		await expect(FairStockEquitysjUXdyi.depositBonus.call(uintTaze2e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressc58hYmf = accounts[3]
		const addressN0awqY1 = accounts[2]
		const addressCIgzkUz = accounts[5]
		const addressmvBPLc = accounts[5]
		const uinth0VLHrQ = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressc58hYmf, addressN0awqY1, addressCIgzkUz, addressmvBPLc, uinth0VLHrQ, {from: accounts[4]});
		const uintn9g4WBu = BigInt("1315")
		const uintkDirXkO = BigInt("1642")
		const addressB23ZLvV = accounts[0]
		const uintSGrzky = BigInt("1281")
		const uintiFAMTKg = BigInt("2033")
		const uintoqYmYBY = BigInt("1577")
		const uintmnVZ7w = BigInt("844")
		const uintvWXeL4 = BigInt("20")
		const uintBpmY10 = BigInt("261")
		const addressnigMLTY = accounts[3]
//		await FairStockEquitysjUXdyi.f.call({from: accounts[5]});
//		const addressNvbcNyb = await FairStockEquitysjUXdyi.withdrawMTCallback.call(addressB23ZLvV, uintkDirXkO, uintn9g4WBu, {from: accounts[5]});
//		const uint256IGrlHvm = await FairStockEquitysjUXdyi.getCostAmount.call(uintSGrzky, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256bOimQwf = await FairStockEquitysjUXdyi.getCostAmount.call(uintiFAMTKg, {from: accounts[1]});
//		const uint256wo3YHG = await FairStockEquitysjUXdyi.setProfitPercentPJ.call(uintoqYmYBY, {from: accounts[2]});
//		const uint256Sd82Ipp = await FairStockEquitysjUXdyi.setProfitPercentMT.call(uintmnVZ7w, {from: accounts[3]});
//		const addressGFBnWBV = await FairStockEquitysjUXdyi.withdrawBonusCallback.call(addressnigMLTY, uintBpmY10, uintvWXeL4, {from: accounts[4]});

		await expect(FairStockEquitysjUXdyi.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressX1a1Ba = accounts[3]
		const addressccslUOT = accounts[2]
		const addressAtMy1EY = accounts[5]
		const addressqxQx9zH = accounts[5]
		const uintLB3izoT = BigInt("444")
		const FairStockEquitysjUXdyi = await FairStockEquity.new(addressX1a1Ba, addressccslUOT, addressAtMy1EY, addressqxQx9zH, uintLB3izoT, {from: accounts[4]});
		const uintCIIcTQN = BigInt("2010")
		const uintZnuxCM = BigInt("735")
		const addresslubS2gf = accounts[4]
		const uintPOQ5S7M = BigInt("1167")
		const addressuVP90fU = accounts[4]
//		const addressuf21NSh = await FairStockEquitysjUXdyi.withdrawBonusCallback.call(addresslubS2gf, uintZnuxCM, uintCIIcTQN, {from: accounts[5]});
//		const addresse0Dxbn = await FairStockEquitysjUXdyi.depositLPT.call(addressuVP90fU, uintPOQ5S7M, {from: accounts[4]});

		await expect(FairStockEquitysjUXdyi.withdrawBonusCallback.call(addresslubS2gf, uintZnuxCM, uintCIIcTQN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressWMfZC4y = accounts[2]
		const addressgkLidxA = accounts[1]
		const addressQ1T8Duo = accounts[0]
		const addressByfwouo = accounts[2]
		const uintOkXnH4z = BigInt("1290")
		const FairStockEquityeqq86se = await FairStockEquity.new(addressWMfZC4y, addressgkLidxA, addressQ1T8Duo, addressByfwouo, uintOkXnH4z, {from: accounts[3]});
		const uintOjgQ8vn = BigInt("109")
		const uintGVC7to = BigInt("1177")
		const uintWABz9RQ = BigInt("777")
		const uintTbI4nTx = BigInt("1349")
		const uintpm1IWxi = BigInt("209")
		const addressfRu3k0s = accounts[2]
//		const uint256IYUK0F8 = await FairStockEquityeqq86se.setStartTime.call(uintOjgQ8vn, {from: accounts[3]});
//		await FairStockEquityeqq86se.withdrawPJ.call({from: accounts[0]});
//		const addressXvQ3VNG = await FairStockEquityeqq86se.business.call(addressfRu3k0s, uintpm1IWxi, uintTbI4nTx, uintWABz9RQ, uintGVC7to, {from: accounts[4]});

		await expect(FairStockEquityeqq86se.setStartTime.call(uintOjgQ8vn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})