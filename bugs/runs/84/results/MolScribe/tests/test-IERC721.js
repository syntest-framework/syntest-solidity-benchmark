const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contracte1Olxrc = await IERC721.new({from: accounts[5]});
		const dataW6FZNZI = "0x050c0e1a1b1b0209121608100815"
		const tokenIdU4Mobgc = BigInt("93")
		const toBYsznjN = accounts[1]
		const fromAAJGw3 = accounts[0]
		const tokenIdlWjfpxT = BigInt("1988")
		const toI7lviN8 = accounts[5]
		const fromdgaI4I = accounts[4]
		const tokenIdZPgsNWW = BigInt("934")
		const to1bVXr4 = accounts[4]
		await contracte1Olxrc.safeTransferFrom.call(fromAAJGw3, toBYsznjN, tokenIdU4Mobgc, dataW6FZNZI, {from: accounts[1]});
		await contracte1Olxrc.safeTransferFrom.call(fromdgaI4I, toI7lviN8, tokenIdlWjfpxT, {from: accounts[3]});
		await contracte1Olxrc.approve.call(to1bVXr4, tokenIdZPgsNWW, {from: accounts[4]});
	});
})