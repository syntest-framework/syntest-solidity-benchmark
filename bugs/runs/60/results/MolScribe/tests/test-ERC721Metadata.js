const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameKQtOQkL = "Bha"
		const symbolTzURLuG = "A"
		const contractB4x1aUi = await ERC721Metadata.new(nameKQtOQkL, symbolTzURLuG, {from: accounts[0]});
		const nulleaE8z51 = await contractB4x1aUi.symbol.call({from: accounts[1]});
		const nullMZxwccZ = await contractB4x1aUi.symbol.call({from: accounts[3]});
	});
})