const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractr0uJIj = await IERC721.new({from: accounts[4]});
		const tokenIdQupqyVC = BigInt("811")
		const operatork7zPAZN = accounts[4]
		const ownerWers0E = accounts[5]
		const ownerGPjMN17 = await contractr0uJIj.ownerOf.call(tokenIdQupqyVC, {from: accounts[2]});
		const nulloPGcIY4 = await contractr0uJIj.isApprovedForAll.call(ownerWers0E, operatork7zPAZN, {from: accounts[5]});
	});
})