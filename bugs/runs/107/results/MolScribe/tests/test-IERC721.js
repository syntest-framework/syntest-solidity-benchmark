const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractJL7xG44 = await IERC721.new({from: accounts[5]});
		const tokenIdHdNxGmI = BigInt("1680")
		const toRW7APOO = accounts[4]
		const fromY37RA0 = accounts[1]
		const tokenIde3gBd6p = BigInt("350")
		const toneB5aRb = accounts[2]
		const tokenIdkijKMS4 = BigInt("649")
		const tokenIdHNIxpro = BigInt("1862")
		const toexSAEaE = accounts[0]
		await contractJL7xG44.transferFrom.call(fromY37RA0, toRW7APOO, tokenIdHdNxGmI, {from: accounts[2]});
		await contractJL7xG44.approve.call(toneB5aRb, tokenIde3gBd6p, {from: accounts[1]});
		const operatorYfXLh5S = await contractJL7xG44.getApproved.call(tokenIdkijKMS4, {from: accounts[0]});
		await contractJL7xG44.approve.call(toexSAEaE, tokenIdHNIxpro, {from: "0x0000000000000000000000000000000000000001"});
	});
})