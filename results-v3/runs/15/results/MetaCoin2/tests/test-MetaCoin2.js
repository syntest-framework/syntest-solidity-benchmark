const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2pq8Iso3 = await MetaCoin2.new({from: accounts[0]});
		const addressnpOZhW2 = accounts[5]
		const addresslgQc4CO = accounts[3]
		const uintCevrorb = BigInt("428")
		const addressMCt4csh = "0x0000000000000000000000000000000000000001"
		const uintBbrDka = await MetaCoin2pq8Iso3.getBalanceInEth.call(addressnpOZhW2, {from: accounts[4]});
		const uintwEV0uVE = await MetaCoin2pq8Iso3.getBalance.call(addresslgQc4CO, {from: accounts[2]});
		const boolxoScQe = await MetaCoin2pq8Iso3.sendCoin.call(addressMCt4csh, uintCevrorb, {from: accounts[1]});

		assert.equal(boolxoScQe, false)
		assert.equal(uintBbrDka, BigInt("0"))
		assert.equal(uintwEV0uVE, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2EeeKl07 = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const uinteoFIPyC = BigInt("326")
		const addressbjVMppC = accounts[4]
		const uintn3ez8wD = BigInt("772")
		const addressgJJeAC5 = accounts[2]
		const uinteRSynm1 = BigInt("1128")
		const addressXoT8anD = accounts[2]
		const addresskWaGZ8X = accounts[2]
		const boolpXjqDoo = await MetaCoin2EeeKl07.sendCoin.call(addressbjVMppC, uinteoFIPyC, {from: accounts[0]});
		const boolRHrj8KG = await MetaCoin2EeeKl07.sendCoin.call(addressgJJeAC5, uintn3ez8wD, {from: accounts[0]});
		const booloKcdccV = await MetaCoin2EeeKl07.sendCoin.call(addressXoT8anD, uinteRSynm1, {from: accounts[3]});
		const uintmHcyVqX = await MetaCoin2EeeKl07.getBalanceInEth.call(addresskWaGZ8X, {from: accounts[1]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2FidNeQd = await MetaCoin2.new({from: accounts[1]});
		const addressVKToe4U = accounts[4]
		const uintYiXI82f = BigInt("2035")
		const addressKUhxNJW = accounts[5]
		const address7tz9TQ = accounts[3]
		const uintX2NnRPe = await MetaCoin2FidNeQd.getBalance.call(addressVKToe4U, {from: accounts[0]});
		const booluZA9zWC = await MetaCoin2FidNeQd.sendCoin.call(addressKUhxNJW, uintYiXI82f, {from: accounts[1]});
		const uintvdZvnbB = await MetaCoin2FidNeQd.getBalanceInEth.call(address7tz9TQ, {from: accounts[4]});

		assert.equal(booluZA9zWC, true)
		assert.equal(uintX2NnRPe, BigInt("0"))
		assert.equal(uintvdZvnbB, BigInt("0"))
	});
})