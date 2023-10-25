const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractNn75Zc8 = await IERC20.new({from: accounts[2]});
		const accountBwr57a = accounts[4]
		const accounthv3XojI = accounts[3]
		const amountcwIQxKF = BigInt("1951")
		const recipientAH6lmAf = "0x0000000000000000000000000000000000000001"
		const sender9wUyfd = accounts[0]
		const amountkXGeZ2 = BigInt("95")
		const recipientsGgYMwJ = accounts[3]
		const senderZn58bT0 = accounts[4]
		const nullIvFRBgu = await contractNn75Zc8.balanceOf.call(accountBwr57a, {from: accounts[0]});
		const nullYUTVVUj = await contractNn75Zc8.balanceOf.call(accounthv3XojI, {from: accounts[0]});
		const null7XMSuN = await contractNn75Zc8.transferFrom.call(sender9wUyfd, recipientAH6lmAf, amountcwIQxKF, {from: accounts[1]});
		const nullsihSDb = await contractNn75Zc8.transferFrom.call(senderZn58bT0, recipientsGgYMwJ, amountkXGeZ2, {from: accounts[0]});
	});
})