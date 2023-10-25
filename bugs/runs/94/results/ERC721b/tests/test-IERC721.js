const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractGp5BBAI = await IERC721.new({from: accounts[4]});
		const tokenIdldA8Of = BigInt("653")
		const tokenIdtdxta8a = BigInt("1188")
		const ownerlTuAAiH = accounts[0]
		const tokenIdSJcpQCf = BigInt("1880")
		const _approvedheZrY1Y = true
		const operatorlMRNpES = accounts[3]
		const _approvedFzGNH6v = true
		const operatoreaeSCf8 = "0x0000000000000000000000000000000000000001"
		const operatorEu3ZYrN = await contractGp5BBAI.getApproved.call(tokenIdldA8Of, {from: accounts[3]});
		const operatorIcl9Ol6 = await contractGp5BBAI.getApproved.call(tokenIdtdxta8a, {from: accounts[5]});
		const balanceWp7yzD4 = await contractGp5BBAI.balanceOf.call(ownerlTuAAiH, {from: "0x0000000000000000000000000000000000000001"});
		const operatorheyFhEF = await contractGp5BBAI.getApproved.call(tokenIdSJcpQCf, {from: accounts[1]});
		await contractGp5BBAI.setApprovalForAll.call(operatorlMRNpES, _approvedheZrY1Y, {from: accounts[3]});
		await contractGp5BBAI.setApprovalForAll.call(operatoreaeSCf8, _approvedFzGNH6v, {from: accounts[3]});
	});
})