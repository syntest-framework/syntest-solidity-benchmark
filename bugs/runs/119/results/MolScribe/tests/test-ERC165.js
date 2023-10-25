const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractuLqGa2 = await ERC165.new({from: accounts[1]});
		const interfaceIdwNQydnT = "0x16150b05"
		const interfaceId9f5x83 = "0x0b120c02"
		const interfaceIdXIbhDAT = "0x1002130a"
		const interfaceIdxMf36w = "0x04140419"
		const nullubxdQWG = await contractuLqGa2.supportsInterface.call(interfaceIdwNQydnT, {from: accounts[5]});
		const nullvB0nVT2 = await contractuLqGa2.supportsInterface.call(interfaceId9f5x83, {from: accounts[1]});
		const nulls1zWuzq = await contractuLqGa2.supportsInterface.call(interfaceIdXIbhDAT, {from: accounts[5]});
		const nullltkvThd = await contractuLqGa2.supportsInterface.call(interfaceIdxMf36w, {from: accounts[1]});
	});
})