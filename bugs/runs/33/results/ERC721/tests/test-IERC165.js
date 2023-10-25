const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractu9lXtu = await IERC165.new({from: accounts[0]});
		const interfaceIdGaooX5U = "0x021b0b1a"
		const interfaceIdnG5HUHd = "0x010c0e02"
		const interfaceIdCXdZlgX = "0x150f1a03"
		const interfaceIdmZElBNN = "0x090c1e0b"
		const interfaceIdttEcIAn = "0x0501091e"
		const nullbeoPcok = await contractu9lXtu.supportsInterface.call(interfaceIdGaooX5U, {from: accounts[1]});
		const nullAJQxodH = await contractu9lXtu.supportsInterface.call(interfaceIdnG5HUHd, {from: accounts[2]});
		const nullv1df0z8 = await contractu9lXtu.supportsInterface.call(interfaceIdCXdZlgX, {from: accounts[4]});
		const nullxu1T5A = await contractu9lXtu.supportsInterface.call(interfaceIdmZElBNN, {from: accounts[4]});
		const null9FJtwG = await contractu9lXtu.supportsInterface.call(interfaceIdttEcIAn, {from: accounts[3]});
	});
})