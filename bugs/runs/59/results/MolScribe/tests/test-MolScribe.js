const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractf7inOSk = await MolScribe.new({from: accounts[3]});
		const _molFeeNhFSSK = BigInt("1036")
		const transactionValuedBgDjxT = BigInt("388")
		const buyeruv8Az3n = accounts[3]
		const tokenIdsImTm3p = BigInt("1256")
		const tokenAddressAOOG5In = "0x0000000000000000000000000000000000000001"
		const tokenIdmQDrYg = BigInt("1235")
		const tokenAddressmudE6kF = accounts[2]
		const _molBankSIetTE = accounts[2]
		await contractf7inOSk.updateMolFees.call(_molFeeNhFSSK, {from: accounts[4]});
		await contractf7inOSk.makeOffer.call(tokenAddressAOOG5In, tokenIdsImTm3p, buyeruv8Az3n, transactionValuedBgDjxT, {from: accounts[4]});
		const nullW4PgGB3 = await contractf7inOSk.getTokenKey.call(tokenAddressmudE6kF, tokenIdmQDrYg, {from: accounts[0]});
		await contractf7inOSk.updateMolBank.call(_molBankSIetTE, {from: accounts[0]});

		await expect(contractf7inOSk.updateMolFees.call(_molFeeNhFSSK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractLqpryap = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const transactionValueP8nlsQ5 = BigInt("771")
		const buyerRyz9VB = accounts[4]
		const tokenIdmtFggSQ = BigInt("1754")
		const tokenAddressNL7Q72m = accounts[3]
		const _molFeedCpJCRB = BigInt("411")
		const tokenIdI8eW8QY = BigInt("1242")
		const tokenAddressOy5gdet = accounts[3]
		const tokenIdBfcDwQu = BigInt("136")
		const tokenAddresssIaQUpw = accounts[2]
		const _molWLWCsDa = accounts[1]
		const _molBankAdEdsHC = accounts[4]
		await contractLqpryap.makeOffer.call(tokenAddressNL7Q72m, tokenIdmtFggSQ, buyerRyz9VB, transactionValueP8nlsQ5, {from: accounts[3]});
		await contractLqpryap.updateMolFees.call(_molFeedCpJCRB, {from: "0x0000000000000000000000000000000000000001"});
		await contractLqpryap.acceptOffer.call(tokenAddressOy5gdet, tokenIdI8eW8QY, {from: accounts[2]});
		await contractLqpryap.acceptOffer.call(tokenAddresssIaQUpw, tokenIdBfcDwQu, {from: accounts[0]});
		await contractLqpryap.updateMol.call(_molWLWCsDa, {from: accounts[5]});
		await contractLqpryap.updateMolBank.call(_molBankAdEdsHC, {from: accounts[1]});
	});

	it('test for MolScribe', async () => {
		const contractKxKs9Z = await MolScribe.new({from: accounts[1]});
		const tokenIdOlQ2UNr = BigInt("120")
		const tokenAddressVoivtEG = accounts[1]
		const _molBankmDjRWH6 = accounts[2]
		const startingRoyaltiesXmXBIu2 = BigInt("252")
		const communityAddressMVIWWUw = accounts[0]
		const tokenId5otVch = BigInt("571")
		const tokenAddressd1ke9o8 = accounts[3]
		const tokenIdhofN9Tu = BigInt("1668")
		const tokenAddresse75SbyH = accounts[1]
		const transactionValueyzsuoAZ = BigInt("1829")
		const buyerau6g0f = "0x0000000000000000000000000000000000000001"
		const tokenIdBr8Eyol = BigInt("1876")
		const tokenAddressSuMGTCN = accounts[2]
		const nullVqvSTep = await contractKxKs9Z.getTokenKey.call(tokenAddressVoivtEG, tokenIdOlQ2UNr, {from: accounts[0]});
		await contractKxKs9Z.updateMolBank.call(_molBankmDjRWH6, {from: accounts[4]});
		await contractKxKs9Z.scribeNFT.call(tokenAddressd1ke9o8, tokenId5otVch, communityAddressMVIWWUw, startingRoyaltiesXmXBIu2, {from: accounts[0]});
		const nullMvwaMdX = await contractKxKs9Z.getTokenKey.call(tokenAddresse75SbyH, tokenIdhofN9Tu, {from: accounts[0]});
		await contractKxKs9Z.makeOffer.call(tokenAddressSuMGTCN, tokenIdBr8Eyol, buyerau6g0f, transactionValueyzsuoAZ, {from: accounts[1]});

		assert.equal(nullVqvSTep, 0xcd6b55652ce3e0d00639d4866f03ce830eff8f640000000000000000000000000000000000000000000000000000000000000078)
		await expect(contractKxKs9Z.updateMolBank.call(_molBankmDjRWH6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractYloPts = await MolScribe.new({from: accounts[3]});
		const tokenIdo1mwwJi = BigInt("1520")
		const tokenAddressrHsGPwX = accounts[5]
		const _molBankvhEcRY = accounts[3]
		const tokenIdNfnz2Rp = BigInt("864")
		const tokenAddressDOKIY5u = accounts[1]
		const transactionValuehAI5jgo = BigInt("543")
		const buyerEEKcSho = "0x0000000000000000000000000000000000000001"
		const tokenIdXoV74Io = BigInt("400")
		const tokenAddressoTUx4l = accounts[5]
		await contractYloPts.acceptOffer.call(tokenAddressrHsGPwX, tokenIdo1mwwJi, {from: accounts[3]});
		await contractYloPts.updateMolBank.call(_molBankvhEcRY, {from: accounts[1]});
		await contractYloPts.acceptOffer.call(tokenAddressDOKIY5u, tokenIdNfnz2Rp, {from: accounts[3]});
		await contractYloPts.makeOffer.call(tokenAddressoTUx4l, tokenIdXoV74Io, buyerEEKcSho, transactionValuehAI5jgo, {from: accounts[2]});

		await expect(contractYloPts.acceptOffer.call(tokenAddressrHsGPwX, tokenIdo1mwwJi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractsYI9Yr = await MolScribe.new({from: accounts[4]});
		const tokenIdQeKKuKa = BigInt("1351")
		const tokenAddressJVVFM2c = accounts[4]
		const transactionValueez0YaYU = BigInt("1164")
		const buyerN16N7rF = "0x0000000000000000000000000000000000000001"
		const tokenIduowA0ba = BigInt("1616")
		const tokenAddressLhf4oR = accounts[0]
		const tokenIdaNUWJIM = BigInt("1761")
		const tokenAddressTqBahB8 = accounts[5]
		const nulla2aN55i = await contractsYI9Yr.getTokenKey.call(tokenAddressJVVFM2c, tokenIdQeKKuKa, {from: accounts[0]});
		await contractsYI9Yr.makeOffer.call(tokenAddressLhf4oR, tokenIduowA0ba, buyerN16N7rF, transactionValueez0YaYU, {from: accounts[4]});
		await contractsYI9Yr.acceptOffer.call(tokenAddressTqBahB8, tokenIdaNUWJIM, {from: accounts[1]});

		assert.equal(nulla2aN55i, 0x01115d32beade4f1f2c5b8919ffa636689f1fada0000000000000000000000000000000000000000000000000000000000000547)
		await expect(contractsYI9Yr.makeOffer.call(tokenAddressLhf4oR, tokenIduowA0ba, buyerN16N7rF, transactionValueez0YaYU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractYdPHtES = await MolScribe.new({from: accounts[2]});
		const tokenIdDFJwFNR = BigInt("266")
		const tokenAddressRAl02vB = "0x0000000000000000000000000000000000000001"
		const communityAddressf7yJtsP = accounts[0]
		const tokenIdGq5aavM = BigInt("1314")
		const tokenAddressWU9cNWd = accounts[3]
		const _molBank0xb1iY = accounts[3]
		const transactionValueFhQ0otb = BigInt("650")
		const buyerTeVlEFH = accounts[3]
		const tokenIdRwKLJJ1 = BigInt("876")
		const tokenAddressZPcl5ah = "0x0000000000000000000000000000000000000001"
		const _molBankypRW5oV = accounts[4]
		const startingRoyaltieseG8rtFd = BigInt("33")
		const communityAddresscrgcd0X = accounts[1]
		const tokenIdaJNrJeI = BigInt("977")
		const tokenAddressTY1vVv = accounts[3]
		const nulleIVVjXw = await contractYdPHtES.getTokenKey.call(tokenAddressRAl02vB, tokenIdDFJwFNR, {from: "0x0000000000000000000000000000000000000001"});
		await contractYdPHtES.giftLexART.call(tokenAddressWU9cNWd, tokenIdGq5aavM, communityAddressf7yJtsP, {from: accounts[5]});
		await contractYdPHtES.updateMolBank.call(_molBank0xb1iY, {from: "0x0000000000000000000000000000000000000001"});
		await contractYdPHtES.makeOffer.call(tokenAddressZPcl5ah, tokenIdRwKLJJ1, buyerTeVlEFH, transactionValueFhQ0otb, {from: accounts[3]});
		await contractYdPHtES.updateMolBank.call(_molBankypRW5oV, {from: accounts[5]});
		await contractYdPHtES.scribeNFT.call(tokenAddressTY1vVv, tokenIdaJNrJeI, communityAddresscrgcd0X, startingRoyaltieseG8rtFd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nulleIVVjXw, 0x0000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000010a)
		await expect(contractYdPHtES.giftLexART.call(tokenAddressWU9cNWd, tokenIdGq5aavM, communityAddressf7yJtsP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractIx2XL7 = await MolScribe.new({from: accounts[4]});
		const startingRoyaltiesel0HM2j = BigInt("108")
		const communityAddresslSXvm0y = accounts[3]
		const tokenIdFbWuVrY = BigInt("525")
		const tokenAddressecSr0sA = accounts[2]
		const transactionValueOQ2Qw7q = BigInt("1164")
		const buyerPJPF6Kq = "0x0000000000000000000000000000000000000001"
		const tokenIdM7jp4Ud = BigInt("221")
		const tokenAddressQNCHJOR = accounts[0]
		await contractIx2XL7.scribeNFT.call(tokenAddressecSr0sA, tokenIdFbWuVrY, communityAddresslSXvm0y, startingRoyaltiesel0HM2j, {from: accounts[0]});
		await contractIx2XL7.makeOffer.call(tokenAddressQNCHJOR, tokenIdM7jp4Ud, buyerPJPF6Kq, transactionValueOQ2Qw7q, {from: accounts[4]});

		await expect(contractIx2XL7.scribeNFT.call(tokenAddressecSr0sA, tokenIdFbWuVrY, communityAddresslSXvm0y, startingRoyaltiesel0HM2j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})