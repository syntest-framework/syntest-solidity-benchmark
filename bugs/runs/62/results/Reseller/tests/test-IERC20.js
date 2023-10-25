const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractc3Lru1L = await IERC20.new({from: accounts[4]});
		const valuemLatVe4 = BigInt("1148")
		const spenderf043nn6 = accounts[1]
		const valuex421byd = BigInt("256")
		const toI57Gijf = accounts[3]
		const fromITptdFg = accounts[2]
		const periodUzhNcc2 = BigInt("1134")
		const amountlMUdHlm = BigInt("1011")
		const recipientpOQep7 = accounts[4]
		const nullF9Ir48j = await contractc3Lru1L.approve.call(spenderf043nn6, valuemLatVe4, {from: accounts[4]});
		const nullNosmroU = await contractc3Lru1L.transferFrom.call(fromITptdFg, toI57Gijf, valuex421byd, {from: accounts[2]});
		await contractc3Lru1L.freezeAndTransfer.call(recipientpOQep7, amountlMUdHlm, periodUzhNcc2, {from: accounts[2]});
	});
})