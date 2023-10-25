const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractTwQhTmO = await IVestingToken.new({from: accounts[3]});
		const _ownerxdCuo3C = accounts[1]
		const _ownerNTntZct = accounts[1]
		await contractTwQhTmO.claim.call({from: accounts[1]});
		const nullMRPrkVh = await contractTwQhTmO.claimedBalanceOf.call(_ownerxdCuo3C, {from: accounts[4]});
		const nulldEr5AYN = await contractTwQhTmO.vestedBalanceOf.call(_ownerNTntZct, {from: accounts[1]});
	});
})