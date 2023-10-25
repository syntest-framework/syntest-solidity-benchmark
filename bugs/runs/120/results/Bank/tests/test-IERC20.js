const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractp9vCDg8 = await IERC20.new({from: accounts[0]});
		const valuekyJeczj = BigInt("1859")
		const spenderlLwAlFY = accounts[3]
		const whooer2OCY = accounts[4]
		const nulloSE9cHU = await contractp9vCDg8.approve.call(spenderlLwAlFY, valuekyJeczj, {from: accounts[1]});
		const nullZ6Wixf4 = await contractp9vCDg8.balanceOf.call(whooer2OCY, {from: accounts[5]});
	});
})