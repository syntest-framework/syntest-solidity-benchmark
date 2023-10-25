const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractjXqSOY = await IERC20.new({from: accounts[4]});
		const whofFZvYKv = accounts[4]
		const spenderRwlGt6w = accounts[0]
		const ownereKkx7X8 = accounts[4]
		const nullcB32Yst = await contractjXqSOY.balanceOf.call(whofFZvYKv, {from: accounts[3]});
		const nullQ58eqk2 = await contractjXqSOY.totalSupply.call({from: accounts[4]});
		const nullRiVjKw = await contractjXqSOY.allowance.call(ownereKkx7X8, spenderRwlGt6w, {from: accounts[2]});
	});
})