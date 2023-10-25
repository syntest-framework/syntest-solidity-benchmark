const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20sQR44q8 = await GAZ_ERC20.new({from: accounts[1]});
		const uintV856N2 = BigInt("864")
		const addresspc4yI0 = accounts[1]
		const uintbBAuqim = BigInt("1058")
		const addressAQXVInq = accounts[3]
		const boolHanoAbj = await GAZ_ERC20sQR44q8.approve.call(addresspc4yI0, uintV856N2, {from: accounts[5]});
		const boolHePMVne = await GAZ_ERC20sQR44q8.approve.call(addressAQXVInq, uintbBAuqim, {from: accounts[3]});

		assert.equal(boolHanoAbj, true)
		assert.equal(boolHePMVne, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20X2gJeOJ = await GAZ_ERC20.new({from: accounts[0]});
		const addressv2wkYx1 = accounts[0]
		const uintUDXrE0y = BigInt("1408")
		const addresslUuqKc = accounts[3]
		const addressXmkGgI = accounts[4]
		const uintELqUoms = BigInt("1651")
		const addressYiQZvBV = accounts[3]
		const uintzC71uXt = BigInt("296")
		const addressFxHWQ9l = accounts[3]
//		const boolyBvqBC5 = await GAZ_ERC20X2gJeOJ.approve.call(addressv2wkYx1, {from: accounts[0]});
//		const boolEbufmpf = await GAZ_ERC20X2gJeOJ.transferFrom.call(addressXmkGgI, addresslUuqKc, uintUDXrE0y, {from: accounts[0]});
//		const boolR4I1f5l = await GAZ_ERC20X2gJeOJ.transfer.call(addressYiQZvBV, uintELqUoms, {from: accounts[4]});
//		const boolwzURPwS = await GAZ_ERC20X2gJeOJ.approve.call(addressFxHWQ9l, uintzC71uXt, {from: accounts[2]});

		await expect(GAZ_ERC20X2gJeOJ.approve.call(addressv2wkYx1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20yOm224W = await GAZ_ERC20.new({from: accounts[4]});
		const addressohfxBFR = accounts[5]
		const uintMdyqaRq = BigInt("1845")
		const addressYbks8Wl = accounts[2]
		const uintGAuOJJV = BigInt("839")
		const addressY3tMYv0 = accounts[5]
//		const boolf9ffT0 = await GAZ_ERC20yOm224W.approve.call(addressohfxBFR, {from: accounts[4]});
//		const boolP48d8R = await GAZ_ERC20yOm224W.transfer.call(addressYbks8Wl, uintMdyqaRq, {from: accounts[3]});
//		const boolp4wXlW = await GAZ_ERC20yOm224W.approve.call(addressY3tMYv0, uintGAuOJJV, {from: accounts[0]});

		await expect(GAZ_ERC20yOm224W.approve.call(addressohfxBFR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kFhYMrw = await GAZ_ERC20.new({from: accounts[3]});
		const uinteUsUmpv = BigInt("1816")
		const addressArTClVZ = accounts[0]
		const uintHMmi8Ms = BigInt("675")
		const addressjTcP0UP = accounts[2]
		const boolFAhNCRw = await GAZ_ERC20kFhYMrw.approve.call(addressArTClVZ, uinteUsUmpv, {from: accounts[5]});
		const boolhQCX2s3 = await GAZ_ERC20kFhYMrw.transfer.call(addressjTcP0UP, uintHMmi8Ms, {from: accounts[3]});

		assert.equal(boolFAhNCRw, true)
		assert.equal(boolhQCX2s3, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Xb4RZBG = await GAZ_ERC20.new({from: accounts[3]});
		const uintx1lIzt4 = BigInt("1142")
		const addressLyaHpeG = accounts[3]
		const addressT6kPtEj = accounts[1]
		const addressUyCLkOp = accounts[3]
		const uintskXSF7v = BigInt("1244")
		const addressR7hg6Rb = accounts[4]
		const uintRxp89BR = BigInt("242")
		const addressSlJvYtB = accounts[0]
		const uintnXcKgwa = BigInt("1233")
		const addressAiZMPFW = accounts[2]
//		const boolXYDRnSW = await GAZ_ERC20Xb4RZBG.transferFrom.call(addressT6kPtEj, addressLyaHpeG, uintx1lIzt4, {from: accounts[3]});
//		const boolLNC0W2V = await GAZ_ERC20Xb4RZBG.approve.call(addressUyCLkOp, {from: accounts[5]});
//		const boolAYmfjj9 = await GAZ_ERC20Xb4RZBG.approve.call(addressR7hg6Rb, uintskXSF7v, {from: accounts[5]});
//		const boolHAzLcIK = await GAZ_ERC20Xb4RZBG.approve.call(addressSlJvYtB, uintRxp89BR, {from: accounts[1]});
//		const boolGMSUbQ5 = await GAZ_ERC20Xb4RZBG.transfer.call(addressAiZMPFW, uintnXcKgwa, {from: accounts[4]});

		await expect(GAZ_ERC20Xb4RZBG.transferFrom.call(addressT6kPtEj, addressLyaHpeG, uintx1lIzt4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20YTT5L8z = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintixzx6DO = BigInt("1008")
		const addresst6DEn2N = accounts[1]
		const uintUnfEnRJ = BigInt("85")
		const addressJX8qU6c = "0x0000000000000000000000000000000000000001"
		const addressw21bKR9 = accounts[1]
		const uintCfYEbN6 = BigInt("1513")
		const addressBekBUoO = "0x0000000000000000000000000000000000000001"
		const addressUtNfCyA = accounts[1]
		const boolzOpGyhx = await GAZ_ERC20YTT5L8z.approve.call(addresst6DEn2N, uintixzx6DO, {from: accounts[5]});
		const boolspuRJJQ = await GAZ_ERC20YTT5L8z.transferFrom.call(addressw21bKR9, addressJX8qU6c, uintUnfEnRJ, {from: accounts[1]});
		const boolphLda0p = await GAZ_ERC20YTT5L8z.transferFrom.call(addressUtNfCyA, addressBekBUoO, uintCfYEbN6, {from: accounts[4]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20g2BU7Fc = await GAZ_ERC20.new({from: accounts[4]});
		const uintg8Pouk = BigInt("1536")
		const addressEcsvdL2 = accounts[1]
		const uintKIMIXx5 = BigInt("1629")
		const addressrK7gQv = accounts[1]
		const uintiLbTAQT = BigInt("1180")
		const addressWMO3v8 = accounts[5]
		const uintsx9MuBp = BigInt("1079")
		const addressgizWmw5 = accounts[4]
//		const boolgJka1Qr = await GAZ_ERC20g2BU7Fc.transfer.call(addressEcsvdL2, uintg8Pouk, {from: accounts[0]});
//		const boolRxLfQHE = await GAZ_ERC20g2BU7Fc.approve.call(addressrK7gQv, uintKIMIXx5, {from: accounts[3]});
//		const boolaehKY5A = await GAZ_ERC20g2BU7Fc.approve.call(addressWMO3v8, uintiLbTAQT, {from: accounts[4]});
//		const boolr9CCuW = await GAZ_ERC20g2BU7Fc.approve.call(addressgizWmw5, uintsx9MuBp, {from: accounts[1]});

		await expect(GAZ_ERC20g2BU7Fc.transfer.call(addressEcsvdL2, uintg8Pouk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kFhYMrw = await GAZ_ERC20.new({from: accounts[3]});
		const addressWqVCY9g = accounts[2]
		const uintGKpdymx = BigInt("1799")
		const addressyOpcqG8 = accounts[0]
		const uintgXObPVD = BigInt("675")
		const addressW0ljHGD = accounts[2]
//		const boolqcQC5E = await GAZ_ERC20kFhYMrw.approve.call(addressWqVCY9g, {from: accounts[5]});
//		const boolFAhNCRw = await GAZ_ERC20kFhYMrw.approve.call(addressyOpcqG8, uintGKpdymx, {from: accounts[5]});
//		const boolhQCX2s3 = await GAZ_ERC20kFhYMrw.transfer.call(addressW0ljHGD, uintgXObPVD, {from: accounts[3]});

		await expect(GAZ_ERC20kFhYMrw.approve.call(addressWqVCY9g, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20yOm224W = await GAZ_ERC20.new({from: accounts[4]});
		const addressh1xCptB = accounts[2]
		const addressgoEXstY = accounts[5]
		const uintYA3hfOi = BigInt("564")
		const addressB3h5b8E = accounts[2]
		const uintvLxwoY9 = BigInt("1043")
		const addressU0NhPRA = accounts[3]
		const uintZksGfi2 = BigInt("839")
		const addressAzWRdv7 = accounts[5]
//		const booltjqfDMO = await GAZ_ERC20yOm224W.approve.call(addressh1xCptB, {from: accounts[2]});
//		const boolf9ffT0 = await GAZ_ERC20yOm224W.approve.call(addressgoEXstY, {from: accounts[4]});
//		const boolT5YEMM4 = await GAZ_ERC20yOm224W.approve.call(addressB3h5b8E, uintYA3hfOi, {from: accounts[3]});
//		const boolx2t7OHL = await GAZ_ERC20yOm224W.approve.call(addressU0NhPRA, uintvLxwoY9, {from: accounts[2]});
//		const boolp4wXlW = await GAZ_ERC20yOm224W.approve.call(addressAzWRdv7, uintZksGfi2, {from: accounts[0]});

		await expect(GAZ_ERC20yOm224W.approve.call(addressh1xCptB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20sQR44q8 = await GAZ_ERC20.new({from: accounts[1]});
		const uintwInF4yq = BigInt("598")
		const addressdJUOV1 = accounts[2]
		const uintgEedmEz = BigInt("864")
		const addresszvfRxjH = accounts[2]
		const uintjJUkrCa = BigInt("1058")
		const addressFvfTvfC = accounts[3]
		const addressc0SfWtN = accounts[1]
		const uintU3Yl6k = BigInt("1851")
		const addressdSTbkDe = accounts[2]
		const bool1Qd9B3 = await GAZ_ERC20sQR44q8.approve.call(addressdJUOV1, uintwInF4yq, {from: accounts[4]});
		const boolHanoAbj = await GAZ_ERC20sQR44q8.approve.call(addresszvfRxjH, uintgEedmEz, {from: accounts[5]});
		const boolHePMVne = await GAZ_ERC20sQR44q8.approve.call(addressFvfTvfC, uintjJUkrCa, {from: accounts[3]});
//		const booldxN0p2K = await GAZ_ERC20sQR44q8.approve.call(addressc0SfWtN, {from: accounts[1]});
//		const boolZhOvfPW = await GAZ_ERC20sQR44q8.transfer.call(addressdSTbkDe, uintU3Yl6k, {from: accounts[1]});

		assert.equal(bool1Qd9B3, true)
		assert.equal(boolHanoAbj, true)
		assert.equal(boolHePMVne, true)
		await expect(GAZ_ERC20sQR44q8.approve.call(addressc0SfWtN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Z6XssHr = await GAZ_ERC20.new({from: accounts[2]});
		const addressTx0aRAK = accounts[0]
		const uintC8LNHQj = BigInt("1009")
		const address33r2Rs = accounts[4]
//		const boolKxsz7pV = await GAZ_ERC20Z6XssHr.approve.call(addressTx0aRAK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUNlXo9 = await GAZ_ERC20Z6XssHr.transfer.call(address33r2Rs, uintC8LNHQj, {from: accounts[3]});

		await expect(GAZ_ERC20Z6XssHr.approve.call(addressTx0aRAK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20kFhYMrw = await GAZ_ERC20.new({from: accounts[3]});
		const addressSZ8jJsy = accounts[3]
		const uintNSN6yyI = BigInt("1169")
		const addressUxgd0zY = accounts[3]
		const addressYzISD37 = "0x0000000000000000000000000000000000000001"
		const uintqent8m7 = BigInt("1816")
		const addressLEGvHz = accounts[0]
//		const boolUukXNLT = await GAZ_ERC20kFhYMrw.approve.call(addressSZ8jJsy, {from: accounts[3]});
//		const booludKGAn6 = await GAZ_ERC20kFhYMrw.transferFrom.call(addressYzISD37, addressUxgd0zY, uintNSN6yyI, {from: accounts[1]});
//		const boolFAhNCRw = await GAZ_ERC20kFhYMrw.approve.call(addressLEGvHz, uintqent8m7, {from: accounts[5]});

		await expect(GAZ_ERC20kFhYMrw.approve.call(addressSZ8jJsy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})