const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIBSWa7d = await LIBERAPAY.new({from: accounts[1]});
		const addressgFh7nFq = accounts[2]
		const uint256oS8ruOE = await LIBERAPAYIBSWa7d.getNowTime.call({from: accounts[0]});
		await LIBERAPAYIBSWa7d.onlyOwner.call({from: accounts[3]});
		const addressqvjcKXM = await LIBERAPAYIBSWa7d.upgradeTo.call(addressgFh7nFq, {from: accounts[0]});

		assert.equal(uint256oS8ruOE, BigInt("1630230980"))
		await expect(LIBERAPAYIBSWa7d.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvR1rqwN = await LIBERAPAY.new({from: accounts[1]});
		const addressZSLKb4C = accounts[2]
		const uintXwfTlf4 = BigInt("946")
		const addressKWz0ekZ = accounts[2]
		const addressPBOzkzb = accounts[1]
		const uintyONl1s8 = BigInt("196")
		const addressguvNm3h = accounts[3]
		const uintVpzKktF = BigInt("1813")
		const address1ZFhsE = accounts[2]
		const addresssVQWxag = await LIBERAPAYvR1rqwN.transferOwnership.call(addressZSLKb4C, {from: accounts[0]});
		const boolZO4jbfq = await LIBERAPAYvR1rqwN.transferFrom.call(addressPBOzkzb, addressKWz0ekZ, uintXwfTlf4, {from: "0x0000000000000000000000000000000000000001"});
		const boolMmdM0q5 = await LIBERAPAYvR1rqwN.unlock.call(addressguvNm3h, uintyONl1s8, {from: accounts[2]});
		const booli7MEPT = await LIBERAPAYvR1rqwN.increaseAllowance.call(address1ZFhsE, uintVpzKktF, {from: accounts[3]});

		await expect(LIBERAPAYvR1rqwN.transferOwnership.call(addressZSLKb4C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdAkEvVL = await LIBERAPAY.new({from: accounts[2]});
		const uintaJBdodY = BigInt("1698")
		const address03qjZM = accounts[2]
		const uintE1Zxf35 = BigInt("1815")
		const addressTTu5agK = accounts[2]
		const addressz2ygRqZ = accounts[4]
		const boolnwRzIKb = await LIBERAPAYdAkEvVL.transfer.call(address03qjZM, uintaJBdodY, {from: accounts[0]});
		await LIBERAPAYdAkEvVL.onlyNewOwner.call({from: accounts[4]});
		const boolPGo6las = await LIBERAPAYdAkEvVL.increaseAllowance.call(addressTTu5agK, uintE1Zxf35, {from: accounts[2]});
		const addresscImhpHS = await LIBERAPAYdAkEvVL.transferOwnership.call(addressz2ygRqZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYdAkEvVL.transfer.call(address03qjZM, uintaJBdodY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYPjqzxI = await LIBERAPAY.new({from: accounts[4]});
		const addressG7wHZnu = accounts[2]
		const addressUUWeEWn = accounts[1]
		const uintzMn4Kr = BigInt("1774")
		const addressfnZGl5p = accounts[0]
		const addressbAnaIW0 = accounts[4]
		const address0aLEtx = accounts[4]
		const uint256e24eneo = await LIBERAPAYPjqzxI.balanceOf.call(addressG7wHZnu, {from: accounts[3]});
		const boolhCtIkDM = await LIBERAPAYPjqzxI.unfreezeAccount.call(addressUUWeEWn, {from: accounts[4]});
		await LIBERAPAYPjqzxI.showLockState.call(addressfnZGl5p, uintzMn4Kr, {from: accounts[5]});
		const uint256yELFJvP = await LIBERAPAYPjqzxI.allowance.call(address0aLEtx, addressbAnaIW0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256e24eneo, BigInt("0"))
		await expect(LIBERAPAYPjqzxI.unfreezeAccount.call(addressUUWeEWn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYG9jZpAe = await LIBERAPAY.new({from: accounts[4]});
		const uintMZXQ4ag = BigInt("1374")
		const addressspshejr = accounts[2]
		const uintnwwVCQZ = BigInt("890")
		const uinttvokhe3 = BigInt("312")
		const addresskHFlikK = accounts[2]
		const addressbd8p6V = accounts[2]
		const uintPbi8dup = BigInt("996")
		const addressNL3P4S7 = accounts[1]
		const boolVFzLm3n = await LIBERAPAYG9jZpAe.approve.call(addressspshejr, uintMZXQ4ag, {from: accounts[5]});
		const boolw7nVy2 = await LIBERAPAYG9jZpAe.burn.call(uintnwwVCQZ, {from: accounts[4]});
		const boolgPslRvv = await LIBERAPAYG9jZpAe.transferFrom.call(addressbd8p6V, addresskHFlikK, uinttvokhe3, {from: accounts[0]});
		await LIBERAPAYG9jZpAe.whenNotPaused.call({from: accounts[2]});
		const boolRLaX4px = await LIBERAPAYG9jZpAe.increaseAllowance.call(addressNL3P4S7, uintPbi8dup, {from: accounts[0]});

		assert.equal(boolVFzLm3n, true)
		assert.equal(boolw7nVy2, true)
		await expect(LIBERAPAYG9jZpAe.transferFrom.call(addressbd8p6V, addresskHFlikK, uinttvokhe3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJkvv6C = await LIBERAPAY.new({from: accounts[3]});
		const uintnYZ4InT = BigInt("116")
		const addressWEJbxNh = accounts[3]
		const addressaHpo4oC = accounts[1]
		const addressCF3wJXi = accounts[1]
		const uintGv6k2K = BigInt("1441")
		const addressWsYkaUk = accounts[1]
		const addresspAT351h = accounts[3]
		await LIBERAPAYJkvv6C.f.call({from: accounts[4]});
		const boolsrGP8iR = await LIBERAPAYJkvv6C.transferFrom.call(addressaHpo4oC, addressWEJbxNh, uintnYZ4InT, {from: accounts[1]});
		const addressNJBi6HN = await LIBERAPAYJkvv6C.transferOwnership.call(addressCF3wJXi, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYJkvv6C.f.call({from: accounts[1]});
		const boolBbRjZyL = await LIBERAPAYJkvv6C.transferFrom.call(addresspAT351h, addressWsYkaUk, uintGv6k2K, {from: accounts[2]});

		await expect(LIBERAPAYJkvv6C.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFxTR3Rs = await LIBERAPAY.new({from: accounts[5]});
		const addressJI1PfDi = accounts[4]
		const addressUqcM21b = accounts[1]
		const uintbVMZaRg = BigInt("871")
		const addressSDIzNNq = accounts[2]
		const uintNFj7gPC = BigInt("587")
		const addressKWTU1sm = accounts[0]
		const boolj33EePs = await LIBERAPAYFxTR3Rs.freezeAccount.call(addressJI1PfDi, {from: accounts[5]});
		const addressHp8vqV9 = await LIBERAPAYFxTR3Rs.notFrozen.call(addressUqcM21b, {from: accounts[3]});
		const boolRJaoM6M = await LIBERAPAYFxTR3Rs.burnFrom.call(addressSDIzNNq, uintbVMZaRg, {from: accounts[4]});
		const boolddqBjrg = await LIBERAPAYFxTR3Rs.increaseAllowance.call(addressKWTU1sm, uintNFj7gPC, {from: accounts[2]});
		const uint256nc7EuZd = await LIBERAPAYFxTR3Rs.getNowTime.call({from: accounts[3]});

		assert.equal(boolj33EePs, true)
		await expect(LIBERAPAYFxTR3Rs.notFrozen.call(addressUqcM21b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYPjqzxI = await LIBERAPAY.new({from: accounts[4]});
		const addressNEpXViP = accounts[2]
		const addressDGVLPy = accounts[1]
		const uintgxOzIJl = BigInt("1771")
		const addresszCG8ak = accounts[0]
		const addressxGqeTA = accounts[4]
		const addressSDfncao = accounts[4]
		const uint256e24eneo = await LIBERAPAYPjqzxI.balanceOf.call(addressNEpXViP, {from: accounts[3]});
		const uint2562qEWwf = await LIBERAPAYPjqzxI.totalSupply.call({from: accounts[1]});
		const boolhCtIkDM = await LIBERAPAYPjqzxI.unfreezeAccount.call(addressDGVLPy, {from: accounts[4]});
		await LIBERAPAYPjqzxI.showLockState.call(addresszCG8ak, uintgxOzIJl, {from: accounts[5]});
		const uint256yELFJvP = await LIBERAPAYPjqzxI.allowance.call(addressSDfncao, addressxGqeTA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2562qEWwf, BigInt("3000000000000000000000000000"))
		assert.equal(uint256e24eneo, BigInt("0"))
		await expect(LIBERAPAYPjqzxI.unfreezeAccount.call(addressDGVLPy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFaYpFC = await LIBERAPAY.new({from: accounts[1]});
		const addressqU0lDp1 = accounts[1]
		const uintHIXeER = BigInt("1932")
		const addresssQL43R9 = accounts[1]
		const uintbPFCSJx = BigInt("330")
		const addresse9sPpA = accounts[4]
		const uintd9fJ4lx = BigInt("355")
		const addressdBzHbV = accounts[1]
		const addressg4qGPVM = accounts[2]
		const uint256QrY5cnq = await LIBERAPAYFaYpFC.currentBalanceOf.call(addressqU0lDp1, {from: accounts[3]});
		const bool02XZxF = await LIBERAPAYFaYpFC.approve.call(addresssQL43R9, uintHIXeER, {from: accounts[4]});
		const boolQg0Gxea = await LIBERAPAYFaYpFC.transfer.call(addresse9sPpA, uintbPFCSJx, {from: accounts[2]});
		await LIBERAPAYFaYpFC.pause.call({from: accounts[4]});
		const boolKddv3iq = await LIBERAPAYFaYpFC.transferFrom.call(addressg4qGPVM, addressdBzHbV, uintd9fJ4lx, {from: accounts[5]});

		assert.equal(bool02XZxF, true)
		assert.equal(uint256QrY5cnq, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYFaYpFC.transfer.call(addresse9sPpA, uintbPFCSJx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFxTR3Rs = await LIBERAPAY.new({from: accounts[5]});
		const uintQDDzac = BigInt("843")
		const addressPpup1d = accounts[2]
		const boolRJaoM6M = await LIBERAPAYFxTR3Rs.burnFrom.call(addressPpup1d, uintQDDzac, {from: accounts[4]});

		await expect(LIBERAPAYFxTR3Rs.burnFrom.call(addressPpup1d, uintQDDzac, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYPjqzxI = await LIBERAPAY.new({from: accounts[4]});
		const uintM4ujsPF = BigInt("762")
		const addressiSMp5Cx = accounts[0]
		const addressK3SmTMi = accounts[2]
		const addressEpuZnM2 = accounts[1]
		const uintZ23YUvw = BigInt("1774")
		const addressp9wEhVW = accounts[1]
		const addressLE5VNap = accounts[4]
		const addresspiXDzlg = accounts[4]
		const boolzHxgARw = await LIBERAPAYPjqzxI.decreaseAllowance.call(addressiSMp5Cx, uintM4ujsPF, {from: accounts[2]});
		const uint256e24eneo = await LIBERAPAYPjqzxI.balanceOf.call(addressK3SmTMi, {from: accounts[3]});
		await LIBERAPAYPjqzxI.whenPaused.call({from: accounts[1]});
		const boolhCtIkDM = await LIBERAPAYPjqzxI.unfreezeAccount.call(addressEpuZnM2, {from: accounts[4]});
		await LIBERAPAYPjqzxI.showLockState.call(addressp9wEhVW, uintZ23YUvw, {from: accounts[5]});
		const uint256yELFJvP = await LIBERAPAYPjqzxI.allowance.call(addresspiXDzlg, addressLE5VNap, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYPjqzxI.decreaseAllowance.call(addressiSMp5Cx, uintM4ujsPF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYPjqzxI = await LIBERAPAY.new({from: accounts[4]});
		const addressNg36Ixf = accounts[2]
		const uintFz8HCa8 = BigInt("1774")
		const addresskqQGj2 = accounts[0]
		const address58iBI2 = accounts[4]
		const addressCy1zXog = accounts[4]
		const uint256e24eneo = await LIBERAPAYPjqzxI.balanceOf.call(addressNg36Ixf, {from: accounts[3]});
		await LIBERAPAYPjqzxI.showLockState.call(addresskqQGj2, uintFz8HCa8, {from: accounts[5]});
		const uint256yELFJvP = await LIBERAPAYPjqzxI.allowance.call(addressCy1zXog, address58iBI2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256e24eneo, BigInt("0"))
		await expect(LIBERAPAYPjqzxI.showLockState.call(addresskqQGj2, uintFz8HCa8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYPjqzxI = await LIBERAPAY.new({from: accounts[4]});
		const addresswSCoMF = accounts[3]
		const addressMDnAHRO = accounts[2]
		const uintI5JsLvR = BigInt("1774")
		const addressqEYZmG = accounts[2]
		const addressgwaUtD7 = accounts[4]
		const uinto2VDY3q = BigInt("1774")
		const addressYOjGShI = accounts[0]
		const addressQvBm5W = accounts[4]
		const addressmJvUwF = accounts[5]
		const uint256WkQ0PaG = await LIBERAPAYPjqzxI.balanceOf.call(addresswSCoMF, {from: accounts[3]});
		const uint256e24eneo = await LIBERAPAYPjqzxI.balanceOf.call(addressMDnAHRO, {from: accounts[3]});
		const uint256lC2aTc = await LIBERAPAYPjqzxI.totalSupply.call({from: accounts[3]});
		const booliSAyIH4 = await LIBERAPAYPjqzxI.transferFrom.call(addressgwaUtD7, addressqEYZmG, uintI5JsLvR, {from: accounts[0]});
		await LIBERAPAYPjqzxI.showLockState.call(addressYOjGShI, uinto2VDY3q, {from: accounts[5]});
		const uint256yELFJvP = await LIBERAPAYPjqzxI.allowance.call(addressmJvUwF, addressQvBm5W, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256WkQ0PaG, BigInt("0"))
		assert.equal(uint256e24eneo, BigInt("0"))
		assert.equal(uint256lC2aTc, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYPjqzxI.transferFrom.call(addressgwaUtD7, addressqEYZmG, uintI5JsLvR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFaYpFC = await LIBERAPAY.new({from: accounts[1]});
		const addressX6yvYP = accounts[1]
		const uintPYUFtZ = BigInt("1855")
		const addressvGslaL = accounts[1]
		const uinteC1iczZ = BigInt("330")
		const addressuwX29Ij = accounts[4]
		await LIBERAPAYFaYpFC.pause.call({from: accounts[1]});
		const uint256QrY5cnq = await LIBERAPAYFaYpFC.currentBalanceOf.call(addressX6yvYP, {from: accounts[3]});
		const bool02XZxF = await LIBERAPAYFaYpFC.approve.call(addressvGslaL, uintPYUFtZ, {from: accounts[4]});
		const boolQg0Gxea = await LIBERAPAYFaYpFC.transfer.call(addressuwX29Ij, uinteC1iczZ, {from: accounts[2]});
		await LIBERAPAYFaYpFC.pause.call({from: accounts[4]});

		await expect(LIBERAPAYFaYpFC.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYEUP4ycz = await LIBERAPAY.new({from: accounts[1]});
		const uintqj1x2p4 = BigInt("235")
		const addresskzemD1G = accounts[2]
		const addressu4L3iL4 = accounts[3]
		const uintL1oWO2N = BigInt("1827")
		const addressqZk61LH = accounts[2]
		const uintdeJlOvd = BigInt("394")
		const addressfRRgjE6 = accounts[0]
		const boolE9C1ZGm = await LIBERAPAYEUP4ycz.increaseAllowance.call(addresskzemD1G, uintqj1x2p4, {from: accounts[4]});
		const addressj1Um2AM = await LIBERAPAYEUP4ycz.notFrozen.call(addressu4L3iL4, {from: accounts[1]});
		const boolQNm5OS = await LIBERAPAYEUP4ycz.increaseAllowance.call(addressqZk61LH, uintL1oWO2N, {from: accounts[2]});
		const boolMo2WMbg = await LIBERAPAYEUP4ycz.increaseAllowance.call(addressfRRgjE6, uintdeJlOvd, {from: accounts[3]});

		assert.equal(boolE9C1ZGm, true)
		await expect(LIBERAPAYEUP4ycz.notFrozen.call(addressu4L3iL4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYzXz5DEG = await LIBERAPAY.new({from: accounts[0]});
		const addressxv9SHxt = accounts[4]
		const uintoA8VPU = BigInt("1687")
		const addressN7QpGxm = accounts[0]
		const addresssOr2vPA = accounts[0]
		const uintYZvd32W = BigInt("204")
		const addressPgCQyzo = accounts[5]
		const uintsZINo0W = BigInt("792")
		const addressgsLRtr = accounts[4]
		const addressiBTkvMO = await LIBERAPAYzXz5DEG.upgradeTo.call(addressxv9SHxt, {from: accounts[0]});
		const uint256QpM2Ty4 = await LIBERAPAYzXz5DEG.getNowTime.call({from: accounts[2]});
		const boolffXXmjV = await LIBERAPAYzXz5DEG.transferFrom.call(addresssOr2vPA, addressN7QpGxm, uintoA8VPU, {from: accounts[0]});
		const boole2Bw7Dh = await LIBERAPAYzXz5DEG.acceptOwnership.call({from: accounts[0]});
		const boolfdntceE = await LIBERAPAYzXz5DEG.unlock.call(addressPgCQyzo, uintYZvd32W, {from: accounts[1]});
		await LIBERAPAYzXz5DEG.showLockState.call(addressgsLRtr, uintsZINo0W, {from: accounts[4]});

		assert.equal(uint256QpM2Ty4, BigInt("1630230976"))
		await expect(LIBERAPAYzXz5DEG.transferFrom.call(addresssOr2vPA, addressN7QpGxm, uintoA8VPU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFxTR3Rs = await LIBERAPAY.new({from: accounts[5]});
		const uintiyiRN16 = BigInt("454")
		const addressarur7R = accounts[4]
		const uintJp2gpXF = BigInt("843")
		const addressX2kMOYZ = accounts[2]
		const boolsOS3zqI = await LIBERAPAYFxTR3Rs.unlock.call(addressarur7R, uintiyiRN16, {from: accounts[5]});
		await LIBERAPAYFxTR3Rs.whenPaused.call({from: accounts[3]});
		await LIBERAPAYFxTR3Rs.whenPaused.call({from: accounts[1]});
		const boolRJaoM6M = await LIBERAPAYFxTR3Rs.burnFrom.call(addressX2kMOYZ, uintJp2gpXF, {from: accounts[4]});

		await expect(LIBERAPAYFxTR3Rs.unlock.call(addressarur7R, uintiyiRN16, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYPjqzxI = await LIBERAPAY.new({from: accounts[4]});
		const addressEP4JxVN = accounts[4]
		const addressdPTyhfb = accounts[1]
		const uint256e24eneo = await LIBERAPAYPjqzxI.balanceOf.call(addressEP4JxVN, {from: accounts[3]});
		const addressQM2XVs3 = await LIBERAPAYPjqzxI.transferOwnership.call(addressdPTyhfb, {from: accounts[4]});

		assert.equal(uint256e24eneo, BigInt("3000000000000000000000000000"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYTardcSu = await LIBERAPAY.new({from: accounts[4]});
		const uintv2MwCEY = BigInt("735")
		const addressxwN1d9R = "0x0000000000000000000000000000000000000001"
		const uintaFBnmyM = BigInt("155")
		const addressHjHiDlQ = accounts[1]
		const uintgEN2tNo = BigInt("572")
		const addressiZ9eib4 = accounts[1]
		const boolVjKEsTE = await LIBERAPAYTardcSu.mint.call(addressxwN1d9R, uintv2MwCEY, {from: accounts[4]});
		const boolQMvm016 = await LIBERAPAYTardcSu.transfer.call(addressHjHiDlQ, uintaFBnmyM, {from: accounts[2]});
		const boolFeEUXJo = await LIBERAPAYTardcSu.mint.call(addressiZ9eib4, uintgEN2tNo, {from: accounts[2]});

		await expect(LIBERAPAYTardcSu.mint.call(addressxwN1d9R, uintv2MwCEY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYPjqzxI = await LIBERAPAY.new({from: accounts[4]});
		const uintK2KXBtg = BigInt("238")
		const uintFLSjx1T = BigInt("1116")
		const addressGB35bml = accounts[4]
		const addressIMR10Jy = accounts[4]
		const boolvvR8GAL = await LIBERAPAYPjqzxI.lock.call(addressGB35bml, uintFLSjx1T, uintK2KXBtg, {from: accounts[4]});
		await LIBERAPAYPjqzxI.unpause.call({from: accounts[5]});
		const uint256e24eneo = await LIBERAPAYPjqzxI.balanceOf.call(addressIMR10Jy, {from: accounts[3]});

		assert.equal(boolvvR8GAL, true)
		await expect(LIBERAPAYPjqzxI.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcyH9Z5p = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLj3eYFC = BigInt("1858")
		const addressntw8SA3 = accounts[4]
		const uint2v9qat = BigInt("1439")
		const addressy6snLyg = accounts[0]
		await LIBERAPAYcyH9Z5p.showLockState.call(addressntw8SA3, uintLj3eYFC, {from: accounts[4]});
		await LIBERAPAYcyH9Z5p.onlyOwner.call({from: accounts[1]});
		const boolnlj2Px = await LIBERAPAYcyH9Z5p.burnFrom.call(addressy6snLyg, uint2v9qat, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYPjqzxI = await LIBERAPAY.new({from: accounts[4]});
		const uintMgvze4P = BigInt("364")
		const addressXk0xlTL = accounts[4]
		const uintFqspRo9 = BigInt("1743")
		const addressDiFbhTh = accounts[1]
		const addressNYOalNd = accounts[4]
		const addresszF62xWv = accounts[2]
		const boolE7NS2ji = await LIBERAPAYPjqzxI.distribute.call(addressXk0xlTL, uintMgvze4P, {from: accounts[4]});
		await LIBERAPAYPjqzxI.showLockState.call(addressDiFbhTh, uintFqspRo9, {from: accounts[5]});
		const uint256DSaYMj = await LIBERAPAYPjqzxI.allowance.call(addresszF62xWv, addressNYOalNd, {from: accounts[2]});

		assert.equal(boolE7NS2ji, true)
		await expect(LIBERAPAYPjqzxI.showLockState.call(addressDiFbhTh, uintFqspRo9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYdAkEvVL = await LIBERAPAY.new({from: accounts[2]});
		const uintV1jLwD9 = BigInt("1447")
		const addressNZ7dub2 = accounts[3]
		const uintJDVwjS6 = BigInt("1668")
		const addresso1CseI = accounts[3]
		const boolaU5Nai = await LIBERAPAYdAkEvVL.transfer.call(addressNZ7dub2, uintV1jLwD9, {from: accounts[2]});
		const boolnwRzIKb = await LIBERAPAYdAkEvVL.transfer.call(addresso1CseI, uintJDVwjS6, {from: accounts[0]});

		assert.equal(boolaU5Nai, true)
		await expect(LIBERAPAYdAkEvVL.transfer.call(addresso1CseI, uintJDVwjS6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})