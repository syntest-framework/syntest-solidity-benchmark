const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractDyxrB1 = await IERC165.new({from: accounts[3]});
		const interfaceIdgCuSCR0 = "0x01031815"
		const interfaceIdKYsqwx = "0x0c0b0c04"
		const interfaceIdvVMLMWi = "0x021e1c06"
		const interfaceIdmPOse6H = "0x1f060011"
		const interfaceIdSrCZyp7 = "0x0a132006"
		const nullFL10sto = await contractDyxrB1.supportsInterface.call(interfaceIdgCuSCR0, {from: "0x0000000000000000000000000000000000000001"});
		const nullG1QkzWL = await contractDyxrB1.supportsInterface.call(interfaceIdKYsqwx, {from: accounts[5]});
		const nullU0xyVoJ = await contractDyxrB1.supportsInterface.call(interfaceIdvVMLMWi, {from: accounts[4]});
		const nulleXQtulc = await contractDyxrB1.supportsInterface.call(interfaceIdmPOse6H, {from: accounts[2]});
		const nulllcib2Yd = await contractDyxrB1.supportsInterface.call(interfaceIdSrCZyp7, {from: accounts[0]});
	});
})