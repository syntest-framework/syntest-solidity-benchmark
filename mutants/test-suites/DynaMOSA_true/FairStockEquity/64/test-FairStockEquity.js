const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressIMswuJy = "0x0000000000000000000000000000000000000001"
		const addressEVaOsNL = accounts[1]
		const addressKuKLXKv = accounts[3]
		const addresspabe5ly = accounts[2]
		const uintv908oJk = BigInt("1501")
		const FairStockEquityAaov1Lm = await FairStockEquity.new(addressIMswuJy, addressEVaOsNL, addressKuKLXKv, addresspabe5ly, uintv908oJk, {from: "0x0000000000000000000000000000000000000001"});
		const uintRYjo3j = BigInt("252")
		const addressq32PhhE = accounts[4]
		const uintGa7yV0D = BigInt("1401")
		const uintjzq9KVR = BigInt("324")
		const uintBsq5rSp = BigInt("1011")
		const uintnqN6U4f = BigInt("71")
		const uintFIxAVVp = BigInt("957")
		const uintaJcU6e = BigInt("187")
		const addressMuo1OOz = accounts[2]
		const addressK282ecp = await FairStockEquityAaov1Lm.withdrawLPT.call(addressq32PhhE, uintRYjo3j, {from: accounts[3]});
		const uint256vawofg3 = await FairStockEquityAaov1Lm.setProfitPercentPJ.call(uintGa7yV0D, {from: accounts[2]});
		const uint256wWCiUvw = await FairStockEquityAaov1Lm.setStartTime.call(uintjzq9KVR, {from: accounts[2]});
		const addresswx2wFQc = await FairStockEquityAaov1Lm.business.call(addressMuo1OOz, uintaJcU6e, uintFIxAVVp, uintnqN6U4f, uintBsq5rSp, {from: accounts[0]});
	});

	it('test for FairStockEquity', async () => {
		const addresseekvUII = accounts[4]
		const addressaRDJYZD = accounts[3]
		const addressGlIBf0t = accounts[0]
		const addressZc5JCrx = accounts[1]
		const uintW6PxOHA = BigInt("316")
		const FairStockEquityfqiufom = await FairStockEquity.new(addresseekvUII, addressaRDJYZD, addressGlIBf0t, addressZc5JCrx, uintW6PxOHA, {from: accounts[2]});
		const uintvjsBZ4t = BigInt("1411")
		const uintBejwh11 = BigInt("1881")
		const addressOuUAD32 = accounts[1]
		const uintbWBwyhz = BigInt("1317")
		const uintDgnxB7w = BigInt("1264")
		const addressP6zSPV2 = accounts[4]
		const uintLez5dsr = BigInt("84")
//		const addresscGt126k = await FairStockEquityfqiufom.setModule.call(addressOuUAD32, uintBejwh11, uintvjsBZ4t, {from: accounts[1]});
//		const uint256Ev6rDM3 = await FairStockEquityfqiufom.invest.call(uintbWBwyhz, {from: accounts[2]});
//		const uint256jKu1rhA = await FairStockEquityfqiufom.setGasFeeForCallback.call(uintDgnxB7w, {from: accounts[2]});
//		const addressUJXAaTY = await FairStockEquityfqiufom.setDataSource.call(addressP6zSPV2, {from: accounts[2]});
//		const uint256mjJH2Gx = await FairStockEquityfqiufom.getCostAmount.call(uintLez5dsr, {from: accounts[3]});

		await expect(FairStockEquityfqiufom.setModule.call(addressOuUAD32, uintBejwh11, uintvjsBZ4t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressjgq1gk6 = accounts[3]
		const addressIknNgYU = "0x0000000000000000000000000000000000000001"
		const addressGYmte3G = accounts[5]
		const addresschVfLK = "0x0000000000000000000000000000000000000001"
		const uintmNKcmB = BigInt("1122")
		const FairStockEquityDkTTGj4 = await FairStockEquity.new(addressjgq1gk6, addressIknNgYU, addressGYmte3G, addresschVfLK, uintmNKcmB, {from: accounts[3]});
		const uintstGLuP8 = BigInt("195")
		const uintcGkCtRY = BigInt("1689")
		const addressn9Mm12h = accounts[2]
		const uint8yjIfV = BigInt("1070")
		const addressd1f1du = accounts[2]
		const uint8gwGMx = BigInt("412")
		const uintifSfZ4Q = BigInt("1443")
		const uinteNTWXaJ = BigInt("1874")
		const uintXC5O6Ce = BigInt("793")
		const uinteouedCi = BigInt("1446")
//		const uint2566zwoHA = await FairStockEquityDkTTGj4.invest.call(uintstGLuP8, {from: accounts[4]});
//		await FairStockEquityDkTTGj4.onlyDataSource.call({from: accounts[4]});
//		const addressOMpxVTy = await FairStockEquityDkTTGj4.withdrawLPT.call(addressn9Mm12h, uintcGkCtRY, {from: accounts[0]});
//		const addressnhq1fiS = await FairStockEquityDkTTGj4.depositLPT.call(addressd1f1du, uint8yjIfV, {from: accounts[5]});
//		const uint256jQwkSVx = await FairStockEquityDkTTGj4.setDegree.call(uinteouedCi, uintXC5O6Ce, uinteNTWXaJ, uintifSfZ4Q, uint8gwGMx, {from: accounts[3]});

		await expect(FairStockEquityDkTTGj4.invest.call(uintstGLuP8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresshyIiYh9 = accounts[4]
		const addressYrAbmG = accounts[3]
		const addressqMO2G3v = accounts[2]
		const addressqh1ozLA = accounts[3]
		const uinttYmfxU = BigInt("811")
		const FairStockEquitymEjIAZD = await FairStockEquity.new(addresshyIiYh9, addressYrAbmG, addressqMO2G3v, addressqh1ozLA, uinttYmfxU, {from: accounts[1]});
		const uintOgdBKd3 = BigInt("755")
		const uintYDh6NLY = BigInt("1036")
		const addressOLtc5YG = accounts[2]
		const uintinhoe1K = BigInt("989")
//		const addressVh5l6Q8 = await FairStockEquitymEjIAZD.withdrawMTCallback.call(addressOLtc5YG, uintYDh6NLY, uintOgdBKd3, {from: accounts[1]});
//		const uint256jglgXhb = await FairStockEquitymEjIAZD.setProfitPercentBonus.call(uintinhoe1K, {from: accounts[5]});
//		await FairStockEquitymEjIAZD.withdrawMT.call({from: accounts[2]});
//		await FairStockEquitymEjIAZD.withdrawMT.call({from: accounts[0]});

		await expect(FairStockEquitymEjIAZD.withdrawMTCallback.call(addressOLtc5YG, uintYDh6NLY, uintOgdBKd3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressWGVLCcd = accounts[1]
		const addressX4nMwqo = "0x0000000000000000000000000000000000000001"
		const addressYYpxVRy = "0x0000000000000000000000000000000000000001"
		const addressduml6qi = accounts[4]
		const uintTxgc8Sm = BigInt("1728")
		const FairStockEquitykL4iXm = await FairStockEquity.new(addressWGVLCcd, addressX4nMwqo, addressYYpxVRy, addressduml6qi, uintTxgc8Sm, {from: accounts[2]});
		const uintQCmFZwT = BigInt("74")
		const uintecRhWA3 = BigInt("161")
		const uint1rEvEK = BigInt("1497")
		const uintU1AJcdI = BigInt("623")
		const addressYpewOFG = accounts[4]
		const uintuXKXAdN = BigInt("1525")
		const boolwF2cj4Z = false
		const addressrwSV4Bd = accounts[4]
		const uintoKCWow4 = BigInt("888")
//		const addressZl6If8B = await FairStockEquitykL4iXm.business.call(addressYpewOFG, uintU1AJcdI, uint1rEvEK, uintecRhWA3, uintQCmFZwT, {from: accounts[4]});
//		const uint256p2a76qn = await FairStockEquitykL4iXm.setProfitPercentPJ.call(uintuXKXAdN, {from: accounts[3]});
//		await FairStockEquitykL4iXm.onlyDataSource.call({from: accounts[0]});
//		const addressm9vzN33 = await FairStockEquitykL4iXm.setLPT.call(addressrwSV4Bd, boolwF2cj4Z, {from: accounts[3]});
//		const uint256hRoUGg1 = await FairStockEquitykL4iXm.setProfitPercentMT.call(uintoKCWow4, {from: accounts[4]});

		await expect(FairStockEquitykL4iXm.business.call(addressYpewOFG, uintU1AJcdI, uint1rEvEK, uintecRhWA3, uintQCmFZwT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressl6dwjY = accounts[1]
		const addressnA6ixx5 = "0x0000000000000000000000000000000000000001"
		const addressWGFEqcn = accounts[3]
		const addresszl2GHCi = accounts[4]
		const uintyxSYiFm = BigInt("2017")
		const FairStockEquityHSnsqf = await FairStockEquity.new(addressl6dwjY, addressnA6ixx5, addressWGFEqcn, addresszl2GHCi, uintyxSYiFm, {from: accounts[5]});
		const uints3EF0LT = BigInt("1914")
//		await FairStockEquityHSnsqf.withdrawBonus.call({from: accounts[0]});
//		await FairStockEquityHSnsqf.withdrawMT.call({from: accounts[2]});
//		const uint256igtcUla = await FairStockEquityHSnsqf.depositBonus.call(uints3EF0LT, {from: accounts[1]});

		await expect(FairStockEquityHSnsqf.withdrawBonus.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressRfYj2Dl = accounts[3]
		const addressEUuVxpq = accounts[3]
		const addresslmxZVBh = accounts[3]
		const addresstS0uVxw = accounts[4]
		const uintATuKHMq = BigInt("971")
		const FairStockEquitySvEA7hp = await FairStockEquity.new(addressRfYj2Dl, addressEUuVxpq, addresslmxZVBh, addresstS0uVxw, uintATuKHMq, {from: accounts[2]});
		const addresslFchaA6 = accounts[5]
		const addressBHloiC1 = "0x0000000000000000000000000000000000000001"
//		await FairStockEquitySvEA7hp.withdrawMT.call({from: accounts[1]});
//		await FairStockEquitySvEA7hp.withdrawMT.call({from: accounts[0]});
//		const addressgBIkqE = await FairStockEquitySvEA7hp.setDataSource.call(addresslFchaA6, {from: accounts[4]});
//		const addressVGy5lBz = await FairStockEquitySvEA7hp.setDataSource.call(addressBHloiC1, {from: accounts[2]});

		await expect(FairStockEquitySvEA7hp.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDlKbhq = accounts[3]
		const addressk2RS2Hd = accounts[4]
		const addressNUjTRJg = accounts[0]
		const addresslpxaoBp = accounts[2]
		const uintbc9I0ct = BigInt("1566")
		const FairStockEquityuiSFnBM = await FairStockEquity.new(addressDlKbhq, addressk2RS2Hd, addressNUjTRJg, addresslpxaoBp, uintbc9I0ct, {from: accounts[4]});
		const uintJ1pcIWs = BigInt("944")
		const addressG7jMsho = accounts[3]
//		const addresshz0zGBD = await FairStockEquityuiSFnBM.depositLPT.call(addressG7jMsho, uintJ1pcIWs, {from: accounts[1]});
//		await FairStockEquityuiSFnBM.withdrawBonus.call({from: accounts[1]});

		await expect(FairStockEquityuiSFnBM.depositLPT.call(addressG7jMsho, uintJ1pcIWs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressoh0NfhH = accounts[5]
		const addressIgHxrrT = accounts[5]
		const addressC8ip6it = accounts[5]
		const addressCgEPTg = accounts[1]
		const uintxrbdKHv = BigInt("340")
		const FairStockEquityOurb37h = await FairStockEquity.new(addressoh0NfhH, addressIgHxrrT, addressC8ip6it, addressCgEPTg, uintxrbdKHv, {from: accounts[0]});
		const uintZraJMe = BigInt("764")
		const uintM9lKFSR = BigInt("987")
//		await FairStockEquityOurb37h.checkStart.call({from: accounts[3]});
//		const uint256gDS81C = await FairStockEquityOurb37h.setGasFeeForCallback.call(uintZraJMe, {from: accounts[1]});
//		const uint256bXL3ZFV = await FairStockEquityOurb37h.depositBonus.call(uintM9lKFSR, {from: accounts[0]});

		await expect(FairStockEquityOurb37h.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEPD8u0 = "0x0000000000000000000000000000000000000001"
		const addressf2DfAyd = "0x0000000000000000000000000000000000000001"
		const addressgtnDD7 = accounts[1]
		const addressqANpmF2 = accounts[3]
		const uintV5b6mas = BigInt("65")
		const FairStockEquityhULlaSJ = await FairStockEquity.new(addressEPD8u0, addressf2DfAyd, addressgtnDD7, addressqANpmF2, uintV5b6mas, {from: accounts[1]});
		const boolzVd7q2a = false
		const addressoCVTj2g = accounts[1]
		const booleWccCqE = false
		const addresspl4liMs = accounts[0]
		const uintvolooSY = BigInt("1779")
		const uintfJjxuOS = BigInt("575")
		const addressi43nFAS = accounts[2]
		const addressIVkspT = await FairStockEquityhULlaSJ.setLPT.call(addressoCVTj2g, boolzVd7q2a, {from: accounts[1]});
//		const addressTchqseA = await FairStockEquityhULlaSJ.setLPT.call(addresspl4liMs, booleWccCqE, {from: "0x0000000000000000000000000000000000000001"});
//		await FairStockEquityhULlaSJ.withdrawMT.call({from: accounts[2]});
//		const addressD9kwBoX = await FairStockEquityhULlaSJ.setModule.call(addressi43nFAS, uintfJjxuOS, uintvolooSY, {from: accounts[1]});

		await expect(FairStockEquityhULlaSJ.setLPT.call(addresspl4liMs, booleWccCqE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressCQVMQ7N = accounts[2]
		const addressWnfP1OG = "0x0000000000000000000000000000000000000001"
		const addresstl8XdCP = accounts[3]
		const addressTASESbA = accounts[3]
		const uintcbLl9jN = BigInt("1628")
		const FairStockEquityTnPcBnV = await FairStockEquity.new(addressCQVMQ7N, addressWnfP1OG, addresstl8XdCP, addressTASESbA, uintcbLl9jN, {from: accounts[2]});
		const uintIc53BnN = BigInt("777")
		const uintBmXJ7sU = BigInt("549")
		const uintmIbhJ8e = BigInt("483")
		const uintLgpazeg = BigInt("1867")
		const uintQ0gv1IL = BigInt("247")
		const uintsXhnbCU = BigInt("1191")
		const addressp2GOX0c = accounts[4]
		const uint256vvsK53f = await FairStockEquityTnPcBnV.setDegree.call(uintQ0gv1IL, uintLgpazeg, uintmIbhJ8e, uintBmXJ7sU, uintIc53BnN, {from: accounts[2]});
//		const addressyMVo3me = await FairStockEquityTnPcBnV.withdrawLPT.call(addressp2GOX0c, uintsXhnbCU, {from: accounts[2]});

		await expect(FairStockEquityTnPcBnV.withdrawLPT.call(addressp2GOX0c, uintsXhnbCU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressl9Dvvgu = accounts[5]
		const addressIoaJVCp = accounts[1]
		const addressQ7bWBSy = accounts[2]
		const addressRWDYpwM = accounts[0]
		const uintHwYC8Pi = BigInt("153")
		const FairStockEquityklTGjAL = await FairStockEquity.new(addressl9Dvvgu, addressIoaJVCp, addressQ7bWBSy, addressRWDYpwM, uintHwYC8Pi, {from: accounts[3]});
		const uintDah3dw1 = BigInt("1561")
		const addressNQXTj2G = accounts[2]
		const addressqFobxd0 = "0x0000000000000000000000000000000000000001"
		const boolgYR66W2 = false
		const addresssxD8Zxf = accounts[5]
//		const uint256tiADdaS = await FairStockEquityklTGjAL.setProfitPercentBonus.call(uintDah3dw1, {from: accounts[4]});
//		const addressCvQfrgk = await FairStockEquityklTGjAL.setDataSource.call(addressNQXTj2G, {from: accounts[4]});
//		const addressceQ7Mbk = await FairStockEquityklTGjAL.setDataSource.call(addressqFobxd0, {from: accounts[0]});
//		await FairStockEquityklTGjAL.withdrawPJ.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressF2KD26c = await FairStockEquityklTGjAL.setLPT.call(addresssxD8Zxf, boolgYR66W2, {from: accounts[3]});

		await expect(FairStockEquityklTGjAL.setProfitPercentBonus.call(uintDah3dw1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressxy9Q3Ov = accounts[1]
		const addresscU1GVl7 = "0x0000000000000000000000000000000000000001"
		const addressf2jccrx = "0x0000000000000000000000000000000000000001"
		const addresslnFe9hA = accounts[4]
		const uintCXjKDB8 = BigInt("1728")
		const FairStockEquitykL4iXm = await FairStockEquity.new(addressxy9Q3Ov, addresscU1GVl7, addressf2jccrx, addresslnFe9hA, uintCXjKDB8, {from: accounts[2]});
		const uintDyjStcB = BigInt("119")
		const uintF3qLkmB = BigInt("30")
		const uintUCzzFQC = BigInt("161")
		const uintQKHPoCt = BigInt("1498")
		const uintCl7K5C3 = BigInt("623")
		const addressGc06DX = accounts[4]
		const addressU6w5J1p = accounts[3]
		const boolwF2cj4Z = true
		const addressxY3z7l = accounts[1]
		const uintOP5q3Qh = BigInt("1052")
//		const uint256PlMCjlZ = await FairStockEquitykL4iXm.reduceShare.call(uintDyjStcB, {from: accounts[4]});
//		const addressZl6If8B = await FairStockEquitykL4iXm.business.call(addressGc06DX, uintCl7K5C3, uintQKHPoCt, uintUCzzFQC, uintF3qLkmB, {from: accounts[4]});
//		const addresssdC3UO2 = await FairStockEquitykL4iXm.setDataSource.call(addressU6w5J1p, {from: "0x0000000000000000000000000000000000000001"});
//		const addressm9vzN33 = await FairStockEquitykL4iXm.setLPT.call(addressxY3z7l, boolwF2cj4Z, {from: accounts[3]});
//		const uint256Nz9mfO9 = await FairStockEquitykL4iXm.setProfitPercentMT.call(uintOP5q3Qh, {from: accounts[1]});

		await expect(FairStockEquitykL4iXm.reduceShare.call(uintDyjStcB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressX8yag2F = accounts[1]
		const addressSlEprf5 = "0x0000000000000000000000000000000000000001"
		const addressd0lIFAx = "0x0000000000000000000000000000000000000001"
		const addressYVO6O4F = accounts[4]
		const uintPqZnPOp = BigInt("1728")
		const FairStockEquitykL4iXm = await FairStockEquity.new(addressX8yag2F, addressSlEprf5, addressd0lIFAx, addressYVO6O4F, uintPqZnPOp, {from: accounts[2]});
		const uintdYK2Wgm = BigInt("1755")
		const uintn4w2E9I = BigInt("1814")
		const addressElu8CAd = accounts[5]
		const uint6Ck6HP = BigInt("74")
		const uinthODjCZ = BigInt("161")
		const uintyEsvHhG = BigInt("1497")
		const uintvFy6VT = BigInt("623")
		const addressFZm1vdz = accounts[4]
		const boolwF2cj4Z = false
		const addresssQoAIIG = accounts[1]
		const uintE63Wjce = BigInt("888")
//		const addresshrJ07Pk = await FairStockEquitykL4iXm.withdrawMTCallback.call(addressElu8CAd, uintn4w2E9I, uintdYK2Wgm, {from: accounts[4]});
//		const addressZl6If8B = await FairStockEquitykL4iXm.business.call(addressFZm1vdz, uintvFy6VT, uintyEsvHhG, uinthODjCZ, uint6Ck6HP, {from: accounts[4]});
//		const addressm9vzN33 = await FairStockEquitykL4iXm.setLPT.call(addresssQoAIIG, boolwF2cj4Z, {from: accounts[3]});
//		const uint256hRoUGg1 = await FairStockEquitykL4iXm.setProfitPercentMT.call(uintE63Wjce, {from: accounts[4]});

		await expect(FairStockEquitykL4iXm.withdrawMTCallback.call(addressElu8CAd, uintn4w2E9I, uintdYK2Wgm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrTqMLC8 = accounts[0]
		const addressqV1AQqQ = accounts[2]
		const addressF7SgHYD = "0x0000000000000000000000000000000000000001"
		const addressHA9zcFk = accounts[5]
		const uintpFBhVhI = BigInt("1049")
		const FairStockEquitysqMJAAa = await FairStockEquity.new(addressrTqMLC8, addressqV1AQqQ, addressF7SgHYD, addressHA9zcFk, uintpFBhVhI, {from: accounts[4]});
		const uintd3vch2X = BigInt("485")
		const uinth4HBhWX = BigInt("695")
		const uintvDIC91O = BigInt("1372")
		const addressBW4dFLS = accounts[0]
		const uintN65FsIn = BigInt("574")
		const addressbxj0vPy = accounts[2]
//		const uint256xK8Qi2W = await FairStockEquitysqMJAAa.setStartTime.call(uintd3vch2X, {from: accounts[4]});
//		await FairStockEquitysqMJAAa.withdrawPJ.call({from: accounts[0]});
//		const uint256ZOBBp1y = await FairStockEquitysqMJAAa.setProfitPercentBonus.call(uinth4HBhWX, {from: accounts[2]});
//		await FairStockEquitysqMJAAa.onlyDataSource.call({from: accounts[2]});
//		const addresscHaFpbu = await FairStockEquitysqMJAAa.depositLPT.call(addressBW4dFLS, uintvDIC91O, {from: accounts[0]});
//		const addressZYODU23 = await FairStockEquitysqMJAAa.withdrawLPT.call(addressbxj0vPy, uintN65FsIn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquitysqMJAAa.setStartTime.call(uintd3vch2X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresscSiMu9G = accounts[3]
		const addresskZzppi0 = "0x0000000000000000000000000000000000000001"
		const addressLYQ4zYU = accounts[5]
		const addressRQjvSQd = "0x0000000000000000000000000000000000000001"
		const uinteJTMR8a = BigInt("1122")
		const FairStockEquityDkTTGj4 = await FairStockEquity.new(addresscSiMu9G, addresskZzppi0, addressLYQ4zYU, addressRQjvSQd, uinteJTMR8a, {from: accounts[3]});
		const uintzw2VpyH = BigInt("1274")
		const uintGuMW6SL = BigInt("1689")
		const addressCXplmDZ = accounts[3]
//		await FairStockEquityDkTTGj4.withdrawPJ.call({from: accounts[3]});
//		const uint2566zwoHA = await FairStockEquityDkTTGj4.invest.call(uintzw2VpyH, {from: accounts[4]});
//		const addressOMpxVTy = await FairStockEquityDkTTGj4.withdrawLPT.call(addressCXplmDZ, uintGuMW6SL, {from: accounts[0]});

		await expect(FairStockEquityDkTTGj4.withdrawPJ.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressrs3BgxG = accounts[3]
		const addressGHugSf8 = accounts[4]
		const addressJSwwYQY = accounts[0]
		const addressCR0JsEP = accounts[2]
		const uintQpcukqs = BigInt("1566")
		const FairStockEquityuiSFnBM = await FairStockEquity.new(addressrs3BgxG, addressGHugSf8, addressJSwwYQY, addressCR0JsEP, uintQpcukqs, {from: accounts[4]});
		const uintg11KGdI = BigInt("1494")
		const uintwjMJxRy = BigInt("944")
		const addressZoe9iuD = accounts[2]
		const uintxDkfwhT = BigInt("2008")
		const uintrIzACes = BigInt("1154")
//		const uint256A9sEj6r = await FairStockEquityuiSFnBM.depositBonus.call(uintg11KGdI, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshz0zGBD = await FairStockEquityuiSFnBM.depositLPT.call(addressZoe9iuD, uintwjMJxRy, {from: accounts[1]});
//		const uint256FOmuSB4 = await FairStockEquityuiSFnBM.setProfitPercentMT.call(uintxDkfwhT, {from: accounts[1]});
//		await FairStockEquityuiSFnBM.withdrawMT.call({from: accounts[5]});
//		const uint256W3uCai = await FairStockEquityuiSFnBM.setProfitPercentBonus.call(uintrIzACes, {from: accounts[1]});

		await expect(FairStockEquityuiSFnBM.depositBonus.call(uintg11KGdI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvsOa3J = accounts[3]
		const addressqMpFSTF = accounts[4]
		const address5xQAZ4 = accounts[0]
		const addressUQ1WFa = accounts[2]
		const uintaQb6jln = BigInt("1566")
		const FairStockEquityuiSFnBM = await FairStockEquity.new(addressvsOa3J, addressqMpFSTF, address5xQAZ4, addressUQ1WFa, uintaQb6jln, {from: accounts[4]});
		const uintgM7Ed3P = BigInt("515")
		const uinti2zQI9p = BigInt("122")
		const uintk5THqCo = BigInt("1987")
		const uintfzvvQtk = BigInt("367")
		const addressIAdPAVo = accounts[4]
		const uintQPcedXF = BigInt("837")
		const uintgPukc0 = BigInt("944")
		const addressuqBrK2l = "0x0000000000000000000000000000000000000002"
		const uintaWFcNbC = BigInt("312")
		const uintsQG5uP8 = BigInt("1672")
		const uintQC5AZq1 = BigInt("563")
		const uintTR5nNL4 = BigInt("1337")
		const uintV76iF0b = BigInt("830")
		const uintePJB6ao = BigInt("887")
//		await FairStockEquityuiSFnBM.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressdXbzsUo = await FairStockEquityuiSFnBM.business.call(addressIAdPAVo, uintfzvvQtk, uintk5THqCo, uinti2zQI9p, uintgM7Ed3P, {from: accounts[0]});
//		const uint256s3ij0xD = await FairStockEquityuiSFnBM.setProfitPercentPJ.call(uintQPcedXF, {from: accounts[4]});
//		const addresshz0zGBD = await FairStockEquityuiSFnBM.depositLPT.call(addressuqBrK2l, uintgPukc0, {from: accounts[1]});
//		const uint256ihhrXhL = await FairStockEquityuiSFnBM.reduceShare.call(uintaWFcNbC, {from: accounts[4]});
//		const uint256f825BQn = await FairStockEquityuiSFnBM.setDegree.call(uintePJB6ao, uintV76iF0b, uintTR5nNL4, uintQC5AZq1, uintsQG5uP8, {from: accounts[0]});
//		await FairStockEquityuiSFnBM.withdrawBonus.call({from: accounts[1]});

		await expect(FairStockEquityuiSFnBM.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressyK96Lt7 = accounts[0]
		const addressh0r3dzK = accounts[4]
		const addressi2cF808 = accounts[2]
		const addresskRNkZMf = accounts[3]
		const uintys87GSV = BigInt("1294")
		const FairStockEquitylYsLtXY = await FairStockEquity.new(addressyK96Lt7, addressh0r3dzK, addressi2cF808, addresskRNkZMf, uintys87GSV, {from: accounts[4]});
		const uintvuvRd7s = BigInt("731")
		const uintyT6i8fe = BigInt("337")
		const addressc8bTaP7 = accounts[3]
		const uintfDTFKKa = BigInt("1178")
		const uinto67lVTF = BigInt("16")
		const addresslrTz8b = accounts[2]
		const uintJutVy00 = BigInt("1208")
		const uintOyWewtU = BigInt("1146")
//		const addressAc0msJZ = await FairStockEquitylYsLtXY.withdrawBonusCallback.call(addressc8bTaP7, uintyT6i8fe, uintvuvRd7s, {from: accounts[3]});
//		const uint256kcGOUn = await FairStockEquitylYsLtXY.invest.call(uintfDTFKKa, {from: accounts[3]});
//		const addressGfLaIAM = await FairStockEquitylYsLtXY.depositLPT.call(addresslrTz8b, uinto67lVTF, {from: accounts[1]});
//		const uint256Er346fb = await FairStockEquitylYsLtXY.invest.call(uintJutVy00, {from: accounts[0]});
//		const uint256FjGjEie = await FairStockEquitylYsLtXY.setGasFeeForCallback.call(uintOyWewtU, {from: accounts[3]});

		await expect(FairStockEquitylYsLtXY.withdrawBonusCallback.call(addressc8bTaP7, uintyT6i8fe, uintvuvRd7s, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressJnofQ31 = accounts[3]
		const addressojysLNu = accounts[4]
		const addressTOjTd7W = accounts[0]
		const addressW6cCUM3 = accounts[2]
		const uintBZYQeu = BigInt("1566")
		const FairStockEquityuiSFnBM = await FairStockEquity.new(addressJnofQ31, addressojysLNu, addressTOjTd7W, addressW6cCUM3, uintBZYQeu, {from: accounts[4]});
		const uintAVqSX4D = BigInt("47")
		const uintZ9GTHWz = BigInt("1557")
		const addressa9bPmQT = accounts[5]
		const uintqgjTik = BigInt("1955")
		const addressvCSfq4t = await FairStockEquityuiSFnBM.setModule.call(addressa9bPmQT, uintZ9GTHWz, uintAVqSX4D, {from: accounts[4]});
//		await FairStockEquityuiSFnBM.f.call({from: accounts[0]});
//		const uint256yzArWYH = await FairStockEquityuiSFnBM.getCostAmount.call(uintqgjTik, {from: accounts[4]});

		await expect(FairStockEquityuiSFnBM.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresszyQudCU = accounts[3]
		const address807Byc = accounts[4]
		const addresslClT9rT = accounts[0]
		const addressxQFWakV = accounts[2]
		const uintrOf21Yo = BigInt("1566")
		const FairStockEquityuiSFnBM = await FairStockEquity.new(addresszyQudCU, address807Byc, addresslClT9rT, addressxQFWakV, uintrOf21Yo, {from: accounts[4]});
		const uintNJ9eN4G = BigInt("1398")
		const uintsplmTJJ = BigInt("1379")
		const uintt9p4Xqv = BigInt("1425")
		const uintt8AA3SK = BigInt("0")
		const addressoTJds4w = accounts[4]
		const uint0HzJCE = BigInt("1772")
		const uintbkRCuaA = BigInt("713")
		const uintnOvL5vZ = BigInt("1482")
		const uintjmzaLsf = BigInt("135")
		const uintjcuIvDj = BigInt("854")
		const uintvVspvNM = BigInt("795")
		const addressAXI3aWP = accounts[2]
		const uintwicpYDr = BigInt("382")
//		const addressTsy0Nb5 = await FairStockEquityuiSFnBM.business.call(addressoTJds4w, uintt8AA3SK, uintt9p4Xqv, uintsplmTJJ, uintNJ9eN4G, {from: accounts[5]});
//		const uint256Ywzze4g = await FairStockEquityuiSFnBM.setDegree.call(uintjcuIvDj, uintjmzaLsf, uintnOvL5vZ, uintbkRCuaA, uint0HzJCE, {from: accounts[4]});
//		const addressOOx7FBc = await FairStockEquityuiSFnBM.withdrawLPT.call(addressAXI3aWP, uintvVspvNM, {from: accounts[4]});
//		const uint256bZnkBu = await FairStockEquityuiSFnBM.getCostAmount.call(uintwicpYDr, {from: accounts[0]});

		await expect(FairStockEquityuiSFnBM.business.call(addressoTJds4w, uintt8AA3SK, uintt9p4Xqv, uintsplmTJJ, uintNJ9eN4G, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})