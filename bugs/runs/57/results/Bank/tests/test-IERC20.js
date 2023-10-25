const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractANfXjeN = await IERC20.new({from: accounts[4]});
		const valueCN2A0bQ = BigInt("583")
		const spenderXy4yo4b = accounts[5]
		const whow6XZsAt = accounts[2]
		const nullsB0GMaG = await contractANfXjeN.approve.call(spenderXy4yo4b, valueCN2A0bQ, {from: accounts[3]});
		const nullIbHMNnd = await contractANfXjeN.balanceOf.call(whow6XZsAt, {from: accounts[0]});
		const nullMaBuh7k = await contractANfXjeN.totalSupply.call({from: accounts[0]});
	});
})