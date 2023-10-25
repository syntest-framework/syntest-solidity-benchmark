const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2iA5Zz8u = await MetaCoin2.new({from: accounts[5]});
		const addressCawznJs = accounts[0]
		const addressDCLT5C = accounts[2]
		const addresspUFuCfJ = accounts[3]
		const uintqwIPkJw = await MetaCoin2iA5Zz8u.getBalanceInEth.call(addressCawznJs, {from: accounts[0]});
		const uintOUTost = await MetaCoin2iA5Zz8u.getBalanceInEth.call(addressDCLT5C, {from: accounts[1]});
		const uintn052e8Y = await MetaCoin2iA5Zz8u.getBalanceInEth.call(addresspUFuCfJ, {from: accounts[4]});

		assert.equal(uintOUTost, BigInt("0"))
		assert.equal(uintn052e8Y, BigInt("0"))
		assert.equal(uintqwIPkJw, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2vKXHoCZ = await MetaCoin2.new({from: accounts[4]});
		const uintxz6H0Ft = BigInt("1144")
		const addressheYPHjE = accounts[4]
		const addressDPHeagC = accounts[5]
		const uintMJwKcUJ = BigInt("415")
		const addressxnlCL3P = accounts[2]
		const boolKH68Dnk = await MetaCoin2vKXHoCZ.sendCoin.call(addressheYPHjE, uintxz6H0Ft, {from: accounts[4]});
		const uintpfJAjg = await MetaCoin2vKXHoCZ.getBalance.call(addressDPHeagC, {from: accounts[0]});
		const boolS6Ajhnm = await MetaCoin2vKXHoCZ.sendCoin.call(addressxnlCL3P, uintMJwKcUJ, {from: accounts[1]});

		assert.equal(boolKH68Dnk, true)
		assert.equal(boolS6Ajhnm, false)
		assert.equal(uintpfJAjg, BigInt("0"))
	});
})