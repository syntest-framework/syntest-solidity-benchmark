const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractg29Mo8x = await IVestingToken.new({from: accounts[4]});
		const _ownerNUF1Ynf = accounts[4]
		const _ownerWJTYXdL = accounts[4]
		await contractg29Mo8x.claim.call({from: accounts[4]});
		const nulldvnxetv = await contractg29Mo8x.claimedBalanceOf.call(_ownerNUF1Ynf, {from: accounts[3]});
		const nulluTWcis = await contractg29Mo8x.vestedBalanceOf.call(_ownerWJTYXdL, {from: accounts[3]});
	});
})