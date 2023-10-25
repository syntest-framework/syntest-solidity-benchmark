const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractZvqBmtI = await IERC721.new({from: accounts[1]});
		const tokenIdSq4pYCt = BigInt("1099")
		const tokenIdSkuUB0Z = BigInt("470")
		const tolN8322g = "0x0000000000000000000000000000000000000001"
		const fromwKUXxS3 = accounts[2]
		const tokenIdF63T5s9 = BigInt("1453")
		const toEPKBiPp = accounts[0]
		const fromtNCnR2A = accounts[5]
		const ownerFUBxUL0 = await contractZvqBmtI.ownerOf.call(tokenIdSq4pYCt, {from: accounts[1]});
		await contractZvqBmtI.safeTransferFrom.call(fromwKUXxS3, tolN8322g, tokenIdSkuUB0Z, {from: accounts[3]});
		await contractZvqBmtI.transferFrom.call(fromtNCnR2A, toEPKBiPp, tokenIdF63T5s9, {from: accounts[4]});
	});
})