const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2VL0t64y = await MetaCoin2.new({from: accounts[4]});
		const addressM8A5lKK = accounts[0]
		const addresszzMh9V0 = accounts[3]
		const addressy5Z2zTq = accounts[0]
		const uinteABdfBe = BigInt("1473")
		const addressdNrDzRg = accounts[3]
		const uintwA4t6Ih = await MetaCoin2VL0t64y.getBalance.call(addressM8A5lKK, {from: accounts[5]});
		const uintJ5zgCnh = await MetaCoin2VL0t64y.getBalance.call(addresszzMh9V0, {from: accounts[5]});
		const uintmVnhmEi = await MetaCoin2VL0t64y.getBalance.call(addressy5Z2zTq, {from: accounts[2]});
		const booliSnNqVQ = await MetaCoin2VL0t64y.sendCoin.call(addressdNrDzRg, uinteABdfBe, {from: accounts[2]});

		assert.equal(booliSnNqVQ, false)
		assert.equal(uintJ5zgCnh, BigInt("0"))
		assert.equal(uintmVnhmEi, BigInt("0"))
		assert.equal(uintwA4t6Ih, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2u3FwJtL = await MetaCoin2.new({from: accounts[0]});
		const addressze6cMg = accounts[1]
		const uintIHxaAKO = BigInt("1899")
		const addressksm74bo = accounts[3]
		const addressHRtKReM = accounts[4]
		const uintShFeMF6 = await MetaCoin2u3FwJtL.getBalanceInEth.call(addressze6cMg, {from: accounts[4]});
		const boolm1KdTqE = await MetaCoin2u3FwJtL.sendCoin.call(addressksm74bo, uintIHxaAKO, {from: accounts[5]});
		const uintAE9fOh = await MetaCoin2u3FwJtL.getBalanceInEth.call(addressHRtKReM, {from: accounts[2]});

		assert.equal(boolm1KdTqE, false)
		assert.equal(uintAE9fOh, BigInt("0"))
		assert.equal(uintShFeMF6, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2mR2uBkn = await MetaCoin2.new({from: accounts[0]});
		const uintymmJEjR = BigInt("726")
		const addressA0Fiw3 = "0x0000000000000000000000000000000000000001"
		const uintAbc4I2v = BigInt("169")
		const addressbO3hZVN = accounts[0]
		const addressDef6uU9 = accounts[4]
		const boolZ9FIPY1 = await MetaCoin2mR2uBkn.sendCoin.call(addressA0Fiw3, uintymmJEjR, {from: accounts[0]});
		const boolwmrWol8 = await MetaCoin2mR2uBkn.sendCoin.call(addressbO3hZVN, uintAbc4I2v, {from: accounts[3]});
		const uintt7gUGPD = await MetaCoin2mR2uBkn.getBalanceInEth.call(addressDef6uU9, {from: accounts[4]});

		assert.equal(boolZ9FIPY1, true)
		assert.equal(boolwmrWol8, false)
		assert.equal(uintt7gUGPD, BigInt("0"))
	});
})