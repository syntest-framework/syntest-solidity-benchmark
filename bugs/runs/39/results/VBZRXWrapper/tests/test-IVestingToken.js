const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractcMvqae = await IVestingToken.new({from: accounts[4]});
		const _ownerBQc7GUb = accounts[1]
		const _ownerYxfMK5g = accounts[3]
		const _owneruY2j23h = accounts[5]
		await contractcMvqae.claim.call({from: accounts[0]});
		await contractcMvqae.claim.call({from: accounts[0]});
		const nullvrRfcsO = await contractcMvqae.vestedBalanceOf.call(_ownerBQc7GUb, {from: "0x0000000000000000000000000000000000000001"});
		const nullVxpGLA = await contractcMvqae.claimedBalanceOf.call(_ownerYxfMK5g, {from: accounts[0]});
		const nullUhshY9m = await contractcMvqae.vestedBalanceOf.call(_owneruY2j23h, {from: accounts[5]});
	});
})