const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozKSa1P4a = await Cryptoz.new({from: accounts[2]});
		const uintBywu0zV = BigInt("1877")
		const addressHpGVJ1d = "0x0000000000000000000000000000000000000001"
		const addressz3TAuvH = accounts[4]
		const address2PUzWm = accounts[4]
		const addressDA9RhHy = await CryptozKSa1P4a.transferFrom.call(addressz3TAuvH, addressHpGVJ1d, uintBywu0zV, {from: accounts[4]});
		await CryptozKSa1P4a.getBonusBoosters.call({from: accounts[4]});
		await CryptozKSa1P4a.f.call({from: accounts[0]});
		const addresscl37Kkj = await CryptozKSa1P4a.linkMySponsor.call(address2PUzWm, {from: accounts[1]});
		await CryptozKSa1P4a.withdraw.call({from: accounts[0]});

		await expect(CryptozKSa1P4a.transferFrom.call(addressz3TAuvH, addressHpGVJ1d, uintBywu0zV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozC5aUgSz = await Cryptoz.new({from: accounts[0]});
		const uintQZDyXHx = BigInt("885")
		const uintJr4t5XL = BigInt("1972")
		const addresslhAT3m4 = accounts[0]
		await CryptozC5aUgSz.getOwnedCard.call(uintQZDyXHx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256r6rTRWD = await CryptozC5aUgSz.tokenOfOwnerByIndex.call(addresslhAT3m4, uintJr4t5XL, {from: "0x0000000000000000000000000000000000000001"});
		await CryptozC5aUgSz.buyBoosterCardAndOpen.call({from: accounts[5]});

		await expect(CryptozC5aUgSz.getOwnedCard.call(uintQZDyXHx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZE6DzM6 = await Cryptoz.new({from: accounts[5]});
		const uintgsk7z7W = BigInt("233")
		const uintJSMnCuV = BigInt("1398")
		const uintxunqJYc = BigInt("53")
		const uintT94JFP2 = BigInt("1131")
		const uintlDpk2xN = BigInt("140")
		const uinte1LN9gM = BigInt("492")
		const uintYD7H8J5 = BigInt("850")
		const uintn9AMCj = BigInt("1260")
		const uintvRineZq = BigInt("740")
		const uintB4G5u6C = BigInt("54")
		const boolwhn0H5r = await CryptozZE6DzM6.buyBoosterCard.call(uintgsk7z7W, {from: accounts[1]});
		const uint32hDnBJg = await CryptozZE6DzM6.isValidCard.call(uintJSMnCuV, {from: accounts[1]});
		const boolTKI0dod = await CryptozZE6DzM6.addTocardType.call(uintYD7H8J5, uinte1LN9gM, uintlDpk2xN, uintT94JFP2, uintxunqJYc, {from: accounts[1]});
		const stringgOnoKxm = await CryptozZE6DzM6.tokenURI.call(uintn9AMCj, {from: accounts[4]});
		const uint256QJyzGGH = await CryptozZE6DzM6.tokenByIndex.call(uintvRineZq, {from: accounts[5]});
		const boolgEPFJAk = await CryptozZE6DzM6.buyCard.call(uintB4G5u6C, {from: accounts[4]});

		await expect(CryptozZE6DzM6.buyBoosterCard.call(uintgsk7z7W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozEBqmNhR = await Cryptoz.new({from: accounts[1]});
		const addressbFyWUCQ = accounts[5]
		const uintbu3KzN7 = BigInt("1519")
		const uintjLVw2xg = BigInt("1709")
		const uintXK5Ek6y = BigInt("1227")
		const uintmpBkeZ = BigInt("1648")
		const uinth8fAxi1 = BigInt("69")
		const uintBwsmaP = BigInt("7")
		const uintJ8Spdlu = BigInt("22")
		const stringXvBk1zg = "43iRopCRHbQD2lpSeXlgaDMbkDVboanlCfaUWCiCYSNwPqoBUdy6dgnauNf2PkYtUl6dRwyVRLP4XTa0VDWWwdhovdWbgO1Y"
		const stringIyZIqY0 = "sxRa1r7YuWWQo"
		const uintl5I0YdW = BigInt("148")
		const uintAoSKL4c = BigInt("1277")
		const uintyJQv4Gt = BigInt("394")
		const uintLRCKrUB = BigInt("943")
		const uints9Zfl5Q = BigInt("47")
		const uinta8t5cFH = BigInt("250")
		const uintRtavi8H = BigInt("235")
		const stringmUZomh9 = "TqjLefX7496xt5r6m4HCGzaQcvhDv"
		const stringvWuKU1m = "fjTAgyU6qhdCFYrPCDFojzSvzxzaIPboHsGNt53WbGdziUazTIo4aL78YKWxsc1Y"
		const uintAc3gmQU = BigInt("120")
		const uint256arraySgoiNtc = await CryptozEBqmNhR.tokensOfOwner.call(addressbFyWUCQ, {from: accounts[0]});
		const uint32baJWVO5 = await CryptozEBqmNhR.getFreeCard.call(uintbu3KzN7, {from: accounts[2]});
		const boolv84gTKQ = await CryptozEBqmNhR.loadNewCardType.call(uintl5I0YdW, stringIyZIqY0, stringXvBk1zg, uintJ8Spdlu, uintBwsmaP, uinth8fAxi1, uintmpBkeZ, uintXK5Ek6y, uintjLVw2xg, {from: accounts[2]});
		await CryptozEBqmNhR.getTokensByRarity.call({from: accounts[1]});
		const booliBGWnSj = await CryptozEBqmNhR.loadNewCardType.call(uintAc3gmQU, stringvWuKU1m, stringmUZomh9, uintRtavi8H, uinta8t5cFH, uints9Zfl5Q, uintLRCKrUB, uintyJQv4Gt, uintAoSKL4c, {from: accounts[5]});

		assert.equal(uint256arraySgoiNtc, BigInt(""))
		await expect(CryptozEBqmNhR.getFreeCard.call(uintbu3KzN7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozFKvSqL = await Cryptoz.new({from: accounts[0]});
		const uintYW7OW7e = BigInt("1864")
		const addressIFQD6tD = accounts[2]
		const uintjX4hOl6 = BigInt("335")
		const uint32oKUhj3z = await CryptozFKvSqL.isValidCard.call(uintYW7OW7e, {from: accounts[0]});
		await CryptozFKvSqL.withdraw.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozFKvSqL.buyBoosterCardAndOpen.call({from: accounts[1]});
		const uintrIMC7Sp = await CryptozFKvSqL.getTimeToDailyBonus.call(addressIFQD6tD, {from: accounts[5]});
		const uint256ofdqtoz = await CryptozFKvSqL.tokenByIndex.call(uintjX4hOl6, {from: accounts[2]});

		await expect(CryptozFKvSqL.isValidCard.call(uintYW7OW7e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozkHcYE80 = await Cryptoz.new({from: accounts[0]});
		const addressecLy11d = "0x0000000000000000000000000000000000000001"
		const uinti91FGmH = BigInt("2")
		const uintdVTcaOu = BigInt("1587")
		const uintKkWsn4 = BigInt("850")
		const uintP8TTck = BigInt("1135")
		const uintdQCI2qe = BigInt("1531")
		const uintrxU0vNA = BigInt("650")
		const uintNAT9gpR = BigInt("931")
		const uintZxidLgo = BigInt("1671")
		const uintrh55a2V = BigInt("151")
		const uintTRCQoq = BigInt("151")
		const uintpg8XtB0 = BigInt("153")
		const stringbrwJ1Q9 = "0cDVVhiurD1MRLhHsioqAGYHKBL3RrS4ykeV4MYgBuGlk6ty8yp1a1aCxp0KGLWUWyYIykzXBrpk7aVvR0YCKRSMHhKUUnvDV"
		const string0izlKr = "oqsOQ103tsG7DSuMUrOBSGP1YVe5zCvw3yVXggSLvBald5HhKnAhP9eoT8TTzVgULDVD8B6DuafsB3vtxalX22nUbAnXd"
		const uintRWtdvMJ = BigInt("219")
		const uint2lqPbh = await CryptozkHcYE80.getTimeToDailyBonus.call(addressecLy11d, {from: accounts[0]});
		const boolLFB1GYd = await CryptozkHcYE80.addTocardType.call(uintdQCI2qe, uintP8TTck, uintKkWsn4, uintdVTcaOu, uinti91FGmH, {from: accounts[2]});
		const boolPN1YLua = await CryptozkHcYE80.loadNewCardType.call(uintRWtdvMJ, string0izlKr, stringbrwJ1Q9, uintpg8XtB0, uintTRCQoq, uintrh55a2V, uintZxidLgo, uintNAT9gpR, uintrxU0vNA, {from: accounts[3]});

		assert.equal(uint2lqPbh, BigInt("1630203666"))
		await expect(CryptozkHcYE80.addTocardType.call(uintdQCI2qe, uintP8TTck, uintKkWsn4, uintdVTcaOu, uinti91FGmH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozauRpRPn = await Cryptoz.new({from: accounts[4]});
		const uintlCsvi7K = BigInt("577")
		const uintc4WR4eT = BigInt("241")
		const uintA8KWX5 = BigInt("309")
		const uintkqxwHJ7 = BigInt("490")
		const uintE9ixUDX = BigInt("2030")
		const uinta9eEaJx = BigInt("1749")
		await CryptozauRpRPn.getTokensByRarity.call({from: accounts[1]});
		const stringYTE7Wtu = await CryptozauRpRPn.tokenURI.call(uintlCsvi7K, {from: accounts[4]});
		const boolxWc8Gn = await CryptozauRpRPn.addTocardType.call(uinta9eEaJx, uintE9ixUDX, uintkqxwHJ7, uintA8KWX5, uintc4WR4eT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozauRpRPn.getTokensByRarity.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozX7N9hrp = await Cryptoz.new({from: accounts[4]});
		const uintvVUCcDN = BigInt("1823")
		const uintt917EsC = BigInt("1745")
		const stringL3BaoqZ = await CryptozX7N9hrp.tokenURI.call(uintvVUCcDN, {from: accounts[1]});
		const uint256M1kCONm = await CryptozX7N9hrp.tokenByIndex.call(uintt917EsC, {from: accounts[1]});

		assert.equal(stringL3BaoqZ, "https://cryptoz.cards/data/1823")
		await expect(CryptozX7N9hrp.tokenByIndex.call(uintt917EsC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozkHcYE80 = await Cryptoz.new({from: accounts[0]});
		const uintnO7ufP = BigInt("1339")
		const addresse7L1JR4 = accounts[0]
		const addressApOHSK = "0x0000000000000000000000000000000000000001"
		const uintmfmGMcz = BigInt("2")
		const uintMPl9933 = BigInt("1587")
		const uintEbwIrTK = BigInt("850")
		const uintmkWiIZD = BigInt("1135")
		const uinteZLuIdE = BigInt("1531")
		const uintbiSt0g = BigInt("650")
		const uintAzEBkK = BigInt("931")
		const uintNjrsuad = BigInt("1671")
		const uintPK2z1zK = BigInt("151")
		const uintSl2i2Ws = BigInt("151")
		const uintECX3alS = BigInt("153")
		const stringbrwJ1Q9 = "0cDVVhiurD1MRLhHsioqAYHKBL3RrS4ykeV4MYgBuGlk6ty8yp1a1aCxp0KGLWUWyYIykzXBrpk7aVvR0YCKRSMHhKUUnvDV"
		const string0izlKr = "oqsOQ103tsG7DSuMUrOBSGP1YVe5zCvw3yVXggSLvBald5HhKnAhP9eoT8TTzVgULDVD8B6DuafsB3vtxalX22nUbAnXd"
		const uinthaTTKKY = BigInt("219")
		await CryptozkHcYE80.getBonusBoosters.call({from: accounts[5]});
		const uint256M225b9q = await CryptozkHcYE80.tokenOfOwnerByIndex.call(addresse7L1JR4, uintnO7ufP, {from: accounts[5]});
		const uint2lqPbh = await CryptozkHcYE80.getTimeToDailyBonus.call(addressApOHSK, {from: accounts[0]});
		const boolLFB1GYd = await CryptozkHcYE80.addTocardType.call(uinteZLuIdE, uintmkWiIZD, uintEbwIrTK, uintMPl9933, uintmfmGMcz, {from: accounts[2]});
		const boolPN1YLua = await CryptozkHcYE80.loadNewCardType.call(uinthaTTKKY, string0izlKr, stringbrwJ1Q9, uintECX3alS, uintSl2i2Ws, uintPK2z1zK, uintNjrsuad, uintAzEBkK, uintbiSt0g, {from: accounts[3]});

		await expect(CryptozkHcYE80.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozX7N9hrp = await Cryptoz.new({from: accounts[4]});
		const uintZIwuyGi = BigInt("1366")
		const addressziaJrjL = accounts[0]
		const uintKq34SyJ = BigInt("1823")
		const uintSJixLVP = BigInt("1737")
		const string6EgFEZ = await CryptozX7N9hrp.name.call({from: accounts[4]});
		const uint256f0F2yMB = await CryptozX7N9hrp.tokenOfOwnerByIndex.call(addressziaJrjL, uintZIwuyGi, {from: accounts[1]});
		const stringL3BaoqZ = await CryptozX7N9hrp.tokenURI.call(uintKq34SyJ, {from: accounts[1]});
		const uint256M1kCONm = await CryptozX7N9hrp.tokenByIndex.call(uintSJixLVP, {from: accounts[1]});

		assert.equal(string6EgFEZ, "Cryptoz Cards")
		await expect(CryptozX7N9hrp.tokenOfOwnerByIndex.call(addressziaJrjL, uintZIwuyGi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozkHcYE80 = await Cryptoz.new({from: accounts[0]});
		const uintg7XnvUK = BigInt("408")
		const addressJBHOfhM = "0x0000000000000000000000000000000000000001"
		const uinth8Gi6wK = BigInt("2")
		const uintO5nMc0v = BigInt("1587")
		const uintyyLe1ow = BigInt("850")
		const uint7yMYEy = BigInt("1135")
		const uintW9vMZ8B = BigInt("1531")
		const uintvUvcmdo = BigInt("650")
		const uintiJJAFie = BigInt("931")
		const uintbdDSBWj = BigInt("1671")
		const uintbxRgPVc = BigInt("151")
		const uintfV1oe6e = BigInt("151")
		const uintQjZBSXc = BigInt("153")
		const stringbrwJ1Q9 = "0cDVVhiurD1MRLhHsifqAGYHKBL3RrS4ykeV4MYgBuGlk6ty8yp1a1aCxp0KGLWUWyYIykzXBrpk7aVvR0YCKRSMHhKUUnvDV"
		const string0izlKr = "oqsOQ103tsG7DSuMUrOBSGP1YVe5zCvw3yVXggSLvBald5HhKnAhP9eoT8TTzVgULDVD8B6DuafsB3vtxalX22nUbAnXd"
		const uintuHD1bra = BigInt("219")
		const boolWIKjnFN = await CryptozkHcYE80.openBoosterCard.call(uintg7XnvUK, {from: accounts[1]});
		const uint2lqPbh = await CryptozkHcYE80.getTimeToDailyBonus.call(addressJBHOfhM, {from: accounts[0]});
		const boolLFB1GYd = await CryptozkHcYE80.addTocardType.call(uintW9vMZ8B, uint7yMYEy, uintyyLe1ow, uintO5nMc0v, uinth8Gi6wK, {from: accounts[2]});
		const boolPN1YLua = await CryptozkHcYE80.loadNewCardType.call(uintuHD1bra, string0izlKr, stringbrwJ1Q9, uintQjZBSXc, uintfV1oe6e, uintbxRgPVc, uintbdDSBWj, uintiJJAFie, uintvUvcmdo, {from: accounts[3]});

		await expect(CryptozkHcYE80.openBoosterCard.call(uintg7XnvUK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQHDWAtL = await Cryptoz.new({from: accounts[0]});
		const uintUELsb3E = BigInt("1910")
		const stringb47R3nj = await CryptozQHDWAtL.symbol.call({from: accounts[1]});
		const uint256vi0EWHx = await CryptozQHDWAtL.tokenByIndex.call(uintUELsb3E, {from: accounts[4]});

		assert.equal(stringb47R3nj, "Cryptoz")
		await expect(CryptozQHDWAtL.tokenByIndex.call(uintUELsb3E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozX7N9hrp = await Cryptoz.new({from: accounts[4]});
		const addressyLaaP2h = accounts[0]
		const uintg6wvwev = BigInt("1745")
		const addressq8Ud4LP = await CryptozX7N9hrp.linkMySponsor.call(addressyLaaP2h, {from: accounts[3]});
		const uint256M1kCONm = await CryptozX7N9hrp.tokenByIndex.call(uintg6wvwev, {from: accounts[1]});

		await expect(CryptozX7N9hrp.linkMySponsor.call(addressyLaaP2h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozkHcYE80 = await Cryptoz.new({from: accounts[0]});
		const uintWGffcmT = BigInt("1709")
		const addressvYSNkEd = "0x0000000000000000000000000000000000000002"
		const uintOnfNVq = BigInt("650")
		const uintiDPKpv2 = BigInt("931")
		const uintCGw9r4R = BigInt("1671")
		const uintZZANl5u = BigInt("151")
		const uintSwItoFU = BigInt("151")
		const uintuO6jWwi = BigInt("153")
		const stringbrwJ1Q9 = "0cDVVhiurD1MRLhHsioqAGYHKBL3RrS4ykeV4MYgBuGlk6ty8yp1a1aCxp0KGLWUWyYIykzXBrpk7aVvR0YCKRSMHhKUUnvDV"
		const string0izlKr = "oqsOQ103tsG7DSuMUrOBSGP1YVe5zCvw3yVXggSLvBald5HhKnAhP9eoT8TTzVgULDVD8B6DuafsB3vtxalX22nUbAnXd"
		const uintq8uKJVc = BigInt("219")
		const uint256BAnP8HZ = await CryptozkHcYE80.sacrifice.call(uintWGffcmT, {from: accounts[4]});
		const uint2lqPbh = await CryptozkHcYE80.getTimeToDailyBonus.call(addressvYSNkEd, {from: accounts[0]});
		const boolPN1YLua = await CryptozkHcYE80.loadNewCardType.call(uintq8uKJVc, string0izlKr, stringbrwJ1Q9, uintuO6jWwi, uintSwItoFU, uintZZANl5u, uintCGw9r4R, uintiDPKpv2, uintOnfNVq, {from: accounts[3]});
		await CryptozkHcYE80.getBonusBoosters.call({from: accounts[4]});

		await expect(CryptozkHcYE80.sacrifice.call(uintWGffcmT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozkHcYE80 = await Cryptoz.new({from: accounts[0]});
		const addressoxn9rjX = "0x0000000000000000000000000000000000000002"
		const uintAkD8CN = BigInt("650")
		const uinthLhNKUR = BigInt("931")
		const uintEu1AmC6 = BigInt("1671")
		const uintYoMAal = BigInt("151")
		const uintqjS3nL = BigInt("151")
		const uintqsMQ6f = BigInt("153")
		const stringbrwJ1Q9 = "0cDVVhiurD1MRLhHsioqAGYHKBL3RrS4ykeV4MYgBuGlk6ty8yp1a1aCxp0KGLWUWyYIykzXBrpk7aVvR0YCKRSMHhKUUnvDV"
		const string0izlKr = "oqsOQ103tsG7DSuMUrOBSGP1YVe5zCvw3yVXggSLvBald5HhKnAhP9eoT8TTzVgULDVD8B6DuafsB3vtxalX22nUbAnXd"
		const uintK3vWXdv = BigInt("219")
		await CryptozkHcYE80.f.call({from: accounts[4]});
		const uint2lqPbh = await CryptozkHcYE80.getTimeToDailyBonus.call(addressoxn9rjX, {from: accounts[0]});
		const boolPN1YLua = await CryptozkHcYE80.loadNewCardType.call(uintK3vWXdv, string0izlKr, stringbrwJ1Q9, uintqsMQ6f, uintqjS3nL, uintYoMAal, uintEu1AmC6, uinthLhNKUR, uintAkD8CN, {from: accounts[3]});

		await expect(CryptozkHcYE80.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozkHcYE80 = await Cryptoz.new({from: accounts[0]});
		const addressh5H3v4h = "0x0000000000000000000000000000000000000002"
		const uintunm34b = BigInt("1644")
		const uintCSNFO5z = BigInt("905")
		const uintTcDTKKq = BigInt("1425")
		const uintdaOARZL = BigInt("137")
		const uintT630EIa = BigInt("6")
		const uinteVBDLCx = BigInt("245")
		const stringMlxIjV8 = "WV50jAxmEgqnozSS8GxJ2a1b51yEefvHskPEj6PsSkLa8p"
		const stringWkcBDR = "smO54mcJXsFQDSJJkXFV3RLSd5FYYZ2DLnDmpzISi3qf31tjU86YgytBuF9PqnAakUQhvXB0hp3N2lFdjU8924Pfap7e"
		const uintMYdLYi3 = BigInt("229")
		const uintKIBMGQ6 = BigInt("650")
		const uintCse0oVG = BigInt("931")
		const uintuT5fqx = BigInt("1671")
		const uintwE8XVre = BigInt("151")
		const uintRHWKUph = BigInt("151")
		const uintnY33d8e = BigInt("153")
		const stringbrwJ1Q9 = "0cDVVhiurD1MRLhHsioqAGYHKBL3RrS4ykeV4MYgBuGlk6ty8yp1a1aCxp0KGLWUWyYIykzXBrpk7aVvR0YCKRSMHhKUUnvDV"
		const string0izlKr = "oqsOQ103tsG7DSuMUrOBSGP1YVe5zCvw3yVXggSLvBald5HhKnAhP9eoT8TTzVgULDVD8B6DuafsB3vtxalX22nUbAnXd"
		const uintK0wQ7tf = BigInt("219")
		const uint256KYqQnUI = await CryptozkHcYE80.totalSupply.call({from: accounts[1]});
		const uint2lqPbh = await CryptozkHcYE80.getTimeToDailyBonus.call(addressh5H3v4h, {from: accounts[0]});
		const boolbm4GS63 = await CryptozkHcYE80.loadNewCardType.call(uintMYdLYi3, stringWkcBDR, stringMlxIjV8, uinteVBDLCx, uintT630EIa, uintdaOARZL, uintTcDTKKq, uintCSNFO5z, uintunm34b, {from: accounts[0]});
		const boolPN1YLua = await CryptozkHcYE80.loadNewCardType.call(uintK0wQ7tf, string0izlKr, stringbrwJ1Q9, uintnY33d8e, uintRHWKUph, uintwE8XVre, uintuT5fqx, uintCse0oVG, uintKIBMGQ6, {from: accounts[3]});

		assert.equal(boolbm4GS63, true)
		assert.equal(uint256KYqQnUI, BigInt("0"))
		assert.equal(uint2lqPbh, BigInt("1630203674"))
		await expect(CryptozkHcYE80.loadNewCardType.call(uintK0wQ7tf, string0izlKr, stringbrwJ1Q9, uintnY33d8e, uintRHWKUph, uintwE8XVre, uintuT5fqx, uintCse0oVG, uintKIBMGQ6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozkHcYE80 = await Cryptoz.new({from: accounts[0]});
		const uintoi0ZGLn = BigInt("1663")
		const uintjxpBKSw = BigInt("905")
		const uintfKfasns = BigInt("1425")
		const uintEFq88YZ = BigInt("137")
		const uintSt0oKq = BigInt("6")
		const uintoRrx6Y = BigInt("245")
		const stringMlxIjV8 = "WV50jAxmEgqnozSS8GxJ2a1b51yEefvHskPEj6PsSkLa8p"
		const stringWkcBDR = "smO54mcJXsFQDSJJkXFV3RLSd5FYYZ2DLnDmpzISi3qf31tjU86YgytBuF9PqnAakUQhvXB0hp3N2lFdjU8924Pfap7e"
		const uintVLzq8z = BigInt("229")
		const uint256KYqQnUI = await CryptozkHcYE80.totalSupply.call({from: accounts[1]});
		const boolbm4GS63 = await CryptozkHcYE80.loadNewCardType.call(uintVLzq8z, stringWkcBDR, stringMlxIjV8, uintoRrx6Y, uintSt0oKq, uintEFq88YZ, uintfKfasns, uintjxpBKSw, uintoi0ZGLn, {from: accounts[0]});
		await CryptozkHcYE80.withdraw.call({from: accounts[0]});
		const uint256G0KTf5 = await CryptozkHcYE80.totalSupply.call({from: accounts[4]});

		assert.equal(boolbm4GS63, true)
		assert.equal(uint256KYqQnUI, BigInt("0"))
		await expect(CryptozkHcYE80.withdraw.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDLhU6fa = await Cryptoz.new({from: accounts[0]});
		const addressFl9qdZS = accounts[4]
		const uintlm7rhB4 = BigInt("699")
		await CryptozDLhU6fa.buyBoosterCardAndOpen.call({from: accounts[1]});
		const uint256arrayDFdgF7D = await CryptozDLhU6fa.tokensOfOwner.call(addressFl9qdZS, {from: accounts[3]});
		const boolPm4lsQh = await CryptozDLhU6fa.openBoosterCard.call(uintlm7rhB4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozDLhU6fa.buyBoosterCardAndOpen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozX7N9hrp = await Cryptoz.new({from: accounts[4]});
		const uintoISQI3j = BigInt("64")
		const uintlR32O1t = BigInt("519")
		const uintGNiHNLb = BigInt("974")
		const uintfxv6JSL = BigInt("534")
		const uintnZrmrLY = BigInt("1210")
		const uintIUxJjEp = BigInt("1731")
		const booloR4niIj = await CryptozX7N9hrp.addTocardType.call(uintnZrmrLY, uintfxv6JSL, uintGNiHNLb, uintlR32O1t, uintoISQI3j, {from: accounts[4]});
		const uint256M1kCONm = await CryptozX7N9hrp.tokenByIndex.call(uintIUxJjEp, {from: accounts[1]});

		await expect(CryptozX7N9hrp.addTocardType.call(uintnZrmrLY, uintfxv6JSL, uintGNiHNLb, uintlR32O1t, uintoISQI3j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozBdOPgNP = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIzECbn = BigInt("1696")
		const uintqAnHfd = BigInt("1788")
		const uintAyiHmE = BigInt("173")
		const uintPwJ5TlW = BigInt("216")
		const uintPK5PZ3 = BigInt("1979")
		const uintXcgxQi6 = BigInt("911")
		const uint2Eho66 = BigInt("2015")
		const uint32yiLK9YQ = await CryptozBdOPgNP.getFreeCard.call(uintIzECbn, {from: accounts[0]});
		const stringtumUlr9 = await CryptozBdOPgNP.tokenURI.call(uintqAnHfd, {from: accounts[0]});
		await CryptozBdOPgNP.f.call({from: "0x0000000000000000000000000000000000000001"});
		const boolNUJyU9n = await CryptozBdOPgNP.addTocardType.call(uint2Eho66, uintXcgxQi6, uintPK5PZ3, uintPwJ5TlW, uintAyiHmE, {from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const CryptozkHcYE80 = await Cryptoz.new({from: accounts[0]});
		const address8QG3EF = accounts[2]
		const addressQ9W5X1W = "0x0000000000000000000000000000000000000002"
		const addressDrSUSpL = await CryptozkHcYE80.initialize.call(address8QG3EF, {from: accounts[0]});
		const uint2lqPbh = await CryptozkHcYE80.getTimeToDailyBonus.call(addressQ9W5X1W, {from: accounts[0]});
		await CryptozkHcYE80.f.call({from: accounts[2]});
		await CryptozkHcYE80.buyBoosterCardAndOpen.call({from: accounts[4]});

		assert.equal(uint2lqPbh, BigInt("1630203667"))
		await expect(CryptozkHcYE80.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})