const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contract6JEkjz = await IERC721Metadata.new({from: accounts[4]});
		const tokenIdQov8u5I = BigInt("1861")
		const tokenIdGolmoCE = BigInt("1542")
		const tokenIdtrGpbfy = BigInt("1079")
		const nullb6biaiU = await contract6JEkjz.tokenURI.call(tokenIdQov8u5I, {from: accounts[1]});
		const nullsIPzEWv = await contract6JEkjz.tokenURI.call(tokenIdGolmoCE, {from: accounts[2]});
		const nullZj10yl = await contract6JEkjz.tokenURI.call(tokenIdtrGpbfy, {from: accounts[4]});
		const nullDyxGd7 = await contract6JEkjz.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const nulluMGWbj2 = await contract6JEkjz.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const nulleKZv6UR = await contract6JEkjz.symbol.call({from: accounts[0]});
	});
})