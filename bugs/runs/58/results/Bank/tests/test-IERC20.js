const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractRDqUECK = await IERC20.new({from: accounts[1]});
		const who4L12k2 = accounts[0]
		const whoiuRgC4E = accounts[4]
		const nullNiwfbJV = await contractRDqUECK.balanceOf.call(who4L12k2, {from: accounts[2]});
		const nullMgHxlhl = await contractRDqUECK.balanceOf.call(whoiuRgC4E, {from: accounts[2]});
	});
})