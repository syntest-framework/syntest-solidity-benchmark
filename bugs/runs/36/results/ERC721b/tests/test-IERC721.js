const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contract1nBFAz = await IERC721.new({from: accounts[5]});
		const tokenId6Af2oi = BigInt("1093")
		const tokvD8N85 = accounts[3]
		const ownerqVSNSh3 = "0x0000000000000000000000000000000000000001"
		const tokenIdCo8ZNlI = BigInt("1165")
		const toqJKjci = accounts[5]
		const fromx20t23z = accounts[4]
		const tokenIdHuyfsSF = BigInt("864")
		const tokenIdcv9bGfa = BigInt("1830")
		const tokenIdU3RlFdO = BigInt("1286")
		const toP7CrHpX = accounts[3]
		const fromT4Xl70Y = accounts[2]
		await contract1nBFAz.approve.call(tokvD8N85, tokenId6Af2oi, {from: accounts[1]});
		const balanceTuZObxj = await contract1nBFAz.balanceOf.call(ownerqVSNSh3, {from: "0x0000000000000000000000000000000000000001"});
		await contract1nBFAz.safeTransferFrom.call(fromx20t23z, toqJKjci, tokenIdCo8ZNlI, {from: accounts[3]});
		const operatorN4mRSWS = await contract1nBFAz.getApproved.call(tokenIdHuyfsSF, {from: accounts[5]});
		const ownerd9S3Xv6 = await contract1nBFAz.ownerOf.call(tokenIdcv9bGfa, {from: accounts[0]});
		await contract1nBFAz.transferFrom.call(fromT4Xl70Y, toP7CrHpX, tokenIdU3RlFdO, {from: accounts[4]});
	});
})