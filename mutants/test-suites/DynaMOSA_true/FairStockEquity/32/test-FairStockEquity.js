const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressl0FnRwD = accounts[2]
		const addressu1q8d2l = accounts[4]
		const addresskhRJyam = accounts[3]
		const addressfquUZ8R = accounts[0]
		const uintkgkjG7 = BigInt("724")
		const FairStockEquityC64wbc5 = await FairStockEquity.new(addressl0FnRwD, addressu1q8d2l, addresskhRJyam, addressfquUZ8R, uintkgkjG7, {from: accounts[1]});
		const addressIH11lbh = accounts[4]
		const uintrD31Qh8 = BigInt("837")
		const uintzOA3x6E = BigInt("1592")
		const uintx46q7KK = BigInt("1213")
//		const addressCBoOUg7 = await FairStockEquityC64wbc5.setDataSource.call(addressIH11lbh, {from: accounts[4]});
//		const uint256KjeljHi = await FairStockEquityC64wbc5.invest.call(uintrD31Qh8, {from: accounts[5]});
//		await FairStockEquityC64wbc5.f.call({from: accounts[2]});
//		const uint256oqzbtPp = await FairStockEquityC64wbc5.depositBonus.call(uintzOA3x6E, {from: accounts[1]});
//		const uint256qvkqjNF = await FairStockEquityC64wbc5.depositBonus.call(uintx46q7KK, {from: accounts[3]});

		await expect(FairStockEquityC64wbc5.setDataSource.call(addressIH11lbh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNOottK9 = accounts[0]
		const addressVLa5W9 = "0x0000000000000000000000000000000000000001"
		const addressSFHyZcp = accounts[0]
		const addressvs2kmu = accounts[4]
		const uint9TJqz8 = BigInt("1231")
		const FairStockEquitybF4otCO = await FairStockEquity.new(addressNOottK9, addressVLa5W9, addressSFHyZcp, addressvs2kmu, uint9TJqz8, {from: accounts[4]});
		const uintxyAdrRL = BigInt("1676")
		const uintvmBWXWE = BigInt("1184")
		const uinty1hwu6Y = BigInt("1111")
		const uintt0EXhil = BigInt("1682")
		const addressASYkBYQ = accounts[1]
//		const uint256soxbTmR = await FairStockEquitybF4otCO.reduceShare.call(uintxyAdrRL, {from: accounts[0]});
//		await FairStockEquitybF4otCO.withdrawMT.call({from: accounts[2]});
//		await FairStockEquitybF4otCO.withdrawBonus.call({from: accounts[4]});
//		const uint256sPTLBHw = await FairStockEquitybF4otCO.setProfitPercentBonus.call(uintvmBWXWE, {from: accounts[2]});
//		const addressTiY4Av = await FairStockEquitybF4otCO.withdrawMTCallback.call(addressASYkBYQ, uintt0EXhil, uinty1hwu6Y, {from: accounts[5]});
//		await FairStockEquitybF4otCO.checkStart.call({from: accounts[3]});

		await expect(FairStockEquitybF4otCO.reduceShare.call(uintxyAdrRL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslOXLwa1 = accounts[1]
		const addresscp8WmyA = accounts[4]
		const addressMdr8FDz = accounts[3]
		const address7NHxHm = accounts[2]
		const uintDq0e0Lr = BigInt("1604")
		const FairStockEquityS02Xs3q = await FairStockEquity.new(addresslOXLwa1, addresscp8WmyA, addressMdr8FDz, address7NHxHm, uintDq0e0Lr, {from: accounts[1]});
		const uintFqGKC9 = BigInt("1484")
//		await FairStockEquityS02Xs3q.withdrawMT.call({from: accounts[3]});
//		const uint256KGAFvhX = await FairStockEquityS02Xs3q.reduceShare.call(uintFqGKC9, {from: accounts[4]});
//		await FairStockEquityS02Xs3q.f.call({from: accounts[0]});

		await expect(FairStockEquityS02Xs3q.withdrawMT.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressuSih8Sf = accounts[4]
		const addressRMb4cjQ = accounts[5]
		const addressmy9r0AH = accounts[0]
		const addressnp4LI9o = accounts[1]
		const uintp3iJZX4 = BigInt("1123")
		const FairStockEquityEQB4oLG = await FairStockEquity.new(addressuSih8Sf, addressRMb4cjQ, addressmy9r0AH, addressnp4LI9o, uintp3iJZX4, {from: accounts[0]});
		const uintd6jn0R = BigInt("341")
		const uintYFroepX = BigInt("121")
		const uintokTJpGE = BigInt("757")
		const uintGENWXeA = BigInt("1196")
		const addresszzSJHK = accounts[3]
//		const uint256CTvT3tc = await FairStockEquityEQB4oLG.invest.call(uintd6jn0R, {from: accounts[0]});
//		const uint256ahQHoJv = await FairStockEquityEQB4oLG.setProfitPercentPJ.call(uintYFroepX, {from: accounts[4]});
//		const addressRtlbt6G = await FairStockEquityEQB4oLG.withdrawBonusCallback.call(addresszzSJHK, uintGENWXeA, uintokTJpGE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityEQB4oLG.invest.call(uintd6jn0R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressyqklzL6 = accounts[3]
		const addressJOj9QAQ = accounts[4]
		const addressoQ0NrYB = accounts[1]
		const addressU7HjmaX = accounts[1]
		const uintyg2KUnp = BigInt("547")
		const FairStockEquityj5XxYnW = await FairStockEquity.new(addressyqklzL6, addressJOj9QAQ, addressoQ0NrYB, addressU7HjmaX, uintyg2KUnp, {from: accounts[4]});
		const boollPAIrzj = true
		const addresslmLO2Sv = accounts[0]
		const uintylD32bm = BigInt("575")
		const addresselZXuk = accounts[3]
//		await FairStockEquityj5XxYnW.withdrawPJ.call({from: accounts[4]});
//		const addressxWbyT17 = await FairStockEquityj5XxYnW.setLPT.call(addresslmLO2Sv, boollPAIrzj, {from: accounts[2]});
//		const addressGu3TuKv = await FairStockEquityj5XxYnW.withdrawLPT.call(addresselZXuk, uintylD32bm, {from: accounts[2]});

		await expect(FairStockEquityj5XxYnW.withdrawPJ.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmkmYicr = "0x0000000000000000000000000000000000000001"
		const addressVowoorM = accounts[5]
		const addressEEKVTUw = accounts[3]
		const addressRjgck6C = accounts[2]
		const uint7ggJlJ = BigInt("852")
		const FairStockEquityjd3mTSN = await FairStockEquity.new(addressmkmYicr, addressVowoorM, addressEEKVTUw, addressRjgck6C, uint7ggJlJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintdxiqAn = BigInt("377")
		const addresshKwyGMK = accounts[1]
		const uintf3wIN0v = BigInt("1020")
		const addressSKVNmWt = accounts[2]
		const addressVzD0fiI = await FairStockEquityjd3mTSN.withdrawLPT.call(addresshKwyGMK, uintdxiqAn, {from: accounts[2]});
		const addressmr0WeQK = await FairStockEquityjd3mTSN.depositLPT.call(addressSKVNmWt, uintf3wIN0v, {from: accounts[2]});
		await FairStockEquityjd3mTSN.withdrawMT.call({from: accounts[0]});
	});

	it('test for FairStockEquity', async () => {
		const addressufv5AX = "0x0000000000000000000000000000000000000001"
		const address0i61qt = accounts[5]
		const addressLaDjXzX = accounts[4]
		const addressPlvCcRn = "0x0000000000000000000000000000000000000001"
		const uintgCRFj1z = BigInt("372")
		const FairStockEquityJTlc1BT = await FairStockEquity.new(addressufv5AX, address0i61qt, addressLaDjXzX, addressPlvCcRn, uintgCRFj1z, {from: accounts[4]});
		const addressrSOph0h = accounts[2]
		const uintKXUa6Q = BigInt("840")
		const uintnUDTYwq = BigInt("757")
		const uintzN2j1Bi = BigInt("1442")
		const uintlTQPLDZ = BigInt("1121")
		const addressoWA8oFr = accounts[4]
		const boolOYx4A0 = true
		const addressktdx2fe = accounts[1]
		const uintn5UtEBZ = BigInt("195")
//		await FairStockEquityJTlc1BT.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressJ16BW6T = await FairStockEquityJTlc1BT.setDataSource.call(addressrSOph0h, {from: accounts[4]});
//		const addressf7Vyr05 = await FairStockEquityJTlc1BT.business.call(addressoWA8oFr, uintlTQPLDZ, uintzN2j1Bi, uintnUDTYwq, uintKXUa6Q, {from: accounts[2]});
//		const addressno8Bp5b = await FairStockEquityJTlc1BT.setLPT.call(addressktdx2fe, boolOYx4A0, {from: accounts[4]});
//		const uint256HZS07li = await FairStockEquityJTlc1BT.getCostAmount.call(uintn5UtEBZ, {from: accounts[3]});

		await expect(FairStockEquityJTlc1BT.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressj0MGoHT = accounts[2]
		const addressQIuoAt6 = accounts[4]
		const addressJd9mVNr = accounts[3]
		const addressW7BjMf = accounts[0]
		const uintbeiIsIq = BigInt("724")
		const FairStockEquityC64wbc5 = await FairStockEquity.new(addressj0MGoHT, addressQIuoAt6, addressJd9mVNr, addressW7BjMf, uintbeiIsIq, {from: accounts[1]});
		const uintils1lxM = BigInt("1561")
		const addressaoPlttI = accounts[4]
		const addressiAMDwYJ = accounts[4]
		const uintPadZ0CM = BigInt("837")
		const uinttgzSg8u = BigInt("1592")
		const uintJrQ42JI = BigInt("1213")
//		const addressXwMbpTZ = await FairStockEquityC64wbc5.withdrawLPT.call(addressaoPlttI, uintils1lxM, {from: accounts[2]});
//		const addressCBoOUg7 = await FairStockEquityC64wbc5.setDataSource.call(addressiAMDwYJ, {from: accounts[4]});
//		const uint256KjeljHi = await FairStockEquityC64wbc5.invest.call(uintPadZ0CM, {from: accounts[5]});
//		await FairStockEquityC64wbc5.f.call({from: accounts[2]});
//		const uint256oqzbtPp = await FairStockEquityC64wbc5.depositBonus.call(uinttgzSg8u, {from: accounts[1]});
//		const uint256qvkqjNF = await FairStockEquityC64wbc5.depositBonus.call(uintJrQ42JI, {from: accounts[3]});

		await expect(FairStockEquityC64wbc5.withdrawLPT.call(addressaoPlttI, uintils1lxM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslxu6hBG = accounts[4]
		const addressplCUsp9 = accounts[5]
		const addressQ5GXKXp = accounts[0]
		const addressJWr5bhc = accounts[1]
		const uintOb3MdRj = BigInt("1123")
		const FairStockEquityEQB4oLG = await FairStockEquity.new(addresslxu6hBG, addressplCUsp9, addressQ5GXKXp, addressJWr5bhc, uintOb3MdRj, {from: accounts[0]});
		const uintSolBEUE = BigInt("258")
		const uintZrau96N = BigInt("302")
		const uintS8EhOIG = BigInt("140")
		const addressNch0NSq = accounts[2]
		const uintg6Jajc = BigInt("341")
//		const uint256RdAl3ax = await FairStockEquityEQB4oLG.setProfitPercentBonus.call(uintSolBEUE, {from: accounts[1]});
//		const addressAj2uUka = await FairStockEquityEQB4oLG.withdrawMTCallback.call(addressNch0NSq, uintS8EhOIG, uintZrau96N, {from: accounts[3]});
//		const uint256CTvT3tc = await FairStockEquityEQB4oLG.invest.call(uintg6Jajc, {from: accounts[0]});

		await expect(FairStockEquityEQB4oLG.setProfitPercentBonus.call(uintSolBEUE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscB6Qt02 = accounts[4]
		const addressg1szfRO = accounts[5]
		const addressuRQlGAw = accounts[0]
		const addressYqSMqaU = accounts[1]
		const uintkWXqEK3 = BigInt("1123")
		const FairStockEquityEQB4oLG = await FairStockEquity.new(addresscB6Qt02, addressg1szfRO, addressuRQlGAw, addressYqSMqaU, uintkWXqEK3, {from: accounts[0]});
		const uintpdVUCqK = BigInt("1265")
		const uintAF2l9T1 = BigInt("1131")
		const uintKYoP0o = BigInt("667")
		const addressg1J1uQU = accounts[3]
		const uintns4cGYP = BigInt("713")
		const uintjguM2cz = BigInt("662")
		const uintwoxXBwi = BigInt("1705")
		const uintRkLZAic = BigInt("590")
		const uinty67duvw = BigInt("1270")
		const uintIAGSxjf = BigInt("341")
		const uintHRaieBI = BigInt("757")
		const uintXh9r8dw = BigInt("1196")
		const addressj22mPdU = accounts[3]
		const uint256rqHMrvw = await FairStockEquityEQB4oLG.setProfitPercentBonus.call(uintpdVUCqK, {from: accounts[0]});
//		const addressTMT2B9c = await FairStockEquityEQB4oLG.withdrawBonusCallback.call(addressg1J1uQU, uintKYoP0o, uintAF2l9T1, {from: accounts[2]});
//		const uint256tSV42u1 = await FairStockEquityEQB4oLG.setDegree.call(uinty67duvw, uintRkLZAic, uintwoxXBwi, uintjguM2cz, uintns4cGYP, {from: accounts[1]});
//		const uint256CTvT3tc = await FairStockEquityEQB4oLG.invest.call(uintIAGSxjf, {from: accounts[0]});
//		const addressRtlbt6G = await FairStockEquityEQB4oLG.withdrawBonusCallback.call(addressj22mPdU, uintXh9r8dw, uintHRaieBI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityEQB4oLG.withdrawBonusCallback.call(addressg1J1uQU, uintKYoP0o, uintAF2l9T1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjqeWulG = accounts[5]
		const addressVT8qQ1 = accounts[3]
		const addressHEQG1X5 = accounts[0]
		const addressttqlQUS = accounts[3]
		const uintNZSni63 = BigInt("1842")
		const FairStockEquityeP2x2Xg = await FairStockEquity.new(addressjqeWulG, addressVT8qQ1, addressHEQG1X5, addressttqlQUS, uintNZSni63, {from: accounts[5]});
		const uintubitbR5 = BigInt("459")
		const uintiRncPDl = BigInt("109")
		const uintUjvODpu = BigInt("1279")
		const addressKPqXRDn = accounts[4]
		const uintHAHGVbi = BigInt("1835")
		const uintkKHWUSX = BigInt("401")
		const uinttVLY92S = BigInt("532")
		const addresswSd3TPU = accounts[0]
		const uint256dqERTlE = await FairStockEquityeP2x2Xg.getCostAmount.call(uintubitbR5, {from: accounts[1]});
//		const addresslip4zQB = await FairStockEquityeP2x2Xg.withdrawBonusCallback.call(addressKPqXRDn, uintUjvODpu, uintiRncPDl, {from: accounts[3]});
//		const uint256mcNxhkx = await FairStockEquityeP2x2Xg.invest.call(uintHAHGVbi, {from: accounts[0]});
//		const addressXGzCkt5 = await FairStockEquityeP2x2Xg.withdrawMTCallback.call(addresswSd3TPU, uinttVLY92S, uintkKHWUSX, {from: accounts[4]});

		await expect(FairStockEquityeP2x2Xg.withdrawBonusCallback.call(addressKPqXRDn, uintUjvODpu, uintiRncPDl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnxu6f6 = accounts[0]
		const addressLPyXDYF = accounts[2]
		const addressTAyRbWc = accounts[0]
		const addressrNWhPTr = accounts[1]
		const uintXRTRH0M = BigInt("1524")
		const FairStockEquityXj1dIK0 = await FairStockEquity.new(addressnxu6f6, addressLPyXDYF, addressTAyRbWc, addressrNWhPTr, uintXRTRH0M, {from: accounts[3]});
		const uintmMR68IR = BigInt("1358")
		const addressdg60t7y = accounts[5]
		const uintgpbQSKm = BigInt("525")
		const uintbXx8Hm = BigInt("1157")
		const addressjDQPAYO = accounts[0]
//		const addressCjZjn7q = await FairStockEquityXj1dIK0.depositLPT.call(addressdg60t7y, uintmMR68IR, {from: accounts[2]});
//		const uint256LJVLfmu = await FairStockEquityXj1dIK0.invest.call(uintgpbQSKm, {from: accounts[1]});
//		const address6MY3dT = await FairStockEquityXj1dIK0.depositLPT.call(addressjDQPAYO, uintbXx8Hm, {from: accounts[5]});

		await expect(FairStockEquityXj1dIK0.depositLPT.call(addressdg60t7y, uintmMR68IR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressU19CWi4 = accounts[0]
		const addressKB7O2Dl = accounts[2]
		const addresse273rMD = accounts[0]
		const addressMO3lPQ2 = accounts[1]
		const uintMpq97jq = BigInt("1524")
		const FairStockEquityXj1dIK0 = await FairStockEquity.new(addressU19CWi4, addressKB7O2Dl, addresse273rMD, addressMO3lPQ2, uintMpq97jq, {from: accounts[3]});
		const uintmwmje2e = BigInt("434")
		const uintpcI0OUb = BigInt("1110")
		const uintxNiUgCj = BigInt("676")
//		const uint256x6Pp0ox = await FairStockEquityXj1dIK0.depositBonus.call(uintmwmje2e, {from: accounts[0]});
//		await FairStockEquityXj1dIK0.withdrawMT.call({from: accounts[4]});
//		const uint256LJVLfmu = await FairStockEquityXj1dIK0.invest.call(uintpcI0OUb, {from: accounts[1]});
//		const uint256u08A2R = await FairStockEquityXj1dIK0.depositBonus.call(uintxNiUgCj, {from: accounts[4]});

		await expect(FairStockEquityXj1dIK0.depositBonus.call(uintmwmje2e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHUQSZpc = accounts[0]
		const addressHEnW65t = accounts[1]
		const addressFAnb1xi = accounts[2]
		const addressOqmSKn = accounts[3]
		const uintakbgeQF = BigInt("948")
		const FairStockEquityx1jK8GQ = await FairStockEquity.new(addressHUQSZpc, addressHEnW65t, addressFAnb1xi, addressOqmSKn, uintakbgeQF, {from: accounts[1]});
		const uintXy7lE91 = BigInt("303")
//		await FairStockEquityx1jK8GQ.checkStart.call({from: accounts[1]});
//		const uint2561R7WE1 = await FairStockEquityx1jK8GQ.reduceShare.call(uintXy7lE91, {from: accounts[0]});

		await expect(FairStockEquityx1jK8GQ.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqI2UqR = accounts[0]
		const addressFpRVUhp = accounts[2]
		const addressoloDpTB = accounts[0]
		const addressuJPddev = accounts[1]
		const uintVlshW6k = BigInt("1524")
		const FairStockEquityXj1dIK0 = await FairStockEquity.new(addressqI2UqR, addressFpRVUhp, addressoloDpTB, addressuJPddev, uintVlshW6k, {from: accounts[3]});
		const uinty5e0ddW = BigInt("623")
		const uintam4jh7 = BigInt("1955")
		const uinthI6EN97 = BigInt("557")
		const uinttwT9vxe = BigInt("608")
		const addresskuc0BqT = accounts[0]
		const uintPYjKzYQ = BigInt("525")
		const uintdEn70Hs = BigInt("1157")
		const addressJOIU2Ar = accounts[0]
//		const addresskPbOdT = await FairStockEquityXj1dIK0.business.call(addresskuc0BqT, uinttwT9vxe, uinthI6EN97, uintam4jh7, uinty5e0ddW, {from: accounts[4]});
//		const uint256LJVLfmu = await FairStockEquityXj1dIK0.invest.call(uintPYjKzYQ, {from: accounts[1]});
//		const address6MY3dT = await FairStockEquityXj1dIK0.depositLPT.call(addressJOIU2Ar, uintdEn70Hs, {from: accounts[5]});

		await expect(FairStockEquityXj1dIK0.business.call(addresskuc0BqT, uinttwT9vxe, uinthI6EN97, uintam4jh7, uinty5e0ddW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressXBga4DW = accounts[3]
		const addressx3mFr8V = accounts[3]
		const addressGPOJ4TS = accounts[2]
		const addressH1VC3Sb = accounts[5]
		const uintUQw0Lwb = BigInt("1981")
		const FairStockEquityfUFqHSP = await FairStockEquity.new(addressXBga4DW, addressx3mFr8V, addressGPOJ4TS, addressH1VC3Sb, uintUQw0Lwb, {from: accounts[4]});
		const uinthgdj6Qs = BigInt("1167")
		const uintwv4PsCx = BigInt("1921")
		const addresseza5x9J = accounts[1]
		const uintmOjbfOW = BigInt("616")
		const uintEQ6HCLg = BigInt("858")
		const uintBrYCzzS = BigInt("193")
		const uintfkxjULh = BigInt("1909")
		const uintutIrJgS = BigInt("856")
		const addressWrtDy6i = "0x0000000000000000000000000000000000000001"
		const addresslgLu7o9 = await FairStockEquityfUFqHSP.setModule.call(addresseza5x9J, uintwv4PsCx, uinthgdj6Qs, {from: accounts[4]});
//		await FairStockEquityfUFqHSP.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityfUFqHSP.withdrawMT.call({from: accounts[3]});
//		const uint256XByODG = await FairStockEquityfUFqHSP.getCostAmount.call(uintmOjbfOW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressyva8cTm = await FairStockEquityfUFqHSP.business.call(addressWrtDy6i, uintutIrJgS, uintfkxjULh, uintBrYCzzS, uintEQ6HCLg, {from: accounts[0]});

		await expect(FairStockEquityfUFqHSP.onlyDataSource.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresseUh6WRI = accounts[1]
		const addressP9DFDNP = accounts[2]
		const addressFCVe2JQ = accounts[5]
		const addressAq6kvYT = accounts[1]
		const uintt74KLjp = BigInt("1487")
		const FairStockEquitymjxaoDP = await FairStockEquity.new(addresseUh6WRI, addressP9DFDNP, addressFCVe2JQ, addressAq6kvYT, uintt74KLjp, {from: accounts[1]});
		const uintZkBd3d = BigInt("1464")
		const uintvTuVgU7 = BigInt("1165")
		const uintFW33Z3 = BigInt("491")
		const uintwFQBZ7v = BigInt("240")
		const addresszIeYyk = accounts[2]
//		await FairStockEquitymjxaoDP.f.call({from: accounts[0]});
//		const addressrBtmh30 = await FairStockEquitymjxaoDP.business.call(addresszIeYyk, uintwFQBZ7v, uintFW33Z3, uintvTuVgU7, uintZkBd3d, {from: accounts[2]});

		await expect(FairStockEquitymjxaoDP.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressbpbTMZS = accounts[0]
		const addresshXblFa = accounts[2]
		const addressfdm3LXI = accounts[0]
		const addressHUUxoZv = accounts[1]
		const uinttG0P2Rn = BigInt("1524")
		const FairStockEquityXj1dIK0 = await FairStockEquity.new(addressbpbTMZS, addresshXblFa, addressfdm3LXI, addressHUUxoZv, uinttG0P2Rn, {from: accounts[3]});
		const uintuRxdwQm = BigInt("234")
		const uintnVosdNj = BigInt("1160")
		const addressn11ZKcb = accounts[3]
//		const addressRktlNbj = await FairStockEquityXj1dIK0.withdrawMTCallback.call(addressn11ZKcb, uintnVosdNj, uintuRxdwQm, {from: accounts[1]});

		await expect(FairStockEquityXj1dIK0.withdrawMTCallback.call(addressn11ZKcb, uintnVosdNj, uintuRxdwQm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNX4Vye5 = accounts[2]
		const addresswCW4gor = accounts[0]
		const addresss372Rke = accounts[2]
		const addresstlmhREQ = accounts[3]
		const uintnYkCzDY = BigInt("466")
		const FairStockEquityS77JYWZ = await FairStockEquity.new(addressNX4Vye5, addresswCW4gor, addresss372Rke, addresstlmhREQ, uintnYkCzDY, {from: accounts[4]});
		const boolR3Y8ug = false
		const addressxJAwSKo = accounts[3]
		const uintA2KxcRF = BigInt("964")
		const uintkALiFgD = BigInt("1622")
		const uintJUcGMKI = BigInt("1576")
		const uintLb35ijO = BigInt("84")
		const addressLqEmdTG = accounts[0]
		const uinto12fryt = BigInt("203")
		const uintfjra44H = BigInt("980")
		const uintFgfaNfW = BigInt("1574")
		const uintG9L4eyX = BigInt("2043")
		const addressBFNAPzS = accounts[0]
		const uintL6Ip5Pv = BigInt("930")
		const addressVpuch6E = await FairStockEquityS77JYWZ.setLPT.call(addressxJAwSKo, boolR3Y8ug, {from: accounts[4]});
//		const addressYyJXA1i = await FairStockEquityS77JYWZ.business.call(addressLqEmdTG, uintLb35ijO, uintJUcGMKI, uintkALiFgD, uintA2KxcRF, {from: accounts[4]});
//		await FairStockEquityS77JYWZ.withdrawBonus.call({from: accounts[1]});
//		const addressJNRYHi = await FairStockEquityS77JYWZ.business.call(addressBFNAPzS, uintG9L4eyX, uintFgfaNfW, uintfjra44H, uinto12fryt, {from: accounts[2]});
//		const uint256mQDtkaJ = await FairStockEquityS77JYWZ.setProfitPercentPJ.call(uintL6Ip5Pv, {from: accounts[4]});

		await expect(FairStockEquityS77JYWZ.business.call(addressLqEmdTG, uintLb35ijO, uintJUcGMKI, uintkALiFgD, uintA2KxcRF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressWGsv8NG = accounts[0]
		const addressoFFeFPd = accounts[2]
		const addressd5Jliqd = accounts[0]
		const addressxGRRyrD = accounts[1]
		const uintuSX1Mpd = BigInt("1524")
		const FairStockEquityXj1dIK0 = await FairStockEquity.new(addressWGsv8NG, addressoFFeFPd, addressd5Jliqd, addressxGRRyrD, uintuSX1Mpd, {from: accounts[3]});
		const uintqqSyYhJ = BigInt("1329")
		const uintQqEdArC = BigInt("770")
//		const uint256US4JXor = await FairStockEquityXj1dIK0.bonus.call(uintqqSyYhJ, {from: accounts[1]});
//		await FairStockEquityXj1dIK0.checkStart.call({from: accounts[2]});
//		const uint256LJVLfmu = await FairStockEquityXj1dIK0.invest.call(uintQqEdArC, {from: accounts[1]});

		await expect(FairStockEquityXj1dIK0.bonus.call(uintqqSyYhJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressaUrYEPm = accounts[0]
		const addressPYx9BEs = accounts[2]
		const addressjOSutTA = accounts[0]
		const addressYZgn5R3 = accounts[1]
		const uintsv7dYpV = BigInt("1524")
		const FairStockEquityXj1dIK0 = await FairStockEquity.new(addressaUrYEPm, addressPYx9BEs, addressjOSutTA, addressYZgn5R3, uintsv7dYpV, {from: accounts[3]});
		const uintRGvlIGt = BigInt("1484")
		const uintVpFp6NU = BigInt("785")
//		const uint256SuqYwsF = await FairStockEquityXj1dIK0.setStartTime.call(uintRGvlIGt, {from: accounts[3]});
//		const uint256LJVLfmu = await FairStockEquityXj1dIK0.invest.call(uintVpFp6NU, {from: accounts[1]});

		await expect(FairStockEquityXj1dIK0.setStartTime.call(uintRGvlIGt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})