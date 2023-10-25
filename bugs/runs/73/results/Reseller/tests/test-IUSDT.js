const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractJhF70VY = await IUSDT.new({from: accounts[3]});
		const amountzRHIdBG = BigInt("70")
		const recipienttTK5aB6 = accounts[5]
		const senderzU357He = accounts[2]
		const spenderxzAvzRm = accounts[2]
		const ownerYCPiRPT = accounts[4]
		const amount8UVEEX = BigInt("1289")
		const recipientQYb80eU = accounts[1]
		const senderK6DJKNZ = accounts[3]
		const amountCZDT2Qd = BigInt("1209")
		const spendercPN4UV7 = accounts[4]
		const accountKbRKwvf = accounts[3]
		await contractJhF70VY.transferFrom.call(senderzU357He, recipienttTK5aB6, amountzRHIdBG, {from: accounts[3]});
		const nullkgDtHL7 = await contractJhF70VY.allowance.call(ownerYCPiRPT, spenderxzAvzRm, {from: accounts[3]});
		await contractJhF70VY.transferFrom.call(senderK6DJKNZ, recipientQYb80eU, amount8UVEEX, {from: accounts[0]});
		await contractJhF70VY.approve.call(spendercPN4UV7, amountCZDT2Qd, {from: accounts[1]});
		const nullDf6m8oK = await contractJhF70VY.balanceOf.call(accountKbRKwvf, {from: accounts[5]});
	});
})