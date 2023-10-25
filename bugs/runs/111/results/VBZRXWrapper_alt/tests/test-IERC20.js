const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractxLIxxsM = await IERC20.new({from: accounts[1]});
		const accountRz5HUwj = accounts[3]
		const accountp4PnvhR = accounts[1]
		const amountovJ02Ek = BigInt("1823")
		const recipientgTms5Wf = accounts[3]
		const nullOgNC2Ic = await contractxLIxxsM.balanceOf.call(accountRz5HUwj, {from: accounts[2]});
		const nullqUwaY81 = await contractxLIxxsM.balanceOf.call(accountp4PnvhR, {from: accounts[3]});
		const nullgtmPFnU = await contractxLIxxsM.transfer.call(recipientgTms5Wf, amountovJ02Ek, {from: accounts[0]});
	});
})