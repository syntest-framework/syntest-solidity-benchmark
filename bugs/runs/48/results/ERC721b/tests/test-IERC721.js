const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractMOg7l6s = await IERC721.new({from: accounts[4]});
		const tokenIdysVb0GG = BigInt("621")
		const togdVe1VF = accounts[2]
		const tokenIdHRTS7ST = BigInt("178")
		const tokenIdU72fqkD = BigInt("1464")
		const tokenIdkpXFvKz = BigInt("1262")
		await contractMOg7l6s.approve.call(togdVe1VF, tokenIdysVb0GG, {from: accounts[2]});
		const ownercWhpwYc = await contractMOg7l6s.ownerOf.call(tokenIdHRTS7ST, {from: accounts[5]});
		const ownernvF0yfA = await contractMOg7l6s.ownerOf.call(tokenIdU72fqkD, {from: accounts[0]});
		const ownerQQY0dyk = await contractMOg7l6s.ownerOf.call(tokenIdkpXFvKz, {from: accounts[5]});
	});
})