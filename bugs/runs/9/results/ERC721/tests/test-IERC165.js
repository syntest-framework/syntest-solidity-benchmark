const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractPuvn9NC = await IERC165.new({from: accounts[1]});
		const interfaceIdRgMwObc = "0x0a101903"
		const interfaceIdKHcGBB9 = "0x0d1f0b1b"
		const interfaceIdfsWGB7 = "0x03090f00"
		const interfaceIdkPtYgg9 = "0x170e2009"
		const nullzs51cgD = await contractPuvn9NC.supportsInterface.call(interfaceIdRgMwObc, {from: accounts[0]});
		const nullhQAxKJH = await contractPuvn9NC.supportsInterface.call(interfaceIdKHcGBB9, {from: accounts[5]});
		const nullJV7JMVq = await contractPuvn9NC.supportsInterface.call(interfaceIdfsWGB7, {from: accounts[4]});
		const nullWFmkk7 = await contractPuvn9NC.supportsInterface.call(interfaceIdkPtYgg9, {from: accounts[3]});
	});
})