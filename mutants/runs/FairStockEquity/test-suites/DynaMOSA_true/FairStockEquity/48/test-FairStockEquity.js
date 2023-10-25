const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressdg3xPYg = accounts[0]
		const addresszT5ntyS = accounts[2]
		const addressQ3sjVkB = accounts[4]
		const addressM6qhEI = accounts[2]
		const uintnatR8F3 = BigInt("216")
		const FairStockEquitycDQojnO = await FairStockEquity.new(addressdg3xPYg, addresszT5ntyS, addressQ3sjVkB, addressM6qhEI, uintnatR8F3, {from: accounts[2]});
		const uintKmikdCQ = BigInt("417")
		const addresszffugwz = accounts[2]
		const uintz4jtmPJ = BigInt("54")
		const addressp6arEOs = accounts[1]
		const uintylzV45 = BigInt("1027")
		const uintd8xknp0 = BigInt("762")
		const uintNjRu0Xd = BigInt("760")
		const uintF7JhRHV = BigInt("1711")
		const uintbS9baKz = BigInt("1718")
		const addressm4emBsx = await FairStockEquitycDQojnO.withdrawLPT.call(addresszffugwz, uintKmikdCQ, {from: accounts[1]});
		const addressL720qwC = await FairStockEquitycDQojnO.depositLPT.call(addressp6arEOs, uintz4jtmPJ, {from: accounts[4]});
		const uint256pzRFWVv = await FairStockEquitycDQojnO.setDegree.call(uintbS9baKz, uintF7JhRHV, uintNjRu0Xd, uintd8xknp0, uintylzV45, {from: accounts[2]});

		await expect(FairStockEquitycDQojnO.withdrawLPT.call(addresszffugwz, uintKmikdCQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressVB3PyeW = accounts[3]
		const addressoXwb2w = accounts[4]
		const addressN3vSGjt = accounts[3]
		const addresslxtibk8 = accounts[3]
		const uintiKTpNM9 = BigInt("16")
		const FairStockEquityfPkh42Y = await FairStockEquity.new(addressVB3PyeW, addressoXwb2w, addressN3vSGjt, addresslxtibk8, uintiKTpNM9, {from: accounts[0]});
		const uintI8egYTJ = BigInt("479")
		const uintxWfGo3Z = BigInt("2016")
		const address9SKMWd = accounts[5]
		const uinth8zqptc = BigInt("1351")
		const uint8U1FjR = BigInt("1771")
		const addressfmJJCkV = await FairStockEquityfPkh42Y.setModule.call(address9SKMWd, uintxWfGo3Z, uintI8egYTJ, {from: accounts[4]});
		const uint256xhxMs7j = await FairStockEquityfPkh42Y.invest.call(uinth8zqptc, {from: accounts[2]});
		const uint256oBEeUF = await FairStockEquityfPkh42Y.invest.call(uint8U1FjR, {from: accounts[1]});

		await expect(FairStockEquityfPkh42Y.setModule.call(address9SKMWd, uintxWfGo3Z, uintI8egYTJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressMrvSQy = accounts[5]
		const addressqi1zbmF = accounts[2]
		const addressDYNBTrr = accounts[5]
		const address5NDKZD = accounts[0]
		const uintSCpDoLI = BigInt("1241")
		const FairStockEquityUZFTJf8 = await FairStockEquity.new(addressMrvSQy, addressqi1zbmF, addressDYNBTrr, address5NDKZD, uintSCpDoLI, {from: accounts[5]});
		const uintqgOoiUn = BigInt("1457")
		const uintWr97fir = BigInt("1713")
		const uintKUgiWao = BigInt("293")
		const uintzWi61uC = BigInt("1267")
		const uint256oEG3sOi = await FairStockEquityUZFTJf8.setProfitPercentMT.call(uintqgOoiUn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QCc74u = await FairStockEquityUZFTJf8.setProfitPercentBonus.call(uintWr97fir, {from: accounts[1]});
		const uint256V83BqgY = await FairStockEquityUZFTJf8.setProfitPercentMT.call(uintKUgiWao, {from: accounts[3]});
		await FairStockEquityUZFTJf8.f.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lCDpsAp = await FairStockEquityUZFTJf8.bonus.call(uintzWi61uC, {from: accounts[1]});
		await FairStockEquityUZFTJf8.withdrawBonus.call({from: accounts[5]});

		await expect(FairStockEquityUZFTJf8.setProfitPercentMT.call(uintqgOoiUn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAfCfbJj = accounts[2]
		const addressZTEi0Hc = accounts[4]
		const addressC0j655x = "0x0000000000000000000000000000000000000001"
		const addresseEcYEIj = "0x0000000000000000000000000000000000000001"
		const uintbNSc21m = BigInt("1422")
		const FairStockEquityrtVHU7z = await FairStockEquity.new(addressAfCfbJj, addressZTEi0Hc, addressC0j655x, addresseEcYEIj, uintbNSc21m, {from: accounts[2]});
		const uintwKkk7FW = BigInt("2022")
		const uintHIvwXOp = BigInt("1766")
		const uint256tyGDhZ = await FairStockEquityrtVHU7z.depositBonus.call(uintwKkk7FW, {from: accounts[4]});
		const uint256Fl4jRlM = await FairStockEquityrtVHU7z.setProfitPercentBonus.call(uintHIvwXOp, {from: accounts[5]});

		await expect(FairStockEquityrtVHU7z.depositBonus.call(uintwKkk7FW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresswtBcfpl = accounts[1]
		const addresscp8Awyq = accounts[1]
		const addressvVrUKZ = accounts[2]
		const addressSEbTCD3 = accounts[0]
		const uintZLIdQv = BigInt("1295")
		const FairStockEquitytJyGO7h = await FairStockEquity.new(addresswtBcfpl, addresscp8Awyq, addressvVrUKZ, addressSEbTCD3, uintZLIdQv, {from: accounts[3]});
		const uintmBaVfV2 = BigInt("1573")
		const uintzb0nZsG = BigInt("1521")
		const addressdkdrEHw = accounts[1]
		const uintoDtJu7Y = BigInt("319")
		const uintvORdOpv = BigInt("1822")
		const addressaBaf12N = accounts[2]
		const uintdheSzSf = BigInt("1419")
		const uintkN66ggP = BigInt("1026")
		const addressjPdH7Ng = accounts[4]
		await FairStockEquitytJyGO7h.onlyDataSource.call({from: accounts[3]});
		const uint256BzY51tn = await FairStockEquitytJyGO7h.setProfitPercentBonus.call(uintmBaVfV2, {from: accounts[0]});
		const addressPNRkbCK = await FairStockEquitytJyGO7h.depositLPT.call(addressdkdrEHw, uintzb0nZsG, {from: accounts[0]});
		const addressyPQIJMv = await FairStockEquitytJyGO7h.withdrawMTCallback.call(addressaBaf12N, uintvORdOpv, uintoDtJu7Y, {from: accounts[1]});
		const addresse2YGbX = await FairStockEquitytJyGO7h.setModule.call(addressjPdH7Ng, uintkN66ggP, uintdheSzSf, {from: accounts[3]});

		await expect(FairStockEquitytJyGO7h.onlyDataSource.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxMDSe4e = accounts[3]
		const addressgit1Gcw = accounts[4]
		const addressffr5qNA = accounts[3]
		const addressvovssod = accounts[3]
		const uintiI2dcSh = BigInt("16")
		const FairStockEquityfPkh42Y = await FairStockEquity.new(addressxMDSe4e, addressgit1Gcw, addressffr5qNA, addressvovssod, uintiI2dcSh, {from: accounts[0]});
		const uintxqAsz45 = BigInt("1325")
		const uintg5ENY78 = BigInt("1656")
		const uintclDaYd8 = BigInt("479")
		const uintwBUjFOj = BigInt("2016")
		const addresscvEJFh3 = accounts[5]
		const uintGxzgsj6 = BigInt("706")
		const uint2562dJenl = await FairStockEquityfPkh42Y.bonus.call(uintxqAsz45, {from: accounts[1]});
		const uint256XYNfwZy = await FairStockEquityfPkh42Y.invest.call(uintg5ENY78, {from: accounts[1]});
		const addressfmJJCkV = await FairStockEquityfPkh42Y.setModule.call(addresscvEJFh3, uintwBUjFOj, uintclDaYd8, {from: accounts[4]});
		const uint256oBEeUF = await FairStockEquityfPkh42Y.invest.call(uintGxzgsj6, {from: accounts[1]});

		await expect(FairStockEquityfPkh42Y.bonus.call(uintxqAsz45, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressObAaM4u = accounts[0]
		const addressmoAtnVi = accounts[0]
		const address8RBIPX = accounts[0]
		const addressjOjqiF = accounts[5]
		const uintmlN7RZ4 = BigInt("826")
		const FairStockEquityto4D4pI = await FairStockEquity.new(addressObAaM4u, addressmoAtnVi, address8RBIPX, addressjOjqiF, uintmlN7RZ4, {from: accounts[3]});
		const uintA0wtec8 = BigInt("1183")
		const uintZJZQBCW = BigInt("1375")
		const boolUDM16id = false
		const addressOjzR6Mn = accounts[0]
		const uint256y85aGBo = await FairStockEquityto4D4pI.invest.call(uintA0wtec8, {from: accounts[2]});
		const uint256UpxpjwB = await FairStockEquityto4D4pI.setGasFeeForCallback.call(uintZJZQBCW, {from: accounts[2]});
		const addresssPt5aPA = await FairStockEquityto4D4pI.setLPT.call(addressOjzR6Mn, boolUDM16id, {from: accounts[3]});
		await FairStockEquityto4D4pI.withdrawBonus.call({from: accounts[0]});

		await expect(FairStockEquityto4D4pI.invest.call(uintA0wtec8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressT7jnchR = accounts[0]
		const addressKDVyolT = accounts[3]
		const addressppPDlRW = accounts[3]
		const addressGKN8ubx = accounts[2]
		const uintO94aYRS = BigInt("421")
		const FairStockEquityn20Nng3 = await FairStockEquity.new(addressT7jnchR, addressKDVyolT, addressppPDlRW, addressGKN8ubx, uintO94aYRS, {from: accounts[1]});
		const uintmLRNzv = BigInt("397")
		const uintj152BuZ = BigInt("945")
		const uintHb9HDy = BigInt("1684")
		const addressOntu9Bt = accounts[4]
		await FairStockEquityn20Nng3.withdrawPJ.call({from: accounts[1]});
		const uint256S8x1vp2 = await FairStockEquityn20Nng3.setProfitPercentBonus.call(uintmLRNzv, {from: accounts[2]});
		const addressnCYiT0 = await FairStockEquityn20Nng3.setModule.call(addressOntu9Bt, uintHb9HDy, uintj152BuZ, {from: accounts[2]});
		await FairStockEquityn20Nng3.withdrawBonus.call({from: accounts[2]});

		await expect(FairStockEquityn20Nng3.withdrawPJ.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressNvHDvQO = accounts[3]
		const addressuVvtchy = accounts[4]
		const addressNypxmpj = accounts[3]
		const address79z6fr = accounts[3]
		const uintzQCf9DG = BigInt("773")
		const FairStockEquityL5pSFQi = await FairStockEquity.new(addressNvHDvQO, addressuVvtchy, addressNypxmpj, address79z6fr, uintzQCf9DG, {from: accounts[0]});
		const uintTHvpF1B = BigInt("577")
		const addressdRUufBg = accounts[1]
		const uintIoAS3zq = BigInt("551")
		const uintpgSbc01 = BigInt("1838")
		const addressZ3KIzyf = accounts[0]
		const uintFs8HvyJ = BigInt("460")
		const addressKAmPOys = await FairStockEquityL5pSFQi.depositLPT.call(addressdRUufBg, uintTHvpF1B, {from: accounts[4]});
		await FairStockEquityL5pSFQi.withdrawBonus.call({from: accounts[1]});
		const addressBXMrDUK = await FairStockEquityL5pSFQi.withdrawBonusCallback.call(addressZ3KIzyf, uintpgSbc01, uintIoAS3zq, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquityL5pSFQi.f.call({from: accounts[0]});
		const uint256m43OnTT = await FairStockEquityL5pSFQi.invest.call(uintFs8HvyJ, {from: accounts[0]});

		await expect(FairStockEquityL5pSFQi.depositLPT.call(addressdRUufBg, uintTHvpF1B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresssDMWTa = accounts[3]
		const address1NA31G = accounts[4]
		const addressg7aKcSJ = accounts[3]
		const addressItXE4Yo = accounts[3]
		const uintRBpCjn = BigInt("16")
		const FairStockEquityfPkh42Y = await FairStockEquity.new(addresssDMWTa, address1NA31G, addressg7aKcSJ, addressItXE4Yo, uintRBpCjn, {from: accounts[0]});
		const uintcsnsWz = BigInt("1378")
		const uint0NrrBq = BigInt("1702")
		const uintLCzHW86 = BigInt("1725")
		await FairStockEquityfPkh42Y.withdrawBonus.call({from: accounts[3]});
		const uint256xhxMs7j = await FairStockEquityfPkh42Y.invest.call(uintcsnsWz, {from: accounts[2]});
		const uint256QE6A9M = await FairStockEquityfPkh42Y.depositBonus.call(uint0NrrBq, {from: accounts[4]});
		const uint256oBEeUF = await FairStockEquityfPkh42Y.invest.call(uintLCzHW86, {from: accounts[1]});

		await expect(FairStockEquityfPkh42Y.withdrawBonus.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJvxIUwK = accounts[4]
		const addressc0KxAsP = accounts[2]
		const addressa4VwNnY = accounts[2]
		const address1F0Sbp = accounts[2]
		const uintXDKz9iL = BigInt("1361")
		const FairStockEquityRVW2Bnz = await FairStockEquity.new(addressJvxIUwK, addressc0KxAsP, addressa4VwNnY, address1F0Sbp, uintXDKz9iL, {from: accounts[4]});
		const uintYAVBZeq = BigInt("1501")
		const uintZRD0ov = BigInt("1686")
		const uintlE87xLs = BigInt("1358")
		const boolK9eroYR = true
		const addresskNDfm1t = accounts[3]
		const uint256aJt5vJz = await FairStockEquityRVW2Bnz.getCostAmount.call(uintYAVBZeq, {from: accounts[2]});
		const uint256kwu4AXm = await FairStockEquityRVW2Bnz.reduceShare.call(uintZRD0ov, {from: accounts[1]});
		await FairStockEquityRVW2Bnz.withdrawMT.call({from: accounts[2]});
		const uint256QcPqtNZ = await FairStockEquityRVW2Bnz.invest.call(uintlE87xLs, {from: accounts[2]});
		const addressGA4wx8N = await FairStockEquityRVW2Bnz.setLPT.call(addresskNDfm1t, boolK9eroYR, {from: accounts[1]});
		await FairStockEquityRVW2Bnz.onlyDataSource.call({from: accounts[5]});

		await expect(FairStockEquityRVW2Bnz.reduceShare.call(uintZRD0ov, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscgPjGZ = accounts[4]
		const addressIPcDgZh = accounts[3]
		const addressVSIoazF = accounts[1]
		const addressHTTxXUW = "0x0000000000000000000000000000000000000001"
		const uintKaUMrB6 = BigInt("587")
		const FairStockEquityuqLnkHj = await FairStockEquity.new(addresscgPjGZ, addressIPcDgZh, addressVSIoazF, addressHTTxXUW, uintKaUMrB6, {from: accounts[1]});
		const uintjsoyBm = BigInt("741")
		const uintnqjVaQ8 = BigInt("882")
		const uintH9iMLzK = BigInt("441")
		const uintgILLVVR = BigInt("555")
		const addressC5CRqZI = accounts[1]
		const boolXaahXE = true
		const addressVgnUWsi = accounts[1]
		const uinthOaXlNY = BigInt("1661")
		const uintUxlK7PV = BigInt("1903")
		const addressL4iNd9C = accounts[0]
		const addressQXziCW2 = await FairStockEquityuqLnkHj.business.call(addressC5CRqZI, uintgILLVVR, uintH9iMLzK, uintnqjVaQ8, uintjsoyBm, {from: accounts[1]});
		const addressAmnj9pR = await FairStockEquityuqLnkHj.setLPT.call(addressVgnUWsi, boolXaahXE, {from: accounts[0]});
		const addressI8awpq = await FairStockEquityuqLnkHj.setModule.call(addressL4iNd9C, uintUxlK7PV, uinthOaXlNY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityuqLnkHj.business.call(addressC5CRqZI, uintgILLVVR, uintH9iMLzK, uintnqjVaQ8, uintjsoyBm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOfnkQkZ = accounts[3]
		const addresslkTjjCY = accounts[4]
		const addressPs24eo = accounts[3]
		const addressvwRCYyA = accounts[3]
		const uintoRwzAOv = BigInt("16")
		const FairStockEquityfPkh42Y = await FairStockEquity.new(addressOfnkQkZ, addresslkTjjCY, addressPs24eo, addressvwRCYyA, uintoRwzAOv, {from: accounts[0]});
		const uintvutQFj0 = BigInt("697")
		const uintOvIlFP0 = BigInt("26")
		const addressKc2SaIm = accounts[3]
		const uintFfNVON = BigInt("1353")
		const addressMltHnuq = await FairStockEquityfPkh42Y.withdrawBonusCallback.call(addressKc2SaIm, uintOvIlFP0, uintvutQFj0, {from: accounts[3]});
		const uint256xhxMs7j = await FairStockEquityfPkh42Y.invest.call(uintFfNVON, {from: accounts[2]});

		await expect(FairStockEquityfPkh42Y.withdrawBonusCallback.call(addressKc2SaIm, uintOvIlFP0, uintvutQFj0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressoUYk5fE = accounts[1]
		const addressThL5P0L = accounts[4]
		const addressEsRMhN = accounts[0]
		const addressN2DEg1o = accounts[3]
		const uintvr3CKbm = BigInt("618")
		const FairStockEquityrxloC8Q = await FairStockEquity.new(addressoUYk5fE, addressThL5P0L, addressEsRMhN, addressN2DEg1o, uintvr3CKbm, {from: "0x0000000000000000000000000000000000000001"});
		const uintEAVmMMR = BigInt("1341")
		const uint256zTGRYCJ = await FairStockEquityrxloC8Q.setStartTime.call(uintEAVmMMR, {from: accounts[0]});
		await FairStockEquityrxloC8Q.onlyDataSource.call({from: accounts[5]});
		await FairStockEquityrxloC8Q.checkStart.call({from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressEIPKyz3 = accounts[2]
		const addressTFuC4b = accounts[2]
		const addressStokII = accounts[4]
		const addressCO8Hqxc = accounts[1]
		const uintR7dMVry = BigInt("1208")
		const FairStockEquityHWwbh6e = await FairStockEquity.new(addressEIPKyz3, addressTFuC4b, addressStokII, addressCO8Hqxc, uintR7dMVry, {from: accounts[3]});
		const uintiaTXval = BigInt("1990")
		const uintMngHStK = BigInt("1930")
		const addressdPocim5 = accounts[0]
		const uintxjxav8l = BigInt("574")
		const uintWEizA4i = BigInt("699")
		const addresszOmsgRI = accounts[0]
		const uintGtcE8Zt = BigInt("1886")
		const addressBKr2egD = accounts[3]
		const uintAmnUP5y = BigInt("525")
		await FairStockEquityHWwbh6e.withdrawMT.call({from: accounts[1]});
		const addressaca0VEk = await FairStockEquityHWwbh6e.setModule.call(addressdPocim5, uintMngHStK, uintiaTXval, {from: "0x0000000000000000000000000000000000000001"});
		const addressgf8oY3 = await FairStockEquityHWwbh6e.withdrawBonusCallback.call(addresszOmsgRI, uintWEizA4i, uintxjxav8l, {from: accounts[1]});
		const addressjnsKLXq = await FairStockEquityHWwbh6e.withdrawLPT.call(addressBKr2egD, uintGtcE8Zt, {from: accounts[4]});
		const uint256g8o5JnT = await FairStockEquityHWwbh6e.depositBonus.call(uintAmnUP5y, {from: accounts[4]});

		await expect(FairStockEquityHWwbh6e.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslokK3Xy = accounts[1]
		const addressI1ZWxAh = accounts[4]
		const addressCbyG2U0 = "0x0000000000000000000000000000000000000001"
		const addressvPxSRBK = accounts[0]
		const uintyoikIsI = BigInt("1726")
		const FairStockEquitylwPYW8B = await FairStockEquity.new(addresslokK3Xy, addressI1ZWxAh, addressCbyG2U0, addressvPxSRBK, uintyoikIsI, {from: accounts[2]});
		const uintd3AZVxh = BigInt("1646")
		const uintPLvo5Cn = BigInt("656")
		const uintQH0PIQ1 = BigInt("1165")
		const uint256AJg4Mpl = await FairStockEquitylwPYW8B.setStartTime.call(uintd3AZVxh, {from: accounts[2]});
		const uint256dUzBt82 = await FairStockEquitylwPYW8B.setProfitPercentBonus.call(uintPLvo5Cn, {from: accounts[5]});
		const uint256uYmTYVo = await FairStockEquitylwPYW8B.setProfitPercentMT.call(uintQH0PIQ1, {from: accounts[3]});
		await FairStockEquitylwPYW8B.withdrawBonus.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitylwPYW8B.setStartTime.call(uintd3AZVxh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAlKkYys = accounts[3]
		const addressoDRnpVq = accounts[4]
		const addressRg742Cw = accounts[3]
		const addressWtd63Hr = accounts[3]
		const uintuFmaHit = BigInt("16")
		const FairStockEquityfPkh42Y = await FairStockEquity.new(addressAlKkYys, addressoDRnpVq, addressRg742Cw, addressWtd63Hr, uintuFmaHit, {from: accounts[0]});
		const uintd0ZjI4a = BigInt("647")
		const uinto3CEXzb = BigInt("1471")
		const addressl8QeG8b = accounts[5]
		const uintElECmS = BigInt("633")
		const addressdB7kIC8 = accounts[6]
		const addressgtkL3QW = await FairStockEquityfPkh42Y.withdrawMTCallback.call(addressl8QeG8b, uinto3CEXzb, uintd0ZjI4a, {from: accounts[3]});
		const addressBmWbDEV = await FairStockEquityfPkh42Y.depositLPT.call(addressdB7kIC8, uintElECmS, {from: accounts[5]});

		await expect(FairStockEquityfPkh42Y.withdrawMTCallback.call(addressl8QeG8b, uinto3CEXzb, uintd0ZjI4a, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKEATYCZ = accounts[3]
		const addressIvZaBp = accounts[4]
		const addresswJtdxZ = accounts[3]
		const addressAayrIod = accounts[3]
		const uintCY9gbrA = BigInt("16")
		const FairStockEquityfPkh42Y = await FairStockEquity.new(addressKEATYCZ, addressIvZaBp, addresswJtdxZ, addressAayrIod, uintCY9gbrA, {from: accounts[0]});
		const uintN9Lo4KA = BigInt("633")
		const addresszryYQ3J = accounts[5]
		const uintDBLBFg = BigInt("494")
		const uintm3HsLjk = BigInt("1753")
		const addressF5Ltxeu = accounts[4]
		await FairStockEquityfPkh42Y.f.call({from: "0x0000000000000000000000000000000000000001"});
		const addressBmWbDEV = await FairStockEquityfPkh42Y.depositLPT.call(addresszryYQ3J, uintN9Lo4KA, {from: accounts[5]});
		const addressHj7P5Kb = await FairStockEquityfPkh42Y.withdrawMTCallback.call(addressF5Ltxeu, uintm3HsLjk, uintDBLBFg, {from: accounts[4]});

		await expect(FairStockEquityfPkh42Y.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address074EbA = accounts[3]
		const addresswbl3j0Z = accounts[4]
		const addressBba3R1I = accounts[3]
		const addressuvrbMa = accounts[3]
		const uintt62G6xp = BigInt("16")
		const FairStockEquityfPkh42Y = await FairStockEquity.new(address074EbA, addresswbl3j0Z, addressBba3R1I, addressuvrbMa, uintt62G6xp, {from: accounts[0]});
		const boolU1jcmAX = false
		const addresses9nYm0 = accounts[0]
		const uintjerexs1 = BigInt("1353")
		const addressWLSViRI = await FairStockEquityfPkh42Y.setLPT.call(addresses9nYm0, boolU1jcmAX, {from: accounts[0]});
		const uint256xhxMs7j = await FairStockEquityfPkh42Y.invest.call(uintjerexs1, {from: accounts[2]});

		await expect(FairStockEquityfPkh42Y.invest.call(uintjerexs1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYiLMgaK = accounts[3]
		const addresskg9Hfm3 = accounts[4]
		const addressJKBEWr7 = accounts[3]
		const addressTX3iFRk = accounts[3]
		const uintp0zpMrZ = BigInt("16")
		const FairStockEquityfPkh42Y = await FairStockEquity.new(addressYiLMgaK, addresskg9Hfm3, addressJKBEWr7, addressTX3iFRk, uintp0zpMrZ, {from: accounts[0]});
		const uintkoKAIqc = BigInt("739")
		const uintREoLAYt = BigInt("759")
		const address2RU3Vt = accounts[1]
		const uintf02vszo = BigInt("633")
		const addresswx37FzK = accounts[4]
		const addressuAllI3 = await FairStockEquityfPkh42Y.setModule.call(address2RU3Vt, uintREoLAYt, uintkoKAIqc, {from: accounts[0]});
		const addressBmWbDEV = await FairStockEquityfPkh42Y.depositLPT.call(addresswx37FzK, uintf02vszo, {from: accounts[5]});

		await expect(FairStockEquityfPkh42Y.depositLPT.call(addresswx37FzK, uintf02vszo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEzj80y9 = accounts[3]
		const addressCOkBsQt = accounts[4]
		const addressLp9vmpQ = accounts[3]
		const addressGACM4J = accounts[3]
		const uintbiwcgyK = BigInt("16")
		const FairStockEquityfPkh42Y = await FairStockEquity.new(addressEzj80y9, addressCOkBsQt, addressLp9vmpQ, addressGACM4J, uintbiwcgyK, {from: accounts[0]});
		const uintrg8jh0k = BigInt("1155")
		const uintkDnJyPB = BigInt("1046")
		const uintMJx6AT0 = BigInt("856")
		const uintCmlb4IE = BigInt("428")
		const uinthUT5aaH = BigInt("882")
		const addressCpSiqX = accounts[3]
		const uintGztWil6 = BigInt("836")
		const uintBKZZ2X = BigInt("633")
		const addressVwJd5FE = accounts[4]
		const uint256ELLfqw = await FairStockEquityfPkh42Y.bonus.call(uintrg8jh0k, {from: accounts[3]});
		const addressdvRZKy = await FairStockEquityfPkh42Y.business.call(addressCpSiqX, uinthUT5aaH, uintCmlb4IE, uintMJx6AT0, uintkDnJyPB, {from: accounts[1]});
		await FairStockEquityfPkh42Y.withdrawMT.call({from: accounts[3]});
		const uint256G2A8ldb = await FairStockEquityfPkh42Y.setProfitPercentMT.call(uintGztWil6, {from: accounts[3]});
		const addressBmWbDEV = await FairStockEquityfPkh42Y.depositLPT.call(addressVwJd5FE, uintBKZZ2X, {from: accounts[5]});

		await expect(FairStockEquityfPkh42Y.bonus.call(uintrg8jh0k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})