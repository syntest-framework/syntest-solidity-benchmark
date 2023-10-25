const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractb8Ltp38 = await IERC721.new({from: accounts[0]});
		const tokenIdRsWmRkm = BigInt("1687")
		const tokenIdvYxmL6b = BigInt("364")
		const operatorynXUZxU = accounts[3]
		const ownerK12VF2x = accounts[2]
		const tokenIdYAkfKqK = BigInt("560")
		const togIZtSkk = accounts[0]
		const fromWkOYCxZ = accounts[0]
		const operatoruOV0biz = await contractb8Ltp38.getApproved.call(tokenIdRsWmRkm, {from: accounts[1]});
		const ownerKTRCAZM = await contractb8Ltp38.ownerOf.call(tokenIdvYxmL6b, {from: accounts[0]});
		const nullNHji93C = await contractb8Ltp38.isApprovedForAll.call(ownerK12VF2x, operatorynXUZxU, {from: accounts[3]});
		await contractb8Ltp38.transferFrom.call(fromWkOYCxZ, togIZtSkk, tokenIdYAkfKqK, {from: accounts[2]});
	});
})