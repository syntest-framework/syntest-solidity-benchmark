const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractqdjR6pd = await IVestingToken.new({from: accounts[0]});
		const _ownerS0rCTKU = accounts[2]
		const _owneryx71kCa = accounts[5]
		const _ownerX3jixA = accounts[5]
		const _ownerSLE8iHm = accounts[1]
		const _ownernUKgpsW = accounts[2]
		const nullBvfgjYX = await contractqdjR6pd.vestedBalanceOf.call(_ownerS0rCTKU, {from: "0x0000000000000000000000000000000000000001"});
		const nullYbdWzDg = await contractqdjR6pd.vestedBalanceOf.call(_owneryx71kCa, {from: accounts[1]});
		const nullgla8K1z = await contractqdjR6pd.claimedBalanceOf.call(_ownerX3jixA, {from: accounts[3]});
		const nullCbBPjIv = await contractqdjR6pd.vestedBalanceOf.call(_ownerSLE8iHm, {from: accounts[2]});
		const nullBbvbOYK = await contractqdjR6pd.claimedBalanceOf.call(_ownernUKgpsW, {from: accounts[5]});
	});
})