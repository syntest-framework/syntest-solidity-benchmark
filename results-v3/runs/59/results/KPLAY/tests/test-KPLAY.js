const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYg0YIm5 = await KPLAY.new({from: accounts[0]});
		const uintWq9eH1B = BigInt("448")
		const uintSIy5gQv = BigInt("1634")
		const addressKMuzDSO = accounts[0]
		const uintjmhRxP = BigInt("1991")
		const addresszc0zIEy = accounts[1]
		const boolHOSUgR7 = await KPLAYg0YIm5.transferWithLock.call(addressKMuzDSO, uintSIy5gQv, uintWq9eH1B, {from: accounts[4]});
		const boolU5DJaO5 = await KPLAYg0YIm5.approve.call(addresszc0zIEy, uintjmhRxP, {from: accounts[1]});

		await expect(KPLAYg0YIm5.transferWithLock.call(addressKMuzDSO, uintSIy5gQv, uintWq9eH1B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const addressIYAqTHE = accounts[3]
		const uintEzAASnR = BigInt("1625")
		const addressgCxlNA = accounts[3]
		const addressz1xrOVz = accounts[2]
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addressIYAqTHE, {from: accounts[1]});
		const boolWfQG20T = await KPLAYhUcaDbA.approve.call(addressgCxlNA, uintEzAASnR, {from: accounts[3]});
		const uint256ocfqVH = await KPLAYhUcaDbA.lockCount.call(addressz1xrOVz, {from: accounts[1]});

		assert.equal(boolWfQG20T, true)
		assert.equal(uint256ocfqVH, BigInt("0"))
		assert.equal(uint256vsMllD9, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYeGuZ9w = await KPLAY.new({from: accounts[4]});
		const uintUyocgBd = BigInt("1982")
		const addressaWgvfBN = accounts[2]
		const booltXVqoVi = await KPLAYeGuZ9w.approve.call(addressaWgvfBN, uintUyocgBd, {from: accounts[1]});
		const uint256NZaJdkB = await KPLAYeGuZ9w.currentTime.call({from: accounts[2]});
		await KPLAYeGuZ9w.whenPaused.call({from: accounts[0]});

		assert.equal(booltXVqoVi, true)
		assert.equal(uint256NZaJdkB, BigInt("1630229194"))
		await expect(KPLAYeGuZ9w.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKIqnRdS = await KPLAY.new({from: accounts[2]});
		const uintcPC7lr7 = BigInt("708")
		const addressewTektQ = accounts[2]
		const addressyjvtrl = accounts[4]
		const addressYD0POJ2 = accounts[4]
		const addressP6dfyvS = accounts[1]
		const addressNm3waPq = accounts[4]
		const boolJKjCYvU = await KPLAYKIqnRdS.transferFrom.call(addressyjvtrl, addressewTektQ, uintcPC7lr7, {from: accounts[3]});
		const uint256MJXpLui = await KPLAYKIqnRdS.allowance.call(addressP6dfyvS, addressYD0POJ2, {from: accounts[0]});
		const addressQgCeHkz = await KPLAYKIqnRdS.unfreeze.call(addressNm3waPq, {from: accounts[3]});
		await KPLAYKIqnRdS.whenPaused.call({from: accounts[4]});

		await expect(KPLAYKIqnRdS.transferFrom.call(addressyjvtrl, addressewTektQ, uintcPC7lr7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJg0BOGE = await KPLAY.new({from: accounts[5]});
		const uintu6rcwg = BigInt("114")
		const addressRqfRhgD = "0x0000000000000000000000000000000000000001"
		const uintAUzhsNG = BigInt("1683")
		const addressoubnRK3 = accounts[2]
		const addressZWEtemt = accounts[0]
		const uintIlhaonT = BigInt("209")
		const addressbJouuyb = accounts[1]
		const uintQ6opsI = BigInt("506")
		const addressACk09i = accounts[0]
		const addressZRidRNK = await KPLAYJg0BOGE.unlock.call(addressRqfRhgD, uintu6rcwg, {from: accounts[5]});
		const boolCYjH5VT = await KPLAYJg0BOGE.decreaseAllowance.call(addressoubnRK3, uintAUzhsNG, {from: accounts[2]});
		const address2EReHy = await KPLAYJg0BOGE.freeze.call(addressZWEtemt, {from: accounts[3]});
		await KPLAYJg0BOGE.whenPaused.call({from: accounts[3]});
		const addressq2PoJyt = await KPLAYJg0BOGE.burn.call(addressbJouuyb, uintIlhaonT, {from: accounts[1]});
		const boolH6c6hLe = await KPLAYJg0BOGE.mint.call(addressACk09i, uintQ6opsI, {from: accounts[0]});

		await expect(KPLAYJg0BOGE.unlock.call(addressRqfRhgD, uintu6rcwg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const addresscMpgACS = accounts[3]
		const uintgVVJm0O = BigInt("1625")
		const addressJj24XjP = accounts[4]
		const uintrNcNqMA = BigInt("1172")
		const addressuAIji6i = accounts[2]
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addresscMpgACS, {from: accounts[1]});
		const boolWfQG20T = await KPLAYhUcaDbA.approve.call(addressJj24XjP, uintgVVJm0O, {from: accounts[3]});
		const uint256SogQlXD = await KPLAYhUcaDbA.afterTime.call(uintrNcNqMA, {from: accounts[3]});
		const uint256ocfqVH = await KPLAYhUcaDbA.lockCount.call(addressuAIji6i, {from: accounts[1]});
		await KPLAYhUcaDbA.pause.call({from: accounts[0]});

		assert.equal(boolWfQG20T, true)
		assert.equal(uint256SogQlXD, BigInt("1630230378"))
		assert.equal(uint256ocfqVH, BigInt("0"))
		assert.equal(uint256vsMllD9, BigInt("10000000000000000"))
		await expect(KPLAYhUcaDbA.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYy8Qk2bC = await KPLAY.new({from: accounts[5]});
		const uintNKszLOr = BigInt("13")
		const address2JPfhD = accounts[2]
		const uintjvqWAi = BigInt("41")
		const addressCvZcMNG = "0x0000000000000000000000000000000000000001"
		const addressmTsHIGY = accounts[4]
		const addressst5TteA = accounts[0]
		await KPLAYy8Qk2bC.lockState.call(address2JPfhD, uintNKszLOr, {from: accounts[0]});
		const boolrcFClTA = await KPLAYy8Qk2bC.transfer.call(addressCvZcMNG, uintjvqWAi, {from: accounts[2]});
		const uint256BZC4P0d = await KPLAYy8Qk2bC.balanceOf.call(addressmTsHIGY, {from: accounts[3]});
		const addressrf1vfpw = await KPLAYy8Qk2bC.transferOwnership.call(addressst5TteA, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYy8Qk2bC.renounceOwnership.call({from: accounts[2]});

		await expect(KPLAYy8Qk2bC.lockState.call(address2JPfhD, uintNKszLOr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const addressNmA6AT8 = accounts[3]
		const addressn06soWV = accounts[3]
		const addresstyvb8oB = accounts[3]
		const uintefa7wVQ = BigInt("1625")
		const addressrPCmYnW = accounts[3]
		const addressvE49GGT = accounts[3]
		const addressdjBHi7G = accounts[2]
		const addressU3AydYD = accounts[5]
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addressNmA6AT8, {from: accounts[1]});
		const uint256H3HzdE = await KPLAYhUcaDbA.allowance.call(addresstyvb8oB, addressn06soWV, {from: accounts[2]});
		const boolWfQG20T = await KPLAYhUcaDbA.approve.call(addressrPCmYnW, uintefa7wVQ, {from: accounts[3]});
		const uint256ocfqVH = await KPLAYhUcaDbA.lockCount.call(addressvE49GGT, {from: accounts[1]});
		const addressxL2GXK0 = await KPLAYhUcaDbA.unfreeze.call(addressdjBHi7G, {from: accounts[1]});
		await KPLAYhUcaDbA.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256K0KHUxp = await KPLAYhUcaDbA.lockCount.call(addressU3AydYD, {from: accounts[5]});

		assert.equal(boolWfQG20T, true)
		assert.equal(uint256H3HzdE, BigInt("0"))
		assert.equal(uint256ocfqVH, BigInt("0"))
		assert.equal(uint256vsMllD9, BigInt("10000000000000000"))
		await expect(KPLAYhUcaDbA.unfreeze.call(addressdjBHi7G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwRKTu14 = await KPLAY.new({from: accounts[4]});
		const uintcoarhPI = BigInt("431")
		const addressHG8QXFn = accounts[5]
		const addressn0l072m = accounts[4]
		const uintqo1Uh06 = BigInt("1486")
		const addressajvr1zO = accounts[2]
		const booliQpIXh8 = await KPLAYwRKTu14.increaseAllowance.call(addressHG8QXFn, uintcoarhPI, {from: accounts[4]});
		await KPLAYwRKTu14.whenPaused.call({from: accounts[1]});
		const uint256Xa0mAZy = await KPLAYwRKTu14.balanceOf.call(addressn0l072m, {from: "0x0000000000000000000000000000000000000001"});
		const booll7GHY6P = await KPLAYwRKTu14.transfer.call(addressajvr1zO, uintqo1Uh06, {from: accounts[4]});

		assert.equal(booliQpIXh8, true)
		await expect(KPLAYwRKTu14.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const uintl1oKGa = BigInt("160")
		const addressKGclK31 = "0x0000000000000000000000000000000000000001"
		const addressF0gxbx0 = accounts[3]
		const boolAGKMZJw = await KPLAYhUcaDbA.decreaseAllowance.call(addressKGclK31, uintl1oKGa, {from: accounts[1]});
		const uint256ocfqVH = await KPLAYhUcaDbA.lockCount.call(addressF0gxbx0, {from: accounts[1]});
		await KPLAYhUcaDbA.whenPaused.call({from: accounts[3]});

		await expect(KPLAYhUcaDbA.decreaseAllowance.call(addressKGclK31, uintl1oKGa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const addressN9I7ChB = accounts[4]
		const uintg3Iivqu = BigInt("1873")
		const addressXLc9Tn5 = accounts[1]
		const addressZEdmXtN = accounts[2]
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addressN9I7ChB, {from: accounts[1]});
		const uint256jPChzK = await KPLAYhUcaDbA.currentTime.call({from: accounts[2]});
		const uint256nU3zzjw = await KPLAYhUcaDbA.afterTime.call(uintg3Iivqu, {from: "0x0000000000000000000000000000000000000001"});
		const addressRbh8ePZ = await KPLAYhUcaDbA.unfreeze.call(addressXLc9Tn5, {from: accounts[3]});
		const uint256ocfqVH = await KPLAYhUcaDbA.lockCount.call(addressZEdmXtN, {from: accounts[1]});

		assert.equal(uint256jPChzK, BigInt("1630229191"))
		assert.equal(uint256nU3zzjw, BigInt("1630231064"))
		assert.equal(uint256ocfqVH, BigInt("0"))
		assert.equal(uint256vsMllD9, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const addressP9L3lw4 = accounts[5]
		const addressAMPK3jV = accounts[4]
		const uintjGleqKP = BigInt("1873")
		const addressID3yW7k = accounts[1]
		const addresshOvt6iO = accounts[2]
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addressP9L3lw4, {from: accounts[1]});
		const addressimz8b4k = await KPLAYhUcaDbA.freeze.call(addressAMPK3jV, {from: accounts[3]});
		const uint256jPChzK = await KPLAYhUcaDbA.currentTime.call({from: accounts[2]});
		const uint256nU3zzjw = await KPLAYhUcaDbA.afterTime.call(uintjGleqKP, {from: "0x0000000000000000000000000000000000000001"});
		const addressRbh8ePZ = await KPLAYhUcaDbA.unfreeze.call(addressID3yW7k, {from: accounts[3]});
		const uint256ocfqVH = await KPLAYhUcaDbA.lockCount.call(addresshOvt6iO, {from: accounts[1]});

		assert.equal(uint256jPChzK, BigInt("1630229189"))
		assert.equal(uint256nU3zzjw, BigInt("1630231062"))
		assert.equal(uint256ocfqVH, BigInt("0"))
		assert.equal(uint256vsMllD9, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYKIqnRdS = await KPLAY.new({from: accounts[2]});
		const uintnjoJREI = BigInt("931")
		const addressSrjOdsd = accounts[3]
		const uintm12OhsF = BigInt("708")
		const addressklZvbd8 = accounts[2]
		const addressyQrJ0NQ = accounts[5]
		const boolffIcqKw = await KPLAYKIqnRdS.transfer.call(addressSrjOdsd, uintnjoJREI, {from: accounts[4]});
		const boolJKjCYvU = await KPLAYKIqnRdS.transferFrom.call(addressyQrJ0NQ, addressklZvbd8, uintm12OhsF, {from: accounts[3]});

		await expect(KPLAYKIqnRdS.transfer.call(addressSrjOdsd, uintnjoJREI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYxi9o7NY = await KPLAY.new({from: accounts[1]});
		const uintl9F71if = BigInt("1837")
		const uintNhsZ2zj = BigInt("601")
		const addressbJtNC5H = accounts[1]
		const uint256HRpAR51 = await KPLAYxi9o7NY.totalSupply.call({from: accounts[5]});
		const boolCcx92Z = await KPLAYxi9o7NY.transferWithLockAfter.call(addressbJtNC5H, uintNhsZ2zj, uintl9F71if, {from: accounts[1]});
		const uint256qcTOe2a = await KPLAYxi9o7NY.totalSupply.call({from: accounts[3]});

		assert.equal(boolCcx92Z, true)
		assert.equal(uint256HRpAR51, BigInt("10000000000000000"))
		assert.equal(uint256qcTOe2a, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const addressvsJWSgm = accounts[5]
		const addresspM85b7r = accounts[4]
		const uintvjarEPE = BigInt("342")
		const addresscfNug9 = accounts[3]
		const uintCASashp = BigInt("683")
		const addressTnjqWyr = accounts[4]
		const uintQ8kUSAT = BigInt("888")
		const addressOKXa9Sg = accounts[3]
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addressvsJWSgm, {from: accounts[1]});
		const boolTrCtZHz = await KPLAYhUcaDbA.isFrozen.call(addresspM85b7r, {from: accounts[3]});
		const boolINnjR6 = await KPLAYhUcaDbA.decreaseAllowance.call(addresscfNug9, uintvjarEPE, {from: accounts[2]});
		const boolBz7a6N = await KPLAYhUcaDbA.mint.call(addressTnjqWyr, uintCASashp, {from: accounts[2]});
		const boolpyR47nC = await KPLAYhUcaDbA.approve.call(addressOKXa9Sg, uintQ8kUSAT, {from: accounts[0]});

		assert.equal(boolTrCtZHz, false)
		assert.equal(uint256vsMllD9, BigInt("0"))
		await expect(KPLAYhUcaDbA.decreaseAllowance.call(addresscfNug9, uintvjarEPE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const uintgQ7bEgy = BigInt("399")
		const uintZz1wXGN = BigInt("130")
		const addressKSaqTAa = accounts[2]
		const addressqFG8Hw = accounts[5]
		const addresst5w44R6 = await KPLAYhUcaDbA.lock.call(addressKSaqTAa, uintZz1wXGN, uintgQ7bEgy, {from: accounts[3]});
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addressqFG8Hw, {from: accounts[1]});

		await expect(KPLAYhUcaDbA.lock.call(addressKSaqTAa, uintZz1wXGN, uintgQ7bEgy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYoFliZ8K = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnNEPReg = accounts[2]
		const uintkbm3UJc = BigInt("1145")
		const addressf6dU82Y = accounts[4]
		const boolI9wRqO8 = await KPLAYoFliZ8K.isFrozen.call(addressnNEPReg, {from: accounts[4]});
		const addressYlLHtLX = await KPLAYoFliZ8K.unlock.call(addressf6dU82Y, uintkbm3UJc, {from: accounts[5]});
		await KPLAYoFliZ8K.pause.call({from: accounts[4]});
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const addresseyz1Mh = accounts[5]
		const uintfYgALd = BigInt("714")
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addresseyz1Mh, {from: accounts[1]});
		const uint2561ahvn4 = await KPLAYhUcaDbA.afterTime.call(uintfYgALd, {from: accounts[4]});
		await KPLAYhUcaDbA.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint2561ahvn4, BigInt("1630229912"))
		assert.equal(uint256vsMllD9, BigInt("0"))
		await expect(KPLAYhUcaDbA.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const addressgfL6uDU = accounts[0]
		const addressJBkGhs = accounts[4]
		const addressUSt99lx = accounts[4]
		const uint256DBjXDn = await KPLAYhUcaDbA.allowance.call(addressJBkGhs, addressgfL6uDU, {from: accounts[3]});
		await KPLAYhUcaDbA.unpause.call({from: accounts[3]});
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addressUSt99lx, {from: accounts[1]});

		assert.equal(uint256DBjXDn, BigInt("0"))
		await expect(KPLAYhUcaDbA.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const addressdU6FQkq = accounts[5]
		const addressVChLvn = accounts[1]
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addressdU6FQkq, {from: accounts[1]});
		const addressBCIx3rW = await KPLAYhUcaDbA.transferOwnership.call(addressVChLvn, {from: accounts[3]});

		assert.equal(uint256vsMllD9, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYan5BmFD = await KPLAY.new({from: accounts[0]});
		const uintk3wIbsP = BigInt("634")
		const addresswYEMbW7 = accounts[4]
		const addressCRVeeDk = accounts[5]
		const addressr024Ope = accounts[4]
		const addressdpaoevR = accounts[2]
		const uintTRYbcgE = BigInt("1974")
		const addressOoctD1T = "0x0000000000000000000000000000000000000001"
		const addressgSlSu6p = accounts[1]
		const boolgtWGUYl = await KPLAYan5BmFD.transfer.call(addresswYEMbW7, uintk3wIbsP, {from: accounts[0]});
		await KPLAYan5BmFD.pause.call({from: accounts[0]});
		const uint256QLEwS8a = await KPLAYan5BmFD.balanceOf.call(addressCRVeeDk, {from: accounts[1]});
		const uint256cRMxh1T = await KPLAYan5BmFD.allowance.call(addressdpaoevR, addressr024Ope, {from: accounts[1]});
		const addressfJeSFHq = await KPLAYan5BmFD.unlock.call(addressOoctD1T, uintTRYbcgE, {from: accounts[0]});
		const uint256AcDhcj = await KPLAYan5BmFD.balanceOf.call(addressgSlSu6p, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolgtWGUYl, true)
		await expect(KPLAYan5BmFD.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYan5BmFD = await KPLAY.new({from: accounts[0]});
		const uintZlUg1OL = BigInt("634")
		const addressVzuvA87 = accounts[4]
		const uintK10j5SG = BigInt("41")
		const addresssk6ZFf = accounts[1]
		const addresshh5gojm = accounts[5]
		const addressLMi1C1s = accounts[3]
		const addressqeWSAg8 = accounts[4]
		const addressCgW6fAK = accounts[2]
		const uintYaq2J7g = BigInt("1944")
		const addressS5JiUD = "0x0000000000000000000000000000000000000001"
		const addresskb2MZSz = accounts[1]
		const boolgtWGUYl = await KPLAYan5BmFD.transfer.call(addressVzuvA87, uintZlUg1OL, {from: accounts[0]});
		const addressx6DDpY = await KPLAYan5BmFD.burn.call(addresssk6ZFf, uintK10j5SG, {from: accounts[0]});
		const uint256QLEwS8a = await KPLAYan5BmFD.balanceOf.call(addresshh5gojm, {from: accounts[1]});
		const boolv77tk7p = await KPLAYan5BmFD.isFrozen.call(addressLMi1C1s, {from: accounts[0]});
		const uint256cRMxh1T = await KPLAYan5BmFD.allowance.call(addressCgW6fAK, addressqeWSAg8, {from: accounts[1]});
		const addressfJeSFHq = await KPLAYan5BmFD.unlock.call(addressS5JiUD, uintYaq2J7g, {from: accounts[0]});
		const uint256AcDhcj = await KPLAYan5BmFD.balanceOf.call(addresskb2MZSz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolgtWGUYl, true)
		await expect(KPLAYan5BmFD.burn.call(addresssk6ZFf, uintK10j5SG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKIqnRdS = await KPLAY.new({from: accounts[2]});
		const uintYziPib = BigInt("1820")
		const uintBHGSMOu = BigInt("740")
		const addresssdTQz9 = accounts[5]
		const uintf5oYFQr = BigInt("708")
		const addresscF5RorL = accounts[2]
		const addressxMCVJF3 = accounts[5]
		const uintMaFr4M0 = BigInt("1614")
		const uintbaXp2KY = BigInt("75")
		const addressIzLiocz = accounts[3]
		const addressSWsQkid = "0x0000000000000000000000000000000000000001"
		const boolIK8jhMe = await KPLAYKIqnRdS.transferWithLock.call(addresssdTQz9, uintBHGSMOu, uintYziPib, {from: accounts[2]});
		const boolJKjCYvU = await KPLAYKIqnRdS.transferFrom.call(addressxMCVJF3, addresscF5RorL, uintf5oYFQr, {from: accounts[3]});
		const boolshlJyW7 = await KPLAYKIqnRdS.transferWithLock.call(addressIzLiocz, uintbaXp2KY, uintMaFr4M0, {from: accounts[5]});
		const boolga441xe = await KPLAYKIqnRdS.isFrozen.call(addressSWsQkid, {from: accounts[5]});

		assert.equal(boolIK8jhMe, true)
		await expect(KPLAYKIqnRdS.transferFrom.call(addressxMCVJF3, addresscF5RorL, uintf5oYFQr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const uintuVVRzKD = BigInt("184")
		const addressLDREVjv = accounts[3]
		const uintSSYRYnq = BigInt("1597")
		const addressPU9shqK = accounts[2]
		const addressiHJq8E8 = accounts[5]
		const boolupjqFn = await KPLAYhUcaDbA.mint.call(addressLDREVjv, uintuVVRzKD, {from: accounts[3]});
		const boolyBXK2Ki = await KPLAYhUcaDbA.approve.call(addressPU9shqK, uintSSYRYnq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(addressiHJq8E8, {from: accounts[1]});

		assert.equal(boolupjqFn, true)
		assert.equal(boolyBXK2Ki, true)
		assert.equal(uint256vsMllD9, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYhUcaDbA = await KPLAY.new({from: accounts[3]});
		const uintvpFJzMF = BigInt("882")
		const uintDmIGWPS = BigInt("9")
		const addressNEvrTEH = accounts[3]
		const address5GD3be = accounts[5]
		const addressDAuci6c = await KPLAYhUcaDbA.lockAfter.call(addressNEvrTEH, uintDmIGWPS, uintvpFJzMF, {from: accounts[3]});
		const uint256vsMllD9 = await KPLAYhUcaDbA.balanceOf.call(address5GD3be, {from: accounts[1]});

		assert.equal(uint256vsMllD9, BigInt("0"))
	});
})