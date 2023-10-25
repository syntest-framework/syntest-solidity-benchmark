const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintE1TyV9B = BigInt("171")
		const stringfMBGPwn = "kusuMkZAG4bePRPFF"
		const stringesMc78h = "qQat12Pb8Fze3faSC7oBbtJ"
		const GFCFBvtkP7 = await GFC.new(uintE1TyV9B, stringfMBGPwn, stringesMc78h, {from: "0x0000000000000000000000000000000000000001"});
		const uintXqZWL0 = BigInt("708")
		const addressNp74OFe = accounts[3]
		const addressZWhhZf = accounts[5]
		const uintpPsWr9S = BigInt("67")
		const addressfQLzYuH = accounts[1]
		const uintBHgwHr3 = BigInt("770")
		const bool5nIPuh = await GFCFBvtkP7.transferFrom.call(addressZWhhZf, addressNp74OFe, uintXqZWL0, {from: accounts[3]});
		const boolcF757us = await GFCFBvtkP7.burnFrom.call(addressfQLzYuH, uintpPsWr9S, {from: accounts[3]});
		const boolwqbfAmV = await GFCFBvtkP7.burn.call(uintBHgwHr3, {from: accounts[1]});
	});

	it('test for GFC', async () => {
		const uintjYjmvaN = BigInt("1582")
		const stringzPkX4Qe = "fA2tUdizUGEjIJu5TXe3B7eyuhAtEuIXog"
		const stringED7QkOD = "5DxzStgqBWzkfp1s8tyozlG1JW0PF9lCSMAdKqiAFJmdWhepN6yBLFbCSuSgiDEX"
		const GFCpYQiMIT = await GFC.new(uintjYjmvaN, stringzPkX4Qe, stringED7QkOD, {from: accounts[3]});
		const uint85Fner = BigInt("169")
		const addressfuEl93A = accounts[4]
		const addressMba6P5 = accounts[0]
		const uintoxhApnl = BigInt("1515")
		const uintYeZ8kyv = BigInt("562")
		const addressOEWPIo9 = accounts[1]
		const addressGaBDmaQ = "0x0000000000000000000000000000000000000001"
		const uintw8ImmPm = BigInt("417")
		const addressh2zyaa = accounts[3]
		const bool7e11PC = await GFCpYQiMIT.transferFrom.call(addressMba6P5, addressfuEl93A, uint85Fner, {from: accounts[3]});
		const booluqb43ns = await GFCpYQiMIT.burn.call(uintoxhApnl, {from: accounts[2]});
		const boolp9eEC4k = await GFCpYQiMIT.transferFrom.call(addressGaBDmaQ, addressOEWPIo9, uintYeZ8kyv, {from: accounts[3]});
		const boolmV7AFiu = await GFCpYQiMIT.approve.call(addressh2zyaa, uintw8ImmPm, {from: accounts[3]});

		await expect(GFCpYQiMIT.transferFrom.call(addressMba6P5, addressfuEl93A, uint85Fner, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintMlRNoHM = BigInt("232")
		const stringLUU2sOt = "RmZ8oVmVAKTj0i21otjtFYlrzNyRL3xQs6FKMb"
		const stringSMOLAFR = "igyRCvQ4daxJalWnG3yoSGdKGIgJvAFyLnKWLnsrsqK1B5LHsSaHaQKibGpRSjX3ncFlyswtM9A9IGeiMvaPKbyPxF"
		const GFCRW1O758 = await GFC.new(uintMlRNoHM, stringLUU2sOt, stringSMOLAFR, {from: accounts[3]});
		const uintieaQyvi = BigInt("500")
		const addressSDLxQOA = accounts[5]
		const byteCFmabMT = "0x0907101c0f0414090f14010a0605081a01060001170f050a1012190f09180309"
		const uintWimm7E = BigInt("1017")
		const addressI47EQE4 = accounts[3]
		const uintv2mSNk = BigInt("814")
		const addressKk3tx4k = accounts[2]
		const boolHCZBKl = await GFCRW1O758.approve.call(addressSDLxQOA, uintieaQyvi, {from: accounts[1]});
		const bool05tc4q = await GFCRW1O758.approveAndCall.call(addressI47EQE4, uintWimm7E, byteCFmabMT, {from: accounts[1]});
		const boolHlyTw7c = await GFCRW1O758.transfer.call(addressKk3tx4k, uintv2mSNk, {from: accounts[2]});

		assert.equal(boolHCZBKl, true)
		await expect(GFCRW1O758.approveAndCall.call(addressI47EQE4, uintWimm7E, byteCFmabMT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintvVSNWL1 = BigInt("1808")
		const stringUCuPq3d = "9tt508dDpTfUwT"
		const stringsxBCQ9Q = "muvPwDlOOlYd9IQbtEJBuJQbdacfi7AvnZWJOBIu3HbTBYtDHknTSU"
		const GFCsKAlFWc = await GFC.new(uintvVSNWL1, stringUCuPq3d, stringsxBCQ9Q, {from: accounts[4]});
		const uintonwsN8k = BigInt("321")
		const uintACmaRkN = BigInt("1672")
		const addressOERuq3 = "0x0000000000000000000000000000000000000001"
		const uintpk7UqsH = BigInt("1722")
		const addressuKidn8g = accounts[3]
		const addressBZSR7Ui = accounts[0]
		const byteCoDoPwR = "0x03040b10030a1c110c1d120f0d131c"
		const uintNp16Bcz = BigInt("1278")
		const addressSnKsm0q = accounts[5]
		const uintKeee9jq = BigInt("232")
		const boolFxJd7yT = await GFCsKAlFWc.burn.call(uintonwsN8k, {from: accounts[0]});
		const booltNR4xe = await GFCsKAlFWc.burnFrom.call(addressOERuq3, uintACmaRkN, {from: accounts[3]});
		const boolCinUlC = await GFCsKAlFWc.transferFrom.call(addressBZSR7Ui, addressuKidn8g, uintpk7UqsH, {from: accounts[5]});
		const boolOWP9Wr = await GFCsKAlFWc.approveAndCall.call(addressSnKsm0q, uintNp16Bcz, byteCoDoPwR, {from: accounts[1]});
		const boolJB8u4H2 = await GFCsKAlFWc.burn.call(uintKeee9jq, {from: accounts[3]});

		await expect(GFCsKAlFWc.burn.call(uintonwsN8k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintL6IFpjT = BigInt("1053")
		const stringz9MOyy3 = "mWu3bEeepfMAC7hmtz1DJP8yyGI6lPIqkb8tRBULTBj75rv1heTF9EuClCh57u7"
		const stringKG1bpr = "x27LC2DUBaBsdIxOP6F0GypukL5LGfAu1vdhax2BaVaRgEDbC2LXlofEVjDUVrIOcxbpm3K5ky55p"
		const GFCndn3g4n = await GFC.new(uintL6IFpjT, stringz9MOyy3, stringKG1bpr, {from: accounts[1]});
		const uintlShAdCp = BigInt("112")
		const addresscM96Xem = accounts[2]
		const uintGEpj5MO = BigInt("1781")
		const addressK3SCFub = accounts[3]
		const uintDA4rA7e = BigInt("1643")
		const addressECatNqE = accounts[0]
		const addressngAjspH = "0x0000000000000000000000000000000000000001"
		const uintjqVtQtv = BigInt("1993")
		const uintMeDF27 = BigInt("1370")
		const addressaNmsUR = "0x0000000000000000000000000000000000000001"
		const boolh6ktPy = await GFCndn3g4n.burnFrom.call(addresscM96Xem, uintlShAdCp, {from: accounts[2]});
		const boolMX9GYXH = await GFCndn3g4n.approve.call(addressK3SCFub, uintGEpj5MO, {from: accounts[4]});
		const boolzEFMWAZ = await GFCndn3g4n.transferFrom.call(addressngAjspH, addressECatNqE, uintDA4rA7e, {from: accounts[2]});
		const boolZYnj3uT = await GFCndn3g4n.burn.call(uintjqVtQtv, {from: accounts[0]});
		const boolsAsKx02 = await GFCndn3g4n.burnFrom.call(addressaNmsUR, uintMeDF27, {from: accounts[1]});

		await expect(GFCndn3g4n.burnFrom.call(addresscM96Xem, uintlShAdCp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintWuIX9eF = BigInt("1582")
		const stringzPkX4Qe = "fA2tUdizUGEjIJu5TXe3B7eyuhAtEuIXog"
		const stringED7QkOD = "5DxzStgqBWzkfp1s8tyozlG1JW0PF9lCSMAdKqiAFJmdWhepN6yBLFbCSuSgiDEX"
		const GFCpYQiMIT = await GFC.new(uintWuIX9eF, stringzPkX4Qe, stringED7QkOD, {from: accounts[3]});
		const uintJ3Lmg3e = BigInt("451")
		const addressuqByNF8 = accounts[3]
		const uintJnSYQLu = BigInt("169")
		const addressWdPRnct = accounts[5]
		const addressZ6AimAR = accounts[0]
		const boolbWD7YzI = await GFCpYQiMIT.burnFrom.call(addressuqByNF8, uintJ3Lmg3e, {from: accounts[3]});
		const bool7e11PC = await GFCpYQiMIT.transferFrom.call(addressZ6AimAR, addressWdPRnct, uintJnSYQLu, {from: accounts[3]});

		await expect(GFCpYQiMIT.burnFrom.call(addressuqByNF8, uintJ3Lmg3e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintHkYSIvL = BigInt("1582")
		const stringzPkX4Qe = "fA2tUdizUGEjIJu5TXe3B7eyuhAtEuIXog"
		const stringED7QkOD = "5DxzStgqBWzkfp1s8tyozlG1JW0PF9lCSMAdKqiAFJmdWhepN6yBLFbCSuSgiDEX"
		const GFCpYQiMIT = await GFC.new(uintHkYSIvL, stringzPkX4Qe, stringED7QkOD, {from: accounts[3]});
		const uintqwwzeAP = BigInt("517")
		const addressBBVNFgZ = accounts[5]
		const uintNFMTrYt = BigInt("1043")
		const addressjfXqA1 = accounts[3]
		const uintjdihKUg = BigInt("1846")
		const uintufT8dx2 = BigInt("2017")
		const addressju1wsrB = accounts[2]
		const addressHmzpiz2 = accounts[4]
		const uintrJC3ACo = BigInt("1901")
		const uintPVZCu0J = BigInt("169")
		const address4UfCvw = accounts[4]
		const addressc2CxLbv = accounts[2]
		const boolazSsg8M = await GFCpYQiMIT.approve.call(addressBBVNFgZ, uintqwwzeAP, {from: accounts[5]});
		const booltS4v8FD = await GFCpYQiMIT.transfer.call(addressjfXqA1, uintNFMTrYt, {from: accounts[4]});
		const booltXrFYPA = await GFCpYQiMIT.burn.call(uintjdihKUg, {from: accounts[0]});
		const boolSPXY867 = await GFCpYQiMIT.transferFrom.call(addressHmzpiz2, addressju1wsrB, uintufT8dx2, {from: accounts[0]});
		const boolgcMZ95g = await GFCpYQiMIT.burn.call(uintrJC3ACo, {from: accounts[4]});
		const bool7e11PC = await GFCpYQiMIT.transferFrom.call(addressc2CxLbv, address4UfCvw, uintPVZCu0J, {from: accounts[3]});

		assert.equal(boolazSsg8M, true)
		await expect(GFCpYQiMIT.transfer.call(addressjfXqA1, uintNFMTrYt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintrkcGMG = BigInt("1582")
		const stringzPkX4Qe = "fA2tUdizUGEjIJu5TXe3B7eyuhAtEuIXog"
		const stringED7QkOD = "5DxzStgqBWzkfp1s8tyozlG1JW0PF9lCSMAdKqiAFJmdWhepN6yBLFbCSuSgiDEX"
		const GFCpYQiMIT = await GFC.new(uintrkcGMG, stringzPkX4Qe, stringED7QkOD, {from: accounts[3]});
		const uintEyZWbNi = BigInt("1120")
		const addressNzGWcCQ = "0x0000000000000000000000000000000000000001"
		const uintBYaoMV0 = BigInt("412")
		const addressDyXhIT0 = accounts[5]
		const addressLwUvZvG = accounts[4]
		const uintdSlrS7v = BigInt("1168")
		const addressS6SeK3j = accounts[5]
		const uint06s4yj = BigInt("1890")
		const boolipIPKA = await GFCpYQiMIT.transfer.call(addressNzGWcCQ, uintEyZWbNi, {from: accounts[3]});
		const boolHxup38j = await GFCpYQiMIT.transferFrom.call(addressLwUvZvG, addressDyXhIT0, uintBYaoMV0, {from: accounts[4]});
		const booliKW2Wx = await GFCpYQiMIT.approve.call(addressS6SeK3j, uintdSlrS7v, {from: accounts[0]});
		const boolgcMZ95g = await GFCpYQiMIT.burn.call(uint06s4yj, {from: accounts[4]});

		assert.equal(boolipIPKA, true)
		await expect(GFCpYQiMIT.transferFrom.call(addressLwUvZvG, addressDyXhIT0, uintBYaoMV0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uint23pPS1 = BigInt("1582")
		const stringzPkX4Qe = "fA2tUdizUGEjIJu5TXe3B7eyuhAtEuIXog"
		const stringED7QkOD = "5DxzStgqBWzkfp1s8tyozlG1JW0PF9lCSMAdKqiAFJmdWhepN6yBLFbCSuSgiDEX"
		const GFCpYQiMIT = await GFC.new(uint23pPS1, stringzPkX4Qe, stringED7QkOD, {from: accounts[3]});
		const uintq7wM8Rg = BigInt("625")
		const uintuGKRzjr = BigInt("962")
		const addressGCYWwP = "0x0000000000000000000000000000000000000001"
		const uintRCDaUJ8 = BigInt("175")
		const addresshCh63Ky = accounts[1]
		const addressGJWX6oH = accounts[3]
		const uintI95kCOx = BigInt("1852")
		const boolKRp0vaq = await GFCpYQiMIT.burn.call(uintq7wM8Rg, {from: accounts[3]});
		const booloOA4LhZ = await GFCpYQiMIT.approve.call(addressGCYWwP, uintuGKRzjr, {from: accounts[0]});
		const bool8HJnUx = await GFCpYQiMIT.transferFrom.call(addressGJWX6oH, addresshCh63Ky, uintRCDaUJ8, {from: accounts[3]});
		const boolgcMZ95g = await GFCpYQiMIT.burn.call(uintI95kCOx, {from: accounts[4]});

		assert.equal(boolKRp0vaq, true)
		assert.equal(booloOA4LhZ, true)
		await expect(GFCpYQiMIT.transferFrom.call(addressGJWX6oH, addresshCh63Ky, uintRCDaUJ8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})