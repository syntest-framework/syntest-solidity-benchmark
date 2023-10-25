const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2YeLD5L = await MetaCoin2.new({from: accounts[3]});
		const uint0vnp3K = BigInt("676")
		const addressBC4h1a2 = accounts[3]
		const addressvg6hJNp = accounts[5]
		const uintsAbqVB = BigInt("1451")
		const addresskLRsfjL = accounts[3]
		const addresstE5b9jW = accounts[4]
		const boolXkBUyb = await MetaCoin2YeLD5L.sendCoin.call(addressBC4h1a2, uint0vnp3K, {from: accounts[0]});
		const uintsNaqCAn = await MetaCoin2YeLD5L.getBalance.call(addressvg6hJNp, {from: accounts[4]});
		const boolAvt3UO5 = await MetaCoin2YeLD5L.sendCoin.call(addresskLRsfjL, uintsAbqVB, {from: accounts[1]});
		const uintjPqtB33 = await MetaCoin2YeLD5L.getBalance.call(addresstE5b9jW, {from: accounts[1]});

		assert.equal(boolAvt3UO5, false)
		assert.equal(boolXkBUyb, false)
		assert.equal(uintjPqtB33, BigInt("0"))
		assert.equal(uintsNaqCAn, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2z1eQWKC = await MetaCoin2.new({from: accounts[4]});
		const uintJg2qgr = BigInt("1641")
		const addressilyByPU = accounts[2]
		const addressBKTUpTn = accounts[2]
		const addressSA4jyJo = accounts[3]
		const booltoZVczf = await MetaCoin2z1eQWKC.sendCoin.call(addressilyByPU, uintJg2qgr, {from: accounts[1]});
		const uintIX1HaRw = await MetaCoin2z1eQWKC.getBalanceInEth.call(addressBKTUpTn, {from: accounts[4]});
		const uintQjKAR8C = await MetaCoin2z1eQWKC.getBalance.call(addressSA4jyJo, {from: accounts[1]});

		assert.equal(booltoZVczf, false)
		assert.equal(uintIX1HaRw, BigInt("0"))
		assert.equal(uintQjKAR8C, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2PHjW5pR = await MetaCoin2.new({from: accounts[1]});
		const addressFfLkyG3 = accounts[5]
		const addressslTOXen = accounts[1]
		const addressTb3IPER = "0x0000000000000000000000000000000000000001"
		const uintEgTcxzO = BigInt("1288")
		const addressh8OOAAj = accounts[3]
		const addresseZYldVs = accounts[5]
		const addressVRta5ml = accounts[2]
		const uintfFdEXBr = await MetaCoin2PHjW5pR.getBalanceInEth.call(addressFfLkyG3, {from: accounts[3]});
		const uint3IheSW = await MetaCoin2PHjW5pR.getBalanceInEth.call(addressslTOXen, {from: accounts[3]});
		const uintnt9yyxE = await MetaCoin2PHjW5pR.getBalanceInEth.call(addressTb3IPER, {from: accounts[3]});
		const boolFCBqV3N = await MetaCoin2PHjW5pR.sendCoin.call(addressh8OOAAj, uintEgTcxzO, {from: accounts[1]});
		const uint7ABjLX = await MetaCoin2PHjW5pR.getBalance.call(addresseZYldVs, {from: accounts[3]});
		const uintnSxsuJ3 = await MetaCoin2PHjW5pR.getBalanceInEth.call(addressVRta5ml, {from: accounts[1]});

		assert.equal(boolFCBqV3N, true)
		assert.equal(uint3IheSW, BigInt("20000"))
		assert.equal(uint7ABjLX, BigInt("0"))
		assert.equal(uintfFdEXBr, BigInt("0"))
		assert.equal(uintnSxsuJ3, BigInt("0"))
		assert.equal(uintnt9yyxE, BigInt("0"))
	});
})