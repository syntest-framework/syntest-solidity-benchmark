const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractQ8C3k27 = await IUSDT.new({from: accounts[0]});
		const spenderrx1HgPW = accounts[5]
		const owneraSHXnYV = accounts[0]
		const amountGt4uSzm = BigInt("1723")
		const spenderrD6DMNO = accounts[3]
		const spenderNeeO6qe = "0x0000000000000000000000000000000000000001"
		const ownervMl8DDI = accounts[2]
		const accountwobsiv = accounts[0]
		const amountaLlYS7f = BigInt("102")
		const recipientJnYQS7Y = accounts[4]
		const nullSLqUvCX = await contractQ8C3k27.totalSupply.call({from: accounts[3]});
		const nullAmizuoc = await contractQ8C3k27.allowance.call(owneraSHXnYV, spenderrx1HgPW, {from: accounts[2]});
		await contractQ8C3k27.approve.call(spenderrD6DMNO, amountGt4uSzm, {from: "0x0000000000000000000000000000000000000001"});
		const nullNQEfLlT = await contractQ8C3k27.allowance.call(ownervMl8DDI, spenderNeeO6qe, {from: accounts[1]});
		const nullmabZP79 = await contractQ8C3k27.balanceOf.call(accountwobsiv, {from: accounts[4]});
		await contractQ8C3k27.transfer.call(recipientJnYQS7Y, amountaLlYS7f, {from: accounts[3]});
	});
})