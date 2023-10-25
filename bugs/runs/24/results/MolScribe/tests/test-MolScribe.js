const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contract8gdCs1 = await MolScribe.new({from: accounts[1]});
		const startingRoyaltiesYlB7q0 = BigInt("146")
		const communityAddressZPXGPrH = accounts[0]
		const tokenIdQ3dvgCX = BigInt("1187")
		const tokenAddressSmjalUP = accounts[3]
		const tokenIdyngpHy = BigInt("527")
		const tokenAddressaqzs2fI = accounts[1]
		const tokenIdNXEJ8vH = BigInt("541")
		const tokenAddressEJUcknu = accounts[1]
		const tokenIdwTJGpea = BigInt("1751")
		const tokenAddressAfRc2HQ = accounts[4]
		const tokenIdJiqbuEU = BigInt("669")
		const tokenAddressT4FT1wy = accounts[1]
		await contract8gdCs1.scribeNFT.call(tokenAddressSmjalUP, tokenIdQ3dvgCX, communityAddressZPXGPrH, startingRoyaltiesYlB7q0, {from: accounts[2]});
		await contract8gdCs1.acceptOffer.call(tokenAddressaqzs2fI, tokenIdyngpHy, {from: accounts[4]});
		const nullzfYhfRg = await contract8gdCs1.getTokenKey.call(tokenAddressEJUcknu, tokenIdNXEJ8vH, {from: accounts[0]});
		const nullfRsa3QM = await contract8gdCs1.getTokenKey.call(tokenAddressAfRc2HQ, tokenIdwTJGpea, {from: accounts[4]});
		await contract8gdCs1.acceptOffer.call(tokenAddressT4FT1wy, tokenIdJiqbuEU, {from: accounts[0]});

		await expect(contract8gdCs1.scribeNFT.call(tokenAddressSmjalUP, tokenIdQ3dvgCX, communityAddressZPXGPrH, startingRoyaltiesYlB7q0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractol0LyOi = await MolScribe.new({from: accounts[0]});
		const tokenIdt9tJSef = BigInt("1523")
		const tokenAddressCRMWExj = accounts[1]
		const transactionValueZZggV3 = BigInt("993")
		const buyerR8Kue0v = accounts[0]
		const tokenIdw4Y8EZU = BigInt("1772")
		const tokenAddresslS4p7YL = "0x0000000000000000000000000000000000000001"
		const tokenIdHpES5pK = BigInt("1474")
		const tokenAddressstZI328 = accounts[3]
		await contractol0LyOi.acceptOffer.call(tokenAddressCRMWExj, tokenIdt9tJSef, {from: accounts[5]});
		await contractol0LyOi.makeOffer.call(tokenAddresslS4p7YL, tokenIdw4Y8EZU, buyerR8Kue0v, transactionValueZZggV3, {from: accounts[3]});
		const nullpNQjS7M = await contractol0LyOi.getTokenKey.call(tokenAddressstZI328, tokenIdHpES5pK, {from: accounts[0]});

		await expect(contractol0LyOi.acceptOffer.call(tokenAddressCRMWExj, tokenIdt9tJSef, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractECDsXO9 = await MolScribe.new({from: accounts[1]});
		const tokenIdL0VGV7F = BigInt("2018")
		const tokenAddressbfd3hVc = accounts[1]
		const tokenIdM0ZFkV = BigInt("1029")
		const tokenAddressLlutvGV = accounts[2]
		const _molEGac2Q2 = accounts[4]
		const _molBank4pJDRB = accounts[2]
		const _molFeeAg0Tga4 = BigInt("480")
		const nullawv8kmC = await contractECDsXO9.getTokenKey.call(tokenAddressbfd3hVc, tokenIdL0VGV7F, {from: accounts[5]});
		const nullmUW4jUT = await contractECDsXO9.getTokenKey.call(tokenAddressLlutvGV, tokenIdM0ZFkV, {from: accounts[1]});
		await contractECDsXO9.updateMol.call(_molEGac2Q2, {from: accounts[0]});
		await contractECDsXO9.updateMolBank.call(_molBank4pJDRB, {from: accounts[2]});
		await contractECDsXO9.updateMolFees.call(_molFeeAg0Tga4, {from: accounts[5]});

		assert.equal(nullawv8kmC, 0x50bc7ea44af7d5987290956ab5b44111a7bcde0a00000000000000000000000000000000000000000000000000000000000007e2)
		await expect(contractECDsXO9.getTokenKey.call(tokenAddressLlutvGV, tokenIdM0ZFkV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractuKHg4fO = await MolScribe.new({from: accounts[5]});
		const tokenId3r9rCQ = BigInt("1126")
		const tokenAddressU25HJwG = accounts[4]
		const communityAddressREXNdHa = accounts[2]
		const tokenIdzqz5Kir = BigInt("1283")
		const tokenAddressYHJfjek = accounts[0]
		const _molBankxPnddaE = accounts[4]
		const communityAddressLodg3vb = accounts[0]
		const tokenIdSVLlxo = BigInt("1441")
		const tokenAddressraYAsOV = accounts[5]
		const tokenIdTKLqDrc = BigInt("1810")
		const tokenAddressxzrm0zw = accounts[1]
		const nulleUDe5qA = await contractuKHg4fO.getTokenKey.call(tokenAddressU25HJwG, tokenId3r9rCQ, {from: accounts[3]});
		await contractuKHg4fO.giftLexART.call(tokenAddressYHJfjek, tokenIdzqz5Kir, communityAddressREXNdHa, {from: accounts[0]});
		await contractuKHg4fO.updateMolBank.call(_molBankxPnddaE, {from: accounts[3]});
		await contractuKHg4fO.giftLexART.call(tokenAddressraYAsOV, tokenIdSVLlxo, communityAddressLodg3vb, {from: accounts[3]});
		const nullL8ZAF1V = await contractuKHg4fO.getTokenKey.call(tokenAddressxzrm0zw, tokenIdTKLqDrc, {from: accounts[0]});

		assert.equal(nulleUDe5qA, 0x6bebf4384ff3e39d8a80785b8356c5b56bbb27f00000000000000000000000000000000000000000000000000000000000000466)
		await expect(contractuKHg4fO.giftLexART.call(tokenAddressYHJfjek, tokenIdzqz5Kir, communityAddressREXNdHa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractLsd78m4 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molFeev54KBW = BigInt("924")
		const _molFeelSz0Hd = BigInt("1421")
		const _molrSaF07 = accounts[0]
		const tokenIdNI2YUih = BigInt("222")
		const tokenAddressZMj6xw7 = accounts[2]
		const _molFPyR0Vj = "0x0000000000000000000000000000000000000001"
		await contractLsd78m4.updateMolFees.call(_molFeev54KBW, {from: accounts[2]});
		await contractLsd78m4.updateMolFees.call(_molFeelSz0Hd, {from: accounts[0]});
		await contractLsd78m4.updateMol.call(_molrSaF07, {from: accounts[4]});
		const nullW3vPCu = await contractLsd78m4.getTokenKey.call(tokenAddressZMj6xw7, tokenIdNI2YUih, {from: accounts[3]});
		await contractLsd78m4.updateMol.call(_molFPyR0Vj, {from: accounts[2]});
	});

	it('test for MolScribe', async () => {
		const contractMqzsPVB = await MolScribe.new({from: accounts[5]});
		const _molFeeS5ne3Bc = BigInt("1450")
		const tokenIdOz2mL3o = BigInt("1107")
		const tokenAddresszZPymJ6 = accounts[4]
		const tokenIdMPhaN7v = BigInt("94")
		const tokenAddressMDTJQ2y = accounts[1]
		const _molBankWRIiPDu = accounts[0]
		const _molFeejrgJrkp = BigInt("1301")
		await contractMqzsPVB.updateMolFees.call(_molFeeS5ne3Bc, {from: accounts[2]});
		const nullx5qyRO6 = await contractMqzsPVB.getTokenKey.call(tokenAddresszZPymJ6, tokenIdOz2mL3o, {from: accounts[0]});
		const nullYMMUY0 = await contractMqzsPVB.getTokenKey.call(tokenAddressMDTJQ2y, tokenIdMPhaN7v, {from: accounts[1]});
		await contractMqzsPVB.updateMolBank.call(_molBankWRIiPDu, {from: accounts[4]});
		await contractMqzsPVB.updateMolFees.call(_molFeejrgJrkp, {from: accounts[4]});

		await expect(contractMqzsPVB.updateMolFees.call(_molFeeS5ne3Bc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractGDYr1go = await MolScribe.new({from: accounts[2]});
		const transactionValueWN7ZorG = BigInt("1888")
		const buyerh7LmD2N = accounts[5]
		const tokenIdkReuPv5 = BigInt("1834")
		const tokenAddressNefxd4D = accounts[5]
		const tokenIdOiNJm45 = BigInt("231")
		const tokenAddressGjDIuIH = accounts[5]
		const startingRoyaltiesF95yGYk = BigInt("220")
		const communityAddressNlSuDA7 = accounts[3]
		const tokenIdsEp2Iu = BigInt("16")
		const tokenAddressijRgMrb = accounts[1]
		await contractGDYr1go.makeOffer.call(tokenAddressNefxd4D, tokenIdkReuPv5, buyerh7LmD2N, transactionValueWN7ZorG, {from: accounts[4]});
		await contractGDYr1go.acceptOffer.call(tokenAddressGjDIuIH, tokenIdOiNJm45, {from: accounts[2]});
		await contractGDYr1go.scribeNFT.call(tokenAddressijRgMrb, tokenIdsEp2Iu, communityAddressNlSuDA7, startingRoyaltiesF95yGYk, {from: accounts[3]});

		await expect(contractGDYr1go.makeOffer.call(tokenAddressNefxd4D, tokenIdkReuPv5, buyerh7LmD2N, transactionValueWN7ZorG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractsPMxEyP = await MolScribe.new({from: accounts[0]});
		const _molBankJ1hRmOm = "0x00000000000000000000000000000000000000-1"
		await contractsPMxEyP.updateMolBank.call(_molBankJ1hRmOm, {from: accounts[3]});

		await expect(contractsPMxEyP.updateMolBank.call(_molBankJ1hRmOm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})