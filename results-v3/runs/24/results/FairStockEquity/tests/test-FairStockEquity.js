const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressD9W8dr7 = accounts[2]
		const addressTuRbpT9 = accounts[2]
		const addressbcfVuVI = "0x0000000000000000000000000000000000000001"
		const addressPoFr16G = "0x0000000000000000000000000000000000000001"
		const uintuDM7IkZ = BigInt("968")
		const FairStockEquityLlacOvW = await FairStockEquity.new(addressD9W8dr7, addressTuRbpT9, addressbcfVuVI, addressPoFr16G, uintuDM7IkZ, {from: accounts[1]});
		const uintH6E9uk = BigInt("1239")
		const addressXW1PTpk = accounts[5]
		const uintX5BRfcA = BigInt("1222")
		const uintM7GXH7 = BigInt("517")
		const addressx3olZ2 = await FairStockEquityLlacOvW.withdrawLPT.call(addressXW1PTpk, uintH6E9uk, {from: accounts[3]});
		const uint256tA1TVeW = await FairStockEquityLlacOvW.setGasFeeForCallback.call(uintX5BRfcA, {from: accounts[0]});
		const uint256QZ9U87n = await FairStockEquityLlacOvW.setProfitPercentMT.call(uintM7GXH7, {from: accounts[3]});

		await expect(FairStockEquityLlacOvW.withdrawLPT.call(addressXW1PTpk, uintH6E9uk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressIyCGyA = accounts[0]
		const addressLir8VJ7 = "0x0000000000000000000000000000000000000001"
		const addressBPKcIK6 = accounts[1]
		const addressWm3ylqI = accounts[2]
		const uintkZK4q4Z = BigInt("1156")
		const FairStockEquitys99p37 = await FairStockEquity.new(addressIyCGyA, addressLir8VJ7, addressBPKcIK6, addressWm3ylqI, uintkZK4q4Z, {from: accounts[2]});
		const uintZI6aVux = BigInt("1213")
		const uintjNRquO1 = BigInt("108")
		const uintdbP8usB = BigInt("1046")
		const addressU1meuVU = accounts[3]
		const addressYgNw9uy = accounts[1]
		const uint256qzePC7 = await FairStockEquitys99p37.setStartTime.call(uintZI6aVux, {from: accounts[3]});
		const addressfi9kYbF = await FairStockEquitys99p37.setModule.call(addressU1meuVU, uintdbP8usB, uintjNRquO1, {from: accounts[5]});
		await FairStockEquitys99p37.withdrawMT.call({from: accounts[1]});
		const addressI8U8mZ = await FairStockEquitys99p37.setDataSource.call(addressYgNw9uy, {from: accounts[2]});

		await expect(FairStockEquitys99p37.setStartTime.call(uintZI6aVux, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrzhKFXJ = accounts[3]
		const addressz5ves0M = accounts[5]
		const addressN4HHLE1 = accounts[3]
		const addressklTia50 = accounts[3]
		const uintjtaxLf7 = BigInt("141")
		const FairStockEquitygzG7VP8 = await FairStockEquity.new(addressrzhKFXJ, addressz5ves0M, addressN4HHLE1, addressklTia50, uintjtaxLf7, {from: "0x0000000000000000000000000000000000000001"});
		const uintPEIAVjR = BigInt("1777")
		const uint256LH7xm7J = await FairStockEquitygzG7VP8.setStartTime.call(uintPEIAVjR, {from: accounts[4]});
		await FairStockEquitygzG7VP8.onlyDataSource.call({from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const address7iLIeq = accounts[2]
		const addressZby82H1 = accounts[4]
		const addressKiQbWw = accounts[0]
		const addressGyw6VnR = accounts[5]
		const uintbJBZmEM = BigInt("1446")
		const FairStockEquityFqDei0J = await FairStockEquity.new(address7iLIeq, addressZby82H1, addressKiQbWw, addressGyw6VnR, uintbJBZmEM, {from: accounts[5]});
		const uintY2VK3FL = BigInt("1")
		const boolTSwxlm = false
		const address63oURD = accounts[0]
		const uintQlWfmZ7 = BigInt("1781")
		const uintKHhlMDL = BigInt("1164")
		const uintyohD03m = BigInt("1987")
		const uintdnmwTW = BigInt("944")
		const addressx1D1mfD = accounts[1]
		await FairStockEquityFqDei0J.withdrawBonus.call({from: accounts[1]});
		const uint256ofvQBQo = await FairStockEquityFqDei0J.depositBonus.call(uintY2VK3FL, {from: accounts[0]});
		const addressRqoBVYV = await FairStockEquityFqDei0J.setLPT.call(address63oURD, boolTSwxlm, {from: accounts[0]});
		const addresssEfcYIi = await FairStockEquityFqDei0J.business.call(addressx1D1mfD, uintdnmwTW, uintyohD03m, uintKHhlMDL, uintQlWfmZ7, {from: accounts[0]});

		await expect(FairStockEquityFqDei0J.withdrawBonus.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrD54dIC = accounts[1]
		const addressOXzHWp9 = accounts[3]
		const addressjhEsSYR = accounts[2]
		const addressfHwxwgi = accounts[2]
		const uintXi3ISqV = BigInt("1669")
		const FairStockEquityenkg1Rg = await FairStockEquity.new(addressrD54dIC, addressOXzHWp9, addressjhEsSYR, addressfHwxwgi, uintXi3ISqV, {from: accounts[4]});
		const uintCriTY5 = BigInt("539")
		const uintX2lPpT = BigInt("1251")
		const addressmCrvqMF = accounts[2]
		const uint256vij5qu = await FairStockEquityenkg1Rg.setProfitPercentMT.call(uintCriTY5, {from: accounts[0]});
		const addressYibpTNN = await FairStockEquityenkg1Rg.depositLPT.call(addressmCrvqMF, uintX2lPpT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityenkg1Rg.setProfitPercentMT.call(uintCriTY5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressp2TOXgJ = accounts[1]
		const addressIgolOhx = accounts[4]
		const addressKv4BqvL = accounts[3]
		const addressQOecLrJ = accounts[3]
		const uintPBPNwai = BigInt("1899")
		const FairStockEquityJqGUhKd = await FairStockEquity.new(addressp2TOXgJ, addressIgolOhx, addressKv4BqvL, addressQOecLrJ, uintPBPNwai, {from: accounts[3]});
		const uintcgvc2BK = BigInt("63")
		const uintvEtvUEL = BigInt("697")
		const uintoTn8rR5 = BigInt("1682")
		const uinteUN1m7K = BigInt("698")
		const addressVie2DX = accounts[1]
		const uintBzPwr35 = BigInt("1441")
		const uintvumoQKZ = BigInt("2029")
		const uintnKoLHNR = BigInt("722")
		const uintgycpuoA = BigInt("399")
		const uinty3nuwGT = BigInt("1296")
		const addresss13o5Gx = accounts[0]
		const addressqvqMLu5 = await FairStockEquityJqGUhKd.business.call(addressVie2DX, uinteUN1m7K, uintoTn8rR5, uintvEtvUEL, uintcgvc2BK, {from: accounts[3]});
		const uint256r2XNFYT = await FairStockEquityJqGUhKd.invest.call(uintBzPwr35, {from: accounts[5]});
		const address91IYdt = await FairStockEquityJqGUhKd.business.call(addresss13o5Gx, uinty3nuwGT, uintgycpuoA, uintnKoLHNR, uintvumoQKZ, {from: accounts[0]});

		await expect(FairStockEquityJqGUhKd.business.call(addressVie2DX, uinteUN1m7K, uintoTn8rR5, uintvEtvUEL, uintcgvc2BK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresswZmudr7 = accounts[4]
		const addressYvBjkVK = accounts[1]
		const addressSh5Tn2l = accounts[5]
		const addressNurfU4 = accounts[1]
		const uintPo0nD3N = BigInt("620")
		const FairStockEquityW40sW3n = await FairStockEquity.new(addresswZmudr7, addressYvBjkVK, addressSh5Tn2l, addressNurfU4, uintPo0nD3N, {from: accounts[1]});
		const uintNm4MvGh = BigInt("191")
		const addressZ36U4Fk = accounts[3]
		const uinta1HyRph = BigInt("1506")
		const uintORLwJQo = BigInt("822")
		const uintVVbLxzU = BigInt("307")
		const addressF3iR7zw = accounts[1]
		const uintaEOXdlK = BigInt("410")
		await FairStockEquityW40sW3n.f.call({from: "0x0000000000000000000000000000000000000001"});
		const addressyNKbyk9 = await FairStockEquityW40sW3n.withdrawLPT.call(addressZ36U4Fk, uintNm4MvGh, {from: accounts[3]});
		await FairStockEquityW40sW3n.withdrawMT.call({from: accounts[2]});
		const uint256dRRcOm = await FairStockEquityW40sW3n.depositBonus.call(uinta1HyRph, {from: accounts[4]});
		const addressw6ykKM2 = await FairStockEquityW40sW3n.setModule.call(addressF3iR7zw, uintVVbLxzU, uintORLwJQo, {from: accounts[5]});
		const uint2566Hhy43 = await FairStockEquityW40sW3n.setStartTime.call(uintaEOXdlK, {from: accounts[4]});

		await expect(FairStockEquityW40sW3n.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUqnuwrD = accounts[1]
		const addressvmuWuW = accounts[3]
		const addressF9kVJYM = accounts[2]
		const addressA3iIwI = accounts[2]
		const uinti6RpC88 = BigInt("1669")
		const FairStockEquityenkg1Rg = await FairStockEquity.new(addressUqnuwrD, addressvmuWuW, addressF9kVJYM, addressA3iIwI, uinti6RpC88, {from: accounts[4]});
		const uinttKEmBB9 = BigInt("1251")
		const addressGE3xpuo = accounts[3]
		const addressYibpTNN = await FairStockEquityenkg1Rg.depositLPT.call(addressGE3xpuo, uinttKEmBB9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityenkg1Rg.depositLPT.call(addressGE3xpuo, uinttKEmBB9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbjkrwhK = accounts[5]
		const addressvXDBTXK = "0x0000000000000000000000000000000000000001"
		const addressFQSDwZz = accounts[2]
		const addressiACWHRk = accounts[4]
		const uintKs6V90p = BigInt("1570")
		const FairStockEquitySjYXwhO = await FairStockEquity.new(addressbjkrwhK, addressvXDBTXK, addressFQSDwZz, addressiACWHRk, uintKs6V90p, {from: accounts[3]});
		const uintfvIKSF = BigInt("276")
		const uintiB5ee6Q = BigInt("245")
		const uint256uqqrgve = await FairStockEquitySjYXwhO.getCostAmount.call(uintfvIKSF, {from: accounts[0]});
		await FairStockEquitySjYXwhO.withdrawMT.call({from: accounts[2]});
		await FairStockEquitySjYXwhO.withdrawMT.call({from: accounts[5]});
		const uint256QQRNAV = await FairStockEquitySjYXwhO.bonus.call(uintiB5ee6Q, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitySjYXwhO.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAQWAG6 = accounts[1]
		const addressKcwbzXE = accounts[4]
		const addressxxMOcge = accounts[3]
		const addresss0Ci3sL = accounts[3]
		const uintAcbw310 = BigInt("1899")
		const FairStockEquityJqGUhKd = await FairStockEquity.new(addressAQWAG6, addressKcwbzXE, addressxxMOcge, addresss0Ci3sL, uintAcbw310, {from: accounts[3]});
		const uintFJePVo = BigInt("63")
		const uintIQwZ8Jo = BigInt("697")
		const uintzqyJG9 = BigInt("1682")
		const uintpI5Goda = BigInt("698")
		const addressZzuf4K2 = accounts[1]
		const uintnTp7yZG = BigInt("560")
		const uintmD4mPJy = BigInt("23")
		const addressExR1gzv = accounts[2]
		const uintsbHGyaj = BigInt("1437")
		const uintg8LaMhp = BigInt("2029")
		const uintTc0MfD5 = BigInt("722")
		const uintuNFjF0l = BigInt("399")
		const uintwcq3QbT = BigInt("1296")
		const addressyqXLIYH = accounts[0]
		await FairStockEquityJqGUhKd.withdrawPJ.call({from: accounts[3]});
		const addressqvqMLu5 = await FairStockEquityJqGUhKd.business.call(addressZzuf4K2, uintpI5Goda, uintzqyJG9, uintIQwZ8Jo, uintFJePVo, {from: accounts[3]});
		const addressgscvAYh = await FairStockEquityJqGUhKd.setModule.call(addressExR1gzv, uintmD4mPJy, uintnTp7yZG, {from: accounts[1]});
		const uint256r2XNFYT = await FairStockEquityJqGUhKd.invest.call(uintsbHGyaj, {from: accounts[5]});
		const address91IYdt = await FairStockEquityJqGUhKd.business.call(addressyqXLIYH, uintwcq3QbT, uintuNFjF0l, uintTc0MfD5, uintg8LaMhp, {from: accounts[0]});
		await FairStockEquityJqGUhKd.checkStart.call({from: accounts[4]});

		await expect(FairStockEquityJqGUhKd.withdrawPJ.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszXm8olC = accounts[1]
		const addresshylmKv = accounts[4]
		const addressimiz6cK = accounts[3]
		const addressX5mQYbw = accounts[3]
		const uintrmyMwXI = BigInt("1899")
		const FairStockEquityJqGUhKd = await FairStockEquity.new(addresszXm8olC, addresshylmKv, addressimiz6cK, addressX5mQYbw, uintrmyMwXI, {from: accounts[3]});
		const uintHhpdH5 = BigInt("1441")
		const uintpkrEuR = BigInt("2029")
		const uintVnOTUtN = BigInt("722")
		const uintKwWA1xQ = BigInt("399")
		const uintlIojfok = BigInt("1296")
		const addressiu4pFO = accounts[0]
		const uint256r2XNFYT = await FairStockEquityJqGUhKd.invest.call(uintHhpdH5, {from: accounts[5]});
		const address91IYdt = await FairStockEquityJqGUhKd.business.call(addressiu4pFO, uintlIojfok, uintKwWA1xQ, uintVnOTUtN, uintpkrEuR, {from: accounts[0]});

		await expect(FairStockEquityJqGUhKd.invest.call(uintHhpdH5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressju6Jc2 = accounts[1]
		const addressRMAZTM = accounts[3]
		const addressYZ40E80 = accounts[2]
		const addressfJdWyEN = accounts[2]
		const uintlpETT8r = BigInt("1669")
		const FairStockEquityenkg1Rg = await FairStockEquity.new(addressju6Jc2, addressRMAZTM, addressYZ40E80, addressfJdWyEN, uintlpETT8r, {from: accounts[4]});
		const uintu9tNS2l = BigInt("1251")
		const addresspzNwotH = accounts[5]
		await FairStockEquityenkg1Rg.onlyDataSource.call({from: accounts[1]});
		const addressYibpTNN = await FairStockEquityenkg1Rg.depositLPT.call(addresspzNwotH, uintu9tNS2l, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityenkg1Rg.onlyDataSource.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDr2tqmU = accounts[1]
		const addressQiuNjv9 = accounts[4]
		const addressXMuJhQI = accounts[3]
		const addresswC2UDZH = accounts[3]
		const uintjV01xlv = BigInt("1899")
		const FairStockEquityJqGUhKd = await FairStockEquity.new(addressDr2tqmU, addressQiuNjv9, addressXMuJhQI, addresswC2UDZH, uintjV01xlv, {from: accounts[3]});
		const uintTSOjOUW = BigInt("1100")
		const uintarfL9r7 = BigInt("1497")
		const addressDj0GhaC = accounts[0]
		const uintKfbmzeF = BigInt("63")
		const uintT7eGVHk = BigInt("697")
		const uintWpMHmBV = BigInt("1682")
		const uintvS9ZMMp = BigInt("921")
		const addressOphvI0t = accounts[1]
		const uintkKAaatM = BigInt("2029")
		const uintawjTY9l = BigInt("722")
		const uintj8qPy5C = BigInt("399")
		const uintcqPZGj6 = BigInt("1296")
		const addresslAYMCRe = accounts[0]
		const addressNAOPAU8 = await FairStockEquityJqGUhKd.withdrawBonusCallback.call(addressDj0GhaC, uintarfL9r7, uintTSOjOUW, {from: accounts[3]});
		const addressqvqMLu5 = await FairStockEquityJqGUhKd.business.call(addressOphvI0t, uintvS9ZMMp, uintWpMHmBV, uintT7eGVHk, uintKfbmzeF, {from: accounts[3]});
		await FairStockEquityJqGUhKd.checkStart.call({from: accounts[2]});
		const address91IYdt = await FairStockEquityJqGUhKd.business.call(addresslAYMCRe, uintcqPZGj6, uintj8qPy5C, uintawjTY9l, uintkKAaatM, {from: accounts[0]});

		await expect(FairStockEquityJqGUhKd.withdrawBonusCallback.call(addressDj0GhaC, uintarfL9r7, uintTSOjOUW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqVjEJys = accounts[1]
		const addressCsQ2IK = accounts[3]
		const addressBr3WovC = accounts[2]
		const addresssxFgcq3 = accounts[2]
		const uintByuVc53 = BigInt("1669")
		const FairStockEquityenkg1Rg = await FairStockEquity.new(addressqVjEJys, addressCsQ2IK, addressBr3WovC, addresssxFgcq3, uintByuVc53, {from: accounts[4]});
		const uintQt5nyqd = BigInt("742")
		const uinturqwziA = BigInt("1708")
		const address9avnZa = accounts[0]
		const uintaJpDKtT = BigInt("42")
		const addressg1D2XL9 = accounts[5]
		const uintvA9IIOA = BigInt("1121")
		const uintrAo3Sse = BigInt("1261")
		const addressOurgOTt = accounts[3]
		const addressIcYfT4m = await FairStockEquityenkg1Rg.withdrawMTCallback.call(address9avnZa, uinturqwziA, uintQt5nyqd, {from: accounts[5]});
		const addressHY3NQ4o = await FairStockEquityenkg1Rg.depositLPT.call(addressg1D2XL9, uintaJpDKtT, {from: accounts[4]});
		const uint256hxiCUst = await FairStockEquityenkg1Rg.depositBonus.call(uintvA9IIOA, {from: accounts[4]});
		const addressYibpTNN = await FairStockEquityenkg1Rg.depositLPT.call(addressOurgOTt, uintrAo3Sse, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityenkg1Rg.withdrawMTCallback.call(address9avnZa, uinturqwziA, uintQt5nyqd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresse72rlhT = accounts[1]
		const addressav90SRO = accounts[3]
		const addressC7kgqGW = accounts[2]
		const addressDwjL0PE = accounts[2]
		const uintIBBMmsa = BigInt("1669")
		const FairStockEquityenkg1Rg = await FairStockEquity.new(addresse72rlhT, addressav90SRO, addressC7kgqGW, addressDwjL0PE, uintIBBMmsa, {from: accounts[4]});
		const uinth12Aal = BigInt("1531")
		const uintXacDwV = BigInt("1251")
		const addressn6adfS0 = accounts[4]
		const uintU9q6y3F = BigInt("1995")
		const uintYpKYPw1 = BigInt("357")
		const uintnYXzyKb = BigInt("1554")
		const uintXx5esFG = BigInt("1999")
		const uintSexajT3 = BigInt("543")
		const uint256rDciujj = await FairStockEquityenkg1Rg.setStartTime.call(uinth12Aal, {from: accounts[4]});
		const addressYibpTNN = await FairStockEquityenkg1Rg.depositLPT.call(addressn6adfS0, uintXacDwV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ytHGdFW = await FairStockEquityenkg1Rg.setDegree.call(uintSexajT3, uintXx5esFG, uintnYXzyKb, uintYpKYPw1, uintU9q6y3F, {from: accounts[2]});

		await expect(FairStockEquityenkg1Rg.setStartTime.call(uinth12Aal, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmIiQTeP = accounts[1]
		const addressh7ntCw = accounts[3]
		const addressPlSR7a7 = accounts[2]
		const addressCoPwi18 = accounts[2]
		const uintimjp8pe = BigInt("1669")
		const FairStockEquityenkg1Rg = await FairStockEquity.new(addressmIiQTeP, addressh7ntCw, addressPlSR7a7, addressCoPwi18, uintimjp8pe, {from: accounts[4]});
		const uintB3zDlqz = BigInt("1484")
		const uintwdaQf5B = BigInt("1266")
		const addresssrdsj2p = accounts[3]
		const uintabiRx9Q = BigInt("1096")
		const uint256L7xK0g7 = await FairStockEquityenkg1Rg.reduceShare.call(uintB3zDlqz, {from: accounts[1]});
		const addressYibpTNN = await FairStockEquityenkg1Rg.depositLPT.call(addresssrdsj2p, uintwdaQf5B, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Q2cM1Jw = await FairStockEquityenkg1Rg.setProfitPercentPJ.call(uintabiRx9Q, {from: accounts[2]});

		await expect(FairStockEquityenkg1Rg.reduceShare.call(uintB3zDlqz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresst64B0KM = accounts[1]
		const addresslnOaB3W = accounts[4]
		const addressrRpwIdm = accounts[3]
		const addressaguN93m = accounts[3]
		const uintnmSWG3C = BigInt("1899")
		const FairStockEquityJqGUhKd = await FairStockEquity.new(addresst64B0KM, addresslnOaB3W, addressrRpwIdm, addressaguN93m, uintnmSWG3C, {from: accounts[3]});
		const uintMIF3vBx = BigInt("1894")
		const uintWmEKnm = BigInt("1430")
		const addressy5XYJJA = accounts[4]
		const uintjkvd3Ul = BigInt("63")
		const uintFRQSKlU = BigInt("725")
		const uintBlWshQQ = BigInt("1682")
		const uintQsM6pCW = BigInt("698")
		const addressOKUZ4Vf = accounts[3]
		const uintHZtWfXP = BigInt("1354")
		const addressUpGqIkE = accounts[3]
		const uint256oTs40zd = await FairStockEquityJqGUhKd.depositBonus.call(uintMIF3vBx, {from: accounts[1]});
		const addressD9WIH9W = await FairStockEquityJqGUhKd.withdrawLPT.call(addressy5XYJJA, uintWmEKnm, {from: accounts[2]});
		const addressqvqMLu5 = await FairStockEquityJqGUhKd.business.call(addressOKUZ4Vf, uintQsM6pCW, uintBlWshQQ, uintFRQSKlU, uintjkvd3Ul, {from: accounts[3]});
		const addressSF8PA6T = await FairStockEquityJqGUhKd.depositLPT.call(addressUpGqIkE, uintHZtWfXP, {from: accounts[1]});

		await expect(FairStockEquityJqGUhKd.depositBonus.call(uintMIF3vBx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressETjTK4N = accounts[1]
		const addressoZJGV3d = accounts[3]
		const addresseGP7Frv = accounts[2]
		const addressrfhGtO = accounts[2]
		const uintCBPKe1 = BigInt("1669")
		const FairStockEquityenkg1Rg = await FairStockEquity.new(addressETjTK4N, addressoZJGV3d, addresseGP7Frv, addressrfhGtO, uintCBPKe1, {from: accounts[4]});
		const uintE8l4WB6 = BigInt("689")
		const uintJkAZkk = BigInt("1156")
		const addressFc8LiZT = "0x0000000000000000000000000000000000000001"
		const uintBCpbQ3 = BigInt("477")
		const uintUpfQnA4 = BigInt("1251")
		const addressZUtGRgh = accounts[4]
		const addressLdwFhuU = await FairStockEquityenkg1Rg.withdrawMTCallback.call(addressFc8LiZT, uintJkAZkk, uintE8l4WB6, {from: accounts[2]});
		const uint256swl2WxH = await FairStockEquityenkg1Rg.invest.call(uintBCpbQ3, {from: "0x0000000000000000000000000000000000000001"});
		const addressYibpTNN = await FairStockEquityenkg1Rg.depositLPT.call(addressZUtGRgh, uintUpfQnA4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityenkg1Rg.withdrawMTCallback.call(addressFc8LiZT, uintJkAZkk, uintE8l4WB6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBKyQJ2K = accounts[1]
		const addressyf0zXI9 = accounts[3]
		const addressGK8XNz8 = accounts[2]
		const addresstA7VEwP = accounts[2]
		const uintQD8EvB = BigInt("1669")
		const FairStockEquityenkg1Rg = await FairStockEquity.new(addressBKyQJ2K, addressyf0zXI9, addressGK8XNz8, addresstA7VEwP, uintQD8EvB, {from: accounts[4]});
		const boolPTrg0g = false
		const address5Zk1fe = accounts[1]
		const uintr8wwxxh = BigInt("391")
		const uintjHKnxXc = BigInt("1360")
		const uintlrDtXd = BigInt("1993")
		const uintv7YwtkS = BigInt("425")
		const addressDLAUs5u = accounts[3]
		const uintUgdVPBA = BigInt("984")
		const addressimTTt5 = await FairStockEquityenkg1Rg.setLPT.call(address5Zk1fe, boolPTrg0g, {from: accounts[4]});
		const addressAVksMm = await FairStockEquityenkg1Rg.business.call(addressDLAUs5u, uintv7YwtkS, uintlrDtXd, uintjHKnxXc, uintr8wwxxh, {from: accounts[4]});
		const uint256mpWdrMC = await FairStockEquityenkg1Rg.invest.call(uintUgdVPBA, {from: accounts[2]});

		await expect(FairStockEquityenkg1Rg.business.call(addressDLAUs5u, uintv7YwtkS, uintlrDtXd, uintjHKnxXc, uintr8wwxxh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressx42BYqk = accounts[0]
		const addressUWjvl55 = accounts[5]
		const addressO9amEc = accounts[3]
		const addressSfSqAXY = accounts[0]
		const uintDC8oTso = BigInt("1337")
		const FairStockEquityf8zL5UG = await FairStockEquity.new(addressx42BYqk, addressUWjvl55, addressO9amEc, addressSfSqAXY, uintDC8oTso, {from: accounts[3]});
		const uinttvQfbsi = BigInt("1817")
		const uintaNY2gs = BigInt("349")
		const uintWi7tLK = BigInt("1917")
		const addressMZuKqF0 = accounts[1]
		const uintFF6Hnfy = BigInt("1823")
		const uintVhneCMD = BigInt("1613")
		const uintCzksnkV = BigInt("1618")
		const uinty9XwSX5 = BigInt("822")
		const uintyuflF10 = BigInt("1998")
		const uint256XLetcF = await FairStockEquityf8zL5UG.bonus.call(uinttvQfbsi, {from: accounts[0]});
		const uint256bYxGkVd = await FairStockEquityf8zL5UG.setProfitPercentPJ.call(uintaNY2gs, {from: accounts[1]});
		await FairStockEquityf8zL5UG.withdrawBonus.call({from: accounts[2]});
		const addressWDxzec7 = await FairStockEquityf8zL5UG.withdrawLPT.call(addressMZuKqF0, uintWi7tLK, {from: accounts[3]});
		const uint256zXChFnz = await FairStockEquityf8zL5UG.setDegree.call(uintyuflF10, uinty9XwSX5, uintCzksnkV, uintVhneCMD, uintFF6Hnfy, {from: accounts[0]});
		await FairStockEquityf8zL5UG.withdrawPJ.call({from: accounts[3]});

		await expect(FairStockEquityf8zL5UG.bonus.call(uinttvQfbsi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})