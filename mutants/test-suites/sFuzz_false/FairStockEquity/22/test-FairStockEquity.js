const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addresst376LQj = accounts[4]
		const addressPvfh8It = "0x0000000000000000000000000000000000000001"
		const addressFPUKjWS = accounts[1]
		const addressKoHdR73 = accounts[4]
		const uintYEiicPK = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addresst376LQj, addressPvfh8It, addressFPUKjWS, addressKoHdR73, uintYEiicPK, {from: accounts[1]});
		const uintymbu4L = BigInt("1802")
		const uintgd4g1SZ = BigInt("23")
		const addressO2ngYg = accounts[0]
		const uintUamqPKw = BigInt("1063")
		const uintk2oql0x = BigInt("1281")
		const addressi81nO3P = accounts[0]
//		const addresshzryNW3 = await FairStockEquityrFstDun.setModule.call(addressO2ngYg, uintgd4g1SZ, uintymbu4L, {from: accounts[0]});
//		const addressH9XdAyG = await FairStockEquityrFstDun.withdrawBonusCallback.call(addressi81nO3P, uintk2oql0x, uintUamqPKw, {from: accounts[0]});

		await expect(FairStockEquityrFstDun.setModule.call(addressO2ngYg, uintgd4g1SZ, uintymbu4L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressVqjg9VJ = accounts[4]
		const addressbi3R0Li = "0x0000000000000000000000000000000000000001"
		const addressb0FagOg = accounts[4]
		const addresszFwn75o = accounts[5]
		const uintltdE0wd = BigInt("1365")
		const FairStockEquityZ7lFWqt = await FairStockEquity.new(addressVqjg9VJ, addressbi3R0Li, addressb0FagOg, addresszFwn75o, uintltdE0wd, {from: accounts[5]});
		const uintfM0Y4NL = BigInt("741")
		const uintbMN7jse = BigInt("13")
		const uintfKUbsfj = BigInt("934")
		const uintwY0TZO0 = BigInt("1998")
		const uintcQOL30K = BigInt("1008")
		const uintqp37I4k = BigInt("257")
//		await FairStockEquityZ7lFWqt.withdrawMT.call({from: accounts[2]});
//		await FairStockEquityZ7lFWqt.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256owP8x1J = await FairStockEquityZ7lFWqt.setDegree.call(uintcQOL30K, uintwY0TZO0, uintfKUbsfj, uintbMN7jse, uintfM0Y4NL, {from: accounts[0]});
//		await FairStockEquityZ7lFWqt.f.call({from: accounts[1]});
//		const uint256TwXzxUM = await FairStockEquityZ7lFWqt.reduceShare.call(uintqp37I4k, {from: accounts[3]});
//		await FairStockEquityZ7lFWqt.withdrawBonus.call({from: accounts[4]});

		await expect(FairStockEquityZ7lFWqt.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressITxIeup = accounts[0]
		const addressF0XpKu = accounts[2]
		const addressEDarrQV = accounts[5]
		const addressnUU51t = "0x0000000000000000000000000000000000000001"
		const uintJrF2pwQ = BigInt("674")
		const FairStockEquityT4qmLis = await FairStockEquity.new(addressITxIeup, addressF0XpKu, addressEDarrQV, addressnUU51t, uintJrF2pwQ, {from: accounts[0]});
		const uintL6iHI7m = BigInt("611")
		const uintIbavX2N = BigInt("433")
		const addressWZTT3sq = accounts[1]
		const uintpBfl6y6 = BigInt("921")
		const uintwLKnOGd = BigInt("38")
		const uintDNc6yix = BigInt("98")
		const addressfHLAFi = accounts[3]
		const uint256O3oqOpY = await FairStockEquityT4qmLis.setProfitPercentMT.call(uintL6iHI7m, {from: accounts[0]});
//		const addresslAfSYpg = await FairStockEquityT4qmLis.depositLPT.call(addressWZTT3sq, uintIbavX2N, {from: accounts[1]});
//		const uint2560QsdfL = await FairStockEquityT4qmLis.invest.call(uintpBfl6y6, {from: accounts[1]});
//		const uint256FLy2do8 = await FairStockEquityT4qmLis.invest.call(uintwLKnOGd, {from: accounts[5]});
//		const addressCJWfFnW = await FairStockEquityT4qmLis.withdrawLPT.call(addressfHLAFi, uintDNc6yix, {from: accounts[2]});

		await expect(FairStockEquityT4qmLis.depositLPT.call(addressWZTT3sq, uintIbavX2N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMfwcu65 = accounts[5]
		const addresscIoirUh = accounts[2]
		const addressGZED0PG = accounts[5]
		const addressm0F3pth = accounts[0]
		const uintlLTxmJF = BigInt("513")
		const FairStockEquityXpwJi4J = await FairStockEquity.new(addressMfwcu65, addresscIoirUh, addressGZED0PG, addressm0F3pth, uintlLTxmJF, {from: accounts[0]});
		const uintIVqKk2q = BigInt("72")
		const uintbtZ1XVw = BigInt("153")
		const uintRRYHRBY = BigInt("1584")
//		const uint256LbW4Y5M = await FairStockEquityXpwJi4J.depositBonus.call(uintIVqKk2q, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256TRK23cs = await FairStockEquityXpwJi4J.reduceShare.call(uintbtZ1XVw, {from: accounts[1]});
//		const uint256mjEC1o9 = await FairStockEquityXpwJi4J.setProfitPercentMT.call(uintRRYHRBY, {from: accounts[3]});
//		await FairStockEquityXpwJi4J.onlyDataSource.call({from: accounts[0]});

		await expect(FairStockEquityXpwJi4J.depositBonus.call(uintIVqKk2q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresskAQebR = accounts[0]
		const addressUsZFjt5 = accounts[5]
		const addressOPItHAA = accounts[4]
		const addressJiRYIFk = accounts[5]
		const uintQ2JkAez = BigInt("1301")
		const FairStockEquityckxisdq = await FairStockEquity.new(addresskAQebR, addressUsZFjt5, addressOPItHAA, addressJiRYIFk, uintQ2JkAez, {from: accounts[2]});
		const uintkqAJHxK = BigInt("1573")
		const uintDEOyIUV = BigInt("1622")
		const addressfX7GRqZ = accounts[5]
		const uintAF6aGT = BigInt("1095")
		const uintnbcvmqO = BigInt("1225")
		const uintFLSOAX = BigInt("1151")
		const uintF24C8aw = BigInt("1761")
//		const addressuAyAM4g = await FairStockEquityckxisdq.withdrawMTCallback.call(addressfX7GRqZ, uintDEOyIUV, uintkqAJHxK, {from: accounts[5]});
//		const uint256LF1ETbs = await FairStockEquityckxisdq.invest.call(uintAF6aGT, {from: accounts[2]});
//		await FairStockEquityckxisdq.withdrawMT.call({from: accounts[3]});
//		const uint256LosDY3q = await FairStockEquityckxisdq.getCostAmount.call(uintnbcvmqO, {from: accounts[5]});
//		const uint256cxrj1Wr = await FairStockEquityckxisdq.setProfitPercentMT.call(uintFLSOAX, {from: accounts[5]});
//		const uint256GGl9yrT = await FairStockEquityckxisdq.getCostAmount.call(uintF24C8aw, {from: accounts[5]});

		await expect(FairStockEquityckxisdq.withdrawMTCallback.call(addressfX7GRqZ, uintDEOyIUV, uintkqAJHxK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresskOfB0x = accounts[4]
		const addressHXrGjMZ = "0x0000000000000000000000000000000000000001"
		const addressMkJ8T8h = accounts[1]
		const address5z1D4E = accounts[4]
		const uintWgqnuET = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addresskOfB0x, addressHXrGjMZ, addressMkJ8T8h, address5z1D4E, uintWgqnuET, {from: accounts[1]});
		const uintqNOCu5U = BigInt("1802")
		const uintC04xI9 = BigInt("34")
		const addressaiJ667y = accounts[0]
//		await FairStockEquityrFstDun.checkStart.call({from: accounts[4]});
//		const addresshzryNW3 = await FairStockEquityrFstDun.setModule.call(addressaiJ667y, uintC04xI9, uintqNOCu5U, {from: accounts[0]});
//		await FairStockEquityrFstDun.withdrawBonus.call({from: accounts[0]});

		await expect(FairStockEquityrFstDun.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshnaP5Bv = accounts[4]
		const addressZowr2ZP = "0x0000000000000000000000000000000000000001"
		const addresssuKTiQp = accounts[1]
		const addressruqcRx = accounts[4]
		const uintW4XBnCz = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addresshnaP5Bv, addressZowr2ZP, addresssuKTiQp, addressruqcRx, uintW4XBnCz, {from: accounts[1]});
		const uintozSoku = BigInt("1063")
		const uintKrTgMrW = BigInt("1281")
		const addresseY7jxF7 = accounts[0]
//		const addressH9XdAyG = await FairStockEquityrFstDun.withdrawBonusCallback.call(addresseY7jxF7, uintKrTgMrW, uintozSoku, {from: accounts[0]});

		await expect(FairStockEquityrFstDun.withdrawBonusCallback.call(addresseY7jxF7, uintKrTgMrW, uintozSoku, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressFpEY9dj = accounts[4]
		const addressXq0h7dc = "0x0000000000000000000000000000000000000001"
		const addresswGxFwOn = accounts[1]
		const addressDx7OSRQ = accounts[4]
		const uintR1m0dul = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addressFpEY9dj, addressXq0h7dc, addresswGxFwOn, addressDx7OSRQ, uintR1m0dul, {from: accounts[1]});
		const uintxFllxwH = BigInt("457")
		const uintv38MJqw = BigInt("1802")
		const uintNxQlUTO = BigInt("589")
		const addressTgxZED1 = accounts[0]
		const uintvfFjai0 = BigInt("1063")
		const uintYuSrcri = BigInt("1281")
		const addressuabuun5 = accounts[0]
//		const uint256CEsshDB = await FairStockEquityrFstDun.setProfitPercentBonus.call(uintxFllxwH, {from: accounts[3]});
//		const addresshzryNW3 = await FairStockEquityrFstDun.setModule.call(addressTgxZED1, uintNxQlUTO, uintv38MJqw, {from: accounts[0]});
//		const addressH9XdAyG = await FairStockEquityrFstDun.withdrawBonusCallback.call(addressuabuun5, uintYuSrcri, uintvfFjai0, {from: accounts[0]});

		await expect(FairStockEquityrFstDun.setProfitPercentBonus.call(uintxFllxwH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressa43N9W = accounts[1]
		const addressecgMCwE = accounts[2]
		const addressolOvtWm = "0x0000000000000000000000000000000000000001"
		const addressTgx3Ypq = "0x0000000000000000000000000000000000000001"
		const uintnELs0EW = BigInt("190")
		const FairStockEquityMI7E7Qy = await FairStockEquity.new(addressa43N9W, addressecgMCwE, addressolOvtWm, addressTgx3Ypq, uintnELs0EW, {from: accounts[1]});
		const uintZe2sWAI = BigInt("612")
		const uintQ1p6GR = BigInt("307")
		const uintfi9Vf6y = BigInt("0")
		const addressiqGWjTh = accounts[2]
		const uint256l3Agh2q = await FairStockEquityMI7E7Qy.setStartTime.call(uintZe2sWAI, {from: accounts[1]});
//		const uint256IQCP672 = await FairStockEquityMI7E7Qy.setProfitPercentBonus.call(uintQ1p6GR, {from: accounts[0]});
//		const uint256mog3eRz = await FairStockEquityMI7E7Qy.bonus.call(uintfi9Vf6y, {from: accounts[0]});
//		const addressHHFlPm = await FairStockEquityMI7E7Qy.setDataSource.call(addressiqGWjTh, {from: accounts[4]});

		await expect(FairStockEquityMI7E7Qy.setProfitPercentBonus.call(uintQ1p6GR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressIMDw1Qw = accounts[4]
		const addressjqbriBM = "0x0000000000000000000000000000000000000001"
		const addressXgtiVEy = accounts[1]
		const addressozFkPFk = accounts[4]
		const uintoD8AHeD = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addressIMDw1Qw, addressjqbriBM, addressXgtiVEy, addressozFkPFk, uintoD8AHeD, {from: accounts[1]});
		const uintEvkgGlo = BigInt("328")
		const uintONRGujU = BigInt("224")
		const uintCIqJYcf = BigInt("1046")
		const uintBRi3get = BigInt("141")
		const addressjH0F2JW = accounts[1]
		const uintviSkhXb = BigInt("1063")
		const uintTSHaK1L = BigInt("1267")
		const addressPniwCxI = accounts[0]
//		const addressk8Clc4u = await FairStockEquityrFstDun.business.call(addressjH0F2JW, uintBRi3get, uintCIqJYcf, uintONRGujU, uintEvkgGlo, {from: accounts[0]});
//		await FairStockEquityrFstDun.withdrawPJ.call({from: accounts[5]});
//		const addressH9XdAyG = await FairStockEquityrFstDun.withdrawBonusCallback.call(addressPniwCxI, uintTSHaK1L, uintviSkhXb, {from: accounts[0]});

		await expect(FairStockEquityrFstDun.business.call(addressjH0F2JW, uintBRi3get, uintCIqJYcf, uintONRGujU, uintEvkgGlo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressiQHZN8L = accounts[4]
		const addressBLZqbss = "0x0000000000000000000000000000000000000001"
		const addressZ7qHfbO = accounts[1]
		const addressbTUMhbf = accounts[4]
		const uintxs9cD75 = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addressiQHZN8L, addressBLZqbss, addressZ7qHfbO, addressbTUMhbf, uintxs9cD75, {from: accounts[1]});
		const uintu8bsGP = BigInt("1583")
		const uintYmAy3V = BigInt("1063")
		const uintQTPRRlF = BigInt("1129")
		const addresst0rcdr = accounts[0]
//		const uint256PGxYkIf = await FairStockEquityrFstDun.reduceShare.call(uintu8bsGP, {from: "0x0000000000000000000000000000000000000001"});
//		const addressH9XdAyG = await FairStockEquityrFstDun.withdrawBonusCallback.call(addresst0rcdr, uintQTPRRlF, uintYmAy3V, {from: accounts[0]});

		await expect(FairStockEquityrFstDun.reduceShare.call(uintu8bsGP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMXvCEwe = "0x0000000000000000000000000000000000000001"
		const addresshkXeSNr = "0x0000000000000000000000000000000000000001"
		const addressv8vYeVE = accounts[3]
		const address5kmX3F = accounts[3]
		const uintehJOvJe = BigInt("1162")
		const FairStockEquityWmFj6Fy = await FairStockEquity.new(addressMXvCEwe, addresshkXeSNr, addressv8vYeVE, address5kmX3F, uintehJOvJe, {from: accounts[4]});
		const uintZ2WVjZR = BigInt("2031")
		const uintcujdMfz = BigInt("1720")
		const uintIgQp88I = BigInt("241")
		const uintqYqcVY = BigInt("1894")
		const uintoK0CMtr = BigInt("1639")
		const uintjRzep09 = BigInt("447")
		const uintBMnJX0c = BigInt("1727")
		const uintxyUXvX9 = BigInt("1464")
		const uint1R1JaS = BigInt("1525")
		const uintV1KMDT = BigInt("723")
		const uintKDwSoLS = BigInt("1236")
//		await FairStockEquityWmFj6Fy.f.call({from: accounts[1]});
//		const uint256QLhtasP = await FairStockEquityWmFj6Fy.setStartTime.call(uintZ2WVjZR, {from: accounts[4]});
//		const uint256bJqp9W8 = await FairStockEquityWmFj6Fy.setDegree.call(uintjRzep09, uintoK0CMtr, uintqYqcVY, uintIgQp88I, uintcujdMfz, {from: accounts[3]});
//		const uint256WVHadEi = await FairStockEquityWmFj6Fy.setDegree.call(uintKDwSoLS, uintV1KMDT, uint1R1JaS, uintxyUXvX9, uintBMnJX0c, {from: accounts[2]});

		await expect(FairStockEquityWmFj6Fy.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAvaqba = accounts[4]
		const addressXJWtcHc = accounts[1]
		const address8oKOh9 = accounts[4]
		const addresstQl0mqD = accounts[3]
		const uintyPEaovC = BigInt("1323")
		const FairStockEquitynujIggH = await FairStockEquity.new(addressAvaqba, addressXJWtcHc, address8oKOh9, addresstQl0mqD, uintyPEaovC, {from: accounts[0]});
		const uintwxx0pjQ = BigInt("708")
		const uintQrc9QEv = BigInt("109")
		const uintWPkNkDV = BigInt("540")
		const uintfD2kDCs = BigInt("1426")
		const uintjV1lbPi = BigInt("390")
		const uintQ98yszJ = BigInt("877")
		const uintQBYBaVW = BigInt("755")
		const uintRF4bfys = BigInt("192")
		const addressLA55RA = accounts[1]
		const uint256tTXWeVo = await FairStockEquitynujIggH.getCostAmount.call(uintwxx0pjQ, {from: accounts[4]});
//		const uint256wanQLDA = await FairStockEquitynujIggH.setDegree.call(uintQ98yszJ, uintjV1lbPi, uintfD2kDCs, uintWPkNkDV, uintQrc9QEv, {from: accounts[1]});
//		const addressUb5htmG = await FairStockEquitynujIggH.withdrawMTCallback.call(addressLA55RA, uintRF4bfys, uintQBYBaVW, {from: accounts[2]});

		await expect(FairStockEquitynujIggH.setDegree.call(uintQ98yszJ, uintjV1lbPi, uintfD2kDCs, uintWPkNkDV, uintQrc9QEv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqqyAMbd = accounts[4]
		const addressQgj1m1d = accounts[4]
		const addressxIrdATu = accounts[4]
		const addressYZeVpbH = accounts[5]
		const uintGyKiua9 = BigInt("1795")
		const FairStockEquityDFjHh9h = await FairStockEquity.new(addressqqyAMbd, addressQgj1m1d, addressxIrdATu, addressYZeVpbH, uintGyKiua9, {from: accounts[1]});
		const uintwMmQXY3 = BigInt("1494")
		const uintl8tFEJ4 = BigInt("1206")
		const uintm1LxLZR = BigInt("1109")
		const addressmtRQUaV = accounts[3]
		const uintmsCQttD = BigInt("1372")
		const addressb0auou7 = "0x0000000000000000000000000000000000000001"
//		const uint256vBl0NJ4 = await FairStockEquityDFjHh9h.bonus.call(uintwMmQXY3, {from: accounts[5]});
//		const addressDEwAO6d = await FairStockEquityDFjHh9h.withdrawMTCallback.call(addressmtRQUaV, uintm1LxLZR, uintl8tFEJ4, {from: accounts[4]});
//		const addressTmbotON = await FairStockEquityDFjHh9h.depositLPT.call(addressb0auou7, uintmsCQttD, {from: accounts[4]});
//		await FairStockEquityDFjHh9h.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityDFjHh9h.bonus.call(uintwMmQXY3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKdGRRFi = accounts[4]
		const addresskUqbe5x = "0x0000000000000000000000000000000000000001"
		const addressHNFm2Cw = accounts[1]
		const addressTtdf0Es = accounts[4]
		const uintgxOeqr9 = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addressKdGRRFi, addresskUqbe5x, addressHNFm2Cw, addressTtdf0Es, uintgxOeqr9, {from: accounts[1]});
		const uintdfxNGyK = BigInt("1068")
		const uintitUeZ7C = BigInt("1326")
		const addressKIWkzKm = accounts[1]
//		await FairStockEquityrFstDun.withdrawBonus.call({from: accounts[5]});
//		const addressH9XdAyG = await FairStockEquityrFstDun.withdrawBonusCallback.call(addressKIWkzKm, uintitUeZ7C, uintdfxNGyK, {from: accounts[0]});

		await expect(FairStockEquityrFstDun.withdrawBonus.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuu9bnoZ = accounts[4]
		const addressTWXmmzU = "0x0000000000000000000000000000000000000001"
		const addressdO7MYaD = accounts[1]
		const addresslMna4f6 = accounts[4]
		const uintrRlX2hU = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addressuu9bnoZ, addressTWXmmzU, addressdO7MYaD, addresslMna4f6, uintrRlX2hU, {from: accounts[1]});
		const uintnCwRFpm = BigInt("1011")
		const uintFBAqCzN = BigInt("1063")
		const uintJCnCW39 = BigInt("1281")
		const addresstyaOOkH = "0x0000000000000000000000000000000000000001"
//		const uint256I5CpEov = await FairStockEquityrFstDun.invest.call(uintnCwRFpm, {from: accounts[0]});
//		const addressH9XdAyG = await FairStockEquityrFstDun.withdrawBonusCallback.call(addresstyaOOkH, uintJCnCW39, uintFBAqCzN, {from: accounts[0]});

		await expect(FairStockEquityrFstDun.invest.call(uintnCwRFpm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscx9ZQiP = accounts[4]
		const addressbGTkQPq = "0x0000000000000000000000000000000000000001"
		const addressi5dVvgh = accounts[2]
		const addressNbzfcm4 = accounts[5]
		const uint1x6K2E = BigInt("1125")
		const FairStockEquitysb7AKnU = await FairStockEquity.new(addresscx9ZQiP, addressbGTkQPq, addressi5dVvgh, addressNbzfcm4, uint1x6K2E, {from: accounts[4]});
		const uintD5c9EXW = BigInt("1045")
		const addressQcIiELn = accounts[5]
		const uintRgLPU8 = BigInt("1405")
		const uintgZQq5rE = BigInt("852")
		const uintiAuaNzy = BigInt("972")
//		const addressg1UfKJr = await FairStockEquitysb7AKnU.withdrawLPT.call(addressQcIiELn, uintD5c9EXW, {from: accounts[4]});
//		const uint256HfTcNJ = await FairStockEquitysb7AKnU.invest.call(uintRgLPU8, {from: accounts[3]});
//		const uint256xPgw3hT = await FairStockEquitysb7AKnU.getCostAmount.call(uintgZQq5rE, {from: accounts[1]});
//		const uint256B02xvc = await FairStockEquitysb7AKnU.setStartTime.call(uintiAuaNzy, {from: accounts[2]});

		await expect(FairStockEquitysb7AKnU.withdrawLPT.call(addressQcIiELn, uintD5c9EXW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuat1io = accounts[4]
		const addressEDgW1ka = accounts[1]
		const addresszdP3hbR = accounts[4]
		const addressDE06ulC = accounts[3]
		const uintBx5jZq = BigInt("1323")
		const FairStockEquitynujIggH = await FairStockEquity.new(addressuat1io, addressEDgW1ka, addresszdP3hbR, addressDE06ulC, uintBx5jZq, {from: accounts[0]});
		const uintAMKkJQu = BigInt("713")
		const uintmkXd7W8 = BigInt("880")
		const uint256tTXWeVo = await FairStockEquitynujIggH.getCostAmount.call(uintAMKkJQu, {from: accounts[4]});
//		const uint256MuW1HN9 = await FairStockEquitynujIggH.setStartTime.call(uintmkXd7W8, {from: accounts[0]});

		await expect(FairStockEquitynujIggH.setStartTime.call(uintmkXd7W8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscfGK2i6 = accounts[4]
		const addressdF1F76 = accounts[3]
		const addressRXLrE32 = accounts[5]
		const addressMGe4v0v = accounts[4]
		const uintRBd56Oj = BigInt("461")
		const FairStockEquityRQeMyF = await FairStockEquity.new(addresscfGK2i6, addressdF1F76, addressRXLrE32, addressMGe4v0v, uintRBd56Oj, {from: "0x0000000000000000000000000000000000000001"});
		const uinthbE554w = BigInt("74")
		const uintGLBCw1l = BigInt("1442")
		const uintuIaIBMB = BigInt("1686")
		const uintnCM1Heu = BigInt("895")
		const addressKncOzv3 = accounts[1]
		const uintJrF37CH = BigInt("365")
		const uintSwJHob = BigInt("595")
		const addresszO9yjyR = await FairStockEquityRQeMyF.business.call(addressKncOzv3, uintnCM1Heu, uintuIaIBMB, uintGLBCw1l, uinthbE554w, {from: accounts[5]});
		const uint256TGGdlfE = await FairStockEquityRQeMyF.invest.call(uintJrF37CH, {from: accounts[5]});
		const uint256tu3M0aA = await FairStockEquityRQeMyF.bonus.call(uintSwJHob, {from: accounts[4]});
		await FairStockEquityRQeMyF.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for FairStockEquity', async () => {
		const addressVOBKE75 = accounts[4]
		const addressi9YO75K = "0x0000000000000000000000000000000000000001"
		const addressUGaHfYZ = accounts[1]
		const addressVdKviW0 = accounts[4]
		const uintlBHd9d = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addressVOBKE75, addressi9YO75K, addressUGaHfYZ, addressVdKviW0, uintlBHd9d, {from: accounts[1]});
		const uintryZt2Wb = BigInt("1394")
		const addressgzTaeVp = "0x0000000000000000000000000000000000000001"
		const uintAUUh9Id = BigInt("1068")
		const uintocbfs6L = BigInt("1258")
		const addresscVZbEgq = accounts[0]
//		await FairStockEquityrFstDun.withdrawPJ.call({from: accounts[1]});
//		const addressHCTA97R = await FairStockEquityrFstDun.depositLPT.call(addressgzTaeVp, uintryZt2Wb, {from: accounts[4]});
//		const addressH9XdAyG = await FairStockEquityrFstDun.withdrawBonusCallback.call(addresscVZbEgq, uintocbfs6L, uintAUUh9Id, {from: accounts[0]});

		await expect(FairStockEquityrFstDun.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspW3Rv4N = accounts[4]
		const addressx8QVEHN = "0x0000000000000000000000000000000000000001"
		const addressoU2IuPe = accounts[1]
		const addressobTGTkR = accounts[4]
		const uintT4VXRzO = BigInt("1395")
		const FairStockEquityrFstDun = await FairStockEquity.new(addresspW3Rv4N, addressx8QVEHN, addressoU2IuPe, addressobTGTkR, uintT4VXRzO, {from: accounts[1]});
		const uint3tIAdG = BigInt("1227")
		const uintuvj0MJd = BigInt("576")
		const addressXQPMrss = accounts[2]
		const uintRPxU4o9 = BigInt("203")
		const uintukDcepQ = BigInt("1281")
		const addressgohews0 = accounts[1]
		const addresstu7ajRj = accounts[2]
		const addressUBVFHl0 = await FairStockEquityrFstDun.setModule.call(addressXQPMrss, uintuvj0MJd, uint3tIAdG, {from: accounts[1]});
//		const addressH9XdAyG = await FairStockEquityrFstDun.withdrawBonusCallback.call(addressgohews0, uintukDcepQ, uintRPxU4o9, {from: accounts[0]});
//		const addressp08XKgm = await FairStockEquityrFstDun.setDataSource.call(addresstu7ajRj, {from: accounts[4]});

		await expect(FairStockEquityrFstDun.withdrawBonusCallback.call(addressgohews0, uintukDcepQ, uintRPxU4o9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOCkpIjg = accounts[3]
		const addressLSd0q31 = accounts[0]
		const addressiLxVV6N = accounts[1]
		const addressQGDfHEy = accounts[3]
		const uintwYM3bML = BigInt("1557")
		const FairStockEquity2hV2WM = await FairStockEquity.new(addressOCkpIjg, addressLSd0q31, addressiLxVV6N, addressQGDfHEy, uintwYM3bML, {from: accounts[1]});
		const boolRIxhJL0 = true
		const addresswzjqULm = accounts[1]
		const uintkdApD2e = BigInt("394")
		const uintMmT85sb = BigInt("1388")
		const addressUmWsR0E = await FairStockEquity2hV2WM.setLPT.call(addresswzjqULm, boolRIxhJL0, {from: accounts[1]});
//		const uint256M8fzUJi = await FairStockEquity2hV2WM.setStartTime.call(uintkdApD2e, {from: accounts[4]});
//		await FairStockEquity2hV2WM.withdrawBonus.call({from: accounts[2]});
//		const uint256Q2WtysU = await FairStockEquity2hV2WM.setProfitPercentMT.call(uintMmT85sb, {from: accounts[2]});

		await expect(FairStockEquity2hV2WM.setStartTime.call(uintkdApD2e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressLc6cNq2 = accounts[4]
		const addressr5npxsE = accounts[1]
		const addressTf6UoSH = accounts[4]
		const addressWwNkaIR = accounts[3]
		const uintkDGnOJK = BigInt("1323")
		const FairStockEquitynujIggH = await FairStockEquity.new(addressLc6cNq2, addressr5npxsE, addressTf6UoSH, addressWwNkaIR, uintkDGnOJK, {from: accounts[0]});
		const uintgbYvgGw = BigInt("315")
		const uintRE78CyJ = BigInt("1026")
		const addressnL8ZsEg = accounts[2]
		const uintzJxXZVQ = BigInt("708")
//		const addresswNV4TDz = await FairStockEquitynujIggH.withdrawBonusCallback.call(addressnL8ZsEg, uintRE78CyJ, uintgbYvgGw, {from: accounts[3]});
//		const uint256tTXWeVo = await FairStockEquitynujIggH.getCostAmount.call(uintzJxXZVQ, {from: accounts[4]});

		await expect(FairStockEquitynujIggH.withdrawBonusCallback.call(addressnL8ZsEg, uintRE78CyJ, uintgbYvgGw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})