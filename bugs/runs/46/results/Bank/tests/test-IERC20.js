const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractdwzh7fy = await IERC20.new({from: accounts[0]});
		const valueumP7WPs = BigInt("591")
		const toSO01itF = accounts[4]
		const spenderWaS5uG = accounts[2]
		const ownerhk89ro = accounts[1]
		const whoCi3VN2z = accounts[0]
		const valueduneAJ2 = BigInt("601")
		const spenderHvtGsLp = accounts[1]
		const nullbABIYkr = await contractdwzh7fy.transfer.call(toSO01itF, valueumP7WPs, {from: accounts[2]});
		const nullhWsJce5 = await contractdwzh7fy.allowance.call(ownerhk89ro, spenderWaS5uG, {from: accounts[3]});
		const nullz4i1Q7L = await contractdwzh7fy.balanceOf.call(whoCi3VN2z, {from: accounts[0]});
		const nullF0JJbIC = await contractdwzh7fy.approve.call(spenderHvtGsLp, valueduneAJ2, {from: accounts[0]});
		const nullsR2o389 = await contractdwzh7fy.totalSupply.call({from: accounts[4]});
	});
})