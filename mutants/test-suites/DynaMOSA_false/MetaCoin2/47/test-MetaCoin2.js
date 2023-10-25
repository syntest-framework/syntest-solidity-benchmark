const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2zlGd72 = await MetaCoin2.new({from: accounts[3]});
		const addressmyPXnFz = accounts[1]
		const addressmnEqpu = accounts[5]
		const addressmpjTxXs = accounts[1]
		const uintmSd4Sfz = await MetaCoin2zlGd72.getBalance.call(addressmyPXnFz, {from: accounts[1]});
		const uintHerktb7 = await MetaCoin2zlGd72.getBalance.call(addressmnEqpu, {from: accounts[4]});
		const uintUtGoBR8 = await MetaCoin2zlGd72.getBalance.call(addressmpjTxXs, {from: accounts[3]});

		assert.equal(uintHerktb7, BigInt("0"))
		assert.equal(uintUtGoBR8, BigInt("0"))
		assert.equal(uintmSd4Sfz, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2oBtlSv = await MetaCoin2.new({from: accounts[5]});
		const addressiPp9ZFi = accounts[4]
		const addressBinJiBG = accounts[0]
		const addressrfneXrw = accounts[4]
		const uintaRx5Ouo = await MetaCoin2oBtlSv.getBalance.call(addressiPp9ZFi, {from: accounts[3]});
		const uintOp0baZo = await MetaCoin2oBtlSv.getBalance.call(addressBinJiBG, {from: accounts[2]});
		const uintL6jbw6F = await MetaCoin2oBtlSv.getBalanceInEth.call(addressrfneXrw, {from: accounts[4]});

		assert.equal(uintL6jbw6F, BigInt("0"))
		assert.equal(uintOp0baZo, BigInt("0"))
		assert.equal(uintaRx5Ouo, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2AHEyGBA = await MetaCoin2.new({from: accounts[1]});
		const uintk784wB3 = BigInt("1397")
		const addressk0RrmpO = accounts[0]
		const addressoyXf7f9 = accounts[2]
		const addressGGEiMz = accounts[4]
		const boolHjFU7QV = await MetaCoin2AHEyGBA.sendCoin.call(addressk0RrmpO, uintk784wB3, {from: accounts[3]});
		const uintvjXvALj = await MetaCoin2AHEyGBA.getBalance.call(addressoyXf7f9, {from: accounts[0]});
		const uintc88Nfu = await MetaCoin2AHEyGBA.getBalanceInEth.call(addressGGEiMz, {from: accounts[4]});

		assert.equal(boolHjFU7QV, false)
		assert.equal(uintc88Nfu, BigInt("0"))
		assert.equal(uintvjXvALj, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2VvtKSY9 = await MetaCoin2.new({from: accounts[1]});
		const addressBHf9RgB = accounts[2]
		const uintMCSOb7I = BigInt("963")
		const addressd40L0w = accounts[3]
		const uintKBM1TQv = BigInt("1151")
		const addressXtWggkY = accounts[2]
		const addresssULJV5H = accounts[3]
		const uintLoQGSuJ = await MetaCoin2VvtKSY9.getBalanceInEth.call(addressBHf9RgB, {from: accounts[3]});
		const boolfL0a48 = await MetaCoin2VvtKSY9.sendCoin.call(addressd40L0w, uintMCSOb7I, {from: accounts[0]});
		const bool3aXlFI = await MetaCoin2VvtKSY9.sendCoin.call(addressXtWggkY, uintKBM1TQv, {from: accounts[1]});
		const uintwvmMtRY = await MetaCoin2VvtKSY9.getBalanceInEth.call(addresssULJV5H, {from: accounts[3]});

		assert.equal(bool3aXlFI, true)
		assert.equal(boolfL0a48, false)
		assert.equal(uintLoQGSuJ, BigInt("0"))
		assert.equal(uintwvmMtRY, BigInt("0"))
	});
})