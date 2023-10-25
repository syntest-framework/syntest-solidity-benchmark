const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressnqiu6I = accounts[3]
		const addressF615BZJ = "0x0000000000000000000000000000000000000001"
		const addressM6GHtQ = accounts[2]
		const addressxQWI0O8 = accounts[1]
		const uintxdZOmTs = BigInt("13")
		const FairStockEquityRLcPlUR = await FairStockEquity.new(addressnqiu6I, addressF615BZJ, addressM6GHtQ, addressxQWI0O8, uintxdZOmTs, {from: accounts[0]});
		const uintrTBlWle = BigInt("484")
		const uintACMHhNc = BigInt("615")
		const uintYuMQXoV = BigInt("462")
		const addressN1S0MYY = accounts[2]
		const uintDQULZsm = BigInt("778")
		const addressttp0nod = accounts[3]
		await FairStockEquityRLcPlUR.onlyDataSource.call({from: accounts[0]});
		const uint256XYe8j2l = await FairStockEquityRLcPlUR.depositBonus.call(uintrTBlWle, {from: accounts[4]});
		const addressZwYpK1k = await FairStockEquityRLcPlUR.withdrawBonusCallback.call(addressN1S0MYY, uintYuMQXoV, uintACMHhNc, {from: accounts[4]});
		await FairStockEquityRLcPlUR.onlyDataSource.call({from: accounts[0]});
		const addressPiuqtxT = await FairStockEquityRLcPlUR.withdrawLPT.call(addressttp0nod, uintDQULZsm, {from: accounts[2]});

		await expect(FairStockEquityRLcPlUR.onlyDataSource.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressRR93Hw = accounts[0]
		const addressB85CDML = accounts[3]
		const addresszMumt3 = "0x0000000000000000000000000000000000000001"
		const addressZO0RjZr = "0x0000000000000000000000000000000000000001"
		const uintUB8iF6I = BigInt("1351")
		const FairStockEquityaVI2r9 = await FairStockEquity.new(addressRR93Hw, addressB85CDML, addresszMumt3, addressZO0RjZr, uintUB8iF6I, {from: accounts[2]});
		const boolSXEYkRM = true
		const addressP0Is5Lr = accounts[1]
		const uintxqSaEW2 = BigInt("1300")
		const uintmj3S4OZ = BigInt("473")
		const uintjsz0ZrV = BigInt("206")
		const uintLCTpEq = BigInt("1097")
		const uintHwn1BvN = BigInt("1337")
		const uintvwinTgX = BigInt("956")
		const uintePN0Lr5 = BigInt("1855")
		const addressF8branq = await FairStockEquityaVI2r9.setLPT.call(addressP0Is5Lr, boolSXEYkRM, {from: accounts[3]});
		const uint256dieanRK = await FairStockEquityaVI2r9.setDegree.call(uintHwn1BvN, uintLCTpEq, uintjsz0ZrV, uintmj3S4OZ, uintxqSaEW2, {from: accounts[4]});
		await FairStockEquityaVI2r9.withdrawBonus.call({from: accounts[2]});
		const uint256GvBsm0l = await FairStockEquityaVI2r9.setGasFeeForCallback.call(uintvwinTgX, {from: accounts[4]});
		const uint256XBy7xRb = await FairStockEquityaVI2r9.depositBonus.call(uintePN0Lr5, {from: accounts[0]});

		await expect(FairStockEquityaVI2r9.setLPT.call(addressP0Is5Lr, boolSXEYkRM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressovLsxU = accounts[5]
		const addresstUDYJ2h = accounts[3]
		const addressLRaGhoq = accounts[2]
		const addressEhbXOLx = accounts[4]
		const uintK9hw3aW = BigInt("1797")
		const FairStockEquitydiPXgCN = await FairStockEquity.new(addressovLsxU, addresstUDYJ2h, addressLRaGhoq, addressEhbXOLx, uintK9hw3aW, {from: accounts[3]});
		const uintqw3XIGC = BigInt("214")
		const uintKBH1yLu = BigInt("1443")
		const boolay3jXT0 = true
		const addressvHdbBui = accounts[0]
		const uinthMOfrFb = BigInt("606")
		const uintLXOsFX = BigInt("1750")
		const addressBSw4cZ = accounts[1]
		const uintTL6FPTq = BigInt("688")
		const uint256CpXILmC = await FairStockEquitydiPXgCN.setProfitPercentBonus.call(uintqw3XIGC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hYJQEDf = await FairStockEquitydiPXgCN.setProfitPercentPJ.call(uintKBH1yLu, {from: "0x0000000000000000000000000000000000000001"});
		const addresskAloInm = await FairStockEquitydiPXgCN.setLPT.call(addressvHdbBui, boolay3jXT0, {from: accounts[2]});
		const addressj2FTopB = await FairStockEquitydiPXgCN.withdrawBonusCallback.call(addressBSw4cZ, uintLXOsFX, uinthMOfrFb, {from: accounts[3]});
		const uint256b6dXpWe = await FairStockEquitydiPXgCN.setProfitPercentBonus.call(uintTL6FPTq, {from: accounts[2]});

		await expect(FairStockEquitydiPXgCN.setProfitPercentBonus.call(uintqw3XIGC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZjUnYbp = accounts[2]
		const addressf1nuoO1 = "0x0000000000000000000000000000000000000001"
		const addressVDAMxBM = accounts[0]
		const addresst8TuEjj = accounts[1]
		const uintbSGx5H = BigInt("102")
		const FairStockEquityamOjgj = await FairStockEquity.new(addressZjUnYbp, addressf1nuoO1, addressVDAMxBM, addresst8TuEjj, uintbSGx5H, {from: accounts[4]});
		const uintctNGESy = BigInt("276")
		const uintlti7oD = BigInt("150")
		const addressK94aDCb = accounts[2]
		await FairStockEquityamOjgj.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityamOjgj.onlyDataSource.call({from: accounts[4]});
		await FairStockEquityamOjgj.withdrawPJ.call({from: accounts[3]});
		const addressBCu2b4A = await FairStockEquityamOjgj.withdrawBonusCallback.call(addressK94aDCb, uintlti7oD, uintctNGESy, {from: accounts[2]});

		await expect(FairStockEquityamOjgj.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDSRgPGL = accounts[2]
		const addressX7Ii1E7 = accounts[3]
		const addressR9FWxdb = accounts[3]
		const addressAoJcUQh = accounts[2]
		const uintqMbW65w = BigInt("675")
		const FairStockEquityahHBR5W = await FairStockEquity.new(addressDSRgPGL, addressX7Ii1E7, addressR9FWxdb, addressAoJcUQh, uintqMbW65w, {from: accounts[2]});
		const uintmnagOXs = BigInt("1100")
		const addressUSmCuCk = accounts[0]
		const uintQc890tV = BigInt("542")
		const uintjOCPHJE = BigInt("1255")
		const addressGvY50bg = accounts[3]
		const addressmc4XIHP = await FairStockEquityahHBR5W.depositLPT.call(addressUSmCuCk, uintmnagOXs, {from: accounts[5]});
		const uint256XZiEqJu = await FairStockEquityahHBR5W.getCostAmount.call(uintQc890tV, {from: accounts[3]});
		await FairStockEquityahHBR5W.f.call({from: "0x0000000000000000000000000000000000000001"});
		const addressSlniyHz = await FairStockEquityahHBR5W.depositLPT.call(addressGvY50bg, uintjOCPHJE, {from: accounts[2]});

		await expect(FairStockEquityahHBR5W.depositLPT.call(addressUSmCuCk, uintmnagOXs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressCO7bmi = accounts[2]
		const addressyyi1fC9 = accounts[1]
		const addresst3lgFKY = "0x0000000000000000000000000000000000000001"
		const addresskvydO8P = accounts[5]
		const uintfijLT8J = BigInt("1222")
		const FairStockEquityACnpBNM = await FairStockEquity.new(addressCO7bmi, addressyyi1fC9, addresst3lgFKY, addresskvydO8P, uintfijLT8J, {from: accounts[1]});
		const uintIq1mA1T = BigInt("1789")
		const uintPZCS6GR = BigInt("551")
		const addressQrU7AZO = accounts[3]
		const uintikhpRCS = BigInt("815")
		const uintfncgQJ7 = BigInt("1899")
		const addressDk3hBKo = await FairStockEquityACnpBNM.withdrawBonusCallback.call(addressQrU7AZO, uintPZCS6GR, uintIq1mA1T, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oeyR5y6 = await FairStockEquityACnpBNM.setProfitPercentPJ.call(uintikhpRCS, {from: accounts[2]});
		await FairStockEquityACnpBNM.withdrawBonus.call({from: accounts[2]});
		const uint256Vr3wdc0 = await FairStockEquityACnpBNM.setProfitPercentBonus.call(uintfncgQJ7, {from: accounts[0]});
		await FairStockEquityACnpBNM.withdrawBonus.call({from: accounts[3]});

		await expect(FairStockEquityACnpBNM.withdrawBonusCallback.call(addressQrU7AZO, uintPZCS6GR, uintIq1mA1T, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNOzNJdX = accounts[3]
		const addressgkExDGY = accounts[1]
		const addressfXdBEU6 = accounts[3]
		const addressX2RfyAy = accounts[0]
		const uintaXSNGwB = BigInt("1650")
		const FairStockEquitycGpiHqh = await FairStockEquity.new(addressNOzNJdX, addressgkExDGY, addressfXdBEU6, addressX2RfyAy, uintaXSNGwB, {from: accounts[4]});
		const uintJwmzO2t = BigInt("866")
		const uintLmbg1CK = BigInt("1283")
		const uintOlm4yh5 = BigInt("745")
		const addressfucPVJc = accounts[1]
		const uintmhAlQJH = BigInt("398")
		const uint256BoX66KM = await FairStockEquitycGpiHqh.depositBonus.call(uintJwmzO2t, {from: accounts[1]});
		const addressatZ0p23 = await FairStockEquitycGpiHqh.withdrawBonusCallback.call(addressfucPVJc, uintOlm4yh5, uintLmbg1CK, {from: accounts[3]});
		await FairStockEquitycGpiHqh.withdrawPJ.call({from: accounts[1]});
		const uint256HXkqKBZ = await FairStockEquitycGpiHqh.setStartTime.call(uintmhAlQJH, {from: accounts[2]});
		await FairStockEquitycGpiHqh.withdrawBonus.call({from: accounts[4]});

		await expect(FairStockEquitycGpiHqh.depositBonus.call(uintJwmzO2t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressWYdTVnl = accounts[0]
		const addressIM8XSAo = accounts[5]
		const addressyVnxFql = accounts[4]
		const addressWW90HaB = accounts[1]
		const uinta1Vwgnj = BigInt("1440")
		const FairStockEquityQUzMYP6 = await FairStockEquity.new(addressWYdTVnl, addressIM8XSAo, addressyVnxFql, addressWW90HaB, uinta1Vwgnj, {from: accounts[5]});
		const uintGO1KNk4 = BigInt("68")
		const uintHkfcOxM = BigInt("953")
		const uint256nMZNLHv = await FairStockEquityQUzMYP6.invest.call(uintGO1KNk4, {from: accounts[2]});
		const uint256RRbMRHG = await FairStockEquityQUzMYP6.setProfitPercentMT.call(uintHkfcOxM, {from: accounts[4]});

		await expect(FairStockEquityQUzMYP6.invest.call(uintGO1KNk4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressITaM6ay = accounts[0]
		const addresszdQVWKf = accounts[5]
		const addressCn0rAEO = accounts[4]
		const addressiewnaf9 = accounts[1]
		const uintyuAxQ41 = BigInt("1440")
		const FairStockEquityQUzMYP6 = await FairStockEquity.new(addressITaM6ay, addresszdQVWKf, addressCn0rAEO, addressiewnaf9, uintyuAxQ41, {from: accounts[5]});
		const uintJUo6XOZ = BigInt("1554")
		const uintSOrrYMs = BigInt("953")
		const uint256jzZ7ngv = await FairStockEquityQUzMYP6.reduceShare.call(uintJUo6XOZ, {from: accounts[1]});
		const uint256RRbMRHG = await FairStockEquityQUzMYP6.setProfitPercentMT.call(uintSOrrYMs, {from: accounts[4]});

		await expect(FairStockEquityQUzMYP6.reduceShare.call(uintJUo6XOZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxnZpkg = accounts[2]
		const addressgMyqrj2 = "0x0000000000000000000000000000000000000001"
		const addressifqauqf = accounts[2]
		const addressoD34jAd = accounts[3]
		const uintC6Lkd5e = BigInt("384")
		const FairStockEquityQcimaQj = await FairStockEquity.new(addressxnZpkg, addressgMyqrj2, addressifqauqf, addressoD34jAd, uintC6Lkd5e, {from: accounts[3]});
		const uintiDa317x = BigInt("1235")
		const addressyLRP27 = accounts[3]
		const uintnot67Tq = BigInt("1754")
		const addressOA1fHxz = await FairStockEquityQcimaQj.withdrawLPT.call(addressyLRP27, uintiDa317x, {from: accounts[4]});
		const uint256Uf5Nj24 = await FairStockEquityQcimaQj.setStartTime.call(uintnot67Tq, {from: accounts[2]});
		await FairStockEquityQcimaQj.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityQcimaQj.withdrawBonus.call({from: accounts[0]});

		await expect(FairStockEquityQcimaQj.withdrawLPT.call(addressyLRP27, uintiDa317x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressL5uSyTB = accounts[0]
		const addressgm7lVtH = accounts[5]
		const addressOQGvgMl = accounts[4]
		const addresssvi6g3u = accounts[1]
		const uintcJOsdMA = BigInt("1440")
		const FairStockEquityQUzMYP6 = await FairStockEquity.new(addressL5uSyTB, addressgm7lVtH, addressOQGvgMl, addresssvi6g3u, uintcJOsdMA, {from: accounts[5]});
		const uinthVEBuAx = BigInt("433")
		const uintR1GOg8K = BigInt("1697")
		const uintSfgyHKz = BigInt("953")
		const uint256Fx6AlkF = await FairStockEquityQUzMYP6.setStartTime.call(uinthVEBuAx, {from: accounts[5]});
		const uint256RJ98MXb = await FairStockEquityQUzMYP6.setStartTime.call(uintR1GOg8K, {from: accounts[5]});
		const uint256RRbMRHG = await FairStockEquityQUzMYP6.setProfitPercentMT.call(uintSfgyHKz, {from: accounts[4]});
		await FairStockEquityQUzMYP6.withdrawPJ.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityQUzMYP6.setStartTime.call(uinthVEBuAx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuHJTHv = accounts[0]
		const addressMX2uNRQ = accounts[5]
		const addressNgoVlWd = accounts[4]
		const addressehdSCc = accounts[1]
		const uintxVsTIGc = BigInt("1440")
		const FairStockEquityQUzMYP6 = await FairStockEquity.new(addressuHJTHv, addressMX2uNRQ, addressNgoVlWd, addressehdSCc, uintxVsTIGc, {from: accounts[5]});
		const uintNVNnAd = BigInt("947")
		await FairStockEquityQUzMYP6.withdrawMT.call({from: accounts[1]});
		const uint256RRbMRHG = await FairStockEquityQUzMYP6.setProfitPercentMT.call(uintNVNnAd, {from: accounts[4]});

		await expect(FairStockEquityQUzMYP6.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTixtoDx = accounts[0]
		const addressjuPrKfn = accounts[5]
		const addressvWDCatr = accounts[4]
		const addressAYCsi2l = accounts[1]
		const uintnyNbpw8 = BigInt("1440")
		const FairStockEquityQUzMYP6 = await FairStockEquity.new(addressTixtoDx, addressjuPrKfn, addressvWDCatr, addressAYCsi2l, uintnyNbpw8, {from: accounts[5]});
		const uintYAvHfke = BigInt("42")
		const uintQA6eWrl = BigInt("44")
		await FairStockEquityQUzMYP6.f.call({from: accounts[5]});
		const uint256nMZNLHv = await FairStockEquityQUzMYP6.invest.call(uintYAvHfke, {from: accounts[2]});
		const uint256sNFzbc = await FairStockEquityQUzMYP6.setProfitPercentBonus.call(uintQA6eWrl, {from: accounts[4]});

		await expect(FairStockEquityQUzMYP6.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstZcoFjr = accounts[0]
		const addressdgf7XBF = accounts[5]
		const addressSqfgYW = accounts[4]
		const addressxzE2NnM = accounts[1]
		const uintpCkriru = BigInt("1440")
		const FairStockEquityQUzMYP6 = await FairStockEquity.new(addresstZcoFjr, addressdgf7XBF, addressSqfgYW, addressxzE2NnM, uintpCkriru, {from: accounts[5]});
		const uintFQOzbBX = BigInt("472")
		const uintxdMhHZw = BigInt("896")
		const addressOVcznZw = "0x0000000000000000000000000000000000000001"
		const uintj1bqgT = BigInt("802")
		const uintr81Rv0T = BigInt("1466")
		const addressG5A4AcQ = accounts[4]
		const uintD75Aggq = BigInt("23")
		const uintUUH5Eis = BigInt("9")
		const addressXwkhTHH = await FairStockEquityQUzMYP6.withdrawBonusCallback.call(addressOVcznZw, uintxdMhHZw, uintFQOzbBX, {from: accounts[1]});
		const addressDDSj2kP = await FairStockEquityQUzMYP6.withdrawBonusCallback.call(addressG5A4AcQ, uintr81Rv0T, uintj1bqgT, {from: accounts[0]});
		const uint256nMZNLHv = await FairStockEquityQUzMYP6.invest.call(uintD75Aggq, {from: accounts[2]});
		const uint256IqnSV4r = await FairStockEquityQUzMYP6.setStartTime.call(uintUUH5Eis, {from: accounts[4]});

		await expect(FairStockEquityQUzMYP6.withdrawBonusCallback.call(addressOVcznZw, uintxdMhHZw, uintFQOzbBX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address5e5hL2 = accounts[0]
		const addressanqtN8l = accounts[5]
		const addressCjXu8jW = accounts[4]
		const addressT3H7Oem = accounts[1]
		const uintRSdqOcR = BigInt("1440")
		const FairStockEquityQUzMYP6 = await FairStockEquity.new(address5e5hL2, addressanqtN8l, addressCjXu8jW, addressT3H7Oem, uintRSdqOcR, {from: accounts[5]});
		const uintPpqWdW9 = BigInt("1858")
		const uintmIuF628 = BigInt("1754")
		const uintki9SU6q = BigInt("615")
		const uintuuCMhYL = BigInt("1626")
		const addressp6azDRR = accounts[2]
		const uintXPProz2 = BigInt("72")
		const uintFiAvgir = BigInt("627")
		const addressXLkVmD1 = await FairStockEquityQUzMYP6.business.call(addressp6azDRR, uintuuCMhYL, uintki9SU6q, uintmIuF628, uintPpqWdW9, {from: accounts[1]});
		const uint256nMZNLHv = await FairStockEquityQUzMYP6.invest.call(uintXPProz2, {from: accounts[2]});
		const uint256v5kRNhM = await FairStockEquityQUzMYP6.setProfitPercentPJ.call(uintFiAvgir, {from: accounts[3]});

		await expect(FairStockEquityQUzMYP6.business.call(addressp6azDRR, uintuuCMhYL, uintki9SU6q, uintmIuF628, uintPpqWdW9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressX6amlhC = accounts[4]
		const addressSIwIsBx = accounts[2]
		const addressLzSuF6s = accounts[2]
		const addressCmsa3UM = accounts[3]
		const uinte1eEcen = BigInt("2025")
		const FairStockEquityrPWwy13 = await FairStockEquity.new(addressX6amlhC, addressSIwIsBx, addressLzSuF6s, addressCmsa3UM, uinte1eEcen, {from: "0x0000000000000000000000000000000000000001"});
		const uintvHSx9io = BigInt("1428")
		const uinttjkixDJ = BigInt("388")
		const uintIu91GuX = BigInt("1400")
		const uintJXxMgLs = BigInt("1395")
		const addressRsO5AI6 = accounts[1]
		const uints0hujY = BigInt("933")
		const addressP9rD0xj = accounts[2]
		const addressVp7MXj4 = await FairStockEquityrPWwy13.business.call(addressRsO5AI6, uintJXxMgLs, uintIu91GuX, uinttjkixDJ, uintvHSx9io, {from: accounts[2]});
		const addressO6rvCoY = await FairStockEquityrPWwy13.withdrawLPT.call(addressP9rD0xj, uints0hujY, {from: accounts[0]});
	});

	it('test for FairStockEquity', async () => {
		const addressxam8LrN = accounts[0]
		const addressH5OkMWe = accounts[5]
		const addressX7QQlyT = accounts[4]
		const addressSsbu4fI = accounts[1]
		const uintYEgzqcf = BigInt("1440")
		const FairStockEquityQUzMYP6 = await FairStockEquity.new(addressxam8LrN, addressH5OkMWe, addressX7QQlyT, addressSsbu4fI, uintYEgzqcf, {from: accounts[5]});
		const uint6MS9sK = BigInt("690")
		const uintzDzRIFB = BigInt("742")
		const addressqmwoFsf = accounts[3]
		const uintc30tE8j = BigInt("985")
		const addressYi1R9xq = await FairStockEquityQUzMYP6.withdrawMTCallback.call(addressqmwoFsf, uintzDzRIFB, uint6MS9sK, {from: accounts[1]});
		const uint256RRbMRHG = await FairStockEquityQUzMYP6.setProfitPercentMT.call(uintc30tE8j, {from: accounts[4]});

		await expect(FairStockEquityQUzMYP6.withdrawMTCallback.call(addressqmwoFsf, uintzDzRIFB, uint6MS9sK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressh4N6kQ = accounts[0]
		const addressZ2APsxQ = accounts[5]
		const addressXCI7vLB = accounts[4]
		const addressC2Gezsv = accounts[1]
		const uinthCMdaBS = BigInt("1440")
		const FairStockEquityQUzMYP6 = await FairStockEquity.new(addressh4N6kQ, addressZ2APsxQ, addressXCI7vLB, addressC2Gezsv, uinthCMdaBS, {from: accounts[5]});
		const uintBbagI8T = BigInt("987")
		await FairStockEquityQUzMYP6.withdrawPJ.call({from: accounts[5]});
		const uint256RRbMRHG = await FairStockEquityQUzMYP6.setProfitPercentMT.call(uintBbagI8T, {from: accounts[4]});

		await expect(FairStockEquityQUzMYP6.withdrawPJ.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresskZONXOT = accounts[3]
		const addressU6TMVPT = accounts[1]
		const addressEth00bE = accounts[2]
		const addressVIHqlq = accounts[5]
		const uintlaH34Db = BigInt("941")
		const FairStockEquityxb2FvM2 = await FairStockEquity.new(addresskZONXOT, addressU6TMVPT, addressEth00bE, addressVIHqlq, uintlaH34Db, {from: accounts[0]});
		const uintcrykQE = BigInt("160")
		const uintek8pMqD = BigInt("749")
		const addressCQcsVIt = accounts[4]
		const uintt45Gn4 = BigInt("672")
		const addressWNJltrI = accounts[0]
		const boolcB1RAie = false
		const addressDJzy0MZ = accounts[1]
		const addressnABEI6O = await FairStockEquityxb2FvM2.setModule.call(addressCQcsVIt, uintek8pMqD, uintcrykQE, {from: accounts[0]});
		const addressaSIdk3N = await FairStockEquityxb2FvM2.withdrawLPT.call(addressWNJltrI, uintt45Gn4, {from: accounts[1]});
		const addressosxzFDR = await FairStockEquityxb2FvM2.setLPT.call(addressDJzy0MZ, boolcB1RAie, {from: accounts[1]});

		await expect(FairStockEquityxb2FvM2.withdrawLPT.call(addressWNJltrI, uintt45Gn4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})