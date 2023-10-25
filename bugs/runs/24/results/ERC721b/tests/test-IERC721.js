const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractEFXxMpv = await IERC721.new({from: accounts[3]});
		const datat6gyDBg = "0x030f051013190c0a1f1c1b0a00001c09110d080116111c0210"
		const tokenIdxpYkVA6 = BigInt("721")
		const totDYY2lU = accounts[4]
		const fromcnAcp8Z = accounts[0]
		const datauNT8I0d = "0x1908"
		const tokenIdcQjJo1 = BigInt("310")
		const toTxdO0ki = accounts[3]
		const fromivxltAV = accounts[5]
		const dataGtlmKq = "0x0f12090b1413090a1b011001050617"
		const tokenIdzJDlxYn = BigInt("970")
		const toPb6vODo = accounts[0]
		const fromw4nPK3N = accounts[4]
		const tokenIdll505ij = BigInt("1933")
		await contractEFXxMpv.safeTransferFrom.call(fromcnAcp8Z, totDYY2lU, tokenIdxpYkVA6, datat6gyDBg, {from: accounts[1]});
		await contractEFXxMpv.safeTransferFrom.call(fromivxltAV, toTxdO0ki, tokenIdcQjJo1, datauNT8I0d, {from: accounts[0]});
		await contractEFXxMpv.safeTransferFrom.call(fromw4nPK3N, toPb6vODo, tokenIdzJDlxYn, dataGtlmKq, {from: accounts[1]});
		const operatorGz7Dhrq = await contractEFXxMpv.getApproved.call(tokenIdll505ij, {from: accounts[1]});
	});
})