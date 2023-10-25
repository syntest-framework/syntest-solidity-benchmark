const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractxVr3VtY = await IVestingToken.new({from: "0x0000000000000000000000000000000000000001"});
		const _ownerKCWi8vG = accounts[2]
		const _ownervdDhsDN = "0x0000000000000000000000000000000000000001"
		const _ownerUCnrr5v = accounts[4]
		const nullITwIgq0 = await contractxVr3VtY.vestedBalanceOf.call(_ownerKCWi8vG, {from: accounts[0]});
		const nullJmYQseP = await contractxVr3VtY.vestedBalanceOf.call(_ownervdDhsDN, {from: accounts[0]});
		const nulljjL2e5D = await contractxVr3VtY.vestedBalanceOf.call(_ownerUCnrr5v, {from: accounts[0]});
		await contractxVr3VtY.claim.call({from: accounts[4]});
		await contractxVr3VtY.claim.call({from: accounts[1]});
	});
})