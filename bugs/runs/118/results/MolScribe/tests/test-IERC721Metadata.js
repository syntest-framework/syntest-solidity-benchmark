const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractIWynonR = await IERC721Metadata.new({from: accounts[5]});
		const tokenIdzxVooFO = BigInt("1873")
		const tokenId1YQs5s = BigInt("1089")
		const nullGcD6qPC = await contractIWynonR.tokenURI.call(tokenIdzxVooFO, {from: accounts[1]});
		const nulls4aI9Ht = await contractIWynonR.tokenURI.call(tokenId1YQs5s, {from: accounts[4]});
		const nullw8rzpp1 = await contractIWynonR.symbol.call({from: accounts[1]});
		const nullLd6MKsH = await contractIWynonR.symbol.call({from: accounts[1]});
	});
})