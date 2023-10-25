const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractFhJxUG8 = await MolScribe.new({from: accounts[0]});
		const _molBanknwpvLKK = accounts[4]
		const tokenIdpidgudD = BigInt("1273")
		const tokenAddressYtLlnDJ = "0x0000000000000000000000000000000000000001"
		const communityAddressUhqgadq = accounts[1]
		const tokenIdVZc06B = BigInt("664")
		const tokenAddressl5KPTfN = accounts[0]
		const tokenIdgyAXA37 = BigInt("1839")
		const tokenAddressshdSUXE = accounts[2]
		await contractFhJxUG8.updateMolBank.call(_molBanknwpvLKK, {from: accounts[2]});
		const nullirdYZPH = await contractFhJxUG8.getTokenKey.call(tokenAddressYtLlnDJ, tokenIdpidgudD, {from: accounts[0]});
		await contractFhJxUG8.giftLexART.call(tokenAddressl5KPTfN, tokenIdVZc06B, communityAddressUhqgadq, {from: accounts[3]});
		await contractFhJxUG8.acceptOffer.call(tokenAddressshdSUXE, tokenIdgyAXA37, {from: accounts[2]});

		await expect(contractFhJxUG8.updateMolBank.call(_molBanknwpvLKK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractWEdBeFJ = await MolScribe.new({from: accounts[2]});
		const tokenIdp5ev4m3 = BigInt("961")
		const tokenAddressqgZrEs = accounts[0]
		const startingRoyaltiesb1Foxz7 = BigInt("65")
		const communityAddressBXmT3o4 = accounts[0]
		const tokenId3puClR = BigInt("1494")
		const tokenAddressAWxy3VN = accounts[4]
		const _molBankJmIc14u = accounts[0]
		const transactionValuegfA2RSZ = BigInt("1836")
		const buyerttyiuJf = accounts[3]
		const tokenIdxYqjRZv = BigInt("1218")
		const tokenAddressB3TIs4M = accounts[2]
		await contractWEdBeFJ.acceptOffer.call(tokenAddressqgZrEs, tokenIdp5ev4m3, {from: accounts[3]});
		await contractWEdBeFJ.scribeNFT.call(tokenAddressAWxy3VN, tokenId3puClR, communityAddressBXmT3o4, startingRoyaltiesb1Foxz7, {from: accounts[2]});
		await contractWEdBeFJ.updateMolBank.call(_molBankJmIc14u, {from: accounts[0]});
		await contractWEdBeFJ.makeOffer.call(tokenAddressB3TIs4M, tokenIdxYqjRZv, buyerttyiuJf, transactionValuegfA2RSZ, {from: accounts[3]});

		await expect(contractWEdBeFJ.acceptOffer.call(tokenAddressqgZrEs, tokenIdp5ev4m3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractpZMj5Hm = await MolScribe.new({from: accounts[5]});
		const startingRoyaltiesMJwEj4 = BigInt("200")
		const communityAddressGzILY5K = accounts[3]
		const tokenIdWnZQCEK = BigInt("255")
		const tokenAddressdAb6Zl = accounts[0]
		const _molRjM2VWT = "0x0000000000000000000000000000000000000001"
		const tokenIda9UMzyQ = BigInt("1044")
		const tokenAddressNuaN7mV = accounts[1]
		const startingRoyaltiesd92KCk = BigInt("198")
		const communityAddressuF5zezQ = accounts[3]
		const tokenIddNPx8rn = BigInt("786")
		const tokenAddresslHuw762 = accounts[4]
		await contractpZMj5Hm.scribeNFT.call(tokenAddressdAb6Zl, tokenIdWnZQCEK, communityAddressGzILY5K, startingRoyaltiesMJwEj4, {from: "0x0000000000000000000000000000000000000001"});
		await contractpZMj5Hm.updateMol.call(_molRjM2VWT, {from: accounts[2]});
		const nullebBvQWf = await contractpZMj5Hm.getTokenKey.call(tokenAddressNuaN7mV, tokenIda9UMzyQ, {from: accounts[1]});
		await contractpZMj5Hm.scribeNFT.call(tokenAddresslHuw762, tokenIddNPx8rn, communityAddressuF5zezQ, startingRoyaltiesd92KCk, {from: accounts[3]});

		await expect(contractpZMj5Hm.scribeNFT.call(tokenAddressdAb6Zl, tokenIdWnZQCEK, communityAddressGzILY5K, startingRoyaltiesMJwEj4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracti5xDgll = await MolScribe.new({from: accounts[0]});
		const transactionValuelDl5zRi = BigInt("762")
		const buyervaYuqnl = "0x0000000000000000000000000000000000000001"
		const tokenIdgtRw9O1 = BigInt("246")
		const tokenAddresswAK50jP = "0x0000000000000000000000000000000000000001"
		const _molFeerpLk3lV = BigInt("1716")
		const _molFeeifpBJ7J = BigInt("1057")
		await contracti5xDgll.makeOffer.call(tokenAddresswAK50jP, tokenIdgtRw9O1, buyervaYuqnl, transactionValuelDl5zRi, {from: accounts[3]});
		await contracti5xDgll.updateMolFees.call(_molFeerpLk3lV, {from: "0x0000000000000000000000000000000000000001"});
		await contracti5xDgll.updateMolFees.call(_molFeeifpBJ7J, {from: accounts[5]});

		await expect(contracti5xDgll.makeOffer.call(tokenAddresswAK50jP, tokenIdgtRw9O1, buyervaYuqnl, transactionValuelDl5zRi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractoPWDyCV = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molFeeIsaApCF = BigInt("567")
		const _molBankktcbdtx = accounts[1]
		const tokenIduHQg02A = BigInt("1620")
		const tokenAddressSqZgKut = accounts[5]
		await contractoPWDyCV.updateMolFees.call(_molFeeIsaApCF, {from: accounts[3]});
		await contractoPWDyCV.updateMolBank.call(_molBankktcbdtx, {from: accounts[2]});
		const nullIST4hJA = await contractoPWDyCV.getTokenKey.call(tokenAddressSqZgKut, tokenIduHQg02A, {from: accounts[4]});
	});

	it('test for MolScribe', async () => {
		const contractj0mwFIo = await MolScribe.new({from: accounts[4]});
		const tokenId3D0ncu = BigInt("987")
		const tokenAddresssZO7bWr = accounts[2]
		const communityAddressL5iqa2D = accounts[0]
		const tokenIdaNtLbwC = BigInt("1586")
		const tokenAddressmbB6O2g = accounts[4]
		const _molFeeWRTr9v = BigInt("911")
		const nullPCEhPOr = await contractj0mwFIo.getTokenKey.call(tokenAddresssZO7bWr, tokenId3D0ncu, {from: accounts[0]});
		await contractj0mwFIo.giftLexART.call(tokenAddressmbB6O2g, tokenIdaNtLbwC, communityAddressL5iqa2D, {from: accounts[5]});
		await contractj0mwFIo.updateMolFees.call(_molFeeWRTr9v, {from: accounts[2]});

		await expect(contractj0mwFIo.getTokenKey.call(tokenAddresssZO7bWr, tokenId3D0ncu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractwoOynhm = await MolScribe.new({from: accounts[0]});
		const communityAddressQN6MeGo = accounts[3]
		const tokenIdDx6mpB5 = BigInt("199")
		const tokenAddressvx8nGf7 = "0x0000000000000000000000000000000000000001"
		const transactionValueuufKaca = BigInt("1623")
		const buyerRkAzD48 = accounts[0]
		const tokenIdGxjSHm3 = BigInt("1627")
		const tokenAddressyAzptkE = accounts[5]
		await contractwoOynhm.giftLexART.call(tokenAddressvx8nGf7, tokenIdDx6mpB5, communityAddressQN6MeGo, {from: accounts[0]});
		await contractwoOynhm.makeOffer.call(tokenAddressyAzptkE, tokenIdGxjSHm3, buyerRkAzD48, transactionValueuufKaca, {from: accounts[4]});

		await expect(contractwoOynhm.giftLexART.call(tokenAddressvx8nGf7, tokenIdDx6mpB5, communityAddressQN6MeGo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})