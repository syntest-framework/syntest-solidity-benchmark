const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractHlCLtNS = await IERC165.new({from: accounts[5]});
		const interfaceIdrmxtqkJ = "0x20020f06"
		const interfaceIdI0ampy = "0x1512090e"
		const interfaceIdH1Ne8V = "0x040a090b"
		const interfaceIdIZ1WqFS = "0x080b1109"
		const interfaceIdVfQivnX = "0x171a100a"
		const nullnIIO9Xs = await contractHlCLtNS.supportsInterface.call(interfaceIdrmxtqkJ, {from: accounts[2]});
		const nullsXgfY4H = await contractHlCLtNS.supportsInterface.call(interfaceIdI0ampy, {from: accounts[3]});
		const nullH9uj0Xk = await contractHlCLtNS.supportsInterface.call(interfaceIdH1Ne8V, {from: accounts[2]});
		const nullSWk41ym = await contractHlCLtNS.supportsInterface.call(interfaceIdIZ1WqFS, {from: accounts[3]});
		const nullAPW1VMB = await contractHlCLtNS.supportsInterface.call(interfaceIdVfQivnX, {from: accounts[2]});
	});
})