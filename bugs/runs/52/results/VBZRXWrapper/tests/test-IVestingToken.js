const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractUiqVatn = await IVestingToken.new({from: accounts[4]});
		const _ownerqDZ21U7 = accounts[2]
		const _ownersQiSMG7 = accounts[4]
		const _ownerfXM6z0n = accounts[1]
		const nullDdbeU9 = await contractUiqVatn.vestedBalanceOf.call(_ownerqDZ21U7, {from: accounts[0]});
		const nullLnvU3QT = await contractUiqVatn.vestedBalanceOf.call(_ownersQiSMG7, {from: accounts[3]});
		const nullWiRY9oh = await contractUiqVatn.vestedBalanceOf.call(_ownerfXM6z0n, {from: accounts[0]});
		await contractUiqVatn.claim.call({from: accounts[1]});
	});
})