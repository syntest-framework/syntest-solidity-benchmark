const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractCWN9E2h = await ERC165.new({from: accounts[3]});
		const interfaceIdecJe65a = "0x1c131f1a"
		const interfaceIdoLX3QDr = "0x181a1800"
		const interfaceIdkgi6eNR = "0x1d0a0816"
		const interfaceIdpOzMr6W = "0x160c100b"
		const interfaceIdstEciAy = "0x2004140d"
		const nullMupIYLX = await contractCWN9E2h.supportsInterface.call(interfaceIdecJe65a, {from: accounts[3]});
		const nullPsHylPQ = await contractCWN9E2h.supportsInterface.call(interfaceIdoLX3QDr, {from: accounts[1]});
		const nullMQPTeTY = await contractCWN9E2h.supportsInterface.call(interfaceIdkgi6eNR, {from: accounts[2]});
		const nullBCoyssc = await contractCWN9E2h.supportsInterface.call(interfaceIdpOzMr6W, {from: accounts[2]});
		const nulldkZcOYl = await contractCWN9E2h.supportsInterface.call(interfaceIdstEciAy, {from: accounts[5]});
	});
})