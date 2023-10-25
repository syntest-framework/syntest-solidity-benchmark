const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contract9Zapg4 = await ERC20Interface.new({from: accounts[3]});
		const tokensVv9lECj = BigInt("511")
		const spenderl9GbdXw = accounts[1]
		const tokensLII7SVA = BigInt("1704")
		const to0FLyII = accounts[0]
		const fromleFU58E = "0x0000000000000000000000000000000000000001"
		const tokensyC7wAFD = BigInt("35")
		const tolHJghTW = accounts[3]
		const tokenOwnerFgFfikr = accounts[0]
		const successoU0LaC7 = await contract9Zapg4.approve.call(spenderl9GbdXw, tokensVv9lECj, {from: accounts[3]});
		const successgt8eoms = await contract9Zapg4.transferFrom.call(fromleFU58E, to0FLyII, tokensLII7SVA, {from: accounts[0]});
		const successcRyPiBw = await contract9Zapg4.transfer.call(tolHJghTW, tokensyC7wAFD, {from: accounts[2]});
		const balanceyjdYzlO = await contract9Zapg4.balanceOf.call(tokenOwnerFgFfikr, {from: accounts[3]});
	});
})