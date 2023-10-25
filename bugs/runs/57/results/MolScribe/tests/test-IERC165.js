const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractmbbPijN = await IERC165.new({from: accounts[3]});
		const interfaceIdsGzSu3 = "0x1b170b13"
		const interfaceIdRRpUP6p = "0x180a1a03"
		const interfaceIdBySNuWQ = "0x1b0e0c18"
		const interfaceIdINEXFpH = "0x1e09180c"
		const nullDl8OMBr = await contractmbbPijN.supportsInterface.call(interfaceIdsGzSu3, {from: accounts[0]});
		const nulleKnvSuC = await contractmbbPijN.supportsInterface.call(interfaceIdRRpUP6p, {from: accounts[2]});
		const nullbrg6zoF = await contractmbbPijN.supportsInterface.call(interfaceIdBySNuWQ, {from: accounts[2]});
		const nullWj0qIWV = await contractmbbPijN.supportsInterface.call(interfaceIdINEXFpH, {from: accounts[1]});
	});
})