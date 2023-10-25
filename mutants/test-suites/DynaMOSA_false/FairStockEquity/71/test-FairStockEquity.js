const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addresszcuUxbD = "0x0000000000000000000000000000000000000001"
		const addresshFGRAqv = accounts[2]
		const addressmJFll0 = accounts[4]
		const addressHLKYIuw = accounts[3]
		const uintDA1p5ZS = BigInt("1352")
		const FairStockEquitymbr3wcJ = await FairStockEquity.new(addresszcuUxbD, addresshFGRAqv, addressmJFll0, addressHLKYIuw, uintDA1p5ZS, {from: accounts[1]});
		const uintSovJ4DF = BigInt("567")
		const addressXJe41VH = accounts[2]
		const uintpSSC01f = BigInt("1869")
		const uintPxnbO1q = BigInt("171")
		const uintVdJzgXJ = BigInt("1093")
		const uintTE6dy2n = BigInt("396")
//		const addressrPAhx65 = await FairStockEquitymbr3wcJ.depositLPT.call(addressXJe41VH, uintSovJ4DF, {from: accounts[3]});
//		const uint256M9BhiZB = await FairStockEquitymbr3wcJ.setProfitPercentBonus.call(uintpSSC01f, {from: accounts[1]});
//		const uint256DsqwNlM = await FairStockEquitymbr3wcJ.reduceShare.call(uintPxnbO1q, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2562h2w0V = await FairStockEquitymbr3wcJ.getCostAmount.call(uintVdJzgXJ, {from: accounts[2]});
//		const uint256HlpfWg0 = await FairStockEquitymbr3wcJ.setProfitPercentMT.call(uintTE6dy2n, {from: accounts[0]});

		await expect(FairStockEquitymbr3wcJ.depositLPT.call(addressXJe41VH, uintSovJ4DF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmpj8bb9 = accounts[2]
		const addresskOTyXlH = "0x0000000000000000000000000000000000000001"
		const addressjta4sv = accounts[3]
		const addressQ1rLJla = accounts[2]
		const uintFyo7WsW = BigInt("9")
		const FairStockEquityCmGPJit = await FairStockEquity.new(addressmpj8bb9, addresskOTyXlH, addressjta4sv, addressQ1rLJla, uintFyo7WsW, {from: accounts[4]});
		const uintuo89oBq = BigInt("658")
//		const uint256RcBLYK7 = await FairStockEquityCmGPJit.setProfitPercentMT.call(uintuo89oBq, {from: accounts[2]});
//		await FairStockEquityCmGPJit.checkStart.call({from: accounts[5]});
//		await FairStockEquityCmGPJit.withdrawBonus.call({from: accounts[2]});

		await expect(FairStockEquityCmGPJit.setProfitPercentMT.call(uintuo89oBq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHCdtw7D = accounts[5]
		const addresstLZ4PM5 = accounts[1]
		const addressTtvu3DQ = accounts[0]
		const addressXSWnwhk = "0x0000000000000000000000000000000000000001"
		const uintCtrnYQL = BigInt("1273")
		const FairStockEquityDml08L1 = await FairStockEquity.new(addressHCdtw7D, addresstLZ4PM5, addressTtvu3DQ, addressXSWnwhk, uintCtrnYQL, {from: accounts[2]});
		const uintuuk2OtP = BigInt("2027")
		const uintLDpg9n = BigInt("1005")
		const addressVzU7bwr = accounts[3]
		const uintRUKVURp = BigInt("779")
		const boolLEwZAJQ = true
		const addressqk68J62 = accounts[1]
		const uinteUKvcxT = BigInt("217")
		const uintWG9d2Tc = BigInt("187")
//		const addressJZsd20O = await FairStockEquityDml08L1.setModule.call(addressVzU7bwr, uintLDpg9n, uintuuk2OtP, {from: accounts[4]});
//		await FairStockEquityDml08L1.withdrawBonus.call({from: accounts[3]});
//		const uint256ro762gf = await FairStockEquityDml08L1.setGasFeeForCallback.call(uintRUKVURp, {from: accounts[4]});
//		const addresshOEzNp = await FairStockEquityDml08L1.setLPT.call(addressqk68J62, boolLEwZAJQ, {from: accounts[5]});
//		const uint256IdU6PhM = await FairStockEquityDml08L1.setProfitPercentPJ.call(uinteUKvcxT, {from: accounts[3]});
//		const uint256QAH3EyC = await FairStockEquityDml08L1.setGasFeeForCallback.call(uintWG9d2Tc, {from: accounts[0]});

		await expect(FairStockEquityDml08L1.setModule.call(addressVzU7bwr, uintLDpg9n, uintuuk2OtP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbgE7oRN = accounts[5]
		const addressdZ2ZINM = accounts[2]
		const addressGzzg8BM = accounts[4]
		const addressLThjczs = accounts[4]
		const uinteG81gA1 = BigInt("879")
		const FairStockEquityU8rKopD = await FairStockEquity.new(addressbgE7oRN, addressdZ2ZINM, addressGzzg8BM, addressLThjczs, uinteG81gA1, {from: accounts[2]});
		const uintgqPueE = BigInt("884")
		const addresskFu0mCr = accounts[0]
//		await FairStockEquityU8rKopD.withdrawBonus.call({from: accounts[4]});
//		await FairStockEquityU8rKopD.withdrawPJ.call({from: accounts[0]});
//		const addressxhO8uPM = await FairStockEquityU8rKopD.depositLPT.call(addresskFu0mCr, uintgqPueE, {from: accounts[5]});
//		await FairStockEquityU8rKopD.withdrawMT.call({from: accounts[4]});

		await expect(FairStockEquityU8rKopD.withdrawBonus.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYFkERoi = accounts[2]
		const address81VZnU = accounts[5]
		const addressOFwWFXv = accounts[4]
		const addressjXG47mg = accounts[1]
		const uintyP9Anud = BigInt("779")
		const FairStockEquityQD38I05 = await FairStockEquity.new(addressYFkERoi, address81VZnU, addressOFwWFXv, addressjXG47mg, uintyP9Anud, {from: accounts[3]});
		const uintqymKQdP = BigInt("108")
		const addressXq7ZAN = accounts[3]
		const uintLnqxSPG = BigInt("1458")
		const uintq5v0g3W = BigInt("946")
		const uintWSEbspK = BigInt("558")
		const addressy0VWYlH = accounts[3]
//		await FairStockEquityQD38I05.onlyDataSource.call({from: accounts[4]});
//		const addressVDMv5F = await FairStockEquityQD38I05.withdrawLPT.call(addressXq7ZAN, uintqymKQdP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256nxagBid = await FairStockEquityQD38I05.setProfitPercentMT.call(uintLnqxSPG, {from: accounts[0]});
//		await FairStockEquityQD38I05.withdrawMT.call({from: accounts[0]});
//		const addressGhWp8L4 = await FairStockEquityQD38I05.withdrawMTCallback.call(addressy0VWYlH, uintWSEbspK, uintq5v0g3W, {from: accounts[3]});

		await expect(FairStockEquityQD38I05.onlyDataSource.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address2CyTQ5 = "0x0000000000000000000000000000000000000001"
		const addressA4UjSTF = accounts[4]
		const addressxDKEi65 = accounts[0]
		const addressmyRkg4x = accounts[4]
		const uintkxH6eB0 = BigInt("1795")
		const FairStockEquitySVhmGq = await FairStockEquity.new(address2CyTQ5, addressA4UjSTF, addressxDKEi65, addressmyRkg4x, uintkxH6eB0, {from: accounts[4]});
		const uintcsJYESk = BigInt("102")
		const addressZY4JFu = accounts[3]
		const uintEN6FcHV = BigInt("1139")
		const uintRl8tiS6 = BigInt("1983")
		const uinttBhMnwP = BigInt("849")
		const uinthm3MxBz = BigInt("1056")
		const uintdxiQiym = BigInt("444")
		const addressEHkHo7v = accounts[2]
//		await FairStockEquitySVhmGq.f.call({from: accounts[4]});
//		const uint256h2vyM5i = await FairStockEquitySVhmGq.setProfitPercentBonus.call(uintcsJYESk, {from: accounts[2]});
//		const addressBImXvF6 = await FairStockEquitySVhmGq.setDataSource.call(addressZY4JFu, {from: accounts[1]});
//		const uint256g657s5B = await FairStockEquitySVhmGq.setDegree.call(uintdxiQiym, uinthm3MxBz, uinttBhMnwP, uintRl8tiS6, uintEN6FcHV, {from: accounts[2]});
//		const addressKALr1dB = await FairStockEquitySVhmGq.setDataSource.call(addressEHkHo7v, {from: accounts[3]});

		await expect(FairStockEquitySVhmGq.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYoLZm7b = accounts[4]
		const addressurDzVEq = accounts[1]
		const addressDUmkxnQ = accounts[4]
		const addressmDHHNA8 = accounts[0]
		const uintIhfy0dP = BigInt("1459")
		const FairStockEquityEGbuwS = await FairStockEquity.new(addressYoLZm7b, addressurDzVEq, addressDUmkxnQ, addressmDHHNA8, uintIhfy0dP, {from: accounts[0]});
		const uintQxqgCx9 = BigInt("242")
		const uintjBKOzh = BigInt("188")
//		await FairStockEquityEGbuwS.withdrawMT.call({from: accounts[2]});
//		const uint256H0ztgvV = await FairStockEquityEGbuwS.setProfitPercentMT.call(uintQxqgCx9, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UmL4EPe = await FairStockEquityEGbuwS.setProfitPercentPJ.call(uintjBKOzh, {from: accounts[0]});

		await expect(FairStockEquityEGbuwS.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrYUTeFU = accounts[5]
		const addressqc8AJj1 = accounts[1]
		const addressbSjgTya = accounts[0]
		const addresslQ2bIY3 = "0x0000000000000000000000000000000000000001"
		const uintxV22TUQ = BigInt("1273")
		const FairStockEquityDml08L1 = await FairStockEquity.new(addressrYUTeFU, addressqc8AJj1, addressbSjgTya, addresslQ2bIY3, uintxV22TUQ, {from: accounts[2]});
		const uintFPJ8v9 = BigInt("1652")
		const uintdLQcIP = BigInt("1640")
		const addressq2YJqNw = accounts[1]
		const uintRNpyOoK = BigInt("2027")
		const uintuPO8By5 = BigInt("1005")
		const addressfPPLGUf = accounts[3]
		const uinteOcoL6h = BigInt("779")
		const boolLEwZAJQ = true
		const addresspNyi1wy = accounts[1]
		const uintqN22PJz = BigInt("217")
		const uinta5doeM3 = BigInt("187")
//		const addresspUDBTRz = await FairStockEquityDml08L1.withdrawBonusCallback.call(addressq2YJqNw, uintdLQcIP, uintFPJ8v9, {from: "0x0000000000000000000000000000000000000001"});
//		const addressJZsd20O = await FairStockEquityDml08L1.setModule.call(addressfPPLGUf, uintuPO8By5, uintRNpyOoK, {from: accounts[4]});
//		await FairStockEquityDml08L1.withdrawBonus.call({from: accounts[3]});
//		const uint256ro762gf = await FairStockEquityDml08L1.setGasFeeForCallback.call(uinteOcoL6h, {from: accounts[4]});
//		const addresshOEzNp = await FairStockEquityDml08L1.setLPT.call(addresspNyi1wy, boolLEwZAJQ, {from: accounts[5]});
//		const uint256IdU6PhM = await FairStockEquityDml08L1.setProfitPercentPJ.call(uintqN22PJz, {from: accounts[3]});
//		const uint256QAH3EyC = await FairStockEquityDml08L1.setGasFeeForCallback.call(uinta5doeM3, {from: accounts[0]});

		await expect(FairStockEquityDml08L1.withdrawBonusCallback.call(addressq2YJqNw, uintdLQcIP, uintFPJ8v9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPbnilZZ = accounts[2]
		const addressNTDjrvs = accounts[5]
		const addresstQOhEAl = accounts[2]
		const addressideiukF = accounts[0]
		const uintoVdPUcQ = BigInt("938")
		const FairStockEquityE8V3isZ = await FairStockEquity.new(addressPbnilZZ, addressNTDjrvs, addresstQOhEAl, addressideiukF, uintoVdPUcQ, {from: accounts[2]});
		const uinto3TO2iF = BigInt("1490")
		const uintBA3iOyA = BigInt("448")
		const addressLYxwMFJ = accounts[5]
		const addressUSG9u9z = accounts[3]
//		const addressobmFDpd = await FairStockEquityE8V3isZ.withdrawBonusCallback.call(addressLYxwMFJ, uintBA3iOyA, uinto3TO2iF, {from: accounts[3]});
//		const addressdsJeynS = await FairStockEquityE8V3isZ.setDataSource.call(addressUSG9u9z, {from: accounts[1]});

		await expect(FairStockEquityE8V3isZ.withdrawBonusCallback.call(addressLYxwMFJ, uintBA3iOyA, uinto3TO2iF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxJTbwbi = accounts[4]
		const addressSX99FKL = accounts[5]
		const addresswI7bXss = accounts[0]
		const addressXBNeRCT = accounts[4]
		const uintxzaNjI = BigInt("46")
		const FairStockEquityDZzlDbm = await FairStockEquity.new(addressxJTbwbi, addressSX99FKL, addresswI7bXss, addressXBNeRCT, uintxzaNjI, {from: accounts[2]});
		const uintC84Aa5y = BigInt("29")
		const uintT2Cl0Gh = BigInt("1630")
		const uinthiySlgw = BigInt("412")
		const uintGlFCJlb = BigInt("367")
		const addressiDnODg8 = accounts[4]
		const uint6ZiZkH = BigInt("1439")
		const uintldElyB1 = BigInt("1136")
		const addressoBmNDUl = accounts[2]
		const uintUpVDltM = BigInt("1050")
//		const addressA42tzp = await FairStockEquityDZzlDbm.business.call(addressiDnODg8, uintGlFCJlb, uinthiySlgw, uintT2Cl0Gh, uintC84Aa5y, {from: accounts[1]});
//		await FairStockEquityDZzlDbm.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressbF1Lfi9 = await FairStockEquityDZzlDbm.setModule.call(addressoBmNDUl, uintldElyB1, uint6ZiZkH, {from: accounts[3]});
//		await FairStockEquityDZzlDbm.withdrawMT.call({from: accounts[5]});
//		const uint256CYCe8T9 = await FairStockEquityDZzlDbm.setProfitPercentPJ.call(uintUpVDltM, {from: accounts[3]});

		await expect(FairStockEquityDZzlDbm.business.call(addressiDnODg8, uintGlFCJlb, uinthiySlgw, uintT2Cl0Gh, uintC84Aa5y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJ9SOtmf = accounts[3]
		const addresspxtpdKz = accounts[2]
		const addressDIBFr8H = accounts[2]
		const addressS1MSl9 = accounts[3]
		const uintRyHdf45 = BigInt("303")
		const FairStockEquityzbeqVDm = await FairStockEquity.new(addressJ9SOtmf, addresspxtpdKz, addressDIBFr8H, addressS1MSl9, uintRyHdf45, {from: accounts[0]});
		const uintvJzuBOs = BigInt("341")
		const uintweLsnkS = BigInt("413")
		const uintwyRgVX = BigInt("1577")
		const addressTuluZgb = accounts[0]
		const uintrOYIOJ3 = BigInt("2")
		const uinteZbKgd4 = BigInt("374")
		const addressE3ceCD = accounts[0]
		const uintm53xKdS = BigInt("1495")
		const uintL8MjlEi = BigInt("712")
		const addressCyVE5jQ = accounts[0]
		const uintqjW2hOh = BigInt("969")
		const address3cBJ6c = accounts[2]
		const uint256gMf53dW = await FairStockEquityzbeqVDm.getCostAmount.call(uintvJzuBOs, {from: accounts[3]});
//		const addressrRqyeff = await FairStockEquityzbeqVDm.setModule.call(addressTuluZgb, uintwyRgVX, uintweLsnkS, {from: accounts[5]});
//		const uint256hTfjrbL = await FairStockEquityzbeqVDm.setProfitPercentBonus.call(uintrOYIOJ3, {from: accounts[2]});
//		const addressMWQETpd = await FairStockEquityzbeqVDm.depositLPT.call(addressE3ceCD, uinteZbKgd4, {from: accounts[3]});
//		const addresschiTDb0 = await FairStockEquityzbeqVDm.withdrawMTCallback.call(addressCyVE5jQ, uintL8MjlEi, uintm53xKdS, {from: accounts[0]});
//		const uint256siMHNZe = await FairStockEquityzbeqVDm.setProfitPercentBonus.call(uintqjW2hOh, {from: accounts[2]});
//		const addressgfb6uJ = await FairStockEquityzbeqVDm.setDataSource.call(address3cBJ6c, {from: accounts[0]});

		await expect(FairStockEquityzbeqVDm.setModule.call(addressTuluZgb, uintwyRgVX, uintweLsnkS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresskBWtw6f = accounts[2]
		const addresstcN9voB = accounts[5]
		const addressMDRsl9C = accounts[0]
		const addressdN4hasB = accounts[0]
		const uintJOLtQBk = BigInt("251")
		const FairStockEquitydpOc1R6 = await FairStockEquity.new(addresskBWtw6f, addresstcN9voB, addressMDRsl9C, addressdN4hasB, uintJOLtQBk, {from: accounts[3]});
		const uintxVDtBI = BigInt("755")
		const uintdQtXvI = BigInt("1097")
		const address7oJ9os = "0x0000000000000000000000000000000000000001"
//		await FairStockEquitydpOc1R6.f.call({from: accounts[3]});
//		const uint256l35Tw4U = await FairStockEquitydpOc1R6.getCostAmount.call(uintxVDtBI, {from: accounts[1]});
//		const addressY4ZO5Xc = await FairStockEquitydpOc1R6.withdrawLPT.call(address7oJ9os, uintdQtXvI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitydpOc1R6.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKe08cyX = accounts[2]
		const addressl8XZFtx = accounts[0]
		const addressAHyoRs2 = accounts[2]
		const addressvuyraHp = accounts[2]
		const uintbNc06WH = BigInt("880")
		const FairStockEquitytFy2NO = await FairStockEquity.new(addressKe08cyX, addressl8XZFtx, addressAHyoRs2, addressvuyraHp, uintbNc06WH, {from: accounts[5]});
		const uintaSmcjcI = BigInt("1525")
		const uintaHhT41n = BigInt("1830")
		const addressLT3h8EH = accounts[1]
		const boolNUKZ0on = true
		const addressc0Qa5wa = accounts[3]
		const uintL399qch = BigInt("80")
		const addressKhGNBHN = accounts[3]
		const uintU0Mwagg = BigInt("1423")
		const uintau6f8o = BigInt("679")
		const addresstqCOZi4 = "0x0000000000000000000000000000000000000001"
		const uintAVPTMgD = BigInt("2014")
		const addressc07tXxU = "0x0000000000000000000000000000000000000001"
//		const addressvSjqxKV = await FairStockEquitytFy2NO.withdrawMTCallback.call(addressLT3h8EH, uintaHhT41n, uintaSmcjcI, {from: accounts[2]});
//		const addressmW3b26 = await FairStockEquitytFy2NO.setLPT.call(addressc0Qa5wa, boolNUKZ0on, {from: accounts[4]});
//		const addressxRIed22 = await FairStockEquitytFy2NO.depositLPT.call(addressKhGNBHN, uintL399qch, {from: accounts[2]});
//		const addressC45ehWX = await FairStockEquitytFy2NO.withdrawMTCallback.call(addresstqCOZi4, uintau6f8o, uintU0Mwagg, {from: accounts[3]});
//		const addressA2CGnka = await FairStockEquitytFy2NO.withdrawLPT.call(addressc07tXxU, uintAVPTMgD, {from: accounts[1]});

		await expect(FairStockEquitytFy2NO.withdrawMTCallback.call(addressLT3h8EH, uintaHhT41n, uintaSmcjcI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMWuJYrf = "0x0000000000000000000000000000000000000001"
		const addressitnVPs = accounts[1]
		const addressz9iCWes = accounts[1]
		const addressGd6rhDJ = accounts[3]
		const uintrg42QW = BigInt("1447")
		const FairStockEquityHS1aU1Q = await FairStockEquity.new(addressMWuJYrf, addressitnVPs, addressz9iCWes, addressGd6rhDJ, uintrg42QW, {from: accounts[5]});
		const uintGhEwngT = BigInt("504")
		const uintgDRi65 = BigInt("901")
		const uintRQKl4LN = BigInt("223")
		const uint256co7Oi4J = await FairStockEquityHS1aU1Q.setProfitPercentMT.call(uintGhEwngT, {from: accounts[5]});
//		const uint256KHi2acy = await FairStockEquityHS1aU1Q.depositBonus.call(uintgDRi65, {from: accounts[2]});
//		const uint256KzyyvEy = await FairStockEquityHS1aU1Q.setProfitPercentBonus.call(uintRQKl4LN, {from: accounts[0]});
//		await FairStockEquityHS1aU1Q.checkStart.call({from: accounts[3]});
//		await FairStockEquityHS1aU1Q.checkStart.call({from: accounts[3]});

		await expect(FairStockEquityHS1aU1Q.depositBonus.call(uintgDRi65, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressaRTDp7 = accounts[3]
		const addressXOJW90J = accounts[2]
		const addressA5IQAC2 = accounts[1]
		const addressTm8zaiu = accounts[2]
		const uintyKYioKK = BigInt("920")
		const FairStockEquityEF1OMF = await FairStockEquity.new(addressaRTDp7, addressXOJW90J, addressA5IQAC2, addressTm8zaiu, uintyKYioKK, {from: "0x0000000000000000000000000000000000000001"});
		const uintEr5eirM = BigInt("771")
		const uintbMqgQFF = BigInt("1881")
		const uint4cjboH = BigInt("1770")
		const addressVUD3cX = "0x0000000000000000000000000000000000000001"
		const uintvXX7Lb = BigInt("76")
		const uintmqP6bCT = BigInt("1975")
		const addresso6cLHbG = accounts[3]
		const uint256rrPXApa = await FairStockEquityEF1OMF.setProfitPercentBonus.call(uintEr5eirM, {from: accounts[1]});
		const addressqKaPuXM = await FairStockEquityEF1OMF.withdrawMTCallback.call(addressVUD3cX, uint4cjboH, uintbMqgQFF, {from: accounts[5]});
		const addressCYH5wDf = await FairStockEquityEF1OMF.withdrawBonusCallback.call(addresso6cLHbG, uintmqP6bCT, uintvXX7Lb, {from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addressjOXN07n = accounts[3]
		const addressmueOT8f = accounts[2]
		const addressFmYrNES = accounts[2]
		const addresssK5tdO8 = accounts[3]
		const uintxNU2xVj = BigInt("303")
		const FairStockEquityzbeqVDm = await FairStockEquity.new(addressjOXN07n, addressmueOT8f, addressFmYrNES, addresssK5tdO8, uintxNU2xVj, {from: accounts[0]});
		const uintaIWde9H = BigInt("1295")
		const uintQBwWpBq = BigInt("651")
		const uintU84QML = BigInt("1372")
		const addressvXWfHzr = accounts[3]
		const uintpB3b1z8 = BigInt("98")
		const uintJsvEVRZ = BigInt("1665")
		const uintvSYuNpq = BigInt("1851")
		const uintqFJmW9 = BigInt("795")
		const addressRZudeVU = accounts[1]
		const uintdK34cBw = BigInt("413")
		const uint1qpVlO = BigInt("1577")
		const addressBtMFrCJ = accounts[0]
		const uintqhtkeED = BigInt("48")
		const uintgDK6hvP = BigInt("591")
		const addressWjmWHs7 = "0x0000000000000000000000000000000000000001"
		const uintTl9sZ3M = BigInt("2")
		const uinthK3f86t = BigInt("374")
		const addressRWXDPX = accounts[0]
		const uintrYT32Ih = BigInt("116")
		const uintQ5e6CX6 = BigInt("1495")
		const uintENwU7Xv = BigInt("712")
		const addressRlOcUOo = accounts[0]
		const uintqv598a4 = BigInt("769")
		const addressygmhnse = accounts[2]
		const uint6z76lQ = BigInt("1649")
		const uintGZZUa42 = BigInt("176")
		const uintg7SMm5T = BigInt("769")
		const uintQurwKc = BigInt("513")
		const uintRt7fXui = BigInt("456")
		const addressGa9eBpB = "0x0000000000000000000000000000000000000001"
		const uint256gMf53dW = await FairStockEquityzbeqVDm.getCostAmount.call(uintaIWde9H, {from: accounts[3]});
		const addressqCuRBb9 = await FairStockEquityzbeqVDm.setModule.call(addressvXWfHzr, uintU84QML, uintQBwWpBq, {from: accounts[0]});
//		const addresssHX9i6n = await FairStockEquityzbeqVDm.business.call(addressRZudeVU, uintqFJmW9, uintvSYuNpq, uintJsvEVRZ, uintpB3b1z8, {from: accounts[4]});
//		const addressrRqyeff = await FairStockEquityzbeqVDm.setModule.call(addressBtMFrCJ, uint1qpVlO, uintdK34cBw, {from: accounts[5]});
//		const addressc1e4CXf = await FairStockEquityzbeqVDm.withdrawBonusCallback.call(addressWjmWHs7, uintgDK6hvP, uintqhtkeED, {from: accounts[4]});
//		const uint256hTfjrbL = await FairStockEquityzbeqVDm.setProfitPercentBonus.call(uintTl9sZ3M, {from: accounts[2]});
//		const addressMWQETpd = await FairStockEquityzbeqVDm.depositLPT.call(addressRWXDPX, uinthK3f86t, {from: accounts[3]});
//		const uint256uzuBPUX = await FairStockEquityzbeqVDm.reduceShare.call(uintrYT32Ih, {from: accounts[3]});
//		await FairStockEquityzbeqVDm.withdrawMT.call({from: accounts[0]});
//		const addresschiTDb0 = await FairStockEquityzbeqVDm.withdrawMTCallback.call(addressRlOcUOo, uintENwU7Xv, uintQ5e6CX6, {from: accounts[0]});
//		const uint256bpmUFdT = await FairStockEquityzbeqVDm.setProfitPercentPJ.call(uintqv598a4, {from: accounts[0]});
//		const addressgfb6uJ = await FairStockEquityzbeqVDm.setDataSource.call(addressygmhnse, {from: accounts[0]});
//		const uint256K57pkSC = await FairStockEquityzbeqVDm.getCostAmount.call(uint6z76lQ, {from: accounts[4]});
//		const addressJ6FW15p = await FairStockEquityzbeqVDm.business.call(addressGa9eBpB, uintRt7fXui, uintQurwKc, uintg7SMm5T, uintGZZUa42, {from: accounts[0]});

		await expect(FairStockEquityzbeqVDm.business.call(addressRZudeVU, uintqFJmW9, uintvSYuNpq, uintJsvEVRZ, uintpB3b1z8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBx6hlkX = accounts[2]
		const addressSnDoBvT = accounts[5]
		const addressk1kCiMT = accounts[0]
		const addressgK5k4Jp = accounts[0]
		const uintGsBT8LR = BigInt("251")
		const FairStockEquitydpOc1R6 = await FairStockEquity.new(addressBx6hlkX, addressSnDoBvT, addressk1kCiMT, addressgK5k4Jp, uintGsBT8LR, {from: accounts[3]});
		const uintl6cso1G = BigInt("1092")
		const uint256sEhheJO = await FairStockEquitydpOc1R6.setStartTime.call(uintl6cso1G, {from: accounts[3]});
//		await FairStockEquitydpOc1R6.f.call({from: accounts[3]});

		await expect(FairStockEquitydpOc1R6.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressX7NwGON = accounts[3]
		const addressEsnn2ZF = accounts[2]
		const addressZK43VW2 = accounts[2]
		const addressiJhtFF = accounts[3]
		const uintmTs0LhZ = BigInt("303")
		const FairStockEquityzbeqVDm = await FairStockEquity.new(addressX7NwGON, addressEsnn2ZF, addressZK43VW2, addressiJhtFF, uintmTs0LhZ, {from: accounts[0]});
		const uintawI9BGp = BigInt("1295")
		const uintBvvxKW = BigInt("94")
		const uintnwzAE6d = BigInt("98")
		const uintbx6AJS2 = BigInt("1665")
		const uintgG9fWha = BigInt("1851")
		const uintDuy11os = BigInt("795")
		const addressI9CmMv5 = accounts[1]
		const uintgNG6ylB = BigInt("413")
		const uint6p6nyO = BigInt("1577")
		const addressXDGo0I8 = accounts[0]
		const uinthvEiljH = BigInt("48")
		const uintdLtFj40 = BigInt("591")
		const addressWANkYQJ = "0x0000000000000000000000000000000000000001"
		const addressdliHIRB = accounts[3]
		const uintwLK7EK = BigInt("886")
		const uintibO8Ny = BigInt("2")
		const uinteYuxLK = BigInt("622")
		const uintmumuuSR = BigInt("374")
		const addressGSLjb6 = accounts[0]
		const uintSJugQzA = BigInt("124")
		const uintIWoa3uo = BigInt("998")
		const uintEPBQRkh = BigInt("712")
		const addresswhcKMvH = accounts[0]
		const addressQ6R4yt7 = accounts[2]
		const uint3gGw6o = BigInt("1649")
		const uintapXn17N = BigInt("176")
		const uintVQddgSh = BigInt("769")
		const uintL1M3Aiy = BigInt("513")
		const uintG7NPvRV = BigInt("456")
		const addresscNPRs60 = "0x0000000000000000000000000000000000000001"
		const uint256gMf53dW = await FairStockEquityzbeqVDm.getCostAmount.call(uintawI9BGp, {from: accounts[3]});
//		const uint256Vs2aIgP = await FairStockEquityzbeqVDm.invest.call(uintBvvxKW, {from: accounts[3]});
//		const addresssHX9i6n = await FairStockEquityzbeqVDm.business.call(addressI9CmMv5, uintDuy11os, uintgG9fWha, uintbx6AJS2, uintnwzAE6d, {from: accounts[4]});
//		const addressrRqyeff = await FairStockEquityzbeqVDm.setModule.call(addressXDGo0I8, uint6p6nyO, uintgNG6ylB, {from: accounts[5]});
//		const addressc1e4CXf = await FairStockEquityzbeqVDm.withdrawBonusCallback.call(addressWANkYQJ, uintdLtFj40, uinthvEiljH, {from: accounts[4]});
//		const addressnMIGAXm = await FairStockEquityzbeqVDm.setDataSource.call(addressdliHIRB, {from: accounts[3]});
//		const uint256rsKF7dp = await FairStockEquityzbeqVDm.bonus.call(uintwLK7EK, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256hTfjrbL = await FairStockEquityzbeqVDm.setProfitPercentBonus.call(uintibO8Ny, {from: accounts[2]});
//		const uint256YFBurwX = await FairStockEquityzbeqVDm.setStartTime.call(uinteYuxLK, {from: accounts[3]});
//		const addressMWQETpd = await FairStockEquityzbeqVDm.depositLPT.call(addressGSLjb6, uintmumuuSR, {from: accounts[3]});
//		const uint256uzuBPUX = await FairStockEquityzbeqVDm.reduceShare.call(uintSJugQzA, {from: accounts[3]});
//		await FairStockEquityzbeqVDm.withdrawMT.call({from: accounts[0]});
//		const addresschiTDb0 = await FairStockEquityzbeqVDm.withdrawMTCallback.call(addresswhcKMvH, uintEPBQRkh, uintIWoa3uo, {from: accounts[0]});
//		const addressgfb6uJ = await FairStockEquityzbeqVDm.setDataSource.call(addressQ6R4yt7, {from: accounts[0]});
//		const uint256K57pkSC = await FairStockEquityzbeqVDm.getCostAmount.call(uint3gGw6o, {from: accounts[4]});
//		const addressJ6FW15p = await FairStockEquityzbeqVDm.business.call(addresscNPRs60, uintG7NPvRV, uintL1M3Aiy, uintVQddgSh, uintapXn17N, {from: accounts[0]});

		await expect(FairStockEquityzbeqVDm.invest.call(uintBvvxKW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressChlzMIR = accounts[2]
		const addressy6ngAQD = accounts[5]
		const addressyQpA0k = accounts[0]
		const addressgt7PxJ2 = accounts[0]
		const uintd1HDQXX = BigInt("251")
		const FairStockEquitydpOc1R6 = await FairStockEquity.new(addressChlzMIR, addressy6ngAQD, addressyQpA0k, addressgt7PxJ2, uintd1HDQXX, {from: accounts[3]});
		const uinta0Mfk4B = BigInt("541")
//		const uint256lVBVDqb = await FairStockEquitydpOc1R6.reduceShare.call(uinta0Mfk4B, {from: accounts[4]});
//		await FairStockEquitydpOc1R6.f.call({from: accounts[3]});

		await expect(FairStockEquitydpOc1R6.reduceShare.call(uinta0Mfk4B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresswSxEzf0 = accounts[2]
		const addressV560Uzz = accounts[5]
		const addresstt3XreH = accounts[0]
		const addressKa5MAVZ = accounts[0]
		const uinthkUukHr = BigInt("251")
		const FairStockEquitydpOc1R6 = await FairStockEquity.new(addresswSxEzf0, addressV560Uzz, addresstt3XreH, addressKa5MAVZ, uinthkUukHr, {from: accounts[3]});
		const boolQrs0C7U = false
		const addressbQrt5YQ = accounts[0]
		const address1D185m = await FairStockEquitydpOc1R6.setLPT.call(addressbQrt5YQ, boolQrs0C7U, {from: accounts[3]});
//		await FairStockEquitydpOc1R6.f.call({from: accounts[3]});

		await expect(FairStockEquitydpOc1R6.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPdDQuMH = accounts[5]
		const addressj0usNUl = accounts[4]
		const addressrcAdeHo = accounts[4]
		const addressigv6xn = accounts[3]
		const uintkVJgPgG = BigInt("971")
		const FairStockEquityzm6ylnJ = await FairStockEquity.new(addressPdDQuMH, addressj0usNUl, addressrcAdeHo, addressigv6xn, uintkVJgPgG, {from: accounts[1]});
		const uintK5Z2Za1 = BigInt("1383")
		const uintu0WlRUK = BigInt("1457")
		const uintJM4aA6 = BigInt("1949")
		const uintSckpA6A = BigInt("624")
//		const uint256yMf3m1M = await FairStockEquityzm6ylnJ.bonus.call(uintK5Z2Za1, {from: accounts[3]});
//		const uint256drUczmz = await FairStockEquityzm6ylnJ.setStartTime.call(uintu0WlRUK, {from: accounts[2]});
//		const uint256ryI4jJU = await FairStockEquityzm6ylnJ.depositBonus.call(uintJM4aA6, {from: accounts[1]});
//		const uint256HrWeEJ1 = await FairStockEquityzm6ylnJ.setGasFeeForCallback.call(uintSckpA6A, {from: accounts[3]});

		await expect(FairStockEquityzm6ylnJ.bonus.call(uintK5Z2Za1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})