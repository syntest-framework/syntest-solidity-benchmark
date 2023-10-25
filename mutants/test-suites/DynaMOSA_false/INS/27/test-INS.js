const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintAsBk06r = BigInt("1761")
		const stringcbdi3ZA = "9ssrBPZwtNaCbqxppWLhUX6WpNXm3IOU"
		const stringbhqAKf9 = "Fli9DzWN"
		const INSgLUY9sG = await INS.new(uintAsBk06r, stringcbdi3ZA, stringbhqAKf9, {from: accounts[0]});
		const byteciQCCap = "0x200c020e0e"
		const uintQpYCmWn = BigInt("425")
		const addressiupgHu7 = "0x0000000000000000000000000000000000000001"
		const uintehcBS5l = BigInt("1232")
		const addressbsn5JAX = accounts[3]
		const addressWg93Cu3 = "0x0000000000000000000000000000000000000001"
		const uintTQBMAY = BigInt("110")
		const addressyD8TYgs = accounts[2]
		const uintsZk0VIr = BigInt("553")
		const addressqI7GViz = accounts[0]
		const uintTANqSlb = BigInt("568")
		const addressCNaT6OP = "0x0000000000000000000000000000000000000001"
//		const boolEGF8yUk = await INSgLUY9sG.approveAndCall.call(addressiupgHu7, uintQpYCmWn, byteciQCCap, {from: accounts[0]});
//		const boolSOKif4t = await INSgLUY9sG.transferFrom.call(addressWg93Cu3, addressbsn5JAX, uintehcBS5l, {from: accounts[0]});
//		const boolztq5a3l = await INSgLUY9sG.approve.call(addressyD8TYgs, uintTQBMAY, {from: accounts[3]});
//		const boolxSprJn9 = await INSgLUY9sG.approve.call(addressqI7GViz, uintsZk0VIr, {from: accounts[2]});
//		const boolHDgL9jz = await INSgLUY9sG.transfer.call(addressCNaT6OP, uintTANqSlb, {from: accounts[1]});

		await expect(INSgLUY9sG.approveAndCall.call(addressiupgHu7, uintQpYCmWn, byteciQCCap, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintw9c9pDi = BigInt("1742")
		const stringStjmgc2 = "gSqfuRdIFKtyuB71rWHGvCsEtuJWEC7pgcxYvmLjXnvcI7Em"
		const stringr1FYcd1 = "UBwdrcv2P5dGF76QEkqL6vU"
		const INSQV95ipw = await INS.new(uintw9c9pDi, stringStjmgc2, stringr1FYcd1, {from: accounts[1]});
		const uintTLwyC2v = BigInt("1144")
		const uintOTYYsps = BigInt("1595")
		const addressYEzyw2H = accounts[2]
//		const boolkQmNygT = await INSQV95ipw.burn.call(uintTLwyC2v, {from: accounts[4]});
//		const boolO7XCiLK = await INSQV95ipw.burnFrom.call(addressYEzyw2H, uintOTYYsps, {from: accounts[3]});

		await expect(INSQV95ipw.burn.call(uintTLwyC2v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintvq8Mfzt = BigInt("1105")
		const stringDHDvDbx = "GWHwIspgEAExKDq8C73AO76RQrA8SW"
		const stringl5G5tJ = "MxdrW8p3MaigIK1wN52CMsqt"
		const INSrA2vjyH = await INS.new(uintvq8Mfzt, stringDHDvDbx, stringl5G5tJ, {from: accounts[3]});
		const uintrkaFD6 = BigInt("1374")
		const addresssVxRcz = accounts[2]
		const addressSmp2zxf = accounts[1]
		const uintFYdQmv = BigInt("351")
		const addressMOv8StK = accounts[2]
		const address2mt2zw = "0x0000000000000000000000000000000000000001"
		const byteBwHot7P = "0x08100c121c0a1418171d13130d0520051315"
		const uintWexpnxG = BigInt("1550")
		const addressK8UWYjG = accounts[4]
		const bytey0By6ru = "0x1f110503200c071e04"
		const uintPb44Y2 = BigInt("114")
		const addressRgIplRl = accounts[3]
		const byteMKw0elT = "0x0c16161d0a07021d0a190d180a12070c0509130802121e"
		const uintcr8GjOv = BigInt("328")
		const address2fDlPH = accounts[0]
//		const boolvzIf5Yg = await INSrA2vjyH.transferFrom.call(addressSmp2zxf, addresssVxRcz, uintrkaFD6, {from: accounts[2]});
//		const boolmyJzmNT = await INSrA2vjyH.transferFrom.call(address2mt2zw, addressMOv8StK, uintFYdQmv, {from: accounts[3]});
//		const boolruMFgzL = await INSrA2vjyH.approveAndCall.call(addressK8UWYjG, uintWexpnxG, byteBwHot7P, {from: accounts[0]});
//		const boolP7mDML = await INSrA2vjyH.approveAndCall.call(addressRgIplRl, uintPb44Y2, bytey0By6ru, {from: accounts[0]});
//		const booli0nFYaf = await INSrA2vjyH.approveAndCall.call(address2fDlPH, uintcr8GjOv, byteMKw0elT, {from: accounts[4]});

		await expect(INSrA2vjyH.transferFrom.call(addressSmp2zxf, addresssVxRcz, uintrkaFD6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintstAewVx = BigInt("1569")
		const stringGNLzYtz = "3YFOPK5LByHNDp"
		const stringlX6lDI6 = "aRhwzpfqrcbr9OXqz3uUdyOPJYugpo1i"
		const INSqHNEq9 = await INS.new(uintstAewVx, stringGNLzYtz, stringlX6lDI6, {from: accounts[5]});
		const uintakt9VB = BigInt("556")
		const addresskz51pQC = accounts[3]
		const byte4RPAXi = "0x1b040e13060713141b091a1908040210191f1f0d18121c"
		const uintIJcvLUN = BigInt("141")
		const addressJIs7dQ1 = accounts[0]
//		const boolRvvgvDy = await INSqHNEq9.burnFrom.call(addresskz51pQC, uintakt9VB, {from: accounts[4]});
//		const boolqjTfVhS = await INSqHNEq9.approveAndCall.call(addressJIs7dQ1, uintIJcvLUN, byte4RPAXi, {from: accounts[1]});

		await expect(INSqHNEq9.burnFrom.call(addresskz51pQC, uintakt9VB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintvBf0zVd = BigInt("1105")
		const stringDHDvDbx = "GWHwIspgEAExKDq8C73AO76RQrA8SW"
		const stringl5G5tJ = "MxdrW8p3MaigIK1wN52CMsqt"
		const INSrA2vjyH = await INS.new(uintvBf0zVd, stringDHDvDbx, stringl5G5tJ, {from: accounts[3]});
		const uintbOnHK31 = BigInt("1862")
		const addressXvTUWq = accounts[3]
		const uintZph3fIT = BigInt("1374")
		const addressiAVuEg = accounts[2]
		const addresssfJVKPE = accounts[1]
		const uintycFthy2 = BigInt("351")
		const addressLW0QZAr = accounts[2]
		const addressuOCH9IH = "0x0000000000000000000000000000000000000001"
		const uintRXKfu0q = BigInt("1486")
		const bytee3x65Y = "0x08100c121c0a1418171d13130d0520051315"
		const uintVf06p3B = BigInt("1550")
		const addressz6Nfpve = accounts[4]
		const bytewNbwVsZ = "0x1f110503200c071e04"
		const uintgIi9I3 = BigInt("114")
		const addressw7SpNfh = accounts[3]
		const byteExUfASy = "0x0c16161d0a07021d0a190d180a12070c0509130802121e"
		const uintYS2IksO = BigInt("368")
		const addressszHsEuK = accounts[0]
//		const booliBwngoz = await INSrA2vjyH.transfer.call(addressXvTUWq, uintbOnHK31, {from: accounts[0]});
//		const boolvzIf5Yg = await INSrA2vjyH.transferFrom.call(addresssfJVKPE, addressiAVuEg, uintZph3fIT, {from: accounts[2]});
//		const boolmyJzmNT = await INSrA2vjyH.transferFrom.call(addressuOCH9IH, addressLW0QZAr, uintycFthy2, {from: accounts[3]});
//		const boolsCrUQA9 = await INSrA2vjyH.burn.call(uintRXKfu0q, {from: accounts[4]});
//		const boolruMFgzL = await INSrA2vjyH.approveAndCall.call(addressz6Nfpve, uintVf06p3B, bytee3x65Y, {from: accounts[0]});
//		const boolP7mDML = await INSrA2vjyH.approveAndCall.call(addressw7SpNfh, uintgIi9I3, bytewNbwVsZ, {from: accounts[0]});
//		const booli0nFYaf = await INSrA2vjyH.approveAndCall.call(addressszHsEuK, uintYS2IksO, byteExUfASy, {from: accounts[4]});

		await expect(INSrA2vjyH.transfer.call(addressXvTUWq, uintbOnHK31, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintSldK8O7 = BigInt("1108")
		const stringxjcwcvZ = "wde2iiEYbEM7wi3A4JNUsMknNTGCJWtK53n4H"
		const stringIlB7vA1 = "bYAv9G"
		const INSzxm5rg = await INS.new(uintSldK8O7, stringxjcwcvZ, stringIlB7vA1, {from: "0x0000000000000000000000000000000000000001"});
		const uintUDHzf1w = BigInt("114")
		const addressznl00ia = accounts[3]
		const byteRaUkChe = "0x0a0e180d030f1604041f1c011d12150d1f0d0f08120c"
		const uint4vbBhr = BigInt("1033")
		const addressPyz7lmD = accounts[2]
		const uintIo4iyu = BigInt("1980")
		const uintpaHqBLA = BigInt("1792")
		const addressuM0nbfY = accounts[4]
		const boolOYGvG8O = await INSzxm5rg.approve.call(addressznl00ia, uintUDHzf1w, {from: accounts[3]});
		const boolcY5YsqI = await INSzxm5rg.approveAndCall.call(addressPyz7lmD, uint4vbBhr, byteRaUkChe, {from: "0x0000000000000000000000000000000000000001"});
		const boolCvloi9d = await INSzxm5rg.burn.call(uintIo4iyu, {from: accounts[1]});
		const boolQdMT3U0 = await INSzxm5rg.burnFrom.call(addressuM0nbfY, uintpaHqBLA, {from: accounts[0]});
	});
})