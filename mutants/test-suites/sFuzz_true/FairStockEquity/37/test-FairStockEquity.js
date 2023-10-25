const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressVbnVli = accounts[3]
		const addressVlnrgWB = accounts[3]
		const addressgckCma0 = accounts[0]
		const addresseQabW7 = accounts[1]
		const uintfrdXL09 = BigInt("833")
		const FairStockEquityAOiedAV = await FairStockEquity.new(addressVbnVli, addressVlnrgWB, addressgckCma0, addresseQabW7, uintfrdXL09, {from: accounts[2]});
		const uintg0baHXn = BigInt("1335")
		const uintbVuxuxB = BigInt("1861")
		const uintQ3bVdS = BigInt("1032")
		const uintozSWZff = BigInt("1559")
		const uintLCnoR2Z = BigInt("1814")
		const uinteXfkU9z = BigInt("150")
		const uintYz3WF1t = BigInt("1481")
		const boolKrrLLQG = true
		const addressR3Orvi8 = accounts[3]
//		const uint256Zrdk9W = await FairStockEquityAOiedAV.setDegree.call(uintLCnoR2Z, uintozSWZff, uintQ3bVdS, uintbVuxuxB, uintg0baHXn, {from: accounts[3]});
//		await FairStockEquityAOiedAV.checkStart.call({from: accounts[4]});
//		const uint256rgGPl3p = await FairStockEquityAOiedAV.setStartTime.call(uinteXfkU9z, {from: accounts[2]});
//		const uint256lQR9cwQ = await FairStockEquityAOiedAV.reduceShare.call(uintYz3WF1t, {from: accounts[2]});
//		const addressUePgFnv = await FairStockEquityAOiedAV.setLPT.call(addressR3Orvi8, boolKrrLLQG, {from: accounts[5]});

		await expect(FairStockEquityAOiedAV.setDegree.call(uintLCnoR2Z, uintozSWZff, uintQ3bVdS, uintbVuxuxB, uintg0baHXn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnAg8DI = accounts[5]
		const addresslhhr5wY = accounts[3]
		const addresscFtlCJu = "0x0000000000000000000000000000000000000001"
		const addressI1bJ2vA = accounts[1]
		const uintzt6lgaU = BigInt("739")
		const FairStockEquityoihkBZq = await FairStockEquity.new(addressnAg8DI, addresslhhr5wY, addresscFtlCJu, addressI1bJ2vA, uintzt6lgaU, {from: accounts[0]});
		const uintggU36BK = BigInt("65")
		const uintQYo5Np = BigInt("515")
//		const uint256EEVMV35 = await FairStockEquityoihkBZq.setProfitPercentPJ.call(uintggU36BK, {from: accounts[5]});
//		const uint256cUX22Gj = await FairStockEquityoihkBZq.setStartTime.call(uintQYo5Np, {from: accounts[3]});
//		await FairStockEquityoihkBZq.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquityoihkBZq.setProfitPercentPJ.call(uintggU36BK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressic2cXvZ = accounts[5]
		const addressccbU1Fr = accounts[0]
		const addressrgAC6xd = accounts[1]
		const addressdObsCC = accounts[1]
		const uintR7Lbpve = BigInt("855")
		const FairStockEquitysx3mfJ = await FairStockEquity.new(addressic2cXvZ, addressccbU1Fr, addressrgAC6xd, addressdObsCC, uintR7Lbpve, {from: accounts[1]});
		const uintBCgzoU = BigInt("854")
		const addressvRGL9Ch = accounts[4]
		const uintJkVT5TM = BigInt("1762")
		const uintT41xgIo = BigInt("1516")
//		const addressqzzTJf = await FairStockEquitysx3mfJ.withdrawLPT.call(addressvRGL9Ch, uintBCgzoU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256w3FpCDU = await FairStockEquitysx3mfJ.invest.call(uintJkVT5TM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256W3lMapH = await FairStockEquitysx3mfJ.depositBonus.call(uintT41xgIo, {from: accounts[3]});
//		await FairStockEquitysx3mfJ.checkStart.call({from: accounts[5]});

		await expect(FairStockEquitysx3mfJ.withdrawLPT.call(addressvRGL9Ch, uintBCgzoU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspEuMNxh = accounts[3]
		const addressfkkUPWz = accounts[4]
		const addressvDH3Zf = accounts[2]
		const addressrby9lY1 = accounts[3]
		const uintJH5qqKh = BigInt("1896")
		const FairStockEquityU1BMgre = await FairStockEquity.new(addresspEuMNxh, addressfkkUPWz, addressvDH3Zf, addressrby9lY1, uintJH5qqKh, {from: accounts[1]});
		const uintXA0mAPX = BigInt("25")
		const uintBjmCZ9w = BigInt("1211")
		const uintMLjUF9i = BigInt("1140")
		const uintfddLrpq = BigInt("1661")
		const uintm6MlriQ = BigInt("2027")
		const uintyzJA1b = BigInt("1214")
		const uintdHAGCs = BigInt("959")
		const uintsfehPLH = BigInt("206")
//		const uint256LbFBRiP = await FairStockEquityU1BMgre.depositBonus.call(uintXA0mAPX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256u8PA6yE = await FairStockEquityU1BMgre.setDegree.call(uintyzJA1b, uintm6MlriQ, uintfddLrpq, uintMLjUF9i, uintBjmCZ9w, {from: accounts[0]});
//		const uint256HJ58Hfv = await FairStockEquityU1BMgre.setProfitPercentMT.call(uintdHAGCs, {from: accounts[2]});
//		const uint256vpsyXF8 = await FairStockEquityU1BMgre.setGasFeeForCallback.call(uintsfehPLH, {from: accounts[1]});

		await expect(FairStockEquityU1BMgre.depositBonus.call(uintXA0mAPX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNJmhDaS = accounts[0]
		const addressnpqzq2q = "0x0000000000000000000000000000000000000001"
		const addressQbzm6Mn = accounts[1]
		const addresscLVdhXn = "0x0000000000000000000000000000000000000001"
		const uintECwFxSU = BigInt("1215")
		const FairStockEquitySKoBUS = await FairStockEquity.new(addressNJmhDaS, addressnpqzq2q, addressQbzm6Mn, addresscLVdhXn, uintECwFxSU, {from: accounts[0]});
		const uintqI4wgBZ = BigInt("265")
		const boolTDkSYCa = true
		const address3ZdC9W = accounts[0]
		const uintMHeg4VD = BigInt("287")
		const addressE7y2mH2 = accounts[2]
		const uintzmY9gd = BigInt("1262")
		const addressFJBRikB = accounts[4]
		const addressFbL3k5g = accounts[3]
		const uintdVn3p5 = BigInt("1832")
		const addressxADmN2W = "0x0000000000000000000000000000000000000001"
//		const uint256cFA5omX = await FairStockEquitySKoBUS.invest.call(uintqI4wgBZ, {from: accounts[3]});
//		const addresserA3upP = await FairStockEquitySKoBUS.setLPT.call(address3ZdC9W, boolTDkSYCa, {from: accounts[2]});
//		const addresszF3gMYL = await FairStockEquitySKoBUS.withdrawLPT.call(addressE7y2mH2, uintMHeg4VD, {from: accounts[1]});
//		const addressvheoic9 = await FairStockEquitySKoBUS.withdrawLPT.call(addressFJBRikB, uintzmY9gd, {from: accounts[5]});
//		const addressWY5y2mg = await FairStockEquitySKoBUS.setDataSource.call(addressFbL3k5g, {from: accounts[1]});
//		const addressjNnfa1h = await FairStockEquitySKoBUS.withdrawLPT.call(addressxADmN2W, uintdVn3p5, {from: accounts[3]});

		await expect(FairStockEquitySKoBUS.invest.call(uintqI4wgBZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressSvEVxbO = accounts[0]
		const addresstN2RRfm = accounts[1]
		const addressFG0a7PY = accounts[1]
		const addressmzu6trf = accounts[4]
		const uintAV6YrgS = BigInt("57")
		const FairStockEquityYODUvpk = await FairStockEquity.new(addressSvEVxbO, addresstN2RRfm, addressFG0a7PY, addressmzu6trf, uintAV6YrgS, {from: accounts[1]});
		const uintUUc8oWj = BigInt("1003")
		const uintnBmcoE = BigInt("1807")
		const uintE970idv = BigInt("707")
		const uintBqNFvGy = BigInt("1659")
		const addresssri9fX6 = accounts[2]
		const boolrM1uh4s = true
		const addressUztlsBF = accounts[4]
//		await FairStockEquityYODUvpk.withdrawMT.call({from: accounts[4]});
//		const addressNRV9quj = await FairStockEquityYODUvpk.business.call(addresssri9fX6, uintBqNFvGy, uintE970idv, uintnBmcoE, uintUUc8oWj, {from: accounts[5]});
//		const addressdRC6fWM = await FairStockEquityYODUvpk.setLPT.call(addressUztlsBF, boolrM1uh4s, {from: accounts[4]});

		await expect(FairStockEquityYODUvpk.withdrawMT.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspN2ggF2 = accounts[5]
		const addressZCnh9ex = accounts[3]
		const addressJOx4eRY = "0x0000000000000000000000000000000000000001"
		const addressCvcPBiv = accounts[1]
		const uintTXQGnAI = BigInt("739")
		const FairStockEquityoihkBZq = await FairStockEquity.new(addresspN2ggF2, addressZCnh9ex, addressJOx4eRY, addressCvcPBiv, uintTXQGnAI, {from: accounts[0]});
		const uintVe36ram = BigInt("88")
		const uintITO4DZR = BigInt("515")
//		await FairStockEquityoihkBZq.onlyDataSource.call({from: accounts[1]});
//		const uint256EEVMV35 = await FairStockEquityoihkBZq.setProfitPercentPJ.call(uintVe36ram, {from: accounts[5]});
//		const uint256cUX22Gj = await FairStockEquityoihkBZq.setStartTime.call(uintITO4DZR, {from: accounts[3]});
//		await FairStockEquityoihkBZq.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquityoihkBZq.onlyDataSource.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHN2SuPj = accounts[5]
		const addressSH5cJoW = accounts[2]
		const addressThyodFz = accounts[1]
		const addressUC4Ddc5 = accounts[5]
		const uintOxxcGH4 = BigInt("68")
		const FairStockEquityZ8ikvt0 = await FairStockEquity.new(addressHN2SuPj, addressSH5cJoW, addressThyodFz, addressUC4Ddc5, uintOxxcGH4, {from: accounts[5]});
		const uintCkh2Fzd = BigInt("1425")
		const uintAzv0SB = BigInt("1939")
		const uintH2tTN71 = BigInt("839")
//		const uint256R9Yms5m = await FairStockEquityZ8ikvt0.reduceShare.call(uintCkh2Fzd, {from: accounts[3]});
//		const uint256tWlu0QE = await FairStockEquityZ8ikvt0.depositBonus.call(uintAzv0SB, {from: accounts[1]});
//		const uint256HsHd2WL = await FairStockEquityZ8ikvt0.setStartTime.call(uintH2tTN71, {from: accounts[1]});
//		await FairStockEquityZ8ikvt0.withdrawMT.call({from: accounts[2]});
//		await FairStockEquityZ8ikvt0.withdrawMT.call({from: accounts[3]});
//		await FairStockEquityZ8ikvt0.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityZ8ikvt0.reduceShare.call(uintCkh2Fzd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnSXrFBI = accounts[5]
		const addresskvPXqov = accounts[3]
		const addressqAfv2cX = "0x0000000000000000000000000000000000000001"
		const addressZvaiR71 = accounts[1]
		const uintixyDhyV = BigInt("739")
		const FairStockEquityoihkBZq = await FairStockEquity.new(addressnSXrFBI, addresskvPXqov, addressqAfv2cX, addressZvaiR71, uintixyDhyV, {from: accounts[0]});
		const uintpswxXMo = BigInt("515")
//		await FairStockEquityoihkBZq.f.call({from: accounts[2]});
//		const uint256cUX22Gj = await FairStockEquityoihkBZq.setStartTime.call(uintpswxXMo, {from: accounts[3]});

		await expect(FairStockEquityoihkBZq.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressVoHBzTf = accounts[5]
		const addressKfzZV4J = accounts[3]
		const addressST3g9LH = "0x0000000000000000000000000000000000000001"
		const addresstMpO0E = accounts[1]
		const uintguCvtw = BigInt("739")
		const FairStockEquityoihkBZq = await FairStockEquity.new(addressVoHBzTf, addressKfzZV4J, addressST3g9LH, addresstMpO0E, uintguCvtw, {from: accounts[0]});
		const uintFBvWLyZ = BigInt("529")
//		await FairStockEquityoihkBZq.withdrawBonus.call({from: accounts[2]});
//		await FairStockEquityoihkBZq.withdrawMT.call({from: accounts[2]});
//		const uint256cUX22Gj = await FairStockEquityoihkBZq.setStartTime.call(uintFBvWLyZ, {from: accounts[3]});

		await expect(FairStockEquityoihkBZq.withdrawBonus.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressfz2OH1e = accounts[4]
		const addressX8NlZtN = accounts[0]
		const addressRiEXNHD = accounts[0]
		const addressYnoPm0r = accounts[5]
		const uintyPk8gnW = BigInt("1717")
		const FairStockEquityP1HNt5x = await FairStockEquity.new(addressfz2OH1e, addressX8NlZtN, addressRiEXNHD, addressYnoPm0r, uintyPk8gnW, {from: accounts[0]});
		const uintkwFAQYv = BigInt("1216")
		const uintBZkwmT1 = BigInt("1344")
		const uintUGTLcZD = BigInt("976")
		const uinti5Zirbb = BigInt("1940")
		const addressT64K5jM = accounts[5]
		const boolq3wcHNn = true
		const addressnnbDQAE = accounts[3]
		const uintCbVVk0i = BigInt("1581")
		const uintljfKIZa = BigInt("1099")
		const uintyhSouuI = BigInt("1918")
//		const addressjoAEMl = await FairStockEquityP1HNt5x.business.call(addressT64K5jM, uinti5Zirbb, uintUGTLcZD, uintBZkwmT1, uintkwFAQYv, {from: accounts[1]});
//		const addressUs6u8ZU = await FairStockEquityP1HNt5x.setLPT.call(addressnnbDQAE, boolq3wcHNn, {from: accounts[4]});
//		const uint256uqaMxbU = await FairStockEquityP1HNt5x.setGasFeeForCallback.call(uintCbVVk0i, {from: accounts[2]});
//		const uint256yCtGZPv = await FairStockEquityP1HNt5x.invest.call(uintljfKIZa, {from: accounts[4]});
//		const uint256KwS9VN6 = await FairStockEquityP1HNt5x.getCostAmount.call(uintyhSouuI, {from: accounts[1]});

		await expect(FairStockEquityP1HNt5x.business.call(addressT64K5jM, uinti5Zirbb, uintUGTLcZD, uintBZkwmT1, uintkwFAQYv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbgMcmaA = accounts[5]
		const addressYHtUkst = accounts[3]
		const addressz2Omrqo = "0x0000000000000000000000000000000000000001"
		const addressnFwTXUz = accounts[1]
		const uintJvffpPx = BigInt("739")
		const FairStockEquityoihkBZq = await FairStockEquity.new(addressbgMcmaA, addressYHtUkst, addressz2Omrqo, addressnFwTXUz, uintJvffpPx, {from: accounts[0]});
		const uintdAHBNI = BigInt("192")
		const uintSpFBzvZ = BigInt("836")
		const addressThzzeD = accounts[1]
		const uintqPl8usK = BigInt("582")
		const uint256OYRKzbN = await FairStockEquityoihkBZq.setProfitPercentMT.call(uintdAHBNI, {from: accounts[0]});
//		const addressTAxicAp = await FairStockEquityoihkBZq.depositLPT.call(addressThzzeD, uintSpFBzvZ, {from: accounts[1]});
//		const uint256cUX22Gj = await FairStockEquityoihkBZq.setStartTime.call(uintqPl8usK, {from: accounts[3]});

		await expect(FairStockEquityoihkBZq.depositLPT.call(addressThzzeD, uintSpFBzvZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address7uh1Fk = accounts[5]
		const addressfmdQz9M = accounts[3]
		const addressxvcPf7 = "0x0000000000000000000000000000000000000001"
		const addressjDq2Qxb = accounts[1]
		const uintKMmPQRY = BigInt("739")
		const FairStockEquityoihkBZq = await FairStockEquity.new(address7uh1Fk, addressfmdQz9M, addressxvcPf7, addressjDq2Qxb, uintKMmPQRY, {from: accounts[0]});
		const uintFaQeCGq = BigInt("1431")
		const uintI85vCq7 = BigInt("6")
		const addressMhNFgOt = accounts[3]
		const uintN2Kx3Fx = BigInt("564")
//		const addressyUSgemg = await FairStockEquityoihkBZq.withdrawMTCallback.call(addressMhNFgOt, uintI85vCq7, uintFaQeCGq, {from: accounts[5]});
//		const uint256cUX22Gj = await FairStockEquityoihkBZq.setStartTime.call(uintN2Kx3Fx, {from: accounts[3]});

		await expect(FairStockEquityoihkBZq.withdrawMTCallback.call(addressMhNFgOt, uintI85vCq7, uintFaQeCGq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQMVEvto = accounts[0]
		const addressVr18FSG = accounts[5]
		const addressGdWDzuQ = accounts[1]
		const addressWOdgMk = accounts[1]
		const uintlq4T5qW = BigInt("1518")
		const FairStockEquityK33SNO = await FairStockEquity.new(addressQMVEvto, addressVr18FSG, addressGdWDzuQ, addressWOdgMk, uintlq4T5qW, {from: accounts[3]});
		const uintuhQk6N7 = BigInt("1232")
		const uintEOsCI9e = BigInt("38")
		const uintXHDzvMg = BigInt("1417")
		const uintVzFS9l8 = BigInt("973")
		const uintjJDd4U = BigInt("1206")
		const uintwHVlY9 = BigInt("1633")
//		await FairStockEquityK33SNO.f.call({from: accounts[2]});
//		const uint256ffaMQwZ = await FairStockEquityK33SNO.setStartTime.call(uintuhQk6N7, {from: accounts[3]});
//		const uint256zUxXsF = await FairStockEquityK33SNO.setDegree.call(uintwHVlY9, uintjJDd4U, uintVzFS9l8, uintXHDzvMg, uintEOsCI9e, {from: accounts[1]});
//		await FairStockEquityK33SNO.checkStart.call({from: accounts[2]});

		await expect(FairStockEquityK33SNO.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressobZXKh = accounts[0]
		const addressVLjP6Ul = "0x0000000000000000000000000000000000000001"
		const addresslOzK77r = accounts[1]
		const addressMWdz0mT = "0x0000000000000000000000000000000000000001"
		const uintZ8GZPDE = BigInt("1215")
		const FairStockEquitySKoBUS = await FairStockEquity.new(addressobZXKh, addressVLjP6Ul, addresslOzK77r, addressMWdz0mT, uintZ8GZPDE, {from: accounts[0]});
		const uintnnHMJfa = BigInt("150")
		const uintmz18LDR = BigInt("700")
		const addressj5wB3HK = accounts[1]
		const uintUsm94n9 = BigInt("490")
		const addressYTaANq9 = await FairStockEquitySKoBUS.setModule.call(addressj5wB3HK, uintmz18LDR, uintnnHMJfa, {from: accounts[0]});
//		const uint256cFA5omX = await FairStockEquitySKoBUS.invest.call(uintUsm94n9, {from: accounts[3]});

		await expect(FairStockEquitySKoBUS.invest.call(uintUsm94n9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressoYnRr2U = "0x0000000000000000000000000000000000000001"
		const addressIpk8Cs = accounts[3]
		const addresshhsKtuZ = accounts[1]
		const addressWLulzYg = accounts[2]
		const uinttTLPuf2 = BigInt("1779")
		const FairStockEquitybSsjFXr = await FairStockEquity.new(addressoYnRr2U, addressIpk8Cs, addresshhsKtuZ, addressWLulzYg, uinttTLPuf2, {from: "0x0000000000000000000000000000000000000001"});
		const uintJ7wu3gd = BigInt("25")
		const uintgGcMjoq = BigInt("250")
		const uintSgWwUd6 = BigInt("883")
		const uint256pLHafGh = await FairStockEquitybSsjFXr.setStartTime.call(uintJ7wu3gd, {from: accounts[4]});
		const uint256T0C2QJn = await FairStockEquitybSsjFXr.setProfitPercentBonus.call(uintgGcMjoq, {from: accounts[2]});
		const uint256yFaFbk = await FairStockEquitybSsjFXr.depositBonus.call(uintSgWwUd6, {from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addressWV4P49v = accounts[5]
		const addressEGy2WUg = accounts[3]
		const addressnQipG0p = "0x0000000000000000000000000000000000000001"
		const addressLmmA4KN = accounts[1]
		const uintVC60osK = BigInt("739")
		const FairStockEquityoihkBZq = await FairStockEquity.new(addressWV4P49v, addressEGy2WUg, addressnQipG0p, addressLmmA4KN, uintVC60osK, {from: accounts[0]});
		const uintExOs1Wi = BigInt("847")
		const uintWnkvH6d = BigInt("1032")
		const addressAI9i2ty = accounts[0]
//		const uint256BcpechU = await FairStockEquityoihkBZq.bonus.call(uintExOs1Wi, {from: accounts[1]});
//		const addressRTRovK8 = await FairStockEquityoihkBZq.depositLPT.call(addressAI9i2ty, uintWnkvH6d, {from: accounts[0]});

		await expect(FairStockEquityoihkBZq.bonus.call(uintExOs1Wi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressppHHBI4 = accounts[0]
		const addresscM2QEw = "0x0000000000000000000000000000000000000001"
		const addressE7W8j1e = accounts[1]
		const addressB2zoGEn = "0x0000000000000000000000000000000000000001"
		const uintv2ZVdyi = BigInt("1215")
		const FairStockEquitySKoBUS = await FairStockEquity.new(addressppHHBI4, addresscM2QEw, addressE7W8j1e, addressB2zoGEn, uintv2ZVdyi, {from: accounts[0]});
		const boolpU4aTxw = false
		const addressuCakXRc = accounts[1]
		const uintYynFmEZ = BigInt("938")
		const uintK1IbEgS = BigInt("1267")
		const uintTdwXa2F = BigInt("958")
		const addressWZTukCw = accounts[3]
		const addressL1kSg5z = await FairStockEquitySKoBUS.setLPT.call(addressuCakXRc, boolpU4aTxw, {from: accounts[0]});
//		const uint256cFA5omX = await FairStockEquitySKoBUS.invest.call(uintYynFmEZ, {from: accounts[3]});
//		const addressuP0WRbL = await FairStockEquitySKoBUS.withdrawMTCallback.call(addressWZTukCw, uintTdwXa2F, uintK1IbEgS, {from: accounts[1]});

		await expect(FairStockEquitySKoBUS.invest.call(uintYynFmEZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYxFHUC3 = accounts[0]
		const addressMnSwP7o = "0x0000000000000000000000000000000000000001"
		const addressmXgqIRd = accounts[1]
		const addressEh4uek5 = "0x0000000000000000000000000000000000000001"
		const uintccC0ZUR = BigInt("1215")
		const FairStockEquitySKoBUS = await FairStockEquity.new(addressYxFHUC3, addressMnSwP7o, addressmXgqIRd, addressEh4uek5, uintccC0ZUR, {from: accounts[0]});
		const uintDdmxHb5 = BigInt("1500")
		const uintsTjxXDZ = BigInt("468")
		const addressx6CIfWp = accounts[4]
		const uintVZ7uJlJ = BigInt("25")
		const uintv2Y0Jse = BigInt("471")
//		const addressO3Ho6ed = await FairStockEquitySKoBUS.withdrawMTCallback.call(addressx6CIfWp, uintsTjxXDZ, uintDdmxHb5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256cFA5omX = await FairStockEquitySKoBUS.invest.call(uintVZ7uJlJ, {from: accounts[3]});
//		const uint2562tHFf6 = await FairStockEquitySKoBUS.reduceShare.call(uintv2Y0Jse, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitySKoBUS.withdrawMTCallback.call(addressx6CIfWp, uintsTjxXDZ, uintDdmxHb5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvxgnWj8 = accounts[5]
		const addressjAYIxQc = accounts[3]
		const addressE5w1PyU = "0x0000000000000000000000000000000000000001"
		const addressKFNO72v = accounts[1]
		const uintCZ00IfQ = BigInt("739")
		const FairStockEquityoihkBZq = await FairStockEquity.new(addressvxgnWj8, addressjAYIxQc, addressE5w1PyU, addressKFNO72v, uintCZ00IfQ, {from: accounts[0]});
		const uintWyDrOnX = BigInt("508")
//		await FairStockEquityoihkBZq.withdrawPJ.call({from: accounts[0]});
//		const uint256cUX22Gj = await FairStockEquityoihkBZq.setStartTime.call(uintWyDrOnX, {from: accounts[3]});

		await expect(FairStockEquityoihkBZq.withdrawPJ.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslW35D1 = accounts[0]
		const addressUeWVjss = "0x0000000000000000000000000000000000000001"
		const addresssS0X9RJ = accounts[1]
		const addressd7UOaIG = "0x0000000000000000000000000000000000000001"
		const uintSw6oDd = BigInt("1215")
		const FairStockEquitySKoBUS = await FairStockEquity.new(addresslW35D1, addressUeWVjss, addresssS0X9RJ, addressd7UOaIG, uintSw6oDd, {from: accounts[0]});
		const uintk8bJDBs = BigInt("668")
		const uintooqLvWo = BigInt("193")
		const addressX2bzcvB = accounts[1]
		const uintSvrZNlH = BigInt("1637")
		const uintQqp7SL = BigInt("481")
//		const addressoiGnQUk = await FairStockEquitySKoBUS.withdrawBonusCallback.call(addressX2bzcvB, uintooqLvWo, uintk8bJDBs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FnuwfmI = await FairStockEquitySKoBUS.invest.call(uintSvrZNlH, {from: accounts[4]});
//		const uint256cFA5omX = await FairStockEquitySKoBUS.invest.call(uintQqp7SL, {from: accounts[3]});

		await expect(FairStockEquitySKoBUS.withdrawBonusCallback.call(addressX2bzcvB, uintooqLvWo, uintk8bJDBs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})