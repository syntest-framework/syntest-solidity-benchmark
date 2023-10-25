const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameXvwqdK9 = "7uGDkAGsSRyQMl1M6c1vfDwNiSSWnQmWqaSh3iEGwxeNKRvw3rFS8rnBirtFsHxPreFci3GvLAPVaej5Uw"
		const symbolJuO1Yyw = "l8H2VG1o4NHGTo92c1g6z68ZH2U7WQzCvGAzVlszFMu8ZMDfXMzmcJRR2DcqlolI2QRI1dSozGUd8qMOjV4bfVAlqxA5W1"
		const contractvjo7trG = await ERC721Metadata.new(nameXvwqdK9, symbolJuO1Yyw, {from: accounts[0]});
		const nullJk4x2Ut = await contractvjo7trG.name.call({from: accounts[2]});
		const nullu6Eonmx = await contractvjo7trG.symbol.call({from: accounts[1]});
		const nullWVlksfm = await contractvjo7trG.name.call({from: accounts[4]});
	});
})