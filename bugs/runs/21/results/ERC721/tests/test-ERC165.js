const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractthX6r1Y = await ERC165.new({from: accounts[2]});
		const interfaceIdZqU9EoE = "0x15141e1c"
		const interfaceIdrtkB6Ke = "0x021a0200"
		const interfaceIdeXzU3dX = "0x0b1a1f0f"
		const nullHHYsWJn = await contractthX6r1Y.supportsInterface.call(interfaceIdZqU9EoE, {from: accounts[4]});
		const nullbyUrsAh = await contractthX6r1Y.supportsInterface.call(interfaceIdrtkB6Ke, {from: accounts[3]});
		const nullL4eVZwm = await contractthX6r1Y.supportsInterface.call(interfaceIdeXzU3dX, {from: accounts[2]});
	});
})