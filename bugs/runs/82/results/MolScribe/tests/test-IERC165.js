const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractXKOIFNC = await IERC165.new({from: accounts[5]});
		const interfaceIdDLPVpeB = "0x1113050d"
		const interfaceIdAPL9UdX = "0x0915160e"
		const interfaceIdnMTjZfy = "0x1c1e170e"
		const interfaceIdj3jwGZQ = "0x0f0c1d01"
		const nullFLSYuVH = await contractXKOIFNC.supportsInterface.call(interfaceIdDLPVpeB, {from: accounts[0]});
		const nullEWAEsXE = await contractXKOIFNC.supportsInterface.call(interfaceIdAPL9UdX, {from: accounts[3]});
		const nulluPH7O33 = await contractXKOIFNC.supportsInterface.call(interfaceIdnMTjZfy, {from: accounts[1]});
		const nulllYS2d7Z = await contractXKOIFNC.supportsInterface.call(interfaceIdj3jwGZQ, {from: accounts[4]});
	});
})