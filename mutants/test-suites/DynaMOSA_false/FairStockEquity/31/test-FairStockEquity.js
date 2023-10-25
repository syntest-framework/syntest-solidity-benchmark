const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressArn077i = accounts[4]
		const addressJyno1lu = accounts[2]
		const addressGGfr7e5 = accounts[4]
		const addresskSYLpPM = accounts[4]
		const uintpHKokYF = BigInt("599")
		const FairStockEquityH4qO4d = await FairStockEquity.new(addressArn077i, addressJyno1lu, addressGGfr7e5, addresskSYLpPM, uintpHKokYF, {from: accounts[5]});
		const uintmub3QUJ = BigInt("1134")
		const uintH97ath = BigInt("364")
		const uintQpqcnQr = BigInt("363")
		const uintsSACwkT = BigInt("585")
		const addressxyEpA7e = accounts[3]
		const uintuiLKx1A = BigInt("668")
//		const uint256CDeWUoI = await FairStockEquityH4qO4d.setProfitPercentMT.call(uintmub3QUJ, {from: accounts[3]});
//		const uint256JyVz14W = await FairStockEquityH4qO4d.setProfitPercentPJ.call(uintH97ath, {from: accounts[1]});
//		const address4jCADq = await FairStockEquityH4qO4d.withdrawMTCallback.call(addressxyEpA7e, uintsSACwkT, uintQpqcnQr, {from: accounts[3]});
//		const uint256o0UcDAt = await FairStockEquityH4qO4d.invest.call(uintuiLKx1A, {from: accounts[0]});

		await expect(FairStockEquityH4qO4d.setProfitPercentMT.call(uintmub3QUJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressujCab4G = accounts[5]
		const addressywsOtGh = accounts[4]
		const addressPj1ut1 = accounts[3]
		const addressOvXzSs7 = accounts[0]
		const uintUNNXdAh = BigInt("1350")
		const FairStockEquityxznUDCI = await FairStockEquity.new(addressujCab4G, addressywsOtGh, addressPj1ut1, addressOvXzSs7, uintUNNXdAh, {from: accounts[4]});
		const uintc7nWVO1 = BigInt("2039")
		const uintjbiXjld = BigInt("1428")
		const addresse5LC15q = accounts[3]
		const uintFGcX8g = BigInt("1014")
		const uintGMyosZr = BigInt("965")
		const uintsdqxo5 = BigInt("314")
		const uintdl3r6DK = BigInt("1297")
		const address5DCSK8 = accounts[4]
		const boolmyxaPwA = true
		const addressPI2EuXY = accounts[5]
//		const addressc9Z16gz = await FairStockEquityxznUDCI.withdrawMTCallback.call(addresse5LC15q, uintjbiXjld, uintc7nWVO1, {from: accounts[1]});
//		await FairStockEquityxznUDCI.checkStart.call({from: accounts[0]});
//		const addressjKKaywJ = await FairStockEquityxznUDCI.business.call(address5DCSK8, uintdl3r6DK, uintsdqxo5, uintGMyosZr, uintFGcX8g, {from: accounts[4]});
//		const addressZjVLYJe = await FairStockEquityxznUDCI.setLPT.call(addressPI2EuXY, boolmyxaPwA, {from: accounts[2]});

		await expect(FairStockEquityxznUDCI.withdrawMTCallback.call(addresse5LC15q, uintjbiXjld, uintc7nWVO1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUoAmN7Q = accounts[4]
		const addressq6VMd56 = accounts[1]
		const addressPxpGyfM = "0x0000000000000000000000000000000000000001"
		const addressla50j6d = accounts[1]
		const uintx7wgeOw = BigInt("464")
		const FairStockEquitynbvKlZI = await FairStockEquity.new(addressUoAmN7Q, addressq6VMd56, addressPxpGyfM, addressla50j6d, uintx7wgeOw, {from: accounts[1]});
		const uintsaTV7Q = BigInt("1724")
		const uintaAXgnDF = BigInt("833")
		const uintyqrgPiL = BigInt("1097")
		const uinthrsTViO = BigInt("1358")
		const uint256iTXczE4 = await FairStockEquitynbvKlZI.getCostAmount.call(uintsaTV7Q, {from: accounts[3]});
//		const uint256y7uebC6 = await FairStockEquitynbvKlZI.depositBonus.call(uintaAXgnDF, {from: accounts[5]});
//		const uint256MQUAKzk = await FairStockEquitynbvKlZI.getCostAmount.call(uintyqrgPiL, {from: accounts[4]});
//		await FairStockEquitynbvKlZI.f.call({from: accounts[4]});
//		const uint256kpTihCg = await FairStockEquitynbvKlZI.setProfitPercentBonus.call(uinthrsTViO, {from: accounts[4]});

		await expect(FairStockEquitynbvKlZI.depositBonus.call(uintaAXgnDF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressCCba3Ki = accounts[0]
		const addressawF3qUF = accounts[2]
		const addressk9BcqR = accounts[3]
		const addressusGmQNh = accounts[0]
		const uintSREz7Q = BigInt("1139")
		const FairStockEquityOqpVyC9 = await FairStockEquity.new(addressCCba3Ki, addressawF3qUF, addressk9BcqR, addressusGmQNh, uintSREz7Q, {from: accounts[1]});
		const uintPp01rSM = BigInt("43")
		const uintSnWPKzx = BigInt("606")
		const uintDQeZQ2y = BigInt("1025")
		const uintUsNN8su = BigInt("1782")
//		const uint256AdLEsaa = await FairStockEquityOqpVyC9.setStartTime.call(uintPp01rSM, {from: accounts[2]});
//		const uint2564CfJUp = await FairStockEquityOqpVyC9.setProfitPercentMT.call(uintSnWPKzx, {from: accounts[3]});
//		const uint256EE8PpBH = await FairStockEquityOqpVyC9.bonus.call(uintDQeZQ2y, {from: accounts[4]});
//		const uint256VRjFZnm = await FairStockEquityOqpVyC9.getCostAmount.call(uintUsNN8su, {from: accounts[4]});
//		await FairStockEquityOqpVyC9.withdrawPJ.call({from: accounts[3]});

		await expect(FairStockEquityOqpVyC9.setStartTime.call(uintPp01rSM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDQs5Z1Z = accounts[3]
		const addressCUIjVFo = accounts[1]
		const addressRMUE5rR = accounts[1]
		const addresslgQhC2h = accounts[2]
		const uintWbKsapx = BigInt("1683")
		const FairStockEquityqEOYEe4 = await FairStockEquity.new(addressDQs5Z1Z, addressCUIjVFo, addressRMUE5rR, addresslgQhC2h, uintWbKsapx, {from: accounts[4]});
		const uintHuq1zZ5 = BigInt("1347")
		const uintO8esyqN = BigInt("314")
		const uintYP9eEVe = BigInt("261")
		const uintZYkRlTk = BigInt("1307")
		const addressdBWqkwy = accounts[0]
		const addressphR0zPx = accounts[3]
//		const addressCL2NUla = await FairStockEquityqEOYEe4.business.call(addressdBWqkwy, uintZYkRlTk, uintYP9eEVe, uintO8esyqN, uintHuq1zZ5, {from: accounts[2]});
//		await FairStockEquityqEOYEe4.checkStart.call({from: accounts[0]});
//		const addressBoIlSh5 = await FairStockEquityqEOYEe4.setDataSource.call(addressphR0zPx, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityqEOYEe4.withdrawPJ.call({from: accounts[5]});

		await expect(FairStockEquityqEOYEe4.business.call(addressdBWqkwy, uintZYkRlTk, uintYP9eEVe, uintO8esyqN, uintHuq1zZ5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZpNBoY = accounts[4]
		const addressFMGYr6w = accounts[3]
		const addressg5BgUAS = accounts[4]
		const addresszHlrNVo = accounts[2]
		const uintmDirjWq = BigInt("1304")
		const FairStockEquityfNcPEYe = await FairStockEquity.new(addressZpNBoY, addressFMGYr6w, addressg5BgUAS, addresszHlrNVo, uintmDirjWq, {from: accounts[4]});
		const addressd8ZUlwF = accounts[4]
		const uintnxcevlZ = BigInt("1229")
		const uintH7IMywZ = BigInt("1141")
		const addressznnAxsm = accounts[1]
//		await FairStockEquityfNcPEYe.withdrawBonus.call({from: accounts[4]});
//		const addressfzmZCd = await FairStockEquityfNcPEYe.setDataSource.call(addressd8ZUlwF, {from: accounts[0]});
//		const uint256Ajmx8TS = await FairStockEquityfNcPEYe.getCostAmount.call(uintnxcevlZ, {from: accounts[3]});
//		const addressoDoIQJD = await FairStockEquityfNcPEYe.depositLPT.call(addressznnAxsm, uintH7IMywZ, {from: accounts[5]});
//		await FairStockEquityfNcPEYe.f.call({from: accounts[5]});

		await expect(FairStockEquityfNcPEYe.withdrawBonus.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDRWnpkb = "0x0000000000000000000000000000000000000001"
		const addresstTjGNrX = accounts[1]
		const addressy3v97j1 = accounts[5]
		const addressiWHbQn6 = accounts[3]
		const uintvKFM9Co = BigInt("726")
		const FairStockEquityeEMuk8C = await FairStockEquity.new(addressDRWnpkb, addresstTjGNrX, addressy3v97j1, addressiWHbQn6, uintvKFM9Co, {from: accounts[2]});
		const uintQKSbtx = BigInt("1412")
		const uintLGijYIm = BigInt("140")
		const uintkIHOJBT = BigInt("818")
		const uint256Ex5oey = await FairStockEquityeEMuk8C.getCostAmount.call(uintQKSbtx, {from: accounts[2]});
//		const uint256jYqvAdT = await FairStockEquityeEMuk8C.reduceShare.call(uintLGijYIm, {from: accounts[2]});
//		const uint256hE21drE = await FairStockEquityeEMuk8C.invest.call(uintkIHOJBT, {from: accounts[2]});

		await expect(FairStockEquityeEMuk8C.reduceShare.call(uintLGijYIm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressn2eL3Ke = accounts[3]
		const addressW2N3uFK = accounts[1]
		const address1gJflw = accounts[1]
		const addressOHsj3tg = accounts[2]
		const uintIvMBmAJ = BigInt("1683")
		const FairStockEquityqEOYEe4 = await FairStockEquity.new(addressn2eL3Ke, addressW2N3uFK, address1gJflw, addressOHsj3tg, uintIvMBmAJ, {from: accounts[4]});
		const addressQRzqYfp = accounts[3]
//		await FairStockEquityqEOYEe4.checkStart.call({from: accounts[0]});
//		const addressBoIlSh5 = await FairStockEquityqEOYEe4.setDataSource.call(addressQRzqYfp, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityqEOYEe4.withdrawPJ.call({from: accounts[5]});

		await expect(FairStockEquityqEOYEe4.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqofqIvo = accounts[3]
		const addressOQCepGj = accounts[1]
		const addresskWTiwM = accounts[1]
		const addressXvmYGKJ = accounts[2]
		const uintqWSqQJ7 = BigInt("1683")
		const FairStockEquityqEOYEe4 = await FairStockEquity.new(addressqofqIvo, addressOQCepGj, addresskWTiwM, addressXvmYGKJ, uintqWSqQJ7, {from: accounts[4]});
		const uintyjsWdA = BigInt("1351")
		const uintJJieo9G = BigInt("1347")
		const uintsJim7Dy = BigInt("314")
		const uintgpHb1Qb = BigInt("261")
		const uintwLZK3Yr = BigInt("1307")
		const addressdeZaGnH = accounts[0]
//		const uint256shKn5UN = await FairStockEquityqEOYEe4.invest.call(uintyjsWdA, {from: accounts[1]});
//		const addressCL2NUla = await FairStockEquityqEOYEe4.business.call(addressdeZaGnH, uintwLZK3Yr, uintgpHb1Qb, uintsJim7Dy, uintJJieo9G, {from: accounts[2]});
//		await FairStockEquityqEOYEe4.checkStart.call({from: accounts[0]});
//		await FairStockEquityqEOYEe4.withdrawPJ.call({from: accounts[5]});
//		await FairStockEquityqEOYEe4.withdrawMT.call({from: accounts[4]});

		await expect(FairStockEquityqEOYEe4.invest.call(uintyjsWdA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressh5WlHnj = accounts[3]
		const addresstdLWqu = accounts[1]
		const addressvA1Va8h = accounts[1]
		const addressInhIfB = accounts[2]
		const uintUZgzkd = BigInt("1683")
		const FairStockEquityqEOYEe4 = await FairStockEquity.new(addressh5WlHnj, addresstdLWqu, addressvA1Va8h, addressInhIfB, uintUZgzkd, {from: accounts[4]});
		const uintoF8e0p2 = BigInt("222")
		const addressqZv1qPk = accounts[1]
		const uintjaOh7E = BigInt("1347")
		const uintT2mxRn = BigInt("314")
		const uintEYNGc7 = BigInt("261")
		const uintwMUBqu6 = BigInt("1007")
		const address3sZNLp = accounts[0]
		const uintOpCMLNr = BigInt("418")
		const uintidfVmCH = BigInt("882")
		const uintKa7Pge7 = BigInt("1109")
		const uintohyBWZl = BigInt("1792")
		const addressJfdlee4 = accounts[0]
		const uintzUlbTUf = BigInt("656")
		const addressXImjOkc = accounts[2]
		const uintURPU203 = BigInt("1692")
		const addressu2V9RF4 = accounts[2]
		const addressjYF8J2I = "0x0000000000000000000000000000000000000000"
//		const addressy2fi3bW = await FairStockEquityqEOYEe4.depositLPT.call(addressqZv1qPk, uintoF8e0p2, {from: accounts[0]});
//		const addressCL2NUla = await FairStockEquityqEOYEe4.business.call(address3sZNLp, uintwMUBqu6, uintEYNGc7, uintT2mxRn, uintjaOh7E, {from: accounts[2]});
//		await FairStockEquityqEOYEe4.onlyDataSource.call({from: accounts[2]});
//		await FairStockEquityqEOYEe4.withdrawBonus.call({from: accounts[1]});
//		const addressRXYgUJX = await FairStockEquityqEOYEe4.business.call(addressJfdlee4, uintohyBWZl, uintKa7Pge7, uintidfVmCH, uintOpCMLNr, {from: accounts[1]});
//		const addressLemV7Sk = await FairStockEquityqEOYEe4.depositLPT.call(addressXImjOkc, uintzUlbTUf, {from: accounts[0]});
//		const addressRBPsII = await FairStockEquityqEOYEe4.depositLPT.call(addressu2V9RF4, uintURPU203, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityqEOYEe4.checkStart.call({from: accounts[0]});
//		const addressBoIlSh5 = await FairStockEquityqEOYEe4.setDataSource.call(addressjYF8J2I, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityqEOYEe4.depositLPT.call(addressqZv1qPk, uintoF8e0p2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressscODKs = accounts[3]
		const addressFZNJ0MO = accounts[3]
		const addressIntPucZ = accounts[4]
		const addressaunJj4W = accounts[4]
		const uintiQNwbJw = BigInt("308")
		const FairStockEquityxUFtlhN = await FairStockEquity.new(addressscODKs, addressFZNJ0MO, addressIntPucZ, addressaunJj4W, uintiQNwbJw, {from: accounts[3]});
		const uintQjU8lh6 = BigInt("161")
		const addressJztvYA6 = accounts[1]
		const uintYCrX6y = BigInt("1361")
		const uintMk5H7LC = BigInt("704")
		const uintYj59DKZ = BigInt("1006")
		const uintFhkGMpW = BigInt("329")
		const uintFv2Zn2h = BigInt("101")
		const uintsRglsto = BigInt("1094")
		const addressxzaTQDn = accounts[2]
		const uintMwpgky = BigInt("921")
		const addressU1dDvgL = accounts[0]
		const uintpuE5gcZ = BigInt("685")
		const uintmeVNi2E = BigInt("119")
		const uintoFHC9uX = BigInt("62")
		const uintQDvam5L = BigInt("582")
		const addressL9wl5AZ = accounts[4]
//		const addressQvhcxN8 = await FairStockEquityxUFtlhN.withdrawLPT.call(addressJztvYA6, uintQjU8lh6, {from: accounts[4]});
//		const uint256LGcuFnu = await FairStockEquityxUFtlhN.setProfitPercentMT.call(uintYCrX6y, {from: accounts[0]});
//		const uint256W6XFcWQ = await FairStockEquityxUFtlhN.invest.call(uintMk5H7LC, {from: accounts[4]});
//		const addressztVPq5C = await FairStockEquityxUFtlhN.business.call(addressxzaTQDn, uintsRglsto, uintFv2Zn2h, uintFhkGMpW, uintYj59DKZ, {from: "0x0000000000000000000000000000000000000001"});
//		const addresssTzg5CI = await FairStockEquityxUFtlhN.withdrawLPT.call(addressU1dDvgL, uintMwpgky, {from: accounts[2]});
//		const addressM85ZzV3 = await FairStockEquityxUFtlhN.business.call(addressL9wl5AZ, uintQDvam5L, uintoFHC9uX, uintmeVNi2E, uintpuE5gcZ, {from: accounts[0]});

		await expect(FairStockEquityxUFtlhN.withdrawLPT.call(addressJztvYA6, uintQjU8lh6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHyMjIVW = "0x0000000000000000000000000000000000000001"
		const addressFLpCVoG = accounts[1]
		const addresswuQXTSg = accounts[5]
		const addressk3nOphu = accounts[3]
		const uintLh7S7QF = BigInt("726")
		const FairStockEquityeEMuk8C = await FairStockEquity.new(addressHyMjIVW, addressFLpCVoG, addresswuQXTSg, addressk3nOphu, uintLh7S7QF, {from: accounts[2]});
		const uintP581LfZ = BigInt("387")
		const uintI5T9RQ2 = BigInt("1212")
		const uintZUoOVPW = BigInt("1412")
		const uintbYDDnHR = BigInt("109")
		const uintygkKq6U = BigInt("1510")
		const uintcRnFJp5 = BigInt("1936")
		const uintuxFTZdu = BigInt("1354")
		const uintk98WO8f = BigInt("837")
		const uintZFxiQ6D = BigInt("465")
		const uintcbKDArh = BigInt("1268")
		const boolRHoEi5d = false
		const addressW87xwhG = accounts[3]
		const uintcv5arI = BigInt("818")
//		await FairStockEquityeEMuk8C.withdrawMT.call({from: accounts[0]});
//		const uint256V7W1i1k = await FairStockEquityeEMuk8C.setProfitPercentMT.call(uintP581LfZ, {from: accounts[2]});
//		const uint256CV71cHE = await FairStockEquityeEMuk8C.setProfitPercentMT.call(uintI5T9RQ2, {from: accounts[1]});
//		const uint256Ex5oey = await FairStockEquityeEMuk8C.getCostAmount.call(uintZUoOVPW, {from: accounts[2]});
//		const uint256jYqvAdT = await FairStockEquityeEMuk8C.reduceShare.call(uintbYDDnHR, {from: accounts[2]});
//		const uint256FiH9GHf = await FairStockEquityeEMuk8C.setDegree.call(uintZFxiQ6D, uintk98WO8f, uintuxFTZdu, uintcRnFJp5, uintygkKq6U, {from: accounts[0]});
//		await FairStockEquityeEMuk8C.withdrawMT.call({from: accounts[3]});
//		await FairStockEquityeEMuk8C.withdrawBonus.call({from: accounts[5]});
//		const uint256yLI7eJM = await FairStockEquityeEMuk8C.setProfitPercentBonus.call(uintcbKDArh, {from: accounts[3]});
//		const addressA4uoG0G = await FairStockEquityeEMuk8C.setLPT.call(addressW87xwhG, boolRHoEi5d, {from: accounts[0]});
//		const uint256hE21drE = await FairStockEquityeEMuk8C.invest.call(uintcv5arI, {from: accounts[2]});

		await expect(FairStockEquityeEMuk8C.withdrawMT.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressaXblHWB = accounts[3]
		const addressmeYKDhG = accounts[1]
		const addressIDQEXoy = accounts[1]
		const addressXtxyEIK = accounts[2]
		const uintuxNpmLr = BigInt("1683")
		const FairStockEquityqEOYEe4 = await FairStockEquity.new(addressaXblHWB, addressmeYKDhG, addressIDQEXoy, addressXtxyEIK, uintuxNpmLr, {from: accounts[4]});
		const boolQ7reJhz = true
		const addressV5gX0PP = accounts[4]
		const uintEO4S8Ej = BigInt("1347")
		const uintTO4vhLM = BigInt("314")
		const uintWklQXsn = BigInt("261")
		const uintUr8dgJ = BigInt("1007")
		const addresss2Nqc28 = accounts[0]
		const addressbey0IsK = await FairStockEquityqEOYEe4.setLPT.call(addressV5gX0PP, boolQ7reJhz, {from: accounts[4]});
//		const addressCL2NUla = await FairStockEquityqEOYEe4.business.call(addresss2Nqc28, uintUr8dgJ, uintWklQXsn, uintTO4vhLM, uintEO4S8Ej, {from: accounts[2]});
//		await FairStockEquityqEOYEe4.checkStart.call({from: accounts[0]});

		await expect(FairStockEquityqEOYEe4.business.call(addresss2Nqc28, uintUr8dgJ, uintWklQXsn, uintTO4vhLM, uintEO4S8Ej, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbl6ihq0 = "0x0000000000000000000000000000000000000001"
		const addressxbgX6z = accounts[1]
		const addressJGIa2Zm = accounts[5]
		const addressH4pEWOM = accounts[3]
		const uintepu8dKd = BigInt("726")
		const FairStockEquityeEMuk8C = await FairStockEquity.new(addressbl6ihq0, addressxbgX6z, addressJGIa2Zm, addressH4pEWOM, uintepu8dKd, {from: accounts[2]});
		const uintV04zRdm = BigInt("1944")
		const uintXyyPC4O = BigInt("316")
		const addressx3JiMyn = accounts[2]
		const uintiRKjJBT = BigInt("1144")
//		const addressV4i2Z5O = await FairStockEquityeEMuk8C.withdrawBonusCallback.call(addressx3JiMyn, uintXyyPC4O, uintV04zRdm, {from: accounts[3]});
//		const uint256hE21drE = await FairStockEquityeEMuk8C.invest.call(uintiRKjJBT, {from: accounts[2]});

		await expect(FairStockEquityeEMuk8C.withdrawBonusCallback.call(addressx3JiMyn, uintXyyPC4O, uintV04zRdm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYQF2wPw = "0x0000000000000000000000000000000000000001"
		const addressLBrROxZ = "0x0000000000000000000000000000000000000001"
		const address8kum7o = accounts[3]
		const addressch0FGyF = accounts[3]
		const uintUbkQrW = BigInt("2035")
		const FairStockEquitySk9PL8V = await FairStockEquity.new(addressYQF2wPw, addressLBrROxZ, address8kum7o, addressch0FGyF, uintUbkQrW, {from: accounts[3]});
		const uintIL7MMHC = BigInt("1886")
		const uintLuY0jav = BigInt("537")
		const uintEcyYYXg = BigInt("155")
		const addressnwtrXEW = accounts[2]
		const uintsaNB0P9 = BigInt("872")
		const uintxuI9ZUD = BigInt("63")
		const addressIO2Q5ps = accounts[0]
		const uintaOzELcF = BigInt("671")
		const uintGAh9T1d = BigInt("1178")
		const uintQRksGBZ = BigInt("977")
		const uintGewXAIs = BigInt("614")
		const addressOyla6hx = accounts[3]
//		await FairStockEquitySk9PL8V.withdrawPJ.call({from: accounts[3]});
//		const uint256MVlIozM = await FairStockEquitySk9PL8V.setProfitPercentPJ.call(uintIL7MMHC, {from: accounts[3]});
//		const addressjV65S0Z = await FairStockEquitySk9PL8V.withdrawMTCallback.call(addressnwtrXEW, uintEcyYYXg, uintLuY0jav, {from: "0x0000000000000000000000000000000000000001"});
//		const addressQGHE08 = await FairStockEquitySk9PL8V.withdrawBonusCallback.call(addressIO2Q5ps, uintxuI9ZUD, uintsaNB0P9, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYBqQly9 = await FairStockEquitySk9PL8V.business.call(addressOyla6hx, uintGewXAIs, uintQRksGBZ, uintGAh9T1d, uintaOzELcF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitySk9PL8V.withdrawPJ.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressea7Q6oc = accounts[1]
		const addressuweG56T = accounts[0]
		const addresssNx2m4 = accounts[3]
		const addressOyNQLZa = accounts[3]
		const uintYu2UGM = BigInt("984")
		const FairStockEquityZeuoGC9 = await FairStockEquity.new(addressea7Q6oc, addressuweG56T, addresssNx2m4, addressOyNQLZa, uintYu2UGM, {from: accounts[3]});
		const uintJLcFGi = BigInt("693")
		const uintBtWPYlV = BigInt("1985")
		const addresseAgKHIh = accounts[2]
		const uint1twIFJ = BigInt("214")
		const uintOZkHRd6 = BigInt("380")
		const uintyEthH8Y = BigInt("1313")
		const uintpiGh2JT = BigInt("1923")
		const uint3Yifpa = BigInt("1117")
		const uint69TrlX = BigInt("1280")
		const uinttp1rrSG = BigInt("162")
		const address0DAO2f = await FairStockEquityZeuoGC9.setModule.call(addresseAgKHIh, uintBtWPYlV, uintJLcFGi, {from: accounts[3]});
//		await FairStockEquityZeuoGC9.withdrawBonus.call({from: accounts[3]});
//		const uint256PTzfrG1 = await FairStockEquityZeuoGC9.reduceShare.call(uint1twIFJ, {from: accounts[0]});
//		const uint256fwlu27 = await FairStockEquityZeuoGC9.setDegree.call(uint69TrlX, uint3Yifpa, uintpiGh2JT, uintyEthH8Y, uintOZkHRd6, {from: accounts[1]});
//		const uint256NaVBfi = await FairStockEquityZeuoGC9.setProfitPercentMT.call(uinttp1rrSG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityZeuoGC9.withdrawBonus.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbg78aZe = accounts[3]
		const addressrHdKkaH = accounts[1]
		const addressxbo0Fmx = accounts[1]
		const addresszWfEuC = accounts[2]
		const uinttONLe05 = BigInt("1683")
		const FairStockEquityqEOYEe4 = await FairStockEquity.new(addressbg78aZe, addressrHdKkaH, addressxbo0Fmx, addresszWfEuC, uinttONLe05, {from: accounts[4]});
		const uintLykA1Hj = BigInt("1347")
		const uintyogrs6m = BigInt("303")
		const uintFiMes0B = BigInt("262")
		const uintX9mY1eH = BigInt("944")
		const addressWIai5Xo = "0x0000000000000000000000000000000000000001"
		const uintX1r3kec = BigInt("1275")
//		await FairStockEquityqEOYEe4.f.call({from: accounts[0]});
//		const addressCL2NUla = await FairStockEquityqEOYEe4.business.call(addressWIai5Xo, uintX9mY1eH, uintFiMes0B, uintyogrs6m, uintLykA1Hj, {from: accounts[2]});
//		const uint256iBDVNi8 = await FairStockEquityqEOYEe4.setProfitPercentMT.call(uintX1r3kec, {from: accounts[1]});

		await expect(FairStockEquityqEOYEe4.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZp5uym7 = accounts[3]
		const addresskItN2v2 = accounts[1]
		const address5dXeNa = accounts[1]
		const addressDyNPbHV = accounts[2]
		const uintt5yhhvp = BigInt("1683")
		const FairStockEquityqEOYEe4 = await FairStockEquity.new(addressZp5uym7, addresskItN2v2, address5dXeNa, addressDyNPbHV, uintt5yhhvp, {from: accounts[4]});
		const uinteHXdPy = BigInt("1703")
		const uinthb6Y7W = BigInt("639")
		const uintNBHL09d = BigInt("1347")
		const uintt4kQzWt = BigInt("283")
		const uintpU75yBN = BigInt("262")
		const uintV6PQ159 = BigInt("930")
		const addressizlgOqh = accounts[1]
		const uintHQNUChV = BigInt("1816")
		const uintMz5yK3k = BigInt("1346")
		const addressF6qBWtJ = accounts[2]
		const uint256paPiImF = await FairStockEquityqEOYEe4.setStartTime.call(uinteHXdPy, {from: accounts[4]});
//		const uint256Irl2Da6 = await FairStockEquityqEOYEe4.setProfitPercentBonus.call(uinthb6Y7W, {from: accounts[5]});
//		const addressCL2NUla = await FairStockEquityqEOYEe4.business.call(addressizlgOqh, uintV6PQ159, uintpU75yBN, uintt4kQzWt, uintNBHL09d, {from: accounts[2]});
//		const addressWFjylah = await FairStockEquityqEOYEe4.setModule.call(addressF6qBWtJ, uintMz5yK3k, uintHQNUChV, {from: accounts[3]});

		await expect(FairStockEquityqEOYEe4.setProfitPercentBonus.call(uinthb6Y7W, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscWA7j8i = accounts[3]
		const addressGUApjV = accounts[1]
		const addressQzMfAN3 = accounts[1]
		const addressezY9HMp = accounts[2]
		const uintXLNjqVw = BigInt("1683")
		const FairStockEquityqEOYEe4 = await FairStockEquity.new(addresscWA7j8i, addressGUApjV, addressQzMfAN3, addressezY9HMp, uintXLNjqVw, {from: accounts[4]});
		const uintGu4PHFo = BigInt("1347")
		const uintJxGgnK4 = BigInt("284")
		const uint9NbjsW = BigInt("262")
		const uintgZnDzG = BigInt("930")
		const addressj6RDLXN = "0x00000000000000000000000000000000000000-1"
		const uinttO8Gx8q = BigInt("1198")
		const uintwhMcisI = BigInt("1122")
		const addressVWWF4ST = accounts[0]
		const uintNrVtgUk = BigInt("393")
		const uint43azc2 = BigInt("113")
		const addressiFQxSaN = accounts[1]
//		const addressCL2NUla = await FairStockEquityqEOYEe4.business.call(addressj6RDLXN, uintgZnDzG, uint9NbjsW, uintJxGgnK4, uintGu4PHFo, {from: accounts[2]});
//		const addressqAnrHm0 = await FairStockEquityqEOYEe4.withdrawMTCallback.call(addressVWWF4ST, uintwhMcisI, uinttO8Gx8q, {from: accounts[0]});
//		const addressUU0j00Y = await FairStockEquityqEOYEe4.withdrawBonusCallback.call(addressiFQxSaN, uint43azc2, uintNrVtgUk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityqEOYEe4.business.call(addressj6RDLXN, uintgZnDzG, uint9NbjsW, uintJxGgnK4, uintGu4PHFo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxbLn49G = accounts[3]
		const addressPPg4Tsi = accounts[0]
		const addressOOEi2Ro = accounts[2]
		const addresseR8Vw4N = accounts[2]
		const uintusyvL1h = BigInt("1049")
		const FairStockEquityavS7ll4 = await FairStockEquity.new(addressxbLn49G, addressPPg4Tsi, addressOOEi2Ro, addresseR8Vw4N, uintusyvL1h, {from: accounts[2]});
		const uintXzd3ryw = BigInt("660")
		const uint4QMWOK = BigInt("1379")
		const addresseVnHN86 = accounts[3]
		const uintwvLQcln = BigInt("1500")
		const uintm7HfzwQ = BigInt("1791")
		const uintuNdt6M0 = BigInt("1000")
		const uintPa3vKY5 = BigInt("466")
		const uintrN23kw4 = BigInt("92")
		const uintl9N4mCX = BigInt("415")
		const uintwHCtnSY = BigInt("1996")
		const addressGM8Bq02 = accounts[1]
//		const uint256WRA3BwX = await FairStockEquityavS7ll4.setStartTime.call(uintXzd3ryw, {from: accounts[2]});
//		const addressMWRCPKD = await FairStockEquityavS7ll4.depositLPT.call(addresseVnHN86, uint4QMWOK, {from: accounts[3]});
//		const uint256uPaJ4Rj = await FairStockEquityavS7ll4.reduceShare.call(uintwvLQcln, {from: accounts[4]});
//		const uint256LJxlHfR = await FairStockEquityavS7ll4.depositBonus.call(uintm7HfzwQ, {from: accounts[1]});
//		const uint256vA1D3v = await FairStockEquityavS7ll4.setStartTime.call(uintuNdt6M0, {from: accounts[2]});
//		const addresshhEsuB = await FairStockEquityavS7ll4.business.call(addressGM8Bq02, uintwHCtnSY, uintl9N4mCX, uintrN23kw4, uintPa3vKY5, {from: accounts[4]});

		await expect(FairStockEquityavS7ll4.setStartTime.call(uintXzd3ryw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspeAFFgV = accounts[1]
		const addressRrkIRb = accounts[3]
		const addressKzZZLdT = accounts[3]
		const addressJ2t4EeO = accounts[5]
		const uintOf3cXA = BigInt("1659")
		const FairStockEquityYY5qKQR = await FairStockEquity.new(addresspeAFFgV, addressRrkIRb, addressKzZZLdT, addressJ2t4EeO, uintOf3cXA, {from: "0x0000000000000000000000000000000000000001"});
		const uintAL3rW8 = BigInt("1007")
		const boolx9kBjdi = false
		const addressxr2d706 = accounts[1]
		const uintGoi3Wk0 = BigInt("828")
		const uintRvJcM6 = BigInt("1771")
		const uinthswWasa = BigInt("171")
		const uintnc66p9D = BigInt("811")
		const uintquz7Ghi = BigInt("515")
		const uintdRPVFrV = BigInt("1296")
		const uint256ocYM9e = await FairStockEquityYY5qKQR.getCostAmount.call(uintAL3rW8, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityYY5qKQR.withdrawMT.call({from: accounts[0]});
		const addressOUmco6O = await FairStockEquityYY5qKQR.setLPT.call(addressxr2d706, boolx9kBjdi, {from: accounts[2]});
		const uint256lhlbHq = await FairStockEquityYY5qKQR.setGasFeeForCallback.call(uintGoi3Wk0, {from: accounts[4]});
		const uint256GMmazn8 = await FairStockEquityYY5qKQR.setDegree.call(uintdRPVFrV, uintquz7Ghi, uintnc66p9D, uinthswWasa, uintRvJcM6, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressqvt4xEz = accounts[3]
		const addressv9thgCi = accounts[1]
		const addressTIpE1pp = accounts[1]
		const addressN7PficW = accounts[2]
		const uinthw2T1Iy = BigInt("1683")
		const FairStockEquityqEOYEe4 = await FairStockEquity.new(addressqvt4xEz, addressv9thgCi, addressTIpE1pp, addressN7PficW, uinthw2T1Iy, {from: accounts[4]});
		const uintVsGnhu0 = BigInt("0")
		const uintPJJn4wW = BigInt("1195")
		const uintqKIDOA = BigInt("1347")
		const uintincmWvY = BigInt("314")
		const uintQS3mKbV = BigInt("261")
		const uinteF3uCFI = BigInt("904")
		const address65di1l = accounts[2]
		const uintgu4nORG = BigInt("1116")
		const uint6xXSdp = BigInt("498")
		const addressVph1RL0 = accounts[3]
		const uintU5YadHa = BigInt("1403")
//		const uint256HkxOKhM = await FairStockEquityqEOYEe4.reduceShare.call(uintVsGnhu0, {from: accounts[3]});
//		await FairStockEquityqEOYEe4.withdrawBonus.call({from: accounts[2]});
//		const uint256yZRFmu2 = await FairStockEquityqEOYEe4.getCostAmount.call(uintPJJn4wW, {from: accounts[3]});
//		const addressCL2NUla = await FairStockEquityqEOYEe4.business.call(address65di1l, uinteF3uCFI, uintQS3mKbV, uintincmWvY, uintqKIDOA, {from: accounts[2]});
//		const addresseggMi5 = await FairStockEquityqEOYEe4.withdrawBonusCallback.call(addressVph1RL0, uint6xXSdp, uintgu4nORG, {from: accounts[0]});
//		const uint256HqEvcig = await FairStockEquityqEOYEe4.setProfitPercentMT.call(uintU5YadHa, {from: accounts[2]});
//		await FairStockEquityqEOYEe4.checkStart.call({from: accounts[0]});

		await expect(FairStockEquityqEOYEe4.reduceShare.call(uintVsGnhu0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJ2N5aVz = accounts[1]
		const addressAeVnTCT = accounts[2]
		const addressLqgWSSP = accounts[5]
		const addressoxRHZKa = accounts[4]
		const uintKMSzuhd = BigInt("1282")
		const FairStockEquitynJHFtz7 = await FairStockEquity.new(addressJ2N5aVz, addressAeVnTCT, addressLqgWSSP, addressoxRHZKa, uintKMSzuhd, {from: accounts[1]});
		const uintgkxr2WG = BigInt("1851")
		const uintKCXZ9Ej = BigInt("1256")
		const addressoFBQejI = accounts[2]
		const uintIuSPS5v = BigInt("1464")
		const uintjNNrRaB = BigInt("1862")
		const addresshPHgYWQ = accounts[1]
//		const addressHykpM4D = await FairStockEquitynJHFtz7.withdrawMTCallback.call(addressoFBQejI, uintKCXZ9Ej, uintgkxr2WG, {from: accounts[4]});
//		const addressuHhyXPw = await FairStockEquitynJHFtz7.setModule.call(addresshPHgYWQ, uintjNNrRaB, uintIuSPS5v, {from: accounts[4]});

		await expect(FairStockEquitynJHFtz7.withdrawMTCallback.call(addressoFBQejI, uintKCXZ9Ej, uintgkxr2WG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})