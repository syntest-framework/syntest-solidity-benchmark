const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractarzx35c = await IERC721.new({from: accounts[0]});
		const operatorGXRhzRN = accounts[2]
		const ownerNRpPeDj = accounts[4]
		const _approvedXqNXIJA = false
		const operatorsfJVCCI = accounts[1]
		const tokenIdIs61gs = BigInt("1503")
		const ownerJUNIwUb = accounts[4]
		const nullleP11xY = await contractarzx35c.isApprovedForAll.call(ownerNRpPeDj, operatorGXRhzRN, {from: "0x0000000000000000000000000000000000000001"});
		await contractarzx35c.setApprovalForAll.call(operatorsfJVCCI, _approvedXqNXIJA, {from: accounts[4]});
		const ownerpf2Tbpe = await contractarzx35c.ownerOf.call(tokenIdIs61gs, {from: accounts[0]});
		const balanceWBI9i5K = await contractarzx35c.balanceOf.call(ownerJUNIwUb, {from: accounts[5]});
	});
})