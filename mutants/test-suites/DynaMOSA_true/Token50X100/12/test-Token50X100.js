const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100yV209yg = await Token50X100.new({from: accounts[0]});
		const uintgiOjXkV = BigInt("209")
		const uintcc41LYE = BigInt("11")
		const addressbkqFEoN = "0x0000000000000000000000000000000000000001"
		const uintPYSqoe = BigInt("193")
		const uintsanGWcS = BigInt("1944")
		const uintiVOIZEh = BigInt("741")
		const uintVAc40Zx = BigInt("850")
		const addressY5GXCbs = accounts[2]
		const uintvdLelsD = BigInt("1374")
		const addressnoHlNHE = accounts[3]
		const uintOqZX0sK = BigInt("1862")
//		const boolEhPCyt6 = await Token50X100yV209yg.setVesting.call(addressbkqFEoN, uintcc41LYE, uintgiOjXkV, {from: accounts[4]});
//		const boolQ5sGUxc = await Token50X100yV209yg.safeLock.call(uintsanGWcS, uintPYSqoe, {from: accounts[5]});
//		const booliq7l6v3 = await Token50X100yV209yg.safeLock.call(uintVAc40Zx, uintiVOIZEh, {from: accounts[5]});
//		await Token50X100yV209yg.setTokenContract.call(addressY5GXCbs, {from: accounts[0]});
//		const boolIo97Yji = await Token50X100yV209yg.approve.call(addressnoHlNHE, uintvdLelsD, {from: accounts[1]});
//		const boolBqwKHZF = await Token50X100yV209yg.setMaxLockPeriod.call(uintOqZX0sK, {from: accounts[1]});

		await expect(Token50X100yV209yg.setVesting.call(addressbkqFEoN, uintcc41LYE, uintgiOjXkV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kfPagXP = await Token50X100.new({from: accounts[0]});
		const uintY48rf34 = BigInt("316")
		const uintbxiwJHT = BigInt("711")
		const addressd6Szu7 = "0x0000000000000000000000000000000000000001"
		const addressEUkzsa1 = accounts[1]
//		const boolEfxVMW = await Token50X100kfPagXP.safeLock.call(uintbxiwJHT, uintY48rf34, {from: accounts[3]});
//		await Token50X100kfPagXP.setLinkingAddresses.call(addressEUkzsa1, addressd6Szu7, {from: accounts[4]});

		await expect(Token50X100kfPagXP.safeLock.call(uintbxiwJHT, uintY48rf34, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100q5N92Rl = await Token50X100.new({from: accounts[1]});
		const uint6fcZS4 = BigInt("726")
		const boolbWczF7 = await Token50X100q5N92Rl.setMaxLockPeriod.call(uint6fcZS4, {from: accounts[4]});
//		await Token50X100q5N92Rl.lock.call({from: accounts[1]});

		assert.equal(boolbWczF7, false)
		await expect(Token50X100q5N92Rl.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aqCcItB = await Token50X100.new({from: accounts[1]});
		const uintT55d6i = BigInt("93")
		const addressxSbmtlx = accounts[3]
		const uintlI4Mhjk = BigInt("1124")
		const uintEbmAzRi = BigInt("219")
		const addressvA2eE97 = accounts[4]
		const uintwG2LRy = BigInt("334")
		const uintVPBeg3 = BigInt("1800")
		const addressv0FJ1MW = accounts[1]
		const addressmi08smv = accounts[2]
		const uintfq767v = BigInt("1332")
		const addresszMEAeN2 = accounts[1]
		const uintLzjBg64 = BigInt("1979")
		const addresspXHgOA5 = accounts[2]
		const uint256ElDdNWv = await Token50X100aqCcItB.totalSupply.call({from: accounts[1]});
//		const boolA4ltuTJ = await Token50X100aqCcItB.transfer.call(addressxSbmtlx, uintT55d6i, {from: "0x0000000000000000000000000000000000000001"});
//		const boolhRekroo = await Token50X100aqCcItB.setVesting.call(addressvA2eE97, uintEbmAzRi, uintlI4Mhjk, {from: accounts[4]});
//		const boolxoexJyM = await Token50X100aqCcItB._transfer.call(addressmi08smv, addressv0FJ1MW, uintVPBeg3, uintwG2LRy, {from: accounts[4]});
//		const boolBSurICB = await Token50X100aqCcItB.transfer.call(addresszMEAeN2, uintfq767v, {from: accounts[3]});
//		const boolbE2C06l = await Token50X100aqCcItB.transfer.call(addresspXHgOA5, uintLzjBg64, {from: accounts[4]});

		assert.equal(uint256ElDdNWv, BigInt("4714285714285710"))
		await expect(Token50X100aqCcItB.transfer.call(addressxSbmtlx, uintT55d6i, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100q5N92Rl = await Token50X100.new({from: accounts[1]});
		const uintgQFxJif = BigInt("726")
		const uintTSH8ob = BigInt("771")
		const addresseU315B0 = accounts[4]
		const boolbWczF7 = await Token50X100q5N92Rl.setMaxLockPeriod.call(uintgQFxJif, {from: accounts[4]});
//		await Token50X100q5N92Rl.onlyOwner.call({from: accounts[5]});
//		const boolb9kqq4 = await Token50X100q5N92Rl.decreaseApproval.call(addresseU315B0, uintTSH8ob, {from: accounts[0]});
//		await Token50X100q5N92Rl.lock.call({from: accounts[1]});

		assert.equal(boolbWczF7, false)
		await expect(Token50X100q5N92Rl.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wKyOwmK = await Token50X100.new({from: accounts[2]});
		const addressT5oqNu = accounts[1]
		const boolPVRKggH = true
		const addressy1wTR1h = accounts[4]
		const uint256byZ6SWV = await Token50X100wKyOwmK.balanceOf.call(addressT5oqNu, {from: accounts[1]});
//		await Token50X100wKyOwmK.release.call({from: accounts[1]});
//		await Token50X100wKyOwmK.setWhiteList.call(addressy1wTR1h, boolPVRKggH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256byZ6SWV, BigInt("0"))
		await expect(Token50X100wKyOwmK.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintH9Sfil = BigInt("687")
		const uint9ENaHY = BigInt("411")
		const addressDKpQcEz = accounts[4]
		const boolmWMRxAS = await Token50X100yPpLI8l.setVesting.call(addressDKpQcEz, uint9ENaHY, uintH9Sfil, {from: accounts[1]});

		assert.equal(boolmWMRxAS, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintREmufDh = BigInt("668")
		const addressp9cityK = "0x0000000000000000000000000000000000000000"
//		const boolv0BJTxu = await Token50X100yPpLI8l.transfer.call(addressp9cityK, uintREmufDh, {from: accounts[4]});

		await expect(Token50X100yPpLI8l.transfer.call(addressp9cityK, uintREmufDh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintyCkl6tS = BigInt("940")
		const addressVsP13yj = accounts[4]
		const addressHgocJs = accounts[3]
		const uintICFpxrR = BigInt("1020")
		const uintxQNbceF = BigInt("226")
		const uintfc2vUhm = BigInt("668")
		const addressmdlTfV = "0x0000000000000000000000000000000000000001"
//		const boolUeXk13b = await Token50X100yPpLI8l.transferFrom.call(addressHgocJs, addressVsP13yj, uintyCkl6tS, {from: accounts[2]});
//		const boolOTQjHVb = await Token50X100yPpLI8l.safeLock.call(uintxQNbceF, uintICFpxrR, {from: accounts[0]});
//		const boolv0BJTxu = await Token50X100yPpLI8l.transfer.call(addressmdlTfV, uintfc2vUhm, {from: accounts[4]});

		await expect(Token50X100yPpLI8l.transferFrom.call(addressHgocJs, addressVsP13yj, uintyCkl6tS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kfPagXP = await Token50X100.new({from: accounts[0]});
		const uintkbrrvJs = BigInt("1143")
		const addressnIEJdFA = accounts[4]
		const uintjDmma43 = BigInt("121")
		const uints5eSvWA = BigInt("316")
		const uintSr5B7zM = BigInt("711")
		const uintsulozk9 = BigInt("758")
		const addressmELDxNf = "0x0000000000000000000000000000000000000001"
		const addressKBWhO6h = accounts[1]
		const booltYnJi9e = await Token50X100kfPagXP.approve.call(addressnIEJdFA, uintkbrrvJs, {from: accounts[1]});
		const boolSraG0Ay = await Token50X100kfPagXP.setMaxLockPeriod.call(uintjDmma43, {from: accounts[4]});
//		const boolEfxVMW = await Token50X100kfPagXP.safeLock.call(uintSr5B7zM, uints5eSvWA, {from: accounts[3]});
//		const booliYOzvMt = await Token50X100kfPagXP.setMaxLockPeriod.call(uintsulozk9, {from: accounts[3]});
//		await Token50X100kfPagXP.setLinkingAddresses.call(addressKBWhO6h, addressmELDxNf, {from: accounts[4]});

		assert.equal(boolSraG0Ay, false)
		assert.equal(booltYnJi9e, true)
		await expect(Token50X100kfPagXP.safeLock.call(uintSr5B7zM, uints5eSvWA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintjE8xaLN = BigInt("668")
		const addresssaOwnBq = "0x00000000000000000000000000000000000000-1"
//		const boolv0BJTxu = await Token50X100yPpLI8l.transfer.call(addresssaOwnBq, uintjE8xaLN, {from: accounts[4]});

		await expect(Token50X100yPpLI8l.transfer.call(addresssaOwnBq, uintjE8xaLN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100IPQWnE = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgjJouUv = accounts[1]
		const uintujtrIla = BigInt("900")
		const uintKfe5CEm = BigInt("1438")
		await Token50X100IPQWnE.setTokenContract.call(addressgjJouUv, {from: accounts[4]});
		const boolsUvB8z8 = await Token50X100IPQWnE.safeLock.call(uintKfe5CEm, uintujtrIla, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintq6qZSE = BigInt("1665")
		const addressnpJ6Vnm = accounts[3]
		const uinta8H314o = BigInt("650")
		const addressA7cX1p = "0x0000000000000000000000000000000000000000"
		const uintPVMM2EK = BigInt("114")
		const uintVjc4Bq9 = BigInt("934")
		const addressF4OASd = accounts[0]
		const booloa4K82N = await Token50X100yPpLI8l.decreaseApproval.call(addressnpJ6Vnm, uintq6qZSE, {from: accounts[0]});
//		const boolv0BJTxu = await Token50X100yPpLI8l.transfer.call(addressA7cX1p, uinta8H314o, {from: accounts[4]});
//		const boolldpXQCu = await Token50X100yPpLI8l.setVesting.call(addressF4OASd, uintVjc4Bq9, uintPVMM2EK, {from: accounts[4]});

		assert.equal(booloa4K82N, true)
		await expect(Token50X100yPpLI8l.transfer.call(addressA7cX1p, uinta8H314o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintpMBYvbB = BigInt("1665")
		const addressQ6xDGEF = accounts[3]
		const addressTxzwxOv = accounts[3]
		const addressSWyJqGm = accounts[0]
		const uintqdeJSU3 = BigInt("242")
		const stringlDGjcX = "NKr3remIiuaTX18BEUMUE19FG8n1Dp7scAfQv0vtHnwXfp"
		const stringeW743VU = "LobCgqyeiapKnsxglO3TA8GqEpzCJroaGGgjRNhDk4nsnsWOaWYo5xsElv32WKhBxOguGJJveo9fvPClFv9A6VQRf"
		const uintkkioy9a = BigInt("648")
		const addressmVMh8o8 = "0x0000000000000000000000000000000000000000"
		const booloa4K82N = await Token50X100yPpLI8l.decreaseApproval.call(addressQ6xDGEF, uintpMBYvbB, {from: accounts[0]});
//		await Token50X100yPpLI8l.setLinkingAddresses.call(addressSWyJqGm, addressTxzwxOv, {from: accounts[1]});
//		const boolEGnFVSu = await Token50X100yPpLI8l.setSymbolNameDecimals.call(stringeW743VU, stringlDGjcX, uintqdeJSU3, {from: accounts[2]});
//		const boolv0BJTxu = await Token50X100yPpLI8l.transfer.call(addressmVMh8o8, uintkkioy9a, {from: accounts[4]});

		assert.equal(booloa4K82N, true)
		await expect(Token50X100yPpLI8l.setLinkingAddresses.call(addressSWyJqGm, addressTxzwxOv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintpZpa8FU = BigInt("1880")
		const uintVGktT0v = BigInt("208")
		const addresskfQmxJ = accounts[4]
		const addressYi7sONT = accounts[3]
		const boolsFYoje = false
		const addresslWcHfV4 = accounts[2]
		const uintx9K32Q = BigInt("900")
		const addressOtvv1km = accounts[4]
		const uintbiTLcmB = BigInt("650")
		const addresszLSebRG = "0x0000000000000000000000000000000000000000"
		const uintUreOKT = BigInt("114")
		const uintN0f2Z3B = BigInt("934")
		const addressypn0g4S = accounts[0]
//		const boolD84YbY = await Token50X100yPpLI8l._transfer.call(addressYi7sONT, addresskfQmxJ, uintVGktT0v, uintpZpa8FU, {from: accounts[1]});
//		await Token50X100yPpLI8l.setWhiteListReceivers.call(addresslWcHfV4, boolsFYoje, {from: accounts[4]});
//		const boolnuoqZO9 = await Token50X100yPpLI8l.transfer.call(addressOtvv1km, uintx9K32Q, {from: accounts[2]});
//		const boolv0BJTxu = await Token50X100yPpLI8l.transfer.call(addresszLSebRG, uintbiTLcmB, {from: accounts[4]});
//		const boolldpXQCu = await Token50X100yPpLI8l.setVesting.call(addressypn0g4S, uintN0f2Z3B, uintUreOKT, {from: accounts[4]});

		await expect(Token50X100yPpLI8l._transfer.call(addressYi7sONT, addresskfQmxJ, uintVGktT0v, uintpZpa8FU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100waMIQzY = await Token50X100.new({from: accounts[2]});
		const addressEItmLh5 = accounts[2]
		const boolAH7quf2 = false
		const addressILbjd0l = accounts[4]
		const uinttPmPKJo = BigInt("1418")
		const uintcD2JOAV = BigInt("1743")
		const uintHeuAbc1 = BigInt("18")
		const addressj6X6nMn = accounts[3]
		const uintfRFAzkT = BigInt("1834")
		const addressJvoHmMB = accounts[3]
		const uint256SMPTYY = await Token50X100waMIQzY.balanceOf.call(addressEItmLh5, {from: accounts[0]});
//		await Token50X100waMIQzY.setWhiteList.call(addressILbjd0l, boolAH7quf2, {from: accounts[2]});
//		const boolsYizs2d = await Token50X100waMIQzY.safeLock.call(uintcD2JOAV, uinttPmPKJo, {from: accounts[4]});
//		const boolaFalqvj = await Token50X100waMIQzY.approve.call(addressj6X6nMn, uintHeuAbc1, {from: accounts[1]});
//		const boolCSKrmSu = await Token50X100waMIQzY.approve.call(addressJvoHmMB, uintfRFAzkT, {from: accounts[2]});

		assert.equal(uint256SMPTYY, BigInt("0"))
		await expect(Token50X100waMIQzY.setWhiteList.call(addressILbjd0l, boolAH7quf2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintSqG1zo = BigInt("940")
		const addressqCeLMov = accounts[4]
		const addresswOuzNbr = accounts[4]
//		await Token50X100yPpLI8l.release.call({from: accounts[1]});
//		const boolUeXk13b = await Token50X100yPpLI8l.transferFrom.call(addresswOuzNbr, addressqCeLMov, uintSqG1zo, {from: accounts[2]});

		await expect(Token50X100yPpLI8l.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintO5veuuq = BigInt("1463")
		const addressYfGJvw = accounts[5]
		const uintx3SpYdr = BigInt("1880")
		const uinthAbSyzZ = BigInt("208")
		const addressC2pDql0 = accounts[4]
		const addressU1tPwaJ = accounts[3]
		const boolsFYoje = true
		const addressiVaGav8 = accounts[2]
		const uintWblGXHi = BigInt("900")
		const addressOqJt49X = accounts[4]
		const uintfzmRbN = BigInt("650")
		const addressWo7fm3x = "0x0000000000000000000000000000000000000000"
		const uintI4WrxWy = BigInt("114")
		const uintUkoXMZi = BigInt("934")
		const addressiaq8WA = accounts[0]
		const boolV6ovYPY = await Token50X100yPpLI8l.increaseApproval.call(addressYfGJvw, uintO5veuuq, {from: accounts[5]});
//		const boolD84YbY = await Token50X100yPpLI8l._transfer.call(addressU1tPwaJ, addressC2pDql0, uinthAbSyzZ, uintx3SpYdr, {from: accounts[1]});
//		await Token50X100yPpLI8l.setWhiteListReceivers.call(addressiVaGav8, boolsFYoje, {from: accounts[4]});
//		const boolnuoqZO9 = await Token50X100yPpLI8l.transfer.call(addressOqJt49X, uintWblGXHi, {from: accounts[2]});
//		const boolv0BJTxu = await Token50X100yPpLI8l.transfer.call(addressWo7fm3x, uintfzmRbN, {from: accounts[4]});
//		const boolldpXQCu = await Token50X100yPpLI8l.setVesting.call(addressiaq8WA, uintUkoXMZi, uintI4WrxWy, {from: accounts[4]});

		assert.equal(boolV6ovYPY, true)
		await expect(Token50X100yPpLI8l._transfer.call(addressU1tPwaJ, addressC2pDql0, uinthAbSyzZ, uintx3SpYdr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kfPagXP = await Token50X100.new({from: accounts[0]});
		const addressVxDCsoh = accounts[0]
		const addressEUWlCuZ = accounts[3]
		const uintLD9aG19 = BigInt("316")
		const uintzYd6CW3 = BigInt("696")
		const uint256NAscRZ4 = await Token50X100kfPagXP.allowance.call(addressEUWlCuZ, addressVxDCsoh, {from: accounts[3]});
//		await Token50X100kfPagXP.release.call({from: accounts[3]});
//		const boolEfxVMW = await Token50X100kfPagXP.safeLock.call(uintzYd6CW3, uintLD9aG19, {from: accounts[3]});

		assert.equal(uint256NAscRZ4, BigInt("0"))
		await expect(Token50X100kfPagXP.release.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintlOqLOk0 = BigInt("97")
		const stringanxHeI = "Cgyrj3u5nSK8hwMwVl24i37ye0Gt29cWUKl9eN5nZ3lFJffWWjAapxWJuew4m8m"
		const stringSMS9DDH = "0gpGxJUpWeeAvDG13p5sgDWx3pqFaUwyLW7d3UEJPTgvsZDk7c45wQ3DQrkrIKt0lrUKy"
		const uintIWQUkFf = BigInt("424")
		const uintexjBYMk = BigInt("1813")
		const addressVK14bQ3 = accounts[2]
		const uintB8Afiz = BigInt("926")
		const addressGJT9Ler = accounts[5]
		const addressKsZsKOu = accounts[3]
		const addresszTWPA4k = "0x0000000000000000000000000000000000000001"
		const uintwLzLw1B = BigInt("32")
		const stringGOUtHJ = "g4UT1EEnteTrj83Tl4b"
		const stringl6jR6Xx = "6BtganlfcozGfcOadtHrcqzx7SwlogVFqTs8Vs14Tqhv2Bv"
		const boolrXRmU4E = await Token50X100yPpLI8l.setSymbolNameDecimals.call(stringSMS9DDH, stringanxHeI, uintlOqLOk0, {from: accounts[1]});
		const boolCsscXxx = await Token50X100yPpLI8l.setVesting.call(addressVK14bQ3, uintexjBYMk, uintIWQUkFf, {from: accounts[1]});
//		const boolUeXk13b = await Token50X100yPpLI8l.transferFrom.call(addressKsZsKOu, addressGJT9Ler, uintB8Afiz, {from: accounts[2]});
//		const addresskH54kuj = await Token50X100yPpLI8l.transferOwnership.call(addresszTWPA4k, {from: accounts[2]});
//		await Token50X100yPpLI8l.setSymbolNameDecimals.call(stringl6jR6Xx, stringGOUtHJ, uintwLzLw1B, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCsscXxx, true)
		await expect(Token50X100yPpLI8l.transferFrom.call(addressKsZsKOu, addressGJT9Ler, uintB8Afiz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const addressYpGecJ8 = accounts[4]
		const uintwQU8OMn = BigInt("1648")
		const addressVKlSmW9 = accounts[4]
		const addressTPTCjFe = await Token50X100yPpLI8l.transferOwnership.call(addressYpGecJ8, {from: accounts[1]});
		const booloa4K82N = await Token50X100yPpLI8l.decreaseApproval.call(addressVKlSmW9, uintwQU8OMn, {from: accounts[0]});

		assert.equal(booloa4K82N, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100yPpLI8l = await Token50X100.new({from: accounts[1]});
		const uintKDhzAvF = BigInt("1648")
		const address9LeQXK = accounts[3]
		const addressVgfHJwX = accounts[1]
		const uintQehCmaV = BigInt("656")
		const addressTDNci5 = "0x0000000000000000000000000000000000000000"
		const booloa4K82N = await Token50X100yPpLI8l.decreaseApproval.call(address9LeQXK, uintKDhzAvF, {from: accounts[0]});
//		await Token50X100yPpLI8l.setTokenContract.call(addressVgfHJwX, {from: accounts[1]});
//		const boolv0BJTxu = await Token50X100yPpLI8l.transfer.call(addressTDNci5, uintQehCmaV, {from: accounts[4]});

		assert.equal(booloa4K82N, true)
		await expect(Token50X100yPpLI8l.setTokenContract.call(addressVgfHJwX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})