const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractLnHAZv = await IERC20.new({from: accounts[0]});
		const amountyKdSJiU = BigInt("1142")
		const recipientAN9ZB5U = accounts[3]
		const spenderuxw96fu = accounts[3]
		const ownerRN0WfQ = accounts[2]
		const nullxQ6NUXC = await contractLnHAZv.totalSupply.call({from: accounts[0]});
		const nulljHSrP3Y = await contractLnHAZv.transfer.call(recipientAN9ZB5U, amountyKdSJiU, {from: accounts[4]});
		const nulljnvWVkN = await contractLnHAZv.allowance.call(ownerRN0WfQ, spenderuxw96fu, {from: accounts[5]});
	});
})