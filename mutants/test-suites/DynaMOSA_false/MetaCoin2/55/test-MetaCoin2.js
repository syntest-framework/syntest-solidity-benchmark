const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2FREMLdp = await MetaCoin2.new({from: accounts[2]});
		const addressrLNxSCF = "0x0000000000000000000000000000000000000001"
		const addressV3sYfK = accounts[5]
		const uint75i8vE = BigInt("737")
		const addressBiTC2YK = accounts[2]
		const addressTQU88DB = "0x0000000000000000000000000000000000000001"
		const uintqi9tffH = BigInt("1271")
		const addressiXIfa3T = accounts[1]
		const uintqotRd6g = await MetaCoin2FREMLdp.getBalanceInEth.call(addressrLNxSCF, {from: accounts[0]});
		const uintudTlYjU = await MetaCoin2FREMLdp.getBalance.call(addressV3sYfK, {from: accounts[3]});
		const boolulVO2lN = await MetaCoin2FREMLdp.sendCoin.call(addressBiTC2YK, uint75i8vE, {from: accounts[0]});
		const uinticIpIr6 = await MetaCoin2FREMLdp.getBalanceInEth.call(addressTQU88DB, {from: accounts[4]});
		const boolPMxd6QD = await MetaCoin2FREMLdp.sendCoin.call(addressiXIfa3T, uintqi9tffH, {from: accounts[2]});

		assert.equal(boolPMxd6QD, true)
		assert.equal(boolulVO2lN, false)
		assert.equal(uinticIpIr6, BigInt("0"))
		assert.equal(uintqotRd6g, BigInt("0"))
		assert.equal(uintudTlYjU, BigInt("0"))
	});
})