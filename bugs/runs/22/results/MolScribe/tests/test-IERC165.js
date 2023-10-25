const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractF17msb3 = await IERC165.new({from: accounts[2]});
		const interfaceIdrFYuRjK = "0x17110110"
		const interfaceIdzBl6ZmA = "0x050b090d"
		const interfaceIdNOwCIx = "0x170c1b0b"
		const interfaceIdl9Gn4vh = "0x07171a03"
		const nulljEJ8oYR = await contractF17msb3.supportsInterface.call(interfaceIdrFYuRjK, {from: accounts[2]});
		const null1IhKU3 = await contractF17msb3.supportsInterface.call(interfaceIdzBl6ZmA, {from: accounts[2]});
		const nullVnWw7R = await contractF17msb3.supportsInterface.call(interfaceIdNOwCIx, {from: accounts[2]});
		const nullV7mXG92 = await contractF17msb3.supportsInterface.call(interfaceIdl9Gn4vh, {from: accounts[5]});
	});
})