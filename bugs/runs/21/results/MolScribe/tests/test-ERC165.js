const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractzdWpPTw = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdsd1voVo = "0x1814050e"
		const interfaceId87yj1T = "0x1d1d0013"
		const interfaceIdUSQuCce = "0x0f111e08"
		const interfaceIdcUVMHU = "0x0e1c161b"
		const interfaceIdjbfMdz = "0x0b150902"
		const nullzIk6Jdr = await contractzdWpPTw.supportsInterface.call(interfaceIdsd1voVo, {from: accounts[4]});
		const nullbbYC0uV = await contractzdWpPTw.supportsInterface.call(interfaceId87yj1T, {from: accounts[2]});
		const nullQkGsCsO = await contractzdWpPTw.supportsInterface.call(interfaceIdUSQuCce, {from: accounts[0]});
		const nullmxxgYJ = await contractzdWpPTw.supportsInterface.call(interfaceIdcUVMHU, {from: accounts[5]});
		const nullYpL9tYB = await contractzdWpPTw.supportsInterface.call(interfaceIdjbfMdz, {from: accounts[3]});
	});
})