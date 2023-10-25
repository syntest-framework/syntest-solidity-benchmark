const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractiuc39ab = await IERC20.new({from: accounts[3]});
		const amountukroI1o = BigInt("76")
		const recipientIIPexx5 = accounts[1]
		const amountgLEHqOX = BigInt("603")
		const recipientoPstkKr = accounts[3]
		const senderT75yVLM = accounts[5]
		const accountNBwRO7A = accounts[5]
		const spenderjbTxHy2 = accounts[3]
		const ownerPOXXfIY = accounts[0]
		const accountIhgEI9I = accounts[2]
		const amountQ0aG69Q = BigInt("1917")
		const recipienta7NsLqM = accounts[0]
		const nullB1TSDuR = await contractiuc39ab.transfer.call(recipientIIPexx5, amountukroI1o, {from: accounts[3]});
		const nullE6NCBa8 = await contractiuc39ab.transferFrom.call(senderT75yVLM, recipientoPstkKr, amountgLEHqOX, {from: accounts[3]});
		const nullHF9K4Yj = await contractiuc39ab.balanceOf.call(accountNBwRO7A, {from: accounts[3]});
		const nullSe0cbSQ = await contractiuc39ab.allowance.call(ownerPOXXfIY, spenderjbTxHy2, {from: accounts[0]});
		const nulligp5AN7 = await contractiuc39ab.balanceOf.call(accountIhgEI9I, {from: accounts[1]});
		const nullda0pjYv = await contractiuc39ab.transfer.call(recipienta7NsLqM, amountQ0aG69Q, {from: accounts[2]});
	});
})