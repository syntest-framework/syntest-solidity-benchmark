const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractDrwcR8e = await IVestingToken.new({from: accounts[0]});
		const _ownerE53F04i = "0x0000000000000000000000000000000000000001"
		const _ownerVPtUvln = accounts[3]
		const nullNJYz7wO = await contractDrwcR8e.claimedBalanceOf.call(_ownerE53F04i, {from: accounts[2]});
		const nullnnEVkH5 = await contractDrwcR8e.vestedBalanceOf.call(_ownerVPtUvln, {from: "0x0000000000000000000000000000000000000001"});
		await contractDrwcR8e.claim.call({from: accounts[0]});
	});
})