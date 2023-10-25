const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringTlkJ4pi = "XeJpPLsWDY3ycieJyawQB99JvyBFpLIRAK7"
		const stringseZwcmL = "DMMf8t6OvHy2W5JJpORlF2XowPFSHvjLXF3Suv9zWUIVlLxcxie8MHqfLgfethAbf0lG"
		const uintNFpk3VG = BigInt("1805")
		const WOLFnm2xR6O = await WOLF.new(stringTlkJ4pi, stringseZwcmL, uintNFpk3VG, {from: accounts[1]});
		const uintWYqAeHH = BigInt("1950")
		const addressRM1T9fI = accounts[4]
		const addressRA5c9TL = accounts[2]
		const uintYnU351w = BigInt("1351")
		const address0FFube = "0x0000000000000000000000000000000000000001"
		const uintRW9BnS = BigInt("1824")
		const addressNxAPabv = accounts[2]
//		const boolszYHMOu = await WOLFnm2xR6O.transferFrom.call(addressRA5c9TL, addressRM1T9fI, uintWYqAeHH, {from: accounts[2]});
//		const booltWco1g2 = await WOLFnm2xR6O.approveAndCall.call(address0FFube, uintYnU351w, {from: accounts[1]});
//		const booledMeoY6 = await WOLFnm2xR6O.approveAndCall.call(addressNxAPabv, uintRW9BnS, {from: accounts[4]});

		await expect(WOLFnm2xR6O.transferFrom.call(addressRA5c9TL, addressRM1T9fI, uintWYqAeHH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const string8QXPg6 = "Yx"
		const stringA1AlvY = "PDRlM2HstRxIAIbtpSXyrl5dWHLBrgOuO8wfjAitH2kIJAKwsKb0LfrwTKc6nr2OsfpWxi9bKQDLbWV5WT"
		const uinteou1HGw = BigInt("1902")
		const WOLFf0og4sX = await WOLF.new(string8QXPg6, stringA1AlvY, uinteou1HGw, {from: accounts[3]});
		const addressbMWAjRB = accounts[3]
		const addressJCo0CHW = accounts[3]
		const uintAid9Ahl = BigInt("1597")
		const addressd6Rjl8J = accounts[2]
		const uinteMB9AsJ = BigInt("609")
		const addressiMoKTdo = accounts[2]
		const addresslfPhwBr = accounts[5]
		const uintGuDh70u = BigInt("1911")
		const addressVHrOSe9 = accounts[0]
		const addressKOqHh80 = accounts[0]
//		const boolOuLgBzk = await WOLFf0og4sX.transferownership.call(addressbMWAjRB, {from: accounts[5]});
//		const booluDAsgRN = await WOLFf0og4sX.transferownership.call(addressJCo0CHW, {from: accounts[2]});
//		const boolDKThkmC = await WOLFf0og4sX.transfer.call(addressd6Rjl8J, uintAid9Ahl, {from: accounts[5]});
//		const booltdFuXLk = await WOLFf0og4sX.transferFrom.call(addresslfPhwBr, addressiMoKTdo, uinteMB9AsJ, {from: accounts[2]});
//		const booluNQg23D = await WOLFf0og4sX.transferFrom.call(addressKOqHh80, addressVHrOSe9, uintGuDh70u, {from: accounts[4]});

		await expect(WOLFf0og4sX.transferownership.call(addressbMWAjRB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringGM539vx = "2JKAd64X6y7rOduRk6huDyFNrwWh"
		const stringcRldGO0 = "HsHgaMmCzKOiN0cfiKktkTBZzRxHYoHPmqPyHDuinEd5tldzCbo6gFUsVw2QvT"
		const uintCK6jqJE = BigInt("558")
		const WOLFMHGZ7z8 = await WOLF.new(stringGM539vx, stringcRldGO0, uintCK6jqJE, {from: "0x0000000000000000000000000000000000000001"});
		const uintHUpb2X = BigInt("292")
		const addressKKpKKbj = accounts[5]
		const addressO9cHCR6 = "0x0000000000000000000000000000000000000001"
		const uinthPKPGFd = BigInt("1904")
		const addressK3zpYej = accounts[4]
		const boolMUylqtP = await WOLFMHGZ7z8.transferFrom.call(addressO9cHCR6, addressKKpKKbj, uintHUpb2X, {from: accounts[0]});
		const boolGDWARPF = await WOLFMHGZ7z8.approveAndCall.call(addressK3zpYej, uinthPKPGFd, {from: accounts[4]});
	});

	it('test for WOLF', async () => {
		const stringtKK0LpZ = "cCRVRDdy1"
		const stringVo386zr = "gXAA3mzV7fgsE4676mT8IQbpDjHdx5ToPpBoKowrxcFYFu2arJTWIWLegBdQwSNEl7i6n77ds8uSuOhbAbtdcqXaj"
		const uintc4XgB5 = BigInt("938")
		const WOLFDEEAy3Q = await WOLF.new(stringtKK0LpZ, stringVo386zr, uintc4XgB5, {from: accounts[3]});
		const uintO3FFFUt = BigInt("1658")
		const addresstLBKfgb = accounts[4]
		const uintoDfPh9a = BigInt("1314")
		const addresskTkzFsE = accounts[3]
		const uintnOIQNeE = BigInt("814")
		const addressi7BRxIv = accounts[2]
		const addressQ1WHbuR = accounts[3]
//		const boolhah58o = await WOLFDEEAy3Q.approveAndCall.call(addresstLBKfgb, uintO3FFFUt, {from: "0x0000000000000000000000000000000000000001"});
//		const boolhxgzciW = await WOLFDEEAy3Q.approveAndCall.call(addresskTkzFsE, uintoDfPh9a, {from: accounts[4]});
//		const boolMgI0p3I = await WOLFDEEAy3Q.transferFrom.call(addressQ1WHbuR, addressi7BRxIv, uintnOIQNeE, {from: accounts[3]});

		await expect(WOLFDEEAy3Q.approveAndCall.call(addresstLBKfgb, uintO3FFFUt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringB4Sl7V = "IlZRwgQ7965BjGUgRkFvhOkSzxLIwxeVlL7upEDAQUbchJw4heuAawjJdBj8R4Fm1CeVe81j1lQAVVzoenX2r1fDDgCwMFb"
		const stringqZaAm77 = "VKDfDbWRcyKYbGLNtZGC2OHeShr1OCcbWZjAhxdPpL1xv5j75sW2ynPrJrRmvJAsCl9y2W"
		const uintEvjq0H4 = BigInt("550")
		const WOLFCTopcT = await WOLF.new(stringB4Sl7V, stringqZaAm77, uintEvjq0H4, {from: accounts[2]});
		const uintb9I2yuu = BigInt("203")
		const addresss8OhFhF = accounts[3]
		const uintNyNkJC7 = BigInt("451")
		const addressWkb7Ty4 = accounts[2]
		const addressbnwpZku = "0x0000000000000000000000000000000000000001"
		const uintiCMqy7d = BigInt("340")
		const addressrtCLk4z = "0x0000000000000000000000000000000000000001"
		const uintcLsp7B = BigInt("1766")
		const addressx0Armdx = accounts[3]
		const addressq7jl18o = accounts[2]
		const boolPsrVs2 = await WOLFCTopcT.transfer.call(addresss8OhFhF, uintb9I2yuu, {from: accounts[2]});
//		const boolMC4eykA = await WOLFCTopcT.transferFrom.call(addressbnwpZku, addressWkb7Ty4, uintNyNkJC7, {from: accounts[4]});
//		const boolHLmhApj = await WOLFCTopcT.transfer.call(addressrtCLk4z, uintiCMqy7d, {from: accounts[5]});
//		const boolmkGay7B = await WOLFCTopcT.transferFrom.call(addressq7jl18o, addressx0Armdx, uintcLsp7B, {from: accounts[3]});

		assert.equal(boolPsrVs2, true)
		await expect(WOLFCTopcT.transferFrom.call(addressbnwpZku, addressWkb7Ty4, uintNyNkJC7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFJfhLc = "7Q8yy5khDOYPXEk8w9gLwbp9GtMCCHGCjr"
		const stringR00qY2p = "PTwHNfNiqnXpEIILIbA5m5LvZb6Gvd"
		const uintjKRk9L0 = BigInt("1648")
		const WOLFT8LV7vh = await WOLF.new(stringFJfhLc, stringR00qY2p, uintjKRk9L0, {from: accounts[0]});
		const uintTr1z6iF = BigInt("1196")
		const addressr9EvE3e = accounts[4]
		const uintLKu9qK = BigInt("462")
		const addressKZrpvjh = accounts[1]
		const boolkM1q8AQ = await WOLFT8LV7vh.approveAndCall.call(addressr9EvE3e, uintTr1z6iF, {from: accounts[0]});
		const boolqfx06c = await WOLFT8LV7vh.approve.call(addressKZrpvjh, uintLKu9qK, {from: accounts[0]});

		assert.equal(boolkM1q8AQ, true)
		assert.equal(boolqfx06c, true)
	});

	it('test for WOLF', async () => {
		const stringFFHe5u5 = "raP5e8DD4Af7lz"
		const stringW5UepmI = "8VSwbg3YDyrpjWnN1DKGzucRY4w2z1GmajUXAjtbAfcNugfH9ng5FBz1NHd8ljQGrz"
		const uinttPNAmT3 = BigInt("1346")
		const WOLFLBQtclz = await WOLF.new(stringFFHe5u5, stringW5UepmI, uinttPNAmT3, {from: accounts[4]});
		const uintAwHgJCU = BigInt("1677")
		const addressE5AFwsp = accounts[4]
		const addressJepbt4P = accounts[2]
		const addressI2iPNYl = accounts[3]
		const addressWuA07BE = accounts[4]
		const uintF250Ek5 = BigInt("641")
		const addressZhgfrWl = accounts[0]
		const boolLQw0DZp = await WOLFLBQtclz.approve.call(addressE5AFwsp, uintAwHgJCU, {from: accounts[0]});
		const boolfszcJpu = await WOLFLBQtclz.transferownership.call(addressJepbt4P, {from: accounts[4]});
		const boolXRtvITm = await WOLFLBQtclz.transferownership.call(addressI2iPNYl, {from: accounts[4]});
//		const boolaDasEDu = await WOLFLBQtclz.transferownership.call(addressWuA07BE, {from: accounts[3]});
//		const boolIZ5QSFT = await WOLFLBQtclz.approve.call(addressZhgfrWl, uintF250Ek5, {from: accounts[3]});

		assert.equal(boolLQw0DZp, true)
		assert.equal(boolXRtvITm, true)
		assert.equal(boolfszcJpu, true)
		await expect(WOLFLBQtclz.transferownership.call(addressWuA07BE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFJfhLc = "7Q8yy5khDOYPXEk8w9gLwbp9GtMCCHGCjr"
		const stringR00qY2p = "PTwHNfNiqnXpEIILIbA5m5LvZb6Gvd"
		const uintfMTYERa = BigInt("1648")
		const WOLFT8LV7vh = await WOLF.new(stringFJfhLc, stringR00qY2p, uintfMTYERa, {from: accounts[0]});
		const uintrr7SbpK = BigInt("190")
		const addressKrdzwBv = accounts[4]
		const uintuJ2tFbs = BigInt("0")
		const addressAto9OHP = accounts[1]
		const uintWLnRPEZ = BigInt("1574")
		const addressS2LNf8t = accounts[5]
		const uintsSVv9W2 = BigInt("462")
		const addressURaO181 = accounts[1]
		const boolnXL2x3 = await WOLFT8LV7vh.approve.call(addressKrdzwBv, uintrr7SbpK, {from: accounts[2]});
		const boolwnbAfl = await WOLFT8LV7vh.transfer.call(addressAto9OHP, uintuJ2tFbs, {from: accounts[4]});
		const boolZ4cnRoz = await WOLFT8LV7vh.approve.call(addressS2LNf8t, uintWLnRPEZ, {from: accounts[5]});
		const boolqfx06c = await WOLFT8LV7vh.approve.call(addressURaO181, uintsSVv9W2, {from: accounts[0]});

		assert.equal(boolZ4cnRoz, true)
		assert.equal(boolnXL2x3, true)
		assert.equal(boolqfx06c, true)
		assert.equal(boolwnbAfl, true)
	});

	it('test for WOLF', async () => {
		const stringFJfhLc = "7Q8yy5khDOYPXEk8w9gLwbp9GtMCCHGCjr"
		const stringR00qY2p = "PTwHNfNiqnXpEIILIbA5m5LvZb6Gvd"
		const uintAuuNEjR = BigInt("1648")
		const WOLFT8LV7vh = await WOLF.new(stringFJfhLc, stringR00qY2p, uintAuuNEjR, {from: accounts[0]});
		const uintl0m4Qqx = BigInt("0")
		const address31Y0b6 = accounts[5]
		const uintN2vCmTN = BigInt("104")
		const addressnjOftlL = accounts[4]
		const addressSmBHRT = accounts[1]
		const uintASz74F7 = BigInt("381")
		const addressWotYMcP = accounts[4]
		const uintOkY4ui = BigInt("1579")
		const addressmtohz5D = accounts[3]
		const addressdou4OGD = accounts[4]
		const uinti1FDdoK = BigInt("1632")
		const addresssFGro8R = accounts[1]
		const addressxp4hcVy = accounts[4]
		const uintts4LR5 = BigInt("1403")
		const addressgI1QSvT = accounts[0]
		const addressAVOBM6e = accounts[2]
		const uintglT2fPG = BigInt("564")
		const addressbgjBXon = accounts[2]
		const uintIzIdUkU = BigInt("1312")
		const addresstYOfyWw = accounts[5]
		const addressg4qr8Z3 = accounts[0]
		const boolRN1oQNL = await WOLFT8LV7vh.approveAndCall.call(address31Y0b6, uintl0m4Qqx, {from: accounts[0]});
//		const boolivOTZDj = await WOLFT8LV7vh.transferFrom.call(addressSmBHRT, addressnjOftlL, uintN2vCmTN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYcar4ut = await WOLFT8LV7vh.approve.call(addressWotYMcP, uintASz74F7, {from: accounts[0]});
//		const boolGvsuPad = await WOLFT8LV7vh.transferFrom.call(addressdou4OGD, addressmtohz5D, uintOkY4ui, {from: accounts[3]});
//		const boolfa3QnRs = await WOLFT8LV7vh.transferFrom.call(addressxp4hcVy, addresssFGro8R, uinti1FDdoK, {from: accounts[4]});
//		const boolr7BxdVy = await WOLFT8LV7vh.transferFrom.call(addressAVOBM6e, addressgI1QSvT, uintts4LR5, {from: accounts[4]});
//		const booliMsK1Fb = await WOLFT8LV7vh.approve.call(addressbgjBXon, uintglT2fPG, {from: "0x0000000000000000000000000000000000000001"});
//		const boolhbnX5V = await WOLFT8LV7vh.transferFrom.call(addressg4qr8Z3, addresstYOfyWw, uintIzIdUkU, {from: accounts[3]});

		assert.equal(boolRN1oQNL, true)
		await expect(WOLFT8LV7vh.transferFrom.call(addressSmBHRT, addressnjOftlL, uintN2vCmTN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})