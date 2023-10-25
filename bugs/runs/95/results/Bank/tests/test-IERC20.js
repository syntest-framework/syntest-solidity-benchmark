const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractomMXZea = await IERC20.new({from: accounts[3]});
		const valueRMv9Qqc = BigInt("1676")
		const tonzvzMVX = accounts[1]
		const valueAuLMN1j = BigInt("678")
		const tod5MF82H = accounts[3]
		const spendern9agkld = accounts[0]
		const ownerj3CEYui = accounts[1]
		const nulld8xU7Kb = await contractomMXZea.transfer.call(tonzvzMVX, valueRMv9Qqc, {from: accounts[1]});
		const nullXTUwYKo = await contractomMXZea.transfer.call(tod5MF82H, valueAuLMN1j, {from: accounts[0]});
		const nullBlKLTtv = await contractomMXZea.allowance.call(ownerj3CEYui, spendern9agkld, {from: "0x0000000000000000000000000000000000000001"});
	});
})