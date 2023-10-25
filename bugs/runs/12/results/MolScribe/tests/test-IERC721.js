const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractOUKhL5B = await IERC721.new({from: accounts[4]});
		const tokenIdrF18cM9 = BigInt("465")
		const tokenIdwIQbPbi = BigInt("928")
		const togFQgynC = accounts[4]
		const fromWnB3gKL = accounts[2]
		const operatorXfjNGBO = await contractOUKhL5B.getApproved.call(tokenIdrF18cM9, {from: accounts[1]});
		await contractOUKhL5B.transferFrom.call(fromWnB3gKL, togFQgynC, tokenIdwIQbPbi, {from: accounts[4]});
	});
})