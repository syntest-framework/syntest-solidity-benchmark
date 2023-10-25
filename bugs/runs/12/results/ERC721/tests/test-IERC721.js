const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractmikkvlO = await IERC721.new({from: accounts[4]});
		const ownerGNpd7jy = accounts[2]
		const tokenIddT2S1HX = BigInt("466")
		const toFuXqFgA = accounts[0]
		const tokenIdNFPio6B = BigInt("374")
		const tohSBrMve = accounts[0]
		const fromlitWwy8 = accounts[2]
		const balancegIscNoM = await contractmikkvlO.balanceOf.call(ownerGNpd7jy, {from: accounts[4]});
		await contractmikkvlO.approve.call(toFuXqFgA, tokenIddT2S1HX, {from: accounts[1]});
		await contractmikkvlO.transferFrom.call(fromlitWwy8, tohSBrMve, tokenIdNFPio6B, {from: accounts[0]});
	});
})