const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractexzSDtT = await ERC165.new({from: accounts[1]});
		const interfaceIdrchBvXX = "0x061b0315"
		const interfaceIdwfV5TG = "0x13080f0f"
		const interfaceIdS5A8rL = "0x16141408"
		const interfaceIdpG1ZTMK = "0x1d050a14"
		const nullo7Z8lu = await contractexzSDtT.supportsInterface.call(interfaceIdrchBvXX, {from: accounts[0]});
		const nullSwxfezS = await contractexzSDtT.supportsInterface.call(interfaceIdwfV5TG, {from: accounts[1]});
		const nullD37SaVK = await contractexzSDtT.supportsInterface.call(interfaceIdS5A8rL, {from: accounts[3]});
		const nullX6zMfld = await contractexzSDtT.supportsInterface.call(interfaceIdpG1ZTMK, {from: accounts[4]});
	});
})