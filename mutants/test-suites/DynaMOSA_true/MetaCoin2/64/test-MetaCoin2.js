const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2zfPSc9q = await MetaCoin2.new({from: accounts[0]});
		const addressXE8ciGH = accounts[3]
		const addressJ2EQ3pY = accounts[2]
		const uintdgg7o9B = BigInt("627")
		const addresswrLY8js = accounts[1]
		const addressODLcQlw = accounts[1]
		const uintT3LdFRk = await MetaCoin2zfPSc9q.getBalance.call(addressXE8ciGH, {from: accounts[3]});
		const uintFuUsDXz = await MetaCoin2zfPSc9q.getBalanceInEth.call(addressJ2EQ3pY, {from: accounts[1]});
		const boolPzcHwxd = await MetaCoin2zfPSc9q.sendCoin.call(addresswrLY8js, uintdgg7o9B, {from: accounts[2]});
		const uintBd9qCP3 = await MetaCoin2zfPSc9q.getBalance.call(addressODLcQlw, {from: accounts[1]});

		assert.equal(boolPzcHwxd, false)
		assert.equal(uintBd9qCP3, BigInt("0"))
		assert.equal(uintFuUsDXz, BigInt("0"))
		assert.equal(uintT3LdFRk, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2oMLn7eS = await MetaCoin2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXOqVs41 = accounts[0]
		const addressjUE0MH = "0x0000000000000000000000000000000000000001"
		const addresszCMcwur = accounts[4]
		const uintvZ0nptS = BigInt("401")
		const addresstivOJXy = accounts[3]
		const addressfXhb7P = "0x0000000000000000000000000000000000000001"
		const uintfPLGLVK = await MetaCoin2oMLn7eS.getBalanceInEth.call(addressXOqVs41, {from: accounts[0]});
		const uintaUQlY3w = await MetaCoin2oMLn7eS.getBalanceInEth.call(addressjUE0MH, {from: accounts[0]});
		const uintzdXKTQD = await MetaCoin2oMLn7eS.getBalance.call(addresszCMcwur, {from: accounts[1]});
		const boolaE6sJRj = await MetaCoin2oMLn7eS.sendCoin.call(addresstivOJXy, uintvZ0nptS, {from: accounts[0]});
		const uintzR15dh2 = await MetaCoin2oMLn7eS.getBalanceInEth.call(addressfXhb7P, {from: accounts[4]});
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2MAprz6p = await MetaCoin2.new({from: accounts[0]});
		const addressfZNYbbL = accounts[1]
		const uintpuSXWVU = BigInt("1484")
		const addressgcXGnan = accounts[0]
		const uintlwz5Mv = BigInt("1921")
		const addressojy0jYD = accounts[5]
		const addressjtsSFJU = accounts[2]
		const addresscMwps0H = accounts[3]
		const uintq9ztcjH = await MetaCoin2MAprz6p.getBalanceInEth.call(addressfZNYbbL, {from: accounts[3]});
		const boolXZ93mxp = await MetaCoin2MAprz6p.sendCoin.call(addressgcXGnan, uintpuSXWVU, {from: accounts[0]});
		const boolRQMDKT = await MetaCoin2MAprz6p.sendCoin.call(addressojy0jYD, uintlwz5Mv, {from: accounts[2]});
		const uintXxLNyp4 = await MetaCoin2MAprz6p.getBalanceInEth.call(addressjtsSFJU, {from: accounts[0]});
		const uintBQCwr5d = await MetaCoin2MAprz6p.getBalanceInEth.call(addresscMwps0H, {from: accounts[4]});

		assert.equal(boolRQMDKT, false)
		assert.equal(boolXZ93mxp, true)
		assert.equal(uintBQCwr5d, BigInt("0"))
		assert.equal(uintXxLNyp4, BigInt("0"))
		assert.equal(uintq9ztcjH, BigInt("0"))
	});
})