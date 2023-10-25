const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100me8kUOB = await Token50X100.new({from: accounts[5]});
		const addresshT7ywal = accounts[5]
		const boolKRlhFhN = true
		const addressXdY1pC = accounts[4]
		const addressQgwHQtt = accounts[4]
		const uintBmNuJSO = BigInt("220")
		const stringJbmd0PK = "HRDcI48PSJGxl3WNAEKlpFqeAY3oGk7FvVG9jL04FhFG3vfvnNRWeJ8101iPOtQ8d3KQtiPw8g7nHRmlwjTDG"
		const stringMMa0Wb1 = "WGOPDsAiRSlNtqVdzrmSWC4G6nWyXtA4ww3C6aockTkX91iic6xMelzoy"
		const uint256iXczFEk = await Token50X100me8kUOB.balanceOf.call(addresshT7ywal, {from: accounts[2]});
//		await Token50X100me8kUOB.setWhiteList.call(addressXdY1pC, boolKRlhFhN, {from: accounts[2]});
//		await Token50X100me8kUOB.setTokenContract.call(addressQgwHQtt, {from: accounts[3]});
//		await Token50X100me8kUOB.onlyOwner.call({from: accounts[5]});
//		await Token50X100me8kUOB.release.call({from: accounts[1]});
//		const boolIGwmKZ5 = await Token50X100me8kUOB.setSymbolNameDecimals.call(stringMMa0Wb1, stringJbmd0PK, uintBmNuJSO, {from: accounts[3]});

		assert.equal(uint256iXczFEk, BigInt("0"))
		await expect(Token50X100me8kUOB.setWhiteList.call(addressXdY1pC, boolKRlhFhN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100uuv9443 = await Token50X100.new({from: accounts[4]});
		const uintAgv2X3x = BigInt("1311")
		const addressO23ZUG1 = "0x0000000000000000000000000000000000000001"
		const uintIFe7EM = BigInt("942")
		const boolgg3uGm = false
		const addressqZNzN6A = accounts[2]
		const uint7xX72L = BigInt("812")
		const uintBI03FR = BigInt("154")
		const addressXG6eLPp = accounts[3]
		const uintJxaQ3Em = BigInt("1889")
//		await Token50X100uuv9443.onlyOwner.call({from: accounts[3]});
//		const boolyAB94Zw = await Token50X100uuv9443.decreaseApproval.call(addressO23ZUG1, uintAgv2X3x, {from: "0x0000000000000000000000000000000000000001"});
//		const booljp1wt8 = await Token50X100uuv9443.setMaxLockPeriod.call(uintIFe7EM, {from: accounts[1]});
//		await Token50X100uuv9443.setWhiteList.call(addressqZNzN6A, boolgg3uGm, {from: accounts[1]});
//		const boolXKW8771 = await Token50X100uuv9443.setVesting.call(addressXG6eLPp, uintBI03FR, uint7xX72L, {from: accounts[2]});
//		const boolSD3UCcF = await Token50X100uuv9443.setMaxLockPeriod.call(uintJxaQ3Em, {from: accounts[3]});

		await expect(Token50X100uuv9443.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100uAdqeOC = await Token50X100.new({from: accounts[3]});
		const uintYDqPGK0 = BigInt("1258")
		const uintwc2fjh4 = BigInt("80")
		const addressukcbAaE = accounts[0]
		const addressMaAACU = accounts[4]
		const uinterLSA6S = BigInt("1087")
		const addressRGerhUn = accounts[0]
		const addressUtnl6uK = accounts[4]
//		const boolb5quyXO = await Token50X100uAdqeOC._transfer.call(addressMaAACU, addressukcbAaE, uintwc2fjh4, uintYDqPGK0, {from: accounts[3]});
//		const boolhSVQ3av = await Token50X100uAdqeOC.transferFrom.call(addressUtnl6uK, addressRGerhUn, uinterLSA6S, {from: accounts[2]});
//		const uint256fkzYGku = await Token50X100uAdqeOC.totalSupply.call({from: accounts[1]});

		await expect(Token50X100uAdqeOC._transfer.call(addressMaAACU, addressukcbAaE, uintwc2fjh4, uintYDqPGK0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100S63L2e2 = await Token50X100.new({from: accounts[0]});
		const addressNfybLzE = "0x0000000000000000000000000000000000000001"
		const addressoz9fm6 = accounts[1]
		const uintbQlpnPF = BigInt("132")
		const stringFW0SzB = "BvfO89KMjL"
		const stringHZhE1g3 = "N1mVLa9LSWzdbVH9EzDEzPrbeLBHk51atD8w"
		const addressWOztTOg = accounts[3]
		const uint256FKTl1Ol = await Token50X100S63L2e2.allowance.call(addressoz9fm6, addressNfybLzE, {from: accounts[0]});
//		const boolDXn8kTV = await Token50X100S63L2e2.setSymbolNameDecimals.call(stringHZhE1g3, stringFW0SzB, uintbQlpnPF, {from: "0x0000000000000000000000000000000000000001"});
//		const addressyk6Yfoa = await Token50X100S63L2e2.setOriginalContract.call(addressWOztTOg, {from: accounts[4]});

		assert.equal(uint256FKTl1Ol, BigInt("0"))
		await expect(Token50X100S63L2e2.setSymbolNameDecimals.call(stringHZhE1g3, stringFW0SzB, uintbQlpnPF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100T9jFqEv = await Token50X100.new({from: accounts[3]});
		const uintQMY18qX = BigInt("425")
		const addressNsnYT2X = accounts[5]
		const addressSHpe2Sh = accounts[0]
		const uintDKQ8gZV = BigInt("141")
		const boolM22Tr02 = await Token50X100T9jFqEv.decreaseApproval.call(addressNsnYT2X, uintQMY18qX, {from: accounts[0]});
//		await Token50X100T9jFqEv.onlyOwner.call({from: accounts[1]});
//		const uint256mfQycQ = await Token50X100T9jFqEv.balanceOf.call(addressSHpe2Sh, {from: accounts[3]});
//		const boolFfh3BD = await Token50X100T9jFqEv.setMaxLockPeriod.call(uintDKQ8gZV, {from: accounts[3]});

		assert.equal(boolM22Tr02, true)
		await expect(Token50X100T9jFqEv.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X10046e67e = await Token50X100.new({from: accounts[0]});
		const uintleySpNr = BigInt("1239")
		const addressZpnStu = accounts[2]
		const uintiIlcMfa = BigInt("52")
		const addressUeK7j24 = accounts[3]
		const addressCWhhoC = accounts[0]
		const uintCeYvTNu = BigInt("1862")
		const addresscFFR6wL = accounts[1]
		const uintuy6QrLy = BigInt("1096")
		const uintYXeyb78 = BigInt("720")
		const addressxQKPdmR = accounts[3]
		const boolofwBFM = await Token50X10046e67e.decreaseApproval.call(addressZpnStu, uintleySpNr, {from: accounts[3]});
//		const boolIYCwr4M = await Token50X10046e67e.transferFrom.call(addressCWhhoC, addressUeK7j24, uintiIlcMfa, {from: accounts[0]});
//		const boolNf1VrFE = await Token50X10046e67e.transfer.call(addresscFFR6wL, uintCeYvTNu, {from: accounts[0]});
//		const boolUXUZoUR = await Token50X10046e67e.setVesting.call(addressxQKPdmR, uintYXeyb78, uintuy6QrLy, {from: accounts[0]});

		assert.equal(boolofwBFM, true)
		await expect(Token50X10046e67e.transferFrom.call(addressCWhhoC, addressUeK7j24, uintiIlcMfa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100T9jFqEv = await Token50X100.new({from: accounts[3]});
		const uinteEUDCAD = BigInt("425")
		const addresshlgEKZg = accounts[5]
		const uintz5io0wf = BigInt("1267")
		const addressBGVGAqL = accounts[3]
		const uintlfA0C7 = BigInt("204")
		const uinti0G2cLT = BigInt("62")
		const addressARzkdl7 = accounts[0]
		const addressLABeOKG = accounts[5]
		const addressOS4EBsl = accounts[1]
		const uintxw3wY9K = BigInt("141")
		const boolM22Tr02 = await Token50X100T9jFqEv.decreaseApproval.call(addresshlgEKZg, uinteEUDCAD, {from: accounts[0]});
		const boolPtfJcBi = await Token50X100T9jFqEv.increaseApproval.call(addressBGVGAqL, uintz5io0wf, {from: accounts[0]});
//		const boolSlt02Gj = await Token50X100T9jFqEv._transfer.call(addressLABeOKG, addressARzkdl7, uinti0G2cLT, uintlfA0C7, {from: accounts[1]});
//		await Token50X100T9jFqEv.onlyOwner.call({from: accounts[1]});
//		const uint256mfQycQ = await Token50X100T9jFqEv.balanceOf.call(addressOS4EBsl, {from: accounts[3]});
//		const boolFfh3BD = await Token50X100T9jFqEv.setMaxLockPeriod.call(uintxw3wY9K, {from: accounts[3]});

		assert.equal(boolM22Tr02, true)
		assert.equal(boolPtfJcBi, true)
		await expect(Token50X100T9jFqEv._transfer.call(addressLABeOKG, addressARzkdl7, uinti0G2cLT, uintlfA0C7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const uintreyWlK5 = BigInt("676")
		const uintluDEfvE = BigInt("245")
		const uintu7Xv4oM = BigInt("109")
		const stringybqR6lW = "YpENACbM06qz5HRC5"
		const stringAYmbeaR = "K1Lkl9JD35LxCYucnhYvOQCbzmNc3ehghrw5pMfidM8cx9qgUXPrwMJeObttQSuAYtyhsYb1XrnWULuU"
		const addressBSscmzE = accounts[2]
//		const boolGg1W73f = await Token50X100eStw6RM.safeLock.call(uintluDEfvE, uintreyWlK5, {from: accounts[4]});
//		const boolRWvnXb5 = await Token50X100eStw6RM.setSymbolNameDecimals.call(stringAYmbeaR, stringybqR6lW, uintu7Xv4oM, {from: accounts[2]});
//		const addresse0kHSMG = await Token50X100eStw6RM.setOriginalContract.call(addressBSscmzE, {from: accounts[1]});

		await expect(Token50X100eStw6RM.safeLock.call(uintluDEfvE, uintreyWlK5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const uintvrByLz3 = BigInt("901")
		const addressDSEqm9K = accounts[0]
		const booltLIZnH7 = true
		const addressCA2b0B = accounts[2]
		const addressREsJdr8 = accounts[2]
//		const booly0UJRby = await Token50X100eStw6RM.transfer.call(addressDSEqm9K, uintvrByLz3, {from: accounts[0]});
//		await Token50X100eStw6RM.setWhiteList.call(addressCA2b0B, booltLIZnH7, {from: accounts[4]});
//		const addresse0kHSMG = await Token50X100eStw6RM.setOriginalContract.call(addressREsJdr8, {from: accounts[1]});

		await expect(Token50X100eStw6RM.transfer.call(addressDSEqm9K, uintvrByLz3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const uintUcFWc9r = BigInt("447")
		const uintg1IIXj = BigInt("1320")
		const addresshbcdbsG = accounts[2]
		const addressrzxoKUH = accounts[3]
		const addresszn3wmUM = accounts[2]
		const boolVGzjumL = await Token50X100eStw6RM.setMaxLockPeriod.call(uintUcFWc9r, {from: accounts[5]});
//		const boolPt1bT2s = await Token50X100eStw6RM.transferFrom.call(addressrzxoKUH, addresshbcdbsG, uintg1IIXj, {from: accounts[2]});
//		const addresse0kHSMG = await Token50X100eStw6RM.setOriginalContract.call(addresszn3wmUM, {from: accounts[1]});

		assert.equal(boolVGzjumL, false)
		await expect(Token50X100eStw6RM.transferFrom.call(addressrzxoKUH, addresshbcdbsG, uintg1IIXj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100T9jFqEv = await Token50X100.new({from: accounts[3]});
		const uintlKv1IC3 = BigInt("1947")
		const addressfHEidIg = accounts[0]
		const uintXPxQNAN = BigInt("425")
		const addressArKAtfC = accounts[5]
		const addressDIhr96D = accounts[1]
		const uintzZoaUiY = BigInt("141")
		const boolDP0o9h = await Token50X100T9jFqEv.approve.call(addressfHEidIg, uintlKv1IC3, {from: accounts[4]});
		const boolM22Tr02 = await Token50X100T9jFqEv.decreaseApproval.call(addressArKAtfC, uintXPxQNAN, {from: accounts[0]});
//		await Token50X100T9jFqEv.release.call({from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100T9jFqEv.onlyOwner.call({from: accounts[1]});
//		const uint256mfQycQ = await Token50X100T9jFqEv.balanceOf.call(addressDIhr96D, {from: accounts[3]});
//		const boolFfh3BD = await Token50X100T9jFqEv.setMaxLockPeriod.call(uintzZoaUiY, {from: accounts[3]});

		assert.equal(boolDP0o9h, true)
		assert.equal(boolM22Tr02, true)
		await expect(Token50X100T9jFqEv.release.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const uintGQVhXXg = BigInt("109")
		const stringybqR6lW = "YpENACbM06qz5HRC5"
		const stringAYmbeaR = "K1Lkl9JD35LxCYucnhYvOQCbzmNc3ehghrw5pMfidM8cx9qgUXPrwMJeObttQSuAYtyhsYb1XrnWULuU"
		const addressmz9zyrw = accounts[2]
		const boolRWvnXb5 = await Token50X100eStw6RM.setSymbolNameDecimals.call(stringAYmbeaR, stringybqR6lW, uintGQVhXXg, {from: accounts[2]});
//		const addresse0kHSMG = await Token50X100eStw6RM.setOriginalContract.call(addressmz9zyrw, {from: accounts[1]});

		await expect(Token50X100eStw6RM.setOriginalContract.call(addressmz9zyrw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const uintPhwdqpT = BigInt("676")
		const uintVzBrfDi = BigInt("245")
		const uintNhHdGo = BigInt("603")
		const uintOQgtooo = BigInt("559")
		const addressK5M7oKG = accounts[3]
		const addresss7TA51 = accounts[1]
//		await Token50X100eStw6RM.release.call({from: accounts[2]});
//		const boolGg1W73f = await Token50X100eStw6RM.safeLock.call(uintVzBrfDi, uintPhwdqpT, {from: accounts[4]});
//		const boolKDt7GzJ = await Token50X100eStw6RM._transfer.call(addresss7TA51, addressK5M7oKG, uintOQgtooo, uintNhHdGo, {from: accounts[3]});

		await expect(Token50X100eStw6RM.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const uintFUnzF4h = BigInt("647")
		const uintUwAtuH = BigInt("245")
		const uint256gmGnE6I = await Token50X100eStw6RM.totalSupply.call({from: accounts[5]});
//		const boolGg1W73f = await Token50X100eStw6RM.safeLock.call(uintUwAtuH, uintFUnzF4h, {from: accounts[4]});

		assert.equal(uint256gmGnE6I, BigInt("4714285714285710"))
		await expect(Token50X100eStw6RM.safeLock.call(uintUwAtuH, uintFUnzF4h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const boolPmDktNv = false
		const addressDD7kLgP = "0x0000000000000000000000000000000000000001"
		const uintpvRzbt = BigInt("676")
		const uintsBSNEj5 = BigInt("248")
//		await Token50X100eStw6RM.release.call({from: accounts[2]});
//		await Token50X100eStw6RM.setWhiteListReceivers.call(addressDD7kLgP, boolPmDktNv, {from: accounts[2]});
//		const boolGg1W73f = await Token50X100eStw6RM.safeLock.call(uintsBSNEj5, uintpvRzbt, {from: accounts[4]});

		await expect(Token50X100eStw6RM.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100uAdqeOC = await Token50X100.new({from: accounts[3]});
		const uintF8nCTTs = BigInt("1616")
		const uintt3hFrI = BigInt("1263")
		const addressoEmo6jf = accounts[1]
		const uintTRltwP7 = BigInt("515")
		const addressoqJhYEP = accounts[4]
		const uintBXKf3Nq = BigInt("1064")
		const addressrUNCAdQ = accounts[3]
		const boolAwec5X9 = await Token50X100uAdqeOC.setVesting.call(addressoEmo6jf, uintt3hFrI, uintF8nCTTs, {from: accounts[3]});
//		const boolSn38tOU = await Token50X100uAdqeOC.transfer.call(addressoqJhYEP, uintTRltwP7, {from: accounts[2]});
//		const boolfN9hjw = await Token50X100uAdqeOC.transfer.call(addressrUNCAdQ, uintBXKf3Nq, {from: accounts[3]});

		assert.equal(boolAwec5X9, true)
		await expect(Token50X100uAdqeOC.transfer.call(addressoqJhYEP, uintTRltwP7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RooWPq5 = await Token50X100.new({from: accounts[4]});
		const uintku47arI = BigInt("1261")
		const boolj1gTOMk = false
		const addresstJRNvPj = accounts[3]
		const uint51ySKR = BigInt("1006")
		const uintkTUqbbw = BigInt("1377")
		const uintdLGjz3J = BigInt("1920")
		const uintn6NiuMG = BigInt("1662")
		const addressflSbjr5 = accounts[2]
		const boolf4t5urf = await Token50X100RooWPq5.setMaxLockPeriod.call(uintku47arI, {from: accounts[4]});
//		await Token50X100RooWPq5.setWhiteList.call(addresstJRNvPj, boolj1gTOMk, {from: accounts[4]});
//		const boolxRWb7V = await Token50X100RooWPq5.safeLock.call(uintkTUqbbw, uint51ySKR, {from: accounts[2]});
//		const boolIqOvpVC = await Token50X100RooWPq5.setVesting.call(addressflSbjr5, uintn6NiuMG, uintdLGjz3J, {from: accounts[0]});

		assert.equal(boolf4t5urf, false)
		await expect(Token50X100RooWPq5.setWhiteList.call(addresstJRNvPj, boolj1gTOMk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100A90J9oD = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDf2Fs5t = BigInt("175")
		const stringkhcCVhF = "1DfjMGWlitvHk7JohIAWxqwoRAg8tfxXslsxa4UNqYMAsH16qiQZIoRelQYixcQIWNZiqruHSvaVm"
		const stringz4eIkl = "S8HOdaSzb7o5LC8qUrNeXo5E6aAY54hp8lM6iINOv1TIIAUpvoyCw78oR"
		const uintGiHObOy = BigInt("1027")
		const addressBiKqPm1 = accounts[0]
		const addressq9ZMnYN = accounts[1]
		const boolz8ev0Ai = false
		const addressIyLMCOu = accounts[1]
		const uintO0Wj2fa = BigInt("1157")
		await Token50X100A90J9oD.setSymbolNameDecimals.call(stringz4eIkl, stringkhcCVhF, uintDf2Fs5t, {from: accounts[0]});
		const boolyp8j5ON = await Token50X100A90J9oD.transferFrom.call(addressq9ZMnYN, addressBiKqPm1, uintGiHObOy, {from: accounts[3]});
		await Token50X100A90J9oD.setWhiteList.call(addressIyLMCOu, boolz8ev0Ai, {from: accounts[5]});
		const booldgKkg3p = await Token50X100A90J9oD.setMaxLockPeriod.call(uintO0Wj2fa, {from: accounts[0]});
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const addressFsGIFJy = accounts[1]
		const uintplS75ZQ = BigInt("206")
		const stringckCuapd = "Tj5ipoJ29X140onDaR4BJnDd5hfvoGWvfdaPbAkS6LpEQKVvwQ9LXBzjmQRzy1by0H2RM"
		const stringr7a5XlC = "2gxoTCh7KbcA089U60SJi0h8M3nIYGb3pWjgMd4p4l185n19eYenE8yQN4PDe7B6EFtP429hLPu1z1i"
		const uintRU5fhXe = BigInt("677")
		const uintj37shv3 = BigInt("245")
//		await Token50X100eStw6RM.setTokenContract.call(addressFsGIFJy, {from: accounts[2]});
//		await Token50X100eStw6RM.setSymbolNameDecimals.call(stringr7a5XlC, stringckCuapd, uintplS75ZQ, {from: accounts[4]});
//		const boolGg1W73f = await Token50X100eStw6RM.safeLock.call(uintj37shv3, uintRU5fhXe, {from: accounts[4]});

		await expect(Token50X100eStw6RM.setTokenContract.call(addressFsGIFJy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100oWigR4O = await Token50X100.new({from: accounts[3]});
		const addressMD0MdfE = accounts[3]
		const uintBpNkj5 = BigInt("896")
		const addressblL8Ffq = accounts[4]
		const uintCce7Vj8 = BigInt("69")
		const stringZEXIWb = "GsYnRycWYnmke9F3WvnMOJCpvORW7RxD2iNFAUO8hQXWwH4KFFvmj1Ce5ag1bzPjeqpgC"
		const stringz3pVzgB = "qCjwwt0LfaBBhagQ2mtMWUAc9cDMVbGXH3WObEuMTDTtTyYh5EzAX7lLNTErzeku9gitnocyfAV568lsfskGe0kTG6kF1"
		const uintWRKxm4e = BigInt("537")
		const addresswspaQXE = accounts[2]
		const uintSYmm4av = BigInt("1218")
		const uintxgtvXWY = BigInt("1169")
		const addressrj2sIYF = accounts[3]
		const addressw0zqAEq = accounts[3]
		const addressjCzm4HM = await Token50X100oWigR4O.transferOwnership.call(addressMD0MdfE, {from: accounts[3]});
//		const boolbEaiFGs = await Token50X100oWigR4O.transfer.call(addressblL8Ffq, uintBpNkj5, {from: accounts[2]});
//		const boolpcim9F3 = await Token50X100oWigR4O.setSymbolNameDecimals.call(stringz3pVzgB, stringZEXIWb, uintCce7Vj8, {from: accounts[1]});
//		const boolaGkpiCZ = await Token50X100oWigR4O.increaseApproval.call(addresswspaQXE, uintWRKxm4e, {from: accounts[0]});
//		const boolzC4gcxZ = await Token50X100oWigR4O._transfer.call(addressw0zqAEq, addressrj2sIYF, uintxgtvXWY, uintSYmm4av, {from: accounts[1]});

		await expect(Token50X100oWigR4O.transfer.call(addressblL8Ffq, uintBpNkj5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const uintL1q4lA8 = BigInt("255")
		const addresse1TLleB = accounts[4]
		const uintJD7qhXL = BigInt("1624")
		const addressqHJtbqh = "0x0000000000000000000000000000000000000000"
		const uintDSgezU = BigInt("1076")
		const uintFnNfH4i = BigInt("245")
		const bool2wpCEK = await Token50X100eStw6RM.decreaseApproval.call(addresse1TLleB, uintL1q4lA8, {from: accounts[0]});
//		const boolp6asLEm = await Token50X100eStw6RM.transfer.call(addressqHJtbqh, uintJD7qhXL, {from: accounts[0]});
//		const boolGg1W73f = await Token50X100eStw6RM.safeLock.call(uintFnNfH4i, uintDSgezU, {from: accounts[4]});

		assert.equal(bool2wpCEK, true)
		await expect(Token50X100eStw6RM.transfer.call(addressqHJtbqh, uintJD7qhXL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eStw6RM = await Token50X100.new({from: accounts[2]});
		const uintvnrXTlv = BigInt("1191")
		const uintyuobix5 = BigInt("0")
		const addressSIt5xy4 = accounts[4]
		const uintxQKfw82 = BigInt("1076")
		const uintBvHsacA = BigInt("237")
		const boolb5MJNpq = await Token50X100eStw6RM.setMaxLockPeriod.call(uintvnrXTlv, {from: accounts[0]});
		const bool2wpCEK = await Token50X100eStw6RM.decreaseApproval.call(addressSIt5xy4, uintyuobix5, {from: accounts[0]});
//		const boolGg1W73f = await Token50X100eStw6RM.safeLock.call(uintBvHsacA, uintxQKfw82, {from: accounts[4]});

		assert.equal(bool2wpCEK, true)
		assert.equal(boolb5MJNpq, false)
		await expect(Token50X100eStw6RM.safeLock.call(uintBvHsacA, uintxQKfw82, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100nSyVyEE = await Token50X100.new({from: accounts[0]});
		const addressyz9DuC7 = accounts[4]
		const addressQAaiVC = accounts[4]
		const addressCa3UXTW = accounts[3]
		const addressC9FrfNu = accounts[1]
		const uintVPwUwt = BigInt("1074")
		const addresssgHsiLX = accounts[1]
		const addressX4eGtGN = accounts[2]
		const uint256rx78Gi3 = await Token50X100nSyVyEE.allowance.call(addressQAaiVC, addressyz9DuC7, {from: accounts[3]});
		const uint256WL6Yd6N = await Token50X100nSyVyEE.allowance.call(addressC9FrfNu, addressCa3UXTW, {from: accounts[0]});
//		await Token50X100nSyVyEE.lock.call({from: accounts[0]});
//		const boolzBzi1GX = await Token50X100nSyVyEE.issueTokens.call(addressX4eGtGN, addresssgHsiLX, uintVPwUwt, {from: accounts[1]});

		assert.equal(uint256WL6Yd6N, BigInt("0"))
		assert.equal(uint256rx78Gi3, BigInt("0"))
		await expect(Token50X100nSyVyEE.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})