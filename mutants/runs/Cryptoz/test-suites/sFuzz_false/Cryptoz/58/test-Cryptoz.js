const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozQe9S5nR = await Cryptoz.new({from: accounts[5]});
		const uintx8eJrye = BigInt("386")
		const uintVtqbKEq = BigInt("1504")
		const uintYwcWoE8 = BigInt("63")
		const uintYTYFxzE = BigInt("241")
		const uintuiu4BrM = BigInt("214")
		const uintjpSkyoA = BigInt("233")
		const stringnXEPTdM = "jqIF7CSAm9MVYqErdV0eCTCm56zDe4ARKxAAkQZwHPfOxBrPPz7PfdfQxQITd1s1NF8hzLcsvvxcsUa"
		const stringzc4WNsR = "8MdbyLIDk2uLVSijvJ"
		const uintLXbHFKI = BigInt("82")
		const addressTDJHeF = "0x0000000000000000000000000000000000000001"
		await CryptozQe9S5nR.getTokensByRarity.call({from: accounts[2]});
		await CryptozQe9S5nR.getTokensByRarity.call({from: accounts[1]});
		const boolenhOMs2 = await CryptozQe9S5nR.loadNewCardType.call(uintLXbHFKI, stringzc4WNsR, stringnXEPTdM, uintjpSkyoA, uintuiu4BrM, uintYTYFxzE, uintYwcWoE8, uintVtqbKEq, uintx8eJrye, {from: accounts[3]});
		await CryptozQe9S5nR.getTokensByRarity.call({from: accounts[2]});
		const addressT0wg0AH = await CryptozQe9S5nR.initialize.call(addressTDJHeF, {from: accounts[0]});

		await expect(CryptozQe9S5nR.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozFE9nOCT = await Cryptoz.new({from: accounts[5]});
		const uintwLIChl = BigInt("935")
		const uintNuGua2C = BigInt("1453")
		const stringGHwQeqg = await CryptozFE9nOCT.tokenURI.call(uintwLIChl, {from: accounts[1]});
		const uint256mMixVMn = await CryptozFE9nOCT.sacrifice.call(uintNuGua2C, {from: accounts[4]});
		await CryptozFE9nOCT.buyBoosterCardAndOpen.call({from: accounts[3]});

		assert.equal(stringGHwQeqg, "https://cryptoz.cards/data/935")
		await expect(CryptozFE9nOCT.sacrifice.call(uintNuGua2C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozhosx6b = await Cryptoz.new({from: accounts[5]});
		const uintTxqXqA6 = BigInt("22")
		const uintMtSAOFj = BigInt("1595")
		const uintDdXdKzU = BigInt("1540")
		const uintISO7pM = BigInt("1961")
		const uintywETitk = BigInt("64")
		const uintYJB6x2y = BigInt("127")
		const uintuHuOzIs = BigInt("65")
		const stringv4epkyK = "gdgIVMLFarNhtxw4ZKZ4OKuE53psOTPZc5o"
		const stringj7q5Q67 = "3pbTAF8cnqKO1nKTgS3DB2YNfOvPOY9Fspf0HCIiA1hUOFgcy3pkINJdxEZv"
		const uintCThPO8o = BigInt("54")
		const uintO6A6PCT = BigInt("130")
		const uintxwNIkFg = BigInt("631")
		const uintbhK2UZZ = BigInt("856")
		const uintE1IsZxV = BigInt("1766")
		const uintaAFoKn = BigInt("524")
		const uintzHyfRe3 = BigInt("965")
		const uintwkCpzss = BigInt("679")
		const addressewFgB0P = accounts[2]
		const uintsYasIw7 = BigInt("47")
		const uint5vRjsS = BigInt("1797")
		const uint0mn3As = BigInt("297")
		const uintE3Cw6Z5 = BigInt("1157")
		const uintEIya1PI = BigInt("976")
		const boolcUMZvWh = await Cryptozhosx6b.buyCard.call(uintTxqXqA6, {from: accounts[0]});
		const boolsdblP9j = await Cryptozhosx6b.loadNewCardType.call(uintCThPO8o, stringj7q5Q67, stringv4epkyK, uintuHuOzIs, uintYJB6x2y, uintywETitk, uintISO7pM, uintDdXdKzU, uintMtSAOFj, {from: accounts[1]});
		const boolSxAoxII = await Cryptozhosx6b.addTocardType.call(uintaAFoKn, uintE1IsZxV, uintbhK2UZZ, uintxwNIkFg, uintO6A6PCT, {from: accounts[1]});
		const uint256PQIB3Rg = await Cryptozhosx6b.tokenByIndex.call(uintzHyfRe3, {from: accounts[3]});
		const uint256aa8b6Yj = await Cryptozhosx6b.tokenOfOwnerByIndex.call(addressewFgB0P, uintwkCpzss, {from: accounts[2]});
		const boolrXeqxBW = await Cryptozhosx6b.addTocardType.call(uintEIya1PI, uintE3Cw6Z5, uint0mn3As, uint5vRjsS, uintsYasIw7, {from: accounts[2]});

		await expect(Cryptozhosx6b.buyCard.call(uintTxqXqA6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozXrQiUH = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHx9nBsd = accounts[3]
		const uintS4Vst2c = BigInt("180")
		const addresshhBenyG = await CryptozXrQiUH.linkMySponsor.call(addressHx9nBsd, {from: accounts[1]});
		const uint32LTzFk3r = await CryptozXrQiUH.getFreeCard.call(uintS4Vst2c, {from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const CryptozZPFpl8c = await Cryptoz.new({from: accounts[1]});
		const uintoZq1TkI = BigInt("25")
		const uintyzn8G7S = BigInt("369")
		const uintuDpB9cF = BigInt("1562")
		const uintZNsCIWZ = BigInt("953")
		const uintRYYv8AK = BigInt("169")
		await CryptozZPFpl8c.buyBoosterCardAndOpen.call({from: accounts[4]});
		const boolFEggndE = await CryptozZPFpl8c.addTocardType.call(uintRYYv8AK, uintZNsCIWZ, uintuDpB9cF, uintyzn8G7S, uintoZq1TkI, {from: "0x0000000000000000000000000000000000000001"});
		await CryptozZPFpl8c.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(CryptozZPFpl8c.buyBoosterCardAndOpen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const addressKnh5ajS = accounts[0]
		const uintBoWGeBG = BigInt("185")
		const uintfLkH4L3 = BigInt("303")
		const uintq354BQr = BigInt("1037")
		const uintHN0Hr8K = BigInt("1721")
		const uintcEDy9Dr = BigInt("1756")
		const uintII0WmEm = BigInt("1111")
		const uintCTy1u1Q = BigInt("1626")
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressKnh5ajS, {from: accounts[2]});
		const boolMGUqkC = await CryptozDi3i9hy.addTocardType.call(uintcEDy9Dr, uintHN0Hr8K, uintq354BQr, uintfLkH4L3, uintBoWGeBG, {from: accounts[5]});
		const boolz7VOjTh = await CryptozDi3i9hy.buyCard.call(uintII0WmEm, {from: accounts[4]});
		const boolEnFMY2W = await CryptozDi3i9hy.openBoosterCard.call(uintCTy1u1Q, {from: accounts[0]});

		assert.equal(uinto7f9P6r, BigInt("1630204033"))
		await expect(CryptozDi3i9hy.addTocardType.call(uintcEDy9Dr, uintHN0Hr8K, uintq354BQr, uintfLkH4L3, uintBoWGeBG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const addressXSPLcQZ = accounts[0]
		const addressNYutXs9 = accounts[3]
		const uinteQibhtn = BigInt("185")
		const uintBaf4ksk = BigInt("303")
		const uintvjtmdiF = BigInt("1037")
		const uintfMhoQm1 = BigInt("1721")
		const uintyOkwGM = BigInt("1756")
		const uintC4PTI0i = BigInt("1095")
		const uintlqlcl7 = BigInt("1626")
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressXSPLcQZ, {from: accounts[2]});
		const addressOH06Hbp = await CryptozDi3i9hy.linkMySponsor.call(addressNYutXs9, {from: accounts[0]});
		const boolMGUqkC = await CryptozDi3i9hy.addTocardType.call(uintyOkwGM, uintfMhoQm1, uintvjtmdiF, uintBaf4ksk, uinteQibhtn, {from: accounts[5]});
		const boolz7VOjTh = await CryptozDi3i9hy.buyCard.call(uintC4PTI0i, {from: accounts[4]});
		await CryptozDi3i9hy.getBonusBoosters.call({from: accounts[1]});
		const boolEnFMY2W = await CryptozDi3i9hy.openBoosterCard.call(uintlqlcl7, {from: accounts[0]});

		assert.equal(uinto7f9P6r, BigInt("1630204034"))
		await expect(CryptozDi3i9hy.linkMySponsor.call(addressNYutXs9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZPFpl8c = await Cryptoz.new({from: accounts[1]});
		const uintIV8iXNt = BigInt("1039")
		const addressaGcYFRX = accounts[1]
		const addressI3m4uz7 = accounts[3]
		const uintn5oy4Gh = BigInt("25")
		const uintLrgf0q6 = BigInt("369")
		const uintBFFSFeK = BigInt("1568")
		const uintZHJiywS = BigInt("953")
		const uintdY4UtxK = BigInt("169")
		const addressgeVauQv = accounts[0]
		const addressTmt7xpF = await CryptozZPFpl8c.transferFrom.call(addressI3m4uz7, addressaGcYFRX, uintIV8iXNt, {from: accounts[1]});
		const boolFEggndE = await CryptozZPFpl8c.addTocardType.call(uintdY4UtxK, uintZHJiywS, uintBFFSFeK, uintLrgf0q6, uintn5oy4Gh, {from: "0x0000000000000000000000000000000000000001"});
		const addressaUh5euu = await CryptozZPFpl8c.linkMySponsor.call(addressgeVauQv, {from: accounts[3]});

		await expect(CryptozZPFpl8c.transferFrom.call(addressI3m4uz7, addressaGcYFRX, uintIV8iXNt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const addressOquzN3M = accounts[0]
		const uintbtxeSDU = BigInt("96")
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressOquzN3M, {from: accounts[2]});
		const boolEnFMY2W = await CryptozDi3i9hy.openBoosterCard.call(uintbtxeSDU, {from: accounts[0]});

		assert.equal(uinto7f9P6r, BigInt("1630204006"))
		await expect(CryptozDi3i9hy.openBoosterCard.call(uintbtxeSDU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const addressBL2RcQI = accounts[0]
		const uintjRjSutq = BigInt("1157")
		const addressstDrXqS = accounts[1]
		const uintkbTNIq2 = BigInt("494")
		const uintTZseBCO = BigInt("1113")
		const uintSqUsiFK = BigInt("96")
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressBL2RcQI, {from: accounts[2]});
		const uint256Ze395wU = await CryptozDi3i9hy.tokenOfOwnerByIndex.call(addressstDrXqS, uintjRjSutq, {from: accounts[3]});
		const uint256ABddEFL = await CryptozDi3i9hy.tokenByIndex.call(uintkbTNIq2, {from: accounts[4]});
		const boolz7VOjTh = await CryptozDi3i9hy.buyCard.call(uintTZseBCO, {from: accounts[4]});
		const boolEnFMY2W = await CryptozDi3i9hy.openBoosterCard.call(uintSqUsiFK, {from: accounts[0]});

		assert.equal(uinto7f9P6r, BigInt("1630204027"))
		await expect(CryptozDi3i9hy.tokenOfOwnerByIndex.call(addressstDrXqS, uintjRjSutq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const addressCejUI6 = accounts[0]
		const uinto4kcK9 = BigInt("1827")
		const uintECOYEmD = BigInt("1111")
		const uintB3OOrvD = BigInt("96")
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressCejUI6, {from: accounts[2]});
		const uint256Ri5zY89 = await CryptozDi3i9hy.tokenByIndex.call(uinto4kcK9, {from: accounts[1]});
		await CryptozDi3i9hy.f.call({from: accounts[0]});
		const boolz7VOjTh = await CryptozDi3i9hy.buyCard.call(uintECOYEmD, {from: accounts[4]});
		const boolEnFMY2W = await CryptozDi3i9hy.openBoosterCard.call(uintB3OOrvD, {from: accounts[0]});

		assert.equal(uinto7f9P6r, BigInt("1630204011"))
		await expect(CryptozDi3i9hy.tokenByIndex.call(uinto4kcK9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZPFpl8c = await Cryptoz.new({from: accounts[1]});
		const addressZqIFEVc = accounts[1]
		const uintbE9OrDz = BigInt("25")
		const uintEOGtwdh = BigInt("369")
		const uinth33Z5JN = BigInt("1562")
		const uintDVcJr1Q = BigInt("953")
		const uintjZkGU3N = BigInt("169")
		const uint256arrayclFjT2p = await CryptozZPFpl8c.tokensOfOwner.call(addressZqIFEVc, {from: accounts[4]});
		const boolFEggndE = await CryptozZPFpl8c.addTocardType.call(uintjZkGU3N, uintDVcJr1Q, uinth33Z5JN, uintEOGtwdh, uintbE9OrDz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256arrayclFjT2p, BigInt(""))
		await expect(CryptozZPFpl8c.addTocardType.call(uintjZkGU3N, uintDVcJr1Q, uinth33Z5JN, uintEOGtwdh, uintbE9OrDz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozh4gNtES = await Cryptoz.new({from: accounts[1]});
		const uintGO9J2sa = BigInt("1063")
		const uintEczJV4 = BigInt("270")
		const uintAXlIOoe = BigInt("1637")
		const uintAUfiDLQ = BigInt("1400")
		const uintFSjDVOW = BigInt("130")
		const uintVkC473d = BigInt("230")
		const uintDPJwEre = BigInt("82")
		const stringXHvskd = "iWuFtPTahs8hnxSoOqXzhL2VPKXfq6iKnRLOCjeEsngFHwBgbbzOdVR"
		const stringO03zBhr = "eSaONrUYJhsq7a"
		const uinttMQDdN1 = BigInt("59")
		const addressbNh0YF = accounts[1]
		const boolsMealPK = await Cryptozh4gNtES.buyBoosterCard.call(uintGO9J2sa, {from: accounts[0]});
		const boolXCHnIe2 = await Cryptozh4gNtES.loadNewCardType.call(uinttMQDdN1, stringO03zBhr, stringXHvskd, uintDPJwEre, uintVkC473d, uintFSjDVOW, uintAUfiDLQ, uintAXlIOoe, uintEczJV4, {from: accounts[0]});
		const stringXLZb5Mb = await Cryptozh4gNtES.symbol.call({from: accounts[2]});
		await Cryptozh4gNtES.getBonusBoosters.call({from: accounts[0]});
		const addressJyOxz8J = await Cryptozh4gNtES.linkMySponsor.call(addressbNh0YF, {from: accounts[0]});

		await expect(Cryptozh4gNtES.buyBoosterCard.call(uintGO9J2sa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZPFpl8c = await Cryptoz.new({from: accounts[1]});
		const uintlNt4Yzt = BigInt("25")
		const uintp6uCbIY = BigInt("369")
		const uintEWV0rOm = BigInt("1562")
		const uintCqRncOq = BigInt("975")
		const uintlEdak46 = BigInt("169")
		const addressgdajhk2 = accounts[0]
		const uintCsUZ08f = BigInt("1779")
		const uintx799B0o = BigInt("1767")
		const uintKloF2Jg = BigInt("1231")
		const uintEVfIuf = BigInt("14")
		const uintaZOUpQ = BigInt("58")
		const uintvyqhLo = BigInt("197")
		const stringYlv17wm = "8Rj9aWRx3N22n9IOtJ8SCdoxs1Dx6Uk9n1bcvF22B1GuJZq8jiRGFsC3Tz6UpLPVypLGMH"
		const stringrGejgf = "YFTLe1WznsVBVEwXlE"
		const uintpK5FvG7 = BigInt("88")
		await CryptozZPFpl8c.f.call({from: "0x0000000000000000000000000000000000000001"});
		const boolFEggndE = await CryptozZPFpl8c.addTocardType.call(uintlEdak46, uintCqRncOq, uintEWV0rOm, uintp6uCbIY, uintlNt4Yzt, {from: "0x0000000000000000000000000000000000000001"});
		const addressdjdIdJF = await CryptozZPFpl8c.initialize.call(addressgdajhk2, {from: accounts[2]});
		const bool5E3VHa = await CryptozZPFpl8c.loadNewCardType.call(uintpK5FvG7, stringrGejgf, stringYlv17wm, uintvyqhLo, uintaZOUpQ, uintEVfIuf, uintKloF2Jg, uintx799B0o, uintCsUZ08f, {from: accounts[1]});

		await expect(CryptozZPFpl8c.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const uintnK2mSeV = BigInt("1368")
		const addressXXUNaU = accounts[0]
		const uintA6XDAT = BigInt("95")
		const uintjK31V08 = BigInt("1089")
		await CryptozDi3i9hy.getOwnedCard.call(uintnK2mSeV, {from: accounts[3]});
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressXXUNaU, {from: accounts[2]});
		const boolEnFMY2W = await CryptozDi3i9hy.openBoosterCard.call(uintA6XDAT, {from: accounts[0]});
		const boolF5yUldS = await CryptozDi3i9hy.buyBoosterCard.call(uintjK31V08, {from: accounts[4]});

		await expect(CryptozDi3i9hy.getOwnedCard.call(uintnK2mSeV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozb9aXsK = await Cryptoz.new({from: accounts[4]});
		const addresspNqZqp3 = accounts[4]
		const uintptMWJxs = BigInt("2005")
		await Cryptozb9aXsK.getBonusBoosters.call({from: accounts[0]});
		await Cryptozb9aXsK.getTokensByRarity.call({from: accounts[4]});
		const uintsMTJiq6 = await Cryptozb9aXsK.getTimeToDailyBonus.call(addresspNqZqp3, {from: accounts[4]});
		await Cryptozb9aXsK.f.call({from: accounts[2]});
		await Cryptozb9aXsK.withdraw.call({from: accounts[0]});
		const uint32DGYUaVc = await Cryptozb9aXsK.getFreeCard.call(uintptMWJxs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Cryptozb9aXsK.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const uint4MMZNc = BigInt("133")
		const uintanr4TMI = BigInt("683")
		const addressCtMLfAy = accounts[2]
		const uint32AtdER7v = await CryptozDi3i9hy.isValidCard.call(uint4MMZNc, {from: accounts[1]});
		const boolWmZulhU = await CryptozDi3i9hy.buyBoosterCard.call(uintanr4TMI, {from: accounts[3]});
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressCtMLfAy, {from: accounts[2]});

		await expect(CryptozDi3i9hy.isValidCard.call(uint4MMZNc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozKQEgFE2 = await Cryptoz.new({from: accounts[4]});
		const addressHiPkrF = accounts[3]
		const uinth7LPtXE = BigInt("819")
		const uintFE7WQwW = BigInt("1104")
		const addressPM634ir = await CryptozKQEgFE2.initialize.call(addressHiPkrF, {from: accounts[4]});
		const uint256mhWrGKY = await CryptozKQEgFE2.totalSupply.call({from: accounts[3]});
		const uint256uRAgA7U = await CryptozKQEgFE2.sacrifice.call(uinth7LPtXE, {from: accounts[4]});
		const uint256qmgUK7Y = await CryptozKQEgFE2.sacrifice.call(uintFE7WQwW, {from: accounts[1]});

		assert.equal(uint256mhWrGKY, BigInt("0"))
		await expect(CryptozKQEgFE2.sacrifice.call(uinth7LPtXE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const addressIDd1Fg = accounts[2]
		const uintou5dYzL = BigInt("1900")
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressIDd1Fg, {from: accounts[2]});
		const stringnuhIgB = await CryptozDi3i9hy.symbol.call({from: accounts[0]});
		const boolIIFSDxW = await CryptozDi3i9hy.buyBoosterCard.call(uintou5dYzL, {from: accounts[3]});

		assert.equal(stringnuhIgB, "Cryptoz")
		assert.equal(uinto7f9P6r, BigInt("1630204024"))
		await expect(CryptozDi3i9hy.buyBoosterCard.call(uintou5dYzL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozEe2pAKg = await Cryptoz.new({from: accounts[4]});
		const uintShCPPvR = BigInt("111")
		const uintP9JuarP = BigInt("713")
		const uintZed3PU7 = BigInt("2007")
		const uintBnth5e6 = BigInt("92")
		const uintC6OyTtb = BigInt("48")
		const uintukQ9zVi = BigInt("128")
		const stringkPp876c = "f8ht2FsnszdolUCYTrPO4NJCmDfUG0SJTBCnDhVbEMlnYgq1Wh"
		const stringdhpNpMk = "iIydWtbLDWJx9VVPbf95vNNOU7cQsN0BSYNwdVFRdEC22qWgsRzUIJevWNNlYvbYCbCfmF3I89BKvf"
		const uintXB0vo5w = BigInt("236")
		const uintjI6DR9D = BigInt("692")
		const uintwn9efMv = BigInt("1260")
		await CryptozEe2pAKg.getTokensByRarity.call({from: accounts[4]});
		const boolthkPl4v = await CryptozEe2pAKg.loadNewCardType.call(uintXB0vo5w, stringdhpNpMk, stringkPp876c, uintukQ9zVi, uintC6OyTtb, uintBnth5e6, uintZed3PU7, uintP9JuarP, uintShCPPvR, {from: accounts[4]});
		const boolpwrkDo9 = await CryptozEe2pAKg.buyBoosterCard.call(uintjI6DR9D, {from: "0x0000000000000000000000000000000000000001"});
		const uint329YPPVD = await CryptozEe2pAKg.getFreeCard.call(uintwn9efMv, {from: accounts[3]});

		await expect(CryptozEe2pAKg.getTokensByRarity.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZPFpl8c = await Cryptoz.new({from: accounts[1]});
		const uintURVmAnk = BigInt("25")
		const uintnaykXo1 = BigInt("369")
		const uint1Rz7pk = BigInt("1562")
		const uintH5uROua = BigInt("953")
		const uintAStrLOS = BigInt("169")
		await CryptozZPFpl8c.withdraw.call({from: accounts[1]});
		const boolFEggndE = await CryptozZPFpl8c.addTocardType.call(uintAStrLOS, uintH5uROua, uint1Rz7pk, uintnaykXo1, uintURVmAnk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozZPFpl8c.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const addressAom70K0 = accounts[1]
		const addressY59ipEI = accounts[4]
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressAom70K0, {from: accounts[2]});
		const stringXelUbg4 = await CryptozDi3i9hy.name.call({from: accounts[0]});
		const addressbgFfcAn = await CryptozDi3i9hy.initialize.call(addressY59ipEI, {from: accounts[3]});

		assert.equal(stringXelUbg4, "Cryptoz Cards")
		assert.equal(uinto7f9P6r, BigInt("1630204022"))
	});

	it('test for Cryptoz', async () => {
		const CryptozDi3i9hy = await Cryptoz.new({from: accounts[3]});
		const uint8tD55C = BigInt("210")
		const uintnn0WG7O = BigInt("426")
		const uintL7eAN50 = BigInt("416")
		const uintwxP4k9M = BigInt("1080")
		const uintUzI9dHT = BigInt("1125")
		const addressTkmlk90 = accounts[2]
		const boolOnj9qfF = await CryptozDi3i9hy.addTocardType.call(uintUzI9dHT, uintwxP4k9M, uintL7eAN50, uintnn0WG7O, uint8tD55C, {from: accounts[3]});
		const uinto7f9P6r = await CryptozDi3i9hy.getTimeToDailyBonus.call(addressTkmlk90, {from: accounts[2]});

		await expect(CryptozDi3i9hy.addTocardType.call(uintUzI9dHT, uintwxP4k9M, uintL7eAN50, uintnn0WG7O, uint8tD55C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})