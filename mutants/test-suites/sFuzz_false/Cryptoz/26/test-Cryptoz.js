const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozYArhgra = await Cryptoz.new({from: accounts[2]});
		const uintSJNv4q1 = BigInt("1385")
		const uintRBJgDNk = BigInt("761")
		const uintHn45UxL = BigInt("18")
		const uintbGA6jGh = BigInt("1961")
		const uintYMhoCw = BigInt("1007")
//		await CryptozYArhgra.getOwnedCard.call(uintSJNv4q1, {from: accounts[0]});
//		const booltHHhejN = await CryptozYArhgra.buyBoosterCard.call(uintRBJgDNk, {from: accounts[4]});
//		const booliYsLDTL = await CryptozYArhgra.buyBoosterCard.call(uintHn45UxL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolzgjkk53 = await CryptozYArhgra.buyCard.call(uintbGA6jGh, {from: accounts[1]});
//		const uint256FM7VRcl = await CryptozYArhgra.sacrifice.call(uintYMhoCw, {from: accounts[2]});

		await expect(CryptozYArhgra.getOwnedCard.call(uintSJNv4q1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozFvQdBNp = await Cryptoz.new({from: accounts[2]});
		const addressMtr9BgX = "0x0000000000000000000000000000000000000001"
		const addressGNumIzD = accounts[3]
		const uintgcluynF = BigInt("1616")
		const uintApe1r5M = BigInt("1953")
//		const addressYwzgdzT = await CryptozFvQdBNp.linkMySponsor.call(addressMtr9BgX, {from: accounts[1]});
//		const stringkzDrGjW = await CryptozFvQdBNp.symbol.call({from: accounts[0]});
//		const addressAd52ji8 = await CryptozFvQdBNp.linkMySponsor.call(addressGNumIzD, {from: accounts[5]});
//		await CryptozFvQdBNp.getOwnedCard.call(uintgcluynF, {from: accounts[0]});
//		const uint320NCWvL = await CryptozFvQdBNp.isValidCard.call(uintApe1r5M, {from: accounts[0]});

		await expect(CryptozFvQdBNp.linkMySponsor.call(addressMtr9BgX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJWasvV1 = await Cryptoz.new({from: accounts[0]});
		const uintwB7tQtn = BigInt("1782")
		const uintdEuZp4 = BigInt("301")
//		await CryptozJWasvV1.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolXfJBABs = await CryptozJWasvV1.buyCard.call(uintwB7tQtn, {from: accounts[4]});
//		const stringojLsGzU = await CryptozJWasvV1.tokenURI.call(uintdEuZp4, {from: accounts[4]});

		await expect(CryptozJWasvV1.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhIZvmuk = await Cryptoz.new({from: accounts[2]});
		const addressXH90K1C = accounts[0]
		const uinth3qcxrc = BigInt("0")
		const addressizzCZI = accounts[2]
		const uintZE0LapV = BigInt("164")
		const uintBdMKPwp = BigInt("619")
//		const addressHaPvWNl = await CryptozhIZvmuk.initialize.call(addressXH90K1C, {from: accounts[4]});
//		const uint32NCa0GSZ = await CryptozhIZvmuk.getFreeCard.call(uinth3qcxrc, {from: accounts[0]});
//		const uint256arrayIeuE0Og = await CryptozhIZvmuk.tokensOfOwner.call(addressizzCZI, {from: accounts[1]});
//		const uint32H9EZ1bO = await CryptozhIZvmuk.getFreeCard.call(uintZE0LapV, {from: accounts[3]});
//		const uint256UflzVdy = await CryptozhIZvmuk.sacrifice.call(uintBdMKPwp, {from: accounts[0]});

		await expect(CryptozhIZvmuk.initialize.call(addressXH90K1C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozvprXz4G = await Cryptoz.new({from: accounts[4]});
		const uint55iEwU = BigInt("234")
		const uinttw0ggnC = BigInt("356")
		const uintG57FGqu = BigInt("1052")
		const uintUUHKUmG = BigInt("302")
		const uintHE46qpt = BigInt("798")
		const addressip7ZWMr = accounts[2]
		const uintVPRID3X = BigInt("925")
//		await CryptozvprXz4G.buyBoosterCardAndOpen.call({from: accounts[1]});
//		const boolaF6bpIJ = await CryptozvprXz4G.addTocardType.call(uintHE46qpt, uintUUHKUmG, uintG57FGqu, uinttw0ggnC, uint55iEwU, {from: accounts[4]});
//		const addressxTMhdrb = await CryptozvprXz4G.initialize.call(addressip7ZWMr, {from: accounts[4]});
//		const boolkPeauTl = await CryptozvprXz4G.buyBoosterCard.call(uintVPRID3X, {from: accounts[3]});

		await expect(CryptozvprXz4G.buyBoosterCardAndOpen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozXmsUsi = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addressYtkY41c = accounts[1]
		const addresszzNoRyw = accounts[0]
		const uint256arrayoqi38qL = await CryptozXmsUsi.tokensOfOwner.call(addressYtkY41c, {from: accounts[0]});
		await CryptozXmsUsi.buyBoosterCardAndOpen.call({from: accounts[1]});
		const stringCuIrUKC = await CryptozXmsUsi.name.call({from: accounts[4]});
		const addressUMgZQ4K = await CryptozXmsUsi.initialize.call(addresszzNoRyw, {from: accounts[5]});
	});

	it('test for Cryptoz', async () => {
		const CryptozO3SgQ0I = await Cryptoz.new({from: accounts[1]});
		const uintNN4XkAj = BigInt("757")
		const uintmRkR94v = BigInt("882")
		const uintLNcDNr3 = BigInt("272")
		const uintKJV74X0 = BigInt("465")
		const uintK4pKzKR = BigInt("588")
		const uintxnIN7Wo = BigInt("32")
		const uintfqIzl2N = BigInt("154")
		const uintUl0E6nI = BigInt("101")
		const stringpQztjx3 = "pov9kxH45W7Cm0QK9Cq1KW232GCd36f5tlBWCC6NoalvFPYdkkkOppnjhkkrAGaS6GX"
		const stringW8im7t = "IWEc23hhJXlvbISF7tiWgQ7QsdaK1QwU49OxdAmbuephqVeoL1xN14vbYCKuXmMgML8Oogrbr4TSsufYlA"
		const uintLAut5Hg = BigInt("211")
		const uint256xeZUhE0 = await CryptozO3SgQ0I.totalSupply.call({from: accounts[1]});
//		const uint256YU20dUd = await CryptozO3SgQ0I.sacrifice.call(uintNN4XkAj, {from: accounts[4]});
//		await CryptozO3SgQ0I.getOwnedCard.call(uintmRkR94v, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfomGLQP = await CryptozO3SgQ0I.loadNewCardType.call(uintLAut5Hg, stringW8im7t, stringpQztjx3, uintUl0E6nI, uintfqIzl2N, uintxnIN7Wo, uintK4pKzKR, uintKJV74X0, uintLNcDNr3, {from: accounts[4]});

		assert.equal(uint256xeZUhE0, BigInt("0"))
		await expect(CryptozO3SgQ0I.sacrifice.call(uintNN4XkAj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWj9YRpH = await Cryptoz.new({from: accounts[5]});
		const addressO1QBWSE = accounts[0]
		const addressJnUjpjT = accounts[3]
		const uint256arraymN9OnYW = await CryptozWj9YRpH.tokensOfOwner.call(addressO1QBWSE, {from: accounts[5]});
		const uint256X01U1kP = await CryptozWj9YRpH.totalSupply.call({from: accounts[0]});
		const addressl99pbs5 = await CryptozWj9YRpH.initialize.call(addressJnUjpjT, {from: accounts[5]});

		assert.equal(uint256X01U1kP, BigInt("0"))
		assert.equal(uint256arraymN9OnYW, BigInt(""))
	});

	it('test for Cryptoz', async () => {
		const CryptozIdONyuW = await Cryptoz.new({from: accounts[4]});
		const addresspFg1N1U = accounts[2]
		const uintUuAebva = BigInt("1479")
		const uintoQ2lL0k = BigInt("1505")
		const uintj2SGzEu = BigInt("210")
		const addressE4Ej0pg = await CryptozIdONyuW.initialize.call(addresspFg1N1U, {from: accounts[4]});
//		const boolu2BqDSV = await CryptozIdONyuW.buyBoosterCard.call(uintUuAebva, {from: accounts[3]});
//		await CryptozIdONyuW.getOwnedCard.call(uintoQ2lL0k, {from: accounts[0]});
//		const uint256iqzpDSw = await CryptozIdONyuW.tokenByIndex.call(uintj2SGzEu, {from: accounts[3]});

		await expect(CryptozIdONyuW.buyBoosterCard.call(uintUuAebva, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJWasvV1 = await Cryptoz.new({from: accounts[0]});
		const uintqpwk3mJ = BigInt("301")
//		await CryptozJWasvV1.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringojLsGzU = await CryptozJWasvV1.tokenURI.call(uintqpwk3mJ, {from: accounts[4]});

		await expect(CryptozJWasvV1.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWj9YRpH = await Cryptoz.new({from: accounts[5]});
		const addressM0sxQEF = accounts[0]
		const addressp4xUQPm = accounts[4]
//		await CryptozWj9YRpH.f.call({from: accounts[0]});
//		const uint256arraymN9OnYW = await CryptozWj9YRpH.tokensOfOwner.call(addressM0sxQEF, {from: accounts[5]});
//		const uint256X01U1kP = await CryptozWj9YRpH.totalSupply.call({from: accounts[0]});
//		const addressl99pbs5 = await CryptozWj9YRpH.initialize.call(addressp4xUQPm, {from: accounts[5]});

		await expect(CryptozWj9YRpH.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWj9YRpH = await Cryptoz.new({from: accounts[5]});
		const addressFkAqB7k = accounts[0]
		const uinteAD0JW = BigInt("1876")
		const addresstzAzdHK = accounts[3]
		const uint256arraymN9OnYW = await CryptozWj9YRpH.tokensOfOwner.call(addressFkAqB7k, {from: accounts[5]});
//		const boolP5gD4cA = await CryptozWj9YRpH.openBoosterCard.call(uinteAD0JW, {from: accounts[2]});
//		await CryptozWj9YRpH.getTokensByRarity.call({from: accounts[0]});
//		const uint256X01U1kP = await CryptozWj9YRpH.totalSupply.call({from: accounts[0]});
//		const uint256R9JDaHs = await CryptozWj9YRpH.totalSupply.call({from: accounts[0]});
//		const addressl99pbs5 = await CryptozWj9YRpH.initialize.call(addresstzAzdHK, {from: accounts[5]});

		assert.equal(uint256arraymN9OnYW, BigInt(""))
		await expect(CryptozWj9YRpH.openBoosterCard.call(uinteAD0JW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWj9YRpH = await Cryptoz.new({from: accounts[5]});
		const addressceewSRi = accounts[1]
		const addresszLFSolW = accounts[3]
//		await CryptozWj9YRpH.getBonusBoosters.call({from: accounts[2]});
//		const uint256arraymN9OnYW = await CryptozWj9YRpH.tokensOfOwner.call(addressceewSRi, {from: accounts[5]});
//		const uint256X01U1kP = await CryptozWj9YRpH.totalSupply.call({from: accounts[0]});
//		const addressl99pbs5 = await CryptozWj9YRpH.initialize.call(addresszLFSolW, {from: accounts[5]});

		await expect(CryptozWj9YRpH.getBonusBoosters.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWj9YRpH = await Cryptoz.new({from: accounts[5]});
		const addressFj5fS9Y = accounts[0]
		const uintHkQMA8D = BigInt("1796")
		const addressEet7Kc6 = accounts[3]
		const addresswGW3ZXd = accounts[5]
		const uintL17wWN = BigInt("1664")
		const addressyeZo97T = accounts[3]
		const uintIH73so1 = BigInt("1588")
		const uint256arraymN9OnYW = await CryptozWj9YRpH.tokensOfOwner.call(addressFj5fS9Y, {from: accounts[5]});
//		const addressGsijwK1 = await CryptozWj9YRpH.transferFrom.call(addresswGW3ZXd, addressEet7Kc6, uintHkQMA8D, {from: accounts[2]});
//		const uint32t7syHkH = await CryptozWj9YRpH.isValidCard.call(uintL17wWN, {from: accounts[4]});
//		const uint256X01U1kP = await CryptozWj9YRpH.totalSupply.call({from: accounts[0]});
//		const addressl99pbs5 = await CryptozWj9YRpH.initialize.call(addressyeZo97T, {from: accounts[5]});
//		const uint256SXlll3x = await CryptozWj9YRpH.tokenByIndex.call(uintIH73so1, {from: accounts[0]});

		assert.equal(uint256arraymN9OnYW, BigInt(""))
		await expect(CryptozWj9YRpH.transferFrom.call(addresswGW3ZXd, addressEet7Kc6, uintHkQMA8D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztbQrb7z = await Cryptoz.new({from: accounts[4]});
		const uintcNlxGyS = BigInt("134")
		const uinte2BZd8Z = BigInt("1248")
		const uintBRCwrKK = BigInt("1320")
		const addressBynznvA = accounts[0]
//		const uint32zTlC4JA = await CryptoztbQrb7z.isValidCard.call(uintcNlxGyS, {from: accounts[3]});
//		const uint32tdSzNpR = await CryptoztbQrb7z.getFreeCard.call(uinte2BZd8Z, {from: accounts[3]});
//		const stringCUnoHtp = await CryptoztbQrb7z.name.call({from: accounts[3]});
//		const uint256YkgAowY = await CryptoztbQrb7z.tokenByIndex.call(uintBRCwrKK, {from: accounts[4]});
//		const addressVIdYmgz = await CryptoztbQrb7z.initialize.call(addressBynznvA, {from: accounts[0]});

		await expect(CryptoztbQrb7z.isValidCard.call(uintcNlxGyS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJWasvV1 = await Cryptoz.new({from: accounts[0]});
		const uintIXw0o0p = BigInt("954")
		const addressKAdEbNH = accounts[4]
		const uintmS6LwFy = BigInt("301")
//		await CryptozJWasvV1.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256vx0wrS9 = await CryptozJWasvV1.tokenOfOwnerByIndex.call(addressKAdEbNH, uintIXw0o0p, {from: accounts[0]});
//		const stringojLsGzU = await CryptozJWasvV1.tokenURI.call(uintmS6LwFy, {from: accounts[4]});

		await expect(CryptozJWasvV1.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJWasvV1 = await Cryptoz.new({from: accounts[0]});
		const uintN0S0DXB = BigInt("343")
//		await CryptozJWasvV1.getTokensByRarity.call({from: accounts[1]});
//		const stringhmp8iNp = await CryptozJWasvV1.symbol.call({from: accounts[4]});
//		const stringojLsGzU = await CryptozJWasvV1.tokenURI.call(uintN0S0DXB, {from: accounts[4]});

		await expect(CryptozJWasvV1.getTokensByRarity.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJWasvV1 = await Cryptoz.new({from: accounts[0]});
		const uintlPtZn7I = BigInt("1101")
		const stringOl1Qqe = await CryptozJWasvV1.symbol.call({from: accounts[3]});
//		const uint256yzvHDxn = await CryptozJWasvV1.tokenByIndex.call(uintlPtZn7I, {from: accounts[2]});

		assert.equal(stringOl1Qqe, "Cryptoz")
		await expect(CryptozJWasvV1.tokenByIndex.call(uintlPtZn7I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJWasvV1 = await Cryptoz.new({from: accounts[0]});
		const uintl7dLFS = BigInt("997")
		const uintTQ1QGNP = BigInt("1774")
		const uintlsggJDx = BigInt("818")
		const uintifZa87Z = BigInt("44")
		const uintq7zdRmA = BigInt("19")
		const uintHaGg4Vq = BigInt("62")
		const stringBOPlVhn = "PVv6hzRaACOJFLKP5wACf6HXcWppq5ABqr2y"
		const stringzB5ZlV4 = "gYJ5tHYAwH"
		const uintFPA8KJs = BigInt("119")
		const uintVXSeYdz = BigInt("1503")
		const addressiS49952 = accounts[2]
		const boolM0YVEb = await CryptozJWasvV1.loadNewCardType.call(uintFPA8KJs, stringzB5ZlV4, stringBOPlVhn, uintHaGg4Vq, uintq7zdRmA, uintifZa87Z, uintlsggJDx, uintTQ1QGNP, uintl7dLFS, {from: accounts[0]});
//		const boolA02YQzZ = await CryptozJWasvV1.buyBoosterCard.call(uintVXSeYdz, {from: accounts[2]});
//		const uintBFRAnjw = await CryptozJWasvV1.getTimeToDailyBonus.call(addressiS49952, {from: accounts[4]});

		assert.equal(boolM0YVEb, true)
		await expect(CryptozJWasvV1.buyBoosterCard.call(uintVXSeYdz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJWasvV1 = await Cryptoz.new({from: accounts[0]});
		const uintXeHcxXn = BigInt("117")
		const uintUuvEfR = BigInt("1800")
		const uintRmnOBDn = BigInt("1035")
		const uinttCqenPN = BigInt("1055")
		const uintV10dtGk = BigInt("217")
		const addressQsz6Qi = accounts[2]
//		const boolF4D1eNJ = await CryptozJWasvV1.addTocardType.call(uintV10dtGk, uinttCqenPN, uintRmnOBDn, uintUuvEfR, uintXeHcxXn, {from: accounts[0]});
//		const uintBFRAnjw = await CryptozJWasvV1.getTimeToDailyBonus.call(addressQsz6Qi, {from: accounts[4]});

		await expect(CryptozJWasvV1.addTocardType.call(uintV10dtGk, uinttCqenPN, uintRmnOBDn, uintUuvEfR, uintXeHcxXn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJWasvV1 = await Cryptoz.new({from: accounts[0]});
		const addresscYsACNL = accounts[2]
//		await CryptozJWasvV1.getTokensByRarity.call({from: accounts[4]});
//		const uintBFRAnjw = await CryptozJWasvV1.getTimeToDailyBonus.call(addresscYsACNL, {from: accounts[4]});
//		const stringZrV6T9 = await CryptozJWasvV1.name.call({from: accounts[2]});

		await expect(CryptozJWasvV1.getTokensByRarity.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJWasvV1 = await Cryptoz.new({from: accounts[0]});
		const uintt52eJ01 = BigInt("329")
		const stringojLsGzU = await CryptozJWasvV1.tokenURI.call(uintt52eJ01, {from: accounts[4]});
//		await CryptozJWasvV1.withdraw.call({from: accounts[0]});

		assert.equal(stringojLsGzU, "https://cryptoz.cards/data/329")
		await expect(CryptozJWasvV1.withdraw.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})