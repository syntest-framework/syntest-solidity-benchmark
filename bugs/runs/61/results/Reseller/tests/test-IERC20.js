const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractGIDI0e = await IERC20.new({from: accounts[0]});
		const valueLUlWoDJ = BigInt("803")
		const toFBmCY6p = accounts[3]
		const fromfyGxu8n = accounts[3]
		const whoDRcDupT = accounts[1]
		const valueciypEm = BigInt("1752")
		const spenderqmPVSyk = accounts[0]
		const nullQ2aBaDe = await contractGIDI0e.transferFrom.call(fromfyGxu8n, toFBmCY6p, valueLUlWoDJ, {from: accounts[4]});
		const nullplzvNw5 = await contractGIDI0e.balanceOf.call(whoDRcDupT, {from: "0x0000000000000000000000000000000000000001"});
		const nulla2lPfeN = await contractGIDI0e.approve.call(spenderqmPVSyk, valueciypEm, {from: accounts[1]});
	});
})