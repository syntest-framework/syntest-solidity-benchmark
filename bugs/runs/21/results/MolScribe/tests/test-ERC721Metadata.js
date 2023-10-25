const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameaRzaz1X = "BLdpaa4CPg4PHve9AiVCVTCu1xYPDgNwkiZvQhPdRaqJGC"
		const symbolNl2m8Kl = "e1iqOmIfI"
		const contractZ248JFp = await ERC721Metadata.new(nameaRzaz1X, symbolNl2m8Kl, {from: accounts[0]});
		const nullt0RlDiC = await contractZ248JFp.symbol.call({from: accounts[4]});
		const nullu354xpa = await contractZ248JFp.symbol.call({from: accounts[0]});
		const nullM1zybn7 = await contractZ248JFp.symbol.call({from: accounts[1]});
	});
})