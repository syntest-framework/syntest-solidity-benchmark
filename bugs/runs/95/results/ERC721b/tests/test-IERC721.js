const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractauhNDUf = await IERC721.new({from: accounts[5]});
		const tokenIdLw4STwt = BigInt("186")
		const tom22qwlY = accounts[3]
		const fromIRx9Knd = accounts[4]
		const tokenIdltoInQl = BigInt("1876")
		const toLUQi5Tc = "0x0000000000000000000000000000000000000001"
		const fromOtUHLwa = accounts[4]
		const tokenIdVEKn3nU = BigInt("984")
		const toBioXqU = accounts[5]
		const fromAxanren = accounts[5]
		const tokenIdfbn85HX = BigInt("1366")
		const togwX08gt = accounts[0]
		const fromAEqbPxZ = accounts[2]
		await contractauhNDUf.transferFrom.call(fromIRx9Knd, tom22qwlY, tokenIdLw4STwt, {from: accounts[2]});
		await contractauhNDUf.safeTransferFrom.call(fromOtUHLwa, toLUQi5Tc, tokenIdltoInQl, {from: accounts[0]});
		await contractauhNDUf.transferFrom.call(fromAxanren, toBioXqU, tokenIdVEKn3nU, {from: accounts[5]});
		await contractauhNDUf.safeTransferFrom.call(fromAEqbPxZ, togwX08gt, tokenIdfbn85HX, {from: accounts[0]});
	});
})