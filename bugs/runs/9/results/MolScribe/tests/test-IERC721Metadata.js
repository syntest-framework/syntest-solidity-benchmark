const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractiZGPLw = await IERC721Metadata.new({from: accounts[1]});
		const nulloFusYsU = await contractiZGPLw.symbol.call({from: accounts[3]});
		const nullz9Zdzn6 = await contractiZGPLw.symbol.call({from: accounts[1]});
		const nullaDX0Td = await contractiZGPLw.name.call({from: accounts[1]});
	});
})