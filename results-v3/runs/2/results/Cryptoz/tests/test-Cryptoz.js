const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozqtLcRp = await Cryptoz.new({from: accounts[3]});
		const uintbcFq9kf = BigInt("1087")
		const uintqb6xi3m = BigInt("984")
		const stringl0hkgB1 = await CryptozqtLcRp.tokenURI.call(uintbcFq9kf, {from: accounts[2]});
		const boolkhC6L2z = await CryptozqtLcRp.buyCard.call(uintqb6xi3m, {from: accounts[0]});
		await CryptozqtLcRp.buyBoosterCardAndOpen.call({from: accounts[5]});

		assert.equal(stringl0hkgB1, "https://cryptoz.cards/data/1087")
		await expect(CryptozqtLcRp.buyCard.call(uintqb6xi3m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const uintpaCWnZu = BigInt("901")
		const uinthtp8wNz = BigInt("335")
		const uintewJvKz6 = BigInt("1178")
		const uintI86CRlV = BigInt("179")
		const uintZeZHSfb = BigInt("49")
		const uinttieajv4 = BigInt("16")
		const stringao03Unv = "WWnQkP8D8CIwhqB3MHURGSiVfCw6LEy14wRKz8GIXSDupVWwC2XBMUM9Di43XxmYdxlfiZzIIhaERYX1j3LJjywJ93rwviM7UiU"
		const string4idWTb = "m1OqhyEA9fy1wy9JAtVb8WplJSJBg"
		const uintM4bXSb2 = BigInt("214")
		const uintlXCLG5M = BigInt("1853")
		const booloOeXxmD = await CryptozzMUcwTV.loadNewCardType.call(uintM4bXSb2, string4idWTb, stringao03Unv, uinttieajv4, uintZeZHSfb, uintI86CRlV, uintewJvKz6, uinthtp8wNz, uintpaCWnZu, {from: accounts[3]});
		await CryptozzMUcwTV.getBonusBoosters.call({from: accounts[0]});
		const booltQIBvaa = await CryptozzMUcwTV.openBoosterCard.call(uintlXCLG5M, {from: accounts[3]});

		assert.equal(booloOeXxmD, true)
		await expect(CryptozzMUcwTV.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozCjvkcEb = await Cryptoz.new({from: accounts[1]});
		const uintkefO0V2 = BigInt("668")
		const uintIyqPCAk = BigInt("1413")
		const addresszHOwkcg = accounts[2]
		const addressgvSrVgk = accounts[5]
		await CryptozCjvkcEb.f.call({from: accounts[3]});
		const boolKTbX1mD = await CryptozCjvkcEb.buyBoosterCard.call(uintkefO0V2, {from: accounts[2]});
		const addresssEkxQM4 = await CryptozCjvkcEb.transferFrom.call(addressgvSrVgk, addresszHOwkcg, uintIyqPCAk, {from: accounts[4]});
		const uint256ZiRtxZh = await CryptozCjvkcEb.totalSupply.call({from: accounts[2]});

		await expect(CryptozCjvkcEb.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozS3J6rqM = await Cryptoz.new({from: accounts[5]});
		const addressYgh9KVa = accounts[1]
		const uintvB3QpeM = BigInt("1065")
		const addressyiQzxdZ = accounts[4]
		await CryptozS3J6rqM.getBonusBoosters.call({from: accounts[5]});
		const addressqMfBF9H = await CryptozS3J6rqM.linkMySponsor.call(addressYgh9KVa, {from: accounts[3]});
		const uint256itln4O5 = await CryptozS3J6rqM.tokenOfOwnerByIndex.call(addressyiQzxdZ, uintvB3QpeM, {from: accounts[4]});
		await CryptozS3J6rqM.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozS3J6rqM.getBonusBoosters.call({from: accounts[2]});

		await expect(CryptozS3J6rqM.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozjj3KAj = await Cryptoz.new({from: accounts[2]});
		const addressD64Lbaz = accounts[0]
		const uintsrphgCs = BigInt("409")
		const addressPRI8mNf = accounts[1]
		const uintQ1aAuIc = BigInt("228")
		const stringnedFr0w = await Cryptozjj3KAj.name.call({from: accounts[3]});
		const addressDu4AUK = await Cryptozjj3KAj.linkMySponsor.call(addressD64Lbaz, {from: accounts[2]});
		const uint256pYw6rjs = await Cryptozjj3KAj.tokenOfOwnerByIndex.call(addressPRI8mNf, uintsrphgCs, {from: accounts[1]});
		const boolA4d1wah = await Cryptozjj3KAj.openBoosterCard.call(uintQ1aAuIc, {from: accounts[3]});

		assert.equal(stringnedFr0w, "Cryptoz Cards")
		await expect(Cryptozjj3KAj.linkMySponsor.call(addressD64Lbaz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozLcAsDRW = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addressS7vVJBA = accounts[1]
		const addressK0S05IH = accounts[3]
		const uintX6tiTnj = BigInt("694")
		const uint256T929kUI = await CryptozLcAsDRW.totalSupply.call({from: accounts[0]});
		const uintT9VzSbv = await CryptozLcAsDRW.getTimeToDailyBonus.call(addressS7vVJBA, {from: "0x0000000000000000000000000000000000000001"});
		const addressYNxRZFR = await CryptozLcAsDRW.linkMySponsor.call(addressK0S05IH, {from: accounts[4]});
		await CryptozLcAsDRW.getBonusBoosters.call({from: accounts[2]});
		const booldVoALy9 = await CryptozLcAsDRW.buyCard.call(uintX6tiTnj, {from: accounts[5]});
		await CryptozLcAsDRW.buyBoosterCardAndOpen.call({from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozMJ7UPNK = await Cryptoz.new({from: accounts[2]});
		const uintyCaxC9n = BigInt("170")
		const addressvqDTdkT = accounts[2]
		const addressAUyswCw = accounts[3]
		const addressOyhhlix = accounts[0]
		const uintuLEJCJ = BigInt("399")
		const addressu6t5c7n = accounts[0]
		const addressLLDNk0i = accounts[3]
		const uintJ6Pfc6i = BigInt("827")
		const addressFe45xGH = await CryptozMJ7UPNK.transferFrom.call(addressAUyswCw, addressvqDTdkT, uintyCaxC9n, {from: accounts[5]});
		const uintbIicpcC = await CryptozMJ7UPNK.getTimeToDailyBonus.call(addressOyhhlix, {from: accounts[0]});
		const addressG12vXO = await CryptozMJ7UPNK.transferFrom.call(addressLLDNk0i, addressu6t5c7n, uintuLEJCJ, {from: accounts[1]});
		const uint256KTC2KkF = await CryptozMJ7UPNK.sacrifice.call(uintJ6Pfc6i, {from: accounts[4]});

		await expect(CryptozMJ7UPNK.transferFrom.call(addressAUyswCw, addressvqDTdkT, uintyCaxC9n, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const address9L6Z05 = accounts[0]
		const uintAgAn54l = BigInt("901")
		const uintAQzmhU4 = BigInt("335")
		const uintUDMFqJr = BigInt("1178")
		const uinth10UBNR = BigInt("179")
		const uintQ8HKCE4 = BigInt("49")
		const uintjse6EJi = BigInt("16")
		const stringao03Unv = "WWnQkP8D8CIwhqB3MHURGSiVfCw6LEy14wRKz8GIXSDupVWwC2XBMUM9Di43XxmYdxlfiZzIIhaERYX1j3LJjywJ93rwviM7UiU"
		const string4idWTb = "m1OqhyEA9fy1wy9JAtVb8WplJSJBg"
		const uintMjYWau = BigInt("214")
		const uintF7maaPp = BigInt("1853")
		const uintnQtK2Sa = await CryptozzMUcwTV.getTimeToDailyBonus.call(address9L6Z05, {from: accounts[3]});
		const booloOeXxmD = await CryptozzMUcwTV.loadNewCardType.call(uintMjYWau, string4idWTb, stringao03Unv, uintjse6EJi, uintQ8HKCE4, uinth10UBNR, uintUDMFqJr, uintAQzmhU4, uintAgAn54l, {from: accounts[3]});
		await CryptozzMUcwTV.getTokensByRarity.call({from: accounts[5]});
		await CryptozzMUcwTV.getBonusBoosters.call({from: accounts[0]});
		const booltQIBvaa = await CryptozzMUcwTV.openBoosterCard.call(uintF7maaPp, {from: accounts[3]});

		assert.equal(booloOeXxmD, true)
		assert.equal(uintnQtK2Sa, BigInt("1630203671"))
		await expect(CryptozzMUcwTV.getTokensByRarity.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozqtLcRp = await Cryptoz.new({from: accounts[3]});
		const uintmAPB76h = BigInt("1087")
		const uintuKwCZxx = BigInt("980")
		const stringl0hkgB1 = await CryptozqtLcRp.tokenURI.call(uintmAPB76h, {from: accounts[2]});
		const booly9hyqaE = await CryptozqtLcRp.buyBoosterCard.call(uintuKwCZxx, {from: accounts[2]});
		await CryptozqtLcRp.buyBoosterCardAndOpen.call({from: accounts[5]});

		assert.equal(stringl0hkgB1, "https://cryptoz.cards/data/1087")
		await expect(CryptozqtLcRp.buyBoosterCard.call(uintuKwCZxx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDRPpYYK = await Cryptoz.new({from: accounts[3]});
		const uintz655sNl = BigInt("1195")
		const addressKBtwS9z = accounts[3]
		await CryptozDRPpYYK.buyBoosterCardAndOpen.call({from: accounts[2]});
		await CryptozDRPpYYK.f.call({from: accounts[1]});
		const boolXYZ2tQE = await CryptozDRPpYYK.buyBoosterCard.call(uintz655sNl, {from: accounts[2]});
		await CryptozDRPpYYK.buyBoosterCardAndOpen.call({from: accounts[2]});
		const addressCyqb9i = await CryptozDRPpYYK.linkMySponsor.call(addressKBtwS9z, {from: accounts[2]});

		await expect(CryptozDRPpYYK.buyBoosterCardAndOpen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozcS6B7mR = await Cryptoz.new({from: accounts[4]});
		const uintWDzet0 = BigInt("1112")
		const uintxuQZGi = BigInt("641")
		const uintCdgWjwu = BigInt("103")
		const uintQklCIWb = BigInt("581")
		const uintIe0KqBP = BigInt("1155")
		const uintO8FzEJ5 = BigInt("425")
		const uintudUbes = BigInt("64")
		await CryptozcS6B7mR.getOwnedCard.call(uintWDzet0, {from: accounts[4]});
		const uint32BhlIxd9 = await CryptozcS6B7mR.isValidCard.call(uintxuQZGi, {from: accounts[0]});
		const boolWSuT0F = await CryptozcS6B7mR.addTocardType.call(uintudUbes, uintO8FzEJ5, uintIe0KqBP, uintQklCIWb, uintCdgWjwu, {from: accounts[2]});

		await expect(CryptozcS6B7mR.getOwnedCard.call(uintWDzet0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const uintKDZ1Eka = BigInt("174")
		const uintjdCHJHC = BigInt("961")
		const uintP4YZiTp = BigInt("1050")
		const uintaaDNnB5 = BigInt("369")
		const uintNd36Lbh = BigInt("205")
		const addressuATu8bG = accounts[1]
		const bool1fnqB0 = await CryptozzMUcwTV.addTocardType.call(uintNd36Lbh, uintaaDNnB5, uintP4YZiTp, uintjdCHJHC, uintKDZ1Eka, {from: accounts[0]});
		await CryptozzMUcwTV.getBonusBoosters.call({from: accounts[0]});
		const addressUKMkJTy = await CryptozzMUcwTV.initialize.call(addressuATu8bG, {from: accounts[3]});

		await expect(CryptozzMUcwTV.addTocardType.call(uintNd36Lbh, uintaaDNnB5, uintP4YZiTp, uintjdCHJHC, uintKDZ1Eka, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const uintb9PW7p9 = BigInt("901")
		const uintjAkYlN = BigInt("335")
		const uintSsjG5Cz = BigInt("1178")
		const uintqpK3zEL = BigInt("170")
		const uintG0OH5pz = BigInt("49")
		const uintjGuSzKo = BigInt("16")
		const stringao03Unv = "WWnQkP8D8CIwhqB3MHURGSiVfCw6LEy14wRKz8GIXSDupVWwC2XBMUM9Di43XxmYdxlfiZzIIhaERYX1j3LJjywJ93rwviM7UiU"
		const string4idWTb = "m1OqhyEA9fy1wy9JAtVb8WplJSJBg"
		const uintyJ6LPE = BigInt("214")
		const uintwSz7EYq = BigInt("196")
		const uintoBK12YG = BigInt("1806")
		const uintYoyMFuk = BigInt("1853")
		const booloOeXxmD = await CryptozzMUcwTV.loadNewCardType.call(uintyJ6LPE, string4idWTb, stringao03Unv, uintjGuSzKo, uintG0OH5pz, uintqpK3zEL, uintSsjG5Cz, uintjAkYlN, uintb9PW7p9, {from: accounts[3]});
		const uint32ASYzKVk = await CryptozzMUcwTV.isValidCard.call(uintwSz7EYq, {from: accounts[4]});
		const uint32WpffYYS = await CryptozzMUcwTV.getFreeCard.call(uintoBK12YG, {from: accounts[4]});
		const booltQIBvaa = await CryptozzMUcwTV.openBoosterCard.call(uintYoyMFuk, {from: accounts[3]});

		assert.equal(booloOeXxmD, true)
		await expect(CryptozzMUcwTV.isValidCard.call(uintwSz7EYq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const addressudZRdXO = accounts[0]
		const uintdyGu3GQ = BigInt("901")
		const uintmhM5ARt = BigInt("335")
		const uintp6XxnAr = BigInt("1178")
		const uintLucVjQv = BigInt("179")
		const uintzkV3zu = BigInt("49")
		const uintlgeQQqb = BigInt("16")
		const stringao03Unv = "WWnQkP8D8CIwhqB3MHURGSiVfCw6LEy14wRKz8GIXSDupVWwC2XBMUM9Di43XxmYdxlfiZzIIhaERYX1j3LJjywJ93rwviM7UiU"
		const string4idWTb = "m1OqhyEA9fy1wy9JAtVb8WplJSJBg"
		const uintW2HQlC0 = BigInt("214")
		const addresszh4xspR = await CryptozzMUcwTV.initialize.call(addressudZRdXO, {from: accounts[3]});
		const booloOeXxmD = await CryptozzMUcwTV.loadNewCardType.call(uintW2HQlC0, string4idWTb, stringao03Unv, uintlgeQQqb, uintzkV3zu, uintLucVjQv, uintp6XxnAr, uintmhM5ARt, uintdyGu3GQ, {from: accounts[3]});

		assert.equal(booloOeXxmD, true)
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const addressJm0EP9F = accounts[1]
		const uintcAb7jq0 = BigInt("1822")
		const uintP6xmg8p = BigInt("1827")
		await CryptozzMUcwTV.getBonusBoosters.call({from: accounts[0]});
		const uint256arrayVaQDKB6 = await CryptozzMUcwTV.tokensOfOwner.call(addressJm0EP9F, {from: accounts[4]});
		const booltQIBvaa = await CryptozzMUcwTV.openBoosterCard.call(uintcAb7jq0, {from: accounts[3]});
		const uint256BEcPRUl = await CryptozzMUcwTV.sacrifice.call(uintP6xmg8p, {from: accounts[2]});

		await expect(CryptozzMUcwTV.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozW2sp95I = await Cryptoz.new({from: accounts[4]});
		const addressSDAUj98 = accounts[4]
		const address36Dyh1 = accounts[2]
		const addressORYUwzD = accounts[1]
		const uint256rydIGQy = await CryptozW2sp95I.totalSupply.call({from: accounts[4]});
		const uintRDnCXE = await CryptozW2sp95I.getTimeToDailyBonus.call(addressSDAUj98, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayxl7zoO = await CryptozW2sp95I.tokensOfOwner.call(address36Dyh1, {from: accounts[0]});
		const stringOb1pMjj = await CryptozW2sp95I.symbol.call({from: accounts[3]});
		const uint256arrayg4Y1yW = await CryptozW2sp95I.tokensOfOwner.call(addressORYUwzD, {from: accounts[3]});

		assert.equal(stringOb1pMjj, "Cryptoz")
		assert.equal(uint256arrayg4Y1yW, BigInt(""))
		assert.equal(uint256arrayxl7zoO, BigInt(""))
		assert.equal(uint256rydIGQy, BigInt("0"))
		assert.equal(uintRDnCXE, BigInt("1630203668"))
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const uintdQtCqF = BigInt("766")
		const uintlx3IUnY = BigInt("901")
		const uintkqDx1cC = BigInt("335")
		const uintQQD7xjz = BigInt("1178")
		const uintCNrNO0I = BigInt("179")
		const uintv8h9y0N = BigInt("49")
		const uintUAwRaOc = BigInt("15")
		const stringao03Unv = "WWnQkP8D8CIwhqB3MHURGSiVfCw6LEy14wRKz8GIXSDupVWwC2XBMUM9Di43XxmYdxlfiZzIIhaERYX1j3LJjywJ93rwviM7UiU"
		const string4idWTb = "m1OqhyEA9fy1wy9JAtVb8WplJSJBg"
		const uintEnrf1Kd = BigInt("214")
		await CryptozzMUcwTV.getBonusBoosters.call({from: accounts[3]});
		const uint256MnupznG = await CryptozzMUcwTV.sacrifice.call(uintdQtCqF, {from: accounts[3]});
		const booloOeXxmD = await CryptozzMUcwTV.loadNewCardType.call(uintEnrf1Kd, string4idWTb, stringao03Unv, uintUAwRaOc, uintv8h9y0N, uintCNrNO0I, uintQQD7xjz, uintkqDx1cC, uintlx3IUnY, {from: accounts[3]});

		await expect(CryptozzMUcwTV.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const uintlKn5BPt = BigInt("1792")
		const addressBBxjok3 = accounts[3]
		const uinthcVu09P = BigInt("186")
		const addressHewr0wA = "0x0000000000000000000000000000000000000001"
		const uintcne4sUe = BigInt("901")
		const uintCQWUK94 = BigInt("335")
		const uintFC9utto = BigInt("1178")
		const uintfKvhuyV = BigInt("154")
		const uintpKzBoRU = BigInt("49")
		const uintWtdJbJY = BigInt("16")
		const stringao03Unv = "WWnQkP8D8CIwhqB3MHURGSiVfCw6LEy14wRKz8GIXSDupVWwC2XBMUM9Di43XxmYdxlfiZzIIhaERYX1j3LJjywJ93rwviM7UiU"
		const string4idWTb = "m1OqhyEA9fy1wy9JAtVb8WplJSJBg"
		const uintrbUzVak = BigInt("214")
		const uint256aOEumJ = await CryptozzMUcwTV.tokenOfOwnerByIndex.call(addressBBxjok3, uintlKn5BPt, {from: accounts[3]});
		const uint256Fhlpla = await CryptozzMUcwTV.tokenOfOwnerByIndex.call(addressHewr0wA, uinthcVu09P, {from: accounts[3]});
		const booloOeXxmD = await CryptozzMUcwTV.loadNewCardType.call(uintrbUzVak, string4idWTb, stringao03Unv, uintWtdJbJY, uintpKzBoRU, uintfKvhuyV, uintFC9utto, uintCQWUK94, uintcne4sUe, {from: accounts[3]});

		await expect(CryptozzMUcwTV.tokenOfOwnerByIndex.call(addressBBxjok3, uintlKn5BPt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const uintmahNI3P = BigInt("901")
		const uintKl2urmH = BigInt("335")
		const uintS6D0bl0 = BigInt("1178")
		const uintIzBrfe = BigInt("179")
		const uintPOemClo = BigInt("25")
		const uinthRSlhiO = BigInt("16")
		const stringao03Unv = "WWnQkP8D8CIwhqB3MHURGSiVfCw6LEy14wRKz8GIXSDupVWwC2XBMUM9Di43XxmYdxlfiZzIIhaERYX1j3LJjywJ93rwviM7UiU"
		const string4idWTb = "m1OqhyEA9fy1wy9JAtVb8WplJSJBg"
		const uintSEMdFtA = BigInt("214")
		const uintEkmBNg = BigInt("1336")
		const addressuZZCiZf = accounts[3]
		const addressOjBlg8U = accounts[0]
		await CryptozzMUcwTV.withdraw.call({from: accounts[3]});
		const booloOeXxmD = await CryptozzMUcwTV.loadNewCardType.call(uintSEMdFtA, string4idWTb, stringao03Unv, uinthRSlhiO, uintPOemClo, uintIzBrfe, uintS6D0bl0, uintKl2urmH, uintmahNI3P, {from: accounts[3]});
		const addressuW6rOK = await CryptozzMUcwTV.transferFrom.call(addressOjBlg8U, addressuZZCiZf, uintEkmBNg, {from: accounts[0]});
		await CryptozzMUcwTV.withdraw.call({from: accounts[5]});

		await expect(CryptozzMUcwTV.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYgFGFwH = await Cryptoz.new({from: accounts[4]});
		const addresslHENYLV = accounts[2]
		const uintzEIBHUG = BigInt("1801")
		const uintgeCZ8dR = BigInt("125")
		const uintzfusaUe = BigInt("113")
		const uintGCbmNNB = BigInt("1088")
		const uintY8bRpul = BigInt("1656")
		const uintOXVppdW = BigInt("1636")
		const addresstw21BzC = accounts[2]
		const uintglMA98 = await CryptozYgFGFwH.getTimeToDailyBonus.call(addresslHENYLV, {from: accounts[0]});
		const uint256KeI8vjf = await CryptozYgFGFwH.tokenByIndex.call(uintzEIBHUG, {from: accounts[2]});
		await CryptozYgFGFwH.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmbJQpEm = await CryptozYgFGFwH.addTocardType.call(uintOXVppdW, uintY8bRpul, uintGCbmNNB, uintzfusaUe, uintgeCZ8dR, {from: accounts[5]});
		const uintk4fom9F = await CryptozYgFGFwH.getTimeToDailyBonus.call(addresstw21BzC, {from: accounts[3]});

		assert.equal(uintglMA98, BigInt("1630203662"))
		await expect(CryptozYgFGFwH.tokenByIndex.call(uintzEIBHUG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzMUcwTV = await Cryptoz.new({from: accounts[3]});
		const uintnJwEqMU = BigInt("46")
		const uintElZ9RBk = BigInt("957")
		const uintXsUeLoa = BigInt("1698")
		const uintmqvl3Oi = BigInt("1015")
		const uintSxK7krY = BigInt("527")
		const uintw7BDBlt = BigInt("1556")
		const address7ubgtm = accounts[2]
		await CryptozzMUcwTV.getBonusBoosters.call({from: accounts[0]});
		const boolbDFj5D0 = await CryptozzMUcwTV.addTocardType.call(uintSxK7krY, uintmqvl3Oi, uintXsUeLoa, uintElZ9RBk, uintnJwEqMU, {from: accounts[3]});
		const uint256kOGoFkt = await CryptozzMUcwTV.tokenOfOwnerByIndex.call(address7ubgtm, uintw7BDBlt, {from: accounts[2]});

		await expect(CryptozzMUcwTV.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})