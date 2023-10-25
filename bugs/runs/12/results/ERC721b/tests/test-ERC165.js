const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractLl76Y1N = await ERC165.new({from: accounts[5]});
		const interfaceIdwZ1hZqD = "0x14041c0c"
		const interfaceIdKOIbp4v = "0x110d1d0e"
		const interfaceIdJVJYMWC = "0x17070513"
		const interfaceIdDPGhnZb = "0x1906010b"
		const nullTDemxhL = await contractLl76Y1N.supportsInterface.call(interfaceIdwZ1hZqD, {from: accounts[4]});
		const nullftQmQB3 = await contractLl76Y1N.supportsInterface.call(interfaceIdKOIbp4v, {from: accounts[4]});
		const nullVPEUL0f = await contractLl76Y1N.supportsInterface.call(interfaceIdJVJYMWC, {from: accounts[1]});
		const nullaEgcdX = await contractLl76Y1N.supportsInterface.call(interfaceIdDPGhnZb, {from: accounts[2]});
	});
})