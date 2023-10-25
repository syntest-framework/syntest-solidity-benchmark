const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2ZSxZALU = await MetaCoin2.new({from: accounts[3]});
		const addressrtWWWpl = accounts[3]
		const addressOqdCNG = accounts[3]
		const uintXt6L57g = BigInt("1307")
		const addressVvsPox2 = accounts[1]
		const uintGvZuHkd = await MetaCoin2ZSxZALU.getBalanceInEth.call(addressrtWWWpl, {from: accounts[3]});
		const uintTEOqNmH = await MetaCoin2ZSxZALU.getBalanceInEth.call(addressOqdCNG, {from: accounts[0]});
		const boolnxASk6 = await MetaCoin2ZSxZALU.sendCoin.call(addressVvsPox2, uintXt6L57g, {from: accounts[0]});

		assert.equal(boolnxASk6, false)
		assert.equal(uintGvZuHkd, BigInt("20000"))
		assert.equal(uintTEOqNmH, BigInt("20000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2k3zgmnK = await MetaCoin2.new({from: accounts[0]});
		const addressoshh3O = "0x0000000000000000000000000000000000000001"
		const uintkRhLClm = BigInt("262")
		const addresstOAoXge = accounts[4]
		const uintj1hTaef = BigInt("132")
		const addressui7KYJ = accounts[1]
		const addresszqPGtBv = accounts[1]
		const addressDiuMDwl = accounts[2]
		const uintffK5TJ8 = await MetaCoin2k3zgmnK.getBalance.call(addressoshh3O, {from: accounts[0]});
		const boolgKAqGo8 = await MetaCoin2k3zgmnK.sendCoin.call(addresstOAoXge, uintkRhLClm, {from: accounts[1]});
		const booleGO13TC = await MetaCoin2k3zgmnK.sendCoin.call(addressui7KYJ, uintj1hTaef, {from: accounts[0]});
		const uintKNVC5d9 = await MetaCoin2k3zgmnK.getBalanceInEth.call(addresszqPGtBv, {from: accounts[4]});
		const uint0pjRl0 = await MetaCoin2k3zgmnK.getBalanceInEth.call(addressDiuMDwl, {from: accounts[3]});

		assert.equal(booleGO13TC, true)
		assert.equal(boolgKAqGo8, false)
		assert.equal(uint0pjRl0, BigInt("0"))
		assert.equal(uintKNVC5d9, BigInt("0"))
		assert.equal(uintffK5TJ8, BigInt("0"))
	});
})