const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractDYJhIiu = await IVestingToken.new({from: accounts[4]});
		const _ownerNLLCb0I = accounts[2]
		const _ownerUHUelt3 = "0x0000000000000000000000000000000000000001"
		const _ownereRC95W = accounts[2]
		const _ownerl3OZmx1 = accounts[3]
		const _ownerNeBbym1 = accounts[3]
		await contractDYJhIiu.claim.call({from: accounts[1]});
		const nullfccYaog = await contractDYJhIiu.vestedBalanceOf.call(_ownerNLLCb0I, {from: accounts[3]});
		const nullNUN2Jsb = await contractDYJhIiu.vestedBalanceOf.call(_ownerUHUelt3, {from: accounts[2]});
		const nullWkxUjfm = await contractDYJhIiu.claimedBalanceOf.call(_ownereRC95W, {from: accounts[1]});
		const nullIns5Y4w = await contractDYJhIiu.vestedBalanceOf.call(_ownerl3OZmx1, {from: "0x0000000000000000000000000000000000000001"});
		const nullqlbPUCX = await contractDYJhIiu.vestedBalanceOf.call(_ownerNeBbym1, {from: "0x0000000000000000000000000000000000000001"});
	});
})