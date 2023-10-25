const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractOu0J2dd = await IVestingToken.new({from: accounts[1]});
		const _ownersE6GjFh = accounts[4]
		const _ownerOsCh6X = accounts[0]
		const _ownerYU1bxDT = "0x0000000000000000000000000000000000000001"
		const nullBA8y1Kp = await contractOu0J2dd.vestedBalanceOf.call(_ownersE6GjFh, {from: accounts[4]});
		const nullrRjxT02 = await contractOu0J2dd.vestedBalanceOf.call(_ownerOsCh6X, {from: accounts[4]});
		await contractOu0J2dd.claim.call({from: accounts[5]});
		const nullGfUq4v = await contractOu0J2dd.vestedBalanceOf.call(_ownerYU1bxDT, {from: accounts[4]});
	});
})