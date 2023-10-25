const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractcsRL7ca = await IERC721Receiver.new({from: accounts[4]});
		const datactzKw0m = "0x1910091e13031b040c1b150f041f0b0e"
		const tokenIdPLRLsVF = BigInt("1988")
		const fromwnx5Lz4 = accounts[3]
		const operatorIjwAFQs = accounts[2]
		const dataNpqrWg5 = "0x1d101f0409111101051007060a"
		const tokenIdNMHHIAx = BigInt("295")
		const fromIF4TuKX = accounts[5]
		const operatorG0hYuV1 = accounts[5]
		const nullJP9ex1 = await contractcsRL7ca.onERC721Received.call(operatorIjwAFQs, fromwnx5Lz4, tokenIdPLRLsVF, datactzKw0m, {from: "0x0000000000000000000000000000000000000001"});
		const nullMhwhI8j = await contractcsRL7ca.onERC721Received.call(operatorG0hYuV1, fromIF4TuKX, tokenIdNMHHIAx, dataNpqrWg5, {from: accounts[4]});
	});
})