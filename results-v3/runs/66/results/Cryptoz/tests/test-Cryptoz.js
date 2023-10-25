const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const Cryptozo5epfDw = await Cryptoz.new({from: accounts[4]});
		const uintcJbr0yo = BigInt("1990")
		const uint6dhCto = BigInt("323")
		const uintAoFI3Vh = BigInt("1602")
		const uintpVK9pqh = BigInt("438")
		const uintdysu9yu = BigInt("193")
		const uinta1db5L1 = BigInt("33")
		const uint70KNDg = BigInt("200")
		const uintyeyLfE = BigInt("38")
		const stringc4RXDid = "ChvyzQfCupB31RDBHKQHFcjR73"
		const string5ZGREW = "zIxckfiHPzQ7h9i"
		const uintYVZniap = BigInt("143")
		const stringoaso4bS = await Cryptozo5epfDw.symbol.call({from: accounts[4]});
		await Cryptozo5epfDw.getOwnedCard.call(uintcJbr0yo, {from: "0x0000000000000000000000000000000000000001"});
		const uint32KZkd7u = await Cryptozo5epfDw.getFreeCard.call(uint6dhCto, {from: accounts[5]});
		const booladlPTcC = await Cryptozo5epfDw.loadNewCardType.call(uintYVZniap, string5ZGREW, stringc4RXDid, uintyeyLfE, uint70KNDg, uinta1db5L1, uintdysu9yu, uintpVK9pqh, uintAoFI3Vh, {from: accounts[1]});

		assert.equal(stringoaso4bS, "Cryptoz")
		await expect(Cryptozo5epfDw.getOwnedCard.call(uintcJbr0yo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozOzuMtyI = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuOVkFY6 = BigInt("222")
		const addressH9MZfaf = accounts[0]
		const uintPwFeNni = BigInt("509")
		const uintUZfdRF4 = BigInt("416")
		const uint256j845edp = await CryptozOzuMtyI.sacrifice.call(uintuOVkFY6, {from: accounts[1]});
		const uintMbxDrMn = await CryptozOzuMtyI.getTimeToDailyBonus.call(addressH9MZfaf, {from: accounts[3]});
		const uint256W3sF87X = await CryptozOzuMtyI.sacrifice.call(uintPwFeNni, {from: accounts[4]});
		const uint32CRF69I1 = await CryptozOzuMtyI.getFreeCard.call(uintUZfdRF4, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozAx7fqjU = await Cryptoz.new({from: accounts[2]});
		const uintXZEO1Tm = BigInt("2019")
		const address9RjjG1 = accounts[3]
		const uintttnKSA3 = BigInt("1676")
		const uintZVrhhJs = BigInt("539")
		const stringPAT5ct = await CryptozAx7fqjU.symbol.call({from: accounts[1]});
		const uint256GjgviQw = await CryptozAx7fqjU.tokenByIndex.call(uintXZEO1Tm, {from: accounts[0]});
		const uintU2gT3fh = await CryptozAx7fqjU.getTimeToDailyBonus.call(address9RjjG1, {from: accounts[1]});
		const uint32aNSIhI3 = await CryptozAx7fqjU.isValidCard.call(uintttnKSA3, {from: accounts[4]});
		const uint32jP4nLcE = await CryptozAx7fqjU.isValidCard.call(uintZVrhhJs, {from: accounts[3]});

		assert.equal(stringPAT5ct, "Cryptoz")
		await expect(CryptozAx7fqjU.tokenByIndex.call(uintXZEO1Tm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozk5mK7K8 = await Cryptoz.new({from: accounts[4]});
		const addresssGse34t = accounts[2]
		const uinti6tXGCR = BigInt("1181")
		const addressQ105B9U = accounts[4]
		const addressjjhTH5h = accounts[0]
		const uintRdRfPOp = BigInt("770")
		const addressEbA92O0 = await Cryptozk5mK7K8.initialize.call(addresssGse34t, {from: accounts[1]});
		const addresspY3xaSl = await Cryptozk5mK7K8.transferFrom.call(addressjjhTH5h, addressQ105B9U, uinti6tXGCR, {from: accounts[4]});
		const stringnYBUUZU = await Cryptozk5mK7K8.tokenURI.call(uintRdRfPOp, {from: accounts[1]});
		await Cryptozk5mK7K8.f.call({from: accounts[4]});

		await expect(Cryptozk5mK7K8.initialize.call(addresssGse34t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozXo9hKV = await Cryptoz.new({from: accounts[2]});
		const addressxamumRf = accounts[1]
		const addressjKSN51G = accounts[1]
		const addressdlIiHFJ = await CryptozXo9hKV.linkMySponsor.call(addressxamumRf, {from: accounts[2]});
		const uintmh5BIJ = await CryptozXo9hKV.getTimeToDailyBonus.call(addressjKSN51G, {from: accounts[4]});

		await expect(CryptozXo9hKV.linkMySponsor.call(addressxamumRf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozBBnyZUE = await Cryptoz.new({from: accounts[0]});
		const addressh1gJsi = accounts[2]
		const uintg8ByZz5 = BigInt("1099")
		const uintS6CnCL6 = BigInt("254")
		const uintroc3hY = BigInt("1302")
		const uintAgIgAEg = BigInt("961")
		const uintT7LmN6Z = BigInt("842")
		const uintPzuY165 = BigInt("814")
		const uintoxBtpTX = BigInt("280")
		const uint256arraylAaJxvi = await CryptozBBnyZUE.tokensOfOwner.call(addressh1gJsi, {from: accounts[4]});
		await CryptozBBnyZUE.f.call({from: accounts[0]});
		const boolhOdAp9B = await CryptozBBnyZUE.buyBoosterCard.call(uintg8ByZz5, {from: accounts[3]});
		const boolUALlnNk = await CryptozBBnyZUE.addTocardType.call(uintPzuY165, uintT7LmN6Z, uintAgIgAEg, uintroc3hY, uintS6CnCL6, {from: accounts[3]});
		const uint256EXOJClM = await CryptozBBnyZUE.tokenByIndex.call(uintoxBtpTX, {from: accounts[3]});

		assert.equal(uint256arraylAaJxvi, BigInt(""))
		await expect(CryptozBBnyZUE.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozOJ63rUu = await Cryptoz.new({from: accounts[4]});
		const uintywT7ix = BigInt("929")
		const addressYwqsrgB = accounts[3]
		const uintpFRsLFL = BigInt("950")
		const uint256wn5WOfy = await CryptozOJ63rUu.tokenOfOwnerByIndex.call(addressYwqsrgB, uintywT7ix, {from: accounts[5]});
		const uint256qTIEnPg = await CryptozOJ63rUu.tokenByIndex.call(uintpFRsLFL, {from: accounts[4]});

		await expect(CryptozOJ63rUu.tokenOfOwnerByIndex.call(addressYwqsrgB, uintywT7ix, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQgVxdu = await Cryptoz.new({from: accounts[5]});
		const uintlVC43AS = BigInt("1560")
		const uintPPupwqK = BigInt("635")
		const addresss7W8SXk = accounts[4]
		const addresslTbneZA = accounts[2]
		const uintOq1xJ2A = BigInt("766")
		const addressjQUUBn0 = accounts[4]
		const uintV0HuT91 = BigInt("165")
		const uintAFm0Bew = BigInt("617")
		const uintt6TBtm = BigInt("999")
		const uintAF40agO = BigInt("663")
		const uintOIEJPC7 = BigInt("820")
		const uint32ktREuKg = await CryptozQgVxdu.isValidCard.call(uintlVC43AS, {from: "0x0000000000000000000000000000000000000001"});
		const addresssXV2eXr = await CryptozQgVxdu.transferFrom.call(addresslTbneZA, addresss7W8SXk, uintPPupwqK, {from: accounts[4]});
		const uint256Pkys6SH = await CryptozQgVxdu.tokenOfOwnerByIndex.call(addressjQUUBn0, uintOq1xJ2A, {from: accounts[5]});
		const booleutnJdM = await CryptozQgVxdu.addTocardType.call(uintOIEJPC7, uintAF40agO, uintt6TBtm, uintAFm0Bew, uintV0HuT91, {from: accounts[0]});
		await CryptozQgVxdu.getTokensByRarity.call({from: accounts[5]});

		await expect(CryptozQgVxdu.isValidCard.call(uintlVC43AS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUhxBBEC = await Cryptoz.new({from: accounts[2]});
		const uintrOBTbvL = BigInt("917")
		await CryptozUhxBBEC.getTokensByRarity.call({from: accounts[2]});
		const stringOncnL6 = await CryptozUhxBBEC.tokenURI.call(uintrOBTbvL, {from: accounts[1]});
		await CryptozUhxBBEC.getBonusBoosters.call({from: accounts[5]});

		await expect(CryptozUhxBBEC.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUhxBBEC = await Cryptoz.new({from: accounts[2]});
		const uintXLwYVoT = BigInt("1830")
		const uintZiEjDAy = BigInt("917")
		await CryptozUhxBBEC.getTokensByRarity.call({from: accounts[2]});
		const boolBfLiKAQ = await CryptozUhxBBEC.buyBoosterCard.call(uintXLwYVoT, {from: accounts[3]});
		await CryptozUhxBBEC.buyBoosterCardAndOpen.call({from: accounts[2]});
		const stringOncnL6 = await CryptozUhxBBEC.tokenURI.call(uintZiEjDAy, {from: accounts[1]});
		await CryptozUhxBBEC.getBonusBoosters.call({from: accounts[5]});

		await expect(CryptozUhxBBEC.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUhxBBEC = await Cryptoz.new({from: accounts[2]});
		const uintanIBAcM = BigInt("1775")
		const addressGBrzFeC = accounts[3]
		await CryptozUhxBBEC.getTokensByRarity.call({from: accounts[2]});
		await CryptozUhxBBEC.getBonusBoosters.call({from: accounts[5]});
		const uint256wN1Oaex = await CryptozUhxBBEC.sacrifice.call(uintanIBAcM, {from: accounts[0]});
		const uintyKAyERk = await CryptozUhxBBEC.getTimeToDailyBonus.call(addressGBrzFeC, {from: accounts[1]});

		await expect(CryptozUhxBBEC.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUhxBBEC = await Cryptoz.new({from: accounts[2]});
		const uintEtJ1Bnk = BigInt("917")
		const stringE7dUWxG = await CryptozUhxBBEC.name.call({from: accounts[1]});
		const stringOncnL6 = await CryptozUhxBBEC.tokenURI.call(uintEtJ1Bnk, {from: accounts[1]});

		assert.equal(stringE7dUWxG, "Cryptoz Cards")
		assert.equal(stringOncnL6, "https://cryptoz.cards/data/917")
	});

	it('test for Cryptoz', async () => {
		const CryptozB3sD31 = await Cryptoz.new({from: accounts[1]});
		const uintNd8s0Fl = BigInt("1816")
		const uintm6S1Mt7 = BigInt("206")
		const uintGMerZhb = BigInt("233")
		const uintYiUB4fO = BigInt("119")
		const uintE8qAgi1 = BigInt("14")
		const uint93O2WW = BigInt("172")
		const stringWr3aQfc = "HltVC3XTMetDZPDjulOWCEbUDTx5XVs7qAcJSBeQitKPdf8WL5OMUAA6yqfqxHDG4wZoFH1b7CnUKGpmhi6Xr84Zckut"
		const stringUmuQoKG = "jljddrbqqDanI4VmczVkmMYmUXwhxvpeCtD"
		const uintQ1uicla = BigInt("158")
		const uintnt91DcL = BigInt("1495")
		const uintZuc3eif = BigInt("89")
		const uintEAQtlDh = BigInt("778")
		const uintfvsf7Rf = BigInt("1740")
		const uintWQjzYgx = BigInt("1572")
		const uintqa2MBXT = BigInt("1318")
		const addressifUqO7C = accounts[2]
		const boolTXu0J7 = await CryptozB3sD31.loadNewCardType.call(uintQ1uicla, stringUmuQoKG, stringWr3aQfc, uint93O2WW, uintE8qAgi1, uintYiUB4fO, uintGMerZhb, uintm6S1Mt7, uintNd8s0Fl, {from: accounts[1]});
		const uint256GWxxMyU = await CryptozB3sD31.tokenByIndex.call(uintnt91DcL, {from: accounts[4]});
		const boolm1gBDOy = await CryptozB3sD31.addTocardType.call(uintqa2MBXT, uintWQjzYgx, uintfvsf7Rf, uintEAQtlDh, uintZuc3eif, {from: accounts[0]});
		const addressqdDtz6a = await CryptozB3sD31.initialize.call(addressifUqO7C, {from: accounts[0]});
		await CryptozB3sD31.withdraw.call({from: accounts[2]});

		assert.equal(boolTXu0J7, true)
		await expect(CryptozB3sD31.tokenByIndex.call(uintnt91DcL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozq5yZ2oU = await Cryptoz.new({from: accounts[3]});
		const uintIcDtbV6 = BigInt("1847")
		const addressmyMGvL = accounts[3]
		const uintfeU96Tf = BigInt("159")
		const uinthdEilWf = BigInt("1394")
		const uintpRSyOEy = BigInt("357")
		const uintFvYva07 = BigInt("450")
		const uintkhd80ok = BigInt("732")
		const stringLnd9DTj = await Cryptozq5yZ2oU.symbol.call({from: accounts[4]});
		const stringFYLYzPL = await Cryptozq5yZ2oU.tokenURI.call(uintIcDtbV6, {from: accounts[5]});
		await Cryptozq5yZ2oU.buyBoosterCardAndOpen.call({from: accounts[3]});
		const addresssOrvRq6 = await Cryptozq5yZ2oU.initialize.call(addressmyMGvL, {from: accounts[2]});
		const boolZ2ivAeO = await Cryptozq5yZ2oU.addTocardType.call(uintkhd80ok, uintFvYva07, uintpRSyOEy, uinthdEilWf, uintfeU96Tf, {from: accounts[4]});

		assert.equal(stringFYLYzPL, "https://cryptoz.cards/data/1847")
		assert.equal(stringLnd9DTj, "Cryptoz")
		await expect(Cryptozq5yZ2oU.buyBoosterCardAndOpen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozjFECTX6 = await Cryptoz.new({from: accounts[4]});
		const uintEYKwi95 = BigInt("498")
		const addressMccql7g = accounts[2]
		const addressFO0jn7w = accounts[2]
		const uintKcyRRR = BigInt("463")
		const uintlhPmGPn = BigInt("1366")
		const addressFJ03nYk = await CryptozjFECTX6.transferFrom.call(addressFO0jn7w, addressMccql7g, uintEYKwi95, {from: accounts[4]});
		const uint32ivOiCN1 = await CryptozjFECTX6.getFreeCard.call(uintKcyRRR, {from: accounts[0]});
		const boolcoUp7TM = await CryptozjFECTX6.buyBoosterCard.call(uintlhPmGPn, {from: accounts[4]});

		await expect(CryptozjFECTX6.transferFrom.call(addressFO0jn7w, addressMccql7g, uintEYKwi95, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozRfcfvFc = await Cryptoz.new({from: accounts[2]});
		const uintZx7wMSD = BigInt("12")
		const uintS3rFroU = BigInt("784")
		const uintAoebNgi = BigInt("668")
		const addressluMIQp1 = accounts[5]
		const boolvF0EM2R = await CryptozRfcfvFc.openBoosterCard.call(uintZx7wMSD, {from: accounts[1]});
		const stringBADQMF0 = await CryptozRfcfvFc.tokenURI.call(uintS3rFroU, {from: accounts[3]});
		const uint256fg3qs08 = await CryptozRfcfvFc.sacrifice.call(uintAoebNgi, {from: accounts[2]});
		const addressvhyTNt1 = await CryptozRfcfvFc.initialize.call(addressluMIQp1, {from: accounts[4]});
		await CryptozRfcfvFc.buyBoosterCardAndOpen.call({from: accounts[1]});

		await expect(CryptozRfcfvFc.openBoosterCard.call(uintZx7wMSD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozB3sD31 = await Cryptoz.new({from: accounts[1]});
		const uintmAD3vLl = BigInt("1816")
		const uintnEPBRO = BigInt("206")
		const uintRX9y3L = BigInt("233")
		const uinthPD58or = BigInt("119")
		const uintv4ZPM9Y = BigInt("12")
		const uintO4sJUsE = BigInt("172")
		const stringWr3aQfc = "HltVC3XTMetDZPDjulOWCEbUDTx5XVs7qAcJSBeQitKPdf8WL5OMUAA6yqfqxHDG4wZoFH1b7CnUKGpmhi6Xr84Zckut"
		const stringUmuQoKG = "jljddrbqqDanI4VmczVkmMYmUXwhxvpeCtD"
		const uintjlx47w6 = BigInt("158")
		const uintX9M9Uha = BigInt("891")
		const addressBRp6ix = "0x0000000000000000000000000000000000000000"
		const addressjoxiiNg = accounts[4]
		const uintWjGPTtr = BigInt("1700")
		const addressVBY7khj = accounts[3]
		const boolTXu0J7 = await CryptozB3sD31.loadNewCardType.call(uintjlx47w6, stringUmuQoKG, stringWr3aQfc, uintO4sJUsE, uintv4ZPM9Y, uinthPD58or, uintRX9y3L, uintnEPBRO, uintmAD3vLl, {from: accounts[1]});
		const uint256CJW4LA8 = await CryptozB3sD31.tokenOfOwnerByIndex.call(addressBRp6ix, uintX9M9Uha, {from: "0x0000000000000000000000000000000000000001"});
		const addressvl1qLz7 = await CryptozB3sD31.initialize.call(addressjoxiiNg, {from: accounts[3]});
		const uint256jzAaEa3 = await CryptozB3sD31.tokenOfOwnerByIndex.call(addressVBY7khj, uintWjGPTtr, {from: accounts[1]});

		assert.equal(boolTXu0J7, true)
		await expect(CryptozB3sD31.tokenOfOwnerByIndex.call(addressBRp6ix, uintX9M9Uha, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})