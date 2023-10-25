const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contracttq7VmEU = await IUSDT.new({from: "0x0000000000000000000000000000000000000001"});
		const amountpLzEWPU = BigInt("237")
		const recipientGuyJ1iz = accounts[5]
		const senderPUPLO3k = "0x0000000000000000000000000000000000000001"
		const accountt5lGvRG = accounts[0]
		const amount9Nt59E = BigInt("1008")
		const recipientAJJj0yE = accounts[4]
		await contracttq7VmEU.transferFrom.call(senderPUPLO3k, recipientGuyJ1iz, amountpLzEWPU, {from: accounts[0]});
		const nullVu3IgWw = await contracttq7VmEU.balanceOf.call(accountt5lGvRG, {from: accounts[1]});
		await contracttq7VmEU.transfer.call(recipientAJJj0yE, amount9Nt59E, {from: accounts[0]});
	});
})