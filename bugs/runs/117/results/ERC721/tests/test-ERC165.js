const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractkaUgkhV = await ERC165.new({from: accounts[1]});
		const interfaceIdmUYDFjq = "0x1b1f1903"
		const interfaceIdxMuaxt0 = "0x1f0b0f00"
		const nullESg98jW = await contractkaUgkhV.supportsInterface.call(interfaceIdmUYDFjq, {from: accounts[5]});
		const nullgl2JyGt = await contractkaUgkhV.supportsInterface.call(interfaceIdxMuaxt0, {from: accounts[3]});
	});
})