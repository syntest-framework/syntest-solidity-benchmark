const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractkToEjy9 = await ERC165.new({from: accounts[0]});
		const interfaceIdBK5oOuy = "0x0a161b18"
		const interfaceIdVRfv2Ym = "0x101b1b07"
		const interfaceIdGkIEGUV = "0x15030309"
		const nulli56DWvQ = await contractkToEjy9.supportsInterface.call(interfaceIdBK5oOuy, {from: accounts[0]});
		const nullA1KpjOl = await contractkToEjy9.supportsInterface.call(interfaceIdVRfv2Ym, {from: accounts[0]});
		const nulltK1dq5m = await contractkToEjy9.supportsInterface.call(interfaceIdGkIEGUV, {from: accounts[5]});
	});
})