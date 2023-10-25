const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractfhzSUe = await ERC165.new({from: accounts[0]});
		const interfaceIdpBxn68y = "0x2020120a"
		const interfaceIdU58zQlQ = "0x050b140d"
		const interfaceIdmfCT9Ox = "0x01131f1c"
		const interfaceIdO6sd5Kz = "0x011c090d"
		const interfaceIdw5Zf2nQ = "0x160c131e"
		const nullMMJStHt = await contractfhzSUe.supportsInterface.call(interfaceIdpBxn68y, {from: accounts[2]});
		const nullKUE4tP = await contractfhzSUe.supportsInterface.call(interfaceIdU58zQlQ, {from: accounts[2]});
		const nullwsu4O7M = await contractfhzSUe.supportsInterface.call(interfaceIdmfCT9Ox, {from: accounts[1]});
		const nullR13r9RU = await contractfhzSUe.supportsInterface.call(interfaceIdO6sd5Kz, {from: accounts[4]});
		const nullV8uYNaN = await contractfhzSUe.supportsInterface.call(interfaceIdw5Zf2nQ, {from: accounts[0]});
	});
})