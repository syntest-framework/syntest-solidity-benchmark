const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractIQe4M9j = await IERC721Receiver.new({from: accounts[3]});
		const dataBnqq7b6 = "0x14121d181506090d16141216080e070318101804170c"
		const tokenIdbK1qwd = BigInt("1798")
		const fromRj76mh9 = accounts[2]
		const operatorTQNL6g = accounts[3]
		const datapPgemUK = "0x16050211090711051f1f1a0d1f180d0f1b1f0e0902"
		const tokenIdUvZwlyk = BigInt("389")
		const fromT8XoejG = accounts[1]
		const operatorCyjtcRM = accounts[2]
		const nullLJmGwwC = await contractIQe4M9j.onERC721Received.call(operatorTQNL6g, fromRj76mh9, tokenIdbK1qwd, dataBnqq7b6, {from: accounts[2]});
		const nullX50nZh = await contractIQe4M9j.onERC721Received.call(operatorCyjtcRM, fromT8XoejG, tokenIdUvZwlyk, datapPgemUK, {from: accounts[3]});
	});
})