const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractfYlOUA7 = await ERC20Interface.new({from: accounts[2]});
		const tokensbkfeJb = BigInt("1097")
		const tohIOCfd4 = accounts[4]
		const spenderfhi85dU = accounts[3]
		const tokenOwnerf2XVfJU = accounts[0]
		const tokenOwnerrgK693j = accounts[1]
		const nullXr5gJ9B = await contractfYlOUA7.totalSupply.call({from: accounts[1]});
		const successfryzW8L = await contractfYlOUA7.transfer.call(tohIOCfd4, tokensbkfeJb, {from: accounts[5]});
		const remainingr3mguyQ = await contractfYlOUA7.allowance.call(tokenOwnerf2XVfJU, spenderfhi85dU, {from: accounts[5]});
		const balanceyJVrQA6 = await contractfYlOUA7.balanceOf.call(tokenOwnerrgK693j, {from: accounts[4]});
	});
})