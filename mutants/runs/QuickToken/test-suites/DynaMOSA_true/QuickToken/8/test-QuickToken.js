const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresst8YB99P = accounts[2]
		const addressMLffo4 = accounts[4]
		const QuickTokenmlKFCEh = await QuickToken.new(addresst8YB99P, addressMLffo4, {from: accounts[4]});
		const addressY93SAy7 = accounts[3]
		const addressNMdeun5 = accounts[1]
		const uintK6at130 = BigInt("1834")
		const addressTkBfSs = accounts[2]
		const addresshsu3fYg = accounts[3]
		const addresseRCyjKT = "0x0000000000000000000000000000000000000001"
		const addresseXAleq = accounts[3]
		const addresssucCPTU = accounts[3]
		const uinthGC5HGg = BigInt("1111")
		const addressLsjupl = accounts[4]
		const uintfVcPvM = await QuickTokenmlKFCEh.balanceOf.call(addressY93SAy7, {from: accounts[2]});
		const uintHTDouBj = await QuickTokenmlKFCEh.balanceOf.call(addressNMdeun5, {from: accounts[1]});
		const boolweu7NV1 = await QuickTokenmlKFCEh.approve.call(addressTkBfSs, uintK6at130, {from: accounts[1]});
		const uintugobCEP = await QuickTokenmlKFCEh.allowance.call(addresseRCyjKT, addresshsu3fYg, {from: accounts[1]});
		const uint0AukVh = await QuickTokenmlKFCEh.allowance.call(addresssucCPTU, addresseXAleq, {from: accounts[0]});
		const booln5Qs67U = await QuickTokenmlKFCEh.approve.call(addressLsjupl, uinthGC5HGg, {from: accounts[4]});

		assert.equal(booln5Qs67U, true)
		assert.equal(boolweu7NV1, true)
		assert.equal(uint0AukVh, BigInt("0"))
		assert.equal(uintHTDouBj, BigInt("0"))
		assert.equal(uintfVcPvM, BigInt("0"))
		assert.equal(uintugobCEP, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addresszTTkeff = accounts[0]
		const addressHeWfFrU = accounts[2]
		const QuickTokenOS85Sb5 = await QuickToken.new(addresszTTkeff, addressHeWfFrU, {from: accounts[4]});
		const uintOD1fciB = BigInt("52")
		const addressPhHpZfp = accounts[3]
		const uintOmBtdLr = BigInt("971")
		const addressCXbudp1 = accounts[4]
		const uintSDKcSFb = BigInt("308")
		const addressDvMASKq = accounts[4]
		const addressXS3Sgiz = accounts[1]
		const addressR0Df9q = accounts[2]
		const boolvMkSkKk = await QuickTokenOS85Sb5.transfer.call(addressPhHpZfp, uintOD1fciB, {from: accounts[1]});
		const boolx4MbQOx = await QuickTokenOS85Sb5.approve.call(addressCXbudp1, uintOmBtdLr, {from: "0x0000000000000000000000000000000000000001"});
		const boolHLOEG8q = await QuickTokenOS85Sb5.approve.call(addressDvMASKq, uintSDKcSFb, {from: "0x0000000000000000000000000000000000000001"});
		const uintOhLdYu = await QuickTokenOS85Sb5.allowance.call(addressR0Df9q, addressXS3Sgiz, {from: accounts[0]});

		await expect(QuickTokenOS85Sb5.transfer.call(addressPhHpZfp, uintOD1fciB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressBzHnayw = accounts[4]
		const addressXg2WsIZ = accounts[0]
		const QuickTokenHwM1L5Z = await QuickToken.new(addressBzHnayw, addressXg2WsIZ, {from: accounts[3]});
		const uintjYZ14cs = BigInt("1444")
		const addressT225bCq = accounts[4]
		const uintH71Xkjw = BigInt("1739")
		const addressMR5TQM3 = accounts[4]
		const addressS2HlLRq = accounts[2]
		const addressq4qNGuk = accounts[2]
		const addressyw2bp45 = await QuickTokenHwM1L5Z.mint.call(addressT225bCq, uintjYZ14cs, {from: accounts[3]});
		const boolU5SVHEu = await QuickTokenHwM1L5Z.transfer.call(addressMR5TQM3, uintH71Xkjw, {from: accounts[2]});
		const uintOJaYW3g = await QuickTokenHwM1L5Z.allowance.call(addressq4qNGuk, addressS2HlLRq, {from: accounts[2]});

		await expect(QuickTokenHwM1L5Z.mint.call(addressT225bCq, uintjYZ14cs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressoFryXS = accounts[2]
		const addressc7XHZN = accounts[3]
		const QuickTokenQHZWrKV = await QuickToken.new(addressoFryXS, addressc7XHZN, {from: accounts[4]});
		const uintLpU38Qw = BigInt("454")
		const addressGVDhBF5 = accounts[1]
		const addressO4f230P = accounts[4]
		const addressSMjnnhS = accounts[0]
		const addressyoGJc1a = accounts[2]
		const uintu3vJJbW = BigInt("1400")
		const addresshg9UUnj = accounts[2]
		const uintnRTMZrs = BigInt("1852")
		const addressIb1dfv0 = "0x0000000000000000000000000000000000000001"
		const boolDZZThEK = await QuickTokenQHZWrKV.transferFrom.call(addressO4f230P, addressGVDhBF5, uintLpU38Qw, {from: accounts[3]});
		const uintFPpGO0 = await QuickTokenQHZWrKV.allowance.call(addressyoGJc1a, addressSMjnnhS, {from: accounts[2]});
		const boolqEDDuD4 = await QuickTokenQHZWrKV.approve.call(addresshg9UUnj, uintu3vJJbW, {from: accounts[3]});
		const boolxEBDDgf = await QuickTokenQHZWrKV.transfer.call(addressIb1dfv0, uintnRTMZrs, {from: accounts[1]});

		await expect(QuickTokenQHZWrKV.transferFrom.call(addressO4f230P, addressGVDhBF5, uintLpU38Qw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressCuAHAfM = accounts[4]
		const addressi75V029 = accounts[4]
		const QuickTokenOxqxbJt = await QuickToken.new(addressCuAHAfM, addressi75V029, {from: accounts[0]});
		const uintJFvkerU = BigInt("163")
		const addressTVG5Gfs = accounts[2]
		const addressG8R2xcR = accounts[3]
		const addressdMtZkAq = accounts[1]
		const uintgYToClC = BigInt("1280")
		const addressz4nV2Cf = accounts[0]
		const addressgr2Ykoa = accounts[3]
		const uintujbxZj2 = BigInt("122")
		const addressBVHWR29 = "0x0000000000000000000000000000000000000001"
		const uintdNQSJym = BigInt("348")
		const addressm0YGYCh = accounts[2]
		const addressCghSFMS = accounts[4]
		const addressvDAyhxb = await QuickTokenOxqxbJt.mint.call(addressTVG5Gfs, uintJFvkerU, {from: accounts[4]});
		const uintiMu2zHd = await QuickTokenOxqxbJt.allowance.call(addressdMtZkAq, addressG8R2xcR, {from: "0x0000000000000000000000000000000000000001"});
		const boolGDwb9If = await QuickTokenOxqxbJt.transferFrom.call(addressgr2Ykoa, addressz4nV2Cf, uintgYToClC, {from: "0x0000000000000000000000000000000000000001"});
		const boolYEZFLEE = await QuickTokenOxqxbJt.transfer.call(addressBVHWR29, uintujbxZj2, {from: accounts[4]});
		const boolPaQ4ekh = await QuickTokenOxqxbJt.transferFrom.call(addressCghSFMS, addressm0YGYCh, uintdNQSJym, {from: accounts[1]});

		assert.equal(uintiMu2zHd, BigInt("0"))
		await expect(QuickTokenOxqxbJt.transferFrom.call(addressgr2Ykoa, addressz4nV2Cf, uintgYToClC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressLT6E3zf = "0x0000000000000000000000000000000000000001"
		const addressQQofnmn = accounts[5]
		const QuickTokenqqqQn49 = await QuickToken.new(addressLT6E3zf, addressQQofnmn, {from: accounts[1]});
		const uintgZfD10N = BigInt("893")
		const addressdmooP2F = accounts[4]
		const addressXvSRuyX = "0x0000000000000000000000000000000000000001"
		const uint1XRPTT = BigInt("1434")
		const addressbEWnFUN = accounts[2]
		const addresshST4gDy = accounts[4]
		const addresssPAdKW = accounts[4]
		const bool4KOrsx = await QuickTokenqqqQn49.approve.call(addressdmooP2F, uintgZfD10N, {from: accounts[4]});
		const addressmo6vcB = await QuickTokenqqqQn49.setMinter.call(addressXvSRuyX, {from: accounts[4]});
		const boolqG03eZi = await QuickTokenqqqQn49.transfer.call(addressbEWnFUN, uint1XRPTT, {from: accounts[4]});
		const uintkDHsGDx = await QuickTokenqqqQn49.allowance.call(addresssPAdKW, addresshST4gDy, {from: accounts[0]});

		assert.equal(bool4KOrsx, true)
		await expect(QuickTokenqqqQn49.setMinter.call(addressXvSRuyX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressPxcmMcp = accounts[4]
		const addressbci6eX4 = accounts[4]
		const QuickTokenOxqxbJt = await QuickToken.new(addressPxcmMcp, addressbci6eX4, {from: accounts[0]});
		const uintMZE4COK = BigInt("615")
		const addresswCresU0 = accounts[4]
		const uintSRdGJvj = BigInt("745")
		const addressB3rmTj1 = accounts[3]
		const addresscLp7lS2 = "0x0000000000000000000000000000000000000001"
		const addressBmxyYiK = accounts[1]
		const uintuXOLKyd = BigInt("1331")
		const addressSV4gcZA = accounts[4]
		const addressvDAyhxb = await QuickTokenOxqxbJt.mint.call(addresswCresU0, uintMZE4COK, {from: accounts[4]});
		const boolsC1avAk = await QuickTokenOxqxbJt.transfer.call(addressB3rmTj1, uintSRdGJvj, {from: accounts[4]});
		const uintWwOFAN = await QuickTokenOxqxbJt.allowance.call(addressBmxyYiK, addresscLp7lS2, {from: accounts[1]});
		const boolOGwlJOs = await QuickTokenOxqxbJt.transfer.call(addressSV4gcZA, uintuXOLKyd, {from: accounts[0]});

		assert.equal(boolsC1avAk, true)
		assert.equal(uintWwOFAN, BigInt("0"))
		await expect(QuickTokenOxqxbJt.transfer.call(addressSV4gcZA, uintuXOLKyd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressATwrFF = accounts[4]
		const addressHVehfNf = accounts[0]
		const QuickTokenkaQvYBc = await QuickToken.new(addressATwrFF, addressHVehfNf, {from: "0x0000000000000000000000000000000000000001"});
		const addressuCCTCz = accounts[1]
		const uintShM9uIV = BigInt("499")
		const addressjRYydL0 = accounts[3]
		const addressY9sIlsW = accounts[0]
		const addressW5gfdN6 = accounts[2]
		const addressj5jwWEB = accounts[1]
		const addressXOvaKCK = accounts[0]
		const addressUJADm31 = accounts[4]
		const uintBu7kse4 = await QuickTokenkaQvYBc.balanceOf.call(addressuCCTCz, {from: accounts[2]});
		const addressD43gJeD = await QuickTokenkaQvYBc.mint.call(addressjRYydL0, uintShM9uIV, {from: accounts[3]});
		const uintmEussF = await QuickTokenkaQvYBc.allowance.call(addressW5gfdN6, addressY9sIlsW, {from: accounts[5]});
		const uinteRPAw88 = await QuickTokenkaQvYBc.allowance.call(addressXOvaKCK, addressj5jwWEB, {from: accounts[4]});
		const uintGCehiJl = await QuickTokenkaQvYBc.balanceOf.call(addressUJADm31, {from: accounts[0]});
	});
})