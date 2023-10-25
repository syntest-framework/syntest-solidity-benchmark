const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractzbeJdM3 = await IVestingToken.new({from: accounts[4]});
		const _ownerX6QMs2Z = accounts[4]
		await contractzbeJdM3.claim.call({from: accounts[1]});
		const nullh20HVGg = await contractzbeJdM3.claimedBalanceOf.call(_ownerX6QMs2Z, {from: accounts[3]});
	});
})