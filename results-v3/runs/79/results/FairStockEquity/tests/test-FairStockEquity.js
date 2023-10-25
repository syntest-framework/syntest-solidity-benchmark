const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressxPmAA0Q = accounts[1]
		const addressUDPyea1 = accounts[0]
		const addressP5zGAsH = accounts[3]
		const addressbUWNEw = accounts[0]
		const uintHDNomvQ = BigInt("1256")
		const FairStockEquity4sOZMJ = await FairStockEquity.new(addressxPmAA0Q, addressUDPyea1, addressP5zGAsH, addressbUWNEw, uintHDNomvQ, {from: accounts[1]});
		const uintTe6XLs = BigInt("1933")
		const uint6bwwPU = BigInt("1922")
		const uintnyosAyX = BigInt("900")
		const uintX2Abbp = BigInt("256")
		const uintScMFTOV = BigInt("376")
		const uintg2HWoPh = BigInt("1854")
		const uintVAM94w = BigInt("827")
		const addressNLJnZXN = accounts[0]
		const uint256MAnq9dv = await FairStockEquity4sOZMJ.reduceShare.call(uintTe6XLs, {from: accounts[5]});
		const uint256ffC1pY0 = await FairStockEquity4sOZMJ.setProfitPercentMT.call(uint6bwwPU, {from: accounts[4]});
		await FairStockEquity4sOZMJ.checkStart.call({from: accounts[2]});
		const uint256xVJ2TKC = await FairStockEquity4sOZMJ.setProfitPercentPJ.call(uintnyosAyX, {from: accounts[1]});
		await FairStockEquity4sOZMJ.checkStart.call({from: accounts[3]});
		const addressBZua9d8 = await FairStockEquity4sOZMJ.business.call(addressNLJnZXN, uintVAM94w, uintg2HWoPh, uintScMFTOV, uintX2Abbp, {from: accounts[2]});

		await expect(FairStockEquity4sOZMJ.reduceShare.call(uintTe6XLs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqGQEdw2 = "0x0000000000000000000000000000000000000001"
		const addressMg49Or = accounts[3]
		const addressEjpObH = accounts[3]
		const addressUdkMo0a = accounts[4]
		const uintFAhwxpC = BigInt("1638")
		const FairStockEquityFPe2bra = await FairStockEquity.new(addressqGQEdw2, addressMg49Or, addressEjpObH, addressUdkMo0a, uintFAhwxpC, {from: accounts[5]});
		const uintRmFDj84 = BigInt("1369")
		const uintS3YW21o = BigInt("1944")
		const addressiWugPY7 = accounts[2]
		const uintpjIj0OS = BigInt("1422")
		const uintlxvaFd = BigInt("1227")
		const uinthNeTKZI = BigInt("1613")
		const addressIyrRq1o = accounts[4]
		await FairStockEquityFPe2bra.withdrawPJ.call({from: accounts[2]});
		const addresso92ymQA = await FairStockEquityFPe2bra.setModule.call(addressiWugPY7, uintS3YW21o, uintRmFDj84, {from: accounts[1]});
		const uint256HNuIvDa = await FairStockEquityFPe2bra.setProfitPercentBonus.call(uintpjIj0OS, {from: accounts[2]});
		const addressd3wqNsK = await FairStockEquityFPe2bra.withdrawMTCallback.call(addressIyrRq1o, uinthNeTKZI, uintlxvaFd, {from: accounts[3]});
		await FairStockEquityFPe2bra.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityFPe2bra.withdrawPJ.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressz0KSedJ = accounts[2]
		const addressjHXjlCl = accounts[3]
		const address7QGlLN = accounts[5]
		const addressQwoRtvQ = accounts[5]
		const uintQ6QqDTu = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressz0KSedJ, addressjHXjlCl, address7QGlLN, addressQwoRtvQ, uintQ6QqDTu, {from: accounts[4]});
		const uintH9PBUNI = BigInt("939")
		const uintjnm3Ka7 = BigInt("1698")
		const uintfx66Amm = BigInt("1055")
		const uintstswgH6 = BigInt("1238")
		const uintVMMVmi4 = BigInt("1582")
		const addressqsxNhu4 = accounts[1]
		const addressMwiM8s3 = accounts[5]
		const uinte7nzKH = BigInt("1228")
		const uintSpKKXvw = BigInt("713")
		const uintPZnHZEZ = BigInt("1226")
		const addresso1osu2 = accounts[4]
		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintH9PBUNI, {from: accounts[2]});
		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressqsxNhu4, uintVMMVmi4, uintstswgH6, uintfx66Amm, uintjnm3Ka7, {from: accounts[0]});
		const addressUo49W3r = await FairStockEquityu1W35gd.setDataSource.call(addressMwiM8s3, {from: accounts[4]});
		const uint256QCxF6V = await FairStockEquityu1W35gd.invest.call(uinte7nzKH, {from: accounts[5]});
		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addresso1osu2, uintPZnHZEZ, uintSpKKXvw, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.business.call(addressqsxNhu4, uintVMMVmi4, uintstswgH6, uintfx66Amm, uintjnm3Ka7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressSBJtuv = accounts[2]
		const addressPTCLwO = accounts[2]
		const addressLcul7Cg = accounts[2]
		const addressqECIpSz = accounts[1]
		const uintz0WcPbK = BigInt("1815")
		const FairStockEquityNoTuxNm = await FairStockEquity.new(addressSBJtuv, addressPTCLwO, addressLcul7Cg, addressqECIpSz, uintz0WcPbK, {from: accounts[0]});
		const uintmxtLsGj = BigInt("1481")
		await FairStockEquityNoTuxNm.withdrawBonus.call({from: accounts[4]});
		const uint256GhCFaz = await FairStockEquityNoTuxNm.setProfitPercentMT.call(uintmxtLsGj, {from: accounts[1]});

		await expect(FairStockEquityNoTuxNm.withdrawBonus.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdytm6Mv = accounts[5]
		const addressRD2RmWS = accounts[5]
		const addressZYjo45u = accounts[4]
		const addressGUtroEM = accounts[2]
		const uintlQnMAQU = BigInt("1818")
		const FairStockEquitygJOFlA9 = await FairStockEquity.new(addressdytm6Mv, addressRD2RmWS, addressZYjo45u, addressGUtroEM, uintlQnMAQU, {from: accounts[0]});
		const uintyZn3mou = BigInt("1065")
		const uintYP8N4oo = BigInt("305")
		const uintUNs3JIh = BigInt("1207")
		const addressrWdA8bi = accounts[0]
		const uint256I7raHu = await FairStockEquitygJOFlA9.setProfitPercentBonus.call(uintyZn3mou, {from: accounts[5]});
		const addressrTZMoa = await FairStockEquitygJOFlA9.withdrawMTCallback.call(addressrWdA8bi, uintUNs3JIh, uintYP8N4oo, {from: accounts[3]});

		await expect(FairStockEquitygJOFlA9.setProfitPercentBonus.call(uintyZn3mou, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressg6vh4aL = accounts[0]
		const addressMfrOXZ4 = accounts[3]
		const addressZj69GDn = accounts[1]
		const addressw3PACmw = "0x0000000000000000000000000000000000000001"
		const uintTrmMOU = BigInt("366")
		const FairStockEquitykzEisvZ = await FairStockEquity.new(addressg6vh4aL, addressMfrOXZ4, addressZj69GDn, addressw3PACmw, uintTrmMOU, {from: "0x0000000000000000000000000000000000000001"});
		const uintSohw5CJ = BigInt("1647")
		const uintRO1HS8 = BigInt("790")
		const uintG8aGvy6 = BigInt("1353")
		const uintvXtmNd = BigInt("1165")
		const uinthpUrWNT = BigInt("1885")
		const uintAcmnSFn = BigInt("1783")
		const uintk3XA84r = BigInt("539")
		const uintw1LeC8 = BigInt("670")
		const uintaaRquSg = BigInt("1966")
		const uinttiiKeJB = BigInt("880")
		const addressWy4iasr = accounts[2]
		const uint256de09qOV = await FairStockEquitykzEisvZ.setStartTime.call(uintSohw5CJ, {from: accounts[1]});
		const uint256iwR1BG1 = await FairStockEquitykzEisvZ.setDegree.call(uintAcmnSFn, uinthpUrWNT, uintvXtmNd, uintG8aGvy6, uintRO1HS8, {from: accounts[4]});
		const uint256vS8G6uF = await FairStockEquitykzEisvZ.setStartTime.call(uintk3XA84r, {from: accounts[3]});
		const uint256WO5uK8A = await FairStockEquitykzEisvZ.setProfitPercentPJ.call(uintw1LeC8, {from: accounts[5]});
		const addressDwfCpsZ = await FairStockEquitykzEisvZ.withdrawMTCallback.call(addressWy4iasr, uinttiiKeJB, uintaaRquSg, {from: accounts[1]});
		await FairStockEquitykzEisvZ.checkStart.call({from: accounts[5]});
	});

	it('test for FairStockEquity', async () => {
		const addressaT2XqTU = accounts[4]
		const addressDRY8CIL = accounts[2]
		const addressvVc2lFW = accounts[4]
		const addressvC2YS2i = accounts[1]
		const uintAJS38o3 = BigInt("629")
		const FairStockEquityVKFFyZN = await FairStockEquity.new(addressaT2XqTU, addressDRY8CIL, addressvVc2lFW, addressvC2YS2i, uintAJS38o3, {from: accounts[4]});
		const uintZFFYBgY = BigInt("702")
		const uintSda3hxf = BigInt("986")
		const boolSMyk99m = true
		const addressEpYE855 = "0x0000000000000000000000000000000000000001"
		const uintl1V5bOi = BigInt("190")
		const uintU3ZoXcB = BigInt("685")
		const uint6SC3YT = BigInt("627")
		const uintel0kuo6 = BigInt("298")
		const uintfMs7IN8 = BigInt("442")
		const uintZuAu0FH = BigInt("1577")
		const addressUEahEcs = accounts[4]
		const uint256ZN2qeIf = await FairStockEquityVKFFyZN.depositBonus.call(uintZFFYBgY, {from: accounts[1]});
		const uint256cYyTzUa = await FairStockEquityVKFFyZN.setStartTime.call(uintSda3hxf, {from: accounts[4]});
		const addressF59F00g = await FairStockEquityVKFFyZN.setLPT.call(addressEpYE855, boolSMyk99m, {from: accounts[3]});
		const uint256KrV3i2q = await FairStockEquityVKFFyZN.setDegree.call(uintfMs7IN8, uintel0kuo6, uint6SC3YT, uintU3ZoXcB, uintl1V5bOi, {from: accounts[4]});
		const addresstGtpbz = await FairStockEquityVKFFyZN.withdrawLPT.call(addressUEahEcs, uintZuAu0FH, {from: accounts[0]});

		await expect(FairStockEquityVKFFyZN.depositBonus.call(uintZFFYBgY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszNnJlDj = accounts[2]
		const addressl7qLRg3 = accounts[3]
		const addressIFL4EC0 = accounts[5]
		const addressayzAXlt = accounts[5]
		const uintQ0jQHz5 = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addresszNnJlDj, addressl7qLRg3, addressIFL4EC0, addressayzAXlt, uintQ0jQHz5, {from: accounts[4]});
		const uintNf9cFDW = BigInt("939")
		const uintOfq4XBt = BigInt("697")
		const uintpfq3yPd = BigInt("106")
		const addressPMURQ1G = accounts[4]
		const uintugXtiJY = BigInt("1698")
		const uintBJMR0uV = BigInt("1055")
		const uintINOVbI8 = BigInt("1238")
		const uintV10JhTH = BigInt("1582")
		const addressIF7fgyM = accounts[1]
		const uintinQlw4O = BigInt("90")
		const addressgKR44K = accounts[5]
		const uintv89i02d = BigInt("8")
		const uintTe7Tr1 = BigInt("1832")
		const uintCyrnge = BigInt("470")
		const uintbSG06gK = BigInt("1024")
		const uintE8q6JSX = BigInt("1310")
		const uintzofxOmX = BigInt("713")
		const uintgTnELQR = BigInt("1226")
		const addressUvXAvG3 = accounts[4]
		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintNf9cFDW, {from: accounts[2]});
		const uint256KQgScfb = await FairStockEquityu1W35gd.setProfitPercentMT.call(uintOfq4XBt, {from: accounts[4]});
		const addressfIcCPSD = await FairStockEquityu1W35gd.depositLPT.call(addressPMURQ1G, uintpfq3yPd, {from: accounts[4]});
		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressIF7fgyM, uintV10JhTH, uintINOVbI8, uintBJMR0uV, uintugXtiJY, {from: accounts[0]});
		await FairStockEquityu1W35gd.checkStart.call({from: accounts[3]});
		const uint256ITDjqnA = await FairStockEquityu1W35gd.bonus.call(uintinQlw4O, {from: accounts[0]});
		const addressUo49W3r = await FairStockEquityu1W35gd.setDataSource.call(addressgKR44K, {from: accounts[4]});
		const uint256laSXcWU = await FairStockEquityu1W35gd.setDegree.call(uintE8q6JSX, uintbSG06gK, uintCyrnge, uintTe7Tr1, uintv89i02d, {from: accounts[0]});
		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addressUvXAvG3, uintgTnELQR, uintzofxOmX, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.depositLPT.call(addressPMURQ1G, uintpfq3yPd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressaOQdJd = accounts[2]
		const addressDRp1b66 = accounts[3]
		const addressIFHBs3Z = accounts[5]
		const addressOYbZljt = accounts[5]
		const uintZh96PeZ = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressaOQdJd, addressDRp1b66, addressIFHBs3Z, addressOYbZljt, uintZh96PeZ, {from: accounts[4]});
		const uintXuluHNA = BigInt("939")
		const uintXa7JwUY = BigInt("1579")
		const uint9CDJPu = BigInt("1698")
		const uintmtCwG4G = BigInt("1055")
		const uintvpeGYDB = BigInt("1238")
		const uintLIA2dE = BigInt("1582")
		const addressM7DSdnk = accounts[2]
		const addressPndbYg = accounts[6]
		const uintuVRsCXD = BigInt("1228")
		await FairStockEquityu1W35gd.onlyDataSource.call({from: accounts[4]});
		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintXuluHNA, {from: accounts[2]});
		const uint256lYQVzQm = await FairStockEquityu1W35gd.setStartTime.call(uintXa7JwUY, {from: accounts[1]});
		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressM7DSdnk, uintLIA2dE, uintvpeGYDB, uintmtCwG4G, uint9CDJPu, {from: accounts[0]});
		const addressUo49W3r = await FairStockEquityu1W35gd.setDataSource.call(addressPndbYg, {from: accounts[4]});
		const uint256QCxF6V = await FairStockEquityu1W35gd.invest.call(uintuVRsCXD, {from: accounts[5]});

		await expect(FairStockEquityu1W35gd.onlyDataSource.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvwtsXdI = accounts[2]
		const addressXcyfeVc = accounts[3]
		const addressA1cYYer = accounts[5]
		const addressXsefKZL = accounts[5]
		const uintwsRDmgc = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressvwtsXdI, addressXcyfeVc, addressA1cYYer, addressXsefKZL, uintwsRDmgc, {from: accounts[4]});
		const uintAaeeOD = BigInt("989")
		const uintbwji8up = BigInt("1728")
		const addressRFI4xw = accounts[3]
		const uintwTqrrJR = BigInt("939")
		const uintdEgwDM = BigInt("703")
		const uintvbc4Goi = BigInt("1698")
		const uintxYTbTCe = BigInt("1055")
		const uintpMuDeGw = BigInt("1238")
		const uintzXt8El5 = BigInt("1582")
		const addressiy2CHz0 = accounts[2]
		const uint3HF0K4 = BigInt("90")
		const addressmK8lXKO = accounts[5]
		const uinte3E5FOh = BigInt("713")
		const uintSWHVb8v = BigInt("1264")
		const addresscE9hPcR = accounts[4]
		const addressM7ToKFR = await FairStockEquityu1W35gd.withdrawMTCallback.call(addressRFI4xw, uintbwji8up, uintAaeeOD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintwTqrrJR, {from: accounts[2]});
		const uint256KQgScfb = await FairStockEquityu1W35gd.setProfitPercentMT.call(uintdEgwDM, {from: accounts[4]});
		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressiy2CHz0, uintzXt8El5, uintpMuDeGw, uintxYTbTCe, uintvbc4Goi, {from: accounts[0]});
		const uint256ITDjqnA = await FairStockEquityu1W35gd.bonus.call(uint3HF0K4, {from: accounts[0]});
		await FairStockEquityu1W35gd.withdrawBonus.call({from: accounts[4]});
		const addressUo49W3r = await FairStockEquityu1W35gd.setDataSource.call(addressmK8lXKO, {from: accounts[4]});
		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addresscE9hPcR, uintSWHVb8v, uinte3E5FOh, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.withdrawMTCallback.call(addressRFI4xw, uintbwji8up, uintAaeeOD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAW3wFJy = accounts[2]
		const addressBXHLoYr = accounts[3]
		const addressUUMAyKT = accounts[5]
		const addressIXu0ZmM = accounts[5]
		const uintDWjNcuY = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressAW3wFJy, addressBXHLoYr, addressUUMAyKT, addressIXu0ZmM, uintDWjNcuY, {from: accounts[4]});
		const uintxxe0za = BigInt("939")
		const boolXsdCSxh = false
		const addressRBfWi2E = accounts[1]
		const uintWxfF6mU = BigInt("1698")
		const uintqJutUS = BigInt("1055")
		const uintG1Wiwjj = BigInt("1238")
		const uintqVCwOEu = BigInt("1582")
		const addressMhXAO9 = accounts[1]
		const uintKx05qmN = BigInt("713")
		const uintsHLUDf = BigInt("1226")
		const addressYSXu4ZY = accounts[4]
		const uintWKiSkpy = BigInt("1325")
		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintxxe0za, {from: accounts[2]});
		const addressUKXt5cO = await FairStockEquityu1W35gd.setLPT.call(addressRBfWi2E, boolXsdCSxh, {from: accounts[4]});
		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressMhXAO9, uintqVCwOEu, uintG1Wiwjj, uintqJutUS, uintWxfF6mU, {from: accounts[0]});
		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addressYSXu4ZY, uintsHLUDf, uintKx05qmN, {from: accounts[3]});
		const uint256lt8iJJ = await FairStockEquityu1W35gd.bonus.call(uintWKiSkpy, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.business.call(addressMhXAO9, uintqVCwOEu, uintG1Wiwjj, uintqJutUS, uintWxfF6mU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdCq3NZc = accounts[2]
		const addressJpjlGhw = accounts[3]
		const addresswtLmF0m = accounts[5]
		const addresskYtoG0t = accounts[5]
		const uintt4yBKGA = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressdCq3NZc, addressJpjlGhw, addresswtLmF0m, addresskYtoG0t, uintt4yBKGA, {from: accounts[4]});
		const uintvbG4Dvj = BigInt("939")
		const uints3nWPD = BigInt("1874")
		const addressCJhTdBJ = accounts[2]
		const uinthhuuyn9 = BigInt("1612")
		const uintc1s3JRw = BigInt("1684")
		const addressVOvBQC = accounts[5]
		const uintVRdxWyj = BigInt("713")
		const uintr2S7qm2 = BigInt("1222")
		const addressvLc8cp9 = accounts[4]
		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintvbG4Dvj, {from: accounts[2]});
		const addressGHyGdi = await FairStockEquityu1W35gd.withdrawLPT.call(addressCJhTdBJ, uints3nWPD, {from: "0x0000000000000000000000000000000000000001"});
		const addressb17kdJ7 = await FairStockEquityu1W35gd.setModule.call(addressVOvBQC, uintc1s3JRw, uinthhuuyn9, {from: accounts[0]});
		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addressvLc8cp9, uintr2S7qm2, uintVRdxWyj, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.withdrawLPT.call(addressCJhTdBJ, uints3nWPD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstDWEHR6 = accounts[2]
		const addressS5wyB2d = accounts[3]
		const addressH6BsrD = accounts[5]
		const addressIESFzTz = accounts[5]
		const uintNsvHOCg = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addresstDWEHR6, addressS5wyB2d, addressH6BsrD, addressIESFzTz, uintNsvHOCg, {from: accounts[4]});
		const uintSxWQPh4 = BigInt("1505")
		const uintJDyu0oR = BigInt("1001")
		const uintWdNfke8 = BigInt("1698")
		const uintyYJceD4 = BigInt("1055")
		const uintFDtwCug = BigInt("1238")
		const uintFiMtdt8 = BigInt("674")
		const addressL5IRlvF = accounts[1]
		const uintxJwuPr4 = BigInt("1862")
		const uintzocbAdq = BigInt("760")
		const uintvGhEJm6 = BigInt("482")
		const uintln0WA7j = BigInt("713")
		const uintGHhNyxp = BigInt("67")
		const addressPR5Sdb = accounts[5]
		const uint256JjplI2 = await FairStockEquityu1W35gd.invest.call(uintSxWQPh4, {from: accounts[4]});
		const uint256CBsxcBj = await FairStockEquityu1W35gd.setProfitPercentPJ.call(uintJDyu0oR, {from: accounts[5]});
		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressL5IRlvF, uintFiMtdt8, uintFDtwCug, uintyYJceD4, uintWdNfke8, {from: accounts[0]});
		await FairStockEquityu1W35gd.withdrawPJ.call({from: accounts[1]});
		const uint256IjSddC9 = await FairStockEquityu1W35gd.getCostAmount.call(uintxJwuPr4, {from: accounts[2]});
		const uint256QCxF6V = await FairStockEquityu1W35gd.invest.call(uintzocbAdq, {from: accounts[5]});
		const uint256qL1XYmK = await FairStockEquityu1W35gd.depositBonus.call(uintvGhEJm6, {from: accounts[3]});
		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addressPR5Sdb, uintGHhNyxp, uintln0WA7j, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.invest.call(uintSxWQPh4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbPa1hk = accounts[4]
		const addressKS3R4lg = accounts[3]
		const addressl74HlUH = accounts[2]
		const addressKjVVQQV = accounts[2]
		const uintcyojIOE = BigInt("311")
		const FairStockEquityZ49nkA = await FairStockEquity.new(addressbPa1hk, addressKS3R4lg, addressl74HlUH, addressKjVVQQV, uintcyojIOE, {from: accounts[0]});
		const uintXne9NqX = BigInt("1130")
		const uintFFUHNdT = BigInt("1703")
		const uint25VTsm = BigInt("1691")
		const uintDSrouaJ = BigInt("413")
		const uintVaphsOm = BigInt("1387")
		const addressaC71IAK = accounts[5]
		const uintkvdKO3v = BigInt("206")
		const uint256WuR50Yk = await FairStockEquityZ49nkA.bonus.call(uintXne9NqX, {from: accounts[2]});
		const addressbtiMjBU = await FairStockEquityZ49nkA.business.call(addressaC71IAK, uintVaphsOm, uintDSrouaJ, uint25VTsm, uintFFUHNdT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256US73LiR = await FairStockEquityZ49nkA.depositBonus.call(uintkvdKO3v, {from: accounts[0]});

		await expect(FairStockEquityZ49nkA.bonus.call(uintXne9NqX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDKZn8zY = accounts[2]
		const addressJR77Zjd = accounts[3]
		const addressVfhliI = accounts[5]
		const addressbt2QFmS = accounts[5]
		const uintCVY20e6 = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressDKZn8zY, addressJR77Zjd, addressVfhliI, addressbt2QFmS, uintCVY20e6, {from: accounts[4]});
		const uintB541o6C = BigInt("949")
		const uintgmmqVDq = BigInt("1698")
		const uintp0auNVO = BigInt("1037")
		const uintR3378ml = BigInt("1238")
		const uintadgKkF = BigInt("1580")
		const addresstoW435p = accounts[1]
		const uintmLsfNWz = BigInt("966")
		const boolLxLcxRO = true
		const addressZgHN8e2 = accounts[5]
		const uintj7sl1L = BigInt("734")
		const uintgMprfW3 = BigInt("422")
		const uintJl51Oj = BigInt("820")
		const uintmBRDO1i = BigInt("2009")
		const uintBGaJEgn = BigInt("796")
		const uint6lDOgB = BigInt("1124")
		const uintazOnI3j = BigInt("1533")
		const addressih2x8v2 = accounts[5]
		const uintsTFcmRa = BigInt("711")
		const uintJOyQbV = BigInt("1226")
		const addresszoz9G2j = accounts[4]
		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintB541o6C, {from: accounts[2]});
		await FairStockEquityu1W35gd.withdrawMT.call({from: accounts[0]});
		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addresstoW435p, uintadgKkF, uintR3378ml, uintp0auNVO, uintgmmqVDq, {from: accounts[0]});
		const uint256Y9NDjS = await FairStockEquityu1W35gd.depositBonus.call(uintmLsfNWz, {from: accounts[1]});
		const addresslsWBB4Q = await FairStockEquityu1W35gd.setLPT.call(addressZgHN8e2, boolLxLcxRO, {from: accounts[5]});
		await FairStockEquityu1W35gd.withdrawBonus.call({from: accounts[5]});
		await FairStockEquityu1W35gd.withdrawPJ.call({from: accounts[3]});
		const uint256Q84weRn = await FairStockEquityu1W35gd.depositBonus.call(uintj7sl1L, {from: accounts[2]});
		const uint256h8Nf1RZ = await FairStockEquityu1W35gd.setDegree.call(uint6lDOgB, uintBGaJEgn, uintmBRDO1i, uintJl51Oj, uintgMprfW3, {from: accounts[4]});
		await FairStockEquityu1W35gd.withdrawPJ.call({from: accounts[4]});
		const addressW6qtUXO = await FairStockEquityu1W35gd.depositLPT.call(addressih2x8v2, uintazOnI3j, {from: accounts[3]});
		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addresszoz9G2j, uintJOyQbV, uintsTFcmRa, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.withdrawMT.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszhawpBf = accounts[2]
		const addresse0hyEgC = accounts[3]
		const addressnA0fj7F = accounts[5]
		const addressk7p53qz = accounts[5]
		const uintL25W03v = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addresszhawpBf, addresse0hyEgC, addressnA0fj7F, addressk7p53qz, uintL25W03v, {from: accounts[4]});
		const uintzLAZSaC = BigInt("551")
		const uintuS83xXI = BigInt("1733")
		const addressbDcIw7z = accounts[2]
		const uintsdznev5 = BigInt("754")
		const uintYYBYOz = BigInt("1296")
		const uintsp8nhrd = BigInt("1502")
		const uintW6hSEEY = BigInt("1197")
		const uinty6VVV0L = BigInt("153")
		const addresshw5V3NI = accounts[2]
		const addresshjx03T7 = await FairStockEquityu1W35gd.setModule.call(addressbDcIw7z, uintuS83xXI, uintzLAZSaC, {from: accounts[4]});
		await FairStockEquityu1W35gd.withdrawMT.call({from: accounts[3]});
		const uint256s6kFhOR = await FairStockEquityu1W35gd.setGasFeeForCallback.call(uintsdznev5, {from: accounts[1]});
		const addressHpQ9xj0 = await FairStockEquityu1W35gd.business.call(addresshw5V3NI, uinty6VVV0L, uintW6hSEEY, uintsp8nhrd, uintYYBYOz, {from: accounts[1]});

		await expect(FairStockEquityu1W35gd.withdrawMT.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqThqFp = accounts[2]
		const addressGw5auc9 = accounts[3]
		const addressVOzkcV = accounts[5]
		const addressxxqlJXA = accounts[5]
		const uintObVsAHA = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressqThqFp, addressGw5auc9, addressVOzkcV, addressxxqlJXA, uintObVsAHA, {from: accounts[4]});
		const uintm3F3cP1 = BigInt("1509")
		const uintKh5NBAC = BigInt("1291")
		const uinta7uSEBr = BigInt("1502")
		const uintsnjzJtE = BigInt("1197")
		const uintf07RRRa = BigInt("142")
		const addressz08GQwm = accounts[5]
		const uint256y5egdey = await FairStockEquityu1W35gd.setStartTime.call(uintm3F3cP1, {from: accounts[4]});
		const addressHpQ9xj0 = await FairStockEquityu1W35gd.business.call(addressz08GQwm, uintf07RRRa, uintsnjzJtE, uinta7uSEBr, uintKh5NBAC, {from: accounts[1]});

		await expect(FairStockEquityu1W35gd.business.call(addressz08GQwm, uintf07RRRa, uintsnjzJtE, uinta7uSEBr, uintKh5NBAC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressGv47rwm = accounts[2]
		const addressdvSLjwx = accounts[3]
		const addressQ8JRMxg = accounts[5]
		const addressr4KQ1W = accounts[5]
		const uintyKLugaV = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressGv47rwm, addressdvSLjwx, addressQ8JRMxg, addressr4KQ1W, uintyKLugaV, {from: accounts[4]});
		const uintDdvkUpD = BigInt("800")
		const uint1wHjCe = BigInt("1296")
		const uintJVF6lVB = BigInt("1502")
		const uintXxwAJp5 = BigInt("1214")
		const uintEPXkWGN = BigInt("128")
		const addresspNBTAS = accounts[3]
		const uintJJYmchq = BigInt("1774")
		const uintfcI0zK = BigInt("1757")
		const addressRgmDPnA = accounts[0]
		const uint256VqAO6wO = await FairStockEquityu1W35gd.setStartTime.call(uintDdvkUpD, {from: accounts[4]});
		const addressHpQ9xj0 = await FairStockEquityu1W35gd.business.call(addresspNBTAS, uintEPXkWGN, uintXxwAJp5, uintJVF6lVB, uint1wHjCe, {from: accounts[1]});
		const addressEEgkzom = await FairStockEquityu1W35gd.withdrawBonusCallback.call(addressRgmDPnA, uintfcI0zK, uintJJYmchq, {from: accounts[0]});

		await expect(FairStockEquityu1W35gd.setStartTime.call(uintDdvkUpD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressACYJZ6h = accounts[2]
		const addressTlM7Aek = accounts[3]
		const addressqvzLbEP = accounts[5]
		const addresshAgslnj = accounts[5]
		const uintpv4VDb1 = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressACYJZ6h, addressTlM7Aek, addressqvzLbEP, addresshAgslnj, uintpv4VDb1, {from: accounts[4]});
		const uintLh3q5m9 = BigInt("1762")
		const uintkAtuoM = BigInt("1296")
		const uinthz9VzpU = BigInt("226")
		const uintWNOJQMW = BigInt("1197")
		const uintxYiIpHa = BigInt("98")
		const addressjltkU87 = accounts[5]
		const uint256ZYoy8N2 = await FairStockEquityu1W35gd.getCostAmount.call(uintLh3q5m9, {from: accounts[5]});
		await FairStockEquityu1W35gd.f.call({from: accounts[2]});
		const addressHpQ9xj0 = await FairStockEquityu1W35gd.business.call(addressjltkU87, uintxYiIpHa, uintWNOJQMW, uinthz9VzpU, uintkAtuoM, {from: accounts[1]});

		await expect(FairStockEquityu1W35gd.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressyY8YUvq = accounts[2]
		const addressZwtomnL = accounts[3]
		const addressArveKfi = accounts[5]
		const addressSyuj45B = accounts[5]
		const uintbYy2bDF = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressyY8YUvq, addressZwtomnL, addressArveKfi, addressSyuj45B, uintbYy2bDF, {from: accounts[4]});
		const uintXziy6lu = BigInt("1416")
		const uintGlXhRoj = BigInt("1428")
		const addressfVa0uJ = accounts[3]
		const uintigRQo2D = BigInt("939")
		const address1SolC1 = await FairStockEquityu1W35gd.withdrawBonusCallback.call(addressfVa0uJ, uintGlXhRoj, uintXziy6lu, {from: accounts[5]});
		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintigRQo2D, {from: accounts[2]});

		await expect(FairStockEquityu1W35gd.withdrawBonusCallback.call(addressfVa0uJ, uintGlXhRoj, uintXziy6lu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresssEObTD = accounts[2]
		const addressQT2dUK = accounts[3]
		const addressxBMVqjZ = accounts[5]
		const addressDfvpib9 = accounts[5]
		const uintTBFT09 = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addresssEObTD, addressQT2dUK, addressxBMVqjZ, addressDfvpib9, uintTBFT09, {from: accounts[4]});
		const uinttEbylQz = BigInt("1756")
		const uintqUyLPiJ = BigInt("1448")
		const uint256ZYoy8N2 = await FairStockEquityu1W35gd.getCostAmount.call(uinttEbylQz, {from: accounts[5]});
		await FairStockEquityu1W35gd.withdrawPJ.call({from: accounts[4]});
		const uint256CBWtOyM = await FairStockEquityu1W35gd.setProfitPercentMT.call(uintqUyLPiJ, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.withdrawPJ.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressst9pNWI = accounts[2]
		const addressvwWCCys = accounts[3]
		const addresssbMqGsr = accounts[5]
		const addressjSeIkUx = accounts[5]
		const uintum7LQ5Z = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressst9pNWI, addressvwWCCys, addresssbMqGsr, addressjSeIkUx, uintum7LQ5Z, {from: accounts[4]});
		const uinthbK4TIY = BigInt("1633")
		const uintUkjpcT1 = BigInt("1587")
		const uintkMAdxGv = BigInt("1007")
		const addressLD7lK6e = accounts[2]
		const uintfs128v7 = BigInt("1496")
		const uintwHUAETl = BigInt("473")
		const uintJ8RJMHd = BigInt("160")
		const uint9N31Po = BigInt("226")
		const uintMxJT8AG = BigInt("1197")
		const uintHd7tz0h = BigInt("32")
		const addressI4PBSrk = accounts[5]
		const uintfDHg0wr = BigInt("308")
		const uintVE09h82 = BigInt("755")
		const uint256qzCDfAZ = await FairStockEquityu1W35gd.setProfitPercentPJ.call(uinthbK4TIY, {from: accounts[4]});
		const addressdwGQiVW = await FairStockEquityu1W35gd.withdrawMTCallback.call(addressLD7lK6e, uintkMAdxGv, uintUkjpcT1, {from: accounts[5]});
		const uint256DZt5DE2 = await FairStockEquityu1W35gd.reduceShare.call(uintfs128v7, {from: accounts[2]});
		const uint256ZYoy8N2 = await FairStockEquityu1W35gd.getCostAmount.call(uintwHUAETl, {from: accounts[5]});
		const addressHpQ9xj0 = await FairStockEquityu1W35gd.business.call(addressI4PBSrk, uintHd7tz0h, uintMxJT8AG, uint9N31Po, uintJ8RJMHd, {from: accounts[1]});
		const uint256am7zjFz = await FairStockEquityu1W35gd.depositBonus.call(uintfDHg0wr, {from: accounts[0]});
		const uint256Ig6uQe1 = await FairStockEquityu1W35gd.setStartTime.call(uintVE09h82, {from: accounts[4]});

		await expect(FairStockEquityu1W35gd.withdrawMTCallback.call(addressLD7lK6e, uintkMAdxGv, uintUkjpcT1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})