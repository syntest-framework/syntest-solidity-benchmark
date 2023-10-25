const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2l2kxGik = await MetaCoin2.new({from: accounts[2]});
		const addresshWLPui4 = accounts[4]
		const uintqmYq3Fh = BigInt("1200")
		const addressCZBU8qA = accounts[3]
		const addressTq2EAgl = accounts[2]
		const addressv8Ro3Gu = accounts[3]
		const addressNKVfuxt = accounts[4]
		const uintWDRnuTK = await MetaCoin2l2kxGik.getBalanceInEth.call(addresshWLPui4, {from: accounts[2]});
		const boolb8H2yF6 = await MetaCoin2l2kxGik.sendCoin.call(addressCZBU8qA, uintqmYq3Fh, {from: accounts[4]});
		const uintSSTyX62 = await MetaCoin2l2kxGik.getBalanceInEth.call(addressTq2EAgl, {from: accounts[0]});
		const uintbTQBmei = await MetaCoin2l2kxGik.getBalanceInEth.call(addressv8Ro3Gu, {from: accounts[0]});
		const uintirimO8 = await MetaCoin2l2kxGik.getBalance.call(addressNKVfuxt, {from: accounts[2]});

		assert.equal(boolb8H2yF6, false)
		assert.equal(uintSSTyX62, BigInt("20000"))
		assert.equal(uintWDRnuTK, BigInt("0"))
		assert.equal(uintbTQBmei, BigInt("0"))
		assert.equal(uintirimO8, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2CVVY2l9 = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVSYR0Qo = BigInt("560")
		const addressZMMCdo2 = accounts[1]
		const addressQVk25qS = accounts[0]
		const addressXRp8PLX = accounts[5]
		const uintuMuzMc = BigInt("1469")
		const addressmw5CpR = accounts[0]
		const addressvtImzkq = accounts[4]
		const boolOWADDbV = await MetaCoin2CVVY2l9.sendCoin.call(addressZMMCdo2, uintVSYR0Qo, {from: accounts[2]});
		const uintFyfGYMu = await MetaCoin2CVVY2l9.getBalanceInEth.call(addressQVk25qS, {from: accounts[3]});
		const uintxrJwH7A = await MetaCoin2CVVY2l9.getBalance.call(addressXRp8PLX, {from: "0x0000000000000000000000000000000000000001"});
		const boolleBBm6p = await MetaCoin2CVVY2l9.sendCoin.call(addressmw5CpR, uintuMuzMc, {from: accounts[2]});
		const uintwuLRQxD = await MetaCoin2CVVY2l9.getBalance.call(addressvtImzkq, {from: accounts[2]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2BzCc6wN = await MetaCoin2.new({from: accounts[2]});
		const uintks2eIXk = BigInt("881")
		const addressB8nHdwW = accounts[1]
		const uintF29EAYo = BigInt("1680")
		const addressjtFxEzf = accounts[0]
		const addressjE1nr1j = accounts[3]
		const booly5t2AsR = await MetaCoin2BzCc6wN.sendCoin.call(addressB8nHdwW, uintks2eIXk, {from: accounts[0]});
		const boolCjhmpgD = await MetaCoin2BzCc6wN.sendCoin.call(addressjtFxEzf, uintF29EAYo, {from: accounts[2]});
		const uintH7Mow82 = await MetaCoin2BzCc6wN.getBalanceInEth.call(addressjE1nr1j, {from: accounts[0]});

		assert.equal(boolCjhmpgD, true)
		assert.equal(booly5t2AsR, false)
		assert.equal(uintH7Mow82, BigInt("0"))
	});
})