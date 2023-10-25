const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYI58Mcil = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressClwdbaJ = accounts[0]
		const uinttvr3CDo = BigInt("104")
		const addressYTBkCzd = accounts[3]
		const uintMWTuFPb = BigInt("1284")
		const addressOQClD6V = await LIBERAPAYI58Mcil.notFrozen.call(addressClwdbaJ, {from: accounts[0]});
		const uint256dH5KMH = await LIBERAPAYI58Mcil.totalSupply.call({from: accounts[4]});
		const booleDuTlpk = await LIBERAPAYI58Mcil.distribute.call(addressYTBkCzd, uinttvr3CDo, {from: accounts[4]});
		const boolbfIHoQK = await LIBERAPAYI58Mcil.burn.call(uintMWTuFPb, {from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYiSW955K = await LIBERAPAY.new({from: accounts[1]});
		const uintlo1LzA4 = BigInt("333")
		const addressNMHqGhg = "0x0000000000000000000000000000000000000001"
		const uints6HTnNh = BigInt("669")
		const address8jYjbf = accounts[2]
		const uintD7hiWEM = BigInt("1014")
		const uintqM7RcjW = BigInt("270")
		const boolJ1clYaG = await LIBERAPAYiSW955K.approve.call(addressNMHqGhg, uintlo1LzA4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqb094Nf = await LIBERAPAYiSW955K.decreaseAllowance.call(address8jYjbf, uints6HTnNh, {from: accounts[1]});
//		const boolE2lrZwf = await LIBERAPAYiSW955K.burn.call(uintD7hiWEM, {from: accounts[0]});
//		const boolG742hpI = await LIBERAPAYiSW955K.burn.call(uintqM7RcjW, {from: accounts[0]});

		assert.equal(boolJ1clYaG, true)
		await expect(LIBERAPAYiSW955K.decreaseAllowance.call(address8jYjbf, uints6HTnNh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYANEAa6u = await LIBERAPAY.new({from: accounts[3]});
		const uintOJr60tz = BigInt("272")
		const uintvTNKlOJ = BigInt("466")
		const addressZenvd5C = accounts[3]
		const addressn2qXw0X = accounts[1]
		const uintiOzNTvT = BigInt("1537")
		const addressSmHt8YV = accounts[3]
//		const boolOjH40Mq = await LIBERAPAYANEAa6u.burn.call(uintOJr60tz, {from: accounts[2]});
//		const boolLudUXlu = await LIBERAPAYANEAa6u.transferFrom.call(addressn2qXw0X, addressZenvd5C, uintvTNKlOJ, {from: accounts[1]});
//		await LIBERAPAYANEAa6u.whenPaused.call({from: accounts[0]});
//		await LIBERAPAYANEAa6u.showLockState.call(addressSmHt8YV, uintiOzNTvT, {from: accounts[2]});
//		await LIBERAPAYANEAa6u.onlyNewOwner.call({from: accounts[0]});

		await expect(LIBERAPAYANEAa6u.burn.call(uintOJr60tz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrEpVrgQ = await LIBERAPAY.new({from: accounts[2]});
		const uintpu7pbO8 = BigInt("513")
		const addressMI0WPcq = accounts[0]
		const uintBK4Vsu = BigInt("49")
		const addressolXaGqw = accounts[3]
		const uintLemSu8u = BigInt("521")
		const addressDQZNRKN = accounts[4]
		const addresstkDkvmu = accounts[2]
		const uintOWS5lDD = BigInt("1793")
		const addresswAyPL8s = accounts[5]
		const boolzgW8xtW = await LIBERAPAYrEpVrgQ.approve.call(addressMI0WPcq, uintpu7pbO8, {from: accounts[1]});
//		const boolN2Vs5C = await LIBERAPAYrEpVrgQ.transfer.call(addressolXaGqw, uintBK4Vsu, {from: accounts[1]});
//		const boolNHUQDHD = await LIBERAPAYrEpVrgQ.transferFrom.call(addresstkDkvmu, addressDQZNRKN, uintLemSu8u, {from: accounts[3]});
//		await LIBERAPAYrEpVrgQ.pause.call({from: accounts[3]});
//		const boole0YbGns = await LIBERAPAYrEpVrgQ.decreaseAllowance.call(addresswAyPL8s, uintOWS5lDD, {from: accounts[2]});

		assert.equal(boolzgW8xtW, true)
		await expect(LIBERAPAYrEpVrgQ.transfer.call(addressolXaGqw, uintBK4Vsu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQwCrrEd = await LIBERAPAY.new({from: accounts[4]});
		const addressjflQWU = accounts[0]
		const addressjwBfolm = accounts[0]
		const addressrIRaSZx = accounts[0]
		const uint256SrEzzDa = await LIBERAPAYQwCrrEd.currentBalanceOf.call(addressjflQWU, {from: accounts[1]});
		const uint256G6CpegJ = await LIBERAPAYQwCrrEd.allowance.call(addressrIRaSZx, addressjwBfolm, {from: accounts[4]});

		assert.equal(uint256G6CpegJ, BigInt("0"))
		assert.equal(uint256SrEzzDa, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBbs4QvZ = await LIBERAPAY.new({from: accounts[4]});
		const addressYGofLrp = accounts[3]
		const addressQq6DTaR = accounts[3]
		const uint256K89Qi8R = await LIBERAPAYBbs4QvZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressIxSO3t1 = await LIBERAPAYBbs4QvZ.upgradeTo.call(addressYGofLrp, {from: accounts[2]});
//		const uint256ZAIb8gu = await LIBERAPAYBbs4QvZ.getNowTime.call({from: accounts[3]});
//		const addressdPq04C = await LIBERAPAYBbs4QvZ.transferOwnership.call(addressQq6DTaR, {from: accounts[0]});
//		await LIBERAPAYBbs4QvZ.f.call({from: accounts[1]});

		assert.equal(uint256K89Qi8R, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYBbs4QvZ.upgradeTo.call(addressYGofLrp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtUHxMxz = await LIBERAPAY.new({from: accounts[3]});
		const addressqUC7CJx = accounts[3]
		const addressCx9G1xn = accounts[4]
		const uintXLVVf1C = BigInt("1940")
		const addressApm60Vr = accounts[4]
		const uintecAEtAe = BigInt("1998")
		const addressuppMGF = accounts[4]
		const uint256EcGtgRH = await LIBERAPAYtUHxMxz.allowance.call(addressCx9G1xn, addressqUC7CJx, {from: accounts[4]});
//		await LIBERAPAYtUHxMxz.showLockState.call(addressApm60Vr, uintXLVVf1C, {from: accounts[4]});
//		const uint256S4HRpnz = await LIBERAPAYtUHxMxz.totalSupply.call({from: accounts[3]});
//		const boolt2HwQjo = await LIBERAPAYtUHxMxz.approve.call(addressuppMGF, uintecAEtAe, {from: accounts[0]});
//		await LIBERAPAYtUHxMxz.pause.call({from: accounts[3]});

		assert.equal(uint256EcGtgRH, BigInt("0"))
		await expect(LIBERAPAYtUHxMxz.showLockState.call(addressApm60Vr, uintXLVVf1C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYkuDVPfJ = await LIBERAPAY.new({from: accounts[2]});
		const addressOMBW9ok = accounts[3]
		const addressRA2eXQV = accounts[3]
		const uintVvLgmKw = BigInt("1564")
		const addressWLmVzUb = accounts[1]
//		await LIBERAPAYkuDVPfJ.f.call({from: accounts[1]});
//		const addresstMKQtv5 = await LIBERAPAYkuDVPfJ.notFrozen.call(addressOMBW9ok, {from: accounts[2]});
//		const uint256ZO0YuG = await LIBERAPAYkuDVPfJ.currentBalanceOf.call(addressRA2eXQV, {from: accounts[4]});
//		const boolCk97tlz = await LIBERAPAYkuDVPfJ.transfer.call(addressWLmVzUb, uintVvLgmKw, {from: accounts[0]});
//		await LIBERAPAYkuDVPfJ.unpause.call({from: accounts[1]});

		await expect(LIBERAPAYkuDVPfJ.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYBbs4QvZ = await LIBERAPAY.new({from: accounts[4]});
		const uintoZkZMEI = BigInt("1609")
		const addressaEgJZyH = accounts[2]
		const addressDMIL2a9 = accounts[3]
		const addressZ9h2aPp = accounts[3]
//		await LIBERAPAYBbs4QvZ.showLockState.call(addressaEgJZyH, uintoZkZMEI, {from: accounts[0]});
//		await LIBERAPAYBbs4QvZ.onlyNewOwner.call({from: accounts[3]});
//		const uint256K89Qi8R = await LIBERAPAYBbs4QvZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressIxSO3t1 = await LIBERAPAYBbs4QvZ.upgradeTo.call(addressDMIL2a9, {from: accounts[2]});
//		const uint256ZAIb8gu = await LIBERAPAYBbs4QvZ.getNowTime.call({from: accounts[3]});
//		const addressdPq04C = await LIBERAPAYBbs4QvZ.transferOwnership.call(addressZ9h2aPp, {from: accounts[0]});
//		await LIBERAPAYBbs4QvZ.f.call({from: accounts[1]});

		await expect(LIBERAPAYBbs4QvZ.showLockState.call(addressaEgJZyH, uintoZkZMEI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQwCrrEd = await LIBERAPAY.new({from: accounts[4]});
		const addresshCfmaNF = accounts[0]
		const addresssrsUW6C = accounts[1]
		const addresskf1TrjG = accounts[0]
		const uintOcSob2y = BigInt("985")
		const addressdmUsvqy = accounts[4]
		const uint256SrEzzDa = await LIBERAPAYQwCrrEd.currentBalanceOf.call(addresshCfmaNF, {from: accounts[1]});
		const uint256G6CpegJ = await LIBERAPAYQwCrrEd.allowance.call(addresskf1TrjG, addresssrsUW6C, {from: accounts[4]});
//		const boolf73Atk2 = await LIBERAPAYQwCrrEd.burnFrom.call(addressdmUsvqy, uintOcSob2y, {from: accounts[3]});

		assert.equal(uint256G6CpegJ, BigInt("0"))
		assert.equal(uint256SrEzzDa, BigInt("0"))
		await expect(LIBERAPAYQwCrrEd.burnFrom.call(addressdmUsvqy, uintOcSob2y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQwCrrEd = await LIBERAPAY.new({from: accounts[4]});
		const addressHzomqel = accounts[1]
		const addressXyK1qK = accounts[1]
		const addressQW52ZJe = accounts[0]
		const addressKnV0G0t = accounts[4]
		const uintuh4PSum = BigInt("985")
		const addressVVEyFk = accounts[4]
		const uint256SrEzzDa = await LIBERAPAYQwCrrEd.currentBalanceOf.call(addressHzomqel, {from: accounts[1]});
		const uint256G6CpegJ = await LIBERAPAYQwCrrEd.allowance.call(addressQW52ZJe, addressXyK1qK, {from: accounts[4]});
		const addressXgw4BYk = await LIBERAPAYQwCrrEd.upgradeTo.call(addressKnV0G0t, {from: accounts[4]});
//		const boolf73Atk2 = await LIBERAPAYQwCrrEd.burnFrom.call(addressVVEyFk, uintuh4PSum, {from: accounts[3]});
//		const uint256OyEAfb3 = await LIBERAPAYQwCrrEd.getNowTime.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256G6CpegJ, BigInt("0"))
		assert.equal(uint256SrEzzDa, BigInt("0"))
		await expect(LIBERAPAYQwCrrEd.burnFrom.call(addressVVEyFk, uintuh4PSum, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQwCrrEd = await LIBERAPAY.new({from: accounts[4]});
		const addressWmRqMUl = accounts[0]
		const addressoGNxYrT = accounts[0]
		const addressnPE9N29 = accounts[5]
		const addressO1Y1FnW = accounts[1]
		const uintJP9xpDB = BigInt("656")
		const addressDLd0vpC = "0x0000000000000000000000000000000000000001"
		const addresstrgi0pr = accounts[1]
		const uint256G6CpegJ = await LIBERAPAYQwCrrEd.allowance.call(addressoGNxYrT, addressWmRqMUl, {from: accounts[4]});
		const uint256mR6nMH8 = await LIBERAPAYQwCrrEd.allowance.call(addressO1Y1FnW, addressnPE9N29, {from: accounts[3]});
//		const boolQTT18La = await LIBERAPAYQwCrrEd.transferFrom.call(addresstrgi0pr, addressDLd0vpC, uintJP9xpDB, {from: accounts[0]});

		assert.equal(uint256G6CpegJ, BigInt("0"))
		assert.equal(uint256mR6nMH8, BigInt("0"))
		await expect(LIBERAPAYQwCrrEd.transferFrom.call(addresstrgi0pr, addressDLd0vpC, uintJP9xpDB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYThokJvN = await LIBERAPAY.new({from: accounts[4]});
		const uintQVBZeJA = BigInt("1750")
		const addressVhPI4XH = accounts[4]
		const uintjvzslDd = BigInt("717")
		const addressJRdvmNL = accounts[4]
		const uintfAh0jc = BigInt("1476")
		const addressRMnLOMR = accounts[2]
		const boolJUJzoe = await LIBERAPAYThokJvN.transfer.call(addressVhPI4XH, uintQVBZeJA, {from: accounts[4]});
//		await LIBERAPAYThokJvN.onlyNewOwner.call({from: accounts[3]});
//		await LIBERAPAYThokJvN.whenNotPaused.call({from: accounts[4]});
//		const boolJIEz37 = await LIBERAPAYThokJvN.distribute.call(addressJRdvmNL, uintjvzslDd, {from: accounts[5]});
//		const boolI1wgZwp = await LIBERAPAYThokJvN.distribute.call(addressRMnLOMR, uintfAh0jc, {from: accounts[1]});

		assert.equal(boolJUJzoe, true)
		await expect(LIBERAPAYThokJvN.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQwCrrEd = await LIBERAPAY.new({from: accounts[4]});
		const addressjMBKYWt = accounts[0]
		const addressVmYlw2M = accounts[4]
		const addressZZLLPFb = "0x0000000000000000000000000000000000000001"
		const addressj6ODRH = accounts[0]
		const addressqOGIbB0 = accounts[0]
		const uint256SrEzzDa = await LIBERAPAYQwCrrEd.currentBalanceOf.call(addressjMBKYWt, {from: accounts[1]});
		const uint256N92FJDc = await LIBERAPAYQwCrrEd.balanceOf.call(addressVmYlw2M, {from: accounts[1]});
//		await LIBERAPAYQwCrrEd.unpause.call({from: accounts[0]});
//		const addressZwDrjwB = await LIBERAPAYQwCrrEd.upgradeTo.call(addressZZLLPFb, {from: accounts[2]});
//		const uint256G6CpegJ = await LIBERAPAYQwCrrEd.allowance.call(addressqOGIbB0, addressj6ODRH, {from: accounts[4]});

		assert.equal(uint256N92FJDc, BigInt("3000000000000000000000000000"))
		assert.equal(uint256SrEzzDa, BigInt("0"))
		await expect(LIBERAPAYQwCrrEd.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtUHxMxz = await LIBERAPAY.new({from: accounts[3]});
		const address1fTwbo = accounts[3]
		const addressxDCtZGB = accounts[4]
		const uintAEdzv2F = BigInt("1696")
		const addresswrD8lOA = accounts[1]
		const addressiMXxZNX = accounts[0]
		const uint256EcGtgRH = await LIBERAPAYtUHxMxz.allowance.call(addressxDCtZGB, address1fTwbo, {from: accounts[4]});
//		await LIBERAPAYtUHxMxz.showLockState.call(addresswrD8lOA, uintAEdzv2F, {from: accounts[3]});
//		const boolrDaYCV8 = await LIBERAPAYtUHxMxz.freezeAccount.call(addressiMXxZNX, {from: accounts[3]});
//		await LIBERAPAYtUHxMxz.pause.call({from: accounts[3]});

		assert.equal(uint256EcGtgRH, BigInt("0"))
		await expect(LIBERAPAYtUHxMxz.showLockState.call(addresswrD8lOA, uintAEdzv2F, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYQwCrrEd = await LIBERAPAY.new({from: accounts[4]});
		const addressdVCjpyx = accounts[0]
		const addressx2fKAjz = accounts[4]
		const addressP1uI3XO = "0x0000000000000000000000000000000000000001"
		const addressHUyU7DW = accounts[0]
		const addressUf8dbSb = accounts[0]
		const uintljkk41 = BigInt("344")
		const uint256SrEzzDa = await LIBERAPAYQwCrrEd.currentBalanceOf.call(addressdVCjpyx, {from: accounts[1]});
		const uint256crISdSO = await LIBERAPAYQwCrrEd.getNowTime.call({from: accounts[0]});
		const uint256N92FJDc = await LIBERAPAYQwCrrEd.balanceOf.call(addressx2fKAjz, {from: accounts[1]});
//		await LIBERAPAYQwCrrEd.unpause.call({from: accounts[0]});
//		const addressZwDrjwB = await LIBERAPAYQwCrrEd.upgradeTo.call(addressP1uI3XO, {from: accounts[2]});
//		const uint256G6CpegJ = await LIBERAPAYQwCrrEd.allowance.call(addressUf8dbSb, addressHUyU7DW, {from: accounts[4]});
//		const booloQejPOL = await LIBERAPAYQwCrrEd.burn.call(uintljkk41, {from: accounts[2]});

		assert.equal(uint256N92FJDc, BigInt("3000000000000000000000000000"))
		assert.equal(uint256SrEzzDa, BigInt("0"))
		assert.equal(uint256crISdSO, BigInt("1630231455"))
		await expect(LIBERAPAYQwCrrEd.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYE2ILVbX = await LIBERAPAY.new({from: accounts[1]});
		const uintpINTfIi = BigInt("1537")
		const uintVGYbXFw = BigInt("1620")
		const addressKEeVq3z = accounts[1]
		const uintG3cFSGT = BigInt("1567")
		const addressqoPALX2 = accounts[0]
		const uintcKP0m2x = BigInt("614")
		const addressiEuPpsd = accounts[2]
		const boolVVUCOar = await LIBERAPAYE2ILVbX.lock.call(addressKEeVq3z, uintVGYbXFw, uintpINTfIi, {from: accounts[1]});
//		await LIBERAPAYE2ILVbX.whenPaused.call({from: accounts[0]});
//		const bools2AR2uB = await LIBERAPAYE2ILVbX.acceptOwnership.call({from: accounts[3]});
//		const boolXVFtkRf = await LIBERAPAYE2ILVbX.unlock.call(addressqoPALX2, uintG3cFSGT, {from: accounts[0]});
//		const boolKQcAZ0h = await LIBERAPAYE2ILVbX.decreaseAllowance.call(addressiEuPpsd, uintcKP0m2x, {from: accounts[1]});

		assert.equal(boolVVUCOar, true)
		await expect(LIBERAPAYE2ILVbX.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYrEpVrgQ = await LIBERAPAY.new({from: accounts[2]});
		const addressAy6DlRV = "0x0000000000000000000000000000000000000001"
		const uintXS33Kmr = BigInt("513")
		const addressxBNSErC = accounts[0]
		const uintGKFWyqQ = BigInt("521")
		const addressFOzWCC = accounts[4]
		const addressQsaYPRM = accounts[2]
		const uintA88nu9l = BigInt("1229")
		const uintAwfiiG1 = BigInt("490")
		const addressShYsdXV = accounts[3]
		const uintpbyZgcX = BigInt("1793")
		const addressgvKXKr1 = accounts[5]
		const uint256jbxvfy0 = await LIBERAPAYrEpVrgQ.totalSupply.call({from: accounts[2]});
		const uint256P3wwxp9 = await LIBERAPAYrEpVrgQ.currentBalanceOf.call(addressAy6DlRV, {from: accounts[2]});
		const boolzgW8xtW = await LIBERAPAYrEpVrgQ.approve.call(addressxBNSErC, uintXS33Kmr, {from: accounts[1]});
//		const boolNHUQDHD = await LIBERAPAYrEpVrgQ.transferFrom.call(addressQsaYPRM, addressFOzWCC, uintGKFWyqQ, {from: accounts[3]});
//		await LIBERAPAYrEpVrgQ.pause.call({from: accounts[3]});
//		const boolBxXMjW = await LIBERAPAYrEpVrgQ.lock.call(addressShYsdXV, uintAwfiiG1, uintA88nu9l, {from: accounts[3]});
//		const boole0YbGns = await LIBERAPAYrEpVrgQ.decreaseAllowance.call(addressgvKXKr1, uintpbyZgcX, {from: accounts[2]});

		assert.equal(boolzgW8xtW, true)
		assert.equal(uint256P3wwxp9, BigInt("0"))
		assert.equal(uint256jbxvfy0, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYrEpVrgQ.transferFrom.call(addressQsaYPRM, addressFOzWCC, uintGKFWyqQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtUHxMxz = await LIBERAPAY.new({from: accounts[3]});
		const addresskrKGCB3 = accounts[3]
		const addressRjAYOtq = accounts[5]
		const uinte5V25SZ = BigInt("1141")
		const addresspRwGZD = accounts[3]
		const uintJaCqp48 = BigInt("238")
		const addressKVeVS7J = accounts[4]
		const uintrxDfnR = BigInt("1886")
		const addressgvVgO0q = "0x0000000000000000000000000000000000000001"
		const uintdPWVelT = BigInt("1938")
		const addressHqb9px = accounts[4]
		const uintmd0YJk1 = BigInt("1075")
		const addresswRYh7A4 = accounts[1]
		const uint256EcGtgRH = await LIBERAPAYtUHxMxz.allowance.call(addressRjAYOtq, addresskrKGCB3, {from: accounts[4]});
		const boolL7OJpbZ = await LIBERAPAYtUHxMxz.increaseAllowance.call(addresspRwGZD, uinte5V25SZ, {from: accounts[0]});
//		const boolEiqaUmH = await LIBERAPAYtUHxMxz.distribute.call(addressKVeVS7J, uintJaCqp48, {from: accounts[1]});
//		const boolZEEVUES = await LIBERAPAYtUHxMxz.approve.call(addressgvVgO0q, uintrxDfnR, {from: accounts[1]});
//		await LIBERAPAYtUHxMxz.showLockState.call(addressHqb9px, uintdPWVelT, {from: accounts[4]});
//		const boolISvVpuY = await LIBERAPAYtUHxMxz.approve.call(addresswRYh7A4, uintmd0YJk1, {from: accounts[2]});
//		const uint256gQuurjP = await LIBERAPAYtUHxMxz.totalSupply.call({from: accounts[5]});

		assert.equal(boolL7OJpbZ, true)
		assert.equal(uint256EcGtgRH, BigInt("0"))
		await expect(LIBERAPAYtUHxMxz.distribute.call(addressKVeVS7J, uintJaCqp48, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtUHxMxz = await LIBERAPAY.new({from: accounts[3]});
		const uintkt86BmQ = BigInt("1957")
		const addressbyfWppu = accounts[4]
		const addressyRKc7uq = accounts[3]
//		await LIBERAPAYtUHxMxz.showLockState.call(addressbyfWppu, uintkt86BmQ, {from: accounts[4]});
//		const boolXAhCuBe = await LIBERAPAYtUHxMxz.unfreezeAccount.call(addressyRKc7uq, {from: accounts[3]});

		await expect(LIBERAPAYtUHxMxz.showLockState.call(addressbyfWppu, uintkt86BmQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYx31Lqhx = await LIBERAPAY.new({from: accounts[3]});
		const uintKW7VuCz = BigInt("1125")
		const addressnx2fiZk = accounts[4]
		const uintkhcX3K = BigInt("39")
		const addressBIUDDv2 = accounts[5]
//		const boolQb6u5MV = await LIBERAPAYx31Lqhx.unlock.call(addressnx2fiZk, uintKW7VuCz, {from: accounts[3]});
//		const boolrxiDv2j = await LIBERAPAYx31Lqhx.transfer.call(addressBIUDDv2, uintkhcX3K, {from: accounts[4]});

		await expect(LIBERAPAYx31Lqhx.unlock.call(addressnx2fiZk, uintKW7VuCz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYtUHxMxz = await LIBERAPAY.new({from: accounts[3]});
		const uint8NnDjL = BigInt("621")
		const addressUKAHGsA = accounts[1]
		const uintojQKtLZ = BigInt("1918")
		const addressJOOdcXa = accounts[4]
		const boolX9SYAo = await LIBERAPAYtUHxMxz.distribute.call(addressUKAHGsA, uint8NnDjL, {from: accounts[3]});
//		await LIBERAPAYtUHxMxz.showLockState.call(addressJOOdcXa, uintojQKtLZ, {from: accounts[4]});

		assert.equal(boolX9SYAo, true)
		await expect(LIBERAPAYtUHxMxz.showLockState.call(addressJOOdcXa, uintojQKtLZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYx31Lqhx = await LIBERAPAY.new({from: accounts[3]});
		const addressR3izPVt = accounts[0]
		const uintiCgnmD2 = BigInt("1740")
		const uint256PibaBvh = await LIBERAPAYx31Lqhx.balanceOf.call(addressR3izPVt, {from: accounts[1]});
		const boolm6UbsFX = await LIBERAPAYx31Lqhx.burn.call(uintiCgnmD2, {from: accounts[3]});

		assert.equal(boolm6UbsFX, true)
		assert.equal(uint256PibaBvh, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYx31Lqhx = await LIBERAPAY.new({from: accounts[3]});
		const addressXdBl8hW = accounts[0]
		const uintNoFBWu4 = BigInt("959")
		const addressA1N45yl = accounts[3]
		const uintsQCnDtH = BigInt("39")
		const addressXppLQul = accounts[5]
		const addressIY8O2L = await LIBERAPAYx31Lqhx.transferOwnership.call(addressXdBl8hW, {from: accounts[3]});
		const boolzoQT43P = await LIBERAPAYx31Lqhx.increaseAllowance.call(addressA1N45yl, uintNoFBWu4, {from: accounts[0]});
//		const boolrxiDv2j = await LIBERAPAYx31Lqhx.transfer.call(addressXppLQul, uintsQCnDtH, {from: accounts[4]});

		assert.equal(boolzoQT43P, true)
		await expect(LIBERAPAYx31Lqhx.transfer.call(addressXppLQul, uintsQCnDtH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYx31Lqhx = await LIBERAPAY.new({from: accounts[3]});
		const uintpcvNYQt = BigInt("1041")
		const addressCxHcLQw = accounts[4]
		const addresskH4BM2 = accounts[0]
		const uintv0Pke4 = BigInt("1132")
		const addresskL6qo0 = accounts[2]
		const addressP5ReEPI = accounts[0]
//		const boolt8pnLGU = await LIBERAPAYx31Lqhx.mint.call(addressCxHcLQw, uintpcvNYQt, {from: accounts[3]});
//		const uint256PibaBvh = await LIBERAPAYx31Lqhx.balanceOf.call(addresskH4BM2, {from: accounts[1]});
//		const boolOSbrsu1 = await LIBERAPAYx31Lqhx.decreaseAllowance.call(addresskL6qo0, uintv0Pke4, {from: accounts[3]});
//		const addressnafOnO = await LIBERAPAYx31Lqhx.upgradeTo.call(addressP5ReEPI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYx31Lqhx.mint.call(addressCxHcLQw, uintpcvNYQt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})