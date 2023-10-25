const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintXPiS82a = BigInt("1024")
		const stringrP5sdHP = "ZT6qsTtjythoXPsDm6YSj88sBB4mS8n4hRHFoa116qyhs"
		const stringIg01Wjs = "ikpbdPYTLWid5FB3MIvwd6oe99J"
		const GFCQULcwrg = await GFC.new(uintXPiS82a, stringrP5sdHP, stringIg01Wjs, {from: accounts[2]});
		const uintVPWhaJn = BigInt("579")
		const addressrPm9907 = accounts[4]
		const uintvKC9Ru8 = BigInt("517")
		const uintixqU4i = BigInt("1240")
		const addressxySsGxk = accounts[0]
		const uintlcufbTN = BigInt("1886")
		const addresscQzIuH5 = accounts[2]
		const addressmhGjHd5 = accounts[1]
		const uintnTq84w8 = BigInt("339")
		const boolTW2UBrO = await GFCQULcwrg.approve.call(addressrPm9907, uintVPWhaJn, {from: accounts[1]});
//		const boolqWfyEOX = await GFCQULcwrg.burn.call(uintvKC9Ru8, {from: accounts[1]});
//		const boolwPrh3Rl = await GFCQULcwrg.approve.call(addressxySsGxk, uintixqU4i, {from: accounts[4]});
//		const boolEFGgh7 = await GFCQULcwrg.transferFrom.call(addressmhGjHd5, addresscQzIuH5, uintlcufbTN, {from: accounts[3]});
//		const boolid1zEvJ = await GFCQULcwrg.burn.call(uintnTq84w8, {from: accounts[5]});

		assert.equal(boolTW2UBrO, true)
		await expect(GFCQULcwrg.burn.call(uintvKC9Ru8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintOMwiJn = BigInt("1976")
		const stringtQQkFsV = "13WdzQJtpbrH4jlXP2EbV68RBN4j7f1rPAjbbDz6M18YXKLktvs4vvPabDEtby1oaK"
		const stringVWO7boz = "wHx2DKiKY3y8wy6UEri71FDrHZ63vhYDrqTEqbvfxergMskOJweuZzTUkBnyvsf5as"
		const GFCHvuuZM5 = await GFC.new(uintOMwiJn, stringtQQkFsV, stringVWO7boz, {from: accounts[1]});
		const uintNZSRKlc = BigInt("1520")
		const uintEjJc51r = BigInt("754")
		const addressUGiqlhd = accounts[1]
		const bytehU4v4Iu = "0x0d181b"
		const uintt5Yx08e = BigInt("178")
		const addressU2MKAgl = accounts[2]
		const boolthjix5t = await GFCHvuuZM5.burn.call(uintNZSRKlc, {from: accounts[1]});
		const boolKNvPzqo = await GFCHvuuZM5.approve.call(addressUGiqlhd, uintEjJc51r, {from: accounts[0]});
//		const boolVa9lfij = await GFCHvuuZM5.approveAndCall.call(addressU2MKAgl, uintt5Yx08e, bytehU4v4Iu, {from: accounts[4]});

		assert.equal(boolKNvPzqo, true)
		assert.equal(boolthjix5t, true)
		await expect(GFCHvuuZM5.approveAndCall.call(addressU2MKAgl, uintt5Yx08e, bytehU4v4Iu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintdAvdFiF = BigInt("583")
		const stringDSVbc7B = "ie8RmzSbGnC4ao0P4pVR4Aebypei6qBJHYt8E6RKh6VSdNJFqCVkEIidkR7W"
		const stringD0tU0yS = "2WzOFGTaz87tHt6VVfjjbKDiA78AWrGm7PTg7mH96hLxFKsFJoaEOBXr2xkq1GEdPM0Jh924hMbqquDMsuBCJL2zb"
		const GFClkNT0cY = await GFC.new(uintdAvdFiF, stringDSVbc7B, stringD0tU0yS, {from: "0x0000000000000000000000000000000000000001"});
		const uintewJDC2 = BigInt("387")
		const addressWOdh7m = accounts[4]
		const byteW5D8PcZ = "0x05010c0b15"
		const uintK6G8E7Q = BigInt("133")
		const addressmZUd6Fe = "0x0000000000000000000000000000000000000001"
		const uintPI9miop = BigInt("747")
		const address7b3JSm = accounts[4]
		const uintHqNTfqf = BigInt("406")
		const addresskaGfrkX = accounts[1]
		const uintlnSVf3y = BigInt("1047")
		const booln6Nyqfc = await GFClkNT0cY.approve.call(addressWOdh7m, uintewJDC2, {from: "0x0000000000000000000000000000000000000001"});
		const boolMh6O1P7 = await GFClkNT0cY.approveAndCall.call(addressmZUd6Fe, uintK6G8E7Q, byteW5D8PcZ, {from: accounts[1]});
		const boolXXomxd1 = await GFClkNT0cY.approve.call(address7b3JSm, uintPI9miop, {from: accounts[4]});
		const boolkRPHwSi = await GFClkNT0cY.approve.call(addresskaGfrkX, uintHqNTfqf, {from: accounts[2]});
		const boolzPip21O = await GFClkNT0cY.burn.call(uintlnSVf3y, {from: accounts[4]});
	});

	it('test for GFC', async () => {
		const uintvd5FLdh = BigInt("1696")
		const stringUEORtAn = "4aIQdw8buwxhmwrFcx2ciPj78L9brpL90PDOzjg9tnBHTRJ0oizSqahMWgK5G"
		const stringYluiUG = "zBvXrbrz5BzWdmZBFv1mnUdzb2BcONdnoJFKs0UWQPdkskgruhpCQMNUb5sfgvbx"
		const GFCGgdCFAI = await GFC.new(uintvd5FLdh, stringUEORtAn, stringYluiUG, {from: accounts[3]});
		const uintnWIIVku = BigInt("1605")
		const addressIzp9L6e = accounts[4]
		const uintkxCUlBQ = BigInt("196")
		const addressUF5XP4 = accounts[3]
		const bytehvxhZFr = "0x041e1c090b0e1812090c1f2015130716201b1912151b0d110b0b13"
		const uintHrMFQi = BigInt("1445")
		const addressTgJv3I = accounts[2]
		const uintIPwyeua = BigInt("1511")
		const addresso1oBOwz = accounts[5]
		const addressWN6uR3 = accounts[3]
		const uintMUBuGw = BigInt("1761")
		const bool1yU5Sl = await GFCGgdCFAI.approve.call(addressIzp9L6e, uintnWIIVku, {from: accounts[3]});
//		const boolUMOfDS2 = await GFCGgdCFAI.burnFrom.call(addressUF5XP4, uintkxCUlBQ, {from: accounts[4]});
//		const boolAUiqTpQ = await GFCGgdCFAI.approveAndCall.call(addressTgJv3I, uintHrMFQi, bytehvxhZFr, {from: accounts[4]});
//		const boolIqp2VjG = await GFCGgdCFAI.transferFrom.call(addressWN6uR3, addresso1oBOwz, uintIPwyeua, {from: accounts[0]});
//		const boolsJNGXBe = await GFCGgdCFAI.burn.call(uintMUBuGw, {from: accounts[5]});

		assert.equal(bool1yU5Sl, true)
		await expect(GFCGgdCFAI.burnFrom.call(addressUF5XP4, uintkxCUlBQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintQY0X0YE = BigInt("310")
		const stringx4vwarZ = "7g5"
		const stringXjrnQk3 = "KpFmiyc8jANzJ6zgEuu8fhjaWnoEo"
		const GFCtUaKEc = await GFC.new(uintQY0X0YE, stringx4vwarZ, stringXjrnQk3, {from: accounts[0]});
		const uintJR4Tz12 = BigInt("1424")
		const addressMKW7XiE = "0x0000000000000000000000000000000000000001"
		const addressl9keFjd = accounts[3]
		const uintfdt9PK = BigInt("1518")
		const addresswCIa1LA = accounts[2]
		const byteSOvJpQG = "0x1b1017060e1c030e090316110a1c140f1d13080819180e00061206080806"
		const uintX0Hmdlb = BigInt("634")
		const addressBUAPyS9 = accounts[0]
		const uintOslf0S3 = BigInt("1587")
		const addressasArPkH = accounts[5]
		const uintAVvJ2jU = BigInt("1227")
		const addressP7Rrozh = accounts[2]
//		const boolojdMTs = await GFCtUaKEc.transferFrom.call(addressl9keFjd, addressMKW7XiE, uintJR4Tz12, {from: accounts[4]});
//		const boolMU2sCg7 = await GFCtUaKEc.transfer.call(addresswCIa1LA, uintfdt9PK, {from: accounts[4]});
//		const boolHqPl4uh = await GFCtUaKEc.approveAndCall.call(addressBUAPyS9, uintX0Hmdlb, byteSOvJpQG, {from: accounts[5]});
//		const boolec6ptcF = await GFCtUaKEc.transfer.call(addressasArPkH, uintOslf0S3, {from: accounts[0]});
//		const boolcLHZfWh = await GFCtUaKEc.transfer.call(addressP7Rrozh, uintAVvJ2jU, {from: accounts[0]});

		await expect(GFCtUaKEc.transferFrom.call(addressl9keFjd, addressMKW7XiE, uintJR4Tz12, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uint0gTDfo = BigInt("610")
		const stringfxIFo1 = "63LkQUFh9hE5u2o7ncyypXpJFHgwiWYLi08dp8X6JV7m5MeJqe0moQLnwlW"
		const stringUjOcXt3 = "VsY2inG7EKxNpez3o9PLGTkTognlwoVqCgWXVJHaMHGNOSvxVeNv6jBlDpHrd6WJVgSUMxYbMBHv8j4g1Q5VnirdC"
		const GFCKfTPdX8 = await GFC.new(uint0gTDfo, stringfxIFo1, stringUjOcXt3, {from: accounts[4]});
		const uintCyTDbbq = BigInt("509")
		const addressKqeEEjE = accounts[4]
		const bytevIFby27 = "0x0c09080b0e1e1e081a100102070a1e171b1e19"
		const uintlOn5KCg = BigInt("1902")
		const addressjOzIEHa = accounts[5]
		const byteoHfH9cm = "0x151a0218100a190211081d1404040c021f10201a1c1310001b160a1c141205"
		const uinttaBcem2 = BigInt("1226")
		const addressXboqkIG = accounts[1]
		const byteDd6Hzo = "0x0f1f181e1810140815030a0405"
		const uintTyGAKrM = BigInt("229")
		const addressmLMJ822 = accounts[1]
		const boolVAcnfq9 = await GFCKfTPdX8.transfer.call(addressKqeEEjE, uintCyTDbbq, {from: accounts[4]});
//		const boollUjE7QF = await GFCKfTPdX8.approveAndCall.call(addressjOzIEHa, uintlOn5KCg, bytevIFby27, {from: accounts[2]});
//		const boolGm6TBkJ = await GFCKfTPdX8.approveAndCall.call(addressXboqkIG, uinttaBcem2, byteoHfH9cm, {from: accounts[4]});
//		const boolmtpwb8 = await GFCKfTPdX8.approveAndCall.call(addressmLMJ822, uintTyGAKrM, byteDd6Hzo, {from: accounts[1]});

		assert.equal(boolVAcnfq9, true)
		await expect(GFCKfTPdX8.approveAndCall.call(addressjOzIEHa, uintlOn5KCg, bytevIFby27, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})