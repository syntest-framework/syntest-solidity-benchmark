const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractIjXGQrZ = await IERC165.new({from: accounts[4]});
		const interfaceIdqKAj0mB = "0x1f0d1109"
		const interfaceIdSXG2X5u = "0x04030f1d"
		const nullks5NSui = await contractIjXGQrZ.supportsInterface.call(interfaceIdqKAj0mB, {from: accounts[3]});
		const nullCUjSAO = await contractIjXGQrZ.supportsInterface.call(interfaceIdSXG2X5u, {from: accounts[5]});
	});
})