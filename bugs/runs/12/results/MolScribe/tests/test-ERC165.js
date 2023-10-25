const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractyGCsxB7 = await ERC165.new({from: accounts[1]});
		const interfaceIdT9a9m47 = "0x09090511"
		const interfaceIdE3c9fR0 = "0x17061a19"
		const interfaceIdDuLDn39 = "0x101d1e0b"
		const interfaceIdqdar9SG = "0x15110315"
		const interfaceIdGqygJ56 = "0x060c0013"
		const nullw4ttuc = await contractyGCsxB7.supportsInterface.call(interfaceIdT9a9m47, {from: accounts[2]});
		const nullxmtQPIL = await contractyGCsxB7.supportsInterface.call(interfaceIdE3c9fR0, {from: accounts[2]});
		const nulll4ZWsm2 = await contractyGCsxB7.supportsInterface.call(interfaceIdDuLDn39, {from: accounts[2]});
		const nullxIjUHG8 = await contractyGCsxB7.supportsInterface.call(interfaceIdqdar9SG, {from: accounts[1]});
		const nullUhC4dRG = await contractyGCsxB7.supportsInterface.call(interfaceIdGqygJ56, {from: accounts[3]});
	});
})