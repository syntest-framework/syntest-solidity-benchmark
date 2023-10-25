const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractyGecE4 = await ERC165.new({from: accounts[4]});
		const interfaceIdifq5cQg = "0x0e190112"
		const interfaceIdk6rvu3Z = "0x01101002"
		const interfaceIdFvf7xrp = "0x14101e05"
		const interfaceIdgn7IM9X = "0x0f161110"
		const nullGho9b1B = await contractyGecE4.supportsInterface.call(interfaceIdifq5cQg, {from: accounts[4]});
		const nullYH9zWFa = await contractyGecE4.supportsInterface.call(interfaceIdk6rvu3Z, {from: accounts[3]});
		const nullXEMwKuY = await contractyGecE4.supportsInterface.call(interfaceIdFvf7xrp, {from: accounts[5]});
		const nullyAPCTLZ = await contractyGecE4.supportsInterface.call(interfaceIdgn7IM9X, {from: accounts[1]});
	});
})