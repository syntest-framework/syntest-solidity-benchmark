const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractPMC0cuH = await IERC721.new({from: accounts[4]});
		const _approvedc0unegg = false
		const operatorrmuqUsN = accounts[1]
		const tokenIdbQINUQY = BigInt("1595")
		const tohXWsKd3 = accounts[3]
		const fromf8Goq8C = accounts[3]
		const tokenIddsDWYZ = BigInt("1770")
		const toRMIPrkf = "0x0000000000000000000000000000000000000001"
		const fromvVm2Ii6 = accounts[0]
		const tokenIdpFRHNgx = BigInt("1612")
		const tokenIdQ1uGl1i = BigInt("752")
		const toh2TlKuc = accounts[3]
		const fromqYnWS7f = accounts[0]
		const tokenIdXzVzURV = BigInt("186")
		await contractPMC0cuH.setApprovalForAll.call(operatorrmuqUsN, _approvedc0unegg, {from: accounts[3]});
		await contractPMC0cuH.transferFrom.call(fromf8Goq8C, tohXWsKd3, tokenIdbQINUQY, {from: accounts[5]});
		await contractPMC0cuH.transferFrom.call(fromvVm2Ii6, toRMIPrkf, tokenIddsDWYZ, {from: accounts[3]});
		const owneryCChBHn = await contractPMC0cuH.ownerOf.call(tokenIdpFRHNgx, {from: accounts[2]});
		await contractPMC0cuH.transferFrom.call(fromqYnWS7f, toh2TlKuc, tokenIdQ1uGl1i, {from: accounts[3]});
		const ownerJX9MwJn = await contractPMC0cuH.ownerOf.call(tokenIdXzVzURV, {from: accounts[2]});
	});
})