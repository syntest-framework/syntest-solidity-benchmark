const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2go2MaM = await MetaCoin2.new({from: accounts[4]});
		const uintRdG2Dd = BigInt("1654")
		const addresshywAUK4 = accounts[1]
		const addressUhNnsTP = accounts[5]
		const boolkabf2Ai = await MetaCoin2go2MaM.sendCoin.call(addresshywAUK4, uintRdG2Dd, {from: accounts[0]});
		const uintW1ctuCI = await MetaCoin2go2MaM.getBalanceInEth.call(addressUhNnsTP, {from: accounts[4]});

		assert.equal(boolkabf2Ai, false)
		assert.equal(uintW1ctuCI, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2ntEDu7D = await MetaCoin2.new({from: accounts[2]});
		const uintcpBtdvl = BigInt("44")
		const addressDrWb0ll = accounts[5]
		const uintmv5hlTs = BigInt("177")
		const addressYK7RRvm = accounts[2]
		const addressCXpKmgz = accounts[3]
		const uintl1CLjbN = BigInt("527")
		const addressGQ3wdNg = "0x0000000000000000000000000000000000000001"
		const addressH24b67F = accounts[2]
		const booleyRHH3V = await MetaCoin2ntEDu7D.sendCoin.call(addressDrWb0ll, uintcpBtdvl, {from: accounts[1]});
		const boolr3vxzQ0 = await MetaCoin2ntEDu7D.sendCoin.call(addressYK7RRvm, uintmv5hlTs, {from: accounts[2]});
		const uint5Vzs8U = await MetaCoin2ntEDu7D.getBalance.call(addressCXpKmgz, {from: accounts[5]});
		const boolAvQmcYC = await MetaCoin2ntEDu7D.sendCoin.call(addressGQ3wdNg, uintl1CLjbN, {from: accounts[5]});
		const uintnhAnq14 = await MetaCoin2ntEDu7D.getBalanceInEth.call(addressH24b67F, {from: accounts[0]});

		assert.equal(boolAvQmcYC, false)
		assert.equal(booleyRHH3V, false)
		assert.equal(boolr3vxzQ0, true)
		assert.equal(uint5Vzs8U, BigInt("0"))
		assert.equal(uintnhAnq14, BigInt("20000"))
	});
})