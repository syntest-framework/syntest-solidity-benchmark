const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contract8yVWBF = await IERC721.new({from: accounts[2]});
		const tokenIdt5N9Gv9 = BigInt("1586")
		const todrWxa7i = accounts[3]
		const datayY940ar = "0x060e0605171c0b0d0207051c1d0b0019131007140604080d031a1a1a16"
		const tokenIdHghy7F9 = BigInt("1814")
		const toWcNPZvN = accounts[2]
		const fromOiRpg4Y = accounts[3]
		const tokenIdpot1FF3 = BigInt("2037")
		const tokenIdi6hTvEh = BigInt("1546")
		const tokenIdvPST0K = BigInt("928")
		await contract8yVWBF.approve.call(todrWxa7i, tokenIdt5N9Gv9, {from: accounts[3]});
		await contract8yVWBF.safeTransferFrom.call(fromOiRpg4Y, toWcNPZvN, tokenIdHghy7F9, datayY940ar, {from: accounts[5]});
		const owneraYEtgXk = await contract8yVWBF.ownerOf.call(tokenIdpot1FF3, {from: accounts[1]});
		const ownerIHrtLGr = await contract8yVWBF.ownerOf.call(tokenIdi6hTvEh, {from: accounts[0]});
		const operatoryYLYi8r = await contract8yVWBF.getApproved.call(tokenIdvPST0K, {from: accounts[1]});
	});
})