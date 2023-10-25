const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPXbvcBzB = await DSP.new({from: accounts[1]});
		const uintWtWGrDT = BigInt("870")
		const uintHxzkjIu = BigInt("1779")
		const addressuyMBfnN = accounts[1]
		const uintpegWqEN = BigInt("999")
		const uintiwxkQa = BigInt("1170")
		const addressm27qoPt = accounts[0]
//		const boolxUCg6iB = await DSPXbvcBzB.lock.call(addressuyMBfnN, uintHxzkjIu, uintWtWGrDT, {from: accounts[4]});
//		const boolgsfImq1 = await DSPXbvcBzB.paused.call({from: accounts[1]});
//		const boolzYxcBJY = await DSPXbvcBzB.lock.call(addressm27qoPt, uintiwxkQa, uintpegWqEN, {from: accounts[2]});
//		await DSPXbvcBzB.onlyPauser.call({from: accounts[4]});

		await expect(DSPXbvcBzB.lock.call(addressuyMBfnN, uintHxzkjIu, uintWtWGrDT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyDsNf6r = await DSP.new({from: accounts[5]});
		const uintlfGCx62 = BigInt("180")
		const addressi9abjut = accounts[0]
		const uintcMB5j7w = BigInt("1610")
		const addressQR9OCTg = accounts[4]
		const addressnfruTKC = accounts[1]
//		const boolyP2Fu7r = await DSPyDsNf6r.decreaseAllowance.call(addressi9abjut, uintlfGCx62, {from: accounts[5]});
//		const boolRz8JvKX = await DSPyDsNf6r.transferFrom.call(addressnfruTKC, addressQR9OCTg, uintcMB5j7w, {from: accounts[2]});

		await expect(DSPyDsNf6r.decreaseAllowance.call(addressi9abjut, uintlfGCx62, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringnDidQP3 = "0WtyJPTKwzeUhcAfiHA33Y3P3"
		const stringAkIh6CX = "6ZxWhq2bjbl13u22DsrVn1c2qZFVIZRKUn617HRoyWXHq"
		const uintrrz8b6l = BigInt("38")
		const DSPX3f7W89 = await DSP.new(stringnDidQP3, stringAkIh6CX, uintrrz8b6l, {from: accounts[2]});
		const uintctuEdTE = BigInt("1922")
		const addressksttYRS = accounts[0]
		const addressZtHqDM1 = accounts[3]
		const addressCuTuZbc = accounts[1]
		const boolgu9DVJ8 = await DSPX3f7W89.increaseAllowance.call(addressksttYRS, uintctuEdTE, {from: accounts[0]});
		const stringJE6kWME = await DSPX3f7W89.name.call({from: accounts[1]});
		const booluChNOeK = await DSPX3f7W89.acceptOwnership.call({from: accounts[5]});
		await DSPX3f7W89.pause.call({from: accounts[2]});
		const uint256oM0Ano0 = await DSPX3f7W89.allowance.call(addressCuTuZbc, addressZtHqDM1, {from: "0x0000000000000000000000000000000000000001"});
		const boolYsiy56t = await DSPX3f7W89.acceptOwnership.call({from: accounts[3]});
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uintGwntLEl = BigInt("24")
		const addressxZ9nK7g = accounts[1]
		const stringwHTwPae = await DSPmIiqw7z.symbol.call({from: accounts[1]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressxZ9nK7g, uintGwntLEl, {from: accounts[4]});

		assert.equal(stringwHTwPae, "DSP")
		await expect(DSPmIiqw7z.transfer.call(addressxZ9nK7g, uintGwntLEl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyDsNf6r = await DSP.new({from: accounts[5]});
		const uintK3brBy = BigInt("1610")
		const addressVPtuUcW = accounts[4]
		const addressjkBpDp = accounts[1]
//		const boolRz8JvKX = await DSPyDsNf6r.transferFrom.call(addressjkBpDp, addressVPtuUcW, uintK3brBy, {from: accounts[2]});

		await expect(DSPyDsNf6r.transferFrom.call(addressjkBpDp, addressVPtuUcW, uintK3brBy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uintdkFvAoB = BigInt("0")
		const addressv9JqcQa = accounts[1]
//		await DSPmIiqw7z.onlyPauser.call({from: accounts[1]});
//		const stringwHTwPae = await DSPmIiqw7z.symbol.call({from: accounts[1]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressv9JqcQa, uintdkFvAoB, {from: accounts[4]});

		await expect(DSPmIiqw7z.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const addressrFkP15 = accounts[0]
		const addressZXk3cY = accounts[4]
		const uintGFJugtM = BigInt("24")
		const addressBeN7XCf = accounts[1]
		const stringwHTwPae = await DSPmIiqw7z.symbol.call({from: accounts[1]});
		const uint256EqcQvAL = await DSPmIiqw7z.allowance.call(addressZXk3cY, addressrFkP15, {from: accounts[0]});
		const stringt8B4LZ6 = await DSPmIiqw7z.name.call({from: accounts[3]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressBeN7XCf, uintGFJugtM, {from: accounts[4]});

		assert.equal(stringt8B4LZ6, "DSP")
		assert.equal(stringwHTwPae, "DSP")
		assert.equal(uint256EqcQvAL, BigInt("0"))
		await expect(DSPmIiqw7z.transfer.call(addressBeN7XCf, uintGFJugtM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyDsNf6r = await DSP.new({from: accounts[5]});
		const addressulMtmQE = accounts[3]
		const uintpbawQy7 = BigInt("1590")
		const addressY0dlsC = accounts[4]
		const addressgV0jPI = accounts[1]
		const uint8kQyEGd0 = await DSPyDsNf6r.decimals.call({from: accounts[0]});
//		const booladc94c = await DSPyDsNf6r.acceptOwnership.call({from: accounts[0]});
//		const uint256V3Ejk1g = await DSPyDsNf6r.balanceOf.call(addressulMtmQE, {from: accounts[1]});
//		const boolRz8JvKX = await DSPyDsNf6r.transferFrom.call(addressgV0jPI, addressY0dlsC, uintpbawQy7, {from: accounts[2]});

		assert.equal(uint8kQyEGd0, BigInt("18"))
		await expect(DSPyDsNf6r.acceptOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uintnmIM5eC = BigInt("24")
		const addressqqrdr5o = accounts[1]
		const stringwHTwPae = await DSPmIiqw7z.symbol.call({from: accounts[1]});
//		await DSPmIiqw7z.renouncePauser.call({from: accounts[1]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressqqrdr5o, uintnmIM5eC, {from: accounts[4]});

		assert.equal(stringwHTwPae, "DSP")
		await expect(DSPmIiqw7z.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPokRBlnz = await DSP.new({from: accounts[4]});
		const addressRcvRMTJ = accounts[0]
		const uinte2esuhT = BigInt("1401")
		const addressKKSCMKU = accounts[0]
		const uintgyUiE2q = BigInt("1470")
		const addressHInh7S = accounts[3]
		const uint256ByxKJBA = await DSPokRBlnz.balanceOf.call(addressRcvRMTJ, {from: accounts[0]});
//		const boolBHTLy1j = await DSPokRBlnz.transfer.call(addressKKSCMKU, uinte2esuhT, {from: accounts[1]});
//		const bool9URiSs = await DSPokRBlnz.burnFrombyOwner.call(addressHInh7S, uintgyUiE2q, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPokRBlnz.onlyPauser.call({from: accounts[1]});
//		await DSPokRBlnz.whenPaused.call({from: accounts[1]});
//		await DSPokRBlnz.renouncePauser.call({from: accounts[1]});

		assert.equal(uint256ByxKJBA, BigInt("0"))
		await expect(DSPokRBlnz.transfer.call(addressKKSCMKU, uinte2esuhT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uintgg0i77a = BigInt("560")
		const addresseuyeeyE = accounts[2]
		const uintcfjcNfz = BigInt("24")
		const addressF1QErgl = accounts[1]
		const boolJ35A55M = await DSPmIiqw7z.approve.call(addresseuyeeyE, uintgg0i77a, {from: accounts[2]});
		const uint8KOofWNu = await DSPmIiqw7z.decimals.call({from: accounts[3]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressF1QErgl, uintcfjcNfz, {from: accounts[4]});

		assert.equal(boolJ35A55M, true)
		assert.equal(uint8KOofWNu, BigInt("18"))
		await expect(DSPmIiqw7z.transfer.call(addressF1QErgl, uintcfjcNfz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uintVMhDW3l = BigInt("24")
		const addressPdENUdQ = accounts[2]
		const uint256OCGi71Z = await DSPmIiqw7z.totalSupply.call({from: accounts[2]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressPdENUdQ, uintVMhDW3l, {from: accounts[4]});

		assert.equal(uint256OCGi71Z, BigInt("100000000000000000000000000000"))
		await expect(DSPmIiqw7z.transfer.call(addressPdENUdQ, uintVMhDW3l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const addressCX7IUbN = accounts[2]
		const uintXwI2nZU = BigInt("1807")
		const addressDqurrrZ = accounts[2]
		const uintqaBgEf5 = BigInt("547")
		const addressxpSQbMY = accounts[2]
		const uintJafwlu = BigInt("1618")
		const addressARsf5UE = accounts[5]
		const addressKZwPoiN = await DSPmIiqw7z.upgradeTo.call(addressCX7IUbN, {from: accounts[2]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressDqurrrZ, uintXwI2nZU, {from: accounts[4]});
//		const boolMQHj3J = await DSPmIiqw7z.unlock.call(addressxpSQbMY, uintqaBgEf5, {from: accounts[3]});
//		const boolPPYYwbE = await DSPmIiqw7z.burnFrombyOwner.call(addressARsf5UE, uintJafwlu, {from: accounts[0]});

		await expect(DSPmIiqw7z.transfer.call(addressDqurrrZ, uintXwI2nZU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uintB3mgwZp = BigInt("1841")
		const addressdH4qJE3 = accounts[1]
		const addressxEFsGE5 = accounts[3]
		const addressEzvolj = accounts[1]
//		await DSPmIiqw7z.f.call({from: accounts[1]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressdH4qJE3, uintB3mgwZp, {from: accounts[4]});
//		const uint256Bi6LIF7 = await DSPmIiqw7z.allowance.call(addressEzvolj, addressxEFsGE5, {from: accounts[1]});

		await expect(DSPmIiqw7z.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uintULqgojb = BigInt("1804")
		const addressj10vAIe = accounts[1]
		const boolZktUm4w = await DSPmIiqw7z.paused.call({from: accounts[0]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressj10vAIe, uintULqgojb, {from: accounts[4]});

		assert.equal(boolZktUm4w, false)
		await expect(DSPmIiqw7z.transfer.call(addressj10vAIe, uintULqgojb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPQy5oW3h = await DSP.new({from: accounts[1]});
		const addressFzEQbR8 = "0x0000000000000000000000000000000000000001"
		const uintVa87zOa = BigInt("1609")
		const uintqSnhL1Y = BigInt("395")
		const addressBOU9FvK = accounts[3]
		const uintQlopQYT = BigInt("967")
		const addresszSIhbfq = accounts[1]
		const boolyg3XQ1R = await DSPQy5oW3h.isPauser.call(addressFzEQbR8, {from: accounts[3]});
		const boolzNLRn8H = await DSPQy5oW3h.transferWithLock.call(addressBOU9FvK, uintqSnhL1Y, uintVa87zOa, {from: accounts[1]});
//		const boolGJTbb6T = await DSPQy5oW3h.transfer.call(addresszSIhbfq, uintQlopQYT, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPQy5oW3h.unpause.call({from: accounts[5]});
//		const boolXVX4DDn = await DSPQy5oW3h.acceptOwnership.call({from: accounts[2]});

		assert.equal(boolyg3XQ1R, false)
		assert.equal(boolzNLRn8H, true)
		await expect(DSPQy5oW3h.transfer.call(addresszSIhbfq, uintQlopQYT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uintMvquPEY = BigInt("535")
		const addressWVSxuuC = accounts[2]
		const uintPkYu6AZ = BigInt("1603")
		const addressbYS7iL2 = accounts[3]
		const uintUlsphdl = BigInt("1800")
		const addressYzTd8kp = accounts[1]
		const boolrRIQToe = await DSPmIiqw7z.increaseAllowance.call(addressWVSxuuC, uintMvquPEY, {from: accounts[0]});
//		const boolIXlWCBV = await DSPmIiqw7z.unlock.call(addressbYS7iL2, uintPkYu6AZ, {from: accounts[3]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressYzTd8kp, uintUlsphdl, {from: accounts[4]});

		assert.equal(boolrRIQToe, true)
		await expect(DSPmIiqw7z.unlock.call(addressbYS7iL2, uintPkYu6AZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPDDOBP88 = await DSP.new({from: accounts[1]});
		const addresshS4ilD9 = accounts[3]
		const addressRlBejxy = "0x0000000000000000000000000000000000000001"
		const uintUpc1CaV = BigInt("967")
		const addressPDA0Mv = accounts[5]
		const addressR7yONoq = accounts[3]
		const boolPSArsP6 = await DSPDDOBP88.isPauser.call(addresshS4ilD9, {from: accounts[2]});
//		const boolVKVgv7 = await DSPDDOBP88.unfreezeAccount.call(addressRlBejxy, {from: accounts[1]});
//		const boolNwll2Yn = await DSPDDOBP88.increaseAllowance.call(addressPDA0Mv, uintUpc1CaV, {from: accounts[5]});
//		const addressPGMlZ2 = await DSPDDOBP88.removePauser.call(addressR7yONoq, {from: accounts[2]});

		assert.equal(boolPSArsP6, false)
		await expect(DSPDDOBP88.unfreezeAccount.call(addressRlBejxy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uinty8TfKUH = BigInt("1272")
		const uintCjnxqEE = BigInt("1258")
		const addressXGB1krv = accounts[2]
		const uintl3yw3r = BigInt("1807")
		const addressVr3lHpD = accounts[2]
		const address90ogxc = accounts[5]
		const boolq57tEHK = await DSPmIiqw7z.lock.call(addressXGB1krv, uintCjnxqEE, uinty8TfKUH, {from: accounts[2]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressVr3lHpD, uintl3yw3r, {from: accounts[4]});
//		const booljBQvliu = await DSPmIiqw7z.unfreezeAccount.call(address90ogxc, {from: accounts[1]});

		assert.equal(boolq57tEHK, true)
		await expect(DSPmIiqw7z.transfer.call(addressVr3lHpD, uintl3yw3r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const addressVtNDy1L = accounts[0]
		const uint2kLNAT = BigInt("36")
		const addressW6LfE2A = accounts[1]
//		await DSPmIiqw7z.pause.call({from: accounts[2]});
//		const addressHPCi5Bh = await DSPmIiqw7z.transferOwnership.call(addressVtNDy1L, {from: accounts[0]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressW6LfE2A, uint2kLNAT, {from: accounts[4]});

		await expect(DSPmIiqw7z.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPyDsNf6r = await DSP.new({from: accounts[5]});
		const uintE2Nqcsr = BigInt("177")
		const addressagharfv = accounts[1]
		const uintbc5NEbB = BigInt("1620")
		const addressHAebmgX = accounts[4]
		const address3RgirD = accounts[1]
//		const boolqDXJ59O = await DSPyDsNf6r.burnFrombyOwner.call(addressagharfv, uintE2Nqcsr, {from: accounts[5]});
//		const boolRz8JvKX = await DSPyDsNf6r.transferFrom.call(address3RgirD, addressHAebmgX, uintbc5NEbB, {from: accounts[2]});

		await expect(DSPyDsNf6r.burnFrombyOwner.call(addressagharfv, uintE2Nqcsr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const addressVA8zI9 = accounts[1]
		const uintAEbgpBe = BigInt("24")
		const addresstSMinez = accounts[1]
//		const addresskS5SdEN = await DSPmIiqw7z.removePauser.call(addressVA8zI9, {from: accounts[2]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addresstSMinez, uintAEbgpBe, {from: accounts[4]});

		await expect(DSPmIiqw7z.removePauser.call(addressVA8zI9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPnXMsxz = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWkFSapV = BigInt("427")
		const addressnV4kfEe = accounts[0]
		await DSPnXMsxz.whenPaused.call({from: accounts[2]});
		const boolSFwgZGz = await DSPnXMsxz.unlock.call(addressnV4kfEe, uintWkFSapV, {from: accounts[3]});
		await DSPnXMsxz.pause.call({from: accounts[2]});
		const boolPpAU9E3 = await DSPnXMsxz.acceptOwnership.call({from: accounts[5]});
	});

	it('test for DSP', async () => {
		const DSPokRBlnz = await DSP.new({from: accounts[4]});
		const addressin0TU6 = accounts[1]
		const addressDP3t5RB = accounts[4]
		const uintjbVvAJk = BigInt("1409")
		const addressgDrNAzk = accounts[0]
		const uint256ByxKJBA = await DSPokRBlnz.balanceOf.call(addressin0TU6, {from: accounts[0]});
//		const addressqvtMJVu = await DSPokRBlnz.addPauser.call(addressDP3t5RB, {from: accounts[4]});
//		const boolBHTLy1j = await DSPokRBlnz.transfer.call(addressgDrNAzk, uintjbVvAJk, {from: accounts[1]});

		assert.equal(uint256ByxKJBA, BigInt("0"))
		await expect(DSPokRBlnz.addPauser.call(addressDP3t5RB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const uintIISjIYl = BigInt("1905")
		const addresszYBHxay = "0x0000000000000000000000000000000000000001"
		const addressFEe7Y7J = accounts[1]
		const uintRtDhI55 = BigInt("24")
		const addressU61nRGX = accounts[1]
//		const boolai0iRO7 = await DSPmIiqw7z.unlock.call(addresszYBHxay, uintIISjIYl, {from: accounts[2]});
//		const uint256qscYxo = await DSPmIiqw7z.balanceOf.call(addressFEe7Y7J, {from: accounts[4]});
//		await DSPmIiqw7z.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addressU61nRGX, uintRtDhI55, {from: accounts[4]});

		await expect(DSPmIiqw7z.unlock.call(addresszYBHxay, uintIISjIYl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmIiqw7z = await DSP.new({from: accounts[2]});
		const addressGo3gQ24 = accounts[1]
		const uintAqGRSL5 = BigInt("24")
		const addresstdeApIU = accounts[1]
		const addressTwcb4BT = await DSPmIiqw7z.transferOwnership.call(addressGo3gQ24, {from: accounts[2]});
		const uint8KwXpYG6 = await DSPmIiqw7z.decimals.call({from: accounts[1]});
//		const booliZP0axf = await DSPmIiqw7z.transfer.call(addresstdeApIU, uintAqGRSL5, {from: accounts[4]});

		assert.equal(uint8KwXpYG6, BigInt("18"))
		await expect(DSPmIiqw7z.transfer.call(addresstdeApIU, uintAqGRSL5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})