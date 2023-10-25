const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractP9G5qC8 = await MolScribe.new({from: accounts[1]});
		const tokenIdABMTSSF = BigInt("170")
		const tokenAddressFATqNY = accounts[4]
		const communityAddressFJl84FU = accounts[1]
		const tokenIdImLH47W = BigInt("196")
		const tokenAddressGrEZ4HT = accounts[3]
		const _molhtjnH5 = accounts[5]
		const startingRoyaltiesssiyvGM = BigInt("174")
		const communityAddressLotRMVe = accounts[2]
		const tokenIdsC16aGD = BigInt("27")
		const tokenAddress5Jxnsv = accounts[1]
		const nullfA16Kmn = await contractP9G5qC8.getTokenKey.call(tokenAddressFATqNY, tokenIdABMTSSF, {from: accounts[1]});
		await contractP9G5qC8.giftLexART.call(tokenAddressGrEZ4HT, tokenIdImLH47W, communityAddressFJl84FU, {from: accounts[4]});
		await contractP9G5qC8.updateMol.call(_molhtjnH5, {from: accounts[5]});
		await contractP9G5qC8.scribeNFT.call(tokenAddress5Jxnsv, tokenIdsC16aGD, communityAddressLotRMVe, startingRoyaltiesssiyvGM, {from: accounts[1]});

		assert.equal(nullfA16Kmn, 0xdc5529650a76d69f059c0b0176b29f448f7e69e900000000000000000000000000000000000000000000000000000000000000aa)
		await expect(contractP9G5qC8.giftLexART.call(tokenAddressGrEZ4HT, tokenIdImLH47W, communityAddressFJl84FU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractgVZU94o = await MolScribe.new({from: accounts[2]});
		const _molh8dAPa0 = "0x0000000000000000000000000000000000000001"
		const tokenIdai86pm5 = BigInt("770")
		const tokenAddressMBlVFS = accounts[2]
		const transactionValueBCcyyT = BigInt("1166")
		const buyeraFGdkfY = accounts[4]
		const tokenIdIFkVYRt = BigInt("1885")
		const tokenAddresslP1pT3b = accounts[3]
		const _molBankLmMYGv = accounts[4]
		const _molFeemqggWLA = BigInt("461")
		await contractgVZU94o.updateMol.call(_molh8dAPa0, {from: accounts[4]});
		await contractgVZU94o.acceptOffer.call(tokenAddressMBlVFS, tokenIdai86pm5, {from: accounts[3]});
		await contractgVZU94o.makeOffer.call(tokenAddresslP1pT3b, tokenIdIFkVYRt, buyeraFGdkfY, transactionValueBCcyyT, {from: accounts[3]});
		await contractgVZU94o.updateMolBank.call(_molBankLmMYGv, {from: accounts[1]});
		await contractgVZU94o.updateMolFees.call(_molFeemqggWLA, {from: accounts[4]});

		await expect(contractgVZU94o.updateMol.call(_molh8dAPa0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractfJC4AAa = await MolScribe.new({from: accounts[4]});
		const startingRoyaltieszfqzj13 = BigInt("242")
		const communityAddressCy9K3k = accounts[4]
		const tokenIdDbASl92 = BigInt("593")
		const tokenAddressfbb9TUY = accounts[2]
		const startingRoyaltiesrCFlPoX = BigInt("57")
		const communityAddressMEgvtQz = accounts[1]
		const tokenIdPYeP6CW = BigInt("595")
		const tokenAddresswn7t5Z = accounts[1]
		await contractfJC4AAa.scribeNFT.call(tokenAddressfbb9TUY, tokenIdDbASl92, communityAddressCy9K3k, startingRoyaltieszfqzj13, {from: accounts[0]});
		await contractfJC4AAa.scribeNFT.call(tokenAddresswn7t5Z, tokenIdPYeP6CW, communityAddressMEgvtQz, startingRoyaltiesrCFlPoX, {from: accounts[1]});

		await expect(contractfJC4AAa.scribeNFT.call(tokenAddressfbb9TUY, tokenIdDbASl92, communityAddressCy9K3k, startingRoyaltieszfqzj13, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractGhsNuuz = await MolScribe.new({from: accounts[3]});
		const tokenIdU37RR7c = BigInt("1361")
		const tokenAddressBq7sj63 = "0x0000000000000000000000000000000000000001"
		const tokenIdstnNF5R = BigInt("1861")
		const tokenAddressSfpHimT = accounts[4]
		const tokenIdsHuGhoL = BigInt("198")
		const tokenAddressK6yIInO = accounts[1]
		const _molFeeol2go1d = BigInt("152")
		const startingRoyaltiest0yeTKG = BigInt("38")
		const communityAddressj4EakAM = accounts[0]
		const tokenIdyVjTXSt = BigInt("598")
		const tokenAddressmJpwkhJ = accounts[0]
		await contractGhsNuuz.acceptOffer.call(tokenAddressBq7sj63, tokenIdU37RR7c, {from: accounts[4]});
		await contractGhsNuuz.acceptOffer.call(tokenAddressSfpHimT, tokenIdstnNF5R, {from: accounts[4]});
		await contractGhsNuuz.acceptOffer.call(tokenAddressK6yIInO, tokenIdsHuGhoL, {from: accounts[5]});
		await contractGhsNuuz.updateMolFees.call(_molFeeol2go1d, {from: accounts[1]});
		await contractGhsNuuz.scribeNFT.call(tokenAddressmJpwkhJ, tokenIdyVjTXSt, communityAddressj4EakAM, startingRoyaltiest0yeTKG, {from: accounts[1]});

		await expect(contractGhsNuuz.acceptOffer.call(tokenAddressBq7sj63, tokenIdU37RR7c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractWBxab3m = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molSN5EB7f = accounts[2]
		const transactionValuekGyAcRn = BigInt("1796")
		const buyervctVwub = "0x0000000000000000000000000000000000000001"
		const tokenIdAPH39as = BigInt("1225")
		const tokenAddresscEwInM = accounts[0]
		const tokenIdqwhKebX = BigInt("1")
		const tokenAddressxalY1kR = accounts[5]
		const tokenIdXaqNujl = BigInt("367")
		const tokenAddressW74A2BW = accounts[4]
		const startingRoyaltiesKIS3tMC = BigInt("157")
		const communityAddressj740rAZ = accounts[2]
		const tokenIdDzfjVaA = BigInt("1174")
		const tokenAddressmrAM7oK = accounts[4]
		const _molfop69a6 = accounts[1]
		await contractWBxab3m.updateMol.call(_molSN5EB7f, {from: accounts[5]});
		await contractWBxab3m.makeOffer.call(tokenAddresscEwInM, tokenIdAPH39as, buyervctVwub, transactionValuekGyAcRn, {from: accounts[0]});
		await contractWBxab3m.acceptOffer.call(tokenAddressxalY1kR, tokenIdqwhKebX, {from: accounts[2]});
		const nullHKRaIqs = await contractWBxab3m.getTokenKey.call(tokenAddressW74A2BW, tokenIdXaqNujl, {from: accounts[2]});
		await contractWBxab3m.scribeNFT.call(tokenAddressmrAM7oK, tokenIdDzfjVaA, communityAddressj740rAZ, startingRoyaltiesKIS3tMC, {from: accounts[2]});
		await contractWBxab3m.updateMol.call(_molfop69a6, {from: accounts[5]});
	});

	it('test for MolScribe', async () => {
		const contractYEZrguO = await MolScribe.new({from: accounts[0]});
		const transactionValuecHmh0rT = BigInt("133")
		const buyerFjAyRWt = accounts[4]
		const tokenIdo8RjlOg = BigInt("1794")
		const tokenAddressGKIiZsM = "0x0000000000000000000000000000000000000001"
		const tokenIdJRWH6nu = BigInt("121")
		const tokenAddressfH1RxLk = accounts[1]
		const _molBankJWCRfI2 = accounts[3]
		const _molFeeNUJCrHY = BigInt("1584")
		const transactionValuey9fsdNW = BigInt("1418")
		const buyerJp39INk = accounts[2]
		const tokenIdI0A8MnZ = BigInt("707")
		const tokenAddresslmORo4X = accounts[0]
		await contractYEZrguO.makeOffer.call(tokenAddressGKIiZsM, tokenIdo8RjlOg, buyerFjAyRWt, transactionValuecHmh0rT, {from: accounts[5]});
		await contractYEZrguO.acceptOffer.call(tokenAddressfH1RxLk, tokenIdJRWH6nu, {from: accounts[5]});
		await contractYEZrguO.updateMolBank.call(_molBankJWCRfI2, {from: accounts[0]});
		await contractYEZrguO.updateMolFees.call(_molFeeNUJCrHY, {from: accounts[4]});
		await contractYEZrguO.makeOffer.call(tokenAddresslmORo4X, tokenIdI0A8MnZ, buyerJp39INk, transactionValuey9fsdNW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractYEZrguO.makeOffer.call(tokenAddressGKIiZsM, tokenIdo8RjlOg, buyerFjAyRWt, transactionValuecHmh0rT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractdU2FKgz = await MolScribe.new({from: accounts[1]});
		const tokenIdQykGqkB = BigInt("170")
		const tokenAddressIiKQy0K = accounts[4]
		const tokenIdf6KT3jo = BigInt("376")
		const tokenAddress8TkimI = accounts[1]
		const communityAddressL0Lls3x = accounts[1]
		const tokenIdiRKvu3V = BigInt("196")
		const tokenAddressfQLUn27 = accounts[3]
		const startingRoyaltiesiHefDpU = BigInt("174")
		const communityAddresstpA2buI = accounts[2]
		const tokenIdEboI9hY = BigInt("27")
		const tokenAddressoS8n1az = accounts[1]
		const nullvvocUCm = await contractdU2FKgz.getTokenKey.call(tokenAddressIiKQy0K, tokenIdQykGqkB, {from: accounts[1]});
		await contractdU2FKgz.acceptOffer.call(tokenAddress8TkimI, tokenIdf6KT3jo, {from: "0x0000000000000000000000000000000000000001"});
		await contractdU2FKgz.giftLexART.call(tokenAddressfQLUn27, tokenIdiRKvu3V, communityAddressL0Lls3x, {from: accounts[4]});
		await contractdU2FKgz.scribeNFT.call(tokenAddressoS8n1az, tokenIdEboI9hY, communityAddresstpA2buI, startingRoyaltiesiHefDpU, {from: accounts[1]});

		assert.equal(nullvvocUCm, 0xdc5529650a76d69f059c0b0176b29f448f7e69e900000000000000000000000000000000000000000000000000000000000000aa)
		await expect(contractdU2FKgz.acceptOffer.call(tokenAddress8TkimI, tokenIdf6KT3jo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})