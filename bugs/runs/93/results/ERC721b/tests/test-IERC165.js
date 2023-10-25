const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractsxymxzI = await IERC165.new({from: accounts[2]});
		const interfaceIdmFirKyY = "0x1d1d0e17"
		const interfaceIdFngaAJD = "0x13030a1d"
		const interfaceIdwkFxya = "0x1f08070d"
		const nullVuPB9J = await contractsxymxzI.supportsInterface.call(interfaceIdmFirKyY, {from: "0x0000000000000000000000000000000000000001"});
		const nullNbNkvzU = await contractsxymxzI.supportsInterface.call(interfaceIdFngaAJD, {from: accounts[4]});
		const nullYyd5awU = await contractsxymxzI.supportsInterface.call(interfaceIdwkFxya, {from: accounts[2]});
	});
})