const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractfhfhRG = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdqzuxkAC = "0x11150815"
		const interfaceIdezJG9n2 = "0x19031908"
		const interfaceIdqC1u8Ry = "0x1e07181e"
		const interfaceIdYiILzF6 = "0x1f0f0a1b"
		const interfaceIdyeRekzJ = "0x0e081203"
		const interfaceIdBKppfwe = "0x15020e1f"
		const nullDlB8Exp = await contractfhfhRG.supportsInterface.call(interfaceIdqzuxkAC, {from: "0x0000000000000000000000000000000000000001"});
		const nullMVGBz5 = await contractfhfhRG.supportsInterface.call(interfaceIdezJG9n2, {from: accounts[3]});
		const nullcOk38lk = await contractfhfhRG.supportsInterface.call(interfaceIdqC1u8Ry, {from: "0x0000000000000000000000000000000000000001"});
		const nullvpZayD3 = await contractfhfhRG.supportsInterface.call(interfaceIdYiILzF6, {from: accounts[3]});
		const null5te0Jc = await contractfhfhRG.supportsInterface.call(interfaceIdyeRekzJ, {from: accounts[1]});
		const nullGom1A5h = await contractfhfhRG.supportsInterface.call(interfaceIdBKppfwe, {from: accounts[3]});
	});
})