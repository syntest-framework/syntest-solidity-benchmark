const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractPxIHtso = await IERC721.new({from: accounts[2]});
		const _approvedqY3mqo = false
		const operatorNZABkQ4 = accounts[1]
		const _approvedn0dUTL1 = false
		const operatorOgjIdET = "0x0000000000000000000000000000000000000001"
		const tokenIdncvB6FX = BigInt("622")
		const toUJmloFG = accounts[4]
		const fromeQDUhnZ = accounts[5]
		const tokenIdCGIJMi = BigInt("800")
		const toG4tWxs3 = accounts[0]
		const _approveduOAIJaD = true
		const operatorWcdWk7W = accounts[2]
		await contractPxIHtso.setApprovalForAll.call(operatorNZABkQ4, _approvedqY3mqo, {from: accounts[3]});
		await contractPxIHtso.setApprovalForAll.call(operatorOgjIdET, _approvedn0dUTL1, {from: accounts[0]});
		await contractPxIHtso.safeTransferFrom.call(fromeQDUhnZ, toUJmloFG, tokenIdncvB6FX, {from: accounts[4]});
		await contractPxIHtso.approve.call(toG4tWxs3, tokenIdCGIJMi, {from: accounts[0]});
		await contractPxIHtso.setApprovalForAll.call(operatorWcdWk7W, _approveduOAIJaD, {from: accounts[3]});
	});
})