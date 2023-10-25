const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractTUOV8jV = await ERC165.new({from: accounts[3]});
		const interfaceIdLB01lxu = "0x09151314"
		const interfaceIdO8MO1Tb = "0x0b1d100c"
		const interfaceIdcazs6L5 = "0x0d170b12"
		const nullH4Q1CwN = await contractTUOV8jV.supportsInterface.call(interfaceIdLB01lxu, {from: accounts[2]});
		const nullzI2tMJj = await contractTUOV8jV.supportsInterface.call(interfaceIdO8MO1Tb, {from: accounts[2]});
		const nullkvd7dDx = await contractTUOV8jV.supportsInterface.call(interfaceIdcazs6L5, {from: accounts[1]});
	});
})