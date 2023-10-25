const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractjeMvZje = await ERC20Interface.new({from: accounts[2]});
		const tokensAeYbePp = BigInt("1288")
		const spenderX909Ok7 = accounts[2]
		const tokenOwnerMwTGeYd = accounts[4]
		const spenderK7Oxar = accounts[1]
		const tokenOwnerWu5b4DR = accounts[3]
		const successkKx1MKc = await contractjeMvZje.approve.call(spenderX909Ok7, tokensAeYbePp, {from: accounts[5]});
		const balanceqqyZ51 = await contractjeMvZje.balanceOf.call(tokenOwnerMwTGeYd, {from: accounts[0]});
		const remainingqURITnw = await contractjeMvZje.allowance.call(tokenOwnerWu5b4DR, spenderK7Oxar, {from: "0x0000000000000000000000000000000000000001"});
	});
})