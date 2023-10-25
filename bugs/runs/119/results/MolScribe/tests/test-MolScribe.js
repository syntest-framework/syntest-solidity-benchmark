const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractXjfpagU = await MolScribe.new({from: accounts[5]});
		const _mollUnddL = accounts[4]
		const _molZfAs6p = accounts[5]
		const _molBanksbO5L1t = accounts[3]
		const tokenIdjSCv2Ym = BigInt("1880")
		const tokenAddressFqw8H7e = accounts[1]
		const _molFeeSQCThQH = BigInt("888")
		await contractXjfpagU.updateMol.call(_mollUnddL, {from: accounts[2]});
		await contractXjfpagU.updateMol.call(_molZfAs6p, {from: accounts[1]});
		await contractXjfpagU.updateMolBank.call(_molBanksbO5L1t, {from: accounts[2]});
		await contractXjfpagU.acceptOffer.call(tokenAddressFqw8H7e, tokenIdjSCv2Ym, {from: accounts[4]});
		await contractXjfpagU.updateMolFees.call(_molFeeSQCThQH, {from: accounts[2]});

		await expect(contractXjfpagU.updateMol.call(_mollUnddL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractGCyKz3u = await MolScribe.new({from: accounts[0]});
		const tokenIdvwIOQE9 = BigInt("1016")
		const tokenAddressKoOK5Dm = accounts[4]
		const _molBankssr6QQh = accounts[4]
		const _molFeeWJBN8zg = BigInt("361")
		const transactionValueJUbp9no = BigInt("366")
		const buyerZaWTmLb = accounts[2]
		const tokenIdE9jIlg = BigInt("226")
		const tokenAddressDIkwCDp = accounts[1]
		const _molFeeTMuQCR = BigInt("946")
		const communityAddresszLDuJeo = accounts[3]
		const tokenIdSN9JrKC = BigInt("1116")
		const tokenAddresswhcjFCN = accounts[3]
		const nullJZKCfD2 = await contractGCyKz3u.getTokenKey.call(tokenAddressKoOK5Dm, tokenIdvwIOQE9, {from: "0x0000000000000000000000000000000000000001"});
		await contractGCyKz3u.updateMolBank.call(_molBankssr6QQh, {from: accounts[2]});
		await contractGCyKz3u.updateMolFees.call(_molFeeWJBN8zg, {from: accounts[2]});
		await contractGCyKz3u.makeOffer.call(tokenAddressDIkwCDp, tokenIdE9jIlg, buyerZaWTmLb, transactionValueJUbp9no, {from: accounts[2]});
		await contractGCyKz3u.updateMolFees.call(_molFeeTMuQCR, {from: accounts[3]});
		await contractGCyKz3u.giftLexART.call(tokenAddresswhcjFCN, tokenIdSN9JrKC, communityAddresszLDuJeo, {from: accounts[3]});

		assert.equal(nullJZKCfD2, 0xc0bd8b6d6e9a735735aaa97987bb4ee6c48d1f3a00000000000000000000000000000000000000000000000000000000000003f8)
		await expect(contractGCyKz3u.updateMolBank.call(_molBankssr6QQh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractZLaj0om = await MolScribe.new({from: accounts[4]});
		const tokenIdmLQJVBr = BigInt("614")
		const tokenAddresstuv85yH = accounts[2]
		const transactionValuey91ClA1 = BigInt("567")
		const buyerah8wEFy = accounts[0]
		const tokenIdTb82f2U = BigInt("1415")
		const tokenAddressjghmZnd = accounts[1]
		const _molFeeMeXsX5S = BigInt("1094")
		const _molBankOOi5TZ0 = accounts[1]
		const _molpDm0esf = accounts[2]
		await contractZLaj0om.acceptOffer.call(tokenAddresstuv85yH, tokenIdmLQJVBr, {from: accounts[1]});
		await contractZLaj0om.makeOffer.call(tokenAddressjghmZnd, tokenIdTb82f2U, buyerah8wEFy, transactionValuey91ClA1, {from: accounts[2]});
		await contractZLaj0om.updateMolFees.call(_molFeeMeXsX5S, {from: accounts[3]});
		await contractZLaj0om.updateMolBank.call(_molBankOOi5TZ0, {from: accounts[3]});
		await contractZLaj0om.updateMol.call(_molpDm0esf, {from: accounts[4]});

		await expect(contractZLaj0om.acceptOffer.call(tokenAddresstuv85yH, tokenIdmLQJVBr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractTJvzRQB = await MolScribe.new({from: accounts[2]});
		const transactionValuenPw9YUX = BigInt("1652")
		const buyerBsiF44f = accounts[4]
		const tokenIdCam3H66 = BigInt("876")
		const tokenAddressHSd6hSn = accounts[3]
		const startingRoyaltiesnoVBjXY = BigInt("24")
		const communityAddressA81FK7E = accounts[0]
		const tokenIdzDhMv1a = BigInt("142")
		const tokenAddressQMqf65t = accounts[4]
		const transactionValuedu9nIRm = BigInt("389")
		const buyerTge6zo4 = accounts[4]
		const tokenIdb4QeGRl = BigInt("15")
		const tokenAddressuAfJwFN = accounts[4]
		const tokenIdcYZuOGr = BigInt("664")
		const tokenAddressv53IaJr = accounts[0]
		const tokenIdNWlrYKC = BigInt("477")
		const tokenAddresshrBcPu = accounts[2]
		await contractTJvzRQB.makeOffer.call(tokenAddressHSd6hSn, tokenIdCam3H66, buyerBsiF44f, transactionValuenPw9YUX, {from: accounts[4]});
		await contractTJvzRQB.scribeNFT.call(tokenAddressQMqf65t, tokenIdzDhMv1a, communityAddressA81FK7E, startingRoyaltiesnoVBjXY, {from: "0x0000000000000000000000000000000000000001"});
		await contractTJvzRQB.makeOffer.call(tokenAddressuAfJwFN, tokenIdb4QeGRl, buyerTge6zo4, transactionValuedu9nIRm, {from: accounts[0]});
		const nullmCmrVza = await contractTJvzRQB.getTokenKey.call(tokenAddressv53IaJr, tokenIdcYZuOGr, {from: accounts[1]});
		const nullYTTUdWV = await contractTJvzRQB.getTokenKey.call(tokenAddresshrBcPu, tokenIdNWlrYKC, {from: accounts[3]});

		await expect(contractTJvzRQB.makeOffer.call(tokenAddressHSd6hSn, tokenIdCam3H66, buyerBsiF44f, transactionValuenPw9YUX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractO6bejVx = await MolScribe.new({from: accounts[1]});
		const startingRoyaltiesj1hOwdW = BigInt("156")
		const communityAddressIr4oJr = "0x0000000000000000000000000000000000000001"
		const tokenIdAVPavxK = BigInt("1567")
		const tokenAddressuwXdtuf = accounts[3]
		const _molFeeW77hVJF = BigInt("1398")
		await contractO6bejVx.scribeNFT.call(tokenAddressuwXdtuf, tokenIdAVPavxK, communityAddressIr4oJr, startingRoyaltiesj1hOwdW, {from: accounts[5]});
		await contractO6bejVx.updateMolFees.call(_molFeeW77hVJF, {from: accounts[5]});

		await expect(contractO6bejVx.scribeNFT.call(tokenAddressuwXdtuf, tokenIdAVPavxK, communityAddressIr4oJr, startingRoyaltiesj1hOwdW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractRhvrdqR = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdKBTzkB = BigInt("835")
		const tokenAddressnQjfS1L = "0x0000000000000000000000000000000000000001"
		const tokenIdh0u2ahO = BigInt("1803")
		const tokenAddresso6An8JB = accounts[2]
		const _moluRxY3nj = accounts[2]
		await contractRhvrdqR.acceptOffer.call(tokenAddressnQjfS1L, tokenIdKBTzkB, {from: accounts[4]});
		await contractRhvrdqR.acceptOffer.call(tokenAddresso6An8JB, tokenIdh0u2ahO, {from: accounts[4]});
		await contractRhvrdqR.updateMol.call(_moluRxY3nj, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MolScribe', async () => {
		const contractXWxqmCu = await MolScribe.new({from: accounts[1]});
		const communityAddressJwdh9IV = accounts[1]
		const tokenIdKEM8pSL = BigInt("593")
		const tokenAddressJd8JAYR = accounts[1]
		const transactionValuePBW5Y2h = BigInt("1106")
		const buyermWUWWie = "0x0000000000000000000000000000000000000001"
		const tokenIdmxwTUzj = BigInt("1615")
		const tokenAddressq3NMJmK = accounts[2]
		const startingRoyaltiesHoA2Woe = BigInt("156")
		const communityAddressQo7ToE = "0x0000000000000000000000000000000000000001"
		const tokenIdBqZdyOC = BigInt("1567")
		const tokenAddressGRnvm29 = accounts[3]
		await contractXWxqmCu.giftLexART.call(tokenAddressJd8JAYR, tokenIdKEM8pSL, communityAddressJwdh9IV, {from: accounts[3]});
		await contractXWxqmCu.makeOffer.call(tokenAddressq3NMJmK, tokenIdmxwTUzj, buyermWUWWie, transactionValuePBW5Y2h, {from: accounts[3]});
		await contractXWxqmCu.scribeNFT.call(tokenAddressGRnvm29, tokenIdBqZdyOC, communityAddressQo7ToE, startingRoyaltiesHoA2Woe, {from: accounts[5]});

		await expect(contractXWxqmCu.giftLexART.call(tokenAddressJd8JAYR, tokenIdKEM8pSL, communityAddressJwdh9IV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})