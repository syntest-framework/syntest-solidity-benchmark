const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const name08Ca0g = "31gTNALVyoUyAIwAKRTrL"
		const symbolsarRRF = "pW6Ml68G5GsOaC3Qb4B65iblJMaha9whQanO9JUMltd33OiYJbNdtOsnkfjlCPmYFVyramu5EphEGVJEs6gMTL3"
		const contractElu2DTQ = await ERC721Metadata.new(name08Ca0g, symbolsarRRF, {from: accounts[4]});
		const nullXA8DbPt = await contractElu2DTQ.symbol.call({from: accounts[2]});
		const nulla1Z5rsv = await contractElu2DTQ.name.call({from: accounts[3]});
		const nullgdBvS7l = await contractElu2DTQ.symbol.call({from: accounts[5]});
		const nullFNzjARK = await contractElu2DTQ.symbol.call({from: accounts[2]});
		const nullotSSJyU = await contractElu2DTQ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});
})