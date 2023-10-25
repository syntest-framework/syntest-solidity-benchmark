const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const addressdEdCEdp = accounts[4]
		const uintfrXnnPk = BigInt("817")
		const addressoXGaAMw = accounts[2]
		const uinta4X1VKg = BigInt("1700")
		const uintQzOSa33 = BigInt("1806")
		const addressVcErRgX = accounts[4]
		const addressichLE3K = accounts[4]
		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addressdEdCEdp, {from: "0x0000000000000000000000000000000000000001"});
		const boolJntZYkB = await LedgisP5D6qxK.increaseAllowance.call(addressoXGaAMw, uintfrXnnPk, {from: accounts[4]});
//		const addressx440hd7 = await LedgisP5D6qxK.lock.call(addressVcErRgX, uintQzOSa33, uinta4X1VKg, {from: accounts[0]});
//		const uint256cc7lxbv = await LedgisP5D6qxK.balanceOf.call(addressichLE3K, {from: accounts[2]});

		assert.equal(boolJntZYkB, true)
		assert.equal(uint256qvN0eR5, BigInt("10000000000000"))
		await expect(LedgisP5D6qxK.lock.call(addressVcErRgX, uintQzOSa33, uinta4X1VKg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispPRC3VQ = await Ledgis.new({from: accounts[5]});
		const uintIKYbuCx = BigInt("464")
		const addressLQ5vAp6 = accounts[0]
		const uintJNI43Cm = BigInt("1185")
		const addressMFD3AvE = accounts[3]
		const uintsdTWzVz = BigInt("2020")
		const addresshpemQvy = accounts[2]
//		const boolpoYMUU1 = await LedgispPRC3VQ.transfer.call(addressLQ5vAp6, uintIKYbuCx, {from: accounts[2]});
//		const addressSoOtelt = await LedgispPRC3VQ.burn.call(addressMFD3AvE, uintJNI43Cm, {from: accounts[3]});
//		const boolNOy1qlW = await LedgispPRC3VQ.mint.call(addresshpemQvy, uintsdTWzVz, {from: accounts[0]});
//		await LedgispPRC3VQ.whenNotPaused.call({from: accounts[2]});

		await expect(LedgispPRC3VQ.transfer.call(addressLQ5vAp6, uintIKYbuCx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisB9V08h = await Ledgis.new({from: accounts[4]});
		const uintRy9rQy6 = BigInt("1919")
		const addressgBxx3AL = accounts[2]
//		await LedgisB9V08h.whenPaused.call({from: accounts[3]});
//		const booly43e6NU = await LedgisB9V08h.approve.call(addressgBxx3AL, uintRy9rQy6, {from: accounts[0]});

		await expect(LedgisB9V08h.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiszKuwk3 = await Ledgis.new({from: accounts[0]});
		const uintFT2uDf = BigInt("689")
		const addressHCMDqKE = "0x0000000000000000000000000000000000000001"
		const uintBJeLQL = BigInt("1382")
		const addressdoMlLiV = accounts[1]
		const uintvLTn3JB = BigInt("449")
		const addressmp5MqMo = accounts[4]
		const addressDhbG7U8 = accounts[1]
		const boolnf48Tod = await LedgiszKuwk3.approve.call(addressHCMDqKE, uintFT2uDf, {from: accounts[2]});
//		await LedgiszKuwk3.lockState.call(addressdoMlLiV, uintBJeLQL, {from: accounts[4]});
//		const uint256LxTo6Wk = await LedgiszKuwk3.currentTime.call({from: accounts[1]});
//		const boolrcO2c5g = await LedgiszKuwk3.transferFrom.call(addressDhbG7U8, addressmp5MqMo, uintvLTn3JB, {from: accounts[1]});

		assert.equal(boolnf48Tod, true)
		await expect(LedgiszKuwk3.lockState.call(addressdoMlLiV, uintBJeLQL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisqjm0sYw = await Ledgis.new({from: accounts[2]});
		const addressAFeBoI1 = accounts[4]
		const addressFrA21g1 = accounts[1]
		const uint256Lfp3XP2 = await Ledgisqjm0sYw.lockCount.call(addressAFeBoI1, {from: accounts[4]});
		const boolsft9TvI = await Ledgisqjm0sYw.isFrozen.call(addressFrA21g1, {from: accounts[1]});

		assert.equal(boolsft9TvI, false)
		assert.equal(uint256Lfp3XP2, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const addressttiAD2M = accounts[4]
		const uintThYEtm = BigInt("817")
		const addresstBHjyZ = accounts[2]
		const addressclwZFtj = accounts[4]
		const uintRhdlNy6 = BigInt("1700")
		const uintvNeLfrz = BigInt("1806")
		const addresspQ6RTvI = accounts[4]
		const addressnuIqwlL = accounts[4]
		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addressttiAD2M, {from: "0x0000000000000000000000000000000000000001"});
		const boolJntZYkB = await LedgisP5D6qxK.increaseAllowance.call(addresstBHjyZ, uintThYEtm, {from: accounts[4]});
		const uint256GolgPmK = await LedgisP5D6qxK.balanceOf.call(addressclwZFtj, {from: accounts[2]});
		const uint256TNDKCp4 = await LedgisP5D6qxK.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressx440hd7 = await LedgisP5D6qxK.lock.call(addresspQ6RTvI, uintvNeLfrz, uintRhdlNy6, {from: accounts[0]});
//		const uint256cc7lxbv = await LedgisP5D6qxK.balanceOf.call(addressnuIqwlL, {from: accounts[2]});

		assert.equal(boolJntZYkB, true)
		assert.equal(uint256GolgPmK, BigInt("10000000000000"))
		assert.equal(uint256TNDKCp4, BigInt("1630232004"))
		assert.equal(uint256qvN0eR5, BigInt("10000000000000"))
		await expect(LedgisP5D6qxK.lock.call(addresspQ6RTvI, uintvNeLfrz, uintRhdlNy6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM8BzIEN = await Ledgis.new({from: accounts[1]});
		const addressh7H0nFY = accounts[2]
		const uintBmnePsW = BigInt("920")
		const addressKUfVZ66 = accounts[1]
		const uintqIcbGyR = BigInt("877")
		const uintD5VOu5X = BigInt("1604")
		const addressOdaH9t = accounts[4]
		const uintMMjmOFF = BigInt("650")
		const addressSGoyJ58 = accounts[2]
		const addressXGkgFVt = accounts[1]
		const addressRbUthim = await LedgisM8BzIEN.freeze.call(addressh7H0nFY, {from: accounts[1]});
//		const addressOvTacon = await LedgisM8BzIEN.burn.call(addressKUfVZ66, uintBmnePsW, {from: accounts[2]});
//		await LedgisM8BzIEN.renounceOwnership.call({from: accounts[3]});
//		await LedgisM8BzIEN.whenNotFrozen.call({from: accounts[3]});
//		const boolnhss4lA = await LedgisM8BzIEN.transferWithLockAfter.call(addressOdaH9t, uintD5VOu5X, uintqIcbGyR, {from: "0x0000000000000000000000000000000000000001"});
//		const booldYYdcwQ = await LedgisM8BzIEN.transferFrom.call(addressXGkgFVt, addressSGoyJ58, uintMMjmOFF, {from: accounts[4]});

		await expect(LedgisM8BzIEN.burn.call(addressKUfVZ66, uintBmnePsW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const addressUhrKKZp = accounts[5]
		const addresscpDkUWm = accounts[2]
		const addressm2WZiXa = accounts[4]
		const uintfaWsK3F = BigInt("1700")
		const uintesFwEEC = BigInt("1806")
		const addressOvXhuJA = accounts[4]
		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addressUhrKKZp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Fhswm9U = await LedgisP5D6qxK.allowance.call(addressm2WZiXa, addresscpDkUWm, {from: accounts[2]});
//		const addressx440hd7 = await LedgisP5D6qxK.lock.call(addressOvXhuJA, uintesFwEEC, uintfaWsK3F, {from: accounts[0]});

		assert.equal(uint256Fhswm9U, BigInt("0"))
		assert.equal(uint256qvN0eR5, BigInt("0"))
		await expect(LedgisP5D6qxK.lock.call(addressOvXhuJA, uintesFwEEC, uintfaWsK3F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisd0xLrc = await Ledgis.new({from: accounts[2]});
		const uintL2N0LS3 = BigInt("209")
		const addressa5i6tWx = accounts[1]
		const addressniUmm8Y = accounts[2]
		const uintehd2El6 = BigInt("1313")
		const addressyOqtRbw = "0x0000000000000000000000000000000000000001"
		const address2fc3VB = accounts[0]
		const addresscN558Hi = accounts[0]
//		const booltfBSJqf = await Ledgisd0xLrc.transferFrom.call(addressniUmm8Y, addressa5i6tWx, uintL2N0LS3, {from: accounts[0]});
//		const uint256rdaXpMz = await Ledgisd0xLrc.currentTime.call({from: accounts[0]});
//		const boolMLJps8 = await Ledgisd0xLrc.transfer.call(addressyOqtRbw, uintehd2El6, {from: accounts[1]});
//		const uint2560WK5fF = await Ledgisd0xLrc.allowance.call(addresscN558Hi, address2fc3VB, {from: accounts[4]});
//		await Ledgisd0xLrc.unpause.call({from: accounts[2]});
//		await Ledgisd0xLrc.onlyOwner.call({from: accounts[1]});

		await expect(Ledgisd0xLrc.transferFrom.call(addressniUmm8Y, addressa5i6tWx, uintL2N0LS3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisijloeh9 = await Ledgis.new({from: accounts[0]});
		const uintrrS0XG9 = BigInt("1359")
		const addressnMGSyXg = accounts[1]
		const uintkrms4o9 = BigInt("176")
		const addressARC4g0 = accounts[0]
		const addresstwgrO3W = accounts[0]
		const addressTgVgYI = "0x0000000000000000000000000000000000000001"
		const boolIGWlBEZ = await Ledgisijloeh9.transfer.call(addressnMGSyXg, uintrrS0XG9, {from: accounts[0]});
//		const boolJ6mKcGb = await Ledgisijloeh9.transferFrom.call(addresstwgrO3W, addressARC4g0, uintkrms4o9, {from: accounts[3]});
//		await Ledgisijloeh9.whenNotFrozen.call({from: accounts[4]});
//		await Ledgisijloeh9.pause.call({from: accounts[5]});
//		const boolsOUhPit = await Ledgisijloeh9.isFrozen.call(addressTgVgYI, {from: accounts[2]});

		assert.equal(boolIGWlBEZ, true)
		await expect(Ledgisijloeh9.transferFrom.call(addresstwgrO3W, addressARC4g0, uintkrms4o9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const addressNcMjJAp = accounts[2]
		const addressAKkJieY = accounts[1]
		const addresskGjQBXx = accounts[4]
		const addressbsFlPpw = accounts[2]
		const uint256cMfKmoD = await LedgisP5D6qxK.balanceOf.call(addressNcMjJAp, {from: accounts[3]});
		const addressy49eq5 = await LedgisP5D6qxK.unfreeze.call(addressAKkJieY, {from: accounts[4]});
		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addresskGjQBXx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CWHgJn = await LedgisP5D6qxK.balanceOf.call(addressbsFlPpw, {from: accounts[1]});

		assert.equal(uint256CWHgJn, BigInt("0"))
		assert.equal(uint256cMfKmoD, BigInt("0"))
		assert.equal(uint256qvN0eR5, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const addresssK21x1R = accounts[4]
		const uintErOaizh = BigInt("1549")
		const addressPpgu86 = accounts[4]
		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addresssK21x1R, {from: "0x0000000000000000000000000000000000000001"});
//		const boolm8qUZs2 = await LedgisP5D6qxK.decreaseAllowance.call(addressPpgu86, uintErOaizh, {from: accounts[5]});

		assert.equal(uint256qvN0eR5, BigInt("10000000000000"))
		await expect(LedgisP5D6qxK.decreaseAllowance.call(addressPpgu86, uintErOaizh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const uintAuhajCb = BigInt("1104")
		const addresssICBJ4o = accounts[5]
		const uint256PoFXTD = await LedgisP5D6qxK.afterTime.call(uintAuhajCb, {from: accounts[3]});
		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addresssICBJ4o, {from: "0x0000000000000000000000000000000000000001"});
//		await LedgisP5D6qxK.whenPaused.call({from: accounts[3]});

		assert.equal(uint256PoFXTD, BigInt("1630233127"))
		assert.equal(uint256qvN0eR5, BigInt("0"))
		await expect(LedgisP5D6qxK.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisaksgxoS = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZWrveZV = BigInt("456")
		const addressDN1MXl = accounts[1]
		const uintu0mUESN = BigInt("524")
		const uintXuJBQrv = BigInt("812")
		const addresscXIdRBw = accounts[2]
		const uintjO3638 = BigInt("1516")
		const addressHzq0Ijh = accounts[3]
		const addressySVn880 = await LedgisaksgxoS.burn.call(addressDN1MXl, uintZWrveZV, {from: accounts[3]});
		const boolEXIjt3s = await LedgisaksgxoS.transferWithLockAfter.call(addresscXIdRBw, uintXuJBQrv, uintu0mUESN, {from: accounts[2]});
		const boolonYw341 = await LedgisaksgxoS.approve.call(addressHzq0Ijh, uintjO3638, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const addressZhEAVm0 = accounts[5]
		const uintrDA2E1 = BigInt("1619")
		const uintapqGABE = BigInt("215")
		const addressw7vOtEt = accounts[3]
		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addressZhEAVm0, {from: "0x0000000000000000000000000000000000000001"});
		const boolA8XBTJW = await LedgisP5D6qxK.transferWithLockAfter.call(addressw7vOtEt, uintapqGABE, uintrDA2E1, {from: accounts[4]});

		assert.equal(boolA8XBTJW, true)
		assert.equal(uint256qvN0eR5, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const uintXhvX2xw = BigInt("1900")
		const uintTZyEt0g = BigInt("153")
		const addressNs8m5Uu = accounts[3]
		const addressAmskOU = accounts[4]
//		const addressqBOKpaB = await LedgisP5D6qxK.lock.call(addressNs8m5Uu, uintTZyEt0g, uintXhvX2xw, {from: accounts[4]});
//		await LedgisP5D6qxK.whenNotPaused.call({from: accounts[5]});
//		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addressAmskOU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisP5D6qxK.lock.call(addressNs8m5Uu, uintTZyEt0g, uintXhvX2xw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskhvkWdQ = await Ledgis.new({from: accounts[3]});
		const uintBjG9r2l = BigInt("102")
		const addressCqO73z = accounts[1]
		const uintJ7wc6uy = BigInt("766")
		const addressgIHiLGH = accounts[4]
//		const addressevRw0lN = await LedgiskhvkWdQ.burn.call(addressCqO73z, uintBjG9r2l, {from: accounts[3]});
//		const boolBBcKgp3 = await LedgiskhvkWdQ.transfer.call(addressgIHiLGH, uintJ7wc6uy, {from: accounts[3]});
//		await LedgiskhvkWdQ.whenNotPaused.call({from: accounts[4]});
//		await LedgiskhvkWdQ.pause.call({from: accounts[1]});

		await expect(LedgiskhvkWdQ.burn.call(addressCqO73z, uintBjG9r2l, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisB9V08h = await Ledgis.new({from: accounts[4]});
		const uintUJyg2La = BigInt("1825")
		const addressMfeeLmz = accounts[0]
		const uintX2gboDc = BigInt("1490")
		const addressFiE6Lr = accounts[1]
		const boolOfBwRtQ = await LedgisB9V08h.mint.call(addressMfeeLmz, uintUJyg2La, {from: accounts[4]});
//		const bool7YRQOl = await LedgisB9V08h.transfer.call(addressFiE6Lr, uintX2gboDc, {from: accounts[0]});

		assert.equal(boolOfBwRtQ, true)
		await expect(LedgisB9V08h.transfer.call(addressFiE6Lr, uintX2gboDc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const addresstirBKKr = accounts[4]
		const addressy2zC3I = accounts[1]
		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addresstirBKKr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WOwSo4 = await LedgisP5D6qxK.totalSupply.call({from: accounts[5]});
		const uint256P2zf0Sb = await LedgisP5D6qxK.lockCount.call(addressy2zC3I, {from: accounts[2]});

		assert.equal(uint256P2zf0Sb, BigInt("0"))
		assert.equal(uint256WOwSo4, BigInt("10000000000000"))
		assert.equal(uint256qvN0eR5, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisB9V08h = await Ledgis.new({from: accounts[4]});
		const uintsPtDYbc = BigInt("397")
		const uintMbiyST6 = BigInt("1517")
		const address5501we = accounts[1]
		const uintPZX3f4l = BigInt("24")
		const addressQdoUv7y = accounts[2]
//		await LedgisB9V08h.unpause.call({from: accounts[4]});
//		const addressD70xKmN = await LedgisB9V08h.lock.call(address5501we, uintMbiyST6, uintsPtDYbc, {from: accounts[4]});
//		await LedgisB9V08h.renounceOwnership.call({from: accounts[3]});
//		const bool7YRQOl = await LedgisB9V08h.transfer.call(addressQdoUv7y, uintPZX3f4l, {from: accounts[0]});

		await expect(LedgisB9V08h.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisB9V08h = await Ledgis.new({from: accounts[4]});
		const uintJ9SGKTs = BigInt("272")
		const uintwworW6u = BigInt("1260")
		const addressix8nRor = accounts[3]
		const uintzkvrxL = BigInt("468")
		const addressqzD6Ep = accounts[0]
		const boolhHSO9g3 = await LedgisB9V08h.transferWithLock.call(addressix8nRor, uintwworW6u, uintJ9SGKTs, {from: accounts[4]});
//		await LedgisB9V08h.whenPaused.call({from: accounts[3]});
//		await LedgisB9V08h.whenNotPaused.call({from: accounts[1]});
//		const boolfVeoCB3 = await LedgisB9V08h.increaseAllowance.call(addressqzD6Ep, uintzkvrxL, {from: accounts[1]});

		assert.equal(boolhHSO9g3, true)
		await expect(LedgisB9V08h.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const uintDEISoYq = BigInt("1581")
		const addressIwFJzFY = accounts[1]
		const addressRnGqOSc = accounts[4]
//		const addressZ2MtYJZ = await LedgisP5D6qxK.unlock.call(addressIwFJzFY, uintDEISoYq, {from: accounts[4]});
//		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addressRnGqOSc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisP5D6qxK.unlock.call(addressIwFJzFY, uintDEISoYq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const addressv95EOh = "0x0000000000000000000000000000000000000001"
		const addressyTyjN0D = accounts[5]
		const addresss5J2jsZ = await LedgisP5D6qxK.transferOwnership.call(addressv95EOh, {from: accounts[4]});
//		await LedgisP5D6qxK.renounceOwnership.call({from: accounts[3]});
//		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addressyTyjN0D, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisP5D6qxK.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgislreTneC = await Ledgis.new({from: accounts[2]});
		const addressI02LOeI = accounts[5]
		const uintGdPQNF = BigInt("972")
		const uintfAjfEe4 = BigInt("1445")
		const addressiXW72JX = accounts[3]
		const uintQgKmpUb = BigInt("1576")
		const addressEvRGRf7 = accounts[4]
		const uint256pyvv7f = await LedgislreTneC.balanceOf.call(addressI02LOeI, {from: accounts[3]});
//		const addressmCj0wkK = await LedgislreTneC.lockAfter.call(addressiXW72JX, uintfAjfEe4, uintGdPQNF, {from: accounts[2]});
//		const boolyaRbSCs = await LedgislreTneC.transfer.call(addressEvRGRf7, uintQgKmpUb, {from: accounts[0]});

		assert.equal(uint256pyvv7f, BigInt("0"))
		await expect(LedgislreTneC.lockAfter.call(addressiXW72JX, uintfAjfEe4, uintGdPQNF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisP5D6qxK = await Ledgis.new({from: accounts[4]});
		const uintkxyDVcp = BigInt("1802")
		const addressuRrZkED = accounts[3]
		const addresspyyA37o = accounts[5]
		const addressYsWsbDg = accounts[1]
//		await LedgisP5D6qxK.pause.call({from: accounts[4]});
//		const boolNo2Rksq = await LedgisP5D6qxK.transfer.call(addressuRrZkED, uintkxyDVcp, {from: accounts[3]});
//		const uint256qvN0eR5 = await LedgisP5D6qxK.balanceOf.call(addresspyyA37o, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYc2bpT5 = await LedgisP5D6qxK.freeze.call(addressYsWsbDg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisP5D6qxK.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisB9V08h = await Ledgis.new({from: accounts[4]});
		const uinteuC0LxW = BigInt("1033")
		const addresspDx1hJb = accounts[3]
//		await LedgisB9V08h.renounceOwnership.call({from: accounts[4]});
//		const boolFQjoonN = await LedgisB9V08h.increaseAllowance.call(addresspDx1hJb, uinteuC0LxW, {from: accounts[5]});
//		await LedgisB9V08h.pause.call({from: accounts[1]});
//		await LedgisB9V08h.whenPaused.call({from: accounts[3]});

		await expect(LedgisB9V08h.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})