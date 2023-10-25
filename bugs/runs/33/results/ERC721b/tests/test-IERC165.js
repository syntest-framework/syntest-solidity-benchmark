const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractTn96LMq = await IERC165.new({from: accounts[1]});
		const interfaceIdKQ3nZl6 = "0x1e12170f"
		const interfaceIdzZGsAX = "0x0e080804"
		const interfaceIdM7u1B9X = "0x0c0c0003"
		const interfaceIdXaDEkGG = "0x0b031e1b"
		const nulluvQGQy2 = await contractTn96LMq.supportsInterface.call(interfaceIdKQ3nZl6, {from: accounts[1]});
		const nullNRu1pYB = await contractTn96LMq.supportsInterface.call(interfaceIdzZGsAX, {from: accounts[1]});
		const nullPqevkox = await contractTn96LMq.supportsInterface.call(interfaceIdM7u1B9X, {from: accounts[1]});
		const nullzi6TJ5e = await contractTn96LMq.supportsInterface.call(interfaceIdXaDEkGG, {from: accounts[1]});
	});
})