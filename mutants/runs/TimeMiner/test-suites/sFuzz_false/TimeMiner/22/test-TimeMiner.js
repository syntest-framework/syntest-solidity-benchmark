const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinervepfDwx = await TimeMiner.new({from: accounts[1]});
		const addressoeyLfEJ = "0x0000000000000000000000000000000000000001"
		const boolPlDA1nl = false
		const addressVjj1Pme = accounts[1]
		const uintZshMTOS = BigInt("1454")
		const addressPniapiJ = accounts[1]
		await TimeMinervepfDwx.preSaleFinished.call({from: accounts[0]});
		const uint25670KNDg = await TimeMinervepfDwx.tokensToClaim.call(addressoeyLfEJ, {from: accounts[4]});
		const addressk0rpMT1 = await TimeMinervepfDwx.whitelist.call(addressVjj1Pme, boolPlDA1nl, {from: accounts[0]});
		const boolqj0GRJS = await TimeMinervepfDwx.approve.call(addressPniapiJ, uintZshMTOS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinervepfDwx.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJHsG6d = await TimeMiner.new({from: accounts[2]});
		const uintd9oP7yl = BigInt("1060")
		const addressJ7Icsh = accounts[2]
		const uintTd26IAS = BigInt("1730")
		const uintyvCGZdd = BigInt("615")
		const addressk94UVIT = accounts[5]
		const booluHl1WTq = await TimeMinerJHsG6d.approve.call(addressJ7Icsh, uintd9oP7yl, {from: accounts[1]});
		const uint256ZJt73mu = await TimeMinerJHsG6d.changePreSalePriceIfToHigh.call(uintTd26IAS, {from: accounts[3]});
		const uint256xRCyaso = await TimeMinerJHsG6d.changePreSalePriceIfToHigh.call(uintyvCGZdd, {from: accounts[5]});
		const uint256lWmJbr = await TimeMinerJHsG6d.tokensToClaim.call(addressk94UVIT, {from: accounts[4]});

		assert.equal(booluHl1WTq, true)
		await expect(TimeMinerJHsG6d.changePreSalePriceIfToHigh.call(uintTd26IAS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinermy93MLe = await TimeMiner.new({from: accounts[1]});
		const uintzMZfafW = BigInt("920")
		const addressrFBm6HR = accounts[3]
		const uintVdRF4MM = BigInt("590")
		const uintvfncise = BigInt("830")
		const uintLqXOQBI = BigInt("1523")
		const addressH0w2zSu = accounts[2]
		const addressTS85LZs = accounts[1]
		const boolnDrMnkM = await TimeMinermy93MLe.transfer.call(addressrFBm6HR, uintzMZfafW, {from: accounts[2]});
		const booleNniPg = await TimeMinermy93MLe.infoStableSystem.call({from: accounts[4]});
		const uint25669I1cY = await TimeMinermy93MLe.setPrizeFromNewAddress.call(uintvfncise, uintVdRF4MM, {from: accounts[1]});
		const boolrzvbKYz = await TimeMinermy93MLe.transfer.call(addressH0w2zSu, uintLqXOQBI, {from: accounts[4]});
		const booljPKVDQZ = await TimeMinermy93MLe.infoStableSystem.call({from: accounts[4]});
		const uint256e9LX0j7 = await TimeMinermy93MLe.tokensToClaim.call(addressTS85LZs, {from: accounts[1]});

		await expect(TimeMinermy93MLe.transfer.call(addressrFBm6HR, uintzMZfafW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerI1UBNar = await TimeMiner.new({from: accounts[3]});
		const uintzyiJPZc = BigInt("922")
		const addressmOWrlKK = accounts[2]
		const addressy7AX5zE = "0x0000000000000000000000000000000000000001"
		const uinteZeDnb1 = BigInt("851")
		const uintPJ6tT9T = BigInt("2003")
		const addressWoncg36 = accounts[4]
		const booloOaRdWC = await TimeMinerI1UBNar.transferFrom.call(addressy7AX5zE, addressmOWrlKK, uintzyiJPZc, {from: accounts[1]});
		const uint256ZkcxFVu = await TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintPJ6tT9T, uinteZeDnb1, {from: accounts[0]});
		const boolqKWbdjG = await TimeMinerI1UBNar.isWhitelisted.call(addressWoncg36, {from: accounts[0]});

		await expect(TimeMinerI1UBNar.transferFrom.call(addressy7AX5zE, addressmOWrlKK, uintzyiJPZc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinergjUahJ6 = await TimeMiner.new({from: accounts[1]});
		const addressStQLlhS = accounts[5]
		const addressJm9Qjgv = accounts[4]
		const addressZG1e2gT = accounts[2]
		const uintBcEsfaS = BigInt("1775")
		const addresssQtP4n = accounts[2]
		const uint256F088Hsq = await TimeMinergjUahJ6.balanceOf.call(addressStQLlhS, {from: accounts[4]});
		const uint256YQwOkkq = await TimeMinergjUahJ6.balanceOfTokenCirculation.call(addressJm9Qjgv, {from: accounts[1]});
		const uint256tfhVYKF = await TimeMinergjUahJ6.balanceOf.call(addressZG1e2gT, {from: accounts[4]});
		await TimeMinergjUahJ6.preSaleFinished.call({from: accounts[4]});
		const boollUka3tn = await TimeMinergjUahJ6.approve.call(addresssQtP4n, uintBcEsfaS, {from: accounts[0]});

		assert.equal(uint256F088Hsq, BigInt("0"))
		assert.equal(uint256YQwOkkq, BigInt("0"))
		assert.equal(uint256tfhVYKF, BigInt("0"))
		await expect(TimeMinergjUahJ6.preSaleFinished.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzYbZ5S = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressb0G7wZ0 = accounts[1]
		const addressvh4a105 = accounts[0]
		const uintEpXxYBU = BigInt("664")
		const uintAZFbdRf = BigInt("505")
		const uint256dLei2Gs = await TimeMinerzYbZ5S.allInfoFor.call(addressb0G7wZ0, {from: accounts[2]});
		const uint2569Us6tX = await TimeMinerzYbZ5S.balanceOf.call(addressvh4a105, {from: accounts[0]});
		const uint256PUPmmeA = await TimeMinerzYbZ5S.setPrizeFromNewAddress.call(uintAZFbdRf, uintEpXxYBU, {from: accounts[2]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPdq2oB3 = await TimeMiner.new({from: accounts[3]});
		const boolAW7uhYX = false
		const addressXowQqi0 = accounts[2]
		const addressrJReJS = accounts[1]
		const addressOxK5Syr = await TimeMinerPdq2oB3.whitelist.call(addressXowQqi0, boolAW7uhYX, {from: "0x0000000000000000000000000000000000000001"});
		await TimeMinerPdq2oB3.preSaleFinished.call({from: accounts[3]});
		const uint256keQWikQ = await TimeMinerPdq2oB3.allInfoFor.call(addressrJReJS, {from: accounts[5]});
		await TimeMinerPdq2oB3.preSaleFinished.call({from: accounts[4]});

		await expect(TimeMinerPdq2oB3.whitelist.call(addressXowQqi0, boolAW7uhYX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerp4sb2Vz = await TimeMiner.new({from: accounts[3]});
		const addressRGLFXm8 = accounts[5]
		const addresslsHAG9d = accounts[0]
		const addressOrBixne = "0x0000000000000000000000000000000000000001"
		const uint256Y0Wvanw = await TimeMinerp4sb2Vz.allowance.call(addresslsHAG9d, addressRGLFXm8, {from: accounts[0]});
		const uint256B0cgTxa = await TimeMinerp4sb2Vz.tokensToClaim.call(addressOrBixne, {from: accounts[0]});
		await TimeMinerp4sb2Vz.preSaleFinished.call({from: accounts[5]});

		assert.equal(uint256Y0Wvanw, BigInt("0"))
		await expect(TimeMinerp4sb2Vz.tokensToClaim.call(addressOrBixne, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerqfdKqaV = await TimeMiner.new({from: accounts[0]});
		const uint0xZswm = BigInt("1500")
		const addressenuU3cq = accounts[3]
		const boolNqg6gNe = true
		const uintvBIJwnm = BigInt("1177")
		const addressD51GBmh = accounts[1]
		const addressfTB7TtK = accounts[3]
		const addressRZoEWUF = accounts[2]
		const boolRQ6RBsE = await TimeMinerqfdKqaV.approve.call(addressenuU3cq, uint0xZswm, {from: accounts[4]});
		const boolHkBzjwG = await TimeMinerqfdKqaV.setStableCoinSystem.call(boolNqg6gNe, {from: accounts[2]});
		await TimeMinerqfdKqaV.preSaleFinished.call({from: accounts[2]});
		const boolrrnt4T7 = await TimeMinerqfdKqaV.transferFrom.call(addressfTB7TtK, addressD51GBmh, uintvBIJwnm, {from: accounts[2]});
		const uint256uMw3EXo = await TimeMinerqfdKqaV.balanceOfTokenCirculation.call(addressRZoEWUF, {from: accounts[5]});

		assert.equal(boolRQ6RBsE, true)
		await expect(TimeMinerqfdKqaV.setStableCoinSystem.call(boolNqg6gNe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerI1UBNar = await TimeMiner.new({from: accounts[3]});
		const uintvIZrNG = BigInt("851")
		const uintptIjrxk = BigInt("2009")
		const addressZrc5rML = accounts[4]
		const uint256ZkcxFVu = await TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintptIjrxk, uintvIZrNG, {from: accounts[0]});
		const boolqKWbdjG = await TimeMinerI1UBNar.isWhitelisted.call(addressZrc5rML, {from: accounts[0]});

		await expect(TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintptIjrxk, uintvIZrNG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerI1UBNar = await TimeMiner.new({from: accounts[3]});
		const uintju28w9N = BigInt("922")
		const addresshbkzoO8 = accounts[3]
		const addressGWYLlV0 = "0x0000000000000000000000000000000000000001"
		const uintxscZR9b = BigInt("851")
		const uintbiMgi9k = BigInt("2003")
		const addresshgC07WN = accounts[4]
		const uint256yDprM9I = await TimeMinerI1UBNar.totalSupply.call({from: accounts[4]});
		const booloOaRdWC = await TimeMinerI1UBNar.transferFrom.call(addressGWYLlV0, addresshbkzoO8, uintju28w9N, {from: accounts[1]});
		const uint256ZkcxFVu = await TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintbiMgi9k, uintxscZR9b, {from: accounts[0]});
		const boolqKWbdjG = await TimeMinerI1UBNar.isWhitelisted.call(addresshgC07WN, {from: accounts[0]});

		assert.equal(uint256yDprM9I, BigInt("24000000"))
		await expect(TimeMinerI1UBNar.transferFrom.call(addressGWYLlV0, addresshbkzoO8, uintju28w9N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerI1UBNar = await TimeMiner.new({from: accounts[3]});
		const uint10JaK0 = BigInt("1462")
		const addressgLB0Nau = accounts[3]
		const uintQrCcpFO = BigInt("851")
		const uintIVAXKc2 = BigInt("2009")
		const addressyys2x2N = accounts[5]
		const boolVwlmmW = await TimeMinerI1UBNar.transfer.call(addressgLB0Nau, uint10JaK0, {from: accounts[3]});
		const uint256ZkcxFVu = await TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintIVAXKc2, uintQrCcpFO, {from: accounts[0]});
		const boolqKWbdjG = await TimeMinerI1UBNar.isWhitelisted.call(addressyys2x2N, {from: accounts[0]});

		assert.equal(boolVwlmmW, true)
		await expect(TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintIVAXKc2, uintQrCcpFO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerI1UBNar = await TimeMiner.new({from: accounts[3]});
		const uintOBJkBtP = BigInt("1462")
		const addressmnQcx7f = accounts[3]
		const addressy0CGZN = accounts[5]
		const boolVwlmmW = await TimeMinerI1UBNar.transfer.call(addressmnQcx7f, uintOBJkBtP, {from: accounts[3]});
		const uint256Xim7qcU = await TimeMinerI1UBNar.totalSupply.call({from: accounts[2]});
		const boolqKWbdjG = await TimeMinerI1UBNar.isWhitelisted.call(addressy0CGZN, {from: accounts[0]});

		assert.equal(boolVwlmmW, true)
		assert.equal(boolqKWbdjG, false)
		assert.equal(uint256Xim7qcU, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerI1UBNar = await TimeMiner.new({from: accounts[3]});
		const uintZT7i3wB = BigInt("1462")
		const addressndXByb = accounts[4]
		const uintxyaj4ZK = BigInt("851")
		const uintTp5CX8O = BigInt("2009")
		const addresspIuvJs = accounts[5]
		const boolVwlmmW = await TimeMinerI1UBNar.transfer.call(addressndXByb, uintZT7i3wB, {from: accounts[3]});
		const uint256ZkcxFVu = await TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintTp5CX8O, uintxyaj4ZK, {from: accounts[0]});
		const boolqKWbdjG = await TimeMinerI1UBNar.isWhitelisted.call(addresspIuvJs, {from: accounts[0]});

		assert.equal(boolVwlmmW, true)
		await expect(TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintTp5CX8O, uintxyaj4ZK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlo0ev3h = await TimeMiner.new({from: accounts[0]});
		const uintnl3nhfJ = BigInt("1923")
		const addressg9D9kk0 = accounts[1]
		const addressGTZVpSK = accounts[5]
		const addresszSFkJVD = "0x0000000000000000000000000000000000000001"
		const addressKDQq2cE = accounts[4]
		const uintbmxCS4h = BigInt("943")
		const uintqabk2YH = BigInt("1201")
		const addressE2iwzAE = accounts[3]
		const boolI7Ym3Kr = await TimeMinerlo0ev3h.approve.call(addressg9D9kk0, uintnl3nhfJ, {from: accounts[4]});
		const uint256ULU98LL = await TimeMinerlo0ev3h.allowance.call(addresszSFkJVD, addressGTZVpSK, {from: accounts[4]});
		const uint256yVNuRiP = await TimeMinerlo0ev3h.balanceOf.call(addressKDQq2cE, {from: accounts[5]});
		const uintzKJ5kEo = await TimeMinerlo0ev3h.preSale.call(uintbmxCS4h, {from: accounts[1]});
		const boolOtPJGeL = await TimeMinerlo0ev3h.transfer.call(addressE2iwzAE, uintqabk2YH, {from: accounts[0]});

		assert.equal(boolI7Ym3Kr, true)
		assert.equal(uint256ULU98LL, BigInt("0"))
		assert.equal(uint256yVNuRiP, BigInt("0"))
		await expect(TimeMinerlo0ev3h.preSale.call(uintbmxCS4h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerI1UBNar = await TimeMiner.new({from: accounts[3]});
		const uintrHTsZyP = BigInt("851")
		const uintw4kEv4j = BigInt("2009")
		const boolg3bjcJ = false
		const boole5M7g2C = await TimeMinerI1UBNar.infoStableSystem.call({from: accounts[0]});
		const uint256ZkcxFVu = await TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintw4kEv4j, uintrHTsZyP, {from: accounts[0]});
		const boolXc36tmo = await TimeMinerI1UBNar.setStableCoinSystem.call(boolg3bjcJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerI1UBNar.setPrizeFromNewAddress.call(uintw4kEv4j, uintrHTsZyP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerT818H2N = await TimeMiner.new({from: accounts[3]});
		const boolhQv87V = false
		const addresstPzj6yi = accounts[0]
		const addressB4yn4RW = accounts[5]
		const addressxcTolyR = "0x0000000000000000000000000000000000000001"
		const uintc1eYfN1 = BigInt("123")
		const addressFCxB1Tt = accounts[3]
		const boolW8r4FZy = await TimeMinerT818H2N.setStableCoinSystem.call(boolhQv87V, {from: accounts[3]});
		const uint256eCVnay9 = await TimeMinerT818H2N.allowance.call(addressB4yn4RW, addresstPzj6yi, {from: accounts[2]});
		const boolvhgDsle = await TimeMinerT818H2N.isWhitelisted.call(addressxcTolyR, {from: accounts[1]});
		const uint256dFIB6zj = await TimeMinerT818H2N.changePreSalePriceIfToHigh.call(uintc1eYfN1, {from: accounts[3]});
		const uint256kHMfVpK = await TimeMinerT818H2N.allInfoFor.call(addressFCxB1Tt, {from: accounts[3]});

		assert.equal(boolvhgDsle, false)
		assert.equal(uint256eCVnay9, BigInt("0"))
	});
})