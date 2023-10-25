const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractKcA4lX2 = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdiHABwcs = BigInt("262")
		const toFCqm7Tw = accounts[3]
		const fromp2Dp3jO = accounts[4]
		const _approvedCTUVkV = true
		const operatorojPoue = accounts[0]
		await contractKcA4lX2.transferFrom.call(fromp2Dp3jO, toFCqm7Tw, tokenIdiHABwcs, {from: accounts[1]});
		await contractKcA4lX2.setApprovalForAll.call(operatorojPoue, _approvedCTUVkV, {from: accounts[0]});
	});
})