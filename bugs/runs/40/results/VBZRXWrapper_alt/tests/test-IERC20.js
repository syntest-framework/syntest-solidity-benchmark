const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractTcKjj4 = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderBRAfWBs = accounts[2]
		const ownerTV8hqCk = accounts[1]
		const amounttQ3BbEE = BigInt("768")
		const recipientxGXP0XU = accounts[3]
		const amountd6E7iNR = BigInt("755")
		const recipienteSBWkc4 = accounts[3]
		const senderGU3OGBX = accounts[1]
		const nullwnV7Sxf = await contractTcKjj4.allowance.call(ownerTV8hqCk, spenderBRAfWBs, {from: "0x0000000000000000000000000000000000000001"});
		const nullGf3tirP = await contractTcKjj4.totalSupply.call({from: accounts[3]});
		const nullBSYSvue = await contractTcKjj4.transfer.call(recipientxGXP0XU, amounttQ3BbEE, {from: accounts[3]});
		const nullnR0OGnK = await contractTcKjj4.transferFrom.call(senderGU3OGBX, recipienteSBWkc4, amountd6E7iNR, {from: accounts[4]});
	});
})