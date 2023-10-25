const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractnsO8shA = await IVestingToken.new({from: accounts[5]});
		const _ownerZTLvUJs = accounts[4]
		const _ownerQxVTUJg = accounts[2]
		const _ownerfwN5a7b = accounts[1]
		const _ownerrmYFNs7 = accounts[5]
		const _ownerIuwgBy = accounts[2]
		const nullTh0agA2 = await contractnsO8shA.claimedBalanceOf.call(_ownerZTLvUJs, {from: accounts[2]});
		const nullRjGioPY = await contractnsO8shA.vestedBalanceOf.call(_ownerQxVTUJg, {from: accounts[3]});
		const nullyhRmBla = await contractnsO8shA.vestedBalanceOf.call(_ownerfwN5a7b, {from: accounts[0]});
		const nullkmxQDUv = await contractnsO8shA.vestedBalanceOf.call(_ownerrmYFNs7, {from: accounts[4]});
		const nullneKxcA7 = await contractnsO8shA.claimedBalanceOf.call(_ownerIuwgBy, {from: accounts[0]});
	});
})