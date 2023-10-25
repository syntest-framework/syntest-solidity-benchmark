const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressoTXK4DL = accounts[1]
		const addressipg9lnX = accounts[4]
		const address1l7XZ4 = "0x0000000000000000000000000000000000000001"
		const addressIfYUWi5 = accounts[5]
		const uintXKEL0IK = BigInt("1551")
		const FairStockEquityNJXhizp = await FairStockEquity.new(addressoTXK4DL, addressipg9lnX, address1l7XZ4, addressIfYUWi5, uintXKEL0IK, {from: accounts[4]});
		const uintrNsmRe = BigInt("1310")
		const uintpZ4eqgw = BigInt("435")
		const uintiZAPtqz = BigInt("1274")
		const uintIWbQvgn = BigInt("1695")
		const uintyDGtoy = BigInt("1262")
		const addressGnILyIW = accounts[2]
		const boolh9AaLYy = false
		const addressaDnO17x = "0x0000000000000000000000000000000000000001"
		const uinte1lUrxX = BigInt("1383")
		const uintkeKtpv7 = BigInt("1416")
		const addressWZ1eB8L = accounts[2]
		const uint256UrRWT5 = await FairStockEquityNJXhizp.invest.call(uintrNsmRe, {from: accounts[3]});
		await FairStockEquityNJXhizp.f.call({from: accounts[0]});
		const addressBLK3LEk = await FairStockEquityNJXhizp.business.call(addressGnILyIW, uintyDGtoy, uintIWbQvgn, uintiZAPtqz, uintpZ4eqgw, {from: accounts[0]});
		const addressWulaoqW = await FairStockEquityNJXhizp.setLPT.call(addressaDnO17x, boolh9AaLYy, {from: "0x0000000000000000000000000000000000000001"});
		const addressCQgoDAX = await FairStockEquityNJXhizp.withdrawMTCallback.call(addressWZ1eB8L, uintkeKtpv7, uinte1lUrxX, {from: accounts[0]});

		await expect(FairStockEquityNJXhizp.invest.call(uintrNsmRe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMpCqBak = accounts[2]
		const addressELt5J2S = accounts[1]
		const addressefTycxE = accounts[0]
		const addressmw6SVBP = accounts[3]
		const uintLlLvt5e = BigInt("1734")
		const FairStockEquitys1X2VuX = await FairStockEquity.new(addressMpCqBak, addressELt5J2S, addressefTycxE, addressmw6SVBP, uintLlLvt5e, {from: accounts[5]});
		const uintBDwDVY8 = BigInt("902")
		const uintvo8nRS = BigInt("1116")
		const uintOxv8yuf = BigInt("1868")
		const uintXyit1bu = BigInt("8")
		const uintxdCqQGO = BigInt("1027")
		const uint25609HdRn = await FairStockEquitys1X2VuX.setDegree.call(uintxdCqQGO, uintXyit1bu, uintOxv8yuf, uintvo8nRS, uintBDwDVY8, {from: accounts[1]});
		await FairStockEquitys1X2VuX.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitys1X2VuX.setDegree.call(uintxdCqQGO, uintXyit1bu, uintOxv8yuf, uintvo8nRS, uintBDwDVY8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxC2v5QZ = accounts[4]
		const addressP7lNyQW = accounts[0]
		const address8iy9Wq = accounts[5]
		const addressCiJ7Pbv = accounts[3]
		const uintA6UwZsQ = BigInt("1324")
		const FairStockEquityoFdLz9 = await FairStockEquity.new(addressxC2v5QZ, addressP7lNyQW, address8iy9Wq, addressCiJ7Pbv, uintA6UwZsQ, {from: accounts[0]});
		const uintPZtNWxH = BigInt("444")
		const addressLja0rPz = accounts[2]
		const uintXwLVfWD = BigInt("501")
		const uintkB2ASBC = BigInt("185")
		const addressbYq4iOY = accounts[0]
		const uintJpXgvlG = BigInt("1701")
		const addressB57Gquk = await FairStockEquityoFdLz9.withdrawLPT.call(addressLja0rPz, uintPZtNWxH, {from: accounts[2]});
		const addressLJ4XT7w = await FairStockEquityoFdLz9.setModule.call(addressbYq4iOY, uintkB2ASBC, uintXwLVfWD, {from: accounts[2]});
		const uint256cLN8Tc4 = await FairStockEquityoFdLz9.setProfitPercentPJ.call(uintJpXgvlG, {from: accounts[1]});
		await FairStockEquityoFdLz9.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquityoFdLz9.withdrawLPT.call(addressLja0rPz, uintPZtNWxH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQ7z7X1D = accounts[0]
		const addressszYof4c = accounts[2]
		const addressKH5qwP1 = accounts[2]
		const addresszAhGfsT = "0x0000000000000000000000000000000000000001"
		const uintNkqpMLJ = BigInt("575")
		const FairStockEquityyP4rsEt = await FairStockEquity.new(addressQ7z7X1D, addressszYof4c, addressKH5qwP1, addresszAhGfsT, uintNkqpMLJ, {from: accounts[3]});
		const uintkR7yrj = BigInt("1682")
		const uinthtKHpuX = BigInt("1673")
		const addressp8zG8by = accounts[2]
		const uinti4YYK7s = BigInt("867")
		const uintGzx2d1c = BigInt("658")
		const addresslakvjiO = await FairStockEquityyP4rsEt.withdrawMTCallback.call(addressp8zG8by, uinthtKHpuX, uintkR7yrj, {from: accounts[1]});
		const uint256vuMy8g7 = await FairStockEquityyP4rsEt.setGasFeeForCallback.call(uinti4YYK7s, {from: accounts[1]});
		const uint256zwOrg4c = await FairStockEquityyP4rsEt.reduceShare.call(uintGzx2d1c, {from: accounts[1]});

		await expect(FairStockEquityyP4rsEt.withdrawMTCallback.call(addressp8zG8by, uinthtKHpuX, uintkR7yrj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressebVJJ5p = accounts[0]
		const addresshTyYghW = accounts[0]
		const addressDCLmJZm = accounts[3]
		const addressr7eDpD0 = accounts[1]
		const uintSCRF4AW = BigInt("1924")
		const FairStockEquityAb7lu8 = await FairStockEquity.new(addressebVJJ5p, addresshTyYghW, addressDCLmJZm, addressr7eDpD0, uintSCRF4AW, {from: "0x0000000000000000000000000000000000000001"});
		const uintOFwR94 = BigInt("491")
		await FairStockEquityAb7lu8.f.call({from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityAb7lu8.checkStart.call({from: accounts[0]});
		const uint256dV5xXaR = await FairStockEquityAb7lu8.setStartTime.call(uintOFwR94, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for FairStockEquity', async () => {
		const addressGigCDQ = accounts[0]
		const addressDXTsL4p = accounts[4]
		const addressHqc87aa = accounts[1]
		const addressrKQxLJl = accounts[0]
		const uintQEKpde = BigInt("1772")
		const FairStockEquityD1CEjBT = await FairStockEquity.new(addressGigCDQ, addressDXTsL4p, addressHqc87aa, addressrKQxLJl, uintQEKpde, {from: accounts[1]});
		const uinthe89yIN = BigInt("1957")
		const uintfsZvWl = BigInt("511")
		const uintbi3vXxw = BigInt("368")
		const addressowrvSnu = accounts[5]
		const uintCt066nx = BigInt("655")
		const uintBzvCr0M = BigInt("128")
		const uint256RmUKwC = await FairStockEquityD1CEjBT.setProfitPercentBonus.call(uinthe89yIN, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityD1CEjBT.withdrawMT.call({from: accounts[4]});
		await FairStockEquityD1CEjBT.withdrawPJ.call({from: accounts[1]});
		const addressHpFUs4 = await FairStockEquityD1CEjBT.withdrawBonusCallback.call(addressowrvSnu, uintbi3vXxw, uintfsZvWl, {from: accounts[4]});
		const uint256dEy70ec = await FairStockEquityD1CEjBT.setProfitPercentPJ.call(uintCt066nx, {from: accounts[3]});
		const uint256uI6kTg3 = await FairStockEquityD1CEjBT.setProfitPercentPJ.call(uintBzvCr0M, {from: accounts[1]});

		await expect(FairStockEquityD1CEjBT.setProfitPercentBonus.call(uinthe89yIN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressfc6View = accounts[0]
		const addressDS8mDiA = "0x0000000000000000000000000000000000000001"
		const addresskcvbBmE = accounts[3]
		const addressosv0buT = accounts[3]
		const uintlrtxGW = BigInt("1363")
		const FairStockEquitycc2TGMW = await FairStockEquity.new(addressfc6View, addressDS8mDiA, addresskcvbBmE, addressosv0buT, uintlrtxGW, {from: accounts[1]});
		const uintDomCkPq = BigInt("144")
		const uintrOEQNzz = BigInt("1292")
		const addressRCdwYvs = accounts[3]
		await FairStockEquitycc2TGMW.onlyDataSource.call({from: accounts[1]});
		await FairStockEquitycc2TGMW.f.call({from: accounts[2]});
		const addressDV7WsWF = await FairStockEquitycc2TGMW.withdrawBonusCallback.call(addressRCdwYvs, uintrOEQNzz, uintDomCkPq, {from: accounts[2]});
		await FairStockEquitycc2TGMW.withdrawMT.call({from: accounts[2]});
		await FairStockEquitycc2TGMW.onlyDataSource.call({from: accounts[1]});

		await expect(FairStockEquitycc2TGMW.onlyDataSource.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressN5JswZR = accounts[0]
		const addressz7cIlja = accounts[2]
		const addressQCGODi = accounts[0]
		const addressd38gtjO = accounts[3]
		const uintvs3pBpR = BigInt("410")
		const FairStockEquityI4Cxudr = await FairStockEquity.new(addressN5JswZR, addressz7cIlja, addressQCGODi, addressd38gtjO, uintvs3pBpR, {from: accounts[1]});
		const uintNpGlCmY = BigInt("1381")
		const uintF9VjFXK = BigInt("368")
		const uintI9inRlI = BigInt("1924")
		const uintALJMvH3 = BigInt("1788")
		const addressI8pe1BJ = accounts[3]
		const uintztUa8O6 = BigInt("275")
		const addresstmMC9A = await FairStockEquityI4Cxudr.business.call(addressI8pe1BJ, uintALJMvH3, uintI9inRlI, uintF9VjFXK, uintNpGlCmY, {from: accounts[4]});
		const uint256IzK06l7 = await FairStockEquityI4Cxudr.setProfitPercentPJ.call(uintztUa8O6, {from: accounts[3]});
		await FairStockEquityI4Cxudr.checkStart.call({from: accounts[2]});

		await expect(FairStockEquityI4Cxudr.business.call(addressI8pe1BJ, uintALJMvH3, uintI9inRlI, uintF9VjFXK, uintNpGlCmY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressfUC4YrR = accounts[1]
		const addressbNxSD8q = accounts[4]
		const addressb40qMCd = "0x0000000000000000000000000000000000000001"
		const addressOw5Bg1j = accounts[5]
		const uintWt023Fx = BigInt("1551")
		const FairStockEquityNJXhizp = await FairStockEquity.new(addressfUC4YrR, addressbNxSD8q, addressb40qMCd, addressOw5Bg1j, uintWt023Fx, {from: accounts[4]});
		const uintqovkhB = BigInt("544")
		const uintUIYoiJz = BigInt("1376")
		const uintNQsyGLY = BigInt("512")
		const uintaexbYSl = BigInt("126")
		const uintppklpvl = BigInt("266")
		const uintYjdCo4z = BigInt("435")
		const uintNBLaM4r = BigInt("1274")
		const uintofFlVhh = BigInt("1695")
		const uintvOnUfbT = BigInt("1262")
		const addressqU78Wdi = accounts[2]
		const boolh9AaLYy = true
		const addressDVhFI3K = "0x0000000000000000000000000000000000000001"
		const uintGDy0oSt = BigInt("875")
		const uintJ2FScpZ = BigInt("1383")
		const uintOkqETnH = BigInt("1854")
		const addressLLzVGjL = accounts[2]
		await FairStockEquityNJXhizp.f.call({from: accounts[0]});
		const uint256P7CPbLy = await FairStockEquityNJXhizp.setDegree.call(uintppklpvl, uintaexbYSl, uintNQsyGLY, uintUIYoiJz, uintqovkhB, {from: accounts[3]});
		const addressBLK3LEk = await FairStockEquityNJXhizp.business.call(addressqU78Wdi, uintvOnUfbT, uintofFlVhh, uintNBLaM4r, uintYjdCo4z, {from: accounts[0]});
		const addressWulaoqW = await FairStockEquityNJXhizp.setLPT.call(addressDVhFI3K, boolh9AaLYy, {from: "0x0000000000000000000000000000000000000001"});
		const uint2564VVgfO = await FairStockEquityNJXhizp.setGasFeeForCallback.call(uintGDy0oSt, {from: accounts[4]});
		const addressCQgoDAX = await FairStockEquityNJXhizp.withdrawMTCallback.call(addressLLzVGjL, uintOkqETnH, uintJ2FScpZ, {from: accounts[0]});

		await expect(FairStockEquityNJXhizp.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdAUH7X = accounts[2]
		const addressARqOiZT = accounts[2]
		const addressaFbXwAQ = accounts[4]
		const addressPmLXtCt = accounts[1]
		const uintxbXjFXS = BigInt("580")
		const FairStockEquityKsp9FBA = await FairStockEquity.new(addressdAUH7X, addressARqOiZT, addressaFbXwAQ, addressPmLXtCt, uintxbXjFXS, {from: accounts[3]});
		const uintVIy5c15 = BigInt("45")
		const addressXJfFSG = accounts[5]
		const boolzsdxPIT = false
		const addresstToFV8Z = accounts[0]
		const uintrhq1CA = BigInt("673")
		const uintZL625h = BigInt("982")
		const addressoChlpIp = accounts[3]
		const uintwubnLRE = BigInt("1222")
		const uintbpoE19 = BigInt("1674")
		const addressvcuBmeS = accounts[4]
		await FairStockEquityKsp9FBA.withdrawPJ.call({from: accounts[3]});
		const addressmspIM14 = await FairStockEquityKsp9FBA.depositLPT.call(addressXJfFSG, uintVIy5c15, {from: accounts[3]});
		const addressdJ90yl = await FairStockEquityKsp9FBA.setLPT.call(addresstToFV8Z, boolzsdxPIT, {from: accounts[4]});
		await FairStockEquityKsp9FBA.checkStart.call({from: accounts[3]});
		const addressTbbwlIl = await FairStockEquityKsp9FBA.withdrawMTCallback.call(addressoChlpIp, uintZL625h, uintrhq1CA, {from: "0x0000000000000000000000000000000000000001"});
		const addressAgZYc2p = await FairStockEquityKsp9FBA.withdrawBonusCallback.call(addressvcuBmeS, uintbpoE19, uintwubnLRE, {from: accounts[1]});

		await expect(FairStockEquityKsp9FBA.withdrawPJ.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressg2XwnX7 = accounts[0]
		const addressbKo3Je2 = accounts[2]
		const addressa5L74sU = accounts[0]
		const addressBi48UsQ = accounts[3]
		const uinti7Kf7R3 = BigInt("410")
		const FairStockEquityI4Cxudr = await FairStockEquity.new(addressg2XwnX7, addressbKo3Je2, addressa5L74sU, addressBi48UsQ, uinti7Kf7R3, {from: accounts[1]});
		const uintKvxWnUX = BigInt("1205")
		const addressTDwhUIl = accounts[1]
		const uintcT7wNle = BigInt("1381")
		const uints8nYDUe = BigInt("368")
		const uintk35cGBC = BigInt("640")
		const uintGDSDxB1 = BigInt("1839")
		const addressFqzTfBn = accounts[3]
		const uintsJCWdOT = BigInt("756")
		const addresslzAgSKR = await FairStockEquityI4Cxudr.depositLPT.call(addressTDwhUIl, uintKvxWnUX, {from: accounts[0]});
		const addresstmMC9A = await FairStockEquityI4Cxudr.business.call(addressFqzTfBn, uintGDSDxB1, uintk35cGBC, uints8nYDUe, uintcT7wNle, {from: accounts[4]});
		const uint256BBmus0s = await FairStockEquityI4Cxudr.reduceShare.call(uintsJCWdOT, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityI4Cxudr.withdrawPJ.call({from: accounts[3]});

		await expect(FairStockEquityI4Cxudr.depositLPT.call(addressTDwhUIl, uintKvxWnUX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressohWHgIu = "0x0000000000000000000000000000000000000001"
		const addresstEfi5TM = accounts[2]
		const addressa9NTqO = accounts[2]
		const addressaqVJyLs = accounts[2]
		const uintugDucka = BigInt("503")
		const FairStockEquitylJpXyXo = await FairStockEquity.new(addressohWHgIu, addresstEfi5TM, addressa9NTqO, addressaqVJyLs, uintugDucka, {from: accounts[0]});
		const uintQ14wSD9 = BigInt("1191")
		const uintZQcoDxY = BigInt("1340")
		const uintVVoIV36 = BigInt("871")
		const addressU0EEyLv = accounts[3]
		const uint256pmMg62l = await FairStockEquitylJpXyXo.reduceShare.call(uintQ14wSD9, {from: accounts[2]});
		await FairStockEquitylJpXyXo.withdrawPJ.call({from: accounts[3]});
		await FairStockEquitylJpXyXo.withdrawPJ.call({from: accounts[4]});
		const addressrgJs4C = await FairStockEquitylJpXyXo.setModule.call(addressU0EEyLv, uintVVoIV36, uintZQcoDxY, {from: accounts[2]});

		await expect(FairStockEquitylJpXyXo.reduceShare.call(uintQ14wSD9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressoFtwn21 = accounts[0]
		const addressZDUtPSv = accounts[2]
		const addressJLNdaRU = accounts[0]
		const addressO1tBZX8 = accounts[3]
		const uintlQfWj01 = BigInt("410")
		const FairStockEquityI4Cxudr = await FairStockEquity.new(addressoFtwn21, addressZDUtPSv, addressJLNdaRU, addressO1tBZX8, uintlQfWj01, {from: accounts[1]});
		const uintv0VTbbQ = BigInt("1381")
		const uintXTati8h = BigInt("368")
		const uintWZcTlhT = BigInt("638")
		const uintuNlzgGX = BigInt("1766")
		const addresswM7G6V8 = accounts[3]
		await FairStockEquityI4Cxudr.withdrawMT.call({from: accounts[1]});
		const addresstmMC9A = await FairStockEquityI4Cxudr.business.call(addresswM7G6V8, uintuNlzgGX, uintWZcTlhT, uintXTati8h, uintv0VTbbQ, {from: accounts[4]});

		await expect(FairStockEquityI4Cxudr.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscvrfivc = accounts[0]
		const addressokCTd7u = accounts[2]
		const address05PQ0Y = accounts[0]
		const addresskv2jrF6 = accounts[3]
		const uintz2RERch = BigInt("410")
		const FairStockEquityI4Cxudr = await FairStockEquity.new(addresscvrfivc, addressokCTd7u, address05PQ0Y, addresskv2jrF6, uintz2RERch, {from: accounts[1]});
		const uintG5CfOvs = BigInt("1566")
		const uintKtWZya7 = BigInt("279")
		const uintPo6DQsY = BigInt("275")
		const uint2561uBAHJ = await FairStockEquityI4Cxudr.depositBonus.call(uintG5CfOvs, {from: accounts[3]});
		const uint256HruhHRL = await FairStockEquityI4Cxudr.getCostAmount.call(uintKtWZya7, {from: accounts[1]});
		const uint256IzK06l7 = await FairStockEquityI4Cxudr.setProfitPercentPJ.call(uintPo6DQsY, {from: accounts[3]});

		await expect(FairStockEquityI4Cxudr.depositBonus.call(uintG5CfOvs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMa6ykDj = accounts[2]
		const addressHCJuxiX = accounts[4]
		const addressk1M9Em = accounts[1]
		const addressEoOjJRc = accounts[2]
		const uintp4D4zT9 = BigInt("989")
		const FairStockEquity5cbaFK = await FairStockEquity.new(addressMa6ykDj, addressHCJuxiX, addressk1M9Em, addressEoOjJRc, uintp4D4zT9, {from: accounts[2]});
		const uinttCOL6fx = BigInt("992")
		const uintY7CGIPM = BigInt("29")
		const uintCGUZPEg = BigInt("865")
		const addresswRAc029 = accounts[2]
		const uintHUdGlA = BigInt("1034")
		await FairStockEquity5cbaFK.withdrawBonus.call({from: accounts[4]});
		await FairStockEquity5cbaFK.withdrawPJ.call({from: accounts[1]});
		const uint256WZUDGbL = await FairStockEquity5cbaFK.setProfitPercentMT.call(uinttCOL6fx, {from: accounts[0]});
		const addressNJZaFEy = await FairStockEquity5cbaFK.withdrawMTCallback.call(addresswRAc029, uintCGUZPEg, uintY7CGIPM, {from: accounts[5]});
		const uint256dIiQe9R = await FairStockEquity5cbaFK.depositBonus.call(uintHUdGlA, {from: accounts[3]});

		await expect(FairStockEquity5cbaFK.withdrawBonus.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressY3LNZJx = accounts[0]
		const addressjYNr4Kg = accounts[2]
		const addressebWkRjD = accounts[0]
		const addressh59ivjJ = accounts[3]
		const uintVRbdYpN = BigInt("410")
		const FairStockEquityI4Cxudr = await FairStockEquity.new(addressY3LNZJx, addressjYNr4Kg, addressebWkRjD, addressh59ivjJ, uintVRbdYpN, {from: accounts[1]});
		const uintLQA8P3a = BigInt("654")
		const uintGFxZvHf = BigInt("1457")
		const addresstO0CdS = accounts[3]
		const uintjN2LrFF = BigInt("1381")
		const uintDgsLV3q = BigInt("368")
		const uintlWg6cu = BigInt("284")
		const uintpGT3jX = BigInt("1766")
		const addressCQ9C8ye = accounts[3]
		const addresssh7NDHf = await FairStockEquityI4Cxudr.withdrawMTCallback.call(addresstO0CdS, uintGFxZvHf, uintLQA8P3a, {from: accounts[3]});
		await FairStockEquityI4Cxudr.f.call({from: accounts[0]});
		const addresstmMC9A = await FairStockEquityI4Cxudr.business.call(addressCQ9C8ye, uintpGT3jX, uintlWg6cu, uintDgsLV3q, uintjN2LrFF, {from: accounts[4]});

		await expect(FairStockEquityI4Cxudr.withdrawMTCallback.call(addresstO0CdS, uintGFxZvHf, uintLQA8P3a, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZ6s780r = accounts[3]
		const addressv5nDDzm = accounts[1]
		const addressozwRbei = accounts[0]
		const addressrUvceVl = "0x0000000000000000000000000000000000000001"
		const uintEMVEEFK = BigInt("222")
		const FairStockEquityobjfFbm = await FairStockEquity.new(addressZ6s780r, addressv5nDDzm, addressozwRbei, addressrUvceVl, uintEMVEEFK, {from: accounts[0]});
		const boolXBcXPOp = false
		const address4DzTIS = accounts[2]
		const uintzn5ErnF = BigInt("1510")
		const uintzqitWTh = BigInt("487")
		const uintbgG4x5 = BigInt("924")
		const uinteLTAika = BigInt("1143")
		const addressIOqBOaT = "0x0000000000000000000000000000000000000001"
		const uinti0uksPs = BigInt("720")
		const uintDoUWLBr = BigInt("1944")
		const uintdZVVgxx = BigInt("1507")
		const uintGmCfASZ = BigInt("1927")
		const addressrWJJ7Hl = accounts[5]
		const addressPQT79t = await FairStockEquityobjfFbm.setLPT.call(address4DzTIS, boolXBcXPOp, {from: accounts[0]});
		await FairStockEquityobjfFbm.checkStart.call({from: accounts[2]});
		const addressGtLv1TJ = await FairStockEquityobjfFbm.business.call(addressIOqBOaT, uinteLTAika, uintbgG4x5, uintzqitWTh, uintzn5ErnF, {from: accounts[2]});
		const addresshsQgHLw = await FairStockEquityobjfFbm.business.call(addressrWJJ7Hl, uintGmCfASZ, uintdZVVgxx, uintDoUWLBr, uinti0uksPs, {from: accounts[5]});
		await FairStockEquityobjfFbm.onlyDataSource.call({from: accounts[4]});

		await expect(FairStockEquityobjfFbm.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressd7imJ8P = accounts[5]
		const addressfSDc3Ml = accounts[4]
		const addressVwhGTpa = accounts[2]
		const addressKKaiY7u = accounts[2]
		const uintaC4UC1Y = BigInt("225")
		const FairStockEquityNX4d32l = await FairStockEquity.new(addressd7imJ8P, addressfSDc3Ml, addressVwhGTpa, addressKKaiY7u, uintaC4UC1Y, {from: accounts[3]});
		const uintInaY28W = BigInt("995")
		const uinto8l21vE = BigInt("1415")
		const uint0n7tF8 = BigInt("1648")
		const uintHjl8dEh = BigInt("1304")
		const uintjQlWLG8 = BigInt("420")
		const boolETxVD8 = false
		const addressLU32Pzz = accounts[1]
		const uintKblYq8F = BigInt("514")
		const uintRxGy2fN = BigInt("359")
		const uintFasWHU = BigInt("691")
		const uintV20e6d = BigInt("927")
		const uintj83BoBl = BigInt("202")
		const addressWC2yWk = accounts[2]
		const uint256feuBHr = await FairStockEquityNX4d32l.setDegree.call(uintjQlWLG8, uintHjl8dEh, uint0n7tF8, uinto8l21vE, uintInaY28W, {from: accounts[3]});
		const addressM6TCdKq = await FairStockEquityNX4d32l.setLPT.call(addressLU32Pzz, boolETxVD8, {from: accounts[3]});
		const uint256DB99489 = await FairStockEquityNX4d32l.setStartTime.call(uintKblYq8F, {from: accounts[3]});
		const addressI8PNy7N = await FairStockEquityNX4d32l.business.call(addressWC2yWk, uintj83BoBl, uintV20e6d, uintFasWHU, uintRxGy2fN, {from: accounts[5]});

		await expect(FairStockEquityNX4d32l.business.call(addressWC2yWk, uintj83BoBl, uintV20e6d, uintFasWHU, uintRxGy2fN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresse6O56MU = accounts[5]
		const addressJ2RF4Ht = accounts[4]
		const addressnhU9M2f = accounts[2]
		const addressc325QO = accounts[2]
		const uintnjAMbvJ = BigInt("225")
		const FairStockEquityNX4d32l = await FairStockEquity.new(addresse6O56MU, addressJ2RF4Ht, addressnhU9M2f, addressc325QO, uintnjAMbvJ, {from: accounts[3]});
		const uintC2LOoX = BigInt("995")
		const uintPdnSz9 = BigInt("1415")
		const uintAUQL4Xi = BigInt("1648")
		const uintJPJM58h = BigInt("1304")
		const uintngUA463 = BigInt("420")
		const boolETxVD8 = true
		const addressbWNGoze = accounts[5]
		const uintOLVkVE = BigInt("917")
		const uintE8hYkUa = BigInt("472")
		const addressJbvSobh = accounts[4]
		const uintul2Mvha = BigInt("359")
		const uintg7sMhdt = BigInt("691")
		const uintz4boLfY = BigInt("927")
		const uint6HnuHP = BigInt("202")
		const addressXRc7i9J = accounts[2]
		const uint256feuBHr = await FairStockEquityNX4d32l.setDegree.call(uintngUA463, uintJPJM58h, uintAUQL4Xi, uintPdnSz9, uintC2LOoX, {from: accounts[3]});
		const addressM6TCdKq = await FairStockEquityNX4d32l.setLPT.call(addressbWNGoze, boolETxVD8, {from: accounts[3]});
		const addressbVw49f2 = await FairStockEquityNX4d32l.withdrawBonusCallback.call(addressJbvSobh, uintE8hYkUa, uintOLVkVE, {from: accounts[2]});
		const addressI8PNy7N = await FairStockEquityNX4d32l.business.call(addressXRc7i9J, uint6HnuHP, uintz4boLfY, uintg7sMhdt, uintul2Mvha, {from: accounts[5]});

		await expect(FairStockEquityNX4d32l.withdrawBonusCallback.call(addressJbvSobh, uintE8hYkUa, uintOLVkVE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})