const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintFVQI2DW = BigInt("945")
		const string24lMbu = "CrehueHlQ3G2D"
		const stringk4Ergr4 = "crtWS"
		const GreenMarkTrustQbIj18Z = await GreenMarkTrust.new(uintFVQI2DW, string24lMbu, stringk4Ergr4, {from: accounts[2]});
		const uintlj84Qw1 = BigInt("773")
		const addressh5AnPy = "0x0000000000000000000000000000000000000001"
		const uintTo6RR26 = BigInt("146")
		const addressv95V5NO = accounts[4]
		const uintcul24kc = BigInt("1558")
		const addressZlijMP = accounts[4]
		const addresswt09moR = accounts[2]
		const uintctTGyiM = BigInt("1027")
		const addressv9yFtpT = accounts[1]
		const addressiqv4AzW = accounts[0]
		const uintZL2LYu = BigInt("1855")
		const addressZlHHeQR = accounts[4]
		const addressLbX0dA = accounts[0]
//		const boolnZcLgTv = await GreenMarkTrustQbIj18Z.burnFrom.call(addressh5AnPy, uintlj84Qw1, {from: accounts[3]});
//		const booluBOLIwi = await GreenMarkTrustQbIj18Z.burnFrom.call(addressv95V5NO, uintTo6RR26, {from: accounts[3]});
//		const boolIGs6Xv = await GreenMarkTrustQbIj18Z.transferFrom.call(addresswt09moR, addressZlijMP, uintcul24kc, {from: accounts[2]});
//		const boolBwbJUGp = await GreenMarkTrustQbIj18Z.transferFrom.call(addressiqv4AzW, addressv9yFtpT, uintctTGyiM, {from: accounts[4]});
//		const boolQlneWxM = await GreenMarkTrustQbIj18Z.transferFrom.call(addressLbX0dA, addressZlHHeQR, uintZL2LYu, {from: accounts[0]});

		await expect(GreenMarkTrustQbIj18Z.burnFrom.call(addressh5AnPy, uintlj84Qw1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintisWQUoA = BigInt("1860")
		const stringiIAySJU = "rfYIGRfyv4ib5hHasinUkiURMK3iJn7ybTjy7ve9AW3ha8SB7c7QpxnF"
		const stringkEHAMFX = "Fuisi5mDVTeY5hXCTze1cLur5ILr8tEa5ZIAmaTmVWnUZFUHuYbMPCt2abmPkujjczSwyV8cPiCZOSvJ"
		const GreenMarkTrustYwcxgXz = await GreenMarkTrust.new(uintisWQUoA, stringiIAySJU, stringkEHAMFX, {from: accounts[0]});
		const byteldqlZPd = "0x0f141a12130d0f0d0d0f1a171e1e091d19050c08040f1b1b101111"
		const uintes9DqnG = BigInt("625")
		const addressp4SNlSZ = "0x0000000000000000000000000000000000000001"
		const byteWwHEfx = "0x171015171b170f091a1a150209181008191d180313140c201e1f0c0709"
		const uintLglYnV8 = BigInt("1769")
		const addressSrZdWne = accounts[1]
//		const boolOrwcMJ = await GreenMarkTrustYwcxgXz.approveAndCall.call(addressp4SNlSZ, uintes9DqnG, byteldqlZPd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLS12iaQ = await GreenMarkTrustYwcxgXz.approveAndCall.call(addressSrZdWne, uintLglYnV8, byteWwHEfx, {from: accounts[2]});

		await expect(GreenMarkTrustYwcxgXz.approveAndCall.call(addressp4SNlSZ, uintes9DqnG, byteldqlZPd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintNYTC4tw = BigInt("1505")
		const stringmeZ4Ysm = "UTzDKtnTfL7QKtv0EDgL7dfXPhA9k5q2TizRUmjm"
		const stringHjJwIYb = "IIqs"
		const GreenMarkTrustzBQUaTD = await GreenMarkTrust.new(uintNYTC4tw, stringmeZ4Ysm, stringHjJwIYb, {from: accounts[1]});
		const uintjqQWgYe = BigInt("193")
		const addressxBWo8j1 = accounts[1]
		const addressGU7EohD = accounts[1]
		const uintZwB3ri9 = BigInt("123")
		const addressYGAHaJ7 = accounts[5]
		const uintaCRIdwR = BigInt("682")
		const addresscndmqQ = accounts[4]
//		const boolXhaZYhP = await GreenMarkTrustzBQUaTD.transferFrom.call(addressGU7EohD, addressxBWo8j1, uintjqQWgYe, {from: accounts[0]});
//		const booll2HIcG = await GreenMarkTrustzBQUaTD.transfer.call(addressYGAHaJ7, uintZwB3ri9, {from: accounts[4]});
//		const boolT5MCPZc = await GreenMarkTrustzBQUaTD.transfer.call(addresscndmqQ, uintaCRIdwR, {from: accounts[2]});

		await expect(GreenMarkTrustzBQUaTD.transferFrom.call(addressGU7EohD, addressxBWo8j1, uintjqQWgYe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintybxd12 = BigInt("736")
		const stringA8Idkcx = "VsBFrbd5KrKG"
		const stringkanMlT = "RIqP4x2NMcqpN7kHaU4Fibhlzh"
		const GreenMarkTrustEhdpza9 = await GreenMarkTrust.new(uintybxd12, stringA8Idkcx, stringkanMlT, {from: accounts[3]});
		const uintGKguSdQ = BigInt("1829")
		const addressWt5Qm1m = accounts[4]
		const uintPQrvW0y = BigInt("1806")
		const addressNTmUPuI = accounts[0]
		const uinttMxu7pk = BigInt("103")
//		const boolLcCpXfn = await GreenMarkTrustEhdpza9.transfer.call(addressWt5Qm1m, uintGKguSdQ, {from: accounts[0]});
//		const boolwXX0qDc = await GreenMarkTrustEhdpza9.approve.call(addressNTmUPuI, uintPQrvW0y, {from: accounts[1]});
//		const boolFSN1xFM = await GreenMarkTrustEhdpza9.burn.call(uinttMxu7pk, {from: accounts[4]});

		await expect(GreenMarkTrustEhdpza9.transfer.call(addressWt5Qm1m, uintGKguSdQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uint6pNt8m = BigInt("1260")
		const stringnso1joL = "icI"
		const stringu2sp6K = "GKLJyBCniZZuMyfA5AmiiGLs8yh5Ee5moVt1R63SAm7re5THHcfuNumKE8VEQfqBHZLAeTw"
		const GreenMarkTrustnhupdhu = await GreenMarkTrust.new(uint6pNt8m, stringnso1joL, stringu2sp6K, {from: accounts[4]});
		const uintrpJnTNw = BigInt("2018")
		const addressdXfFhrO = accounts[4]
		const uintFujq8Wq = BigInt("1324")
		const byteA3iDObE = "0x1703021e180307030d201c"
		const uintzGODOgR = BigInt("1993")
		const addresspIKY4zr = accounts[1]
		const boolrGzenN3 = await GreenMarkTrustnhupdhu.approve.call(addressdXfFhrO, uintrpJnTNw, {from: accounts[4]});
//		const boolLb7o9JS = await GreenMarkTrustnhupdhu.burn.call(uintFujq8Wq, {from: accounts[0]});
//		const boolqr2KW1V = await GreenMarkTrustnhupdhu.approveAndCall.call(addresspIKY4zr, uintzGODOgR, byteA3iDObE, {from: accounts[4]});

		assert.equal(boolrGzenN3, true)
		await expect(GreenMarkTrustnhupdhu.burn.call(uintFujq8Wq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintbxp06Jf = BigInt("573")
		const stringYl1zoRy = "1KKUu6tzExRkHIA0EcbwcdSlKSlhxXK0lva8GkuuRrFM9quR86pfPDGgEOQK2j2xGh924hFgCvPljGNJ044eOpq57LAuFJ"
		const stringFeAiFsq = "CmY4NQs"
		const GreenMarkTrustduBFZs6 = await GreenMarkTrust.new(uintbxp06Jf, stringYl1zoRy, stringFeAiFsq, {from: "0x0000000000000000000000000000000000000001"});
		const uintGCXGywy = BigInt("68")
		const addresseyhV4ZT = "0x0000000000000000000000000000000000000001"
		const uinthYG2EFi = BigInt("243")
		const addressIxAi0jh = accounts[3]
		const addressdfejddM = accounts[2]
		const uintICgbGv9 = BigInt("109")
		const booln2xsAwd = await GreenMarkTrustduBFZs6.approve.call(addresseyhV4ZT, uintGCXGywy, {from: accounts[5]});
		const boolcwzh7K9 = await GreenMarkTrustduBFZs6.transferFrom.call(addressdfejddM, addressIxAi0jh, uinthYG2EFi, {from: accounts[0]});
		const boolXSCq24c = await GreenMarkTrustduBFZs6.burn.call(uintICgbGv9, {from: accounts[5]});
	});
})