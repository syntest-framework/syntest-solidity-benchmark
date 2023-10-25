const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractASh2XnD = await IERC721.new({from: accounts[1]});
		const tokenIdfhFgh9s = BigInt("783")
		const toxWS06WI = accounts[2]
		const fromaYwq6rx = accounts[3]
		const tokenIdbaxQrF = BigInt("1392")
		const toB7wNZM0 = accounts[1]
		const fromtYR8vTi = accounts[4]
		const tokenIdWC8Dd2S = BigInt("1928")
		const toyojtWFm = accounts[0]
		const fromFnMawat = accounts[3]
		await contractASh2XnD.transferFrom.call(fromaYwq6rx, toxWS06WI, tokenIdfhFgh9s, {from: "0x0000000000000000000000000000000000000001"});
		await contractASh2XnD.safeTransferFrom.call(fromtYR8vTi, toB7wNZM0, tokenIdbaxQrF, {from: accounts[1]});
		await contractASh2XnD.transferFrom.call(fromFnMawat, toyojtWFm, tokenIdWC8Dd2S, {from: "0x0000000000000000000000000000000000000001"});
	});
})