const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2bIN1xSd = await MetaCoin2.new({from: accounts[3]});
		const uintKe49kob = BigInt("1424")
		const addressyhuXtlV = accounts[3]
		const addressgITEZj = accounts[2]
		const addressZWyIWwC = accounts[4]
		const addressaBzjnqR = accounts[5]
		const boolAr7B2cp = await MetaCoin2bIN1xSd.sendCoin.call(addressyhuXtlV, uintKe49kob, {from: accounts[3]});
		const uintsbBz402 = await MetaCoin2bIN1xSd.getBalanceInEth.call(addressgITEZj, {from: accounts[3]});
		const uintrKunAaI = await MetaCoin2bIN1xSd.getBalanceInEth.call(addressZWyIWwC, {from: accounts[1]});
		const uintOXFGI4H = await MetaCoin2bIN1xSd.getBalanceInEth.call(addressaBzjnqR, {from: accounts[4]});

		assert.equal(boolAr7B2cp, true)
		assert.equal(uintOXFGI4H, BigInt("0"))
		assert.equal(uintrKunAaI, BigInt("0"))
		assert.equal(uintsbBz402, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2YLoJni = await MetaCoin2.new({from: accounts[0]});
		const uintoK30hdz = BigInt("1859")
		const addresspJnt3WC = accounts[0]
		const addressk3oea8 = accounts[0]
		const addresslqz7jC = accounts[4]
		const boolxo5jouE = await MetaCoin2YLoJni.sendCoin.call(addresspJnt3WC, uintoK30hdz, {from: "0x0000000000000000000000000000000000000001"});
		const uinth53Y0H = await MetaCoin2YLoJni.getBalanceInEth.call(addressk3oea8, {from: accounts[5]});
		const uintXHLVHys = await MetaCoin2YLoJni.getBalanceInEth.call(addresslqz7jC, {from: accounts[3]});

		assert.equal(boolxo5jouE, false)
		assert.equal(uintXHLVHys, BigInt("0"))
		assert.equal(uinth53Y0H, BigInt("20000"))
	});
})