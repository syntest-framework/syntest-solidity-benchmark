const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYhR1JWeb = await KPLAY.new({from: accounts[5]});
		const uintXO0PMpn = BigInt("462")
		const addressLweBgB5 = accounts[1]
		const uintGSQ9aEm = BigInt("916")
		const uintlbSviY = BigInt("31")
		const addressOgWqerL = accounts[4]
		const booly5OjJgL = await KPLAYhR1JWeb.decreaseAllowance.call(addressLweBgB5, uintXO0PMpn, {from: accounts[2]});
		const boolBfzixu5 = await KPLAYhR1JWeb.transferWithLockAfter.call(addressOgWqerL, uintlbSviY, uintGSQ9aEm, {from: accounts[0]});

		await expect(KPLAYhR1JWeb.decreaseAllowance.call(addressLweBgB5, uintXO0PMpn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYlAYMYbO = await KPLAY.new({from: accounts[1]});
		const uintEfbd2Uc = BigInt("465")
		const addresscy0Wh0y = accounts[5]
		const addressZIONnSt = accounts[2]
		const addresszcVDT7u = accounts[2]
		const boolQiBVd7A = await KPLAYlAYMYbO.transferFrom.call(addressZIONnSt, addresscy0Wh0y, uintEfbd2Uc, {from: accounts[4]});
		const addresscQdNW2u = await KPLAYlAYMYbO.freeze.call(addresszcVDT7u, {from: accounts[2]});
		const uint256Ml1zJZY = await KPLAYlAYMYbO.currentTime.call({from: accounts[0]});

		await expect(KPLAYlAYMYbO.transferFrom.call(addressZIONnSt, addresscy0Wh0y, uintEfbd2Uc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const uintXfpmMKV = BigInt("727")
		const addressYpkRShR = "0x0000000000000000000000000000000000000001"
		const uintgUF72LT = BigInt("1698")
		const uintMIM3TQW = BigInt("231")
		const addressHMDGEPk = accounts[3]
		const booloqMNId = await KPLAYyhegZTf.transfer.call(addressYpkRShR, uintXfpmMKV, {from: accounts[4]});
		const boolqPkseqT = await KPLAYyhegZTf.transferWithLock.call(addressHMDGEPk, uintMIM3TQW, uintgUF72LT, {from: accounts[2]});

		await expect(KPLAYyhegZTf.transfer.call(addressYpkRShR, uintXfpmMKV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY9s7i2L = await KPLAY.new({from: accounts[4]});
		const addressGNP5g8 = accounts[4]
		const addressuhWVh5D = accounts[2]
		const boolduRzahj = await KPLAY9s7i2L.isFrozen.call(addressGNP5g8, {from: accounts[0]});
		await KPLAY9s7i2L.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256SbUu0p = await KPLAY9s7i2L.balanceOf.call(addressuhWVh5D, {from: accounts[2]});

		assert.equal(boolduRzahj, false)
		await expect(KPLAY9s7i2L.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYo7QjAT8 = await KPLAY.new({from: accounts[2]});
		const uintNbal2Tl = BigInt("17")
		const addressKUDbRtJ = accounts[3]
		const uint7n6TYk = BigInt("990")
		const addressTigm6CG = accounts[3]
		const addressIpLEVMJ = accounts[0]
		const addressDX0gQUl = accounts[4]
		const uintMCO8Fy7 = BigInt("1895")
		const addressjijiUVy = "0x0000000000000000000000000000000000000001"
		const addresse3tCXkt = await KPLAYo7QjAT8.burn.call(addressKUDbRtJ, uintNbal2Tl, {from: accounts[4]});
		const addressKHHcvHz = await KPLAYo7QjAT8.burn.call(addressTigm6CG, uint7n6TYk, {from: accounts[3]});
		const addressHx47H6B = await KPLAYo7QjAT8.freeze.call(addressIpLEVMJ, {from: accounts[3]});
		const addressNWoNUY = await KPLAYo7QjAT8.freeze.call(addressDX0gQUl, {from: accounts[4]});
		const boolyKQrUlT = await KPLAYo7QjAT8.transfer.call(addressjijiUVy, uintMCO8Fy7, {from: accounts[0]});

		await expect(KPLAYo7QjAT8.burn.call(addressKUDbRtJ, uintNbal2Tl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYlcSljOw = await KPLAY.new({from: accounts[5]});
		const addressxLSekCH = accounts[0]
		const uintOAaqT9n = BigInt("1910")
		const addressqRIqAmF = accounts[4]
		const uinth4ETmQe = BigInt("856")
		const addressS1IyDJe = accounts[3]
		const addressgFQtyAr = accounts[3]
		const uinthaEbdA5 = BigInt("1066")
		const addresspc490or = accounts[3]
		const uintWiJEhq = BigInt("1948")
		const addressSYFIqgz = "0x0000000000000000000000000000000000000001"
		const addressByVejP2 = accounts[3]
		const uint256QjhCTpM = await KPLAYlcSljOw.lockCount.call(addressxLSekCH, {from: accounts[1]});
		const addressnABEVAK = await KPLAYlcSljOw.unlock.call(addressqRIqAmF, uintOAaqT9n, {from: accounts[5]});
		const boolIFmnjLU = await KPLAYlcSljOw.transferFrom.call(addressgFQtyAr, addressS1IyDJe, uinth4ETmQe, {from: accounts[1]});
		const boolzba5gLm = await KPLAYlcSljOw.decreaseAllowance.call(addresspc490or, uinthaEbdA5, {from: accounts[3]});
		const booluaoFFiu = await KPLAYlcSljOw.transferFrom.call(addressByVejP2, addressSYFIqgz, uintWiJEhq, {from: accounts[4]});

		assert.equal(uint256QjhCTpM, BigInt("0"))
		await expect(KPLAYlcSljOw.unlock.call(addressqRIqAmF, uintOAaqT9n, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKvDxgA0 = await KPLAY.new({from: accounts[2]});
		const uintuVu8dBw = BigInt("744")
		const addressAiWhFP = accounts[3]
		const uintUca7ukE = BigInt("643")
		const uintgzHNd0A = BigInt("1976")
		const addressuCTSTxm = accounts[0]
		await KPLAYKvDxgA0.lockState.call(addressAiWhFP, uintuVu8dBw, {from: accounts[4]});
		const booluMWqrVH = await KPLAYKvDxgA0.transferWithLockAfter.call(addressuCTSTxm, uintgzHNd0A, uintUca7ukE, {from: accounts[4]});

		await expect(KPLAYKvDxgA0.lockState.call(addressAiWhFP, uintuVu8dBw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addressfIXMWpZ = accounts[4]
		const uintjR1mpLj = BigInt("977")
		const address4j5qMK = "0x0000000000000000000000000000000000000001"
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addressfIXMWpZ, {from: accounts[4]});
		const booloqMNId = await KPLAYyhegZTf.transfer.call(address4j5qMK, uintjR1mpLj, {from: accounts[4]});

		assert.equal(uint256CnmQNrQ, BigInt("0"))
		await expect(KPLAYyhegZTf.transfer.call(address4j5qMK, uintjR1mpLj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const uintJRLYYS3 = BigInt("727")
		const addresspp4aLn = "0x0000000000000000000000000000000000000000"
		const booloqMNId = await KPLAYyhegZTf.transfer.call(addresspp4aLn, uintJRLYYS3, {from: accounts[4]});

		await expect(KPLAYyhegZTf.transfer.call(addresspp4aLn, uintJRLYYS3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addressqDIcPeE = accounts[4]
		const addressjP7K8xJ = accounts[5]
		const uintJ2cEord = BigInt("727")
		const addresspgVdN8i = "0x0000000000000000000000000000000000000002"
		const addressAlGQ8w0 = await KPLAYyhegZTf.freeze.call(addressqDIcPeE, {from: accounts[1]});
		const uint256pFlPRJY = await KPLAYyhegZTf.balanceOf.call(addressjP7K8xJ, {from: accounts[2]});
		const booloqMNId = await KPLAYyhegZTf.transfer.call(addresspgVdN8i, uintJ2cEord, {from: accounts[4]});

		assert.equal(uint256pFlPRJY, BigInt("0"))
		await expect(KPLAYyhegZTf.transfer.call(addresspgVdN8i, uintJ2cEord, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addressHU19Wpq = accounts[2]
		const addressUCCm5SC = accounts[0]
		const uintEZ4kRpE = BigInt("738")
		const addressUpFPLCa = "0x0000000000000000000000000000000000000001"
		const uint256qAHC6Oo = await KPLAYyhegZTf.allowance.call(addressUCCm5SC, addressHU19Wpq, {from: accounts[2]});
		const booloqMNId = await KPLAYyhegZTf.transfer.call(addressUpFPLCa, uintEZ4kRpE, {from: accounts[4]});

		assert.equal(uint256qAHC6Oo, BigInt("0"))
		await expect(KPLAYyhegZTf.transfer.call(addressUpFPLCa, uintEZ4kRpE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const uintQi6X4tj = BigInt("829")
		const addresspu60Yua = accounts[0]
		const uintafb5VOH = BigInt("727")
		const addressYTNNYSa = "0x0000000000000000000000000000000000000002"
		const uintl57fSb = BigInt("513")
		const addressBoAZi6 = accounts[5]
		const bool5QPPUY = await KPLAYyhegZTf.transfer.call(addresspu60Yua, uintQi6X4tj, {from: accounts[1]});
		const booloqMNId = await KPLAYyhegZTf.transfer.call(addressYTNNYSa, uintafb5VOH, {from: accounts[4]});
		const addressy881Rd8 = await KPLAYyhegZTf.unlock.call(addressBoAZi6, uintl57fSb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool5QPPUY, true)
		await expect(KPLAYyhegZTf.transfer.call(addressYTNNYSa, uintafb5VOH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addressUek9W1 = accounts[4]
		const uint256hCTUauk = await KPLAYyhegZTf.currentTime.call({from: accounts[0]});
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addressUek9W1, {from: accounts[4]});

		assert.equal(uint256CnmQNrQ, BigInt("0"))
		assert.equal(uint256hCTUauk, BigInt("1630228518"))
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addresswG6d1P3 = accounts[2]
		const addressjqFb1JL = accounts[2]
		const uintyFmqqF8 = BigInt("1082")
		const addressLChX4XP = accounts[3]
		const addressJITpyLS = accounts[5]
		const addressNSW8Tcx = await KPLAYyhegZTf.unfreeze.call(addresswG6d1P3, {from: accounts[1]});
		const boolzRANMdB = await KPLAYyhegZTf.isFrozen.call(addressjqFb1JL, {from: accounts[4]});
		const booliG1JDdk = await KPLAYyhegZTf.transfer.call(addressLChX4XP, uintyFmqqF8, {from: accounts[2]});
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addressJITpyLS, {from: accounts[4]});

		assert.equal(boolzRANMdB, false)
		await expect(KPLAYyhegZTf.transfer.call(addressLChX4XP, uintyFmqqF8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const uintxXggarH = BigInt("1928")
		const addresswKRfwmQ = accounts[0]
		const addressDmLZcaB = accounts[5]
		const uintoxq5Sqp = BigInt("1831")
		const uinthqBVsVW = BigInt("1864")
		const addresscV9dSw = accounts[2]
		const boolPSzi4Ki = await KPLAYyhegZTf.approve.call(addresswKRfwmQ, uintxXggarH, {from: accounts[3]});
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addressDmLZcaB, {from: accounts[4]});
		const booliT2tBm = await KPLAYyhegZTf.transferWithLockAfter.call(addresscV9dSw, uinthqBVsVW, uintoxq5Sqp, {from: accounts[5]});

		assert.equal(boolPSzi4Ki, true)
		assert.equal(uint256CnmQNrQ, BigInt("0"))
		await expect(KPLAYyhegZTf.transferWithLockAfter.call(addresscV9dSw, uinthqBVsVW, uintoxq5Sqp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addressmO2srsz = accounts[4]
		const uintC4e7DL = BigInt("662")
		const addresstDDyxKa = accounts[3]
		const addressuPNfVSG = accounts[1]
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addressmO2srsz, {from: accounts[4]});
		const boolt51Xxax = await KPLAYyhegZTf.increaseAllowance.call(addresstDDyxKa, uintC4e7DL, {from: accounts[0]});
		const addressSVN8thK = await KPLAYyhegZTf.freeze.call(addressuPNfVSG, {from: accounts[2]});

		assert.equal(boolt51Xxax, true)
		assert.equal(uint256CnmQNrQ, BigInt("0"))
		await expect(KPLAYyhegZTf.freeze.call(addressuPNfVSG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addressXg9osW0 = accounts[0]
		const addresskoyeTyP = accounts[5]
		const uintSWUBdBL = BigInt("36")
		const uintcwncRxi = BigInt("1306")
		const addressQ8DBzDy = accounts[2]
		const uint256XCOyteU = await KPLAYyhegZTf.balanceOf.call(addressXg9osW0, {from: accounts[1]});
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addresskoyeTyP, {from: accounts[4]});
		const addressd9wjLTc = await KPLAYyhegZTf.lock.call(addressQ8DBzDy, uintcwncRxi, uintSWUBdBL, {from: accounts[1]});

		assert.equal(uint256CnmQNrQ, BigInt("0"))
		assert.equal(uint256XCOyteU, BigInt("0"))
		await expect(KPLAYyhegZTf.lock.call(addressQ8DBzDy, uintcwncRxi, uintSWUBdBL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addressi7E3ctL = accounts[5]
		const uint3PhqXa = BigInt("545")
		const address4i04xv = "0x0000000000000000000000000000000000000001"
		const uint44jgBK = BigInt("578")
		const addressWqba381 = "0x0000000000000000000000000000000000000001"
		const addressXjf63ZX = await KPLAYyhegZTf.transferOwnership.call(addressi7E3ctL, {from: accounts[1]});
		const booloqMNId = await KPLAYyhegZTf.transfer.call(address4i04xv, uint3PhqXa, {from: accounts[4]});
		const boolyMX4Rt = await KPLAYyhegZTf.mint.call(addressWqba381, uint44jgBK, {from: accounts[3]});

		await expect(KPLAYyhegZTf.transfer.call(address4i04xv, uint3PhqXa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const uintOqJQd3Q = BigInt("1781")
		const uintwXMX6tF = BigInt("1682")
		const address343KZ9 = "0x0000000000000000000000000000000000000001"
		const addressYwbHWCB = accounts[2]
		const uint256V2X6guC = await KPLAYyhegZTf.afterTime.call(uintOqJQd3Q, {from: accounts[0]});
		const booloqMNId = await KPLAYyhegZTf.transfer.call(address343KZ9, uintwXMX6tF, {from: accounts[4]});
		const addressY0YijQJ = await KPLAYyhegZTf.unfreeze.call(addressYwbHWCB, {from: accounts[3]});

		assert.equal(uint256V2X6guC, BigInt("1630230311"))
		await expect(KPLAYyhegZTf.transfer.call(address343KZ9, uintwXMX6tF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYPy02ToU = await KPLAY.new({from: accounts[1]});
		const addressP6PqdA6 = accounts[0]
		const uintlQEYJha = BigInt("1105")
		const addressHTe8PMo = accounts[3]
		const uintk2mS5Ga = BigInt("54")
		const addressC2jsgAS = accounts[1]
		await KPLAYPy02ToU.unpause.call({from: accounts[1]});
		const uint256MxknqEN = await KPLAYPy02ToU.balanceOf.call(addressP6PqdA6, {from: accounts[5]});
		const addressUyFas4D = await KPLAYPy02ToU.unlock.call(addressHTe8PMo, uintlQEYJha, {from: accounts[1]});
		const uint256UqJ5430 = await KPLAYPy02ToU.afterTime.call(uintk2mS5Ga, {from: accounts[1]});
		const uint256pY2mIgc = await KPLAYPy02ToU.lockCount.call(addressC2jsgAS, {from: accounts[3]});

		await expect(KPLAYPy02ToU.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const uintiKGCatk = BigInt("274")
		const addressiFFQLgj = "0x0000000000000000000000000000000000000001"
		const uint256T0BpZFR = await KPLAYyhegZTf.totalSupply.call({from: accounts[2]});
		const booloqMNId = await KPLAYyhegZTf.transfer.call(addressiFFQLgj, uintiKGCatk, {from: accounts[4]});
		await KPLAYyhegZTf.whenNotFrozen.call({from: accounts[2]});

		assert.equal(uint256T0BpZFR, BigInt("10000000000000000"))
		await expect(KPLAYyhegZTf.transfer.call(addressiFFQLgj, uintiKGCatk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOjnoqO = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstcYJYZs = "0x0000000000000000000000000000000000000001"
		const uintCHmNMRd = BigInt("413")
		const addressVdyXuo = accounts[2]
		const addressBiW9Z7c = accounts[2]
		const uintssPrR0 = BigInt("441")
		const addressKIareTw = accounts[4]
		const addressZemxdUA = accounts[4]
		const uintcjuTG2w = BigInt("1162")
		const addressEznqoe5 = accounts[0]
		const addressTJGLu9v = accounts[3]
		const addressvCgi7Sh = await KPLAYOjnoqO.transferOwnership.call(addresstcYJYZs, {from: accounts[0]});
		const boolZsnQwQH = await KPLAYOjnoqO.transferFrom.call(addressBiW9Z7c, addressVdyXuo, uintCHmNMRd, {from: accounts[0]});
		const boolvdpMZWV = await KPLAYOjnoqO.transfer.call(addressKIareTw, uintssPrR0, {from: accounts[4]});
		const addressqmsbyIN = await KPLAYOjnoqO.unfreeze.call(addressZemxdUA, {from: accounts[0]});
		const boolKYaZsqn = await KPLAYOjnoqO.transferFrom.call(addressTJGLu9v, addressEznqoe5, uintcjuTG2w, {from: accounts[4]});
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addressHYdUrKi = accounts[5]
		const uintAbuKeEg = BigInt("1399")
		const addressw3HRFpA = accounts[1]
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addressHYdUrKi, {from: accounts[4]});
		const boolTIDm5qR = await KPLAYyhegZTf.mint.call(addressw3HRFpA, uintAbuKeEg, {from: accounts[1]});

		assert.equal(boolTIDm5qR, true)
		assert.equal(uint256CnmQNrQ, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const addressVhbNiIE = accounts[5]
		const addressu8jw8b = accounts[2]
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addressVhbNiIE, {from: accounts[4]});
		await KPLAYyhegZTf.renounceOwnership.call({from: accounts[1]});
		const addresseDFeJTe = await KPLAYyhegZTf.freeze.call(addressu8jw8b, {from: accounts[4]});

		assert.equal(uint256CnmQNrQ, BigInt("0"))
		await expect(KPLAYyhegZTf.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const uintRT9i2ko = BigInt("727")
		const addressJ3z6aO8 = "0x0000000000000000000000000000000000000002"
		await KPLAYyhegZTf.pause.call({from: accounts[1]});
		const booloqMNId = await KPLAYyhegZTf.transfer.call(addressJ3z6aO8, uintRT9i2ko, {from: accounts[4]});

		await expect(KPLAYyhegZTf.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const uintyAlx2md = BigInt("1326")
		const uintjtBfMk = BigInt("463")
		const addressTToAc3 = accounts[0]
		const addresspi2udst = accounts[5]
		const boolggCg5jI = await KPLAYyhegZTf.transferWithLockAfter.call(addressTToAc3, uintjtBfMk, uintyAlx2md, {from: accounts[1]});
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addresspi2udst, {from: accounts[4]});

		assert.equal(boolggCg5jI, true)
		assert.equal(uint256CnmQNrQ, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYyhegZTf = await KPLAY.new({from: accounts[1]});
		const uintc37mfJt = BigInt("1164")
		const addressL3HrTdl = accounts[5]
		const addressFHq9mzx = accounts[5]
		const addresslm6oNmp = await KPLAYyhegZTf.burn.call(addressL3HrTdl, uintc37mfJt, {from: accounts[1]});
		const uint256CnmQNrQ = await KPLAYyhegZTf.balanceOf.call(addressFHq9mzx, {from: accounts[4]});

		await expect(KPLAYyhegZTf.burn.call(addressL3HrTdl, uintc37mfJt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKWyQJAG = await KPLAY.new({from: accounts[2]});
		const uintgtmAQIX = BigInt("654")
		const uintn9XLEAe = BigInt("231")
		const address6CJGzn = accounts[1]
		const uintWuGsjH = BigInt("1642")
		const addressJ9sT6Hm = accounts[2]
		const addresswL30UCQ = "0x0000000000000000000000000000000000000001"
		const uintCizqHXa = BigInt("532")
		const addressC6uMUbL = "0x0000000000000000000000000000000000000001"
		const addressIVtTCRr = accounts[4]
		const uintZoGzaxa = BigInt("269")
		const addresskekJpRk = accounts[0]
		const addressuuXJHiG = await KPLAYKWyQJAG.lockAfter.call(address6CJGzn, uintn9XLEAe, uintgtmAQIX, {from: accounts[2]});
		const boolRCm4rds = await KPLAYKWyQJAG.transferFrom.call(addresswL30UCQ, addressJ9sT6Hm, uintWuGsjH, {from: accounts[0]});
		const uint2566ahZ3Q = await KPLAYKWyQJAG.currentTime.call({from: accounts[5]});
		const boolHlCw3C1 = await KPLAYKWyQJAG.transferFrom.call(addressIVtTCRr, addressC6uMUbL, uintCizqHXa, {from: accounts[0]});
		const boolKVpBciV = await KPLAYKWyQJAG.mint.call(addresskekJpRk, uintZoGzaxa, {from: accounts[1]});

		await expect(KPLAYKWyQJAG.lockAfter.call(address6CJGzn, uintn9XLEAe, uintgtmAQIX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYYRXoIHX = await KPLAY.new({from: accounts[0]});
		const addressy0mhWmi = accounts[2]
		const uintmC3AWlH = BigInt("1727")
		const uintvrVJqHm = BigInt("75")
		const addressXirjqC = accounts[2]
		const uintZOeyHtg = BigInt("864")
		const addressrBpv2xO = accounts[0]
		const uintbWucjOZ = BigInt("228")
		const addressvFg637 = accounts[0]
		const addressOBcSlig = accounts[0]
		const uintj1Svt0J = BigInt("1065")
		const uintajmpfRD = BigInt("192")
		const addressr8qFpFs = accounts[2]
		const uint256PxDNvgu = await KPLAYYRXoIHX.balanceOf.call(addressy0mhWmi, {from: accounts[3]});
		const boolJC968p = await KPLAYYRXoIHX.transferWithLock.call(addressXirjqC, uintvrVJqHm, uintmC3AWlH, {from: accounts[0]});
		const boolcap7WX = await KPLAYYRXoIHX.transfer.call(addressrBpv2xO, uintZOeyHtg, {from: accounts[3]});
		const boolipVzkhs = await KPLAYYRXoIHX.transfer.call(addressvFg637, uintbWucjOZ, {from: accounts[3]});
		const addressXzYZ9RS = await KPLAYYRXoIHX.freeze.call(addressOBcSlig, {from: accounts[1]});
		const boolEj7B5Ul = await KPLAYYRXoIHX.transferWithLockAfter.call(addressr8qFpFs, uintajmpfRD, uintj1Svt0J, {from: accounts[2]});

		assert.equal(boolJC968p, true)
		assert.equal(uint256PxDNvgu, BigInt("0"))
		await expect(KPLAYYRXoIHX.transfer.call(addressrBpv2xO, uintZOeyHtg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})