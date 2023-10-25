const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractzdJLkAT = await ERC20Interface.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensSyqKa7n = BigInt("1784")
		const toNqG3pDY = accounts[3]
		const tokenOwnerxqhab9m = accounts[5]
		const successJTiYpyD = await contractzdJLkAT.transfer.call(toNqG3pDY, tokensSyqKa7n, {from: accounts[2]});
		const balancekTZf28u = await contractzdJLkAT.balanceOf.call(tokenOwnerxqhab9m, {from: accounts[2]});
	});
})