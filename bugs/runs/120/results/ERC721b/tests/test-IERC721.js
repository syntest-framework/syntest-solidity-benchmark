const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractvzYenN0 = await IERC721.new({from: accounts[3]});
		const tokenIdhEcSDCJ = BigInt("1783")
		const tokenIdcyCkGqG = BigInt("431")
		const toWUmXnWb = accounts[2]
		const fromnSt9tnW = accounts[2]
		const ownerPpaVSzK = accounts[0]
		const tokenIdMlt2RKc = BigInt("182")
		const ownerDrgg7ds = await contractvzYenN0.ownerOf.call(tokenIdhEcSDCJ, {from: accounts[4]});
		await contractvzYenN0.safeTransferFrom.call(fromnSt9tnW, toWUmXnWb, tokenIdcyCkGqG, {from: accounts[5]});
		const balancesvKbym9 = await contractvzYenN0.balanceOf.call(ownerPpaVSzK, {from: accounts[2]});
		const operatoruZJe6nq = await contractvzYenN0.getApproved.call(tokenIdMlt2RKc, {from: accounts[0]});
	});
})