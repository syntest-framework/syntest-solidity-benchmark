const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractJ0jieqr = await IVestingToken.new({from: accounts[0]});
		const _ownerwSsBDF5 = accounts[5]
		const _ownerKoxffky = accounts[0]
		const nullSm2Qf0I = await contractJ0jieqr.vestedBalanceOf.call(_ownerwSsBDF5, {from: accounts[2]});
		const nullYDJFr3I = await contractJ0jieqr.claimedBalanceOf.call(_ownerKoxffky, {from: accounts[5]});
	});
})