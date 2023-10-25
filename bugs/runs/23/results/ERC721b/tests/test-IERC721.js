const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractA3VYwE = await IERC721.new({from: accounts[3]});
		const tokenIdQpK4l1K = BigInt("672")
		const topn7y6jR = accounts[1]
		const fromj7sSZT2 = "0x0000000000000000000000000000000000000001"
		const tokenIdG904bT = BigInt("863")
		const tokenIdWiKoehC = BigInt("1962")
		const toMyi1u1g = accounts[2]
		const fromKvRXyH1 = accounts[4]
		await contractA3VYwE.safeTransferFrom.call(fromj7sSZT2, topn7y6jR, tokenIdQpK4l1K, {from: accounts[0]});
		const ownerFvPSEGK = await contractA3VYwE.ownerOf.call(tokenIdG904bT, {from: "0x0000000000000000000000000000000000000001"});
		await contractA3VYwE.transferFrom.call(fromKvRXyH1, toMyi1u1g, tokenIdWiKoehC, {from: accounts[1]});
	});
})