const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintvBCjhDD = BigInt("784")
		const stringyPrZsbA = "mxmYC4uafw915Gow8EMvnVC8UAJdgRaZQNaR2Qh7yPPkkzWY2eUftwznI5rIGU2LwXekF4IveVXubguaClEH"
		const stringwrzSFm = "Pcl1bTDASAOEfchiTHfiAmZrP2uunOgcBszfG3iMWrDFf1WNEER5I3r6gFIxnwXl2ayBoossf8HeBjl3ruMux62d6kC4kE6k"
		const GreenMarkTrustImhCwR = await GreenMarkTrust.new(uintvBCjhDD, stringyPrZsbA, stringwrzSFm, {from: accounts[0]});
		const uintBIEkjUa = BigInt("1526")
		const uintNIVJB91 = BigInt("1621")
		const addressFM0mAIa = accounts[5]
		const uintkCi77RX = BigInt("1056")
		const addressJtSJFO = accounts[0]
		const addressviydyjv = accounts[0]
		const byteku9EOZy = "0x140118031c0807060e0718"
		const uintiMoNWOi = BigInt("1229")
		const addressxIBhvxz = "0x0000000000000000000000000000000000000001"
		const uint2r94y5 = BigInt("500")
		const addressgoKs2Rk = accounts[0]
		const addressz5E9Wy = accounts[1]
//		const boolDUwmwgi = await GreenMarkTrustImhCwR.burn.call(uintBIEkjUa, {from: accounts[5]});
//		const boolmijFTcL = await GreenMarkTrustImhCwR.transfer.call(addressFM0mAIa, uintNIVJB91, {from: accounts[4]});
//		const boolocOUjbB = await GreenMarkTrustImhCwR.transferFrom.call(addressviydyjv, addressJtSJFO, uintkCi77RX, {from: accounts[3]});
//		const boolWOrBEIG = await GreenMarkTrustImhCwR.approveAndCall.call(addressxIBhvxz, uintiMoNWOi, byteku9EOZy, {from: accounts[3]});
//		const boolNEXUtoc = await GreenMarkTrustImhCwR.transferFrom.call(addressz5E9Wy, addressgoKs2Rk, uint2r94y5, {from: accounts[0]});

		await expect(GreenMarkTrustImhCwR.burn.call(uintBIEkjUa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintj3dXywg = BigInt("269")
		const string7ky8nu = "VDQtFM3L4o7vTNesQA"
		const stringEBARq0k = "7klqe"
		const GreenMarkTrustDs8vkTz = await GreenMarkTrust.new(uintj3dXywg, string7ky8nu, stringEBARq0k, {from: accounts[4]});
		const uintTXjmO9V = BigInt("1515")
		const addressBZBAejp = accounts[3]
		const uintJ5F4mc = BigInt("1449")
		const boolhSsL9qc = await GreenMarkTrustDs8vkTz.approve.call(addressBZBAejp, uintTXjmO9V, {from: accounts[0]});
//		const boolscwecSz = await GreenMarkTrustDs8vkTz.burn.call(uintJ5F4mc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolhSsL9qc, true)
		await expect(GreenMarkTrustDs8vkTz.burn.call(uintJ5F4mc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintubwhwQF = BigInt("267")
		const stringppfA5mN = "wuQNantEsfu0pMq9gLJWBkHIYQrPKscOE4ANB02w7tpaGDn8dBiJTx5LSq6cpcV3"
		const stringCGlFskX = "nmMPVpTD8SUnjtNii"
		const GreenMarkTrustq1ldfrc = await GreenMarkTrust.new(uintubwhwQF, stringppfA5mN, stringCGlFskX, {from: accounts[3]});
		const byteHjfab4o = "0x0118"
		const uintxyZFP5C = BigInt("1583")
		const addressffyp5E3 = accounts[3]
		const uintoEDtfi = BigInt("2043")
//		const boolqXv1Hoq = await GreenMarkTrustq1ldfrc.approveAndCall.call(addressffyp5E3, uintxyZFP5C, byteHjfab4o, {from: accounts[3]});
//		const boolNBHdxD3 = await GreenMarkTrustq1ldfrc.burn.call(uintoEDtfi, {from: accounts[3]});

		await expect(GreenMarkTrustq1ldfrc.approveAndCall.call(addressffyp5E3, uintxyZFP5C, byteHjfab4o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintR535Bot = BigInt("840")
		const stringTGBvBs = "QV8WgbChtommnXcnTwsuTOer9CvlKwDuWvdr"
		const stringAROEiq = "Hj92InCrs9XSZtBqQLdM2At"
		const GreenMarkTrustTbJdlZJ = await GreenMarkTrust.new(uintR535Bot, stringTGBvBs, stringAROEiq, {from: accounts[5]});
		const uintNNxefzN = BigInt("321")
		const addressfjrbhsj = accounts[2]
		const addressCd8trH0 = accounts[3]
		const uint82tL4a = BigInt("1219")
		const addressuU85AAj = accounts[5]
		const uint0z9lKG = BigInt("2018")
		const uintsrdw9W = BigInt("997")
//		const boolXgfTW3x = await GreenMarkTrustTbJdlZJ.transferFrom.call(addressCd8trH0, addressfjrbhsj, uintNNxefzN, {from: accounts[1]});
//		const boolVknH8jX = await GreenMarkTrustTbJdlZJ.approve.call(addressuU85AAj, uint82tL4a, {from: accounts[4]});
//		const booldeEnxp = await GreenMarkTrustTbJdlZJ.burn.call(uint0z9lKG, {from: accounts[2]});
//		const boolgh6mG15 = await GreenMarkTrustTbJdlZJ.burn.call(uintsrdw9W, {from: accounts[5]});

		await expect(GreenMarkTrustTbJdlZJ.transferFrom.call(addressCd8trH0, addressfjrbhsj, uintNNxefzN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintPRZ0Ye9 = BigInt("1328")
		const stringatda1si = "n5c1ZW7TIcaAF6qaJyayeoUoMTAstqOBMF1rimLWvR"
		const stringYu0NOSB = "jLRStGb2j5AxdXTyHwIEshDKa3IafJOPaQnzE5VBNPQpnc79SBMBAN1RtLyZVZX3BLxM3QVeD5rsf834YclLXOJS"
		const GreenMarkTrustLuMQZc = await GreenMarkTrust.new(uintPRZ0Ye9, stringatda1si, stringYu0NOSB, {from: "0x0000000000000000000000000000000000000001"});
		const uintu6j8jbn = BigInt("1014")
		const uintCyRMpmR = BigInt("1392")
		const addresspspUXG2 = accounts[5]
		const uintqm75Iz = BigInt("1661")
		const uintlpYee08 = BigInt("1685")
		const addressYb1PZZT = "0x0000000000000000000000000000000000000001"
		const addressEOY0Om = accounts[1]
		const boolXBmjTqI = await GreenMarkTrustLuMQZc.burn.call(uintu6j8jbn, {from: accounts[4]});
		const boolo8V5pb = await GreenMarkTrustLuMQZc.burnFrom.call(addresspspUXG2, uintCyRMpmR, {from: accounts[1]});
		const boolljVsHhm = await GreenMarkTrustLuMQZc.burn.call(uintqm75Iz, {from: accounts[2]});
		const boole3CUhyB = await GreenMarkTrustLuMQZc.transferFrom.call(addressEOY0Om, addressYb1PZZT, uintlpYee08, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintqFwPuKJ = BigInt("448")
		const stringjQp2yCh = "qxmtPHP9"
		const stringIxTj0Tt = "oeV8TDG3KuLdNugrPVTohcQXm4WDKFLWPSatNFuzJn8napSgcVoSc"
		const GreenMarkTrustIdpSb3l = await GreenMarkTrust.new(uintqFwPuKJ, stringjQp2yCh, stringIxTj0Tt, {from: accounts[0]});
		const uintKc3IpXl = BigInt("614")
		const uintYTBtodQ = BigInt("975")
		const boolOWq8zTq = await GreenMarkTrustIdpSb3l.burn.call(uintKc3IpXl, {from: accounts[0]});
//		const booldG1P8e6 = await GreenMarkTrustIdpSb3l.burn.call(uintYTBtodQ, {from: accounts[4]});

		assert.equal(boolOWq8zTq, true)
		await expect(GreenMarkTrustIdpSb3l.burn.call(uintYTBtodQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintaNFQdXd = BigInt("269")
		const string7ky8nu = "VDQtFM3L4o7vTNesQA"
		const stringEBARq0k = "7klqe"
		const GreenMarkTrustDs8vkTz = await GreenMarkTrust.new(uintaNFQdXd, string7ky8nu, stringEBARq0k, {from: accounts[4]});
		const uintBSYLtPR = BigInt("1515")
		const addressCNARM9n = accounts[4]
		const uintKwDlNqJ = BigInt("1879")
		const addressFxqxaMr = accounts[2]
		const boolhSsL9qc = await GreenMarkTrustDs8vkTz.approve.call(addressCNARM9n, uintBSYLtPR, {from: accounts[0]});
//		const boolfgLNq8G = await GreenMarkTrustDs8vkTz.burnFrom.call(addressFxqxaMr, uintKwDlNqJ, {from: accounts[4]});

		assert.equal(boolhSsL9qc, true)
		await expect(GreenMarkTrustDs8vkTz.burnFrom.call(addressFxqxaMr, uintKwDlNqJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintwyjQaiR = BigInt("269")
		const string7ky8nu = "VDQtFM3L4o7vTNesQA"
		const stringEBARq0k = "7klqe"
		const GreenMarkTrustDs8vkTz = await GreenMarkTrust.new(uintwyjQaiR, string7ky8nu, stringEBARq0k, {from: accounts[4]});
		const uintbHWp7rV = BigInt("1515")
		const addressGyfoVuT = accounts[4]
		const uintMai1Lyl = BigInt("1025")
		const addresspfQIZXr = accounts[0]
		const uintI6eUY9t = BigInt("1449")
		const boolhSsL9qc = await GreenMarkTrustDs8vkTz.approve.call(addressGyfoVuT, uintbHWp7rV, {from: accounts[0]});
//		const boolN3Ljgd8 = await GreenMarkTrustDs8vkTz.transfer.call(addresspfQIZXr, uintMai1Lyl, {from: accounts[3]});
//		const boolscwecSz = await GreenMarkTrustDs8vkTz.burn.call(uintI6eUY9t, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolhSsL9qc, true)
		await expect(GreenMarkTrustDs8vkTz.transfer.call(addresspfQIZXr, uintMai1Lyl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintAEOXgV9 = BigInt("1625")
		const stringL9dt0yd = "2mKswco3x0ZUvg6HtlRwdDh3gUH4dhPRwQEBRNsJbWyW6uQrDDuEeH9dIbjn11FE"
		const stringVGHpYrl = "n98XhcpaTbIt8uWpeK8"
		const GreenMarkTrustRctpy9O = await GreenMarkTrust.new(uintAEOXgV9, stringL9dt0yd, stringVGHpYrl, {from: accounts[0]});
		const uint1Fs8pK = BigInt("388")
		const addresszDhQvTZ = accounts[1]
		const uintd7xSzFm = BigInt("1072")
		const addressmtffYFL = accounts[0]
		const uintjXywUe2 = BigInt("1339")
		const addressMCTXbZ = accounts[2]
		const addressPIdlPFA = accounts[3]
		const byteuKJ1Qa6 = "0x1710010716070c0a030c0717150e19110a120c"
		const uintq2f1z1B = BigInt("1887")
		const addressQ3XWtEc = accounts[0]
		const uintJ1LxUA = BigInt("293")
		const byteJkpS7a = "0x04080109081d171108070c0e1411"
		const uintawpwHw4 = BigInt("347")
		const addressE6EngrL = accounts[0]
		const boolGmjZorD = await GreenMarkTrustRctpy9O.approve.call(addresszDhQvTZ, uint1Fs8pK, {from: accounts[3]});
//		const booltwLHrcq = await GreenMarkTrustRctpy9O.burnFrom.call(addressmtffYFL, uintd7xSzFm, {from: accounts[0]});
//		const boolbraI1MH = await GreenMarkTrustRctpy9O.transferFrom.call(addressPIdlPFA, addressMCTXbZ, uintjXywUe2, {from: accounts[4]});
//		const booloDYrbTe = await GreenMarkTrustRctpy9O.approveAndCall.call(addressQ3XWtEc, uintq2f1z1B, byteuKJ1Qa6, {from: accounts[4]});
//		const boolvCkhWFt = await GreenMarkTrustRctpy9O.burn.call(uintJ1LxUA, {from: accounts[2]});
//		const booleJOasTH = await GreenMarkTrustRctpy9O.approveAndCall.call(addressE6EngrL, uintawpwHw4, byteJkpS7a, {from: accounts[1]});

		assert.equal(boolGmjZorD, true)
		await expect(GreenMarkTrustRctpy9O.burnFrom.call(addressmtffYFL, uintd7xSzFm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintd3cFwoA = BigInt("1786")
		const stringyXVsCc5 = "M6TmT8C6sZBuwRHFb3xYp4EmpvNiFgui6agCGLoGcaKPixC6"
		const stringK0pFb2t = "arUoraCRjga3WJ6c6uBSIWq8uTlMUYlEcJs2NXlukkaJTe0yGvictQxRZlbYBz5YKtJOn"
		const GreenMarkTrustisBlGSz = await GreenMarkTrust.new(uintd3cFwoA, stringyXVsCc5, stringK0pFb2t, {from: accounts[3]});
		const uintvIUJ8V8 = BigInt("424")
		const addressRJQBe3W = accounts[4]
		const byteH5Okio0 = "0x011120080e0d100e040f0b1313"
		const uintQ5LqG2d = BigInt("1873")
		const addressMK5Vc1H = accounts[5]
		const uintwQAIQM = BigInt("1981")
		const addressCskv9eA = accounts[2]
		const boolXFxLz1d = await GreenMarkTrustisBlGSz.transfer.call(addressRJQBe3W, uintvIUJ8V8, {from: accounts[3]});
//		const boolJiz0lM = await GreenMarkTrustisBlGSz.approveAndCall.call(addressMK5Vc1H, uintQ5LqG2d, byteH5Okio0, {from: accounts[4]});
//		const boolxj2Wcwz = await GreenMarkTrustisBlGSz.burnFrom.call(addressCskv9eA, uintwQAIQM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXFxLz1d, true)
		await expect(GreenMarkTrustisBlGSz.approveAndCall.call(addressMK5Vc1H, uintQ5LqG2d, byteH5Okio0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})