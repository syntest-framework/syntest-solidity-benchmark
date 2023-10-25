const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozF86ZEy = await Cryptoz.new({from: accounts[5]});
		const uintQ7s1X05 = BigInt("1942")
		const addressWtGYNwL = accounts[4]
		const stringpaTBnpx = await CryptozF86ZEy.symbol.call({from: accounts[3]});
		const boolVW0sRpm = await CryptozF86ZEy.buyBoosterCard.call(uintQ7s1X05, {from: accounts[3]});
		const uintGGXOk5S = await CryptozF86ZEy.getTimeToDailyBonus.call(addressWtGYNwL, {from: accounts[1]});
		await CryptozF86ZEy.buyBoosterCardAndOpen.call({from: accounts[2]});

		assert.equal(stringpaTBnpx, "Cryptoz")
		await expect(CryptozF86ZEy.buyBoosterCard.call(uintQ7s1X05, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozlWbz495 = await Cryptoz.new({from: accounts[2]});
		const addressLAXiUQi = accounts[1]
		const uintWiY3VFA = BigInt("1398")
		const addressVp3d9s = accounts[3]
		const uintvyrNop8 = BigInt("297")
		await CryptozlWbz495.f.call({from: accounts[3]});
		const addressbVNgQjn = await CryptozlWbz495.initialize.call(addressLAXiUQi, {from: accounts[2]});
		await CryptozlWbz495.f.call({from: accounts[2]});
		const uint32fLkUb5P = await CryptozlWbz495.getFreeCard.call(uintWiY3VFA, {from: accounts[0]});
		const addressBAQFRiC = await CryptozlWbz495.initialize.call(addressVp3d9s, {from: accounts[4]});
		const stringDA12peU = await CryptozlWbz495.tokenURI.call(uintvyrNop8, {from: accounts[1]});

		await expect(CryptozlWbz495.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWhq7Pga = await Cryptoz.new({from: accounts[2]});
		const addressy1VZmaN = accounts[3]
		const address4EH60m = accounts[3]
		const addressb52GtAA = await CryptozWhq7Pga.initialize.call(addressy1VZmaN, {from: accounts[3]});
		const addresskYgQlnS = await CryptozWhq7Pga.linkMySponsor.call(address4EH60m, {from: accounts[1]});

		await expect(CryptozWhq7Pga.initialize.call(addressy1VZmaN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztUY1eYq = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzaPfUCc = BigInt("1912")
		const uintvSSwMKy = BigInt("233")
		const uint32z6hOyh3 = await CryptoztUY1eYq.getFreeCard.call(uintzaPfUCc, {from: accounts[1]});
		const uint256Avqgglk = await CryptoztUY1eYq.totalSupply.call({from: accounts[3]});
		const boolYQ1wx50 = await CryptoztUY1eYq.buyBoosterCard.call(uintvSSwMKy, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozdwNiWgP = await Cryptoz.new({from: accounts[2]});
		const addressr4uUhXI = accounts[4]
		const addressTYYyfev = accounts[0]
		const uintecQNRc = BigInt("1473")
		const addressb9xGCdi = await CryptozdwNiWgP.linkMySponsor.call(addressr4uUhXI, {from: accounts[5]});
		const stringEMzFoJ2 = await CryptozdwNiWgP.symbol.call({from: accounts[0]});
		const addressnkpzLJD = await CryptozdwNiWgP.linkMySponsor.call(addressTYYyfev, {from: accounts[5]});
		const uint32QBG6PBV = await CryptozdwNiWgP.getFreeCard.call(uintecQNRc, {from: accounts[2]});
		const uint256w3y557i = await CryptozdwNiWgP.totalSupply.call({from: accounts[0]});
		const uint256lfDUlkZ = await CryptozdwNiWgP.totalSupply.call({from: accounts[3]});

		await expect(CryptozdwNiWgP.linkMySponsor.call(addressr4uUhXI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuHkLDy3 = await Cryptoz.new({from: accounts[5]});
		const uintX5rMEIu = BigInt("120")
		const uintZcbmViW = BigInt("1153")
		const uintqcVGn2c = BigInt("1812")
		const uintAQOEQL5 = BigInt("1438")
		const uintcFIzvJK = BigInt("1122")
		const stringNGtexN = await CryptozuHkLDy3.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozuHkLDy3.buyBoosterCardAndOpen.call({from: accounts[0]});
		await CryptozuHkLDy3.buyBoosterCardAndOpen.call({from: accounts[5]});
		const stringY1Dpy94 = await CryptozuHkLDy3.symbol.call({from: accounts[1]});
		const boolQONFLpj = await CryptozuHkLDy3.addTocardType.call(uintcFIzvJK, uintAQOEQL5, uintqcVGn2c, uintZcbmViW, uintX5rMEIu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringNGtexN, "Cryptoz")
		await expect(CryptozuHkLDy3.buyBoosterCardAndOpen.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozwghNJZe = await Cryptoz.new({from: accounts[4]});
		const uintEeSXBA = BigInt("684")
		const uintFEMsm14 = BigInt("1295")
		const uintYcd3Xs = BigInt("379")
		const uint32vyr4JMi = await CryptozwghNJZe.isValidCard.call(uintEeSXBA, {from: accounts[1]});
		await CryptozwghNJZe.getOwnedCard.call(uintFEMsm14, {from: accounts[0]});
		await CryptozwghNJZe.f.call({from: accounts[1]});
		const uint32rYWwQNY = await CryptozwghNJZe.getFreeCard.call(uintYcd3Xs, {from: accounts[4]});

		await expect(CryptozwghNJZe.isValidCard.call(uintEeSXBA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozF86ZEy = await Cryptoz.new({from: accounts[5]});
		const address77GEMG = accounts[4]
		const stringpaTBnpx = await CryptozF86ZEy.symbol.call({from: accounts[3]});
		const uintGGXOk5S = await CryptozF86ZEy.getTimeToDailyBonus.call(address77GEMG, {from: accounts[1]});
		await CryptozF86ZEy.buyBoosterCardAndOpen.call({from: accounts[2]});

		assert.equal(stringpaTBnpx, "Cryptoz")
		assert.equal(uintGGXOk5S, BigInt("1630205264"))
		await expect(CryptozF86ZEy.buyBoosterCardAndOpen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz1reCcG = await Cryptoz.new({from: accounts[5]});
		const uintiLRkYHf = BigInt("1631")
		const uintBICGlW = BigInt("193")
		const uintIWGoQA = BigInt("1475")
		const uints3kqtv = BigInt("1866")
		const uintkG35rMb = BigInt("1134")
		const uintnP844U5 = BigInt("731")
		const stringTEIE660 = await Cryptoz1reCcG.symbol.call({from: accounts[3]});
		await Cryptoz1reCcG.getOwnedCard.call(uintiLRkYHf, {from: accounts[4]});
		const boolpwZ2gvS = await Cryptoz1reCcG.addTocardType.call(uintnP844U5, uintkG35rMb, uints3kqtv, uintIWGoQA, uintBICGlW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringTEIE660, "Cryptoz")
		await expect(Cryptoz1reCcG.getOwnedCard.call(uintiLRkYHf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNnIG8JE = await Cryptoz.new({from: accounts[3]});
		const uintgoFB3fC = BigInt("296")
		const uintu20Dnx8 = BigInt("46")
		const uintI6Nc7ok = BigInt("1259")
		const uinta7960v = BigInt("1987")
		const uintLqHsKgP = BigInt("1702")
		const uintibte7tZ = BigInt("1441")
		const addressaIscR3d = accounts[1]
		const uintSpYE8AY = BigInt("148")
		const uintkeTwYFB = BigInt("494")
		const uintt0lTuI8 = BigInt("1279")
		const uinth6OE80F = BigInt("446")
		const uintwpFqZt4 = BigInt("654")
		const uint256WGC0HOT = await CryptozNnIG8JE.tokenByIndex.call(uintgoFB3fC, {from: accounts[5]});
		await CryptozNnIG8JE.f.call({from: accounts[0]});
		const stringGjTnFs2 = await CryptozNnIG8JE.symbol.call({from: accounts[4]});
		const booljBn1TiZ = await CryptozNnIG8JE.addTocardType.call(uintibte7tZ, uintLqHsKgP, uinta7960v, uintI6Nc7ok, uintu20Dnx8, {from: "0x0000000000000000000000000000000000000001"});
		await CryptozNnIG8JE.buyBoosterCardAndOpen.call({from: accounts[0]});
		const uint256arrayUqQzx3 = await CryptozNnIG8JE.tokensOfOwner.call(addressaIscR3d, {from: accounts[0]});
		const boolth0vgev = await CryptozNnIG8JE.addTocardType.call(uintwpFqZt4, uinth6OE80F, uintt0lTuI8, uintkeTwYFB, uintSpYE8AY, {from: accounts[4]});
		const stringedviPT = await CryptozNnIG8JE.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozNnIG8JE.tokenByIndex.call(uintgoFB3fC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWhq7Pga = await Cryptoz.new({from: accounts[2]});
		const addressNQWVYs2 = accounts[1]
		const addressAXUVybs = accounts[3]
		const uint256arrayJPIrouF = await CryptozWhq7Pga.tokensOfOwner.call(addressNQWVYs2, {from: accounts[4]});
		const addresskYgQlnS = await CryptozWhq7Pga.linkMySponsor.call(addressAXUVybs, {from: accounts[1]});

		assert.equal(uint256arrayJPIrouF, BigInt(""))
		await expect(CryptozWhq7Pga.linkMySponsor.call(addressAXUVybs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozF86ZEy = await Cryptoz.new({from: accounts[5]});
		const addresswxUw8MM = accounts[4]
		const stringpaTBnpx = await CryptozF86ZEy.symbol.call({from: accounts[3]});
		const uintGGXOk5S = await CryptozF86ZEy.getTimeToDailyBonus.call(addresswxUw8MM, {from: accounts[1]});
		await CryptozF86ZEy.getTokensByRarity.call({from: accounts[3]});
		await CryptozF86ZEy.f.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozF86ZEy.buyBoosterCardAndOpen.call({from: accounts[2]});

		assert.equal(stringpaTBnpx, "Cryptoz")
		assert.equal(uintGGXOk5S, BigInt("1630205279"))
		await expect(CryptozF86ZEy.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozokrdTQN = await Cryptoz.new({from: accounts[1]});
		const uintAS3OIFd = BigInt("1958")
		const addressVqyGdTo = accounts[5]
		const addressGNkQxi5 = accounts[1]
		const uintlUQMWi = BigInt("1402")
		const uinteHEL5hJ = BigInt("913")
		const uintxvkhbm8 = BigInt("468")
		const uintDu7EE9j = BigInt("234")
		const uintOD7Fdq1 = BigInt("171")
		const uintqGNuF0Z = BigInt("140")
		const stringaRUCTMK = "rC6ICSjyFesTIw4DvYlInLGXxOBP0VSlRkfdtjltHB56CvcxcyNCffGvzpMwT988F"
		const stringYz4iWC = "gAZ4CkmTDTswhIwXOcjuWiWiZqLz9iQFhQSLJn7TxeJglFJmiYg54AJjjLI6NhxqAyKBE"
		const uintsdFFqGx = BigInt("169")
		const addressdZ7iQcp = accounts[4]
		const uintRpqErF = BigInt("1267")
		const addressGbzx4B5 = await CryptozokrdTQN.transferFrom.call(addressGNkQxi5, addressVqyGdTo, uintAS3OIFd, {from: accounts[4]});
		const boolhnIozc4 = await CryptozokrdTQN.loadNewCardType.call(uintsdFFqGx, stringYz4iWC, stringaRUCTMK, uintqGNuF0Z, uintOD7Fdq1, uintDu7EE9j, uintxvkhbm8, uinteHEL5hJ, uintlUQMWi, {from: accounts[3]});
		const uint256arrayduUSSg = await CryptozokrdTQN.tokensOfOwner.call(addressdZ7iQcp, {from: accounts[5]});
		const boolmBkGKZJ = await CryptozokrdTQN.buyCard.call(uintRpqErF, {from: accounts[3]});

		await expect(CryptozokrdTQN.transferFrom.call(addressGNkQxi5, addressVqyGdTo, uintAS3OIFd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWhq7Pga = await Cryptoz.new({from: accounts[2]});
		const uintK7s0Ttl = BigInt("214")
		const uintCvmWnXf = BigInt("942")
		const addressv7uksu = accounts[3]
		const uint256BFvE0Nl = await CryptozWhq7Pga.sacrifice.call(uintK7s0Ttl, {from: accounts[3]});
		const boolQpKDg4O = await CryptozWhq7Pga.buyCard.call(uintCvmWnXf, {from: accounts[0]});
		const addresskYgQlnS = await CryptozWhq7Pga.linkMySponsor.call(addressv7uksu, {from: accounts[1]});

		await expect(CryptozWhq7Pga.sacrifice.call(uintK7s0Ttl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozXiIbHKL = await Cryptoz.new({from: accounts[5]});
		const addresskUa43F = accounts[2]
		const uintAT1AG3 = BigInt("238")
		const addresswAzLsEy = accounts[0]
		const uint256arraytPTZOMx = await CryptozXiIbHKL.tokensOfOwner.call(addresskUa43F, {from: accounts[3]});
		const uint256RSprYrg = await CryptozXiIbHKL.totalSupply.call({from: accounts[4]});
		const boolVHquO9F = await CryptozXiIbHKL.openBoosterCard.call(uintAT1AG3, {from: accounts[4]});
		const uint256arrayaM7Fw6J = await CryptozXiIbHKL.tokensOfOwner.call(addresswAzLsEy, {from: accounts[5]});

		assert.equal(uint256RSprYrg, BigInt("0"))
		assert.equal(uint256arraytPTZOMx, BigInt(""))
		await expect(CryptozXiIbHKL.openBoosterCard.call(uintAT1AG3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWhq7Pga = await Cryptoz.new({from: accounts[2]});
		const addressV8MYKcT = accounts[6]
		const uintAhbpX79 = BigInt("186")
		const addressIHW1V7F = accounts[3]
		const addresskpNJYus = accounts[4]
		const uintUijNqI2 = await CryptozWhq7Pga.getTimeToDailyBonus.call(addressV8MYKcT, {from: accounts[4]});
		const uint256ei8BUWm = await CryptozWhq7Pga.tokenOfOwnerByIndex.call(addressIHW1V7F, uintAhbpX79, {from: accounts[5]});
		const addresskYgQlnS = await CryptozWhq7Pga.linkMySponsor.call(addresskpNJYus, {from: accounts[1]});

		assert.equal(uintUijNqI2, BigInt("1630205261"))
		await expect(CryptozWhq7Pga.tokenOfOwnerByIndex.call(addressIHW1V7F, uintAhbpX79, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWhq7Pga = await Cryptoz.new({from: accounts[2]});
		const uintaPBCixt = BigInt("1791")
		const addressqJl3X9F = accounts[6]
		const uinteRTA751 = BigInt("574")
		const uintj4VGlMA = BigInt("186")
		const addressOaQS1iB = accounts[3]
		const addressSClThMQ = accounts[4]
		const addressMAEY4mo = accounts[4]
		const uintHjRe0bD = BigInt("317")
		const addressVS6vC9z = accounts[5]
		const stringLJFY4lT = await CryptozWhq7Pga.tokenURI.call(uintaPBCixt, {from: accounts[2]});
		const uintUijNqI2 = await CryptozWhq7Pga.getTimeToDailyBonus.call(addressqJl3X9F, {from: accounts[4]});
		const uint256l0Wd8Iv = await CryptozWhq7Pga.tokenByIndex.call(uinteRTA751, {from: accounts[2]});
		const uint256ei8BUWm = await CryptozWhq7Pga.tokenOfOwnerByIndex.call(addressOaQS1iB, uintj4VGlMA, {from: accounts[5]});
		const addresskYgQlnS = await CryptozWhq7Pga.linkMySponsor.call(addressSClThMQ, {from: accounts[1]});
		const uint256arraybFgLvI = await CryptozWhq7Pga.tokensOfOwner.call(addressMAEY4mo, {from: accounts[2]});
		const uint256dSNx6mY = await CryptozWhq7Pga.tokenOfOwnerByIndex.call(addressVS6vC9z, uintHjRe0bD, {from: accounts[2]});

		assert.equal(stringLJFY4lT, "https://cryptoz.cards/data/1791")
		assert.equal(uintUijNqI2, BigInt("1630205292"))
		await expect(CryptozWhq7Pga.tokenByIndex.call(uinteRTA751, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWhq7Pga = await Cryptoz.new({from: accounts[2]});
		const uintl0J9rJq = BigInt("1022")
		const uintB6gzWbY = BigInt("1151")
		const uintUWk1pj7 = BigInt("1377")
		const addressNSW353A = accounts[4]
		await CryptozWhq7Pga.getBonusBoosters.call({from: accounts[4]});
		const uint256wt78JmG = await CryptozWhq7Pga.tokenByIndex.call(uintl0J9rJq, {from: accounts[1]});
		const uint256PZmtvE = await CryptozWhq7Pga.tokenByIndex.call(uintB6gzWbY, {from: accounts[5]});
		const boolkgIjSzc = await CryptozWhq7Pga.buyBoosterCard.call(uintUWk1pj7, {from: accounts[2]});
		const addresskYgQlnS = await CryptozWhq7Pga.linkMySponsor.call(addressNSW353A, {from: accounts[1]});

		await expect(CryptozWhq7Pga.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozelvVyQF = await Cryptoz.new({from: accounts[0]});
		const uintllFnKUR = BigInt("852")
		const uintvnmXohI = BigInt("493")
		const stringt3l7BBx = await CryptozelvVyQF.name.call({from: accounts[0]});
		const uint256eei3WrG = await CryptozelvVyQF.tokenByIndex.call(uintllFnKUR, {from: accounts[4]});
		const uint256XMRwgu2 = await CryptozelvVyQF.tokenByIndex.call(uintvnmXohI, {from: accounts[3]});

		assert.equal(stringt3l7BBx, "Cryptoz Cards")
		await expect(CryptozelvVyQF.tokenByIndex.call(uintllFnKUR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozokrdTQN = await Cryptoz.new({from: accounts[1]});
		const addresskRUwZbR = accounts[3]
		const uintgcU6Ozk = BigInt("1958")
		const addressUBNSeZz = accounts[5]
		const addressoalrF7a = accounts[2]
		const uintnnXhN5 = BigInt("1267")
		await CryptozokrdTQN.getBonusBoosters.call({from: accounts[5]});
		const addressYVaJiP4 = await CryptozokrdTQN.initialize.call(addresskRUwZbR, {from: accounts[1]});
		const addressGbzx4B5 = await CryptozokrdTQN.transferFrom.call(addressoalrF7a, addressUBNSeZz, uintgcU6Ozk, {from: accounts[4]});
		const boolmBkGKZJ = await CryptozokrdTQN.buyCard.call(uintnnXhN5, {from: accounts[3]});

		await expect(CryptozokrdTQN.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})