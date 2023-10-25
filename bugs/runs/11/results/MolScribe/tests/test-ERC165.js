const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractbacPZ7Z = await ERC165.new({from: accounts[1]});
		const interfaceIdPMtDcI = "0x071e110f"
		const interfaceIdfZjWPzf = "0x1d011b0c"
		const interfaceIdml3mvyn = "0x0e1d0c13"
		const interfaceIdKtcAVrG = "0x10091016"
		const nullBp1T0mF = await contractbacPZ7Z.supportsInterface.call(interfaceIdPMtDcI, {from: accounts[3]});
		const nullRfSzfVX = await contractbacPZ7Z.supportsInterface.call(interfaceIdfZjWPzf, {from: accounts[2]});
		const nulliOOKAgX = await contractbacPZ7Z.supportsInterface.call(interfaceIdml3mvyn, {from: accounts[1]});
		const nullTips3dK = await contractbacPZ7Z.supportsInterface.call(interfaceIdKtcAVrG, {from: accounts[3]});
	});
})