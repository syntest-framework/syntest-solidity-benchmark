const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractAXHe5E1 = await IERC721.new({from: accounts[0]});
		const tokenIdjuE1Jd7 = BigInt("985")
		const toe5vuLLB = accounts[2]
		const fromLN0AOa4 = accounts[5]
		const tokenIdgiyJp1b = BigInt("605")
		const to587tMo = accounts[0]
		const tokenIdHzsKGx8 = BigInt("789")
		const _approvedXyHnntN = true
		const operatorPyYj5kt = accounts[4]
		const tokenId326IY3 = BigInt("1561")
		const toDLWO9fU = accounts[1]
		const fromsq9S2vy = "0x0000000000000000000000000000000000000001"
		const tokenIdAaf7Cme = BigInt("258")
		const toM4Eur7N = accounts[2]
		const fromU5Zv74Z = accounts[2]
		await contractAXHe5E1.safeTransferFrom.call(fromLN0AOa4, toe5vuLLB, tokenIdjuE1Jd7, {from: accounts[3]});
		await contractAXHe5E1.approve.call(to587tMo, tokenIdgiyJp1b, {from: accounts[3]});
		const ownerR9TbEGc = await contractAXHe5E1.ownerOf.call(tokenIdHzsKGx8, {from: accounts[0]});
		await contractAXHe5E1.setApprovalForAll.call(operatorPyYj5kt, _approvedXyHnntN, {from: accounts[1]});
		await contractAXHe5E1.transferFrom.call(fromsq9S2vy, toDLWO9fU, tokenId326IY3, {from: accounts[0]});
		await contractAXHe5E1.transferFrom.call(fromU5Zv74Z, toM4Eur7N, tokenIdAaf7Cme, {from: accounts[5]});
	});
})