const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractGGbUH6e = await IERC721Metadata.new({from: accounts[3]});
		const nullx1PwUCh = await contractGGbUH6e.symbol.call({from: accounts[0]});
		const nullnaWofOC = await contractGGbUH6e.symbol.call({from: accounts[0]});
		const nullkDPWk3f = await contractGGbUH6e.symbol.call({from: accounts[2]});
		const nullqZXHeOc = await contractGGbUH6e.name.call({from: accounts[3]});
	});
})