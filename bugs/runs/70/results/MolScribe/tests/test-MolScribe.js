const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractidR09Yw = await MolScribe.new({from: accounts[2]});
		const tokenIdz3mJsc9 = BigInt("1644")
		const tokenAddressunPSgkV = accounts[2]
		const transactionValuey07ZaJ5 = BigInt("320")
		const buyerZisyKjS = accounts[5]
		const tokenId9G2Z8X = BigInt("568")
		const tokenAddressJsByRsS = accounts[0]
		const transactionValueHXb1o7b = BigInt("1164")
		const buyerii06jDz = accounts[5]
		const tokenIdi2rYQbx = BigInt("661")
		const tokenAddressQ0U41v = accounts[4]
		const nullgZsN1bL = await contractidR09Yw.getTokenKey.call(tokenAddressunPSgkV, tokenIdz3mJsc9, {from: accounts[4]});
		await contractidR09Yw.makeOffer.call(tokenAddressJsByRsS, tokenId9G2Z8X, buyerZisyKjS, transactionValuey07ZaJ5, {from: accounts[1]});
		await contractidR09Yw.makeOffer.call(tokenAddressQ0U41v, tokenIdi2rYQbx, buyerii06jDz, transactionValueHXb1o7b, {from: accounts[3]});

		assert.equal(nullgZsN1bL, 0xdb537a8b0bbb5cc38c1db1ed6ef0976345c904b6000000000000000000000000000000000000000000000000000000000000066c)
		await expect(contractidR09Yw.makeOffer.call(tokenAddressJsByRsS, tokenId9G2Z8X, buyerZisyKjS, transactionValuey07ZaJ5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractfSD01Ay = await MolScribe.new({from: accounts[3]});
		const _molBankklRlZIr = "0x0000000000000000000000000000000000000001"
		const tokenIdPqPeCue = BigInt("421")
		const tokenAddressubKdSj7 = accounts[2]
		await contractfSD01Ay.updateMolBank.call(_molBankklRlZIr, {from: accounts[2]});
		const nullRcC5q0L = await contractfSD01Ay.getTokenKey.call(tokenAddressubKdSj7, tokenIdPqPeCue, {from: accounts[0]});

		await expect(contractfSD01Ay.updateMolBank.call(_molBankklRlZIr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractWHmyipP = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _moldxQYnWT = accounts[0]
		const tokenIdkzntLK2 = BigInt("1057")
		const tokenAddresspb2XPyo = accounts[3]
		const _molHSFGi5O = accounts[3]
		const startingRoyaltiespMaI8Pd = BigInt("248")
		const communityAddressAfjYiuv = accounts[2]
		const tokenIdHMn95Ug = BigInt("316")
		const tokenAddressH1GQoj = accounts[1]
		const startingRoyaltiesDRfHPz = BigInt("73")
		const communityAddressVaQ4YHn = accounts[4]
		const tokenIdlB0tEoQ = BigInt("1089")
		const tokenAddresszpy0YlW = accounts[3]
		const _molFeeHiEXC6P = BigInt("1484")
		await contractWHmyipP.updateMol.call(_moldxQYnWT, {from: accounts[3]});
		await contractWHmyipP.acceptOffer.call(tokenAddresspb2XPyo, tokenIdkzntLK2, {from: accounts[1]});
		await contractWHmyipP.updateMol.call(_molHSFGi5O, {from: accounts[5]});
		await contractWHmyipP.scribeNFT.call(tokenAddressH1GQoj, tokenIdHMn95Ug, communityAddressAfjYiuv, startingRoyaltiespMaI8Pd, {from: accounts[2]});
		await contractWHmyipP.scribeNFT.call(tokenAddresszpy0YlW, tokenIdlB0tEoQ, communityAddressVaQ4YHn, startingRoyaltiesDRfHPz, {from: "0x0000000000000000000000000000000000000001"});
		await contractWHmyipP.updateMolFees.call(_molFeeHiEXC6P, {from: accounts[0]});
	});

	it('test for MolScribe', async () => {
		const contractdVAlArv = await MolScribe.new({from: accounts[3]});
		const startingRoyaltiesyqFqs01 = BigInt("81")
		const communityAddressz1Wa2bE = accounts[2]
		const tokenIdhTqAUpX = BigInt("513")
		const tokenAddressGaOntlr = "0x0000000000000000000000000000000000000001"
		const _molmEFmWi = accounts[0]
		const communityAddressp4kbT9P = accounts[3]
		const tokenIdJW7Eg9W = BigInt("1262")
		const tokenAddresshtBd0WF = accounts[4]
		await contractdVAlArv.scribeNFT.call(tokenAddressGaOntlr, tokenIdhTqAUpX, communityAddressz1Wa2bE, startingRoyaltiesyqFqs01, {from: accounts[2]});
		await contractdVAlArv.updateMol.call(_molmEFmWi, {from: accounts[3]});
		await contractdVAlArv.giftLexART.call(tokenAddresshtBd0WF, tokenIdJW7Eg9W, communityAddressp4kbT9P, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractdVAlArv.scribeNFT.call(tokenAddressGaOntlr, tokenIdhTqAUpX, communityAddressz1Wa2bE, startingRoyaltiesyqFqs01, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracta4sJ5yT = await MolScribe.new({from: accounts[5]});
		const tokenIdvKZKUo0 = BigInt("302")
		const tokenAddressyYtJVvy = accounts[5]
		const transactionValueeFgarV = BigInt("428")
		const buyerAohJu5A = accounts[0]
		const tokenIdiwlN4Q = BigInt("724")
		const tokenAddressPhBlqNu = accounts[0]
		const transactionValueqHCHSUl = BigInt("1240")
		const buyerQYwEJ5B = accounts[3]
		const tokenIdJWLnnWw = BigInt("1606")
		const tokenAddressod65J6L = accounts[3]
		const tokenIdKynFtZv = BigInt("424")
		const tokenAddressecGhFfz = accounts[0]
		await contracta4sJ5yT.acceptOffer.call(tokenAddressyYtJVvy, tokenIdvKZKUo0, {from: accounts[3]});
		await contracta4sJ5yT.makeOffer.call(tokenAddressPhBlqNu, tokenIdiwlN4Q, buyerAohJu5A, transactionValueeFgarV, {from: accounts[2]});
		await contracta4sJ5yT.makeOffer.call(tokenAddressod65J6L, tokenIdJWLnnWw, buyerQYwEJ5B, transactionValueqHCHSUl, {from: accounts[2]});
		const nullQtDPcNY = await contracta4sJ5yT.getTokenKey.call(tokenAddressecGhFfz, tokenIdKynFtZv, {from: accounts[2]});

		await expect(contracta4sJ5yT.acceptOffer.call(tokenAddressyYtJVvy, tokenIdvKZKUo0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractpBZtB4 = await MolScribe.new({from: accounts[2]});
		const tokenIdyXffcfe = BigInt("963")
		const tokenAddressfJuRrWO = accounts[3]
		const communityAddressrTp2B5r = accounts[1]
		const tokenIdLgJoiez = BigInt("642")
		const tokenAddresslBZXvsb = accounts[0]
		const tokenIdvnpDfB = BigInt("551")
		const tokenAddressgVSnTcn = accounts[0]
		const communityAddressHFNV3uC = accounts[0]
		const tokenIdqTFIkpE = BigInt("134")
		const tokenAddressmB8zlZK = accounts[0]
		const _molBankTKo22wd = accounts[2]
		const nulluh2KtNZ = await contractpBZtB4.getTokenKey.call(tokenAddressfJuRrWO, tokenIdyXffcfe, {from: accounts[5]});
		await contractpBZtB4.giftLexART.call(tokenAddresslBZXvsb, tokenIdLgJoiez, communityAddressrTp2B5r, {from: accounts[1]});
		const nullQej2fsj = await contractpBZtB4.getTokenKey.call(tokenAddressgVSnTcn, tokenIdvnpDfB, {from: accounts[5]});
		await contractpBZtB4.giftLexART.call(tokenAddressmB8zlZK, tokenIdqTFIkpE, communityAddressHFNV3uC, {from: accounts[1]});
		await contractpBZtB4.updateMolBank.call(_molBankTKo22wd, {from: accounts[2]});

		assert.equal(nulluh2KtNZ, 0xbc61d25465f50359070ee1faac020e8acad527f900000000000000000000000000000000000000000000000000000000000003c3)
		await expect(contractpBZtB4.giftLexART.call(tokenAddresslBZXvsb, tokenIdLgJoiez, communityAddressrTp2B5r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})