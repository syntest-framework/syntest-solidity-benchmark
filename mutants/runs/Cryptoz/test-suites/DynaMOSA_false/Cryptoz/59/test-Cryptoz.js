const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const Cryptozf4jH01j = await Cryptoz.new({from: accounts[0]});
		const uintP6AXsdd = BigInt("51")
		const uintgZ3G0oZ = BigInt("1299")
		const uint4a1WKE = BigInt("1543")
		const uintyo1Twe = BigInt("1504")
		const uintIEl5fIW = BigInt("328")
		const uintjutqiuG = BigInt("550")
		const uintqPsIrKR = BigInt("933")
		const uintvsvdYxu = BigInt("1222")
		const uintLAyER3i = BigInt("220")
		const uinty0Y2ciN = BigInt("252")
		const uintoJkVDeD = BigInt("146")
		const stringJBPj8wN = "QATohYqQzzFgS5f04PgX4gE6MWyli"
		const stringMdNWpJL = "WS69zI1NyzlPviG8M9n9Utsm8iuhlY6xmtvyzAQKqK79KsH9e6w7vmjsVL8mEwtY9hK5ke11CjLKFMLp17dpm9C2RG"
		const uintzvqG5pH = BigInt("209")
		const uintoBmtQ8i = BigInt("663")
		await Cryptozf4jH01j.getTokensByRarity.call({from: accounts[0]});
		await Cryptozf4jH01j.getTokensByRarity.call({from: accounts[1]});
		const boolbS5pOmW = await Cryptozf4jH01j.addTocardType.call(uintIEl5fIW, uintyo1Twe, uint4a1WKE, uintgZ3G0oZ, uintP6AXsdd, {from: "0x0000000000000000000000000000000000000001"});
		const stringscLmaFQ = await Cryptozf4jH01j.symbol.call({from: accounts[4]});
		const boolsic6vo = await Cryptozf4jH01j.loadNewCardType.call(uintzvqG5pH, stringMdNWpJL, stringJBPj8wN, uintoJkVDeD, uinty0Y2ciN, uintLAyER3i, uintvsvdYxu, uintqPsIrKR, uintjutqiuG, {from: accounts[0]});
		const uint32uH4zoE = await Cryptozf4jH01j.isValidCard.call(uintoBmtQ8i, {from: accounts[0]});

		await expect(Cryptozf4jH01j.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozL2rFb1P = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintk2rNfYk = BigInt("361")
		const uintyaHQlew = BigInt("1876")
		const uintTKlCG4z = BigInt("1584")
		const uintiBPcHjR = BigInt("244")
		const uintxOipACI = BigInt("150")
		const uintA8hjit = BigInt("143")
		const stringaF9gwc = "SoPtSYzAk411rhJjDoPLXC6zqlgfvgQLfbBFWEheFNSzOteY4JNKFMl1P2w2Ivm7xLXLYyS6Ew21b5guFWRH2n"
		const stringiG5fjbB = "6BcW2S"
		const uintNJMUu9f = BigInt("86")
		const addressO7tMn8Y = accounts[2]
		const addressrATNmJ8 = accounts[4]
		const uintvyd6UUo = BigInt("72")
		const uint5rFgvk = BigInt("289")
		const uintnnJIWu7 = BigInt("1555")
		const uintW8tXl2W = BigInt("1058")
		const uintlehs1Ds = BigInt("1483")
		const boolcI3WK5v = await CryptozL2rFb1P.loadNewCardType.call(uintNJMUu9f, stringiG5fjbB, stringaF9gwc, uintA8hjit, uintxOipACI, uintiBPcHjR, uintTKlCG4z, uintyaHQlew, uintk2rNfYk, {from: accounts[0]});
		await CryptozL2rFb1P.f.call({from: accounts[3]});
		const address2jYrBH = await CryptozL2rFb1P.initialize.call(addressO7tMn8Y, {from: accounts[2]});
		const uint256arrayDBdjRzL = await CryptozL2rFb1P.tokensOfOwner.call(addressrATNmJ8, {from: accounts[1]});
		const boolE1aawUM = await CryptozL2rFb1P.addTocardType.call(uintlehs1Ds, uintW8tXl2W, uintnnJIWu7, uint5rFgvk, uintvyd6UUo, {from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const CryptoztepzOZB = await Cryptoz.new({from: accounts[4]});
		const uintUsEIRZ = BigInt("1657")
		const uintk7XIKbq = BigInt("770")
		const uintN0VMq2e = BigInt("158")
		await CryptoztepzOZB.buyBoosterCardAndOpen.call({from: accounts[4]});
		const boolEyAZzjk = await CryptoztepzOZB.buyBoosterCard.call(uintUsEIRZ, {from: accounts[4]});
		await CryptoztepzOZB.f.call({from: accounts[4]});
		const boolH5qgfUz = await CryptoztepzOZB.openBoosterCard.call(uintk7XIKbq, {from: "0x0000000000000000000000000000000000000001"});
		await CryptoztepzOZB.getOwnedCard.call(uintN0VMq2e, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoztepzOZB.buyBoosterCardAndOpen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQXAGkn = await Cryptoz.new({from: accounts[1]});
		const uintoyUiwnX = BigInt("1154")
		const addresskVxdQ5e = accounts[5]
		const addressgUR6PB1 = accounts[4]
		const uintyqlqjRK = BigInt("172")
		const uintuglQWnk = BigInt("571")
		const addressQ34XP4G = await CryptozQXAGkn.transferFrom.call(addressgUR6PB1, addresskVxdQ5e, uintoyUiwnX, {from: accounts[0]});
		const boolcy1zh4M = await CryptozQXAGkn.buyBoosterCard.call(uintyqlqjRK, {from: accounts[3]});
		const boolqb1NKN = await CryptozQXAGkn.buyCard.call(uintuglQWnk, {from: accounts[4]});

		await expect(CryptozQXAGkn.transferFrom.call(addressgUR6PB1, addresskVxdQ5e, uintoyUiwnX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJ7LUw0R = await Cryptoz.new({from: accounts[0]});
		const uintZX1mJ6C = BigInt("1315")
		await CryptozJ7LUw0R.getBonusBoosters.call({from: accounts[3]});
		await CryptozJ7LUw0R.buyBoosterCardAndOpen.call({from: accounts[3]});
		const uint32cfdx2WS = await CryptozJ7LUw0R.isValidCard.call(uintZX1mJ6C, {from: accounts[5]});

		await expect(CryptozJ7LUw0R.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNWGJKdT = await Cryptoz.new({from: accounts[1]});
		const uintlepcmTX = BigInt("103")
		const uintKYYMDG2 = BigInt("109")
		const uintIj1Angf = BigInt("292")
		const uint2564F9sNX = await CryptozNWGJKdT.sacrifice.call(uintlepcmTX, {from: accounts[0]});
		const stringdk31zS2 = await CryptozNWGJKdT.tokenURI.call(uintKYYMDG2, {from: accounts[0]});
		await CryptozNWGJKdT.buyBoosterCardAndOpen.call({from: accounts[1]});
		const uint256jkF7nNd = await CryptozNWGJKdT.sacrifice.call(uintIj1Angf, {from: accounts[0]});

		await expect(CryptozNWGJKdT.sacrifice.call(uintlepcmTX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHpyylGu = await Cryptoz.new({from: accounts[0]});
		const uintrYu43AV = BigInt("426")
		const stringUEwTyfO = await CryptozHpyylGu.tokenURI.call(uintrYu43AV, {from: accounts[3]});
		await CryptozHpyylGu.f.call({from: accounts[0]});

		assert.equal(stringUEwTyfO, "https://cryptoz.cards/data/426")
		await expect(CryptozHpyylGu.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHpyylGu = await Cryptoz.new({from: accounts[0]});
		const uintfWgoyBW = BigInt("1589")
		const uintIcZXbnb = BigInt("1782")
		const uintMVcYzXy = BigInt("440")
		const uintfqoWE58 = BigInt("924")
		await CryptozHpyylGu.getOwnedCard.call(uintfWgoyBW, {from: accounts[0]});
		await CryptozHpyylGu.getOwnedCard.call(uintIcZXbnb, {from: accounts[0]});
		const stringUEwTyfO = await CryptozHpyylGu.tokenURI.call(uintMVcYzXy, {from: accounts[3]});
		const boolLqXm4D2 = await CryptozHpyylGu.buyBoosterCard.call(uintfqoWE58, {from: accounts[5]});

		await expect(CryptozHpyylGu.getOwnedCard.call(uintfWgoyBW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozf4jH01j = await Cryptoz.new({from: accounts[0]});
		const uintThflAMx = BigInt("550")
		const uintjjarvzb = BigInt("933")
		const uintFJfCMTn = BigInt("1222")
		const uintfO07dPS = BigInt("220")
		const uintZp19Qnz = BigInt("252")
		const uintfYvJB01 = BigInt("146")
		const stringJBPj8wN = "QATohYqQzzFgS5f04PgX4gE6MWyli"
		const stringMdNWpJL = "WS69zI1NyzlPviG8M9n9Utsm8iuhlY6xmtvyzAQKqK79KsH9e6w7vmjsVL8mEwtY9hK5ke11CjLKFMLp17dpm9C2RG"
		const uintym8VSK = BigInt("209")
		const uintdwTY0IF = BigInt("663")
		await Cryptozf4jH01j.getTokensByRarity.call({from: accounts[0]});
		await Cryptozf4jH01j.getTokensByRarity.call({from: accounts[1]});
		const stringscLmaFQ = await Cryptozf4jH01j.symbol.call({from: accounts[4]});
		const boolsic6vo = await Cryptozf4jH01j.loadNewCardType.call(uintym8VSK, stringMdNWpJL, stringJBPj8wN, uintfYvJB01, uintZp19Qnz, uintfO07dPS, uintFJfCMTn, uintjjarvzb, uintThflAMx, {from: accounts[0]});
		const uint32uH4zoE = await Cryptozf4jH01j.isValidCard.call(uintdwTY0IF, {from: accounts[0]});

		await expect(Cryptozf4jH01j.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozvgQoJKT = await Cryptoz.new({from: accounts[5]});
		const uintyGEJ9Gn = BigInt("622")
		const uintduV6wXW = BigInt("1683")
		const uintn9QsLjL = BigInt("411")
		const uintL8duyrM = BigInt("829")
		const uintADguP5D = BigInt("800")
		const uintVTVqg4a = BigInt("172")
		const uintVWFxvP9 = BigInt("154")
		const uinttomUUim = BigInt("100")
		const stringBYba4rs = "9zoymaDb22sf86wAUEvudYp9pVnEVBHbn"
		const stringqbHNv4M = "Tf24OFtrSkrEXtAfd14019PUsCFD9xTfi3xGPt6WeVrKlYBwDk9l815nQ0a679XPvE"
		const uintmUCMSQj = BigInt("123")
		const uintqSrx90g = BigInt("279")
		const uint256OnKc11 = await CryptozvgQoJKT.tokenByIndex.call(uintyGEJ9Gn, {from: accounts[1]});
		const boolM3LS5VF = await CryptozvgQoJKT.openBoosterCard.call(uintduV6wXW, {from: accounts[3]});
		await CryptozvgQoJKT.getBonusBoosters.call({from: accounts[4]});
		const bool1YopEz = await CryptozvgQoJKT.loadNewCardType.call(uintmUCMSQj, stringqbHNv4M, stringBYba4rs, uinttomUUim, uintVWFxvP9, uintVTVqg4a, uintADguP5D, uintL8duyrM, uintn9QsLjL, {from: accounts[3]});
		const uint256ruMwvZt = await CryptozvgQoJKT.sacrifice.call(uintqSrx90g, {from: accounts[4]});

		await expect(CryptozvgQoJKT.tokenByIndex.call(uintyGEJ9Gn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHpyylGu = await Cryptoz.new({from: accounts[0]});
		const addressLjUgxWh = accounts[2]
		const uint256arrayCgbPxHs = await CryptozHpyylGu.tokensOfOwner.call(addressLjUgxWh, {from: accounts[4]});
		await CryptozHpyylGu.withdraw.call({from: accounts[3]});
		await CryptozHpyylGu.f.call({from: accounts[0]});

		assert.equal(uint256arrayCgbPxHs, BigInt(""))
		await expect(CryptozHpyylGu.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNWGJKdT = await Cryptoz.new({from: accounts[1]});
		const uintPE39OR6 = BigInt("195")
		const uinteEkQur = BigInt("143")
		const uintKSeNUz8 = BigInt("292")
		const boolezEzoIu = await CryptozNWGJKdT.buyBoosterCard.call(uintPE39OR6, {from: accounts[3]});
		const uint2564F9sNX = await CryptozNWGJKdT.sacrifice.call(uinteEkQur, {from: accounts[0]});
		await CryptozNWGJKdT.buyBoosterCardAndOpen.call({from: accounts[1]});
		const uint256jkF7nNd = await CryptozNWGJKdT.sacrifice.call(uintKSeNUz8, {from: accounts[0]});

		await expect(CryptozNWGJKdT.buyBoosterCard.call(uintPE39OR6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozwusd578 = await Cryptoz.new({from: accounts[1]});
		const uintvLOxW1 = BigInt("831")
		const addressWJax5P4 = accounts[4]
		const uintS9Yz6zP = BigInt("1768")
		const uintHmzWweO = BigInt("289")
		const uintCIQVZBD = BigInt("1430")
		const uintP7iDKq2 = BigInt("58")
		const uintwsV3m5m = BigInt("135")
		const uintEqMn77b = BigInt("135")
		const stringQS3phgG = "OLTp1Mig33mNjbBt9Gxh8ORTjPrz8Qu8FLftKu7"
		const stringvnrB8qo = "uKCvNxluLcYDnFEGMqADqbGHNSnxU26oonoQz5KjCpX1CP0S8nzTLAywMBENBQwL2BrTYxJw"
		const uintGiK7gmu = BigInt("170")
		const addressutyrziP = accounts[0]
		const uintqzGFjM = BigInt("1158")
		const uint256vpuIwfY = await Cryptozwusd578.tokenOfOwnerByIndex.call(addressWJax5P4, uintvLOxW1, {from: accounts[0]});
		const boolQvhC64k = await Cryptozwusd578.loadNewCardType.call(uintGiK7gmu, stringvnrB8qo, stringQS3phgG, uintEqMn77b, uintwsV3m5m, uintP7iDKq2, uintCIQVZBD, uintHmzWweO, uintS9Yz6zP, {from: accounts[0]});
		const uint256arrayuKG8Oto = await Cryptozwusd578.tokensOfOwner.call(addressutyrziP, {from: accounts[3]});
		const boolT6TGSTQ = await Cryptozwusd578.buyCard.call(uintqzGFjM, {from: accounts[0]});

		await expect(Cryptozwusd578.tokenOfOwnerByIndex.call(addressWJax5P4, uintvLOxW1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozCZdjzYO = await Cryptoz.new({from: accounts[0]});
		const uintUOuUl82 = BigInt("32")
		const uintyeCKMfm = BigInt("1931")
		const uinteDQtUoz = BigInt("218")
		const bools5zhXS = await CryptozCZdjzYO.openBoosterCard.call(uintUOuUl82, {from: accounts[4]});
		await CryptozCZdjzYO.buyBoosterCardAndOpen.call({from: accounts[3]});
		await CryptozCZdjzYO.getTokensByRarity.call({from: accounts[4]});
		const uint256iD5nSbz = await CryptozCZdjzYO.sacrifice.call(uintyeCKMfm, {from: accounts[0]});
		const boolqrawkFM = await CryptozCZdjzYO.openBoosterCard.call(uinteDQtUoz, {from: accounts[1]});

		await expect(CryptozCZdjzYO.openBoosterCard.call(uintUOuUl82, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozeb4hbqy = await Cryptoz.new({from: accounts[2]});
		const addressn9RZz9n = accounts[3]
		const stringNPXCjgh = await Cryptozeb4hbqy.name.call({from: "0x0000000000000000000000000000000000000001"});
		await Cryptozeb4hbqy.f.call({from: accounts[4]});
		const uintn3zd8pC = await Cryptozeb4hbqy.getTimeToDailyBonus.call(addressn9RZz9n, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringNPXCjgh, "Cryptoz Cards")
		await expect(Cryptozeb4hbqy.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozf4jH01j = await Cryptoz.new({from: accounts[0]});
		const addressRdVvmzh = accounts[4]
		await Cryptozf4jH01j.getTokensByRarity.call({from: accounts[0]});
		const addressoP49QxR = await Cryptozf4jH01j.linkMySponsor.call(addressRdVvmzh, {from: accounts[4]});
		await Cryptozf4jH01j.getTokensByRarity.call({from: accounts[1]});

		await expect(Cryptozf4jH01j.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozeb4hbqy = await Cryptoz.new({from: accounts[2]});
		const addressj6wOksp = accounts[5]
		const addressrOwKOq = accounts[4]
		const uintSJ6sVxy = BigInt("244")
		const uintqO9TgmO = BigInt("287")
		const uinthgyw1Eq = BigInt("0")
		const addressI6Fmzof = await Cryptozeb4hbqy.linkMySponsor.call(addressj6wOksp, {from: accounts[3]});
		const uintn3zd8pC = await Cryptozeb4hbqy.getTimeToDailyBonus.call(addressrOwKOq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TxYmOSf = await Cryptozeb4hbqy.sacrifice.call(uintSJ6sVxy, {from: accounts[2]});
		const uint32US9Q6AX = await Cryptozeb4hbqy.isValidCard.call(uintqO9TgmO, {from: accounts[2]});
		const boolEMxU8vl = await Cryptozeb4hbqy.buyBoosterCard.call(uinthgyw1Eq, {from: accounts[4]});

		await expect(Cryptozeb4hbqy.linkMySponsor.call(addressj6wOksp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNWGJKdT = await Cryptoz.new({from: accounts[1]});
		const uintlSjNdW5 = BigInt("15")
		const uint7SER2P = BigInt("1961")
		const uintCPwRJKt = BigInt("2")
		const uint2qxD4c = BigInt("457")
		const uintNtKnz58 = BigInt("1292")
		const uintYnkJII8 = BigInt("223")
		const boolhF6w0JS = await CryptozNWGJKdT.addTocardType.call(uintNtKnz58, uint2qxD4c, uintCPwRJKt, uint7SER2P, uintlSjNdW5, {from: accounts[1]});
		await CryptozNWGJKdT.f.call({from: accounts[1]});
		const uint256jkF7nNd = await CryptozNWGJKdT.sacrifice.call(uintYnkJII8, {from: accounts[0]});

		await expect(CryptozNWGJKdT.addTocardType.call(uintNtKnz58, uint2qxD4c, uintCPwRJKt, uint7SER2P, uintlSjNdW5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozOtSMx6u = await Cryptoz.new({from: accounts[3]});
		const uintxVkPK7S = BigInt("837")
		const stringRokmjef = await CryptozOtSMx6u.symbol.call({from: accounts[0]});
		await CryptozOtSMx6u.withdraw.call({from: accounts[3]});
		const uint256lhM9d1D = await CryptozOtSMx6u.tokenByIndex.call(uintxVkPK7S, {from: accounts[3]});

		assert.equal(stringRokmjef, "Cryptoz")
		await expect(CryptozOtSMx6u.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})