const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractxqVqn1D = await ERC165.new({from: accounts[2]});
		const interfaceIdQGF64WJ = "0x0c0c0517"
		const interfaceIdPiRm2IB = "0x071e1807"
		const interfaceIdVv6OuXD = "0x0d151d11"
		const nullR1lDXV2 = await contractxqVqn1D.supportsInterface.call(interfaceIdQGF64WJ, {from: accounts[3]});
		const nullmHbOuWe = await contractxqVqn1D.supportsInterface.call(interfaceIdPiRm2IB, {from: accounts[2]});
		const nullxlQ2W1 = await contractxqVqn1D.supportsInterface.call(interfaceIdVv6OuXD, {from: accounts[4]});
	});
})