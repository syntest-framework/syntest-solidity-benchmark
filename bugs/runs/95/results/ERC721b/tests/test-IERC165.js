const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractryxiSUJ = await IERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdLkoK3Cr = "0x0f0a1f02"
		const interfaceIdyr1Dt0J = "0x0c081219"
		const nulloAtb8Kw = await contractryxiSUJ.supportsInterface.call(interfaceIdLkoK3Cr, {from: "0x0000000000000000000000000000000000000001"});
		const nullFYCV5ZE = await contractryxiSUJ.supportsInterface.call(interfaceIdyr1Dt0J, {from: accounts[1]});
	});
})