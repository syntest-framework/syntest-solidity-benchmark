const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractPoNPFoi = await IVestingToken.new({from: accounts[3]});
		const _ownerTVOQlzP = accounts[2]
		const _ownerM8fvUau = accounts[1]
		const nullMIcA6HR = await contractPoNPFoi.claimedBalanceOf.call(_ownerTVOQlzP, {from: accounts[0]});
		await contractPoNPFoi.claim.call({from: accounts[0]});
		const nullyLlCzo7 = await contractPoNPFoi.claimedBalanceOf.call(_ownerM8fvUau, {from: accounts[2]});
	});
})