const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const namezfevjHP = "J"
		const symbolz83VMxB = "2NuDJNDygPMNV3blt"
		const contractf8QwCsN = await ERC721Metadata.new(namezfevjHP, symbolz83VMxB, {from: accounts[0]});
		const nullVMXDXuF = await contractf8QwCsN.symbol.call({from: accounts[2]});
		const nullDNwZ2V6 = await contractf8QwCsN.symbol.call({from: accounts[3]});
		const nullyD31wYB = await contractf8QwCsN.symbol.call({from: accounts[0]});
		const nullUycn8wo = await contractf8QwCsN.symbol.call({from: accounts[3]});
		const nullJUFgkml = await contractf8QwCsN.name.call({from: accounts[4]});
	});
})