const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractMqzHYc5 = await IERC20.new({from: accounts[3]});
		const valueReEYVi = BigInt("1657")
		const spenderq6yFEgp = accounts[3]
		const valuenGSHAT = BigInt("45")
		const spenderol91mLg = accounts[0]
		const nullBdNQ33g = await contractMqzHYc5.approve.call(spenderq6yFEgp, valueReEYVi, {from: accounts[4]});
		const nullWSGSdg4 = await contractMqzHYc5.approve.call(spenderol91mLg, valuenGSHAT, {from: accounts[0]});
	});
})