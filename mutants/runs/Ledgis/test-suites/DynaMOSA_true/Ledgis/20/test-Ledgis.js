const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const Ledgisu0GHQFB = await Ledgis.new({from: accounts[0]});
		const addressL427AgM = accounts[2]
		const addressCv9OE4O = accounts[1]
		const uintgsionE = BigInt("1117")
		const addressrK4Wlmf = accounts[0]
		const addressz96lOt8 = accounts[1]
		const addressUH94LIU = accounts[4]
		const uintfBi8DFK = BigInt("5")
		const addressskhth6C = accounts[5]
		const addressWpziag2 = accounts[3]
		const boolHAVnIYb = await Ledgisu0GHQFB.isFrozen.call(addressL427AgM, {from: accounts[2]});
		const uint256HtRLjg = await Ledgisu0GHQFB.balanceOf.call(addressCv9OE4O, {from: accounts[1]});
		const addressKLkKvY = await Ledgisu0GHQFB.burn.call(addressrK4Wlmf, uintgsionE, {from: accounts[5]});
		const addressAZe2N5o = await Ledgisu0GHQFB.freeze.call(addressz96lOt8, {from: accounts[0]});
		const uint256hVQG4oO = await Ledgisu0GHQFB.lockCount.call(addressUH94LIU, {from: accounts[4]});
		const boolQpMqFVx = await Ledgisu0GHQFB.transferFrom.call(addressWpziag2, addressskhth6C, uintfBi8DFK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHAVnIYb, false)
		assert.equal(uint256HtRLjg, BigInt("0"))
		await expect(Ledgisu0GHQFB.burn.call(addressrK4Wlmf, uintgsionE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAXM73hX = await Ledgis.new({from: accounts[2]});
		const uintWaUBEO = BigInt("1017")
		const addressqZJJp4b = accounts[3]
		const addressFgyqXJz = accounts[5]
		const boolMsDZ9nL = await LedgisAXM73hX.increaseAllowance.call(addressqZJJp4b, uintWaUBEO, {from: accounts[3]});
		const boolJmlfMSs = await LedgisAXM73hX.isFrozen.call(addressFgyqXJz, {from: accounts[1]});

		assert.equal(boolJmlfMSs, false)
		assert.equal(boolMsDZ9nL, true)
	});

	it('test for Ledgis', async () => {
		const LedgisstM9Vvl = await Ledgis.new({from: accounts[0]});
		const addressxLKYx2 = accounts[2]
		const uintdlzNNya = BigInt("415")
		const addressDCinccW = accounts[4]
		const addressrkJDoF0 = accounts[3]
		const addressmto4JLj = accounts[2]
		const uint256y9bGCnY = await LedgisstM9Vvl.balanceOf.call(addressxLKYx2, {from: accounts[0]});
		const boolhRp9ZeJ = await LedgisstM9Vvl.transferFrom.call(addressrkJDoF0, addressDCinccW, uintdlzNNya, {from: accounts[4]});
		await LedgisstM9Vvl.whenNotFrozen.call({from: accounts[4]});
		const uint256zOiIN3p = await LedgisstM9Vvl.balanceOf.call(addressmto4JLj, {from: accounts[1]});

		assert.equal(uint256y9bGCnY, BigInt("0"))
		await expect(LedgisstM9Vvl.transferFrom.call(addressrkJDoF0, addressDCinccW, uintdlzNNya, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisE55tRgX = await Ledgis.new({from: accounts[2]});
		const addressGgY2xUh = accounts[0]
		const addressjy6YDAG = accounts[5]
		const uintnGsiwU3 = BigInt("1531")
		const addressduZZqin = accounts[5]
		const uintzizuV6 = BigInt("1617")
		const addressiea3Qra = accounts[0]
		const uint256RL9QwC2 = await LedgisE55tRgX.totalSupply.call({from: accounts[2]});
		const uint256PQfhAfH = await LedgisE55tRgX.allowance.call(addressjy6YDAG, addressGgY2xUh, {from: accounts[4]});
		await LedgisE55tRgX.lockState.call(addressduZZqin, uintnGsiwU3, {from: accounts[4]});
		const boolSohT1fb = await LedgisE55tRgX.transfer.call(addressiea3Qra, uintzizuV6, {from: accounts[3]});
		await LedgisE55tRgX.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256PQfhAfH, BigInt("0"))
		assert.equal(uint256RL9QwC2, BigInt("10000000000000"))
		await expect(LedgisE55tRgX.lockState.call(addressduZZqin, uintnGsiwU3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJDPBljr = await Ledgis.new({from: accounts[1]});
		const uintELdCZFA = BigInt("1222")
		const uintzLKNlxd = BigInt("570")
		const addressNeYoAqT = accounts[4]
		const addresszJ58Ckq = accounts[1]
		const addressBVVmd32 = accounts[2]
		const uintWCB37c = BigInt("1462")
		const uintQcMoKPh = BigInt("614")
		const addresswpMrFbd = accounts[4]
		const uinti9h1EXF = BigInt("1276")
		const addressps2KtRx = accounts[0]
		const addresshSzrpcd = accounts[3]
		const addressUoT3hNY = await LedgisJDPBljr.lockAfter.call(addressNeYoAqT, uintzLKNlxd, uintELdCZFA, {from: accounts[1]});
		const addressRcGdi5M = await LedgisJDPBljr.freeze.call(addresszJ58Ckq, {from: accounts[3]});
		const addressiYydFWG = await LedgisJDPBljr.freeze.call(addressBVVmd32, {from: accounts[3]});
		const booloNkk5g5 = await LedgisJDPBljr.transferWithLockAfter.call(addresswpMrFbd, uintQcMoKPh, uintWCB37c, {from: accounts[3]});
		const boolH4BRTqF = await LedgisJDPBljr.approve.call(addressps2KtRx, uinti9h1EXF, {from: accounts[4]});
		const boole8XWgxI = await LedgisJDPBljr.isFrozen.call(addresshSzrpcd, {from: accounts[1]});

		await expect(LedgisJDPBljr.lockAfter.call(addressNeYoAqT, uintzLKNlxd, uintELdCZFA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const uintNdTmon8 = BigInt("1263")
		const uintKDQ7rWV = BigInt("1946")
		const addresskZEb0fc = accounts[4]
		const addresstzE6mjN = accounts[3]
		const boolxanvvWf = await LedgisLaD2Bpw.transferWithLockAfter.call(addresskZEb0fc, uintKDQ7rWV, uintNdTmon8, {from: accounts[1]});
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addresstzE6mjN, {from: accounts[2]});

		assert.equal(boolxanvvWf, true)
		assert.equal(uint256g4XCi6q, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisPqHFZa = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJuRC8Tq = BigInt("1675")
		const addressnxFUyAb = accounts[4]
		const addressdP1o4WA = accounts[0]
		const addressllCYjJ8 = await LedgisPqHFZa.unlock.call(addressnxFUyAb, uintJuRC8Tq, {from: accounts[1]});
		const uint256qXXHuLX = await LedgisPqHFZa.balanceOf.call(addressdP1o4WA, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const uintuoxnJn0 = BigInt("1263")
		const uinthacQZmq = BigInt("1946")
		const addressAFDsGFd = accounts[4]
		const addressX2rNaNL = accounts[4]
		const uinte84dK26 = BigInt("226")
		const uintEZB1Sr6 = BigInt("106")
		const addressHyt0elO = accounts[5]
		const boolxanvvWf = await LedgisLaD2Bpw.transferWithLockAfter.call(addressAFDsGFd, uinthacQZmq, uintuoxnJn0, {from: accounts[1]});
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressX2rNaNL, {from: accounts[2]});
		const boolWkD3sLb = await LedgisLaD2Bpw.transferWithLock.call(addressHyt0elO, uintEZB1Sr6, uinte84dK26, {from: accounts[1]});

		assert.equal(boolWkD3sLb, true)
		assert.equal(boolxanvvWf, true)
		assert.equal(uint256g4XCi6q, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisstM9Vvl = await Ledgis.new({from: accounts[0]});
		const addressoQ4wwKW = accounts[2]
		const uintR9UCN9t = BigInt("2028")
		const addressCFZbNfD = accounts[2]
		const uintj1ame9q = BigInt("568")
		const addressYOzXvIC = "0x0000000000000000000000000000000000000001"
		const uintyOtMOVA = BigInt("415")
		const addressnKkQPJH = accounts[4]
		const addressVN1BEjg = accounts[3]
		const addressg0Wf1mn = accounts[2]
		const uint256y9bGCnY = await LedgisstM9Vvl.balanceOf.call(addressoQ4wwKW, {from: accounts[0]});
		const booleQC40Qz = await LedgisstM9Vvl.transfer.call(addressCFZbNfD, uintR9UCN9t, {from: accounts[0]});
		const booluggZoCk = await LedgisstM9Vvl.increaseAllowance.call(addressYOzXvIC, uintj1ame9q, {from: accounts[1]});
		const boolhRp9ZeJ = await LedgisstM9Vvl.transferFrom.call(addressVN1BEjg, addressnKkQPJH, uintyOtMOVA, {from: accounts[4]});
		await LedgisstM9Vvl.whenNotFrozen.call({from: accounts[4]});
		const uint256zOiIN3p = await LedgisstM9Vvl.balanceOf.call(addressg0Wf1mn, {from: accounts[1]});

		assert.equal(booleQC40Qz, true)
		assert.equal(booluggZoCk, true)
		assert.equal(uint256y9bGCnY, BigInt("0"))
		await expect(LedgisstM9Vvl.transferFrom.call(addressVN1BEjg, addressnKkQPJH, uintyOtMOVA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZp2bvId = await Ledgis.new({from: accounts[3]});
		const uinteNGwUOM = BigInt("1598")
		const addressQzrtptg = "0x0000000000000000000000000000000000000001"
		const uintXiCqmV5 = BigInt("1669")
		const uintMb9BLDt = BigInt("35")
		const addressqtMIvDR = accounts[0]
		const uintbcOyvv = BigInt("138")
		const uintW6OPf1L = BigInt("792")
		const addresswm75Vvc = accounts[2]
		const uintlIn5qCG = BigInt("823")
		const addressgaeq5Mz = accounts[1]
		const boolykNQwIX = await LedgisZp2bvId.decreaseAllowance.call(addressQzrtptg, uinteNGwUOM, {from: accounts[2]});
		const boolmJkpbmG = await LedgisZp2bvId.transferWithLockAfter.call(addressqtMIvDR, uintMb9BLDt, uintXiCqmV5, {from: accounts[3]});
		await LedgisZp2bvId.whenNotFrozen.call({from: accounts[5]});
		const booloOFvnL5 = await LedgisZp2bvId.transferWithLock.call(addresswm75Vvc, uintW6OPf1L, uintbcOyvv, {from: accounts[4]});
		await LedgisZp2bvId.lockState.call(addressgaeq5Mz, uintlIn5qCG, {from: accounts[1]});

		await expect(LedgisZp2bvId.decreaseAllowance.call(addressQzrtptg, uinteNGwUOM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const uinttAp6D3 = BigInt("1263")
		const uintYqNmirk = BigInt("1946")
		const addressgZKDQaP = accounts[4]
		const addressARD7DL3 = accounts[1]
		const addressqbjpbCL = accounts[5]
		const uintLvzCNn2 = BigInt("1949")
		const addressTrJtwY = accounts[1]
		const boolxanvvWf = await LedgisLaD2Bpw.transferWithLockAfter.call(addressgZKDQaP, uintYqNmirk, uinttAp6D3, {from: accounts[1]});
		const uint256GOxwsao = await LedgisLaD2Bpw.lockCount.call(addressARD7DL3, {from: accounts[4]});
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressqbjpbCL, {from: accounts[2]});
		const boolKf8EVF = await LedgisLaD2Bpw.transfer.call(addressTrJtwY, uintLvzCNn2, {from: accounts[5]});
		await LedgisLaD2Bpw.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolxanvvWf, true)
		assert.equal(uint256GOxwsao, BigInt("0"))
		assert.equal(uint256g4XCi6q, BigInt("0"))
		await expect(LedgisLaD2Bpw.transfer.call(addressTrJtwY, uintLvzCNn2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const uintwhhZama = BigInt("1263")
		const uintz65sQG = BigInt("1946")
		const addressLKnIyMN = accounts[5]
		const uintB0TUX2V = BigInt("71")
		const uintUHacCp = BigInt("995")
		const addresstJkFqLY = accounts[5]
		const addressQloNgLf = accounts[5]
		const uintYyrrw9N = BigInt("1949")
		const addressUa0eUEj = accounts[1]
		const uintjdCsMoZ = BigInt("406")
		const addressDLPvpK = accounts[5]
		const addressNWlYqvm = accounts[4]
		const uinttUIB09n = BigInt("226")
		const uintfIVefUD = BigInt("179")
		const addressUtzJRBZ = accounts[5]
		await LedgisLaD2Bpw.pause.call({from: accounts[1]});
		const boolxanvvWf = await LedgisLaD2Bpw.transferWithLockAfter.call(addressLKnIyMN, uintz65sQG, uintwhhZama, {from: accounts[1]});
		const boolZLfbVg = await LedgisLaD2Bpw.transferWithLock.call(addresstJkFqLY, uintUHacCp, uintB0TUX2V, {from: "0x0000000000000000000000000000000000000001"});
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressQloNgLf, {from: accounts[2]});
		const boolKf8EVF = await LedgisLaD2Bpw.transfer.call(addressUa0eUEj, uintYyrrw9N, {from: accounts[5]});
		await LedgisLaD2Bpw.whenNotPaused.call({from: accounts[3]});
		const booliqX1SjB = await LedgisLaD2Bpw.transferFrom.call(addressNWlYqvm, addressDLPvpK, uintjdCsMoZ, {from: accounts[5]});
		const boolWkD3sLb = await LedgisLaD2Bpw.transferWithLock.call(addressUtzJRBZ, uintfIVefUD, uinttUIB09n, {from: accounts[1]});

		await expect(LedgisLaD2Bpw.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisstM9Vvl = await Ledgis.new({from: accounts[0]});
		const addressjd4bFMI = accounts[2]
		const addresshH05JL0 = accounts[2]
		const uinticvx37h = BigInt("1313")
		const addressMGBF9sh = accounts[0]
		const addressKwZW5h = accounts[2]
		const address0TAeZW = accounts[3]
		const uint256Ou1FFJ5 = await LedgisstM9Vvl.balanceOf.call(addressjd4bFMI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y9bGCnY = await LedgisstM9Vvl.balanceOf.call(addresshH05JL0, {from: accounts[0]});
		await LedgisstM9Vvl.whenNotFrozen.call({from: accounts[4]});
		const booltxJvOPD = await LedgisstM9Vvl.transferFrom.call(addressKwZW5h, addressMGBF9sh, uinticvx37h, {from: accounts[4]});
		const uint256zOiIN3p = await LedgisstM9Vvl.balanceOf.call(address0TAeZW, {from: accounts[1]});

		assert.equal(uint256Ou1FFJ5, BigInt("0"))
		assert.equal(uint256y9bGCnY, BigInt("0"))
		await expect(LedgisstM9Vvl.whenNotFrozen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisH9lZU4z = await Ledgis.new({from: accounts[1]});
		const addressaJEtZdD = accounts[0]
		const uintJikLhwK = BigInt("1096")
		const addressazUAEso = accounts[1]
		const addressJQ3RGrn = "0x0000000000000000000000000000000000000001"
		const uintAkQ5biR = BigInt("1407")
		const addressDRQGpXq = accounts[4]
		const addressE3vH4Vr = accounts[3]
		const addressup2ZNXm = accounts[2]
		const uintav86xN = BigInt("453")
		const uintDUOxQq8 = BigInt("43")
		const addressmP1qlkB = accounts[1]
		const uinteFQGsER = BigInt("463")
		const addressjKT7oXg = accounts[4]
		const uint256tcVnGrn = await LedgisH9lZU4z.balanceOf.call(addressaJEtZdD, {from: accounts[4]});
		const uint256yIQH2m = await LedgisH9lZU4z.currentTime.call({from: accounts[0]});
		const boolCbecYHb = await LedgisH9lZU4z.transferFrom.call(addressJQ3RGrn, addressazUAEso, uintJikLhwK, {from: accounts[1]});
		const boolbsz2R25 = await LedgisH9lZU4z.transferFrom.call(addressE3vH4Vr, addressDRQGpXq, uintAkQ5biR, {from: accounts[1]});
		const addressHgtlXrj = await LedgisH9lZU4z.freeze.call(addressup2ZNXm, {from: accounts[2]});
		const boolP7ge7go = await LedgisH9lZU4z.transferWithLock.call(addressmP1qlkB, uintDUOxQq8, uintav86xN, {from: accounts[4]});
		await LedgisH9lZU4z.unpause.call({from: accounts[5]});
		const boolGNTkZZL = await LedgisH9lZU4z.increaseAllowance.call(addressjKT7oXg, uinteFQGsER, {from: accounts[1]});

		assert.equal(uint256tcVnGrn, BigInt("0"))
		assert.equal(uint256yIQH2m, BigInt("1630232634"))
		await expect(LedgisH9lZU4z.transferFrom.call(addressJQ3RGrn, addressazUAEso, uintJikLhwK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const addressCmjLAoS = accounts[3]
		const uintBmqRa1M = BigInt("1341")
		const addressL9dKxUB = accounts[3]
		const addressxoXO3xq = accounts[3]
		const uintxvT6xcu = BigInt("523")
		const addressEd3MdxJ = accounts[4]
		const addressjkoImna = await LedgisLaD2Bpw.freeze.call(addressCmjLAoS, {from: accounts[1]});
		const boolEZ63FCL = await LedgisLaD2Bpw.transferFrom.call(addressxoXO3xq, addressL9dKxUB, uintBmqRa1M, {from: accounts[3]});
		await LedgisLaD2Bpw.lockState.call(addressEd3MdxJ, uintxvT6xcu, {from: accounts[1]});

		await expect(LedgisLaD2Bpw.transferFrom.call(addressxoXO3xq, addressL9dKxUB, uintBmqRa1M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const addressYLxzqM8 = accounts[4]
		const uintnMgpPUJ = BigInt("180")
		const addressXm7LxJD = accounts[0]
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressYLxzqM8, {from: accounts[2]});
		const addressGYo8t2l = await LedgisLaD2Bpw.unlock.call(addressXm7LxJD, uintnMgpPUJ, {from: accounts[1]});

		assert.equal(uint256g4XCi6q, BigInt("0"))
		await expect(LedgisLaD2Bpw.unlock.call(addressXm7LxJD, uintnMgpPUJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const addressDt3fjkl = accounts[4]
		const uintSbRrjiJ = BigInt("1521")
		const addressVImS5vX = accounts[1]
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressDt3fjkl, {from: accounts[2]});
		const addressHlu0L4C = await LedgisLaD2Bpw.burn.call(addressVImS5vX, uintSbRrjiJ, {from: accounts[1]});

		assert.equal(uint256g4XCi6q, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const uinti9ak5k = BigInt("1263")
		const uintca4PekJ = BigInt("1946")
		const addressgg0LGfp = accounts[4]
		const addresszU7UM0w = accounts[5]
		const uinty0g4vgm = BigInt("1949")
		const address993dUU = accounts[1]
		const uintigxip2O = BigInt("226")
		const uintz2yuDwS = BigInt("106")
		const addressRqTr5hv = accounts[5]
		const boolxanvvWf = await LedgisLaD2Bpw.transferWithLockAfter.call(addressgg0LGfp, uintca4PekJ, uinti9ak5k, {from: accounts[1]});
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addresszU7UM0w, {from: accounts[2]});
		await LedgisLaD2Bpw.unpause.call({from: accounts[1]});
		const boolKf8EVF = await LedgisLaD2Bpw.transfer.call(address993dUU, uinty0g4vgm, {from: accounts[5]});
		await LedgisLaD2Bpw.onlyOwner.call({from: accounts[1]});
		await LedgisLaD2Bpw.whenNotPaused.call({from: accounts[3]});
		const boolWkD3sLb = await LedgisLaD2Bpw.transferWithLock.call(addressRqTr5hv, uintz2yuDwS, uintigxip2O, {from: accounts[1]});

		assert.equal(boolxanvvWf, true)
		assert.equal(uint256g4XCi6q, BigInt("0"))
		await expect(LedgisLaD2Bpw.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const addressIlrqOwT = accounts[4]
		const uintCA6Z3gz = BigInt("395")
		const uintp6Zys2s = BigInt("1768")
		const addressYjstZFV = accounts[0]
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressIlrqOwT, {from: accounts[2]});
		const addressgbphHL4 = await LedgisLaD2Bpw.lock.call(addressYjstZFV, uintp6Zys2s, uintCA6Z3gz, {from: accounts[1]});

		assert.equal(uint256g4XCi6q, BigInt("0"))
		await expect(LedgisLaD2Bpw.lock.call(addressYjstZFV, uintp6Zys2s, uintCA6Z3gz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const uintIEUSyHX = BigInt("207")
		const addressCIKIQMn = accounts[3]
		const uint256AvlYf4N = await LedgisLaD2Bpw.afterTime.call(uintIEUSyHX, {from: accounts[5]});
		await LedgisLaD2Bpw.onlyOwner.call({from: accounts[4]});
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressCIKIQMn, {from: accounts[2]});

		assert.equal(uint256AvlYf4N, BigInt("1630232846"))
		await expect(LedgisLaD2Bpw.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const addresszl854eJ = accounts[0]
		const uintgDT7Jr = BigInt("837")
		const addressxUBoGf = accounts[7]
		const addressqYizpDn = accounts[4]
		const addressU7brN82 = accounts[0]
		const addressjv87gZf = accounts[2]
		const uintve5gDk0 = BigInt("68")
		const addressD3VYrlO = accounts[2]
		const uintKHW0EYO = BigInt("178")
		const addresstdzpRws = accounts[0]
		const uint256IauJMMb = await LedgisLaD2Bpw.balanceOf.call(addresszl854eJ, {from: accounts[0]});
		const boolKBc2dC8 = await LedgisLaD2Bpw.transfer.call(addressxUBoGf, uintgDT7Jr, {from: accounts[1]});
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressqYizpDn, {from: accounts[2]});
		const uint256yRFSwhy = await LedgisLaD2Bpw.allowance.call(addressjv87gZf, addressU7brN82, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisLaD2Bpw.pause.call({from: accounts[1]});
		const boolXftHH3x = await LedgisLaD2Bpw.approve.call(addressD3VYrlO, uintve5gDk0, {from: accounts[0]});
		const addressGYo8t2l = await LedgisLaD2Bpw.unlock.call(addresstdzpRws, uintKHW0EYO, {from: accounts[1]});

		assert.equal(boolKBc2dC8, true)
		assert.equal(uint256IauJMMb, BigInt("0"))
		assert.equal(uint256g4XCi6q, BigInt("0"))
		assert.equal(uint256yRFSwhy, BigInt("0"))
		await expect(LedgisLaD2Bpw.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const addressuFIfFQU = accounts[0]
		const uintI3FRgpS = BigInt("837")
		const addressrvhhcGs = accounts[7]
		const addresssKVzUr = accounts[4]
		const addressG7X589E = accounts[3]
		const uintLiMCrKO = BigInt("178")
		const addressbUWHmo2 = accounts[0]
		const uint256IauJMMb = await LedgisLaD2Bpw.balanceOf.call(addressuFIfFQU, {from: accounts[0]});
		const boolKBc2dC8 = await LedgisLaD2Bpw.transfer.call(addressrvhhcGs, uintI3FRgpS, {from: accounts[1]});
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addresssKVzUr, {from: accounts[2]});
		const addressjOo7EAc = await LedgisLaD2Bpw.transferOwnership.call(addressG7X589E, {from: accounts[1]});
		await LedgisLaD2Bpw.pause.call({from: accounts[1]});
		const addressGYo8t2l = await LedgisLaD2Bpw.unlock.call(addressbUWHmo2, uintLiMCrKO, {from: accounts[1]});

		assert.equal(boolKBc2dC8, true)
		assert.equal(uint256IauJMMb, BigInt("0"))
		assert.equal(uint256g4XCi6q, BigInt("0"))
		await expect(LedgisLaD2Bpw.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const addressliEGVb7 = accounts[1]
		const uintUO0G76y = BigInt("1887")
		const addressqokSQUo = accounts[0]
		const uintUURVIsK = BigInt("31")
		const addressIzw4XOl = accounts[3]
		const addresszis0jxQ = await LedgisLaD2Bpw.unfreeze.call(addressliEGVb7, {from: accounts[1]});
		const addressGYo8t2l = await LedgisLaD2Bpw.unlock.call(addressqokSQUo, uintUO0G76y, {from: accounts[1]});
		const boolTPqRSGU = await LedgisLaD2Bpw.approve.call(addressIzw4XOl, uintUURVIsK, {from: accounts[3]});

		await expect(LedgisLaD2Bpw.unlock.call(addressqokSQUo, uintUO0G76y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const addressXILKmtm = accounts[3]
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressXILKmtm, {from: accounts[2]});
		await LedgisLaD2Bpw.renounceOwnership.call({from: accounts[1]});
		await LedgisLaD2Bpw.whenNotPaused.call({from: accounts[2]});

		assert.equal(uint256g4XCi6q, BigInt("0"))
		await expect(LedgisLaD2Bpw.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLaD2Bpw = await Ledgis.new({from: accounts[1]});
		const uintTmT49nZ = BigInt("24")
		const addressbGJpjrN = accounts[0]
		const uintPsDWug7 = BigInt("837")
		const addressXkhH4j = accounts[6]
		const uintL8luB2O = BigInt("470")
		const addressp1FdmXs = accounts[0]
		const addressVl1oNYT = accounts[5]
		const uintdu2DSFm = BigInt("178")
		const addressTCwoo2T = accounts[0]
		const boolJCnyOpH = await LedgisLaD2Bpw.mint.call(addressbGJpjrN, uintTmT49nZ, {from: accounts[1]});
		const boolKBc2dC8 = await LedgisLaD2Bpw.transfer.call(addressXkhH4j, uintPsDWug7, {from: accounts[1]});
		const boolGVlFxya = await LedgisLaD2Bpw.transfer.call(addressp1FdmXs, uintL8luB2O, {from: accounts[2]});
		const uint256g4XCi6q = await LedgisLaD2Bpw.balanceOf.call(addressVl1oNYT, {from: accounts[2]});
		const addressGYo8t2l = await LedgisLaD2Bpw.unlock.call(addressTCwoo2T, uintdu2DSFm, {from: accounts[1]});

		assert.equal(boolJCnyOpH, true)
		assert.equal(boolKBc2dC8, true)
		await expect(LedgisLaD2Bpw.transfer.call(addressp1FdmXs, uintL8luB2O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})