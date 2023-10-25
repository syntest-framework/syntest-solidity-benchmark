const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringS1P385H = "jedFjxpGguy2VjApCmrqVe4GizfFjB01RiFMXlWrfZbmUUzb5kGlN"
		const stringl8wFnP2 = "xA2cCcGq16wHSAaLMOZcdh8jJFkvSByEXv4nCEXbvawUweAXK"
		const uinti78ybD3 = BigInt("282")
		const WOLFu5kNlqw = await WOLF.new(stringS1P385H, stringl8wFnP2, uinti78ybD3, {from: accounts[3]});
		const uintjTJ1lzH = BigInt("552")
		const addresstqlsJXF = accounts[4]
		const addressSrBxjzU = accounts[1]
		const uintJwoOnFa = BigInt("479")
		const addressgXoYjLa = accounts[0]
		const uintZ1YitJ = BigInt("586")
		const addressKDNjLQ = accounts[4]
		const uint4vGNKT = BigInt("579")
		const addressc1efBO6 = "0x0000000000000000000000000000000000000001"
		const uintyhOUnT = BigInt("1411")
		const addressFf0W1TA = accounts[1]
		const addresstXLpwN5 = accounts[4]
//		const boolEju0KkD = await WOLFu5kNlqw.transferFrom.call(addressSrBxjzU, addresstqlsJXF, uintjTJ1lzH, {from: accounts[4]});
//		const boolGNECj9R = await WOLFu5kNlqw.approve.call(addressgXoYjLa, uintJwoOnFa, {from: accounts[1]});
//		const booltPWCH7C = await WOLFu5kNlqw.approveAndCall.call(addressKDNjLQ, uintZ1YitJ, {from: accounts[5]});
//		const boolgzvLYPE = await WOLFu5kNlqw.approveAndCall.call(addressc1efBO6, uint4vGNKT, {from: accounts[5]});
//		const boolzIdDU8o = await WOLFu5kNlqw.transferFrom.call(addresstXLpwN5, addressFf0W1TA, uintyhOUnT, {from: accounts[2]});

		await expect(WOLFu5kNlqw.transferFrom.call(addressSrBxjzU, addresstqlsJXF, uintjTJ1lzH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringfPDeBAi = "jhcxjkXsqQlE1PrrcWyFnqvm5JNWZSwFNxgweh3b9nkKVpPs7KrosFHqiaMm7fU8vXXM6k346v1T"
		const stringB1GdiQ8 = "3xKPPYZVnRaAGuvwdrJY6eeWmRNUVtHoh7P4kfrkKdGFN76B4rA2HPOJgVnDqwmSYwAV0hornAcB9GdVPGKHYSatN"
		const uintpPeiTo = BigInt("109")
		const WOLFfaJEKBS = await WOLF.new(stringfPDeBAi, stringB1GdiQ8, uintpPeiTo, {from: accounts[0]});
		const uintuicxDsa = BigInt("871")
		const addressQsLydP = accounts[3]
		const uintJCrUQKD = BigInt("1876")
		const addresseKhO7Dd = accounts[1]
		const addresszDRRrzI = "0x0000000000000000000000000000000000000001"
		const addressYvhyxdx = "0x0000000000000000000000000000000000000001"
		const uintHoFXjm = BigInt("1175")
		const addressFtKUQj = accounts[1]
		const addressCgone4g = "0x0000000000000000000000000000000000000001"
		const uintD0xjmrp = BigInt("1063")
		const addressAYLcQeg = accounts[4]
//		const boolS32hhAX = await WOLFfaJEKBS.approveAndCall.call(addressQsLydP, uintuicxDsa, {from: accounts[5]});
//		const boolhiuly00 = await WOLFfaJEKBS.transferFrom.call(addresszDRRrzI, addresseKhO7Dd, uintJCrUQKD, {from: accounts[2]});
//		const boolkEXiSp1 = await WOLFfaJEKBS.transferownership.call(addressYvhyxdx, {from: accounts[3]});
//		const boolohmjdLK = await WOLFfaJEKBS.transferFrom.call(addressCgone4g, addressFtKUQj, uintHoFXjm, {from: accounts[4]});
//		const boolhB1foUi = await WOLFfaJEKBS.approveAndCall.call(addressAYLcQeg, uintD0xjmrp, {from: accounts[3]});

		await expect(WOLFfaJEKBS.approveAndCall.call(addressQsLydP, uintuicxDsa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringww9rRJO = "Oy6L3zERRJzcLAnsj5py7If95bgINjrdcS4AIy0o"
		const stringKyKS8I2 = "3blPEctfoQNovmE2OxfgYmgIEV8JpPDLJkGcebJ"
		const uintzuedzVh = BigInt("1396")
		const WOLFiUtAjR6 = await WOLF.new(stringww9rRJO, stringKyKS8I2, uintzuedzVh, {from: accounts[5]});
		const uintnQke3tH = BigInt("870")
		const address93pHTG = accounts[1]
		const uinti1TUqW0 = BigInt("710")
		const addressnZcLVdu = accounts[0]
		const uints500PSe = BigInt("464")
		const addressusFMh9p = accounts[0]
		const uintvE9ci6j = BigInt("1756")
		const addressec0LhhS = accounts[2]
		const addressuhuETVQ = accounts[2]
		const uintYYce4ZY = BigInt("1425")
		const addressmJUZWqN = accounts[1]
		const boolOwBROW = await WOLFiUtAjR6.approve.call(address93pHTG, uintnQke3tH, {from: accounts[2]});
//		const booljshyYU = await WOLFiUtAjR6.transfer.call(addressnZcLVdu, uinti1TUqW0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZBmXUcb = await WOLFiUtAjR6.approveAndCall.call(addressusFMh9p, uints500PSe, {from: accounts[4]});
//		const boolG8iX1Pc = await WOLFiUtAjR6.transferFrom.call(addressuhuETVQ, addressec0LhhS, uintvE9ci6j, {from: accounts[4]});
//		const booluHiO8Xo = await WOLFiUtAjR6.approve.call(addressmJUZWqN, uintYYce4ZY, {from: accounts[3]});

		assert.equal(boolOwBROW, true)
		await expect(WOLFiUtAjR6.transfer.call(addressnZcLVdu, uinti1TUqW0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringwFanhLP = "k4nxmAT60eRBRTwtX1QHVpDPzZcVeCbcs3haerkoNPanEK2u5ISBJ4"
		const stringV5qGW3b = "gYMPAoLakA63JlCkalYFI7G"
		const uintJBUP6X2 = BigInt("756")
		const WOLFST3PmM5 = await WOLF.new(stringwFanhLP, stringV5qGW3b, uintJBUP6X2, {from: accounts[5]});
		const uintRo1Hcfz = BigInt("1599")
		const address5SKRqj = accounts[3]
		const uintWIdUhuh = BigInt("925")
		const addressXiJWPow = accounts[5]
		const uinth5QtQxY = BigInt("255")
		const addressRuaQntT = "0x0000000000000000000000000000000000000001"
		const addressOBylWu8 = "0x0000000000000000000000000000000000000001"
		const boolgHQ8YUq = await WOLFST3PmM5.approve.call(address5SKRqj, uintRo1Hcfz, {from: accounts[3]});
		const boolQxbF3V3 = await WOLFST3PmM5.approveAndCall.call(addressXiJWPow, uintWIdUhuh, {from: accounts[5]});
//		const bool5ExuKH = await WOLFST3PmM5.transferFrom.call(addressOBylWu8, addressRuaQntT, uinth5QtQxY, {from: accounts[5]});

		assert.equal(boolQxbF3V3, true)
		assert.equal(boolgHQ8YUq, true)
		await expect(WOLFST3PmM5.transferFrom.call(addressOBylWu8, addressRuaQntT, uinth5QtQxY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringf1Mgdj8 = "FRBVlg9uAO6dLpEHpTf5UJS8eXSBFcojC1AKOL"
		const stringXOsiCf = "xG9qwFCjKH1OCGWuoagnOrOVVGst57BJzU"
		const uintxbBssZR = BigInt("291")
		const WOLFPmFtpr = await WOLF.new(stringf1Mgdj8, stringXOsiCf, uintxbBssZR, {from: "0x0000000000000000000000000000000000000001"});
		const uintRFzqdZn = BigInt("1181")
		const addressTbUVD5w = accounts[4]
		const addressbxrXJ6F = accounts[1]
		const uintQiNN4wi = BigInt("934")
		const addresswwspNSQ = accounts[0]
		const addresssa6HHOY = accounts[0]
		const uintIZkT7FV = BigInt("1607")
		const addresswIF5jP = accounts[2]
		const uintnXBTwB = BigInt("1655")
		const addressaJLxc82 = accounts[0]
		const uintvjHe3gU = BigInt("422")
		const addressxoxnctX = accounts[5]
		const addressAaPARBy = accounts[1]
		const uintl1kViAl = BigInt("1684")
		const addressvZOnVmb = accounts[4]
		const boolo4iuUc7 = await WOLFPmFtpr.transferFrom.call(addressbxrXJ6F, addressTbUVD5w, uintRFzqdZn, {from: accounts[4]});
		const boolgiCkO6Q = await WOLFPmFtpr.transferFrom.call(addresssa6HHOY, addresswwspNSQ, uintQiNN4wi, {from: accounts[3]});
		const boolgh4E2Y = await WOLFPmFtpr.transfer.call(addresswIF5jP, uintIZkT7FV, {from: "0x0000000000000000000000000000000000000001"});
		const boolhXiDrRL = await WOLFPmFtpr.approveAndCall.call(addressaJLxc82, uintnXBTwB, {from: accounts[1]});
		const boolKc8Ad4P = await WOLFPmFtpr.transferFrom.call(addressAaPARBy, addressxoxnctX, uintvjHe3gU, {from: accounts[3]});
		const boolo1Xb4cL = await WOLFPmFtpr.approve.call(addressvZOnVmb, uintl1kViAl, {from: accounts[2]});
	});

	it('test for WOLF', async () => {
		const stringX5RypDJ = "hCFnX1M78E5Nqq3q"
		const stringjTNjo0 = "Z724zHBM"
		const uintqHvcTFp = BigInt("309")
		const WOLFPyIv4bO = await WOLF.new(stringX5RypDJ, stringjTNjo0, uintqHvcTFp, {from: accounts[3]});
		const uintn8fVx2N = BigInt("154")
		const addressKqQaaeh = accounts[3]
		const uintF5AwMJb = BigInt("184")
		const addressnfs8xLx = accounts[2]
		const addressju56UIV = accounts[4]
		const uintxFTauft = BigInt("770")
		const addressvBA9aSu = accounts[5]
		const uintEYMq9Dy = BigInt("1972")
		const addressMfBQtbp = accounts[1]
		const addressLD6Nug8 = accounts[4]
		const addressyMwxpqQ = accounts[0]
//		const booltRD8T7O = await WOLFPyIv4bO.transfer.call(addressKqQaaeh, uintn8fVx2N, {from: accounts[0]});
//		const boolNSu8cZC = await WOLFPyIv4bO.transferFrom.call(addressju56UIV, addressnfs8xLx, uintF5AwMJb, {from: accounts[1]});
//		const boolChcaLT9 = await WOLFPyIv4bO.transfer.call(addressvBA9aSu, uintxFTauft, {from: accounts[2]});
//		const boolsTXWYw = await WOLFPyIv4bO.transferFrom.call(addressLD6Nug8, addressMfBQtbp, uintEYMq9Dy, {from: accounts[4]});
//		const boolkOwfjNj = await WOLFPyIv4bO.transferownership.call(addressyMwxpqQ, {from: accounts[3]});

		await expect(WOLFPyIv4bO.transfer.call(addressKqQaaeh, uintn8fVx2N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringIIptIfB = "mX46vaH"
		const stringL95eFNX = "2zAAEXHoct5mjRIvG6d5tEri8AbWzyiEEK5vPAp"
		const uintToOt184 = BigInt("79")
		const WOLFlwpX2nE = await WOLF.new(stringIIptIfB, stringL95eFNX, uintToOt184, {from: accounts[3]});
		const addresslYnq33Z = accounts[3]
		const uintLMvryjQ = BigInt("1220")
		const addressHoZlkXy = "0x0000000000000000000000000000000000000001"
		const uintBFQAKCq = BigInt("1872")
		const addressldcslOO = accounts[3]
//		const boolnmrlTbC = await WOLFlwpX2nE.transferownership.call(addresslYnq33Z, {from: accounts[1]});
//		const booll8K4mrW = await WOLFlwpX2nE.approveAndCall.call(addressHoZlkXy, uintLMvryjQ, {from: accounts[4]});
//		const boolGG3aHxm = await WOLFlwpX2nE.approveAndCall.call(addressldcslOO, uintBFQAKCq, {from: accounts[2]});

		await expect(WOLFlwpX2nE.transferownership.call(addresslYnq33Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringX5RypDJ = "hCFnX1M78E5Nqq3q"
		const stringjTNjo0 = "Z724zHBM"
		const uintCXW096k = BigInt("309")
		const WOLFPyIv4bO = await WOLF.new(stringX5RypDJ, stringjTNjo0, uintCXW096k, {from: accounts[3]});
		const addressvCU1mj = accounts[1]
		const boolkOwfjNj = await WOLFPyIv4bO.transferownership.call(addressvCU1mj, {from: accounts[3]});

		assert.equal(boolkOwfjNj, true)
	});

	it('test for WOLF', async () => {
		const stringX5RypDJ = "hCFnX1M78E5Nqq3q"
		const stringjTNjo0 = "Z724zHBM"
		const uintEOQSDeE = BigInt("309")
		const WOLFPyIv4bO = await WOLF.new(stringX5RypDJ, stringjTNjo0, uintEOQSDeE, {from: accounts[3]});
		const uinticfXxlO = BigInt("0")
		const addressDLdmtbR = accounts[4]
		const uintmOhfKQb = BigInt("491")
		const addressxi8bIx0 = accounts[0]
		const uintdTij9Ib = BigInt("2020")
		const addressSp92UsT = accounts[5]
		const addressaJ0XBWL = accounts[4]
		const uintfZUBMzj = BigInt("133")
		const addressHqzhsca = accounts[3]
		const booltJYdhs = await WOLFPyIv4bO.transfer.call(addressDLdmtbR, uinticfXxlO, {from: accounts[2]});
//		const boolU4XWF85 = await WOLFPyIv4bO.transfer.call(addressxi8bIx0, uintmOhfKQb, {from: accounts[4]});
//		const booldIzz7xV = await WOLFPyIv4bO.transfer.call(addressSp92UsT, uintdTij9Ib, {from: accounts[1]});
//		const boolq9Zb1Ri = await WOLFPyIv4bO.transferownership.call(addressaJ0XBWL, {from: accounts[4]});
//		const boolHcqnkhj = await WOLFPyIv4bO.approveAndCall.call(addressHqzhsca, uintfZUBMzj, {from: accounts[1]});

		assert.equal(booltJYdhs, true)
		await expect(WOLFPyIv4bO.transfer.call(addressxi8bIx0, uintmOhfKQb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringgEGKQJ7 = "w8iHXxUopPU"
		const stringpuyczTq = "K0CgLUkX8EWJTJGHcWdaNNu0olOzoLLC1YQuRxorF4Rqrc9"
		const uintGvcfJGv = BigInt("1099")
		const WOLFHVi3O9V = await WOLF.new(stringgEGKQJ7, stringpuyczTq, uintGvcfJGv, {from: accounts[3]});
		const uintdx9ZaJ = BigInt("856")
		const addressKqdWkSC = accounts[1]
		const uintGAwTu5N = BigInt("0")
		const addressMFzoNRz = accounts[4]
		const uintJSexcDH = BigInt("1976")
		const addressLD6OEwI = accounts[2]
		const boolIP0r33C = await WOLFHVi3O9V.approve.call(addressKqdWkSC, uintdx9ZaJ, {from: accounts[0]});
		const boolYbpqm2 = await WOLFHVi3O9V.approveAndCall.call(addressMFzoNRz, uintGAwTu5N, {from: accounts[3]});
		const boolxAEtzVi = await WOLFHVi3O9V.approve.call(addressLD6OEwI, uintJSexcDH, {from: accounts[0]});

		assert.equal(boolIP0r33C, true)
		assert.equal(boolYbpqm2, true)
		assert.equal(boolxAEtzVi, true)
	});
})