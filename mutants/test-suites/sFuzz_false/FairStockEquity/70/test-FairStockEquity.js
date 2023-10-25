const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addresszy63HzV = accounts[2]
		const addressleZ8dGH = accounts[0]
		const addressRzwkFb = accounts[4]
		const addressgbTaoLK = accounts[0]
		const uintKSujX7s = BigInt("803")
		const FairStockEquityijBacG = await FairStockEquity.new(addresszy63HzV, addressleZ8dGH, addressRzwkFb, addressgbTaoLK, uintKSujX7s, {from: accounts[2]});
		const uintc23HKZ = BigInt("166")
		const uint7kaoGz = BigInt("1771")
		const addressZRmQL1 = accounts[1]
//		await FairStockEquityijBacG.onlyDataSource.call({from: accounts[5]});
//		const addressGHNXA55 = await FairStockEquityijBacG.withdrawMTCallback.call(addressZRmQL1, uint7kaoGz, uintc23HKZ, {from: accounts[1]});

		await expect(FairStockEquityijBacG.onlyDataSource.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJg4VE7x = accounts[1]
		const addressbNYd8ry = accounts[0]
		const addresslaAgTrK = accounts[3]
		const addressD7jgeQO = accounts[4]
		const uintlILDU33 = BigInt("441")
		const FairStockEquityWHJrrph = await FairStockEquity.new(addressJg4VE7x, addressbNYd8ry, addresslaAgTrK, addressD7jgeQO, uintlILDU33, {from: "0x0000000000000000000000000000000000000001"});
		const uinteJiuVIt = BigInt("1147")
		const uinttfB2kuK = BigInt("1733")
		const uintAqNwLI = BigInt("619")
		const uintLJc3LVY = BigInt("1233")
		const uintOF5sowr = BigInt("1186")
		const uintfJClmT3 = BigInt("386")
		const uintrhWU6gr = BigInt("2014")
		const uintD6kBlqS = BigInt("1808")
		const uintgqfTgX = BigInt("1657")
		const uint256j7Alx1z = await FairStockEquityWHJrrph.setProfitPercentPJ.call(uinteJiuVIt, {from: accounts[5]});
		const uint256TliE3bL = await FairStockEquityWHJrrph.setDegree.call(uintfJClmT3, uintOF5sowr, uintLJc3LVY, uintAqNwLI, uinttfB2kuK, {from: accounts[5]});
		const uint256YHAAbcK = await FairStockEquityWHJrrph.setGasFeeForCallback.call(uintrhWU6gr, {from: accounts[3]});
		const uint256vWISAPh = await FairStockEquityWHJrrph.reduceShare.call(uintD6kBlqS, {from: accounts[4]});
		const uint256ECrFQdc = await FairStockEquityWHJrrph.setStartTime.call(uintgqfTgX, {from: accounts[3]});
	});

	it('test for FairStockEquity', async () => {
		const addressTLuMHAP = accounts[1]
		const address3zk83l = accounts[3]
		const addressogYoYDx = accounts[0]
		const addressqbZkknH = accounts[0]
		const uintluYesj = BigInt("246")
		const FairStockEquityQA2PQmY = await FairStockEquity.new(addressTLuMHAP, address3zk83l, addressogYoYDx, addressqbZkknH, uintluYesj, {from: accounts[3]});
		const uinttyjaqln = BigInt("905")
		const uintRra6uzq = BigInt("325")
//		const uint256UVnTgwf = await FairStockEquityQA2PQmY.setProfitPercentBonus.call(uinttyjaqln, {from: accounts[4]});
//		const uint256ivyjNXO = await FairStockEquityQA2PQmY.invest.call(uintRra6uzq, {from: accounts[4]});
//		await FairStockEquityQA2PQmY.checkStart.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityQA2PQmY.setProfitPercentBonus.call(uinttyjaqln, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressiMlTyNd = "0x0000000000000000000000000000000000000001"
		const addressqbVeHC = accounts[4]
		const addressjTJfmWg = "0x0000000000000000000000000000000000000001"
		const addressGQDhFSV = accounts[0]
		const uintXSBbs3v = BigInt("1783")
		const FairStockEquityxKI3iDo = await FairStockEquity.new(addressiMlTyNd, addressqbVeHC, addressjTJfmWg, addressGQDhFSV, uintXSBbs3v, {from: accounts[2]});
		const uintwCzuOJo = BigInt("1418")
		const uintcvjSKYE = BigInt("0")
		const uintJuU56FE = BigInt("941")
		const uintCSOBl1n = BigInt("19")
		const addressi9DTjZZ = accounts[2]
		const uintw4eA40i = BigInt("1332")
		const uintOMgspA1 = BigInt("1399")
		const addresskuevMkW = accounts[5]
		const uintyUFiH3g = BigInt("1665")
		const uintAu2JN95 = BigInt("1581")
		const addresstax187A = accounts[4]
		const uintDLEKcx7 = BigInt("1655")
		const uinttIpyZ4i = BigInt("1858")
//		const addressawCYhGR = await FairStockEquityxKI3iDo.business.call(addressi9DTjZZ, uintCSOBl1n, uintJuU56FE, uintcvjSKYE, uintwCzuOJo, {from: accounts[1]});
//		const addressi5gWPVx = await FairStockEquityxKI3iDo.withdrawMTCallback.call(addresskuevMkW, uintOMgspA1, uintw4eA40i, {from: accounts[0]});
//		const uint2567j5s6v = await FairStockEquityxKI3iDo.setStartTime.call(uintyUFiH3g, {from: accounts[4]});
//		const addressuakldBM = await FairStockEquityxKI3iDo.depositLPT.call(addresstax187A, uintAu2JN95, {from: accounts[0]});
//		const uint256Mb6vh91 = await FairStockEquityxKI3iDo.setStartTime.call(uintDLEKcx7, {from: accounts[3]});
//		const uint256wP23voA = await FairStockEquityxKI3iDo.depositBonus.call(uinttIpyZ4i, {from: accounts[1]});

		await expect(FairStockEquityxKI3iDo.business.call(addressi9DTjZZ, uintCSOBl1n, uintJuU56FE, uintcvjSKYE, uintwCzuOJo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressokztrJV = accounts[4]
		const addressoYoIUaM = accounts[3]
		const addressoAGZnzl = accounts[0]
		const addressgYYrZMs = accounts[3]
		const uinthxsOdDr = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addressokztrJV, addressoYoIUaM, addressoAGZnzl, addressgYYrZMs, uinthxsOdDr, {from: accounts[0]});
		const uintM9RicfT = BigInt("735")
		const uintXLWPd8y = BigInt("1432")
		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintM9RicfT, {from: accounts[2]});
//		const uint256Qlejg1m = await FairStockEquityGZclXyc.setGasFeeForCallback.call(uintXLWPd8y, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityGZclXyc.setGasFeeForCallback.call(uintXLWPd8y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressWSBoiLw = accounts[3]
		const addresskPF1YU2 = accounts[3]
		const addressbWG4XV = accounts[2]
		const addressCpkftnu = accounts[4]
		const uintrdz18mi = BigInt("1307")
		const FairStockEquityWcuId71 = await FairStockEquity.new(addressWSBoiLw, addresskPF1YU2, addressbWG4XV, addressCpkftnu, uintrdz18mi, {from: accounts[2]});
		const uintRVCIzZ = BigInt("1574")
		const uintdzOIZW = BigInt("329")
		const addressGBviINE = accounts[5]
		const uintaL1fxt2 = BigInt("1833")
		const uintiXJE6kt = BigInt("172")
		const uintZU1Mr4v = BigInt("1683")
		const address9Mfx98 = accounts[1]
//		const addressGvU11cU = await FairStockEquityWcuId71.withdrawMTCallback.call(addressGBviINE, uintdzOIZW, uintRVCIzZ, {from: accounts[3]});
//		const uint256SgMCcLC = await FairStockEquityWcuId71.setProfitPercentPJ.call(uintaL1fxt2, {from: accounts[1]});
//		await FairStockEquityWcuId71.withdrawBonus.call({from: accounts[4]});
//		const addressau1da17 = await FairStockEquityWcuId71.setModule.call(address9Mfx98, uintZU1Mr4v, uintiXJE6kt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityWcuId71.withdrawMTCallback.call(addressGBviINE, uintdzOIZW, uintRVCIzZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressCx4OpAU = accounts[2]
		const addresszj2CNFI = accounts[0]
		const addressZgX0NjE = accounts[4]
		const addressHjzU2N = accounts[0]
		const uintwAznnYA = BigInt("803")
		const FairStockEquityijBacG = await FairStockEquity.new(addressCx4OpAU, addresszj2CNFI, addressZgX0NjE, addressHjzU2N, uintwAznnYA, {from: accounts[2]});
		const uintcTMukc1 = BigInt("275")
		const addressNBZ44CF = accounts[1]
		const uintXek09li = BigInt("166")
		const uintqOTfkP3 = BigInt("1772")
		const addressaU0nOa = accounts[1]
//		const addressy4hrHj4 = await FairStockEquityijBacG.depositLPT.call(addressNBZ44CF, uintcTMukc1, {from: accounts[2]});
//		await FairStockEquityijBacG.onlyDataSource.call({from: accounts[5]});
//		const addressGHNXA55 = await FairStockEquityijBacG.withdrawMTCallback.call(addressaU0nOa, uintqOTfkP3, uintXek09li, {from: accounts[1]});
//		await FairStockEquityijBacG.checkStart.call({from: accounts[5]});

		await expect(FairStockEquityijBacG.depositLPT.call(addressNBZ44CF, uintcTMukc1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslzYQqN3 = accounts[4]
		const addresshlaOJc5 = accounts[3]
		const addresslygNCWq = accounts[0]
		const addressJ5JXExE = accounts[3]
		const uintEbySFnA = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addresslzYQqN3, addresshlaOJc5, addresslygNCWq, addressJ5JXExE, uintEbySFnA, {from: accounts[0]});
		const uintfoJBAZ8 = BigInt("735")
		const uintByLEpxj = BigInt("1573")
		const addressZUUICuH = accounts[3]
		const uintVnQvQkz = BigInt("428")
		const uinttV6C3PH = BigInt("1424")
		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintfoJBAZ8, {from: accounts[2]});
//		const addressgAOjkj4 = await FairStockEquityGZclXyc.withdrawLPT.call(addressZUUICuH, uintByLEpxj, {from: accounts[2]});
//		const uint256JWaeTao = await FairStockEquityGZclXyc.getCostAmount.call(uintVnQvQkz, {from: accounts[3]});
//		const uint256Qlejg1m = await FairStockEquityGZclXyc.setGasFeeForCallback.call(uinttV6C3PH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityGZclXyc.withdrawLPT.call(addressZUUICuH, uintByLEpxj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTH7de4w = accounts[2]
		const addressgVXkn4E = accounts[0]
		const addressPaIUuDZ = accounts[4]
		const addressvrqiUIZ = accounts[0]
		const uintT3bEXW = BigInt("803")
		const FairStockEquityijBacG = await FairStockEquity.new(addressTH7de4w, addressgVXkn4E, addressPaIUuDZ, addressvrqiUIZ, uintT3bEXW, {from: accounts[2]});
		const uintL4IQy0 = BigInt("1885")
		const uintNNiGixA = BigInt("1285")
		const uintY9Nlh3H = BigInt("1608")
		const addressSeHUqk = accounts[1]
		const uintj8yh5UG = BigInt("157")
		const uintUA8Ujrm = BigInt("1771")
		const addresspUHf0fU = accounts[4]
		const uintOt2bVo3 = BigInt("1986")
//		const uint256CuvhLt8 = await FairStockEquityijBacG.reduceShare.call(uintL4IQy0, {from: accounts[3]});
//		const addressT20iSaE = await FairStockEquityijBacG.withdrawBonusCallback.call(addressSeHUqk, uintY9Nlh3H, uintNNiGixA, {from: accounts[0]});
//		const addressGHNXA55 = await FairStockEquityijBacG.withdrawMTCallback.call(addresspUHf0fU, uintUA8Ujrm, uintj8yh5UG, {from: accounts[1]});
//		const uint256KnYKik = await FairStockEquityijBacG.setProfitPercentMT.call(uintOt2bVo3, {from: accounts[0]});

		await expect(FairStockEquityijBacG.reduceShare.call(uintL4IQy0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresseRcYIBD = accounts[4]
		const addressWvUyic = accounts[3]
		const addressrXKiXtQ = accounts[0]
		const addresszeIYCju = accounts[3]
		const uintRDlbu1I = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addresseRcYIBD, addressWvUyic, addressrXKiXtQ, addresszeIYCju, uintRDlbu1I, {from: accounts[0]});
		const uintueIL6zN = BigInt("735")
		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintueIL6zN, {from: accounts[2]});
//		await FairStockEquityGZclXyc.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquityGZclXyc.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuhHNGm2 = accounts[4]
		const addressZewRMMM = accounts[3]
		const addressdJmhPK2 = accounts[0]
		const addressgmJrUlm = accounts[3]
		const uintcxOtVrZ = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addressuhHNGm2, addressZewRMMM, addressdJmhPK2, addressgmJrUlm, uintcxOtVrZ, {from: accounts[0]});
		const uintVyyim0I = BigInt("1369")
		const uintpsvFbmo = BigInt("735")
		const uintaOxnmYE = BigInt("1452")
//		const uint256eBIGzo9 = await FairStockEquityGZclXyc.depositBonus.call(uintVyyim0I, {from: accounts[1]});
//		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintpsvFbmo, {from: accounts[2]});
//		const uint256Qlejg1m = await FairStockEquityGZclXyc.setGasFeeForCallback.call(uintaOxnmYE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityGZclXyc.depositBonus.call(uintVyyim0I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressoN4ZBkl = accounts[4]
		const addressAkSx9H6 = accounts[3]
		const address9KsPf5 = accounts[0]
		const addressDUqTeo = accounts[3]
		const uintag0IEOV = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addressoN4ZBkl, addressAkSx9H6, address9KsPf5, addressDUqTeo, uintag0IEOV, {from: accounts[0]});
		const uintZLJVjIT = BigInt("536")
		const boolVjT7i1B = true
		const addressWhFwsh4 = accounts[1]
		const uintsEGDxhw = BigInt("811")
		const uintaceLeZ = BigInt("760")
//		const uint256scCKOJ = await FairStockEquityGZclXyc.invest.call(uintZLJVjIT, {from: accounts[1]});
//		const addressfdETYZv = await FairStockEquityGZclXyc.setLPT.call(addressWhFwsh4, boolVjT7i1B, {from: accounts[3]});
//		const uint256wXFSklE = await FairStockEquityGZclXyc.setGasFeeForCallback.call(uintsEGDxhw, {from: accounts[0]});
//		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintaceLeZ, {from: accounts[2]});

		await expect(FairStockEquityGZclXyc.invest.call(uintZLJVjIT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressXAchPjy = accounts[2]
		const addressQNdzye = accounts[0]
		const address4LE3Fk = accounts[4]
		const addresskkOaV0 = accounts[0]
		const uintqHMcwlB = BigInt("803")
		const FairStockEquityijBacG = await FairStockEquity.new(addressXAchPjy, addressQNdzye, address4LE3Fk, addresskkOaV0, uintqHMcwlB, {from: accounts[2]});
		const boolIc559ID = true
		const addressLs7BdEr = accounts[2]
		const uintdSc8TDt = BigInt("157")
		const uintkaYc9yh = BigInt("1771")
		const addressJbL0D6V = accounts[0]
		const addressJSAEJq = await FairStockEquityijBacG.setLPT.call(addressLs7BdEr, boolIc559ID, {from: accounts[2]});
//		const addressGHNXA55 = await FairStockEquityijBacG.withdrawMTCallback.call(addressJbL0D6V, uintkaYc9yh, uintdSc8TDt, {from: accounts[1]});

		await expect(FairStockEquityijBacG.withdrawMTCallback.call(addressJbL0D6V, uintkaYc9yh, uintdSc8TDt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresstYtF5XS = accounts[2]
		const addressdOZI1eV = accounts[0]
		const addressPE2mCwE = accounts[4]
		const addressyc183E = accounts[0]
		const uintoXQ0AMI = BigInt("803")
		const FairStockEquityijBacG = await FairStockEquity.new(addresstYtF5XS, addressdOZI1eV, addressPE2mCwE, addressyc183E, uintoXQ0AMI, {from: accounts[2]});
		const uintFxBLiHV = BigInt("1160")
		const uintHiudQ10 = BigInt("1214")
		const uintWQAr7o8 = BigInt("1270")
		const uintCHqykdn = BigInt("1771")
		const addressBv9hBYD = accounts[4]
//		await FairStockEquityijBacG.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ta60Iv = await FairStockEquityijBacG.setStartTime.call(uintFxBLiHV, {from: accounts[0]});
//		const uint256mUW1VBm = await FairStockEquityijBacG.depositBonus.call(uintHiudQ10, {from: accounts[4]});
//		const addressGHNXA55 = await FairStockEquityijBacG.withdrawMTCallback.call(addressBv9hBYD, uintCHqykdn, uintWQAr7o8, {from: accounts[1]});

		await expect(FairStockEquityijBacG.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address3GLCrG = accounts[4]
		const addressOVsWzPK = accounts[0]
		const addressYJMrBmw = accounts[3]
		const addressmVTHQtN = accounts[2]
		const uintV2FlBdE = BigInt("686")
		const FairStockEquityBomYo5S = await FairStockEquity.new(address3GLCrG, addressOVsWzPK, addressYJMrBmw, addressmVTHQtN, uintV2FlBdE, {from: accounts[3]});
		const uintiDO6kMq = BigInt("33")
		const uintRyacYTe = BigInt("1636")
		const addressyrKOqe = "0x0000000000000000000000000000000000000001"
//		await FairStockEquityBomYo5S.f.call({from: accounts[4]});
//		const addressAxMZL5c = await FairStockEquityBomYo5S.withdrawMTCallback.call(addressyrKOqe, uintRyacYTe, uintiDO6kMq, {from: accounts[3]});
//		await FairStockEquityBomYo5S.onlyDataSource.call({from: accounts[5]});

		await expect(FairStockEquityBomYo5S.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressGMhOqxr = accounts[4]
		const addressHXDdF0l = accounts[3]
		const addresssOBtgIo = accounts[0]
		const addressVblMcO9 = accounts[3]
		const uintlXLGU6k = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addressGMhOqxr, addressHXDdF0l, addresssOBtgIo, addressVblMcO9, uintlXLGU6k, {from: accounts[0]});
		const uintNV0Tb2z = BigInt("763")
//		await FairStockEquityGZclXyc.withdrawPJ.call({from: accounts[0]});
//		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintNV0Tb2z, {from: accounts[2]});

		await expect(FairStockEquityGZclXyc.withdrawPJ.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressdLWtnQF = accounts[2]
		const addressRaa7htu = accounts[0]
		const addressWqJJvM9 = accounts[4]
		const addressFy8QNPT = accounts[0]
		const uintWSIT67E = BigInt("803")
		const FairStockEquityijBacG = await FairStockEquity.new(addressdLWtnQF, addressRaa7htu, addressWqJJvM9, addressFy8QNPT, uintWSIT67E, {from: accounts[2]});
		const uintsEYunA = BigInt("703")
		const uinttTDKguq = BigInt("1004")
		const addressCSWJlXc = accounts[3]
		const uintNoEojhu = BigInt("376")
		const uintV8Xdgsj = BigInt("157")
		const uintzLxbW5d = BigInt("1771")
		const addressjRsNtdT = accounts[5]
//		const addressF27qIB = await FairStockEquityijBacG.withdrawBonusCallback.call(addressCSWJlXc, uinttTDKguq, uintsEYunA, {from: accounts[0]});
//		const uint256zmjDrX = await FairStockEquityijBacG.invest.call(uintNoEojhu, {from: accounts[1]});
//		await FairStockEquityijBacG.onlyDataSource.call({from: accounts[1]});
//		const addressGHNXA55 = await FairStockEquityijBacG.withdrawMTCallback.call(addressjRsNtdT, uintzLxbW5d, uintV8Xdgsj, {from: accounts[1]});

		await expect(FairStockEquityijBacG.withdrawBonusCallback.call(addressCSWJlXc, uinttTDKguq, uintsEYunA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJ83aMjg = accounts[4]
		const addressOvBWAge = accounts[3]
		const addressY1ikjXB = accounts[0]
		const addressdzHAAC = accounts[3]
		const uintILxOrhf = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addressJ83aMjg, addressOvBWAge, addressY1ikjXB, addressdzHAAC, uintILxOrhf, {from: accounts[0]});
		const uintI2Hp20a = BigInt("1921")
		const uintOUfvQU5 = BigInt("2037")
		const addressIuCfA0i = accounts[4]
		const uintofdj5Pr = BigInt("569")
		const addressH1D8bWH = accounts[4]
		const uintktM7O6H = BigInt("1356")
		const uintQmDNlvG = BigInt("310")
		const addressvWESaH5 = accounts[0]
		const uintG4C0q7t = BigInt("760")
		const addressO8HIpgt = await FairStockEquityGZclXyc.setModule.call(addressIuCfA0i, uintOUfvQU5, uintI2Hp20a, {from: accounts[0]});
//		const addresskwUvsRM = await FairStockEquityGZclXyc.depositLPT.call(addressH1D8bWH, uintofdj5Pr, {from: accounts[3]});
//		const addresstcjHYwh = await FairStockEquityGZclXyc.setModule.call(addressvWESaH5, uintQmDNlvG, uintktM7O6H, {from: accounts[3]});
//		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintG4C0q7t, {from: accounts[2]});

		await expect(FairStockEquityGZclXyc.depositLPT.call(addressH1D8bWH, uintofdj5Pr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressP5x080q = accounts[2]
		const addressdZQUVV = accounts[0]
		const addressxGOdvcT = accounts[4]
		const addresshhzn2xy = accounts[0]
		const uintFn6baYb = BigInt("803")
		const FairStockEquityijBacG = await FairStockEquity.new(addressP5x080q, addressdZQUVV, addressxGOdvcT, addresshhzn2xy, uintFn6baYb, {from: accounts[2]});
		const uintumCZmDp = BigInt("1111")
		const uinttnrBhjA = BigInt("157")
		const uintj1EdEfs = BigInt("1771")
		const addressneeA7w = accounts[4]
//		const uint256Cnss73R = await FairStockEquityijBacG.bonus.call(uintumCZmDp, {from: accounts[0]});
//		const addressGHNXA55 = await FairStockEquityijBacG.withdrawMTCallback.call(addressneeA7w, uintj1EdEfs, uinttnrBhjA, {from: accounts[1]});

		await expect(FairStockEquityijBacG.bonus.call(uintumCZmDp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmJEYKlN = accounts[4]
		const addressrZuTMAT = accounts[3]
		const addressGXTW85l = accounts[0]
		const addressP0RuD4b = accounts[3]
		const uint9mfCSF = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addressmJEYKlN, addressrZuTMAT, addressGXTW85l, addressP0RuD4b, uint9mfCSF, {from: accounts[0]});
		const uintpdRituV = BigInt("747")
		const uintHLDh2kx = BigInt("1276")
		const uintggzniRQ = BigInt("1156")
		const addresshjOQdD = accounts[0]
		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintpdRituV, {from: accounts[2]});
//		const addressqj2p9Xd = await FairStockEquityGZclXyc.withdrawMTCallback.call(addresshjOQdD, uintggzniRQ, uintHLDh2kx, {from: accounts[3]});

		await expect(FairStockEquityGZclXyc.withdrawMTCallback.call(addresshjOQdD, uintggzniRQ, uintHLDh2kx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressIdV22Qf = accounts[4]
		const addressifCvBFM = accounts[3]
		const addressxY9wQSN = accounts[0]
		const addressGnVUq3A = accounts[3]
		const uintfTm0z1I = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addressIdV22Qf, addressifCvBFM, addressxY9wQSN, addressGnVUq3A, uintfTm0z1I, {from: accounts[0]});
		const uintCG9KlQf = BigInt("1269")
		const uintQW3IUH = BigInt("760")
		const uint256dqtYFIu = await FairStockEquityGZclXyc.setStartTime.call(uintCG9KlQf, {from: accounts[0]});
		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintQW3IUH, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressKqoSHCg = accounts[4]
		const addressICVBIkm = accounts[3]
		const addressD8SdoBd = accounts[0]
		const addressdPXAwbZ = accounts[3]
		const uintAszAcbY = BigInt("897")
		const FairStockEquityGZclXyc = await FairStockEquity.new(addressKqoSHCg, addressICVBIkm, addressD8SdoBd, addressdPXAwbZ, uintAszAcbY, {from: accounts[0]});
		const uintbepPXko = BigInt("101")
		const uintlkizhH = BigInt("782")
		const uintI3smHaC = BigInt("760")
		const uint256LzuVnMv = await FairStockEquityGZclXyc.getCostAmount.call(uintbepPXko, {from: accounts[1]});
//		const uint256rAJrlAI = await FairStockEquityGZclXyc.setStartTime.call(uintlkizhH, {from: accounts[0]});
//		const uint256z80ywSq = await FairStockEquityGZclXyc.getCostAmount.call(uintI3smHaC, {from: accounts[2]});

		await expect(FairStockEquityGZclXyc.setStartTime.call(uintlkizhH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})