const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractbXutqad = await IERC20.new({from: accounts[5]});
		const spenderHqDFylp = accounts[4]
		const ownerRu4LZmR = accounts[2]
		const accountWf6fhI = accounts[4]
		const accountGpi5UY = accounts[3]
		const nullCysxh7F = await contractbXutqad.allowance.call(ownerRu4LZmR, spenderHqDFylp, {from: "0x0000000000000000000000000000000000000001"});
		const nulllz7NxdN = await contractbXutqad.balanceOf.call(accountWf6fhI, {from: accounts[2]});
		const nullA7nZGEl = await contractbXutqad.balanceOf.call(accountGpi5UY, {from: accounts[5]});
		const nullnaJDJT = await contractbXutqad.totalSupply.call({from: accounts[4]});
	});
})