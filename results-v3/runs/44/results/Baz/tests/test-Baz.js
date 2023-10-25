const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazsNeNuXn = await Baz.new({from: accounts[1]});
		const intu07Crf4 = BigInt("-774")
		const intUo7iiHy = BigInt("1470")
		const intZreTLvs = BigInt("1235")
		const intjrkTGG = BigInt("-1274")
		const intQXW93n7 = BigInt("751")
		const intaj8eMfk = BigInt("1549")
		const intosH25FP = BigInt("-1485")
		const intbUVoxa = BigInt("-490")
		const inthPtCf22 = BigInt("-787")
		const intyFe5lQP = BigInt("-1414")
		const intqA6FNRm = BigInt("19")
		const intCXpbrZj = BigInt("-1787")
		const int256KtmcZsc = await BazsNeNuXn.baz.call(intZreTLvs, intUo7iiHy, intu07Crf4, {from: accounts[4]});
		const boolUeYOo01 = await BazsNeNuXn.echidna_all_states.call({from: accounts[5]});
		const int256Ma2iGK5 = await BazsNeNuXn.baz.call(intaj8eMfk, intQXW93n7, intjrkTGG, {from: accounts[4]});
		const int256Tx4CHvM = await BazsNeNuXn.baz.call(inthPtCf22, intbUVoxa, intosH25FP, {from: accounts[0]});
		const int2563R7kQv = await BazsNeNuXn.baz.call(intCXpbrZj, intqA6FNRm, intyFe5lQP, {from: accounts[2]});

		assert.equal(boolUeYOo01, true)
		assert.equal(int2563R7kQv, BigInt("3"))
		assert.equal(int256KtmcZsc, BigInt("4"))
		assert.equal(int256Ma2iGK5, BigInt("3"))
		assert.equal(int256Tx4CHvM, BigInt("1"))
	});

	it('test for Baz', async () => {
		const Bazi4uLd9i = await Baz.new({from: accounts[2]});
		const intQl4EnG = BigInt("-1782")
		const intIAtkaEh = BigInt("700")
		const intBnRJZVA = BigInt("1829")
		const intMTeNedH = BigInt("2017")
		const intZuwwwE = BigInt("890")
		const intjk8YTR1 = BigInt("-790")
		const int256WVIInH6 = await Bazi4uLd9i.baz.call(intBnRJZVA, intIAtkaEh, intQl4EnG, {from: accounts[5]});
		const int256yDbucY = await Bazi4uLd9i.baz.call(intjk8YTR1, intZuwwwE, intMTeNedH, {from: accounts[1]});
		const boolyxEM5dm = await Bazi4uLd9i.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolyxEM5dm, true)
		assert.equal(int256WVIInH6, BigInt("3"))
		assert.equal(int256yDbucY, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazeyNMyP = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intg8QUhH1 = BigInt("-1707")
		const intAaxBhIV = BigInt("-1303")
		const intVNmOpX0 = BigInt("-1599")
		const intHhJB1P = BigInt("-629")
		const intzus2US0 = BigInt("-1361")
		const intHI5szs4 = BigInt("418")
		const int256xKlj0Dq = await BazeyNMyP.baz.call(intVNmOpX0, intAaxBhIV, intg8QUhH1, {from: "0x0000000000000000000000000000000000000001"});
		const int256NEeLWsB = await BazeyNMyP.baz.call(intHI5szs4, intzus2US0, intHhJB1P, {from: accounts[0]});
		const boolfuUe9YM = await BazeyNMyP.echidna_all_states.call({from: accounts[2]});
	});
})