const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractZFkYAkn = await IERC165.new({from: accounts[3]});
		const interfaceIdTki0jaB = "0x01090d09"
		const interfaceIdjC2pSL = "0x161c1712"
		const interfaceIdbqM4YCU = "0x05040c01"
		const nullEp0xbm0 = await contractZFkYAkn.supportsInterface.call(interfaceIdTki0jaB, {from: accounts[4]});
		const nullWSDdYDQ = await contractZFkYAkn.supportsInterface.call(interfaceIdjC2pSL, {from: accounts[2]});
		const nullrx9sHv0 = await contractZFkYAkn.supportsInterface.call(interfaceIdbqM4YCU, {from: accounts[2]});
	});
})