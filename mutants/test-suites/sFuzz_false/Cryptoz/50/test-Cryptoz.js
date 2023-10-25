const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozSuZ0MIb = await Cryptoz.new({from: accounts[2]});
		const addresswwAbuLq = accounts[4]
		const uintmr2U59 = BigInt("1647")
		const uintqB6Sksr = BigInt("97")
		const uint81gkZ4 = BigInt("1002")
		const uintY4znjqF = await CryptozSuZ0MIb.getTimeToDailyBonus.call(addresswwAbuLq, {from: accounts[1]});
//		await CryptozSuZ0MIb.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolLiUA9xq = await CryptozSuZ0MIb.buyBoosterCard.call(uintmr2U59, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvsMsHMj = await CryptozSuZ0MIb.openBoosterCard.call(uintqB6Sksr, {from: accounts[1]});
//		const uint256wl5QDoT = await CryptozSuZ0MIb.sacrifice.call(uint81gkZ4, {from: accounts[3]});

		assert.equal(uintY4znjqF, BigInt("1630204072"))
		await expect(CryptozSuZ0MIb.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNWf8CV = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIK5Sipk = BigInt("59")
		const addressWg0U8tI = accounts[1]
		const addressMqQu1mG = accounts[4]
		const uintnZ0GrM = BigInt("1905")
		const uintTAmyIzR = BigInt("1204")
		const addressDEM3y4H = accounts[2]
		const addressBZRAffM = await CryptozNWf8CV.transferFrom.call(addressMqQu1mG, addressWg0U8tI, uintIK5Sipk, {from: accounts[2]});
		const stringAQKXoNW = await CryptozNWf8CV.tokenURI.call(uintnZ0GrM, {from: accounts[4]});
		const uint256M94ZfE = await CryptozNWf8CV.tokenOfOwnerByIndex.call(addressDEM3y4H, uintTAmyIzR, {from: accounts[4]});
		const uint256EpPG5pS = await CryptozNWf8CV.totalSupply.call({from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozUtJ3FWH = await Cryptoz.new({from: accounts[2]});
		const addressHKtKcQc = accounts[4]
		const uintWN9jUEW = BigInt("1485")
		const uintvarJg36 = BigInt("1040")
		const uintvenSwC9 = await CryptozUtJ3FWH.getTimeToDailyBonus.call(addressHKtKcQc, {from: accounts[3]});
		const stringmOaV84e = await CryptozUtJ3FWH.tokenURI.call(uintWN9jUEW, {from: accounts[0]});
		const stringSt06RjK = await CryptozUtJ3FWH.name.call({from: accounts[2]});
//		const uint256S4KOhic = await CryptozUtJ3FWH.sacrifice.call(uintvarJg36, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringSt06RjK, "Cryptoz Cards")
		assert.equal(stringmOaV84e, "https://cryptoz.cards/data/1485")
		assert.equal(uintvenSwC9, BigInt("1630204086"))
		await expect(CryptozUtJ3FWH.sacrifice.call(uintvarJg36, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozjWnIDL1 = await Cryptoz.new({from: accounts[2]});
		const uintOMehDZp = BigInt("1950")
		const uintNPgT5a = BigInt("1024")
		const uintSMyzno = BigInt("1066")
		const addressyzFeZPO = "0x0000000000000000000000000000000000000001"
		const uint256McYog1V = await CryptozjWnIDL1.totalSupply.call({from: accounts[3]});
//		const uint32BYwQb6U = await CryptozjWnIDL1.isValidCard.call(uintOMehDZp, {from: accounts[1]});
//		const boolxsjGI9 = await CryptozjWnIDL1.buyBoosterCard.call(uintNPgT5a, {from: accounts[4]});
//		const uint256qwtunZb = await CryptozjWnIDL1.tokenOfOwnerByIndex.call(addressyzFeZPO, uintSMyzno, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256gqS31rn = await CryptozjWnIDL1.totalSupply.call({from: accounts[0]});

		assert.equal(uint256McYog1V, BigInt("0"))
		await expect(CryptozjWnIDL1.isValidCard.call(uintOMehDZp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
		const addresswzsvzAI = accounts[1]
//		await Cryptoza8BJhu.getTokensByRarity.call({from: accounts[2]});
//		const addressLjLFXz = await Cryptoza8BJhu.linkMySponsor.call(addresswzsvzAI, {from: accounts[4]});
//		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});

		await expect(Cryptoza8BJhu.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTjwmfRM = await Cryptoz.new({from: accounts[2]});
		const addressQP5FKA6 = accounts[0]
		const uintBhsb4Y7 = BigInt("54")
		const uintcafbM1c = BigInt("884")
		const uintNWb6835 = BigInt("450")
		const uintE1i4uo = BigInt("83")
		const uintUHU1Kes = BigInt("30")
		const uintlmDvUnE = BigInt("221")
		const stringfP0fpSs = "5Utz2Ax0ZAoDIK418jP4OfmyxoCCB3v8yNYHhDsXHdsNFHu4hvdPF2bze3TlifLKEI78Py4uhtCdpHAhMiiEsnx"
		const stringzOHWAcv = "1uKso5m35JzmeH8j"
		const uintZmG44or = BigInt("15")
		const uintJ3wGmDL = BigInt("55")
		const addressTNYbpBq = accounts[0]
		const uintWzZNRrd = await CryptozTjwmfRM.getTimeToDailyBonus.call(addressQP5FKA6, {from: accounts[1]});
//		const boolKRCRgpW = await CryptozTjwmfRM.loadNewCardType.call(uintZmG44or, stringzOHWAcv, stringfP0fpSs, uintlmDvUnE, uintUHU1Kes, uintE1i4uo, uintNWb6835, uintcafbM1c, uintBhsb4Y7, {from: accounts[1]});
//		const uint256LJIa7Gj = await CryptozTjwmfRM.tokenOfOwnerByIndex.call(addressTNYbpBq, uintJ3wGmDL, {from: accounts[3]});
//		await CryptozTjwmfRM.getTokensByRarity.call({from: accounts[2]});

		assert.equal(uintWzZNRrd, BigInt("1630204083"))
		await expect(CryptozTjwmfRM.loadNewCardType.call(uintZmG44or, stringzOHWAcv, stringfP0fpSs, uintlmDvUnE, uintUHU1Kes, uintE1i4uo, uintNWb6835, uintcafbM1c, uintBhsb4Y7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQKCk0aq = await Cryptoz.new({from: accounts[4]});
		const uintvogmyp = BigInt("1443")
		const addressn1QWDJA = accounts[4]
		const addressdG08hAl = accounts[4]
//		const boolUTSfQs = await CryptozQKCk0aq.openBoosterCard.call(uintvogmyp, {from: accounts[3]});
//		const addressQOF04t6 = await CryptozQKCk0aq.initialize.call(addressn1QWDJA, {from: accounts[3]});
//		const uint256arraysKTuwVX = await CryptozQKCk0aq.tokensOfOwner.call(addressdG08hAl, {from: accounts[0]});

		await expect(CryptozQKCk0aq.openBoosterCard.call(uintvogmyp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZtU2JN3 = await Cryptoz.new({from: accounts[0]});
		const uintIn5F1Lz = BigInt("517")
		const addressIFrR6NV = accounts[1]
		const uintrCFuC0Y = BigInt("1634")
		const addressuCWiuJI = accounts[4]
		const addressq5tzvC9 = accounts[3]
		const uintPGnK9RD = BigInt("216")
		const addressI22CRP = accounts[3]
		const addressonoJSTp = "0x0000000000000000000000000000000000000001"
		const uintATRmoBu = BigInt("792")
//		await CryptozZtU2JN3.buyBoosterCardAndOpen.call({from: accounts[1]});
//		const uint256ONf9OcY = await CryptozZtU2JN3.tokenOfOwnerByIndex.call(addressIFrR6NV, uintIn5F1Lz, {from: accounts[4]});
//		const uint256weokLCi = await CryptozZtU2JN3.tokenOfOwnerByIndex.call(addressuCWiuJI, uintrCFuC0Y, {from: accounts[2]});
//		const addressDNdeAe = await CryptozZtU2JN3.linkMySponsor.call(addressq5tzvC9, {from: accounts[2]});
//		const addressQrZiXwA = await CryptozZtU2JN3.transferFrom.call(addressonoJSTp, addressI22CRP, uintPGnK9RD, {from: accounts[4]});
//		const stringc11HgpB = await CryptozZtU2JN3.tokenURI.call(uintATRmoBu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozZtU2JN3.buyBoosterCardAndOpen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
		const uintFkhwjml = BigInt("2")
		const uintu5OkvWV = BigInt("280")
		const uintBliayQH = BigInt("629")
		const uintSG7poJm = BigInt("716")
		const uintDsFGUx = BigInt("1080")
		const addressMnn146b = accounts[1]
//		const booloMENNXf = await Cryptoza8BJhu.addTocardType.call(uintDsFGUx, uintSG7poJm, uintBliayQH, uintu5OkvWV, uintFkhwjml, {from: accounts[4]});
//		await Cryptoza8BJhu.getTokensByRarity.call({from: accounts[2]});
//		const addressLjLFXz = await Cryptoza8BJhu.linkMySponsor.call(addressMnn146b, {from: accounts[4]});
//		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});

		await expect(Cryptoza8BJhu.addTocardType.call(uintDsFGUx, uintSG7poJm, uintBliayQH, uintu5OkvWV, uintFkhwjml, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUtJ3FWH = await Cryptoz.new({from: accounts[2]});
		const uintnSPTupk = BigInt("1485")
		const uintuUV54Ps = BigInt("512")
		const addressetkXgxY = accounts[5]
		const uintMeGghc = BigInt("1029")
		const stringmOaV84e = await CryptozUtJ3FWH.tokenURI.call(uintnSPTupk, {from: accounts[0]});
		const stringNhTQ6s2 = await CryptozUtJ3FWH.name.call({from: accounts[2]});
//		const uint256HmfULkG = await CryptozUtJ3FWH.tokenOfOwnerByIndex.call(addressetkXgxY, uintuUV54Ps, {from: accounts[0]});
//		const uint256S4KOhic = await CryptozUtJ3FWH.sacrifice.call(uintMeGghc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringNhTQ6s2, "Cryptoz Cards")
		assert.equal(stringmOaV84e, "https://cryptoz.cards/data/1485")
		await expect(CryptozUtJ3FWH.tokenOfOwnerByIndex.call(addressetkXgxY, uintuUV54Ps, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
		const uintyqoZA2x = BigInt("407")
		const addressd1k2V0S = accounts[3]
		const addressbhuqS7K = accounts[2]
		const uintIc82eU = BigInt("1411")
//		const addressK4YflVt = await Cryptoza8BJhu.transferFrom.call(addressbhuqS7K, addressd1k2V0S, uintyqoZA2x, {from: accounts[3]});
//		const uint32PQvwMiz = await Cryptoza8BJhu.isValidCard.call(uintIc82eU, {from: accounts[0]});
//		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});

		await expect(Cryptoza8BJhu.transferFrom.call(addressbhuqS7K, addressd1k2V0S, uintyqoZA2x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
		const uintUkGqiQm = BigInt("1711")
//		await Cryptoza8BJhu.getOwnedCard.call(uintUkGqiQm, {from: accounts[4]});
//		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});

		await expect(Cryptoza8BJhu.getOwnedCard.call(uintUkGqiQm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
		const addressMBpsHSq = accounts[1]
		const uint256arrayhEAztzQ = await Cryptoza8BJhu.tokensOfOwner.call(addressMBpsHSq, {from: accounts[3]});
		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});

		assert.equal(uint256W88iKCj, BigInt("0"))
		assert.equal(uint256arrayhEAztzQ, BigInt(""))
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
		const uintKTA23g = BigInt("1140")
		const uintvk7wB6J = BigInt("1546")
//		const uint256DZ2cRZe = await Cryptoza8BJhu.tokenByIndex.call(uintKTA23g, {from: accounts[0]});
//		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});
//		const uint32LGeYnxP = await Cryptoza8BJhu.getFreeCard.call(uintvk7wB6J, {from: accounts[1]});

		await expect(Cryptoza8BJhu.tokenByIndex.call(uintKTA23g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
//		await Cryptoza8BJhu.withdraw.call({from: accounts[4]});
//		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});

		await expect(Cryptoza8BJhu.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
		const uintcczcvQj = BigInt("436")
//		await Cryptoza8BJhu.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});
//		await Cryptoza8BJhu.getBonusBoosters.call({from: accounts[2]});
//		const uint32laPQVJO = await Cryptoza8BJhu.getFreeCard.call(uintcczcvQj, {from: accounts[3]});

		await expect(Cryptoza8BJhu.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
		const addresspwwNnix = accounts[0]
//		await Cryptoza8BJhu.f.call({from: accounts[2]});
//		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});
//		const addressmNUBxpR = await Cryptoza8BJhu.linkMySponsor.call(addresspwwNnix, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Cryptoza8BJhu.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWAWEPLi = await Cryptoz.new({from: accounts[4]});
		const uintHhEs8Eh = BigInt("13")
		const uintROL96On = BigInt("7")
		const uintahwVMXV = BigInt("894")
		const uintWL9otSI = BigInt("194")
		const uintxdRuFb6 = BigInt("95")
		const uintaU4qdvR = BigInt("236")
		const stringBVnlGTl = "U7"
		const stringAB6tojG = "z3UQYXDmuAoTUrqYSTnarbCw7N42g5DFOJS1JCjBcsM9tndXrIsU2m"
		const uintDqePqwB = BigInt("140")
		const uintTmpU1n0 = BigInt("306")
		const addressNXhsQVh = accounts[2]
		const addressuAgimAf = accounts[1]
		const uintYmjR2Hl = BigInt("1226")
		const boolBb819r2 = await CryptozWAWEPLi.loadNewCardType.call(uintDqePqwB, stringAB6tojG, stringBVnlGTl, uintaU4qdvR, uintxdRuFb6, uintWL9otSI, uintahwVMXV, uintROL96On, uintHhEs8Eh, {from: accounts[4]});
//		await CryptozWAWEPLi.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressU4pvDra = await CryptozWAWEPLi.transferFrom.call(addressuAgimAf, addressNXhsQVh, uintTmpU1n0, {from: accounts[0]});
//		const uint256RoesDpM = await CryptozWAWEPLi.tokenByIndex.call(uintYmjR2Hl, {from: accounts[4]});

		assert.equal(boolBb819r2, true)
		await expect(CryptozWAWEPLi.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza8BJhu = await Cryptoz.new({from: accounts[4]});
		const uintg5XRHgd = BigInt("1958")
		const uint256W88iKCj = await Cryptoza8BJhu.totalSupply.call({from: accounts[2]});
		const stringyDCkTYO = await Cryptoza8BJhu.symbol.call({from: accounts[0]});
//		const boolvrPMmLc = await Cryptoza8BJhu.buyCard.call(uintg5XRHgd, {from: accounts[4]});

		assert.equal(stringyDCkTYO, "Cryptoz")
		assert.equal(uint256W88iKCj, BigInt("0"))
		await expect(Cryptoza8BJhu.buyCard.call(uintg5XRHgd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWAWEPLi = await Cryptoz.new({from: accounts[4]});
		const uinty5fBQa = BigInt("13")
		const uintwjYVAzc = BigInt("0")
		const uintfzJ3XhJ = BigInt("894")
		const uint0iVCDR = BigInt("194")
		const uintC2WXSg = BigInt("86")
		const uintCfh7Uz3 = BigInt("236")
		const stringBVnlGTl = "U7"
		const stringAB6tojG = "z3UQYXDmuAoTUrqYSTnarbCw7N42g5DFOJS1JCjBcsM9tndXrIsU2m"
		const uinthlBkuJX = BigInt("140")
		const addressDdUFUuv = accounts[4]
		const boolBb819r2 = await CryptozWAWEPLi.loadNewCardType.call(uinthlBkuJX, stringAB6tojG, stringBVnlGTl, uintCfh7Uz3, uintC2WXSg, uint0iVCDR, uintfzJ3XhJ, uintwjYVAzc, uinty5fBQa, {from: accounts[4]});
		const addressS6oSai = await CryptozWAWEPLi.initialize.call(addressDdUFUuv, {from: accounts[4]});

		assert.equal(boolBb819r2, true)
	});
})