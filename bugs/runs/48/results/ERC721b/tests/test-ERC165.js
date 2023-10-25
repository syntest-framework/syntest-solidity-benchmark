const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractW9Z9atn = await ERC165.new({from: accounts[5]});
		const interfaceIdhBlWgOo = "0x171e1403"
		const interfaceIdDPhj8DS = "0x1a0d1b17"
		const nullqWAg1v6 = await contractW9Z9atn.supportsInterface.call(interfaceIdhBlWgOo, {from: accounts[1]});
		const nullJMt0ID1 = await contractW9Z9atn.supportsInterface.call(interfaceIdDPhj8DS, {from: accounts[1]});
	});
})