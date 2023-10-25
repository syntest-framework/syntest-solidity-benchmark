const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractHmbNZ4h = await IERC20.new({from: accounts[3]});
		const whoK3hfJNz = accounts[1]
		const valuetnfwKoZ = BigInt("1199")
		const toZnMj0be = accounts[0]
		const whoRWmCKKh = accounts[3]
		const valuedssOqJg = BigInt("133")
		const toMnx6ave = accounts[0]
		const valueHo3ZXwv = BigInt("985")
		const totrIkMvr = accounts[4]
		const nullXIV3EuW = await contractHmbNZ4h.balanceOf.call(whoK3hfJNz, {from: accounts[4]});
		const nullzsZsPQ2 = await contractHmbNZ4h.transfer.call(toZnMj0be, valuetnfwKoZ, {from: accounts[1]});
		const nullNRBqpd = await contractHmbNZ4h.balanceOf.call(whoRWmCKKh, {from: accounts[1]});
		const nullr5g8yma = await contractHmbNZ4h.mint.call(toMnx6ave, valuedssOqJg, {from: accounts[0]});
		const nullQPQIewq = await contractHmbNZ4h.mint.call(totrIkMvr, valueHo3ZXwv, {from: accounts[4]});
	});
})