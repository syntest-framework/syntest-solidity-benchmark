const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractBEnH6P2 = await IERC165.new({from: accounts[3]});
		const interfaceIduwxjsZ9 = "0x071f040e"
		const interfaceIdyPZStbf = "0x0819140a"
		const interfaceIdmJ2vec8 = "0x1d1a1d13"
		const interfaceIdE9YRaPK = "0x0c19170c"
		const interfaceIdyKa3nZH = "0x021e091a"
		const nullaSZqvuK = await contractBEnH6P2.supportsInterface.call(interfaceIduwxjsZ9, {from: accounts[1]});
		const null3qDxBX = await contractBEnH6P2.supportsInterface.call(interfaceIdyPZStbf, {from: "0x0000000000000000000000000000000000000001"});
		const nullWaTNHWJ = await contractBEnH6P2.supportsInterface.call(interfaceIdmJ2vec8, {from: accounts[2]});
		const nullampdO0 = await contractBEnH6P2.supportsInterface.call(interfaceIdE9YRaPK, {from: accounts[1]});
		const nullrgpoCsb = await contractBEnH6P2.supportsInterface.call(interfaceIdyKa3nZH, {from: accounts[1]});
	});
})