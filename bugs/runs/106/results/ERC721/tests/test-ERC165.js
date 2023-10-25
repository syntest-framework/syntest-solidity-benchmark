const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractDvb2Q1m = await ERC165.new({from: accounts[5]});
		const interfaceIdhu0GJc = "0x1d0d0309"
		const interfaceIdPyEVP76 = "0x09110c1b"
		const interfaceIdfVKiWNK = "0x1c0a1c17"
		const null1ueA0k = await contractDvb2Q1m.supportsInterface.call(interfaceIdhu0GJc, {from: accounts[2]});
		const nullOXkolI0 = await contractDvb2Q1m.supportsInterface.call(interfaceIdPyEVP76, {from: accounts[4]});
		const nullsqD6S7c = await contractDvb2Q1m.supportsInterface.call(interfaceIdfVKiWNK, {from: accounts[0]});
	});
})