const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractd229bw = await IERC165.new({from: accounts[2]});
		const interfaceIdfgG4VT3 = "0x0f010107"
		const interfaceIdz6ovccA = "0x1804181f"
		const interfaceIdyzoVgmz = "0x0a041a0c"
		const interfaceIdGixFan5 = "0x060e1214"
		const interfaceIdrucr3r2 = "0x1d160903"
		const nullHAJPnSn = await contractd229bw.supportsInterface.call(interfaceIdfgG4VT3, {from: accounts[0]});
		const nullnrtoSJR = await contractd229bw.supportsInterface.call(interfaceIdz6ovccA, {from: accounts[4]});
		const nullECJ5EZ4 = await contractd229bw.supportsInterface.call(interfaceIdyzoVgmz, {from: accounts[3]});
		const nullokSE0lL = await contractd229bw.supportsInterface.call(interfaceIdGixFan5, {from: accounts[5]});
		const nulloc77cAZ = await contractd229bw.supportsInterface.call(interfaceIdrucr3r2, {from: accounts[2]});
	});
})