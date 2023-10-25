const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractLFFcxne = await ERC20Interface.new({from: accounts[3]});
		const spenderrDuAhiH = accounts[3]
		const tokenOwnerehPooiO = accounts[3]
		const tokensnthVNRI = BigInt("1939")
		const spenderuVzceA = accounts[0]
		const nullfYIqNLf = await contractLFFcxne.totalSupply.call({from: accounts[3]});
		const remainingwjyG60E = await contractLFFcxne.allowance.call(tokenOwnerehPooiO, spenderrDuAhiH, {from: "0x0000000000000000000000000000000000000001"});
		const successxv54wks = await contractLFFcxne.approve.call(spenderuVzceA, tokensnthVNRI, {from: accounts[3]});
	});
})