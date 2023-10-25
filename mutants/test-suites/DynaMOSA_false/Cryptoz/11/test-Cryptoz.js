const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozhbvcBz = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPmUqaLu = BigInt("2015")
		const addressGtSFM9E = accounts[0]
		const uintVGCx62F = BigInt("1995")
		const uintp8JvKXj = BigInt("212")
		const uintCB5j7ww = BigInt("915")
		const uintQR9OCTg = BigInt("1269")
		const uintnfruTKC = BigInt("206")
		const uintVSQNPFl = BigInt("84")
		const uintiNf6r5q = BigInt("204")
		const string6Tr18D = "6H3kqXl2wVy2KExfq9qXhK2H4hGcFmd1P2ar"
		const stringajIu1gt = "itX7NPQPdMSWGEfI1yLNAhqzOuwmG4euYoNs19osq887zmnfGIv8CFRnfIKjhH6QpTNc1vCdhNP"
		const uintaK69WC = BigInt("31")
		const uint256phhPA6d = await CryptozhbvcBz.tokenOfOwnerByIndex.call(addressGtSFM9E, uintPmUqaLu, {from: accounts[2]});
		const uint256F2Fu7r8 = await CryptozhbvcBz.sacrifice.call(uintVGCx62F, {from: accounts[2]});
		const boolq2BQtKi = await CryptozhbvcBz.loadNewCardType.call(uintaK69WC, stringajIu1gt, string6Tr18D, uintiNf6r5q, uintVSQNPFl, uintnfruTKC, uintQR9OCTg, uintCB5j7ww, uintp8JvKXj, {from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const CryptoztcG9h7R = await Cryptoz.new({from: accounts[2]});
		const uintPtSv5Gi = BigInt("1463")
		const uintk5XFBHr = BigInt("1795")
//		const uint256Yy56tpR = await CryptoztcG9h7R.sacrifice.call(uintPtSv5Gi, {from: accounts[0]});
//		await CryptoztcG9h7R.buyBoosterCardAndOpen.call({from: accounts[2]});
//		const boolOi68raK = await CryptoztcG9h7R.openBoosterCard.call(uintk5XFBHr, {from: accounts[3]});
//		const stringncb5XB = await CryptoztcG9h7R.symbol.call({from: accounts[0]});

		await expect(CryptoztcG9h7R.sacrifice.call(uintPtSv5Gi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozSCS58H6 = await Cryptoz.new({from: accounts[0]});
		const uintvwvbdn0 = BigInt("1810")
		const uintAYYisYj = BigInt("409")
		const uintSj40ynh = BigInt("1184")
		const addressbBBpjzr = accounts[4]
//		const boolsjeyvvY = await CryptozSCS58H6.openBoosterCard.call(uintvwvbdn0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint32AnIZKB4 = await CryptozSCS58H6.isValidCard.call(uintAYYisYj, {from: accounts[2]});
//		const uint256M4fKYf = await CryptozSCS58H6.tokenOfOwnerByIndex.call(addressbBBpjzr, uintSj40ynh, {from: accounts[2]});
//		await CryptozSCS58H6.buyBoosterCardAndOpen.call({from: accounts[3]});

		await expect(CryptozSCS58H6.openBoosterCard.call(uintvwvbdn0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozEGTtZaH = await Cryptoz.new({from: accounts[1]});
		const addressI3S6BCX = accounts[1]
//		const addressyYaN24G = await CryptozEGTtZaH.linkMySponsor.call(addressI3S6BCX, {from: accounts[4]});
//		await CryptozEGTtZaH.buyBoosterCardAndOpen.call({from: accounts[2]});

		await expect(CryptozEGTtZaH.linkMySponsor.call(addressI3S6BCX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztBtopkY = await Cryptoz.new({from: accounts[0]});
		const addressEqwCcdF = accounts[5]
		const uintXm4Wxo8 = BigInt("860")
		const uintdCqYexI = BigInt("1818")
		const uint256arraykfcMPMq = await CryptoztBtopkY.tokensOfOwner.call(addressEqwCcdF, {from: accounts[4]});
		const stringjgRAWpR = await CryptoztBtopkY.tokenURI.call(uintXm4Wxo8, {from: accounts[1]});
//		const boolQH8YReQ = await CryptoztBtopkY.openBoosterCard.call(uintdCqYexI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringjgRAWpR, "https://cryptoz.cards/data/860")
		assert.equal(uint256arraykfcMPMq, BigInt(""))
		await expect(CryptoztBtopkY.openBoosterCard.call(uintdCqYexI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozVxFefGG = await Cryptoz.new({from: accounts[3]});
		const addressOmAhPVP = accounts[1]
		const uinte0SfzxE = BigInt("1690")
		const uintDbvSA3M = BigInt("1231")
		const uintaNv5s0P = BigInt("1861")
//		await CryptozVxFefGG.f.call({from: accounts[0]});
//		await CryptozVxFefGG.getBonusBoosters.call({from: accounts[4]});
//		const uint256arrayjlLWJrV = await CryptozVxFefGG.tokensOfOwner.call(addressOmAhPVP, {from: accounts[3]});
//		const uint25693pJEI = await CryptozVxFefGG.tokenByIndex.call(uinte0SfzxE, {from: "0x0000000000000000000000000000000000000001"});
//		const boolY5wxnmB = await CryptozVxFefGG.openBoosterCard.call(uintDbvSA3M, {from: accounts[3]});
//		const boolvxXyC3g = await CryptozVxFefGG.openBoosterCard.call(uintaNv5s0P, {from: accounts[5]});

		await expect(CryptozVxFefGG.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDhTBpRn = await Cryptoz.new({from: accounts[2]});
		const uintsH1bWTD = BigInt("358")
		const addressJWMm68R = "0x0000000000000000000000000000000000000001"
		const uintxJUqYiX = BigInt("1881")
//		await CryptozDhTBpRn.getBonusBoosters.call({from: accounts[4]});
//		const uint32E7bhxg3 = await CryptozDhTBpRn.isValidCard.call(uintsH1bWTD, {from: accounts[0]});
//		const uint256arraygK3uyxv = await CryptozDhTBpRn.tokensOfOwner.call(addressJWMm68R, {from: accounts[0]});
//		await CryptozDhTBpRn.getOwnedCard.call(uintxJUqYiX, {from: accounts[1]});

		await expect(CryptozDhTBpRn.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozEGTtZaH = await Cryptoz.new({from: accounts[1]});
//		await CryptozEGTtZaH.buyBoosterCardAndOpen.call({from: accounts[2]});

		await expect(CryptozEGTtZaH.buyBoosterCardAndOpen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDbWNMRh = await Cryptoz.new({from: accounts[3]});
		const uintL5sy0B8 = BigInt("67")
		const uintH9Lcygg = BigInt("964")
		const uintFC7D2Wr = BigInt("952")
		const uintf5tzMkd = BigInt("1326")
		const uintl3X2tdR = BigInt("1018")
		const uintVBR6vt = BigInt("208")
		const uintO4vxuFq = BigInt("201")
		const uintE9oUN6Q = BigInt("182")
		const stringK6SuWE = "oIw6y9t"
		const stringCthDqMe = "Wnep"
		const uintDfsR9qY = BigInt("206")
		const stringDSoBaa6 = await CryptozDbWNMRh.symbol.call({from: accounts[4]});
//		const uint32k2dWHsR = await CryptozDbWNMRh.getFreeCard.call(uintL5sy0B8, {from: accounts[2]});
//		await CryptozDbWNMRh.f.call({from: accounts[0]});
//		const uint256JyBcnia = await CryptozDbWNMRh.tokenByIndex.call(uintH9Lcygg, {from: accounts[0]});
//		const boolwV8i1S1 = await CryptozDbWNMRh.loadNewCardType.call(uintDfsR9qY, stringCthDqMe, stringK6SuWE, uintE9oUN6Q, uintO4vxuFq, uintVBR6vt, uintl3X2tdR, uintf5tzMkd, uintFC7D2Wr, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256s1ZFjvU = await CryptozDbWNMRh.totalSupply.call({from: accounts[4]});

		assert.equal(stringDSoBaa6, "Cryptoz")
		await expect(CryptozDbWNMRh.getFreeCard.call(uintL5sy0B8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztBtopkY = await Cryptoz.new({from: accounts[0]});
		const addressZGOU8Cf = accounts[5]
		const uintdqXj8ws = BigInt("806")
		const uintWdYHxk = BigInt("193")
		const uintVs4PCPz = BigInt("397")
		const uintKxhh9ym = BigInt("514")
		const uintSHrtBd0 = BigInt("1859")
		const uintROTBGs = BigInt("384")
		const uintZzkUIN2 = BigInt("860")
		const uintqguZhR = BigInt("1808")
		const uint256arraykfcMPMq = await CryptoztBtopkY.tokensOfOwner.call(addressZGOU8Cf, {from: accounts[4]});
//		const boolsNohWz = await CryptoztBtopkY.buyBoosterCard.call(uintdqXj8ws, {from: accounts[4]});
//		const boolqhQcbUo = await CryptoztBtopkY.addTocardType.call(uintROTBGs, uintSHrtBd0, uintKxhh9ym, uintVs4PCPz, uintWdYHxk, {from: accounts[0]});
//		const stringjgRAWpR = await CryptoztBtopkY.tokenURI.call(uintZzkUIN2, {from: accounts[1]});
//		const boolQH8YReQ = await CryptoztBtopkY.openBoosterCard.call(uintqguZhR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256arraykfcMPMq, BigInt(""))
		await expect(CryptoztBtopkY.buyBoosterCard.call(uintdqXj8ws, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozXKwK8XG = await Cryptoz.new({from: accounts[2]});
		const uintdXRJLMd = BigInt("1836")
		const stringttIIKlv = await CryptozXKwK8XG.symbol.call({from: accounts[2]});
//		await CryptozXKwK8XG.getTokensByRarity.call({from: accounts[3]});
//		const boolfobMLTm = await CryptozXKwK8XG.openBoosterCard.call(uintdXRJLMd, {from: accounts[5]});

		assert.equal(stringttIIKlv, "Cryptoz")
		await expect(CryptozXKwK8XG.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozEGTtZaH = await Cryptoz.new({from: accounts[1]});
		const uintqtxTfg = BigInt("1946")
//		await CryptozEGTtZaH.getOwnedCard.call(uintqtxTfg, {from: accounts[2]});
//		await CryptozEGTtZaH.buyBoosterCardAndOpen.call({from: accounts[2]});

		await expect(CryptozEGTtZaH.getOwnedCard.call(uintqtxTfg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztKNziwF = await Cryptoz.new({from: accounts[4]});
		const uint6TJxw0 = BigInt("1333")
		const addressT0EC5NN = accounts[0]
		const uint256AVLLMmP = await CryptoztKNziwF.totalSupply.call({from: accounts[3]});
//		const uint256XfGqyZv = await CryptoztKNziwF.tokenOfOwnerByIndex.call(addressT0EC5NN, uint6TJxw0, {from: accounts[2]});

		assert.equal(uint256AVLLMmP, BigInt("0"))
		await expect(CryptoztKNziwF.tokenOfOwnerByIndex.call(addressT0EC5NN, uint6TJxw0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztBtopkY = await Cryptoz.new({from: accounts[0]});
		const addressE4JzQbO = accounts[6]
		const uintvyGY8rK = BigInt("860")
		const addressaSh9Hpd = accounts[4]
		const uintXTKPGwE = BigInt("1818")
		const uint256arraykfcMPMq = await CryptoztBtopkY.tokensOfOwner.call(addressE4JzQbO, {from: accounts[4]});
		const stringjgRAWpR = await CryptoztBtopkY.tokenURI.call(uintvyGY8rK, {from: accounts[1]});
//		const addressXU0HDl = await CryptoztBtopkY.initialize.call(addressaSh9Hpd, {from: accounts[2]});
//		const boolQH8YReQ = await CryptoztBtopkY.openBoosterCard.call(uintXTKPGwE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringjgRAWpR, "https://cryptoz.cards/data/860")
		assert.equal(uint256arraykfcMPMq, BigInt(""))
		await expect(CryptoztBtopkY.initialize.call(addressaSh9Hpd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozoSFKp9x = await Cryptoz.new({from: accounts[0]});
		const uintpwC0TcD = BigInt("264")
		const addressaOR5izj = accounts[2]
		const uintL4DhOV5 = BigInt("214")
		const uintm4Lpbg = BigInt("440")
		const uintDOJfFLz = BigInt("1551")
		const uintWMdlf4X = BigInt("1726")
		const uintgMMLtOw = BigInt("324")
//		const uint256zC8l1AM = await CryptozoSFKp9x.tokenByIndex.call(uintpwC0TcD, {from: accounts[3]});
//		const uintNHkQk8B = await CryptozoSFKp9x.getTimeToDailyBonus.call(addressaOR5izj, {from: accounts[5]});
//		const uint256e1j92FY = await CryptozoSFKp9x.totalSupply.call({from: accounts[0]});
//		const boolrly9mkw = await CryptozoSFKp9x.addTocardType.call(uintgMMLtOw, uintWMdlf4X, uintDOJfFLz, uintm4Lpbg, uintL4DhOV5, {from: accounts[1]});
//		await CryptozoSFKp9x.withdraw.call({from: accounts[4]});

		await expect(CryptozoSFKp9x.tokenByIndex.call(uintpwC0TcD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozl4kQ4R8 = await Cryptoz.new({from: accounts[3]});
		const uintGvmQ9xc = BigInt("884")
		const addresskbLeswj = accounts[3]
		const addressnYpEVMo = accounts[3]
		const uintdkr7niX = BigInt("1409")
		const addressBbMbNZ = accounts[0]
		const uintUNKsCte = BigInt("1884")
		const uintZLHDkEd = BigInt("286")
		const uintbHNz2Bb = BigInt("630")
		const uintERWolfT = BigInt("137")
		const uintCpAj86V = BigInt("197")
		const uintiHDce0Y = BigInt("144")
		const stringrm1BcnV = "0S4DmAPoUdTFCGK"
		const stringYJeEsa = "PEXuT1yLMygjJiKvmpleXiZuGT41xxFTUkfxfLhEDoeAJRNtgbCbyU6YnTdTfIgujY7Ek8G3yc31tSluEFZ8"
		const uintQLjhB5K = BigInt("57")
//		const addressBziAyaC = await Cryptozl4kQ4R8.transferFrom.call(addressnYpEVMo, addresskbLeswj, uintGvmQ9xc, {from: accounts[0]});
//		const uint32gt2m5jU = await Cryptozl4kQ4R8.isValidCard.call(uintdkr7niX, {from: accounts[4]});
//		const uint256HIlA7nq = await Cryptozl4kQ4R8.totalSupply.call({from: accounts[4]});
//		const uint256arrayOhTTuga = await Cryptozl4kQ4R8.tokensOfOwner.call(addressBbMbNZ, {from: accounts[5]});
//		const uint256dWw1fpU = await Cryptozl4kQ4R8.totalSupply.call({from: accounts[2]});
//		const boolqbkHxMw = await Cryptozl4kQ4R8.loadNewCardType.call(uintQLjhB5K, stringYJeEsa, stringrm1BcnV, uintiHDce0Y, uintCpAj86V, uintERWolfT, uintbHNz2Bb, uintZLHDkEd, uintUNKsCte, {from: accounts[3]});

		await expect(Cryptozl4kQ4R8.transferFrom.call(addressnYpEVMo, addresskbLeswj, uintGvmQ9xc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozKKoU3Wc = await Cryptoz.new({from: accounts[4]});
		const addressyoFgYWS = accounts[4]
		const uintH2YSsuv = BigInt("1342")
		const addresssjtY5Y = accounts[3]
		const addressuqF9aye = accounts[3]
		const uintYO0ivV = BigInt("466")
		const addressjaw5C3N = await CryptozKKoU3Wc.initialize.call(addressyoFgYWS, {from: accounts[4]});
//		const addressH2IUZn = await CryptozKKoU3Wc.transferFrom.call(addressuqF9aye, addresssjtY5Y, uintH2YSsuv, {from: accounts[3]});
//		await CryptozKKoU3Wc.getOwnedCard.call(uintYO0ivV, {from: accounts[2]});

		await expect(CryptozKKoU3Wc.transferFrom.call(addressuqF9aye, addresssjtY5Y, uintH2YSsuv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozEGTtZaH = await Cryptoz.new({from: accounts[1]});
//		await CryptozEGTtZaH.withdraw.call({from: accounts[1]});
//		await CryptozEGTtZaH.buyBoosterCardAndOpen.call({from: accounts[2]});

		await expect(CryptozEGTtZaH.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDhTBpRn = await Cryptoz.new({from: accounts[2]});
		const uintZdlWfNc = BigInt("1261")
		const addressLKaNGGp = accounts[1]
//		await CryptozDhTBpRn.getBonusBoosters.call({from: accounts[4]});
//		const stringRPmjCID = await CryptozDhTBpRn.name.call({from: accounts[2]});
//		await CryptozDhTBpRn.getOwnedCard.call(uintZdlWfNc, {from: accounts[1]});
//		const uintqx4UZCF = await CryptozDhTBpRn.getTimeToDailyBonus.call(addressLKaNGGp, {from: accounts[2]});

		await expect(CryptozDhTBpRn.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMulqVOk = await Cryptoz.new({from: accounts[2]});
		const uintPqm7GCd = BigInt("490")
		const uintsxtdqwd = BigInt("1799")
		const uintuSwPYF4 = BigInt("493")
		const uintXFlhO5f = BigInt("186")
		const uintdB0EXje = BigInt("114")
		const uintu8wpE0l = BigInt("41")
		const stringR5GiwRz = "I4uXMJLQBDr8JUzx7SfJx4IG4O1esnIy4C6yralbwpvHloMzY2rI"
		const stringc2lIptY = "c14TnJlIcecpKGNi5fG3ArQ8"
		const uintyeVrTeP = BigInt("14")
		const uinth3DuGzy = BigInt("909")
		const uintO9ACRFp = BigInt("1899")
		const uintEOdQ0sw = BigInt("341")
		const uinteUYMaHa = BigInt("857")
		const uinth4qvP23 = BigInt("222")
		const uintybKUKgn = BigInt("193")
		const uintdmiTaR = BigInt("78")
		const stringvF3GpOy = "ynTWcujUCcoFX3h5jRDlD7BS5IGWzzngvnNgul1mnY73vlR8bkglMYxEaPlLvU5XfLipXzkmeqi"
		const stringoLZN6B6 = "BvtVcG8aovpipyKQ3"
		const uintYZvZMUA = BigInt("196")
		const uint256bUfAAg = await CryptozMulqVOk.totalSupply.call({from: accounts[0]});
		const stringsU5Y6Es = await CryptozMulqVOk.symbol.call({from: accounts[4]});
		const boolVbKoMvm = await CryptozMulqVOk.loadNewCardType.call(uintyeVrTeP, stringc2lIptY, stringR5GiwRz, uintu8wpE0l, uintdB0EXje, uintXFlhO5f, uintuSwPYF4, uintsxtdqwd, uintPqm7GCd, {from: accounts[2]});
//		await CryptozMulqVOk.getOwnedCard.call(uinth3DuGzy, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzOesqOi = await CryptozMulqVOk.loadNewCardType.call(uintYZvZMUA, stringoLZN6B6, stringvF3GpOy, uintdmiTaR, uintybKUKgn, uinth4qvP23, uinteUYMaHa, uintEOdQ0sw, uintO9ACRFp, {from: accounts[1]});

		assert.equal(boolVbKoMvm, true)
		assert.equal(stringsU5Y6Es, "Cryptoz")
		assert.equal(uint256bUfAAg, BigInt("0"))
		await expect(CryptozMulqVOk.getOwnedCard.call(uinth3DuGzy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozEGTtZaH = await Cryptoz.new({from: accounts[1]});
		const uintOmUR7hA = BigInt("172")
		const uintoEuMwPO = BigInt("1171")
		const uintHLsVzJH = BigInt("187")
		const uintFMkB4K = BigInt("491")
		const uintXjqryU9 = BigInt("1512")
		const uintgrTi9Rt = BigInt("1739")
//		const boolBRR3VBu = await CryptozEGTtZaH.addTocardType.call(uintXjqryU9, uintFMkB4K, uintHLsVzJH, uintoEuMwPO, uintOmUR7hA, {from: accounts[1]});
//		const uint256GkYAHp9 = await CryptozEGTtZaH.sacrifice.call(uintgrTi9Rt, {from: accounts[1]});
//		await CryptozEGTtZaH.getBonusBoosters.call({from: accounts[3]});

		await expect(CryptozEGTtZaH.addTocardType.call(uintXjqryU9, uintFMkB4K, uintHLsVzJH, uintoEuMwPO, uintOmUR7hA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})