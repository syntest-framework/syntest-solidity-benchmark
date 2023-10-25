const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisAwdYCjm = await Ledgis.new({from: accounts[2]});
		const addresshBLTBZ2 = accounts[0]
		await LedgisAwdYCjm.onlyOwner.call({from: accounts[4]});
		const addressnGWCXmW = await LedgisAwdYCjm.freeze.call(addresshBLTBZ2, {from: accounts[2]});

		await expect(LedgisAwdYCjm.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOBtOqIx = await Ledgis.new({from: accounts[5]});
		const uintPVDRUg = BigInt("1166")
		const addressUEXOH8T = accounts[3]
		const addressZTWkj5L = accounts[3]
		const uintkbrRkgk = BigInt("630")
		const addressIakRIUY = accounts[5]
		await LedgisOBtOqIx.pause.call({from: accounts[5]});
		const boolJUD5wtD = await LedgisOBtOqIx.increaseAllowance.call(addressUEXOH8T, uintPVDRUg, {from: accounts[2]});
		const uint256q2GO0JY = await LedgisOBtOqIx.lockCount.call(addressZTWkj5L, {from: accounts[1]});
		const boolKTQ4Uvk = await LedgisOBtOqIx.decreaseAllowance.call(addressIakRIUY, uintkbrRkgk, {from: accounts[2]});

		await expect(LedgisOBtOqIx.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisGos2fBn = await Ledgis.new({from: accounts[5]});
		const addresspbJrTSD = accounts[4]
		const uintdsYdxWg = BigInt("1065")
		const uintmx48QNV = BigInt("1553")
		const addressArz28oa = accounts[4]
		const uint256CaknFov = await LedgisGos2fBn.balanceOf.call(addresspbJrTSD, {from: accounts[1]});
		const addressSirSFPq = await LedgisGos2fBn.lock.call(addressArz28oa, uintmx48QNV, uintdsYdxWg, {from: accounts[2]});

		assert.equal(uint256CaknFov, BigInt("0"))
		await expect(LedgisGos2fBn.lock.call(addressArz28oa, uintmx48QNV, uintdsYdxWg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisK8SGZBf = await Ledgis.new({from: accounts[1]});
		const uintL1KIXZ = BigInt("924")
		const addressLHtudt = accounts[2]
		const addressqp6ITJ0 = accounts[5]
		const addressDwdHdFS = accounts[4]
		const uintfGpZ9A7 = BigInt("1052")
		const addressFJAG7y = "0x0000000000000000000000000000000000000001"
		const boolbgRjTs4 = await LedgisK8SGZBf.transferFrom.call(addressqp6ITJ0, addressLHtudt, uintL1KIXZ, {from: accounts[1]});
		const uint256a1hjVH9 = await LedgisK8SGZBf.totalSupply.call({from: accounts[3]});
		const uint256BIls274 = await LedgisK8SGZBf.balanceOf.call(addressDwdHdFS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FRQtRxh = await LedgisK8SGZBf.afterTime.call(uintfGpZ9A7, {from: accounts[4]});
		const boolYs33Otu = await LedgisK8SGZBf.isFrozen.call(addressFJAG7y, {from: accounts[0]});

		await expect(LedgisK8SGZBf.transferFrom.call(addressqp6ITJ0, addressLHtudt, uintL1KIXZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisotyIL6n = await Ledgis.new({from: accounts[4]});
		const uinteFxREe7 = BigInt("608")
		const addresszkJRAow = accounts[3]
		const uintwNnPyHQ = BigInt("1246")
		const addressSLkEwmC = accounts[0]
		const addressZ9j7D3e = accounts[1]
		const uintZwDiqCd = BigInt("1610")
		const address3btaH2 = accounts[1]
		const uintvVtg4xD = BigInt("1676")
		const addressWVMmr0 = "0x0000000000000000000000000000000000000001"
		await LedgisotyIL6n.lockState.call(addresszkJRAow, uinteFxREe7, {from: accounts[0]});
		await LedgisotyIL6n.whenPaused.call({from: accounts[1]});
		const addresshTppuX = await LedgisotyIL6n.unlock.call(addressSLkEwmC, uintwNnPyHQ, {from: accounts[2]});
		const booltyU1Lig = await LedgisotyIL6n.isFrozen.call(addressZ9j7D3e, {from: accounts[3]});
		const boolEgFOfE = await LedgisotyIL6n.transfer.call(address3btaH2, uintZwDiqCd, {from: accounts[1]});
		const boolyanSgsd = await LedgisotyIL6n.transfer.call(addressWVMmr0, uintvVtg4xD, {from: accounts[3]});

		await expect(LedgisotyIL6n.lockState.call(addresszkJRAow, uinteFxREe7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisjuPx5cU = await Ledgis.new({from: accounts[1]});
		const uintR6XbCQa = BigInt("522")
		const uintCCrWV93 = BigInt("1587")
		const addressAZMmXgx = accounts[3]
		const uintXA6NQbn = BigInt("250")
		const addressHuF5KNy = accounts[1]
		const addressh9drYb = accounts[4]
		const uinteJEiecV = BigInt("458")
		const addresstneSuS = accounts[5]
		const uint256SYqFmVL = await LedgisjuPx5cU.totalSupply.call({from: accounts[0]});
		const addressFWIzLnY = await LedgisjuPx5cU.lock.call(addressAZMmXgx, uintCCrWV93, uintR6XbCQa, {from: accounts[0]});
		const uint256YhHOtT = await LedgisjuPx5cU.currentTime.call({from: accounts[2]});
		const boolwtyogZo = await LedgisjuPx5cU.transferFrom.call(addressh9drYb, addressHuF5KNy, uintXA6NQbn, {from: accounts[0]});
		const addressX1kwpdi = await LedgisjuPx5cU.unlock.call(addresstneSuS, uinteJEiecV, {from: accounts[3]});

		assert.equal(uint256SYqFmVL, BigInt("10000000000000"))
		await expect(LedgisjuPx5cU.lock.call(addressAZMmXgx, uintCCrWV93, uintR6XbCQa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLP2S18O = await Ledgis.new({from: accounts[4]});
		const uintlLh3IAX = BigInt("565")
		const uintvmZDSbo = BigInt("812")
		const addresss7JEd0x = accounts[4]
		const addresszLfDnL = accounts[0]
		const addressPI56iXL = await LedgisLP2S18O.lock.call(addresss7JEd0x, uintvmZDSbo, uintlLh3IAX, {from: accounts[4]});
		const addressu5vVrw2 = await LedgisLP2S18O.transferOwnership.call(addresszLfDnL, {from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const LedgisLP2S18O = await Ledgis.new({from: accounts[4]});
		const uintiIq0SPo = BigInt("565")
		const uintVMsT5uU = BigInt("812")
		const addresshRGwtVY = accounts[5]
		const addressG8IiFbE = accounts[0]
		const addressPI56iXL = await LedgisLP2S18O.lock.call(addresshRGwtVY, uintVMsT5uU, uintiIq0SPo, {from: accounts[4]});
		const addressu5vVrw2 = await LedgisLP2S18O.transferOwnership.call(addressG8IiFbE, {from: accounts[4]});

		await expect(LedgisLP2S18O.lock.call(addresshRGwtVY, uintVMsT5uU, uintiIq0SPo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZdFUKKB = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttZHAvCf = BigInt("1001")
		const addressQLyVts = accounts[3]
		const addressbvTaq1H = accounts[2]
		const addressORwZ0q4 = accounts[2]
		const boolhmvoyuy = await LedgisZdFUKKB.transferFrom.call(addressbvTaq1H, addressQLyVts, uinttZHAvCf, {from: accounts[3]});
		const uint256ouCqgY6 = await LedgisZdFUKKB.balanceOf.call(addressORwZ0q4, {from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const LedgisGos2fBn = await Ledgis.new({from: accounts[5]});
		const uintuufkSR6 = BigInt("1257")
		const addressvUHkMqK = accounts[2]
		const uintrq78Lxa = BigInt("997")
		const addressL5h5S2N = accounts[2]
		const uintbgKONVB = BigInt("1278")
		const addressCUr19Nv = accounts[5]
		const uinteDsle56 = BigInt("1945")
		const uintyZ0sLDt = BigInt("1401")
		const addressHUpOH9A = accounts[4]
		const addressisaco3M = accounts[5]
		const boolJOpld8o = await LedgisGos2fBn.approve.call(addressvUHkMqK, uintuufkSR6, {from: accounts[5]});
		const booll7MfKXs = await LedgisGos2fBn.approve.call(addressL5h5S2N, uintrq78Lxa, {from: accounts[1]});
		const boolCwFWhKN = await LedgisGos2fBn.transfer.call(addressCUr19Nv, uintbgKONVB, {from: accounts[4]});
		const boolkO3lNO = await LedgisGos2fBn.transferWithLockAfter.call(addressHUpOH9A, uintyZ0sLDt, uinteDsle56, {from: accounts[2]});
		const uint256CaknFov = await LedgisGos2fBn.balanceOf.call(addressisaco3M, {from: accounts[1]});

		assert.equal(boolJOpld8o, true)
		assert.equal(booll7MfKXs, true)
		await expect(LedgisGos2fBn.transfer.call(addressCUr19Nv, uintbgKONVB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisGos2fBn = await Ledgis.new({from: accounts[5]});
		const uintmBpgY9p = BigInt("1628")
		const addressVt5bOGt = accounts[6]
		const addressJ2RsnoB = accounts[3]
		const uintkTWPY6Q = BigInt("1065")
		const uintK3232qe = BigInt("1553")
		const address6sE2i5 = accounts[4]
		const uint256OEz3BR = await LedgisGos2fBn.afterTime.call(uintmBpgY9p, {from: accounts[3]});
		const uint256CaknFov = await LedgisGos2fBn.balanceOf.call(addressVt5bOGt, {from: accounts[1]});
		await LedgisGos2fBn.unpause.call({from: accounts[3]});
		const uint256ZWLc1eV = await LedgisGos2fBn.balanceOf.call(addressJ2RsnoB, {from: accounts[2]});
		const addressSirSFPq = await LedgisGos2fBn.lock.call(address6sE2i5, uintK3232qe, uintkTWPY6Q, {from: accounts[2]});

		assert.equal(uint256CaknFov, BigInt("0"))
		assert.equal(uint256OEz3BR, BigInt("1630233376"))
		await expect(LedgisGos2fBn.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisK8SGZBf = await Ledgis.new({from: accounts[1]});
		const uintWBKHZYU = BigInt("1052")
		const addressKpm0hmJ = "0x0000000000000000000000000000000000000001"
		const uint256FRQtRxh = await LedgisK8SGZBf.afterTime.call(uintWBKHZYU, {from: accounts[4]});
		const boolYs33Otu = await LedgisK8SGZBf.isFrozen.call(addressKpm0hmJ, {from: accounts[0]});

		assert.equal(boolYs33Otu, false)
		assert.equal(uint256FRQtRxh, BigInt("1630232796"))
	});

	it('test for Ledgis', async () => {
		const LedgisGos2fBn = await Ledgis.new({from: accounts[5]});
		const addressbZNSpCr = accounts[4]
		const addressYlOXfN = accounts[1]
		const addresscJfoWZ = accounts[2]
		const uintHafP3AW = BigInt("94")
		const addressDXSVLQ = accounts[4]
		const addressefAf6dr = "0x0000000000000000000000000000000000000001"
		const uintv9JKaYt = BigInt("1317")
		const uintS3VSzNC = BigInt("1065")
		const uintB8JOiqr = BigInt("1553")
		const addressFJ8FgUu = accounts[4]
		const addressqNR0iAi = accounts[3]
		const uint256CaknFov = await LedgisGos2fBn.balanceOf.call(addressbZNSpCr, {from: accounts[1]});
		const uint256OT7qtpv = await LedgisGos2fBn.allowance.call(addresscJfoWZ, addressYlOXfN, {from: accounts[1]});
		const boolApT5O28 = await LedgisGos2fBn.transferFrom.call(addressefAf6dr, addressDXSVLQ, uintHafP3AW, {from: accounts[3]});
		await LedgisGos2fBn.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YKbH8Yp = await LedgisGos2fBn.afterTime.call(uintv9JKaYt, {from: accounts[4]});
		const addressSirSFPq = await LedgisGos2fBn.lock.call(addressFJ8FgUu, uintB8JOiqr, uintS3VSzNC, {from: accounts[2]});
		const uint256rFzav6F = await LedgisGos2fBn.lockCount.call(addressqNR0iAi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256CaknFov, BigInt("0"))
		assert.equal(uint256OT7qtpv, BigInt("0"))
		await expect(LedgisGos2fBn.transferFrom.call(addressefAf6dr, addressDXSVLQ, uintHafP3AW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKlJAdLi = await Ledgis.new({from: accounts[4]});
		const uint58toAr = BigInt("190")
		const uintTSy5eDr = BigInt("1162")
		const addressyAYNanF = accounts[4]
		await LedgisKlJAdLi.renounceOwnership.call({from: accounts[4]});
		const addressAebWeUa = await LedgisKlJAdLi.lock.call(addressyAYNanF, uintTSy5eDr, uint58toAr, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisKlJAdLi.pause.call({from: accounts[1]});

		await expect(LedgisKlJAdLi.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisGos2fBn = await Ledgis.new({from: accounts[5]});
		const addressQ4ZqetD = accounts[4]
		const uintNDcjhg2 = BigInt("94")
		const addressTEnqueD = accounts[5]
		const addressF1Sifr2 = "0x0000000000000000000000000000000000000001"
		const uint3gT84L = BigInt("1317")
		const uintltUOpCv = BigInt("1065")
		const uintTSlDlBB = BigInt("1539")
		const addressBgzmU64 = accounts[4]
		const uint256mLvde5 = await LedgisGos2fBn.currentTime.call({from: accounts[4]});
		const uint256CaknFov = await LedgisGos2fBn.balanceOf.call(addressQ4ZqetD, {from: accounts[1]});
		const boolApT5O28 = await LedgisGos2fBn.transferFrom.call(addressF1Sifr2, addressTEnqueD, uintNDcjhg2, {from: accounts[3]});
		const uint256YKbH8Yp = await LedgisGos2fBn.afterTime.call(uint3gT84L, {from: accounts[4]});
		const uint256kOpdStN = await LedgisGos2fBn.currentTime.call({from: accounts[2]});
		const addressSirSFPq = await LedgisGos2fBn.lock.call(addressBgzmU64, uintTSlDlBB, uintltUOpCv, {from: accounts[2]});

		assert.equal(uint256CaknFov, BigInt("0"))
		assert.equal(uint256mLvde5, BigInt("1630231747"))
		await expect(LedgisGos2fBn.transferFrom.call(addressF1Sifr2, addressTEnqueD, uintNDcjhg2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisK8SGZBf = await Ledgis.new({from: accounts[1]});
		const uintkUQq6r = BigInt("390")
		const addressK1TdHfJ = accounts[5]
		const uintH1qDDin = BigInt("924")
		const addressCAHSvHd = accounts[3]
		const addressj80HLQv = accounts[7]
		const addressrmlEIQ4 = await LedgisK8SGZBf.burn.call(addressK1TdHfJ, uintkUQq6r, {from: accounts[1]});
		const boolbgRjTs4 = await LedgisK8SGZBf.transferFrom.call(addressj80HLQv, addressCAHSvHd, uintH1qDDin, {from: accounts[1]});

		await expect(LedgisK8SGZBf.burn.call(addressK1TdHfJ, uintkUQq6r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisGos2fBn = await Ledgis.new({from: accounts[5]});
		const addressMqqAfML = accounts[4]
		const uintZFNHtPZ = BigInt("256")
		const addressKNi3VMJ = accounts[4]
		const addressDAYk7Vn = "0x0000000000000000000000000000000000000001"
		const uintXLqCelL = BigInt("1330")
		const uintKBxuYJ = BigInt("1065")
		const uintPIVWyIw = BigInt("1553")
		const addressdAaYNN = accounts[4]
		const uintPRLYKZ = BigInt("1566")
		const uintdzHUPPo = BigInt("1244")
		const addresszItGnMs = accounts[3]
		await LedgisGos2fBn.unpause.call({from: accounts[5]});
		const uint256CaknFov = await LedgisGos2fBn.balanceOf.call(addressMqqAfML, {from: accounts[1]});
		const boolApT5O28 = await LedgisGos2fBn.transferFrom.call(addressDAYk7Vn, addressKNi3VMJ, uintZFNHtPZ, {from: accounts[3]});
		const uint256YKbH8Yp = await LedgisGos2fBn.afterTime.call(uintXLqCelL, {from: accounts[4]});
		const addressSirSFPq = await LedgisGos2fBn.lock.call(addressdAaYNN, uintPIVWyIw, uintKBxuYJ, {from: accounts[2]});
		const boolmQIMby = await LedgisGos2fBn.transferWithLock.call(addresszItGnMs, uintdzHUPPo, uintPRLYKZ, {from: accounts[2]});

		await expect(LedgisGos2fBn.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisVQZ1wjJ = await Ledgis.new({from: accounts[2]});
		const uintNpitrfT = BigInt("1467")
		const uintU6ki1d = BigInt("928")
		const addressYCBgPod = accounts[1]
		const uintTfKXEdJ = BigInt("302")
		const addressscp2YVn = accounts[1]
		const boolvkTcNIf = await LedgisVQZ1wjJ.transferWithLock.call(addressYCBgPod, uintU6ki1d, uintNpitrfT, {from: accounts[2]});
		await LedgisVQZ1wjJ.whenPaused.call({from: accounts[3]});
		const boolrAqNcAK = await LedgisVQZ1wjJ.increaseAllowance.call(addressscp2YVn, uintTfKXEdJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvkTcNIf, true)
		await expect(LedgisVQZ1wjJ.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisGos2fBn = await Ledgis.new({from: accounts[5]});
		const uintqqi2raC = BigInt("28")
		const addressXBZC6fH = accounts[2]
		const addresssmfzX3A = accounts[5]
		const uintfi2OrJl = BigInt("629")
		const uintAAzs9EM = BigInt("1382")
		const addressU64KDVT = accounts[5]
		const addressuGHcFjB = accounts[6]
		const boolHH81YoJ = await LedgisGos2fBn.transfer.call(addressXBZC6fH, uintqqi2raC, {from: accounts[5]});
		const boolGxHPdTY = await LedgisGos2fBn.isFrozen.call(addresssmfzX3A, {from: accounts[0]});
		const booln4kVLm1 = await LedgisGos2fBn.transferWithLockAfter.call(addressU64KDVT, uintAAzs9EM, uintfi2OrJl, {from: accounts[5]});
		const uint256CaknFov = await LedgisGos2fBn.balanceOf.call(addressuGHcFjB, {from: accounts[1]});

		assert.equal(boolGxHPdTY, false)
		assert.equal(boolHH81YoJ, true)
		assert.equal(booln4kVLm1, true)
		assert.equal(uint256CaknFov, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisVygCCg7 = await Ledgis.new({from: accounts[4]});
		const uintjxYDLZw = BigInt("434")
		const addresso27KaOo = accounts[0]
		const uintvpTS5DN = BigInt("44")
		const addressYUhuKnf = "0x0000000000000000000000000000000000000001"
		const boolyyCxjbB = await LedgisVygCCg7.mint.call(addresso27KaOo, uintjxYDLZw, {from: accounts[4]});
		const addressPrym8vo = await LedgisVygCCg7.unlock.call(addressYUhuKnf, uintvpTS5DN, {from: accounts[2]});
		await LedgisVygCCg7.renounceOwnership.call({from: accounts[2]});

		assert.equal(boolyyCxjbB, true)
		await expect(LedgisVygCCg7.unlock.call(addressYUhuKnf, uintvpTS5DN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisfWW9FE7 = await Ledgis.new({from: accounts[0]});
		const uintz21MnQp = BigInt("1643")
		const addressDNKOyeI = accounts[0]
		const uintW9089Bk = BigInt("1894")
		const uintKNGMB9O = BigInt("1110")
		const addressX0K08UW = accounts[0]
		const uintQ3U4p2T = BigInt("1153")
		const uintA4N05EL = BigInt("1122")
		const addressUFk2GtW = accounts[1]
		const uinteJ3gD7 = BigInt("8")
		const addressWrPOvFC = accounts[1]
		const addressFEki8tR = accounts[1]
		const addressgfYiL6G = accounts[0]
		const bool0ZWoAE = await LedgisfWW9FE7.increaseAllowance.call(addressDNKOyeI, uintz21MnQp, {from: accounts[1]});
		const addresstEOulgO = await LedgisfWW9FE7.lockAfter.call(addressX0K08UW, uintKNGMB9O, uintW9089Bk, {from: accounts[0]});
		const boolU67TV0E = await LedgisfWW9FE7.transferWithLock.call(addressUFk2GtW, uintA4N05EL, uintQ3U4p2T, {from: accounts[0]});
		await LedgisfWW9FE7.lockState.call(addressWrPOvFC, uinteJ3gD7, {from: accounts[0]});
		const uint256pPiB3v3 = await LedgisfWW9FE7.balanceOf.call(addressFEki8tR, {from: accounts[5]});
		const uint256w1CYmar = await LedgisfWW9FE7.balanceOf.call(addressgfYiL6G, {from: accounts[0]});

		assert.equal(bool0ZWoAE, true)
		assert.equal(boolU67TV0E, true)
		await expect(LedgisfWW9FE7.lockState.call(addressWrPOvFC, uinteJ3gD7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisK8SGZBf = await Ledgis.new({from: accounts[1]});
		const uintSqliO1W = BigInt("1325")
		const addressPfWSaqf = accounts[3]
		const uintWcCe17g = BigInt("924")
		const addresszy291v4 = accounts[3]
		const addressXFkinox = accounts[7]
		const uintzn0JRb2 = BigInt("932")
		const uintCqkBsVq = BigInt("991")
		const addressLu7riNp = accounts[0]
		const addressiDjxTE2 = await LedgisK8SGZBf.unlock.call(addressPfWSaqf, uintSqliO1W, {from: accounts[1]});
		const boolbgRjTs4 = await LedgisK8SGZBf.transferFrom.call(addressXFkinox, addresszy291v4, uintWcCe17g, {from: accounts[1]});
		const addressqdI11R0 = await LedgisK8SGZBf.lockAfter.call(addressLu7riNp, uintCqkBsVq, uintzn0JRb2, {from: accounts[0]});

		await expect(LedgisK8SGZBf.unlock.call(addressPfWSaqf, uintSqliO1W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisGos2fBn = await Ledgis.new({from: accounts[5]});
		const addressmW1OVz = accounts[3]
		const addressDB2q3Jb = accounts[6]
		const addresse9oj7wF = await LedgisGos2fBn.unfreeze.call(addressmW1OVz, {from: accounts[5]});
		const uint256CaknFov = await LedgisGos2fBn.balanceOf.call(addressDB2q3Jb, {from: accounts[1]});

		assert.equal(uint256CaknFov, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisGos2fBn = await Ledgis.new({from: accounts[5]});
		const addressloQDUIP = accounts[5]
		const addressAjGqd50 = accounts[6]
		const addressHL9DCwz = await LedgisGos2fBn.freeze.call(addressloQDUIP, {from: accounts[5]});
		const uint256CaknFov = await LedgisGos2fBn.balanceOf.call(addressAjGqd50, {from: accounts[1]});

		assert.equal(uint256CaknFov, BigInt("0"))
	});
})