const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazX7CjY2t = await Baz.new({from: accounts[3]});
		const intYvg9GF9 = BigInt("1038")
		const inta3h4DAr = BigInt("943")
		const intCT302tF = BigInt("776")
		const intyooV1z6 = BigInt("-1734")
		const intHX2Is5J = BigInt("1266")
		const intHNCkYo1 = BigInt("1501")
		const intNu0OMpB = BigInt("-1186")
		const intfZJqOSR = BigInt("-1024")
		const intetixaEZ = BigInt("-1854")
		const int256Tq5aJz6 = await BazX7CjY2t.baz.call(intCT302tF, inta3h4DAr, intYvg9GF9, {from: accounts[1]});
		const boolIeGFiDa = await BazX7CjY2t.echidna_all_states.call({from: accounts[3]});
		const boolZgksa9E = await BazX7CjY2t.echidna_all_states.call({from: accounts[3]});
		const int256dvqX83T = await BazX7CjY2t.baz.call(intHNCkYo1, intHX2Is5J, intyooV1z6, {from: accounts[2]});
		const int256uvJ1u6o = await BazX7CjY2t.baz.call(intetixaEZ, intfZJqOSR, intNu0OMpB, {from: accounts[5]});

		assert.equal(boolIeGFiDa, true)
		assert.equal(boolZgksa9E, true)
		assert.equal(int256Tq5aJz6, BigInt("5"))
		assert.equal(int256dvqX83T, BigInt("3"))
		assert.equal(int256uvJ1u6o, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazdqxAwr2 = await Baz.new({from: accounts[0]});
		const intl7ZVxHj = BigInt("-1964")
		const intuDaTF5b = BigInt("-1715")
		const intEkK4U6I = BigInt("1529")
		const intGiCVkPD = BigInt("-1608")
		const intyIHN74 = BigInt("1771")
		const intPlh1ET7 = BigInt("1044")
		const int256qXxXLKM = await BazdqxAwr2.baz.call(intEkK4U6I, intuDaTF5b, intl7ZVxHj, {from: accounts[3]});
		const int256YPFHO5V = await BazdqxAwr2.baz.call(intPlh1ET7, intyIHN74, intGiCVkPD, {from: accounts[2]});

		assert.equal(int256YPFHO5V, BigInt("4"))
		assert.equal(int256qXxXLKM, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazHEZhQj0 = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intBZqO37O = BigInt("175")
		const intZEqHEAl = BigInt("450")
		const intwkDxgXG = BigInt("1586")
		const intQPeMdsv = BigInt("-590")
		const intUczt6Vj = BigInt("1558")
		const intFMAQOYi = BigInt("1287")
		const int256L3lS6F6 = await BazHEZhQj0.baz.call(intwkDxgXG, intZEqHEAl, intBZqO37O, {from: accounts[4]});
		const int256ixMq4cv = await BazHEZhQj0.baz.call(intFMAQOYi, intUczt6Vj, intQPeMdsv, {from: accounts[0]});
		const boolnhi3WRh = await BazHEZhQj0.echidna_all_states.call({from: accounts[5]});
	});

	it('test for Baz', async () => {
		const BazbQKFBVl = await Baz.new({from: accounts[4]});
		const intRJDeyQl = BigInt("-350")
		const ints6DzljH = BigInt("106")
		const intwMhdok = BigInt("42")
		const boolo8OQP6y = await BazbQKFBVl.echidna_all_states.call({from: accounts[2]});
		const int256QWElDtR = await BazbQKFBVl.baz.call(intwMhdok, ints6DzljH, intRJDeyQl, {from: accounts[2]});
		const boolt5GH1bN = await BazbQKFBVl.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolo8OQP6y, true)
		assert.equal(boolt5GH1bN, true)
		assert.equal(int256QWElDtR, BigInt("2"))
	});
})