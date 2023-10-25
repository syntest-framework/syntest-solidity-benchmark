const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractCENcMz3 = await IERC20.new({from: accounts[2]});
		const whoztZMUgv = "0x0000000000000000000000000000000000000001"
		const whoATOcc2 = accounts[0]
		const spenderEYOE3Y0 = accounts[2]
		const ownerAvDPBy = accounts[3]
		const nullbkp6MSg = await contractCENcMz3.balanceOf.call(whoztZMUgv, {from: accounts[2]});
		const nulloHAbzyO = await contractCENcMz3.balanceOf.call(whoATOcc2, {from: accounts[5]});
		const nulljrpJ2xy = await contractCENcMz3.allowance.call(ownerAvDPBy, spenderEYOE3Y0, {from: accounts[3]});
		const nullsjZa9d8 = await contractCENcMz3.totalSupply.call({from: accounts[3]});
	});
})