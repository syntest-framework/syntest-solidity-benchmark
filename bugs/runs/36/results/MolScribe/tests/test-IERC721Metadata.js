const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractcn2b82U = await IERC721Metadata.new({from: accounts[1]});
		const nullB5ea4Ef = await contractcn2b82U.name.call({from: accounts[2]});
		const nullaXYQ5Cv = await contractcn2b82U.symbol.call({from: accounts[2]});
		const nullCltN0Ow = await contractcn2b82U.symbol.call({from: accounts[5]});
		const nullQ3qBaF = await contractcn2b82U.symbol.call({from: accounts[3]});
	});
})