const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractQU64VuD = await IVestingToken.new({from: accounts[2]});
		const _owner2tA5xy = "0x0000000000000000000000000000000000000001"
		const _ownerDBSK1dO = accounts[5]
		const _ownermZWUJ3A = accounts[1]
		const _ownerghMJBPv = accounts[1]
		const _ownerHb1xcko = accounts[0]
		const nullDV0C6HS = await contractQU64VuD.vestedBalanceOf.call(_owner2tA5xy, {from: accounts[0]});
		const nullOitgwDU = await contractQU64VuD.vestedBalanceOf.call(_ownerDBSK1dO, {from: accounts[3]});
		const nulliLE8ur = await contractQU64VuD.claimedBalanceOf.call(_ownermZWUJ3A, {from: accounts[0]});
		const nulldau5aWr = await contractQU64VuD.claimedBalanceOf.call(_ownerghMJBPv, {from: accounts[3]});
		const nullvLDxWPA = await contractQU64VuD.vestedBalanceOf.call(_ownerHb1xcko, {from: accounts[4]});
	});
})