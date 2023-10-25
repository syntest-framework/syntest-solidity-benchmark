const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2P5D6qxK = await MetaCoin2.new({from: accounts[4]});
		const addresshXnnPkY = accounts[3]
		const addressu40hd7I = accounts[5]
		const addressVcErRgX = accounts[4]
		const addressichLE3K = accounts[4]
		const uintJntZYkB = await MetaCoin2P5D6qxK.getBalance.call(addresshXnnPkY, {from: accounts[4]});
		const uintGjPBVGI = await MetaCoin2P5D6qxK.getBalance.call(addressu40hd7I, {from: accounts[0]});
		const uintQzOSa33 = await MetaCoin2P5D6qxK.getBalance.call(addressVcErRgX, {from: accounts[4]});
		const uintcc7lxbv = await MetaCoin2P5D6qxK.getBalanceInEth.call(addressichLE3K, {from: accounts[2]});

		assert.equal(uintGjPBVGI, BigInt("0"))
		assert.equal(uintJntZYkB, BigInt("0"))
		assert.equal(uintQzOSa33, BigInt("10000"))
		assert.equal(uintcc7lxbv, BigInt("20000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2kCxOzoY = await MetaCoin2.new({from: accounts[0]});
		const addressCIKZTm = accounts[5]
		const addressqnxUz1W = accounts[0]
		const addressWw4YDmA = accounts[5]
		const addressL5MpBYG = accounts[1]
		const uintyQCKPrE = BigInt("1658")
		const addressL4UuwAp = accounts[0]
		const uintxpS3TK = await MetaCoin2kCxOzoY.getBalanceInEth.call(addressCIKZTm, {from: accounts[5]});
		const uintWGeu5l = await MetaCoin2kCxOzoY.getBalance.call(addressqnxUz1W, {from: accounts[3]});
		const uintIl58uXP = await MetaCoin2kCxOzoY.getBalanceInEth.call(addressWw4YDmA, {from: accounts[2]});
		const uintLLJCx81 = await MetaCoin2kCxOzoY.getBalanceInEth.call(addressL5MpBYG, {from: accounts[3]});
		const boolowZ6N29 = await MetaCoin2kCxOzoY.sendCoin.call(addressL4UuwAp, uintyQCKPrE, {from: accounts[0]});

		assert.equal(boolowZ6N29, true)
		assert.equal(uintIl58uXP, BigInt("0"))
		assert.equal(uintLLJCx81, BigInt("0"))
		assert.equal(uintWGeu5l, BigInt("10000"))
		assert.equal(uintxpS3TK, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2s1msAQ = await MetaCoin2.new({from: accounts[5]});
		const addressI69yxAH = accounts[4]
		const addressKiHuOLl = accounts[3]
		const uintS5pOFCQ = BigInt("892")
		const addresswt3wfFo = accounts[3]
		const addressdANURIN = accounts[4]
		const uintP4wmiS = BigInt("1607")
		const addressbsbpFI7 = accounts[4]
		const addressunYdFW9 = accounts[0]
		const uintK9HYiwI = await MetaCoin2s1msAQ.getBalanceInEth.call(addressI69yxAH, {from: accounts[4]});
		const uintEfK1Nhv = await MetaCoin2s1msAQ.getBalanceInEth.call(addressKiHuOLl, {from: accounts[4]});
		const boolCmArm91 = await MetaCoin2s1msAQ.sendCoin.call(addresswt3wfFo, uintS5pOFCQ, {from: accounts[2]});
		const uintBFRbMyo = await MetaCoin2s1msAQ.getBalanceInEth.call(addressdANURIN, {from: accounts[0]});
		const bool4HqAzU = await MetaCoin2s1msAQ.sendCoin.call(addressbsbpFI7, uintP4wmiS, {from: accounts[0]});
		const uintwi6fT4S = await MetaCoin2s1msAQ.getBalance.call(addressunYdFW9, {from: accounts[2]});

		assert.equal(bool4HqAzU, false)
		assert.equal(boolCmArm91, false)
		assert.equal(uintBFRbMyo, BigInt("0"))
		assert.equal(uintEfK1Nhv, BigInt("0"))
		assert.equal(uintK9HYiwI, BigInt("0"))
		assert.equal(uintwi6fT4S, BigInt("0"))
	});
})