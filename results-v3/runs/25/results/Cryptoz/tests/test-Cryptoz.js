const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozQRB8BrE = await Cryptoz.new({from: accounts[4]});
		const addresswPczbQ8 = "0x0000000000000000000000000000000000000001"
		const uintSKfzb2O = BigInt("1567")
		const uintbUaHZyI = BigInt("528")
		const uintnINNVOA = BigInt("2016")
		const uint256arrayjreDxhd = await CryptozQRB8BrE.tokensOfOwner.call(addresswPczbQ8, {from: accounts[4]});
		const uint256s4lHj2s = await CryptozQRB8BrE.tokenByIndex.call(uintSKfzb2O, {from: accounts[2]});
		const uint256MQNxPi7 = await CryptozQRB8BrE.tokenByIndex.call(uintbUaHZyI, {from: accounts[2]});
		await CryptozQRB8BrE.buyBoosterCardAndOpen.call({from: accounts[4]});
		const string2hvxXK = await CryptozQRB8BrE.tokenURI.call(uintnINNVOA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256arrayjreDxhd, BigInt(""))
		await expect(CryptozQRB8BrE.tokenByIndex.call(uintSKfzb2O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozOkvR1VA = await Cryptoz.new({from: accounts[2]});
		const addressF3f666M = accounts[2]
		const addressaKXzZZI = accounts[4]
		const uintVjCo8S = BigInt("610")
		const uint256arrayFDB20f0 = await CryptozOkvR1VA.tokensOfOwner.call(addressF3f666M, {from: accounts[5]});
		const uint256arraypMoldEO = await CryptozOkvR1VA.tokensOfOwner.call(addressaKXzZZI, {from: accounts[0]});
		await CryptozOkvR1VA.getBonusBoosters.call({from: accounts[1]});
		const boolXxNA8gQ = await CryptozOkvR1VA.buyCard.call(uintVjCo8S, {from: accounts[1]});

		assert.equal(uint256arrayFDB20f0, BigInt(""))
		assert.equal(uint256arraypMoldEO, BigInt(""))
		await expect(CryptozOkvR1VA.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoznz34T3h = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwfRd5D3 = BigInt("292")
		const addressHScHNKA = accounts[2]
		const uintKH7Jwky = BigInt("453")
		const uintgEuCXDy = BigInt("817")
		const uint32TcfLEvt = await Cryptoznz34T3h.isValidCard.call(uintwfRd5D3, {from: accounts[3]});
		const uint256arrayjm8wY0F = await Cryptoznz34T3h.tokensOfOwner.call(addressHScHNKA, {from: accounts[0]});
		await Cryptoznz34T3h.f.call({from: accounts[4]});
		const uint32I9BPwpV = await Cryptoznz34T3h.getFreeCard.call(uintKH7Jwky, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jKjgLLJ = await Cryptoznz34T3h.sacrifice.call(uintgEuCXDy, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozokiloAm = await Cryptoz.new({from: accounts[4]});
		const uintNDOort2 = BigInt("874")
		const uintXgLxN2 = BigInt("1203")
		const bool9zHRwm = await CryptozokiloAm.openBoosterCard.call(uintNDOort2, {from: accounts[3]});
		await CryptozokiloAm.getBonusBoosters.call({from: accounts[2]});
		const booleN76Uku = await CryptozokiloAm.buyCard.call(uintXgLxN2, {from: accounts[2]});

		await expect(CryptozokiloAm.openBoosterCard.call(uintNDOort2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztkwGfO3 = await Cryptoz.new({from: accounts[0]});
		const uintSM4JSDy = BigInt("1542")
		const addressDpT6EW = accounts[0]
		const uinteURrwHh = BigInt("1193")
		const uintqZs1rjr = BigInt("56")
		const uintv2BG7Ku = BigInt("1467")
		const uintBmIoEWV = BigInt("223")
		const uintH7UgX5W = BigInt("862")
		const uintsz1wVP = BigInt("213")
		const uintLNDLNee = BigInt("187")
		const uintGlafbIC = BigInt("1521")
		const uintyDOiiPq = BigInt("1675")
		const uintkVjUwen = BigInt("750")
		const uintMVvSB28 = BigInt("1175")
		await CryptoztkwGfO3.getOwnedCard.call(uintSM4JSDy, {from: accounts[1]});
		const uint256arrayyMYKTJ = await CryptoztkwGfO3.tokensOfOwner.call(addressDpT6EW, {from: accounts[0]});
		const uint256kL6Irwr = await CryptoztkwGfO3.tokenByIndex.call(uinteURrwHh, {from: accounts[4]});
		const boolpnuETCG = await CryptoztkwGfO3.addTocardType.call(uintsz1wVP, uintH7UgX5W, uintBmIoEWV, uintv2BG7Ku, uintqZs1rjr, {from: accounts[1]});
		const boolUPnHyPJ = await CryptoztkwGfO3.addTocardType.call(uintMVvSB28, uintkVjUwen, uintyDOiiPq, uintGlafbIC, uintLNDLNee, {from: accounts[0]});

		await expect(CryptoztkwGfO3.getOwnedCard.call(uintSM4JSDy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozX4yqoNh = await Cryptoz.new({from: accounts[4]});
		const uintn6XtgyM = BigInt("961")
		const uint256Cy6UzLS = await CryptozX4yqoNh.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringChUVQub = await CryptozX4yqoNh.tokenURI.call(uintn6XtgyM, {from: accounts[5]});
		const stringFzR5xfp = await CryptozX4yqoNh.symbol.call({from: accounts[2]});

		assert.equal(stringChUVQub, "https://cryptoz.cards/data/961")
		assert.equal(stringFzR5xfp, "Cryptoz")
		assert.equal(uint256Cy6UzLS, BigInt("0"))
	});

	it('test for Cryptoz', async () => {
		const Cryptozour5Gu1 = await Cryptoz.new({from: accounts[3]});
		const uintipQOBc2 = BigInt("293")
		const uintXxcCnee = BigInt("1673")
		const stringqXwqib9 = await Cryptozour5Gu1.name.call({from: accounts[4]});
		const uint256L33INxI = await Cryptozour5Gu1.tokenByIndex.call(uintipQOBc2, {from: accounts[2]});
		const stringEllArT5 = await Cryptozour5Gu1.tokenURI.call(uintXxcCnee, {from: accounts[4]});
		await Cryptozour5Gu1.getBonusBoosters.call({from: accounts[2]});
		await Cryptozour5Gu1.buyBoosterCardAndOpen.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqXwqib9, "Cryptoz Cards")
		await expect(Cryptozour5Gu1.tokenByIndex.call(uintipQOBc2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozz4jCYn = await Cryptoz.new({from: accounts[2]});
		const uintHBprnc = BigInt("1255")
		await Cryptozz4jCYn.f.call({from: accounts[5]});
		const uint256tizGSAl = await Cryptozz4jCYn.sacrifice.call(uintHBprnc, {from: accounts[1]});
		await Cryptozz4jCYn.buyBoosterCardAndOpen.call({from: accounts[1]});

		await expect(Cryptozz4jCYn.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozokiloAm = await Cryptoz.new({from: accounts[4]});
		const uinthmmIkQ = BigInt("1034")
		const uintvrnVzl = BigInt("1444")
		const uintozuf1F = BigInt("1739")
		const uintrxH1765 = BigInt("50")
		const uintiQbMGBp = BigInt("161")
		const uintqerWEOW = BigInt("216")
		const stringmUsvF2X = "WwmoU7G4bA4I6tVnIQidD3S1hIgfijfCIDI55ScRxxrUlJsQPbNCJFYFsiK63j"
		const stringmaBlfe0 = "8eU4ZSKlCKau0F9GSIdjjeWPfW358ieWxjbUo"
		const uinthgO7zQX = BigInt("225")
		const uintlfeFUzo = BigInt("213")
		const addressQTyTp3r = accounts[3]
		const uintDFEBJuM = BigInt("874")
		const uintJ4ai7cV = BigInt("1232")
		const boolDXuCUt6 = await CryptozokiloAm.loadNewCardType.call(uinthgO7zQX, stringmaBlfe0, stringmUsvF2X, uintqerWEOW, uintiQbMGBp, uintrxH1765, uintozuf1F, uintvrnVzl, uinthmmIkQ, {from: accounts[3]});
		const uint256WMMChL = await CryptozokiloAm.tokenOfOwnerByIndex.call(addressQTyTp3r, uintlfeFUzo, {from: accounts[2]});
		const bool9zHRwm = await CryptozokiloAm.openBoosterCard.call(uintDFEBJuM, {from: accounts[3]});
		await CryptozokiloAm.getBonusBoosters.call({from: accounts[2]});
		const booleN76Uku = await CryptozokiloAm.buyCard.call(uintJ4ai7cV, {from: accounts[2]});

		await expect(CryptozokiloAm.loadNewCardType.call(uinthgO7zQX, stringmaBlfe0, stringmUsvF2X, uintqerWEOW, uintiQbMGBp, uintrxH1765, uintozuf1F, uintvrnVzl, uinthmmIkQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozour5Gu1 = await Cryptoz.new({from: accounts[3]});
		const uintl3CNXC4 = BigInt("1673")
		const uintMBqd2gW = BigInt("1930")
		const stringEllArT5 = await Cryptozour5Gu1.tokenURI.call(uintl3CNXC4, {from: accounts[4]});
		await Cryptozour5Gu1.getTokensByRarity.call({from: accounts[3]});
		const boolj2xlLu4 = await Cryptozour5Gu1.buyCard.call(uintMBqd2gW, {from: "0x0000000000000000000000000000000000000001"});
		await Cryptozour5Gu1.getBonusBoosters.call({from: accounts[2]});
		await Cryptozour5Gu1.buyBoosterCardAndOpen.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringEllArT5, "https://cryptoz.cards/data/1673")
		await expect(Cryptozour5Gu1.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozokiloAm = await Cryptoz.new({from: accounts[4]});
		const uinth9XkmSv = BigInt("1924")
		const addresscxnYDdA = accounts[0]
		const addressMIopI1m = accounts[2]
		const uintqEpifxf = BigInt("466")
		const uintMLYlboh = BigInt("874")
		const uintIF3EWDd = BigInt("553")
		const uintdsBVOlr = BigInt("721")
		const addressDSsgCIV = await CryptozokiloAm.transferFrom.call(addressMIopI1m, addresscxnYDdA, uinth9XkmSv, {from: accounts[3]});
		const stringv8rH2F = await CryptozokiloAm.tokenURI.call(uintqEpifxf, {from: accounts[4]});
		const bool9zHRwm = await CryptozokiloAm.openBoosterCard.call(uintMLYlboh, {from: accounts[3]});
		const uint32BMKo84y = await CryptozokiloAm.getFreeCard.call(uintIF3EWDd, {from: accounts[1]});
		await CryptozokiloAm.getBonusBoosters.call({from: accounts[2]});
		const booleN76Uku = await CryptozokiloAm.buyCard.call(uintdsBVOlr, {from: accounts[2]});

		await expect(CryptozokiloAm.transferFrom.call(addressMIopI1m, addresscxnYDdA, uinth9XkmSv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozPTdWqE = await Cryptoz.new({from: accounts[4]});
		const uintjeEXOQc = BigInt("1237")
		const addressce7nSXG = accounts[0]
		const uintG7btZka = BigInt("93")
		const uintWgrHqKM = BigInt("1366")
		const uintxvNTmpv = BigInt("53")
		const uint256NrJHIGW = await CryptozPTdWqE.tokenOfOwnerByIndex.call(addressce7nSXG, uintjeEXOQc, {from: accounts[0]});
		const boolJ5aahaR = await CryptozPTdWqE.buyCard.call(uintG7btZka, {from: "0x0000000000000000000000000000000000000001"});
		const uint256S98A8nL = await CryptozPTdWqE.sacrifice.call(uintWgrHqKM, {from: accounts[1]});
		const stringZUt4Th8 = await CryptozPTdWqE.tokenURI.call(uintxvNTmpv, {from: accounts[0]});

		await expect(CryptozPTdWqE.tokenOfOwnerByIndex.call(addressce7nSXG, uintjeEXOQc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd4vjZCQ = await Cryptoz.new({from: accounts[2]});
		const addressIlr9Bd8 = accounts[4]
		const uintBwqm178 = BigInt("1931")
		const uintZ3Bc7S5 = BigInt("229")
		const uintEoNM458 = BigInt("1506")
		const addressQZ6A5QC = await Cryptozd4vjZCQ.linkMySponsor.call(addressIlr9Bd8, {from: accounts[4]});
		const stringWKtkyIB = await Cryptozd4vjZCQ.tokenURI.call(uintBwqm178, {from: accounts[4]});
		const boolH9tHrez = await Cryptozd4vjZCQ.buyBoosterCard.call(uintZ3Bc7S5, {from: accounts[4]});
		const boolcZxevO5 = await Cryptozd4vjZCQ.buyBoosterCard.call(uintEoNM458, {from: accounts[2]});

		await expect(Cryptozd4vjZCQ.linkMySponsor.call(addressIlr9Bd8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozokiloAm = await Cryptoz.new({from: accounts[4]});
		const addressXrTQw1 = "0x0000000000000000000000000000000000000001"
		await CryptozokiloAm.getBonusBoosters.call({from: accounts[2]});
		const addressaVM3x2 = await CryptozokiloAm.linkMySponsor.call(addressXrTQw1, {from: accounts[0]});

		await expect(CryptozokiloAm.getBonusBoosters.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozour5Gu1 = await Cryptoz.new({from: accounts[3]});
		const uintn5yaDD = BigInt("304")
		await Cryptozour5Gu1.buyBoosterCardAndOpen.call({from: accounts[0]});
		const stringOrWsnTl = await Cryptozour5Gu1.symbol.call({from: accounts[3]});
		const uint256L33INxI = await Cryptozour5Gu1.tokenByIndex.call(uintn5yaDD, {from: accounts[2]});

		await expect(Cryptozour5Gu1.buyBoosterCardAndOpen.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozVcptvm7 = await Cryptoz.new({from: accounts[0]});
		const addressLMwPaw5 = accounts[5]
		const uintXYeT54v = BigInt("1135")
		const uinttBPR61n = await CryptozVcptvm7.getTimeToDailyBonus.call(addressLMwPaw5, {from: accounts[5]});
		const uint256tCY8Jt4 = await CryptozVcptvm7.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint32GxQNFVH = await CryptozVcptvm7.isValidCard.call(uintXYeT54v, {from: accounts[4]});
		await CryptozVcptvm7.buyBoosterCardAndOpen.call({from: accounts[0]});

		assert.equal(uint256tCY8Jt4, BigInt("0"))
		assert.equal(uinttBPR61n, BigInt("1630203835"))
		await expect(CryptozVcptvm7.isValidCard.call(uintXYeT54v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozaKMf2o = await Cryptoz.new({from: accounts[1]});
		const uintOrBqQYB = BigInt("781")
		const addressStQLJpw = accounts[3]
		const uintxXyZOC = BigInt("1752")
		const addressi1EfCAk = accounts[2]
		await CryptozaKMf2o.getBonusBoosters.call({from: accounts[1]});
		const uint256VkWjsnX = await CryptozaKMf2o.sacrifice.call(uintOrBqQYB, {from: accounts[2]});
		const uint256arrayG6nr0ow = await CryptozaKMf2o.tokensOfOwner.call(addressStQLJpw, {from: accounts[0]});
		const uint256yhWgBFR = await CryptozaKMf2o.tokenOfOwnerByIndex.call(addressi1EfCAk, uintxXyZOC, {from: accounts[2]});

		await expect(CryptozaKMf2o.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozokiloAm = await Cryptoz.new({from: accounts[4]});
		const uintVKwhN6H = BigInt("375")
		const boolSAMpCg = await CryptozokiloAm.buyBoosterCard.call(uintVKwhN6H, {from: accounts[1]});
		await CryptozokiloAm.getBonusBoosters.call({from: accounts[2]});

		await expect(CryptozokiloAm.buyBoosterCard.call(uintVKwhN6H, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozokiloAm = await Cryptoz.new({from: accounts[4]});
		await CryptozokiloAm.withdraw.call({from: accounts[4]});
		await CryptozokiloAm.getBonusBoosters.call({from: accounts[2]});

		await expect(CryptozokiloAm.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozokiloAm = await Cryptoz.new({from: accounts[4]});
		const uintsq6X0U4 = BigInt("132")
		const uintx0kBPBu = BigInt("1120")
		const uintpSCp7hs = BigInt("496")
		const uintQepMQp = BigInt("104")
		const uintF3L2ciU = BigInt("194")
		const uinth538QY0 = BigInt("201")
		const stringcXHBRqu = "Xq2Ccb1ngSDl7pXnUElVpS1P6d36V8IM7UfxH8BCXLjpL1VUxlaFEGQk2wZQ0IkXanOWllhtQd7i42fw5Wc1vPtF"
		const stringOfzrk36 = "IuIp7IPplU4wSknumbgHWetq3La9746tEXfS3CkgxEpslxvzxc3nX27o1yPnasOYkdoR049Sp"
		const uinthGuZZ6j = BigInt("55")
		const uintRz3CMec = BigInt("1486")
		const boolCvFhcn = await CryptozokiloAm.loadNewCardType.call(uinthGuZZ6j, stringOfzrk36, stringcXHBRqu, uinth538QY0, uintF3L2ciU, uintQepMQp, uintpSCp7hs, uintx0kBPBu, uintsq6X0U4, {from: accounts[4]});
		const stringfxJdjN7 = await CryptozokiloAm.tokenURI.call(uintRz3CMec, {from: accounts[3]});
		await CryptozokiloAm.getBonusBoosters.call({from: accounts[2]});

		assert.equal(boolCvFhcn, true)
		assert.equal(stringfxJdjN7, "https://cryptoz.cards/data/1486")
		await expect(CryptozokiloAm.getBonusBoosters.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozokiloAm = await Cryptoz.new({from: accounts[4]});
		const uinte7EPXXy = BigInt("205")
		const uintG2prdVE = BigInt("767")
		const uintCcM0CU4 = BigInt("956")
		const uintQ732qDe = BigInt("750")
		const uint5M6aS8 = BigInt("1289")
		const boollvO67uk = await CryptozokiloAm.addTocardType.call(uint5M6aS8, uintQ732qDe, uintCcM0CU4, uintG2prdVE, uinte7EPXXy, {from: accounts[4]});
		await CryptozokiloAm.getBonusBoosters.call({from: accounts[2]});

		await expect(CryptozokiloAm.addTocardType.call(uint5M6aS8, uintQ732qDe, uintCcM0CU4, uintG2prdVE, uinte7EPXXy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})