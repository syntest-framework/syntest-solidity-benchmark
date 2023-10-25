const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2RBowmfZ = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrSOgzQ1 = accounts[3]
		const address5NzUBd = accounts[1]
		const addressuZz8Rd7 = accounts[2]
		const addressw33OUrg = accounts[5]
		const uintV3btE20 = await MetaCoin2RBowmfZ.getBalance.call(addressrSOgzQ1, {from: accounts[4]});
		const uintwBQa4x = await MetaCoin2RBowmfZ.getBalance.call(address5NzUBd, {from: accounts[2]});
		const uintUmld5jM = await MetaCoin2RBowmfZ.getBalanceInEth.call(addressuZz8Rd7, {from: accounts[1]});
		const uintMjwfIE = await MetaCoin2RBowmfZ.getBalance.call(addressw33OUrg, {from: accounts[0]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2YMlArVX = await MetaCoin2.new({from: accounts[5]});
		const addressV3sdrUL = accounts[4]
		const addressK14gDC = accounts[0]
		const uintS5DbJBa = BigInt("1954")
		const addressn69RDvb = accounts[4]
		const uintTnmlPsE = BigInt("1810")
		const addressNZtrBX9 = accounts[3]
		const uint9f1mr2 = await MetaCoin2YMlArVX.getBalance.call(addressV3sdrUL, {from: accounts[3]});
		const uinteF0ojOE = await MetaCoin2YMlArVX.getBalanceInEth.call(addressK14gDC, {from: accounts[4]});
		const boolv4blxJx = await MetaCoin2YMlArVX.sendCoin.call(addressn69RDvb, uintS5DbJBa, {from: accounts[2]});
		const boolKKTZ8Or = await MetaCoin2YMlArVX.sendCoin.call(addressNZtrBX9, uintTnmlPsE, {from: accounts[2]});

		assert.equal(boolKKTZ8Or, false)
		assert.equal(boolv4blxJx, false)
		assert.equal(uint9f1mr2, BigInt("0"))
		assert.equal(uinteF0ojOE, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2JNqXtMl = await MetaCoin2.new({from: accounts[3]});
		const addressVsiytuE = accounts[4]
		const uintkMeLD3N = BigInt("1519")
		const addressB4AaWMo = accounts[1]
		const uintUKCGGet = BigInt("76")
		const addresslun2ooB = accounts[3]
		const uintgUCQpp8 = BigInt("674")
		const addressr0GELDj = accounts[2]
		const uintOta62O8 = await MetaCoin2JNqXtMl.getBalanceInEth.call(addressVsiytuE, {from: accounts[2]});
		const booll4mwQwO = await MetaCoin2JNqXtMl.sendCoin.call(addressB4AaWMo, uintkMeLD3N, {from: accounts[2]});
		const boolwUgaFqd = await MetaCoin2JNqXtMl.sendCoin.call(addresslun2ooB, uintUKCGGet, {from: accounts[2]});
		const boolUy5aiR4 = await MetaCoin2JNqXtMl.sendCoin.call(addressr0GELDj, uintgUCQpp8, {from: accounts[3]});

		assert.equal(boolUy5aiR4, true)
		assert.equal(booll4mwQwO, false)
		assert.equal(boolwUgaFqd, false)
		assert.equal(uintOta62O8, BigInt("0"))
	});
})