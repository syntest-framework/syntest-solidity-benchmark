const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractvkamnjv = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdg5JziFj = BigInt("180")
		const tokenIdob4azZi = BigInt("536")
		const tokenIdfCIv28a = BigInt("109")
		const toNisZwqP = accounts[4]
		const operatorHeTkR41 = accounts[2]
		const ownerpAtKWXd = accounts[3]
		const operatoru0Rx4wS = await contractvkamnjv.getApproved.call(tokenIdg5JziFj, {from: accounts[3]});
		const ownerc5QKW0E = await contractvkamnjv.ownerOf.call(tokenIdob4azZi, {from: accounts[2]});
		await contractvkamnjv.approve.call(toNisZwqP, tokenIdfCIv28a, {from: accounts[2]});
		const nullGn1UiJ9 = await contractvkamnjv.isApprovedForAll.call(ownerpAtKWXd, operatorHeTkR41, {from: accounts[2]});
	});
})