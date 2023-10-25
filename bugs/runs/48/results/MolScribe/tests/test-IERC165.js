const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractcSE6MYk = await IERC165.new({from: accounts[0]});
		const interfaceIdlUrOBos = "0x0c151115"
		const interfaceIdqI8DV9X = "0x1e08140f"
		const interfaceIdnmO5cG1 = "0x0d130101"
		const nullheNFPsS = await contractcSE6MYk.supportsInterface.call(interfaceIdlUrOBos, {from: accounts[0]});
		const null4YURMT = await contractcSE6MYk.supportsInterface.call(interfaceIdqI8DV9X, {from: accounts[3]});
		const nullUuANHj8 = await contractcSE6MYk.supportsInterface.call(interfaceIdnmO5cG1, {from: accounts[0]});
	});
})