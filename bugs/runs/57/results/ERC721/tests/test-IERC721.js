const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractw4VkWbf = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdZqsxpEN = BigInt("576")
		const operatoraEgz7O4 = accounts[2]
		const ownertxBLLLJ = accounts[3]
		const tokenIdU35Qa2m = BigInt("38")
		const toAvEzql = accounts[3]
		const fromCbD5pHB = accounts[3]
		const tokenIdG7xvpfy = BigInt("1877")
		const tokenIdnEn40HR = BigInt("1845")
		const toISxMf8S = accounts[2]
		const tokenIdN3icuZi = BigInt("1641")
		const ownerDdftG5 = await contractw4VkWbf.ownerOf.call(tokenIdZqsxpEN, {from: accounts[3]});
		const nullmjmOwR0 = await contractw4VkWbf.isApprovedForAll.call(ownertxBLLLJ, operatoraEgz7O4, {from: accounts[0]});
		await contractw4VkWbf.transferFrom.call(fromCbD5pHB, toAvEzql, tokenIdU35Qa2m, {from: "0x0000000000000000000000000000000000000001"});
		const operator92yBgL = await contractw4VkWbf.getApproved.call(tokenIdG7xvpfy, {from: accounts[5]});
		await contractw4VkWbf.approve.call(toISxMf8S, tokenIdnEn40HR, {from: accounts[0]});
		const ownerelgOptk = await contractw4VkWbf.ownerOf.call(tokenIdN3icuZi, {from: accounts[2]});
	});
})