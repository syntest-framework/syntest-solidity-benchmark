const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazON8Q4zV = await Baz.new({from: accounts[2]});
		const intnyZM3Jo = BigInt("-1527")
		const intPF9p90H = BigInt("644")
		const intpuoP1n = BigInt("189")
		const intmeSJBHE = BigInt("578")
		const intsm13dkx = BigInt("-165")
		const intHndR8hF = BigInt("1395")
		const intl0kOVgP = BigInt("1906")
		const intuNlXp9z = BigInt("1994")
		const intrqqWyTT = BigInt("-534")
		const intV6tyFpa = BigInt("1232")
		const intB99ALan = BigInt("1278")
		const inthXftJ9Z = BigInt("-801")
		const int256Ob6KLry = await BazON8Q4zV.baz.call(intpuoP1n, intPF9p90H, intnyZM3Jo, {from: accounts[0]});
		const int25664t3Xc = await BazON8Q4zV.baz.call(intHndR8hF, intsm13dkx, intmeSJBHE, {from: accounts[0]});
		const int256affjOC5 = await BazON8Q4zV.baz.call(intrqqWyTT, intuNlXp9z, intl0kOVgP, {from: accounts[5]});
		const int2566hOOJe = await BazON8Q4zV.baz.call(inthXftJ9Z, intB99ALan, intV6tyFpa, {from: accounts[4]});
		const boolwChppZP = await BazON8Q4zV.echidna_all_states.call({from: accounts[5]});

		assert.equal(boolwChppZP, true)
		assert.equal(int25664t3Xc, BigInt("5"))
		assert.equal(int2566hOOJe, BigInt("5"))
		assert.equal(int256Ob6KLry, BigInt("3"))
		assert.equal(int256affjOC5, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BaznDi8WV = await Baz.new({from: accounts[1]});
		const intQILvEu1 = BigInt("-618")
		const inty4gtO7H = BigInt("-1726")
		const intP9D9VhH = BigInt("-1525")
		const intLUMiQgK = BigInt("781")
		const intx6p7uf0 = BigInt("-433")
		const intwSGc6ot = BigInt("-806")
		const int256a4RWe7Z = await BaznDi8WV.baz.call(intP9D9VhH, inty4gtO7H, intQILvEu1, {from: accounts[0]});
		const int256JAF612n = await BaznDi8WV.baz.call(intwSGc6ot, intx6p7uf0, intLUMiQgK, {from: "0x0000000000000000000000000000000000000001"});
		const boolZAk4frp = await BaznDi8WV.echidna_all_states.call({from: accounts[4]});

		assert.equal(boolZAk4frp, true)
		assert.equal(int256JAF612n, BigInt("5"))
		assert.equal(int256a4RWe7Z, BigInt("1"))
	});

	it('test for Baz', async () => {
		const Bazhy6XQmF = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intQ5mnPX = BigInt("-1402")
		const int6uc3QY = BigInt("-1792")
		const intSwrNMcp = BigInt("-180")
		const inty0IuM3n = BigInt("1794")
		const intAAcrJ1t = BigInt("-714")
		const intfIVOwiS = BigInt("-301")
		const intq1uzYms = BigInt("1756")
		const inthluSlFs = BigInt("-291")
		const intQYO4uJI = BigInt("841")
		const int256U1QqTqh = await Bazhy6XQmF.baz.call(intSwrNMcp, int6uc3QY, intQ5mnPX, {from: accounts[5]});
		const boolbwvFDDF = await Bazhy6XQmF.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256UKG3OCQ = await Bazhy6XQmF.baz.call(intfIVOwiS, intAAcrJ1t, inty0IuM3n, {from: accounts[1]});
		const int256lteumVT = await Bazhy6XQmF.baz.call(intQYO4uJI, inthluSlFs, intq1uzYms, {from: accounts[3]});
	});

	it('test for Baz', async () => {
		const BazCf4N6yF = await Baz.new({from: accounts[1]});
		const inttXORrXw = BigInt("-349")
		const intDm9lCjW = BigInt("638")
		const intMKaW1Wb = BigInt("948")
		const intFF0JO6J = BigInt("168")
		const intwvhSy1 = BigInt("-40")
		const intGJxqEs7 = BigInt("1819")
		const intl6Inkp = BigInt("-548")
		const int5dWuuU = BigInt("1636")
		const intPuOjOu4 = BigInt("265")
		const intINcTEvZ = BigInt("424")
		const intaQskgd1 = BigInt("-387")
		const intcgnp0T8 = BigInt("-146")
		const int256L6dE25u = await BazCf4N6yF.baz.call(intMKaW1Wb, intDm9lCjW, inttXORrXw, {from: accounts[4]});
		const boolf4avVym = await BazCf4N6yF.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256d7SO9do = await BazCf4N6yF.baz.call(intGJxqEs7, intwvhSy1, intFF0JO6J, {from: accounts[0]});
		const int256UTUjZRh = await BazCf4N6yF.baz.call(intPuOjOu4, int5dWuuU, intl6Inkp, {from: "0x0000000000000000000000000000000000000001"});
		const int256D3XCYNh = await BazCf4N6yF.baz.call(intcgnp0T8, intaQskgd1, intINcTEvZ, {from: accounts[5]});
		const boolpcVSVlB = await BazCf4N6yF.echidna_all_states.call({from: accounts[3]});
		const boolmVQAuyw = await BazCf4N6yF.echidna_all_states.call({from: accounts[1]});

		assert.equal(boolf4avVym, true)
		assert.equal(boolmVQAuyw, true)
		assert.equal(boolpcVSVlB, true)
		assert.equal(int256D3XCYNh, BigInt("5"))
		assert.equal(int256L6dE25u, BigInt("4"))
		assert.equal(int256UTUjZRh, BigInt("4"))
		assert.equal(int256d7SO9do, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazGcPsy89 = await Baz.new({from: accounts[5]});
		const intTeQebIf = BigInt("-1043")
		const intXFG7dQJ = BigInt("862")
		const inttcTf7X = BigInt("42")
		const int256v5dKM9X = await BazGcPsy89.baz.call(inttcTf7X, intXFG7dQJ, intTeQebIf, {from: accounts[4]});

		assert.equal(int256v5dKM9X, BigInt("2"))
	});
})