const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractrGPtGDJ = await IERC721Metadata.new({from: accounts[0]});
		const nulljR8fRah = await contractrGPtGDJ.name.call({from: accounts[0]});
		const nullaGqe4s7 = await contractrGPtGDJ.name.call({from: accounts[1]});
		const nulljXeeOQS = await contractrGPtGDJ.symbol.call({from: accounts[3]});
		const nullit8tHDC = await contractrGPtGDJ.name.call({from: accounts[1]});
	});
})