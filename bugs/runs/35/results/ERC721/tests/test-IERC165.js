const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractES5k9qk = await IERC165.new({from: accounts[1]});
		const interfaceIdVvTZc6o = "0x16070520"
		const interfaceIduG8ZA6b = "0x181f1112"
		const interfaceIdb9Bt8sA = "0x041c1206"
		const interfaceIdhTdIiru = "0x191c1214"
		const nullZCJAn1V = await contractES5k9qk.supportsInterface.call(interfaceIdVvTZc6o, {from: accounts[3]});
		const nullTZO0xE5 = await contractES5k9qk.supportsInterface.call(interfaceIduG8ZA6b, {from: accounts[5]});
		const nullwRPKMBE = await contractES5k9qk.supportsInterface.call(interfaceIdb9Bt8sA, {from: accounts[4]});
		const nullQyeS2vk = await contractES5k9qk.supportsInterface.call(interfaceIdhTdIiru, {from: accounts[2]});
	});
})