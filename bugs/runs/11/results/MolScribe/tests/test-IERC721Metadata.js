const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractwB7Qyct = await IERC721Metadata.new({from: accounts[0]});
		const tokenIdPWKRCoY = BigInt("2000")
		const nullXlRQ807 = await contractwB7Qyct.tokenURI.call(tokenIdPWKRCoY, {from: accounts[3]});
		const nullKj7qvLM = await contractwB7Qyct.symbol.call({from: accounts[1]});
		const nullIfDjrq = await contractwB7Qyct.symbol.call({from: accounts[2]});
	});
})