const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractZKgFUv0 = await MolScribe.new({from: accounts[4]});
		const transactionValueOZRJQkd = BigInt("817")
		const buyer7mdu9C = accounts[4]
		const tokenIdkNSXf6t = BigInt("811")
		const tokenAddressYlk4ja4 = accounts[0]
		const _molaLteLuS = "0x0000000000000000000000000000000000000001"
		const _mol8UJ6SK = accounts[1]
		const tokenIdkhbf3on = BigInt("270")
		const tokenAddressoARdSC9 = "0x0000000000000000000000000000000000000001"
		await contractZKgFUv0.makeOffer.call(tokenAddressYlk4ja4, tokenIdkNSXf6t, buyer7mdu9C, transactionValueOZRJQkd, {from: accounts[3]});
		await contractZKgFUv0.updateMol.call(_molaLteLuS, {from: accounts[2]});
		await contractZKgFUv0.updateMol.call(_mol8UJ6SK, {from: accounts[3]});
		await contractZKgFUv0.acceptOffer.call(tokenAddressoARdSC9, tokenIdkhbf3on, {from: accounts[5]});

		await expect(contractZKgFUv0.makeOffer.call(tokenAddressYlk4ja4, tokenIdkNSXf6t, buyer7mdu9C, transactionValueOZRJQkd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractfusohE = await MolScribe.new({from: accounts[2]});
		const tokenIdOzdVkEQ = BigInt("806")
		const tokenAddressGQL82r = accounts[5]
		const _molBankB7hYOTK = accounts[1]
		const transactionValueVAFlLQS = BigInt("1335")
		const buyerN9yi70u = accounts[5]
		const tokenIdcYUnToR = BigInt("256")
		const tokenAddressOKCUZQ = accounts[0]
		const tokenIdoAqISUs = BigInt("2014")
		const tokenAddressG0wasyB = accounts[2]
		await contractfusohE.acceptOffer.call(tokenAddressGQL82r, tokenIdOzdVkEQ, {from: accounts[0]});
		await contractfusohE.updateMolBank.call(_molBankB7hYOTK, {from: accounts[4]});
		await contractfusohE.makeOffer.call(tokenAddressOKCUZQ, tokenIdcYUnToR, buyerN9yi70u, transactionValueVAFlLQS, {from: accounts[1]});
		await contractfusohE.acceptOffer.call(tokenAddressG0wasyB, tokenIdoAqISUs, {from: accounts[0]});

		await expect(contractfusohE.acceptOffer.call(tokenAddressGQL82r, tokenIdOzdVkEQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractRlIDHb5 = await MolScribe.new({from: accounts[3]});
		const communityAddressgYzW9i9 = accounts[1]
		const tokenIdFOcYgrT = BigInt("1251")
		const tokenAddressi92YCJf = accounts[0]
		const _molFeeOhZwNhU = BigInt("212")
		const tokenIdWY4x2P5 = BigInt("1953")
		const tokenAddressPGznlmd = accounts[1]
		await contractRlIDHb5.giftLexART.call(tokenAddressi92YCJf, tokenIdFOcYgrT, communityAddressgYzW9i9, {from: "0x0000000000000000000000000000000000000001"});
		await contractRlIDHb5.updateMolFees.call(_molFeeOhZwNhU, {from: accounts[4]});
		await contractRlIDHb5.acceptOffer.call(tokenAddressPGznlmd, tokenIdWY4x2P5, {from: accounts[0]});

		await expect(contractRlIDHb5.giftLexART.call(tokenAddressi92YCJf, tokenIdFOcYgrT, communityAddressgYzW9i9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractBDP2ARe = await MolScribe.new({from: accounts[4]});
		const _molXnd82CV = accounts[1]
		const _molFeeq7SSqOK = BigInt("1725")
		const startingRoyaltiesclsienc = BigInt("240")
		const communityAddresslUh8qPm = accounts[4]
		const tokenIdbZaBi8I = BigInt("27")
		const tokenAddressq1mEmnm = accounts[5]
		const tokenIdByTsGYU = BigInt("1573")
		const tokenAddressDTp05jO = accounts[4]
		const tokenIdvqtsJDD = BigInt("834")
		const tokenAddress8LIcb6 = accounts[5]
		await contractBDP2ARe.updateMol.call(_molXnd82CV, {from: accounts[3]});
		await contractBDP2ARe.updateMolFees.call(_molFeeq7SSqOK, {from: accounts[2]});
		await contractBDP2ARe.scribeNFT.call(tokenAddressq1mEmnm, tokenIdbZaBi8I, communityAddresslUh8qPm, startingRoyaltiesclsienc, {from: accounts[1]});
		const nullv6Zrgfa = await contractBDP2ARe.getTokenKey.call(tokenAddressDTp05jO, tokenIdByTsGYU, {from: accounts[1]});
		const nullCf1fbhd = await contractBDP2ARe.getTokenKey.call(tokenAddress8LIcb6, tokenIdvqtsJDD, {from: accounts[4]});

		await expect(contractBDP2ARe.updateMol.call(_molXnd82CV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractShgLVtD = await MolScribe.new({from: accounts[3]});
		const startingRoyalties7QyfLB = BigInt("123")
		const communityAddressBIXPXkj = accounts[4]
		const tokenIdjdUGsoh = BigInt("1730")
		const tokenAddressaDD65oA = accounts[3]
		const transactionValueOG27KKK = BigInt("1164")
		const buyerTkclfuG = accounts[2]
		const tokenIdQfoJl4O = BigInt("847")
		const tokenAddressMMJJrJk = accounts[4]
		const tokenIdm9cA7Y5 = BigInt("2019")
		const tokenAddressI22vO1C = accounts[4]
		await contractShgLVtD.scribeNFT.call(tokenAddressaDD65oA, tokenIdjdUGsoh, communityAddressBIXPXkj, startingRoyalties7QyfLB, {from: accounts[3]});
		await contractShgLVtD.makeOffer.call(tokenAddressMMJJrJk, tokenIdQfoJl4O, buyerTkclfuG, transactionValueOG27KKK, {from: accounts[3]});
		await contractShgLVtD.acceptOffer.call(tokenAddressI22vO1C, tokenIdm9cA7Y5, {from: accounts[0]});

		await expect(contractShgLVtD.scribeNFT.call(tokenAddressaDD65oA, tokenIdjdUGsoh, communityAddressBIXPXkj, startingRoyalties7QyfLB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractca9Jh4 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molFeevCfTmmW = BigInt("1838")
		const transactionValueR0oG8iz = BigInt("1905")
		const buyerqwBJoOV = accounts[0]
		const tokenIdGCYoUTX = BigInt("1292")
		const tokenAddressF18iAxu = accounts[0]
		const tokenIdwESYa0J = BigInt("1921")
		const tokenAddressdwGgBnq = "0x0000000000000000000000000000000000000001"
		const startingRoyaltiesGvBkYtC = BigInt("111")
		const communityAddresse1n7uhd = accounts[0]
		const tokenIdPgKZuvT = BigInt("1533")
		const tokenAddressCHz9QH7 = accounts[0]
		const _molBankdna7sSN = "0x0000000000000000000000000000000000000001"
		const tokenIdpjg0meD = BigInt("1537")
		const tokenAddresskAc0P9Q = accounts[4]
		await contractca9Jh4.updateMolFees.call(_molFeevCfTmmW, {from: accounts[2]});
		await contractca9Jh4.makeOffer.call(tokenAddressF18iAxu, tokenIdGCYoUTX, buyerqwBJoOV, transactionValueR0oG8iz, {from: accounts[0]});
		await contractca9Jh4.acceptOffer.call(tokenAddressdwGgBnq, tokenIdwESYa0J, {from: accounts[3]});
		await contractca9Jh4.scribeNFT.call(tokenAddressCHz9QH7, tokenIdPgKZuvT, communityAddresse1n7uhd, startingRoyaltiesGvBkYtC, {from: accounts[3]});
		await contractca9Jh4.updateMolBank.call(_molBankdna7sSN, {from: accounts[2]});
		await contractca9Jh4.acceptOffer.call(tokenAddresskAc0P9Q, tokenIdpjg0meD, {from: accounts[5]});
	});
})