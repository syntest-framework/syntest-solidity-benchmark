const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const uintrZgXrRa = BigInt("1")
		const addressocZRC8E = accounts[1]
		const addressEI1wLAk = accounts[4]
		const uintx0tOXjq = BigInt("428")
		const addressUVSE90j = accounts[3]
		const boolaKATSro = await LIBERAPAYuW2XLqf.transfer.call(addressocZRC8E, uintrZgXrRa, {from: accounts[4]});
//		const addressVAej9f5 = await LIBERAPAYuW2XLqf.notFrozen.call(addressEI1wLAk, {from: accounts[1]});
//		const boolRqFZbcG = await LIBERAPAYuW2XLqf.unlock.call(addressUVSE90j, uintx0tOXjq, {from: accounts[4]});

		assert.equal(boolaKATSro, true)
		await expect(LIBERAPAYuW2XLqf.notFrozen.call(addressEI1wLAk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQjilYvq = await LIBERAPAY.new({from: accounts[0]});
		const uintT1BFByK = BigInt("1765")
		const addressTTwich7 = accounts[4]
		const uinthxZWaBs = BigInt("1447")
		const addressFxUzELu = accounts[4]
		const addressCZO4Ar3 = accounts[4]
		const addressK8fNxZn = accounts[0]
//		const boolXYlI5sE = await LIBERAPAYQjilYvq.acceptOwnership.call({from: accounts[2]});
//		const boolx8BB0gA = await LIBERAPAYQjilYvq.decreaseAllowance.call(addressTTwich7, uintT1BFByK, {from: accounts[3]});
//		const boolJgYppLW = await LIBERAPAYQjilYvq.unlock.call(addressFxUzELu, uinthxZWaBs, {from: accounts[0]});
//		await LIBERAPAYQjilYvq.onlyNewOwner.call({from: accounts[3]});
//		const uint256nvOKNj0 = await LIBERAPAYQjilYvq.balanceOf.call(addressCZO4Ar3, {from: accounts[1]});
//		const uint256a2pafTO = await LIBERAPAYQjilYvq.currentBalanceOf.call(addressK8fNxZn, {from: accounts[2]});

		await expect(LIBERAPAYQjilYvq.acceptOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYH5lAMnp = await LIBERAPAY.new({from: accounts[3]});
		const addressiQSMpBx = accounts[0]
		const addressqRvoht = accounts[2]
		const uint256x2UDIoy = await LIBERAPAYH5lAMnp.allowance.call(addressqRvoht, addressiQSMpBx, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYH5lAMnp.unpause.call({from: accounts[0]});
//		await LIBERAPAYH5lAMnp.whenNotPaused.call({from: accounts[1]});

		assert.equal(uint256x2UDIoy, BigInt("0"))
		await expect(LIBERAPAYH5lAMnp.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTgtcIGC = await LIBERAPAY.new({from: accounts[0]});
		const addressmvn2meF = accounts[3]
		const addressxKQNTI5 = accounts[2]
		const uint256xnNF14 = await LIBERAPAYTgtcIGC.balanceOf.call(addressmvn2meF, {from: accounts[4]});
//		await LIBERAPAYTgtcIGC.onlyNewOwner.call({from: accounts[2]});
//		await LIBERAPAYTgtcIGC.whenNotPaused.call({from: accounts[3]});
//		await LIBERAPAYTgtcIGC.whenPaused.call({from: accounts[2]});
//		const addressGeFcriV = await LIBERAPAYTgtcIGC.upgradeTo.call(addressxKQNTI5, {from: accounts[1]});

		assert.equal(uint256xnNF14, BigInt("0"))
		await expect(LIBERAPAYTgtcIGC.onlyNewOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvXxyoX = await LIBERAPAY.new({from: accounts[2]});
		const uintVaOFgxJ = BigInt("836")
		const address5REDVf = accounts[2]
		const addressoVFqVXE = accounts[5]
		const boolrgOH1zT = await LIBERAPAYvXxyoX.increaseAllowance.call(address5REDVf, uintVaOFgxJ, {from: accounts[1]});
//		await LIBERAPAYvXxyoX.f.call({from: accounts[0]});
//		const uint256tNBHkQP = await LIBERAPAYvXxyoX.currentBalanceOf.call(addressoVFqVXE, {from: accounts[2]});

		assert.equal(boolrgOH1zT, true)
		await expect(LIBERAPAYvXxyoX.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpiwBpuI = await LIBERAPAY.new({from: accounts[4]});
		const addressoZ9GvfX = accounts[5]
		const addressFyivHa4 = accounts[1]
		const uintJrx5D9j = BigInt("1041")
		const addressAcTuHbF = accounts[3]
		const uint256gyNeTC6 = await LIBERAPAYpiwBpuI.getNowTime.call({from: accounts[5]});
		const uint256YG5tn2w = await LIBERAPAYpiwBpuI.allowance.call(addressFyivHa4, addressoZ9GvfX, {from: accounts[0]});
		const boolqFR2HyJ = await LIBERAPAYpiwBpuI.increaseAllowance.call(addressAcTuHbF, uintJrx5D9j, {from: accounts[4]});

		assert.equal(boolqFR2HyJ, true)
		assert.equal(uint256YG5tn2w, BigInt("0"))
		assert.equal(uint256gyNeTC6, BigInt("1630229823"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYF4PcecK = await LIBERAPAY.new({from: accounts[2]});
		const addressM82hpOQ = accounts[1]
		const uintpa5WGpv = BigInt("1062")
		const addressiYB7R0H = "0x0000000000000000000000000000000000000001"
		const uintUwT0B2X = BigInt("1609")
		const addressrkGLi9R = accounts[2]
		const uintvfD6PDr = BigInt("1215")
		const addressFdXENqr = accounts[2]
		const uint256sH3LxdY = await LIBERAPAYF4PcecK.totalSupply.call({from: accounts[2]});
		const uint256dcWDARu = await LIBERAPAYF4PcecK.currentBalanceOf.call(addressM82hpOQ, {from: accounts[3]});
//		const boolmG9gn2j = await LIBERAPAYF4PcecK.decreaseAllowance.call(addressiYB7R0H, uintpa5WGpv, {from: accounts[2]});
//		const uint256tVPDJPX = await LIBERAPAYF4PcecK.getNowTime.call({from: accounts[1]});
//		await LIBERAPAYF4PcecK.showLockState.call(addressrkGLi9R, uintUwT0B2X, {from: accounts[1]});
//		await LIBERAPAYF4PcecK.unpause.call({from: accounts[5]});
//		const boolEWvJGmw = await LIBERAPAYF4PcecK.approve.call(addressFdXENqr, uintvfD6PDr, {from: accounts[5]});

		assert.equal(uint256dcWDARu, BigInt("0"))
		assert.equal(uint256sH3LxdY, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYF4PcecK.decreaseAllowance.call(addressiYB7R0H, uintpa5WGpv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const uintmZQ4Np6 = BigInt("1")
		const addressgPI1l0 = accounts[1]
		const uintDiRtVl = BigInt("428")
		const addressKgB2EKA = accounts[3]
		const boolaKATSro = await LIBERAPAYuW2XLqf.transfer.call(addressgPI1l0, uintmZQ4Np6, {from: accounts[4]});
//		const boolRqFZbcG = await LIBERAPAYuW2XLqf.unlock.call(addressKgB2EKA, uintDiRtVl, {from: accounts[4]});

		assert.equal(boolaKATSro, true)
		await expect(LIBERAPAYuW2XLqf.unlock.call(addressKgB2EKA, uintDiRtVl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const uintHO9JeYY = BigInt("661")
		const addressxxR0kPw = accounts[3]
		const uintQ9TYhN8 = BigInt("1")
		const addressWb7ZlUx = accounts[1]
		const addressFXknbOQ = accounts[4]
		const uintWm8sQD = BigInt("428")
		const addressdCXNf0C = accounts[3]
//		const boolYxlI638 = await LIBERAPAYuW2XLqf.mint.call(addressxxR0kPw, uintHO9JeYY, {from: accounts[4]});
//		const boolaKATSro = await LIBERAPAYuW2XLqf.transfer.call(addressWb7ZlUx, uintQ9TYhN8, {from: accounts[4]});
//		const addressVAej9f5 = await LIBERAPAYuW2XLqf.notFrozen.call(addressFXknbOQ, {from: accounts[1]});
//		const boolRqFZbcG = await LIBERAPAYuW2XLqf.unlock.call(addressdCXNf0C, uintWm8sQD, {from: accounts[4]});

		await expect(LIBERAPAYuW2XLqf.mint.call(addressxxR0kPw, uintHO9JeYY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbNYils = await LIBERAPAY.new({from: accounts[2]});
		const addressYrEWT1u = accounts[0]
		const uintE9n3uk0 = BigInt("1396")
		const addressASavWYT = accounts[1]
		const addresskpa4V1 = await LIBERAPAYbNYils.transferOwnership.call(addressYrEWT1u, {from: accounts[2]});
		const boolR6cU68c = await LIBERAPAYbNYils.increaseAllowance.call(addressASavWYT, uintE9n3uk0, {from: accounts[5]});

		assert.equal(boolR6cU68c, true)
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const uintM2HOuDB = BigInt("1")
		const addressW4w4BIg = accounts[1]
		const uintTExMfDL = BigInt("891")
		const addresshS3jOMp = accounts[4]
		const addresskBjx9K = accounts[5]
		const addressHwklLXW = accounts[0]
		const uintHUCIOWN = BigInt("428")
		const addressOhHKz0X = accounts[3]
		const boolaKATSro = await LIBERAPAYuW2XLqf.transfer.call(addressW4w4BIg, uintM2HOuDB, {from: accounts[4]});
//		await LIBERAPAYuW2XLqf.showLockState.call(addresshS3jOMp, uintTExMfDL, {from: accounts[5]});
//		const addressVAej9f5 = await LIBERAPAYuW2XLqf.notFrozen.call(addresskBjx9K, {from: accounts[1]});
//		const bool14AW07 = await LIBERAPAYuW2XLqf.unfreezeAccount.call(addressHwklLXW, {from: accounts[2]});
//		const boolRqFZbcG = await LIBERAPAYuW2XLqf.unlock.call(addressOhHKz0X, uintHUCIOWN, {from: accounts[4]});

		assert.equal(boolaKATSro, true)
		await expect(LIBERAPAYuW2XLqf.showLockState.call(addresshS3jOMp, uintTExMfDL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const addressRcVtnC = accounts[1]
		const uintLxy9PbT = BigInt("2014")
		const addressWNYNpq4 = accounts[1]
		const uintsvVAusu = BigInt("1285")
		const addressPtpbItr = accounts[4]
		const boolcSHLRHs = await LIBERAPAYuW2XLqf.freezeAccount.call(addressRcVtnC, {from: accounts[4]});
		const boolaKATSro = await LIBERAPAYuW2XLqf.transfer.call(addressWNYNpq4, uintLxy9PbT, {from: accounts[4]});
//		const boolEVgH028 = await LIBERAPAYuW2XLqf.transfer.call(addressPtpbItr, uintsvVAusu, {from: accounts[0]});

		assert.equal(boolaKATSro, true)
		assert.equal(boolcSHLRHs, true)
		await expect(LIBERAPAYuW2XLqf.transfer.call(addressPtpbItr, uintsvVAusu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const uintpqAMWMW = BigInt("1447")
		const addressqLp0p9C = accounts[5]
		const uintechFoJi = BigInt("0")
		const addresspP2Xg8k = accounts[1]
		const boolXYLY3M6 = await LIBERAPAYuW2XLqf.approve.call(addressqLp0p9C, uintpqAMWMW, {from: accounts[5]});
		const boolaKATSro = await LIBERAPAYuW2XLqf.transfer.call(addresspP2Xg8k, uintechFoJi, {from: accounts[4]});

		assert.equal(boolXYLY3M6, true)
		assert.equal(boolaKATSro, true)
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const addresso3kAse = accounts[3]
		const uintDGqCy81 = BigInt("1832")
		const addressjgpYmZF = accounts[5]
		const uintliB7VNw = BigInt("1638")
		const uintSttpRN1 = BigInt("1006")
		const addressW3jSjgh = accounts[4]
		const uintXBXZDRV = BigInt("118")
		const addressEXjPncu = accounts[4]
		const uint256FBHUKSg = await LIBERAPAYuW2XLqf.currentBalanceOf.call(addresso3kAse, {from: accounts[0]});
		const boolvCOU3hA = await LIBERAPAYuW2XLqf.increaseAllowance.call(addressjgpYmZF, uintDGqCy81, {from: accounts[4]});
		const boolzuTwefG = await LIBERAPAYuW2XLqf.lock.call(addressW3jSjgh, uintSttpRN1, uintliB7VNw, {from: accounts[4]});
//		const boolkXVbYto = await LIBERAPAYuW2XLqf.burnFrom.call(addressEXjPncu, uintXBXZDRV, {from: accounts[0]});
//		await LIBERAPAYuW2XLqf.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYuW2XLqf.whenPaused.call({from: accounts[1]});

		assert.equal(boolvCOU3hA, true)
		assert.equal(boolzuTwefG, true)
		assert.equal(uint256FBHUKSg, BigInt("0"))
		await expect(LIBERAPAYuW2XLqf.burnFrom.call(addressEXjPncu, uintXBXZDRV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const uintuArbNuh = BigInt("1")
		const addressXWm5ggY = accounts[1]
		const uintJ7gLZPQ = BigInt("243")
		const addressmzhE8D = accounts[1]
		const uintnsYVMVy = BigInt("910")
		const addressuIUheZb = accounts[4]
		const uintRrhZBZ = BigInt("822")
		const addressgHpwUFb = accounts[6]
		const addressBCQ2tPY = accounts[0]
		const uinty8IPCXL = BigInt("428")
		const addresszfi5of8 = accounts[3]
		const boolaKATSro = await LIBERAPAYuW2XLqf.transfer.call(addressXWm5ggY, uintuArbNuh, {from: accounts[4]});
		const bool72o3DS = await LIBERAPAYuW2XLqf.increaseAllowance.call(addressmzhE8D, uintJ7gLZPQ, {from: accounts[4]});
//		await LIBERAPAYuW2XLqf.showLockState.call(addressuIUheZb, uintnsYVMVy, {from: accounts[5]});
//		const boolXWMSYwS = await LIBERAPAYuW2XLqf.burn.call(uintRrhZBZ, {from: accounts[4]});
//		const addressVAej9f5 = await LIBERAPAYuW2XLqf.notFrozen.call(addressgHpwUFb, {from: accounts[1]});
//		const bool14AW07 = await LIBERAPAYuW2XLqf.unfreezeAccount.call(addressBCQ2tPY, {from: accounts[2]});
//		const boolRqFZbcG = await LIBERAPAYuW2XLqf.unlock.call(addresszfi5of8, uinty8IPCXL, {from: accounts[4]});

		assert.equal(bool72o3DS, true)
		assert.equal(boolaKATSro, true)
		await expect(LIBERAPAYuW2XLqf.showLockState.call(addressuIUheZb, uintnsYVMVy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const uintA4n3Vfm = BigInt("868")
		const addressHceFxW4 = accounts[3]
		const addressHSbnIdp = accounts[5]
		const uintQEMeXCA = BigInt("428")
		const addressmZu9cTg = accounts[3]
//		const booljYhKORL = await LIBERAPAYuW2XLqf.transferFrom.call(addressHSbnIdp, addressHceFxW4, uintA4n3Vfm, {from: accounts[5]});
//		const boolRqFZbcG = await LIBERAPAYuW2XLqf.unlock.call(addressmZu9cTg, uintQEMeXCA, {from: accounts[4]});

		await expect(LIBERAPAYuW2XLqf.transferFrom.call(addressHSbnIdp, addressHceFxW4, uintA4n3Vfm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrDcWwJj = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgSbFrzv = accounts[4]
		const uintHpAoMmb = BigInt("1294")
		const addresscvFCayC = "0x0000000000000000000000000000000000000001"
		const addressRQO4ZAb = accounts[4]
		const uintSCdy9W = BigInt("1666")
		const addressczhG6lA = accounts[1]
		const uintXmZ56h = BigInt("391")
		const uint256yZtWSTW = await LIBERAPAYrDcWwJj.balanceOf.call(addressgSbFrzv, {from: accounts[0]});
		const boolpqPq8ft = await LIBERAPAYrDcWwJj.transferFrom.call(addressRQO4ZAb, addresscvFCayC, uintHpAoMmb, {from: accounts[0]});
		const boolRVr1HHv = await LIBERAPAYrDcWwJj.burnFrom.call(addressczhG6lA, uintSCdy9W, {from: accounts[2]});
		const boolQmdNKt1 = await LIBERAPAYrDcWwJj.burn.call(uintXmZ56h, {from: accounts[5]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const uintuPD50BR = BigInt("785")
		const addressdWBGLF = accounts[2]
		const addressC1rtX5z = accounts[4]
		const bool8haEkD = await LIBERAPAYuW2XLqf.distribute.call(addressdWBGLF, uintuPD50BR, {from: accounts[4]});
		const uint256FBHUKSg = await LIBERAPAYuW2XLqf.currentBalanceOf.call(addressC1rtX5z, {from: accounts[0]});

		assert.equal(bool8haEkD, true)
		assert.equal(uint256FBHUKSg, BigInt("3000000000000000000000000000"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const addressHUJt4sv = accounts[4]
		const addressVkPUoa = accounts[4]
		const uintze6yjuz = BigInt("428")
		const addressHBsFE9Y = accounts[5]
		const uintNbmDaoj = BigInt("464")
		const addressBdzzQQj = accounts[2]
//		await LIBERAPAYuW2XLqf.pause.call({from: accounts[4]});
//		const uint256ICksCI = await LIBERAPAYuW2XLqf.allowance.call(addressVkPUoa, addressHUJt4sv, {from: accounts[2]});
//		const boolRqFZbcG = await LIBERAPAYuW2XLqf.unlock.call(addressHBsFE9Y, uintze6yjuz, {from: accounts[4]});
//		const booltV16S0e = await LIBERAPAYuW2XLqf.acceptOwnership.call({from: accounts[3]});
//		const boolRPXS0TM = await LIBERAPAYuW2XLqf.approve.call(addressBdzzQQj, uintNbmDaoj, {from: accounts[2]});
//		await LIBERAPAYuW2XLqf.f.call({from: accounts[2]});

		await expect(LIBERAPAYuW2XLqf.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTgtcIGC = await LIBERAPAY.new({from: accounts[0]});
		const addressOLxj5kc = accounts[4]
		const addressBAMzUSn = accounts[5]
		const addressLH0XY8W = accounts[4]
//		const boolITdkpsm = await LIBERAPAYTgtcIGC.unfreezeAccount.call(addressOLxj5kc, {from: accounts[0]});
//		const uint256xnNF14 = await LIBERAPAYTgtcIGC.balanceOf.call(addressBAMzUSn, {from: accounts[4]});
//		const boolim9xhe = await LIBERAPAYTgtcIGC.unfreezeAccount.call(addressLH0XY8W, {from: accounts[5]});

		await expect(LIBERAPAYTgtcIGC.unfreezeAccount.call(addressOLxj5kc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuW2XLqf = await LIBERAPAY.new({from: accounts[4]});
		const addressVyj6eMl = accounts[4]
		const addressWRHHxDC = accounts[4]
		const uint256FBHUKSg = await LIBERAPAYuW2XLqf.currentBalanceOf.call(addressVyj6eMl, {from: accounts[0]});
		const addressIJtYqIB = await LIBERAPAYuW2XLqf.upgradeTo.call(addressWRHHxDC, {from: accounts[4]});
//		await LIBERAPAYuW2XLqf.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256FBHUKSg, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYuW2XLqf.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})