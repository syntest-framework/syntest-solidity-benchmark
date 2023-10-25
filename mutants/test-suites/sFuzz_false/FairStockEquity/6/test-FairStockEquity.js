const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressFHKqBP7 = accounts[3]
		const addressoZKiaZT = accounts[3]
		const addressAFGPA00 = accounts[2]
		const addressrpAJyth = accounts[4]
		const uintkJjFTql = BigInt("811")
		const FairStockEquityOaiuDLT = await FairStockEquity.new(addressFHKqBP7, addressoZKiaZT, addressAFGPA00, addressrpAJyth, uintkJjFTql, {from: accounts[3]});
		const uintkRlWJBa = BigInt("924")
		const uintqJVEOEY = BigInt("270")
		const uintbPWWHLI = BigInt("1123")
		const addressQLVDS06 = accounts[2]
		const uintI6YXQgJ = BigInt("1058")
		const uintDs1tiPT = BigInt("1222")
		const uintM4HGiqJ = BigInt("219")
		const addressTlTd4MO = accounts[1]
//		const uint256MLW3qbj = await FairStockEquityOaiuDLT.setProfitPercentBonus.call(uintkRlWJBa, {from: accounts[1]});
//		const addresseWilfy = await FairStockEquityOaiuDLT.withdrawBonusCallback.call(addressQLVDS06, uintbPWWHLI, uintqJVEOEY, {from: accounts[3]});
//		const uint256kYvcd8t = await FairStockEquityOaiuDLT.getCostAmount.call(uintI6YXQgJ, {from: accounts[2]});
//		const addresseuS8051 = await FairStockEquityOaiuDLT.withdrawMTCallback.call(addressTlTd4MO, uintM4HGiqJ, uintDs1tiPT, {from: accounts[5]});

		await expect(FairStockEquityOaiuDLT.setProfitPercentBonus.call(uintkRlWJBa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjmEHVCs = accounts[5]
		const addressbs5wppM = accounts[0]
		const addressYVqPWRV = accounts[2]
		const addressp03LQ3 = accounts[3]
		const uintY9OttBZ = BigInt("1040")
		const FairStockEquityPT2L2j = await FairStockEquity.new(addressjmEHVCs, addressbs5wppM, addressYVqPWRV, addressp03LQ3, uintY9OttBZ, {from: accounts[2]});
		const uint3Nk2c1 = BigInt("941")
		const uintpXzxlCm = BigInt("270")
		const addresse81UMJx = accounts[5]
		const uintMfxFm3g = BigInt("1546")
//		const addressdAdMYC = await FairStockEquityPT2L2j.withdrawMTCallback.call(addresse81UMJx, uintpXzxlCm, uint3Nk2c1, {from: accounts[3]});
//		const uint256R1DnTOV = await FairStockEquityPT2L2j.setProfitPercentBonus.call(uintMfxFm3g, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityPT2L2j.withdrawMTCallback.call(addresse81UMJx, uintpXzxlCm, uint3Nk2c1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxKD2FT0 = accounts[1]
		const addressA6m2GS9 = accounts[1]
		const addressX7DtsIE = accounts[1]
		const addressc9JOZS = accounts[4]
		const uintbKbE2di = BigInt("1236")
		const FairStockEquityTnIR3ni = await FairStockEquity.new(addressxKD2FT0, addressA6m2GS9, addressX7DtsIE, addressc9JOZS, uintbKbE2di, {from: accounts[2]});
		const uintHpnlvMV = BigInt("1189")
		const uintJjGKqYb = BigInt("1947")
		const uintDUv8rIB = BigInt("1354")
		const uintBMLDXN = BigInt("677")
		const addressDWYWRL = accounts[3]
		const uinteGeQcrN = BigInt("25")
		const uintu2bAXT3 = BigInt("1617")
		const uintgFji4u7 = BigInt("793")
		const addressbe8zs8w = accounts[1]
//		await FairStockEquityTnIR3ni.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressEriRTSm = await FairStockEquityTnIR3ni.business.call(addressDWYWRL, uintBMLDXN, uintDUv8rIB, uintJjGKqYb, uintHpnlvMV, {from: accounts[3]});
//		const uint256OSFofRg = await FairStockEquityTnIR3ni.setProfitPercentBonus.call(uinteGeQcrN, {from: accounts[1]});
//		const addressQHCbHcm = await FairStockEquityTnIR3ni.withdrawBonusCallback.call(addressbe8zs8w, uintgFji4u7, uintu2bAXT3, {from: accounts[0]});

		await expect(FairStockEquityTnIR3ni.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszffT5FY = accounts[1]
		const addressXatsBrD = accounts[3]
		const addressspDHwdt = accounts[1]
		const addressHhsqqZP = accounts[3]
		const uintFKz834U = BigInt("739")
		const FairStockEquityZ2fBLu5 = await FairStockEquity.new(addresszffT5FY, addressXatsBrD, addressspDHwdt, addressHhsqqZP, uintFKz834U, {from: accounts[5]});
		const uintV5xqBNi = BigInt("1202")
		const addressLVnzlGa = accounts[5]
		const uintFQuFZIQ = BigInt("598")
		const addressOCuC2r = accounts[5]
		const uinttFdkgIG = BigInt("1425")
		const uintTHCUjKl = BigInt("984")
		const uintBI1YwCt = BigInt("1000")
		const uintWEf1Tnn = BigInt("227")
		const addressQSwln7L = accounts[1]
//		const uint256zNu7dC = await FairStockEquityZ2fBLu5.reduceShare.call(uintV5xqBNi, {from: accounts[3]});
//		await FairStockEquityZ2fBLu5.withdrawPJ.call({from: accounts[5]});
//		const addressPT0psM6 = await FairStockEquityZ2fBLu5.setDataSource.call(addressLVnzlGa, {from: accounts[0]});
//		const address4pzLru = await FairStockEquityZ2fBLu5.depositLPT.call(addressOCuC2r, uintFQuFZIQ, {from: accounts[0]});
//		const addressKBf68dG = await FairStockEquityZ2fBLu5.business.call(addressQSwln7L, uintWEf1Tnn, uintBI1YwCt, uintTHCUjKl, uinttFdkgIG, {from: accounts[4]});

		await expect(FairStockEquityZ2fBLu5.reduceShare.call(uintV5xqBNi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresseg1CXQ = accounts[2]
		const addressRvlEgEQ = accounts[1]
		const addressW1oaZvZ = accounts[5]
		const addressd3oOvWs = accounts[5]
		const uintUeeO9HW = BigInt("1411")
		const FairStockEquitypnnUxjO = await FairStockEquity.new(addresseg1CXQ, addressRvlEgEQ, addressW1oaZvZ, addressd3oOvWs, uintUeeO9HW, {from: accounts[5]});
		const uintEUGk0Ij = BigInt("1649")
		const boolbwOBCen = true
		const addresstMeLQUW = accounts[0]
		const uints3fYRXx = BigInt("86")
		const uintCjRkD0G = BigInt("758")
		const addresskhDaqFi = accounts[3]
		const uintjpX9yHy = BigInt("1838")
		const uintfFCoGnm = BigInt("1142")
		const uint256yeTVzpN = await FairStockEquitypnnUxjO.getCostAmount.call(uintEUGk0Ij, {from: accounts[3]});
//		const address1sdx5K = await FairStockEquitypnnUxjO.setLPT.call(addresstMeLQUW, boolbwOBCen, {from: accounts[3]});
//		const uint256I5fulSW = await FairStockEquitypnnUxjO.setStartTime.call(uints3fYRXx, {from: accounts[0]});
//		const addresskiFCjL = await FairStockEquitypnnUxjO.depositLPT.call(addresskhDaqFi, uintCjRkD0G, {from: accounts[4]});
//		const uint256D7CBC8I = await FairStockEquitypnnUxjO.setStartTime.call(uintjpX9yHy, {from: accounts[4]});
//		const uint256B30iiYC = await FairStockEquitypnnUxjO.reduceShare.call(uintfFCoGnm, {from: accounts[4]});

		await expect(FairStockEquitypnnUxjO.setLPT.call(addresstMeLQUW, boolbwOBCen, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdyAaUuu = accounts[0]
		const addresssxEOcbK = accounts[4]
		const addresshJ6cfoL = accounts[0]
		const addresspzQB2E2 = accounts[1]
		const uinttObhEXE = BigInt("1249")
		const FairStockEquityCyaqmkY = await FairStockEquity.new(addressdyAaUuu, addresssxEOcbK, addresshJ6cfoL, addresspzQB2E2, uinttObhEXE, {from: accounts[3]});
		const uintTikpE1e = BigInt("1876")
		const uintXUSSmZ = BigInt("1200")
		const addresszlrCEpp = accounts[0]
		const uintKOByQy = BigInt("1026")
		const uintx0eJwm = BigInt("1542")
		const uintN5eYDCQ = BigInt("984")
		const uintmpBBZ8k = BigInt("812")
		const uintaSHtLsR = BigInt("929")
		const uintwxioFO4 = BigInt("519")
		const addressKR1VjeE = accounts[3]
//		const addressV8jHF6 = await FairStockEquityCyaqmkY.withdrawBonusCallback.call(addresszlrCEpp, uintXUSSmZ, uintTikpE1e, {from: accounts[0]});
//		await FairStockEquityCyaqmkY.withdrawPJ.call({from: accounts[4]});
//		const uint256TRKoLVE = await FairStockEquityCyaqmkY.setProfitPercentBonus.call(uintKOByQy, {from: accounts[1]});
//		const uint256a4KZgwP = await FairStockEquityCyaqmkY.bonus.call(uintx0eJwm, {from: accounts[5]});
//		const addressbPjddn = await FairStockEquityCyaqmkY.business.call(addressKR1VjeE, uintwxioFO4, uintaSHtLsR, uintmpBBZ8k, uintN5eYDCQ, {from: accounts[0]});

		await expect(FairStockEquityCyaqmkY.withdrawBonusCallback.call(addresszlrCEpp, uintXUSSmZ, uintTikpE1e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressGTyypt5 = accounts[5]
		const addresscyK7GiN = accounts[0]
		const addressqGfcbE4 = accounts[0]
		const addressYnscWKE = accounts[0]
		const uintX6JFOqm = BigInt("808")
		const FairStockEquityD9zFxn1 = await FairStockEquity.new(addressGTyypt5, addresscyK7GiN, addressqGfcbE4, addressYnscWKE, uintX6JFOqm, {from: accounts[5]});
		const uintt732FRp = BigInt("735")
		const uintRRYyijG = BigInt("620")
		const uintSDegQ6 = BigInt("1508")
		const uintWWz2Ta5 = BigInt("1716")
		const addressZCzqu27 = accounts[2]
		const uintHLvDu1D = BigInt("295")
		const uintNb3ApzR = BigInt("142")
//		await FairStockEquityD9zFxn1.checkStart.call({from: accounts[4]});
//		const addressIPITscW = await FairStockEquityD9zFxn1.business.call(addressZCzqu27, uintWWz2Ta5, uintSDegQ6, uintRRYyijG, uintt732FRp, {from: accounts[4]});
//		const uint256DKGbNk7 = await FairStockEquityD9zFxn1.setGasFeeForCallback.call(uintHLvDu1D, {from: accounts[0]});
//		await FairStockEquityD9zFxn1.onlyDataSource.call({from: accounts[1]});
//		const uint256HvIRKQG = await FairStockEquityD9zFxn1.getCostAmount.call(uintNb3ApzR, {from: accounts[2]});

		await expect(FairStockEquityD9zFxn1.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressf8tPUKN = accounts[5]
		const addressSyKdFjc = accounts[0]
		const addressD85kWDn = accounts[2]
		const addressb8kFxnw = accounts[3]
		const uintsx0hiaZ = BigInt("1040")
		const FairStockEquityPT2L2j = await FairStockEquity.new(addressf8tPUKN, addressSyKdFjc, addressD85kWDn, addressb8kFxnw, uintsx0hiaZ, {from: accounts[2]});
		const uintLiJxZW7 = BigInt("1050")
		const uintPxoG7SK = BigInt("1365")
		const uintzensYLm = BigInt("845")
		const uintAusfKUr = BigInt("1151")
		const addressMIXGisE = accounts[2]
		const uintsZJLtnx = BigInt("849")
//		const addressECEKcV = await FairStockEquityPT2L2j.business.call(addressMIXGisE, uintAusfKUr, uintzensYLm, uintPxoG7SK, uintLiJxZW7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256R1DnTOV = await FairStockEquityPT2L2j.setProfitPercentBonus.call(uintsZJLtnx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityPT2L2j.business.call(addressMIXGisE, uintAusfKUr, uintzensYLm, uintPxoG7SK, uintLiJxZW7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressSUbMrae = accounts[3]
		const addressHSM6cMn = accounts[2]
		const addresslK5Gl4O = accounts[0]
		const addresshJHHZAs = accounts[5]
		const uintsMYNIaa = BigInt("1524")
		const FairStockEquitykP4dmaN = await FairStockEquity.new(addressSUbMrae, addressHSM6cMn, addresslK5Gl4O, addresshJHHZAs, uintsMYNIaa, {from: accounts[1]});
		const uintJJIu2MH = BigInt("199")
		const uintvw0aFFF = BigInt("918")
		const addresspjF2JPc = accounts[2]
		const uintAwx96LA = BigInt("656")
		const uintHm5BgL1 = BigInt("1162")
		const addressHFkiagn = accounts[0]
		const uintH6ep5FK = BigInt("791")
		const uintw76zAKJ = BigInt("26")
		const uintkNVMna7 = BigInt("773")
		const uintQjK2yt6 = BigInt("402")
		const address1bWeKV = accounts[4]
		const uint256bq8T2a1 = await FairStockEquitykP4dmaN.getCostAmount.call(uintJJIu2MH, {from: accounts[4]});
//		const addressXvjG0W = await FairStockEquitykP4dmaN.withdrawLPT.call(addresspjF2JPc, uintvw0aFFF, {from: accounts[5]});
//		const addressXViLKn = await FairStockEquitykP4dmaN.withdrawBonusCallback.call(addressHFkiagn, uintHm5BgL1, uintAwx96LA, {from: accounts[1]});
//		const addressM8ux9W2 = await FairStockEquitykP4dmaN.business.call(address1bWeKV, uintQjK2yt6, uintkNVMna7, uintw76zAKJ, uintH6ep5FK, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquitykP4dmaN.checkStart.call({from: accounts[5]});

		await expect(FairStockEquitykP4dmaN.withdrawLPT.call(addresspjF2JPc, uintvw0aFFF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuYkk8Bk = accounts[5]
		const addressYiytjsG = accounts[0]
		const addressvpHY5fF = accounts[2]
		const addressb9NsRXz = accounts[3]
		const uinthOKkMr5 = BigInt("1040")
		const FairStockEquityPT2L2j = await FairStockEquity.new(addressuYkk8Bk, addressYiytjsG, addressvpHY5fF, addressb9NsRXz, uinthOKkMr5, {from: accounts[2]});
		const uintJV7OZMS = BigInt("415")
		const uinttAPaEym = BigInt("415")
		const addressQX2IsTO = accounts[1]
		const uintuVbZpPn = BigInt("568")
//		const uint256QRYmsVl = await FairStockEquityPT2L2j.setStartTime.call(uintJV7OZMS, {from: accounts[2]});
//		const addressZAuUhuD = await FairStockEquityPT2L2j.depositLPT.call(addressQX2IsTO, uinttAPaEym, {from: accounts[1]});
//		const uint256R1DnTOV = await FairStockEquityPT2L2j.setProfitPercentBonus.call(uintuVbZpPn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityPT2L2j.setStartTime.call(uintJV7OZMS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPM9ADKn = accounts[5]
		const addressy4VQrJX = accounts[0]
		const addressDQfIDK = accounts[2]
		const addressnz4c31x = accounts[3]
		const uintL6k7sLo = BigInt("1040")
		const FairStockEquityPT2L2j = await FairStockEquity.new(addressPM9ADKn, addressy4VQrJX, addressDQfIDK, addressnz4c31x, uintL6k7sLo, {from: accounts[2]});
		const uintUM2JZa9 = BigInt("842")
//		await FairStockEquityPT2L2j.withdrawBonus.call({from: accounts[0]});
//		const uint256R1DnTOV = await FairStockEquityPT2L2j.setProfitPercentBonus.call(uintUM2JZa9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityPT2L2j.withdrawBonus.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJS3uJUj = accounts[5]
		const addressSGQFgVY = accounts[0]
		const addressVqDNsdI = accounts[2]
		const addressr4W33ep = accounts[3]
		const uintFSoBmGg = BigInt("1040")
		const FairStockEquityPT2L2j = await FairStockEquity.new(addressJS3uJUj, addressSGQFgVY, addressVqDNsdI, addressr4W33ep, uintFSoBmGg, {from: accounts[2]});
		const uintkTrVd1U = BigInt("1614")
		const uintuAyiPZg = BigInt("833")
//		const uint256vEpNRbJ = await FairStockEquityPT2L2j.invest.call(uintkTrVd1U, {from: accounts[2]});
//		await FairStockEquityPT2L2j.onlyDataSource.call({from: accounts[0]});
//		const uint256R1DnTOV = await FairStockEquityPT2L2j.setProfitPercentBonus.call(uintuAyiPZg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityPT2L2j.invest.call(uintkTrVd1U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvEWbET8 = accounts[5]
		const addressVU9CPYB = accounts[0]
		const addressHRLjH6d = accounts[2]
		const address7RP8E1 = accounts[3]
		const uintaeMVl6n = BigInt("1040")
		const FairStockEquityPT2L2j = await FairStockEquity.new(addressvEWbET8, addressVU9CPYB, addressHRLjH6d, address7RP8E1, uintaeMVl6n, {from: accounts[2]});
		const uinttxRlJbs = BigInt("1698")
//		await FairStockEquityPT2L2j.withdrawPJ.call({from: accounts[2]});
//		const uint256R1DnTOV = await FairStockEquityPT2L2j.setProfitPercentBonus.call(uinttxRlJbs, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityPT2L2j.onlyDataSource.call({from: accounts[0]});

		await expect(FairStockEquityPT2L2j.withdrawPJ.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdEwV7Z = accounts[3]
		const addressdWH4iSX = accounts[2]
		const addressoAbyZk = accounts[0]
		const addressANL129v = accounts[5]
		const uintvHvGGnc = BigInt("1524")
		const FairStockEquitykP4dmaN = await FairStockEquity.new(addressdEwV7Z, addressdWH4iSX, addressoAbyZk, addressANL129v, uintvHvGGnc, {from: accounts[1]});
		const uintLCGn43G = BigInt("303")
		const addressE59tSkH = accounts[1]
		const uintGEfafDC = BigInt("1352")
		const uintYN2U5nC = BigInt("199")
//		const addressjIVJ1M = await FairStockEquitykP4dmaN.depositLPT.call(addressE59tSkH, uintLCGn43G, {from: accounts[4]});
//		const uint256WtmwCdK = await FairStockEquitykP4dmaN.setGasFeeForCallback.call(uintGEfafDC, {from: accounts[3]});
//		const uint256bq8T2a1 = await FairStockEquitykP4dmaN.getCostAmount.call(uintYN2U5nC, {from: accounts[4]});

		await expect(FairStockEquitykP4dmaN.depositLPT.call(addressE59tSkH, uintLCGn43G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEYpvsrU = accounts[3]
		const addressg9NJIVN = accounts[2]
		const addressJlCzHS6 = accounts[0]
		const addresso02d3dn = accounts[5]
		const uinttPNxUCB = BigInt("1524")
		const FairStockEquitykP4dmaN = await FairStockEquity.new(addressEYpvsrU, addressg9NJIVN, addressJlCzHS6, addresso02d3dn, uinttPNxUCB, {from: accounts[1]});
		const uintpeaAZUt = BigInt("43")
		const uintssBryoz = BigInt("182")
//		const uint256Gwwo1iS = await FairStockEquitykP4dmaN.depositBonus.call(uintpeaAZUt, {from: accounts[0]});
//		const uint256bq8T2a1 = await FairStockEquitykP4dmaN.getCostAmount.call(uintssBryoz, {from: accounts[4]});

		await expect(FairStockEquitykP4dmaN.depositBonus.call(uintpeaAZUt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address6S2Xor = accounts[3]
		const addressWjoayoD = "0x0000000000000000000000000000000000000001"
		const addressx13wadi = "0x0000000000000000000000000000000000000001"
		const addressjxBZSmv = accounts[4]
		const uintu8ib36i = BigInt("290")
		const FairStockEquitymRyyLfe = await FairStockEquity.new(address6S2Xor, addressWjoayoD, addressx13wadi, addressjxBZSmv, uintu8ib36i, {from: "0x0000000000000000000000000000000000000001"});
		const addressWFCQAq = accounts[3]
		const uintVePBfSh = BigInt("381")
		const uintw98QtY = BigInt("1269")
		const addressGilKHrk = accounts[0]
		const uintkV11XB = BigInt("1454")
		const addresspeWiJix = await FairStockEquitymRyyLfe.setDataSource.call(addressWFCQAq, {from: accounts[4]});
		const addressooP30O = await FairStockEquitymRyyLfe.withdrawBonusCallback.call(addressGilKHrk, uintw98QtY, uintVePBfSh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NiadP7e = await FairStockEquitymRyyLfe.invest.call(uintkV11XB, {from: accounts[0]});
		await FairStockEquitymRyyLfe.onlyDataSource.call({from: accounts[3]});
	});

	it('test for FairStockEquity', async () => {
		const addresspCY83ul = accounts[5]
		const addressnEBsU4t = accounts[0]
		const addressmaqL1w9 = accounts[2]
		const addressKw46GB8 = accounts[3]
		const uintbivZzBw = BigInt("1040")
		const FairStockEquityPT2L2j = await FairStockEquity.new(addresspCY83ul, addressnEBsU4t, addressmaqL1w9, addressKw46GB8, uintbivZzBw, {from: accounts[2]});
		const uintXxEwGew = BigInt("1583")
		const uintdfqdKPS = BigInt("1169")
		const addresswYurUPB = accounts[0]
		const uintBtO2bbf = BigInt("314")
		const uintPdWdGET = BigInt("1546")
//		const addressXF3jhIO = await FairStockEquityPT2L2j.withdrawBonusCallback.call(addresswYurUPB, uintdfqdKPS, uintXxEwGew, {from: accounts[3]});
//		const uint256w8sRQkE = await FairStockEquityPT2L2j.bonus.call(uintBtO2bbf, {from: accounts[0]});
//		const uint256R1DnTOV = await FairStockEquityPT2L2j.setProfitPercentBonus.call(uintPdWdGET, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityPT2L2j.withdrawBonusCallback.call(addresswYurUPB, uintdfqdKPS, uintXxEwGew, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address2Gda86 = accounts[5]
		const addresseFo4je = accounts[0]
		const addressj2p2kAE = accounts[2]
		const address1LhMeF = accounts[3]
		const uintsFFUNQc = BigInt("1040")
		const FairStockEquityPT2L2j = await FairStockEquity.new(address2Gda86, addresseFo4je, addressj2p2kAE, address1LhMeF, uintsFFUNQc, {from: accounts[2]});
		const uintVbKbcys = BigInt("214")
//		await FairStockEquityPT2L2j.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256R1DnTOV = await FairStockEquityPT2L2j.setProfitPercentBonus.call(uintVbKbcys, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityPT2L2j.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQjmQSxL = accounts[3]
		const addressU583tXr = accounts[2]
		const addressXxxdUM = accounts[0]
		const addressTnnDdiI = accounts[5]
		const uintzv6P7eQ = BigInt("1524")
		const FairStockEquitykP4dmaN = await FairStockEquity.new(addressQjmQSxL, addressU583tXr, addressXxxdUM, addressTnnDdiI, uintzv6P7eQ, {from: accounts[1]});
		const booln9WY0Qu = true
		const addressDpFtn8i = "0x0000000000000000000000000000000000000001"
		const uintTP0F3ng = BigInt("196")
		const address9SUlSc = await FairStockEquitykP4dmaN.setLPT.call(addressDpFtn8i, booln9WY0Qu, {from: accounts[1]});
		const uint256bq8T2a1 = await FairStockEquitykP4dmaN.getCostAmount.call(uintTP0F3ng, {from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addressjp867h4 = accounts[5]
		const address8WvbwK = accounts[0]
		const addresseUgpe9 = accounts[2]
		const addresszRR60o = accounts[3]
		const uintVKmo7P8 = BigInt("1040")
		const FairStockEquityPT2L2j = await FairStockEquity.new(addressjp867h4, address8WvbwK, addresseUgpe9, addresszRR60o, uintVKmo7P8, {from: accounts[2]});
		const uinthLFWP8W = BigInt("1661")
		const uinthCIj4y7 = BigInt("964")
		const uintizWJCwE = BigInt("120")
		const uintVJhwSEs = BigInt("1108")
		const uintqjCRDZr = BigInt("965")
		const addressBegX6u = accounts[4]
		const uintX5gRkFR = BigInt("1401")
		const uintHKR5Re6 = BigInt("1330")
		const uintBWyRDWv = BigInt("308")
		const uintlP2eXK = BigInt("1634")
		const addressmpZZuqI = accounts[3]
		const uintgXan3dk = BigInt("1537")
//		const uint256i7Huesc = await FairStockEquityPT2L2j.bonus.call(uinthLFWP8W, {from: accounts[3]});
//		const addressLAAe6YK = await FairStockEquityPT2L2j.business.call(addressBegX6u, uintqjCRDZr, uintVJhwSEs, uintizWJCwE, uinthCIj4y7, {from: accounts[4]});
//		const addressSqoHXwj = await FairStockEquityPT2L2j.business.call(addressmpZZuqI, uintlP2eXK, uintBWyRDWv, uintHKR5Re6, uintX5gRkFR, {from: accounts[5]});
//		const uint256R1DnTOV = await FairStockEquityPT2L2j.setProfitPercentBonus.call(uintgXan3dk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityPT2L2j.bonus.call(uinthLFWP8W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})