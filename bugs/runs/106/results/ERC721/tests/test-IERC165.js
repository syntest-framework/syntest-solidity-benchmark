const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractRJkIFU3 = await IERC165.new({from: accounts[0]});
		const interfaceIde9lWd4E = "0x030f0e18"
		const interfaceIdxlbR93 = "0x18061817"
		const interfaceIdoxxRrC0 = "0x0d171c0c"
		const nullMIoty8y = await contractRJkIFU3.supportsInterface.call(interfaceIde9lWd4E, {from: accounts[0]});
		const nulldIGJBhE = await contractRJkIFU3.supportsInterface.call(interfaceIdxlbR93, {from: "0x0000000000000000000000000000000000000001"});
		const nullpSlOTx3 = await contractRJkIFU3.supportsInterface.call(interfaceIdoxxRrC0, {from: accounts[3]});
	});
})