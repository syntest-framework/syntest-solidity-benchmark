const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractkwF2bKb = await IERC165.new({from: accounts[3]});
		const interfaceIdjKigoGD = "0x10010708"
		const interfaceIdlqgX7eL = "0x0b030b0f"
		const interfaceIdKzDe32q = "0x13020d1d"
		const interfaceIdQOzFjwm = "0x11091210"
		const nullji0G6I9 = await contractkwF2bKb.supportsInterface.call(interfaceIdjKigoGD, {from: accounts[4]});
		const nullzhj6GTc = await contractkwF2bKb.supportsInterface.call(interfaceIdlqgX7eL, {from: accounts[3]});
		const nullCnvI9SN = await contractkwF2bKb.supportsInterface.call(interfaceIdKzDe32q, {from: accounts[2]});
		const nullpKrlQul = await contractkwF2bKb.supportsInterface.call(interfaceIdQOzFjwm, {from: accounts[1]});
	});
})