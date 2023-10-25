const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractnpKpZ86 = await ERC20Interface.new({from: accounts[4]});
		const tokenOwnercl4LjRq = accounts[3]
		const spendervdUHmoh = accounts[2]
		const tokenOwnerWi13lQd = accounts[3]
		const tokenOwnerTPPnaFD = accounts[0]
		const tokensJIgJcm = BigInt("1740")
		const tosrlGE00 = accounts[0]
		const balanceEu1IW43 = await contractnpKpZ86.balanceOf.call(tokenOwnercl4LjRq, {from: accounts[0]});
		const remainingN0ZMO1e = await contractnpKpZ86.allowance.call(tokenOwnerWi13lQd, spendervdUHmoh, {from: accounts[0]});
		const balanceGYYwnG = await contractnpKpZ86.balanceOf.call(tokenOwnerTPPnaFD, {from: accounts[2]});
		const successBKZmQod = await contractnpKpZ86.transfer.call(tosrlGE00, tokensJIgJcm, {from: accounts[2]});
	});
})