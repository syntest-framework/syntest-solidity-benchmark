const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractUSQ3pAU = await ERC165.new({from: accounts[3]});
		const interfaceIdOogEIOG = "0x1a0b140c"
		const interfaceIdACzB7gs = "0x021f200a"
		const interfaceIdHxhgUku = "0x12071316"
		const interfaceIdHpN85Hi = "0x020a051f"
		const interfaceIdXpF1x13 = "0x000f071f"
		const nullevtTlTB = await contractUSQ3pAU.supportsInterface.call(interfaceIdOogEIOG, {from: accounts[4]});
		const nullJRf2jn4 = await contractUSQ3pAU.supportsInterface.call(interfaceIdACzB7gs, {from: accounts[0]});
		const nullqSIu0u = await contractUSQ3pAU.supportsInterface.call(interfaceIdHxhgUku, {from: accounts[0]});
		const nulldmTyimY = await contractUSQ3pAU.supportsInterface.call(interfaceIdHpN85Hi, {from: accounts[5]});
		const nullNyQNoa = await contractUSQ3pAU.supportsInterface.call(interfaceIdXpF1x13, {from: accounts[1]});
	});
})