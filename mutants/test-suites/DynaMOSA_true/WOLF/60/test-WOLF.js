const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringh8PrZsb = "12yw44nQmxmYC4uafw915Gow8EMvnVC8UAJdgRaZQNaR2Qh7yPPkkzWY2eUftwznI5rIGU2LwXekF4IveVXubguaClE"
		const stringyzMVAL3 = ""
		const uintdl2kyoO = BigInt("403")
		const WOLFHS3rOSk = await WOLF.new(stringh8PrZsb, stringyzMVAL3, uintdl2kyoO, {from: accounts[1]});
		const uintDLaNuuu = BigInt("2016")
		const addressKnBtF1P = accounts[3]
		const uintJxz0QP = BigInt("1345")
		const addressNEXUtoc = accounts[0]
		const address2r94y5 = accounts[3]
		const uintnm2Wpi = BigInt("1575")
		const addressmhCwRF = "0x0000000000000000000000000000000000000001"
		const uintbexehF = BigInt("63")
		const addressFIrOlTV = accounts[2]
		const uintnoo1FsD = BigInt("894")
		const addressxbnpPB7 = accounts[4]
		const addressbcjPqDS = accounts[0]
		const boolOZygOr = await WOLFHS3rOSk.approve.call(addressKnBtF1P, uintDLaNuuu, {from: "0x0000000000000000000000000000000000000001"});
//		const booldC7IBhv = await WOLFHS3rOSk.transferFrom.call(address2r94y5, addressNEXUtoc, uintJxz0QP, {from: accounts[4]});
//		const boolDSHz5E9 = await WOLFHS3rOSk.approveAndCall.call(addressmhCwRF, uintnm2Wpi, {from: accounts[1]});
//		const boolDGUnEUo = await WOLFHS3rOSk.approve.call(addressFIrOlTV, uintbexehF, {from: accounts[0]});
//		const boolQpshXg = await WOLFHS3rOSk.transferFrom.call(addressbcjPqDS, addressxbnpPB7, uintnoo1FsD, {from: accounts[5]});

		assert.equal(boolOZygOr, true)
		await expect(WOLFHS3rOSk.transferFrom.call(address2r94y5, addressNEXUtoc, uintJxz0QP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringbAChGdZ = "MxMg68EwuQNantEsfu0pMq9gLJWBkHIYQrPKscOE4AN"
		const stringPM5Dzpf = "GDn8dBiJTx5LSq6c"
		const uint5mNKXW = BigInt("1616")
		const WOLFq5Y3nI3 = await WOLF.new(stringbAChGdZ, stringPM5Dzpf, uint5mNKXW, {from: accounts[5]});
		const uinttOmlglp = BigInt("1046")
		const addressnD3lfNX = accounts[2]
		const uintVrclj6o = BigInt("405")
		const addressikX01ld = accounts[0]
//		const boolop5E37y = await WOLFq5Y3nI3.transfer.call(addressnD3lfNX, uinttOmlglp, {from: accounts[2]});
//		const boolCtYCuCo = await WOLFq5Y3nI3.approve.call(addressikX01ld, uintVrclj6o, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFq5Y3nI3.transfer.call(addressnD3lfNX, uinttOmlglp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringV9v4fdB = "7NXZbLC3OBY7enorVVtQYoeMsq3JiSPzd4Wjb8AmwDNTiktlz7FyyGuNJjbC5"
		const stringtj3f2m6 = "732NGO0CiJbvSgb6yzs5I2NHuW9evR4wYOy6sFRgeuO92kNUb59QSgyjgYwqpvH4I562MhqbD3bAxGfnlwW5pgHWPZctXtlh5"
		const uintEn74bhk = BigInt("1743")
		const WOLFdqS8ahI = await WOLF.new(stringV9v4fdB, stringtj3f2m6, uintEn74bhk, {from: accounts[0]});
		const uintelQJK5B = BigInt("1313")
		const addressd9kggo = "0x0000000000000000000000000000000000000001"
		const uintGpMq5hj = BigInt("1661")
		const addressPQgQQrY = accounts[0]
		const uintpjtJylD = BigInt("851")
		const addressow7MMnO = accounts[2]
		const boolorx9q6 = await WOLFdqS8ahI.approve.call(addressd9kggo, uintelQJK5B, {from: accounts[4]});
//		const boolFdnmTau = await WOLFdqS8ahI.approveAndCall.call(addressPQgQQrY, uintGpMq5hj, {from: "0x0000000000000000000000000000000000000001"});
//		const bool4pzFEr = await WOLFdqS8ahI.approveAndCall.call(addressow7MMnO, uintpjtJylD, {from: accounts[2]});

		assert.equal(boolorx9q6, true)
		await expect(WOLFdqS8ahI.approveAndCall.call(addressPQgQQrY, uintGpMq5hj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringV9v4fdB = "7NXZbLC3OBY7enorVVtQYoeMsq3JiSPzd4Wjb8AmwDNTiktlz7FyyGuNJjbC5"
		const stringtj3f2m6 = "732NGO0CiJbvSgb6yzs5I2NHuW9evR4wYOy6sFRgeuO92kNUb59QSgyjgYwqpvH4I562MhqbD3bAxGfnlwW5pgHWPZctXtlh5"
		const uintimIfD8p = BigInt("1743")
		const WOLFdqS8ahI = await WOLF.new(stringV9v4fdB, stringtj3f2m6, uintimIfD8p, {from: accounts[0]});
		const uintuTYXxO6 = BigInt("1860")
		const addressmm6wpVs = accounts[3]
		const uintgUdI6M4 = BigInt("559")
		const addressb8yXCok = accounts[3]
		const uintPanExl = BigInt("1313")
		const addresskZvdW5 = "0x0000000000000000000000000000000000000001"
		const uintHbwESwP = BigInt("1318")
		const addressyd9ptP0 = accounts[1]
		const uintzr1oulF = BigInt("1661")
		const addressRjWuwjS = accounts[1]
		const boolLUSxQd6 = await WOLFdqS8ahI.transfer.call(addressmm6wpVs, uintuTYXxO6, {from: accounts[0]});
//		const boolb9JJoYK = await WOLFdqS8ahI.approveAndCall.call(addressb8yXCok, uintgUdI6M4, {from: accounts[2]});
//		const boolorx9q6 = await WOLFdqS8ahI.approve.call(addresskZvdW5, uintPanExl, {from: accounts[4]});
//		const boolIgebyOc = await WOLFdqS8ahI.transfer.call(addressyd9ptP0, uintHbwESwP, {from: accounts[3]});
//		const boolFdnmTau = await WOLFdqS8ahI.approveAndCall.call(addressRjWuwjS, uintzr1oulF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLUSxQd6, true)
		await expect(WOLFdqS8ahI.approveAndCall.call(addressb8yXCok, uintgUdI6M4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringa3VCAtF = "TIQ51DHlRJpqEe6w1lOx7CJJP"
		const stringLfw30Fb = "RSxenN7XOIPwaz9i"
		const uintjvxgox0 = BigInt("790")
		const WOLFb2uhF8n = await WOLF.new(stringa3VCAtF, stringLfw30Fb, uintjvxgox0, {from: accounts[2]});
		const uintRyW5EfP = BigInt("998")
		const addressJMjyxF8 = accounts[0]
		const uintjMnqkSe = BigInt("1599")
		const addressisDTJEk = accounts[2]
		const uintfkeSJiB = BigInt("906")
		const addressiojQfwa = "0x0000000000000000000000000000000000000001"
		const addressABdniO = accounts[4]
		const boolVYAb4rD = await WOLFb2uhF8n.approveAndCall.call(addressJMjyxF8, uintRyW5EfP, {from: accounts[2]});
//		const boolMUHJ5nG = await WOLFb2uhF8n.approveAndCall.call(addressisDTJEk, uintjMnqkSe, {from: accounts[1]});
//		const boolSJ729dl = await WOLFb2uhF8n.transferFrom.call(addressABdniO, addressiojQfwa, uintfkeSJiB, {from: accounts[2]});

		assert.equal(boolVYAb4rD, true)
		await expect(WOLFb2uhF8n.approveAndCall.call(addressisDTJEk, uintjMnqkSe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringa3VCAtF = "TIQ51DHlRJpqEe6w1lOx7CJJP"
		const stringLfw30Fb = "RSxenN7XOIPwaz9i"
		const uintbqggOcY = BigInt("790")
		const WOLFb2uhF8n = await WOLF.new(stringa3VCAtF, stringLfw30Fb, uintbqggOcY, {from: accounts[2]});
		const uintpunfivb = BigInt("998")
		const addressmkLCqFl = accounts[0]
		const addressb0jGrtk = accounts[5]
		const uintDdwyB1Q = BigInt("38")
		const addresswOrnVka = accounts[4]
		const uinttzyEpmn = BigInt("1565")
		const addressZllGKDj = accounts[2]
		const uintlNheEOL = BigInt("906")
		const addressDnDk4d = "0x0000000000000000000000000000000000000001"
		const addresseGNo2Ga = accounts[4]
		const boolVYAb4rD = await WOLFb2uhF8n.approveAndCall.call(addressmkLCqFl, uintpunfivb, {from: accounts[2]});
//		const boolBWXW4u = await WOLFb2uhF8n.transferownership.call(addressb0jGrtk, {from: accounts[5]});
//		const boolLCxA5bB = await WOLFb2uhF8n.approveAndCall.call(addresswOrnVka, uintDdwyB1Q, {from: accounts[0]});
//		const boolMUHJ5nG = await WOLFb2uhF8n.approveAndCall.call(addressZllGKDj, uinttzyEpmn, {from: accounts[1]});
//		const boolSJ729dl = await WOLFb2uhF8n.transferFrom.call(addresseGNo2Ga, addressDnDk4d, uintlNheEOL, {from: accounts[2]});

		assert.equal(boolVYAb4rD, true)
		await expect(WOLFb2uhF8n.transferownership.call(addressb0jGrtk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringV9v4fdB = "7NXZbLC3OBY7enorVVtQYoeMsq3JiSPzd4Wjb8AmwDNTiktlz7FyyGuNJjbC5"
		const stringtj3f2m6 = "732NGO0CiJbvSgb6yzs5I2NHuW9evR4wYOy6sFRgeuO92kNUb59QSgyjgYwqpvH4I562MhqbD3bAxGfnlwW5pgHWPZctXtlh5"
		const uintJskxPLW = BigInt("1743")
		const WOLFdqS8ahI = await WOLF.new(stringV9v4fdB, stringtj3f2m6, uintJskxPLW, {from: accounts[0]});
		const addressWjKPuU9 = accounts[3]
		const uintDYYKxvt = BigInt("1860")
		const addressqN6usb7 = accounts[3]
		const uintBH3wSOD = BigInt("265")
		const addressCeScOqt = accounts[4]
		const uintWzL9mYm = BigInt("1313")
		const addressMTJSDK = "0x0000000000000000000000000000000000000001"
		const uintsuqt7gb = BigInt("376")
		const addressSyEqWuo = accounts[4]
		const addressDCjyuvu = accounts[3]
		const uintkdN9Lx5 = BigInt("894")
		const addressLHpe7Gi = accounts[3]
		const uintLdv1pC = BigInt("1305")
		const addressuaq9ut7 = accounts[3]
		const addressWnO3ifk = accounts[4]
		const uintyQjbmAY = BigInt("1318")
		const addressR7eIwlA = accounts[1]
		const uinttIfrvI = BigInt("1661")
		const addressU43iWFd = accounts[2]
		const boolxcntZo = await WOLFdqS8ahI.transferownership.call(addressWjKPuU9, {from: accounts[0]});
		const boolLUSxQd6 = await WOLFdqS8ahI.transfer.call(addressqN6usb7, uintDYYKxvt, {from: accounts[0]});
//		const boolpjFqMB2 = await WOLFdqS8ahI.transfer.call(addressCeScOqt, uintBH3wSOD, {from: accounts[3]});
//		const boolorx9q6 = await WOLFdqS8ahI.approve.call(addressMTJSDK, uintWzL9mYm, {from: accounts[4]});
//		const boolWaKyy92 = await WOLFdqS8ahI.transferFrom.call(addressDCjyuvu, addressSyEqWuo, uintsuqt7gb, {from: accounts[2]});
//		const boolykBuM36 = await WOLFdqS8ahI.approveAndCall.call(addressLHpe7Gi, uintkdN9Lx5, {from: accounts[0]});
//		const boolxYVot9q = await WOLFdqS8ahI.transferFrom.call(addressWnO3ifk, addressuaq9ut7, uintLdv1pC, {from: accounts[2]});
//		const boolIgebyOc = await WOLFdqS8ahI.transfer.call(addressR7eIwlA, uintyQjbmAY, {from: accounts[3]});
//		const boolFdnmTau = await WOLFdqS8ahI.approveAndCall.call(addressU43iWFd, uinttIfrvI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLUSxQd6, true)
		assert.equal(boolxcntZo, true)
		await expect(WOLFdqS8ahI.transfer.call(addressCeScOqt, uintBH3wSOD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringqFUuzq1 = "NNOqPb2Cxex3hhc95qWNJq3NV7jQnIUsLHhOhuNXPeqPKDt3juue1"
		const stringsxIonVO = "hEyrfKNa4tCniPpU0"
		const uintI5MesQE = BigInt("1300")
		const WOLFBOMuS3K = await WOLF.new(stringqFUuzq1, stringsxIonVO, uintI5MesQE, {from: "0x0000000000000000000000000000000000000001"});
		const uintXAg0CEF = BigInt("1564")
		const addressV3Mwu10 = accounts[3]
		const uintY90iH3a = BigInt("1984")
		const addressNeOZWSs = accounts[0]
		const boolkaJPdKz = await WOLFBOMuS3K.approveAndCall.call(addressV3Mwu10, uintXAg0CEF, {from: accounts[1]});
		const boolpWFLZSC = await WOLFBOMuS3K.transfer.call(addressNeOZWSs, uintY90iH3a, {from: accounts[0]});
	});

	it('test for WOLF', async () => {
		const stringV9v4fdB = "7NXZbLC3OBY7enorVVtQYoeMsq3JiSPzd4Wjb8AmwDNTiktlz7FyyGuNJjbC5"
		const stringtj3f2m6 = "732NGO0CiJbvSgb6yzs5I2NHuW9evR4wYOy6sFRgeuO92kNUb59QSgyjgYwqpvH4I562MhqbD3bAxGfnlwW5pgHWPZctXtlh5"
		const uintTgKezxn = BigInt("1743")
		const WOLFdqS8ahI = await WOLF.new(stringV9v4fdB, stringtj3f2m6, uintTgKezxn, {from: accounts[0]});
		const uintPnB1koZ = BigInt("18")
		const addressljheObM = accounts[1]
		const uintbO374Of = BigInt("1860")
		const addressuVQS1fG = accounts[3]
		const uintyO1Pclo = BigInt("0")
		const addressXerl3fs = accounts[2]
		const uintzqFCXwP = BigInt("1344")
		const addressDvXQUr = accounts[4]
		const addressGq4B7Js = accounts[2]
		const uintgLtfX3U = BigInt("376")
		const addressNCLoUXV = accounts[4]
		const addresscoFEEf0 = accounts[2]
		const uintlWfgp9 = BigInt("1552")
		const addressQdv1cWj = accounts[2]
		const uintEOuW0ni = BigInt("1993")
		const addressE7a4y7r = "0x0000000000000000000000000000000000000002"
		const uintotKrOdr = BigInt("1305")
		const addressrEl7XqE = accounts[4]
		const addressWlr0rQ = accounts[4]
		const uintwcKTLE = BigInt("74")
		const addressSx2lsJO = accounts[0]
		const uintEVTXGiJ = BigInt("1318")
		const addresst5UAAUX = accounts[1]
		const uintc5phQL7 = BigInt("1661")
		const addressZmFPBY9 = accounts[1]
		const boolcke8vX7 = await WOLFdqS8ahI.approveAndCall.call(addressljheObM, uintPnB1koZ, {from: accounts[0]});
		const boolLUSxQd6 = await WOLFdqS8ahI.transfer.call(addressuVQS1fG, uintbO374Of, {from: accounts[0]});
		const boolouMemv = await WOLFdqS8ahI.transfer.call(addressXerl3fs, uintyO1Pclo, {from: accounts[0]});
//		const boolSLwRWIG = await WOLFdqS8ahI.transferFrom.call(addressGq4B7Js, addressDvXQUr, uintzqFCXwP, {from: accounts[0]});
//		const boolWaKyy92 = await WOLFdqS8ahI.transferFrom.call(addresscoFEEf0, addressNCLoUXV, uintgLtfX3U, {from: accounts[2]});
//		const boolKRY3NnM = await WOLFdqS8ahI.approveAndCall.call(addressQdv1cWj, uintlWfgp9, {from: accounts[1]});
//		const boolus0Dlvh = await WOLFdqS8ahI.approveAndCall.call(addressE7a4y7r, uintEOuW0ni, {from: accounts[2]});
//		const boolxYVot9q = await WOLFdqS8ahI.transferFrom.call(addressWlr0rQ, addressrEl7XqE, uintotKrOdr, {from: accounts[2]});
//		const boolQDm5FBH = await WOLFdqS8ahI.approveAndCall.call(addressSx2lsJO, uintwcKTLE, {from: accounts[1]});
//		const boolIgebyOc = await WOLFdqS8ahI.transfer.call(addresst5UAAUX, uintEVTXGiJ, {from: accounts[3]});
//		const boolFdnmTau = await WOLFdqS8ahI.approveAndCall.call(addressZmFPBY9, uintc5phQL7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLUSxQd6, true)
		assert.equal(boolcke8vX7, true)
		assert.equal(boolouMemv, true)
		await expect(WOLFdqS8ahI.transferFrom.call(addressGq4B7Js, addressDvXQUr, uintzqFCXwP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringV9v4fdB = "7NXZbLC3OBY7enorVVtQYoeMsq3JiSPzd4Wjb8AmwDNTiktlz7FyyGuNJjbC5"
		const stringtj3f2m6 = "732NGO0CiJbvSgb6yzs5I2NHuW9evR4wYOy6sFRgeuO92kNUb59QSgyjgYwqpvH4I562MhqbD3bAxGfnlwW5pgHWPZctXtlh5"
		const uintRzIjtmB = BigInt("1743")
		const WOLFdqS8ahI = await WOLF.new(stringV9v4fdB, stringtj3f2m6, uintRzIjtmB, {from: accounts[0]});
		const uintrkejhBX = BigInt("0")
		const addressgqEUJds = accounts[1]
		const uintkGGqxcN = BigInt("1860")
		const addressaTgEKF = accounts[3]
		const uintJPmzoku = BigInt("52")
		const addresscnArF43 = accounts[5]
		const addressnO5ZS0W = accounts[2]
		const uintQhAUkJ = BigInt("1313")
		const addresstLFSKU = "0x0000000000000000000000000000000000000001"
		const uintSMRDgXv = BigInt("1436")
		const addressJNnaTuT = accounts[3]
		const uintPYLEXEh = BigInt("74")
		const addressDbL01K5 = accounts[0]
		const uintlIOWoLa = BigInt("1267")
		const addressTWZGSvQ = accounts[1]
		const uintbpYsgXw = BigInt("334")
		const addresssOb1YB = accounts[2]
		const uintrhCg5ub = BigInt("1318")
		const address2l5tey = accounts[1]
		const uintL5nbIm3 = BigInt("129")
		const addressmgg7IvF = accounts[1]
		const boolcke8vX7 = await WOLFdqS8ahI.approveAndCall.call(addressgqEUJds, uintrkejhBX, {from: accounts[0]});
		const boolLUSxQd6 = await WOLFdqS8ahI.transfer.call(addressaTgEKF, uintkGGqxcN, {from: accounts[0]});
//		const boolELGf800 = await WOLFdqS8ahI.transferFrom.call(addressnO5ZS0W, addresscnArF43, uintJPmzoku, {from: accounts[0]});
//		const boolorx9q6 = await WOLFdqS8ahI.approve.call(addresstLFSKU, uintQhAUkJ, {from: accounts[4]});
//		const boolvom7x9 = await WOLFdqS8ahI.approve.call(addressJNnaTuT, uintSMRDgXv, {from: accounts[5]});
//		const boolQDm5FBH = await WOLFdqS8ahI.approveAndCall.call(addressDbL01K5, uintPYLEXEh, {from: accounts[1]});
//		const boolTylaghH = await WOLFdqS8ahI.approveAndCall.call(addressTWZGSvQ, uintlIOWoLa, {from: accounts[1]});
//		const boolpzGjy3T = await WOLFdqS8ahI.approveAndCall.call(addresssOb1YB, uintbpYsgXw, {from: accounts[1]});
//		const boolIgebyOc = await WOLFdqS8ahI.transfer.call(address2l5tey, uintrhCg5ub, {from: accounts[3]});
//		const boolFdnmTau = await WOLFdqS8ahI.approveAndCall.call(addressmgg7IvF, uintL5nbIm3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLUSxQd6, true)
		assert.equal(boolcke8vX7, true)
		await expect(WOLFdqS8ahI.transferFrom.call(addressnO5ZS0W, addresscnArF43, uintJPmzoku, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringV610dJc = "zpc2rTCUFk0I8Qh3HUTNIaR96i88YaDNi49iRemNsAhujwtGpTUhiw88LDPLbYIcnSnyWH2W1WMyV"
		const stringF20FpEE = "cfQTSAf0ddPJKoTpAhevJ1xrNq"
		const uintrnUsDbu = BigInt("1510")
		const WOLFPrrz1zv = await WOLF.new(stringV610dJc, stringF20FpEE, uintrnUsDbu, {from: accounts[2]});
		const uintnGaAFsr = BigInt("822")
		const addressHOManCM = "0x00000000000000000000000000000000000000-1"
//		const boolO8y41Ft = await WOLFPrrz1zv.approve.call(addressHOManCM, uintnGaAFsr, {from: accounts[2]});

		await expect(WOLFPrrz1zv.approve.call(addressHOManCM, uintnGaAFsr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})