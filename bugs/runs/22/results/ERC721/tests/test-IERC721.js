const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractaTo0pcP = await IERC721.new({from: accounts[4]});
		const _approveduAJwLm3 = true
		const operatorWfxHpX2 = accounts[2]
		const tokenIdrcaK92n = BigInt("258")
		const tosytdFBE = accounts[3]
		await contractaTo0pcP.setApprovalForAll.call(operatorWfxHpX2, _approveduAJwLm3, {from: accounts[5]});
		await contractaTo0pcP.approve.call(tosytdFBE, tokenIdrcaK92n, {from: accounts[3]});
	});
})