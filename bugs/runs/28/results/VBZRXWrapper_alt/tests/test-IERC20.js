const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractQFsI8Ti = await IERC20.new({from: accounts[4]});
		const spenderijAUEkr = accounts[2]
		const ownerfQvo5U7 = accounts[5]
		const spenderk0RxdiD = accounts[2]
		const ownerVF62qjY = accounts[1]
		const accountsNgr4s = accounts[0]
		const accounte9srkL = accounts[3]
		const nullsrPvBDg = await contractQFsI8Ti.allowance.call(ownerfQvo5U7, spenderijAUEkr, {from: accounts[5]});
		const nulltUN7uGg = await contractQFsI8Ti.allowance.call(ownerVF62qjY, spenderk0RxdiD, {from: accounts[3]});
		const nulloNdmzZP = await contractQFsI8Ti.balanceOf.call(accountsNgr4s, {from: accounts[2]});
		const nullKnSYuDd = await contractQFsI8Ti.balanceOf.call(accounte9srkL, {from: accounts[5]});
	});
})