const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractSYr2vn = await IERC20.new({from: accounts[5]});
		const accountHK7uVKR = accounts[1]
		const amountaETCKV2 = BigInt("2033")
		const spenderIIdyHmQ = accounts[4]
		const accountw1k8I0l = accounts[1]
		const amount2V0Jec = BigInt("1985")
		const recipientaevW93 = accounts[1]
		const senderoVMtFyR = accounts[1]
		const amountqhxsrpK = BigInt("1119")
		const recipientNw9jcZw = accounts[4]
		const nullpH4jnBK = await contractSYr2vn.balanceOf.call(accountHK7uVKR, {from: accounts[5]});
		const nullBRPZnK6 = await contractSYr2vn.approve.call(spenderIIdyHmQ, amountaETCKV2, {from: accounts[0]});
		const nullhykZRxw = await contractSYr2vn.balanceOf.call(accountw1k8I0l, {from: accounts[1]});
		const nullr662liI = await contractSYr2vn.transferFrom.call(senderoVMtFyR, recipientaevW93, amount2V0Jec, {from: accounts[4]});
		const nullDjv44bh = await contractSYr2vn.transfer.call(recipientNw9jcZw, amountqhxsrpK, {from: accounts[2]});
	});
})