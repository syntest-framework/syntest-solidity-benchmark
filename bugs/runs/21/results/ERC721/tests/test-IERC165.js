const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractqb4Y6p = await IERC165.new({from: accounts[4]});
		const interfaceIdt76gvaB = "0x1b1c1517"
		const interfaceIdt4Sw5rK = "0x051c1603"
		const interfaceIdMFkW58Z = "0x05181304"
		const nullN3ifc51 = await contractqb4Y6p.supportsInterface.call(interfaceIdt76gvaB, {from: accounts[3]});
		const nulloXw7qn4 = await contractqb4Y6p.supportsInterface.call(interfaceIdt4Sw5rK, {from: accounts[0]});
		const nulljdlgtEb = await contractqb4Y6p.supportsInterface.call(interfaceIdMFkW58Z, {from: accounts[5]});
	});
})