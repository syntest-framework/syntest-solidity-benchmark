const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractzhnHKW5 = await IERC165.new({from: accounts[2]});
		const interfaceIddZNPqeL = "0x0c021614"
		const interfaceIdYLqbyR = "0x08061d13"
		const interfaceIdIMRVhur = "0x0f051a03"
		const interfaceIdshscC6E = "0x150d021a"
		const nullGWsXhvO = await contractzhnHKW5.supportsInterface.call(interfaceIddZNPqeL, {from: accounts[1]});
		const nulllGWNqPV = await contractzhnHKW5.supportsInterface.call(interfaceIdYLqbyR, {from: accounts[2]});
		const nullSyQFksu = await contractzhnHKW5.supportsInterface.call(interfaceIdIMRVhur, {from: "0x0000000000000000000000000000000000000001"});
		const nullJR2h0M = await contractzhnHKW5.supportsInterface.call(interfaceIdshscC6E, {from: accounts[1]});
	});
})