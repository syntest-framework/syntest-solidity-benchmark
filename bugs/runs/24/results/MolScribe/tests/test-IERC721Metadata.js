const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractLM4BKZb = await IERC721Metadata.new({from: accounts[2]});
		const tokenIdyz7OBTQ = BigInt("219")
		const nullaTmXioH = await contractLM4BKZb.symbol.call({from: accounts[0]});
		const nullF2GmQjJ = await contractLM4BKZb.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nulluLo0OH = await contractLM4BKZb.symbol.call({from: accounts[3]});
		const nullpFUuP2A = await contractLM4BKZb.tokenURI.call(tokenIdyz7OBTQ, {from: accounts[1]});
		const nullqDknBa = await contractLM4BKZb.name.call({from: accounts[1]});
	});
})