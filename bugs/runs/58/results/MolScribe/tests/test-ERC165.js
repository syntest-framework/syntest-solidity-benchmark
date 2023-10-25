const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractGWqeTo3 = await ERC165.new({from: accounts[4]});
		const interfaceIdlZ1pAPq = "0x14181d18"
		const interfaceIdZ6u1Fca = "0x1d1e1415"
		const interfaceIdYZHhL8 = "0x1d0d1f05"
		const nullwQbS85e = await contractGWqeTo3.supportsInterface.call(interfaceIdlZ1pAPq, {from: accounts[4]});
		const nullDgPM1SJ = await contractGWqeTo3.supportsInterface.call(interfaceIdZ6u1Fca, {from: accounts[0]});
		const nullvmzNVA3 = await contractGWqeTo3.supportsInterface.call(interfaceIdYZHhL8, {from: accounts[0]});
	});
})