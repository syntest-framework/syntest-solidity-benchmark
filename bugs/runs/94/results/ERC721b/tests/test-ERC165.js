const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractkrBCTQR = await ERC165.new({from: accounts[1]});
		const interfaceIdtdTULP5 = "0x09120904"
		const interfaceIdAppIU7 = "0x02030317"
		const interfaceIdkeomw4h = "0x04060604"
		const interfaceIdqp7Ws7X = "0x140b0608"
		const nullfAhB2jn = await contractkrBCTQR.supportsInterface.call(interfaceIdtdTULP5, {from: accounts[0]});
		const nullQHHQAxG = await contractkrBCTQR.supportsInterface.call(interfaceIdAppIU7, {from: accounts[5]});
		const nullxO7ToFv = await contractkrBCTQR.supportsInterface.call(interfaceIdkeomw4h, {from: accounts[3]});
		const nullracZjyC = await contractkrBCTQR.supportsInterface.call(interfaceIdqp7Ws7X, {from: accounts[4]});
	});
})