const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contracti7uDFu = await ERC20Interface.new({from: accounts[5]});
		const tokenOwner4CI2nQ = accounts[1]
		const spenderUcpJqV6 = accounts[3]
		const tokenOwnerWmE03Bh = accounts[2]
		const spenderU0YhtGu = accounts[1]
		const tokenOwnerWykmuNC = accounts[0]
		const tokensb7ejEPM = BigInt("959")
		const spenderxH3hUxo = accounts[1]
		const tokenspYHk66r = BigInt("408")
		const tob3qHBaG = accounts[0]
		const balanceBLqvsZQ = await contracti7uDFu.balanceOf.call(tokenOwner4CI2nQ, {from: accounts[3]});
		const remainingA3LmdxA = await contracti7uDFu.allowance.call(tokenOwnerWmE03Bh, spenderUcpJqV6, {from: accounts[5]});
		const remainingnM3AuhG = await contracti7uDFu.allowance.call(tokenOwnerWykmuNC, spenderU0YhtGu, {from: accounts[0]});
		const successPUXO7Li = await contracti7uDFu.approve.call(spenderxH3hUxo, tokensb7ejEPM, {from: accounts[3]});
		const successKvkvIib = await contracti7uDFu.transfer.call(tob3qHBaG, tokenspYHk66r, {from: accounts[4]});
	});
})