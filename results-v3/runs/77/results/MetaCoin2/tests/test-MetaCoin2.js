const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2qA3h5B = await MetaCoin2.new({from: accounts[0]});
		const addressmL5MnRK = accounts[2]
		const addressJxydrip = accounts[3]
		const address9wDH8j = accounts[5]
		const uintWUvHZT9 = await MetaCoin2qA3h5B.getBalanceInEth.call(addressmL5MnRK, {from: accounts[3]});
		const uintb0M4BPI = await MetaCoin2qA3h5B.getBalance.call(addressJxydrip, {from: accounts[3]});
		const uint7SIX88 = await MetaCoin2qA3h5B.getBalanceInEth.call(address9wDH8j, {from: accounts[2]});

		assert.equal(uint7SIX88, BigInt("0"))
		assert.equal(uintWUvHZT9, BigInt("0"))
		assert.equal(uintb0M4BPI, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2y5Udbdd = await MetaCoin2.new({from: accounts[2]});
		const uintoRGiY63 = BigInt("1958")
		const addressOUPZgVK = accounts[4]
		const addressL1b9aqj = accounts[2]
		const uintSzAdCS = BigInt("235")
		const addressXVYR6ta = accounts[2]
		const boolfwyu4B8 = await MetaCoin2y5Udbdd.sendCoin.call(addressOUPZgVK, uintoRGiY63, {from: accounts[2]});
		const uintkcCBk1p = await MetaCoin2y5Udbdd.getBalanceInEth.call(addressL1b9aqj, {from: accounts[1]});
		const boolCyFuEPS = await MetaCoin2y5Udbdd.sendCoin.call(addressXVYR6ta, uintSzAdCS, {from: accounts[1]});

		assert.equal(boolCyFuEPS, false)
		assert.equal(boolfwyu4B8, true)
		assert.equal(uintkcCBk1p, BigInt("20000"))
	});
})