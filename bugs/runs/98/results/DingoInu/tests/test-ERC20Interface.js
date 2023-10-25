const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractJ6Kpz9x = await ERC20Interface.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderyyHJfi2 = accounts[2]
		const tokenOwnerTnPRdiH = accounts[4]
		const tokenOwnerbMrNrc = accounts[4]
		const remainingNM3Acdg = await contractJ6Kpz9x.allowance.call(tokenOwnerTnPRdiH, spenderyyHJfi2, {from: accounts[1]});
		const balancel69fEoS = await contractJ6Kpz9x.balanceOf.call(tokenOwnerbMrNrc, {from: accounts[4]});
	});
})