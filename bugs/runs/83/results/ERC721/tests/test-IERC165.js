const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractRWYKAR4 = await IERC165.new({from: accounts[0]});
		const interfaceIdtCnfvu = "0x11050a1d"
		const interfaceIdwp6ATgv = "0x0b091d07"
		const interfaceIdoMWLin = "0x040c1a10"
		const nullftUUDV5 = await contractRWYKAR4.supportsInterface.call(interfaceIdtCnfvu, {from: accounts[3]});
		const nullBzyWuTb = await contractRWYKAR4.supportsInterface.call(interfaceIdwp6ATgv, {from: accounts[1]});
		const nullsHFFLRl = await contractRWYKAR4.supportsInterface.call(interfaceIdoMWLin, {from: accounts[4]});
	});
})