const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractNzPBDwv = await IERC721Metadata.new({from: accounts[1]});
		const tokenIdsCBcwFW = BigInt("1358")
		const tokenIdVPJs5Hp = BigInt("1195")
		const nulluRyDZJ9 = await contractNzPBDwv.symbol.call({from: accounts[3]});
		const null4grmVP = await contractNzPBDwv.tokenURI.call(tokenIdsCBcwFW, {from: accounts[0]});
		const nullZfj645Y = await contractNzPBDwv.tokenURI.call(tokenIdVPJs5Hp, {from: accounts[1]});
	});
})