const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractzsirl4 = await IERC165.new({from: accounts[2]});
		const interfaceIdDlggmPf = "0x1b14161d"
		const interfaceIdb2fncfF = "0x0d020f09"
		const interfaceIdx3mPsyM = "0x0c0b121d"
		const nullmSvWhrI = await contractzsirl4.supportsInterface.call(interfaceIdDlggmPf, {from: accounts[4]});
		const nullKe7MJu = await contractzsirl4.supportsInterface.call(interfaceIdb2fncfF, {from: accounts[4]});
		const nullQ2k9PJv = await contractzsirl4.supportsInterface.call(interfaceIdx3mPsyM, {from: accounts[5]});
	});
})