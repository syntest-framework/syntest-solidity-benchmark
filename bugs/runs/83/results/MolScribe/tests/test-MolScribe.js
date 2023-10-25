const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractaujjA7w = await MolScribe.new({from: accounts[2]});
		const _molBankVPc3YG = accounts[3]
		const tokenIdlMsyE6C = BigInt("216")
		const tokenAddressrQi2q6 = accounts[2]
		const _molY1JelPK = accounts[0]
		await contractaujjA7w.updateMolBank.call(_molBankVPc3YG, {from: accounts[0]});
		const null69cVqq = await contractaujjA7w.getTokenKey.call(tokenAddressrQi2q6, tokenIdlMsyE6C, {from: accounts[3]});
		await contractaujjA7w.updateMol.call(_molY1JelPK, {from: accounts[0]});

		await expect(contractaujjA7w.updateMolBank.call(_molBankVPc3YG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracti0szlgB = await MolScribe.new({from: accounts[4]});
		const startingRoyaltiesjqGz6v0 = BigInt("34")
		const communityAddresscLO4yH = accounts[3]
		const tokenIdNwMo0hb = BigInt("302")
		const tokenAddressXdZ8nHk = accounts[1]
		const tokenIdg0nwCSs = BigInt("1560")
		const tokenAddressTDOcdK = accounts[4]
		const _molFeeXW8WP7O = BigInt("1317")
		const tokenIdv3oWlA = BigInt("1880")
		const tokenAddressS1Glzk3 = accounts[5]
		await contracti0szlgB.scribeNFT.call(tokenAddressXdZ8nHk, tokenIdNwMo0hb, communityAddresscLO4yH, startingRoyaltiesjqGz6v0, {from: accounts[4]});
		await contracti0szlgB.acceptOffer.call(tokenAddressTDOcdK, tokenIdg0nwCSs, {from: accounts[4]});
		await contracti0szlgB.updateMolFees.call(_molFeeXW8WP7O, {from: accounts[2]});
		await contracti0szlgB.acceptOffer.call(tokenAddressS1Glzk3, tokenIdv3oWlA, {from: accounts[3]});

		await expect(contracti0szlgB.scribeNFT.call(tokenAddressXdZ8nHk, tokenIdNwMo0hb, communityAddresscLO4yH, startingRoyaltiesjqGz6v0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracteRjiZ2d = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const startingRoyaltiesVnpM8aL = BigInt("253")
		const communityAddressgf0j7ci = accounts[3]
		const tokenIdQ2H6S2e = BigInt("484")
		const tokenAddresstT7MTE3 = accounts[4]
		const communityAddresspTDf0mK = accounts[1]
		const tokenIdAiHHKRo = BigInt("200")
		const tokenAddressCZjzRWT = "0x0000000000000000000000000000000000000001"
		const communityAddressUFOKA4f = accounts[0]
		const tokenIdwnL3W7Q = BigInt("1153")
		const tokenAddressE6Y8oFZ = accounts[5]
		const tokenIdYURYvRW = BigInt("834")
		const tokenAddresskSVu4Zh = accounts[4]
		await contracteRjiZ2d.scribeNFT.call(tokenAddresstT7MTE3, tokenIdQ2H6S2e, communityAddressgf0j7ci, startingRoyaltiesVnpM8aL, {from: accounts[3]});
		await contracteRjiZ2d.giftLexART.call(tokenAddressCZjzRWT, tokenIdAiHHKRo, communityAddresspTDf0mK, {from: accounts[0]});
		await contracteRjiZ2d.giftLexART.call(tokenAddressE6Y8oFZ, tokenIdwnL3W7Q, communityAddressUFOKA4f, {from: accounts[1]});
		const nullHINdwZs = await contracteRjiZ2d.getTokenKey.call(tokenAddresskSVu4Zh, tokenIdYURYvRW, {from: accounts[0]});
	});

	it('test for MolScribe', async () => {
		const contractMfl5U8B = await MolScribe.new({from: accounts[4]});
		const transactionValueXcu9PsQ = BigInt("1184")
		const buyerG3G53Eo = accounts[4]
		const tokenIdGZty8sF = BigInt("1795")
		const tokenAddressg880yGF = accounts[0]
		const _molBankXUNlaul = accounts[2]
		const startingRoyaltiesGrADfhS = BigInt("99")
		const communityAddressqNFeYJS = accounts[1]
		const tokenIdSslUqNf = BigInt("1426")
		const tokenAddressvq4XBbh = accounts[3]
		const startingRoyaltiesnhX7EPG = BigInt("216")
		const communityAddressLZsNBPv = accounts[1]
		const tokenIdYOo64nN = BigInt("419")
		const tokenAddressaX8sXFB = accounts[4]
		await contractMfl5U8B.makeOffer.call(tokenAddressg880yGF, tokenIdGZty8sF, buyerG3G53Eo, transactionValueXcu9PsQ, {from: accounts[3]});
		await contractMfl5U8B.updateMolBank.call(_molBankXUNlaul, {from: accounts[5]});
		await contractMfl5U8B.scribeNFT.call(tokenAddressvq4XBbh, tokenIdSslUqNf, communityAddressqNFeYJS, startingRoyaltiesGrADfhS, {from: accounts[3]});
		await contractMfl5U8B.scribeNFT.call(tokenAddressaX8sXFB, tokenIdYOo64nN, communityAddressLZsNBPv, startingRoyaltiesnhX7EPG, {from: accounts[3]});

		await expect(contractMfl5U8B.makeOffer.call(tokenAddressg880yGF, tokenIdGZty8sF, buyerG3G53Eo, transactionValueXcu9PsQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractuzBdCU = await MolScribe.new({from: accounts[4]});
		const tokenIdo18hA5z = BigInt("791")
		const tokenAddressFzjZIVI = accounts[1]
		const tokenId0WPvnV = BigInt("1161")
		const tokenAddressh1AypQ7 = accounts[2]
		const startingRoyaltiesp4IZqgv = BigInt("153")
		const communityAddressRCPWb4A = accounts[1]
		const tokenIdawbgIrd = BigInt("428")
		const tokenAddressNgDh7pQ = accounts[4]
		const communityAddressmlkUXJO = accounts[1]
		const tokenIdfhDXaRy = BigInt("1755")
		const tokenAddresskyn7B07 = accounts[0]
		await contractuzBdCU.acceptOffer.call(tokenAddressFzjZIVI, tokenIdo18hA5z, {from: accounts[1]});
		await contractuzBdCU.acceptOffer.call(tokenAddressh1AypQ7, tokenId0WPvnV, {from: "0x0000000000000000000000000000000000000001"});
		await contractuzBdCU.scribeNFT.call(tokenAddressNgDh7pQ, tokenIdawbgIrd, communityAddressRCPWb4A, startingRoyaltiesp4IZqgv, {from: accounts[4]});
		await contractuzBdCU.giftLexART.call(tokenAddresskyn7B07, tokenIdfhDXaRy, communityAddressmlkUXJO, {from: accounts[2]});

		await expect(contractuzBdCU.acceptOffer.call(tokenAddressFzjZIVI, tokenIdo18hA5z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractCe8sqrw = await MolScribe.new({from: accounts[3]});
		const tokenIdgFjOH3g = BigInt("1775")
		const tokenAddresshWKUdQc = accounts[4]
		const _molBankscYetGA = accounts[2]
		const _molBankqv4xKVu = accounts[3]
		const tokenIdB4WDBIT = BigInt("933")
		const tokenAddressWxBg72c = accounts[0]
		const _molBank9W8C59 = accounts[3]
		const tokenIdsHr3uZF = BigInt("354")
		const tokenAddresslXQWxzN = accounts[2]
		const nullq875fWe = await contractCe8sqrw.getTokenKey.call(tokenAddresshWKUdQc, tokenIdgFjOH3g, {from: accounts[4]});
		await contractCe8sqrw.updateMolBank.call(_molBankscYetGA, {from: accounts[1]});
		await contractCe8sqrw.updateMolBank.call(_molBankqv4xKVu, {from: accounts[4]});
		const nullgz42f0a = await contractCe8sqrw.getTokenKey.call(tokenAddressWxBg72c, tokenIdB4WDBIT, {from: accounts[3]});
		await contractCe8sqrw.updateMolBank.call(_molBank9W8C59, {from: accounts[4]});
		const nullzabILKV = await contractCe8sqrw.getTokenKey.call(tokenAddresslXQWxzN, tokenIdsHr3uZF, {from: accounts[3]});

		assert.equal(nullq875fWe, 0xfa1deab3a7c5e6302305f8d8e7f6b3016f18c23400000000000000000000000000000000000000000000000000000000000006ef)
		await expect(contractCe8sqrw.updateMolBank.call(_molBankscYetGA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractzWTKqap = await MolScribe.new({from: accounts[2]});
		const tokenIdRKacUtU = BigInt("1496")
		const tokenAddresstnJzkv = accounts[4]
		const transactionValue1L9xLR = BigInt("1794")
		const buyerDPK1lLS = accounts[3]
		const tokenIdnk13cSh = BigInt("426")
		const tokenAddressklQEhW = accounts[0]
		await contractzWTKqap.acceptOffer.call(tokenAddresstnJzkv, tokenIdRKacUtU, {from: accounts[4]});
		await contractzWTKqap.makeOffer.call(tokenAddressklQEhW, tokenIdnk13cSh, buyerDPK1lLS, transactionValue1L9xLR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractzWTKqap.acceptOffer.call(tokenAddresstnJzkv, tokenIdRKacUtU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracthqlekh8 = await MolScribe.new({from: accounts[2]});
		const communityAddressGMCwaG = accounts[1]
		const tokenIdeGyEbI = BigInt("875")
		const tokenAddressWFeioB = "0x0000000000000000000000000000000000000001"
		const tokenIdavzkPdy = BigInt("207")
		const tokenAddressbTtX5xc = accounts[4]
		const transactionValue9JKiJY = BigInt("1794")
		const buyerb9BFKi = accounts[4]
		const tokenIdB4vb0r = BigInt("442")
		const tokenAddressuDB7ya3 = accounts[0]
		await contracthqlekh8.giftLexART.call(tokenAddressWFeioB, tokenIdeGyEbI, communityAddressGMCwaG, {from: accounts[1]});
		const nullAYlch1L = await contracthqlekh8.getTokenKey.call(tokenAddressbTtX5xc, tokenIdavzkPdy, {from: accounts[3]});
		await contracthqlekh8.makeOffer.call(tokenAddressuDB7ya3, tokenIdB4vb0r, buyerb9BFKi, transactionValue9JKiJY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracthqlekh8.giftLexART.call(tokenAddressWFeioB, tokenIdeGyEbI, communityAddressGMCwaG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})