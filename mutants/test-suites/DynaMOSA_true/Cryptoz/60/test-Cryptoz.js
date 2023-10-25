const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozU41TAM = await Cryptoz.new({from: accounts[0]});
		const uintZQugdm = BigInt("1454")
		const uintn8rsF3T = BigInt("1965")
		const uintQqjgrE4 = BigInt("1892")
		const uintMPueFM = BigInt("1294")
//		const uint32qR3qKXB = await CryptozU41TAM.isValidCard.call(uintZQugdm, {from: accounts[3]});
//		const uint32WKUfVSA = await CryptozU41TAM.isValidCard.call(uintn8rsF3T, {from: accounts[1]});
//		await CryptozU41TAM.getTokensByRarity.call({from: accounts[4]});
//		const booloPOOdVs = await CryptozU41TAM.openBoosterCard.call(uintQqjgrE4, {from: accounts[3]});
//		const uint32JwLuH1J = await CryptozU41TAM.isValidCard.call(uintMPueFM, {from: accounts[1]});

		await expect(CryptozU41TAM.isValidCard.call(uintZQugdm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozCKzyql = await Cryptoz.new({from: accounts[3]});
		const uintc5NqMNC = BigInt("1065")
		const uintry2mwYG = BigInt("137")
		const uintIQJx6Ta = BigInt("1631")
		const uintxXjOffA = BigInt("1120")
		const uintODUXMO = BigInt("170")
		const uintRXY7qgf = BigInt("181")
		const uintyu29rSd = BigInt("2")
		const stringxsZLcj5 = "413fT4T"
		const stringaNITJRt = "ksroe4x8siHY88eHCRtl2hX5grhrYt3CcaKRsMnNs7PH3GQn3rm8r1uo74OCrYxsDmfe61U"
		const uintFoZZQOs = BigInt("74")
		const addresssZypK5T = accounts[0]
		const addresssQwesY1 = accounts[2]
		const addressainsZTy = accounts[4]
//		const boolHP1SBQG = await CryptozCKzyql.buyBoosterCard.call(uintc5NqMNC, {from: accounts[3]});
//		const boolmws7AOu = await CryptozCKzyql.loadNewCardType.call(uintFoZZQOs, stringaNITJRt, stringxsZLcj5, uintyu29rSd, uintRXY7qgf, uintODUXMO, uintxXjOffA, uintIQJx6Ta, uintry2mwYG, {from: accounts[3]});
//		const addresssExpMxD = await CryptozCKzyql.initialize.call(addresssZypK5T, {from: accounts[3]});
//		const uintglF5jj = await CryptozCKzyql.getTimeToDailyBonus.call(addresssQwesY1, {from: accounts[4]});
//		const addressoycX3U6 = await CryptozCKzyql.initialize.call(addressainsZTy, {from: accounts[0]});

		await expect(CryptozCKzyql.buyBoosterCard.call(uintc5NqMNC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuZOgltF = await Cryptoz.new({from: accounts[4]});
		const uintIS1jAQA = BigInt("1914")
		const uintVrZJrlb = BigInt("1620")
		const uinti7TqMIn = BigInt("551")
//		const boolq21H6qq = await CryptozuZOgltF.openBoosterCard.call(uintIS1jAQA, {from: accounts[0]});
//		await CryptozuZOgltF.withdraw.call({from: accounts[5]});
//		const uint256CEL2Qp3 = await CryptozuZOgltF.tokenByIndex.call(uintVrZJrlb, {from: accounts[4]});
//		await CryptozuZOgltF.withdraw.call({from: accounts[0]});
//		const uint32Epn7v3 = await CryptozuZOgltF.isValidCard.call(uinti7TqMIn, {from: accounts[5]});

		await expect(CryptozuZOgltF.openBoosterCard.call(uintIS1jAQA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozquDEqSI = await Cryptoz.new({from: accounts[5]});
		const uinte9qCT2o = BigInt("1431")
		const uintADw4w2 = BigInt("1306")
		const uintBVcmQyp = BigInt("54")
		const uintfhR4Vih = BigInt("196")
		const uintfQG3XIk = BigInt("1329")
		const uintoq6unFT = BigInt("1071")
		const uint4N0Wyd = BigInt("1684")
//		await CryptozquDEqSI.f.call({from: accounts[0]});
//		await CryptozquDEqSI.getOwnedCard.call(uinte9qCT2o, {from: accounts[1]});
//		const stringcy6Ss5K = await CryptozquDEqSI.symbol.call({from: accounts[3]});
//		const uint32I1b5HfY = await CryptozquDEqSI.getFreeCard.call(uintADw4w2, {from: accounts[4]});
//		const boolRXO4dSA = await CryptozquDEqSI.addTocardType.call(uint4N0Wyd, uintoq6unFT, uintfQG3XIk, uintfhR4Vih, uintBVcmQyp, {from: accounts[4]});

		await expect(CryptozquDEqSI.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuKuctzK = await Cryptoz.new({from: accounts[2]});
		const addressEynjGBG = accounts[3]
//		const addressjh6Qa58 = await CryptozuKuctzK.linkMySponsor.call(addressEynjGBG, {from: accounts[3]});
//		const stringp3met1w = await CryptozuKuctzK.name.call({from: accounts[4]});

		await expect(CryptozuKuctzK.linkMySponsor.call(addressEynjGBG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozu46cnpG = await Cryptoz.new({from: accounts[1]});
		const addressv9WEi2E = accounts[4]
		const uint7H2kAq = BigInt("477")
		const uintMx3mbw = BigInt("752")
		const uintBCE2oe = BigInt("1859")
		const addressIIZufHS = accounts[4]
		const addressc4Objt2 = accounts[4]
		const uintbdei5uZ = BigInt("1412")
//		const addresspsek3lm = await Cryptozu46cnpG.initialize.call(addressv9WEi2E, {from: accounts[0]});
//		const boolBWHbx5o = await Cryptozu46cnpG.buyCard.call(uint7H2kAq, {from: accounts[0]});
//		await Cryptozu46cnpG.getOwnedCard.call(uintMx3mbw, {from: accounts[0]});
//		await Cryptozu46cnpG.getTokensByRarity.call({from: accounts[0]});
//		const addressP7vpWY = await Cryptozu46cnpG.transferFrom.call(addressc4Objt2, addressIIZufHS, uintBCE2oe, {from: accounts[0]});
//		const boolaHqBynK = await Cryptozu46cnpG.buyBoosterCard.call(uintbdei5uZ, {from: accounts[4]});

		await expect(Cryptozu46cnpG.initialize.call(addressv9WEi2E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNALy66H = await Cryptoz.new({from: accounts[5]});
		const uintVa5L95b = BigInt("1407")
		const uintvk4UiNz = BigInt("11")
		const uinteuMTtWS = BigInt("1592")
		const stringImzGVqd = await CryptozNALy66H.tokenURI.call(uintVa5L95b, {from: accounts[4]});
//		await CryptozNALy66H.getTokensByRarity.call({from: accounts[2]});
//		const uint256eWxTWIm = await CryptozNALy66H.tokenByIndex.call(uintvk4UiNz, {from: accounts[1]});
//		const boolO0dCHDX = await CryptozNALy66H.buyBoosterCard.call(uinteuMTtWS, {from: accounts[1]});

		assert.equal(stringImzGVqd, "https://cryptoz.cards/data/1407")
		await expect(CryptozNALy66H.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMff8Vip = await Cryptoz.new({from: accounts[1]});
		const uintWlBYFWD = BigInt("1751")
		const addressBlJKNBi = accounts[1]
		const uintsA0cYY3 = BigInt("735")
		const uintAdf0kTs = BigInt("1345")
		const uintMcPBiRH = BigInt("923")
		const uintF3COJgL = BigInt("1770")
		const uintbMMMZcb = BigInt("120")
		const uintA504hhN = BigInt("153")
		const uintGdQXO74 = BigInt("59")
		const stringXW88IrB = "pya31KAtV6sEO5nBaX4RlBCI5b7egUClGUzzlVwqhHMY7GIvcdB54XbyQOq6mWRo8Ujcp3mKLBkO0orK"
		const stringHsrWEb6 = "x7p1CvdfyfA3KTYwwNAxQGT8PFN3AHqVLm2Abw3osdV7P39BCjmaEvL4jvq"
		const uintHiHTcJj = BigInt("164")
//		await CryptozMff8Vip.buyBoosterCardAndOpen.call({from: accounts[3]});
//		const boolhGbMxd5 = await CryptozMff8Vip.openBoosterCard.call(uintWlBYFWD, {from: accounts[3]});
//		const addressCmoR9r = await CryptozMff8Vip.initialize.call(addressBlJKNBi, {from: accounts[0]});
//		const uint256sEZLM0u = await CryptozMff8Vip.totalSupply.call({from: accounts[3]});
//		const boolG5zbWlG = await CryptozMff8Vip.openBoosterCard.call(uintsA0cYY3, {from: accounts[3]});
//		const boolMODFKy6 = await CryptozMff8Vip.loadNewCardType.call(uintHiHTcJj, stringHsrWEb6, stringXW88IrB, uintGdQXO74, uintA504hhN, uintbMMMZcb, uintF3COJgL, uintMcPBiRH, uintAdf0kTs, {from: accounts[1]});

		await expect(CryptozMff8Vip.buyBoosterCardAndOpen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuKuctzK = await Cryptoz.new({from: accounts[2]});
		const stringp3met1w = await CryptozuKuctzK.name.call({from: accounts[4]});

		assert.equal(stringp3met1w, "Cryptoz Cards")
	});

	it('test for Cryptoz', async () => {
		const CryptozuKuctzK = await Cryptoz.new({from: accounts[2]});
		const addressMJJIvhh = accounts[4]
		const uintk1ZbP0x = BigInt("632")
		const addressg5MOfvS = accounts[1]
//		const addressjh6Qa58 = await CryptozuKuctzK.linkMySponsor.call(addressMJJIvhh, {from: accounts[3]});
//		const uint256TIrjzv = await CryptozuKuctzK.tokenByIndex.call(uintk1ZbP0x, {from: accounts[3]});
//		const stringp3met1w = await CryptozuKuctzK.name.call({from: accounts[4]});
//		const addressQNHp7sQ = await CryptozuKuctzK.initialize.call(addressg5MOfvS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256DJ0A1pr = await CryptozuKuctzK.totalSupply.call({from: accounts[2]});

		await expect(CryptozuKuctzK.linkMySponsor.call(addressMJJIvhh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNALy66H = await Cryptoz.new({from: accounts[5]});
		const uintTkV6q9y = BigInt("1290")
		const uintHN5SOG = BigInt("1407")
		const uintC4dqcQj = BigInt("11")
//		await CryptozNALy66H.getOwnedCard.call(uintTkV6q9y, {from: accounts[5]});
//		const stringImzGVqd = await CryptozNALy66H.tokenURI.call(uintHN5SOG, {from: accounts[4]});
//		await CryptozNALy66H.getTokensByRarity.call({from: accounts[1]});
//		const uint256eWxTWIm = await CryptozNALy66H.tokenByIndex.call(uintC4dqcQj, {from: accounts[1]});

		await expect(CryptozNALy66H.getOwnedCard.call(uintTkV6q9y, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuKuctzK = await Cryptoz.new({from: accounts[2]});
		const stringruZn0Ba = await CryptozuKuctzK.symbol.call({from: accounts[0]});
		const stringp3met1w = await CryptozuKuctzK.name.call({from: accounts[4]});

		assert.equal(stringp3met1w, "Cryptoz Cards")
		assert.equal(stringruZn0Ba, "Cryptoz")
	});

	it('test for Cryptoz', async () => {
		const CryptozRovdbzZ = await Cryptoz.new({from: accounts[1]});
		const uintGHxK531 = BigInt("1100")
		const addressinpxNPh = accounts[3]
		const addresseDsKSj8 = accounts[4]
		const stringsTVxbc = await CryptozRovdbzZ.symbol.call({from: accounts[5]});
//		const addressXxguzpX = await CryptozRovdbzZ.transferFrom.call(addresseDsKSj8, addressinpxNPh, uintGHxK531, {from: accounts[0]});

		assert.equal(stringsTVxbc, "Cryptoz")
		await expect(CryptozRovdbzZ.transferFrom.call(addresseDsKSj8, addressinpxNPh, uintGHxK531, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuKuctzK = await Cryptoz.new({from: accounts[2]});
		const uintn0H65iv = BigInt("867")
		const uintm27V9zA = BigInt("921")
		const addresszyQomMo = accounts[3]
		const addresspyPXVL1 = "0x0000000000000000000000000000000000000001"
//		const uint256NRf9GUf = await CryptozuKuctzK.sacrifice.call(uintn0H65iv, {from: accounts[1]});
//		const addressHUJpkc = await CryptozuKuctzK.transferFrom.call(addresspyPXVL1, addresszyQomMo, uintm27V9zA, {from: accounts[5]});
//		const stringp3met1w = await CryptozuKuctzK.name.call({from: accounts[4]});

		await expect(CryptozuKuctzK.sacrifice.call(uintn0H65iv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuKuctzK = await Cryptoz.new({from: accounts[2]});
		const uintHxR6IQ1 = BigInt("1173")
		const addressA5qp9tj = accounts[4]
//		const uint256GHq3ngz = await CryptozuKuctzK.tokenOfOwnerByIndex.call(addressA5qp9tj, uintHxR6IQ1, {from: accounts[5]});
//		const stringp3met1w = await CryptozuKuctzK.name.call({from: accounts[4]});

		await expect(CryptozuKuctzK.tokenOfOwnerByIndex.call(addressA5qp9tj, uintHxR6IQ1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpEreYXc = await Cryptoz.new({from: accounts[4]});
		const addressVYkXx1F = accounts[5]
//		await CryptozpEreYXc.getBonusBoosters.call({from: accounts[4]});
//		const addressW46hT0I = await CryptozpEreYXc.initialize.call(addressVYkXx1F, {from: accounts[0]});

		await expect(CryptozpEreYXc.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpEreYXc = await Cryptoz.new({from: accounts[4]});
		const addressiKnFqrC = accounts[4]
		const uintacv5V0f = BigInt("533")
		const uint256arrayn2iSKDy = await CryptozpEreYXc.tokensOfOwner.call(addressiKnFqrC, {from: accounts[4]});
//		const boolSNC6oti = await CryptozpEreYXc.openBoosterCard.call(uintacv5V0f, {from: accounts[3]});
//		await CryptozpEreYXc.getBonusBoosters.call({from: accounts[4]});

		assert.equal(uint256arrayn2iSKDy, BigInt(""))
		await expect(CryptozpEreYXc.openBoosterCard.call(uintacv5V0f, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNALy66H = await Cryptoz.new({from: accounts[5]});
		const uinttJk7rvU = BigInt("11")
//		await CryptozNALy66H.withdraw.call({from: accounts[5]});
//		const uint256eWxTWIm = await CryptozNALy66H.tokenByIndex.call(uinttJk7rvU, {from: accounts[1]});

		await expect(CryptozNALy66H.withdraw.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozRovdbzZ = await Cryptoz.new({from: accounts[1]});
		const addressM06MQh0 = accounts[3]
		const addressGBH6ySN = "0x0000000000000000000000000000000000000001"
		const uintBtKzub8 = BigInt("1100")
		const addressEBoaJt7 = accounts[4]
		const addresssg8gnyP = accounts[4]
		const addressTRy4vR1 = await CryptozRovdbzZ.initialize.call(addressM06MQh0, {from: accounts[1]});
		const uintmmQyDZb = await CryptozRovdbzZ.getTimeToDailyBonus.call(addressGBH6ySN, {from: accounts[3]});
//		const addressXxguzpX = await CryptozRovdbzZ.transferFrom.call(addresssg8gnyP, addressEBoaJt7, uintBtKzub8, {from: accounts[0]});

		assert.equal(uintmmQyDZb, BigInt("1630204774"))
		await expect(CryptozRovdbzZ.transferFrom.call(addresssg8gnyP, addressEBoaJt7, uintBtKzub8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozRovdbzZ = await Cryptoz.new({from: accounts[1]});
		const uintUngBAxA = BigInt("78")
		const uintwKCWAZY = BigInt("696")
		const uintuGpXVbb = BigInt("1986")
		const uintBG0rOu2 = BigInt("124")
		const uintwk0cnyM = BigInt("3")
		const uintM5yuceo = BigInt("147")
		const stringE8ksg6e = "xePMKvRqXYrYlmHcpA2ypNOm0l7pqd9EdqmcRexDDJu3BR8idgpqwL5yA1n6mSP6GFV0ytb7tzdGyMz"
		const stringUayfW7g = "fMWBKeuM37Uj9TpKvMLoI5dL4Du1nEzjUphR18MIYmvPyFqSWb2WTt8kcFKW56JfSk3pPfWbtXAx0aI2mngQ4MiFMiwC0sWd"
		const uintTBJdUv4 = BigInt("253")
		const uinty6MaKut = BigInt("1193")
		const addresshrIfhrk = accounts[4]
		const addresskQNxruH = "0x0000000000000000000000000000000000000001"
		const uintZrLxIMn = BigInt("1100")
		const addressohjOa7e = accounts[4]
		const addresszYjJgmQ = accounts[4]
		const boolLveLQFF = await CryptozRovdbzZ.loadNewCardType.call(uintTBJdUv4, stringUayfW7g, stringE8ksg6e, uintM5yuceo, uintwk0cnyM, uintBG0rOu2, uintuGpXVbb, uintwKCWAZY, uintUngBAxA, {from: accounts[1]});
//		await CryptozRovdbzZ.getBonusBoosters.call({from: accounts[3]});
//		const uint256uSj52K4 = await CryptozRovdbzZ.sacrifice.call(uinty6MaKut, {from: "0x0000000000000000000000000000000000000001"});
//		const addressTRy4vR1 = await CryptozRovdbzZ.initialize.call(addresshrIfhrk, {from: accounts[1]});
//		const uintmmQyDZb = await CryptozRovdbzZ.getTimeToDailyBonus.call(addresskQNxruH, {from: accounts[3]});
//		const addressXxguzpX = await CryptozRovdbzZ.transferFrom.call(addresszYjJgmQ, addressohjOa7e, uintZrLxIMn, {from: accounts[0]});

		assert.equal(boolLveLQFF, true)
		await expect(CryptozRovdbzZ.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozrTnNrU9 = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVYm95Gu = BigInt("1622")
		const uintE3oBj3p = BigInt("1173")
		const uinteYExGfZ = BigInt("679")
		const uintNY6DvUc = BigInt("16")
		const uintRwO5Kcm = BigInt("93")
		const uintcUl6X6t = BigInt("63")
		const stringKigq9tA = "fzw7jDfYP384eNzUMq"
		const string77g20W = "P6mW0Focmg84YFD8RyRrfzkGRoN1WqXr0x"
		const uintG6rgxAI = BigInt("135")
		const addressa89B8R = accounts[4]
		const uintbW8Z95h = BigInt("752")
		const boolGipYkNP = await CryptozrTnNrU9.loadNewCardType.call(uintG6rgxAI, string77g20W, stringKigq9tA, uintcUl6X6t, uintRwO5Kcm, uintNY6DvUc, uinteYExGfZ, uintE3oBj3p, uintVYm95Gu, {from: accounts[0]});
		const uintXr1tlCW = await CryptozrTnNrU9.getTimeToDailyBonus.call(addressa89B8R, {from: accounts[4]});
		const boolNHjigEs = await CryptozrTnNrU9.buyCard.call(uintbW8Z95h, {from: accounts[4]});
	});
})