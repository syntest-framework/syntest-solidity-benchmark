const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const RevivepKA4Ety = await Revive.new({from: accounts[4]});
		const uintUBnpoRe = BigInt("1668")
		const addresslToX53J = accounts[0]
		const addressASpueDM = accounts[0]
		const boolXwaF1fA = await RevivepKA4Ety.transfer.call(addresslToX53J, uintUBnpoRe, {from: accounts[1]});
		const uint256f3si9Hr = await RevivepKA4Ety.unlock.call(addressASpueDM, {from: accounts[3]});
		await RevivepKA4Ety.renounceOwnership.call({from: accounts[0]});

		await expect(RevivepKA4Ety.transfer.call(addresslToX53J, uintUBnpoRe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepTivnKB = await Revive.new({from: accounts[2]});
		const addressyP0zUx2 = accounts[3]
		const bytes5X4gqi = "0x091a120f140e1b18070411200512011c110a07031c1519081407130417071503"
		const addresshZ27Ywk = accounts[0]
		const byten8NcfLN = "0x0402170e0f0719020b120a0e111908021a021a171c0c1406030f090407081907"
		const addressAM71vJJ = accounts[3]
		const uintVCIjZAD = BigInt("491")
		const addresszSTzq8R = accounts[1]
		const uint256MMwTQ92 = await RevivepTivnKB.totalSupply.call({from: accounts[1]});
		const uint256H6pNqVX = await RevivepTivnKB.totalBalanceOf.call(addressyP0zUx2, {from: accounts[0]});
		const uint256SWDUJG = await RevivepTivnKB.tokensLocked.call(addresshZ27Ywk, bytes5X4gqi, {from: accounts[3]});
		const uint256LiLPCf = await RevivepTivnKB.tokensUnlockable.call(addressAM71vJJ, byten8NcfLN, {from: accounts[4]});
		const boolAat2cNl = await RevivepTivnKB.decreaseAllowance.call(addresszSTzq8R, uintVCIjZAD, {from: accounts[2]});

		assert.equal(uint256H6pNqVX, BigInt("0"))
		assert.equal(uint256LiLPCf, BigInt("0"))
		assert.equal(uint256MMwTQ92, BigInt("3000000000000000000000000000"))
		assert.equal(uint256SWDUJG, BigInt("0"))
		await expect(RevivepTivnKB.decreaseAllowance.call(addresszSTzq8R, uintVCIjZAD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivey3DicmH = await Revive.new({from: accounts[2]});
		const uintV412EKu = BigInt("1178")
		const byteNiOwHFB = "0x130e0806011212030b1219071f1219061e111e0a0b0b1c100f200a17161a0e10"
		const uintChfk5z1 = BigInt("101")
		const addressGDVPFbT = accounts[2]
		const uintOnHqRKM = BigInt("897")
		const addressHkvY9K7 = accounts[1]
		const uintBtqwGrc = BigInt("622")
		const addressI1cyK0a = accounts[4]
		const uintLeWpThO = BigInt("658")
		const byteFInVDaS = "0x06021204191311191203110b17190f0603110500190a04160c05070903170700"
		const addressKt0Si7A = accounts[0]
		const boolakwsaC = await Revivey3DicmH.increaseLockAmount.call(byteNiOwHFB, uintV412EKu, {from: accounts[1]});
		const boolPzojgVC = await Revivey3DicmH.transfer.call(addressGDVPFbT, uintChfk5z1, {from: accounts[1]});
		const addressX8iE14s = await Revivey3DicmH.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhxFA5Pn = await Revivey3DicmH.transfer.call(addressHkvY9K7, uintOnHqRKM, {from: accounts[2]});
		const booljGKjEP = await Revivey3DicmH.approve.call(addressI1cyK0a, uintBtqwGrc, {from: accounts[1]});
		const uint256BPl6C4 = await Revivey3DicmH.tokensLockedAtTime.call(addressKt0Si7A, byteFInVDaS, uintLeWpThO, {from: accounts[2]});

		await expect(Revivey3DicmH.increaseLockAmount.call(byteNiOwHFB, uintV412EKu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC3rRwSh = await Revive.new({from: accounts[2]});
		const uintya1o9hc = BigInt("2030")
		const addressOlKlltI = accounts[1]
		const addressjGVtvLn = accounts[1]
		const addressSkT4tME = accounts[4]
		const booloRnKFt = await ReviveC3rRwSh.increaseAllowance.call(addressOlKlltI, uintya1o9hc, {from: accounts[3]});
		const uint256GD0o990 = await ReviveC3rRwSh.balanceOf.call(addressjGVtvLn, {from: accounts[1]});
		const uint256u11EnlJ = await ReviveC3rRwSh.getUnlockableTokens.call(addressSkT4tME, {from: accounts[0]});
		await ReviveC3rRwSh.renounceOwnership.call({from: accounts[5]});

		assert.equal(booloRnKFt, true)
		assert.equal(uint256GD0o990, BigInt("0"))
		assert.equal(uint256u11EnlJ, BigInt("0"))
		await expect(ReviveC3rRwSh.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejYQ9Yu0 = await Revive.new({from: accounts[1]});
		const uintCwD81Hz = BigInt("294")
		const byteHg8uFby = "0x1d13140d1c070c09070e0a040f13081417041d1a0c1a1719070c00080b1a1616"
		const addressGVApaFy = "0x0000000000000000000000000000000000000001"
		const bytev5zfdHp = "0x13191b20061410010e1f190b1f1d16171a061f081d17130c0b1d0f0404120f19"
		const addressYrQ4fw = accounts[0]
		const boolJcJBiZ8 = await RevivejYQ9Yu0.extendLock.call(byteHg8uFby, uintCwD81Hz, {from: accounts[2]});
		const addressOX9tt25 = await RevivejYQ9Yu0.transferOwnership.call(addressGVApaFy, {from: accounts[4]});
		const uint256rmk24fS = await RevivejYQ9Yu0.tokensLocked.call(addressYrQ4fw, bytev5zfdHp, {from: accounts[3]});

		await expect(RevivejYQ9Yu0.extendLock.call(byteHg8uFby, uintCwD81Hz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevG9no7j = await Revive.new({from: accounts[2]});
		const uintVOgbL9 = BigInt("727")
		const addresseLs89JW = accounts[5]
		const addressXMMc2W2 = accounts[4]
		const uint4pumsq = BigInt("1766")
		const addressCf72s2n = "0x0000000000000000000000000000000000000001"
		const byteRuIzucE = "0x032009180c12061503081f02181d0a051514161608041f05081c071605130308"
		const addresspqFjdC6 = accounts[5]
		const uintaHION7T = BigInt("481")
		const addressB8LP2KK = accounts[1]
		const boolQaH57J4 = await RevivevG9no7j.transferFrom.call(addressXMMc2W2, addresseLs89JW, uintVOgbL9, {from: accounts[0]});
		await RevivevG9no7j.onlyOwner.call({from: accounts[2]});
		const booly8jb8yP = await RevivevG9no7j.approve.call(addressCf72s2n, uint4pumsq, {from: accounts[3]});
		const uint256laXwpw1 = await RevivevG9no7j.tokensUnlockable.call(addresspqFjdC6, byteRuIzucE, {from: accounts[3]});
		const addressn3poK4u = await RevivevG9no7j.recoverERC20.call(addressB8LP2KK, uintaHION7T, {from: accounts[1]});

		await expect(RevivevG9no7j.transferFrom.call(addressXMMc2W2, addresseLs89JW, uintVOgbL9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepcyo4GM = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPkGJ6p3 = BigInt("759")
		const byteCopHFOK = "0x1f0d1e0d1e0112031d061f020512130c091319191c1301141819171e17141c10"
		const uintYZ9B6Fq = BigInt("614")
		const byteh2Oxe2F = "0x20190a0f030213040e100b1812040b191c141f1e07171a1a1f040b1d1c160708"
		const uintEqpyqSS = BigInt("1328")
		const uintvNLdPw = BigInt("2042")
		const boolbwGY0ie = await Revivepcyo4GM.increaseLockAmount.call(byteCopHFOK, uintPkGJ6p3, {from: accounts[0]});
		const boolRipPaIr = await Revivepcyo4GM.increaseLockAmount.call(byteh2Oxe2F, uintYZ9B6Fq, {from: accounts[2]});
		const uint256EvCHiRc = await Revivepcyo4GM.recoverERC20.call(uintEqpyqSS, {from: accounts[0]});
		const uint256RkPj1v = await Revivepcyo4GM.recoverERC20.call(uintvNLdPw, {from: accounts[1]});
	});

	it('test for Revive', async () => {
		const ReviveCqXtUAY = await Revive.new({from: accounts[1]});
		const addressXCZ7XlT = accounts[4]
		const uintOUQDdH = BigInt("829")
		const addressh6RnGib = "0x0000000000000000000000000000000000000001"
		const uintuB1iYjD = BigInt("1537")
		const byteKSvUw2F = "0x120708140107020217171e1d141b191604201a021f1c1b11021e181e0e111609"
		const uintdhW1lRX = BigInt("368")
		const addressGZrN5iR = accounts[2]
		const uintJ1EFIuk = BigInt("235")
		const addressaqRiJdR = accounts[4]
		const uintTgI6DAr = BigInt("273")
		const addresscvfJjKU = accounts[3]
		const uint256sqOkB6 = await ReviveCqXtUAY.unlock.call(addressXCZ7XlT, {from: accounts[0]});
		const boolDNWfohZ = await ReviveCqXtUAY.transfer.call(addressh6RnGib, uintOUQDdH, {from: accounts[2]});
		const boolAedMT5C = await ReviveCqXtUAY.increaseLockAmount.call(byteKSvUw2F, uintuB1iYjD, {from: accounts[3]});
		const boolJIWPNJV = await ReviveCqXtUAY.decreaseAllowance.call(addressGZrN5iR, uintdhW1lRX, {from: accounts[2]});
		const addressZzwqegM = await ReviveCqXtUAY.recoverERC20.call(addressaqRiJdR, uintJ1EFIuk, {from: accounts[3]});
		const boolzoDwmoQ = await ReviveCqXtUAY.decreaseAllowance.call(addresscvfJjKU, uintTgI6DAr, {from: accounts[3]});

		assert.equal(uint256sqOkB6, BigInt("0"))
		await expect(ReviveCqXtUAY.transfer.call(addressh6RnGib, uintOUQDdH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC3rRwSh = await Revive.new({from: accounts[2]});
		const uintQa2ojEG = BigInt("2030")
		const addressVk69VoC = accounts[1]
		const uintjPseZC = BigInt("940")
		const addresstOVsWez = accounts[1]
		const addresslcK0jlL = accounts[5]
		const uintt12qnf7 = BigInt("385")
		const addressMH7TNvl = accounts[1]
		const addressmeFAnh5 = accounts[4]
		const booloRnKFt = await ReviveC3rRwSh.increaseAllowance.call(addressVk69VoC, uintQa2ojEG, {from: accounts[3]});
		const uint256mZqkXO = await ReviveC3rRwSh.recoverERC20.call(uintjPseZC, {from: accounts[4]});
		const uint256GD0o990 = await ReviveC3rRwSh.balanceOf.call(addresstOVsWez, {from: accounts[1]});
		const uint256u11EnlJ = await ReviveC3rRwSh.getUnlockableTokens.call(addresslcK0jlL, {from: accounts[0]});
		await ReviveC3rRwSh.renounceOwnership.call({from: accounts[5]});
		const boolV8zcZjr = await ReviveC3rRwSh.transferFrom.call(addressmeFAnh5, addressMH7TNvl, uintt12qnf7, {from: accounts[1]});

		assert.equal(booloRnKFt, true)
		await expect(ReviveC3rRwSh.recoverERC20.call(uintjPseZC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC3rRwSh = await Revive.new({from: accounts[2]});
		const uintpfDr5ao = BigInt("2030")
		const addressetR5I0B = accounts[1]
		const addressB3JDlU7 = accounts[1]
		const addressog9DC88 = accounts[4]
		const booloRnKFt = await ReviveC3rRwSh.increaseAllowance.call(addressetR5I0B, uintpfDr5ao, {from: accounts[3]});
		const uint256GD0o990 = await ReviveC3rRwSh.balanceOf.call(addressB3JDlU7, {from: accounts[1]});
		await ReviveC3rRwSh.onlyOwner.call({from: accounts[5]});
		const uint256u11EnlJ = await ReviveC3rRwSh.getUnlockableTokens.call(addressog9DC88, {from: accounts[0]});
		await ReviveC3rRwSh.renounceOwnership.call({from: accounts[5]});

		assert.equal(booloRnKFt, true)
		assert.equal(uint256GD0o990, BigInt("0"))
		await expect(ReviveC3rRwSh.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveC3rRwSh = await Revive.new({from: accounts[2]});
		const uintP2AV0BG = BigInt("2030")
		const address4c4Yw7 = accounts[1]
		const addressy1reY0j = accounts[1]
		const addressFRxWhn = accounts[4]
		const uintfx7k2DX = BigInt("1515")
		const uintJVzc4xB = BigInt("728")
		const byteyLptUbS = "0x0d0f161a16181716150b0b090f161d070a0d0c021f09030c090f121218020e16"
		const addressQUZmdZ = accounts[5]
		const booloRnKFt = await ReviveC3rRwSh.increaseAllowance.call(address4c4Yw7, uintP2AV0BG, {from: accounts[3]});
		const uint256GD0o990 = await ReviveC3rRwSh.balanceOf.call(addressy1reY0j, {from: accounts[1]});
		const uint256u11EnlJ = await ReviveC3rRwSh.getUnlockableTokens.call(addressFRxWhn, {from: accounts[0]});
		const boolzgHcAvT = await ReviveC3rRwSh.transferWithLock.call(addressQUZmdZ, byteyLptUbS, uintJVzc4xB, uintfx7k2DX, {from: accounts[2]});
		await ReviveC3rRwSh.renounceOwnership.call({from: accounts[5]});

		assert.equal(booloRnKFt, true)
		assert.equal(boolzgHcAvT, true)
		assert.equal(uint256GD0o990, BigInt("0"))
		assert.equal(uint256u11EnlJ, BigInt("0"))
		await expect(ReviveC3rRwSh.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const address0JJBIi = accounts[2]
		const addressYIKQ1D = accounts[1]
		const addressvpu3FiA = accounts[1]
		const uintBzkCL2L = BigInt("771")
		const addressRYEBzGM = accounts[5]
		const uint256NSPD9yR = await Revivepg8o4v4.allowance.call(addressYIKQ1D, address0JJBIi, {from: accounts[2]});
		const uint256EGeTdzw = await Revivepg8o4v4.totalBalanceOf.call(addressvpu3FiA, {from: accounts[2]});
		const uint256qsg8oDp = await Revivepg8o4v4.totalSupply.call({from: accounts[3]});
		const boolqGlJOC = await Revivepg8o4v4.decreaseAllowance.call(addressRYEBzGM, uintBzkCL2L, {from: accounts[5]});

		assert.equal(uint256EGeTdzw, BigInt("0"))
		assert.equal(uint256NSPD9yR, BigInt("0"))
		assert.equal(uint256qsg8oDp, BigInt("3000000000000000000000000000"))
		await expect(Revivepg8o4v4.decreaseAllowance.call(addressRYEBzGM, uintBzkCL2L, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejYQ9Yu0 = await Revive.new({from: accounts[1]});
		const uintPQPiB7r = BigInt("675")
		const uintlVDBJAg = BigInt("283")
		const byteCBRAGlI = "0x1d13140d1c070c09070e0a040f13081417041d1a0c1a1719070c00080b1a1616"
		const addressZI8B85 = "0x0000000000000000000000000000000000000001"
		const addressqu8RBhV = accounts[2]
		const byteYvkzH5o = "0x13191b20061410010e1f190b1f1d16171a061f081d17130c0b1d0f0404120f19"
		const addressSNNFbOE = accounts[0]
		const uint256APhtVYW = await RevivejYQ9Yu0.recoverERC20.call(uintPQPiB7r, {from: accounts[1]});
		const boolJcJBiZ8 = await RevivejYQ9Yu0.extendLock.call(byteCBRAGlI, uintlVDBJAg, {from: accounts[2]});
		const addressOX9tt25 = await RevivejYQ9Yu0.transferOwnership.call(addressZI8B85, {from: accounts[4]});
		const addressqxt7EK0 = await RevivejYQ9Yu0.transferOwnership.call(addressqu8RBhV, {from: accounts[5]});
		const uint256rmk24fS = await RevivejYQ9Yu0.tokensLocked.call(addressSNNFbOE, byteYvkzH5o, {from: accounts[3]});

		await expect(RevivejYQ9Yu0.recoverERC20.call(uintPQPiB7r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivey3DicmH = await Revive.new({from: accounts[2]});
		const uintj2hIWKd = BigInt("622")
		const address0OHWLK = accounts[4]
		const uintU1U0Xts = BigInt("658")
		const bytea6pRWA = "0x06021204191311191203110b17190f0603110500190a04160c05070903170700"
		const addressDsyMrtt = accounts[0]
		const addressX8iE14s = await Revivey3DicmH.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const booljGKjEP = await Revivey3DicmH.approve.call(address0OHWLK, uintj2hIWKd, {from: accounts[1]});
		const uint256BPl6C4 = await Revivey3DicmH.tokensLockedAtTime.call(addressDsyMrtt, bytea6pRWA, uintU1U0Xts, {from: accounts[2]});

		assert.equal(addressX8iE14s, 0x0f4A02451E204C51fbC3103FB1a46D833b8756ed)
		assert.equal(booljGKjEP, true)
		assert.equal(uint256BPl6C4, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveC3rRwSh = await Revive.new({from: accounts[2]});
		const uintt4mLBI = BigInt("1880")
		const addressT8o5mLa = accounts[4]
		const uintWFrzcjD = BigInt("2030")
		const address87n0W9 = accounts[1]
		const addressl205bVr = accounts[1]
		const uintuDU6bD3 = BigInt("517")
		const addressdjrmlAZ = accounts[0]
		const uintrcyQDCG = BigInt("1662")
		const uintisPMSb = BigInt("1293")
		const byteVQoYm8i = "0x040409031615170a0105001e1b040315091b0603131309110307081710150a07"
		const addressYToAV0Q = accounts[4]
		const uintUHNwr4n = BigInt("1515")
		const uintmoqNPc8 = BigInt("728")
		const bytehDIAZbY = "0x0d0f161a16181716150b0b090f161d070a0d0c021f09030c090f121218020e16"
		const addressA7AsKfw = accounts[6]
		const boolpr3WJ7 = await ReviveC3rRwSh.increaseAllowance.call(addressT8o5mLa, uintt4mLBI, {from: accounts[3]});
		const booloRnKFt = await ReviveC3rRwSh.increaseAllowance.call(address87n0W9, uintWFrzcjD, {from: accounts[3]});
		const uint256GD0o990 = await ReviveC3rRwSh.balanceOf.call(addressl205bVr, {from: accounts[1]});
		const boolfxI6MS2 = await ReviveC3rRwSh.increaseAllowance.call(addressdjrmlAZ, uintuDU6bD3, {from: accounts[4]});
		const boolri0kEeC = await ReviveC3rRwSh.lock.call(byteVQoYm8i, uintisPMSb, uintrcyQDCG, {from: accounts[3]});
		const uint256u11EnlJ = await ReviveC3rRwSh.getUnlockableTokens.call(addressYToAV0Q, {from: accounts[0]});
		const boolzgHcAvT = await ReviveC3rRwSh.transferWithLock.call(addressA7AsKfw, bytehDIAZbY, uintmoqNPc8, uintUHNwr4n, {from: accounts[2]});
		await ReviveC3rRwSh.renounceOwnership.call({from: accounts[5]});

		assert.equal(boolfxI6MS2, true)
		assert.equal(booloRnKFt, true)
		assert.equal(boolpr3WJ7, true)
		assert.equal(uint256GD0o990, BigInt("0"))
		await expect(ReviveC3rRwSh.lock.call(byteVQoYm8i, uintisPMSb, uintrcyQDCG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekjiJXA6 = await Revive.new({from: accounts[4]});
		const uintpjZkMA = BigInt("995")
		const addressxZURsop = accounts[2]
		const uintvDEcbKc = BigInt("129")
		const addressTECQndk = accounts[0]
		const addressYUaH64u = accounts[5]
		const uintuTEh5rh = BigInt("1142")
		const uintmnqbwOJ = BigInt("1076")
		const byteGj9IanF = "0x14180a0b181409051c0214140216011b06081c0c161c1d0e0e02061618201a1c"
		const addressJzNZU8 = accounts[2]
		const boolXJNCLFT = await RevivekjiJXA6.approve.call(addressxZURsop, uintpjZkMA, {from: accounts[1]});
		const booljcULIvl = await RevivekjiJXA6.increaseAllowance.call(addressTECQndk, uintvDEcbKc, {from: accounts[0]});
		const addressiyJZPLz = await RevivekjiJXA6.transferOwnership.call(addressYUaH64u, {from: accounts[4]});
		const boolXFwOsl1 = await RevivekjiJXA6.transferWithLock.call(addressJzNZU8, byteGj9IanF, uintmnqbwOJ, uintuTEh5rh, {from: accounts[4]});

		assert.equal(boolXFwOsl1, true)
		assert.equal(boolXJNCLFT, true)
		assert.equal(booljcULIvl, true)
	});

	it('test for Revive', async () => {
		const ReviveilNmWdp = await Revive.new({from: accounts[0]});
		const addressd0jJmCO = accounts[2]
		const uintSLPRVg = BigInt("208")
		const uintPl7SNNl = BigInt("702")
		const addressC9OldP = accounts[1]
		const addressSKCpwwE = accounts[2]
		const uint256NlFxMZV = await ReviveilNmWdp.unlock.call(addressd0jJmCO, {from: accounts[1]});
		const uint256I9XqLVr = await ReviveilNmWdp.recoverERC20.call(uintSLPRVg, {from: accounts[2]});
		const boolabuXe2 = await ReviveilNmWdp.approve.call(addressC9OldP, uintPl7SNNl, {from: accounts[0]});
		const uint256jqT86Yb = await ReviveilNmWdp.balanceOf.call(addressSKCpwwE, {from: accounts[2]});

		assert.equal(uint256NlFxMZV, BigInt("0"))
		await expect(ReviveilNmWdp.recoverERC20.call(uintSLPRVg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveurUgOg6 = await Revive.new({from: accounts[2]});
		const uintrvtA10E = BigInt("359")
		const byteSZQAKjI = "0x090601060f1102010f0a021218111f0d160204090a100a031c17121f1415081c"
		const addressntol48j = accounts[1]
		const uintViMiZbP = BigInt("456")
		const byteQc4p3Cz = "0x0200050904101801161417030b15071c000b050e121818191e0212020a1e0517"
		const addresssLWqbz = accounts[2]
		const addressGiZ1yag = accounts[3]
		const uintob8wYkL = BigInt("706")
		const byteNXFYzFa = "0x161c19180a0a061f1e0901081c0e120f0716140f12170a14151e0407050d0912"
		const uint256PJvAdT9 = await ReviveurUgOg6.totalSupply.call({from: accounts[4]});
		const uint256tAtWy51 = await ReviveurUgOg6.recoverERC20.call(uintrvtA10E, {from: accounts[3]});
		const uint256VkBXJA = await ReviveurUgOg6.tokensUnlockable.call(addressntol48j, byteSZQAKjI, {from: accounts[4]});
		const booloTgqYsk = await ReviveurUgOg6.extendLock.call(byteQc4p3Cz, uintViMiZbP, {from: accounts[4]});
		const uint256ksMOF0q = await ReviveurUgOg6.allowance.call(addressGiZ1yag, addresssLWqbz, {from: accounts[2]});
		const boolfLEe0PQ = await ReviveurUgOg6.extendLock.call(byteNXFYzFa, uintob8wYkL, {from: accounts[0]});

		assert.equal(uint256PJvAdT9, BigInt("3000000000000000000000000000"))
		await expect(ReviveurUgOg6.recoverERC20.call(uintrvtA10E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const addressFLZlabg = accounts[3]
		const uintex75BTX = BigInt("387")
		const uint256bZGbM7D = await Revivepg8o4v4.unlock.call(addressFLZlabg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dfa5myQ = await Revivepg8o4v4.recoverERC20.call(uintex75BTX, {from: accounts[5]});

		assert.equal(uint256bZGbM7D, BigInt("0"))
		await expect(Revivepg8o4v4.recoverERC20.call(uintex75BTX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const addressifeQyMd = accounts[6]
		const uintnjZxELJ = BigInt("1432")
		const addressthRHyBq = accounts[3]
		const uintYgXlm4o = BigInt("1807")
		const addressMxoMUfj = accounts[2]
		const addressbHqdJZ9 = accounts[1]
		const uint256Nr4SYOH = await Revivepg8o4v4.balanceOf.call(addressifeQyMd, {from: "0x0000000000000000000000000000000000000001"});
		const addressKujvfGA = await Revivepg8o4v4.recoverERC20.call(addressthRHyBq, uintnjZxELJ, {from: accounts[4]});
		const boolwVJrWVR = await Revivepg8o4v4.transferFrom.call(addressbHqdJZ9, addressMxoMUfj, uintYgXlm4o, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Nr4SYOH, BigInt("0"))
		await expect(Revivepg8o4v4.recoverERC20.call(addressthRHyBq, uintnjZxELJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const addresstGtiHtv = accounts[2]
		const uintrtBZ4XQ = BigInt("603")
		const addressy7GW65F = accounts[4]
		const uint256bZGbM7D = await Revivepg8o4v4.unlock.call(addresstGtiHtv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QyADpec = await Revivepg8o4v4.recoverERC20.call(uintrtBZ4XQ, {from: accounts[5]});
		const addresshdRP6Vb = await Revivepg8o4v4.transferOwnership.call(addressy7GW65F, {from: accounts[0]});

		assert.equal(uint256bZGbM7D, BigInt("0"))
		await expect(Revivepg8o4v4.recoverERC20.call(uintrtBZ4XQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevzYFuM8 = await Revive.new({from: accounts[3]});
		const uinttYNtJWn = BigInt("1236")
		const byteHYB36jO = "0x1f1c20020b04190c15151e1315141e191702201e120806040e0d180f08190307"
		const addressZYuFDIA = accounts[0]
		const uintUU9Ga4s = BigInt("673")
		const uint256DUxbpIv = await RevivevzYFuM8.tokensLockedAtTime.call(addressZYuFDIA, byteHYB36jO, uinttYNtJWn, {from: accounts[0]});
		const uint256QlkHgav = await RevivevzYFuM8.recoverERC20.call(uintUU9Ga4s, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256DUxbpIv, BigInt("0"))
		await expect(RevivevzYFuM8.recoverERC20.call(uintUU9Ga4s, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const uintqiXZVf3 = BigInt("964")
		const addressWtdQpM = accounts[2]
		const address22uhr3 = accounts[1]
		const addresspkQzZu = accounts[1]
		const uint256uPC7aW7 = await Revivepg8o4v4.recoverERC20.call(uintqiXZVf3, {from: accounts[0]});
		const uint256EGeTdzw = await Revivepg8o4v4.totalBalanceOf.call(addressWtdQpM, {from: accounts[2]});
		const uint256j5MzTXr = await Revivepg8o4v4.balanceOf.call(address22uhr3, {from: accounts[3]});
		const addressGiO1lcI = await Revivepg8o4v4.transferOwnership.call(addresspkQzZu, {from: accounts[0]});

		await expect(Revivepg8o4v4.recoverERC20.call(uintqiXZVf3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const uintdTmHGxP = BigInt("55")
		const addressoHKKltt = accounts[1]
		const addressh2ivrU8 = accounts[3]
		const uint256yS2q6WC = await Revivepg8o4v4.recoverERC20.call(uintdTmHGxP, {from: accounts[1]});
		const uint25626BTNV = await Revivepg8o4v4.unlock.call(addressoHKKltt, {from: accounts[2]});
		const uint256EGeTdzw = await Revivepg8o4v4.totalBalanceOf.call(addressh2ivrU8, {from: accounts[2]});

		await expect(Revivepg8o4v4.recoverERC20.call(uintdTmHGxP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejYQ9Yu0 = await Revive.new({from: accounts[1]});
		const uintxLFEZxr = BigInt("458")
		const uintPhCskuQ = BigInt("294")
		const bytevdfOqFs = "0x01120003101213060307050a141d16141c021a0315201c1e1b08010c001d0408"
		const addressvuvCAOm = accounts[3]
		const uint256YmWvzGQ = await RevivejYQ9Yu0.recoverERC20.call(uintxLFEZxr, {from: accounts[2]});
		const boolJcJBiZ8 = await RevivejYQ9Yu0.extendLock.call(bytevdfOqFs, uintPhCskuQ, {from: accounts[2]});
		const uint256LtpYOLF = await RevivejYQ9Yu0.balanceOf.call(addressvuvCAOm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivejYQ9Yu0.recoverERC20.call(uintxLFEZxr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejYQ9Yu0 = await Revive.new({from: accounts[1]});
		const uintHTjqL7Q = BigInt("1289")
		const addressWIg6SU5 = accounts[6]
		const uint256oCSdcX8 = await RevivejYQ9Yu0.totalSupply.call({from: accounts[4]});
		const uint256MoEL1v = await RevivejYQ9Yu0.recoverERC20.call(uintHTjqL7Q, {from: accounts[3]});
		const uint256d2P25AR = await RevivejYQ9Yu0.getUnlockableTokens.call(addressWIg6SU5, {from: accounts[1]});

		assert.equal(uint256oCSdcX8, BigInt("3000000000000000000000000000"))
		await expect(RevivejYQ9Yu0.recoverERC20.call(uintHTjqL7Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const uintSkyj0m = BigInt("21")
		const byteif60oTi = "0x060311150918131b181e1019051813170b04140f030811080013180e12141a15"
		const addressUyuMVPl = accounts[5]
		const uintvnxKktd = BigInt("249")
		const addressyxta5r = accounts[2]
		const uint256MBJoO9p = await Revivepg8o4v4.tokensLockedAtTime.call(addressUyuMVPl, byteif60oTi, uintSkyj0m, {from: accounts[2]});
		const uint256itwKwD = await Revivepg8o4v4.recoverERC20.call(uintvnxKktd, {from: accounts[4]});
		const uint256CR0x6Em = await Revivepg8o4v4.unlock.call(addressyxta5r, {from: accounts[3]});

		assert.equal(uint256MBJoO9p, BigInt("0"))
		await expect(Revivepg8o4v4.recoverERC20.call(uintvnxKktd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const addressKOZEmAU = accounts[6]
		const uintMMLJ3Da = BigInt("1924")
		const addressL1pcpYl = accounts[1]
		const addressZdeEA0s = accounts[2]
		const uint256Nr4SYOH = await Revivepg8o4v4.balanceOf.call(addressKOZEmAU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WixJJTc = await Revivepg8o4v4.recoverERC20.call(uintMMLJ3Da, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Y08b7kI = await Revivepg8o4v4.allowance.call(addressZdeEA0s, addressL1pcpYl, {from: accounts[0]});

		assert.equal(uint256Nr4SYOH, BigInt("0"))
		await expect(Revivepg8o4v4.recoverERC20.call(uintMMLJ3Da, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const uintqJjVTeK = BigInt("1117")
		const uintzhIqTXg = BigInt("1125")
		const uintGj1YnsD = BigInt("1594")
		const byteyXVUro8 = "0x04001f171c04130c041909050403160a05010b0712101d1e1e021512060a1303"
		const uint256HzftncM = await Revivepg8o4v4.recoverERC20.call(uintqJjVTeK, {from: accounts[1]});
		const boolrFb20qR = await Revivepg8o4v4.lock.call(byteyXVUro8, uintGj1YnsD, uintzhIqTXg, {from: accounts[2]});

		await expect(Revivepg8o4v4.recoverERC20.call(uintqJjVTeK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUHwJVl = await Revive.new({from: accounts[0]});
		const bytexS1eQka = "0x061508180a0913061417191a0a1f071e01021317031a141d0c020f1406190d1d"
		const addressjxfKQin = accounts[4]
		const uinthBThnFA = BigInt("51")
		const addressqqFx1j1 = accounts[0]
		const addresste5qFOJ = accounts[1]
		const byteYfTJQa = "0x161f1211131c16011e1b1507161a07130907081219200d0608131b160b050e1b"
		const addresssVpbAy3 = accounts[1]
		const uint256Too7NzM = await ReviveUHwJVl.tokensLocked.call(addressjxfKQin, bytexS1eQka, {from: accounts[4]});
		await ReviveUHwJVl.renounceOwnership.call({from: accounts[0]});
		const boolsYEdMW = await ReviveUHwJVl.transferFrom.call(addresste5qFOJ, addressqqFx1j1, uinthBThnFA, {from: accounts[0]});
		const uint256DI4zL8U = await ReviveUHwJVl.tokensUnlockable.call(addresssVpbAy3, byteYfTJQa, {from: accounts[0]});

		assert.equal(uint256Too7NzM, BigInt("0"))
		await expect(ReviveUHwJVl.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const addressDGTBXzQ = accounts[3]
		const uintDm4UV2m = BigInt("1120")
		const uint256bZGbM7D = await Revivepg8o4v4.unlock.call(addressDGTBXzQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V6IVbFD = await Revivepg8o4v4.recoverERC20.call(uintDm4UV2m, {from: accounts[0]});

		assert.equal(uint256bZGbM7D, BigInt("0"))
		await expect(Revivepg8o4v4.recoverERC20.call(uintDm4UV2m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivepg8o4v4 = await Revive.new({from: accounts[4]});
		const uintnJ2nAQE = BigInt("0")
		const byteoPAEeml = "0x060311150918131b181e1019051813170b04140f03081108fffffffe131c0e12141a15"
		const addressIHVvtH5 = accounts[5]
		const uint256MBJoO9p = await Revivepg8o4v4.tokensLockedAtTime.call(addressIHVvtH5, byteoPAEeml, uintnJ2nAQE, {from: accounts[2]});

		await expect(Revivepg8o4v4.tokensLockedAtTime.call(addressIHVvtH5, byteoPAEeml, uintnJ2nAQE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})