const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contracttj7rhNN = await IERC721Metadata.new({from: accounts[1]});
		const tokenIde6McD1M = BigInt("829")
		const tokenIdc8iD148 = BigInt("884")
		const nullRgSazzs = await contracttj7rhNN.name.call({from: accounts[1]});
		const nullUH2bOaC = await contracttj7rhNN.name.call({from: accounts[3]});
		const nullmiHv80d = await contracttj7rhNN.tokenURI.call(tokenIde6McD1M, {from: accounts[1]});
		const nulliJqtsav = await contracttj7rhNN.tokenURI.call(tokenIdc8iD148, {from: "0x0000000000000000000000000000000000000001"});
	});
})