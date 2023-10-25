const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contract5Ucfa5 = await IERC20.new({from: accounts[5]});
		const valueTTikbU1 = BigInt("1217")
		const spenderaQ1ZBKN = accounts[0]
		const valueRmFVk66 = BigInt("1517")
		const spenderMqJsq73 = accounts[4]
		const spendern74aEmI = "0x0000000000000000000000000000000000000001"
		const ownern3isBfb = "0x0000000000000000000000000000000000000001"
		const valueSO0rlaU = BigInt("1027")
		const topeonVAS = accounts[1]
		const nulluOAck88 = await contract5Ucfa5.approve.call(spenderaQ1ZBKN, valueTTikbU1, {from: accounts[5]});
		const nullrfmXcG5 = await contract5Ucfa5.approve.call(spenderMqJsq73, valueRmFVk66, {from: accounts[0]});
		const nullZ55eRw = await contract5Ucfa5.allowance.call(ownern3isBfb, spendern74aEmI, {from: "0x0000000000000000000000000000000000000001"});
		const nullwEGnNaG = await contract5Ucfa5.transfer.call(topeonVAS, valueSO0rlaU, {from: accounts[4]});
	});
})