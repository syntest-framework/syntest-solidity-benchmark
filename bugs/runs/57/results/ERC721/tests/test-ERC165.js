const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractlOXMGHc = await ERC165.new({from: accounts[3]});
		const interfaceIdBVs88tW = "0x1f1b1806"
		const interfaceIdYZYeXqJ = "0x051e1d0b"
		const interfaceIdNK0mO76 = "0x050f1406"
		const interfaceIdFZRKgV = "0x100c1c1e"
		const nullgUzJglM = await contractlOXMGHc.supportsInterface.call(interfaceIdBVs88tW, {from: accounts[3]});
		const nullTa0qcpb = await contractlOXMGHc.supportsInterface.call(interfaceIdYZYeXqJ, {from: accounts[4]});
		const null9qclbJ = await contractlOXMGHc.supportsInterface.call(interfaceIdNK0mO76, {from: accounts[4]});
		const nullW1i4gXm = await contractlOXMGHc.supportsInterface.call(interfaceIdFZRKgV, {from: accounts[1]});
	});
})