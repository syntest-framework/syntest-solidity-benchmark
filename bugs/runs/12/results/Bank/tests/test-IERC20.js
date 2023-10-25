const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractB8lf5ca = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuePPanjcp = BigInt("1002")
		const toRbswDuE = accounts[4]
		const spenderxLOqZF = accounts[5]
		const owner5ImdpG = accounts[1]
		const valuemfN0EQG = BigInt("1401")
		const torQMYA7E = accounts[1]
		const fromD6N9Vp6 = accounts[0]
		const nulldQPQ2l3 = await contractB8lf5ca.transfer.call(toRbswDuE, valuePPanjcp, {from: accounts[2]});
		const nullVEq6eEc = await contractB8lf5ca.allowance.call(owner5ImdpG, spenderxLOqZF, {from: accounts[0]});
		const nullvvYxQ4t = await contractB8lf5ca.transferFrom.call(fromD6N9Vp6, torQMYA7E, valuemfN0EQG, {from: "0x0000000000000000000000000000000000000001"});
	});
})