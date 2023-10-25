const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractNdYNmmB = await IUSDT.new({from: accounts[2]});
		const amountEIuxalu = BigInt("136")
		const recipientQ95DxP = accounts[0]
		const senderAyODhL = accounts[0]
		const nullxNXkrhE = await contractNdYNmmB.decimals.call({from: accounts[4]});
		await contractNdYNmmB.transferFrom.call(senderAyODhL, recipientQ95DxP, amountEIuxalu, {from: accounts[0]});
	});
})