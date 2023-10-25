const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractLEDUu2f = await IUSDT.new({from: accounts[2]});
		const amountXFOt9u = BigInt("1198")
		const spenderig42AMx = accounts[2]
		const accounticShcSI = accounts[4]
		const accounttIYD63E = accounts[1]
		await contractLEDUu2f.approve.call(spenderig42AMx, amountXFOt9u, {from: accounts[0]});
		const nullVXiPFuR = await contractLEDUu2f.balanceOf.call(accounticShcSI, {from: accounts[4]});
		const nullTJT3Pfj = await contractLEDUu2f.decimals.call({from: accounts[0]});
		const nullL3bJDNv = await contractLEDUu2f.balanceOf.call(accounttIYD63E, {from: accounts[3]});
	});
})