const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintIpVOCwb = BigInt("1303")
		const BancorV2_ZapIn_General_V1_1BWdJnzQ = await BancorV2_ZapIn_General_V1_1.new(uintIpVOCwb, {from: accounts[4]});
		const uintcaLaJWW = BigInt("393")
		const addressLOJYYob = accounts[3]
		const uintyWWTnT = BigInt("388")
		const uint16xzrqiiz = await BancorV2_ZapIn_General_V1_1BWdJnzQ.set_new_goodwill.call(uintcaLaJWW, {from: accounts[3]});
		const addressO5Hw6yi = await BancorV2_ZapIn_General_V1_1BWdJnzQ.inCaseTokengetsStuck.call(addressLOJYYob, {from: accounts[5]});
		const uint16SUKNIo = await BancorV2_ZapIn_General_V1_1BWdJnzQ.set_new_goodwill.call(uintyWWTnT, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1BWdJnzQ.set_new_goodwill.call(uintcaLaJWW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintA6u1hy1 = BigInt("1772")
		const BancorV2_ZapIn_General_V1_1MX9pL5m = await BancorV2_ZapIn_General_V1_1.new(uintA6u1hy1, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1MX9pL5m.toggleContractActive.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1MX9pL5m.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1MX9pL5m.toggleContractActive.call({from: accounts[2]});
		const addressAJcYvF6 = await BancorV2_ZapIn_General_V1_1MX9pL5m.owner.call({from: accounts[5]});
		const boolIKMNGp7 = await BancorV2_ZapIn_General_V1_1MX9pL5m.isOwner.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1MX9pL5m.toggleContractActive.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintUxyqngO = BigInt("1553")
		const BancorV2_ZapIn_General_V1_1F9u5sTW = await BancorV2_ZapIn_General_V1_1.new(uintUxyqngO, {from: accounts[2]});
		const boolpZ7dOLA = await BancorV2_ZapIn_General_V1_1F9u5sTW.isOwner.call({from: accounts[5]});
		const addressFGdoGWc = await BancorV2_ZapIn_General_V1_1F9u5sTW.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1F9u5sTW.nonReentrant.call({from: accounts[1]});

		assert.equal(addressFGdoGWc, 0xfaB51FC1a40D2fc38fA213A98Ef3a580A2DAc7A7)
		assert.equal(boolpZ7dOLA, false)
		await expect(BancorV2_ZapIn_General_V1_1F9u5sTW.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintnuZTL6T = BigInt("1026")
		const BancorV2_ZapIn_General_V1_1hKD0RsH = await BancorV2_ZapIn_General_V1_1.new(uintnuZTL6T, {from: "0x0000000000000000000000000000000000000001"});
		const bytegA9FHho = "0x0e171e170801121f0d1209200d141f0d121d0f0c15130303020b"
		const addresssFfNKS = accounts[1]
		const addressJxmf7Gd = accounts[1]
		const uintZRxmmyg = BigInt("747")
		const uintPWmAPWX = BigInt("1588")
		const addressSj1h2v7 = "0x0000000000000000000000000000000000000001"
		const addressxxfYwD = accounts[4]
		const addressxhaqygi = accounts[5]
		const uint256mqF8anY = await BancorV2_ZapIn_General_V1_1hKD0RsH.ZapInSingleSided.call(addressxhaqygi, addressxxfYwD, addressSj1h2v7, uintPWmAPWX, uintZRxmmyg, addressJxmf7Gd, addresssFfNKS, bytegA9FHho, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1hKD0RsH.nonReentrant.call({from: accounts[4]});
		const boolLVo0DeQ = await BancorV2_ZapIn_General_V1_1hKD0RsH.isOwner.call({from: accounts[3]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintAujRbHD = BigInt("1309")
		const BancorV2_ZapIn_General_V1_19N5mOb = await BancorV2_ZapIn_General_V1_1.new(uintAujRbHD, {from: accounts[2]});
		const byteSDBQkMP = "0x1f10150603180119130b080a"
		const addressv5locru = accounts[4]
		const addressPvyW5ba = accounts[5]
		const uintFgnQB9M = BigInt("1623")
		const uintUvLR08p = BigInt("732")
		const addressL5WMDRX = accounts[3]
		const addressm6OxNoT = "0x0000000000000000000000000000000000000001"
		const addressfIGt3pR = accounts[2]
		const addressT3E769u = accounts[6]
		const booldWrppL5 = await BancorV2_ZapIn_General_V1_19N5mOb.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Kc75AV = await BancorV2_ZapIn_General_V1_19N5mOb.ZapInSingleSided.call(addressfIGt3pR, addressm6OxNoT, addressL5WMDRX, uintUvLR08p, uintFgnQB9M, addressPvyW5ba, addressv5locru, byteSDBQkMP, {from: accounts[2]});
		const addresschEc8Bg = await BancorV2_ZapIn_General_V1_19N5mOb.toPayable.call(addressT3E769u, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldWrppL5, false)
		await expect(BancorV2_ZapIn_General_V1_19N5mOb.ZapInSingleSided.call(addressfIGt3pR, addressm6OxNoT, addressL5WMDRX, uintUvLR08p, uintFgnQB9M, addressPvyW5ba, addressv5locru, byteSDBQkMP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZxYgedo = BigInt("1309")
		const BancorV2_ZapIn_General_V1_19N5mOb = await BancorV2_ZapIn_General_V1_1.new(uintZxYgedo, {from: accounts[2]});
		const addresspHsq5WB = accounts[1]
		const addressW8fL5WK = accounts[6]
		await BancorV2_ZapIn_General_V1_19N5mOb.renounceOwnership.call({from: accounts[2]});
		const addressRFidCwR = await BancorV2_ZapIn_General_V1_19N5mOb.inCaseTokengetsStuck.call(addresspHsq5WB, {from: accounts[3]});
		const addresschEc8Bg = await BancorV2_ZapIn_General_V1_19N5mOb.toPayable.call(addressW8fL5WK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_19N5mOb.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYx9fXKm = BigInt("1309")
		const BancorV2_ZapIn_General_V1_19N5mOb = await BancorV2_ZapIn_General_V1_1.new(uintYx9fXKm, {from: accounts[2]});
		const addressIVpPKWu = accounts[1]
		const bytenKauCrd = "0x1f10150603180119130b080a"
		const addressPyQHxhr = accounts[5]
		const addressm07LDsp = accounts[5]
		const uintqZYxI7J = BigInt("1623")
		const uintNndE2v = BigInt("732")
		const addressDsgBSgK = accounts[3]
		const addresstP3rCh = "0x0000000000000000000000000000000000000000"
		const addresskji7LD = accounts[2]
		const addressqOzJxKD = await BancorV2_ZapIn_General_V1_19N5mOb.inCaseTokengetsStuck.call(addressIVpPKWu, {from: accounts[2]});
		const uint256Kc75AV = await BancorV2_ZapIn_General_V1_19N5mOb.ZapInSingleSided.call(addresskji7LD, addresstP3rCh, addressDsgBSgK, uintNndE2v, uintqZYxI7J, addressm07LDsp, addressPyQHxhr, bytenKauCrd, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_19N5mOb.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_19N5mOb.inCaseTokengetsStuck.call(addressIVpPKWu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintId3FQ95 = BigInt("1309")
		const BancorV2_ZapIn_General_V1_19N5mOb = await BancorV2_ZapIn_General_V1_1.new(uintId3FQ95, {from: accounts[2]});
		const uintnqKnAV = BigInt("2015")
		const addressxU9zpwG = accounts[6]
		const uint16oLyMEr = await BancorV2_ZapIn_General_V1_19N5mOb.set_new_goodwill.call(uintnqKnAV, {from: accounts[2]});
		const addresschEc8Bg = await BancorV2_ZapIn_General_V1_19N5mOb.toPayable.call(addressxU9zpwG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_19N5mOb.toPayable.call(addressxU9zpwG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintrYMm4f6 = BigInt("1309")
		const BancorV2_ZapIn_General_V1_19N5mOb = await BancorV2_ZapIn_General_V1_1.new(uintrYMm4f6, {from: accounts[2]});
		const bytefMbt2NN = "0x041511100d00140118120f0d0c0d090c011a161a1c"
		const addressyM4znDE = accounts[1]
		const addressO8oLwtA = accounts[0]
		const uintaWCoxGw = BigInt("1204")
		const uintUqu9ELb = BigInt("1978")
		const addresslEunxSi = accounts[1]
		const addressKoF5phl = accounts[4]
		const addressl1XWHY6 = accounts[5]
		const bytekCKlP20 = "0x1f10150603180119130b080a"
		const addresszsBVqi = accounts[5]
		const addressoMua1iz = accounts[5]
		const uintg4zeI6K = BigInt("1623")
		const uintYkvdrOz = BigInt("732")
		const addressp1PTxmN = accounts[3]
		const addressDKjdrwl = "0x0000000000000000000000000000000000000002"
		const addressTFcra92 = accounts[2]
		await BancorV2_ZapIn_General_V1_19N5mOb.withdraw.call({from: accounts[2]});
		const bool6aVJtb = await BancorV2_ZapIn_General_V1_19N5mOb.isOwner.call({from: accounts[4]});
		const uint256wIYSwtz = await BancorV2_ZapIn_General_V1_19N5mOb.ZapInSingleSided.call(addressl1XWHY6, addressKoF5phl, addresslEunxSi, uintUqu9ELb, uintaWCoxGw, addressO8oLwtA, addressyM4znDE, bytefMbt2NN, {from: accounts[2]});
		const uint256Kc75AV = await BancorV2_ZapIn_General_V1_19N5mOb.ZapInSingleSided.call(addressTFcra92, addressDKjdrwl, addressp1PTxmN, uintYkvdrOz, uintg4zeI6K, addressoMua1iz, addresszsBVqi, bytekCKlP20, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_19N5mOb.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintUBE0dk = BigInt("1309")
		const BancorV2_ZapIn_General_V1_19N5mOb = await BancorV2_ZapIn_General_V1_1.new(uintUBE0dk, {from: accounts[2]});
		const addressRQkyMtt = accounts[4]
		const byteLrTpmi = "0x1f10150603180119130b080a"
		const addressSzIJu4i = accounts[5]
		const addressoNEPJ0 = accounts[5]
		const uintXvfmSFa = BigInt("1623")
		const uintMuVaMqg = BigInt("732")
		const addressh6RsZ7s = accounts[4]
		const addressB9OvCeN = "0x0000000000000000000000000000000000000001"
		const addressFXIfJI = accounts[2]
		const addressyizwmof = await BancorV2_ZapIn_General_V1_19N5mOb.transferOwnership.call(addressRQkyMtt, {from: accounts[2]});
		const uint256Kc75AV = await BancorV2_ZapIn_General_V1_19N5mOb.ZapInSingleSided.call(addressFXIfJI, addressB9OvCeN, addressh6RsZ7s, uintMuVaMqg, uintXvfmSFa, addressoNEPJ0, addressSzIJu4i, byteLrTpmi, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_19N5mOb.ZapInSingleSided.call(addressFXIfJI, addressB9OvCeN, addressh6RsZ7s, uintMuVaMqg, uintXvfmSFa, addressoNEPJ0, addressSzIJu4i, byteLrTpmi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})