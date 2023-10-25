const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractdyRjRVl = await IERC721Metadata.new({from: accounts[5]});
		const nullPZiyiZU = await contractdyRjRVl.symbol.call({from: accounts[4]});
		const nullB8oK2Ly = await contractdyRjRVl.symbol.call({from: accounts[3]});
		const nullXY3BQur = await contractdyRjRVl.symbol.call({from: accounts[1]});
		const nullHMW7mOs = await contractdyRjRVl.symbol.call({from: accounts[4]});
	});
})