const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractK0Vz0bb = await MolScribe.new({from: accounts[3]});
		const tokenIdrTsVd4t = BigInt("727")
		const tokenAddressXlxGqqJ = accounts[4]
		const _molFeeUygFGjS = BigInt("1697")
		const _molXQH2AHj = accounts[5]
		const _molFeeVzgLc3H = BigInt("1761")
		const startingRoyaltiespX3sziO = BigInt("202")
		const communityAddressCqGPQWf = accounts[2]
		const tokenIdXMwlWQ5 = BigInt("688")
		const tokenAddressjqyxKT1 = accounts[0]
		const startingRoyaltiesGte6IUX = BigInt("230")
		const communityAddressgo83zen = accounts[1]
		const tokenIdIa1zk2j = BigInt("1146")
		const tokenAddressCDJRnPx = accounts[0]
		const nullhVBqnav = await contractK0Vz0bb.getTokenKey.call(tokenAddressXlxGqqJ, tokenIdrTsVd4t, {from: accounts[3]});
		await contractK0Vz0bb.updateMolFees.call(_molFeeUygFGjS, {from: accounts[3]});
		await contractK0Vz0bb.updateMol.call(_molXQH2AHj, {from: accounts[4]});
		await contractK0Vz0bb.updateMolFees.call(_molFeeVzgLc3H, {from: accounts[1]});
		await contractK0Vz0bb.scribeNFT.call(tokenAddressjqyxKT1, tokenIdXMwlWQ5, communityAddressCqGPQWf, startingRoyaltiespX3sziO, {from: accounts[4]});
		await contractK0Vz0bb.scribeNFT.call(tokenAddressCDJRnPx, tokenIdIa1zk2j, communityAddressgo83zen, startingRoyaltiesGte6IUX, {from: accounts[4]});

		assert.equal(nullhVBqnav, 0x3288bfaa0d520ff15876938a07466fe0cfa4311300000000000000000000000000000000000000000000000000000000000002d7)
		await expect(contractK0Vz0bb.updateMolFees.call(_molFeeUygFGjS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractUEMiqNf = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const communityAddressvPDkm9b = accounts[1]
		const tokenIda3CicSn = BigInt("846")
		const tokenAddressNztP5e4 = accounts[3]
		const tokenIdJ9oJbl = BigInt("224")
		const tokenAddressR2ktKoC = accounts[4]
		const tokenIdRBckd4 = BigInt("473")
		const tokenAddresskqbDiKr = accounts[1]
		const _molBankh0hvjpY = accounts[4]
		const _molBankNMdh652 = accounts[3]
		const tokenIdnIqXu6q = BigInt("480")
		const tokenAddressoVzB4Gj = accounts[3]
		await contractUEMiqNf.giftLexART.call(tokenAddressNztP5e4, tokenIda3CicSn, communityAddressvPDkm9b, {from: accounts[2]});
		await contractUEMiqNf.acceptOffer.call(tokenAddressR2ktKoC, tokenIdJ9oJbl, {from: accounts[4]});
		await contractUEMiqNf.acceptOffer.call(tokenAddresskqbDiKr, tokenIdRBckd4, {from: accounts[0]});
		await contractUEMiqNf.updateMolBank.call(_molBankh0hvjpY, {from: accounts[3]});
		await contractUEMiqNf.updateMolBank.call(_molBankNMdh652, {from: accounts[4]});
		const nullV8IyD7K = await contractUEMiqNf.getTokenKey.call(tokenAddressoVzB4Gj, tokenIdnIqXu6q, {from: accounts[4]});
	});

	it('test for MolScribe', async () => {
		const contracthiJ26bp = await MolScribe.new({from: accounts[1]});
		const tokenIdmjlCd61 = BigInt("794")
		const tokenAddresslSDlHb3 = accounts[5]
		const tokenId0VwCrD = BigInt("588")
		const tokenAddresslJp7WCf = accounts[0]
		await contracthiJ26bp.acceptOffer.call(tokenAddresslSDlHb3, tokenIdmjlCd61, {from: accounts[1]});
		const nullrkhmosV = await contracthiJ26bp.getTokenKey.call(tokenAddresslJp7WCf, tokenId0VwCrD, {from: accounts[3]});

		await expect(contracthiJ26bp.acceptOffer.call(tokenAddresslSDlHb3, tokenIdmjlCd61, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractDVknzQ = await MolScribe.new({from: accounts[5]});
		const transactionValuebBWqZG = BigInt("1735")
		const buyerWYzW8Kg = accounts[1]
		const tokenIdEsFNJ0R = BigInt("1776")
		const tokenAddresskhXwDK4 = accounts[3]
		const _molBankSUnxsNc = accounts[4]
		const startingRoyaltieshO7uvLC = BigInt("54")
		const communityAddresswt88mVf = accounts[3]
		const tokenId7XmKpf = BigInt("1396")
		const tokenAddresspBbeUE = "0x0000000000000000000000000000000000000001"
		const tokenIdUNONI3f = BigInt("1686")
		const tokenAddresslXnf54x = accounts[4]
		const communityAddressoeK1mRP = accounts[2]
		const tokenIdnlj7VBo = BigInt("586")
		const tokenAddressX73BOit = accounts[1]
		const transactionValuezprKMFU = BigInt("255")
		const buyerRwwQNyX = accounts[2]
		const tokenIdgibEzkN = BigInt("1388")
		const tokenAddressXM7OHFY = accounts[1]
		await contractDVknzQ.makeOffer.call(tokenAddresskhXwDK4, tokenIdEsFNJ0R, buyerWYzW8Kg, transactionValuebBWqZG, {from: "0x0000000000000000000000000000000000000001"});
		await contractDVknzQ.updateMolBank.call(_molBankSUnxsNc, {from: accounts[3]});
		await contractDVknzQ.scribeNFT.call(tokenAddresspBbeUE, tokenId7XmKpf, communityAddresswt88mVf, startingRoyaltieshO7uvLC, {from: accounts[3]});
		await contractDVknzQ.acceptOffer.call(tokenAddresslXnf54x, tokenIdUNONI3f, {from: accounts[2]});
		await contractDVknzQ.giftLexART.call(tokenAddressX73BOit, tokenIdnlj7VBo, communityAddressoeK1mRP, {from: accounts[0]});
		await contractDVknzQ.makeOffer.call(tokenAddressXM7OHFY, tokenIdgibEzkN, buyerRwwQNyX, transactionValuezprKMFU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractDVknzQ.makeOffer.call(tokenAddresskhXwDK4, tokenIdEsFNJ0R, buyerWYzW8Kg, transactionValuebBWqZG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractFRvwn8g = await MolScribe.new({from: accounts[4]});
		const tokenIdAAEmrEH = BigInt("1509")
		const tokenAddressQpMWVAa = accounts[1]
		const transactionValuesHOwZcO = BigInt("1859")
		const buyerfba3Me0 = accounts[1]
		const tokenIdfIRwh8B = BigInt("1975")
		const tokenAddressJZet6Rz = accounts[2]
		const _molBankdBGYB6O = accounts[0]
		const transactionValueZvlcf26 = BigInt("1179")
		const buyerUZRjZSJ = accounts[5]
		const tokenIdwhlBlaY = BigInt("1152")
		const tokenAddressP5SxxOJ = accounts[3]
		const nullZZJJuSu = await contractFRvwn8g.getTokenKey.call(tokenAddressQpMWVAa, tokenIdAAEmrEH, {from: accounts[2]});
		await contractFRvwn8g.makeOffer.call(tokenAddressJZet6Rz, tokenIdfIRwh8B, buyerfba3Me0, transactionValuesHOwZcO, {from: accounts[0]});
		await contractFRvwn8g.updateMolBank.call(_molBankdBGYB6O, {from: "0x0000000000000000000000000000000000000001"});
		await contractFRvwn8g.makeOffer.call(tokenAddressP5SxxOJ, tokenIdwhlBlaY, buyerUZRjZSJ, transactionValueZvlcf26, {from: accounts[2]});

		await expect(contractFRvwn8g.getTokenKey.call(tokenAddressQpMWVAa, tokenIdAAEmrEH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractIZAwzIA = await MolScribe.new({from: accounts[1]});
		const startingRoyaltiesYK8Cuqp = BigInt("153")
		const communityAddressTkf6Beg = accounts[3]
		const tokenIdBSlGicL = BigInt("1562")
		const tokenAddressJuFpMy5 = accounts[3]
		const transactionValueGbl1lt6 = BigInt("1862")
		const buyercVvH7AP = "0x0000000000000000000000000000000000000001"
		const tokenIdzWa6Ufm = BigInt("93")
		const tokenAddressttdJPt = accounts[3]
		const _molFeepWodiOU = BigInt("1521")
		const _molFeef1AgY3L = BigInt("920")
		const tokenIdZWmx8oY = BigInt("918")
		const tokenAddressYn8YqOG = accounts[5]
		const startingRoyaltiesdHJCI8i = BigInt("27")
		const communityAddresshUPtM7t = accounts[0]
		const tokenIdNgJTNMN = BigInt("1348")
		const tokenAddresspbS9aBi = accounts[3]
		await contractIZAwzIA.scribeNFT.call(tokenAddressJuFpMy5, tokenIdBSlGicL, communityAddressTkf6Beg, startingRoyaltiesYK8Cuqp, {from: accounts[2]});
		await contractIZAwzIA.makeOffer.call(tokenAddressttdJPt, tokenIdzWa6Ufm, buyercVvH7AP, transactionValueGbl1lt6, {from: accounts[2]});
		await contractIZAwzIA.updateMolFees.call(_molFeepWodiOU, {from: accounts[0]});
		await contractIZAwzIA.updateMolFees.call(_molFeef1AgY3L, {from: accounts[2]});
		await contractIZAwzIA.acceptOffer.call(tokenAddressYn8YqOG, tokenIdZWmx8oY, {from: accounts[2]});
		await contractIZAwzIA.scribeNFT.call(tokenAddresspbS9aBi, tokenIdNgJTNMN, communityAddresshUPtM7t, startingRoyaltiesdHJCI8i, {from: accounts[5]});

		await expect(contractIZAwzIA.scribeNFT.call(tokenAddressJuFpMy5, tokenIdBSlGicL, communityAddressTkf6Beg, startingRoyaltiesYK8Cuqp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractJRxsbf9 = await MolScribe.new({from: accounts[1]});
		const communityAddressiJkXy54 = accounts[5]
		const tokenIdng4oqyw = BigInt("1868")
		const tokenAddresstLjm9ds = "0x0000000000000000000000000000000000000001"
		const tokenIdQUE3XRc = BigInt("588")
		const tokenAddresscCswmE0 = accounts[1]
		const _molFeexKzljL7 = BigInt("777")
		const _molBankt2hitFr = accounts[0]
		await contractJRxsbf9.giftLexART.call(tokenAddresstLjm9ds, tokenIdng4oqyw, communityAddressiJkXy54, {from: accounts[0]});
		const nullB6r9vsJ = await contractJRxsbf9.getTokenKey.call(tokenAddresscCswmE0, tokenIdQUE3XRc, {from: accounts[3]});
		await contractJRxsbf9.updateMolFees.call(_molFeexKzljL7, {from: accounts[3]});
		await contractJRxsbf9.updateMolBank.call(_molBankt2hitFr, {from: accounts[2]});

		await expect(contractJRxsbf9.giftLexART.call(tokenAddresstLjm9ds, tokenIdng4oqyw, communityAddressiJkXy54, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})