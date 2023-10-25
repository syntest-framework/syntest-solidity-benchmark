const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractn2pIqbK = await IERC20.new({from: accounts[2]});
		const whoCEkHX0 = accounts[3]
		const valuesuHg52o = BigInt("1591")
		const spendersx2eJpG = accounts[1]
		const nullRBxsip0 = await contractn2pIqbK.balanceOf.call(whoCEkHX0, {from: accounts[2]});
		const nullYLcnTUe = await contractn2pIqbK.approve.call(spendersx2eJpG, valuesuHg52o, {from: accounts[2]});
	});
})