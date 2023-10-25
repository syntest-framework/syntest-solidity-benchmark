const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisPK8Aija = await Ledgis.new({from: accounts[2]});
		const addresssYT6g2y = accounts[0]
		const uintLLcw9c1 = BigInt("579")
		const addressfOUgLOD = accounts[0]
		const addresskJKwis = accounts[4]
		const addresssvQZjiy = accounts[2]
		const uintmzQ4RGK = BigInt("1057")
		const addresseyyVJr5 = accounts[4]
//		await LedgisPK8Aija.pause.call({from: accounts[3]});
//		const booluYusXMR = await LedgisPK8Aija.isFrozen.call(addresssYT6g2y, {from: accounts[2]});
//		const booljB7XEkz = await LedgisPK8Aija.increaseAllowance.call(addressfOUgLOD, uintLLcw9c1, {from: accounts[0]});
//		const bool5YMpXJ = await LedgisPK8Aija.isFrozen.call(addresskJKwis, {from: accounts[3]});
//		const uint256gHNEbia = await LedgisPK8Aija.lockCount.call(addresssvQZjiy, {from: accounts[4]});
//		const addressP684Grr = await LedgisPK8Aija.burn.call(addresseyyVJr5, uintmzQ4RGK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisPK8Aija.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisrJ7BeG = await Ledgis.new({from: accounts[3]});
		const uinty9tRghK = BigInt("1609")
		const addressE4jAT3 = accounts[2]
		const uinthKmAexT = BigInt("530")
		const uintDHLkqb6 = BigInt("1532")
		const addressQG9hGZ5 = "0x0000000000000000000000000000000000000001"
		const uintzlTKxCu = BigInt("720")
		const addresszZetSV = accounts[2]
		const uintZ2xhCpy = BigInt("1551")
		const uintT6il8IW = BigInt("906")
		const addressIBFyaN = accounts[2]
		const addressHeLwkJ = accounts[3]
		const addressKeg8zEl = accounts[0]
		const uintLI5VY5 = BigInt("655")
		const addressqDUuI9v = accounts[0]
		const boolw6k2ny9 = await LedgisrJ7BeG.increaseAllowance.call(addressE4jAT3, uinty9tRghK, {from: accounts[4]});
//		const boolmSgW0F2 = await LedgisrJ7BeG.transferWithLockAfter.call(addressQG9hGZ5, uintDHLkqb6, uinthKmAexT, {from: accounts[0]});
//		const boolQvJUzdV = await LedgisrJ7BeG.approve.call(addresszZetSV, uintzlTKxCu, {from: accounts[3]});
//		const boolOnLWsFp = await LedgisrJ7BeG.transferWithLock.call(addressIBFyaN, uintT6il8IW, uintZ2xhCpy, {from: accounts[1]});
//		const uint256XWyfrtn = await LedgisrJ7BeG.allowance.call(addressKeg8zEl, addressHeLwkJ, {from: accounts[1]});
//		await LedgisrJ7BeG.lockState.call(addressqDUuI9v, uintLI5VY5, {from: accounts[0]});

		assert.equal(boolw6k2ny9, true)
		await expect(LedgisrJ7BeG.transferWithLockAfter.call(addressQG9hGZ5, uintDHLkqb6, uinthKmAexT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJEeQtaG = await Ledgis.new({from: accounts[3]});
		const addressSN1NaT3 = accounts[4]
		const uintfZ4EmWD = BigInt("2009")
		const addressj2sM5Sv = accounts[4]
		const addressC6f0N9R = accounts[1]
		const uintKs2JjZA = BigInt("1354")
		const addressnCu6gL0 = accounts[3]
		const addressVK53Yk = accounts[4]
		const boolkSbA5s9 = await LedgisJEeQtaG.isFrozen.call(addressSN1NaT3, {from: accounts[1]});
//		const boolFy34T3Q = await LedgisJEeQtaG.transferFrom.call(addressC6f0N9R, addressj2sM5Sv, uintfZ4EmWD, {from: accounts[0]});
//		const bool8NTZ0x = await LedgisJEeQtaG.transfer.call(addressnCu6gL0, uintKs2JjZA, {from: accounts[0]});
//		const uint256rIk20Q = await LedgisJEeQtaG.lockCount.call(addressVK53Yk, {from: accounts[0]});

		assert.equal(boolkSbA5s9, false)
		await expect(LedgisJEeQtaG.transferFrom.call(addressC6f0N9R, addressj2sM5Sv, uintfZ4EmWD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiszYfpA6r = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshw4hxU7 = accounts[4]
		await LedgiszYfpA6r.whenNotPaused.call({from: accounts[1]});
		const uint256X8F5akR = await LedgiszYfpA6r.balanceOf.call(addresshw4hxU7, {from: accounts[0]});
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const uintakAzker = BigInt("1020")
		const uinta1djDcJ = BigInt("293")
		const addresspaTZVos = accounts[3]
		const booljtKQ6ZK = await Ledgis20lMiN.transferWithLock.call(addresspaTZVos, uinta1djDcJ, uintakAzker, {from: accounts[5]});
//		await Ledgis20lMiN.whenNotPaused.call({from: accounts[1]});

		assert.equal(booljtKQ6ZK, true)
		await expect(Ledgis20lMiN.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const uintBwgGJjf = BigInt("1020")
		const uinthcq0cuE = BigInt("270")
		const addressrPwEwCU = accounts[3]
		const uintayGI6c7 = BigInt("1632")
		const addresshWzj7rP = accounts[4]
		const uinthtpe3RV = BigInt("597")
		const addressfdCTTNj = accounts[0]
		const booljtKQ6ZK = await Ledgis20lMiN.transferWithLock.call(addressrPwEwCU, uinthcq0cuE, uintBwgGJjf, {from: accounts[5]});
		const bool4EC8je = await Ledgis20lMiN.increaseAllowance.call(addresshWzj7rP, uintayGI6c7, {from: accounts[4]});
//		const boolollKlJM = await Ledgis20lMiN.transfer.call(addressfdCTTNj, uinthtpe3RV, {from: accounts[4]});

		assert.equal(bool4EC8je, true)
		assert.equal(booljtKQ6ZK, true)
		await expect(Ledgis20lMiN.transfer.call(addressfdCTTNj, uinthtpe3RV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJEeQtaG = await Ledgis.new({from: accounts[3]});
		const uintfdTNAjl = BigInt("1584")
		const addressB2IrpQV = accounts[5]
		const addresswHi2lPa = accounts[4]
		const addresszBt2pD = accounts[1]
		const uint8QONGM = BigInt("2009")
		const address4E5SA7 = accounts[5]
		const addressRc0EQw3 = accounts[1]
		const uintORJgM9T = BigInt("1334")
		const addressMFY7yak = accounts[3]
		const addressauGDgbb = "0x0000000000000000000000000000000000000001"
		const uintKI0Avwx = BigInt("261")
		const addressXzomwt8 = accounts[4]
		const addressKWJum7q = accounts[4]
//		const boolGxCPLs = await LedgisJEeQtaG.decreaseAllowance.call(addressB2IrpQV, uintfdTNAjl, {from: accounts[3]});
//		const boolkSbA5s9 = await LedgisJEeQtaG.isFrozen.call(addresswHi2lPa, {from: accounts[1]});
//		const addresseDkTijv = await LedgisJEeQtaG.transferOwnership.call(addresszBt2pD, {from: accounts[5]});
//		const boolFy34T3Q = await LedgisJEeQtaG.transferFrom.call(addressRc0EQw3, address4E5SA7, uint8QONGM, {from: accounts[0]});
//		const bool8NTZ0x = await LedgisJEeQtaG.transfer.call(addressMFY7yak, uintORJgM9T, {from: accounts[0]});
//		const boolBZXXLbw = await LedgisJEeQtaG.isFrozen.call(addressauGDgbb, {from: accounts[1]});
//		const booltUSBDWL = await LedgisJEeQtaG.approve.call(addressXzomwt8, uintKI0Avwx, {from: accounts[1]});
//		const uint256rIk20Q = await LedgisJEeQtaG.lockCount.call(addressKWJum7q, {from: accounts[0]});

		await expect(LedgisJEeQtaG.decreaseAllowance.call(addressB2IrpQV, uintfdTNAjl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJEeQtaG = await Ledgis.new({from: accounts[3]});
		const addressowIbmig = accounts[2]
		const addressVfPI8Yd = accounts[4]
		const uintraP7IIB = BigInt("2009")
		const addressuFKZmVI = accounts[4]
		const addressNAb0NNw = accounts[1]
		const uintwaxFs9I = BigInt("1382")
		const addresslZpW6Yk = accounts[4]
		const addressykwP1Z = accounts[4]
		const addressghXjva = accounts[0]
		const addresskWbR0ga = await LedgisJEeQtaG.transferOwnership.call(addressowIbmig, {from: accounts[3]});
		const boolkSbA5s9 = await LedgisJEeQtaG.isFrozen.call(addressVfPI8Yd, {from: accounts[1]});
//		const boolFy34T3Q = await LedgisJEeQtaG.transferFrom.call(addressNAb0NNw, addressuFKZmVI, uintraP7IIB, {from: accounts[0]});
//		await LedgisJEeQtaG.pause.call({from: accounts[4]});
//		const bool8NTZ0x = await LedgisJEeQtaG.transfer.call(addresslZpW6Yk, uintwaxFs9I, {from: accounts[0]});
//		const uint256rIk20Q = await LedgisJEeQtaG.lockCount.call(addressykwP1Z, {from: accounts[0]});
//		await LedgisJEeQtaG.whenPaused.call({from: accounts[0]});
//		const addressdT8yQOi = await LedgisJEeQtaG.transferOwnership.call(addressghXjva, {from: accounts[0]});

		assert.equal(boolkSbA5s9, false)
		await expect(LedgisJEeQtaG.transferFrom.call(addressNAb0NNw, addressuFKZmVI, uintraP7IIB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJEeQtaG = await Ledgis.new({from: accounts[3]});
		const addressFsDcI0a = accounts[4]
		const uintGx1b9b9 = BigInt("2009")
		const addressiIZcq0q = accounts[4]
		const addressmSdnoS = accounts[1]
		const uintR7MQZNF = BigInt("1354")
		const addressNXGchBR = accounts[5]
		const addressBNlvWT = accounts[4]
		const boolkSbA5s9 = await LedgisJEeQtaG.isFrozen.call(addressFsDcI0a, {from: accounts[1]});
		const uint256RJ2N3xI = await LedgisJEeQtaG.totalSupply.call({from: accounts[4]});
//		const boolFy34T3Q = await LedgisJEeQtaG.transferFrom.call(addressmSdnoS, addressiIZcq0q, uintGx1b9b9, {from: accounts[0]});
//		await LedgisJEeQtaG.pause.call({from: accounts[4]});
//		const bool8NTZ0x = await LedgisJEeQtaG.transfer.call(addressNXGchBR, uintR7MQZNF, {from: accounts[0]});
//		const uint256rIk20Q = await LedgisJEeQtaG.lockCount.call(addressBNlvWT, {from: accounts[0]});
//		await LedgisJEeQtaG.whenPaused.call({from: accounts[0]});

		assert.equal(boolkSbA5s9, false)
		assert.equal(uint256RJ2N3xI, BigInt("10000000000000"))
		await expect(LedgisJEeQtaG.transferFrom.call(addressmSdnoS, addressiIZcq0q, uintGx1b9b9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistrLg9b3 = await Ledgis.new({from: accounts[2]});
		const uintja4ziZc = BigInt("1245")
		const addressgKj9v5 = accounts[4]
		const uint256MDYoxU8 = await LedgistrLg9b3.currentTime.call({from: accounts[4]});
//		await LedgistrLg9b3.whenNotFrozen.call({from: accounts[3]});
//		const booloQ1Xay = await LedgistrLg9b3.mint.call(addressgKj9v5, uintja4ziZc, {from: accounts[4]});

		assert.equal(uint256MDYoxU8, BigInt("1630233300"))
		await expect(LedgistrLg9b3.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const uintpB2DCbS = BigInt("429")
		const addressbIlbxrm = accounts[3]
		const addresswR2TOoo = accounts[2]
		const uintKrHSaST = BigInt("597")
		const addressMn625me = accounts[0]
		const boolX8DcGSz = await Ledgis20lMiN.increaseAllowance.call(addressbIlbxrm, uintpB2DCbS, {from: accounts[4]});
		const uint2564tOSbn = await Ledgis20lMiN.balanceOf.call(addresswR2TOoo, {from: accounts[3]});
//		const boolollKlJM = await Ledgis20lMiN.transfer.call(addressMn625me, uintKrHSaST, {from: accounts[4]});

		assert.equal(boolX8DcGSz, true)
		assert.equal(uint2564tOSbn, BigInt("0"))
		await expect(Ledgis20lMiN.transfer.call(addressMn625me, uintKrHSaST, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOfu9WH = await Ledgis.new({from: accounts[0]});
		const addressv2POeJJ = accounts[1]
		const addressFugni9x = "0x0000000000000000000000000000000000000001"
		const addressO8V9FI6 = accounts[2]
		const addressFZzEVk = "0x0000000000000000000000000000000000000001"
		const uint256VDKlRJg = await LedgisOfu9WH.lockCount.call(addressv2POeJJ, {from: accounts[2]});
		const uint256bXhJWFA = await LedgisOfu9WH.currentTime.call({from: accounts[4]});
		const addresspQhNTtV = await LedgisOfu9WH.transferOwnership.call(addressFugni9x, {from: accounts[0]});
//		const addressITKkedQ = await LedgisOfu9WH.transferOwnership.call(addressO8V9FI6, {from: accounts[4]});
//		const uint256M81eYqU = await LedgisOfu9WH.balanceOf.call(addressFZzEVk, {from: accounts[1]});

		assert.equal(uint256VDKlRJg, BigInt("0"))
		assert.equal(uint256bXhJWFA, BigInt("1630233290"))
		await expect(LedgisOfu9WH.transferOwnership.call(addressO8V9FI6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJEeQtaG = await Ledgis.new({from: accounts[3]});
		const uintKN3Hiod = BigInt("1475")
		const addressO48zIrb = accounts[2]
		const addressWdO5OK = accounts[4]
		const uintnyv8uDC = BigInt("2009")
		const addressKHfJbtW = accounts[4]
		const addressBD1nquQ = accounts[1]
		const addressixvQYF = accounts[5]
		const addressU4VFWoJ = accounts[2]
		const uintdk9upy = BigInt("1354")
		const addressw07ySjg = accounts[3]
		const addressgrN2P8 = accounts[4]
		const boolo6Yklmc = await LedgisJEeQtaG.approve.call(addressO48zIrb, uintKN3Hiod, {from: accounts[4]});
		const boolkSbA5s9 = await LedgisJEeQtaG.isFrozen.call(addressWdO5OK, {from: accounts[1]});
//		const boolFy34T3Q = await LedgisJEeQtaG.transferFrom.call(addressBD1nquQ, addressKHfJbtW, uintnyv8uDC, {from: accounts[0]});
//		const addresseBzknHa = await LedgisJEeQtaG.freeze.call(addressixvQYF, {from: accounts[3]});
//		const uint256F9zI8gU = await LedgisJEeQtaG.balanceOf.call(addressU4VFWoJ, {from: "0x0000000000000000000000000000000000000001"});
//		const bool8NTZ0x = await LedgisJEeQtaG.transfer.call(addressw07ySjg, uintdk9upy, {from: accounts[0]});
//		const uint256rIk20Q = await LedgisJEeQtaG.lockCount.call(addressgrN2P8, {from: accounts[0]});

		assert.equal(boolkSbA5s9, false)
		assert.equal(boolo6Yklmc, true)
		await expect(LedgisJEeQtaG.transferFrom.call(addressBD1nquQ, addressKHfJbtW, uintnyv8uDC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa6JEWDj = await Ledgis.new({from: accounts[2]});
		const uintEfw9t97 = BigInt("441")
		const addressWD1NI7 = accounts[0]
//		const addressowG1Pl1 = await Ledgisa6JEWDj.unlock.call(addressWD1NI7, uintEfw9t97, {from: accounts[2]});
//		await Ledgisa6JEWDj.whenNotFrozen.call({from: accounts[3]});

		await expect(Ledgisa6JEWDj.unlock.call(addressWD1NI7, uintEfw9t97, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const uintDmpQQeJ = BigInt("1345")
		const addressf09Xlcx = accounts[4]
		const uintNjAXakl = BigInt("434")
		const addressx2R1Xj = accounts[3]
		const addressAmHysg = accounts[2]
		const uintbTOvqer = BigInt("597")
		const addressljn9jPK = accounts[1]
		const addressGOBUj9l = accounts[5]
		const boolKi7q4E4 = await Ledgis20lMiN.mint.call(addressf09Xlcx, uintDmpQQeJ, {from: accounts[5]});
		const boolX8DcGSz = await Ledgis20lMiN.increaseAllowance.call(addressx2R1Xj, uintNjAXakl, {from: accounts[4]});
		const uint2564tOSbn = await Ledgis20lMiN.balanceOf.call(addressAmHysg, {from: accounts[3]});
//		const boolollKlJM = await Ledgis20lMiN.transfer.call(addressljn9jPK, uintbTOvqer, {from: accounts[4]});
//		const boolHndZ2bI = await Ledgis20lMiN.isFrozen.call(addressGOBUj9l, {from: accounts[4]});

		assert.equal(boolKi7q4E4, true)
		assert.equal(boolX8DcGSz, true)
		assert.equal(uint2564tOSbn, BigInt("0"))
		await expect(Ledgis20lMiN.transfer.call(addressljn9jPK, uintbTOvqer, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const uintfGNPXqa = BigInt("429")
		const addressssPaBOn = accounts[3]
		const uintHqA4ooa = BigInt("1411")
		const addressZhONnm = accounts[4]
		const addressTK8ge81 = accounts[3]
		const uintAgQ93wa = BigInt("597")
		const addressiMtFrhx = accounts[0]
		const boolX8DcGSz = await Ledgis20lMiN.increaseAllowance.call(addressssPaBOn, uintfGNPXqa, {from: accounts[4]});
//		await Ledgis20lMiN.unpause.call({from: accounts[5]});
//		await Ledgis20lMiN.lockState.call(addressZhONnm, uintHqA4ooa, {from: accounts[3]});
//		const uint2564tOSbn = await Ledgis20lMiN.balanceOf.call(addressTK8ge81, {from: accounts[3]});
//		const boolollKlJM = await Ledgis20lMiN.transfer.call(addressiMtFrhx, uintAgQ93wa, {from: accounts[4]});

		assert.equal(boolX8DcGSz, true)
		await expect(Ledgis20lMiN.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const uintIcrmY4r = BigInt("394")
		const addressUBY4MvZ = accounts[0]
		const uintZZtO9JH = BigInt("436")
		const addressgGhcfOe = accounts[3]
		const addressdwB9gQx = accounts[2]
		const uintSFhu8vH = BigInt("597")
		const addressfxQs5Hx = accounts[0]
//		const addressXgOglOq = await Ledgis20lMiN.burn.call(addressUBY4MvZ, uintIcrmY4r, {from: accounts[5]});
//		const boolX8DcGSz = await Ledgis20lMiN.increaseAllowance.call(addressgGhcfOe, uintZZtO9JH, {from: accounts[4]});
//		const uint2564tOSbn = await Ledgis20lMiN.balanceOf.call(addressdwB9gQx, {from: accounts[3]});
//		const boolollKlJM = await Ledgis20lMiN.transfer.call(addressfxQs5Hx, uintSFhu8vH, {from: accounts[4]});

		await expect(Ledgis20lMiN.burn.call(addressUBY4MvZ, uintIcrmY4r, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const uintvPnQCrf = BigInt("1159")
		const uintlFebAo = BigInt("1640")
		const addresskkeun7N = accounts[4]
		const uinth0RVUv2 = BigInt("514")
		const addressCB97fCH = accounts[2]
		const addresspmhEu1n = accounts[2]
		const uint256huvhgdT = await Ledgis20lMiN.afterTime.call(uintvPnQCrf, {from: accounts[0]});
		const bool4EC8je = await Ledgis20lMiN.increaseAllowance.call(addresskkeun7N, uintlFebAo, {from: accounts[4]});
//		const boolwuWKdT = await Ledgis20lMiN.transferFrom.call(addresspmhEu1n, addressCB97fCH, uinth0RVUv2, {from: accounts[1]});

		assert.equal(bool4EC8je, true)
		assert.equal(uint256huvhgdT, BigInt("1630234452"))
		await expect(Ledgis20lMiN.transferFrom.call(addresspmhEu1n, addressCB97fCH, uinth0RVUv2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisttvBSYc = await Ledgis.new({from: accounts[1]});
		const uintmntzTHn = BigInt("101")
		const addressRIMElGI = accounts[2]
		const addressc2gX8Y1 = "0x0000000000000000000000000000000000000001"
//		await LedgisttvBSYc.lockState.call(addressRIMElGI, uintmntzTHn, {from: accounts[3]});
//		const uint256s0NqGo = await LedgisttvBSYc.balanceOf.call(addressc2gX8Y1, {from: accounts[1]});
//		await LedgisttvBSYc.unpause.call({from: accounts[1]});
//		await LedgisttvBSYc.whenNotFrozen.call({from: accounts[0]});

		await expect(LedgisttvBSYc.lockState.call(addressRIMElGI, uintmntzTHn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const uintDDtCz5h = BigInt("429")
		const addressqRsoBiY = accounts[4]
		const addresscSTMgY5 = accounts[2]
		const uintYXG95Sa = BigInt("514")
		const uintg4CVKk1 = BigInt("1329")
		const addressgFXgx8u = accounts[5]
		const uintkLNWo8B = BigInt("597")
		const addressG2WJ235 = accounts[0]
		const boolX8DcGSz = await Ledgis20lMiN.increaseAllowance.call(addressqRsoBiY, uintDDtCz5h, {from: accounts[4]});
		const uint256eRQkgK = await Ledgis20lMiN.currentTime.call({from: accounts[3]});
		const uint2564tOSbn = await Ledgis20lMiN.balanceOf.call(addresscSTMgY5, {from: accounts[3]});
		const addresscDxOhWR = await Ledgis20lMiN.lockAfter.call(addressgFXgx8u, uintg4CVKk1, uintYXG95Sa, {from: accounts[5]});
//		const boolollKlJM = await Ledgis20lMiN.transfer.call(addressG2WJ235, uintkLNWo8B, {from: accounts[4]});

		assert.equal(boolX8DcGSz, true)
		assert.equal(uint2564tOSbn, BigInt("0"))
		assert.equal(uint256eRQkgK, BigInt("1630233309"))
		await expect(Ledgis20lMiN.transfer.call(addressG2WJ235, uintkLNWo8B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa6JEWDj = await Ledgis.new({from: accounts[2]});
		const addressKB5yiUQ = accounts[5]
		const addressgIu3BNq = accounts[3]
		const uintvjxnYtY = BigInt("441")
		const addressw3AutPk = accounts[0]
		const uint256IqOc7JP = await Ledgisa6JEWDj.allowance.call(addressgIu3BNq, addressKB5yiUQ, {from: accounts[3]});
//		const addressowG1Pl1 = await Ledgisa6JEWDj.unlock.call(addressw3AutPk, uintvjxnYtY, {from: accounts[2]});

		assert.equal(uint256IqOc7JP, BigInt("0"))
		await expect(Ledgisa6JEWDj.unlock.call(addressw3AutPk, uintvjxnYtY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa6JEWDj = await Ledgis.new({from: accounts[2]});
		const uinteRnkiuH = BigInt("470")
		const uintKdr9Nr = BigInt("1506")
		const addressIpyeLw = accounts[0]
		const uintWRtWbxg = BigInt("425")
		const addresskwiTQsP = accounts[0]
		const uintffvRef6 = BigInt("1259")
		const addressFi61pm = "0x0000000000000000000000000000000000000001"
		const boolotJ9ABs = await Ledgisa6JEWDj.transferWithLockAfter.call(addressIpyeLw, uintKdr9Nr, uinteRnkiuH, {from: accounts[2]});
//		const addressowG1Pl1 = await Ledgisa6JEWDj.unlock.call(addresskwiTQsP, uintWRtWbxg, {from: accounts[2]});
//		await Ledgisa6JEWDj.pause.call({from: accounts[0]});
//		await Ledgisa6JEWDj.whenNotFrozen.call({from: accounts[3]});
//		await Ledgisa6JEWDj.whenNotPaused.call({from: accounts[3]});
//		const boolxG7Wk5m = await Ledgisa6JEWDj.mint.call(addressFi61pm, uintffvRef6, {from: accounts[2]});

		assert.equal(boolotJ9ABs, true)
		await expect(Ledgisa6JEWDj.unlock.call(addresskwiTQsP, uintWRtWbxg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const addressvpMAd6W = accounts[2]
		const uintVlrLCt = BigInt("598")
		const addressMmRvqm = accounts[0]
		const addressqDIH0cX = await Ledgis20lMiN.unfreeze.call(addressvpMAd6W, {from: accounts[5]});
//		await Ledgis20lMiN.renounceOwnership.call({from: accounts[1]});
//		const boolollKlJM = await Ledgis20lMiN.transfer.call(addressMmRvqm, uintVlrLCt, {from: accounts[4]});

		await expect(Ledgis20lMiN.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisIiGLJ7r = await Ledgis.new({from: accounts[4]});
		const addressefp78he = accounts[2]
		const addressgedbPKp = accounts[2]
		const uintSyiycGg = BigInt("1356")
		const uintXJrFAja = BigInt("747")
		const addressCX87wNs = accounts[3]
		const uintIaMnRHj = BigInt("829")
		const addressDf5r5Pm = accounts[3]
		const uintcCnUqsT = BigInt("1549")
		const addressmchsa8 = accounts[2]
		const uint256e6ZCyFn = await LedgisIiGLJ7r.allowance.call(addressgedbPKp, addressefp78he, {from: "0x0000000000000000000000000000000000000001"});
//		await LedgisIiGLJ7r.pause.call({from: accounts[4]});
//		const booldvLalJ8 = await LedgisIiGLJ7r.transferWithLock.call(addressCX87wNs, uintXJrFAja, uintSyiycGg, {from: accounts[0]});
//		const boolGX0j9Tj = await LedgisIiGLJ7r.transfer.call(addressDf5r5Pm, uintIaMnRHj, {from: accounts[5]});
//		const boolzqXiJau = await LedgisIiGLJ7r.approve.call(addressmchsa8, uintcCnUqsT, {from: accounts[2]});

		assert.equal(uint256e6ZCyFn, BigInt("0"))
		await expect(LedgisIiGLJ7r.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisa6JEWDj = await Ledgis.new({from: accounts[2]});
		const uintqBnBuRO = BigInt("441")
		const addresseVs6tHK = accounts[1]
//		await Ledgisa6JEWDj.renounceOwnership.call({from: accounts[2]});
//		const addressowG1Pl1 = await Ledgisa6JEWDj.unlock.call(addresseVs6tHK, uintqBnBuRO, {from: accounts[2]});

		await expect(Ledgisa6JEWDj.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const address9Mib9N = accounts[2]
		const uintXjg7H1O = BigInt("429")
		const addressIv0z2Rp = accounts[4]
		const uintaIGzHUl = BigInt("1972")
		const addressFDF6aIf = accounts[2]
		const addressfWh09HA = accounts[0]
		const addressDfNlXjF = accounts[2]
		const uintRmv3u2O = BigInt("1106")
		const addressh2Ockip = accounts[4]
		const addressiyBLatS = accounts[5]
		const uintYoiTTxe = BigInt("597")
		const addresseHcjyQt = accounts[1]
		const addresswKWisVs = await Ledgis20lMiN.freeze.call(address9Mib9N, {from: accounts[5]});
		const boolX8DcGSz = await Ledgis20lMiN.increaseAllowance.call(addressIv0z2Rp, uintXjg7H1O, {from: accounts[4]});
		const bool0KjVtw = await Ledgis20lMiN.approve.call(addressFDF6aIf, uintaIGzHUl, {from: accounts[2]});
		const boolnbuHIXe = await Ledgis20lMiN.isFrozen.call(addressfWh09HA, {from: accounts[4]});
		const uint2564tOSbn = await Ledgis20lMiN.balanceOf.call(addressDfNlXjF, {from: accounts[3]});
//		const boolA5ySlJj = await Ledgis20lMiN.transferFrom.call(addressiyBLatS, addressh2Ockip, uintRmv3u2O, {from: accounts[0]});
//		const boolollKlJM = await Ledgis20lMiN.transfer.call(addresseHcjyQt, uintYoiTTxe, {from: accounts[4]});
//		await Ledgis20lMiN.whenNotPaused.call({from: accounts[0]});

		assert.equal(bool0KjVtw, true)
		assert.equal(boolX8DcGSz, true)
		assert.equal(boolnbuHIXe, false)
		assert.equal(uint2564tOSbn, BigInt("0"))
		await expect(Ledgis20lMiN.transferFrom.call(addressiyBLatS, addressh2Ockip, uintRmv3u2O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis20lMiN = await Ledgis.new({from: accounts[5]});
		const addresspy0Cj9R = accounts[3]
		const uintYKrECm = BigInt("2038")
		const uintSIhrsAl = BigInt("1698")
		const addressHNiWB5Z = accounts[0]
		const addressBMbxSEW = "0x0000000000000000000000000000000000000001"
		const uint2564tOSbn = await Ledgis20lMiN.balanceOf.call(addresspy0Cj9R, {from: accounts[3]});
//		const addressr8J8k2m = await Ledgis20lMiN.lock.call(addressHNiWB5Z, uintSIhrsAl, uintYKrECm, {from: accounts[5]});
//		const addressOHvQhH2 = await Ledgis20lMiN.transferOwnership.call(addressBMbxSEW, {from: accounts[3]});
//		await Ledgis20lMiN.pause.call({from: accounts[0]});

		assert.equal(uint2564tOSbn, BigInt("0"))
		await expect(Ledgis20lMiN.lock.call(addressHNiWB5Z, uintSIhrsAl, uintYKrECm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})