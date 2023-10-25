const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractRAA8qD = await IERC721Metadata.new({from: accounts[3]});
		const tokenIdobkrns = BigInt("647")
		const nulllkiXn6 = await contractRAA8qD.name.call({from: accounts[4]});
		const nullPGBAnMt = await contractRAA8qD.tokenURI.call(tokenIdobkrns, {from: accounts[1]});
		const nullDi9PYb9 = await contractRAA8qD.name.call({from: accounts[5]});
		const nulldlTRhjt = await contractRAA8qD.symbol.call({from: accounts[3]});
	});
})