const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contracty9RQxQN = await IERC721.new({from: accounts[2]});
		const tokenIdsaiHgKR = BigInt("466")
		const toOgfkEco = accounts[4]
		const fromjbI700v = accounts[1]
		const tokenIdZ7iHOCE = BigInt("103")
		const tokenIdlkBhjL3 = BigInt("1963")
		const tokenIdCKDb4Jh = BigInt("873")
		const toxT50GH0 = accounts[1]
		const fromlm9aVK0 = accounts[0]
		await contracty9RQxQN.safeTransferFrom.call(fromjbI700v, toOgfkEco, tokenIdsaiHgKR, {from: accounts[3]});
		const ownerrKYovh = await contracty9RQxQN.ownerOf.call(tokenIdZ7iHOCE, {from: accounts[3]});
		const operatorl4tDQnP = await contracty9RQxQN.getApproved.call(tokenIdlkBhjL3, {from: accounts[5]});
		await contracty9RQxQN.safeTransferFrom.call(fromlm9aVK0, toxT50GH0, tokenIdCKDb4Jh, {from: accounts[3]});
	});
})