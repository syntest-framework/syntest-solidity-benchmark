const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractJG5AEyL = await IERC721.new({from: accounts[4]});
		const _approvedPgWDYZy = true
		const operatorXajD40V = accounts[2]
		const tokenIdb56iUSG = BigInt("2020")
		const toTwDEXDA = accounts[2]
		const tokenIdAQSaCLo = BigInt("2015")
		const dataQzW9O5 = "0x14041511090d111b1c0c0f020310051d0a191012171d10"
		const tokenIdY6eikE5 = BigInt("1155")
		const toCYFjcC7 = accounts[1]
		const fromtWE83sa = accounts[4]
		await contractJG5AEyL.setApprovalForAll.call(operatorXajD40V, _approvedPgWDYZy, {from: accounts[5]});
		await contractJG5AEyL.approve.call(toTwDEXDA, tokenIdb56iUSG, {from: accounts[4]});
		const ownerUSIgMHb = await contractJG5AEyL.ownerOf.call(tokenIdAQSaCLo, {from: accounts[5]});
		await contractJG5AEyL.safeTransferFrom.call(fromtWE83sa, toCYFjcC7, tokenIdY6eikE5, dataQzW9O5, {from: accounts[0]});
	});
})