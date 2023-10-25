const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractepMeZe = await IERC165.new({from: accounts[4]});
		const interfaceIdnlDhaRo = "0x00041e08"
		const interfaceIdstp1EzY = "0x14010c08"
		const interfaceIdnNqKa62 = "0x04150d0b"
		const interfaceIdPkJD0Lr = "0x180a1e11"
		const interfaceIdCiRgvdl = "0x1b031405"
		const nullbzrHTbi = await contractepMeZe.supportsInterface.call(interfaceIdnlDhaRo, {from: accounts[1]});
		const nullMow3pD7 = await contractepMeZe.supportsInterface.call(interfaceIdstp1EzY, {from: accounts[2]});
		const nulluL4VKWT = await contractepMeZe.supportsInterface.call(interfaceIdnNqKa62, {from: accounts[2]});
		const nullk30km5O = await contractepMeZe.supportsInterface.call(interfaceIdPkJD0Lr, {from: accounts[5]});
		const nulljkTVas8 = await contractepMeZe.supportsInterface.call(interfaceIdCiRgvdl, {from: accounts[0]});
	});
})