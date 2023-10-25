const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractHnE6z0H = await MolScribe.new({from: accounts[1]});
		const tokenIdZOfRxnF = BigInt("308")
		const tokenAddressPcVprHl = accounts[3]
		const _molBankzzNb1n = accounts[3]
		const startingRoyaltiesvbO3Xfc = BigInt("54")
		const communityAddressHvWElZc = accounts[5]
		const tokenIdsslwFn2 = BigInt("1578")
		const tokenAddressRFU4ktA = accounts[3]
		await contractHnE6z0H.acceptOffer.call(tokenAddressPcVprHl, tokenIdZOfRxnF, {from: accounts[0]});
		await contractHnE6z0H.updateMolBank.call(_molBankzzNb1n, {from: accounts[1]});
		await contractHnE6z0H.scribeNFT.call(tokenAddressRFU4ktA, tokenIdsslwFn2, communityAddressHvWElZc, startingRoyaltiesvbO3Xfc, {from: accounts[0]});

		await expect(contractHnE6z0H.acceptOffer.call(tokenAddressPcVprHl, tokenIdZOfRxnF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracte6Nkd6b = await MolScribe.new({from: accounts[3]});
		const _molFeeKK5Joxb = BigInt("1674")
		const tokenIdrl6dC65 = BigInt("691")
		const tokenAddressnW9TUNL = accounts[0]
		const _molFeeV37Vzq0 = BigInt("1132")
		const transactionValueMcEu9Q7 = BigInt("1014")
		const buyerAUA6udM = accounts[3]
		const tokenIdrTWv1P = BigInt("393")
		const tokenAddressFrjJnEA = accounts[4]
		await contracte6Nkd6b.updateMolFees.call(_molFeeKK5Joxb, {from: accounts[0]});
		const nullJJxrZTn = await contracte6Nkd6b.getTokenKey.call(tokenAddressnW9TUNL, tokenIdrl6dC65, {from: "0x0000000000000000000000000000000000000001"});
		await contracte6Nkd6b.updateMolFees.call(_molFeeV37Vzq0, {from: accounts[4]});
		await contracte6Nkd6b.makeOffer.call(tokenAddressFrjJnEA, tokenIdrTWv1P, buyerAUA6udM, transactionValueMcEu9Q7, {from: accounts[4]});

		await expect(contracte6Nkd6b.updateMolFees.call(_molFeeKK5Joxb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractrebbR9v = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molBanklwiAOy0 = accounts[4]
		const _molBankShdqtV5 = accounts[1]
		const startingRoyaltiess47UETJ = BigInt("139")
		const communityAddressle5iVrX = accounts[2]
		const tokenIdWfx5m03 = BigInt("590")
		const tokenAddressSwCPn4X = accounts[1]
		const _molBankgNwFOe = accounts[0]
		const tokenIdIo79rHQ = BigInt("997")
		const tokenAddressJc2HCmi = accounts[4]
		await contractrebbR9v.updateMolBank.call(_molBanklwiAOy0, {from: accounts[1]});
		await contractrebbR9v.updateMolBank.call(_molBankShdqtV5, {from: accounts[0]});
		await contractrebbR9v.scribeNFT.call(tokenAddressSwCPn4X, tokenIdWfx5m03, communityAddressle5iVrX, startingRoyaltiess47UETJ, {from: accounts[0]});
		await contractrebbR9v.updateMolBank.call(_molBankgNwFOe, {from: accounts[3]});
		await contractrebbR9v.acceptOffer.call(tokenAddressJc2HCmi, tokenIdIo79rHQ, {from: accounts[3]});
	});

	it('test for MolScribe', async () => {
		const contractJPNXU5D = await MolScribe.new({from: accounts[2]});
		const communityAddresssKJrNWk = "0x0000000000000000000000000000000000000001"
		const tokenIdHYjmOxe = BigInt("1303")
		const tokenAddressgUYHvJk = accounts[1]
		const transactionValuenvJdso2 = BigInt("1178")
		const buyerJBVoFXD = accounts[1]
		const tokenIdRRLEOny = BigInt("1461")
		const tokenAddresss8ubtc = accounts[3]
		const _molat1dKcy = accounts[4]
		const transactionValuevRTr0Wn = BigInt("196")
		const buyerBaKLNho = accounts[2]
		const tokenIdLWvTodr = BigInt("525")
		const tokenAddressWliD9Vq = accounts[2]
		const transactionValueDo16XpL = BigInt("114")
		const buyerrdo8rRD = accounts[5]
		const tokenIdRdAHG2T = BigInt("534")
		const tokenAddressknImxHA = "0x0000000000000000000000000000000000000001"
		const _molBank8aoL2K = accounts[2]
		await contractJPNXU5D.giftLexART.call(tokenAddressgUYHvJk, tokenIdHYjmOxe, communityAddresssKJrNWk, {from: accounts[1]});
		await contractJPNXU5D.makeOffer.call(tokenAddresss8ubtc, tokenIdRRLEOny, buyerJBVoFXD, transactionValuenvJdso2, {from: accounts[2]});
		await contractJPNXU5D.updateMol.call(_molat1dKcy, {from: accounts[4]});
		await contractJPNXU5D.makeOffer.call(tokenAddressWliD9Vq, tokenIdLWvTodr, buyerBaKLNho, transactionValuevRTr0Wn, {from: accounts[0]});
		await contractJPNXU5D.makeOffer.call(tokenAddressknImxHA, tokenIdRdAHG2T, buyerrdo8rRD, transactionValueDo16XpL, {from: accounts[2]});
		await contractJPNXU5D.updateMolBank.call(_molBank8aoL2K, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractJPNXU5D.giftLexART.call(tokenAddressgUYHvJk, tokenIdHYjmOxe, communityAddresssKJrNWk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractuq0HK3P = await MolScribe.new({from: accounts[5]});
		const startingRoyaltiesVzuWNFM = BigInt("71")
		const communityAddressIijxqqv = "0x0000000000000000000000000000000000000001"
		const tokenIdNOYHPsB = BigInt("725")
		const tokenAddressuUYbhyg = accounts[2]
		const _molFeeHgHoquP = BigInt("1315")
		const tokenIdEEuHmIg = BigInt("1607")
		const tokenAddressje6ngN0 = accounts[1]
		const _molFeex4tM4YV = BigInt("510")
		const _molBank7M31fc = accounts[3]
		await contractuq0HK3P.scribeNFT.call(tokenAddressuUYbhyg, tokenIdNOYHPsB, communityAddressIijxqqv, startingRoyaltiesVzuWNFM, {from: accounts[2]});
		await contractuq0HK3P.updateMolFees.call(_molFeeHgHoquP, {from: accounts[2]});
		const nullR89UQp5 = await contractuq0HK3P.getTokenKey.call(tokenAddressje6ngN0, tokenIdEEuHmIg, {from: accounts[2]});
		await contractuq0HK3P.updateMolFees.call(_molFeex4tM4YV, {from: accounts[5]});
		await contractuq0HK3P.updateMolBank.call(_molBank7M31fc, {from: accounts[3]});

		await expect(contractuq0HK3P.scribeNFT.call(tokenAddressuUYbhyg, tokenIdNOYHPsB, communityAddressIijxqqv, startingRoyaltiesVzuWNFM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractUJYif2f = await MolScribe.new({from: accounts[4]});
		const tokenIdnQHhfuW = BigInt("953")
		const tokenAddressWq8MHCt = accounts[1]
		const transactionValueBUUlyoR = BigInt("1475")
		const buyerYk86unl = accounts[4]
		const tokenIdtB69MS = BigInt("711")
		const tokenAddressvhs7DL4 = accounts[3]
		const _molFeeMC1uhr = BigInt("558")
		const nullmFyz6yR = await contractUJYif2f.getTokenKey.call(tokenAddressWq8MHCt, tokenIdnQHhfuW, {from: "0x0000000000000000000000000000000000000001"});
		await contractUJYif2f.makeOffer.call(tokenAddressvhs7DL4, tokenIdtB69MS, buyerYk86unl, transactionValueBUUlyoR, {from: "0x0000000000000000000000000000000000000001"});
		await contractUJYif2f.updateMolFees.call(_molFeeMC1uhr, {from: accounts[0]});

		assert.equal(nullmFyz6yR, 0x9dc0153f9b42bc89bce7e880e615dc8835748baf00000000000000000000000000000000000000000000000000000000000003b9)
		await expect(contractUJYif2f.makeOffer.call(tokenAddressvhs7DL4, tokenIdtB69MS, buyerYk86unl, transactionValueBUUlyoR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractMZmRZhO = await MolScribe.new({from: accounts[4]});
		const tokenIdJYKDFBB = BigInt("751")
		const tokenAddressV3waSZt = accounts[5]
		const tokenIdRYqInN = BigInt("953")
		const tokenAddressb1REA0Q = accounts[1]
		const _molFeexToNOkF = BigInt("537")
		const nullCtF2VNa = await contractMZmRZhO.getTokenKey.call(tokenAddressV3waSZt, tokenIdJYKDFBB, {from: accounts[3]});
		const nullZXbsWsz = await contractMZmRZhO.getTokenKey.call(tokenAddressb1REA0Q, tokenIdRYqInN, {from: "0x0000000000000000000000000000000000000001"});
		await contractMZmRZhO.updateMolFees.call(_molFeexToNOkF, {from: accounts[0]});

		await expect(contractMZmRZhO.getTokenKey.call(tokenAddressV3waSZt, tokenIdJYKDFBB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})