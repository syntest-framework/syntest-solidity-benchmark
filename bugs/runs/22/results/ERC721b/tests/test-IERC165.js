const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractZ8miGd = await IERC165.new({from: accounts[0]});
		const interfaceIduXYDF9g = "0x09100f1f"
		const interfaceIdBT1yFtj = "0x10100e01"
		const interfaceIdGuBb4o = "0x0f1f1003"
		const interfaceIdMypi0V = "0x171c081d"
		const nullO0FYpk6 = await contractZ8miGd.supportsInterface.call(interfaceIduXYDF9g, {from: accounts[3]});
		const nullTqgUa4U = await contractZ8miGd.supportsInterface.call(interfaceIdBT1yFtj, {from: accounts[1]});
		const nullmBT9LAN = await contractZ8miGd.supportsInterface.call(interfaceIdGuBb4o, {from: accounts[1]});
		const nullMoucgHJ = await contractZ8miGd.supportsInterface.call(interfaceIdMypi0V, {from: accounts[0]});
	});
})