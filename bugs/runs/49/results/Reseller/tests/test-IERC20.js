const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractLCWroKv = await IERC20.new({from: accounts[1]});
		const valuecD26W90 = BigInt("1649")
		const toBQunvAj = accounts[1]
		const valuesZDZ95e = BigInt("1246")
		const fromNWlYTVq = accounts[3]
		const nullGhx1P3G = await contractLCWroKv.mint.call(toBQunvAj, valuecD26W90, {from: accounts[2]});
		const nullkZW4xf6 = await contractLCWroKv.totalSupply.call({from: accounts[5]});
		await contractLCWroKv.burnFrom.call(fromNWlYTVq, valuesZDZ95e, {from: accounts[4]});
	});
})