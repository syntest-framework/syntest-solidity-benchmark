const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractKMb0z3L = await MolScribe.new({from: accounts[2]});
		const transactionValuesLgbrD4 = BigInt("1689")
		const buyercnqhEeX = accounts[0]
		const tokenIdBBN646 = BigInt("1586")
		const tokenAddresstx6wupX = accounts[1]
		const _molBankDpeQiO9 = accounts[4]
		await contractKMb0z3L.makeOffer.call(tokenAddresstx6wupX, tokenIdBBN646, buyercnqhEeX, transactionValuesLgbrD4, {from: accounts[2]});
		await contractKMb0z3L.updateMolBank.call(_molBankDpeQiO9, {from: accounts[2]});

		await expect(contractKMb0z3L.makeOffer.call(tokenAddresstx6wupX, tokenIdBBN646, buyercnqhEeX, transactionValuesLgbrD4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractivmqk8a = await MolScribe.new({from: accounts[0]});
		const _molFeea6eo1Oq = BigInt("1671")
		const tokenIdnJp9xMP = BigInt("547")
		const tokenAddressDvIii9H = accounts[2]
		const startingRoyaltieslg0XBNd = BigInt("95")
		const communityAddresshJfcq50 = "0x0000000000000000000000000000000000000001"
		const tokenIduPQT8Qu = BigInt("968")
		const tokenAddressVDAQki2 = accounts[0]
		const tokenIduxa30pe = BigInt("1326")
		const tokenAddresss189j50 = "0x0000000000000000000000000000000000000001"
		await contractivmqk8a.updateMolFees.call(_molFeea6eo1Oq, {from: accounts[2]});
		const nullczZedwt = await contractivmqk8a.getTokenKey.call(tokenAddressDvIii9H, tokenIdnJp9xMP, {from: accounts[5]});
		await contractivmqk8a.scribeNFT.call(tokenAddressVDAQki2, tokenIduPQT8Qu, communityAddresshJfcq50, startingRoyaltieslg0XBNd, {from: accounts[0]});
		const nullClk1li1 = await contractivmqk8a.getTokenKey.call(tokenAddresss189j50, tokenIduxa30pe, {from: accounts[2]});

		await expect(contractivmqk8a.updateMolFees.call(_molFeea6eo1Oq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractL6xOyr = await MolScribe.new({from: accounts[3]});
		const startingRoyaltiesPA0B8Kt = BigInt("170")
		const communityAddressfYkvDY4 = accounts[1]
		const tokenIdHzRyAJD = BigInt("1239")
		const tokenAddressdwMWBZ0 = accounts[1]
		const tokenIdoXIjNu5 = BigInt("135")
		const tokenAddressNFbiSUt = accounts[2]
		const tokenIdi5P3ZMx = BigInt("340")
		const tokenAddressehH9yHn = accounts[3]
		const tokenIdUYOBLQo = BigInt("1372")
		const tokenAddressnQHGoC = accounts[5]
		await contractL6xOyr.scribeNFT.call(tokenAddressdwMWBZ0, tokenIdHzRyAJD, communityAddressfYkvDY4, startingRoyaltiesPA0B8Kt, {from: "0x0000000000000000000000000000000000000001"});
		await contractL6xOyr.acceptOffer.call(tokenAddressNFbiSUt, tokenIdoXIjNu5, {from: accounts[2]});
		await contractL6xOyr.acceptOffer.call(tokenAddressehH9yHn, tokenIdi5P3ZMx, {from: accounts[4]});
		const nullTXKiU7q = await contractL6xOyr.getTokenKey.call(tokenAddressnQHGoC, tokenIdUYOBLQo, {from: accounts[0]});

		await expect(contractL6xOyr.scribeNFT.call(tokenAddressdwMWBZ0, tokenIdHzRyAJD, communityAddressfYkvDY4, startingRoyaltiesPA0B8Kt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractdhgRpnH = await MolScribe.new({from: accounts[3]});
		const tokenIdiWUnzu = BigInt("549")
		const tokenAddressKvrBFPs = accounts[1]
		const _molFeetedZ5uw = BigInt("385")
		const startingRoyaltiessOl98nw = BigInt("97")
		const communityAddresszo9mAPg = accounts[1]
		const tokenIdqHDKW3E = BigInt("9")
		const tokenAddressaZ1oMhM = accounts[2]
		await contractdhgRpnH.acceptOffer.call(tokenAddressKvrBFPs, tokenIdiWUnzu, {from: accounts[1]});
		await contractdhgRpnH.updateMolFees.call(_molFeetedZ5uw, {from: accounts[0]});
		await contractdhgRpnH.scribeNFT.call(tokenAddressaZ1oMhM, tokenIdqHDKW3E, communityAddresszo9mAPg, startingRoyaltiessOl98nw, {from: accounts[2]});

		await expect(contractdhgRpnH.acceptOffer.call(tokenAddressKvrBFPs, tokenIdiWUnzu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractYOVnJVW = await MolScribe.new({from: accounts[4]});
		const communityAddresskjxnWaS = "0x0000000000000000000000000000000000000001"
		const tokenIdbFWT6Bq = BigInt("173")
		const tokenAddressnDomMy6 = accounts[3]
		const _molFeeuNY6leZ = BigInt("1876")
		const tokenIdQC0ybII = BigInt("1006")
		const tokenAddressFOxQ2e = accounts[3]
		const startingRoyaltiesnpAST5l = BigInt("2")
		const communityAddresstzNZggq = accounts[2]
		const tokenId7VhZhB = BigInt("1863")
		const tokenAddressE3Aeg4g = accounts[2]
		const transactionValue7kOoyI = BigInt("1710")
		const buyerSLO8oig = accounts[4]
		const tokenIdiFxZpfP = BigInt("942")
		const tokenAddressRqQkQsd = accounts[2]
		await contractYOVnJVW.giftLexART.call(tokenAddressnDomMy6, tokenIdbFWT6Bq, communityAddresskjxnWaS, {from: accounts[1]});
		await contractYOVnJVW.updateMolFees.call(_molFeeuNY6leZ, {from: accounts[0]});
		const nullJZ83UWZ = await contractYOVnJVW.getTokenKey.call(tokenAddressFOxQ2e, tokenIdQC0ybII, {from: accounts[3]});
		await contractYOVnJVW.scribeNFT.call(tokenAddressE3Aeg4g, tokenId7VhZhB, communityAddresstzNZggq, startingRoyaltiesnpAST5l, {from: accounts[3]});
		await contractYOVnJVW.makeOffer.call(tokenAddressRqQkQsd, tokenIdiFxZpfP, buyerSLO8oig, transactionValue7kOoyI, {from: accounts[1]});

		await expect(contractYOVnJVW.giftLexART.call(tokenAddressnDomMy6, tokenIdbFWT6Bq, communityAddresskjxnWaS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract6BcU25 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const transactionValuetHH6AqN = BigInt("314")
		const buyerVWKZlL = accounts[5]
		const tokenIdjnaIKui = BigInt("568")
		const tokenAddressmeL6XZM = accounts[4]
		const startingRoyaltiesNezAjH = BigInt("194")
		const communityAddressSylddI3 = accounts[3]
		const tokenIdG7ErWr7 = BigInt("653")
		const tokenAddressSiwxH4g = accounts[5]
		await contract6BcU25.makeOffer.call(tokenAddressmeL6XZM, tokenIdjnaIKui, buyerVWKZlL, transactionValuetHH6AqN, {from: accounts[4]});
		await contract6BcU25.scribeNFT.call(tokenAddressSiwxH4g, tokenIdG7ErWr7, communityAddressSylddI3, startingRoyaltiesNezAjH, {from: accounts[2]});
	});

	it('test for MolScribe', async () => {
		const contracty22jq3 = await MolScribe.new({from: accounts[3]});
		const tokenIdNfdsvCh = BigInt("1372")
		const tokenAddresszEUW8PH = accounts[6]
		const nullctxj4Pd = await contracty22jq3.getTokenKey.call(tokenAddresszEUW8PH, tokenIdNfdsvCh, {from: accounts[0]});

		await expect(contracty22jq3.getTokenKey.call(tokenAddresszEUW8PH, tokenIdNfdsvCh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})