const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2Cg72JGF = await MetaCoin2.new({from: accounts[2]});
		const uintW3iJEmr = BigInt("308")
		const addressdk7rocq = accounts[2]
		const addressLmoX1E = accounts[2]
		const addresszukUJZP = "0x0000000000000000000000000000000000000001"
		const boolwbMtn6m = await MetaCoin2Cg72JGF.sendCoin.call(addressdk7rocq, uintW3iJEmr, {from: accounts[5]});
		const uintpKg2vG = await MetaCoin2Cg72JGF.getBalance.call(addressLmoX1E, {from: accounts[4]});
		const uintcWR39jP = await MetaCoin2Cg72JGF.getBalanceInEth.call(addresszukUJZP, {from: accounts[2]});

		assert.equal(boolwbMtn6m, false)
		assert.equal(uintcWR39jP, BigInt("0"))
		assert.equal(uintpKg2vG, BigInt("10000"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2Cg72JGF = await MetaCoin2.new({from: accounts[2]});
		const uintqQ2Zm5v = BigInt("308")
		const addressOiEbwds = accounts[3]
		const uintuD6AfAx = BigInt("1202")
		const addressZWCSLLf = accounts[5]
		const addressppnLVls = "0x0000000000000000000000000000000000000000"
		const boolwbMtn6m = await MetaCoin2Cg72JGF.sendCoin.call(addressOiEbwds, uintqQ2Zm5v, {from: accounts[5]});
		const boolwOg4Ey = await MetaCoin2Cg72JGF.sendCoin.call(addressZWCSLLf, uintuD6AfAx, {from: accounts[2]});
		const uintcWR39jP = await MetaCoin2Cg72JGF.getBalanceInEth.call(addressppnLVls, {from: accounts[2]});

		assert.equal(boolwOg4Ey, true)
		assert.equal(boolwbMtn6m, false)
		assert.equal(uintcWR39jP, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2Cg72JGF = await MetaCoin2.new({from: accounts[2]});
		const uintfmVIQHs = BigInt("308")
		const addressfTBDk9 = accounts[2]
		const addressYrrOmJz = accounts[4]
		const addressiIQVsU2 = "0x00000000000000000000000000000000000000-1"
		const boolwbMtn6m = await MetaCoin2Cg72JGF.sendCoin.call(addressfTBDk9, uintfmVIQHs, {from: accounts[5]});
		const uintEPpuKVb = await MetaCoin2Cg72JGF.getBalance.call(addressYrrOmJz, {from: accounts[3]});
//		const uintcWR39jP = await MetaCoin2Cg72JGF.getBalanceInEth.call(addressiIQVsU2, {from: accounts[2]});

		assert.equal(boolwbMtn6m, false)
		assert.equal(uintEPpuKVb, BigInt("0"))
		await expect(MetaCoin2Cg72JGF.getBalanceInEth.call(addressiIQVsU2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})