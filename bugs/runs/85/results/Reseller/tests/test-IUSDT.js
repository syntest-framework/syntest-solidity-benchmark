const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractXi8e9Ei = await IUSDT.new({from: accounts[4]});
		const accountOuGoADb = accounts[1]
		const amountfAqSmP2 = BigInt("1847")
		const recipientCFq4f2h = accounts[5]
		const amount0JMxDj = BigInt("2006")
		const recipientXIJcxgW = accounts[2]
		const senderUsAbjIR = accounts[2]
		const amounttvPuu1p = BigInt("250")
		const recipientzqki8g0 = accounts[0]
		const senderrVwGjM = accounts[5]
		const nullg6BiUFB = await contractXi8e9Ei.balanceOf.call(accountOuGoADb, {from: accounts[0]});
		await contractXi8e9Ei.transfer.call(recipientCFq4f2h, amountfAqSmP2, {from: accounts[3]});
		await contractXi8e9Ei.transferFrom.call(senderUsAbjIR, recipientXIJcxgW, amount0JMxDj, {from: "0x0000000000000000000000000000000000000001"});
		await contractXi8e9Ei.transferFrom.call(senderrVwGjM, recipientzqki8g0, amounttvPuu1p, {from: accounts[2]});
	});
})