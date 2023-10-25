const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractIRfL1qj = await ERC165.new({from: accounts[4]});
		const interfaceIddsEpTZt = "0x1b050415"
		const interfaceIdTKRLhwg = "0x04071612"
		const interfaceIdtMsW5Js = "0x1e13130f"
		const nullDn2Q4P = await contractIRfL1qj.supportsInterface.call(interfaceIddsEpTZt, {from: accounts[4]});
		const nullfMM79cB = await contractIRfL1qj.supportsInterface.call(interfaceIdTKRLhwg, {from: accounts[2]});
		const nullBI5IHr1 = await contractIRfL1qj.supportsInterface.call(interfaceIdtMsW5Js, {from: accounts[5]});
	});
})