const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringP6jNeVN = "AmpjYur8BqMc62cNyyAUTbyRc8ejzw7G4OjUoR6bXNTnDVYTueGTcQrdNg41nGe6VYUtQJixB4zyqgld"
		const stringajUlZ8D = "6IcZOGijBSeuFgbszLhFa7bho0tdOOSUiF9A6HyOM"
		const uintbYGGr1E = BigInt("1599")
		const RexonaoNSAAlL = await Rexona.new(stringP6jNeVN, stringajUlZ8D, uintbYGGr1E, {from: accounts[1]});
		const uintN0kkkFW = BigInt("200")
		const addresst6vbJ8v = accounts[1]
		const uintcDtz0cu = BigInt("60")
		const addresscge2lAN = accounts[5]
		const uintXcddUpz = BigInt("397")
		const addresscJBuGKl = accounts[3]
		const uinterKUNzD = BigInt("1218")
		const addresstn72Ndw = accounts[2]
		const boolEJlVC3k = await RexonaoNSAAlL.approve.call(addresst6vbJ8v, uintN0kkkFW, {from: accounts[0]});
		const booljljGLem = await RexonaoNSAAlL.approveAndCall.call(addresscge2lAN, uintcDtz0cu, {from: accounts[0]});
		const boolrxaCVrI = await RexonaoNSAAlL.approve.call(addresscJBuGKl, uintXcddUpz, {from: accounts[4]});
		const boolRXzfngU = await RexonaoNSAAlL.approveAndCall.call(addresstn72Ndw, uinterKUNzD, {from: accounts[1]});

		assert.equal(boolEJlVC3k, true)
		await expect(RexonaoNSAAlL.approveAndCall.call(addresscge2lAN, uintcDtz0cu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringeaTpzmo = "JXi2G1EXjbN5ejC9QOMeNE9YapGOPIXKJBL6GVY4Ui5uBjsl9fGp2LtAL6z11UegL7ukqN7yNY4DFOvgG31uvl"
		const stringvFuV89B = "P7JAQSNIB7Vc77yrH5nFDgonpffMgHzHzybtJdoRfRNoNdM6D"
		const uintfeaQuZJ = BigInt("1264")
		const RexonaJV908ll = await Rexona.new(stringeaTpzmo, stringvFuV89B, uintfeaQuZJ, {from: accounts[4]});
		const uintvl7YV1P = BigInt("1990")
		const addressowrrbMD = accounts[1]
		const uintSYCPd8C = BigInt("1241")
		const addressWozc8Mo = accounts[2]
		const addressYbhBCK = "0x0000000000000000000000000000000000000001"
		const uintIwarJ2P = BigInt("201")
		const addressQgsEZTQ = accounts[3]
		const uintf7LJRBk = BigInt("1533")
		const addressGAxbQIv = accounts[3]
		const uintlqhp6xA = BigInt("911")
		const addressmH3i4wn = accounts[1]
		const addressbHLyPso = accounts[3]
		const boolAjUWTXm = await RexonaJV908ll.transfer.call(addressowrrbMD, uintvl7YV1P, {from: accounts[2]});
		const boolSKbW661 = await RexonaJV908ll.transferFrom.call(addressYbhBCK, addressWozc8Mo, uintSYCPd8C, {from: accounts[3]});
		const boolFoux6e = await RexonaJV908ll.transfer.call(addressQgsEZTQ, uintIwarJ2P, {from: "0x0000000000000000000000000000000000000001"});
		const boolY7Q6c03 = await RexonaJV908ll.approve.call(addressGAxbQIv, uintf7LJRBk, {from: "0x0000000000000000000000000000000000000001"});
		const boolVrxl5oT = await RexonaJV908ll.approve.call(addressmH3i4wn, uintlqhp6xA, {from: accounts[2]});
		const boolXuwlZ0m = await RexonaJV908ll.transferownership.call(addressbHLyPso, {from: accounts[2]});

		await expect(RexonaJV908ll.transfer.call(addressowrrbMD, uintvl7YV1P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringwirIUol = "QkQoAdNwTrViFFOUCPqm"
		const stringVpC7lAn = "Blk4OZtn5aSppwIx6bMC4S1GTOWUwEjwLYcauoEtRkCuZKTTcqF18jOhLN"
		const uint6gabMW = BigInt("1914")
		const RexonaPvYG4ca = await Rexona.new(stringwirIUol, stringVpC7lAn, uint6gabMW, {from: accounts[0]});
		const uinth7jxZ3J = BigInt("1510")
		const addresseTczog7 = accounts[0]
		const uintpZUyBvc = BigInt("1224")
		const addressoeO7xGv = accounts[1]
		const uintO2I5twq = BigInt("1693")
		const addressJw37rCK = "0x0000000000000000000000000000000000000001"
		const uintVArwIm = BigInt("1826")
		const addresslx1DhC = accounts[2]
		const boolVEmrVX6 = await RexonaPvYG4ca.approve.call(addresseTczog7, uinth7jxZ3J, {from: accounts[4]});
		const boolAOh3Pau = await RexonaPvYG4ca.approve.call(addressoeO7xGv, uintpZUyBvc, {from: accounts[5]});
		const boolEjCPwvs = await RexonaPvYG4ca.approve.call(addressJw37rCK, uintO2I5twq, {from: accounts[4]});
		const boolgD0uPi4 = await RexonaPvYG4ca.approveAndCall.call(addresslx1DhC, uintVArwIm, {from: accounts[0]});

		assert.equal(boolAOh3Pau, true)
		assert.equal(boolEjCPwvs, true)
		assert.equal(boolVEmrVX6, true)
		assert.equal(boolgD0uPi4, true)
	});

	it('test for Rexona', async () => {
		const stringhAqywtZ = "idB867giEWLKffyhKgfeeabtOaoETqaOJmi6tQ35vdK3fHWA1VFWQ2zomXWNzW3mNAhqsPPOqfEsxzQucMZiowB65pEd"
		const stringgOj7lUR = "fByc44hnjr1V80H9x0oYQiFpxQyUagIy3KMmXJ0UgYX"
		const uintvIhYa1 = BigInt("1964")
		const RexonaP1sPNJL = await Rexona.new(stringhAqywtZ, stringgOj7lUR, uintvIhYa1, {from: accounts[2]});
		const addressS45JyGU = accounts[1]
		const uintxg7jgj = BigInt("28")
		const address0yBETa = accounts[5]
		const uintAsCct4o = BigInt("442")
		const addressoA1ua5k = accounts[0]
		const uintcZvW6nH = BigInt("838")
		const addressiGdNI5 = accounts[5]
		const addressNMGTIg = "0x0000000000000000000000000000000000000001"
		const addressO9IKgXw = accounts[4]
		const boolscB8MWB = await RexonaP1sPNJL.transferownership.call(addressS45JyGU, {from: accounts[1]});
		const boolHs8ugOB = await RexonaP1sPNJL.approveAndCall.call(address0yBETa, uintxg7jgj, {from: accounts[4]});
		const booljx61WuK = await RexonaP1sPNJL.transfer.call(addressoA1ua5k, uintAsCct4o, {from: accounts[0]});
		const boolFKlkPsC = await RexonaP1sPNJL.transferFrom.call(addressNMGTIg, addressiGdNI5, uintcZvW6nH, {from: accounts[3]});
		const booloq9VRcK = await RexonaP1sPNJL.transferownership.call(addressO9IKgXw, {from: accounts[4]});

		await expect(RexonaP1sPNJL.transferownership.call(addressS45JyGU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringY9sN8MM = "zutKI9bOGfqRnjwtGy80G3iqNaXomikAzbCWNe8cEhQrRMj4HUsWrOyn12qAkVCtr5giJyDguPmWjzbnSSS"
		const string7ZxW44 = "h4qbI"
		const uintm54SWGw = BigInt("473")
		const RexonaNBhLT6v = await Rexona.new(stringY9sN8MM, string7ZxW44, uintm54SWGw, {from: accounts[3]});
		const uintP1v0ACe = BigInt("708")
		const addressJhF7Gxc = accounts[4]
		const uintXkDuao3 = BigInt("1915")
		const addressKutj3Du = accounts[2]
		const addressNW1Y7Xy = accounts[3]
		const boolVtFHOl = await RexonaNBhLT6v.approve.call(addressJhF7Gxc, uintP1v0ACe, {from: accounts[0]});
		const boolR5pSctd = await RexonaNBhLT6v.transferFrom.call(addressNW1Y7Xy, addressKutj3Du, uintXkDuao3, {from: accounts[3]});

		assert.equal(boolR5pSctd, true)
		assert.equal(boolVtFHOl, true)
	});

	it('test for Rexona', async () => {
		const stringGpfD9DN = "o9ObjSjXO67DLG53Ofm5wif5LBxxr4E8jPJalKD83O2xizaE5lSlPNdzly7c"
		const stringBxWb1H8 = "NVXRmApDcHyxwpYRb6wulaFmK4UjBYBqhm3kdgKNvgEI"
		const uintLzNWNXJ = BigInt("1394")
		const RexonanY5RyG0 = await Rexona.new(stringGpfD9DN, stringBxWb1H8, uintLzNWNXJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintmDGMkYQ = BigInt("1927")
		const addressAnSymVY = accounts[0]
		const addressZBppIqQ = accounts[4]
		const uintd7PYz2o = BigInt("896")
		const addressX51FLmy = accounts[3]
		const uintAfCRJvP = BigInt("89")
		const addressII5grVV = accounts[1]
		const uintJT17ot6 = BigInt("296")
		const addressKOmC3i4 = accounts[0]
		const uintLUuyJD = BigInt("216")
		const addressEoiLwD2 = accounts[1]
		const uint1JGv2e = BigInt("58")
		const address0tfAOk = accounts[1]
		const boolYtrGkdH = await RexonanY5RyG0.transferFrom.call(addressZBppIqQ, addressAnSymVY, uintmDGMkYQ, {from: accounts[1]});
		const boolNj1Jat = await RexonanY5RyG0.approveAndCall.call(addressX51FLmy, uintd7PYz2o, {from: accounts[2]});
		const boolIuMmK9L = await RexonanY5RyG0.approve.call(addressII5grVV, uintAfCRJvP, {from: accounts[3]});
		const boolKBX9fK = await RexonanY5RyG0.approveAndCall.call(addressKOmC3i4, uintJT17ot6, {from: accounts[2]});
		const boolCtoHcSX = await RexonanY5RyG0.approveAndCall.call(addressEoiLwD2, uintLUuyJD, {from: accounts[5]});
		const boolTXcX0w = await RexonanY5RyG0.approve.call(address0tfAOk, uint1JGv2e, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const stringP6jNeVN = "AmpjYur8BqMc62cNyyAUTbyRc8ejzw7G4OjUoR6bXNTnDVYTueGTcQrdNg41nGe6VYUtQJixB4zyqgld"
		const stringajUlZ8D = "6IcZOGijBSeuFgbszLhFa7bho0tdOOSUiF9A6HyOM"
		const uintbwovC7m = BigInt("1599")
		const RexonaoNSAAlL = await Rexona.new(stringP6jNeVN, stringajUlZ8D, uintbwovC7m, {from: accounts[1]});
		const uintqZxja7m = BigInt("397")
		const addressQsdaaLu = accounts[4]
		const uintAmnyuIb = BigInt("1208")
		const addressyU0DHXc = accounts[4]
		const uintVKVGJmZ = BigInt("0")
		const addressbthBfbW = accounts[3]
		const uintUVYpXg2 = BigInt("10")
		const addressh4bqB0R = accounts[1]
		const uints2YFJYE = BigInt("186")
		const addressVwVIfc3 = accounts[3]
		const uintlcVrh9d = BigInt("623")
		const addressX5Z2hft = accounts[0]
		const boolrxaCVrI = await RexonaoNSAAlL.approve.call(addressQsdaaLu, uintqZxja7m, {from: accounts[4]});
		const boolRXzfngU = await RexonaoNSAAlL.approveAndCall.call(addressyU0DHXc, uintAmnyuIb, {from: accounts[1]});
		const boolqfz6g2t = await RexonaoNSAAlL.transfer.call(addressbthBfbW, uintVKVGJmZ, {from: accounts[3]});
		const boolcYTyI9 = await RexonaoNSAAlL.approve.call(addressh4bqB0R, uintUVYpXg2, {from: accounts[1]});
		const boolPfuN2Sf = await RexonaoNSAAlL.transfer.call(addressVwVIfc3, uints2YFJYE, {from: accounts[2]});
		const boolh0A0akR = await RexonaoNSAAlL.approve.call(addressX5Z2hft, uintlcVrh9d, {from: accounts[4]});

		assert.equal(boolRXzfngU, true)
		assert.equal(boolcYTyI9, true)
		assert.equal(boolqfz6g2t, true)
		assert.equal(boolrxaCVrI, true)
		await expect(RexonaoNSAAlL.transfer.call(addressVwVIfc3, uints2YFJYE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})