const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractodgzvj3 = await ERC165.new({from: accounts[2]});
		const interfaceIdX6lXY3g = "0x0c050410"
		const interfaceIdrU9CItg = "0x060e1508"
		const interfaceIdl2nomNP = "0x1c06040f"
		const interfaceIdm0KQf4i = "0x1d1f1b0c"
		const interfaceIdvIYSRsR = "0x16061d0b"
		const nullKqn8crt = await contractodgzvj3.supportsInterface.call(interfaceIdX6lXY3g, {from: accounts[5]});
		const nullVM0JoWl = await contractodgzvj3.supportsInterface.call(interfaceIdrU9CItg, {from: accounts[5]});
		const nullXAxjnrj = await contractodgzvj3.supportsInterface.call(interfaceIdl2nomNP, {from: accounts[2]});
		const nullwS3OzMj = await contractodgzvj3.supportsInterface.call(interfaceIdm0KQf4i, {from: accounts[3]});
		const nullSdAtuMY = await contractodgzvj3.supportsInterface.call(interfaceIdvIYSRsR, {from: accounts[0]});
	});
})