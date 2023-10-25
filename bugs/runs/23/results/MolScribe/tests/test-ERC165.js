const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractf8pBXM4 = await ERC165.new({from: accounts[0]});
		const interfaceIdKguGhlz = "0x040a0f1c"
		const interfaceIdzINFn2C = "0x08191506"
		const interfaceIdTVEwAfY = "0x1a031d04"
		const interfaceIdGSZHrgp = "0x19190305"
		const nulltMEbjvU = await contractf8pBXM4.supportsInterface.call(interfaceIdKguGhlz, {from: "0x0000000000000000000000000000000000000001"});
		const nullkaSODPe = await contractf8pBXM4.supportsInterface.call(interfaceIdzINFn2C, {from: accounts[2]});
		const nulldOnCPJk = await contractf8pBXM4.supportsInterface.call(interfaceIdTVEwAfY, {from: accounts[3]});
		const nullgLKlTF4 = await contractf8pBXM4.supportsInterface.call(interfaceIdGSZHrgp, {from: accounts[0]});
	});
})