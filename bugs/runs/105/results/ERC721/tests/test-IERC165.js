const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractUHodSWh = await IERC165.new({from: accounts[2]});
		const interfaceIdQFYmYfA = "0x101d1901"
		const interfaceIdeFsckK9 = "0x10071007"
		const interfaceIdXh4je28 = "0x081f1c15"
		const interfaceIdhCw5n07 = "0x0909140b"
		const interfaceIdyGHko2Q = "0x0a0a101f"
		const interfaceIdJg347sW = "0x19051e01"
		const nullm5yyc5Q = await contractUHodSWh.supportsInterface.call(interfaceIdQFYmYfA, {from: accounts[0]});
		const nulltQYiBiE = await contractUHodSWh.supportsInterface.call(interfaceIdeFsckK9, {from: accounts[5]});
		const nullnyMY4EP = await contractUHodSWh.supportsInterface.call(interfaceIdXh4je28, {from: accounts[0]});
		const nullpEJoO6G = await contractUHodSWh.supportsInterface.call(interfaceIdhCw5n07, {from: accounts[0]});
		const nullkQXK3Vp = await contractUHodSWh.supportsInterface.call(interfaceIdyGHko2Q, {from: accounts[4]});
		const nullFhm7ywE = await contractUHodSWh.supportsInterface.call(interfaceIdJg347sW, {from: accounts[0]});
	});
})