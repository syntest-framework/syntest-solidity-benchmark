const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractuSPkBL = await IUSDT.new({from: accounts[3]});
		const amountm1y36nb = BigInt("162")
		const recipientVhioNUL = accounts[4]
		const accountLPKZqeo = accounts[5]
		const amountJGNUUs2 = BigInt("1385")
		const recipientnBVS81 = accounts[3]
		const sendernfOC7PV = "0x0000000000000000000000000000000000000001"
		const amounteuepaPV = BigInt("2034")
		const recipientleXrasH = accounts[2]
		const senderQ2DmUYZ = accounts[3]
		await contractuSPkBL.transfer.call(recipientVhioNUL, amountm1y36nb, {from: accounts[4]});
		const nullsZtkJZ1 = await contractuSPkBL.balanceOf.call(accountLPKZqeo, {from: accounts[3]});
		await contractuSPkBL.transferFrom.call(sendernfOC7PV, recipientnBVS81, amountJGNUUs2, {from: accounts[4]});
		await contractuSPkBL.transferFrom.call(senderQ2DmUYZ, recipientleXrasH, amounteuepaPV, {from: accounts[1]});
	});
})