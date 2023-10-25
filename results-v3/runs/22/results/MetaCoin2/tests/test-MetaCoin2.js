const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2U3EG2d5 = await MetaCoin2.new({from: accounts[3]});
		const addressR0IPBde = accounts[5]
		const uinteqLhBuu = BigInt("30")
		const addressEfIR2Ii = accounts[1]
		const uintyOzTZme = await MetaCoin2U3EG2d5.getBalanceInEth.call(addressR0IPBde, {from: accounts[0]});
		const boolY8SPpSn = await MetaCoin2U3EG2d5.sendCoin.call(addressEfIR2Ii, uinteqLhBuu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolY8SPpSn, false)
		assert.equal(uintyOzTZme, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2phZxqyw = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLRQ1HsU = accounts[3]
		const addressARDx6Hb = "0x0000000000000000000000000000000000000001"
		const addresseuyNQpk = accounts[4]
		const uintWD6GnWw = BigInt("1944")
		const addressQwIxTUM = accounts[2]
		const addressLI6S0F = accounts[1]
		const uintU5cZrmk = await MetaCoin2phZxqyw.getBalanceInEth.call(addressLRQ1HsU, {from: "0x0000000000000000000000000000000000000001"});
		const uintvu1MtFx = await MetaCoin2phZxqyw.getBalance.call(addressARDx6Hb, {from: accounts[4]});
		const uintdrRXlVY = await MetaCoin2phZxqyw.getBalance.call(addresseuyNQpk, {from: accounts[0]});
		const booldGAK1Lj = await MetaCoin2phZxqyw.sendCoin.call(addressQwIxTUM, uintWD6GnWw, {from: accounts[2]});
		const uintUa1wJQS = await MetaCoin2phZxqyw.getBalanceInEth.call(addressLI6S0F, {from: accounts[5]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2U3EG2d5 = await MetaCoin2.new({from: accounts[3]});
		const addressR9KmzSL = accounts[4]
		const uintF5Q66GP = BigInt("554")
		const address5A3a5c = "0x0000000000000000000000000000000000000001"
		const uintf7VyKc7 = await MetaCoin2U3EG2d5.getBalanceInEth.call(addressR9KmzSL, {from: accounts[3]});
		const boolBS8qid6 = await MetaCoin2U3EG2d5.sendCoin.call(address5A3a5c, uintF5Q66GP, {from: accounts[3]});

		assert.equal(boolBS8qid6, true)
		assert.equal(uintf7VyKc7, BigInt("0"))
	});
})