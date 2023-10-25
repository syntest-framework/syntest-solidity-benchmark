const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractFYWnddp = await IERC721.new({from: accounts[1]});
		const tokenIdAFz2kkU = BigInt("1040")
		const tokenIdtLtEDcC = BigInt("172")
		const tokenIdHridS29 = BigInt("1735")
		const tohFhBup = accounts[4]
		const fromCrxpKd = accounts[2]
		const _approvedL6LbzLu = true
		const operatorIZqCmpm = accounts[4]
		const operatorPfzwqtA = await contractFYWnddp.getApproved.call(tokenIdAFz2kkU, {from: accounts[4]});
		const operatoroyhECwp = await contractFYWnddp.getApproved.call(tokenIdtLtEDcC, {from: accounts[1]});
		await contractFYWnddp.safeTransferFrom.call(fromCrxpKd, tohFhBup, tokenIdHridS29, {from: accounts[3]});
		await contractFYWnddp.setApprovalForAll.call(operatorIZqCmpm, _approvedL6LbzLu, {from: accounts[0]});
	});
})