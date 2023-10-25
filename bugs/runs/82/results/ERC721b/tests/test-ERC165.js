const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractQBGXFpx = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdMrx4caM = "0x060a1408"
		const interfaceIdM5yHu0z = "0x02061b04"
		const interfaceIdiRiEyhA = "0x02200813"
		const nullP0vizHM = await contractQBGXFpx.supportsInterface.call(interfaceIdMrx4caM, {from: accounts[3]});
		const nullQXCltz = await contractQBGXFpx.supportsInterface.call(interfaceIdM5yHu0z, {from: accounts[1]});
		const nullFG6dgqd = await contractQBGXFpx.supportsInterface.call(interfaceIdiRiEyhA, {from: accounts[3]});
	});
})