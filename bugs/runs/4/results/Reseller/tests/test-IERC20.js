const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractkKYpTpr = await IERC20.new({from: accounts[3]});
		const whohcLfrye = accounts[4]
		const valueMyW9Xrb = BigInt("2036")
		const tofunbvm = accounts[0]
		const valueszTdA1N = BigInt("831")
		const fromitByh1Y = accounts[4]
		const periodTYF2dUS = BigInt("613")
		const amountjdg6dBh = BigInt("1559")
		const recipientFYtSqub = accounts[1]
		const spenderff2CXkV = accounts[1]
		const ownerhTQmnJF = accounts[0]
		const nullJpMANPo = await contractkKYpTpr.balanceOf.call(whohcLfrye, {from: "0x0000000000000000000000000000000000000001"});
		const nullP13faN = await contractkKYpTpr.transfer.call(tofunbvm, valueMyW9Xrb, {from: accounts[2]});
		await contractkKYpTpr.burnFrom.call(fromitByh1Y, valueszTdA1N, {from: accounts[4]});
		await contractkKYpTpr.freezeAndTransfer.call(recipientFYtSqub, amountjdg6dBh, periodTYF2dUS, {from: "0x0000000000000000000000000000000000000001"});
		const nulli1wEWP2 = await contractkKYpTpr.allowance.call(ownerhTQmnJF, spenderff2CXkV, {from: accounts[0]});
		const nullOmI3FOz = await contractkKYpTpr.totalSupply.call({from: accounts[0]});
	});
})