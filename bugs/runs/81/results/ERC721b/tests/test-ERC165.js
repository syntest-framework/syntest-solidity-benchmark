const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractGJOsFZq = await ERC165.new({from: accounts[0]});
		const interfaceIduaCTelk = "0x1f1a1606"
		const interfaceIdpOvrh4P = "0x1f030611"
		const interfaceIdSMLISS0 = "0x180c1812"
		const interfaceIdhu71MOW = "0x0b01161f"
		const nullOwEWkWT = await contractGJOsFZq.supportsInterface.call(interfaceIduaCTelk, {from: accounts[5]});
		const nulldVtBRE9 = await contractGJOsFZq.supportsInterface.call(interfaceIdpOvrh4P, {from: accounts[0]});
		const nulluoXGERZ = await contractGJOsFZq.supportsInterface.call(interfaceIdSMLISS0, {from: accounts[5]});
		const nullVlVA1P8 = await contractGJOsFZq.supportsInterface.call(interfaceIdhu71MOW, {from: accounts[2]});
	});
})