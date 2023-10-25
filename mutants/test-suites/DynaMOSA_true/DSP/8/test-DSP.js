const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPQdXch4e = await DSP.new({from: accounts[0]});
		const addressIrUeBr6 = accounts[0]
//		await DSPQdXch4e.whenPaused.call({from: accounts[3]});
//		await DSPQdXch4e.pause.call({from: accounts[2]});
//		const uint2567vmGOU = await DSPQdXch4e.balanceOf.call(addressIrUeBr6, {from: accounts[3]});
//		const boolBu5xhuH = await DSPQdXch4e.paused.call({from: accounts[1]});

		await expect(DSPQdXch4e.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringhLdbAcA = "52uOKntxbg2tRPleu8ivEW5EzL9k7SXt2BeTX8M"
		const stringFu3tgDg = "I"
		const uintDtH26AS = BigInt("88")
		const DSPdYvNauS = await DSP.new(stringhLdbAcA, stringFu3tgDg, uintDtH26AS, {from: accounts[5]});
		const uintjfPdYaS = BigInt("1734")
		const addressQ7muO9 = accounts[5]
		const addressLxLcx7X = accounts[5]
		const addresshf1omnH = "0x0000000000000000000000000000000000000001"
		await DSPdYvNauS.onlyNewOwner.call({from: accounts[3]});
		await DSPdYvNauS.whenNotPaused.call({from: accounts[5]});
		const boolNdZghvd = await DSPdYvNauS.unlock.call(addressQ7muO9, uintjfPdYaS, {from: accounts[4]});
		const addressMDHbakL = await DSPdYvNauS.removePauser.call(addressLxLcx7X, {from: accounts[2]});
		const addressQBVSN3i = await DSPdYvNauS.upgradeTo.call(addresshf1omnH, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPb44cTrx = await DSP.new({from: accounts[0]});
		const uintHuMvKj9 = BigInt("584")
		const addressCq1h7VV = accounts[0]
		const addressOS3TTwB = accounts[5]
		const uint8lLiIws0 = await DSPb44cTrx.decimals.call({from: accounts[0]});
//		const boolgTiqqY = await DSPb44cTrx.decreaseAllowance.call(addressCq1h7VV, uintHuMvKj9, {from: accounts[4]});
//		const uint8MpFbDs8 = await DSPb44cTrx.decimals.call({from: accounts[1]});
//		const addressSGVtDBr = await DSPb44cTrx.transferOwnership.call(addressOS3TTwB, {from: accounts[2]});
//		await DSPb44cTrx.renouncePauser.call({from: accounts[1]});

		assert.equal(uint8lLiIws0, BigInt("18"))
		await expect(DSPb44cTrx.decreaseAllowance.call(addressCq1h7VV, uintHuMvKj9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhCzJpkS = await DSP.new({from: accounts[3]});
		const uintIFREKfC = BigInt("645")
		const addressxgyY42H = accounts[1]
		const addressOqp5RGy = accounts[0]
		const addressjfMinpT = accounts[2]
		const addressfZkV2B6 = accounts[3]
		const addresstfAvUF = accounts[0]
		const stringn64oMir = await DSPhCzJpkS.symbol.call({from: accounts[5]});
//		const boolHzadeOZ = await DSPhCzJpkS.transferFrom.call(addressOqp5RGy, addressxgyY42H, uintIFREKfC, {from: accounts[0]});
//		const boolzA38pZX = await DSPhCzJpkS.freezeAccount.call(addressjfMinpT, {from: accounts[2]});
//		const addresseJ7CoRv = await DSPhCzJpkS.upgradeTo.call(addressfZkV2B6, {from: accounts[0]});
//		const addressoA3acQ = await DSPhCzJpkS.notFrozen.call(addresstfAvUF, {from: accounts[0]});
//		const boolaFxN66l = await DSPhCzJpkS.acceptOwnership.call({from: accounts[2]});

		assert.equal(stringn64oMir, "DSP")
		await expect(DSPhCzJpkS.transferFrom.call(addressOqp5RGy, addressxgyY42H, uintIFREKfC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const uintdSu9OQR = BigInt("2013")
		const addressHmDwSCs = "0x0000000000000000000000000000000000000001"
		const addressaufQ7ee = accounts[3]
//		await DSPahixBR3.pause.call({from: accounts[3]});
//		const boolmIaRZ5v = await DSPahixBR3.transfer.call(addressHmDwSCs, uintdSu9OQR, {from: accounts[2]});
//		const addressXAo9HJX = await DSPahixBR3.upgradeTo.call(addressaufQ7ee, {from: accounts[3]});

		await expect(DSPahixBR3.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbQt6Ceu = await DSP.new({from: accounts[4]});
		const addressYF1Xu2b = "0x0000000000000000000000000000000000000001"
		const addressX8OHBCX = accounts[1]
		const addressZJklb4H = await DSPbQt6Ceu.upgradeTo.call(addressYF1Xu2b, {from: accounts[4]});
//		const addressmXy7tDo = await DSPbQt6Ceu.removePauser.call(addressX8OHBCX, {from: accounts[0]});
//		await DSPbQt6Ceu.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPbQt6Ceu.removePauser.call(addressX8OHBCX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPZKGKLtH = await DSP.new({from: accounts[4]});
		const addressAfAamxA = accounts[3]
		const addressBY6GOb = "0x0000000000000000000000000000000000000001"
		const boolEedp0su = await DSPZKGKLtH.paused.call({from: accounts[2]});
//		const boolWZ5O0XK = await DSPZKGKLtH.acceptOwnership.call({from: accounts[0]});
//		const uint256d8noCvp = await DSPZKGKLtH.allowance.call(addressBY6GOb, addressAfAamxA, {from: accounts[4]});

		assert.equal(boolEedp0su, false)
		await expect(DSPZKGKLtH.acceptOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPSHfzrfj = await DSP.new({from: accounts[4]});
		const uinteX6J1tB = BigInt("1924")
		const addressUSgkBw = accounts[2]
		const uintodNe72 = BigInt("285")
		const addressf7OsBlO = accounts[3]
		const addressz9dPthL = accounts[1]
		const uint87CcwE = BigInt("629")
		const addressRBvWyI = accounts[4]
		const uintmPpBNA = BigInt("116")
		const addressOzI7vB8 = accounts[3]
		const boolAdZE0GX = await DSPSHfzrfj.increaseAllowance.call(addressUSgkBw, uinteX6J1tB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPtTpClL = await DSPSHfzrfj.transfer.call(addressf7OsBlO, uintodNe72, {from: accounts[0]});
//		const addresscP5bWzj = await DSPSHfzrfj.removePauser.call(addressz9dPthL, {from: accounts[2]});
//		const boolUPmNYQi = await DSPSHfzrfj.increaseAllowance.call(addressRBvWyI, uint87CcwE, {from: accounts[3]});
//		const boolz2MglFf = await DSPSHfzrfj.increaseAllowance.call(addressOzI7vB8, uintmPpBNA, {from: accounts[4]});

		assert.equal(boolAdZE0GX, true)
		await expect(DSPSHfzrfj.transfer.call(addressf7OsBlO, uintodNe72, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhCzJpkS = await DSP.new({from: accounts[3]});
		const uintyTOnQTM = BigInt("645")
		const addresswIL3Ukr = accounts[1]
		const addressdSIWIL7 = accounts[0]
		const addressPuwVtn8 = accounts[2]
		const addresssrTGoS = accounts[1]
		const addressCAanXwY = accounts[4]
		const addressgawoNvs = accounts[0]
		const uintEdnMmH = BigInt("1969")
		const uintUlWNWhb = BigInt("1357")
		const addressO6Szk96 = accounts[1]
		const uintb1VyeZ5 = BigInt("2001")
		const uintooumwQM = BigInt("802")
		const addressAhKQ3Xs = accounts[2]
		const stringn64oMir = await DSPhCzJpkS.symbol.call({from: accounts[5]});
		const stringHnh0MMd = await DSPhCzJpkS.name.call({from: accounts[4]});
//		const boolHzadeOZ = await DSPhCzJpkS.transferFrom.call(addressdSIWIL7, addresswIL3Ukr, uintyTOnQTM, {from: accounts[0]});
//		const boolzA38pZX = await DSPhCzJpkS.freezeAccount.call(addressPuwVtn8, {from: accounts[2]});
//		const booldFENMBf = await DSPhCzJpkS.isOwner.call(addresssrTGoS, {from: accounts[4]});
//		const addresseJ7CoRv = await DSPhCzJpkS.upgradeTo.call(addressCAanXwY, {from: accounts[0]});
//		const addressoA3acQ = await DSPhCzJpkS.notFrozen.call(addressgawoNvs, {from: accounts[0]});
//		const boolqOiaI4B = await DSPhCzJpkS.lock.call(addressO6Szk96, uintUlWNWhb, uintEdnMmH, {from: accounts[1]});
//		const boolaFxN66l = await DSPhCzJpkS.acceptOwnership.call({from: accounts[2]});
//		const boolPL7G3CF = await DSPhCzJpkS.lock.call(addressAhKQ3Xs, uintooumwQM, uintb1VyeZ5, {from: accounts[0]});

		assert.equal(stringHnh0MMd, "DSP")
		assert.equal(stringn64oMir, "DSP")
		await expect(DSPhCzJpkS.transferFrom.call(addressdSIWIL7, addresswIL3Ukr, uintyTOnQTM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const uintKbnzcV = BigInt("1872")
		const addressrOgHQRl = "0x0000000000000000000000000000000000000001"
		const uintcUSHPcw = BigInt("812")
		const uintJufQKgY = BigInt("367")
		const addressnRkybZ = accounts[1]
		const boolpzkUKE = await DSPahixBR3.approve.call(addressrOgHQRl, uintKbnzcV, {from: accounts[3]});
//		const boolTjxVMhr = await DSPahixBR3.transferWithLock.call(addressnRkybZ, uintJufQKgY, uintcUSHPcw, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPahixBR3.renouncePauser.call({from: accounts[2]});
//		await DSPahixBR3.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		await DSPahixBR3.pause.call({from: accounts[3]});

		assert.equal(boolpzkUKE, true)
		await expect(DSPahixBR3.transferWithLock.call(addressnRkybZ, uintJufQKgY, uintcUSHPcw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const addressg8sUBLV = accounts[1]
		const uintWYEzhpb = BigInt("2013")
		const addressHIcW9C = "0x0000000000000000000000000000000000000001"
		const addresscCcS5Ou = accounts[0]
		const uint256uIOJGn = await DSPahixBR3.balanceOf.call(addressg8sUBLV, {from: accounts[1]});
//		const boolmIaRZ5v = await DSPahixBR3.transfer.call(addressHIcW9C, uintWYEzhpb, {from: accounts[2]});
//		const boolgVD9Clb = await DSPahixBR3.isPauser.call(addresscCcS5Ou, {from: accounts[0]});
//		await DSPahixBR3.renouncePauser.call({from: accounts[3]});

		assert.equal(uint256uIOJGn, BigInt("100000000000000000000000000000"))
		await expect(DSPahixBR3.transfer.call(addressHIcW9C, uintWYEzhpb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const uintktE0Soa = BigInt("2013")
		const addresswvBA47f = "0x00000000000000000000000000000000000000-1"
//		const boolmIaRZ5v = await DSPahixBR3.transfer.call(addresswvBA47f, uintktE0Soa, {from: accounts[2]});

		await expect(DSPahixBR3.transfer.call(addresswvBA47f, uintktE0Soa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const uintQlib5VS = BigInt("2013")
		const addressfj6wZsg = "0x0000000000000000000000000000000000000000"
//		await DSPahixBR3.renouncePauser.call({from: accounts[1]});
//		const boolN1jEfk = await DSPahixBR3.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringmm6aBex = await DSPahixBR3.symbol.call({from: accounts[1]});
//		const boolmIaRZ5v = await DSPahixBR3.transfer.call(addressfj6wZsg, uintQlib5VS, {from: accounts[2]});

		await expect(DSPahixBR3.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const addressFyhAZ5 = accounts[2]
		const uintxcGERjJ = BigInt("1655")
		const addressJnPRAxs = accounts[5]
		const uintc7UKA1 = BigInt("1994")
		const addressgshr0r1 = "0x0000000000000000000000000000000000000001"
		const uintH5iMqU = BigInt("538")
		const addressZlx3ejl = accounts[2]
		const addressdPY7tHi = accounts[0]
		const uint256uIOJGn = await DSPahixBR3.balanceOf.call(addressFyhAZ5, {from: accounts[1]});
//		const boolrdBlb0v = await DSPahixBR3.unlock.call(addressJnPRAxs, uintxcGERjJ, {from: accounts[1]});
//		const boolmIaRZ5v = await DSPahixBR3.transfer.call(addressgshr0r1, uintc7UKA1, {from: accounts[2]});
//		const boolNxB1Z0F = await DSPahixBR3.unlock.call(addressZlx3ejl, uintH5iMqU, {from: accounts[1]});
//		const boolgVD9Clb = await DSPahixBR3.isPauser.call(addressdPY7tHi, {from: accounts[0]});

		assert.equal(uint256uIOJGn, BigInt("0"))
		await expect(DSPahixBR3.unlock.call(addressJnPRAxs, uintxcGERjJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const addresshxc57n = accounts[2]
		const uintJkMkYMu = BigInt("1655")
		const addresshnpPU5r = accounts[5]
		const uintU0xanl = BigInt("1960")
		const addressFH6eP2u = "0x0000000000000000000000000000000000000001"
		const uintSRCuIUJ = BigInt("538")
		const addressXl646Z2 = accounts[2]
		const addresssIT6lx4 = accounts[0]
		const uint256uIOJGn = await DSPahixBR3.balanceOf.call(addresshxc57n, {from: accounts[1]});
		const uint256S7q0Cmw = await DSPahixBR3.totalSupply.call({from: accounts[3]});
//		const boolrdBlb0v = await DSPahixBR3.unlock.call(addresshnpPU5r, uintJkMkYMu, {from: accounts[1]});
//		const boolmIaRZ5v = await DSPahixBR3.transfer.call(addressFH6eP2u, uintU0xanl, {from: accounts[2]});
//		const boolNxB1Z0F = await DSPahixBR3.unlock.call(addressXl646Z2, uintSRCuIUJ, {from: accounts[1]});
//		const boolgVD9Clb = await DSPahixBR3.isPauser.call(addresssIT6lx4, {from: accounts[0]});

		assert.equal(uint256S7q0Cmw, BigInt("100000000000000000000000000000"))
		assert.equal(uint256uIOJGn, BigInt("0"))
		await expect(DSPahixBR3.unlock.call(addresshnpPU5r, uintJkMkYMu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPOqBsPpF = await DSP.new({from: accounts[0]});
		const uintvaAYP4L = BigInt("356")
		const uintezFJdzD = BigInt("831")
		const addressbLZOH5w = accounts[5]
		const uintML23QER = BigInt("343")
		const addressEcg4SkC = "0x0000000000000000000000000000000000000001"
		const uintN7HsJKF = BigInt("784")
		const addressDQzNHRd = accounts[1]
		const stringePYD08h = await DSPOqBsPpF.symbol.call({from: accounts[0]});
//		await DSPOqBsPpF.f.call({from: accounts[5]});
//		await DSPOqBsPpF.unpause.call({from: accounts[0]});
//		const boolbwCc9ee = await DSPOqBsPpF.transferWithLock.call(addressbLZOH5w, uintezFJdzD, uintvaAYP4L, {from: accounts[3]});
//		await DSPOqBsPpF.renouncePauser.call({from: accounts[3]});
//		const boolTDfv4Sg = await DSPOqBsPpF.decreaseAllowance.call(addressEcg4SkC, uintML23QER, {from: accounts[0]});
//		const boolZxed12V = await DSPOqBsPpF.acceptOwnership.call({from: accounts[1]});
//		const booloT8O0bI = await DSPOqBsPpF.transfer.call(addressDQzNHRd, uintN7HsJKF, {from: accounts[3]});

		assert.equal(stringePYD08h, "DSP")
		await expect(DSPOqBsPpF.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const addresstEzSrIl = accounts[5]
		const addressSkpL8Cm = accounts[3]
		const uintWpSnfHh = BigInt("1987")
		const addressrJHF4Gc = "0x0000000000000000000000000000000000000001"
		const uint256pB5sPNm = await DSPahixBR3.allowance.call(addressSkpL8Cm, addresstEzSrIl, {from: accounts[2]});
//		const boolmIaRZ5v = await DSPahixBR3.transfer.call(addressrJHF4Gc, uintWpSnfHh, {from: accounts[2]});

		assert.equal(uint256pB5sPNm, BigInt("0"))
		await expect(DSPahixBR3.transfer.call(addressrJHF4Gc, uintWpSnfHh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPnFDlFWb = await DSP.new({from: accounts[4]});
		const uintZS5r05B = BigInt("1957")
		const address3Alu1e = accounts[2]
		const uintJDLsw2d = BigInt("996")
		const addressjtz1v9M = accounts[2]
		const bool6UXIMu = await DSPnFDlFWb.transfer.call(address3Alu1e, uintZS5r05B, {from: accounts[4]});
//		const boolnYz9f9r = await DSPnFDlFWb.transfer.call(addressjtz1v9M, uintJDLsw2d, {from: accounts[3]});
//		await DSPnFDlFWb.renouncePauser.call({from: accounts[0]});

		assert.equal(bool6UXIMu, true)
		await expect(DSPnFDlFWb.transfer.call(addressjtz1v9M, uintJDLsw2d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPxIlFC4l = await DSP.new({from: accounts[1]});
		const uintVrAXa6d = BigInt("386")
		const addressqRnXkCy = accounts[4]
		const addressl4PkzvU = accounts[3]
		const addressUKDQcCf = accounts[2]
		const addressmfTrCJd = accounts[2]
		const addresso8jWj5D = accounts[3]
		const addressE6a8OC = accounts[1]
		const boolReDhXqW = await DSPxIlFC4l.increaseAllowance.call(addressqRnXkCy, uintVrAXa6d, {from: accounts[3]});
		const boolimvtaZf = await DSPxIlFC4l.isPauser.call(addressl4PkzvU, {from: accounts[1]});
		const uint256h7YmaI8 = await DSPxIlFC4l.balanceOf.call(addressUKDQcCf, {from: accounts[5]});
		const addressjplfj41 = await DSPxIlFC4l.transferOwnership.call(addressmfTrCJd, {from: accounts[1]});
//		const addressVKgXgaw = await DSPxIlFC4l.upgradeTo.call(addresso8jWj5D, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qrnSUsM = await DSPxIlFC4l.balanceOf.call(addressE6a8OC, {from: accounts[2]});

		assert.equal(boolReDhXqW, true)
		assert.equal(boolimvtaZf, false)
		assert.equal(uint256h7YmaI8, BigInt("0"))
		await expect(DSPxIlFC4l.upgradeTo.call(addresso8jWj5D, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const addresscQzhNZ3 = accounts[5]
		const uintl3xIcrb = BigInt("712")
		const addresszn4yJKi = accounts[3]
		const addresscsXodKm = accounts[5]
		const boolyDKcTHl = await DSPahixBR3.paused.call({from: accounts[1]});
		const address5feiKc = await DSPahixBR3.addPauser.call(addresscQzhNZ3, {from: accounts[1]});
//		const boold4pjO3B = await DSPahixBR3.transferFrom.call(addresscsXodKm, addresszn4yJKi, uintl3xIcrb, {from: accounts[3]});

		assert.equal(boolyDKcTHl, false)
		await expect(DSPahixBR3.transferFrom.call(addresscsXodKm, addresszn4yJKi, uintl3xIcrb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const uint5SO9yj = BigInt("502")
		const uintbSqFS6M = BigInt("1513")
		const addressEX9YOpu = accounts[4]
		const addresst57ij4P = accounts[6]
		const uinthpFt6wj = BigInt("712")
		const addressy0Rkzhv = accounts[3]
		const addressvvJA0UZ = accounts[5]
		const boolyDKcTHl = await DSPahixBR3.paused.call({from: accounts[1]});
//		const boolCn8SgX = await DSPahixBR3.lock.call(addressEX9YOpu, uintbSqFS6M, uint5SO9yj, {from: accounts[1]});
//		const address5feiKc = await DSPahixBR3.addPauser.call(addresst57ij4P, {from: accounts[1]});
//		const boold4pjO3B = await DSPahixBR3.transferFrom.call(addressvvJA0UZ, addressy0Rkzhv, uinthpFt6wj, {from: accounts[3]});

		assert.equal(boolyDKcTHl, false)
		await expect(DSPahixBR3.lock.call(addressEX9YOpu, uintbSqFS6M, uint5SO9yj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPLixBHu4 = await DSP.new({from: accounts[2]});
		const addressAO5Nb44 = accounts[2]
		const uintEEpbgIT = BigInt("939")
		const uintv3PgWEj = BigInt("544")
		const addressNgzJqrO = accounts[0]
		const booluwuwAvF = await DSPLixBHu4.isOwner.call(addressAO5Nb44, {from: accounts[1]});
		const stringd80CeLw = await DSPLixBHu4.name.call({from: accounts[4]});
//		const boolBrVOIF = await DSPLixBHu4.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolHsOl8Oz = await DSPLixBHu4.transferWithLock.call(addressNgzJqrO, uintv3PgWEj, uintEEpbgIT, {from: accounts[2]});

		assert.equal(booluwuwAvF, true)
		assert.equal(stringd80CeLw, "DSP")
		await expect(DSPLixBHu4.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const uintuk4z6Y = BigInt("964")
		const addresssGATDkW = accounts[2]
		const uinth7AX1N = BigInt("1655")
		const addressmKC9m20 = accounts[5]
		const uintJ9HVMuD = BigInt("1994")
		const addresswpOudb = "0x0000000000000000000000000000000000000002"
		const uintfzP3dra = BigInt("538")
		const addressqh7ro4e = accounts[2]
		const addresscvGOBnq = accounts[0]
//		const boolwzmtxh = await DSPahixBR3.burnFrombyOwner.call(addresssGATDkW, uintuk4z6Y, {from: accounts[1]});
//		const boolrdBlb0v = await DSPahixBR3.unlock.call(addressmKC9m20, uinth7AX1N, {from: accounts[1]});
//		const boolmIaRZ5v = await DSPahixBR3.transfer.call(addresswpOudb, uintJ9HVMuD, {from: accounts[2]});
//		const boolNxB1Z0F = await DSPahixBR3.unlock.call(addressqh7ro4e, uintfzP3dra, {from: accounts[1]});
//		const boolgVD9Clb = await DSPahixBR3.isPauser.call(addresscvGOBnq, {from: accounts[0]});

		await expect(DSPahixBR3.burnFrombyOwner.call(addresssGATDkW, uintuk4z6Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPwqy24z1 = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressegzIblU = accounts[3]
		const uinteCbKE96 = BigInt("684")
		const addresstVGyGEZ = accounts[1]
		const addresslSHJTj = accounts[2]
		const uintOARi2iX = BigInt("110")
		const uintVGxW3Fj = BigInt("1753")
		const addressqZIKCQ7 = "0x0000000000000000000000000000000000000001"
		const addressjENmGu = await DSPwqy24z1.notFrozen.call(addressegzIblU, {from: accounts[5]});
		await DSPwqy24z1.onlyOwner.call({from: accounts[2]});
		const booloy80zIs = await DSPwqy24z1.mint.call(addresstVGyGEZ, uinteCbKE96, {from: accounts[3]});
		const uint256itvoPfO = await DSPwqy24z1.balanceOf.call(addresslSHJTj, {from: accounts[5]});
		const boolSQqOe7K = await DSPwqy24z1.transferWithLock.call(addressqZIKCQ7, uintVGxW3Fj, uintOARi2iX, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPFzje4ov = await DSP.new({from: accounts[4]});
		const uintCwfaihB = BigInt("22")
		const uintuwnhMj = BigInt("1855")
		const addresshhKi2Px = "0x0000000000000000000000000000000000000001"
		const addressbaPrEQr = accounts[3]
		const addressFBLkjg = accounts[1]
		const boolFajfdr = await DSPFzje4ov.transferWithLock.call(addresshhKi2Px, uintuwnhMj, uintCwfaihB, {from: accounts[4]});
		const boolRxHqUJC = await DSPFzje4ov.isPauser.call(addressbaPrEQr, {from: accounts[4]});
		const booldUzHEap = await DSPFzje4ov.isPauser.call(addressFBLkjg, {from: accounts[0]});
//		await DSPFzje4ov.unpause.call({from: accounts[1]});

		assert.equal(boolFajfdr, true)
		assert.equal(boolRxHqUJC, false)
		assert.equal(booldUzHEap, false)
		await expect(DSPFzje4ov.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPahixBR3 = await DSP.new({from: accounts[1]});
		const uintRR5NgJ4 = BigInt("2013")
		const addressx03qMeI = "0x0000000000000000000000000000000000000000"
//		await DSPahixBR3.pause.call({from: accounts[1]});
//		const boolmIaRZ5v = await DSPahixBR3.transfer.call(addressx03qMeI, uintRR5NgJ4, {from: accounts[2]});

		await expect(DSPahixBR3.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})