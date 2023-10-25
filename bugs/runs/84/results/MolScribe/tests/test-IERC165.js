const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractDMaSqnS = await IERC165.new({from: accounts[2]});
		const interfaceId3aWxqB = "0x1c0e000a"
		const interfaceIdgV4zqDq = "0x08030b0f"
		const interfaceIdbBrKHOB = "0x06190c0b"
		const interfaceIdLxHhI8A = "0x180e171a"
		const nulliaYjD0U = await contractDMaSqnS.supportsInterface.call(interfaceId3aWxqB, {from: accounts[5]});
		const nullBBSCnfX = await contractDMaSqnS.supportsInterface.call(interfaceIdgV4zqDq, {from: accounts[0]});
		const nullEJqJHcO = await contractDMaSqnS.supportsInterface.call(interfaceIdbBrKHOB, {from: accounts[3]});
		const nullgExLSqp = await contractDMaSqnS.supportsInterface.call(interfaceIdLxHhI8A, {from: accounts[4]});
	});
})