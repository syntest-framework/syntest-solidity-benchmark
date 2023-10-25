const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractUnmW5n = await IERC721.new({from: accounts[1]});
		const dataDq2nFT = "0x14190d04120e0b0d0b0414001c120a16"
		const tokenIdr1SFEHQ = BigInt("1628")
		const toTS06auf = accounts[1]
		const frommbAOKup = accounts[0]
		const tokenIdgDPs02G = BigInt("226")
		const toA1pu0T = accounts[2]
		const tokenIdLP6kVN0 = BigInt("679")
		await contractUnmW5n.safeTransferFrom.call(frommbAOKup, toTS06auf, tokenIdr1SFEHQ, dataDq2nFT, {from: accounts[0]});
		await contractUnmW5n.approve.call(toA1pu0T, tokenIdgDPs02G, {from: accounts[3]});
		const owneroEcL1vi = await contractUnmW5n.ownerOf.call(tokenIdLP6kVN0, {from: accounts[1]});
	});
})