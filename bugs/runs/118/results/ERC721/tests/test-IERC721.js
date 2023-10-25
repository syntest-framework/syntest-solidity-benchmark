const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractdefeTLx = await IERC721.new({from: accounts[3]});
		const ownerqJQ5QO9 = accounts[3]
		const ownermFsIYR7 = accounts[3]
		const tokenIdpgEfen = BigInt("210")
		const _approvedtpEUQuY = true
		const operatornf5YezV = accounts[0]
		const tokenIdW1HVMW = BigInt("1968")
		const tokenIdKpnnOLY = BigInt("913")
		const toljkO9R6 = accounts[4]
		const balancefy6meww = await contractdefeTLx.balanceOf.call(ownerqJQ5QO9, {from: accounts[0]});
		const balanceLntE6h3 = await contractdefeTLx.balanceOf.call(ownermFsIYR7, {from: accounts[1]});
		const ownerTQuDe8q = await contractdefeTLx.ownerOf.call(tokenIdpgEfen, {from: accounts[3]});
		await contractdefeTLx.setApprovalForAll.call(operatornf5YezV, _approvedtpEUQuY, {from: accounts[0]});
		const ownerS28tIGl = await contractdefeTLx.ownerOf.call(tokenIdW1HVMW, {from: accounts[0]});
		await contractdefeTLx.approve.call(toljkO9R6, tokenIdKpnnOLY, {from: accounts[4]});
	});
})