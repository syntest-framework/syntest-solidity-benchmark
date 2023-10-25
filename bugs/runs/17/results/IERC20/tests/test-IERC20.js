const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracto6knEQ = await IERC20.new({from: accounts[2]});
		const spenderyGF7niC = accounts[1]
		const ownerMPW5nvw = accounts[4]
		const spendern5cstit = accounts[0]
		const ownerkrKDUT = accounts[3]
		const valuex6RIu61 = BigInt("932")
		const spenderhQR97Za = accounts[5]
		const nullp8PGIbd = await contracto6knEQ.totalSupply.call({from: accounts[2]});
		const nullQc6HqRx = await contracto6knEQ.allowance.call(ownerMPW5nvw, spenderyGF7niC, {from: accounts[3]});
		const nullLY6dyuo = await contracto6knEQ.allowance.call(ownerkrKDUT, spendern5cstit, {from: accounts[3]});
		const nullnLhE5T = await contracto6knEQ.approve.call(spenderhQR97Za, valuex6RIu61, {from: "0x0000000000000000000000000000000000000001"});
	});
})