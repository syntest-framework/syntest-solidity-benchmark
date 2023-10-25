const IVestingToken = artifacts.require("IVestingToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IVestingToken', (accounts) => {
	it('test for IVestingToken', async () => {
		const contractugQSadS = await IVestingToken.new({from: "0x0000000000000000000000000000000000000001"});
		const _ownerxDBuEnb = accounts[4]
		const _ownerHyzPMgR = accounts[2]
		const _owneruBS4CXK = accounts[5]
		const _ownere5Q29d = accounts[1]
		const _ownerbwIn4vD = accounts[5]
		const _ownerVBfnYL = accounts[2]
		const nullTFd9nfE = await contractugQSadS.vestedBalanceOf.call(_ownerxDBuEnb, {from: accounts[0]});
		const nulls7tP4y4 = await contractugQSadS.vestedBalanceOf.call(_ownerHyzPMgR, {from: accounts[5]});
		const nulldfO4ao5 = await contractugQSadS.claimedBalanceOf.call(_owneruBS4CXK, {from: accounts[1]});
		const null3PaTj8 = await contractugQSadS.claimedBalanceOf.call(_ownere5Q29d, {from: accounts[0]});
		const nullUmcw4Zz = await contractugQSadS.claimedBalanceOf.call(_ownerbwIn4vD, {from: accounts[4]});
		const nullElGkJuX = await contractugQSadS.vestedBalanceOf.call(_ownerVBfnYL, {from: accounts[5]});
	});
})