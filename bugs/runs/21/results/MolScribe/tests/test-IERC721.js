const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contracthQQmP9w = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIds3eIVYf = BigInt("277")
		const toIpCLQe = accounts[0]
		const fromYpp3hdS = accounts[5]
		const _approvedSfgJTHW = true
		const operatorqgtluVu = accounts[4]
		const tokenIdcjj42bc = BigInt("1770")
		const toYPBdekl = accounts[1]
		const frompgWOUxr = accounts[0]
		const tokenIdYt8AG2Z = BigInt("1134")
		const tokKC4sIy = accounts[2]
		await contracthQQmP9w.transferFrom.call(fromYpp3hdS, toIpCLQe, tokenIds3eIVYf, {from: accounts[1]});
		await contracthQQmP9w.setApprovalForAll.call(operatorqgtluVu, _approvedSfgJTHW, {from: accounts[0]});
		await contracthQQmP9w.safeTransferFrom.call(frompgWOUxr, toYPBdekl, tokenIdcjj42bc, {from: accounts[4]});
		await contracthQQmP9w.approve.call(tokKC4sIy, tokenIdYt8AG2Z, {from: accounts[3]});
	});
})