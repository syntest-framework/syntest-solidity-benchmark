const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const addressS8vzzXy = accounts[3]
		const addresseY5j4hb = accounts[5]
		const uintwznUCX1 = BigInt("1982")
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addressS8vzzXy, {from: accounts[5]});
		const uint256arrayWI1Bten = await CryptozHnUoWXT.tokensOfOwner.call(addresseY5j4hb, {from: accounts[1]});
		const stringRdh5QJZ = await CryptozHnUoWXT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zypXdzq = await CryptozHnUoWXT.sacrifice.call(uintwznUCX1, {from: accounts[1]});

		assert.equal(stringRdh5QJZ, "Cryptoz Cards")
		assert.equal(uint256arrayWI1Bten, BigInt(""))
		assert.equal(uintQtruXwZ, BigInt("1630204022"))
		await expect(CryptozHnUoWXT.sacrifice.call(uintwznUCX1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoznIOb0TL = await Cryptoz.new({from: accounts[3]});
		const addressqRAmDUW = accounts[3]
		const addressgY44VH4 = accounts[2]
		const addresse9enuHS = await CryptoznIOb0TL.linkMySponsor.call(addressqRAmDUW, {from: accounts[4]});
		const stringt6mnWpy = await CryptoznIOb0TL.symbol.call({from: accounts[0]});
		const addressSPXULms = await CryptoznIOb0TL.initialize.call(addressgY44VH4, {from: accounts[2]});

		await expect(CryptoznIOb0TL.linkMySponsor.call(addressqRAmDUW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozFSdmzIy = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzeW56Pu = BigInt("623")
		const addressEtbge5f = "0x0000000000000000000000000000000000000001"
		const uintl3Yxo9a = BigInt("300")
		const uintciU52so = BigInt("689")
		const addressStXzK5R = accounts[3]
		const addressSQqGRm8 = accounts[3]
		const stringVuBIpd8 = await CryptozFSdmzIy.tokenURI.call(uintzeW56Pu, {from: accounts[4]});
		const addressitEtUoR = await CryptozFSdmzIy.initialize.call(addressEtbge5f, {from: accounts[2]});
		const stringGic0ODN = await CryptozFSdmzIy.tokenURI.call(uintl3Yxo9a, {from: accounts[4]});
		const addresssvvTLxM = await CryptozFSdmzIy.transferFrom.call(addressSQqGRm8, addressStXzK5R, uintciU52so, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozzSZyJFU = await Cryptoz.new({from: accounts[4]});
		const uint04rvmH = BigInt("1727")
		const uintoR0J13O = BigInt("1659")
		const uintTHoVAZ8 = BigInt("1771")
		const uinthfXyus = BigInt("90")
		const uintdeKxOIg = BigInt("901")
		const uintVgYCitk = BigInt("216")
		const uintS3Qr4UK = BigInt("867")
		const uintChu5gyz = BigInt("334")
		const uintKMf1rkW = BigInt("1392")
		const uinti2fuS2r = BigInt("1606")
		const boolxCDdgPP = await CryptozzSZyJFU.buyBoosterCard.call(uint04rvmH, {from: accounts[3]});
		const uint32OlKIa6e = await CryptozzSZyJFU.isValidCard.call(uintoR0J13O, {from: accounts[2]});
		const uint256c8BzMku = await CryptozzSZyJFU.sacrifice.call(uintTHoVAZ8, {from: "0x0000000000000000000000000000000000000001"});
		const boolPn3ro9F = await CryptozzSZyJFU.addTocardType.call(uintChu5gyz, uintS3Qr4UK, uintVgYCitk, uintdeKxOIg, uinthfXyus, {from: accounts[2]});
		const uint256v3BLQaL = await CryptozzSZyJFU.sacrifice.call(uintKMf1rkW, {from: accounts[2]});
		const uint256Wb6MzuP = await CryptozzSZyJFU.tokenByIndex.call(uinti2fuS2r, {from: accounts[2]});

		await expect(CryptozzSZyJFU.buyBoosterCard.call(uint04rvmH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozwUIGPwJ = await Cryptoz.new({from: accounts[0]});
		const uintRutHQki = BigInt("622")
		const addressTpQhh2 = accounts[2]
		const uintY7Eb0Tl = BigInt("1896")
		const uint32rim6tmJ = await CryptozwUIGPwJ.isValidCard.call(uintRutHQki, {from: accounts[3]});
		const stringGhLHXd1 = await CryptozwUIGPwJ.symbol.call({from: accounts[1]});
		const uint256arrayFg7Xed1 = await CryptozwUIGPwJ.tokensOfOwner.call(addressTpQhh2, {from: accounts[3]});
		const uint256SefGEfh = await CryptozwUIGPwJ.sacrifice.call(uintY7Eb0Tl, {from: accounts[3]});

		await expect(CryptozwUIGPwJ.isValidCard.call(uintRutHQki, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozGyEd0Hc = await Cryptoz.new({from: accounts[2]});
		const uintOIo8kyO = BigInt("247")
		const uintJS5NE94 = BigInt("1650")
		const uintkEgNb9i = BigInt("1405")
		const uintZHR1tdi = BigInt("570")
		const uintaxe2jI = BigInt("1087")
		const addressqkA3XHw = accounts[4]
		const uintXGhwwqL = BigInt("1495")
		const uintITzYRC4 = BigInt("156")
		const uintvDD8JcE = BigInt("616")
		const uintXQDYggN = BigInt("1964")
		const uintkzHwAcH = BigInt("710")
		const uintjPrSfK1 = BigInt("1144")
		const uintT1yIKRh = BigInt("482")
		const boolI1VwDg7 = await CryptozGyEd0Hc.addTocardType.call(uintaxe2jI, uintZHR1tdi, uintkEgNb9i, uintJS5NE94, uintOIo8kyO, {from: accounts[5]});
		const uint256arrayjUDlW7C = await CryptozGyEd0Hc.tokensOfOwner.call(addressqkA3XHw, {from: accounts[3]});
		const uint32eEVPnyY = await CryptozGyEd0Hc.getFreeCard.call(uintXGhwwqL, {from: accounts[4]});
		const boolsgCKb6t = await CryptozGyEd0Hc.addTocardType.call(uintjPrSfK1, uintkzHwAcH, uintXQDYggN, uintvDD8JcE, uintITzYRC4, {from: accounts[3]});
		const stringdj7lsIB = await CryptozGyEd0Hc.tokenURI.call(uintT1yIKRh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozGyEd0Hc.addTocardType.call(uintaxe2jI, uintZHR1tdi, uintkEgNb9i, uintJS5NE94, uintOIo8kyO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJOwv33F = await Cryptoz.new({from: accounts[3]});
		const addressYzISRrr = accounts[2]
		const addressBfBunUV = accounts[1]
		const uintg1KuYDe = BigInt("9")
		const addresstiYL5D0 = accounts[0]
		await CryptozJOwv33F.f.call({from: accounts[1]});
		const uint256arrayTbF7Mh2 = await CryptozJOwv33F.tokensOfOwner.call(addressYzISRrr, {from: accounts[1]});
		const uint256arraybV4QM61 = await CryptozJOwv33F.tokensOfOwner.call(addressBfBunUV, {from: accounts[2]});
		const uint256f6YmZGy = await CryptozJOwv33F.tokenOfOwnerByIndex.call(addresstiYL5D0, uintg1KuYDe, {from: accounts[1]});

		await expect(CryptozJOwv33F.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const addressBdWJ6OI = accounts[4]
		const uintDccfBgS = BigInt("1982")
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addressBdWJ6OI, {from: accounts[5]});
		const stringRdh5QJZ = await CryptozHnUoWXT.name.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozHnUoWXT.buyBoosterCardAndOpen.call({from: accounts[2]});
		await CryptozHnUoWXT.getTokensByRarity.call({from: accounts[5]});
		const uint256zypXdzq = await CryptozHnUoWXT.sacrifice.call(uintDccfBgS, {from: accounts[1]});

		assert.equal(stringRdh5QJZ, "Cryptoz Cards")
		assert.equal(uintQtruXwZ, BigInt("1630204027"))
		await expect(CryptozHnUoWXT.buyBoosterCardAndOpen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const uintTIdIElt = BigInt("1006")
		const addressIJ96Zjg = accounts[4]
		const addressJN4xfUO = accounts[3]
		const uintw0qfSu = BigInt("346")
		const uintbo16GGz = BigInt("1690")
		const uintUqYAQad = BigInt("872")
		const uintazFW2cg = BigInt("33")
		const uintUWi83ya = BigInt("31")
		const uintszOXoCC = BigInt("207")
		const stringuMkpLwb = "6ADu7mpVSXvve2bwyJarKfd8v5xdFt8S9n"
		const stringMRNQiyR = "Ufo9zRspm48rBmfbM2GzumT"
		const uintpab7g5 = BigInt("120")
		const uintjxi6Xzq = BigInt("1990")
		const uint256KlZSoZt = await CryptozHnUoWXT.tokenOfOwnerByIndex.call(addressIJ96Zjg, uintTIdIElt, {from: accounts[3]});
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addressJN4xfUO, {from: accounts[5]});
		const stringRdh5QJZ = await CryptozHnUoWXT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUSQGhj = await CryptozHnUoWXT.loadNewCardType.call(uintpab7g5, stringMRNQiyR, stringuMkpLwb, uintszOXoCC, uintUWi83ya, uintazFW2cg, uintUqYAQad, uintbo16GGz, uintw0qfSu, {from: accounts[2]});
		const uint256zypXdzq = await CryptozHnUoWXT.sacrifice.call(uintjxi6Xzq, {from: accounts[1]});

		await expect(CryptozHnUoWXT.tokenOfOwnerByIndex.call(addressIJ96Zjg, uintTIdIElt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const addressaxxkwqV = accounts[4]
		const uinty7SW5hG = BigInt("14")
		const uintEBlxeu = BigInt("1107")
		const uinthYrR57A = BigInt("632")
		const uintdMbXvo6 = BigInt("530")
		const uintkSSHOlL = BigInt("1153")
		const addressiwEfQzf = "0x0000000000000000000000000000000000000001"
		const uintksgZUbo = BigInt("1982")
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addressaxxkwqV, {from: accounts[5]});
		const boolvxnRC4p = await CryptozHnUoWXT.addTocardType.call(uintkSSHOlL, uintdMbXvo6, uinthYrR57A, uintEBlxeu, uinty7SW5hG, {from: accounts[4]});
		await CryptozHnUoWXT.getBonusBoosters.call({from: accounts[3]});
		const addressm7GMtrP = await CryptozHnUoWXT.linkMySponsor.call(addressiwEfQzf, {from: accounts[5]});
		const stringRdh5QJZ = await CryptozHnUoWXT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zypXdzq = await CryptozHnUoWXT.sacrifice.call(uintksgZUbo, {from: accounts[1]});

		assert.equal(uintQtruXwZ, BigInt("1630204012"))
		await expect(CryptozHnUoWXT.addTocardType.call(uintkSSHOlL, uintdMbXvo6, uinthYrR57A, uintEBlxeu, uinty7SW5hG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozrzlDgrI = await Cryptoz.new({from: accounts[2]});
		const uintVnJFF8I = BigInt("901")
		const uintCKhsxUP = BigInt("279")
		const addressTdOzPBo = accounts[2]
		const uintR7vnyU1 = BigInt("334")
		const addressvebM9FT = accounts[4]
		const uint256kkOvnYH = await CryptozrzlDgrI.totalSupply.call({from: accounts[0]});
		const uint32VQxLcqh = await CryptozrzlDgrI.isValidCard.call(uintVnJFF8I, {from: accounts[1]});
		const stringDFegGLE = await CryptozrzlDgrI.symbol.call({from: accounts[2]});
		const uint256trRL1il = await CryptozrzlDgrI.tokenOfOwnerByIndex.call(addressTdOzPBo, uintCKhsxUP, {from: accounts[1]});
		const stringdnnGPTa = await CryptozrzlDgrI.tokenURI.call(uintR7vnyU1, {from: accounts[4]});
		const uintqZdeNAd = await CryptozrzlDgrI.getTimeToDailyBonus.call(addressvebM9FT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256kkOvnYH, BigInt("0"))
		await expect(CryptozrzlDgrI.isValidCard.call(uintVnJFF8I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const addressOFt09xk = accounts[4]
		const uintI2NOZLl = BigInt("225")
		const uintHJOVuz4 = BigInt("1982")
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addressOFt09xk, {from: accounts[5]});
		await CryptozHnUoWXT.getTokensByRarity.call({from: accounts[4]});
		const boolm8ahDCr = await CryptozHnUoWXT.openBoosterCard.call(uintI2NOZLl, {from: accounts[1]});
		const uint256zypXdzq = await CryptozHnUoWXT.sacrifice.call(uintHJOVuz4, {from: accounts[1]});

		assert.equal(uintQtruXwZ, BigInt("1630204009"))
		await expect(CryptozHnUoWXT.getTokensByRarity.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const addressuLrE7cc = accounts[4]
		const uintjDeCKTq = BigInt("229")
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addressuLrE7cc, {from: accounts[5]});
		const stringQIw14KN = await CryptozHnUoWXT.tokenURI.call(uintjDeCKTq, {from: accounts[0]});

		assert.equal(stringQIw14KN, "https://cryptoz.cards/data/229")
		assert.equal(uintQtruXwZ, BigInt("1630204019"))
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const addressIJsOcRh = accounts[4]
		await CryptozHnUoWXT.getBonusBoosters.call({from: accounts[0]});
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addressIJsOcRh, {from: accounts[5]});

		await expect(CryptozHnUoWXT.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhA3xY5B = await Cryptoz.new({from: accounts[2]});
		const addressgfO5raQ = accounts[4]
		const stringIApcazr = await CryptozhA3xY5B.symbol.call({from: accounts[0]});
		const addressSKgNBZ4 = await CryptozhA3xY5B.linkMySponsor.call(addressgfO5raQ, {from: accounts[4]});

		assert.equal(stringIApcazr, "Cryptoz")
		await expect(CryptozhA3xY5B.linkMySponsor.call(addressgfO5raQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const addresspf9107M = accounts[4]
		const uintfd1H32f = BigInt("1207")
		const uintkWLmHhH = BigInt("744")
		const uintI7MyEVA = BigInt("984")
		const uintmaBz6ts = BigInt("238")
		const uintYhqnTz8 = BigInt("166")
		const uintfbP4ehJ = BigInt("23")
		const stringEZKQP9r = "BfK4TLUmObWr39OWESOsWzU3oKXzhjc7wTn4KzVAcUZTmAfCp7swO9Saw87v0mM8TNG"
		const stringK6J46N4 = "memJgUKSFyNpk7kR7JBn7Ce3BhSKdCY1L6YPzdOCrMx8my2znhRdOS3aJtTBDfhYMgxjXDx"
		const uintOtw9jX = BigInt("140")
		const uint8nkLiz = BigInt("852")
		const uintP9rc1U6 = BigInt("2046")
		const uintTTO0iST = BigInt("901")
		const uintoWdvusO = BigInt("836")
		const uintVoYIXPU = BigInt("93")
		const uintoAGSV8J = BigInt("239")
		const uintMIHsxYj = BigInt("1")
		const stringds2BpP5 = "FiY5C3iBi4LFaRqklKCMkwzjBo9MDNgaGvNzRwv5AM3XRCmkIsEXTSithn8IWMGFiDJDA5sma3EsyeD2aJiVdlH3QbSLmDIK3"
		const string2BLbap = "T4sV645BHwYHFyZc72S1xb12b6Qn1"
		const uintqbtvqba = BigInt("37")
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addresspf9107M, {from: accounts[5]});
		const bools8XOw9U = await CryptozHnUoWXT.loadNewCardType.call(uintOtw9jX, stringK6J46N4, stringEZKQP9r, uintfbP4ehJ, uintYhqnTz8, uintmaBz6ts, uintI7MyEVA, uintkWLmHhH, uintfd1H32f, {from: accounts[4]});
		const boolVti8k3t = await CryptozHnUoWXT.openBoosterCard.call(uint8nkLiz, {from: accounts[5]});
		const boolsQFDMm = await CryptozHnUoWXT.loadNewCardType.call(uintqbtvqba, string2BLbap, stringds2BpP5, uintMIHsxYj, uintoAGSV8J, uintVoYIXPU, uintoWdvusO, uintTTO0iST, uintP9rc1U6, {from: accounts[3]});

		assert.equal(bools8XOw9U, true)
		assert.equal(uintQtruXwZ, BigInt("1630204024"))
		await expect(CryptozHnUoWXT.openBoosterCard.call(uint8nkLiz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const addressM4N98WD = accounts[4]
		const uinterpmcly = BigInt("715")
		const uintDwCRTBL = BigInt("1207")
		const uinty3jPc9U = BigInt("744")
		const uintmlljfoq = BigInt("984")
		const uintXqzigK6 = BigInt("238")
		const uintLNPjH4Z = BigInt("166")
		const uintkiPMr6w = BigInt("23")
		const stringEZKQP9r = "BfK4TLUmObWr39OWESOsWzU3oKXzhjc7wTn4KzVAcUZTmAfCp7swO9Saw87v0mM8TNG"
		const stringK6J46N4 = "memJgUKSFyNpk7skR7JBn7Ce3BhSKdCY1L6YPzdOCrMx8my2znhRdOS3aJtTBDfhYMgxjXDx"
		const uintehoihv6 = BigInt("140")
		const uint58ynH3 = BigInt("1151")
		const uintp5Jd6TC = BigInt("852")
		const uintFfHt15A = BigInt("2046")
		const uinttIAeIkO = BigInt("901")
		const uintO8rg3rs = BigInt("836")
		const uintXarow9 = BigInt("93")
		const uintJuLF1xQ = BigInt("239")
		const uintY726jUg = BigInt("1")
		const stringds2BpP5 = "FiY5C3iBi4LFaRqklKCMkwzjBo9MDNgaGvNzRwv5AM3XRCmkIsEXTSithn8IWMGFiDJDA5sma3EsyeD2aJiVdlH3QbSLmDIK3"
		const string2BLbap = "T4sV645BHwYHFyZc72S1xb12b6Qn1"
		const uintfSprk4e = BigInt("37")
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addressM4N98WD, {from: accounts[5]});
		const uint256AJldq2n = await CryptozHnUoWXT.tokenByIndex.call(uinterpmcly, {from: accounts[3]});
		const bools8XOw9U = await CryptozHnUoWXT.loadNewCardType.call(uintehoihv6, stringK6J46N4, stringEZKQP9r, uintkiPMr6w, uintLNPjH4Z, uintXqzigK6, uintmlljfoq, uinty3jPc9U, uintDwCRTBL, {from: accounts[4]});
		const uint256Tr9SWf = await CryptozHnUoWXT.tokenByIndex.call(uint58ynH3, {from: accounts[0]});
		const boolVti8k3t = await CryptozHnUoWXT.openBoosterCard.call(uintp5Jd6TC, {from: accounts[5]});
		const boolsQFDMm = await CryptozHnUoWXT.loadNewCardType.call(uintfSprk4e, string2BLbap, stringds2BpP5, uintY726jUg, uintJuLF1xQ, uintXarow9, uintO8rg3rs, uinttIAeIkO, uintFfHt15A, {from: accounts[3]});

		assert.equal(uintQtruXwZ, BigInt("1630204010"))
		await expect(CryptozHnUoWXT.tokenByIndex.call(uinterpmcly, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const uintt71mdp = BigInt("1591")
		const uintbnCmti1 = BigInt("1642")
		const addressCry8M0 = accounts[4]
		await CryptozHnUoWXT.getOwnedCard.call(uintt71mdp, {from: accounts[2]});
		const uint256CZ9VL0E = await CryptozHnUoWXT.sacrifice.call(uintbnCmti1, {from: accounts[1]});
		const uintQtruXwZ = await CryptozHnUoWXT.getTimeToDailyBonus.call(addressCry8M0, {from: accounts[5]});
		await CryptozHnUoWXT.buyBoosterCardAndOpen.call({from: accounts[3]});

		await expect(CryptozHnUoWXT.getOwnedCard.call(uintt71mdp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const uintd5ngXkc = BigInt("597")
		const addressF4hCHHL = accounts[0]
		const addressQy879np = accounts[1]
		const uintlFYoUP5 = BigInt("792")
		const addressbiVZupe = await CryptozHnUoWXT.transferFrom.call(addressQy879np, addressF4hCHHL, uintd5ngXkc, {from: accounts[0]});
		const boolVti8k3t = await CryptozHnUoWXT.openBoosterCard.call(uintlFYoUP5, {from: accounts[5]});

		await expect(CryptozHnUoWXT.transferFrom.call(addressQy879np, addressF4hCHHL, uintd5ngXkc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const addressU8QOMdB = accounts[2]
		const uintwIrypRc = BigInt("851")
		const addressZJFt4nq = await CryptozHnUoWXT.initialize.call(addressU8QOMdB, {from: accounts[4]});
		const boolVti8k3t = await CryptozHnUoWXT.openBoosterCard.call(uintwIrypRc, {from: accounts[5]});
		await CryptozHnUoWXT.getBonusBoosters.call({from: accounts[0]});

		await expect(CryptozHnUoWXT.openBoosterCard.call(uintwIrypRc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHnUoWXT = await Cryptoz.new({from: accounts[4]});
		const uinto7lYG2C = BigInt("1083")
		const uintx6cXqvS = BigInt("490")
		const uinte6psGIa = BigInt("24")
		const uintMHOT0L = BigInt("136")
		const uintrrXuYxp = BigInt("34")
		const uintCpQ6qQ9 = BigInt("19")
		const stringVMCVAVD = "l9vJUg1xOORdA5GCqIvAchXRRSnkhkuPGD2QTx4T7amtROfvpUKyXPq9mloP4hHOc53rYXVQ48qeZIqRDwECvl5MzpcBD3lB"
		const stringAQHIZfi = "2aTtLO29STQ5S6Ho9bPoj3PWlijrRYcwjXluNed8QNR15iC5SzpeInGfl6RMxpTOH4ASwpYCg4KfBgUxK0UhfQ1z96HhoF"
		const uintxgQiXkC = BigInt("193")
		const uintedAFJV = BigInt("843")
		await CryptozHnUoWXT.withdraw.call({from: accounts[4]});
		const boolctRoOD9 = await CryptozHnUoWXT.loadNewCardType.call(uintxgQiXkC, stringAQHIZfi, stringVMCVAVD, uintCpQ6qQ9, uintrrXuYxp, uintMHOT0L, uinte6psGIa, uintx6cXqvS, uinto7lYG2C, {from: accounts[4]});
		const boolVti8k3t = await CryptozHnUoWXT.openBoosterCard.call(uintedAFJV, {from: accounts[5]});

		await expect(CryptozHnUoWXT.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})