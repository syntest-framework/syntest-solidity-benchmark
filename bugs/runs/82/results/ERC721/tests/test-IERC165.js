const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contract2rcChf = await IERC165.new({from: accounts[0]});
		const interfaceIdZNusFyq = "0x1102011d"
		const interfaceIdAwHCz8R = "0x0d001302"
		const interfaceIdsH92al = "0x10050a02"
		const interfaceIdVL6QtRV = "0x0c0f1817"
		const nulls174oNR = await contract2rcChf.supportsInterface.call(interfaceIdZNusFyq, {from: accounts[2]});
		const nullzQ6R1Uc = await contract2rcChf.supportsInterface.call(interfaceIdAwHCz8R, {from: accounts[1]});
		const nullHSoapl = await contract2rcChf.supportsInterface.call(interfaceIdsH92al, {from: accounts[1]});
		const nullubGXbJ9 = await contract2rcChf.supportsInterface.call(interfaceIdVL6QtRV, {from: accounts[1]});
	});
})