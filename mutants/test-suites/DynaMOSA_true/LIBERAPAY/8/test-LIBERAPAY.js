const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvMXbyQ = await LIBERAPAY.new({from: accounts[4]});
		const addressCvaZoIu = accounts[3]
		const uintoB8ZqOj = BigInt("1283")
		const addressN4t9td3 = accounts[2]
		const addressDQa8fn = accounts[0]
		const addressx8bMwzX = accounts[1]
		const uint33pH91 = BigInt("1961")
		const uintZztoHSl = BigInt("1256")
		const addressU2OI0vj = accounts[0]
		const uint256AV07AY0 = await LIBERAPAYvMXbyQ.currentBalanceOf.call(addressCvaZoIu, {from: accounts[1]});
		const boolX5Fp4XV = await LIBERAPAYvMXbyQ.approve.call(addressN4t9td3, uintoB8ZqOj, {from: accounts[2]});
		const uint256RiCoe6W = await LIBERAPAYvMXbyQ.allowance.call(addressx8bMwzX, addressDQa8fn, {from: accounts[3]});
//		const boolLkxv3wm = await LIBERAPAYvMXbyQ.lock.call(addressU2OI0vj, uintZztoHSl, uint33pH91, {from: accounts[1]});

		assert.equal(boolX5Fp4XV, true)
		assert.equal(uint256AV07AY0, BigInt("0"))
		assert.equal(uint256RiCoe6W, BigInt("0"))
		await expect(LIBERAPAYvMXbyQ.lock.call(addressU2OI0vj, uintZztoHSl, uint33pH91, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYger7PPD = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcG1DsIS = BigInt("1318")
		const uintL2UXkZ = BigInt("103")
		const addressEdUIjRm = accounts[1]
		const addressaMYbJp4 = accounts[1]
		const uintUa4d38Y = BigInt("1404")
		const addresshKzNkIa = accounts[3]
		const uintaNMn3Lu = BigInt("1711")
		const addressPUGX4rD = accounts[5]
		const addressbc2fpqs = accounts[3]
		const boolzzClUl2 = await LIBERAPAYger7PPD.lock.call(addressEdUIjRm, uintL2UXkZ, uintcG1DsIS, {from: accounts[2]});
		await LIBERAPAYger7PPD.onlyOwner.call({from: accounts[2]});
		const boolTn5xMbY = await LIBERAPAYger7PPD.unfreezeAccount.call(addressaMYbJp4, {from: accounts[0]});
		const boolqoG93z = await LIBERAPAYger7PPD.decreaseAllowance.call(addresshKzNkIa, uintUa4d38Y, {from: "0x0000000000000000000000000000000000000001"});
		const boolEFuHyL = await LIBERAPAYger7PPD.transferFrom.call(addressbc2fpqs, addressPUGX4rD, uintaNMn3Lu, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbfv8iay = await LIBERAPAY.new({from: accounts[5]});
		const addressZRwvobn = accounts[4]
		const uintgZS9bUo = BigInt("493")
		const addressGLT5HrJ = accounts[0]
		const uintuilD2ms = BigInt("93")
		const uintsmDGWw = BigInt("1726")
		const addressPd6KnTa = accounts[2]
		const uintWMBtZdI = BigInt("1321")
		const addressYLQBjC4 = accounts[5]
		const uintfPO7uBy = BigInt("104")
		const addressu5dbFCt = accounts[2]
		const uint256LUkK8h = await LIBERAPAYbfv8iay.currentBalanceOf.call(addressZRwvobn, {from: accounts[5]});
		const boolXk3YRxB = await LIBERAPAYbfv8iay.increaseAllowance.call(addressGLT5HrJ, uintgZS9bUo, {from: accounts[4]});
//		const boolOYXHNY = await LIBERAPAYbfv8iay.acceptOwnership.call({from: accounts[4]});
//		const boolZ6bkfzj = await LIBERAPAYbfv8iay.lock.call(addressPd6KnTa, uintsmDGWw, uintuilD2ms, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyE1HNFr = await LIBERAPAYbfv8iay.burnFrom.call(addressYLQBjC4, uintWMBtZdI, {from: accounts[2]});
//		const boolu1lD3fr = await LIBERAPAYbfv8iay.burnFrom.call(addressu5dbFCt, uintfPO7uBy, {from: accounts[2]});

		assert.equal(boolXk3YRxB, true)
		assert.equal(uint256LUkK8h, BigInt("0"))
		await expect(LIBERAPAYbfv8iay.acceptOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnxCkUUG = await LIBERAPAY.new({from: accounts[4]});
		const uintQ2237M = BigInt("1407")
		const addressJBOMmhj = accounts[2]
		const addressurvKFDm = accounts[2]
		const uint256PXShRb = await LIBERAPAYnxCkUUG.totalSupply.call({from: accounts[0]});
//		const boolJGM9I3z = await LIBERAPAYnxCkUUG.burn.call(uintQ2237M, {from: accounts[3]});
//		const addressO2dnQFa = await LIBERAPAYnxCkUUG.upgradeTo.call(addressJBOMmhj, {from: accounts[4]});
//		const addressdiElcfz = await LIBERAPAYnxCkUUG.notFrozen.call(addressurvKFDm, {from: accounts[3]});

		assert.equal(uint256PXShRb, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYnxCkUUG.burn.call(uintQ2237M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintQ9szVTS = BigInt("1360")
		const addressXMdXvcX = accounts[3]
		const addressm3Zt2Xj = accounts[2]
		const uinti4CV68o = BigInt("1711")
		const addressRSepk09 = accounts[5]
//		const boolFEQDVI8 = await LIBERAPAYrmPkx4C.transferFrom.call(addressm3Zt2Xj, addressXMdXvcX, uintQ9szVTS, {from: accounts[3]});
//		await LIBERAPAYrmPkx4C.showLockState.call(addressRSepk09, uinti4CV68o, {from: accounts[0]});
//		await LIBERAPAYrmPkx4C.pause.call({from: accounts[4]});

		await expect(LIBERAPAYrmPkx4C.transferFrom.call(addressm3Zt2Xj, addressXMdXvcX, uintQ9szVTS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYisFsSTu = await LIBERAPAY.new({from: accounts[3]});
		const uintLqJ99Ms = BigInt("1607")
		const address4bhYP2 = accounts[4]
		const uintXzxqhYs = BigInt("945")
		const addresszk3wIKP = accounts[5]
		const uintnKfsPlz = BigInt("1403")
//		const boolnjJF1pr = await LIBERAPAYisFsSTu.transfer.call(address4bhYP2, uintLqJ99Ms, {from: accounts[4]});
//		await LIBERAPAYisFsSTu.showLockState.call(addresszk3wIKP, uintXzxqhYs, {from: accounts[3]});
//		const boolsPO4F02 = await LIBERAPAYisFsSTu.burn.call(uintnKfsPlz, {from: accounts[5]});

		await expect(LIBERAPAYisFsSTu.transfer.call(address4bhYP2, uintLqJ99Ms, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGhsVEs = await LIBERAPAY.new({from: accounts[4]});
		const uintYl0Ee3W = BigInt("1602")
		const addressuarxRQM = accounts[1]
		const uint256sC9Vw3N = await LIBERAPAYGhsVEs.totalSupply.call({from: accounts[3]});
		const boolSeAPQeN = await LIBERAPAYGhsVEs.approve.call(addressuarxRQM, uintYl0Ee3W, {from: accounts[1]});
//		await LIBERAPAYGhsVEs.f.call({from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYGhsVEs.f.call({from: accounts[1]});

		assert.equal(boolSeAPQeN, true)
		assert.equal(uint256sC9Vw3N, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYGhsVEs.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvMXbyQ = await LIBERAPAY.new({from: accounts[4]});
		const addressxgSlZmH = accounts[2]
		const addressHRvJZfo = accounts[3]
		const addressWs4bkBN = accounts[4]
		const uintivD2kfV = BigInt("1283")
		const addressLcIwsZq = accounts[2]
		const uintuas3pOH = BigInt("1961")
		const uintxKsGXxR = BigInt("1256")
		const addressJaoQyEF = accounts[0]
		const uint256zp9yHak = await LIBERAPAYvMXbyQ.balanceOf.call(addressxgSlZmH, {from: accounts[2]});
		const uint256AV07AY0 = await LIBERAPAYvMXbyQ.currentBalanceOf.call(addressHRvJZfo, {from: accounts[1]});
		const uint256UOLDwWZ = await LIBERAPAYvMXbyQ.balanceOf.call(addressWs4bkBN, {from: accounts[0]});
		const boolX5Fp4XV = await LIBERAPAYvMXbyQ.approve.call(addressLcIwsZq, uintivD2kfV, {from: accounts[2]});
//		const boolqERftmF = await LIBERAPAYvMXbyQ.acceptOwnership.call({from: accounts[1]});
//		const boolLkxv3wm = await LIBERAPAYvMXbyQ.lock.call(addressJaoQyEF, uintxKsGXxR, uintuas3pOH, {from: accounts[1]});

		assert.equal(boolX5Fp4XV, true)
		assert.equal(uint256AV07AY0, BigInt("0"))
		assert.equal(uint256UOLDwWZ, BigInt("3000000000000000000000000000"))
		assert.equal(uint256zp9yHak, BigInt("0"))
		await expect(LIBERAPAYvMXbyQ.acceptOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGhsVEs = await LIBERAPAY.new({from: accounts[4]});
		const uinttdc0Eg = BigInt("1519")
		const addressFYpVQ3V = accounts[0]
		const addressaemJCm = accounts[2]
		const uint4wGT1g = BigInt("1602")
		const addressbPi8C7 = accounts[0]
		const uint256sC9Vw3N = await LIBERAPAYGhsVEs.totalSupply.call({from: accounts[3]});
		const uint256Ao0gayZ = await LIBERAPAYGhsVEs.getNowTime.call({from: accounts[3]});
		const boolP6yXJ16 = await LIBERAPAYGhsVEs.increaseAllowance.call(addressFYpVQ3V, uinttdc0Eg, {from: accounts[2]});
//		const boolP2dOZBc = await LIBERAPAYGhsVEs.unfreezeAccount.call(addressaemJCm, {from: accounts[0]});
//		const boolSeAPQeN = await LIBERAPAYGhsVEs.approve.call(addressbPi8C7, uint4wGT1g, {from: accounts[1]});
//		await LIBERAPAYGhsVEs.f.call({from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYGhsVEs.f.call({from: accounts[1]});

		assert.equal(boolP6yXJ16, true)
		assert.equal(uint256Ao0gayZ, BigInt("1630231546"))
		assert.equal(uint256sC9Vw3N, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYGhsVEs.unfreezeAccount.call(addressaemJCm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvMXbyQ = await LIBERAPAY.new({from: accounts[4]});
		const addresspqyf7mK = accounts[3]
		const addresshPUslVO = accounts[4]
		const uintPSjxfI8 = BigInt("1283")
		const addressIRMGUbD = accounts[3]
		const addressv91CJe = accounts[0]
		const addressdJpijG = accounts[1]
		const uintLlhLWj7 = BigInt("1961")
		const uintkcjfTuS = BigInt("1256")
		const addressrfdH4yt = accounts[0]
		const uint256AV07AY0 = await LIBERAPAYvMXbyQ.currentBalanceOf.call(addresspqyf7mK, {from: accounts[1]});
		const addressDf2vGR1 = await LIBERAPAYvMXbyQ.upgradeTo.call(addresshPUslVO, {from: accounts[4]});
		const boolX5Fp4XV = await LIBERAPAYvMXbyQ.approve.call(addressIRMGUbD, uintPSjxfI8, {from: accounts[2]});
		const uint256RiCoe6W = await LIBERAPAYvMXbyQ.allowance.call(addressdJpijG, addressv91CJe, {from: accounts[3]});
//		const boolLkxv3wm = await LIBERAPAYvMXbyQ.lock.call(addressrfdH4yt, uintkcjfTuS, uintLlhLWj7, {from: accounts[1]});

		assert.equal(boolX5Fp4XV, true)
		assert.equal(uint256AV07AY0, BigInt("0"))
		assert.equal(uint256RiCoe6W, BigInt("0"))
		await expect(LIBERAPAYvMXbyQ.lock.call(addressrfdH4yt, uintkcjfTuS, uintLlhLWj7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYISx04EX = await LIBERAPAY.new({from: accounts[3]});
		const uintL3aJZvo = BigInt("1973")
		const addressgdTZ1T3 = accounts[1]
		const uintO3ABCCa = BigInt("2012")
		const addressTAe3Xab = accounts[0]
//		await LIBERAPAYISx04EX.onlyNewOwner.call({from: accounts[4]});
//		await LIBERAPAYISx04EX.whenPaused.call({from: accounts[3]});
//		const booljQBW1EV = await LIBERAPAYISx04EX.distribute.call(addressgdTZ1T3, uintL3aJZvo, {from: accounts[0]});
//		const boolCI6j5vT = await LIBERAPAYISx04EX.increaseAllowance.call(addressTAe3Xab, uintO3ABCCa, {from: accounts[0]});
//		await LIBERAPAYISx04EX.unpause.call({from: accounts[3]});

		await expect(LIBERAPAYISx04EX.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintNULCHF2 = BigInt("1711")
		const addresstSBgE7t = accounts[5]
//		await LIBERAPAYrmPkx4C.showLockState.call(addresstSBgE7t, uintNULCHF2, {from: accounts[0]});
//		await LIBERAPAYrmPkx4C.pause.call({from: accounts[4]});

		await expect(LIBERAPAYrmPkx4C.showLockState.call(addresstSBgE7t, uintNULCHF2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvMXbyQ = await LIBERAPAY.new({from: accounts[4]});
		const uintWZPIJ7a = BigInt("440")
		const addressaVFwR7f = accounts[4]
		const addresspVtqLNW = accounts[2]
		const addressXrQKLcn = accounts[3]
		const uintzZK9lOY = BigInt("1947")
		const addressFgIfuwp = accounts[5]
		const uint4YeD3q = BigInt("679")
		const addresseClAW8C = accounts[4]
		const addressd0KrGYD = accounts[4]
		const addresskUHByY1 = accounts[4]
		const addresst5PgNNQ = accounts[4]
		const uintb6WUzvj = BigInt("1283")
		const addressBr5nFiX = accounts[2]
		const uintvdBlIRf = BigInt("1961")
		const uintmYZWg6F = BigInt("1256")
		const addressanmt6zd = accounts[0]
		const addressN9nkIET = accounts[2]
//		const boolPtNJwA = await LIBERAPAYvMXbyQ.decreaseAllowance.call(addressaVFwR7f, uintWZPIJ7a, {from: accounts[2]});
//		const uint256zp9yHak = await LIBERAPAYvMXbyQ.balanceOf.call(addresspVtqLNW, {from: accounts[2]});
//		const uint256AV07AY0 = await LIBERAPAYvMXbyQ.currentBalanceOf.call(addressXrQKLcn, {from: accounts[1]});
//		const booltMDsyGR = await LIBERAPAYvMXbyQ.transfer.call(addressFgIfuwp, uintzZK9lOY, {from: accounts[5]});
//		const boollR4M3Tw = await LIBERAPAYvMXbyQ.transferFrom.call(addressd0KrGYD, addresseClAW8C, uint4YeD3q, {from: accounts[4]});
//		const uint256UOLDwWZ = await LIBERAPAYvMXbyQ.balanceOf.call(addresskUHByY1, {from: accounts[0]});
//		const uint256rUCmEuR = await LIBERAPAYvMXbyQ.balanceOf.call(addresst5PgNNQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolX5Fp4XV = await LIBERAPAYvMXbyQ.approve.call(addressBr5nFiX, uintb6WUzvj, {from: accounts[2]});
//		const boolqERftmF = await LIBERAPAYvMXbyQ.acceptOwnership.call({from: accounts[1]});
//		const boolLkxv3wm = await LIBERAPAYvMXbyQ.lock.call(addressanmt6zd, uintmYZWg6F, uintvdBlIRf, {from: accounts[1]});
//		const uint256Dq3YBJj = await LIBERAPAYvMXbyQ.currentBalanceOf.call(addressN9nkIET, {from: accounts[2]});

		await expect(LIBERAPAYvMXbyQ.decreaseAllowance.call(addressaVFwR7f, uintWZPIJ7a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvMXbyQ = await LIBERAPAY.new({from: accounts[4]});
		const uintcM0EHzJ = BigInt("1350")
		const addressS8Eaon = accounts[2]
		const addresshfJaSN7 = "0x0000000000000000000000000000000000000000"
		const addressZGPNvQa = accounts[3]
//		const boold1bJlZI = await LIBERAPAYvMXbyQ.unlock.call(addressS8Eaon, uintcM0EHzJ, {from: accounts[4]});
//		const uint256x0XFQQF = await LIBERAPAYvMXbyQ.balanceOf.call(addresshfJaSN7, {from: accounts[4]});
//		const uint256AV07AY0 = await LIBERAPAYvMXbyQ.currentBalanceOf.call(addressZGPNvQa, {from: accounts[1]});
//		await LIBERAPAYvMXbyQ.pause.call({from: accounts[1]});

		await expect(LIBERAPAYvMXbyQ.unlock.call(addressS8Eaon, uintcM0EHzJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvMXbyQ = await LIBERAPAY.new({from: accounts[4]});
		const uintU2NuKoF = BigInt("1004")
		const uintx9nieJr = BigInt("2043")
		const addresshdV7DjJ = accounts[2]
		const addressgCBwv8J = accounts[4]
//		const boolqwgiK4i = await LIBERAPAYvMXbyQ.lock.call(addresshdV7DjJ, uintx9nieJr, uintU2NuKoF, {from: accounts[4]});
//		const uint256AV07AY0 = await LIBERAPAYvMXbyQ.currentBalanceOf.call(addressgCBwv8J, {from: accounts[1]});

		await expect(LIBERAPAYvMXbyQ.lock.call(addresshdV7DjJ, uintx9nieJr, uintU2NuKoF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintNapw0u5 = BigInt("1711")
		const addressVfh71Xb = accounts[6]
		const addressbOCJ3tZ = "0x00000000000000000000000000000000000000-1"
		const addressCvjxb1P = accounts[1]
		const uintkSFBex1 = BigInt("398")
		const addressAHfdncr = accounts[4]
		const addressOrlAQKE = accounts[2]
		const addressmTORZGr = accounts[5]
//		await LIBERAPAYrmPkx4C.showLockState.call(addressVfh71Xb, uintNapw0u5, {from: accounts[0]});
//		const uint256iC4N7Kv = await LIBERAPAYrmPkx4C.currentBalanceOf.call(addressbOCJ3tZ, {from: accounts[1]});
//		const boolP2OWTVZ = await LIBERAPAYrmPkx4C.freezeAccount.call(addressCvjxb1P, {from: accounts[1]});
//		const boolDsFvEKc = await LIBERAPAYrmPkx4C.burnFrom.call(addressAHfdncr, uintkSFBex1, {from: accounts[4]});
//		const uint256w6RkBGy = await LIBERAPAYrmPkx4C.allowance.call(addressmTORZGr, addressOrlAQKE, {from: accounts[2]});
//		await LIBERAPAYrmPkx4C.onlyNewOwner.call({from: accounts[2]});

		await expect(LIBERAPAYrmPkx4C.showLockState.call(addressVfh71Xb, uintNapw0u5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSFKKoiX = await LIBERAPAY.new({from: accounts[1]});
		const uinti83souL = BigInt("246")
		const addressA6ZomzD = "0x0000000000000000000000000000000000000001"
		const uintlTKR3c2 = BigInt("1395")
		const addressTeJ62dJ = accounts[1]
		const uintoblDmdQ = BigInt("708")
		const addresstaaFvFJ = accounts[5]
		const uintJlfWlt8 = BigInt("1439")
		const addressO8PAoAi = accounts[0]
		const boolt0AF9Cf = await LIBERAPAYSFKKoiX.approve.call(addressA6ZomzD, uinti83souL, {from: accounts[2]});
		const boolX29WepX = await LIBERAPAYSFKKoiX.increaseAllowance.call(addressTeJ62dJ, uintlTKR3c2, {from: accounts[5]});
//		const boolttyq9zX = await LIBERAPAYSFKKoiX.burnFrom.call(addresstaaFvFJ, uintoblDmdQ, {from: accounts[0]});
//		await LIBERAPAYSFKKoiX.pause.call({from: accounts[1]});
//		const boolJqXqwHE = await LIBERAPAYSFKKoiX.decreaseAllowance.call(addressO8PAoAi, uintJlfWlt8, {from: accounts[0]});

		assert.equal(boolX29WepX, true)
		assert.equal(boolt0AF9Cf, true)
		await expect(LIBERAPAYSFKKoiX.burnFrom.call(addresstaaFvFJ, uintoblDmdQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintpJKwTOs = BigInt("300")
		const uintNP6jCz = BigInt("583")
		const addressaQjERtE = "0x0000000000000000000000000000000000000001"
		const uinthZUbuoB = BigInt("1722")
		const addresscuheWgC = accounts[5]
		const bool4PTZF0 = await LIBERAPAYrmPkx4C.burn.call(uintpJKwTOs, {from: accounts[2]});
//		const boolDhZczsA = await LIBERAPAYrmPkx4C.burnFrom.call(addressaQjERtE, uintNP6jCz, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYrmPkx4C.showLockState.call(addresscuheWgC, uinthZUbuoB, {from: accounts[0]});

		assert.equal(bool4PTZF0, true)
		await expect(LIBERAPAYrmPkx4C.burnFrom.call(addressaQjERtE, uintNP6jCz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintnfc6haE = BigInt("1711")
		const addressgChOZzG = accounts[6]
		const addressY7LrVel = accounts[4]
		const uintMp7uGIb = BigInt("1625")
		const addressl8x3cMO = "0x0000000000000000000000000000000000000001"
		const addresslGVcVP8 = "0x0000000000000000000000000000000000000000"
		const uintU2kQlhp = BigInt("1640")
		const addressafARMg9 = accounts[2]
		const addressnQ4z0fO = accounts[1]
		const addresscS54p8s = accounts[2]
		const addressj9YZ4Wp = accounts[5]
		const addressYxWExNi = accounts[0]
//		await LIBERAPAYrmPkx4C.showLockState.call(addressgChOZzG, uintnfc6haE, {from: accounts[0]});
//		const uint256j18xNna = await LIBERAPAYrmPkx4C.balanceOf.call(addressY7LrVel, {from: accounts[1]});
//		const boolcN7ufZ = await LIBERAPAYrmPkx4C.transfer.call(addressl8x3cMO, uintMp7uGIb, {from: accounts[2]});
//		const uint256iC4N7Kv = await LIBERAPAYrmPkx4C.currentBalanceOf.call(addresslGVcVP8, {from: accounts[1]});
//		const boolR0yG22 = await LIBERAPAYrmPkx4C.transfer.call(addressafARMg9, uintU2kQlhp, {from: "0x0000000000000000000000000000000000000001"});
//		const boolP2OWTVZ = await LIBERAPAYrmPkx4C.freezeAccount.call(addressnQ4z0fO, {from: accounts[1]});
//		const uint256w6RkBGy = await LIBERAPAYrmPkx4C.allowance.call(addressj9YZ4Wp, addresscS54p8s, {from: accounts[2]});
//		await LIBERAPAYrmPkx4C.onlyNewOwner.call({from: accounts[2]});
//		await LIBERAPAYrmPkx4C.whenPaused.call({from: accounts[1]});
//		await LIBERAPAYrmPkx4C.whenNotPaused.call({from: accounts[4]});
//		const addressQtC1h8 = await LIBERAPAYrmPkx4C.upgradeTo.call(addressYxWExNi, {from: accounts[2]});

		await expect(LIBERAPAYrmPkx4C.showLockState.call(addressgChOZzG, uintnfc6haE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintNUWA40Z = BigInt("1711")
		const addressh4CLeh1 = accounts[6]
		const addressId0HSWa = accounts[2]
		const address9tph33 = accounts[0]
		const addressqCL0qrh = accounts[4]
		const uintyO8oS0s = BigInt("1625")
		const addressZVqpl5X = "0x0000000000000000000000000000000000000001"
		const addressWTihJg = "0x0000000000000000000000000000000000000001"
		const uintyPd3yfJ = BigInt("1640")
		const addresshhWFtu5 = accounts[2]
		const addressqhGZOz = accounts[1]
		const addressmdaFj1i = accounts[2]
		const addressQPV2wPm = accounts[5]
		const addressOPC0W5O = accounts[0]
//		await LIBERAPAYrmPkx4C.showLockState.call(addressh4CLeh1, uintNUWA40Z, {from: accounts[0]});
//		const addressmocKx4C = await LIBERAPAYrmPkx4C.transferOwnership.call(addressId0HSWa, {from: accounts[2]});
//		const uint256wzr04EC = await LIBERAPAYrmPkx4C.balanceOf.call(address9tph33, {from: accounts[2]});
//		const uint256j18xNna = await LIBERAPAYrmPkx4C.balanceOf.call(addressqCL0qrh, {from: accounts[1]});
//		const boolcN7ufZ = await LIBERAPAYrmPkx4C.transfer.call(addressZVqpl5X, uintyO8oS0s, {from: accounts[2]});
//		const uint256iC4N7Kv = await LIBERAPAYrmPkx4C.currentBalanceOf.call(addressWTihJg, {from: accounts[1]});
//		const boolR0yG22 = await LIBERAPAYrmPkx4C.transfer.call(addresshhWFtu5, uintyPd3yfJ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolP2OWTVZ = await LIBERAPAYrmPkx4C.freezeAccount.call(addressqhGZOz, {from: accounts[1]});
//		const uint256w6RkBGy = await LIBERAPAYrmPkx4C.allowance.call(addressQPV2wPm, addressmdaFj1i, {from: accounts[2]});
//		await LIBERAPAYrmPkx4C.onlyNewOwner.call({from: accounts[2]});
//		await LIBERAPAYrmPkx4C.whenPaused.call({from: accounts[1]});
//		await LIBERAPAYrmPkx4C.whenNotPaused.call({from: accounts[4]});
//		const addressQtC1h8 = await LIBERAPAYrmPkx4C.upgradeTo.call(addressOPC0W5O, {from: accounts[2]});

		await expect(LIBERAPAYrmPkx4C.showLockState.call(addressh4CLeh1, uintNUWA40Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintBPiWSYd = BigInt("1714")
		const addressihvXVlJ = accounts[5]
		const addressryTGDIK = accounts[1]
//		await LIBERAPAYrmPkx4C.showLockState.call(addressihvXVlJ, uintBPiWSYd, {from: accounts[0]});
//		const boolOa0BOTe = await LIBERAPAYrmPkx4C.unfreezeAccount.call(addressryTGDIK, {from: accounts[2]});

		await expect(LIBERAPAYrmPkx4C.showLockState.call(addressihvXVlJ, uintBPiWSYd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYisFsSTu = await LIBERAPAY.new({from: accounts[3]});
		const addressleLFtK6 = accounts[4]
		const uint3LZ2T5 = BigInt("1502")
		const addressFWG8anv = accounts[0]
		const uintQjToo9g = BigInt("1607")
		const addressoVec9CI = accounts[5]
		const boolyWRp4HX = await LIBERAPAYisFsSTu.freezeAccount.call(addressleLFtK6, {from: accounts[3]});
//		const boolTmsLBbR = await LIBERAPAYisFsSTu.transfer.call(addressFWG8anv, uint3LZ2T5, {from: accounts[1]});
//		const boolnjJF1pr = await LIBERAPAYisFsSTu.transfer.call(addressoVec9CI, uintQjToo9g, {from: accounts[4]});

		assert.equal(boolyWRp4HX, true)
		await expect(LIBERAPAYisFsSTu.transfer.call(addressFWG8anv, uint3LZ2T5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintXfjvcud = BigInt("1711")
		const addressW1rwppi = accounts[6]
//		await LIBERAPAYrmPkx4C.showLockState.call(addressW1rwppi, uintXfjvcud, {from: accounts[0]});
//		await LIBERAPAYrmPkx4C.pause.call({from: accounts[2]});
//		await LIBERAPAYrmPkx4C.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYrmPkx4C.showLockState.call(addressW1rwppi, uintXfjvcud, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintOdmzfHH = BigInt("1431")
		const addressjir4Bt7 = accounts[2]
		const uinthuc1vcB = BigInt("1711")
		const addressbyeTh2v = accounts[5]
		const addressp3lbobA = accounts[4]
		const booleS1fVnm = await LIBERAPAYrmPkx4C.distribute.call(addressjir4Bt7, uintOdmzfHH, {from: accounts[2]});
//		const boolJYIeVQn = await LIBERAPAYrmPkx4C.acceptOwnership.call({from: accounts[3]});
//		await LIBERAPAYrmPkx4C.showLockState.call(addressbyeTh2v, uinthuc1vcB, {from: accounts[0]});
//		const addresshC0uyp = await LIBERAPAYrmPkx4C.upgradeTo.call(addressp3lbobA, {from: accounts[0]});

		assert.equal(booleS1fVnm, true)
		await expect(LIBERAPAYrmPkx4C.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrmPkx4C = await LIBERAPAY.new({from: accounts[2]});
		const uintnvfBIO3 = BigInt("1711")
		const addresstHHui1m = accounts[5]
		const uintfSSI4BN = BigInt("950")
		const addressZxT9PIL = accounts[1]
		const addressrTO2QJ = accounts[2]
//		await LIBERAPAYrmPkx4C.showLockState.call(addresstHHui1m, uintnvfBIO3, {from: accounts[0]});
//		const boolJ2dEoPV = await LIBERAPAYrmPkx4C.mint.call(addressZxT9PIL, uintfSSI4BN, {from: accounts[2]});
//		const booleJOid3l = await LIBERAPAYrmPkx4C.unfreezeAccount.call(addressrTO2QJ, {from: accounts[1]});

		await expect(LIBERAPAYrmPkx4C.showLockState.call(addresstHHui1m, uintnvfBIO3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})