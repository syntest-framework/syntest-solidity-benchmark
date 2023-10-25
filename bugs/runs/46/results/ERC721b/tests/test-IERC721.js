const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractKyBUtF3 = await IERC721.new({from: accounts[5]});
		const _approvedY42g28X = false
		const operatorf6tg0e = accounts[0]
		const tokenIdpXKG68y = BigInt("904")
		const tofuFL8tl = accounts[2]
		const fromhkG7JHq = accounts[0]
		const operatorca2Ky01 = accounts[1]
		const ownerLjA8xdX = accounts[0]
		await contractKyBUtF3.setApprovalForAll.call(operatorf6tg0e, _approvedY42g28X, {from: accounts[0]});
		await contractKyBUtF3.safeTransferFrom.call(fromhkG7JHq, tofuFL8tl, tokenIdpXKG68y, {from: accounts[3]});
		const nulln3e2pl8 = await contractKyBUtF3.isApprovedForAll.call(ownerLjA8xdX, operatorca2Ky01, {from: accounts[3]});
	});
})