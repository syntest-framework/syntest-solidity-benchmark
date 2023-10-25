const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contract0Gl6uY = await IERC721Metadata.new({from: accounts[0]});
		const nullOKeTsjh = await contract0Gl6uY.symbol.call({from: accounts[2]});
		const nullu8m0cIs = await contract0Gl6uY.symbol.call({from: accounts[3]});
		const nullccDpABL = await contract0Gl6uY.symbol.call({from: accounts[3]});
	});
})