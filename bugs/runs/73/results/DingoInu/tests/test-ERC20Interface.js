const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractbOBHWgM = await ERC20Interface.new({from: accounts[1]});
		const tokens797EfK = BigInt("1638")
		const to1HPn0P = accounts[4]
		const spenderNtIO18q = accounts[1]
		const tokenOwnerLCmcfqc = accounts[3]
		const successpJCvbG3 = await contractbOBHWgM.transfer.call(to1HPn0P, tokens797EfK, {from: "0x0000000000000000000000000000000000000001"});
		const remainingdGP66yF = await contractbOBHWgM.allowance.call(tokenOwnerLCmcfqc, spenderNtIO18q, {from: accounts[4]});
	});
})