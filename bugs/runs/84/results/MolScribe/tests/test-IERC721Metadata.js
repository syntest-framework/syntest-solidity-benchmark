const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractWkRPiVF = await IERC721Metadata.new({from: accounts[0]});
		const nullaUuvKfX = await contractWkRPiVF.name.call({from: accounts[2]});
		const nullRPq9bN = await contractWkRPiVF.name.call({from: accounts[4]});
		const nulll8CIdes = await contractWkRPiVF.symbol.call({from: accounts[0]});
	});
})