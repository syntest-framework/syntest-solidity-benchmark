const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractiw5us8Q = await ERC165.new({from: accounts[2]});
		const interfaceIdlx07M9N = "0x031f011a"
		const interfaceIdB8hZHxK = "0x1a17110a"
		const interfaceIdwBglrBW = "0x0a15200c"
		const nullecO12pj = await contractiw5us8Q.supportsInterface.call(interfaceIdlx07M9N, {from: accounts[2]});
		const nullQCvXJUZ = await contractiw5us8Q.supportsInterface.call(interfaceIdB8hZHxK, {from: accounts[1]});
		const nullQYYU1RI = await contractiw5us8Q.supportsInterface.call(interfaceIdwBglrBW, {from: accounts[0]});
	});
})