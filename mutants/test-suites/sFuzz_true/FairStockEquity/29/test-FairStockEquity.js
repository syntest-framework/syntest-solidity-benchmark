const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressP0MIbjQ = accounts[3]
		const addressNWXRh1t = accounts[1]
		const addressy1gkZ4e = accounts[0]
		const addressb5QDoTk = accounts[5]
		const uinth3miniu = BigInt("1757")
		const FairStockEquityqB6Sksr = await FairStockEquity.new(addressP0MIbjQ, addressNWXRh1t, addressy1gkZ4e, addressb5QDoTk, uinth3miniu, {from: "0x0000000000000000000000000000000000000001"});
		const uintWhSX5o = BigInt("729")
		const uintwwAbuLq = BigInt("1138")
		const uintliJDZF6 = BigInt("1852")
		const uintmIW0z1B = BigInt("1983")
		const uintqnEoyJV = BigInt("1322")
		const uintYUA9xqD = BigInt("56")
		await FairStockEquityqB6Sksr.onlyDataSource.call({from: accounts[5]});
		const uint256qkVCQpw = await FairStockEquityqB6Sksr.bonus.call(uintWhSX5o, {from: accounts[0]});
		const uint256uznjqFU = await FairStockEquityqB6Sksr.setDegree.call(uintYUA9xqD, uintqnEoyJV, uintmIW0z1B, uintliJDZF6, uintwwAbuLq, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityqB6Sksr.withdrawPJ.call({from: accounts[0]});
	});

	it('test for FairStockEquity', async () => {
		const addresscyIzRkH = "0x0000000000000000000000000000000000000001"
		const addressz4ZfE1i = accounts[0]
		const addressIJS7BGI = accounts[2]
		const addressP0GrM5K = accounts[3]
		const uintGKXoNW1 = BigInt("1877")
		const FairStockEquityFtqyFAP = await FairStockEquity.new(addresscyIzRkH, addressz4ZfE1i, addressIJS7BGI, addressP0GrM5K, uintGKXoNW1, {from: accounts[4]});
		const uintJStHDjX = BigInt("1574")
		const uintW0U8tIS = BigInt("361")
//		await FairStockEquityFtqyFAP.checkStart.call({from: accounts[0]});
//		const uint2560EOCYb = await FairStockEquityFtqyFAP.depositBonus.call(uintJStHDjX, {from: accounts[1]});
//		const uint256vSipkBL = await FairStockEquityFtqyFAP.getCostAmount.call(uintW0U8tIS, {from: accounts[2]});

		await expect(FairStockEquityFtqyFAP.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBTtdAct = accounts[3]
		const addresswRjKgEd = accounts[4]
		const addressHOUGgN = accounts[0]
		const addressZUEWswO = accounts[5]
		const uintQV84eK7 = BigInt("367")
		const FairStockEquityspVBn70 = await FairStockEquity.new(addressBTtdAct, addresswRjKgEd, addressHOUGgN, addressZUEWswO, uintQV84eK7, {from: accounts[1]});
		const uintZa6oxpx = BigInt("1917")
		const uintwRHBcb = BigInt("1868")
		const uinteqilAah = BigInt("327")
		const uintBWcYog1 = BigInt("695")
		const uintIxw1Rua = BigInt("1367")
		const uintmWYBH2E = BigInt("116")
		const uinteZ5FS5 = BigInt("14")
		const uintW0wtunZ = BigInt("895")
		const uintECSMyzn = BigInt("1342")
		const uintE8zFeZ = BigInt("521")
		const addressgRc8MA = accounts[0]
		const uintjWnIDL1 = BigInt("917")
		const uintvh5er27 = BigInt("1449")
		const uintSu12x8L = BigInt("420")
		const uintaJSyrXt = BigInt("1532")
		const addressmC9tTIZ = accounts[1]
//		const uint2562noIa8 = await FairStockEquityspVBn70.setDegree.call(uintIxw1Rua, uintBWcYog1, uinteqilAah, uintwRHBcb, uintZa6oxpx, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256QYMehDZ = await FairStockEquityspVBn70.bonus.call(uintmWYBH2E, {from: accounts[3]});
//		const addressmDNPgT5 = await FairStockEquityspVBn70.business.call(addressgRc8MA, uintE8zFeZ, uintECSMyzn, uintW0wtunZ, uinteZ5FS5, {from: accounts[2]});
//		const addressQ9d5ZEl = await FairStockEquityspVBn70.business.call(addressmC9tTIZ, uintaJSyrXt, uintSu12x8L, uintvh5er27, uintjWnIDL1, {from: accounts[3]});

		await expect(FairStockEquityspVBn70.setDegree.call(uintIxw1Rua, uintBWcYog1, uinteqilAah, uintwRHBcb, uintZa6oxpx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressL6zsvzA = accounts[4]
		const addressLjLFXz = accounts[0]
		const addressEFIikfs = accounts[4]
		const addressaH9mP1H = accounts[1]
		const uintZjVTwv8 = BigInt("1086")
		const FairStockEquitygjJbPu = await FairStockEquity.new(addressL6zsvzA, addressLjLFXz, addressEFIikfs, addressaH9mP1H, uintZjVTwv8, {from: accounts[3]});
		const uintxGjl2YI = BigInt("1330")
		const uintn6HGdN = BigInt("796")
//		const uint256DsRijmG = await FairStockEquitygjJbPu.setProfitPercentBonus.call(uintxGjl2YI, {from: accounts[4]});
//		const uint256RpBqT3w = await FairStockEquitygjJbPu.setStartTime.call(uintn6HGdN, {from: accounts[0]});
//		await FairStockEquitygjJbPu.f.call({from: accounts[4]});
//		await FairStockEquitygjJbPu.onlyDataSource.call({from: accounts[2]});

		await expect(FairStockEquitygjJbPu.setProfitPercentBonus.call(uintxGjl2YI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresssCRPZGn = accounts[4]
		const addresszRDGarZ = accounts[0]
		const addressNwA3OwL = accounts[2]
		const addressKKw4t05 = accounts[3]
		const uintjzvC9ED = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addresssCRPZGn, addresszRDGarZ, addressNwA3OwL, addressKKw4t05, uintjzvC9ED, {from: accounts[3]});
		const uintH6NVSn5 = BigInt("178")
		const addressxnGVSFr = accounts[5]
		const uintYuJI1CF = BigInt("1531")
//		const addressrLzPYNf = await FairStockEquityTeAegCX.withdrawLPT.call(addressxnGVSFr, uintH6NVSn5, {from: accounts[5]});
//		const uint2560Yx6eo = await FairStockEquityTeAegCX.setProfitPercentMT.call(uintYuJI1CF, {from: accounts[3]});

		await expect(FairStockEquityTeAegCX.withdrawLPT.call(addressxnGVSFr, uintH6NVSn5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressc1BSM03 = accounts[3]
		const addressVMr2ISM = accounts[1]
		const addressqj1J71n = accounts[3]
		const addressYQE0TZT = accounts[4]
		const uintKMK0Hrx = BigInt("1253")
		const FairStockEquityne6cw8K = await FairStockEquity.new(addressc1BSM03, addressVMr2ISM, addressqj1J71n, addressYQE0TZT, uintKMK0Hrx, {from: accounts[2]});
		const uintjguqfQv = BigInt("1538")
		const uintG22Y44g = BigInt("988")
//		const uint256xKs9ycY = await FairStockEquityne6cw8K.reduceShare.call(uintjguqfQv, {from: accounts[4]});
//		await FairStockEquityne6cw8K.checkStart.call({from: accounts[0]});
//		await FairStockEquityne6cw8K.withdrawPJ.call({from: accounts[2]});
//		const uint256rrAw55J = await FairStockEquityne6cw8K.getCostAmount.call(uintG22Y44g, {from: accounts[2]});

		await expect(FairStockEquityne6cw8K.reduceShare.call(uintjguqfQv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressU62mdOh = accounts[4]
		const addressTyvfu89 = accounts[0]
		const addresssVJR1mK = accounts[2]
		const addressQ7lVYi = accounts[3]
		const uintGdHWApo = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressU62mdOh, addressTyvfu89, addresssVJR1mK, addressQ7lVYi, uintGdHWApo, {from: accounts[3]});
		const uintFeMGjCL = BigInt("1952")
		const uintkHLAtbK = BigInt("1552")
		const uintMHKmXk = BigInt("25")
//		const uint256uTjIGWC = await FairStockEquityTeAegCX.invest.call(uintFeMGjCL, {from: accounts[2]});
//		const uint2560Yx6eo = await FairStockEquityTeAegCX.setProfitPercentMT.call(uintkHLAtbK, {from: accounts[3]});
//		const uint256lXE1lJX = await FairStockEquityTeAegCX.setProfitPercentPJ.call(uintMHKmXk, {from: accounts[4]});

		await expect(FairStockEquityTeAegCX.invest.call(uintFeMGjCL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYptr0Rm = accounts[4]
		const addressdH0Sd6M = accounts[4]
		const addresswtXAnaa = accounts[1]
		const addressKWJqcYB = accounts[4]
		const uintMkgO2i3 = BigInt("1031")
		const FairStockEquityMbrd8Zi = await FairStockEquity.new(addressYptr0Rm, addressdH0Sd6M, addresswtXAnaa, addressKWJqcYB, uintMkgO2i3, {from: accounts[2]});
		const uintSVKuRGj = BigInt("1607")
		const uintvgbS3sG = BigInt("940")
		const uintl52CWNi = BigInt("778")
		const addressLFVscme = accounts[2]
		const uintDQb7Q38 = BigInt("1681")
		const uintwk3E55w = BigInt("332")
		const addresselMW3yP = accounts[4]
		const uintsa81efj = BigInt("1562")
		const addresshWaCC9v = accounts[2]
		const uint6Pc3ei = BigInt("1575")
//		const uint256kZBVujh = await FairStockEquityMbrd8Zi.depositBonus.call(uintSVKuRGj, {from: accounts[2]});
//		const addressv7v0rj3 = await FairStockEquityMbrd8Zi.withdrawMTCallback.call(addressLFVscme, uintl52CWNi, uintvgbS3sG, {from: accounts[3]});
//		const addressHsLUq0z = await FairStockEquityMbrd8Zi.setModule.call(addresselMW3yP, uintwk3E55w, uintDQb7Q38, {from: accounts[2]});
//		const addressN8H72ez = await FairStockEquityMbrd8Zi.withdrawLPT.call(addresshWaCC9v, uintsa81efj, {from: accounts[3]});
//		const uint256xfGfm8o = await FairStockEquityMbrd8Zi.setStartTime.call(uint6Pc3ei, {from: accounts[2]});

		await expect(FairStockEquityMbrd8Zi.depositBonus.call(uintSVKuRGj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYDCHDM = accounts[4]
		const addressWwOXpXD = accounts[0]
		const addresss1AY8Zo = accounts[2]
		const addressrt9sCOS = accounts[3]
		const uintlruFlFb = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressYDCHDM, addressWwOXpXD, addresss1AY8Zo, addressrt9sCOS, uintlruFlFb, {from: accounts[3]});
		const uintofmcKXh = BigInt("1523")
		const uint2560Yx6eo = await FairStockEquityTeAegCX.setProfitPercentMT.call(uintofmcKXh, {from: accounts[3]});
//		await FairStockEquityTeAegCX.withdrawMT.call({from: accounts[0]});

		await expect(FairStockEquityTeAegCX.withdrawMT.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYhYErUB = accounts[4]
		const addressUMDjNR9 = accounts[0]
		const addressDELXrii = accounts[2]
		const addressqC0DfAZ = accounts[3]
		const uintVIAsGFg = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressYhYErUB, addressUMDjNR9, addressDELXrii, addressqC0DfAZ, uintVIAsGFg, {from: accounts[3]});
		const uints0EtuIB = BigInt("1942")
//		await FairStockEquityTeAegCX.f.call({from: accounts[1]});
//		const uint256uTjIGWC = await FairStockEquityTeAegCX.invest.call(uints0EtuIB, {from: accounts[2]});

		await expect(FairStockEquityTeAegCX.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresswZZxNK3 = accounts[4]
		const addressiAdsmGt = accounts[0]
		const addressRj8DDU = accounts[2]
		const addressuzFA61v = accounts[3]
		const uintPCPlUxi = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addresswZZxNK3, addressiAdsmGt, addressRj8DDU, addressuzFA61v, uintPCPlUxi, {from: accounts[3]});
		const uinteiXY96 = BigInt("1990")
		const uintlgPJ6L8 = BigInt("411")
		const uintXNZFE7w = BigInt("1556")
		const uint1dH7Yn = BigInt("7")
		const address3GpCaE = accounts[0]
		const uintEcywBj4 = BigInt("1946")
//		const addressGwuDTjs = await FairStockEquityTeAegCX.business.call(address3GpCaE, uint1dH7Yn, uintXNZFE7w, uintlgPJ6L8, uinteiXY96, {from: accounts[0]});
//		const uint256uTjIGWC = await FairStockEquityTeAegCX.invest.call(uintEcywBj4, {from: accounts[2]});

		await expect(FairStockEquityTeAegCX.business.call(address3GpCaE, uint1dH7Yn, uintXNZFE7w, uintlgPJ6L8, uinteiXY96, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBiqZu6 = accounts[4]
		const addressPoUbGtK = accounts[0]
		const addressoc8ENMI = accounts[2]
		const addressJSLtFe4 = accounts[3]
		const uintIA4xS0 = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressBiqZu6, addressPoUbGtK, addressoc8ENMI, addressJSLtFe4, uintIA4xS0, {from: accounts[3]});
		const uintpCJXlEk = BigInt("1946")
//		await FairStockEquityTeAegCX.withdrawBonus.call({from: accounts[0]});
//		const uint256uTjIGWC = await FairStockEquityTeAegCX.invest.call(uintpCJXlEk, {from: accounts[2]});

		await expect(FairStockEquityTeAegCX.withdrawBonus.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshOOLC0H = accounts[2]
		const addressweLRbba = accounts[4]
		const addressa5i9Npc = accounts[1]
		const addresskWZHb2u = accounts[2]
		const uintrIgrtGN = BigInt("268")
		const FairStockEquityhn47Vuj = await FairStockEquity.new(addresshOOLC0H, addressweLRbba, addressa5i9Npc, addresskWZHb2u, uintrIgrtGN, {from: accounts[3]});
		const uintz0w8U3C = BigInt("1878")
		const uintKxBDnBV = BigInt("1422")
		const addressz15i7vk = "0x0000000000000000000000000000000000000001"
		const uintYumXqR5 = BigInt("411")
		const uintIL81w7T = BigInt("1928")
		const uintzOocuY = BigInt("33")
		const uintNDJ9GWs = BigInt("442")
		const uinti3d5V4 = BigInt("605")
		const uintaVM6NB6 = BigInt("1179")
		const uintU1sKxym = BigInt("1538")
//		const addressD1uL7IH = await FairStockEquityhn47Vuj.withdrawMTCallback.call(addressz15i7vk, uintKxBDnBV, uintz0w8U3C, {from: accounts[0]});
//		await FairStockEquityhn47Vuj.onlyDataSource.call({from: accounts[4]});
//		const uint256OLQo0aY = await FairStockEquityhn47Vuj.setDegree.call(uinti3d5V4, uintNDJ9GWs, uintzOocuY, uintIL81w7T, uintYumXqR5, {from: accounts[1]});
//		const uint256DFNsx01 = await FairStockEquityhn47Vuj.setProfitPercentBonus.call(uintaVM6NB6, {from: accounts[3]});
//		await FairStockEquityhn47Vuj.withdrawMT.call({from: accounts[4]});
//		const uint256h8wgsvB = await FairStockEquityhn47Vuj.invest.call(uintU1sKxym, {from: accounts[1]});

		await expect(FairStockEquityhn47Vuj.withdrawMTCallback.call(addressz15i7vk, uintKxBDnBV, uintz0w8U3C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTyeieMk = accounts[4]
		const addressO28GgSt = accounts[0]
		const addressqfmkiQ = accounts[2]
		const addressCwUCxTL = accounts[3]
		const uintHCE1Yfq = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressTyeieMk, addressO28GgSt, addressqfmkiQ, addressCwUCxTL, uintHCE1Yfq, {from: accounts[3]});
		const uintV28qMOG = BigInt("772")
		const addresssiRnLC = accounts[4]
		const uintfntYPOh = BigInt("1478")
		const uintE2NRelt = BigInt("1103")
		const uint2Y7M8F = BigInt("1710")
		const uintLdd6tAo = BigInt("1981")
//		const addressg04LMO = await FairStockEquityTeAegCX.depositLPT.call(addresssiRnLC, uintV28qMOG, {from: accounts[2]});
//		const uint256TAREEH = await FairStockEquityTeAegCX.setProfitPercentPJ.call(uintfntYPOh, {from: accounts[5]});
//		const uint256ZEDbFXm = await FairStockEquityTeAegCX.setStartTime.call(uintE2NRelt, {from: accounts[3]});
//		const uint256WDbt8SC = await FairStockEquityTeAegCX.reduceShare.call(uint2Y7M8F, {from: accounts[3]});
//		const uint256uTjIGWC = await FairStockEquityTeAegCX.invest.call(uintLdd6tAo, {from: accounts[2]});

		await expect(FairStockEquityTeAegCX.depositLPT.call(addresssiRnLC, uintV28qMOG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressF4LH4pV = accounts[4]
		const addressWcd9wr9 = accounts[0]
		const addressHhHDB5h = accounts[2]
		const addressVLVcvVB = accounts[3]
		const uintyfRuarr = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressF4LH4pV, addressWcd9wr9, addressHhHDB5h, addressVLVcvVB, uintyfRuarr, {from: accounts[3]});
		const uintTmqDMSh = BigInt("1542")
		const uintGml0oPc = BigInt("1623")
		const uintAePqh1o = BigInt("494")
		const addressOY7jfDY = accounts[2]
		const uint2560Yx6eo = await FairStockEquityTeAegCX.setProfitPercentMT.call(uintTmqDMSh, {from: accounts[3]});
		const addressBS4zMT = await FairStockEquityTeAegCX.setModule.call(addressOY7jfDY, uintAePqh1o, uintGml0oPc, {from: accounts[3]});
	});

	it('test for FairStockEquity', async () => {
		const addressoi3uwFR = accounts[4]
		const addressjBCPIYa = accounts[0]
		const addressxvD3aWp = accounts[2]
		const addressFgeqXGg = accounts[3]
		const uintdpvFUI = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressoi3uwFR, addressjBCPIYa, addressxvD3aWp, addressFgeqXGg, uintdpvFUI, {from: accounts[3]});
		const uintLbZCXkH = BigInt("1103")
		const uintQi7znXB = BigInt("1981")
		const uint256ZEDbFXm = await FairStockEquityTeAegCX.setStartTime.call(uintLbZCXkH, {from: accounts[3]});
//		const uint256uTjIGWC = await FairStockEquityTeAegCX.invest.call(uintQi7znXB, {from: accounts[2]});

		await expect(FairStockEquityTeAegCX.invest.call(uintQi7znXB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDFXErjF = accounts[4]
		const addresspP5MsUp = accounts[0]
		const addresswIAVXlc = accounts[2]
		const addressNm0DeGe = accounts[3]
		const uintcFBjhKE = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressDFXErjF, addresspP5MsUp, addresswIAVXlc, addressNm0DeGe, uintcFBjhKE, {from: accounts[3]});
		const uintcrzBfKI = BigInt("1521")
		const boolDbzojL = true
		const addressGcOC4g6 = accounts[2]
		const uint2560Yx6eo = await FairStockEquityTeAegCX.setProfitPercentMT.call(uintcrzBfKI, {from: accounts[3]});
		const addressys5u64i = await FairStockEquityTeAegCX.setLPT.call(addressGcOC4g6, boolDbzojL, {from: accounts[3]});
	});

	it('test for FairStockEquity', async () => {
		const addressKcDtTO = accounts[4]
		const addresspiWydsL = accounts[0]
		const addressL6lRCPi = accounts[2]
		const addresszWy8kOT = accounts[3]
		const uintZlZhpoq = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressKcDtTO, addresspiWydsL, addressL6lRCPi, addresszWy8kOT, uintZlZhpoq, {from: accounts[3]});
		const uintljRnihF = BigInt("60")
		const uintZmjAa7Y = BigInt("1958")
//		await FairStockEquityTeAegCX.withdrawPJ.call({from: accounts[3]});
//		const uint256cnAALuo = await FairStockEquityTeAegCX.getCostAmount.call(uintljRnihF, {from: accounts[2]});
//		const uint256uTjIGWC = await FairStockEquityTeAegCX.invest.call(uintZmjAa7Y, {from: accounts[2]});

		await expect(FairStockEquityTeAegCX.withdrawPJ.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressM9lN2Q4 = accounts[3]
		const addressaIH1duS = accounts[5]
		const addressQ6Knhoi = accounts[1]
		const addressNyUummh = accounts[4]
		const uintHOLmA9 = BigInt("217")
		const FairStockEquityWJqmZvq = await FairStockEquity.new(addressM9lN2Q4, addressaIH1duS, addressQ6Knhoi, addressNyUummh, uintHOLmA9, {from: accounts[5]});
		const uintjyBD0IU = BigInt("1132")
		const uintZKAq74g = BigInt("482")
		const addressR23SQdP = accounts[2]
		const uintLcl1X8K = BigInt("371")
//		const addressp3qwGIi = await FairStockEquityWJqmZvq.withdrawMTCallback.call(addressR23SQdP, uintZKAq74g, uintjyBD0IU, {from: accounts[4]});
//		const uint256wo3lM5 = await FairStockEquityWJqmZvq.setProfitPercentBonus.call(uintLcl1X8K, {from: accounts[4]});

		await expect(FairStockEquityWJqmZvq.withdrawMTCallback.call(addressR23SQdP, uintZKAq74g, uintjyBD0IU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrDaWsOu = accounts[4]
		const addresstPeQsk = accounts[0]
		const addressLpKOVn = accounts[2]
		const addressiAsOvgr = accounts[3]
		const uintgApeaAq = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressrDaWsOu, addresstPeQsk, addressLpKOVn, addressiAsOvgr, uintgApeaAq, {from: accounts[3]});
		const uinto6OVwRS = BigInt("2008")
		const uintWOjboH6 = BigInt("1174")
		const uintqCgH6qG = BigInt("240")
		const uintiKRafLn = BigInt("1905")
//		const uint256Vifd0QL = await FairStockEquityTeAegCX.bonus.call(uinto6OVwRS, {from: accounts[3]});
//		const uint256d4jZ1PS = await FairStockEquityTeAegCX.setProfitPercentMT.call(uintWOjboH6, {from: accounts[2]});
//		const uint256FJJ687A = await FairStockEquityTeAegCX.getCostAmount.call(uintqCgH6qG, {from: accounts[0]});
//		const uint256uTjIGWC = await FairStockEquityTeAegCX.invest.call(uintiKRafLn, {from: accounts[2]});

		await expect(FairStockEquityTeAegCX.bonus.call(uinto6OVwRS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuaSqzVi = accounts[4]
		const addressGGYDPpO = accounts[0]
		const addressFgN4wDC = accounts[2]
		const addressyWBtND1 = accounts[3]
		const uintP3AngUA = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressuaSqzVi, addressGGYDPpO, addressFgN4wDC, addressyWBtND1, uintP3AngUA, {from: accounts[3]});
		const uintHYjGT7 = BigInt("1489")
		const uintArza8Hs = BigInt("358")
		const uintv6EDaId = BigInt("212")
		const uintkoO6yMz = BigInt("1759")
		const addresskqfEXZj = "0x0000000000000000000000000000000000000001"
		const uint2560Yx6eo = await FairStockEquityTeAegCX.setProfitPercentMT.call(uintHYjGT7, {from: accounts[3]});
//		const uint256lE5Ldnx = await FairStockEquityTeAegCX.setStartTime.call(uintArza8Hs, {from: accounts[3]});
//		const addressx1QsPp0 = await FairStockEquityTeAegCX.withdrawMTCallback.call(addresskqfEXZj, uintkoO6yMz, uintv6EDaId, {from: accounts[3]});

		await expect(FairStockEquityTeAegCX.setStartTime.call(uintArza8Hs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressiFZ80jm = accounts[4]
		const addressVUomgbB = accounts[0]
		const addressomvjkO = accounts[2]
		const addressnOP1ew = accounts[3]
		const uintIwep2f8 = BigInt("457")
		const FairStockEquityTeAegCX = await FairStockEquity.new(addressiFZ80jm, addressVUomgbB, addressomvjkO, addressnOP1ew, uintIwep2f8, {from: accounts[3]});
		const uintwKIlpMj = BigInt("1298")
		const uintMYhxqjU = BigInt("1267")
		const addressOMpu1si = accounts[1]
		const uintzsVmH6P = BigInt("1523")
//		const addressOOb5p4S = await FairStockEquityTeAegCX.withdrawBonusCallback.call(addressOMpu1si, uintMYhxqjU, uintwKIlpMj, {from: accounts[3]});
//		await FairStockEquityTeAegCX.f.call({from: accounts[1]});
//		const uint2560Yx6eo = await FairStockEquityTeAegCX.setProfitPercentMT.call(uintzsVmH6P, {from: accounts[3]});

		await expect(FairStockEquityTeAegCX.withdrawBonusCallback.call(addressOMpu1si, uintMYhxqjU, uintwKIlpMj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})