const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazNNN9m0D = await Baz.new({from: accounts[1]});
		const intnab2tL3 = BigInt("983")
		const intXEwWkim = BigInt("-918")
		const intomObIBM = BigInt("590")
		const int256f2Dyixw = await BazNNN9m0D.baz.call(intomObIBM, intXEwWkim, intnab2tL3, {from: accounts[2]});
		const boolygxqgZm = await BazNNN9m0D.echidna_all_states.call({from: accounts[3]});

		assert.equal(boolygxqgZm, true)
		assert.equal(int256f2Dyixw, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazbcbTQ2 = await Baz.new({from: accounts[0]});
		const inteh2xH46 = BigInt("-1954")
		const intQ5sLF5V = BigInt("-281")
		const intDkewYTs = BigInt("594")
		const intIm0lvKW = BigInt("-1344")
		const intXMLp6Gg = BigInt("-701")
		const intLXjpOzc = BigInt("-1818")
		const int256UEUMnYg = await BazbcbTQ2.baz.call(intDkewYTs, intQ5sLF5V, inteh2xH46, {from: accounts[1]});
		const int256Zv2npG9 = await BazbcbTQ2.baz.call(intLXjpOzc, intXMLp6Gg, intIm0lvKW, {from: accounts[2]});
		const boolMGeMrav = await BazbcbTQ2.echidna_all_states.call({from: accounts[3]});
		const boola6lyaQ0 = await BazbcbTQ2.echidna_all_states.call({from: accounts[2]});
		const boolTygGDze = await BazbcbTQ2.echidna_all_states.call({from: accounts[2]});

		assert.equal(boolMGeMrav, true)
		assert.equal(boolTygGDze, true)
		assert.equal(boola6lyaQ0, true)
		assert.equal(int256UEUMnYg, BigInt("1"))
		assert.equal(int256Zv2npG9, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazpZwNkGJ = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intoqAMdji = BigInt("-1203")
		const intxYoBg25 = BigInt("-1437")
		const intw4fT58w = BigInt("-1533")
		const boolDd4MFWE = await BazpZwNkGJ.echidna_all_states.call({from: accounts[1]});
		const int256GVZDGsX = await BazpZwNkGJ.baz.call(intw4fT58w, intxYoBg25, intoqAMdji, {from: accounts[2]});
		const boollrvw9M = await BazpZwNkGJ.echidna_all_states.call({from: accounts[5]});
		const boolPNovYX = await BazpZwNkGJ.echidna_all_states.call({from: accounts[3]});
		const boolnDatmhd = await BazpZwNkGJ.echidna_all_states.call({from: accounts[0]});
	});

	it('test for Baz', async () => {
		const BazBlk3c0 = await Baz.new({from: accounts[3]});
		const intnPAijNn = BigInt("-358")
		const intuBuUpeI = BigInt("842")
		const intESpb9tM = BigInt("-650")
		const intqfqkU7 = BigInt("158")
		const intWOj9Ykl = BigInt("-174")
		const intDdOoDH9 = BigInt("165")
		const intwZ1iUGy = BigInt("-1886")
		const intc74LDYD = BigInt("1764")
		const intNU6VLZr = BigInt("661")
		const intdNeolnY = BigInt("836")
		const intZh5V9L4 = BigInt("270")
		const intBmDAzLr = BigInt("-511")
		const int256awH3ErZ = await BazBlk3c0.baz.call(intESpb9tM, intuBuUpeI, intnPAijNn, {from: accounts[5]});
		const int256imGD6y9 = await BazBlk3c0.baz.call(intDdOoDH9, intWOj9Ykl, intqfqkU7, {from: accounts[4]});
		const int256iBLN7hj = await BazBlk3c0.baz.call(intNU6VLZr, intc74LDYD, intwZ1iUGy, {from: accounts[5]});
		const int256esX3KM = await BazBlk3c0.baz.call(intBmDAzLr, intZh5V9L4, intdNeolnY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(int256awH3ErZ, BigInt("4"))
		assert.equal(int256esX3KM, BigInt("5"))
		assert.equal(int256iBLN7hj, BigInt("3"))
		assert.equal(int256imGD6y9, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazykbcBh = await Baz.new({from: accounts[0]});
		const intH1cbN6z = BigInt("-1125")
		const intQOnela = BigInt("-189")
		const inthRO7vP4 = BigInt("1290")
		const intvAJaDlV = BigInt("-953")
		const intARpw1va = BigInt("281")
		const intacmahLw = BigInt("42")
		const int256crrCqD9 = await BazykbcBh.baz.call(inthRO7vP4, intQOnela, intH1cbN6z, {from: accounts[5]});
		const int256IX9RVlB = await BazykbcBh.baz.call(intacmahLw, intARpw1va, intvAJaDlV, {from: accounts[3]});

		assert.equal(int256IX9RVlB, BigInt("2"))
		assert.equal(int256crrCqD9, BigInt("1"))
	});
})