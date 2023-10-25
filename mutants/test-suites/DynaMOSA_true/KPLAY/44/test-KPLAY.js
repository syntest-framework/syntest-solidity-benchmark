const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYQUqIJtC = await KPLAY.new({from: accounts[2]});
		const uintebXP5lM = BigInt("1964")
		const addressUG6wkEV = accounts[0]
		const uintAMjs6Ux = BigInt("1338")
		const addressj7BQG3 = "0x0000000000000000000000000000000000000001"
		const uintLC14ogO = BigInt("380")
		const uintyvDvX4v = BigInt("1694")
		const addressJH6JTCi = accounts[4]
//		await KPLAYQUqIJtC.whenNotPaused.call({from: accounts[2]});
//		const boolA8sz1gr = await KPLAYQUqIJtC.approve.call(addressUG6wkEV, uintebXP5lM, {from: accounts[2]});
//		const boolG14fHjn = await KPLAYQUqIJtC.mint.call(addressj7BQG3, uintAMjs6Ux, {from: accounts[5]});
//		const addressgW6JdWJ = await KPLAYQUqIJtC.lock.call(addressJH6JTCi, uintyvDvX4v, uintLC14ogO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYQUqIJtC.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVrYhBRt = await KPLAY.new({from: accounts[5]});
		const uintCkJJzeI = BigInt("860")
		const addressSfYcwbN = accounts[0]
		const addressJL67Q6W = accounts[1]
		const uintWOwfwAa = BigInt("694")
		const addressmn4OVVr = accounts[3]
		const uintXx9WE5E = BigInt("637")
		const uintXdVBvb = BigInt("1097")
		const addressVZxvUNt = accounts[3]
		const addressjE1GVAK = accounts[0]
		const addressqX2VRQm = accounts[2]
		const uintFNMtFDj = BigInt("2021")
		const addressagXQWO3 = accounts[4]
//		const boolvPBBTgp = await KPLAYVrYhBRt.transferFrom.call(addressJL67Q6W, addressSfYcwbN, uintCkJJzeI, {from: accounts[5]});
//		const boolk2cY70B = await KPLAYVrYhBRt.mint.call(addressmn4OVVr, uintWOwfwAa, {from: accounts[4]});
//		const uint256UBLwFjv = await KPLAYVrYhBRt.afterTime.call(uintXx9WE5E, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBO4csV = await KPLAYVrYhBRt.transfer.call(addressVZxvUNt, uintXdVBvb, {from: accounts[1]});
//		const uint256qCsGKKP = await KPLAYVrYhBRt.allowance.call(addressqX2VRQm, addressjE1GVAK, {from: accounts[2]});
//		const boolTMpekXN = await KPLAYVrYhBRt.mint.call(addressagXQWO3, uintFNMtFDj, {from: accounts[1]});

		await expect(KPLAYVrYhBRt.transferFrom.call(addressJL67Q6W, addressSfYcwbN, uintCkJJzeI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYlCEDKHf = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintD3E1RYo = BigInt("264")
		const addresslCaPbRX = accounts[4]
		const addressMQy96pj = accounts[0]
		const uintkwylMJ0 = BigInt("1632")
		const uintzyU7AI2 = BigInt("1815")
		const addressHS2stLd = accounts[3]
		const boolWU4cCyh = await KPLAYlCEDKHf.approve.call(addresslCaPbRX, uintD3E1RYo, {from: accounts[0]});
		const addressNEqzNFg = await KPLAYlCEDKHf.freeze.call(addressMQy96pj, {from: accounts[2]});
		const bool60hdg4 = await KPLAYlCEDKHf.transferWithLock.call(addressHS2stLd, uintzyU7AI2, uintkwylMJ0, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for KPLAY', async () => {
		const KPLAYArkHVsl = await KPLAY.new({from: accounts[4]});
		const uintprwdnkC = BigInt("529")
		const addressASzBvg7 = accounts[0]
		const uintcSwfAZL = BigInt("1284")
		const uintCJDopSd = BigInt("640")
		const addressXn0HXIJ = accounts[2]
		const addressjBWgcUz = accounts[1]
		const uintRBjYIg7 = BigInt("890")
		const addresszSB2Kou = accounts[0]
		const boolfZP8gqB = await KPLAYArkHVsl.increaseAllowance.call(addressASzBvg7, uintprwdnkC, {from: accounts[2]});
//		await KPLAYArkHVsl.unpause.call({from: accounts[3]});
//		const addressGBaJp8S = await KPLAYArkHVsl.lock.call(addressXn0HXIJ, uintCJDopSd, uintcSwfAZL, {from: accounts[3]});
//		const uint256Q5WOqfo = await KPLAYArkHVsl.balanceOf.call(addressjBWgcUz, {from: accounts[2]});
//		const boolqqjCnvD = await KPLAYArkHVsl.transfer.call(addresszSB2Kou, uintRBjYIg7, {from: accounts[1]});

		assert.equal(boolfZP8gqB, true)
		await expect(KPLAYArkHVsl.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYYq8Pxev = await KPLAY.new({from: accounts[2]});
		const uintDlJrDDw = BigInt("193")
		const addresszFKe7CG = accounts[0]
		const addressJxVtmOa = accounts[4]
		const addressTRFm3DW = accounts[4]
		const bool9w3ZNl = await KPLAYYq8Pxev.approve.call(addresszFKe7CG, uintDlJrDDw, {from: "0x0000000000000000000000000000000000000001"});
//		const addressIDs97r7 = await KPLAYYq8Pxev.freeze.call(addressJxVtmOa, {from: accounts[3]});
//		const addressAb8xzaW = await KPLAYYq8Pxev.unfreeze.call(addressTRFm3DW, {from: accounts[2]});

		assert.equal(bool9w3ZNl, true)
		await expect(KPLAYYq8Pxev.freeze.call(addressJxVtmOa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYrasw7Xk = await KPLAY.new({from: accounts[3]});
		const uintgP0TW6J = BigInt("1765")
		const addresssSlk8Ig = accounts[2]
		const uintivKlgzY = BigInt("1277")
		const addressqNm3316 = accounts[5]
		const addressRYG8WS8 = accounts[4]
		const addressg7LG6Y = accounts[2]
		const uintgEypLM = BigInt("287")
		const addresspSu6d9d = accounts[0]
		const uint256ebiTqg7 = await KPLAYrasw7Xk.totalSupply.call({from: accounts[4]});
//		const boolial5b0Z = await KPLAYrasw7Xk.transfer.call(addresssSlk8Ig, uintgP0TW6J, {from: accounts[4]});
//		const boolEqypBCo = await KPLAYrasw7Xk.transferFrom.call(addressRYG8WS8, addressqNm3316, uintivKlgzY, {from: accounts[0]});
//		const boolTAiVCxm = await KPLAYrasw7Xk.isFrozen.call(addressg7LG6Y, {from: accounts[0]});
//		const boolnEZy5T = await KPLAYrasw7Xk.mint.call(addresspSu6d9d, uintgEypLM, {from: accounts[3]});

		assert.equal(uint256ebiTqg7, BigInt("10000000000000000"))
		await expect(KPLAYrasw7Xk.transfer.call(addresssSlk8Ig, uintgP0TW6J, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const addressc5YGb9x = accounts[3]
		const addressiGdoV5A = accounts[0]
		const uint2568M2jXP = await KPLAYRCpGAia.lockCount.call(addressc5YGb9x, {from: accounts[2]});
//		await KPLAYRCpGAia.whenNotPaused.call({from: accounts[4]});
//		const addressstUY5kY = await KPLAYRCpGAia.freeze.call(addressiGdoV5A, {from: accounts[2]});

		assert.equal(uint2568M2jXP, BigInt("0"))
		await expect(KPLAYRCpGAia.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjKNapo = await KPLAY.new({from: accounts[0]});
		const addressbOLUli3 = accounts[4]
		const uintYHBFHYw = BigInt("45")
		const uintO5cBBWH = BigInt("729")
		const addressvOKUd2 = "0x0000000000000000000000000000000000000001"
		const addressFDbGY9 = accounts[4]
		const addressJa89b5v = accounts[4]
		const uintKGkUzS = BigInt("1673")
		const uintKeMngVb = BigInt("212")
		const address3qA5YF = accounts[4]
		const boolhsSks8W = await KPLAYjKNapo.isFrozen.call(addressbOLUli3, {from: accounts[2]});
//		const addresslst5CH = await KPLAYjKNapo.lockAfter.call(addressvOKUd2, uintO5cBBWH, uintYHBFHYw, {from: accounts[2]});
//		await KPLAYjKNapo.whenNotPaused.call({from: accounts[4]});
//		const uint256Lmu25lO = await KPLAYjKNapo.allowance.call(addressJa89b5v, addressFDbGY9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolsn72X5j = await KPLAYjKNapo.transferWithLockAfter.call(address3qA5YF, uintKeMngVb, uintKGkUzS, {from: accounts[4]});
//		await KPLAYjKNapo.pause.call({from: accounts[5]});

		assert.equal(boolhsSks8W, false)
		await expect(KPLAYjKNapo.lockAfter.call(addressvOKUd2, uintO5cBBWH, uintYHBFHYw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const addressOTnxBz = accounts[4]
		const uintVF1hCO = BigInt("417")
		const addressFkixjJ8 = accounts[1]
		const addressYEUJJZL = accounts[0]
		const uint2568M2jXP = await KPLAYRCpGAia.lockCount.call(addressOTnxBz, {from: accounts[2]});
//		const boolwKtvQGm = await KPLAYRCpGAia.decreaseAllowance.call(addressFkixjJ8, uintVF1hCO, {from: accounts[0]});
//		await KPLAYRCpGAia.whenNotPaused.call({from: accounts[4]});
//		const addressstUY5kY = await KPLAYRCpGAia.freeze.call(addressYEUJJZL, {from: accounts[2]});

		assert.equal(uint2568M2jXP, BigInt("0"))
		await expect(KPLAYRCpGAia.decreaseAllowance.call(addressFkixjJ8, uintVF1hCO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYrasw7Xk = await KPLAY.new({from: accounts[3]});
		const addressVunHTS = accounts[0]
		const uintLXGPXDH = BigInt("1765")
		const addressfDgutge = accounts[2]
		const uintK3MTvBk = BigInt("1277")
		const addressNseLhKz = accounts[5]
		const addressU7WLyDB = accounts[4]
		const addressewdL8lW = accounts[2]
		const uintkgPX7iM = BigInt("287")
		const addressMc6LswU = accounts[0]
		const uint256ebiTqg7 = await KPLAYrasw7Xk.totalSupply.call({from: accounts[4]});
		const addressoqPNaZY = await KPLAYrasw7Xk.transferOwnership.call(addressVunHTS, {from: accounts[3]});
//		const boolial5b0Z = await KPLAYrasw7Xk.transfer.call(addressfDgutge, uintLXGPXDH, {from: accounts[4]});
//		const boolEqypBCo = await KPLAYrasw7Xk.transferFrom.call(addressU7WLyDB, addressNseLhKz, uintK3MTvBk, {from: accounts[0]});
//		await KPLAYrasw7Xk.pause.call({from: accounts[3]});
//		const boolTAiVCxm = await KPLAYrasw7Xk.isFrozen.call(addressewdL8lW, {from: accounts[0]});
//		const boolnEZy5T = await KPLAYrasw7Xk.mint.call(addressMc6LswU, uintkgPX7iM, {from: accounts[3]});

		assert.equal(uint256ebiTqg7, BigInt("10000000000000000"))
		await expect(KPLAYrasw7Xk.transfer.call(addressfDgutge, uintLXGPXDH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYETV4oft = await KPLAY.new({from: accounts[3]});
		const addressXUc1Ma4 = accounts[4]
		const addressV6u64c6 = accounts[0]
		const addresstuew5NX = accounts[3]
		const uintE4rMRUo = BigInt("571")
		const uintNPsNPbr = BigInt("299")
		const addressUPGTJkz = accounts[3]
		const uint256SVyuhxI = await KPLAYETV4oft.allowance.call(addressV6u64c6, addressXUc1Ma4, {from: accounts[3]});
//		await KPLAYETV4oft.whenPaused.call({from: accounts[1]});
//		await KPLAYETV4oft.whenNotPaused.call({from: accounts[4]});
//		const boolvDmqX2 = await KPLAYETV4oft.isFrozen.call(addresstuew5NX, {from: accounts[5]});
//		const booluOwxVUI = await KPLAYETV4oft.transferWithLockAfter.call(addressUPGTJkz, uintNPsNPbr, uintE4rMRUo, {from: accounts[4]});

		assert.equal(uint256SVyuhxI, BigInt("0"))
		await expect(KPLAYETV4oft.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const addressSjQwqdy = accounts[3]
		const addressJJVuxmN = accounts[4]
		const uinteNrphxK = BigInt("390")
		const addressxFIRcq1 = accounts[1]
		const uintXlS6lRo = BigInt("1640")
		const uintbhnU7IV = BigInt("78")
		const addressiKETaSH = accounts[3]
		const uintpUvuR5i = BigInt("888")
		const addressTHIQ1k = accounts[2]
		const addressp0Qb69U = accounts[0]
		const uint256XgbMwgO = await KPLAYRCpGAia.balanceOf.call(addressSjQwqdy, {from: accounts[2]});
		const uint2568M2jXP = await KPLAYRCpGAia.lockCount.call(addressJJVuxmN, {from: accounts[2]});
//		const boolwKtvQGm = await KPLAYRCpGAia.decreaseAllowance.call(addressxFIRcq1, uinteNrphxK, {from: accounts[0]});
//		const boolmH4VbGk = await KPLAYRCpGAia.transferWithLockAfter.call(addressiKETaSH, uintbhnU7IV, uintXlS6lRo, {from: accounts[4]});
//		await KPLAYRCpGAia.whenNotPaused.call({from: accounts[4]});
//		const boolC1QvOon = await KPLAYRCpGAia.decreaseAllowance.call(addressTHIQ1k, uintpUvuR5i, {from: accounts[0]});
//		const addressstUY5kY = await KPLAYRCpGAia.freeze.call(addressp0Qb69U, {from: accounts[2]});

		assert.equal(uint2568M2jXP, BigInt("0"))
		assert.equal(uint256XgbMwgO, BigInt("0"))
		await expect(KPLAYRCpGAia.decreaseAllowance.call(addressxFIRcq1, uinteNrphxK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYzg1UyM8 = await KPLAY.new({from: accounts[2]});
		const uintOovhpTv = BigInt("375")
		const addressTprueDd = "0x0000000000000000000000000000000000000001"
		const addressay1YaTY = accounts[2]
		const addressbZWWQcT = "0x0000000000000000000000000000000000000001"
		const addressPG5K4k = accounts[3]
		const addressVeJMytt = accounts[4]
		const addressPTxQaYz = accounts[0]
//		const bool18PJLP = await KPLAYzg1UyM8.transferFrom.call(addressay1YaTY, addressTprueDd, uintOovhpTv, {from: accounts[4]});
//		const uint256EhCgqyo = await KPLAYzg1UyM8.lockCount.call(addressbZWWQcT, {from: accounts[2]});
//		const uint256hf67xcX = await KPLAYzg1UyM8.allowance.call(addressVeJMytt, addressPG5K4k, {from: accounts[5]});
//		await KPLAYzg1UyM8.pause.call({from: accounts[3]});
//		const address6i1fqx = await KPLAYzg1UyM8.freeze.call(addressPTxQaYz, {from: accounts[4]});

		await expect(KPLAYzg1UyM8.transferFrom.call(addressay1YaTY, addressTprueDd, uintOovhpTv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const addressp8Xb1wT = accounts[3]
		const uintWg2B6ql = BigInt("1730")
		const addressQNOlQGT = "0x0000000000000000000000000000000000000001"
		const addressORkduY1 = accounts[5]
		const uintdcORThg = BigInt("390")
		const addressmyZFSaW = accounts[1]
		const uintIeTdzxx = BigInt("1640")
		const uintYmlnku0 = BigInt("78")
		const addressGFZQHfn = accounts[3]
		const addressSLu29e = accounts[0]
		const uint256XgbMwgO = await KPLAYRCpGAia.balanceOf.call(addressp8Xb1wT, {from: accounts[2]});
//		await KPLAYRCpGAia.lockState.call(addressQNOlQGT, uintWg2B6ql, {from: accounts[3]});
//		const uint2568M2jXP = await KPLAYRCpGAia.lockCount.call(addressORkduY1, {from: accounts[2]});
//		await KPLAYRCpGAia.onlyOwner.call({from: accounts[0]});
//		await KPLAYRCpGAia.whenNotPaused.call({from: accounts[0]});
//		const boolwKtvQGm = await KPLAYRCpGAia.decreaseAllowance.call(addressmyZFSaW, uintdcORThg, {from: accounts[0]});
//		const boolmH4VbGk = await KPLAYRCpGAia.transferWithLockAfter.call(addressGFZQHfn, uintYmlnku0, uintIeTdzxx, {from: accounts[4]});
//		await KPLAYRCpGAia.whenNotPaused.call({from: accounts[4]});
//		const addressstUY5kY = await KPLAYRCpGAia.freeze.call(addressSLu29e, {from: accounts[2]});

		assert.equal(uint256XgbMwgO, BigInt("0"))
		await expect(KPLAYRCpGAia.lockState.call(addressQNOlQGT, uintWg2B6ql, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYrmbFC4 = await KPLAY.new({from: accounts[0]});
		const uintB8vY6kH = BigInt("778")
		const addressSlaInEI = accounts[2]
		const uintNbMmC9C = BigInt("919")
		const addressOrZ8W8i = accounts[5]
		const boolijAPi3z = await KPLAYrmbFC4.increaseAllowance.call(addressSlaInEI, uintB8vY6kH, {from: accounts[3]});
		const uint256Ao6J50P = await KPLAYrmbFC4.afterTime.call(uintNbMmC9C, {from: accounts[5]});
		const uint256Dy1tbm1 = await KPLAYrmbFC4.balanceOf.call(addressOrZ8W8i, {from: accounts[1]});
//		await KPLAYrmbFC4.renounceOwnership.call({from: accounts[5]});

		assert.equal(boolijAPi3z, true)
		assert.equal(uint256Ao6J50P, BigInt("1630230470"))
		assert.equal(uint256Dy1tbm1, BigInt("0"))
		await expect(KPLAYrmbFC4.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYdKMPxhG = await KPLAY.new({from: accounts[3]});
		const addressDWTZ44Q = accounts[0]
		const uintLVpPNXW = BigInt("1067")
		const addressFjdIDnm = "0x0000000000000000000000000000000000000000"
		const addresss2FODnh = accounts[5]
		const address1yascy = accounts[1]
		const addressnNp8gWx = accounts[0]
		const addressC6DZnlC = accounts[3]
		const uintOf4oiZ1 = BigInt("1247")
		const uintS3HBB8T = BigInt("477")
		const addressbwaupGQ = accounts[1]
		const uintXumLf6x = BigInt("393")
		const addressHD2N3PM = accounts[3]
		const addressP2RQJWI = accounts[2]
		const uintkfgTlv6 = BigInt("147")
		const uintYv7w8W3 = BigInt("1963")
		const addressElNKfdG = accounts[2]
		const uint256l5OiJAq = await KPLAYdKMPxhG.balanceOf.call(addressDWTZ44Q, {from: accounts[5]});
//		const booltRAzu4Y = await KPLAYdKMPxhG.transferFrom.call(addresss2FODnh, addressFjdIDnm, uintLVpPNXW, {from: accounts[3]});
//		await KPLAYdKMPxhG.whenPaused.call({from: accounts[4]});
//		const uint256WCybJ9c = await KPLAYdKMPxhG.allowance.call(addressnNp8gWx, address1yascy, {from: accounts[0]});
//		const addressKPWAIx = await KPLAYdKMPxhG.transferOwnership.call(addressC6DZnlC, {from: accounts[4]});
//		const boolZ3ToPxC = await KPLAYdKMPxhG.transferWithLock.call(addressbwaupGQ, uintS3HBB8T, uintOf4oiZ1, {from: "0x0000000000000000000000000000000000000001"});
//		await KPLAYdKMPxhG.lockState.call(addressHD2N3PM, uintXumLf6x, {from: accounts[2]});
//		const uint256gaLpQaS = await KPLAYdKMPxhG.balanceOf.call(addressP2RQJWI, {from: accounts[4]});
//		const addressVu6KiZ = await KPLAYdKMPxhG.lock.call(addressElNKfdG, uintYv7w8W3, uintkfgTlv6, {from: accounts[5]});

		assert.equal(uint256l5OiJAq, BigInt("0"))
		await expect(KPLAYdKMPxhG.transferFrom.call(addresss2FODnh, addressFjdIDnm, uintLVpPNXW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const addressXDKrTCV = accounts[5]
		const uintyOCg2y7 = BigInt("408")
		const addressin7vh9X = accounts[3]
		const uintPgnFfwW = BigInt("1031")
		const address2fYyDz = accounts[2]
		const addressIvbKcWo = accounts[2]
		const uint256CPXKccQ = await KPLAYRCpGAia.balanceOf.call(addressXDKrTCV, {from: accounts[0]});
//		const addressuy5eTjj = await KPLAYRCpGAia.unlock.call(addressin7vh9X, uintyOCg2y7, {from: accounts[0]});
//		const boolvD1T68G = await KPLAYRCpGAia.transferFrom.call(addressIvbKcWo, address2fYyDz, uintPgnFfwW, {from: accounts[1]});
//		await KPLAYRCpGAia.whenNotPaused.call({from: accounts[4]});

		assert.equal(uint256CPXKccQ, BigInt("0"))
		await expect(KPLAYRCpGAia.unlock.call(addressin7vh9X, uintyOCg2y7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJuCGKLN = await KPLAY.new({from: accounts[1]});
		const uintGHQBC4X = BigInt("1351")
		const addresstzH5bi = accounts[3]
		const uinteXhgSIi = BigInt("574")
		const addressgioraZG = "0x0000000000000000000000000000000000000001"
		const uintvRDnV0W = BigInt("1734")
		const uintBL0JZ9V = BigInt("577")
		const addresswQVszko = accounts[4]
		const boolJnG54BY = await KPLAYJuCGKLN.approve.call(addresstzH5bi, uintGHQBC4X, {from: accounts[0]});
//		const addressA2HfKDY = await KPLAYJuCGKLN.burn.call(addressgioraZG, uinteXhgSIi, {from: accounts[1]});
//		const addresslchhyyi = await KPLAYJuCGKLN.lockAfter.call(addresswQVszko, uintBL0JZ9V, uintvRDnV0W, {from: accounts[5]});

		assert.equal(boolJnG54BY, true)
		await expect(KPLAYJuCGKLN.burn.call(addressgioraZG, uinteXhgSIi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYrmbFC4 = await KPLAY.new({from: accounts[0]});
		const addressm0LqJV = accounts[5]
		const uint256ZpsCix = await KPLAYrmbFC4.totalSupply.call({from: accounts[3]});
		const uint256Dy1tbm1 = await KPLAYrmbFC4.balanceOf.call(addressm0LqJV, {from: accounts[1]});
		const uint256nlG0amI = await KPLAYrmbFC4.currentTime.call({from: accounts[2]});

		assert.equal(uint256Dy1tbm1, BigInt("0"))
		assert.equal(uint256ZpsCix, BigInt("10000000000000000"))
		assert.equal(uint256nlG0amI, BigInt("1630229553"))
	});

	it('test for KPLAY', async () => {
		const KPLAYeMWNR9F = await KPLAY.new({from: accounts[3]});
		const addressCz62WqL = accounts[3]
//		await KPLAYeMWNR9F.renounceOwnership.call({from: accounts[3]});
//		await KPLAYeMWNR9F.pause.call({from: accounts[0]});
//		const uint256RLoI25g = await KPLAYeMWNR9F.lockCount.call(addressCz62WqL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYeMWNR9F.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const addressnfl0jHf = accounts[5]
		const uintU7bwuZ = BigInt("1941")
		const addresslzSafYB = accounts[4]
		const uintOYZRcT = BigInt("961")
		const uintPmz0BFc = BigInt("466")
		const address4UpCdZ = accounts[1]
		const uint3oKqQE = BigInt("408")
		const addressZj7ATb7 = accounts[4]
		const addressBFaM9Xp = accounts[0]
		const uintTFpsgPw = BigInt("489")
		const uintaCfNMbJ = BigInt("379")
		const addressxFbldm7 = accounts[1]
		const addressUxHnuc = accounts[3]
		const uintA4NDyBp = BigInt("1031")
		const addressLq7RSxs = accounts[2]
		const addresseY08OX = accounts[2]
		const uint256CPXKccQ = await KPLAYRCpGAia.balanceOf.call(addressnfl0jHf, {from: accounts[0]});
		const boolF5xeykr = await KPLAYRCpGAia.transfer.call(addresslzSafYB, uintU7bwuZ, {from: accounts[0]});
//		await KPLAYRCpGAia.unpause.call({from: accounts[0]});
//		const addressn2evIbQ = await KPLAYRCpGAia.lockAfter.call(address4UpCdZ, uintPmz0BFc, uintOYZRcT, {from: accounts[3]});
//		const addressuy5eTjj = await KPLAYRCpGAia.unlock.call(addressZj7ATb7, uint3oKqQE, {from: accounts[0]});
//		const boolm5c8ygC = await KPLAYRCpGAia.isFrozen.call(addressBFaM9Xp, {from: accounts[3]});
//		await KPLAYRCpGAia.whenNotFrozen.call({from: accounts[1]});
//		await KPLAYRCpGAia.unpause.call({from: accounts[2]});
//		const addressWIgQzQR = await KPLAYRCpGAia.lockAfter.call(addressxFbldm7, uintaCfNMbJ, uintTFpsgPw, {from: accounts[2]});
//		const uint256IgtvY5U = await KPLAYRCpGAia.currentTime.call({from: accounts[3]});
//		const uint256moqK40A = await KPLAYRCpGAia.balanceOf.call(addressUxHnuc, {from: accounts[5]});
//		const boolvD1T68G = await KPLAYRCpGAia.transferFrom.call(addresseY08OX, addressLq7RSxs, uintA4NDyBp, {from: accounts[1]});

		assert.equal(boolF5xeykr, true)
		assert.equal(uint256CPXKccQ, BigInt("0"))
		await expect(KPLAYRCpGAia.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYrmbFC4 = await KPLAY.new({from: accounts[0]});
		const addressMhwYY8J = accounts[3]
		const addressaoQarts = accounts[1]
		const addresspTeDxf = accounts[5]
		const address4v6HUw = await KPLAYrmbFC4.transferOwnership.call(addressMhwYY8J, {from: accounts[0]});
		const addressh3CVulL = await KPLAYrmbFC4.unfreeze.call(addressaoQarts, {from: accounts[0]});
		const uint256Dy1tbm1 = await KPLAYrmbFC4.balanceOf.call(addresspTeDxf, {from: accounts[1]});

		assert.equal(uint256Dy1tbm1, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYPPUF6yD = await KPLAY.new({from: accounts[2]});
		const uintbCzPtT7 = BigInt("1400")
		const addressW3RsqQ0 = accounts[6]
		const uinto2qLIG = BigInt("1735")
		const uintLEJXh1b = BigInt("977")
		const addressZlUSGm = "0x0000000000000000000000000000000000000001"
		const uintbWOtBWh = BigInt("139")
		const addressPgc0ymP = accounts[3]
		const uint256wMRIRvY = await KPLAYPPUF6yD.totalSupply.call({from: accounts[3]});
		const boolSRvLBoA = await KPLAYPPUF6yD.increaseAllowance.call(addressW3RsqQ0, uintbCzPtT7, {from: accounts[3]});
		const booltxyetQL = await KPLAYPPUF6yD.transferWithLock.call(addressZlUSGm, uintLEJXh1b, uinto2qLIG, {from: accounts[2]});
//		const addressImu4Ykm = await KPLAYPPUF6yD.unlock.call(addressPgc0ymP, uintbWOtBWh, {from: accounts[2]});

		assert.equal(boolSRvLBoA, true)
		assert.equal(booltxyetQL, true)
		assert.equal(uint256wMRIRvY, BigInt("10000000000000000"))
		await expect(KPLAYPPUF6yD.unlock.call(addressPgc0ymP, uintbWOtBWh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const uinthy3Yybq = BigInt("1031")
		const addressv7YN2VN = accounts[3]
		const addressARYLWhX = accounts[2]
//		await KPLAYRCpGAia.pause.call({from: accounts[0]});
//		const boolvD1T68G = await KPLAYRCpGAia.transferFrom.call(addressARYLWhX, addressv7YN2VN, uinthy3Yybq, {from: accounts[1]});
//		await KPLAYRCpGAia.whenPaused.call({from: accounts[3]});

		await expect(KPLAYRCpGAia.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const addressQpv5J75 = accounts[5]
		const uint5KL4Mm = BigInt("270")
		const addressmjanAQE = accounts[4]
		const uintAQvBE3c = BigInt("1941")
		const addressMrCpzvp = accounts[4]
		const uintsh3EF4k = BigInt("433")
		const addressY78qDNw = accounts[3]
		const addresslaHv7Oc = accounts[2]
		const addressplIDrB4 = accounts[4]
		const uint256CPXKccQ = await KPLAYRCpGAia.balanceOf.call(addressQpv5J75, {from: accounts[0]});
		const boolpR18DAS = await KPLAYRCpGAia.mint.call(addressmjanAQE, uint5KL4Mm, {from: accounts[0]});
		const boolF5xeykr = await KPLAYRCpGAia.transfer.call(addressMrCpzvp, uintAQvBE3c, {from: accounts[0]});
//		const addressuy5eTjj = await KPLAYRCpGAia.unlock.call(addressY78qDNw, uintsh3EF4k, {from: accounts[0]});
//		const uint256x248xe7 = await KPLAYRCpGAia.balanceOf.call(addresslaHv7Oc, {from: accounts[1]});
//		await KPLAYRCpGAia.whenNotFrozen.call({from: accounts[1]});
//		const uint256IgtvY5U = await KPLAYRCpGAia.currentTime.call({from: accounts[3]});
//		const uint256moqK40A = await KPLAYRCpGAia.balanceOf.call(addressplIDrB4, {from: accounts[5]});

		assert.equal(boolF5xeykr, true)
		assert.equal(boolpR18DAS, true)
		assert.equal(uint256CPXKccQ, BigInt("0"))
		await expect(KPLAYRCpGAia.unlock.call(addressY78qDNw, uintsh3EF4k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const addressjXMH8qH = accounts[5]
		const uintVWleD8Y = BigInt("1941")
		const addresswupGmfx = accounts[4]
		const addressUfdFeOK = accounts[0]
		const uinti9f0lrF = BigInt("433")
		const addressCIZJAGL = accounts[3]
		const addressv9JzQm1 = accounts[3]
		const uintN7FWz7 = BigInt("258")
		const uintbkwK9C7 = BigInt("103")
		const addressJCJWtt7 = accounts[3]
		const uint256CPXKccQ = await KPLAYRCpGAia.balanceOf.call(addressjXMH8qH, {from: accounts[0]});
		const boolF5xeykr = await KPLAYRCpGAia.transfer.call(addresswupGmfx, uintVWleD8Y, {from: accounts[0]});
		const addressz2q9TW = await KPLAYRCpGAia.freeze.call(addressUfdFeOK, {from: accounts[0]});
//		const addressuy5eTjj = await KPLAYRCpGAia.unlock.call(addressCIZJAGL, uinti9f0lrF, {from: accounts[0]});
//		await KPLAYRCpGAia.whenNotFrozen.call({from: accounts[1]});
//		const uint256IgtvY5U = await KPLAYRCpGAia.currentTime.call({from: accounts[3]});
//		const uint256moqK40A = await KPLAYRCpGAia.balanceOf.call(addressv9JzQm1, {from: accounts[5]});
//		const boolhm367Uy = await KPLAYRCpGAia.transferWithLockAfter.call(addressJCJWtt7, uintbkwK9C7, uintN7FWz7, {from: accounts[3]});

		assert.equal(boolF5xeykr, true)
		assert.equal(uint256CPXKccQ, BigInt("0"))
		await expect(KPLAYRCpGAia.unlock.call(addressCIZJAGL, uinti9f0lrF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYItFA4de = await KPLAY.new({from: accounts[2]});
		const uintErqHsd9 = BigInt("769")
		const uinteDKZkC = BigInt("501")
		const addresszpna05r = accounts[2]
		const uintL6zpu1R = BigInt("1097")
		const addresscQuzLFN = accounts[1]
		const addressWqLyQkP = accounts[3]
		const addressHVZVmMj = accounts[1]
		const addressCsjVyY1 = accounts[3]
		const addressGj2iMTL = accounts[5]
		const uinti1TwBO4 = BigInt("1001")
		const addressnwtSWsT = accounts[1]
		const addresstoIwysl = await KPLAYItFA4de.lockAfter.call(addresszpna05r, uinteDKZkC, uintErqHsd9, {from: accounts[2]});
//		const boolV7X3YqL = await KPLAYItFA4de.transfer.call(addresscQuzLFN, uintL6zpu1R, {from: accounts[3]});
//		const uint256p830Qnn = await KPLAYItFA4de.allowance.call(addressHVZVmMj, addressWqLyQkP, {from: accounts[5]});
//		const uint256GsmeLG = await KPLAYItFA4de.allowance.call(addressGj2iMTL, addressCsjVyY1, {from: accounts[5]});
//		await KPLAYItFA4de.lockState.call(addressnwtSWsT, uinti1TwBO4, {from: accounts[4]});

		await expect(KPLAYItFA4de.transfer.call(addresscQuzLFN, uintL6zpu1R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRCpGAia = await KPLAY.new({from: accounts[0]});
		const addressy03iBcd = accounts[5]
		const uintd6Okqy4 = BigInt("459")
		const uintS2ecxSo = BigInt("96")
		const addressWfJbIeS = accounts[3]
		const uintHMIUDzM = BigInt("843")
		const addresst79Z6Vl = accounts[3]
		const uintzYZeJ8i = BigInt("1941")
		const addresshbCXOH4 = accounts[4]
		const uintLE3uDsn = BigInt("433")
		const addressmW3aBL9 = accounts[3]
		const uintwXcs8BV = BigInt("668")
		const addressh2x9Rz7 = accounts[0]
		const uint1rf5R8 = BigInt("473")
		const addressBkbq9ut = accounts[3]
		const uint256CPXKccQ = await KPLAYRCpGAia.balanceOf.call(addressy03iBcd, {from: accounts[0]});
//		const addressT7EyGR = await KPLAYRCpGAia.lock.call(addressWfJbIeS, uintS2ecxSo, uintd6Okqy4, {from: accounts[0]});
//		const boolPGHn9F = await KPLAYRCpGAia.approve.call(addresst79Z6Vl, uintHMIUDzM, {from: accounts[0]});
//		const boolF5xeykr = await KPLAYRCpGAia.transfer.call(addresshbCXOH4, uintzYZeJ8i, {from: accounts[0]});
//		const addressuy5eTjj = await KPLAYRCpGAia.unlock.call(addressmW3aBL9, uintLE3uDsn, {from: accounts[0]});
//		await KPLAYRCpGAia.whenNotFrozen.call({from: accounts[1]});
//		const uint256IgtvY5U = await KPLAYRCpGAia.currentTime.call({from: accounts[3]});
//		const boolb8Ja7WF = await KPLAYRCpGAia.transfer.call(addressh2x9Rz7, uintwXcs8BV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LKklBcm = await KPLAYRCpGAia.afterTime.call(uint1rf5R8, {from: accounts[2]});
//		await KPLAYRCpGAia.whenNotPaused.call({from: accounts[0]});
//		const uint256moqK40A = await KPLAYRCpGAia.balanceOf.call(addressBkbq9ut, {from: accounts[5]});

		assert.equal(uint256CPXKccQ, BigInt("0"))
		await expect(KPLAYRCpGAia.lock.call(addressWfJbIeS, uintS2ecxSo, uintd6Okqy4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})