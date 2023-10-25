const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractAI8yp9I = await IUSDT.new({from: accounts[4]});
		const spender6A8p5w = "0x0000000000000000000000000000000000000001"
		const ownertvQezre = accounts[2]
		const amountNuo4jnm = BigInt("1563")
		const recipientqdeK5cU = accounts[0]
		const senderACc2ZwI = accounts[3]
		const spenderXtIhmR = accounts[2]
		const ownerSFcsAp = accounts[4]
		const spenderUlhV9z = accounts[1]
		const ownerC0knSMW = accounts[4]
		const nullbXxWfls = await contractAI8yp9I.allowance.call(ownertvQezre, spender6A8p5w, {from: accounts[2]});
		await contractAI8yp9I.transferFrom.call(senderACc2ZwI, recipientqdeK5cU, amountNuo4jnm, {from: "0x0000000000000000000000000000000000000001"});
		const nullKtipqb3 = await contractAI8yp9I.allowance.call(ownerSFcsAp, spenderXtIhmR, {from: "0x0000000000000000000000000000000000000001"});
		const nullw6L3SG8 = await contractAI8yp9I.allowance.call(ownerC0knSMW, spenderUlhV9z, {from: accounts[4]});
	});
})