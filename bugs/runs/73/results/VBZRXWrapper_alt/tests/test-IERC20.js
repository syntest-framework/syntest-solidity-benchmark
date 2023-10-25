const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractvnGjYOQ = await IERC20.new({from: accounts[4]});
		const spenderThLRG8M = accounts[0]
		const ownerGOsK698 = accounts[1]
		const amountNALFA1 = BigInt("881")
		const recipientmhraAqF = accounts[4]
		const senderj5N1wGb = accounts[3]
		const accountPtjFJmg = accounts[3]
		const nullKzNJNrX = await contractvnGjYOQ.allowance.call(ownerGOsK698, spenderThLRG8M, {from: accounts[1]});
		const nullYhqMBU0 = await contractvnGjYOQ.transferFrom.call(senderj5N1wGb, recipientmhraAqF, amountNALFA1, {from: accounts[0]});
		const nullWLm84LG = await contractvnGjYOQ.balanceOf.call(accountPtjFJmg, {from: accounts[4]});
	});
})