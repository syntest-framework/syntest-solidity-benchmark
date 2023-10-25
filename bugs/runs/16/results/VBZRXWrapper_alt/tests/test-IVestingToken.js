const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractR9e38pe = await IVestingToken.new({from: accounts[2]});
		const _ownerLWoULm = accounts[2]
		const _ownerOkK2fAw = accounts[2]
		const _ownerhtVXCuI = accounts[4]
		const _ownerE8MLtgJ = accounts[5]
		const _ownerpKqxN5y = accounts[5]
		const nullTy40Rz = await contractR9e38pe.vestedBalanceOf.call(_ownerLWoULm, {from: accounts[4]});
		const nullEKajDPn = await contractR9e38pe.vestedBalanceOf.call(_ownerOkK2fAw, {from: accounts[5]});
		const nullBpPhXs = await contractR9e38pe.claimedBalanceOf.call(_ownerhtVXCuI, {from: accounts[4]});
		await contractR9e38pe.claim.call({from: accounts[2]});
		const nullmC69WgF = await contractR9e38pe.vestedBalanceOf.call(_ownerE8MLtgJ, {from: accounts[1]});
		const nullAozkwD = await contractR9e38pe.vestedBalanceOf.call(_ownerpKqxN5y, {from: accounts[2]});
	});
})