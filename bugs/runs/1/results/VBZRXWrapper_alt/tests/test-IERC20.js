const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractXtAVHm9 = await IERC20.new({from: accounts[4]});
		const amountq5dQZdU = BigInt("1819")
		const recipientDsK5ucH = accounts[0]
		const senderdTmOEg5 = accounts[4]
		const amountcUC4fZH = BigInt("255")
		const recipientYdD8od9 = accounts[5]
		const nullGGSjJ6a = await contractXtAVHm9.transferFrom.call(senderdTmOEg5, recipientDsK5ucH, amountq5dQZdU, {from: accounts[4]});
		const nullOWomwW = await contractXtAVHm9.transfer.call(recipientYdD8od9, amountcUC4fZH, {from: accounts[1]});
	});
})