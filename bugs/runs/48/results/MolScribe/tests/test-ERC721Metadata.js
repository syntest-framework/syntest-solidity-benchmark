const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameTb5zpiZ = "VnjBl1ygY7FVIanmaYcfHccIuSUkQLTH68jpWwxg9CkETSxoXrOhPmm3RvmSvWf4Cz4fPOzBEQqtZTeuDGIRkyMlEo"
		const symbolx3qBgPL = "wh"
		const contractRu1xqDU = await ERC721Metadata.new(nameTb5zpiZ, symbolx3qBgPL, {from: accounts[4]});
		const nullVT26ezf = await contractRu1xqDU.symbol.call({from: accounts[3]});
		const nulldDW92B = await contractRu1xqDU.name.call({from: accounts[5]});
		const nullXg93s6V = await contractRu1xqDU.name.call({from: accounts[4]});
		const nullLR0Oovf = await contractRu1xqDU.name.call({from: accounts[3]});
		const nullVvrF2Cm = await contractRu1xqDU.symbol.call({from: accounts[0]});
		const nullFBax1Z4 = await contractRu1xqDU.symbol.call({from: accounts[4]});
	});
})