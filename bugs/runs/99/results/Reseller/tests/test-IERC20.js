const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractnOUR3ZF = await IERC20.new({from: accounts[2]});
		const valueG0WZC92 = BigInt("1668")
		const fromxwq5OKz = accounts[4]
		const valueLQTMkQq = BigInt("1611")
		const spenderEjWJ2Nz = accounts[4]
		const spenderEJQOP0v = accounts[1]
		const ownerT3VARJg = accounts[4]
		const valueBGJDnCu = BigInt("1479")
		const toGqqj98j = "0x0000000000000000000000000000000000000001"
		const valueVfcv25r = BigInt("478")
		const fromNKXweMT = accounts[2]
		await contractnOUR3ZF.burnFrom.call(fromxwq5OKz, valueG0WZC92, {from: accounts[1]});
		const nulljgrYfdf = await contractnOUR3ZF.approve.call(spenderEjWJ2Nz, valueLQTMkQq, {from: accounts[5]});
		const nullKhDk978 = await contractnOUR3ZF.allowance.call(ownerT3VARJg, spenderEJQOP0v, {from: accounts[3]});
		const nullZ6N64g9 = await contractnOUR3ZF.mint.call(toGqqj98j, valueBGJDnCu, {from: accounts[2]});
		await contractnOUR3ZF.burnFrom.call(fromNKXweMT, valueVfcv25r, {from: accounts[0]});
	});
})