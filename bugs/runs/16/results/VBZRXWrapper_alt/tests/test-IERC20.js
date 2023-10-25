const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractq4W4d8K = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const amountzEGyjp0 = BigInt("528")
		const spenderbZLnlhT = accounts[3]
		const amounthgzMiyd = BigInt("1455")
		const recipientsTzns2 = accounts[3]
		const amountgEqYcd9 = BigInt("191")
		const recipientOrLoM57 = accounts[5]
		const nullGnzsgsQ = await contractq4W4d8K.approve.call(spenderbZLnlhT, amountzEGyjp0, {from: accounts[5]});
		const nullq2rHcEq = await contractq4W4d8K.transfer.call(recipientsTzns2, amounthgzMiyd, {from: accounts[2]});
		const nullMw2lKAB = await contractq4W4d8K.transfer.call(recipientOrLoM57, amountgEqYcd9, {from: accounts[3]});
	});
})