const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractgyfwqX9 = await IVestingToken.new({from: accounts[2]});
		const _ownerTcoWSj8 = accounts[5]
		const _ownerRunwG0X = accounts[2]
		const nullc50xoio = await contractgyfwqX9.vestedBalanceOf.call(_ownerTcoWSj8, {from: accounts[5]});
		const nullzvkNeiv = await contractgyfwqX9.vestedBalanceOf.call(_ownerRunwG0X, {from: accounts[2]});
		await contractgyfwqX9.claim.call({from: accounts[3]});
	});
})