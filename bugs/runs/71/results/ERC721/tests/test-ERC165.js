const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractJ1Y41OW = await ERC165.new({from: accounts[4]});
		const interfaceIdMeXQX8M = "0x0a13140a"
		const interfaceIdrrB37PV = "0x0b090702"
		const nullI10797u = await contractJ1Y41OW.supportsInterface.call(interfaceIdMeXQX8M, {from: accounts[4]});
		const nullK4OKxRT = await contractJ1Y41OW.supportsInterface.call(interfaceIdrrB37PV, {from: accounts[3]});
	});
})