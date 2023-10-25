const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractyP3p4TI = await ERC20Interface.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenOwner8RuLqx = accounts[5]
		const tokensUS2Rp3F = BigInt("1696")
		const toHtdw4J = accounts[4]
		const nullWuSZMEW = await contractyP3p4TI.totalSupply.call({from: accounts[1]});
		const nullCBtD5l4 = await contractyP3p4TI.totalSupply.call({from: accounts[0]});
		const balanceRyIVgF = await contractyP3p4TI.balanceOf.call(tokenOwner8RuLqx, {from: accounts[4]});
		const successuKvXiY6 = await contractyP3p4TI.transfer.call(toHtdw4J, tokensUS2Rp3F, {from: accounts[3]});
	});
})