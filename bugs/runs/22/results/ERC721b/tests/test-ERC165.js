const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracta60TcBq = await ERC165.new({from: accounts[3]});
		const interfaceIdt4KRrw = "0x0b041508"
		const interfaceIdhLqSEPM = "0x0e0f0714"
		const nullaNoR8PK = await contracta60TcBq.supportsInterface.call(interfaceIdt4KRrw, {from: accounts[3]});
		const nullpxgNHks = await contracta60TcBq.supportsInterface.call(interfaceIdhLqSEPM, {from: accounts[2]});
	});
})