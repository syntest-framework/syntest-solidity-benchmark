const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozojhVECW = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwwttfc = BigInt("244")
		const addressRGdZPWY = accounts[0]
		const addressZrE1Dca = accounts[1]
		const uintPnHW4W = BigInt("280")
		const uintuBjQXAf = BigInt("69")
		const uintDBuv1pW = BigInt("430")
		const uintRQfNXYI = BigInt("595")
		const uintt3E30m3 = BigInt("1973")
		const uintVy1mYkm = BigInt("1185")
		const uintJIqAGWX = BigInt("1686")
		const addressr9xkSao = await CryptozojhVECW.transferFrom.call(addressZrE1Dca, addressRGdZPWY, uintwwttfc, {from: accounts[0]});
		const uint32ydzTu8y = await CryptozojhVECW.isValidCard.call(uintPnHW4W, {from: accounts[2]});
		const stringh0KuRVc = await CryptozojhVECW.symbol.call({from: accounts[0]});
		const boolGRmLxGk = await CryptozojhVECW.addTocardType.call(uintVy1mYkm, uintt3E30m3, uintRQfNXYI, uintDBuv1pW, uintuBjQXAf, {from: accounts[0]});
		const stringk9ZAaC8 = await CryptozojhVECW.symbol.call({from: accounts[0]});
		const stringgymA3Bb = await CryptozojhVECW.tokenURI.call(uintJIqAGWX, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozgbNTF92 = await Cryptoz.new({from: accounts[4]});
		const uintCK1KITh = BigInt("1010")
		const uintfFzwC8b = BigInt("1068")
		const uinta2pMZw = BigInt("1067")
		const uintUogVqBX = BigInt("215")
		const uintBk6gQ4a = BigInt("216")
		const uintt1LmWy9 = BigInt("140")
		const stringWATXA8 = "NlFrRsrjoxfU9dsgTfzVA3FEfA3IOLbipG8nNl35"
		const stringFgtlelf = "tJXI6D9boi5Mar119BgwkuSIMu"
		const uintECHQcn = BigInt("99")
		const uintCiOtSQT = BigInt("1331")
		const uintVLhHGgn = BigInt("759")
		const uinttsBOEvP = BigInt("1414")
		const boolT7osnvf = await CryptozgbNTF92.loadNewCardType.call(uintECHQcn, stringFgtlelf, stringWATXA8, uintt1LmWy9, uintBk6gQ4a, uintUogVqBX, uinta2pMZw, uintfFzwC8b, uintCK1KITh, {from: "0x0000000000000000000000000000000000000001"});
		const boolRydK51 = await CryptozgbNTF92.openBoosterCard.call(uintCiOtSQT, {from: accounts[2]});
		await CryptozgbNTF92.getOwnedCard.call(uintVLhHGgn, {from: accounts[4]});
		const uint256bXQvnt = await CryptozgbNTF92.tokenByIndex.call(uinttsBOEvP, {from: accounts[3]});

		await expect(CryptozgbNTF92.loadNewCardType.call(uintECHQcn, stringFgtlelf, stringWATXA8, uintt1LmWy9, uintBk6gQ4a, uintUogVqBX, uinta2pMZw, uintfFzwC8b, uintCK1KITh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHke4LdT = await Cryptoz.new({from: accounts[2]});
		const addressUO1AQNL = accounts[0]
		const uintdx8avsR = BigInt("1438")
		const uintTma9osk = BigInt("546")
		const uinteAZMSJn = BigInt("560")
		const uintOlBl491 = BigInt("234")
		const uintjaUB8qE = BigInt("30")
		const uintsXrX8tV = BigInt("101")
		const stringePRJGfW = "w5pjIcLFaAzQfTeJm2QL6dsUGHNBYGxPdIRz6ScBpIYq7pg2TGqcpI2sTMzgWGAhEaajn0z8Dq3Cl1bddKVe2PnCnky"
		const stringNfi0RWg = "bXalyzt6gG4jmXefKXcAw6JSxq5mFaQ1i8oqbgK99TCCuvGFcr5Kz5r6XUTiPwgNMyXzz4qW5dY4gj7NXv1GkzVO9YviE1"
		const uintkDxOrAk = BigInt("253")
		const uint256arrayTnSIMq = await CryptozHke4LdT.tokensOfOwner.call(addressUO1AQNL, {from: accounts[4]});
		const boolLUkcTjm = await CryptozHke4LdT.loadNewCardType.call(uintkDxOrAk, stringNfi0RWg, stringePRJGfW, uintsXrX8tV, uintjaUB8qE, uintOlBl491, uinteAZMSJn, uintTma9osk, uintdx8avsR, {from: accounts[0]});
		const stringtO6fZNZ = await CryptozHke4LdT.symbol.call({from: accounts[0]});

		assert.equal(uint256arrayTnSIMq, BigInt(""))
		await expect(CryptozHke4LdT.loadNewCardType.call(uintkDxOrAk, stringNfi0RWg, stringePRJGfW, uintsXrX8tV, uintjaUB8qE, uintOlBl491, uinteAZMSJn, uintTma9osk, uintdx8avsR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWJlRB9i = await Cryptoz.new({from: accounts[1]});
		const addressAqxmPMO = accounts[4]
		const uintI5rNxp = BigInt("1765")
		const uinthJGMBk8 = BigInt("1370")
		const uintckQUhng = BigInt("609")
		const uintsKan6H = BigInt("70")
		const uintP4FNyHh = BigInt("150")
		const uintx1Dl8Ar = BigInt("52")
		const string2V8pSA = "LnpozDVqgg9MOarBXlDvRpNwPr4r"
		const stringo9Jnegs = "ejNmbW507LbAk5dIHibmWVk4hFGCThdiwCCwf6gUcdFrqbJruPQ6FVgOHmAGiuSYfsA9l1JbmbECoiyJLSy"
		const uintV0fuEi = BigInt("92")
		const addressqlA4MdQ = await CryptozWJlRB9i.linkMySponsor.call(addressAqxmPMO, {from: accounts[5]});
		const boolnQmmYmx = await CryptozWJlRB9i.loadNewCardType.call(uintV0fuEi, stringo9Jnegs, string2V8pSA, uintx1Dl8Ar, uintP4FNyHh, uintsKan6H, uintckQUhng, uinthJGMBk8, uintI5rNxp, {from: accounts[3]});

		await expect(CryptozWJlRB9i.linkMySponsor.call(addressAqxmPMO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozRCzMtLD = await Cryptoz.new({from: accounts[2]});
		const uinthVgpHir = BigInt("1556")
		const uintGTnxNMV = BigInt("1484")
		const uintFQX7mtt = BigInt("1079")
		const addressfhdYy6h = accounts[3]
		const uint9QqDL6 = BigInt("212")
		const addressErdG9A0 = accounts[2]
		const uint326GaNHy = await CryptozRCzMtLD.getFreeCard.call(uinthVgpHir, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vxTJlE = await CryptozRCzMtLD.sacrifice.call(uintGTnxNMV, {from: accounts[5]});
		const uint256mJSwuIu = await CryptozRCzMtLD.tokenOfOwnerByIndex.call(addressfhdYy6h, uintFQX7mtt, {from: accounts[1]});
		const boolqwDL5NY = await CryptozRCzMtLD.buyBoosterCard.call(uint9QqDL6, {from: accounts[0]});
		const stringUqXX1Q9 = await CryptozRCzMtLD.symbol.call({from: accounts[1]});
		const uintrJ7uBX1 = await CryptozRCzMtLD.getTimeToDailyBonus.call(addressErdG9A0, {from: accounts[4]});

		await expect(CryptozRCzMtLD.getFreeCard.call(uinthVgpHir, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuJXIWLv = await Cryptoz.new({from: accounts[3]});
		const address0K7koK = accounts[0]
		const addressfmq7S3q = accounts[5]
		const stringyCt2d5v = await CryptozuJXIWLv.name.call({from: accounts[0]});
		const uint256arrayFwCIKPm = await CryptozuJXIWLv.tokensOfOwner.call(address0K7koK, {from: accounts[2]});
		const addressGFffqnm = await CryptozuJXIWLv.linkMySponsor.call(addressfmq7S3q, {from: accounts[4]});

		assert.equal(stringyCt2d5v, "Cryptoz Cards")
		assert.equal(uint256arrayFwCIKPm, BigInt(""))
		await expect(CryptozuJXIWLv.linkMySponsor.call(addressfmq7S3q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintwtqClhu = BigInt("1762")
		const uintgtV3CY = BigInt("818")
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uintwtqClhu, {from: accounts[1]});
		const uint256jCKzgR2 = await Cryptozr7H83Gh.totalSupply.call({from: accounts[0]});
		const uint32s22WIey = await Cryptozr7H83Gh.getFreeCard.call(uintgtV3CY, {from: accounts[2]});

		await expect(Cryptozr7H83Gh.sacrifice.call(uintwtqClhu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZF6njlh = await Cryptoz.new({from: accounts[0]});
		await CryptozZF6njlh.f.call({from: accounts[4]});
		const stringmeGt8TO = await CryptozZF6njlh.name.call({from: accounts[1]});

		await expect(CryptozZF6njlh.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintG3r8w2P = BigInt("818")
		const uint256jCKzgR2 = await Cryptozr7H83Gh.totalSupply.call({from: accounts[0]});
		const uint32s22WIey = await Cryptozr7H83Gh.getFreeCard.call(uintG3r8w2P, {from: accounts[2]});

		assert.equal(uint256jCKzgR2, BigInt("0"))
		await expect(Cryptozr7H83Gh.getFreeCard.call(uintG3r8w2P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintdYKy2DQ = BigInt("706")
		const uintgZhLsNb = BigInt("1043")
		const uintMUqSigU = BigInt("818")
		const uint256ftdqDnA = await Cryptozr7H83Gh.tokenByIndex.call(uintdYKy2DQ, {from: accounts[0]});
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uintgZhLsNb, {from: accounts[1]});
		const uint32s22WIey = await Cryptozr7H83Gh.getFreeCard.call(uintMUqSigU, {from: accounts[2]});

		await expect(Cryptozr7H83Gh.tokenByIndex.call(uintdYKy2DQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintNw8rJ85 = BigInt("635")
		const uintwzoO6tn = BigInt("1762")
		const uintTq8S44K = BigInt("818")
		const uintFjfjxw = BigInt("775")
		const stringXLjDqMu = await Cryptozr7H83Gh.tokenURI.call(uintNw8rJ85, {from: accounts[0]});
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uintwzoO6tn, {from: accounts[1]});
		const uint256jCKzgR2 = await Cryptozr7H83Gh.totalSupply.call({from: accounts[0]});
		const stringnyb0Nzg = await Cryptozr7H83Gh.symbol.call({from: accounts[3]});
		const uint32s22WIey = await Cryptozr7H83Gh.getFreeCard.call(uintTq8S44K, {from: accounts[2]});
		const uint32tODv05t = await Cryptozr7H83Gh.isValidCard.call(uintFjfjxw, {from: accounts[3]});
		const uint256yXIFIXm = await Cryptozr7H83Gh.totalSupply.call({from: accounts[4]});

		assert.equal(stringXLjDqMu, "https://cryptoz.cards/data/635")
		await expect(Cryptozr7H83Gh.sacrifice.call(uintwzoO6tn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWJlRB9i = await Cryptoz.new({from: accounts[1]});
		const uintjhLdNDJ = BigInt("226")
		const addresshx9PSOn = accounts[0]
		const addresssde3gf = accounts[3]
		const addresss9BlhyF = accounts[5]
		const addressfvi6uJD = await CryptozWJlRB9i.transferFrom.call(addresssde3gf, addresshx9PSOn, uintjhLdNDJ, {from: accounts[3]});
		const addressqlA4MdQ = await CryptozWJlRB9i.linkMySponsor.call(addresss9BlhyF, {from: accounts[5]});

		await expect(CryptozWJlRB9i.transferFrom.call(addresssde3gf, addresshx9PSOn, uintjhLdNDJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozLQgTm8S = await Cryptoz.new({from: accounts[2]});
		const uintOHKSea = BigInt("1271")
		const addressCp6fCMc = "0x0000000000000000000000000000000000000001"
		const uinttaqM5n6 = BigInt("1323")
		await CryptozLQgTm8S.getTokensByRarity.call({from: accounts[0]});
		const uint32ru4dSZy = await CryptozLQgTm8S.isValidCard.call(uintOHKSea, {from: accounts[1]});
		const addressuv7JikO = await CryptozLQgTm8S.initialize.call(addressCp6fCMc, {from: accounts[3]});
		await CryptozLQgTm8S.f.call({from: accounts[1]});
		const uint256tXHurvg = await CryptozLQgTm8S.sacrifice.call(uinttaqM5n6, {from: accounts[0]});

		await expect(CryptozLQgTm8S.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintjYgfuo2 = BigInt("1042")
		await Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]});
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uintjYgfuo2, {from: accounts[1]});

		await expect(Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozv3IQ56N = await Cryptoz.new({from: accounts[0]});
		const uintVzUBIxU = BigInt("1923")
		const addressmoqtfiu = accounts[0]
		const uintt7EJqOo = BigInt("596")
		const addressaNj5LUl = accounts[2]
		const uintkiy6ZCm = BigInt("1362")
		await Cryptozv3IQ56N.getOwnedCard.call(uintVzUBIxU, {from: accounts[2]});
		const uint256arrayeSeBdPC = await Cryptozv3IQ56N.tokensOfOwner.call(addressmoqtfiu, {from: accounts[2]});
		await Cryptozv3IQ56N.getOwnedCard.call(uintt7EJqOo, {from: accounts[3]});
		const addresskhkGTWG = await Cryptozv3IQ56N.linkMySponsor.call(addressaNj5LUl, {from: accounts[1]});
		const uint32Uy04zoP = await Cryptozv3IQ56N.getFreeCard.call(uintkiy6ZCm, {from: accounts[1]});

		await expect(Cryptozv3IQ56N.getOwnedCard.call(uintVzUBIxU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintOyNooUx = BigInt("1894")
		const uintt5jG6hM = BigInt("1416")
		const uintjP3hn40 = BigInt("1043")
		const boollWh6v93 = await Cryptozr7H83Gh.buyBoosterCard.call(uintOyNooUx, {from: accounts[1]});
		const uint32DhRFlD4 = await Cryptozr7H83Gh.isValidCard.call(uintt5jG6hM, {from: accounts[1]});
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uintjP3hn40, {from: accounts[1]});

		await expect(Cryptozr7H83Gh.buyBoosterCard.call(uintOyNooUx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmNQlKKS = await Cryptoz.new({from: accounts[0]});
		const uintZx38lOx = BigInt("472")
		await CryptozmNQlKKS.buyBoosterCardAndOpen.call({from: accounts[2]});
		const uint256VmdqCiw = await CryptozmNQlKKS.tokenByIndex.call(uintZx38lOx, {from: accounts[1]});

		await expect(CryptozmNQlKKS.buyBoosterCardAndOpen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintjv7r44 = BigInt("736")
		const uintOlJ38z = BigInt("1497")
		const uintbluO1Ic = BigInt("14")
		const uintpt6yKmP = BigInt("1772")
		const uinthVdumuH = BigInt("1082")
		const uinto1GxJq = BigInt("211")
		const uintTc60GGz = BigInt("961")
		await Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]});
		await Cryptozr7H83Gh.withdraw.call({from: accounts[0]});
		const uint256x8EDHqz = await Cryptozr7H83Gh.tokenByIndex.call(uintjv7r44, {from: accounts[5]});
		const uint32GDzVdvz = await Cryptozr7H83Gh.getFreeCard.call(uintOlJ38z, {from: accounts[3]});
		const boolBDav453 = await Cryptozr7H83Gh.addTocardType.call(uintTc60GGz, uinto1GxJq, uinthVdumuH, uintpt6yKmP, uintbluO1Ic, {from: accounts[3]});

		await expect(Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintsLUcxrQ = BigInt("1497")
		const uintkCBLUcK = BigInt("1042")
		const stringyAs2rI5 = await Cryptozr7H83Gh.symbol.call({from: accounts[5]});
		await Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]});
		const uint32GDzVdvz = await Cryptozr7H83Gh.getFreeCard.call(uintsLUcxrQ, {from: accounts[3]});
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uintkCBLUcK, {from: accounts[1]});

		assert.equal(stringyAs2rI5, "Cryptoz")
		await expect(Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintgySBqaY = BigInt("982")
		const uintCkL3g1R = BigInt("1042")
		await Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]});
		const boolv6G6UVe = await Cryptozr7H83Gh.openBoosterCard.call(uintgySBqaY, {from: accounts[2]});
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uintCkL3g1R, {from: accounts[1]});

		await expect(Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const uintjbLeh7C = BigInt("1000")
		const addressPRnHh49 = accounts[4]
		const uintZctPvCH = BigInt("1042")
		await Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]});
		const uint256rKQLFgp = await Cryptozr7H83Gh.tokenOfOwnerByIndex.call(addressPRnHh49, uintjbLeh7C, {from: accounts[3]});
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uintZctPvCH, {from: accounts[1]});

		await expect(Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const addressdAN4EAb = "0x0000000000000000000000000000000000000001"
		const addressT8pzbOi = accounts[0]
		const uintDJbVdVA = BigInt("1137")
		const uinttC1QLi = BigInt("1232")
		const uintphrd7Rw = BigInt("1832")
		const uint256PsArAhH = await Cryptozr7H83Gh.totalSupply.call({from: accounts[2]});
		const addressaX8I10F = await Cryptozr7H83Gh.initialize.call(addressdAN4EAb, {from: accounts[0]});
		const uintlyDubGq = await Cryptozr7H83Gh.getTimeToDailyBonus.call(addressT8pzbOi, {from: accounts[1]});
		await Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[1]});
		const uint256BR910oT = await Cryptozr7H83Gh.sacrifice.call(uintDJbVdVA, {from: accounts[3]});
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uinttC1QLi, {from: accounts[1]});
		const boolhcl9m66 = await Cryptozr7H83Gh.openBoosterCard.call(uintphrd7Rw, {from: accounts[4]});

		assert.equal(uint256PsArAhH, BigInt("0"))
		assert.equal(uintlyDubGq, BigInt("1630203700"))
		await expect(Cryptozr7H83Gh.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr7H83Gh = await Cryptoz.new({from: accounts[0]});
		const addressd1rp2xA = accounts[1]
		const uintwbphAU1 = BigInt("253")
		const uintFiZYAIV = BigInt("7")
		const uintc4GudSU = BigInt("724")
		const uinti5pp9LW = BigInt("1662")
		const uintxQ7935T = BigInt("22")
		const uintyFRquMV = BigInt("146")
		const uinttIfLYRb = BigInt("1407")
		const addressjkcklHi = "0x0000000000000000000000000000000000000001"
		const uintD7LbQoi = BigInt("1038")
		const uintZdi48Qj = BigInt("833")
		const uint256PsArAhH = await Cryptozr7H83Gh.totalSupply.call({from: accounts[2]});
		const uintlyDubGq = await Cryptozr7H83Gh.getTimeToDailyBonus.call(addressd1rp2xA, {from: accounts[1]});
		const boolez097bO = await Cryptozr7H83Gh.addTocardType.call(uintxQ7935T, uinti5pp9LW, uintc4GudSU, uintFiZYAIV, uintwbphAU1, {from: accounts[0]});
		const uint256BR910oT = await Cryptozr7H83Gh.sacrifice.call(uintyFRquMV, {from: accounts[3]});
		const uint256au4NdR3 = await Cryptozr7H83Gh.tokenOfOwnerByIndex.call(addressjkcklHi, uinttIfLYRb, {from: accounts[3]});
		const uint256WjbfUOq = await Cryptozr7H83Gh.sacrifice.call(uintD7LbQoi, {from: accounts[1]});
		const uint32U56ZGuM = await Cryptozr7H83Gh.getFreeCard.call(uintZdi48Qj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256PsArAhH, BigInt("0"))
		assert.equal(uintlyDubGq, BigInt("1630203699"))
		await expect(Cryptozr7H83Gh.addTocardType.call(uintxQ7935T, uinti5pp9LW, uintc4GudSU, uintFiZYAIV, uintwbphAU1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})