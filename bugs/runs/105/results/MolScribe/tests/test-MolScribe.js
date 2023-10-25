const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractlfdNGO = await MolScribe.new({from: accounts[2]});
		const tokenIdqK9DBRk = BigInt("1398")
		const tokenAddressHqrgj4i = accounts[2]
		const startingRoyaltiesoQroNuK = BigInt("248")
		const communityAddressBI7oro = "0x0000000000000000000000000000000000000001"
		const tokenIdgRt43Xl = BigInt("376")
		const tokenAddressU0HZNIY = accounts[4]
		const tokenIdFM9oePF = BigInt("739")
		const tokenAddressgSLw8mt = accounts[1]
		const tokenIdl6QKnkC = BigInt("1404")
		const tokenAddressBpVOj8 = accounts[3]
		const nullEAz8Zhd = await contractlfdNGO.getTokenKey.call(tokenAddressHqrgj4i, tokenIdqK9DBRk, {from: accounts[1]});
		await contractlfdNGO.scribeNFT.call(tokenAddressU0HZNIY, tokenIdgRt43Xl, communityAddressBI7oro, startingRoyaltiesoQroNuK, {from: accounts[1]});
		await contractlfdNGO.acceptOffer.call(tokenAddressgSLw8mt, tokenIdFM9oePF, {from: "0x0000000000000000000000000000000000000001"});
		await contractlfdNGO.acceptOffer.call(tokenAddressBpVOj8, tokenIdl6QKnkC, {from: accounts[0]});

		await expect(contractlfdNGO.getTokenKey.call(tokenAddressHqrgj4i, tokenIdqK9DBRk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractDnGCRJR = await MolScribe.new({from: accounts[4]});
		const tokenIdu8ubUP5 = BigInt("790")
		const tokenAddressYuZQK2D = accounts[3]
		const startingRoyaltiesXAUD8z2 = BigInt("129")
		const communityAddressu7X5JiT = accounts[0]
		const tokenIdhUbIItC = BigInt("154")
		const tokenAddresshET3Ane = accounts[4]
		const _molFeefzhgTiS = BigInt("524")
		const tokenIdVYgJPke = BigInt("1254")
		const tokenAddressb9f13Os = accounts[0]
		const null38JJJD = await contractDnGCRJR.getTokenKey.call(tokenAddressYuZQK2D, tokenIdu8ubUP5, {from: accounts[2]});
		await contractDnGCRJR.scribeNFT.call(tokenAddresshET3Ane, tokenIdhUbIItC, communityAddressu7X5JiT, startingRoyaltiesXAUD8z2, {from: accounts[0]});
		await contractDnGCRJR.updateMolFees.call(_molFeefzhgTiS, {from: accounts[4]});
		await contractDnGCRJR.acceptOffer.call(tokenAddressb9f13Os, tokenIdVYgJPke, {from: accounts[2]});

		assert.equal(null38JJJD, 0x9e1c5e21243f537d2022c0444eacd52a430b97a30000000000000000000000000000000000000000000000000000000000000316)
		await expect(contractDnGCRJR.scribeNFT.call(tokenAddresshET3Ane, tokenIdhUbIItC, communityAddressu7X5JiT, startingRoyaltiesXAUD8z2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractV37z6W = await MolScribe.new({from: accounts[4]});
		const tokenIdFvGvIiZ = BigInt("914")
		const tokenAddressUTjbApk = accounts[1]
		const _molFeed3i9OX = BigInt("332")
		const tokenIdZdOctae = BigInt("171")
		const tokenAddressxb26cEA = accounts[0]
		const _molFeeVDrfUL = BigInt("1341")
		const transactionValuepEtk6B = BigInt("1038")
		const buyerAzNrgel = accounts[2]
		const tokenIdztvTdzZ = BigInt("35")
		const tokenAddressERbnM5z = accounts[2]
		const startingRoyaltiesHEZyJ9P = BigInt("203")
		const communityAddressNSxB5D = accounts[3]
		const tokenIdlfCcz15 = BigInt("131")
		const tokenAddress4cLKOR = accounts[1]
		await contractV37z6W.acceptOffer.call(tokenAddressUTjbApk, tokenIdFvGvIiZ, {from: "0x0000000000000000000000000000000000000001"});
		await contractV37z6W.updateMolFees.call(_molFeed3i9OX, {from: accounts[1]});
		const nullVBgfOup = await contractV37z6W.getTokenKey.call(tokenAddressxb26cEA, tokenIdZdOctae, {from: accounts[5]});
		await contractV37z6W.updateMolFees.call(_molFeeVDrfUL, {from: accounts[1]});
		await contractV37z6W.makeOffer.call(tokenAddressERbnM5z, tokenIdztvTdzZ, buyerAzNrgel, transactionValuepEtk6B, {from: accounts[0]});
		await contractV37z6W.scribeNFT.call(tokenAddress4cLKOR, tokenIdlfCcz15, communityAddressNSxB5D, startingRoyaltiesHEZyJ9P, {from: accounts[4]});

		await expect(contractV37z6W.acceptOffer.call(tokenAddressUTjbApk, tokenIdFvGvIiZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractt50UOjv = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const transactionValueh6Rsi3 = BigInt("2004")
		const buyerLDLq8xF = accounts[1]
		const tokenIdnGMe69 = BigInt("1930")
		const tokenAddressHH4WSK2 = accounts[4]
		const communityAddresspVXcy4X = accounts[2]
		const tokenIdsUMczP1 = BigInt("793")
		const tokenAddressEtpIYZw = accounts[3]
		const _molFeezzx2w0L = BigInt("1485")
		const _molFeeTJOxmzD = BigInt("1608")
		const tokenIdcVLdrHJ = BigInt("322")
		const tokenAddressH4viE3 = accounts[0]
		await contractt50UOjv.makeOffer.call(tokenAddressHH4WSK2, tokenIdnGMe69, buyerLDLq8xF, transactionValueh6Rsi3, {from: accounts[4]});
		await contractt50UOjv.giftLexART.call(tokenAddressEtpIYZw, tokenIdsUMczP1, communityAddresspVXcy4X, {from: accounts[3]});
		await contractt50UOjv.updateMolFees.call(_molFeezzx2w0L, {from: accounts[3]});
		await contractt50UOjv.updateMolFees.call(_molFeeTJOxmzD, {from: accounts[1]});
		const nullNCKD64C = await contractt50UOjv.getTokenKey.call(tokenAddressH4viE3, tokenIdcVLdrHJ, {from: accounts[1]});
	});

	it('test for MolScribe', async () => {
		const contracti1VinUt = await MolScribe.new({from: accounts[5]});
		const _molBankeeXeNhR = accounts[4]
		const tokenIdoLitI9G = BigInt("1117")
		const tokenAddressgQnjRso = accounts[0]
		const startingRoyaltiesjeC3zt = BigInt("182")
		const communityAddressCsRXmoh = accounts[5]
		const tokenIdMRDgxHL = BigInt("319")
		const tokenAddress3fkuCv = "0x0000000000000000000000000000000000000001"
		await contracti1VinUt.updateMolBank.call(_molBankeeXeNhR, {from: accounts[3]});
		await contracti1VinUt.acceptOffer.call(tokenAddressgQnjRso, tokenIdoLitI9G, {from: accounts[4]});
		await contracti1VinUt.scribeNFT.call(tokenAddress3fkuCv, tokenIdMRDgxHL, communityAddressCsRXmoh, startingRoyaltiesjeC3zt, {from: accounts[3]});

		await expect(contracti1VinUt.updateMolBank.call(_molBankeeXeNhR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractDa8HmZz = await MolScribe.new({from: accounts[0]});
		const communityAddressVJWnPSB = accounts[2]
		const tokenIdo2mFi9I = BigInt("1919")
		const tokenAddressx3hdt4o = accounts[5]
		const tokenIda2mV94c = BigInt("1741")
		const tokenAddressKbsDW03 = accounts[1]
		const _molFeeKd5OkZp = BigInt("1835")
		const tokenIdQ7tKCQR = BigInt("1814")
		const tokenAddressT123Ahd = accounts[0]
		await contractDa8HmZz.giftLexART.call(tokenAddressx3hdt4o, tokenIdo2mFi9I, communityAddressVJWnPSB, {from: "0x0000000000000000000000000000000000000001"});
		await contractDa8HmZz.acceptOffer.call(tokenAddressKbsDW03, tokenIda2mV94c, {from: accounts[0]});
		await contractDa8HmZz.updateMolFees.call(_molFeeKd5OkZp, {from: accounts[0]});
		await contractDa8HmZz.acceptOffer.call(tokenAddressT123Ahd, tokenIdQ7tKCQR, {from: accounts[1]});

		await expect(contractDa8HmZz.giftLexART.call(tokenAddressx3hdt4o, tokenIdo2mFi9I, communityAddressVJWnPSB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractrXOQcsH = await MolScribe.new({from: accounts[4]});
		const transactionValuef58vJz = BigInt("1750")
		const buyerDxHjE8e = accounts[0]
		const tokenIdmRRwedR = BigInt("133")
		const tokenAddressWWjhilT = accounts[3]
		const transactionValuemuOsGC5 = BigInt("459")
		const buyerAej5W3F = accounts[3]
		const tokenIduv1ZpxL = BigInt("388")
		const tokenAddresspsiI5Ai = accounts[2]
		const tokenIddlWXOsl = BigInt("1743")
		const tokenAddress0cZovg = accounts[5]
		await contractrXOQcsH.makeOffer.call(tokenAddressWWjhilT, tokenIdmRRwedR, buyerDxHjE8e, transactionValuef58vJz, {from: accounts[1]});
		await contractrXOQcsH.makeOffer.call(tokenAddresspsiI5Ai, tokenIduv1ZpxL, buyerAej5W3F, transactionValuemuOsGC5, {from: accounts[4]});
		await contractrXOQcsH.acceptOffer.call(tokenAddress0cZovg, tokenIddlWXOsl, {from: accounts[2]});

		await expect(contractrXOQcsH.makeOffer.call(tokenAddressWWjhilT, tokenIdmRRwedR, buyerDxHjE8e, transactionValuef58vJz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})