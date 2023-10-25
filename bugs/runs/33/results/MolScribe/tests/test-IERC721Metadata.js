const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractcLdAUI = await IERC721Metadata.new({from: accounts[1]});
		const tokenIdW06LezZ = BigInt("690")
		const nullB9rBJ4X = await contractcLdAUI.name.call({from: accounts[3]});
		const null1CeG0H = await contractcLdAUI.name.call({from: accounts[0]});
		const nullXrR3WN6 = await contractcLdAUI.name.call({from: accounts[5]});
		const nullc3c7AM = await contractcLdAUI.tokenURI.call(tokenIdW06LezZ, {from: accounts[1]});
	});
})