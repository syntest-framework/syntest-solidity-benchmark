const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractbPe7vSi = await MolScribe.new({from: accounts[3]});
		const transactionValueDOwo1go = BigInt("440")
		const buyerWjDB2VF = accounts[2]
		const tokenIdPUctT6 = BigInt("428")
		const tokenAddressiOwAVqb = accounts[2]
		const _molBankPCBuagU = accounts[0]
		const tokenIdbjJQlov = BigInt("659")
		const tokenAddressohysfFZ = accounts[2]
		const tokenIdZHXCYrJ = BigInt("1567")
		const tokenAddressg8foNvL = accounts[1]
		const tokenIdxJf6nTm = BigInt("117")
		const tokenAddressYqK5yQF = accounts[4]
		await contractbPe7vSi.makeOffer.call(tokenAddressiOwAVqb, tokenIdPUctT6, buyerWjDB2VF, transactionValueDOwo1go, {from: accounts[5]});
		await contractbPe7vSi.updateMolBank.call(_molBankPCBuagU, {from: accounts[1]});
		const nullWPx5pf6 = await contractbPe7vSi.getTokenKey.call(tokenAddressohysfFZ, tokenIdbjJQlov, {from: accounts[3]});
		await contractbPe7vSi.acceptOffer.call(tokenAddressg8foNvL, tokenIdZHXCYrJ, {from: accounts[5]});
		await contractbPe7vSi.acceptOffer.call(tokenAddressYqK5yQF, tokenIdxJf6nTm, {from: accounts[1]});

		await expect(contractbPe7vSi.makeOffer.call(tokenAddressiOwAVqb, tokenIdPUctT6, buyerWjDB2VF, transactionValueDOwo1go, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractphm3jVE = await MolScribe.new({from: accounts[5]});
		const startingRoyaltiesQ4lA9sA = BigInt("226")
		const communityAddressifYePOo = accounts[4]
		const tokenIdHb8LcuQ = BigInt("1424")
		const tokenAddressTSUdgP = accounts[4]
		const tokenIdFatQo23 = BigInt("1362")
		const tokenAddresscQ6SsO7 = accounts[0]
		const transactionValueKseiWPb = BigInt("1815")
		const buyerUk2XNPX = accounts[3]
		const tokenIdiGmHAcQ = BigInt("1912")
		const tokenAddressf9vGId4 = accounts[0]
		await contractphm3jVE.scribeNFT.call(tokenAddressTSUdgP, tokenIdHb8LcuQ, communityAddressifYePOo, startingRoyaltiesQ4lA9sA, {from: accounts[4]});
		await contractphm3jVE.acceptOffer.call(tokenAddresscQ6SsO7, tokenIdFatQo23, {from: accounts[0]});
		await contractphm3jVE.makeOffer.call(tokenAddressf9vGId4, tokenIdiGmHAcQ, buyerUk2XNPX, transactionValueKseiWPb, {from: accounts[3]});

		await expect(contractphm3jVE.scribeNFT.call(tokenAddressTSUdgP, tokenIdHb8LcuQ, communityAddressifYePOo, startingRoyaltiesQ4lA9sA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractZWfrQKL = await MolScribe.new({from: accounts[0]});
		const tokenIdcTQIxGV = BigInt("2020")
		const tokenAddresskgQ0x0 = accounts[2]
		const _molFeevBZwoXc = BigInt("854")
		const tokenIdjlNiw20 = BigInt("1736")
		const tokenAddresshkFNtex = accounts[5]
		const tokenIdTiUhALL = BigInt("549")
		const tokenAddressq10OWUW = accounts[0]
		const tokenIduSYgQY = BigInt("1737")
		const tokenAddressOpWgxxB = "0x0000000000000000000000000000000000000001"
		const _molFeefU1yzal = BigInt("270")
		const null0sDlq2 = await contractZWfrQKL.getTokenKey.call(tokenAddresskgQ0x0, tokenIdcTQIxGV, {from: accounts[2]});
		await contractZWfrQKL.updateMolFees.call(_molFeevBZwoXc, {from: accounts[3]});
		const nullX2yOdFO = await contractZWfrQKL.getTokenKey.call(tokenAddresshkFNtex, tokenIdjlNiw20, {from: accounts[3]});
		const nullLnDatnA = await contractZWfrQKL.getTokenKey.call(tokenAddressq10OWUW, tokenIdTiUhALL, {from: accounts[4]});
		const nullbznqahi = await contractZWfrQKL.getTokenKey.call(tokenAddressOpWgxxB, tokenIduSYgQY, {from: accounts[3]});
		await contractZWfrQKL.updateMolFees.call(_molFeefU1yzal, {from: accounts[0]});

		assert.equal(null0sDlq2, 0xda6ff74af74f652b126b7a5ade27f4f50ec6811e00000000000000000000000000000000000000000000000000000000000007e4)
		await expect(contractZWfrQKL.updateMolFees.call(_molFeevBZwoXc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractFApcRsF = await MolScribe.new({from: accounts[4]});
		const tokenIdj3IjDmG = BigInt("2032")
		const tokenAddressFTZBvNS = accounts[1]
		const tokenIdqOggFAw = BigInt("1555")
		const tokenAddressTrtSG46 = accounts[3]
		const communityAddresswxI8bNY = accounts[0]
		const tokenIdVcnvGOm = BigInt("1527")
		const tokenAddresslnvenLl = accounts[2]
		const startingRoyaltiesTSz9i0S = BigInt("69")
		const communityAddressAVa0A2E = accounts[0]
		const tokenIdKqGZPu3 = BigInt("172")
		const tokenAddressXkEMMhv = accounts[0]
		const tokenIdVdbhRES = BigInt("1338")
		const tokenAddressuezmfr8 = accounts[5]
		const nullAA4fbjT = await contractFApcRsF.getTokenKey.call(tokenAddressFTZBvNS, tokenIdj3IjDmG, {from: accounts[1]});
		const nullPIGiOKm = await contractFApcRsF.getTokenKey.call(tokenAddressTrtSG46, tokenIdqOggFAw, {from: accounts[4]});
		await contractFApcRsF.giftLexART.call(tokenAddresslnvenLl, tokenIdVcnvGOm, communityAddresswxI8bNY, {from: accounts[2]});
		await contractFApcRsF.scribeNFT.call(tokenAddressXkEMMhv, tokenIdKqGZPu3, communityAddressAVa0A2E, startingRoyaltiesTSz9i0S, {from: accounts[3]});
		const nullCG9COGH = await contractFApcRsF.getTokenKey.call(tokenAddressuezmfr8, tokenIdVdbhRES, {from: accounts[1]});

		assert.equal(nullAA4fbjT, 0xc2f1fa29c868fa9ba7ec3a6c74e1b49528b2ac0400000000000000000000000000000000000000000000000000000000000007f0)
		assert.equal(nullPIGiOKm, 0xc6996bcbe084b3f537db2a7413486a267e196b610000000000000000000000000000000000000000000000000000000000000613)
		await expect(contractFApcRsF.giftLexART.call(tokenAddresslnvenLl, tokenIdVcnvGOm, communityAddresswxI8bNY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractrEzXEY5 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdzSA8bD = BigInt("254")
		const tokenAddressYW287RS = accounts[4]
		const _molBankkPkZKZ = accounts[2]
		const startingRoyaltiesATmjFDs = BigInt("213")
		const communityAddressbRcLEt4 = accounts[2]
		const tokenIdrlzMfmm = BigInt("1166")
		const tokenAddressJyaVBnx = accounts[1]
		const startingRoyaltiespCz4AtP = BigInt("2")
		const communityAddressA5rxrH = accounts[2]
		const tokenIdLUMgudN = BigInt("1177")
		const tokenAddressumI8RyO = accounts[2]
		const _molBankjH9A1ks = accounts[2]
		const transactionValueTWkKCyF = BigInt("1828")
		const buyergRru0s5 = accounts[2]
		const tokenIdKA2KJPD = BigInt("179")
		const tokenAddressd67NGXA = accounts[5]
		const null2aneIY = await contractrEzXEY5.getTokenKey.call(tokenAddressYW287RS, tokenIdzSA8bD, {from: accounts[4]});
		await contractrEzXEY5.updateMolBank.call(_molBankkPkZKZ, {from: accounts[4]});
		await contractrEzXEY5.scribeNFT.call(tokenAddressJyaVBnx, tokenIdrlzMfmm, communityAddressbRcLEt4, startingRoyaltiesATmjFDs, {from: accounts[4]});
		await contractrEzXEY5.scribeNFT.call(tokenAddressumI8RyO, tokenIdLUMgudN, communityAddressA5rxrH, startingRoyaltiespCz4AtP, {from: accounts[1]});
		await contractrEzXEY5.updateMolBank.call(_molBankjH9A1ks, {from: accounts[5]});
		await contractrEzXEY5.makeOffer.call(tokenAddressd67NGXA, tokenIdKA2KJPD, buyergRru0s5, transactionValueTWkKCyF, {from: accounts[1]});
	});

	it('test for MolScribe', async () => {
		const contractgYwie3s = await MolScribe.new({from: accounts[1]});
		const tokenIdE3c3a7o = BigInt("158")
		const tokenAddressUuvkGEv = accounts[1]
		const tokenIdMevfBLJ = BigInt("1481")
		const tokenAddresshQc9XqA = accounts[4]
		await contractgYwie3s.acceptOffer.call(tokenAddressUuvkGEv, tokenIdE3c3a7o, {from: accounts[4]});
		await contractgYwie3s.acceptOffer.call(tokenAddresshQc9XqA, tokenIdMevfBLJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractgYwie3s.acceptOffer.call(tokenAddressUuvkGEv, tokenIdE3c3a7o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})