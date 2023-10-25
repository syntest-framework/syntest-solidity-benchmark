const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractglAKA63 = await IERC20.new({from: accounts[3]});
		const spenderFMVBvsN = accounts[2]
		const ownerxD0N6zJ = accounts[4]
		const whohUE73cc = accounts[1]
		const nullJwOKbey = await contractglAKA63.allowance.call(ownerxD0N6zJ, spenderFMVBvsN, {from: accounts[0]});
		const nullVUKj2Z = await contractglAKA63.balanceOf.call(whohUE73cc, {from: accounts[1]});
	});
})