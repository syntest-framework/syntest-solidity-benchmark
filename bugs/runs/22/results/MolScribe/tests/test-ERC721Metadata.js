const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameFITxKP8 = "1Fu6X76xt"
		const symbolxP0PAF9 = "IXML"
		const contractfDJFdZl = await ERC721Metadata.new(nameFITxKP8, symbolxP0PAF9, {from: accounts[4]});
		const nullof2VMMK = await contractfDJFdZl.name.call({from: accounts[1]});
		const nullnm6xZuK = await contractfDJFdZl.name.call({from: accounts[2]});
		const nullDVQ0ZWb = await contractfDJFdZl.symbol.call({from: accounts[1]});
	});
})