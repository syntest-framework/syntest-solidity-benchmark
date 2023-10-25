const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqYEoLXA = await LIBERAPAY.new({from: accounts[0]});
		const uintapp7Wv4 = BigInt("656")
		const addressDKD8kbF = accounts[1]
		const addresspGMeGuc = "0x0000000000000000000000000000000000000001"
		const uintHn8evBz = BigInt("1033")
		const addressTMTCzTq = accounts[3]
//		await LIBERAPAYqYEoLXA.f.call({from: accounts[0]});
//		const booliLr1tI = await LIBERAPAYqYEoLXA.transferFrom.call(addresspGMeGuc, addressDKD8kbF, uintapp7Wv4, {from: accounts[4]});
//		const booldCiXzGZ = await LIBERAPAYqYEoLXA.burnFrom.call(addressTMTCzTq, uintHn8evBz, {from: accounts[0]});
//		await LIBERAPAYqYEoLXA.unpause.call({from: accounts[2]});
//		await LIBERAPAYqYEoLXA.f.call({from: accounts[3]});

		await expect(LIBERAPAYqYEoLXA.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUSeUUoD = await LIBERAPAY.new({from: accounts[2]});
		const uintW1dvZyg = BigInt("912")
		const addressTbHTdWr = "0x0000000000000000000000000000000000000001"
		const addressmeY9WcD = accounts[1]
//		const boolJGPALxK = await LIBERAPAYUSeUUoD.transferFrom.call(addressmeY9WcD, addressTbHTdWr, uintW1dvZyg, {from: accounts[5]});
//		await LIBERAPAYUSeUUoD.f.call({from: accounts[2]});
//		const boolIMZjYY = await LIBERAPAYUSeUUoD.acceptOwnership.call({from: accounts[0]});
//		await LIBERAPAYUSeUUoD.onlyOwner.call({from: accounts[0]});

		await expect(LIBERAPAYUSeUUoD.transferFrom.call(addressmeY9WcD, addressTbHTdWr, uintW1dvZyg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYyCdVBiy = await LIBERAPAY.new({from: accounts[4]});
		const uintAXeXVjT = BigInt("950")
		const addresspm5aJgz = accounts[2]
		const uintzJBrhni = BigInt("1698")
		const addressFvdnAPa = accounts[0]
		const uintri6BxFD = BigInt("1834")
		const addressTie2dr8 = accounts[0]
		const uintNNtwKKp = BigInt("643")
		const uintYJMOaAr = BigInt("232")
		const addresszP4WbFD = accounts[2]
//		const boolFlmIaLO = await LIBERAPAYyCdVBiy.decreaseAllowance.call(addresspm5aJgz, uintAXeXVjT, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYyCdVBiy.whenPaused.call({from: accounts[2]});
//		const boolfYopcEA = await LIBERAPAYyCdVBiy.increaseAllowance.call(addressFvdnAPa, uintzJBrhni, {from: accounts[4]});
//		await LIBERAPAYyCdVBiy.showLockState.call(addressTie2dr8, uintri6BxFD, {from: accounts[3]});
//		const boolcU3vYvP = await LIBERAPAYyCdVBiy.lock.call(addresszP4WbFD, uintYJMOaAr, uintNNtwKKp, {from: accounts[2]});

		await expect(LIBERAPAYyCdVBiy.decreaseAllowance.call(addresspm5aJgz, uintAXeXVjT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYY5qNKvT = await LIBERAPAY.new({from: accounts[1]});
		const addressYDTPuUT = accounts[4]
		const uintV18OrZZ = BigInt("1565")
		const addressoo3LjP0 = accounts[4]
		const uintuPU9684 = BigInt("1862")
		const addressxy5U1gT = accounts[5]
		const uint256kHZtD7j = await LIBERAPAYY5qNKvT.balanceOf.call(addressYDTPuUT, {from: accounts[0]});
//		const boolfc0nvoE = await LIBERAPAYY5qNKvT.acceptOwnership.call({from: accounts[5]});
//		await LIBERAPAYY5qNKvT.showLockState.call(addressoo3LjP0, uintV18OrZZ, {from: accounts[4]});
//		await LIBERAPAYY5qNKvT.unpause.call({from: accounts[5]});
//		const boolrhR9KWB = await LIBERAPAYY5qNKvT.increaseAllowance.call(addressxy5U1gT, uintuPU9684, {from: accounts[0]});

		assert.equal(uint256kHZtD7j, BigInt("0"))
		await expect(LIBERAPAYY5qNKvT.acceptOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeq5bVRe = await LIBERAPAY.new({from: accounts[5]});
		const addressWF9W9a6 = accounts[4]
		const addressVbeuXnz = accounts[2]
		const uintHnvp0kh = BigInt("695")
		const addressyCqa16H = accounts[1]
		const uintavBWZ6g = BigInt("1109")
		const addresshXXD0U = accounts[2]
		const uintzRcfVQJ = BigInt("769")
		const uintUk8hIx = BigInt("196")
		const addressAbV33w7 = accounts[1]
		const uint256Rlbher7 = await LIBERAPAYeq5bVRe.totalSupply.call({from: accounts[0]});
		const uint256jiDSjAo = await LIBERAPAYeq5bVRe.allowance.call(addressVbeuXnz, addressWF9W9a6, {from: accounts[1]});
//		await LIBERAPAYeq5bVRe.showLockState.call(addressyCqa16H, uintHnvp0kh, {from: accounts[4]});
//		await LIBERAPAYeq5bVRe.onlyNewOwner.call({from: accounts[4]});
//		const bool6FoPAj = await LIBERAPAYeq5bVRe.unlock.call(addresshXXD0U, uintavBWZ6g, {from: accounts[2]});
//		const boolAdJryK = await LIBERAPAYeq5bVRe.lock.call(addressAbV33w7, uintUk8hIx, uintzRcfVQJ, {from: accounts[1]});

		assert.equal(uint256Rlbher7, BigInt("3000000000000000000000000000"))
		assert.equal(uint256jiDSjAo, BigInt("0"))
		await expect(LIBERAPAYeq5bVRe.showLockState.call(addressyCqa16H, uintHnvp0kh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYHbW6Ked = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSfkcwlv = accounts[4]
		const addressOIrftEK = accounts[3]
		await LIBERAPAYHbW6Ked.onlyOwner.call({from: accounts[0]});
		const uint256rykhQ9p = await LIBERAPAYHbW6Ked.allowance.call(addressOIrftEK, addressSfkcwlv, {from: accounts[3]});
		const boolXxYHIhv = await LIBERAPAYHbW6Ked.acceptOwnership.call({from: accounts[0]});
		await LIBERAPAYHbW6Ked.unpause.call({from: accounts[0]});
		const uint256kf0p0ZW = await LIBERAPAYHbW6Ked.totalSupply.call({from: accounts[1]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYadLg7Jv = await LIBERAPAY.new({from: accounts[1]});
		const addressj9PUt8Z = accounts[3]
		const uintMNlDmgM = BigInt("940")
		const addressuTBjqDb = accounts[5]
		const uintIdgF2od = BigInt("526")
		const addressQXjGJJZ = accounts[4]
		const uintwRpBCg8 = BigInt("998")
		const addressYfAkfHK = accounts[2]
		const addressvkbBgRI = await LIBERAPAYadLg7Jv.transferOwnership.call(addressj9PUt8Z, {from: accounts[1]});
//		const booliuOgQox = await LIBERAPAYadLg7Jv.mint.call(addressuTBjqDb, uintMNlDmgM, {from: accounts[0]});
//		const boolmN0lXT9 = await LIBERAPAYadLg7Jv.decreaseAllowance.call(addressQXjGJJZ, uintIdgF2od, {from: "0x0000000000000000000000000000000000000001"});
//		const boolU3JT7Gr = await LIBERAPAYadLg7Jv.distribute.call(addressYfAkfHK, uintwRpBCg8, {from: accounts[4]});

		await expect(LIBERAPAYadLg7Jv.mint.call(addressuTBjqDb, uintMNlDmgM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcOE1OSr = await LIBERAPAY.new({from: accounts[1]});
		const uintRo7Z3QX = BigInt("1674")
		const addressZWp5B4 = accounts[3]
		const uintv3fzur5 = BigInt("87")
		const uintMthTVZ0 = BigInt("1785")
		const addressg5nhIcY = accounts[0]
		const boolbZR3OOx = await LIBERAPAYcOE1OSr.approve.call(addressZWp5B4, uintRo7Z3QX, {from: accounts[2]});
//		const boolW6PxFmS = await LIBERAPAYcOE1OSr.burn.call(uintv3fzur5, {from: accounts[2]});
//		const boolofcg2yu = await LIBERAPAYcOE1OSr.unlock.call(addressg5nhIcY, uintMthTVZ0, {from: accounts[2]});

		assert.equal(boolbZR3OOx, true)
		await expect(LIBERAPAYcOE1OSr.burn.call(uintv3fzur5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUSeUUoD = await LIBERAPAY.new({from: accounts[2]});
		const uintNaJiakC = BigInt("233")
		const addressoiNzMv = "0x0000000000000000000000000000000000000001"
		const addressohpKFrZ = accounts[0]
		const uintMA95Kn = BigInt("912")
		const addressyl6mpUd = "0x0000000000000000000000000000000000000002"
		const addressK6jrtMW = accounts[1]
//		const boolCbI79GG = await LIBERAPAYUSeUUoD.unlock.call(addressoiNzMv, uintNaJiakC, {from: accounts[2]});
//		const boolRBuEgEd = await LIBERAPAYUSeUUoD.freezeAccount.call(addressohpKFrZ, {from: accounts[4]});
//		const boolJGPALxK = await LIBERAPAYUSeUUoD.transferFrom.call(addressK6jrtMW, addressyl6mpUd, uintMA95Kn, {from: accounts[5]});
//		await LIBERAPAYUSeUUoD.f.call({from: accounts[2]});

		await expect(LIBERAPAYUSeUUoD.unlock.call(addressoiNzMv, uintNaJiakC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUSeUUoD = await LIBERAPAY.new({from: accounts[2]});
		const uintzZvNKRD = BigInt("912")
		const addresskxrr4L = "0x0000000000000000000000000000000000000001"
		const addressWhWHhQ6 = accounts[2]
//		const boolJGPALxK = await LIBERAPAYUSeUUoD.transferFrom.call(addressWhWHhQ6, addresskxrr4L, uintzZvNKRD, {from: accounts[5]});
//		await LIBERAPAYUSeUUoD.f.call({from: accounts[2]});

		await expect(LIBERAPAYUSeUUoD.transferFrom.call(addressWhWHhQ6, addresskxrr4L, uintzZvNKRD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYY5qNKvT = await LIBERAPAY.new({from: accounts[1]});
		const addressWPe74ao = accounts[4]
		const uintD2axsPu = BigInt("1288")
		const addresspQ0AYLH = accounts[1]
		const uintFOUKFXZ = BigInt("1862")
		const addresstm9fd0g = accounts[5]
		const uint256kHZtD7j = await LIBERAPAYY5qNKvT.balanceOf.call(addressWPe74ao, {from: accounts[0]});
//		const booleJIytvK = await LIBERAPAYY5qNKvT.burnFrom.call(addresspQ0AYLH, uintD2axsPu, {from: accounts[1]});
//		const boolfc0nvoE = await LIBERAPAYY5qNKvT.acceptOwnership.call({from: accounts[5]});
//		await LIBERAPAYY5qNKvT.unpause.call({from: accounts[5]});
//		const boolrhR9KWB = await LIBERAPAYY5qNKvT.increaseAllowance.call(addresstm9fd0g, uintFOUKFXZ, {from: accounts[0]});

		assert.equal(uint256kHZtD7j, BigInt("0"))
		await expect(LIBERAPAYY5qNKvT.burnFrom.call(addresspQ0AYLH, uintD2axsPu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcOE1OSr = await LIBERAPAY.new({from: accounts[1]});
		const uintZWOD8M7 = BigInt("1644")
		const addressRL6We6k = accounts[0]
		const uintfW4IFsG = BigInt("111")
		const addressq8PXzTP = accounts[2]
		const uinto7GqKqo = BigInt("1785")
		const addressOwYSrm = accounts[0]
//		const boolcqEKmu6 = await LIBERAPAYcOE1OSr.transfer.call(addressRL6We6k, uintZWOD8M7, {from: accounts[4]});
//		const boolew08ELQ = await LIBERAPAYcOE1OSr.increaseAllowance.call(addressq8PXzTP, uintfW4IFsG, {from: accounts[2]});
//		const boolofcg2yu = await LIBERAPAYcOE1OSr.unlock.call(addressOwYSrm, uinto7GqKqo, {from: accounts[2]});

		await expect(LIBERAPAYcOE1OSr.transfer.call(addressRL6We6k, uintZWOD8M7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcOE1OSr = await LIBERAPAY.new({from: accounts[1]});
		const uintiXZKC11 = BigInt("111")
		const addressXrlq9yC = accounts[2]
		const uintkIiQhOT = BigInt("1785")
		const addressxDplrX5 = accounts[0]
		const boolew08ELQ = await LIBERAPAYcOE1OSr.increaseAllowance.call(addressXrlq9yC, uintiXZKC11, {from: accounts[2]});
//		const boolofcg2yu = await LIBERAPAYcOE1OSr.unlock.call(addressxDplrX5, uintkIiQhOT, {from: accounts[2]});

		assert.equal(boolew08ELQ, true)
		await expect(LIBERAPAYcOE1OSr.unlock.call(addressxDplrX5, uintkIiQhOT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTp64Mbd = await LIBERAPAY.new({from: accounts[0]});
		const addressVJiibuE = accounts[0]
		const addressADBG2K1 = accounts[2]
		const uintdljVDIw = BigInt("1527")
		const addressAIUzNYQ = accounts[5]
		const uintsQWmm2 = BigInt("1001")
		const addressRirBvxi = accounts[2]
		const uint256EEDmE10 = await LIBERAPAYTp64Mbd.allowance.call(addressADBG2K1, addressVJiibuE, {from: accounts[2]});
		const uint256HxyQEuh = await LIBERAPAYTp64Mbd.getNowTime.call({from: accounts[4]});
//		await LIBERAPAYTp64Mbd.showLockState.call(addressAIUzNYQ, uintdljVDIw, {from: accounts[0]});
//		const boolqrHLlhx = await LIBERAPAYTp64Mbd.acceptOwnership.call({from: accounts[3]});
//		await LIBERAPAYTp64Mbd.unpause.call({from: accounts[3]});
//		const boolwMk0LyI = await LIBERAPAYTp64Mbd.transfer.call(addressRirBvxi, uintsQWmm2, {from: accounts[1]});

		assert.equal(uint256EEDmE10, BigInt("0"))
		assert.equal(uint256HxyQEuh, BigInt("1630231287"))
		await expect(LIBERAPAYTp64Mbd.showLockState.call(addressAIUzNYQ, uintdljVDIw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYY5qNKvT = await LIBERAPAY.new({from: accounts[1]});
		const addresshZGzXyK = accounts[4]
		const uintMWDqjA1 = BigInt("1011")
		const addressFw9kLEO = accounts[5]
		const uintM9B4fQe = BigInt("1862")
		const addressHXYWweF = accounts[5]
		const uint256kHZtD7j = await LIBERAPAYY5qNKvT.balanceOf.call(addresshZGzXyK, {from: accounts[0]});
		const boolKFiGqai = await LIBERAPAYY5qNKvT.transfer.call(addressFw9kLEO, uintMWDqjA1, {from: accounts[1]});
//		await LIBERAPAYY5qNKvT.unpause.call({from: accounts[5]});
//		const boolrhR9KWB = await LIBERAPAYY5qNKvT.increaseAllowance.call(addressHXYWweF, uintM9B4fQe, {from: accounts[0]});

		assert.equal(boolKFiGqai, true)
		assert.equal(uint256kHZtD7j, BigInt("0"))
		await expect(LIBERAPAYY5qNKvT.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJZtwJ4G = await LIBERAPAY.new({from: accounts[1]});
		const uintTeoKeKK = BigInt("528")
		const addressDMXJ46t = accounts[0]
		const uintVzw3mbk = BigInt("1344")
		const addresscA9YYls = accounts[4]
		const boolj6giGlb = await LIBERAPAYJZtwJ4G.distribute.call(addressDMXJ46t, uintTeoKeKK, {from: accounts[1]});
//		await LIBERAPAYJZtwJ4G.whenPaused.call({from: accounts[3]});
//		const boolKYB1BGm = await LIBERAPAYJZtwJ4G.burnFrom.call(addresscA9YYls, uintVzw3mbk, {from: accounts[0]});

		assert.equal(boolj6giGlb, true)
		await expect(LIBERAPAYJZtwJ4G.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTp64Mbd = await LIBERAPAY.new({from: accounts[0]});
		const uintFENU0to = BigInt("1973")
		const uintpnobhup = BigInt("1003")
		const addressHzJIEDl = accounts[3]
		const boolk3wHNOK = await LIBERAPAYTp64Mbd.burn.call(uintFENU0to, {from: accounts[0]});
		const uint256nwPzErB = await LIBERAPAYTp64Mbd.getNowTime.call({from: accounts[3]});
//		const bool5qW8VA = await LIBERAPAYTp64Mbd.acceptOwnership.call({from: accounts[0]});
//		const boolwMk0LyI = await LIBERAPAYTp64Mbd.transfer.call(addressHzJIEDl, uintpnobhup, {from: accounts[1]});

		assert.equal(boolk3wHNOK, true)
		assert.equal(uint256nwPzErB, BigInt("1630231294"))
		await expect(LIBERAPAYTp64Mbd.acceptOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYY5qNKvT = await LIBERAPAY.new({from: accounts[1]});
		const addresskvVleHZ = accounts[2]
		const addressLWM1TvJ = accounts[5]
		const address9l1Glw = await LIBERAPAYY5qNKvT.upgradeTo.call(addresskvVleHZ, {from: accounts[1]});
		const uint256kHZtD7j = await LIBERAPAYY5qNKvT.balanceOf.call(addressLWM1TvJ, {from: accounts[0]});

		assert.equal(uint256kHZtD7j, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYVES1JNy = await LIBERAPAY.new({from: accounts[2]});
		const uintLq0MiY = BigInt("593")
		const addresstdRRWVz = accounts[1]
		const addressjN2NR3R = accounts[2]
		const boolgXtjriw = await LIBERAPAYVES1JNy.approve.call(addresstdRRWVz, uintLq0MiY, {from: accounts[1]});
//		const boolhEE9vaV = await LIBERAPAYVES1JNy.unfreezeAccount.call(addressjN2NR3R, {from: accounts[2]});

		assert.equal(boolgXtjriw, true)
		await expect(LIBERAPAYVES1JNy.unfreezeAccount.call(addressjN2NR3R, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUSeUUoD = await LIBERAPAY.new({from: accounts[2]});
		const uintHSMvcLQ = BigInt("1324")
		const uintHSybVSZ = BigInt("1500")
		const addressJBOvCnC = accounts[2]
		const uintf366b6 = BigInt("909")
		const addresso1Ng13q = "0x0000000000000000000000000000000000000002"
		const addressYa3Zh6E = accounts[1]
		const boolJk8lunv = await LIBERAPAYUSeUUoD.lock.call(addressJBOvCnC, uintHSybVSZ, uintHSMvcLQ, {from: accounts[2]});
//		const boolJGPALxK = await LIBERAPAYUSeUUoD.transferFrom.call(addressYa3Zh6E, addresso1Ng13q, uintf366b6, {from: accounts[5]});

		assert.equal(boolJk8lunv, true)
		await expect(LIBERAPAYUSeUUoD.transferFrom.call(addressYa3Zh6E, addresso1Ng13q, uintf366b6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTp64Mbd = await LIBERAPAY.new({from: accounts[0]});
		const addressDFSjsre = accounts[2]
		const uintOXcO8F = BigInt("1001")
		const addressybN2660 = accounts[4]
		const uint256CSDbPcy = await LIBERAPAYTp64Mbd.currentBalanceOf.call(addressDFSjsre, {from: accounts[2]});
//		const boolwMk0LyI = await LIBERAPAYTp64Mbd.transfer.call(addressybN2660, uintOXcO8F, {from: accounts[1]});

		assert.equal(uint256CSDbPcy, BigInt("0"))
		await expect(LIBERAPAYTp64Mbd.transfer.call(addressybN2660, uintOXcO8F, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYY5qNKvT = await LIBERAPAY.new({from: accounts[1]});
		const addressdCRvg8q = accounts[5]
		const uintXCTzXfY = BigInt("1744")
		const address49Vkhn = "0x0000000000000000000000000000000000000001"
		const uint256kHZtD7j = await LIBERAPAYY5qNKvT.balanceOf.call(addressdCRvg8q, {from: accounts[0]});
//		await LIBERAPAYY5qNKvT.pause.call({from: accounts[1]});
//		const boolFWnDmPY = await LIBERAPAYY5qNKvT.burnFrom.call(address49Vkhn, uintXCTzXfY, {from: accounts[5]});

		assert.equal(uint256kHZtD7j, BigInt("0"))
		await expect(LIBERAPAYY5qNKvT.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTp64Mbd = await LIBERAPAY.new({from: accounts[0]});
		const addressG5VmZk = accounts[0]
		const addressDiu5r96 = "0x0000000000000000000000000000000000000001"
		const addressUoXeWMe = accounts[3]
		const uinthvuWenK = BigInt("982")
		const addressH1W63So = "0x0000000000000000000000000000000000000001"
		const boolyMPy7LU = await LIBERAPAYTp64Mbd.freezeAccount.call(addressG5VmZk, {from: accounts[0]});
		const uint256QDb1fkZ = await LIBERAPAYTp64Mbd.allowance.call(addressUoXeWMe, addressDiu5r96, {from: accounts[2]});
//		const boolwMk0LyI = await LIBERAPAYTp64Mbd.transfer.call(addressH1W63So, uinthvuWenK, {from: accounts[1]});

		assert.equal(boolyMPy7LU, true)
		assert.equal(uint256QDb1fkZ, BigInt("0"))
		await expect(LIBERAPAYTp64Mbd.transfer.call(addressH1W63So, uinthvuWenK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTp64Mbd = await LIBERAPAY.new({from: accounts[0]});
		const uintsCELSFu = BigInt("687")
		const addressU3EqsLe = accounts[3]
		const uintckqHgvI = BigInt("1730")
		const uintNAey10s = BigInt("838")
		const addressX69sMPK = accounts[0]
		const addressaTKrtxL = accounts[5]
		const uintBg6p8kO = BigInt("1527")
		const addresszO7msTI = accounts[7]
//		const boolGjehaC = await LIBERAPAYTp64Mbd.mint.call(addressU3EqsLe, uintsCELSFu, {from: accounts[0]});
//		const boolASrVUe = await LIBERAPAYTp64Mbd.lock.call(addressX69sMPK, uintNAey10s, uintckqHgvI, {from: accounts[4]});
//		const addressD0rqtWr = await LIBERAPAYTp64Mbd.notFrozen.call(addressaTKrtxL, {from: accounts[3]});
//		await LIBERAPAYTp64Mbd.showLockState.call(addresszO7msTI, uintBg6p8kO, {from: accounts[0]});

		await expect(LIBERAPAYTp64Mbd.mint.call(addressU3EqsLe, uintsCELSFu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})