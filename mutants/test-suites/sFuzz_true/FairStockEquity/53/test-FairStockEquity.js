const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addresst2AN1UX = accounts[3]
		const addressS76TlB = accounts[3]
		const addressXY5iOT = accounts[2]
		const addressm8QJ7vz = accounts[0]
		const uint6ONhY9 = BigInt("1388")
		const FairStockEquitygVfs9v = await FairStockEquity.new(addresst2AN1UX, addressS76TlB, addressXY5iOT, addressm8QJ7vz, uint6ONhY9, {from: accounts[5]});
		const addressaauO7oB = accounts[3]
		const uintTuCDcOz = BigInt("1092")
		const addressD6ovazb = accounts[3]
		const addressjZkbalu = accounts[2]
		const uintKR80kkk = BigInt("1043")
		const uintPZLTI5L = BigInt("1377")
		const addressjS95Ab6 = accounts[2]
//		const addressxCaJEQ = await FairStockEquitygVfs9v.setDataSource.call(addressaauO7oB, {from: accounts[4]});
//		const addressoTTkRA4 = await FairStockEquitygVfs9v.depositLPT.call(addressD6ovazb, uintTuCDcOz, {from: accounts[2]});
//		const addressKqnaYV = await FairStockEquitygVfs9v.setDataSource.call(addressjZkbalu, {from: accounts[2]});
//		const uint256j2KkDFu = await FairStockEquitygVfs9v.getCostAmount.call(uintKR80kkk, {from: accounts[3]});
//		const addressD5Jn16 = await FairStockEquitygVfs9v.withdrawLPT.call(addressjS95Ab6, uintPZLTI5L, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitygVfs9v.setDataSource.call(addressaauO7oB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbOfTpwg = accounts[3]
		const addressfJn7xeY = "0x0000000000000000000000000000000000000001"
		const addressuAQ1e4k = "0x0000000000000000000000000000000000000001"
		const addresshKn0eTX = accounts[0]
		const uintdqZGNwI = BigInt("1357")
		const FairStockEquityXUUraNI = await FairStockEquity.new(addressbOfTpwg, addressfJn7xeY, addressuAQ1e4k, addresshKn0eTX, uintdqZGNwI, {from: accounts[4]});
		const uintP4AfrUH = BigInt("1980")
		const uint6Ee3tI = BigInt("27")
		const addressviBEuD2 = accounts[3]
		const boolH7XnAh = true
		const addressGhgsZPA = accounts[3]
		const uintKao2wiU = BigInt("516")
		const uinty3fwxc2 = BigInt("758")
		const addresscFwXr39 = accounts[0]
//		await FairStockEquityXUUraNI.onlyDataSource.call({from: accounts[2]});
//		const address2BoJUX = await FairStockEquityXUUraNI.setModule.call(addressviBEuD2, uint6Ee3tI, uintP4AfrUH, {from: accounts[5]});
//		const addressgD0YO9j = await FairStockEquityXUUraNI.setLPT.call(addressGhgsZPA, boolH7XnAh, {from: accounts[3]});
//		const addresseXeusIo = await FairStockEquityXUUraNI.withdrawBonusCallback.call(addresscFwXr39, uinty3fwxc2, uintKao2wiU, {from: accounts[4]});

		await expect(FairStockEquityXUUraNI.onlyDataSource.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressA8djvdq = accounts[1]
		const addresswVjbwHn = accounts[3]
		const addressaQwmGbA = "0x0000000000000000000000000000000000000001"
		const addressbjfk5qP = accounts[4]
		const uinteMccvfa = BigInt("1996")
		const FairStockEquityHxaGuGJ = await FairStockEquity.new(addressA8djvdq, addresswVjbwHn, addressaQwmGbA, addressbjfk5qP, uinteMccvfa, {from: accounts[1]});
		const uints2mNkCT = BigInt("295")
		const boolGiNlq6Y = true
		const addresssgYIxUp = accounts[2]
//		const uint256rOs3twz = await FairStockEquityHxaGuGJ.bonus.call(uints2mNkCT, {from: accounts[3]});
//		await FairStockEquityHxaGuGJ.withdrawMT.call({from: accounts[4]});
//		const addressLI66M03 = await FairStockEquityHxaGuGJ.setLPT.call(addresssgYIxUp, boolGiNlq6Y, {from: accounts[4]});
//		await FairStockEquityHxaGuGJ.withdrawBonus.call({from: accounts[5]});

		await expect(FairStockEquityHxaGuGJ.bonus.call(uints2mNkCT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZCZq40 = accounts[2]
		const addresssVE44Ub = accounts[3]
		const addressLYEsK9p = "0x0000000000000000000000000000000000000001"
		const addressYNtl6SC = "0x0000000000000000000000000000000000000001"
		const uintSZNbuuT = BigInt("881")
		const FairStockEquity0wzBfH = await FairStockEquity.new(addressZCZq40, addresssVE44Ub, addressLYEsK9p, addressYNtl6SC, uintSZNbuuT, {from: accounts[4]});
		const uintUPaAoY8 = BigInt("1679")
		const uintcXPZDSl = BigInt("1119")
		const uintzAcTdU = BigInt("914")
		const addressxx88KcL = accounts[2]
		const uintYhmhKH7 = BigInt("1165")
//		const uint256fcx5q4i = await FairStockEquity0wzBfH.setProfitPercentMT.call(uintUPaAoY8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressy9GfTtj = await FairStockEquity0wzBfH.withdrawMTCallback.call(addressxx88KcL, uintzAcTdU, uintcXPZDSl, {from: accounts[3]});
//		await FairStockEquity0wzBfH.withdrawMT.call({from: accounts[1]});
//		await FairStockEquity0wzBfH.withdrawPJ.call({from: accounts[4]});
//		const uint256lWyJSzA = await FairStockEquity0wzBfH.bonus.call(uintYhmhKH7, {from: accounts[4]});

		await expect(FairStockEquity0wzBfH.setProfitPercentMT.call(uintUPaAoY8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAdd88h = accounts[4]
		const addressl1nEAHU = "0x0000000000000000000000000000000000000001"
		const addressSWmTe23 = accounts[0]
		const addressw0M2XL0 = accounts[0]
		const uintn9aSpVd = BigInt("228")
		const FairStockEquitykUrnr4R = await FairStockEquity.new(addressAdd88h, addressl1nEAHU, addressSWmTe23, addressw0M2XL0, uintn9aSpVd, {from: accounts[0]});
		const uintDIDGWlJ = BigInt("1154")
		const addresscAmZBkv = accounts[5]
		const uintnE9h4NT = BigInt("1921")
		const uintxgHV5IQ = BigInt("869")
		const addresso7iyNEZ = accounts[4]
		const uint3XyKa1 = BigInt("613")
		const addressi5FHcyT = accounts[5]
//		const addressLP6sLZB = await FairStockEquitykUrnr4R.depositLPT.call(addresscAmZBkv, uintDIDGWlJ, {from: accounts[3]});
//		const addressLnx4AXg = await FairStockEquitykUrnr4R.withdrawMTCallback.call(addresso7iyNEZ, uintxgHV5IQ, uintnE9h4NT, {from: accounts[3]});
//		const addressjwRwfvu = await FairStockEquitykUrnr4R.depositLPT.call(addressi5FHcyT, uint3XyKa1, {from: accounts[2]});

		await expect(FairStockEquitykUrnr4R.depositLPT.call(addresscAmZBkv, uintDIDGWlJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressGCkXY1Q = accounts[1]
		const addresst9aGzGt = accounts[4]
		const addressARNdi8i = accounts[4]
		const addressK398Rp = "0x0000000000000000000000000000000000000001"
		const uintfM7FeJQ = BigInt("1672")
		const FairStockEquitybrLZsi7 = await FairStockEquity.new(addressGCkXY1Q, addresst9aGzGt, addressARNdi8i, addressK398Rp, uintfM7FeJQ, {from: accounts[0]});
		const uintXJ7VbkQ = BigInt("1969")
		const uintsKa1AGN = BigInt("1785")
		const addressfq6voJr = accounts[5]
		const addressfeyo4Kq = accounts[2]
		const uintBa0DX9T = BigInt("699")
		const uintYzstLIQ = BigInt("1956")
		const addressWGs3rBu = accounts[3]
//		await FairStockEquitybrLZsi7.withdrawBonus.call({from: accounts[1]});
//		const addressAyv5i4z = await FairStockEquitybrLZsi7.withdrawMTCallback.call(addressfq6voJr, uintsKa1AGN, uintXJ7VbkQ, {from: "0x0000000000000000000000000000000000000001"});
//		const addresstUrgVaD = await FairStockEquitybrLZsi7.setDataSource.call(addressfeyo4Kq, {from: accounts[1]});
//		const addressO6gC93 = await FairStockEquitybrLZsi7.setModule.call(addressWGs3rBu, uintYzstLIQ, uintBa0DX9T, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitybrLZsi7.withdrawBonus.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuEdF35 = accounts[2]
		const addressrOlrmsb = accounts[5]
		const addressHA3C8yL = accounts[3]
		const address5FeKaW = accounts[2]
		const uintObVbbLb = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressuEdF35, addressrOlrmsb, addressHA3C8yL, address5FeKaW, uintObVbbLb, {from: accounts[4]});
		const uintvbT4Nyo = BigInt("536")
		const uintW1Bsx7D = BigInt("308")
		const addressPtZxboE = accounts[3]
		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintvbT4Nyo, {from: accounts[1]});
//		const addressOPTIjiq = await FairStockEquityvaBWc07.depositLPT.call(addressPtZxboE, uintW1Bsx7D, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.depositLPT.call(addressPtZxboE, uintW1Bsx7D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPys3T4t = accounts[2]
		const addresstCheZT8 = accounts[5]
		const addressWYWepNr = accounts[3]
		const addresstmQIRlc = accounts[2]
		const uintXftTQAN = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressPys3T4t, addresstCheZT8, addressWYWepNr, addresstmQIRlc, uintXftTQAN, {from: accounts[4]});
		const uintQFaioMH = BigInt("1634")
		const uintcMn4aO = BigInt("1473")
		const uintnk1ZRU9 = BigInt("806")
		const uinteaGx9Zz = BigInt("1709")
		const addressom5SH70 = accounts[5]
		const uintv2y7N1V = BigInt("1851")
		const uintClEKr8m = BigInt("536")
		const uintsvY8Ok = BigInt("308")
		const addresssomPIF = accounts[3]
//		const addressCY2Cxx = await FairStockEquityvaBWc07.business.call(addressom5SH70, uinteaGx9Zz, uintnk1ZRU9, uintcMn4aO, uintQFaioMH, {from: accounts[1]});
//		const uint256s0n3GN = await FairStockEquityvaBWc07.setGasFeeForCallback.call(uintv2y7N1V, {from: accounts[1]});
//		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintClEKr8m, {from: accounts[1]});
//		const addressOPTIjiq = await FairStockEquityvaBWc07.depositLPT.call(addresssomPIF, uintsvY8Ok, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.business.call(addressom5SH70, uinteaGx9Zz, uintnk1ZRU9, uintcMn4aO, uintQFaioMH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressr9jUAg = accounts[2]
		const addressqRDOmn2 = accounts[5]
		const addressEp8N6cx = accounts[3]
		const addresswkups6L = accounts[2]
		const uintujSH9dm = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressr9jUAg, addressqRDOmn2, addressEp8N6cx, addresswkups6L, uintujSH9dm, {from: accounts[4]});
		const uint53mOFk = BigInt("810")
		const uintsIi58Uf = BigInt("1021")
		const addressF6Zqdj5 = accounts[3]
		const uintUqKkHBB = BigInt("1149")
		const uintkz0nllK = BigInt("1659")
		const addressyIhgC0t = accounts[0]
		const uintlu9m4H = BigInt("551")
		const uintdeeYPY0 = BigInt("308")
		const addressikwmD1X = accounts[3]
//		const addressS3uYMMG = await FairStockEquityvaBWc07.withdrawMTCallback.call(addressF6Zqdj5, uintsIi58Uf, uint53mOFk, {from: accounts[2]});
//		const addressoWNvpKR = await FairStockEquityvaBWc07.setModule.call(addressyIhgC0t, uintkz0nllK, uintUqKkHBB, {from: accounts[5]});
//		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintlu9m4H, {from: accounts[1]});
//		const addressOPTIjiq = await FairStockEquityvaBWc07.depositLPT.call(addressikwmD1X, uintdeeYPY0, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.withdrawMTCallback.call(addressF6Zqdj5, uintsIi58Uf, uint53mOFk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressSZENszC = accounts[2]
		const addressZhQWfW = accounts[5]
		const addressu1DDIla = accounts[3]
		const addresseErYhSd = accounts[2]
		const uintoXxXM8X = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressSZENszC, addressZhQWfW, addressu1DDIla, addresseErYhSd, uintoXxXM8X, {from: accounts[4]});
		const uintJGnHeVg = BigInt("1772")
		const addressm4oTBI6 = accounts[4]
		const uintSkRxoKT = BigInt("483")
//		const addressGPozr8e = await FairStockEquityvaBWc07.withdrawLPT.call(addressm4oTBI6, uintJGnHeVg, {from: accounts[5]});
//		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintSkRxoKT, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.withdrawLPT.call(addressm4oTBI6, uintJGnHeVg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressUJD6CHx = accounts[2]
		const addresswurPOLX = accounts[5]
		const addressAVWqI1e = accounts[3]
		const addressZuN6gDA = accounts[2]
		const uintw8XgalN = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressUJD6CHx, addresswurPOLX, addressAVWqI1e, addressZuN6gDA, uintw8XgalN, {from: accounts[4]});
		const uintsMlfuLh = BigInt("536")
		const uintkrK2mNR = BigInt("1302")
		const uinthmitBmm = BigInt("1921")
		const addressgIAjaKP = "0x0000000000000000000000000000000000000001"
		const uintaRuMM5i = BigInt("308")
		const addressbMpOQkz = accounts[4]
		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintsMlfuLh, {from: accounts[1]});
//		const addressrZhyCzP = await FairStockEquityvaBWc07.withdrawBonusCallback.call(addressgIAjaKP, uinthmitBmm, uintkrK2mNR, {from: accounts[2]});
//		const addressOPTIjiq = await FairStockEquityvaBWc07.depositLPT.call(addressbMpOQkz, uintaRuMM5i, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.withdrawBonusCallback.call(addressgIAjaKP, uinthmitBmm, uintkrK2mNR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressf3ZYzSj = accounts[2]
		const addressRvPAvK3 = accounts[5]
		const addressjuoaKtw = accounts[3]
		const addressvyFiVzy = accounts[2]
		const uintDI1NCHB = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressf3ZYzSj, addressRvPAvK3, addressjuoaKtw, addressvyFiVzy, uintDI1NCHB, {from: accounts[4]});
		const uintzSq6Qck = BigInt("841")
		const uintMf5h9h = BigInt("94")
		const uintnTk3uI = BigInt("1925")
		const uintm6gd7j = BigInt("1147")
		const uintCEnliDb = BigInt("1713")
		const uintjcqVWL = BigInt("1376")
		const uintIBcwxut = BigInt("536")
//		const uint256ldqH8LM = await FairStockEquityvaBWc07.invest.call(uintzSq6Qck, {from: accounts[0]});
//		const uint256QDYVogH = await FairStockEquityvaBWc07.setDegree.call(uintjcqVWL, uintCEnliDb, uintm6gd7j, uintnTk3uI, uintMf5h9h, {from: accounts[2]});
//		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintIBcwxut, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.invest.call(uintzSq6Qck, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressTmQPul7 = accounts[2]
		const addresstMxFJj = accounts[5]
		const addressI61ZM9A = accounts[3]
		const addressUmLOxz = accounts[2]
		const uint7Cb2eA = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressTmQPul7, addresstMxFJj, addressI61ZM9A, addressUmLOxz, uint7Cb2eA, {from: accounts[4]});
		const uintQtMN4Ew = BigInt("1080")
		const uinty19WNs0 = BigInt("494")
//		const uint256SuL2sz5 = await FairStockEquityvaBWc07.reduceShare.call(uintQtMN4Ew, {from: accounts[2]});
//		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uinty19WNs0, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.reduceShare.call(uintQtMN4Ew, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressg7mKfLr = accounts[2]
		const addressFMqeSwF = accounts[5]
		const addressSUqVhdi = accounts[3]
		const addresslbHxgR = accounts[2]
		const uintmTcOiPx = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressg7mKfLr, addressFMqeSwF, addressSUqVhdi, addresslbHxgR, uintmTcOiPx, {from: accounts[4]});
		const uintI03aOw5 = BigInt("536")
		const uintfuTFsKi = BigInt("2004")
		const uintcmPDsR1 = BigInt("308")
		const address3Iif6i = accounts[3]
		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintI03aOw5, {from: accounts[1]});
//		const uint256tnqrUK6 = await FairStockEquityvaBWc07.depositBonus.call(uintfuTFsKi, {from: accounts[2]});
//		await FairStockEquityvaBWc07.checkStart.call({from: accounts[3]});
//		await FairStockEquityvaBWc07.checkStart.call({from: accounts[0]});
//		const addressOPTIjiq = await FairStockEquityvaBWc07.depositLPT.call(address3Iif6i, uintcmPDsR1, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.depositBonus.call(uintfuTFsKi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressK9JQ8tj = accounts[2]
		const addressxNYDax = accounts[5]
		const addressarUbKY7 = accounts[3]
		const addressdUBM3lC = accounts[2]
		const uintcPxG8ct = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressK9JQ8tj, addressxNYDax, addressarUbKY7, addressdUBM3lC, uintcPxG8ct, {from: accounts[4]});
		const uintunO8lS = BigInt("1209")
		const uintF6dhhwf = BigInt("1282")
		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintunO8lS, {from: accounts[1]});
//		const uint256qwKv16q = await FairStockEquityvaBWc07.setStartTime.call(uintF6dhhwf, {from: accounts[4]});

		await expect(FairStockEquityvaBWc07.setStartTime.call(uintF6dhhwf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslNvVzh8 = accounts[2]
		const addressBWcdB7 = accounts[5]
		const addressulExew2 = accounts[3]
		const addressiTiaKgO = accounts[2]
		const uintZPsUwf2 = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addresslNvVzh8, addressBWcdB7, addressulExew2, addressiTiaKgO, uintZPsUwf2, {from: accounts[4]});
		const uintoHlPGlf = BigInt("1959")
		const uintAfGrgT = BigInt("184")
		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintoHlPGlf, {from: accounts[1]});
//		await FairStockEquityvaBWc07.withdrawMT.call({from: accounts[1]});
//		const uint256UH4anBq = await FairStockEquityvaBWc07.setStartTime.call(uintAfGrgT, {from: accounts[5]});

		await expect(FairStockEquityvaBWc07.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshMIPaYm = accounts[2]
		const addressTGiHXTz = accounts[5]
		const addresse2Pr3vf = accounts[3]
		const addresstFCGvlI = accounts[2]
		const uintyt57fsx = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addresshMIPaYm, addressTGiHXTz, addresse2Pr3vf, addresstFCGvlI, uintyt57fsx, {from: accounts[4]});
		const uintvCqnYr1 = BigInt("536")
		const uintRxLl1R6 = BigInt("308")
		const addressea6zlzy = accounts[6]
//		await FairStockEquityvaBWc07.withdrawPJ.call({from: accounts[4]});
//		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintvCqnYr1, {from: accounts[1]});
//		const addressOPTIjiq = await FairStockEquityvaBWc07.depositLPT.call(addressea6zlzy, uintRxLl1R6, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.withdrawPJ.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressVShROq7 = accounts[2]
		const addressJTALo2p = accounts[5]
		const address4nFxt0 = accounts[3]
		const addressuadGEpJ = accounts[2]
		const uintB8UHl1 = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressVShROq7, addressJTALo2p, address4nFxt0, addressuadGEpJ, uintB8UHl1, {from: accounts[4]});
		const uint4lAgPu = BigInt("629")
//		await FairStockEquityvaBWc07.f.call({from: accounts[2]});
//		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uint4lAgPu, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvC2dxGS = accounts[2]
		const addressou0Gmjp = accounts[5]
		const addressXrkpLPY = accounts[3]
		const addressuT6sGv6 = accounts[2]
		const uintEi39Gan = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressvC2dxGS, addressou0Gmjp, addressXrkpLPY, addressuT6sGv6, uintEi39Gan, {from: accounts[4]});
		const boolGeEJfcj = true
		const addressSp8lDNd = accounts[3]
		const uintHhML7f9 = BigInt("517")
		const addressFZpu0wN = await FairStockEquityvaBWc07.setLPT.call(addressSp8lDNd, boolGeEJfcj, {from: accounts[4]});
		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintHhML7f9, {from: accounts[1]});
	});

	it('test for FairStockEquity', async () => {
		const addressXPCJ1G = accounts[2]
		const addressJDdtl1J = accounts[4]
		const addressTu6h8t6 = "0x0000000000000000000000000000000000000001"
		const addressXgINyTP = accounts[0]
		const uintNC5qXL0 = BigInt("1213")
		const FairStockEquityDZCgCml = await FairStockEquity.new(addressXPCJ1G, addressJDdtl1J, addressTu6h8t6, addressXgINyTP, uintNC5qXL0, {from: "0x0000000000000000000000000000000000000001"});
		const uintiIy39q = BigInt("950")
		const uintVHkOpNT = BigInt("438")
		const addressqaXDVQU = accounts[1]
		const uintTnz1DOO = BigInt("1007")
		const uint5wqHZA = BigInt("1453")
		const uintHIsKLJ = BigInt("19")
		const addressFP2wlJR = await FairStockEquityDZCgCml.withdrawMTCallback.call(addressqaXDVQU, uintVHkOpNT, uintiIy39q, {from: accounts[2]});
		const uint256Zdgsrz = await FairStockEquityDZCgCml.setProfitPercentPJ.call(uintTnz1DOO, {from: accounts[0]});
		const uint256B7vOWKd = await FairStockEquityDZCgCml.depositBonus.call(uint5wqHZA, {from: accounts[5]});
		const uint256VaeAS38 = await FairStockEquityDZCgCml.setProfitPercentPJ.call(uintHIsKLJ, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressUj7wolJ = accounts[2]
		const addresszf5bQg = accounts[5]
		const addressu1aFhKr = accounts[3]
		const address84hSqJ = accounts[2]
		const uintkiHnfKl = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressUj7wolJ, addresszf5bQg, addressu1aFhKr, address84hSqJ, uintkiHnfKl, {from: accounts[4]});
		const uintGAW4slC = BigInt("218")
		const uintJT8M7ni = BigInt("254")
		const addressdguDPvi = accounts[1]
		const uintjOZCTTw = BigInt("308")
		const addressNZd1CIS = accounts[3]
		const addressWWxCzl3 = await FairStockEquityvaBWc07.setModule.call(addressdguDPvi, uintJT8M7ni, uintGAW4slC, {from: accounts[4]});
//		const addressOPTIjiq = await FairStockEquityvaBWc07.depositLPT.call(addressNZd1CIS, uintjOZCTTw, {from: accounts[1]});
//		await FairStockEquityvaBWc07.withdrawPJ.call({from: accounts[0]});

		await expect(FairStockEquityvaBWc07.depositLPT.call(addressNZd1CIS, uintjOZCTTw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address6VgSoy = accounts[2]
		const addressR8Ap0Bu = accounts[5]
		const addressaGO8Qa8 = accounts[3]
		const addressQArgdqe = accounts[2]
		const uintGxE2bQs = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(address6VgSoy, addressR8Ap0Bu, addressaGO8Qa8, addressQArgdqe, uintGxE2bQs, {from: accounts[4]});
		const uintfyxXrp = BigInt("1035")
		const uinta8BicLw = BigInt("1669")
		const addressfIfqToY = accounts[4]
		const uintaQCdlZU = BigInt("494")
//		const uint256E3tuDsb = await FairStockEquityvaBWc07.bonus.call(uintfyxXrp, {from: accounts[2]});
//		const addressOnRO3w5 = await FairStockEquityvaBWc07.withdrawLPT.call(addressfIfqToY, uinta8BicLw, {from: accounts[1]});
//		const uint256WlABOq1 = await FairStockEquityvaBWc07.getCostAmount.call(uintaQCdlZU, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.bonus.call(uintfyxXrp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressW30oANz = accounts[2]
		const addressCaXw9k4 = accounts[5]
		const addressnhnIZkL = accounts[3]
		const addressbZBimBc = accounts[2]
		const uintYe99ctU = BigInt("1622")
		const FairStockEquityvaBWc07 = await FairStockEquity.new(addressW30oANz, addressCaXw9k4, addressnhnIZkL, addressbZBimBc, uintYe99ctU, {from: accounts[4]});
		const uintmRNgfq = BigInt("0")
		const uintoloSBkn = BigInt("1198")
		const addressfMfLDhz = accounts[0]
		const uintYU7mLE4 = BigInt("48")
		const uintP7KtUX = BigInt("308")
		const addressH3Os47M = accounts[3]
//		const addressOXKzs6P = await FairStockEquityvaBWc07.withdrawBonusCallback.call(addressfMfLDhz, uintoloSBkn, uintmRNgfq, {from: accounts[2]});
//		const uint256nvKx8K = await FairStockEquityvaBWc07.setProfitPercentBonus.call(uintYU7mLE4, {from: accounts[5]});
//		const addressOPTIjiq = await FairStockEquityvaBWc07.depositLPT.call(addressH3Os47M, uintP7KtUX, {from: accounts[1]});

		await expect(FairStockEquityvaBWc07.withdrawBonusCallback.call(addressfMfLDhz, uintoloSBkn, uintmRNgfq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})