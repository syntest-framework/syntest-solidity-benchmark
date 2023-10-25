const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractgX6rL0 = await IERC165.new({from: accounts[3]});
		const interfaceIdr96BU2i = "0x15010c00"
		const interfaceIdjxWXujP = "0x0b0c1119"
		const interfaceIdCG7FLMQ = "0x170f040c"
		const interfaceIdvTJ02uz = "0x080a1b01"
		const interfaceIdMX5Mx9v = "0x0e190a05"
		const nullb8G07PK = await contractgX6rL0.supportsInterface.call(interfaceIdr96BU2i, {from: accounts[3]});
		const nullM7ccN6 = await contractgX6rL0.supportsInterface.call(interfaceIdjxWXujP, {from: accounts[3]});
		const nullM0YjR6c = await contractgX6rL0.supportsInterface.call(interfaceIdCG7FLMQ, {from: accounts[0]});
		const nullahQ4TkM = await contractgX6rL0.supportsInterface.call(interfaceIdvTJ02uz, {from: accounts[0]});
		const nullgxAnko = await contractgX6rL0.supportsInterface.call(interfaceIdMX5Mx9v, {from: accounts[0]});
	});
})