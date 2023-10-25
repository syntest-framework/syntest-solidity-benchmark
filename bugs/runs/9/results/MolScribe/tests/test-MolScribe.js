const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractNL26dmn = await MolScribe.new({from: accounts[3]});
		const communityAddressMYLzy9u = accounts[1]
		const tokenIdeNRecsR = BigInt("736")
		const tokenAddressQb5GkYq = accounts[3]
		const _molBankswj0X4J = accounts[2]
		await contractNL26dmn.giftLexART.call(tokenAddressQb5GkYq, tokenIdeNRecsR, communityAddressMYLzy9u, {from: accounts[2]});
		await contractNL26dmn.updateMolBank.call(_molBankswj0X4J, {from: accounts[4]});

		await expect(contractNL26dmn.giftLexART.call(tokenAddressQb5GkYq, tokenIdeNRecsR, communityAddressMYLzy9u, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractGtGOtQi = await MolScribe.new({from: accounts[0]});
		const transactionValueLcnzQiM = BigInt("1192")
		const buyerQ9b8ra2 = accounts[1]
		const tokenIds0KhUR6 = BigInt("2046")
		const tokenAddresskmBDdrC = accounts[3]
		const communityAddressmGvPTtO = accounts[3]
		const tokenIdqrEOSMe = BigInt("1033")
		const tokenAddressoOUMeEj = accounts[2]
		await contractGtGOtQi.makeOffer.call(tokenAddresskmBDdrC, tokenIds0KhUR6, buyerQ9b8ra2, transactionValueLcnzQiM, {from: accounts[3]});
		await contractGtGOtQi.giftLexART.call(tokenAddressoOUMeEj, tokenIdqrEOSMe, communityAddressmGvPTtO, {from: accounts[3]});

		await expect(contractGtGOtQi.makeOffer.call(tokenAddresskmBDdrC, tokenIds0KhUR6, buyerQ9b8ra2, transactionValueLcnzQiM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract3V8vMr = await MolScribe.new({from: accounts[2]});
		const _molFeepTdE7XE = BigInt("1046")
		const _molFeehGcNaIA = BigInt("625")
		const transactionValueKPil7MG = BigInt("1732")
		const buyeruZSLR1 = accounts[3]
		const tokenIdXUpRguS = BigInt("2040")
		const tokenAddressXGoxYxc = accounts[2]
		const _molBankNL84NyV = accounts[2]
		await contract3V8vMr.updateMolFees.call(_molFeepTdE7XE, {from: accounts[2]});
		await contract3V8vMr.updateMolFees.call(_molFeehGcNaIA, {from: accounts[0]});
		await contract3V8vMr.makeOffer.call(tokenAddressXGoxYxc, tokenIdXUpRguS, buyeruZSLR1, transactionValueKPil7MG, {from: "0x0000000000000000000000000000000000000001"});
		await contract3V8vMr.updateMolBank.call(_molBankNL84NyV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contract3V8vMr.updateMolFees.call(_molFeepTdE7XE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractNV6TFdj = await MolScribe.new({from: accounts[0]});
		const startingRoyaltiesJ3Yb7pP = BigInt("151")
		const communityAddressGGyDcA0 = accounts[1]
		const tokenIdXg3X1jA = BigInt("1386")
		const tokenAddressMOH3JXg = accounts[4]
		const startingRoyaltiesSNyyRD = BigInt("153")
		const communityAddressLnxBROc = accounts[4]
		const tokenIdGETbuPE = BigInt("1925")
		const tokenAddressdVt3cgz = accounts[1]
		const communityAddressNE6OYuV = accounts[1]
		const tokenIdYfrrRQH = BigInt("81")
		const tokenAddressV5y1A9 = accounts[3]
		const tokenIdvsZDAsj = BigInt("71")
		const tokenAddressjI5r96W = "0x0000000000000000000000000000000000000001"
		await contractNV6TFdj.scribeNFT.call(tokenAddressMOH3JXg, tokenIdXg3X1jA, communityAddressGGyDcA0, startingRoyaltiesJ3Yb7pP, {from: accounts[1]});
		await contractNV6TFdj.scribeNFT.call(tokenAddressdVt3cgz, tokenIdGETbuPE, communityAddressLnxBROc, startingRoyaltiesSNyyRD, {from: "0x0000000000000000000000000000000000000001"});
		await contractNV6TFdj.giftLexART.call(tokenAddressV5y1A9, tokenIdYfrrRQH, communityAddressNE6OYuV, {from: accounts[0]});
		const nullsVroDcN = await contractNV6TFdj.getTokenKey.call(tokenAddressjI5r96W, tokenIdvsZDAsj, {from: accounts[5]});

		await expect(contractNV6TFdj.scribeNFT.call(tokenAddressMOH3JXg, tokenIdXg3X1jA, communityAddressGGyDcA0, startingRoyaltiesJ3Yb7pP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractGWdtBz = await MolScribe.new({from: accounts[0]});
		const tokenIdkncrWJi = BigInt("1364")
		const tokenAddressPS1u9sO = accounts[1]
		const startingRoyaltiesqYK09FT = BigInt("199")
		const communityAddressvuzLQIB = accounts[2]
		const tokenIdWJDcPSO = BigInt("1337")
		const tokenAddressXgiexxq = accounts[3]
		const tokenIdcSXGnv8 = BigInt("1510")
		const tokenAddresswgXDlcA = accounts[1]
		await contractGWdtBz.acceptOffer.call(tokenAddressPS1u9sO, tokenIdkncrWJi, {from: accounts[2]});
		await contractGWdtBz.scribeNFT.call(tokenAddressXgiexxq, tokenIdWJDcPSO, communityAddressvuzLQIB, startingRoyaltiesqYK09FT, {from: accounts[4]});
		await contractGWdtBz.acceptOffer.call(tokenAddresswgXDlcA, tokenIdcSXGnv8, {from: accounts[0]});

		await expect(contractGWdtBz.acceptOffer.call(tokenAddressPS1u9sO, tokenIdkncrWJi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})