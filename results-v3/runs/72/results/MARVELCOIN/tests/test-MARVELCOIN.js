const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintBfe6k4m = BigInt("1762")
		const stringX71aB66 = "X6Wi7vNiTjup6to7ZB3kFgPbN25pG4FNX68IjwxnIZWxqg3L63GxfKWOKQKEYf46YoxoO7oq77ThvojaUpqsauern1VKfd65w"
		const stringyUj9M3n = "kmvntvaUKfBi929yTKX39Ubrp7OnmgrnebYHrmX75o"
		const MARVELCOINnqiln26 = await MARVELCOIN.new(uintBfe6k4m, stringX71aB66, stringyUj9M3n, {from: accounts[2]});
		const uintOyOwzt = BigInt("1740")
		const addressiTkrzZt = accounts[3]
		const byteCc8Vhn3 = "0x1a16151b030d1d1009121805160f090b18021e1b1b10101713"
		const uintiTAodld = BigInt("685")
		const addressUwEllev = accounts[1]
		const uintVG8JU65 = BigInt("1504")
		const uintFGc5jY4 = BigInt("997")
		const addressWJ8USBD = accounts[4]
		const uintcj92aIX = BigInt("1288")
		const addressg3nIM0K = accounts[2]
		const addressSBrVnh = accounts[3]
		const byteXRtgjaj = "0x060f011d1116"
		const uintJ2Hlqf = BigInt("1590")
		const addresssWPpnP = accounts[5]
		const boolSeouL7q = await MARVELCOINnqiln26.burnFrom.call(addressiTkrzZt, uintOyOwzt, {from: accounts[0]});
		const booltdptzyg = await MARVELCOINnqiln26.approveAndCall.call(addressUwEllev, uintiTAodld, byteCc8Vhn3, {from: accounts[4]});
		const boollQuQn80 = await MARVELCOINnqiln26.burn.call(uintVG8JU65, {from: accounts[0]});
		const boolOA5Kv7z = await MARVELCOINnqiln26.approve.call(addressWJ8USBD, uintFGc5jY4, {from: accounts[4]});
		const boolFPRzDxC = await MARVELCOINnqiln26.transferFrom.call(addressSBrVnh, addressg3nIM0K, uintcj92aIX, {from: accounts[3]});
		const boolrI8UpUy = await MARVELCOINnqiln26.approveAndCall.call(addresssWPpnP, uintJ2Hlqf, byteXRtgjaj, {from: accounts[0]});

		await expect(MARVELCOINnqiln26.burnFrom.call(addressiTkrzZt, uintOyOwzt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinthHdnoeh = BigInt("831")
		const stringYUuG3Xp = "iLCJRPPPcSABoNgPdOHWy46h8wjTnDY2RhGfqlb4kb6fAPJvXfbAz93zCX8bkA"
		const stringpUpztaa = "7k9ozaqFTKxU5xoTSgKKKMo3QsbRNNYKWGN2amadZsnJcTEyNanVIJW6Jo"
		const MARVELCOINAY80RUa = await MARVELCOIN.new(uinthHdnoeh, stringYUuG3Xp, stringpUpztaa, {from: accounts[3]});
		const byteXxpwDG = "0x040a050e041f010a021e0e050a0b11121b0b170d040b"
		const uintFJgGYzw = BigInt("80")
		const addressSj0L6N = accounts[0]
		const uintSY2X8dw = BigInt("1728")
		const addressENGM1N6 = accounts[4]
		const addressohlSKBD = "0x0000000000000000000000000000000000000001"
		const uintdSAftKQ = BigInt("1803")
		const addresszzi1pEY = accounts[2]
		const addressW2QGmxg = accounts[4]
		const uintMaLK77o = BigInt("1639")
		const addressxw1srvF = accounts[3]
		const boolPAw7ZXi = await MARVELCOINAY80RUa.approveAndCall.call(addressSj0L6N, uintFJgGYzw, byteXxpwDG, {from: accounts[4]});
		const boolxotqo8h = await MARVELCOINAY80RUa.transferFrom.call(addressohlSKBD, addressENGM1N6, uintSY2X8dw, {from: accounts[0]});
		const boolTz8lyUd = await MARVELCOINAY80RUa.transferFrom.call(addressW2QGmxg, addresszzi1pEY, uintdSAftKQ, {from: accounts[3]});
		const booltMwyTpy = await MARVELCOINAY80RUa.transfer.call(addressxw1srvF, uintMaLK77o, {from: accounts[4]});

		await expect(MARVELCOINAY80RUa.approveAndCall.call(addressSj0L6N, uintFJgGYzw, byteXxpwDG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintAJDs6OV = BigInt("286")
		const stringLZrZAfs = "9VOmt1KMct11sHbwOJjFtHffLeXEU2dBFR6p"
		const stringEJ2fTQL = "qm3JohzQk0SjMUTywFgOyWaJWalGyanHOmrXJxEOVOfP"
		const MARVELCOINoklz5RK = await MARVELCOIN.new(uintAJDs6OV, stringLZrZAfs, stringEJ2fTQL, {from: accounts[5]});
		const uintXSVV5TH = BigInt("180")
		const addressxLcvHJ = accounts[1]
		const addressZYX9Vhd = accounts[0]
		const uintVyoc5qi = BigInt("121")
		const uintTF7lp1R = BigInt("1907")
		const addressZfdOixM = accounts[3]
		const uintNYgzJKZ = BigInt("853")
		const addressiE4Qc2b = accounts[0]
		const uintWaIDoTo = BigInt("93")
		const boolUvUw7lW = await MARVELCOINoklz5RK.transferFrom.call(addressZYX9Vhd, addressxLcvHJ, uintXSVV5TH, {from: accounts[1]});
		const boolcFY4PWR = await MARVELCOINoklz5RK.burn.call(uintVyoc5qi, {from: accounts[3]});
		const boolODpHk9T = await MARVELCOINoklz5RK.approve.call(addressZfdOixM, uintTF7lp1R, {from: accounts[1]});
		const boolbx3oqc4 = await MARVELCOINoklz5RK.transfer.call(addressiE4Qc2b, uintNYgzJKZ, {from: accounts[5]});
		const boolFD1HOjn = await MARVELCOINoklz5RK.burn.call(uintWaIDoTo, {from: accounts[4]});

		await expect(MARVELCOINoklz5RK.transferFrom.call(addressZYX9Vhd, addressxLcvHJ, uintXSVV5TH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintVDKRyep = BigInt("1189")
		const stringkZv3Fsc = "4EDPVm7axFnPhWY79nvon9LlSqr2QUC77yhOQlKT6bwwHHFyTdkvuricfxh1P4huuWl2"
		const stringG2uqCiZ = "ghoMoTYWu9Ja8sOI6tgptwhc3ttSB4tX1OkNL8NNEnZIEnVCMhy5QYcpoOlVU"
		const MARVELCOINXobjtSZ = await MARVELCOIN.new(uintVDKRyep, stringkZv3Fsc, stringG2uqCiZ, {from: accounts[0]});
		const uintnPREXGg = BigInt("317")
		const uintaUNxwAw = BigInt("480")
		const address4aOZBC = accounts[0]
		const uinteG6jdJ = BigInt("253")
		const addresswKql0vy = accounts[5]
		const uintptjS5sh = BigInt("1447")
		const addressaCt6pwk = accounts[4]
		const uintFrEDNRo = BigInt("1332")
		const uintHXEU87E = BigInt("2042")
		const addressdKuH97 = accounts[5]
		const boolfAgAoyJ = await MARVELCOINXobjtSZ.burn.call(uintnPREXGg, {from: accounts[5]});
		const boolGepCixT = await MARVELCOINXobjtSZ.approve.call(address4aOZBC, uintaUNxwAw, {from: accounts[1]});
		const boolgi5hbZG = await MARVELCOINXobjtSZ.approve.call(addresswKql0vy, uinteG6jdJ, {from: accounts[3]});
		const boolNVbpA5s = await MARVELCOINXobjtSZ.transfer.call(addressaCt6pwk, uintptjS5sh, {from: "0x0000000000000000000000000000000000000001"});
		const boolwiEL4qp = await MARVELCOINXobjtSZ.burn.call(uintFrEDNRo, {from: accounts[2]});
		const boolTjSfTqY = await MARVELCOINXobjtSZ.burnFrom.call(addressdKuH97, uintHXEU87E, {from: accounts[2]});

		await expect(MARVELCOINXobjtSZ.burn.call(uintnPREXGg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintx2Jnca8 = BigInt("1189")
		const stringkZv3Fsc = "4EDPVm7axFnPhWY79nvon9LlSqr2QUC77yhOQlKT6bwwHHFyTdkvuricfxh1P4huuWl2"
		const stringG2uqCiZ = "ghoMoTYWu9Ja8sOI6tgptwhc3ttSB4tX1OkNL8NNEnZIEnVCMhy5QYcpoOlVU"
		const MARVELCOINXobjtSZ = await MARVELCOIN.new(uintx2Jnca8, stringkZv3Fsc, stringG2uqCiZ, {from: accounts[0]});
		const uinttTGgqP6 = BigInt("480")
		const addressQtWXuHS = accounts[0]
		const uintyW56b6T = BigInt("253")
		const address2sIDLV = accounts[5]
		const uintPzZrfhU = BigInt("1447")
		const addressDptoX1g = accounts[4]
		const uintJu3aWDK = BigInt("1332")
		const uintgTygn4T = BigInt("2042")
		const addresskdTepbd = accounts[6]
		const boolGepCixT = await MARVELCOINXobjtSZ.approve.call(addressQtWXuHS, uinttTGgqP6, {from: accounts[1]});
		const boolgi5hbZG = await MARVELCOINXobjtSZ.approve.call(address2sIDLV, uintyW56b6T, {from: accounts[3]});
		const boolNVbpA5s = await MARVELCOINXobjtSZ.transfer.call(addressDptoX1g, uintPzZrfhU, {from: "0x0000000000000000000000000000000000000001"});
		const boolwiEL4qp = await MARVELCOINXobjtSZ.burn.call(uintJu3aWDK, {from: accounts[2]});
		const boolTjSfTqY = await MARVELCOINXobjtSZ.burnFrom.call(addresskdTepbd, uintgTygn4T, {from: accounts[2]});

		assert.equal(boolGepCixT, true)
		assert.equal(boolgi5hbZG, true)
		await expect(MARVELCOINXobjtSZ.transfer.call(addressDptoX1g, uintPzZrfhU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintrkNvORx = BigInt("272")
		const stringseVOlmk = "tAxgaasB"
		const stringdvGxaJI = "YWrQjJfAfeGjaGyb"
		const MARVELCOINlnTWcR1 = await MARVELCOIN.new(uintrkNvORx, stringseVOlmk, stringdvGxaJI, {from: accounts[4]});
		const uintI2xNlIM = BigInt("589")
		const uintIng5Zuh = BigInt("1270")
		const addressG3qaXW9 = accounts[4]
		const uintxHWeYEI = BigInt("500")
		const addresspA0CUZi = accounts[3]
		const addressn2FTZ5u = accounts[5]
		const uintdIVhwA9 = BigInt("1662")
		const addressRiEoX59 = accounts[1]
		const addressYiWpxM = accounts[3]
		const uintmew5PqQ = BigInt("249")
		const addressaaPmZ96 = accounts[4]
		const bool8OiwET = await MARVELCOINlnTWcR1.burn.call(uintI2xNlIM, {from: accounts[4]});
		const boolEzottoo = await MARVELCOINlnTWcR1.transfer.call(addressG3qaXW9, uintIng5Zuh, {from: accounts[5]});
		const boolnV5jWPP = await MARVELCOINlnTWcR1.transferFrom.call(addressn2FTZ5u, addresspA0CUZi, uintxHWeYEI, {from: accounts[2]});
		const boolCmhcClX = await MARVELCOINlnTWcR1.transferFrom.call(addressYiWpxM, addressRiEoX59, uintdIVhwA9, {from: accounts[5]});
		const boolRJfy6El = await MARVELCOINlnTWcR1.transfer.call(addressaaPmZ96, uintmew5PqQ, {from: accounts[3]});

		assert.equal(bool8OiwET, true)
		await expect(MARVELCOINlnTWcR1.transfer.call(addressG3qaXW9, uintIng5Zuh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintQ59Zyex = BigInt("1155")
		const stringSWQkCGT = "z3owarwhBotK5pd62OqyvFurbT7uHwaybs5a5xt2F0t5LdGa2txToiuELCaEjFoT7cmCpBVTqBoolKvFJbfn5TFAyDLIv244Y"
		const string723w0D = "7hppyu9GVPv7vpuVwS152dnM5PtIokclfOIJLSnihSN4OzCVbnAufbAPFHWSGN8IRcqUNEt4BVpWKsKbEUYWE4t5wmkwG6UUK"
		const MARVELCOINlnhiDGX = await MARVELCOIN.new(uintQ59Zyex, stringSWQkCGT, string723w0D, {from: accounts[0]});
		const uintDSxDsnw = BigInt("1387")
		const addressEJaM8Ux = accounts[0]
		const bytePBNGIzc = "0x1a050c1f"
		const uintBbTp5YY = BigInt("1281")
		const addressrKT0B3n = accounts[2]
		const uintokin5By = BigInt("1567")
		const addressrq6WFSX = accounts[3]
		const boolj1qAa5 = await MARVELCOINlnhiDGX.burnFrom.call(addressEJaM8Ux, uintDSxDsnw, {from: accounts[2]});
		const boolDBNGq2f = await MARVELCOINlnhiDGX.approveAndCall.call(addressrKT0B3n, uintBbTp5YY, bytePBNGIzc, {from: accounts[4]});
		const booltTSwj9 = await MARVELCOINlnhiDGX.transfer.call(addressrq6WFSX, uintokin5By, {from: accounts[0]});

		await expect(MARVELCOINlnhiDGX.burnFrom.call(addressEJaM8Ux, uintDSxDsnw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintPplAdgw = BigInt("815")
		const stringA3StSzK = "dTxAAc4V9N3zdrswwSF6I3NQYaG1iEb4S2h786av"
		const stringKm6g3XM = "1rh5REuFP63SdZWC2xideyWC5wmkN1s8iwMNZnjRJXndFm3nL1u8MRcmx2fqCe5aJdKlLA84va3o7KTE7"
		const MARVELCOINAVXenJ = await MARVELCOIN.new(uintPplAdgw, stringA3StSzK, stringKm6g3XM, {from: "0x0000000000000000000000000000000000000001"});
		const uintSbryExp = BigInt("56")
		const addressQt7g9at = accounts[1]
		const addressmmwz1WP = accounts[2]
		const uintGG7zheV = BigInt("1553")
		const addressDpXIZRd = "0x0000000000000000000000000000000000000001"
		const uintLdl0PHS = BigInt("1416")
		const addressJa0Cr4s = accounts[4]
		const addressEURhuXP = accounts[2]
		const uintJlNRPqD = BigInt("1341")
		const bytekMr13SS = "0x171c1e0a1f1d0e0b0907020e1c111b0e1406071e1a0c1b1c1f"
		const uintqEJnGO = BigInt("596")
		const addressUKDkRUa = accounts[0]
		const byteCk4eU63 = "0x020b0509060805090b100b11031c131815121a11011907140f1402100f0a19"
		const uintJhcCKjF = BigInt("1077")
		const addresss2AVxYk = accounts[3]
		const boolNMiPw3m = await MARVELCOINAVXenJ.transferFrom.call(addressmmwz1WP, addressQt7g9at, uintSbryExp, {from: accounts[2]});
		const boolQ7grRa7 = await MARVELCOINAVXenJ.approve.call(addressDpXIZRd, uintGG7zheV, {from: accounts[3]});
		const boolVZ5uHkT = await MARVELCOINAVXenJ.transferFrom.call(addressEURhuXP, addressJa0Cr4s, uintLdl0PHS, {from: accounts[2]});
		const boolsAlOcyu = await MARVELCOINAVXenJ.burn.call(uintJlNRPqD, {from: "0x0000000000000000000000000000000000000001"});
		const boolHRqhhY = await MARVELCOINAVXenJ.approveAndCall.call(addressUKDkRUa, uintqEJnGO, bytekMr13SS, {from: accounts[4]});
		const boolvfFm4T5 = await MARVELCOINAVXenJ.approveAndCall.call(addresss2AVxYk, uintJhcCKjF, byteCk4eU63, {from: accounts[0]});
	});

	it('test for MARVELCOIN', async () => {
		const uintA7a0fa3 = BigInt("1527")
		const stringjiQRJy = "xSTGuBzQQSn9kUAByX75R"
		const stringWH0U9H = "OiolO77QmCeqTb6vskH2VkeTD4794CrtxdgCpOhPt33NJrtB5h62aS3k9XoGa2YgVAH9irDXqq2XTgMyijMG"
		const MARVELCOINIaBqBn5 = await MARVELCOIN.new(uintA7a0fa3, stringjiQRJy, stringWH0U9H, {from: accounts[0]});
		const uintZTyirws = BigInt("1555")
		const addressNTdmTLc = "0x0000000000000000000000000000000000000001"
		const uintiXV6CG = BigInt("10")
		const addressi2xHKTx = accounts[4]
		const uintoVdxehz = BigInt("827")
		const uintEdjwrv9 = BigInt("761")
		const addressEtHywq = "0x0000000000000000000000000000000000000001"
		const uintAisJ1wt = BigInt("1907")
		const addressI0KrgWX = accounts[1]
		const boolo8O2AgF = await MARVELCOINIaBqBn5.approve.call(addressNTdmTLc, uintZTyirws, {from: accounts[3]});
		const boolMmUo8MS = await MARVELCOINIaBqBn5.transfer.call(addressi2xHKTx, uintiXV6CG, {from: accounts[0]});
		const boolVG89f9J = await MARVELCOINIaBqBn5.burn.call(uintoVdxehz, {from: accounts[0]});
		const boolT4WV36V = await MARVELCOINIaBqBn5.transfer.call(addressEtHywq, uintEdjwrv9, {from: accounts[3]});
		const boolyLfDIQ1 = await MARVELCOINIaBqBn5.transfer.call(addressI0KrgWX, uintAisJ1wt, {from: accounts[2]});

		assert.equal(boolMmUo8MS, true)
		assert.equal(boolVG89f9J, true)
		assert.equal(boolo8O2AgF, true)
		await expect(MARVELCOINIaBqBn5.transfer.call(addressEtHywq, uintEdjwrv9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})