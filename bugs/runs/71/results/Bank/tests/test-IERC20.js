const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractOsKE7dk = await IERC20.new({from: accounts[3]});
		const valueON3iAV7 = BigInt("868")
		const tohw9EMtl = accounts[0]
		const wholGlHqY = accounts[4]
		const whoglkuw03 = "0x0000000000000000000000000000000000000001"
		const spenderVoYk5ky = "0x0000000000000000000000000000000000000001"
		const ownerJ3wrD2x = accounts[4]
		const nullvKOtp24 = await contractOsKE7dk.transfer.call(tohw9EMtl, valueON3iAV7, {from: accounts[3]});
		const nullEa2EMbt = await contractOsKE7dk.balanceOf.call(wholGlHqY, {from: accounts[5]});
		const nullt0qwXYb = await contractOsKE7dk.balanceOf.call(whoglkuw03, {from: accounts[2]});
		const nulltXHRYD = await contractOsKE7dk.allowance.call(ownerJ3wrD2x, spenderVoYk5ky, {from: accounts[5]});
	});
})