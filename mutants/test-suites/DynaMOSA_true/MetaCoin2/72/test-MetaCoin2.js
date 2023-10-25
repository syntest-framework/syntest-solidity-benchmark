const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2KDTxNwP = await MetaCoin2.new({from: accounts[1]});
		const addressRfWV5Je = accounts[2]
		const addressLrxnbaz = accounts[1]
		const addresssRctq3V = accounts[2]
		const addressUMdMmnz = accounts[1]
		const uintSk3oSR = BigInt("2032")
		const addressvt7w5hP = accounts[3]
		const addressYj2IHUI = accounts[0]
		const uintRGhjpBm = await MetaCoin2KDTxNwP.getBalanceInEth.call(addressRfWV5Je, {from: accounts[1]});
		const uintj7i6sas = await MetaCoin2KDTxNwP.getBalanceInEth.call(addressLrxnbaz, {from: accounts[0]});
		const uintZQBbwht = await MetaCoin2KDTxNwP.getBalanceInEth.call(addresssRctq3V, {from: "0x0000000000000000000000000000000000000001"});
		const uintSrDBebi = await MetaCoin2KDTxNwP.getBalance.call(addressUMdMmnz, {from: "0x0000000000000000000000000000000000000001"});
		const boolQxMysD9 = await MetaCoin2KDTxNwP.sendCoin.call(addressvt7w5hP, uintSk3oSR, {from: accounts[0]});
		const uintqJtV8qE = await MetaCoin2KDTxNwP.getBalance.call(addressYj2IHUI, {from: accounts[1]});

		assert.equal(boolQxMysD9, false)
		assert.equal(uintRGhjpBm, BigInt("0"))
		assert.equal(uintSrDBebi, BigInt("10000"))
		assert.equal(uintZQBbwht, BigInt("0"))
		assert.equal(uintj7i6sas, BigInt("20000"))
		assert.equal(uintqJtV8qE, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2MkogcC = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDx0fLFB = BigInt("1014")
		const addressVZwU1E = accounts[0]
		const addressXmB21AO = accounts[1]
		const addressyYaurzT = accounts[4]
		const addressaDtCMTL = accounts[3]
		const boolbTvizOL = await MetaCoin2MkogcC.sendCoin.call(addressVZwU1E, uintDx0fLFB, {from: accounts[2]});
		const uinte5Sqg3O = await MetaCoin2MkogcC.getBalance.call(addressXmB21AO, {from: accounts[2]});
		const uintEVVvNvM = await MetaCoin2MkogcC.getBalanceInEth.call(addressyYaurzT, {from: accounts[1]});
		const uintpeX1FNO = await MetaCoin2MkogcC.getBalance.call(addressaDtCMTL, {from: accounts[0]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2slH5bOh = await MetaCoin2.new({from: accounts[2]});
		const addressOMRL5An = accounts[0]
		const uintm8a3zXz = BigInt("258")
		const addressNj3ZEhZ = accounts[3]
		const addressMzzN5R1 = accounts[0]
		const addressBtjZyX = accounts[2]
		const addressPCqpJSV = accounts[0]
		const uintFuelKAO = await MetaCoin2slH5bOh.getBalanceInEth.call(addressOMRL5An, {from: accounts[2]});
		const boolbrfEvJP = await MetaCoin2slH5bOh.sendCoin.call(addressNj3ZEhZ, uintm8a3zXz, {from: accounts[2]});
		const uintN69VrEH = await MetaCoin2slH5bOh.getBalanceInEth.call(addressMzzN5R1, {from: accounts[1]});
		const uinth3oWgUN = await MetaCoin2slH5bOh.getBalance.call(addressBtjZyX, {from: accounts[1]});
		const uintQuRQ74i = await MetaCoin2slH5bOh.getBalance.call(addressPCqpJSV, {from: accounts[1]});

		assert.equal(boolbrfEvJP, true)
		assert.equal(uintFuelKAO, BigInt("0"))
		assert.equal(uintN69VrEH, BigInt("0"))
		assert.equal(uintQuRQ74i, BigInt("0"))
		assert.equal(uinth3oWgUN, BigInt("10000"))
	});
})