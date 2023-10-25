const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractyb0tgoa = await ERC20Interface.new({from: accounts[4]});
		const tokenOwnerHCzLDZH = accounts[4]
		const tokensvOPVdM4 = BigInt("1377")
		const too3u34M = accounts[3]
		const spenderKqhoLg = accounts[5]
		const tokenOwnerWnpvmy1 = accounts[2]
		const balancetJ4EQav = await contractyb0tgoa.balanceOf.call(tokenOwnerHCzLDZH, {from: accounts[4]});
		const successKv8xTzj = await contractyb0tgoa.transfer.call(too3u34M, tokensvOPVdM4, {from: accounts[4]});
		const remainingjcI0Pzb = await contractyb0tgoa.allowance.call(tokenOwnerWnpvmy1, spenderKqhoLg, {from: accounts[1]});
	});
})