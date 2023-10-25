const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractxqmwkdR = await IERC721.new({from: accounts[1]});
		const operatorTNIVHzq = accounts[1]
		const ownerlsMZfF6 = "0x0000000000000000000000000000000000000001"
		const tokenIdJ7O5ckx = BigInt("224")
		const toYPcODy = accounts[1]
		const _approved0FuXyG = false
		const operator3yGrKQ = accounts[0]
		const nullx9SRLEt = await contractxqmwkdR.isApprovedForAll.call(ownerlsMZfF6, operatorTNIVHzq, {from: accounts[4]});
		await contractxqmwkdR.approve.call(toYPcODy, tokenIdJ7O5ckx, {from: accounts[1]});
		await contractxqmwkdR.setApprovalForAll.call(operator3yGrKQ, _approved0FuXyG, {from: accounts[2]});
	});
})