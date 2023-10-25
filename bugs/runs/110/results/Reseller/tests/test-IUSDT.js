const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractLumC0kr = await IUSDT.new({from: accounts[0]});
		const spenderOYqQVUt = accounts[5]
		const ownerK3zDOHt = accounts[3]
		const amounts1M4f5V = BigInt("1223")
		const recipientYd4nKTi = accounts[3]
		const senderhsyzu1m = accounts[5]
		const nullHyXiyNN = await contractLumC0kr.allowance.call(ownerK3zDOHt, spenderOYqQVUt, {from: accounts[1]});
		await contractLumC0kr.transferFrom.call(senderhsyzu1m, recipientYd4nKTi, amounts1M4f5V, {from: accounts[3]});
	});
})