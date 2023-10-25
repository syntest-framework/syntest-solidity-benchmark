const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractvqhSnKb = await IERC721Receiver.new({from: accounts[3]});
		const dataqnQUZj = "0x09131b0a0d0315031c0f0a08021a061b"
		const tokenIdX6kAnoE = BigInt("849")
		const fromL0dYd08 = accounts[4]
		const operatorxQRDNKC = accounts[3]
		const dataUTa03Rs = "0x1e0a171f0d101b"
		const tokenIdO6GTR7D = BigInt("857")
		const fromzWGc78v = accounts[1]
		const operatorevwzvZ = accounts[4]
		const nulloIjoqRl = await contractvqhSnKb.onERC721Received.call(operatorxQRDNKC, fromL0dYd08, tokenIdX6kAnoE, dataqnQUZj, {from: accounts[2]});
		const nullCCyOju9 = await contractvqhSnKb.onERC721Received.call(operatorevwzvZ, fromzWGc78v, tokenIdO6GTR7D, dataUTa03Rs, {from: accounts[2]});
	});
})