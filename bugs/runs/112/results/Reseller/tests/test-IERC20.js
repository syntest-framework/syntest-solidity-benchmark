const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractrIlX7Y2 = await IERC20.new({from: accounts[2]});
		const valuerXUAqvt = BigInt("13")
		const toMHy2jQ0 = accounts[1]
		const fromowFXpcq = accounts[2]
		const valuesNoyDk3 = BigInt("562")
		const spenderOULN40 = accounts[2]
		const value8smyR8 = BigInt("1782")
		const spenderWfIluRN = accounts[0]
		const periodYJQxjvW = BigInt("644")
		const amountArq8AEM = BigInt("1151")
		const recipientCrPRWqq = accounts[0]
		const spenderAYLQtX = accounts[3]
		const owner7nAtbH = accounts[3]
		const nullhtFZpzk = await contractrIlX7Y2.transferFrom.call(fromowFXpcq, toMHy2jQ0, valuerXUAqvt, {from: accounts[2]});
		const nullLRupBJK = await contractrIlX7Y2.approve.call(spenderOULN40, valuesNoyDk3, {from: accounts[3]});
		const nullnBvu6Op = await contractrIlX7Y2.approve.call(spenderWfIluRN, value8smyR8, {from: "0x0000000000000000000000000000000000000001"});
		await contractrIlX7Y2.freezeAndTransfer.call(recipientCrPRWqq, amountArq8AEM, periodYJQxjvW, {from: accounts[3]});
		const nullNEORzI = await contractrIlX7Y2.allowance.call(owner7nAtbH, spenderAYLQtX, {from: accounts[1]});
	});
})