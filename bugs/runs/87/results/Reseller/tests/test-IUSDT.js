const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractMvTNKi2 = await IUSDT.new({from: accounts[3]});
		const spenderQBpiDe3 = "0x0000000000000000000000000000000000000001"
		const ownerqgOlkTU = accounts[0]
		const accountxdOogay = accounts[4]
		const amountNIvj9dt = BigInt("1771")
		const recipientYf4AFs = accounts[3]
		const senderEzs4tY = accounts[1]
		const amountJb7reei = BigInt("1221")
		const spenderYB884qC = accounts[0]
		const nullBE3fjf = await contractMvTNKi2.allowance.call(ownerqgOlkTU, spenderQBpiDe3, {from: accounts[1]});
		const nullguJUtmb = await contractMvTNKi2.balanceOf.call(accountxdOogay, {from: accounts[1]});
		await contractMvTNKi2.transferFrom.call(senderEzs4tY, recipientYf4AFs, amountNIvj9dt, {from: accounts[1]});
		await contractMvTNKi2.approve.call(spenderYB884qC, amountJb7reei, {from: accounts[4]});
	});
})