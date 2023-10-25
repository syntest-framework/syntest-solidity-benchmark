const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractX758PKQ = await ERC165.new({from: accounts[5]});
		const interfaceIdwzQK43r = "0x1512040c"
		const interfaceIdQrfa8JE = "0x200a0211"
		const interfaceIduLlc5ye = "0x1e021e15"
		const interfaceIdAW46EHO = "0x040d1c07"
		const interfaceIdSp8nCek = "0x030a1c09"
		const nullCxd8gTx = await contractX758PKQ.supportsInterface.call(interfaceIdwzQK43r, {from: "0x0000000000000000000000000000000000000001"});
		const nullU2bfTPQ = await contractX758PKQ.supportsInterface.call(interfaceIdQrfa8JE, {from: accounts[3]});
		const nullakV2eLC = await contractX758PKQ.supportsInterface.call(interfaceIduLlc5ye, {from: accounts[0]});
		const nullvEEbMaq = await contractX758PKQ.supportsInterface.call(interfaceIdAW46EHO, {from: accounts[1]});
		const nullrNEIy4 = await contractX758PKQ.supportsInterface.call(interfaceIdSp8nCek, {from: accounts[0]});
	});
})