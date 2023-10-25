const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractEtY1ToD = await IERC20.new({from: accounts[2]});
		const whoBiYDd4l = accounts[5]
		const valuelkQKICQ = BigInt("179")
		const toczWVVEZ = accounts[5]
		const nullUVMRpa9 = await contractEtY1ToD.balanceOf.call(whoBiYDd4l, {from: accounts[1]});
		const nullFDc2uI = await contractEtY1ToD.transfer.call(toczWVVEZ, valuelkQKICQ, {from: accounts[5]});
	});
})