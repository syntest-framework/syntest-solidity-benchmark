const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYOYtvJ0z = await KPLAY.new({from: accounts[0]});
		const addressV6PfWW7 = accounts[1]
		const uintcnHKjb5 = BigInt("1967")
		const addressL2P245X = accounts[0]
		const addressJKq7Nwi = "0x0000000000000000000000000000000000000001"
		const addressNYZFCt7 = accounts[1]
		const uint256h8opxd = await KPLAYOYtvJ0z.lockCount.call(addressV6PfWW7, {from: accounts[1]});
		const boolIfOxPhq = await KPLAYOYtvJ0z.transferFrom.call(addressJKq7Nwi, addressL2P245X, uintcnHKjb5, {from: accounts[4]});
		const addressrREfhHJ = await KPLAYOYtvJ0z.transferOwnership.call(addressNYZFCt7, {from: accounts[0]});

		assert.equal(uint256h8opxd, BigInt("0"))
		await expect(KPLAYOYtvJ0z.transferFrom.call(addressJKq7Nwi, addressL2P245X, uintcnHKjb5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIfKP9J = await KPLAY.new({from: accounts[4]});
		const uintoNEc46b = BigInt("769")
		const addressMOX3pnc = accounts[4]
		const addressEWPH5Vz = "0x0000000000000000000000000000000000000001"
		const boolBy97Hnl = await KPLAYIfKP9J.transfer.call(addressMOX3pnc, uintoNEc46b, {from: accounts[4]});
		await KPLAYIfKP9J.whenPaused.call({from: accounts[4]});
		await KPLAYIfKP9J.pause.call({from: accounts[5]});
		const uint256xuEY9UA = await KPLAYIfKP9J.balanceOf.call(addressEWPH5Vz, {from: accounts[5]});

		assert.equal(boolBy97Hnl, true)
		await expect(KPLAYIfKP9J.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYcqLJeNR = await KPLAY.new({from: accounts[4]});
		const uintEaA5Kz5 = BigInt("392")
		const uintgkocNot = BigInt("839")
		const addressVU5QwLY = accounts[1]
		const boolWYV4r4 = await KPLAYcqLJeNR.transferWithLock.call(addressVU5QwLY, uintgkocNot, uintEaA5Kz5, {from: accounts[3]});
		const uint256V0FPcXX = await KPLAYcqLJeNR.currentTime.call({from: accounts[0]});
		await KPLAYcqLJeNR.unpause.call({from: accounts[2]});

		await expect(KPLAYcqLJeNR.transferWithLock.call(addressVU5QwLY, uintgkocNot, uintEaA5Kz5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYCX2RPuN = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrbdcZru = BigInt("1611")
		const uintYTOk3zC = BigInt("339")
		const addressmhSuvUB = accounts[5]
		const uintOlEJLYw = BigInt("1314")
		const addressnpbBCOj = accounts[1]
		const addressU3FNwB1 = accounts[2]
		const addressVChVoMU = await KPLAYCX2RPuN.lock.call(addressmhSuvUB, uintYTOk3zC, uintrbdcZru, {from: accounts[2]});
		const addressJ2MV4t = await KPLAYCX2RPuN.unlock.call(addressnpbBCOj, uintOlEJLYw, {from: accounts[3]});
		const uint256P6HxXaW = await KPLAYCX2RPuN.balanceOf.call(addressU3FNwB1, {from: accounts[3]});
	});

	it('test for KPLAY', async () => {
		const KPLAYBEOllac = await KPLAY.new({from: accounts[3]});
		const addressk3Wkbr5 = accounts[3]
		const addresskAGrlgD = "0x0000000000000000000000000000000000000001"
		const addressSkRUepH = accounts[4]
		const uintjF0Lbjo = BigInt("789")
		const addressMVUu8xo = accounts[4]
		const uint256VXorl6k = await KPLAYBEOllac.balanceOf.call(addressk3Wkbr5, {from: accounts[3]});
		const uint256mCxwro5 = await KPLAYBEOllac.allowance.call(addressSkRUepH, addresskAGrlgD, {from: accounts[1]});
		const addressrJmKGa1 = await KPLAYBEOllac.burn.call(addressMVUu8xo, uintjF0Lbjo, {from: accounts[3]});

		assert.equal(uint256VXorl6k, BigInt("10000000000000000"))
		assert.equal(uint256mCxwro5, BigInt("0"))
		await expect(KPLAYBEOllac.burn.call(addressMVUu8xo, uintjF0Lbjo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVaHRyzy = await KPLAY.new({from: accounts[0]});
		const uintMzuCmZm = BigInt("1377")
		const addressgylk5Y1 = accounts[0]
		const uintqINTyCo = BigInt("1156")
		const addressjJBfIUc = accounts[1]
		const uintXvO3Kw = BigInt("765")
		const addressvBbi5Ky = accounts[2]
		const uintB2bRcni = BigInt("46")
		const addresssHMl6PN = accounts[4]
		const boolpejfTCA = await KPLAYVaHRyzy.decreaseAllowance.call(addressgylk5Y1, uintMzuCmZm, {from: accounts[4]});
		const boolToN2AJI = await KPLAYVaHRyzy.approve.call(addressjJBfIUc, uintqINTyCo, {from: accounts[3]});
		const addressgAqqPLT = await KPLAYVaHRyzy.burn.call(addressvBbi5Ky, uintXvO3Kw, {from: accounts[2]});
		const bool35zjTh = await KPLAYVaHRyzy.transfer.call(addresssHMl6PN, uintB2bRcni, {from: accounts[1]});
		await KPLAYVaHRyzy.whenNotPaused.call({from: accounts[1]});

		await expect(KPLAYVaHRyzy.decreaseAllowance.call(addressgylk5Y1, uintMzuCmZm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBEOllac = await KPLAY.new({from: accounts[3]});
		const uintgB5p1Po = BigInt("870")
		const addresssPosnNB = accounts[4]
		const addressiSaB8eU = "0x0000000000000000000000000000000000000001"
		const addressC463oR4 = accounts[4]
		const uint256bs9cXa2 = await KPLAYBEOllac.afterTime.call(uintgB5p1Po, {from: accounts[1]});
		const uint256VXorl6k = await KPLAYBEOllac.balanceOf.call(addresssPosnNB, {from: accounts[3]});
		const uint256mCxwro5 = await KPLAYBEOllac.allowance.call(addressC463oR4, addressiSaB8eU, {from: accounts[1]});

		assert.equal(uint256VXorl6k, BigInt("0"))
		assert.equal(uint256bs9cXa2, BigInt("1630230444"))
		assert.equal(uint256mCxwro5, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYDIFcCKN = await KPLAY.new({from: accounts[1]});
		const addressenE0G6N = accounts[2]
		const uintz4ko6DQ = BigInt("973")
		const addressnz4w9BE = accounts[1]
		const addressKEUXRr = accounts[3]
		const uintDed6ZUh = BigInt("430")
		const addressbPZfTL = accounts[2]
		const uintMpVJ75h = BigInt("578")
		const addressmUmq7mO = accounts[5]
		const addressf1QYjxP = accounts[0]
		const boolYvvTcqr = await KPLAYDIFcCKN.isFrozen.call(addressenE0G6N, {from: accounts[5]});
		const boolmV5h6G = await KPLAYDIFcCKN.transferFrom.call(addressKEUXRr, addressnz4w9BE, uintz4ko6DQ, {from: accounts[1]});
		const addresspxC8kED = await KPLAYDIFcCKN.unlock.call(addressbPZfTL, uintDed6ZUh, {from: accounts[2]});
		const boolz1bspXi = await KPLAYDIFcCKN.transferFrom.call(addressf1QYjxP, addressmUmq7mO, uintMpVJ75h, {from: accounts[5]});
		await KPLAYDIFcCKN.whenNotFrozen.call({from: accounts[1]});

		assert.equal(boolYvvTcqr, false)
		await expect(KPLAYDIFcCKN.transferFrom.call(addressKEUXRr, addressnz4w9BE, uintz4ko6DQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBEOllac = await KPLAY.new({from: accounts[3]});
		const addressGOup1XJ = accounts[3]
		const addressWz78uZL = "0x0000000000000000000000000000000000000001"
		const addressqt6Pbt1 = accounts[5]
		const uint256VXorl6k = await KPLAYBEOllac.balanceOf.call(addressGOup1XJ, {from: accounts[3]});
		await KPLAYBEOllac.unpause.call({from: accounts[3]});
		const uint256mCxwro5 = await KPLAYBEOllac.allowance.call(addressqt6Pbt1, addressWz78uZL, {from: accounts[1]});

		assert.equal(uint256VXorl6k, BigInt("10000000000000000"))
		await expect(KPLAYBEOllac.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvpJHNug = await KPLAY.new({from: accounts[2]});
		const addressznun599 = accounts[3]
		const uintQ20LOQw = BigInt("1252")
		const addressJRE73Ef = accounts[1]
		const uintAEZARWv = BigInt("417")
		const addressrz5vkT = accounts[5]
		const uintlpyu5oF = BigInt("1010")
		const addressXLeOuH = accounts[2]
		const uintYSliCr5 = BigInt("716")
		const addressoxZPst3 = "0x0000000000000000000000000000000000000001"
		const uintIEeajO8 = BigInt("1366")
		const addressltvUZ6d = accounts[4]
		const uint256qSZdkOT = await KPLAYvpJHNug.balanceOf.call(addressznun599, {from: accounts[3]});
		await KPLAYvpJHNug.pause.call({from: accounts[2]});
		const boolJnSbhW4 = await KPLAYvpJHNug.transfer.call(addressJRE73Ef, uintQ20LOQw, {from: accounts[5]});
		const boolovLeddu = await KPLAYvpJHNug.approve.call(addressrz5vkT, uintAEZARWv, {from: accounts[3]});
		const uint256SbgvmqN = await KPLAYvpJHNug.afterTime.call(uintlpyu5oF, {from: accounts[4]});
		const boolF10Ao4r = await KPLAYvpJHNug.isFrozen.call(addressXLeOuH, {from: accounts[0]});
		await KPLAYvpJHNug.pause.call({from: accounts[3]});
		const boolfZnOGo = await KPLAYvpJHNug.transfer.call(addressoxZPst3, uintYSliCr5, {from: accounts[4]});
		const boolXqeFmlk = await KPLAYvpJHNug.approve.call(addressltvUZ6d, uintIEeajO8, {from: accounts[2]});

		assert.equal(uint256qSZdkOT, BigInt("0"))
		await expect(KPLAYvpJHNug.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvpJHNug = await KPLAY.new({from: accounts[2]});
		const addressvieJPE = accounts[3]
		const uintfWhW67X = BigInt("1264")
		const addressNeGX2V5 = accounts[1]
		const uintEAC0D50 = BigInt("984")
		const addressFWr0OPd = accounts[5]
		const uintLDEQPPN = BigInt("716")
		const addresscTPpuMw = "0x0000000000000000000000000000000000000001"
		const uint256Mvbo1DH = await KPLAYvpJHNug.totalSupply.call({from: accounts[0]});
		const uint256qSZdkOT = await KPLAYvpJHNug.balanceOf.call(addressvieJPE, {from: accounts[3]});
		const boolJnSbhW4 = await KPLAYvpJHNug.transfer.call(addressNeGX2V5, uintfWhW67X, {from: accounts[5]});
		const uint256SbgvmqN = await KPLAYvpJHNug.afterTime.call(uintEAC0D50, {from: accounts[4]});
		const uint256zF27eyP = await KPLAYvpJHNug.lockCount.call(addressFWr0OPd, {from: accounts[2]});
		const boolfZnOGo = await KPLAYvpJHNug.transfer.call(addresscTPpuMw, uintLDEQPPN, {from: accounts[4]});

		assert.equal(uint256Mvbo1DH, BigInt("10000000000000000"))
		assert.equal(uint256qSZdkOT, BigInt("0"))
		await expect(KPLAYvpJHNug.transfer.call(addressNeGX2V5, uintfWhW67X, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBEOllac = await KPLAY.new({from: accounts[3]});
		const uintKyexhMS = BigInt("2002")
		const addressEXRvBGF = accounts[0]
		const addressVDIKBNO = accounts[3]
		const boolcLXXSzu = await KPLAYBEOllac.increaseAllowance.call(addressEXRvBGF, uintKyexhMS, {from: accounts[2]});
		const uint256VXorl6k = await KPLAYBEOllac.balanceOf.call(addressVDIKBNO, {from: accounts[3]});

		assert.equal(boolcLXXSzu, true)
		assert.equal(uint256VXorl6k, BigInt("10000000000000000"))
	});

	it('test for KPLAY', async () => {
		const KPLAYvpJHNug = await KPLAY.new({from: accounts[2]});
		const addressoEDCx2b = accounts[3]
		const addressiPlUBHp = accounts[4]
		const uintI6BTJA4 = BigInt("1252")
		const addressJganOi2 = accounts[2]
		const uintX6Pj1Ss = BigInt("417")
		const addressY4yFYS = accounts[5]
		const uinta714lrq = BigInt("984")
		const addressWD9VKtc = accounts[5]
		const uintmkKBta = BigInt("716")
		const addressHfowD17 = "0x0000000000000000000000000000000000000001"
		const uint256qSZdkOT = await KPLAYvpJHNug.balanceOf.call(addressoEDCx2b, {from: accounts[3]});
		const addressdyClGRg = await KPLAYvpJHNug.unfreeze.call(addressiPlUBHp, {from: accounts[2]});
		const boolJnSbhW4 = await KPLAYvpJHNug.transfer.call(addressJganOi2, uintI6BTJA4, {from: accounts[5]});
		const boolovLeddu = await KPLAYvpJHNug.approve.call(addressY4yFYS, uintX6Pj1Ss, {from: accounts[3]});
		await KPLAYvpJHNug.onlyOwner.call({from: accounts[4]});
		const uint256SbgvmqN = await KPLAYvpJHNug.afterTime.call(uinta714lrq, {from: accounts[4]});
		const uint256zF27eyP = await KPLAYvpJHNug.lockCount.call(addressWD9VKtc, {from: accounts[2]});
		const boolfZnOGo = await KPLAYvpJHNug.transfer.call(addressHfowD17, uintmkKBta, {from: accounts[4]});

		assert.equal(uint256qSZdkOT, BigInt("0"))
		await expect(KPLAYvpJHNug.transfer.call(addressJganOi2, uintI6BTJA4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOYtvJ0z = await KPLAY.new({from: accounts[0]});
		const uintD6J4Yk = BigInt("1967")
		const addressGv6oeAA = accounts[0]
		const addressSPpohhX = "0x0000000000000000000000000000000000000001"
		const uint2566QzusP = await KPLAYOYtvJ0z.currentTime.call({from: accounts[4]});
		const boolIfOxPhq = await KPLAYOYtvJ0z.transferFrom.call(addressSPpohhX, addressGv6oeAA, uintD6J4Yk, {from: accounts[4]});

		assert.equal(uint2566QzusP, BigInt("1630229566"))
		await expect(KPLAYOYtvJ0z.transferFrom.call(addressSPpohhX, addressGv6oeAA, uintD6J4Yk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYaP5moij = await KPLAY.new({from: accounts[4]});
		const uintYoLocgS = BigInt("531")
		const uintwHbth33 = BigInt("178")
		const addressph1s5Lg = accounts[0]
		const uinttz3p5Q = BigInt("813")
		const addresshxlih7g = accounts[5]
		const boolyVwZUO = await KPLAYaP5moij.transferWithLock.call(addressph1s5Lg, uintwHbth33, uintYoLocgS, {from: accounts[4]});
		await KPLAYaP5moij.whenNotPaused.call({from: accounts[4]});
		await KPLAYaP5moij.pause.call({from: accounts[2]});
		const uint256Sin7PwH = await KPLAYaP5moij.currentTime.call({from: accounts[2]});
		const boolvufnh4o = await KPLAYaP5moij.decreaseAllowance.call(addresshxlih7g, uinttz3p5Q, {from: accounts[0]});
		await KPLAYaP5moij.whenNotFrozen.call({from: accounts[2]});

		assert.equal(boolyVwZUO, true)
		await expect(KPLAYaP5moij.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvpJHNug = await KPLAY.new({from: accounts[2]});
		const addressCXTLMDL = accounts[3]
		const uintMBdLOT = BigInt("417")
		const addressOAd5K2N = accounts[5]
		const uintGhh8hQ = BigInt("984")
		const addresskXueUxK = accounts[5]
		const uintfspvfZO = BigInt("716")
		const addresslKThHl = "0x0000000000000000000000000000000000000001"
		const uint256qSZdkOT = await KPLAYvpJHNug.balanceOf.call(addressCXTLMDL, {from: accounts[3]});
		const boolovLeddu = await KPLAYvpJHNug.approve.call(addressOAd5K2N, uintMBdLOT, {from: accounts[3]});
		const uint256SbgvmqN = await KPLAYvpJHNug.afterTime.call(uintGhh8hQ, {from: accounts[4]});
		const uint256zF27eyP = await KPLAYvpJHNug.lockCount.call(addresskXueUxK, {from: accounts[2]});
		const boolfZnOGo = await KPLAYvpJHNug.transfer.call(addresslKThHl, uintfspvfZO, {from: accounts[4]});

		assert.equal(boolovLeddu, true)
		assert.equal(uint256SbgvmqN, BigInt("1630230551"))
		assert.equal(uint256qSZdkOT, BigInt("0"))
		assert.equal(uint256zF27eyP, BigInt("0"))
		await expect(KPLAYvpJHNug.transfer.call(addresslKThHl, uintfspvfZO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJFlLOj1 = await KPLAY.new({from: accounts[3]});
		const addressKjWMYk = accounts[1]
		const uintNK3vbRM = BigInt("579")
		const addressydeeoKt = accounts[2]
		const addresss6UFfJx = accounts[1]
		const addressZd6mptv = accounts[1]
		const uint256pBKZdiH = await KPLAYJFlLOj1.lockCount.call(addressKjWMYk, {from: accounts[0]});
		await KPLAYJFlLOj1.lockState.call(addressydeeoKt, uintNK3vbRM, {from: accounts[2]});
		const uint256k43F1YE = await KPLAYJFlLOj1.allowance.call(addressZd6mptv, addresss6UFfJx, {from: accounts[1]});

		assert.equal(uint256pBKZdiH, BigInt("0"))
		await expect(KPLAYJFlLOj1.lockState.call(addressydeeoKt, uintNK3vbRM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvpJHNug = await KPLAY.new({from: accounts[2]});
		const address2bND5b = accounts[3]
		const uintUzlCNPw = BigInt("417")
		const addressZ3zTYPy = accounts[5]
		const uintVvpSVFl = BigInt("984")
		const uintHnBVNM0 = BigInt("716")
		const addressuDiGEcK = "0x0000000000000000000000000000000000000000"
		const uintnCKPVo3 = BigInt("1366")
		const addressTsnNG8W = accounts[4]
		const uint256qSZdkOT = await KPLAYvpJHNug.balanceOf.call(address2bND5b, {from: accounts[3]});
		const boolovLeddu = await KPLAYvpJHNug.approve.call(addressZ3zTYPy, uintUzlCNPw, {from: accounts[3]});
		const uint256SbgvmqN = await KPLAYvpJHNug.afterTime.call(uintVvpSVFl, {from: accounts[4]});
		const boolfZnOGo = await KPLAYvpJHNug.transfer.call(addressuDiGEcK, uintHnBVNM0, {from: accounts[4]});
		const boolXqeFmlk = await KPLAYvpJHNug.approve.call(addressTsnNG8W, uintnCKPVo3, {from: accounts[2]});

		assert.equal(boolovLeddu, true)
		assert.equal(uint256SbgvmqN, BigInt("1630230569"))
		assert.equal(uint256qSZdkOT, BigInt("0"))
		await expect(KPLAYvpJHNug.transfer.call(addressuDiGEcK, uintHnBVNM0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOYtvJ0z = await KPLAY.new({from: accounts[0]});
		const uintS7jJHQj = BigInt("1967")
		const addressWiFnR62 = accounts[0]
		const addressum8Nu1K = "0x0000000000000000000000000000000000000000"
		const boolIfOxPhq = await KPLAYOYtvJ0z.transferFrom.call(addressum8Nu1K, addressWiFnR62, uintS7jJHQj, {from: accounts[4]});
		await KPLAYOYtvJ0z.whenNotPaused.call({from: accounts[2]});

		await expect(KPLAYOYtvJ0z.transferFrom.call(addressum8Nu1K, addressWiFnR62, uintS7jJHQj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvpJHNug = await KPLAY.new({from: accounts[2]});
		const addressVRN5G1m = accounts[3]
		const addressGA6olbs = accounts[2]
		const uint0NW6qO = BigInt("1252")
		const addressLaLfb0w = accounts[1]
		const uintcI0gKSn = BigInt("417")
		const addressAwYDY3j = accounts[6]
		const uintuEDb7P9 = BigInt("644")
		const addressAqvY4mK = "0x0000000000000000000000000000000000000001"
		const uintUNDs6J7 = BigInt("716")
		const addressb5RDVEe = "0x0000000000000000000000000000000000000001"
		const uintRw3JXUc = BigInt("1366")
		const addressXMiNtd9 = accounts[4]
		const addressf1OrZO = accounts[0]
		const uint256qSZdkOT = await KPLAYvpJHNug.balanceOf.call(addressVRN5G1m, {from: accounts[3]});
		const addressrFO4a9R = await KPLAYvpJHNug.freeze.call(addressGA6olbs, {from: accounts[2]});
		const boolJnSbhW4 = await KPLAYvpJHNug.transfer.call(addressLaLfb0w, uint0NW6qO, {from: accounts[5]});
		const boolovLeddu = await KPLAYvpJHNug.approve.call(addressAwYDY3j, uintcI0gKSn, {from: accounts[3]});
		const boolQrh86ix = await KPLAYvpJHNug.transfer.call(addressAqvY4mK, uintuEDb7P9, {from: accounts[3]});
		const boolfZnOGo = await KPLAYvpJHNug.transfer.call(addressb5RDVEe, uintUNDs6J7, {from: accounts[4]});
		const boolXqeFmlk = await KPLAYvpJHNug.approve.call(addressXMiNtd9, uintRw3JXUc, {from: accounts[2]});
		const addressFNHtHX = await KPLAYvpJHNug.transferOwnership.call(addressf1OrZO, {from: accounts[1]});

		assert.equal(uint256qSZdkOT, BigInt("0"))
		await expect(KPLAYvpJHNug.transfer.call(addressLaLfb0w, uint0NW6qO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzfiAmvZ = await KPLAY.new({from: accounts[2]});
		const uintjjEdvgP = BigInt("162")
		const addressX1Jh54f = accounts[1]
		const uintybCvTSK = BigInt("802")
		const addressR9Gw5z = accounts[1]
		const addressjXBAG3f = accounts[5]
		const uintFhrgxDD = BigInt("1471")
		const uintEtUqQXf = BigInt("629")
		const addressrwXgDpB = accounts[0]
		const addressxwbeKXo = accounts[2]
		const uintV6hewl = BigInt("170")
		const addresspzgw2sZ = accounts[1]
		const addressKnHXzaD = await KPLAYzfiAmvZ.unlock.call(addressX1Jh54f, uintjjEdvgP, {from: accounts[2]});
		const boolNssJIfX = await KPLAYzfiAmvZ.transferFrom.call(addressjXBAG3f, addressR9Gw5z, uintybCvTSK, {from: accounts[2]});
		const addresssjRJVu = await KPLAYzfiAmvZ.lock.call(addressrwXgDpB, uintEtUqQXf, uintFhrgxDD, {from: "0x0000000000000000000000000000000000000001"});
		const addressEuYDJE = await KPLAYzfiAmvZ.freeze.call(addressxwbeKXo, {from: accounts[5]});
		const addressv6OFeVw = await KPLAYzfiAmvZ.unlock.call(addresspzgw2sZ, uintV6hewl, {from: accounts[1]});

		await expect(KPLAYzfiAmvZ.unlock.call(addressX1Jh54f, uintjjEdvgP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOYtvJ0z = await KPLAY.new({from: accounts[0]});
		const addressRVWzLeb = accounts[0]
		const uintbVC99Da = BigInt("1950")
		const addressvbYwPE = accounts[3]
		const uintN82IYo4 = BigInt("1250")
		const addressGB7wxG2 = accounts[0]
		const addresshYT8nCs = accounts[4]
		const uintZASQhts = BigInt("1979")
		const address6gypcL = accounts[1]
		const addresspysJwov = "0x0000000000000000000000000000000000000001"
		const uint256YG5oJWB = await KPLAYOYtvJ0z.balanceOf.call(addressRVWzLeb, {from: accounts[2]});
		const uint256RSg8vnb = await KPLAYOYtvJ0z.totalSupply.call({from: accounts[1]});
		const boolfH32Ail = await KPLAYOYtvJ0z.approve.call(addressvbYwPE, uintbVC99Da, {from: accounts[1]});
		const addresswz9MuhJ = await KPLAYOYtvJ0z.burn.call(addressGB7wxG2, uintN82IYo4, {from: accounts[0]});
		const uint256y5uzDyA = await KPLAYOYtvJ0z.lockCount.call(addresshYT8nCs, {from: accounts[0]});
		const boolIfOxPhq = await KPLAYOYtvJ0z.transferFrom.call(addresspysJwov, address6gypcL, uintZASQhts, {from: accounts[4]});

		assert.equal(boolfH32Ail, true)
		assert.equal(uint256RSg8vnb, BigInt("10000000000000000"))
		assert.equal(uint256YG5oJWB, BigInt("10000000000000000"))
		assert.equal(uint256y5uzDyA, BigInt("0"))
		await expect(KPLAYOYtvJ0z.transferFrom.call(addresspysJwov, address6gypcL, uintZASQhts, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvpJHNug = await KPLAY.new({from: accounts[2]});
		const addressmyNUyOg = accounts[3]
		const addressiJMZ4W6 = accounts[0]
		const uintHgMVwN = BigInt("868")
		const uintaeuf7km = BigInt("1959")
		const addressxvOMdwx = "0x0000000000000000000000000000000000000001"
		const uintPc5f4Pv = BigInt("1524")
		const addressXEOGNYw = accounts[0]
		const uintB3KLoNJ = BigInt("1252")
		const addressllIuZj5 = accounts[1]
		const addressf8g8sv = accounts[1]
		const uinta0SivaI = BigInt("417")
		const addressBKq9v7r = accounts[5]
		const uintLtZxVDI = BigInt("427")
		const addressdh3DhpQ = accounts[1]
		const addressrWVZMrM = accounts[3]
		const addressG0Ya5b5 = accounts[4]
		const addresstqVJTTx = accounts[5]
		const uintGsWVNwx = BigInt("740")
		const addressVVHJgTs = "0x0000000000000000000000000000000000000001"
		const uint256qSZdkOT = await KPLAYvpJHNug.balanceOf.call(addressmyNUyOg, {from: accounts[3]});
		const uint256CMwScGu = await KPLAYvpJHNug.balanceOf.call(addressiJMZ4W6, {from: accounts[2]});
		const addresscjL8g1N = await KPLAYvpJHNug.lockAfter.call(addressxvOMdwx, uintaeuf7km, uintHgMVwN, {from: accounts[2]});
		const addressDXCajH6 = await KPLAYvpJHNug.unlock.call(addressXEOGNYw, uintPc5f4Pv, {from: accounts[2]});
		const boolJnSbhW4 = await KPLAYvpJHNug.transfer.call(addressllIuZj5, uintB3KLoNJ, {from: accounts[5]});
		const uint25644p7Uc = await KPLAYvpJHNug.balanceOf.call(addressf8g8sv, {from: accounts[1]});
		const boolovLeddu = await KPLAYvpJHNug.approve.call(addressBKq9v7r, uinta0SivaI, {from: accounts[3]});
		const addressBt9R3S2 = await KPLAYvpJHNug.burn.call(addressdh3DhpQ, uintLtZxVDI, {from: accounts[5]});
		const uint256sIh7i3s = await KPLAYvpJHNug.allowance.call(addressG0Ya5b5, addressrWVZMrM, {from: accounts[5]});
		const uint256zF27eyP = await KPLAYvpJHNug.lockCount.call(addresstqVJTTx, {from: accounts[2]});
		await KPLAYvpJHNug.pause.call({from: accounts[2]});
		const boolfZnOGo = await KPLAYvpJHNug.transfer.call(addressVVHJgTs, uintGsWVNwx, {from: accounts[4]});

		assert.equal(uint256CMwScGu, BigInt("0"))
		assert.equal(uint256qSZdkOT, BigInt("0"))
		await expect(KPLAYvpJHNug.lockAfter.call(addressxvOMdwx, uintaeuf7km, uintHgMVwN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBEOllac = await KPLAY.new({from: accounts[3]});
		const uintklyPQvC = BigInt("1537")
		const uintH3RNNq = BigInt("1651")
		const addressO4L5QfZ = accounts[2]
		const addresswzKWQmK = accounts[4]
		const addressImLuTGy = await KPLAYBEOllac.lock.call(addressO4L5QfZ, uintH3RNNq, uintklyPQvC, {from: accounts[3]});
		const uint256VXorl6k = await KPLAYBEOllac.balanceOf.call(addresswzKWQmK, {from: accounts[3]});

		await expect(KPLAYBEOllac.lock.call(addressO4L5QfZ, uintH3RNNq, uintklyPQvC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOYtvJ0z = await KPLAY.new({from: accounts[0]});
		const addressZxUIGrb = accounts[1]
		const addressi6jOOLg = accounts[1]
		const addressU30wMc = accounts[1]
		const addressIymmgpK = accounts[2]
		const uintjVfmwEh = BigInt("1967")
		const addressA2aQy2E = accounts[3]
		const addressBwvQVkC = "0x0000000000000000000000000000000000000002"
		const addresswXzD6fh = accounts[1]
		const addressTVGSze = accounts[3]
		const addressKnIrvL = "0x0000000000000000000000000000000000000000"
		const uint256bIDBLoJ = await KPLAYOYtvJ0z.lockCount.call(addressZxUIGrb, {from: accounts[3]});
		const uint256YG5oJWB = await KPLAYOYtvJ0z.balanceOf.call(addressi6jOOLg, {from: accounts[2]});
		const addressCFvnFiS = await KPLAYOYtvJ0z.transferOwnership.call(addressU30wMc, {from: accounts[0]});
		const uint256kuhSlry = await KPLAYOYtvJ0z.balanceOf.call(addressIymmgpK, {from: accounts[4]});
		const boolIfOxPhq = await KPLAYOYtvJ0z.transferFrom.call(addressBwvQVkC, addressA2aQy2E, uintjVfmwEh, {from: accounts[4]});
		const addressfTNCXdF = await KPLAYOYtvJ0z.freeze.call(addresswXzD6fh, {from: accounts[3]});
		const addresslJQi6II = await KPLAYOYtvJ0z.transferOwnership.call(addressTVGSze, {from: accounts[3]});
		const uint256QFBvaus = await KPLAYOYtvJ0z.balanceOf.call(addressKnIrvL, {from: accounts[4]});

		assert.equal(uint256YG5oJWB, BigInt("0"))
		assert.equal(uint256bIDBLoJ, BigInt("0"))
		assert.equal(uint256kuhSlry, BigInt("0"))
		await expect(KPLAYOYtvJ0z.transferFrom.call(addressBwvQVkC, addressA2aQy2E, uintjVfmwEh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYTb80jcU = await KPLAY.new({from: accounts[1]});
		const addresspbpTYdI = accounts[5]
		await KPLAYTb80jcU.renounceOwnership.call({from: accounts[1]});
		const addressdLkXHXU = await KPLAYTb80jcU.transferOwnership.call(addresspbpTYdI, {from: accounts[4]});
		await KPLAYTb80jcU.whenNotPaused.call({from: accounts[0]});

		await expect(KPLAYTb80jcU.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvpJHNug = await KPLAY.new({from: accounts[2]});
		const addressnK2vhLw = accounts[3]
		const addressuZhlWUV = accounts[0]
		const uintTpY2xsw = BigInt("708")
		const uintgihuac0 = BigInt("913")
		const addressfkzaw9k = accounts[5]
		const uintrCXwrs = BigInt("7")
		const addressf3ObUZg = accounts[4]
		const uintj2HD4qA = BigInt("1524")
		const addressevZlNG = accounts[0]
		const uintqXoRvrY = BigInt("1252")
		const addressRl1U4n = accounts[1]
		const uintqN83URc = BigInt("1207")
		const addressgp2FA6W = accounts[0]
		const uintiQsa3Qs = BigInt("417")
		const addressUmOI9Ku = accounts[5]
		const uintRUp1S62 = BigInt("984")
		const addressD64zyQ0 = accounts[5]
		const uintNX3JNbk = BigInt("740")
		const addressqFz14rS = "0x0000000000000000000000000000000000000001"
		const uint256qSZdkOT = await KPLAYvpJHNug.balanceOf.call(addressnK2vhLw, {from: accounts[3]});
		const uint256CMwScGu = await KPLAYvpJHNug.balanceOf.call(addressuZhlWUV, {from: accounts[2]});
		const boolPodzFiW = await KPLAYvpJHNug.transferWithLockAfter.call(addressfkzaw9k, uintgihuac0, uintTpY2xsw, {from: accounts[2]});
		await KPLAYvpJHNug.lockState.call(addressf3ObUZg, uintrCXwrs, {from: accounts[2]});
		const addressDXCajH6 = await KPLAYvpJHNug.unlock.call(addressevZlNG, uintj2HD4qA, {from: accounts[2]});
		const boolJnSbhW4 = await KPLAYvpJHNug.transfer.call(addressRl1U4n, uintqXoRvrY, {from: accounts[5]});
		const boolabks4iv = await KPLAYvpJHNug.transfer.call(addressgp2FA6W, uintqN83URc, {from: accounts[0]});
		const boolovLeddu = await KPLAYvpJHNug.approve.call(addressUmOI9Ku, uintiQsa3Qs, {from: accounts[3]});
		const uint256SbgvmqN = await KPLAYvpJHNug.afterTime.call(uintRUp1S62, {from: accounts[4]});
		const uint256zF27eyP = await KPLAYvpJHNug.lockCount.call(addressD64zyQ0, {from: accounts[2]});
		await KPLAYvpJHNug.pause.call({from: accounts[2]});
		const boolfZnOGo = await KPLAYvpJHNug.transfer.call(addressqFz14rS, uintNX3JNbk, {from: accounts[4]});

		assert.equal(boolPodzFiW, true)
		assert.equal(uint256CMwScGu, BigInt("0"))
		assert.equal(uint256qSZdkOT, BigInt("0"))
		await expect(KPLAYvpJHNug.lockState.call(addressf3ObUZg, uintrCXwrs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBEOllac = await KPLAY.new({from: accounts[3]});
		const addressKiwNeN = accounts[4]
		const uintFoDK7D6 = BigInt("1909")
		const addressy5iaE9t = accounts[4]
		const uintzsNHEjN = BigInt("667")
		const addressgIJisj = accounts[3]
		const addressYL2lP5 = accounts[2]
		const uintomlVJZ9 = BigInt("1444")
		const addressQUqq2k = accounts[5]
		const addressHAVeOan = accounts[3]
		const uintkNVdLsi = BigInt("2")
		const addressBGTViGr = accounts[3]
		const uint256VXorl6k = await KPLAYBEOllac.balanceOf.call(addressKiwNeN, {from: accounts[3]});
		const boolc3A3Adp = await KPLAYBEOllac.mint.call(addressy5iaE9t, uintFoDK7D6, {from: accounts[3]});
		const boolPQrhmPT = await KPLAYBEOllac.transferFrom.call(addressYL2lP5, addressgIJisj, uintzsNHEjN, {from: accounts[0]});
		const addresskq5eMTX = await KPLAYBEOllac.unlock.call(addressQUqq2k, uintomlVJZ9, {from: accounts[0]});
		const boolJppLEUN = await KPLAYBEOllac.isFrozen.call(addressHAVeOan, {from: accounts[0]});
		await KPLAYBEOllac.lockState.call(addressBGTViGr, uintkNVdLsi, {from: accounts[4]});

		assert.equal(boolc3A3Adp, true)
		assert.equal(uint256VXorl6k, BigInt("0"))
		await expect(KPLAYBEOllac.transferFrom.call(addressYL2lP5, addressgIJisj, uintzsNHEjN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})