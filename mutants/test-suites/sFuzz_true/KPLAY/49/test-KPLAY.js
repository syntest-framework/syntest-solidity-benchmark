const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYXC1ve5B = await KPLAY.new({from: accounts[4]});
		const addressGgjS1pR = accounts[2]
		const uintl981Xl0 = BigInt("915")
		const uintEYGeGiM = BigInt("857")
		const addresscwWpCpB = accounts[3]
		const addressquFvREf = accounts[4]
		const addressJR4yp8Q = accounts[4]
		const uint256KLKyy9O = await KPLAYXC1ve5B.balanceOf.call(addressGgjS1pR, {from: accounts[2]});
		const boolD072eT7 = await KPLAYXC1ve5B.transferWithLock.call(addresscwWpCpB, uintEYGeGiM, uintl981Xl0, {from: accounts[4]});
//		await KPLAYXC1ve5B.whenNotPaused.call({from: accounts[2]});
//		const uint256xSBu09 = await KPLAYXC1ve5B.allowance.call(addressJR4yp8Q, addressquFvREf, {from: accounts[5]});

		assert.equal(boolD072eT7, true)
		assert.equal(uint256KLKyy9O, BigInt("0"))
		await expect(KPLAYXC1ve5B.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNWpxd9g = await KPLAY.new({from: accounts[0]});
		const uintA7gnTkV = BigInt("1236")
		const addresszHjVOL8 = accounts[3]
		const uinttLALcTh = BigInt("1709")
		const uintasun649 = BigInt("1600")
		const addressWu33mqu = accounts[2]
		const boolihV9yu7 = await KPLAYNWpxd9g.approve.call(addresszHjVOL8, uintA7gnTkV, {from: accounts[0]});
//		await KPLAYNWpxd9g.onlyOwner.call({from: accounts[1]});
//		const boolm7er7ba = await KPLAYNWpxd9g.transferWithLock.call(addressWu33mqu, uintasun649, uinttLALcTh, {from: accounts[2]});
		await KPLAYNWpxd9g.onlyOwner.call({from: accounts[1]});
//		const uint256Odb0DL = await KPLAYNWpxd9g.totalSupply.call({from: accounts[5]});

		assert.equal(boolihV9yu7, true)
		await expect(KPLAYNWpxd9g.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUYTfYZ = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLhvI4A2 = BigInt("1225")
		const addressqUMYFWI = "0x0000000000000000000000000000000000000001"
		const addressfr36m0Z = accounts[3]
		const uintyWT9qA = BigInt("775")
		const uintkdAVCjE = BigInt("18")
		const addressiKpaftE = accounts[4]
		const addressvqsxSaO = accounts[3]
		await KPLAYUYTfYZ.onlyOwner.call({from: accounts[2]});
		const boolSqP3O0X = await KPLAYUYTfYZ.transferFrom.call(addressfr36m0Z, addressqUMYFWI, uintLhvI4A2, {from: accounts[4]});
		const uint256D1gL2wk = await KPLAYUYTfYZ.currentTime.call({from: accounts[3]});
		const boolcLOSkAQ = await KPLAYUYTfYZ.transferWithLock.call(addressiKpaftE, uintkdAVCjE, uintyWT9qA, {from: accounts[4]});
		const addressSiPkjQt = await KPLAYUYTfYZ.transferOwnership.call(addressvqsxSaO, {from: accounts[1]});
	});

	it('test for KPLAY', async () => {
		const KPLAYvVxK88 = await KPLAY.new({from: accounts[2]});
		const addressK6lRszW = accounts[0]
		const addressQsR9MA = accounts[1]
		const uintNyzEluz = BigInt("97")
		const addressHvlO2Cg = accounts[3]
		const uint256LDAdMUB = await KPLAYvVxK88.balanceOf.call(addressK6lRszW, {from: accounts[4]});
		const uint256NaoRYKo = await KPLAYvVxK88.lockCount.call(addressQsR9MA, {from: accounts[4]});
//		const boolDdIobyB = await KPLAYvVxK88.mint.call(addressHvlO2Cg, uintNyzEluz, {from: accounts[3]});

		assert.equal(uint256LDAdMUB, BigInt("0"))
		assert.equal(uint256NaoRYKo, BigInt("0"))
		await expect(KPLAYvVxK88.mint.call(addressHvlO2Cg, uintNyzEluz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEat0udP = await KPLAY.new({from: accounts[0]});
		const uintCrgtbFs = BigInt("902")
		const addressfWGSGd = accounts[4]
		const uint6M26IL = BigInt("2031")
		const addressVqJnjDP = accounts[0]
//		const booluwLsR7r = await KPLAYEat0udP.transfer.call(addressfWGSGd, uintCrgtbFs, {from: accounts[2]});
//		await KPLAYEat0udP.pause.call({from: accounts[3]});
//		const boolyShOgEH = await KPLAYEat0udP.mint.call(addressVqJnjDP, uint6M26IL, {from: accounts[4]});

		await expect(KPLAYEat0udP.transfer.call(addressfWGSGd, uintCrgtbFs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const addressdbBlSr = accounts[3]
		const addressKsBbo3S = "0x0000000000000000000000000000000000000001"
		const addressHQJvqxy = await KPLAYVq4jHr.transferOwnership.call(addressdbBlSr, {from: accounts[0]});
		const uint256pU7z7p0 = await KPLAYVq4jHr.balanceOf.call(addressKsBbo3S, {from: accounts[2]});

		assert.equal(uint256pU7z7p0, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYeV29wFA = await KPLAY.new({from: accounts[0]});
		const uintTNABS4v = BigInt("521")
		const addressot5OPBW = accounts[1]
//		const boolWIPdx7v = await KPLAYeV29wFA.decreaseAllowance.call(addressot5OPBW, uintTNABS4v, {from: accounts[5]});
//		await KPLAYeV29wFA.unpause.call({from: accounts[3]});

		await expect(KPLAYeV29wFA.decreaseAllowance.call(addressot5OPBW, uintTNABS4v, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIoRpQ2 = await KPLAY.new({from: accounts[4]});
		const uintVqwoeCl = BigInt("1377")
		const addressf5zURn5 = accounts[2]
		const uinturpQGh = BigInt("1272")
		const uintmSZArMg = BigInt("68")
		const addressGLmsygu = accounts[3]
		const uintCRzihhH = BigInt("295")
		const addressLvrjPyT = accounts[0]
		const boolXfEdtd = await KPLAYIoRpQ2.increaseAllowance.call(addressf5zURn5, uintVqwoeCl, {from: accounts[4]});
//		const boolTIcAquf = await KPLAYIoRpQ2.transferWithLockAfter.call(addressGLmsygu, uintmSZArMg, uinturpQGh, {from: accounts[3]});
//		const boolZQtKCSi = await KPLAYIoRpQ2.approve.call(addressLvrjPyT, uintCRzihhH, {from: accounts[0]});

		assert.equal(boolXfEdtd, true)
		await expect(KPLAYIoRpQ2.transferWithLockAfter.call(addressGLmsygu, uintmSZArMg, uinturpQGh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const uintPe7hLu = BigInt("1618")
		const addressPT3wvmY = accounts[3]
		const addressTGA5De = accounts[4]
		const addressYIo56X = accounts[4]
//		const boolHW0srhF = await KPLAYVq4jHr.transferFrom.call(addressTGA5De, addressPT3wvmY, uintPe7hLu, {from: accounts[0]});
//		const addressHQJvqxy = await KPLAYVq4jHr.transferOwnership.call(addressYIo56X, {from: accounts[0]});

		await expect(KPLAYVq4jHr.transferFrom.call(addressTGA5De, addressPT3wvmY, uintPe7hLu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const addressZ0Kq04 = accounts[4]
		const addressEuGAutY = accounts[0]
		const addressHQJvqxy = await KPLAYVq4jHr.transferOwnership.call(addressZ0Kq04, {from: accounts[0]});
		const addressNvDaKA7 = await KPLAYVq4jHr.unfreeze.call(addressEuGAutY, {from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const addressMZ53hRW = accounts[0]
		const addressAIyq3pP = accounts[5]
		const addressfrjj55G = "0x0000000000000000000000000000000000000000"
		const boolezDe3s7 = await KPLAYVq4jHr.isFrozen.call(addressMZ53hRW, {from: "0x0000000000000000000000000000000000000001"});
		const boolVpHo4Dk = await KPLAYVq4jHr.isFrozen.call(addressAIyq3pP, {from: accounts[4]});
		const uint256pU7z7p0 = await KPLAYVq4jHr.balanceOf.call(addressfrjj55G, {from: accounts[2]});
		const uint256p1M9pmF = await KPLAYVq4jHr.totalSupply.call({from: accounts[0]});

		assert.equal(boolVpHo4Dk, false)
		assert.equal(boolezDe3s7, false)
		assert.equal(uint256p1M9pmF, BigInt("10000000000000000"))
		assert.equal(uint256pU7z7p0, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYRiUY3Dh = await KPLAY.new({from: accounts[3]});
		const addresscyQ4Sqb = accounts[4]
		const addressSHWwUc4 = accounts[0]
		const uintp9eElhC = BigInt("1677")
		const addressPWuIBy = "0x0000000000000000000000000000000000000001"
		const addressHIWf0DB = accounts[1]
		const uintMIiPFYg = BigInt("1595")
		const addresstB8dkqD = accounts[2]
		const addresso6Qx7X7 = accounts[2]
		const uint256OH8BKt3 = await KPLAYRiUY3Dh.allowance.call(addressSHWwUc4, addresscyQ4Sqb, {from: accounts[0]});
		const boolcvgTFPw = await KPLAYRiUY3Dh.transfer.call(addressPWuIBy, uintp9eElhC, {from: accounts[3]});
//		const addressPKM5MJT = await KPLAYRiUY3Dh.freeze.call(addressHIWf0DB, {from: accounts[1]});
//		const boolrGDEl4u = await KPLAYRiUY3Dh.transfer.call(addresstB8dkqD, uintMIiPFYg, {from: accounts[5]});
//		const addressO7J0cBF = await KPLAYRiUY3Dh.transferOwnership.call(addresso6Qx7X7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcvgTFPw, true)
		assert.equal(uint256OH8BKt3, BigInt("0"))
		await expect(KPLAYRiUY3Dh.freeze.call(addressHIWf0DB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDqKjkS6 = await KPLAY.new({from: accounts[0]});
		const uintOg02eeQ = BigInt("1588")
		const addressJwZy77 = accounts[4]
		const uintpbsxIDw = BigInt("1549")
		const addressflrHnJp = accounts[3]
		const uintlcBb5B = BigInt("28")
		const addressYYPOyVs = accounts[4]
		const uintLzQsfIx = BigInt("41")
		const addressjeW8woT = accounts[0]
//		await KPLAYDqKjkS6.renounceOwnership.call({from: accounts[0]});
//		const addressnhfOqzR = await KPLAYDqKjkS6.unlock.call(addressJwZy77, uintOg02eeQ, {from: accounts[3]});
//		const boolipes674 = await KPLAYDqKjkS6.transfer.call(addressflrHnJp, uintpbsxIDw, {from: accounts[3]});
//		const boolACRZBgk = await KPLAYDqKjkS6.transfer.call(addressYYPOyVs, uintlcBb5B, {from: accounts[5]});
//		const boolvkIORD1 = await KPLAYDqKjkS6.transfer.call(addressjeW8woT, uintLzQsfIx, {from: accounts[5]});

		await expect(KPLAYDqKjkS6.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const addressaIFkSes = accounts[2]
		const addressMOjFjFo = accounts[4]
		const uint256Q9MI9IV = await KPLAYVq4jHr.lockCount.call(addressaIFkSes, {from: accounts[2]});
		const addressHQJvqxy = await KPLAYVq4jHr.transferOwnership.call(addressMOjFjFo, {from: accounts[0]});
		const uint256ZcBe7n = await KPLAYVq4jHr.currentTime.call({from: accounts[5]});

		assert.equal(uint256Q9MI9IV, BigInt("0"))
		assert.equal(uint256ZcBe7n, BigInt("1630226255"))
	});

	it('test for KPLAY', async () => {
		const KPLAYEat0udP = await KPLAY.new({from: accounts[0]});
		const uintIBR6ST = BigInt("1149")
		const addressRFYkhuT = accounts[5]
		const uintjejSKT = BigInt("906")
		const addressc5UjwfU = accounts[6]
//		await KPLAYEat0udP.lockState.call(addressRFYkhuT, uintIBR6ST, {from: accounts[4]});
//		const booluwLsR7r = await KPLAYEat0udP.transfer.call(addressc5UjwfU, uintjejSKT, {from: accounts[2]});
//		await KPLAYEat0udP.whenNotPaused.call({from: accounts[5]});

		await expect(KPLAYEat0udP.lockState.call(addressRFYkhuT, uintIBR6ST, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEat0udP = await KPLAY.new({from: accounts[0]});
		const uintpIlEVTv = BigInt("1659")
		const uintV2yR7y = BigInt("208")
		const addressBO6SdYJ = accounts[3]
		const addressspU3Deq = accounts[1]
		const uintsJcOfkX = BigInt("906")
		const addressAzeckeG = accounts[6]
//		const addressmjU1wbS = await KPLAYEat0udP.lockAfter.call(addressBO6SdYJ, uintV2yR7y, uintpIlEVTv, {from: accounts[0]});
//		const addressT84invV = await KPLAYEat0udP.freeze.call(addressspU3Deq, {from: accounts[3]});
//		const booluwLsR7r = await KPLAYEat0udP.transfer.call(addressAzeckeG, uintsJcOfkX, {from: accounts[2]});

		await expect(KPLAYEat0udP.lockAfter.call(addressBO6SdYJ, uintV2yR7y, uintpIlEVTv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const uintkJEomjo = BigInt("1579")
		const addresslUdDelM = accounts[2]
		const uintMXekDBM = BigInt("648")
		const addressCv4WZwo = accounts[2]
		const uintQhN63QE = BigInt("1815")
		const uintwmzG9kL = BigInt("929")
		const addressmVOhRcE = accounts[1]
		const addressxBfxGwl = "0x0000000000000000000000000000000000000002"
//		const address397wkN = await KPLAYVq4jHr.unlock.call(addresslUdDelM, uintkJEomjo, {from: accounts[0]});
//		const boolM1CIzbR = await KPLAYVq4jHr.transfer.call(addressCv4WZwo, uintMXekDBM, {from: accounts[1]});
//		const boolZCnGyXt = await KPLAYVq4jHr.transferWithLockAfter.call(addressmVOhRcE, uintwmzG9kL, uintQhN63QE, {from: accounts[4]});
//		const uint256pU7z7p0 = await KPLAYVq4jHr.balanceOf.call(addressxBfxGwl, {from: accounts[2]});

		await expect(KPLAYVq4jHr.unlock.call(addresslUdDelM, uintkJEomjo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const addressluKp8hS = "0x0000000000000000000000000000000000000002"
		const uint2dDW1C = BigInt("1896")
		const addressbR1Oxa5 = accounts[0]
		const uintzkgZiDL = BigInt("922")
		const addresscXMzzWi = accounts[3]
		const uint256pU7z7p0 = await KPLAYVq4jHr.balanceOf.call(addressluKp8hS, {from: accounts[2]});
		const addressEf3SoBt = await KPLAYVq4jHr.burn.call(addressbR1Oxa5, uint2dDW1C, {from: accounts[0]});
//		const addressAuyZi1O = await KPLAYVq4jHr.burn.call(addresscXMzzWi, uintzkgZiDL, {from: accounts[5]});

		assert.equal(uint256pU7z7p0, BigInt("0"))
		await expect(KPLAYVq4jHr.burn.call(addresscXMzzWi, uintzkgZiDL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const addressi3BuGJD = "0x00000000000000000000000000000000000000-1"
//		const uint256pU7z7p0 = await KPLAYVq4jHr.balanceOf.call(addressi3BuGJD, {from: accounts[2]});

		await expect(KPLAYVq4jHr.balanceOf.call(addressi3BuGJD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const uintm7121T = BigInt("852")
		const uintUlkZ2lb = BigInt("334")
		const addressfGfzBMp = "0x0000000000000000000000000000000000000001"
		const addressWjFEGA = "0x0000000000000000000000000000000000000001"
//		const addressJrpQUEE = await KPLAYVq4jHr.lock.call(addressfGfzBMp, uintUlkZ2lb, uintm7121T, {from: accounts[0]});
//		const uint256pU7z7p0 = await KPLAYVq4jHr.balanceOf.call(addressWjFEGA, {from: accounts[2]});

		await expect(KPLAYVq4jHr.lock.call(addressfGfzBMp, uintUlkZ2lb, uintm7121T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYG7xQPbG = await KPLAY.new({from: accounts[4]});
		const uintLtd6v83 = BigInt("1548")
		const addressBeBIgOR = accounts[1]
		const uinttmdc5YH = BigInt("238")
		const addressgFgNFjb = accounts[3]
		const uintaFaTxLT = BigInt("1071")
		const uintwMXDsid = BigInt("706")
		const addressjCL17k2 = accounts[3]
		const boolRwq1qq7 = await KPLAYG7xQPbG.approve.call(addressBeBIgOR, uintLtd6v83, {from: accounts[3]});
//		await KPLAYG7xQPbG.renounceOwnership.call({from: accounts[4]});
//		const boolzhWitFm = await KPLAYG7xQPbG.approve.call(addressgFgNFjb, uinttmdc5YH, {from: accounts[4]});
//		await KPLAYG7xQPbG.unpause.call({from: accounts[4]});
//		await KPLAYG7xQPbG.unpause.call({from: accounts[2]});
//		const addresssYYE6Bg = await KPLAYG7xQPbG.lock.call(addressjCL17k2, uintwMXDsid, uintaFaTxLT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRwq1qq7, true)
		await expect(KPLAYG7xQPbG.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const addressk6qaGST = "0x0000000000000000000000000000000000000002"
//		await KPLAYVq4jHr.pause.call({from: accounts[0]});
//		const uint256pU7z7p0 = await KPLAYVq4jHr.balanceOf.call(addressk6qaGST, {from: accounts[2]});

		await expect(KPLAYVq4jHr.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYolMTbz5 = await KPLAY.new({from: accounts[2]});
		const addressojBtOH3 = accounts[0]
		const uintEIvN2bW = BigInt("1071")
		const uintqNuW4La = BigInt("667")
		const addressexVxv5i = accounts[4]
		const addressHvMt93h = await KPLAYolMTbz5.freeze.call(addressojBtOH3, {from: accounts[2]});
//		const booledcsDzy = await KPLAYolMTbz5.transferWithLockAfter.call(addressexVxv5i, uintqNuW4La, uintEIvN2bW, {from: accounts[5]});

		await expect(KPLAYolMTbz5.transferWithLockAfter.call(addressexVxv5i, uintqNuW4La, uintEIvN2bW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEat0udP = await KPLAY.new({from: accounts[0]});
		const uintS8j3r5 = BigInt("1691")
		const addressmRWRvI = accounts[1]
		const uintVpyDph1 = BigInt("906")
		const addressJokapkr = accounts[5]
		const uint256al244BP = await KPLAYEat0udP.afterTime.call(uintS8j3r5, {from: accounts[3]});
		const uint256kgp7h21 = await KPLAYEat0udP.balanceOf.call(addressmRWRvI, {from: accounts[1]});
//		const booluwLsR7r = await KPLAYEat0udP.transfer.call(addressJokapkr, uintVpyDph1, {from: accounts[2]});

		assert.equal(uint256al244BP, BigInt("1630227929"))
		assert.equal(uint256kgp7h21, BigInt("0"))
		await expect(KPLAYEat0udP.transfer.call(addressJokapkr, uintVpyDph1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVq4jHr = await KPLAY.new({from: accounts[0]});
		const uintOZuZHGz = BigInt("1787")
		const addressnxmPl3J = accounts[3]
		const addressnFSIsLU = "0x0000000000000000000000000000000000000000"
		const addressWx247fj = accounts[2]
		const boolwv1yo4y = await KPLAYVq4jHr.mint.call(addressnxmPl3J, uintOZuZHGz, {from: accounts[0]});
		const uint256pU7z7p0 = await KPLAYVq4jHr.balanceOf.call(addressnFSIsLU, {from: accounts[2]});
//		const addressuQQibti = await KPLAYVq4jHr.freeze.call(addressWx247fj, {from: accounts[1]});

		assert.equal(boolwv1yo4y, true)
		assert.equal(uint256pU7z7p0, BigInt("0"))
		await expect(KPLAYVq4jHr.freeze.call(addressWx247fj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEat0udP = await KPLAY.new({from: accounts[0]});
		const addressxmclaNv = accounts[2]
		const uintdT7DIXM = BigInt("1891")
		const uintXL6AP1L = BigInt("558")
		const addressJTDg8kh = accounts[5]
		const uintguE0vMN = BigInt("906")
		const addressUSWYpxY = accounts[5]
		const addressFMNitsY = await KPLAYEat0udP.unfreeze.call(addressxmclaNv, {from: accounts[0]});
		const boolPB5cDa = await KPLAYEat0udP.transferWithLockAfter.call(addressJTDg8kh, uintXL6AP1L, uintdT7DIXM, {from: accounts[0]});
//		const booluwLsR7r = await KPLAYEat0udP.transfer.call(addressUSWYpxY, uintguE0vMN, {from: accounts[2]});

		assert.equal(boolPB5cDa, true)
		await expect(KPLAYEat0udP.transfer.call(addressUSWYpxY, uintguE0vMN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})