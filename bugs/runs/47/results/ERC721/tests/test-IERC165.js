const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractc077ZFe = await IERC165.new({from: accounts[4]});
		const interfaceIdpM7JBG = "0x151a1404"
		const interfaceIdAeGTbE = "0x031e201a"
		const interfaceIdCvGFnRU = "0x0d0e0c07"
		const interfaceIdzYp13JG = "0x19170e0f"
		const nullBEYOMJ9 = await contractc077ZFe.supportsInterface.call(interfaceIdpM7JBG, {from: accounts[4]});
		const nullnrwkt1 = await contractc077ZFe.supportsInterface.call(interfaceIdAeGTbE, {from: accounts[2]});
		const nullLJertSP = await contractc077ZFe.supportsInterface.call(interfaceIdCvGFnRU, {from: accounts[1]});
		const nullQX1YrbN = await contractc077ZFe.supportsInterface.call(interfaceIdzYp13JG, {from: accounts[4]});
	});
})