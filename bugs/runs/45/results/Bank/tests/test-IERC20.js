const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractH8CxxvJ = await IERC20.new({from: accounts[2]});
		const valueIjeZ5wD = BigInt("2047")
		const spenderQ5gkE2O = accounts[1]
		const spenderBmRPrjc = accounts[0]
		const ownersiETVeq = accounts[2]
		const whoepzTfXZ = accounts[1]
		const nullb1Te7sa = await contractH8CxxvJ.approve.call(spenderQ5gkE2O, valueIjeZ5wD, {from: accounts[1]});
		const nullQhUQOLr = await contractH8CxxvJ.allowance.call(ownersiETVeq, spenderBmRPrjc, {from: accounts[1]});
		const nullpq8Bylr = await contractH8CxxvJ.balanceOf.call(whoepzTfXZ, {from: accounts[2]});
	});
})