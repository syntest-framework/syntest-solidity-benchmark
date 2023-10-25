const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractwTnjjvv = await IUSDT.new({from: accounts[3]});
		const accountpbBIrJ4 = accounts[4]
		const amountZrLuOb2 = BigInt("1798")
		const spenderYEE0JHt = "0x0000000000000000000000000000000000000001"
		const accountlD5PsrZ = accounts[2]
		const amounthiSYals = BigInt("940")
		const spenderOyrS2W = accounts[3]
		const nullFdVVHrq = await contractwTnjjvv.balanceOf.call(accountpbBIrJ4, {from: accounts[3]});
		await contractwTnjjvv.approve.call(spenderYEE0JHt, amountZrLuOb2, {from: accounts[1]});
		const nullAIihf4C = await contractwTnjjvv.balanceOf.call(accountlD5PsrZ, {from: accounts[1]});
		await contractwTnjjvv.approve.call(spenderOyrS2W, amounthiSYals, {from: accounts[0]});
	});
})