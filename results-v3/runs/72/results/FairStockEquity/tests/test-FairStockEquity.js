const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressSo0MdA = accounts[1]
		const addressieEbdZk = accounts[0]
		const addressBXFGuD = accounts[2]
		const addressBirhCV = accounts[0]
		const uintHK6wZy = BigInt("744")
		const FairStockEquityBArJMWw = await FairStockEquity.new(addressSo0MdA, addressieEbdZk, addressBXFGuD, addressBirhCV, uintHK6wZy, {from: accounts[4]});
		const uintg9YH5ri = BigInt("1947")
		const uintiAGnfBP = BigInt("1919")
		const uintDqohQ8 = BigInt("943")
		const uinttYk2eCc = BigInt("605")
		const addressoQN0Mcj = "0x0000000000000000000000000000000000000001"
		const uintYOurWTB = BigInt("733")
		const addressMkiCdX = accounts[3]
		const uintyukn2F = BigInt("354")
		const addressokeUm8 = "0x0000000000000000000000000000000000000001"
		const uinty3vQPUN = BigInt("203")
		const uint256oSJr7dh = await FairStockEquityBArJMWw.setStartTime.call(uintg9YH5ri, {from: accounts[4]});
		const uint256jiJmPl2 = await FairStockEquityBArJMWw.setProfitPercentMT.call(uintiAGnfBP, {from: accounts[5]});
		const addressjbcImwI = await FairStockEquityBArJMWw.withdrawMTCallback.call(addressoQN0Mcj, uinttYk2eCc, uintDqohQ8, {from: accounts[0]});
		const addressGlEZr9B = await FairStockEquityBArJMWw.withdrawLPT.call(addressMkiCdX, uintYOurWTB, {from: accounts[4]});
		const addressFBnqOIz = await FairStockEquityBArJMWw.depositLPT.call(addressokeUm8, uintyukn2F, {from: accounts[3]});
		const uint256KwvVBN7 = await FairStockEquityBArJMWw.setStartTime.call(uinty3vQPUN, {from: accounts[3]});

		await expect(FairStockEquityBArJMWw.setProfitPercentMT.call(uintiAGnfBP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHqW0itm = accounts[1]
		const addressmzExar2 = accounts[1]
		const addressv58PhO = accounts[1]
		const addressrner4H = accounts[4]
		const uintsfHXHsG = BigInt("1841")
		const FairStockEquityWejIVkS = await FairStockEquity.new(addressHqW0itm, addressmzExar2, addressv58PhO, addressrner4H, uintsfHXHsG, {from: accounts[3]});
		const uintpT9iIjM = BigInt("250")
		const addressAmnihnW = accounts[4]
		const uintZkuloYJ = BigInt("394")
		const uintdzAWJ8F = BigInt("1836")
		const uintrAln1iv = BigInt("736")
		const addressYmieMX = accounts[5]
		const addressHMS2Fn4 = await FairStockEquityWejIVkS.depositLPT.call(addressAmnihnW, uintpT9iIjM, {from: accounts[1]});
		await FairStockEquityWejIVkS.withdrawPJ.call({from: accounts[0]});
		const uint256ydpftHO = await FairStockEquityWejIVkS.setProfitPercentMT.call(uintZkuloYJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressQGA2VjB = await FairStockEquityWejIVkS.withdrawBonusCallback.call(addressYmieMX, uintrAln1iv, uintdzAWJ8F, {from: accounts[4]});

		await expect(FairStockEquityWejIVkS.depositLPT.call(addressAmnihnW, uintpT9iIjM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressaLkvXYn = accounts[0]
		const addressuwQSpTa = "0x0000000000000000000000000000000000000001"
		const addressGbWOFKj = accounts[4]
		const addresswnrAsdL = accounts[0]
		const uintL2MR0Sy = BigInt("1646")
		const FairStockEquityAbJ89VS = await FairStockEquity.new(addressaLkvXYn, addressuwQSpTa, addressGbWOFKj, addresswnrAsdL, uintL2MR0Sy, {from: accounts[2]});
		const uintd8nUFCl = BigInt("284")
		const addressvZ7THWd = accounts[3]
		const uintb8buOTr = BigInt("710")
		const uintbASKbbS = BigInt("630")
		const uintDevaWf0 = BigInt("1429")
		const addressNMlTC6D = accounts[5]
		await FairStockEquityAbJ89VS.onlyDataSource.call({from: accounts[2]});
		const addressAiNcBZo = await FairStockEquityAbJ89VS.withdrawLPT.call(addressvZ7THWd, uintd8nUFCl, {from: accounts[1]});
		const uint256WyzE1T0 = await FairStockEquityAbJ89VS.depositBonus.call(uintb8buOTr, {from: "0x0000000000000000000000000000000000000001"});
		const addressBnfOMDo = await FairStockEquityAbJ89VS.setModule.call(addressNMlTC6D, uintDevaWf0, uintbASKbbS, {from: accounts[5]});

		await expect(FairStockEquityAbJ89VS.onlyDataSource.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdMIcmV1 = accounts[2]
		const addresss6z620J = "0x0000000000000000000000000000000000000001"
		const addressL1icSY5 = accounts[2]
		const addresschdW7g = accounts[4]
		const uintYGHcZk5 = BigInt("88")
		const FairStockEquityzgDmBfF = await FairStockEquity.new(addressdMIcmV1, addresss6z620J, addressL1icSY5, addresschdW7g, uintYGHcZk5, {from: accounts[4]});
		const addressCHuvro9 = accounts[3]
		await FairStockEquityzgDmBfF.withdrawPJ.call({from: accounts[4]});
		const addressKWHcCxa = await FairStockEquityzgDmBfF.setDataSource.call(addressCHuvro9, {from: accounts[1]});
		await FairStockEquityzgDmBfF.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityzgDmBfF.withdrawPJ.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspGInXwQ = accounts[1]
		const addressZaVcdzc = accounts[2]
		const addressgt0s0rE = accounts[3]
		const addressbAm9P39 = accounts[1]
		const uintn3eRPZV = BigInt("424")
		const FairStockEquitykblHehK = await FairStockEquity.new(addresspGInXwQ, addressZaVcdzc, addressgt0s0rE, addressbAm9P39, uintn3eRPZV, {from: accounts[0]});
		const uintEvHY8g = BigInt("1462")
		const uintYmN6s9A = BigInt("447")
		const uintta3WBED = BigInt("1131")
		const uintwoVkrcg = BigInt("1280")
		const addressgkoHpK3 = accounts[1]
		const uintotV5hLo = BigInt("1600")
		const addressx5iP92A = await FairStockEquitykblHehK.business.call(addressgkoHpK3, uintwoVkrcg, uintta3WBED, uintYmN6s9A, uintEvHY8g, {from: accounts[2]});
		const uint256AARTyyt = await FairStockEquitykblHehK.setProfitPercentPJ.call(uintotV5hLo, {from: accounts[3]});

		await expect(FairStockEquitykblHehK.business.call(addressgkoHpK3, uintwoVkrcg, uintta3WBED, uintYmN6s9A, uintEvHY8g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAona1pO = accounts[4]
		const addressUY3uTod = accounts[1]
		const addressFXgWG5Q = accounts[3]
		const addressbdBqmO2 = accounts[5]
		const uintLtliEXN = BigInt("817")
		const FairStockEquityGUapYak = await FairStockEquity.new(addressAona1pO, addressUY3uTod, addressFXgWG5Q, addressbdBqmO2, uintLtliEXN, {from: accounts[3]});
		const uintgO6FPSK = BigInt("1044")
		const uintxnTbdwf = BigInt("854")
		const uintgzCtGVx = BigInt("1150")
		const uintIikGxF = BigInt("1263")
		const uint8QkOZ2 = BigInt("1338")
		const uintQs8uMeO = BigInt("476")
		const uintEX50brA = BigInt("265")
		const boolnSgzR8c = false
		const addressWTf1V1 = accounts[3]
		const uint256rtU7aRk = await FairStockEquityGUapYak.depositBonus.call(uintgO6FPSK, {from: accounts[4]});
		const uint256AtYPJ3S = await FairStockEquityGUapYak.setDegree.call(uintQs8uMeO, uint8QkOZ2, uintIikGxF, uintgzCtGVx, uintxnTbdwf, {from: accounts[3]});
		const uint256R4l6kPY = await FairStockEquityGUapYak.reduceShare.call(uintEX50brA, {from: "0x0000000000000000000000000000000000000001"});
		const addressUc4PI0z = await FairStockEquityGUapYak.setLPT.call(addressWTf1V1, boolnSgzR8c, {from: accounts[1]});

		await expect(FairStockEquityGUapYak.depositBonus.call(uintgO6FPSK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressWePzzaE = accounts[0]
		const addressmzlNAUd = accounts[2]
		const addressgDG06yE = accounts[1]
		const addressLJ93KO7 = accounts[2]
		const uintpGaIGJN = BigInt("675")
		const FairStockEquitylnCPAED = await FairStockEquity.new(addressWePzzaE, addressmzlNAUd, addressgDG06yE, addressLJ93KO7, uintpGaIGJN, {from: "0x0000000000000000000000000000000000000001"});
		const uintEQba8s9 = BigInt("1060")
		const uintnULlRt7 = BigInt("1446")
		const uintW4Az9AE = BigInt("945")
		const addressh0cLGnM = accounts[4]
		const uintPGPcDav = BigInt("515")
		const uintyj59F3n = BigInt("1611")
		const uintEp1REev = BigInt("723")
		const uintt5m9Ip9 = BigInt("1487")
		const uintpxZ6lAI = BigInt("4")
		const uinteAC7OM0 = BigInt("722")
		const uint256f3fXrfA = await FairStockEquitylnCPAED.setProfitPercentBonus.call(uintEQba8s9, {from: accounts[0]});
		const addressSjKOIM = await FairStockEquitylnCPAED.withdrawMTCallback.call(addressh0cLGnM, uintW4Az9AE, uintnULlRt7, {from: accounts[3]});
		await FairStockEquitylnCPAED.withdrawPJ.call({from: accounts[5]});
		const uint256bhdEjL = await FairStockEquitylnCPAED.setStartTime.call(uintPGPcDav, {from: "0x0000000000000000000000000000000000000001"});
		const uint256de1Q3B = await FairStockEquitylnCPAED.setDegree.call(uinteAC7OM0, uintpxZ6lAI, uintt5m9Ip9, uintEp1REev, uintyj59F3n, {from: accounts[5]});
		await FairStockEquitylnCPAED.withdrawMT.call({from: accounts[1]});
	});

	it('test for FairStockEquity', async () => {
		const addressSZFCi2y = accounts[2]
		const address6eNzNH = accounts[1]
		const addressyu1AItT = "0x0000000000000000000000000000000000000001"
		const addressKS3tOom = accounts[3]
		const uintwsm7Ldq = BigInt("358")
		const FairStockEquityFJJsfo6 = await FairStockEquity.new(addressSZFCi2y, address6eNzNH, addressyu1AItT, addressKS3tOom, uintwsm7Ldq, {from: accounts[3]});
		const uintm0ZDMZP = BigInt("728")
		const uintd7TNTzh = BigInt("1308")
		const addressXRDMqD8 = accounts[1]
		const uintiS8w3h3 = BigInt("1216")
		const uintUZyaKNH = BigInt("1437")
		const addressDX8tJDW = await FairStockEquityFJJsfo6.withdrawBonusCallback.call(addressXRDMqD8, uintd7TNTzh, uintm0ZDMZP, {from: accounts[5]});
		const uint256RNPiyrV = await FairStockEquityFJJsfo6.setProfitPercentPJ.call(uintiS8w3h3, {from: accounts[1]});
		const uint256yP5lJy = await FairStockEquityFJJsfo6.setProfitPercentPJ.call(uintUZyaKNH, {from: accounts[4]});

		await expect(FairStockEquityFJJsfo6.withdrawBonusCallback.call(addressXRDMqD8, uintd7TNTzh, uintm0ZDMZP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslCxhSiX = accounts[1]
		const addressajkQ9rm = accounts[2]
		const addresst2qQHRC = accounts[3]
		const addressbgjGLu = accounts[1]
		const uintNebiLKm = BigInt("424")
		const FairStockEquitykblHehK = await FairStockEquity.new(addresslCxhSiX, addressajkQ9rm, addresst2qQHRC, addressbgjGLu, uintNebiLKm, {from: accounts[0]});
		const uintY7ibQfO = BigInt("1489")
		const uintA5aYhxG = BigInt("1462")
		const uinteAX9zVZ = BigInt("447")
		const uintBE690zg = BigInt("1131")
		const uintVFB8kob = BigInt("1280")
		const addressmtn0yBY = accounts[1]
		const uintAlaxIN = BigInt("818")
		const uintX8yHmsf = BigInt("1455")
		const uintpVSPGxj = BigInt("1242")
		const addressyJhVE8P = accounts[0]
		const uint256WBOoZuX = await FairStockEquitykblHehK.setGasFeeForCallback.call(uintY7ibQfO, {from: accounts[4]});
		const addressx5iP92A = await FairStockEquitykblHehK.business.call(addressmtn0yBY, uintVFB8kob, uintBE690zg, uinteAX9zVZ, uintA5aYhxG, {from: accounts[2]});
		const uint256h4lm9qu = await FairStockEquitykblHehK.getCostAmount.call(uintAlaxIN, {from: accounts[1]});
		await FairStockEquitykblHehK.checkStart.call({from: accounts[0]});
		const addressHooxL1v = await FairStockEquitykblHehK.withdrawMTCallback.call(addressyJhVE8P, uintpVSPGxj, uintX8yHmsf, {from: accounts[1]});

		await expect(FairStockEquitykblHehK.setGasFeeForCallback.call(uintY7ibQfO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressCcqYNYh = accounts[5]
		const addressDLnkOLO = accounts[5]
		const address2XX194 = accounts[0]
		const addressBKaxLGI = accounts[2]
		const uintQ9BDiJ5 = BigInt("1933")
		const FairStockEquityUMucogh = await FairStockEquity.new(addressCcqYNYh, addressDLnkOLO, address2XX194, addressBKaxLGI, uintQ9BDiJ5, {from: accounts[2]});
		const uintNC0Br5x = BigInt("1209")
		const uintxAdYUan = BigInt("1697")
		const uintOefiC9H = BigInt("1582")
		const uintT4t6iMK = BigInt("347")
		const uint256eTSwOH5 = await FairStockEquityUMucogh.setStartTime.call(uintNC0Br5x, {from: accounts[2]});
		const uint256SML8D9 = await FairStockEquityUMucogh.setProfitPercentBonus.call(uintxAdYUan, {from: accounts[3]});
		const uint256FOxj9qJ = await FairStockEquityUMucogh.invest.call(uintOefiC9H, {from: accounts[0]});
		const uint256k6FbhhU = await FairStockEquityUMucogh.setProfitPercentMT.call(uintT4t6iMK, {from: accounts[1]});

		await expect(FairStockEquityUMucogh.setStartTime.call(uintNC0Br5x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressfuLIEwe = accounts[1]
		const addressycl6IwA = accounts[1]
		const addressgIDipij = accounts[0]
		const addressZDQPJiW = accounts[0]
		const uintpBhB8GD = BigInt("511")
		const FairStockEquityg7epn5x = await FairStockEquity.new(addressfuLIEwe, addressycl6IwA, addressgIDipij, addressZDQPJiW, uintpBhB8GD, {from: accounts[4]});
		const uintINOFyPD = BigInt("165")
		const addressw8InGi = accounts[3]
		const uintYJgtQdE = BigInt("867")
		const uintyI47R3q = BigInt("1316")
		const addresstNXMAha = accounts[2]
		const addressPbf0ium = await FairStockEquityg7epn5x.withdrawLPT.call(addressw8InGi, uintINOFyPD, {from: accounts[2]});
		const uint256XPr1ZFh = await FairStockEquityg7epn5x.bonus.call(uintYJgtQdE, {from: accounts[0]});
		await FairStockEquityg7epn5x.withdrawPJ.call({from: accounts[3]});
		const addressRzCVj0u = await FairStockEquityg7epn5x.withdrawLPT.call(addresstNXMAha, uintyI47R3q, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityg7epn5x.checkStart.call({from: accounts[3]});

		await expect(FairStockEquityg7epn5x.withdrawLPT.call(addressw8InGi, uintINOFyPD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressy0w46oX = accounts[3]
		const addressASYij7K = accounts[0]
		const addressUWPDJLf = accounts[1]
		const addresstjZ6zdn = accounts[2]
		const uintQv0d7Zh = BigInt("12")
		const FairStockEquityD0xq8FN = await FairStockEquity.new(addressy0w46oX, addressASYij7K, addressUWPDJLf, addresstjZ6zdn, uintQv0d7Zh, {from: accounts[3]});
		const uintTWZO7it = BigInt("1186")
		const uinte2Uao6 = BigInt("1043")
		const addresspx5dcyO = accounts[1]
		const uintJuZMzmb = BigInt("1652")
		const addressaCFFWh = accounts[0]
		const addressTkBInN0 = await FairStockEquityD0xq8FN.withdrawBonusCallback.call(addresspx5dcyO, uinte2Uao6, uintTWZO7it, {from: accounts[2]});
		await FairStockEquityD0xq8FN.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityD0xq8FN.onlyDataSource.call({from: accounts[3]});
		const addressdqPN31I = await FairStockEquityD0xq8FN.depositLPT.call(addressaCFFWh, uintJuZMzmb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityD0xq8FN.withdrawBonusCallback.call(addresspx5dcyO, uinte2Uao6, uintTWZO7it, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressm1a6wdu = accounts[4]
		const addresslGLO2o = "0x0000000000000000000000000000000000000001"
		const addressAMTup6M = "0x0000000000000000000000000000000000000001"
		const addressBxftoyW = accounts[1]
		const uintF8M5Fo = BigInt("1180")
		const FairStockEquitymIXCpk6 = await FairStockEquity.new(addressm1a6wdu, addresslGLO2o, addressAMTup6M, addressBxftoyW, uintF8M5Fo, {from: accounts[1]});
		const uintTJpsWP = BigInt("2022")
		const uintwJB3qKj = BigInt("1174")
		const uintE5T6aq9 = BigInt("1151")
		const addressxZ1bGk = accounts[5]
		const uintoeK4Qvr = BigInt("1236")
		const uintO6cMc61 = BigInt("755")
		const addressy2qIdQw = accounts[0]
		await FairStockEquitymIXCpk6.f.call({from: accounts[3]});
		const uint256nEcfAj1 = await FairStockEquitymIXCpk6.setGasFeeForCallback.call(uintTJpsWP, {from: accounts[5]});
		const addressbejQJ0p = await FairStockEquitymIXCpk6.setModule.call(addressxZ1bGk, uintE5T6aq9, uintwJB3qKj, {from: accounts[2]});
		const uint256zqo6nc = await FairStockEquitymIXCpk6.setGasFeeForCallback.call(uintoeK4Qvr, {from: accounts[0]});
		const addressu2SrZJ7 = await FairStockEquitymIXCpk6.depositLPT.call(addressy2qIdQw, uintO6cMc61, {from: accounts[1]});

		await expect(FairStockEquitymIXCpk6.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQK27uJb = accounts[1]
		const addresstvL06AJ = accounts[1]
		const addressq057HNS = accounts[1]
		const addressnI8l7q9 = accounts[4]
		const uintGN5a4Ky = BigInt("1841")
		const FairStockEquityWejIVkS = await FairStockEquity.new(addressQK27uJb, addresstvL06AJ, addressq057HNS, addressnI8l7q9, uintGN5a4Ky, {from: accounts[3]});
		const uintSR3PQqn = BigInt("1818")
		const uintIkglA9N = BigInt("1114")
		const uintobqY2ot = BigInt("2009")
		const addressSpm9Lg5 = accounts[1]
		const uintIkWnLus = BigInt("238")
		const addresstZO5GZE = accounts[2]
		const uinteWnPCNJ = BigInt("394")
		await FairStockEquityWejIVkS.withdrawMT.call({from: accounts[1]});
		const uint256cBxyZQE = await FairStockEquityWejIVkS.setGasFeeForCallback.call(uintSR3PQqn, {from: accounts[0]});
		const addressQVAEtOm = await FairStockEquityWejIVkS.withdrawMTCallback.call(addressSpm9Lg5, uintobqY2ot, uintIkglA9N, {from: accounts[1]});
		const addressHMS2Fn4 = await FairStockEquityWejIVkS.depositLPT.call(addresstZO5GZE, uintIkWnLus, {from: accounts[1]});
		const uint256ydpftHO = await FairStockEquityWejIVkS.setProfitPercentMT.call(uinteWnPCNJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityWejIVkS.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address4mdSMu = accounts[1]
		const addressbhwLkbj = accounts[1]
		const addressgbuxeZW = accounts[1]
		const addressWLAtYxP = accounts[4]
		const uintFqrDfnn = BigInt("1841")
		const FairStockEquityWejIVkS = await FairStockEquity.new(address4mdSMu, addressbhwLkbj, addressgbuxeZW, addressWLAtYxP, uintFqrDfnn, {from: accounts[3]});
		const uinthcCh9KH = BigInt("884")
		const boolsx926f7 = true
		const addressr5u2zfu = accounts[0]
		const uintZkpxudg = BigInt("394")
		const uint256pAO9oR = await FairStockEquityWejIVkS.reduceShare.call(uinthcCh9KH, {from: accounts[2]});
		const addressQc1vl2C = await FairStockEquityWejIVkS.setLPT.call(addressr5u2zfu, boolsx926f7, {from: accounts[0]});
		const uint256ydpftHO = await FairStockEquityWejIVkS.setProfitPercentMT.call(uintZkpxudg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityWejIVkS.reduceShare.call(uinthcCh9KH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOAEkz1U = accounts[1]
		const addressNyAVjhS = accounts[1]
		const addressZlKfBXM = accounts[1]
		const addressN7ec1d0 = accounts[4]
		const uintnPZ35u = BigInt("1841")
		const FairStockEquityWejIVkS = await FairStockEquity.new(addressOAEkz1U, addressNyAVjhS, addressZlKfBXM, addressN7ec1d0, uintnPZ35u, {from: accounts[3]});
		const uintTgBCiZ = BigInt("27")
		const uintFIVKIG = BigInt("469")
		const addressWUByhhY = "0x0000000000000000000000000000000000000001"
		const uintVjzr9C7 = BigInt("2015")
		const addressMpSRKOj = accounts[1]
		const addressvI77QEF = await FairStockEquityWejIVkS.withdrawMTCallback.call(addressWUByhhY, uintFIVKIG, uintTgBCiZ, {from: accounts[4]});
		const uint256ydpftHO = await FairStockEquityWejIVkS.setProfitPercentMT.call(uintVjzr9C7, {from: "0x0000000000000000000000000000000000000001"});
		const addresstaUwyMM = await FairStockEquityWejIVkS.setDataSource.call(addressMpSRKOj, {from: accounts[0]});

		await expect(FairStockEquityWejIVkS.withdrawMTCallback.call(addressWUByhhY, uintFIVKIG, uintTgBCiZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressVAOEdXp = accounts[1]
		const addressin697Sq = accounts[1]
		const addressSFK3jP = accounts[4]
		const addressel4HnDd = accounts[4]
		const uintYTLfBeg = BigInt("1227")
		const FairStockEquityoxQ5THp = await FairStockEquity.new(addressVAOEdXp, addressin697Sq, addressSFK3jP, addressel4HnDd, uintYTLfBeg, {from: accounts[1]});
		const uintu9F1hIv = BigInt("22")
		const uint256qBsZV5T = await FairStockEquityoxQ5THp.invest.call(uintu9F1hIv, {from: accounts[2]});
		await FairStockEquityoxQ5THp.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityoxQ5THp.invest.call(uintu9F1hIv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresso7pdSy = accounts[1]
		const addressruG0reF = accounts[2]
		const addressijZ86Vm = accounts[3]
		const addressUkdSQiR = accounts[1]
		const uintw3WL2l6 = BigInt("424")
		const FairStockEquitykblHehK = await FairStockEquity.new(addresso7pdSy, addressruG0reF, addressijZ86Vm, addressUkdSQiR, uintw3WL2l6, {from: accounts[0]});
		const uintxGt0S6h = BigInt("1896")
		const uintbybLXq = BigInt("1158")
		const uintNRmG65X = BigInt("1047")
		const uintuOsJ4Ml = BigInt("1297")
		const uintnG6Shx1 = BigInt("99")
		const addressHHc06d = accounts[2]
		const uintFBj0FhM = BigInt("1462")
		const uintnR9rQCN = BigInt("1069")
		const uintFg4sOey = BigInt("1131")
		const uintIKZytdd = BigInt("1262")
		const addressegXbTnT = accounts[1]
		const uintvKScnlF = BigInt("1600")
		await FairStockEquitykblHehK.withdrawBonus.call({from: accounts[2]});
		const uint256uJDgy8b = await FairStockEquitykblHehK.bonus.call(uintxGt0S6h, {from: accounts[3]});
		const addressYrfqZ9j = await FairStockEquitykblHehK.business.call(addressHHc06d, uintnG6Shx1, uintuOsJ4Ml, uintNRmG65X, uintbybLXq, {from: accounts[3]});
		const addressx5iP92A = await FairStockEquitykblHehK.business.call(addressegXbTnT, uintIKZytdd, uintFg4sOey, uintnR9rQCN, uintFBj0FhM, {from: accounts[2]});
		await FairStockEquitykblHehK.withdrawBonus.call({from: accounts[5]});
		const uint256AARTyyt = await FairStockEquitykblHehK.setProfitPercentPJ.call(uintvKScnlF, {from: accounts[3]});

		await expect(FairStockEquitykblHehK.withdrawBonus.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslZMzAp = accounts[1]
		const addressyaPxYx = accounts[1]
		const addressXSsfyOq = accounts[1]
		const addressYlst0VX = accounts[4]
		const uintfld0V9v = BigInt("1841")
		const FairStockEquityWejIVkS = await FairStockEquity.new(addresslZMzAp, addressyaPxYx, addressXSsfyOq, addressYlst0VX, uintfld0V9v, {from: accounts[3]});
		const uintLQ30HP = BigInt("562")
		const uintqgijxGg = BigInt("634")
		const addressPVDHtul = accounts[0]
		const uintjq3mkmf = BigInt("238")
		const addressdDvLpu = accounts[4]
		const addresszsNmroh = await FairStockEquityWejIVkS.setModule.call(addressPVDHtul, uintqgijxGg, uintLQ30HP, {from: accounts[3]});
		const addressHMS2Fn4 = await FairStockEquityWejIVkS.depositLPT.call(addressdDvLpu, uintjq3mkmf, {from: accounts[1]});

		await expect(FairStockEquityWejIVkS.depositLPT.call(addressdDvLpu, uintjq3mkmf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresssSN9ds2 = accounts[1]
		const addressUp5i2xa = accounts[1]
		const addressZmX9cWN = accounts[1]
		const addressrVnf2Nn = accounts[4]
		const uintkpmb4VG = BigInt("1841")
		const FairStockEquityWejIVkS = await FairStockEquity.new(addresssSN9ds2, addressUp5i2xa, addressZmX9cWN, addressrVnf2Nn, uintkpmb4VG, {from: accounts[3]});
		const boolkLdxyqs = true
		const addressqHl6wXa = accounts[0]
		const uintUkNtBCh = BigInt("238")
		const addresssx4ZLMY = accounts[5]
		const uintx7Vl9aj = BigInt("505")
		const addressMVPGtF0 = await FairStockEquityWejIVkS.setLPT.call(addressqHl6wXa, boolkLdxyqs, {from: accounts[3]});
		const addressHMS2Fn4 = await FairStockEquityWejIVkS.depositLPT.call(addresssx4ZLMY, uintUkNtBCh, {from: accounts[1]});
		const uint256ZdTGFV1 = await FairStockEquityWejIVkS.setProfitPercentPJ.call(uintx7Vl9aj, {from: accounts[4]});

		await expect(FairStockEquityWejIVkS.depositLPT.call(addresssx4ZLMY, uintUkNtBCh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjKjpkln = accounts[1]
		const addressF8RbsTV = accounts[1]
		const addressRjYjN9D = accounts[4]
		const addressphtcztD = accounts[4]
		const uintHgpiEAX = BigInt("1227")
		const FairStockEquityoxQ5THp = await FairStockEquity.new(addressjKjpkln, addressF8RbsTV, addressRjYjN9D, addressphtcztD, uintHgpiEAX, {from: accounts[1]});
		const uintiMkXxTL = BigInt("0")
		const uintgmOrSH = BigInt("1778")
		const uint256qBsZV5T = await FairStockEquityoxQ5THp.invest.call(uintiMkXxTL, {from: accounts[2]});
		await FairStockEquityoxQ5THp.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RPasjI = await FairStockEquityoxQ5THp.reduceShare.call(uintgmOrSH, {from: accounts[3]});

		await expect(FairStockEquityoxQ5THp.invest.call(uintiMkXxTL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressogqOpGx = accounts[1]
		const addressRwWZmU = accounts[2]
		const addressigpmi35 = accounts[3]
		const addressC986aB6 = accounts[1]
		const uintJFPqZ3t = BigInt("424")
		const FairStockEquitykblHehK = await FairStockEquity.new(addressogqOpGx, addressRwWZmU, addressigpmi35, addressC986aB6, uintJFPqZ3t, {from: accounts[0]});
		const uintZoSkZQv = BigInt("1158")
		const uintUFKxdrZ = BigInt("1095")
		const uintF5BMnF1 = BigInt("1305")
		const uintL0qswPx = BigInt("0")
		const addressCa0BFSu = accounts[3]
		const addressYrfqZ9j = await FairStockEquitykblHehK.business.call(addressCa0BFSu, uintL0qswPx, uintF5BMnF1, uintUFKxdrZ, uintZoSkZQv, {from: accounts[3]});

		await expect(FairStockEquitykblHehK.business.call(addressCa0BFSu, uintL0qswPx, uintF5BMnF1, uintUFKxdrZ, uintZoSkZQv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})