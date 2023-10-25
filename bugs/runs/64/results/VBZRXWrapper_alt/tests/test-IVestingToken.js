const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractxV3GvHd = await IVestingToken.new({from: accounts[1]});
		const _ownergJiIgKU = accounts[2]
		const _ownerVdjFQE = accounts[4]
		const _ownerZycCge = accounts[0]
		const _ownerDLYibH3 = accounts[2]
		const _ownerY9D2GFX = accounts[5]
		const nullw6GMGT9 = await contractxV3GvHd.vestedBalanceOf.call(_ownergJiIgKU, {from: accounts[2]});
		const nullKzNIDNV = await contractxV3GvHd.vestedBalanceOf.call(_ownerVdjFQE, {from: accounts[2]});
		const nullB99t3Ol = await contractxV3GvHd.vestedBalanceOf.call(_ownerZycCge, {from: accounts[1]});
		const nullCM5RHlB = await contractxV3GvHd.claimedBalanceOf.call(_ownerDLYibH3, {from: accounts[5]});
		await contractxV3GvHd.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullFA130Hr = await contractxV3GvHd.claimedBalanceOf.call(_ownerY9D2GFX, {from: "0x0000000000000000000000000000000000000001"});
	});
})