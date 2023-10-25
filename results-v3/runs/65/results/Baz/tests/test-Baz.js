const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazJyoqLQL = await Baz.new({from: accounts[2]});
		const intZJfku4N = BigInt("-1175")
		const intRN5G5t = BigInt("2000")
		const intBomSDz5 = BigInt("-377")
		const int6d5VY1 = BigInt("-800")
		const intQlnM8z = BigInt("1292")
		const intlxuf14f = BigInt("-497")
		const int256nT5Wteu = await BazJyoqLQL.baz.call(intBomSDz5, intRN5G5t, intZJfku4N, {from: "0x0000000000000000000000000000000000000001"});
		const boolma48Dmf = await BazJyoqLQL.echidna_all_states.call({from: accounts[4]});
		const int256byQmj45 = await BazJyoqLQL.baz.call(intlxuf14f, intQlnM8z, int6d5VY1, {from: accounts[0]});
		const boolmgHAXrx = await BazJyoqLQL.echidna_all_states.call({from: accounts[3]});

		assert.equal(boolma48Dmf, true)
		assert.equal(boolmgHAXrx, true)
		assert.equal(int256byQmj45, BigInt("4"))
		assert.equal(int256nT5Wteu, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazsxdqyTF = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intZA9bmK = BigInt("1986")
		const intf5AfUoq = BigInt("-1876")
		const intCOjvOqV = BigInt("675")
		const intvhhpAzG = BigInt("828")
		const intGo9m1zI = BigInt("-674")
		const intPJP7si = BigInt("1643")
		const intioOPIVh = BigInt("-853")
		const intLhK4I6I = BigInt("1550")
		const intvoc1ffY = BigInt("-189")
		const int256AumqS98 = await BazsxdqyTF.baz.call(intCOjvOqV, intf5AfUoq, intZA9bmK, {from: accounts[1]});
		const int256sX9AQCl = await BazsxdqyTF.baz.call(intPJP7si, intGo9m1zI, intvhhpAzG, {from: accounts[5]});
		const int2569LRipA = await BazsxdqyTF.baz.call(intvoc1ffY, intLhK4I6I, intioOPIVh, {from: accounts[1]});
		const booldt8Vov = await BazsxdqyTF.echidna_all_states.call({from: accounts[3]});
	});

	it('test for Baz', async () => {
		const BazONZw0FA = await Baz.new({from: accounts[2]});
		const intOC2OuVI = BigInt("1")
		const intM60tmp = BigInt("525")
		const intT0IUsw = BigInt("-1062")
		const inthY9Xdq7 = BigInt("256")
		const intPXyDVQn = BigInt("-1139")
		const intxpQ1DsO = BigInt("1139")
		const intQbq5SB0 = BigInt("614")
		const into4OeLt3 = BigInt("-905")
		const intYR5c6J = BigInt("1616")
		const intGHUR08q = BigInt("-1884")
		const intUVhsFdF = BigInt("-89")
		const intyXZLsW = BigInt("655")
		const int256HEPedKm = await BazONZw0FA.baz.call(intT0IUsw, intM60tmp, intOC2OuVI, {from: accounts[4]});
		const booliO8AQZq = await BazONZw0FA.echidna_all_states.call({from: accounts[3]});
		const int256rHEAFh7 = await BazONZw0FA.baz.call(intxpQ1DsO, intPXyDVQn, inthY9Xdq7, {from: accounts[1]});
		const int256Jum1hWj = await BazONZw0FA.baz.call(intYR5c6J, into4OeLt3, intQbq5SB0, {from: accounts[2]});
		const int256CL64inj = await BazONZw0FA.baz.call(intyXZLsW, intUVhsFdF, intGHUR08q, {from: accounts[2]});

		assert.equal(booliO8AQZq, true)
		assert.equal(int256CL64inj, BigInt("1"))
		assert.equal(int256HEPedKm, BigInt("4"))
		assert.equal(int256Jum1hWj, BigInt("1"))
		assert.equal(int256rHEAFh7, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazjffFayl = await Baz.new({from: accounts[0]});
		const intUsl4ZFA = BigInt("-700")
		const intOTYaE3Y = BigInt("2046")
		const intRis5Vp4 = BigInt("-488")
		const intUOYrAWY = BigInt("856")
		const intO8tESB = BigInt("1653")
		const inteDTBP2r = BigInt("-501")
		const booluolZHgk = await BazjffFayl.echidna_all_states.call({from: accounts[3]});
		const boolFkR7bY = await BazjffFayl.echidna_all_states.call({from: accounts[1]});
		const int256mX47lkQ = await BazjffFayl.baz.call(intRis5Vp4, intOTYaE3Y, intUsl4ZFA, {from: "0x0000000000000000000000000000000000000001"});
		const boolLXlbIN4 = await BazjffFayl.echidna_all_states.call({from: accounts[5]});
		const boolKEhtiIw = await BazjffFayl.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256gJZnBDA = await BazjffFayl.baz.call(inteDTBP2r, intO8tESB, intUOYrAWY, {from: accounts[5]});

		assert.equal(boolFkR7bY, true)
		assert.equal(boolKEhtiIw, true)
		assert.equal(boolLXlbIN4, true)
		assert.equal(booluolZHgk, true)
		assert.equal(int256gJZnBDA, BigInt("5"))
		assert.equal(int256mX47lkQ, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BaznKLyK5 = await Baz.new({from: accounts[2]});
		const intrzoWsYL = BigInt("-1358")
		const intqpJRrnw = BigInt("910")
		const intTDR56cN = BigInt("1157")
		const boolKcIuV9u = await BaznKLyK5.echidna_all_states.call({from: accounts[4]});
		const int256eAdES42 = await BaznKLyK5.baz.call(intTDR56cN, intqpJRrnw, intrzoWsYL, {from: accounts[2]});
		const boolDnrNRq = await BaznKLyK5.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolDnrNRq, true)
		assert.equal(boolKcIuV9u, true)
		assert.equal(int256eAdES42, BigInt("3"))
	});

	it('test for Baz', async () => {
		const BaznKLyK5 = await Baz.new({from: accounts[2]});
		const intzKBTJjD = BigInt("-1673")
		const intpctuX58 = BigInt("1117")
		const intr8h0y2g = BigInt("42")
		const int256xhjasRD = await BaznKLyK5.baz.call(intr8h0y2g, intpctuX58, intzKBTJjD, {from: accounts[1]});
		const boolfOZhRek = await BaznKLyK5.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolfOZhRek, true)
		assert.equal(int256xhjasRD, BigInt("2"))
	});
})