const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractJurgc8r = await IUSDT.new({from: accounts[4]});
		const amountIcuByRh = BigInt("1546")
		const recipientXujz6W2 = accounts[4]
		const senderykMyGLP = accounts[4]
		const amountiD3Q7ty = BigInt("701")
		const recipientdgwyHR = accounts[1]
		const senderbyTflfb = "0x0000000000000000000000000000000000000001"
		const amountmNOjDDQ = BigInt("1177")
		const recipientB5Xt4Hu = accounts[1]
		const accountjQEqZAk = accounts[0]
		const accountdZADL7I = accounts[0]
		await contractJurgc8r.transferFrom.call(senderykMyGLP, recipientXujz6W2, amountIcuByRh, {from: accounts[1]});
		const nullD8sZ79S = await contractJurgc8r.totalSupply.call({from: accounts[5]});
		await contractJurgc8r.transferFrom.call(senderbyTflfb, recipientdgwyHR, amountiD3Q7ty, {from: accounts[2]});
		await contractJurgc8r.transfer.call(recipientB5Xt4Hu, amountmNOjDDQ, {from: accounts[2]});
		const nullQ7dTUH9 = await contractJurgc8r.balanceOf.call(accountjQEqZAk, {from: accounts[1]});
		const nulllUGvW7y = await contractJurgc8r.balanceOf.call(accountdZADL7I, {from: accounts[1]});
	});
})