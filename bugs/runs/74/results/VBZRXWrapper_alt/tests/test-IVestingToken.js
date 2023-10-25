const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractUfFt3JI = await IVestingToken.new({from: accounts[0]});
		const _ownerRV9f37i = accounts[3]
		const _ownerGmbiZYb = accounts[3]
		const _ownerBAs9BUe = accounts[0]
		await contractUfFt3JI.claim.call({from: accounts[1]});
		const nullRZybt1T = await contractUfFt3JI.claimedBalanceOf.call(_ownerRV9f37i, {from: accounts[2]});
		const nullaqT5Au = await contractUfFt3JI.vestedBalanceOf.call(_ownerGmbiZYb, {from: accounts[1]});
		const nullr2XzEKT = await contractUfFt3JI.vestedBalanceOf.call(_ownerBAs9BUe, {from: accounts[0]});
	});
})