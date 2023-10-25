const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contract9INf7Y = await ERC165.new({from: accounts[0]});
		const interfaceIdc7aaU4y = "0x17080702"
		const interfaceIdLF4ZJat = "0x17061e0b"
		const interfaceIdNgFQb3X = "0x201d1017"
		const interfaceIdCus7UFO = "0x0503171a"
		const nullyRi1ia = await contract9INf7Y.supportsInterface.call(interfaceIdc7aaU4y, {from: accounts[4]});
		const nullG3r7Utz = await contract9INf7Y.supportsInterface.call(interfaceIdLF4ZJat, {from: accounts[0]});
		const nullfPEAESf = await contract9INf7Y.supportsInterface.call(interfaceIdNgFQb3X, {from: accounts[4]});
		const nullNChz04s = await contract9INf7Y.supportsInterface.call(interfaceIdCus7UFO, {from: accounts[0]});
	});
})