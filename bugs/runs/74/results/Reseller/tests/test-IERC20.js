const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractYE04Mz3 = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuehmvJyE = BigInt("1433")
		const fromHcYvqG = accounts[1]
		const valueUdxEhss = BigInt("38")
		const topbWUsq3 = accounts[4]
		await contractYE04Mz3.burnFrom.call(fromHcYvqG, valuehmvJyE, {from: accounts[5]});
		const nullgvCQByR = await contractYE04Mz3.mint.call(topbWUsq3, valueUdxEhss, {from: accounts[0]});
	});
})