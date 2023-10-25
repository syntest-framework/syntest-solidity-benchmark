const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractfHv1jC = await IERC20.new({from: accounts[2]});
		const whoyiTfQKi = accounts[0]
		const valueCMpfM7M = BigInt("1721")
		const toxuZGdWS = accounts[2]
		const fromm2UfeMB = accounts[4]
		const nulls6LMXyV = await contractfHv1jC.balanceOf.call(whoyiTfQKi, {from: accounts[4]});
		const nullxMrTolK = await contractfHv1jC.transferFrom.call(fromm2UfeMB, toxuZGdWS, valueCMpfM7M, {from: accounts[2]});
	});
})