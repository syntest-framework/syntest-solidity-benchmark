const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractE8yjZIr = await IERC721.new({from: accounts[5]});
		const _approvedDluoGbd = true
		const operatorhEPxFod = accounts[2]
		const tokenIdpGX7TS = BigInt("1835")
		const toeItmPsT = accounts[1]
		const tokenIdG0bX5Iq = BigInt("1706")
		await contractE8yjZIr.setApprovalForAll.call(operatorhEPxFod, _approvedDluoGbd, {from: accounts[0]});
		await contractE8yjZIr.approve.call(toeItmPsT, tokenIdpGX7TS, {from: accounts[5]});
		const ownerOg373H = await contractE8yjZIr.ownerOf.call(tokenIdG0bX5Iq, {from: accounts[3]});
	});
})