const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractd0Xmoct = await IERC20.new({from: accounts[2]});
		const spenderbVnr6eF = accounts[2]
		const ownerHFjnhvi = accounts[0]
		const accountg3IpCoS = accounts[2]
		const amountXtcfHdC = BigInt("1527")
		const recipientyxwbtEE = accounts[5]
		const senderrqABvTa = accounts[3]
		const nulldYLozfq = await contractd0Xmoct.allowance.call(ownerHFjnhvi, spenderbVnr6eF, {from: accounts[5]});
		const nullS3XhRBv = await contractd0Xmoct.balanceOf.call(accountg3IpCoS, {from: accounts[4]});
		const nullOA1rKRU = await contractd0Xmoct.transferFrom.call(senderrqABvTa, recipientyxwbtEE, amountXtcfHdC, {from: accounts[0]});
	});
})