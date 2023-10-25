const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracto6wO7XU = await ERC165.new({from: accounts[1]});
		const interfaceIdSURwbGQ = "0x14001f18"
		const interfaceIdN7OruQo = "0x09090612"
		const interfaceIdHugDMf = "0x01001815"
		const nullKXrYf4z = await contracto6wO7XU.supportsInterface.call(interfaceIdSURwbGQ, {from: accounts[0]});
		const nullRU5RyPT = await contracto6wO7XU.supportsInterface.call(interfaceIdN7OruQo, {from: accounts[3]});
		const nullUeu18C = await contracto6wO7XU.supportsInterface.call(interfaceIdHugDMf, {from: accounts[5]});
	});
})