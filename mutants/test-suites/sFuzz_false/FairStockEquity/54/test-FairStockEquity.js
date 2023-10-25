const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressFLCJ4Un = "0x0000000000000000000000000000000000000001"
		const addressg9fFKwL = accounts[3]
		const addressT9OKGi = accounts[2]
		const address3xxpWw = accounts[5]
		const uintCZEoArc = BigInt("144")
		const FairStockEquityshvNC88 = await FairStockEquity.new(addressFLCJ4Un, addressg9fFKwL, addressT9OKGi, address3xxpWw, uintCZEoArc, {from: accounts[1]});
		const uintBh47zBt = BigInt("1510")
		const uintC1YZlAq = BigInt("721")
		const addressv2u8pQA = "0x0000000000000000000000000000000000000001"
		const uintn5Psghr = BigInt("1825")
		const uint46mZyF = BigInt("1210")
		const addresslUO36Rf = accounts[1]
//		const uint256CrDXmSo = await FairStockEquityshvNC88.setProfitPercentMT.call(uintBh47zBt, {from: accounts[3]});
//		const addressgsQn9ao = await FairStockEquityshvNC88.depositLPT.call(addressv2u8pQA, uintC1YZlAq, {from: accounts[0]});
//		const addressaQyrEw1 = await FairStockEquityshvNC88.withdrawBonusCallback.call(addresslUO36Rf, uint46mZyF, uintn5Psghr, {from: accounts[4]});

		await expect(FairStockEquityshvNC88.setProfitPercentMT.call(uintBh47zBt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstApins = accounts[4]
		const addresskJxeoD = accounts[1]
		const addressryP4RBv = accounts[2]
		const addressnIt7l4u = accounts[0]
		const uintdrVouU2 = BigInt("764")
		const FairStockEquityaeDD6e1 = await FairStockEquity.new(addresstApins, addresskJxeoD, addressryP4RBv, addressnIt7l4u, uintdrVouU2, {from: "0x0000000000000000000000000000000000000001"});
		const uintwdcjDXk = BigInt("1282")
		const uintUGjycxs = BigInt("1158")
		const uintYHo6GMJ = BigInt("1615")
		const addressrQ2Ainw = accounts[3]
		const uinttsVcM1G = BigInt("44")
		const uint256UrbC9Za = await FairStockEquityaeDD6e1.getCostAmount.call(uintwdcjDXk, {from: accounts[4]});
		const uint256sCmWWs = await FairStockEquityaeDD6e1.setProfitPercentBonus.call(uintUGjycxs, {from: accounts[5]});
		const addressLjCKKzs = await FairStockEquityaeDD6e1.depositLPT.call(addressrQ2Ainw, uintYHo6GMJ, {from: accounts[2]});
		const uint256kj3HZPX = await FairStockEquityaeDD6e1.setProfitPercentMT.call(uinttsVcM1G, {from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addresstmLd1WW = "0x0000000000000000000000000000000000000001"
		const addressWWAA83D = accounts[4]
		const addressWwyKGhq = accounts[3]
		const addressM7oOsuj = accounts[2]
		const uintnIM7Leh = BigInt("1440")
		const FairStockEquityKSJ6Ez = await FairStockEquity.new(addresstmLd1WW, addressWWAA83D, addressWwyKGhq, addressM7oOsuj, uintnIM7Leh, {from: accounts[1]});
		const uinteChawnE = BigInt("1238")
		const uinteJvu95D = BigInt("556")
		const addressMilZ6Iz = accounts[2]
//		await FairStockEquityKSJ6Ez.checkStart.call({from: accounts[4]});
//		const uint256opptlA = await FairStockEquityKSJ6Ez.setProfitPercentBonus.call(uinteChawnE, {from: accounts[3]});
//		const uint256XZtH1TY = await FairStockEquityKSJ6Ez.setStartTime.call(uinteJvu95D, {from: accounts[4]});
//		const addressiM2U3Ro = await FairStockEquityKSJ6Ez.setDataSource.call(addressMilZ6Iz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityKSJ6Ez.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresswpgsXk = accounts[2]
		const addressvOjAuvj = accounts[2]
		const addressszdx9lj = "0x0000000000000000000000000000000000000001"
		const addressnpJbpQl = accounts[3]
		const uintCeM2Foz = BigInt("245")
		const FairStockEquitylaFtQ8C = await FairStockEquity.new(addresswpgsXk, addressvOjAuvj, addressszdx9lj, addressnpJbpQl, uintCeM2Foz, {from: accounts[5]});
		const uintrrR2un9 = BigInt("302")
		const uintb4j5TmE = BigInt("1578")
		const uintE2yDwhD = BigInt("574")
		const uintwTBHaCO = BigInt("88")
		const addressStPC68m = accounts[2]
		const uintZHIZabN = BigInt("749")
//		const uint256nkjotE5 = await FairStockEquitylaFtQ8C.depositBonus.call(uintrrR2un9, {from: accounts[1]});
//		await FairStockEquitylaFtQ8C.onlyDataSource.call({from: accounts[0]});
//		const uint256Ox6BP7G = await FairStockEquitylaFtQ8C.depositBonus.call(uintb4j5TmE, {from: accounts[0]});
//		const uint256f6sTvls = await FairStockEquitylaFtQ8C.setProfitPercentMT.call(uintE2yDwhD, {from: accounts[2]});
//		const addressDotLW2 = await FairStockEquitylaFtQ8C.withdrawLPT.call(addressStPC68m, uintwTBHaCO, {from: accounts[1]});
//		const uint256Ckn90EJ = await FairStockEquitylaFtQ8C.getCostAmount.call(uintZHIZabN, {from: accounts[3]});

		await expect(FairStockEquitylaFtQ8C.depositBonus.call(uintrrR2un9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresswYfMFES = "0x0000000000000000000000000000000000000001"
		const addressjWgJAXf = accounts[0]
		const addressoYKB481 = accounts[5]
		const addressWe4ORVr = accounts[1]
		const uintAPPSg5 = BigInt("1575")
		const FairStockEquityfJZVWv = await FairStockEquity.new(addresswYfMFES, addressjWgJAXf, addressoYKB481, addressWe4ORVr, uintAPPSg5, {from: accounts[4]});
		const uintpT57UA = BigInt("1917")
		const uintJsYUYE3 = BigInt("834")
		const uintGnsgzRM = BigInt("976")
//		const uint256LNPVS4d = await FairStockEquityfJZVWv.invest.call(uintpT57UA, {from: accounts[1]});
//		const uint256wiooZi = await FairStockEquityfJZVWv.invest.call(uintJsYUYE3, {from: accounts[0]});
//		await FairStockEquityfJZVWv.onlyDataSource.call({from: accounts[2]});
//		const uint256cN7yCG = await FairStockEquityfJZVWv.setProfitPercentMT.call(uintGnsgzRM, {from: accounts[1]});
//		await FairStockEquityfJZVWv.withdrawMT.call({from: accounts[0]});

		await expect(FairStockEquityfJZVWv.invest.call(uintpT57UA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOG5hM1l = accounts[3]
		const addresseZPrsVL = accounts[1]
		const addresskevim3c = accounts[0]
		const addressV3mM5EU = accounts[1]
		const uintZ5GQO2 = BigInt("1918")
		const FairStockEquityjjKS1w1 = await FairStockEquity.new(addressOG5hM1l, addresseZPrsVL, addresskevim3c, addressV3mM5EU, uintZ5GQO2, {from: accounts[5]});
		const uintw3aO0A = BigInt("888")
		const uintpRCoKSC = BigInt("1846")
		const addressgnv4imG = accounts[0]
		const uintkjxGO4f = BigInt("1628")
		const uintYuBbhf = BigInt("1916")
		const uintCgLxhoO = BigInt("182")
		const uintzhpTY4l = BigInt("61")
		const uintmGUIaVm = BigInt("1104")
//		const address6g0VAw = await FairStockEquityjjKS1w1.withdrawBonusCallback.call(addressgnv4imG, uintpRCoKSC, uintw3aO0A, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityjjKS1w1.f.call({from: accounts[3]});
//		const uint256aNBKXmm = await FairStockEquityjjKS1w1.setDegree.call(uintmGUIaVm, uintzhpTY4l, uintCgLxhoO, uintYuBbhf, uintkjxGO4f, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityjjKS1w1.withdrawBonusCallback.call(addressgnv4imG, uintpRCoKSC, uintw3aO0A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspvA708P = accounts[0]
		const addressya4UYeM = accounts[0]
		const addresslblPEzN = accounts[1]
		const addressR7DCpUJ = accounts[2]
		const uinteLRAu0 = BigInt("1544")
		const FairStockEquityRssJNGb = await FairStockEquity.new(addresspvA708P, addressya4UYeM, addresslblPEzN, addressR7DCpUJ, uinteLRAu0, {from: accounts[1]});
		const uintykE87WU = BigInt("2032")
		const addressHR6j9gv = accounts[4]
		const uintORJxKB7 = BigInt("338")
		const addressoxohYQN = accounts[2]
		const boolL6IioRc = true
		const addresslU4Hnur = accounts[3]
//		const addressOAyC4dd = await FairStockEquityRssJNGb.depositLPT.call(addressHR6j9gv, uintykE87WU, {from: accounts[3]});
//		const uint256Jd4xztG = await FairStockEquityRssJNGb.setGasFeeForCallback.call(uintORJxKB7, {from: accounts[1]});
//		const addressA14JF5G = await FairStockEquityRssJNGb.setDataSource.call(addressoxohYQN, {from: accounts[0]});
//		const addressSy0hcLJ = await FairStockEquityRssJNGb.setLPT.call(addresslU4Hnur, boolL6IioRc, {from: accounts[0]});

		await expect(FairStockEquityRssJNGb.depositLPT.call(addressHR6j9gv, uintykE87WU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressP0Ugtr5 = "0x0000000000000000000000000000000000000001"
		const addressvOt3Euf = accounts[3]
		const address9W38mg = accounts[2]
		const addresstLQuRVL = accounts[5]
		const uintIJFa8OT = BigInt("144")
		const FairStockEquityshvNC88 = await FairStockEquity.new(addressP0Ugtr5, addressvOt3Euf, address9W38mg, addresstLQuRVL, uintIJFa8OT, {from: accounts[1]});
		const addresszKpxcIC = accounts[3]
		const uintj4oJwH = BigInt("936")
		const uintXHvbqAU = BigInt("1049")
		const uintkm00Nsx = BigInt("1127")
		const uint6BenPA = BigInt("1051")
		const addressnXNn6oJ = accounts[4]
		const uintm2mgnkq = BigInt("1510")
		const uintv7Wu9Nw = BigInt("721")
		const addresspOo5BR2 = "0x0000000000000000000000000000000000000001"
		const uinttqsPVzm = BigInt("1825")
		const uintunD8gOS = BigInt("1210")
		const addresso8maYeU = accounts[2]
		const boolHERPsb = true
		const addressYmKMfw3 = accounts[4]
//		const addressL5Z0vF2 = await FairStockEquityshvNC88.setDataSource.call(addresszKpxcIC, {from: accounts[3]});
//		const addressTn1E74f = await FairStockEquityshvNC88.business.call(addressnXNn6oJ, uint6BenPA, uintkm00Nsx, uintXHvbqAU, uintj4oJwH, {from: accounts[3]});
//		const uint256CrDXmSo = await FairStockEquityshvNC88.setProfitPercentMT.call(uintm2mgnkq, {from: accounts[3]});
//		const addressgsQn9ao = await FairStockEquityshvNC88.depositLPT.call(addresspOo5BR2, uintv7Wu9Nw, {from: accounts[0]});
//		const addressaQyrEw1 = await FairStockEquityshvNC88.withdrawBonusCallback.call(addresso8maYeU, uintunD8gOS, uinttqsPVzm, {from: accounts[4]});
//		const addresswpWrVyG = await FairStockEquityshvNC88.setLPT.call(addressYmKMfw3, boolHERPsb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityshvNC88.setDataSource.call(addresszKpxcIC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address8c53vE = accounts[4]
		const addressusYDnDp = accounts[4]
		const addressZwTWA3U = accounts[1]
		const addresskwhQBbD = accounts[2]
		const uintKfYEL5c = BigInt("853")
		const FairStockEquitys0XEZ5e = await FairStockEquity.new(address8c53vE, addressusYDnDp, addressZwTWA3U, addresskwhQBbD, uintKfYEL5c, {from: accounts[3]});
//		await FairStockEquitys0XEZ5e.withdrawBonus.call({from: accounts[0]});
//		await FairStockEquitys0XEZ5e.f.call({from: accounts[1]});

		await expect(FairStockEquitys0XEZ5e.withdrawBonus.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrgeQviD = accounts[1]
		const addressbrgsHKx = accounts[2]
		const addressKQxUH70 = accounts[0]
		const addressqEMtU7U = accounts[1]
		const uintuliH5tk = BigInt("292")
		const FairStockEquityvlvOEzI = await FairStockEquity.new(addressrgeQviD, addressbrgsHKx, addressKQxUH70, addressqEMtU7U, uintuliH5tk, {from: accounts[0]});
		const uintdAhZJe0 = BigInt("1379")
		const uintPCLXPtI = BigInt("1500")
		const uintLxxnRTn = BigInt("2012")
		const uintij97YWi = BigInt("634")
		const addressj5sqqjV = accounts[3]
		const uintg9FuuYl = BigInt("1075")
		const uintjoEfzzN = BigInt("436")
		const uintT0qpHK6 = BigInt("1476")
		const uintXzASi3 = BigInt("1820")
		const addresstzPxCCL = accounts[5]
//		const addressvyTeVDp = await FairStockEquityvlvOEzI.business.call(addressj5sqqjV, uintij97YWi, uintLxxnRTn, uintPCLXPtI, uintdAhZJe0, {from: accounts[2]});
//		const uint256CWEiWE4 = await FairStockEquityvlvOEzI.setProfitPercentPJ.call(uintg9FuuYl, {from: accounts[5]});
//		const uint256kdgiN9i = await FairStockEquityvlvOEzI.depositBonus.call(uintjoEfzzN, {from: accounts[4]});
//		const address87ps7d = await FairStockEquityvlvOEzI.withdrawMTCallback.call(addresstzPxCCL, uintXzASi3, uintT0qpHK6, {from: accounts[4]});
//		await FairStockEquityvlvOEzI.f.call({from: accounts[1]});

		await expect(FairStockEquityvlvOEzI.business.call(addressj5sqqjV, uintij97YWi, uintLxxnRTn, uintPCLXPtI, uintdAhZJe0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBonctY1 = accounts[0]
		const addressXHNhSzT = accounts[3]
		const addressx9ZFuQZ = accounts[4]
		const addresslz22OPD = accounts[4]
		const uintw3D0NkS = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressBonctY1, addressXHNhSzT, addressx9ZFuQZ, addresslz22OPD, uintw3D0NkS, {from: accounts[4]});
		const addressR0onNf8 = accounts[4]
		const uintJNQTW6k = BigInt("875")
		const uintU6Hhc9K = BigInt("900")
		const addressKtJpHe8 = accounts[1]
		const uintvYBRg9d = BigInt("1265")
		const addressPyGvve6 = await FairStockEquity5cJmwd.setDataSource.call(addressR0onNf8, {from: accounts[4]});
//		const addressLB2HTHI = await FairStockEquity5cJmwd.withdrawBonusCallback.call(addressKtJpHe8, uintU6Hhc9K, uintJNQTW6k, {from: accounts[4]});
//		await FairStockEquity5cJmwd.onlyDataSource.call({from: accounts[2]});
//		const uint256RRnaH7V = await FairStockEquity5cJmwd.setProfitPercentBonus.call(uintvYBRg9d, {from: accounts[4]});

		await expect(FairStockEquity5cJmwd.withdrawBonusCallback.call(addressKtJpHe8, uintU6Hhc9K, uintJNQTW6k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressa5GXmsK = accounts[0]
		const addressrJNswL2 = accounts[3]
		const addresszsNW7kp = accounts[4]
		const addressLSTw2kB = accounts[4]
		const uintgdjPtF = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressa5GXmsK, addressrJNswL2, addresszsNW7kp, addressLSTw2kB, uintgdjPtF, {from: accounts[4]});
		const uintDrDLdht = BigInt("1579")
		const addressRJiI5QH = accounts[5]
		const uint256BLZl2Ks = await FairStockEquity5cJmwd.setStartTime.call(uintDrDLdht, {from: accounts[4]});
		const addressPyGvve6 = await FairStockEquity5cJmwd.setDataSource.call(addressRJiI5QH, {from: accounts[4]});
//		await FairStockEquity5cJmwd.onlyDataSource.call({from: accounts[4]});
//		await FairStockEquity5cJmwd.checkStart.call({from: accounts[2]});
//		await FairStockEquity5cJmwd.onlyDataSource.call({from: accounts[0]});

		await expect(FairStockEquity5cJmwd.onlyDataSource.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressE39Qec = accounts[0]
		const addressPrfuX7 = accounts[3]
		const addressVZhZAEs = accounts[4]
		const addresst52IMeu = accounts[4]
		const uintwpjyRCd = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressE39Qec, addressPrfuX7, addressVZhZAEs, addresst52IMeu, uintwpjyRCd, {from: accounts[4]});
		const uinty0aoUZf = BigInt("498")
		const boolJuSD51M = true
		const addresseBKRXl = accounts[5]
		const uint256RRnaH7V = await FairStockEquity5cJmwd.setProfitPercentBonus.call(uinty0aoUZf, {from: accounts[4]});
		const addressRwfowMF = await FairStockEquity5cJmwd.setLPT.call(addresseBKRXl, boolJuSD51M, {from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addressjnbsKaO = accounts[0]
		const addressbPa7xi4 = accounts[3]
		const addressq7Zm0J8 = accounts[4]
		const addressNWEvb3E = accounts[4]
		const uints7AXmJk = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressjnbsKaO, addressbPa7xi4, addressq7Zm0J8, addressNWEvb3E, uints7AXmJk, {from: accounts[4]});
		const uintSTmQpJz = BigInt("1406")
		const addresspdmdoU = accounts[5]
		const addresstW6h7ij = accounts[5]
//		const addressy1TitCy = await FairStockEquity5cJmwd.withdrawLPT.call(addresspdmdoU, uintSTmQpJz, {from: "0x0000000000000000000000000000000000000001"});
//		const addressPyGvve6 = await FairStockEquity5cJmwd.setDataSource.call(addresstW6h7ij, {from: accounts[4]});

		await expect(FairStockEquity5cJmwd.withdrawLPT.call(addresspdmdoU, uintSTmQpJz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOWsOWMt = accounts[0]
		const addressBKZ2RKq = accounts[3]
		const addressySn6vzb = accounts[4]
		const addressG3IwoVG = accounts[4]
		const uintLAQI9X7 = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressOWsOWMt, addressBKZ2RKq, addressySn6vzb, addressG3IwoVG, uintLAQI9X7, {from: accounts[4]});
		const addressAEK9g0y = accounts[5]
		const uintO9esvmh = BigInt("1982")
//		await FairStockEquity5cJmwd.withdrawMT.call({from: accounts[3]});
//		const addressPyGvve6 = await FairStockEquity5cJmwd.setDataSource.call(addressAEK9g0y, {from: accounts[4]});
//		const uint256TcOrjV1 = await FairStockEquity5cJmwd.bonus.call(uintO9esvmh, {from: accounts[4]});

		await expect(FairStockEquity5cJmwd.withdrawMT.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressG2Ft0L = accounts[0]
		const addressrqE7ita = accounts[3]
		const addressnT5cBg = accounts[4]
		const addressfVc8hmV = accounts[4]
		const uintEZOuAzI = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressG2Ft0L, addressrqE7ita, addressnT5cBg, addressfVc8hmV, uintEZOuAzI, {from: accounts[4]});
		const uintve19w54 = BigInt("916")
		const uintrJelR10 = BigInt("1542")
//		const uint256sK178fy = await FairStockEquity5cJmwd.bonus.call(uintve19w54, {from: accounts[4]});
//		const uint256hkRmZE9 = await FairStockEquity5cJmwd.invest.call(uintrJelR10, {from: accounts[1]});

		await expect(FairStockEquity5cJmwd.bonus.call(uintve19w54, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresswepHEzN = accounts[0]
		const addressD5A4Hc = accounts[3]
		const addressF7vbo3v = accounts[4]
		const addresszZTWvv3 = accounts[4]
		const uintw0oF8yK = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addresswepHEzN, addressD5A4Hc, addressF7vbo3v, addresszZTWvv3, uintw0oF8yK, {from: accounts[4]});
		const addressSl3ahHa = accounts[5]
		const uintPPJwI4Z = BigInt("1323")
		const addressPyGvve6 = await FairStockEquity5cJmwd.setDataSource.call(addressSl3ahHa, {from: accounts[4]});
//		const uint256dpHk8tf = await FairStockEquity5cJmwd.reduceShare.call(uintPPJwI4Z, {from: accounts[2]});

		await expect(FairStockEquity5cJmwd.reduceShare.call(uintPPJwI4Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYSzqWPR = accounts[0]
		const addressRqh4NW = accounts[3]
		const addressav9286h = accounts[4]
		const addressKzBBSE = accounts[4]
		const uintHCMi3SC = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressYSzqWPR, addressRqh4NW, addressav9286h, addressKzBBSE, uintHCMi3SC, {from: accounts[4]});
		const addressqnm0gFn = accounts[5]
//		await FairStockEquity5cJmwd.f.call({from: accounts[3]});
//		const addressPyGvve6 = await FairStockEquity5cJmwd.setDataSource.call(addressqnm0gFn, {from: accounts[4]});

		await expect(FairStockEquity5cJmwd.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUznxYUf = accounts[0]
		const addressf6SeuPU = accounts[3]
		const addressXATdKH8 = accounts[4]
		const addressWi09z1g = accounts[4]
		const uintfbhB4Sg = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressUznxYUf, addressf6SeuPU, addressXATdKH8, addressWi09z1g, uintfbhB4Sg, {from: accounts[4]});
		const uint5VGPqd = BigInt("601")
		const uintIYmwejT = BigInt("1515")
		const uintiLJTC69 = BigInt("353")
		const uintThXO1Km = BigInt("439")
		const addressJbPLB3U = accounts[3]
//		const uint256tpykDVQ = await FairStockEquity5cJmwd.setStartTime.call(uint5VGPqd, {from: accounts[4]});
//		const uint256hkRmZE9 = await FairStockEquity5cJmwd.invest.call(uintIYmwejT, {from: accounts[1]});
//		const addressgM55wu1 = await FairStockEquity5cJmwd.setModule.call(addressJbPLB3U, uintThXO1Km, uintiLJTC69, {from: accounts[0]});

		await expect(FairStockEquity5cJmwd.setStartTime.call(uint5VGPqd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjZyzx3v = accounts[0]
		const addressxhmnR6W = accounts[3]
		const addressVNQlVV0 = accounts[4]
		const addressN0DcgXe = accounts[4]
		const uintCBL1RLd = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressjZyzx3v, addressxhmnR6W, addressVNQlVV0, addressN0DcgXe, uintCBL1RLd, {from: accounts[4]});
		const addressGy6LQn = accounts[5]
		const uintL6cyyXh = BigInt("93")
		const uintHo5Z5qe = BigInt("1752")
		const uintJ7ZWiuh = BigInt("1914")
		const uintMEnCH6E = BigInt("905")
		const uintydR3QEK = BigInt("819")
		const addressPyGvve6 = await FairStockEquity5cJmwd.setDataSource.call(addressGy6LQn, {from: accounts[4]});
//		await FairStockEquity5cJmwd.withdrawPJ.call({from: accounts[4]});
//		const uint256H4Sac1 = await FairStockEquity5cJmwd.setDegree.call(uintydR3QEK, uintMEnCH6E, uintJ7ZWiuh, uintHo5Z5qe, uintL6cyyXh, {from: accounts[0]});
//		await FairStockEquity5cJmwd.onlyDataSource.call({from: accounts[2]});

		await expect(FairStockEquity5cJmwd.withdrawPJ.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJrcSx5S = accounts[3]
		const addressdGkGOk = "0x0000000000000000000000000000000000000001"
		const addressf5X0Xbh = accounts[4]
		const addressyBSVFw = accounts[3]
		const uintBFiRIOy = BigInt("91")
		const FairStockEquitypVlhuM4 = await FairStockEquity.new(addressJrcSx5S, addressdGkGOk, addressf5X0Xbh, addressyBSVFw, uintBFiRIOy, {from: accounts[1]});
		const uintqDG3GKc = BigInt("1")
		const uintRM1MmyV = BigInt("303")
		const addresspAuGZU = accounts[0]
		const uintO7zIQ3I = BigInt("1453")
		const uintzQGuELQ = BigInt("333")
//		const address60vbUR = await FairStockEquitypVlhuM4.withdrawMTCallback.call(addresspAuGZU, uintRM1MmyV, uintqDG3GKc, {from: accounts[3]});
//		const uint256QqBMAVq = await FairStockEquitypVlhuM4.reduceShare.call(uintO7zIQ3I, {from: accounts[4]});
//		const uint256oGEOvTB = await FairStockEquitypVlhuM4.bonus.call(uintzQGuELQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitypVlhuM4.withdrawMTCallback.call(addresspAuGZU, uintRM1MmyV, uintqDG3GKc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressoRA0Ucl = accounts[0]
		const addresszVZizhv = accounts[3]
		const addresswh34bkO = accounts[4]
		const addressHWRU9L = accounts[4]
		const uintuZALw4 = BigInt("1028")
		const FairStockEquity5cJmwd = await FairStockEquity.new(addressoRA0Ucl, addresszVZizhv, addresswh34bkO, addressHWRU9L, uintuZALw4, {from: accounts[4]});
		const uintcOUmbBf = BigInt("509")
		const uintV0VEh4X = BigInt("1807")
		const addresscHO7xC9 = accounts[4]
		const uintkpAZDU = BigInt("2037")
		const addressuLDAGTN = await FairStockEquity5cJmwd.setModule.call(addresscHO7xC9, uintV0VEh4X, uintcOUmbBf, {from: accounts[4]});
//		const uint256hkRmZE9 = await FairStockEquity5cJmwd.invest.call(uintkpAZDU, {from: accounts[1]});

		await expect(FairStockEquity5cJmwd.invest.call(uintkpAZDU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})