const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2s61nKCt = await MetaCoin2.new({from: accounts[5]});
		const addressrLYcrE = accounts[1]
		const address0UrFcc = accounts[5]
		const addressxB0q5MQ = accounts[3]
		const addressBemvAQw = accounts[0]
		const addressKCvkji9 = accounts[3]
		const addresszUD6FBk = accounts[0]
		const uintFWkHzlm = await MetaCoin2s61nKCt.getBalanceInEth.call(addressrLYcrE, {from: accounts[4]});
		const uint6cYb6e = await MetaCoin2s61nKCt.getBalanceInEth.call(address0UrFcc, {from: accounts[3]});
		const uintc5WN2T = await MetaCoin2s61nKCt.getBalanceInEth.call(addressxB0q5MQ, {from: accounts[2]});
		const uintOAbIl7 = await MetaCoin2s61nKCt.getBalance.call(addressBemvAQw, {from: accounts[5]});
		const uintTnrejx9 = await MetaCoin2s61nKCt.getBalanceInEth.call(addressKCvkji9, {from: accounts[0]});
		const uint3FdazZ = await MetaCoin2s61nKCt.getBalanceInEth.call(addresszUD6FBk, {from: accounts[2]});

		assert.equal(uint3FdazZ, BigInt("0"))
		assert.equal(uint6cYb6e, BigInt("20000"))
		assert.equal(uintFWkHzlm, BigInt("0"))
		assert.equal(uintOAbIl7, BigInt("0"))
		assert.equal(uintTnrejx9, BigInt("0"))
		assert.equal(uintc5WN2T, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2IfK6fIN = await MetaCoin2.new({from: accounts[0]});
		const addressX4dA3Og = accounts[0]
		const uintUTmhvzG = BigInt("1421")
		const addressg7umKQ = accounts[3]
		const addressr5x8Aik = accounts[3]
		const addressrljXvOP = "0x0000000000000000000000000000000000000001"
		const uinttQOKTZy = await MetaCoin2IfK6fIN.getBalanceInEth.call(addressX4dA3Og, {from: accounts[2]});
		const boolljIBMVE = await MetaCoin2IfK6fIN.sendCoin.call(addressg7umKQ, uintUTmhvzG, {from: accounts[3]});
		const uintfo26ksr = await MetaCoin2IfK6fIN.getBalance.call(addressr5x8Aik, {from: accounts[5]});
		const uintaHNEYjn = await MetaCoin2IfK6fIN.getBalanceInEth.call(addressrljXvOP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolljIBMVE, false)
		assert.equal(uintaHNEYjn, BigInt("0"))
		assert.equal(uintfo26ksr, BigInt("0"))
		assert.equal(uinttQOKTZy, BigInt("20000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2A9dxMm = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAUTVkRR = accounts[3]
		const addresslGrhXbt = "0x0000000000000000000000000000000000000001"
		const uintVgawLZh = BigInt("1253")
		const addressFdHSH1Y = "0x0000000000000000000000000000000000000001"
		const addresszwG4j8V = accounts[0]
		const addressmHCjTi9 = accounts[4]
		const addressBOjn8yq = accounts[5]
		const uintKLelcn = await MetaCoin2A9dxMm.getBalance.call(addressAUTVkRR, {from: accounts[5]});
		const uintpy4De2e = await MetaCoin2A9dxMm.getBalanceInEth.call(addresslGrhXbt, {from: "0x0000000000000000000000000000000000000001"});
		const boolRRFnTFb = await MetaCoin2A9dxMm.sendCoin.call(addressFdHSH1Y, uintVgawLZh, {from: accounts[4]});
		const uintO071068 = await MetaCoin2A9dxMm.getBalance.call(addresszwG4j8V, {from: accounts[4]});
		const uintayZz8WL = await MetaCoin2A9dxMm.getBalanceInEth.call(addressmHCjTi9, {from: accounts[2]});
		const uintvvaSi9 = await MetaCoin2A9dxMm.getBalanceInEth.call(addressBOjn8yq, {from: accounts[4]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2qhw0jUa = await MetaCoin2.new({from: accounts[3]});
		const addresszUDupiU = accounts[2]
		const uintAXwlZDT = BigInt("599")
		const addressVSNMeZp = accounts[1]
		const uintNOtxKd = BigInt("107")
		const addressSbDCuER = accounts[2]
		const addressfzbyWI = accounts[3]
		const addressGDvd9jz = accounts[0]
		const uintxAh3F8I = await MetaCoin2qhw0jUa.getBalance.call(addresszUDupiU, {from: accounts[5]});
		const boolbbs3RK = await MetaCoin2qhw0jUa.sendCoin.call(addressVSNMeZp, uintAXwlZDT, {from: accounts[3]});
		const boolEGkbZhq = await MetaCoin2qhw0jUa.sendCoin.call(addressSbDCuER, uintNOtxKd, {from: accounts[1]});
		const uinthKeQg6p = await MetaCoin2qhw0jUa.getBalanceInEth.call(addressfzbyWI, {from: accounts[5]});
		const uintPgF2HXS = await MetaCoin2qhw0jUa.getBalanceInEth.call(addressGDvd9jz, {from: accounts[4]});

		assert.equal(boolEGkbZhq, false)
		assert.equal(boolbbs3RK, true)
		assert.equal(uintPgF2HXS, BigInt("0"))
		assert.equal(uinthKeQg6p, BigInt("20000"))
		assert.equal(uintxAh3F8I, BigInt("0"))
	});
})