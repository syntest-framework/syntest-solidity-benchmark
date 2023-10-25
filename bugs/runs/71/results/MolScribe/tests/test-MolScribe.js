const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractlqYNGyL = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molwYGwFsZ = accounts[1]
		const communityAddressL5FSp5K = accounts[2]
		const tokenIdH5ywgQK = BigInt("876")
		const tokenAddresscEn7HKA = accounts[3]
		const tokenIdvORwTuT = BigInt("703")
		const tokenAddressJxZS1VH = accounts[2]
		const tokenIdP6v5Q56 = BigInt("780")
		const tokenAddressFAjjI3Y = accounts[1]
		const tokenIdZVBHczr = BigInt("1495")
		const tokenAddressyKoeLgK = accounts[4]
		const tokenIdRwxGnz4 = BigInt("1049")
		const tokenAddressj9K9SGT = accounts[4]
		await contractlqYNGyL.updateMol.call(_molwYGwFsZ, {from: accounts[3]});
		await contractlqYNGyL.giftLexART.call(tokenAddresscEn7HKA, tokenIdH5ywgQK, communityAddressL5FSp5K, {from: accounts[4]});
		const nulldWpdnwS = await contractlqYNGyL.getTokenKey.call(tokenAddressJxZS1VH, tokenIdvORwTuT, {from: accounts[3]});
		const nullS06Pfp6 = await contractlqYNGyL.getTokenKey.call(tokenAddressFAjjI3Y, tokenIdP6v5Q56, {from: accounts[3]});
		await contractlqYNGyL.acceptOffer.call(tokenAddressyKoeLgK, tokenIdZVBHczr, {from: accounts[3]});
		await contractlqYNGyL.acceptOffer.call(tokenAddressj9K9SGT, tokenIdRwxGnz4, {from: accounts[4]});
	});

	it('test for MolScribe', async () => {
		const contractaQ8bhev = await MolScribe.new({from: accounts[4]});
		const transactionValueJ3yfZqA = BigInt("1227")
		const buyerP8whqs = accounts[5]
		const tokenId8XTZvb = BigInt("128")
		const tokenAddressIO6gjGb = accounts[4]
		const _molNLnJ911 = accounts[3]
		await contractaQ8bhev.makeOffer.call(tokenAddressIO6gjGb, tokenId8XTZvb, buyerP8whqs, transactionValueJ3yfZqA, {from: accounts[4]});
		await contractaQ8bhev.updateMol.call(_molNLnJ911, {from: accounts[2]});

		await expect(contractaQ8bhev.makeOffer.call(tokenAddressIO6gjGb, tokenId8XTZvb, buyerP8whqs, transactionValueJ3yfZqA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractw5balFI = await MolScribe.new({from: accounts[1]});
		const startingRoyaltieskvoSWgb = BigInt("193")
		const communityAddressrUwJxLa = accounts[3]
		const tokenIdQSiyX9k = BigInt("1784")
		const tokenAddressxAmySl = accounts[5]
		const _molVRwnRD = accounts[4]
		const tokenIdHTYHkbC = BigInt("864")
		const tokenAddressL9bKPZI = "0x0000000000000000000000000000000000000001"
		const tokenIdqdpzO4K = BigInt("1377")
		const tokenAddresstu9yyRW = "0x0000000000000000000000000000000000000001"
		const tokenIdiSkUMEZ = BigInt("1751")
		const tokenAddressI4I80TQ = accounts[1]
		await contractw5balFI.scribeNFT.call(tokenAddressxAmySl, tokenIdQSiyX9k, communityAddressrUwJxLa, startingRoyaltieskvoSWgb, {from: accounts[4]});
		await contractw5balFI.updateMol.call(_molVRwnRD, {from: accounts[4]});
		const nully8AEXjM = await contractw5balFI.getTokenKey.call(tokenAddressL9bKPZI, tokenIdHTYHkbC, {from: accounts[1]});
		const null4Dsvah = await contractw5balFI.getTokenKey.call(tokenAddresstu9yyRW, tokenIdqdpzO4K, {from: accounts[1]});
		await contractw5balFI.acceptOffer.call(tokenAddressI4I80TQ, tokenIdiSkUMEZ, {from: accounts[0]});

		await expect(contractw5balFI.scribeNFT.call(tokenAddressxAmySl, tokenIdQSiyX9k, communityAddressrUwJxLa, startingRoyaltieskvoSWgb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractXCd3FrK = await MolScribe.new({from: accounts[5]});
		const tokenIdOJ4C2Dl = BigInt("1167")
		const tokenAddressJbFiuW5 = accounts[1]
		const communityAddressbc1ltIU = accounts[0]
		const tokenIdHxIK5gh = BigInt("581")
		const tokenAddressF5CLAC4 = accounts[3]
		await contractXCd3FrK.acceptOffer.call(tokenAddressJbFiuW5, tokenIdOJ4C2Dl, {from: accounts[3]});
		await contractXCd3FrK.giftLexART.call(tokenAddressF5CLAC4, tokenIdHxIK5gh, communityAddressbc1ltIU, {from: accounts[4]});

		await expect(contractXCd3FrK.acceptOffer.call(tokenAddressJbFiuW5, tokenIdOJ4C2Dl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractI03EEPn = await MolScribe.new({from: accounts[1]});
		const _molFeeSAYiEtE = BigInt("762")
		const _molFeeMGLs0KQ = BigInt("1624")
		const startingRoyaltieslpdE232 = BigInt("134")
		const communityAddresssPgEa5M = accounts[2]
		const tokenIdOimb2Z = BigInt("1793")
		const tokenAddressCmo0vVo = accounts[5]
		await contractI03EEPn.updateMolFees.call(_molFeeSAYiEtE, {from: accounts[1]});
		await contractI03EEPn.updateMolFees.call(_molFeeMGLs0KQ, {from: accounts[2]});
		await contractI03EEPn.scribeNFT.call(tokenAddressCmo0vVo, tokenIdOimb2Z, communityAddresssPgEa5M, startingRoyaltieslpdE232, {from: accounts[2]});

		await expect(contractI03EEPn.updateMolFees.call(_molFeeSAYiEtE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractI0hVhXG = await MolScribe.new({from: accounts[5]});
		const communityAddressmJTJgJT = accounts[0]
		const tokenIdY77pWMW = BigInt("581")
		const tokenAddressEWbwDFb = accounts[3]
		await contractI0hVhXG.giftLexART.call(tokenAddressEWbwDFb, tokenIdY77pWMW, communityAddressmJTJgJT, {from: accounts[4]});

		await expect(contractI0hVhXG.giftLexART.call(tokenAddressEWbwDFb, tokenIdY77pWMW, communityAddressmJTJgJT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractx9gmYXz = await MolScribe.new({from: accounts[2]});
		const tokenIdMHp2pV = BigInt("1927")
		const tokenAddressHNNqv2O = accounts[3]
		const tokenIdyJGQCvC = BigInt("1029")
		const tokenAddressqkVEktU = accounts[4]
		const tokenId0SAnf4 = BigInt("930")
		const tokenAddressiVwLJij = accounts[0]
		const nullywRG1ve = await contractx9gmYXz.getTokenKey.call(tokenAddressHNNqv2O, tokenIdMHp2pV, {from: "0x0000000000000000000000000000000000000001"});
		const null6kzyRe = await contractx9gmYXz.getTokenKey.call(tokenAddressqkVEktU, tokenIdyJGQCvC, {from: accounts[0]});
		await contractx9gmYXz.acceptOffer.call(tokenAddressiVwLJij, tokenId0SAnf4, {from: accounts[3]});

		assert.equal(null6kzyRe, 0x90458d00e8c22682ed7696a41b9e4eeed71cee090000000000000000000000000000000000000000000000000000000000000405)
		assert.equal(nullywRG1ve, 0x69f29ae1221502286fb80c9477578d51e26b14a00000000000000000000000000000000000000000000000000000000000000787)
		await expect(contractx9gmYXz.acceptOffer.call(tokenAddressiVwLJij, tokenId0SAnf4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})