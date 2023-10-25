const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringfPukyXg = "iw2wA5E25fwocaRCTYR8A22IC5t8CendzYUdQ"
		const stringtaImLRD = "dye2xr1gjaDWm1lQWBuHbn6HUWvGPY0zwyTfPliUbPnbWgM"
		const uintG119RYt = BigInt("120")
		const LUPugQfS9S = await LUP.new(stringfPukyXg, stringtaImLRD, uintG119RYt, {from: accounts[4]});
		const address1WwqQx = accounts[4]
		const uintLNAYUnI = BigInt("1530")
		const uintzfGpNPq = BigInt("1464")
		const addressH65YWV8 = accounts[5]
		const uint256j8xLsth = await LUPugQfS9S.balanceOf.call(address1WwqQx, {from: accounts[3]});
		const stringHOMkqB = await LUPugQfS9S.symbol.call({from: accounts[0]});
		const boolDyOIfFh = await LUPugQfS9S.transferWithLock.call(addressH65YWV8, uintzfGpNPq, uintLNAYUnI, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPnjCsa6 = await LUP.new({from: accounts[5]});
		const uintLOoa1YA = BigInt("1378")
		const addresszMEyh1 = accounts[3]
		const uintraOSqE = BigInt("896")
		const uintcUWg0Wn = BigInt("404")
		const addressKJHIOxZ = accounts[0]
		const boolFZ2MS7L = true
		const addressQdeufzs = accounts[3]
//		const booleKdDJWY = await LUPnjCsa6.unlock.call(addresszMEyh1, uintLOoa1YA, {from: accounts[3]});
//		const boolHIXEQdm = await LUPnjCsa6.transferWithLock.call(addressKJHIOxZ, uintcUWg0Wn, uintraOSqE, {from: accounts[1]});
//		const boolytURYii = await LUPnjCsa6.freezeAccount.call(addressQdeufzs, boolFZ2MS7L, {from: accounts[3]});
//		const stringxPZHdQj = await LUPnjCsa6.name.call({from: accounts[1]});

		await expect(LUPnjCsa6.unlock.call(addresszMEyh1, uintLOoa1YA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPBjadY6l = await LUP.new({from: accounts[3]});
		const uintEMFe1iB = BigInt("746")
		const uintUF0Vwk = BigInt("1356")
		const addresscolND4y = accounts[1]
		const uintJ6HOvML = BigInt("1731")
		const address9sxOpw = accounts[3]
		const stringpGp5L9R = await LUPBjadY6l.symbol.call({from: accounts[1]});
//		const boolLHYvj9R = await LUPBjadY6l.lock.call(addresscolND4y, uintUF0Vwk, uintEMFe1iB, {from: accounts[0]});
//		const boolnJyAkx1 = await LUPBjadY6l.unlock.call(address9sxOpw, uintJ6HOvML, {from: accounts[0]});

		assert.equal(stringpGp5L9R, "LUP")
		await expect(LUPBjadY6l.lock.call(addresscolND4y, uintUF0Vwk, uintEMFe1iB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const addresswpfQ3bX = accounts[3]
		const uint8EAVf3vE = await LUPM5UyhZ7.decimals.call({from: accounts[4]});
		const uint256s90JAKo = await LUPM5UyhZ7.balanceOf.call(addresswpfQ3bX, {from: accounts[0]});
		const uint8TYMAMbQ = await LUPM5UyhZ7.decimals.call({from: accounts[3]});

		assert.equal(uint256s90JAKo, BigInt("0"))
		assert.equal(uint8EAVf3vE, BigInt("18"))
		assert.equal(uint8TYMAMbQ, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const addressRpEg2Ta = accounts[5]
		const uintTwczQ8i = BigInt("259")
		const addresshw0LPoz = accounts[5]
		const uint8EAVf3vE = await LUPM5UyhZ7.decimals.call({from: accounts[4]});
		const stringn2DBkAs = await LUPM5UyhZ7.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256s90JAKo = await LUPM5UyhZ7.balanceOf.call(addressRpEg2Ta, {from: accounts[0]});
		const boolwnfgkMR = await LUPM5UyhZ7.transfer.call(addresshw0LPoz, uintTwczQ8i, {from: accounts[4]});

		assert.equal(boolwnfgkMR, true)
		assert.equal(stringn2DBkAs, "LUP")
		assert.equal(uint256s90JAKo, BigInt("0"))
		assert.equal(uint8EAVf3vE, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const addressCxYmnpF = "0x0000000000000000000000000000000000000001"
		const uintrWANrh = BigInt("530")
		const addressBwVaUPg = accounts[2]
		const uint256zn62nSF = await LUPM5UyhZ7.balanceOf.call(addressCxYmnpF, {from: accounts[2]});
//		const booltfxzns3 = await LUPM5UyhZ7.transfer.call(addressBwVaUPg, uintrWANrh, {from: accounts[5]});
//		const stringffW9be = await LUPM5UyhZ7.symbol.call({from: accounts[1]});

		assert.equal(uint256zn62nSF, BigInt("0"))
		await expect(LUPM5UyhZ7.transfer.call(addressBwVaUPg, uintrWANrh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const addressadfH4k = accounts[5]
		const addressYGn6tni = accounts[3]
		const uint256s90JAKo = await LUPM5UyhZ7.balanceOf.call(addressadfH4k, {from: accounts[0]});
//		const addressg5odUEh = await LUPM5UyhZ7.upgradeTo.call(addressYGn6tni, {from: accounts[1]});

		assert.equal(uint256s90JAKo, BigInt("0"))
		await expect(LUPM5UyhZ7.upgradeTo.call(addressYGn6tni, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const addresstgcXJUy = accounts[1]
		const addresssbstROD = accounts[5]
		const uintNGnQmq = BigInt("259")
		const addressTMj4Oxk = accounts[6]
		const uint8EAVf3vE = await LUPM5UyhZ7.decimals.call({from: accounts[4]});
//		const addressq9pKCfg = await LUPM5UyhZ7.notFrozen.call(addresstgcXJUy, {from: accounts[4]});
//		const stringn2DBkAs = await LUPM5UyhZ7.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256s90JAKo = await LUPM5UyhZ7.balanceOf.call(addresssbstROD, {from: accounts[0]});
//		const boolwnfgkMR = await LUPM5UyhZ7.transfer.call(addressTMj4Oxk, uintNGnQmq, {from: accounts[4]});

		assert.equal(uint8EAVf3vE, BigInt("18"))
		await expect(LUPM5UyhZ7.notFrozen.call(addresstgcXJUy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const uintbqRDDO = BigInt("1241")
		const uintzwGmgj = BigInt("136")
		const address5gr6BJ = accounts[4]
		const addressusd3OT = accounts[4]
		const boolF8FkQ3y = await LUPM5UyhZ7.transferWithLock.call(address5gr6BJ, uintzwGmgj, uintbqRDDO, {from: accounts[4]});
		const uint256s90JAKo = await LUPM5UyhZ7.balanceOf.call(addressusd3OT, {from: accounts[0]});

		assert.equal(boolF8FkQ3y, true)
		assert.equal(uint256s90JAKo, BigInt("50000000000000000000000000"))
	});

	it('test for LUP', async () => {
		const LUPEL6Pf4C = await LUP.new({from: accounts[1]});
		const boolxHqjOOH = true
		const addressMVMI5R = accounts[0]
		const uintTy5eNXB = BigInt("276")
		const uintoHv32j6 = BigInt("956")
		const addresssUIvdmM = accounts[1]
		const uintaFoycRc = BigInt("67")
		const addressZB2WrnL = accounts[2]
		const boolViai0p1 = await LUPEL6Pf4C.freezeAccount.call(addressMVMI5R, boolxHqjOOH, {from: accounts[1]});
//		const boolqFGQI8K = await LUPEL6Pf4C.transferWithLock.call(addresssUIvdmM, uintoHv32j6, uintTy5eNXB, {from: accounts[0]});
//		const boolyqyWLOK = await LUPEL6Pf4C.transfer.call(addressZB2WrnL, uintaFoycRc, {from: accounts[3]});
//		const stringNke7gSO = await LUPEL6Pf4C.symbol.call({from: accounts[1]});

		assert.equal(boolViai0p1, true)
		await expect(LUPEL6Pf4C.transferWithLock.call(addresssUIvdmM, uintoHv32j6, uintTy5eNXB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const uintrgmmjfh = BigInt("1810")
		const addressm5YzXiX = accounts[0]
		const addressxxv2wx = accounts[5]
		const uint8zCZLuec = await LUPM5UyhZ7.decimals.call({from: accounts[4]});
//		const boolAVq0pUV = await LUPM5UyhZ7.unlock.call(addressm5YzXiX, uintrgmmjfh, {from: accounts[4]});
//		const uint256s90JAKo = await LUPM5UyhZ7.balanceOf.call(addressxxv2wx, {from: accounts[0]});
//		const uint8os9JExV = await LUPM5UyhZ7.decimals.call({from: accounts[3]});

		assert.equal(uint8zCZLuec, BigInt("18"))
		await expect(LUPM5UyhZ7.unlock.call(addressm5YzXiX, uintrgmmjfh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const addressdDSwoMs = accounts[5]
		const uintAk824z = BigInt("1774")
		const uinteQDXGjY = BigInt("101")
		const addressnbxHQ2 = accounts[3]
		const addressMQnMLtv = accounts[1]
		const uint256s90JAKo = await LUPM5UyhZ7.balanceOf.call(addressdDSwoMs, {from: accounts[0]});
//		const booltyc7r7o = await LUPM5UyhZ7.lock.call(addressnbxHQ2, uinteQDXGjY, uintAk824z, {from: accounts[4]});
//		const addresskjMeBcj = await LUPM5UyhZ7.notFrozen.call(addressMQnMLtv, {from: accounts[1]});

		assert.equal(uint256s90JAKo, BigInt("0"))
		await expect(LUPM5UyhZ7.lock.call(addressnbxHQ2, uinteQDXGjY, uintAk824z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const uintHpjXcJX = BigInt("1580")
		const addresssMSlxRq = accounts[1]
		const stringrjTExTY = await LUPM5UyhZ7.name.call({from: accounts[2]});
		const boolTr6KScR = await LUPM5UyhZ7.transfer.call(addresssMSlxRq, uintHpjXcJX, {from: accounts[4]});

		assert.equal(boolTr6KScR, true)
		assert.equal(stringrjTExTY, "LINKUP Token")
	});

	it('test for LUP', async () => {
		const LUPutSdu7b = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const boolS0rdebc = true
		const addressCIoF4HC = accounts[3]
		const boolF6uuhyv = false
		const addressw9gPSeO = accounts[4]
		const boolXjSxFb = await LUPutSdu7b.freezeAccount.call(addressCIoF4HC, boolS0rdebc, {from: accounts[2]});
		const uint8NFV0nq = await LUPutSdu7b.decimals.call({from: accounts[3]});
		const boolZJNwQE = await LUPutSdu7b.freezeAccount.call(addressw9gPSeO, boolF6uuhyv, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LUP', async () => {
		const LUPLppbHPh = await LUP.new({from: accounts[2]});
		const addressZOIGxyt = accounts[5]
		const uint8U7fW5cx = await LUPLppbHPh.decimals.call({from: accounts[0]});
		const addressTU0MlCh = await LUPLppbHPh.upgradeTo.call(addressZOIGxyt, {from: accounts[2]});

		assert.equal(uint8U7fW5cx, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPM5UyhZ7 = await LUP.new({from: accounts[4]});
		const addressuV5cX05 = accounts[5]
		const uintHCwXaDV = BigInt("1398")
		const uintchQ3wC6 = BigInt("1164")
		const addressLtVAAtJ = accounts[4]
		const uint256s90JAKo = await LUPM5UyhZ7.balanceOf.call(addressuV5cX05, {from: accounts[0]});
		const boolVDaQHwJ = await LUPM5UyhZ7.lock.call(addressLtVAAtJ, uintchQ3wC6, uintHCwXaDV, {from: accounts[4]});

		assert.equal(boolVDaQHwJ, true)
		assert.equal(uint256s90JAKo, BigInt("0"))
	});
})