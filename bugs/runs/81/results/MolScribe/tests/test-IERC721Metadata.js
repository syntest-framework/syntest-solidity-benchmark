const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractONVHDgp = await IERC721Metadata.new({from: accounts[2]});
		const tokenIdlWGpW6N = BigInt("2006")
		const tokenIdgvBrZgh = BigInt("1823")
		const nullOkcrAV6 = await contractONVHDgp.symbol.call({from: accounts[0]});
		const nullZGMbgyb = await contractONVHDgp.tokenURI.call(tokenIdlWGpW6N, {from: accounts[4]});
		const nullxwGgdFO = await contractONVHDgp.tokenURI.call(tokenIdgvBrZgh, {from: accounts[0]});
	});
})