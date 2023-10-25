const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractZV2RYD8 = await IERC165.new({from: accounts[3]});
		const interfaceIdtq5CNxe = "0x03021f01"
		const interfaceIdy3sDOwR = "0x15051b16"
		const interfaceIdIVBoISY = "0x05061516"
		const interfaceIdL0wLrU0 = "0x1f010115"
		const nullSVVknar = await contractZV2RYD8.supportsInterface.call(interfaceIdtq5CNxe, {from: accounts[4]});
		const nullnsqQKB = await contractZV2RYD8.supportsInterface.call(interfaceIdy3sDOwR, {from: "0x0000000000000000000000000000000000000001"});
		const nullpcodvmr = await contractZV2RYD8.supportsInterface.call(interfaceIdIVBoISY, {from: accounts[0]});
		const nullDRPwARC = await contractZV2RYD8.supportsInterface.call(interfaceIdL0wLrU0, {from: accounts[3]});
	});
})