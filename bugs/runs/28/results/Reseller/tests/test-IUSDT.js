const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractU2R3NUM = await IUSDT.new({from: accounts[3]});
		const spenderCdqjoTa = accounts[2]
		const ownerSwLyd4P = accounts[2]
		const amountHGGhRF = BigInt("210")
		const recipientx9tjU3c = accounts[5]
		const sendermn00Rl = accounts[3]
		const nullTqVo6zv = await contractU2R3NUM.allowance.call(ownerSwLyd4P, spenderCdqjoTa, {from: accounts[1]});
		const nullLTYKEy4 = await contractU2R3NUM.decimals.call({from: accounts[3]});
		await contractU2R3NUM.transferFrom.call(sendermn00Rl, recipientx9tjU3c, amountHGGhRF, {from: accounts[1]});
	});
})