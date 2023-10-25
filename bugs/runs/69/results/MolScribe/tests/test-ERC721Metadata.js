const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const name3HTwog = "0j9Jo15eiEmc18cQ"
		const symbol4G0R2N = "fvuzzfPiXmBSBGAa2MtipROvAs2QjDw9L2E"
		const contractKDGXLIg = await ERC721Metadata.new(name3HTwog, symbol4G0R2N, {from: "0x0000000000000000000000000000000000000001"});
		const null584xuZ = await contractKDGXLIg.symbol.call({from: accounts[5]});
		const nullk8mbyJm = await contractKDGXLIg.symbol.call({from: accounts[3]});
		const nullkyK44zZ = await contractKDGXLIg.symbol.call({from: accounts[4]});
		const nullTEt8PCl = await contractKDGXLIg.name.call({from: accounts[2]});
	});
})