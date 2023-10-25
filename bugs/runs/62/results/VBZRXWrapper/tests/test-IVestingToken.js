const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractVk3L8rJ = await IVestingToken.new({from: accounts[4]});
		const _ownerrT0GjeN = accounts[1]
		const _ownerb7TWwRu = accounts[2]
		const nullruSi0f = await contractVk3L8rJ.vestedBalanceOf.call(_ownerrT0GjeN, {from: accounts[0]});
		await contractVk3L8rJ.claim.call({from: accounts[1]});
		const nullp4OUqkJ = await contractVk3L8rJ.vestedBalanceOf.call(_ownerb7TWwRu, {from: accounts[5]});
	});
})