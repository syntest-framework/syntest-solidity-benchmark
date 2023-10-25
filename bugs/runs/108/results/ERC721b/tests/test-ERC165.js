const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractxahIW5s = await ERC165.new({from: accounts[1]});
		const interfaceIdu1yDKhk = "0x0f0e1708"
		const interfaceIdpjh9xN0 = "0x0213160a"
		const nullrUVY53 = await contractxahIW5s.supportsInterface.call(interfaceIdu1yDKhk, {from: accounts[3]});
		const nullsWOBjsT = await contractxahIW5s.supportsInterface.call(interfaceIdpjh9xN0, {from: accounts[0]});
	});
})