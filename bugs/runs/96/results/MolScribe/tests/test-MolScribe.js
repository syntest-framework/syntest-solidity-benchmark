const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractl1ZzPS9 = await MolScribe.new({from: accounts[1]});
		const transactionValueih9gcPk = BigInt("777")
		const buyeroqC4jAW = accounts[2]
		const tokenIdSGqeMy = BigInt("120")
		const tokenAddresshJv7s7a = accounts[2]
		const tokenIdJmzpkzo = BigInt("1996")
		const tokenAddressNZ7BMaG = accounts[4]
		const _molBankUCKOcFP = accounts[2]
		const _molFeehErKdnA = BigInt("1848")
		await contractl1ZzPS9.makeOffer.call(tokenAddresshJv7s7a, tokenIdSGqeMy, buyeroqC4jAW, transactionValueih9gcPk, {from: accounts[1]});
		await contractl1ZzPS9.acceptOffer.call(tokenAddressNZ7BMaG, tokenIdJmzpkzo, {from: accounts[1]});
		await contractl1ZzPS9.updateMolBank.call(_molBankUCKOcFP, {from: accounts[4]});
		await contractl1ZzPS9.updateMolFees.call(_molFeehErKdnA, {from: accounts[5]});

		await expect(contractl1ZzPS9.makeOffer.call(tokenAddresshJv7s7a, tokenIdSGqeMy, buyeroqC4jAW, transactionValueih9gcPk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractAiKuw25 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molBankA7QEZoG = accounts[1]
		const _molFeesOeCCwh = BigInt("1231")
		const startingRoyaltiesD7JV0kt = BigInt("104")
		const communityAddresswg2Effp = accounts[3]
		const tokenIdGjlTnhd = BigInt("505")
		const tokenAddresse9uYYi7 = accounts[1]
		const transactionValuenOzjO3k = BigInt("2005")
		const buyerjjQUH4k = accounts[3]
		const tokenIdx1jnAS = BigInt("752")
		const tokenAddressFThpEsv = accounts[2]
		await contractAiKuw25.updateMolBank.call(_molBankA7QEZoG, {from: accounts[0]});
		await contractAiKuw25.updateMolFees.call(_molFeesOeCCwh, {from: accounts[2]});
		await contractAiKuw25.scribeNFT.call(tokenAddresse9uYYi7, tokenIdGjlTnhd, communityAddresswg2Effp, startingRoyaltiesD7JV0kt, {from: accounts[4]});
		await contractAiKuw25.makeOffer.call(tokenAddressFThpEsv, tokenIdx1jnAS, buyerjjQUH4k, transactionValuenOzjO3k, {from: accounts[2]});
	});

	it('test for MolScribe', async () => {
		const contractRENAh8Z = await MolScribe.new({from: accounts[4]});
		const _molFeecAkiLEZ = BigInt("879")
		const _molFeeRqxFVt = BigInt("1263")
		const _molFeeGCrdEsg = BigInt("677")
		const transactionValuefyp06TA = BigInt("1285")
		const buyerT2WeyZ = accounts[2]
		const tokenIdoMtFN3c = BigInt("1479")
		const tokenAddresspvb6is = accounts[3]
		const _molBankCBEbd5j = accounts[1]
		await contractRENAh8Z.updateMolFees.call(_molFeecAkiLEZ, {from: accounts[1]});
		await contractRENAh8Z.updateMolFees.call(_molFeeRqxFVt, {from: accounts[2]});
		await contractRENAh8Z.updateMolFees.call(_molFeeGCrdEsg, {from: accounts[4]});
		await contractRENAh8Z.makeOffer.call(tokenAddresspvb6is, tokenIdoMtFN3c, buyerT2WeyZ, transactionValuefyp06TA, {from: accounts[1]});
		await contractRENAh8Z.updateMolBank.call(_molBankCBEbd5j, {from: accounts[2]});

		await expect(contractRENAh8Z.updateMolFees.call(_molFeecAkiLEZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractX5Wtj8l = await MolScribe.new({from: accounts[3]});
		const tokenIde2VSbl9 = BigInt("335")
		const tokenAddressnEmNjP = accounts[4]
		const tokenIdMxieNRh = BigInt("1335")
		const tokenAddress4HOjEH = accounts[0]
		const communityAddressRfbfZMs = accounts[1]
		const tokenIdtmZSQq2 = BigInt("1106")
		const tokenAddressQPnfkKx = accounts[5]
		const startingRoyaltiescH6bkQ = BigInt("80")
		const communityAddressXwHmQJx = accounts[0]
		const tokenIdye8zeNd = BigInt("1668")
		const tokenAddressGAFiJGR = "0x0000000000000000000000000000000000000001"
		await contractX5Wtj8l.acceptOffer.call(tokenAddressnEmNjP, tokenIde2VSbl9, {from: accounts[4]});
		const nullY3jitBx = await contractX5Wtj8l.getTokenKey.call(tokenAddress4HOjEH, tokenIdMxieNRh, {from: accounts[2]});
		await contractX5Wtj8l.giftLexART.call(tokenAddressQPnfkKx, tokenIdtmZSQq2, communityAddressRfbfZMs, {from: accounts[1]});
		await contractX5Wtj8l.scribeNFT.call(tokenAddressGAFiJGR, tokenIdye8zeNd, communityAddressXwHmQJx, startingRoyaltiescH6bkQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractX5Wtj8l.acceptOffer.call(tokenAddressnEmNjP, tokenIde2VSbl9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractkeMuZd0 = await MolScribe.new({from: accounts[5]});
		const startingRoyaltiesb41gEQ9 = BigInt("63")
		const communityAddressmbFkwvy = accounts[4]
		const tokenIdIVGadIU = BigInt("1232")
		const tokenAddressm0YxhyY = accounts[3]
		const startingRoyaltiesKwqccia = BigInt("73")
		const communityAddressWYH9gdV = accounts[0]
		const tokenIdDuTSCdk = BigInt("1676")
		const tokenAddressRlDGu6Y = accounts[4]
		const communityAddressMgBfAzj = accounts[1]
		const tokenIdZqhr22 = BigInt("1244")
		const tokenAddressjhW7kvE = accounts[2]
		const _molpQxazD = accounts[2]
		const tokenIdNW3X0Os = BigInt("1377")
		const tokenAddressEkXfLIS = accounts[3]
		const tokenIdsHLGBuT = BigInt("1991")
		const tokenAddressiFAEcBh = accounts[4]
		await contractkeMuZd0.scribeNFT.call(tokenAddressm0YxhyY, tokenIdIVGadIU, communityAddressmbFkwvy, startingRoyaltiesb41gEQ9, {from: "0x0000000000000000000000000000000000000001"});
		await contractkeMuZd0.scribeNFT.call(tokenAddressRlDGu6Y, tokenIdDuTSCdk, communityAddressWYH9gdV, startingRoyaltiesKwqccia, {from: "0x0000000000000000000000000000000000000001"});
		await contractkeMuZd0.giftLexART.call(tokenAddressjhW7kvE, tokenIdZqhr22, communityAddressMgBfAzj, {from: "0x0000000000000000000000000000000000000001"});
		await contractkeMuZd0.updateMol.call(_molpQxazD, {from: accounts[1]});
		const null5PpddR = await contractkeMuZd0.getTokenKey.call(tokenAddressEkXfLIS, tokenIdNW3X0Os, {from: accounts[4]});
		const nullhWinwrf = await contractkeMuZd0.getTokenKey.call(tokenAddressiFAEcBh, tokenIdsHLGBuT, {from: accounts[4]});

		await expect(contractkeMuZd0.scribeNFT.call(tokenAddressm0YxhyY, tokenIdIVGadIU, communityAddressmbFkwvy, startingRoyaltiesb41gEQ9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractJR0tRhS = await MolScribe.new({from: accounts[1]});
		const communityAddressTdlYFBl = accounts[2]
		const tokenIdz8skM6U = BigInt("168")
		const tokenAddressZoc6Sj = accounts[0]
		const transactionValueHcow0QD = BigInt("777")
		const buyerg66JBuF = accounts[2]
		const tokenIdWgqjrfD = BigInt("120")
		const tokenAddressrVJeXH2 = accounts[2]
		const tokenIdT1I6T4h = BigInt("1996")
		const tokenAddressmiDWQHJ = accounts[4]
		const _molBankmDoExmx = accounts[2]
		const _molFeeFCjpx5T = BigInt("1533")
		await contractJR0tRhS.giftLexART.call(tokenAddressZoc6Sj, tokenIdz8skM6U, communityAddressTdlYFBl, {from: accounts[0]});
		await contractJR0tRhS.makeOffer.call(tokenAddressrVJeXH2, tokenIdWgqjrfD, buyerg66JBuF, transactionValueHcow0QD, {from: accounts[1]});
		await contractJR0tRhS.acceptOffer.call(tokenAddressmiDWQHJ, tokenIdT1I6T4h, {from: accounts[1]});
		await contractJR0tRhS.updateMolBank.call(_molBankmDoExmx, {from: accounts[4]});
		await contractJR0tRhS.updateMolFees.call(_molFeeFCjpx5T, {from: accounts[5]});

		await expect(contractJR0tRhS.giftLexART.call(tokenAddressZoc6Sj, tokenIdz8skM6U, communityAddressTdlYFBl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})