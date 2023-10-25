const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressWyi0JgH = accounts[4]
		const addressf5KNoh = accounts[0]
		const addressL0nQpYl = accounts[5]
		const addressKA7YHQl = accounts[0]
		const uinth99pCr1 = BigInt("1068")
		const FairStockEquityA693jrl = await FairStockEquity.new(addressWyi0JgH, addressf5KNoh, addressL0nQpYl, addressKA7YHQl, uinth99pCr1, {from: accounts[4]});
		const boolXphi85d = true
		const addresscLPblzi = accounts[1]
		const addressZ9Y9o8V = await FairStockEquityA693jrl.setLPT.call(addresscLPblzi, boolXphi85d, {from: accounts[5]});
		await FairStockEquityA693jrl.f.call({from: accounts[5]});
		await FairStockEquityA693jrl.checkStart.call({from: accounts[0]});

		await expect(FairStockEquityA693jrl.setLPT.call(addresscLPblzi, boolXphi85d, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrIOCfd = accounts[1]
		const addressBFQWqZW = accounts[4]
		const addressbkfeJb = accounts[2]
		const addressTfL54T5 = "0x0000000000000000000000000000000000000001"
		const uintYeNLv69 = BigInt("952")
		const FairStockEquityb94Mr8p = await FairStockEquity.new(addressrIOCfd, addressBFQWqZW, addressbkfeJb, addressTfL54T5, uintYeNLv69, {from: accounts[3]});
		const uintGgivFU8 = BigInt("910")
		const uintEVtYrJL = BigInt("2013")
		const uintOk6852t = BigInt("167")
		const uintfC1Xndt = BigInt("621")
		const addressPNtNqH = "0x0000000000000000000000000000000000000001"
		const uintQ5LYwDK = BigInt("2026")
		const addressob2rVz = "0x0000000000000000000000000000000000000001"
		const uintTWe290p = BigInt("1903")
		const uintpybIwu5 = BigInt("1423")
		const uintMzP50qS = BigInt("277")
		const uintM76Qr08 = BigInt("1819")
		const uintcZEyR39 = BigInt("634")
		const boolBgghW6 = true
		const addressGfZ0Az = accounts[5]
		const uintnNbcV6O = BigInt("1749")
		const addressfvXqKHI = await FairStockEquityb94Mr8p.business.call(addressPNtNqH, uintfC1Xndt, uintOk6852t, uintEVtYrJL, uintGgivFU8, {from: accounts[2]});
		const addresscM7kY6U = await FairStockEquityb94Mr8p.depositLPT.call(addressob2rVz, uintQ5LYwDK, {from: accounts[0]});
		const uint256XfIMVzO = await FairStockEquityb94Mr8p.setDegree.call(uintcZEyR39, uintM76Qr08, uintMzP50qS, uintpybIwu5, uintTWe290p, {from: accounts[4]});
		await FairStockEquityb94Mr8p.withdrawBonus.call({from: accounts[1]});
		const addressAMdhien = await FairStockEquityb94Mr8p.setLPT.call(addressGfZ0Az, boolBgghW6, {from: accounts[1]});
		const uint256i7u2p2t = await FairStockEquityb94Mr8p.getCostAmount.call(uintnNbcV6O, {from: accounts[3]});

		await expect(FairStockEquityb94Mr8p.business.call(addressPNtNqH, uintfC1Xndt, uintOk6852t, uintEVtYrJL, uintGgivFU8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressn6XfxY5 = accounts[1]
		const addresscaMTrr = "0x0000000000000000000000000000000000000001"
		const address7M5aXn = accounts[2]
		const addressXrt6sF = accounts[5]
		const uintXzOCPyP = BigInt("1235")
		const FairStockEquityFRSf4hV = await FairStockEquity.new(addressn6XfxY5, addresscaMTrr, address7M5aXn, addressXrt6sF, uintXzOCPyP, {from: accounts[4]});
		const uintogCUgOO = BigInt("692")
		const boolBfzSU45 = true
		const addressqrNiSwn = accounts[4]
		const uintLBYo33C = BigInt("1013")
		const uintAh57AWu = BigInt("29")
		const addressETXxRlK = accounts[2]
		const uint256kaCYpbN = await FairStockEquityFRSf4hV.getCostAmount.call(uintogCUgOO, {from: accounts[0]});
		const addressmFAQJwn = await FairStockEquityFRSf4hV.setLPT.call(addressqrNiSwn, boolBfzSU45, {from: accounts[1]});
		const uint256aGl4v1k = await FairStockEquityFRSf4hV.invest.call(uintLBYo33C, {from: accounts[2]});
		const addressFoE61Uz = await FairStockEquityFRSf4hV.depositLPT.call(addressETXxRlK, uintAh57AWu, {from: accounts[4]});

		await expect(FairStockEquityFRSf4hV.setLPT.call(addressqrNiSwn, boolBfzSU45, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrZWgPaH = accounts[4]
		const addressyoYqLoY = accounts[5]
		const addressKfkY4hw = accounts[4]
		const addressVPKFsT = accounts[3]
		const uintaeE1YoY = BigInt("1494")
		const FairStockEquityYS5mPM = await FairStockEquity.new(addressrZWgPaH, addressyoYqLoY, addressKfkY4hw, addressVPKFsT, uintaeE1YoY, {from: accounts[0]});
		const uintbQjEzZF = BigInt("1117")
		const addressl8NQIaU = accounts[4]
		const uintayisGeA = BigInt("1376")
		const uintLlB6xQQ = BigInt("872")
		const addressepJS2Az = accounts[1]
		const uintA3fyXoM = BigInt("1437")
		const uintWNTeQKj = BigInt("387")
		const addressNxlswwO = await FairStockEquityYS5mPM.withdrawLPT.call(addressl8NQIaU, uintbQjEzZF, {from: accounts[1]});
		const addressBiMf0HT = await FairStockEquityYS5mPM.withdrawMTCallback.call(addressepJS2Az, uintLlB6xQQ, uintayisGeA, {from: accounts[0]});
		const uint256fpmVwO = await FairStockEquityYS5mPM.setProfitPercentBonus.call(uintA3fyXoM, {from: accounts[4]});
		await FairStockEquityYS5mPM.withdrawPJ.call({from: accounts[2]});
		await FairStockEquityYS5mPM.withdrawPJ.call({from: accounts[0]});
		const uint256GfB5QAJ = await FairStockEquityYS5mPM.depositBonus.call(uintWNTeQKj, {from: accounts[0]});

		await expect(FairStockEquityYS5mPM.withdrawLPT.call(addressl8NQIaU, uintbQjEzZF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressVwKAdUq = accounts[2]
		const addressxea3qik = accounts[2]
		const address6Ihsfx = accounts[2]
		const addressk2wA8NF = accounts[4]
		const uintTsNSYb2 = BigInt("1909")
		const FairStockEquityGLZD8hd = await FairStockEquity.new(addressVwKAdUq, addressxea3qik, address6Ihsfx, addressk2wA8NF, uintTsNSYb2, {from: accounts[1]});
		await FairStockEquityGLZD8hd.checkStart.call({from: accounts[4]});
		await FairStockEquityGLZD8hd.withdrawPJ.call({from: accounts[2]});

		await expect(FairStockEquityGLZD8hd.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmZbdQ2g = accounts[0]
		const addresshEZwnl = accounts[3]
		const addressy6MuVmV = accounts[3]
		const addressojqY6eu = "0x0000000000000000000000000000000000000001"
		const uintQJ4F5uN = BigInt("1003")
		const FairStockEquityhuBdPt9 = await FairStockEquity.new(addressmZbdQ2g, addresshEZwnl, addressy6MuVmV, addressojqY6eu, uintQJ4F5uN, {from: accounts[3]});
		const uintsiwxRt3 = BigInt("1646")
		const uinthTrxX44 = BigInt("1945")
		await FairStockEquityhuBdPt9.withdrawBonus.call({from: accounts[2]});
		const uint256JORDkwZ = await FairStockEquityhuBdPt9.setProfitPercentBonus.call(uintsiwxRt3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GEBFNgV = await FairStockEquityhuBdPt9.bonus.call(uinthTrxX44, {from: accounts[0]});

		await expect(FairStockEquityhuBdPt9.withdrawBonus.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjhCcKBf = accounts[2]
		const addressgH9r0ju = accounts[0]
		const addressRN9z32U = accounts[4]
		const addressYYL5tPP = accounts[4]
		const uintWIB5S8S = BigInt("408")
		const FairStockEquityfVHxCP = await FairStockEquity.new(addressjhCcKBf, addressgH9r0ju, addressRN9z32U, addressYYL5tPP, uintWIB5S8S, {from: accounts[1]});
		const uintSeCW2UR = BigInt("705")
		const uint2ltWg5 = BigInt("384")
		const uintuWnkwAC = BigInt("283")
		const addressIbTv4Oa = "0x0000000000000000000000000000000000000001"
		const uint256yW8VVuy = await FairStockEquityfVHxCP.setProfitPercentBonus.call(uintSeCW2UR, {from: "0x0000000000000000000000000000000000000001"});
		const addressJaN2H4J = await FairStockEquityfVHxCP.setModule.call(addressIbTv4Oa, uintuWnkwAC, uint2ltWg5, {from: accounts[3]});

		await expect(FairStockEquityfVHxCP.setProfitPercentBonus.call(uintSeCW2UR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszCRD1YQ = "0x0000000000000000000000000000000000000001"
		const addressKSQg0d = "0x0000000000000000000000000000000000000001"
		const addressgKGc3DP = accounts[3]
		const addressSLacqn1 = accounts[1]
		const uintIPyypuP = BigInt("714")
		const FairStockEquityNII6xTX = await FairStockEquity.new(addresszCRD1YQ, addressKSQg0d, addressgKGc3DP, addressSLacqn1, uintIPyypuP, {from: accounts[4]});
		const uintKPmVDLb = BigInt("139")
		const uintZsZF4ao = BigInt("644")
		const uintn58fRmQ = BigInt("313")
		const uintcwokwh = BigInt("990")
		const uintjtJagHV = BigInt("469")
		const addressQjreFC = accounts[5]
		const uintDe1rLUm = BigInt("1661")
		const uintNgY0RHe = BigInt("2045")
		const addressxpka3n = accounts[2]
		await FairStockEquityNII6xTX.withdrawMT.call({from: accounts[3]});
		const uint256uCJWID = await FairStockEquityNII6xTX.getCostAmount.call(uintKPmVDLb, {from: accounts[0]});
		await FairStockEquityNII6xTX.withdrawPJ.call({from: accounts[2]});
		const addresssThZnN = await FairStockEquityNII6xTX.business.call(addressQjreFC, uintjtJagHV, uintcwokwh, uintn58fRmQ, uintZsZF4ao, {from: accounts[2]});
		const addressad3zA8 = await FairStockEquityNII6xTX.withdrawMTCallback.call(addressxpka3n, uintNgY0RHe, uintDe1rLUm, {from: accounts[0]});

		await expect(FairStockEquityNII6xTX.withdrawMT.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZxoMV4Y = accounts[1]
		const addressAG8FQii = accounts[4]
		const addressBJFevPX = accounts[2]
		const addressIyhbAvL = "0x0000000000000000000000000000000000000001"
		const uintAHFkouF = BigInt("952")
		const FairStockEquityb94Mr8p = await FairStockEquity.new(addressZxoMV4Y, addressAG8FQii, addressBJFevPX, addressIyhbAvL, uintAHFkouF, {from: accounts[3]});
		const uintgDNI2e4 = BigInt("777")
		const uintE3wJdB1 = BigInt("1363")
		const uintaqBJkI = BigInt("910")
		const uint75IaZh = BigInt("2013")
		const uintYaB3B0z = BigInt("167")
		const uintETPAsQi = BigInt("621")
		const addressUM1inAb = "0x0000000000000000000000000000000000000001"
		const uintNzJOjZb = BigInt("2002")
		const addressQzmaOku = "0x0000000000000000000000000000000000000001"
		const uintZGK1vIr = BigInt("1903")
		const uintpDWDFxa = BigInt("1423")
		const uintmgXmsuS = BigInt("277")
		const uintyVC159 = BigInt("1819")
		const uintXlHsLNb = BigInt("634")
		const boolBgghW6 = true
		const addresssYVv7Kp = accounts[5]
		const uintW6hB2E = BigInt("1749")
		const uint256PRhwyyc = await FairStockEquityb94Mr8p.setStartTime.call(uintgDNI2e4, {from: accounts[3]});
		const uint256Vv1RB1w = await FairStockEquityb94Mr8p.getCostAmount.call(uintE3wJdB1, {from: accounts[1]});
		const addressfvXqKHI = await FairStockEquityb94Mr8p.business.call(addressUM1inAb, uintETPAsQi, uintYaB3B0z, uint75IaZh, uintaqBJkI, {from: accounts[2]});
		const addresscM7kY6U = await FairStockEquityb94Mr8p.depositLPT.call(addressQzmaOku, uintNzJOjZb, {from: accounts[0]});
		const uint256XfIMVzO = await FairStockEquityb94Mr8p.setDegree.call(uintXlHsLNb, uintyVC159, uintmgXmsuS, uintpDWDFxa, uintZGK1vIr, {from: accounts[4]});
		await FairStockEquityb94Mr8p.withdrawBonus.call({from: accounts[1]});
		const addressAMdhien = await FairStockEquityb94Mr8p.setLPT.call(addresssYVv7Kp, boolBgghW6, {from: accounts[1]});
		const uint256i7u2p2t = await FairStockEquityb94Mr8p.getCostAmount.call(uintW6hB2E, {from: accounts[3]});

		await expect(FairStockEquityb94Mr8p.setStartTime.call(uintgDNI2e4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresse0EFOp1 = accounts[1]
		const addressEfENFng = "0x0000000000000000000000000000000000000001"
		const addressU9uwt7P = accounts[2]
		const addressrbiDwjo = accounts[5]
		const uintRcZdT50 = BigInt("1235")
		const FairStockEquityFRSf4hV = await FairStockEquity.new(addresse0EFOp1, addressEfENFng, addressU9uwt7P, addressrbiDwjo, uintRcZdT50, {from: accounts[4]});
		const uintzLp1eC = BigInt("692")
		const uintYzfkn87 = BigInt("110")
		const uintser6hvR = BigInt("147")
		const boolBfzSU45 = true
		const addressx69jwNi = accounts[4]
		const uintDKFtkPs = BigInt("1007")
		const uintkZznlUQ = BigInt("29")
		const addressGC6bEhS = accounts[2]
		const uint256kaCYpbN = await FairStockEquityFRSf4hV.getCostAmount.call(uintzLp1eC, {from: accounts[0]});
		const uint256gtGe30o = await FairStockEquityFRSf4hV.invest.call(uintYzfkn87, {from: accounts[4]});
		await FairStockEquityFRSf4hV.withdrawMT.call({from: accounts[4]});
		const uint256vnfBOU7 = await FairStockEquityFRSf4hV.setGasFeeForCallback.call(uintser6hvR, {from: accounts[4]});
		const addressmFAQJwn = await FairStockEquityFRSf4hV.setLPT.call(addressx69jwNi, boolBfzSU45, {from: accounts[1]});
		const uint256aGl4v1k = await FairStockEquityFRSf4hV.invest.call(uintDKFtkPs, {from: accounts[2]});
		const addressFoE61Uz = await FairStockEquityFRSf4hV.depositLPT.call(addressGC6bEhS, uintkZznlUQ, {from: accounts[4]});

		await expect(FairStockEquityFRSf4hV.invest.call(uintYzfkn87, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressolMGrLN = accounts[5]
		const addressgB0s2Wn = accounts[4]
		const addressfabSbU2 = accounts[3]
		const addresskEaAL9B = accounts[4]
		const uintIJDeES0 = BigInt("1435")
		const FairStockEquityQOiekVs = await FairStockEquity.new(addressolMGrLN, addressgB0s2Wn, addressfabSbU2, addresskEaAL9B, uintIJDeES0, {from: accounts[4]});
		const boolWX8NAhU = true
		const addressEzoxhWV = accounts[4]
		const uintFyOx5Pr = BigInt("314")
		const uintOd9G0fG = BigInt("139")
		const uintgwMBKwY = BigInt("506")
		const addressZu4VDx9 = accounts[1]
		const address9mBsWJ = await FairStockEquityQOiekVs.setLPT.call(addressEzoxhWV, boolWX8NAhU, {from: accounts[4]});
		const uint256cTUr2MP = await FairStockEquityQOiekVs.reduceShare.call(uintFyOx5Pr, {from: accounts[2]});
		const addresspgDSabb = await FairStockEquityQOiekVs.withdrawBonusCallback.call(addressZu4VDx9, uintgwMBKwY, uintOd9G0fG, {from: accounts[3]});

		await expect(FairStockEquityQOiekVs.reduceShare.call(uintFyOx5Pr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdxesHKd = accounts[1]
		const addressGb0ltkq = "0x0000000000000000000000000000000000000001"
		const addressmI0QPog = accounts[2]
		const addressLwLS88g = accounts[5]
		const uintX70n5fl = BigInt("1235")
		const FairStockEquityFRSf4hV = await FairStockEquity.new(addressdxesHKd, addressGb0ltkq, addressmI0QPog, addressLwLS88g, uintX70n5fl, {from: accounts[4]});
		const uintisOUkTI = BigInt("692")
		const uintbqHRluN = BigInt("1112")
		const addressv9EoDtb = accounts[0]
		const boolBfzSU45 = false
		const addresspXFugLC = accounts[4]
		const uintmBR1bL0 = BigInt("950")
		const uintRqBL9y9 = BigInt("1013")
		const uintwjH7lyI = BigInt("29")
		const addressyKDlNxf = accounts[2]
		const uint256kaCYpbN = await FairStockEquityFRSf4hV.getCostAmount.call(uintisOUkTI, {from: accounts[0]});
		const addressB13e6A = await FairStockEquityFRSf4hV.depositLPT.call(addressv9EoDtb, uintbqHRluN, {from: "0x0000000000000000000000000000000000000001"});
		const addressmFAQJwn = await FairStockEquityFRSf4hV.setLPT.call(addresspXFugLC, boolBfzSU45, {from: accounts[1]});
		const uint256ccJsEHt = await FairStockEquityFRSf4hV.setStartTime.call(uintmBR1bL0, {from: accounts[1]});
		const uint256aGl4v1k = await FairStockEquityFRSf4hV.invest.call(uintRqBL9y9, {from: accounts[2]});
		await FairStockEquityFRSf4hV.withdrawPJ.call({from: accounts[3]});
		const addressFoE61Uz = await FairStockEquityFRSf4hV.depositLPT.call(addressyKDlNxf, uintwjH7lyI, {from: accounts[4]});

		await expect(FairStockEquityFRSf4hV.depositLPT.call(addressv9EoDtb, uintbqHRluN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDzMdEYM = accounts[1]
		const addresssacqb0d = accounts[2]
		const addressyEKGKY2 = accounts[3]
		const addresslz30att = "0x0000000000000000000000000000000000000001"
		const uintWY0ydo2 = BigInt("249")
		const FairStockEquityem1aJHI = await FairStockEquity.new(addressDzMdEYM, addresssacqb0d, addressyEKGKY2, addresslz30att, uintWY0ydo2, {from: accounts[5]});
		const uintEsLWnTa = BigInt("1661")
		const uintMXES6W = BigInt("696")
		const uintPkzgPxL = BigInt("892")
		const uinteWg9TZC = BigInt("120")
		const addressZHzilP0 = accounts[2]
		const uintxC6LIUx = BigInt("212")
		const addressdd1d7iX = accounts[3]
		const uint256X5Op9b4 = await FairStockEquityem1aJHI.getCostAmount.call(uintEsLWnTa, {from: accounts[0]});
		const uint256oKMe61W = await FairStockEquityem1aJHI.bonus.call(uintMXES6W, {from: accounts[0]});
		const addressCtAwZ2 = await FairStockEquityem1aJHI.setModule.call(addressZHzilP0, uinteWg9TZC, uintPkzgPxL, {from: accounts[4]});
		const addressye1KXbh = await FairStockEquityem1aJHI.withdrawLPT.call(addressdd1d7iX, uintxC6LIUx, {from: accounts[1]});

		await expect(FairStockEquityem1aJHI.bonus.call(uintMXES6W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressRUpzvTX = accounts[1]
		const addressIUmLS28 = "0x0000000000000000000000000000000000000001"
		const addresszbf0ep = accounts[2]
		const addressuVmzHKU = accounts[5]
		const uintJwQzQEn = BigInt("1235")
		const FairStockEquityFRSf4hV = await FairStockEquity.new(addressRUpzvTX, addressIUmLS28, addresszbf0ep, addressuVmzHKU, uintJwQzQEn, {from: accounts[4]});
		const uintkyz60Og = BigInt("541")
		const uintfOIvN8e = BigInt("704")
		const uintm6AGKz = BigInt("1732")
		const addressP3mzY7 = accounts[4]
		const uintOLLJeRH = BigInt("1867")
		const uints6zyKDj = BigInt("1793")
		const uintrl2g0JK = BigInt("1399")
		const uintmTdkyB = BigInt("506")
		const addressrrMcT3o = accounts[3]
		const uintf9qsPo7 = BigInt("692")
		const uintATdzaSq = BigInt("110")
		const uintczqSHz5 = BigInt("147")
		const uintqUnuv1C = BigInt("983")
		const uintZhj0Iua = BigInt("29")
		const addressJEY4Wx5 = accounts[1]
		const uint256MpPXHCy = await FairStockEquityFRSf4hV.getCostAmount.call(uintkyz60Og, {from: accounts[1]});
		const addressImEkZ4 = await FairStockEquityFRSf4hV.withdrawMTCallback.call(addressP3mzY7, uintm6AGKz, uintfOIvN8e, {from: accounts[5]});
		const addressXPhrmbc = await FairStockEquityFRSf4hV.business.call(addressrrMcT3o, uintmTdkyB, uintrl2g0JK, uints6zyKDj, uintOLLJeRH, {from: accounts[0]});
		const uint256kaCYpbN = await FairStockEquityFRSf4hV.getCostAmount.call(uintf9qsPo7, {from: accounts[0]});
		const uint256gtGe30o = await FairStockEquityFRSf4hV.invest.call(uintATdzaSq, {from: accounts[4]});
		const uint256vnfBOU7 = await FairStockEquityFRSf4hV.setGasFeeForCallback.call(uintczqSHz5, {from: accounts[4]});
		const uint256aGl4v1k = await FairStockEquityFRSf4hV.invest.call(uintqUnuv1C, {from: accounts[2]});
		const addressFoE61Uz = await FairStockEquityFRSf4hV.depositLPT.call(addressJEY4Wx5, uintZhj0Iua, {from: accounts[4]});

		await expect(FairStockEquityFRSf4hV.withdrawMTCallback.call(addressP3mzY7, uintm6AGKz, uintfOIvN8e, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressISg2Rjz = accounts[2]
		const addressI0eZ1FH = accounts[2]
		const addressbcQc1Mq = accounts[2]
		const addressAHzUPld = accounts[4]
		const uintexfGFbj = BigInt("1909")
		const FairStockEquityGLZD8hd = await FairStockEquity.new(addressISg2Rjz, addressI0eZ1FH, addressbcQc1Mq, addressAHzUPld, uintexfGFbj, {from: accounts[1]});
		const uintfniott1 = BigInt("308")
		const uintQUbUKXh = BigInt("1301")
		const uint256rnpLfm = await FairStockEquityGLZD8hd.depositBonus.call(uintfniott1, {from: accounts[5]});
		await FairStockEquityGLZD8hd.withdrawPJ.call({from: accounts[2]});
		const uint256bfGHhgb = await FairStockEquityGLZD8hd.setProfitPercentPJ.call(uintQUbUKXh, {from: accounts[0]});

		await expect(FairStockEquityGLZD8hd.depositBonus.call(uintfniott1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressU7p6meQ = accounts[2]
		const addressaErtYz0 = accounts[2]
		const addressFbDFSQ4 = accounts[4]
		const addressUYTJ8gR = accounts[1]
		const uintZ6lTkyi = BigInt("557")
		const FairStockEquityPfqarih = await FairStockEquity.new(addressU7p6meQ, addressaErtYz0, addressFbDFSQ4, addressUYTJ8gR, uintZ6lTkyi, {from: accounts[2]});
		const uint4CKUKn = BigInt("1352")
		await FairStockEquityPfqarih.withdrawPJ.call({from: accounts[2]});
		const uint256VwaU6F0 = await FairStockEquityPfqarih.setProfitPercentBonus.call(uint4CKUKn, {from: accounts[5]});

		await expect(FairStockEquityPfqarih.withdrawPJ.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJa6rw06 = accounts[5]
		const addressKH5Cwsn = accounts[3]
		const addressonZM698 = accounts[1]
		const addressEbsrWdf = accounts[0]
		const uintiQjzCZG = BigInt("1331")
		const FairStockEquityZKXRjgr = await FairStockEquity.new(addressJa6rw06, addressKH5Cwsn, addressonZM698, addressEbsrWdf, uintiQjzCZG, {from: "0x0000000000000000000000000000000000000001"});
		const uintCH9aPGQ = BigInt("1569")
		const addressV67tWbE = accounts[0]
		const addresse59uPi = await FairStockEquityZKXRjgr.withdrawLPT.call(addressV67tWbE, uintCH9aPGQ, {from: accounts[1]});
		await FairStockEquityZKXRjgr.f.call({from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressNTvJWvL = accounts[2]
		const addressNa5mZ2r = accounts[2]
		const addressyplCPu8 = accounts[2]
		const addressDYvAiex = accounts[4]
		const uintsjoStQ = BigInt("1909")
		const FairStockEquityGLZD8hd = await FairStockEquity.new(addressNTvJWvL, addressNa5mZ2r, addressyplCPu8, addressDYvAiex, uintsjoStQ, {from: accounts[1]});
		const uintIpaX5ZZ = BigInt("1420")
		await FairStockEquityGLZD8hd.f.call({from: accounts[0]});
		const uint256bQDgwYN = await FairStockEquityGLZD8hd.invest.call(uintIpaX5ZZ, {from: accounts[3]});
		await FairStockEquityGLZD8hd.withdrawPJ.call({from: accounts[2]});

		await expect(FairStockEquityGLZD8hd.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspXzKGny = accounts[3]
		const addresspD2dYi0 = accounts[0]
		const addressQPvHAfg = accounts[4]
		const addresspbq6joQ = accounts[1]
		const uinttyo1r7Z = BigInt("1829")
		const FairStockEquityHmpj0O = await FairStockEquity.new(addresspXzKGny, addresspD2dYi0, addressQPvHAfg, addresspbq6joQ, uinttyo1r7Z, {from: accounts[0]});
		const uintqgPGrB5 = BigInt("707")
		const uintlOVYTzP = BigInt("1340")
		const addressfMZ0fbf = accounts[2]
		const uinth63CBQN = BigInt("1693")
		const uintUJLcL3 = BigInt("1421")
		const addressrtNAD4o = await FairStockEquityHmpj0O.withdrawBonusCallback.call(addressfMZ0fbf, uintlOVYTzP, uintqgPGrB5, {from: accounts[1]});
		const uint256U1NVKm = await FairStockEquityHmpj0O.setProfitPercentBonus.call(uinth63CBQN, {from: accounts[2]});
		const uint256i9tDQp = await FairStockEquityHmpj0O.reduceShare.call(uintUJLcL3, {from: accounts[4]});

		await expect(FairStockEquityHmpj0O.withdrawBonusCallback.call(addressfMZ0fbf, uintlOVYTzP, uintqgPGrB5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUFeJPQo = accounts[5]
		const addressoIHkdyg = accounts[1]
		const addressJKVeM0R = accounts[2]
		const addresscrmjxVy = "0x0000000000000000000000000000000000000001"
		const uintLD9l76 = BigInt("1960")
		const FairStockEquityFaShmhG = await FairStockEquity.new(addressUFeJPQo, addressoIHkdyg, addressJKVeM0R, addresscrmjxVy, uintLD9l76, {from: accounts[4]});
		const uintM2oNkLN = BigInt("1205")
		const uintRESuIG = BigInt("1768")
		const uintr7sNgF5 = BigInt("523")
		const addressJucHHWg = accounts[2]
		const uintfnZj68h = BigInt("1523")
		const uintdqe1R4M = BigInt("1663")
		const uintEkECPBM = BigInt("87")
		const uintQF1VKv = BigInt("242")
		const addressGugsxTK = accounts[1]
		const uintCRvEfr6 = BigInt("922")
		const uintxhkPKv = BigInt("1322")
		const uint256PAIz55z = await FairStockEquityFaShmhG.setGasFeeForCallback.call(uintM2oNkLN, {from: accounts[4]});
		const addressncgPqFr = await FairStockEquityFaShmhG.setModule.call(addressJucHHWg, uintr7sNgF5, uintRESuIG, {from: accounts[4]});
		const addressctEFbf4 = await FairStockEquityFaShmhG.business.call(addressGugsxTK, uintQF1VKv, uintEkECPBM, uintdqe1R4M, uintfnZj68h, {from: accounts[1]});
		const uint256GLeqVQ1 = await FairStockEquityFaShmhG.invest.call(uintCRvEfr6, {from: accounts[2]});
		const uint256GxTv3F = await FairStockEquityFaShmhG.depositBonus.call(uintxhkPKv, {from: accounts[3]});

		await expect(FairStockEquityFaShmhG.business.call(addressGugsxTK, uintQF1VKv, uintEkECPBM, uintdqe1R4M, uintfnZj68h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})