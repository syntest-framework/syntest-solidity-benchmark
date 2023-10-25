const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozoemQHrT = await Cryptoz.new({from: accounts[0]});
		const uintwYvKlU3 = BigInt("499")
		const addressTGeZ9rl = accounts[0]
		const addressfWyQdtC = accounts[0]
		const uintT6M1tmY = BigInt("56")
		const uint256DtoRLOP = await CryptozoemQHrT.tokenOfOwnerByIndex.call(addressTGeZ9rl, uintwYvKlU3, {from: "0x0000000000000000000000000000000000000001"});
		const addressL9Jfkb = await CryptozoemQHrT.initialize.call(addressfWyQdtC, {from: accounts[1]});
		const uint256R7p0Mnp = await CryptozoemQHrT.sacrifice.call(uintT6M1tmY, {from: accounts[1]});

		await expect(CryptozoemQHrT.tokenOfOwnerByIndex.call(addressTGeZ9rl, uintwYvKlU3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZtwgg8 = await Cryptoz.new({from: accounts[1]});
		const addresstA3XEYI = accounts[2]
		const addressxM7naJh = await CryptozZtwgg8.initialize.call(addresstA3XEYI, {from: accounts[4]});
		await CryptozZtwgg8.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(CryptozZtwgg8.initialize.call(addresstA3XEYI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozt9DCL4m = await Cryptoz.new({from: accounts[4]});
		const uintdgoqYIc = BigInt("970")
		const uintbI3h7uh = BigInt("1938")
		const addressVgo1Yyd = accounts[2]
		const uintMEWkgi = BigInt("1834")
		const uintah9pFWu = BigInt("1389")
		const uintkuqh9EZ = BigInt("138")
		const uintbqanmb = BigInt("1681")
		const uintuEZBHA7 = BigInt("1405")
		const uintuYI013T = BigInt("1452")
		const uintyQIFHcX = BigInt("1155")
		const uint256Os6iIbz = await Cryptozt9DCL4m.tokenByIndex.call(uintdgoqYIc, {from: accounts[3]});
		const uint256uzQfzLi = await Cryptozt9DCL4m.sacrifice.call(uintbI3h7uh, {from: accounts[0]});
		const addressryQPvxv = await Cryptozt9DCL4m.initialize.call(addressVgo1Yyd, {from: accounts[1]});
		const uint32ZKjcWz = await Cryptozt9DCL4m.isValidCard.call(uintMEWkgi, {from: accounts[4]});
		const uint32Jb4XEgs = await Cryptozt9DCL4m.isValidCard.call(uintah9pFWu, {from: accounts[1]});
		const boolhpgSKe9 = await Cryptozt9DCL4m.addTocardType.call(uintyQIFHcX, uintuYI013T, uintuEZBHA7, uintbqanmb, uintkuqh9EZ, {from: accounts[3]});

		await expect(Cryptozt9DCL4m.tokenByIndex.call(uintdgoqYIc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozAwhmVOA = await Cryptoz.new({from: accounts[1]});
		const addressbEXw1sN = "0x0000000000000000000000000000000000000001"
		const uintwEVzDmq = BigInt("1927")
		const uint256arrayOdMwE6h = await CryptozAwhmVOA.tokensOfOwner.call(addressbEXw1sN, {from: accounts[0]});
		await CryptozAwhmVOA.f.call({from: accounts[5]});
		const uint32Oql9egN = await CryptozAwhmVOA.getFreeCard.call(uintwEVzDmq, {from: accounts[0]});

		assert.equal(uint256arrayOdMwE6h, BigInt(""))
		await expect(CryptozAwhmVOA.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozdbGIwK8 = await Cryptoz.new({from: accounts[4]});
		const addressCFOUVxb = accounts[1]
		const addressE54tjrn = accounts[1]
		const addresstOwSyit = accounts[0]
		const addressDPkC0Av = accounts[4]
		const uintsJbuFR = await CryptozdbGIwK8.getTimeToDailyBonus.call(addressCFOUVxb, {from: accounts[0]});
		const uint256arrayKNt7vSu = await CryptozdbGIwK8.tokensOfOwner.call(addressE54tjrn, {from: accounts[2]});
		const addressNcYkYRj = await CryptozdbGIwK8.initialize.call(addresstOwSyit, {from: accounts[3]});
		await CryptozdbGIwK8.getBonusBoosters.call({from: accounts[3]});
		const addressWW8mBtJ = await CryptozdbGIwK8.initialize.call(addressDPkC0Av, {from: accounts[3]});

		assert.equal(uint256arrayKNt7vSu, BigInt(""))
		assert.equal(uintsJbuFR, BigInt("1630204183"))
		await expect(CryptozdbGIwK8.initialize.call(addresstOwSyit, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		await CryptozYJkVeSr.getBonusBoosters.call({from: accounts[5]});
		await CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]});
		const stringdgMPDLo = await CryptozYJkVeSr.symbol.call({from: accounts[1]});

		await expect(CryptozYJkVeSr.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZBJ74uV = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzGFJTaY = BigInt("276")
		const uintK9m010 = BigInt("1261")
		const uint32VnCjeV7 = await CryptozZBJ74uV.getFreeCard.call(uintzGFJTaY, {from: accounts[0]});
		await CryptozZBJ74uV.f.call({from: accounts[0]});
		await CryptozZBJ74uV.getOwnedCard.call(uintK9m010, {from: accounts[3]});
		await CryptozZBJ74uV.f.call({from: accounts[5]});
		await CryptozZBJ74uV.getBonusBoosters.call({from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const Cryptozt9DCL4m = await Cryptoz.new({from: accounts[4]});
		const addressmaNinlJ = accounts[1]
		const uintapK0WJM = BigInt("970")
		const uintoPMYsGs = BigInt("1938")
		const addressVBy0ZNu = accounts[2]
		const uintNR6MwHr = BigInt("453")
		const uintMORz3xT = BigInt("1834")
		const uintFWmj4BD = BigInt("1389")
		const uinty8NvTtY = BigInt("916")
		const uintNs7Qdpo = BigInt("138")
		const uintAiHgWTB = BigInt("1681")
		const uintzW1mxtW = BigInt("1405")
		const uintYyvzXcs = BigInt("1452")
		const uintOktXcsO = BigInt("1155")
		const addressEhyfPiq = await Cryptozt9DCL4m.initialize.call(addressmaNinlJ, {from: accounts[4]});
		const uint256Os6iIbz = await Cryptozt9DCL4m.tokenByIndex.call(uintapK0WJM, {from: accounts[3]});
		const uint256uzQfzLi = await Cryptozt9DCL4m.sacrifice.call(uintoPMYsGs, {from: accounts[0]});
		const addressryQPvxv = await Cryptozt9DCL4m.initialize.call(addressVBy0ZNu, {from: accounts[1]});
		const bool8hynpx = await Cryptozt9DCL4m.buyBoosterCard.call(uintNR6MwHr, {from: accounts[3]});
		const uint32ZKjcWz = await Cryptozt9DCL4m.isValidCard.call(uintMORz3xT, {from: accounts[4]});
		const uint32Jb4XEgs = await Cryptozt9DCL4m.isValidCard.call(uintFWmj4BD, {from: accounts[1]});
		const uint256GqoOg9 = await Cryptozt9DCL4m.tokenByIndex.call(uinty8NvTtY, {from: accounts[0]});
		const boolhpgSKe9 = await Cryptozt9DCL4m.addTocardType.call(uintOktXcsO, uintYyvzXcs, uintzW1mxtW, uintAiHgWTB, uintNs7Qdpo, {from: accounts[3]});

		await expect(Cryptozt9DCL4m.tokenByIndex.call(uintapK0WJM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozcWegwjn = await Cryptoz.new({from: accounts[5]});
		const addressxc6VqKu = accounts[0]
		const uintCKzE7SS = BigInt("42")
		const uint4WVYnK = BigInt("506")
		const addressB0zVljm = await CryptozcWegwjn.linkMySponsor.call(addressxc6VqKu, {from: "0x0000000000000000000000000000000000000001"});
		const stringIgq5En0 = await CryptozcWegwjn.symbol.call({from: accounts[0]});
		const boolHTpqdnP = await CryptozcWegwjn.openBoosterCard.call(uintCKzE7SS, {from: accounts[0]});
		const uint256XPUyeyk = await CryptozcWegwjn.tokenByIndex.call(uint4WVYnK, {from: accounts[5]});

		await expect(CryptozcWegwjn.linkMySponsor.call(addressxc6VqKu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozt9DCL4m = await Cryptoz.new({from: accounts[4]});
		const uinthX1sYmY = BigInt("809")
		const addresssXCrK4S = accounts[4]
		const addressRqYVcv8 = accounts[2]
		const uintBnTsSLc = BigInt("1938")
		const uintpp3PA0u = BigInt("1820")
		const uintjjXAIIV = BigInt("1389")
		const uintbH50bQ4 = BigInt("138")
		const uintyB3zK8 = BigInt("1681")
		const uintdqSrolA = BigInt("1405")
		const uintcUp6bi6 = BigInt("1452")
		const uintQl8IgGN = BigInt("1155")
		const addressyb3GowB = await Cryptozt9DCL4m.transferFrom.call(addressRqYVcv8, addresssXCrK4S, uinthX1sYmY, {from: accounts[1]});
		const uint256uzQfzLi = await Cryptozt9DCL4m.sacrifice.call(uintBnTsSLc, {from: accounts[0]});
		const uint32ZKjcWz = await Cryptozt9DCL4m.isValidCard.call(uintpp3PA0u, {from: accounts[4]});
		const uint32Jb4XEgs = await Cryptozt9DCL4m.isValidCard.call(uintjjXAIIV, {from: accounts[1]});
		const boolhpgSKe9 = await Cryptozt9DCL4m.addTocardType.call(uintQl8IgGN, uintcUp6bi6, uintdqSrolA, uintyB3zK8, uintbH50bQ4, {from: accounts[3]});

		await expect(Cryptozt9DCL4m.transferFrom.call(addressRqYVcv8, addresssXCrK4S, uinthX1sYmY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		await CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]});
		const stringJill53b = await CryptozYJkVeSr.name.call({from: accounts[1]});

		await expect(CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		const uints6mypVu = BigInt("1018")
		await CryptozYJkVeSr.buyBoosterCardAndOpen.call({from: accounts[3]});
		await CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]});
		const uint256iOeU6YD = await CryptozYJkVeSr.tokenByIndex.call(uints6mypVu, {from: accounts[3]});

		await expect(CryptozYJkVeSr.buyBoosterCardAndOpen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozt9DCL4m = await Cryptoz.new({from: accounts[4]});
		const uintgwsqKRt = BigInt("1852")
		const uintElwmiEq = BigInt("970")
		const addressaMTNbOt = accounts[2]
		const uintLBJzGf1 = BigInt("203")
		const uintv0yZk2X = BigInt("1820")
		const boolDTmcjML = await Cryptozt9DCL4m.buyBoosterCard.call(uintgwsqKRt, {from: accounts[5]});
		const uint256Os6iIbz = await Cryptozt9DCL4m.tokenByIndex.call(uintElwmiEq, {from: accounts[3]});
		const uint256arrayQIdZAT = await Cryptozt9DCL4m.tokensOfOwner.call(addressaMTNbOt, {from: accounts[0]});
		const boolslBvBdZ = await Cryptozt9DCL4m.openBoosterCard.call(uintLBJzGf1, {from: accounts[4]});
		const uint32ZKjcWz = await Cryptozt9DCL4m.isValidCard.call(uintv0yZk2X, {from: accounts[4]});

		await expect(Cryptozt9DCL4m.buyBoosterCard.call(uintgwsqKRt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozt9DCL4m = await Cryptoz.new({from: accounts[4]});
		const uint8BwjvV = BigInt("1820")
		const uintySx89lT = BigInt("1323")
		const uint32ZKjcWz = await Cryptozt9DCL4m.isValidCard.call(uint8BwjvV, {from: accounts[4]});
		const uint32Jb4XEgs = await Cryptozt9DCL4m.isValidCard.call(uintySx89lT, {from: accounts[1]});

		await expect(Cryptozt9DCL4m.isValidCard.call(uint8BwjvV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozOQ8nQmD = await Cryptoz.new({from: accounts[2]});
		const addressEsIVJ4b = accounts[4]
		const uintm3p5EqZ = await CryptozOQ8nQmD.getTimeToDailyBonus.call(addressEsIVJ4b, {from: accounts[0]});
		await CryptozOQ8nQmD.getTokensByRarity.call({from: accounts[3]});

		assert.equal(uintm3p5EqZ, BigInt("1630204157"))
		await expect(CryptozOQ8nQmD.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		const uintbT7rBWG = BigInt("420")
		const stringEk81RVK = await CryptozYJkVeSr.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringZNife9o = await CryptozYJkVeSr.tokenURI.call(uintbT7rBWG, {from: accounts[4]});
		await CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]});

		assert.equal(stringEk81RVK, "Cryptoz")
		assert.equal(stringZNife9o, "https://cryptoz.cards/data/420")
		await expect(CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoziJ0tYwv = await Cryptoz.new({from: accounts[4]});
		const uinthmK2UMu = BigInt("1519")
		const uintunyGiT = BigInt("331")
		const addressbZU0zHT = accounts[0]
		const addressMHMMvp5 = accounts[4]
		const uint256ZrOg4Qd = await CryptoziJ0tYwv.sacrifice.call(uinthmK2UMu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OZy7JrH = await CryptoziJ0tYwv.tokenOfOwnerByIndex.call(addressbZU0zHT, uintunyGiT, {from: accounts[5]});
		const uinty8wRNwd = await CryptoziJ0tYwv.getTimeToDailyBonus.call(addressMHMMvp5, {from: accounts[0]});

		await expect(CryptoziJ0tYwv.sacrifice.call(uinthmK2UMu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		const uintSZgrCHw = BigInt("1896")
		const addressWxR58vk = "0x0000000000000000000000000000000000000000"
		const uint256VYiap6N = await CryptozYJkVeSr.tokenOfOwnerByIndex.call(addressWxR58vk, uintSZgrCHw, {from: accounts[3]});
		await CryptozYJkVeSr.getTokensByRarity.call({from: accounts[4]});

		await expect(CryptozYJkVeSr.tokenOfOwnerByIndex.call(addressWxR58vk, uintSZgrCHw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		const uintpJpal8W = BigInt("1200")
		await CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]});
		await CryptozYJkVeSr.getOwnedCard.call(uintpJpal8W, {from: accounts[1]});
		await CryptozYJkVeSr.buyBoosterCardAndOpen.call({from: accounts[5]});

		await expect(CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		const uintMoRVZWJ = BigInt("42")
		const addressaA1KiKk = accounts[1]
		const addressD1zI2om = accounts[5]
		await CryptozYJkVeSr.withdraw.call({from: accounts[4]});
		const address13gccR = await CryptozYJkVeSr.transferFrom.call(addressD1zI2om, addressaA1KiKk, uintMoRVZWJ, {from: "0x0000000000000000000000000000000000000001"});
		await CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]});

		await expect(CryptozYJkVeSr.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		const uintsicoqo3 = BigInt("1480")
		const uintbkwY0q4 = BigInt("410")
		const uintvjwEpfl = BigInt("199")
		const uintOc4z67P = BigInt("239")
		const uintjSZmXN1 = BigInt("24")
		const uintnc6gXND = BigInt("193")
		const stringBMXYXtw = "5hqciPtuSOBGz6TzuXcD60SotS3E3QGR"
		const stringXj2KbJx = "dLj6YG4aAbOSA4Yl4LGA1mjGSiQFHSm33wSefVDQSHFdyLyS76WLUOYKR"
		const uintfpyv6K = BigInt("35")
		const uintuwi3YOT = BigInt("1896")
		const addressITAG8q = "0x0000000000000000000000000000000000000000"
		const uintDseOfFo = BigInt("275")
		const boolE4X2QLV = await CryptozYJkVeSr.loadNewCardType.call(uintfpyv6K, stringXj2KbJx, stringBMXYXtw, uintnc6gXND, uintjSZmXN1, uintOc4z67P, uintvjwEpfl, uintbkwY0q4, uintsicoqo3, {from: accounts[4]});
		const uint256VYiap6N = await CryptozYJkVeSr.tokenOfOwnerByIndex.call(addressITAG8q, uintuwi3YOT, {from: accounts[3]});
		const uint256iP13QXm = await CryptozYJkVeSr.tokenByIndex.call(uintDseOfFo, {from: accounts[0]});

		assert.equal(boolE4X2QLV, true)
		await expect(CryptozYJkVeSr.tokenOfOwnerByIndex.call(addressITAG8q, uintuwi3YOT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		const uintDpHS2C1 = BigInt("992")
		const uinttpjOFRq = BigInt("1891")
		const addresstG89ZE3 = "0x0000000000000000000000000000000000000001"
		const uintxmrUqJd = BigInt("1002")
		const boolJq7o7m2 = await CryptozYJkVeSr.openBoosterCard.call(uintDpHS2C1, {from: accounts[3]});
		const uint256VYiap6N = await CryptozYJkVeSr.tokenOfOwnerByIndex.call(addresstG89ZE3, uinttpjOFRq, {from: accounts[3]});
		await CryptozYJkVeSr.withdraw.call({from: accounts[4]});
		const booldXKvxIh = await CryptozYJkVeSr.buyBoosterCard.call(uintxmrUqJd, {from: accounts[0]});

		await expect(CryptozYJkVeSr.openBoosterCard.call(uintDpHS2C1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYJkVeSr = await Cryptoz.new({from: accounts[4]});
		const uintR1rLOcs = BigInt("217")
		const uintiYI6L6 = BigInt("693")
		const uintWVV9h3j = BigInt("1344")
		const uintNOemiaO = BigInt("437")
		const uintn1Pxry = BigInt("662")
		const addressz9S28f4 = accounts[4]
		await CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]});
		const boolXrqFmuZ = await CryptozYJkVeSr.addTocardType.call(uintn1Pxry, uintNOemiaO, uintWVV9h3j, uintiYI6L6, uintR1rLOcs, {from: accounts[4]});
		await CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]});
		const addressuxLarqu = await CryptozYJkVeSr.initialize.call(addressz9S28f4, {from: accounts[3]});

		await expect(CryptozYJkVeSr.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})