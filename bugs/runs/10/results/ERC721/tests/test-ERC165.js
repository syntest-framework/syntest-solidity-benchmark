const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractq5z9PmC = await ERC165.new({from: accounts[0]});
		const interfaceIdTk2pi5T = "0x200c1606"
		const interfaceIdvQgLy5j = "0x12051c1b"
		const interfaceIdQKNRWnG = "0x08031a15"
		const nullkzNv8a = await contractq5z9PmC.supportsInterface.call(interfaceIdTk2pi5T, {from: accounts[5]});
		const nullm1uMnDb = await contractq5z9PmC.supportsInterface.call(interfaceIdvQgLy5j, {from: accounts[2]});
		const nullGJQuuow = await contractq5z9PmC.supportsInterface.call(interfaceIdQKNRWnG, {from: accounts[0]});
	});
})