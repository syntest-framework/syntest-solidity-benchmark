const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintAyJOmpx = BigInt("337")
		const BancorV2_ZapIn_General_V1_1dUp9XYn = await BancorV2_ZapIn_General_V1_1.new(uintAyJOmpx, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1dUp9XYn.renounceOwnership.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1dUp9XYn.renounceOwnership.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1dUp9XYn.renounceOwnership.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1dUp9XYn.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintjBC6mp = BigInt("477")
		const BancorV2_ZapIn_General_V1_1EhvzmaO = await BancorV2_ZapIn_General_V1_1.new(uintjBC6mp, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1EhvzmaO.onlyOwner.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1EhvzmaO.onlyOwner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1EhvzmaO.onlyOwner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1EhvzmaO.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintg3GaVI = BigInt("1300")
		const BancorV2_ZapIn_General_V1_1FenAHrG = await BancorV2_ZapIn_General_V1_1.new(uintg3GaVI, {from: "0x0000000000000000000000000000000000000001"});
		const uintXF0P9yv = BigInt("984")
		await BancorV2_ZapIn_General_V1_1FenAHrG.renounceOwnership.call({from: accounts[4]});
		const uint16KE2kF1s = await BancorV2_ZapIn_General_V1_1FenAHrG.set_new_goodwill.call(uintXF0P9yv, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1FenAHrG.withdraw.call({from: accounts[4]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintTj0hmKq = BigInt("1022")
		const BancorV2_ZapIn_General_V1_1ys36fE6 = await BancorV2_ZapIn_General_V1_1.new(uintTj0hmKq, {from: accounts[3]});
		const addressn96oaYd = accounts[1]
//		const addresszwIQxTA = await BancorV2_ZapIn_General_V1_1ys36fE6.inCaseTokengetsStuck.call(addressn96oaYd, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1ys36fE6.onlyOwner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1ys36fE6.inCaseTokengetsStuck.call(addressn96oaYd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintM1HGB9o = BigInt("1151")
		const BancorV2_ZapIn_General_V1_1PZVTUt1 = await BancorV2_ZapIn_General_V1_1.new(uintM1HGB9o, {from: accounts[0]});
		const bytegZ5Zbw = "0x131d1d1b0a03101c0f1c081d0516190509000a1f191e08"
		const addressuVOCpfu = accounts[3]
		const addressq1nFNLT = accounts[1]
		const uintMxSWhow = BigInt("178")
		const uintlTHlql = BigInt("671")
		const addressqcyXdW4 = accounts[4]
		const addresskIk3cef = accounts[3]
		const addressz9ratLv = accounts[3]
		const addressEfqjVdI = accounts[2]
		const addressaAy10cj = accounts[0]
//		const uint256G2JN6Z2 = await BancorV2_ZapIn_General_V1_1PZVTUt1.ZapInSingleSided.call(addressz9ratLv, addresskIk3cef, addressqcyXdW4, uintlTHlql, uintMxSWhow, addressq1nFNLT, addressuVOCpfu, bytegZ5Zbw, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1PZVTUt1.withdraw.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1PZVTUt1.nonReentrant.call({from: accounts[4]});
//		const addressBrcJDe1 = await BancorV2_ZapIn_General_V1_1PZVTUt1.toPayable.call(addressEfqjVdI, {from: accounts[4]});
//		const addressJr66nDj = await BancorV2_ZapIn_General_V1_1PZVTUt1.inCaseTokengetsStuck.call(addressaAy10cj, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1PZVTUt1.ZapInSingleSided.call(addressz9ratLv, addresskIk3cef, addressqcyXdW4, uintlTHlql, uintMxSWhow, addressq1nFNLT, addressuVOCpfu, bytegZ5Zbw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintMnBgwVj = BigInt("846")
		const BancorV2_ZapIn_General_V1_1ik7l7eg = await BancorV2_ZapIn_General_V1_1.new(uintMnBgwVj, {from: accounts[1]});
		const addressxt3tKwO = await BancorV2_ZapIn_General_V1_1ik7l7eg.owner.call({from: accounts[1]});
		const addresspvVpEap = await BancorV2_ZapIn_General_V1_1ik7l7eg.owner.call({from: accounts[2]});

		assert.equal(addresspvVpEap, 0x6393fD3584f7b1411303699e54b8f2B5A55E828F)
		assert.equal(addressxt3tKwO, 0x6393fD3584f7b1411303699e54b8f2B5A55E828F)
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintTmFeT0O = BigInt("1022")
		const BancorV2_ZapIn_General_V1_1ys36fE6 = await BancorV2_ZapIn_General_V1_1.new(uintTmFeT0O, {from: accounts[3]});
		const addresscOyC5cS = accounts[2]
		const boolG52s3Fw = await BancorV2_ZapIn_General_V1_1ys36fE6.isOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1ys36fE6.toggleContractActive.call({from: accounts[3]});
//		const addresszwIQxTA = await BancorV2_ZapIn_General_V1_1ys36fE6.inCaseTokengetsStuck.call(addresscOyC5cS, {from: accounts[3]});

		assert.equal(boolG52s3Fw, true)
		await expect(BancorV2_ZapIn_General_V1_1ys36fE6.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintQHTzfig = BigInt("1022")
		const BancorV2_ZapIn_General_V1_1ys36fE6 = await BancorV2_ZapIn_General_V1_1.new(uintQHTzfig, {from: accounts[3]});
		const addresscsLTXes = accounts[1]
		const addressRNrC0Hb = accounts[1]
		const addressACoplA = await BancorV2_ZapIn_General_V1_1ys36fE6.transferOwnership.call(addresscsLTXes, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1ys36fE6.withdraw.call({from: accounts[1]});
//		const addresszwIQxTA = await BancorV2_ZapIn_General_V1_1ys36fE6.inCaseTokengetsStuck.call(addressRNrC0Hb, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1ys36fE6.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintO4f9n2Q = BigInt("1590")
		const BancorV2_ZapIn_General_V1_1A6P9y1X = await BancorV2_ZapIn_General_V1_1.new(uintO4f9n2Q, {from: accounts[0]});
		const addressAL4SDhc = accounts[1]
//		await BancorV2_ZapIn_General_V1_1A6P9y1X.renounceOwnership.call({from: accounts[0]});
//		const addressr7m49gh = await BancorV2_ZapIn_General_V1_1A6P9y1X.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1A6P9y1X.renounceOwnership.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1A6P9y1X.stopInEmergency.call({from: accounts[5]});
//		const addressbIcdmEp = await BancorV2_ZapIn_General_V1_1A6P9y1X.inCaseTokengetsStuck.call(addressAL4SDhc, {from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1A6P9y1X.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinthU0kWfr = BigInt("1022")
		const BancorV2_ZapIn_General_V1_1ys36fE6 = await BancorV2_ZapIn_General_V1_1.new(uinthU0kWfr, {from: accounts[3]});
		const uintPcfqQBE = BigInt("1429")
		const addressVAalRO = accounts[2]
		const uint16wMPhOga = await BancorV2_ZapIn_General_V1_1ys36fE6.set_new_goodwill.call(uintPcfqQBE, {from: accounts[3]});
//		const addresszwIQxTA = await BancorV2_ZapIn_General_V1_1ys36fE6.inCaseTokengetsStuck.call(addressVAalRO, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1ys36fE6.inCaseTokengetsStuck.call(addressVAalRO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintdYnEmLr = BigInt("1022")
		const BancorV2_ZapIn_General_V1_1ys36fE6 = await BancorV2_ZapIn_General_V1_1.new(uintdYnEmLr, {from: accounts[3]});
		const addressgdJafV = accounts[2]
//		await BancorV2_ZapIn_General_V1_1ys36fE6.withdraw.call({from: accounts[3]});
//		const addresszwIQxTA = await BancorV2_ZapIn_General_V1_1ys36fE6.inCaseTokengetsStuck.call(addressgdJafV, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1ys36fE6.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})