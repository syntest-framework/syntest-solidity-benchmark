const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractS72ePIN = await IERC721Metadata.new({from: accounts[3]});
		const tokenIdgwp5w3Q = BigInt("446")
		const nullzyjfbd9 = await contractS72ePIN.name.call({from: accounts[0]});
		const nullasGYpoz = await contractS72ePIN.tokenURI.call(tokenIdgwp5w3Q, {from: accounts[0]});
		const nullw7GUAM = await contractS72ePIN.symbol.call({from: accounts[3]});
		const nullKOWGoba = await contractS72ePIN.symbol.call({from: accounts[3]});
		const nullycNfaoO = await contractS72ePIN.symbol.call({from: accounts[2]});
	});
})