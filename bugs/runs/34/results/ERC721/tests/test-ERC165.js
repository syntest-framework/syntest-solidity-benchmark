const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractDDtAUk = await ERC165.new({from: accounts[1]});
		const interfaceIdFsdSIn = "0x1d151a0b"
		const interfaceIdC2MwUA1 = "0x1c041002"
		const interfaceIdYiFplhN = "0x0207180f"
		const interfaceIdowHzZ7y = "0x0d160201"
		const interfaceIdPfSN2x8 = "0x140f0f0e"
		const nullf87dSyM = await contractDDtAUk.supportsInterface.call(interfaceIdFsdSIn, {from: accounts[2]});
		const nullGHdecH = await contractDDtAUk.supportsInterface.call(interfaceIdC2MwUA1, {from: accounts[4]});
		const nullcvsYqt = await contractDDtAUk.supportsInterface.call(interfaceIdYiFplhN, {from: accounts[5]});
		const nullS8aLan = await contractDDtAUk.supportsInterface.call(interfaceIdowHzZ7y, {from: accounts[3]});
		const nullctN9XCe = await contractDDtAUk.supportsInterface.call(interfaceIdPfSN2x8, {from: accounts[4]});
	});
})