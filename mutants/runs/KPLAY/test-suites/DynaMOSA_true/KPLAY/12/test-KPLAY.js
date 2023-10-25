const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAY7iRUNd = await KPLAY.new({from: accounts[1]});
		const uinteoWyNAA = BigInt("1798")
		const uintab95I5m = BigInt("979")
		const uintl4Iz8WD = BigInt("1727")
		const addressj0yEXSF = "0x0000000000000000000000000000000000000001"
		const uintStS3mRo = BigInt("1561")
		const addresstfq9mAz = "0x0000000000000000000000000000000000000001"
		const addressgK5zSYs = accounts[3]
		const uintiKlUz1F = BigInt("321")
		const uintmS2FU5h = BigInt("1414")
		const addresselgEfPJ = "0x0000000000000000000000000000000000000001"
		const uint256ZoO8S6f = await KPLAY7iRUNd.afterTime.call(uinteoWyNAA, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAY7iRUNd.unpause.call({from: accounts[2]});
		const boolJ1iVk6B = await KPLAY7iRUNd.transferWithLockAfter.call(addressj0yEXSF, uintl4Iz8WD, uintab95I5m, {from: "0x0000000000000000000000000000000000000001"});
		const boolyQJRUze = await KPLAY7iRUNd.transfer.call(addresstfq9mAz, uintStS3mRo, {from: accounts[5]});
		const boolTff4foI = await KPLAY7iRUNd.isFrozen.call(addressgK5zSYs, {from: accounts[0]});
		const boolKmGZ7gr = await KPLAY7iRUNd.transferWithLockAfter.call(addresselgEfPJ, uintmS2FU5h, uintiKlUz1F, {from: accounts[0]});

		assert.equal(uint256ZoO8S6f, BigInt("1630231595"))
		await expect(KPLAY7iRUNd.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJpbG2e1 = await KPLAY.new({from: accounts[0]});
		const uintlBSww1 = BigInt("1407")
		const addressnpAwY8C = "0x0000000000000000000000000000000000000001"
		const addressnIBSBn2 = accounts[3]
		const uintbcDMq6a = BigInt("2001")
		const addresszAhWzWl = accounts[5]
		const boolbYyPEKA = await KPLAYJpbG2e1.increaseAllowance.call(addressnpAwY8C, uintlBSww1, {from: "0x0000000000000000000000000000000000000001"});
		const addressd85dHNn = await KPLAYJpbG2e1.freeze.call(addressnIBSBn2, {from: accounts[3]});
		const boolH18tYzP = await KPLAYJpbG2e1.approve.call(addresszAhWzWl, uintbcDMq6a, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYJpbG2e1.whenNotFrozen.call({from: accounts[4]});
		await KPLAYJpbG2e1.whenNotFrozen.call({from: accounts[1]});

		assert.equal(boolbYyPEKA, true)
		await expect(KPLAYJpbG2e1.freeze.call(addressnIBSBn2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const addresszLS8Td = accounts[5]
		const addressp96EYbf = accounts[3]
		const uint256oBiOBBG = await KPLAYfp0xdrM.lockCount.call(addresszLS8Td, {from: accounts[1]});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(addressp96EYbf, {from: accounts[4]});

		assert.equal(uint256cO5MPi6, BigInt("0"))
		assert.equal(uint256oBiOBBG, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYKE4reu4 = await KPLAY.new({from: accounts[2]});
		const uintLrfPsTo = BigInt("879")
		const uintc4yvQnL = BigInt("1028")
		const addressBW7tIvr = accounts[0]
		await KPLAYKE4reu4.whenNotPaused.call({from: accounts[4]});
		await KPLAYKE4reu4.renounceOwnership.call({from: accounts[2]});
		const addresslpDY8E = await KPLAYKE4reu4.lock.call(addressBW7tIvr, uintc4yvQnL, uintLrfPsTo, {from: accounts[5]});

		await expect(KPLAYKE4reu4.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCETv0dX = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintELZjyW = BigInt("1078")
		const addressW94ylq = accounts[3]
		const uintKN5YJjh = BigInt("1541")
		const addressz5IQjoZ = accounts[1]
		const addresswBkRy2l = accounts[4]
		await KPLAYCETv0dX.whenNotPaused.call({from: accounts[5]});
		const uint256znbv6vF = await KPLAYCETv0dX.totalSupply.call({from: accounts[0]});
		const boolhce4y0E = await KPLAYCETv0dX.increaseAllowance.call(addressW94ylq, uintELZjyW, {from: accounts[3]});
		const boolfgIhdLs = await KPLAYCETv0dX.transferFrom.call(addresswBkRy2l, addressz5IQjoZ, uintKN5YJjh, {from: accounts[5]});
		const uint256Gml5fob = await KPLAYCETv0dX.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for KPLAY', async () => {
		const KPLAYzS6EjPB = await KPLAY.new({from: accounts[4]});
		const uintEYQoXQp = BigInt("137")
		const uintNAlTkEC = BigInt("752")
		const addressMo4jKcm = accounts[2]
		const addressYMJQEoW = accounts[0]
		const boolq4HJbBw = await KPLAYzS6EjPB.transferWithLock.call(addressMo4jKcm, uintNAlTkEC, uintEYQoXQp, {from: accounts[4]});
		await KPLAYzS6EjPB.renounceOwnership.call({from: accounts[5]});
		await KPLAYzS6EjPB.onlyOwner.call({from: accounts[3]});
		const uint256RuYK7Qj = await KPLAYzS6EjPB.balanceOf.call(addressYMJQEoW, {from: accounts[5]});

		assert.equal(boolq4HJbBw, true)
		await expect(KPLAYzS6EjPB.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYxbDUBIq = await KPLAY.new({from: accounts[0]});
		const uintO0Zzlj5 = BigInt("1129")
		const addressjjKMLnj = accounts[3]
		const addressIyFXcVH = accounts[1]
		const addresspGJRFtM = accounts[1]
		const uinteV6mKMY = BigInt("260")
		const addressWsne7Zn = accounts[3]
		const uintGB0I6ZP = BigInt("324")
		const addresse6URay = accounts[0]
		const bool1wZH9t = await KPLAYxbDUBIq.transfer.call(addressjjKMLnj, uintO0Zzlj5, {from: accounts[3]});
		const addressSWV8Rmy = await KPLAYxbDUBIq.freeze.call(addressIyFXcVH, {from: accounts[1]});
		const boolNcJ1i9s = await KPLAYxbDUBIq.isFrozen.call(addresspGJRFtM, {from: accounts[3]});
		const booliy4v6Em = await KPLAYxbDUBIq.transfer.call(addressWsne7Zn, uinteV6mKMY, {from: accounts[4]});
		const boolpkkn0N = await KPLAYxbDUBIq.transfer.call(addresse6URay, uintGB0I6ZP, {from: accounts[2]});
		await KPLAYxbDUBIq.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYxbDUBIq.transfer.call(addressjjKMLnj, uintO0Zzlj5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaDrzgUZ = await KPLAY.new({from: accounts[2]});
		const addressCMVjwsS = accounts[4]
		const addressCll1hqp = accounts[3]
		const addressLkysYhP = accounts[4]
		const addressGshMOq4 = accounts[4]
		const addressP8mLGu4 = accounts[3]
		const uintwM83hE = BigInt("227")
		const addressCjtENxp = accounts[0]
		const uint256OgTdRBj = await KPLAYaDrzgUZ.lockCount.call(addressCMVjwsS, {from: accounts[0]});
		const uint256ihWdOx3 = await KPLAYaDrzgUZ.allowance.call(addressLkysYhP, addressCll1hqp, {from: accounts[4]});
		const uint256JIegjJJ = await KPLAYaDrzgUZ.totalSupply.call({from: accounts[0]});
		const uint256vEahvEA = await KPLAYaDrzgUZ.balanceOf.call(addressGshMOq4, {from: accounts[3]});
		const addressf2Nh7Ft = await KPLAYaDrzgUZ.transferOwnership.call(addressP8mLGu4, {from: "0x0000000000000000000000000000000000000001"});
		const boolmcnTECX = await KPLAYaDrzgUZ.transfer.call(addressCjtENxp, uintwM83hE, {from: accounts[4]});

		assert.equal(uint256JIegjJJ, BigInt("10000000000000000"))
		assert.equal(uint256OgTdRBj, BigInt("0"))
		assert.equal(uint256ihWdOx3, BigInt("0"))
		assert.equal(uint256vEahvEA, BigInt("0"))
		await expect(KPLAYaDrzgUZ.transferOwnership.call(addressP8mLGu4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const addressX6SpJyX = accounts[6]
		const uintE3BRE96 = BigInt("1998")
		const addressROBTnqD = accounts[1]
		const addressjRDSV8 = accounts[3]
		const uint256oBiOBBG = await KPLAYfp0xdrM.lockCount.call(addressX6SpJyX, {from: accounts[1]});
		const addressSGuw80H = await KPLAYfp0xdrM.unlock.call(addressROBTnqD, uintE3BRE96, {from: accounts[1]});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(addressjRDSV8, {from: accounts[4]});

		assert.equal(uint256oBiOBBG, BigInt("0"))
		await expect(KPLAYfp0xdrM.unlock.call(addressROBTnqD, uintE3BRE96, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const addresskqoWGJX = accounts[1]
		const addresspPoxvz1 = accounts[5]
		const boolvEiPrb = await KPLAYfp0xdrM.isFrozen.call(addresskqoWGJX, {from: accounts[5]});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(addresspPoxvz1, {from: accounts[4]});

		assert.equal(boolvEiPrb, false)
		assert.equal(uint256cO5MPi6, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYaDrzgUZ = await KPLAY.new({from: accounts[2]});
		const addressCJoR1df = accounts[4]
		const addressbEZX5P = accounts[4]
		const addressOShW81G = accounts[3]
		const uintRGED78k = BigInt("227")
		const addresszNeZXKv = accounts[0]
		const uint256OgTdRBj = await KPLAYaDrzgUZ.lockCount.call(addressCJoR1df, {from: accounts[0]});
		const uint256aBjueGH = await KPLAYaDrzgUZ.currentTime.call({from: accounts[1]});
		const uint256vEahvEA = await KPLAYaDrzgUZ.balanceOf.call(addressbEZX5P, {from: accounts[3]});
		const addressf2Nh7Ft = await KPLAYaDrzgUZ.transferOwnership.call(addressOShW81G, {from: "0x0000000000000000000000000000000000000001"});
		const boolmcnTECX = await KPLAYaDrzgUZ.transfer.call(addresszNeZXKv, uintRGED78k, {from: accounts[4]});

		assert.equal(uint256OgTdRBj, BigInt("0"))
		assert.equal(uint256aBjueGH, BigInt("1630229800"))
		assert.equal(uint256vEahvEA, BigInt("0"))
		await expect(KPLAYaDrzgUZ.transferOwnership.call(addressOShW81G, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const uintklDIC9U = BigInt("1896")
		const addresspQUiMrp = accounts[0]
		const addresshHI0brT = accounts[5]
		await KPLAYfp0xdrM.lockState.call(addresspQUiMrp, uintklDIC9U, {from: accounts[1]});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(addresshHI0brT, {from: accounts[4]});

		await expect(KPLAYfp0xdrM.lockState.call(addresspQUiMrp, uintklDIC9U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYhX7KCb4 = await KPLAY.new({from: accounts[1]});
		const addressYoj2ufC = accounts[4]
		const addressGei4rHz = accounts[4]
		const uintXj0tICR = BigInt("1843")
		const uintc4aE7RA = BigInt("297")
		const addressIBKaXPn = accounts[4]
		const uintjLvEnvA = BigInt("1561")
		const addressjeGgVlK = "0x0000000000000000000000000000000000000001"
		const uint256Cq2IATc = await KPLAYhX7KCb4.allowance.call(addressGei4rHz, addressYoj2ufC, {from: accounts[0]});
		const bool4FmkhT = await KPLAYhX7KCb4.transferWithLockAfter.call(addressIBKaXPn, uintc4aE7RA, uintXj0tICR, {from: accounts[1]});
		const addressMydPJDb = await KPLAYhX7KCb4.unlock.call(addressjeGgVlK, uintjLvEnvA, {from: accounts[2]});

		assert.equal(bool4FmkhT, true)
		assert.equal(uint256Cq2IATc, BigInt("0"))
		await expect(KPLAYhX7KCb4.unlock.call(addressjeGgVlK, uintjLvEnvA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const uintH8iDfD = BigInt("1933")
		const addressvicw94J = accounts[3]
		const addressIcQKzA1 = accounts[1]
		const addressCc0XfZY = accounts[4]
		const addressIdiEncv = accounts[2]
		const address5wbPAw = accounts[5]
		const boolZdkjDV = await KPLAYfp0xdrM.transferFrom.call(addressIcQKzA1, addressvicw94J, uintH8iDfD, {from: accounts[2]});
		const uint256W0OVxq0 = await KPLAYfp0xdrM.allowance.call(addressIdiEncv, addressCc0XfZY, {from: accounts[5]});
		await KPLAYfp0xdrM.unpause.call({from: accounts[1]});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(address5wbPAw, {from: accounts[4]});

		await expect(KPLAYfp0xdrM.transferFrom.call(addressIcQKzA1, addressvicw94J, uintH8iDfD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaDrzgUZ = await KPLAY.new({from: accounts[2]});
		const addresspRI6WJP = accounts[4]
		const addressCjuHu6z = accounts[6]
		const uintc1Doqme = BigInt("1262")
		const addressUlphqcx = accounts[4]
		const uintsnPW6qU = BigInt("680")
		const addressFUtznx2 = accounts[2]
		const uintvnfBN2c = BigInt("227")
		const addressWDALSbh = accounts[0]
		const uint256OgTdRBj = await KPLAYaDrzgUZ.lockCount.call(addresspRI6WJP, {from: accounts[0]});
		const uint256vEahvEA = await KPLAYaDrzgUZ.balanceOf.call(addressCjuHu6z, {from: accounts[3]});
		const boolUWYxwvg = await KPLAYaDrzgUZ.decreaseAllowance.call(addressUlphqcx, uintc1Doqme, {from: accounts[3]});
		const addressqarUGQ = await KPLAYaDrzgUZ.burn.call(addressFUtznx2, uintsnPW6qU, {from: accounts[0]});
		const boolmcnTECX = await KPLAYaDrzgUZ.transfer.call(addressWDALSbh, uintvnfBN2c, {from: accounts[4]});

		assert.equal(uint256OgTdRBj, BigInt("0"))
		assert.equal(uint256vEahvEA, BigInt("0"))
		await expect(KPLAYaDrzgUZ.decreaseAllowance.call(addressUlphqcx, uintc1Doqme, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const addressDld05cf = accounts[6]
		const uinthOpDpVw = BigInt("1998")
		const addresssb5ihF9 = accounts[1]
		const addressaRguVLn = accounts[4]
		const uint256oBiOBBG = await KPLAYfp0xdrM.lockCount.call(addressDld05cf, {from: accounts[1]});
		await KPLAYfp0xdrM.renounceOwnership.call({from: accounts[1]});
		const addressSGuw80H = await KPLAYfp0xdrM.unlock.call(addresssb5ihF9, uinthOpDpVw, {from: accounts[1]});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(addressaRguVLn, {from: accounts[4]});

		assert.equal(uint256oBiOBBG, BigInt("0"))
		await expect(KPLAYfp0xdrM.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const uintf2lLi8x = BigInt("1244")
		const uintMnm3u8n = BigInt("1748")
		const addressHCFGUl = accounts[3]
		const addressWz8Hi93 = accounts[5]
		const addressbfSxMJw = await KPLAYfp0xdrM.lockAfter.call(addressHCFGUl, uintMnm3u8n, uintf2lLi8x, {from: accounts[1]});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(addressWz8Hi93, {from: accounts[4]});

		await expect(KPLAYfp0xdrM.lockAfter.call(addressHCFGUl, uintMnm3u8n, uintf2lLi8x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaDrzgUZ = await KPLAY.new({from: accounts[2]});
		const uintRa1PNuD = BigInt("871")
		const addressooH5PAt = accounts[0]
		const addressghN7GS8 = accounts[5]
		const uinty3bcwaj = BigInt("276")
		const addressVgD0yqV = accounts[0]
		const boolxbOono = await KPLAYaDrzgUZ.approve.call(addressooH5PAt, uintRa1PNuD, {from: accounts[0]});
		const uint256vEahvEA = await KPLAYaDrzgUZ.balanceOf.call(addressghN7GS8, {from: accounts[3]});
		const boolmcnTECX = await KPLAYaDrzgUZ.transfer.call(addressVgD0yqV, uinty3bcwaj, {from: accounts[4]});
		await KPLAYaDrzgUZ.onlyOwner.call({from: accounts[1]});

		assert.equal(boolxbOono, true)
		assert.equal(uint256vEahvEA, BigInt("0"))
		await expect(KPLAYaDrzgUZ.transfer.call(addressVgD0yqV, uinty3bcwaj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const addresspb624yP = accounts[5]
		const uintDsXWIKh = BigInt("355")
		const uintggRmHB8 = BigInt("1241")
		const addressqLTGN5O = accounts[2]
		const addressDTMmxTr = accounts[4]
		const boolynWatWg = await KPLAYfp0xdrM.isFrozen.call(addresspb624yP, {from: accounts[2]});
		const addressrp5Gn1h = await KPLAYfp0xdrM.lock.call(addressqLTGN5O, uintggRmHB8, uintDsXWIKh, {from: accounts[1]});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(addressDTMmxTr, {from: accounts[4]});

		assert.equal(boolynWatWg, false)
		await expect(KPLAYfp0xdrM.lock.call(addressqLTGN5O, uintggRmHB8, uintDsXWIKh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaDrzgUZ = await KPLAY.new({from: accounts[2]});
		const addresscDyhOT4 = accounts[5]
		const addressBKd8Usm = accounts[6]
		const addresscnM2GmK = accounts[2]
		const uintgdZ4iUE = BigInt("227")
		const addresswxNjC2A = accounts[0]
		const uint256OgTdRBj = await KPLAYaDrzgUZ.lockCount.call(addresscDyhOT4, {from: accounts[0]});
		const uint256vEahvEA = await KPLAYaDrzgUZ.balanceOf.call(addressBKd8Usm, {from: accounts[3]});
		await KPLAYaDrzgUZ.unpause.call({from: accounts[2]});
		const uint256xMtlS4P = await KPLAYaDrzgUZ.lockCount.call(addresscnM2GmK, {from: accounts[4]});
		await KPLAYaDrzgUZ.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmcnTECX = await KPLAYaDrzgUZ.transfer.call(addresswxNjC2A, uintgdZ4iUE, {from: accounts[4]});

		assert.equal(uint256OgTdRBj, BigInt("0"))
		assert.equal(uint256vEahvEA, BigInt("0"))
		await expect(KPLAYaDrzgUZ.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYb1bc5Ox = await KPLAY.new({from: accounts[2]});
		const addressdJkTCh = accounts[4]
		const addressonxTbkr = accounts[0]
		const addressBh4fsrv = accounts[2]
		const addressxiW1vLZ = await KPLAYb1bc5Ox.unfreeze.call(addressdJkTCh, {from: accounts[2]});
		await KPLAYb1bc5Ox.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zDyugQE = await KPLAYb1bc5Ox.allowance.call(addressBh4fsrv, addressonxTbkr, {from: accounts[2]});

		await expect(KPLAYb1bc5Ox.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const addresszkvhzWj = "0x0000000000000000000000000000000000000001"
		const uintRJuAAFO = BigInt("1383")
		const addresstoN6K1 = accounts[1]
		const addresstU7DHO8 = accounts[5]
		const addressl8qcV6F = accounts[4]
		const uintr0KSfGD = BigInt("1422")
		const addressI3kAsUq = "0x0000000000000000000000000000000000000001"
		const addressMu8qyt1 = await KPLAYfp0xdrM.transferOwnership.call(addresszkvhzWj, {from: accounts[1]});
		const addressuQ1jp21 = await KPLAYfp0xdrM.unlock.call(addresstoN6K1, uintRJuAAFO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(addresstU7DHO8, {from: accounts[4]});
		const uint256KYfp2k4 = await KPLAYfp0xdrM.balanceOf.call(addressl8qcV6F, {from: accounts[4]});
		const addressi5Q8qSQ = await KPLAYfp0xdrM.unlock.call(addressI3kAsUq, uintr0KSfGD, {from: accounts[4]});

		await expect(KPLAYfp0xdrM.unlock.call(addresstoN6K1, uintRJuAAFO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const addresshKT2iR = accounts[4]
		await KPLAYfp0xdrM.pause.call({from: accounts[1]});
		const uint256cO5MPi6 = await KPLAYfp0xdrM.balanceOf.call(addresshKT2iR, {from: accounts[4]});

		await expect(KPLAYfp0xdrM.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzXiUBRT = await KPLAY.new({from: accounts[4]});
		const addressWb7PVQB = accounts[1]
		const addressCREySoV = accounts[4]
		const uintgOqZI2f = BigInt("863")
		const addresstTMea7Z = accounts[0]
		const addressy9anw5z = await KPLAYzXiUBRT.freeze.call(addressWb7PVQB, {from: accounts[4]});
		const addressOjuB3O6 = await KPLAYzXiUBRT.transferOwnership.call(addressCREySoV, {from: accounts[4]});
		await KPLAYzXiUBRT.whenPaused.call({from: accounts[1]});
		const boolWp6MP29 = await KPLAYzXiUBRT.mint.call(addresstTMea7Z, uintgOqZI2f, {from: accounts[4]});

		await expect(KPLAYzXiUBRT.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY0ir9pY = await KPLAY.new({from: accounts[3]});
		const uintSTl2Wpl = BigInt("1019")
		const addressU24di6D = accounts[4]
		const uintj6PvQs = BigInt("925")
		const addressbobBkW = "0x0000000000000000000000000000000000000001"
		const addressopQ63Ql = accounts[5]
		const addressH7d23Mz = accounts[1]
		const uintB8Feeb9 = BigInt("1232")
		const uintptXQga = BigInt("2")
		const addressYRJKvF = "0x0000000000000000000000000000000000000001"
		const addressoV8mYdB = accounts[2]
		const boolz3pamq = await KPLAY0ir9pY.approve.call(addressU24di6D, uintSTl2Wpl, {from: accounts[2]});
		const addressFRxvysi = await KPLAY0ir9pY.burn.call(addressbobBkW, uintj6PvQs, {from: accounts[3]});
		const uint256dp62Nmv = await KPLAY0ir9pY.allowance.call(addressH7d23Mz, addressopQ63Ql, {from: accounts[1]});
		const uint256l5mE16t = await KPLAY0ir9pY.currentTime.call({from: accounts[3]});
		const address2gbV0g = await KPLAY0ir9pY.lockAfter.call(addressYRJKvF, uintptXQga, uintB8Feeb9, {from: accounts[5]});
		const addressF8THiMw = await KPLAY0ir9pY.unfreeze.call(addressoV8mYdB, {from: accounts[4]});

		assert.equal(boolz3pamq, true)
		await expect(KPLAY0ir9pY.burn.call(addressbobBkW, uintj6PvQs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfp0xdrM = await KPLAY.new({from: accounts[1]});
		const uintARD8y3d = BigInt("347")
		const uintUTpomLd = BigInt("449")
		const address4UiAe4 = accounts[1]
		const address49yzx4 = accounts[7]
		const addressh4NnKp4 = accounts[1]
		const uintqtKW1AH = BigInt("336")
		const addressdQjPZYC = accounts[2]
		const uintXtcB1je = BigInt("1453")
		const uintWX0DAcW = BigInt("1490")
		const addressGvcz0d = "0x0000000000000000000000000000000000000000"
		const addressHDbBVcp = accounts[4]
		const uintO9gHtsx = BigInt("847")
		const addressDPwY0nq = accounts[1]
		const uintNRxlCNU = BigInt("1998")
		const addressz2ZaRKk = accounts[1]
		const uintcDPtPgR = BigInt("154")
		const uintKcYMXau = BigInt("204")
		const addressk21gT1u = accounts[1]
		await KPLAYfp0xdrM.renounceOwnership.call({from: accounts[1]});
		const boolBfuy25L = await KPLAYfp0xdrM.transferWithLock.call(address4UiAe4, uintUTpomLd, uintARD8y3d, {from: accounts[1]});
		const uint256oBiOBBG = await KPLAYfp0xdrM.lockCount.call(address49yzx4, {from: accounts[1]});
		const uint256SxdJxp = await KPLAYfp0xdrM.balanceOf.call(addressh4NnKp4, {from: accounts[1]});
		const boolRGybe3 = await KPLAYfp0xdrM.approve.call(addressdQjPZYC, uintqtKW1AH, {from: accounts[1]});
		const boolxkiQg7g = await KPLAYfp0xdrM.transferWithLock.call(addressGvcz0d, uintWX0DAcW, uintXtcB1je, {from: accounts[1]});
		const uint256sEoHwPC = await KPLAYfp0xdrM.lockCount.call(addressHDbBVcp, {from: accounts[2]});
		const booltkPcpbC = await KPLAYfp0xdrM.transfer.call(addressDPwY0nq, uintO9gHtsx, {from: accounts[1]});
		const addressSGuw80H = await KPLAYfp0xdrM.unlock.call(addressz2ZaRKk, uintNRxlCNU, {from: accounts[1]});
		await KPLAYfp0xdrM.whenNotFrozen.call({from: accounts[4]});
		await KPLAYfp0xdrM.renounceOwnership.call({from: accounts[1]});
		const addressAdFMAr9 = await KPLAYfp0xdrM.lock.call(addressk21gT1u, uintKcYMXau, uintcDPtPgR, {from: accounts[3]});

		await expect(KPLAYfp0xdrM.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})