const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractvgQUwaZ = await IUSDT.new({from: accounts[2]});
		const spenderlI70vg4 = accounts[2]
		const ownerqEmzruq = accounts[4]
		const amountDyKZOkP = BigInt("1799")
		const recipientp18YF10 = accounts[0]
		const senderk0G24fd = accounts[3]
		const accountiAjOGu8 = "0x0000000000000000000000000000000000000001"
		const nullLMPSSRv = await contractvgQUwaZ.allowance.call(ownerqEmzruq, spenderlI70vg4, {from: accounts[3]});
		await contractvgQUwaZ.transferFrom.call(senderk0G24fd, recipientp18YF10, amountDyKZOkP, {from: accounts[0]});
		const nullhk4mwvj = await contractvgQUwaZ.decimals.call({from: accounts[0]});
		const nullnS6HVRH = await contractvgQUwaZ.decimals.call({from: accounts[1]});
		const nullnN1WAW = await contractvgQUwaZ.balanceOf.call(accountiAjOGu8, {from: accounts[1]});
		const nullkURmmNY = await contractvgQUwaZ.decimals.call({from: accounts[1]});
	});
})