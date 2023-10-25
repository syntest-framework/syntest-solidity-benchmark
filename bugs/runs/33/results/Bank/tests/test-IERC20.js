const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractioaUCpX = await IERC20.new({from: accounts[3]});
		const valuejwoPT3O = BigInt("1379")
		const torBCPogB = accounts[3]
		const spenderskoP0s4 = accounts[2]
		const ownerU8XJu3 = accounts[0]
		const nulloN5ESYG = await contractioaUCpX.transfer.call(torBCPogB, valuejwoPT3O, {from: accounts[0]});
		const nullw92nHSs = await contractioaUCpX.allowance.call(ownerU8XJu3, spenderskoP0s4, {from: "0x0000000000000000000000000000000000000001"});
	});
})