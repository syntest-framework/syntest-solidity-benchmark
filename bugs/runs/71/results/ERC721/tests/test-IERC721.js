const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractBwshBs = await IERC721.new({from: accounts[0]});
		const _approvedP082hP8 = false
		const operatorI9dBqft = accounts[1]
		const operatorja6NqF = accounts[5]
		const ownerJGVJLZv = "0x0000000000000000000000000000000000000001"
		const ownernx5hqCJ = accounts[5]
		const tokenIdCJDmiKh = BigInt("2032")
		const toducW1Ez = accounts[3]
		const operatordA3mZAF = accounts[2]
		const ownervfovqMx = accounts[1]
		await contractBwshBs.setApprovalForAll.call(operatorI9dBqft, _approvedP082hP8, {from: accounts[3]});
		const nullhinxa45 = await contractBwshBs.isApprovedForAll.call(ownerJGVJLZv, operatorja6NqF, {from: accounts[3]});
		const balanceKfzpaZh = await contractBwshBs.balanceOf.call(ownernx5hqCJ, {from: accounts[3]});
		await contractBwshBs.approve.call(toducW1Ez, tokenIdCJDmiKh, {from: "0x0000000000000000000000000000000000000001"});
		const nulle7asU5c = await contractBwshBs.isApprovedForAll.call(ownervfovqMx, operatordA3mZAF, {from: accounts[4]});
	});
})