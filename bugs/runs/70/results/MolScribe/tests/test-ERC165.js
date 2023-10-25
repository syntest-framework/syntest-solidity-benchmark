const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracthvuW7of = await ERC165.new({from: accounts[5]});
		const interfaceIdJjILqLy = "0x13180812"
		const interfaceIdmgd3a6 = "0x0e1f0204"
		const interfaceIdSGKzxSY = "0x0c131d18"
		const nullV86rOsk = await contracthvuW7of.supportsInterface.call(interfaceIdJjILqLy, {from: accounts[5]});
		const nullcCdq4DT = await contracthvuW7of.supportsInterface.call(interfaceIdmgd3a6, {from: accounts[4]});
		const nullfaSfia0 = await contracthvuW7of.supportsInterface.call(interfaceIdSGKzxSY, {from: accounts[2]});
	});
})