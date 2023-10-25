const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenGCmASfW = await POWToken.new({from: accounts[2]});
		const uintYSK5k0M = BigInt("1314")
		const addressPMdu00s = accounts[3]
		const uintfueFnZs = BigInt("1373")
		const addressyQm2vl6 = "0x0000000000000000000000000000000000000001"
		const uintAnHnkvC = BigInt("1055")
		const uints3C8o8L = BigInt("977")
		const uinttwgi8SC = BigInt("710")
		const uinte4zfuEe = BigInt("1411")
		const uintNdg783 = BigInt("1027")
		const addressFq0sJVq = accounts[0]
		const addressfM8fVsl = accounts[2]
		const addresswsRerDi = accounts[4]
		const addressLApbXJH = accounts[0]
		const addressi0kKFUd = accounts[0]
		const addresschZnvwI = accounts[0]
		const addresspsaH9Mv = accounts[4]
		const addressEsoE3Im = accounts[4]
		const stringdVT3M1d = "D4As8iPxLQuiqhNT8gKGUaMiP97AV37HnUYa1S9ZEHmgkao2Z8kkheaBYcvgUpl4BaY28PkvCIGjV7pfFish"
		const stringLQEYWuF = "7e4xQFoaE45FRlUmei4snhLbE2wOv8A7NoArbUPH8WH8DzkNsMzyfEBmJH6JsGGj9gVto"
		const boolMMiE4UZ = await POWTokenGCmASfW.transfer.call(addressPMdu00s, uintYSK5k0M, {from: accounts[2]});
		const uint256Wk04H3d = await POWTokenGCmASfW.setStartMiningTime.call(uintfueFnZs, {from: accounts[5]});
		const addressX8oUnQx = await POWTokenGCmASfW.setParamSetter.call(addressyQm2vl6, {from: accounts[4]});
		const stringQkqPF0 = await POWTokenGCmASfW.initialize.call(stringLQEYWuF, stringdVT3M1d, addressEsoE3Im, addresspsaH9Mv, addresschZnvwI, addressi0kKFUd, addressLApbXJH, addresswsRerDi, addressfM8fVsl, addressFq0sJVq, uintNdg783, uinte4zfuEe, uinttwgi8SC, uints3C8o8L, uintAnHnkvC, {from: accounts[2]});

		await expect(POWTokenGCmASfW.transfer.call(addressPMdu00s, uintYSK5k0M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenfDjZDSw = await POWToken.new({from: accounts[1]});
		const uintxye1M7G = BigInt("1523")
		const uint256fcvQXb6 = await POWTokenfDjZDSw.setDepreciationNumerator.call(uintxye1M7G, {from: accounts[0]});
		await POWTokenfDjZDSw.onlyParamSetter.call({from: accounts[5]});

		await expect(POWTokenfDjZDSw.setDepreciationNumerator.call(uintxye1M7G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenaDilhad = await POWToken.new({from: accounts[4]});
		const addresstP43NhI = accounts[4]
		const uintOhtVM6 = BigInt("545")
		const addressd9R6iZ = accounts[4]
		const addresstJWwBGJ = await POWTokenaDilhad.transferOwnership.call(addresstP43NhI, {from: accounts[3]});
		await POWTokenaDilhad.whenNotPaused.call({from: accounts[1]});
		const uint256A7HNYGj = await POWTokenaDilhad.addHashRate.call(uintOhtVM6, {from: accounts[2]});
		const addressVmWKqEJ = await POWTokenaDilhad.setBtcParam.call(addressd9R6iZ, {from: accounts[0]});
		const uint256lR2KbHq = await POWTokenaDilhad.getCurWorkingRate.call({from: accounts[0]});

		await expect(POWTokenaDilhad.transferOwnership.call(addresstP43NhI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxZOXL1t = await POWToken.new({from: accounts[1]});
		const uintgVzAQ7G = BigInt("902")
		const uintUfJlMyg = BigInt("1531")
		const uint256QdlpaLd = await POWTokenxZOXL1t.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
		await POWTokenxZOXL1t.updateIncomeRate.call({from: accounts[2]});
		await POWTokenxZOXL1t.whenNotPaused.call({from: accounts[5]});
		const uint256Ymg23r = await POWTokenxZOXL1t.setStakingRewardRatio.call(uintgVzAQ7G, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DK4jr3e = await POWTokenxZOXL1t.setStakingRewardRatio.call(uintUfJlMyg, {from: accounts[1]});

		await expect(POWTokenxZOXL1t.getIncomeBTCInWeiPerSec.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDJNGBTt = await POWToken.new({from: accounts[5]});
		const uintJx4rrHz = BigInt("176")
		const addressVYXwuAB = accounts[4]
		const addressqruisgI = accounts[0]
		await POWTokenDJNGBTt.whenPaused.call({from: accounts[1]});
		await POWTokenDJNGBTt.whenPaused.call({from: accounts[1]});
		const boolPQmwApJ = await POWTokenDJNGBTt.transferFrom.call(addressqruisgI, addressVYXwuAB, uintJx4rrHz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenDJNGBTt.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenc7VhuE2 = await POWToken.new({from: accounts[4]});
		const boolql6TcQ = await POWTokenc7VhuE2.paused.call({from: accounts[3]});
		await POWTokenc7VhuE2.unpause.call({from: accounts[0]});
		await POWTokenc7VhuE2.whenPaused.call({from: accounts[1]});
		await POWTokenc7VhuE2.updateIncomeRate.call({from: accounts[4]});

		assert.equal(boolql6TcQ, false)
		await expect(POWTokenc7VhuE2.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenmD2R2F3 = await POWToken.new({from: accounts[4]});
		const uintwrm8Qbe = BigInt("1671")
		const addressHRwxmIt = accounts[3]
		const uintuHpq2um = BigInt("1720")
		const addressvP8gdHP = accounts[3]
		const uintHS2ePfP = BigInt("669")
		const addressmkVVbSA = accounts[0]
		const uintXtJIrzx = BigInt("1197")
		const addressZpBirOo = await POWTokenmD2R2F3.mint.call(addressHRwxmIt, uintwrm8Qbe, {from: accounts[4]});
		const boolBYjfzHp = await POWTokenmD2R2F3.transfer.call(addressvP8gdHP, uintuHpq2um, {from: accounts[2]});
		const addressNWZmypl = await POWTokenmD2R2F3.inCaseTokensGetStuck.call(addressmkVVbSA, uintHS2ePfP, {from: accounts[4]});
		await POWTokenmD2R2F3.onlyOwner.call({from: accounts[1]});
		const uint256Qd0vub = await POWTokenmD2R2F3.setWorkingHashRate.call(uintXtJIrzx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RBf5Vhl = await POWTokenmD2R2F3.getCurWorkingRate.call({from: accounts[3]});

		await expect(POWTokenmD2R2F3.mint.call(addressHRwxmIt, uintwrm8Qbe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIHSqR6h = await POWToken.new({from: accounts[5]});
		const uint1gmg89 = BigInt("1367")
		const addressjpeRDo = accounts[1]
		const uintEdZu5oH = BigInt("40")
		const addressmxlNfO = accounts[1]
		const addresslOW0YZz = accounts[5]
		await POWTokenIHSqR6h.updateIncomeRate.call({from: accounts[5]});
		const booliiI7XAT = await POWTokenIHSqR6h.approve.call(addressjpeRDo, uint1gmg89, {from: accounts[3]});
		const uint256kMKiRo2 = await POWTokenIHSqR6h.setDepreciationNumerator.call(uintEdZu5oH, {from: accounts[0]});
		const address5y6YhF = await POWTokenIHSqR6h.setParamSetter.call(addressmxlNfO, {from: accounts[0]});
		const addresslAP9eCW = await POWTokenIHSqR6h.setParamSetter.call(addresslOW0YZz, {from: accounts[0]});

		await expect(POWTokenIHSqR6h.updateIncomeRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGCmASfW = await POWToken.new({from: accounts[2]});
		const uintTLps7GL = BigInt("1994")
		const uintrFMSycI = BigInt("1314")
		const addressLpFAnlK = accounts[3]
		const uintBwC4XPg = BigInt("1015")
		const addressKILsXXt = accounts[1]
		const uintKqcuq36 = BigInt("1373")
		const addressEv3s8Bo = "0x0000000000000000000000000000000000000001"
		const uint256wy5QXMR = await POWTokenGCmASfW.remainingAmount.call({from: accounts[2]});
		const uint256FtLQFD = await POWTokenGCmASfW.setMinerPoolFeeNumerator.call(uintTLps7GL, {from: accounts[1]});
		const boolMMiE4UZ = await POWTokenGCmASfW.transfer.call(addressLpFAnlK, uintrFMSycI, {from: accounts[2]});
		const addressRJ9KIOe = await POWTokenGCmASfW.claimIncome.call(addressKILsXXt, uintBwC4XPg, {from: accounts[1]});
		const uint256Wk04H3d = await POWTokenGCmASfW.setStartMiningTime.call(uintKqcuq36, {from: accounts[5]});
		const addressX8oUnQx = await POWTokenGCmASfW.setParamSetter.call(addressEv3s8Bo, {from: accounts[4]});

		assert.equal(uint256wy5QXMR, BigInt("0"))
		await expect(POWTokenGCmASfW.setMinerPoolFeeNumerator.call(uintTLps7GL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenRVtlv3 = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspcPzs0 = accounts[2]
		const uintZCKbiSd = BigInt("1968")
		const addressJTClYbq = await POWTokenRVtlv3.setParamSetter.call(addresspcPzs0, {from: accounts[0]});
		await POWTokenRVtlv3.whenNotPaused.call({from: accounts[1]});
		const uint256t3RJaVI = await POWTokenRVtlv3.setStartMiningTime.call(uintZCKbiSd, {from: accounts[2]});
	});

	it('test for POWToken', async () => {
		const POWTokenGCmASfW = await POWToken.new({from: accounts[2]});
		const uintyT9Sew7 = BigInt("1738")
		const addresspTQgWKt = accounts[3]
		const uintcNN9ZY0 = BigInt("1994")
		const uinto7yRx3n = BigInt("1314")
		const addressCUco3Ov = accounts[3]
		const uintCYqLidu = BigInt("608")
		const addressh4e0zZK = accounts[3]
		const addressBcQpwTx = accounts[4]
		const uintJ7rMRB = BigInt("1015")
		const addressgvgSJax = accounts[1]
		const uintCVREC9q = BigInt("1373")
		const addressK8vke6S = "0x0000000000000000000000000000000000000001"
		const uint256wy5QXMR = await POWTokenGCmASfW.remainingAmount.call({from: accounts[2]});
		const booleBamsKt = await POWTokenGCmASfW.approve.call(addresspTQgWKt, uintyT9Sew7, {from: accounts[3]});
		const uint256FtLQFD = await POWTokenGCmASfW.setMinerPoolFeeNumerator.call(uintcNN9ZY0, {from: accounts[1]});
		const boolMMiE4UZ = await POWTokenGCmASfW.transfer.call(addressCUco3Ov, uinto7yRx3n, {from: accounts[2]});
		const boolxfNDnul = await POWTokenGCmASfW.transferFrom.call(addressBcQpwTx, addressh4e0zZK, uintCYqLidu, {from: accounts[0]});
		const addressRJ9KIOe = await POWTokenGCmASfW.claimIncome.call(addressgvgSJax, uintJ7rMRB, {from: accounts[1]});
		const uint256Wk04H3d = await POWTokenGCmASfW.setStartMiningTime.call(uintCVREC9q, {from: accounts[5]});
		const addressX8oUnQx = await POWTokenGCmASfW.setParamSetter.call(addressK8vke6S, {from: accounts[4]});

		assert.equal(booleBamsKt, true)
		assert.equal(uint256wy5QXMR, BigInt("0"))
		await expect(POWTokenGCmASfW.setMinerPoolFeeNumerator.call(uintcNN9ZY0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeni5GVJbJ = await POWToken.new({from: accounts[2]});
		const byteWCSUnVh = "0x1e1405121c02071f1307151802051a150a13200d0b0e0c1405031f132005201f"
		const byteuCuUxGJ = "0x1903070f0b0e0b0e05171509201c1c130c1601030b0b19000205190504110105"
		const uintnud0gy1 = BigInt("231")
		const uintHLv1hww = BigInt("1633")
		const uintvulq974 = BigInt("1224")
		const addressv9hMKC4 = accounts[0]
		const addressboHCDpb = accounts[0]
		const uintg8Iw0YE = BigInt("1328")
		const uintm3jffo = BigInt("517")
		const uintWnXL5as = BigInt("763")
		const uintpVikoHG = BigInt("1549")
		const uintecwfOBg = BigInt("1864")
		const addressZ6NtBHe = accounts[3]
		const addresshTgqQOt = accounts[1]
		const addressEUuC9OY = accounts[2]
		const address66jE68 = accounts[4]
		const addressnNJ2Fb0 = accounts[5]
		const addresslflV1WG = accounts[2]
		const addressYT5MLg3 = accounts[5]
		const addressWALuko9 = accounts[2]
		const stringiy4uIum = "mIQxAOHWWvTjGAQbbhkypdu6dovew7ovolUhTpYvRpzE28k1o6vHFGMcn"
		const stringbxaOqfN = "IqpJDKHtaYHgKp76dg7"
		const addressK4TyNnw = "0x0000000000000000000000000000000000000001"
		const addressO5f00zE = await POWTokeni5GVJbJ.permit.call(addressboHCDpb, addressv9hMKC4, uintvulq974, uintHLv1hww, uintnud0gy1, byteuCuUxGJ, byteWCSUnVh, {from: accounts[2]});
		const stringuSLBFyl = await POWTokeni5GVJbJ.initialize.call(stringbxaOqfN, stringiy4uIum, addressWALuko9, addressYT5MLg3, addresslflV1WG, addressnNJ2Fb0, address66jE68, addressEUuC9OY, addresshTgqQOt, addressZ6NtBHe, uintecwfOBg, uintpVikoHG, uintWnXL5as, uintm3jffo, uintg8Iw0YE, {from: accounts[0]});
		const uint256FEugl0o = await POWTokeni5GVJbJ.remainingAmount.call({from: accounts[2]});
		const addressdumnfUK = await POWTokeni5GVJbJ.setParamSetter.call(addressK4TyNnw, {from: accounts[1]});

		await expect(POWTokeni5GVJbJ.permit.call(addressboHCDpb, addressv9hMKC4, uintvulq974, uintHLv1hww, uintnud0gy1, byteuCuUxGJ, byteWCSUnVh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenIHSqR6h = await POWToken.new({from: accounts[5]});
		const uintUeMXB90 = BigInt("1646")
		const uintBfxxz6D = BigInt("1018")
		const uintTmwB2Wo = BigInt("88")
		const uintHQgZUhi = BigInt("296")
		const uintj77IZx9 = BigInt("1090")
		const addressIGxzaTl = accounts[5]
		const addressCRfNrkx = accounts[1]
		const addressZk7wukz = accounts[4]
		const addresswadg5Ja = accounts[0]
		const addresszjhGHb9 = "0x0000000000000000000000000000000000000001"
		const addressJNsMKAK = accounts[3]
		const addressyOcnJgS = accounts[3]
		const addressSaQB166 = accounts[4]
		const stringCE0ynUr = "8xQdSbSKtSCbqLkwcqTpwGv4uUG"
		const stringZ2REeBJ = "LYuz1zLlMRQC2sR6OU4"
		const uint0QPLII = BigInt("1367")
		const addresswCA3ljw = accounts[1]
		const addresssIijzhi = accounts[1]
		const addressIdtfQBi = accounts[5]
		const stringKRRjZ6L = await POWTokenIHSqR6h.initialize.call(stringZ2REeBJ, stringCE0ynUr, addressSaQB166, addressyOcnJgS, addressJNsMKAK, addresszjhGHb9, addresswadg5Ja, addressZk7wukz, addressCRfNrkx, addressIGxzaTl, uintj77IZx9, uintHQgZUhi, uintTmwB2Wo, uintBfxxz6D, uintUeMXB90, {from: accounts[4]});
		await POWTokenIHSqR6h.updateIncomeRate.call({from: accounts[5]});
		const booliiI7XAT = await POWTokenIHSqR6h.approve.call(addresswCA3ljw, uint0QPLII, {from: accounts[3]});
		const address5y6YhF = await POWTokenIHSqR6h.setParamSetter.call(addresssIijzhi, {from: accounts[0]});
		await POWTokenIHSqR6h.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const addresslAP9eCW = await POWTokenIHSqR6h.setParamSetter.call(addressIdtfQBi, {from: accounts[0]});

		await expect(POWTokenIHSqR6h.initialize.call(stringZ2REeBJ, stringCE0ynUr, addressSaQB166, addressyOcnJgS, addressJNsMKAK, addresszjhGHb9, addresswadg5Ja, addressZk7wukz, addressCRfNrkx, addressIGxzaTl, uintj77IZx9, uintHQgZUhi, uintTmwB2Wo, uintBfxxz6D, uintUeMXB90, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenGCmASfW = await POWToken.new({from: accounts[2]});
		const uintptxkKm = BigInt("1997")
		const uintUqOhRW = BigInt("1015")
		const addressjqvHfsf = accounts[2]
		const uintL4hc4T0 = BigInt("1373")
		const addressLR5b8lq = "0x0000000000000000000000000000000000000001"
		const uint256wy5QXMR = await POWTokenGCmASfW.remainingAmount.call({from: accounts[2]});
		const uint256fvSNs5q = await POWTokenGCmASfW.lpStakingRewardRate.call({from: accounts[3]});
		const uint256FtLQFD = await POWTokenGCmASfW.setMinerPoolFeeNumerator.call(uintptxkKm, {from: accounts[1]});
		const addressRJ9KIOe = await POWTokenGCmASfW.claimIncome.call(addressjqvHfsf, uintUqOhRW, {from: accounts[1]});
		const uint256Wk04H3d = await POWTokenGCmASfW.setStartMiningTime.call(uintL4hc4T0, {from: accounts[5]});
		const addressX8oUnQx = await POWTokenGCmASfW.setParamSetter.call(addressLR5b8lq, {from: accounts[4]});

		assert.equal(uint256fvSNs5q, BigInt("0"))
		assert.equal(uint256wy5QXMR, BigInt("0"))
		await expect(POWTokenGCmASfW.setMinerPoolFeeNumerator.call(uintptxkKm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenk8EELze = await POWToken.new({from: accounts[5]});
		const uintQYJNxJj = BigInt("706")
		const addressVQamM0u = accounts[1]
		const uintFXB9CD = BigInt("997")
		const uint256W6Hvok = await POWTokenk8EELze.getHistoryWorkingRate.call({from: accounts[3]});
		const uint256BsQgBGg = await POWTokenk8EELze.lpStakingRewardRate.call({from: accounts[0]});
		const addressXB0KSc7 = await POWTokenk8EELze.inCaseTokensGetStuck.call(addressVQamM0u, uintQYJNxJj, {from: accounts[3]});
		const uint256dyQWPwU = await POWTokenk8EELze.addHashRate.call(uintFXB9CD, {from: accounts[0]});

		await expect(POWTokenk8EELze.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenmD2R2F3 = await POWToken.new({from: accounts[4]});
		const uintZCsRuri = BigInt("5")
		const addressJanZqut = accounts[3]
		const uint5iWShB = BigInt("1671")
		const addressk5Owdna = accounts[4]
		const addressQAA87Z3 = await POWTokenmD2R2F3.claimReward.call(addressJanZqut, uintZCsRuri, {from: accounts[2]});
		const addressZpBirOo = await POWTokenmD2R2F3.mint.call(addressk5Owdna, uint5iWShB, {from: accounts[4]});
		const uint256RBf5Vhl = await POWTokenmD2R2F3.getCurWorkingRate.call({from: accounts[3]});

		await expect(POWTokenmD2R2F3.claimReward.call(addressJanZqut, uintZCsRuri, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenk8EELze = await POWToken.new({from: accounts[5]});
		const uintCCj0Bag = BigInt("103")
		const addresseLeCOkD = accounts[1]
		const uintCwnVAX1 = BigInt("950")
		const addressUEetg8 = accounts[4]
		const addressuJLxael = await POWTokenk8EELze.claimIncome.call(addresseLeCOkD, uintCCj0Bag, {from: accounts[4]});
		const uint256BsQgBGg = await POWTokenk8EELze.lpStakingRewardRate.call({from: accounts[0]});
		const uint256u1KMQYX = await POWTokenk8EELze.lpStakingRewardRate.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWpJcvnA = await POWTokenk8EELze.transfer.call(addressUEetg8, uintCwnVAX1, {from: accounts[1]});

		await expect(POWTokenk8EELze.claimIncome.call(addresseLeCOkD, uintCCj0Bag, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokeni5GVJbJ = await POWToken.new({from: accounts[2]});
		const byteouKH2Al = "0x1e1405121c02071f1307151802051a150a13200d0b0e0c1405031f132005201f"
		const byteoU3m4GL = "0x1903070f0b0e0b0e05171509201c1c130c1601030b0b19fffffffe0205190504110105"
		const uintiMz6GTU = BigInt("231")
		const uintcOowS0G = BigInt("1633")
		const uintLR1XsxM = BigInt("1224")
		const addresslKNgTdB = accounts[0]
		const addressuObKU1U = accounts[0]
		const addressO5f00zE = await POWTokeni5GVJbJ.permit.call(addressuObKU1U, addresslKNgTdB, uintLR1XsxM, uintcOowS0G, uintiMz6GTU, byteoU3m4GL, byteouKH2Al, {from: accounts[2]});

		await expect(POWTokeni5GVJbJ.permit.call(addressuObKU1U, addresslKNgTdB, uintLR1XsxM, uintcOowS0G, uintiMz6GTU, byteoU3m4GL, byteouKH2Al, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenk8EELze = await POWToken.new({from: accounts[5]});
		const uintNyJDBf = BigInt("1501")
		const addressX64CRHH = accounts[5]
		const addressK0lwobR = accounts[0]
		const boolg7Y4aWa = await POWTokenk8EELze.transferFrom.call(addressK0lwobR, addressX64CRHH, uintNyJDBf, {from: accounts[3]});
		const uint256BsQgBGg = await POWTokenk8EELze.lpStakingRewardRate.call({from: accounts[0]});

		await expect(POWTokenk8EELze.transferFrom.call(addressK0lwobR, addressX64CRHH, uintNyJDBf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})