const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contracthEOeArL = await IERC721.new({from: accounts[4]});
		const operatoro21Wfwz = accounts[1]
		const ownertkMMBuc = accounts[5]
		const operatorg1ILyik = accounts[4]
		const ownerqAo5BY = accounts[3]
		const _approvedPupRSqk = true
		const operatorrY88YOT = accounts[0]
		const tokenId7etiAA = BigInt("821")
		const nullYnRIaWI = await contracthEOeArL.isApprovedForAll.call(ownertkMMBuc, operatoro21Wfwz, {from: accounts[1]});
		const nullEwwagEF = await contracthEOeArL.isApprovedForAll.call(ownerqAo5BY, operatorg1ILyik, {from: accounts[2]});
		await contracthEOeArL.setApprovalForAll.call(operatorrY88YOT, _approvedPupRSqk, {from: accounts[0]});
		const ownerlZDN0Tv = await contracthEOeArL.ownerOf.call(tokenId7etiAA, {from: accounts[3]});
	});
})