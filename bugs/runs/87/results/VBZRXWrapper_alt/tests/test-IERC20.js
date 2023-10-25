const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractU3mp4AQ = await IERC20.new({from: accounts[3]});
		const spendertvzJ61v = accounts[0]
		const owner3lhO3x = accounts[1]
		const spenderoU4ys4 = accounts[2]
		const ownerVKfj1f8 = accounts[2]
		const spenderJaCzUI = accounts[1]
		const owners4fosvx = accounts[0]
		const spenderGeSOuel = accounts[1]
		const ownervQIygYW = accounts[4]
		const nullQ5PwEXn = await contractU3mp4AQ.allowance.call(owner3lhO3x, spendertvzJ61v, {from: accounts[2]});
		const nulle727mV = await contractU3mp4AQ.allowance.call(ownerVKfj1f8, spenderoU4ys4, {from: "0x0000000000000000000000000000000000000001"});
		const nullkyy5cNz = await contractU3mp4AQ.allowance.call(owners4fosvx, spenderJaCzUI, {from: accounts[4]});
		const nullX6H1t0I = await contractU3mp4AQ.allowance.call(ownervQIygYW, spenderGeSOuel, {from: accounts[3]});
	});
})