const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2VTK4Q1 = await MetaCoin2.new({from: accounts[3]});
		const addressyV7T4Wq = accounts[5]
		const addressG8qZxwp = accounts[2]
		const uintohzPAum = await MetaCoin2VTK4Q1.getBalance.call(addressyV7T4Wq, {from: accounts[3]});
		const uintFqBgGRm = await MetaCoin2VTK4Q1.getBalanceInEth.call(addressG8qZxwp, {from: accounts[2]});

		assert.equal(uintFqBgGRm, BigInt("0"))
		assert.equal(uintohzPAum, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2Oinjduq = await MetaCoin2.new({from: accounts[3]});
		const uintgTsSoVW = BigInt("927")
		const addresseY3LVcf = "0x0000000000000000000000000000000000000001"
		const addressTkeaUGi = accounts[0]
		const addressUMEmz8Y = accounts[1]
		const addresszz3dvW = accounts[4]
		const boolhxI9lzs = await MetaCoin2Oinjduq.sendCoin.call(addresseY3LVcf, uintgTsSoVW, {from: accounts[0]});
		const uintN2AdQaz = await MetaCoin2Oinjduq.getBalanceInEth.call(addressTkeaUGi, {from: accounts[0]});
		const uintdtvosq4 = await MetaCoin2Oinjduq.getBalanceInEth.call(addressUMEmz8Y, {from: accounts[0]});
		const uintvKJNFI = await MetaCoin2Oinjduq.getBalance.call(addresszz3dvW, {from: accounts[1]});

		assert.equal(boolhxI9lzs, false)
		assert.equal(uintN2AdQaz, BigInt("0"))
		assert.equal(uintdtvosq4, BigInt("0"))
		assert.equal(uintvKJNFI, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2uEIIjIT = await MetaCoin2.new({from: accounts[0]});
		const uintJO9CdAP = BigInt("1617")
		const addressHpIAwJI = accounts[1]
		const addressUSfk0NV = "0x0000000000000000000000000000000000000001"
		const addressCVDNJlB = accounts[4]
		const uintuJdNDur = BigInt("1457")
		const addressOJFOVx = accounts[2]
		const boolr5n2x7e = await MetaCoin2uEIIjIT.sendCoin.call(addressHpIAwJI, uintJO9CdAP, {from: accounts[0]});
		const uintUPCdDTq = await MetaCoin2uEIIjIT.getBalance.call(addressUSfk0NV, {from: accounts[0]});
		const uintpjCnRlP = await MetaCoin2uEIIjIT.getBalanceInEth.call(addressCVDNJlB, {from: accounts[0]});
		const booluWw8tFB = await MetaCoin2uEIIjIT.sendCoin.call(addressOJFOVx, uintuJdNDur, {from: accounts[2]});

		assert.equal(boolr5n2x7e, true)
		assert.equal(booluWw8tFB, false)
		assert.equal(uintUPCdDTq, BigInt("0"))
		assert.equal(uintpjCnRlP, BigInt("0"))
	});
})