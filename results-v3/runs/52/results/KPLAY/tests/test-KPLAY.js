const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYV3LHQlc = await KPLAY.new({from: accounts[1]});
		const uintxId2JGr = BigInt("1104")
		const addressbfgQ3LQ = "0x0000000000000000000000000000000000000001"
		const uintlnA0gFE = BigInt("431")
		const addressNkUJ0IK = accounts[2]
		const addressCJJn1Kh = accounts[4]
		const uint256TUa1Iba = await KPLAYV3LHQlc.currentTime.call({from: accounts[2]});
		const bool1puQH7 = await KPLAYV3LHQlc.mint.call(addressbfgQ3LQ, uintxId2JGr, {from: accounts[1]});
		const boolp2gyTuP = await KPLAYV3LHQlc.mint.call(addressNkUJ0IK, uintlnA0gFE, {from: accounts[2]});
		const uint256ZUMLe58 = await KPLAYV3LHQlc.balanceOf.call(addressCJJn1Kh, {from: accounts[3]});

		assert.equal(bool1puQH7, true)
		assert.equal(uint256TUa1Iba, BigInt("1630229520"))
		await expect(KPLAYV3LHQlc.mint.call(addressNkUJ0IK, uintlnA0gFE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCCckIs = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMEewtk = BigInt("28")
		const addressfpBUEO = accounts[3]
		const uintybTd5YI = BigInt("947")
		const addressRhECgMS = accounts[3]
		const addressBn8zMO6 = accounts[4]
		const booldOGyos7 = await KPLAYCCckIs.mint.call(addressfpBUEO, uintMEewtk, {from: accounts[4]});
		const boolXXrq8Js = await KPLAYCCckIs.transferFrom.call(addressBn8zMO6, addressRhECgMS, uintybTd5YI, {from: accounts[2]});
		await KPLAYCCckIs.whenPaused.call({from: accounts[0]});
		await KPLAYCCckIs.whenNotFrozen.call({from: accounts[1]});
		await KPLAYCCckIs.whenNotPaused.call({from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYNWh3Kpf = await KPLAY.new({from: accounts[0]});
		const addressMqF0Vm0 = accounts[4]
		const uintGVM5XhR = BigInt("517")
		const uintpg68E9m = BigInt("675")
		const addresscxQjsnu = accounts[2]
		await KPLAYNWh3Kpf.whenNotFrozen.call({from: accounts[3]});
		const uint256RecQL5U = await KPLAYNWh3Kpf.balanceOf.call(addressMqF0Vm0, {from: accounts[1]});
		const booldf5XCZa = await KPLAYNWh3Kpf.transferWithLock.call(addresscxQjsnu, uintpg68E9m, uintGVM5XhR, {from: accounts[3]});

		await expect(KPLAYNWh3Kpf.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfepwwdn = await KPLAY.new({from: accounts[1]});
		const addresskswY4R0 = accounts[4]
		const addressymERHwQ = "0x0000000000000000000000000000000000000001"
		const uintIktuGFQ = BigInt("1668")
		const addressS12sLX = "0x0000000000000000000000000000000000000001"
		const uintt9dfBFK = BigInt("429")
		const uintobJeKQ7 = BigInt("939")
		const addressZNfaUC = accounts[3]
		const addressgntRCpR = accounts[4]
		const uint256Kmxod9Q = await KPLAYfepwwdn.allowance.call(addressymERHwQ, addresskswY4R0, {from: accounts[1]});
		const boolODIuJHJ = await KPLAYfepwwdn.approve.call(addressS12sLX, uintIktuGFQ, {from: accounts[2]});
		const booloTBZk7a = await KPLAYfepwwdn.transferWithLockAfter.call(addressZNfaUC, uintobJeKQ7, uintt9dfBFK, {from: accounts[2]});
		const addressOz5ZPt7 = await KPLAYfepwwdn.unfreeze.call(addressgntRCpR, {from: accounts[4]});

		assert.equal(boolODIuJHJ, true)
		assert.equal(uint256Kmxod9Q, BigInt("0"))
		await expect(KPLAYfepwwdn.transferWithLockAfter.call(addressZNfaUC, uintobJeKQ7, uintt9dfBFK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAGCVKoZ = await KPLAY.new({from: accounts[2]});
		const uintRsDbbWN = BigInt("731")
		const uintlRcYDBL = BigInt("1390")
		const addressmQy6HU = accounts[0]
		const uintCsPoHR = BigInt("2000")
		const addressdxq6JY8 = accounts[2]
		const uint256yBwXJV = await KPLAYAGCVKoZ.afterTime.call(uintRsDbbWN, {from: accounts[1]});
		const addressUH5K2Ad = await KPLAYAGCVKoZ.burn.call(addressmQy6HU, uintlRcYDBL, {from: accounts[4]});
		const boolYilUZaj = await KPLAYAGCVKoZ.transfer.call(addressdxq6JY8, uintCsPoHR, {from: accounts[2]});

		assert.equal(uint256yBwXJV, BigInt("1630230249"))
		await expect(KPLAYAGCVKoZ.burn.call(addressmQy6HU, uintlRcYDBL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjtutasy = await KPLAY.new({from: accounts[3]});
		const uinttt65asA = BigInt("1227")
		const addressLJJDc05 = accounts[2]
		const uint2563siMs4 = await KPLAYjtutasy.totalSupply.call({from: accounts[3]});
		await KPLAYjtutasy.unpause.call({from: accounts[0]});
		await KPLAYjtutasy.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhWTpcRd = await KPLAYjtutasy.mint.call(addressLJJDc05, uinttt65asA, {from: accounts[5]});

		assert.equal(uint2563siMs4, BigInt("10000000000000000"))
		await expect(KPLAYjtutasy.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addressmT0h5bL = accounts[4]
		const addressd4BTmK7 = accounts[2]
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addressmT0h5bL, {from: accounts[4]});
		await KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]});
		const boolJXJTIu = await KPLAYkJ64qCb.isFrozen.call(addressd4BTmK7, {from: accounts[1]});

		assert.equal(uint256tdUiYAe, BigInt("0"))
		await expect(KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYV3LHQlc = await KPLAY.new({from: accounts[1]});
		const uintXTi8vfn = BigInt("1652")
		const addressUq6sjKL = accounts[3]
		const uintGnwMvxg = BigInt("1104")
		const addressdHSZDdw = "0x0000000000000000000000000000000000000001"
		const uintbGVRcv = BigInt("431")
		const addressCuVUUs6 = accounts[2]
		const addressWVQlZ04 = accounts[4]
		const uint256TUa1Iba = await KPLAYV3LHQlc.currentTime.call({from: accounts[2]});
		const booljaYwi4N = await KPLAYV3LHQlc.transfer.call(addressUq6sjKL, uintXTi8vfn, {from: accounts[1]});
		const bool1puQH7 = await KPLAYV3LHQlc.mint.call(addressdHSZDdw, uintGnwMvxg, {from: accounts[1]});
		const boolp2gyTuP = await KPLAYV3LHQlc.mint.call(addressCuVUUs6, uintbGVRcv, {from: accounts[2]});
		const uint256ZUMLe58 = await KPLAYV3LHQlc.balanceOf.call(addressWVQlZ04, {from: accounts[3]});

		assert.equal(bool1puQH7, true)
		assert.equal(booljaYwi4N, true)
		assert.equal(uint256TUa1Iba, BigInt("1630229498"))
		await expect(KPLAYV3LHQlc.mint.call(addressCuVUUs6, uintbGVRcv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addressU6siLk = accounts[4]
		const uintIh24m8U = BigInt("299")
		const addressWvNjkm6 = accounts[3]
		const addressWdS7L5W = accounts[5]
		const addressx8vPQ2H = accounts[1]
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addressU6siLk, {from: accounts[4]});
		const boolN4XlFs = await KPLAYkJ64qCb.transferFrom.call(addressWdS7L5W, addressWvNjkm6, uintIh24m8U, {from: accounts[5]});
		await KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]});
		const uint256Km4OJtK = await KPLAYkJ64qCb.balanceOf.call(addressx8vPQ2H, {from: accounts[4]});

		assert.equal(uint256tdUiYAe, BigInt("0"))
		await expect(KPLAYkJ64qCb.transferFrom.call(addressWdS7L5W, addressWvNjkm6, uintIh24m8U, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addressS8K8Wci = accounts[4]
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addressS8K8Wci, {from: accounts[4]});
		await KPLAYkJ64qCb.pause.call({from: accounts[3]});
		await KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256tdUiYAe, BigInt("0"))
		await expect(KPLAYkJ64qCb.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addressUPDHs3c = accounts[4]
		const addresskYzanwA = accounts[1]
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addressUPDHs3c, {from: accounts[4]});
		const uint256mMcZ5Dx = await KPLAYkJ64qCb.lockCount.call(addresskYzanwA, {from: accounts[1]});
		await KPLAYkJ64qCb.pause.call({from: accounts[3]});
		await KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256mMcZ5Dx, BigInt("0"))
		assert.equal(uint256tdUiYAe, BigInt("0"))
		await expect(KPLAYkJ64qCb.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYV3LHQlc = await KPLAY.new({from: accounts[1]});
		const uintRl3MbHd = BigInt("1652")
		const addressVxXwtV4 = accounts[4]
		const addressCeYcACU = accounts[4]
		const uintEvFJPJX = BigInt("1104")
		const addressF3zsCT = "0x0000000000000000000000000000000000000002"
		const uintvCxqZK = BigInt("839")
		const addressgYER7UQ = accounts[0]
		const addressoypweYt = accounts[3]
		const uintsxraS3P = BigInt("431")
		const addressoIRCnQ = accounts[2]
		const uintK0dX9wJ = BigInt("1743")
		const uintIAKNYuF = BigInt("502")
		const addresstgICwqD = accounts[3]
		const addressB1g6ulb = accounts[4]
		const uint256TUa1Iba = await KPLAYV3LHQlc.currentTime.call({from: accounts[2]});
		const booljaYwi4N = await KPLAYV3LHQlc.transfer.call(addressVxXwtV4, uintRl3MbHd, {from: accounts[1]});
		const addressLJ0tAi = await KPLAYV3LHQlc.freeze.call(addressCeYcACU, {from: accounts[1]});
		const bool1puQH7 = await KPLAYV3LHQlc.mint.call(addressF3zsCT, uintEvFJPJX, {from: accounts[1]});
		const boolW5FRrcq = await KPLAYV3LHQlc.transferFrom.call(addressoypweYt, addressgYER7UQ, uintvCxqZK, {from: accounts[3]});
		const boolp2gyTuP = await KPLAYV3LHQlc.mint.call(addressoIRCnQ, uintsxraS3P, {from: accounts[2]});
		const boolqA7qDE = await KPLAYV3LHQlc.transferWithLockAfter.call(addresstgICwqD, uintIAKNYuF, uintK0dX9wJ, {from: accounts[3]});
		const uint256ZUMLe58 = await KPLAYV3LHQlc.balanceOf.call(addressB1g6ulb, {from: accounts[3]});

		assert.equal(bool1puQH7, true)
		assert.equal(booljaYwi4N, true)
		assert.equal(uint256TUa1Iba, BigInt("1630229507"))
		await expect(KPLAYV3LHQlc.transferFrom.call(addressoypweYt, addressgYER7UQ, uintvCxqZK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addressVBeye5k = accounts[4]
		const uintsM2RdHv = BigInt("954")
		const addresseiRR3fR = accounts[4]
		const uintkNdTP0w = BigInt("299")
		const addressCKx6HgK = accounts[3]
		const addressZGu7Gfb = accounts[5]
		const uintxn1mogn = BigInt("862")
		const uintuxFgC7R = BigInt("225")
		const addressreMx1R7 = accounts[2]
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addressVBeye5k, {from: accounts[4]});
		const boolZIDnr7a = await KPLAYkJ64qCb.decreaseAllowance.call(addresseiRR3fR, uintsM2RdHv, {from: "0x0000000000000000000000000000000000000001"});
		const boolN4XlFs = await KPLAYkJ64qCb.transferFrom.call(addressZGu7Gfb, addressCKx6HgK, uintkNdTP0w, {from: accounts[5]});
		const addressaUS4UMm = await KPLAYkJ64qCb.lock.call(addressreMx1R7, uintuxFgC7R, uintxn1mogn, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256tdUiYAe, BigInt("0"))
		await expect(KPLAYkJ64qCb.decreaseAllowance.call(addresseiRR3fR, uintsM2RdHv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKRcadXF = await KPLAY.new({from: accounts[1]});
		const uintJuGOblU = BigInt("1689")
		const addressk9NdkpE = accounts[4]
		const uintBeybAx0 = BigInt("1657")
		const addressdAO8pV4 = accounts[3]
		const addressHDXjPFY = accounts[3]
		const addressADmaTBJ = accounts[4]
		const uintnu93iBz = BigInt("870")
		const addressX0Svwya = "0x0000000000000000000000000000000000000001"
		await KPLAYKRcadXF.lockState.call(addressk9NdkpE, uintJuGOblU, {from: accounts[2]});
		const boolnHlpgja = await KPLAYKRcadXF.transfer.call(addressdAO8pV4, uintBeybAx0, {from: accounts[0]});
		const uint256SSnhs09 = await KPLAYKRcadXF.allowance.call(addressADmaTBJ, addressHDXjPFY, {from: accounts[0]});
		const boolWIQ38xe = await KPLAYKRcadXF.transfer.call(addressX0Svwya, uintnu93iBz, {from: accounts[2]});

		await expect(KPLAYKRcadXF.lockState.call(addressk9NdkpE, uintJuGOblU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const uintqUYTT6m = BigInt("1291")
		const addresslxZSQ6H = accounts[5]
		const uintvq7sqyU = BigInt("1746")
		const uintkzPu25S = BigInt("228")
		const addressO9KilkZ = accounts[5]
		const boolbBBk1p6 = await KPLAYkJ64qCb.increaseAllowance.call(addresslxZSQ6H, uintqUYTT6m, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]});
		const boolV8LcxIW = await KPLAYkJ64qCb.transferWithLock.call(addressO9KilkZ, uintkzPu25S, uintvq7sqyU, {from: accounts[2]});

		assert.equal(boolbBBk1p6, true)
		await expect(KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBublqdb = await KPLAY.new({from: accounts[2]});
		const uintopouLPi = BigInt("359")
		const uintsbcc6E = BigInt("467")
		const address2tkK9f = accounts[4]
		const uintYHr3jtZ = BigInt("1718")
		const addresspIkGJpf = accounts[3]
		const boolPluopKR = await KPLAYBublqdb.transferWithLock.call(address2tkK9f, uintsbcc6E, uintopouLPi, {from: accounts[2]});
		const boolR6QJ4Al = await KPLAYBublqdb.mint.call(addresspIkGJpf, uintYHr3jtZ, {from: accounts[3]});
		await KPLAYBublqdb.whenNotPaused.call({from: accounts[2]});
		const uint256ClfqhE = await KPLAYBublqdb.totalSupply.call({from: accounts[3]});

		assert.equal(boolPluopKR, true)
		await expect(KPLAYBublqdb.mint.call(addresspIkGJpf, uintYHr3jtZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addresswrrrGDY = accounts[3]
		const uintBJOX5nQ = BigInt("421")
		const addressr5DJ3a4 = accounts[3]
		const boolvENXVhm = await KPLAYkJ64qCb.isFrozen.call(addresswrrrGDY, {from: accounts[3]});
		const addressHetaNEQ = await KPLAYkJ64qCb.unlock.call(addressr5DJ3a4, uintBJOX5nQ, {from: accounts[1]});
		await KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]});

		assert.equal(boolvENXVhm, false)
		await expect(KPLAYkJ64qCb.unlock.call(addressr5DJ3a4, uintBJOX5nQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYUBaQzxG = await KPLAY.new({from: accounts[0]});
		const addresstDz3Nli = accounts[3]
		const uintAAFyROJ = BigInt("1457")
		const addressH56avvM = accounts[2]
		const uintBaxAKu6 = BigInt("1880")
		const uints3aWPaD = BigInt("1205")
		const addressalPI0ja = accounts[0]
		const addressAE02ZeP = accounts[1]
		const addressWDFa9G = await KPLAYUBaQzxG.transferOwnership.call(addresstDz3Nli, {from: accounts[0]});
		const addressHc1VL8 = await KPLAYUBaQzxG.burn.call(addressH56avvM, uintAAFyROJ, {from: accounts[0]});
		const boolXzhC4kQ = await KPLAYUBaQzxG.transferWithLock.call(addressalPI0ja, uints3aWPaD, uintBaxAKu6, {from: accounts[5]});
		const uint256qPulpqJ = await KPLAYUBaQzxG.balanceOf.call(addressAE02ZeP, {from: accounts[1]});

		await expect(KPLAYUBaQzxG.burn.call(addressH56avvM, uintAAFyROJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addressvk9Tov = accounts[5]
		const uintLcvuiLI = BigInt("1416")
		const uintBHoIhRs = BigInt("1072")
		const addressQ5MagYB = accounts[2]
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addressvk9Tov, {from: accounts[4]});
		const addresslzJmTd = await KPLAYkJ64qCb.lock.call(addressQ5MagYB, uintBHoIhRs, uintLcvuiLI, {from: accounts[3]});
		await KPLAYkJ64qCb.onlyOwner.call({from: accounts[5]});

		assert.equal(uint256tdUiYAe, BigInt("0"))
		await expect(KPLAYkJ64qCb.lock.call(addressQ5MagYB, uintBHoIhRs, uintLcvuiLI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addressvl2dsR2 = accounts[5]
		const uinty7o5PrF = BigInt("1731")
		const uintonKJKSv = BigInt("1041")
		const addressWpArujb = accounts[0]
		const addresst70w2eb = accounts[0]
		const uintIqSeUT = BigInt("397")
		const uintEix1iMv = BigInt("1961")
		const addressQ1TmSCR = accounts[1]
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addressvl2dsR2, {from: accounts[4]});
		const addresstg0neu8 = await KPLAYkJ64qCb.lockAfter.call(addressWpArujb, uintonKJKSv, uinty7o5PrF, {from: accounts[3]});
		const uint256QC9DLl7 = await KPLAYkJ64qCb.lockCount.call(addresst70w2eb, {from: accounts[0]});
		const addressdmSF5x = await KPLAYkJ64qCb.lock.call(addressQ1TmSCR, uintEix1iMv, uintIqSeUT, {from: accounts[2]});

		assert.equal(uint256tdUiYAe, BigInt("0"))
		await expect(KPLAYkJ64qCb.lockAfter.call(addressWpArujb, uintonKJKSv, uinty7o5PrF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const uintWi1xJsb = BigInt("334")
		const addressToGD5W5 = accounts[0]
		const addressZ4OYuqd = accounts[5]
		const boolLUwEuMK = await KPLAYkJ64qCb.transfer.call(addressToGD5W5, uintWi1xJsb, {from: accounts[3]});
		await KPLAYkJ64qCb.unpause.call({from: accounts[3]});
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addressZ4OYuqd, {from: accounts[4]});

		assert.equal(boolLUwEuMK, true)
		await expect(KPLAYkJ64qCb.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const uintQFp4Bsr = BigInt("898")
		const uintRWjhZmQ = BigInt("933")
		const addressKeaZLn6 = accounts[4]
		const addresspT2SZK = accounts[5]
		const uintL6q6WM9 = BigInt("299")
		const addressi8sK3bQ = accounts[3]
		const addressogbHQ7 = accounts[5]
		const addressoLY3i7r = accounts[1]
		const boolCK4h8d = await KPLAYkJ64qCb.transferWithLockAfter.call(addressKeaZLn6, uintRWjhZmQ, uintQFp4Bsr, {from: accounts[3]});
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addresspT2SZK, {from: accounts[4]});
		const boolN4XlFs = await KPLAYkJ64qCb.transferFrom.call(addressogbHQ7, addressi8sK3bQ, uintL6q6WM9, {from: accounts[5]});
		await KPLAYkJ64qCb.onlyOwner.call({from: accounts[0]});
		const uint256Km4OJtK = await KPLAYkJ64qCb.balanceOf.call(addressoLY3i7r, {from: accounts[4]});

		assert.equal(boolCK4h8d, true)
		assert.equal(uint256tdUiYAe, BigInt("0"))
		await expect(KPLAYkJ64qCb.transferFrom.call(addressogbHQ7, addressi8sK3bQ, uintL6q6WM9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYr2RQMLt = await KPLAY.new({from: accounts[0]});
		const uintK470cm = BigInt("1723")
		const addressmGniEkw = accounts[2]
		const uintFPb1ZZt = BigInt("2013")
		const addresskio9KVO = accounts[0]
		const uintTljoyWG = BigInt("1315")
		const addressplLdPl = accounts[2]
		const addressGSuGoZ = accounts[0]
		const boolEPvqFXZ = await KPLAYr2RQMLt.increaseAllowance.call(addressmGniEkw, uintK470cm, {from: accounts[1]});
		const addressAhTib8R = await KPLAYr2RQMLt.burn.call(addresskio9KVO, uintFPb1ZZt, {from: accounts[0]});
		const uint256ZldSCin = await KPLAYr2RQMLt.currentTime.call({from: accounts[0]});
		await KPLAYr2RQMLt.whenNotFrozen.call({from: accounts[2]});
		const boolydEjU6x = await KPLAYr2RQMLt.transfer.call(addressplLdPl, uintTljoyWG, {from: accounts[2]});
		const uint256gwzBwLu = await KPLAYr2RQMLt.lockCount.call(addressGSuGoZ, {from: accounts[5]});

		assert.equal(boolEPvqFXZ, true)
		assert.equal(uint256ZldSCin, BigInt("1630229511"))
		await expect(KPLAYr2RQMLt.whenNotFrozen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addresskjY6cQr = accounts[5]
		const uintW3ktVUT = BigInt("170")
		const addressl8ME7D8 = accounts[4]
		const uint256tdUiYAe = await KPLAYkJ64qCb.balanceOf.call(addresskjY6cQr, {from: accounts[4]});
		const addressdndDNUJ = await KPLAYkJ64qCb.unlock.call(addressl8ME7D8, uintW3ktVUT, {from: accounts[3]});

		assert.equal(uint256tdUiYAe, BigInt("0"))
		await expect(KPLAYkJ64qCb.unlock.call(addressl8ME7D8, uintW3ktVUT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const uintWYrFnna = BigInt("983")
		const addressFBmsOL = accounts[2]
		await KPLAYkJ64qCb.renounceOwnership.call({from: accounts[3]});
		const booliQKWnW = await KPLAYkJ64qCb.transfer.call(addressFBmsOL, uintWYrFnna, {from: accounts[5]});

		await expect(KPLAYkJ64qCb.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYkJ64qCb = await KPLAY.new({from: accounts[3]});
		const addressYkMAumQ = accounts[0]
		const uintdHPXjp1 = BigInt("1410")
		const addressNKrVsdn = accounts[2]
		const addressbdRJZG = accounts[2]
		const uintiHIBur7 = BigInt("1136")
		const addressOo5XSsR = accounts[5]
		const addressGVic0v5 = await KPLAYkJ64qCb.unfreeze.call(addressYkMAumQ, {from: accounts[3]});
		const boolQPSrPTc = await KPLAYkJ64qCb.increaseAllowance.call(addressNKrVsdn, uintdHPXjp1, {from: accounts[1]});
		const uint256vUZ4Sjh = await KPLAYkJ64qCb.balanceOf.call(addressbdRJZG, {from: "0x0000000000000000000000000000000000000001"});
		const boolRcxATAY = await KPLAYkJ64qCb.transfer.call(addressOo5XSsR, uintiHIBur7, {from: accounts[3]});

		assert.equal(boolQPSrPTc, true)
		assert.equal(boolRcxATAY, true)
		assert.equal(uint256vUZ4Sjh, BigInt("0"))
	});
})