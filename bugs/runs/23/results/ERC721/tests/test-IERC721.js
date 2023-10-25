const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractP0Q15rT = await IERC721.new({from: accounts[3]});
		const operatorDaGXmmx = accounts[0]
		const ownerGlL3M2 = accounts[0]
		const ownerHMmpvcx = accounts[3]
		const tokenIdn7Dp06L = BigInt("1110")
		const tokenIdhvyk2N = BigInt("1620")
		const toarPeMCa = accounts[3]
		const nulldbvLoJx = await contractP0Q15rT.isApprovedForAll.call(ownerGlL3M2, operatorDaGXmmx, {from: accounts[4]});
		const balanceDvsbCk = await contractP0Q15rT.balanceOf.call(ownerHMmpvcx, {from: accounts[3]});
		const operatorj5t2jqt = await contractP0Q15rT.getApproved.call(tokenIdn7Dp06L, {from: accounts[4]});
		await contractP0Q15rT.approve.call(toarPeMCa, tokenIdhvyk2N, {from: accounts[0]});
	});
})