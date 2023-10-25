const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractZEH3ThR = await IERC721.new({from: accounts[2]});
		const _approvedLA7LVH = true
		const operatorguZLMVo = "0x0000000000000000000000000000000000000001"
		const dataCTlBlmO = "0x05031b0a021d0c0003090d1e190d0d1609"
		const tokenIdXO4C0f7 = BigInt("1821")
		const toeRTXPZh = accounts[4]
		const fromMwy7a49 = accounts[2]
		const tokenId6HMfM6 = BigInt("618")
		const todyqgVP1 = accounts[3]
		const tokenIdIxj7Ft3 = BigInt("115")
		const toz726am = accounts[0]
		const fromCJEuys7 = accounts[4]
		const operatorETWkPgm = accounts[0]
		const ownerCIFathI = accounts[0]
		await contractZEH3ThR.setApprovalForAll.call(operatorguZLMVo, _approvedLA7LVH, {from: accounts[1]});
		await contractZEH3ThR.safeTransferFrom.call(fromMwy7a49, toeRTXPZh, tokenIdXO4C0f7, dataCTlBlmO, {from: accounts[2]});
		await contractZEH3ThR.approve.call(todyqgVP1, tokenId6HMfM6, {from: accounts[1]});
		await contractZEH3ThR.safeTransferFrom.call(fromCJEuys7, toz726am, tokenIdIxj7Ft3, {from: accounts[1]});
		const nullbsxuHzV = await contractZEH3ThR.isApprovedForAll.call(ownerCIFathI, operatorETWkPgm, {from: accounts[4]});
	});
})