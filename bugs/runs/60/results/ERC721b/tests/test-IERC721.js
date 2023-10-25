const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractY5L1MRw = await IERC721.new({from: accounts[4]});
		const ownerHvVZWEV = accounts[4]
		const tokenIdDqeJVYU = BigInt("672")
		const _approvedKQ57Xov = true
		const operatorVIxCh6Q = accounts[3]
		const tokenIdoCv9fpZ = BigInt("694")
		const toSgrAmL9 = accounts[2]
		const fromSlEs5tx = accounts[2]
		const operatorVbVpFNN = accounts[2]
		const owneriGhkWg = accounts[2]
		const tokenIdth83S9U = BigInt("671")
		const balanceuAvhgq4 = await contractY5L1MRw.balanceOf.call(ownerHvVZWEV, {from: accounts[1]});
		const operatorRgqtCk3 = await contractY5L1MRw.getApproved.call(tokenIdDqeJVYU, {from: "0x0000000000000000000000000000000000000001"});
		await contractY5L1MRw.setApprovalForAll.call(operatorVIxCh6Q, _approvedKQ57Xov, {from: accounts[3]});
		await contractY5L1MRw.transferFrom.call(fromSlEs5tx, toSgrAmL9, tokenIdoCv9fpZ, {from: accounts[1]});
		const nulleCiRTf = await contractY5L1MRw.isApprovedForAll.call(owneriGhkWg, operatorVbVpFNN, {from: accounts[5]});
		const owneruUOE8ml = await contractY5L1MRw.ownerOf.call(tokenIdth83S9U, {from: accounts[4]});
	});
})