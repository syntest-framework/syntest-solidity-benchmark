const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazRag9AT0 = await Baz.new({from: accounts[4]});
		const intXMISZyX = BigInt("-1380")
		const intvZahQmT = BigInt("1854")
		const intRNAgON8 = BigInt("437")
		const intIdoQsEs = BigInt("-742")
		const inteGgxhmp = BigInt("1350")
		const intWBGXb6L = BigInt("1503")
		const bools0gew7i = await BazRag9AT0.echidna_all_states.call({from: accounts[4]});
		const int256HwI6jmg = await BazRag9AT0.baz.call(intRNAgON8, intvZahQmT, intXMISZyX, {from: accounts[0]});
		const int256binZpfS = await BazRag9AT0.baz.call(intWBGXb6L, inteGgxhmp, intIdoQsEs, {from: accounts[0]});
		const boolO6A7rvD = await BazRag9AT0.echidna_all_states.call({from: accounts[1]});
		const boolElqt7kp = await BazRag9AT0.echidna_all_states.call({from: accounts[0]});

		assert.equal(boolElqt7kp, true)
		assert.equal(boolO6A7rvD, true)
		assert.equal(bools0gew7i, true)
		assert.equal(int256HwI6jmg, BigInt("4"))
		assert.equal(int256binZpfS, BigInt("4"))
	});

	it('test for Baz', async () => {
		const Bazfu0C2rG = await Baz.new({from: accounts[0]});
		const intjIpND46 = BigInt("1090")
		const intm1SvVcm = BigInt("817")
		const intbHovXT = BigInt("-557")
		const int3bpDl6 = BigInt("1986")
		const intBkgEPxE = BigInt("-82")
		const intj4Glgwd = BigInt("-78")
		const boolp7vW2Q = await Bazfu0C2rG.echidna_all_states.call({from: accounts[1]});
		const int256U2FUNw = await Bazfu0C2rG.baz.call(intbHovXT, intm1SvVcm, intjIpND46, {from: accounts[0]});
		const int256aKhrsSz = await Bazfu0C2rG.baz.call(intj4Glgwd, intBkgEPxE, int3bpDl6, {from: accounts[2]});

		assert.equal(boolp7vW2Q, true)
		assert.equal(int256U2FUNw, BigInt("5"))
		assert.equal(int256aKhrsSz, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BaziWiNl9N = await Baz.new({from: accounts[2]});
		const intvnmTOIS = BigInt("-1770")
		const int6is6ip = BigInt("-1524")
		const intBEnoEk = BigInt("1257")
		const boolT2VNGhn = await BaziWiNl9N.echidna_all_states.call({from: accounts[0]});
		const boolYFrkp9 = await BaziWiNl9N.echidna_all_states.call({from: accounts[3]});
		const boolRv4Px4v = await BaziWiNl9N.echidna_all_states.call({from: accounts[3]});
		const int256webVoQQ = await BaziWiNl9N.baz.call(intBEnoEk, int6is6ip, intvnmTOIS, {from: accounts[0]});
		const boolgbXQFDn = await BaziWiNl9N.echidna_all_states.call({from: accounts[3]});

		assert.equal(boolRv4Px4v, true)
		assert.equal(boolT2VNGhn, true)
		assert.equal(boolYFrkp9, true)
		assert.equal(boolgbXQFDn, true)
		assert.equal(int256webVoQQ, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazESb7k7s = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intj5ZYHhQ = BigInt("809")
		const intPrXVR78 = BigInt("771")
		const intt0Dalaa = BigInt("-650")
		const intUJoSCV = BigInt("-361")
		const intD71KRn6 = BigInt("-910")
		const intf9IUBQd = BigInt("1691")
		const int256g3IppgE = await BazESb7k7s.baz.call(intt0Dalaa, intPrXVR78, intj5ZYHhQ, {from: accounts[2]});
		const int256mUt6PNg = await BazESb7k7s.baz.call(intf9IUBQd, intD71KRn6, intUJoSCV, {from: accounts[0]});
	});

	it('test for Baz', async () => {
		const BazOzTBKZ = await Baz.new({from: accounts[2]});
		const intWli7Gq = BigInt("-450")
		const intIP1xYeP = BigInt("1710")
		const intMhFr6L9 = BigInt("-1234")
		const intaMshavd = BigInt("-1419")
		const intxbE4WYb = BigInt("305")
		const intmJmKbOi = BigInt("921")
		const intMeGLurJ = BigInt("-949")
		const intlxmit74 = BigInt("-1649")
		const inttxvc850 = BigInt("-858")
		const boolAVXcCon = await BazOzTBKZ.echidna_all_states.call({from: accounts[3]});
		const int256eQRqdKz = await BazOzTBKZ.baz.call(intMhFr6L9, intIP1xYeP, intWli7Gq, {from: accounts[2]});
		const int256eCETde = await BazOzTBKZ.baz.call(intmJmKbOi, intxbE4WYb, intaMshavd, {from: accounts[3]});
		const int256aZyGx8j = await BazOzTBKZ.baz.call(inttxvc850, intlxmit74, intMeGLurJ, {from: accounts[1]});

		assert.equal(boolAVXcCon, true)
		assert.equal(int256aZyGx8j, BigInt("1"))
		assert.equal(int256eCETde, BigInt("3"))
		assert.equal(int256eQRqdKz, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazOzTBKZ = await Baz.new({from: accounts[2]});
		const intRWy0Lvf = BigInt("-1211")
		const intCTjkMIa = BigInt("217")
		const intBV1WiJO = BigInt("42")
		const int256gtc78iW = await BazOzTBKZ.baz.call(intBV1WiJO, intCTjkMIa, intRWy0Lvf, {from: accounts[0]});

		assert.equal(int256gtc78iW, BigInt("2"))
	});
})