const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractQdTk9S6 = await IERC721Metadata.new({from: accounts[1]});
		const tokenIdPzbnfgo = BigInt("775")
		const nullfMSt3Px = await contractQdTk9S6.name.call({from: accounts[4]});
		const nullh9czS5e = await contractQdTk9S6.tokenURI.call(tokenIdPzbnfgo, {from: accounts[2]});
		const null6yM4Ic = await contractQdTk9S6.symbol.call({from: accounts[1]});
		const nullOYEcshd = await contractQdTk9S6.symbol.call({from: accounts[5]});
	});
})