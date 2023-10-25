const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractTw63O3R = await IERC721Metadata.new({from: accounts[4]});
		const tokenIduc3S2pc = BigInt("1735")
		const nullFhlUCkG = await contractTw63O3R.symbol.call({from: accounts[2]});
		const nullaOQorw = await contractTw63O3R.tokenURI.call(tokenIduc3S2pc, {from: accounts[2]});
	});
})