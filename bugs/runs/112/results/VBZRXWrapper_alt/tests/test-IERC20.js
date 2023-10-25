const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractqsfxosn = await IERC20.new({from: accounts[0]});
		const amountK5PWli2 = BigInt("1411")
		const spenderPkCGYPj = accounts[4]
		const amountrbx1AMJ = BigInt("1285")
		const recipientivM6sOl = "0x0000000000000000000000000000000000000001"
		const nulljrKZ6C8 = await contractqsfxosn.approve.call(spenderPkCGYPj, amountK5PWli2, {from: accounts[1]});
		const nullUxQHyhV = await contractqsfxosn.totalSupply.call({from: accounts[2]});
		const nulliJHidGu = await contractqsfxosn.transfer.call(recipientivM6sOl, amountrbx1AMJ, {from: accounts[5]});
	});
})