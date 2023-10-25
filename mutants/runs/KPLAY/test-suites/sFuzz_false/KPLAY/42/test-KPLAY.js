const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYPPbbvi = await KPLAY.new({from: accounts[4]});
		const uintBalNIBa = BigInt("1151")
		const addressV0yErQn = accounts[1]
		const addressCZIBpLa = accounts[1]
		const uintVUiEg7X = BigInt("1656")
		const addresst8kytK5 = accounts[0]
		const boolu2RqBdL = await KPLAYPPbbvi.approve.call(addressV0yErQn, uintBalNIBa, {from: accounts[5]});
		await KPLAYPPbbvi.onlyOwner.call({from: accounts[4]});
		const addressp6zVZej = await KPLAYPPbbvi.freeze.call(addressCZIBpLa, {from: accounts[2]});
		const addressqdrQ69 = await KPLAYPPbbvi.unlock.call(addresst8kytK5, uintVUiEg7X, {from: accounts[3]});
		await KPLAYPPbbvi.whenNotFrozen.call({from: accounts[4]});
		const uint256HLb6ZiW = await KPLAYPPbbvi.currentTime.call({from: accounts[2]});

		assert.equal(boolu2RqBdL, true)
		await expect(KPLAYPPbbvi.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBm3WQHe = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdOVLf5v = BigInt("21")
		const addressB3F6Zyi = accounts[4]
		const uintQvd2Rww = BigInt("1819")
		const addressy2wOjxj = accounts[5]
		const uintRhLGPs0 = BigInt("201")
		const addressDrzYjyy = accounts[3]
		const addressUVo0Bip = accounts[3]
		const boolfQ4UNyK = await KPLAYBm3WQHe.approve.call(addressB3F6Zyi, uintdOVLf5v, {from: accounts[4]});
		const boolC1CfHx4 = await KPLAYBm3WQHe.transfer.call(addressy2wOjxj, uintQvd2Rww, {from: accounts[1]});
		await KPLAYBm3WQHe.unpause.call({from: accounts[0]});
		const boolvkKXSYn = await KPLAYBm3WQHe.transferFrom.call(addressUVo0Bip, addressDrzYjyy, uintRhLGPs0, {from: accounts[2]});
	});

	it('test for KPLAY', async () => {
		const KPLAYbyJtlGZ = await KPLAY.new({from: accounts[4]});
		const addressFfazaDF = accounts[4]
		const uintQUfUZVP = BigInt("1113")
		const addressWzEvDVT = "0x0000000000000000000000000000000000000001"
		const addresszeD2igT = accounts[1]
		const addressFFXX8fH = accounts[0]
		const addressFa6InDM = accounts[2]
		const uint256dOAGifQ = await KPLAYbyJtlGZ.lockCount.call(addressFfazaDF, {from: accounts[1]});
		const addresswjlMDNK = await KPLAYbyJtlGZ.burn.call(addressWzEvDVT, uintQUfUZVP, {from: accounts[3]});
		const uint256GvXeM05 = await KPLAYbyJtlGZ.balanceOf.call(addresszeD2igT, {from: accounts[3]});
		const uint256Tw4zlDz = await KPLAYbyJtlGZ.allowance.call(addressFa6InDM, addressFFXX8fH, {from: accounts[1]});

		assert.equal(uint256dOAGifQ, BigInt("0"))
		await expect(KPLAYbyJtlGZ.burn.call(addressWzEvDVT, uintQUfUZVP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNvETKqp = await KPLAY.new({from: accounts[2]});
		const uintSpHcURA = BigInt("126")
		const addresse6zvwGj = accounts[3]
		const addressa5jg6Kz = accounts[4]
		const uintwQ7IJXs = BigInt("1817")
		const uintWNrybqj = BigInt("1470")
		const addressPYMnvJp = "0x0000000000000000000000000000000000000001"
		const addressxO81anF = accounts[2]
		const addresswj35gUg = accounts[1]
		const uintgLBDoTG = BigInt("295")
		const addressMyvcmQq = accounts[3]
		const boolzUsVzEc = await KPLAYNvETKqp.transferFrom.call(addressa5jg6Kz, addresse6zvwGj, uintSpHcURA, {from: "0x0000000000000000000000000000000000000001"});
		const boolwJz5IcM = await KPLAYNvETKqp.transferWithLock.call(addressPYMnvJp, uintWNrybqj, uintwQ7IJXs, {from: accounts[0]});
		const uint256pcF3MvC = await KPLAYNvETKqp.allowance.call(addresswj35gUg, addressxO81anF, {from: accounts[2]});
		const bool5wHdOl = await KPLAYNvETKqp.decreaseAllowance.call(addressMyvcmQq, uintgLBDoTG, {from: accounts[1]});
		await KPLAYNvETKqp.pause.call({from: accounts[0]});

		await expect(KPLAYNvETKqp.transferFrom.call(addressa5jg6Kz, addresse6zvwGj, uintSpHcURA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYm5j2Je0 = await KPLAY.new({from: accounts[3]});
		const uintgwD3ti = BigInt("1897")
		const addressSbMUe54 = accounts[4]
		const uintkSNpo9I = BigInt("381")
		const uintDvBdb9O = BigInt("1611")
		const addressZSJToN = accounts[3]
		await KPLAYm5j2Je0.lockState.call(addressSbMUe54, uintgwD3ti, {from: accounts[1]});
		const boolySSHy57 = await KPLAYm5j2Je0.transferWithLockAfter.call(addressZSJToN, uintDvBdb9O, uintkSNpo9I, {from: accounts[4]});
		await KPLAYm5j2Je0.pause.call({from: accounts[1]});
		await KPLAYm5j2Je0.pause.call({from: accounts[5]});

		await expect(KPLAYm5j2Je0.lockState.call(addressSbMUe54, uintgwD3ti, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addressjkUzTqq = accounts[1]
		const uintApisYWR = BigInt("1218")
		const addressCFoOooE = accounts[4]
		const uinthNLYF9c = BigInt("1579")
		const uintH7Ffp8q = BigInt("1592")
		const addresslYeDHUE = accounts[3]
		const uintucXoYKi = BigInt("1430")
		const addressX7LbPhf = accounts[0]
		const uint256kYVCIjO = await KPLAYGGg8VSI.balanceOf.call(addressjkUzTqq, {from: accounts[3]});
		await KPLAYGGg8VSI.pause.call({from: accounts[0]});
		const boolX0a52Di = await KPLAYGGg8VSI.increaseAllowance.call(addressCFoOooE, uintApisYWR, {from: accounts[4]});
		const addressQNCkkt = await KPLAYGGg8VSI.lock.call(addresslYeDHUE, uintH7Ffp8q, uinthNLYF9c, {from: accounts[0]});
		await KPLAYGGg8VSI.lockState.call(addressX7LbPhf, uintucXoYKi, {from: accounts[0]});

		assert.equal(uint256kYVCIjO, BigInt("0"))
		await expect(KPLAYGGg8VSI.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addressj3Sk4L = accounts[1]
		const addressnjU86fQ = accounts[5]
		const addressz59jml = accounts[1]
		const uintIfHyMod = BigInt("1432")
		const addressVEsWeFB = accounts[2]
		const addressGSTflro = accounts[3]
		const uintcLEflW = BigInt("1218")
		const addressjkPTEtL = accounts[4]
		const uintwDNlZ2 = BigInt("1598")
		const uintmrVMLzW = BigInt("1592")
		const addressFcJSkU = accounts[3]
		const uintR7c7xs = BigInt("1430")
		const addressBM6tOOB = accounts[0]
		const uint256kYVCIjO = await KPLAYGGg8VSI.balanceOf.call(addressj3Sk4L, {from: accounts[3]});
		const uint256OJM83p6 = await KPLAYGGg8VSI.allowance.call(addressz59jml, addressnjU86fQ, {from: accounts[5]});
		await KPLAYGGg8VSI.pause.call({from: accounts[0]});
		const boolpktrOTh = await KPLAYGGg8VSI.transferFrom.call(addressGSTflro, addressVEsWeFB, uintIfHyMod, {from: accounts[3]});
		const boolX0a52Di = await KPLAYGGg8VSI.increaseAllowance.call(addressjkPTEtL, uintcLEflW, {from: accounts[4]});
		const addressQNCkkt = await KPLAYGGg8VSI.lock.call(addressFcJSkU, uintmrVMLzW, uintwDNlZ2, {from: accounts[0]});
		await KPLAYGGg8VSI.lockState.call(addressBM6tOOB, uintR7c7xs, {from: accounts[0]});

		assert.equal(uint256OJM83p6, BigInt("0"))
		assert.equal(uint256kYVCIjO, BigInt("0"))
		await expect(KPLAYGGg8VSI.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYQLh4Ebz = await KPLAY.new({from: accounts[3]});
		const uintYm9aEuO = BigInt("3")
		const addressPgL4end = accounts[1]
		const addressfgWH5Z = accounts[1]
		const uintz0EK1pz = BigInt("1727")
		const address7bfSyb = "0x0000000000000000000000000000000000000001"
		const addressOLNWltR = accounts[4]
		const uint256Mqxq9u = await KPLAYQLh4Ebz.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const boolDRLWZNR = await KPLAYQLh4Ebz.approve.call(addressPgL4end, uintYm9aEuO, {from: "0x0000000000000000000000000000000000000001"});
		const addressBHtPh4y = await KPLAYQLh4Ebz.transferOwnership.call(addressfgWH5Z, {from: accounts[0]});
		const boolC6AzTC5 = await KPLAYQLh4Ebz.transferFrom.call(addressOLNWltR, address7bfSyb, uintz0EK1pz, {from: accounts[3]});

		assert.equal(boolDRLWZNR, true)
		assert.equal(uint256Mqxq9u, BigInt("1630228086"))
		await expect(KPLAYQLh4Ebz.transferOwnership.call(addressfgWH5Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNvETKqp = await KPLAY.new({from: accounts[2]});
		const uintHZ7Goc4 = BigInt("1647")
		const addressZuJ6UW = accounts[0]
		const uint5Yb0jT = BigInt("1268")
		const addressdxDBig = accounts[3]
		const addressr8Zzacq = accounts[5]
		const uintLiUuJeB = BigInt("126")
		const address3lFvtn = accounts[3]
		const addressahJwJJ1 = accounts[4]
		const uint2bAmyS = BigInt("1817")
		const uintCZiOtXq = BigInt("1470")
		const addressZOMLjJ = "0x0000000000000000000000000000000000000001"
		const addressvv7E4by = accounts[3]
		const addresskXiiV6E = accounts[3]
		const addressaabwnzb = accounts[1]
		const uintUh2vRuV = BigInt("65")
		const uintFi8YgDT = BigInt("1954")
		const addressRQXpnw6 = "0x0000000000000000000000000000000000000001"
		const boolxyiC6f4 = await KPLAYNvETKqp.increaseAllowance.call(addressZuJ6UW, uintHZ7Goc4, {from: accounts[1]});
		await KPLAYNvETKqp.unpause.call({from: accounts[2]});
		const boolZThoyzK = await KPLAYNvETKqp.transferFrom.call(addressr8Zzacq, addressdxDBig, uint5Yb0jT, {from: accounts[3]});
		const boolzUsVzEc = await KPLAYNvETKqp.transferFrom.call(addressahJwJJ1, address3lFvtn, uintLiUuJeB, {from: "0x0000000000000000000000000000000000000001"});
		const boolwJz5IcM = await KPLAYNvETKqp.transferWithLock.call(addressZOMLjJ, uintCZiOtXq, uint2bAmyS, {from: accounts[0]});
		const addressMALG3kq = await KPLAYNvETKqp.unfreeze.call(addressvv7E4by, {from: accounts[4]});
		const uint256pcF3MvC = await KPLAYNvETKqp.allowance.call(addressaabwnzb, addresskXiiV6E, {from: accounts[2]});
		await KPLAYNvETKqp.pause.call({from: accounts[0]});
		const addressnG7qeiI = await KPLAYNvETKqp.lockAfter.call(addressRQXpnw6, uintFi8YgDT, uintUh2vRuV, {from: accounts[0]});

		assert.equal(boolxyiC6f4, true)
		await expect(KPLAYNvETKqp.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJkuD8e0 = await KPLAY.new({from: accounts[3]});
		const uintKgmJjm3 = BigInt("1453")
		const uintvlOiCT6 = BigInt("1574")
		const addressc25Flx6 = accounts[5]
		const uintumx93H5 = BigInt("192")
		const addresslyk9Y92 = accounts[1]
		const addressgqr1l73 = accounts[4]
		const addressXmUPYV8 = "0x0000000000000000000000000000000000000001"
		const uint256iCguh0z = await KPLAYJkuD8e0.totalSupply.call({from: accounts[2]});
		const boolNqv6T2z = await KPLAYJkuD8e0.transferWithLock.call(addressc25Flx6, uintvlOiCT6, uintKgmJjm3, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYJkuD8e0.renounceOwnership.call({from: accounts[2]});
		const addressMyM9O9 = await KPLAYJkuD8e0.burn.call(addresslyk9Y92, uintumx93H5, {from: accounts[3]});
		const uint256l8sQITT = await KPLAYJkuD8e0.allowance.call(addressXmUPYV8, addressgqr1l73, {from: accounts[0]});

		assert.equal(uint256iCguh0z, BigInt("10000000000000000"))
		await expect(KPLAYJkuD8e0.transferWithLock.call(addressc25Flx6, uintvlOiCT6, uintKgmJjm3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNvETKqp = await KPLAY.new({from: accounts[2]});
		const uintMD9UmXz = BigInt("515")
		const uintkbt8OlF = BigInt("463")
		const addresseHook3j = accounts[5]
		const uint4UxfIw = BigInt("126")
		const addresscT1MhsM = accounts[3]
		const addressDsjngm0 = accounts[4]
		const uintNeybqgM = BigInt("1861")
		const uintzGyc6uY = BigInt("1470")
		const addressh2kNwx1 = "0x0000000000000000000000000000000000000001"
		const uinte6smyBH = BigInt("1583")
		const uintDMKKzbj = BigInt("1079")
		const addressZSBcEiU = accounts[3]
		const addresswQcKBR3 = accounts[2]
		const addressD3vi0e1 = accounts[1]
		const boolGyZVE5u = await KPLAYNvETKqp.transferWithLock.call(addresseHook3j, uintkbt8OlF, uintMD9UmXz, {from: accounts[2]});
		const boolzUsVzEc = await KPLAYNvETKqp.transferFrom.call(addressDsjngm0, addresscT1MhsM, uint4UxfIw, {from: "0x0000000000000000000000000000000000000001"});
		const boolwJz5IcM = await KPLAYNvETKqp.transferWithLock.call(addressh2kNwx1, uintzGyc6uY, uintNeybqgM, {from: accounts[0]});
		const boolDJYxf36 = await KPLAYNvETKqp.transferWithLock.call(addressZSBcEiU, uintDMKKzbj, uinte6smyBH, {from: accounts[5]});
		const uint256pcF3MvC = await KPLAYNvETKqp.allowance.call(addressD3vi0e1, addresswQcKBR3, {from: accounts[2]});
		await KPLAYNvETKqp.unpause.call({from: accounts[3]});
		const uint256yccmoHT = await KPLAYNvETKqp.currentTime.call({from: accounts[5]});
		await KPLAYNvETKqp.pause.call({from: accounts[0]});

		assert.equal(boolGyZVE5u, true)
		await expect(KPLAYNvETKqp.transferFrom.call(addressDsjngm0, addresscT1MhsM, uint4UxfIw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addressJ4XQxJX = accounts[2]
		const uintn9HeN3r = BigInt("1638")
		const addresszrdXZlJ = accounts[4]
		const uintbcmgKop = BigInt("1218")
		const addressd6gl5M = accounts[4]
		const addressnBhGqNH = accounts[1]
		const uintYZuwTox = BigInt("1418")
		const addressvh40gKV = accounts[0]
		const uint256kYVCIjO = await KPLAYGGg8VSI.balanceOf.call(addressJ4XQxJX, {from: accounts[3]});
		const addressHFifWf = await KPLAYGGg8VSI.burn.call(addresszrdXZlJ, uintn9HeN3r, {from: accounts[2]});
		const boolX0a52Di = await KPLAYGGg8VSI.increaseAllowance.call(addressd6gl5M, uintbcmgKop, {from: accounts[4]});
		const uint256Hjujazx = await KPLAYGGg8VSI.currentTime.call({from: accounts[2]});
		const uint256nDskcHJ = await KPLAYGGg8VSI.balanceOf.call(addressnBhGqNH, {from: accounts[0]});
		await KPLAYGGg8VSI.lockState.call(addressvh40gKV, uintYZuwTox, {from: accounts[0]});

		assert.equal(uint256kYVCIjO, BigInt("10000000000000000"))
		await expect(KPLAYGGg8VSI.burn.call(addresszrdXZlJ, uintn9HeN3r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addresscDxCl31 = accounts[2]
		const uintGquJgX = BigInt("969")
		const addressV8uvMBD = accounts[1]
		const uintJTzEOsK = BigInt("1218")
		const addressfrrC39 = accounts[4]
		const uintt2pDXo4 = BigInt("1430")
		const addressJIUIa83 = accounts[0]
		const uint256kYVCIjO = await KPLAYGGg8VSI.balanceOf.call(addresscDxCl31, {from: accounts[3]});
		const bool8BYPTZ = await KPLAYGGg8VSI.transfer.call(addressV8uvMBD, uintGquJgX, {from: accounts[0]});
		const boolX0a52Di = await KPLAYGGg8VSI.increaseAllowance.call(addressfrrC39, uintJTzEOsK, {from: accounts[4]});
		await KPLAYGGg8VSI.lockState.call(addressJIUIa83, uintt2pDXo4, {from: accounts[0]});

		assert.equal(uint256kYVCIjO, BigInt("10000000000000000"))
		await expect(KPLAYGGg8VSI.transfer.call(addressV8uvMBD, uintGquJgX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addressv0KNHoL = accounts[3]
		const uintltPm5Zx = BigInt("468")
		const uintsvwapnY = BigInt("1264")
		const addressfajJwNq = accounts[4]
		const uint256kYVCIjO = await KPLAYGGg8VSI.balanceOf.call(addressv0KNHoL, {from: accounts[3]});
		const uint256v3JMc9e = await KPLAYGGg8VSI.afterTime.call(uintltPm5Zx, {from: accounts[4]});
		const boolX0a52Di = await KPLAYGGg8VSI.increaseAllowance.call(addressfajJwNq, uintsvwapnY, {from: accounts[4]});

		assert.equal(boolX0a52Di, true)
		assert.equal(uint256kYVCIjO, BigInt("0"))
		assert.equal(uint256v3JMc9e, BigInt("1630228545"))
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addressRGaaYSv = accounts[0]
		const uintwFjSxuf = BigInt("1255")
		const addresshMI0Fb = accounts[4]
		const booldCMxFz3 = await KPLAYGGg8VSI.isFrozen.call(addressRGaaYSv, {from: "0x0000000000000000000000000000000000000001"});
		const boolX0a52Di = await KPLAYGGg8VSI.increaseAllowance.call(addresshMI0Fb, uintwFjSxuf, {from: accounts[4]});

		assert.equal(boolX0a52Di, true)
		assert.equal(booldCMxFz3, false)
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addressZz80LrK = accounts[3]
		const uintwAoA8x3 = BigInt("1005")
		const uintK3E0KhI = BigInt("990")
		const addressAlnDbHl = accounts[0]
		const uint256kYVCIjO = await KPLAYGGg8VSI.balanceOf.call(addressZz80LrK, {from: accounts[3]});
		const boolOoeJAuc = await KPLAYGGg8VSI.transferWithLockAfter.call(addressAlnDbHl, uintK3E0KhI, uintwAoA8x3, {from: accounts[2]});

		assert.equal(boolOoeJAuc, true)
		assert.equal(uint256kYVCIjO, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const uintNrk4ACv = BigInt("1609")
		const addressf7axk0B = "0x0000000000000000000000000000000000000001"
		const uintvl0enTm = BigInt("1264")
		const addressgVuwwes = accounts[4]
		const uintlOqVDS = BigInt("111")
		const addresssuWm8V = "0x0000000000000000000000000000000000000001"
		const boolALCjpcC = await KPLAYGGg8VSI.transfer.call(addressf7axk0B, uintNrk4ACv, {from: accounts[2]});
		const boolX0a52Di = await KPLAYGGg8VSI.increaseAllowance.call(addressgVuwwes, uintvl0enTm, {from: accounts[4]});
		const addresskZEII3S = await KPLAYGGg8VSI.unlock.call(addresssuWm8V, uintlOqVDS, {from: accounts[2]});

		assert.equal(boolALCjpcC, true)
		assert.equal(boolX0a52Di, true)
		await expect(KPLAYGGg8VSI.unlock.call(addresssuWm8V, uintlOqVDS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addressaOUjC5g = accounts[3]
		const uint256kYVCIjO = await KPLAYGGg8VSI.balanceOf.call(addressaOUjC5g, {from: accounts[3]});
		await KPLAYGGg8VSI.pause.call({from: accounts[2]});

		assert.equal(uint256kYVCIjO, BigInt("0"))
		await expect(KPLAYGGg8VSI.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCLy1MMi = await KPLAY.new({from: accounts[2]});
		const uintSo6ie98 = BigInt("1583")
		const addressqoaW0Dy = accounts[0]
		const uintL7iLHlN = BigInt("300")
		const addresspPjUVIN = accounts[4]
		const addressnES3yv = accounts[3]
		const uintRqsuIcH = BigInt("1647")
		const addressgqj9riW = accounts[0]
		const boolz8qsFw = await KPLAYCLy1MMi.decreaseAllowance.call(addressqoaW0Dy, uintSo6ie98, {from: accounts[3]});
		const boolWsFp4PU = await KPLAYCLy1MMi.transferFrom.call(addressnES3yv, addresspPjUVIN, uintL7iLHlN, {from: accounts[3]});
		const boolI897rnr = await KPLAYCLy1MMi.increaseAllowance.call(addressgqj9riW, uintRqsuIcH, {from: accounts[1]});

		await expect(KPLAYCLy1MMi.decreaseAllowance.call(addressqoaW0Dy, uintSo6ie98, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCLy1MMi = await KPLAY.new({from: accounts[2]});
		const addressA6HheSO = accounts[0]
		const uintWRoGlDb = BigInt("1026")
		const addressQWN2Ojb = accounts[3]
		const uinto1Y2GXV = BigInt("333")
		const addresszVPfZK4 = accounts[4]
		const address35cfes = accounts[3]
		const uintDi6b8qK = BigInt("983")
		const addressGb5j6pT = accounts[4]
		const addressQlyg4Ma = await KPLAYCLy1MMi.freeze.call(addressA6HheSO, {from: accounts[2]});
		await KPLAYCLy1MMi.unpause.call({from: accounts[0]});
		const addressiSZpp5V = await KPLAYCLy1MMi.unlock.call(addressQWN2Ojb, uintWRoGlDb, {from: accounts[2]});
		const boolWsFp4PU = await KPLAYCLy1MMi.transferFrom.call(address35cfes, addresszVPfZK4, uinto1Y2GXV, {from: accounts[3]});
		const boolEPIIpMh = await KPLAYCLy1MMi.transfer.call(addressGb5j6pT, uintDi6b8qK, {from: accounts[2]});

		await expect(KPLAYCLy1MMi.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addressXRtep7H = accounts[1]
		const addresskDOm39 = accounts[4]
		const uintlVM7IUv = BigInt("931")
		const uintWrMilne = BigInt("525")
		const addressPNkEzZv = "0x0000000000000000000000000000000000000001"
		const addressLqwfVkO = accounts[3]
		const uint256OceHg0C = await KPLAYGGg8VSI.allowance.call(addresskDOm39, addressXRtep7H, {from: accounts[3]});
		const addressxtfNZL5 = await KPLAYGGg8VSI.lock.call(addressPNkEzZv, uintWrMilne, uintlVM7IUv, {from: accounts[2]});
		const uint256kYVCIjO = await KPLAYGGg8VSI.balanceOf.call(addressLqwfVkO, {from: accounts[3]});

		assert.equal(uint256OceHg0C, BigInt("0"))
		await expect(KPLAYGGg8VSI.lock.call(addressPNkEzZv, uintWrMilne, uintlVM7IUv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCLy1MMi = await KPLAY.new({from: accounts[2]});
		const uintrIK3orl = BigInt("1187")
		const uintloAYgvk = BigInt("1646")
		const addressMi2d5Rd = accounts[3]
		const uintOF24M9 = BigInt("333")
		const addressEbtY3rm = accounts[4]
		const addressNp7t3CA = accounts[3]
		const addressvcN8wOk = await KPLAYCLy1MMi.lockAfter.call(addressMi2d5Rd, uintloAYgvk, uintrIK3orl, {from: accounts[2]});
		const boolWsFp4PU = await KPLAYCLy1MMi.transferFrom.call(addressNp7t3CA, addressEbtY3rm, uintOF24M9, {from: accounts[3]});

		await expect(KPLAYCLy1MMi.lockAfter.call(addressMi2d5Rd, uintloAYgvk, uintrIK3orl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCLy1MMi = await KPLAY.new({from: accounts[2]});
		const addresszVMVxcQ = accounts[4]
		const uintGu2IAtd = BigInt("333")
		const addresszsoc0ZL = accounts[5]
		const addressG9uGkDH = accounts[3]
		const addressyjCJOrv = await KPLAYCLy1MMi.transferOwnership.call(addresszVMVxcQ, {from: accounts[2]});
		const boolWsFp4PU = await KPLAYCLy1MMi.transferFrom.call(addressG9uGkDH, addresszsoc0ZL, uintGu2IAtd, {from: accounts[3]});

		await expect(KPLAYCLy1MMi.transferFrom.call(addressG9uGkDH, addresszsoc0ZL, uintGu2IAtd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCLy1MMi = await KPLAY.new({from: accounts[2]});
		const addressvmTIXIa = accounts[1]
		const uintGMRV7tz = BigInt("333")
		const addresstQNdvFu = accounts[4]
		const addresse6XHP4b = accounts[3]
		const uintpYBFvQb = BigInt("1938")
		const addresssawUMqB = accounts[4]
		const addressW9twxpF = accounts[4]
		const addressxh0gSI = await KPLAYCLy1MMi.unfreeze.call(addressvmTIXIa, {from: accounts[2]});
		const boolWsFp4PU = await KPLAYCLy1MMi.transferFrom.call(addresse6XHP4b, addresstQNdvFu, uintGMRV7tz, {from: accounts[3]});
		const booli00gFs3 = await KPLAYCLy1MMi.transferFrom.call(addressW9twxpF, addresssawUMqB, uintpYBFvQb, {from: accounts[2]});

		await expect(KPLAYCLy1MMi.transferFrom.call(addresse6XHP4b, addresstQNdvFu, uintGMRV7tz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGGg8VSI = await KPLAY.new({from: accounts[2]});
		const addressqkvpcDl = accounts[3]
		const uintaLVuU43 = BigInt("552")
		const addressjpjF0JJ = accounts[2]
		const uint256kYVCIjO = await KPLAYGGg8VSI.balanceOf.call(addressqkvpcDl, {from: accounts[3]});
		const boola02NEEJ = await KPLAYGGg8VSI.mint.call(addressjpjF0JJ, uintaLVuU43, {from: accounts[2]});

		assert.equal(boola02NEEJ, true)
		assert.equal(uint256kYVCIjO, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYCllPhQp = await KPLAY.new({from: accounts[4]});
		const uintC7nCIA = BigInt("1744")
		const address3B0Qid = accounts[4]
		const uintqfktW1k = BigInt("70")
		const addressybQCicW = accounts[2]
		const addressIi2TMQn = accounts[0]
		const uintRoW7NfM = BigInt("1814")
		const addressYRYtAbg = accounts[3]
		const addressOtotla = await KPLAYCllPhQp.burn.call(address3B0Qid, uintC7nCIA, {from: accounts[4]});
		await KPLAYCllPhQp.whenPaused.call({from: accounts[0]});
		const booloYi0yZV = await KPLAYCllPhQp.transferFrom.call(addressIi2TMQn, addressybQCicW, uintqfktW1k, {from: accounts[4]});
		const booljQikRsk = await KPLAYCllPhQp.mint.call(addressYRYtAbg, uintRoW7NfM, {from: accounts[0]});

		await expect(KPLAYCllPhQp.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCLy1MMi = await KPLAY.new({from: accounts[2]});
		const uinthnzlse = BigInt("846")
		const addressFwVnn7e = accounts[0]
		const uintfTbe6F4 = BigInt("333")
		const addressYMFB07o = accounts[4]
		const addressCJczpgy = accounts[3]
		await KPLAYCLy1MMi.renounceOwnership.call({from: accounts[2]});
		const booly5IcvqN = await KPLAYCLy1MMi.increaseAllowance.call(addressFwVnn7e, uinthnzlse, {from: accounts[3]});
		const boolWsFp4PU = await KPLAYCLy1MMi.transferFrom.call(addressCJczpgy, addressYMFB07o, uintfTbe6F4, {from: accounts[3]});

		await expect(KPLAYCLy1MMi.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})