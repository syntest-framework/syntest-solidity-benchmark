const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozUjgdHsd = await Cryptoz.new({from: accounts[1]});
		const uinttYSjvoQ = BigInt("314")
		const uinttiV85x = BigInt("227")
		const uintj0jRwIw = BigInt("1140")
		const uintN7IP5y = BigInt("1702")
		const uintFwpNBf = BigInt("1030")
		const uintLXVhoqB = BigInt("555")
		const boolsMYRKJ = await CryptozUjgdHsd.openBoosterCard.call(uinttYSjvoQ, {from: accounts[2]});
		const boolREcDFmT = await CryptozUjgdHsd.addTocardType.call(uintLXVhoqB, uintFwpNBf, uintN7IP5y, uintj0jRwIw, uinttiV85x, {from: accounts[0]});
		await CryptozUjgdHsd.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(CryptozUjgdHsd.openBoosterCard.call(uinttYSjvoQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozeFf2ibv = await Cryptoz.new({from: accounts[1]});
		const addressu14O21 = accounts[3]
		const uintZFml7cj = BigInt("1500")
		const uintSHzTaz0 = BigInt("574")
		const uintB6fTF8x = BigInt("1275")
		const uintBQhqiSZ = BigInt("1674")
		const uintLNyW4n1 = BigInt("464")
		const uintshIXGi6 = BigInt("120")
		const uint0zzxyf = BigInt("137")
		const uintXM2sD1t = BigInt("161")
		const stringT6v8sVg = "nni3SWQjl23GUkdtlVKfV7M"
		const stringB7n8otz = "10n9rtYesK6hdo7ip4JKzSIeXtpm7j6GtVmJbqm3kL41GA5z"
		const uintCLG67eT = BigInt("163")
		const uint256arrayBXHILO0 = await CryptozeFf2ibv.tokensOfOwner.call(addressu14O21, {from: accounts[3]});
		await CryptozeFf2ibv.buyBoosterCardAndOpen.call({from: accounts[1]});
		const boolh84Owo2 = await CryptozeFf2ibv.buyCard.call(uintZFml7cj, {from: accounts[2]});
		const uint32Qng7Gss = await CryptozeFf2ibv.isValidCard.call(uintSHzTaz0, {from: accounts[3]});
		const boolwCB2igj = await CryptozeFf2ibv.loadNewCardType.call(uintCLG67eT, stringB7n8otz, stringT6v8sVg, uintXM2sD1t, uint0zzxyf, uintshIXGi6, uintLNyW4n1, uintBQhqiSZ, uintB6fTF8x, {from: accounts[2]});

		assert.equal(uint256arrayBXHILO0, BigInt(""))
		await expect(CryptozeFf2ibv.buyBoosterCardAndOpen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozLy8hQEp = await Cryptoz.new({from: accounts[2]});
		const uintLGk0p5K = BigInt("431")
		const addressF1nfhwp = accounts[0]
		const uintkJARkDx = BigInt("373")
		const addressF1Itqvr = "0x0000000000000000000000000000000000000001"
		const addressGa7kAn = accounts[3]
		const uintGwnAPkq = BigInt("1453")
		const uintNd7RI57 = BigInt("1921")
		const uintn5PMACU = BigInt("1936")
		const uintumPaaO3 = BigInt("165")
		const uintGn1xdvu = BigInt("62")
		const uintgPrOPF2 = BigInt("10")
		const stringuKSLD9 = "cPo"
		const strings0xiF4v = "o1R5Lp6ytoYwWCihnhEFkT"
		const uintFVLneyl = BigInt("55")
		const boolimD3JA0 = await CryptozLy8hQEp.buyBoosterCard.call(uintLGk0p5K, {from: accounts[4]});
		const uintKRw1QuR = await CryptozLy8hQEp.getTimeToDailyBonus.call(addressF1nfhwp, {from: accounts[4]});
		const addressONkoSLA = await CryptozLy8hQEp.transferFrom.call(addressGa7kAn, addressF1Itqvr, uintkJARkDx, {from: accounts[1]});
		const bool7FwE10 = await CryptozLy8hQEp.loadNewCardType.call(uintFVLneyl, strings0xiF4v, stringuKSLD9, uintgPrOPF2, uintGn1xdvu, uintumPaaO3, uintn5PMACU, uintNd7RI57, uintGwnAPkq, {from: accounts[2]});

		await expect(CryptozLy8hQEp.buyBoosterCard.call(uintLGk0p5K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUObhtLI = await Cryptoz.new({from: accounts[2]});
		await CryptozUObhtLI.getTokensByRarity.call({from: accounts[2]});
		const stringHxQbiGr = await CryptozUObhtLI.symbol.call({from: accounts[0]});

		await expect(CryptozUObhtLI.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhbZyZGN = await Cryptoz.new({from: accounts[0]});
		const uintsUbhzGM = BigInt("1663")
		const addressCT1Khtj = accounts[1]
		const addressDbKr8AU = accounts[1]
		const addressyzPMiBM = accounts[1]
		const uint256eurv4SV = await CryptozhbZyZGN.tokenOfOwnerByIndex.call(addressCT1Khtj, uintsUbhzGM, {from: accounts[3]});
		const addressnvcuzcP = await CryptozhbZyZGN.linkMySponsor.call(addressDbKr8AU, {from: "0x0000000000000000000000000000000000000001"});
		const addressE5YzHER = await CryptozhbZyZGN.linkMySponsor.call(addressyzPMiBM, {from: accounts[3]});

		await expect(CryptozhbZyZGN.tokenOfOwnerByIndex.call(addressCT1Khtj, uintsUbhzGM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoze1tkaQQ = await Cryptoz.new({from: accounts[0]});
		const addressHeAlGni = accounts[3]
		const uint256nyYhksY = await Cryptoze1tkaQQ.totalSupply.call({from: accounts[4]});
		const uintuHCToW = await Cryptoze1tkaQQ.getTimeToDailyBonus.call(addressHeAlGni, {from: accounts[0]});

		assert.equal(uint256nyYhksY, BigInt("0"))
		assert.equal(uintuHCToW, BigInt("1630205330"))
	});

	it('test for Cryptoz', async () => {
		const Cryptozl16Qjuj = await Cryptoz.new({from: accounts[2]});
		const addressuTm3FYC = accounts[0]
		const addressz529C9B = "0x0000000000000000000000000000000000000001"
		const uint256bWHNqtp = await Cryptozl16Qjuj.totalSupply.call({from: accounts[0]});
		const uint256arrayz8HGEAN = await Cryptozl16Qjuj.tokensOfOwner.call(addressuTm3FYC, {from: accounts[1]});
		const stringd3wM5Kp = await Cryptozl16Qjuj.symbol.call({from: accounts[3]});
		const uintkx3MoDv = await Cryptozl16Qjuj.getTimeToDailyBonus.call(addressz529C9B, {from: accounts[4]});
		await Cryptozl16Qjuj.withdraw.call({from: accounts[2]});

		assert.equal(stringd3wM5Kp, "Cryptoz")
		assert.equal(uint256arrayz8HGEAN, BigInt(""))
		assert.equal(uint256bWHNqtp, BigInt("0"))
		assert.equal(uintkx3MoDv, BigInt("1630205322"))
		await expect(Cryptozl16Qjuj.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpGftRA = await Cryptoz.new({from: accounts[1]});
		const addressNzroh7X = accounts[1]
		await CryptozpGftRA.getTokensByRarity.call({from: accounts[0]});
		const addressDBlKKzw = await CryptozpGftRA.linkMySponsor.call(addressNzroh7X, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozpGftRA.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozz4YiiBn = await Cryptoz.new({from: accounts[4]});
		const uintbdkGdAR = BigInt("585")
		const uintSfsP2ID = BigInt("1194")
		const uintPMxf68Q = BigInt("1126")
		const uintvKeMFEK = BigInt("43")
		await Cryptozz4YiiBn.f.call({from: accounts[2]});
		const boolm8zI3H = await Cryptozz4YiiBn.buyBoosterCard.call(uintbdkGdAR, {from: accounts[3]});
		const stringKJzXHuX = await Cryptozz4YiiBn.tokenURI.call(uintSfsP2ID, {from: accounts[4]});
		const boolIyF9nn8 = await Cryptozz4YiiBn.openBoosterCard.call(uintPMxf68Q, {from: accounts[0]});
		const booluhKQKiY = await Cryptozz4YiiBn.buyCard.call(uintvKeMFEK, {from: accounts[5]});

		await expect(Cryptozz4YiiBn.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUObhtLI = await Cryptoz.new({from: accounts[2]});
		const uintBUVM9yh = BigInt("147")
		const uintHuuJb58 = BigInt("784")
		const uintYwGqZEL = BigInt("285")
		const uintOQeWJey = BigInt("130")
		const uintdmULUtU = BigInt("64")
		const uintpmBtkwj = BigInt("188")
		const uintmwFAxLC = BigInt("989")
		await CryptozUObhtLI.getTokensByRarity.call({from: accounts[2]});
		const boolsA59SQ = await CryptozUObhtLI.addTocardType.call(uintdmULUtU, uintOQeWJey, uintYwGqZEL, uintHuuJb58, uintBUVM9yh, {from: "0x0000000000000000000000000000000000000001"});
		const uint32xSL8eM = await CryptozUObhtLI.getFreeCard.call(uintpmBtkwj, {from: accounts[3]});
		const uint256MFHK8s = await CryptozUObhtLI.tokenByIndex.call(uintmwFAxLC, {from: accounts[1]});
		const stringHxQbiGr = await CryptozUObhtLI.symbol.call({from: accounts[0]});

		await expect(CryptozUObhtLI.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUjgdHsd = await Cryptoz.new({from: accounts[1]});
		const uintOJzmsq8 = BigInt("227")
		const uintroAUA6 = BigInt("314")
		const uintDDX9T6h = BigInt("227")
		const uintN5Wj7tL = BigInt("1140")
		const uintXvSG7Eb = BigInt("1702")
		const uintVIZTfxc = BigInt("1030")
		const uint7DwKbO = BigInt("555")
		const uintPAfDZ1 = BigInt("1374")
		const uint256GO3AuJH = await CryptozUjgdHsd.sacrifice.call(uintOJzmsq8, {from: accounts[4]});
		const boolsMYRKJ = await CryptozUjgdHsd.openBoosterCard.call(uintroAUA6, {from: accounts[2]});
		await CryptozUjgdHsd.withdraw.call({from: accounts[1]});
		const boolREcDFmT = await CryptozUjgdHsd.addTocardType.call(uint7DwKbO, uintVIZTfxc, uintXvSG7Eb, uintN5Wj7tL, uintDDX9T6h, {from: accounts[0]});
		await CryptozUjgdHsd.f.call({from: accounts[5]});
		const boollxcCZeS = await CryptozUjgdHsd.buyBoosterCard.call(uintPAfDZ1, {from: accounts[4]});
		await CryptozUjgdHsd.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(CryptozUjgdHsd.sacrifice.call(uintOJzmsq8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozl16Qjuj = await Cryptoz.new({from: accounts[2]});
		const addresst7iCPBO = accounts[0]
		const addressEWZ653t = accounts[0]
		const addresspP5kow = "0x0000000000000000000000000000000000000000"
		const addressgm2GD2j = "0x0000000000000000000000000000000000000001"
		const addressz5e1nz = "0x0000000000000000000000000000000000000001"
		const uint256bWHNqtp = await Cryptozl16Qjuj.totalSupply.call({from: accounts[0]});
		const uint256arrayz8HGEAN = await Cryptozl16Qjuj.tokensOfOwner.call(addresst7iCPBO, {from: accounts[1]});
		const uintoHjtoxN = await Cryptozl16Qjuj.getTimeToDailyBonus.call(addressEWZ653t, {from: accounts[3]});
		const stringd3wM5Kp = await Cryptozl16Qjuj.symbol.call({from: accounts[3]});
		const stringLfi1mm4 = await Cryptozl16Qjuj.name.call({from: accounts[4]});
		const uintkx3MoDv = await Cryptozl16Qjuj.getTimeToDailyBonus.call(addresspP5kow, {from: accounts[4]});
		const uintxpCuajO = await Cryptozl16Qjuj.getTimeToDailyBonus.call(addressgm2GD2j, {from: accounts[3]});
		await Cryptozl16Qjuj.withdraw.call({from: accounts[2]});
		const addressH9HhDRU = await Cryptozl16Qjuj.linkMySponsor.call(addressz5e1nz, {from: accounts[4]});

		assert.equal(stringLfi1mm4, "Cryptoz Cards")
		assert.equal(stringd3wM5Kp, "Cryptoz")
		assert.equal(uint256arrayz8HGEAN, BigInt(""))
		assert.equal(uint256bWHNqtp, BigInt("0"))
		assert.equal(uintkx3MoDv, BigInt("1630205335"))
		assert.equal(uintoHjtoxN, BigInt("1630205335"))
		assert.equal(uintxpCuajO, BigInt("1630205335"))
		await expect(Cryptozl16Qjuj.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhbZyZGN = await Cryptoz.new({from: accounts[0]});
		const uintkjoe1u8 = BigInt("156")
		const uintFtlRewA = BigInt("1663")
		const addressSSSvOz7 = accounts[1]
		const addressOiY09OX = accounts[1]
		const uint256E3lES6s = await CryptozhbZyZGN.tokenByIndex.call(uintkjoe1u8, {from: accounts[4]});
		const uint256eurv4SV = await CryptozhbZyZGN.tokenOfOwnerByIndex.call(addressSSSvOz7, uintFtlRewA, {from: accounts[3]});
		const addressE5YzHER = await CryptozhbZyZGN.linkMySponsor.call(addressOiY09OX, {from: accounts[3]});
		const stringIMTj5c = await CryptozhbZyZGN.symbol.call({from: accounts[3]});

		await expect(CryptozhbZyZGN.tokenByIndex.call(uintkjoe1u8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbcF8on = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintS8lSevu = BigInt("36")
		const uinthV8uRLu = BigInt("1821")
		const uintmn056Yg = BigInt("1541")
		const uintvoTzYuN = BigInt("1352")
		const uintQArfkAo = BigInt("1079")
		const uintn2fjdbq = BigInt("63")
		const addresslcPH9Gb = accounts[4]
		const addresscx9ZnPD = accounts[3]
		const boolurN44a2 = await CryptozbcF8on.addTocardType.call(uintQArfkAo, uintvoTzYuN, uintmn056Yg, uinthV8uRLu, uintS8lSevu, {from: accounts[1]});
		const stringwthbOcE = await CryptozbcF8on.symbol.call({from: accounts[0]});
		const addressOYTlGoK = await CryptozbcF8on.transferFrom.call(addresscx9ZnPD, addresslcPH9Gb, uintn2fjdbq, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozG2mUVId = await Cryptoz.new({from: accounts[1]});
		const uintRC1bb2I = BigInt("130")
		const uintFXLFQJ5 = BigInt("605")
		const uintzekg87A = BigInt("96")
		const uintE6O6HjA = BigInt("744")
		const uintPJf5GoZ = BigInt("1540")
		const uintzEPpJHg = BigInt("1352")
		const uintmQzVPVC = BigInt("1893")
		const uintTpCgM5 = BigInt("3")
		const uint32mAeN7k3 = await CryptozG2mUVId.isValidCard.call(uintRC1bb2I, {from: accounts[0]});
		const uint32xoWI5Iw = await CryptozG2mUVId.isValidCard.call(uintFXLFQJ5, {from: accounts[2]});
		const boolw4vqwho = await CryptozG2mUVId.addTocardType.call(uintmQzVPVC, uintzEPpJHg, uintPJf5GoZ, uintE6O6HjA, uintzekg87A, {from: accounts[4]});
		const stringzfnWIP2 = await CryptozG2mUVId.symbol.call({from: accounts[2]});
		const uint32ChaO4n3 = await CryptozG2mUVId.getFreeCard.call(uintTpCgM5, {from: accounts[1]});

		await expect(CryptozG2mUVId.isValidCard.call(uintRC1bb2I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUjgdHsd = await Cryptoz.new({from: accounts[1]});
		const uintksNWh9V = BigInt("211")
		const addressRWDHJg = accounts[3]
		const addressRpxTGr = accounts[1]
		const uintAbtSWxW = BigInt("314")
		const uintsGzB6jB = BigInt("639")
		const addressurzFsva = await CryptozUjgdHsd.transferFrom.call(addressRpxTGr, addressRWDHJg, uintksNWh9V, {from: accounts[0]});
		const boolsMYRKJ = await CryptozUjgdHsd.openBoosterCard.call(uintAbtSWxW, {from: accounts[2]});
		await CryptozUjgdHsd.getOwnedCard.call(uintsGzB6jB, {from: accounts[1]});
		await CryptozUjgdHsd.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(CryptozUjgdHsd.transferFrom.call(addressRpxTGr, addressRWDHJg, uintksNWh9V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUjgdHsd = await Cryptoz.new({from: accounts[1]});
		const uintB5T1hes = BigInt("1464")
		const uinthXFTM5d = BigInt("96")
		const uintyju9iu = BigInt("1111")
		const uintFsuhV28 = BigInt("2040")
		const uintLh8JU94 = BigInt("1300")
		const uintN0kDQvk = BigInt("1246")
		const uinttSlN4ff = BigInt("323")
		const stringy6vAe3q = await CryptozUjgdHsd.tokenURI.call(uintB5T1hes, {from: accounts[2]});
		const boolkcj1fVI = await CryptozUjgdHsd.addTocardType.call(uintN0kDQvk, uintLh8JU94, uintFsuhV28, uintyju9iu, uinthXFTM5d, {from: accounts[5]});
		const boolsMYRKJ = await CryptozUjgdHsd.openBoosterCard.call(uinttSlN4ff, {from: accounts[2]});

		assert.equal(stringy6vAe3q, "https://cryptoz.cards/data/1464")
		await expect(CryptozUjgdHsd.addTocardType.call(uintN0kDQvk, uintLh8JU94, uintFsuhV28, uintyju9iu, uinthXFTM5d, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoze1tkaQQ = await Cryptoz.new({from: accounts[0]});
		const addressY89CEZI = accounts[5]
		await Cryptoze1tkaQQ.getBonusBoosters.call({from: accounts[4]});
		const uintuHCToW = await Cryptoze1tkaQQ.getTimeToDailyBonus.call(addressY89CEZI, {from: accounts[0]});

		await expect(Cryptoze1tkaQQ.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoze1tkaQQ = await Cryptoz.new({from: accounts[0]});
		const addressGcwTEcs = accounts[0]
		const addressFfR49C = accounts[2]
		const addressi6CNxpA = accounts[5]
		const uintkAOecO9 = BigInt("780")
		const addressOIiFAzW = accounts[0]
		const address37mAMQ = accounts[0]
		const addressTJBNBpA = await Cryptoze1tkaQQ.initialize.call(addressGcwTEcs, {from: accounts[0]});
		const uintTDZQgM = await Cryptoze1tkaQQ.getTimeToDailyBonus.call(addressFfR49C, {from: accounts[3]});
		await Cryptoze1tkaQQ.getTokensByRarity.call({from: accounts[3]});
		const uintuHCToW = await Cryptoze1tkaQQ.getTimeToDailyBonus.call(addressi6CNxpA, {from: accounts[0]});
		const addressZk1KPfG = await Cryptoze1tkaQQ.transferFrom.call(address37mAMQ, addressOIiFAzW, uintkAOecO9, {from: accounts[0]});

		assert.equal(uintTDZQgM, BigInt("1630205317"))
		await expect(Cryptoze1tkaQQ.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoze1tkaQQ = await Cryptoz.new({from: accounts[0]});
		const uintz9TaXne = BigInt("1718")
		const uintlLOHI1K = BigInt("833")
		const addresslzypL9c = accounts[0]
		const addressDdnI6NF = accounts[0]
		await Cryptoze1tkaQQ.getOwnedCard.call(uintz9TaXne, {from: accounts[4]});
		const addressZk1KPfG = await Cryptoze1tkaQQ.transferFrom.call(addressDdnI6NF, addresslzypL9c, uintlLOHI1K, {from: accounts[0]});

		await expect(Cryptoze1tkaQQ.getOwnedCard.call(uintz9TaXne, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWKRhGPk = await Cryptoz.new({from: accounts[5]});
		const uintcClxaVj = BigInt("1536")
		const uintyWOMTcW = BigInt("1202")
		const uintUrcRxH = BigInt("1172")
		const uintPmMena = BigInt("5")
		const uintXABddC = BigInt("78")
		const uintMXRJAjd = BigInt("92")
		const stringdpsIBJ = "9giiXZki2YJM6H7W2Sv2UG5sOy6p3vwwoOKh6ffxEbknIEXFV3qtGRjmmy6abITc45zMlyiaO2A"
		const stringo7Ps1Fo = "UcKkqWbmIo9fUCEPs4xEr0zWwQLTTwwrk6g84oP"
		const uintBItHCR = BigInt("211")
		const uintGiPdLdD = BigInt("441")
		const addressgnmkiYl = accounts[1]
		const bool3cr3Vm = await CryptozWKRhGPk.loadNewCardType.call(uintBItHCR, stringo7Ps1Fo, stringdpsIBJ, uintMXRJAjd, uintXABddC, uintPmMena, uintUrcRxH, uintyWOMTcW, uintcClxaVj, {from: accounts[5]});
		const booluXhrFYf = await CryptozWKRhGPk.buyBoosterCard.call(uintGiPdLdD, {from: accounts[2]});
		const addressxsFtPmZ = await CryptozWKRhGPk.linkMySponsor.call(addressgnmkiYl, {from: accounts[4]});
		const stringh4RUEqL = await CryptozWKRhGPk.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool3cr3Vm, true)
		await expect(CryptozWKRhGPk.buyBoosterCard.call(uintGiPdLdD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})