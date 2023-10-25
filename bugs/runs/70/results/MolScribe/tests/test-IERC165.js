const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractvW5ipmY = await IERC165.new({from: accounts[0]});
		const interfaceIdYQxmoIA = "0x1c0e110d"
		const interfaceIdjISpEtZ = "0x1c1b0b1e"
		const nullufSMaeB = await contractvW5ipmY.supportsInterface.call(interfaceIdYQxmoIA, {from: "0x0000000000000000000000000000000000000001"});
		const nullD6gJll = await contractvW5ipmY.supportsInterface.call(interfaceIdjISpEtZ, {from: accounts[2]});
	});
})