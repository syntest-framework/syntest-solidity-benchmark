const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractrdN1AKi = await IERC721Metadata.new({from: accounts[5]});
		const tokenIdFydDbcV = BigInt("1965")
		const nullNg007F = await contractrdN1AKi.symbol.call({from: accounts[4]});
		const nullAfNBhmM = await contractrdN1AKi.symbol.call({from: accounts[1]});
		const nullmnljK2P = await contractrdN1AKi.tokenURI.call(tokenIdFydDbcV, {from: accounts[4]});
	});
})