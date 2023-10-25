const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractvMnNcl2 = await ERC165.new({from: accounts[4]});
		const interfaceIdsLyZ150 = "0x0d160a04"
		const interfaceIdToYyJsQ = "0x0f0b0707"
		const interfaceIdhGQFFzG = "0x12160c1c"
		const nullKnbnb3r = await contractvMnNcl2.supportsInterface.call(interfaceIdsLyZ150, {from: accounts[4]});
		const nullBLoxTdW = await contractvMnNcl2.supportsInterface.call(interfaceIdToYyJsQ, {from: accounts[4]});
		const nulliHlc7n = await contractvMnNcl2.supportsInterface.call(interfaceIdhGQFFzG, {from: accounts[2]});
	});
})