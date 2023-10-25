const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractEhfupPj = await IERC165.new({from: accounts[3]});
		const interfaceIdLX9AWW2 = "0x161d0507"
		const interfaceIdo7Bv2Ru = "0x0d160509"
		const interfaceIdDpkH4XC = "0x0806191b"
		const interfaceIdg3DlmLT = "0x03040502"
		const nulll1jVRE = await contractEhfupPj.supportsInterface.call(interfaceIdLX9AWW2, {from: accounts[1]});
		const nullAa4KN5U = await contractEhfupPj.supportsInterface.call(interfaceIdo7Bv2Ru, {from: "0x0000000000000000000000000000000000000001"});
		const nullrFOVyS8 = await contractEhfupPj.supportsInterface.call(interfaceIdDpkH4XC, {from: accounts[1]});
		const nullVNo5ntE = await contractEhfupPj.supportsInterface.call(interfaceIdg3DlmLT, {from: accounts[0]});
	});
})