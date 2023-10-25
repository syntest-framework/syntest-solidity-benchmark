const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozK7IY6K = await Cryptoz.new({from: accounts[2]});
		const uintCMG8DsT = BigInt("153")
		const uintkI4i9ST = BigInt("735")
		const uintV1VkVWq = BigInt("463")
		const uintAcDGgBf = BigInt("1170")
		const uintcr2A2kf = BigInt("436")
		const addressjTBBLjr = accounts[5]
		const uintyZcwSJ = BigInt("416")
		const uintVIoHNcx = BigInt("1094")
		const addressuWXcJmi = accounts[4]
//		const boolNEk5rxo = await CryptozK7IY6K.addTocardType.call(uintcr2A2kf, uintAcDGgBf, uintV1VkVWq, uintkI4i9ST, uintCMG8DsT, {from: accounts[4]});
//		const uint256arraypGytjE6 = await CryptozK7IY6K.tokensOfOwner.call(addressjTBBLjr, {from: accounts[4]});
//		const uint32mDLlHmW = await CryptozK7IY6K.getFreeCard.call(uintyZcwSJ, {from: accounts[4]});
//		await CryptozK7IY6K.getTokensByRarity.call({from: accounts[4]});
//		const uint256heYPo2h = await CryptozK7IY6K.tokenByIndex.call(uintVIoHNcx, {from: "0x0000000000000000000000000000000000000001"});
//		const addressrM4vFN8 = await CryptozK7IY6K.linkMySponsor.call(addressuWXcJmi, {from: accounts[3]});

		await expect(CryptozK7IY6K.addTocardType.call(uintcr2A2kf, uintAcDGgBf, uintV1VkVWq, uintkI4i9ST, uintCMG8DsT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozv4fAZkk = await Cryptoz.new({from: accounts[4]});
		const uintFhb79bc = BigInt("63")
		const uintsCaKdYw = BigInt("652")
		const address8O45sQ = accounts[2]
		const addressz3ztx4 = accounts[0]
//		const uint32PBaE1CX = await Cryptozv4fAZkk.isValidCard.call(uintFhb79bc, {from: accounts[0]});
//		const uint256bec9ETI = await Cryptozv4fAZkk.sacrifice.call(uintsCaKdYw, {from: "0x0000000000000000000000000000000000000001"});
//		await Cryptozv4fAZkk.buyBoosterCardAndOpen.call({from: accounts[1]});
//		const uint256arrayq3cN7AH = await Cryptozv4fAZkk.tokensOfOwner.call(address8O45sQ, {from: accounts[0]});
//		const uintJDvJRk = await Cryptozv4fAZkk.getTimeToDailyBonus.call(addressz3ztx4, {from: accounts[1]});

		await expect(Cryptozv4fAZkk.isValidCard.call(uintFhb79bc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozxqSLdS9 = await Cryptoz.new({from: accounts[2]});
		const uintOEZO934 = BigInt("937")
		const uintK561ag = BigInt("1699")
		const addressOONyb3g = accounts[2]
		const stringS3WEgnf = await CryptozxqSLdS9.symbol.call({from: accounts[2]});
//		const boolaT2Eh4r = await CryptozxqSLdS9.buyCard.call(uintOEZO934, {from: accounts[3]});
//		const uint32uLyofU3 = await CryptozxqSLdS9.getFreeCard.call(uintK561ag, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256arrayAiuDNu6 = await CryptozxqSLdS9.tokensOfOwner.call(addressOONyb3g, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringS3WEgnf, "Cryptoz")
		await expect(CryptozxqSLdS9.buyCard.call(uintOEZO934, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozVfluYBS = await Cryptoz.new({from: accounts[0]});
		const uintXFUPA2f = BigInt("34")
		const uintOc7VBx = BigInt("1014")
		const stringU1m3CxG = await CryptozVfluYBS.tokenURI.call(uintXFUPA2f, {from: accounts[1]});
//		const uint256KiRz3tX = await CryptozVfluYBS.sacrifice.call(uintOc7VBx, {from: accounts[1]});
//		const stringyEES3gZ = await CryptozVfluYBS.name.call({from: accounts[3]});
//		await CryptozVfluYBS.buyBoosterCardAndOpen.call({from: accounts[2]});

		assert.equal(stringU1m3CxG, "https://cryptoz.cards/data/34")
		await expect(CryptozVfluYBS.sacrifice.call(uintOc7VBx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHcyy9Ph = await Cryptoz.new({from: accounts[0]});
		const addressjnzHYev = accounts[2]
		const uintcmyYIC2 = BigInt("486")
		const addresstnneJc5 = accounts[3]
		const uint5BHQKK = await CryptozHcyy9Ph.getTimeToDailyBonus.call(addressjnzHYev, {from: accounts[4]});
//		await CryptozHcyy9Ph.getOwnedCard.call(uintcmyYIC2, {from: accounts[2]});
//		const addresswayusbH = await CryptozHcyy9Ph.initialize.call(addresstnneJc5, {from: accounts[0]});
//		await CryptozHcyy9Ph.getBonusBoosters.call({from: accounts[3]});

		assert.equal(uint5BHQKK, BigInt("1630203328"))
		await expect(CryptozHcyy9Ph.getOwnedCard.call(uintcmyYIC2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZ628NEi = await Cryptoz.new({from: accounts[0]});
		const uintSsgBd3G = BigInt("1422")
		const addressK50SIx7 = accounts[0]
		const addressR1wyJJq = accounts[4]
		const uintSD8qK11 = BigInt("49")
		const uinteCKlXMT = BigInt("1034")
		const uintQlYImOc = BigInt("137")
		const uintTTSn0L7 = BigInt("1736")
		const uintPa6S9xv = BigInt("1684")
//		const addressCHoAnsU = await CryptozZ628NEi.transferFrom.call(addressR1wyJJq, addressK50SIx7, uintSsgBd3G, {from: accounts[2]});
//		const boolAVasqV = await CryptozZ628NEi.addTocardType.call(uintPa6S9xv, uintTTSn0L7, uintQlYImOc, uinteCKlXMT, uintSD8qK11, {from: accounts[1]});
//		await CryptozZ628NEi.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozZ628NEi.transferFrom.call(addressR1wyJJq, addressK50SIx7, uintSsgBd3G, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozijeAOCO = await Cryptoz.new({from: accounts[2]});
		const uintF6w2ChT = BigInt("544")
		const addressqnkXHB = accounts[0]
		const addressBceZoYg = accounts[1]
		const addressYPpa026 = accounts[0]
		const uintiJpDxGB = BigInt("2036")
		const addressgYgmuEc = "0x0000000000000000000000000000000000000001"
		const addressd683mM = accounts[0]
//		const boolQVq0IL = await CryptozijeAOCO.openBoosterCard.call(uintF6w2ChT, {from: accounts[5]});
//		const uint256arrayAlQKVdz = await CryptozijeAOCO.tokensOfOwner.call(addressqnkXHB, {from: accounts[5]});
//		const uint256arrayTr3flQ = await CryptozijeAOCO.tokensOfOwner.call(addressBceZoYg, {from: accounts[1]});
//		const uintsNnvPpz = await CryptozijeAOCO.getTimeToDailyBonus.call(addressYPpa026, {from: accounts[3]});
//		const addressW6wpZlH = await CryptozijeAOCO.transferFrom.call(addressd683mM, addressgYgmuEc, uintiJpDxGB, {from: accounts[2]});

		await expect(CryptozijeAOCO.openBoosterCard.call(uintF6w2ChT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUzalHDw = await Cryptoz.new({from: accounts[2]});
		const addressl9wGEVb = accounts[2]
		const uint256arrayoMZVUd = await CryptozUzalHDw.tokensOfOwner.call(addressl9wGEVb, {from: accounts[5]});
		const uint256HP6cSQ = await CryptozUzalHDw.totalSupply.call({from: accounts[0]});

		assert.equal(uint256HP6cSQ, BigInt("0"))
		assert.equal(uint256arrayoMZVUd, BigInt(""))
	});

	it('test for Cryptoz', async () => {
		const CryptozpjxqSB = await Cryptoz.new({from: accounts[2]});
		const address5NSoVa = "0x0000000000000000000000000000000000000000"
		const addressh8W85ww = accounts[1]
		const uinti1VVn0F = BigInt("1967")
		const address3Z4eB8 = accounts[0]
//		const addressEYRLMQ1 = await CryptozpjxqSB.linkMySponsor.call(address5NSoVa, {from: accounts[1]});
//		const addressnnZqKhF = await CryptozpjxqSB.linkMySponsor.call(addressh8W85ww, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ftm9on = await CryptozpjxqSB.tokenOfOwnerByIndex.call(address3Z4eB8, uinti1VVn0F, {from: accounts[1]});

		await expect(CryptozpjxqSB.linkMySponsor.call(address5NSoVa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozLICb83 = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNGxZDz5 = BigInt("1067")
		const addressrV1xcEf = accounts[1]
		const addresshSbAYFO = accounts[0]
		const uint32qzJHMls = await CryptozLICb83.isValidCard.call(uintNGxZDz5, {from: accounts[1]});
		const uintLvKkoSt = await CryptozLICb83.getTimeToDailyBonus.call(addressrV1xcEf, {from: accounts[3]});
		const addressCsElg0r = await CryptozLICb83.linkMySponsor.call(addresshSbAYFO, {from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const CryptozHcyy9Ph = await Cryptoz.new({from: accounts[0]});
		const addressDgSfHtV = accounts[2]
		const addressr9rv402 = accounts[3]
		const uint5BHQKK = await CryptozHcyy9Ph.getTimeToDailyBonus.call(addressDgSfHtV, {from: accounts[4]});
		const addresswayusbH = await CryptozHcyy9Ph.initialize.call(addressr9rv402, {from: accounts[0]});
//		await CryptozHcyy9Ph.getBonusBoosters.call({from: accounts[3]});

		assert.equal(uint5BHQKK, BigInt("1630203342"))
		await expect(CryptozHcyy9Ph.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozq4hZU2o = await Cryptoz.new({from: accounts[3]});
		const uintOO4GhqS = BigInt("1263")
		const uintaXQ99Sj = BigInt("548")
//		await Cryptozq4hZU2o.buyBoosterCardAndOpen.call({from: accounts[1]});
//		const booltVh5xrD = await Cryptozq4hZU2o.openBoosterCard.call(uintOO4GhqS, {from: accounts[3]});
//		const boolJxB7fKS = await Cryptozq4hZU2o.buyCard.call(uintaXQ99Sj, {from: accounts[4]});

		await expect(Cryptozq4hZU2o.buyBoosterCardAndOpen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHcyy9Ph = await Cryptoz.new({from: accounts[0]});
		const addressm4LKYhx = accounts[2]
		const uintFmjsN5r = BigInt("1921")
		const address5mJxI0 = accounts[4]
		const stringLps65mD = await CryptozHcyy9Ph.name.call({from: accounts[3]});
		const uint5BHQKK = await CryptozHcyy9Ph.getTimeToDailyBonus.call(addressm4LKYhx, {from: accounts[4]});
		const stringCoMmuD = await CryptozHcyy9Ph.tokenURI.call(uintFmjsN5r, {from: accounts[2]});
		const addresswayusbH = await CryptozHcyy9Ph.initialize.call(address5mJxI0, {from: accounts[0]});
//		await CryptozHcyy9Ph.getBonusBoosters.call({from: accounts[3]});

		assert.equal(stringCoMmuD, "https://cryptoz.cards/data/1921")
		assert.equal(stringLps65mD, "Cryptoz Cards")
		assert.equal(uint5BHQKK, BigInt("1630203338"))
		await expect(CryptozHcyy9Ph.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHcyy9Ph = await Cryptoz.new({from: accounts[0]});
		const uintamaR8TH = BigInt("1166")
		const addressedxPTq7 = accounts[2]
		const addresshnqtPB = accounts[4]
//		const uint256x8x1DAR = await CryptozHcyy9Ph.tokenByIndex.call(uintamaR8TH, {from: accounts[3]});
//		const uint5BHQKK = await CryptozHcyy9Ph.getTimeToDailyBonus.call(addressedxPTq7, {from: accounts[4]});
//		const addresswayusbH = await CryptozHcyy9Ph.initialize.call(addresshnqtPB, {from: accounts[0]});
//		await CryptozHcyy9Ph.getBonusBoosters.call({from: accounts[3]});

		await expect(CryptozHcyy9Ph.tokenByIndex.call(uintamaR8TH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpjxqSB = await Cryptoz.new({from: accounts[2]});
		const addressWul343p = accounts[1]
		const uintD4eWkO = await CryptozpjxqSB.getTimeToDailyBonus.call(addressWul343p, {from: accounts[1]});
//		await CryptozpjxqSB.getTokensByRarity.call({from: accounts[1]});
//		await CryptozpjxqSB.f.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintD4eWkO, BigInt("1630203344"))
		await expect(CryptozpjxqSB.getTokensByRarity.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpjxqSB = await Cryptoz.new({from: accounts[2]});
		const uintxVJT5LT = BigInt("14")
		const uintWnawYe = BigInt("2002")
		const uintsfBKkIb = BigInt("2027")
		const uintLqtlPdD = BigInt("166")
		const uintW4Eaidm = BigInt("1330")
		const addressZbYFlhP = accounts[2]
//		const boolWJcfW4N = await CryptozpjxqSB.addTocardType.call(uintW4Eaidm, uintLqtlPdD, uintsfBKkIb, uintWnawYe, uintxVJT5LT, {from: accounts[2]});
//		const uintD4eWkO = await CryptozpjxqSB.getTimeToDailyBonus.call(addressZbYFlhP, {from: accounts[1]});

		await expect(CryptozpjxqSB.addTocardType.call(uintW4Eaidm, uintLqtlPdD, uintsfBKkIb, uintWnawYe, uintxVJT5LT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpjxqSB = await Cryptoz.new({from: accounts[2]});
		const addressDNiNHIh = accounts[1]
		const addressZ7zjjr8 = accounts[0]
		const addresstMmQKu6 = accounts[1]
		const uintD4eWkO = await CryptozpjxqSB.getTimeToDailyBonus.call(addressDNiNHIh, {from: accounts[1]});
		const uint256arrayZxNsf3n = await CryptozpjxqSB.tokensOfOwner.call(addressZ7zjjr8, {from: accounts[1]});
//		const addressJrdxW4K = await CryptozpjxqSB.linkMySponsor.call(addresstMmQKu6, {from: accounts[4]});

		assert.equal(uint256arrayZxNsf3n, BigInt(""))
		assert.equal(uintD4eWkO, BigInt("1630203322"))
		await expect(CryptozpjxqSB.linkMySponsor.call(addresstMmQKu6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpjxqSB = await Cryptoz.new({from: accounts[2]});
		const addresscN03dA = accounts[2]
		const uintD4eWkO = await CryptozpjxqSB.getTimeToDailyBonus.call(addresscN03dA, {from: accounts[1]});
//		await CryptozpjxqSB.withdraw.call({from: accounts[2]});

		assert.equal(uintD4eWkO, BigInt("1630203347"))
		await expect(CryptozpjxqSB.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpjxqSB = await Cryptoz.new({from: accounts[2]});
		const uintm80ELEb = BigInt("126")
		const addresswHVDEWW = accounts[2]
		const uintATIln9l = BigInt("828")
//		const uint256OYCvFl3 = await CryptozpjxqSB.tokenOfOwnerByIndex.call(addresswHVDEWW, uintm80ELEb, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xQGWany = await CryptozpjxqSB.sacrifice.call(uintATIln9l, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozpjxqSB.tokenOfOwnerByIndex.call(addresswHVDEWW, uintm80ELEb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpjxqSB = await Cryptoz.new({from: accounts[2]});
		const uintibB38mr = BigInt("1252")
		const addressO46eNVN = accounts[2]
//		const boolqhqhVoS = await CryptozpjxqSB.buyBoosterCard.call(uintibB38mr, {from: accounts[0]});
//		const uintD4eWkO = await CryptozpjxqSB.getTimeToDailyBonus.call(addressO46eNVN, {from: accounts[1]});

		await expect(CryptozpjxqSB.buyBoosterCard.call(uintibB38mr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpjxqSB = await Cryptoz.new({from: accounts[2]});
		const uintxr0FjAh = BigInt("590")
		const uintlZxrlra = BigInt("1956")
		const uintS3CYLdo = BigInt("983")
		const uintT1v0h2c = BigInt("92")
		const uintDn49A0S = BigInt("185")
		const uintFlDvLjh = BigInt("43")
		const stringW8lKumh = "O9pYcL1YpFyx4y3Wq4XyMvusw75grarHRRxybnqiv0eOpxupHt7BNd5b"
		const stringRTdXvi2 = "qVIQmsowYFHsh3A8x2u3gWkkdP2tDkyKR8sHW3GzgHRYFcS79OOWdC3EoqD4fVvMjpL"
		const uintXygCa0V = BigInt("119")
		const uintHLSEoeo = BigInt("827")
		const boolbZOPkhq = await CryptozpjxqSB.loadNewCardType.call(uintXygCa0V, stringRTdXvi2, stringW8lKumh, uintFlDvLjh, uintDn49A0S, uintT1v0h2c, uintS3CYLdo, uintlZxrlra, uintxr0FjAh, {from: accounts[2]});
//		await CryptozpjxqSB.getBonusBoosters.call({from: accounts[5]});
//		const uint256xQGWany = await CryptozpjxqSB.sacrifice.call(uintHLSEoeo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbZOPkhq, true)
		await expect(CryptozpjxqSB.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})