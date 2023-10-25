const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractzme30wR = await IVestingToken.new({from: accounts[2]});
		const _ownervD5nIW = accounts[0]
		const _ownerj8fcgsd = accounts[3]
		const _ownerehsJF7z = accounts[5]
		const _owneryIdj86G = accounts[2]
		await contractzme30wR.claim.call({from: accounts[2]});
		const nullB7WzpSh = await contractzme30wR.vestedBalanceOf.call(_ownervD5nIW, {from: accounts[1]});
		const nullvCpM0c9 = await contractzme30wR.claimedBalanceOf.call(_ownerj8fcgsd, {from: accounts[4]});
		const nullDkaThO4 = await contractzme30wR.vestedBalanceOf.call(_ownerehsJF7z, {from: accounts[0]});
		const nullqn1fLN = await contractzme30wR.claimedBalanceOf.call(_owneryIdj86G, {from: accounts[2]});
	});
})