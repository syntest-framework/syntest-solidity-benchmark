const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2QrF22M = await MetaCoin2.new({from: accounts[0]});
		const uinttmiMJXc = BigInt("364")
		const addressAZPAK1m = accounts[3]
		const uintQNhV0Wj = BigInt("1903")
		const addresshimmSQ = accounts[3]
		const addresslfg3MtP = accounts[3]
		const addressLfDsYxh = accounts[2]
		const addressxEhomX0 = accounts[0]
		const boolTktHsXi = await MetaCoin2QrF22M.sendCoin.call(addressAZPAK1m, uinttmiMJXc, {from: "0x0000000000000000000000000000000000000001"});
		const boolCRKKwho = await MetaCoin2QrF22M.sendCoin.call(addresshimmSQ, uintQNhV0Wj, {from: accounts[1]});
		const uintmnTWict = await MetaCoin2QrF22M.getBalanceInEth.call(addresslfg3MtP, {from: accounts[1]});
		const uintqSIcYAB = await MetaCoin2QrF22M.getBalanceInEth.call(addressLfDsYxh, {from: "0x0000000000000000000000000000000000000001"});
		const uintynQAV6o = await MetaCoin2QrF22M.getBalance.call(addressxEhomX0, {from: accounts[4]});

		assert.equal(boolCRKKwho, false)
		assert.equal(boolTktHsXi, false)
		assert.equal(uintmnTWict, BigInt("0"))
		assert.equal(uintqSIcYAB, BigInt("0"))
		assert.equal(uintynQAV6o, BigInt("10000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2Se5tKNl = await MetaCoin2.new({from: accounts[1]});
		const addressQ7A6UJ = "0x0000000000000000000000000000000000000001"
		const uintatZmsu0 = BigInt("121")
		const addressgFDrqTC = accounts[0]
		const addresszGWwwE1 = accounts[3]
		const addressbwlRww2 = accounts[1]
		const uintsLPOIfO = BigInt("237")
		const addressyaBXlWp = accounts[1]
		const uintcjhxJZ = await MetaCoin2Se5tKNl.getBalance.call(addressQ7A6UJ, {from: accounts[2]});
		const boolJSRqn6q = await MetaCoin2Se5tKNl.sendCoin.call(addressgFDrqTC, uintatZmsu0, {from: accounts[0]});
		const uintFqHH346 = await MetaCoin2Se5tKNl.getBalanceInEth.call(addresszGWwwE1, {from: accounts[1]});
		const uintTDmchkC = await MetaCoin2Se5tKNl.getBalanceInEth.call(addressbwlRww2, {from: accounts[4]});
		const boollzO5IL = await MetaCoin2Se5tKNl.sendCoin.call(addressyaBXlWp, uintsLPOIfO, {from: accounts[1]});

		assert.equal(boolJSRqn6q, false)
		assert.equal(boollzO5IL, true)
		assert.equal(uintFqHH346, BigInt("0"))
		assert.equal(uintTDmchkC, BigInt("20000"))
		assert.equal(uintcjhxJZ, BigInt("0"))
	});
})