const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractfSamQd = await IERC721Receiver.new({from: accounts[2]});
		const dataIU1SrfK = "0x0b131912011708120303"
		const tokenIdWMwzIG = BigInt("891")
		const fromqsuKnnb = accounts[1]
		const operatorxEfyCb = accounts[3]
		const datayBuqNd7 = "0x0f0d070b0a030b1f0f19020003"
		const tokenIdAn4K7vX = BigInt("1910")
		const fromhVPqBbw = accounts[1]
		const operatorQ2XWGeW = accounts[0]
		const dataSxVRvk0 = "0x07101a10"
		const tokenIdVeKtMQ7 = BigInt("1659")
		const fromIdj2VJn = accounts[1]
		const operatorLrmuOHG = accounts[2]
		const dataDdgF8T = "0x1d071e14"
		const tokenId4TEX8x = BigInt("925")
		const fromvlwQ07S = accounts[2]
		const operatorTD21EgV = accounts[3]
		const nullZUdZkcD = await contractfSamQd.onERC721Received.call(operatorxEfyCb, fromqsuKnnb, tokenIdWMwzIG, dataIU1SrfK, {from: accounts[2]});
		const nullZTkcnC0 = await contractfSamQd.onERC721Received.call(operatorQ2XWGeW, fromhVPqBbw, tokenIdAn4K7vX, datayBuqNd7, {from: accounts[4]});
		const nullIP11T5c = await contractfSamQd.onERC721Received.call(operatorLrmuOHG, fromIdj2VJn, tokenIdVeKtMQ7, dataSxVRvk0, {from: accounts[1]});
		const nullJ6uMzFF = await contractfSamQd.onERC721Received.call(operatorTD21EgV, fromvlwQ07S, tokenId4TEX8x, dataDdgF8T, {from: accounts[0]});
	});
})