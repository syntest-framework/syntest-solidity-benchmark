const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringLiz6toF = "qOafAptPMuXRKfIBlGnBaVe"
		const stringvGJGzVa = "2bOyxrJbC5CDd274N5J3HsCIlxAjhEOc9uRIHOO13V87yS9rzNZ2hL6RMOBK095ueFvWAyRt97RXOkWUpflhR6m8t"
		const uintqN4gzPa = BigInt("1467")
		const WOLFpsGe6c = await WOLF.new(stringLiz6toF, stringvGJGzVa, uintqN4gzPa, {from: accounts[2]});
		const uintzicrYwL = BigInt("1833")
		const addressTVneti = accounts[1]
		const addressnuOnj8 = accounts[2]
		const uintxoNivBg = BigInt("2017")
		const addressbrK7ybK = "0x0000000000000000000000000000000000000001"
		const uintvf2e7AK = BigInt("1218")
		const addressFkXYTt8 = accounts[3]
		const boolDNUMYhw = await WOLFpsGe6c.transferFrom.call(addressnuOnj8, addressTVneti, uintzicrYwL, {from: accounts[5]});
		const bool7oHFBB = await WOLFpsGe6c.approveAndCall.call(addressbrK7ybK, uintxoNivBg, {from: accounts[4]});
		const bool31LHTu = await WOLFpsGe6c.approve.call(addressFkXYTt8, uintvf2e7AK, {from: accounts[4]});

		await expect(WOLFpsGe6c.transferFrom.call(addressnuOnj8, addressTVneti, uintzicrYwL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringy9H9m0a = "Oew0LIieYbTAD9YAp6W9YMR6ON9"
		const stringGto6GeM = "7SRDrwJdIvyLL5yMH2aI88vkSC6C5dpr1Faihl89oeyPiLCrrcpNSHT8"
		const uintjQVgHgI = BigInt("57")
		const WOLFUhZGzhA = await WOLF.new(stringy9H9m0a, stringGto6GeM, uintjQVgHgI, {from: accounts[2]});
		const uintFws9M6 = BigInt("1543")
		const addressHIyyjnB = accounts[0]
		const addressLWbJQ85 = accounts[4]
		const uintO8mkNTS = BigInt("365")
		const addressz7d8vc4 = accounts[2]
		const boolKRTPU6 = await WOLFUhZGzhA.approveAndCall.call(addressHIyyjnB, uintFws9M6, {from: accounts[0]});
		const bool8HKSkA = await WOLFUhZGzhA.transferownership.call(addressLWbJQ85, {from: "0x0000000000000000000000000000000000000001"});
		const boolpwspkY = await WOLFUhZGzhA.approveAndCall.call(addressz7d8vc4, uintO8mkNTS, {from: accounts[3]});

		await expect(WOLFUhZGzhA.approveAndCall.call(addressHIyyjnB, uintFws9M6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringZpha3e6 = "DtwBSLlEZqqOH0L27"
		const stringqepmdjI = "zkq"
		const uintT2v6NrV = BigInt("1933")
		const WOLFJCe69q = await WOLF.new(stringZpha3e6, stringqepmdjI, uintT2v6NrV, {from: "0x0000000000000000000000000000000000000001"});
		const uintKWGBm3V = BigInt("2021")
		const addressNVqFjL = accounts[0]
		const uinte1Eobo5 = BigInt("1681")
		const addressWnSgmFS = accounts[1]
		const uintrlAMfaU = BigInt("1631")
		const addressbR2JY1h = accounts[1]
		const uint1eDma7 = BigInt("1472")
		const addressPtNv09X = accounts[5]
		const addressO818UDD = accounts[1]
		const booli6nQblg = await WOLFJCe69q.approve.call(addressNVqFjL, uintKWGBm3V, {from: accounts[3]});
		const boolHJMbDsp = await WOLFJCe69q.transfer.call(addressWnSgmFS, uinte1Eobo5, {from: accounts[0]});
		const boolGA54Si = await WOLFJCe69q.approve.call(addressbR2JY1h, uintrlAMfaU, {from: "0x0000000000000000000000000000000000000001"});
		const boolxnbkWnb = await WOLFJCe69q.transferFrom.call(addressO818UDD, addressPtNv09X, uint1eDma7, {from: accounts[1]});
	});

	it('test for WOLF', async () => {
		const stringU5BNazY = "92eFxpJgYm7m3HFuZomY8wdEIygc4IUw9qJ5lJ1m6zXY9YHYu1mKzNcMdQsoKb3mYIOLXHPgBoXWH5zA3Jk"
		const stringjRuDxRd = "RgqI8E4aT6T2pDJS3BOCAOt6kAgWzQJeTbUWn3nqE7GdohixI4kWjw5Ow"
		const uinttQheKND = BigInt("686")
		const WOLFwIjldSP = await WOLF.new(stringU5BNazY, stringjRuDxRd, uinttQheKND, {from: accounts[1]});
		const uintNaEWyBe = BigInt("1378")
		const addressSlTnPrq = accounts[4]
		const uintIngphJH = BigInt("1070")
		const addressNK40Um = accounts[4]
		const addressBRQrpzN = accounts[4]
		const uintV9ud3Il = BigInt("948")
		const addresswzbMRh = accounts[0]
		const uintMpkaytg = BigInt("1286")
		const addressL8OSrUn = accounts[4]
		const uintKZh2yD0 = BigInt("1398")
		const addressm26e8YM = accounts[0]
		const boolTB2ff1K = await WOLFwIjldSP.transfer.call(addressSlTnPrq, uintNaEWyBe, {from: accounts[0]});
		const boolvCcLROO = await WOLFwIjldSP.approveAndCall.call(addressNK40Um, uintIngphJH, {from: accounts[3]});
		const boolR7rGHF = await WOLFwIjldSP.transferownership.call(addressBRQrpzN, {from: accounts[5]});
		const boolz9mMFDb = await WOLFwIjldSP.approveAndCall.call(addresswzbMRh, uintV9ud3Il, {from: accounts[2]});
		const boolEmLRtXq = await WOLFwIjldSP.approve.call(addressL8OSrUn, uintMpkaytg, {from: accounts[0]});
		const boolAUSsE5 = await WOLFwIjldSP.approveAndCall.call(addressm26e8YM, uintKZh2yD0, {from: accounts[2]});

		await expect(WOLFwIjldSP.transfer.call(addressSlTnPrq, uintNaEWyBe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringLC2MNLz = "RK4OmTsKLbTgvbdz0mU1X6SCg3ea"
		const stringiSIl6m = "TqMWEwDSyDcU7UHdMpXOm6SEBxKJU37Igp5WzNN2yi6vDjifbJOn1u1AKtC5N"
		const uintl6BsP2 = BigInt("370")
		const WOLFsVFAqJx = await WOLF.new(stringLC2MNLz, stringiSIl6m, uintl6BsP2, {from: accounts[3]});
		const uintBakaNoa = BigInt("1814")
		const addressnQAs9WZ = accounts[1]
		const uintOrTVr3p = BigInt("1188")
		const address4Rr1zj = accounts[4]
		const uintRSfXVpR = BigInt("14")
		const addressVoB6ZO0 = accounts[1]
		const addressdkusuHZ = accounts[0]
		const booltPjnEqs = await WOLFsVFAqJx.approveAndCall.call(addressnQAs9WZ, uintBakaNoa, {from: accounts[3]});
		const bool6tS1g6 = await WOLFsVFAqJx.approveAndCall.call(address4Rr1zj, uintOrTVr3p, {from: accounts[4]});
		const boolUmv4YH = await WOLFsVFAqJx.approveAndCall.call(addressVoB6ZO0, uintRSfXVpR, {from: accounts[2]});
		const boolA5mkCKR = await WOLFsVFAqJx.transferownership.call(addressdkusuHZ, {from: accounts[0]});

		assert.equal(booltPjnEqs, true)
		await expect(WOLFsVFAqJx.approveAndCall.call(address4Rr1zj, uintOrTVr3p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringJMRuJOH = "dTrrU4IkBAuriukAcFWdOv42Mk5t6R46pmMneS9i3v4uPFHqox7Vm9xHqFkJSRp5Bt23AJMcpZByxKgzs"
		const stringNlj6bLr = "gqD3Yf5vl55oRvy7zXtX3HX9tVxxdy2x4P8jPnNrT3TPVvgUtYzK7lnpOpphO9tQUglPtMHsQLs3BM3NJ"
		const uintJsway5p = BigInt("932")
		const WOLF99dj4Q = await WOLF.new(stringJMRuJOH, stringNlj6bLr, uintJsway5p, {from: accounts[2]});
		const addressT0YMuLL = accounts[3]
		const addressZVDgI8L = accounts[4]
		const boolvB4JRBk = await WOLF99dj4Q.transferownership.call(addressT0YMuLL, {from: accounts[0]});
		const boolWTdqNVT = await WOLF99dj4Q.transferownership.call(addressZVDgI8L, {from: accounts[0]});

		await expect(WOLF99dj4Q.transferownership.call(addressT0YMuLL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringqGXHZMf = "me3EbPKjjyyu3W4CQ07mInaiWROU9g8FYrx3ckgs5kgsNG7Esiwywi8KzcjOXMLnL9xtrtXd5APJOCAm6"
		const stringf69YgbJ = "y2CFyN2031yIbsTHXlPkmpi3vbw1jhc9syb6mvEIa5gO5szBVveb3MPAeSaPVvtQKHugGUgyb5ik6"
		const uintISbCetA = BigInt("136")
		const WOLFXpmYkz = await WOLF.new(stringqGXHZMf, stringf69YgbJ, uintISbCetA, {from: accounts[0]});
		const uinti4w1SL = BigInt("1302")
		const addressczLtE8B = accounts[2]
		const uintRdLJQeQ = BigInt("1842")
		const addressDgxK2bl = "0x0000000000000000000000000000000000000001"
		const addressdDbcAzk = accounts[1]
		const addressaMDyBCh = accounts[3]
		const booltyt7grt = await WOLFXpmYkz.approve.call(addressczLtE8B, uinti4w1SL, {from: accounts[0]});
		const boolD2oa9t0 = await WOLFXpmYkz.approveAndCall.call(addressDgxK2bl, uintRdLJQeQ, {from: accounts[1]});
		const boolLOpBhPs = await WOLFXpmYkz.transferownership.call(addressdDbcAzk, {from: accounts[2]});
		const booltKA8Z4B = await WOLFXpmYkz.transferownership.call(addressaMDyBCh, {from: accounts[2]});

		assert.equal(booltyt7grt, true)
		await expect(WOLFXpmYkz.approveAndCall.call(addressDgxK2bl, uintRdLJQeQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringLC2MNLz = "RK4OmTsKLbTgvbdz0mU1X6SCg3ea"
		const stringiSIl6m = "TqMWEwDSyDcU7UHdMpXOm6SEBxKJU37Igp5WzNN2yi6vDjifbJOn1u1AKtC5N"
		const uint25CfpN = BigInt("370")
		const WOLFsVFAqJx = await WOLF.new(stringLC2MNLz, stringiSIl6m, uint25CfpN, {from: accounts[3]});
		const uintZmsEy7 = BigInt("1814")
		const addressgkize3h = accounts[1]
		const uintAC0zOtk = BigInt("1576")
		const addressjZwjgV = accounts[1]
		const uintJSjFemY = BigInt("1194")
		const addressk7f9qnw = accounts[4]
		const uinthoiBZDb = BigInt("14")
		const addressX1IZOl = accounts[1]
		const booltPjnEqs = await WOLFsVFAqJx.approveAndCall.call(addressgkize3h, uintZmsEy7, {from: accounts[3]});
		const boolvgbnUcv = await WOLFsVFAqJx.transfer.call(addressjZwjgV, uintAC0zOtk, {from: accounts[3]});
		const bool6tS1g6 = await WOLFsVFAqJx.approveAndCall.call(addressk7f9qnw, uintJSjFemY, {from: accounts[4]});
		const boolUmv4YH = await WOLFsVFAqJx.approveAndCall.call(addressX1IZOl, uinthoiBZDb, {from: accounts[2]});

		assert.equal(booltPjnEqs, true)
		assert.equal(boolvgbnUcv, true)
		await expect(WOLFsVFAqJx.approveAndCall.call(addressk7f9qnw, uintJSjFemY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringLC2MNLz = "RK4OmTsKLbTgvbdz0mU1X6SCg3ea"
		const stringiSIl6m = "TqMWEwDSyDcU7UHdMpXOm6SEBxKJU37Igp5WzNN2yi6vDjifbJOn1u1AKtC5N"
		const uintXl7sKLA = BigInt("370")
		const WOLFsVFAqJx = await WOLF.new(stringLC2MNLz, stringiSIl6m, uintXl7sKLA, {from: accounts[3]});
		const uintihVSOvw = BigInt("1385")
		const addressAslvhBJ = accounts[2]
		const uintwOSQa5E = BigInt("781")
		const addressNcuJ10c = "0x0000000000000000000000000000000000000001"
		const uintK8Kd7Nr = BigInt("0")
		const addressx3abtTI = accounts[1]
		const boolbSmoqlT = await WOLFsVFAqJx.approve.call(addressAslvhBJ, uintihVSOvw, {from: accounts[3]});
		const boolKyMmRpR = await WOLFsVFAqJx.approve.call(addressNcuJ10c, uintwOSQa5E, {from: accounts[2]});
		const boolrHU7PkW = await WOLFsVFAqJx.transfer.call(addressx3abtTI, uintK8Kd7Nr, {from: accounts[3]});

		assert.equal(boolKyMmRpR, true)
		assert.equal(boolbSmoqlT, true)
		assert.equal(boolrHU7PkW, true)
	});

	it('test for WOLF', async () => {
		const stringLC2MNLz = "RK4OmTsKLbTgvbdz0mU1X6SCg3ea"
		const stringiSIl6m = "TqMWEwDSyDcU7UHdMpXOm6SEBxKJU37Igp5WzNN2yi6vDjifbJOn1u1AKtC5N"
		const uintiQNvIR2 = BigInt("370")
		const WOLFsVFAqJx = await WOLF.new(stringLC2MNLz, stringiSIl6m, uintiQNvIR2, {from: accounts[3]});
		const uintPOnlJQW = BigInt("0")
		const addressvCMe2gy = accounts[1]
		const uintR7Fng5u = BigInt("875")
		const addressLwmuNEU = accounts[1]
		const booltPjnEqs = await WOLFsVFAqJx.approveAndCall.call(addressvCMe2gy, uintPOnlJQW, {from: accounts[3]});
		const boolWrmIr0N = await WOLFsVFAqJx.transfer.call(addressLwmuNEU, uintR7Fng5u, {from: accounts[0]});

		assert.equal(booltPjnEqs, true)
		await expect(WOLFsVFAqJx.transfer.call(addressLwmuNEU, uintR7Fng5u, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})