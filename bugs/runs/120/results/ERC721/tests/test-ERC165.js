const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractBWOcOlk = await ERC165.new({from: accounts[0]});
		const interfaceIdOV6i2UX = "0x0b0c0e05"
		const interfaceIdG0DrcEw = "0x191f1014"
		const interfaceId6dalCR = "0x14061a14"
		const interfaceIdBlXutS1 = "0x141c131c"
		const interfaceIdFskbU7I = "0x100e1014"
		const nulltSEWxHP = await contractBWOcOlk.supportsInterface.call(interfaceIdOV6i2UX, {from: accounts[3]});
		const nullwLIqso0 = await contractBWOcOlk.supportsInterface.call(interfaceIdG0DrcEw, {from: accounts[3]});
		const nullTIZvDp = await contractBWOcOlk.supportsInterface.call(interfaceId6dalCR, {from: accounts[1]});
		const nullojjzxou = await contractBWOcOlk.supportsInterface.call(interfaceIdBlXutS1, {from: accounts[2]});
		const nullFzfIOgW = await contractBWOcOlk.supportsInterface.call(interfaceIdFskbU7I, {from: accounts[2]});
	});
})