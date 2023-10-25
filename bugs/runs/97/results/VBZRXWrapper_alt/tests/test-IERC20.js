const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractn84DNVv = await IERC20.new({from: accounts[5]});
		const amountyeTOSE1 = BigInt("759")
		const spenderSmDmkDI = accounts[1]
		const accountkZyzLnq = accounts[0]
		const accounth27OYAz = accounts[4]
		const nullHedUfZs = await contractn84DNVv.approve.call(spenderSmDmkDI, amountyeTOSE1, {from: accounts[0]});
		const nullCvAVfr = await contractn84DNVv.balanceOf.call(accountkZyzLnq, {from: accounts[0]});
		const nullQZouyDQ = await contractn84DNVv.balanceOf.call(accounth27OYAz, {from: accounts[0]});
	});
})