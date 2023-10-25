const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringLwqaMwE = "9"
		const stringXmVVWNx = "KtuA8XlVXQtrs5SotyfwV1Lh5O2eiT5Pd8SGIBhiM7KHSReIvrASSRLFbdFTgGX6b4nohXvKLNt8QBMOf2E4ez"
		const uinttQyfdyu = BigInt("923")
		const RexonagedarAi = await Rexona.new(stringLwqaMwE, stringXmVVWNx, uinttQyfdyu, {from: accounts[2]});
		const uintifSrAKJ = BigInt("110")
		const addresslQrDoCD = accounts[0]
		const uintbsKe5Ax = BigInt("306")
		const addressdA65CZ8 = accounts[1]
		const uintSUVI6ob = BigInt("1845")
		const addressAqXp3h9 = accounts[2]
		const addressWm8PcFP = accounts[4]
		const boolS6JeYli = await RexonagedarAi.approve.call(addresslQrDoCD, uintifSrAKJ, {from: "0x0000000000000000000000000000000000000001"});
		const boollNOGbzR = await RexonagedarAi.approve.call(addressdA65CZ8, uintbsKe5Ax, {from: accounts[0]});
		const boolJmgLrl = await RexonagedarAi.approve.call(addressAqXp3h9, uintSUVI6ob, {from: accounts[2]});
		const boolkZsjPXe = await RexonagedarAi.transferownership.call(addressWm8PcFP, {from: accounts[2]});

		assert.equal(boolJmgLrl, true)
		assert.equal(boolS6JeYli, true)
		assert.equal(boolkZsjPXe, true)
		assert.equal(boollNOGbzR, true)
	});

	it('test for Rexona', async () => {
		const stringi9jFW8D = "SofisHosg9HOvPkfVZInfagbWGavEKwazVFu"
		const stringwuY0bQC = "C6jk7Uf7Wa2wE0poF0nkgcjQYv8UsB"
		const uint8fgYrB = BigInt("1262")
		const RexonaHbW8Osm = await Rexona.new(stringi9jFW8D, stringwuY0bQC, uint8fgYrB, {from: accounts[3]});
		const uintFnyQOVX = BigInt("919")
		const addressb7802bo = accounts[3]
		const uintB2Mb49g = BigInt("1962")
		const addressIG88oyK = accounts[1]
		const uintMBwLX1V = BigInt("181")
		const addressMj1Cf5K = accounts[2]
		const addressDxn9MF9 = accounts[3]
		const boolWw8IrO8 = await RexonaHbW8Osm.approve.call(addressb7802bo, uintFnyQOVX, {from: accounts[3]});
		const boolFrrZDDp = await RexonaHbW8Osm.approveAndCall.call(addressIG88oyK, uintB2Mb49g, {from: accounts[1]});
		const booll64d2gO = await RexonaHbW8Osm.transferFrom.call(addressDxn9MF9, addressMj1Cf5K, uintMBwLX1V, {from: accounts[1]});

		assert.equal(boolWw8IrO8, true)
		await expect(RexonaHbW8Osm.approveAndCall.call(addressIG88oyK, uintB2Mb49g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringLgDjnu7 = "THVU7cwTSo54ARZ2tQlQ2fvKktQH4PACC7IUktWfiBmrQ35JUxFOnbizzvyEPfaXNLObl1RuHbSrvDkq1Bh14McnM7g9HuYU"
		const stringxAHTr7m = "8"
		const uintHskJLSe = BigInt("1308")
		const RexonayAeiduH = await Rexona.new(stringLgDjnu7, stringxAHTr7m, uintHskJLSe, {from: accounts[2]});
		const uintFBkl3jR = BigInt("1371")
		const addressv9dlnl4 = accounts[3]
		const uintLCpGbKf = BigInt("1477")
		const addressVzUynyY = accounts[2]
		const addresslnw2xLU = accounts[1]
		const uintvGZ7CtJ = BigInt("432")
		const addressvGTXKMU = accounts[1]
		const addressaz7crGr = accounts[1]
		const uintYYX6so6 = BigInt("330")
		const addressdpoSdJF = accounts[0]
		const uintYVucQCN = BigInt("1610")
		const addressLbGvOq = accounts[1]
		const addressqjIgP8R = accounts[3]
		const booloFZfxFV = await RexonayAeiduH.approve.call(addressv9dlnl4, uintFBkl3jR, {from: accounts[1]});
		const boolTyqgGyl = await RexonayAeiduH.transferFrom.call(addresslnw2xLU, addressVzUynyY, uintLCpGbKf, {from: accounts[3]});
		const boolYAwkqz1 = await RexonayAeiduH.transferFrom.call(addressaz7crGr, addressvGTXKMU, uintvGZ7CtJ, {from: accounts[1]});
		const boolundX4jc = await RexonayAeiduH.approve.call(addressdpoSdJF, uintYYX6so6, {from: accounts[1]});
		const boolzbRtzE = await RexonayAeiduH.transferFrom.call(addressqjIgP8R, addressLbGvOq, uintYVucQCN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booloFZfxFV, true)
		await expect(RexonayAeiduH.transferFrom.call(addresslnw2xLU, addressVzUynyY, uintLCpGbKf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringi9jFW8D = "SofisHosg9HOvPkfVZInfagbWGavEKwazVFu"
		const stringwuY0bQC = "C6jk7Uf7Wa2wE0poF0nkgcjQYv8UsB"
		const uintYOaPvq = BigInt("1262")
		const RexonaHbW8Osm = await Rexona.new(stringi9jFW8D, stringwuY0bQC, uintYOaPvq, {from: accounts[3]});
		const uintOjhLej1 = BigInt("919")
		const addresstamiqZA = accounts[3]
		const uintxBR3KU = BigInt("312")
		const addressiFzGE4y = accounts[0]
		const uintjgbI11t = BigInt("1962")
		const addressVQ8WtNw = accounts[1]
		const uintLp2BuOr = BigInt("181")
		const addressdhfm6wO = accounts[2]
		const addressp4R9Ppb = accounts[3]
		const boolWw8IrO8 = await RexonaHbW8Osm.approve.call(addresstamiqZA, uintOjhLej1, {from: accounts[3]});
		const boolhqrI3B4 = await RexonaHbW8Osm.transfer.call(addressiFzGE4y, uintxBR3KU, {from: "0x0000000000000000000000000000000000000001"});
		const boolFrrZDDp = await RexonaHbW8Osm.approveAndCall.call(addressVQ8WtNw, uintjgbI11t, {from: accounts[1]});
		const booll64d2gO = await RexonaHbW8Osm.transferFrom.call(addressp4R9Ppb, addressdhfm6wO, uintLp2BuOr, {from: accounts[1]});

		assert.equal(boolWw8IrO8, true)
		await expect(RexonaHbW8Osm.transfer.call(addressiFzGE4y, uintxBR3KU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringtLygcwi = "B7J1piKKRvVcNnFgnSHiy5Du84zKHIiLEVZbf6T5EjWSGcXAF5nbP"
		const stringJCggjc5 = "F7fttpwccraNuwboKQVonBaLnOrOpmPGLBwdANs5wWq3mX8pEoQ76FCvx8"
		const uintOdfEGAK = BigInt("1291")
		const RexonauzHxmvc = await Rexona.new(stringtLygcwi, stringJCggjc5, uintOdfEGAK, {from: accounts[3]});
		const uinthPA5Ia = BigInt("1146")
		const addressB2WmNZX = accounts[5]
		const uintYDgsVdK = BigInt("63")
		const addressjVxSpQ2 = accounts[3]
		const addresso1jUFy = accounts[3]
		const uintZQe9Vav = BigInt("130")
		const addressbDwTpgS = accounts[2]
		const uintUcrYhyP = BigInt("1678")
		const addressKsz1zvM = accounts[1]
		const boolzP5jrqt = await RexonauzHxmvc.approveAndCall.call(addressB2WmNZX, uinthPA5Ia, {from: accounts[3]});
		const boolxR5eYsx = await RexonauzHxmvc.transferFrom.call(addresso1jUFy, addressjVxSpQ2, uintYDgsVdK, {from: accounts[0]});
		const boolexnkou = await RexonauzHxmvc.approve.call(addressbDwTpgS, uintZQe9Vav, {from: accounts[2]});
		const boolANav6l = await RexonauzHxmvc.approve.call(addressKsz1zvM, uintUcrYhyP, {from: accounts[0]});

		assert.equal(boolzP5jrqt, true)
		await expect(RexonauzHxmvc.transferFrom.call(addresso1jUFy, addressjVxSpQ2, uintYDgsVdK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringtLygcwi = "B7J1piKKRvVcNnFgnSHiy5Du84zKHIiLEVZbf6T5EjWSGcXAF5nbP"
		const stringJCggjc5 = "F7fttpwccraNuwboKQVonBaLnOrOpmPGLBwdANs5wWq3mX8pEoQ76FCvx8"
		const uintittkvc = BigInt("1291")
		const RexonauzHxmvc = await Rexona.new(stringtLygcwi, stringJCggjc5, uintittkvc, {from: accounts[3]});
		const uintsFBb65p = BigInt("1634")
		const addressnnYKNt1 = accounts[2]
		const uintCietI0F = BigInt("1087")
		const addressqPHaIhw = accounts[3]
		const boolANav6l = await RexonauzHxmvc.approve.call(addressnnYKNt1, uintsFBb65p, {from: accounts[0]});
		const boolkC4zmr7 = await RexonauzHxmvc.transfer.call(addressqPHaIhw, uintCietI0F, {from: accounts[1]});

		assert.equal(boolANav6l, true)
		await expect(RexonauzHxmvc.transfer.call(addressqPHaIhw, uintCietI0F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringtLygcwi = "B7J1piKKRvVcNnFgnSHiy5Du84zKHIiLEVZbf6T5EjWSGcXAF5nbP"
		const stringJCggjc5 = "F7fttpwccraNuwboKQVonBaLnOrOpmPGLBwdANs5wWq3mX8pEoQ76FCvx8"
		const uintK20QPth = BigInt("1291")
		const RexonauzHxmvc = await Rexona.new(stringtLygcwi, stringJCggjc5, uintK20QPth, {from: accounts[3]});
		const uintKPGIlay = BigInt("0")
		const addressZXk6DJk = accounts[3]
		const addressLcEPCAO = accounts[3]
		const boolxR5eYsx = await RexonauzHxmvc.transferFrom.call(addressLcEPCAO, addressZXk6DJk, uintKPGIlay, {from: accounts[0]});

		assert.equal(boolxR5eYsx, true)
	});

	it('test for Rexona', async () => {
		const stringLdtCDX2 = "MAbsmJej28IWiYqEXjD1sjnJNl5uG0OiEZxT"
		const stringcL8E98Q = "fMAiiJ7JXcczEq40GIo6RBFhL4r26j"
		const uintjq64UHi = BigInt("25")
		const RexonajhWPyep = await Rexona.new(stringLdtCDX2, stringcL8E98Q, uintjq64UHi, {from: "0x0000000000000000000000000000000000000001"});
		const uintJhNYjj2 = BigInt("1830")
		const addressvRbS79k = accounts[0]
		const uintuBmc4w = BigInt("656")
		const addressUJtXDon = accounts[0]
		const uinta2yVvnT = BigInt("802")
		const addressiY7WAmn = accounts[4]
		const addressGoGsy5W = accounts[2]
		const uintI8bjaeO = BigInt("1896")
		const addressgQ2NK5k = "0x0000000000000000000000000000000000000001"
		const addressM5hpqgk = accounts[4]
		const boolvSWCwZ = await RexonajhWPyep.approve.call(addressvRbS79k, uintJhNYjj2, {from: accounts[4]});
		const boologMoz2C = await RexonajhWPyep.approve.call(addressUJtXDon, uintuBmc4w, {from: accounts[2]});
		const boolbbYE3p = await RexonajhWPyep.transferFrom.call(addressGoGsy5W, addressiY7WAmn, uinta2yVvnT, {from: accounts[3]});
		const boolFyT0yM1 = await RexonajhWPyep.transferFrom.call(addressM5hpqgk, addressgQ2NK5k, uintI8bjaeO, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const stringDqbMXJt = "CQpqDK8lFWz"
		const stringJRMb0mN = "y3GYi9Qmz2"
		const uintQIaeZWs = BigInt("834")
		const RexonaiDwoC5S = await Rexona.new(stringDqbMXJt, stringJRMb0mN, uintQIaeZWs, {from: accounts[2]});
		const uintnuKcFIy = BigInt("0")
		const addressJshuiw = accounts[2]
		const boolaYecv9D = await RexonaiDwoC5S.approveAndCall.call(addressJshuiw, uintnuKcFIy, {from: accounts[2]});

		assert.equal(boolaYecv9D, true)
	});
})