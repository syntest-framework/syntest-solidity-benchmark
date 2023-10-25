const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractaQQWhXz = await IERC721.new({from: accounts[4]});
		const tokenIdfBj6bA = BigInt("1192")
		const togUwZrQ9 = accounts[1]
		const _approvedKmM3Lmz = false
		const operatorpMojjc0 = accounts[5]
		const tokenIdFCYxrEr = BigInt("345")
		const toZ81Tb2 = accounts[2]
		const fromN0du1k = accounts[0]
		const operatorFrjwSS = accounts[3]
		const ownerZrmUsnJ = "0x0000000000000000000000000000000000000001"
		const tokenIdCaSGSY9 = BigInt("1046")
		const toUBvcGD = accounts[4]
		const fromu9MN8t6 = accounts[5]
		const tokenIdjtFusuK = BigInt("679")
		await contractaQQWhXz.approve.call(togUwZrQ9, tokenIdfBj6bA, {from: accounts[0]});
		await contractaQQWhXz.setApprovalForAll.call(operatorpMojjc0, _approvedKmM3Lmz, {from: accounts[4]});
		await contractaQQWhXz.transferFrom.call(fromN0du1k, toZ81Tb2, tokenIdFCYxrEr, {from: accounts[5]});
		const nullRt1vbZ8 = await contractaQQWhXz.isApprovedForAll.call(ownerZrmUsnJ, operatorFrjwSS, {from: accounts[0]});
		await contractaQQWhXz.safeTransferFrom.call(fromu9MN8t6, toUBvcGD, tokenIdCaSGSY9, {from: accounts[3]});
		const operatordqtw8mE = await contractaQQWhXz.getApproved.call(tokenIdjtFusuK, {from: accounts[0]});
	});
})