const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractmYDy2em = await IERC721.new({from: accounts[1]});
		const ownerCH5J29K = accounts[1]
		const operator7UlW2g = accounts[5]
		const ownerrlh4XS3 = accounts[2]
		const owneriFzhIy = accounts[4]
		const tokenIdvkdSi7d = BigInt("412")
		const tokenIdQdEhUjs = BigInt("130")
		const toc8ibwEC = accounts[2]
		const fromOMe0Ddh = accounts[5]
		const balanceWDOscHg = await contractmYDy2em.balanceOf.call(ownerCH5J29K, {from: accounts[3]});
		const nullKK0jSVh = await contractmYDy2em.isApprovedForAll.call(ownerrlh4XS3, operator7UlW2g, {from: accounts[1]});
		const balancep3i1KKj = await contractmYDy2em.balanceOf.call(owneriFzhIy, {from: accounts[4]});
		const ownerycPise = await contractmYDy2em.ownerOf.call(tokenIdvkdSi7d, {from: accounts[5]});
		await contractmYDy2em.safeTransferFrom.call(fromOMe0Ddh, toc8ibwEC, tokenIdQdEhUjs, {from: accounts[0]});
	});
})