const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractXIINiZ = await IERC20.new({from: accounts[0]});
		const valueZ7fplHi = BigInt("1257")
		const fromK80rByY = accounts[4]
		const whoD6N8XAf = accounts[2]
		const valuexywVY2d = BigInt("107")
		const tobGLFG4M = "0x0000000000000000000000000000000000000001"
		const value7KYSP3 = BigInt("140")
		const tozlE56q = accounts[3]
		await contractXIINiZ.burnFrom.call(fromK80rByY, valueZ7fplHi, {from: accounts[0]});
		const nullFkgjjl = await contractXIINiZ.balanceOf.call(whoD6N8XAf, {from: accounts[5]});
		const nullS4mbMio = await contractXIINiZ.mint.call(tobGLFG4M, valuexywVY2d, {from: "0x0000000000000000000000000000000000000001"});
		const null3q5zc1 = await contractXIINiZ.mint.call(tozlE56q, value7KYSP3, {from: accounts[0]});
	});
})