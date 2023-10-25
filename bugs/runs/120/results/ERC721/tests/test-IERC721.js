const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractqUFs1U5 = await IERC721.new({from: accounts[0]});
		const tokenIdJA7YbmE = BigInt("588")
		const toQUoiJIq = accounts[0]
		const tokenIdeVn9C7p = BigInt("1769")
		const toZzkC9QY = accounts[2]
		const _approvedcsCjiVF = true
		const operatoryaegBfa = accounts[1]
		const tokenIdnZwKyBp = BigInt("1075")
		const toUO1jUOv = accounts[5]
		await contractqUFs1U5.approve.call(toQUoiJIq, tokenIdJA7YbmE, {from: accounts[0]});
		await contractqUFs1U5.approve.call(toZzkC9QY, tokenIdeVn9C7p, {from: accounts[5]});
		await contractqUFs1U5.setApprovalForAll.call(operatoryaegBfa, _approvedcsCjiVF, {from: "0x0000000000000000000000000000000000000001"});
		await contractqUFs1U5.approve.call(toUO1jUOv, tokenIdnZwKyBp, {from: accounts[1]});
	});
})