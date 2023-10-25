const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uint0XAevu = BigInt("553")
		const stringUcoalXM = "rbwOAnm"
		const stringsrkh3Ha = "UTbrmY31ayfWHleiy3wo3UVWip4mHVsP6XtUNOc1OYErHECzbXRWtUovzYgCOgQbgRQQqQylMQuqpUfiWWGS9L0Gk"
		const INSv2IvZW = await INS.new(uint0XAevu, stringUcoalXM, stringsrkh3Ha, {from: "0x0000000000000000000000000000000000000001"});
		const uintkN4Qct = BigInt("1370")
		const uintfVlMllU = BigInt("157")
		const addressh60KtrT = accounts[0]
		const uintA6FQsg8 = BigInt("800")
		const boolIbZgwLt = await INSv2IvZW.burn.call(uintkN4Qct, {from: accounts[2]});
		const boolPD6GMAS = await INSv2IvZW.approve.call(addressh60KtrT, uintfVlMllU, {from: accounts[2]});
		const boolkqmRJLY = await INSv2IvZW.burn.call(uintA6FQsg8, {from: accounts[1]});
	});

	it('test for INS', async () => {
		const uintk52hShV = BigInt("913")
		const stringqU7u3ti = "obXlAxeLcig9QboYUlGA6f52uBDwUBoAaeFu0qVdGuIKiUUtxKseRP8erzEPQsjeCOj8eGHYDKSqAJ4"
		const stringf1ZuhRR = "XRAUkRjtWWzFDP2k54Nsg3OSF"
		const INSzBnD6H8 = await INS.new(uintk52hShV, stringqU7u3ti, stringf1ZuhRR, {from: accounts[0]});
		const uintBzqdtMd = BigInt("1133")
		const addressQ16bojU = accounts[5]
		const uintab59uC9 = BigInt("1201")
		const uintQpYBTng = BigInt("1932")
		const boolD8K6st6 = await INSzBnD6H8.approve.call(addressQ16bojU, uintBzqdtMd, {from: accounts[0]});
		const boolwUeVPD7 = await INSzBnD6H8.burn.call(uintab59uC9, {from: accounts[2]});
		const boolZdaMqpd = await INSzBnD6H8.burn.call(uintQpYBTng, {from: accounts[1]});

		assert.equal(boolD8K6st6, true)
		await expect(INSzBnD6H8.burn.call(uintab59uC9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintU3CqgLG = BigInt("1725")
		const stringVNUTjUV = "Wat6iILlU8qc1Tn6Gj4UWzCXq5ppwSN95oPS7k1fgLHci7zW3SijkFB8FlzCXWAbZWVOo6JfcElc5XVY73lZ3zkepw9Moas1k"
		const stringYWaJeXI = "ylSkHFWvlbG4lxjdCUvBFPzcWaJqZozp"
		const INSj1ZMAS0 = await INS.new(uintU3CqgLG, stringVNUTjUV, stringYWaJeXI, {from: accounts[0]});
		const uintrkllVJY = BigInt("1444")
		const addressamaLPaC = accounts[0]
		const uintQ7R6D5E = BigInt("1779")
		const addressdliE0U5 = accounts[2]
		const boolby3fWmZ = await INSj1ZMAS0.transfer.call(addressamaLPaC, uintrkllVJY, {from: accounts[0]});
		const booldNklFg = await INSj1ZMAS0.approve.call(addressdliE0U5, uintQ7R6D5E, {from: accounts[5]});

		assert.equal(boolby3fWmZ, true)
		assert.equal(booldNklFg, true)
	});

	it('test for INS', async () => {
		const uintPftY3f6 = BigInt("506")
		const stringbpKfY6n = "rAScQAEx1vTgV5HKJclkvhgM4GsqmIDs4iiXWzsh3vACrUbIClDX2f6iKO8MKesr6IabE9Ni90zqB"
		const stringtv08pSV = "G1awVd76a6PWZA5GPpS"
		const INSssLRhnN = await INS.new(uintPftY3f6, stringbpKfY6n, stringtv08pSV, {from: accounts[1]});
		const byteT3Arve9 = "0x1a1e181c0811080a07100a0d180004181f1e0813080a111f1d130b0e080a"
		const uintKoa13Vw = BigInt("1261")
		const addressoUTogHN = accounts[3]
		const byteIeaqteK = "0x16191a0711200b010e0305"
		const uintabveq3G = BigInt("847")
		const addressGdZgBF6 = accounts[0]
		const uintEhfp1Z = BigInt("320")
		const addressfQwS9NO = accounts[2]
		const uintF8FmyGM = BigInt("1298")
		const addressw2p7AVL = accounts[4]
		const boolQo2yI4b = await INSssLRhnN.approveAndCall.call(addressoUTogHN, uintKoa13Vw, byteT3Arve9, {from: accounts[1]});
		const boolhVHa7L = await INSssLRhnN.approveAndCall.call(addressGdZgBF6, uintabveq3G, byteIeaqteK, {from: accounts[0]});
		const booljVBrchx = await INSssLRhnN.approve.call(addressfQwS9NO, uintEhfp1Z, {from: accounts[1]});
		const bool2l6dGP = await INSssLRhnN.burnFrom.call(addressw2p7AVL, uintF8FmyGM, {from: accounts[5]});

		await expect(INSssLRhnN.approveAndCall.call(addressoUTogHN, uintKoa13Vw, byteT3Arve9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintRkptW5m = BigInt("1402")
		const stringTfFrVKe = "bNCLAuOiwp26lJStnI4TwA686O5mc3bQlTqcZoDqjsuMgMWSI1auq1"
		const stringlQOP0sY = "reMBX3ImRLOgMMLXI3"
		const INSYC5PstO = await INS.new(uintRkptW5m, stringTfFrVKe, stringlQOP0sY, {from: accounts[4]});
		const uintuemZoJ1 = BigInt("482")
		const addresssUB3wAz = accounts[5]
		const addressnzPXyYA = accounts[0]
		const uintilZCIq = BigInt("954")
		const addressttCJal = "0x0000000000000000000000000000000000000001"
		const addressCxS5tJb = accounts[2]
		const uintWcvAhRP = BigInt("984")
		const addressYSAmqOK = accounts[0]
		const addresskX9vkpR = accounts[1]
		const byteEDnfWVr = "0x0c10021b02080e02050414120e161a070603051613020b1f140a061e"
		const uintNw3B7LI = BigInt("1043")
		const addressppWQiTe = accounts[3]
		const uintxPCRloq = BigInt("265")
		const byteyUel4YK = "0x14110912171517050d1903151c0b170f15181f121b1f"
		const uintZyrV2Pm = BigInt("1986")
		const addresszV4n0DP = accounts[5]
		const boolcGgqQUt = await INSYC5PstO.transferFrom.call(addressnzPXyYA, addresssUB3wAz, uintuemZoJ1, {from: accounts[5]});
		const boolvjV6S4U = await INSYC5PstO.transferFrom.call(addressCxS5tJb, addressttCJal, uintilZCIq, {from: "0x0000000000000000000000000000000000000001"});
		const boolBnnzS85 = await INSYC5PstO.transferFrom.call(addresskX9vkpR, addressYSAmqOK, uintWcvAhRP, {from: accounts[1]});
		const boolhIkODmN = await INSYC5PstO.approveAndCall.call(addressppWQiTe, uintNw3B7LI, byteEDnfWVr, {from: accounts[3]});
		const boolqiiI3WS = await INSYC5PstO.burn.call(uintxPCRloq, {from: accounts[0]});
		const boolZmKv3oj = await INSYC5PstO.approveAndCall.call(addresszV4n0DP, uintZyrV2Pm, byteyUel4YK, {from: accounts[2]});

		await expect(INSYC5PstO.transferFrom.call(addressnzPXyYA, addresssUB3wAz, uintuemZoJ1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintci5FyEo = BigInt("913")
		const stringqU7u3ti = "obXlAxeLcig9QboYUlGA6f52uBDwUBoAaeFu0qVdGuIKiUUtxKseRP8erzEPQsjeCOj8eGHYDKSqAJ4"
		const stringf1ZuhRR = "XRAUkRjtWWzFDP2k54Nsg3OSF"
		const INSzBnD6H8 = await INS.new(uintci5FyEo, stringqU7u3ti, stringf1ZuhRR, {from: accounts[0]});
		const uintABhozZA = BigInt("1133")
		const addressYu4JH1h = accounts[5]
		const uintVHsGU2W = BigInt("4")
		const addressBmJUyLk = accounts[1]
		const uintPJDGnT = BigInt("1201")
		const uintPFilzvt = BigInt("1518")
		const addressbNwNmiS = "0x0000000000000000000000000000000000000001"
		const boolD8K6st6 = await INSzBnD6H8.approve.call(addressYu4JH1h, uintABhozZA, {from: accounts[0]});
		const boolNrPNsV = await INSzBnD6H8.burnFrom.call(addressBmJUyLk, uintVHsGU2W, {from: accounts[3]});
		const boolwUeVPD7 = await INSzBnD6H8.burn.call(uintPJDGnT, {from: accounts[2]});
		const boolqHCTxLp = await INSzBnD6H8.approve.call(addressbNwNmiS, uintPFilzvt, {from: accounts[3]});

		assert.equal(boolD8K6st6, true)
		await expect(INSzBnD6H8.burnFrom.call(addressBmJUyLk, uintVHsGU2W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintJx6z1z3 = BigInt("1930")
		const stringRDeaSyN = "MlFavdEMVuODBPeV55QjhqJnyggWJPa25dDtTA3rrq5mGFWCQNUEbYfkso7aeTqTX0zccH3fIG78thzD5XgDWRe5gEN3OvNeF"
		const stringGnx87iz = "VbExbCnB8XM9lO2Njgqejkegk36xR"
		const INSEm6Gf1b = await INS.new(uintJx6z1z3, stringRDeaSyN, stringGnx87iz, {from: accounts[3]});
		const uintwqeYlLj = BigInt("1810")
		const byteXQwqtnn = "0x180b10140306140c0c142014131f0e"
		const uintESjY41j = BigInt("370")
		const addressNNlObXJ = accounts[3]
		const bytedb8s9pI = "0x1e12012008160f1504161a04151504101f0f0417060306"
		const uintWHMX0SD = BigInt("1400")
		const addressIsotJrD = accounts[1]
		const uintc21O7Wd = BigInt("639")
		const addressasYG4HC = accounts[4]
		const addressgxuWdvd = "0x0000000000000000000000000000000000000001"
		const uintsV69Oib = BigInt("390")
		const addressOO9W6Pb = accounts[3]
		const boolkFyZgH = await INSEm6Gf1b.burn.call(uintwqeYlLj, {from: accounts[3]});
		const boolULxNHbJ = await INSEm6Gf1b.approveAndCall.call(addressNNlObXJ, uintESjY41j, byteXQwqtnn, {from: accounts[0]});
		const boolahhezPp = await INSEm6Gf1b.approveAndCall.call(addressIsotJrD, uintWHMX0SD, bytedb8s9pI, {from: accounts[0]});
		const boolaJyujN = await INSEm6Gf1b.transferFrom.call(addressgxuWdvd, addressasYG4HC, uintc21O7Wd, {from: accounts[4]});
		const boolGH1jfsI = await INSEm6Gf1b.burnFrom.call(addressOO9W6Pb, uintsV69Oib, {from: accounts[2]});

		assert.equal(boolkFyZgH, true)
		await expect(INSEm6Gf1b.approveAndCall.call(addressNNlObXJ, uintESjY41j, byteXQwqtnn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintMxBhzIG = BigInt("909")
		const stringL9wXR1 = "bFsVGb6P6Iz6"
		const stringoEiPKRy = "jrzyRdrB9W9vmEKExYLEZN4AR2IVxVSsbQFBhKKRxMjeSNyKoAlwYYb7U6JzL16F4p1IPV8Uommpjk"
		const INSKUoeEl = await INS.new(uintMxBhzIG, stringL9wXR1, stringoEiPKRy, {from: accounts[5]});
		const uintMVPLYQK = BigInt("18")
		const addressZWEpRg3 = accounts[5]
		const uintb96KH2U = BigInt("688")
		const uintwM8KlW = BigInt("111")
		const addresss955EQj = accounts[3]
		const byteFfRPuwX = "0x1e1d1d00121000"
		const uinttvWd9KU = BigInt("1446")
		const addressTznRDCC = accounts[3]
		const uintKE5BuN = BigInt("580")
		const uintvSkHPXH = BigInt("754")
		const uinta1EgoxE = BigInt("465")
		const addressDg8rmPX = accounts[0]
		const boolVCwuLN = await INSKUoeEl.burnFrom.call(addressZWEpRg3, uintMVPLYQK, {from: accounts[0]});
		const boolPA4w4fh = await INSKUoeEl.burn.call(uintb96KH2U, {from: accounts[3]});
		const bool9GucJN = await INSKUoeEl.transfer.call(addresss955EQj, uintwM8KlW, {from: accounts[5]});
		const boolJf9uied = await INSKUoeEl.approveAndCall.call(addressTznRDCC, uinttvWd9KU, byteFfRPuwX, {from: accounts[0]});
		const boolMaY0rDS = await INSKUoeEl.burn.call(uintKE5BuN, {from: accounts[0]});
		const boolwJLW5I = await INSKUoeEl.burn.call(uintvSkHPXH, {from: accounts[1]});
		const boolrQSJYU4 = await INSKUoeEl.approve.call(addressDg8rmPX, uinta1EgoxE, {from: accounts[2]});

		await expect(INSKUoeEl.burnFrom.call(addressZWEpRg3, uintMVPLYQK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})