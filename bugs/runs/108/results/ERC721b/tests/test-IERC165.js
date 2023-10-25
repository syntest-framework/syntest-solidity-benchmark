const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractwkJ21D = await IERC165.new({from: accounts[3]});
		const interfaceIdtjPP7jr = "0x0d0f0e15"
		const interfaceIdfNBgED = "0x14121e13"
		const interfaceIdYbFhjYC = "0x0d1f1c1c"
		const interfaceIdAr8CL6W = "0x1c111804"
		const interfaceIdAzrlu2A = "0x15091204"
		const nullzBm3VHj = await contractwkJ21D.supportsInterface.call(interfaceIdtjPP7jr, {from: accounts[5]});
		const nullS1xNtaG = await contractwkJ21D.supportsInterface.call(interfaceIdfNBgED, {from: accounts[4]});
		const nullpt1YPZm = await contractwkJ21D.supportsInterface.call(interfaceIdYbFhjYC, {from: accounts[4]});
		const nullv5W7ElW = await contractwkJ21D.supportsInterface.call(interfaceIdAr8CL6W, {from: "0x0000000000000000000000000000000000000001"});
		const nullMrcPmMb = await contractwkJ21D.supportsInterface.call(interfaceIdAzrlu2A, {from: accounts[2]});
	});
})