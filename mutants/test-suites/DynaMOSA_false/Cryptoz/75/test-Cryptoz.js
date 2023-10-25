const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const Cryptozv3g6uBd = await Cryptoz.new({from: accounts[0]});
		const uintY1gFHt9 = BigInt("170")
		const uintFrMqlXK = BigInt("1103")
		const uintKFLnGvK = BigInt("1109")
		const uintauhNUmy = BigInt("2012")
		const uintkTYesJr = BigInt("1226")
		const uintrYnTxsj = BigInt("229")
		const uintj5e6diY = BigInt("1519")
		const uintJnNn8G4 = BigInt("1411")
		const uintkrRulGL = BigInt("1849")
		const uintxDYHprk = BigInt("1622")
		const uint256HI2TcT1 = await Cryptozv3g6uBd.totalSupply.call({from: accounts[2]});
//		const boolhP9YC2A = await Cryptozv3g6uBd.addTocardType.call(uintkTYesJr, uintauhNUmy, uintKFLnGvK, uintFrMqlXK, uintY1gFHt9, {from: accounts[5]});
//		await Cryptozv3g6uBd.buyBoosterCardAndOpen.call({from: accounts[4]});
//		const bool1gbiMK = await Cryptozv3g6uBd.addTocardType.call(uintxDYHprk, uintkrRulGL, uintJnNn8G4, uintj5e6diY, uintrYnTxsj, {from: accounts[4]});

		assert.equal(uint256HI2TcT1, BigInt("0"))
		await expect(Cryptozv3g6uBd.addTocardType.call(uintkTYesJr, uintauhNUmy, uintKFLnGvK, uintFrMqlXK, uintY1gFHt9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozeDbGXzI = await Cryptoz.new({from: accounts[1]});
		const uintroIN5Gq = BigInt("112")
		const address90RXXN = accounts[3]
		const addressG24X39K = accounts[4]
		const stringnD3CpHG = await CryptozeDbGXzI.tokenURI.call(uintroIN5Gq, {from: accounts[3]});
//		await CryptozeDbGXzI.withdraw.call({from: accounts[0]});
//		const addressE6egaFW = await CryptozeDbGXzI.initialize.call(address90RXXN, {from: accounts[1]});
//		const uint256arrayjDaH09l = await CryptozeDbGXzI.tokensOfOwner.call(addressG24X39K, {from: accounts[3]});

		assert.equal(stringnD3CpHG, "https://cryptoz.cards/data/112")
		await expect(CryptozeDbGXzI.withdraw.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmwmuZtD = await Cryptoz.new({from: accounts[1]});
		const uintjAp1eH7 = BigInt("863")
		const addressPJ3PGKo = "0x0000000000000000000000000000000000000001"
		const uintFkDqnWD = BigInt("1453")
//		const uint256usa8i28 = await CryptozmwmuZtD.sacrifice.call(uintjAp1eH7, {from: accounts[4]});
//		const addressdIwKD5u = await CryptozmwmuZtD.linkMySponsor.call(addressPJ3PGKo, {from: accounts[1]});
//		const boolprrUncl = await CryptozmwmuZtD.buyBoosterCard.call(uintFkDqnWD, {from: accounts[2]});

		await expect(CryptozmwmuZtD.sacrifice.call(uintjAp1eH7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozFF1g5ah = await Cryptoz.new({from: accounts[3]});
		const uintvMAsbrD = BigInt("1315")
		const uintMEetD96 = BigInt("1216")
		const addressgUbbzXH = accounts[4]
//		await CryptozFF1g5ah.getOwnedCard.call(uintvMAsbrD, {from: accounts[5]});
//		const uint256UiFy78V = await CryptozFF1g5ah.sacrifice.call(uintMEetD96, {from: accounts[1]});
//		const addressu7yzYvw = await CryptozFF1g5ah.initialize.call(addressgUbbzXH, {from: accounts[3]});

		await expect(CryptozFF1g5ah.getOwnedCard.call(uintvMAsbrD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozydhGE5V = await Cryptoz.new({from: accounts[1]});
		const addresszy0TNsK = accounts[2]
//		await CryptozydhGE5V.getTokensByRarity.call({from: accounts[3]});
//		await CryptozydhGE5V.f.call({from: accounts[4]});
//		await CryptozydhGE5V.getBonusBoosters.call({from: accounts[1]});
//		const addressXFovYTe = await CryptozydhGE5V.initialize.call(addresszy0TNsK, {from: accounts[3]});

		await expect(CryptozydhGE5V.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozu6OHYXQ = await Cryptoz.new({from: accounts[4]});
		const addressqdKbKP = accounts[4]
		const uintIwyvQWB = BigInt("1141")
		const addressymFn69u = "0x0000000000000000000000000000000000000001"
		const addressCwojEa4 = accounts[5]
		const uintMdIpwVk = BigInt("1287")
		const addresssrFLwA5 = await Cryptozu6OHYXQ.initialize.call(addressqdKbKP, {from: accounts[4]});
//		const addressQQrJXES = await Cryptozu6OHYXQ.transferFrom.call(addressCwojEa4, addressymFn69u, uintIwyvQWB, {from: accounts[5]});
//		const stringsXgi2Pn = await Cryptozu6OHYXQ.tokenURI.call(uintMdIpwVk, {from: accounts[1]});

		await expect(Cryptozu6OHYXQ.transferFrom.call(addressCwojEa4, addressymFn69u, uintIwyvQWB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozkSqJKlR = await Cryptoz.new({from: accounts[5]});
		const uintw8PISUA = BigInt("936")
		const addressYtOHMjP = accounts[3]
		const uintWNJgchz = BigInt("1959")
		const uinttmXHaIO = BigInt("1734")
		const uintp7CgpX = BigInt("1160")
		const uintdaNQIVp = BigInt("629")
		const uintek2Ytxf = BigInt("162")
		const uintua1szRp = BigInt("140")
		const uintvTGGDLN = BigInt("240")
		const stringyTBopJ = "Hht5A8CJ80T9bGsd4sJBJ5KHuMTBM2o5nRceFVs5TdUwF7ujpTYNwRC1JSXJVyYiQcW"
		const stringZ6IYPd7 = "kYzX1Ol7MdRx9jwDEMNguTuOTlui4Bjy5KAl3"
		const uinteQ7cz0i = BigInt("229")
//		const uint256DZ1wKwX = await CryptozkSqJKlR.tokenOfOwnerByIndex.call(addressYtOHMjP, uintw8PISUA, {from: accounts[2]});
//		const uint256dy0xlIm = await CryptozkSqJKlR.sacrifice.call(uintWNJgchz, {from: accounts[5]});
//		const boolIJ2an8a = await CryptozkSqJKlR.loadNewCardType.call(uinteQ7cz0i, stringZ6IYPd7, stringyTBopJ, uintvTGGDLN, uintua1szRp, uintek2Ytxf, uintdaNQIVp, uintp7CgpX, uinttmXHaIO, {from: accounts[4]});
//		await CryptozkSqJKlR.f.call({from: accounts[4]});

		await expect(CryptozkSqJKlR.tokenOfOwnerByIndex.call(addressYtOHMjP, uintw8PISUA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozgHepLpG = await Cryptoz.new({from: accounts[4]});
		const addressQzf2n4e = "0x0000000000000000000000000000000000000001"
		const uintXFUzWPa = BigInt("488")
		const uintRAu3XiU = BigInt("698")
		const addressMOqA92 = await CryptozgHepLpG.initialize.call(addressQzf2n4e, {from: accounts[4]});
//		const uint32rkI2Ut3 = await CryptozgHepLpG.isValidCard.call(uintXFUzWPa, {from: accounts[0]});
//		const boolSCiUiZX = await CryptozgHepLpG.buyCard.call(uintRAu3XiU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozgHepLpG.isValidCard.call(uintXFUzWPa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozv3g6uBd = await Cryptoz.new({from: accounts[0]});
		const uintWRWQx0m = BigInt("1977")
		const uintykrO2C = BigInt("229")
		const uintoQjxi3C = BigInt("1519")
		const uintexD4Cc = BigInt("1411")
		const uintQzhL75m = BigInt("1849")
		const uintiLtH4J = BigInt("1622")
		const uint256HI2TcT1 = await Cryptozv3g6uBd.totalSupply.call({from: accounts[2]});
		const stringdgOM3bZ = await Cryptozv3g6uBd.symbol.call({from: accounts[0]});
//		await Cryptozv3g6uBd.buyBoosterCardAndOpen.call({from: accounts[4]});
//		const booltmJxt3b = await Cryptozv3g6uBd.openBoosterCard.call(uintWRWQx0m, {from: accounts[1]});
//		const bool1gbiMK = await Cryptozv3g6uBd.addTocardType.call(uintiLtH4J, uintQzhL75m, uintexD4Cc, uintoQjxi3C, uintykrO2C, {from: accounts[4]});

		assert.equal(stringdgOM3bZ, "Cryptoz")
		assert.equal(uint256HI2TcT1, BigInt("0"))
		await expect(Cryptozv3g6uBd.buyBoosterCardAndOpen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozeDbGXzI = await Cryptoz.new({from: accounts[1]});
		const uintcpUgXvA = BigInt("112")
		const addressxgjlCCs = accounts[3]
		const addresst3LbwD6 = accounts[4]
		const stringnD3CpHG = await CryptozeDbGXzI.tokenURI.call(uintcpUgXvA, {from: accounts[3]});
		const addressE6egaFW = await CryptozeDbGXzI.initialize.call(addressxgjlCCs, {from: accounts[1]});
		const uint256arrayjDaH09l = await CryptozeDbGXzI.tokensOfOwner.call(addresst3LbwD6, {from: accounts[3]});

		assert.equal(stringnD3CpHG, "https://cryptoz.cards/data/112")
		assert.equal(uint256arrayjDaH09l, BigInt(""))
	});

	it('test for Cryptoz', async () => {
		const CryptozLeVDV7E = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQHpyOZ = accounts[1]
		const addressNOPMvvK = accounts[2]
		await CryptozLeVDV7E.getTokensByRarity.call({from: accounts[0]});
		const uint256arraymluJ6Ou = await CryptozLeVDV7E.tokensOfOwner.call(addressQHpyOZ, {from: accounts[0]});
		await CryptozLeVDV7E.getBonusBoosters.call({from: accounts[3]});
		const addresslAjdds1 = await CryptozLeVDV7E.initialize.call(addressNOPMvvK, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozmwmuZtD = await Cryptoz.new({from: accounts[1]});
		const addresstN8hRZh = "0x0000000000000000000000000000000000000000"
		const uintoqykIdg = BigInt("1453")
		const uintg55DyOk = BigInt("1936")
		const addressSvo58OE = accounts[3]
		const addressp08NDlF = accounts[1]
//		const addressdIwKD5u = await CryptozmwmuZtD.linkMySponsor.call(addresstN8hRZh, {from: accounts[1]});
//		const boolprrUncl = await CryptozmwmuZtD.buyBoosterCard.call(uintoqykIdg, {from: accounts[2]});
//		const addressruwyzf = await CryptozmwmuZtD.transferFrom.call(addressp08NDlF, addressSvo58OE, uintg55DyOk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozmwmuZtD.linkMySponsor.call(addresstN8hRZh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozL5Vmb2g = await Cryptoz.new({from: accounts[0]});
		const uintUZrvUiN = BigInt("696")
//		await CryptozL5Vmb2g.getBonusBoosters.call({from: accounts[3]});
//		await CryptozL5Vmb2g.withdraw.call({from: accounts[4]});
//		const stringpiYymv5 = await CryptozL5Vmb2g.name.call({from: accounts[1]});
//		const uint256TzbKqYE = await CryptozL5Vmb2g.sacrifice.call(uintUZrvUiN, {from: accounts[0]});
//		await CryptozL5Vmb2g.getTokensByRarity.call({from: accounts[5]});

		await expect(CryptozL5Vmb2g.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozdtvVXw = await Cryptoz.new({from: accounts[2]});
		const uintoSwc90 = BigInt("113")
		const uintunxzJmH = BigInt("172")
		const uintMiOeZKq = BigInt("30")
		const uintQk7SCxH = BigInt("1484")
		const uintNPBd2qf = BigInt("549")
		const uintgXftkfr = BigInt("1063")
		const stringC1XYnOI = await CryptozdtvVXw.name.call({from: accounts[1]});
//		const booli4oXKey = await CryptozdtvVXw.addTocardType.call(uintNPBd2qf, uintQk7SCxH, uintMiOeZKq, uintunxzJmH, uintoSwc90, {from: accounts[4]});
//		const boolgcAkftb = await CryptozdtvVXw.openBoosterCard.call(uintgXftkfr, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptozdtvVXw.withdraw.call({from: accounts[2]});

		assert.equal(stringC1XYnOI, "Cryptoz Cards")
		await expect(CryptozdtvVXw.addTocardType.call(uintNPBd2qf, uintQk7SCxH, uintMiOeZKq, uintunxzJmH, uintoSwc90, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmwmuZtD = await Cryptoz.new({from: accounts[1]});
		const uintIjZC0Ux = BigInt("994")
		const uintnDhOuyf = BigInt("870")
		const addressZanQUkr = "0x0000000000000000000000000000000000000000"
		const uintaSAYvD = BigInt("1453")
		const uint256eUduZsF = await CryptozmwmuZtD.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolks8ePpQ = await CryptozmwmuZtD.openBoosterCard.call(uintIjZC0Ux, {from: accounts[4]});
//		const uint256usa8i28 = await CryptozmwmuZtD.sacrifice.call(uintnDhOuyf, {from: accounts[4]});
//		const addressdIwKD5u = await CryptozmwmuZtD.linkMySponsor.call(addressZanQUkr, {from: accounts[1]});
//		const boolprrUncl = await CryptozmwmuZtD.buyBoosterCard.call(uintaSAYvD, {from: accounts[2]});

		assert.equal(uint256eUduZsF, BigInt("0"))
		await expect(CryptozmwmuZtD.openBoosterCard.call(uintIjZC0Ux, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmwmuZtD = await Cryptoz.new({from: accounts[1]});
		const uintXBlE8C = BigInt("1430")
//		await CryptozmwmuZtD.getBonusBoosters.call({from: accounts[0]});
//		const boolprrUncl = await CryptozmwmuZtD.buyBoosterCard.call(uintXBlE8C, {from: accounts[2]});

		await expect(CryptozmwmuZtD.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmwmuZtD = await Cryptoz.new({from: accounts[1]});
		const uintJdjLSys = BigInt("167")
		const uintX2mrhpA = BigInt("863")
		const addressZkkwiB5 = "0x0000000000000000000000000000000000000000"
		const uintNClWaqp = BigInt("1453")
//		await CryptozmwmuZtD.getBonusBoosters.call({from: accounts[0]});
//		const uint256JxLiG2I = await CryptozmwmuZtD.tokenByIndex.call(uintJdjLSys, {from: accounts[5]});
//		const uint256usa8i28 = await CryptozmwmuZtD.sacrifice.call(uintX2mrhpA, {from: accounts[4]});
//		const addressdIwKD5u = await CryptozmwmuZtD.linkMySponsor.call(addressZkkwiB5, {from: accounts[1]});
//		await CryptozmwmuZtD.buyBoosterCardAndOpen.call({from: accounts[3]});
//		const boolprrUncl = await CryptozmwmuZtD.buyBoosterCard.call(uintNClWaqp, {from: accounts[2]});

		await expect(CryptozmwmuZtD.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmwmuZtD = await Cryptoz.new({from: accounts[1]});
		const addressuowx7FD = "0x0000000000000000000000000000000000000001"
		const addressJ9awJhP = accounts[0]
		const uintpEQeXbf = BigInt("1827")
		const uintRo3uF6b = BigInt("1457")
		const uintp9YmuNO = BigInt("107")
		const uintVAcsYKt = BigInt("1514")
		const uinte3rO3XY = BigInt("594")
		const uintOsu1oqm = BigInt("1406")
		const uintiiVL2yf = BigInt("1049")
//		await CryptozmwmuZtD.getBonusBoosters.call({from: accounts[0]});
//		const addressdIwKD5u = await CryptozmwmuZtD.linkMySponsor.call(addressuowx7FD, {from: accounts[1]});
//		const uintZ4NCPxu = await CryptozmwmuZtD.getTimeToDailyBonus.call(addressJ9awJhP, {from: accounts[5]});
//		const uint32xfCypA = await CryptozmwmuZtD.isValidCard.call(uintpEQeXbf, {from: accounts[3]});
//		const boolprrUncl = await CryptozmwmuZtD.buyBoosterCard.call(uintRo3uF6b, {from: accounts[2]});
//		await CryptozmwmuZtD.getTokensByRarity.call({from: accounts[0]});
//		const boolQ5TMx8z = await CryptozmwmuZtD.addTocardType.call(uintiiVL2yf, uintOsu1oqm, uinte3rO3XY, uintVAcsYKt, uintp9YmuNO, {from: accounts[1]});

		await expect(CryptozmwmuZtD.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmwmuZtD = await Cryptoz.new({from: accounts[1]});
		const uintOdgkwBz = BigInt("196")
		const uinteiw0VtN = BigInt("55")
		const uintU38zqIq = BigInt("1923")
		const uintnecqZpg = BigInt("815")
		const uintgnl9gv0 = BigInt("1034")
		const uintnePonGz = BigInt("863")
		const addressvqFRnHf = "0x0000000000000000000000000000000000000001"
		const uintiOYG4Hg = BigInt("1453")
//		await CryptozmwmuZtD.getBonusBoosters.call({from: accounts[0]});
//		const boolbc4YK0w = await CryptozmwmuZtD.addTocardType.call(uintgnl9gv0, uintnecqZpg, uintU38zqIq, uinteiw0VtN, uintOdgkwBz, {from: accounts[1]});
//		const uint256mP8Yqzg = await CryptozmwmuZtD.totalSupply.call({from: accounts[0]});
//		const uint256usa8i28 = await CryptozmwmuZtD.sacrifice.call(uintnePonGz, {from: accounts[4]});
//		const addressdIwKD5u = await CryptozmwmuZtD.linkMySponsor.call(addressvqFRnHf, {from: accounts[1]});
//		await CryptozmwmuZtD.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolprrUncl = await CryptozmwmuZtD.buyBoosterCard.call(uintiOYG4Hg, {from: accounts[2]});

		await expect(CryptozmwmuZtD.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})