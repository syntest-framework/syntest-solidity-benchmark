const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractDiLZoAA = await ERC165.new({from: accounts[1]});
		const interfaceIduEWrulL = "0x1a0f1107"
		const interfaceIdho1sLo = "0x1e170703"
		const nullfwLuEjd = await contractDiLZoAA.supportsInterface.call(interfaceIduEWrulL, {from: accounts[5]});
		const nullq4nGjhr = await contractDiLZoAA.supportsInterface.call(interfaceIdho1sLo, {from: accounts[5]});
	});
})