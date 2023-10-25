const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracttTdK2e7 = await IERC20.new({from: accounts[2]});
		const valueX2c9o3s = BigInt("1438")
		const toikVpsSd = accounts[0]
		const spendertqQwiGS = "0x0000000000000000000000000000000000000001"
		const ownerQV4ofOH = accounts[4]
		const nullm3GW2EK = await contracttTdK2e7.transfer.call(toikVpsSd, valueX2c9o3s, {from: accounts[0]});
		const nullceQp5kB = await contracttTdK2e7.allowance.call(ownerQV4ofOH, spendertqQwiGS, {from: accounts[4]});
	});
})