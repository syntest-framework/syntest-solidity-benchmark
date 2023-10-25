const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractIRtodL8 = await IERC20.new({from: accounts[2]});
		const valueMSbsauz = BigInt("400")
		const spenderEA3bUGq = accounts[2]
		const valuebrfOUc6 = BigInt("1")
		const fromSBXZy6n = accounts[5]
		const periodwekSmmK = BigInt("607")
		const amountJrMG5M = BigInt("853")
		const recipientP1kYHqX = accounts[4]
		const nullWn10Red = await contractIRtodL8.approve.call(spenderEA3bUGq, valueMSbsauz, {from: "0x0000000000000000000000000000000000000001"});
		await contractIRtodL8.burnFrom.call(fromSBXZy6n, valuebrfOUc6, {from: accounts[1]});
		await contractIRtodL8.freezeAndTransfer.call(recipientP1kYHqX, amountJrMG5M, periodwekSmmK, {from: accounts[4]});
	});
})