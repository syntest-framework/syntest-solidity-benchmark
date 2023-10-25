const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYj5GvmQR = await KPLAY.new({from: accounts[0]});
		const uintkSQCaJZ = BigInt("292")
		const uintoQJWHFa = BigInt("1395")
		const addresspprAfd = accounts[2]
		const uintP60qj1X = BigInt("92")
		const addressYnREsAF = accounts[4]
		const uintijhfDWI = BigInt("888")
		const uintTOFY1ot = BigInt("1861")
		const addressb6tnK0s = "0x0000000000000000000000000000000000000001"
		const uintYSltsL3 = BigInt("720")
		const addressQ06C2Zj = accounts[2]
		const addressxzJdZki = accounts[3]
		const uint256Tr3RgB1 = await KPLAYj5GvmQR.currentTime.call({from: accounts[1]});
//		await KPLAYj5GvmQR.whenNotFrozen.call({from: accounts[5]});
//		const boolZO9u3Gt = await KPLAYj5GvmQR.transferWithLockAfter.call(addresspprAfd, uintoQJWHFa, uintkSQCaJZ, {from: accounts[4]});
//		const boolmtyJTrU = await KPLAYj5GvmQR.transfer.call(addressYnREsAF, uintP60qj1X, {from: accounts[0]});
//		const booloswdRqY = await KPLAYj5GvmQR.transferWithLockAfter.call(addressb6tnK0s, uintTOFY1ot, uintijhfDWI, {from: accounts[2]});
//		const boolYt3LwqM = await KPLAYj5GvmQR.transferFrom.call(addressxzJdZki, addressQ06C2Zj, uintYSltsL3, {from: accounts[3]});

		assert.equal(uint256Tr3RgB1, BigInt("1630227531"))
		await expect(KPLAYj5GvmQR.whenNotFrozen.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYQPHdWqO = await KPLAY.new({from: accounts[2]});
		const uintPWdWcqu = BigInt("524")
		const addressBGFdUu9 = accounts[5]
		const uintMiL3Vcz = BigInt("428")
		const addressSwWtCq2 = "0x0000000000000000000000000000000000000001"
		const addressIIAjhCX = accounts[4]
		const uintnMbGmfD = BigInt("1565")
		const addressRdIXEwC = accounts[4]
		const boolK5PTWZ = await KPLAYQPHdWqO.mint.call(addressBGFdUu9, uintPWdWcqu, {from: accounts[2]});
//		await KPLAYQPHdWqO.whenPaused.call({from: accounts[2]});
//		await KPLAYQPHdWqO.renounceOwnership.call({from: accounts[3]});
//		const boolKyEzLL = await KPLAYQPHdWqO.transferFrom.call(addressIIAjhCX, addressSwWtCq2, uintMiL3Vcz, {from: accounts[5]});
//		const booleMhz5Qc = await KPLAYQPHdWqO.mint.call(addressRdIXEwC, uintnMbGmfD, {from: accounts[4]});

		assert.equal(boolK5PTWZ, true)
		await expect(KPLAYQPHdWqO.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYTLyshZ3 = await KPLAY.new({from: accounts[1]});
		const addressCbbg74i = "0x0000000000000000000000000000000000000001"
		const uintS3wlvc = BigInt("364")
		const addressOpcWMdy = accounts[5]
		const addresstQBLmO = accounts[2]
		const uint256Z0uUUTM = await KPLAYTLyshZ3.balanceOf.call(addressCbbg74i, {from: accounts[3]});
		const boolwP5iG7Q = await KPLAYTLyshZ3.approve.call(addressOpcWMdy, uintS3wlvc, {from: accounts[2]});
		const uint256sG9wImt = await KPLAYTLyshZ3.balanceOf.call(addresstQBLmO, {from: accounts[4]});

		assert.equal(boolwP5iG7Q, true)
		assert.equal(uint256Z0uUUTM, BigInt("0"))
		assert.equal(uint256sG9wImt, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYQLHD5L1 = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxBTSsAP = accounts[0]
		const uintBkkKbYc = BigInt("1587")
		const address7DdawE = accounts[2]
		const uint256l5FJtTj = await KPLAYQLHD5L1.balanceOf.call(addressxBTSsAP, {from: accounts[0]});
		const boolyJgOHeY = await KPLAYQLHD5L1.decreaseAllowance.call(address7DdawE, uintBkkKbYc, {from: accounts[3]});
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const addressS8kg81B = accounts[3]
		const uintjMgPB3U = BigInt("370")
		const addressUswZZyf = accounts[0]
		const uinti6RQgBJ = BigInt("180")
		const addressxloTGCy = accounts[1]
		const addressys6VTCu = "0x0000000000000000000000000000000000000001"
		const addressyGAXFV0 = accounts[2]
		const addressJzc844N = accounts[1]
		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addressS8kg81B, {from: accounts[2]});
		const boolJDvt3V5 = await KPLAYLNbNKPQ.transfer.call(addressUswZZyf, uintjMgPB3U, {from: accounts[0]});
		const boolI2Had7R = await KPLAYLNbNKPQ.approve.call(addressxloTGCy, uinti6RQgBJ, {from: accounts[3]});
		const uint256yw1tmLT = await KPLAYLNbNKPQ.allowance.call(addressyGAXFV0, addressys6VTCu, {from: accounts[0]});
		const uint256AlHXT2 = await KPLAYLNbNKPQ.balanceOf.call(addressJzc844N, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolI2Had7R, true)
		assert.equal(boolJDvt3V5, true)
		assert.equal(uint256AlHXT2, BigInt("0"))
		assert.equal(uint256t7rNGz1, BigInt("0"))
		assert.equal(uint256yw1tmLT, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYxd0D1k8 = await KPLAY.new({from: accounts[0]});
		const uintFMsdptj = BigInt("1692")
		const uintAb1MffS = BigInt("2023")
		const addressrXk2Wm = accounts[5]
		const addressPQqpV1 = accounts[4]
//		await KPLAYxd0D1k8.unpause.call({from: accounts[4]});
//		const addresstsf67Du = await KPLAYxd0D1k8.lock.call(addressrXk2Wm, uintAb1MffS, uintFMsdptj, {from: accounts[2]});
//		await KPLAYxd0D1k8.whenPaused.call({from: accounts[5]});
//		await KPLAYxd0D1k8.whenPaused.call({from: accounts[5]});
//		const addressIJv4fbR = await KPLAYxd0D1k8.transferOwnership.call(addressPQqpV1, {from: accounts[1]});

		await expect(KPLAYxd0D1k8.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYZIaZJz0 = await KPLAY.new({from: accounts[2]});
		const uintSMTwDrq = BigInt("1630")
		const addressMjB57qe = accounts[3]
		const addressTGJuve = accounts[0]
		const addressUHq778H = accounts[3]
		const addressYEPboP = accounts[0]
		const uintyz2nweT = BigInt("648")
		const addressQJDBdF3 = accounts[5]
//		const boolFxpPmxS = await KPLAYZIaZJz0.transferFrom.call(addressTGJuve, addressMjB57qe, uintSMTwDrq, {from: accounts[3]});
//		const uint256G5EZj8t = await KPLAYZIaZJz0.balanceOf.call(addressUHq778H, {from: accounts[3]});
//		await KPLAYZIaZJz0.whenPaused.call({from: accounts[3]});
//		const boolf7whZIp = await KPLAYZIaZJz0.isFrozen.call(addressYEPboP, {from: accounts[4]});
//		const addressRpWYrQV = await KPLAYZIaZJz0.unlock.call(addressQJDBdF3, uintyz2nweT, {from: accounts[3]});

		await expect(KPLAYZIaZJz0.transferFrom.call(addressTGJuve, addressMjB57qe, uintSMTwDrq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYTLyshZ3 = await KPLAY.new({from: accounts[1]});
		const uintfnH6ZLE = BigInt("555")
		const addresspCjYbFE = "0x0000000000000000000000000000000000000002"
		const uintRyh1Ql = BigInt("364")
		const addressfyKvqJ = accounts[5]
		const addressg82iAPn = accounts[2]
		const uint256LjYQI8n = await KPLAYTLyshZ3.afterTime.call(uintfnH6ZLE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Z0uUUTM = await KPLAYTLyshZ3.balanceOf.call(addresspCjYbFE, {from: accounts[3]});
//		await KPLAYTLyshZ3.unpause.call({from: accounts[3]});
//		const boolwP5iG7Q = await KPLAYTLyshZ3.approve.call(addressfyKvqJ, uintRyh1Ql, {from: accounts[2]});
//		const uint256sG9wImt = await KPLAYTLyshZ3.balanceOf.call(addressg82iAPn, {from: accounts[4]});

		assert.equal(uint256LjYQI8n, BigInt("1630228088"))
		assert.equal(uint256Z0uUUTM, BigInt("0"))
		await expect(KPLAYTLyshZ3.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYuRc1yXA = await KPLAY.new({from: accounts[4]});
		const addresscxI3MVX = accounts[1]
		const uintnN0avyw = BigInt("212")
		const addressEaYaadg = accounts[1]
		const uintKGAwJe7 = BigInt("776")
		const addressSNQWkPe = accounts[1]
		const uintwmUvgF7 = BigInt("1649")
		const addressiRZlnA = accounts[1]
		const boolxPLy7oN = await KPLAYuRc1yXA.isFrozen.call(addresscxI3MVX, {from: accounts[0]});
//		await KPLAYuRc1yXA.lockState.call(addressEaYaadg, uintnN0avyw, {from: accounts[3]});
//		const addressicNiabA = await KPLAYuRc1yXA.unlock.call(addressSNQWkPe, uintKGAwJe7, {from: accounts[2]});
//		const addressIz8Nnr = await KPLAYuRc1yXA.unlock.call(addressiRZlnA, uintwmUvgF7, {from: accounts[1]});

		assert.equal(boolxPLy7oN, false)
		await expect(KPLAYuRc1yXA.lockState.call(addressEaYaadg, uintnN0avyw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const addressgORkuDO = accounts[3]
		const uintlQb56Yx = BigInt("335")
		const addressDQrgAsF = accounts[0]
		const addressTNImxh = accounts[3]
		const uintRqU3dM3 = BigInt("180")
		const addressUx8wfF = accounts[1]
		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addressgORkuDO, {from: accounts[2]});
		const boolJDvt3V5 = await KPLAYLNbNKPQ.transfer.call(addressDQrgAsF, uintlQb56Yx, {from: accounts[0]});
		const uint256uxH4Aud = await KPLAYLNbNKPQ.lockCount.call(addressTNImxh, {from: accounts[1]});
		const boolI2Had7R = await KPLAYLNbNKPQ.approve.call(addressUx8wfF, uintRqU3dM3, {from: accounts[3]});

		assert.equal(boolI2Had7R, true)
		assert.equal(boolJDvt3V5, true)
		assert.equal(uint256t7rNGz1, BigInt("0"))
		assert.equal(uint256uxH4Aud, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYTLyshZ3 = await KPLAY.new({from: accounts[1]});
		const addressXHjreus = "0x0000000000000000000000000000000000000001"
		const addressejkNT60 = accounts[0]
		const uintc9gPySO = BigInt("364")
		const addressh1EkD3 = accounts[5]
		const addressxw8YjIY = accounts[3]
		const addresstGlz8Yd = accounts[1]
		const uint256Z0uUUTM = await KPLAYTLyshZ3.balanceOf.call(addressXHjreus, {from: accounts[3]});
		const addressNed0MI8 = await KPLAYTLyshZ3.freeze.call(addressejkNT60, {from: accounts[1]});
		const boolwP5iG7Q = await KPLAYTLyshZ3.approve.call(addressh1EkD3, uintc9gPySO, {from: accounts[2]});
		const uint256sG9wImt = await KPLAYTLyshZ3.balanceOf.call(addressxw8YjIY, {from: accounts[4]});
		const uint256WiLOfIb = await KPLAYTLyshZ3.balanceOf.call(addresstGlz8Yd, {from: accounts[2]});

		assert.equal(boolwP5iG7Q, true)
		assert.equal(uint256WiLOfIb, BigInt("10000000000000000"))
		assert.equal(uint256Z0uUUTM, BigInt("0"))
		assert.equal(uint256sG9wImt, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const addressJQa2twT = accounts[4]
		const uintoVXDYkV = BigInt("1544")
		const uintwaluelc = BigInt("1608")
		const addressmTL0p5L = accounts[3]
		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addressJQa2twT, {from: accounts[2]});
//		const addressiG6Ruiy = await KPLAYLNbNKPQ.lockAfter.call(addressmTL0p5L, uintwaluelc, uintoVXDYkV, {from: accounts[0]});
//		await KPLAYLNbNKPQ.unpause.call({from: accounts[3]});

		assert.equal(uint256t7rNGz1, BigInt("0"))
		await expect(KPLAYLNbNKPQ.lockAfter.call(addressmTL0p5L, uintwaluelc, uintoVXDYkV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const addressTrlnp80 = accounts[4]
		const uintXATtxxN = BigInt("1576")
		const addressbCjRZmM = accounts[2]
		const uintacrrOt = BigInt("1586")
		const addressxuEwQ1Z = accounts[2]
		const addressvyC3RJk = "0x0000000000000000000000000000000000000001"
		const uintlVvM6ya = BigInt("323")
		const uinteehnS71 = BigInt("1154")
		const addressuTcyQum = accounts[4]
		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addressTrlnp80, {from: accounts[2]});
//		const boolnag5DLa = await KPLAYLNbNKPQ.decreaseAllowance.call(addressbCjRZmM, uintXATtxxN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwOkPj5w = await KPLAYLNbNKPQ.transferFrom.call(addressvyC3RJk, addressxuEwQ1Z, uintacrrOt, {from: accounts[5]});
//		const addressUbZZDtX = await KPLAYLNbNKPQ.lock.call(addressuTcyQum, uinteehnS71, uintlVvM6ya, {from: accounts[3]});

		assert.equal(uint256t7rNGz1, BigInt("0"))
		await expect(KPLAYLNbNKPQ.decreaseAllowance.call(addressbCjRZmM, uintXATtxxN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const uintFj99d7n = BigInt("370")
		const addressGXNaE0V = accounts[0]
		const addressOxzAuM9 = accounts[3]
		const boolJDvt3V5 = await KPLAYLNbNKPQ.transfer.call(addressGXNaE0V, uintFj99d7n, {from: accounts[0]});
//		await KPLAYLNbNKPQ.pause.call({from: accounts[0]});
//		await KPLAYLNbNKPQ.whenPaused.call({from: accounts[1]});
//		const uint256AlHXT2 = await KPLAYLNbNKPQ.balanceOf.call(addressOxzAuM9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJDvt3V5, true)
		await expect(KPLAYLNbNKPQ.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const uintXkY9GC = BigInt("162")
		const uinttl1IK3D = BigInt("321")
		const addresshCQBjMy = accounts[0]
		const uintvAzV7Gk = BigInt("1741")
		const addressTnNGoIa = accounts[1]
		const addressEcwoHhp = accounts[4]
		const boolhgcQEnF = await KPLAYLNbNKPQ.transferWithLock.call(addresshCQBjMy, uinttl1IK3D, uintXkY9GC, {from: accounts[0]});
//		const boolv2D3kmn = await KPLAYLNbNKPQ.transfer.call(addressTnNGoIa, uintvAzV7Gk, {from: accounts[5]});
//		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addressEcwoHhp, {from: accounts[2]});
//		await KPLAYLNbNKPQ.whenNotFrozen.call({from: accounts[0]});

		assert.equal(boolhgcQEnF, true)
		await expect(KPLAYLNbNKPQ.transfer.call(addressTnNGoIa, uintvAzV7Gk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYAkNcBqu = await KPLAY.new({from: accounts[4]});
		const uinteqP26xJ = BigInt("12")
		const uintWwF704t = BigInt("1529")
		const addressRr3VaSi = accounts[0]
		const uintu26KRwE = BigInt("1310")
		const addresstnlapbF = accounts[5]
		const uint9Ti7Af = BigInt("332")
		const addressuLih0w = accounts[5]
		const addressYWkgvrS = "0x0000000000000000000000000000000000000001"
		const boolCyl8h1R = await KPLAYAkNcBqu.transferWithLockAfter.call(addressRr3VaSi, uintWwF704t, uinteqP26xJ, {from: accounts[4]});
		const booldcO9BBK = await KPLAYAkNcBqu.transfer.call(addresstnlapbF, uintu26KRwE, {from: accounts[4]});
//		const boolzQHZCSt = await KPLAYAkNcBqu.transferFrom.call(addressYWkgvrS, addressuLih0w, uint9Ti7Af, {from: accounts[4]});

		assert.equal(boolCyl8h1R, true)
		assert.equal(booldcO9BBK, true)
		await expect(KPLAYAkNcBqu.transferFrom.call(addressYWkgvrS, addressuLih0w, uint9Ti7Af, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const addressA7Ansdq = accounts[5]
		const uintq6R74KR = BigInt("1490")
		const addressdy92Ob = accounts[2]
		const uintxN5IqyI = BigInt("1877")
		const addressN821C5y = accounts[3]
		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addressA7Ansdq, {from: accounts[2]});
		const boolqFKvD3v = await KPLAYLNbNKPQ.increaseAllowance.call(addressdy92Ob, uintq6R74KR, {from: accounts[1]});
//		const addressiDHAjyh = await KPLAYLNbNKPQ.unlock.call(addressN821C5y, uintxN5IqyI, {from: accounts[2]});

		assert.equal(boolqFKvD3v, true)
		assert.equal(uint256t7rNGz1, BigInt("0"))
		await expect(KPLAYLNbNKPQ.unlock.call(addressN821C5y, uintxN5IqyI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const uintME44BPs = BigInt("1466")
		const uintWiv2Rv = BigInt("1951")
		const addressa17Kz30 = accounts[0]
		const uintf1Q21qM = BigInt("1120")
		const addressacBDxR6 = accounts[0]
		const addresse5iQYG7 = accounts[5]
		const addressOnC7O45 = await KPLAYLNbNKPQ.lock.call(addressa17Kz30, uintWiv2Rv, uintME44BPs, {from: accounts[0]});
//		const addressQFOirdN = await KPLAYLNbNKPQ.unlock.call(addressacBDxR6, uintf1Q21qM, {from: accounts[0]});
//		const uint256fe1TLH2 = await KPLAYLNbNKPQ.totalSupply.call({from: accounts[1]});
//		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addresse5iQYG7, {from: accounts[2]});

		await expect(KPLAYLNbNKPQ.unlock.call(addressacBDxR6, uintf1Q21qM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const addressWNLVNsq = accounts[4]
		const uintkX6ov6x = BigInt("389")
		const addressdDsAYKY = accounts[0]
		const uintR5dmiX9 = BigInt("1102")
		const addressyptL9gi = accounts[4]
		const addressx66qD9R = accounts[5]
		const address77ZhNP = await KPLAYLNbNKPQ.transferOwnership.call(addressWNLVNsq, {from: accounts[0]});
		const boolJDvt3V5 = await KPLAYLNbNKPQ.transfer.call(addressdDsAYKY, uintkX6ov6x, {from: accounts[0]});
//		const boolAkMttQU = await KPLAYLNbNKPQ.transfer.call(addressyptL9gi, uintR5dmiX9, {from: accounts[3]});
//		const uint256NDjhpva = await KPLAYLNbNKPQ.lockCount.call(addressx66qD9R, {from: accounts[1]});

		assert.equal(boolJDvt3V5, true)
		await expect(KPLAYLNbNKPQ.transfer.call(addressyptL9gi, uintR5dmiX9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYDokGxDh = await KPLAY.new({from: accounts[1]});
		const uintKvo0aBb = BigInt("1856")
		const uintOLuLu2 = BigInt("658")
		const addressvpIg2rU = accounts[1]
		const uint256KRtYpGw = await KPLAYDokGxDh.totalSupply.call({from: accounts[2]});
//		await KPLAYDokGxDh.pause.call({from: accounts[5]});
//		const boolrI9a0VN = await KPLAYDokGxDh.transferWithLock.call(addressvpIg2rU, uintOLuLu2, uintKvo0aBb, {from: accounts[0]});

		assert.equal(uint256KRtYpGw, BigInt("10000000000000000"))
		await expect(KPLAYDokGxDh.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const addressfFrLH3u = accounts[1]
		const addressUugdmn6 = accounts[5]
		const addressTlVCwYr = await KPLAYLNbNKPQ.unfreeze.call(addressfFrLH3u, {from: accounts[0]});
		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addressUugdmn6, {from: accounts[2]});

		assert.equal(uint256t7rNGz1, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const addressg7FdfUm = accounts[5]
		const addressFPvOCap = accounts[4]
		const uinty2LBEq9 = BigInt("654")
		const addressbhoPLKB = accounts[3]
		const uint256bekiZI = await KPLAYLNbNKPQ.balanceOf.call(addressg7FdfUm, {from: accounts[5]});
		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addressFPvOCap, {from: accounts[2]});
//		const addressxJShn7 = await KPLAYLNbNKPQ.burn.call(addressbhoPLKB, uinty2LBEq9, {from: accounts[0]});

		assert.equal(uint256bekiZI, BigInt("0"))
		assert.equal(uint256t7rNGz1, BigInt("0"))
		await expect(KPLAYLNbNKPQ.burn.call(addressbhoPLKB, uinty2LBEq9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYLNbNKPQ = await KPLAY.new({from: accounts[0]});
		const addressBdjlU4F = accounts[5]
		const uint256t7rNGz1 = await KPLAYLNbNKPQ.balanceOf.call(addressBdjlU4F, {from: accounts[2]});
//		await KPLAYLNbNKPQ.renounceOwnership.call({from: accounts[0]});
//		await KPLAYLNbNKPQ.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256t7rNGz1, BigInt("0"))
		await expect(KPLAYLNbNKPQ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwbYkpg3 = await KPLAY.new({from: accounts[2]});
		const uintAP9CLWN = BigInt("286")
		const uinteZvTkWS = BigInt("553")
		const addressdYXDyQp = accounts[2]
		const uintvRo3moc = BigInt("959")
		const addresswyYBHGh = accounts[5]
		const uintdVvekDT = BigInt("501")
		const addresstCoQ5Jd = accounts[5]
//		await KPLAYwbYkpg3.unpause.call({from: accounts[2]});
//		const boolPtKIENc = await KPLAYwbYkpg3.transferWithLock.call(addressdYXDyQp, uinteZvTkWS, uintAP9CLWN, {from: accounts[2]});
//		const addresskvWRXP0 = await KPLAYwbYkpg3.burn.call(addresswyYBHGh, uintvRo3moc, {from: accounts[5]});
//		const addressbSowWo = await KPLAYwbYkpg3.burn.call(addresstCoQ5Jd, uintdVvekDT, {from: accounts[0]});

		await expect(KPLAYwbYkpg3.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})