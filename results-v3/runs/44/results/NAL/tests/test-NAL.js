const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringZbb1knt = "L7SdeOMDFmOjlBYp9wk1OVcMI"
		const stringoKzbBjh = "Gf8udJmFIkJm1xF4bpvbF3UXMGrtbMzXBDRAjxvENCoHALkN9b78ltWByrGGZ3lFkM9IvmCcAbooLEpe9allFSH"
		const uintw55JA4e = BigInt("206")
		const NALuQfbX8y = await NAL.new(stringZbb1knt, stringoKzbBjh, uintw55JA4e, {from: accounts[3]});
		const addressClSJndh = accounts[0]
		const addressp2PQskM = accounts[3]
		const addressgdsWnw = accounts[1]
		const boolLIy0fE3 = await NALuQfbX8y.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressiloEZkE = await NALuQfbX8y.notFrozen.call(addressClSJndh, {from: accounts[3]});
		const uint256slFRUs0 = await NALuQfbX8y.allowance.call(addressgdsWnw, addressp2PQskM, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const addressaOUyCut = accounts[1]
		const addressRcVJbYQ = accounts[0]
		const uint9RPyBY = BigInt("209")
		const addressXcyAORT = accounts[5]
		const uint256kLUsK4L = await NALbbCK9AR.allowance.call(addressRcVJbYQ, addressaOUyCut, {from: "0x0000000000000000000000000000000000000001"});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressXcyAORT, uint9RPyBY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256kLUsK4L, BigInt("0"))
		await expect(NALbbCK9AR.unlock.call(addressXcyAORT, uint9RPyBY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALNZ8xWkv = await NAL.new({from: accounts[4]});
		const uintMKeZM2T = BigInt("1020")
		const addressCmgiMWN = "0x0000000000000000000000000000000000000001"
		const address5kuonY = accounts[4]
		const uintqbNhb7 = BigInt("820")
		const addressjO3h2wT = accounts[4]
		const addressv0qj2LU = "0x0000000000000000000000000000000000000001"
		const uinthUYycpD = BigInt("1838")
		const addressMJRp03W = accounts[2]
		const address4LPWV5 = accounts[2]
		const booleclDB0 = await NALNZ8xWkv.transferFrom.call(address5kuonY, addressCmgiMWN, uintMKeZM2T, {from: "0x0000000000000000000000000000000000000001"});
		const boolZ2rwoF9 = await NALNZ8xWkv.paused.call({from: accounts[0]});
		const booloQGNZh = await NALNZ8xWkv.transferFrom.call(addressv0qj2LU, addressjO3h2wT, uintqbNhb7, {from: accounts[2]});
		const boolRnMvP0T = await NALNZ8xWkv.decreaseAllowance.call(addressMJRp03W, uinthUYycpD, {from: accounts[0]});
		const boolmtX0JBo = await NALNZ8xWkv.isAdmin.call(address4LPWV5, {from: accounts[2]});

		await expect(NALNZ8xWkv.transferFrom.call(address5kuonY, addressCmgiMWN, uintMKeZM2T, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALJDfR1sZ = await NAL.new({from: accounts[0]});
		const addressIarPVwo = accounts[0]
		const addressrYeBfC4 = accounts[4]
		const uint8cBQMJVy = await NALJDfR1sZ.decimals.call({from: accounts[1]});
		const uint256qvcv1Lt = await NALJDfR1sZ.balanceOf.call(addressIarPVwo, {from: accounts[2]});
		const boolgWGQgKb = await NALJDfR1sZ.unfreezeAccount.call(addressrYeBfC4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256qvcv1Lt, BigInt("2000000000000000000000000000"))
		assert.equal(uint8cBQMJVy, BigInt("18"))
		await expect(NALJDfR1sZ.unfreezeAccount.call(addressrYeBfC4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALBvWe2rH = await NAL.new({from: accounts[3]});
		const uintLdMmtqG = BigInt("2022")
		const uintYkStPMz = BigInt("1034")
		const addressrTDYcFZ = "0x0000000000000000000000000000000000000001"
		const uintLJpwddd = BigInt("737")
		const addressvbGbooL = accounts[3]
		const addresscxdc64q = accounts[3]
		const boolscvo1C = await NALBvWe2rH.transferWithLock.call(addressrTDYcFZ, uintYkStPMz, uintLdMmtqG, {from: accounts[3]});
		await NALBvWe2rH.onlyAdmin.call({from: accounts[3]});
		const boolbyozKTR = await NALBvWe2rH.transferFrom.call(addresscxdc64q, addressvbGbooL, uintLJpwddd, {from: accounts[1]});

		assert.equal(boolscvo1C, true)
		await expect(NALBvWe2rH.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbRdGvB1 = await NAL.new({from: accounts[1]});
		const uintY1TLsh = BigInt("1796")
		const addressnSC868D = accounts[0]
		const uinthJXuzbh = BigInt("1853")
		const addressMxK6rk = accounts[4]
		const addressh4gtAlg = accounts[3]
		const uintHARymsK = BigInt("849")
		const uinte7VIWe = BigInt("1205")
		const addressjTFq0T3 = accounts[2]
		const boolxV7lTuJ = await NALbRdGvB1.approve.call(addressnSC868D, uintY1TLsh, {from: accounts[1]});
		const boolsv1i1C = await NALbRdGvB1.transfer.call(addressMxK6rk, uinthJXuzbh, {from: accounts[1]});
		const addresstkZYcK = await NALbRdGvB1.removeAdmin.call(addressh4gtAlg, {from: accounts[1]});
		const boolLkxOFIz = await NALbRdGvB1.transferWithLock.call(addressjTFq0T3, uinte7VIWe, uintHARymsK, {from: accounts[5]});

		assert.equal(boolsv1i1C, true)
		assert.equal(boolxV7lTuJ, true)
		await expect(NALbRdGvB1.removeAdmin.call(addressh4gtAlg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALF8f991a = await NAL.new({from: accounts[0]});
		const addressgthLGDf = accounts[5]
		const uintP2GMCDB = BigInt("429")
		const addressLu7hpyI = accounts[3]
		const uintZKAaXhi = BigInt("845")
		const addressX1kSW7N = accounts[4]
		const addressdSN30Q = "0x0000000000000000000000000000000000000001"
		const uintLySDXOh = BigInt("119")
		const addresshdz8cOT = accounts[3]
		const uint256iSEqbY = await NALF8f991a.totalSupply.call({from: accounts[3]});
		const address48XU3c = await NALF8f991a.notFrozen.call(addressgthLGDf, {from: accounts[0]});
		const booljsNROnY = await NALF8f991a.transfer.call(addressLu7hpyI, uintP2GMCDB, {from: accounts[1]});
		const boolWsqE8z = await NALF8f991a.decreaseAllowance.call(addressX1kSW7N, uintZKAaXhi, {from: accounts[4]});
		const uint256leYAnvy = await NALF8f991a.balanceOf.call(addressdSN30Q, {from: accounts[0]});
		const boollgBUD1e = await NALF8f991a.decreaseAllowance.call(addresshdz8cOT, uintLySDXOh, {from: accounts[3]});

		assert.equal(uint256iSEqbY, BigInt("2000000000000000000000000000"))
		await expect(NALF8f991a.notFrozen.call(addressgthLGDf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const uintmnmiCfL = BigInt("443")
		const addressJIIqgv = accounts[2]
		const addressXbrLTu2 = accounts[2]
		const addresslf1X3H = accounts[0]
		const uintC6CUK3K = BigInt("209")
		const addressZ2OdIMZ = accounts[5]
		const boolZBxXKAj = await NALbbCK9AR.decreaseAllowance.call(addressJIIqgv, uintmnmiCfL, {from: accounts[5]});
		const uint256kLUsK4L = await NALbbCK9AR.allowance.call(addresslf1X3H, addressXbrLTu2, {from: "0x0000000000000000000000000000000000000001"});
		const boolQy420su = await NALbbCK9AR.unlock.call(addressZ2OdIMZ, uintC6CUK3K, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALbbCK9AR.decreaseAllowance.call(addressJIIqgv, uintmnmiCfL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const addressWhcUrYs = accounts[2]
		const addressadLYnM1 = accounts[1]
		const addressH6udByE = accounts[0]
		const uintVQ3myWr = BigInt("209")
		const addresstVEHqIs = accounts[6]
		const uintubADCsj = BigInt("697")
		const addressMaKlZ5I = accounts[0]
		const boolZw4KiSX = await NALbbCK9AR.isOwner.call(addressWhcUrYs, {from: accounts[1]});
		const uint256kLUsK4L = await NALbbCK9AR.allowance.call(addressH6udByE, addressadLYnM1, {from: "0x0000000000000000000000000000000000000001"});
		const boolQy420su = await NALbbCK9AR.unlock.call(addresstVEHqIs, uintVQ3myWr, {from: "0x0000000000000000000000000000000000000001"});
		const boolL5rSWIp = await NALbbCK9AR.decreaseAllowance.call(addressMaKlZ5I, uintubADCsj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolZw4KiSX, true)
		assert.equal(uint256kLUsK4L, BigInt("0"))
		await expect(NALbbCK9AR.unlock.call(addresstVEHqIs, uintVQ3myWr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALJDfR1sZ = await NAL.new({from: accounts[0]});
		const addressscHEyJq = accounts[5]
		const addressQmy4G9y = accounts[0]
		const uintJvsFJx = BigInt("390")
		const addressN0cutHQ = accounts[2]
		const addressKNIOfLg = accounts[5]
		const uint8cBQMJVy = await NALJDfR1sZ.decimals.call({from: accounts[1]});
		const uint256jvUKBKG = await NALJDfR1sZ.allowance.call(addressQmy4G9y, addressscHEyJq, {from: accounts[0]});
		const addressJQ7eem1 = await NALJDfR1sZ.burnFrom.call(addressN0cutHQ, uintJvsFJx, {from: accounts[2]});
		const boolgWGQgKb = await NALJDfR1sZ.unfreezeAccount.call(addressKNIOfLg, {from: "0x0000000000000000000000000000000000000001"});
		await NALJDfR1sZ.whenNotPaused.call({from: accounts[2]});

		assert.equal(uint256jvUKBKG, BigInt("0"))
		assert.equal(uint8cBQMJVy, BigInt("18"))
		await expect(NALJDfR1sZ.burnFrom.call(addressN0cutHQ, uintJvsFJx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbRdGvB1 = await NAL.new({from: accounts[1]});
		const uintgWZaM8N = BigInt("1765")
		const addresskktofK9 = accounts[0]
		const addressdVBSE2i = accounts[0]
		const uintP29IRPb = BigInt("1851")
		const addressMuhocpd = accounts[4]
		const addressokMGHDS = accounts[3]
		const uintVCQTFC = BigInt("849")
		const uintCqHkqEY = BigInt("1205")
		const addressvETzIF9 = accounts[2]
		const boolxV7lTuJ = await NALbRdGvB1.approve.call(addresskktofK9, uintgWZaM8N, {from: accounts[1]});
		const addressBQ9ch5s = await NALbRdGvB1.addAdmin.call(addressdVBSE2i, {from: accounts[1]});
		const boolsv1i1C = await NALbRdGvB1.transfer.call(addressMuhocpd, uintP29IRPb, {from: accounts[1]});
		const addresstkZYcK = await NALbRdGvB1.removeAdmin.call(addressokMGHDS, {from: accounts[1]});
		const boolLkxOFIz = await NALbRdGvB1.transferWithLock.call(addressvETzIF9, uintCqHkqEY, uintVCQTFC, {from: accounts[5]});

		assert.equal(boolsv1i1C, true)
		assert.equal(boolxV7lTuJ, true)
		await expect(NALbRdGvB1.removeAdmin.call(addressokMGHDS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbRdGvB1 = await NAL.new({from: accounts[1]});
		const uintqKA4suO = BigInt("1796")
		const addresstIgQiHY = accounts[0]
		const uint8fC9mr = BigInt("65")
		const addressaWYOLyM = accounts[1]
		const addressIBsgGNK = accounts[4]
		const boolxV7lTuJ = await NALbRdGvB1.approve.call(addresstIgQiHY, uintqKA4suO, {from: accounts[1]});
		const boolQRtKsTC = await NALbRdGvB1.increaseAllowance.call(addressaWYOLyM, uint8fC9mr, {from: accounts[2]});
		const addresstkZYcK = await NALbRdGvB1.removeAdmin.call(addressIBsgGNK, {from: accounts[1]});

		assert.equal(boolQRtKsTC, true)
		assert.equal(boolxV7lTuJ, true)
		await expect(NALbRdGvB1.removeAdmin.call(addressIBsgGNK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbRdGvB1 = await NAL.new({from: accounts[1]});
		const uintrJLEwqM = BigInt("1796")
		const addressRkJaWt9 = accounts[0]
		const addresssOjsYn9 = "0x0000000000000000000000000000000000000001"
		const addressFYuQz3 = accounts[5]
		const boolxV7lTuJ = await NALbRdGvB1.approve.call(addressRkJaWt9, uintrJLEwqM, {from: accounts[1]});
		const addressY2vQ0DE = await NALbRdGvB1.upgradeTo.call(addresssOjsYn9, {from: accounts[1]});
		const addresstkZYcK = await NALbRdGvB1.removeAdmin.call(addressFYuQz3, {from: accounts[1]});

		assert.equal(boolxV7lTuJ, true)
		await expect(NALbRdGvB1.removeAdmin.call(addressFYuQz3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALBvWe2rH = await NAL.new({from: accounts[3]});
		const uinteBNGkEd = BigInt("737")
		const addressxFPA83N = accounts[5]
		const addressa5j5mzE = accounts[3]
		const uint256okujQew = await NALBvWe2rH.totalSupply.call({from: accounts[2]});
		await NALBvWe2rH.pause.call({from: accounts[3]});
		await NALBvWe2rH.unpause.call({from: accounts[0]});
		const boolbyozKTR = await NALBvWe2rH.transferFrom.call(addressa5j5mzE, addressxFPA83N, uinteBNGkEd, {from: accounts[1]});

		assert.equal(uint256okujQew, BigInt("2000000000000000000000000000"))
		await expect(NALBvWe2rH.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const uintth1RKK = BigInt("363")
		const addressCPmbgeF = accounts[3]
		const addressKQD8Jk = accounts[0]
		const uint256Onm3NGv = await NALbbCK9AR.burn.call(uintth1RKK, {from: accounts[2]});
		const stringxW4mREj = await NALbbCK9AR.symbol.call({from: accounts[0]});
		const uint256kLUsK4L = await NALbbCK9AR.allowance.call(addressKQD8Jk, addressCPmbgeF, {from: "0x0000000000000000000000000000000000000001"});
		const uint8cFArfFK = await NALbbCK9AR.decimals.call({from: accounts[0]});

		assert.equal(stringxW4mREj, "NAL")
		assert.equal(uint256kLUsK4L, BigInt("0"))
		assert.equal(uint8cFArfFK, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALvxgbRsL = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDc5Hjie = BigInt("533")
		const addressPiT9XR7 = accounts[2]
		const addressiEHiZOd = "0x0000000000000000000000000000000000000001"
		const addressPIj9nYw = accounts[5]
		const boolefjjN9N = await NALvxgbRsL.increaseAllowance.call(addressPiT9XR7, uintDc5Hjie, {from: accounts[2]});
		const addressPK5sllY = await NALvxgbRsL.upgradeTo.call(addressiEHiZOd, {from: accounts[1]});
		const boolwIvd7eA = await NALvxgbRsL.isOwner.call(addressPIj9nYw, {from: accounts[4]});
		const uint256rPsPa2F = await NALvxgbRsL.totalSupply.call({from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALbRdGvB1 = await NAL.new({from: accounts[1]});
		const addressQA8r9ZE = accounts[1]
		const uinttarJH9 = BigInt("1796")
		const addresshzMwtd = accounts[0]
		const uintVDGdwnp = BigInt("1851")
		const addressryW0F3C = accounts[4]
		const addresstC9D2q = accounts[2]
		const addresso5TyrQn = accounts[4]
		const uint6wa2BH = BigInt("849")
		const uintkqVbxPe = BigInt("1205")
		const addressYgs9DwR = accounts[3]
		const boolLTjO0wQ = await NALbRdGvB1.isOwner.call(addressQA8r9ZE, {from: accounts[3]});
		const boolxV7lTuJ = await NALbRdGvB1.approve.call(addresshzMwtd, uinttarJH9, {from: accounts[1]});
		const uint8ccxEEWc = await NALbRdGvB1.decimals.call({from: accounts[3]});
		const boolF9NIkue = await NALbRdGvB1.paused.call({from: accounts[3]});
		const boolsv1i1C = await NALbRdGvB1.transfer.call(addressryW0F3C, uintVDGdwnp, {from: accounts[1]});
		const uint256yDObaDq = await NALbRdGvB1.balanceOf.call(addresstC9D2q, {from: accounts[0]});
		const addresstkZYcK = await NALbRdGvB1.removeAdmin.call(addresso5TyrQn, {from: accounts[1]});
		const stringLbmaiqF = await NALbRdGvB1.name.call({from: accounts[0]});
		const boolLkxOFIz = await NALbRdGvB1.transferWithLock.call(addressYgs9DwR, uintkqVbxPe, uint6wa2BH, {from: accounts[5]});

		assert.equal(boolF9NIkue, false)
		assert.equal(boolLTjO0wQ, true)
		assert.equal(boolsv1i1C, true)
		assert.equal(boolxV7lTuJ, true)
		assert.equal(uint256yDObaDq, BigInt("0"))
		assert.equal(uint8ccxEEWc, BigInt("18"))
		await expect(NALbRdGvB1.removeAdmin.call(addresso5TyrQn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbRdGvB1 = await NAL.new({from: accounts[1]});
		const uintuC9zPD3 = BigInt("1796")
		const address6ZLWhR = accounts[0]
		const addressBo0nAIe = accounts[0]
		const uintU3oSk4Z = BigInt("1851")
		const addressmMIUgPc = accounts[4]
		const addresszKvx2X = accounts[2]
		const addressKxoHgZ = accounts[4]
		const uinty8z8rM1 = BigInt("849")
		const uinth6JIcYa = BigInt("1211")
		const addresslzRQ57g = accounts[2]
		const boolxV7lTuJ = await NALbRdGvB1.approve.call(address6ZLWhR, uintuC9zPD3, {from: accounts[1]});
		const boolVf3GCZi = await NALbRdGvB1.freezeAccount.call(addressBo0nAIe, {from: accounts[1]});
		const boolsv1i1C = await NALbRdGvB1.transfer.call(addressmMIUgPc, uintU3oSk4Z, {from: accounts[1]});
		const uint256yDObaDq = await NALbRdGvB1.balanceOf.call(addresszKvx2X, {from: accounts[0]});
		const addresstkZYcK = await NALbRdGvB1.removeAdmin.call(addressKxoHgZ, {from: accounts[1]});
		const boolLkxOFIz = await NALbRdGvB1.transferWithLock.call(addresslzRQ57g, uinth6JIcYa, uinty8z8rM1, {from: accounts[5]});

		assert.equal(boolVf3GCZi, true)
		assert.equal(boolsv1i1C, true)
		assert.equal(boolxV7lTuJ, true)
		assert.equal(uint256yDObaDq, BigInt("0"))
		await expect(NALbRdGvB1.removeAdmin.call(addressKxoHgZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const addresss53T6s = accounts[3]
		const addressNnuFcDR = accounts[2]
		const addressNhbZ8Yr = accounts[0]
		const uintMtpS1eu = BigInt("733")
		const addressOsUCj3I = accounts[4]
		const addressgqJAIUZ = accounts[0]
		const addressbx0140A = accounts[2]
		const uint256xEWDXXS = await NALbbCK9AR.balanceOf.call(addresss53T6s, {from: accounts[4]});
		await NALbbCK9AR.renounceAdmin.call({from: accounts[2]});
		const uint256kLUsK4L = await NALbbCK9AR.allowance.call(addressNhbZ8Yr, addressNnuFcDR, {from: "0x0000000000000000000000000000000000000001"});
		const boolsEllKY = await NALbbCK9AR.decreaseAllowance.call(addressOsUCj3I, uintMtpS1eu, {from: accounts[2]});
		const uint256u5vR0ZX = await NALbbCK9AR.allowance.call(addressbx0140A, addressgqJAIUZ, {from: accounts[1]});

		assert.equal(uint256xEWDXXS, BigInt("0"))
		await expect(NALbbCK9AR.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbRdGvB1 = await NAL.new({from: accounts[1]});
		const addressSAqAi8w = accounts[5]
		const stringVjqWTim = await NALbRdGvB1.name.call({from: accounts[0]});
		const addresstkZYcK = await NALbRdGvB1.removeAdmin.call(addressSAqAi8w, {from: accounts[1]});

		assert.equal(stringVjqWTim, "Personal Token")
		await expect(NALbRdGvB1.removeAdmin.call(addressSAqAi8w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALbbCK9AR = await NAL.new({from: accounts[2]});
		const uintczs3Y4z = BigInt("1041")
		const addressvV8bfne = accounts[5]
		const addressicB65rZ = accounts[4]
		const boolHipmYNN = await NALbbCK9AR.unlock.call(addressvV8bfne, uintczs3Y4z, {from: accounts[2]});
		await NALbbCK9AR.onlyAdmin.call({from: accounts[4]});
		const uint256xEWDXXS = await NALbbCK9AR.balanceOf.call(addressicB65rZ, {from: accounts[4]});

		await expect(NALbbCK9AR.unlock.call(addressvV8bfne, uintczs3Y4z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})