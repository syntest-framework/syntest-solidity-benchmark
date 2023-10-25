const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractDJFCnTz = await IUSDT.new({from: accounts[2]});
		const amountiqp2cWt = BigInt("1860")
		const recipientx9RV7fh = accounts[1]
		const spenderQevGcZ8 = accounts[0]
		const ownerHJIoofH = accounts[2]
		const spenderNEs9E1 = accounts[4]
		const ownerAyM0vLx = accounts[1]
		const amountHcg5BtD = BigInt("227")
		const recipientPvjYsVt = accounts[0]
		const senderJPErjsr = accounts[0]
		await contractDJFCnTz.transfer.call(recipientx9RV7fh, amountiqp2cWt, {from: accounts[0]});
		const nullNj5mIV = await contractDJFCnTz.allowance.call(ownerHJIoofH, spenderQevGcZ8, {from: "0x0000000000000000000000000000000000000001"});
		const nullzdRgdd8 = await contractDJFCnTz.allowance.call(ownerAyM0vLx, spenderNEs9E1, {from: accounts[4]});
		await contractDJFCnTz.transferFrom.call(senderJPErjsr, recipientPvjYsVt, amountHcg5BtD, {from: accounts[2]});
	});
})