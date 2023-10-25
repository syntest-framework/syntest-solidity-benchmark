const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractG8LgtpY = await ERC165.new({from: accounts[4]});
		const interfaceIdZttbOq3 = "0x1e1e120b"
		const interfaceIduWkLCYj = "0x0d1c1c07"
		const interfaceIdaQDM2B2 = "0x0c0d1617"
		const nullmZZkzvn = await contractG8LgtpY.supportsInterface.call(interfaceIdZttbOq3, {from: "0x0000000000000000000000000000000000000001"});
		const nullTzd0Rxo = await contractG8LgtpY.supportsInterface.call(interfaceIduWkLCYj, {from: accounts[2]});
		const nulliPrWJoh = await contractG8LgtpY.supportsInterface.call(interfaceIdaQDM2B2, {from: accounts[2]});
	});
})