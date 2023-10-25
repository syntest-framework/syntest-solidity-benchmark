const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractHMhG260 = await IERC165.new({from: accounts[4]});
		const interfaceIdTh44Rd8 = "0x040e1001"
		const interfaceIdM0F6S7s = "0x1019140a"
		const interfaceIdCJTAF5l = "0x0d0e1106"
		const interfaceIdogFPMkv = "0x1b1a171a"
		const interfaceIdC1HUGC6 = "0x0e151304"
		const nullFctSlaB = await contractHMhG260.supportsInterface.call(interfaceIdTh44Rd8, {from: accounts[1]});
		const nullG0ha7H9 = await contractHMhG260.supportsInterface.call(interfaceIdM0F6S7s, {from: accounts[0]});
		const nullE3veLf = await contractHMhG260.supportsInterface.call(interfaceIdCJTAF5l, {from: accounts[1]});
		const nullCYeNXLS = await contractHMhG260.supportsInterface.call(interfaceIdogFPMkv, {from: accounts[0]});
		const nulltY5Hzpf = await contractHMhG260.supportsInterface.call(interfaceIdC1HUGC6, {from: accounts[4]});
	});
})