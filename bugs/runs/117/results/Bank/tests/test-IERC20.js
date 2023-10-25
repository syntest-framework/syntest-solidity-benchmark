const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracthS3KlRS = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spendertB5yIjk = accounts[4]
		const ownerXEoLGsg = accounts[1]
		const whoIjp0pA5 = accounts[1]
		const nullQfODhWx = await contracthS3KlRS.allowance.call(ownerXEoLGsg, spendertB5yIjk, {from: accounts[1]});
		const nullze13KIN = await contracthS3KlRS.balanceOf.call(whoIjp0pA5, {from: accounts[1]});
	});
})