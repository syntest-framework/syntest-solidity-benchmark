const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisdUoWXTx = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxeC36mn = BigInt("734")
		const addressigYO3x1 = accounts[3]
		const uintBpllmeF = BigInt("492")
		const uintRnxIOb0 = BigInt("658")
		const addressKs5aVF5 = accounts[0]
		const uintjruXwZ5 = BigInt("676")
		const addressyvzzXya = accounts[2]
		const uinteY5j4hb = BigInt("1065")
		const uintrs1hchA = BigInt("921")
		const uintopXdzqU = BigInt("1377")
		const addressdUCX189 = accounts[4]
		const boolfyMjemo = await LedgisdUoWXTx.increaseAllowance.call(addressigYO3x1, uintxeC36mn, {from: accounts[2]});
		const addressWJffqY4 = await LedgisdUoWXTx.lock.call(addressKs5aVF5, uintRnxIOb0, uintBpllmeF, {from: accounts[4]});
		const addressKI3w0q3 = await LedgisdUoWXTx.burn.call(addressyvzzXya, uintjruXwZ5, {from: accounts[1]});
		const uint2561BtenY = await LedgisdUoWXTx.afterTime.call(uinteY5j4hb, {from: accounts[4]});
		const boolTh5QJZC = await LedgisdUoWXTx.transferWithLockAfter.call(addressdUCX189, uintopXdzqU, uintrs1hchA, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisBt7Haht = await Ledgis.new({from: accounts[1]});
		const addressVstEtUo = accounts[5]
		const uintQJQic0O = BigInt("120")
		const addressK2vvTLx = accounts[3]
		const addressFSdmzIy = accounts[3]
		const addressHgqmNiZ = await LedgisBt7Haht.freeze.call(addressVstEtUo, {from: accounts[2]});
		const uint256D1gHDjv = await LedgisBt7Haht.afterTime.call(uintQJQic0O, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CaY0MKP = await LedgisBt7Haht.balanceOf.call(addressK2vvTLx, {from: accounts[1]});
		await LedgisBt7Haht.renounceOwnership.call({from: accounts[0]});
		const boolbEdleK = await LedgisBt7Haht.isFrozen.call(addressFSdmzIy, {from: accounts[2]});

		await expect(LedgisBt7Haht.freeze.call(addressVstEtUo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNxriVrv = await Ledgis.new({from: accounts[1]});
		const uintrm8BzMk = BigInt("1542")
		const addressTHoVAZ8 = accounts[3]
		const uintRJhfXyu = BigInt("1471")
		const addressdeKxOIg = accounts[0]
		const uintZMhu5gy = BigInt("1693")
		const addressVi1kmzc = accounts[2]
		const uintQYj1WMx = BigInt("1355")
		const uintmgb6Mzu = BigInt("511")
		const addressi2fuS2r = accounts[0]
		await LedgisNxriVrv.onlyOwner.call({from: accounts[2]});
		const boolkChqFb = await LedgisNxriVrv.transfer.call(addressTHoVAZ8, uintrm8BzMk, {from: accounts[2]});
		const boolLZn3ro9 = await LedgisNxriVrv.transfer.call(addressdeKxOIg, uintRJhfXyu, {from: accounts[0]});
		const boolAc3Qr4U = await LedgisNxriVrv.increaseAllowance.call(addressVi1kmzc, uintZMhu5gy, {from: accounts[0]});
		const booljUMf1rk = await LedgisNxriVrv.transferWithLockAfter.call(addressi2fuS2r, uintmgb6Mzu, uintQYj1WMx, {from: accounts[1]});
		await LedgisNxriVrv.pause.call({from: accounts[4]});

		await expect(LedgisNxriVrv.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHZizISR = await Ledgis.new({from: accounts[3]});
		const addressH3EQoC5 = accounts[0]
		const addressKPixLlo = accounts[2]
		const addressFTZ6XA = accounts[3]
		const uint256SUurP4R = await LedgisHZizISR.lockCount.call(addressH3EQoC5, {from: "0x0000000000000000000000000000000000000001"});
		const addressUVMCEL = await LedgisHZizISR.freeze.call(addressKPixLlo, {from: accounts[0]});
		const addressWRmIi2 = await LedgisHZizISR.transferOwnership.call(addressFTZ6XA, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisHZizISR.whenPaused.call({from: accounts[0]});
		await LedgisHZizISR.pause.call({from: accounts[2]});

		assert.equal(uint256SUurP4R, BigInt("0"))
		await expect(LedgisHZizISR.freeze.call(addressKPixLlo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisVtk29rR = await Ledgis.new({from: accounts[3]});
		const uintQXYTKzu = BigInt("1123")
		const addresstaIOuOG = accounts[0]
		const uintpEfJHFK = BigInt("372")
		const uintuNSEB0x = BigInt("1468")
		const addresspCOzumq = accounts[5]
		const uintKuCLjPZ = BigInt("82")
		const addressgGsksAn = accounts[3]
		await LedgisVtk29rR.lockState.call(addresstaIOuOG, uintQXYTKzu, {from: accounts[3]});
		await LedgisVtk29rR.renounceOwnership.call({from: accounts[4]});
		const addressMiRv1yA = await LedgisVtk29rR.lock.call(addresspCOzumq, uintuNSEB0x, uintpEfJHFK, {from: accounts[0]});
		await LedgisVtk29rR.lockState.call(addressgGsksAn, uintKuCLjPZ, {from: accounts[1]});

		await expect(LedgisVtk29rR.lockState.call(addresstaIOuOG, uintQXYTKzu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyLaJg3l = await Ledgis.new({from: accounts[3]});
		const uinto89mVCr = BigInt("590")
		const addressELtcyXM = accounts[1]
		const uintrpTXePp = BigInt("146")
		const uinthESdtr = BigInt("339")
		const addressSTd3tcs = accounts[0]
		const addressF2BiPXV = await LedgisyLaJg3l.unlock.call(addressELtcyXM, uinto89mVCr, {from: accounts[3]});
		const addresscrzb3g9 = await LedgisyLaJg3l.lockAfter.call(addressSTd3tcs, uinthESdtr, uintrpTXePp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisyLaJg3l.unlock.call(addressELtcyXM, uinto89mVCr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFg7Xed1 = await Ledgis.new({from: accounts[3]});
		const uintr4C51A = BigInt("768")
		const addressb7O1RU1 = accounts[0]
		await LedgisFg7Xed1.unpause.call({from: accounts[3]});
		await LedgisFg7Xed1.unpause.call({from: accounts[4]});
		const addressEB8N9f6 = await LedgisFg7Xed1.burn.call(addressb7O1RU1, uintr4C51A, {from: accounts[4]});
		await LedgisFg7Xed1.onlyOwner.call({from: accounts[3]});

		await expect(LedgisFg7Xed1.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHZizISR = await Ledgis.new({from: accounts[3]});
		const uintUQnVHGc = BigInt("1635")
		const addressCVReso = accounts[3]
		const addressPWrUH53 = accounts[0]
		const addressfmsv0F = accounts[2]
		const address8lvpUM = accounts[3]
		const addressEGVt0b3 = accounts[1]
		const boolcLKrwB = await LedgisHZizISR.increaseAllowance.call(addressCVReso, uintUQnVHGc, {from: accounts[1]});
		const uint256SUurP4R = await LedgisHZizISR.lockCount.call(addressPWrUH53, {from: "0x0000000000000000000000000000000000000001"});
		const addressUVMCEL = await LedgisHZizISR.freeze.call(addressfmsv0F, {from: accounts[0]});
		const addressWRmIi2 = await LedgisHZizISR.transferOwnership.call(address8lvpUM, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisHZizISR.whenPaused.call({from: accounts[0]});
		const addressS3E6eyb = await LedgisHZizISR.freeze.call(addressEGVt0b3, {from: accounts[0]});
		await LedgisHZizISR.pause.call({from: accounts[2]});

		assert.equal(boolcLKrwB, true)
		assert.equal(uint256SUurP4R, BigInt("0"))
		await expect(LedgisHZizISR.freeze.call(addressfmsv0F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisBt1CMM = await Ledgis.new({from: accounts[5]});
		const uintgAlUbmJ = BigInt("1154")
		const addressjcuHVA = accounts[1]
		const uintTT9PdP = BigInt("199")
		const addressAX2NEo2 = accounts[4]
		const boolpSLNqM = await LedgisBt1CMM.decreaseAllowance.call(addressjcuHVA, uintgAlUbmJ, {from: accounts[0]});
		const boolVqy6a7e = await LedgisBt1CMM.mint.call(addressAX2NEo2, uintTT9PdP, {from: accounts[3]});
		await LedgisBt1CMM.unpause.call({from: accounts[3]});
		await LedgisBt1CMM.whenPaused.call({from: accounts[2]});

		await expect(LedgisBt1CMM.decreaseAllowance.call(addressjcuHVA, uintgAlUbmJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyLaJg3l = await Ledgis.new({from: accounts[3]});
		const addressKCRXvKz = accounts[3]
		const uintDJQzPtj = BigInt("1947")
		const addressZvuFMwI = accounts[4]
		const addressq30Wg4e = accounts[0]
		const uintXZYJ3Vp = BigInt("146")
		const uintyrfZrpU = BigInt("339")
		const addresspXsHlMC = accounts[1]
		const boolcxWkj22 = await LedgisyLaJg3l.isFrozen.call(addressKCRXvKz, {from: accounts[2]});
		const boolDYcTeMN = await LedgisyLaJg3l.transferFrom.call(addressq30Wg4e, addressZvuFMwI, uintDJQzPtj, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisyLaJg3l.whenPaused.call({from: accounts[0]});
		const addresscrzb3g9 = await LedgisyLaJg3l.lockAfter.call(addresspXsHlMC, uintyrfZrpU, uintXZYJ3Vp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcxWkj22, false)
		await expect(LedgisyLaJg3l.transferFrom.call(addressq30Wg4e, addressZvuFMwI, uintDJQzPtj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyLaJg3l = await Ledgis.new({from: accounts[3]});
		const addressK4TzMul = accounts[3]
		const addressue7bubj = accounts[2]
		const uinteC6FwPe = BigInt("590")
		const addressFsI0wO = accounts[2]
		const uintvVgonYS = BigInt("1947")
		const addressrZxher = accounts[4]
		const addresszknRN28 = accounts[0]
		const uintzqOtZD1 = BigInt("1202")
		const addressrBeHxgd = "0x0000000000000000000000000000000000000001"
		const uintpnY6C4u = BigInt("146")
		const uintxtIvORt = BigInt("339")
		const addressArzob1m = accounts[1]
		const uint256XPUFBSO = await LedgisyLaJg3l.allowance.call(addressue7bubj, addressK4TzMul, {from: "0x0000000000000000000000000000000000000001"});
		const addressF2BiPXV = await LedgisyLaJg3l.unlock.call(addressFsI0wO, uinteC6FwPe, {from: accounts[3]});
		const boolDYcTeMN = await LedgisyLaJg3l.transferFrom.call(addresszknRN28, addressrZxher, uintvVgonYS, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisyLaJg3l.lockState.call(addressrBeHxgd, uintzqOtZD1, {from: accounts[3]});
		await LedgisyLaJg3l.whenPaused.call({from: accounts[3]});
		const addresscrzb3g9 = await LedgisyLaJg3l.lockAfter.call(addressArzob1m, uintxtIvORt, uintpnY6C4u, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256XPUFBSO, BigInt("0"))
		await expect(LedgisyLaJg3l.unlock.call(addressFsI0wO, uinteC6FwPe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyLaJg3l = await Ledgis.new({from: accounts[3]});
		const uintGYeuUEn = BigInt("1586")
		const address631Bw2 = accounts[2]
		const uinttxYGxk5 = BigInt("590")
		const addressniBhLWJ = accounts[1]
		const addresscpbb2M = accounts[3]
		const uintEE3oLJu = BigInt("2005")
		const addressjoCpoB3 = "0x0000000000000000000000000000000000000001"
		const uinthSOBjab = BigInt("128")
		const uintI9VMXgO = BigInt("339")
		const addressHbFtKAq = accounts[0]
		const boolVG3Q7Gi = await LedgisyLaJg3l.approve.call(address631Bw2, uintGYeuUEn, {from: accounts[4]});
		const addressF2BiPXV = await LedgisyLaJg3l.unlock.call(addressniBhLWJ, uinttxYGxk5, {from: accounts[3]});
		const boolWCqNSHt = await LedgisyLaJg3l.isFrozen.call(addresscpbb2M, {from: accounts[0]});
		const boolF7SKkFb = await LedgisyLaJg3l.decreaseAllowance.call(addressjoCpoB3, uintEE3oLJu, {from: accounts[5]});
		const addresscrzb3g9 = await LedgisyLaJg3l.lockAfter.call(addressHbFtKAq, uintI9VMXgO, uinthSOBjab, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVG3Q7Gi, true)
		await expect(LedgisyLaJg3l.unlock.call(addressniBhLWJ, uinttxYGxk5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFg7Xed1 = await Ledgis.new({from: accounts[3]});
		const uintnU5cLVB = BigInt("14")
		const addressVUm34X = accounts[3]
		const boolKOYgimy = await LedgisFg7Xed1.transfer.call(addressVUm34X, uintnU5cLVB, {from: accounts[4]});
		await LedgisFg7Xed1.onlyOwner.call({from: accounts[3]});

		await expect(LedgisFg7Xed1.transfer.call(addressVUm34X, uintnU5cLVB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyucI5s = await Ledgis.new({from: accounts[4]});
		const addressvraQcKg = accounts[0]
		const addressaXZrA3x = accounts[1]
		const addressc9kRlpm = accounts[5]
		const addressDBZ42pY = await LedgisyucI5s.freeze.call(addressvraQcKg, {from: accounts[4]});
		const addressO5Bc9bW = await LedgisyucI5s.unfreeze.call(addressaXZrA3x, {from: accounts[4]});
		const uint256IBad7Qs = await LedgisyucI5s.balanceOf.call(addressc9kRlpm, {from: accounts[2]});

		assert.equal(uint256IBad7Qs, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisLqixiMB = await Ledgis.new({from: accounts[4]});
		const uintUtXf3pu = BigInt("231")
		const uintozfnk2I = BigInt("356")
		const addressL9BhDC4 = accounts[1]
		const uintsK9sCx = BigInt("1455")
		const addressrryjBsu = accounts[1]
		const uintc4JvfEy = BigInt("600")
		const uintTBgAewx = BigInt("81")
		const addressZMRFtes = accounts[3]
		const uintXJUAmpn = BigInt("1425")
		const uintMldP4b3 = BigInt("363")
		const addresslThfvYF = accounts[0]
		const boolZaqfKf1 = await LedgisLqixiMB.transferWithLockAfter.call(addressL9BhDC4, uintozfnk2I, uintUtXf3pu, {from: accounts[4]});
		await LedgisLqixiMB.lockState.call(addressrryjBsu, uintsK9sCx, {from: accounts[4]});
		await LedgisLqixiMB.pause.call({from: accounts[4]});
		const boolqwxTdN3 = await LedgisLqixiMB.transferWithLockAfter.call(addressZMRFtes, uintTBgAewx, uintc4JvfEy, {from: accounts[2]});
		const addressFMULbas = await LedgisLqixiMB.lock.call(addresslThfvYF, uintMldP4b3, uintXJUAmpn, {from: accounts[3]});

		assert.equal(boolZaqfKf1, true)
		await expect(LedgisLqixiMB.lockState.call(addressrryjBsu, uintsK9sCx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFg7Xed1 = await Ledgis.new({from: accounts[3]});
		const uintfFZWESD = BigInt("0")
		const addresshmnJuif = accounts[4]
		const addressiHsKLRg = accounts[2]
		const uintFdwVEAH = BigInt("292")
		const uintgzSNyxl = BigInt("176")
		const addressQd0ukB7 = accounts[4]
		const uintaB0BXE6 = BigInt("1675")
		const addresshgoY28b = accounts[0]
		const uinttkW6ZwI = BigInt("1625")
		const uintTEaMsC3 = BigInt("1841")
		const address7FUPYp = accounts[0]
		const boolKOYgimy = await LedgisFg7Xed1.transfer.call(addresshmnJuif, uintfFZWESD, {from: accounts[4]});
		await LedgisFg7Xed1.renounceOwnership.call({from: accounts[3]});
		await LedgisFg7Xed1.whenNotFrozen.call({from: accounts[2]});
		const uint256TkQei9U = await LedgisFg7Xed1.lockCount.call(addressiHsKLRg, {from: accounts[4]});
		const booloGmoGyB = await LedgisFg7Xed1.transferWithLock.call(addressQd0ukB7, uintgzSNyxl, uintFdwVEAH, {from: "0x0000000000000000000000000000000000000001"});
		const boolHaxs0jt = await LedgisFg7Xed1.transfer.call(addresshgoY28b, uintaB0BXE6, {from: accounts[4]});
		const addressOPWm2jN = await LedgisFg7Xed1.lockAfter.call(address7FUPYp, uintTEaMsC3, uinttkW6ZwI, {from: accounts[2]});
		await LedgisFg7Xed1.onlyOwner.call({from: accounts[3]});

		assert.equal(boolKOYgimy, true)
		await expect(LedgisFg7Xed1.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyLaJg3l = await Ledgis.new({from: accounts[3]});
		const addressMQw5gDU = accounts[3]
		const addressslaMr6z = accounts[0]
		const uintizQFH6k = BigInt("1203")
		const uintBnhvYaj = BigInt("590")
		const addressUzgVL34 = accounts[2]
		const uintXWSUlmP = BigInt("904")
		const addressV8TVn9z = accounts[1]
		const uint256qozGF31 = await LedgisyLaJg3l.balanceOf.call(addressMQw5gDU, {from: accounts[4]});
		const uint256h84nSoC = await LedgisyLaJg3l.lockCount.call(addressslaMr6z, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iiMpQau = await LedgisyLaJg3l.afterTime.call(uintizQFH6k, {from: accounts[2]});
		const addressF2BiPXV = await LedgisyLaJg3l.unlock.call(addressUzgVL34, uintBnhvYaj, {from: accounts[3]});
		const boolChAWGge = await LedgisyLaJg3l.approve.call(addressV8TVn9z, uintXWSUlmP, {from: accounts[5]});
		await LedgisyLaJg3l.onlyOwner.call({from: accounts[5]});

		assert.equal(uint256h84nSoC, BigInt("0"))
		assert.equal(uint256iiMpQau, BigInt("1630233330"))
		assert.equal(uint256qozGF31, BigInt("10000000000000"))
		await expect(LedgisyLaJg3l.unlock.call(addressUzgVL34, uintBnhvYaj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFg7Xed1 = await Ledgis.new({from: accounts[3]});
		const uinteVw3Tcr = BigInt("914")
		const addressxjlIN1c = "0x0000000000000000000000000000000000000001"
		const uintxdpqWXh = BigInt("14")
		const addressjVs6IAL = accounts[3]
		const boolMJP0d8q = await LedgisFg7Xed1.transfer.call(addressxjlIN1c, uinteVw3Tcr, {from: accounts[3]});
		await LedgisFg7Xed1.pause.call({from: accounts[3]});
		const boolKOYgimy = await LedgisFg7Xed1.transfer.call(addressjVs6IAL, uintxdpqWXh, {from: accounts[4]});

		assert.equal(boolMJP0d8q, true)
		await expect(LedgisFg7Xed1.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissnMSc94 = await Ledgis.new({from: accounts[2]});
		const addressKIpk24U = accounts[2]
		const addresse0T9OM5 = accounts[1]
		const uintb8RFeY3 = BigInt("385")
		const uintGNHKXlA = BigInt("1071")
		const addressd8kprz = accounts[0]
		const addressGo2b9JJ = await LedgissnMSc94.transferOwnership.call(addressKIpk24U, {from: accounts[2]});
		const addressWows62i = await LedgissnMSc94.transferOwnership.call(addresse0T9OM5, {from: accounts[3]});
		const addressrq4weq2 = await LedgissnMSc94.lock.call(addressd8kprz, uintGNHKXlA, uintb8RFeY3, {from: accounts[3]});

		await expect(LedgissnMSc94.transferOwnership.call(addresse0T9OM5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFg7Xed1 = await Ledgis.new({from: accounts[3]});
		const uintCKuGO7E = BigInt("0")
		const addressIS6XeZ = accounts[4]
		const addressgbHK7XZ = accounts[3]
		const addressXv2OqvJ = accounts[1]
		const addressFoVfjcK = accounts[3]
		const uinttUmN0Z3 = BigInt("138")
		const addressdVm5ld9 = accounts[5]
		const addressuHPKLh0 = accounts[4]
		const uintfbYRKDT = BigInt("292")
		const uintSIyKj0 = BigInt("176")
		const addresshQnwk1Z = accounts[4]
		const uintk6NmJEk = BigInt("835")
		const addressRZnGAm = accounts[1]
		const uint2gBzND = BigInt("1625")
		const uintaVtM0q = BigInt("1841")
		const addressAgQAKEV = accounts[0]
		const uintznObv5n = BigInt("1554")
		const uinthTAZAdX = BigInt("845")
		const addressw8jyLO8 = accounts[1]
		const addresssawPnOz = accounts[0]
		const boolKOYgimy = await LedgisFg7Xed1.transfer.call(addressIS6XeZ, uintCKuGO7E, {from: accounts[4]});
		const uint256Khsd7q7 = await LedgisFg7Xed1.currentTime.call({from: accounts[3]});
		const addressvGaQrX = await LedgisFg7Xed1.transferOwnership.call(addressgbHK7XZ, {from: accounts[3]});
		await LedgisFg7Xed1.renounceOwnership.call({from: accounts[3]});
		await LedgisFg7Xed1.whenNotFrozen.call({from: accounts[2]});
		const addressH4pmOrv = await LedgisFg7Xed1.freeze.call(addressXv2OqvJ, {from: accounts[1]});
		const uint256TkQei9U = await LedgisFg7Xed1.lockCount.call(addressFoVfjcK, {from: accounts[4]});
		const boolfCKhjA9 = await LedgisFg7Xed1.transferFrom.call(addressuHPKLh0, addressdVm5ld9, uinttUmN0Z3, {from: accounts[0]});
		const booloGmoGyB = await LedgisFg7Xed1.transferWithLock.call(addresshQnwk1Z, uintSIyKj0, uintfbYRKDT, {from: "0x0000000000000000000000000000000000000001"});
		const boolHaxs0jt = await LedgisFg7Xed1.transfer.call(addressRZnGAm, uintk6NmJEk, {from: accounts[4]});
		const addressOPWm2jN = await LedgisFg7Xed1.lockAfter.call(addressAgQAKEV, uintaVtM0q, uint2gBzND, {from: accounts[2]});
		const uint256ejfuPHZ = await LedgisFg7Xed1.afterTime.call(uintznObv5n, {from: accounts[0]});
		const boolpAuUWwx = await LedgisFg7Xed1.transferFrom.call(addresssawPnOz, addressw8jyLO8, uinthTAZAdX, {from: accounts[5]});
		await LedgisFg7Xed1.onlyOwner.call({from: accounts[3]});

		assert.equal(boolKOYgimy, true)
		assert.equal(uint256Khsd7q7, BigInt("1630232128"))
		await expect(LedgisFg7Xed1.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZw9TCI = await Ledgis.new({from: accounts[1]});
		const uintuDZqZVH = BigInt("530")
		const addressKPUxhYZ = accounts[2]
		await LedgisZw9TCI.renounceOwnership.call({from: accounts[1]});
		const uint256qtmD7PB = await LedgisZw9TCI.totalSupply.call({from: accounts[5]});
		const uint256Z3K4Edr = await LedgisZw9TCI.afterTime.call(uintuDZqZVH, {from: accounts[4]});
		const uint256zil6mW9 = await LedgisZw9TCI.balanceOf.call(addressKPUxhYZ, {from: accounts[0]});
		await LedgisZw9TCI.whenNotFrozen.call({from: accounts[0]});

		await expect(LedgisZw9TCI.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyLaJg3l = await Ledgis.new({from: accounts[3]});
		const uintqEyO26z = BigInt("1256")
		const addressC4mhRWA = "0x0000000000000000000000000000000000000001"
		const uinteKxrRCE = BigInt("290")
		const addressE2Kk7Wm = accounts[4]
		const uintFTzoQi = BigInt("523")
		const uintzFoGFcg = BigInt("2044")
		const addressBa6dqmo = accounts[2]
		const uintRgUDeix = BigInt("1768")
		const addressOyw2JiP = accounts[1]
		const boolJnPmbpR = await LedgisyLaJg3l.approve.call(addressC4mhRWA, uintqEyO26z, {from: accounts[0]});
		const boolUCeuqEi = await LedgisyLaJg3l.increaseAllowance.call(addressE2Kk7Wm, uinteKxrRCE, {from: accounts[3]});
		const addressS4VlFn8 = await LedgisyLaJg3l.lockAfter.call(addressBa6dqmo, uintzFoGFcg, uintFTzoQi, {from: accounts[3]});
		const addressF2BiPXV = await LedgisyLaJg3l.unlock.call(addressOyw2JiP, uintRgUDeix, {from: accounts[3]});

		assert.equal(boolJnPmbpR, true)
		assert.equal(boolUCeuqEi, true)
		await expect(LedgisyLaJg3l.lockAfter.call(addressBa6dqmo, uintzFoGFcg, uintFTzoQi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyucI5s = await Ledgis.new({from: accounts[4]});
		const uintGskbKV = BigInt("605")
		const addressl7cfgCp = accounts[0]
		const addressUxtRSGj = accounts[0]
		const uintlaykFye = BigInt("748")
		const addresswnS6KEd = accounts[3]
		const addressK066FP = accounts[1]
		const addresstwZhvZX = await LedgisyucI5s.burn.call(addressl7cfgCp, uintGskbKV, {from: accounts[4]});
		const addressDBZ42pY = await LedgisyucI5s.freeze.call(addressUxtRSGj, {from: accounts[4]});
		const boolUZqoKwa = await LedgisyucI5s.transferFrom.call(addressK066FP, addresswnS6KEd, uintlaykFye, {from: accounts[4]});
		await LedgisyucI5s.whenNotPaused.call({from: accounts[2]});

		await expect(LedgisyucI5s.burn.call(addressl7cfgCp, uintGskbKV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisyucI5s = await Ledgis.new({from: accounts[4]});
		const addressXZi3GI5 = accounts[7]
		const uintGLaW0WB = BigInt("704")
		const uintZJO6C9d = BigInt("1784")
		const addressnrSOQsF = accounts[0]
		const uint256IBad7Qs = await LedgisyucI5s.balanceOf.call(addressXZi3GI5, {from: accounts[2]});
		const boolFrE3YYz = await LedgisyucI5s.transferWithLock.call(addressnrSOQsF, uintZJO6C9d, uintGLaW0WB, {from: accounts[4]});
		const uint256XMoasYI = await LedgisyucI5s.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFrE3YYz, true)
		assert.equal(uint256IBad7Qs, BigInt("0"))
		assert.equal(uint256XMoasYI, BigInt("10000000000000"))
	});
})