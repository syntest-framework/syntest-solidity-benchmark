const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYhINrT6m = await LIBERAPAY.new({from: accounts[5]});
		const uintsg74mdQ = BigInt("1525")
		const addressC2qyzlW = accounts[4]
		const uintQcYshtT = BigInt("1504")
		const addressEeM6YA = accounts[2]
		const uintbpdlTwR = BigInt("325")
		const uintk8BJ4zI = BigInt("1346")
		const addressXLGrwZH = accounts[4]
		const uintWUwVQwl = BigInt("941")
		const addressrQtznQR = accounts[0]
		const uintnn78Bq7 = BigInt("782")
		const addressA8alTYu = accounts[3]
//		const boolIWA2k5T = await LIBERAPAYhINrT6m.decreaseAllowance.call(addressC2qyzlW, uintsg74mdQ, {from: accounts[0]});
//		await LIBERAPAYhINrT6m.showLockState.call(addressEeM6YA, uintQcYshtT, {from: accounts[3]});
//		const boolLsycIRz = await LIBERAPAYhINrT6m.lock.call(addressXLGrwZH, uintk8BJ4zI, uintbpdlTwR, {from: accounts[1]});
//		const boolCx0xpt = await LIBERAPAYhINrT6m.increaseAllowance.call(addressrQtznQR, uintWUwVQwl, {from: accounts[3]});
//		const boold1aBI6d = await LIBERAPAYhINrT6m.increaseAllowance.call(addressA8alTYu, uintnn78Bq7, {from: accounts[5]});

		await expect(LIBERAPAYhINrT6m.decreaseAllowance.call(addressC2qyzlW, uintsg74mdQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNbpgPts = await LIBERAPAY.new({from: accounts[2]});
		const uintP4w8p9 = BigInt("1407")
		const addressjwfbYn = accounts[5]
		const uintWcC4iU8 = BigInt("112")
		const addressLphsvDe = accounts[0]
		const addressCDSv6wA = accounts[5]
//		const boolb3kz2GD = await LIBERAPAYNbpgPts.burnFrom.call(addressjwfbYn, uintP4w8p9, {from: accounts[2]});
//		const boolwCV6E1q = await LIBERAPAYNbpgPts.burnFrom.call(addressLphsvDe, uintWcC4iU8, {from: accounts[4]});
//		const addressM0to65 = await LIBERAPAYNbpgPts.transferOwnership.call(addressCDSv6wA, {from: accounts[1]});

		await expect(LIBERAPAYNbpgPts.burnFrom.call(addressjwfbYn, uintP4w8p9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYLZfx7j0 = await LIBERAPAY.new({from: accounts[2]});
		const addresslZa65tx = accounts[5]
		const addressWdZXYcL = accounts[2]
		const uinthF5kt0q = BigInt("442")
		const addressQNqszSu = accounts[0]
		const addressizdgdq2 = accounts[1]
		const addressB0MlI4I = accounts[3]
		const addressxf9LTLV = accounts[1]
		const uintmHbVxmu = BigInt("1029")
		const addressXkVCvGB = accounts[4]
//		const addressEX7zN0z = await LIBERAPAYLZfx7j0.notFrozen.call(addresslZa65tx, {from: accounts[5]});
//		const addressMQIhSFw = await LIBERAPAYLZfx7j0.notFrozen.call(addressWdZXYcL, {from: accounts[1]});
//		const boolg4tpKql = await LIBERAPAYLZfx7j0.distribute.call(addressQNqszSu, uinthF5kt0q, {from: accounts[2]});
//		const uint256JVqAlBO = await LIBERAPAYLZfx7j0.balanceOf.call(addressizdgdq2, {from: accounts[3]});
//		const uint256anMeJ0b = await LIBERAPAYLZfx7j0.allowance.call(addressxf9LTLV, addressB0MlI4I, {from: accounts[4]});
//		const boolEMgvn7S = await LIBERAPAYLZfx7j0.approve.call(addressXkVCvGB, uintmHbVxmu, {from: accounts[3]});

		await expect(LIBERAPAYLZfx7j0.notFrozen.call(addresslZa65tx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWWX2L1L = await LIBERAPAY.new({from: accounts[2]});
		const uintBDAJFdL = BigInt("1801")
		const addressOLuBk8X = accounts[5]
		const uint256VhzUTPo = await LIBERAPAYWWX2L1L.totalSupply.call({from: accounts[0]});
//		const boolISF0Zhi = await LIBERAPAYWWX2L1L.burnFrom.call(addressOLuBk8X, uintBDAJFdL, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYWWX2L1L.unpause.call({from: accounts[4]});

		assert.equal(uint256VhzUTPo, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYWWX2L1L.burnFrom.call(addressOLuBk8X, uintBDAJFdL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYxYupXZ6 = await LIBERAPAY.new({from: accounts[5]});
		const uintTjUHhzL = BigInt("1791")
		const uintF6GUSPS = BigInt("1967")
		const addressBkQ386v = accounts[1]
		const addressvEy90eZ = accounts[2]
//		const boolINC1Tlb = await LIBERAPAYxYupXZ6.lock.call(addressBkQ386v, uintF6GUSPS, uintTjUHhzL, {from: accounts[2]});
//		await LIBERAPAYxYupXZ6.f.call({from: accounts[2]});
//		const addressWM5mG5K = await LIBERAPAYxYupXZ6.transferOwnership.call(addressvEy90eZ, {from: accounts[4]});

		await expect(LIBERAPAYxYupXZ6.lock.call(addressBkQ386v, uintF6GUSPS, uintTjUHhzL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYVNPLFvf = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAb5pNCk = accounts[3]
		const uintdVFbOp = BigInt("33")
		const addresscYZrmX = accounts[0]
		const addressJm51ZOE = await LIBERAPAYVNPLFvf.transferOwnership.call(addressAb5pNCk, {from: accounts[1]});
		await LIBERAPAYVNPLFvf.showLockState.call(addresscYZrmX, uintdVFbOp, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYsb2o3Wj = await LIBERAPAY.new({from: accounts[2]});
		const uintjVne0f = BigInt("772")
		const addressiKXP13N = accounts[4]
		const addressujLOwGX = accounts[1]
		const boolCWhd74p = await LIBERAPAYsb2o3Wj.increaseAllowance.call(addressiKXP13N, uintjVne0f, {from: accounts[0]});
//		const boolw2kpzdG = await LIBERAPAYsb2o3Wj.unfreezeAccount.call(addressujLOwGX, {from: accounts[1]});
//		const boolTTsi86c = await LIBERAPAYsb2o3Wj.acceptOwnership.call({from: accounts[0]});

		assert.equal(boolCWhd74p, true)
		await expect(LIBERAPAYsb2o3Wj.unfreezeAccount.call(addressujLOwGX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const addressqsqwUV = accounts[1]
		const addressxqMv50c = accounts[0]
		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressqsqwUV, {from: accounts[5]});
//		const boolyskboOC = await LIBERAPAYb2D28X.freezeAccount.call(addressxqMv50c, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256wQN7VG0, BigInt("0"))
		await expect(LIBERAPAYb2D28X.freezeAccount.call(addressxqMv50c, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const uintoL2L11Q = BigInt("1888")
		const addressB60zzDS = accounts[1]
		const addressPnGZ1Ln = accounts[1]
		const addressBAi1JFt = accounts[3]
		const addresskIieE9K = accounts[0]
//		await LIBERAPAYb2D28X.showLockState.call(addressB60zzDS, uintoL2L11Q, {from: accounts[1]});
//		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressPnGZ1Ln, {from: accounts[5]});
//		const addressvZV1FPi = await LIBERAPAYb2D28X.upgradeTo.call(addressBAi1JFt, {from: accounts[3]});
//		const boolyskboOC = await LIBERAPAYb2D28X.freezeAccount.call(addresskIieE9K, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYb2D28X.showLockState.call(addressB60zzDS, uintoL2L11Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const uintdNFpMxa = BigInt("1813")
		const addressnWZAnbZ = accounts[5]
		const addressLygCpD2 = accounts[1]
		const addressR9nEPcs = accounts[5]
		const addressTdvA0rv = accounts[0]
//		await LIBERAPAYb2D28X.showLockState.call(addressnWZAnbZ, uintdNFpMxa, {from: accounts[1]});
//		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressLygCpD2, {from: accounts[5]});
//		const uint2560rxLga = await LIBERAPAYb2D28X.currentBalanceOf.call(addressR9nEPcs, {from: accounts[3]});
//		const boolyskboOC = await LIBERAPAYb2D28X.freezeAccount.call(addressTdvA0rv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYb2D28X.showLockState.call(addressnWZAnbZ, uintdNFpMxa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const addressKwpezhC = accounts[2]
		const uintORnB2F = BigInt("874")
		const addressKyduycH = accounts[0]
		const addressbCJONfT = accounts[0]
		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressKwpezhC, {from: accounts[5]});
//		const boolMDvcFd3 = await LIBERAPAYb2D28X.unlock.call(addressKyduycH, uintORnB2F, {from: accounts[0]});
//		const boolyskboOC = await LIBERAPAYb2D28X.freezeAccount.call(addressbCJONfT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256wQN7VG0, BigInt("0"))
		await expect(LIBERAPAYb2D28X.unlock.call(addressKyduycH, uintORnB2F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const uintXkCnC4 = BigInt("1502")
		const uintKUlHCfF = BigInt("1018")
		const addressihb0wR3 = accounts[2]
		const addressagLyJcZ = accounts[2]
		const uintpypmFO4 = BigInt("1742")
		const addressr2pvQjL = accounts[3]
//		const booln7j3qW = await LIBERAPAYb2D28X.lock.call(addressihb0wR3, uintKUlHCfF, uintXkCnC4, {from: accounts[0]});
//		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressagLyJcZ, {from: accounts[5]});
//		await LIBERAPAYb2D28X.showLockState.call(addressr2pvQjL, uintpypmFO4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYb2D28X.lock.call(addressihb0wR3, uintKUlHCfF, uintXkCnC4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const addressoMeKi2Q = accounts[1]
		const uintfJPWzw8 = BigInt("1075")
		const addressXaAe6nJ = "0x0000000000000000000000000000000000000001"
		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressoMeKi2Q, {from: accounts[5]});
		const boolrD1Q18J = await LIBERAPAYb2D28X.approve.call(addressXaAe6nJ, uintfJPWzw8, {from: accounts[3]});
//		await LIBERAPAYb2D28X.whenPaused.call({from: accounts[4]});

		assert.equal(boolrD1Q18J, true)
		assert.equal(uint256wQN7VG0, BigInt("0"))
		await expect(LIBERAPAYb2D28X.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const addressunhLk8 = accounts[5]
		const uintRKqxcNg = BigInt("13")
		const addressQmZ74BT = accounts[4]
		const address7CP6Co = accounts[1]
		const uint256TiSyM7W = await LIBERAPAYb2D28X.currentBalanceOf.call(addressunhLk8, {from: accounts[0]});
//		const boolf3nF4Ls = await LIBERAPAYb2D28X.transfer.call(addressQmZ74BT, uintRKqxcNg, {from: accounts[5]});
//		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(address7CP6Co, {from: accounts[5]});

		assert.equal(uint256TiSyM7W, BigInt("0"))
		await expect(LIBERAPAYb2D28X.transfer.call(addressQmZ74BT, uintRKqxcNg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const addressklw3smg = accounts[5]
		const uint3l8xBC = BigInt("833")
		const addressfpm4zu7 = accounts[2]
		const uintGn5E1cC = BigInt("13")
		const addressc2M3Cb = accounts[4]
		const addressRAV6ZCY = accounts[2]
		const uint256TiSyM7W = await LIBERAPAYb2D28X.currentBalanceOf.call(addressklw3smg, {from: accounts[0]});
		const boolzGIRBgu = await LIBERAPAYb2D28X.transfer.call(addressfpm4zu7, uint3l8xBC, {from: accounts[0]});
//		const boolf3nF4Ls = await LIBERAPAYb2D28X.transfer.call(addressc2M3Cb, uintGn5E1cC, {from: accounts[5]});
//		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressRAV6ZCY, {from: accounts[5]});
//		const booluJglvkW = await LIBERAPAYb2D28X.acceptOwnership.call({from: accounts[3]});

		assert.equal(boolzGIRBgu, true)
		assert.equal(uint256TiSyM7W, BigInt("0"))
		await expect(LIBERAPAYb2D28X.transfer.call(addressc2M3Cb, uintGn5E1cC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const uintBJGm2Xe = BigInt("1888")
		const addresszHXf4YX = accounts[1]
		const uintvPPmad8 = BigInt("1138")
		const addressfMFx7G = accounts[4]
		const addressIaB82dB = accounts[0]
		const addressjolSmsq = accounts[2]
//		await LIBERAPAYb2D28X.showLockState.call(addresszHXf4YX, uintBJGm2Xe, {from: accounts[1]});
//		const uint256KAzMaIM = await LIBERAPAYb2D28X.getNowTime.call({from: accounts[4]});
//		const boolWuYJCjl = await LIBERAPAYb2D28X.mint.call(addressfMFx7G, uintvPPmad8, {from: accounts[3]});
//		const boolgIkKBbr = await LIBERAPAYb2D28X.unfreezeAccount.call(addressIaB82dB, {from: accounts[0]});
//		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressjolSmsq, {from: accounts[5]});

		await expect(LIBERAPAYb2D28X.showLockState.call(addresszHXf4YX, uintBJGm2Xe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOsnburX = await LIBERAPAY.new({from: accounts[4]});
		const uintSqjBU28 = BigInt("1969")
		const address6Ymhr7 = accounts[1]
		const addressiK1Z7V6 = accounts[0]
		const uintBsuNjh = BigInt("1345")
		const addressT5o81pT = accounts[1]
//		const boolssrHMe7 = await LIBERAPAYOsnburX.transferFrom.call(addressiK1Z7V6, address6Ymhr7, uintSqjBU28, {from: accounts[5]});
//		const boolvRX0E5i = await LIBERAPAYOsnburX.decreaseAllowance.call(addressT5o81pT, uintBsuNjh, {from: accounts[2]});

		await expect(LIBERAPAYOsnburX.transferFrom.call(addressiK1Z7V6, address6Ymhr7, uintSqjBU28, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const uintaMxlGYV = BigInt("13")
		const addressr8klxO = accounts[5]
		const addressT0tcnm6 = accounts[1]
//		await LIBERAPAYb2D28X.f.call({from: accounts[0]});
//		const boolf3nF4Ls = await LIBERAPAYb2D28X.transfer.call(addressr8klxO, uintaMxlGYV, {from: accounts[5]});
//		await LIBERAPAYb2D28X.onlyOwner.call({from: accounts[3]});
//		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressT0tcnm6, {from: accounts[5]});

		await expect(LIBERAPAYb2D28X.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYA5F7rx = await LIBERAPAY.new({from: accounts[4]});
		const uintDHUpOP = BigInt("971")
		const addressufO18p6 = accounts[4]
		const uintdHLfND = BigInt("190")
		const addressaM5zs4l = accounts[0]
		const addressDtIrEqd = accounts[4]
		const addressFX0Xg1 = accounts[3]
		const boolEi28HZw = await LIBERAPAYA5F7rx.distribute.call(addressufO18p6, uintDHUpOP, {from: accounts[4]});
//		const boolbNbSDno = await LIBERAPAYA5F7rx.burn.call(uintdHLfND, {from: accounts[5]});
//		const uint256tyz4iAl = await LIBERAPAYA5F7rx.allowance.call(addressDtIrEqd, addressaM5zs4l, {from: accounts[1]});
//		const addressyZqtaJP = await LIBERAPAYA5F7rx.upgradeTo.call(addressFX0Xg1, {from: accounts[3]});

		assert.equal(boolEi28HZw, true)
		await expect(LIBERAPAYA5F7rx.burn.call(uintdHLfND, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const address8Mnlvm = "0x0000000000000000000000000000000000000001"
		const addressT0MbuMf = accounts[7]
		const boolfk23JzX = await LIBERAPAYb2D28X.freezeAccount.call(address8Mnlvm, {from: accounts[0]});
		const uint256TiSyM7W = await LIBERAPAYb2D28X.currentBalanceOf.call(addressT0MbuMf, {from: accounts[0]});

		assert.equal(boolfk23JzX, true)
		assert.equal(uint256TiSyM7W, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const uintuJTSBzF = BigInt("823")
		const address5X5qqd = accounts[1]
		const uintW1DE8e1 = BigInt("21")
		const addressz1BLPh6 = accounts[6]
//		await LIBERAPAYb2D28X.pause.call({from: accounts[0]});
//		const boolvzqgJ4y = await LIBERAPAYb2D28X.unlock.call(address5X5qqd, uintuJTSBzF, {from: accounts[4]});
//		const boolf3nF4Ls = await LIBERAPAYb2D28X.transfer.call(addressz1BLPh6, uintW1DE8e1, {from: accounts[5]});

		await expect(LIBERAPAYb2D28X.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const uintWdDVH7p = BigInt("256")
		const addressryixK2S = accounts[5]
		const addressyxGw61s = accounts[0]
		const uintMuenZk7 = BigInt("21")
		const addressAZNQkgY = accounts[5]
		const addressyagFd0w = accounts[1]
		const boolw9l75CY = await LIBERAPAYb2D28X.burn.call(uintWdDVH7p, {from: accounts[0]});
		const uint256CmMKpOo = await LIBERAPAYb2D28X.allowance.call(addressyxGw61s, addressryixK2S, {from: accounts[4]});
//		const boolf3nF4Ls = await LIBERAPAYb2D28X.transfer.call(addressAZNQkgY, uintMuenZk7, {from: accounts[5]});
//		const bool0o8NtY = await LIBERAPAYb2D28X.freezeAccount.call(addressyagFd0w, {from: accounts[5]});

		assert.equal(boolw9l75CY, true)
		assert.equal(uint256CmMKpOo, BigInt("0"))
		await expect(LIBERAPAYb2D28X.transfer.call(addressAZNQkgY, uintMuenZk7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOsnburX = await LIBERAPAY.new({from: accounts[4]});
		const addressWHVniGG = accounts[3]
		const uintyr7hfQ = BigInt("1969")
		const addresswtjHqcY = accounts[2]
		const addresslLjgam2 = accounts[1]
//		const boolJfVcqH8 = await LIBERAPAYOsnburX.unfreezeAccount.call(addressWHVniGG, {from: accounts[4]});
//		const boolssrHMe7 = await LIBERAPAYOsnburX.transferFrom.call(addresslLjgam2, addresswtjHqcY, uintyr7hfQ, {from: accounts[5]});

		await expect(LIBERAPAYOsnburX.unfreezeAccount.call(addressWHVniGG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJL6c1N = await LIBERAPAY.new({from: accounts[3]});
		const uintE000LkV = BigInt("341")
		const addressUHICloD = accounts[4]
		const uintyq4UeTl = BigInt("292")
		const addressgkCuZlu = accounts[1]
		const uint256KYRlm2M = await LIBERAPAYJL6c1N.totalSupply.call({from: accounts[1]});
//		const boolvOeeSJW = await LIBERAPAYJL6c1N.mint.call(addressUHICloD, uintE000LkV, {from: accounts[3]});
//		const boolgOgNSP = await LIBERAPAYJL6c1N.transfer.call(addressgkCuZlu, uintyq4UeTl, {from: accounts[0]});

		assert.equal(uint256KYRlm2M, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYJL6c1N.mint.call(addressUHICloD, uintE000LkV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const addressUrtDwg4 = accounts[0]
		const uinthwbvSFh = BigInt("1888")
		const addressjLfpv9N = accounts[3]
		const addressRKaMkNw = await LIBERAPAYb2D28X.upgradeTo.call(addressUrtDwg4, {from: accounts[0]});
//		await LIBERAPAYb2D28X.showLockState.call(addressjLfpv9N, uinthwbvSFh, {from: accounts[1]});

		await expect(LIBERAPAYb2D28X.showLockState.call(addressjLfpv9N, uinthwbvSFh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2D28X = await LIBERAPAY.new({from: accounts[0]});
		const addressi6XSPnK = accounts[2]
		const addressYQO5jJ7 = accounts[3]
		const uint256wQN7VG0 = await LIBERAPAYb2D28X.balanceOf.call(addressi6XSPnK, {from: accounts[5]});
		const addresswCkWJ3v = await LIBERAPAYb2D28X.transferOwnership.call(addressYQO5jJ7, {from: accounts[0]});
//		await LIBERAPAYb2D28X.whenPaused.call({from: accounts[2]});

		assert.equal(uint256wQN7VG0, BigInt("0"))
		await expect(LIBERAPAYb2D28X.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJL6c1N = await LIBERAPAY.new({from: accounts[3]});
		const uintF0tZDoM = BigInt("348")
		const addressYnZwhI9 = "0x0000000000000000000000000000000000000001"
		const addressSs888jN = accounts[3]
		const uintBsCzCzy = BigInt("341")
		const addressRdszy9k = accounts[4]
		const uintNzxbUmY = BigInt("281")
		const addressO5jBPrJ = accounts[1]
//		const boolzuIzA3Y = await LIBERAPAYJL6c1N.transferFrom.call(addressSs888jN, addressYnZwhI9, uintF0tZDoM, {from: accounts[3]});
//		const boolvOeeSJW = await LIBERAPAYJL6c1N.mint.call(addressRdszy9k, uintBsCzCzy, {from: accounts[3]});
//		const uint256z62rqvW = await LIBERAPAYJL6c1N.getNowTime.call({from: accounts[2]});
//		const boolgOgNSP = await LIBERAPAYJL6c1N.transfer.call(addressO5jBPrJ, uintNzxbUmY, {from: accounts[0]});

		await expect(LIBERAPAYJL6c1N.transferFrom.call(addressSs888jN, addressYnZwhI9, uintF0tZDoM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})