const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazN3n6Nn = await Baz.new({from: accounts[0]});
		const intazCyESa = BigInt("1012")
		const intKi7J7Ku = BigInt("-1782")
		const intxRge5WR = BigInt("770")
		const int256BR1puj3 = await BazN3n6Nn.baz.call(intxRge5WR, intKi7J7Ku, intazCyESa, {from: accounts[5]});
		const boolPKp0VQh = await BazN3n6Nn.echidna_all_states.call({from: accounts[4]});
		const boolpBEZdDK = await BazN3n6Nn.echidna_all_states.call({from: accounts[5]});
		const booloqCSgrQ = await BazN3n6Nn.echidna_all_states.call({from: accounts[5]});

		assert.equal(boolPKp0VQh, true)
		assert.equal(booloqCSgrQ, true)
		assert.equal(boolpBEZdDK, true)
		assert.equal(int256BR1puj3, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazQMqNYZr = await Baz.new({from: accounts[3]});
		const intvTjmWMd = BigInt("841")
		const intFz88hh0 = BigInt("-398")
		const intMuhkKAy = BigInt("1274")
		const intEvTiuG4 = BigInt("516")
		const inttGc46Al = BigInt("-1765")
		const intWHinBeD = BigInt("-1155")
		const intUFJnkWO = BigInt("-38")
		const intnTQJ1H4 = BigInt("-1595")
		const intEzhTLs1 = BigInt("1190")
		const boolQODdMHw = await BazQMqNYZr.echidna_all_states.call({from: accounts[3]});
		const int256C4Yusff = await BazQMqNYZr.baz.call(intMuhkKAy, intFz88hh0, intvTjmWMd, {from: accounts[2]});
		const int2563Ut5l5 = await BazQMqNYZr.baz.call(intWHinBeD, inttGc46Al, intEvTiuG4, {from: accounts[1]});
		const int256M5hQJpA = await BazQMqNYZr.baz.call(intEzhTLs1, intnTQJ1H4, intUFJnkWO, {from: accounts[3]});

		assert.equal(boolQODdMHw, true)
		assert.equal(int2563Ut5l5, BigInt("1"))
		assert.equal(int256C4Yusff, BigInt("5"))
		assert.equal(int256M5hQJpA, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazlOkQODu = await Baz.new({from: accounts[3]});
		const intyaZztLM = BigInt("-1451")
		const intWKA37a = BigInt("685")
		const intJxPwedd = BigInt("805")
		const int256ShxFlIG = await BazlOkQODu.baz.call(intJxPwedd, intWKA37a, intyaZztLM, {from: accounts[2]});
		const boolXOPlL6a = await BazlOkQODu.echidna_all_states.call({from: accounts[0]});
		const boolEO5amuf = await BazlOkQODu.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolEO5amuf, true)
		assert.equal(boolXOPlL6a, true)
		assert.equal(int256ShxFlIG, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BazBraX932 = await Baz.new({from: accounts[3]});
		const inttxYyIFu = BigInt("-883")
		const inthVZwHf = BigInt("-1932")
		const intb1DyHi = BigInt("-742")
		const intufyonuj = BigInt("-181")
		const intxFfmLGi = BigInt("1025")
		const intC95qoEh = BigInt("1122")
		const int256uUJRfhg = await BazBraX932.baz.call(intb1DyHi, inthVZwHf, inttxYyIFu, {from: accounts[3]});
		const booliAzNHZu = await BazBraX932.echidna_all_states.call({from: accounts[4]});
		const boolzaCB2t = await BazBraX932.echidna_all_states.call({from: accounts[0]});
		const boolcjWJ1Z2 = await BazBraX932.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256UBel1Zv = await BazBraX932.baz.call(intC95qoEh, intxFfmLGi, intufyonuj, {from: accounts[5]});

		assert.equal(boolcjWJ1Z2, true)
		assert.equal(booliAzNHZu, true)
		assert.equal(boolzaCB2t, true)
		assert.equal(int256UBel1Zv, BigInt("4"))
		assert.equal(int256uUJRfhg, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazB4oZrpQ = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intzCuuNvK = BigInt("1218")
		const intgufJv3l = BigInt("-314")
		const intl9GhG8E = BigInt("-1718")
		const intDZ42DLS = BigInt("-1236")
		const intRGanmrF = BigInt("-131")
		const intvggNAOm = BigInt("-1623")
		const int256sgmjdmc = await BazB4oZrpQ.baz.call(intl9GhG8E, intgufJv3l, intzCuuNvK, {from: accounts[5]});
		const booltBZiK1I = await BazB4oZrpQ.echidna_all_states.call({from: accounts[2]});
		const int256rw8Bpr = await BazB4oZrpQ.baz.call(intvggNAOm, intRGanmrF, intDZ42DLS, {from: accounts[1]});
		const bools2TSvF8 = await BazB4oZrpQ.echidna_all_states.call({from: accounts[3]});
	});
})