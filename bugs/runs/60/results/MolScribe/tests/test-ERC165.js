const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractaEaZSvk = await ERC165.new({from: accounts[2]});
		const interfaceId4m5CQZ = "0x130b1019"
		const interfaceIdVbTSHbu = "0x0d0a0208"
		const interfaceIdS54935 = "0x1f03161d"
		const nulli7vTevN = await contractaEaZSvk.supportsInterface.call(interfaceId4m5CQZ, {from: accounts[4]});
		const nullN56tAlF = await contractaEaZSvk.supportsInterface.call(interfaceIdVbTSHbu, {from: accounts[1]});
		const nullFdLjHsG = await contractaEaZSvk.supportsInterface.call(interfaceIdS54935, {from: accounts[1]});
	});
})