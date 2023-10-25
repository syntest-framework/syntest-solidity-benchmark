const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2nSJncXA = await MetaCoin2.new({from: accounts[0]});
		const addresswPG9J0Q = accounts[1]
		const addressUhL8XEx = accounts[0]
		const uintGL3Wzj3 = await MetaCoin2nSJncXA.getBalanceInEth.call(addresswPG9J0Q, {from: accounts[1]});
		const uintxDX4OVP = await MetaCoin2nSJncXA.getBalance.call(addressUhL8XEx, {from: accounts[0]});

		assert.equal(uintGL3Wzj3, BigInt("0"))
		assert.equal(uintxDX4OVP, BigInt("10000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2zk1ssZm = await MetaCoin2.new({from: accounts[0]});
		const addressJYCy7w7 = "0x0000000000000000000000000000000000000001"
		const uintGfLVggl = BigInt("594")
		const addresskRJfsHZ = "0x0000000000000000000000000000000000000001"
		const uintkZGQtEv = await MetaCoin2zk1ssZm.getBalanceInEth.call(addressJYCy7w7, {from: accounts[4]});
		const bool1Fv8Ak = await MetaCoin2zk1ssZm.sendCoin.call(addresskRJfsHZ, uintGfLVggl, {from: accounts[0]});

		assert.equal(bool1Fv8Ak, true)
		assert.equal(uintkZGQtEv, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2Xc0YpOp = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressod7TSA8 = accounts[1]
		const uintqB9NOq2 = BigInt("740")
		const addressJTcPXSx = accounts[1]
		const uinta6c7qXm = BigInt("441")
		const addressgvsxc47 = accounts[1]
		const addressJHCOJIF = accounts[4]
		const uintSZJ4X5L = BigInt("688")
		const addressRzMaR47 = accounts[2]
		const uintAddJkOA = BigInt("1671")
		const addressnfsCVlB = accounts[1]
		const uinthT4feH4 = await MetaCoin2Xc0YpOp.getBalanceInEth.call(addressod7TSA8, {from: accounts[4]});
		const boollMOoA83 = await MetaCoin2Xc0YpOp.sendCoin.call(addressJTcPXSx, uintqB9NOq2, {from: accounts[2]});
		const boolMnOc6dz = await MetaCoin2Xc0YpOp.sendCoin.call(addressgvsxc47, uinta6c7qXm, {from: accounts[1]});
		const uinteQpH6Il = await MetaCoin2Xc0YpOp.getBalanceInEth.call(addressJHCOJIF, {from: "0x0000000000000000000000000000000000000001"});
		const boolT6IcEkx = await MetaCoin2Xc0YpOp.sendCoin.call(addressRzMaR47, uintSZJ4X5L, {from: accounts[3]});
		const boolfMhoRi0 = await MetaCoin2Xc0YpOp.sendCoin.call(addressnfsCVlB, uintAddJkOA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2uVHHX2D = await MetaCoin2.new({from: accounts[2]});
		const address2Cl2TF = "0x0000000000000000000000000000000000000001"
		const uintRbk03kT = BigInt("2010")
		const addressWBLQnM9 = accounts[5]
		const uintAq2eqig = await MetaCoin2uVHHX2D.getBalanceInEth.call(address2Cl2TF, {from: "0x0000000000000000000000000000000000000001"});
		const boolp39LVLY = await MetaCoin2uVHHX2D.sendCoin.call(addressWBLQnM9, uintRbk03kT, {from: accounts[0]});

		assert.equal(boolp39LVLY, false)
		assert.equal(uintAq2eqig, BigInt("0"))
	});
})