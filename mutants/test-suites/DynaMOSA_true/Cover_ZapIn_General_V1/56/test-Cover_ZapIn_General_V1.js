const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uinteVrfz1R = BigInt("1978")
		const Cover_ZapIn_General_V1mitsKQr = await Cover_ZapIn_General_V1.new(uinteVrfz1R, {from: accounts[2]});
		const addressFw9fX7s = "0x0000000000000000000000000000000000000001"
		await Cover_ZapIn_General_V1mitsKQr.onlyOwner.call({from: accounts[2]});
		const boolj8tPytY = await Cover_ZapIn_General_V1mitsKQr.isOwner.call({from: accounts[2]});
		const boolXsFBDok = await Cover_ZapIn_General_V1mitsKQr.isOwner.call({from: accounts[1]});
		const addressBVvKcXA = await Cover_ZapIn_General_V1mitsKQr.inCaseTokengetsStuck.call(addressFw9fX7s, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintbxMpRkn = BigInt("1484")
		const Cover_ZapIn_General_V1AVGuMLb = await Cover_ZapIn_General_V1.new(uintbxMpRkn, {from: "0x0000000000000000000000000000000000000001"});
		const addressrQ0nLNG = accounts[1]
		const byteoVvdpLJ = "0x0c050c100e0d1b02061020041d1304171e0911200605"
		const addressUBfPAdF = accounts[3]
		const addressEx4cImi = accounts[5]
		const uintSJhwiQP = BigInt("1261")
		const addressJBo4KJC = accounts[2]
		const addressdlKeNH0 = accounts[3]
		const addressv4liGct = accounts[0]
		const addressmbCWyhL = accounts[4]
		const addressJSPN5t7 = accounts[1]
		const addressRHmaQ6f = await Cover_ZapIn_General_V1AVGuMLb.transferOwnership.call(addressrQ0nLNG, {from: accounts[1]});
		const 
AelWBe = await Cover_ZapIn_General_V1AVGuMLb.ZapIn.call(addressmbCWyhL, addressv4liGct, addressdlKeNH0, addressJBo4KJC, uintSJhwiQP, addressEx4cImi, addressUBfPAdF, byteoVvdpLJ, {from: accounts[0]});
		const 
RVXcmVe = await Cover_ZapIn_General_V1AVGuMLb._getCoverDetails.call(addressJSPN5t7, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintVDDSVRi = BigInt("116")
		const Cover_ZapIn_General_V1z9Swpic = await Cover_ZapIn_General_V1.new(uintVDDSVRi, {from: accounts[4]});
		const bytembionlL = "0x14140f0f0e1a1f"
		const addressILwQCj = accounts[2]
		const addressmSQ6JqV = accounts[2]
		const uintm0AE0nH = BigInt("1325")
		const addressXphbnob = accounts[2]
		const addressLhTwdWJ = accounts[0]
		const addressY2xynYr = accounts[1]
		const addressKLy3xle = accounts[4]
		const byteWt0ggrX = "0x01131f060616181f191a0817030b0e04110b"
		const addressZyemroy = accounts[3]
		const addressXuqrvV = accounts[2]
		const uintg7tl7bV = BigInt("804")
		const addressOKVMxLY = accounts[2]
		const addressQUSwMKk = accounts[2]
		const addressLUZy0S1 = accounts[4]
		const addressEuRqMH7 = accounts[0]
		const uintFPf3Y9Q = BigInt("60")
		const address8qU4rU = "0x0000000000000000000000000000000000000001"
		const 
mcLoXWE = await Cover_ZapIn_General_V1z9Swpic.ZapIn.call(addressKLy3xle, addressY2xynYr, addressLhTwdWJ, addressXphbnob, uintm0AE0nH, addressmSQ6JqV, addressILwQCj, bytembionlL, {from: accounts[2]});
		const boolSFPrfXY = await Cover_ZapIn_General_V1z9Swpic.isOwner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1z9Swpic.onlyOwner.call({from: accounts[0]});
		const 
eGKAloi = await Cover_ZapIn_General_V1z9Swpic.ZapIn.call(addressEuRqMH7, addressLUZy0S1, addressQUSwMKk, addressOKVMxLY, uintg7tl7bV, addressXuqrvV, addressZyemroy, byteWt0ggrX, {from: accounts[2]});
		await Cover_ZapIn_General_V1z9Swpic._enterCover.call(address8qU4rU, uintFPf3Y9Q, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttyj6BvW = BigInt("485")
		const Cover_ZapIn_General_V11WwuKl = await Cover_ZapIn_General_V1.new(uinttyj6BvW, {from: accounts[5]});
		const addressHP8Yd0b = accounts[2]
		const addressbg7LyR = await Cover_ZapIn_General_V11WwuKl.transferOwnership.call(addressHP8Yd0b, {from: accounts[4]});
		const addressN9NciX = await Cover_ZapIn_General_V11WwuKl.owner.call({from: accounts[2]});
		await Cover_ZapIn_General_V11WwuKl.withdraw.call({from: accounts[3]});
		const addresskyHhSZP = await Cover_ZapIn_General_V11WwuKl.owner.call({from: accounts[2]});
		await Cover_ZapIn_General_V11WwuKl.renounceOwnership.call({from: accounts[1]});
		await Cover_ZapIn_General_V11WwuKl.renounceOwnership.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintAFQb5bm = BigInt("1032")
		const Cover_ZapIn_General_V1Ebm55aP = await Cover_ZapIn_General_V1.new(uintAFQb5bm, {from: accounts[2]});
		const bytebG8Nt8o = "0x0600041b1d1a1b0618181f1d1806151010"
		const addresswQcHGit = "0x0000000000000000000000000000000000000001"
		const addressQML1ZdY = accounts[2]
		const uintBn9zgd3 = BigInt("1060")
		const addressyPh4Wfr = accounts[0]
		const addressPNUKtZo = accounts[1]
		const addressRQtQpEs = accounts[0]
		const addresszUQlHky = accounts[3]
		const addressSyhjSJJ = accounts[1]
		const addressAvKcHZY = accounts[0]
		const uintNGjZhFd = BigInt("1370")
		const addressWy9RmKG = accounts[1]
		await Cover_ZapIn_General_V1Ebm55aP.withdraw.call({from: accounts[2]});
		const boolOIKcxyC = await Cover_ZapIn_General_V1Ebm55aP.isOwner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1Ebm55aP.stopInEmergency.call({from: accounts[3]});
		const 
aNxZ1dX = await Cover_ZapIn_General_V1Ebm55aP.ZapIn.call(addresszUQlHky, addressRQtQpEs, addressPNUKtZo, addressyPh4Wfr, uintBn9zgd3, addressQML1ZdY, addresswQcHGit, bytebG8Nt8o, {from: accounts[2]});
		const 
uO7aOl = await Cover_ZapIn_General_V1Ebm55aP._enterPosition.call(addressWy9RmKG, uintNGjZhFd, addressAvKcHZY, addressSyhjSJJ, {from: accounts[1]});
		await Cover_ZapIn_General_V1Ebm55aP.toggleContractActive.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintakiUPK3 = BigInt("1848")
		const Cover_ZapIn_General_V1Xu372E2 = await Cover_ZapIn_General_V1.new(uintakiUPK3, {from: accounts[3]});
		const uintGQhy0WU = BigInt("659")
		const uintzCJkxSA = BigInt("89")
		const uint16Yuzqi22 = await Cover_ZapIn_General_V1Xu372E2.set_new_goodwill.call(uintGQhy0WU, {from: accounts[3]});
		const uint16C0P11pL = await Cover_ZapIn_General_V1Xu372E2.set_new_goodwill.call(uintzCJkxSA, {from: accounts[2]});
		await Cover_ZapIn_General_V1Xu372E2.withdraw.call({from: accounts[0]});
		await Cover_ZapIn_General_V1Xu372E2.renounceOwnership.call({from: accounts[0]});
		await Cover_ZapIn_General_V1Xu372E2.onlyOwner.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintZpioUKA = BigInt("1032")
		const Cover_ZapIn_General_V1Ebm55aP = await Cover_ZapIn_General_V1.new(uintZpioUKA, {from: accounts[2]});
		const addressKxv79Zw = accounts[1]
		const byteIdVIDXr = "0x0600041b1d1a1b0618181f1d1806151010"
		const addressZBeRQXv = "0x0000000000000000000000000000000000000001"
		const addressdsk0fOn = accounts[2]
		const uintVRsRIb = BigInt("1060")
		const addressn9guA3n = accounts[0]
		const addressrmqB1T7 = accounts[1]
		const addressJjW2Lto = accounts[0]
		const addressqTDwAM = accounts[3]
		const uintwN9hOY = BigInt("1154")
		const addressMPNSAh = accounts[0]
		const addressJhFCeu3 = accounts[1]
		const addressgm8edRw = accounts[0]
		const uintnFs9jGa = BigInt("1370")
		const addressXRw1GX8 = accounts[1]
		const addressNyOVuYY = await Cover_ZapIn_General_V1Ebm55aP.inCaseTokengetsStuck.call(addressKxv79Zw, {from: accounts[2]});
		const 
aNxZ1dX = await Cover_ZapIn_General_V1Ebm55aP.ZapIn.call(addressqTDwAM, addressJjW2Lto, addressrmqB1T7, addressn9guA3n, uintVRsRIb, addressdsk0fOn, addressZBeRQXv, byteIdVIDXr, {from: accounts[2]});
		await Cover_ZapIn_General_V1Ebm55aP._enterCover.call(addressMPNSAh, uintwN9hOY, {from: accounts[4]});
		const 
uO7aOl = await Cover_ZapIn_General_V1Ebm55aP._enterPosition.call(addressXRw1GX8, uintnFs9jGa, addressgm8edRw, addressJhFCeu3, {from: accounts[1]});
		await Cover_ZapIn_General_V1Ebm55aP.onlyOwner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1Ebm55aP.toggleContractActive.call({from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintlVWW38D = BigInt("1032")
		const Cover_ZapIn_General_V1Ebm55aP = await Cover_ZapIn_General_V1.new(uintlVWW38D, {from: accounts[2]});
		const byteT1TiWVs = "0x0600041b1d1a1b0618181f1d1806151010"
		const addressYjntNb = "0x0000000000000000000000000000000000000001"
		const addressDkGb4rt = accounts[2]
		const uintoJLhe5d = BigInt("1060")
		const addresshjmryoG = accounts[0]
		const addressNTDiBH8 = accounts[1]
		const addressBQ8gVOL = accounts[0]
		const addresscDh38Sc = accounts[3]
		await Cover_ZapIn_General_V1Ebm55aP.renounceOwnership.call({from: accounts[2]});
		const 
aNxZ1dX = await Cover_ZapIn_General_V1Ebm55aP.ZapIn.call(addresscDh38Sc, addressBQ8gVOL, addressNTDiBH8, addresshjmryoG, uintoJLhe5d, addressDkGb4rt, addressYjntNb, byteT1TiWVs, {from: accounts[2]});
	});
})