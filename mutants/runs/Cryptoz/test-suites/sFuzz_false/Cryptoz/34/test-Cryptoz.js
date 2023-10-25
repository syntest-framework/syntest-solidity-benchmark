const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozCsbM1x8 = await Cryptoz.new({from: accounts[4]});
		const uintTd06Qk9 = BigInt("2043")
		const uintkLE3Dxw = BigInt("784")
		const addressKikLwbl = accounts[1]
		const uintWcBMC04 = BigInt("1023")
		const stringzR7NgVM = await CryptozCsbM1x8.tokenURI.call(uintTd06Qk9, {from: accounts[0]});
		await CryptozCsbM1x8.f.call({from: accounts[4]});
		const uint256gDvGzS = await CryptozCsbM1x8.tokenOfOwnerByIndex.call(addressKikLwbl, uintkLE3Dxw, {from: accounts[0]});
		await CryptozCsbM1x8.getOwnedCard.call(uintWcBMC04, {from: accounts[2]});

		assert.equal(stringzR7NgVM, "https://cryptoz.cards/data/2043")
		await expect(CryptozCsbM1x8.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfYZnWZy = await Cryptoz.new({from: accounts[4]});
		const uintR5Js0W5 = BigInt("197")
		const uintGZu5GVv = BigInt("1569")
		const uintyMq90z1 = BigInt("26")
		const uintos0t2a4 = BigInt("103")
		const uintWf4YkQ0 = BigInt("161")
		const uint83rqHR = BigInt("109")
		const stringBNm6Qe = "9UWaNw1SRNZYTzkkqLczWbP3CKpm9w6GBTNtPRgdf"
		const stringihAnbNq = "ikr7uymT"
		const uintI1jS0ww = BigInt("26")
		const uintCr0pbRE = BigInt("588")
		const addressD9a5bnJ = accounts[1]
		const uintWCrGIg4 = BigInt("397")
		const boolIhvqmR = await CryptozfYZnWZy.loadNewCardType.call(uintI1jS0ww, stringihAnbNq, stringBNm6Qe, uint83rqHR, uintWf4YkQ0, uintos0t2a4, uintyMq90z1, uintGZu5GVv, uintR5Js0W5, {from: accounts[4]});
		await CryptozfYZnWZy.getBonusBoosters.call({from: accounts[3]});
		await CryptozfYZnWZy.buyBoosterCardAndOpen.call({from: accounts[5]});
		const stringuwkrke6 = await CryptozfYZnWZy.tokenURI.call(uintCr0pbRE, {from: accounts[4]});
		const uintyOHLbFb = await CryptozfYZnWZy.getTimeToDailyBonus.call(addressD9a5bnJ, {from: accounts[2]});
		const boolO4Anu92 = await CryptozfYZnWZy.buyCard.call(uintWCrGIg4, {from: accounts[2]});

		assert.equal(boolIhvqmR, true)
		await expect(CryptozfYZnWZy.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYXmZ5mj = await Cryptoz.new({from: accounts[3]});
		const addressjINT4cI = accounts[0]
		const uint9L4Mb5 = BigInt("1744")
		const addressMCSYQTU = await CryptozYXmZ5mj.initialize.call(addressjINT4cI, {from: accounts[3]});
		const uint32NSrkmN = await CryptozYXmZ5mj.getFreeCard.call(uint9L4Mb5, {from: accounts[4]});

		await expect(CryptozYXmZ5mj.getFreeCard.call(uint9L4Mb5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozpod6QC = await Cryptoz.new({from: accounts[5]});
		const uintXrDL4i2 = BigInt("1882")
		const uint256lU6a8I = await Cryptozpod6QC.totalSupply.call({from: accounts[0]});
		const uint256STfMS5n = await Cryptozpod6QC.sacrifice.call(uintXrDL4i2, {from: accounts[3]});

		assert.equal(uint256lU6a8I, BigInt("0"))
		await expect(Cryptozpod6QC.sacrifice.call(uintXrDL4i2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoznk6CHpE = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintI7etrQq = BigInt("341")
		const addresso6fojSw = accounts[3]
		const uintTCgMqI6 = BigInt("1771")
		const uint256wmActx4 = await Cryptoznk6CHpE.tokenByIndex.call(uintI7etrQq, {from: accounts[1]});
		const addressDeOoKcX = await Cryptoznk6CHpE.linkMySponsor.call(addresso6fojSw, {from: accounts[2]});
		const stringsUqYbpX = await Cryptoznk6CHpE.tokenURI.call(uintTCgMqI6, {from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const CryptozvjPR9RO = await Cryptoz.new({from: accounts[4]});
		const uintIjLFvAD = BigInt("81")
		const uintqN9Am05 = BigInt("1640")
		const uinthowYC4n = BigInt("1491")
		const uint32EVokWKk = await CryptozvjPR9RO.isValidCard.call(uintIjLFvAD, {from: accounts[4]});
		const uint256xYqvmnz = await CryptozvjPR9RO.sacrifice.call(uintqN9Am05, {from: accounts[1]});
		const uint256z4H2EgW = await CryptozvjPR9RO.tokenByIndex.call(uinthowYC4n, {from: accounts[2]});

		await expect(CryptozvjPR9RO.isValidCard.call(uintIjLFvAD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfYZnWZy = await Cryptoz.new({from: accounts[4]});
		const uintgg2jGV1 = BigInt("197")
		const uintx8OI5jZ = BigInt("1569")
		const uintnUAcvV7 = BigInt("26")
		const uintFxDNQo4 = BigInt("103")
		const uintaDEsbMC = BigInt("161")
		const uintelJi6P = BigInt("109")
		const stringBNm6Qe = "9UWaNw1SRNZYTzkkqLczWbP3CKpm9w6GBTNtPRgdf"
		const stringihAnbNq = "ikr7uymT"
		const uintKBgqrAM = BigInt("26")
		const uintovDclVc = BigInt("1776")
		const uint7C2RU4 = BigInt("1282")
		const uintrtF3Gyc = BigInt("1889")
		const uintpKbN0xz = BigInt("1248")
		const uintEUkGZSJ = BigInt("94")
		const uintfsAck9p = BigInt("230")
		const uintRTWtSKk = BigInt("250")
		const stringE1k7XUG = "r7th4ic0aFx8bKdQIOkt9y3lFZhGQllyCO"
		const stringWLdt3ce = "MiwXbOKXwWNloC8EOB2c3vfCEFxIyVbKuLWlTpE"
		const uintNHAA1L6 = BigInt("45")
		const uintSIr1fzy = BigInt("588")
		const address3GryGx = accounts[1]
		const uinthG5wUJ2 = BigInt("397")
		const boolIhvqmR = await CryptozfYZnWZy.loadNewCardType.call(uintKBgqrAM, stringihAnbNq, stringBNm6Qe, uintelJi6P, uintaDEsbMC, uintFxDNQo4, uintnUAcvV7, uintx8OI5jZ, uintgg2jGV1, {from: accounts[4]});
		await CryptozfYZnWZy.getBonusBoosters.call({from: accounts[3]});
		const uint256rmHzjfB = await CryptozfYZnWZy.tokenByIndex.call(uintovDclVc, {from: accounts[1]});
		const booll4sViC = await CryptozfYZnWZy.loadNewCardType.call(uintNHAA1L6, stringWLdt3ce, stringE1k7XUG, uintRTWtSKk, uintfsAck9p, uintEUkGZSJ, uintpKbN0xz, uintrtF3Gyc, uint7C2RU4, {from: accounts[1]});
		await CryptozfYZnWZy.buyBoosterCardAndOpen.call({from: accounts[5]});
		const stringuwkrke6 = await CryptozfYZnWZy.tokenURI.call(uintSIr1fzy, {from: accounts[4]});
		const uintyOHLbFb = await CryptozfYZnWZy.getTimeToDailyBonus.call(address3GryGx, {from: accounts[2]});
		const boolO4Anu92 = await CryptozfYZnWZy.buyCard.call(uinthG5wUJ2, {from: accounts[2]});

		assert.equal(boolIhvqmR, true)
		await expect(CryptozfYZnWZy.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozECrCII = await Cryptoz.new({from: accounts[1]});
		const uintZ3t36m2 = BigInt("760")
		const stringBbYqapJ = await CryptozECrCII.symbol.call({from: accounts[2]});
		const uint32XIIcOr6 = await CryptozECrCII.getFreeCard.call(uintZ3t36m2, {from: accounts[3]});
		const stringZHk66Az = await CryptozECrCII.symbol.call({from: accounts[0]});

		assert.equal(stringBbYqapJ, "Cryptoz")
		await expect(CryptozECrCII.getFreeCard.call(uintZ3t36m2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmffUiV9 = await Cryptoz.new({from: accounts[1]});
		const addressNrgbGoh = accounts[2]
		const uintXOdfQnl = BigInt("1086")
		const uintkyfkTGj = await CryptozmffUiV9.getTimeToDailyBonus.call(addressNrgbGoh, {from: accounts[4]});
		const boolbT7lUks = await CryptozmffUiV9.openBoosterCard.call(uintXOdfQnl, {from: accounts[0]});

		assert.equal(uintkyfkTGj, BigInt("1630203695"))
		await expect(CryptozmffUiV9.openBoosterCard.call(uintXOdfQnl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozECrCII = await Cryptoz.new({from: accounts[1]});
		const uintW9J4U1v = BigInt("1415")
		const addressmtRyqgW = accounts[2]
		const addresskDDMqOs = accounts[1]
		const uintoeTAwN = BigInt("694")
		const addressJLSQUV1 = await CryptozECrCII.transferFrom.call(addresskDDMqOs, addressmtRyqgW, uintW9J4U1v, {from: accounts[1]});
		const uint32XIIcOr6 = await CryptozECrCII.getFreeCard.call(uintoeTAwN, {from: accounts[3]});

		await expect(CryptozECrCII.transferFrom.call(addresskDDMqOs, addressmtRyqgW, uintW9J4U1v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmffUiV9 = await Cryptoz.new({from: accounts[1]});
		const addressE6e44Oj = accounts[3]
		const addressd78RsGA = accounts[5]
		const addressbc6Z7Ts = accounts[2]
		const uintKY1Sk39 = BigInt("1053")
		const uinty9OiXbB = BigInt("22")
		const addressbYZjO9p = await CryptozmffUiV9.linkMySponsor.call(addressE6e44Oj, {from: accounts[5]});
		const uint256arraydc7Kc3b = await CryptozmffUiV9.tokensOfOwner.call(addressd78RsGA, {from: accounts[2]});
		await CryptozmffUiV9.f.call({from: accounts[1]});
		const uintkyfkTGj = await CryptozmffUiV9.getTimeToDailyBonus.call(addressbc6Z7Ts, {from: accounts[4]});
		const boolbT7lUks = await CryptozmffUiV9.openBoosterCard.call(uintKY1Sk39, {from: accounts[0]});
		const uint256DLtCiMU = await CryptozmffUiV9.sacrifice.call(uinty9OiXbB, {from: accounts[5]});

		await expect(CryptozmffUiV9.linkMySponsor.call(addressE6e44Oj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozizZfSzG = await Cryptoz.new({from: accounts[0]});
		const address8Bxq3U = accounts[3]
		const addressUuN1CLG = accounts[5]
		await CryptozizZfSzG.getBonusBoosters.call({from: accounts[3]});
		const uint256arrayGuds1bM = await CryptozizZfSzG.tokensOfOwner.call(address8Bxq3U, {from: accounts[0]});
		const uint99fAtz = await CryptozizZfSzG.getTimeToDailyBonus.call(addressUuN1CLG, {from: accounts[2]});

		await expect(CryptozizZfSzG.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfYZnWZy = await Cryptoz.new({from: accounts[4]});
		const addresseIiMiO5 = accounts[4]
		const uintNgQX4uz = BigInt("197")
		const uintC30ysg4 = BigInt("1569")
		const uintWB41WRE = BigInt("26")
		const uintq69Mx9 = BigInt("103")
		const uintuzsHTWn = BigInt("161")
		const uintS9P2o1n = BigInt("109")
		const stringBNm6Qe = "9UWaNw1SRNZYTzkkqLczWbP3CKpm9w6GBTNtPRgdf"
		const stringihAnbNq = "ikr7uymT"
		const uintvkEO4tE = BigInt("26")
		const uintY63b0TM = BigInt("877")
		const uinto1Kg5qd = BigInt("588")
		const uintSJKp4XZ = BigInt("1199")
		const addresssGG1hjq = accounts[2]
		const addresslcyHZa9 = await CryptozfYZnWZy.initialize.call(addresseIiMiO5, {from: accounts[5]});
		const boolIhvqmR = await CryptozfYZnWZy.loadNewCardType.call(uintvkEO4tE, stringihAnbNq, stringBNm6Qe, uintS9P2o1n, uintuzsHTWn, uintq69Mx9, uintWB41WRE, uintC30ysg4, uintNgQX4uz, {from: accounts[4]});
		await CryptozfYZnWZy.getOwnedCard.call(uintY63b0TM, {from: "0x0000000000000000000000000000000000000001"});
		await CryptozfYZnWZy.buyBoosterCardAndOpen.call({from: accounts[5]});
		const stringuwkrke6 = await CryptozfYZnWZy.tokenURI.call(uinto1Kg5qd, {from: accounts[4]});
		const uint256CjrvhHR = await CryptozfYZnWZy.sacrifice.call(uintSJKp4XZ, {from: accounts[4]});
		const uintyOHLbFb = await CryptozfYZnWZy.getTimeToDailyBonus.call(addresssGG1hjq, {from: accounts[2]});

		await expect(CryptozfYZnWZy.initialize.call(addresseIiMiO5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmffUiV9 = await Cryptoz.new({from: accounts[1]});
		const addressBxma5YS = accounts[3]
		const uintrwYwsG = BigInt("1086")
		const uintkyfkTGj = await CryptozmffUiV9.getTimeToDailyBonus.call(addressBxma5YS, {from: accounts[4]});
		const stringqzingMd = await CryptozmffUiV9.name.call({from: accounts[4]});
		const boolbT7lUks = await CryptozmffUiV9.openBoosterCard.call(uintrwYwsG, {from: accounts[0]});

		assert.equal(stringqzingMd, "Cryptoz Cards")
		assert.equal(uintkyfkTGj, BigInt("1630203715"))
		await expect(CryptozmffUiV9.openBoosterCard.call(uintrwYwsG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozECrCII = await Cryptoz.new({from: accounts[1]});
		const uintq41r7A = BigInt("1551")
		const address6lrTo2 = accounts[2]
		const uintDwFfXj7 = BigInt("723")
		const uint256dlFugi = await CryptozECrCII.tokenOfOwnerByIndex.call(address6lrTo2, uintq41r7A, {from: accounts[4]});
		const uint32XIIcOr6 = await CryptozECrCII.getFreeCard.call(uintDwFfXj7, {from: accounts[3]});

		await expect(CryptozECrCII.tokenOfOwnerByIndex.call(address6lrTo2, uintq41r7A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfYZnWZy = await Cryptoz.new({from: accounts[4]});
		const uintqTWzV14 = BigInt("444")
		const uintegqEIt = BigInt("197")
		const uintcKr47uk = BigInt("1569")
		const uintgxwqjmu = BigInt("26")
		const uintcSoNQdK = BigInt("103")
		const uintR2uWQsI = BigInt("161")
		const uintGlU27M2 = BigInt("109")
		const stringBNm6Qe = "9UWaNw1SRNZYTzkkqLczWbP3CKpm9w6GBTNtPRgdf"
		const stringihAnbNq = "ikr7uymT"
		const uintF5FYy29 = BigInt("26")
		const uintCdfireE = BigInt("588")
		const addressAt0RUzX = accounts[3]
		await CryptozfYZnWZy.getOwnedCard.call(uintqTWzV14, {from: accounts[4]});
		const boolIhvqmR = await CryptozfYZnWZy.loadNewCardType.call(uintF5FYy29, stringihAnbNq, stringBNm6Qe, uintGlU27M2, uintR2uWQsI, uintcSoNQdK, uintgxwqjmu, uintcKr47uk, uintegqEIt, {from: accounts[4]});
		const stringuwkrke6 = await CryptozfYZnWZy.tokenURI.call(uintCdfireE, {from: accounts[4]});
		const uintyOHLbFb = await CryptozfYZnWZy.getTimeToDailyBonus.call(addressAt0RUzX, {from: accounts[2]});

		await expect(CryptozfYZnWZy.getOwnedCard.call(uintqTWzV14, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmffUiV9 = await Cryptoz.new({from: accounts[1]});
		const uintqrDtnVF = BigInt("1086")
		await CryptozmffUiV9.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
		const boolbT7lUks = await CryptozmffUiV9.openBoosterCard.call(uintqrDtnVF, {from: accounts[0]});

		await expect(CryptozmffUiV9.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozECrCII = await Cryptoz.new({from: accounts[1]});
		const uintj3m2nHK = BigInt("798")
		const uintp64NaAR = BigInt("671")
		const boolhRxGNKr = await CryptozECrCII.buyBoosterCard.call(uintj3m2nHK, {from: accounts[3]});
		await CryptozECrCII.buyBoosterCardAndOpen.call({from: accounts[5]});
		const uint32XIIcOr6 = await CryptozECrCII.getFreeCard.call(uintp64NaAR, {from: accounts[3]});

		await expect(CryptozECrCII.buyBoosterCard.call(uintj3m2nHK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfYZnWZy = await Cryptoz.new({from: accounts[4]});
		const uintPCLcAME = BigInt("197")
		const uinthLxWxn4 = BigInt("1569")
		const uintspidfd9 = BigInt("26")
		const uintifwqcAd = BigInt("103")
		const uintzzbsUu4 = BigInt("161")
		const uintl6f2u8U = BigInt("109")
		const stringBNm6Qe = "9UWaNw1SRNZYTzkkqLczWbP3CKpm9w6GBTNtPRgdf"
		const stringihAnbNq = "ikr7uymT"
		const uintVPiLKGM = BigInt("26")
		const uintYHokkJL = BigInt("169")
		const uintpDgVRtL = BigInt("1791")
		const uintI8Vxtfw = BigInt("1661")
		const uinte95mi2f = BigInt("886")
		const uintYx2ZUCp = BigInt("1505")
		const addressQ7a3TrI = accounts[4]
		const boolIhvqmR = await CryptozfYZnWZy.loadNewCardType.call(uintVPiLKGM, stringihAnbNq, stringBNm6Qe, uintl6f2u8U, uintzzbsUu4, uintifwqcAd, uintspidfd9, uinthLxWxn4, uintPCLcAME, {from: accounts[4]});
		const booldVOeMk = await CryptozfYZnWZy.addTocardType.call(uintYx2ZUCp, uinte95mi2f, uintI8Vxtfw, uintpDgVRtL, uintYHokkJL, {from: accounts[4]});
		const addressBm8MABQ = await CryptozfYZnWZy.linkMySponsor.call(addressQ7a3TrI, {from: accounts[2]});

		assert.equal(boolIhvqmR, true)
		await expect(CryptozfYZnWZy.addTocardType.call(uintYx2ZUCp, uinte95mi2f, uintI8Vxtfw, uintpDgVRtL, uintYHokkJL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfYZnWZy = await Cryptoz.new({from: accounts[4]});
		const addressh26nwWd = accounts[4]
		await CryptozfYZnWZy.getTokensByRarity.call({from: accounts[4]});
		await CryptozfYZnWZy.withdraw.call({from: accounts[4]});
		const uintyOHLbFb = await CryptozfYZnWZy.getTimeToDailyBonus.call(addressh26nwWd, {from: accounts[2]});

		await expect(CryptozfYZnWZy.getTokensByRarity.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})