const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressHH36LyB = accounts[4]
		const FompL6W7M2n = await Fomp.new(addressHH36LyB, {from: "0x0000000000000000000000000000000000000001"});
		const addressKvWAm47 = accounts[0]
		const addressAT8jLZe = accounts[4]
		const uintYO5eSEY = BigInt("1024")
		const address61XwDG = accounts[3]
		const addressOcSnye0 = accounts[4]
		const uintau90PAb = BigInt("577")
		const addresstdGdfwi = accounts[0]
		const addressdyi4xFq = accounts[4]
		const addressei6H4bH = accounts[3]
		const uinteiG8YEJ = await FompL6W7M2n.balanceOf.call(addressKvWAm47, {from: accounts[5]});
		const uintVToGNy = await FompL6W7M2n.balanceOf.call(addressAT8jLZe, {from: accounts[2]});
		const booldzXF0Lg = await FompL6W7M2n.transferFrom.call(addressOcSnye0, address61XwDG, uintYO5eSEY, {from: "0x0000000000000000000000000000000000000001"});
		const boolUkboj2q = await FompL6W7M2n.transferFrom.call(addressdyi4xFq, addresstdGdfwi, uintau90PAb, {from: accounts[1]});
		const uint96lU0XsDH = await FompL6W7M2n.getCurrentVotes.call(addressei6H4bH, {from: accounts[4]});
	});

	it('test for Fomp', async () => {
		const addressQVS04ty = accounts[2]
		const FompLhcvVUX = await Fomp.new(addressQVS04ty, {from: accounts[0]});
		const addresswTcHX9 = accounts[0]
		const addressAFVZ39H = accounts[0]
		const bytep6iBtwH = "0x181c0c1e1a1f061b1811070b1c14020316121d1301020c19061c08020e1c180d"
		const byteNjt6QSf = "0x0f1f070018171a0e08091311170a0b131a1d031a0403131c1b03060d01101e0f"
		const uintsS5rmPx = BigInt("74")
		const uintOsSTw7 = BigInt("890")
		const uintDK94QFG = BigInt("1883")
		const addresslyvsk9w = accounts[4]
		const uintiSvO8JM = await FompLhcvVUX.balanceOf.call(addresswTcHX9, {from: accounts[0]});
		const uint96zleYFZ = await FompLhcvVUX.getCurrentVotes.call(addressAFVZ39H, {from: accounts[3]});
//		const addressiiKjGex = await FompLhcvVUX.delegateBySig.call(addresslyvsk9w, uintDK94QFG, uintOsSTw7, uintsS5rmPx, byteNjt6QSf, bytep6iBtwH, {from: accounts[3]});

		assert.equal(uint96zleYFZ, BigInt("0"))
		assert.equal(uintiSvO8JM, BigInt("0"))
		await expect(FompLhcvVUX.delegateBySig.call(addresslyvsk9w, uintDK94QFG, uintOsSTw7, uintsS5rmPx, byteNjt6QSf, bytep6iBtwH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressXHG0YYl = accounts[5]
		const FompBIbxA9I = await Fomp.new(addressXHG0YYl, {from: accounts[5]});
		const addressF1MFAVw = accounts[3]
		const uint8qYa2D = BigInt("1143")
		const addressMmKlAcz = accounts[1]
		const uintXhSegOc = BigInt("60")
		const addressOIy4NKo = accounts[4]
		const uintGu0SfVF = BigInt("155")
		const addressqcysmHp = accounts[5]
		const byteVJknt9P = "0x1e1b02071902100518121803180d0f180309090f1203171c00051c1d150d1008"
		const bytee2tN5yh = "0x1a150d201e181a1b1c1717170901041115011b12041904001e180d1d0b00021c"
		const uintxIcFnwU = BigInt("194")
		const uintKsD71WW = BigInt("1917")
		const uintZT5FSt7 = BigInt("1564")
		const addressMifioet = accounts[4]
		const uintQ8l4el1 = BigInt("1271")
		const addressIHvplsM = accounts[0]
		const addressUdmrLO = accounts[3]
		const uint96YdJUx2r = await FompBIbxA9I.getCurrentVotes.call(addressF1MFAVw, {from: accounts[4]});
//		const boolRmDU1Ys = await FompBIbxA9I.transfer.call(addressMmKlAcz, uint8qYa2D, {from: accounts[4]});
//		const boolBy3E2kM = await FompBIbxA9I.transfer.call(addressOIy4NKo, uintXhSegOc, {from: accounts[0]});
//		const boolpQReYR = await FompBIbxA9I.transfer.call(addressqcysmHp, uintGu0SfVF, {from: accounts[3]});
//		const addressaVQhchw = await FompBIbxA9I.delegateBySig.call(addressMifioet, uintZT5FSt7, uintKsD71WW, uintxIcFnwU, bytee2tN5yh, byteVJknt9P, {from: accounts[1]});
//		const boolTfEt8Le = await FompBIbxA9I.transferFrom.call(addressUdmrLO, addressIHvplsM, uintQ8l4el1, {from: accounts[1]});

		assert.equal(uint96YdJUx2r, BigInt("0"))
		await expect(FompBIbxA9I.transfer.call(addressMmKlAcz, uint8qYa2D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressORvcrLr = accounts[3]
		const FompKJQdUCl = await Fomp.new(addressORvcrLr, {from: accounts[0]});
		const addressJ0Vh90C = accounts[0]
		const addressGBlzMKG = accounts[4]
		const addressOoF2dar = accounts[0]
		const uintwFw4ueT = BigInt("1267")
		const addressqL8WKWS = accounts[3]
		const uint966OWzbx = await FompKJQdUCl.getCurrentVotes.call(addressJ0Vh90C, {from: accounts[4]});
		const uint96g33lAVV = await FompKJQdUCl.getCurrentVotes.call(addressGBlzMKG, {from: "0x0000000000000000000000000000000000000001"});
		const addresss07Yrvo = await FompKJQdUCl.delegate.call(addressOoF2dar, {from: accounts[0]});
		const boolqxwVLJz = await FompKJQdUCl.transfer.call(addressqL8WKWS, uintwFw4ueT, {from: accounts[3]});

		assert.equal(boolqxwVLJz, true)
		assert.equal(uint966OWzbx, BigInt("0"))
		assert.equal(uint96g33lAVV, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressfCG0bCg = accounts[3]
		const FompRQCiLB5 = await Fomp.new(addressfCG0bCg, {from: accounts[3]});
		const uintJGFem2J = BigInt("1410")
		const addressLFVbVqp = accounts[0]
		const addressAUnW8mr = accounts[4]
		const byteuWixH0H = "0x0f0915101a08131f15050615140a12141e03030314190b0d060c181113161116"
		const byteSdo5qdX = "0x0310030a191a1e130906200e0d0b1f1f1b18170a1318120116090c1908191920"
		const uintsxC4BtC = BigInt("188")
		const uintcz7zS62 = BigInt("483")
		const uintF1bRXXz = BigInt("1602")
		const addresslSSYFGh = accounts[2]
		const addressXn5Tp1Y = accounts[3]
		const uintHGpWBtb = BigInt("1160")
		const addressw5FwNmz = accounts[3]
		const addressmjEoyV2 = accounts[1]
//		const booleskXg1 = await FompRQCiLB5.transferFrom.call(addressAUnW8mr, addressLFVbVqp, uintJGFem2J, {from: accounts[3]});
//		const addressS8qohVD = await FompRQCiLB5.delegateBySig.call(addresslSSYFGh, uintF1bRXXz, uintcz7zS62, uintsxC4BtC, byteSdo5qdX, byteuWixH0H, {from: accounts[4]});
//		const uint96UuDjfeN = await FompRQCiLB5.getCurrentVotes.call(addressXn5Tp1Y, {from: accounts[3]});
//		const boolrepSbhD = await FompRQCiLB5.transferFrom.call(addressmjEoyV2, addressw5FwNmz, uintHGpWBtb, {from: accounts[2]});

		await expect(FompRQCiLB5.transferFrom.call(addressAUnW8mr, addressLFVbVqp, uintJGFem2J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressMKT6CY8 = accounts[0]
		const FompsQMnV8u = await Fomp.new(addressMKT6CY8, {from: accounts[4]});
		const uint47RqRy = BigInt("219")
		const addressbXHY6S = accounts[5]
		const addressALWDQKc = accounts[3]
		const addressdBuZE7 = accounts[4]
		const uintiRkjWXA = BigInt("279")
		const addressh2QDJNX = accounts[0]
		const addresszXzpcZ5 = accounts[5]
		const addressIKF5Jkm = accounts[4]
		const addressoUXNXS = accounts[4]
		const uintKKir3sF = BigInt("1773")
		const addressEPr0aNU = accounts[3]
		const addresscsnA6Zc = accounts[4]
		const uintRzTx8w = BigInt("1931")
		const addressngZSgrz = accounts[2]
		const uint96mku5FtV = await FompsQMnV8u.getPriorVotes.call(addressbXHY6S, uint47RqRy, {from: accounts[0]});
		const uintQXP1yL = await FompsQMnV8u.allowance.call(addressdBuZE7, addressALWDQKc, {from: accounts[2]});
//		const boolnkgQC0c = await FompsQMnV8u.transferFrom.call(addresszXzpcZ5, addressh2QDJNX, uintiRkjWXA, {from: accounts[3]});
//		const uintWNJspSj = await FompsQMnV8u.allowance.call(addressoUXNXS, addressIKF5Jkm, {from: accounts[3]});
//		const boolQFxDPQ = await FompsQMnV8u.transferFrom.call(addresscsnA6Zc, addressEPr0aNU, uintKKir3sF, {from: accounts[4]});
//		const boolHy74S2w = await FompsQMnV8u.transfer.call(addressngZSgrz, uintRzTx8w, {from: accounts[0]});

		assert.equal(uint96mku5FtV, BigInt("0"))
		assert.equal(uintQXP1yL, BigInt("0"))
		await expect(FompsQMnV8u.transferFrom.call(addresszXzpcZ5, addressh2QDJNX, uintiRkjWXA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressoFXsEIm = accounts[5]
		const FompBIbxA9I = await Fomp.new(addressoFXsEIm, {from: accounts[5]});
		const addressBJVM1o4 = accounts[3]
		const addressJBwaabo = "0x0000000000000000000000000000000000000001"
		const addressaKCrOeW = accounts[0]
		const uintH2jvVjt = BigInt("1150")
		const addressSbT4mcj = accounts[1]
		const uintWtrHRQ = BigInt("60")
		const addresssAsugr6 = accounts[4]
		const uintLUqYVMg = BigInt("155")
		const addressopkV6bd = accounts[5]
		const byteY8GOyqn = "0x1e1b02071902100518121803180d0f180309090f1203171c00051c1d150d1008"
		const byteeO9Ve7h = "0x1a150d201e181a1b1c1717170901041115011b12041904001e180d1d0b00021c"
		const uinttMIi3X = BigInt("194")
		const uintaucTOtH = BigInt("1917")
		const uinttfKB21 = BigInt("1564")
		const addressnA1ZSd = accounts[4]
		const uintINdIQqP = BigInt("1271")
		const addressdDCXhlE = accounts[0]
		const addressr838Lb = accounts[3]
		const uint96YdJUx2r = await FompBIbxA9I.getCurrentVotes.call(addressBJVM1o4, {from: accounts[4]});
		const uintiU0mslf = await FompBIbxA9I.allowance.call(addressaKCrOeW, addressJBwaabo, {from: accounts[3]});
//		const boolRmDU1Ys = await FompBIbxA9I.transfer.call(addressSbT4mcj, uintH2jvVjt, {from: accounts[4]});
//		const boolBy3E2kM = await FompBIbxA9I.transfer.call(addresssAsugr6, uintWtrHRQ, {from: accounts[0]});
//		const boolpQReYR = await FompBIbxA9I.transfer.call(addressopkV6bd, uintLUqYVMg, {from: accounts[3]});
//		const addressaVQhchw = await FompBIbxA9I.delegateBySig.call(addressnA1ZSd, uinttfKB21, uintaucTOtH, uinttMIi3X, byteeO9Ve7h, byteY8GOyqn, {from: accounts[1]});
//		const boolTfEt8Le = await FompBIbxA9I.transferFrom.call(addressr838Lb, addressdDCXhlE, uintINdIQqP, {from: accounts[1]});

		assert.equal(uint96YdJUx2r, BigInt("0"))
		assert.equal(uintiU0mslf, BigInt("0"))
		await expect(FompBIbxA9I.transfer.call(addressSbT4mcj, uintH2jvVjt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZbgkfTm = accounts[1]
		const FompYG203Qz = await Fomp.new(addressZbgkfTm, {from: accounts[2]});
		const addressbkWqxuc = accounts[4]
		const addressiaAqTsI = accounts[3]
		const addressZizQCSc = accounts[3]
		const uintimSG3jn = BigInt("1389")
		const addressl40fGPb = accounts[3]
		const uintvKcpdxE = BigInt("537")
		const addresseChl0LG = accounts[0]
		const addressXi55QkI = "0x0000000000000000000000000000000000000001"
		const uintpIzc1Bh = await FompYG203Qz.allowance.call(addressiaAqTsI, addressbkWqxuc, {from: accounts[2]});
		const uintzfpSXqF = await FompYG203Qz.balanceOf.call(addressZizQCSc, {from: "0x0000000000000000000000000000000000000001"});
		const boolO7pIVrZ = await FompYG203Qz.approve.call(addressl40fGPb, uintimSG3jn, {from: accounts[1]});
		const boolRbyGtU2 = await FompYG203Qz.approve.call(addresseChl0LG, uintvKcpdxE, {from: accounts[0]});
		const addressgqJskna = await FompYG203Qz.delegate.call(addressXi55QkI, {from: accounts[1]});

		assert.equal(boolO7pIVrZ, true)
		assert.equal(boolRbyGtU2, true)
		assert.equal(uintpIzc1Bh, BigInt("0"))
		assert.equal(uintzfpSXqF, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressxODZaRj = accounts[1]
		const FompYG203Qz = await Fomp.new(addressxODZaRj, {from: accounts[2]});
		const addressGxWqCX9 = accounts[4]
		const addressng2BPc6 = accounts[3]
		const addressnHgxrww = accounts[5]
		const addresspj43Pkr = accounts[1]
		const addressL0bT6UU = "0x0000000000000000000000000000000000000000"
		const addressQNwD8LI = accounts[2]
		const addressuHnKe1z = accounts[5]
		const uintDGEXu1d = BigInt("1389")
		const addresssFEbddi = accounts[1]
		const uintcsHqHhw = BigInt("35")
		const addressfswYwgQ = accounts[1]
		const uintFXwmp2s = BigInt("537")
		const addressFe7Iijo = accounts[0]
		const addressediAEPH = accounts[4]
		const addresso3hRWd = "0x0000000000000000000000000000000000000001"
		const uintpIzc1Bh = await FompYG203Qz.allowance.call(addressng2BPc6, addressGxWqCX9, {from: accounts[2]});
		const uintzfpSXqF = await FompYG203Qz.balanceOf.call(addressnHgxrww, {from: "0x0000000000000000000000000000000000000001"});
		const uintyC6tUMC = await FompYG203Qz.allowance.call(addressL0bT6UU, addresspj43Pkr, {from: accounts[2]});
		const uintVXQa0BW = await FompYG203Qz.balanceOf.call(addressQNwD8LI, {from: accounts[1]});
		const uintys2J8cg = await FompYG203Qz.balanceOf.call(addressuHnKe1z, {from: accounts[3]});
		const boolO7pIVrZ = await FompYG203Qz.approve.call(addresssFEbddi, uintDGEXu1d, {from: accounts[1]});
		const uint96eZ2sRF = await FompYG203Qz.getPriorVotes.call(addressfswYwgQ, uintcsHqHhw, {from: accounts[0]});
		const boolRbyGtU2 = await FompYG203Qz.approve.call(addressFe7Iijo, uintFXwmp2s, {from: accounts[0]});
		const uint96aaDowf = await FompYG203Qz.getCurrentVotes.call(addressediAEPH, {from: accounts[4]});
		const addressgqJskna = await FompYG203Qz.delegate.call(addresso3hRWd, {from: accounts[1]});

		assert.equal(boolO7pIVrZ, true)
		assert.equal(boolRbyGtU2, true)
		assert.equal(uint96aaDowf, BigInt("0"))
		assert.equal(uint96eZ2sRF, BigInt("0"))
		assert.equal(uintVXQa0BW, BigInt("0"))
		assert.equal(uintpIzc1Bh, BigInt("0"))
		assert.equal(uintyC6tUMC, BigInt("0"))
		assert.equal(uintys2J8cg, BigInt("0"))
		assert.equal(uintzfpSXqF, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressfLZ7RpT = accounts[1]
		const FompYG203Qz = await Fomp.new(addressfLZ7RpT, {from: accounts[2]});
		const addressbz1jbFh = accounts[4]
		const addressR4qlPHm = accounts[3]
		const addressrbiTDum = accounts[5]
		const addressSD97gYi = accounts[1]
		const addressg4AkvqD = "0x00000000000000000000000000000000000000-1"
		const bytepShJAdE = "0x0e0812010a1c1f01200d14111a021606110a010c011a0a0f0f131b1a19080f06"
		const byterS6jetQ = "0x0e18181308061c15000b0f0116050719020f120e12081e0e1e06080a001f2016"
		const uintnVtsod1 = BigInt("19")
		const uintMszInX = BigInt("1478")
		const uintEMxxXS = BigInt("631")
		const addressQ8TQHi2 = accounts[1]
		const addressYHiSGdY = accounts[2]
		const addresschOyda7 = accounts[1]
		const uintjjc928l = BigInt("1389")
		const addressncuXy9L = accounts[1]
		const uintwOXwJuJ = BigInt("35")
		const addressXd5rnv8 = accounts[2]
		const uintOnBXSu = BigInt("22")
		const addresslOtbHIy = accounts[1]
		const uintaUNIi8 = BigInt("537")
		const addressW1argpU = accounts[1]
		const addresslUseCsg = accounts[4]
		const uintJb8ZGnv = BigInt("471")
		const addressKYDZwOX = accounts[1]
		const uintD47h0QT = BigInt("1544")
		const addressGBennn0 = accounts[5]
		const addressaTMQ9h6 = "0x0000000000000000000000000000000000000001"
		const uintpIzc1Bh = await FompYG203Qz.allowance.call(addressR4qlPHm, addressbz1jbFh, {from: accounts[2]});
		const uintzfpSXqF = await FompYG203Qz.balanceOf.call(addressrbiTDum, {from: "0x0000000000000000000000000000000000000001"});
//		const uintyC6tUMC = await FompYG203Qz.allowance.call(addressg4AkvqD, addressSD97gYi, {from: accounts[2]});
//		const addressVW0FVGN = await FompYG203Qz.delegateBySig.call(addressQ8TQHi2, uintEMxxXS, uintMszInX, uintnVtsod1, byterS6jetQ, bytepShJAdE, {from: accounts[0]});
//		const uintVXQa0BW = await FompYG203Qz.balanceOf.call(addressYHiSGdY, {from: accounts[1]});
//		const uintys2J8cg = await FompYG203Qz.balanceOf.call(addresschOyda7, {from: accounts[3]});
//		const boolO7pIVrZ = await FompYG203Qz.approve.call(addressncuXy9L, uintjjc928l, {from: accounts[1]});
//		const uint96eZ2sRF = await FompYG203Qz.getPriorVotes.call(addressXd5rnv8, uintwOXwJuJ, {from: accounts[0]});
//		const boolbeDbYJ = await FompYG203Qz.approve.call(addresslOtbHIy, uintOnBXSu, {from: accounts[2]});
//		const boolRbyGtU2 = await FompYG203Qz.approve.call(addressW1argpU, uintaUNIi8, {from: accounts[0]});
//		const uint96aaDowf = await FompYG203Qz.getCurrentVotes.call(addresslUseCsg, {from: accounts[4]});
//		const boolz5pkBTp = await FompYG203Qz.approve.call(addressKYDZwOX, uintJb8ZGnv, {from: accounts[0]});
//		const boolala6r30 = await FompYG203Qz.transfer.call(addressGBennn0, uintD47h0QT, {from: accounts[0]});
//		const addressgqJskna = await FompYG203Qz.delegate.call(addressaTMQ9h6, {from: accounts[1]});

		assert.equal(uintpIzc1Bh, BigInt("0"))
		assert.equal(uintzfpSXqF, BigInt("0"))
		await expect(FompYG203Qz.allowance.call(addressg4AkvqD, addressSD97gYi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})