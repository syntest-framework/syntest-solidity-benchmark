const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintADFUhp = BigInt("1367")
		const stringYbiHCOq = "oPGUvgXq9QlQjhQGv4SuFepaxfpVQG3MxemlJ7RUIZIs9ZAJT"
		const stringWpaFtUS = "pBTJBQz3qJTKSHK9mM5XVBmpQTO3I7bGzONGRpDcO31Pj9uMHlzlracIZuIc"
		const GFCTO5xZSm = await GFC.new(uintADFUhp, stringYbiHCOq, stringWpaFtUS, {from: accounts[0]});
		const uintb2FGRWI = BigInt("529")
		const addressrCVQJwD = accounts[0]
		const uint3Sdjny = BigInt("1840")
		const addressLKICy9N = accounts[4]
		const uintIMx5B80 = BigInt("1521")
		const addressq7xgrBs = accounts[3]
		const addressQa5Us3q = accounts[4]
		const uintsgR8WP8 = BigInt("1496")
		const addressr8s45kP = accounts[3]
		const uintkF98IoT = BigInt("1788")
		const addressumr1pN = accounts[2]
		const addressdwgINOX = accounts[4]
		const boolcnjoPS3 = await GFCTO5xZSm.approve.call(addressrCVQJwD, uintb2FGRWI, {from: accounts[1]});
		const boolACGhKow = await GFCTO5xZSm.transfer.call(addressLKICy9N, uint3Sdjny, {from: accounts[3]});
		const boolV6ELEGQ = await GFCTO5xZSm.transferFrom.call(addressQa5Us3q, addressq7xgrBs, uintIMx5B80, {from: accounts[2]});
		const bool2PfFMm = await GFCTO5xZSm.transfer.call(addressr8s45kP, uintsgR8WP8, {from: "0x0000000000000000000000000000000000000001"});
		const boolGnu2iYf = await GFCTO5xZSm.transferFrom.call(addressdwgINOX, addressumr1pN, uintkF98IoT, {from: accounts[4]});

		assert.equal(boolcnjoPS3, true)
		await expect(GFCTO5xZSm.transfer.call(addressLKICy9N, uint3Sdjny, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintbJnohwi = BigInt("1059")
		const stringLUpvRrN = "AUf1kkuLARI2uo0cG7ai4Aux75IHtnthMYSePAUvdRBI5iauYFuGaFfytJXKiHblGyU7GRR"
		const stringKtq5EkZ = "t4NDBHJ7C7VOysYH97RSKdDjGemv6arNNmD64K2JJH5SzkZOMSDcgZaHcAlqCxI5"
		const GFCNbxa6tO = await GFC.new(uintbJnohwi, stringLUpvRrN, stringKtq5EkZ, {from: "0x0000000000000000000000000000000000000001"});
		const byte1tzaQE = "0x1603200714100a1f1f0b"
		const uintnE60Mks = BigInt("272")
		const addressDQljyJe = accounts[0]
		const uintfcFJ3W = BigInt("463")
		const uintUDhiSn9 = BigInt("615")
		const addressH8vDCJt = accounts[1]
		const uintTz9mVRk = BigInt("1506")
		const addressh9a4vmG = accounts[4]
		const uintY2YkImK = BigInt("1911")
		const addressStgxDoE = accounts[4]
		const uint9Q3ajV = BigInt("1649")
		const addressMyOP2eS = accounts[3]
		const boolOUeDCLR = await GFCNbxa6tO.approveAndCall.call(addressDQljyJe, uintnE60Mks, byte1tzaQE, {from: accounts[2]});
		const boolOZTptJR = await GFCNbxa6tO.burn.call(uintfcFJ3W, {from: accounts[5]});
		const boolyhZ2ZJg = await GFCNbxa6tO.approve.call(addressH8vDCJt, uintUDhiSn9, {from: accounts[5]});
		const bool6g0mTi = await GFCNbxa6tO.approve.call(addressh9a4vmG, uintTz9mVRk, {from: "0x0000000000000000000000000000000000000001"});
		const boolQMGObmw = await GFCNbxa6tO.transfer.call(addressStgxDoE, uintY2YkImK, {from: accounts[3]});
		const boolQQekshW = await GFCNbxa6tO.burnFrom.call(addressMyOP2eS, uint9Q3ajV, {from: accounts[0]});
	});

	it('test for GFC', async () => {
		const uintXsufdyR = BigInt("44")
		const stringN4VQfrk = "zTS2FHND3CyZUdTOTV4GMzSbUH"
		const stringkwlbkDC = "C35ohQd05E1Ge2IhAlH2iRdA"
		const GFCwgLnb4u = await GFC.new(uintXsufdyR, stringN4VQfrk, stringkwlbkDC, {from: accounts[1]});
		const uintFlgMt1Y = BigInt("1657")
		const byteSg4NUUs = "0x011e0b190411151408201815110d1f1d06151b05110616051e140c0c101b"
		const uintqU37iDR = BigInt("857")
		const addressZiktLGk = accounts[4]
		const uintDVZkO5 = BigInt("1912")
		const addressQuypKMV = accounts[5]
		const uintZMzdfBV = BigInt("750")
		const addresslOaNIWb = accounts[1]
		const boolRkP15pY = await GFCwgLnb4u.burn.call(uintFlgMt1Y, {from: accounts[0]});
		const boolIpcNNaU = await GFCwgLnb4u.approveAndCall.call(addressZiktLGk, uintqU37iDR, byteSg4NUUs, {from: "0x0000000000000000000000000000000000000001"});
		const booldpNG0i8 = await GFCwgLnb4u.transfer.call(addressQuypKMV, uintDVZkO5, {from: accounts[4]});
		const boolRLybsv = await GFCwgLnb4u.transfer.call(addresslOaNIWb, uintZMzdfBV, {from: accounts[2]});

		await expect(GFCwgLnb4u.burn.call(uintFlgMt1Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintTnpMk35 = BigInt("613")
		const stringu1bhgxG = "eT8aetxsyjDOGE6LJamwuhrvCbdftxH"
		const stringj4vJybY = "4G00D"
		const GFCgXbhPyb = await GFC.new(uintTnpMk35, stringu1bhgxG, stringj4vJybY, {from: accounts[2]});
		const uintVnA0JGB = BigInt("300")
		const addresscsfW1Lv = accounts[3]
		const uintPp9ATE = BigInt("1667")
		const addressOdlyQZ = accounts[3]
		const uintZofRq9s = BigInt("1018")
		const addressnsYlm6k = accounts[2]
		const booly3aVzMS = await GFCgXbhPyb.burnFrom.call(addresscsfW1Lv, uintVnA0JGB, {from: accounts[3]});
		const boolXOfYdVi = await GFCgXbhPyb.burnFrom.call(addressOdlyQZ, uintPp9ATE, {from: accounts[3]});
		const boolp2UxTvr = await GFCgXbhPyb.transfer.call(addressnsYlm6k, uintZofRq9s, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCgXbhPyb.burnFrom.call(addresscsfW1Lv, uintVnA0JGB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintO7dSVr4 = BigInt("721")
		const stringhDVw4Yt = "3OqwoUTUsUxRZzmywKnlhpizfQe2hKGecSTMtqxeBWEB9TljxO"
		const stringwmM7SgA = "DhgmjUQ2CCbFOnL9KG1qLTKNBuwIw66dJGvJU"
		const GFCM4nB78j = await GFC.new(uintO7dSVr4, stringhDVw4Yt, stringwmM7SgA, {from: accounts[4]});
		const uintwdKbxyO = BigInt("592")
		const addressS3F5YGq = accounts[3]
		const uintBOGVDm = BigInt("764")
		const addresslNgVtpg = accounts[1]
		const addressYWq07Ox = "0x0000000000000000000000000000000000000001"
		const uintr0qzf97 = BigInt("176")
		const addressjYyi52z = accounts[3]
		const boolNzUeU5M = await GFCM4nB78j.approve.call(addressS3F5YGq, uintwdKbxyO, {from: accounts[2]});
		const boolwxp12Sr = await GFCM4nB78j.transferFrom.call(addressYWq07Ox, addresslNgVtpg, uintBOGVDm, {from: accounts[3]});
		const boolqmlKCTe = await GFCM4nB78j.transfer.call(addressjYyi52z, uintr0qzf97, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNzUeU5M, true)
		await expect(GFCM4nB78j.transferFrom.call(addressYWq07Ox, addresslNgVtpg, uintBOGVDm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintmNjIKAD = BigInt("124")
		const string81jFFX = "5n9XtPqcEITGd"
		const stringVCtK7eu = "hzjxbIi9AMdClOwR75dFMPlFn1kC65N8ELUkTEtmKPawY3QOUoAheKz9reTjVIbmcgvb1FaBST3vPX0"
		const GFCADXPWkL = await GFC.new(uintmNjIKAD, string81jFFX, stringVCtK7eu, {from: accounts[3]});
		const byteWhC6q0G = "0x201c1d"
		const uintgS93pwR = BigInt("1198")
		const addressEaNNcsG = accounts[5]
		const byteDSUz9ye = "0x130c12200d06080b1d121e1004180419111109070e0a030c0a06180704"
		const uintCkw7g5a = BigInt("100")
		const addressn6OHTwl = accounts[0]
		const byteWUVJ14h = "0x150c0f0b"
		const uintaq0XB19 = BigInt("897")
		const addressnSz8e12 = accounts[2]
		const uintjY70pk = BigInt("1282")
		const addressradvUZv = accounts[1]
		const uintX2PVV56 = BigInt("1052")
		const addressKTpOPRN = accounts[0]
		const boolrNoPbGf = await GFCADXPWkL.approveAndCall.call(addressEaNNcsG, uintgS93pwR, byteWhC6q0G, {from: accounts[4]});
		const boolzjZ6yVk = await GFCADXPWkL.approveAndCall.call(addressn6OHTwl, uintCkw7g5a, byteDSUz9ye, {from: accounts[2]});
		const boolYfVGA8l = await GFCADXPWkL.approveAndCall.call(addressnSz8e12, uintaq0XB19, byteWUVJ14h, {from: accounts[0]});
		const boolz5L3jSi = await GFCADXPWkL.approve.call(addressradvUZv, uintjY70pk, {from: accounts[3]});
		const boolHr72oid = await GFCADXPWkL.burnFrom.call(addressKTpOPRN, uintX2PVV56, {from: accounts[4]});

		await expect(GFCADXPWkL.approveAndCall.call(addressEaNNcsG, uintgS93pwR, byteWhC6q0G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintid9P7Vz = BigInt("721")
		const stringhDVw4Yt = "3OqwoUTUsUxRZzmywKnlhpizfQe2hKGecSTMtqxeBWEB9TljxO"
		const stringwmM7SgA = "DhgmjUQ2CCbFOnL9KG1qLTKNBuwIw66dJGvJU"
		const GFCM4nB78j = await GFC.new(uintid9P7Vz, stringhDVw4Yt, stringwmM7SgA, {from: accounts[4]});
		const uintNW1CsPo = BigInt("1518")
		const addressak879l1 = accounts[4]
		const uintz5U9QZc = BigInt("741")
		const addresshzz5R6q = accounts[1]
		const addressFBeBR4v = "0x0000000000000000000000000000000000000001"
		const boolH4y8kc = await GFCM4nB78j.burnFrom.call(addressak879l1, uintNW1CsPo, {from: accounts[1]});
		const boolwxp12Sr = await GFCM4nB78j.transferFrom.call(addressFBeBR4v, addresshzz5R6q, uintz5U9QZc, {from: accounts[3]});

		await expect(GFCM4nB78j.burnFrom.call(addressak879l1, uintNW1CsPo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintkYEJK3w = BigInt("1284")
		const stringpjo7uyI = "iOGOPoMoAemjyw"
		const stringLTep0HB = "S"
		const GFCqjBeaAv = await GFC.new(uintkYEJK3w, stringpjo7uyI, stringLTep0HB, {from: accounts[1]});
		const uintFsAbgZE = BigInt("2012")
		const addressiYdE1Tx = accounts[1]
		const uintCith2KU = BigInt("1993")
		const addressf2khqxF = accounts[2]
		const uintEFfa2rM = BigInt("1998")
		const boollxJbRvE = await GFCqjBeaAv.transfer.call(addressiYdE1Tx, uintFsAbgZE, {from: accounts[1]});
		const booll2BhQm = await GFCqjBeaAv.burnFrom.call(addressf2khqxF, uintCith2KU, {from: accounts[3]});
		const boolgM0tLM5 = await GFCqjBeaAv.burn.call(uintEFfa2rM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boollxJbRvE, true)
		await expect(GFCqjBeaAv.burnFrom.call(addressf2khqxF, uintCith2KU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintdNf3eyW = BigInt("771")
		const stringDiztLLu = "BHi"
		const stringN37Lkhy = "dm2LRNy3t9n"
		const GFCYcntWsG = await GFC.new(uintdNf3eyW, stringDiztLLu, stringN37Lkhy, {from: accounts[5]});
		const uintzmaxtZj = BigInt("812")
		const uintHQj0SbG = BigInt("1960")
		const addressPgWk2As = accounts[4]
		const byteJx5zBoD = "0x160d140e200e030204021c0f1b0b0d021505021f"
		const uintXysRHp5 = BigInt("384")
		const addressvQNFS72 = accounts[3]
		const boolUS1Yzal = await GFCYcntWsG.burn.call(uintzmaxtZj, {from: accounts[5]});
		const boolvrw4GPX = await GFCYcntWsG.burnFrom.call(addressPgWk2As, uintHQj0SbG, {from: accounts[2]});
		const boolXBnbHZg = await GFCYcntWsG.approveAndCall.call(addressvQNFS72, uintXysRHp5, byteJx5zBoD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUS1Yzal, true)
		await expect(GFCYcntWsG.burnFrom.call(addressPgWk2As, uintHQj0SbG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})