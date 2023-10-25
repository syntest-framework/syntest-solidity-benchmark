const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractaUaH8dR = await IVestingToken.new({from: accounts[5]});
		const _ownerfFE2wAB = accounts[1]
		const _ownerHb1JOAo = accounts[2]
		const nullZJjm72 = await contractaUaH8dR.claimedBalanceOf.call(_ownerfFE2wAB, {from: "0x0000000000000000000000000000000000000001"});
		await contractaUaH8dR.claim.call({from: accounts[4]});
		const nullTg1o7pZ = await contractaUaH8dR.vestedBalanceOf.call(_ownerHb1JOAo, {from: accounts[5]});
	});
})