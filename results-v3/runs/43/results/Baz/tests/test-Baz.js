const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazTBSo0M = await Baz.new({from: accounts[2]});
		const intKC6Emut = BigInt("1822")
		const intBArJMWw = BigInt("1524")
		const intHK6wZy = BigInt("-558")
		const boolyFyukn2 = await BazTBSo0M.echidna_all_states.call({from: accounts[0]});
		const boolb0rfk4h = await BazTBSo0M.echidna_all_states.call({from: accounts[2]});
		const int25683vQPU = await BazTBSo0M.baz.call(intHK6wZy, intBArJMWw, intKC6Emut, {from: accounts[0]});
		const boolRCBXFGu = await BazTBSo0M.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRCBXFGu, true)
		assert.equal(boolb0rfk4h, true)
		assert.equal(boolyFyukn2, true)
		assert.equal(int25683vQPU, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazkrWTBWQ = await Baz.new({from: accounts[3]});
		const inta76HYmi = BigInt("-65")
		const intjCiNmbe = BigInt("-1626")
		const inttgejIVk = BigInt("-821")
		const intsQHv58P = BigInt("148")
		const intcQwzExa = BigInt("827")
		const intsXRqW0i = BigInt("975")
		const intVTwp90K = BigInt("-28")
		const inth7dh2U8 = BigInt("-1542")
		const int5ri6yS = BigInt("-1388")
		const intdfBP6ti = BigInt("-1402")
		const intuhQLWsA = BigInt("-1624")
		const intmwIGFc = BigInt("-132")
		const int256CX1Aln1 = await BazkrWTBWQ.baz.call(inttgejIVk, intjCiNmbe, inta76HYmi, {from: accounts[2]});
		const int256EzCrner = await BazkrWTBWQ.baz.call(intsXRqW0i, intcQwzExa, intsQHv58P, {from: accounts[4]});
		const int256gIaAo98 = await BazkrWTBWQ.baz.call(int5ri6yS, inth7dh2U8, intVTwp90K, {from: "0x0000000000000000000000000000000000000001"});
		const int256cPl26XX = await BazkrWTBWQ.baz.call(intmwIGFc, intuhQLWsA, intdfBP6ti, {from: accounts[3]});
		const boolseCcSFD = await BazkrWTBWQ.echidna_all_states.call({from: accounts[3]});
		const boolW4m3Ay = await BazkrWTBWQ.echidna_all_states.call({from: accounts[1]});

		assert.equal(boolW4m3Ay, true)
		assert.equal(boolseCcSFD, true)
		assert.equal(int256CX1Aln1, BigInt("1"))
		assert.equal(int256EzCrner, BigInt("5"))
		assert.equal(int256cPl26XX, BigInt("1"))
		assert.equal(int256gIaAo98, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazWp3fXrf = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intoBeYeTG = BigInt("698")
		const intSPEWMi = BigInt("722")
		const intDQ11A2u = BigInt("-258")
		const boolC5YYImj = await BazWp3fXrf.echidna_all_states.call({from: accounts[2]});
		const int256Qm3uPVL = await BazWp3fXrf.baz.call(intDQ11A2u, intSPEWMi, intoBeYeTG, {from: accounts[2]});
		const boolbLwoIcb = await BazWp3fXrf.echidna_all_states.call({from: accounts[3]});
		const boolCsmaWox = await BazWp3fXrf.echidna_all_states.call({from: accounts[3]});
	});

	it('test for Baz', async () => {
		const BazDG5rm6G = await Baz.new({from: accounts[0]});
		const intr80Wseh = BigInt("1307")
		const intKS8ZGW = BigInt("-454")
		const intib4b6uj = BigInt("490")
		const intW6JCg98 = BigInt("-1512")
		const inttdFQRYC = BigInt("-730")
		const intcFjqO9b = BigInt("-1324")
		const intZ6cAM7P = BigInt("-1274")
		const intUsnkXmc = BigInt("690")
		const intUNGbvg8 = BigInt("1570")
		const intbP48r7H = BigInt("1877")
		const intQ6w5QKr = BigInt("-231")
		const intKOlJzGX = BigInt("1640")
		const intU8In33T = BigInt("1503")
		const intQTy6bN = BigInt("828")
		const intnSYmZ94 = BigInt("-115")
		const int256p2zxpJu = await BazDG5rm6G.baz.call(intib4b6uj, intKS8ZGW, intr80Wseh, {from: accounts[4]});
		const boolSSY5zGc = await BazDG5rm6G.echidna_all_states.call({from: accounts[2]});
		const int256SmV1E26 = await BazDG5rm6G.baz.call(intcFjqO9b, inttdFQRYC, intW6JCg98, {from: accounts[4]});
		const int256sow6SMf = await BazDG5rm6G.baz.call(intUNGbvg8, intUsnkXmc, intZ6cAM7P, {from: accounts[2]});
		const int256akBBUz5 = await BazDG5rm6G.baz.call(intKOlJzGX, intQ6w5QKr, intbP48r7H, {from: accounts[0]});
		const boolRNPiyrV = await BazDG5rm6G.echidna_all_states.call({from: accounts[1]});
		const int256wPXL6U = await BazDG5rm6G.baz.call(intnSYmZ94, intQTy6bN, intU8In33T, {from: accounts[2]});

		assert.equal(boolRNPiyrV, true)
		assert.equal(boolSSY5zGc, true)
		assert.equal(int256SmV1E26, BigInt("1"))
		assert.equal(int256akBBUz5, BigInt("5"))
		assert.equal(int256p2zxpJu, BigInt("5"))
		assert.equal(int256sow6SMf, BigInt("3"))
		assert.equal(int256wPXL6U, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazFp8hAMo = await Baz.new({from: accounts[3]});
		const int7aowtn = BigInt("1404")
		const intmg5bKz = BigInt("-42")
		const intLt8ql6n = BigInt("651")
		const intTr5EG4Z = BigInt("-1301")
		const intzpVYQDk = BigInt("1455")
		const intKUmIDcX = BigInt("20")
		const intUr4B6R = BigInt("-684")
		const intDPhHO3 = BigInt("422")
		const intMTKeEUu = BigInt("111")
		const boolEZ3KrJp = await BazFp8hAMo.echidna_all_states.call({from: accounts[0]});
		const boolWoAX9zV = await BazFp8hAMo.echidna_all_states.call({from: accounts[1]});
		const int256oBYfFB8 = await BazFp8hAMo.baz.call(intLt8ql6n, intmg5bKz, int7aowtn, {from: accounts[3]});
		const int256dwCeaI6 = await BazFp8hAMo.baz.call(intKUmIDcX, intzpVYQDk, intTr5EG4Z, {from: accounts[3]});
		const int256COetCCq = await BazFp8hAMo.baz.call(intMTKeEUu, intDPhHO3, intUr4B6R, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEZ3KrJp, true)
		assert.equal(boolWoAX9zV, true)
		assert.equal(int256COetCCq, BigInt("3"))
		assert.equal(int256dwCeaI6, BigInt("4"))
		assert.equal(int256oBYfFB8, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazFp8hAMo = await Baz.new({from: accounts[3]});
		const intNeNrNiv = BigInt("-689")
		const intPbIqehs = BigInt("432")
		const intWhS19oa = BigInt("42")
		const booltGFbMJ = await BazFp8hAMo.echidna_all_states.call({from: accounts[3]});
		const int256COetCCq = await BazFp8hAMo.baz.call(intWhS19oa, intPbIqehs, intNeNrNiv, {from: "0x0000000000000000000000000000000000000001"});
		const boolBqUYbdG = await BazFp8hAMo.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolBqUYbdG, true)
		assert.equal(booltGFbMJ, true)
		assert.equal(int256COetCCq, BigInt("2"))
	});
})