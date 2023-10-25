const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractktDq6tV = await IERC20.new({from: accounts[0]});
		const whodTxPZwH = accounts[4]
		const valuevYHrPbk = BigInt("494")
		const toW6Ztooe = accounts[2]
		const whoZkAwQHa = accounts[2]
		const valueXslvthb = BigInt("941")
		const spenderwPcw4MH = accounts[5]
		const nullWI0L1Qk = await contractktDq6tV.balanceOf.call(whodTxPZwH, {from: accounts[4]});
		const nullEBjDvg = await contractktDq6tV.transfer.call(toW6Ztooe, valuevYHrPbk, {from: accounts[4]});
		const nullPAl5GGp = await contractktDq6tV.balanceOf.call(whoZkAwQHa, {from: accounts[1]});
		const nullstpLd7 = await contractktDq6tV.approve.call(spenderwPcw4MH, valueXslvthb, {from: accounts[4]});
	});
})