const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractYQ3HB6t = await IERC20.new({from: accounts[3]});
		const valuebaOhU5m = BigInt("172")
		const spenderN5XqwDf = accounts[0]
		const valueXKjJOT7 = BigInt("1294")
		const toB8aI8J1 = accounts[4]
		const valueFjuMFD9 = BigInt("1739")
		const toXJlRLuh = "0x0000000000000000000000000000000000000001"
		const fromkfApm6i = accounts[1]
		const whosGs42yn = accounts[1]
		const valuep3730LF = BigInt("1836")
		const fromxIceMOL = accounts[1]
		const nullaC6GW9Q = await contractYQ3HB6t.approve.call(spenderN5XqwDf, valuebaOhU5m, {from: accounts[2]});
		const nullDWEh6xl = await contractYQ3HB6t.mint.call(toB8aI8J1, valueXKjJOT7, {from: accounts[0]});
		const null62AHth = await contractYQ3HB6t.transferFrom.call(fromkfApm6i, toXJlRLuh, valueFjuMFD9, {from: accounts[2]});
		const nullyT29PlU = await contractYQ3HB6t.balanceOf.call(whosGs42yn, {from: accounts[3]});
		await contractYQ3HB6t.burnFrom.call(fromxIceMOL, valuep3730LF, {from: accounts[0]});
	});
})