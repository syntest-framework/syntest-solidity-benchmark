const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressBPa47H2 = accounts[1]
		const addressER2SuEW = accounts[0]
		const addressDnipL2I = accounts[3]
		const addressJsOXuiL = accounts[3]
		const uintnLFqnFj = BigInt("2006")
		const FairStockEquityMkBJ5i6 = await FairStockEquity.new(addressBPa47H2, addressER2SuEW, addressDnipL2I, addressJsOXuiL, uintnLFqnFj, {from: accounts[2]});
//		await FairStockEquityMkBJ5i6.onlyDataSource.call({from: accounts[5]});
//		await FairStockEquityMkBJ5i6.withdrawBonus.call({from: accounts[1]});
//		await FairStockEquityMkBJ5i6.f.call({from: accounts[5]});

		await expect(FairStockEquityMkBJ5i6.onlyDataSource.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshjX3dT8 = accounts[4]
		const addressnWg0j76 = accounts[2]
		const addressR6stBO = accounts[1]
		const addressdY74wNu = accounts[1]
		const uintdqvbXDD = BigInt("328")
		const FairStockEquityMlRRwp = await FairStockEquity.new(addresshjX3dT8, addressnWg0j76, addressR6stBO, addressdY74wNu, uintdqvbXDD, {from: accounts[0]});
		const addressWAR1enE = accounts[2]
		const boolzekiv4b = false
		const addresswNBniJc = accounts[0]
		const uintU2MH0K = BigInt("1417")
		const uintsF2ilYY = BigInt("779")
		const uintbXxPfQL = BigInt("53")
//		const addressC3OrQgP = await FairStockEquityMlRRwp.setDataSource.call(addressWAR1enE, {from: accounts[4]});
//		const addresspfDQder = await FairStockEquityMlRRwp.setLPT.call(addresswNBniJc, boolzekiv4b, {from: accounts[1]});
//		const uint256ZbhEZrQ = await FairStockEquityMlRRwp.setStartTime.call(uintU2MH0K, {from: accounts[0]});
//		await FairStockEquityMlRRwp.checkStart.call({from: accounts[1]});
//		const uint256jA7HST = await FairStockEquityMlRRwp.setStartTime.call(uintsF2ilYY, {from: accounts[3]});
//		const uint256Ab9wnjd = await FairStockEquityMlRRwp.setProfitPercentMT.call(uintbXxPfQL, {from: accounts[5]});

		await expect(FairStockEquityMlRRwp.setDataSource.call(addressWAR1enE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresskknwfe = accounts[0]
		const addressIZCT798 = accounts[4]
		const addressdu5jKqL = accounts[2]
		const addressemNmMY2 = "0x0000000000000000000000000000000000000001"
		const uintA5ph02A = BigInt("431")
		const FairStockEquityyXnfED3 = await FairStockEquity.new(addresskknwfe, addressIZCT798, addressdu5jKqL, addressemNmMY2, uintA5ph02A, {from: "0x0000000000000000000000000000000000000001"});
		const uintBc7eher = BigInt("1631")
		const uintr7F5j5h = BigInt("176")
		const addressPAoitoR = accounts[1]
		const uintYD2Tz0m = BigInt("1382")
		await FairStockEquityyXnfED3.withdrawPJ.call({from: accounts[3]});
		await FairStockEquityyXnfED3.withdrawPJ.call({from: accounts[2]});
		const addressMKtADe3 = await FairStockEquityyXnfED3.withdrawMTCallback.call(addressPAoitoR, uintr7F5j5h, uintBc7eher, {from: accounts[0]});
		const uint256eVI4LEI = await FairStockEquityyXnfED3.getCostAmount.call(uintYD2Tz0m, {from: accounts[1]});
	});

	it('test for FairStockEquity', async () => {
		const addressyFFz63T = accounts[4]
		const addressLilpm35 = accounts[2]
		const addresswcZdKQU = accounts[1]
		const addressLzGnpqj = accounts[4]
		const uintoyE9kl9 = BigInt("1250")
		const FairStockEquitynkHQMx6 = await FairStockEquity.new(addressyFFz63T, addressLilpm35, addresswcZdKQU, addressLzGnpqj, uintoyE9kl9, {from: accounts[4]});
		const uintAnTG3GF = BigInt("1242")
		const addressZ8dYUgx = accounts[0]
		const uintlWECnHx = BigInt("865")
		const addressc32bZLw = accounts[4]
		const uintvF14ZIB = BigInt("601")
		const addressC7ZIRmO = "0x0000000000000000000000000000000000000001"
		const uintB2g9k0 = BigInt("503")
		const uintKbWx6HK = BigInt("1530")
		const address69LVlD = accounts[0]
//		const addressfOUiEXv = await FairStockEquitynkHQMx6.depositLPT.call(addressZ8dYUgx, uintAnTG3GF, {from: accounts[2]});
//		const addressY6a2DHd = await FairStockEquitynkHQMx6.depositLPT.call(addressc32bZLw, uintlWECnHx, {from: accounts[4]});
//		const addressPXS3Ztf = await FairStockEquitynkHQMx6.depositLPT.call(addressC7ZIRmO, uintvF14ZIB, {from: accounts[4]});
//		const addressY7ZxOYr = await FairStockEquitynkHQMx6.setModule.call(address69LVlD, uintKbWx6HK, uintB2g9k0, {from: accounts[0]});
//		await FairStockEquitynkHQMx6.checkStart.call({from: accounts[2]});

		await expect(FairStockEquitynkHQMx6.depositLPT.call(addressZ8dYUgx, uintAnTG3GF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspySZ8gi = accounts[0]
		const addressqV7DqBG = accounts[3]
		const addressTWraEzL = "0x0000000000000000000000000000000000000001"
		const addressHHMN3J = accounts[5]
		const uintcQECzB = BigInt("1187")
		const FairStockEquityoXZp0o0 = await FairStockEquity.new(addresspySZ8gi, addressqV7DqBG, addressTWraEzL, addressHHMN3J, uintcQECzB, {from: accounts[1]});
		const uintXRV7eGQ = BigInt("483")
		const uintWFmXrFw = BigInt("858")
		const uintLHURg7W = BigInt("1284")
		const uintvy6dIsV = BigInt("38")
		const uintXR3BItm = BigInt("1883")
		const uintnhiuDId = BigInt("724")
		const addressqjx4ajW = accounts[4]
		const uint256JY8mX9L = await FairStockEquityoXZp0o0.getCostAmount.call(uintXRV7eGQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256itXnHTt = await FairStockEquityoXZp0o0.setStartTime.call(uintWFmXrFw, {from: accounts[3]});
//		const uint256IkZxgmE = await FairStockEquityoXZp0o0.setProfitPercentBonus.call(uintLHURg7W, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wlEuSs5 = await FairStockEquityoXZp0o0.reduceShare.call(uintvy6dIsV, {from: accounts[4]});
//		const addressEx74X3W = await FairStockEquityoXZp0o0.setModule.call(addressqjx4ajW, uintnhiuDId, uintXR3BItm, {from: accounts[1]});

		await expect(FairStockEquityoXZp0o0.setStartTime.call(uintWFmXrFw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressSlqVsP9 = accounts[3]
		const addressnOjmoN3 = accounts[3]
		const addressFTWXXz = accounts[3]
		const addressycwa6B4 = accounts[3]
		const uints5y5cji = BigInt("1497")
		const FairStockEquityFIeyO1q = await FairStockEquity.new(addressSlqVsP9, addressnOjmoN3, addressFTWXXz, addressycwa6B4, uints5y5cji, {from: accounts[2]});
		const uintPxxlvbu = BigInt("1531")
		const uintoyEXnbg = BigInt("1593")
//		const uint256hH0nyyp = await FairStockEquityFIeyO1q.setProfitPercentMT.call(uintPxxlvbu, {from: accounts[3]});
//		const uint256IjkG1ze = await FairStockEquityFIeyO1q.setProfitPercentBonus.call(uintoyEXnbg, {from: accounts[2]});
//		await FairStockEquityFIeyO1q.onlyDataSource.call({from: accounts[2]});

		await expect(FairStockEquityFIeyO1q.setProfitPercentMT.call(uintPxxlvbu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressijhZmdz = accounts[4]
		const addressdjKm6ID = accounts[2]
		const addressTCsok1U = accounts[1]
		const addressfnxbf0L = accounts[1]
		const uintTmgZysY = BigInt("328")
		const FairStockEquityMlRRwp = await FairStockEquity.new(addressijhZmdz, addressdjKm6ID, addressTCsok1U, addressfnxbf0L, uintTmgZysY, {from: accounts[0]});
		const uinthNwz56 = BigInt("1832")
		const address9xrfXZ = accounts[2]
		const boolzekiv4b = false
		const addressuXjcAa = accounts[0]
		const uintqVzi4z6 = BigInt("1417")
		const uintrZdJ1gu = BigInt("1072")
		const uintmyaP2Uw = BigInt("53")
//		const uint256SExlwCa = await FairStockEquityMlRRwp.depositBonus.call(uinthNwz56, {from: accounts[1]});
//		const addressC3OrQgP = await FairStockEquityMlRRwp.setDataSource.call(address9xrfXZ, {from: accounts[4]});
//		const addresspfDQder = await FairStockEquityMlRRwp.setLPT.call(addressuXjcAa, boolzekiv4b, {from: accounts[1]});
//		const uint256ZbhEZrQ = await FairStockEquityMlRRwp.setStartTime.call(uintqVzi4z6, {from: accounts[0]});
//		await FairStockEquityMlRRwp.checkStart.call({from: accounts[1]});
//		const uint256jA7HST = await FairStockEquityMlRRwp.setStartTime.call(uintrZdJ1gu, {from: accounts[3]});
//		const uint256Ab9wnjd = await FairStockEquityMlRRwp.setProfitPercentMT.call(uintmyaP2Uw, {from: accounts[5]});

		await expect(FairStockEquityMlRRwp.depositBonus.call(uinthNwz56, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressY3gViQ2 = accounts[0]
		const addressnXTB0S9 = accounts[3]
		const addressxa0nCp = accounts[0]
		const addressLlnoq61 = accounts[0]
		const uintuM2tm5 = BigInt("692")
		const FairStockEquityohGotw = await FairStockEquity.new(addressY3gViQ2, addressnXTB0S9, addressxa0nCp, addressLlnoq61, uintuM2tm5, {from: accounts[4]});
		const uintl9rZizF = BigInt("1995")
		const uintZ4x7x1y = BigInt("918")
		const uintNxZs2iu = BigInt("1670")
//		const uint256kMNghjC = await FairStockEquityohGotw.invest.call(uintl9rZizF, {from: accounts[3]});
//		const uint256Mckc2eo = await FairStockEquityohGotw.setStartTime.call(uintZ4x7x1y, {from: accounts[2]});
//		const uint256QfNn1u3 = await FairStockEquityohGotw.setStartTime.call(uintNxZs2iu, {from: accounts[0]});

		await expect(FairStockEquityohGotw.invest.call(uintl9rZizF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTOAZXo = accounts[2]
		const addressn5Lg43L = "0x0000000000000000000000000000000000000001"
		const addressiJ24hzB = accounts[1]
		const address26rka8 = accounts[3]
		const uintzUb4vw = BigInt("1326")
		const FairStockEquity1Ddq4i = await FairStockEquity.new(addressTOAZXo, addressn5Lg43L, addressiJ24hzB, address26rka8, uintzUb4vw, {from: accounts[4]});
		const addressziPIBop = accounts[0]
		const uintQiemSzH = BigInt("1697")
		const uintqpzDkZ = BigInt("715")
		const boolGSBGMHl = false
		const addressxqYbmC6 = accounts[3]
		const boolaLY4QA4 = true
		const addresspJozR2L = accounts[4]
		const uintinCDgwl = BigInt("1988")
		const addressHLbWu8N = await FairStockEquity1Ddq4i.setDataSource.call(addressziPIBop, {from: accounts[4]});
//		const uint256arBiXJC = await FairStockEquity1Ddq4i.reduceShare.call(uintQiemSzH, {from: accounts[0]});
//		const uint256hOuPEg = await FairStockEquity1Ddq4i.setStartTime.call(uintqpzDkZ, {from: accounts[5]});
//		const addressk7H3IBt = await FairStockEquity1Ddq4i.setLPT.call(addressxqYbmC6, boolGSBGMHl, {from: accounts[1]});
//		const addresshxRhIrb = await FairStockEquity1Ddq4i.setLPT.call(addresspJozR2L, boolaLY4QA4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256uoHK6Tx = await FairStockEquity1Ddq4i.depositBonus.call(uintinCDgwl, {from: accounts[3]});

		await expect(FairStockEquity1Ddq4i.reduceShare.call(uintQiemSzH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjMa2Uuc = accounts[0]
		const addressksdlPlk = accounts[3]
		const addressDUrURYq = "0x0000000000000000000000000000000000000001"
		const addressOws8hnw = accounts[5]
		const uintVZUZc27 = BigInt("1187")
		const FairStockEquityoXZp0o0 = await FairStockEquity.new(addressjMa2Uuc, addressksdlPlk, addressDUrURYq, addressOws8hnw, uintVZUZc27, {from: accounts[1]});
		const uintUhuC6rM = BigInt("483")
		const uintLnRuGeB = BigInt("1648")
		const uintN3nV77r = BigInt("858")
		const uintAUTzy6q = BigInt("1299")
		const uintE2VEHuv = BigInt("38")
		const uintbtDbKAr = BigInt("1883")
		const uintO1deSbn = BigInt("724")
		const addressTdxYQ3x = accounts[4]
		const uint256JY8mX9L = await FairStockEquityoXZp0o0.getCostAmount.call(uintUhuC6rM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rluNDb = await FairStockEquityoXZp0o0.bonus.call(uintLnRuGeB, {from: accounts[0]});
//		const uint256itXnHTt = await FairStockEquityoXZp0o0.setStartTime.call(uintN3nV77r, {from: accounts[3]});
//		const uint256IkZxgmE = await FairStockEquityoXZp0o0.setProfitPercentBonus.call(uintAUTzy6q, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wlEuSs5 = await FairStockEquityoXZp0o0.reduceShare.call(uintE2VEHuv, {from: accounts[4]});
//		const addressEx74X3W = await FairStockEquityoXZp0o0.setModule.call(addressTdxYQ3x, uintO1deSbn, uintbtDbKAr, {from: accounts[1]});

		await expect(FairStockEquityoXZp0o0.bonus.call(uintLnRuGeB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressccnTRrw = accounts[1]
		const addressHY1bYzB = accounts[3]
		const addressdEnRZ4c = accounts[0]
		const addressBPauz4 = accounts[2]
		const uintb62aI1h = BigInt("1182")
		const FairStockEquitySAoQK4G = await FairStockEquity.new(addressccnTRrw, addressHY1bYzB, addressdEnRZ4c, addressBPauz4, uintb62aI1h, {from: accounts[0]});
		const uintquFJUcd = BigInt("1826")
		const addressgp7ZdwD = accounts[1]
		const uintbfpHeXs = BigInt("211")
//		const addressS98DjQX = await FairStockEquitySAoQK4G.withdrawLPT.call(addressgp7ZdwD, uintquFJUcd, {from: accounts[0]});
//		const uint256L9KPIPf = await FairStockEquitySAoQK4G.setGasFeeForCallback.call(uintbfpHeXs, {from: accounts[5]});

		await expect(FairStockEquitySAoQK4G.withdrawLPT.call(addressgp7ZdwD, uintquFJUcd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressCek5WN = accounts[0]
		const addressnJXVsX = accounts[3]
		const addressYCwgm5V = "0x0000000000000000000000000000000000000001"
		const addressPqAQhdj = accounts[5]
		const uintudYLCuN = BigInt("1187")
		const FairStockEquityoXZp0o0 = await FairStockEquity.new(addressCek5WN, addressnJXVsX, addressYCwgm5V, addressPqAQhdj, uintudYLCuN, {from: accounts[1]});
		const uintcPIfN6J = BigInt("483")
		const uintOgSQ96 = BigInt("843")
		const uintofh4ck4 = BigInt("1284")
		const uintFd0L0M7 = BigInt("38")
		const uintomiH8ek = BigInt("1883")
		const uintgXLsCM9 = BigInt("724")
		const addressOvMa1Pt = accounts[0]
		const uint256JY8mX9L = await FairStockEquityoXZp0o0.getCostAmount.call(uintcPIfN6J, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityoXZp0o0.withdrawMT.call({from: accounts[5]});
//		const uint256itXnHTt = await FairStockEquityoXZp0o0.setStartTime.call(uintOgSQ96, {from: accounts[3]});
//		const uint256IkZxgmE = await FairStockEquityoXZp0o0.setProfitPercentBonus.call(uintofh4ck4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wlEuSs5 = await FairStockEquityoXZp0o0.reduceShare.call(uintFd0L0M7, {from: accounts[4]});
//		const addressEx74X3W = await FairStockEquityoXZp0o0.setModule.call(addressOvMa1Pt, uintgXLsCM9, uintomiH8ek, {from: accounts[1]});

		await expect(FairStockEquityoXZp0o0.withdrawMT.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressIUHUjG = accounts[0]
		const addressTUpCMA = accounts[3]
		const addresswpYrgka = "0x0000000000000000000000000000000000000001"
		const addressdKCcKWG = accounts[5]
		const uints86Upnq = BigInt("1187")
		const FairStockEquityoXZp0o0 = await FairStockEquity.new(addressIUHUjG, addressTUpCMA, addresswpYrgka, addressdKCcKWG, uints86Upnq, {from: accounts[1]});
		const uintntllkbG = BigInt("483")
		const uintwRLENrP = BigInt("1743")
		const uintruViOb7 = BigInt("1682")
		const uintP3XRIGd = BigInt("1392")
		const uintyHkOfp0 = BigInt("1038")
		const addressKC0oEPW = accounts[2]
		const uint4Q6q6o = BigInt("858")
		const uintPEdzoN = BigInt("38")
		const uintlTaDvhm = BigInt("1883")
		const uintCuJqYAH = BigInt("724")
		const addressibF9hS7 = accounts[3]
		const uint256JY8mX9L = await FairStockEquityoXZp0o0.getCostAmount.call(uintntllkbG, {from: "0x0000000000000000000000000000000000000001"});
//		const addressqJC4N1h = await FairStockEquityoXZp0o0.business.call(addressKC0oEPW, uintyHkOfp0, uintP3XRIGd, uintruViOb7, uintwRLENrP, {from: accounts[5]});
//		const uint256itXnHTt = await FairStockEquityoXZp0o0.setStartTime.call(uint4Q6q6o, {from: accounts[3]});
//		const uint256wlEuSs5 = await FairStockEquityoXZp0o0.reduceShare.call(uintPEdzoN, {from: accounts[4]});
//		const addressEx74X3W = await FairStockEquityoXZp0o0.setModule.call(addressibF9hS7, uintCuJqYAH, uintlTaDvhm, {from: accounts[1]});

		await expect(FairStockEquityoXZp0o0.business.call(addressKC0oEPW, uintyHkOfp0, uintP3XRIGd, uintruViOb7, uintwRLENrP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPYbGJz5 = accounts[0]
		const addressUOI5rP9 = accounts[3]
		const addresswzPLLX4 = "0x0000000000000000000000000000000000000001"
		const addressjdDEFcW = accounts[5]
		const uintXqZNcQd = BigInt("1187")
		const FairStockEquityoXZp0o0 = await FairStockEquity.new(addressPYbGJz5, addressUOI5rP9, addresswzPLLX4, addressjdDEFcW, uintXqZNcQd, {from: accounts[1]});
		const uintGE72uMM = BigInt("503")
		const uinte0DKayY = BigInt("858")
		const uintXVr86b6 = BigInt("1284")
		const uintZ19yU7I = BigInt("38")
		const uint256JY8mX9L = await FairStockEquityoXZp0o0.getCostAmount.call(uintGE72uMM, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityoXZp0o0.withdrawBonus.call({from: accounts[4]});
//		const uint256itXnHTt = await FairStockEquityoXZp0o0.setStartTime.call(uinte0DKayY, {from: accounts[3]});
//		const uint256IkZxgmE = await FairStockEquityoXZp0o0.setProfitPercentBonus.call(uintXVr86b6, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wlEuSs5 = await FairStockEquityoXZp0o0.reduceShare.call(uintZ19yU7I, {from: accounts[4]});

		await expect(FairStockEquityoXZp0o0.withdrawBonus.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNjgaC0Q = accounts[1]
		const addresszJfzCsv = accounts[3]
		const addressA3G03JU = accounts[0]
		const addressM4PiH3f = accounts[2]
		const uintKr131d = BigInt("1182")
		const FairStockEquitySAoQK4G = await FairStockEquity.new(addressNjgaC0Q, addresszJfzCsv, addressA3G03JU, addressM4PiH3f, uintKr131d, {from: accounts[0]});
		const uintMTt87o3 = BigInt("220")
//		await FairStockEquitySAoQK4G.f.call({from: accounts[2]});
//		const uint256L9KPIPf = await FairStockEquitySAoQK4G.setGasFeeForCallback.call(uintMTt87o3, {from: accounts[5]});

		await expect(FairStockEquitySAoQK4G.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressI0yY5XM = accounts[1]
		const addressKtmm3nh = accounts[3]
		const addresslrCVp2a = accounts[0]
		const addressZyD2xS5 = accounts[2]
		const uintVADy9HI = BigInt("1182")
		const FairStockEquitySAoQK4G = await FairStockEquity.new(addressI0yY5XM, addressKtmm3nh, addresslrCVp2a, addressZyD2xS5, uintVADy9HI, {from: accounts[0]});
		const boolh7c7fFU = false
		const addressAT5IvOv = accounts[2]
		const uintKa4yqv9 = BigInt("220")
		const addressZrJSZI = await FairStockEquitySAoQK4G.setLPT.call(addressAT5IvOv, boolh7c7fFU, {from: accounts[0]});
//		const uint256L9KPIPf = await FairStockEquitySAoQK4G.setGasFeeForCallback.call(uintKa4yqv9, {from: accounts[5]});

		await expect(FairStockEquitySAoQK4G.setGasFeeForCallback.call(uintKa4yqv9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressWRyE7Do = accounts[0]
		const addressZW0SCG = accounts[3]
		const addressO26ikye = "0x0000000000000000000000000000000000000001"
		const addressPqTPnSN = accounts[5]
		const uintBH18BQL = BigInt("1187")
		const FairStockEquityoXZp0o0 = await FairStockEquity.new(addressWRyE7Do, addressZW0SCG, addressO26ikye, addressPqTPnSN, uintBH18BQL, {from: accounts[1]});
		const uintDhbg2up = BigInt("483")
		const uintmi1avg = BigInt("773")
		const uintBbQSzA6 = BigInt("1743")
		const uintBfEmNmO = BigInt("1682")
		const uintNMiKyqT = BigInt("1392")
		const uintHUXYOo7 = BigInt("1038")
		const addressIbemFtF = accounts[3]
		const uintRGbvlAI = BigInt("1841")
		const uintfyU2xE7 = BigInt("730")
		const addressDd4zXVW = accounts[3]
		const uinthqJ5XM1 = BigInt("485")
		const uintlLm11RB = BigInt("629")
		const addressYluSpVC = accounts[4]
		const uintXLUbim = BigInt("1654")
		const uintUxLQfuB = BigInt("1300")
		const addressUHeT35T = "0x0000000000000000000000000000000000000001"
		const uint256JY8mX9L = await FairStockEquityoXZp0o0.getCostAmount.call(uintDhbg2up, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256yJPTo9z = await FairStockEquityoXZp0o0.bonus.call(uintmi1avg, {from: accounts[5]});
//		await FairStockEquityoXZp0o0.withdrawMT.call({from: accounts[4]});
//		const addressqJC4N1h = await FairStockEquityoXZp0o0.business.call(addressIbemFtF, uintHUXYOo7, uintNMiKyqT, uintBfEmNmO, uintBbQSzA6, {from: accounts[5]});
//		await FairStockEquityoXZp0o0.checkStart.call({from: accounts[1]});
//		const addressEx74X3W = await FairStockEquityoXZp0o0.setModule.call(addressDd4zXVW, uintfyU2xE7, uintRGbvlAI, {from: accounts[1]});
//		const addressmdoG2Xw = await FairStockEquityoXZp0o0.withdrawMTCallback.call(addressYluSpVC, uintlLm11RB, uinthqJ5XM1, {from: accounts[4]});
//		const addressLgePSXN = await FairStockEquityoXZp0o0.withdrawMTCallback.call(addressUHeT35T, uintUxLQfuB, uintXLUbim, {from: accounts[4]});

		await expect(FairStockEquityoXZp0o0.bonus.call(uintmi1avg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressd7fIlhF = accounts[0]
		const addressSstRz9D = accounts[3]
		const addressQIDin9O = "0x0000000000000000000000000000000000000001"
		const addressJhnY9YS = accounts[5]
		const uintzsPsRxx = BigInt("1187")
		const FairStockEquityoXZp0o0 = await FairStockEquity.new(addressd7fIlhF, addressSstRz9D, addressQIDin9O, addressJhnY9YS, uintzsPsRxx, {from: accounts[1]});
		const uintdox65Mw = BigInt("483")
		const uintqNXT2pu = BigInt("1883")
		const uintOl92Y7 = BigInt("712")
		const addressHz2BUlG = accounts[3]
		const uint256JY8mX9L = await FairStockEquityoXZp0o0.getCostAmount.call(uintdox65Mw, {from: "0x0000000000000000000000000000000000000001"});
		const addressEx74X3W = await FairStockEquityoXZp0o0.setModule.call(addressHz2BUlG, uintOl92Y7, uintqNXT2pu, {from: accounts[1]});
	});

	it('test for FairStockEquity', async () => {
		const addressTCLPEOW = accounts[0]
		const addressn1OWej = accounts[3]
		const address13hFfJ = "0x0000000000000000000000000000000000000001"
		const addressrvgkTK7 = accounts[5]
		const uintwsTxgxx = BigInt("1187")
		const FairStockEquityoXZp0o0 = await FairStockEquity.new(addressTCLPEOW, addressn1OWej, address13hFfJ, addressrvgkTK7, uintwsTxgxx, {from: accounts[1]});
		const uintY6wLlgU = BigInt("483")
		const uintwiTfrcX = BigInt("1743")
		const uintnPFz3ii = BigInt("1682")
		const uintCuoDfSw = BigInt("1392")
		const uintVZLE79d = BigInt("1038")
		const addressvVGijaP = accounts[2]
		const uint3xCmsX = BigInt("858")
		const uintymkpYTv = BigInt("91")
		const uintxpfvW19 = BigInt("914")
		const uintJTA5iiY = BigInt("723")
		const uintye0o9yD = BigInt("719")
		const addressMsZ8dd6 = accounts[0]
		const uintIXixbq = BigInt("1883")
		const uinti6HBGo1 = BigInt("724")
		const addressQfoBx2q = accounts[0]
//		await FairStockEquityoXZp0o0.withdrawPJ.call({from: accounts[1]});
//		const uint256JY8mX9L = await FairStockEquityoXZp0o0.getCostAmount.call(uintY6wLlgU, {from: "0x0000000000000000000000000000000000000001"});
//		const addressqJC4N1h = await FairStockEquityoXZp0o0.business.call(addressvVGijaP, uintVZLE79d, uintCuoDfSw, uintnPFz3ii, uintwiTfrcX, {from: accounts[5]});
//		await FairStockEquityoXZp0o0.withdrawMT.call({from: accounts[2]});
//		const uint256itXnHTt = await FairStockEquityoXZp0o0.setStartTime.call(uint3xCmsX, {from: accounts[3]});
//		const uint256wlEuSs5 = await FairStockEquityoXZp0o0.reduceShare.call(uintymkpYTv, {from: accounts[4]});
//		const uint256OTpmKB = await FairStockEquityoXZp0o0.reduceShare.call(uintxpfvW19, {from: accounts[1]});
//		await FairStockEquityoXZp0o0.f.call({from: accounts[2]});
//		await FairStockEquityoXZp0o0.onlyDataSource.call({from: accounts[4]});
//		const addressPWHXx67 = await FairStockEquityoXZp0o0.withdrawMTCallback.call(addressMsZ8dd6, uintye0o9yD, uintJTA5iiY, {from: accounts[2]});
//		await FairStockEquityoXZp0o0.onlyDataSource.call({from: accounts[2]});
//		const addressEx74X3W = await FairStockEquityoXZp0o0.setModule.call(addressQfoBx2q, uinti6HBGo1, uintIXixbq, {from: accounts[1]});

		await expect(FairStockEquityoXZp0o0.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressgoMzssW = accounts[0]
		const addressc2tY9Jb = accounts[3]
		const addressKKXUUUF = accounts[0]
		const addressyAsGaZA = accounts[0]
		const uinthQWFjUn = BigInt("692")
		const FairStockEquityohGotw = await FairStockEquity.new(addressgoMzssW, addressc2tY9Jb, addressKKXUUUF, addressyAsGaZA, uinthQWFjUn, {from: accounts[4]});
		const uintylnzK9R = BigInt("654")
		const uint6hlhvG = BigInt("1595")
		const uintBjU13m8 = BigInt("1883")
		const uintOcCELg0 = BigInt("728")
		const addressR92QQyb = "0x00000000000000000000000000000000000000-1"
//		const addressajSums5 = await FairStockEquityohGotw.business.call(addressR92QQyb, uintOcCELg0, uintBjU13m8, uint6hlhvG, uintylnzK9R, {from: accounts[5]});

		await expect(FairStockEquityohGotw.business.call(addressR92QQyb, uintOcCELg0, uintBjU13m8, uint6hlhvG, uintylnzK9R, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressXFOSTb3 = accounts[4]
		const addressubSCA4o = accounts[4]
		const address80zdKa = accounts[5]
		const addressLv9aFrT = accounts[2]
		const uintmNVIoEk = BigInt("1715")
		const FairStockEquityRP2uH9F = await FairStockEquity.new(addressXFOSTb3, addressubSCA4o, address80zdKa, addressLv9aFrT, uintmNVIoEk, {from: accounts[5]});
		const uintNBid61C = BigInt("1648")
		const uintTYoUXGv = BigInt("1301")
		const addresskYmHJhU = accounts[1]
		const uintXUXhx12 = BigInt("1156")
		const uintgVwHLSg = BigInt("210")
		const uintYHmXGis = BigInt("1415")
		const uintdraVef = BigInt("254")
		const addressj3tS5pz = "0x0000000000000000000000000000000000000001"
		const uinth3LNPH8 = BigInt("1923")
		const uintzbx5HJ = BigInt("1506")
		const addressgqE7BCi = accounts[3]
		const uintybfXAQJ = BigInt("1991")
		const uintgNEvcTR = BigInt("1007")
		const uintM762lu0 = BigInt("135")
//		const addressClaq0lA = await FairStockEquityRP2uH9F.withdrawBonusCallback.call(addresskYmHJhU, uintTYoUXGv, uintNBid61C, {from: accounts[2]});
//		const addressgp6zFdk = await FairStockEquityRP2uH9F.business.call(addressj3tS5pz, uintdraVef, uintYHmXGis, uintgVwHLSg, uintXUXhx12, {from: accounts[3]});
//		const addressY7vgL17 = await FairStockEquityRP2uH9F.withdrawMTCallback.call(addressgqE7BCi, uintzbx5HJ, uinth3LNPH8, {from: accounts[1]});
//		const uint256jT6QbGu = await FairStockEquityRP2uH9F.setProfitPercentPJ.call(uintybfXAQJ, {from: accounts[1]});
//		const uint256mMaULmz = await FairStockEquityRP2uH9F.setStartTime.call(uintgNEvcTR, {from: accounts[4]});
//		const uint256Hf93ez = await FairStockEquityRP2uH9F.depositBonus.call(uintM762lu0, {from: accounts[0]});

		await expect(FairStockEquityRP2uH9F.withdrawBonusCallback.call(addresskYmHJhU, uintTYoUXGv, uintNBid61C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKSjnphu = accounts[4]
		const addressQcjulcx = accounts[4]
		const addressoVCTF1y = accounts[5]
		const addressQ1vFPR = accounts[2]
		const uintSqj5QCi = BigInt("1715")
		const FairStockEquityRP2uH9F = await FairStockEquity.new(addressKSjnphu, addressQcjulcx, addressoVCTF1y, addressQ1vFPR, uintSqj5QCi, {from: accounts[5]});
		const uintW4Tf82S = BigInt("1992")
		const uintVhljGkN = BigInt("1565")
		const uintrSNhtdi = BigInt("1156")
		const uintnneWGOP = BigInt("228")
		const uinttVCv9C6 = BigInt("1415")
		const uintzuQbsQN = BigInt("194")
		const addressjbwHc8b = "0x0000000000000000000000000000000000000002"
		const uintXE2vS26 = BigInt("640")
		const addresspKbM9w = accounts[1]
		const uintKlvteQy = BigInt("1759")
		const uintjH9CVvo = BigInt("1998")
		const uintpDHnBp = BigInt("419")
		const addresszg1YY3 = accounts[3]
		const uintxbzYdKM = BigInt("848")
		const uintgGEPFf6 = BigInt("135")
		const uint256tz1rk7U = await FairStockEquityRP2uH9F.setStartTime.call(uintW4Tf82S, {from: accounts[5]});
		const uint256mmFLzqq = await FairStockEquityRP2uH9F.getCostAmount.call(uintVhljGkN, {from: accounts[2]});
//		const addressgp6zFdk = await FairStockEquityRP2uH9F.business.call(addressjbwHc8b, uintzuQbsQN, uinttVCv9C6, uintnneWGOP, uintrSNhtdi, {from: accounts[3]});
//		const addressOfJRPO = await FairStockEquityRP2uH9F.depositLPT.call(addresspKbM9w, uintXE2vS26, {from: accounts[0]});
//		const uint256AcUn9Bt = await FairStockEquityRP2uH9F.setProfitPercentPJ.call(uintKlvteQy, {from: accounts[0]});
//		const uint256jT6QbGu = await FairStockEquityRP2uH9F.setProfitPercentPJ.call(uintjH9CVvo, {from: accounts[1]});
//		const addressQ69WXCA = await FairStockEquityRP2uH9F.withdrawLPT.call(addresszg1YY3, uintpDHnBp, {from: accounts[2]});
//		const uint256mMaULmz = await FairStockEquityRP2uH9F.setStartTime.call(uintxbzYdKM, {from: accounts[4]});
//		const uint256Hf93ez = await FairStockEquityRP2uH9F.depositBonus.call(uintgGEPFf6, {from: accounts[0]});

		await expect(FairStockEquityRP2uH9F.business.call(addressjbwHc8b, uintzuQbsQN, uinttVCv9C6, uintnneWGOP, uintrSNhtdi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})