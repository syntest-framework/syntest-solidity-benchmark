const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractvmXj9y = await ERC165.new({from: accounts[1]});
		const interfaceIdWMPN9o3 = "0x0e171f0c"
		const interfaceIdkcS0RC = "0x1a1d141e"
		const interfaceIdJjYabII = "0x0b1b1b17"
		const nulljvFVSFM = await contractvmXj9y.supportsInterface.call(interfaceIdWMPN9o3, {from: accounts[5]});
		const nully4Crya1 = await contractvmXj9y.supportsInterface.call(interfaceIdkcS0RC, {from: accounts[0]});
		const nullxfnVGJ = await contractvmXj9y.supportsInterface.call(interfaceIdJjYabII, {from: accounts[4]});
	});
})