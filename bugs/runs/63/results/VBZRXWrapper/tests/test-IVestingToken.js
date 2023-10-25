const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractb2Dfy3G = await IVestingToken.new({from: accounts[1]});
		const _ownerB92am6r = accounts[1]
		const nullMwZFfsF = await contractb2Dfy3G.vestedBalanceOf.call(_ownerB92am6r, {from: accounts[0]});
		await contractb2Dfy3G.claim.call({from: accounts[0]});
	});
})