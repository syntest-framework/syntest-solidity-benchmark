const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractH3G80fN = await IERC721.new({from: accounts[1]});
		const tokenIddliawre = BigInt("1957")
		const toiMTAOyG = accounts[3]
		const fromHTzT2rF = accounts[1]
		const tokenIdX070FFX = BigInt("1590")
		const toCP39Bmg = accounts[3]
		const tokenIdzVphi3B = BigInt("1946")
		const toEX0Zpo = accounts[4]
		const tokenIdIc4GlYx = BigInt("1662")
		const tonmJuZPg = accounts[4]
		const fromD2dxg9Y = accounts[4]
		await contractH3G80fN.safeTransferFrom.call(fromHTzT2rF, toiMTAOyG, tokenIddliawre, {from: accounts[3]});
		await contractH3G80fN.approve.call(toCP39Bmg, tokenIdX070FFX, {from: accounts[2]});
		await contractH3G80fN.approve.call(toEX0Zpo, tokenIdzVphi3B, {from: accounts[3]});
		await contractH3G80fN.transferFrom.call(fromD2dxg9Y, tonmJuZPg, tokenIdIc4GlYx, {from: accounts[4]});
	});
})