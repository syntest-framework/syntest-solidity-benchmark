const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractivKk8w9 = await IERC721Metadata.new({from: accounts[3]});
		const tokenIdrDxgMeF = BigInt("231")
		const tokenIdW7zOMFx = BigInt("1932")
		const nullIJecAB7 = await contractivKk8w9.tokenURI.call(tokenIdrDxgMeF, {from: accounts[0]});
		const nullob2mNOq = await contractivKk8w9.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nullJVtZhhh = await contractivKk8w9.symbol.call({from: accounts[4]});
		const nullLAG1N3s = await contractivKk8w9.tokenURI.call(tokenIdW7zOMFx, {from: accounts[4]});
		const nullDj9jbu = await contractivKk8w9.symbol.call({from: accounts[3]});
	});
})