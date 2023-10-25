const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringiyIsyZ = "WGK6hP2CNGOGXqVKoOgJrKKfw"
		const stringTAlbPqJ = "aeGnfjMmKee1Eu8Rmqlvm6kmbpVtY8ePsxzMDZxPCked94QCuaPlOjLl9macawq"
		const uinti1IuZ46 = BigInt("1287")
		const Rexonatmn760r = await Rexona.new(stringiyIsyZ, stringTAlbPqJ, uinti1IuZ46, {from: accounts[5]});
		const uintQDnwQR = BigInt("939")
		const addressx813kux = accounts[1]
		const uintZ82E3Xd = BigInt("1375")
		const addressvdc2Zrp = accounts[5]
		const addressbImOwD = accounts[3]
		const uintftX8wko = BigInt("92")
		const addressgrUxH2S = accounts[0]
		const uintfgxJIJV = BigInt("1260")
		const addressTqoBuHl = accounts[4]
		const addressZtLcgcH = accounts[0]
		const uinth93Sxyh = BigInt("167")
		const addressbOqSiCr = "0x0000000000000000000000000000000000000001"
//		const boolFBLDZw7 = await Rexonatmn760r.approveAndCall.call(addressx813kux, uintQDnwQR, {from: accounts[4]});
//		const boolLlYnc99 = await Rexonatmn760r.transferFrom.call(addressbImOwD, addressvdc2Zrp, uintZ82E3Xd, {from: accounts[0]});
//		const boolAXLI9dy = await Rexonatmn760r.approveAndCall.call(addressgrUxH2S, uintftX8wko, {from: accounts[2]});
//		const booljxDOvHd = await Rexonatmn760r.transferFrom.call(addressZtLcgcH, addressTqoBuHl, uintfgxJIJV, {from: accounts[3]});
//		const boolnlr80u7 = await Rexonatmn760r.approveAndCall.call(addressbOqSiCr, uinth93Sxyh, {from: accounts[2]});

		await expect(Rexonatmn760r.approveAndCall.call(addressx813kux, uintQDnwQR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringzfRe5LQ = "fjDizD3GSYBNFXz41"
		const stringnekPo26 = "ulveOVlcNrprd1fQVyxVtltrpwBXUfulPhIGV"
		const uintKkjryIX = BigInt("1580")
		const RexonaTvWny4 = await Rexona.new(stringzfRe5LQ, stringnekPo26, uintKkjryIX, {from: accounts[2]});
		const uintKmdfyU = BigInt("98")
		const addressUDKYR8Y = accounts[0]
		const addressxSEoURA = accounts[2]
		const uintZAUBUDF = BigInt("1569")
		const addressTzsZuMA = accounts[2]
		const addressOwD0nz = accounts[3]
		const uintzRgo6E = BigInt("2009")
		const addressA842o0w = accounts[4]
		const addressBUW8D5 = accounts[0]
		const uintMKXopgc = BigInt("1847")
		const addresskxB0H3 = accounts[3]
//		const boolOiSE5h2 = await RexonaTvWny4.transferFrom.call(addressxSEoURA, addressUDKYR8Y, uintKmdfyU, {from: accounts[4]});
//		const boolwzP1Y5x = await RexonaTvWny4.transferFrom.call(addressOwD0nz, addressTzsZuMA, uintZAUBUDF, {from: accounts[2]});
//		const boolvv5fNq6 = await RexonaTvWny4.transferFrom.call(addressBUW8D5, addressA842o0w, uintzRgo6E, {from: accounts[5]});
//		const boolM8MfsW1 = await RexonaTvWny4.approve.call(addresskxB0H3, uintMKXopgc, {from: accounts[5]});

		await expect(RexonaTvWny4.transferFrom.call(addressxSEoURA, addressUDKYR8Y, uintKmdfyU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringzEc0f0d = "zbOWIu1uiApMznvogmpMIThE8YB5VHwfvvetGgMUMBOnu6UrTXH6lDnCTTOoQ24izO6SdboF6yYLOS6XR28DDGCaA3nRODgvy5"
		const stringBHbr90J = "MVG7L7Q41ikKBwrcN2lKiN5rBkt9EvY1p"
		const uintN1CE5Hh = BigInt("1746")
		const RexonaCwyPlgS = await Rexona.new(stringzEc0f0d, stringBHbr90J, uintN1CE5Hh, {from: accounts[0]});
		const addressO6GnQpd = accounts[2]
		const uintJkwy2t6 = BigInt("1480")
		const addressGyKSzXC = accounts[1]
		const uintO8LVCST = BigInt("1751")
		const addressMU5IJih = accounts[2]
		const uintl9nKkZb = BigInt("345")
		const addresscMv0ulm = accounts[1]
		const uintHIEtS9R = BigInt("1909")
		const addresskWkoFky = accounts[4]
		const uintUPmskuS = BigInt("1014")
		const addressYwfwIGx = accounts[1]
		const addresskjJnsv = accounts[1]
		const boolO6DFdz = await RexonaCwyPlgS.transferownership.call(addressO6GnQpd, {from: accounts[0]});
//		const boolkMJDDE1 = await RexonaCwyPlgS.approveAndCall.call(addressGyKSzXC, uintJkwy2t6, {from: accounts[4]});
//		const boolGazKf5I = await RexonaCwyPlgS.approve.call(addressMU5IJih, uintO8LVCST, {from: accounts[1]});
//		const boolt7ikoF4 = await RexonaCwyPlgS.transfer.call(addresscMv0ulm, uintl9nKkZb, {from: accounts[3]});
//		const boolbxH4arx = await RexonaCwyPlgS.transfer.call(addresskWkoFky, uintHIEtS9R, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwS7qqm3 = await RexonaCwyPlgS.transferFrom.call(addresskjJnsv, addressYwfwIGx, uintUPmskuS, {from: accounts[4]});

		assert.equal(boolO6DFdz, true)
		await expect(RexonaCwyPlgS.approveAndCall.call(addressGyKSzXC, uintJkwy2t6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const strings7HfKuC = "Kprlr9NhDcXiMXbXPDfWVrFNH8zTronkW9u7KAKo81Ashwa"
		const stringMtcyomS = "VeqXP3tSSalT0AUuSzhkgo6CJpnxxyqG4NxaLyUL105n1HP4o3OxsNbccRy7HcDzdJ9RCI"
		const uinttBGYJ2 = BigInt("391")
		const RexonaBWTvSji = await Rexona.new(strings7HfKuC, stringMtcyomS, uinttBGYJ2, {from: accounts[4]});
		const uintVcyW7B = BigInt("802")
		const addressNAH4I4L = accounts[0]
		const uintwzVmarW = BigInt("289")
		const addressUWFXPTh = accounts[2]
		const addressU39KJ0 = accounts[5]
		const uintE6SFRc = BigInt("1445")
		const addressjwUjOA = accounts[1]
		const addresszetPY6i = accounts[4]
		const uintooJDVWD = BigInt("1048")
		const addressBEtojbI = accounts[1]
		const uintxxH3BOc = BigInt("1135")
		const addresspmDkTgO = accounts[0]
		const booli5eVzmN = await RexonaBWTvSji.approve.call(addressNAH4I4L, uintVcyW7B, {from: accounts[5]});
//		const boolXEA7b8C = await RexonaBWTvSji.transferFrom.call(addressU39KJ0, addressUWFXPTh, uintwzVmarW, {from: accounts[0]});
//		const boolyOQwFMP = await RexonaBWTvSji.transferFrom.call(addresszetPY6i, addressjwUjOA, uintE6SFRc, {from: accounts[4]});
//		const boolWLEA3MA = await RexonaBWTvSji.approve.call(addressBEtojbI, uintooJDVWD, {from: accounts[0]});
//		const boolj23Ezwx = await RexonaBWTvSji.transfer.call(addresspmDkTgO, uintxxH3BOc, {from: accounts[3]});

		assert.equal(booli5eVzmN, true)
		await expect(RexonaBWTvSji.transferFrom.call(addressU39KJ0, addressUWFXPTh, uintwzVmarW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringJkamje5 = "if"
		const stringBHZvQwi = "GqvKuRj4Cvw9gcjaotifJmIfR4AxPDbSekOsfaxstMYvVtRtiYEMsSEoUM81SuchDplzGwfOEaSwGBj4hB"
		const uintaVlOE2 = BigInt("165")
		const RexonasXphJNb = await Rexona.new(stringJkamje5, stringBHZvQwi, uintaVlOE2, {from: "0x0000000000000000000000000000000000000001"});
		const uintkEiQvI3 = BigInt("886")
		const addressVESllgo = "0x0000000000000000000000000000000000000001"
		const addressgCnWjzV = accounts[0]
		const uintP1uhkeD = BigInt("907")
		const addressK2OoPOM = accounts[0]
		const uintZzegDYQ = BigInt("2035")
		const addressBYkvKQa = accounts[3]
		const uintB6dWpA0 = BigInt("1410")
		const addresset7xQls = accounts[0]
		const uintIWTBrF = BigInt("1006")
		const addressw2Ntnbs = accounts[3]
		const boolxRNMyzI = await RexonasXphJNb.transferFrom.call(addressgCnWjzV, addressVESllgo, uintkEiQvI3, {from: accounts[1]});
		const booltIdvCih = await RexonasXphJNb.approve.call(addressK2OoPOM, uintP1uhkeD, {from: "0x0000000000000000000000000000000000000001"});
		const boollUwwoZA = await RexonasXphJNb.approve.call(addressBYkvKQa, uintZzegDYQ, {from: accounts[0]});
		const boolq84HAa9 = await RexonasXphJNb.approve.call(addresset7xQls, uintB6dWpA0, {from: accounts[2]});
		const boolxzZ0Dl = await RexonasXphJNb.approveAndCall.call(addressw2Ntnbs, uintIWTBrF, {from: accounts[0]});
	});

	it('test for Rexona', async () => {
		const stringNClQNTa = "gDxVmY8mJ5rj4unmsUCsIs5NOMrvbnAIufOhbLFNW46WyVLSTVUVqITSPEOkI65eHiw9RXfPmiTNDftLwV1jP5eMqvt9fAw"
		const stringhTUQrN4 = "7cotHfDgYn5XfJtSX3vP0US4BdO4RqCdpw6o5rQkrivHQt1qbhmOdKU5DfRH7R0SLEtbZlLbYib2jYLoPX5x4T98A9IJPXeV"
		const uintyzvt6l4 = BigInt("898")
		const Rexonayqkirv = await Rexona.new(stringNClQNTa, stringhTUQrN4, uintyzvt6l4, {from: accounts[4]});
		const uintJkzxzjf = BigInt("1173")
		const addressnKNnKn3 = accounts[0]
		const uintAMLD7hm = BigInt("122")
		const addressJw4LaB = accounts[5]
		const uintF5gPydQ = BigInt("1838")
		const addresscK10ya8 = accounts[0]
//		const booljEuCqcF = await Rexonayqkirv.transfer.call(addressnKNnKn3, uintJkzxzjf, {from: accounts[0]});
//		const boolXAZ13k = await Rexonayqkirv.transfer.call(addressJw4LaB, uintAMLD7hm, {from: accounts[1]});
//		const boolw6S1vkp = await Rexonayqkirv.transfer.call(addresscK10ya8, uintF5gPydQ, {from: accounts[3]});

		await expect(Rexonayqkirv.transfer.call(addressnKNnKn3, uintJkzxzjf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringAcSwS83 = "anoUVYjyyzKpPUhCDTxUFvtEJGv2eSYoWw5uu3tM1yRiBbrM6anRLfMCpDgyasHyYeX9O9ms8odwyc2dlmAQGupCzpM89y142YO"
		const stringyUVSDra = "VJ1omeoKX5r6iq7slSahF5kO5fTdJUAAt3foh1gygFPsbgmInACaY4zkKqrOq4oJRgO"
		const uintrqYqH6G = BigInt("551")
		const RexonaltgbhIl = await Rexona.new(stringAcSwS83, stringyUVSDra, uintrqYqH6G, {from: accounts[4]});
		const uintIdHyMZi = BigInt("1187")
		const addressHgVbrTj = accounts[1]
		const uintlsXlc9 = BigInt("409")
		const addressAN4TrNX = accounts[4]
		const uintef84ZT4 = BigInt("861")
		const addresshaN2cD = accounts[5]
		const uintCXfhDn5 = BigInt("1041")
		const addressmcqlhPM = accounts[5]
		const addresso8EMyQ = "0x0000000000000000000000000000000000000001"
		const boolbFJWB8 = await RexonaltgbhIl.approve.call(addressHgVbrTj, uintIdHyMZi, {from: accounts[3]});
		const boolgu8i0it = await RexonaltgbhIl.transfer.call(addressAN4TrNX, uintlsXlc9, {from: accounts[4]});
		const boolVIAGTFW = await RexonaltgbhIl.approve.call(addresshaN2cD, uintef84ZT4, {from: accounts[5]});
//		const boolmTDCanq = await RexonaltgbhIl.transferFrom.call(addresso8EMyQ, addressmcqlhPM, uintCXfhDn5, {from: accounts[4]});

		assert.equal(boolVIAGTFW, true)
		assert.equal(boolbFJWB8, true)
		assert.equal(boolgu8i0it, true)
		await expect(RexonaltgbhIl.transferFrom.call(addresso8EMyQ, addressmcqlhPM, uintCXfhDn5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringuswNoGZ = "DHJOLr0oYz5JJU4h2n9xbLrAWUZow"
		const string7pieZH = "U5xyB6OtHe8E4xVicwX5WdILY7TmEjDkZwlGH52"
		const uintV7v4sbw = BigInt("98")
		const RexonaKi0Dt9p = await Rexona.new(stringuswNoGZ, string7pieZH, uintV7v4sbw, {from: accounts[3]});
		const uintFB81xMn = BigInt("2029")
		const addressZPQzWto = accounts[0]
		const uintN8FwqnI = BigInt("1201")
		const addresstLrSez3 = accounts[4]
		const uintqax7qLv = BigInt("375")
		const addresst6BYj7Z = accounts[1]
		const addressc22fElc = accounts[1]
		const uintNyCvPG9 = BigInt("1521")
		const addressdcWd5bz = accounts[3]
		const boolnu1Uazx = await RexonaKi0Dt9p.approveAndCall.call(addressZPQzWto, uintFB81xMn, {from: accounts[3]});
//		const boolPFax0lo = await RexonaKi0Dt9p.approveAndCall.call(addresstLrSez3, uintN8FwqnI, {from: accounts[4]});
//		const booluQ4D6ZN = await RexonaKi0Dt9p.transferFrom.call(addressc22fElc, addresst6BYj7Z, uintqax7qLv, {from: accounts[4]});
//		const boolvQOej75 = await RexonaKi0Dt9p.approve.call(addressdcWd5bz, uintNyCvPG9, {from: accounts[1]});

		assert.equal(boolnu1Uazx, true)
		await expect(RexonaKi0Dt9p.approveAndCall.call(addresstLrSez3, uintN8FwqnI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringuswNoGZ = "DHJOLr0oYz5JJU4h2n9xbLrAWUZow"
		const string7pieZH = "U5xyB6OtHe8E4xVicwX5WdILY7TmEjDkZwlGH52"
		const uintscememq = BigInt("98")
		const RexonaKi0Dt9p = await Rexona.new(stringuswNoGZ, string7pieZH, uintscememq, {from: accounts[3]});
		const uintDptPfnY = BigInt("1222")
		const addresssgY1iR = accounts[2]
		const uintWEBzRzX = BigInt("541")
		const addressRmJnpI7 = accounts[1]
		const uintykXC3o = BigInt("0")
		const addressuhigN7F = accounts[3]
		const uintL147YxK = BigInt("954")
		const addresspijpAhb = accounts[0]
		const uintr5vEck8 = BigInt("72")
		const addressNzIA5Wn = "0x0000000000000000000000000000000000000001"
		const boolYPFEzCY = await RexonaKi0Dt9p.approve.call(addresssgY1iR, uintDptPfnY, {from: "0x0000000000000000000000000000000000000001"});
		const boolnu1Uazx = await RexonaKi0Dt9p.approveAndCall.call(addressRmJnpI7, uintWEBzRzX, {from: accounts[3]});
		const boolASjHO0X = await RexonaKi0Dt9p.transfer.call(addressuhigN7F, uintykXC3o, {from: accounts[0]});
//		const boolr4V9AY6 = await RexonaKi0Dt9p.approveAndCall.call(addresspijpAhb, uintL147YxK, {from: accounts[0]});
//		const booliYtYlm4 = await RexonaKi0Dt9p.approveAndCall.call(addressNzIA5Wn, uintr5vEck8, {from: accounts[0]});

		assert.equal(boolASjHO0X, true)
		assert.equal(boolYPFEzCY, true)
		assert.equal(boolnu1Uazx, true)
		await expect(RexonaKi0Dt9p.approveAndCall.call(addresspijpAhb, uintL147YxK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringuswNoGZ = "DHJOLr0oYz5JJU4h2n9xbLrAWUZow"
		const string7pieZH = "U5xyB6OtHe8E4xVicwX5WdILY7TmEjDkZwlGH52"
		const uintNtp4lpo = BigInt("98")
		const RexonaKi0Dt9p = await Rexona.new(stringuswNoGZ, string7pieZH, uintNtp4lpo, {from: accounts[3]});
		const uintcQXSnWB = BigInt("623")
		const addressPPBPrDO = "0x0000000000000000000000000000000000000001"
		const uintM5KSpV = BigInt("0")
		const addresstC1B2sf = accounts[2]
		const uintWJqcqWy = BigInt("488")
		const addressqLVjodU = accounts[3]
		const uintxqQFtjS = BigInt("970")
		const addressDBCLHQO = accounts[0]
		const uintxYkVVSh = BigInt("1814")
		const addressP8OaRco = accounts[4]
		const addressir0BCjR = "0x0000000000000000000000000000000000000001"
		const uintIzmchUP = BigInt("128")
		const addressGBlh8yJ = accounts[4]
		const uintw7Zqzzq = BigInt("1478")
		const addressP5gW1jZ = accounts[4]
		const boolxjmNuB = await RexonaKi0Dt9p.approve.call(addressPPBPrDO, uintcQXSnWB, {from: accounts[1]});
		const boolitLt5qo = await RexonaKi0Dt9p.approveAndCall.call(addresstC1B2sf, uintM5KSpV, {from: accounts[3]});
		const boolnu1Uazx = await RexonaKi0Dt9p.approveAndCall.call(addressqLVjodU, uintWJqcqWy, {from: accounts[3]});
		const boolKYaZrAr = await RexonaKi0Dt9p.approve.call(addressDBCLHQO, uintxqQFtjS, {from: accounts[4]});
//		const boolm53WRQ6 = await RexonaKi0Dt9p.transferFrom.call(addressir0BCjR, addressP8OaRco, uintxYkVVSh, {from: accounts[1]});
//		const boolg4yKtE = await RexonaKi0Dt9p.transfer.call(addressGBlh8yJ, uintIzmchUP, {from: accounts[4]});
//		const boolXDIN71 = await RexonaKi0Dt9p.approve.call(addressP5gW1jZ, uintw7Zqzzq, {from: accounts[3]});

		assert.equal(boolKYaZrAr, true)
		assert.equal(boolitLt5qo, true)
		assert.equal(boolnu1Uazx, true)
		assert.equal(boolxjmNuB, true)
		await expect(RexonaKi0Dt9p.transferFrom.call(addressir0BCjR, addressP8OaRco, uintxYkVVSh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})