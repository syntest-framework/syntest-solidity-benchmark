const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYMk8oLNL = await KPLAY.new({from: accounts[4]});
		const uintKmfhiKV = BigInt("1951")
		const uintILZ3gJ1 = BigInt("1252")
		const addressudITklm = accounts[2]
		const uinttAZp9sG = BigInt("1089")
		const addressgQnXlxm = accounts[0]
		const addressak0wSX2 = accounts[3]
		const addressLLRz7OG = accounts[3]
		const boole7GD3pp = await KPLAYMk8oLNL.transferWithLockAfter.call(addressudITklm, uintILZ3gJ1, uintKmfhiKV, {from: accounts[4]});
//		await KPLAYMk8oLNL.unpause.call({from: accounts[0]});
//		const boolaRz5HXo = await KPLAYMk8oLNL.transfer.call(addressgQnXlxm, uinttAZp9sG, {from: accounts[0]});
//		const addressFjCv6Py = await KPLAYMk8oLNL.freeze.call(addressak0wSX2, {from: accounts[3]});
//		const uint256h1w9mEx = await KPLAYMk8oLNL.lockCount.call(addressLLRz7OG, {from: accounts[0]});

		assert.equal(boole7GD3pp, true)
		await expect(KPLAYMk8oLNL.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYM0Jv1ue = await KPLAY.new({from: accounts[2]});
		const uintzpK4Gh = BigInt("1630")
		const addressJmtzAwq = accounts[0]
		const uintddGc1DH = BigInt("765")
		const addresslNHNqYJ = "0x0000000000000000000000000000000000000001"
		const addressQX1ls1C = accounts[4]
		const uintg8qXr3H = BigInt("531")
		const uintIeICo1v = BigInt("1560")
		const addressp1F96m2 = accounts[3]
		const addressVOv9vT = accounts[3]
//		const boolEfmQ01O = await KPLAYM0Jv1ue.decreaseAllowance.call(addressJmtzAwq, uintzpK4Gh, {from: accounts[1]});
//		const booluvPNAEh = await KPLAYM0Jv1ue.transferFrom.call(addressQX1ls1C, addresslNHNqYJ, uintddGc1DH, {from: accounts[2]});
//		const addresspiDAVLz = await KPLAYM0Jv1ue.lockAfter.call(addressp1F96m2, uintIeICo1v, uintg8qXr3H, {from: accounts[3]});
//		const addressqU8fJlM = await KPLAYM0Jv1ue.freeze.call(addressVOv9vT, {from: accounts[5]});

		await expect(KPLAYM0Jv1ue.decreaseAllowance.call(addressJmtzAwq, uintzpK4Gh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYlcfnLxP = await KPLAY.new({from: accounts[3]});
		const uintVx88fe9 = BigInt("1288")
		const addressulhRCHf = accounts[4]
		const uintEOcf0Zf = BigInt("411")
		const addressCmiFwES = accounts[2]
		const boolg95Atqe = await KPLAYlcfnLxP.mint.call(addressulhRCHf, uintVx88fe9, {from: accounts[3]});
//		await KPLAYlcfnLxP.whenNotFrozen.call({from: accounts[1]});
//		await KPLAYlcfnLxP.whenNotFrozen.call({from: accounts[3]});
//		const addressGl0HHYP = await KPLAYlcfnLxP.burn.call(addressCmiFwES, uintEOcf0Zf, {from: accounts[3]});

		assert.equal(boolg95Atqe, true)
		await expect(KPLAYlcfnLxP.whenNotFrozen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY6aHjLy = await KPLAY.new({from: accounts[0]});
		const addressfLEkc5 = accounts[5]
		const uintW1eUEb8 = BigInt("100")
		const addresscORIEJJ = accounts[0]
		const addressHnOSzil = accounts[1]
		const addressY2jZclz = accounts[0]
		const addressEb3teKk = accounts[1]
		const uintAT2i2Ph = BigInt("443")
		const uintRbFji49 = BigInt("773")
		const uintgFSRhuk = BigInt("142")
		const addressJ9gaGDO = accounts[5]
		const boolVqUZ4B9 = await KPLAY6aHjLy.isFrozen.call(addressfLEkc5, {from: accounts[2]});
//		const addressjBJQeR7 = await KPLAY6aHjLy.unlock.call(addresscORIEJJ, uintW1eUEb8, {from: accounts[2]});
//		const uint256qwdj11g = await KPLAY6aHjLy.lockCount.call(addressHnOSzil, {from: accounts[2]});
//		const uint256OgdmUnV = await KPLAY6aHjLy.allowance.call(addressEb3teKk, addressY2jZclz, {from: accounts[1]});
//		const uint256Ii520He = await KPLAY6aHjLy.afterTime.call(uintAT2i2Ph, {from: accounts[2]});
//		const boolDksT0sJ = await KPLAY6aHjLy.transferWithLock.call(addressJ9gaGDO, uintgFSRhuk, uintRbFji49, {from: accounts[3]});

		assert.equal(boolVqUZ4B9, false)
		await expect(KPLAY6aHjLy.unlock.call(addresscORIEJJ, uintW1eUEb8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjHVoT9m = await KPLAY.new({from: accounts[1]});
		const uinttYqikft = BigInt("1179")
		const uintjVubceA = BigInt("1596")
		const addressEjjs0su = accounts[1]
		const uintEFVtCUx = BigInt("1132")
		const addressDoUDMGy = "0x0000000000000000000000000000000000000001"
		const uintHOQ9uji = BigInt("301")
		const addressENqbEyy = accounts[1]
		const addressJLWsa9G = accounts[1]
		const uint4ggpib = BigInt("357")
		const addressx92bCsA = accounts[0]
		const uintd0uPgTT = BigInt("149")
		const addressOCZB8vn = accounts[3]
		const boolwXOy8v0 = await KPLAYjHVoT9m.transferWithLock.call(addressEjjs0su, uintjVubceA, uinttYqikft, {from: accounts[1]});
		const boolzhJH1fs = await KPLAYjHVoT9m.increaseAllowance.call(addressDoUDMGy, uintEFVtCUx, {from: accounts[1]});
//		const boolD2FeulO = await KPLAYjHVoT9m.mint.call(addressENqbEyy, uintHOQ9uji, {from: accounts[0]});
//		const uint256xZzNZK8 = await KPLAYjHVoT9m.balanceOf.call(addressJLWsa9G, {from: accounts[5]});
//		const addresstOordw = await KPLAYjHVoT9m.burn.call(addressx92bCsA, uint4ggpib, {from: accounts[2]});
//		const boolZfs1nGw = await KPLAYjHVoT9m.transfer.call(addressOCZB8vn, uintd0uPgTT, {from: accounts[1]});

		assert.equal(boolwXOy8v0, true)
		assert.equal(boolzhJH1fs, true)
		await expect(KPLAYjHVoT9m.mint.call(addressENqbEyy, uintHOQ9uji, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbRXeCWH = await KPLAY.new({from: accounts[2]});
		const uinteysf1F = BigInt("376")
		const addressPnC7MrX = "0x0000000000000000000000000000000000000002"
		const uintPrqNyJM = BigInt("375")
		const addressZnvSx7 = accounts[1]
		const uintGl9OGTk = BigInt("1824")
		const addressIvJKvl7 = accounts[2]
		const uintEIFTWz9 = BigInt("2038")
		const addressOeVErD0 = accounts[2]
		const uint256LRYVwUc = await KPLAYbRXeCWH.afterTime.call(uinteysf1F, {from: accounts[2]});
//		const addresscvjHlTZ = await KPLAYbRXeCWH.unfreeze.call(addressPnC7MrX, {from: accounts[4]});
//		const addresszieYCD9 = await KPLAYbRXeCWH.unlock.call(addressZnvSx7, uintPrqNyJM, {from: accounts[0]});
//		const boolqdO7N0z = await KPLAYbRXeCWH.transfer.call(addressIvJKvl7, uintGl9OGTk, {from: accounts[3]});
//		const boolCuf9vzK = await KPLAYbRXeCWH.approve.call(addressOeVErD0, uintEIFTWz9, {from: accounts[3]});

		assert.equal(uint256LRYVwUc, BigInt("1630226734"))
		await expect(KPLAYbRXeCWH.unfreeze.call(addressPnC7MrX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYavQvwXD = await KPLAY.new({from: accounts[2]});
		const uintStM3vkC = BigInt("388")
		const addressfj7FBnr = accounts[3]
		const addressg8MGUwv = accounts[0]
		const addressil8Ee9i = accounts[0]
		const uintCV372ix = BigInt("554")
		const addressRFKx8Nx = accounts[1]
		const uintvedFczP = BigInt("1870")
		const addressl899Ki5 = accounts[2]
//		const boolqkdPwbV = await KPLAYavQvwXD.transferFrom.call(addressg8MGUwv, addressfj7FBnr, uintStM3vkC, {from: accounts[1]});
//		const addressHPmiGr7 = await KPLAYavQvwXD.freeze.call(addressil8Ee9i, {from: accounts[3]});
//		await KPLAYavQvwXD.lockState.call(addressRFKx8Nx, uintCV372ix, {from: accounts[4]});
//		await KPLAYavQvwXD.lockState.call(addressl899Ki5, uintvedFczP, {from: accounts[5]});

		await expect(KPLAYavQvwXD.transferFrom.call(addressg8MGUwv, addressfj7FBnr, uintStM3vkC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbRXeCWH = await KPLAY.new({from: accounts[2]});
		const addressC38eILE = accounts[5]
		const uintO9R1mHW = BigInt("375")
		const addressD24uPsX = accounts[1]
		const uinti9qHnem = BigInt("1824")
		const address36JBbZ = accounts[3]
		const uint256ktH5N7T = await KPLAYbRXeCWH.balanceOf.call(addressC38eILE, {from: accounts[5]});
//		const addresszieYCD9 = await KPLAYbRXeCWH.unlock.call(addressD24uPsX, uintO9R1mHW, {from: accounts[0]});
//		const boolqdO7N0z = await KPLAYbRXeCWH.transfer.call(address36JBbZ, uinti9qHnem, {from: accounts[3]});

		assert.equal(uint256ktH5N7T, BigInt("0"))
		await expect(KPLAYbRXeCWH.unlock.call(addressD24uPsX, uintO9R1mHW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYavQvwXD = await KPLAY.new({from: accounts[2]});
		const uintH6xFWwi = BigInt("554")
		const addressIRdPMn5 = accounts[1]
		const uintxWQn1ds = BigInt("1844")
		const addresshMWzxUg = accounts[2]
//		await KPLAYavQvwXD.lockState.call(addressIRdPMn5, uintH6xFWwi, {from: accounts[4]});
//		await KPLAYavQvwXD.lockState.call(addresshMWzxUg, uintxWQn1ds, {from: accounts[5]});

		await expect(KPLAYavQvwXD.lockState.call(addressIRdPMn5, uintH6xFWwi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYMzW0lU2 = await KPLAY.new({from: accounts[1]});
		const uintBJuORK = BigInt("1847")
		const addressN2lf9kE = accounts[5]
		const uintjHsVkk = BigInt("1172")
		const uintzDTkc1 = BigInt("1691")
		const addressRAJjFJm = accounts[4]
		const uintXy7XmNs = BigInt("1857")
		const addressNUN2bfQ = accounts[0]
		const addresszrnaKUx = accounts[0]
		const booltEAuSfr = await KPLAYMzW0lU2.increaseAllowance.call(addressN2lf9kE, uintBJuORK, {from: accounts[4]});
		const uint256FYS8PxR = await KPLAYMzW0lU2.totalSupply.call({from: accounts[1]});
//		const boolyUVAiK = await KPLAYMzW0lU2.transferWithLock.call(addressRAJjFJm, uintzDTkc1, uintjHsVkk, {from: accounts[0]});
//		const boolGtszv4M = await KPLAYMzW0lU2.transferFrom.call(addresszrnaKUx, addressNUN2bfQ, uintXy7XmNs, {from: accounts[0]});
//		await KPLAYMzW0lU2.renounceOwnership.call({from: accounts[0]});

		assert.equal(booltEAuSfr, true)
		assert.equal(uint256FYS8PxR, BigInt("10000000000000000"))
		await expect(KPLAYMzW0lU2.transferWithLock.call(addressRAJjFJm, uintzDTkc1, uintjHsVkk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbRXeCWH = await KPLAY.new({from: accounts[2]});
		const addressvKDsDhT = "0x0000000000000000000000000000000000000001"
		const uint57pjmH = BigInt("375")
		const addressNNjH58l = accounts[1]
		const uint256nyEOgZL = await KPLAYbRXeCWH.lockCount.call(addressvKDsDhT, {from: accounts[3]});
//		const addresszieYCD9 = await KPLAYbRXeCWH.unlock.call(addressNNjH58l, uint57pjmH, {from: accounts[0]});

		assert.equal(uint256nyEOgZL, BigInt("0"))
		await expect(KPLAYbRXeCWH.unlock.call(addressNNjH58l, uint57pjmH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYavQvwXD = await KPLAY.new({from: accounts[2]});
		const uintKrUjQkJ = BigInt("848")
		const addressyBt21N = accounts[2]
		const uintPd0QtSw = BigInt("1575")
		const addressinZXu7O = accounts[1]
		const uintriTqO8w = BigInt("401")
		const addresspfLoV2h = accounts[3]
		const addresshXxZDAC = accounts[0]
		const uintkrA84Lt = BigInt("554")
		const addressC8dKdeo = accounts[1]
		const boolg1hQ1r5 = await KPLAYavQvwXD.approve.call(addressyBt21N, uintKrUjQkJ, {from: accounts[5]});
//		const boolzNlU5pw = await KPLAYavQvwXD.decreaseAllowance.call(addressinZXu7O, uintPd0QtSw, {from: accounts[4]});
//		const boolqkdPwbV = await KPLAYavQvwXD.transferFrom.call(addresshXxZDAC, addresspfLoV2h, uintriTqO8w, {from: accounts[1]});
//		await KPLAYavQvwXD.lockState.call(addressC8dKdeo, uintkrA84Lt, {from: accounts[4]});

		assert.equal(boolg1hQ1r5, true)
		await expect(KPLAYavQvwXD.decreaseAllowance.call(addressinZXu7O, uintPd0QtSw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYavQvwXD = await KPLAY.new({from: accounts[2]});
		const uintf92sjDS = BigInt("388")
		const addressJsENgTJ = accounts[3]
		const addressm59GqN7 = accounts[0]
		const uint256KAyajeb = await KPLAYavQvwXD.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolqkdPwbV = await KPLAYavQvwXD.transferFrom.call(addressm59GqN7, addressJsENgTJ, uintf92sjDS, {from: accounts[1]});

		assert.equal(uint256KAyajeb, BigInt("1630226351"))
		await expect(KPLAYavQvwXD.transferFrom.call(addressm59GqN7, addressJsENgTJ, uintf92sjDS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbRXeCWH = await KPLAY.new({from: accounts[2]});
		const uintQ0OE7Oy = BigInt("540")
		const addressa67YirC = accounts[5]
		const uintBVaM0eg = BigInt("247")
		const uintblRvHp = BigInt("375")
		const addressZjnncMz = accounts[2]
		const boolZtSwTEy = await KPLAYbRXeCWH.transfer.call(addressa67YirC, uintQ0OE7Oy, {from: accounts[2]});
		const uint256L8PgY1F = await KPLAYbRXeCWH.afterTime.call(uintBVaM0eg, {from: accounts[5]});
//		const addresszieYCD9 = await KPLAYbRXeCWH.unlock.call(addressZjnncMz, uintblRvHp, {from: accounts[0]});
//		await KPLAYbRXeCWH.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolZtSwTEy, true)
		assert.equal(uint256L8PgY1F, BigInt("1630226590"))
		await expect(KPLAYbRXeCWH.unlock.call(addressZjnncMz, uintblRvHp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGTshYo5 = await KPLAY.new({from: accounts[3]});
		const addresslOCz8E = accounts[0]
		const addresspAc5Xps = accounts[2]
		const addressX6oOf8w = await KPLAYGTshYo5.freeze.call(addresslOCz8E, {from: accounts[3]});
//		await KPLAYGTshYo5.onlyOwner.call({from: accounts[1]});
//		const uint256YszimFA = await KPLAYGTshYo5.balanceOf.call(addresspAc5Xps, {from: accounts[2]});
//		await KPLAYGTshYo5.onlyOwner.call({from: accounts[4]});

		await expect(KPLAYGTshYo5.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYavQvwXD = await KPLAY.new({from: accounts[2]});
		const addressu4v3mM = accounts[1]
		const addressyYOZsMX = accounts[2]
		const uintn7tsbJ = BigInt("388")
		const addresspEOtX4c = accounts[4]
		const addressnQE8z9D = accounts[0]
		const uint7g3n3t = BigInt("1497")
		const addressLwwce0 = "0x0000000000000000000000000000000000000001"
		const addressXNx9k6v = accounts[2]
		const uintKdVYqsr = BigInt("600")
		const uintIyLlQfl = BigInt("625")
		const addressg5bGpK = "0x0000000000000000000000000000000000000001"
		const uint2569yigFp = await KPLAYavQvwXD.allowance.call(addressyYOZsMX, addressu4v3mM, {from: accounts[4]});
//		const boolqkdPwbV = await KPLAYavQvwXD.transferFrom.call(addressnQE8z9D, addresspEOtX4c, uintn7tsbJ, {from: accounts[1]});
//		const boolnbqV4d3 = await KPLAYavQvwXD.transferFrom.call(addressXNx9k6v, addressLwwce0, uint7g3n3t, {from: accounts[1]});
//		const addressWMFexav = await KPLAYavQvwXD.lockAfter.call(addressg5bGpK, uintIyLlQfl, uintKdVYqsr, {from: accounts[4]});

		assert.equal(uint2569yigFp, BigInt("0"))
		await expect(KPLAYavQvwXD.transferFrom.call(addressnQE8z9D, addresspEOtX4c, uintn7tsbJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAajZVJ = await KPLAY.new({from: accounts[1]});
		const uinthOrXoNb = BigInt("1097")
		const uintlGnxJXP = BigInt("903")
		const addressPMAi0E = accounts[0]
		const uintKzUIrlL = BigInt("1766")
		const addressXv09zI = accounts[2]
//		const addressPXEeM4w = await KPLAYAajZVJ.lock.call(addressPMAi0E, uintlGnxJXP, uinthOrXoNb, {from: accounts[1]});
//		const boolYDBR1ds = await KPLAYAajZVJ.increaseAllowance.call(addressXv09zI, uintKzUIrlL, {from: accounts[5]});
//		const uint256OEIuu72 = await KPLAYAajZVJ.currentTime.call({from: accounts[2]});

		await expect(KPLAYAajZVJ.lock.call(addressPMAi0E, uintlGnxJXP, uinthOrXoNb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbRXeCWH = await KPLAY.new({from: accounts[2]});
		const addressgE6hVUo = accounts[4]
		const addressMgOORDw = accounts[7]
//		await KPLAYbRXeCWH.renounceOwnership.call({from: accounts[2]});
//		const addressZu9ZpTR = await KPLAYbRXeCWH.transferOwnership.call(addressgE6hVUo, {from: accounts[4]});
//		const uint256ktH5N7T = await KPLAYbRXeCWH.balanceOf.call(addressMgOORDw, {from: accounts[5]});

		await expect(KPLAYbRXeCWH.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbRXeCWH = await KPLAY.new({from: accounts[2]});
		const uintiRbRKg4 = BigInt("1619")
		const addressO0lfMDU = accounts[0]
		const addressMOgwJc2 = accounts[7]
		const uint256j2WONat = await KPLAYbRXeCWH.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressomFFjg = await KPLAYbRXeCWH.unlock.call(addressO0lfMDU, uintiRbRKg4, {from: accounts[2]});
//		await KPLAYbRXeCWH.whenPaused.call({from: accounts[2]});
//		const uint256ktH5N7T = await KPLAYbRXeCWH.balanceOf.call(addressMOgwJc2, {from: accounts[5]});

		assert.equal(uint256j2WONat, BigInt("1630226350"))
		await expect(KPLAYbRXeCWH.unlock.call(addressO0lfMDU, uintiRbRKg4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbRXeCWH = await KPLAY.new({from: accounts[2]});
		const uintn96Jck = BigInt("849")
		const addressXFQZmx0 = accounts[0]
		const uintC96ijCh = BigInt("170")
		const uintnUeeCu2 = BigInt("572")
		const addressrTdvv4c = accounts[4]
		const uintcw8hr5o = BigInt("375")
		const addresszALUh2 = accounts[1]
//		const addressZ6RRcZw = await KPLAYbRXeCWH.burn.call(addressXFQZmx0, uintn96Jck, {from: accounts[2]});
//		const booloNSwj0U = await KPLAYbRXeCWH.transferWithLock.call(addressrTdvv4c, uintnUeeCu2, uintC96ijCh, {from: accounts[0]});
//		const addresszieYCD9 = await KPLAYbRXeCWH.unlock.call(addresszALUh2, uintcw8hr5o, {from: accounts[0]});

		await expect(KPLAYbRXeCWH.burn.call(addressXFQZmx0, uintn96Jck, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIoKhxsq = await KPLAY.new({from: accounts[3]});
		const uintXn8L2iy = BigInt("626")
		const uintPkhBXDX = BigInt("54")
		const addressuXSTZCY = accounts[1]
		const addressJJJWGXv = accounts[2]
		const addressGaBii3D = accounts[2]
		const uintnCT3YEz = BigInt("1848")
		const uintM09yj2Q = BigInt("1390")
		const addressCZ1fL6N = "0x0000000000000000000000000000000000000001"
		const uintMRSu92G = BigInt("1602")
		const addresszKatElZ = accounts[2]
//		const address6OBofp = await KPLAYIoKhxsq.lockAfter.call(addressuXSTZCY, uintPkhBXDX, uintXn8L2iy, {from: accounts[3]});
//		const boolKlZFXTX = await KPLAYIoKhxsq.isFrozen.call(addressJJJWGXv, {from: accounts[4]});
//		const uint256iy0n6BT = await KPLAYIoKhxsq.lockCount.call(addressGaBii3D, {from: accounts[3]});
//		await KPLAYIoKhxsq.unpause.call({from: accounts[3]});
//		const addresswexw34U = await KPLAYIoKhxsq.lock.call(addressCZ1fL6N, uintM09yj2Q, uintnCT3YEz, {from: accounts[4]});
//		const boolpFXtm9Z = await KPLAYIoKhxsq.approve.call(addresszKatElZ, uintMRSu92G, {from: accounts[0]});

		await expect(KPLAYIoKhxsq.lockAfter.call(addressuXSTZCY, uintPkhBXDX, uintXn8L2iy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEfM47h = await KPLAY.new({from: accounts[1]});
		const addressfwkllU = accounts[4]
		const addressuuG1b3i = await KPLAYEfM47h.unfreeze.call(addressfwkllU, {from: accounts[1]});
//		await KPLAYEfM47h.renounceOwnership.call({from: accounts[2]});
//		await KPLAYEfM47h.onlyOwner.call({from: accounts[2]});

		await expect(KPLAYEfM47h.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLHvzLDb = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNryIH7P = accounts[2]
		const uint0JKFQA = BigInt("911")
		const addressu3SHbe = accounts[2]
		const addressI2NBiRZ = await KPLAYLHvzLDb.unfreeze.call(addressNryIH7P, {from: accounts[5]});
		const addressZ31mDHt = await KPLAYLHvzLDb.burn.call(addressu3SHbe, uint0JKFQA, {from: accounts[3]});
		await KPLAYLHvzLDb.whenNotFrozen.call({from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYDAhKST7 = await KPLAY.new({from: accounts[3]});
		const uint048P3v = BigInt("599")
		const addressIOWOcm = accounts[1]
//		await KPLAYDAhKST7.pause.call({from: accounts[3]});
//		const boolZ3Oojga = await KPLAYDAhKST7.approve.call(addressIOWOcm, uint048P3v, {from: accounts[1]});

		await expect(KPLAYDAhKST7.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})