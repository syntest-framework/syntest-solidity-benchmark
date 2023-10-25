const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractQ2cgtU1 = await ERC165.new({from: accounts[1]});
		const interfaceIdTycF8qI = "0x201c1811"
		const interfaceIdrZj8SdG = "0x0101011a"
		const interfaceIdyFfqQoY = "0x110e0705"
		const interfaceIdQxcxyQi = "0x120a100b"
		const nully93wWQG = await contractQ2cgtU1.supportsInterface.call(interfaceIdTycF8qI, {from: accounts[1]});
		const nullK6u74O0 = await contractQ2cgtU1.supportsInterface.call(interfaceIdrZj8SdG, {from: accounts[4]});
		const nullCy97KWs = await contractQ2cgtU1.supportsInterface.call(interfaceIdyFfqQoY, {from: accounts[1]});
		const nullQiTo53A = await contractQ2cgtU1.supportsInterface.call(interfaceIdQxcxyQi, {from: accounts[1]});
	});
})