const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractb1iabPH = await ERC20Interface.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenOwnerofrxFjn = accounts[3]
		const spenderiiRgiD = accounts[2]
		const tokenOwnerNl7GMzk = accounts[3]
		const spenderkpV6Fgv = accounts[2]
		const tokenOwnerQi1wZc9 = accounts[4]
		const balanceqivn9p7 = await contractb1iabPH.balanceOf.call(tokenOwnerofrxFjn, {from: accounts[0]});
		const remainingmxk2hJv = await contractb1iabPH.allowance.call(tokenOwnerNl7GMzk, spenderiiRgiD, {from: accounts[4]});
		const remainingLaj9pbQ = await contractb1iabPH.allowance.call(tokenOwnerQi1wZc9, spenderkpV6Fgv, {from: accounts[3]});
	});
})