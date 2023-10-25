const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractjciu92K = await IERC721Metadata.new({from: accounts[4]});
		const tokenIdOSELJUI = BigInt("988")
		const tokenIdTtkD2Ji = BigInt("742")
		const nullrQ4vBzM = await contractjciu92K.name.call({from: accounts[4]});
		const nulltITSBrb = await contractjciu92K.symbol.call({from: accounts[2]});
		const nullU7Hipsd = await contractjciu92K.tokenURI.call(tokenIdOSELJUI, {from: accounts[2]});
		const nullFGPfQxf = await contractjciu92K.symbol.call({from: accounts[4]});
		const nullp49lH1u = await contractjciu92K.tokenURI.call(tokenIdTtkD2Ji, {from: accounts[4]});
	});
})