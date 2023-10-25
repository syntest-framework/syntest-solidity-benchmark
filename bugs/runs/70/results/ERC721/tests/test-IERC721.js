const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractVHFItdj = await IERC721.new({from: accounts[5]});
		const tokenIdpE2nmgu = BigInt("1658")
		const operatoryaWi8VE = accounts[2]
		const ownerqkl2Eo = accounts[4]
		const tokenIdBz5mgYd = BigInt("1081")
		const toAN6sQs8 = accounts[5]
		const tokenIdsT2lMSY = BigInt("459")
		const operatorZxDgCyO = await contractVHFItdj.getApproved.call(tokenIdpE2nmgu, {from: accounts[0]});
		const nullXJcdqdy = await contractVHFItdj.isApprovedForAll.call(ownerqkl2Eo, operatoryaWi8VE, {from: accounts[3]});
		await contractVHFItdj.approve.call(toAN6sQs8, tokenIdBz5mgYd, {from: accounts[3]});
		const ownerCX0876I = await contractVHFItdj.ownerOf.call(tokenIdsT2lMSY, {from: "0x0000000000000000000000000000000000000001"});
	});
})