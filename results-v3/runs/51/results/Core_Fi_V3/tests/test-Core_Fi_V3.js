const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Hq2ZII0 = await Core_Fi_V3.new({from: accounts[4]});
		const addressijpBcrN = accounts[3]
		const addressjpcRTRW = accounts[3]
		const uintdf0jSFE = BigInt("1937")
		const addressuYlND3 = accounts[4]
		const uintt04EKSH = await Core_Fi_V3Hq2ZII0.allowance.call(addressjpcRTRW, addressijpBcrN, {from: accounts[0]});
		const uint256LOPwxF3 = await Core_Fi_V3Hq2ZII0.totalSupply.call({from: accounts[3]});
		const boolFH0WYDm = await Core_Fi_V3Hq2ZII0.approve.call(addressuYlND3, uintdf0jSFE, {from: accounts[1]});

		assert.equal(boolFH0WYDm, true)
		assert.equal(uint256LOPwxF3, BigInt("84000000000000000000000"))
		assert.equal(uintt04EKSH, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3s5AKjYE = await Core_Fi_V3.new({from: accounts[3]});
		const addressGdx0o6b = accounts[4]
		const addressgJJT5DC = accounts[2]
		const addressCiUeIJh = accounts[0]
		const uintgvH50ry = BigInt("340")
		const addressUABitAz = accounts[2]
		const addressCOzQbUK = accounts[4]
		const addressvZjCcEX = accounts[3]
		const addressRILPWC = accounts[3]
		const uint256c1GNfPH = await Core_Fi_V3s5AKjYE.balanceOf.call(addressGdx0o6b, {from: accounts[4]});
		const uintclrB2c = await Core_Fi_V3s5AKjYE.allowance.call(addressCiUeIJh, addressgJJT5DC, {from: accounts[2]});
		const uint256dY8W7P = await Core_Fi_V3s5AKjYE.totalSupply.call({from: accounts[4]});
		const boolW86CEAJ = await Core_Fi_V3s5AKjYE.approve.call(addressUABitAz, uintgvH50ry, {from: accounts[3]});
		const uinttBtJQwP = await Core_Fi_V3s5AKjYE.allowance.call(addressvZjCcEX, addressCOzQbUK, {from: accounts[1]});
		const uint256d3q64EX = await Core_Fi_V3s5AKjYE.balanceOf.call(addressRILPWC, {from: accounts[3]});

		assert.equal(boolW86CEAJ, true)
		assert.equal(uint256c1GNfPH, BigInt("0"))
		assert.equal(uint256d3q64EX, BigInt("84000000000000000000000"))
		assert.equal(uint256dY8W7P, BigInt("84000000000000000000000"))
		assert.equal(uintclrB2c, BigInt("0"))
		assert.equal(uinttBtJQwP, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3BaJPHLp = await Core_Fi_V3.new({from: accounts[4]});
		const uintaA0aFB0 = BigInt("881")
		const addressHVfgSRx = accounts[2]
		const addressMcQJmlJ = "0x0000000000000000000000000000000000000001"
		const addressY7pQtBQ = accounts[3]
		const addresswRYUzQ2 = accounts[0]
		const uintqe1XXCQ = BigInt("757")
		const addressBEALtA3 = accounts[3]
		const boolQbMfc7l = await Core_Fi_V3BaJPHLp.transferFrom.call(addressMcQJmlJ, addressHVfgSRx, uintaA0aFB0, {from: accounts[1]});
		const uintj2tuT8p = await Core_Fi_V3BaJPHLp.allowance.call(addresswRYUzQ2, addressY7pQtBQ, {from: accounts[4]});
		const uint256nBrSndy = await Core_Fi_V3BaJPHLp.totalSupply.call({from: accounts[3]});
		const boolFsftx3s = await Core_Fi_V3BaJPHLp.transfer.call(addressBEALtA3, uintqe1XXCQ, {from: accounts[1]});

		assert.equal(boolFsftx3s, false)
		assert.equal(boolQbMfc7l, false)
		assert.equal(uint256nBrSndy, BigInt("84000000000000000000000"))
		assert.equal(uintj2tuT8p, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3yjpIXk0 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDzIhUW = BigInt("765")
		const addressKge3Laq = accounts[5]
		const uintLlr70vZ = BigInt("583")
		const addressbYY9NoO = accounts[5]
		const addresshCYskeP = accounts[4]
		const uintsORP1n2 = BigInt("1904")
		const addressfUaT2M = accounts[3]
		const addressk9pwlUD = "0x0000000000000000000000000000000000000001"
		const boolB3g4gXV = await Core_Fi_V3yjpIXk0.transfer.call(addressKge3Laq, uintDzIhUW, {from: accounts[0]});
		const boolmuST0lr = await Core_Fi_V3yjpIXk0.transferFrom.call(addresshCYskeP, addressbYY9NoO, uintLlr70vZ, {from: accounts[3]});
		const boolJpu5ru = await Core_Fi_V3yjpIXk0.transferFrom.call(addressk9pwlUD, addressfUaT2M, uintsORP1n2, {from: accounts[0]});
	});
})