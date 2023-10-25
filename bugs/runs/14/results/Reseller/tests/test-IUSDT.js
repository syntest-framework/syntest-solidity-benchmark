const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractDovvVRj = await IUSDT.new({from: accounts[2]});
		const amountIN0WqMI = BigInt("1894")
		const recipientCsrFHVi = accounts[5]
		const senderrDerS55 = accounts[2]
		const amountTEnMndH = BigInt("1879")
		const recipientSMA6kli = accounts[2]
		const senderGLoMUl = accounts[5]
		const nullWFmNMnr = await contractDovvVRj.totalSupply.call({from: accounts[2]});
		await contractDovvVRj.transferFrom.call(senderrDerS55, recipientCsrFHVi, amountIN0WqMI, {from: accounts[0]});
		await contractDovvVRj.transferFrom.call(senderGLoMUl, recipientSMA6kli, amountTEnMndH, {from: accounts[2]});
	});
})