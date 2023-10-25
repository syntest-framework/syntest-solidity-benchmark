const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractVMjvJLi = await IERC165.new({from: accounts[2]});
		const interfaceIdDWxfCnf = "0x1418020c"
		const interfaceIdLhkPSU = "0x0902020e"
		const interfaceIdn6mMJ3Y = "0x0714171c"
		const interfaceIdIDSkIX = "0x130d091a"
		const nullDCVkzfi = await contractVMjvJLi.supportsInterface.call(interfaceIdDWxfCnf, {from: accounts[2]});
		const nullebUzxm4 = await contractVMjvJLi.supportsInterface.call(interfaceIdLhkPSU, {from: accounts[3]});
		const nullHpuhfJl = await contractVMjvJLi.supportsInterface.call(interfaceIdn6mMJ3Y, {from: accounts[4]});
		const null12ll8n = await contractVMjvJLi.supportsInterface.call(interfaceIdIDSkIX, {from: accounts[2]});
	});
})