const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractVzJvHsq = await IERC721Metadata.new({from: accounts[1]});
		const tokenId4hMKFO = BigInt("495")
		const nullgJEGlXS = await contractVzJvHsq.symbol.call({from: accounts[4]});
		const nullkXupnfJ = await contractVzJvHsq.tokenURI.call(tokenId4hMKFO, {from: accounts[3]});
		const nulljnlym8X = await contractVzJvHsq.symbol.call({from: accounts[3]});
		const nullVyATqpI = await contractVzJvHsq.symbol.call({from: accounts[3]});
		const nullbOuROb = await contractVzJvHsq.symbol.call({from: accounts[2]});
	});
})