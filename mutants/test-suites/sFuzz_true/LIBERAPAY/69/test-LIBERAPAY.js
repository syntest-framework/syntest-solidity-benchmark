const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjYdE0Wb = await LIBERAPAY.new({from: accounts[5]});
		const uintvSDwfbc = BigInt("1943")
		const addressGxy4LMG = accounts[5]
//		const boolddbODcC = await LIBERAPAYjYdE0Wb.distribute.call(addressGxy4LMG, uintvSDwfbc, {from: accounts[0]});
//		await LIBERAPAYjYdE0Wb.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYjYdE0Wb.distribute.call(addressGxy4LMG, uintvSDwfbc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const addressGwqGJEd = accounts[2]
		const addresskixYvB2 = "0x0000000000000000000000000000000000000001"
		const addressoQRGpGN = accounts[2]
		const uintz8SUyxW = BigInt("435")
		const addressT3udfV0 = accounts[1]
		const uint256XKg7uUw = await LIBERAPAYppu7XFt.allowance.call(addresskixYvB2, addressGwqGJEd, {from: accounts[2]});
		const uint256RARCMH6 = await LIBERAPAYppu7XFt.balanceOf.call(addressoQRGpGN, {from: accounts[5]});
//		const boolwSc7j5x = await LIBERAPAYppu7XFt.unlock.call(addressT3udfV0, uintz8SUyxW, {from: accounts[5]});

		assert.equal(uint256RARCMH6, BigInt("0"))
		assert.equal(uint256XKg7uUw, BigInt("0"))
		await expect(LIBERAPAYppu7XFt.unlock.call(addressT3udfV0, uintz8SUyxW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuUEAX13 = await LIBERAPAY.new({from: accounts[1]});
		const addressTMJVNDW = accounts[4]
		const addressAuVuIkT = accounts[0]
		const addressHt5NVx1 = accounts[1]
		const uintCfSxnz = BigInt("715")
		const addressRn85kmU = accounts[1]
		const uintbna7uWg = BigInt("1921")
		const addressSdnTi5I = accounts[3]
		const uint256NAYq7DI = await LIBERAPAYuUEAX13.currentBalanceOf.call(addressTMJVNDW, {from: accounts[5]});
		const uint256CuWmOZE = await LIBERAPAYuUEAX13.allowance.call(addressHt5NVx1, addressAuVuIkT, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYuUEAX13.onlyNewOwner.call({from: accounts[0]});
//		const boolCPBTNLg = await LIBERAPAYuUEAX13.burnFrom.call(addressRn85kmU, uintCfSxnz, {from: accounts[4]});
//		const boolrBniMPr = await LIBERAPAYuUEAX13.burnFrom.call(addressSdnTi5I, uintbna7uWg, {from: accounts[4]});

		assert.equal(uint256CuWmOZE, BigInt("0"))
		assert.equal(uint256NAYq7DI, BigInt("0"))
		await expect(LIBERAPAYuUEAX13.onlyNewOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYM3IoIP = await LIBERAPAY.new({from: accounts[2]});
		const uintSng9KBy = BigInt("7")
		const addressTmK83Bm = accounts[0]
		const addressFT5l6Q5 = accounts[5]
		const uintCknT9gp = BigInt("1267")
		const addressQyLWBrU = accounts[4]
		const addressvCJu6T4 = accounts[3]
		const uintdA9EQc1 = BigInt("1142")
		const addressrBK46jV = accounts[0]
//		const boolFikOsN = await LIBERAPAYM3IoIP.decreaseAllowance.call(addressTmK83Bm, uintSng9KBy, {from: "0x0000000000000000000000000000000000000001"});
//		const addressDz23sZi = await LIBERAPAYM3IoIP.transferOwnership.call(addressFT5l6Q5, {from: accounts[2]});
//		const boolcAWST1i = await LIBERAPAYM3IoIP.transferFrom.call(addressvCJu6T4, addressQyLWBrU, uintCknT9gp, {from: accounts[2]});
//		const boolA88M5F = await LIBERAPAYM3IoIP.increaseAllowance.call(addressrBK46jV, uintdA9EQc1, {from: accounts[3]});

		await expect(LIBERAPAYM3IoIP.decreaseAllowance.call(addressTmK83Bm, uintSng9KBy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYi6G4sAS = await LIBERAPAY.new({from: accounts[4]});
		const uintr7OvOj = BigInt("983")
		const addressqav7tc3 = "0x0000000000000000000000000000000000000001"
		const addressJpUPwk = accounts[2]
		const uintgOx4XLo = BigInt("344")
		const uintmQ1JRtS = BigInt("1064")
		const addressZD6S7yc = "0x0000000000000000000000000000000000000001"
		const uint256u1ZHKWx = await LIBERAPAYi6G4sAS.getNowTime.call({from: accounts[1]});
//		await LIBERAPAYi6G4sAS.unpause.call({from: accounts[1]});
//		const boolBtK2HV6 = await LIBERAPAYi6G4sAS.transferFrom.call(addressJpUPwk, addressqav7tc3, uintr7OvOj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolspAP9sg = await LIBERAPAYi6G4sAS.lock.call(addressZD6S7yc, uintmQ1JRtS, uintgOx4XLo, {from: accounts[2]});

		assert.equal(uint256u1ZHKWx, BigInt("1630230972"))
		await expect(LIBERAPAYi6G4sAS.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYgdHd3Lu = await LIBERAPAY.new({from: accounts[3]});
		const uintqYK3m0n = BigInt("190")
		const addressNxQXTeF = accounts[2]
		const uintrMDqwgW = BigInt("141")
		const addressNRjmDXh = accounts[2]
		const addressdFzM3D0 = accounts[5]
		const addressYExRpD = accounts[3]
//		const boolm17upaF = await LIBERAPAYgdHd3Lu.burnFrom.call(addressNxQXTeF, uintqYK3m0n, {from: accounts[0]});
//		await LIBERAPAYgdHd3Lu.whenNotPaused.call({from: accounts[3]});
//		const booliRTwJfB = await LIBERAPAYgdHd3Lu.increaseAllowance.call(addressNRjmDXh, uintrMDqwgW, {from: accounts[5]});
//		await LIBERAPAYgdHd3Lu.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256d2jZ94r = await LIBERAPAYgdHd3Lu.allowance.call(addressYExRpD, addressdFzM3D0, {from: accounts[3]});
//		await LIBERAPAYgdHd3Lu.whenNotPaused.call({from: accounts[3]});

		await expect(LIBERAPAYgdHd3Lu.burnFrom.call(addressNxQXTeF, uintqYK3m0n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwmlg6K = await LIBERAPAY.new({from: accounts[4]});
		const addressXsnYIjf = accounts[3]
//		await LIBERAPAYwmlg6K.f.call({from: accounts[3]});
//		const uint256G2MuxD = await LIBERAPAYwmlg6K.balanceOf.call(addressXsnYIjf, {from: accounts[0]});
//		await LIBERAPAYwmlg6K.onlyOwner.call({from: accounts[0]});

		await expect(LIBERAPAYwmlg6K.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQMilsYR = await LIBERAPAY.new({from: accounts[3]});
		const addressb8ja6dT = accounts[2]
		const addressH6zsz0D = accounts[2]
		const uintLso6SHe = BigInt("752")
		const addressvfWh9AR = accounts[3]
		const uint256uVCqlUk = await LIBERAPAYQMilsYR.totalSupply.call({from: accounts[1]});
//		const addressFQEhRWD = await LIBERAPAYQMilsYR.transferOwnership.call(addressb8ja6dT, {from: accounts[4]});
//		const boolvf6Jzar = await LIBERAPAYQMilsYR.acceptOwnership.call({from: accounts[5]});
//		const booleT5UvXe = await LIBERAPAYQMilsYR.freezeAccount.call(addressH6zsz0D, {from: accounts[3]});
//		await LIBERAPAYQMilsYR.showLockState.call(addressvfWh9AR, uintLso6SHe, {from: accounts[3]});
//		await LIBERAPAYQMilsYR.whenPaused.call({from: accounts[5]});

		assert.equal(uint256uVCqlUk, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYQMilsYR.transferOwnership.call(addressb8ja6dT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYVlqpbbe = await LIBERAPAY.new({from: accounts[0]});
		const address3CaWy6 = accounts[0]
		const uintQd2Hj9 = BigInt("1895")
		const addressPJUb3xs = accounts[3]
		const uintKqFp3fn = BigInt("1277")
		const uintMmkCmmD = BigInt("68")
		const addressjKYpMP4 = accounts[3]
		const boolOU8xe7s = await LIBERAPAYVlqpbbe.freezeAccount.call(address3CaWy6, {from: accounts[0]});
//		const boolwvC8wm1 = await LIBERAPAYVlqpbbe.unlock.call(addressPJUb3xs, uintQd2Hj9, {from: accounts[1]});
//		const boolKB7tER = await LIBERAPAYVlqpbbe.lock.call(addressjKYpMP4, uintMmkCmmD, uintKqFp3fn, {from: accounts[1]});
//		const uint256QJrdg9 = await LIBERAPAYVlqpbbe.getNowTime.call({from: accounts[4]});

		assert.equal(boolOU8xe7s, true)
		await expect(LIBERAPAYVlqpbbe.unlock.call(addressPJUb3xs, uintQd2Hj9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYYn3sQrV = await LIBERAPAY.new({from: accounts[1]});
		const uintRpIczg = BigInt("1383")
		const addressdcNx0Qw = accounts[5]
		const uintI9adafY = BigInt("694")
		const addressY0VN1e = accounts[2]
		const addressGTO0Qep = accounts[4]
		const boolycZ5mxQ = await LIBERAPAYYn3sQrV.distribute.call(addressdcNx0Qw, uintRpIczg, {from: accounts[1]});
//		const boolwnhxtf = await LIBERAPAYYn3sQrV.burnFrom.call(addressY0VN1e, uintI9adafY, {from: accounts[5]});
//		const boolVQ1qRts = await LIBERAPAYYn3sQrV.freezeAccount.call(addressGTO0Qep, {from: accounts[0]});
//		await LIBERAPAYYn3sQrV.onlyNewOwner.call({from: accounts[4]});

		assert.equal(boolycZ5mxQ, true)
		await expect(LIBERAPAYYn3sQrV.burnFrom.call(addressY0VN1e, uintI9adafY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const uintUvQhpuu = BigInt("314")
		const addressOLYb7hj = accounts[3]
		const addressqcp4PAL = accounts[4]
		const uintiSqptLE = BigInt("428")
		const addressRaO0prt = accounts[1]
		const boolgFhl4ir = await LIBERAPAYppu7XFt.increaseAllowance.call(addressOLYb7hj, uintUvQhpuu, {from: accounts[5]});
//		const addressdNplXge = await LIBERAPAYppu7XFt.notFrozen.call(addressqcp4PAL, {from: accounts[1]});
//		const boolwSc7j5x = await LIBERAPAYppu7XFt.unlock.call(addressRaO0prt, uintiSqptLE, {from: accounts[5]});

		assert.equal(boolgFhl4ir, true)
		await expect(LIBERAPAYppu7XFt.notFrozen.call(addressqcp4PAL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuUEAX13 = await LIBERAPAY.new({from: accounts[1]});
		const uintrrQJhGJ = BigInt("1438")
		const addresswNhjoyo = accounts[4]
		const addressYjda3my = accounts[4]
		const addressbO5hdw8 = accounts[5]
		const addressLAFsIA6 = accounts[4]
		const uintDL6it4S = BigInt("1805")
		const addresskVrwrov = accounts[1]
//		const boolpnUcpmB = await LIBERAPAYuUEAX13.transferFrom.call(addressYjda3my, addresswNhjoyo, uintrrQJhGJ, {from: accounts[2]});
//		const uint256NAYq7DI = await LIBERAPAYuUEAX13.currentBalanceOf.call(addressbO5hdw8, {from: accounts[5]});
//		const uint256qOZqeKQ = await LIBERAPAYuUEAX13.currentBalanceOf.call(addressLAFsIA6, {from: accounts[2]});
//		await LIBERAPAYuUEAX13.onlyNewOwner.call({from: accounts[0]});
//		const boolCPBTNLg = await LIBERAPAYuUEAX13.burnFrom.call(addresskVrwrov, uintDL6it4S, {from: accounts[4]});

		await expect(LIBERAPAYuUEAX13.transferFrom.call(addressYjda3my, addresswNhjoyo, uintrrQJhGJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const addressAQmzvbK = accounts[2]
		const uintVpHzEdD = BigInt("1059")
		const uint0DFZux = BigInt("1396")
		const addressTBp2vD = accounts[3]
		const uint9fzspT = BigInt("451")
		const addressFxBF6tz = accounts[1]
		const uint256RARCMH6 = await LIBERAPAYppu7XFt.balanceOf.call(addressAQmzvbK, {from: accounts[5]});
//		const boolRSscIeS = await LIBERAPAYppu7XFt.lock.call(addressTBp2vD, uint0DFZux, uintVpHzEdD, {from: accounts[1]});
//		await LIBERAPAYppu7XFt.whenPaused.call({from: accounts[1]});
//		const boolwSc7j5x = await LIBERAPAYppu7XFt.unlock.call(addressFxBF6tz, uint9fzspT, {from: accounts[5]});

		assert.equal(uint256RARCMH6, BigInt("0"))
		await expect(LIBERAPAYppu7XFt.lock.call(addressTBp2vD, uint0DFZux, uintVpHzEdD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const uintxFgDj5V = BigInt("87")
		const addresskboHaX = "0x0000000000000000000000000000000000000001"
		const uintjNCnr9b = BigInt("1944")
		const addresscjsR3WO = "0x0000000000000000000000000000000000000001"
		const uintlzzJJW3 = BigInt("424")
		const addressYAmgn4t = accounts[1]
		const boolVnkNy7m = await LIBERAPAYppu7XFt.distribute.call(addresskboHaX, uintxFgDj5V, {from: accounts[1]});
//		const booljMv3LZB = await LIBERAPAYppu7XFt.transfer.call(addresscjsR3WO, uintjNCnr9b, {from: accounts[5]});
//		const boolwSc7j5x = await LIBERAPAYppu7XFt.unlock.call(addressYAmgn4t, uintlzzJJW3, {from: accounts[5]});

		assert.equal(boolVnkNy7m, true)
		await expect(LIBERAPAYppu7XFt.transfer.call(addresscjsR3WO, uintjNCnr9b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuUEAX13 = await LIBERAPAY.new({from: accounts[1]});
		const uintv1F9Y59 = BigInt("169")
		const addressrA1wp7x = accounts[4]
		const boolMjchYBS = await LIBERAPAYuUEAX13.burn.call(uintv1F9Y59, {from: accounts[1]});
		const uint256NAYq7DI = await LIBERAPAYuUEAX13.currentBalanceOf.call(addressrA1wp7x, {from: accounts[5]});
//		await LIBERAPAYuUEAX13.onlyNewOwner.call({from: accounts[0]});

		assert.equal(boolMjchYBS, true)
		assert.equal(uint256NAYq7DI, BigInt("0"))
		await expect(LIBERAPAYuUEAX13.onlyNewOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const addressZHKEwwj = accounts[3]
		const uintCaqgNBt = BigInt("424")
		const addressHoCtpUp = accounts[2]
		const addressLnmJMb4 = accounts[2]
		const addressYIziOw = await LIBERAPAYppu7XFt.upgradeTo.call(addressZHKEwwj, {from: accounts[1]});
//		const boolwSc7j5x = await LIBERAPAYppu7XFt.unlock.call(addressHoCtpUp, uintCaqgNBt, {from: accounts[5]});
//		const boolfFxk2u = await LIBERAPAYppu7XFt.freezeAccount.call(addressLnmJMb4, {from: accounts[0]});

		await expect(LIBERAPAYppu7XFt.unlock.call(addressHoCtpUp, uintCaqgNBt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuUEAX13 = await LIBERAPAY.new({from: accounts[1]});
		const addressY6cI6US = accounts[4]
		const uintyxXneee = BigInt("1037")
		const addressr8dS1Pt = accounts[1]
		const uintcVeDA2C = BigInt("1805")
		const addressXzGhSCK = accounts[1]
		const uint256NAYq7DI = await LIBERAPAYuUEAX13.currentBalanceOf.call(addressY6cI6US, {from: accounts[5]});
//		await LIBERAPAYuUEAX13.showLockState.call(addressr8dS1Pt, uintyxXneee, {from: accounts[2]});
//		await LIBERAPAYuUEAX13.onlyNewOwner.call({from: accounts[0]});
//		const boolCPBTNLg = await LIBERAPAYuUEAX13.burnFrom.call(addressXzGhSCK, uintcVeDA2C, {from: accounts[4]});

		assert.equal(uint256NAYq7DI, BigInt("0"))
		await expect(LIBERAPAYuUEAX13.showLockState.call(addressr8dS1Pt, uintyxXneee, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const uintLrp1OEx = BigInt("87")
		const addressyi6JPMY = "0x0000000000000000000000000000000000000001"
		const uintoaGZcbU = BigInt("227")
		const address9VFmPn = accounts[2]
		const uintU3Y7JlT = BigInt("1944")
		const addresswarnu4b = "0x0000000000000000000000000000000000000000"
		const boolVnkNy7m = await LIBERAPAYppu7XFt.distribute.call(addressyi6JPMY, uintLrp1OEx, {from: accounts[1]});
		const boolIQrKapG = await LIBERAPAYppu7XFt.approve.call(address9VFmPn, uintoaGZcbU, {from: accounts[1]});
//		const booljMv3LZB = await LIBERAPAYppu7XFt.transfer.call(addresswarnu4b, uintU3Y7JlT, {from: accounts[5]});

		assert.equal(boolIQrKapG, true)
		assert.equal(boolVnkNy7m, true)
		await expect(LIBERAPAYppu7XFt.transfer.call(addresswarnu4b, uintU3Y7JlT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwEhMlT = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMlJ6aix = BigInt("1836")
		const addressQTzA2Br = accounts[5]
		const addresszFslhNc = accounts[3]
		const boolrAEI9a = await LIBERAPAYwEhMlT.distribute.call(addressQTzA2Br, uintMlJ6aix, {from: accounts[2]});
		const addresswmHzBeA = await LIBERAPAYwEhMlT.upgradeTo.call(addresszFslhNc, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const uintkhFzXqY = BigInt("89")
		const addresseixiC9n = accounts[2]
		const addressIxhltnQ = accounts[2]
//		await LIBERAPAYppu7XFt.pause.call({from: accounts[1]});
//		const boolI7ViKlJ = await LIBERAPAYppu7XFt.transferFrom.call(addressIxhltnQ, addresseixiC9n, uintkhFzXqY, {from: accounts[0]});

		await expect(LIBERAPAYppu7XFt.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const addressmGLVc8S = accounts[3]
		const uintUs2UEXD = BigInt("2044")
		const addressJiiHBrh = accounts[0]
		const uint256RARCMH6 = await LIBERAPAYppu7XFt.balanceOf.call(addressmGLVc8S, {from: accounts[5]});
		const boolxYTmaM = await LIBERAPAYppu7XFt.transfer.call(addressJiiHBrh, uintUs2UEXD, {from: accounts[1]});

		assert.equal(boolxYTmaM, true)
		assert.equal(uint256RARCMH6, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkAhT77U = await LIBERAPAY.new({from: accounts[1]});
		const addressHfgZj2 = accounts[3]
		const addresshHsZFJJ = accounts[4]
		const addressyuHj1x = accounts[4]
		const addressdnTENf2 = accounts[2]
		const uintD0tc4vQ = BigInt("174")
		const addressQ80o6I9 = accounts[0]
		const addressnzAi73Y = await LIBERAPAYkAhT77U.transferOwnership.call(addressHfgZj2, {from: accounts[1]});
//		const addressjrqnrls = await LIBERAPAYkAhT77U.notFrozen.call(addresshHsZFJJ, {from: accounts[3]});
//		const uint256RDNbQv9 = await LIBERAPAYkAhT77U.currentBalanceOf.call(addressyuHj1x, {from: accounts[4]});
//		const uint256Bv8DKFO = await LIBERAPAYkAhT77U.balanceOf.call(addressdnTENf2, {from: accounts[2]});
//		const boolAhhZ1u6 = await LIBERAPAYkAhT77U.burnFrom.call(addressQ80o6I9, uintD0tc4vQ, {from: accounts[3]});

		await expect(LIBERAPAYkAhT77U.notFrozen.call(addresshHsZFJJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const uintRgMAtb1 = BigInt("1140")
		const addressB92dy0Q = accounts[4]
		const addressSeH166J = accounts[1]
		const uintF7YMMPO = BigInt("209")
		const addressDqxjGfO = accounts[0]
		const uintipuFHXi = BigInt("108")
		const addressyzjMR31 = accounts[2]
		const addressmvFUMrq = accounts[3]
//		const boolIAJMGgt = await LIBERAPAYppu7XFt.transferFrom.call(addressSeH166J, addressB92dy0Q, uintRgMAtb1, {from: accounts[1]});
//		const boolscJPZ3l = await LIBERAPAYppu7XFt.burnFrom.call(addressDqxjGfO, uintF7YMMPO, {from: accounts[1]});
//		const boolI7ViKlJ = await LIBERAPAYppu7XFt.transferFrom.call(addressmvFUMrq, addressyzjMR31, uintipuFHXi, {from: accounts[0]});

		await expect(LIBERAPAYppu7XFt.transferFrom.call(addressSeH166J, addressB92dy0Q, uintRgMAtb1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSuDqSud = await LIBERAPAY.new({from: accounts[1]});
		const uintDqdfANy = BigInt("1696")
		const addressDMN6iNG = accounts[3]
		const addressv00ibp = accounts[4]
		const addresst7yl3Nw = accounts[0]
		const uintP3d8Bz9 = BigInt("242")
		const addressdOVMxqs = accounts[4]
//		const boolvphb1VR = await LIBERAPAYSuDqSud.unlock.call(addressDMN6iNG, uintDqdfANy, {from: accounts[1]});
//		const uint256UTXf9nd = await LIBERAPAYSuDqSud.currentBalanceOf.call(addressv00ibp, {from: accounts[1]});
//		const uint256Bd7Ex6U = await LIBERAPAYSuDqSud.balanceOf.call(addresst7yl3Nw, {from: accounts[4]});
//		const boolp3QGm88 = await LIBERAPAYSuDqSud.unlock.call(addressdOVMxqs, uintP3d8Bz9, {from: accounts[4]});

		await expect(LIBERAPAYSuDqSud.unlock.call(addressDMN6iNG, uintDqdfANy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const addressKUpyrCe = "0x0000000000000000000000000000000000000001"
		const addressUbjspeM = accounts[3]
		const uintq9fHCTf = BigInt("1522")
		const addresswI06mFl = accounts[1]
		const uintH98Lgfw = BigInt("1966")
		const addressVBOCKfg = "0x0000000000000000000000000000000000000000"
		const uint256uzHcAJi = await LIBERAPAYppu7XFt.allowance.call(addressUbjspeM, addressKUpyrCe, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbal18yu = await LIBERAPAYppu7XFt.mint.call(addresswI06mFl, uintq9fHCTf, {from: accounts[1]});
//		const booljMv3LZB = await LIBERAPAYppu7XFt.transfer.call(addressVBOCKfg, uintH98Lgfw, {from: accounts[5]});

		assert.equal(uint256uzHcAJi, BigInt("0"))
		await expect(LIBERAPAYppu7XFt.mint.call(addresswI06mFl, uintq9fHCTf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYppu7XFt = await LIBERAPAY.new({from: accounts[1]});
		const addressgaBEQd = accounts[3]
		const uintfR0zii = BigInt("108")
		const addressdiWZQeN = accounts[3]
		const addresspKUS1Ne = accounts[2]
//		const booltdspe6o = await LIBERAPAYppu7XFt.unfreezeAccount.call(addressgaBEQd, {from: accounts[1]});
//		const boolI7ViKlJ = await LIBERAPAYppu7XFt.transferFrom.call(addresspKUS1Ne, addressdiWZQeN, uintfR0zii, {from: accounts[0]});

		await expect(LIBERAPAYppu7XFt.unfreezeAccount.call(addressgaBEQd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})