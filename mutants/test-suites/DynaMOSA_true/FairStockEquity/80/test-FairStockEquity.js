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
//		const uint256MAnq9dv = await FairStockEquity4sOZMJ.reduceShare.call(uintTe6XLs, {from: accounts[5]});
//		const uint256ffC1pY0 = await FairStockEquity4sOZMJ.setProfitPercentMT.call(uint6bwwPU, {from: accounts[4]});
//		await FairStockEquity4sOZMJ.checkStart.call({from: accounts[2]});
//		const uint256xVJ2TKC = await FairStockEquity4sOZMJ.setProfitPercentPJ.call(uintnyosAyX, {from: accounts[1]});
//		await FairStockEquity4sOZMJ.checkStart.call({from: accounts[3]});
//		const addressBZua9d8 = await FairStockEquity4sOZMJ.business.call(addressNLJnZXN, uintVAM94w, uintg2HWoPh, uintScMFTOV, uintX2Abbp, {from: accounts[2]});

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
//		await FairStockEquityFPe2bra.withdrawPJ.call({from: accounts[2]});
//		const addresso92ymQA = await FairStockEquityFPe2bra.setModule.call(addressiWugPY7, uintS3YW21o, uintRmFDj84, {from: accounts[1]});
//		const uint256HNuIvDa = await FairStockEquityFPe2bra.setProfitPercentBonus.call(uintpjIj0OS, {from: accounts[2]});
//		const addressd3wqNsK = await FairStockEquityFPe2bra.withdrawMTCallback.call(addressIyrRq1o, uinthNeTKZI, uintlxvaFd, {from: accounts[3]});
//		await FairStockEquityFPe2bra.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});

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
//		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressqsxNhu4, uintVMMVmi4, uintstswgH6, uintfx66Amm, uintjnm3Ka7, {from: accounts[0]});
//		const addressUo49W3r = await FairStockEquityu1W35gd.setDataSource.call(addressMwiM8s3, {from: accounts[4]});
//		const uint256QCxF6V = await FairStockEquityu1W35gd.invest.call(uinte7nzKH, {from: accounts[5]});
//		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addresso1osu2, uintPZnHZEZ, uintSpKKXvw, {from: accounts[3]});

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
//		await FairStockEquityNoTuxNm.withdrawBonus.call({from: accounts[4]});
//		const uint256GhCFaz = await FairStockEquityNoTuxNm.setProfitPercentMT.call(uintmxtLsGj, {from: accounts[1]});

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
//		const uint256I7raHu = await FairStockEquitygJOFlA9.setProfitPercentBonus.call(uintyZn3mou, {from: accounts[5]});
//		const addressrTZMoa = await FairStockEquitygJOFlA9.withdrawMTCallback.call(addressrWdA8bi, uintUNs3JIh, uintYP8N4oo, {from: accounts[3]});

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
//		const uint256ZN2qeIf = await FairStockEquityVKFFyZN.depositBonus.call(uintZFFYBgY, {from: accounts[1]});
//		const uint256cYyTzUa = await FairStockEquityVKFFyZN.setStartTime.call(uintSda3hxf, {from: accounts[4]});
//		const addressF59F00g = await FairStockEquityVKFFyZN.setLPT.call(addressEpYE855, boolSMyk99m, {from: accounts[3]});
//		const uint256KrV3i2q = await FairStockEquityVKFFyZN.setDegree.call(uintfMs7IN8, uintel0kuo6, uint6SC3YT, uintU3ZoXcB, uintl1V5bOi, {from: accounts[4]});
//		const addresstGtpbz = await FairStockEquityVKFFyZN.withdrawLPT.call(addressUEahEcs, uintZuAu0FH, {from: accounts[0]});

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
//		const addressfIcCPSD = await FairStockEquityu1W35gd.depositLPT.call(addressPMURQ1G, uintpfq3yPd, {from: accounts[4]});
//		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressIF7fgyM, uintV10JhTH, uintINOVbI8, uintBJMR0uV, uintugXtiJY, {from: accounts[0]});
//		await FairStockEquityu1W35gd.checkStart.call({from: accounts[3]});
//		const uint256ITDjqnA = await FairStockEquityu1W35gd.bonus.call(uintinQlw4O, {from: accounts[0]});
//		const addressUo49W3r = await FairStockEquityu1W35gd.setDataSource.call(addressgKR44K, {from: accounts[4]});
//		const uint256laSXcWU = await FairStockEquityu1W35gd.setDegree.call(uintE8q6JSX, uintbSG06gK, uintCyrnge, uintTe7Tr1, uintv89i02d, {from: accounts[0]});
//		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addressUvXAvG3, uintgTnELQR, uintzofxOmX, {from: accounts[3]});

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
//		await FairStockEquityu1W35gd.onlyDataSource.call({from: accounts[4]});
//		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintXuluHNA, {from: accounts[2]});
//		const uint256lYQVzQm = await FairStockEquityu1W35gd.setStartTime.call(uintXa7JwUY, {from: accounts[1]});
//		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressM7DSdnk, uintLIA2dE, uintvpeGYDB, uintmtCwG4G, uint9CDJPu, {from: accounts[0]});
//		const addressUo49W3r = await FairStockEquityu1W35gd.setDataSource.call(addressPndbYg, {from: accounts[4]});
//		const uint256QCxF6V = await FairStockEquityu1W35gd.invest.call(uintuVRsCXD, {from: accounts[5]});

		await expect(FairStockEquityu1W35gd.onlyDataSource.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspJ5Q6pr = accounts[5]
		const addressrXW49I = accounts[5]
		const addressqex8nN5 = accounts[4]
		const addressGSo7v1q = accounts[2]
		const uintRn8QNzL = BigInt("1818")
		const FairStockEquitygJOFlA9 = await FairStockEquity.new(addresspJ5Q6pr, addressrXW49I, addressqex8nN5, addressGSo7v1q, uintRn8QNzL, {from: accounts[0]});
		const uint2vnt1h = BigInt("1730")
		const uintb43Xhcj = BigInt("1022")
		const uintH53DId7 = BigInt("448")
		const address8lZKFo = accounts[3]
//		const uint256T61cWcF = await FairStockEquitygJOFlA9.invest.call(uint2vnt1h, {from: accounts[1]});
//		const uint256I7raHu = await FairStockEquitygJOFlA9.setProfitPercentBonus.call(uintb43Xhcj, {from: accounts[5]});
//		const addressrfgHpn = await FairStockEquitygJOFlA9.withdrawLPT.call(address8lZKFo, uintH53DId7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitygJOFlA9.invest.call(uint2vnt1h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPkqmQuh = accounts[4]
		const addressocXmF8 = accounts[4]
		const addressfSlQaAy = accounts[4]
		const addressKImmN8 = "0x0000000000000000000000000000000000000001"
		const uintPgbZMFv = BigInt("421")
		const FairStockEquityEMj9aOM = await FairStockEquity.new(addressPkqmQuh, addressocXmF8, addressfSlQaAy, addressKImmN8, uintPgbZMFv, {from: accounts[3]});
		const uintCthDsK = BigInt("1598")
		const uintJw9EzfW = BigInt("598")
		const addressYdPbjHT = accounts[4]
		const uintELJ2h3o = BigInt("1898")
		const uintP8u3JW4 = BigInt("1113")
		const boolrnatVxL = true
		const addressuKlUqj = accounts[1]
//		const addressPYizuNJ = await FairStockEquityEMj9aOM.withdrawMTCallback.call(addressYdPbjHT, uintJw9EzfW, uintCthDsK, {from: accounts[0]});
//		const uint256KPmLaFI = await FairStockEquityEMj9aOM.setStartTime.call(uintELJ2h3o, {from: accounts[5]});
//		await FairStockEquityEMj9aOM.withdrawPJ.call({from: accounts[1]});
//		const uint256bl5sxDv = await FairStockEquityEMj9aOM.setProfitPercentBonus.call(uintP8u3JW4, {from: accounts[1]});
//		const addressnRO7vsW = await FairStockEquityEMj9aOM.setLPT.call(addressuKlUqj, boolrnatVxL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityEMj9aOM.withdrawMTCallback.call(addressYdPbjHT, uintJw9EzfW, uintCthDsK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressytOzsy7 = accounts[2]
		const addressiMkTEY = accounts[3]
		const addresst5yNq7f = accounts[5]
		const addressW4xx9Fi = accounts[5]
		const uintJhKVh2 = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressytOzsy7, addressiMkTEY, addresst5yNq7f, addressW4xx9Fi, uintJhKVh2, {from: accounts[4]});
		const uintn0EMAGR = BigInt("1698")
		const uintr43iOFF = BigInt("1055")
		const uintReeC964 = BigInt("1238")
		const uintcwJTS5h = BigInt("674")
		const addressl4dActn = accounts[1]
		const uintvHjq3pH = BigInt("2004")
		const uintrCMvwTT = BigInt("1862")
		const addressySTLBqA = accounts[6]
		const uintMEE1SDK = BigInt("1228")
		const uintDAn1CH = BigInt("713")
		const uintI3BXIx9 = BigInt("1226")
		const addressZQPo5zY = accounts[5]
//		await FairStockEquityu1W35gd.withdrawMT.call({from: accounts[1]});
//		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressl4dActn, uintcwJTS5h, uintReeC964, uintr43iOFF, uintn0EMAGR, {from: accounts[0]});
//		await FairStockEquityu1W35gd.onlyDataSource.call({from: accounts[0]});
//		await FairStockEquityu1W35gd.withdrawPJ.call({from: accounts[1]});
//		const uint256YLeSUsh = await FairStockEquityu1W35gd.setProfitPercentMT.call(uintvHjq3pH, {from: accounts[2]});
//		const uint256IjSddC9 = await FairStockEquityu1W35gd.getCostAmount.call(uintrCMvwTT, {from: accounts[2]});
//		const addressUo49W3r = await FairStockEquityu1W35gd.setDataSource.call(addressySTLBqA, {from: accounts[4]});
//		const uint256QCxF6V = await FairStockEquityu1W35gd.invest.call(uintMEE1SDK, {from: accounts[5]});
//		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addressZQPo5zY, uintI3BXIx9, uintDAn1CH, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQboUGW2 = accounts[0]
		const addressKsNB35m = accounts[5]
		const addressTmB8oLb = accounts[4]
		const addressXoUkaqn = accounts[1]
		const uintScdp71X = BigInt("1960")
		const FairStockEquityVVO9HAu = await FairStockEquity.new(addressQboUGW2, addressKsNB35m, addressTmB8oLb, addressXoUkaqn, uintScdp71X, {from: accounts[3]});
		const uintII4Cej = BigInt("559")
		const uintfeYvH6i = BigInt("661")
		const uintMIRAgdl = BigInt("2006")
//		await FairStockEquityVVO9HAu.f.call({from: accounts[1]});
//		const uint256m2bIbuH = await FairStockEquityVVO9HAu.setGasFeeForCallback.call(uintII4Cej, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256GDPiDrh = await FairStockEquityVVO9HAu.getCostAmount.call(uintfeYvH6i, {from: accounts[2]});
//		const uint256xQVOSI = await FairStockEquityVVO9HAu.setProfitPercentBonus.call(uintMIRAgdl, {from: accounts[3]});

		await expect(FairStockEquityVVO9HAu.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressx9YBVVC = accounts[5]
		const addressoCQsjXN = accounts[5]
		const addressIWM7lpG = accounts[4]
		const address2fidl8 = accounts[2]
		const uintTomZbKg = BigInt("1818")
		const FairStockEquitygJOFlA9 = await FairStockEquity.new(addressx9YBVVC, addressoCQsjXN, addressIWM7lpG, address2fidl8, uintTomZbKg, {from: accounts[0]});
		const uintYi8vzG = BigInt("1103")
		const addresscGaXPcL = accounts[0]
		const uinthW6QFzA = BigInt("1408")
		const address7ErCJD = accounts[4]
		const uintl7dQ59o = BigInt("855")
		const uintyw5RiJK = BigInt("51")
		const uintDRVfj4D = BigInt("1900")
		const uintKNqVL1a = BigInt("89")
		const addressK8BNW9l = accounts[5]
//		const addressqVq4Yxe = await FairStockEquitygJOFlA9.withdrawLPT.call(addresscGaXPcL, uintYi8vzG, {from: accounts[4]});
//		const addressvWPZH06 = await FairStockEquitygJOFlA9.withdrawLPT.call(address7ErCJD, uinthW6QFzA, {from: accounts[4]});
//		const address9LBWpF = await FairStockEquitygJOFlA9.business.call(addressK8BNW9l, uintKNqVL1a, uintDRVfj4D, uintyw5RiJK, uintl7dQ59o, {from: accounts[4]});

		await expect(FairStockEquitygJOFlA9.withdrawLPT.call(addresscGaXPcL, uintYi8vzG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresssU3w64y = accounts[5]
		const addressfwonDvu = accounts[5]
		const address1NDsNw = accounts[4]
		const addressLwBKQM = accounts[2]
		const uintwiEyq5w = BigInt("1818")
		const FairStockEquitygJOFlA9 = await FairStockEquity.new(addresssU3w64y, addressfwonDvu, address1NDsNw, addressLwBKQM, uintwiEyq5w, {from: accounts[0]});
		const uintpLB8uaK = BigInt("156")
		const uintGnGHQH = BigInt("777")
		const addressvnuW0hp = accounts[4]
		const uintrzdAyY4 = BigInt("2007")
		const uintNnK2GzJ = BigInt("67")
		const uintpaiLs1t = BigInt("1908")
		const uintkkHqsUn = BigInt("73")
		const addresst74sdNr = accounts[5]
//		const addresstPVkcG = await FairStockEquitygJOFlA9.withdrawBonusCallback.call(addressvnuW0hp, uintGnGHQH, uintpLB8uaK, {from: accounts[2]});
//		const address9LBWpF = await FairStockEquitygJOFlA9.business.call(addresst74sdNr, uintkkHqsUn, uintpaiLs1t, uintNnK2GzJ, uintrzdAyY4, {from: accounts[4]});
//		await FairStockEquitygJOFlA9.withdrawBonus.call({from: accounts[4]});

		await expect(FairStockEquitygJOFlA9.withdrawBonusCallback.call(addressvnuW0hp, uintGnGHQH, uintpLB8uaK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressccKHXRa = accounts[5]
		const addressQ9L6DVR = accounts[5]
		const addressIk4QT72 = accounts[4]
		const addressyq0Othw = accounts[2]
		const uintwnA3BPx = BigInt("1818")
		const FairStockEquitygJOFlA9 = await FairStockEquity.new(addressccKHXRa, addressQ9L6DVR, addressIk4QT72, addressyq0Othw, uintwnA3BPx, {from: accounts[0]});
		const uintgLiCuTr = BigInt("1367")
		const uintkVvcr5e = BigInt("476")
		const addressnOGHrfN = accounts[2]
		const uintGqav6Ub = BigInt("2007")
		const uintk834nEW = BigInt("67")
		const uintTUQjI2M = BigInt("1908")
		const uint0MM8Ok = BigInt("22")
		const addressz1L0bPG = accounts[3]
		const uintJandA6E = BigInt("1171")
//		const addressYiU5LXR = await FairStockEquitygJOFlA9.withdrawMTCallback.call(addressnOGHrfN, uintkVvcr5e, uintgLiCuTr, {from: accounts[2]});
//		const address9LBWpF = await FairStockEquitygJOFlA9.business.call(addressz1L0bPG, uint0MM8Ok, uintTUQjI2M, uintk834nEW, uintGqav6Ub, {from: accounts[4]});
//		await FairStockEquitygJOFlA9.onlyDataSource.call({from: accounts[3]});
//		const uint256j3NYdt = await FairStockEquitygJOFlA9.setGasFeeForCallback.call(uintJandA6E, {from: accounts[3]});
//		await FairStockEquitygJOFlA9.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquitygJOFlA9.withdrawMTCallback.call(addressnOGHrfN, uintkVvcr5e, uintgLiCuTr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressLv3OpRf = accounts[2]
		const addressVLXvDyo = accounts[3]
		const addressxFWf4Uf = accounts[5]
		const addressEpOTBLA = accounts[5]
		const uintfI7N3Le = BigInt("925")
		const FairStockEquityu1W35gd = await FairStockEquity.new(addressLv3OpRf, addressVLXvDyo, addressxFWf4Uf, addressEpOTBLA, uintfI7N3Le, {from: accounts[4]});
		const uintvI8aSxB = BigInt("933")
		const boolnXOesEw = false
		const addressL0GjLOX = accounts[3]
		const uintH1NlxLQ = BigInt("106")
		const addressG6K4ViV = accounts[5]
		const uint6hImFD = BigInt("1698")
		const uintl1Tblg = BigInt("1055")
		const uintiAYGRww = BigInt("1238")
		const uintFAOqc0f = BigInt("1582")
		const addressqEnoel5 = accounts[1]
		const uintZ6PkNS = BigInt("1417")
		const uintJWM9XzZ = BigInt("921")
		const addressVGGXaLp = "0x0000000000000000000000000000000000000001"
		const addressFxn1WS2 = accounts[5]
		const uintMdxcORA = BigInt("1635")
		const uintHjSHXDk = BigInt("8")
		const uintX2V0IlB = BigInt("1832")
		const uintGJhAoKl = BigInt("470")
		const uintALonJSO = BigInt("1024")
		const uintSoMJhl = BigInt("1310")
		const uintYYRGa1i = BigInt("279")
		const uintSLXllV0 = BigInt("713")
		const uintw0TWerJ = BigInt("1226")
		const addresshndKYNM = accounts[4]
		const uint256PWHa9P1 = await FairStockEquityu1W35gd.getCostAmount.call(uintvI8aSxB, {from: accounts[2]});
		const addressMyUbkdH = await FairStockEquityu1W35gd.setLPT.call(addressL0GjLOX, boolnXOesEw, {from: accounts[4]});
//		const addressfIcCPSD = await FairStockEquityu1W35gd.depositLPT.call(addressG6K4ViV, uintH1NlxLQ, {from: accounts[4]});
//		const addressD4gHQ5w = await FairStockEquityu1W35gd.business.call(addressqEnoel5, uintFAOqc0f, uintiAYGRww, uintl1Tblg, uint6hImFD, {from: accounts[0]});
//		await FairStockEquityu1W35gd.checkStart.call({from: accounts[3]});
//		const addresshMRx1T1 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addressVGGXaLp, uintJWM9XzZ, uintZ6PkNS, {from: accounts[0]});
//		const addressUo49W3r = await FairStockEquityu1W35gd.setDataSource.call(addressFxn1WS2, {from: accounts[4]});
//		const uint256un4NH1l = await FairStockEquityu1W35gd.setProfitPercentMT.call(uintMdxcORA, {from: accounts[4]});
//		const uint256laSXcWU = await FairStockEquityu1W35gd.setDegree.call(uintSoMJhl, uintALonJSO, uintGJhAoKl, uintX2V0IlB, uintHjSHXDk, {from: accounts[0]});
//		const uint256GU0CJGH = await FairStockEquityu1W35gd.setProfitPercentBonus.call(uintYYRGa1i, {from: accounts[4]});
//		const addressbwClw9 = await FairStockEquityu1W35gd.withdrawMTCallback.call(addresshndKYNM, uintw0TWerJ, uintSLXllV0, {from: accounts[3]});

		await expect(FairStockEquityu1W35gd.depositLPT.call(addressG6K4ViV, uintH1NlxLQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZW7cs8Y = "0x0000000000000000000000000000000000000001"
		const addressqQxo71 = accounts[1]
		const addressemh30bb = accounts[0]
		const addressQodHu2z = accounts[0]
		const uintut2OK55 = BigInt("1248")
		const FairStockEquitydoYCWjg = await FairStockEquity.new(addressZW7cs8Y, addressqQxo71, addressemh30bb, addressQodHu2z, uintut2OK55, {from: accounts[1]});
		const uintRDkDMoA = BigInt("453")
		const uintGGwcL7J = BigInt("568")
		const addresstjQAMn1 = accounts[1]
		const uintAuLCBaw = BigInt("1857")
		const uintTLp6HN = BigInt("144")
		const addressArPBCW = accounts[4]
		const uintGFwivYC = BigInt("1728")
		const uintMtUzqXx = BigInt("622")
		const uintaEc6rX = BigInt("1657")
		const uintVeWthXt = BigInt("1883")
		const addressONMLCGZ = accounts[0]
		const uinteznvn68 = BigInt("1243")
		const addressGuMchW = accounts[4]
		const uintWKPpyPC = BigInt("830")
		const addressrHUNqlv = accounts[3]
		const addresseHIQPN = await FairStockEquitydoYCWjg.setModule.call(addresstjQAMn1, uintGGwcL7J, uintRDkDMoA, {from: accounts[1]});
//		const addressiWzYqmM = await FairStockEquitydoYCWjg.setModule.call(addressArPBCW, uintTLp6HN, uintAuLCBaw, {from: accounts[5]});
//		const addressStxjWnt = await FairStockEquitydoYCWjg.business.call(addressONMLCGZ, uintVeWthXt, uintaEc6rX, uintMtUzqXx, uintGFwivYC, {from: accounts[5]});
//		const uint256jlztdOd = await FairStockEquitydoYCWjg.setProfitPercentMT.call(uinteznvn68, {from: accounts[0]});
//		const addresshVGG7QG = await FairStockEquitydoYCWjg.setDataSource.call(addressGuMchW, {from: accounts[0]});
//		const addresse43bSVy = await FairStockEquitydoYCWjg.withdrawLPT.call(addressrHUNqlv, uintWKPpyPC, {from: accounts[2]});

		await expect(FairStockEquitydoYCWjg.setModule.call(addressArPBCW, uintTLp6HN, uintAuLCBaw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmoeyNbm = accounts[5]
		const addressczv8TZf = accounts[5]
		const addressTS08v42 = accounts[4]
		const addressfSiwWYv = accounts[2]
		const uintlUxQbGz = BigInt("1818")
		const FairStockEquitygJOFlA9 = await FairStockEquity.new(addressmoeyNbm, addressczv8TZf, addressTS08v42, addressfSiwWYv, uintlUxQbGz, {from: accounts[0]});
		const uintVOa2Ceg = BigInt("2007")
		const uintIaTVrZq = BigInt("67")
		const uintQCxdhmT = BigInt("1908")
		const uintAiXkSXA = BigInt("0")
		const addressq4Pvtwv = accounts[5]
		const uintdnZSfgI = BigInt("831")
		const uintd6Iu0A = BigInt("1229")
		const uintZLg4t5W = BigInt("547")
		const uintQVp02VP = BigInt("1701")
		const uintuGfgZva = BigInt("1032")
		const uintFaMW4TD = BigInt("1556")
		const uint6T1RfA = BigInt("1813")
//		const address9LBWpF = await FairStockEquitygJOFlA9.business.call(addressq4Pvtwv, uintAiXkSXA, uintQCxdhmT, uintIaTVrZq, uintVOa2Ceg, {from: accounts[4]});
//		const uint256gmF5WPN = await FairStockEquitygJOFlA9.setDegree.call(uintuGfgZva, uintQVp02VP, uintZLg4t5W, uintd6Iu0A, uintdnZSfgI, {from: accounts[0]});
//		const uint256qN6UK87 = await FairStockEquitygJOFlA9.reduceShare.call(uintFaMW4TD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dxZOg1w = await FairStockEquitygJOFlA9.bonus.call(uint6T1RfA, {from: accounts[3]});

		await expect(FairStockEquitygJOFlA9.business.call(addressq4Pvtwv, uintAiXkSXA, uintQCxdhmT, uintIaTVrZq, uintVOa2Ceg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})