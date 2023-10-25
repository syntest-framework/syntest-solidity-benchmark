const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractqHuUtty = await IERC721Metadata.new({from: accounts[2]});
		const tokenIdYESA4c = BigInt("1786")
		const nullTSA9aUy = await contractqHuUtty.symbol.call({from: accounts[1]});
		const nullTv65nDS = await contractqHuUtty.tokenURI.call(tokenIdYESA4c, {from: accounts[3]});
		const nullqgD4EF0 = await contractqHuUtty.name.call({from: accounts[0]});
		const nullkJ8Mzdc = await contractqHuUtty.symbol.call({from: accounts[2]});
		const nullqit5vU = await contractqHuUtty.symbol.call({from: accounts[1]});
		const nullZC4ssNg = await contractqHuUtty.name.call({from: accounts[3]});
	});
})