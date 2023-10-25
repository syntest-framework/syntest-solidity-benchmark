const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractsKMs5tD = await MolScribe.new({from: accounts[3]});
		const transactionValuejEkQyKE = BigInt("636")
		const buyerfhlZGIs = accounts[2]
		const tokenIdMqGK5J = BigInt("85")
		const tokenAddress6tAKVl = accounts[0]
		const _molBankRMtmDs = accounts[0]
		const transactionValueb7yRACX = BigInt("814")
		const buyerRf16xP = accounts[1]
		const tokenIdQ60H86o = BigInt("1739")
		const tokenAddressorQ1xpT = accounts[2]
		const _molBankLkDUIf = accounts[3]
		const transactionValueJnHmJZA = BigInt("156")
		const buyerc2xrF5S = accounts[2]
		const tokenIdqsugmc2 = BigInt("1236")
		const tokenAddressFp2zcHE = accounts[5]
		const transactionValue6BpnoS = BigInt("751")
		const buyerNRMSDcm = accounts[3]
		const tokenIdIw2OO9I = BigInt("293")
		const tokenAddressI325rGF = accounts[1]
		await contractsKMs5tD.makeOffer.call(tokenAddress6tAKVl, tokenIdMqGK5J, buyerfhlZGIs, transactionValuejEkQyKE, {from: accounts[3]});
		await contractsKMs5tD.updateMolBank.call(_molBankRMtmDs, {from: "0x0000000000000000000000000000000000000001"});
		await contractsKMs5tD.makeOffer.call(tokenAddressorQ1xpT, tokenIdQ60H86o, buyerRf16xP, transactionValueb7yRACX, {from: accounts[5]});
		await contractsKMs5tD.updateMolBank.call(_molBankLkDUIf, {from: accounts[4]});
		await contractsKMs5tD.makeOffer.call(tokenAddressFp2zcHE, tokenIdqsugmc2, buyerc2xrF5S, transactionValueJnHmJZA, {from: "0x0000000000000000000000000000000000000001"});
		await contractsKMs5tD.makeOffer.call(tokenAddressI325rGF, tokenIdIw2OO9I, buyerNRMSDcm, transactionValue6BpnoS, {from: accounts[2]});

		await expect(contractsKMs5tD.makeOffer.call(tokenAddress6tAKVl, tokenIdMqGK5J, buyerfhlZGIs, transactionValuejEkQyKE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractilZSRxw = await MolScribe.new({from: accounts[1]});
		const startingRoyaltiesYNaRdax = BigInt("204")
		const communityAddressaA5MetE = accounts[0]
		const tokenIdLcSzOlu = BigInt("1873")
		const tokenAddressd8ptCaQ = accounts[3]
		const tokenIdZochfS2 = BigInt("171")
		const tokenAddresspMzFqvf = accounts[4]
		const transactionValuel6cbhN9 = BigInt("994")
		const buyerN9pb1Gh = accounts[1]
		const tokenIdF251LRz = BigInt("1341")
		const tokenAddressdAVEaAb = accounts[0]
		const _molFeeqcKI7Tc = BigInt("660")
		const _molBankvswduNH = accounts[4]
		await contractilZSRxw.scribeNFT.call(tokenAddressd8ptCaQ, tokenIdLcSzOlu, communityAddressaA5MetE, startingRoyaltiesYNaRdax, {from: accounts[5]});
		await contractilZSRxw.acceptOffer.call(tokenAddresspMzFqvf, tokenIdZochfS2, {from: accounts[2]});
		await contractilZSRxw.makeOffer.call(tokenAddressdAVEaAb, tokenIdF251LRz, buyerN9pb1Gh, transactionValuel6cbhN9, {from: accounts[4]});
		await contractilZSRxw.updateMolFees.call(_molFeeqcKI7Tc, {from: accounts[1]});
		await contractilZSRxw.updateMolBank.call(_molBankvswduNH, {from: accounts[4]});

		await expect(contractilZSRxw.scribeNFT.call(tokenAddressd8ptCaQ, tokenIdLcSzOlu, communityAddressaA5MetE, startingRoyaltiesYNaRdax, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractB1OEZ74 = await MolScribe.new({from: accounts[2]});
		const communityAddressaxKn3cJ = accounts[0]
		const tokenIdQNQIpTM = BigInt("1693")
		const tokenAddressmkM0VF = accounts[3]
		const tokenIdoBLTDXX = BigInt("1359")
		const tokenAddressXKtZnET = "0x0000000000000000000000000000000000000001"
		const tokenId0wO2OY = BigInt("381")
		const tokenAddressvNRuarv = accounts[2]
		const tokenIdBT2s1FN = BigInt("843")
		const tokenAddressLmRG198 = accounts[5]
		const _molBankZIjE6J1 = accounts[1]
		await contractB1OEZ74.giftLexART.call(tokenAddressmkM0VF, tokenIdQNQIpTM, communityAddressaxKn3cJ, {from: accounts[1]});
		await contractB1OEZ74.acceptOffer.call(tokenAddressXKtZnET, tokenIdoBLTDXX, {from: accounts[1]});
		await contractB1OEZ74.acceptOffer.call(tokenAddressvNRuarv, tokenId0wO2OY, {from: accounts[5]});
		await contractB1OEZ74.acceptOffer.call(tokenAddressLmRG198, tokenIdBT2s1FN, {from: accounts[4]});
		await contractB1OEZ74.updateMolBank.call(_molBankZIjE6J1, {from: accounts[0]});

		await expect(contractB1OEZ74.giftLexART.call(tokenAddressmkM0VF, tokenIdQNQIpTM, communityAddressaxKn3cJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractkg6sS4i = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdMlx0uvn = BigInt("1382")
		const tokenAddressLsh8FyR = accounts[0]
		const tokenIdBaBlip = BigInt("695")
		const tokenAddressuI7mu1B = accounts[0]
		const startingRoyaltiesT5mFwOm = BigInt("82")
		const communityAddressAWQR3MG = accounts[1]
		const tokenIdY2R3MU7 = BigInt("1460")
		const tokenAddressqdSLfJr = accounts[2]
		const _molBankgWCtjo6 = accounts[1]
		const _molF1cNJ95 = accounts[0]
		await contractkg6sS4i.acceptOffer.call(tokenAddressLsh8FyR, tokenIdMlx0uvn, {from: accounts[5]});
		await contractkg6sS4i.acceptOffer.call(tokenAddressuI7mu1B, tokenIdBaBlip, {from: accounts[5]});
		await contractkg6sS4i.scribeNFT.call(tokenAddressqdSLfJr, tokenIdY2R3MU7, communityAddressAWQR3MG, startingRoyaltiesT5mFwOm, {from: accounts[5]});
		await contractkg6sS4i.updateMolBank.call(_molBankgWCtjo6, {from: accounts[5]});
		await contractkg6sS4i.updateMol.call(_molF1cNJ95, {from: accounts[4]});
	});

	it('test for MolScribe', async () => {
		const contractBBAm1gq = await MolScribe.new({from: accounts[0]});
		const _molfPZ1fi0 = accounts[1]
		const transactionValuevjMlLoQ = BigInt("469")
		const buyerQPELiDP = accounts[4]
		const tokenIdNPdrrYH = BigInt("969")
		const tokenAddressiWmYsM = accounts[0]
		const _molBankfSqv4Bv = accounts[3]
		const _molFeepi89rXn = BigInt("502")
		await contractBBAm1gq.updateMol.call(_molfPZ1fi0, {from: accounts[1]});
		await contractBBAm1gq.makeOffer.call(tokenAddressiWmYsM, tokenIdNPdrrYH, buyerQPELiDP, transactionValuevjMlLoQ, {from: accounts[4]});
		await contractBBAm1gq.updateMolBank.call(_molBankfSqv4Bv, {from: accounts[5]});
		await contractBBAm1gq.updateMolFees.call(_molFeepi89rXn, {from: accounts[0]});

		await expect(contractBBAm1gq.updateMol.call(_molfPZ1fi0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractsmAtlKM = await MolScribe.new({from: accounts[4]});
		const tokenIdfipdCSw = BigInt("316")
		const tokenAddressL10w436 = accounts[4]
		const tokenIdjEmmcND = BigInt("1131")
		const tokenAddressj4Npxc8 = accounts[2]
		const _molFeeFxX8OS = BigInt("899")
		const tokenIdErBNNC8 = BigInt("715")
		const tokenAddresshCEy90Q = accounts[5]
		const transactionValueYWg8ucd = BigInt("1643")
		const buyeruKwpcoP = "0x0000000000000000000000000000000000000001"
		const tokenIdQBpljoQ = BigInt("254")
		const tokenAddressb8DKzS0 = accounts[1]
		await contractsmAtlKM.acceptOffer.call(tokenAddressL10w436, tokenIdfipdCSw, {from: accounts[3]});
		await contractsmAtlKM.acceptOffer.call(tokenAddressj4Npxc8, tokenIdjEmmcND, {from: accounts[2]});
		await contractsmAtlKM.updateMolFees.call(_molFeeFxX8OS, {from: "0x0000000000000000000000000000000000000001"});
		await contractsmAtlKM.acceptOffer.call(tokenAddresshCEy90Q, tokenIdErBNNC8, {from: accounts[3]});
		await contractsmAtlKM.makeOffer.call(tokenAddressb8DKzS0, tokenIdQBpljoQ, buyeruKwpcoP, transactionValueYWg8ucd, {from: accounts[5]});

		await expect(contractsmAtlKM.acceptOffer.call(tokenAddressL10w436, tokenIdfipdCSw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})