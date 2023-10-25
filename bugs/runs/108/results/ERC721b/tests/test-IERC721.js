const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractfUlFYVW = await IERC721.new({from: accounts[4]});
		const tokenIdgbAZyeo = BigInt("1764")
		const toRwKI8K = accounts[1]
		const fromHWD4tSq = accounts[2]
		const operatore0h45Xc = "0x0000000000000000000000000000000000000001"
		const ownersMxEeie = accounts[3]
		const tokenIdWV2VN3m = BigInt("497")
		const toPRMq6Nf = accounts[2]
		const fromlV59jsO = accounts[5]
		const tokenIdAhQC8kT = BigInt("1148")
		const towmOIx2i = accounts[3]
		const fromEPlG4y = accounts[2]
		await contractfUlFYVW.safeTransferFrom.call(fromHWD4tSq, toRwKI8K, tokenIdgbAZyeo, {from: accounts[4]});
		const nullm61bZIE = await contractfUlFYVW.isApprovedForAll.call(ownersMxEeie, operatore0h45Xc, {from: accounts[1]});
		await contractfUlFYVW.transferFrom.call(fromlV59jsO, toPRMq6Nf, tokenIdWV2VN3m, {from: accounts[1]});
		await contractfUlFYVW.transferFrom.call(fromEPlG4y, towmOIx2i, tokenIdAhQC8kT, {from: accounts[5]});
	});
})