const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const Bazg2QR44q = await Baz.new({from: accounts[5]});
		const intx1uXtI6 = BigInt("1369")
		const intnHWQ9l9 = BigInt("-1902")
		const intELHlZVo = BigInt("-995")
		const intvEoLojl = BigInt("1940")
		const intQRanoAb = BigInt("289")
		const intqBV856N = BigInt("1563")
		const intWRePMVn = BigInt("-44")
		const intglBAuqi = BigInt("528")
		const intTqKQXVI = BigInt("533")
		const boolYQZvBVO = await Bazg2QR44q.echidna_all_states.call({from: accounts[0]});
		const int256KRPwSgf = await Bazg2QR44q.baz.call(intELHlZVo, intnHWQ9l9, intx1uXtI6, {from: "0x0000000000000000000000000000000000000001"});
		const boolBKmjrh2 = await Bazg2QR44q.echidna_all_states.call({from: accounts[2]});
		const int256oCebHvL = await Bazg2QR44q.baz.call(intqBV856N, intQRanoAb, intvEoLojl, {from: accounts[2]});
		const int256j4wu3Wa = await Bazg2QR44q.baz.call(intTqKQXVI, intglBAuqi, intWRePMVn, {from: accounts[4]});

		assert.equal(boolBKmjrh2, true)
		assert.equal(boolYQZvBVO, true)
		assert.equal(int256KRPwSgf, BigInt("1"))
		assert.equal(int256j4wu3Wa, BigInt("4"))
		assert.equal(int256oCebHvL, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BaznGuwUOc = await Baz.new({from: accounts[3]});
		const intBE2ZdWq = BigInt("-1860")
		const intcJZKWDE = BigInt("1426")
		const intlF5pRgW = BigInt("-1862")
		const boolp151eRJ = await BaznGuwUOc.echidna_all_states.call({from: accounts[4]});
		const int256iy2LHzw = await BaznGuwUOc.baz.call(intlF5pRgW, intcJZKWDE, intBE2ZdWq, {from: accounts[0]});
		const boolkkuqJka = await BaznGuwUOc.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolkkuqJka, true)
		assert.equal(boolp151eRJ, true)
		assert.equal(int256iy2LHzw, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazJLnvtD7 = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const boolPaWR5D = await BazJLnvtD7.echidna_all_states.call({from: accounts[2]});
		const boolpFXrYA = await BazJLnvtD7.echidna_all_states.call({from: accounts[3]});
		const boolNTTfAzJ = await BazJLnvtD7.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhQDOjm = await BazJLnvtD7.echidna_all_states.call({from: accounts[1]});
		const boolEQQRX0m = await BazJLnvtD7.echidna_all_states.call({from: accounts[2]});
	});

	it('test for Baz', async () => {
		const BazXDtyIsx = await Baz.new({from: accounts[1]});
		const int1iJilx = BigInt("-443")
		const intyKUIRUr = BigInt("-815")
		const int9l8btV = BigInt("1155")
		const intN1CmNXO = BigInt("-1904")
		const intfNgfYG4 = BigInt("611")
		const inthqhylv3 = BigInt("-1456")
		const intZLF2p5V = BigInt("-1866")
		const intgG7f67h = BigInt("769")
		const inty9op6wT = BigInt("42")
		const int256Da1HVif = await BazXDtyIsx.baz.call(int9l8btV, intyKUIRUr, int1iJilx, {from: accounts[5]});
		const int256xeYLEZ = await BazXDtyIsx.baz.call(inthqhylv3, intfNgfYG4, intN1CmNXO, {from: "0x0000000000000000000000000000000000000001"});
		const int256qk8BHRA = await BazXDtyIsx.baz.call(inty9op6wT, intgG7f67h, intZLF2p5V, {from: accounts[0]});
		const boolfaYd1x8 = await BazXDtyIsx.echidna_all_states.call({from: accounts[5]});

		assert.equal(boolfaYd1x8, true)
		assert.equal(int256Da1HVif, BigInt("1"))
		assert.equal(int256qk8BHRA, BigInt("2"))
		assert.equal(int256xeYLEZ, BigInt("3"))
	});
})