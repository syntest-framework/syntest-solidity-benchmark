const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractyWNyr3E = await ERC165.new({from: accounts[0]});
		const interfaceIdTt30PoB = "0x1f031e1e"
		const interfaceIdG9Y5vGY = "0x13161d1a"
		const interfaceIdlnBCQWs = "0x1c111b0c"
		const interfaceIdk67B6N = "0x1e0a1d0c"
		const nullEfzlRG = await contractyWNyr3E.supportsInterface.call(interfaceIdTt30PoB, {from: accounts[0]});
		const nullETgRvpI = await contractyWNyr3E.supportsInterface.call(interfaceIdG9Y5vGY, {from: accounts[4]});
		const nullbyeoaF = await contractyWNyr3E.supportsInterface.call(interfaceIdlnBCQWs, {from: accounts[3]});
		const nullD9QXW3M = await contractyWNyr3E.supportsInterface.call(interfaceIdk67B6N, {from: accounts[4]});
	});
})