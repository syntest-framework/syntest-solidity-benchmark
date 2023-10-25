const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracthVOMc8t = await ERC165.new({from: accounts[4]});
		const interfaceIdhIyGGMR = "0x02060d16"
		const interfaceIdX9b5HcO = "0x1a161901"
		const interfaceIdxuYJzK8 = "0x0e15150c"
		const nullfECdUDB = await contracthVOMc8t.supportsInterface.call(interfaceIdhIyGGMR, {from: accounts[2]});
		const nullEljJWct = await contracthVOMc8t.supportsInterface.call(interfaceIdX9b5HcO, {from: accounts[2]});
		const nullVBKHdQ = await contracthVOMc8t.supportsInterface.call(interfaceIdxuYJzK8, {from: accounts[3]});
	});
})