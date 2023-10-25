const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameLU3nFli = ""
		const symbolasxVYMO = "eFArgp1dTbdct7lLtBQxjDWj5iSJSbH6CdcXi8ewYR6hkXJeoRotEZBqnzSGEKY0WQwhQ86mip2Pxd1id"
		const contractkuTXmwB = await ERC721Metadata.new(nameLU3nFli, symbolasxVYMO, {from: accounts[4]});
		const nullmgHNgm8 = await contractkuTXmwB.name.call({from: accounts[5]});
		const nullUBQChrt = await contractkuTXmwB.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nullLRk8iy7 = await contractkuTXmwB.symbol.call({from: accounts[3]});
	});
})