const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contracthurHKg = await IERC165.new({from: accounts[1]});
		const interfaceIdGcoXgOb = "0x04061e12"
		const interfaceIdtpkkrQr = "0x1d0a0415"
		const interfaceIdzDRdTYC = "0x0f1b0d12"
		const interfaceIdFglGKYa = "0x030a0b18"
		const nullh67skAb = await contracthurHKg.supportsInterface.call(interfaceIdGcoXgOb, {from: accounts[5]});
		const nulljE2v4v8 = await contracthurHKg.supportsInterface.call(interfaceIdtpkkrQr, {from: accounts[0]});
		const nullJ7724zy = await contracthurHKg.supportsInterface.call(interfaceIdzDRdTYC, {from: accounts[3]});
		const nulldXXZarl = await contracthurHKg.supportsInterface.call(interfaceIdFglGKYa, {from: accounts[4]});
	});
})