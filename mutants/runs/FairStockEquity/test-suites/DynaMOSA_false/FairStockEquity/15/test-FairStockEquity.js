const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressjV3JEnO = accounts[3]
		const addressRn68e5b = accounts[3]
		const addressnlRGalG = accounts[2]
		const addressZkaLPR = accounts[1]
		const uintl5LMDZX = BigInt("82")
		const FairStockEquityia945Sb = await FairStockEquity.new(addressjV3JEnO, addressRn68e5b, addressnlRGalG, addressZkaLPR, uintl5LMDZX, {from: accounts[1]});
		const boolnhxJmon = true
		const addressvlATOlQ = accounts[2]
		const boolh9bqHy = false
		const addressQl1gh5w = accounts[3]
		const addressRJlcqV0 = await FairStockEquityia945Sb.setLPT.call(addressvlATOlQ, boolnhxJmon, {from: accounts[2]});
		const addressU6fftUy = await FairStockEquityia945Sb.setLPT.call(addressQl1gh5w, boolh9bqHy, {from: accounts[5]});

		await expect(FairStockEquityia945Sb.setLPT.call(addressvlATOlQ, boolnhxJmon, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressnNMtteq = accounts[4]
		const addressk6j8u6l = accounts[4]
		const addressOF6H5Yb = "0x0000000000000000000000000000000000000001"
		const addressjUNauj = accounts[1]
		const uintWAvKirN = BigInt("645")
		const FairStockEquityYEmX6lG = await FairStockEquity.new(addressnNMtteq, addressk6j8u6l, addressOF6H5Yb, addressjUNauj, uintWAvKirN, {from: accounts[3]});
		const uintqbXt4rz = BigInt("1348")
		const addressDIOaVr6 = "0x0000000000000000000000000000000000000001"
		await FairStockEquityYEmX6lG.withdrawBonus.call({from: accounts[2]});
		await FairStockEquityYEmX6lG.onlyDataSource.call({from: accounts[3]});
		const addressShjL4K = await FairStockEquityYEmX6lG.withdrawLPT.call(addressDIOaVr6, uintqbXt4rz, {from: accounts[0]});
		await FairStockEquityYEmX6lG.withdrawMT.call({from: accounts[0]});

		await expect(FairStockEquityYEmX6lG.withdrawBonus.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKyvHDYL = accounts[3]
		const addressFAMeKc7 = accounts[2]
		const addressyZvwCU = accounts[4]
		const addressuWApnNV = accounts[4]
		const uintk0g5ZWD = BigInt("596")
		const FairStockEquitybQX7jWG = await FairStockEquity.new(addressKyvHDYL, addressFAMeKc7, addressyZvwCU, addressuWApnNV, uintk0g5ZWD, {from: accounts[0]});
		const uintVqbitg = BigInt("322")
		const uintaJEe2bC = BigInt("1008")
		const addressUOXdI3 = accounts[1]
		const uintlOFfZ41 = BigInt("496")
		const uintVNipt1k = BigInt("181")
		const addressUvo4OG9 = accounts[2]
		await FairStockEquitybQX7jWG.onlyDataSource.call({from: accounts[4]});
		const addressy4ilS3q = await FairStockEquitybQX7jWG.withdrawBonusCallback.call(addressUOXdI3, uintaJEe2bC, uintVqbitg, {from: accounts[2]});
		const uint256yzcCn8M = await FairStockEquitybQX7jWG.setGasFeeForCallback.call(uintlOFfZ41, {from: accounts[2]});
		const addressnOIAzpX = await FairStockEquitybQX7jWG.withdrawLPT.call(addressUvo4OG9, uintVNipt1k, {from: accounts[3]});
		await FairStockEquitybQX7jWG.withdrawPJ.call({from: accounts[3]});

		await expect(FairStockEquitybQX7jWG.onlyDataSource.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDzNiysh = accounts[0]
		const addressowrBqQs = accounts[2]
		const addressYQnvGPq = accounts[2]
		const addressYVGtejx = accounts[2]
		const uint6cOVMA = BigInt("1023")
		const FairStockEquitykeDWn5b = await FairStockEquity.new(addressDzNiysh, addressowrBqQs, addressYQnvGPq, addressYVGtejx, uint6cOVMA, {from: accounts[0]});
		const boolZaAjhD = false
		const addressdBIiQ0l = accounts[1]
		await FairStockEquitykeDWn5b.withdrawMT.call({from: accounts[2]});
		await FairStockEquitykeDWn5b.withdrawBonus.call({from: accounts[3]});
		const addressekkR6sW = await FairStockEquitykeDWn5b.setLPT.call(addressdBIiQ0l, boolZaAjhD, {from: accounts[1]});
		await FairStockEquitykeDWn5b.checkStart.call({from: accounts[2]});

		await expect(FairStockEquitykeDWn5b.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmDpF4OR = "0x0000000000000000000000000000000000000001"
		const addresstv8U93 = accounts[3]
		const addressjVTtynH = accounts[4]
		const addressB19y4ff = accounts[3]
		const uintJRv0aJ6 = BigInt("864")
		const FairStockEquitySbBCjd6 = await FairStockEquity.new(addressmDpF4OR, addresstv8U93, addressjVTtynH, addressB19y4ff, uintJRv0aJ6, {from: accounts[1]});
		const uintI1LAzpC = BigInt("39")
		const uintaCVRN9 = BigInt("419")
		const uintNCs3aBF = BigInt("752")
		const uintKZlmkJO = BigInt("802")
		const uintxXNlcYv = BigInt("2007")
		const uintFTSJiHu = BigInt("638")
		const uintVMBePU = BigInt("1264")
		const uintOD25NfA = BigInt("707")
		const uintv8KyEpF = BigInt("1036")
		const addressCr3Y7T = accounts[0]
		const uintjcGC4mz = BigInt("913")
		const uintsssj3DI = BigInt("1950")
		const uint256mj6bJz = await FairStockEquitySbBCjd6.setDegree.call(uintxXNlcYv, uintKZlmkJO, uintNCs3aBF, uintaCVRN9, uintI1LAzpC, {from: accounts[1]});
		const addressFj1lnkY = await FairStockEquitySbBCjd6.business.call(addressCr3Y7T, uintv8KyEpF, uintOD25NfA, uintVMBePU, uintFTSJiHu, {from: accounts[3]});
		const uint256l0ksJnn = await FairStockEquitySbBCjd6.reduceShare.call(uintjcGC4mz, {from: accounts[1]});
		const uint256RfE3DUf = await FairStockEquitySbBCjd6.setStartTime.call(uintsssj3DI, {from: accounts[2]});

		await expect(FairStockEquitySbBCjd6.business.call(addressCr3Y7T, uintv8KyEpF, uintOD25NfA, uintVMBePU, uintFTSJiHu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressGcBSJYD = "0x0000000000000000000000000000000000000001"
		const addressM64BGOD = accounts[1]
		const address2auI6Z = accounts[0]
		const addressQZVbwMk = "0x0000000000000000000000000000000000000001"
		const uintaD6SjDs = BigInt("1788")
		const FairStockEquityUHzjhZi = await FairStockEquity.new(addressGcBSJYD, addressM64BGOD, address2auI6Z, addressQZVbwMk, uintaD6SjDs, {from: accounts[4]});
		const uinttx3B53z = BigInt("138")
		const boolq4CzQXF = false
		const addressmK2YKAv = accounts[2]
		const uintXVTxbWp = BigInt("741")
		const uintcVnf33q = BigInt("1290")
		const uintxRke9UP = BigInt("684")
		const addressLIW7SO = accounts[5]
		const uint256Zr4cpEF = await FairStockEquityUHzjhZi.setProfitPercentPJ.call(uinttx3B53z, {from: accounts[0]});
		const addressOhFT2AA = await FairStockEquityUHzjhZi.setLPT.call(addressmK2YKAv, boolq4CzQXF, {from: accounts[4]});
		const uint256Q3B5P6y = await FairStockEquityUHzjhZi.invest.call(uintXVTxbWp, {from: accounts[5]});
		await FairStockEquityUHzjhZi.f.call({from: accounts[3]});
		const addressT9t7iWw = await FairStockEquityUHzjhZi.setModule.call(addressLIW7SO, uintxRke9UP, uintcVnf33q, {from: accounts[4]});

		await expect(FairStockEquityUHzjhZi.setProfitPercentPJ.call(uinttx3B53z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresskgvT6fj = accounts[0]
		const addressvbYnNoY = accounts[1]
		const addressKbeD8R9 = accounts[4]
		const addressukfsyVH = accounts[2]
		const uintPBufw7l = BigInt("1633")
		const FairStockEquityQx9aPM8 = await FairStockEquity.new(addresskgvT6fj, addressvbYnNoY, addressKbeD8R9, addressukfsyVH, uintPBufw7l, {from: accounts[5]});
		const uintlqRlzr = BigInt("646")
		const uintXrOtq1V = BigInt("1268")
		const uintLJsNl9U = BigInt("1490")
		const uintCfwX9b = BigInt("1050")
		const addressrBByC2d = accounts[5]
		const uint256vTpyjWS = await FairStockEquityQx9aPM8.reduceShare.call(uintlqRlzr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NLcItGs = await FairStockEquityQx9aPM8.setStartTime.call(uintXrOtq1V, {from: accounts[0]});
		const addressl0wIsZ8 = await FairStockEquityQx9aPM8.withdrawBonusCallback.call(addressrBByC2d, uintCfwX9b, uintLJsNl9U, {from: accounts[2]});

		await expect(FairStockEquityQx9aPM8.reduceShare.call(uintlqRlzr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmDUwYxr = accounts[5]
		const addressTk9u437 = "0x0000000000000000000000000000000000000001"
		const addressG0DdQ1i = "0x0000000000000000000000000000000000000001"
		const addressoysIn6G = accounts[1]
		const uintr82LBCl = BigInt("1516")
		const FairStockEquityc2beZ8R = await FairStockEquity.new(addressmDUwYxr, addressTk9u437, addressG0DdQ1i, addressoysIn6G, uintr82LBCl, {from: "0x0000000000000000000000000000000000000001"});
		const uintljCkLge = BigInt("1933")
		const uintBV0QeC8 = BigInt("1049")
		const uintoYJrPIY = BigInt("1257")
		const addressUH38Bk7 = accounts[4]
		const boolXFukzQU = true
		const addressnyIx7un = accounts[1]
		const uint256Sij46wv = await FairStockEquityc2beZ8R.getCostAmount.call(uintljCkLge, {from: accounts[1]});
		await FairStockEquityc2beZ8R.withdrawPJ.call({from: accounts[3]});
		const addressIXS321F = await FairStockEquityc2beZ8R.setModule.call(addressUH38Bk7, uintoYJrPIY, uintBV0QeC8, {from: accounts[2]});
		await FairStockEquityc2beZ8R.onlyDataSource.call({from: accounts[3]});
		const addressWTotWvf = await FairStockEquityc2beZ8R.setLPT.call(addressnyIx7un, boolXFukzQU, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressfH3WxEv = accounts[3]
		const addressvKmfT5b = accounts[3]
		const addressGQLRz0a = accounts[2]
		const addressQB7sYvy = accounts[1]
		const uintnJrTPC7 = BigInt("82")
		const FairStockEquityia945Sb = await FairStockEquity.new(addressfH3WxEv, addressvKmfT5b, addressGQLRz0a, addressQB7sYvy, uintnJrTPC7, {from: accounts[1]});
		const uintuBE4whE = BigInt("1874")
		const addressvFckdMa = accounts[4]
		const boolnhxJmon = true
		const addresskuwhlRP = accounts[2]
		const addressJ6qv59R = accounts[3]
		const uintElhfV0i = BigInt("1056")
		const booltfjl7eK = true
		const addresspizIvUR = accounts[4]
		const boolh9bqHy = false
		const addressNtqlbCJ = accounts[3]
		const addressbO4MQ8S = await FairStockEquityia945Sb.withdrawLPT.call(addressvFckdMa, uintuBE4whE, {from: accounts[4]});
		const addressRJlcqV0 = await FairStockEquityia945Sb.setLPT.call(addresskuwhlRP, boolnhxJmon, {from: accounts[2]});
		const addressFCRfqi0 = await FairStockEquityia945Sb.setDataSource.call(addressJ6qv59R, {from: accounts[0]});
		const uint256Qh5pCF = await FairStockEquityia945Sb.bonus.call(uintElhfV0i, {from: accounts[3]});
		const addressekkxk5P = await FairStockEquityia945Sb.setLPT.call(addresspizIvUR, booltfjl7eK, {from: accounts[3]});
		const addressU6fftUy = await FairStockEquityia945Sb.setLPT.call(addressNtqlbCJ, boolh9bqHy, {from: accounts[5]});

		await expect(FairStockEquityia945Sb.withdrawLPT.call(addressvFckdMa, uintuBE4whE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressFbTyY6 = accounts[3]
		const addressPOALSa = accounts[2]
		const addressa1cCyu7 = accounts[4]
		const addressaDmDILG = accounts[4]
		const uintLUpWzAS = BigInt("596")
		const FairStockEquitybQX7jWG = await FairStockEquity.new(addressFbTyY6, addressPOALSa, addressa1cCyu7, addressaDmDILG, uintLUpWzAS, {from: accounts[0]});
		const uintEY3Kwbc = BigInt("295")
		const uintrbXSGF5 = BigInt("403")
		const addressD1tWrxs = accounts[2]
		const uintlbiHzg3 = BigInt("322")
		const uintlkiw3P = BigInt("1008")
		const addressyTRQxin = accounts[1]
		const uintGQQ0f7q = BigInt("496")
		const uintqKA2Wah = BigInt("204")
		const addressek8WPVS = accounts[2]
		const uintrVHruGn = BigInt("1943")
		const addressulhbP1e = await FairStockEquitybQX7jWG.withdrawBonusCallback.call(addressD1tWrxs, uintrbXSGF5, uintEY3Kwbc, {from: accounts[4]});
		await FairStockEquitybQX7jWG.onlyDataSource.call({from: accounts[4]});
		const addressy4ilS3q = await FairStockEquitybQX7jWG.withdrawBonusCallback.call(addressyTRQxin, uintlkiw3P, uintlbiHzg3, {from: accounts[2]});
		const uint256yzcCn8M = await FairStockEquitybQX7jWG.setGasFeeForCallback.call(uintGQQ0f7q, {from: accounts[2]});
		const addressnOIAzpX = await FairStockEquitybQX7jWG.withdrawLPT.call(addressek8WPVS, uintqKA2Wah, {from: accounts[3]});
		const uint256ade7VMv = await FairStockEquitybQX7jWG.bonus.call(uintrVHruGn, {from: accounts[2]});
		await FairStockEquitybQX7jWG.withdrawPJ.call({from: accounts[3]});

		await expect(FairStockEquitybQX7jWG.withdrawBonusCallback.call(addressD1tWrxs, uintrbXSGF5, uintEY3Kwbc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressFIocZrT = accounts[3]
		const addressyHIc3Ua = accounts[3]
		const addressDnj5w0w = accounts[2]
		const addressg6UbxTk = accounts[1]
		const uintVFsL2aO = BigInt("82")
		const FairStockEquityia945Sb = await FairStockEquity.new(addressFIocZrT, addressyHIc3Ua, addressDnj5w0w, addressg6UbxTk, uintVFsL2aO, {from: accounts[1]});
		const uintIHxwGbD = BigInt("930")
		const uintwfrqfZu = BigInt("1261")
		const boolh9bqHy = true
		const addresscVEF5Gi = accounts[4]
		const uint256BXBvgvk = await FairStockEquityia945Sb.getCostAmount.call(uintIHxwGbD, {from: accounts[5]});
		const uint256jlUZP5k = await FairStockEquityia945Sb.setGasFeeForCallback.call(uintwfrqfZu, {from: accounts[3]});
		const addressU6fftUy = await FairStockEquityia945Sb.setLPT.call(addresscVEF5Gi, boolh9bqHy, {from: accounts[5]});

		await expect(FairStockEquityia945Sb.setGasFeeForCallback.call(uintwfrqfZu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressqKXyWJ0 = accounts[3]
		const addressNjgSO6K = accounts[3]
		const addressD7vCFhB = accounts[2]
		const addressN88D98a = accounts[1]
		const uintc7RR7uq = BigInt("82")
		const FairStockEquityia945Sb = await FairStockEquity.new(addressqKXyWJ0, addressNjgSO6K, addressD7vCFhB, addressN88D98a, uintc7RR7uq, {from: accounts[1]});
		const uintBDsLhQg = BigInt("1717")
		const uintRtk45G = BigInt("964")
		const addressEtkc8qc = accounts[2]
		const boolh9bqHy = false
		const addressJBYId1x = accounts[3]
		const addressQyb7tF = await FairStockEquityia945Sb.withdrawBonusCallback.call(addressEtkc8qc, uintRtk45G, uintBDsLhQg, {from: accounts[4]});
		const addressU6fftUy = await FairStockEquityia945Sb.setLPT.call(addressJBYId1x, boolh9bqHy, {from: accounts[5]});

		await expect(FairStockEquityia945Sb.withdrawBonusCallback.call(addressEtkc8qc, uintRtk45G, uintBDsLhQg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressFqIawbc = accounts[3]
		const addressoZ9mvuA = accounts[2]
		const addresst04xW6 = accounts[4]
		const addresswpfJFcy = accounts[4]
		const uintoL6Fba0 = BigInt("596")
		const FairStockEquitybQX7jWG = await FairStockEquity.new(addressFqIawbc, addressoZ9mvuA, addresst04xW6, addresswpfJFcy, uintoL6Fba0, {from: accounts[0]});
		const uintINkLERN = BigInt("162")
		const uintYOggpEJ = BigInt("322")
		const uintmgzz1O = BigInt("1008")
		const addressxXuxcO3 = accounts[1]
		const uintEhZsXxp = BigInt("496")
		const uint256XgdzspD = await FairStockEquitybQX7jWG.depositBonus.call(uintINkLERN, {from: accounts[1]});
		await FairStockEquitybQX7jWG.onlyDataSource.call({from: accounts[4]});
		const addressy4ilS3q = await FairStockEquitybQX7jWG.withdrawBonusCallback.call(addressxXuxcO3, uintmgzz1O, uintYOggpEJ, {from: accounts[2]});
		const uint256yzcCn8M = await FairStockEquitybQX7jWG.setGasFeeForCallback.call(uintEhZsXxp, {from: accounts[2]});
		await FairStockEquitybQX7jWG.withdrawPJ.call({from: accounts[3]});

		await expect(FairStockEquitybQX7jWG.depositBonus.call(uintINkLERN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxUrNoC4 = "0x0000000000000000000000000000000000000001"
		const addressFYlllxq = accounts[3]
		const addresshtB6Yz0 = accounts[4]
		const addressC5K4y9L = accounts[3]
		const uint71f3oq = BigInt("864")
		const FairStockEquitySbBCjd6 = await FairStockEquity.new(addressxUrNoC4, addressFYlllxq, addresshtB6Yz0, addressC5K4y9L, uint71f3oq, {from: accounts[1]});
		const uintCFP0MY3 = BigInt("1989")
		const uintalgN28i = BigInt("904")
		const uint846xRB = BigInt("1304")
		const uintJdUtFbp = BigInt("744")
		const uinteDRgy70 = BigInt("333")
		const uintQ9amWMI = BigInt("377")
		const uintQmDTQ6d = BigInt("638")
		const uintwkwU5f = BigInt("1264")
		const uintYB6BZkM = BigInt("707")
		const uintZdF2jc = BigInt("1036")
		const addressnRjVcBy = accounts[0]
		const uintNPW6qF = BigInt("1594")
		const uintNnnrt0c = BigInt("1529")
		const addressFDSOaLd = accounts[2]
		const uintLUWUWCI = BigInt("913")
		const uintwzG6iVL = BigInt("1950")
		const uint256GuC31xP = await FairStockEquitySbBCjd6.invest.call(uintCFP0MY3, {from: accounts[4]});
		const uint256zmleeVr = await FairStockEquitySbBCjd6.setDegree.call(uintQ9amWMI, uinteDRgy70, uintJdUtFbp, uint846xRB, uintalgN28i, {from: accounts[2]});
		const addressFj1lnkY = await FairStockEquitySbBCjd6.business.call(addressnRjVcBy, uintZdF2jc, uintYB6BZkM, uintwkwU5f, uintQmDTQ6d, {from: accounts[3]});
		const addresslo2S0k5 = await FairStockEquitySbBCjd6.setModule.call(addressFDSOaLd, uintNnnrt0c, uintNPW6qF, {from: accounts[0]});
		const uint256l0ksJnn = await FairStockEquitySbBCjd6.reduceShare.call(uintLUWUWCI, {from: accounts[1]});
		const uint256RfE3DUf = await FairStockEquitySbBCjd6.setStartTime.call(uintwzG6iVL, {from: accounts[2]});

		await expect(FairStockEquitySbBCjd6.invest.call(uintCFP0MY3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKtRqtFX = "0x0000000000000000000000000000000000000001"
		const addressSYJWZSD = accounts[3]
		const addressD6ayGE = accounts[4]
		const addressY9DkhRq = accounts[3]
		const uintwFfe2du = BigInt("864")
		const FairStockEquitySbBCjd6 = await FairStockEquity.new(addressKtRqtFX, addressSYJWZSD, addressD6ayGE, addressY9DkhRq, uintwFfe2du, {from: accounts[1]});
		const uintfoKclVm = BigInt("39")
		const uintoDKoSgo = BigInt("419")
		const uintrDByWUc = BigInt("752")
		const uintQbGqMaP = BigInt("802")
		const uintKbZpqW = BigInt("2007")
		const uintyaUAJqZ = BigInt("638")
		const uintLZfe2ez = BigInt("1330")
		const uintu6xArJ7 = BigInt("707")
		const uintJLVNXlP = BigInt("1036")
		const addressYuCNRyv = accounts[0]
		const uinteDlrqEn = BigInt("1950")
		const uintFpqevF4 = BigInt("538")
		const uint256mj6bJz = await FairStockEquitySbBCjd6.setDegree.call(uintKbZpqW, uintQbGqMaP, uintrDByWUc, uintoDKoSgo, uintfoKclVm, {from: accounts[1]});
		await FairStockEquitySbBCjd6.f.call({from: accounts[0]});
		const addressFj1lnkY = await FairStockEquitySbBCjd6.business.call(addressYuCNRyv, uintJLVNXlP, uintu6xArJ7, uintLZfe2ez, uintyaUAJqZ, {from: accounts[3]});
		const uint256RfE3DUf = await FairStockEquitySbBCjd6.setStartTime.call(uinteDlrqEn, {from: accounts[2]});
		const uint256tKGobVv = await FairStockEquitySbBCjd6.setProfitPercentPJ.call(uintFpqevF4, {from: accounts[5]});

		await expect(FairStockEquitySbBCjd6.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressKHVUSJI = "0x0000000000000000000000000000000000000001"
		const addressKuyRwZq = accounts[0]
		const addressoX35sK = accounts[4]
		const addressErAioj0 = accounts[3]
		const uintXGxrKX = BigInt("807")
		const FairStockEquityzjIR6wT = await FairStockEquity.new(addressKHVUSJI, addressKuyRwZq, addressoX35sK, addressErAioj0, uintXGxrKX, {from: accounts[4]});
		const uintDoC8Mh = BigInt("503")
		const addresslE7kcSC = accounts[4]
		const addressCYhSXwL = await FairStockEquityzjIR6wT.depositLPT.call(addresslE7kcSC, uintDoC8Mh, {from: accounts[4]});
		await FairStockEquityzjIR6wT.checkStart.call({from: accounts[1]});

		await expect(FairStockEquityzjIR6wT.depositLPT.call(addresslE7kcSC, uintDoC8Mh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjbbhMCL = accounts[3]
		const addressEpQdkML = accounts[3]
		const addressCxh83pg = accounts[2]
		const addressaPaI3Bb = accounts[1]
		const uint7apBfW = BigInt("82")
		const FairStockEquityia945Sb = await FairStockEquity.new(addressjbbhMCL, addressEpQdkML, addressCxh83pg, addressaPaI3Bb, uint7apBfW, {from: accounts[1]});
		const uinttQegb8j = BigInt("930")
		const uintvFiSHeV = BigInt("1642")
		const addressTPk92lr = "0x0000000000000000000000000000000000000001"
		const uintlHe1dUq = BigInt("1727")
		const boolh9bqHy = false
		const addressxa0O9E = accounts[4]
		const uint256BXBvgvk = await FairStockEquityia945Sb.getCostAmount.call(uinttQegb8j, {from: accounts[5]});
		const uint256hREUTWG = await FairStockEquityia945Sb.setStartTime.call(uintvFiSHeV, {from: accounts[1]});
		const addressN3ZBVdY = await FairStockEquityia945Sb.setDataSource.call(addressTPk92lr, {from: accounts[3]});
		await FairStockEquityia945Sb.onlyDataSource.call({from: accounts[4]});
		const uint256MZ4nY01 = await FairStockEquityia945Sb.reduceShare.call(uintlHe1dUq, {from: accounts[4]});
		const addressU6fftUy = await FairStockEquityia945Sb.setLPT.call(addressxa0O9E, boolh9bqHy, {from: accounts[5]});

		await expect(FairStockEquityia945Sb.setDataSource.call(addressTPk92lr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvjrvTJG = accounts[3]
		const addressRI0dW3j = accounts[3]
		const addressgSyutnt = accounts[2]
		const addressoPcMlkx = accounts[1]
		const uintZF44o5X = BigInt("82")
		const FairStockEquityia945Sb = await FairStockEquity.new(addressvjrvTJG, addressRI0dW3j, addressgSyutnt, addressoPcMlkx, uintZF44o5X, {from: accounts[1]});
		const uintVuwM8N3 = BigInt("1517")
		const uintWd9uueT = BigInt("1288")
		const addressoEw99mJ = accounts[1]
		const boolh9bqHy = true
		const addressSxr67W8 = accounts[4]
		const addressYkNTLY8 = await FairStockEquityia945Sb.setModule.call(addressoEw99mJ, uintWd9uueT, uintVuwM8N3, {from: accounts[1]});
		const addressU6fftUy = await FairStockEquityia945Sb.setLPT.call(addressSxr67W8, boolh9bqHy, {from: accounts[5]});

		await expect(FairStockEquityia945Sb.setLPT.call(addressSxr67W8, boolh9bqHy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJjHoJGZ = accounts[4]
		const addressSXbOBRY = accounts[2]
		const addressu4Jc3lh = accounts[0]
		const addressIQakdmP = accounts[0]
		const uintvTbFMt = BigInt("1152")
		const FairStockEquityPmPWzGR = await FairStockEquity.new(addressJjHoJGZ, addressSXbOBRY, addressu4Jc3lh, addressIQakdmP, uintvTbFMt, {from: accounts[5]});
		const uintaE4eaSV = BigInt("687")
		const uintQGcarls = BigInt("150")
		const addressrsDingz = accounts[2]
		const uint256M59Q620 = await FairStockEquityPmPWzGR.bonus.call(uintaE4eaSV, {from: accounts[0]});
		const uint256zXGnCtz = await FairStockEquityPmPWzGR.bonus.call(uintQGcarls, {from: accounts[2]});
		const addressiKUjXXS = await FairStockEquityPmPWzGR.setDataSource.call(addressrsDingz, {from: accounts[3]});
		await FairStockEquityPmPWzGR.onlyDataSource.call({from: accounts[1]});

		await expect(FairStockEquityPmPWzGR.bonus.call(uintaE4eaSV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOp1amo = accounts[5]
		const addressouSom9 = accounts[2]
		const addressnClG5pK = accounts[0]
		const addresseMfO4Wz = accounts[1]
		const uintFPTQJnE = BigInt("1611")
		const FairStockEquityUny26aH = await FairStockEquity.new(addressOp1amo, addressouSom9, addressnClG5pK, addresseMfO4Wz, uintFPTQJnE, {from: accounts[2]});
		const uintlm7sXT9 = BigInt("2046")
		const uintFe1d6F = BigInt("1149")
		const boolFvynYjq = false
		const addressRO33e6Z = accounts[3]
		const uint256X6qTcYA = await FairStockEquityUny26aH.getCostAmount.call(uintlm7sXT9, {from: accounts[5]});
		const uint256MUvJdUD = await FairStockEquityUny26aH.setGasFeeForCallback.call(uintFe1d6F, {from: accounts[2]});
		const addressEqScdoy = await FairStockEquityUny26aH.setLPT.call(addressRO33e6Z, boolFvynYjq, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressjbwPVnK = accounts[5]
		const addressmFzIme8 = accounts[2]
		const addressC4XQ3kr = accounts[0]
		const addressigJQx6W = accounts[1]
		const uintLJavMvd = BigInt("1611")
		const FairStockEquityUny26aH = await FairStockEquity.new(addressjbwPVnK, addressmFzIme8, addressC4XQ3kr, addressigJQx6W, uintLJavMvd, {from: accounts[2]});
		const uintuBpkTu8 = BigInt("843")
		const uintnuDaQPQ = BigInt("1660")
		const addressikF2sTs = accounts[3]
		const addressoSh6Xo = accounts[0]
		const uintjBVCcny = BigInt("405")
		const addressx8oZCZn = await FairStockEquityUny26aH.withdrawMTCallback.call(addressikF2sTs, uintnuDaQPQ, uintuBpkTu8, {from: accounts[1]});
		const addressUG0tnUn = await FairStockEquityUny26aH.setDataSource.call(addressoSh6Xo, {from: accounts[3]});
		const uint256X6qTcYA = await FairStockEquityUny26aH.getCostAmount.call(uintjBVCcny, {from: accounts[5]});

		await expect(FairStockEquityUny26aH.withdrawMTCallback.call(addressikF2sTs, uintnuDaQPQ, uintuBpkTu8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressLqBOYg = "0x0000000000000000000000000000000000000001"
		const addressYVlv0Mp = accounts[4]
		const addressn14E4ax = accounts[0]
		const addressbtAzJaJ = accounts[4]
		const uintXVcgnps = BigInt("1212")
		const FairStockEquitycJ4NhL = await FairStockEquity.new(addressLqBOYg, addressYVlv0Mp, addressn14E4ax, addressbtAzJaJ, uintXVcgnps, {from: accounts[2]});
		const uintsmvSPv1 = BigInt("364")
		const uintYwyHJJ = BigInt("1499")
		const addresskyWGLto = accounts[1]
		const uintJHSFnKQ = BigInt("1144")
		const uintnoce4m = BigInt("1362")
		const uintNecGQlJ = BigInt("55")
		const uintj5wKzoQ = BigInt("99")
		const uintkO1WAAF = BigInt("1301")
		const uintdcw5cr2 = BigInt("907")
		const uintzVrgAP = BigInt("228")
		const uintIWclyU9 = BigInt("1969")
		const addressKT7UcYB = "0x0000000000000000000000000000000000000001"
		const addressgAJt2KV = await FairStockEquitycJ4NhL.setModule.call(addresskyWGLto, uintYwyHJJ, uintsmvSPv1, {from: accounts[2]});
		const uint256a36R9i2 = await FairStockEquitycJ4NhL.setStartTime.call(uintJHSFnKQ, {from: accounts[2]});
		const uint256e9Mpsl5 = await FairStockEquitycJ4NhL.reduceShare.call(uintnoce4m, {from: accounts[2]});
		const uint256ygcEZ0 = await FairStockEquitycJ4NhL.setDegree.call(uintzVrgAP, uintdcw5cr2, uintkO1WAAF, uintj5wKzoQ, uintNecGQlJ, {from: accounts[4]});
		const addressisBoQw5 = await FairStockEquitycJ4NhL.withdrawLPT.call(addressKT7UcYB, uintIWclyU9, {from: accounts[2]});
		await FairStockEquitycJ4NhL.withdrawBonus.call({from: accounts[3]});

		await expect(FairStockEquitycJ4NhL.setStartTime.call(uintJHSFnKQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})