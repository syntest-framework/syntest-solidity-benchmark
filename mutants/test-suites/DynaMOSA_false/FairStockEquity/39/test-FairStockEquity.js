const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressoKpJDG0 = accounts[0]
		const addressPxgQ38l = accounts[0]
		const addressMJSPmMJ = "0x0000000000000000000000000000000000000001"
		const addressfxHCMYu = "0x0000000000000000000000000000000000000001"
		const uintJCq7F7 = BigInt("1255")
		const FairStockEquityjWKSrRx = await FairStockEquity.new(addressoKpJDG0, addressPxgQ38l, addressMJSPmMJ, addressfxHCMYu, uintJCq7F7, {from: accounts[2]});
		const uinthmPpPc = BigInt("382")
		const uintTqtdfhm = BigInt("1041")
		const uintice5c0A = BigInt("1157")
		const uintoKilCe = BigInt("1740")
		const uintbujOYb9 = BigInt("1359")
		const addressX0XJ0an = accounts[2]
//		const uint256fbI6G6N = await FairStockEquityjWKSrRx.bonus.call(uinthmPpPc, {from: accounts[2]});
//		const addressm3VrMpr = await FairStockEquityjWKSrRx.business.call(addressX0XJ0an, uintbujOYb9, uintoKilCe, uintice5c0A, uintTqtdfhm, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityjWKSrRx.withdrawMT.call({from: accounts[4]});

		await expect(FairStockEquityjWKSrRx.bonus.call(uinthmPpPc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslEBBphk = accounts[3]
		const addressTgErhFg = accounts[4]
		const addresst1kODX = accounts[3]
		const addressj7yFsyc = accounts[0]
		const uinthbn9ZIZ = BigInt("1229")
		const FairStockEquityJh0FuB8 = await FairStockEquity.new(addresslEBBphk, addressTgErhFg, addresst1kODX, addressj7yFsyc, uinthbn9ZIZ, {from: accounts[3]});
		const uintQB4mSl = BigInt("392")
		const addresseHB3SlT = "0x0000000000000000000000000000000000000001"
		const addressdSjJLgH = accounts[0]
		const uintWDztwG0 = BigInt("1418")
		const addressBZ1XVOP = "0x0000000000000000000000000000000000000001"
//		const uint256ep6VErD = await FairStockEquityJh0FuB8.setProfitPercentPJ.call(uintQB4mSl, {from: accounts[1]});
//		const address0QqPAr = await FairStockEquityJh0FuB8.setDataSource.call(addresseHB3SlT, {from: accounts[2]});
//		await FairStockEquityJh0FuB8.checkStart.call({from: accounts[1]});
//		const addressWCeghD4 = await FairStockEquityJh0FuB8.setDataSource.call(addressdSjJLgH, {from: accounts[1]});
//		const addressYkJ2l2D = await FairStockEquityJh0FuB8.withdrawLPT.call(addressBZ1XVOP, uintWDztwG0, {from: accounts[4]});

		await expect(FairStockEquityJh0FuB8.setProfitPercentPJ.call(uintQB4mSl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrgTOiox = accounts[4]
		const addressYLzkk0i = accounts[3]
		const addressCtGGKxd = accounts[0]
		const addressOKsrXZg = accounts[2]
		const uintF73w6pM = BigInt("293")
		const FairStockEquityoP3ypA5 = await FairStockEquity.new(addressrgTOiox, addressYLzkk0i, addressCtGGKxd, addressOKsrXZg, uintF73w6pM, {from: accounts[1]});
		const uintSwoAOCy = BigInt("817")
		const addressgGYQDS = accounts[0]
		const uintfbB4Dc = BigInt("1930")
		const uintRUyM73Y = BigInt("1541")
		const uintFegSSQY = BigInt("205")
		const uintA5g7Wvp = BigInt("709")
		const addressxPfbwSH = accounts[1]
		const uintR7Fm0Ge = BigInt("1005")
		const uintt2SEVdZ = BigInt("470")
		const uintK8dOMan = BigInt("24")
		const addressGSZpQr = accounts[5]
//		const addressf0rgkKM = await FairStockEquityoP3ypA5.depositLPT.call(addressgGYQDS, uintSwoAOCy, {from: accounts[1]});
//		const addresstWkiz5x = await FairStockEquityoP3ypA5.business.call(addressxPfbwSH, uintA5g7Wvp, uintFegSSQY, uintRUyM73Y, uintfbB4Dc, {from: accounts[2]});
//		const uint256iAag0Ik = await FairStockEquityoP3ypA5.setGasFeeForCallback.call(uintR7Fm0Ge, {from: accounts[2]});
//		const addressC6zqS5H = await FairStockEquityoP3ypA5.setModule.call(addressGSZpQr, uintK8dOMan, uintt2SEVdZ, {from: accounts[3]});

		await expect(FairStockEquityoP3ypA5.depositLPT.call(addressgGYQDS, uintSwoAOCy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresswLIfUVd = accounts[3]
		const addressAul6nfF = accounts[0]
		const addressaa1cfb2 = accounts[2]
		const addressUEx4qwN = accounts[0]
		const uinttzwXzAi = BigInt("519")
		const FairStockEquityuxH2eYd = await FairStockEquity.new(addresswLIfUVd, addressAul6nfF, addressaa1cfb2, addressUEx4qwN, uinttzwXzAi, {from: accounts[4]});
		const boolqG60VfY = false
		const addressZlVcUBD = accounts[2]
		const uintB2tv6cl = BigInt("1213")
		const uintn0nHNml = BigInt("385")
		const addressdOKJkpo = accounts[3]
		const uintS8vHGyT = BigInt("1337")
		const addressVOKr3oT = accounts[3]
		const uintiNJcikI = BigInt("1242")
		const addressWj59ioy = await FairStockEquityuxH2eYd.setLPT.call(addressZlVcUBD, boolqG60VfY, {from: accounts[4]});
//		await FairStockEquityuxH2eYd.checkStart.call({from: accounts[2]});
//		const addressKrP1yOZ = await FairStockEquityuxH2eYd.setModule.call(addressdOKJkpo, uintn0nHNml, uintB2tv6cl, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wco6d0 = await FairStockEquityuxH2eYd.bonus.call(uintS8vHGyT, {from: accounts[0]});
//		const addressHjNrf0T = await FairStockEquityuxH2eYd.setDataSource.call(addressVOKr3oT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256hYFgAzg = await FairStockEquityuxH2eYd.setGasFeeForCallback.call(uintiNJcikI, {from: accounts[3]});

		await expect(FairStockEquityuxH2eYd.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressR9THSXI = accounts[5]
		const addressrnJ6Ana = accounts[4]
		const addressRNiciSC = accounts[0]
		const addressslUXS2V = accounts[0]
		const uintT2I5HvF = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressR9THSXI, addressrnJ6Ana, addressRNiciSC, addressslUXS2V, uintT2I5HvF, {from: accounts[1]});
		const uintRO29Zz = BigInt("993")
		const uintaDRGkNr = BigInt("783")
		const uintdwaP5W4 = BigInt("353")
		const uintEtBRe54 = BigInt("1601")
		const addresswnGBb9s = accounts[3]
		const uintScPCnue = BigInt("1306")
		const uintcARhrbQ = BigInt("432")
		const addressjHdUaW7 = accounts[0]
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addresswnGBb9s, uintEtBRe54, uintdwaP5W4, uintaDRGkNr, uintRO29Zz, {from: accounts[2]});
//		const uint256fjuZldL = await FairStockEquitySq8T3YQ.setProfitPercentMT.call(uintScPCnue, {from: accounts[4]});
//		await FairStockEquitySq8T3YQ.withdrawMT.call({from: accounts[4]});
//		const addressv7J8xwz = await FairStockEquitySq8T3YQ.depositLPT.call(addressjHdUaW7, uintcARhrbQ, {from: accounts[3]});

		await expect(FairStockEquitySq8T3YQ.business.call(addresswnGBb9s, uintEtBRe54, uintdwaP5W4, uintaDRGkNr, uintRO29Zz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresseqUr9EA = accounts[2]
		const addressJiQiJya = accounts[4]
		const addressKokV2c = accounts[1]
		const addressG0K5Nuz = accounts[0]
		const uintEHig8OQ = BigInt("793")
		const FairStockEquityZLWJov = await FairStockEquity.new(addresseqUr9EA, addressJiQiJya, addressKokV2c, addressG0K5Nuz, uintEHig8OQ, {from: accounts[1]});
		const uintCwUv6F = BigInt("1098")
		const boolBIRtz0A = false
		const addressEUXfgkb = accounts[3]
		const uintvaMVayW = BigInt("1980")
		const uintQcr9m2s = BigInt("1838")
		const addressgw0ULOD = accounts[4]
		const uintL6LNp0L = BigInt("722")
//		const uint256Elw7mJl = await FairStockEquityZLWJov.setStartTime.call(uintCwUv6F, {from: accounts[3]});
//		const addresse3o6Lv = await FairStockEquityZLWJov.setLPT.call(addressEUXfgkb, boolBIRtz0A, {from: "0x0000000000000000000000000000000000000001"});
//		const addressw1BJF1 = await FairStockEquityZLWJov.withdrawBonusCallback.call(addressgw0ULOD, uintQcr9m2s, uintvaMVayW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LTK2Ow2 = await FairStockEquityZLWJov.setProfitPercentPJ.call(uintL6LNp0L, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityZLWJov.onlyDataSource.call({from: accounts[5]});

		await expect(FairStockEquityZLWJov.setStartTime.call(uintCwUv6F, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszrURB4n = accounts[4]
		const addressKQ3WpeH = accounts[0]
		const addressUJiiLUn = accounts[0]
		const addressfrVrimZ = accounts[4]
		const uintTHu0pBc = BigInt("235")
		const FairStockEquityOHTrnbZ = await FairStockEquity.new(addresszrURB4n, addressKQ3WpeH, addressUJiiLUn, addressfrVrimZ, uintTHu0pBc, {from: accounts[4]});
		const uintU0OcpLH = BigInt("1057")
		const uintaQo2oLl = BigInt("926")
		const uintMg07fO = BigInt("454")
//		await FairStockEquityOHTrnbZ.withdrawMT.call({from: accounts[4]});
//		const uint256wlyaR5C = await FairStockEquityOHTrnbZ.setProfitPercentPJ.call(uintU0OcpLH, {from: accounts[3]});
//		const uint256syvxeFR = await FairStockEquityOHTrnbZ.depositBonus.call(uintaQo2oLl, {from: accounts[4]});
//		const uint256drGzyVJ = await FairStockEquityOHTrnbZ.reduceShare.call(uintMg07fO, {from: accounts[5]});

		await expect(FairStockEquityOHTrnbZ.withdrawMT.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMfhstVp = "0x0000000000000000000000000000000000000001"
		const addressl6fI37q = accounts[5]
		const addressqtJfWZb = accounts[3]
		const addressokltm46 = accounts[4]
		const uintqFKpQAE = BigInt("2010")
		const FairStockEquityEls1ATn = await FairStockEquity.new(addressMfhstVp, addressl6fI37q, addressqtJfWZb, addressokltm46, uintqFKpQAE, {from: "0x0000000000000000000000000000000000000001"});
		const uintYjQgtL = BigInt("1136")
		const addressQhXLXZo = accounts[2]
		const uintBBzHlNV = BigInt("879")
		const uintoQ463jC = BigInt("1875")
		const addressRGnJMv = accounts[0]
		const uintwRXjref = BigInt("857")
		const uint256DrzHFJ = await FairStockEquityEls1ATn.setProfitPercentPJ.call(uintYjQgtL, {from: accounts[3]});
		const addressTmRdYT = await FairStockEquityEls1ATn.setDataSource.call(addressQhXLXZo, {from: accounts[5]});
		const addressfRkDK1u = await FairStockEquityEls1ATn.setModule.call(addressRGnJMv, uintoQ463jC, uintBBzHlNV, {from: accounts[0]});
		await FairStockEquityEls1ATn.f.call({from: accounts[3]});
		const uint256D2w7bu = await FairStockEquityEls1ATn.getCostAmount.call(uintwRXjref, {from: accounts[4]});
	});

	it('test for FairStockEquity', async () => {
		const addressVMlwDQf = accounts[5]
		const addressx7OIuM6 = accounts[4]
		const addressvuQsl8F = accounts[0]
		const addressq3ooMu = accounts[0]
		const uintmFmRpWp = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressVMlwDQf, addressx7OIuM6, addressvuQsl8F, addressq3ooMu, uintmFmRpWp, {from: accounts[1]});
		const uintXjj0RaL = BigInt("1182")
		const uintx6z3aGB = BigInt("993")
		const uintaZMwZ3u = BigInt("783")
		const uintY2i0Et6 = BigInt("303")
		const uintvaAlNr = BigInt("1589")
		const addressyhO8AxI = accounts[0]
		const uintFUY0THj = BigInt("1650")
		const uintLDLTaA = BigInt("1235")
		const uintTgWo0lK = BigInt("1863")
		const uintXoPvtDE = BigInt("1205")
		const addressYuS5wG = accounts[3]
//		const uint256FEWqKjz = await FairStockEquitySq8T3YQ.reduceShare.call(uintXjj0RaL, {from: accounts[2]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addressyhO8AxI, uintvaAlNr, uintY2i0Et6, uintaZMwZ3u, uintx6z3aGB, {from: accounts[2]});
//		await FairStockEquitySq8T3YQ.withdrawMT.call({from: accounts[4]});
//		const addressEVKkF2 = await FairStockEquitySq8T3YQ.business.call(addressYuS5wG, uintXoPvtDE, uintTgWo0lK, uintLDLTaA, uintFUY0THj, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquitySq8T3YQ.withdrawMT.call({from: accounts[4]});

		await expect(FairStockEquitySq8T3YQ.reduceShare.call(uintXjj0RaL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressybmG4JE = accounts[5]
		const addressBVIp3Ll = accounts[4]
		const addressWsIu9Db = accounts[0]
		const addressxinkGfn = accounts[0]
		const uintJ1OJD9z = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressybmG4JE, addressBVIp3Ll, addressWsIu9Db, addressxinkGfn, uintJ1OJD9z, {from: accounts[1]});
		const uintWbGHFo = BigInt("895")
		const uint36mxdy = BigInt("1295")
		const uintnDEHv1 = BigInt("993")
		const uintaXhD6x2 = BigInt("783")
		const uintd5Np7BK = BigInt("353")
		const uintc4YwH98 = BigInt("1601")
		const addressJ7JyJ01 = accounts[3]
		const uint256wYn8lK0 = await FairStockEquitySq8T3YQ.setProfitPercentMT.call(uintWbGHFo, {from: accounts[1]});
//		const uint256eijqSbO = await FairStockEquitySq8T3YQ.depositBonus.call(uint36mxdy, {from: accounts[0]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addressJ7JyJ01, uintc4YwH98, uintd5Np7BK, uintaXhD6x2, uintnDEHv1, {from: accounts[2]});

		await expect(FairStockEquitySq8T3YQ.depositBonus.call(uint36mxdy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmvyIDwF = accounts[4]
		const addressnWnXwVL = accounts[4]
		const addressCTkrhZH = accounts[5]
		const addressMDY2COC = accounts[3]
		const uintGIfTTQ = BigInt("1215")
		const FairStockEquitymyF3xSX = await FairStockEquity.new(addressmvyIDwF, addressnWnXwVL, addressCTkrhZH, addressMDY2COC, uintGIfTTQ, {from: accounts[2]});
		const uintnVNzrB7 = BigInt("1751")
		const addressbslViUD = accounts[1]
		const addressTFOZZrx = accounts[0]
		const uintBqIRbUw = BigInt("1570")
		const addressTKULJpE = accounts[5]
		const uintMVmfICO = BigInt("456")
		const uintKtTbGTY = BigInt("551")
		const addressfj53xl = accounts[2]
//		const addressg1lexu = await FairStockEquitymyF3xSX.withdrawLPT.call(addressbslViUD, uintnVNzrB7, {from: accounts[0]});
//		await FairStockEquitymyF3xSX.withdrawPJ.call({from: accounts[5]});
//		const addressckSejXF = await FairStockEquitymyF3xSX.setDataSource.call(addressTFOZZrx, {from: accounts[4]});
//		const addressuoYZZFW = await FairStockEquitymyF3xSX.withdrawLPT.call(addressTKULJpE, uintBqIRbUw, {from: accounts[3]});
//		const addressuHPiTGh = await FairStockEquitymyF3xSX.setModule.call(addressfj53xl, uintKtTbGTY, uintMVmfICO, {from: accounts[1]});

		await expect(FairStockEquitymyF3xSX.withdrawLPT.call(addressbslViUD, uintnVNzrB7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNOWOG35 = accounts[5]
		const addressASDhcIm = accounts[4]
		const addressHN66wbC = accounts[0]
		const addressjtlCBIU = accounts[0]
		const uintILXgf8R = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressNOWOG35, addressASDhcIm, addressHN66wbC, addressjtlCBIU, uintILXgf8R, {from: accounts[1]});
		const uintM5GCX73 = BigInt("1819")
		const boolTepO30f = false
		const addressJYbiIqE = accounts[0]
		const uintLWz0JiF = BigInt("993")
		const uintsvhQ8a3 = BigInt("783")
		const uintBqDlOe8 = BigInt("353")
		const uintWzvlwoG = BigInt("1589")
		const addressZq5WSy = accounts[0]
		const uint256dCKWGh = await FairStockEquitySq8T3YQ.getCostAmount.call(uintM5GCX73, {from: accounts[2]});
		const addressjLrjPHj = await FairStockEquitySq8T3YQ.setLPT.call(addressJYbiIqE, boolTepO30f, {from: accounts[1]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addressZq5WSy, uintWzvlwoG, uintBqDlOe8, uintsvhQ8a3, uintLWz0JiF, {from: accounts[2]});
//		await FairStockEquitySq8T3YQ.withdrawMT.call({from: accounts[4]});

		await expect(FairStockEquitySq8T3YQ.business.call(addressZq5WSy, uintWzvlwoG, uintBqDlOe8, uintsvhQ8a3, uintLWz0JiF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressH9DfaR = accounts[5]
		const addresshvZIjQw = accounts[1]
		const addresssjDV8BQ = accounts[0]
		const addressVEHmQxF = accounts[4]
		const uintZuOmsR = BigInt("371")
		const FairStockEquityBO1t1vL = await FairStockEquity.new(addressH9DfaR, addresshvZIjQw, addresssjDV8BQ, addressVEHmQxF, uintZuOmsR, {from: accounts[2]});
		const uintKGNujuL = BigInt("668")
		const addresss7Nzy0p = accounts[3]
		const uintRVoWJj8 = BigInt("937")
		const uintTonxtY = BigInt("756")
		const uintrCtW1hH = BigInt("236")
		const uintDiQGYR = BigInt("528")
		const uintPdyV2gF = BigInt("1490")
		const uintv5UdVyT = BigInt("675")
		const uintrkygaD = BigInt("1513")
		const uintcCKktFT = BigInt("1824")
		const uintkjOUVZm = BigInt("302")
		const addresszK6jAje = accounts[0]
//		await FairStockEquityBO1t1vL.f.call({from: accounts[3]});
//		const uint256p52HkK8 = await FairStockEquityBO1t1vL.setProfitPercentMT.call(uintKGNujuL, {from: accounts[1]});
//		const addressqy2Cx8 = await FairStockEquityBO1t1vL.setDataSource.call(addresss7Nzy0p, {from: accounts[0]});
//		const uint256LeGUnh = await FairStockEquityBO1t1vL.setDegree.call(uintPdyV2gF, uintDiQGYR, uintrCtW1hH, uintTonxtY, uintRVoWJj8, {from: accounts[3]});
//		const addressxEfpOCH = await FairStockEquityBO1t1vL.business.call(addresszK6jAje, uintkjOUVZm, uintcCKktFT, uintrkygaD, uintv5UdVyT, {from: accounts[4]});

		await expect(FairStockEquityBO1t1vL.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressp9x0PAR = accounts[5]
		const addressJ9bE1TU = accounts[4]
		const addresscTVom22 = accounts[0]
		const addressnxWRewG = accounts[0]
		const uintfxHxJVA = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressp9x0PAR, addressJ9bE1TU, addresscTVom22, addressnxWRewG, uintfxHxJVA, {from: accounts[1]});
		const uintpbbfato = BigInt("130")
		const uintKFPIfXF = BigInt("680")
		const addressgC2CFWB = accounts[3]
		const uintSiSGRaP = BigInt("993")
		const uintOMNM9XE = BigInt("783")
		const uintlO8qX5i = BigInt("303")
		const uintFkqFhws = BigInt("1589")
		const addressBt0exQ = accounts[0]
		const uintRFv40cG = BigInt("789")
		const uint2b9vw5 = BigInt("492")
		const uintFuWsEW = BigInt("589")
		const uintx3wAgD = BigInt("271")
		const uintKEvXZRL = BigInt("1818")
		const uintjMvDNHG = BigInt("1650")
		const uintb4SHIdM = BigInt("1235")
		const uintDFGf1v = BigInt("1863")
		const uintRJ4bnFT = BigInt("1205")
		const addressglOFj5l = accounts[3]
//		const addressbw6v0i = await FairStockEquitySq8T3YQ.withdrawBonusCallback.call(addressgC2CFWB, uintKFPIfXF, uintpbbfato, {from: accounts[0]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addressBt0exQ, uintFkqFhws, uintlO8qX5i, uintOMNM9XE, uintSiSGRaP, {from: accounts[2]});
//		await FairStockEquitySq8T3YQ.withdrawMT.call({from: accounts[4]});
//		await FairStockEquitySq8T3YQ.withdrawBonus.call({from: accounts[4]});
//		const uint256MSxdQgo = await FairStockEquitySq8T3YQ.setDegree.call(uintKEvXZRL, uintx3wAgD, uintFuWsEW, uint2b9vw5, uintRFv40cG, {from: accounts[5]});
//		await FairStockEquitySq8T3YQ.f.call({from: accounts[3]});
//		const addressEVKkF2 = await FairStockEquitySq8T3YQ.business.call(addressglOFj5l, uintRJ4bnFT, uintDFGf1v, uintb4SHIdM, uintjMvDNHG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitySq8T3YQ.withdrawBonusCallback.call(addressgC2CFWB, uintKFPIfXF, uintpbbfato, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressGPA5zS1 = accounts[5]
		const addressczw7NFK = accounts[4]
		const addresssNGUn1E = accounts[0]
		const addresshBHy6lx = accounts[0]
		const uintLPfRKj8 = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressGPA5zS1, addressczw7NFK, addresssNGUn1E, addresshBHy6lx, uintLPfRKj8, {from: accounts[1]});
		const uintfEAA6y7 = BigInt("1271")
		const uintjXRkQh0 = BigInt("563")
		const uintKBnpjW7 = BigInt("751")
		const uintcLXI4UE = BigInt("240")
		const addressV81h9lu = accounts[0]
		const uintQKE4KwT = BigInt("993")
		const uintZVaCdbQ = BigInt("783")
		const uintoJVFDGV = BigInt("353")
		const uintJm9jJsn = BigInt("1557")
		const addressLfbVoz1 = accounts[3]
//		await FairStockEquitySq8T3YQ.withdrawBonus.call({from: accounts[5]});
//		const addressPy6XEpW = await FairStockEquitySq8T3YQ.business.call(addressV81h9lu, uintcLXI4UE, uintKBnpjW7, uintjXRkQh0, uintfEAA6y7, {from: accounts[1]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addressLfbVoz1, uintJm9jJsn, uintoJVFDGV, uintZVaCdbQ, uintQKE4KwT, {from: accounts[2]});

		await expect(FairStockEquitySq8T3YQ.withdrawBonus.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressH2tLhMN = accounts[5]
		const addresswiWNW97 = accounts[4]
		const addressZPXYSXb = accounts[0]
		const addressAAORUV0 = accounts[0]
		const uintDTCtd9t = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressH2tLhMN, addresswiWNW97, addressZPXYSXb, addressAAORUV0, uintDTCtd9t, {from: accounts[1]});
		const uintMpPWXrK = BigInt("2003")
		const uintt5WwV2t = BigInt("993")
		const uintV5D3Dow = BigInt("783")
		const uintCO2VXNJ = BigInt("353")
		const uintlJIcnl3 = BigInt("1565")
		const addressDL1i7Kb = accounts[3]
		const uint256gUxhOR6 = await FairStockEquitySq8T3YQ.setStartTime.call(uintMpPWXrK, {from: accounts[1]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addressDL1i7Kb, uintlJIcnl3, uintCO2VXNJ, uintV5D3Dow, uintt5WwV2t, {from: accounts[2]});

		await expect(FairStockEquitySq8T3YQ.business.call(addressDL1i7Kb, uintlJIcnl3, uintCO2VXNJ, uintV5D3Dow, uintt5WwV2t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdFCGx3h = accounts[5]
		const addressRDFR0qI = accounts[4]
		const addressCysjOUm = accounts[0]
		const addressiKZPZNN = accounts[0]
		const uintfBTFfNw = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressdFCGx3h, addressRDFR0qI, addressCysjOUm, addressiKZPZNN, uintfBTFfNw, {from: accounts[1]});
		const uintWUFbNXU = BigInt("1819")
		const boolTepO30f = true
		const addressHqWE2cj = accounts[0]
		const booliOQnRku = true
		const addressKC3TrVO = accounts[3]
		const uintsVZO6Ga = BigInt("993")
		const uintf5zS6TM = BigInt("783")
		const uintVPs0yxa = BigInt("353")
		const uintpu43YM = BigInt("1589")
		const addresspGm4rqB = accounts[0]
		const uintoznXI1u = BigInt("1326")
		const uint256dCKWGh = await FairStockEquitySq8T3YQ.getCostAmount.call(uintWUFbNXU, {from: accounts[2]});
//		await FairStockEquitySq8T3YQ.withdrawPJ.call({from: accounts[1]});
//		const addressjLrjPHj = await FairStockEquitySq8T3YQ.setLPT.call(addressHqWE2cj, boolTepO30f, {from: accounts[1]});
//		const addressDIlMKK = await FairStockEquitySq8T3YQ.setLPT.call(addressKC3TrVO, booliOQnRku, {from: accounts[3]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addresspGm4rqB, uintpu43YM, uintVPs0yxa, uintf5zS6TM, uintsVZO6Ga, {from: accounts[2]});
//		const uint256YmHysWH = await FairStockEquitySq8T3YQ.setGasFeeForCallback.call(uintoznXI1u, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquitySq8T3YQ.withdrawMT.call({from: accounts[4]});

		await expect(FairStockEquitySq8T3YQ.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressXiltjex = accounts[4]
		const addressFxPv9y9 = accounts[4]
		const addressEJSZoVS = "0x0000000000000000000000000000000000000001"
		const addressdqU7wrG = accounts[0]
		const uintsChWgjE = BigInt("1465")
		const FairStockEquityCmJgOph = await FairStockEquity.new(addressXiltjex, addressFxPv9y9, addressEJSZoVS, addressdqU7wrG, uintsChWgjE, {from: accounts[4]});
		const uint87XFpG = BigInt("1814")
		const uintPyT29qU = BigInt("1361")
//		const uint256gt7CkLh = await FairStockEquityCmJgOph.invest.call(uint87XFpG, {from: accounts[4]});
//		const uint256f6Ycz1R = await FairStockEquityCmJgOph.setGasFeeForCallback.call(uintPyT29qU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityCmJgOph.invest.call(uint87XFpG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressfs2KMnv = accounts[5]
		const addressCh5Kr3q = accounts[4]
		const addressoN0TuG2 = accounts[0]
		const addressdNGqnxr = accounts[0]
		const uintHrtumDP = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressfs2KMnv, addressCh5Kr3q, addressoN0TuG2, addressdNGqnxr, uintHrtumDP, {from: accounts[1]});
		const uintadJtamH = BigInt("1402")
		const uintGD8Ud4 = BigInt("1664")
		const addressFjEXms = accounts[4]
		const boollqNhcLV = false
		const addressc4wvLiS = "0x0000000000000000000000000000000000000001"
		const uintTOJx2J2 = BigInt("993")
		const uintnYzQY76 = BigInt("785")
		const uintMfe1KmU = BigInt("353")
		const uintnp08pBj = BigInt("41")
		const addressfM3WxGQ = accounts[3]
//		const addressXbwWArO = await FairStockEquitySq8T3YQ.withdrawMTCallback.call(addressFjEXms, uintGD8Ud4, uintadJtamH, {from: accounts[0]});
//		const addressFOJX6H = await FairStockEquitySq8T3YQ.setLPT.call(addressc4wvLiS, boollqNhcLV, {from: accounts[0]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addressfM3WxGQ, uintnp08pBj, uintMfe1KmU, uintnYzQY76, uintTOJx2J2, {from: accounts[2]});

		await expect(FairStockEquitySq8T3YQ.withdrawMTCallback.call(addressFjEXms, uintGD8Ud4, uintadJtamH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresso1lIXrN = accounts[5]
		const addressyDDh9aj = accounts[4]
		const addressn9Ju3Tg = accounts[0]
		const addressNtfCGwZ = accounts[0]
		const uintaAHM9au = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addresso1lIXrN, addressyDDh9aj, addressn9Ju3Tg, addressNtfCGwZ, uintaAHM9au, {from: accounts[1]});
		const uintQzhm3qj = BigInt("1145")
		const uintsOLduCx = BigInt("836")
//		const uint256VLeFtK8 = await FairStockEquitySq8T3YQ.bonus.call(uintQzhm3qj, {from: accounts[0]});
//		const uint256dCKWGh = await FairStockEquitySq8T3YQ.getCostAmount.call(uintsOLduCx, {from: accounts[2]});

		await expect(FairStockEquitySq8T3YQ.bonus.call(uintQzhm3qj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressFm9oWMR = accounts[5]
		const addressI1vzW0x = accounts[4]
		const addresstmCjo6n = accounts[0]
		const addressD7giZbW = accounts[0]
		const uintr2Cjd3 = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressFm9oWMR, addressI1vzW0x, addresstmCjo6n, addressD7giZbW, uintr2Cjd3, {from: accounts[1]});
		const uintXONXBJ = BigInt("580")
		const uintFbc77Sl = BigInt("1325")
		const uintkJytCwM = BigInt("1004")
		const addressEFw49tz = "0x0000000000000000000000000000000000000001"
		const uintATlIPEk = BigInt("993")
		const uintd9r22GH = BigInt("783")
		const uintHtJsBFU = BigInt("338")
		const uintfZXuyru = BigInt("30")
		const addressaQC62WZ = accounts[1]
		const uintueTCEzi = BigInt("1963")
		const uint256NwW70rN = await FairStockEquitySq8T3YQ.getCostAmount.call(uintXONXBJ, {from: accounts[3]});
		const addressxh7te0W = await FairStockEquitySq8T3YQ.setModule.call(addressEFw49tz, uintkJytCwM, uintFbc77Sl, {from: accounts[1]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addressaQC62WZ, uintfZXuyru, uintHtJsBFU, uintd9r22GH, uintATlIPEk, {from: accounts[2]});
//		await FairStockEquitySq8T3YQ.checkStart.call({from: accounts[4]});
//		const uint256UHKBbBy = await FairStockEquitySq8T3YQ.setProfitPercentMT.call(uintueTCEzi, {from: accounts[2]});

		await expect(FairStockEquitySq8T3YQ.business.call(addressaQC62WZ, uintfZXuyru, uintHtJsBFU, uintd9r22GH, uintATlIPEk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKDu8vaW = accounts[5]
		const addressp0VjIRd = accounts[4]
		const address7WHUIS = accounts[0]
		const address25Yzlg = accounts[0]
		const uintwi5msK4 = BigInt("1641")
		const FairStockEquitySq8T3YQ = await FairStockEquity.new(addressKDu8vaW, addressp0VjIRd, address7WHUIS, address25Yzlg, uintwi5msK4, {from: accounts[1]});
		const uintcd5CZmD = BigInt("580")
		const uintjyaC1Hb = BigInt("993")
		const uintuw0TgbT = BigInt("783")
		const uintXmz1Ywk = BigInt("353")
		const uinti436FxH = BigInt("0")
		const addresslGl6F0 = accounts[0]
		const addressqkmKQ30 = accounts[0]
		const uintpkKYgIG = BigInt("94")
		const uint256NwW70rN = await FairStockEquitySq8T3YQ.getCostAmount.call(uintcd5CZmD, {from: accounts[3]});
//		const addressRU8Dp9e = await FairStockEquitySq8T3YQ.business.call(addresslGl6F0, uinti436FxH, uintXmz1Ywk, uintuw0TgbT, uintjyaC1Hb, {from: accounts[2]});
//		await FairStockEquitySq8T3YQ.onlyDataSource.call({from: accounts[1]});
//		const addressmxapN6Y = await FairStockEquitySq8T3YQ.setDataSource.call(addressqkmKQ30, {from: accounts[3]});
//		const uint256RhfQpf2 = await FairStockEquitySq8T3YQ.setStartTime.call(uintpkKYgIG, {from: accounts[4]});

		await expect(FairStockEquitySq8T3YQ.business.call(addresslGl6F0, uinti436FxH, uintXmz1Ywk, uintuw0TgbT, uintjyaC1Hb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})