const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractWjyeoaQ = await ERC165.new({from: accounts[3]});
		const interfaceIdzV6aok = "0x040e0817"
		const interfaceIdzI6VmZY = "0x06130f09"
		const interfaceIdgwhtO3F = "0x1705170d"
		const interfaceIduAQzC21 = "0x05060706"
		const interfaceIdoaTbApV = "0x0a1f1e13"
		const nullX6vIGOa = await contractWjyeoaQ.supportsInterface.call(interfaceIdzV6aok, {from: accounts[5]});
		const nullfq9q7US = await contractWjyeoaQ.supportsInterface.call(interfaceIdzI6VmZY, {from: accounts[2]});
		const nulls2mP28 = await contractWjyeoaQ.supportsInterface.call(interfaceIdgwhtO3F, {from: accounts[1]});
		const nullWwrLg3g = await contractWjyeoaQ.supportsInterface.call(interfaceIduAQzC21, {from: accounts[5]});
		const nullR8ibUIb = await contractWjyeoaQ.supportsInterface.call(interfaceIdoaTbApV, {from: accounts[4]});
	});
})