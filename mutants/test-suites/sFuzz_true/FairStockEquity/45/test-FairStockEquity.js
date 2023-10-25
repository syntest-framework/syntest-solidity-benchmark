const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressARqrxqE = accounts[4]
		const addressKkDVI9v = accounts[5]
		const addressjSbjZu = "0x0000000000000000000000000000000000000001"
		const addressmvsfjvi = accounts[2]
		const uintB1UIzGy = BigInt("1217")
		const FairStockEquitycxLCJ1V = await FairStockEquity.new(addressARqrxqE, addressKkDVI9v, addressjSbjZu, addressmvsfjvi, uintB1UIzGy, {from: accounts[4]});
		const uintlyNSrAH = BigInt("80")
		const addressUbScZka = accounts[2]
//		const uint256gcEerhK = await FairStockEquitycxLCJ1V.setProfitPercentPJ.call(uintlyNSrAH, {from: accounts[5]});
//		const addresstwgLKUl = await FairStockEquitycxLCJ1V.setDataSource.call(addressUbScZka, {from: accounts[1]});

		await expect(FairStockEquitycxLCJ1V.setProfitPercentPJ.call(uintlyNSrAH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjW1N7Fu = accounts[0]
		const addressxROGtcK = accounts[4]
		const addressQW3pxkq = accounts[1]
		const addressvI0G7QS = accounts[5]
		const uintH6kvXyT = BigInt("1076")
		const FairStockEquityRxTPmsS = await FairStockEquity.new(addressjW1N7Fu, addressxROGtcK, addressQW3pxkq, addressvI0G7QS, uintH6kvXyT, {from: accounts[3]});
		const boolEnql0lR = false
		const addressp8HFSft = accounts[0]
		const uintNjV7aPn = BigInt("282")
		const uintGmSnUsU = BigInt("819")
		const addressF5SQSd0 = accounts[3]
		const uintBgGvhjl = BigInt("1164")
		const uintTTf41GR = BigInt("1825")
		const uintUYbzAEI = BigInt("1632")
		const uintSBsKlF9 = BigInt("1243")
		const uintymnZmPX = BigInt("1065")
		const uintLPdAqja = BigInt("548")
		const addresskjVlq7s = accounts[4]
		const addressCcgB4Im = await FairStockEquityRxTPmsS.setLPT.call(addressp8HFSft, boolEnql0lR, {from: accounts[3]});
//		const addressx42ebB = await FairStockEquityRxTPmsS.setModule.call(addressF5SQSd0, uintGmSnUsU, uintNjV7aPn, {from: accounts[4]});
//		const uint256qYmvieY = await FairStockEquityRxTPmsS.setDegree.call(uintymnZmPX, uintSBsKlF9, uintUYbzAEI, uintTTf41GR, uintBgGvhjl, {from: accounts[1]});
//		const uint256LHXsAdo = await FairStockEquityRxTPmsS.setProfitPercentPJ.call(uintLPdAqja, {from: "0x0000000000000000000000000000000000000001"});
//		const addressHp5TZhm = await FairStockEquityRxTPmsS.setDataSource.call(addresskjVlq7s, {from: accounts[3]});

		await expect(FairStockEquityRxTPmsS.setModule.call(addressF5SQSd0, uintGmSnUsU, uintNjV7aPn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAn1r2O = "0x0000000000000000000000000000000000000001"
		const addresseOhxelI = accounts[4]
		const addressUeQPMAs = accounts[2]
		const addresstbaSnl2 = accounts[0]
		const uintbuYXiD0 = BigInt("1015")
		const FairStockEquityDbsPhdj = await FairStockEquity.new(addressAn1r2O, addresseOhxelI, addressUeQPMAs, addresstbaSnl2, uintbuYXiD0, {from: accounts[3]});
		const uinth8wxjXk = BigInt("1232")
		const addressTlmKeH7 = accounts[1]
		const uintZFJ3xcj = BigInt("1908")
		const uintMechBmb = BigInt("26")
		const uintqHakDDm = BigInt("259")
		const uintI5o2DuT = BigInt("346")
		const uintHsY8hP0 = BigInt("1490")
		const uintrjmMBQJ = BigInt("1605")
		const uintaBKP9sa = BigInt("460")
		const uint256NKbrHJd = await FairStockEquityDbsPhdj.getCostAmount.call(uinth8wxjXk, {from: accounts[1]});
		const address2oCWsW = await FairStockEquityDbsPhdj.setDataSource.call(addressTlmKeH7, {from: accounts[3]});
//		const uint256VLd2rB8 = await FairStockEquityDbsPhdj.setGasFeeForCallback.call(uintZFJ3xcj, {from: accounts[2]});
//		const uint256egjWmp = await FairStockEquityDbsPhdj.setDegree.call(uintrjmMBQJ, uintHsY8hP0, uintI5o2DuT, uintqHakDDm, uintMechBmb, {from: accounts[0]});
//		const uint256dgccDGD = await FairStockEquityDbsPhdj.getCostAmount.call(uintaBKP9sa, {from: accounts[1]});

		await expect(FairStockEquityDbsPhdj.setGasFeeForCallback.call(uintZFJ3xcj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEvEOxat = accounts[5]
		const addresse3xwHcb = accounts[3]
		const addressXNsLkXp = "0x0000000000000000000000000000000000000001"
		const addressKXNFWF = accounts[0]
		const uintcQ2taIM = BigInt("1078")
		const FairStockEquityEgzssY = await FairStockEquity.new(addressEvEOxat, addresse3xwHcb, addressXNsLkXp, addressKXNFWF, uintcQ2taIM, {from: accounts[2]});
		const uintKZURDA0 = BigInt("1225")
		const uint0jNoiv = BigInt("1649")
		const addressZxrTMP9 = accounts[5]
		const uinti747wJX = BigInt("765")
		const uintVliaAW6 = BigInt("1203")
		const addressSnI1JcU = accounts[3]
		const uinto52KzGt = BigInt("769")
		const uintezt4vj7 = BigInt("1643")
		const addressiceyO06 = accounts[0]
//		const uint256ihsaY5 = await FairStockEquityEgzssY.invest.call(uintKZURDA0, {from: accounts[3]});
//		const addressqNDJA0 = await FairStockEquityEgzssY.depositLPT.call(addressZxrTMP9, uint0jNoiv, {from: accounts[0]});
//		const addressgadPTm = await FairStockEquityEgzssY.withdrawBonusCallback.call(addressSnI1JcU, uintVliaAW6, uinti747wJX, {from: accounts[2]});
//		await FairStockEquityEgzssY.f.call({from: accounts[3]});
//		const addressNB3P7lX = await FairStockEquityEgzssY.withdrawMTCallback.call(addressiceyO06, uintezt4vj7, uinto52KzGt, {from: accounts[5]});

		await expect(FairStockEquityEgzssY.invest.call(uintKZURDA0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressejZ845a = accounts[3]
		const addressTpGG2VO = "0x0000000000000000000000000000000000000001"
		const addressHtOIi9A = accounts[0]
		const addressYRkwTQl = accounts[3]
		const uintiqR4qvE = BigInt("708")
		const FairStockEquityBKtjS3Q = await FairStockEquity.new(addressejZ845a, addressTpGG2VO, addressHtOIi9A, addressYRkwTQl, uintiqR4qvE, {from: "0x0000000000000000000000000000000000000001"});
		const uinthHRHn2I = BigInt("1993")
		const uintwpRYUPX = BigInt("26")
		const uintYgSa9Ld = BigInt("1515")
		const uint256ufsoMix = await FairStockEquityBKtjS3Q.setProfitPercentPJ.call(uinthHRHn2I, {from: accounts[4]});
		const uint256udq3V0M = await FairStockEquityBKtjS3Q.getCostAmount.call(uintwpRYUPX, {from: accounts[1]});
		const uint256DruvzdV = await FairStockEquityBKtjS3Q.setGasFeeForCallback.call(uintYgSa9Ld, {from: accounts[1]});
	});

	it('test for FairStockEquity', async () => {
		const addresskjLPSVn = "0x0000000000000000000000000000000000000001"
		const addressLaEfx2 = accounts[4]
		const addressxvJBYH5 = accounts[0]
		const addressSWG1j8 = accounts[4]
		const uintpBIjIsa = BigInt("1816")
		const FairStockEquityCRGVoK0 = await FairStockEquity.new(addresskjLPSVn, addressLaEfx2, addressxvJBYH5, addressSWG1j8, uintpBIjIsa, {from: accounts[2]});
		const uintcw0Y9U3 = BigInt("1497")
		const uintIvU694S = BigInt("1956")
		const uintYJyC5RB = BigInt("147")
		const addressRvnXeay = accounts[2]
		const uintpHcElZ5 = BigInt("307")
		const uintuvZBSU = BigInt("784")
		const uintyyUAiQp = BigInt("1991")
//		const uint256qcEpI9K = await FairStockEquityCRGVoK0.depositBonus.call(uintcw0Y9U3, {from: accounts[1]});
//		const addressRx9xd2V = await FairStockEquityCRGVoK0.withdrawMTCallback.call(addressRvnXeay, uintYJyC5RB, uintIvU694S, {from: accounts[1]});
//		const uint256hZWisKa = await FairStockEquityCRGVoK0.setProfitPercentBonus.call(uintpHcElZ5, {from: accounts[4]});
//		const uint256pJxWd79 = await FairStockEquityCRGVoK0.reduceShare.call(uintuvZBSU, {from: accounts[3]});
//		const uint256LkGicQt = await FairStockEquityCRGVoK0.setGasFeeForCallback.call(uintyyUAiQp, {from: accounts[0]});

		await expect(FairStockEquityCRGVoK0.depositBonus.call(uintcw0Y9U3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAjC8IZ3 = accounts[4]
		const addressHIEnh93 = accounts[4]
		const addressb0VnR8q = accounts[4]
		const addressBBKNniW = accounts[1]
		const uintB7Qa9UK = BigInt("1751")
		const FairStockEquitycCmIr81 = await FairStockEquity.new(addressAjC8IZ3, addressHIEnh93, addressb0VnR8q, addressBBKNniW, uintB7Qa9UK, {from: accounts[4]});
//		await FairStockEquitycCmIr81.withdrawBonus.call({from: accounts[2]});
//		await FairStockEquitycCmIr81.checkStart.call({from: accounts[4]});

		await expect(FairStockEquitycCmIr81.withdrawBonus.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspYerV8D = "0x0000000000000000000000000000000000000001"
		const addressWGIDWfi = accounts[4]
		const addresssD93wcE = accounts[2]
		const addresslmhFEV = accounts[0]
		const uintYKmnEvF = BigInt("1015")
		const FairStockEquityDbsPhdj = await FairStockEquity.new(addresspYerV8D, addressWGIDWfi, addresssD93wcE, addresslmhFEV, uintYKmnEvF, {from: accounts[3]});
		const uintLFw2zdE = BigInt("1232")
		const addresstJBgKAm = accounts[1]
		const uintFrH2xS5 = BigInt("1908")
		const uintWJLzvLY = BigInt("26")
		const uintRjNzOiz = BigInt("220")
		const uintmH616Om = BigInt("346")
		const uintkDGwpiM = BigInt("1490")
		const uint3hyAYB = BigInt("1605")
		const uintn4YEG73 = BigInt("460")
//		await FairStockEquityDbsPhdj.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256NKbrHJd = await FairStockEquityDbsPhdj.getCostAmount.call(uintLFw2zdE, {from: accounts[1]});
//		const address2oCWsW = await FairStockEquityDbsPhdj.setDataSource.call(addresstJBgKAm, {from: accounts[3]});
//		const uint256VLd2rB8 = await FairStockEquityDbsPhdj.setGasFeeForCallback.call(uintFrH2xS5, {from: accounts[2]});
//		const uint256egjWmp = await FairStockEquityDbsPhdj.setDegree.call(uint3hyAYB, uintkDGwpiM, uintmH616Om, uintRjNzOiz, uintWJLzvLY, {from: accounts[0]});
//		const uint256dgccDGD = await FairStockEquityDbsPhdj.getCostAmount.call(uintn4YEG73, {from: accounts[1]});

		await expect(FairStockEquityDbsPhdj.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxRwywZk = "0x0000000000000000000000000000000000000001"
		const addressF5C91V = accounts[4]
		const address9c8Tre = accounts[2]
		const addressl65dyzm = accounts[0]
		const uintus6CzY6 = BigInt("1015")
		const FairStockEquityDbsPhdj = await FairStockEquity.new(addressxRwywZk, addressF5C91V, address9c8Tre, addressl65dyzm, uintus6CzY6, {from: accounts[3]});
		const uintha6INFE = BigInt("1232")
		const addressdkOiPa = accounts[5]
		const uintkvFeRXH = BigInt("1062")
		const addressgtSTPsp = accounts[4]
		const uintoOSdSm5 = BigInt("1908")
		const uintCli7CW = BigInt("1366")
		const uintZfSo6Fy = BigInt("26")
		const uintRI9xXO6 = BigInt("259")
		const uintBTpaxfb = BigInt("346")
		const uintwaFZV7P = BigInt("1490")
		const uintxuXNnvR = BigInt("1605")
		const uinttgvQHzr = BigInt("460")
		const uint256NKbrHJd = await FairStockEquityDbsPhdj.getCostAmount.call(uintha6INFE, {from: accounts[1]});
		const address2oCWsW = await FairStockEquityDbsPhdj.setDataSource.call(addressdkOiPa, {from: accounts[3]});
//		const addressapLWbr = await FairStockEquityDbsPhdj.withdrawLPT.call(addressgtSTPsp, uintkvFeRXH, {from: accounts[4]});
//		const uint256VLd2rB8 = await FairStockEquityDbsPhdj.setGasFeeForCallback.call(uintoOSdSm5, {from: accounts[2]});
//		const uint256S5EQ0jS = await FairStockEquityDbsPhdj.setGasFeeForCallback.call(uintCli7CW, {from: accounts[2]});
//		const uint256egjWmp = await FairStockEquityDbsPhdj.setDegree.call(uintxuXNnvR, uintwaFZV7P, uintBTpaxfb, uintRI9xXO6, uintZfSo6Fy, {from: accounts[0]});
//		const uint256dgccDGD = await FairStockEquityDbsPhdj.getCostAmount.call(uinttgvQHzr, {from: accounts[1]});

		await expect(FairStockEquityDbsPhdj.withdrawLPT.call(addressgtSTPsp, uintkvFeRXH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDTYGwMH = accounts[1]
		const addressjn4A4l7 = accounts[3]
		const addressOCxz4bv = accounts[0]
		const addresscf9cqkY = accounts[1]
		const uintPPIofFi = BigInt("1731")
		const FairStockEquityKW6feYh = await FairStockEquity.new(addressDTYGwMH, addressjn4A4l7, addressOCxz4bv, addresscf9cqkY, uintPPIofFi, {from: accounts[0]});
		const uintEbU2HCP = BigInt("2032")
		const addressq3p9k0f = accounts[1]
		const uintgFFtZZE = BigInt("1717")
		const uintoJAkzTI = BigInt("1419")
		const uintpUwchua = BigInt("83")
		const uintXqG0lT = BigInt("1498")
		const addressWzuy9NA = accounts[2]
		const uintgHIwPwu = BigInt("410")
		const uintFpCwh8X = BigInt("1494")
		const uint2NnjF5 = BigInt("1091")
		const addressO5ThTYM = accounts[1]
//		const addressrOWqEMk = await FairStockEquityKW6feYh.depositLPT.call(addressq3p9k0f, uintEbU2HCP, {from: accounts[5]});
//		const addresstem20bz = await FairStockEquityKW6feYh.business.call(addressWzuy9NA, uintXqG0lT, uintpUwchua, uintoJAkzTI, uintgFFtZZE, {from: accounts[0]});
//		const uint256Vh9HgPi = await FairStockEquityKW6feYh.setStartTime.call(uintgHIwPwu, {from: accounts[3]});
//		const addressIZDnVMZ = await FairStockEquityKW6feYh.withdrawBonusCallback.call(addressO5ThTYM, uint2NnjF5, uintFpCwh8X, {from: accounts[4]});

		await expect(FairStockEquityKW6feYh.depositLPT.call(addressq3p9k0f, uintEbU2HCP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvxqWlWz = "0x0000000000000000000000000000000000000001"
		const addressEdO54Ts = accounts[4]
		const addressJaVyNXp = accounts[2]
		const addresss25apcE = accounts[0]
		const uintJ5tIq1P = BigInt("1015")
		const FairStockEquityDbsPhdj = await FairStockEquity.new(addressvxqWlWz, addressEdO54Ts, addressJaVyNXp, addresss25apcE, uintJ5tIq1P, {from: accounts[3]});
		const uintJcbqjAS = BigInt("162")
		const uintevchR83 = BigInt("981")
		const addresssV8jDEZ = accounts[4]
		const uintkQCFdWi = BigInt("1908")
		const uintUyQ9guR = BigInt("26")
		const uinteaRSRSY = BigInt("259")
		const uintPGQB7yX = BigInt("346")
		const uintTxDHOs6 = BigInt("1490")
		const uinttK1AxY = BigInt("1605")
		const uintvglTZaZ = BigInt("1251")
		const uintIz3rOOf = BigInt("1718")
		const addressES4Fvmf = accounts[4]
		const uint256NKbrHJd = await FairStockEquityDbsPhdj.getCostAmount.call(uintJcbqjAS, {from: accounts[1]});
//		const uint256LrcNXEW = await FairStockEquityDbsPhdj.reduceShare.call(uintevchR83, {from: accounts[2]});
//		const address2oCWsW = await FairStockEquityDbsPhdj.setDataSource.call(addresssV8jDEZ, {from: accounts[3]});
//		const uint256VLd2rB8 = await FairStockEquityDbsPhdj.setGasFeeForCallback.call(uintkQCFdWi, {from: accounts[2]});
//		const uint256egjWmp = await FairStockEquityDbsPhdj.setDegree.call(uinttK1AxY, uintTxDHOs6, uintPGQB7yX, uinteaRSRSY, uintUyQ9guR, {from: accounts[0]});
//		const addressqlr5wC = await FairStockEquityDbsPhdj.withdrawBonusCallback.call(addressES4Fvmf, uintIz3rOOf, uintvglTZaZ, {from: accounts[2]});

		await expect(FairStockEquityDbsPhdj.reduceShare.call(uintevchR83, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEO2nWpq = "0x0000000000000000000000000000000000000001"
		const addressAxitd61 = accounts[4]
		const addressFGZN787 = accounts[2]
		const addressQZWhDr = accounts[0]
		const uintmf73vD6 = BigInt("1015")
		const FairStockEquityDbsPhdj = await FairStockEquity.new(addressEO2nWpq, addressAxitd61, addressFGZN787, addressQZWhDr, uintmf73vD6, {from: accounts[3]});
		const uintaMv6FGd = BigInt("1232")
		const uintx65Yox = BigInt("1133")
		const uintThf5c3H = BigInt("20")
		const address164jHl = accounts[0]
		const uintpAAjKc = BigInt("1994")
		const uintU5Q1XDB = BigInt("102")
		const uintqaquo71 = BigInt("26")
		const uintRGoUn8W = BigInt("259")
		const uintwoUpyY9 = BigInt("346")
		const uintn2zUwiC = BigInt("1490")
		const uintoOWWuG8 = BigInt("1605")
		const uint256NKbrHJd = await FairStockEquityDbsPhdj.getCostAmount.call(uintaMv6FGd, {from: accounts[1]});
//		const addresshfrLSxl = await FairStockEquityDbsPhdj.withdrawMTCallback.call(address164jHl, uintThf5c3H, uintx65Yox, {from: accounts[3]});
//		const uint256G3wcY0E = await FairStockEquityDbsPhdj.setProfitPercentMT.call(uintpAAjKc, {from: accounts[0]});
//		const uint256VLd2rB8 = await FairStockEquityDbsPhdj.setGasFeeForCallback.call(uintU5Q1XDB, {from: accounts[2]});
//		const uint256egjWmp = await FairStockEquityDbsPhdj.setDegree.call(uintoOWWuG8, uintn2zUwiC, uintwoUpyY9, uintRGoUn8W, uintqaquo71, {from: accounts[0]});

		await expect(FairStockEquityDbsPhdj.withdrawMTCallback.call(address164jHl, uintThf5c3H, uintx65Yox, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAI13co = "0x0000000000000000000000000000000000000001"
		const addressP5764L9 = accounts[4]
		const addressTW4NmON = accounts[2]
		const addresszM2PWhA = accounts[0]
		const uint0XPija = BigInt("1015")
		const FairStockEquityDbsPhdj = await FairStockEquity.new(addressAI13co, addressP5764L9, addressTW4NmON, addresszM2PWhA, uint0XPija, {from: accounts[3]});
		const uintcGAtrOv = BigInt("861")
		const uintRA4eKM6 = BigInt("519")
		const uintuWwKnFf = BigInt("317")
		const uintcIaxmev = BigInt("1405")
		const uintX29bjf3 = BigInt("1478")
		const uintFdNRI4 = BigInt("1320")
		const uint256P3vBFJM = await FairStockEquityDbsPhdj.setDegree.call(uintX29bjf3, uintcIaxmev, uintuWwKnFf, uintRA4eKM6, uintcGAtrOv, {from: accounts[3]});
		const uint256NKbrHJd = await FairStockEquityDbsPhdj.getCostAmount.call(uintFdNRI4, {from: accounts[1]});
//		await FairStockEquityDbsPhdj.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquityDbsPhdj.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZctJ9X = accounts[4]
		const addressnwzFVxo = accounts[5]
		const addressr3wGH3R = "0x0000000000000000000000000000000000000001"
		const addressU1kmNAQ = accounts[2]
		const uintaleaAnF = BigInt("1217")
		const FairStockEquitycxLCJ1V = await FairStockEquity.new(addressZctJ9X, addressnwzFVxo, addressr3wGH3R, addressU1kmNAQ, uintaleaAnF, {from: accounts[4]});
		const uintlOpFS5 = BigInt("1438")
		const uintkGoESk = BigInt("1530")
		const uintOuqes46 = BigInt("1759")
		const uintMnrwYof = BigInt("1501")
		const addressm5jWilM = accounts[3]
		const uintR1m4d9A = BigInt("90")
//		const addressivcbTmO = await FairStockEquitycxLCJ1V.business.call(addressm5jWilM, uintMnrwYof, uintOuqes46, uintkGoESk, uintlOpFS5, {from: accounts[3]});
//		const uint256gcEerhK = await FairStockEquitycxLCJ1V.setProfitPercentPJ.call(uintR1m4d9A, {from: accounts[5]});

		await expect(FairStockEquitycxLCJ1V.business.call(addressm5jWilM, uintMnrwYof, uintOuqes46, uintkGoESk, uintlOpFS5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresseCEtnym = "0x0000000000000000000000000000000000000001"
		const addressxxir3f = accounts[4]
		const addresswTsXKzi = accounts[2]
		const addressCNfoYLC = accounts[0]
		const uintW0tBd1Q = BigInt("1015")
		const FairStockEquityDbsPhdj = await FairStockEquity.new(addresseCEtnym, addressxxir3f, addresswTsXKzi, addressCNfoYLC, uintW0tBd1Q, {from: accounts[3]});
		const uintrSFERYf = BigInt("1334")
		const uintYTpGR0 = BigInt("208")
		const uintjCkPOgd = BigInt("26")
		const uintd9dh2ZD = BigInt("259")
		const uintsE0sQPW = BigInt("346")
		const uintAI9ldtQ = BigInt("1490")
		const uintmHKp0rS = BigInt("1605")
//		await FairStockEquityDbsPhdj.f.call({from: accounts[4]});
//		const uint256NKbrHJd = await FairStockEquityDbsPhdj.getCostAmount.call(uintrSFERYf, {from: accounts[1]});
//		const uint256Xp3Oal8 = await FairStockEquityDbsPhdj.setStartTime.call(uintYTpGR0, {from: accounts[0]});
//		const uint256egjWmp = await FairStockEquityDbsPhdj.setDegree.call(uintmHKp0rS, uintAI9ldtQ, uintsE0sQPW, uintd9dh2ZD, uintjCkPOgd, {from: accounts[0]});

		await expect(FairStockEquityDbsPhdj.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstw8AF0s = accounts[4]
		const addressAeGWVQ6 = accounts[5]
		const addressK3cYzh1 = "0x0000000000000000000000000000000000000001"
		const addressvXxRkXQ = accounts[2]
		const uintjD3EoNk = BigInt("1217")
		const FairStockEquitycxLCJ1V = await FairStockEquity.new(addresstw8AF0s, addressAeGWVQ6, addressK3cYzh1, addressvXxRkXQ, uintjD3EoNk, {from: accounts[4]});
		const uintbFJIrHF = BigInt("1428")
//		await FairStockEquitycxLCJ1V.withdrawPJ.call({from: accounts[4]});
//		const uint256gcEerhK = await FairStockEquitycxLCJ1V.setProfitPercentPJ.call(uintbFJIrHF, {from: accounts[5]});

		await expect(FairStockEquitycxLCJ1V.withdrawPJ.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressN3bywMm = accounts[1]
		const addressqPwxSjD = accounts[3]
		const addressxPNWsDi = accounts[0]
		const addressZCb9qK1 = accounts[1]
		const uintVPvHURO = BigInt("1731")
		const FairStockEquityKW6feYh = await FairStockEquity.new(addressN3bywMm, addressqPwxSjD, addressxPNWsDi, addressZCb9qK1, uintVPvHURO, {from: accounts[0]});
		const uintydJZ3XT = BigInt("182")
		const uintFFmE1rt = BigInt("2032")
		const addressnFkBLV4 = accounts[2]
		const uintZ6yqbjV = BigInt("1050")
		const uinti8U1ZWX = BigInt("1589")
		const uintpMj5OC8 = BigInt("896")
		const addressfbvt6tX = accounts[0]
//		const uint256b9zEO3b = await FairStockEquityKW6feYh.setStartTime.call(uintydJZ3XT, {from: accounts[0]});
//		const addressrOWqEMk = await FairStockEquityKW6feYh.depositLPT.call(addressnFkBLV4, uintFFmE1rt, {from: accounts[5]});
//		const uint256y8LEytU = await FairStockEquityKW6feYh.bonus.call(uintZ6yqbjV, {from: accounts[3]});
//		const addressNFwPBT = await FairStockEquityKW6feYh.withdrawBonusCallback.call(addressfbvt6tX, uintpMj5OC8, uinti8U1ZWX, {from: accounts[1]});

		await expect(FairStockEquityKW6feYh.setStartTime.call(uintydJZ3XT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJwPljwl = accounts[4]
		const addressgMxGPz6 = accounts[5]
		const addressEDnLyk = "0x0000000000000000000000000000000000000001"
		const addressWIP0d7u = accounts[2]
		const uintb7wG5qW = BigInt("1217")
		const FairStockEquitycxLCJ1V = await FairStockEquity.new(addressJwPljwl, addressgMxGPz6, addressEDnLyk, addressWIP0d7u, uintb7wG5qW, {from: accounts[4]});
		const uintJcc4LU7 = BigInt("1825")
		const uintaOfkYjE = BigInt("140")
		const addressJrNPmAF = accounts[2]
		const uintsDDfKFw = BigInt("74")
		const addressrfSjLMD = await FairStockEquitycxLCJ1V.setModule.call(addressJrNPmAF, uintaOfkYjE, uintJcc4LU7, {from: accounts[4]});
//		const uint256gcEerhK = await FairStockEquitycxLCJ1V.setProfitPercentPJ.call(uintsDDfKFw, {from: accounts[5]});
//		await FairStockEquitycxLCJ1V.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquitycxLCJ1V.setProfitPercentPJ.call(uintsDDfKFw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJzh59hO = "0x0000000000000000000000000000000000000001"
		const addressMCR8Ve0 = accounts[4]
		const addressBNOvTo = accounts[2]
		const addressukKOVji = accounts[0]
		const uintyd2jDPV = BigInt("1015")
		const FairStockEquityDbsPhdj = await FairStockEquity.new(addressJzh59hO, addressMCR8Ve0, addressBNOvTo, addressukKOVji, uintyd2jDPV, {from: accounts[3]});
		const uintSgfLCty = BigInt("1320")
		const uintgrjpF8V = BigInt("206")
		const uintcH39OOT = BigInt("1010")
		const addresstv1LdLp = accounts[3]
		const uintiU8AGKB = BigInt("1113")
		const uint256NKbrHJd = await FairStockEquityDbsPhdj.getCostAmount.call(uintSgfLCty, {from: accounts[1]});
//		const addressf5TXchP = await FairStockEquityDbsPhdj.withdrawBonusCallback.call(addresstv1LdLp, uintcH39OOT, uintgrjpF8V, {from: accounts[0]});
//		const uint256yDxHz3g = await FairStockEquityDbsPhdj.bonus.call(uintiU8AGKB, {from: accounts[0]});

		await expect(FairStockEquityDbsPhdj.withdrawBonusCallback.call(addresstv1LdLp, uintcH39OOT, uintgrjpF8V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnqhtLtb = "0x0000000000000000000000000000000000000001"
		const addressIMQw850 = accounts[4]
		const addressSSdLXMY = accounts[2]
		const addressPWqtMge = accounts[0]
		const uintgVbv8qI = BigInt("1015")
		const FairStockEquityDbsPhdj = await FairStockEquity.new(addressnqhtLtb, addressIMQw850, addressSSdLXMY, addressPWqtMge, uintgVbv8qI, {from: accounts[3]});
		const uinttEErhv4 = BigInt("1482")
		const uintAEbYwFC = BigInt("143")
		const addressa4ADeGb = accounts[4]
		const uintlQXEe33 = BigInt("1320")
		const uintX4gBO7U = BigInt("1612")
//		const addresslNfAcca = await FairStockEquityDbsPhdj.withdrawMTCallback.call(addressa4ADeGb, uintAEbYwFC, uinttEErhv4, {from: accounts[0]});
//		const uint256NKbrHJd = await FairStockEquityDbsPhdj.getCostAmount.call(uintlQXEe33, {from: accounts[1]});
//		const uint256IAzuBiq = await FairStockEquityDbsPhdj.getCostAmount.call(uintX4gBO7U, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityDbsPhdj.withdrawMTCallback.call(addressa4ADeGb, uintAEbYwFC, uinttEErhv4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnIoyKZ0 = accounts[4]
		const addressmUiCgKA = accounts[5]
		const addressIUYpb5Q = "0x0000000000000000000000000000000000000001"
		const addressroqeupX = accounts[2]
		const uintOkFCJj = BigInt("1217")
		const FairStockEquitycxLCJ1V = await FairStockEquity.new(addressnIoyKZ0, addressmUiCgKA, addressIUYpb5Q, addressroqeupX, uintOkFCJj, {from: accounts[4]});
		const uintxNvJuB8 = BigInt("762")
		const uintHMuET5z = BigInt("90")
		const uintjnAmQ7c = BigInt("951")
		const uintXocn9VJ = BigInt("1133")
		const addressR6jJ1HH = accounts[4]
//		const uint256AscPsLF = await FairStockEquitycxLCJ1V.bonus.call(uintxNvJuB8, {from: accounts[2]});
//		const uint256gcEerhK = await FairStockEquitycxLCJ1V.setProfitPercentPJ.call(uintHMuET5z, {from: accounts[5]});
//		const addressIlCQR46 = await FairStockEquitycxLCJ1V.withdrawBonusCallback.call(addressR6jJ1HH, uintXocn9VJ, uintjnAmQ7c, {from: accounts[0]});

		await expect(FairStockEquitycxLCJ1V.bonus.call(uintxNvJuB8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})