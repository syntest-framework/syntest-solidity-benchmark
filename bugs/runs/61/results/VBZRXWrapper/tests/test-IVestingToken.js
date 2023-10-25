const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractlJ6XLhE = await IVestingToken.new({from: accounts[1]});
		const _ownerJBr0mIT = accounts[3]
		const _ownerwliaph8 = accounts[0]
		const _ownerwiuYTMP = accounts[4]
		const _ownerme5ovn = accounts[4]
		const nulleraH5qe = await contractlJ6XLhE.claimedBalanceOf.call(_ownerJBr0mIT, {from: accounts[2]});
		const nullfJ08YOQ = await contractlJ6XLhE.vestedBalanceOf.call(_ownerwliaph8, {from: accounts[1]});
		const nullhUwhRcV = await contractlJ6XLhE.vestedBalanceOf.call(_ownerwiuYTMP, {from: accounts[1]});
		const nullU2Wses7 = await contractlJ6XLhE.vestedBalanceOf.call(_ownerme5ovn, {from: accounts[0]});
	});
})