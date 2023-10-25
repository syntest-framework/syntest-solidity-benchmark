const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3a8oY0mg = await Core_Fi_V3.new({from: accounts[3]});
		const addressvpD5C9 = accounts[4]
		const addresspP7KVUD = accounts[3]
		const uintM6LUtKr = BigInt("1767")
		const addressiYkZSr = accounts[0]
		const uintx24173l = BigInt("17")
		const addresswEjC2Sl = accounts[4]
		const uintSvWmibN = await Core_Fi_V3a8oY0mg.allowance.call(addresspP7KVUD, addressvpD5C9, {from: accounts[3]});
		const boolFhkWM8w = await Core_Fi_V3a8oY0mg.transfer.call(addressiYkZSr, uintM6LUtKr, {from: accounts[4]});
		const boolwhMDnAj = await Core_Fi_V3a8oY0mg.transfer.call(addresswEjC2Sl, uintx24173l, {from: accounts[4]});

		assert.equal(boolFhkWM8w, false)
		assert.equal(boolwhMDnAj, false)
		assert.equal(uintSvWmibN, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3XGe7c5 = await Core_Fi_V3.new({from: accounts[0]});
		const uintG1gItm4 = BigInt("1764")
		const addressqVHh7cW = accounts[3]
		const uintIc6iODd = BigInt("46")
		const addressAeGigSX = accounts[0]
		const addressIkFY4ze = "0x0000000000000000000000000000000000000001"
		const uintJZsbYln = BigInt("152")
		const addressNeO2pYN = accounts[2]
		const addresskvGuxCO = accounts[3]
		const uintqcVgAJF = BigInt("1690")
		const addressyMFvO8e = accounts[4]
		const addresskrN2S5Z = accounts[4]
		const uint256nkFLKq = await Core_Fi_V3XGe7c5.totalSupply.call({from: accounts[1]});
		const boolXNDOX2e = await Core_Fi_V3XGe7c5.transfer.call(addressqVHh7cW, uintG1gItm4, {from: accounts[2]});
		const boolEzwJqZY = await Core_Fi_V3XGe7c5.transferFrom.call(addressIkFY4ze, addressAeGigSX, uintIc6iODd, {from: "0x0000000000000000000000000000000000000001"});
		const boolUBdUOoT = await Core_Fi_V3XGe7c5.transferFrom.call(addresskvGuxCO, addressNeO2pYN, uintJZsbYln, {from: accounts[3]});
		const boolHKOFfsx = await Core_Fi_V3XGe7c5.transferFrom.call(addresskrN2S5Z, addressyMFvO8e, uintqcVgAJF, {from: accounts[2]});

		assert.equal(boolEzwJqZY, false)
		assert.equal(boolHKOFfsx, false)
		assert.equal(boolUBdUOoT, false)
		assert.equal(boolXNDOX2e, false)
		assert.equal(uint256nkFLKq, BigInt("84000000000000000000000"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3lA2YynC = await Core_Fi_V3.new({from: accounts[5]});
		const uintD2pAr0k = BigInt("1562")
		const addressAEEjN9s = accounts[4]
		const addressE36Hy5Q = accounts[0]
		const uintZd1NbvN = BigInt("1761")
		const addressSa3QniI = accounts[2]
		const addressztpR1as = accounts[3]
		const addressTXR02ZD = accounts[2]
		const addressDG3ctSE = accounts[2]
		const uintQNMdDPQ = BigInt("962")
		const addressYyHF34o = accounts[1]
		const boolKS55Ggk = await Core_Fi_V3lA2YynC.approve.call(addressAEEjN9s, uintD2pAr0k, {from: accounts[0]});
		const uint256jOXn4rs = await Core_Fi_V3lA2YynC.balanceOf.call(addressE36Hy5Q, {from: "0x0000000000000000000000000000000000000001"});
		const boolozsGanV = await Core_Fi_V3lA2YynC.transferFrom.call(addressztpR1as, addressSa3QniI, uintZd1NbvN, {from: accounts[2]});
		const uintvhrbUpl = await Core_Fi_V3lA2YynC.allowance.call(addressDG3ctSE, addressTXR02ZD, {from: accounts[3]});
		const boolEh1T7vd = await Core_Fi_V3lA2YynC.transfer.call(addressYyHF34o, uintQNMdDPQ, {from: accounts[5]});

		assert.equal(boolEh1T7vd, true)
		assert.equal(boolKS55Ggk, true)
		assert.equal(boolozsGanV, false)
		assert.equal(uint256jOXn4rs, BigInt("0"))
		assert.equal(uintvhrbUpl, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3okHrXZ7 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressB7aQcXO = accounts[1]
		const addressWYNzjDJ = accounts[1]
		const uintwfGutRw = BigInt("21")
		const addressXmd7lyn = accounts[0]
		const uintHSgc4S0 = await Core_Fi_V3okHrXZ7.allowance.call(addressWYNzjDJ, addressB7aQcXO, {from: "0x0000000000000000000000000000000000000001"});
		const boolccdGW7 = await Core_Fi_V3okHrXZ7.approve.call(addressXmd7lyn, uintwfGutRw, {from: accounts[1]});
	});
})