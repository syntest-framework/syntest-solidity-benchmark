const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractlBZRsq8 = await IERC165.new({from: accounts[5]});
		const interfaceIdSS5Ik0X = "0x100c0f0f"
		const interfaceIdEfsYuPT = "0x06201e0a"
		const nullEIfT5I = await contractlBZRsq8.supportsInterface.call(interfaceIdSS5Ik0X, {from: accounts[2]});
		const nullzk4qR1Y = await contractlBZRsq8.supportsInterface.call(interfaceIdEfsYuPT, {from: "0x0000000000000000000000000000000000000001"});
	});
})