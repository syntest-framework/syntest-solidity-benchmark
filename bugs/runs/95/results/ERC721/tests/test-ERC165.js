const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractNPg6eOk = await ERC165.new({from: accounts[4]});
		const interfaceIdDaViXyg = "0x081f051f"
		const interfaceIdAv0Xb1u = "0x140c0e11"
		const interfaceIdc4wojOx = "0x1509051b"
		const interfaceId1iDbHM = "0x020d0102"
		const interfaceIdxhvdBRh = "0x0803060d"
		const interfaceIdgAyMA0D = "0x1a001310"
		const nullqlje7yr = await contractNPg6eOk.supportsInterface.call(interfaceIdDaViXyg, {from: "0x0000000000000000000000000000000000000001"});
		const nullxfz12ix = await contractNPg6eOk.supportsInterface.call(interfaceIdAv0Xb1u, {from: accounts[4]});
		const nullvGscWbq = await contractNPg6eOk.supportsInterface.call(interfaceIdc4wojOx, {from: accounts[1]});
		const nullfDLswzV = await contractNPg6eOk.supportsInterface.call(interfaceId1iDbHM, {from: accounts[2]});
		const nullxieKoGl = await contractNPg6eOk.supportsInterface.call(interfaceIdxhvdBRh, {from: accounts[0]});
		const nullAfxkflx = await contractNPg6eOk.supportsInterface.call(interfaceIdgAyMA0D, {from: accounts[1]});
	});
})