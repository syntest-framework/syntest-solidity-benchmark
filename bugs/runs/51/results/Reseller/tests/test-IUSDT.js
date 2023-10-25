const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractesv8g3A = await IUSDT.new({from: accounts[2]});
		const amountLLryJ81 = BigInt("37")
		const recipientZKeLwPC = accounts[0]
		const senderd0dBS1t = accounts[0]
		const accountETRkeb = "0x0000000000000000000000000000000000000001"
		const amountinr6rnr = BigInt("986")
		const spenderXs2kzQA = accounts[4]
		const spenderMem101g = accounts[4]
		const ownerwb5RHJ6 = accounts[1]
		await contractesv8g3A.transferFrom.call(senderd0dBS1t, recipientZKeLwPC, amountLLryJ81, {from: accounts[4]});
		const nullGegPDqm = await contractesv8g3A.balanceOf.call(accountETRkeb, {from: accounts[5]});
		await contractesv8g3A.approve.call(spenderXs2kzQA, amountinr6rnr, {from: accounts[1]});
		const nullFpMxgCX = await contractesv8g3A.decimals.call({from: accounts[2]});
		const nullUivC3Ig = await contractesv8g3A.allowance.call(ownerwb5RHJ6, spenderMem101g, {from: accounts[3]});
	});
})