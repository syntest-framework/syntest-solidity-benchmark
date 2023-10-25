const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractpllOTmh = await ERC165.new({from: accounts[2]});
		const interfaceIdWF1I0MX = "0x110f081c"
		const interfaceIdQ7X5Au = "0x050a130b"
		const interfaceIdBoglfz2 = "0x111c1819"
		const nullmXJno8w = await contractpllOTmh.supportsInterface.call(interfaceIdWF1I0MX, {from: accounts[4]});
		const nullw9Gssur = await contractpllOTmh.supportsInterface.call(interfaceIdQ7X5Au, {from: accounts[1]});
		const nullLK307hZ = await contractpllOTmh.supportsInterface.call(interfaceIdBoglfz2, {from: accounts[1]});
	});
})