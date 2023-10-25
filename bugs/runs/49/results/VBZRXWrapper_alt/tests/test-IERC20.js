const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractWa4lsC = await IERC20.new({from: accounts[1]});
		const accountblkvqSe = accounts[3]
		const spenderMJmkF1c = accounts[1]
		const ownerwZdU3hv = accounts[1]
		const amountqOfe7P = BigInt("5")
		const spenderpDnrnV5 = accounts[3]
		const spenderzWVSSjl = accounts[4]
		const ownerC3mzzee = accounts[5]
		const nullUijVVgD = await contractWa4lsC.balanceOf.call(accountblkvqSe, {from: accounts[3]});
		const nulliN0DhwB = await contractWa4lsC.allowance.call(ownerwZdU3hv, spenderMJmkF1c, {from: accounts[3]});
		const nullTcyoNNC = await contractWa4lsC.approve.call(spenderpDnrnV5, amountqOfe7P, {from: "0x0000000000000000000000000000000000000001"});
		const nullhm55vKi = await contractWa4lsC.allowance.call(ownerC3mzzee, spenderzWVSSjl, {from: accounts[4]});
	});
})