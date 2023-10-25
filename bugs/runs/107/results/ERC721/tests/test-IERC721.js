const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractgU8FLGN = await IERC721.new({from: accounts[3]});
		const operatorCEfr8PN = accounts[0]
		const ownerAJHOSyL = accounts[3]
		const tokenIdMghqtvO = BigInt("296")
		const tomRaKtRL = accounts[1]
		const tokenIdGCRW1cX = BigInt("1804")
		const tox3pRcFQ = accounts[3]
		const nulllsnnKe1 = await contractgU8FLGN.isApprovedForAll.call(ownerAJHOSyL, operatorCEfr8PN, {from: accounts[1]});
		await contractgU8FLGN.approve.call(tomRaKtRL, tokenIdMghqtvO, {from: accounts[0]});
		await contractgU8FLGN.approve.call(tox3pRcFQ, tokenIdGCRW1cX, {from: accounts[2]});
	});
})