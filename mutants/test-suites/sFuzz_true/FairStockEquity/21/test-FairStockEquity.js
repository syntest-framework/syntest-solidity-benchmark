const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressVi3IKFO = accounts[2]
		const addressAGBaU9n = "0x0000000000000000000000000000000000000001"
		const addressqFx98hs = accounts[2]
		const addressP6p9hf = accounts[2]
		const uintVPeW6v5 = BigInt("674")
		const FairStockEquitybLAfzok = await FairStockEquity.new(addressVi3IKFO, addressAGBaU9n, addressqFx98hs, addressP6p9hf, uintVPeW6v5, {from: accounts[4]});
		const uintTIwXWC0 = BigInt("538")
		const uintWddfkg = BigInt("712")
		const uintBAVQhTZ = BigInt("1372")
		const addressFBM4YVM = accounts[3]
//		await FairStockEquitybLAfzok.checkStart.call({from: accounts[2]});
//		await FairStockEquitybLAfzok.withdrawBonus.call({from: accounts[2]});
//		const uint256X1P6ulu = await FairStockEquitybLAfzok.depositBonus.call(uintTIwXWC0, {from: accounts[0]});
//		const addressbLhNJ8L = await FairStockEquitybLAfzok.withdrawBonusCallback.call(addressFBM4YVM, uintBAVQhTZ, uintWddfkg, {from: accounts[0]});
		await FairStockEquitybLAfzok.checkStart.call({from: accounts[2]});

		await expect(FairStockEquitybLAfzok.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQtMNZly = accounts[0]
		const addressJZKvJiX = accounts[5]
		const addressvqBCpFg = accounts[0]
		const addressYFO1zS = accounts[0]
		const uintT9tz9BM = BigInt("1406")
		const FairStockEquityYgCBRd = await FairStockEquity.new(addressQtMNZly, addressJZKvJiX, addressvqBCpFg, addressYFO1zS, uintT9tz9BM, {from: "0x0000000000000000000000000000000000000001"});
		const addresszJOphpo = accounts[2]
		const uintpBh3b0i = BigInt("182")
		const addresspUPUkwX = accounts[2]
		const addressC1fg4Pl = accounts[1]
		const addresspVDpOjJ = await FairStockEquityYgCBRd.setDataSource.call(addresszJOphpo, {from: accounts[3]});
		const addressF8HpuBR = await FairStockEquityYgCBRd.depositLPT.call(addresspUPUkwX, uintpBh3b0i, {from: accounts[4]});
		const addressOPPCe5z = await FairStockEquityYgCBRd.setDataSource.call(addressC1fg4Pl, {from: accounts[5]});
	});

	it('test for FairStockEquity', async () => {
		const addressn6cqgp = accounts[1]
		const addressiVhw529 = accounts[0]
		const addressDRZOBjG = accounts[1]
		const addressRyzk73p = accounts[3]
		const uintAeHJ5OB = BigInt("866")
		const FairStockEquityz1M4cKF = await FairStockEquity.new(addressn6cqgp, addressiVhw529, addressDRZOBjG, addressRyzk73p, uintAeHJ5OB, {from: accounts[1]});
		const addressmhBdjHN = accounts[1]
		const uintjCQyD8W = BigInt("1375")
		const addressSVOp5v3 = "0x0000000000000000000000000000000000000001"
		const uinthMRhKe9 = BigInt("1335")
		const uintpKB2o2t = BigInt("1874")
		const addressCSiIKr = accounts[0]
		const uintgc2WFYQ = BigInt("1639")
		const uintZEMDUSE = BigInt("1831")
		const addressu8wZ0HH = accounts[3]
		const addressDOfuVZ7 = await FairStockEquityz1M4cKF.setDataSource.call(addressmhBdjHN, {from: accounts[1]});
//		const addressD1GQ0mq = await FairStockEquityz1M4cKF.depositLPT.call(addressSVOp5v3, uintjCQyD8W, {from: accounts[3]});
//		const uint256NZA7gzy = await FairStockEquityz1M4cKF.setGasFeeForCallback.call(uinthMRhKe9, {from: accounts[4]});
//		const uint256E0IZppR = await FairStockEquityz1M4cKF.bonus.call(uintpKB2o2t, {from: accounts[1]});
//		const addressOEGDXaN = await FairStockEquityz1M4cKF.setDataSource.call(addressCSiIKr, {from: accounts[0]});
//		const addressxPy6Mrr = await FairStockEquityz1M4cKF.withdrawMTCallback.call(addressu8wZ0HH, uintZEMDUSE, uintgc2WFYQ, {from: accounts[4]});

		await expect(FairStockEquityz1M4cKF.depositLPT.call(addressSVOp5v3, uintjCQyD8W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressVqIX4LB = accounts[0]
		const addressrrijsbJ = accounts[1]
		const addressQ8E5gJp = accounts[1]
		const addressGHIea5k = accounts[0]
		const uintcbUyhY = BigInt("1888")
		const FairStockEquitys4Um75 = await FairStockEquity.new(addressVqIX4LB, addressrrijsbJ, addressQ8E5gJp, addressGHIea5k, uintcbUyhY, {from: accounts[3]});
		const uintsLXYxTF = BigInt("419")
		const addressHnVZf4r = accounts[2]
		const boolsh4FfXK = true
		const addresstY8GjzC = accounts[1]
		const uintnUjQSc2 = BigInt("217")
//		await FairStockEquitys4Um75.withdrawMT.call({from: accounts[5]});
//		const addressef1srXL = await FairStockEquitys4Um75.depositLPT.call(addressHnVZf4r, uintsLXYxTF, {from: accounts[3]});
//		const addressgIdbDM = await FairStockEquitys4Um75.setLPT.call(addresstY8GjzC, boolsh4FfXK, {from: accounts[2]});
//		const uint256V1K75lv = await FairStockEquitys4Um75.getCostAmount.call(uintnUjQSc2, {from: accounts[4]});
//		await FairStockEquitys4Um75.onlyDataSource.call({from: accounts[4]});
//		await FairStockEquitys4Um75.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquitys4Um75.withdrawMT.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshVwtOz4 = accounts[4]
		const addressx441r1x = accounts[2]
		const addressyLzIb40 = accounts[2]
		const addressJP4RrOY = accounts[1]
		const uintwv3mQl = BigInt("1732")
		const FairStockEquityFDhvEb2 = await FairStockEquity.new(addresshVwtOz4, addressx441r1x, addressyLzIb40, addressJP4RrOY, uintwv3mQl, {from: accounts[2]});
		const uintZlgWs5 = BigInt("1921")
		const uintS9TqUhI = BigInt("2")
		const uintqxcxqs2 = BigInt("1763")
//		const uint2563CxWgI = await FairStockEquityFDhvEb2.depositBonus.call(uintZlgWs5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256w0L2v0M = await FairStockEquityFDhvEb2.invest.call(uintS9TqUhI, {from: accounts[5]});
//		const uint256tSrhB7E = await FairStockEquityFDhvEb2.depositBonus.call(uintqxcxqs2, {from: accounts[3]});

		await expect(FairStockEquityFDhvEb2.depositBonus.call(uintZlgWs5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslIQSC9T = accounts[0]
		const addressLtGoWLY = accounts[0]
		const addressoKXoSSD = accounts[0]
		const addresseKD1BNx = accounts[0]
		const uintb0BXXIO = BigInt("985")
		const FairStockEquityYkEQfrY = await FairStockEquity.new(addresslIQSC9T, addressLtGoWLY, addressoKXoSSD, addresseKD1BNx, uintb0BXXIO, {from: accounts[3]});
		const uinteTbB1KC = BigInt("1719")
		const uintnjt2piA = BigInt("776")
		const addressssFuOHD = accounts[2]
		const uintdnsdRFw = BigInt("379")
		const addressannPTKj = accounts[3]
//		const uint256LUPA2Sr = await FairStockEquityYkEQfrY.setGasFeeForCallback.call(uinteTbB1KC, {from: accounts[4]});
//		const addressyc9aMdP = await FairStockEquityYkEQfrY.withdrawLPT.call(addressssFuOHD, uintnjt2piA, {from: accounts[4]});
//		const uint256YUEBAP = await FairStockEquityYkEQfrY.reduceShare.call(uintdnsdRFw, {from: accounts[2]});
//		await FairStockEquityYkEQfrY.withdrawMT.call({from: accounts[2]});
//		await FairStockEquityYkEQfrY.onlyDataSource.call({from: accounts[4]});
//		const addressMZGcLfh = await FairStockEquityYkEQfrY.setDataSource.call(addressannPTKj, {from: accounts[2]});

		await expect(FairStockEquityYkEQfrY.setGasFeeForCallback.call(uinteTbB1KC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdk1FMWQ = accounts[1]
		const addressWrODQA8 = accounts[0]
		const addressUyfBiwX = accounts[5]
		const addressFkW8SFH = accounts[1]
		const uintyVXSUB = BigInt("751")
		const FairStockEquityKDfIVc = await FairStockEquity.new(addressdk1FMWQ, addressWrODQA8, addressUyfBiwX, addressFkW8SFH, uintyVXSUB, {from: accounts[0]});
		const uintKBoZBIY = BigInt("1080")
		const uintJKCD6E = BigInt("532")
		const addressSxmCxWz = accounts[4]
		const uintcUt4y73 = BigInt("439")
//		const addressITwtb9J = await FairStockEquityKDfIVc.withdrawBonusCallback.call(addressSxmCxWz, uintJKCD6E, uintKBoZBIY, {from: accounts[1]});
//		await FairStockEquityKDfIVc.onlyDataSource.call({from: accounts[3]});
//		const uint256o61n10 = await FairStockEquityKDfIVc.setProfitPercentMT.call(uintcUt4y73, {from: accounts[1]});
//		await FairStockEquityKDfIVc.f.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityKDfIVc.withdrawBonusCallback.call(addressSxmCxWz, uintJKCD6E, uintKBoZBIY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressq7CxosN = accounts[4]
		const address13nPTo = accounts[0]
		const addressglcY22 = accounts[2]
		const addressSDTmb4a = "0x0000000000000000000000000000000000000001"
		const uintNGCOd7s = BigInt("262")
		const FairStockEquityNMzceUf = await FairStockEquity.new(addressq7CxosN, address13nPTo, addressglcY22, addressSDTmb4a, uintNGCOd7s, {from: accounts[1]});
		const uintCC9FBoJ = BigInt("1661")
		const uintpiSLNTS = BigInt("1065")
		const addressNm8cMqn = accounts[4]
		const uint4lCDmD = BigInt("409")
		const uintssn9d7t = BigInt("183")
		const uintlevSazV = BigInt("2030")
		const uintumsSZsI = BigInt("1872")
//		const address9YwtGS = await FairStockEquityNMzceUf.withdrawBonusCallback.call(addressNm8cMqn, uintpiSLNTS, uintCC9FBoJ, {from: accounts[0]});
//		const uint256OyYh0ZQ = await FairStockEquityNMzceUf.invest.call(uint4lCDmD, {from: accounts[4]});
//		const uint256J129zj = await FairStockEquityNMzceUf.reduceShare.call(uintssn9d7t, {from: accounts[2]});
//		const uint256ndaF1nk = await FairStockEquityNMzceUf.invest.call(uintlevSazV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256WGWMyUO = await FairStockEquityNMzceUf.setGasFeeForCallback.call(uintumsSZsI, {from: accounts[4]});

		await expect(FairStockEquityNMzceUf.withdrawBonusCallback.call(addressNm8cMqn, uintpiSLNTS, uintCC9FBoJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZfY6tGb = accounts[1]
		const addresspZMzeQ2 = accounts[0]
		const addressIhylaei = accounts[5]
		const addressTBIKf3k = accounts[1]
		const uinto4ym3bu = BigInt("751")
		const FairStockEquityKDfIVc = await FairStockEquity.new(addressZfY6tGb, addresspZMzeQ2, addressIhylaei, addressTBIKf3k, uinto4ym3bu, {from: accounts[0]});
		const uintGntUjf5 = BigInt("498")
		const uintwTUyDJV = BigInt("1878")
//		const uint256FvSQOd4 = await FairStockEquityKDfIVc.setStartTime.call(uintGntUjf5, {from: accounts[0]});
//		const uint256Tzdnyw8 = await FairStockEquityKDfIVc.setProfitPercentMT.call(uintwTUyDJV, {from: accounts[1]});
//		await FairStockEquityKDfIVc.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityKDfIVc.setStartTime.call(uintGntUjf5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBeK5iz8 = accounts[1]
		const addressZ2pF88a = accounts[0]
		const addresssURFLwO = accounts[1]
		const address6vvVGZ = accounts[3]
		const uintxfBSoma = BigInt("866")
		const FairStockEquityz1M4cKF = await FairStockEquity.new(addressBeK5iz8, addressZ2pF88a, addresssURFLwO, address6vvVGZ, uintxfBSoma, {from: accounts[1]});
		const addressG2xN0ur = accounts[1]
		const uintkYs7fe7 = BigInt("719")
		const addressHE4tdv = accounts[3]
		const uintvIYLL2x = BigInt("43")
		const uintcOGsMwx = BigInt("992")
		const addressvgZYA9L = accounts[4]
		const uintdJQn0KR = BigInt("1335")
		const uintbPlHLQi = BigInt("901")
		const uintcguFR4H = BigInt("1874")
		const uintcbwzKWw = BigInt("1639")
		const uintpakLvpv = BigInt("1831")
		const addressWUFyZ1J = accounts[3]
		const addressDOfuVZ7 = await FairStockEquityz1M4cKF.setDataSource.call(addressG2xN0ur, {from: accounts[1]});
//		const addressuNQRQM = await FairStockEquityz1M4cKF.withdrawLPT.call(addressHE4tdv, uintkYs7fe7, {from: accounts[2]});
//		const addresskeDIica = await FairStockEquityz1M4cKF.withdrawMTCallback.call(addressvgZYA9L, uintcOGsMwx, uintvIYLL2x, {from: accounts[0]});
//		const uint256NZA7gzy = await FairStockEquityz1M4cKF.setGasFeeForCallback.call(uintdJQn0KR, {from: accounts[4]});
//		const uint256KVBGiRS = await FairStockEquityz1M4cKF.setProfitPercentPJ.call(uintbPlHLQi, {from: accounts[3]});
//		const uint256E0IZppR = await FairStockEquityz1M4cKF.bonus.call(uintcguFR4H, {from: accounts[1]});
//		const addressxPy6Mrr = await FairStockEquityz1M4cKF.withdrawMTCallback.call(addressWUFyZ1J, uintpakLvpv, uintcbwzKWw, {from: accounts[4]});

		await expect(FairStockEquityz1M4cKF.withdrawLPT.call(addressHE4tdv, uintkYs7fe7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNMJNqWU = accounts[0]
		const addressuKE0JqD = accounts[5]
		const addressxEIjm9g = accounts[3]
		const addressYS6pZjp = accounts[2]
		const uintwnaDmMt = BigInt("971")
		const FairStockEquityofeSQMz = await FairStockEquity.new(addressNMJNqWU, addressuKE0JqD, addressxEIjm9g, addressYS6pZjp, uintwnaDmMt, {from: accounts[0]});
		const uintwvQVffR = BigInt("740")
		const uintXsTU1yB = BigInt("1554")
//		const uint256gj4JZ7F = await FairStockEquityofeSQMz.invest.call(uintwvQVffR, {from: accounts[2]});
//		const uint256XTEeSs = await FairStockEquityofeSQMz.setProfitPercentBonus.call(uintXsTU1yB, {from: accounts[5]});
//		await FairStockEquityofeSQMz.f.call({from: accounts[2]});

		await expect(FairStockEquityofeSQMz.invest.call(uintwvQVffR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressN6h36Rm = accounts[1]
		const addressuZTtBSa = accounts[0]
		const addressa6s8Xpg = accounts[1]
		const addressmpJZd5E = accounts[3]
		const uintW20iwhj = BigInt("866")
		const FairStockEquityz1M4cKF = await FairStockEquity.new(addressN6h36Rm, addressuZTtBSa, addressa6s8Xpg, addressmpJZd5E, uintW20iwhj, {from: accounts[1]});
		const addressjRjdw4I = accounts[1]
		const uintAhJfUu = BigInt("1607")
		const uintmuV6YoU = BigInt("1335")
		const uintaSttoi = BigInt("1874")
		const uintOEl8v6C = BigInt("1639")
		const uintze09Ihu = BigInt("1831")
		const addressxPOV83Y = accounts[3]
		const addressDOfuVZ7 = await FairStockEquityz1M4cKF.setDataSource.call(addressjRjdw4I, {from: accounts[1]});
//		const uint256n1AQgT8 = await FairStockEquityz1M4cKF.setProfitPercentMT.call(uintAhJfUu, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256NZA7gzy = await FairStockEquityz1M4cKF.setGasFeeForCallback.call(uintmuV6YoU, {from: accounts[4]});
//		const uint256E0IZppR = await FairStockEquityz1M4cKF.bonus.call(uintaSttoi, {from: accounts[1]});
//		const addressxPy6Mrr = await FairStockEquityz1M4cKF.withdrawMTCallback.call(addressxPOV83Y, uintze09Ihu, uintOEl8v6C, {from: accounts[4]});

		await expect(FairStockEquityz1M4cKF.setProfitPercentMT.call(uintAhJfUu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshIco5K = accounts[1]
		const addressKPsjVsm = accounts[0]
		const addresszIfkWib = accounts[5]
		const address5TkefT = accounts[1]
		const uintYc2mJOM = BigInt("751")
		const FairStockEquityKDfIVc = await FairStockEquity.new(addresshIco5K, addressKPsjVsm, addresszIfkWib, address5TkefT, uintYc2mJOM, {from: accounts[0]});
		const uintL6WYiHV = BigInt("553")
//		await FairStockEquityKDfIVc.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint25666DOlp = await FairStockEquityKDfIVc.setStartTime.call(uintL6WYiHV, {from: accounts[0]});
//		await FairStockEquityKDfIVc.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityKDfIVc.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressS1l5oLu = accounts[1]
		const addressv1pMqwf = accounts[0]
		const addresshCmXzFX = accounts[5]
		const addressoALtRoK = accounts[1]
		const uintE4FpBS0 = BigInt("751")
		const FairStockEquityKDfIVc = await FairStockEquity.new(addressS1l5oLu, addressv1pMqwf, addresshCmXzFX, addressoALtRoK, uintE4FpBS0, {from: accounts[0]});
		const uintiTLwCrd = BigInt("1890")
		const uintwe9TDp4 = BigInt("545")
//		const uint256VTuEoPT = await FairStockEquityKDfIVc.bonus.call(uintiTLwCrd, {from: accounts[1]});
//		const uint256O4vJbQh = await FairStockEquityKDfIVc.reduceShare.call(uintwe9TDp4, {from: accounts[1]});
//		await FairStockEquityKDfIVc.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityKDfIVc.bonus.call(uintiTLwCrd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshrvRk6j = accounts[3]
		const addresstTlBts9 = accounts[5]
		const addressFaaujBC = accounts[5]
		const addressxwgWxIe = accounts[1]
		const uinthgkJDKa = BigInt("886")
		const FairStockEquitysCYhbBa = await FairStockEquity.new(addresshrvRk6j, addresstTlBts9, addressFaaujBC, addressxwgWxIe, uinthgkJDKa, {from: accounts[4]});
		const uintxdUUf6m = BigInt("360")
		const uintsLfILfO = BigInt("1363")
		const uintcUKvCA8 = BigInt("780")
		const uintK1e8omB = BigInt("449")
		const addressYxGWCXX = "0x0000000000000000000000000000000000000001"
		const uintiHcEnSJ = BigInt("797")
		const uintiRBETIt = BigInt("1292")
		const addressKou0GWl = accounts[0]
		const uintrcIUut7 = BigInt("1078")
		const uintVjJvmjd = BigInt("729")
		const addressMOKUXf1 = accounts[4]
//		const uint256q4umj08 = await FairStockEquitysCYhbBa.reduceShare.call(uintxdUUf6m, {from: accounts[3]});
//		const uint256JbFS5HU = await FairStockEquitysCYhbBa.invest.call(uintsLfILfO, {from: accounts[0]});
//		const addressSWj555J = await FairStockEquitysCYhbBa.withdrawMTCallback.call(addressYxGWCXX, uintK1e8omB, uintcUKvCA8, {from: accounts[3]});
//		const addressTwWDy0V = await FairStockEquitysCYhbBa.withdrawBonusCallback.call(addressKou0GWl, uintiRBETIt, uintiHcEnSJ, {from: accounts[3]});
//		const addressFo3NBXP = await FairStockEquitysCYhbBa.withdrawBonusCallback.call(addressMOKUXf1, uintVjJvmjd, uintrcIUut7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitysCYhbBa.reduceShare.call(uintxdUUf6m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressQBWWhnb = accounts[0]
		const addressEUYFUHK = accounts[5]
		const addresshd3tQa1 = accounts[3]
		const address7eXDTP = accounts[2]
		const uintpn3WAr0 = BigInt("971")
		const FairStockEquityofeSQMz = await FairStockEquity.new(addressQBWWhnb, addressEUYFUHK, addresshd3tQa1, address7eXDTP, uintpn3WAr0, {from: accounts[0]});
		const uinta8mYMzs = BigInt("1033")
		const uint256SoVNocV = await FairStockEquityofeSQMz.getCostAmount.call(uinta8mYMzs, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityofeSQMz.f.call({from: accounts[2]});

		await expect(FairStockEquityofeSQMz.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHqkqgA9 = accounts[1]
		const addressMnwTl8A = accounts[0]
		const addressLsORjk6 = accounts[5]
		const addressTUChswx = accounts[1]
		const uintBNyM5lc = BigInt("751")
		const FairStockEquityKDfIVc = await FairStockEquity.new(addressHqkqgA9, addressMnwTl8A, addressLsORjk6, addressTUChswx, uintBNyM5lc, {from: accounts[0]});
		const uintxeygpFh = BigInt("1424")
		const uintYR3Rvw = BigInt("522")
		const uintA4ZY0vz = BigInt("1783")
		const uintnKXFQEg = BigInt("1976")
		const addressSNIcV5x = accounts[4]
		const uintecAQFXy = BigInt("227")
		const uintffk3mJp = BigInt("1118")
		const addressGwTbm0 = accounts[1]
//		const addressiy6gGKK = await FairStockEquityKDfIVc.business.call(addressSNIcV5x, uintnKXFQEg, uintA4ZY0vz, uintYR3Rvw, uintxeygpFh, {from: accounts[1]});
//		const addresszsYDdEA = await FairStockEquityKDfIVc.setModule.call(addressGwTbm0, uintffk3mJp, uintecAQFXy, {from: accounts[3]});
//		await FairStockEquityKDfIVc.withdrawMT.call({from: accounts[0]});
//		await FairStockEquityKDfIVc.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityKDfIVc.business.call(addressSNIcV5x, uintnKXFQEg, uintA4ZY0vz, uintYR3Rvw, uintxeygpFh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressoPjBOoU = accounts[1]
		const addressQPPCR43 = accounts[0]
		const addressdNPVqQN = accounts[1]
		const addressl6PaXe8 = accounts[3]
		const uintzOQ9VDy = BigInt("866")
		const FairStockEquityz1M4cKF = await FairStockEquity.new(addressoPjBOoU, addressQPPCR43, addressdNPVqQN, addressl6PaXe8, uintzOQ9VDy, {from: accounts[1]});
		const boolhNbZhNC = true
		const addressoi9NZyk = accounts[5]
		const uintmCWfnY4 = BigInt("1385")
		const addressVkYaGjP = accounts[0]
		const addresskan7W3F = await FairStockEquityz1M4cKF.setLPT.call(addressoi9NZyk, boolhNbZhNC, {from: accounts[1]});
//		const addressD1GQ0mq = await FairStockEquityz1M4cKF.depositLPT.call(addressVkYaGjP, uintmCWfnY4, {from: accounts[3]});

		await expect(FairStockEquityz1M4cKF.depositLPT.call(addressVkYaGjP, uintmCWfnY4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressICe5q6y = accounts[1]
		const addressV4y5X3b = accounts[0]
		const addresshj5KjK = accounts[5]
		const addressIx7qqW = accounts[1]
		const uintUOXR4o9 = BigInt("751")
		const FairStockEquityKDfIVc = await FairStockEquity.new(addressICe5q6y, addressV4y5X3b, addresshj5KjK, addressIx7qqW, uintUOXR4o9, {from: accounts[0]});
		const uinteQR1pj = BigInt("1595")
		const uintS1IxCgN = BigInt("933")
		const addressL0S0V9 = accounts[3]
		const uintY9K1pTd = BigInt("1676")
//		const addressTiAMgID = await FairStockEquityKDfIVc.withdrawMTCallback.call(addressL0S0V9, uintS1IxCgN, uinteQR1pj, {from: accounts[1]});
//		await FairStockEquityKDfIVc.onlyDataSource.call({from: accounts[3]});
//		const uint256lVAcENF = await FairStockEquityKDfIVc.setStartTime.call(uintY9K1pTd, {from: accounts[3]});

		await expect(FairStockEquityKDfIVc.withdrawMTCallback.call(addressL0S0V9, uintS1IxCgN, uinteQR1pj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdSYqqc = accounts[1]
		const addressejBFXfb = accounts[0]
		const address2hnHN7 = accounts[5]
		const addresssfqJ14 = accounts[1]
		const uintsKWl9Rv = BigInt("751")
		const FairStockEquityKDfIVc = await FairStockEquity.new(addressdSYqqc, addressejBFXfb, address2hnHN7, addresssfqJ14, uintsKWl9Rv, {from: accounts[0]});
		const uintL0rXba = BigInt("2007")
		const uintWTKDZOl = BigInt("1914")
		const uint25673YhlN = await FairStockEquityKDfIVc.setStartTime.call(uintL0rXba, {from: accounts[0]});
		const uint256GBw7RW = await FairStockEquityKDfIVc.getCostAmount.call(uintWTKDZOl, {from: accounts[4]});
//		await FairStockEquityKDfIVc.withdrawPJ.call({from: accounts[0]});
//		await FairStockEquityKDfIVc.onlyDataSource.call({from: accounts[3]});

		await expect(FairStockEquityKDfIVc.withdrawPJ.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnVajn8H = accounts[1]
		const addressf7ACMn = accounts[5]
		const addressjLuCcO4 = accounts[4]
		const addressAy07u0 = accounts[3]
		const uintZgKyLB9 = BigInt("1771")
		const FairStockEquityDleywvO = await FairStockEquity.new(addressnVajn8H, addressf7ACMn, addressjLuCcO4, addressAy07u0, uintZgKyLB9, {from: accounts[3]});
		const uintjZPss4R = BigInt("1350")
		const uintSeXFLM9 = BigInt("1718")
		const addressRPt7Ea6 = accounts[3]
		const uintx0NOQg1 = BigInt("492")
		const addressSTlyvRn = await FairStockEquityDleywvO.setModule.call(addressRPt7Ea6, uintSeXFLM9, uintjZPss4R, {from: accounts[3]});
//		const uint2564vFFv6 = await FairStockEquityDleywvO.bonus.call(uintx0NOQg1, {from: accounts[1]});
//		await FairStockEquityDleywvO.withdrawBonus.call({from: accounts[1]});
//		await FairStockEquityDleywvO.withdrawMT.call({from: accounts[4]});
//		await FairStockEquityDleywvO.withdrawBonus.call({from: accounts[4]});

		await expect(FairStockEquityDleywvO.bonus.call(uintx0NOQg1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})