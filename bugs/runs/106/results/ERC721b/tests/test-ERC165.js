const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractMcK1EyB = await ERC165.new({from: accounts[2]});
		const interfaceIdNgAO9rP = "0x1617111e"
		const interfaceIdgzZax9u = "0x19120210"
		const interfaceIdCDNJnxV = "0x040f1d0f"
		const interfaceIdWBS0W0o = "0x101b181c"
		const interfaceIdmqZ3mcs = "0x0d0d180b"
		const nullpJm8NsF = await contractMcK1EyB.supportsInterface.call(interfaceIdNgAO9rP, {from: accounts[5]});
		const nullvG2gigV = await contractMcK1EyB.supportsInterface.call(interfaceIdgzZax9u, {from: accounts[3]});
		const nullSoUYZfk = await contractMcK1EyB.supportsInterface.call(interfaceIdCDNJnxV, {from: accounts[0]});
		const nullhbvKgoC = await contractMcK1EyB.supportsInterface.call(interfaceIdWBS0W0o, {from: accounts[2]});
		const nullWt3uu0i = await contractMcK1EyB.supportsInterface.call(interfaceIdmqZ3mcs, {from: accounts[3]});
	});
})