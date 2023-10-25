const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractsZCKdVv = await IUSDT.new({from: accounts[1]});
		const amountflSS23Z = BigInt("49")
		const recipientnLAykN = accounts[3]
		const accountMRebvO0 = accounts[3]
		const spenderCqaSU8l = accounts[0]
		const ownerwTkdX4g = accounts[1]
		const accountdUI7oFT = accounts[5]
		await contractsZCKdVv.transfer.call(recipientnLAykN, amountflSS23Z, {from: accounts[4]});
		const nullrVNrLDl = await contractsZCKdVv.balanceOf.call(accountMRebvO0, {from: accounts[4]});
		const nulljzIOC73 = await contractsZCKdVv.allowance.call(ownerwTkdX4g, spenderCqaSU8l, {from: accounts[4]});
		const nullHry7f5M = await contractsZCKdVv.balanceOf.call(accountdUI7oFT, {from: accounts[0]});
	});
})