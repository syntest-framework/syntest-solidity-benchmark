const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveNOGNpmf = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgYSq9B = BigInt("938")
		const addresswVIvtXV = accounts[2]
		const addressV0DAAX = accounts[4]
		const uintPbRGaz4 = BigInt("922")
		const addressyHaUT5 = accounts[0]
		const boolTLQe3R = await ReviveNOGNpmf.transferFrom.call(addressV0DAAX, addresswVIvtXV, uintgYSq9B, {from: accounts[3]});
		await ReviveNOGNpmf.onlyOwner.call({from: accounts[4]});
		const addressHpkq0Nd = await ReviveNOGNpmf.recoverERC20.call(addressyHaUT5, uintPbRGaz4, {from: accounts[2]});
	});

	it('test for Revive', async () => {
		const Revived8GEXs = await Revive.new({from: accounts[2]});
		const uintjTGyf7h = BigInt("864")
		const addressdiWpEA = accounts[5]
		const uintrx1PTQW = BigInt("247")
		const bytenx8A8KR = "0x04011b011c0e07030c1f01121715190c090c0d0f052005061202120c1f1f0115"
		const addressWLCJLnR = accounts[3]
		const uintaAhIlvS = BigInt("340")
		const addressI0umtC = accounts[4]
		const boolnafFrGt = await Revived8GEXs.increaseAllowance.call(addressdiWpEA, uintjTGyf7h, {from: accounts[1]});
		const uint256ZB3ILMr = await Revived8GEXs.tokensLockedAtTime.call(addressWLCJLnR, bytenx8A8KR, uintrx1PTQW, {from: accounts[4]});
		await Revived8GEXs.renounceOwnership.call({from: accounts[3]});
		const addressC1vY7Hf = await Revived8GEXs.owner.call({from: accounts[2]});
		const booloaQs9m = await Revived8GEXs.increaseAllowance.call(addressI0umtC, uintaAhIlvS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolnafFrGt, true)
		assert.equal(uint256ZB3ILMr, BigInt("0"))
		await expect(Revived8GEXs.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYBvbxi = await Revive.new({from: accounts[0]});
		const addresshbgSrvS = "0x0000000000000000000000000000000000000001"
		const uintIFldfTE = BigInt("568")
		const uintgxHTIdi = BigInt("116")
		const byteEz12pss = "0x171c1d03051b0907061603050b121e14020c1d1e0c021d0902130e040a121a13"
		const uint256CtPIarK = await ReviveYBvbxi.balanceOf.call(addresshbgSrvS, {from: accounts[1]});
		await ReviveYBvbxi.onlyOwner.call({from: accounts[2]});
		const boolsxhXyFV = await ReviveYBvbxi.lock.call(byteEz12pss, uintgxHTIdi, uintIFldfTE, {from: accounts[1]});

		assert.equal(uint256CtPIarK, BigInt("0"))
		await expect(ReviveYBvbxi.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEqIaAjf = await Revive.new({from: accounts[3]});
		const uintmzeqKkH = BigInt("866")
		const addresszDSEjqY = accounts[4]
		const uintjCeRZLy = BigInt("1741")
		const byteKmF1Uhf = "0x1b05060b181f110715050611091c020f0201040d0d090a011500151010171d17"
		const uintO2aInS9 = BigInt("359")
		const addressHR2ZZze = accounts[3]
		const booliDNzM3d = await ReviveEqIaAjf.approve.call(addresszDSEjqY, uintmzeqKkH, {from: accounts[0]});
		const boolJvsk7js = await ReviveEqIaAjf.increaseLockAmount.call(byteKmF1Uhf, uintjCeRZLy, {from: accounts[5]});
		const boolATL56A4 = await ReviveEqIaAjf.transfer.call(addressHR2ZZze, uintO2aInS9, {from: accounts[1]});

		assert.equal(booliDNzM3d, true)
		await expect(ReviveEqIaAjf.increaseLockAmount.call(byteKmF1Uhf, uintjCeRZLy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const uintOwc2r3 = BigInt("1959")
		const uint7lC0Yb = BigInt("1812")
		const byteuOUN5Qq = "0x04120f1f04131816190f031a1f0c141e0b0a1009031e1e041911131f12171415"
		const addresskzvqCXu = accounts[2]
		const address0sWfq6 = accounts[1]
		const addressI91JgVf = "0x0000000000000000000000000000000000000001"
		const boolvw6yYHR = await ReviveWGK2iTY.transferWithLock.call(addresskzvqCXu, byteuOUN5Qq, uint7lC0Yb, uintOwc2r3, {from: accounts[5]});
		const uint256HJsyeyj = await ReviveWGK2iTY.getUnlockableTokens.call(address0sWfq6, {from: accounts[0]});
		const uint256lgwi8a = await ReviveWGK2iTY.unlock.call(addressI91JgVf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvw6yYHR, true)
		assert.equal(uint256HJsyeyj, BigInt("0"))
		assert.equal(uint256lgwi8a, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivelbWR635 = await Revive.new({from: accounts[4]});
		const uint1DtOae = BigInt("364")
		const addressv12PC8 = accounts[2]
		const addresskSSc8vs = accounts[4]
		const addressoaF9yRX = accounts[2]
		const addressmOPyiuW = accounts[2]
		const boolIv5uz3y = await RevivelbWR635.decreaseAllowance.call(addressv12PC8, uint1DtOae, {from: accounts[4]});
		const uint256GkvMfU0 = await RevivelbWR635.totalBalanceOf.call(addresskSSc8vs, {from: accounts[3]});
		const uint256mpZ9Y5j = await RevivelbWR635.allowance.call(addressmOPyiuW, addressoaF9yRX, {from: accounts[2]});

		await expect(RevivelbWR635.decreaseAllowance.call(addressv12PC8, uint1DtOae, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const uintVQbshrr = BigInt("1969")
		const uintxHH2cbp = BigInt("1812")
		const bytemhuw6vP = "0x04120f1f04131816190f031a1f0c141e0b0a1009031e1e041911131f12171415"
		const addressia7YX6B = accounts[2]
		const uintaakBCUX = BigInt("1370")
		const byteyGowzM9 = "0x020a20081c1b1112121c0e1701171a170c081c1c0f03170f1f051908000f1f09"
		const addressTUawep = accounts[0]
		const addressOWVYST = accounts[1]
		const uintlCRyoUk = BigInt("660")
		const addressx3rEokY = accounts[4]
		const addresslJ7vV2G = accounts[1]
		const addressr8xhp8x = "0x0000000000000000000000000000000000000001"
		const boolvw6yYHR = await ReviveWGK2iTY.transferWithLock.call(addressia7YX6B, bytemhuw6vP, uintxHH2cbp, uintVQbshrr, {from: accounts[5]});
		const uint256FY9FbG5 = await ReviveWGK2iTY.tokensLockedAtTime.call(addressTUawep, byteyGowzM9, uintaakBCUX, {from: accounts[4]});
		const uint256HJsyeyj = await ReviveWGK2iTY.getUnlockableTokens.call(addressOWVYST, {from: accounts[0]});
		const boolNzUiA0i = await ReviveWGK2iTY.transferFrom.call(addresslJ7vV2G, addressx3rEokY, uintlCRyoUk, {from: accounts[0]});
		const uint256lgwi8a = await ReviveWGK2iTY.unlock.call(addressr8xhp8x, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolvw6yYHR, true)
		assert.equal(uint256FY9FbG5, BigInt("0"))
		assert.equal(uint256HJsyeyj, BigInt("0"))
		await expect(ReviveWGK2iTY.transferFrom.call(addresslJ7vV2G, addressx3rEokY, uintlCRyoUk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqReNXmx = await Revive.new({from: accounts[2]});
		const addressQ114KNG = accounts[2]
		const uintU1gnozX = BigInt("127")
		const byteszdcwkq = "0x0e1d14200e140a12011b0f191f000815031c0b061b15170407071110141b0400"
		const uint256dm95MFd = await ReviveqReNXmx.totalBalanceOf.call(addressQ114KNG, {from: accounts[1]});
		const booljRntPzA = await ReviveqReNXmx.extendLock.call(byteszdcwkq, uintU1gnozX, {from: accounts[2]});

		assert.equal(uint256dm95MFd, BigInt("3000000000000000000000000000"))
		await expect(ReviveqReNXmx.extendLock.call(byteszdcwkq, uintU1gnozX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqReNXmx = await Revive.new({from: accounts[2]});
		const addressicCD5vc = accounts[2]
		const address4isRqh = accounts[1]
		const uintQWNui4m = BigInt("1497")
		const uintXA1dWKV = BigInt("89")
		const byteB3ZkhpW = "0x061f0a031519011c01071c1a1e04171011030f1c0f1f1e03141f0b1f1e05190d"
		const addressWQj1agS = accounts[3]
		const uint9fJrWc = BigInt("127")
		const byterOj6oez = "0x0e1d14200e140a12011b0f191f000815031c0b061b15170407071110141b0400"
		const uint256dm95MFd = await ReviveqReNXmx.totalBalanceOf.call(addressicCD5vc, {from: accounts[1]});
		const addressntOUqF1 = await ReviveqReNXmx.transferOwnership.call(address4isRqh, {from: accounts[2]});
		const boolCu0Vlxv = await ReviveqReNXmx.transferWithLock.call(addressWQj1agS, byteB3ZkhpW, uintXA1dWKV, uintQWNui4m, {from: accounts[1]});
		const booljRntPzA = await ReviveqReNXmx.extendLock.call(byterOj6oez, uint9fJrWc, {from: accounts[2]});

		assert.equal(uint256dm95MFd, BigInt("3000000000000000000000000000"))
		await expect(ReviveqReNXmx.transferWithLock.call(addressWQj1agS, byteB3ZkhpW, uintXA1dWKV, uintQWNui4m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revived8GEXs = await Revive.new({from: accounts[2]});
		const uintfLzD9Qm = BigInt("864")
		const addressdsqVFNU = accounts[5]
		const uintx0tCd90 = BigInt("247")
		const bytexqKXy7H = "0x04011b011c0e07030c1f01121715190c090c0d0f052005061202120c1f1f0115"
		const addressad3Vr0K = accounts[3]
		const uintg3Wflsa = BigInt("340")
		const addressxg5DuZX = accounts[4]
		const boolnafFrGt = await Revived8GEXs.increaseAllowance.call(addressdsqVFNU, uintfLzD9Qm, {from: accounts[1]});
		const uint256ZB3ILMr = await Revived8GEXs.tokensLockedAtTime.call(addressad3Vr0K, bytexqKXy7H, uintx0tCd90, {from: accounts[4]});
		const addressC1vY7Hf = await Revived8GEXs.owner.call({from: accounts[2]});
		const booloaQs9m = await Revived8GEXs.increaseAllowance.call(addressxg5DuZX, uintg3Wflsa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressC1vY7Hf, 0x496984152A1A3760965a73f9175eE1B30cE3F6bd)
		assert.equal(boolnafFrGt, true)
		assert.equal(booloaQs9m, true)
		assert.equal(uint256ZB3ILMr, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveqReNXmx = await Revive.new({from: accounts[2]});
		const uintDWDT8mh = BigInt("1626")
		const addressYJtm57i = accounts[0]
		const addressHv76NT2 = accounts[2]
		const addressELFv3Sm = accounts[5]
		const address89de7N = accounts[5]
		const addressVlmtjPq = await ReviveqReNXmx.recoverERC20.call(addressYJtm57i, uintDWDT8mh, {from: accounts[2]});
		const uint256dm95MFd = await ReviveqReNXmx.totalBalanceOf.call(addressHv76NT2, {from: accounts[1]});
		const uint256KQAFTJv = await ReviveqReNXmx.allowance.call(address89de7N, addressELFv3Sm, {from: accounts[1]});

		await expect(ReviveqReNXmx.recoverERC20.call(addressYJtm57i, uintDWDT8mh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekevsIgS = await Revive.new({from: accounts[3]});
		const addressqJ5XYHt = accounts[0]
		const addressvTxqTln = accounts[5]
		const uintZDuRtD6 = BigInt("588")
		const addressQacDu3T = accounts[3]
		const addressAYEq9av = accounts[4]
		const bytewkR8Ar9 = "0x1300110e0812101e18081e0e031f0612180618140303080d021b0d1400100108"
		const addressoayGs0l = accounts[1]
		const uintVWc71RG = BigInt("202")
		const addressDLSdqrF = accounts[5]
		const uint256WAB6ZKQ = await RevivekevsIgS.allowance.call(addressvTxqTln, addressqJ5XYHt, {from: accounts[3]});
		const boolbh6oLAm = await RevivekevsIgS.transferFrom.call(addressAYEq9av, addressQacDu3T, uintZDuRtD6, {from: accounts[4]});
		const uint256Lv5EVZ9 = await RevivekevsIgS.tokensLocked.call(addressoayGs0l, bytewkR8Ar9, {from: accounts[0]});
		const boolggcqvIA = await RevivekevsIgS.transfer.call(addressDLSdqrF, uintVWc71RG, {from: accounts[2]});

		assert.equal(uint256WAB6ZKQ, BigInt("0"))
		await expect(RevivekevsIgS.transferFrom.call(addressAYEq9av, addressQacDu3T, uintZDuRtD6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revived8GEXs = await Revive.new({from: accounts[2]});
		const uintmC3Klt4 = BigInt("864")
		const addressfKjbuR9 = accounts[5]
		const uintwvue0wO = BigInt("247")
		const bytednchku = "0x04011b011c0e07030c1f01121715190c090c0d0f052005061202120c1f1f0115"
		const addressXsQ0Bg = accounts[3]
		const uintoTWcmDC = BigInt("1726")
		const uintZQ2KhlS = BigInt("717")
		const bytebRW8HJ1 = "0x1111141d191b020d161f120e1f03110a1f20050d0e0a081a051814071f1c1c09"
		const uintU46fJGE = BigInt("340")
		const addressFPws1pk = accounts[4]
		const boolnafFrGt = await Revived8GEXs.increaseAllowance.call(addressfKjbuR9, uintmC3Klt4, {from: accounts[1]});
		const uint256ZB3ILMr = await Revived8GEXs.tokensLockedAtTime.call(addressXsQ0Bg, bytednchku, uintwvue0wO, {from: accounts[4]});
		const addressC1vY7Hf = await Revived8GEXs.owner.call({from: accounts[2]});
		const boolhRzomJP = await Revived8GEXs.lock.call(bytebRW8HJ1, uintZQ2KhlS, uintoTWcmDC, {from: accounts[2]});
		const booloaQs9m = await Revived8GEXs.increaseAllowance.call(addressFPws1pk, uintU46fJGE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressC1vY7Hf, 0x496984152A1A3760965a73f9175eE1B30cE3F6bd)
		assert.equal(boolhRzomJP, true)
		assert.equal(boolnafFrGt, true)
		assert.equal(booloaQs9m, true)
		assert.equal(uint256ZB3ILMr, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const byteqzOC3S = "0x0e0a091e1f0710011e070f0b0b1f010c0f0b150912031a10130b061714090e07"
		const addressTT7n7UQ = accounts[4]
		const addressTCPXdvL = accounts[1]
		const addressikXZQgd = "0x0000000000000000000000000000000000000002"
		const uint256sJqefGP = await ReviveWGK2iTY.tokensUnlockable.call(addressTT7n7UQ, byteqzOC3S, {from: accounts[1]});
		const booldlqxolN = await ReviveWGK2iTY.isOwner.call({from: accounts[3]});
		const uint256HJsyeyj = await ReviveWGK2iTY.getUnlockableTokens.call(addressTCPXdvL, {from: accounts[0]});
		const uint256lgwi8a = await ReviveWGK2iTY.unlock.call(addressikXZQgd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldlqxolN, false)
		assert.equal(uint256HJsyeyj, BigInt("0"))
		assert.equal(uint256lgwi8a, BigInt("0"))
		assert.equal(uint256sJqefGP, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivecyr83OI = await Revive.new({from: accounts[1]});
		const addressdT2ujg = accounts[1]
		const addressECaHhjk = accounts[2]
		const uintcxw1WFN = BigInt("1843")
		const uintHnhbte4 = BigInt("592")
		const byteg3TbhVi = "0x0f0c100c0304090b051916121f0a190d1e0215170e04040509120f0d07151919"
		const addressEVDEei = "0x0000000000000000000000000000000000000001"
		const uintPfK9byS = BigInt("27")
		const addressOaOh2m = accounts[1]
		const addressUf42uOq = "0x0000000000000000000000000000000000000001"
		const addressruIppCJ = accounts[4]
		const uint256syGrqYg = await Revivecyr83OI.allowance.call(addressECaHhjk, addressdT2ujg, {from: accounts[0]});
		const uint256fCr6K5I = await Revivecyr83OI.recoverERC20.call(uintcxw1WFN, {from: accounts[2]});
		const uint256stJ9D03 = await Revivecyr83OI.tokensLockedAtTime.call(addressEVDEei, byteg3TbhVi, uintHnhbte4, {from: accounts[4]});
		const boolxqJIZ0 = await Revivecyr83OI.approve.call(addressOaOh2m, uintPfK9byS, {from: accounts[3]});
		const uint256BACqb0t = await Revivecyr83OI.allowance.call(addressruIppCJ, addressUf42uOq, {from: accounts[2]});

		assert.equal(uint256syGrqYg, BigInt("0"))
		await expect(Revivecyr83OI.recoverERC20.call(uintcxw1WFN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revived8GEXs = await Revive.new({from: accounts[2]});
		const uintKL6KkPS = BigInt("1939")
		const uintL8Ac9bB = BigInt("1751")
		const addressEUybkSE = accounts[5]
		const uintTz00pxL = BigInt("247")
		const bytemiR9RDr = "0x04011b011c0e07030c1f01121715190c090c0d0f052005061202120c1f1f0115"
		const addressKK9get1 = accounts[3]
		const uint256K4avVLQ = await Revived8GEXs.recoverERC20.call(uintKL6KkPS, {from: accounts[5]});
		const boolnafFrGt = await Revived8GEXs.increaseAllowance.call(addressEUybkSE, uintL8Ac9bB, {from: accounts[1]});
		const uint256ZB3ILMr = await Revived8GEXs.tokensLockedAtTime.call(addressKK9get1, bytemiR9RDr, uintTz00pxL, {from: accounts[4]});

		await expect(Revived8GEXs.recoverERC20.call(uintKL6KkPS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const uintMOZNDm2 = BigInt("242")
		const uintimje9fX = BigInt("1309")
		const uintbEuz1N = BigInt("1812")
		const byteN1EijR1 = "0x04120f1f04131816190f031a1f0c141e0b0a1009031e1e041911131f12171415"
		const addressVp7zF0 = accounts[2]
		const address96YW2v = accounts[2]
		const byteTKvG0KS = "0x021b180d1916181b12191514041c0b181512050a0b08021a0d02091a051d0715"
		const addressRSHz6qT = accounts[1]
		const uint256ZI04yiP = await ReviveWGK2iTY.recoverERC20.call(uintMOZNDm2, {from: accounts[4]});
		const boolvw6yYHR = await ReviveWGK2iTY.transferWithLock.call(addressVp7zF0, byteN1EijR1, uintbEuz1N, uintimje9fX, {from: accounts[5]});
		const uint256FncuRt8 = await ReviveWGK2iTY.getUnlockableTokens.call(address96YW2v, {from: accounts[5]});
		const uint256aCGTECi = await ReviveWGK2iTY.tokensUnlockable.call(addressRSHz6qT, byteTKvG0KS, {from: accounts[2]});

		await expect(ReviveWGK2iTY.recoverERC20.call(uintMOZNDm2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const addresshHPNujW = accounts[0]
		const uintbqOTisb = BigInt("317")
		const addressd8Sz3wF = "0x0000000000000000000000000000000000000000"
		const uint256t2nuoDN = await ReviveWGK2iTY.totalBalanceOf.call(addresshHPNujW, {from: accounts[2]});
		const booluQBjQxt = await ReviveWGK2iTY.isOwner.call({from: accounts[3]});
		const uint256g8QWQbD = await ReviveWGK2iTY.recoverERC20.call(uintbqOTisb, {from: accounts[4]});
		const uint256lgwi8a = await ReviveWGK2iTY.unlock.call(addressd8Sz3wF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booluQBjQxt, false)
		assert.equal(uint256t2nuoDN, BigInt("0"))
		await expect(ReviveWGK2iTY.recoverERC20.call(uintbqOTisb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const uintXhAYEX9 = BigInt("442")
		const uintx3Xanqh = BigInt("1222")
		const addressZUdMBrh = accounts[4]
		const addressq7J83R = accounts[0]
		const addressaKExX0P = accounts[1]
		const uinteoQ08t2 = BigInt("1065")
		const addressk4X4RaD = "0x0000000000000000000000000000000000000001"
		const uint256wb6dzeR = await ReviveWGK2iTY.recoverERC20.call(uintXhAYEX9, {from: accounts[1]});
		await ReviveWGK2iTY.renounceOwnership.call({from: accounts[4]});
		const boolGRb3bLc = await ReviveWGK2iTY.transferFrom.call(addressq7J83R, addressZUdMBrh, uintx3Xanqh, {from: accounts[5]});
		const uint256HJsyeyj = await ReviveWGK2iTY.getUnlockableTokens.call(addressaKExX0P, {from: accounts[0]});
		const boolQ3Kbzv3 = await ReviveWGK2iTY.decreaseAllowance.call(addressk4X4RaD, uinteoQ08t2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveWGK2iTY.recoverERC20.call(uintXhAYEX9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const uintR3inYVM = BigInt("1187")
		const addressyHB1acA = accounts[2]
		const addressRgOTr1b = accounts[2]
		const uint256Sy7TxBH = await ReviveWGK2iTY.totalSupply.call({from: accounts[5]});
		const boolAjVwEJl = await ReviveWGK2iTY.isOwner.call({from: accounts[2]});
		const boolAWB2aoy = await ReviveWGK2iTY.approve.call(addressyHB1acA, uintR3inYVM, {from: accounts[4]});
		const uint256HJsyeyj = await ReviveWGK2iTY.getUnlockableTokens.call(addressRgOTr1b, {from: accounts[0]});

		assert.equal(boolAWB2aoy, true)
		assert.equal(boolAjVwEJl, false)
		assert.equal(uint256HJsyeyj, BigInt("0"))
		assert.equal(uint256Sy7TxBH, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const uintOI8dCEW = BigInt("1395")
		const addressvVhET18 = accounts[2]
		const uintfYO0aJv = BigInt("1309")
		const uintGqOfIb = BigInt("1812")
		const byteF87nnUx = "0x04120f1f04131816190f031a1f0c141e0b0a1009031e1e041911131f12171415"
		const addressPN0BwcH = accounts[2]
		const uint256DKEIIHf = await ReviveWGK2iTY.recoverERC20.call(uintOI8dCEW, {from: accounts[2]});
		const uint256JKYGJg0 = await ReviveWGK2iTY.balanceOf.call(addressvVhET18, {from: accounts[2]});
		const boolvw6yYHR = await ReviveWGK2iTY.transferWithLock.call(addressPN0BwcH, byteF87nnUx, uintGqOfIb, uintfYO0aJv, {from: accounts[5]});

		await expect(ReviveWGK2iTY.recoverERC20.call(uintOI8dCEW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqReNXmx = await Revive.new({from: accounts[2]});
		const uintmLwbHfC = BigInt("1706")
		const addresseLvA5mb = accounts[3]
		const uint1u27Ki = BigInt("151")
		const addressCINSGix = accounts[3]
		const addresswtyfeYE = accounts[4]
		const uint256BG7IrA5 = await ReviveqReNXmx.recoverERC20.call(uintmLwbHfC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dm95MFd = await ReviveqReNXmx.totalBalanceOf.call(addresseLvA5mb, {from: accounts[1]});
		const boolcYr0qTI = await ReviveqReNXmx.increaseAllowance.call(addressCINSGix, uint1u27Ki, {from: accounts[5]});
		const uint256w7xG18c = await ReviveqReNXmx.totalBalanceOf.call(addresswtyfeYE, {from: accounts[4]});

		await expect(ReviveqReNXmx.recoverERC20.call(uintmLwbHfC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const uintSPZ6gTQ = BigInt("604")
		const uintEGzfbFW = BigInt("1309")
		const uintQS1nWJc = BigInt("1812")
		const byteYfImehb = "0x04120f1f04131816190f031a1f0c141e0b0a1009031e1e041911131f12171415"
		const addressKJqf4cK = accounts[3]
		const uint256wvxdiMO = await ReviveWGK2iTY.totalSupply.call({from: accounts[5]});
		const uint256MIekWNX = await ReviveWGK2iTY.recoverERC20.call(uintSPZ6gTQ, {from: accounts[3]});
		const boolvw6yYHR = await ReviveWGK2iTY.transferWithLock.call(addressKJqf4cK, byteYfImehb, uintQS1nWJc, uintEGzfbFW, {from: accounts[5]});

		assert.equal(uint256wvxdiMO, BigInt("3000000000000000000000000000"))
		await expect(ReviveWGK2iTY.recoverERC20.call(uintSPZ6gTQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const addressteIfPvG = accounts[2]
		const uintMHDxQ4h = BigInt("694")
		const uint256HJsyeyj = await ReviveWGK2iTY.getUnlockableTokens.call(addressteIfPvG, {from: accounts[0]});
		const uint256t6F04k6 = await ReviveWGK2iTY.recoverERC20.call(uintMHDxQ4h, {from: accounts[1]});

		assert.equal(uint256HJsyeyj, BigInt("0"))
		await expect(ReviveWGK2iTY.recoverERC20.call(uintMHDxQ4h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJbARrco = await Revive.new({from: accounts[0]});
		const uintbvvHEYC = BigInt("1900")
		const bytezZjAx4y = "0x090e191d180e1f0e1c1f1207081a181b061309060804081d0911050914050b0b"
		const addressWoZ82LB = accounts[4]
		const uintxtWmVo = BigInt("299")
		const uintM6sh8oO = BigInt("2011")
		const byteYpxnO3W = "0x161217070b051706200718130f06170719120e011d081e0604090612071c1704"
		const addressdmvr1qO = accounts[5]
		const uint256gwAhd7Y = await ReviveJbARrco.tokensLockedAtTime.call(addressWoZ82LB, bytezZjAx4y, uintbvvHEYC, {from: accounts[0]});
		const addressNnJIe7H = await ReviveJbARrco.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ur7OPU5 = await ReviveJbARrco.recoverERC20.call(uintxtWmVo, {from: accounts[0]});
		const uint256I1kdVpn = await ReviveJbARrco.tokensLockedAtTime.call(addressdmvr1qO, byteYpxnO3W, uintM6sh8oO, {from: accounts[4]});
		const addressQ2ldwum = await ReviveJbARrco.owner.call({from: accounts[1]});

		assert.equal(addressNnJIe7H, 0xbd1659413fc5d8B25DC9bF6b7172eB337F198cE9)
		assert.equal(uint256gwAhd7Y, BigInt("0"))
		await expect(ReviveJbARrco.recoverERC20.call(uintxtWmVo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqReNXmx = await Revive.new({from: accounts[2]});
		const addressI2eDmfw = accounts[4]
		const uintcfIqvkZ = BigInt("1319")
		const uint256dm95MFd = await ReviveqReNXmx.totalBalanceOf.call(addressI2eDmfw, {from: accounts[1]});
		const uint256i9TjWMZ = await ReviveqReNXmx.recoverERC20.call(uintcfIqvkZ, {from: accounts[0]});

		assert.equal(uint256dm95MFd, BigInt("0"))
		await expect(ReviveqReNXmx.recoverERC20.call(uintcfIqvkZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivesnV3pWu = await Revive.new({from: accounts[4]});
		const uintioAhR0 = BigInt("337")
		const addresseASAtdU = accounts[4]
		const addressCHbigBA = accounts[1]
		const boolxaqpBkh = await RevivesnV3pWu.isOwner.call({from: accounts[0]});
		const addressKu4H73A = await RevivesnV3pWu.owner.call({from: accounts[3]});
		const boolVSjlYRL = await RevivesnV3pWu.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await RevivesnV3pWu.renounceOwnership.call({from: accounts[4]});
		const addressu0Lmzv = await RevivesnV3pWu.owner.call({from: accounts[0]});
		const boolf9VjlmL = await RevivesnV3pWu.transferFrom.call(addressCHbigBA, addresseASAtdU, uintioAhR0, {from: accounts[3]});

		assert.equal(addressKu4H73A, 0xb3D0b0abbF1190CbDC62caF4b299bf6e6F57Bf36)
		assert.equal(boolVSjlYRL, false)
		assert.equal(boolxaqpBkh, false)
		await expect(RevivesnV3pWu.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const addressJK0uGIq = accounts[2]
		const uintcbXwRHE = BigInt("1620")
		const addressYyk4TTu = accounts[5]
		const uint256HJsyeyj = await ReviveWGK2iTY.getUnlockableTokens.call(addressJK0uGIq, {from: accounts[0]});
		const uint256FaIUEn1 = await ReviveWGK2iTY.recoverERC20.call(uintcbXwRHE, {from: accounts[3]});
		const uint2563tFPs6 = await ReviveWGK2iTY.totalBalanceOf.call(addressYyk4TTu, {from: accounts[4]});

		assert.equal(uint256HJsyeyj, BigInt("0"))
		await expect(ReviveWGK2iTY.recoverERC20.call(uintcbXwRHE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqReNXmx = await Revive.new({from: accounts[2]});
		const uintpWEuWA = BigInt("17")
		const addressjkGuTLO = accounts[3]
		const uint256S3PaWTr = await ReviveqReNXmx.recoverERC20.call(uintpWEuWA, {from: accounts[2]});
		const uint256dm95MFd = await ReviveqReNXmx.totalBalanceOf.call(addressjkGuTLO, {from: accounts[1]});

		await expect(ReviveqReNXmx.recoverERC20.call(uintpWEuWA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqReNXmx = await Revive.new({from: accounts[2]});
		const addressihoARnj = accounts[0]
		const addresswb1okyi = accounts[4]
		const uintB25Ryfo = BigInt("187")
		const uint2565JFkIh = await ReviveqReNXmx.getUnlockableTokens.call(addressihoARnj, {from: accounts[3]});
		const uint256dm95MFd = await ReviveqReNXmx.totalBalanceOf.call(addresswb1okyi, {from: accounts[1]});
		const uint256XNQ1AoF = await ReviveqReNXmx.recoverERC20.call(uintB25Ryfo, {from: accounts[2]});
		const boolPUdhITG = await ReviveqReNXmx.isOwner.call({from: accounts[3]});

		assert.equal(uint2565JFkIh, BigInt("0"))
		assert.equal(uint256dm95MFd, BigInt("0"))
		await expect(ReviveqReNXmx.recoverERC20.call(uintB25Ryfo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const uintvdbqHe5 = BigInt("1905")
		const byteBkSsLgM = "0x000611071c11080f09130b181705141416081c1c0e0118111e0c1a0e16181812"
		const addressK9JT52m = accounts[3]
		const uinttIHbCw = BigInt("249")
		const uintwjQaTZB = BigInt("837")
		const uintNIl5Rip = BigInt("213")
		const byteB5B4jn9 = "0x1c01111c1f18020502061b181d161107160f10070e0e1811182009180a19030e"
		const uint2560xSGTJ = await ReviveWGK2iTY.tokensLockedAtTime.call(addressK9JT52m, byteBkSsLgM, uintvdbqHe5, {from: accounts[0]});
		const uint256s5tVpPZ = await ReviveWGK2iTY.recoverERC20.call(uinttIHbCw, {from: accounts[3]});
		const boolgwQC7ta = await ReviveWGK2iTY.lock.call(byteB5B4jn9, uintNIl5Rip, uintwjQaTZB, {from: accounts[1]});

		assert.equal(uint2560xSGTJ, BigInt("0"))
		await expect(ReviveWGK2iTY.recoverERC20.call(uinttIHbCw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOwIvs8x = await Revive.new({from: accounts[1]});
		const uintcnC33X1 = BigInt("1310")
		const bytehFBpEeK = "0x011c15120f19ffffffff0906061705070b03081c0c0f0f05030d0911020c1c150c0709"
		const boolFV7CAl9 = await ReviveOwIvs8x.extendLock.call(bytehFBpEeK, uintcnC33X1, {from: accounts[1]});

		await expect(ReviveOwIvs8x.extendLock.call(bytehFBpEeK, uintcnC33X1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revived8GEXs = await Revive.new({from: accounts[2]});
		const uintS6nbYKo = BigInt("191")
		const byteT8fYSOz = "0x04011bfffffffe1c0e07030c1f01121715190c090c0d0f052005061202120c1f1f0115"
		const addressyTjrQYg = accounts[4]
		const boolVwsLl1e = await Revived8GEXs.isOwner.call({from: accounts[4]});
		const uint256ZB3ILMr = await Revived8GEXs.tokensLockedAtTime.call(addressyTjrQYg, byteT8fYSOz, uintS6nbYKo, {from: accounts[4]});

		assert.equal(boolVwsLl1e, false)
		await expect(Revived8GEXs.tokensLockedAtTime.call(addressyTjrQYg, byteT8fYSOz, uintS6nbYKo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const addressmZ8Chq = "0x0000000000000000000000000000000000000001"
		const uinte5XovEy = BigInt("1583")
		const uint256lgwi8a = await ReviveWGK2iTY.unlock.call(addressmZ8Chq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Mz0iqTd = await ReviveWGK2iTY.recoverERC20.call(uinte5XovEy, {from: accounts[3]});

		assert.equal(uint256lgwi8a, BigInt("0"))
		await expect(ReviveWGK2iTY.recoverERC20.call(uinte5XovEy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveT2J4sEi = await Revive.new({from: accounts[3]});
		const uintna7SiHG = BigInt("1696")
		const uintciLIIN = BigInt("1408")
		const byteX53JuuD = "0x0e1207190308140e19111010030f0d1a16161e151c0a1a091b10030c061d0e03"
		const addressJdEAXIm = "0x0000000000000000000000000000000000000001"
		const uint256HuanuVo = await ReviveT2J4sEi.recoverERC20.call(uintna7SiHG, {from: accounts[1]});
		const boolYEqc4wm = await ReviveT2J4sEi.extendLock.call(byteX53JuuD, uintciLIIN, {from: accounts[1]});
		const uint256ASBT0IU = await ReviveT2J4sEi.unlock.call(addressJdEAXIm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveT2J4sEi.recoverERC20.call(uintna7SiHG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revived8GEXs = await Revive.new({from: accounts[2]});
		const uintyDIsq0t = BigInt("191")
		const byteYMwKZpN = "0xffffffff011b011c0e07030c1f01121715190c090c0d0f052005061202120c1f1f0115"
		const addressBqvQZGA = accounts[4]
		const uint256ZB3ILMr = await Revived8GEXs.tokensLockedAtTime.call(addressBqvQZGA, byteYMwKZpN, uintyDIsq0t, {from: accounts[4]});

		await expect(Revived8GEXs.tokensLockedAtTime.call(addressBqvQZGA, byteYMwKZpN, uintyDIsq0t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revived8GEXs = await Revive.new({from: accounts[2]});
		const uintb0vP3Es = BigInt("191")
		const byteRRt6l7i = "0x04011b011c0e07030c1f01121715190c090c0d0c052005061202120c1f1f0115"
		const addressS34Me96 = accounts[4]
		const uintzjxSlQ6 = BigInt("1423")
		const uint256ZB3ILMr = await Revived8GEXs.tokensLockedAtTime.call(addressS34Me96, byteRRt6l7i, uintb0vP3Es, {from: accounts[4]});
		const uint256z1SK5p7 = await Revived8GEXs.recoverERC20.call(uintzjxSlQ6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZB3ILMr, BigInt("0"))
		await expect(Revived8GEXs.recoverERC20.call(uintzjxSlQ6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revived8GEXs = await Revive.new({from: accounts[2]});
		const uintc0J2kp = BigInt("188")
		const byteRKcky7B = "0x04011bffffffff1c0e07030c1f01121715190c090c0d0f052005061202120c1f1f0115"
		const addressn7N2mkV = accounts[4]
		const uint256ZB3ILMr = await Revived8GEXs.tokensLockedAtTime.call(addressn7N2mkV, byteRKcky7B, uintc0J2kp, {from: accounts[4]});

		await expect(Revived8GEXs.tokensLockedAtTime.call(addressn7N2mkV, byteRKcky7B, uintc0J2kp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveb167YaT = await Revive.new({from: accounts[4]});
		const addressmuYGJTi = accounts[2]
		const addressz4espFD = accounts[5]
		const uintMpVsEXH = BigInt("1093")
		const uintpi2TEh1 = BigInt("899")
		const uintW18fzKD = BigInt("218")
		const byteUoQP4ff = "0x1d041d030f1c0801122011131317150b0a0a1e0a01071c1c160f001218090e07"
		const uint256HM4BvWn = await Reviveb167YaT.balanceOf.call(addressmuYGJTi, {from: accounts[2]});
		const uint256SVnvGwv = await Reviveb167YaT.getUnlockableTokens.call(addressz4espFD, {from: accounts[2]});
		const uint256soKagws = await Reviveb167YaT.recoverERC20.call(uintMpVsEXH, {from: accounts[1]});
		const boolbJUsXSq = await Reviveb167YaT.lock.call(byteUoQP4ff, uintW18fzKD, uintpi2TEh1, {from: accounts[0]});

		assert.equal(uint256HM4BvWn, BigInt("0"))
		assert.equal(uint256SVnvGwv, BigInt("0"))
		await expect(Reviveb167YaT.recoverERC20.call(uintMpVsEXH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqReNXmx = await Revive.new({from: accounts[2]});
		const uintYRlOgTm = BigInt("1844")
		const addressQkc4uMe = accounts[4]
		const uint256R29NE8n = await ReviveqReNXmx.recoverERC20.call(uintYRlOgTm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dm95MFd = await ReviveqReNXmx.totalBalanceOf.call(addressQkc4uMe, {from: accounts[1]});

		await expect(ReviveqReNXmx.recoverERC20.call(uintYRlOgTm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqReNXmx = await Revive.new({from: accounts[2]});
		const addressXUtaJ9 = accounts[4]
		const uintsvdCAjB = BigInt("1160")
		const addressnH7bWQN = accounts[3]
		const uintmgWaFrL = BigInt("1568")
		const uint256dm95MFd = await ReviveqReNXmx.totalBalanceOf.call(addressXUtaJ9, {from: accounts[1]});
		const boolyvfhe1n = await ReviveqReNXmx.increaseAllowance.call(addressnH7bWQN, uintsvdCAjB, {from: accounts[0]});
		const uint256EpGvxcn = await ReviveqReNXmx.recoverERC20.call(uintmgWaFrL, {from: accounts[3]});

		assert.equal(boolyvfhe1n, true)
		assert.equal(uint256dm95MFd, BigInt("0"))
		await expect(ReviveqReNXmx.recoverERC20.call(uintmgWaFrL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWGK2iTY = await Revive.new({from: accounts[5]});
		const uintQ8BA8R2 = BigInt("439")
		const uintJXZzM5 = BigInt("1309")
		const uintZ2udZf = BigInt("1796")
		const byteqw4oAb7 = "0x04120f1f04131816190f031a1f0c141e0b0a1009031e1e041911131f12171415"
		const addresslmZEtfo = accounts[2]
		const uint256Swj1m4N = await ReviveWGK2iTY.recoverERC20.call(uintQ8BA8R2, {from: accounts[2]});
		const boolvw6yYHR = await ReviveWGK2iTY.transferWithLock.call(addresslmZEtfo, byteqw4oAb7, uintZ2udZf, uintJXZzM5, {from: accounts[5]});

		await expect(ReviveWGK2iTY.recoverERC20.call(uintQ8BA8R2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})