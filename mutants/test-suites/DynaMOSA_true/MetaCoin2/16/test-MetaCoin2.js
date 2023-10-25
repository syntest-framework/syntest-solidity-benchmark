const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2F9XMJds = await MetaCoin2.new({from: accounts[4]});
		const addressE8SWN6V = accounts[1]
		const addresscvsDnl0 = accounts[1]
		const addresswi7yajw = accounts[2]
		const uintKOl4Nhz = await MetaCoin2F9XMJds.getBalance.call(addressE8SWN6V, {from: accounts[1]});
		const uintjOzagHz = await MetaCoin2F9XMJds.getBalanceInEth.call(addresscvsDnl0, {from: accounts[4]});
		const uintc3cIho = await MetaCoin2F9XMJds.getBalanceInEth.call(addresswi7yajw, {from: accounts[2]});

		assert.equal(uintKOl4Nhz, BigInt("0"))
		assert.equal(uintc3cIho, BigInt("0"))
		assert.equal(uintjOzagHz, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2ws0BWS = await MetaCoin2.new({from: accounts[2]});
		const addressbyU18Nq = accounts[2]
		const addressH13p8Hx = accounts[0]
		const uintK5zxPKs = BigInt("1907")
		const addressE7CBVFH = accounts[3]
		const uintZV3QrNN = await MetaCoin2ws0BWS.getBalanceInEth.call(addressbyU18Nq, {from: accounts[1]});
		const uintZJt9fUT = await MetaCoin2ws0BWS.getBalanceInEth.call(addressH13p8Hx, {from: "0x0000000000000000000000000000000000000001"});
		const boolSysUUR9 = await MetaCoin2ws0BWS.sendCoin.call(addressE7CBVFH, uintK5zxPKs, {from: accounts[2]});

		assert.equal(boolSysUUR9, true)
		assert.equal(uintZJt9fUT, BigInt("0"))
		assert.equal(uintZV3QrNN, BigInt("20000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2fh11Yyc = await MetaCoin2.new({from: accounts[0]});
		const uintrfGxgqg = BigInt("1832")
		const addressbGOkAbf = accounts[4]
		const uintoVSinJy = BigInt("821")
		const addressxYiLB8 = accounts[0]
		const addressfsCIHwf = accounts[2]
		const addressz3R4I4 = accounts[1]
		const boolfJbHhnP = await MetaCoin2fh11Yyc.sendCoin.call(addressbGOkAbf, uintrfGxgqg, {from: accounts[0]});
		const boolAYDH7PI = await MetaCoin2fh11Yyc.sendCoin.call(addressxYiLB8, uintoVSinJy, {from: "0x0000000000000000000000000000000000000001"});
		const uintOiCSkV = await MetaCoin2fh11Yyc.getBalanceInEth.call(addressfsCIHwf, {from: accounts[3]});
		const uintxTCaM9Y = await MetaCoin2fh11Yyc.getBalanceInEth.call(addressz3R4I4, {from: accounts[5]});

		assert.equal(boolAYDH7PI, false)
		assert.equal(boolfJbHhnP, true)
		assert.equal(uintOiCSkV, BigInt("0"))
		assert.equal(uintxTCaM9Y, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2DMskyQl = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmrib3e7 = accounts[3]
		const addressCGensvh = "0x0000000000000000000000000000000000000001"
		const addressg1iPZ6P = accounts[0]
		const uintbORAHxT = await MetaCoin2DMskyQl.getBalanceInEth.call(addressmrib3e7, {from: accounts[0]});
		const uintiG1uiEg = await MetaCoin2DMskyQl.getBalance.call(addressCGensvh, {from: accounts[2]});
		const uintT6JY2Ly = await MetaCoin2DMskyQl.getBalance.call(addressg1iPZ6P, {from: accounts[4]});
	});
})