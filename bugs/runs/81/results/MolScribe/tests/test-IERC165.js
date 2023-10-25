const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractbQXcYbC = await IERC165.new({from: accounts[3]});
		const interfaceIdqwMyRyE = "0x18191412"
		const interfaceIdeFFvwiX = "0x1601071e"
		const nullXFJYBFb = await contractbQXcYbC.supportsInterface.call(interfaceIdqwMyRyE, {from: accounts[3]});
		const nullN8uCOJ6 = await contractbQXcYbC.supportsInterface.call(interfaceIdeFFvwiX, {from: accounts[3]});
	});
})