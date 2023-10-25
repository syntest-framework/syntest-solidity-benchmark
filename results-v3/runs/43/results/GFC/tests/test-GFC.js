const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintAsHtBHy = BigInt("14")
		const stringfuYAyZw = "1e"
		const string3hlWTH = "Uv9B4nXi2eYu4APwa4ze9mYr6Wl7Wr0XcakNxYSvOXwWEHqtnkBfWL"
		const GFCt5Yp4Et = await GFC.new(uintAsHtBHy, stringfuYAyZw, string3hlWTH, {from: accounts[2]});
		const uintIkNJ9xv = BigInt("117")
		const addresskJrezX2 = accounts[4]
		const uintydzpQtq = BigInt("1865")
		const addressraD0HwV = accounts[3]
		const addressJVXaLTK = accounts[2]
		const uintHmLj7n = BigInt("1227")
		const addressy3WJ4Mf = accounts[1]
		const addressh6vuvkw = accounts[2]
		const booldaRVfi = await GFCt5Yp4Et.burnFrom.call(addresskJrezX2, uintIkNJ9xv, {from: accounts[1]});
		const boolPb3gh7v = await GFCt5Yp4Et.transferFrom.call(addressJVXaLTK, addressraD0HwV, uintydzpQtq, {from: accounts[2]});
		const boolzfuvSzW = await GFCt5Yp4Et.transferFrom.call(addressh6vuvkw, addressy3WJ4Mf, uintHmLj7n, {from: accounts[2]});

		await expect(GFCt5Yp4Et.burnFrom.call(addresskJrezX2, uintIkNJ9xv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintuvQRoXb = BigInt("456")
		const stringgimDlJp = "A"
		const stringtj8S01R = "7Dp3twjsovhBR87AINkIJaY3Hd3Yff"
		const GFCk362L6 = await GFC.new(uintuvQRoXb, stringgimDlJp, stringtj8S01R, {from: accounts[0]});
		const uintm0Kf7vz = BigInt("2040")
		const addressyUEokEI = accounts[3]
		const uintJ0nLTaV = BigInt("199")
		const addressriY7lwo = accounts[0]
		const uintznOZnW8 = BigInt("749")
		const addressEPmrog = accounts[2]
		const byteIEybaPE = "0x1717"
		const uintWUw88aZ = BigInt("773")
		const addressyY34npy = accounts[4]
		const boolLKFBQsp = await GFCk362L6.approve.call(addressyUEokEI, uintm0Kf7vz, {from: accounts[1]});
		const boolzvtawzN = await GFCk362L6.approve.call(addressriY7lwo, uintJ0nLTaV, {from: accounts[0]});
		const boolBawpv0G = await GFCk362L6.approve.call(addressEPmrog, uintznOZnW8, {from: accounts[1]});
		const boolsNMX8jK = await GFCk362L6.approveAndCall.call(addressyY34npy, uintWUw88aZ, byteIEybaPE, {from: accounts[4]});

		assert.equal(boolBawpv0G, true)
		assert.equal(boolLKFBQsp, true)
		assert.equal(boolzvtawzN, true)
		await expect(GFCk362L6.approveAndCall.call(addressyY34npy, uintWUw88aZ, byteIEybaPE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintaJWELPs = BigInt("207")
		const stringMrAwky = "k8Sev2cxidWfOzzsLC6VanTPK78qMyCaH7Ur82HiigYN6y1wC8"
		const strings6xRAg9 = "pCQlLrphCoMQzJ6zgGGPWdKTfDJ9puwgPKFYGTUoIdDD7gnOjUDcCn8u"
		const GFCor6nn2O = await GFC.new(uintaJWELPs, stringMrAwky, strings6xRAg9, {from: accounts[3]});
		const uintxm3IeGR = BigInt("1784")
		const uintqa4014c = BigInt("346")
		const addressmqiQeY6 = accounts[1]
		const addressmJpUzQp = accounts[0]
		const uintVN1Zck = BigInt("1491")
		const addressWJjCNZl = accounts[4]
		const boolM8ZEIsa = await GFCor6nn2O.burn.call(uintxm3IeGR, {from: accounts[2]});
		const booluCpUyp = await GFCor6nn2O.transferFrom.call(addressmJpUzQp, addressmqiQeY6, uintqa4014c, {from: "0x0000000000000000000000000000000000000001"});
		const boolyIljYpc = await GFCor6nn2O.approve.call(addressWJjCNZl, uintVN1Zck, {from: accounts[4]});

		await expect(GFCor6nn2O.burn.call(uintxm3IeGR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintSq3cT5w = BigInt("1531")
		const stringJ3FuNYo = "Lq5sYcviFkeLFvnR"
		const stringTYq44ud = "Jhab4RvyROXEuU3y6FyRGVJKSxeObm5sW47vc8QUpoLMAiK7Epayj2HmyqSV5kdcc6SscWSxNZXJzgyuutuO"
		const GFCASplAKr = await GFC.new(uintSq3cT5w, stringJ3FuNYo, stringTYq44ud, {from: accounts[4]});
		const uintlA0h2Jz = BigInt("246")
		const addressuu878dj = accounts[2]
		const addressFxChaq = accounts[3]
		const uintNDLm1yn = BigInt("49")
		const addressWEqFFwp = accounts[0]
		const uintgKRS61 = BigInt("855")
		const byteFBHuvYP = "0x1b1c0103131d0d181a07150114150a"
		const uintVK2KEmx = BigInt("277")
		const addressrM2nV0W = accounts[0]
		const uintEzlzEq7 = BigInt("703")
		const addressRhIb3Ed = accounts[0]
		const addressIjlntqC = accounts[3]
		const boolE2HMXT8 = await GFCASplAKr.transferFrom.call(addressFxChaq, addressuu878dj, uintlA0h2Jz, {from: accounts[1]});
		const boolJ5wT0K = await GFCASplAKr.approve.call(addressWEqFFwp, uintNDLm1yn, {from: accounts[3]});
		const boolabUqeYG = await GFCASplAKr.burn.call(uintgKRS61, {from: accounts[0]});
		const boolBWSjRKn = await GFCASplAKr.approveAndCall.call(addressrM2nV0W, uintVK2KEmx, byteFBHuvYP, {from: accounts[0]});
		const boolKu6gSuI = await GFCASplAKr.transferFrom.call(addressIjlntqC, addressRhIb3Ed, uintEzlzEq7, {from: accounts[5]});

		await expect(GFCASplAKr.transferFrom.call(addressFxChaq, addressuu878dj, uintlA0h2Jz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintfJjYYzF = BigInt("1479")
		const stringIIAH7Yr = "XOl15C4YLCREaHuelhosGTOzQpKsRuJ8CST7GYIt5YaNnk48ycLsoih7g4BuLu9"
		const stringeqJ7IRc = "BZzN3yJ7BcWQdShNNqhwKckdFR6bltBwUmbgq2vW9M2VRzItH9dyBXWrPWPBY3GomOuxjpj"
		const GFCISmOItM = await GFC.new(uintfJjYYzF, stringIIAH7Yr, stringeqJ7IRc, {from: accounts[5]});
		const uintNhOIXnp = BigInt("58")
		const addressjfYhoqT = "0x0000000000000000000000000000000000000001"
		const byteGWlOeIg = "0x201b06040d0c0c15051f"
		const uintsmfrj3 = BigInt("934")
		const addresseWgP4NB = "0x0000000000000000000000000000000000000001"
		const uintma8gz0b = BigInt("651")
		const addressMm4yFTv = accounts[2]
		const boolaPd8kwh = await GFCISmOItM.transfer.call(addressjfYhoqT, uintNhOIXnp, {from: accounts[4]});
		const boolFXQF22G = await GFCISmOItM.approveAndCall.call(addresseWgP4NB, uintsmfrj3, byteGWlOeIg, {from: accounts[0]});
		const boolyJCiOu3 = await GFCISmOItM.burnFrom.call(addressMm4yFTv, uintma8gz0b, {from: accounts[0]});

		await expect(GFCISmOItM.transfer.call(addressjfYhoqT, uintNhOIXnp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintxldghsZ = BigInt("139")
		const stringchjeUfl = "4VgNOefiAq8J6mR889abRJlxEnGQsfaNmTDHkN61EhQlA30q"
		const stringgTUddBu = "aUQgp3Hp9Mh7KDLFE95n0LuxQi2j"
		const GFCYGJcmmD = await GFC.new(uintxldghsZ, stringchjeUfl, stringgTUddBu, {from: "0x0000000000000000000000000000000000000001"});
		const uintuXmUOhW = BigInt("859")
		const addresszIMQJT6 = accounts[3]
		const uintPPdYNX = BigInt("956")
		const addressXHFgGqK = accounts[3]
		const bytevZSec11 = "0x0717150f110a011115171107200719021c131b1e19021e1e0408191d1b"
		const uintGgJzgT7 = BigInt("1462")
		const addressYPe5Pc9 = accounts[1]
		const uintu45pGxZ = BigInt("1009")
		const addressupnUZja = accounts[1]
		const addressfMChidS = accounts[3]
		const uintgOvHAro = BigInt("976")
		const addressbSyKF0w = accounts[2]
		const addressIghAETc = accounts[0]
		const boolptTgccI = await GFCYGJcmmD.burnFrom.call(addresszIMQJT6, uintuXmUOhW, {from: accounts[4]});
		const boolVy7Ren0 = await GFCYGJcmmD.approve.call(addressXHFgGqK, uintPPdYNX, {from: "0x0000000000000000000000000000000000000001"});
		const bool7AJLzV = await GFCYGJcmmD.approveAndCall.call(addressYPe5Pc9, uintGgJzgT7, bytevZSec11, {from: accounts[1]});
		const boolLJaxRV3 = await GFCYGJcmmD.transferFrom.call(addressfMChidS, addressupnUZja, uintu45pGxZ, {from: accounts[4]});
		const boolXhDvqQ = await GFCYGJcmmD.transferFrom.call(addressIghAETc, addressbSyKF0w, uintgOvHAro, {from: accounts[3]});
	});
})