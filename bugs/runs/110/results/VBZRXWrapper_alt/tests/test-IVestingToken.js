const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractUZEmNtH = await IVestingToken.new({from: accounts[4]});
		const _ownerKuqMVQA = accounts[2]
		const _ownerUYWSM0s = accounts[0]
		const _ownerWtXBBci = accounts[1]
		const _ownermxGRS6w = accounts[0]
		const null1iNXB0 = await contractUZEmNtH.vestedBalanceOf.call(_ownerKuqMVQA, {from: accounts[3]});
		const nullmPyetcR = await contractUZEmNtH.vestedBalanceOf.call(_ownerUYWSM0s, {from: accounts[5]});
		const nulltqFkPwa = await contractUZEmNtH.claimedBalanceOf.call(_ownerWtXBBci, {from: accounts[2]});
		const nullGnbIcxx = await contractUZEmNtH.vestedBalanceOf.call(_ownermxGRS6w, {from: accounts[1]});
	});
})