const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractNNyiRid = await IUSDT.new({from: accounts[1]});
		const accountYhhoSB5 = accounts[4]
		const spenderQ8TbkwU = accounts[4]
		const ownerNttYqHM = accounts[3]
		const amountXoTCyJ0 = BigInt("1867")
		const spenderK2CTav8 = accounts[0]
		const amountOiZC6Mx = BigInt("794")
		const recipientCr8hvc = "0x0000000000000000000000000000000000000001"
		const senderdwUYPKE = accounts[1]
		const amountCKBCFvI = BigInt("1085")
		const spenderFYNPocz = accounts[4]
		const nullsrIldjm = await contractNNyiRid.balanceOf.call(accountYhhoSB5, {from: accounts[1]});
		const nullcjYYmYc = await contractNNyiRid.allowance.call(ownerNttYqHM, spenderQ8TbkwU, {from: accounts[0]});
		await contractNNyiRid.approve.call(spenderK2CTav8, amountXoTCyJ0, {from: accounts[2]});
		await contractNNyiRid.transferFrom.call(senderdwUYPKE, recipientCr8hvc, amountOiZC6Mx, {from: accounts[3]});
		await contractNNyiRid.approve.call(spenderFYNPocz, amountCKBCFvI, {from: accounts[3]});
		const nullWAgnIZB = await contractNNyiRid.totalSupply.call({from: accounts[2]});
	});
})