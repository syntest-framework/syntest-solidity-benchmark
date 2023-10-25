const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameuWDFlK7 = "poh6ifVETNUe9TPb8bv5QcwuDj"
		const symbolGIe6cX = "oK3cEs5j2UhfkJU"
		const contractlVuFlhQ = await ERC721Metadata.new(nameuWDFlK7, symbolGIe6cX, {from: accounts[1]});
		const nullL4lY0Fg = await contractlVuFlhQ.name.call({from: accounts[0]});
		const nullo1h6gXW = await contractlVuFlhQ.symbol.call({from: accounts[1]});
	});
})