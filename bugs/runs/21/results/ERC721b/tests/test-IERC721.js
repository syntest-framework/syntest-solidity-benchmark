const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contract79uE26 = await IERC721.new({from: accounts[4]});
		const tokenIdY7mY6Ru = BigInt("1950")
		const toCUAVw4 = accounts[4]
		const fromxgF9Mjj = accounts[4]
		const tokenIdssWdAI = BigInt("233")
		const tomJntxgx = accounts[3]
		const fromRnLKlt6 = accounts[2]
		const tokenIdETyORt6 = BigInt("1484")
		await contract79uE26.safeTransferFrom.call(fromxgF9Mjj, toCUAVw4, tokenIdY7mY6Ru, {from: accounts[3]});
		await contract79uE26.safeTransferFrom.call(fromRnLKlt6, tomJntxgx, tokenIdssWdAI, {from: accounts[1]});
		const owneriTsLWjC = await contract79uE26.ownerOf.call(tokenIdETyORt6, {from: accounts[4]});
	});
})