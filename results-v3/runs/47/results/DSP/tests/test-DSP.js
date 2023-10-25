const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const addresscLrVmSs = accounts[1]
		const addressOkPt5kd = accounts[2]
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addresscLrVmSs, {from: accounts[1]});
		const addressjtMAEX8 = await DSPJgO03r.addPauser.call(addressOkPt5kd, {from: accounts[4]});
		await DSPJgO03r.whenNotPaused.call({from: accounts[2]});

		assert.equal(uint256baaU33U, BigInt("0"))
		await expect(DSPJgO03r.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKSY1bSz = await DSP.new({from: accounts[0]});
		const uintGnQtroP = BigInt("1695")
		const addresslgbLk4M = accounts[3]
		const addressH61Mlt = accounts[2]
		const addresseUosX2x = accounts[1]
		const uintr6OLEoa = BigInt("1875")
		const addressBEDgzVp = accounts[3]
		const boolHH1imqD = await DSPKSY1bSz.transferFrom.call(addressH61Mlt, addresslgbLk4M, uintGnQtroP, {from: accounts[2]});
		const boolhO0YPF = await DSPKSY1bSz.isPauser.call(addresseUosX2x, {from: "0x0000000000000000000000000000000000000001"});
		const uint8H5ikNoX = await DSPKSY1bSz.decimals.call({from: accounts[0]});
		const bool1uxNul = await DSPKSY1bSz.paused.call({from: accounts[2]});
		const booluja7I66 = await DSPKSY1bSz.transfer.call(addressBEDgzVp, uintr6OLEoa, {from: accounts[1]});

		await expect(DSPKSY1bSz.transferFrom.call(addressH61Mlt, addresslgbLk4M, uintGnQtroP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKLfQoUB = await DSP.new({from: accounts[0]});
		const uintNHafkcX = BigInt("1218")
		const addressxc6dasS = accounts[5]
		const addressbeerdxV = accounts[1]
		await DSPKLfQoUB.pause.call({from: accounts[3]});
		const stringPoehwz2 = await DSPKLfQoUB.name.call({from: accounts[0]});
		const boolNGZtO51 = await DSPKLfQoUB.unlock.call(addressxc6dasS, uintNHafkcX, {from: accounts[1]});
		const addressHFvruzj = await DSPKLfQoUB.notFrozen.call(addressbeerdxV, {from: accounts[4]});

		await expect(DSPKLfQoUB.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringtQPSWt8 = "9qV3HeoTrjxm891AzXYXF1zWB8Oy80AczOey"
		const stringoXg82U = "j53qddhodywr5ry2OMFgNdcVE"
		const uintsG9OSr = BigInt("218")
		const DSPlbAL4rm = await DSP.new(stringtQPSWt8, stringoXg82U, uintsG9OSr, {from: accounts[4]});
		const uintoEQNWd4 = BigInt("607")
		const addressr61V0Cf = accounts[1]
		const addressPhyhEgO = accounts[0]
		const addressqCs2Dvw = accounts[0]
		const boolbCKmPXT = await DSPlbAL4rm.transferFrom.call(addressPhyhEgO, addressr61V0Cf, uintoEQNWd4, {from: accounts[3]});
		await DSPlbAL4rm.onlyPauser.call({from: accounts[0]});
		const uint256c7eFmZL = await DSPlbAL4rm.balanceOf.call(addressqCs2Dvw, {from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPRqoQi5 = await DSP.new({from: accounts[0]});
		const uintDlytdAa = BigInt("807")
		const addressHQbfira = accounts[0]
		const uintS2fp5bJ = BigInt("1180")
		const addressz08S661 = accounts[3]
		const addressQrgw9in = accounts[0]
		const addressGha5Iyq = accounts[3]
		const uintvuPY8Au = BigInt("1866")
		const addressnZWbcK4 = accounts[0]
		const addressNx5IHgS = accounts[4]
		const addressJOLmFPu = accounts[0]
		const uintISosHaO = BigInt("896")
		const addressywMr7pz = accounts[2]
		const addressPa1Zm8 = accounts[5]
		const boolL0ScdUQ = await DSPRqoQi5.transfer.call(addressHQbfira, uintDlytdAa, {from: accounts[0]});
		const boolaVaEyu0 = await DSPRqoQi5.transferFrom.call(addressQrgw9in, addressz08S661, uintS2fp5bJ, {from: accounts[4]});
		const addressSsz3VSe = await DSPRqoQi5.upgradeTo.call(addressGha5Iyq, {from: accounts[3]});
		const booljJ6Vse5 = await DSPRqoQi5.transferFrom.call(addressNx5IHgS, addressnZWbcK4, uintvuPY8Au, {from: accounts[0]});
		const boolUJ1E0Xa = await DSPRqoQi5.isPauser.call(addressJOLmFPu, {from: "0x0000000000000000000000000000000000000001"});
		const boolsqVOlrB = await DSPRqoQi5.transferFrom.call(addressPa1Zm8, addressywMr7pz, uintISosHaO, {from: accounts[1]});

		assert.equal(boolL0ScdUQ, true)
		await expect(DSPRqoQi5.transferFrom.call(addressQrgw9in, addressz08S661, uintS2fp5bJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPArt8OX = await DSP.new({from: accounts[3]});
		const uinti99aOMZ = BigInt("1620")
		const addressDsFDrci = accounts[2]
		const addressGiZzOrD = accounts[2]
		const uintIpE71GL = BigInt("1619")
		const addressDaoIr5 = accounts[0]
		const addressUDzCpu = accounts[2]
		const addressXVIVRD9 = accounts[3]
		const stringfBMx4HD = await DSPArt8OX.symbol.call({from: accounts[1]});
		const boolFl5nFvi = await DSPArt8OX.unlock.call(addressDsFDrci, uinti99aOMZ, {from: accounts[5]});
		const addresszgBYhLK = await DSPArt8OX.notFrozen.call(addressGiZzOrD, {from: accounts[1]});
		const boolxbvMvAJ = await DSPArt8OX.mint.call(addressDaoIr5, uintIpE71GL, {from: accounts[4]});
		const uint256PZiWSpK = await DSPArt8OX.allowance.call(addressXVIVRD9, addressUDzCpu, {from: accounts[2]});

		assert.equal(stringfBMx4HD, "DSP")
		await expect(DSPArt8OX.unlock.call(addressDsFDrci, uinti99aOMZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const addressw1o2mAL = accounts[2]
		const address1YcQLh = accounts[2]
		const uintx96Alt4 = BigInt("1861")
		const addressatcv9PQ = accounts[2]
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressw1o2mAL, {from: accounts[1]});
		const addressjtMAEX8 = await DSPJgO03r.addPauser.call(address1YcQLh, {from: accounts[4]});
		const boolkUJ8YUO = await DSPJgO03r.decreaseAllowance.call(addressatcv9PQ, uintx96Alt4, {from: accounts[3]});
		await DSPJgO03r.whenNotPaused.call({from: accounts[2]});
		const stringelSigAx = await DSPJgO03r.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256baaU33U, BigInt("0"))
		await expect(DSPJgO03r.decreaseAllowance.call(addressatcv9PQ, uintx96Alt4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPVYIO3Y = await DSP.new({from: accounts[1]});
		const uintztz7y77 = BigInt("1074")
		const addressBKY3f4b = accounts[4]
		const addressplwSoC0 = accounts[0]
		const uintdpFqCVe = BigInt("569")
		const uintjU3bRiX = BigInt("1906")
		const addressKfL6dYY = accounts[4]
		const uintPBuvVkU = BigInt("1531")
		const uintL6nLSGl = BigInt("730")
		const addressI5xpigs = accounts[1]
		await DSPPVYIO3Y.renouncePauser.call({from: accounts[4]});
		const boolJFUa2ig = await DSPPVYIO3Y.transferFrom.call(addressplwSoC0, addressBKY3f4b, uintztz7y77, {from: accounts[2]});
		const uint256jHd9lzv = await DSPPVYIO3Y.totalSupply.call({from: accounts[2]});
		const boolKAqQfx = await DSPPVYIO3Y.transferWithLock.call(addressKfL6dYY, uintjU3bRiX, uintdpFqCVe, {from: accounts[4]});
		await DSPPVYIO3Y.pause.call({from: accounts[4]});
		const boolDziYYoh = await DSPPVYIO3Y.lock.call(addressI5xpigs, uintL6nLSGl, uintPBuvVkU, {from: accounts[1]});

		await expect(DSPPVYIO3Y.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPRqoQi5 = await DSP.new({from: accounts[0]});
		const uintJR5cg2P = BigInt("807")
		const addressvvRzDZZ = accounts[0]
		const uintk6XwysJ = BigInt("1180")
		const addressy6A2l6i = accounts[3]
		const addressXYnpZg8 = accounts[0]
		const addressLJGjnbh = accounts[3]
		const uintUtFYBOg = BigInt("1866")
		const addressTOxj2S9 = accounts[0]
		const addressmvZjuzO = accounts[4]
		const uintaezQHz8 = BigInt("46")
		const addressVdcfoqf = accounts[3]
		const addressxqiONrD = accounts[1]
		const uintINq40m = BigInt("896")
		const addressL7VNyRZ = accounts[2]
		const addressDkKfkss = accounts[5]
		const boolL0ScdUQ = await DSPRqoQi5.transfer.call(addressvvRzDZZ, uintJR5cg2P, {from: accounts[0]});
		await DSPRqoQi5.f.call({from: accounts[1]});
		const boolaVaEyu0 = await DSPRqoQi5.transferFrom.call(addressXYnpZg8, addressy6A2l6i, uintk6XwysJ, {from: accounts[4]});
		const addressSsz3VSe = await DSPRqoQi5.upgradeTo.call(addressLJGjnbh, {from: accounts[3]});
		const booljJ6Vse5 = await DSPRqoQi5.transferFrom.call(addressmvZjuzO, addressTOxj2S9, uintUtFYBOg, {from: accounts[0]});
		const boolnlLOK8d = await DSPRqoQi5.burnFrombyOwner.call(addressVdcfoqf, uintaezQHz8, {from: accounts[2]});
		await DSPRqoQi5.onlyPauser.call({from: accounts[4]});
		const boolUJ1E0Xa = await DSPRqoQi5.isPauser.call(addressxqiONrD, {from: "0x0000000000000000000000000000000000000001"});
		const boolsqVOlrB = await DSPRqoQi5.transferFrom.call(addressDkKfkss, addressL7VNyRZ, uintINq40m, {from: accounts[1]});

		assert.equal(boolL0ScdUQ, true)
		await expect(DSPRqoQi5.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const addressMKadR56 = accounts[1]
		const addressspfVGhU = accounts[4]
		const addressH5y4K31 = accounts[4]
		const addressEWVI4Nw = accounts[2]
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressMKadR56, {from: accounts[1]});
		const boolpE4Dl3F = await DSPJgO03r.isOwner.call(addressspfVGhU, {from: accounts[4]});
		const boolJj0Hn5 = await DSPJgO03r.unfreezeAccount.call(addressH5y4K31, {from: accounts[0]});
		const addressjtMAEX8 = await DSPJgO03r.addPauser.call(addressEWVI4Nw, {from: accounts[4]});
		await DSPJgO03r.whenNotPaused.call({from: accounts[2]});

		assert.equal(boolpE4Dl3F, true)
		assert.equal(uint256baaU33U, BigInt("0"))
		await expect(DSPJgO03r.unfreezeAccount.call(addressH5y4K31, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPRqoQi5 = await DSP.new({from: accounts[0]});
		const addressMYoCVfY = accounts[5]
		const addressZ3G1oon = accounts[1]
		const uintrrbioKf = BigInt("807")
		const addresssOYQjbN = accounts[0]
		const uintvPlIja4 = BigInt("1180")
		const addresszUW9Aps = accounts[4]
		const addressVrVZ0VR = accounts[0]
		const uintDP1VCCa = BigInt("1950")
		const addressN7YQjj = accounts[3]
		const addressQupzLN4 = accounts[3]
		const uintd314yT4 = BigInt("1866")
		const addresspDBi1qZ = accounts[0]
		const addressKlVt3hV = accounts[4]
		const address4NIeGT = accounts[2]
		const uinth62SsBB = BigInt("897")
		const address2rmWG3 = accounts[3]
		const uintCDMVs5 = BigInt("777")
		const addressm6YQApa = accounts[2]
		const uintIrQi4zC = BigInt("444")
		const addressR7MLgQ = accounts[3]
		const addressnJPNmUg = accounts[0]
		const uinttAPLLyk = BigInt("896")
		const addressHR7hvLj = accounts[2]
		const addressazuusyD = accounts[5]
		const boolpZw5y6o = await DSPRqoQi5.isOwner.call(addressMYoCVfY, {from: accounts[1]});
		const uint8Pvi6unl = await DSPRqoQi5.decimals.call({from: accounts[3]});
		const booltKXpuJ5 = await DSPRqoQi5.freezeAccount.call(addressZ3G1oon, {from: accounts[4]});
		const boolL0ScdUQ = await DSPRqoQi5.transfer.call(addresssOYQjbN, uintrrbioKf, {from: accounts[0]});
		await DSPRqoQi5.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolaVaEyu0 = await DSPRqoQi5.transferFrom.call(addressVrVZ0VR, addresszUW9Aps, uintvPlIja4, {from: accounts[4]});
		const boolATLTs1F = await DSPRqoQi5.approve.call(addressN7YQjj, uintDP1VCCa, {from: accounts[1]});
		const addressSsz3VSe = await DSPRqoQi5.upgradeTo.call(addressQupzLN4, {from: accounts[3]});
		const booljJ6Vse5 = await DSPRqoQi5.transferFrom.call(addressKlVt3hV, addresspDBi1qZ, uintd314yT4, {from: accounts[0]});
		const boolUJ1E0Xa = await DSPRqoQi5.isPauser.call(address4NIeGT, {from: "0x0000000000000000000000000000000000000001"});
		const boolZHeJXh4 = await DSPRqoQi5.increaseAllowance.call(address2rmWG3, uinth62SsBB, {from: accounts[1]});
		const boolioWmR75 = await DSPRqoQi5.paused.call({from: accounts[4]});
		const boolsPbD8D = await DSPRqoQi5.increaseAllowance.call(addressm6YQApa, uintCDMVs5, {from: accounts[1]});
		const boolnHlDDFd = await DSPRqoQi5.transferFrom.call(addressnJPNmUg, addressR7MLgQ, uintIrQi4zC, {from: accounts[2]});
		await DSPRqoQi5.renouncePauser.call({from: accounts[5]});
		const boolsqVOlrB = await DSPRqoQi5.transferFrom.call(addressazuusyD, addressHR7hvLj, uinttAPLLyk, {from: accounts[1]});

		assert.equal(boolpZw5y6o, false)
		assert.equal(uint8Pvi6unl, BigInt("18"))
		await expect(DSPRqoQi5.freezeAccount.call(addressZ3G1oon, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPQEZiKXl = await DSP.new({from: accounts[5]});
		const uintLA3411w = BigInt("152")
		const addressy3ZVykS = accounts[1]
		const uintY4CS1aw = BigInt("1771")
		const addressIUMtiu3 = accounts[2]
		const boolVV96qRL = await DSPQEZiKXl.increaseAllowance.call(addressy3ZVykS, uintLA3411w, {from: accounts[1]});
		const boolxw73G3L = await DSPQEZiKXl.mint.call(addressIUMtiu3, uintY4CS1aw, {from: accounts[3]});
		const stringpmjnpuT = await DSPQEZiKXl.name.call({from: accounts[2]});

		assert.equal(boolVV96qRL, true)
		await expect(DSPQEZiKXl.mint.call(addressIUMtiu3, uintY4CS1aw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPj6H2M9X = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressR7Eovv = accounts[1]
		const addressRlZzsiz = accounts[4]
		const addresskbcro9 = await DSPj6H2M9X.removePauser.call(addressR7Eovv, {from: accounts[1]});
		const addressJWU6bMn = await DSPj6H2M9X.upgradeTo.call(addressRlZzsiz, {from: accounts[1]});
		const stringfPr300a = await DSPj6H2M9X.name.call({from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const uintNDGQ3R4 = BigInt("465")
		const addressaK20ZPX = accounts[4]
		const addressazABNQR = accounts[3]
		const boolWlzvjcH = await DSPJgO03r.paused.call({from: accounts[2]});
		const boolDH0MFU = await DSPJgO03r.burnFrombyOwner.call(addressaK20ZPX, uintNDGQ3R4, {from: accounts[5]});
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressazABNQR, {from: accounts[1]});
		await DSPJgO03r.whenNotPaused.call({from: accounts[2]});

		assert.equal(boolWlzvjcH, false)
		await expect(DSPJgO03r.burnFrombyOwner.call(addressaK20ZPX, uintNDGQ3R4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const addressFJ89n8h = accounts[1]
		const addressG3lsKL = "0x0000000000000000000000000000000000000001"
		const addressfrUJOd = accounts[2]
		const uint256m0U04K4 = await DSPJgO03r.allowance.call(addressG3lsKL, addressFJ89n8h, {from: accounts[0]});
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressfrUJOd, {from: accounts[1]});
		await DSPJgO03r.unpause.call({from: accounts[0]});

		assert.equal(uint256baaU33U, BigInt("0"))
		assert.equal(uint256m0U04K4, BigInt("0"))
		await expect(DSPJgO03r.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPi64oEvx = await DSP.new({from: accounts[5]});
		const uintxVkCxza = BigInt("1845")
		const addressnwloYkk = accounts[4]
		const addresseCmEwWi = accounts[2]
		const stringdCQQ6mW = await DSPi64oEvx.name.call({from: accounts[4]});
		const booluvvQRs2 = await DSPi64oEvx.mint.call(addressnwloYkk, uintxVkCxza, {from: accounts[0]});
		const uint256Oi7YIj = await DSPi64oEvx.balanceOf.call(addresseCmEwWi, {from: accounts[2]});

		assert.equal(stringdCQQ6mW, "DSP")
		await expect(DSPi64oEvx.mint.call(addressnwloYkk, uintxVkCxza, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPRqoQi5 = await DSP.new({from: accounts[0]});
		const uintMGGmGtu = BigInt("1210")
		const uintEn8ySE = BigInt("300")
		const addressd6QOoCH = accounts[3]
		const uintSdiVKdb = BigInt("808")
		const addressBoKP9hY = accounts[0]
		const uintq5tHKBG = BigInt("1180")
		const addressd2ZDu2a = accounts[4]
		const addresssFXwnir = accounts[0]
		const addressNTTVOhb = accounts[3]
		const uintSAEWoCF = BigInt("1866")
		const addressHCJFaNq = accounts[0]
		const addresskraRO2B = accounts[4]
		const uintAE5vDD5 = BigInt("1006")
		const uintYKuYyod = BigInt("936")
		const address5GC1EX = accounts[4]
		const uinteqZ1Qo4 = BigInt("897")
		const addressrKszAsx = accounts[3]
		const uintcgPKjcU = BigInt("896")
		const addressqzaDCGV = accounts[2]
		const addressPIubUyr = accounts[5]
		const boolZmLJIKA = await DSPRqoQi5.lock.call(addressd6QOoCH, uintEn8ySE, uintMGGmGtu, {from: accounts[0]});
		const boolL0ScdUQ = await DSPRqoQi5.transfer.call(addressBoKP9hY, uintSdiVKdb, {from: accounts[0]});
		const boolaVaEyu0 = await DSPRqoQi5.transferFrom.call(addresssFXwnir, addressd2ZDu2a, uintq5tHKBG, {from: accounts[4]});
		const addressSsz3VSe = await DSPRqoQi5.upgradeTo.call(addressNTTVOhb, {from: accounts[3]});
		const booljJ6Vse5 = await DSPRqoQi5.transferFrom.call(addresskraRO2B, addressHCJFaNq, uintSAEWoCF, {from: accounts[0]});
		await DSPRqoQi5.whenPaused.call({from: accounts[0]});
		const boolYE1xrjI = await DSPRqoQi5.transferWithLock.call(address5GC1EX, uintYKuYyod, uintAE5vDD5, {from: accounts[4]});
		const boolZHeJXh4 = await DSPRqoQi5.increaseAllowance.call(addressrKszAsx, uinteqZ1Qo4, {from: accounts[1]});
		const stringWbe4Bz = await DSPRqoQi5.symbol.call({from: accounts[4]});
		await DSPRqoQi5.renouncePauser.call({from: accounts[5]});
		const boolsqVOlrB = await DSPRqoQi5.transferFrom.call(addressPIubUyr, addressqzaDCGV, uintcgPKjcU, {from: accounts[1]});

		await expect(DSPRqoQi5.lock.call(addressd6QOoCH, uintEn8ySE, uintMGGmGtu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const uintEM0v2Lr = BigInt("156")
		const addressBq9n5tj = accounts[0]
		const uintmCeNzb = BigInt("290")
		const uintVQwayIs = BigInt("1944")
		const addressnJqg9Xv = accounts[4]
		const addressgJ0pLzi = accounts[4]
		const addressqVTwQL5 = accounts[2]
		const uintF0p6gGG = BigInt("899")
		const addressbfZo7zp = accounts[3]
		const addressmCyVJ2Y = accounts[5]
		const addressaNGypt = accounts[1]
		const booleutel59 = await DSPJgO03r.transfer.call(addressBq9n5tj, uintEM0v2Lr, {from: accounts[4]});
		const boolChCNBNH = await DSPJgO03r.transferWithLock.call(addressnJqg9Xv, uintVQwayIs, uintmCeNzb, {from: accounts[4]});
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressgJ0pLzi, {from: accounts[1]});
		const uint256IPCNvEQ = await DSPJgO03r.balanceOf.call(addressqVTwQL5, {from: accounts[2]});
		const boolljpS3p = await DSPJgO03r.transferFrom.call(addressmCyVJ2Y, addressbfZo7zp, uintF0p6gGG, {from: accounts[1]});
		const address7lwQaP = await DSPJgO03r.transferOwnership.call(addressaNGypt, {from: accounts[4]});
		const uint8vQCuK4x = await DSPJgO03r.decimals.call({from: accounts[5]});
		await DSPJgO03r.whenNotPaused.call({from: accounts[2]});

		assert.equal(boolChCNBNH, true)
		assert.equal(booleutel59, true)
		assert.equal(uint256IPCNvEQ, BigInt("0"))
		assert.equal(uint256baaU33U, BigInt("100000000000000000000000000000"))
		await expect(DSPJgO03r.transferFrom.call(addressmCyVJ2Y, addressbfZo7zp, uintF0p6gGG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const addressuJdMS9l = accounts[2]
		const addressjW96NE6 = accounts[3]
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressuJdMS9l, {from: accounts[1]});
		const uint256fvyiC9 = await DSPJgO03r.totalSupply.call({from: accounts[4]});
		const uint256cDXF2n0 = await DSPJgO03r.balanceOf.call(addressjW96NE6, {from: accounts[4]});

		assert.equal(uint256baaU33U, BigInt("0"))
		assert.equal(uint256cDXF2n0, BigInt("0"))
		assert.equal(uint256fvyiC9, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const addressCjjlJYw = accounts[2]
		const addresstBzt9ov = accounts[0]
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressCjjlJYw, {from: accounts[1]});
		const addressGGZdjad = await DSPJgO03r.transferOwnership.call(addresstBzt9ov, {from: accounts[4]});

		assert.equal(uint256baaU33U, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const uintdXNRodH = BigInt("156")
		const addressOf09vQ2 = accounts[0]
		const addressnJcpzGz = accounts[5]
		const uintqCwcjlw = BigInt("32")
		const addressqwUFfPZ = "0x0000000000000000000000000000000000000001"
		const addressU11oOYJ = accounts[3]
		const addressnY3GeIK = accounts[3]
		const addressS6sf4t = accounts[3]
		const uintKgjYOFf = BigInt("899")
		const addressjR5dEuO = accounts[3]
		const addressMtPpSSw = accounts[5]
		const uintTh7RACg = BigInt("1155")
		const addressiVWyEds = accounts[2]
		const addresscx0SWMt = accounts[1]
		const booleutel59 = await DSPJgO03r.transfer.call(addressOf09vQ2, uintdXNRodH, {from: accounts[4]});
		const uint256fcMvk2b = await DSPJgO03r.balanceOf.call(addressnJcpzGz, {from: accounts[1]});
		const boolUt27y54 = await DSPJgO03r.approve.call(addressqwUFfPZ, uintqCwcjlw, {from: accounts[2]});
		const boollVWp0Rg = await DSPJgO03r.freezeAccount.call(addressU11oOYJ, {from: accounts[1]});
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressnY3GeIK, {from: accounts[1]});
		const uint256IPCNvEQ = await DSPJgO03r.balanceOf.call(addressS6sf4t, {from: accounts[2]});
		const boolljpS3p = await DSPJgO03r.transferFrom.call(addressMtPpSSw, addressjR5dEuO, uintKgjYOFf, {from: accounts[1]});
		const boolp6cB92 = await DSPJgO03r.unlock.call(addressiVWyEds, uintTh7RACg, {from: accounts[0]});
		const address7lwQaP = await DSPJgO03r.transferOwnership.call(addresscx0SWMt, {from: accounts[4]});
		const string7Q4EZB = await DSPJgO03r.symbol.call({from: accounts[1]});
		await DSPJgO03r.whenNotPaused.call({from: accounts[2]});

		assert.equal(boolUt27y54, true)
		assert.equal(booleutel59, true)
		assert.equal(uint256fcMvk2b, BigInt("0"))
		await expect(DSPJgO03r.freezeAccount.call(addressU11oOYJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const uintRxTy2FO = BigInt("156")
		const addressUb389F = accounts[0]
		const addressMDJOruh = accounts[3]
		const addressYxOz3Dr = accounts[3]
		const uintkF4GqDm = BigInt("789")
		const addressXGHbOcz = accounts[2]
		const uintzeG4B7F = BigInt("899")
		const addressZw1oQK = accounts[3]
		const addressRhXfasH = accounts[5]
		const booleutel59 = await DSPJgO03r.transfer.call(addressUb389F, uintRxTy2FO, {from: accounts[4]});
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressMDJOruh, {from: accounts[1]});
		const uint256IPCNvEQ = await DSPJgO03r.balanceOf.call(addressYxOz3Dr, {from: accounts[2]});
		const boolCixQXMI = await DSPJgO03r.mint.call(addressXGHbOcz, uintkF4GqDm, {from: accounts[4]});
		const boolljpS3p = await DSPJgO03r.transferFrom.call(addressRhXfasH, addressZw1oQK, uintzeG4B7F, {from: accounts[1]});
		await DSPJgO03r.whenNotPaused.call({from: accounts[2]});
		const stringwgarvuQ = await DSPJgO03r.symbol.call({from: accounts[0]});

		assert.equal(boolCixQXMI, true)
		assert.equal(booleutel59, true)
		assert.equal(uint256IPCNvEQ, BigInt("0"))
		assert.equal(uint256baaU33U, BigInt("0"))
		await expect(DSPJgO03r.transferFrom.call(addressRhXfasH, addressZw1oQK, uintzeG4B7F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPVYIO3Y = await DSP.new({from: accounts[1]});
		const uintWDcklrH = BigInt("1891")
		const addresskTQAekY = "0x0000000000000000000000000000000000000001"
		await DSPPVYIO3Y.pause.call({from: accounts[1]});
		const booldTRzgBg = await DSPPVYIO3Y.transfer.call(addresskTQAekY, uintWDcklrH, {from: accounts[2]});
		await DSPPVYIO3Y.onlyNewOwner.call({from: accounts[5]});

		await expect(DSPPVYIO3Y.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const uintK5Ay2S = BigInt("156")
		const addressvrkftlc = accounts[0]
		const addressplE0tLA = accounts[3]
		const addressTtTJdZh = accounts[3]
		const addressycJNk56 = accounts[2]
		const uintYxGt6q3 = BigInt("899")
		const addresseRlUz1m = accounts[3]
		const addressMFqMY3j = accounts[5]
		const addressd21MHh = accounts[1]
		const booleutel59 = await DSPJgO03r.transfer.call(addressvrkftlc, uintK5Ay2S, {from: accounts[4]});
		const addressiFCdLv = await DSPJgO03r.upgradeTo.call(addressplE0tLA, {from: accounts[4]});
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressTtTJdZh, {from: accounts[1]});
		const uint256IPCNvEQ = await DSPJgO03r.balanceOf.call(addressycJNk56, {from: accounts[2]});
		const boolljpS3p = await DSPJgO03r.transferFrom.call(addressMFqMY3j, addresseRlUz1m, uintYxGt6q3, {from: accounts[1]});
		const address7lwQaP = await DSPJgO03r.transferOwnership.call(addressd21MHh, {from: accounts[4]});
		await DSPJgO03r.whenNotPaused.call({from: accounts[2]});

		assert.equal(booleutel59, true)
		assert.equal(uint256IPCNvEQ, BigInt("0"))
		assert.equal(uint256baaU33U, BigInt("0"))
		await expect(DSPJgO03r.transferFrom.call(addressMFqMY3j, addresseRlUz1m, uintYxGt6q3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPJgO03r = await DSP.new({from: accounts[4]});
		const addressPcOJN9o = accounts[4]
		const addressqc134tD = accounts[1]
		const boolPaGBED = await DSPJgO03r.freezeAccount.call(addressPcOJN9o, {from: accounts[4]});
		const uint256baaU33U = await DSPJgO03r.balanceOf.call(addressqc134tD, {from: accounts[1]});

		assert.equal(boolPaGBED, true)
		assert.equal(uint256baaU33U, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPcnggUrN = await DSP.new({from: accounts[1]});
		const addressO9Jy6xy = accounts[1]
		const addresspTX2GHw = await DSPcnggUrN.removePauser.call(addressO9Jy6xy, {from: accounts[1]});
		const boolXorH4EU = await DSPcnggUrN.acceptOwnership.call({from: accounts[4]});
		await DSPcnggUrN.onlyPauser.call({from: accounts[2]});
		const stringvt7SV2 = await DSPcnggUrN.symbol.call({from: accounts[0]});
		const uint256cPZ6GmW = await DSPcnggUrN.totalSupply.call({from: accounts[2]});

		await expect(DSPcnggUrN.acceptOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})