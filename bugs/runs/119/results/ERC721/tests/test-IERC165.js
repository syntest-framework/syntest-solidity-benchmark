const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contract5Bn0iG = await IERC165.new({from: accounts[3]});
		const interfaceIdpWCIlPr = "0x12090402"
		const interfaceIdb085RW0 = "0x13021e0d"
		const interfaceIdCkJ98Ue = "0x17180317"
		const interfaceIdzxwxVMa = "0x0f0f1d17"
		const interfaceId92Cjyd = "0x1f170f05"
		const nullU4ZcP0Z = await contract5Bn0iG.supportsInterface.call(interfaceIdpWCIlPr, {from: accounts[0]});
		const nullbdEHNMJ = await contract5Bn0iG.supportsInterface.call(interfaceIdb085RW0, {from: accounts[2]});
		const nullv3qaeEC = await contract5Bn0iG.supportsInterface.call(interfaceIdCkJ98Ue, {from: accounts[5]});
		const nullZMv947F = await contract5Bn0iG.supportsInterface.call(interfaceIdzxwxVMa, {from: accounts[4]});
		const nulljFyP8E7 = await contract5Bn0iG.supportsInterface.call(interfaceId92Cjyd, {from: "0x0000000000000000000000000000000000000001"});
	});
})