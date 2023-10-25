const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveI58Mcil = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const byteaN85BD0 = "0x1d19161d010215021502180a1315131c1c141f1b05010b0c030f041e0506041a"
		const addressYTBkCzd = accounts[3]
		const addressMTuFPbm = accounts[1]
		const uint256r5Oq2DT = await ReviveI58Mcil.totalSupply.call({from: accounts[2]});
		const addresswCQDsm = await ReviveI58Mcil.owner.call({from: accounts[2]});
		const uint256HJMlwdb = await ReviveI58Mcil.tokensUnlockable.call(addressYTBkCzd, byteaN85BD0, {from: accounts[2]});
		const uint256bfIHoQK = await ReviveI58Mcil.unlock.call(addressMTuFPbm, {from: accounts[3]});
	});

	it('test for Revive', async () => {
		const ReviveMIQ742h = await Revive.new({from: accounts[3]});
		const byteGtDr0tg = "0x081b070a180a18081b20071d120b0f06020917071e04050b0820170714170718"
		const addresscHt8YVs = accounts[2]
		const addressbGFUsBf = "0x0000000000000000000000000000000000000001"
		const uintzx7px09 = BigInt("1326")
		const addressUMUaLcE = accounts[2]
		const uintXgvo1Lz = BigInt("12")
		const byteZCXMHqG = "0x140e011f120d120e101c1e040a1507120a1b0e1b201d07100d18061f03100903"
		const addressD7hiWEM = accounts[5]
		const uint256Ox2qXw0 = await ReviveMIQ742h.tokensLocked.call(addresscHt8YVs, byteGtDr0tg, {from: accounts[1]});
		const uint256QKZDyRJ = await ReviveMIQ742h.getUnlockableTokens.call(addressbGFUsBf, {from: "0x0000000000000000000000000000000000000001"});
		const boolkWqcluK = await ReviveMIQ742h.transfer.call(addressUMUaLcE, uintzx7px09, {from: accounts[0]});
		const booluKT1clY = await ReviveMIQ742h.extendLock.call(byteZCXMHqG, uintXgvo1Lz, {from: accounts[2]});
		const addressUO2lrZw = await ReviveMIQ742h.transferOwnership.call(addressD7hiWEM, {from: accounts[2]});

		assert.equal(uint256Ox2qXw0, BigInt("0"))
		assert.equal(uint256QKZDyRJ, BigInt("0"))
		await expect(ReviveMIQ742h.transfer.call(addressUMUaLcE, uintzx7px09, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetNi6YJr = await Revive.new({from: accounts[5]});
		const uintoPQjfP4 = BigInt("234")
		const byteEM60fPA = "0x1a0e051a1d161718140409061b1412110a05060e1704071006141b020c170a0e"
		const addressCbLkVJF = accounts[4]
		const uintMZCzDLv = BigInt("62")
		const addressF9gW8xt = accounts[5]
		const uintUzTmsz = BigInt("1868")
		const uintkBIN2Vs = BigInt("1906")
		const bytemDBK4Vs = "0x070b10140a181f18080c040a0902040217010e091c14171b0e131a130c0e0316"
		const addressuNQZNRK = accounts[4]
		const addresse0YbGns = accounts[4]
		const uintsNoleUZ = BigInt("1777")
		const bytepVrgQa = "0x07160e1d0a1109140f1e0d080d1f0a0d07061f1b1c1714171c191c0a0c12051c"
		const uint256IKgy7QT = await RevivetNi6YJr.tokensLockedAtTime.call(addressCbLkVJF, byteEM60fPA, uintoPQjfP4, {from: accounts[0]});
		const boolMDVoUNA = await RevivetNi6YJr.increaseAllowance.call(addressF9gW8xt, uintMZCzDLv, {from: accounts[3]});
		const boolWhOWI0W = await RevivetNi6YJr.transferWithLock.call(addressuNQZNRK, bytemDBK4Vs, uintkBIN2Vs, uintUzTmsz, {from: accounts[1]});
		await RevivetNi6YJr.onlyOwner.call({from: accounts[4]});
		const uint256U7qgvqy = await RevivetNi6YJr.balanceOf.call(addresse0YbGns, {from: accounts[1]});
		const boold86AyPL = await RevivetNi6YJr.increaseLockAmount.call(bytepVrgQa, uintsNoleUZ, {from: accounts[5]});

		assert.equal(boolMDVoUNA, true)
		assert.equal(uint256IKgy7QT, BigInt("0"))
		await expect(RevivetNi6YJr.transferWithLock.call(addressuNQZNRK, bytemDBK4Vs, uintkBIN2Vs, uintUzTmsz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivejA65svi = await Revive.new({from: accounts[4]});
		const addressBieqLbs = accounts[0]
		const addresszt3rYP = accounts[1]
		const byteSrEzzDa = "0x0417190110151414091e01161011051b0f130a041d140f100400121013090b0a"
		const addressrIRaSZx = accounts[0]
		const addressKYxVVjM = accounts[1]
		const addressi35vwWz = accounts[1]
		await RevivejA65svi.renounceOwnership.call({from: accounts[3]});
		const uint256uQvZvBW = await RevivejA65svi.allowance.call(addresszt3rYP, addressBieqLbs, {from: accounts[3]});
		const uint256IEGdfFe = await RevivejA65svi.tokensLocked.call(addressrIRaSZx, byteSrEzzDa, {from: "0x0000000000000000000000000000000000000001"});
		const boolmCrrEdy = await RevivejA65svi.isOwner.call({from: accounts[1]});
		const addressbUGxVvQ = await RevivejA65svi.transferOwnership.call(addressKYxVVjM, {from: accounts[2]});
		const uint256LdMUeAk = await RevivejA65svi.balanceOf.call(addressi35vwWz, {from: accounts[3]});

		await expect(RevivejA65svi.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const addressec36fPp = accounts[1]
		const byteApm60Vr = "0x1c0419091315050a121d081b15070c0f1d040915141b131908141a0813021c1a"
		const addressEtAe83 = accounts[2]
		const addressu2Q2Vo9 = accounts[4]
		const bytewk39L3U = "0x0c0a1f2009121f090110181410020e0d0d1e1215101c120a100c0d20050e0913"
		const addresseVwnl9D = accounts[2]
		const uint256pMx9G1x = await RevivemzjAIb8.unlock.call(addressec36fPp, {from: accounts[3]});
		const uint256XLVVf1C = await RevivemzjAIb8.tokensLocked.call(addressEtAe83, byteApm60Vr, {from: accounts[5]});
		const uint256rF8Euuh = await RevivemzjAIb8.totalBalanceOf.call(addressu2Q2Vo9, {from: accounts[4]});
		const uint256xMxzqz = await RevivemzjAIb8.tokensUnlockable.call(addresseVwnl9D, bytewk39L3U, {from: accounts[2]});
		const uint256KqiGofL = await RevivemzjAIb8.totalSupply.call({from: accounts[3]});

		assert.equal(uint256KqiGofL, BigInt("3000000000000000000000000000"))
		assert.equal(uint256XLVVf1C, BigInt("0"))
		assert.equal(uint256pMx9G1x, BigInt("0"))
		assert.equal(uint256rF8Euuh, BigInt("0"))
		assert.equal(uint256xMxzqz, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivedh9ky5 = await Revive.new({from: accounts[0]});
		const uintZO0YuG = BigInt("1870")
		const addressRA2eXQV = accounts[3]
		const addressEiP614d = accounts[1]
		const uintkDVPfJg = BigInt("421")
		const addressLYUz0u = accounts[1]
		const boolnmekor = await Revivedh9ky5.transferFrom.call(addressEiP614d, addressRA2eXQV, uintZO0YuG, {from: accounts[1]});
		await Revivedh9ky5.renounceOwnership.call({from: accounts[4]});
		await Revivedh9ky5.onlyOwner.call({from: accounts[1]});
		const booltYekBPq = await Revivedh9ky5.increaseAllowance.call(addressLYUz0u, uintkDVPfJg, {from: accounts[0]});

		await expect(Revivedh9ky5.transferFrom.call(addressEiP614d, addressRA2eXQV, uintZO0YuG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevQn1vYl = await Revive.new({from: accounts[3]});
		const uintVj0NsNe = BigInt("1631")
		const addressHLN1AXF = accounts[5]
		const byteeXiVpB = "0x1e081a131001060e0317141b0a040f1e02071907040501141d121f091a1d1016"
		const addressNuYf8Kk = accounts[1]
		const boolFVllgWA = await RevivevQn1vYl.approve.call(addressHLN1AXF, uintVj0NsNe, {from: accounts[4]});
		const uint256sd9pqUe = await RevivevQn1vYl.tokensLocked.call(addressNuYf8Kk, byteeXiVpB, {from: accounts[4]});

		assert.equal(boolFVllgWA, true)
		assert.equal(uint256sd9pqUe, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveofLGPRn = await Revive.new({from: accounts[3]});
		const uintbXYBgsi = BigInt("924")
		const byteP6DWe4l = "0x161218090601021f13081e02201b0d1f1e0f201302120f1416080308120b0e01"
		const uintoVseBma = BigInt("1985")
		const uintAmUGLHk = BigInt("1962")
		const byteBTexX5Q = "0x19180516071d07030c1c070b0d020305111e0e11201b040d04071a0b01040a1c"
		const addressmpwUr34 = accounts[3]
		const boolBVJ9jAx = await ReviveofLGPRn.increaseLockAmount.call(byteP6DWe4l, uintbXYBgsi, {from: accounts[3]});
		const booldmC0hGr = await ReviveofLGPRn.transferWithLock.call(addressmpwUr34, byteBTexX5Q, uintAmUGLHk, uintoVseBma, {from: accounts[3]});

		await expect(ReviveofLGPRn.increaseLockAmount.call(byteP6DWe4l, uintbXYBgsi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMIQ742h = await Revive.new({from: accounts[3]});
		const bytehNdH860 = "0x081b070a180a18081b20071d120b0f06020917071e04050b0820170714170718"
		const addresskOGAc4N = accounts[2]
		const addressy0RAYBy = "0x0000000000000000000000000000000000000001"
		const uintd5Ganq = BigInt("1326")
		const addressXs1ytWf = accounts[2]
		const uintr8p2CkO = BigInt("12")
		const byteJmgluBN = "0x140e011f120d120e101c1e040a1507120a1b0e1b201d07100d18061f03100903"
		const addresslEuDA5 = accounts[5]
		const uint256Ox2qXw0 = await ReviveMIQ742h.tokensLocked.call(addresskOGAc4N, bytehNdH860, {from: accounts[1]});
		const uint256QKZDyRJ = await ReviveMIQ742h.getUnlockableTokens.call(addressy0RAYBy, {from: "0x0000000000000000000000000000000000000001"});
		const addressB9OROYo = await ReviveMIQ742h.owner.call({from: accounts[0]});
		const boolkWqcluK = await ReviveMIQ742h.transfer.call(addressXs1ytWf, uintd5Ganq, {from: accounts[0]});
		const booluKT1clY = await ReviveMIQ742h.extendLock.call(byteJmgluBN, uintr8p2CkO, {from: accounts[2]});
		const addressUO2lrZw = await ReviveMIQ742h.transferOwnership.call(addresslEuDA5, {from: accounts[2]});

		assert.equal(addressB9OROYo, 0x73feCaBFd39472487791A34C30E1f980642ba8cE)
		assert.equal(uint256Ox2qXw0, BigInt("0"))
		assert.equal(uint256QKZDyRJ, BigInt("0"))
		await expect(ReviveMIQ742h.transfer.call(addressXs1ytWf, uintd5Ganq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const addressAfLpiCH = accounts[1]
		const byteZhn2gpm = "0x1c0419091315050a121d081b15070c0f1d040915141b131908141a0813021c1a"
		const addressv0dTU65 = accounts[2]
		const addressNJBAWh = accounts[4]
		const uintT5Utf6Q = BigInt("418")
		const addresswRouzBP = "0x0000000000000000000000000000000000000001"
		const bytehgKYOuq = "0x0c0a1f2009121f090110181410020e0d0d1e1215101c120a100c0d20050e0913"
		const addressmrGLSCD = accounts[2]
		const addressfuGfzJk = accounts[5]
		const uint256pMx9G1x = await RevivemzjAIb8.unlock.call(addressAfLpiCH, {from: accounts[3]});
		const uint256XLVVf1C = await RevivemzjAIb8.tokensLocked.call(addressv0dTU65, byteZhn2gpm, {from: accounts[5]});
		const uint256rF8Euuh = await RevivemzjAIb8.totalBalanceOf.call(addressNJBAWh, {from: accounts[4]});
		const bool3LuNDm = await RevivemzjAIb8.decreaseAllowance.call(addresswRouzBP, uintT5Utf6Q, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xMxzqz = await RevivemzjAIb8.tokensUnlockable.call(addressmrGLSCD, bytehgKYOuq, {from: accounts[2]});
		const uint256dIYtCeN = await RevivemzjAIb8.unlock.call(addressfuGfzJk, {from: accounts[4]});
		const uint256KqiGofL = await RevivemzjAIb8.totalSupply.call({from: accounts[3]});

		assert.equal(uint256XLVVf1C, BigInt("0"))
		assert.equal(uint256pMx9G1x, BigInt("0"))
		assert.equal(uint256rF8Euuh, BigInt("0"))
		await expect(RevivemzjAIb8.decreaseAllowance.call(addresswRouzBP, uintT5Utf6Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevQn1vYl = await Revive.new({from: accounts[3]});
		const uintlDixkni = BigInt("1631")
		const address2uECc5 = accounts[5]
		const addressLB9Auqo = accounts[1]
		const addressNIOKnNk = accounts[4]
		const byteN0l2Hmj = "0x1e081a131001060e0317141b0a040f1e02071907040501141d121f091a1d1016"
		const addressSSkTFjj = accounts[2]
		const boolFVllgWA = await RevivevQn1vYl.approve.call(address2uECc5, uintlDixkni, {from: accounts[4]});
		const uint256yYSXEL5 = await RevivevQn1vYl.allowance.call(addressNIOKnNk, addressLB9Auqo, {from: accounts[1]});
		const uint256sd9pqUe = await RevivevQn1vYl.tokensLocked.call(addressSSkTFjj, byteN0l2Hmj, {from: accounts[4]});

		assert.equal(boolFVllgWA, true)
		assert.equal(uint256sd9pqUe, BigInt("0"))
		assert.equal(uint256yYSXEL5, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uintz3w7DXC = BigInt("690")
		const uintdgChebC = BigInt("1060")
		const bytesSeIE9P = "0x01131e0b0219021e191d0c03031e1f1a1e080019030f1c131d1905090419021d"
		const addressq5W7vVY = accounts[1]
		const byteXOtZOUQ = "0x1c0419091315050a121d081b15070c0f1d040915141b131908141a0813021c1a"
		const addressYWNll84 = accounts[2]
		const bytebmtYRj7 = "0x0c0a1f2009121f090110181410020e0d0d1e1215101c120a100c0d20050e0913"
		const address3qsGNP = accounts[2]
		const uintwk1d1M8 = BigInt("1101")
		const addressDZFd0QM = accounts[5]
		const boolHygIR35 = await RevivemzjAIb8.lock.call(bytesSeIE9P, uintdgChebC, uintz3w7DXC, {from: accounts[4]});
		const uint256pMx9G1x = await RevivemzjAIb8.unlock.call(addressq5W7vVY, {from: accounts[3]});
		const uint256XLVVf1C = await RevivemzjAIb8.tokensLocked.call(addressYWNll84, byteXOtZOUQ, {from: accounts[5]});
		const uint256xMxzqz = await RevivemzjAIb8.tokensUnlockable.call(address3qsGNP, bytebmtYRj7, {from: accounts[2]});
		const addressm5yT4RH = await RevivemzjAIb8.recoverERC20.call(addressDZFd0QM, uintwk1d1M8, {from: accounts[5]});
		const uint256KqiGofL = await RevivemzjAIb8.totalSupply.call({from: accounts[3]});

		await expect(RevivemzjAIb8.lock.call(bytesSeIE9P, uintdgChebC, uintz3w7DXC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivenaqdaq = await Revive.new({from: accounts[2]});
		const byteucVGJbt = "0x06070b0b0a0b1b04041c1e0b1d1f020e08061f1919151a0906170c091a1e1518"
		const addressHwnnbFd = accounts[0]
		const uintHnQUVkK = BigInt("468")
		const uintInelCR = BigInt("1262")
		const byteWehMGkm = "0x110c1f051d191d050a1e1617011b1c0e2004081819030309020e07071e171b12"
		const addressBtCEts = accounts[2]
		const addressxH6ILIV = accounts[3]
		const uintsyW09lw = BigInt("1361")
		const addresslkkYJ8u = accounts[3]
		const uint256lxodZuD = await Revivenaqdaq.tokensLocked.call(addressHwnnbFd, byteucVGJbt, {from: accounts[4]});
		const boolvWuztsn = await Revivenaqdaq.transferWithLock.call(addressBtCEts, byteWehMGkm, uintInelCR, uintHnQUVkK, {from: accounts[2]});
		const uint256y9WoaS = await Revivenaqdaq.balanceOf.call(addressxH6ILIV, {from: accounts[3]});
		const uint256Xp652O = await Revivenaqdaq.recoverERC20.call(uintsyW09lw, {from: accounts[2]});
		const addressyBoBu3J = await Revivenaqdaq.transferOwnership.call(addresslkkYJ8u, {from: accounts[5]});
		const uint256cbzNekB = await Revivenaqdaq.totalSupply.call({from: accounts[1]});

		assert.equal(boolvWuztsn, true)
		assert.equal(uint256lxodZuD, BigInt("0"))
		assert.equal(uint256y9WoaS, BigInt("0"))
		await expect(Revivenaqdaq.recoverERC20.call(uintsyW09lw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const addressDr8Gf4s = accounts[1]
		const bytedsV4WHU = "0x1c0419091315050a121d081b15070c0f1d040915141b131908141a0813021c1a"
		const addressqwodMba = accounts[2]
		const bytetIi5te = "0x0c0a1f2009121f090110181410020e0d0d1e1215101c120a100c0d20050e0913"
		const addresslukEzxM = accounts[3]
		const uint256pMx9G1x = await RevivemzjAIb8.unlock.call(addressDr8Gf4s, {from: accounts[3]});
		await RevivemzjAIb8.renounceOwnership.call({from: accounts[2]});
		const uint256XLVVf1C = await RevivemzjAIb8.tokensLocked.call(addressqwodMba, bytedsV4WHU, {from: accounts[5]});
		const uint256xMxzqz = await RevivemzjAIb8.tokensUnlockable.call(addresslukEzxM, bytetIi5te, {from: accounts[2]});
		const uint256KqiGofL = await RevivemzjAIb8.totalSupply.call({from: accounts[3]});

		assert.equal(uint256pMx9G1x, BigInt("0"))
		await expect(RevivemzjAIb8.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const addressv557AX4 = accounts[1]
		const uintwT6rD8 = BigInt("1248")
		const addressVcBxvme = accounts[5]
		const uintm7boDVe = BigInt("1461")
		const addressC9yA3YD = accounts[1]
		const bytewQxKfJV = "0x0c0a1f2009121f090110181410020e0d0d1e1215101c120a100c0d20050e0913"
		const addressgZsUv7Q = accounts[2]
		const uint256pMx9G1x = await RevivemzjAIb8.unlock.call(addressv557AX4, {from: accounts[3]});
		const boolEAKEdzv = await RevivemzjAIb8.increaseAllowance.call(addressVcBxvme, uintwT6rD8, {from: accounts[4]});
		const addressiuboEuz = await RevivemzjAIb8.recoverERC20.call(addressC9yA3YD, uintm7boDVe, {from: accounts[2]});
		const uint256xMxzqz = await RevivemzjAIb8.tokensUnlockable.call(addressgZsUv7Q, bytewQxKfJV, {from: accounts[2]});

		assert.equal(boolEAKEdzv, true)
		assert.equal(uint256pMx9G1x, BigInt("0"))
		await expect(RevivemzjAIb8.recoverERC20.call(addressC9yA3YD, uintm7boDVe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetLSDX3 = await Revive.new({from: accounts[0]});
		const byteNl6Sbxn = "0x1e12091102031e10090b1f0b0013140710170f030812150f1f0f021b0c18100e"
		const addressFp2M1kw = accounts[3]
		const uintBaXJgl4 = BigInt("339")
		const byteKGks7HQ = "0x0220071d191c0d151d09120a0d130d08040805101306140c1207030b060a0915"
		const addressaUYSwcg = accounts[5]
		const uint256ue6Gyq1 = await RevivetLSDX3.tokensLocked.call(addressFp2M1kw, byteNl6Sbxn, {from: accounts[4]});
		const boolFn4gEW = await RevivetLSDX3.extendLock.call(byteKGks7HQ, uintBaXJgl4, {from: accounts[0]});
		await RevivetLSDX3.onlyOwner.call({from: accounts[4]});
		const uint256PFGB2lJ = await RevivetLSDX3.balanceOf.call(addressaUYSwcg, {from: accounts[4]});

		assert.equal(uint256ue6Gyq1, BigInt("0"))
		await expect(RevivetLSDX3.extendLock.call(byteKGks7HQ, uintBaXJgl4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetLSDX3 = await Revive.new({from: accounts[0]});
		const bytefSeEPEh = "0x1e12091102031e10090b1f0b0013140710170f030812150f1f0f021b0c18100e"
		const addressgfKIPz = accounts[3]
		const uintF8JHZUY = BigInt("359")
		const bytekgSN7Kq = "0x0220071d191c0d151d09120a0d130d08040805101306140c1207030b060a0915"
		const uintquhH4fR = BigInt("366")
		await RevivetLSDX3.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ue6Gyq1 = await RevivetLSDX3.tokensLocked.call(addressgfKIPz, bytefSeEPEh, {from: accounts[4]});
		const boolFn4gEW = await RevivetLSDX3.extendLock.call(bytekgSN7Kq, uintF8JHZUY, {from: accounts[0]});
		const uint256oGqLiIy = await RevivetLSDX3.recoverERC20.call(uintquhH4fR, {from: accounts[0]});
		await RevivetLSDX3.onlyOwner.call({from: accounts[4]});

		await expect(RevivetLSDX3.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveo3hhEQz = await Revive.new({from: accounts[1]});
		const uintPqD9ShO = BigInt("838")
		const address33Zhjf = accounts[1]
		const addressQOcSwE = "0x0000000000000000000000000000000000000001"
		const addressLfdRqJZ = accounts[4]
		const uintvNnQrY = BigInt("1249")
		const addressNlNb5Gc = accounts[4]
		const byteCwvGaZk = "0x0d0807191015000b1f041616191d150e120d050204091c171514151a0911041e"
		const addressCVc9hlr = accounts[5]
		const uint256dp7uZMO = await Reviveo3hhEQz.recoverERC20.call(uintPqD9ShO, {from: accounts[4]});
		const uint256z8677oW = await Reviveo3hhEQz.unlock.call(address33Zhjf, {from: accounts[1]});
		const uint256RYSdgyP = await Reviveo3hhEQz.allowance.call(addressLfdRqJZ, addressQOcSwE, {from: accounts[3]});
		const addressSaXRbr2 = await Reviveo3hhEQz.recoverERC20.call(addressNlNb5Gc, uintvNnQrY, {from: "0x0000000000000000000000000000000000000001"});
		const boolFosGnpm = await Reviveo3hhEQz.isOwner.call({from: accounts[0]});
		const uint256mqmXTK = await Reviveo3hhEQz.tokensUnlockable.call(addressCVc9hlr, byteCwvGaZk, {from: accounts[0]});

		await expect(Reviveo3hhEQz.recoverERC20.call(uintPqD9ShO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const addressv1rvIx1 = accounts[2]
		const uintpxhrjFJ = BigInt("16")
		const uint256pMx9G1x = await RevivemzjAIb8.unlock.call(addressv1rvIx1, {from: accounts[3]});
		const uint256R9isjsA = await RevivemzjAIb8.recoverERC20.call(uintpxhrjFJ, {from: accounts[2]});

		assert.equal(uint256pMx9G1x, BigInt("0"))
		await expect(RevivemzjAIb8.recoverERC20.call(uintpxhrjFJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uintyO8ijRD = BigInt("691")
		const addressoVGPwNz = accounts[0]
		const uintNeOdJH1 = BigInt("1607")
		const addressSnpblRk = accounts[0]
		const uint256esoO9cn = await RevivemzjAIb8.recoverERC20.call(uintyO8ijRD, {from: accounts[0]});
		const uint256pMx9G1x = await RevivemzjAIb8.unlock.call(addressoVGPwNz, {from: accounts[3]});
		const booleZE96Rt = await RevivemzjAIb8.approve.call(addressSnpblRk, uintNeOdJH1, {from: accounts[5]});

		await expect(RevivemzjAIb8.recoverERC20.call(uintyO8ijRD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWgTrZ3 = await Revive.new({from: accounts[1]});
		const uintXWFznS = BigInt("503")
		const uintjva3w7 = BigInt("1783")
		const uintSZoCdrF = BigInt("1203")
		const byteTqDLNFd = "0x08111d1517021d0a1105191e0d0b0c050c120d0f0c121e0f0c1508101f071814"
		const addresssdNbAjC = accounts[2]
		const uintdXt8gn = BigInt("402")
		const uintkVNJoAD = BigInt("460")
		const byteaF3x7m = "0x12040217161d1d16070f0a1f1a070d17060f05101a040620051b0f0d121f1409"
		const addresspxqUHbh = accounts[1]
		const uint256D3GTX4 = await ReviveWgTrZ3.recoverERC20.call(uintXWFznS, {from: accounts[5]});
		const boolMo8uLBP = await ReviveWgTrZ3.transferWithLock.call(addresssdNbAjC, byteTqDLNFd, uintSZoCdrF, uintjva3w7, {from: accounts[3]});
		const boolxA8Df72 = await ReviveWgTrZ3.transferWithLock.call(addresspxqUHbh, byteaF3x7m, uintkVNJoAD, uintdXt8gn, {from: accounts[3]});

		await expect(ReviveWgTrZ3.recoverERC20.call(uintXWFznS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const addressrcVPW7L = accounts[2]
		const addressXi67PSH = "0x0000000000000000000000000000000000000001"
		const uint256pMx9G1x = await RevivemzjAIb8.unlock.call(addressrcVPW7L, {from: accounts[3]});
		const address47xNhr = await RevivemzjAIb8.transferOwnership.call(addressXi67PSH, {from: accounts[2]});
		const addressavgH0qe = await RevivemzjAIb8.owner.call({from: accounts[2]});

		assert.equal(addressavgH0qe, 0x38319D570F88a9cA3aB8C98352B20cA29ff7D3B0)
		assert.equal(uint256pMx9G1x, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uintAXXAHKj = BigInt("264")
		const addressBTZ33Z7 = accounts[5]
		const uint256DtMjA3m = await RevivemzjAIb8.recoverERC20.call(uintAXXAHKj, {from: accounts[2]});
		const uint256rF8Euuh = await RevivemzjAIb8.totalBalanceOf.call(addressBTZ33Z7, {from: accounts[4]});

		await expect(RevivemzjAIb8.recoverERC20.call(uintAXXAHKj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uintnFoYugi = BigInt("3")
		const byteC2ECnPJ = "0x121e0f0e200e130410020316190c12150a161f0905070c000a03120701140f08"
		const addressJ6VCI8V = accounts[5]
		const uintP0Km685 = BigInt("1261")
		const uintIQNlFNk = BigInt("833")
		const addressemAIhyo = accounts[2]
		const uintu0rb05x = BigInt("1971")
		const addresst3SrAnf = accounts[1]
		const addressP0lSl4g = accounts[4]
		const byteBkIbKLx = "0x0d0704160808081e0d111d0a13030f1a180e15011212150a0a1409151b040908"
		const addresslVXgIJU = accounts[2]
		const uintCX5Sw87 = BigInt("110")
		const bytecWVhWAY = "0x021d16040d19101b090c131a14010e171e1516091b0a0e050708050b10130e1b"
		const uint256YOo9oVI = await RevivemzjAIb8.tokensLockedAtTime.call(addressJ6VCI8V, byteC2ECnPJ, uintnFoYugi, {from: "0x0000000000000000000000000000000000000001"});
		const uint2569Hddwm = await RevivemzjAIb8.recoverERC20.call(uintP0Km685, {from: accounts[1]});
		const boolnmZlrE3 = await RevivemzjAIb8.decreaseAllowance.call(addressemAIhyo, uintIQNlFNk, {from: accounts[5]});
		const boolD64dZRj = await RevivemzjAIb8.decreaseAllowance.call(addresst3SrAnf, uintu0rb05x, {from: accounts[0]});
		const uint256QDK1Qqa = await RevivemzjAIb8.totalBalanceOf.call(addressP0lSl4g, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UXLFMwc = await RevivemzjAIb8.tokensUnlockable.call(addresslVXgIJU, byteBkIbKLx, {from: accounts[1]});
		const boolQdUBq7S = await RevivemzjAIb8.increaseLockAmount.call(bytecWVhWAY, uintCX5Sw87, {from: accounts[4]});

		assert.equal(uint256YOo9oVI, BigInt("0"))
		await expect(RevivemzjAIb8.recoverERC20.call(uintP0Km685, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWgTrZ3 = await Revive.new({from: accounts[1]});
		const uintXW7ewrY = BigInt("1517")
		const uintNKXADnH = BigInt("1783")
		const uintGIv71p8 = BigInt("476")
		const byteJUu1w6D = "0x08111d1517021d0a1105191e0d0b0c050c120d0f0c121e0f0c1508101f071814"
		const addressueiSvfD = accounts[2]
		const uint256STQWKEU = await ReviveWgTrZ3.recoverERC20.call(uintXW7ewrY, {from: accounts[0]});
		const boolMo8uLBP = await ReviveWgTrZ3.transferWithLock.call(addressueiSvfD, byteJUu1w6D, uintGIv71p8, uintNKXADnH, {from: accounts[3]});

		await expect(ReviveWgTrZ3.recoverERC20.call(uintXW7ewrY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uintM8lYAj = BigInt("1659")
		const uintDKWr6xq = BigInt("1132")
		const byteTBrshbX = "0x050f201007101311090e1a091e090e0608040c0d190a0911111f120508091610"
		const uintr9yCR9 = BigInt("1897")
		const addressjZQyVw3 = accounts[2]
		const uintHSyMfkj = BigInt("3")
		const bytewPP31Fa = "0x121e0f0e200e130410020316190c12150a161f0905070c000a03120301140f08"
		const addresszV18Iud = accounts[5]
		const uintIUAYGai = BigInt("1971")
		const addressJBgpLbG = accounts[1]
		const uint256Qtp5rTS = await RevivemzjAIb8.recoverERC20.call(uintM8lYAj, {from: accounts[2]});
		const bool9tawVn = await RevivemzjAIb8.extendLock.call(byteTBrshbX, uintDKWr6xq, {from: "0x0000000000000000000000000000000000000001"});
		const addressN4DlFu5 = await RevivemzjAIb8.recoverERC20.call(addressjZQyVw3, uintr9yCR9, {from: accounts[2]});
		const uint256YOo9oVI = await RevivemzjAIb8.tokensLockedAtTime.call(addresszV18Iud, bytewPP31Fa, uintHSyMfkj, {from: "0x0000000000000000000000000000000000000001"});
		const boolD64dZRj = await RevivemzjAIb8.decreaseAllowance.call(addressJBgpLbG, uintIUAYGai, {from: accounts[0]});

		await expect(RevivemzjAIb8.recoverERC20.call(uintM8lYAj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetLSDX3 = await Revive.new({from: accounts[0]});
		const uintXzlLuZr = BigInt("1930")
		const addressxO641t = accounts[2]
		const uint256jfO234X = await RevivetLSDX3.recoverERC20.call(uintXzlLuZr, {from: accounts[2]});
		const uint256R2mDTm8 = await RevivetLSDX3.getUnlockableTokens.call(addressxO641t, {from: accounts[4]});

		await expect(RevivetLSDX3.recoverERC20.call(uintXzlLuZr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveofLGPRn = await Revive.new({from: accounts[3]});
		const uintJT7srVy = BigInt("1753")
		const byteNyyNcx = "0x161218090601fffffffe1f13081e02201b0d1f1e0f201302120f1416080308120b0e01"
		const boolBVJ9jAx = await ReviveofLGPRn.increaseLockAmount.call(byteNyyNcx, uintJT7srVy, {from: accounts[3]});

		await expect(ReviveofLGPRn.increaseLockAmount.call(byteNyyNcx, uintJT7srVy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uintXia4sqJ = BigInt("1252")
		const addressfk5AwEc = accounts[5]
		const uintTyVMIX = BigInt("779")
		const uintLaUKb7C = BigInt("412")
		const byteB6lI290 = "0x0b03020712141d1b05171d0b0a031d0b121c04020003061b041b1217021f1602"
		const uintcOtRg7a = BigInt("1664")
		const addressvtiKlvT = accounts[3]
		const uint256Vi5ht7y = await RevivemzjAIb8.recoverERC20.call(uintXia4sqJ, {from: accounts[4]});
		const uint256rF8Euuh = await RevivemzjAIb8.totalBalanceOf.call(addressfk5AwEc, {from: accounts[4]});
		const boolawi4ZJW = await RevivemzjAIb8.lock.call(byteB6lI290, uintLaUKb7C, uintTyVMIX, {from: accounts[4]});
		const boolPUSjNsb = await RevivemzjAIb8.transfer.call(addressvtiKlvT, uintcOtRg7a, {from: accounts[3]});

		await expect(RevivemzjAIb8.recoverERC20.call(uintXia4sqJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveofLGPRn = await Revive.new({from: accounts[3]});
		const uintsVZjzra = BigInt("1753")
		const byteRLZ2GGL = "0x16121809ffffffff01021f13081e02201b0d1f1e0f201302120f1416080308120b0e01"
		const uintNgKMrr4 = BigInt("1146")
		const byteAzENHyy = "0x1d13081d1a091d1f1101091713171b02090d120e01070d08071219021608080c"
		const addressWhhoQlU = accounts[1]
		const boolBVJ9jAx = await ReviveofLGPRn.increaseLockAmount.call(byteRLZ2GGL, uintsVZjzra, {from: accounts[3]});
		const uint256YcXFmIJ = await ReviveofLGPRn.tokensLockedAtTime.call(addressWhhoQlU, byteAzENHyy, uintNgKMrr4, {from: accounts[5]});
		await ReviveofLGPRn.renounceOwnership.call({from: accounts[1]});

		await expect(ReviveofLGPRn.increaseLockAmount.call(byteRLZ2GGL, uintsVZjzra, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveK4xXCoP = await Revive.new({from: accounts[2]});
		const uintKap3tQo = BigInt("433")
		const bytezdUAbLE = "0x0320000b0213201e0c1e0b0a0c061a1d080c151e0d0c02080d071c18011f1c0d"
		const addressBgPuYM3 = accounts[4]
		const uinteSrP3hM = BigInt("1816")
		const uintxUU4kmq = BigInt("1041")
		const uinthUvNxN = BigInt("2026")
		const byteofOMpzC = "0x050a0d1d1302170200081805021406150410081b051f0f1812151a1f1f1e1e1f"
		const addressxS6o7UI = "0x0000000000000000000000000000000000000001"
		const uint256vNrPuNe = await ReviveK4xXCoP.tokensLockedAtTime.call(addressBgPuYM3, bytezdUAbLE, uintKap3tQo, {from: accounts[0]});
		const uint256s0yT63Z = await ReviveK4xXCoP.recoverERC20.call(uinteSrP3hM, {from: accounts[2]});
		const boolhzvgAK = await ReviveK4xXCoP.transferWithLock.call(addressxS6o7UI, byteofOMpzC, uinthUvNxN, uintxUU4kmq, {from: accounts[4]});

		assert.equal(uint256vNrPuNe, BigInt("0"))
		await expect(ReviveK4xXCoP.recoverERC20.call(uinteSrP3hM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uintEM7wZx1 = BigInt("1314")
		const addressgTsphDH = accounts[4]
		const uint256MBRjvCY = await RevivemzjAIb8.recoverERC20.call(uintEM7wZx1, {from: accounts[1]});
		const uint256rF8Euuh = await RevivemzjAIb8.totalBalanceOf.call(addressgTsphDH, {from: accounts[4]});

		await expect(RevivemzjAIb8.recoverERC20.call(uintEM7wZx1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetLSDX3 = await Revive.new({from: accounts[0]});
		const uintzTosBaP = BigInt("494")
		const uintLrnDdfD = BigInt("124")
		const bytecu05xbH = "0x0220071d191c0d151d09120a0d130d08040805101306140c1207030b060a0915"
		const uint256Z8pOsn0 = await RevivetLSDX3.recoverERC20.call(uintzTosBaP, {from: accounts[3]});
		const boolFn4gEW = await RevivetLSDX3.extendLock.call(bytecu05xbH, uintLrnDdfD, {from: accounts[0]});

		await expect(RevivetLSDX3.recoverERC20.call(uintzTosBaP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWgTrZ3 = await Revive.new({from: accounts[1]});
		const uintKC3Ype = BigInt("1220")
		const uintuItHg1f = BigInt("1783")
		const uintDiOKCed = BigInt("453")
		const bytetU0QF1L = "0x08111d1517021d0a1105191e0d0b0c050c120d0f0c121e0f0c1508101f071814"
		const addressIQXBF3d = accounts[2]
		const uint256YqlqaMW = await ReviveWgTrZ3.recoverERC20.call(uintKC3Ype, {from: accounts[2]});
		const boolMo8uLBP = await ReviveWgTrZ3.transferWithLock.call(addressIQXBF3d, bytetU0QF1L, uintDiOKCed, uintuItHg1f, {from: accounts[3]});

		await expect(ReviveWgTrZ3.recoverERC20.call(uintKC3Ype, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uint5MVyyb = BigInt("1719")
		const uintxxfqC2x = BigInt("630")
		const addressMJYP8rt = accounts[0]
		const address1Fa4ux = accounts[1]
		const uintfSxg7ey = BigInt("625")
		const uintGRzvsZp = BigInt("1075")
		const byteURUXWT0 = "0x060b1a1d170513140f180f150a0910011c070c0207021a1f1703190908191302"
		const uint256KHrBU0Z = await RevivemzjAIb8.recoverERC20.call(uint5MVyyb, {from: accounts[0]});
		const boolWbh8Lhy = await RevivemzjAIb8.transferFrom.call(address1Fa4ux, addressMJYP8rt, uintxxfqC2x, {from: accounts[1]});
		const boolO7oSmHZ = await RevivemzjAIb8.lock.call(byteURUXWT0, uintGRzvsZp, uintfSxg7ey, {from: accounts[0]});

		await expect(RevivemzjAIb8.recoverERC20.call(uint5MVyyb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const addressLFsaA1l = accounts[5]
		const uintlMaWgzP = BigInt("223")
		const uintozJANDz = BigInt("891")
		const addressXq7xoai = accounts[1]
		const uint256rF8Euuh = await RevivemzjAIb8.totalBalanceOf.call(addressLFsaA1l, {from: accounts[4]});
		const uint256nIP23ct = await RevivemzjAIb8.recoverERC20.call(uintlMaWgzP, {from: accounts[0]});
		const boolOQwFoxm = await RevivemzjAIb8.decreaseAllowance.call(addressXq7xoai, uintozJANDz, {from: accounts[0]});

		assert.equal(uint256rF8Euuh, BigInt("0"))
		await expect(RevivemzjAIb8.recoverERC20.call(uintlMaWgzP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uintnLDgyye = BigInt("1532")
		const uintx3jkua = BigInt("1918")
		const bytevFCxLtz = "0x03120f1e0d16111f0e071202160d1c040e0913010d0b1d13130a0a1e0e1e1803"
		const addressMT8bexV = accounts[2]
		const uint256VqE3Ru4 = await RevivemzjAIb8.recoverERC20.call(uintnLDgyye, {from: accounts[2]});
		const boolmhITit0 = await RevivemzjAIb8.increaseLockAmount.call(bytevFCxLtz, uintx3jkua, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pMx9G1x = await RevivemzjAIb8.unlock.call(addressMT8bexV, {from: accounts[3]});

		await expect(RevivemzjAIb8.recoverERC20.call(uintnLDgyye, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWgTrZ3 = await Revive.new({from: accounts[1]});
		const uintV6syHFy = BigInt("1841")
		const uintkS37Dhg = BigInt("445")
		const uintPVL0MO = BigInt("811")
		const bytezMo3hR8 = "0x1d080415080c1016171e1e0a0201031514100f0309020b05091c1d180412120c"
		const addressnw9sK84 = "0x0000000000000000000000000000000000000001"
		const uintxFUKIwZ = BigInt("1799")
		const uintLfpIoL4 = BigInt("445")
		const bytetyPRThh = "0x08111d1517021d0a1105191e0d0b0c050c120d0f0c121e0f0c1508101f071814"
		const addressVGe8tOG = accounts[2]
		const uintiaitDph = BigInt("89")
		const bytewRM0oR2 = "0x081b12141b170a03181a02131809101e00020706110e19170d1213161c1e1a1c"
		const uint256RI36Syl = await ReviveWgTrZ3.recoverERC20.call(uintV6syHFy, {from: "0x0000000000000000000000000000000000000001"});
		const boolNjYv6K4 = await ReviveWgTrZ3.transferWithLock.call(addressnw9sK84, bytezMo3hR8, uintPVL0MO, uintkS37Dhg, {from: accounts[1]});
		const boolMo8uLBP = await ReviveWgTrZ3.transferWithLock.call(addressVGe8tOG, bytetyPRThh, uintLfpIoL4, uintxFUKIwZ, {from: accounts[3]});
		const boolxbwfeHJ = await ReviveWgTrZ3.increaseLockAmount.call(bytewRM0oR2, uintiaitDph, {from: accounts[4]});

		await expect(ReviveWgTrZ3.recoverERC20.call(uintV6syHFy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemzjAIb8 = await Revive.new({from: accounts[2]});
		const uintpCTOlwV = BigInt("0")
		const byteFbJUZWd = "0x121e0f0e200e130410020316190c12150a161f0905070c000a03120301140f08"
		const addressegm4BTC = accounts[5]
		const uintA5n3Nz = BigInt("1859")
		const uintYU5OFbu = BigInt("1039")
		const uintyqG5qkD = BigInt("292")
		const byteVtgG8HU = "0x0108181e1b170d12050e0a0f070e0c2015041610180f13051e151d1101031413"
		const byteGVjglvB = "0x020910190c13191b1d0e151f0e120c101a1a200511151b1b1a181f19180d1d18"
		const addressdeMMJl = accounts[1]
		const uint256YOo9oVI = await RevivemzjAIb8.tokensLockedAtTime.call(addressegm4BTC, byteFbJUZWd, uintpCTOlwV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xLXPRer = await RevivemzjAIb8.recoverERC20.call(uintA5n3Nz, {from: accounts[2]});
		const boolxjnIG2S = await RevivemzjAIb8.lock.call(byteVtgG8HU, uintyqG5qkD, uintYU5OFbu, {from: accounts[0]});
		const uint256heU2Gv = await RevivemzjAIb8.tokensUnlockable.call(addressdeMMJl, byteGVjglvB, {from: accounts[3]});

		assert.equal(uint256YOo9oVI, BigInt("0"))
		await expect(RevivemzjAIb8.recoverERC20.call(uintA5n3Nz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})