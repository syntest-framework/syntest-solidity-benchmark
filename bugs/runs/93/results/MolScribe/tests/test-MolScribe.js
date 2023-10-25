const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractaEirxiJ = await MolScribe.new({from: accounts[3]});
		const transactionValueC7L66D = BigInt("980")
		const buyerQTE9PSc = accounts[4]
		const tokenIdMm8U0lr = BigInt("1211")
		const tokenAddressFYbkw85 = accounts[1]
		const tokenIdEN6oxEK = BigInt("1825")
		const tokenAddressR3OMjJu = accounts[1]
		const _molBankonUQWiU = accounts[0]
		const transactionValueRCzykwh = BigInt("458")
		const buyerjBSQR7U = "0x0000000000000000000000000000000000000001"
		const tokenIdkmp0xyG = BigInt("927")
		const tokenAddress75Co5X = accounts[2]
		const communityAddressJd8O9a6 = accounts[2]
		const tokenIdftFsGEc = BigInt("468")
		const tokenAddressnK69kpW = accounts[1]
		const _molFeemjA05cX = BigInt("1716")
		await contractaEirxiJ.makeOffer.call(tokenAddressFYbkw85, tokenIdMm8U0lr, buyerQTE9PSc, transactionValueC7L66D, {from: accounts[0]});
		await contractaEirxiJ.acceptOffer.call(tokenAddressR3OMjJu, tokenIdEN6oxEK, {from: accounts[2]});
		await contractaEirxiJ.updateMolBank.call(_molBankonUQWiU, {from: accounts[5]});
		await contractaEirxiJ.makeOffer.call(tokenAddress75Co5X, tokenIdkmp0xyG, buyerjBSQR7U, transactionValueRCzykwh, {from: "0x0000000000000000000000000000000000000001"});
		await contractaEirxiJ.giftLexART.call(tokenAddressnK69kpW, tokenIdftFsGEc, communityAddressJd8O9a6, {from: accounts[0]});
		await contractaEirxiJ.updateMolFees.call(_molFeemjA05cX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractaEirxiJ.makeOffer.call(tokenAddressFYbkw85, tokenIdMm8U0lr, buyerQTE9PSc, transactionValueC7L66D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractYGtGld8 = await MolScribe.new({from: accounts[5]});
		const startingRoyaltiesk5caKC0 = BigInt("121")
		const communityAddresseTPdbYm = accounts[4]
		const tokenIdytXToxg = BigInt("504")
		const tokenAddressTDqvWl = accounts[2]
		const _molBankTcqiwpB = accounts[2]
		const tokenIdhHmjkcU = BigInt("180")
		const tokenAddressuGGgfXO = accounts[0]
		const startingRoyaltiesYcptSUX = BigInt("239")
		const communityAddressPJasszQ = accounts[0]
		const tokenIdlP6Iq3j = BigInt("1772")
		const tokenAddressBj7r5dJ = accounts[5]
		const _molQj9wY4h = accounts[3]
		await contractYGtGld8.scribeNFT.call(tokenAddressTDqvWl, tokenIdytXToxg, communityAddresseTPdbYm, startingRoyaltiesk5caKC0, {from: accounts[1]});
		await contractYGtGld8.updateMolBank.call(_molBankTcqiwpB, {from: accounts[3]});
		const nullUXkiYgQ = await contractYGtGld8.getTokenKey.call(tokenAddressuGGgfXO, tokenIdhHmjkcU, {from: accounts[0]});
		await contractYGtGld8.scribeNFT.call(tokenAddressBj7r5dJ, tokenIdlP6Iq3j, communityAddressPJasszQ, startingRoyaltiesYcptSUX, {from: "0x0000000000000000000000000000000000000001"});
		await contractYGtGld8.updateMol.call(_molQj9wY4h, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractYGtGld8.scribeNFT.call(tokenAddressTDqvWl, tokenIdytXToxg, communityAddresseTPdbYm, startingRoyaltiesk5caKC0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractpRu7hYZ = await MolScribe.new({from: accounts[1]});
		const _molBankG5Aywl = accounts[1]
		const _molBankN8sLZmU = accounts[0]
		const tokenIdsXSa21K = BigInt("589")
		const tokenAddressk8lohp0 = accounts[3]
		const tokenIddvPZdwT = BigInt("91")
		const tokenAddressOx8pdlN = accounts[4]
		const startingRoyaltiesNgQpsDr = BigInt("211")
		const communityAddressPDzjRsn = accounts[4]
		const tokenIdtAxXTbe = BigInt("436")
		const tokenAddressODLo0aj = accounts[4]
		const _molBanktA53Bwb = accounts[4]
		await contractpRu7hYZ.updateMolBank.call(_molBankG5Aywl, {from: accounts[3]});
		await contractpRu7hYZ.updateMolBank.call(_molBankN8sLZmU, {from: accounts[1]});
		const nullHEAA0Zk = await contractpRu7hYZ.getTokenKey.call(tokenAddressk8lohp0, tokenIdsXSa21K, {from: "0x0000000000000000000000000000000000000001"});
		const nullmPUm2X = await contractpRu7hYZ.getTokenKey.call(tokenAddressOx8pdlN, tokenIddvPZdwT, {from: accounts[2]});
		await contractpRu7hYZ.scribeNFT.call(tokenAddressODLo0aj, tokenIdtAxXTbe, communityAddressPDzjRsn, startingRoyaltiesNgQpsDr, {from: accounts[3]});
		await contractpRu7hYZ.updateMolBank.call(_molBanktA53Bwb, {from: accounts[2]});

		await expect(contractpRu7hYZ.updateMolBank.call(_molBankG5Aywl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractbdGY5J7 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molFeezHvuPa = BigInt("86")
		const startingRoyaltiess2AV3mw = BigInt("40")
		const communityAddressl2IJzhw = accounts[5]
		const tokenIdkilMcq = BigInt("1412")
		const tokenAddress2Ma7f1 = accounts[2]
		const communityAddressp20VqqJ = "0x0000000000000000000000000000000000000001"
		const tokenIdSRTDcQo = BigInt("774")
		const tokenAddressZDUAeFD = accounts[2]
		const tokenIdlenrnof = BigInt("1595")
		const tokenAddresspYUKshc = accounts[0]
		await contractbdGY5J7.updateMolFees.call(_molFeezHvuPa, {from: accounts[3]});
		await contractbdGY5J7.scribeNFT.call(tokenAddress2Ma7f1, tokenIdkilMcq, communityAddressl2IJzhw, startingRoyaltiess2AV3mw, {from: accounts[4]});
		await contractbdGY5J7.giftLexART.call(tokenAddressZDUAeFD, tokenIdSRTDcQo, communityAddressp20VqqJ, {from: accounts[3]});
		const nullRBa3TA = await contractbdGY5J7.getTokenKey.call(tokenAddresspYUKshc, tokenIdlenrnof, {from: accounts[2]});
	});

	it('test for MolScribe', async () => {
		const contractTTOscSn = await MolScribe.new({from: accounts[4]});
		const tokenIdAtL20I1 = BigInt("274")
		const tokenAddressCBYFPae = accounts[4]
		const tokenIde0BS53 = BigInt("650")
		const tokenAddressrg83zI = accounts[4]
		const transactionValuePHq1PBk = BigInt("1677")
		const buyerBquuiVV = accounts[3]
		const tokenIdDtwAFDn = BigInt("1232")
		const tokenAddressgBu8sfo = accounts[0]
		await contractTTOscSn.acceptOffer.call(tokenAddressCBYFPae, tokenIdAtL20I1, {from: accounts[4]});
		const nulli7Z8tWf = await contractTTOscSn.getTokenKey.call(tokenAddressrg83zI, tokenIde0BS53, {from: accounts[2]});
		await contractTTOscSn.makeOffer.call(tokenAddressgBu8sfo, tokenIdDtwAFDn, buyerBquuiVV, transactionValuePHq1PBk, {from: accounts[1]});

		await expect(contractTTOscSn.acceptOffer.call(tokenAddressCBYFPae, tokenIdAtL20I1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractv5deFyT = await MolScribe.new({from: accounts[0]});
		const communityAddressfeKDjV1 = accounts[5]
		const tokenIdDDG8AYd = BigInt("1170")
		const tokenAddressplOdsTb = accounts[5]
		const communityAddressFEqv3Jt = accounts[1]
		const tokenIdcejHZ1O = BigInt("851")
		const tokenAddress3cKU7B = accounts[4]
		await contractv5deFyT.giftLexART.call(tokenAddressplOdsTb, tokenIdDDG8AYd, communityAddressfeKDjV1, {from: accounts[1]});
		await contractv5deFyT.giftLexART.call(tokenAddress3cKU7B, tokenIdcejHZ1O, communityAddressFEqv3Jt, {from: accounts[1]});

		await expect(contractv5deFyT.giftLexART.call(tokenAddressplOdsTb, tokenIdDDG8AYd, communityAddressfeKDjV1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})