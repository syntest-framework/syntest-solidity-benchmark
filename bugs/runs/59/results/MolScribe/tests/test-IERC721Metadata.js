const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractQYunn0y = await IERC721Metadata.new({from: accounts[3]});
		const nulli5RVEj9 = await contractQYunn0y.symbol.call({from: accounts[5]});
		const nullBWtcTSj = await contractQYunn0y.name.call({from: accounts[5]});
	});
})