const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractCZh6Vqa = await ERC165.new({from: accounts[4]});
		const interfaceIdmoXE2po = "0x2008191c"
		const interfaceIdcCetqyy = "0x18111103"
		const interfaceIdcaBRnbK = "0x180f001c"
		const interfaceIdhMOjZGp = "0x14101107"
		const interfaceIdImCTIBn = "0x06141108"
		const nullf9cQQOk = await contractCZh6Vqa.supportsInterface.call(interfaceIdmoXE2po, {from: accounts[2]});
		const nullB0UStdT = await contractCZh6Vqa.supportsInterface.call(interfaceIdcCetqyy, {from: accounts[5]});
		const nullNhc5yGo = await contractCZh6Vqa.supportsInterface.call(interfaceIdcaBRnbK, {from: accounts[3]});
		const nullGser4dR = await contractCZh6Vqa.supportsInterface.call(interfaceIdhMOjZGp, {from: accounts[5]});
		const nullJ18FlNE = await contractCZh6Vqa.supportsInterface.call(interfaceIdImCTIBn, {from: accounts[3]});
	});
})