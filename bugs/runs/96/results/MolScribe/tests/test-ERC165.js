const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractJLiw0dO = await ERC165.new({from: accounts[1]});
		const interfaceIdvkDnJ2W = "0x04180603"
		const interfaceIdZORvMbb = "0x1118161b"
		const nulljHbpUoY = await contractJLiw0dO.supportsInterface.call(interfaceIdvkDnJ2W, {from: accounts[5]});
		const nullhihUnVl = await contractJLiw0dO.supportsInterface.call(interfaceIdZORvMbb, {from: accounts[3]});
	});
})