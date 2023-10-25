const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contracthKJvtV = await IERC721Metadata.new({from: accounts[3]});
		const tokenIdkHHSxoq = BigInt("1878")
		const tokenIdVoXDEE2 = BigInt("1268")
		const nullmyJ8bn7 = await contracthKJvtV.tokenURI.call(tokenIdkHHSxoq, {from: accounts[2]});
		const nullNt714t2 = await contracthKJvtV.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const nullXVREfQk = await contracthKJvtV.name.call({from: accounts[0]});
		const nullEQM58E = await contracthKJvtV.tokenURI.call(tokenIdVoXDEE2, {from: "0x0000000000000000000000000000000000000001"});
		const nullPA9I7Aa = await contracthKJvtV.symbol.call({from: accounts[1]});
	});
})