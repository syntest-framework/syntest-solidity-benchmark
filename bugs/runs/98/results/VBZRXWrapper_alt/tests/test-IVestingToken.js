const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractoZcLZuS = await IVestingToken.new({from: accounts[5]});
		const _ownerRuOxuF3 = accounts[5]
		const _ownerXqfgPc9 = accounts[4]
		const _ownersnBj42w = accounts[2]
		const nulluYk8Bx = await contractoZcLZuS.vestedBalanceOf.call(_ownerRuOxuF3, {from: accounts[2]});
		const nullEQk4Tdn = await contractoZcLZuS.claimedBalanceOf.call(_ownerXqfgPc9, {from: accounts[4]});
		const nullFYw1PdI = await contractoZcLZuS.vestedBalanceOf.call(_ownersnBj42w, {from: accounts[1]});
	});
})