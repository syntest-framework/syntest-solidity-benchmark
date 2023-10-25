const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressCjhDDX = accounts[5]
		const addressLhW9nEe = accounts[4]
		const addressEgJBFqY = accounts[0]
		const addressoxfX6n = accounts[2]
		const uint5ltNQ2 = BigInt("331")
		const FairStockEquityz1yK1B0 = await FairStockEquity.new(addressCjhDDX, addressLhW9nEe, addressEgJBFqY, addressoxfX6n, uint5ltNQ2, {from: accounts[1]});
		const uintXFBNGUn = BigInt("132")
		const uintNg8VCKi = BigInt("1251")
		const uintgDSw7bn = BigInt("1360")
		const uintNzPMlcj = BigInt("503")
		const addressM9bzBee = accounts[3]
		const uintD58eLQe = BigInt("336")
		const uintO4Odgj = BigInt("777")
		const uint256KoFUIwr = await FairStockEquityz1yK1B0.getCostAmount.call(uintXFBNGUn, {from: accounts[4]});
//		const uint256OYbcPIr = await FairStockEquityz1yK1B0.invest.call(uintNg8VCKi, {from: accounts[0]});
//		const addressFB7xoo1 = await FairStockEquityz1yK1B0.setModule.call(addressM9bzBee, uintNzPMlcj, uintgDSw7bn, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityz1yK1B0.f.call({from: accounts[3]});
//		const uint256cUor8Pr = await FairStockEquityz1yK1B0.getCostAmount.call(uintD58eLQe, {from: accounts[1]});
//		const uint256jFbsq4C = await FairStockEquityz1yK1B0.bonus.call(uintO4Odgj, {from: accounts[4]});

		await expect(FairStockEquityz1yK1B0.invest.call(uintNg8VCKi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressgoKs2Rk = accounts[0]
		const addresssr94y5P = accounts[0]
		const addressXUtocG = accounts[1]
		const addressnz0QPon = accounts[0]
		const uint7IBhvx = BigInt("1714")
		const FairStockEquityiMoNWOi = await FairStockEquity.new(addressgoKs2Rk, addresssr94y5P, addressXUtocG, addressnz0QPon, uint7IBhvx, {from: accounts[3]});
		const uintlG7PM0m = BigInt("24")
		const uintuB1KGP = BigInt("1747")
		const addressVycOUjb = accounts[1]
		const boolPygOrBE = true
		const addressDuuu9EO = accounts[2]
//		const addressaXIVJB = await FairStockEquityiMoNWOi.setModule.call(addressVycOUjb, uintuB1KGP, uintlG7PM0m, {from: accounts[5]});
//		await FairStockEquityiMoNWOi.withdrawBonus.call({from: accounts[0]});
//		const addressq8QTgg = await FairStockEquityiMoNWOi.setLPT.call(addressDuuu9EO, boolPygOrBE, {from: accounts[0]});

		await expect(FairStockEquityiMoNWOi.setModule.call(addressVycOUjb, uintuB1KGP, uintlG7PM0m, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscwgi9uR = accounts[4]
		const addressTYsoW7V = accounts[3]
		const addressNa6lLmQ = accounts[2]
		const addressfiMpAu = accounts[0]
		const uintqJDZFo = BigInt("1434")
		const FairStockEquitygnQX4s1 = await FairStockEquity.new(addresscwgi9uR, addressTYsoW7V, addressNa6lLmQ, addressfiMpAu, uintqJDZFo, {from: accounts[3]});
		const uintQX0aQFo = BigInt("6")
		const uintVFuAo2T = BigInt("544")
		const uintogq4gR = BigInt("658")
		const uintEFFkzSo = BigInt("1360")
//		const uint256DXa0Cms = await FairStockEquitygnQX4s1.depositBonus.call(uintQX0aQFo, {from: accounts[0]});
//		const uint256wMVdb1T = await FairStockEquitygnQX4s1.depositBonus.call(uintVFuAo2T, {from: accounts[0]});
//		const uint256JaxXCYC = await FairStockEquitygnQX4s1.setStartTime.call(uintogq4gR, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ZLnnIQ6 = await FairStockEquitygnQX4s1.setGasFeeForCallback.call(uintEFFkzSo, {from: accounts[2]});

		await expect(FairStockEquitygnQX4s1.depositBonus.call(uintQX0aQFo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJxL76Vc = accounts[1]
		const addresszlkYIyA = accounts[0]
		const addressXHMnmRt = accounts[3]
		const addressdAYH8nI = accounts[3]
		const uintlPI7RBK = BigInt("1959")
		const FairStockEquityLi0IoDc = await FairStockEquity.new(addressJxL76Vc, addresszlkYIyA, addressXHMnmRt, addressdAYH8nI, uintlPI7RBK, {from: accounts[3]});
		const uintYv5cYvC = BigInt("1351")
		const addressqKllVAH = accounts[0]
//		await FairStockEquityLi0IoDc.checkStart.call({from: accounts[3]});
//		const addressRIwp32m = await FairStockEquityLi0IoDc.depositLPT.call(addressqKllVAH, uintYv5cYvC, {from: accounts[3]});
//		await FairStockEquityLi0IoDc.onlyDataSource.call({from: accounts[4]});

		await expect(FairStockEquityLi0IoDc.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressVkLZBA = accounts[1]
		const addressZpdXjmO = accounts[2]
		const addressLtrSsL9 = accounts[5]
		const addressSFSmvrg = accounts[3]
		const uintNgLEvZN = BigInt("684")
		const FairStockEquityvFAa2ok = await FairStockEquity.new(addressVkLZBA, addressZpdXjmO, addressLtrSsL9, addressSFSmvrg, uintNgLEvZN, {from: accounts[1]});
		const uintwoMMtYC = BigInt("1529")
		const uintt5WTdxS = BigInt("617")
		const uintTZJqnWI = BigInt("447")
		const addressj7lUst8 = accounts[4]
		const uintmhwQFIo = BigInt("1069")
//		const uint256oEDtfi = await FairStockEquityvFAa2ok.reduceShare.call(uintwoMMtYC, {from: accounts[5]});
//		const uint256CGlFskX = await FairStockEquityvFAa2ok.setStartTime.call(uintt5WTdxS, {from: accounts[4]});
//		await FairStockEquityvFAa2ok.withdrawBonus.call({from: accounts[1]});
//		const uint256bSt4hEv = await FairStockEquityvFAa2ok.setStartTime.call(uintTZJqnWI, {from: accounts[4]});
//		const addressrbzucLy = await FairStockEquityvFAa2ok.setDataSource.call(addressj7lUst8, {from: accounts[3]});
//		const uint256U0xKXdo = await FairStockEquityvFAa2ok.setProfitPercentBonus.call(uintmhwQFIo, {from: accounts[2]});

		await expect(FairStockEquityvFAa2ok.reduceShare.call(uintwoMMtYC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvCvBBtR = accounts[0]
		const addressVab4o0X = accounts[2]
		const addressrHoqoYt = accounts[4]
		const addresskmGy79 = accounts[1]
		const uintBwmCzl9 = BigInt("245")
		const FairStockEquityEXYb65d = await FairStockEquity.new(addressvCvBBtR, addressVab4o0X, addressrHoqoYt, addresskmGy79, uintBwmCzl9, {from: accounts[4]});
		const uintq9Ld7dU = BigInt("557")
		const uintLg7EZPr = BigInt("1940")
		const uintdCKkhrP = BigInt("782")
		const uintiEFBxRa = BigInt("375")
		const uintF8gaZfr = BigInt("143")
		const uintyziFcp1 = BigInt("532")
		const addresswJOf1Dg = accounts[2]
		const uintDBxqyA = BigInt("1265")
		const uintKdVjHpi = BigInt("1137")
		const uintkWgnx3 = BigInt("620")
		const addressqjMD7TL = accounts[4]
//		await FairStockEquityEXYb65d.withdrawBonus.call({from: accounts[0]});
//		const uint2563j3f2m = await FairStockEquityEXYb65d.setDegree.call(uintF8gaZfr, uintiEFBxRa, uintdCKkhrP, uintLg7EZPr, uintq9Ld7dU, {from: accounts[5]});
//		const addressEezIBUx = await FairStockEquityEXYb65d.withdrawLPT.call(addresswJOf1Dg, uintyziFcp1, {from: accounts[4]});
//		const uint256IuLf2QK = await FairStockEquityEXYb65d.bonus.call(uintDBxqyA, {from: accounts[0]});
//		const addressgeytSLm = await FairStockEquityEXYb65d.setModule.call(addressqjMD7TL, uintkWgnx3, uintKdVjHpi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityEXYb65d.withdrawBonus.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEraZid = accounts[4]
		const addresss4H0LZQ = accounts[3]
		const addressGQrYQpM = accounts[2]
		const addressvhjyPdn = accounts[3]
		const uintcTauC7H = BigInt("154")
		const FairStockEquityj7q3YDG = await FairStockEquity.new(addressEraZid, addresss4H0LZQ, addressGQrYQpM, addressvhjyPdn, uintcTauC7H, {from: accounts[2]});
		const uintF4s0EBn = BigInt("1454")
		const addressYqqWKsE = accounts[0]
		const boolzq6vpBP = true
		const addressvBnIorx = accounts[0]
//		await FairStockEquityj7q3YDG.withdrawMT.call({from: accounts[3]});
//		const addressK1tZaoN = await FairStockEquityj7q3YDG.depositLPT.call(addressYqqWKsE, uintF4s0EBn, {from: accounts[0]});
//		const addressPl8Ifvq = await FairStockEquityj7q3YDG.setLPT.call(addressvBnIorx, boolzq6vpBP, {from: accounts[3]});

		await expect(FairStockEquityj7q3YDG.withdrawMT.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressM6BXl2u = accounts[3]
		const address8ngTHw = accounts[2]
		const addressYxLWGWJ = accounts[2]
		const addressoc1zqku = accounts[2]
		const uinttebNNL8 = BigInt("949")
		const FairStockEquityK3h2g1a = await FairStockEquity.new(addressM6BXl2u, address8ngTHw, addressYxLWGWJ, addressoc1zqku, uinttebNNL8, {from: accounts[3]});
		const uintm9Weqh6 = BigInt("1258")
		const addressYqdbJdl = "0x0000000000000000000000000000000000000001"
		const uintsXmbcJ = BigInt("1977")
		const uintRInfVvg = BigInt("1296")
		const uintM05I6QL = BigInt("1280")
//		const uint256155YY2 = await FairStockEquityK3h2g1a.setProfitPercentPJ.call(uintm9Weqh6, {from: accounts[1]});
//		const addressPJ5DCzW = await FairStockEquityK3h2g1a.setDataSource.call(addressYqdbJdl, {from: accounts[3]});
//		const uint256s9dla1w = await FairStockEquityK3h2g1a.setStartTime.call(uintsXmbcJ, {from: accounts[0]});
//		const uint256U6fMbET = await FairStockEquityK3h2g1a.setGasFeeForCallback.call(uintRInfVvg, {from: accounts[0]});
//		const uint256HdYWWX7 = await FairStockEquityK3h2g1a.setProfitPercentBonus.call(uintM05I6QL, {from: accounts[0]});

		await expect(FairStockEquityK3h2g1a.setProfitPercentPJ.call(uintm9Weqh6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressapGaKti = accounts[4]
		const addressAiOY4Xw = accounts[2]
		const addressukcdayl = accounts[1]
		const addressmpAbRWw = accounts[3]
		const uintwf1ktda = BigInt("1479")
		const FairStockEquityj3dXywg = await FairStockEquity.new(addressapGaKti, addressAiOY4Xw, addressukcdayl, addressmpAbRWw, uintwf1ktda, {from: accounts[0]});
		const uintquGTmX8 = BigInt("273")
		const addressCZRZ0Ye = "0x0000000000000000000000000000000000000001"
		const uintlhxD05O = BigInt("917")
//		const uint256J3kVBW7 = await FairStockEquityj3dXywg.bonus.call(uintquGTmX8, {from: accounts[2]});
//		await FairStockEquityj3dXywg.onlyDataSource.call({from: accounts[3]});
//		const addressyvkTzzE = await FairStockEquityj3dXywg.setDataSource.call(addressCZRZ0Ye, {from: accounts[2]});
//		const uint256qlI7ky8 = await FairStockEquityj3dXywg.depositBonus.call(uintlhxD05O, {from: accounts[3]});

		await expect(FairStockEquityj3dXywg.bonus.call(uintquGTmX8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressT1iDxd = accounts[1]
		const addressxlVnUZH = accounts[4]
		const addressGMWZg3Z = accounts[0]
		const addresshByqcSp = accounts[1]
		const uintqeZ8OBz = BigInt("1164")
		const FairStockEquityo470Mpa = await FairStockEquity.new(addressT1iDxd, addressxlVnUZH, addressGMWZg3Z, addresshByqcSp, uintqeZ8OBz, {from: accounts[4]});
		const uinttPJIabT = BigInt("899")
		const uintnsy63Wf = BigInt("1366")
		const uintgmly3p5 = BigInt("1281")
		const uintarGMECy = BigInt("1154")
		const addresslnfnLxl = accounts[3]
		const uint8knced = BigInt("1729")
		const uintteyWK9P = BigInt("1867")
		const uintCQdEV3X = BigInt("352")
		const uintEgM6Vw = BigInt("1909")
		const uintLmD2BCT = BigInt("1097")
		const uintlhTcreR = BigInt("73")
//		const addressqcrQvMg = await FairStockEquityo470Mpa.business.call(addresslnfnLxl, uintarGMECy, uintgmly3p5, uintnsy63Wf, uinttPJIabT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256TDe1JNM = await FairStockEquityo470Mpa.setDegree.call(uintLmD2BCT, uintEgM6Vw, uintCQdEV3X, uintteyWK9P, uint8knced, {from: accounts[1]});
//		await FairStockEquityo470Mpa.withdrawPJ.call({from: accounts[1]});
//		const uint256ujHGNd9 = await FairStockEquityo470Mpa.setStartTime.call(uintlhTcreR, {from: accounts[2]});

		await expect(FairStockEquityo470Mpa.business.call(addresslnfnLxl, uintarGMECy, uintgmly3p5, uintnsy63Wf, uinttPJIabT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address7u4xpn = accounts[5]
		const addressyYPWnsQ = accounts[4]
		const addressJyEmTV = accounts[0]
		const addresswge0QqP = accounts[2]
		const uintRSSiVvm = BigInt("331")
		const FairStockEquityz1yK1B0 = await FairStockEquity.new(address7u4xpn, addressyYPWnsQ, addressJyEmTV, addresswge0QqP, uintRSSiVvm, {from: accounts[1]});
		const uinta0NoOm1 = BigInt("132")
		const uintXN6S4Dz = BigInt("336")
		const uintg30d4jb = BigInt("777")
		const uint256KoFUIwr = await FairStockEquityz1yK1B0.getCostAmount.call(uinta0NoOm1, {from: accounts[4]});
//		await FairStockEquityz1yK1B0.f.call({from: accounts[3]});
//		const uint256cUor8Pr = await FairStockEquityz1yK1B0.getCostAmount.call(uintXN6S4Dz, {from: accounts[1]});
//		const uint256jFbsq4C = await FairStockEquityz1yK1B0.bonus.call(uintg30d4jb, {from: accounts[4]});

		await expect(FairStockEquityz1yK1B0.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspC5m2aB = accounts[3]
		const address2wBCvT = accounts[3]
		const addressm1qnqpG = accounts[2]
		const addressoQapfcd = accounts[0]
		const uintl9RWMvP = BigInt("1542")
		const FairStockEquitywQB5hrI = await FairStockEquity.new(addresspC5m2aB, address2wBCvT, addressm1qnqpG, addressoQapfcd, uintl9RWMvP, {from: accounts[2]});
		const uintPuiE8U6 = BigInt("1385")
		const addressj27nRs0 = accounts[1]
		const uintjNQ6DB = BigInt("316")
		const uintOZf35rg = BigInt("913")
		const addressnYzhLWo = accounts[3]
//		const address6fCSrt = await FairStockEquitywQB5hrI.depositLPT.call(addressj27nRs0, uintPuiE8U6, {from: accounts[0]});
//		const addressmh4hZkA = await FairStockEquitywQB5hrI.withdrawMTCallback.call(addressnYzhLWo, uintOZf35rg, uintjNQ6DB, {from: accounts[1]});

		await expect(FairStockEquitywQB5hrI.depositLPT.call(addressj27nRs0, uintPuiE8U6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressndQJCQL = accounts[5]
		const addressXjCvkY4 = accounts[4]
		const addressRhPS9fh = accounts[0]
		const addressmEWX5K = accounts[2]
		const uintaTNl3KJ = BigInt("331")
		const FairStockEquityz1yK1B0 = await FairStockEquity.new(addressndQJCQL, addressXjCvkY4, addressRhPS9fh, addressmEWX5K, uintaTNl3KJ, {from: accounts[1]});
		const uintO2zrz5f = BigInt("770")
		const uintVKzoeDF = BigInt("52")
		const addressQ4RcWZG = accounts[4]
		const boolgRzNmy = false
		const addresslXD2VBv = accounts[3]
//		await FairStockEquityz1yK1B0.f.call({from: accounts[3]});
//		const addressRyiwNTz = await FairStockEquityz1yK1B0.withdrawMTCallback.call(addressQ4RcWZG, uintVKzoeDF, uintO2zrz5f, {from: accounts[2]});
//		const addresslg4PLMN = await FairStockEquityz1yK1B0.setLPT.call(addresslXD2VBv, boolgRzNmy, {from: accounts[1]});

		await expect(FairStockEquityz1yK1B0.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressV6igm9 = accounts[4]
		const address7LmsTl = accounts[5]
		const addressUg0wKpB = accounts[3]
		const addresslRH88aV = accounts[3]
		const uintEzwu6Te = BigInt("609")
		const FairStockEquityaCu9Eqo = await FairStockEquity.new(addressV6igm9, address7LmsTl, addressUg0wKpB, addresslRH88aV, uintEzwu6Te, {from: "0x0000000000000000000000000000000000000001"});
		const uinthFIpPw = BigInt("1089")
		const uintPrd1VRP = BigInt("1262")
		const uinttTuQK2f = BigInt("939")
		const addressuichyY9 = accounts[3]
		const uintXO7vltR = BigInt("1945")
		await FairStockEquityaCu9Eqo.checkStart.call({from: accounts[2]});
		const uint256IiswSuR = await FairStockEquityaCu9Eqo.setGasFeeForCallback.call(uinthFIpPw, {from: accounts[2]});
		const addressad5R1ot = await FairStockEquityaCu9Eqo.setModule.call(addressuichyY9, uinttTuQK2f, uintPrd1VRP, {from: accounts[2]});
		const uint256qf8wQ5z = await FairStockEquityaCu9Eqo.setProfitPercentBonus.call(uintXO7vltR, {from: accounts[1]});
	});

	it('test for FairStockEquity', async () => {
		const addressukUA6Q3 = accounts[4]
		const addressLlYq2Hl = accounts[2]
		const addressEpFMMd = accounts[1]
		const addresspaE6fbi = accounts[3]
		const uintkMqCH8E = BigInt("1479")
		const FairStockEquityj3dXywg = await FairStockEquity.new(addressukUA6Q3, addressLlYq2Hl, addressEpFMMd, addresspaE6fbi, uintkMqCH8E, {from: accounts[0]});
		const uintip8Ofy = BigInt("1036")
		const address8hHvwm = accounts[2]
		const uintRIXE2x = BigInt("1174")
//		const addressKN1059k = await FairStockEquityj3dXywg.withdrawLPT.call(address8hHvwm, uintip8Ofy, {from: accounts[0]});
//		const uint256qlI7ky8 = await FairStockEquityj3dXywg.depositBonus.call(uintRIXE2x, {from: accounts[3]});

		await expect(FairStockEquityj3dXywg.withdrawLPT.call(address8hHvwm, uintip8Ofy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressj6z09Qk = accounts[5]
		const addressxGDfBu = accounts[4]
		const addressvsQZVaZ = accounts[0]
		const addresscPJd61x = accounts[2]
		const uintkWu6kKk = BigInt("331")
		const FairStockEquityz1yK1B0 = await FairStockEquity.new(addressj6z09Qk, addressxGDfBu, addressvsQZVaZ, addresscPJd61x, uintkWu6kKk, {from: accounts[1]});
		const uintBv0OzYA = BigInt("119")
//		await FairStockEquityz1yK1B0.withdrawPJ.call({from: accounts[1]});
//		const uint256KoFUIwr = await FairStockEquityz1yK1B0.getCostAmount.call(uintBv0OzYA, {from: accounts[4]});

		await expect(FairStockEquityz1yK1B0.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressePboqkq = accounts[5]
		const addressFpstXwC = accounts[4]
		const addressv5ogFcS = accounts[0]
		const addressqMmdVLP = accounts[2]
		const uintbjytGla = BigInt("331")
		const FairStockEquityz1yK1B0 = await FairStockEquity.new(addressePboqkq, addressFpstXwC, addressv5ogFcS, addressqMmdVLP, uintbjytGla, {from: accounts[1]});
		const uintYFY1EFQ = BigInt("1800")
		const uintuv4c2j = BigInt("1100")
		const uintX9nQ0e2 = BigInt("152")
		const uintFtMHmmf = BigInt("309")
		const uintEoih31h = BigInt("1438")
		const uintvx2B1o = BigInt("2002")
		const uintfuGUMLI = BigInt("132")
//		const uint256Oh40ncv = await FairStockEquityz1yK1B0.bonus.call(uintYFY1EFQ, {from: accounts[2]});
//		const uint256rQ4n6bL = await FairStockEquityz1yK1B0.setDegree.call(uintvx2B1o, uintEoih31h, uintFtMHmmf, uintX9nQ0e2, uintuv4c2j, {from: accounts[2]});
//		const uint256KoFUIwr = await FairStockEquityz1yK1B0.getCostAmount.call(uintfuGUMLI, {from: accounts[4]});

		await expect(FairStockEquityz1yK1B0.bonus.call(uintYFY1EFQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDo6jEV1 = accounts[5]
		const addresszUSISNX = accounts[4]
		const addressSRezst = accounts[0]
		const addressdOcnIUh = accounts[2]
		const uintQ2cfJ3d = BigInt("331")
		const FairStockEquityz1yK1B0 = await FairStockEquity.new(addressDo6jEV1, addresszUSISNX, addressSRezst, addressdOcnIUh, uintQ2cfJ3d, {from: accounts[1]});
		const uintc7WwAMq = BigInt("124")
		const uintPaGrWJ = BigInt("703")
		const uintDWleuVQ = BigInt("996")
		const addresshb07qSB = accounts[4]
		const uint256KoFUIwr = await FairStockEquityz1yK1B0.getCostAmount.call(uintc7WwAMq, {from: accounts[4]});
		const addressbXoBDW = await FairStockEquityz1yK1B0.setModule.call(addresshb07qSB, uintDWleuVQ, uintPaGrWJ, {from: accounts[1]});
	});

	it('test for FairStockEquity', async () => {
		const addresscYybkE = accounts[3]
		const addressb9tmAIt = accounts[3]
		const addressue9dPY = accounts[2]
		const addressrX8lw7j = accounts[0]
		const uintD1S4ghm = BigInt("1542")
		const FairStockEquitywQB5hrI = await FairStockEquity.new(addresscYybkE, addressb9tmAIt, addressue9dPY, addressrX8lw7j, uintD1S4ghm, {from: accounts[2]});
		const addressMwXLdUt = accounts[2]
		const boolrIEDz2 = true
		const addressTox3Fuu = accounts[4]
		const uintInvKxyg = BigInt("1405")
		const addresspN4i9kl = accounts[1]
		const addressXLpHa0 = await FairStockEquitywQB5hrI.setDataSource.call(addressMwXLdUt, {from: accounts[2]});
		const addressYC5thMl = await FairStockEquitywQB5hrI.setLPT.call(addressTox3Fuu, boolrIEDz2, {from: accounts[2]});
//		const address6fCSrt = await FairStockEquitywQB5hrI.depositLPT.call(addresspN4i9kl, uintInvKxyg, {from: accounts[0]});

		await expect(FairStockEquitywQB5hrI.depositLPT.call(addresspN4i9kl, uintInvKxyg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYJmIGIr = accounts[4]
		const addressmdYvn6x = accounts[2]
		const addresswCPOAk = accounts[1]
		const addressrMFFCWz = accounts[3]
		const uintp4HOsj5 = BigInt("1479")
		const FairStockEquityj3dXywg = await FairStockEquity.new(addressYJmIGIr, addressmdYvn6x, addresswCPOAk, addressrMFFCWz, uintp4HOsj5, {from: accounts[0]});
		const uintqdB68Sz = BigInt("968")
		const uint0paAtC = BigInt("64")
		const addressNbNywgM = accounts[4]
		const uinto0bWugz = BigInt("923")
//		const addressjsb14x = await FairStockEquityj3dXywg.withdrawBonusCallback.call(addressNbNywgM, uint0paAtC, uintqdB68Sz, {from: accounts[3]});
//		const uint256qlI7ky8 = await FairStockEquityj3dXywg.depositBonus.call(uinto0bWugz, {from: accounts[3]});

		await expect(FairStockEquityj3dXywg.withdrawBonusCallback.call(addressNbNywgM, uint0paAtC, uintqdB68Sz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresselCK2wG = accounts[5]
		const addressMh1Ludh = accounts[4]
		const addressmMJxxkc = accounts[0]
		const addressXefwkfe = accounts[2]
		const uintrY2LlKw = BigInt("331")
		const FairStockEquityz1yK1B0 = await FairStockEquity.new(addresselCK2wG, addressMh1Ludh, addressmMJxxkc, addressXefwkfe, uintrY2LlKw, {from: accounts[1]});
		const uintS4FddfD = BigInt("1701")
		const uintxPP16SI = BigInt("102")
		const uint256XOudtGV = await FairStockEquityz1yK1B0.setStartTime.call(uintS4FddfD, {from: accounts[1]});
		const uint256KoFUIwr = await FairStockEquityz1yK1B0.getCostAmount.call(uintxPP16SI, {from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addressOOoZPiT = accounts[4]
		const addressY0fxrYW = accounts[2]
		const addressqSxCwt7 = accounts[1]
		const addressd4B5ro = accounts[3]
		const uintm9LXvjs = BigInt("1479")
		const FairStockEquityj3dXywg = await FairStockEquity.new(addressOOoZPiT, addressY0fxrYW, addressqSxCwt7, addressd4B5ro, uintm9LXvjs, {from: accounts[0]});
		const uinteQV83PF = BigInt("231")
		const uintcUNYLfi = BigInt("923")
//		const uint256ocagZzK = await FairStockEquityj3dXywg.setStartTime.call(uinteQV83PF, {from: accounts[0]});
//		const uint256qlI7ky8 = await FairStockEquityj3dXywg.depositBonus.call(uintcUNYLfi, {from: accounts[3]});
//		await FairStockEquityj3dXywg.withdrawPJ.call({from: accounts[2]});

		await expect(FairStockEquityj3dXywg.setStartTime.call(uinteQV83PF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})