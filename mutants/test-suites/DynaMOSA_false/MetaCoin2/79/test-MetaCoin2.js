const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2VHaNOb = await MetaCoin2.new({from: accounts[3]});
		const addresswyHglvj = accounts[0]
		const addresswt2KeCu = accounts[4]
		const addressSpZP1rG = accounts[4]
		const uintTMiMzDz = BigInt("2007")
		const addressm2KWAYF = accounts[0]
		const addressxzbuWlH = accounts[4]
		const uintgZCJn08 = await MetaCoin2VHaNOb.getBalanceInEth.call(addresswyHglvj, {from: accounts[3]});
		const uinth6xebw = await MetaCoin2VHaNOb.getBalanceInEth.call(addresswt2KeCu, {from: accounts[4]});
		const uintiVF4mJo = await MetaCoin2VHaNOb.getBalanceInEth.call(addressSpZP1rG, {from: accounts[5]});
		const boolm9VxLZb = await MetaCoin2VHaNOb.sendCoin.call(addressm2KWAYF, uintTMiMzDz, {from: accounts[3]});
		const uintz15zIU = await MetaCoin2VHaNOb.getBalanceInEth.call(addressxzbuWlH, {from: accounts[3]});

		assert.equal(boolm9VxLZb, true)
		assert.equal(uintgZCJn08, BigInt("0"))
		assert.equal(uinth6xebw, BigInt("0"))
		assert.equal(uintiVF4mJo, BigInt("0"))
		assert.equal(uintz15zIU, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2J53ffCe = await MetaCoin2.new({from: accounts[2]});
		const addressBFHDUaA = accounts[2]
		const addressBETKhbg = accounts[1]
		const uintLdnwIpm = BigInt("440")
		const addressCjTxMxo = accounts[5]
		const uintUgMTABC = await MetaCoin2J53ffCe.getBalance.call(addressBFHDUaA, {from: accounts[5]});
		const uintaR4YSo = await MetaCoin2J53ffCe.getBalance.call(addressBETKhbg, {from: accounts[4]});
		const boolB42VwSr = await MetaCoin2J53ffCe.sendCoin.call(addressCjTxMxo, uintLdnwIpm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolB42VwSr, false)
		assert.equal(uintUgMTABC, BigInt("10000"))
		assert.equal(uintaR4YSo, BigInt("0"))
	});
})