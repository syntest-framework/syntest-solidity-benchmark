const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractI48qhZh = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdmwTtdhD = BigInt("249")
		const tokenAddressl8ADFeg = accounts[0]
		const transactionValueJpjaGJq = BigInt("276")
		const buyerEsKEKyu = accounts[2]
		const tokenIdeddfjx = BigInt("1")
		const tokenAddressOH8eE6t = accounts[2]
		const transactionValueVDSousT = BigInt("433")
		const buyerAfJlSwB = "0x0000000000000000000000000000000000000001"
		const tokenIdvyRRSW = BigInt("435")
		const tokenAddressDaLRPP4 = accounts[2]
		const nullJ3kPjTV = await contractI48qhZh.getTokenKey.call(tokenAddressl8ADFeg, tokenIdmwTtdhD, {from: accounts[4]});
		await contractI48qhZh.makeOffer.call(tokenAddressOH8eE6t, tokenIdeddfjx, buyerEsKEKyu, transactionValueJpjaGJq, {from: accounts[2]});
		await contractI48qhZh.makeOffer.call(tokenAddressDaLRPP4, tokenIdvyRRSW, buyerAfJlSwB, transactionValueVDSousT, {from: accounts[4]});
	});

	it('test for MolScribe', async () => {
		const contractDrzR4TY = await MolScribe.new({from: accounts[4]});
		const communityAddresslOgRFFX = accounts[0]
		const tokenIdFxWplXA = BigInt("1024")
		const tokenAddressA9d9vsn = accounts[0]
		const transactionValueSZayiva = BigInt("1565")
		const buyerxFnWahk = accounts[0]
		const tokenIdVoc3LCe = BigInt("88")
		const tokenAddressV0IzDHC = accounts[4]
		const _molBankh8iAEvO = accounts[2]
		const transactionValueJD85RzD = BigInt("452")
		const buyerCc9SXmD = accounts[1]
		const tokenIdcKvEey = BigInt("11")
		const tokenAddresshAe6FuV = accounts[4]
		const tokenIduE0zKiH = BigInt("1241")
		const tokenAddressY6BxNhh = accounts[4]
		await contractDrzR4TY.giftLexART.call(tokenAddressA9d9vsn, tokenIdFxWplXA, communityAddresslOgRFFX, {from: accounts[4]});
		await contractDrzR4TY.makeOffer.call(tokenAddressV0IzDHC, tokenIdVoc3LCe, buyerxFnWahk, transactionValueSZayiva, {from: accounts[1]});
		await contractDrzR4TY.updateMolBank.call(_molBankh8iAEvO, {from: accounts[1]});
		await contractDrzR4TY.makeOffer.call(tokenAddresshAe6FuV, tokenIdcKvEey, buyerCc9SXmD, transactionValueJD85RzD, {from: accounts[2]});
		const nulluiPcgE = await contractDrzR4TY.getTokenKey.call(tokenAddressY6BxNhh, tokenIduE0zKiH, {from: accounts[5]});

		await expect(contractDrzR4TY.giftLexART.call(tokenAddressA9d9vsn, tokenIdFxWplXA, communityAddresslOgRFFX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractUVAfgar = await MolScribe.new({from: accounts[2]});
		const tokenIdDpxJbZ4 = BigInt("568")
		const tokenAddresssRLO1IR = accounts[0]
		const transactionValuePxQQUlE = BigInt("580")
		const buyerbZQa6MA = accounts[4]
		const tokenIdntICpe8 = BigInt("1112")
		const tokenAddressufIpfa = accounts[2]
		const communityAddresstsXsNQ = accounts[4]
		const tokenIdfzQ84ef = BigInt("218")
		const tokenAddressGvkQsWp = "0x0000000000000000000000000000000000000001"
		const _molFeexPbPtfm = BigInt("661")
		const _molFeebVRsr3J = BigInt("251")
		const _molBankvXHA1nD = accounts[2]
		const nulljqmGtH0 = await contractUVAfgar.getTokenKey.call(tokenAddresssRLO1IR, tokenIdDpxJbZ4, {from: accounts[4]});
		await contractUVAfgar.makeOffer.call(tokenAddressufIpfa, tokenIdntICpe8, buyerbZQa6MA, transactionValuePxQQUlE, {from: accounts[0]});
		await contractUVAfgar.giftLexART.call(tokenAddressGvkQsWp, tokenIdfzQ84ef, communityAddresstsXsNQ, {from: accounts[2]});
		await contractUVAfgar.updateMolFees.call(_molFeexPbPtfm, {from: accounts[4]});
		await contractUVAfgar.updateMolFees.call(_molFeebVRsr3J, {from: accounts[1]});
		await contractUVAfgar.updateMolBank.call(_molBankvXHA1nD, {from: accounts[3]});

		assert.equal(nulljqmGtH0, 0x374ec24ee83de4aae75d020a363911cb27dea11b0000000000000000000000000000000000000000000000000000000000000238)
		await expect(contractUVAfgar.makeOffer.call(tokenAddressufIpfa, tokenIdntICpe8, buyerbZQa6MA, transactionValuePxQQUlE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractkFjxklt = await MolScribe.new({from: accounts[2]});
		const startingRoyaltiesCPTThPz = BigInt("164")
		const communityAddresscWkDDzP = accounts[5]
		const tokenIdlYkfPu = BigInt("173")
		const tokenAddressDYguIpW = accounts[0]
		const startingRoyaltiesXsbWECX = BigInt("143")
		const communityAddressmjYUxA = accounts[3]
		const tokenIdKPbu84U = BigInt("941")
		const tokenAddressoFTTSHp = accounts[1]
		await contractkFjxklt.scribeNFT.call(tokenAddressDYguIpW, tokenIdlYkfPu, communityAddresscWkDDzP, startingRoyaltiesCPTThPz, {from: accounts[1]});
		await contractkFjxklt.scribeNFT.call(tokenAddressoFTTSHp, tokenIdKPbu84U, communityAddressmjYUxA, startingRoyaltiesXsbWECX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractkFjxklt.scribeNFT.call(tokenAddressDYguIpW, tokenIdlYkfPu, communityAddresscWkDDzP, startingRoyaltiesCPTThPz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractYMRO99M = await MolScribe.new({from: accounts[1]});
		const _molBankaVNUFH7 = accounts[2]
		const _molBankjsIJlCf = accounts[4]
		const transactionValuec5kw7Of = BigInt("1691")
		const buyer6m0ieE = accounts[2]
		const tokenIdvBo19rZ = BigInt("855")
		const tokenAddressNrpoJyG = accounts[2]
		await contractYMRO99M.updateMolBank.call(_molBankaVNUFH7, {from: accounts[5]});
		await contractYMRO99M.updateMolBank.call(_molBankjsIJlCf, {from: accounts[4]});
		await contractYMRO99M.makeOffer.call(tokenAddressNrpoJyG, tokenIdvBo19rZ, buyer6m0ieE, transactionValuec5kw7Of, {from: accounts[1]});

		await expect(contractYMRO99M.updateMolBank.call(_molBankaVNUFH7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractayDARBK = await MolScribe.new({from: accounts[2]});
		const tokenIdcXJPJF = BigInt("436")
		const tokenAddressOPL4TYD = accounts[5]
		const transactionValuebXAspea = BigInt("840")
		const buyerxpZA9Kg = accounts[2]
		const tokenIdh7W8QHt = BigInt("762")
		const tokenAddressxTLSio2 = accounts[5]
		const transactionValueaGzAmFa = BigInt("453")
		const buyerbguWZpb = accounts[3]
		const tokenIdDypDAOi = BigInt("2039")
		const tokenAddressPdinrMk = accounts[2]
		const tokenIdtFtwHXM = BigInt("237")
		const tokenAddressr6PMZxO = accounts[4]
		await contractayDARBK.acceptOffer.call(tokenAddressOPL4TYD, tokenIdcXJPJF, {from: accounts[3]});
		await contractayDARBK.makeOffer.call(tokenAddressxTLSio2, tokenIdh7W8QHt, buyerxpZA9Kg, transactionValuebXAspea, {from: accounts[4]});
		await contractayDARBK.makeOffer.call(tokenAddressPdinrMk, tokenIdDypDAOi, buyerbguWZpb, transactionValueaGzAmFa, {from: accounts[3]});
		const nullmCIyfzH = await contractayDARBK.getTokenKey.call(tokenAddressr6PMZxO, tokenIdtFtwHXM, {from: accounts[3]});

		await expect(contractayDARBK.acceptOffer.call(tokenAddressOPL4TYD, tokenIdcXJPJF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})