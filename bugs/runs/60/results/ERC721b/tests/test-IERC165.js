const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractpm9jCSh = await IERC165.new({from: accounts[0]});
		const interfaceIdKDT7T2 = "0x01081607"
		const interfaceIdxqkhrBP = "0x1e0a1e04"
		const nullZuhAFwX = await contractpm9jCSh.supportsInterface.call(interfaceIdKDT7T2, {from: accounts[3]});
		const nulleNPfj0H = await contractpm9jCSh.supportsInterface.call(interfaceIdxqkhrBP, {from: accounts[3]});
	});
})