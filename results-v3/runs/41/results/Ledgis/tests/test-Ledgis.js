const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisZKWepLm = await Ledgis.new({from: accounts[0]});
		const uintRjEKwvD = BigInt("1202")
		const addressHrDQ0Dj = accounts[4]
		const uintcj53kKu = BigInt("629")
		const addressLZO5kZO = accounts[1]
		const address4Y44rW = accounts[4]
		await LedgisZKWepLm.pause.call({from: accounts[3]});
		const booltev7Cqm = await LedgisZKWepLm.increaseAllowance.call(addressHrDQ0Dj, uintRjEKwvD, {from: accounts[2]});
		await LedgisZKWepLm.whenPaused.call({from: accounts[3]});
		const boolfcLdmer = await LedgisZKWepLm.transferFrom.call(address4Y44rW, addressLZO5kZO, uintcj53kKu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisZKWepLm.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJgTqarm = await Ledgis.new({from: accounts[3]});
		const uinthMG3bOG = BigInt("1208")
		const addresskNPEyvQ = accounts[2]
		const uintSeAYkS = BigInt("250")
		const uintEJRvRWs = BigInt("1756")
		const addresshO1z4FS = accounts[1]
		const uintyow5wVy = BigInt("172")
		const addresskEl0l3w = accounts[0]
		await LedgisJgTqarm.lockState.call(addresskNPEyvQ, uinthMG3bOG, {from: accounts[5]});
		const addressg0obyQl = await LedgisJgTqarm.lockAfter.call(addresshO1z4FS, uintEJRvRWs, uintSeAYkS, {from: accounts[1]});
		const boolUkESGfF = await LedgisJgTqarm.transfer.call(addresskEl0l3w, uintyow5wVy, {from: accounts[2]});

		await expect(LedgisJgTqarm.lockState.call(addresskNPEyvQ, uinthMG3bOG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisnCltEFg = await Ledgis.new({from: accounts[2]});
		const addressJEYYkTK = accounts[5]
		const uintsZfKllc = BigInt("1406")
		const addressbiro5SS = accounts[1]
		const uintLdxHq1F = BigInt("2031")
		const uintfRHlxWw = BigInt("1116")
		const addressEofAXOz = accounts[1]
		const uint256iraSABo = await LedgisnCltEFg.balanceOf.call(addressJEYYkTK, {from: accounts[5]});
		await LedgisnCltEFg.onlyOwner.call({from: accounts[0]});
		await LedgisnCltEFg.lockState.call(addressbiro5SS, uintsZfKllc, {from: accounts[0]});
		await LedgisnCltEFg.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const addressCMbX6zh = await LedgisnCltEFg.lock.call(addressEofAXOz, uintfRHlxWw, uintLdxHq1F, {from: accounts[4]});

		assert.equal(uint256iraSABo, BigInt("0"))
		await expect(LedgisnCltEFg.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgiso1nHdNq = await Ledgis.new({from: accounts[4]});
		const uintOBx1lag = BigInt("1350")
		const addressJuyME5 = accounts[0]
		const addressWYiZvdx = accounts[3]
		const uintvdV2yXH = BigInt("209")
		const addressnVwmkAp = accounts[1]
		const boolBAmBsH = await Ledgiso1nHdNq.transferFrom.call(addressWYiZvdx, addressJuyME5, uintOBx1lag, {from: accounts[2]});
		const boolTyWIKv = await Ledgiso1nHdNq.increaseAllowance.call(addressnVwmkAp, uintvdV2yXH, {from: accounts[2]});

		await expect(Ledgiso1nHdNq.transferFrom.call(addressWYiZvdx, addressJuyME5, uintOBx1lag, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisofyNFlc = await Ledgis.new({from: accounts[1]});
		const uintjHC9FGg = BigInt("698")
		const addressyig5d88 = accounts[1]
		const uintxuqN49h = BigInt("1992")
		const uintnpRY4H9 = BigInt("746")
		const addressie7lXD0 = accounts[1]
		const addressfi6LhV6 = accounts[2]
		const uintnsowCDM = BigInt("642")
		const addressNwiq9Id = accounts[3]
		const boolj4yaSVB = await LedgisofyNFlc.decreaseAllowance.call(addressyig5d88, uintjHC9FGg, {from: accounts[3]});
		const boolJ4o7YEX = await LedgisofyNFlc.transferWithLock.call(addressie7lXD0, uintnpRY4H9, uintxuqN49h, {from: accounts[1]});
		const addresscm5A1U8 = await LedgisofyNFlc.freeze.call(addressfi6LhV6, {from: accounts[2]});
		const boolqWOvUDk = await LedgisofyNFlc.mint.call(addressNwiq9Id, uintnsowCDM, {from: accounts[3]});

		await expect(LedgisofyNFlc.decreaseAllowance.call(addressyig5d88, uintjHC9FGg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisjKFcsFx = await Ledgis.new({from: accounts[1]});
		const uintWVOZoEN = BigInt("255")
		const addressiijpjk = accounts[5]
		const addressux9izcn = accounts[5]
		const addressUCzJxB5 = accounts[5]
		const uint256mO7rFH = await LedgisjKFcsFx.afterTime.call(uintWVOZoEN, {from: accounts[4]});
		const addresskAsBrmu = await LedgisjKFcsFx.transferOwnership.call(addressiijpjk, {from: accounts[1]});
		const addresss5l1sR = await LedgisjKFcsFx.transferOwnership.call(addressux9izcn, {from: accounts[4]});
		const uint256q1V15hu = await LedgisjKFcsFx.lockCount.call(addressUCzJxB5, {from: accounts[4]});
		await LedgisjKFcsFx.whenNotFrozen.call({from: accounts[3]});

		assert.equal(uint256mO7rFH, BigInt("1630231981"))
		await expect(LedgisjKFcsFx.transferOwnership.call(addressux9izcn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const addressKMzftaw = accounts[2]
		const addresshDCBARP = "0x0000000000000000000000000000000000000001"
		const addressUPnVOIa = accounts[0]
		const uintvTre5sh = BigInt("2023")
		const addressfbRPYxF = accounts[0]
		const uint256lzksrJ = await LedgisUonWa9e.allowance.call(addresshDCBARP, addressKMzftaw, {from: accounts[5]});
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addressUPnVOIa, {from: accounts[4]});
		const boolKNGempu = await LedgisUonWa9e.increaseAllowance.call(addressfbRPYxF, uintvTre5sh, {from: accounts[3]});

		assert.equal(boolKNGempu, true)
		assert.equal(uint256iO56AJf, BigInt("0"))
		assert.equal(uint256lzksrJ, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const uintU5C8Ff = BigInt("1526")
		const addresstYLzYX = accounts[5]
		const addressbEbYJpY = accounts[2]
		const addressBRlXsQt = "0x0000000000000000000000000000000000000002"
		const addressJ7NxAUG = accounts[0]
		const uintSCuJFpF = BigInt("2023")
		const addressYqESWzb = accounts[0]
		const boolPLs9TC = await LedgisUonWa9e.approve.call(addresstYLzYX, uintU5C8Ff, {from: accounts[1]});
		const uint256lzksrJ = await LedgisUonWa9e.allowance.call(addressBRlXsQt, addressbEbYJpY, {from: accounts[5]});
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addressJ7NxAUG, {from: accounts[4]});
		const boolKNGempu = await LedgisUonWa9e.increaseAllowance.call(addressYqESWzb, uintSCuJFpF, {from: accounts[3]});

		assert.equal(boolKNGempu, true)
		assert.equal(boolPLs9TC, true)
		assert.equal(uint256iO56AJf, BigInt("0"))
		assert.equal(uint256lzksrJ, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const addressj0PYOSm = accounts[5]
		const addresscO4AvP7 = accounts[2]
		const addressDQ0UBok = "0x0000000000000000000000000000000000000002"
		const uinteJeDAhe = BigInt("2023")
		const addressEcp6A1K = accounts[0]
		const uint256r5w3wdM = await LedgisUonWa9e.lockCount.call(addressj0PYOSm, {from: accounts[1]});
		const uint256lzksrJ = await LedgisUonWa9e.allowance.call(addressDQ0UBok, addresscO4AvP7, {from: accounts[5]});
		const boolKNGempu = await LedgisUonWa9e.increaseAllowance.call(addressEcp6A1K, uinteJeDAhe, {from: accounts[3]});

		assert.equal(boolKNGempu, true)
		assert.equal(uint256lzksrJ, BigInt("0"))
		assert.equal(uint256r5w3wdM, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgiso1nHdNq = await Ledgis.new({from: accounts[4]});
		const uintgrweiid = BigInt("1002")
		const addressOvbkrjH = accounts[4]
		const uintcLVu5a9 = BigInt("1350")
		const addressitLES8 = accounts[0]
		const address6fdRDr = accounts[4]
		const uintG4vGNt = BigInt("1457")
		const addresshnMPwmc = accounts[3]
		const boolb8k13HN = await Ledgiso1nHdNq.transfer.call(addressOvbkrjH, uintgrweiid, {from: accounts[0]});
		const boolBAmBsH = await Ledgiso1nHdNq.transferFrom.call(address6fdRDr, addressitLES8, uintcLVu5a9, {from: accounts[2]});
		const addressLdklqN4 = await Ledgiso1nHdNq.unlock.call(addresshnMPwmc, uintG4vGNt, {from: accounts[0]});

		await expect(Ledgiso1nHdNq.transfer.call(addressOvbkrjH, uintgrweiid, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgiso1nHdNq = await Ledgis.new({from: accounts[4]});
		const addressDCl6bT2 = accounts[1]
		const uintnQno4J = BigInt("1350")
		const addressYwR8azK = accounts[0]
		const addressPIUaeFw = accounts[3]
		const addresseHumdI5 = await Ledgiso1nHdNq.freeze.call(addressDCl6bT2, {from: accounts[4]});
		const boolBAmBsH = await Ledgiso1nHdNq.transferFrom.call(addressPIUaeFw, addressYwR8azK, uintnQno4J, {from: accounts[2]});

		await expect(Ledgiso1nHdNq.transferFrom.call(addressPIUaeFw, addressYwR8azK, uintnQno4J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const addressHtso6Xi = accounts[3]
		const addressnerCBDS = "0x0000000000000000000000000000000000000001"
		const addressZNDtjgH = accounts[0]
		const uintue1Adq = BigInt("2023")
		const addressqA1sFMl = accounts[0]
		const uintfPioxA = BigInt("623")
		const uintcOPNSBN = BigInt("1015")
		const addressTVrDAFm = accounts[2]
		const uint256lzksrJ = await LedgisUonWa9e.allowance.call(addressnerCBDS, addressHtso6Xi, {from: accounts[5]});
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addressZNDtjgH, {from: accounts[4]});
		await LedgisUonWa9e.renounceOwnership.call({from: accounts[1]});
		const boolKNGempu = await LedgisUonWa9e.increaseAllowance.call(addressqA1sFMl, uintue1Adq, {from: accounts[3]});
		const boolkc9vVmL = await LedgisUonWa9e.transferWithLockAfter.call(addressTVrDAFm, uintcOPNSBN, uintfPioxA, {from: accounts[5]});

		assert.equal(uint256iO56AJf, BigInt("0"))
		assert.equal(uint256lzksrJ, BigInt("0"))
		await expect(LedgisUonWa9e.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgiso1nHdNq = await Ledgis.new({from: accounts[4]});
		const uinttQINRMx = BigInt("1346")
		const addressVd9Q3dN = accounts[0]
		const addressC8gTSc = accounts[3]
		const uint256lGdd2Lc = await Ledgiso1nHdNq.totalSupply.call({from: accounts[1]});
		const boolBAmBsH = await Ledgiso1nHdNq.transferFrom.call(addressC8gTSc, addressVd9Q3dN, uinttQINRMx, {from: accounts[2]});
		await Ledgiso1nHdNq.pause.call({from: accounts[5]});

		assert.equal(uint256lGdd2Lc, BigInt("10000000000000"))
		await expect(Ledgiso1nHdNq.transferFrom.call(addressC8gTSc, addressVd9Q3dN, uinttQINRMx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const uintqe7POD9 = BigInt("650")
		const uintE7ecIkN = BigInt("264")
		const addresshG2NawS = accounts[3]
		const addresse7U3T1p = accounts[2]
		const addressB5AvkR = "0x0000000000000000000000000000000000000001"
		const uintDtXubOf = BigInt("2023")
		const addressUhroIMp = accounts[0]
		const uintg16Zh4Y = BigInt("2034")
		const addressfid6VCZ = accounts[3]
		const boolL09vdzD = await LedgisUonWa9e.transferWithLock.call(addresshG2NawS, uintE7ecIkN, uintqe7POD9, {from: accounts[1]});
		const uint256lzksrJ = await LedgisUonWa9e.allowance.call(addressB5AvkR, addresse7U3T1p, {from: accounts[5]});
		const boolKNGempu = await LedgisUonWa9e.increaseAllowance.call(addressUhroIMp, uintDtXubOf, {from: accounts[3]});
		const boolgIAqrM = await LedgisUonWa9e.transfer.call(addressfid6VCZ, uintg16Zh4Y, {from: accounts[5]});

		assert.equal(boolKNGempu, true)
		assert.equal(boolL09vdzD, true)
		assert.equal(uint256lzksrJ, BigInt("0"))
		await expect(LedgisUonWa9e.transfer.call(addressfid6VCZ, uintg16Zh4Y, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscKewzXW = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintw4SlfGM = BigInt("474")
		const addressjeMIIhQ = accounts[1]
		const addressmlCLHZB = accounts[1]
		const uintGCFZ3Ip = BigInt("875")
		const addressWv7qqDf = accounts[2]
		const addressxhkdRaD = accounts[4]
		const boolfn6tAeK = await LedgiscKewzXW.transferFrom.call(addressmlCLHZB, addressjeMIIhQ, uintw4SlfGM, {from: accounts[5]});
		const boolJ8X6gUo = await LedgiscKewzXW.transfer.call(addressWv7qqDf, uintGCFZ3Ip, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FzEDNqk = await LedgiscKewzXW.lockCount.call(addressxhkdRaD, {from: accounts[2]});
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const address5f9RSM = accounts[0]
		const addressSUp8T4N = accounts[3]
		const uintuGe39Ng = BigInt("2023")
		const addressVWLxeJD = accounts[0]
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(address5f9RSM, {from: accounts[4]});
		const uint256CjOc0Y4 = await LedgisUonWa9e.totalSupply.call({from: accounts[4]});
		const boolbdCYEiA = await LedgisUonWa9e.isFrozen.call(addressSUp8T4N, {from: accounts[1]});
		const boolKNGempu = await LedgisUonWa9e.increaseAllowance.call(addressVWLxeJD, uintuGe39Ng, {from: accounts[3]});

		assert.equal(boolKNGempu, true)
		assert.equal(boolbdCYEiA, false)
		assert.equal(uint256CjOc0Y4, BigInt("10000000000000"))
		assert.equal(uint256iO56AJf, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const addressrYAQt6E = accounts[2]
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addressrYAQt6E, {from: accounts[4]});
		const uint25698UBjX = await LedgisUonWa9e.currentTime.call({from: accounts[0]});

		assert.equal(uint25698UBjX, BigInt("1630231730"))
		assert.equal(uint256iO56AJf, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgiso1nHdNq = await Ledgis.new({from: accounts[4]});
		const uintj4XfpR = BigInt("374")
		const addressDOpy2KU = accounts[1]
		const uintneBDGfb = BigInt("1350")
		const addressqGS4HDA = accounts[1]
		const addressISNoBFH = accounts[3]
		const addresscbP1qla = await Ledgiso1nHdNq.unlock.call(addressDOpy2KU, uintj4XfpR, {from: accounts[4]});
		const boolBAmBsH = await Ledgiso1nHdNq.transferFrom.call(addressISNoBFH, addressqGS4HDA, uintneBDGfb, {from: accounts[2]});

		await expect(Ledgiso1nHdNq.unlock.call(addressDOpy2KU, uintj4XfpR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const addressImHb8Kw = accounts[2]
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addressImHb8Kw, {from: accounts[4]});
		await LedgisUonWa9e.pause.call({from: accounts[1]});
		await LedgisUonWa9e.whenPaused.call({from: accounts[3]});

		assert.equal(uint256iO56AJf, BigInt("0"))
		await expect(LedgisUonWa9e.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const addressLxEgJxN = accounts[2]
		const uintbykr9kY = BigInt("2016")
		const uintnk7vPZj = BigInt("294")
		const addressp3uSTL4 = accounts[3]
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addressLxEgJxN, {from: accounts[4]});
		const addressFMe7Pw = await LedgisUonWa9e.lock.call(addressp3uSTL4, uintnk7vPZj, uintbykr9kY, {from: accounts[1]});

		assert.equal(uint256iO56AJf, BigInt("0"))
		await expect(LedgisUonWa9e.lock.call(addressp3uSTL4, uintnk7vPZj, uintbykr9kY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const addresspCeztTY = accounts[2]
		const uintbMLBKLg = BigInt("846")
		const addressOkwKP6h = accounts[4]
		const addressORzyXWE = accounts[4]
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addresspCeztTY, {from: accounts[4]});
		await LedgisUonWa9e.unpause.call({from: accounts[1]});
		const boolaC1JWKP = await LedgisUonWa9e.transferFrom.call(addressORzyXWE, addressOkwKP6h, uintbMLBKLg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iO56AJf, BigInt("0"))
		await expect(LedgisUonWa9e.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgiso1nHdNq = await Ledgis.new({from: accounts[4]});
		const uintLHMpglH = BigInt("999")
		const addressAKriKLK = accounts[2]
		const uintPmpreo3 = BigInt("1350")
		const addresspiadyaT = accounts[0]
		const addressCxcEsuu = accounts[4]
		const uintFVoNPSG = BigInt("1822")
		const addressanFG8Rs = accounts[0]
		const boolKDZSZk = await Ledgiso1nHdNq.mint.call(addressAKriKLK, uintLHMpglH, {from: accounts[4]});
		await Ledgiso1nHdNq.unpause.call({from: accounts[2]});
		const boolBAmBsH = await Ledgiso1nHdNq.transferFrom.call(addressCxcEsuu, addresspiadyaT, uintPmpreo3, {from: accounts[2]});
		const boolBAEUtZ4 = await Ledgiso1nHdNq.mint.call(addressanFG8Rs, uintFVoNPSG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKDZSZk, true)
		await expect(Ledgiso1nHdNq.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgiso1nHdNq = await Ledgis.new({from: accounts[4]});
		const uintS435k95 = BigInt("483")
		const uintFpgH1IR = BigInt("1299")
		const addressH4I73iG = accounts[3]
		const uintKg6uSFr = BigInt("1370")
		const addressfterMJw = accounts[0]
		const addressrkDSgPs = accounts[3]
		const addressePk99Tf = accounts[4]
		const uintVfsIfDO = BigInt("1868")
		const addressuRqWtSb = accounts[2]
		const booldR96NbJ = await Ledgiso1nHdNq.transferWithLockAfter.call(addressH4I73iG, uintFpgH1IR, uintS435k95, {from: accounts[4]});
		const boolBAmBsH = await Ledgiso1nHdNq.transferFrom.call(addressrkDSgPs, addressfterMJw, uintKg6uSFr, {from: accounts[2]});
		const addressipgS70U = await Ledgiso1nHdNq.freeze.call(addressePk99Tf, {from: "0x0000000000000000000000000000000000000001"});
		const booleKiu4b5 = await Ledgiso1nHdNq.approve.call(addressuRqWtSb, uintVfsIfDO, {from: accounts[5]});

		assert.equal(booldR96NbJ, true)
		await expect(Ledgiso1nHdNq.transferFrom.call(addressrkDSgPs, addressfterMJw, uintKg6uSFr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const addressykkdlUk = accounts[2]
		const uintxycuoDY = BigInt("429")
		const addressW1kII2l = accounts[4]
		const addressOQXk6i = accounts[2]
		const boolWheA2DJ = await LedgisUonWa9e.isFrozen.call(addressykkdlUk, {from: accounts[1]});
		const addresstN4JBGA = await LedgisUonWa9e.burn.call(addressW1kII2l, uintxycuoDY, {from: accounts[1]});
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addressOQXk6i, {from: accounts[4]});

		assert.equal(boolWheA2DJ, false)
		await expect(LedgisUonWa9e.burn.call(addressW1kII2l, uintxycuoDY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const uintXvYVt73 = BigInt("1320")
		const addressFoHx4Lr = accounts[1]
		const addressG5IUhe7 = accounts[2]
		const addressrlAD1D3 = await LedgisUonWa9e.burn.call(addressFoHx4Lr, uintXvYVt73, {from: accounts[1]});
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addressG5IUhe7, {from: accounts[4]});

		assert.equal(uint256iO56AJf, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const Ledgiso1nHdNq = await Ledgis.new({from: accounts[4]});
		const uintrvMPtUt = BigInt("356")
		const uintowVIm2m = BigInt("1653")
		const addressbsJXpg0 = accounts[0]
		const uintEJyXChr = BigInt("398")
		const uintWHKV53d = BigInt("1912")
		const addressPNMwsM8 = accounts[0]
		const uinta92loR0 = BigInt("1350")
		const addressqMEPWTY = accounts[1]
		const addressJbYxJyG = accounts[3]
		const addressGUHvjMY = await Ledgiso1nHdNq.lockAfter.call(addressbsJXpg0, uintowVIm2m, uintrvMPtUt, {from: accounts[4]});
		const addresslau4e0A = await Ledgiso1nHdNq.lockAfter.call(addressPNMwsM8, uintWHKV53d, uintEJyXChr, {from: accounts[4]});
		const boolBAmBsH = await Ledgiso1nHdNq.transferFrom.call(addressJbYxJyG, addressqMEPWTY, uinta92loR0, {from: accounts[2]});

		await expect(Ledgiso1nHdNq.lockAfter.call(addressbsJXpg0, uintowVIm2m, uintrvMPtUt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisUonWa9e = await Ledgis.new({from: accounts[1]});
		const addressXLghqFR = accounts[5]
		const addressCvVZl2o = accounts[2]
		const addressUQrrkoA = await LedgisUonWa9e.unfreeze.call(addressXLghqFR, {from: accounts[1]});
		await LedgisUonWa9e.whenPaused.call({from: accounts[0]});
		const uint256iO56AJf = await LedgisUonWa9e.balanceOf.call(addressCvVZl2o, {from: accounts[4]});

		await expect(LedgisUonWa9e.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})