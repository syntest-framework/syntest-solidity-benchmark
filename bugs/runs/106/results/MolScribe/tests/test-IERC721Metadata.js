const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractl407hXh = await IERC721Metadata.new({from: accounts[1]});
		const tokenIdzhCv4kf = BigInt("1994")
		const tokenIdB1dTjyu = BigInt("1925")
		const nulljXhrrXw = await contractl407hXh.tokenURI.call(tokenIdzhCv4kf, {from: "0x0000000000000000000000000000000000000001"});
		const nullEeuhHsG = await contractl407hXh.symbol.call({from: accounts[0]});
		const nullQMFCEuy = await contractl407hXh.symbol.call({from: accounts[0]});
		const nullumSAJLR = await contractl407hXh.name.call({from: accounts[1]});
		const nulllDl3u1X = await contractl407hXh.tokenURI.call(tokenIdB1dTjyu, {from: accounts[3]});
	});
})