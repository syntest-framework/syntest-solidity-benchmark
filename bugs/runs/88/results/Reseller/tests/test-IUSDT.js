const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractVySNevu = await IUSDT.new({from: accounts[2]});
		const amountYYDIxHq = BigInt("1020")
		const recipientZFIlkzC = accounts[3]
		const senderxFxjbxs = accounts[0]
		await contractVySNevu.transferFrom.call(senderxFxjbxs, recipientZFIlkzC, amountYYDIxHq, {from: accounts[4]});
		const nullNUHysk = await contractVySNevu.decimals.call({from: accounts[0]});
		const nulldCgRQcz = await contractVySNevu.decimals.call({from: accounts[4]});
	});
})