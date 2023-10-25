const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractYFPZOTx = await MolScribe.new({from: accounts[0]});
		const tokenIdYdSt7Po = BigInt("2011")
		const tokenAddressglgyltW = accounts[1]
		const tokenIda7P3eBa = BigInt("523")
		const tokenAddressXERmiuD = "0x0000000000000000000000000000000000000001"
		const _molFeeHJK42TC = BigInt("204")
		const _molBankArLtWQU = accounts[4]
		const tokenIdiNwdeS1 = BigInt("949")
		const tokenAddressSxMeIrY = accounts[0]
		const nullNBxOAaP = await contractYFPZOTx.getTokenKey.call(tokenAddressglgyltW, tokenIdYdSt7Po, {from: accounts[1]});
		const nullAP0Uing = await contractYFPZOTx.getTokenKey.call(tokenAddressXERmiuD, tokenIda7P3eBa, {from: accounts[2]});
		await contractYFPZOTx.updateMolFees.call(_molFeeHJK42TC, {from: accounts[5]});
		await contractYFPZOTx.updateMolBank.call(_molBankArLtWQU, {from: accounts[1]});
		await contractYFPZOTx.acceptOffer.call(tokenAddressSxMeIrY, tokenIdiNwdeS1, {from: accounts[0]});

		assert.equal(nullAP0Uing, 0x0000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000020b)
		assert.equal(nullNBxOAaP, 0xe26fadcb338c0b688bf1cda9bf3b6b9d3b01b20f00000000000000000000000000000000000000000000000000000000000007db)
		await expect(contractYFPZOTx.updateMolFees.call(_molFeeHJK42TC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractRHPCnYG = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdClwX9yw = BigInt("1352")
		const tokenAddressbJuLI4i = accounts[3]
		const transactionValuei0PxVqR = BigInt("1267")
		const buyerD1RD1zm = accounts[0]
		const tokenIdTOV1t5 = BigInt("1500")
		const tokenAddress8fP5sV = accounts[1]
		const _molMNUayJ9 = accounts[3]
		const transactionValueZ2v6Skd = BigInt("1878")
		const buyerbSmYdrM = "0x0000000000000000000000000000000000000001"
		const tokenIdvY5oqXz = BigInt("1096")
		const tokenAddressJsFveDO = accounts[2]
		const tokenId3LwQzq = BigInt("163")
		const tokenAddressM1ncnv = accounts[4]
		await contractRHPCnYG.acceptOffer.call(tokenAddressbJuLI4i, tokenIdClwX9yw, {from: accounts[2]});
		await contractRHPCnYG.makeOffer.call(tokenAddress8fP5sV, tokenIdTOV1t5, buyerD1RD1zm, transactionValuei0PxVqR, {from: accounts[4]});
		await contractRHPCnYG.updateMol.call(_molMNUayJ9, {from: accounts[2]});
		await contractRHPCnYG.makeOffer.call(tokenAddressJsFveDO, tokenIdvY5oqXz, buyerbSmYdrM, transactionValueZ2v6Skd, {from: accounts[0]});
		await contractRHPCnYG.acceptOffer.call(tokenAddressM1ncnv, tokenId3LwQzq, {from: accounts[5]});
	});

	it('test for MolScribe', async () => {
		const contractEPqQek3 = await MolScribe.new({from: accounts[5]});
		const tokenIdUQs6tg8 = BigInt("1499")
		const tokenAddressTJQE69n = accounts[5]
		const tokenIdrpxdFG8 = BigInt("2023")
		const tokenAddressvXhjjRU = accounts[0]
		const tokenIdzfSxoRI = BigInt("1149")
		const tokenAddressbXLExK = accounts[0]
		await contractEPqQek3.acceptOffer.call(tokenAddressTJQE69n, tokenIdUQs6tg8, {from: accounts[2]});
		const nullyMqeOVJ = await contractEPqQek3.getTokenKey.call(tokenAddressvXhjjRU, tokenIdrpxdFG8, {from: accounts[2]});
		await contractEPqQek3.acceptOffer.call(tokenAddressbXLExK, tokenIdzfSxoRI, {from: accounts[2]});

		await expect(contractEPqQek3.acceptOffer.call(tokenAddressTJQE69n, tokenIdUQs6tg8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractsRYzWiT = await MolScribe.new({from: accounts[3]});
		const startingRoyaltiesqF1UHul = BigInt("82")
		const communityAddressNcsJH2R = accounts[1]
		const tokenIdzSHWuB = BigInt("470")
		const tokenAddressAd5f2ra = accounts[0]
		const startingRoyaltiesjHdyqg = BigInt("138")
		const communityAddressK291qwE = accounts[5]
		const tokenIdi5Qsk9e = BigInt("128")
		const tokenAddressAsIamlv = accounts[0]
		const startingRoyaltiesZXphoN9 = BigInt("202")
		const communityAddressKW3SfNs = accounts[4]
		const tokenIdre7tKfN = BigInt("359")
		const tokenAddressQdlCUk6 = accounts[2]
		await contractsRYzWiT.scribeNFT.call(tokenAddressAd5f2ra, tokenIdzSHWuB, communityAddressNcsJH2R, startingRoyaltiesqF1UHul, {from: accounts[4]});
		await contractsRYzWiT.scribeNFT.call(tokenAddressAsIamlv, tokenIdi5Qsk9e, communityAddressK291qwE, startingRoyaltiesjHdyqg, {from: accounts[2]});
		await contractsRYzWiT.scribeNFT.call(tokenAddressQdlCUk6, tokenIdre7tKfN, communityAddressKW3SfNs, startingRoyaltiesZXphoN9, {from: accounts[4]});

		await expect(contractsRYzWiT.scribeNFT.call(tokenAddressAd5f2ra, tokenIdzSHWuB, communityAddressNcsJH2R, startingRoyaltiesqF1UHul, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractpNagrF = await MolScribe.new({from: accounts[5]});
		const tokenIdXrxQ9kY = BigInt("1499")
		const tokenAddressGleSl1X = accounts[6]
		const tokenIdKcKm1aC = BigInt("2023")
		const tokenAddressWuJa7iW = accounts[0]
		const tokenIdAXAePQe = BigInt("1532")
		const tokenAddressW6d1nVA = accounts[0]
		const _molqEMTVth = accounts[4]
		const tokenIdgbS7bMX = BigInt("1149")
		const tokenAddressFfiCNPi = accounts[0]
		await contractpNagrF.acceptOffer.call(tokenAddressGleSl1X, tokenIdXrxQ9kY, {from: accounts[2]});
		const nullB5vCdX = await contractpNagrF.getTokenKey.call(tokenAddressWuJa7iW, tokenIdKcKm1aC, {from: accounts[2]});
		await contractpNagrF.acceptOffer.call(tokenAddressW6d1nVA, tokenIdAXAePQe, {from: accounts[1]});
		await contractpNagrF.updateMol.call(_molqEMTVth, {from: accounts[4]});
		await contractpNagrF.acceptOffer.call(tokenAddressFfiCNPi, tokenIdgbS7bMX, {from: accounts[2]});

		await expect(contractpNagrF.acceptOffer.call(tokenAddressGleSl1X, tokenIdXrxQ9kY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract2QMajv = await MolScribe.new({from: accounts[2]});
		const communityAddressBKlrv5k = accounts[0]
		const tokenIdxvuuGV = BigInt("1416")
		const tokenAddresscClis8M = accounts[0]
		const communityAddressQJmvzXs = accounts[0]
		const tokenIdxnjaQiN = BigInt("894")
		const tokenAddressYnhOFoU = accounts[4]
		await contract2QMajv.giftLexART.call(tokenAddresscClis8M, tokenIdxvuuGV, communityAddressBKlrv5k, {from: accounts[2]});
		await contract2QMajv.giftLexART.call(tokenAddressYnhOFoU, tokenIdxnjaQiN, communityAddressQJmvzXs, {from: accounts[3]});

		await expect(contract2QMajv.giftLexART.call(tokenAddresscClis8M, tokenIdxvuuGV, communityAddressBKlrv5k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractHvNPWgm = await MolScribe.new({from: accounts[3]});
		const transactionValueqc4Gl7z = BigInt("1853")
		const buyerJTbmofI = "0x0000000000000000000000000000000000000001"
		const tokenIdp2wpiDw = BigInt("2015")
		const tokenAddresss0iRR2o = accounts[4]
		const startingRoyaltiesocuBPt3 = BigInt("201")
		const communityAddressjQyiDYS = accounts[4]
		const tokenIdPcsKDab = BigInt("1899")
		const tokenAddressTv8Woji = accounts[1]
		await contractHvNPWgm.makeOffer.call(tokenAddresss0iRR2o, tokenIdp2wpiDw, buyerJTbmofI, transactionValueqc4Gl7z, {from: "0x0000000000000000000000000000000000000001"});
		await contractHvNPWgm.scribeNFT.call(tokenAddressTv8Woji, tokenIdPcsKDab, communityAddressjQyiDYS, startingRoyaltiesocuBPt3, {from: accounts[4]});

		await expect(contractHvNPWgm.makeOffer.call(tokenAddresss0iRR2o, tokenIdp2wpiDw, buyerJTbmofI, transactionValueqc4Gl7z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})