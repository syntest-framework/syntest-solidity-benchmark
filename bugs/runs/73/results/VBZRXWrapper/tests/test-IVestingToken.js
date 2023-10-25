const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractjlnBXwt = await IVestingToken.new({from: accounts[2]});
		const _ownerpB9DovK = accounts[4]
		const _ownercxQuz0g = accounts[2]
		const _ownerSWzWrqc = accounts[1]
		const nullAp8xl9N = await contractjlnBXwt.vestedBalanceOf.call(_ownerpB9DovK, {from: accounts[2]});
		const nullpVYuZS2 = await contractjlnBXwt.vestedBalanceOf.call(_ownercxQuz0g, {from: accounts[0]});
		await contractjlnBXwt.claim.call({from: accounts[2]});
		const nullGFXlQEz = await contractjlnBXwt.claimedBalanceOf.call(_ownerSWzWrqc, {from: accounts[4]});
	});
})