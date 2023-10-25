const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addresskqA492p = "0x0000000000000000000000000000000000000001"
		const addressR2cYsKt = accounts[5]
		const addressOB4R93J = accounts[2]
		const addresss5M5R1g = accounts[0]
		const uint4es7wj = BigInt("1461")
		const FairStockEquitywSQt52K = await FairStockEquity.new(addresskqA492p, addressR2cYsKt, addressOB4R93J, addresss5M5R1g, uint4es7wj, {from: accounts[4]});
		const uintxOrurFc = BigInt("2041")
		const uinttxeHnRa = BigInt("1538")
		const addresskmX5j9 = "0x0000000000000000000000000000000000000001"
		const uintCmKc1RK = BigInt("1082")
		const addressiYAJ1WL = accounts[2]
		const uint7o6gQg = BigInt("1722")
		const uintPofnXkf = BigInt("21")
		const uintJ0ozOiV = BigInt("781")
		const uintCGVv3Y4 = BigInt("306")
		const uintNtTUTD = BigInt("1719")
//		const addresshseSvqI = await FairStockEquitywSQt52K.setModule.call(addresskmX5j9, uinttxeHnRa, uintxOrurFc, {from: accounts[2]});
//		const uint256Kyk8N3C = await FairStockEquitywSQt52K.setProfitPercentPJ.call(uintCmKc1RK, {from: accounts[0]});
//		const addressGOoGDfP = await FairStockEquitywSQt52K.setDataSource.call(addressiYAJ1WL, {from: accounts[2]});
//		const uint256UEhemby = await FairStockEquitywSQt52K.setDegree.call(uintNtTUTD, uintCGVv3Y4, uintJ0ozOiV, uintPofnXkf, uint7o6gQg, {from: accounts[0]});

		await expect(FairStockEquitywSQt52K.setModule.call(addresskmX5j9, uinttxeHnRa, uintxOrurFc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTX6YT6i = accounts[4]
		const addressjSLtcG = accounts[2]
		const addressPWZEKSp = accounts[4]
		const addresswheHViM = accounts[1]
		const uintsZQL0tC = BigInt("1651")
		const FairStockEquityuJUsgXW = await FairStockEquity.new(addressTX6YT6i, addressjSLtcG, addressPWZEKSp, addresswheHViM, uintsZQL0tC, {from: accounts[3]});
		const uintKVsSGWq = BigInt("1057")
		const uintnoS98MM = BigInt("493")
//		const uint256aOXhlcf = await FairStockEquityuJUsgXW.setProfitPercentBonus.call(uintKVsSGWq, {from: accounts[0]});
//		const uint256qNLxnib = await FairStockEquityuJUsgXW.setProfitPercentMT.call(uintnoS98MM, {from: accounts[2]});

		await expect(FairStockEquityuJUsgXW.setProfitPercentBonus.call(uintKVsSGWq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqPjA07z = accounts[3]
		const addressCA7QoGZ = accounts[3]
		const addressFLkwEck = accounts[1]
		const addressoWedgzn = accounts[1]
		const uintLJ96frU = BigInt("1857")
		const FairStockEquityHm8GC0h = await FairStockEquity.new(addressqPjA07z, addressCA7QoGZ, addressFLkwEck, addressoWedgzn, uintLJ96frU, {from: accounts[2]});
		const uintMGO86u = BigInt("302")
		const uintLUXi02m = BigInt("1773")
		const uintcRpjpeu = BigInt("1995")
		const uintBw2Ylhi = BigInt("1117")
		const addressXVtZijt = accounts[2]
		const uintc1kg4oo = BigInt("1590")
		const uintH9gakev = BigInt("1515")
		const uintCG4JQVv = BigInt("1889")
		const uintEtOzXUa = BigInt("1190")
		const uintIpFG3ch = BigInt("904")
//		await FairStockEquityHm8GC0h.onlyDataSource.call({from: accounts[2]});
//		const uint256lALYiyS = await FairStockEquityHm8GC0h.invest.call(uintMGO86u, {from: accounts[0]});
//		const uint256HVoXg4K = await FairStockEquityHm8GC0h.invest.call(uintLUXi02m, {from: accounts[1]});
//		const addressEQY25Zo = await FairStockEquityHm8GC0h.withdrawMTCallback.call(addressXVtZijt, uintBw2Ylhi, uintcRpjpeu, {from: accounts[0]});
//		const uint256x6kkEsN = await FairStockEquityHm8GC0h.setDegree.call(uintIpFG3ch, uintEtOzXUa, uintCG4JQVv, uintH9gakev, uintc1kg4oo, {from: accounts[4]});

		await expect(FairStockEquityHm8GC0h.onlyDataSource.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressRhjoQ8s = accounts[2]
		const addressyQWekwc = accounts[0]
		const addressHkd4zMX = accounts[4]
		const addressoEhZViK = accounts[4]
		const uintIsEsOqg = BigInt("1509")
		const FairStockEquity9VsMKC = await FairStockEquity.new(addressRhjoQ8s, addressyQWekwc, addressHkd4zMX, addressoEhZViK, uintIsEsOqg, {from: accounts[3]});
		const uintwW8X4TC = BigInt("77")
		const uintY6Tvvqm = BigInt("528")
		const uintQ2BSdvQ = BigInt("1408")
		const uintXyXim5E = BigInt("1727")
		const addressAJBeYBN = accounts[2]
		const uintWr9Sqqs = BigInt("1828")
		const addressBaUoOP = accounts[3]
		const uinta2fcEc = BigInt("1521")
		const uintfPFVvj9 = BigInt("1734")
		const addressGdyEpjH = accounts[4]
		const uintQINdavV = BigInt("1438")
		const uintuI7n2FZ = BigInt("1531")
		const uintvWYQ4H = BigInt("843")
		const uinttU4VDC4 = BigInt("1347")
		const uintieJV6xz = BigInt("691")
		const uintWUmikr = BigInt("1376")
		const addressxmh4dJh = accounts[2]
//		const addressBbUT7eW = await FairStockEquity9VsMKC.business.call(addressAJBeYBN, uintXyXim5E, uintQ2BSdvQ, uintY6Tvvqm, uintwW8X4TC, {from: accounts[1]});
//		const addressdJw0wui = await FairStockEquity9VsMKC.withdrawLPT.call(addressBaUoOP, uintWr9Sqqs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256R1UtBkq = await FairStockEquity9VsMKC.setProfitPercentMT.call(uinta2fcEc, {from: accounts[0]});
//		const addressdtuMGt = await FairStockEquity9VsMKC.withdrawLPT.call(addressGdyEpjH, uintfPFVvj9, {from: accounts[4]});
//		const uint256vDCaqdq = await FairStockEquity9VsMKC.setDegree.call(uintieJV6xz, uinttU4VDC4, uintvWYQ4H, uintuI7n2FZ, uintQINdavV, {from: accounts[4]});
//		const addressCjLUSkM = await FairStockEquity9VsMKC.withdrawLPT.call(addressxmh4dJh, uintWUmikr, {from: accounts[2]});

		await expect(FairStockEquity9VsMKC.business.call(addressAJBeYBN, uintXyXim5E, uintQ2BSdvQ, uintY6Tvvqm, uintwW8X4TC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHmWSJ6J = accounts[1]
		const addressg0Hkx1n = accounts[0]
		const addressN0Wnj4 = accounts[0]
		const addressLCrifH = accounts[4]
		const uintsMHkTfU = BigInt("722")
		const FairStockEquityKSOzBR5 = await FairStockEquity.new(addressHmWSJ6J, addressg0Hkx1n, addressN0Wnj4, addressLCrifH, uintsMHkTfU, {from: accounts[3]});
		const uintbWnAUER = BigInt("1335")
		const addressDH2ErRR = accounts[5]
//		await FairStockEquityKSOzBR5.f.call({from: accounts[0]});
//		const addressb7InvrM = await FairStockEquityKSOzBR5.depositLPT.call(addressDH2ErRR, uintbWnAUER, {from: accounts[1]});
//		await FairStockEquityKSOzBR5.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquityKSOzBR5.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTCS938j = accounts[0]
		const addressFOnkPEQ = accounts[1]
		const addressa7Z92Ms = accounts[3]
		const addresshapscci = accounts[3]
		const uintEx9IdYn = BigInt("1644")
		const FairStockEquitySi61HM = await FairStockEquity.new(addressTCS938j, addressFOnkPEQ, addressa7Z92Ms, addresshapscci, uintEx9IdYn, {from: accounts[3]});
		const uintsHXV8Iv = BigInt("45")
		const addressbMubmzt = "0x0000000000000000000000000000000000000001"
		const uintAdsuDi = BigInt("890")
		const uintmz6d8BY = BigInt("2046")
		const boolL4VZcfg = true
		const addresstjmCpML = accounts[3]
//		const address6Ptein = await FairStockEquitySi61HM.withdrawLPT.call(addressbMubmzt, uintsHXV8Iv, {from: accounts[4]});
//		await FairStockEquitySi61HM.checkStart.call({from: accounts[4]});
//		const uint256oFjOHth = await FairStockEquitySi61HM.setProfitPercentMT.call(uintAdsuDi, {from: accounts[1]});
//		const uint256B5JntvJ = await FairStockEquitySi61HM.reduceShare.call(uintmz6d8BY, {from: accounts[3]});
//		await FairStockEquitySi61HM.checkStart.call({from: accounts[5]});
//		const addressKl60dXs = await FairStockEquitySi61HM.setLPT.call(addresstjmCpML, boolL4VZcfg, {from: accounts[2]});

		await expect(FairStockEquitySi61HM.withdrawLPT.call(addressbMubmzt, uintsHXV8Iv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMufezla = accounts[3]
		const addressCXz8SV = accounts[3]
		const addresse8ZLU0L = accounts[1]
		const addressWfWuuCI = accounts[1]
		const uintO0xCpyn = BigInt("1857")
		const FairStockEquityHm8GC0h = await FairStockEquity.new(addressMufezla, addressCXz8SV, addresse8ZLU0L, addressWfWuuCI, uintO0xCpyn, {from: accounts[2]});
		const uintMdhfrIz = BigInt("697")
		const uintfqaSjyb = BigInt("302")
		const uinteMgeyqu = BigInt("1773")
		const uintmRpunzH = BigInt("1995")
		const uintwSOFozB = BigInt("1117")
		const addressmIERdzG = accounts[3]
		const uintiDSg3DV = BigInt("1590")
		const uintZDPyzDJ = BigInt("1515")
		const uintXTLVBZl = BigInt("1889")
		const uint5kpnC6 = BigInt("1190")
		const uint06D2ib = BigInt("904")
//		const uint256lQbowJG = await FairStockEquityHm8GC0h.bonus.call(uintMdhfrIz, {from: accounts[3]});
//		await FairStockEquityHm8GC0h.onlyDataSource.call({from: accounts[2]});
//		const uint256lALYiyS = await FairStockEquityHm8GC0h.invest.call(uintfqaSjyb, {from: accounts[0]});
//		const uint256HVoXg4K = await FairStockEquityHm8GC0h.invest.call(uinteMgeyqu, {from: accounts[1]});
//		const addressEQY25Zo = await FairStockEquityHm8GC0h.withdrawMTCallback.call(addressmIERdzG, uintwSOFozB, uintmRpunzH, {from: accounts[0]});
//		const uint256x6kkEsN = await FairStockEquityHm8GC0h.setDegree.call(uint06D2ib, uint5kpnC6, uintXTLVBZl, uintZDPyzDJ, uintiDSg3DV, {from: accounts[4]});

		await expect(FairStockEquityHm8GC0h.bonus.call(uintMdhfrIz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjYUxFmV = accounts[1]
		const addresstFucQyZ = accounts[0]
		const addressHRa3sPS = accounts[0]
		const addresszn7kdj9 = accounts[4]
		const uintg7je8FF = BigInt("722")
		const FairStockEquityKSOzBR5 = await FairStockEquity.new(addressjYUxFmV, addresstFucQyZ, addressHRa3sPS, addresszn7kdj9, uintg7je8FF, {from: accounts[3]});
//		await FairStockEquityKSOzBR5.f.call({from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityKSOzBR5.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquityKSOzBR5.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQgGhAXk = accounts[1]
		const addressJi492DI = accounts[0]
		const addressigkQrW = accounts[0]
		const addressbmrXMTL = accounts[4]
		const uintjIDQxPr = BigInt("722")
		const FairStockEquityKSOzBR5 = await FairStockEquity.new(addressQgGhAXk, addressJi492DI, addressigkQrW, addressbmrXMTL, uintjIDQxPr, {from: accounts[3]});
		const uintGZbF26 = BigInt("294")
		const uintRhzjXmU = BigInt("1344")
		const addresssDxN3W = accounts[0]
		const uintdDhPOYO = BigInt("371")
//		const uint256Db3Shxh = await FairStockEquityKSOzBR5.invest.call(uintGZbF26, {from: accounts[2]});
//		await FairStockEquityKSOzBR5.f.call({from: accounts[0]});
//		const addressb7InvrM = await FairStockEquityKSOzBR5.depositLPT.call(addresssDxN3W, uintRhzjXmU, {from: accounts[1]});
//		const uint256fHR8kDf = await FairStockEquityKSOzBR5.setProfitPercentPJ.call(uintdDhPOYO, {from: accounts[2]});
//		await FairStockEquityKSOzBR5.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquityKSOzBR5.invest.call(uintGZbF26, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstdTwxxa = accounts[2]
		const addressSwMeuNh = accounts[1]
		const addressE9C9B6p = accounts[0]
		const addresstprzq9 = accounts[1]
		const uintw9nOpI3 = BigInt("1186")
		const FairStockEquitydqQOOgB = await FairStockEquity.new(addresstdTwxxa, addressSwMeuNh, addressE9C9B6p, addresstprzq9, uintw9nOpI3, {from: accounts[5]});
		const uintYJer5d = BigInt("1428")
		const uintvkSVUoH = BigInt("1784")
		const uintrG5MTUq = BigInt("894")
		const addressI9KoeQ = accounts[3]
		const uintFr60GIi = BigInt("1177")
		const uintrczm7Ji = BigInt("733")
		const uintmLbqvfJ = BigInt("679")
		const uintGurrkl3 = BigInt("1915")
		const address0TePtH = accounts[5]
		const uintOJ3iR4 = BigInt("300")
//		const uint256FV4LpM = await FairStockEquitydqQOOgB.reduceShare.call(uintYJer5d, {from: accounts[5]});
//		const uint256iaYsfcR = await FairStockEquitydqQOOgB.reduceShare.call(uintvkSVUoH, {from: accounts[3]});
//		const addressikePjfP = await FairStockEquitydqQOOgB.withdrawLPT.call(addressI9KoeQ, uintrG5MTUq, {from: accounts[0]});
//		const addressNuG2bS3 = await FairStockEquitydqQOOgB.business.call(address0TePtH, uintGurrkl3, uintmLbqvfJ, uintrczm7Ji, uintFr60GIi, {from: accounts[1]});
//		const uint256JyBcH7O = await FairStockEquitydqQOOgB.setGasFeeForCallback.call(uintOJ3iR4, {from: accounts[3]});

		await expect(FairStockEquitydqQOOgB.reduceShare.call(uintYJer5d, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressIL4lS57 = accounts[3]
		const addressV9OJ109 = accounts[1]
		const addresshgylrR = accounts[5]
		const addressp0FuqpZ = accounts[0]
		const uint6BtrgA = BigInt("1348")
		const FairStockEquityHXGQw59 = await FairStockEquity.new(addressIL4lS57, addressV9OJ109, addresshgylrR, addressp0FuqpZ, uint6BtrgA, {from: accounts[4]});
		const uintAqgcIx = BigInt("1874")
		const uintbxhGtzk = BigInt("877")
		const uintmMYyMD = BigInt("1114")
		const addresslhd3iQ9 = accounts[3]
		const uintLmu1U1r = BigInt("979")
		const addressDiOyk5U = accounts[5]
		const uintg9sqULG = BigInt("1609")
//		await FairStockEquityHXGQw59.withdrawBonus.call({from: accounts[1]});
//		const uint256ogUp241 = await FairStockEquityHXGQw59.depositBonus.call(uintAqgcIx, {from: accounts[0]});
//		const addressbSn1LEM = await FairStockEquityHXGQw59.withdrawBonusCallback.call(addresslhd3iQ9, uintmMYyMD, uintbxhGtzk, {from: accounts[2]});
//		const addressqbQfRLY = await FairStockEquityHXGQw59.depositLPT.call(addressDiOyk5U, uintLmu1U1r, {from: accounts[2]});
//		const uint256u9qx0Ay = await FairStockEquityHXGQw59.setProfitPercentMT.call(uintg9sqULG, {from: accounts[3]});

		await expect(FairStockEquityHXGQw59.withdrawBonus.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDew6xup = accounts[3]
		const addressfoNxmTK = accounts[1]
		const addressVt4FTBB = accounts[3]
		const addresshovXGPY = accounts[3]
		const uintHeNX7uN = BigInt("173")
		const FairStockEquityFd116JH = await FairStockEquity.new(addressDew6xup, addressfoNxmTK, addressVt4FTBB, addresshovXGPY, uintHeNX7uN, {from: accounts[1]});
		const uintR8jG0AL = BigInt("1480")
		const uintE6WWLIg = BigInt("1083")
		const uintz7i0FX2 = BigInt("747")
		const uintr8t1juA = BigInt("1256")
		const uintUnqQxBT = BigInt("513")
		const addressU9dIoNz = accounts[3]
		const uintAgX5Xur = BigInt("546")
		const uinteHfg8OO = BigInt("1987")
		const uinta2W8k1N = BigInt("318")
		const uintMcw6pX1 = BigInt("975")
		const uintwvkpGUu = BigInt("159")
		const uintxhf2bZp = BigInt("1192")
//		const uint256Hp5Raxy = await FairStockEquityFd116JH.depositBonus.call(uintR8jG0AL, {from: accounts[2]});
//		const addressmkUyDCR = await FairStockEquityFd116JH.business.call(addressU9dIoNz, uintUnqQxBT, uintr8t1juA, uintz7i0FX2, uintE6WWLIg, {from: accounts[3]});
//		const uint256ewde1l5 = await FairStockEquityFd116JH.setDegree.call(uintwvkpGUu, uintMcw6pX1, uinta2W8k1N, uinteHfg8OO, uintAgX5Xur, {from: accounts[5]});
//		const uint256bqdHfgd = await FairStockEquityFd116JH.getCostAmount.call(uintxhf2bZp, {from: accounts[0]});

		await expect(FairStockEquityFd116JH.depositBonus.call(uintR8jG0AL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbDHkLsQ = accounts[4]
		const addressqJe6Spj = accounts[1]
		const addressAI1Srk5 = accounts[0]
		const addressCZ5il4z = accounts[0]
		const uintNsaTPjL = BigInt("755")
		const FairStockEquityHK6wutp = await FairStockEquity.new(addressbDHkLsQ, addressqJe6Spj, addressAI1Srk5, addressCZ5il4z, uintNsaTPjL, {from: accounts[0]});
		const uintDCkoIUi = BigInt("86")
		const uintU2tnOeb = BigInt("670")
		const uintsODAx52 = BigInt("1098")
//		await FairStockEquityHK6wutp.withdrawPJ.call({from: accounts[0]});
//		const uint256XJlwy4d = await FairStockEquityHK6wutp.setGasFeeForCallback.call(uintDCkoIUi, {from: accounts[0]});
//		const uint256IIUkZNo = await FairStockEquityHK6wutp.setProfitPercentPJ.call(uintU2tnOeb, {from: accounts[3]});
//		const uint256Sjn4hGB = await FairStockEquityHK6wutp.setGasFeeForCallback.call(uintsODAx52, {from: accounts[1]});

		await expect(FairStockEquityHK6wutp.withdrawPJ.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKl8gOOf = accounts[1]
		const addresspmrFjQL = accounts[0]
		const addressiF356j = accounts[0]
		const addressPTENI7A = accounts[4]
		const uintK5lFn1c = BigInt("722")
		const FairStockEquityKSOzBR5 = await FairStockEquity.new(addressKl8gOOf, addresspmrFjQL, addressiF356j, addressPTENI7A, uintK5lFn1c, {from: accounts[3]});
		const uintFqed3oH = BigInt("819")
		const uintNKAQ8oO = BigInt("1388")
		const addresscCjFelm = accounts[2]
		const uintryI94l = BigInt("1755")
		const addressiCG0qp = accounts[6]
//		const addresszyKGhzj = await FairStockEquityKSOzBR5.withdrawMTCallback.call(addresscCjFelm, uintNKAQ8oO, uintFqed3oH, {from: accounts[4]});
//		const addressb7InvrM = await FairStockEquityKSOzBR5.depositLPT.call(addressiCG0qp, uintryI94l, {from: accounts[1]});

		await expect(FairStockEquityKSOzBR5.withdrawMTCallback.call(addresscCjFelm, uintNKAQ8oO, uintFqed3oH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressgUNaSXV = accounts[1]
		const addressMZtlYfd = accounts[0]
		const addressxGomBTT = accounts[0]
		const addressSt0HxoP = accounts[4]
		const uinte1UljGL = BigInt("722")
		const FairStockEquityKSOzBR5 = await FairStockEquity.new(addressgUNaSXV, addressMZtlYfd, addressxGomBTT, addressSt0HxoP, uinte1UljGL, {from: accounts[3]});
		const uintx3UsJHc = BigInt("626")
		const uintrwjHPVi = BigInt("246")
		const uintXqeD3MY = BigInt("700")
		const addressMX2HCWv = accounts[2]
		const uintIEJPors = BigInt("1774")
		const addressqSoHjDP = accounts[4]
		const uint256vCY2mEt = await FairStockEquityKSOzBR5.getCostAmount.call(uintx3UsJHc, {from: accounts[1]});
//		const uint256xM4xrtT = await FairStockEquityKSOzBR5.setStartTime.call(uintrwjHPVi, {from: accounts[3]});
//		const addressLDKMgTx = await FairStockEquityKSOzBR5.depositLPT.call(addressMX2HCWv, uintXqeD3MY, {from: accounts[2]});
//		const addressb7InvrM = await FairStockEquityKSOzBR5.depositLPT.call(addressqSoHjDP, uintIEJPors, {from: accounts[1]});

		await expect(FairStockEquityKSOzBR5.setStartTime.call(uintrwjHPVi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPwuiJN8 = accounts[1]
		const addresslVv9cFm = accounts[0]
		const addressBhJKJnx = accounts[0]
		const addressyCvQHce = accounts[4]
		const uintXxVmdJ5 = BigInt("722")
		const FairStockEquityKSOzBR5 = await FairStockEquity.new(addressPwuiJN8, addresslVv9cFm, addressBhJKJnx, addressyCvQHce, uintXxVmdJ5, {from: accounts[3]});
		const boolkk78Fs2 = false
		const addresswHqGetz = accounts[2]
		const uintbtCnlad = BigInt("626")
		const uintuYwdV1w = BigInt("1748")
		const addresskyqTcBI = accounts[3]
		const addressMMB7e8V = await FairStockEquityKSOzBR5.setLPT.call(addresswHqGetz, boolkk78Fs2, {from: accounts[3]});
		const uint256vCY2mEt = await FairStockEquityKSOzBR5.getCostAmount.call(uintbtCnlad, {from: accounts[1]});
//		await FairStockEquityKSOzBR5.withdrawBonus.call({from: accounts[4]});
//		const addressb7InvrM = await FairStockEquityKSOzBR5.depositLPT.call(addresskyqTcBI, uintuYwdV1w, {from: accounts[1]});

		await expect(FairStockEquityKSOzBR5.withdrawBonus.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAa1Co3O = accounts[1]
		const addressiqAIKGY = accounts[5]
		const addressEMTysXV = "0x0000000000000000000000000000000000000001"
		const addresssrynzB = accounts[1]
		const uintFdq60mU = BigInt("1343")
		const FairStockEquityh3UZrR = await FairStockEquity.new(addressAa1Co3O, addressiqAIKGY, addressEMTysXV, addresssrynzB, uintFdq60mU, {from: "0x0000000000000000000000000000000000000001"});
		const uinteOnh0Vt = BigInt("740")
		const uintyszRbFR = BigInt("1038")
		const addressEOrZRQ = "0x0000000000000000000000000000000000000001"
		const uintt9upS7W = BigInt("384")
		const uintN27lUUj = BigInt("848")
		const uintIQ34vGT = BigInt("390")
		const uintpr8XuK0 = BigInt("1729")
		const addressyMEOo9G = "0x0000000000000000000000000000000000000001"
		const addressEr7GhtR = await FairStockEquityh3UZrR.withdrawBonusCallback.call(addressEOrZRQ, uintyszRbFR, uinteOnh0Vt, {from: accounts[5]});
		await FairStockEquityh3UZrR.withdrawPJ.call({from: accounts[0]});
		const uint256q4uqxxk = await FairStockEquityh3UZrR.invest.call(uintt9upS7W, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oBiCpaf = await FairStockEquityh3UZrR.setProfitPercentMT.call(uintN27lUUj, {from: accounts[4]});
		const addresspGVkabT = await FairStockEquityh3UZrR.withdrawMTCallback.call(addressyMEOo9G, uintpr8XuK0, uintIQ34vGT, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressYHmXuwc = accounts[1]
		const addressLcpKqkI = accounts[0]
		const addressVG1LJ3P = accounts[0]
		const addressg01sSau = accounts[4]
		const uinttDyhHV9 = BigInt("722")
		const FairStockEquityKSOzBR5 = await FairStockEquity.new(addressYHmXuwc, addressLcpKqkI, addressVG1LJ3P, addressg01sSau, uinttDyhHV9, {from: accounts[3]});
		const uintAerpYa2 = BigInt("1013")
		const uintnVNrQm = BigInt("812")
		const addressNEuwFC = accounts[0]
		const uintqsaGV8c = BigInt("1759")
		const addressn6caYUt = accounts[6]
		const addressDqA4mEh = await FairStockEquityKSOzBR5.setModule.call(addressNEuwFC, uintnVNrQm, uintAerpYa2, {from: accounts[3]});
//		const addressb7InvrM = await FairStockEquityKSOzBR5.depositLPT.call(addressn6caYUt, uintqsaGV8c, {from: accounts[1]});

		await expect(FairStockEquityKSOzBR5.depositLPT.call(addressn6caYUt, uintqsaGV8c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})