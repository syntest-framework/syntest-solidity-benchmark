const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractK8kmvH = await IERC721Metadata.new({from: accounts[4]});
		const tokenIduFGhpcz = BigInt("945")
		const tokenIdS9kyMdi = BigInt("1731")
		const nullJnA2qJp = await contractK8kmvH.tokenURI.call(tokenIduFGhpcz, {from: accounts[3]});
		const nullKijPqz8 = await contractK8kmvH.tokenURI.call(tokenIdS9kyMdi, {from: accounts[4]});
		const nulleeMNekK = await contractK8kmvH.symbol.call({from: accounts[0]});
		const nullXUMN5cS = await contractK8kmvH.symbol.call({from: accounts[2]});
	});
})