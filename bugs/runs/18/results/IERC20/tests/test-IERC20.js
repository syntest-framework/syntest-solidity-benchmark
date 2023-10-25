const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractq0j8xlh = await IERC20.new({from: accounts[2]});
		const spenderCwP3Kk = accounts[4]
		const ownerctaz2A = accounts[4]
		const spenderJNEXLl3 = accounts[1]
		const ownerUG5bRIt = accounts[2]
		const spenderzimS5ku = accounts[0]
		const ownerstOrxRr = "0x0000000000000000000000000000000000000001"
		const valueyepb0C5 = BigInt("1291")
		const tocKMmfyj = accounts[4]
		const valuelVz2z8X = BigInt("395")
		const spendereVMwbtB = accounts[3]
		const nullPfRcm9h = await contractq0j8xlh.allowance.call(ownerctaz2A, spenderCwP3Kk, {from: accounts[4]});
		const nullgNiuYE6 = await contractq0j8xlh.allowance.call(ownerUG5bRIt, spenderJNEXLl3, {from: accounts[4]});
		const nulldxwWHty = await contractq0j8xlh.allowance.call(ownerstOrxRr, spenderzimS5ku, {from: accounts[3]});
		const nullCBct7B = await contractq0j8xlh.transfer.call(tocKMmfyj, valueyepb0C5, {from: accounts[0]});
		const nullsKezjnW = await contractq0j8xlh.approve.call(spendereVMwbtB, valuelVz2z8X, {from: accounts[0]});
	});
})