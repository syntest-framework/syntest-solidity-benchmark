const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractkhNGZJo = await ERC165.new({from: accounts[3]});
		const interfaceIdf8uGHy7 = "0x050e091c"
		const interfaceIdlgji15O = "0x16151903"
		const interfaceIdIqQr8kz = "0x1f0f1a00"
		const interfaceIdMDrc0dk = "0x0f000517"
		const interfaceIdJegynkr = "0x170f0b14"
		const nullOKGbjC3 = await contractkhNGZJo.supportsInterface.call(interfaceIdf8uGHy7, {from: accounts[2]});
		const nullJ9d8NOt = await contractkhNGZJo.supportsInterface.call(interfaceIdlgji15O, {from: accounts[0]});
		const nullg9QTi2 = await contractkhNGZJo.supportsInterface.call(interfaceIdIqQr8kz, {from: accounts[1]});
		const null1sHVRF = await contractkhNGZJo.supportsInterface.call(interfaceIdMDrc0dk, {from: accounts[0]});
		const nullnK2FyIK = await contractkhNGZJo.supportsInterface.call(interfaceIdJegynkr, {from: accounts[2]});
	});
})