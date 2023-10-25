const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozqIWymDe = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfYAZt4 = accounts[4]
		const address0yHbPi = accounts[0]
		const uintGIA1pjp = BigInt("1444")
		const uinte9bXYLg = BigInt("1674")
		const uintbsk9J94 = BigInt("1055")
		const uintoIBzL8u = BigInt("147")
		const uintUXsviCD = BigInt("253")
		const uintE3E2qbN = BigInt("169")
		const stringahQKNUq = "lgQ4hTjHmC1lGbo3Bznijv1feXkkQe9vYGKkc1O7uH2jPCpzbHAq9W2kldNosxxZgpMTzbwSMXQ2lVWN"
		const stringTk1niOl = "DwtckboQo0TRWYs9GwRdUXmY"
		const uintwdWXttd = BigInt("60")
		const uintzWoXxfO = BigInt("1731")
		const uintbJfpOrg = BigInt("555")
		const uintfW18OkF = BigInt("81")
		const uintc06qBpW = BigInt("314")
		const uintGzny6Eh = BigInt("170")
		const uintSeOh0aV = BigInt("102")
		const uintifYThsw = BigInt("216")
		const stringlgAkIg = "C3xgiECrs7ky44nqQ"
		const stringna5xAcE = "jpzlc1XQP9iwXGuZqmfjqCN53FbsIkFUXGOwDBDpLLMmGLUsjgR5YNdfbBfmriMnLdXg5mAr"
		const uintsnzafn7 = BigInt("72")
		const uintU8ckBVz = await CryptozqIWymDe.getTimeToDailyBonus.call(addressfYAZt4, {from: accounts[4]});
		const uint256arrayIBJMv5d = await CryptozqIWymDe.tokensOfOwner.call(address0yHbPi, {from: accounts[4]});
		const bool5ReO9p = await CryptozqIWymDe.loadNewCardType.call(uintwdWXttd, stringTk1niOl, stringahQKNUq, uintE3E2qbN, uintUXsviCD, uintoIBzL8u, uintbsk9J94, uinte9bXYLg, uintGIA1pjp, {from: accounts[3]});
		const stringSFXS3jq = await CryptozqIWymDe.tokenURI.call(uintzWoXxfO, {from: accounts[4]});
		const boolygmgmAh = await CryptozqIWymDe.loadNewCardType.call(uintsnzafn7, stringna5xAcE, stringlgAkIg, uintifYThsw, uintSeOh0aV, uintGzny6Eh, uintc06qBpW, uintfW18OkF, uintbJfpOrg, {from: accounts[3]});
		await CryptozqIWymDe.getTokensByRarity.call({from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const CryptozzLgXGLy = await Cryptoz.new({from: accounts[4]});
		const address7JIGxF = accounts[2]
		const uintGm3hkIg = BigInt("1763")
		const uint7vH7Ys = BigInt("1575")
		const uintoB4xA7f = await CryptozzLgXGLy.getTimeToDailyBonus.call(address7JIGxF, {from: accounts[1]});
//		const boolJZ21zX = await CryptozzLgXGLy.openBoosterCard.call(uintGm3hkIg, {from: accounts[0]});
//		const uint2565Om4sg = await CryptozzLgXGLy.sacrifice.call(uint7vH7Ys, {from: accounts[3]});
//		await CryptozzLgXGLy.getTokensByRarity.call({from: accounts[3]});

		assert.equal(uintoB4xA7f, BigInt("1630205643"))
		await expect(CryptozzLgXGLy.openBoosterCard.call(uintGm3hkIg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTG48Hvz = await Cryptoz.new({from: accounts[5]});
		const uintvXQILlH = BigInt("448")
		const uintmUzQw4M = BigInt("1960")
		const uintl0BQJn = BigInt("286")
		const addressuHMeQET = accounts[4]
//		const uint32WPfyU7A = await CryptozTG48Hvz.isValidCard.call(uintvXQILlH, {from: accounts[3]});
//		const boolnvRqyle = await CryptozTG48Hvz.openBoosterCard.call(uintmUzQw4M, {from: accounts[3]});
//		const uint256ApHYXkM = await CryptozTG48Hvz.tokenOfOwnerByIndex.call(addressuHMeQET, uintl0BQJn, {from: accounts[2]});
//		const stringCIRa4nk = await CryptozTG48Hvz.symbol.call({from: accounts[3]});
//		const stringLWGKSs = await CryptozTG48Hvz.name.call({from: accounts[1]});

		await expect(CryptozTG48Hvz.isValidCard.call(uintvXQILlH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoza1iMQ7E = await Cryptoz.new({from: accounts[0]});
		const uintsNnLvd = BigInt("143")
		const uintPhPe57J = BigInt("556")
		const uintcZLcydk = BigInt("1872")
		const uintCXxtXD = BigInt("705")
		const uintvq33AW = BigInt("992")
		const addressCS8zeuv = accounts[5]
		const uintLBaS4YI = BigInt("1301")
		const addressjcaEMOx = accounts[1]
		const addressyBxMVZ = accounts[0]
		const uintEmwbyka = BigInt("1043")
		const uintpn1AtDR = BigInt("263")
		const uintxNuytWb = BigInt("735")
//		const booluP9cIGh = await Cryptoza1iMQ7E.addTocardType.call(uintvq33AW, uintCXxtXD, uintcZLcydk, uintPhPe57J, uintsNnLvd, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256arrayxHRwHom = await Cryptoza1iMQ7E.tokensOfOwner.call(addressCS8zeuv, {from: accounts[2]});
//		const addressIrTOdXN = await Cryptoza1iMQ7E.transferFrom.call(addressyBxMVZ, addressjcaEMOx, uintLBaS4YI, {from: accounts[1]});
//		const uint32F85dtw = await Cryptoza1iMQ7E.getFreeCard.call(uintEmwbyka, {from: accounts[4]});
//		const boolmAbbKWO = await Cryptoza1iMQ7E.openBoosterCard.call(uintpn1AtDR, {from: accounts[3]});
//		const uint256lDby7Y = await Cryptoza1iMQ7E.tokenByIndex.call(uintxNuytWb, {from: accounts[2]});

		await expect(Cryptoza1iMQ7E.addTocardType.call(uintvq33AW, uintCXxtXD, uintcZLcydk, uintPhPe57J, uintsNnLvd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoziZR0UJT = await Cryptoz.new({from: accounts[4]});
		const uintRpfTync = BigInt("150")
		const addressjN11jER = accounts[2]
		const uintcMsqoLm = BigInt("978")
		const addressbrZjP7E = accounts[1]
		const uintz7BoAY0 = BigInt("980")
		const uintcNiEm8j = BigInt("1713")
		const address41Uu2P = accounts[1]
		const addressDw6mcx = accounts[0]
//		const uint256lGQO7O9 = await CryptoziZR0UJT.tokenOfOwnerByIndex.call(addressjN11jER, uintRpfTync, {from: accounts[1]});
//		const uint256gZMlZEE = await CryptoziZR0UJT.tokenOfOwnerByIndex.call(addressbrZjP7E, uintcMsqoLm, {from: accounts[5]});
//		const uint32cjpkPz = await CryptoziZR0UJT.isValidCard.call(uintz7BoAY0, {from: accounts[4]});
//		const addressvyHnxtD = await CryptoziZR0UJT.transferFrom.call(addressDw6mcx, address41Uu2P, uintcNiEm8j, {from: accounts[4]});

		await expect(CryptoziZR0UJT.tokenOfOwnerByIndex.call(addressjN11jER, uintRpfTync, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozvvHpz80 = await Cryptoz.new({from: accounts[4]});
		const uintv5bNvMT = BigInt("1936")
		const uintezRHTg5 = BigInt("803")
		const uintKWsvuUV = BigInt("216")
		const uinttRXt3s = BigInt("1832")
		const uintuT1w9uO = BigInt("778")
		const stringpMuurD = await CryptozvvHpz80.symbol.call({from: accounts[0]});
//		const boolS6ekxA8 = await CryptozvvHpz80.buyBoosterCard.call(uintv5bNvMT, {from: accounts[3]});
//		const uint256eb6CiYp = await CryptozvvHpz80.sacrifice.call(uintezRHTg5, {from: accounts[4]});
//		const uint32fT5C5NZ = await CryptozvvHpz80.isValidCard.call(uintKWsvuUV, {from: accounts[2]});
//		const uint32SnAeXrH = await CryptozvvHpz80.getFreeCard.call(uinttRXt3s, {from: accounts[3]});
//		const uint256EGdCaD = await CryptozvvHpz80.tokenByIndex.call(uintuT1w9uO, {from: accounts[2]});

		assert.equal(stringpMuurD, "Cryptoz")
		await expect(CryptozvvHpz80.buyBoosterCard.call(uintv5bNvMT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhDV18mJ = await Cryptoz.new({from: accounts[2]});
		const uintiCZPhrE = BigInt("1534")
		const uintHy4tKkp = BigInt("777")
		const addressfqQxjRf = accounts[4]
		const addressSrQZqdG = "0x0000000000000000000000000000000000000001"
		const uintRPPTof4 = BigInt("1100")
		const addressnV2IPDR = accounts[0]
//		const uint256UskPVLu = await CryptozhDV18mJ.tokenByIndex.call(uintiCZPhrE, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswsFwm9 = await CryptozhDV18mJ.transferFrom.call(addressSrQZqdG, addressfqQxjRf, uintHy4tKkp, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256XgzDich = await CryptozhDV18mJ.tokenOfOwnerByIndex.call(addressnV2IPDR, uintRPPTof4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozhDV18mJ.tokenByIndex.call(uintiCZPhrE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozSPdUAaZ = await Cryptoz.new({from: accounts[4]});
		const uintf15HIaY = BigInt("313")
//		const uint256SGm2xLu = await CryptozSPdUAaZ.sacrifice.call(uintf15HIaY, {from: accounts[5]});
//		await CryptozSPdUAaZ.getBonusBoosters.call({from: accounts[0]});

		await expect(CryptozSPdUAaZ.sacrifice.call(uintf15HIaY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzLgXGLy = await Cryptoz.new({from: accounts[4]});
		const uints5GKI4q = BigInt("1115")
		const addresslTcInEz = accounts[0]
		const addresssJfOGaJ = accounts[2]
		const uintkFRYCc1 = BigInt("1768")
		const uintZ7jb6yQ = BigInt("1575")
//		await CryptozzLgXGLy.getOwnedCard.call(uints5GKI4q, {from: accounts[4]});
//		const uint256arrayZjENi3w = await CryptozzLgXGLy.tokensOfOwner.call(addresslTcInEz, {from: accounts[3]});
//		const uintoB4xA7f = await CryptozzLgXGLy.getTimeToDailyBonus.call(addresssJfOGaJ, {from: accounts[1]});
//		const boolJZ21zX = await CryptozzLgXGLy.openBoosterCard.call(uintkFRYCc1, {from: accounts[0]});
//		const uint2565Om4sg = await CryptozzLgXGLy.sacrifice.call(uintZ7jb6yQ, {from: accounts[3]});

		await expect(CryptozzLgXGLy.getOwnedCard.call(uints5GKI4q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozG7iCLBM = await Cryptoz.new({from: accounts[3]});
//		await CryptozG7iCLBM.buyBoosterCardAndOpen.call({from: accounts[0]});
//		await CryptozG7iCLBM.f.call({from: accounts[3]});

		await expect(CryptozG7iCLBM.buyBoosterCardAndOpen.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhDV18mJ = await Cryptoz.new({from: accounts[2]});
		const uintUdlr2yn = BigInt("777")
		const addressgaJedX = accounts[5]
		const addresscEcG7Mw = "0x0000000000000000000000000000000000000001"
		const addressNvIjG0b = accounts[0]
		const uintiW7UW2u = BigInt("675")
		const uintwEHmDCg = BigInt("1100")
		const addressTT3tA2y = accounts[0]
//		const addresswsFwm9 = await CryptozhDV18mJ.transferFrom.call(addresscEcG7Mw, addressgaJedX, uintUdlr2yn, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256arrayARqHNh = await CryptozhDV18mJ.tokensOfOwner.call(addressNvIjG0b, {from: accounts[0]});
//		const boolLdzlRC = await CryptozhDV18mJ.openBoosterCard.call(uintiW7UW2u, {from: accounts[2]});
//		const uint256XgzDich = await CryptozhDV18mJ.tokenOfOwnerByIndex.call(addressTT3tA2y, uintwEHmDCg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozhDV18mJ.transferFrom.call(addresscEcG7Mw, addressgaJedX, uintUdlr2yn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozRI1XS5C = await Cryptoz.new({from: accounts[3]});
		const addressRM7CcwF = accounts[1]
		const addressmqtGRiW = accounts[1]
		const uintGFASc6v = BigInt("1250")
		const uintTh1qvI0 = await CryptozRI1XS5C.getTimeToDailyBonus.call(addressRM7CcwF, {from: accounts[5]});
//		await CryptozRI1XS5C.getBonusBoosters.call({from: accounts[3]});
//		const uint256qMbBENd = await CryptozRI1XS5C.totalSupply.call({from: accounts[1]});
//		const uint256arrayF3T3u9Q = await CryptozRI1XS5C.tokensOfOwner.call(addressmqtGRiW, {from: accounts[1]});
//		const uint32GbLVbu5 = await CryptozRI1XS5C.isValidCard.call(uintGFASc6v, {from: accounts[0]});

		assert.equal(uintTh1qvI0, BigInt("1630205642"))
		await expect(CryptozRI1XS5C.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhDV18mJ = await Cryptoz.new({from: accounts[2]});
		const addressjKSFEwB = accounts[4]
		const uintVHY6NaJ = BigInt("1534")
		const uint256arrayLzeHCkT = await CryptozhDV18mJ.tokensOfOwner.call(addressjKSFEwB, {from: accounts[1]});
//		await CryptozhDV18mJ.f.call({from: accounts[5]});
//		const uint256UskPVLu = await CryptozhDV18mJ.tokenByIndex.call(uintVHY6NaJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256arrayLzeHCkT, BigInt(""))
		await expect(CryptozhDV18mJ.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozt50TpCG = await Cryptoz.new({from: accounts[1]});
		const addresseiLsUo = accounts[4]
		const addressRBbfy9F = accounts[1]
		const uintSSR94KL = BigInt("135")
		const uintIlevN2c = BigInt("39")
		const uintO7WAAXo = BigInt("1833")
		const uintaW9kgS = BigInt("1513")
		const uintgMVb53 = BigInt("1708")
		const uint256arrayJJDii0U = await Cryptozt50TpCG.tokensOfOwner.call(addresseiLsUo, {from: accounts[4]});
		const stringZZ2bjwV = await Cryptozt50TpCG.symbol.call({from: accounts[4]});
//		await Cryptozt50TpCG.getTokensByRarity.call({from: accounts[2]});
//		const uint256arraycTfXyxp = await Cryptozt50TpCG.tokensOfOwner.call(addressRBbfy9F, {from: accounts[3]});
//		const boolNGvwpAV = await Cryptozt50TpCG.addTocardType.call(uintgMVb53, uintaW9kgS, uintO7WAAXo, uintIlevN2c, uintSSR94KL, {from: accounts[1]});

		assert.equal(stringZZ2bjwV, "Cryptoz")
		assert.equal(uint256arrayJJDii0U, BigInt(""))
		await expect(Cryptozt50TpCG.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhDV18mJ = await Cryptoz.new({from: accounts[2]});
		const addressj6ylXcu = accounts[0]
		const uintEI1lq5d = BigInt("1541")
		const uintazor54S = BigInt("446")
		const uint256Shhxir = await CryptozhDV18mJ.totalSupply.call({from: accounts[5]});
//		const addressl30hW7U = await CryptozhDV18mJ.linkMySponsor.call(addressj6ylXcu, {from: accounts[1]});
//		const uint256UskPVLu = await CryptozhDV18mJ.tokenByIndex.call(uintEI1lq5d, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptozhDV18mJ.getOwnedCard.call(uintazor54S, {from: accounts[1]});

		assert.equal(uint256Shhxir, BigInt("0"))
		await expect(CryptozhDV18mJ.linkMySponsor.call(addressj6ylXcu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpGcioQY = await Cryptoz.new({from: accounts[4]});
		const uintSYOH4tM = BigInt("1396")
		const uintOXOiN9 = BigInt("207")
		const uint2f1w4w = BigInt("1898")
		const uintx3ckqOw = BigInt("1314")
		const uintNGaoFuk = BigInt("345")
		const uintoybCuZL = BigInt("1984")
		const stringiRkklka = await CryptozpGcioQY.tokenURI.call(uintSYOH4tM, {from: accounts[4]});
//		const booleclRHyc = await CryptozpGcioQY.addTocardType.call(uintoybCuZL, uintNGaoFuk, uintx3ckqOw, uint2f1w4w, uintOXOiN9, {from: accounts[0]});

		assert.equal(stringiRkklka, "https://cryptoz.cards/data/1396")
		await expect(CryptozpGcioQY.addTocardType.call(uintoybCuZL, uintNGaoFuk, uintx3ckqOw, uint2f1w4w, uintOXOiN9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozarq9SB5 = await Cryptoz.new({from: accounts[1]});
		const addressEIURgTR = accounts[4]
		const uintem1Qwu = BigInt("773")
		const addressZyVu4vJ = accounts[4]
		const addressA53f8qP = accounts[4]
		const uintFe9pkNR = await Cryptozarq9SB5.getTimeToDailyBonus.call(addressEIURgTR, {from: accounts[1]});
		const stringCKnQH1 = await Cryptozarq9SB5.name.call({from: accounts[3]});
//		const addressCTb7f2J = await Cryptozarq9SB5.transferFrom.call(addressA53f8qP, addressZyVu4vJ, uintem1Qwu, {from: accounts[1]});

		assert.equal(stringCKnQH1, "Cryptoz Cards")
		assert.equal(uintFe9pkNR, BigInt("1630205639"))
		await expect(Cryptozarq9SB5.transferFrom.call(addressA53f8qP, addressZyVu4vJ, uintem1Qwu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozzLgXGLy = await Cryptoz.new({from: accounts[4]});
		const uintJJrlbaI = BigInt("169")
		const addressOJEyzfG = "0x0000000000000000000000000000000000000000"
		const uintHwr1IK0 = BigInt("1515")
//		const uint256RiOAeyC = await CryptozzLgXGLy.tokenOfOwnerByIndex.call(addressOJEyzfG, uintJJrlbaI, {from: accounts[4]});
//		const stringRs9VHOo = await CryptozzLgXGLy.tokenURI.call(uintHwr1IK0, {from: accounts[0]});
//		await CryptozzLgXGLy.buyBoosterCardAndOpen.call({from: accounts[1]});
//		await CryptozzLgXGLy.getTokensByRarity.call({from: accounts[1]});

		await expect(CryptozzLgXGLy.tokenOfOwnerByIndex.call(addressOJEyzfG, uintJJrlbaI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhDV18mJ = await Cryptoz.new({from: accounts[2]});
		const addressxkhdqgU = accounts[2]
		const uintlYtQVfm = BigInt("1539")
		const addressgqQzEAP = await CryptozhDV18mJ.initialize.call(addressxkhdqgU, {from: accounts[2]});
		const uint256tRQwkpy = await CryptozhDV18mJ.totalSupply.call({from: accounts[4]});
//		const uint256UskPVLu = await CryptozhDV18mJ.tokenByIndex.call(uintlYtQVfm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256tRQwkpy, BigInt("0"))
		await expect(CryptozhDV18mJ.tokenByIndex.call(uintlYtQVfm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})