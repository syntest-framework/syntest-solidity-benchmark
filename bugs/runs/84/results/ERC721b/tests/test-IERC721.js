const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractoX8dEuw = await IERC721.new({from: accounts[0]});
		const tokenIdIIhaSv0 = BigInt("907")
		const toJftzaT9 = accounts[3]
		const fromP64p5wI = "0x0000000000000000000000000000000000000001"
		const ownerShqLbvG = accounts[4]
		const dataM0nJ1q = "0x091d1709070b120a1f16151f0e1b0a021b11011e02060d"
		const tokenIdHEe5EGY = BigInt("2025")
		const toHAx3pxd = accounts[3]
		const fromAWZ81mz = "0x0000000000000000000000000000000000000001"
		const _approvedQKCYL8K = true
		const operatorHYHfE3Y = accounts[2]
		await contractoX8dEuw.safeTransferFrom.call(fromP64p5wI, toJftzaT9, tokenIdIIhaSv0, {from: accounts[2]});
		const balanceWt2GUDv = await contractoX8dEuw.balanceOf.call(ownerShqLbvG, {from: accounts[4]});
		await contractoX8dEuw.safeTransferFrom.call(fromAWZ81mz, toHAx3pxd, tokenIdHEe5EGY, dataM0nJ1q, {from: accounts[4]});
		await contractoX8dEuw.setApprovalForAll.call(operatorHYHfE3Y, _approvedQKCYL8K, {from: accounts[0]});
	});
})