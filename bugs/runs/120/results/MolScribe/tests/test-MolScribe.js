const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractRGmo2P = await MolScribe.new({from: accounts[0]});
		const startingRoyaltiesHDzuJ0l = BigInt("36")
		const communityAddressLjWAkRW = accounts[1]
		const tokenIdwziog9r = BigInt("1289")
		const tokenAddressDhKMfix = accounts[0]
		const _molBanksI3lTFk = accounts[0]
		await contractRGmo2P.scribeNFT.call(tokenAddressDhKMfix, tokenIdwziog9r, communityAddressLjWAkRW, startingRoyaltiesHDzuJ0l, {from: accounts[4]});
		await contractRGmo2P.updateMolBank.call(_molBanksI3lTFk, {from: accounts[4]});

		await expect(contractRGmo2P.scribeNFT.call(tokenAddressDhKMfix, tokenIdwziog9r, communityAddressLjWAkRW, startingRoyaltiesHDzuJ0l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractmOoLE5L = await MolScribe.new({from: accounts[1]});
		const tokenIdtUWtfk7 = BigInt("544")
		const tokenAddressqslz59K = accounts[2]
		const tokenIdlR94lI1 = BigInt("1191")
		const tokenAddressQI3xXSV = accounts[4]
		const _molBankumCsfl = accounts[5]
		const communityAddressnVfKSz4 = accounts[2]
		const tokenIdQYvhgL = BigInt("695")
		const tokenAddressKPED5fQ = "0x0000000000000000000000000000000000000001"
		const tokenIdnaoxiKi = BigInt("510")
		const tokenAddressWlNkbkA = accounts[1]
		const startingRoyaltieswHo3t0c = BigInt("94")
		const communityAddressOm65dMT = accounts[4]
		const tokenIdKoqqc1r = BigInt("323")
		const tokenAddressAPamFot = accounts[4]
		const nulleNMT7Tm = await contractmOoLE5L.getTokenKey.call(tokenAddressqslz59K, tokenIdtUWtfk7, {from: accounts[4]});
		const nullPbKjO3 = await contractmOoLE5L.getTokenKey.call(tokenAddressQI3xXSV, tokenIdlR94lI1, {from: accounts[1]});
		await contractmOoLE5L.updateMolBank.call(_molBankumCsfl, {from: accounts[1]});
		await contractmOoLE5L.giftLexART.call(tokenAddressKPED5fQ, tokenIdQYvhgL, communityAddressnVfKSz4, {from: accounts[1]});
		await contractmOoLE5L.acceptOffer.call(tokenAddressWlNkbkA, tokenIdnaoxiKi, {from: accounts[0]});
		await contractmOoLE5L.scribeNFT.call(tokenAddressAPamFot, tokenIdKoqqc1r, communityAddressOm65dMT, startingRoyaltieswHo3t0c, {from: accounts[4]});

		assert.equal(nullPbKjO3, 0x4745fe2070f058fb0157ad33915565ecb1b45fe100000000000000000000000000000000000000000000000000000000000004a7)
		assert.equal(nulleNMT7Tm, 0x4cca51acf01885f2fc9d8a5379b3f91bd6c12bf90000000000000000000000000000000000000000000000000000000000000220)
		await expect(contractmOoLE5L.updateMolBank.call(_molBankumCsfl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractdLeIx7v = await MolScribe.new({from: accounts[3]});
		const tokenIdCZ3TBaf = BigInt("79")
		const tokenAddressF82L0Zq = accounts[4]
		const tokenIdGSnSmw7 = BigInt("709")
		const tokenAddressWDm6MM9 = accounts[5]
		const transactionValuepRVLVlk = BigInt("1799")
		const buyerNoCQkzu = accounts[1]
		const tokenId689qpy = BigInt("1491")
		const tokenAddresspfcyeHH = accounts[0]
		const tokenIdmXOQxR8 = BigInt("1775")
		const tokenAddressq280eMk = accounts[3]
		await contractdLeIx7v.acceptOffer.call(tokenAddressF82L0Zq, tokenIdCZ3TBaf, {from: accounts[4]});
		const nullRPulLT = await contractdLeIx7v.getTokenKey.call(tokenAddressWDm6MM9, tokenIdGSnSmw7, {from: accounts[2]});
		await contractdLeIx7v.makeOffer.call(tokenAddresspfcyeHH, tokenId689qpy, buyerNoCQkzu, transactionValuepRVLVlk, {from: accounts[5]});
		const nulllW1UxQB = await contractdLeIx7v.getTokenKey.call(tokenAddressq280eMk, tokenIdmXOQxR8, {from: accounts[3]});

		await expect(contractdLeIx7v.acceptOffer.call(tokenAddressF82L0Zq, tokenIdCZ3TBaf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractPd1Yytg = await MolScribe.new({from: accounts[0]});
		const transactionValueckcIgXF = BigInt("1350")
		const buyerOdBnrIA = accounts[2]
		const tokenIdaVTd7Rt = BigInt("900")
		const tokenAddressgQqrORx = "0x0000000000000000000000000000000000000001"
		const startingRoyaltiesqK8rAMt = BigInt("36")
		const communityAddressBfWPs1E = accounts[2]
		const tokenIdAG94mvw = BigInt("1289")
		const tokenAddressLlCcl7m = accounts[0]
		await contractPd1Yytg.makeOffer.call(tokenAddressgQqrORx, tokenIdaVTd7Rt, buyerOdBnrIA, transactionValueckcIgXF, {from: accounts[4]});
		await contractPd1Yytg.scribeNFT.call(tokenAddressLlCcl7m, tokenIdAG94mvw, communityAddressBfWPs1E, startingRoyaltiesqK8rAMt, {from: accounts[4]});

		await expect(contractPd1Yytg.makeOffer.call(tokenAddressgQqrORx, tokenIdaVTd7Rt, buyerOdBnrIA, transactionValueckcIgXF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractmzIngoQ = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molBanklhu66o = accounts[1]
		const _molFeeUz6YDZa = BigInt("1557")
		const _molBankdDN4VX = accounts[3]
		const transactionValueBe8REuK = BigInt("656")
		const buyerfPZPEdx = accounts[3]
		const tokenIdffsAZp1 = BigInt("2034")
		const tokenAddressQwPGyf9 = "0x0000000000000000000000000000000000000001"
		const transactionValueg9OLDR = BigInt("666")
		const buyerGFNBlfd = accounts[0]
		const tokenIdiAEuKTR = BigInt("1071")
		const tokenAddressxvSc86m = accounts[5]
		const tokenIdcBk593 = BigInt("906")
		const tokenAddresshRDskk9 = accounts[2]
		await contractmzIngoQ.updateMolBank.call(_molBanklhu66o, {from: accounts[1]});
		await contractmzIngoQ.updateMolFees.call(_molFeeUz6YDZa, {from: accounts[1]});
		await contractmzIngoQ.updateMolBank.call(_molBankdDN4VX, {from: accounts[5]});
		await contractmzIngoQ.makeOffer.call(tokenAddressQwPGyf9, tokenIdffsAZp1, buyerfPZPEdx, transactionValueBe8REuK, {from: accounts[4]});
		await contractmzIngoQ.makeOffer.call(tokenAddressxvSc86m, tokenIdiAEuKTR, buyerGFNBlfd, transactionValueg9OLDR, {from: accounts[5]});
		const nullXj8iYju = await contractmzIngoQ.getTokenKey.call(tokenAddresshRDskk9, tokenIdcBk593, {from: accounts[5]});
	});

	it('test for MolScribe', async () => {
		const contractsqFH74 = await MolScribe.new({from: accounts[0]});
		const communityAddressTpEw2w1 = accounts[2]
		const tokenIdy1p4oIr = BigInt("1752")
		const tokenAddressQhULwSc = accounts[3]
		const startingRoyaltiesVBwLyHE = BigInt("36")
		const communityAddresswT4VN1 = accounts[1]
		const tokenIduEK8lcf = BigInt("1289")
		const tokenAddressdoXb2Hg = accounts[0]
		const _molBankCrUoOB3 = accounts[1]
		await contractsqFH74.giftLexART.call(tokenAddressQhULwSc, tokenIdy1p4oIr, communityAddressTpEw2w1, {from: accounts[1]});
		await contractsqFH74.scribeNFT.call(tokenAddressdoXb2Hg, tokenIduEK8lcf, communityAddresswT4VN1, startingRoyaltiesVBwLyHE, {from: accounts[4]});
		await contractsqFH74.updateMolBank.call(_molBankCrUoOB3, {from: accounts[4]});

		await expect(contractsqFH74.giftLexART.call(tokenAddressQhULwSc, tokenIdy1p4oIr, communityAddressTpEw2w1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})