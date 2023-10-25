const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozMn6Pdqh = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBAWajmW = accounts[2]
		const uintfQDbtgw = BigInt("196")
		const addressznYhvpN = accounts[4]
		const addressYj9R5Cc = accounts[1]
		const addressSjANQ7r = await CryptozMn6Pdqh.initialize.call(addressBAWajmW, {from: accounts[2]});
		const addressFdWU3Sf = await CryptozMn6Pdqh.transferFrom.call(addressYj9R5Cc, addressznYhvpN, uintfQDbtgw, {from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const CryptozycekysH = await Cryptoz.new({from: accounts[4]});
		const uintvJoC0rm = BigInt("60")
		const addresscvA6PEk = accounts[0]
//		await CryptozycekysH.f.call({from: accounts[5]});
//		await CryptozycekysH.getTokensByRarity.call({from: accounts[4]});
//		await CryptozycekysH.withdraw.call({from: accounts[5]});
//		const uint256B4JSS0k = await CryptozycekysH.tokenOfOwnerByIndex.call(addresscvA6PEk, uintvJoC0rm, {from: accounts[0]});

		await expect(CryptozycekysH.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQCy0zG = await Cryptoz.new({from: accounts[3]});
		const uintMRTToqO = BigInt("527")
		const addressJnRsJsj = accounts[1]
//		await CryptozQCy0zG.getOwnedCard.call(uintMRTToqO, {from: "0x0000000000000000000000000000000000000001"});
//		const stringfm5ZOMp = await CryptozQCy0zG.name.call({from: accounts[3]});
//		const addresstsKAe7c = await CryptozQCy0zG.linkMySponsor.call(addressJnRsJsj, {from: accounts[0]});

		await expect(CryptozQCy0zG.getOwnedCard.call(uintMRTToqO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMxQKzzP = await Cryptoz.new({from: accounts[5]});
		const uintZ9yzTub = BigInt("907")
		const addressjhduuBr = accounts[2]
		const uintrqkFYx5 = BigInt("791")
		const addressE4lVNTb = "0x0000000000000000000000000000000000000001"
		const uintLPPwhB = BigInt("1819")
		const addressO3lK5SI = accounts[0]
		const addressnSPXoes = accounts[1]
//		const uint256sTKszSb = await CryptozMxQKzzP.tokenOfOwnerByIndex.call(addressjhduuBr, uintZ9yzTub, {from: accounts[0]});
//		const uint2566WOPWB = await CryptozMxQKzzP.tokenOfOwnerByIndex.call(addressE4lVNTb, uintrqkFYx5, {from: accounts[0]});
//		const addressSpcVnYY = await CryptozMxQKzzP.transferFrom.call(addressnSPXoes, addressO3lK5SI, uintLPPwhB, {from: accounts[3]});

		await expect(CryptozMxQKzzP.tokenOfOwnerByIndex.call(addressjhduuBr, uintZ9yzTub, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQXsUWbj = await Cryptoz.new({from: accounts[3]});
		const uinthhmZeZm = BigInt("1083")
		const uintZ2OPgq6 = BigInt("836")
		const uintxCjchS4 = BigInt("873")
		const addressb6I7ASn = accounts[3]
//		const uint32sU2B23n = await CryptozQXsUWbj.isValidCard.call(uinthhmZeZm, {from: accounts[5]});
//		const uint256P8PqVtK = await CryptozQXsUWbj.sacrifice.call(uintZ2OPgq6, {from: accounts[4]});
//		const boolDPAWEpm = await CryptozQXsUWbj.buyCard.call(uintxCjchS4, {from: accounts[4]});
//		const addressVJs4Us2 = await CryptozQXsUWbj.linkMySponsor.call(addressb6I7ASn, {from: accounts[3]});

		await expect(CryptozQXsUWbj.isValidCard.call(uinthhmZeZm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhxiEKKl = await Cryptoz.new({from: accounts[3]});
		const uintYkD5YQs = BigInt("671")
		const uintH0FZt1o = BigInt("72")
		const uint1yTZq9 = BigInt("308")
		const uintFQlt28b = BigInt("394")
		const uinttrVD5q = BigInt("1159")
		const uintOaP1H4c = BigInt("1065")
//		await CryptozhxiEKKl.getTokensByRarity.call({from: accounts[2]});
//		await CryptozhxiEKKl.getOwnedCard.call(uintYkD5YQs, {from: "0x0000000000000000000000000000000000000001"});
//		const booltLgfPS5 = await CryptozhxiEKKl.addTocardType.call(uintOaP1H4c, uinttrVD5q, uintFQlt28b, uint1yTZq9, uintH0FZt1o, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozhxiEKKl.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozSM3Usug = await Cryptoz.new({from: accounts[3]});
		const addressspOTT1e = accounts[0]
		const uintGDvh8xo = BigInt("1121")
//		await CryptozSM3Usug.getBonusBoosters.call({from: accounts[1]});
//		const uint256arrayGU6hweP = await CryptozSM3Usug.tokensOfOwner.call(addressspOTT1e, {from: accounts[3]});
//		const stringirjOuIz = await CryptozSM3Usug.tokenURI.call(uintGDvh8xo, {from: accounts[4]});
//		await CryptozSM3Usug.getTokensByRarity.call({from: accounts[5]});
//		await CryptozSM3Usug.buyBoosterCardAndOpen.call({from: accounts[4]});

		await expect(CryptozSM3Usug.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQXsUWbj = await Cryptoz.new({from: accounts[3]});
		const uintaF6ZGT0 = BigInt("836")
		const uintsJxb2Si = BigInt("873")
		const addressghtwgP9 = accounts[3]
//		const uint256P8PqVtK = await CryptozQXsUWbj.sacrifice.call(uintaF6ZGT0, {from: accounts[4]});
//		const boolDPAWEpm = await CryptozQXsUWbj.buyCard.call(uintsJxb2Si, {from: accounts[4]});
//		const stringDwdejM4 = await CryptozQXsUWbj.name.call({from: accounts[1]});
//		const addressVJs4Us2 = await CryptozQXsUWbj.linkMySponsor.call(addressghtwgP9, {from: accounts[3]});

		await expect(CryptozQXsUWbj.sacrifice.call(uintaF6ZGT0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozSM3Usug = await Cryptoz.new({from: accounts[3]});
		const addresse0XGt6r = accounts[0]
		const uintTEXaKCU = BigInt("1832")
		const address6Uc2XF = accounts[4]
		const addresstO2G87e = accounts[5]
		const uintLf8Zahd = BigInt("1121")
//		await CryptozSM3Usug.getBonusBoosters.call({from: accounts[1]});
//		const uint256arrayGU6hweP = await CryptozSM3Usug.tokensOfOwner.call(addresse0XGt6r, {from: accounts[3]});
//		const addressMMv5x1 = await CryptozSM3Usug.transferFrom.call(addresstO2G87e, address6Uc2XF, uintTEXaKCU, {from: accounts[1]});
//		const stringirjOuIz = await CryptozSM3Usug.tokenURI.call(uintLf8Zahd, {from: accounts[4]});
//		await CryptozSM3Usug.getTokensByRarity.call({from: accounts[5]});
//		await CryptozSM3Usug.buyBoosterCardAndOpen.call({from: accounts[4]});

		await expect(CryptozSM3Usug.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozClLiQx = await Cryptoz.new({from: accounts[2]});
		const uintSHAhJsP = BigInt("1099")
		const addressdliNWtW = accounts[4]
//		const booliUKQQuX = await CryptozClLiQx.openBoosterCard.call(uintSHAhJsP, {from: accounts[1]});
//		const uint256vyVeQZd = await CryptozClLiQx.totalSupply.call({from: accounts[1]});
//		await CryptozClLiQx.withdraw.call({from: accounts[1]});
//		const uintOp7DwI = await CryptozClLiQx.getTimeToDailyBonus.call(addressdliNWtW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozClLiQx.openBoosterCard.call(uintSHAhJsP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozSM3Usug = await Cryptoz.new({from: accounts[3]});
		const uintclqqIny = BigInt("1121")
		const addressn8YV58 = accounts[1]
		const addressoTkOBX = "0x0000000000000000000000000000000000000001"
		const uintLUa1Paw = BigInt("1026")
		const addressiIeeXy6 = "0x0000000000000000000000000000000000000001"
		const uint256jmqUsHX = await CryptozSM3Usug.totalSupply.call({from: accounts[5]});
//		await CryptozSM3Usug.getBonusBoosters.call({from: accounts[1]});
//		const stringirjOuIz = await CryptozSM3Usug.tokenURI.call(uintclqqIny, {from: accounts[4]});
//		const addressYybrLIE = await CryptozSM3Usug.initialize.call(addressn8YV58, {from: accounts[1]});
//		const addresshD9uJ8I = await CryptozSM3Usug.linkMySponsor.call(addressoTkOBX, {from: accounts[3]});
//		await CryptozSM3Usug.getTokensByRarity.call({from: accounts[5]});
//		const uint256GugsOQV = await CryptozSM3Usug.tokenOfOwnerByIndex.call(addressiIeeXy6, uintLUa1Paw, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptozSM3Usug.buyBoosterCardAndOpen.call({from: accounts[4]});

		assert.equal(uint256jmqUsHX, BigInt("0"))
		await expect(CryptozSM3Usug.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQXsUWbj = await Cryptoz.new({from: accounts[3]});
		const addressjtKJgo5 = accounts[0]
		const uintYAlCDbR = BigInt("1576")
		const addresslZXk7aO = accounts[0]
		const addresswjLkE9I = accounts[2]
		const uintQ4GagRE = BigInt("836")
		const uintiKheZum = BigInt("429")
		const addressNuliShh = accounts[3]
//		const addressTDATlNf = await CryptozQXsUWbj.linkMySponsor.call(addressjtKJgo5, {from: accounts[1]});
//		const addresspHjnLoj = await CryptozQXsUWbj.transferFrom.call(addresswjLkE9I, addresslZXk7aO, uintYAlCDbR, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256P8PqVtK = await CryptozQXsUWbj.sacrifice.call(uintQ4GagRE, {from: accounts[4]});
//		const boolDPAWEpm = await CryptozQXsUWbj.buyCard.call(uintiKheZum, {from: accounts[4]});
//		const stringDwdejM4 = await CryptozQXsUWbj.name.call({from: accounts[1]});
//		const addressVJs4Us2 = await CryptozQXsUWbj.linkMySponsor.call(addressNuliShh, {from: accounts[3]});

		await expect(CryptozQXsUWbj.linkMySponsor.call(addressjtKJgo5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozSM3Usug = await Cryptoz.new({from: accounts[3]});
		const address3zVIjk = accounts[0]
		const uintmksuLh0 = BigInt("1121")
//		await CryptozSM3Usug.getBonusBoosters.call({from: accounts[1]});
//		const uint256arrayGU6hweP = await CryptozSM3Usug.tokensOfOwner.call(address3zVIjk, {from: accounts[3]});
//		const stringirjOuIz = await CryptozSM3Usug.tokenURI.call(uintmksuLh0, {from: accounts[4]});
//		const stringbLIhAAC = await CryptozSM3Usug.name.call({from: accounts[5]});
//		await CryptozSM3Usug.getTokensByRarity.call({from: accounts[5]});
//		await CryptozSM3Usug.buyBoosterCardAndOpen.call({from: accounts[4]});

		await expect(CryptozSM3Usug.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHStXh4V = await Cryptoz.new({from: accounts[1]});
		const addresskjbhJUe = accounts[5]
		const uintpF2JyFL = BigInt("1467")
		const addressP5OnspX = accounts[0]
//		await CryptozHStXh4V.getTokensByRarity.call({from: accounts[3]});
//		await CryptozHStXh4V.getBonusBoosters.call({from: accounts[2]});
//		const stringRINjXtl = await CryptozHStXh4V.symbol.call({from: accounts[5]});
//		const uintyZABiK = await CryptozHStXh4V.getTimeToDailyBonus.call(addresskjbhJUe, {from: accounts[3]});
//		const uint256k4OtWB7 = await CryptozHStXh4V.tokenOfOwnerByIndex.call(addressP5OnspX, uintpF2JyFL, {from: accounts[1]});

		await expect(CryptozHStXh4V.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHStXh4V = await Cryptoz.new({from: accounts[1]});
		const addressYeK0JzS = accounts[3]
		const uintBGvOHWV = BigInt("62")
		const addressoeTTwLD = accounts[4]
//		await CryptozHStXh4V.getTokensByRarity.call({from: accounts[3]});
//		const uintIof47R = await CryptozHStXh4V.getTimeToDailyBonus.call(addressYeK0JzS, {from: accounts[0]});
//		const uint256aZVLsmE = await CryptozHStXh4V.tokenByIndex.call(uintBGvOHWV, {from: accounts[3]});
//		const uintyZABiK = await CryptozHStXh4V.getTimeToDailyBonus.call(addressoeTTwLD, {from: accounts[3]});

		await expect(CryptozHStXh4V.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozHStXh4V = await Cryptoz.new({from: accounts[1]});
		const uint8e3e0u = BigInt("787")
		const uintGSiwVAH = BigInt("1650")
		const addressM4JzjIH = accounts[0]
		const addressg22AFjb = accounts[4]
		const addressOhKLLq6 = accounts[5]
//		await CryptozHStXh4V.getTokensByRarity.call({from: accounts[3]});
//		const boolouGjcD = await CryptozHStXh4V.buyBoosterCard.call(uint8e3e0u, {from: accounts[2]});
//		const addressvAJxbo = await CryptozHStXh4V.transferFrom.call(addressg22AFjb, addressM4JzjIH, uintGSiwVAH, {from: accounts[2]});
//		const uintyZABiK = await CryptozHStXh4V.getTimeToDailyBonus.call(addressOhKLLq6, {from: accounts[3]});

		await expect(CryptozHStXh4V.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoziNfKo9M = await Cryptoz.new({from: accounts[0]});
		const uintJ8Nj6kN = BigInt("506")
		const uintVmpixsh = BigInt("647")
		const uintZhYmNYb = BigInt("1180")
		const uintgFQ4IR = BigInt("55")
		const uintsgH9ao3 = BigInt("107")
		const uintlr1rNBN = BigInt("147")
		const stringeOLQT5j = "7GfpYP6XrMvvSJWuMdSZ2XgpemqS9nbSGbP03PwdiLqFGWXcceoyEKyE99DT3KlAyG1uZJ6G3ArV9VuUfUuffWFrQQA4NR44t"
		const stringJGKsZd2 = "iKH3HED3lEw69YKGlobeUUfrHr9nJUjWOyfJDsUR4XACMV8ZJzd7mo8eQjO6sk7r1hlDcprnTno"
		const uintvtEZznC = BigInt("197")
		const uintRsUqXpV = BigInt("752")
		const uintpWM96b = BigInt("320")
		const uintgcFScrY = BigInt("821")
		const uintBLDt3sh = BigInt("97")
		const uintCCS1aSk = BigInt("33")
		const uintqoJyNos = BigInt("170")
		const stringpdzv1V1 = "2YuGBwSilCbDzjQZ64rlQ8het9mJeimMWrnSfQ5Wuhxb2C6Jeg1fZKAhGPjUxI3SNWX"
		const stringQzV2sNV = "dJH1CMG7ewXuMhxf9wODNK4bW1PPhTk6g6p5TXaIJNo5gfOsJO6PjX5uc4z7sUdGUBC4Daus7NC6MD85xJN3K1rGSGLJVume"
		const uintXD1JbQp = BigInt("239")
		const stringkeX9tPX = await CryptoziNfKo9M.symbol.call({from: accounts[2]});
		const booltAKjNzs = await CryptoziNfKo9M.loadNewCardType.call(uintvtEZznC, stringJGKsZd2, stringeOLQT5j, uintlr1rNBN, uintsgH9ao3, uintgFQ4IR, uintZhYmNYb, uintVmpixsh, uintJ8Nj6kN, {from: accounts[0]});
		const boolVx3ppdL = await CryptoziNfKo9M.loadNewCardType.call(uintXD1JbQp, stringQzV2sNV, stringpdzv1V1, uintqoJyNos, uintCCS1aSk, uintBLDt3sh, uintgcFScrY, uintpWM96b, uintRsUqXpV, {from: accounts[0]});

		assert.equal(boolVx3ppdL, true)
		assert.equal(booltAKjNzs, true)
		assert.equal(stringkeX9tPX, "Cryptoz")
	});

	it('test for Cryptoz', async () => {
		const CryptoziNfKo9M = await Cryptoz.new({from: accounts[0]});
		const uintO7XoHEq = BigInt("506")
		const uintxmrhJ1l = BigInt("647")
		const uinth7jSiOc = BigInt("1147")
		const uintCkQ2FEt = BigInt("164")
		const uintUY9NxA = BigInt("107")
		const uintJ2zSjex = BigInt("147")
		const stringeOLQT5j = "7GfpYP6XrMvvSJWuMdSZ2XgpemqS9nbSGbP03PwdiLqFGWXcceoyEKyE99DT3KlAyG1uZJ6G3ArV9VuUfUuffWFrQQA4NR44t"
		const stringJGKsZd2 = "iKH3HED3lEw69YKGlobeUUfrHr9nJUjWOyfJDsUR4XACMV8ZJzd7mo8eQjO6sk7r1hlDcprnTno"
		const uintIcWxmi = BigInt("197")
		const addressWP7KiQX = "0x0000000000000000000000000000000000000001"
		const uintQO0tmR9 = BigInt("752")
		const uintBgu8VMc = BigInt("320")
		const uintvoXCw76 = BigInt("821")
		const uintphrhTVb = BigInt("97")
		const uintOWrO3W3 = BigInt("33")
		const uinttS8maNN = BigInt("170")
		const stringpdzv1V1 = "2YuGBwSilCbDzjQZ64rlQ8het9mJeimMWrnSfQ5Wuhxb2C6Jeg1fZKAhGPjUxI3SNWX"
		const stringQzV2sNV = "dJH1CMG7ewXuMhxf9wODNK4bW1PPhTk6g6p5TXaIJNo5gfOsJO6PjX5uc4z7sUdGUBC4Daus7NC6MD85xJN3K1rGSGLJVume"
		const uintLhi8dXI = BigInt("239")
		const uintlWEvyaJ = BigInt("131")
		const uintXL1wjb = BigInt("1242")
		const uintDXT9kW0 = BigInt("568")
		const uintvhaLT1z = BigInt("473")
		const uintMh5oWWC = BigInt("1573")
		const stringkeX9tPX = await CryptoziNfKo9M.symbol.call({from: accounts[2]});
		const booltAKjNzs = await CryptoziNfKo9M.loadNewCardType.call(uintIcWxmi, stringJGKsZd2, stringeOLQT5j, uintJ2zSjex, uintUY9NxA, uintCkQ2FEt, uinth7jSiOc, uintxmrhJ1l, uintO7XoHEq, {from: accounts[0]});
		const uint256ZpkVPyJ = await CryptoziNfKo9M.totalSupply.call({from: accounts[2]});
		const addressTyHk2yE = await CryptoziNfKo9M.initialize.call(addressWP7KiQX, {from: accounts[0]});
		const boolVx3ppdL = await CryptoziNfKo9M.loadNewCardType.call(uintLhi8dXI, stringQzV2sNV, stringpdzv1V1, uinttS8maNN, uintOWrO3W3, uintphrhTVb, uintvoXCw76, uintBgu8VMc, uintQO0tmR9, {from: accounts[0]});
//		const boolhbO07WN = await CryptoziNfKo9M.addTocardType.call(uintMh5oWWC, uintvhaLT1z, uintDXT9kW0, uintXL1wjb, uintlWEvyaJ, {from: accounts[2]});

		assert.equal(boolVx3ppdL, true)
		assert.equal(booltAKjNzs, true)
		assert.equal(stringkeX9tPX, "Cryptoz")
		assert.equal(uint256ZpkVPyJ, BigInt("0"))
		await expect(CryptoziNfKo9M.addTocardType.call(uintMh5oWWC, uintvhaLT1z, uintDXT9kW0, uintXL1wjb, uintlWEvyaJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})